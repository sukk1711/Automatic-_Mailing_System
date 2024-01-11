function sendEmail() {
    const recipient = document.getElementById('recipient').value;
    const subject = document.getElementById('subject').value;
    const content = document.getElementById('content').value;

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recipient, subject, content }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
