function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generatePalette() {
  const boxes = document.querySelectorAll('.color-box');
  boxes.forEach(box => {
    const newColor = getRandomColor();
    box.style.backgroundColor = newColor;
    box.querySelector('.hex-text').innerText = newColor;
  });
}

function copyColor(box) {
  const hex = box.querySelector('.hex-text').innerText;
  navigator.clipboard.writeText(hex);
  
  const toast = document.getElementById('toast');
  toast.innerText = `Copied ${hex}!`;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 1800);
}

// Initial set
generatePalette();
