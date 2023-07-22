// exercise 2
const personName: string = 'Eric';
console.log(`Hello ${personName}, would you like to learn some Python today?`);

// exercise 3

const person: string = 'John Doe';

console.log(person.toLowerCase());

console.log(person.toUpperCase());

console.log(titleCase(person));

function titleCase(name: string): string {
	return name.replace(/\b\w/g, (char) => char.toUpperCase());
}

// exercise 4

const quote1: string =
	'A person who never made a mistake never tried anything new.';
const author: string = 'Albert Einstein';

console.log(`${author} once said, "${quote1}"`);

// exercise 5

const quote2: string =
	'A person who never made a mistake never tried anything new.';
const famous_person: string = 'Albert Einstein';

const message: string = `${famous_person} once said, "${quote2}"`;
console.log(message);

// exercise 6

const personNameWithWhitespace: string = '\t\n   John Doe    \n\t';

console.log(`Original Name (with whitespace): "${personNameWithWhitespace}"`);

const strippedName: string = personNameWithWhitespace.trim();

console.log(`Stripped Name (without whitespace): "${strippedName}"`);

// exercise 7

// Addition
const additionResult: number = 5 + 3;
console.log(`Addition Result: ${additionResult}`);

// Subtraction
const subtractionResult: number = 15 - 7;
console.log(`Subtraction Result: ${subtractionResult}`);

// Multiplication
const multiplicationResult: number = 4 * 2;
console.log(`Multiplication Result: ${multiplicationResult}`);

// Division
const divisionResult: number = 64 / 8;
console.log(`Division Result: ${divisionResult}`);

// exercise 9

const favoriteNumber: number = 42;
const msg: string = `My favorite number is ${favoriteNumber}.`;

console.log(msg);

// exercise 10

// Author: Rahman
// Date: September 23, 2022

function add(a: number, b: number): number {
	return a + b; // Return the sum of two numbers.
}

const result = add(5, 3); // Call the 'add' function with arguments (5,3) and store the result in 'result'.
console.log(result); // Print the result to the console.

// exercise 11

const names: string[] = ['Alice', 'Bob', 'Charlie'];

for (let i = 0; i < names.length; i++) {
	console.log(names[i]);
}

// exercise 12

const array: string[] = ['Alice', 'Bob', 'Charlie'];
const messages: string = 'Hello, would you like to hang out sometime, ';

for (let i = 0; i < array.length; i++) {
	console.log(messages + array[i] + '?');
}

// exercise 13

const transportationModes: string[] = ['car', 'motorcycle', 'bicycle'];

for (let i = 0; i < transportationModes.length; i++) {
	console.log(`I would like to own a ${transportationModes[i]}.`);
}

// exercise 14

const guestList: string[] = [
	'Albert Einstein',
	'Ada Lovelace',
	'Nelson Mandela',
];

for (let i = 0; i < guestList.length; i++) {
	console.log(
		`Dear ${guestList[i]}, you are cordially invited to dinner at my place.`
	);
}

// exercise 15

const guestListnew: string[] = [
	'Albert Einstein',
	'Ada Lovelace',
	'Nelson Mandela',
];
const unableToAttend: string = guestListnew[1]; // Assuming Ada Lovelace can't make it.

console.log(`${unableToAttend} is unable to attend the dinner.`);

guestListnew[1] = 'Marie Curie'; // Replace Ada Lovelace with Marie Curie.

for (let i = 0; i < guestListnew.length; i++) {
	console.log(
		`Dear ${guestListnew[i]}, you are cordially invited to dinner at my place.`
	);
}

// exercise 16

const guestLists: string[] = [
	'Albert Einstein',
	'Ada Lovelace',
	'Nelson Mandela',
];
const unableToAttends: string = guestLists[1]; // Assuming Ada Lovelace can't make it.

console.log(`${unableToAttends} is unable to attend the dinner.`);

guestLists[1] = 'Marie Curie'; // Replace Ada Lovelace with Marie Curie.
guestLists.unshift('Isaac Newton'); // Add Isaac Newton to the beginning of the list.
guestLists.splice(Math.floor(guestLists.length / 2), 0, 'Leonardo da Vinci'); // Add Leonardo da Vinci to the middle of the list.
guestLists.push('Jane Goodall'); // Append Jane Goodall to the end of the list.

console.log('Good news! I found a bigger dinner table.');

