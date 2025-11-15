var arr=[
    {
     team: 'CSK',
     primary: 'yellow',
     secondary: 'blue',
     fullName: 'Chennai Super Kings'
    },
     {
     team: 'SRH',
     primary: 'Orange',
     secondary: 'black',
     fullName: 'Sunrisers Hyderabad'
    },
     {
     team: 'GT',
     primary: 'Deep blue',
     secondary: 'Gold',
     fullName: 'Gujarat Titans'
    },
     {
     team: 'KKR',
     primary: 'Purple',
     secondary: 'gold',
     fullName: 'Kolkata Knight Riders '
    },
     {
     team: 'DC',
     primary: 'blue',
     secondary: 'red',
     fullName: 'Delhi Capitals'
    },
     {
     team: 'LSG',
     primary: 'Royalblue',
     secondary: 'blue',
     fullName: 'Lucknow Super Giants'
    },
     {
     team: 'RR',
     primary: 'Pink',
     secondary: 'Gold',
     fullName: 'Rajasthan Royals'
    },
     {
     team: 'PBKS',
     primary: 'Red',
     secondary: 'gold',
     fullName: 'Punjab Kings'
    },
     {
     team: 'RCB',
     primary: 'Red',
     secondary: 'Gold',
     fullName: 'Royal Challenger Bangalore'
    },
     {
     team: 'MI',
     primary: 'Blue',
     secondary: 'Gold',
     fullName: 'Mumbai Indians'
    },
]


var h2=document.querySelector('h2');
var h3=document.querySelector('h3');
var btn=document.querySelector('#btn');

btn.addEventListener('click',function(){
    let ch =arr[Math.floor(Math.random()*arr.length)];
    h2.innerHTML= `${ch.team}`
    h3.innerHTML= `${ch.fullName}`
    h2.style.backgroundColor= ch.primary
})