
function func(i) {
    var target = document.querySelector('.target') 
    var ii = parseInt(target.innerHTML) 
if (i === 'sum'&& ii>=0){
    var t =  parseInt(target.innerHTML) + 1 ;
     return target.innerHTML = t;
}
 else if(i === 'sub'&& ii>=1){
    var t =  parseInt(target.innerHTML) - 1 ;
     return target.innerHTML = t;
}else{
    var t = 0 ;
 
    window.alert("not allowed below zero")
    return target.innerHTML = t;
}
}