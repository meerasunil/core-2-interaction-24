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
    console.log("boomtown:", item.name);
    checkImage(item.imageUrl);
    console.log(item.manufacturer);
    console.log(item.year);
});

