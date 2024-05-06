const subBtn = document.querySelector('.submit-btn');
const rateBox = document.querySelector('.rate-container');
const thnxBox = document.querySelector('.thank-you-container-2');

subBtn.addEventListener('click', function () {
  rateBox.style.display = 'none'
  thnxBox.style.display = 'block'
});