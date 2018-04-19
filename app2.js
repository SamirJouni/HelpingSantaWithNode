"use strict";

const fs = require('fs');

fs.readFile('./input.txt', (error, data) =>{

  if (error){
    console.log(error);
  }

  console.time('funchallenge');

  var directions = data.toString(),
      directionsLength = directions.length,
      floor = 0;

  for (var position = 0; position < directionsLength; position++){

    if (directions.charCodeAt(position) === 40){

      floor++;
    }
    else{

      floor--;
    }

    if (floor === -1 ){

      console.log('Santa, you will enter the basement at:', position + 1);
      break;
    }
  }
  console.timeEnd('funchallenge');
})
