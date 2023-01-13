import { zoltarFortunes } from "./scripts/zoltarFortunes";
import { Howl } from "howler";
import CircleType from "circletype";
let fortuneTicket;
let fortuneText;
let luckyNumbers;
let hasHadFirstFortune = false;
let isTalking = false;
let cardIsOpen = false;
const body = document.querySelector("body");
const circleType = new CircleType(document.getElementById("zoltarLogo"));

function randomNumGen(number) {
  let randomNum = Math.floor(Math.random() * number);

  return randomNum;
}

function createLuckyNumString(array) {
  let newString = "";

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

function stylizeNumber(num) {
  if (num <= 9) {
    // no zeros
    if (num === 0) {
      return "08";
    }

    return "0" + num;
  }

  return num.toString();
}

function randomNumOutOf99() {
  let randomNum = randomNumGen(100);

  randomNum = stylizeNumber(randomNum);

  return randomNum;
}

function generateLuckyNumbers() {
  let newArray = [];

  for (let i = 0; i < 6; i++) {
    newArray[i] = randomNumOutOf99();
  }

  return `Your Lucky Numbers: ${createLuckyNumString(newArray)}`;
}

function generateRandomFortune() {
  let randomNum = randomNumGen(zoltarFortunes.length);

  return zoltarFortunes[randomNum];
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
  const closeButton = document.createElement("button");
  const fortuneHeader = document.createElement("h2");
  const lineBreak = document.createElement("div");
  const textContainer = document.createElement("div");
  const bottomHeader = document.createElement("h2");
  const lineBreakTwo = document.createElement("div");

  fortuneTicket = document.createElement("div");
  fortuneTicket.classList.add("fortuneTicket");

  closeButton.classList.add("fortuneCloseButton");
  closeButton.innerHTML = "X";

  closeButton.addEventListener("click", function () {
    fortuneTicket.classList.add("throwOutAnimation");
    setTimeout(function () {
      cardIsOpen = false;
      body.removeChild(fortuneTicket);
    }, 5000);
  });

  fortuneHeader.classList.add("fortuneHeader");
  fortuneHeader.classList.add("header");
  fortuneHeader.innerHTML = "YOUR FORTUNE";

  lineBreak.classList.add("lineBreak");
  lineBreak.classList.add("lineOne");

  textContainer.classList.add("text-container");

  fortuneText = document.createElement("p");
  changeFortuneText(generateRandomFortune());

  textContainer.appendChild(fortuneText);

  bottomHeader.classList.add("fortuneHeader");
  bottomHeader.classList.add("bottom");
  bottomHeader.innerHTML = "PLAY AGAIN!";

  lineBreakTwo.classList.add("lineBreak");
  lineBreakTwo.classList.add("lineTwo");

  luckyNumbers = document.createElement("p");
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

//SOUND DESIGN
function randomSoundSrc() {
  let randomNum = randomNumGen(4);
  let srcString = "";

  if (randomNum === 0) {
    srcString = "/src/audio/zoltar1.mp3";
    console.log("1");
    return srcString;
  }

  if (randomNum === 1) {
    srcString = "/src/audio/zoltar2.mp3";
    console.log("2");
    return srcString;
  }

  if (randomNum === 2) {
    srcString = "/src/audio/zoltar3.mp3";
    console.log("3");
    return srcString;
  }

  if (randomNum === 3) {
    srcString = "/src/audio/zoltar4.mp3";
    console.log("4");
    return srcString;
  }
}

function zoltarSpeech() {
  const sound = new Howl({
    src: [randomSoundSrc()],
    volume: 0.6,
  });

  sound.play();

  sound.on("end", function () {
    isTalking = false;

    const ticket = new Howl({
      src: ["/src/audio/ticketSound.mp3"],
      volume: 0.1,
    });

    ticket.play();

    ticket.on("play", function () {
      createFortuneTicket();
    });
  });
}

const topLampOne = document.querySelector(".lampOne");
const topLampTwo = document.querySelector(".lampTwo");
const lightOne = document.querySelector(".lightOne");
const lightTwo = document.querySelector(".lightTwo");
const magicBall = document.querySelector("#magicBall");

function startAnimationWhenTalking() {
  if (isTalking === true) {
    divButton.classList.remove("growUp");

    zoltarHand.classList.add("moveHand");

    magicBall.classList.add("ballColorChange");

    topLampOne.classList.add("lampAnimation");
    topLampTwo.classList.add("lampAnimation");

    lightOne.classList.add("lightAnimation");
    lightTwo.classList.add("lightAnimation");
  } else if (isTalking === false) {
    divButton.classList.add("growUp");

    zoltarHand.classList.remove("moveHand");

    magicBall.classList.remove("ballColorChange");

    topLampOne.classList.remove("lampAnimation");
    topLampTwo.classList.remove("lampAnimation");

    lightOne.classList.remove("lightAnimation");
    lightTwo.classList.remove("lightAnimation");
  }
}

function updateAnimations() {
  startAnimationWhenTalking();
}

function animationLoop() {
  updateAnimations();
}

function start() {
  setInterval(animationLoop, 400);
}

circleType.radius(500).dir(1);

start();

const divButton = document.querySelector("#divButton");

divButton.addEventListener("click", function () {
  if (hasHadFirstFortune === false && isTalking != true) {
    const coin = new Howl({
      src: ["/src/audio/coinSound.mp3"],
      volume: 0.4,
    });

    coin.play();

    coin.on("play", function () {
      isTalking = true;
    });

    coin.on("end", function () {
      zoltarSpeech();
    });

    hasHadFirstFortune = true;
  } else if (
    hasHadFirstFortune === true &&
    isTalking != true &&
    cardIsOpen != true
  ) {
    const coin = new Howl({
      src: ["/src/audio/coinSound.mp3"],
      volume: 0.7,
    });

    coin.play();

    coin.on("play", function () {
      isTalking = true;
    });

    coin.on("end", function () {
      zoltarSpeech();
    });
  }
});
