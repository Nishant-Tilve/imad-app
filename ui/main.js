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

button.onclick = function() {
    
    //create requset object
    var request = new XMLHttpRequest();
    
    //capture response
    request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE) {
          //take action
          if(request.status === 200){ //succesful  request.
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
          }
          //else not done.
      } 
    };
    
   //make a request
   request.open('GET','http://nishanttilve.imad.hasura-app.io/counter',true);
   request.send(null);
};