let inc=document.querySelector('#inc');
let dec=document.querySelector('#dec');
let h2=document.querySelector('h2');

let a=0;

inc.addEventListener('click', function(){
    a++
    h2.innerHTML = a
})
dec.addEventListener('click', function(){
    a--
    h2.innerHTML = a
})
