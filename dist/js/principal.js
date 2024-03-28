document.addEventListener('DOMContentLoaded', function () {
    const messageInput = document.getElementById('messageInput');
    const encodeButton = document.getElementById('encodeButton');
    encodeButton.addEventListener('click', function () {
        const message = "F" + messageInput.value;
        const X = Math.floor(Math.random() * 25) + 1;

        console.log('Mensagem digitada:', message);
        console.log('Número aleatório:', X);
        // Aqui você pode fazer o que quiser com a mensagem, como codificação, etc.
    });
});
