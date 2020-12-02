const qBank = [
    {
      question:
        "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
        answers: ["Richard Branson", "Alan Sugar", "Donald Trump", "Bill Gates"],
        correct: "0",
        questionId: "099099"
    },
    {
      question:
        'Where is the train station "Llanfair­pwllgwyngyll­gogery­chwyrn­drobwll­llan­tysilio­gogo­goch"?',
      answers: ["Wales", "Moldova", "Czech Republic", "Denmark"],
      correct: "0",
      questionId: "183452"
    },
    {
      question:
        "Which company did Valve cooperate with in the creation of the Vive?",
      answers: ["HTC", "Oculus", "Google", "Razer"],
      correct: "0",
      questionId: "267908"
    },
    {
      question:
        'What name represents the letter "M" in the NATO phonetic alphabet?',
      answers: ["Mike", "Matthew", "Mark", "Max"],
      correct: "2",
      questionId: "648452"
    },
    {
      question: "What is the first book of the Old Testament?",
      answers: ["Genesis", "Exodus", "Leviticus", "Numbers"],
      correct: "3",
      questionId: "786649"
    },
    {
      question:
        "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
      answers: ["Key", "Sword", "Pen", "Cellphone"],
      correct: "2",
      questionId: "839754"
    },
    {
      question:
        "Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?",
      answers: [
        "Cabbage Patch Kids",
        "Transformers",
        "Care Bears",
        "Rubik’s Cube"
      ],
      correct: "1",
      questionId: "98390"
    },
    {
      question: "What does a funambulist walk on?",
      answers: ["A Tight Rope", "Broken Glass", "Balls", "The Moon"],
      correct: "3",
      questionId: "1071006"
    },
    {
      question: "In past times, what would a gentleman keep in his fob pocket?",
      answers: ["Watch", "Money", "Keys", "Notebook"],
      correct: "2",
      questionId: "1174154"
    },
    {
      question: "Area 51 is located in which US state?",
      answers: ["Nevada", "Arizona", "New Mexico", "Utah"],
      correct: "Nevada",
      questionId: "1"
    },
    {
      question: "How would one say goodbye in Spanish?",
      answers: ["Adiós", " Hola", "Au Revoir", "Salir"],
      correct: "Adiós",
      questionId: "2"
    },
    {
      question: "What is the largest organ of the human body?",
      answers: ["Skin", "Heart", "large Intestine", "Liver"],
      correct: "Skin",
      questionId: "3"
    },
    {
      question: "Which sign of the zodiac is represented by the Crab?",
      answers: ["Cancer", "Libra", "Virgo", "Sagittarius"],
      correct: "Cancer",
      questionId: "1"
    }
  ];
  

const q = document.getElementById('question');  
const quiz = document.getElementById('quiz');
const submitbtn = document.getElementById('btn')
let currentquestion = 0;

let totaquestion = qBank.length;
let skipq = 0;
let score = 0;
let wrong = 0;


function validateanswer(cor){
  if(cor === qBank[currentquestion].correct){
    score++;
  }else{
    wrong++;
  }
}


function genrateres(){
  document.getElementById('result').style.display = "block";
  Total_Question.innerHTML = totaquestion;
  correct.innerHTML = score;
  wrongq.innerHTML = wrong;
  skip.innerHTML = skipq
  attempt.innerHTML = parseInt(totaquestion) - parseInt(skipq);
  percentage.innerHTML = Math.round((score/totaquestion) * 100);
}

function reload(){
  location.reload();
}

function getselected(){
  const ansel = document.querySelectorAll('.answer');
  let sk = 0;
  ansel.forEach((ansel) =>{
    if(ansel.checked){
        answer =  ansel.id;
        validateanswer(answer)
    }else{
      sk++
    }
  })
  if(sk == 4){
    skipq++;
  }
}

let loadquiz = () =>{
    dselectans()
    const currentquizdata = qBank[currentquestion];
    q.innerHTML = `${currentquestion+1}.  ${currentquizdata.question}`;
    for(i=0; i<4; i++){
        document.getElementById(`${i}_text`).innerHTML = currentquizdata.answers[i]
    }
    
}

function dselectans(){
  const ansel = document.querySelectorAll('.answer');
  ansel.forEach((ansel)=>{
    ansel.checked = false;
  })
}

loadquiz()
submitbtn.addEventListener('click',()=>{
    getselected();
    if(currentquestion < qBank.length-1){      
        currentquestion++;
        loadquiz();
    }else{
      /// show result
      quiz.style.display = "none";
      genrateres();
    }
})