const btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', () => {
  const hero = document.querySelector('.hero.container');
  hero.style.display = 'none';

  const produtos = document.querySelectorAll('.produtos.container');
  produtos.forEach(produto => {
    produto.style.display = 'none';
  });

  document.querySelector('.login.container').style.display = 'block';

  btnLogin.style.display = 'none';
});

const btnHome = document.querySelector('.cabecalho__logo');
btnHome.addEventListener('click', () => {
  const hero = document.querySelector('.hero.container');
  hero.style.display = 'block';

  const produtos = document.querySelectorAll('.produtos.container');
  produtos.forEach(produto => {
    produto.style.display = 'block';
  });

  document.querySelector('.login.container').style.display = 'none';

  btnLogin.style.display = 'block';
});