console.log('Loaded!');

//move img on click
var image=document.getElementById('drag');
 
 var marginLeft = 0;
 function moveRight() {
    marginLeft = marginLeft + 10;
    image.style.marginLeft = marginLeft + 'px';    
 }
image.onclick = function(){
   var interval = setInterval(moveRight,100);
    
};
