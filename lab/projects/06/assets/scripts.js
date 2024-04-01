console.log(data);


function checkImage(url) {
    var img = new Image();
    img.onload = function() {
        console.log('\nImage loaded successfully\n');
    };
    img.onerror = function() {
        console.error('Error loading image');
    };
    img.src = url;
};
data.forEach(function(item) {
    checkImage(item.imageUrl);
    console.log("boomtown:", item.name);
    console.log(item.manufacturer);
    console.log(item.url);
    
});
function generateTableRows(data) {
    var tbody = document.querySelector('#plushTable tbody');

    data.forEach(function (item) {
        var row = document.createElement('tr');

        row.innerHTML = `
        <td><img src="${item.imageUrl}" alt="${item.name}" style="max-width: 100px;"></td>
            <td>${item.name}</td>
            <td>${item.manufacturer.name}</td>
            <td>${Array.isArray(item.creatures) ? item.creatures.join(', ') : item.creatures}</td>
            <td>${item.year}</td>
            <td>${item.craft}</td>
            <td><a href="${item.url}" target="_blank">View</a></td>
        `;

        tbody.appendChild(row);
    });
}


generateTableRows(data);


let sortDirection = {
    name: 'asc',
    manufacturer: 'asc',
    creatures: 'asc',
    craft: 'asc'
};


function sortData(key) {
    data.sort((a, b) => {
        let itemA = a[key];
        let itemB = b[key];


        if (typeof itemA === 'string') {
            itemA = itemA.toLowerCase();
        }
        if (typeof itemB === 'string') {
            itemB = itemB.toLowerCase();
        }

        if (itemA < itemB) return sortDirection[key] === 'asc' ? -1 : 1;
        if (itemA > itemB) return sortDirection[key] === 'asc' ? 1 : -1;
        return 0;
    });
}



function toggleSortDirection(key) {
    sortDirection[key] = sortDirection[key] === 'asc' ? 'desc' : 'asc';
}


document.querySelector('#nameHeading').addEventListener('click', () => {
    sortData('name');
    toggleSortDirection('name');
    regenerateTable();
});

document.querySelector('#manufacturerHeading').addEventListener('click', () => {
    sortData('manufacturer');
    toggleSortDirection('manufacturer');
    regenerateTable();
});

document.querySelector('#creaturesHeading').addEventListener('click', () => {
    sortData('creatures');
    toggleSortDirection('creatures');
    regenerateTable();
});

document.querySelector('#craftHeading').addEventListener('click', () => {
    sortData('craft');
    toggleSortDirection('craft');
    regenerateTable();
});


function regenerateTable() {
    const tbody = document.querySelector('#plushTable tbody');
    tbody.innerHTML = '';
    generateTableRows(data);
}
