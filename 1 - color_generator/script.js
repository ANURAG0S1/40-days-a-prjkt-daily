var mainColor = 'green'
const paged =    document.querySelector('.full-page');
 var list =  document.querySelector('.col')

function generateRandomColor(){
    var r = Math.ceil(Math.random(1,256)*256)
    var g = Math.ceil(Math.random(1,256)*256)
    var b = Math.ceil(Math.random(1,256)*256)
    mainColor =""+ `rgb(${r},${g},${b})`;
  paged.style.backgroundColor =mainColor;
 
 addtoList(mainColor.toString())
}

function addtoList(e){
var node  =  document.createElement("li")
node.innerHTML= e;
 
var c = ((e.split('(')[1].split(')'))[0]).toString()
node.setAttribute('onclick',` thisColor(this)`);
   list.appendChild(node);
}
 

function thisColor(e){
     paged.style.backgroundColor =  `${e.innerHTML}`
 
}