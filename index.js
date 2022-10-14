const container=document.querySelector('.container')
var square=6
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
        if(e.target.style.backgroundColor==''){
            e.target.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
        }
        else{
            let rgb=''+e.target.style.backgroundColor
            let curr=rgb.slice(4,-1).split(',')
            console.log(rgb.slice(4,-1).split(','))
            console.log(e.target.style.backgroundColor)
            e.target.style.backgroundColor=`rgb(${curr[0]-0.1*curr[0]},${curr[1]-0.1*curr[1]},${curr[2]-0.1*curr[2]})`
        }
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