for (let i = 0; i < guestList.length; i++) {
	console.log(
		`Dear ${guestList[i]}, you are cordially invited to dinner at my place.`
	);
}

// exercise 17

const guestListing: string[] = [
	'Isaac Newton',
	'Albert Einstein',
	'Leonardo da Vinci',
	'Marie Curie',
	'Nelson Mandela',
	'Jane Goodall',
];

console.log(
	"Oops! The new dinner table won't arrive in time. We can only invite two people for dinner."
);

while (guestListing.length > 2) {
	const removedGuest = guestListing.pop();
	console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

for (let i = 0; i < guestListing.length; i++) {
	console.log(
		`Dear ${guestListing[i]}, you are still invited to dinner at my place.`
	);
}

guestListing.splice(0); // Remove last two names from the list

console.log(guestListing);

// exercise 18

const placesToVisit: string[] = [
	'Bora Bora',
	'Machu Picchu',
	'Santorini',
	'Kyoto',
	'Reykjavik',
];

console.log('Original order:');
console.log(placesToVisit);

console.log('\nAlphabetical order without modifying the actual list:');
console.log([...placesToVisit].sort());

console.log('\nStill in original order:');
console.log(placesToVisit);

console.log('\nReverse alphabetical order without changing the original list:');
console.log([...placesToVisit].sort().reverse());

console.log('\nStill in original order:');
console.log(placesToVisit);

// Reverse the array
placesToVisit.reverse();
console.log('\nReversed order:');
console.log(placesToVisit);

// Reverse again to get back to original order
placesToVisit.reverse();
console.log('\nReversed order:');
console.log(placesToVisit);

// exercise 19

const guestListLength: string[] = [
	'Isaac Newton',
	'Albert Einstein',
	'Leonardo da Vinci',
	'Marie Curie',
	'Nelson Mandela',
];

console.log(`You are inviting ${guestListLength.length} people to dinner.`);

// exercise 20

const landmarks: string[] = [
	'Great Wall of China',
	'Eiffel Tower',
	'Taj Mahal',
	'Machu Picchu',
	'Pyramids of Giza',
];

console.log('List of Famous Landmarks:');
for (let i = 0; i < landmarks.length; i++) {
	console.log(landmarks[i]);
}

// exercise 21

interface Book {
	title: string;
	author: string;
	genre: string;
}

const book1: Book = {
	title: 'To Kill a Mockingbird',
	author: 'Harper Lee',
	genre: 'Classic',
};

const book2: Book = {
	title: '1984',
	author: 'George Orwell',
	genre: 'Dystopian',
};

const book3: Book = {
	title: 'The Great Gatsby',
	author: 'F. Scott Fitzgerald',
	genre: 'Literary Fiction',
};

console.log('Book Information:');
console.log(book1);
console.log(book2);
console.log(book3);

// exercise 22

// error
const landmark: string[] = ['Great Wall of China'];

console.log('List of Famous Landmarks:');
for (let i = 0; i <= landmark.length; i++) {
	console.log(landmark[i]);
}

// correct

const landmarking: string[] = ['Great Wall of China'];

console.log('List of Famous Landmarks:');
for (let i = 0; i < landmarking.length; i++) {
	console.log(landmarking[i]);
}

// exercise 23

let car: string = 'subaru';

console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I predict false.");
console.log(car == 'honda');

console.log("Is car != 'toyota'? I predict true.");
console.log(car != 'toyota');

console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru');

let age: number = 18;

console.log('Is age >= 18? I predict true.');
console.log(age >= 18);

console.log('Is age < 21? I predict true.');
console.log(age < 21);

let name1 = 'Alice';

console.log(`Does name start with letter 'A'? I predict True.`);
console.log(name1 == 'Alice'); // true

let name2 = 'Bob';

console.log(`Does name end with letter 'a'? I predict False.`);
console.log(name2 == 'Alice'); // false

// exercise 24
// Tests for equality and inequality with strings:
const string1: string = 'Hello';
const string2: string = 'World';

console.log(string1 === string2);
console.log(string1 !== string2);

// Tests using the lower case function:

const uppercaseString = 'HELLO';
const lowercaseString = 'hello';

console.log(uppercaseString.toLowerCase() === lowercaseString);
console.log(lowercaseString.toLowerCase() !== uppercaseString);

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:

const num1: number = 5;
const num2: number = 10;

console.log(num1 === num2);

console.log(num1 !== num2);

console.log(num1 > num2);

console.log(num1 < num2);

console.log(num1 >= 5 && num2 <= 10);

// Tests using "and" and "or" operators:

const x = true;
const y = false;

console.log(x && y);

console.log(x || y);

// Test whether an item is in an array:

const arrays = [1, 2, 3, 4, 5];
const item1 = 3;
const item2 = 6;

let isItemInArray1 = false;
for (let i = 0; i < arrays.length; i++) {
	if (arrays[i] === item1) {
		isItemInArray1 = true;
		break;
	}
}

console.log(isItemInArray1); // true

// example 25

let alien_color: string = 'green';

// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alien_color === 'green') {
	console.log('The player just earned 5 points.');
}

