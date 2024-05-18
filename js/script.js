// Ambil elemen modal
const modal = document.getElementById("preview-modal");
const modalImg = document.getElementById("preview-image");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

// Fungsi untuk menampilkan modal dengan gambar yang di klik
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Fungsi untuk menutup modal ketika tombol "close" di klik
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Fungsi untuk menutup modal ketika klik di luar gambar
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
