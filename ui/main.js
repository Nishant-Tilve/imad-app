console.log('Loaded!');

//move img on click
var image=document.getElementById('darg');
image.onClick = function(){
    image.style.marginLeft = 100;
    setInterval(100);
    image.style.marginRight = 100;
    setInterval(100);
    image.style.marginTop = 100;
    setInterval(100);
    image.style.marginBottom = 100;
    setInterval(100);
};
