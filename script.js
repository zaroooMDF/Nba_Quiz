(function(){

  const questions = [{
  "text": "Which High school did Kobe Bryant go to? ",
  "answers": [{
    "text": "Lower Merion High School",
    "correct": true
	    }, {
    "text": "St. Vincent - St. Mary High School",
    "correct": false
	    }, {
    "text": "MontVerde Academy High School",
    "correct": false
	    }, {
    "text": "St. Michaels High School",
    "correct": false
	    }]
	}, {
  "text": "Who's Taller: 6th in all time scoring, or 7th?",
  "answers": [{
    "text": "6th",
    "correct": false
	    }, {
    "text": "7th",
    "correct": true
	    }, {
    "text": "Same Height",
    "correct": false
	    }]
	}, {
  "text": "Who's the First ever Coach of the Year?",
  "answers": [{
    "text": "Phil Jackson",
    "correct": false
	    }, {
    "text": "Harry Gallatin",
    "correct": true
	    }, {
    "text": "Red Auerbach",
    "correct": false
	    }, {
    "text": "Ray Scott",
    "correct": false
	    }]
	}, {
  "text": "Who's been Selected to more NBA first teams, Karl Malone, LeBron James, Tim Duncan or Micheal Jordan?",
  "answers": [{
    "text": "Karl Malone",
    "correct": true
	    }, {
    "text": "Micheal Jordan",
    "correct": false
	    }, {
    "text": "Tim Duncan",
    "correct": false
	    }, {
    "text": "LeBron James",
    "correct": false
	    }]
	}, {
  "text": "Who had the 3rd most dunks in the 2014-15 regular season?",
  "answers": [{
    "text": "Lebron James",
    "correct": false
	    }, {
    "text": "DeAndre Jordan",
    "correct": false
	    }, {
    "text": "Nerlens Noel",
    "correct": true
	    }, {
    "text": "Zach Lavine",
    "correct": false
	    }]
	}, {
  "text": "Who's the Tallest player ever drafted?",
  "answers": [{
    "text": "Yasutaka Okayama",
    "correct": true
	    }, {
    "text": "Manute Bol",
    "correct": false
	    }, {
    "text": "George Murresan",
    "correct": false
	    }, {
    "text": "\n\nToygar Marianus",
    "correct": false
	    }]
	}, {
  "text": "Who had the Longest winning streak in history?",
  "answers": [{
    "text": "'71 Lakers",
    "correct": true
	    }, {
    "text": "'56 Celtics",
    "correct": false
	    }, {
    "text": "'15 Warriors",
    "correct": false
	    }, {
    "text": "'12 Heat",
    "correct": false
	    }]
	}, {
  "text": "Which Teams has had the most Defensive player of the year's playing on them?",
  "answers": [{
    "text": "Spurs",
    "correct": false
	    }, {
    "text": "Magic",
    "correct": false
	    }, {
    "text": "Pistons",
    "correct": true
	    }, {
    "text": "Bulls",
    "correct": false
	    }]
	}, {
  "text": "Who is the only player to ever lead the NCAA, NBA and the ABA in scoring?",
  "answers": [{
    "text": "Micheal Jordan",
    "correct": false
	    }, {
    "text": "Wilt Chaimberlain",
    "correct": false
	    }, {
    "text": "Julius Erivng",
    "correct": false
	    }, {
    "text": "Rick Barry",
    "correct": true
	    }]
	}, {
  "text": "Who is the Quickest DQ ever in a game? (it was 3 min)",
  "answers": [{
    "text": "Shaquille O'neal",
    "correct": false
	    }, {
    "text": "Bubba Wells",
    "correct": true
	    }, {
    "text": "Rasheed Wallace",
    "correct": false
	    }, {
    "text": "Tim Duncan",
    "correct": false
	    }]
	}];

  let quizEl = document.getElementById("quiz"),
      resultEl = document.getElementById("result"),
      questionEl = document.getElementById("question"),
      answersEl = document.getElementById("answers"),
      finishedEl = document.getElementById("finished"),
      currentQuestionIndex,
      lastQuestionIndex = questions.length-1,
      score = 0,
      animating = false;

  function selectQuestion( questionIndex ){
    
    if( animating ){
      return;
    }

    if( !questions[questionIndex] ){
      console.log( "Question doesn't exist!" );
      return;
    }

    currentQuestionIndex = questionIndex;
    let question = questions[currentQuestionIndex],
        correctAnswerIndex;

    answersEl.innerHTML = "";

    questionEl.innerHTML = question.text;

    for(let i=0;i<question.answers.length;i++){
      let answer = question.answers[i];
      let answerEl = document.createElement("div");
      answerEl.className = "answer";
      answerEl.innerHTML = answer.text;
      if( answer.correct ){
        correctAnswerIndex = i;
      }
      answerEl.addEventListener( "click", function(e){
        e.preventDefault();
        answerEl.className += " selected";
        if( answer.correct ){
          score++;
          answerEl.className += " correct";
        }
        else {
          answerEl.className += " incorrect";
          answersEl.childNodes[correctAnswerIndex].className += " correct";
        }
    
        updateResult();

        animating = true;

        setTimeout(function(){

          animating = false;

          if( currentQuestionIndex === lastQuestionIndex ){
            endQuiz();
          }
          else {
            selectQuestion( currentQuestionIndex + 1 );
          }
        },1*1000);
      });

      answersEl.appendChild( answerEl );
    }

  }

  function updateResult(){
    resultEl.innerHTML = score + "/" +  questions.length;
  };

  function endQuiz(){
    quizEl.innerHTML = "You have successfully answered on " + score + " out of " + questions.length + " questions!";
  }
    
  updateResult();
  selectQuestion(0);

})();