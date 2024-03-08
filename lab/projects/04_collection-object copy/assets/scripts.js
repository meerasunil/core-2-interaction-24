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

