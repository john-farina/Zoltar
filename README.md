<a name="readme-top"></a>
<!-- PROJECT LOGO -->
<div align="center">
<h1 align="center">Zoltar - Online Fortune Teller</h1>
  <p align="center">
   This project was inspired by the old fortune teller machines that gives you a random fortune.
    <br />
    <a href="https://linktowebsite.com">View Live Demo</a>
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
    <li><a href="#sound-design">Sound Design</a></li>
    <ul>
    <li><a></a></li>
    </ul>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

For this project i used Vanilla JS so i could fully master and understand what it has to offer, I created this based off of the real Fortune Teller machines you would find in a arcade. Using Zoltar which originated in the movie "Big" as the face of the project.

<img src="./src/img/ZoltarFirst.gif" alt="a gif of Zoltar with hand moving and lamps flickering" />

I then manipulate the DOM to place a random fortune after Zoltar has spoken wisdom, which is randomized and played using [Howler](howler.link) The random fortunes come from an array and generates a unique set of lucky numbers for each fortune.

<img src="./src/img/ZoltarSecond.gif" alt="Zoltars fortune sliding down the screen and closing it" />

<br/>

## Built With
 - Javascript
 - CSS
<br/>
<br/>

### javascript generated fortunes. All legit fortunes from the branded Zoltar desk toy (and a few real ones i got from actual fortune teller machines).
### javascript controls animations removing and adding classNames associated with CSS animations per event.
- generates a new Fortune Card with every new event.
- the fortunes are taken from an Array with all of the fortunes at random and gets put into the body of the Fortune Card
- 6 Random Numbers are created from 1-100 and gets put into a string that styles the random numbers Generated and sends that into the card.
  - `[8,20,6,4,35] => "Your Lucky Numbers Are: 08, 20, 06, 04, 35"`
- for styling info about card visit Design:Card
- ### Most animation classes are sent when the audio starts or ends.
- when Quarter audio stops playing, Zoltar turns on and starts moving as well as his random phrase audio starting.
- once the speaking audio has stopped, Zoltar turns off and ur card gets sent out for you to read.
- then resets the state once you have closed your fortune. to generate a new one.
<br/>
<br/>
<br/>

## JavaScript

###  Fortune Card
#### **Creation**
I create a new fortune card by manipulating DOM and adding in new divs everytime the script runs

#### **Random Fortune**
For the fortunes i store a long array of fortunes *(actual fortunes i got from a Zoltar desk toy, and some i've gotten from real machines)*, and get a randomNumber from the length of the state array, i then return the random fortune into the body of the new generated card.

#### **Lucky Numbers**
6 Lucky Numbers need to be generated with each card, so i got a array of random numbers from 1-100 and then styled the numbers to be presentable and placed it in a string. <br/>
*example:* `[8,16,22,11,2,1] => "Your Lucky Numbers: 08, 16, 22, 11, 02, 01."`
<br/>
it then gets returned into the footer of the new generated card.
<br/>
<br/>

### Sound Design
With sounds i needed a predictable way to run events when the audio starts/stops. So i chose to use <a href="">Howler</a> which is a JS library that helps with that and more.


<br/>

## Design

### Zoltar

For making Zoltar i wanted to use all CSS, but allowed myself to use a image for the main Image.
<br/>
I cut the Zoltar image into 3 layers. (the body, and both hands).
<br/>

<div display="flex" >
<img src="./src/img/hand.png" width="25" />
<img src="./src/img/fullPic.png" width="70" />
<img src="./src/img/depthPic.png" width="70" />
</div>

I cut them this way so i can animate his right hand with css over the crystal ball and place his other hand over a css made table using `z-index` to create more depth in the 2D image.
<br />

<img src="./src/img/README/leftHandGif.gif" width="120" />

For the positioning of this project i am using `flex-box` and relative and absolute positioning.
<p align="right">(<a href="#readme-top">back to top</a>)</p>
<br/>

### Booth & Background
####  **Zoltar Text**
For the text i used a JS library to help with the curve that the fortune telling machines usually have. i Chose *insert library name here* which is a text curving library to solve this issue.

<img src="./src/img/README/titleGif.gif" width="300" />
<p align="right">(<a href="#readme-top">back to top</a>)</p>

#### **Lamps**
For the lamps i created 3 divs and shaped them with CSS into what resembles a lamp, i then created another div with a yellow `box-shadow` under the lamps that fades in and out with the color change in the lamp shades.
<br/>

<img src="./src/img/README/lampGif.gif" width="100" />

The CSS animation changes the background color of the lamp shades, as well as the background lights opacity changing with the shades.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

#### **Crystal Ball**
The crystal ball is made from two divs and shaped to resemble a crystall ball, it then "turns on" with the rest of the decor, when it is on it cycles through colors with a css animation that cycles through a set color scheme.

<img src="./src/img/README/%20crystalBallGif.gif" width="100" />

when Zoltar is done talking/hasn't started talking it will stay white.

<br />

### Fortune Card

For the card i used pure CSS and added in web-fonts to get as close as possible to the classic look of the card

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

Project Link: [github.com/john-farina/Zoltar](https://github.com/john-farina/Zoltar)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



