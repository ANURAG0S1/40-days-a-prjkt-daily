var openbtn = document.querySelector('#menu-open-btn')
var closebtn = document.querySelector('#menu-close-btn')
var menu =     document.querySelector('.menu-list')

document.querySelector('#menu-open-btn').addEventListener("click",()=>{
   openbtn.style.display = 'none';
    closebtn.style.display = 'block';
  menu.style.transform = ' translateX(0px)'
menu.style.display = 'flex'
})
document.querySelector('#menu-close-btn').addEventListener("click",()=>{
    closebtn.style.display = 'none';
    openbtn.style.display = 'block';
    menu.style.transform = '  translateX(800px)'
    menu.style.display = 'none'
        console.log(window.innerWidth)
})
window.addEventListener('resize',()=>{
    if(window.innerWidth>630){
menu.style.display = 'flex'
    }
})

