var side=document.querySelector('.side')
var menu=document.querySelector('.menu')
var container= document.querySelector('.container')
menu.onclick= function(){
    side.classList.toggle('small')
    container.classList.toggle('large')
}


