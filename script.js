// Abre a modal e define o link do vídeo
function openModal(videoUrl) {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = videoUrl;
    modal.style.display = 'block';
}

// Fecha a modal e limpa o vídeo
function closeModal() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = '';
    modal.style.display = 'none';
}
