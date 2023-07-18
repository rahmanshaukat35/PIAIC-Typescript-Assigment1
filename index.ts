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
