<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/darcula.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

# Objects

In Javascript, everything (as long as it's not a primitive like a string or a number), is an Object. And by that, I don't mean typical objects in object-oriented languages. Everything is a set of key-value pairs which we typically call "properties". For example:

```
var a = {};                 // `a` is an empty object
var b = {                   // `b` is an object with two properties
  value: 2,                 // `b.value` points to a number
  foo: "bar"                // `b.foo` points to a string
}
```

We can access any property using `object.property` syntax, or by fetching the property by name: `object["property"]`.

We can modify properties at any time and even add new properties to existing objects.

```
b["name"] = "Austin";
b.value -= 1;
console.log(b);           // Object { value: 1, foo: "bar", name: "Austin" }
```

Objects properties can point to functions and functions themselves are even objects.

```
b.sayHello = function() {
  console.log("Hello, my name is", b.name);
}

b.sayHello.help = "This prints the name property of the caller"
```

And yes, Objects can point to themselves.

```
b.b = b
b.b.b.b.b.b.b.sayHello()    // "Hello my name is Austin"
```


# "Classes"

Javascript is NOT an object-oriented language so there are no real classes, but we often like to have object-like behavior. Here are three ways to accomplish that. Personally, I like the use of closures, but if you're new to Javascript, using ES6 classes will probably be the easiest transition. The second method is unfortunately used very often and can lead to many annoying bugs if you're not careful.

## ES6 Classes

```javascript
class Person {
  constructor(name, phonenumber) {
    // if we want to access these later, we need to bind them to 'this'
    this.createdAt = new Date();        // impossible to be "private"
    this.name = name;
    this.phonenumber = phonenumber;
  }

  getName() {
    return name;
  }

  setName(newName) {
    this.name = newName;
  }
}

// Usage:
var person = new Person("Austin", "555-555-5555");
person.setName("Austin Eng")
console.log(person.getName())         // Austin Eng
person.name = "Austin"                // object properties are publically accessible
console.log(person.getName())         // Austin
```

## "this" Syntax

```javascript
var Person = function(name, phonenumber) {
  var createdAt = new Date();          // will not be directly accessible because it's not bound to "this"

  this.phonenumber = phonenumber;

  this.getName = function() {          // name is protected by getters and setters
    return name;
  }

  this.setName = function(newName) {
    name = newName;
  }
}

// Usage:
var person = new Person("Austin", "555-555-5555");      // Note: You MUST use "new". If you don't, "this" will be undefined
console.log(person.getName())
typeof person.name === "undefined"                      // this property is hidden
console.log(person.phonenumber)                         // this one is not
```

## Closures

```javascript
var Person = function(name, phonenumber) {
  var person = {
    phonenumber: phonenumber
  };
  var createdAt = new Date();         // will not be directly accessible because it's not bound to "person"
  
  person.getName = function() {       // name is protected by getters and setters
    return name;
  }

  person.setName = function(newName) {
    name = newName;
  }

  return person;
}
```

# Javascript Modules

One of the nicer and newer features of Javascript is that we can have modules and separate our code into different files. Yay organized code! Anything prefaced by `export` will be exported from the module so that it can be accessed elsewhere like so: 

```javascript
import {thing1, thing2} from './path/to/Module.js'
```

Using `export default` will be the export if curly braces are not used in the import.

```javascript
import Module from './path/to/Module.js'
```

Let's just jump straight into an example.

```javascript
// MathLib.js

export const PI = 3.14159265;

export function toRadians(degrees) {
  return degrees * PI / 180;
}

export function toDegrees(radians) {
  return radians * 180 / PI;
}

```


```javascript
// Person.js

export default class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hello my name is", this.name);
  }
}

```

```javascript
// main.js
import {PI} from './MathLib.js'
import Person from './Person.js'

console.log("The value of pi is:", PI);
var austin = new Person("Austin");
austin.sayHello();

```

# Callback Functions

Callback functions are used very often in Javascript, often when dealing with events. Because Javascript code in a browser is __single threaded__, but we want it to execute as fast as possible, modern Javascript engines are __asynchronous__. As a result, we often register "callback functions". These are functions that are called when the result of some other operation has completed. This is very often used for handling events.

Here's a simple example

```javascript
function thing() {
  console.log("second");
}

window.setTimeout(thing, 1000);
console.log("first");
```

This code will print "first" and then print "second" one second later. `setTimeout` takes in a function and the number of milliseconds to wait before calling that function again. Here's a much more common way to write the same code.

```javascript
window.setTimeout(function() {
  console.log("second")
});
console.log("first");
```

Note that the function here is not named. This is what we call an "anonymous" function. If that's confusing, here's something else we often use for animation loops.

```javascript
(function tick() {
  // draw stuff
  window.requestAnimationFrame(tick);
})()
```

Here, we're creating a function called tick which will pass itself as a callback to `requestAnimationFrame`. This, whenever the browser is ready to draw, will call `tick` again. We wrap this all in parentheses and put `()` afterwards to call `tick()` for the first time.

Here's another example of callback functions for event handling

```javascript
window.addEventListener('click', function(event) {
  console.log("You clicked:", event.screenX, event.screenY);
});
```

Here, `addEventListener` takes as parameters the name of the event to listen for and the function to execute when that event happens.