"use strict";

const fs = require('fs');

fs.readFile('./input.txt', (error, data) =>{

  if (error){
    console.log(error);
  }
  console.time('funchallenge');

  var directions = data.toString(),
  up = 0,
  down = 0,
  basement = 0;

  for ( i = 0; i < directions.length; i++){
    if (directions[i] === '('){}
    else{}
    if (){}
  }
  console.timeEnd('funchallenge');
  console.log('Santa, go to floor:', up - down);
  console.log('Santa, you will enter the basement at:', basement)
})
