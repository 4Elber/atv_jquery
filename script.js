$(document).ready(function() {
    let currentIndex = 0; // Índice da imagem atual
    let images = $('.thumbnails img'); // Lista de imagens

    function showImage(index) {
        let imgSrc = $(images[index]).attr('src'); // Pega a URL da imagem
        $('#fullImage').attr('src', imgSrc); // Atualiza o modal
        $('.modal').fadeIn(); // Mostra o modal
    }

    // Quando uma miniatura for clicada
    $('.thumbnails img').on('click', function() {
        currentIndex = images.index(this); // Obtém o índice da imagem clicada
        showImage(currentIndex);
    });

    // Fechar o modal ao clicar no botão "X"
    $('.close').on('click', function() {
        $('.modal').fadeOut();
    });

    // Fechar o modal ao clicar fora da imagem
    $('.modal').on('click', function(e) {
        if (!$(e.target).is('#fullImage') && !$(e.target).is('.prev') && !$(e.target).is('.next')) {
            $(this).fadeOut();
        }
    });

    // Função para navegar para a próxima imagem
    $('.next').on('click', function() {
        currentIndex = (currentIndex + 1) % images.length; // Avança e reinicia no fim
        showImage(currentIndex);
    });

    // Função para navegar para a imagem anterior
    $('.prev').on('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Volta e reinicia no começo
        showImage(currentIndex);
    });

    // Navegação com teclado (setas do teclado)
    $(document).on('keydown', function(e) {
        if ($('.modal').is(':visible')) {
            if (e.key === 'ArrowRight') {
                $('.next').click(); // Simula clique na seta direita
            } else if (e.key === 'ArrowLeft') {
                $('.prev').click(); // Simula clique na seta esquerda
            } else if (e.key === 'Escape') {
                $('.modal').fadeOut(); // Fecha o modal ao apertar ESC
            }
        }
    });
});