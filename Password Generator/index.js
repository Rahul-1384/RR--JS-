const inputSlider = document.querySelector('[data-lengthSlider]');
const lengthDisplay = document.querySelector('[data-lengthNumber]');

const passwordDisplay = document.querySelector('[data-passwordDisplay]');
const copyBtn = document.querySelector('[data-copy]');
const copyMsg = document.querySelector('[data-copyMsg]');
const uppercaseCheck = document.querySelector('[uppercase]');
const lowercaseCheck = document.querySelector('[lowercase]');
const numbersCheck = document.querySelector('[numbers]');
const symbolsCheck = document.querySelector('[symbols]');
const indicator = document.querySelector('[data-indicator]');
const generateBtn = document.querySelector('.generate-password-btn');
const allCheckBox = document.querySelectorAll('input[type=checkbox]');
const symbols = '!@#$%^&*()_+{}[]":;~`<>,.?/\|';

let password = '';
let passwordLength = 10;
let checkCount = 1;
handleSlider();
setIndicator("white");

function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = 10;
}

function setIndicator(color){
    indicator.style.backgroundColor = color;
    indicator.style.dropshadow = '1px 1px 1px white';
}

function getRndInteger(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}

function generateRandomNumber(){
    getRndInteger(0,9);
}

function generateLowercase(){
    String.fromCharCode(getRndInteger(97,123));
}

function generateUppercase(){
    String.fromCharCode(getRndInteger(65,91));
}

function generateSymbol(){
    const randNum = getRndInteger(0,symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasUpper = true;
    if(numbersCheck.checked) hasUpper = true;
    if(symbolsCheck.checked) hasUpper = true;

    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8){
        setIndicator('#0f0');
    }else if(
        (hasLower || hasUpper) &&
        (hasNum || hasSym) &&
        passwordLength>=6
    ){
        setIndicator('#ff0');
    }else{
        setIndicator('#f00');
    }
    
}


async function copyTextMsg(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = 'Copied';
        passwordDisplay.select();
    }
    catch(e){
        copyMsg.innerText = 'Failed';
    }
    
}