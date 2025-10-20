const btn = document.getElementById('colorBtn');
const colorCode = document.getElementById('colorCode');

btn.addEventListener('click', () => {
  const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  document.body.style.backgroundColor = randomColor;
  colorCode.textContent = `Current Color: ${randomColor}`;
});
