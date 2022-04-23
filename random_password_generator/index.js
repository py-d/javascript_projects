const firstEl = document.querySelector(".first")
let secondEl = document.querySelector(".second")
let thirdEl = document.querySelector(".third")
let fourthEl = document.querySelector(".fourth")
let characters = "!#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
function getRandomValue(){
    return Math.floor(Math.random()*9)
}
function getRandomCharacter(){
    return characters.charAt(Math.floor(Math.random() * characters.length));
}
function generatePasswords(){
    let arr = ["","","",""]
    for(let j = 0; j < arr.length;j++){
    for(let i = 0;i <5;i++){
    arr[i] += getRandomCharacter() + getRandomValue()
    }
}
firstEl.textContent = arr[0]
secondEl.textContent = arr[1]
thirdEl.textContent = arr[2]
fourthEl.textContent = arr[3]
}
