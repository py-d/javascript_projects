let buffer = ""
let runningTotal = 0
let previousOperator = null
const screen = document.querySelector('.screen')
const cleary = document.querySelector('.double-calc-button')
cleary.addEventListener("click",function(){
    clearfunction()
})
document.querySelector('.calc-buttons').addEventListener("click",function(event){
    buttonClick(event.target.innerText)
})
function clearfunction(){
   buffer = "0"
   runningTotal = 0
   previousOperator = null
}
function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value)
    }else{
        handleValue(value)
    }
    screen.innerText = buffer
}
function handleValue(value){
    if(buffer === "0"){
        buffer = value
    }else{
        buffer += value
    }
}
function handleSymbol(value){
    switch(value){
        case '=' :
            if(previousOperator === null){
                return;
            }
            flushOperation(parseInt(buffer))
            previousOperator = null
            buffer = "" + runningTotal
            runningTotal = 0
            break
        case '←' :
            if(buffer.length === 1){
                buffer = "0"
            }else{
                buffer = buffer.substring(0,buffer.length - 1)
            }
            break
        default :
            handleMath(value)
            break
    }
}
function handleMath(value){
    const intBuffer = parseInt(buffer)
    if(runningTotal === 0){
        runningTotal = intBuffer
    }
    else{
        flushOperation(intBuffer)
    }
    previousOperator = value
    buffer = "0"
}
function flushOperation(intBuffer){
    if(previousOperator === '+'){
        runningTotal += intBuffer
    }else if(previousOperator === '-'){
        runningTotal -= intBuffer
    }else if(previousOperator === '×'){
        runningTotal *= intBuffer
    }else{
        runningTotal /= intBuffer
    }
}
