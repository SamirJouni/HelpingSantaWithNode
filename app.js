"use strict";

const fs = require('fs');

fs.readFile('./input.txt', (error, data) =>{

  if (error){
    console.log(error);
  }
  console.time('funchallenge');

  var directions = data.toString();
  for (var up = -1, index = 0; index != -1; up++, index = directions.indexOf('(', index + 1));
  for (var down = -1, index = 0; index != -1; down++, index = directions.indexOf(')', index + 1));

  console.timeEnd('funchallenge');
  console.log('Santa, go to floor:', up - down);
})
