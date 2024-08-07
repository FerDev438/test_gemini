document.getElementById('chat-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    if (!message) return;

    const chatbox = document.getElementById('chatbox');
    chatbox.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
    messageInput.value = '';

    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });
        const data = await response.json();
        chatbox.innerHTML += `<div><strong>Cici:</strong> ${data.response}</div>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    } catch (error) {
        console.error('Error:', error);
        chatbox.innerHTML += `<div><strong>Error:</strong> Failed to get a response</div>`;
    }
});
