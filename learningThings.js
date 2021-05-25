//SaaS products = software-as-a-Sever is a widespread business model for the world of digital products

// JavaScript is one of the most important programming languages of all time because it popularized two paradigms which are extremly important for the evolution
// of programing

//PROTOTYPAL INHERITANCE - objects without classes, and prototype delegation, aka OLOO- Objects Lining to Other Objects

// AND

// FUNCTIONAL PROGRAMMING enabled by lambda with closure

// sometimes called the two pillars of javaScript


// FACTORY FUNCTIONS - are simply constructor functions minus the "new" requirement, global pollution danger and awkward limitations (Including
// that annoying inital capitalized letter convention)

// CONSTUCTOR FUNCTIONS- Sometimes we need a "blueprint" for creating many objects of the same "type".
//  The way to create an "object type", is to use an object constructor function.

// function Person(first, last, age, eye) {
//  this.firstName = first;
// this.lastName = last;
//  this.age = age;
//  this.eyeColor = eye;
//}

//In the example above, function Person() is an object constructor function.
//  Objects of the same type are created by calling the constructor function with the new keyword:

// var myFather = new Person("John", "Doe", 50, "blue");
// var myMother = new Person("Sally", "Rally", 48, "green");


// Javascript doesn't need constructor functions because any function can return a new abject. With dynamic object extension,
// ovbject literals and 'Object.create()' , we have everything we need-- none of the mess.
//  And 'this' behaves just like it does in any other function.

// Classical Inheritance -lets you inherit only from a single ancestor


//     The copy mechanism is another form of prototypal inheritance. Sources of clone properties are a specific kind of prototype called exemplar prototypes, 
//         and cloning an exemplar prototype is known as concatenative inheritance.
//    You can copy/extend object properties using object spread syntax: {…a, …b}.

// Concatenative inheritance is possible because of a feature in JavaScript known as dynamic object extension: 
//   the ability to add to an object after it has been instantiated.