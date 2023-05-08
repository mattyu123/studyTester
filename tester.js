const questions = {
  question1: "What is 24 / 2?: a. 12 b. 5 c. 8 d. 10 ",   
  question2: "What is the fourth planet from the sun?: a. Earth b. Venus c. Saturn d. Mars ",  
  question3: "In meters how long is an olympic pool?: a. 10 b. 50 c. 35 d. 100"
};

const getRandomQuestion = function(questionList) {
  const keys = Object.keys(questionList);
  return questionList[keys[ keys.length * Math.random() << 0]];
}

const question = getRandomQuestion(questions)

//returns value that user put in 
const askUserQuestion = prompt(question)

console.log(question)
console.log(askUserQuestion)

//Manually test that it works
if (question === questions["question1"]) {
  if (askUserQuestion.toLowerCase() === "a") {
    console.log ("Right answer")
  } else {
    console.log("Wrong answer")
  }
}



//Code tested and works
// if (askUserQuestion === "a" || askUserQuestion === "A") {
//   console.log("hi")
// }

