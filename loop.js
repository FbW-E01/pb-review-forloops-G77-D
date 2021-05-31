
/*1. Make a loop that prints the numbers from 0 to 10.*/
for ( let i = 0; i <= 10; i++){
  console.log(i);
}

/*2. Make a loop that prints the numbers from 10 to 20.*/

for (let i = 10; i <= 20; i++) {
  console.log(i);
}


/* 3. Make a loop that prints the numbers from -10 to 10.*/
for ( let i = -10; i <= 10; i++) {
  console.log(i);
}

/*4. Make a loop that prints the numbers from 10 to -10.*/
for (let i = 10; i >= -10; i--) {
  console.log(i);
}


/*5. Make a string.Then, make a loop that prints all the individual characters of that string.*/

const superCar = 'BmWveryFast';

for (let i = 0; i < superCar.length; i++) {
    console.log(superCar[i]);
};

/*6. Make an array with 5 items. Then, make a loop that prints all the individual items of that array.*/

const colours = ['blue', 'black', 'white', 'yellow', 'orange'];
for (let i = 0; i < colours.length; i++){
  console.log(colours);
}

/*7. Make an array with 6 items. Then, make a loop that prints every second item of that array.*/

const football = ['Mancity', 'Rovers', 'blades', 'Man U ', 'liverpool', 'St Pauli']

for (let i = 0; i < football.length; i+= 2){
  console.log(football[i]); 
}


/*8. Make an array with 6 items.Then, make a loop that prints every third item of that array.*/

const tv = ["tv1", 'iTv', 'bby', 'cnn', 'fox', 'sky'];
for (let i = 0; i < tv.length; i += 3){
  console.log(tv[i]);
}

/*9. Make an array with 10 items. Then, make a loop that prints every third item of that array starting from the 2nd.*/

const names = ['Tom', 'James', 'Tim', 'Johnny', ' Dave', 'Axel', 'Fred', 'Anna', 'Frens','Joe'];
for (let i = 0; i < names.length; i += 3) {
  console.log(names[i]);
}
/*10. Make an array with 7 objects. Each objects should have a property called counter. Create a loop that prints only the counter value of each object.*/

const players = [{ counter: 'player1' }, { counter: 'player2' } , { counter: 'player3' }, { counter: 'player4' }, { counter: 'player5' }, { counter: 'player6' }, { counter: 'player7' },
]
for (let i = 0; i < players.length; i++){
  console.log(players[i]);
}

/*11. Save a random whole number between 0 and 100 to a variable. Then print all numbers from 0 to 100 and as soon as you reach the random number you created, stop your loop.*/

const num1 = Math.floor(Math.random() * 101);
for (let i = 0; i <= 100; i++) {
  if (num1 === i) {
    
  }
  console.log(i);
}
