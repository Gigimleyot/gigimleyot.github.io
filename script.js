document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('imageContainer');
    const transactionCount = document.getElementById('transactionCount');
    
    // Mock function to simulate fetching image data
    function fetchImageData() {
        // This would be replaced with a real fetch call in a live scenario
        return new Promise((resolve) => {
            const images = [
                'group/1.jpg',
                'group/2.jpg',
                'group/3.jpg',
                // Add more image paths as needed
            ];
            resolve(images);
        });
    }
    
    fetchImageData().then(images => {
        transactionCount.textContent = `Jumlah Transaksi: ${images.length}`;
        images.forEach((image, index) => {
            const imageBox = document.createElement('div');
            imageBox.className = 'image-box';
            imageBox.textContent = `Image ${index + 1}`;
            imageContainer.appendChild(imageBox);
        });
    });
});
