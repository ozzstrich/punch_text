let isMuted = false;

function addMessage() {
    const input = document.getElementById('coolInput');
    const messageContainer = document.getElementById('messageContainer');
    const dingSound = document.getElementById('dingSound');

    if (input.value.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = input.value;

        messageContainer.insertBefore(messageElement, messageContainer.firstChild);

        input.value = '';

        if (!isMuted) {
            dingSound.play();
        }

        if (messageContainer.children.length > 9) {
            messageContainer.removeChild(messageContainer.lastChild);
        }
    }
}

function toggleMute() {
    const muteButton = document.getElementById('muteButton');
    const icon = muteButton.querySelector('i');
    
    isMuted = !isMuted;
    
    if (isMuted) {
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-volume-mute');
    } else {
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume-up');
    }
}