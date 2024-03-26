function renderImages() {
    const container = document.getElementById('container');
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;
    console.log(containerWidth);
    console.log(containerHeight);

    data.forEach((item, index) => {
        const draggableItem = document.createElement('img');
        draggableItem.className = 'draggable';
        draggableItem.src = item.imageUrl;
        draggableItem.alt = item.name;
        draggableItem.style.left = `${index * (containerWidth / data.length)}px`; 
        draggableItem.style.bottom = `${index * (0)}px`;
        container.appendChild(draggableItem);
        makeDraggable(draggableItem);
    });
}

function makeDraggable(item) {
    let offsetX, offsetY;

    item.addEventListener('mousedown', e => {
        e.preventDefault();
        offsetX = e.clientX - item.getBoundingClientRect().left;
        offsetY = e.clientY - item.getBoundingClientRect().top;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMove(e) {
        item.style.left = `${e.clientX - offsetX}px`;
        item.style.top = `${e.clientY - offsetY}px`;
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderImages();
});
document.addEventListener('DOMContentLoaded', function() {
    var wave = document.querySelector('.wave');
  
    // Function to slide the wave in
    function slideInWave() {
      wave.classList.remove('slide-out');
      wave.classList.add('slide-in');
    }
  
    // Function to slide the wave out
    function slideOutWave() {
      wave.classList.remove('slide-in');
      wave.classList.add('slide-out');
    }
  
    // Initial slide in
    slideInWave();
  
    // Slide out after 3 seconds and then slide back in after 1 second delay
    setInterval(function() {
      slideOutWave();
      setTimeout(slideInWave, 500);
    }, 3000);
  });
  