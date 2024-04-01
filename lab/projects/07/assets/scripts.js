
let sortDirection = {
    name: 'asc',
    'manufacturer.name': 'asc',
    creatures: 'asc',
    craft: 'asc',
    year: 'asc' 
};


function sortData(key) {
    toggleSortDirection(key);
    data.sort((a, b) => {
        let itemA = a[key];
        let itemB = b[key];

        
        if (key.includes('.')) {
            const nestedKeys = key.split('.');
            itemA = a;
            itemB = b;
            for (let nestedKey of nestedKeys) {
                itemA = itemA[nestedKey];
                itemB = itemB[nestedKey];
            }
        }

        
        if (key === 'year') {
            return sortDirection[key] === 'asc' ? itemA - itemB : itemB - itemA;
        }

        
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


  
    
    regenerateTable();
}
function generateTableRows(data) {
    var tbody = document.querySelector('#plushTable tbody');
    tbody.innerHTML = ''; 

    data.forEach(function (item) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.imageUrl}" alt="${item.name}" style="max-width: 100px;" class="fullscreenable"></td>
            <td class="sortable" data-key="name">${item.name} ${getSortArrow('name')}</td>
            <td class="sortable" data-key="manufacturer.name">${item.manufacturer.name} ${getSortArrow('manufacturer.name')}</td>
            <td class="sortable" data-key="creatures">${Array.isArray(item.creatures) ? item.creatures.join(', ') : item.creatures} ${getSortArrow('creatures')}</td>
            <td class="sortable" data-key="year">${item.year} ${getSortArrow('year')}</td>
            <td class="sortable" data-key="craft">${item.craft} ${getSortArrow('craft')}</td>
            <td><a href="${item.url}" target="_blank">View</a></td>
        `;
        tbody.appendChild(row);
    });

    const images = document.querySelectorAll('.fullscreenable');
    images.forEach(image => {
        image.addEventListener('click', () => {
            openFullscreenImage(image.src);
        });
    });

    const headings = document.querySelectorAll('.sortable');
    headings.forEach(heading => {
        heading.addEventListener('click', () => {
            const key = heading.getAttribute('data-key');
            sortData(key);
        });
    });
}


function getSortArrow(key) {
    if (sortDirection[key] === 'asc') {
        return '<i class="fa fa-arrow-up"></i>';
    } else {
        return '<i class="fa fa-arrow-down"></i>';
    }
}


generateTableRows(data);


function regenerateTable(filteredData = data) {
    const tbody = document.querySelector('#plushTable tbody');
    tbody.innerHTML = '';
    generateTableRows(filteredData);
}


function toggleSortDirection(key) {
    sortDirection[key] = sortDirection[key] === 'asc' ? 'desc' : 'asc';
    console.log(`Sort direction for ${key} toggled to ${sortDirection[key]}`);
}
function openFullscreenImage(imageSrc) {
    const modal = document.createElement('div');
    modal.classList.add('fullscreen-modal');

    const image = document.createElement('img');
    image.src = imageSrc;
    image.classList.add('fullscreen-image');

    const closeButton = document.createElement('div');
    closeButton.textContent = 'X';
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', () => {
        closeModal(modal);
    });

    modal.appendChild(image);
    modal.appendChild(closeButton);
    document.body.appendChild(modal);
}

function closeModal(modal) {
    modal.remove();
}
