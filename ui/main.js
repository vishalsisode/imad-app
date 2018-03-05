console.log('Loaded!');

//change the text of main-text div
var element=document.getElementById('main-text');

element.innerHTML='new value';

//move the image
var element=document.getElementById('vishal');
vishal.onclick= function() {
  var interval=setInterval(moveRight, 100);  
};