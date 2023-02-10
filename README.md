![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

<a name="readme-top"></a>
<!-- PROJECT LOGO -->
<div align="center">
<h1 align="center">Zoltar - Online Fortune Teller</h1>
  <p align="center">
   This project was inspired by the old fortune teller machines that gives you a random fortune for a quarter.
    <br />
    <a href="https://zoltar.johnfarina.co">View Live Demo</a>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
      <li><a href="#built-with">Built With</a></li>
      </ul>
        <li><a href="#javascript">JavaScript</a></li>
        <ul>
        <li><a href="#fortune-card">Fortune Card</a></li>
        <ul>
        <li><a href="#creation">Creation</a></li>
        <li><a href="#random-fortune">Random Fortune</a></li>
        <li><a href="#lucky-numbers">Lucky Numbers</a></li>
        </ul>
        <li><a href="#sound-design">Sound Design</a></li>
        </ul>
      <li><a href="#design">Design</a></li>
      <ul>
      <li><a href="#zoltar">Zoltar</a></li>
      <li><a href="#booth--background">Booth & Background</a></li>
      <ul>
      <li><a href="#zoltar-text">Zoltar Text</a></li>
      <li><a href="#lamps">Lamps</a></li>
      <li><a href="#crystal-ball">Crystal Ball</a></li>
      <li><a>Coins</a></li>
      </ul>
      <li><a href="#fortune-card">Fortune Card</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

For this project I used Vanilla JS so I could fully master and understand what it has to offer, I created this based off of the real Fortune Teller machines you would usually find in an older arcade. Using Zoltar which originated in the movie <a href="https://en.wikipedia.org/wiki/Big_(film)">"Big"</a> as the face of the project.

<img src="./src/img/ZoltarFirst.gif" alt="a gif of Zoltar with hand moving and lamps flickering" />

I then manipulate the DOM to place a random fortune after Zoltar has spoken wisdom, which is randomized and played using [Howler](howler.link) The random fortunes come from an array and generates a unique set of lucky numbers for each fortune.

<img src="./src/img/ZoltarSecond.gif" alt="Zoltars fortune sliding down the screen and closing it" />

<br/>

## Built With
 - JavaScript
 - CSS
<br/>
<br/>


## JavaScript

###  Fortune Card
#### **Creation**
I create a new fortune card by manipulating DOM and adding in new div's every time the script runs. For information on the design go to <a href="#fortune-card-design">Fortune Card Design</a>

#### **Random Fortune**
For the fortunes I store a long array of fortunes *(actual fortunes I got from a Zoltar desk toy, and some that I've gotten from a real machine)*, and get a `randomNumber` from the length of the state array, I then return the random fortune into the body of the new generated card.

#### **Lucky Numbers**
6 Lucky Numbers need to be generated with each card, so I got an array of random numbers from 1-100 and then styled the numbers to be presentable and placed it in a string. <br/>
*Example:* `[8,16,22,11,2,1] => "Your Lucky Numbers: 08, 16, 22, 11, 02, 01."`
<br/>
It then gets returned into the footer of the new generated card.
<br/>
<br/>

### Sound Design
With sounds I needed a predictable way to run events when the audio starts/stops. So I chose to use <a href="https://howlerjs.com/">Howler</a> which is a JS library that helps with that and more.
<br/>
The sounds go in order from Coin Slot, Random Phrase, to Ticket Dispense. These sounds trigger each other by playing after each one ends, and adding and removing animation class names that are needed for that phase in the audio. <br/>
For example, when the Coin Slot sound ends Zoltar's machine turns on, and so does the Random Phrase. After all of that is done it turns itself off and Dispenses Ticket with sound. <br/>
At the end it resets its state and sets up for the next random fortune.

<br/>

## Design

### Zoltar

For making Zoltar I wanted to use all CSS, but allowed myself to use an image for the main Image.
<br/>
I cut the Zoltar image into 3 layers. (the body, and both hands).
<br/>

<div display="flex" >
<img src="./src/img/hand.png" width="25" />
<img src="./src/img/fullPic.png" width="70" />
<img src="./src/img/depthPic.png" width="70" />
</div>

I cut them this way so I can animate his right hand with CSS over the crystal ball and place his other hand over a CSS made table using `z-index` to create more depth in the 2D image.
<br />

<img src="./src/img/README/leftHandGif.gif" width="120" />

For the positioning of this project I am using `flex-box` and relative and absolute positioning.
<p align="right">(<a href="#readme-top">back to top</a>)</p>
<br/>

### Booth & Background
####  **Zoltar Text**
For the text I used a JS library to help with the curve that the fortune-telling machines usually have. I Chose [CircleType](https://github.com/peterhry/CircleType) which is a text curving library to solve this issue.

<img src="./src/img/README/titleGif.gif" width="300" />
<p align="right">(<a href="#readme-top">back to top</a>)</p>

#### **Lamps**
For the lamps I created 3 divs and shaped them with CSS into what resembles a lamp, I then created another div with a yellow `box-shadow` under the lamps that fades in and out with the color change in the lamp shades.
<br/>

<img src="./src/img/README/lampGif.gif" width="100" />

The CSS animation changes the background color of the lamp shades, as well as the background lights opacity changing with the shades.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

#### **Crystal Ball**
The crystal ball is made from two divs and shaped to resemble a crystal ball, it then "turns on" with the rest of the decor, when it is on it cycles through colors with a CSS animation that cycles through a set color scheme.

<img src="./src/img/README/%20crystalBallGif.gif" width="100" />

When Zoltar is done talking/hasn't started talking it will stay white.

<br />

### Fortune Card Design

For the card I used pure CSS and added in web-fonts to get as close as possible to the classic look of the card

Fonts used:
- **Reikna** *(for the headers)*
- **Enchanted Land** *(for the body)*
<br/>

<img src="./src/img/README/cardShot.png" height="450"/>

The fortune card contents are positioned with `flex-box`.
<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- USAGE EXAMPLES -->

<br/>

## Usage

Open Zoltar when you're facing troubles, open Zoltar when you're curious. Get fortunes *(without the quarters!)*
<br/>
<br/>

<!-- CONTACT -->
## Contact

**John Farina** - johnfarina8@gmail.com

My Website: [johnfarina.co](https://johnfarina.co)

Project Link: [github.com/john-farina/Zoltar](https://github.com/john-farina/Zoltar)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



