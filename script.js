var allbtn=document.querySelectorAll('.btn')
allbtn.forEach(function(elem){
  elem.addEventListener('click',function(){
    if(elem.innerHTML=='Unsubscribe'){
      elem.innerHTML='Subscribe'
      elem.style.backgroundColor='red'
    }else{
      elem.innerHTML='Unsubscribe'
       elem.style.backgroundColor='#333'
    }
  })
})