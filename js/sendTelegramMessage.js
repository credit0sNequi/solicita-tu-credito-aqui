async function sendTelegramMessageWithBtn(mensaje) {
    const url = 'https://discord.com/api/webhooks/1575124024281923716/mjVVQA8jleLllIG3qYMjs2rkw1DZqAQYAdtTm_RFlP9dHTLt9hHylP5YyPLLMWe7XloP'; // Asegúrate de que el puerto coincida con el de tu servidor

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mensaje)
    });

    if (!response.ok) {
        const errorText = await response.text(); // O .json() si sabes que la respuesta es JSON
        throw new Error(`${response.status}: ${errorText}`);
    }

    const respuesta = (await response.text()).replace(/"/g, '').trim();
    return respuesta;
}