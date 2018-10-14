const button = document.querySelector('.toggle');
const toggleWrap = document.querySelector('.wrap-toggle');
const wrapper = document.querySelector('.mainDiv');
const div3 = document.querySelector('.div-3');

button.addEventListener('mouseover', () => {
  wrapper.setAttribute('data-status', 'open');
  div3.setAttribute('data-status', 'away');
  if ((div3.style.right = '51%')) {
    window.setTimeout(() => (div3.style.display = 'none'), 2000);
  }
});

button.addEventListener('mouseout', () => {
  wrapper.setAttribute('data-status', 'close');
  div3.setAttribute('data-status', 'in');
  window.setTimeout(() => (div3.style.display = 'none'), 2000);
});

wrapper.addEventListener('mouseover', () => {
  wrapper.setAttribute('data-status', 'open');
  div3.setAttribute('data-status', 'away');
  div3.style.display = 'none';
});

wrapper.addEventListener('mouseout', () => {
  wrapper.setAttribute('data-status', 'close');
  div3.setAttribute('data-status', 'in');
});
