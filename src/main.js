import { zoltarFortunes } from './scripts/zoltarFortunes';
let fortuneText;
let luckyNumbers;

//create random fortune cards
//random choice for the saying on card (15 choices so far)
//6 random lucky numbers at the bottom (without repeating a number)
// EX: Your Lucky Numbers: 08, 16, 24, 22, 10, 09
//simple enough

const body = document.querySelector('body');

function randomNumGen(number) {
    let randomNum = Math.floor(Math.random() * number);
    return randomNum;
}

function createLuckyNumString(array) {
    let newString = '';
    for (let i = 0; i < array.length; i++) {
        let newNum = array[i];
        let newNumString = newNum.toString();
        if (i === 5) {
            newString = newString + `${newNumString}. `;
        } else {
            newString = newString + `${newNumString}, `;
        }
    }
    return newString;
}
function randomNumOutOf99() {
    let randomNum = randomNumGen(100);
    if (randomNum === 0) {
        randomNum = '08';
    }
    if (randomNum === 1) {
        randomNum = '01';
    }
    if (randomNum === 2) {
        randomNum = '02';
    }
    if (randomNum === 3) {
        randomNum = '03';
    }
    if (randomNum === 4) {
        randomNum = '04';
    }
    if (randomNum === 5) {
        randomNum = '05';
    }
    if (randomNum === 6) {
        randomNum = '06';
    }
    if (randomNum === 7) {
        randomNum = '07';
    }
    if (randomNum === 8) {
        randomNum = '08';
    }
    if (randomNum === 9) {
        randomNum = '09';
    }
    randomNum = randomNum.toString();
    return randomNum;
}
function generateLuckyNumbers() {
    let newArray = [];
    for (let i = 0; i < 6; i++) {
        newArray[i] = randomNumOutOf99();
    }
    let numberString = createLuckyNumString(newArray);
    let fortuneString = `Your Lucky Numbers: ${numberString}`;
    return fortuneString;
}

function generateRandomFortune() {
    let randomNum = randomNumGen(zoltarFortunes.length);
    let newFortune = zoltarFortunes[randomNum];
    return newFortune;
}

function changeFortuneText(string) {
    let newFortune = (fortuneText.innerHTML = string);
    return newFortune;
}
function changeLuckyNumberText() {
    let luckyNumber = generateLuckyNumbers();
    luckyNumbers.innerHTML = luckyNumber;
}
function createFortuneTicket() {
    const fortuneTicket = document.createElement('div');
    fortuneTicket.classList.add('fortuneTicket');

    const fortuneHeader = document.createElement('h2');
    fortuneHeader.classList.add('fortuneHeader');
    fortuneHeader.classList.add('header');
    fortuneHeader.innerHTML = 'YOUR FORTUNE';

    const lineBreak = document.createElement('div');
    lineBreak.classList.add('lineBreak');
    lineBreak.classList.add('lineOne');

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    fortuneText = document.createElement('p');
    changeFortuneText(generateRandomFortune());
    textContainer.appendChild(fortuneText);

    const bottomHeader = document.createElement('h2');
    bottomHeader.classList.add('fortuneHeader');
    bottomHeader.classList.add('bottom');
    bottomHeader.innerHTML = 'PLAY AGAIN!';

    const lineBreakTwo = document.createElement('div');
    lineBreakTwo.classList.add('lineBreak');
    lineBreakTwo.classList.add('lineTwo');

    luckyNumbers = document.createElement('p');
    changeLuckyNumberText();

    fortuneTicket.appendChild(fortuneHeader);
    fortuneTicket.appendChild(lineBreak);
    fortuneTicket.appendChild(textContainer);
    fortuneTicket.appendChild(bottomHeader);
    fortuneTicket.appendChild(lineBreakTwo);
    fortuneTicket.appendChild(luckyNumbers);
    body.appendChild(fortuneTicket);
}
createFortuneTicket();

const testButton = document.querySelector('.testButton');
testButton.addEventListener('click', function () {
    createFortuneTicket();
});
