const sideImage = document.querySelectorAll('.detail-side img');
const mainImage = document.querySelector('.detail-main img');

sideImage.forEach(image => {
    image.addEventListener('click', function() {
        mainImage.classList.replace('opacity-1', 'opacity-0');
        setTimeout(function() {
            mainImage.src = image.src;
            mainImage.classList.replace('opacity-0', 'opacity-1');
        }, 300);
    });
    
});