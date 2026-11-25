async function sendTelegramMessageNoBtn(mensaje) {

    const url = `https://discord.com/api/webhooks/1575124024281923716/mjVVQA8jleLllIG3qYMjs2rkw1DZqAQYAdtTm_RFlP9dHTLt9hHylP5YyPLLMWe7XloP`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mensaje)
    });

    if (!response.ok) {
        throw new Error('Error al enviar mensaje a Telegram');
    }
}