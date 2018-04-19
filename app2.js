"use strict";

const fs = require('fs');

fs.readFile('./input.txt', (error, data) =>{

  if (error){
    console.log(error);
  }

  console.time('funchallenge');

  var directions = data.toString(),
      length = directions.length,
      floor = 0;

  for (var i = 0; i < length; i++){

    if (directions.charCodeAt(i) === 40){

      floor++;
    }
    else{

      floor--;
    }

    if (floor === -1 ){

      console.log('Santa, you will enter the basement at:', i + 1);
      break;
    }
  }
  console.timeEnd('funchallenge');
})
