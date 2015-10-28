var score = 0;
alert("Hello! Let's play a guessing game");

var birthPlace = prompt('Was I born in Oregon? YES or NO');
console.log('birthPlace user answer: ' + birthPlace);

if (birthPlace.toLowerCase() === 'yes' || birthPlace.toLowerCase() === 'y' || birthPlace.toLowerCase() ==='yes!') {
  alert('Correct! I was born in Eugene, Oregon!');
  score += 1;
} else {
alert('Wrong, I was born in Eugene, Oregon!');
}

var collegeDegree = prompt('Did I graduate college with a degree in Psychology? YES or NO');
console.log('collegeDegree user answer: ' + collegeDegree);

if (collegeDegree.toLowerCase() === 'yes' || collegeDegree.toLowerCase() === 'y' || collegeDegree.toLowerCase() === 'yes!') {
  alert('Wrong! I earned a degree in Biology!');
} else {
  alert('Correct, I earned a degree in Biology!');
  score += 1;
}

var favoriteAnimal = prompt('Is my favorite animal an Elephant? YES or NO');
console.log('favoriteAnimal user answer: ' + favoriteAnimal);

if (favoriteAnimal.toLowerCase() === 'yes' || favoriteAnimal.toLowerCase() === 'y' || favoriteAnimal.toLowerCase() === 'yes!') {
    alert('Correct! I have always loved Elephants!');
    score += 1;
} else {
  alert('Wrong, My favorite animal is the Elephant!');
}

var numberOfPets = parseInt(prompt('How many pets do you think I have? Guess a number from 1-10!'));
console.log('numberOfPets user answer: ' + numberOfPets);

if (numberOfPets === 4) {
  alert("Correct! I have 4 pets total: 2 dogs, and 2 cats!");
  score += 1;
} else if(numberOfPets < 4) {
  alert('Not quite, you guessed too low!');
} else {
  alert('Not quite, you guessed too high!');
}

var typeOfCar = prompt('Do I drive a red Fiat 500 Sport? YES or NO');
console.log('typeOfCar user answer:' + typeOfCar);

if (typeOfCar.toLowerCase() === 'yes' || typeOfCar.toLowerCase() === 'y' || typeOfCar.toLowerCase() === 'yes!') {
  alert('Correct! I drive a red Fiat 500 Sport!');
  score += 1;
} else {
  alert('Wrong, I do drive a red Fiat 500 Sport!');
}

var numberOfCities = parseInt(prompt('How many cities have I lived in? Guess a number from 1-10!'));
console.log('numberOfCities user answer: ' + numberOfCities);

if (numberOfCities === 4) {
  alert('Correct! I have lived in Eugene, Seattle, Boise, and Los Angeles');
  score += 1;
} else if (numberOfCities < 4) {
  alert('Not quite, you guessed too low!');
} else {
  alert('Not quite, you guessed too high!');
}

alert('Congratulations! You finished, and your final score is ' + score + ' out of 6!');
