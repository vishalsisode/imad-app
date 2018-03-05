console.log('Loaded!');

//change the text of main-text div
var element=document.getElementById('main-text');

element.innerHTML='new value';

//move the image
var element=document.getElementById('vishal');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+2;
    vishal.style.marginLeft=marginLeft+'px';
}
vishal.onclick= function() {
  var interval=setInterval(moveRight, 50);  
};