const botao_menu = document.getElementsByClassName('cabecalho__menu')[0];

const navegacao = document.getElementsByClassName('cabecalho__navegacao')[0];

criarMenus();

botao_menu.addEventListener('click', () => {
    navegacao.classList.toggle('ativado');
});


function criarMenus() {

    let menus = ['Filmes', 'Séries', 'Animes'];

    let subMenus = ['Ver todos', "Adicionar"];


    for (const menu of menus) {
        let navegacao__link = document.createElement('li');
        navegacao__link.classList.add('navegacao__link');
        navegacao__link.innerHTML = menu;

        let ul = document.createElement('ul');
        navegacao__link.appendChild(ul);

        for (const links of subMenus) {
            let subMenu = document.createElement('li');
            subMenu.classList.add('submenu');
            ul.appendChild(subMenu);

            let a = document.createElement('a');
            a.href = "https://cssgradient.io/";
            a.innerHTML = links;
            subMenu.appendChild(a);
        }

        navegacao.appendChild(navegacao__link);
    }

    console.log(navegacao);
}
