async function obterConselho() {
    const conselho = document.getElementById('conselho');

    try {
        const response = await fetch('https://api.adviceslip.com/advice');

        if (!response.ok) {
            throw new Error ('Erro ao buscar seu conselho fodástico');

        }

        const data = await response.json();
        const english = data.slip.advice;
        const translate = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(english)}&langpair=en|pt-BR
        `);
        const traducao = await translate.json();
        const br = traducao.responseData.translatedText;
        conselho.innerHTML = `<p>${br}</p>`;

    } catch (error) {
        adviceText.textContent = error.message;
    }
}