const botao_menu = document.getElementsByClassName('cabecalho__menu')[0];

const navegacao = document.getElementsByClassName('cabecalho__navegacao')[0];

botao_menu.addEventListener('click', () => {
    navegacao.classList.toggle('ativado');
});

