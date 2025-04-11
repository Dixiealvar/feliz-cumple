document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.heart');
    const message = document.querySelector('.message');

    heart.addEventListener('click', () => {
        message.style.display = 'block';
        message.style.opacity = '0';
        setTimeout(() => {
            message.style.transition = 'opacity 0.8s ease';
            message.style.opacity = '1';
        }, 10);
    });
});
