let apiUrl =
  "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";
var questions;
var index = 0;
var btns = document.getElementsByClassName("list-group-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current.length > 0)
      current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var next = document.getElementById("next");
var highscore = document.getElementById("highscore");
next.addEventListener("click", () => {
  if (validateAnswer()) {
    index++;
    if (index === 9) {
      next.innerText = "Submit";
    } else if (index === 10) {
      let rightAnswers = showResult();
      if (readSession()) {
        sessionStorage.setItem(
          sessionStorage.length + 1,
          JSON.stringify({
            Date: Date.now(),
            CorrectAnswers: rightAnswers,
            TotalQuestions: questions.results.length,
          })
        );
      }
      alert(
        "Your Score is : " + rightAnswers + " / " + questions.results.length
      );
      let questionsBody = document.getElementById("questionBody");
      questionsBody.style = "display:none";
      let mainScreen = document.getElementById("mainScreen");
      mainScreen.style = "display:block;";
      highscore.click();
    } else {
      clearActive();
      assignQuestion();
    }
  }
});

highscore.addEventListener("click", () => {
  let title = document.getElementsByClassName("modal-title")[0];
  let tbody = document.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
  let num = 1;
  if (readSession()) {
    if (sessionStorage.length > 1) {
      title.innerHTML = "Annavi Raja";
      for (let i = 1; i <= sessionStorage.length; i++) {
        if (sessionStorage.getItem(i) !== null) {
          let obj = JSON.parse(sessionStorage.getItem(i));
          let row =
            "<tr><td scope='row'>" +
            num++ +
            "</td><td>" +
            new Date(obj.Date).toLocaleDateString("in-IN") +
            "</td><td>" +
            obj.CorrectAnswers +
            "/" +
            obj.TotalQuestions +
            "</td></tr>";
          tbody.innerHTML += row;
        }
      }
    } else {
      title.innerHTML = "No scores found";
    }
  } else {
    title.innerHTML = "Sorry, your browser does not support Web Storage...";
  }
});

function readSession() {
  if (typeof Storage !== "undefined") {
    return true;
  } else {
    return false;
  }
}

function showResult() {
  let rightAnswers = 0;
  for (let i = 0; i < questions.results.length; i++) {
    rightAnswers +=
      questions.results[i].correct_answer === questions.results[i].selected
        ? 1
        : 0;
  }
  return rightAnswers;
}

function validateAnswer() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) {
    questions.results[index].selected = current[0].innerText;
    current[0].className = current[0].className.replace(" active", "");
    return true;
  } else {
    alert("please select your answer");
  }
  return false;
}

function clearActive() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0)
    current[0].className = current[0].className.replace(" active", "");
}

async function playQuiz() {
  index = 0;
  let mainScreen = document.getElementById("mainScreen");
  mainScreen.style = "display:none;";

  questions = await getQuestions();
  for (let i = 0; i < questions.results.length; i++) {
    questions.results[i].selected = "";
  }
  await assignQuestion();
  let questionsBody = document.getElementById("questionBody");
  questionsBody.style = "display:block";
}

async function getQuestions() {
  let response = await fetch(apiUrl);
  let responseData = await response.json();
  return responseData;
}

async function assignQuestion() {
  let array = questions.results[index].incorrect_answers;
  array.push(questions.results[index].correct_answer);
  let choice = array.sort();
  let question = document.getElementById("question");
  question.innerHTML = index + 1 + ") " + questions.results[index].question;
  let listItems = document.getElementsByClassName("list-group-item ");
  for (let i = 0; i < listItems.length; i++) listItems[i].innerHTML = choice[i];
}
