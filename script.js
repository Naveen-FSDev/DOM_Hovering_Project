let createh1Element = (j='',src='')=>{
    let m=document.createElement('h1')
    let k=document.createElement('img')
    k.src=src;
    k.classList.add('image')
    m.setAttribute('class','k')
    k.style.display='none'
    m.innerHTML=j; 
    let div=document.createElement('div')
    div.setAttribute('class','subdiv')
    div.append(m,k)
    return div;

}

let j1=createh1Element('Google','./google.png')
let j2=createh1Element('Amazon','./amazon.png')
let j3=createh1Element('Flipkart','./flipkart.png')
let j4=createh1Element('Tesla','./tesla.png')
let j5=createh1Element('Microsoft','./microsoft.png')
let j6=createh1Element('Facebook','./fb.png')

let createDomElement=(h,k,j='')=>{
    let m=document.createElement(h) 
    m.setAttribute('class',k)
    m.innerHTML=j;
    return m;
}

let div1=createDomElement('div','maindiv')
let div2=createDomElement('div','maindiv')

div1.append(j1,j2,j3)
div2.append(j4,j5,j6)

document.body.append(div1,div2)

let h=document.querySelectorAll('.subdiv')

h.forEach((e)=>{
    e.addEventListener('mouseover',function(){
        e.lastChild.style.display='block'
    })
    e.addEventListener('mouseleave',function(){
        e.lastChild.style.display='none'
    })
})