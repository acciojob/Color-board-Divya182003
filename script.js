//your JS code here. If required.
const container = document.getElementById('container');
const numBoxes = 800;

for (let i = 0; i < numBoxes; i++) {
  const box = document.createElement('div');
  box.classList.add('square');
  
  box.addEventListener('mouseover', () => {
    const color = getRandomColor();
    box.style.backgroundColor = color;

    // Reset color after 1 second
    setTimeout(() => {
      box.style.backgroundColor = 'transparent';
    }, 1000);
  });

  container.appendChild(box);
}

function getRandomColor() {
  const colors = ['#e74c3c', '#8e44ad', '#3498db', '#27ae60', '#f1c40f', '#e67e22', '#2ecc71'];
  return colors[Math.floor(Math.random() * colors.length)];
}
