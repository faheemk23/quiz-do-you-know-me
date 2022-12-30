var readlineSync=require('readline-sync')

var score=0

// welcome function

function welcome() {
    var usrName = readlineSync.question("What's your name? ")
    console.log("Hello " + usrName + ", welcome to DO YOU KNOW FAHEEM!")
    console.log("----------------------------------------")
    }

