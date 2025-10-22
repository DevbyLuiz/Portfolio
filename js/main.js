// ==== Scroll suave ====
document.querySelectorAll('header nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// ==== Fade-in seções ====
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      entry.target.classList.remove('invisible');
    } else {
      entry.target.classList.remove('fade-in');
      entry.target.classList.add('invisible');
    }
  });
}, { threshold: 0.18 });

sections.forEach(section => {
  section.classList.add('invisible');
  observer.observe(section);
});

// ==== Voltar ao topo ====
const btnTopo = document.getElementById('voltar-topo');
if (btnTopo) {
  btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    const footer = document.querySelector('footer');
    const offset = 40; // distância mínima acima do footer
    const scrollY = window.scrollY + window.innerHeight;
    const footerTop = footer.offsetTop;

    // só mostrar botão se não estiver no topo e não sobrepor o footer
    if (window.scrollY > 100 && scrollY < footerTop - offset) {
      btnTopo.classList.add('show');
    } else {
      btnTopo.classList.remove('show');
    }
  });
}

// ==== Expandir currículo ====
const curriculoCards = document.querySelectorAll('.curriculo-card');
if (curriculoCards.length) {
  curriculoCards.forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('expanded'));
  });
}

// ==== MENU HAMBÚRGUER MOBILE ====
const nav = document.querySelector('header nav');
const menu = nav.querySelector('ul');

// Criar botão hambúrguer dinamicamente
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.setAttribute('aria-label', 'Abrir menu');
hamburger.setAttribute('role', 'button');
hamburger.innerHTML = '<span></span><span></span><span></span>';
nav.appendChild(hamburger);

// Abrir/fechar menu ao clicar
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('show');
});

// Fechar menu ao clicar em um link (mobile)
menu.querySelectorAll('li a').forEach(link => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
      hamburger.classList.remove('active');
    }
  });
});



