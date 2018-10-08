'use strict'

function task1(num = 10) {

  //Factorial 
  let count = num;
  let output = 1;
  while (count !== 1) {
    output *= count;
    --count;
  }
  return output;
}

function task2(str = 'Hello World and Coders') {

  //String reverse
  return str.split("").reverse().join("");
}


function task3(str = 'Amelie Lens all night long @ Labyrinth Club 2017') {

  //Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 
  Array.prototype.taskChange = function () {
    const input = this;
    let output = [];
    for (let j of input) {
      if (j !== ' ') {
        j = j.charCodeAt(0);
        j++;
        j = String.fromCodePoint(j);
        if ((j === 'a') || (j === 'e') || (j === 'i') || (j === 'o') || (j === 'u')) {
          j = j.toUpperCase();
        }
      }
      output.push(j);
    }
    return output;
  }
  return [str, str.split('').taskChange().join('')];
}

//In the parameters you need to specify the function to be checked (ie. print(output = <your_function>())).
function print(output = task3()) {
  const div = document.createElement('div');
  for (let elem of output) {
    div.innerHTML += `${elem} <br/>`;
  }
  document.body.appendChild(div);
}
document.addEventListener("DOMContentLoaded", print());