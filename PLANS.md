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
