// ----- Language toggle -----
const body = document.body;
const btnPt = document.getElementById('btn-pt');
const btnEn = document.getElementById('btn-en');

function setLang(lang){
  body.classList.remove('lang-en','lang-pt');
  body.classList.add('lang-' + lang);
  document.documentElement.lang = lang;
  btnPt.classList.toggle('active', lang === 'pt');
  btnEn.classList.toggle('active', lang === 'en');
  localStorage.setItem('site-lang', lang);
}

btnPt.addEventListener('click', () => setLang('pt'));
btnEn.addEventListener('click', () => setLang('en'));

// Load saved language, or detect browser language
const saved = localStorage.getItem('site-lang');
if(saved){
  setLang(saved);
} else {
  const browserLang = navigator.language.startsWith('pt') ? 'pt' : 'en';
  setLang(browserLang);
}

// ----- Mobile menu toggle -----
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
menuToggle.addEventListener('click', () => mainNav.classList.toggle('open'));

// Close menu when a link is clicked (mobile)
document.querySelectorAll('#main-nav a').forEach(link=>{
  link.addEventListener('click', ()=> mainNav.classList.remove('open'));
});
