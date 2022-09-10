// 'use strict'

// function student() {
//   this.presence = true;
//   this.age = 17;
//   this.marks = [5, 5, 5, 5, 3, 5, 3, 4, 4, 4, 3];
//   this.average = (iter) => {
//     if (!iter.length) {
//       return `no info`
//     }
//     return iter.reduce((a, b) => a+b) / iter.length;
//   };
// }

// function worker() {
//   this.education = 'МГУ';
//   this.place = 'office';
//   this.salary = 50000
//   this.getInfo = () => {
//     return this
//   }
// }

// worker.prototype.__proto__ = new student()

// let Andrey = new student('Andrey');
// Andrey.marks = [];
// let AndreyAfter = new worker();

// let parent = {
//   string: 'some string',
//   array: [1, 2, 3, 4, 5],
//   object: {
//     changable: 'it will be changed',
//     unchangable: 'constant'
//   }
// }
// let child = Object.create(parent, {
//   name: {value: 'just a child'},
// })
// let clone = Object.create(Object.getPrototypeOf(child), Object.getOwnPropertyDescriptors(child))

// parent.object.changable = 'Changed'

// let createFruit = function(kind, price) {
//   return class {
//     constructor() {
//       this.kind = kind;
//       this.price = price;
//     }
//     getPrice() {
//       return `${kind} costs ${price}`
//     }
//   }
// }
// let fApple = createFruit('apple', 100)
// let apple = new fApple

// class Book {
//   constructor(title, author, price) {
//     this.title = title;
//     this.author = author;
//     this.price = price;
//   }
//   get bookTitle() {return this.title}
//   set bookTitle(value) {this.title = value}
// }

// class Account {
//   constructor(id, username, friends) {
//     this._id = id;
//     this._username = username;
//     this._friends = friends;
//   }
//   set id(value) {
//     this._id = value;
//   }
//   get id() {
//     return this._id
//   }
//   set username(value) {
//     if (value.length > 4) {
//       this._username = value
//     } else {
//       console.log('Operation failed (username must contain at least 4 letters)') 
//     }
//   }
//   get username() {
//     return this._username
//   }
//   set friends(value) {
//     this._friends.push(value)
//   }
//   get friends() {
//     return this._friends
//   }
// }

// Andrey = new Account(4, 'andrey', [])

// Andrey.friends = {username: 'Vasya', id: 3}
// Andrey.friends = {username: 'Petya', id: 2}

// const test = {
//   _title: 'War never changes',
//   someMethod() {
//     let someVar = {
//       title: this._title
//     }
//     console.log(someVar.title)
//   }
// }

// const performFunction = (func) => {
//   return func()
// }
// performFunction(test.someMethod.bind(test))

// // ||||||||||
// // \/\/\/\/\/
// function partial(func, ...argsBound) {
//   return function(...args) {
//     return func.call(this, ...argsBound, ...args);
//   }
// }
// // /\/\/\/\/\/\
// // ||||||||||||



// const askPassword = (f1, f2) => {
//   f2()
// }
// let user = {
//   name: 'John',

//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
// };

// askPassword(() => user.login(true), () => (user.login(false)));
// askPassword(user.login.bind(user, true), user.login.bind(user, false))
// function testingFunction() {
//   console.log('hello, world!')
// }
// let str = 'im a string'
// let num = 100
// let testingObject = {
//   testingFunction,
//   str,
//   num,
// }

// console.log(Object.entries(testingObject))

function something({}) {
  return;
}

console.log(something(123));
console.log(something("string"));
console.log(something(["Hello, world", 1024]));
console.log(something({boo: 'foo', fool: 'nope'}));
console.log(something(() => 'arrow func'));