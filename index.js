let btn1Home = document.getElementById('btn1-h')
let btn2Home = document.getElementById('btn2-h')
let btn3Home = document.getElementById('btn3-h')
let btn1Guest = document.getElementById('btn1-g')
let btn2Guest = document.getElementById('btn2-g')
let btn3Guest = document.getElementById('btn3-g')
let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')


countHome = 0
countGuest = 0

function button1Home(){
    countHome += 1 
    homeScore.textContent = countHome;
}
function button2Home(){
    countHome += 2
    homeScore.textContent = countHome;
}
function button3Home(){
    countHome += 3
    homeScore.textContent = countHome;
}

function button1Guest(){
    countGuest += 1 
    guestScore.textContent = countGuest;
}
function button2Guest(){
    countGuest += 2 
    guestScore.textContent = countGuest;
}
function button3Guest(){
    countGuest += 3 
    guestScore.textContent = countGuest;
}
 
function newGame(){
    homeScore.textContent = 0
    guestScore.textContent = 0
    countHome = 0
    countGuest = 0
}

