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

  for (let i = 0; i < directions.length; i++){
    if (directions.charAt(i) === '('){
      up++;
    }
    else{
      down++;
    }
    if (((up-down) === 0 ) && ( up !== 0 )){
      basement = i;
    }
  }
  console.timeEnd('funchallenge');
  console.log('Santa, go to floor:', up - down);
  console.log('Santa, you will enter the basement at:', basement)
})
