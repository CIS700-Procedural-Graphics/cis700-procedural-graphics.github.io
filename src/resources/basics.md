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
    this.createdAt = new Date();
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
console.log(person.name)              // Austin
person.setName("Austin Eng")
console.log(person.getName())         // Austin Eng
```

## How it Actually Works (Sort of)

As I said earlier, Javascript is not actually an object-oriented language, so if you do the above without knowing the underlying implementation, you may run into strange bugs and problems.
If we want to get a better understanding of the Javascript, this is how you would implement the same functionality.

```javascript
var Person = function(name, phonenumber) {
  this.createdAt = new Date();          // will not be directly accessible because it's not bound to "this"
  this.name = name;
  this.phonenumber = phonenumber;
}

Person.prototype.getName = function() {
  return this.name;
}

Person.prototype.setName = function(newName) {
  this.name = newName;
}

Person.prototype.getAge = function() {
  return new Date() - this.createdAt;
}

// Usage:
var person = new Person("Austin", "555-555-5555");
console.log(person.name)              // Austin
person.setName("Austin Eng")
console.log(person.getName())         // Austin Eng
```

### What is this `prototype` nonsense?

Javascript is not object-oriented. It is prototype-based. A `prototype` is another object from which an object inherits properties. Again, this is not a class because an object's prototype is a **specific object**. When you try to access a property of an object, if it is not defined, then the Javascript engine will look at the object's prototype. If it is not defined there, it will look at the object's prototype's prototype. This is what we call a **prototype chain**. In the above example, we define three functions: `getName`, `setName`, and `getAge` on the Person object. Remember: Person is a Function which is an Object. When we create an object with the `new` keyword, the result's `prototype` is automatically set to `Person.prototype`. Therefore, the resulting object from `var person = new Person("Austin", "555-555-5555");` does not have any properties called `getName`, `setName`, or `getAge`. It instead has a reference to the `Person` function. i.e. `person.__proto__ === Person`.

There's a lot more special things you can do with defining object properties (like special getters and setters) but it's not totally necessary and not essential.


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