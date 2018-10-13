const button = document.querySelector('.toggle');
const toggleWrap = document.querySelector('.wrap-toggle');
const wrapper = document.querySelector('.mainDiv');

button.addEventListener('mouseover', () => {
  wrapper.setAttribute('data-status', 'open');
});

wrapper.addEventListener('mouseover', () => {
  wrapper.setAttribute('data-status', 'open');
});

wrapper.addEventListener('mouseout', () => {
  wrapper.setAttribute('data-status', 'close');
});

button.addEventListener('mouseout', () => {
  wrapper.setAttribute('data-status', 'close');
});
