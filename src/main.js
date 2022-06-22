import { zoltarFortunes } from './scripts/zoltarFortunes';
import { Howl, Howler } from 'howler';
let fortuneTicket;
let fortuneText;
let luckyNumbers;
let hasHadFirstFortune = false;
let isTalking = false;
let cardIsOpen = false;

//create random fortune cards
//random choice for the saying on card (15 choices so far)
//6 random lucky numbers at the bottom (without repeating a number)
// EX: Your Lucky Numbers: 08, 16, 24, 22, 10, 09
//simple enough

const body = document.querySelector('body');

//CIRCLE TEXT CREATION
import CircleType from 'circletype';
const circleType = new CircleType(document.getElementById('zoltarLogo'));
circleType.radius(500).dir(1);

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
    fortuneTicket = document.createElement('div');
    fortuneTicket.classList.add('fortuneTicket');

    const closeButton = document.createElement('button');
    closeButton.classList.add('fortuneCloseButton');
    closeButton.innerHTML = 'X';
    closeButton.addEventListener('click', function () {
        fortuneTicket.classList.add('throwOutAnimation');
        setTimeout(function () {
            cardIsOpen = false;
            body.removeChild(fortuneTicket);
        }, 5000);
    });

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

    fortuneTicket.appendChild(closeButton);
    fortuneTicket.appendChild(fortuneHeader);
    fortuneTicket.appendChild(lineBreak);
    fortuneTicket.appendChild(textContainer);
    fortuneTicket.appendChild(bottomHeader);
    fortuneTicket.appendChild(lineBreakTwo);
    fortuneTicket.appendChild(luckyNumbers);
    body.appendChild(fortuneTicket);
    cardIsOpen = true;
}
// createFortuneTicket();

//SOUND DESIGN
function randomSoundSrc() {
    let randomNum = randomNumGen(4);
    let srcString = '';
    if (randomNum === 0) {
        srcString = '/src/audio/zoltar1.mp3';
        console.log('1');
    } else if (randomNum === 1) {
        srcString = '/src/audio/zoltar2.mp3';
        console.log('2');
    } else if (randomNum === 2) {
        srcString = '/src/audio/zoltar3.mp3';
        console.log('3');
    } else if (randomNum === 3) {
        srcString = '/src/audio/zoltar4.mp3';
        console.log('4');
    }
    return srcString;
}

function zoltarSpeech() {
    const sound = new Howl({
        src: [randomSoundSrc()],
        volume: 0.6,
    });
    sound.play();
    sound.on('play', function () {
        isTalking = true;
    });
    sound.on('end', function () {
        isTalking = false;

        const ticket = new Howl({
            src: ['/src/audio/ticketSound.mp3'],
            volume: 0.1,
        });
        ticket.play();
        ticket.on('play', function () {
            createFortuneTicket();
        });
    });
}

const topLampOne = document.querySelector('.lampOne');
const topLampTwo = document.querySelector('.lampTwo');
const lightOne = document.querySelector('.lightOne');
const lightTwo = document.querySelector('.lightTwo');
const magicBall = document.querySelector('#magicBall');
const zoltarHand = document.querySelector('#zoltarHand');

function startAnimationWhenTalking() {
    if (isTalking === true) {
        zoltarHand.classList.add('moveHand');
        magicBall.classList.add('ballColorChange');
        topLampOne.classList.add('lampAnimation');
        topLampTwo.classList.add('lampAnimation');
        lightOne.classList.add('lightAnimation');
        lightTwo.classList.add('lightAnimation');
    } else if (isTalking === false) {
        zoltarHand.classList.remove('moveHand');
        magicBall.classList.remove('ballColorChange');
        topLampOne.classList.remove('lampAnimation');
        topLampTwo.classList.remove('lampAnimation');
        lightOne.classList.remove('lightAnimation');
        lightTwo.classList.remove('lightAnimation');
    }
}

// createFortuneTicket();

function updateAnimations() {
    startAnimationWhenTalking();
}
function animationLoop() {
    updateAnimations();
}
function start() {
    setInterval(animationLoop, 400);
}
start();

const divButton = document.querySelector('#divButton');
divButton.addEventListener('click', function () {
    if (hasHadFirstFortune === false && isTalking != true) {
        const coin = new Howl({
            src: ['/src/audio/coinSound.mp3'],
            volume: 0.4,
        });
        coin.play();
        coin.on('end', function () {
            zoltarSpeech();
        });

        // createFortuneTicket();
        hasHadFirstFortune = true;
    } else if (
        hasHadFirstFortune === true &&
        isTalking != true &&
        cardIsOpen != true
    ) {
        // body.removeChild(fortuneTicket);
        const coin = new Howl({
            src: ['/src/audio/coinSound.mp3'],
            volume: 0.7,
        });
        coin.play();
        coin.on('end', function () {
            zoltarSpeech();
        });
        // createFortuneTicket();
    }
    // createFortuneTicket();
});

// const testButton = document.querySelector('.testButton');
// testButton.addEventListener('click', function () {
//     if (hasHadFirstFortune === false && isTalking != true) {
//         const coin = new Howl({
//             src: ['/src/audio/coinSound.mp3'],
//             volume: 0.4,
//         });
//         coin.play();
//         coin.on('end', function () {
//             zoltarSpeech();
//         });

//         // createFortuneTicket();
//         hasHadFirstFortune = true;
//     } else if (
//         hasHadFirstFortune === true &&
//         isTalking != true &&
//         cardIsOpen != true
//     ) {
//         // body.removeChild(fortuneTicket);
//         const coin = new Howl({
//             src: ['/src/audio/coinSound.mp3'],
//             volume: 0.7,
//         });
//         coin.play();
//         coin.on('end', function () {
//             zoltarSpeech();
//         });
//         // createFortuneTicket();
//     }
//     // createFortuneTicket();
// });
