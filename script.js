var resultEl = document.getElementById('result')
var lengthEl = document.getElementById('length')
var lowercaseEl = document.getElementById('lowercase')
var uppercaseEl = document.getElementById('uppercase')
var numbersEl = document.getElementById('number')
var symbolsEl = document.getElementById('symbol')
var generateEl = document.getElementById('generate')
var clipboardEl = document.getElementById('clipboard')

var randomFunction = {
    lowercase: getRandomLower,
    uppercase: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// copy to clipboard 
clipboard.addEventListener('click', () => {
	var text = document.createElement('textarea');
	var password = resultEl.innerText;
	
    if(!password) 
     {return;}
	
	text.value = password;
	document.body.appendChild(text);
	text.select();
	document.execCommand('copy');
	text.remove();
	alert('Password copied!');
});


// Generate event listener
generateEl.addEventListener ("click", () => {
    var length = +lengthEl.value;
    var hasLowercase = lowercaseEl.checked;
    var hasUppercase = uppercaseEl.checked;
    var hasNumber = numbersEl.checked;
    var hasSymbol = symbolsEl.checked;
    
    resultEl.innerText = generatePassword(hasLowercase, hasUppercase, hasNumber, hasSymbol, length);
});

// Generate password function
function generatePassword(lowercase, uppercase, number, symbol, length) {
    let generatedPassword = '';
    var typesCount = lowercase + uppercase + number + symbol;
        // console.log('typesCount: ', typesCount);

    var typesArr = [{lowercase}, {uppercase}, {number}, {symbol}].filter(item => Object.values(item)[0]);
   
        // console.log('typesArr: ', typesArr)
    
    if(typesCount === 0) {
        return '';
    } 
    
    for(let i=0; i<length; i+= typesCount) {
        typesArr.forEach(type => {
            var funcName = Object.keys(type)[0];

        // console.log('funcName: ', funcName);

        generatedPassword += randomFunction[funcName]();
        });
    }
    var finalPassword = generatedPassword
        return finalPassword
}

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