document.addEventListener("DOMContentLoaded",
    function (){
        const messageInput = 
        document.getElementById('message-input');
        const sendButton = 
        document.getElementById('send-button');
        const chatMessages = 
        document.getElementById('chat-messages');

        sendButton.addEventListener('click', function(){
            const message = messageInput.ariaValueMax.trim();
            if (message !=='') {
                appendMessage('You', message);
                messageInput.value = '';
                messageInput.focus();
            }
        });

        function appendmessage(sender, message) {
const messageElement = 
document.createElement('div');
messageElement.classList.add('message');
messageElement.innerHTML = <strong>
    ${sender},${message};
</strong> 
chatMessages.appendChild(messageElement);
//scroll to bottom
chatMessages.scrollTop = chatmessages.scrollHeight;
        }
    })

    




