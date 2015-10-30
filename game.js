var ans1 = document.getElementById('answer1');
var ans2 = document.getElementById('answer2');
var ans3 = document.getElementById('answer3');
var ans4 = document.getElementById('answer4');
var ans5 = document.getElementById('answer5');
var ans6 = document.getElementById('answer6');


var right = 'Correct! ';
var wrong = 'Wrong! ';

var score = 0;
alert("Hello! Let's play a guessing game");

function questionOne(){
var birthPlace = prompt('Was I born in Oregon? YES or NO');
console.log('birthPlace user answer: ' + birthPlace);

  if (birthPlace.toLowerCase() === 'yes' || birthPlace.toLowerCase() === 'y' || birthPlace.toLowerCase() ==='yes!') {
    ans1.innerHTML = right + 'I was born in Eugene, Oregon!' + '<br><img src = "img/eugene.png" alt = "map of oregon">';
    ans1.className = 'correct';
    score += 1;
  } else {
    ans1.innerHTML = wrong + 'I was born in Eugene, Oregon!';
    ans1.className = 'incorrect';
  }
};

function questionTwo() {
var collegeDegree = prompt('Did I graduate college with a degree in Psychology? YES or NO');
console.log('collegeDegree user answer: ' + collegeDegree);

  if (collegeDegree.toLowerCase() === 'yes' || collegeDegree.toLowerCase() === 'y' || collegeDegree.toLowerCase() === 'yes!') {
    ans2.innerHTML = wrong + 'I earned a degree in Biology!';
  } else {
    ans2.innerHTML = right + 'I earned a degree in Biology!' + '<br><img src = "img/collegedegree.png" alt = "college diploma and hat">';
    ans2.className = 'correct';
    score += 1;
  }
};

function questionThree() {
var favoriteAnimal = prompt('Is my favorite animal an Elephant? YES or NO');
console.log('favoriteAnimal user answer: ' + favoriteAnimal);

  if (favoriteAnimal.toLowerCase() === 'yes' || favoriteAnimal.toLowerCase() === 'y' || favoriteAnimal.toLowerCase() === 'yes!') {
      ans3.innerHTML = right + 'Elephants are my favorite animal!' + '<br><img src = "img/elephant.jpg" alt = "elephant">';
      ans3.className = 'correct';
      score += 1;
  } else {
    ans3.innerHTML = wrong + 'Elephants are my favorite animal!';
    ans3.className = 'incorrect';
  }
};

function questionFour() {
var numberOfPets = parseInt(prompt('How many pets do you think I have? Guess a number from 1-10!'));
console.log('numberOfPets user answer: ' + numberOfPets);

  if (numberOfPets === 4) {
      ans4.innerHTML = right + 'I have 4 pets total: 2 dogs and 2 cats!' + '<br><img src = "img/dogsandcats.jpg" alt = "cats and dogs">';
    ans1.className = 'correct';
    score += 1;
  } else if(numberOfPets < 4) {
      ans4.innerHTML = wrong + 'you guessed too low!';
      ans4.className = 'incorrect';
  } else {
    ans4.innerHTML = wrong + 'you guessed too high!';
    ans4.className = 'incorrect';
  }
};

function questionFive() {
var typeOfCar = prompt('Do I drive a red Fiat 500 Sport? YES or NO');
console.log('typeOfCar user answer:' + typeOfCar);

  if (typeOfCar.toLowerCase() === 'yes' || typeOfCar.toLowerCase() === 'y' || typeOfCar.toLowerCase() === 'yes!') {
    ans5.innerHTML = right + 'I drive a red Fiat Sport!' + '<br><img src = "img/fiat.jpg" alt = "red fiat 500 sport">';
    ans5.className = 'correct';
    score += 1;
  } else {
    ans5.innerHTML = wrong + 'I drive a red Fiat 500 Sport!';
    ans5.className = 'incorrect';
  }
};

function questionSix() {
var numberOfCities = parseInt(prompt('How many cities have I lived in? Guess a number from 1-10!'));
console.log('numberOfCities user answer: ' + numberOfCities);

  if (numberOfCities === 4) {
    ans6.innerHTML = right + 'I have lived in Eugene, Seattle Boise and Los Angeles' + '<br><img src = "img/seattle.jpg" alt = "seattle skyline">';
    ans6.className = 'correct';
    score += 1;
  } else if (numberOfCities < 4) {
      ans6.innerHTML = wrong + 'you guessed too low!';
      ans6.className = 'incorrect';
  } else {
      ans6.innerHTML = wrong + 'you guessed too high!';
      ans6.className = 'incorrect';
  }
};


questionOne();
setTimeout(questionTwo, 200);
setTimeout(questionThree, 221);
setTimeout(questionFour, 243);
setTimeout(questionFive, 264);
setTimeout(questionSix, 285);


var scoreMessage = document.getElementById('score-message');

scoreMessage.innerHTML = 'Congratulations! You finished, and your final score is ' + score + ' out of 6!';
