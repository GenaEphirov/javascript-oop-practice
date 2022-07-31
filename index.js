'use strict'

function student() {
  this.presence = true;
  this.age = 17;
  this.marks = [5, 5, 5, 5, 3, 5, 3, 4, 4, 4, 3];
  this.average = (iter) => {
    if (!iter.length) {
      return `no info`
    }
    return iter.reduce((a, b) => a+b) / iter.length;
  };
}

function worker() {
  this.education = 'МГУ';
  this.place = 'office';
  this.salary = 50000
  this.getInfo = () => {
    return this
  }
}

worker.prototype.__proto__ = new student()

let Andrey = new student('Andrey');
Andrey.marks = [];
let AndreyAfter = new worker();

let someObj = {}

