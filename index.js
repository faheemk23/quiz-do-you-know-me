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
  
// array of objects

var questions = [
    {
      question: 'Where do i live?(Hint: city name) ',
      answer: "greater Noida"
    },
    {
      question: "Did i study in Delhi University? ",
      answer: 'yes'
    },
    {
      question: "Am i older than 20? ",
      answer: 'yes'
    },
    {
      question: "Do i like batman? ",
      answer: 'yes'
    },
    {
      question: "Do i like cricket? ",
      answer: "no"
    }
]

function game() {
    for (i = 0; i < questions.length; i++) {
      play(questions[i].question, questions[i].answer)
    }
}
  
// data of high scores
var highScore = [
    {
      name: "Himanshu",
      score: 4
    },
    {
      name: "Divya",
      score: 3
    }
]

function showScores() {
    console.log("Congratulations, your final score is: " + score)
    console.log("High scores are as follows. Send a screenshot if you have broken one.")
    highScore.map(i => console.log(i.name + " : " + i.score))
}
  