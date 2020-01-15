var resultEl = document.getElementById('result')
var lengthEl = document.getElementById('length')
var lowercaseEl = document.getElementById('lowercase')
var uppercaseEl = document.getElementById('uppercase')
var numbersEl = document.getElementById('number')
var symbolsEl = document.getElementById('symbol')
var generateEl = document.getElementById('generate')
var clipboardEl = document.getElementById('clipboard')

var randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};


generateEl.addEventListener ("click", () => {
    var length = +lengthEl.value;
    var hasLowercase = lowercaseEl.checked;
    var hasUppercase = uppercaseEl.checked;
    var hasNumber = numbersEl.checked;
    var hasSymbol = symbolsEl.checked;
    
    console.log (hasLowercase, hasUppercase, hasNumber, hasSymbol)
});

// Random Functions
function getRandomLower () {
    return String.fromCharCode(Math.floor (Math.random()*26 +97));
}
console.log (getRandomLower())

function getRandomUpper () {
    return String.fromCharCode(Math.floor (Math.random()*26 +65));
}
console.log (getRandomUpper())

function getRandomNumber () {
    return String.fromCharCode(Math.floor (Math.random()*10 +48));
}
console.log (getRandomNumber())

function getRandomSymbol () {
    const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log (getRandomSymbol())