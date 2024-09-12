export async function translate(text) {
    const mmKey = '51427127010d6a0696d9';
    const url = `https://api.mymemory.translated.net/get?q=${text}&key=${mmKey}&langpair=en|ru`;
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result.responseData.translatedText;
    } catch (error) {
        console.error("Ошибка перевода: ", error.message);
        return text;
    }
}