#!/usr/bin/node
const myFunction = process.argv;
if (myFunction > 2) {
  console.log('HBTN cool');
} else if (myFunction === 1) {
  console.log('HBTN');
} else {
  console.log('No argument');
}
