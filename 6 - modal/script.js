var modelShown = false
function addmodel (){ if (modelShown === false){
    var node = document.createElement('div')
    node.innerHTML = `    i am a model<button onclick='closemodel()'><i class="fas fa-times"></i></button>`;
    node.setAttribute('class','model')
    document.querySelector('body').append(node)
    modelShown = true
}}
function closemodel(){
    if(modelShown===true){
    document.querySelector('.model').remove()
    modelShown = false
}}