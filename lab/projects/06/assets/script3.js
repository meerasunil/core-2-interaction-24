document.addEventListener("DOMContentLoaded", function() {
    const dropZone = document.getElementById("drop-zone");
    const imageDetails = document.getElementById("image-details");

    dropZone.addEventListener("dragover", function(event) {
        event.preventDefault();
        dropZone.classList.add("drag-over");
    });

    dropZone.addEventListener("dragleave", function(event) {
        event.preventDefault();
        dropZone.classList.remove("drag-over");
    });

    dropZone.addEventListener("drop", function(event) {
        event.preventDefault();
        dropZone.classList.remove("drag-over");

        
        const files = event.dataTransfer.files;
        for (const file of files) {
            if (file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = function() {
                    const img = new Image();
                    img.src = reader.result;
                    img.onload = function() {
                        const imageName = file.name;
                        const imageInfo = getImageInfo(imageName);
                        displayImageInfo(img, imageInfo);
                    }
                }
                reader.readAsDataURL(file);
            }
        }
    });

    function getImageInfo(data) {
        // You need to implement this function to fetch image information from your data.js file
        for (const item of data) {
            if (item.imageUrl === `assets/${imageSrc}`) {
                return item;
            }
        }
        return null; // Return null if image info not found
    }

    function displayImageInfo(image, info) {
        // Display image and its information in the popup box
        imageDetails.innerHTML = `
            <img src="${image.src}" alt="${info.name}">
            <p>Name: ${info.name}</p>
            <p>Manufacturer: ${info.manufacturer.name}</p>
            <p>Category: ${info.manufacturer.category}</p>
            <p>Year: ${info.year}</p>
            <p>Craft: ${info.craft}</p>
            <a href="${info.url}" target="_blank">More Info</a>
        `;
        imageDetails.style.display = "block";
    }
});


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
        console.log(item.img);
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

