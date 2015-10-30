var ans1 = document.getElementById('answer1');
var ans2 = document.getElementById('answer2');
var ans3 = document.getElementById('answer3');
var ans4 = document.getElementById('answer4');
var ans5 = document.getElementById('answer5');
var ans6 = document.getElementById('answer6');

<<<<<<< HEAD
var right = 'Correct! ';
var wrong = 'Wrong! ';

var score = 0;
alert("Hello! Let's play a guessing game");

function questionOne(){
var birthPlace = prompt('Was I born in Oregon? YES or NO');
console.log('birthPlace user answer: ' + birthPlace);

  if (birthPlace.toLowerCase() === 'yes' || birthPlace.toLowerCase() === 'y' || birthPlace.toLowerCase() ==='yes!') {
    ans1.innerHTML = right + 'I was born in Eugene, Oregon!';
    score += 1;
  } else {
    ans1.innerHTML = wrong + 'I was born in Eugene, Oregon!';
  }
};

function questionTwo() {
var collegeDegree = prompt('Did I graduate college with a degree in Psychology? YES or NO');
console.log('collegeDegree user answer: ' + collegeDegree);

  if (collegeDegree.toLowerCase() === 'yes' || collegeDegree.toLowerCase() === 'y' || collegeDegree.toLowerCase() === 'yes!') {
    ans2.innerHTML = wrong + 'I earned a degree in Biology!';
  } else {
    ans2.innerHTML = right + 'I earned a degree in Biology!';
    score += 1;
  }
};

function questionThree() {
var favoriteAnimal = prompt('Is my favorite animal an Elephant? YES or NO');
console.log('favoriteAnimal user answer: ' + favoriteAnimal);

  if (favoriteAnimal.toLowerCase() === 'yes' || favoriteAnimal.toLowerCase() === 'y' || favoriteAnimal.toLowerCase() === 'yes!') {
      ans3.innerHTML = right + 'Elephants are my favorite animal!';
      score += 1;
  } else {
    ans3.innerHTML = wrong + 'Elephants are my favorite animal!';
  }
};

function questionFour() {
var numberOfPets = parseInt(prompt('How many pets do you think I have? Guess a number from 1-10!'));
console.log('numberOfPets user answer: ' + numberOfPets);

  if (numberOfPets === 4) {
      ans4.innerHTML = right + 'I have 4 pets total: 2 dogs and 2 cats!';
    score += 1;
  } else if(numberOfPets < 4) {
      ans4.innerHTML = wrong + 'you guessed too low!';
  } else {
    ans4.innerHTML = wrong + 'you guessed too high!';
  }
};

function questionFive() {
var typeOfCar = prompt('Do I drive a red Fiat 500 Sport? YES or NO');
console.log('typeOfCar user answer:' + typeOfCar);

  if (typeOfCar.toLowerCase() === 'yes' || typeOfCar.toLowerCase() === 'y' || typeOfCar.toLowerCase() === 'yes!') {
      ans5.innerHTML = right + 'I drive a red Fiat Sport!';
    score += 1;
  } else {
    ans5.innerHTML = wrong + 'I drive a red Fiat 500 Sport!';
  }
};

function questionSix() {
var numberOfCities = parseInt(prompt('How many cities have I lived in? Guess a number from 1-10!'));
console.log('numberOfCities user answer: ' + numberOfCities);

  if (numberOfCities === 4) {
      ans6.innerHTML = right + 'I have lived in Eugene, Seattle Boise and Los Angeles';
    score += 1;
  } else if (numberOfCities < 4) {
      ans6.innerHTML = wrong + 'you guessed too low!';
  } else {
      ans6.innerHTML = wrong + 'you guessed too high!';
  }
};

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
=======
var score = 0;
alert("Hello! Let's play a guessing game");

function firstQuestion() {
    var birthPlace = prompt('Was I born in Oregon? YES or NO');
    console.log('birthPlace user answer: ' + birthPlace);

    if (birthPlace.toLowerCase() === 'yes' || birthPlace.toLowerCase() === 'y' || birthPlace.toLowerCase() ==='yes!') {
      ans1.innerHTML = 'Correct! I was born in Eugene, Oregon!';
      score += 1;
    } else {
      ans1.innerHTML = 'Wrong, I was born in Eugene, Oregon!';
    }
  };

function secondQuestion() {
  var collegeDegree = prompt('Did I graduate college with a degree in Psychology? YES or NO');
  console.log('collegeDegree user answer: ' + collegeDegree);

  if (collegeDegree.toLowerCase() === 'yes' || collegeDegree.toLowerCase() === 'y' || collegeDegree.toLowerCase() === 'yes!') {
    ans2.innerHTML = 'Wrong! I earned a degree in Biology!';
  } else {
    ans2.innerHTML = 'Correct, I earned a degree in Biology!';
    score += 1;
  }
};

function thirdQuestion() {
  var favoriteAnimal = prompt('Is my favorite animal an Elephant? YES or NO');
  console.log('favoriteAnimal user answer: ' + favoriteAnimal);

  if (favoriteAnimal.toLowerCase() === 'yes' || favoriteAnimal.toLowerCase() === 'y' || favoriteAnimal.toLowerCase() === 'yes!') {
      ans3.innerHTML = 'Correct! I have always loved Elephants!';
      score += 1;
  } else {
    ans3.innerHTML = 'Wrong, My favorite animal is the Elephant!';
  }
};

function fourthQuestion() {
  var numberOfPets = parseInt(prompt('How many pets do you think I have? Guess a number from 1-10!'));
  console.log('numberOfPets user answer: ' + numberOfPets);

  if (numberOfPets === 4) {
    ans4.innerHTML = "Correct! I have 4 pets total: 2 dogs, and 2 cats!";
    score += 1;
  } else if(numberOfPets < 4) {
    ans4.innerHTML = 'Not quite, you guessed too low!';
  } else {
    ans4.innerHTML = 'Not quite, you guessed too high!';
  }
};

function fifthQuestion() {
  var typeOfCar = prompt('Do I drive a red Fiat 500 Sport? YES or NO');
  console.log('typeOfCar user answer:' + typeOfCar);

  if (typeOfCar.toLowerCase() === 'yes' || typeOfCar.toLowerCase() === 'y' || typeOfCar.toLowerCase() === 'yes!') {
    ans5.innerHTML = 'Correct! I drive a red Fiat 500 Sport!';
    score += 1;
  } else {
    ans5.innerHTML = 'Wrong, I do drive a red Fiat 500 Sport!';
  }
};

function sixthQuestion() {
  var numberOfCities = parseInt(prompt('How many cities have I lived in? Guess a number from 1-10!'));
  console.log('numberOfCities user answer: ' + numberOfCities);

  if (numberOfCities === 4) {
    ans6.innerHTML = 'Correct! I have lived in Eugene, Seattle, Boise, and Los Angeles';
    score += 1;
  } else if (numberOfCities < 4) {
    ans6.innerHTML = 'Not quite, you guessed too low!';
  } else {
    ans6.innerHTML = 'Not quite, you guessed too high!';
  }
};


firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fifthQuestion();
sixthQuestion();
>>>>>>> 0f05f6a806313908c06a062695ed060a9e1b7f9e

alert('Congratulations! You finished, and your final score is ' + score + ' out of 6!');
