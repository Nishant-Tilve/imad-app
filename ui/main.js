console.log('Loaded!');

//move img on click
var image=document.getElementById('drag');
image.onClick = function(){
    image.style.marginLeft = '100px';
    image.style.marginRight = '100px';
    image.style.marginTop = 100;
    image.style.marginBottom = 100;
    
};
