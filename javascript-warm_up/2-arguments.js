#!/usr/bin/node
const myFunction = process.argv;
console.log(myFunction === 2 ? 'No argument' : myFunction === 3 ? 'Argument found' : 'Arguments found');

