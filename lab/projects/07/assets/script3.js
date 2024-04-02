function renderImages() {
    const container = document.getElementById('container');
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;

    data.forEach((item, index) => {
        const draggableItem = document.createElement('img');
        draggableItem.className = 'draggable';
        draggableItem.src = item.imageUrl;
        draggableItem.alt = item.name;
        draggableItem.style.left = `${index * (containerWidth / data.length)}px`; 
        draggableItem.style.bottom = `${index * (0)}px`;
        container.appendChild(draggableItem);
        makeDraggable(draggableItem, item); 
    });
}

function makeDraggable(item, dataItem) {
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
    
        const smallBox = document.getElementById('small-box');
        const smallBoxRect = smallBox.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
    
        if (
            itemRect.left >= smallBoxRect.left &&
            itemRect.right <= smallBoxRect.right &&
            itemRect.top >= smallBoxRect.top &&
            itemRect.bottom <= smallBoxRect.bottom
        ) {
            
            showPopup(item, dataItem);
        }
    }
    
    function showPopup(item, dataItem) {
        const popupBox = document.getElementById('popup-box');
        const itemRect = item.getBoundingClientRect();
        const containerRect = document.getElementById('container').getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
    
       
        let content = `<h3>${dataItem.name}</h3>`;
        content += `<p>Manufacturer: ${dataItem.manufacturer.name}</p>`;
        content += `<p>Manufacturer: ${dataItem.manufacturer.category}</p>`;
        content += `<p>Creatures: ${dataItem.creatures}</p>`;
        content += `<p>Birthday: ${dataItem.year}</p>`;
        content += `<p>Craft: ${dataItem.craft}</p>`;
    
        
        popupBox.innerHTML = content;
        popupBox.style.left = `${itemRect.right}px`;
        popupBox.style.top = `${itemRect.top}px`;
    
  

const popupBoxRect = popupBox.getBoundingClientRect();


if (popupBoxRect.right > viewportWidth) {
   
    popupBox.style.left = popupBoxRect.width > itemRect.left ? '0' : `${viewportWidth - popupBoxRect.width}px`;
} else if (popupBoxRect.left < 0) {
    
    popupBox.style.left = `${itemRect.right}px`;
}


if (popupBoxRect.bottom > viewportHeight) {
    popupBox.style.top = `${viewportHeight - popupBoxRect.height}px`;
} else if (popupBoxRect.top < 0) {
    popupBox.style.top = `${itemRect.bottom}px`;
}

    
      
       
        popupBox.style.display = 'block';
    
        
        const bodyClickHandler = (e) => {
            if (!popupBox.contains(e.target) && e.target !== item) {
                hidePopup();
                document.body.removeEventListener('click', bodyClickHandler);
            }
        };
        document.body.addEventListener('click', bodyClickHandler);
    }
    
    
    function hidePopup() {
        const popupBox = document.getElementById('popup-box');
        popupBox.style.display = 'none';
    }
    
    function makeDraggable(item, dataItem) {
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
    
           
            const smallBox = document.getElementById('small-box');
            const smallBoxRect = smallBox.getBoundingClientRect();
    
            if (
                e.clientX >= smallBoxRect.left &&
                e.clientX <= smallBoxRect.right &&
                e.clientY >= smallBoxRect.top &&
                e.clientY <= smallBoxRect.bottom
            ) {
                smallBox.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            } else {
                smallBox.style.backgroundColor = 'transparent';
            }
        }
    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    renderImages();
});

