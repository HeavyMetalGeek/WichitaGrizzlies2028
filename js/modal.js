const btn1 = document.getElementById('button1');
const btnModal1 = document.getElementById('button1-modal');
const btnClose1 = document.getElementById('button1-close');

const btn2 = document.getElementById('button2');
const btnModal2 = document.getElementById('button2-modal');
const btnClose2 = document.getElementById('button2-close');

const btn3 = document.getElementById('button3');
const btnModal3 = document.getElementById('button3-modal');
const btnClose3 = document.getElementById('button3-close');

const btn4 = document.getElementById('button4');
const btnModal4 = document.getElementById('button4-modal');
const btnClose4 = document.getElementById('button4-close');

btn1.addEventListener('click', () => {
  btnModal1.style.display = 'block';
});
btn2.addEventListener('click', () => {
  btnModal2.style.display = 'block';
});
btn3.addEventListener('click', () => {
  btnModal3.style.display = 'block';
});
btn4.addEventListener('click', () => {
  btnModal4.style.display = 'block';
});

btnClose1.addEventListener('click', () => {
  btnModal1.style.display = 'none';
});
btnClose2.addEventListener('click', () => {
  btnModal2.style.display = 'none';
});
btnClose3.addEventListener('click', () => {
  btnModal3.style.display = 'none';
});
btnClose4.addEventListener('click', () => {
  btnModal4.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});
