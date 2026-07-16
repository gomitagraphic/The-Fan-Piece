document.addEventListener("DOMContentLoaded", () => {
    const hearts = document.querySelectorAll('.icon-heart');
    hearts.forEach(heart => {
        heart.style.cursor = 'pointer';
        heart.addEventListener('click', () => {
            if (heart.textContent === '❤️') {
                heart.textContent = '💖';
                heart.style.transform = 'scale(1.2)';
                heart.style.display = 'inline-block';
                heart.style.transition = 'transform 0.2s';
            } else {
                heart.textContent = '❤️';
                heart.style.transform = 'scale(1)';
            }
        });
    });
    const blogItems = document.querySelectorAll('.blog-item');
    blogItems.forEach(item => {
        const input = item.querySelector('.blog-input-box input');
        const button = item.querySelector('.blog-input-box button');
        const commentsContainer = item.querySelector('.blog-comments');
        const agregarComentario = () => {
            const texto = input.value.trim();

            if (texto !== "") {
                const nuevoComentario = document.createElement('p');
                nuevoComentario.innerHTML = `<strong>@ANONIMO:</strong> ${texto.toUpperCase()}`;
                
                commentsContainer.appendChild(nuevoComentario);
                input.value = "";
                commentsContainer.scrollTop = commentsContainer.scrollHeight;
            }
        };
        button.addEventListener('click', agregarComentario);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                agregarComentario();
            }
        });
    });
});