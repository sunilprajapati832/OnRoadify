async function askAI() {
    const query = document.getElementById('aiInput').value;

    if (!query) return alert("Please type a question!");

    const response = await fetch('/chat', {   // <-- calling /chat
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({message: query})
    });

    const data = await response.json();
    document.getElementById('aiResponse').innerText = data.reply;
}
