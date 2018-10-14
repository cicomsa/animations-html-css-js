const button = document.querySelector('.toggle');
const toggleWrap = document.querySelector('.wrap-toggle');
const wrapper = document.querySelector('.mainDiv');
const div3 = document.querySelector('.div-3');
const links = [...document.querySelectorAll('LI')];
const div4 = document.querySelector('.div-4');
const div4Content1 = document.querySelector('.div-4-content-1');
const div4Content2 = document.querySelector('.div-4-content-2');

button.addEventListener('mouseover', () => {
  wrapper.setAttribute('data-status', 'open');
  div3.setAttribute('data-status', 'away');
});

button.addEventListener('mouseout', () => {
  wrapper.setAttribute('data-status', 'close');
  div3.setAttribute('data-status', 'in');
});

wrapper.addEventListener('mouseover', () => {
  wrapper.setAttribute('data-status', 'open');
  div3.setAttribute('data-status', 'away');
});

wrapper.addEventListener('mouseout', () => {
  wrapper.setAttribute('data-status', 'close');
  div3.setAttribute('data-status', 'in');
  window.setTimeout(() => div4.setAttribute('data-status', 'hide'), 3000);
});

links.map(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    div4.setAttribute('data-status', 'display');
    if (div4Content1.dataset.status === 'to-replace') {
      div4Content1.setAttribute('data-status', 'replaced');
      div4Content2.setAttribute('data-status', 'to-replace');
    } else {
      div4Content2.setAttribute('data-status', 'replaced');
      div4Content1.setAttribute('data-status', 'to-replace');
    }
  });
});
