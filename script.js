// const minnum = 1;
// const maxnum = 100;
// const answer = Math.floor(Math.random() * (maxnum - minnum +1) + minnum)




// let attempts = 0;
// let guess = document.getElementById("guess");
// let running = true;
// let submit = document.getElementById('submit');


// let result = document.getElementById("result");



// submit.onclick = function(){

//     guess=Number(guess.value);

//     if(isNaN(guess)){
//         result = document.getElementById("result").textContent = `enter a valid number`
//     }
//     else if(guess < minnum  || guess > maxnum){
//         result = document.getElementById("result").textContent = `enter a valid number`
//     }
//     else{
//         attempts++;
//         if(guess < answer){
//             result = document.getElementById("result").textContent = `too low try again`
//         }
//         else if(guess > answer){
//             result = document.getElementById("result").textContent = `too high try again`
//         }
//         else{
//             result = document.getElementById("result").textContent = `you're correct answer is ${answer} , it took you ${attempts} attempts`

//         }
//     }

    
// }

const minnum = 1;
const maxnum = 100;
const answer = Math.floor(Math.random() * (maxnum - minnum + 1) + minnum);
let attempts = 0;
let running = true;

let submit = document.getElementById('submit');
let guess = document.getElementById("guess");
let result = document.getElementById("result");
let nope = document.getElementById("nope");

// nope.textContent = `youre ${answer}`

submit.onclick = function(){
  let userGuess = Number(guess.value);
  if(isNaN(userGuess)){
    result.textContent = `Enter a valid number`;
    guess.value = "";
  } 
  
  else if(userGuess < minnum || userGuess > maxnum){
    result.textContent = `Enter a valid number`;
    guess.value = "";
  } 
  
  else{
    attempts++;

    if (attempts == 7){
        result.textContent = `You failed, The answer is ${answer}`
        answer = Math.floor(Math.random() * (maxnum - minnum + 1) + minnum);
        attempts = 0;
        guess.value = "";
        nope.textContent = ``;

    }

    else if(userGuess < answer){
      result.textContent = `Too low, try again`;
      guess.value = "";
      nope.textContent = `you have ${7-attempts}/7 attempts left`
    } 
    
    else if(userGuess > answer){
      result.textContent = `Too high, try again`;
      guess.value = "";
      nope.textContent = `you have ${7-attempts}/7 attempts left`
    } 
    
    else{
      result.textContent = `You're correct! The answer is ${answer}, it took you ${attempts} attempts`;
      running = false;
    }
  }
}

