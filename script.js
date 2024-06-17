document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.banner .slider .item img');
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const popupClose = document.querySelector('.popup-close');

    items.forEach(img => {
        img.addEventListener('click', () => {
            popup.style.display = 'block';
            popupImg.src = img.src;
            document.body.style.filter = 'blue(5px)';


            setTimeout(() => {
                popup.classList.add('show');
            }, 10);
        });
    });

    popupClose.addEventListener('click', () => {
        popup.classList.remove('show');
        setTimeout(() => {
            popup.style.display = 'none';
            document.body.style.filter = 'none';
        }, 300);
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.remove('show');
            setTimeout(() => {
                popup.style.display = 'none';
                document.body.style.filter = 'none';
            }, 300);
        }
    });
});