// Version that passes the if test
alien_color = 'green'; // Change alien's color to green

if (alien_color === 'green') {
	console.log('The player just earned 15 points.'); // Output: The player just earned 5 points.
}

// Version that fails the if test
alien_color = 'red'; // Change alien's color to red

if (alien_color === 'green') {
	console.log('The player just earned 10 points.'); // No output as this version fails the condition
}

// example 26

const alien_colors: string = 'red';

if (alien_colors === 'green') {
	console.log(
		'Congratulations! You just earned 5 points for shooting the alien.'
	);
} else {
	console.log(
		'Congratulations! You just earned 10 points for shooting the alien.'
	);
}

// example 27

let alien_color1: string = 'yellow';

if (alien_color1 === 'green') {
	console.log('Congratulations! You just earned 5 points.');
} else if (alien_color1 === 'yellow') {
	console.log('Congratulations! You just earned 10 points.');
} else if (alien_color1 === 'red') {
	console.log('Congratulations! You just earned 15 points.');
}

// example 28

const ages: number = 25;

if (ages < 2) {
	console.log('The person is a baby.');
} else if (ages >= 2 && ages < 4) {
	console.log('The person is a toddler.');
} else if (ages >= 4 && ages < 13) {
	console.log('The person is a kid.');
} else if (ages >= 13 && ages < 20) {
	console.log('The person is a teenager.');
} else if (ages >= 20 && ages < 65) {
	console.log('The person is an adult.');
} else {
	console.log('The person is an elder.');
}

// example 29

const favoriteFruits: string[] = ['banana', 'apple', 'orange'];

if (favoriteFruits[0] == 'banana') {
	console.log('You really like bananas!');
}

if (favoriteFruits[1] == 'apple') {
	console.log('You really like apples!');
}

if (favoriteFruits[2] == 'orange') {
	console.log('You really like oranges!');
}

if (favoriteFruits[3] == 'strawberry') {
	console.log('You really like strawberries!');
} else {
	console.log('Strawberries are not one of your favorite fruits.');
}

// example 30

const usernames: string[] = ['admin', 'user1', 'user2', 'user3', 'user4'];

for (let i = 0; i < usernames.length; i++) {
	const username = usernames[i];

	if (username === 'admin') {
		console.log('Hello admin, would you like to see a status report?');
	} else {
		console.log(`Hello ${username}, thank you for logging in again.`);
	}
}

// example 31

const users: string[] = [];

if (users.length === 0) {
	console.log('No Users: We need to find some users!');
} else {
	for (let i = 0; i < users.length; i++) {
		const username = users[i];
		console.log(username);
	}
}

// example 32

const current_users: string[] = ['John', 'Sarah', 'Mike', 'Emma', 'Alex'];
const new_users: string[] = ['David', 'John', 'Emily', 'SARAH'];

for (let i = 0; i < new_users.length; i++) {
	const usernameExists = current_users.some(
		(user) => user.toLowerCase() === new_users[i].toLowerCase()
	);

	if (usernameExists) {
		console.log(
			`Username '${new_users[i]}' is not available. Please enter a new username.`
		);
	} else {
		console.log(`Username '${new_users[i]}' is available.`);
	}
}

// example 33

const ordinalNumbers = [
	'1st',
	'2nd',
	'3rd',
	'4th',
	'5th',
	'6th',
	'7th',
	'8th',
	'9th',
];

for (let i = 0; i < ordinalNumbers.length; i++) {
	let result: string;

	if (i === 0) {
		result = `${ordinalNumbers[i]}`;
	} else if (i === 1) {
		result = `${ordinalNumbers[i]}`;
	} else if (i === 2) {
		result = `${ordinalNumbers[i]}`;
	} else {
		result = `${ordinalNumbers[i]}th`;
	}

	console.log(result);
}

