let btn=document.querySelector('.btn')
let main=document.querySelector('main')

btn.addEventListener('click',function(){
 var div=document.createElement('div');
 let x = Math.floor(Math.random()*101)
 let y = Math.floor(Math.random()*101)
 let c1 = Math.floor(Math.random()*256)
 let c2 = Math.floor(Math.random()*256)
 let c3 = Math.floor(Math.random()*256)
 div.style.width='50px'
 div.style.height='50px'
 div.style.background=`rgb(${c1},${c2},${c3})`
 div.style.position="absolute"
 div.style.left=x +'%'
 div.style.top=y +'%'
 main.appendChild(div)
})