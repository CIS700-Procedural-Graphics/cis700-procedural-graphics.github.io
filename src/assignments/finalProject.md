# CIS700 Procedural Graphics: Final Project

Time to show off your new bag of procedural tricks by creating one polished final project. For this assignment you will have four weeks to create and document a portfolio piece that demonstrates your mastery of procedural thinking and implementation. You may work in groups of up to three (working alone is fine too). You may use any language / platform you choose for this assignment (given our approval if it’s not JavaScript/WebGL or C++/OpenGL).

As usual with this class, we want to encourage you to take this opportunity to explore and experiment. To get you started, however, we’ve provided a few open-ended prompts below. Interesting and complex visuals are the goal in all of these prompts, but they encourage focus on different aspects of proceduralism.

## Prompts:

- ### A classic 4k demo
  * In the spirit of the demo scene, create an animation that fits into a 4k executable that runs in real-time. Feel free to take inspiration from the many existing demos. Focus on efficiency and elegance in your implementation.
  * Examples: [cdak by Quite & orange](https://www.youtube.com/watch?v=RCh3Q08HMfs&list=PLA5E2FF8E143DA58C)

- ### A forgery
  * Taking inspiration from a particular natural phenomenon or distinctive set of visuals, implement a detailed, procedural recreation of that aesthetic. This includes modeling, texturing and object placement within your scene. Does not need to be real-time. Focus on detail and visual accuracy in your implementation.
  * Examples:
    - [Snail](https://www.shadertoy.com/view/ld3Gz2), [Journey](https://www.shadertoy.com/view/ldlcRf), Big Hero 6 Wormhole: [Image 1](http://2.bp.blogspot.com/-R-6AN2cWjwg/VTyIzIQSQfI/AAAAAAAABLA/GC0yzzz4wHw/s1600/big-hero-6-disneyscreencaps.com-10092.jpg) , [Image 2](https://i.stack.imgur.com/a9RGL.jpg)

- ### A game level
  * Like generations of game makers before us, create a game which generates an  navigable environment (eg. a roguelike dungeon, platforms) and some sort of goal or conflict (eg. enemy agents to avoid or items to collect). Must run in real-time. Aim to create an experience that will challenge players and vary noticeably in different playthroughs, whether that means complex dungeon generation, careful resource management or a sophisticated AI model. Focus on designing a system that will generate complex challenges and goals.
  * Examples: Spore, Dwarf Fortress, Minecraft, Rogue

- ### An animated environment / music visualizer
  * Create an environment full of interactive procedural animation. The goal of this project is to create an environment that feels responsive and alive. Whether or not animations are musically-driven, sound should be an important component. Focus on user interactions, motion design and experimental interfaces.
  * Examples: [Panoramical](https://www.youtube.com/watch?v=gBTTMNFXHTk), [Bound](https://www.youtube.com/watch?v=aE37l6RvF-c)
- ### Own proposal
  * You are of course **welcome to propose your own topic**. Regardless of what you choose, you and your team must research your topic and relevant techniques and come up with a detailed plan of execution. You will meet with some subset of the procedural staff before starting implementation for approval. 

**Final grading will be individual** and will be based on both the final product and how well you were able to achieve your intended effect according to your execution plan. Plans change of course, and we don’t expect you to follow your execution plan to a T, but if your final project looks pretty good, but you cut corners and only did 30% of what you outlined in your design doc, you will be penalized.

But overall, have fun! This is your opportunity to work on whatever procedural project inspires you. The best way to ensure a good result is to pick something you’re passionate about. :)

## Timeline

- 4/11	Design doc due / Have met with procedural staff
- 4/18	Milestone 1 (short write-up + demo)
- 4/25	Milestone 2 (short write-up + demo)
- 5/3	Final presentations (3-5 pm, Siglab), final reports due

## Design Doc

Your design doc should follow the following template. Note, each section can be pretty short, but cover them all! This will serve as valuable documentation when showing this project off in the future AND doing a good job will make it much easier for you to succeed, so please take this seriously.

### Design Doc Template:

- #### Introduction
  * What motivates this project?
- #### Goal
  * What do you intend to achieve with this project?
- #### Inspiration/reference: 
  * Attach some materials, visual or otherwise you intend as reference
- #### Specification:
  * Outline the main features of your project
- #### Techniques:
  * What are the main technical/algorithmic tools you’ll be using? Give an overview, citing  specific papers/articles
- #### Design:
  * How will your program fit together? Make a simple free-body diagram illustrating the pieces.
- #### Timeline:
  * Create a week-by-week set of milestones for each person in your group.


Along with your final project demo, you will submit a final report, in which you will update correct your original design doc as needed and add a few post-mortem items.

## Milestones

To keep you honest / on-track, we will be checking on your progress at weekly intervals, according to milestones you’ll define at the outset (pending our approval). For each of the two milestones prior to the final submission, you will submit a short write up explaining whether or not you individually achieved your goals (specifying the files where the work happened), along with a link to a demo / images. These don’t have to be super polished -- we just want to see that you’re getting things done.

Example:

“Milestone 1:
	Adam:
Made some procedural terrain code in src/terrain.js. Implemented 3D simplex noise to do it. Also applied coloring via custom shader based on this cool paper X (see src/shaders/dirt.glsl). IMAGE

Austin: 
I managed to set up my voronoi diagram shader (see src/shaders/voronoi.glsl). 
Experimented with different scattering techniques. It’s working with the euclidean distance metric. I’m using it in src/main.js to color stones. IMAGE

Rachel:
I tried really hard to make my toon shader work (src/shaders/toon.glsl), but I still have a bug! T_T BUGGY IMAGE. DEMO LINK”

## Final Report

In addition to your demo, you will create a final report documenting your project overall. This document should be clear enough to explain the value and details of your project to a random computer graphics person with no knowledge of this class.

### Final Report Template:

- #### Updated design doc: 
  * All the sections of your original design doc, corrected if necessary
- #### Results:
  * Provide images of your finished project
- #### Evaluation (this is a big one!):
  * How well did you do? What parameters did you tune along the way? Include some WIP shots that compare intermediate results to your final. Explain why you made the decisions you did.
- #### Future work:
  * Given more time, what would you add/improve
- #### Acknowledgements:
  * Cite _EVERYTHING_. Implemented a paper? Used some royalty-free music? Talked to classmates / a professor in a way that influenced your project? Attribute everything!

## Logistics

Like every prior project, your code will be submitted via github. Fork the empty final project repo and start your code base from there. Take this as an opportunity to practice using git properly in a team setting if you’re a new user.  For each weekly submission, provide a link to your pull request. Your repo will contain all the code and documentation associated with your project. The readme for your repo will eventually be your final report. At the top level, include a folder called “documentation”, where you’ll put your design doc and milestone write-ups.

Don’t wait to merge your code! Seriously, there be dragons. Try to have a working version including all your code so that compatibility and merge issues don’t sneak up on you near the end.

## Grading

- 15% Design Doc (graded as a group)
- 15% Milestone 1 (graded as a group)
- 15% Milestone 2 (graded as a group)
- 55% Final demo + report (graded individually)

NOTE: We’ve been pretty lax about our late policy throughout the semester, but our margins on the final project are tight, therefore late submissions will NOT be accepted. If you have a significant reason for being unable to complete your goals, talk to us, and we’ll discuss getting you an incomplete and figure out an adjusted work plan with your group.