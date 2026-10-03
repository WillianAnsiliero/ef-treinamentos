'use strict';
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.navigation');
function closeMenu() { menu.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Abrir menu'); }
menuButton.addEventListener('click', () => { const open = menu.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); });
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if(event.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); menuButton.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
const courseCards = [...document.querySelectorAll('.course-card')];
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(filter => { filter.classList.remove('active'); filter.setAttribute('aria-pressed', 'false'); });
  button.classList.add('active'); button.setAttribute('aria-pressed', 'true');
  let count = 0;
  courseCards.forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; if (!card.hidden) count++; });
  document.querySelector('.filter-status').textContent = count + ' treinamentos disponíveis.';
}));
courseCards.forEach(card => { card.href = 'https://wa.me/5547997601395?text=' + encodeURIComponent('Olá! Gostaria de um orçamento para o treinamento ' + card.dataset.course + '.'); card.target = '_blank'; card.rel = 'noopener noreferrer'; });
document.querySelector('#quote-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  if (!name) { form.elements.name.setCustomValidity('Informe seu nome.'); form.elements.name.reportValidity(); return; }
  const company = form.elements.company.value.trim();
  const training = form.elements.training.value;
  const message = 'Olá! Meu nome é ' + name + '.' + (company ? '\nEmpresa: ' + company : '') + '\nGostaria de um orçamento para: ' + training + '.\nPodemos conversar sobre datas, participantes e valores?';
  window.location.href = 'https://wa.me/5547997601395?text=' + encodeURIComponent(message);
});
document.querySelector('#name').addEventListener('input', event => event.currentTarget.setCustomValidity(''));
