var chalk = require("chalk");
var readlineSync = require('readline-sync')

var score = 0

// welcome function
var usrName = readlineSync.question("What's your name? ")

function welcome() {

  console.log("")
  console.log("Hello " + chalk.blue(usrName) + ", welcome to DO YOU KNOW FAHEEM!")
  console.log("Note: The answers are case-insensitive.")
  console.log("----------------------------------------")
}

// play function

function play(question, answer) {

  var usrAns = readlineSync.question(question)

  if (usrAns.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Right!"))

    score++
  } else {
    console.log(chalk.red("Wrong!"))
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
  },
  {
    question: "What subject I did my graduation in? ",
    answer: "physics"
  }
]

function game() {
  for (i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].answer)
  }
}

//data of high scores
var highScore = [
  {
    name: "Himanshu",
    score: 6
  },
  {
    name: "Divya",
    score: 5
  },
  {
    name:"Jane",
    score:4
  },
  {
    name:"Kaushal",
    score:4
  }
]

function showScores() {
  console.log("Your final score is: " + chalk.green(score))
  console.log("High scores are as follows: ")
  highScore.map(i => console.log(chalk.blue(i.name) + " : " + chalk.green(i.score)))
}

welcome();
game();

var scoreList = Object.values(highScore)

for (i = 0; i < scoreList.length; i++) {
  if (score >= scoreList[i].score) {
    console.log(chalk.green("Congratulations, you have beaten a high score."))
    console.log()
    highScore.splice(i,0,{name:usrName,score:score})
    showScores()
    break
  } else {
    if (i===scoreList.length-1){
      console.log(chalk.red("Sorry you couldn't beat a high score. Better luck next time!"))
      showScores()
    }else{
      continue
    }

  }
}