// example 34

const pizzas: string[] = ['Pepperoni', 'Margherita', 'Hawaiian'];

// Loop to print the name of each pizza
for (let i = 0; i < pizzas.length; i++) {
	console.log(pizzas[i]);
}

console.log('---');

// Loop to print a sentence about each pizza
for (let i = 0; i < pizzas.length; i++) {
	console.log(`I like ${pizzas[i]} pizza.`);
}

console.log('---');

// Additional statement outside the loop
console.log('I really love very type of pizza!');

// example 35

const animals: string[] = ['dog', 'cat', 'rabbit'];

for (let i = 0; i < animals.length; i++) {
	const animalName = animals[i];

	console.log(`The animal is ${animalName}`);
}

console.log('Any of these animals would make a great pet!');

// example 36

function make_shirt(size: string, message: string): void {
	console.log(`Size: ${size}`);
	console.log(`Message: ${message}`);
}

// Calling the function
make_shirt('L', 'Hello, World!');

// example 37

type ShirtSize = 'small' | 'medium' | 'large';

function makeShirt(
	size: ShirtSize = 'large',
	message: string = 'I love TypeScript'
): void {
	console.log(`Creating a ${size} shirt with the message: ${message}`);
}

makeShirt();
makeShirt('medium');
makeShirt('small', 'Hello, world!');

// example 38

function describeCity(city: string, country: string = 'Unknown Country') {
	console.log(`${city} is in ${country}.`);
}

describeCity('Karachi', 'Pakistan');
describeCity('London', 'United Kingdom');
describeCity('New York');

// example 39

function city_country(city: string, country: string) {
	return `${city}, ${country}`;
}

console.log(city_country('Lahore', 'Pakistan')); // Output: Lahore, Pakistan
console.log(city_country('London', 'United Kingdom')); // Output: London, United Kingdom
console.log(city_country('Sydney', 'Australia'));

// example 40

function makeAlbum(artist: string, title: string, tracks?: number) {
	const album = {
		artist,
		title,
		tracks,
	};

	if (tracks) {
		album.tracks = tracks;
	}

	return album;
}

const album1 = makeAlbum('Artist A', 'Album X');
console.log(album1);

const album2 = makeAlbum('Artist B', 'Album Y', 12); // includes the number of tracks
console.log(album2);

const album3 = makeAlbum('Artist C', 'Album Z');
album3.tracks = 8;
console.log(album3);

// example 41

function show_magicians(magicians: string[]): void {
	magicians.forEach((magician) => {
		console.log(magician);
	});
}

const magicianNames: string[] = [
	'Harry Houdini',
	'David Copperfield',
	'Penn Jillette',
	'Teller',
];

show_magicians(magicianNames);

// example 42

interface Magician {
	name: string;
}

const magicians: Magician[] = [
	{ name: 'Harry Houdini' },
	{ name: 'David Blaine' },
	{ name: 'Penn Jillette' },
];

function makeGreat(magicians: Magician[]): void {
	for (let magician of magicians) {
		magician.name = `the Great ${magician.name}`;
	}
}

function showMagicians(magicians: Magician[]): void {
	for (let magician of magicians) {
		console.log(magician.name);
	}
}

makeGreat(magicians);
showMagicians(magicians);

// example 43
function makeGreats(magicians: string[]) {
	return magicians.map((name) => `Great ${name}`);
}

function showMagicians1(magicians: string[]): void {
	console.log(magicians.join(', '));
}

const originalMagicians = [
	'Harry Houdini',
	'David Copperfield',
	'Penn Jillette',
];
const newMagicians = makeGreats(originalMagicians);
showMagicians1(newMagicians);

// example 44

function orderSandwich(...items: string[]) {
	console.log('Order Summary:');
	console.log(`- Sandwich with ${items.join(', ')}`);
}

orderSandwich('Ham', 'Cheese');
orderSandwich('Turkey', 'Lettuce', 'Tomato');
orderSandwich('Chicken', 'Bacon', 'Avocado', 'Mayonnaise');

// example 45

function createCar(
	manufacturer: string,
	model: string,
	...options: Array<[string, any]>
) {
	const car = { manufacturer, model };

	options.forEach(([key, value]) => {
		car[key] = value;
	});

	return car;
}

const myCar = createCar(
	'Tesla',
	'Model S',
	['color', 'red'],
	['optionalFeature', 'autopilot']
);

console.log(myCar);
