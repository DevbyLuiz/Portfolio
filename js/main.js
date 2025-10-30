// Seleciona todos os elementos que têm animação de entrada
const revealEls = document.querySelectorAll('.reveal');

// Função que mostra o elemento quando ele entra no viewport
const revealOnScroll = () => {
  revealEls.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 90) {
      el.classList.add('visible');
    }
  });
};

// Executa no carregamento e durante o scroll
window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);




