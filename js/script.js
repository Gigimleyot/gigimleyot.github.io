document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    const imageFolderPath = 'assets/images/';

    fetchImages();

    function fetchImages() {
        // Fetch the list of images from the server (assumed JSON format for this example)
        fetch(imageFolderPath)
            .then(response => response.json())
            .then(images => {
                images.forEach(image => {
                    const imgElement = document.createElement('img');
                    imgElement.src = `${imageFolderPath}${image}`;
                    gallery.appendChild(imgElement);
                });
            })
            .catch(error => console.error('Error loading images:', error));
    }
});
