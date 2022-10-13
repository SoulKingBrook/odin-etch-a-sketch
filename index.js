const container=document.querySelector('.container')
var square=64
let sqrp=square/(square*square)*100
container.style.setProperty('grid-template-columns','repeat(auto-fit,'+ sqrp+'%'+')')
for(let i=0;i<square*square;i++){
    const item=document.createElement('div')
    item.classList.add('item')
    item.addEventListener('mouseover',onHover)
    container.appendChild(item)
}

function onHover(e){
    e.target.classList.add('hovered')
    setTimeout(()=>{e.target.classList.remove('hovered')},2000)
}
