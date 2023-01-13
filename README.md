<a name="readme-top"></a>
what did i do in this project

About:

For this project i used Vanilla JS so i could fully master and understand what it has to offer, I created this based off of the real Fortune Teller machines you would find in a arcade. Using Zoltar which originated in the movie "Big" as the face of the project.

Short Explanation:

### heavily designed it with CSS everything other then the image of zoltar is with CSS,
- moving Hand
- Left hand with the table to create depth
  - using z-index so his arm can go over CSS table
- magic ball colors
- SVG coins, in a fallback div
- lamps
- zoltar text
- Fortune Card Design
  - i designed it as close as possible as i could get to what would be a real fortune card you will get
  - only using css for the design and different fonts
- coin slot
  - (sound design as well)
- turns on (lights up and moves) after pressing quarter slot, and stops moving after receiving fortune

### added sound design using a zoltars voice from a desk Zoltar toy.
- uses Howler for sound to get more control over timing
- added a sound of a quarter dropping before turning zoltar on.
- plays a random line out of 4 from the recorded phrases i recorded
- then plays a sound of a ticket coming out of the "machine".

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

<!-- PROJECT LOGO -->
<br />
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
      <li><a href="#design">Design</a></li>
      </ul>
    </li>
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

<img src="./src/img/README/leftHandGif.gif" width="120" />
<br/>

### Booth & Background
####  **Zoltar Text**
For the text i used a JS library to help with the curve that the fortune telling machines usually have. i Chose *insert library name here* which is a text curving library to solve this issue.
<img src="./src/img/README/titleGif.gif" width="300" />

#### **Lamps**
For the lamps i created 3 divs and shaped them with CSS into what resembles a lamp, i then created another div with a yellow `box-shadow` under the lamps that fades in and out with the color change in the lamp shades.
<br/>
<img src="./src/img/README/lampGif.gif" width="100" />

The CSS animation changes the background color of the lamp shades, as well as the background lights opacity changing with the shades.
<br />

### Fortune Card

For the card i used pure CSS and added in webFonts to get as close as possible
Fonts used:
- font
- font
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



