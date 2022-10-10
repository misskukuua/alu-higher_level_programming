#!/usr/bin/node
const myFunction = (process.argv[2]);

if (myFunction) {
  console.log('My number: ' + myFunction);
} else {
  console.log('Not a number);
