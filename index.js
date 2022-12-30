var readlineSync=require('readline-sync')

var score=0

// welcome function

function welcome() {
    var usrName = readlineSync.question("What's your name? ")
    console.log("Hello " + usrName + ", welcome to DO YOU KNOW FAHEEM!")
    console.log("----------------------------------------")
}

    // play function

function play(question, answer) {

    var usrAns = readlineSync.question(question)
  
    if (usrAns.toUpperCase() === answer.toUpperCase()) {
      console.log("Right!")
  
      score++
    } else {
      console.log("Wrong")
    }
    console.log("Current score: " + score)
    console.log("----------------------------------------")
}
  
