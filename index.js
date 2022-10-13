const container=document.querySelector('.container')
var square=64
let sqrp=square/(square*square)*100
container.style.setProperty('grid-template-columns','repeat(auto-fit,'+ sqrp+'%'+')')

var mousedown=false
for(let i=0;i<square*square;i++){
    const item=document.createElement('div')
    item.classList.add('item')
    item.addEventListener('mouseover',onHover)
    item.addEventListener('mousedown',onMouse)
    item.addEventListener('mouseup',onMouse)
    container.appendChild(item)
}

function onHover(e){
    if(mousedown){
        console.log(e.type)
        e.target.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    }
}
function onMouse(e){
    if(e.type=='mousedown'){
        mousedown=true
    }
    else if(e.type=='mouseup'){
        mousedown=false
    }
}