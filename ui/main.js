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

//Button

/*make request to counter endpoint

capture request and store it in a variable

render this variable in a correct span.
*/

var button = document.getElementById('counter');

var counter = 0;

button.onclick = function() {
    
    
    var span = document.getElementById('count');
    counter++;
    span.InnerHTML = counter.toString();
};