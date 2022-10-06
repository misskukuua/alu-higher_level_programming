#!/usr/bin/node
const myFunction = process.argv;
console.log(myFunction === 2 ? 'Argument found' : myFunction === 3 ? 'Arguments found' : 'Argument found');
