document.getElementById('colorButton').addEventListener('click', function() {
    // Generate random color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Change background color of the body
    document.body.style.backgroundColor = randomColor;
});