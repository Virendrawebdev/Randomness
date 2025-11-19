let btn=document.querySelector('.btn')
let main=document.querySelector('main')

let arr=['Hey!I am virndra...','Best of Luck!', 'Success is the sum of small efforts', 'Repeated day in and day out','Keep Practicing', 'JS is Love' ]
 let  cl=['red','green', 'blue','purple','yellow']
btn.addEventListener('click',function(){
 var h1=document.createElement('h1');
 let a=Math.floor(Math.random()*arr.length)
 let b=Math.floor(Math.random()*cl.length)
 let x = Math.floor(Math.random()*80)
 let y = Math.floor(Math.random()*80)
 let r = Math.floor(Math.random()*360)
 let fs = Math.floor(Math.random()*3)

 h1.innerHTML=arr[a]
 h1.style.position='absolute'
 h1.style.left=x+'%'
 h1.style.top=y+'%'
 h1.style.scale=fs
 h1.style.rotate=r+'deg'
 h1.style.color=cl[b]
 main.appendChild(h1)
})