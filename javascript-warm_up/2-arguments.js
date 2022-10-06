#!/usr/bin/node
const myFunction = process.argv;
if (myFunction.length === 4) {
  console.log('Argument found');
} else if (myFunction > 4) {
  console.log('Arguments found');
} else {
  console.log('No argument');
}
