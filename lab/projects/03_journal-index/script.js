console.log(data);

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