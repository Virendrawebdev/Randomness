var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var i = document.querySelector('.inner')
var h3 = document.querySelector('h3')
var a = 0;
btn.addEventListener('click', () => {
    btn.style.pointerEvents = 'none'

    var num = 50 + Math.floor(Math.random() * 50)
    console.log(num)
    var stop = setInterval(function () {
        a++
        h2.innerHTML = a + '%'
        i.style.width = a + '%'
    }, num);

    setTimeout(function () {
        clearInterval(stop)
        btn.innerHTML = "Downloaded"
        btn.style.backgroundColor = 'red'
        btn.style.opacity = '0.5'
        h3.innerHTML = 'Downloaded in ' + `${num / 10}` + 'seconds';

    }, num * 100);


})