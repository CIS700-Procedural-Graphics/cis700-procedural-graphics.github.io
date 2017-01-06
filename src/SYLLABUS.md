# Special Topics Course CIS 700 Procedural Graphics

## Week 1: Noise
Introduction to procedural graphics and Canvas with Javascript. Pseudo-random noise techniques. Perlin Noise, Simplex Noise.

**Reading:**
  - [Ken Perlin, An image synthesizer, ACM SIGGRAPH Computer Graphics, v.19 n.3, p.287-296, Jul. 1985;](http://dl.acm.org/citation.cfm?id=325247&CFID=853506620&CFTOKEN=59155680)
  - [Ken Perlin. 2002. Improving noise. ACM Trans. Graph. 21, 3 (July 2002), 681-682.](http://mrl.nyu.edu/~perlin/paper445.pdf)

**Assignment:**
  - Structured Noise: Using Javascript, generate 2D structured noise in a program written with Three.js.

**Additional Reference:**
  - [Lagae, A., Lefebvre, S., Cook, R., DeRose, T., Drettakis, G., Ebert, D., Lewis, J.P., Perlin, K., Zwicker, M., "A Survey of Procedural Noise Functions," Computer Graphics Forum, 2010.](https://diglib.eg.org/handle/10.2312/egst.20101059.001-019)

## Week 2: Distribution and Sampling
Working with workhorse growth functions. Creating distributions. Point-scattering. World-brush. Voronoi diagrams. Brief overview of procedural generation pipelines.

**Reading:**
  - [Arnaud Emilien , Ulysse Vimont , Marie-Paule Cani , Pierre Poulin , Bedrich Benes, WorldBrush: interactive example-based synthesis of procedural virtual worlds, ACM Transactions on Graphics (TOG), v.34 n.4, August 2015](http://dl.acm.org/citation.cfm?id=2766975)

**Assignment:**
  - Realistic Feather Distribution: Procedurally create a model of a feathered wing, using distribution functions to place the feathers.

## Week 3: L-systems
The basics of string replacement systems and designing and parsing simple grammars.

**Reading:**
  - [Stephen Demko, Laurie Hodges, and Bruce Naylor. 1985. Construction of fractal objects with iterated function systems. In SIGGRAPH '85](http://dl.acm.org/citation.cfm?id=325245)

**Assignment:**
  - Plant Generation: Use L-systems and random number generators to create a complex 3D plant model of your own design.

**Additional Reference:** 
  - ["The Algorithmic Beauty of Plants", Przemyslaw Prusinkiewicz, Aristid Lindenmayer](http://algorithmicbotany.org/papers/abop/abop-ch1.pdf)

## Week 4: Extending L-systems
Moving on from strings. Shape grammars and additions to L-systems

**Reading:**
  - [Pascal Muller , Peter Wonka , Simon Haegler , Andreas Ulmer , Luc Van Gool, Procedural modeling of buildings, ACM Transactions on Graphics (TOG), v.25 n.3, July 2006](http://dl.acm.org/citation.cfm?id=1141931)

**Assignment**
  - Applying L-Systems to City Generation: Dynamically generate buildings and street layouts to create a 3D model of a city.


## Week 5: Color
Cell-shading, color compression, color space mapping.

**Reading:**
  - [T.-W. Chen, Y.-L. Chen, and S.-Y. Chien. Fast image segmentation based on k-means clustering with histograms in hsv color space. In Multimedia Signal Processing, 2008 IEEE 10th Workshop on, pages 322 –325, 2008.](http://dl.acm.org/citation.cfm?id=2382384)

**Assignment:**
  - One-Color Challenge: Using each color in the RGB32 gamut exactly once, create a visualization of a common computer science algorithm of your choice.

## Week 6: Implicit Surfaces
Procedural geometry synthesis equations and constructed solid geometry.

**Reading:**
  - ["A Generalization of Algebraic Surface Drawing." ACM Transactions on Graphics, July 1982.](https://www.microsoft.com/en-us/research/wp-content/uploads/1982/07/p235-blinn.pdf)

**Assignment:**
  - Cloudy With a Chance of Metaballs: Create an animated implicit surface using oscillating signed distance fields.

## Week 7: Procedural Textures
Revisiting and combining procedural concepts to create unique procedural textures.

**Assignment:**
  - Substance Designer or Houdini.

## Week 8: Intro to Dynamics
Overview of rigid body dynamics and cloth simulation.

**Reading:**
  - [D. Baraff and A. Witkin. Dynamic simulation of non-penetrating flexible bodies. Computer Graphics 26(2): 303-308, 1992.](https://www.cs.cmu.edu/~baraff/papers/index.html)
  - [J. Linford and T. Moh. Parallelized rigid body dynamics. ACM SE 2014](https://dl.acm.org/citation.cfm?id=2638480&CFID=856519259&CFTOKEN=62461367)

**Assignment:**
  - The Art of Chaos: Using rigid body physics to distribute various objects, create a 3D work of art.

## Week 9: Intro to Crowd simulation
The basics of autonomous agents. Collision avoidance approaches.

**Reading:**
  - [Pelechano, Nuria, Jan M. Allbeck, and Norman I. Badler. "Controlling individual agents in high-density crowd simulation." Proceedings of the 2007 ACM SIGGRAPH/Eurographics symposium on Computer animation. Eurographics Association, 2007;](http://dl.acm.org/citation.cfm?id=1272705)

  - [Reynolds, Craig W. "Flocks, herds and schools: A distributed behavioral model." ACM SIGGRAPH computer graphics 21.4 (1987): 25-34.](http://www.cs.toronto.edu/~dt/siggraph97-course/cwr87/)

**Assignment:** Agent Avoidance: Program basic agent AIs to avoid one another and obstacles on their way to various goals.

## Week 10: Behavioral Animation
Injecting personality and purpose into autonomous agents.

**Reading:**
  - [Braitenberg, V. (1984). Vehicles: Experiments in synthetic psychology. Cambridge, MA: MIT Press](http://www1.appstate.edu/~kms/classes/psy5150/Documents/Braitenberg1984.pdf})

**Assignment:**
  - "I saw a mudcrab the other day. Wretched creatures.": Create an artificial life demo using the Braitenberg model built on top of the collision avoidance agent simulation developed in the previous assignment.

## Week 11: Introduction to ShaderToy
Review of OpenGL pipeline and GLSL programming.

**Assignment:** Raymarching in ShaderToy: Use OpenGL via ShaderToy to render 3D surfaces based on polynomial functions.

## Week 12: Special Topics
TBD

## Week 13: Special Topics
TBD

## Week 14: Final Project worktime
Troubleshooting tips and open worktime in class.