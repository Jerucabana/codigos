document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('messageInput') as HTMLTextAreaElement;
    const encodeButton = document.getElementById('encodeButton') as HTMLButtonElement;

    encodeButton.addEventListener('click', function() {
        const message = messageInput.value;
        console.log('Mensagem digitada:', message);
        // Aqui você pode fazer o que quiser com a mensagem, como codificação, etc.
    });
});