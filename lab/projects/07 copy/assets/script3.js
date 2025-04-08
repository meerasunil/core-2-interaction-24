function renderImages() {
        const container = document.getElementById('container');

        data.forEach((item, index) => {
            const draggableItem = document.createElement('img');
            draggableItem.className = 'draggable';
            draggableItem.src = item.imageUrl;
            draggableItem.alt = item.name;
            draggableItem.style.left = `${index * 20}px`; // Adjust initial position
            draggableItem.style.top = `${index * 20}px`; // Adjust initial position
            container.appendChild(draggableItem);
            makeDraggable(draggableItem);
        });
    }

    // Function to make images draggable
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

    // Render images on page load
    document.addEventListener('DOMContentLoaded', () => {
        renderImages();
    });