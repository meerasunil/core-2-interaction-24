var gridContainer = document.getElementById('imageGrid');
var buttonContainer = document.getElementById('buttonContainer');

// Function to create and append a button
function createButton(tag) {
    var button = document.createElement('button');
    button.textContent = tag;
    button.addEventListener('click', function() {
        filterItems(tag);
    });
    return button;
}

// Function to filter items based on tag
function filterItems(tag) {
    var gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(function(item) {
        if (tag === 'all' || (Array.isArray(item.dataset.tag) && item.dataset.tag.includes(tag)) || item.dataset.tag === tag) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Add buttons for each unique tag
var tags = ['all']; // Include 'all' tag by default
data.forEach(function(item) {
    if (Array.isArray(item.tag)) {
        item.tag.forEach(function(tag) {
            if (!tags.includes(tag)) {
                tags.push(tag);
                var button = createButton(tag);
                buttonContainer.appendChild(button);
            }
        });
    } else {
        if (!tags.includes(item.tag)) {
            tags.push(item.tag);
            var button = createButton(item.tag);
            buttonContainer.appendChild(button);
        }
    }
});

// Add 'all' button
var allButton = createButton('all');
buttonContainer.appendChild(allButton);

// Initial display: Show all items
filterItems('all');

// Render grid items
data.forEach(function(item) {
    var gridItem = document.createElement('div');
    gridItem.className = 'grid-item';

    if (Array.isArray(item.tag)) {
        gridItem.dataset.tag = item.tag;
    } else {
        gridItem.dataset.tag = [item.tag];
    }

    if (item.imageUrl) {
        var image = document.createElement('img');
        image.src = item.imageUrl;
        gridItem.appendChild(image);
    }

    if (item.videoUrl) {
        var video = document.createElement('video');
        video.src = item.videoUrl;
        video.controls = true;
        gridItem.appendChild(video);
    }

    if (item.url) {
        var iframe = document.createElement('iframe');
        iframe.src = item.url;
        iframe.setAttribute('allowfullscreen', ''); 
        gridItem.appendChild(iframe);
    }

    gridContainer.appendChild(gridItem);
    console.log(data.date);
});