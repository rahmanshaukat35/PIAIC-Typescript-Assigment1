var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// exercise 2
var personName = 'Eric';
console.log("Hello ".concat(personName, ", would you like to learn some Python today?"));
// exercise 3
var person = 'John Doe';
console.log(person.toLowerCase());
console.log(person.toUpperCase());
console.log(titleCase(person));
function titleCase(name) {
    return name.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
}
// exercise 4
var quote1 = 'A person who never made a mistake never tried anything new.';
var author = 'Albert Einstein';
console.log("".concat(author, " once said, \"").concat(quote1, "\""));
// exercise 5
var quote2 = 'A person who never made a mistake never tried anything new.';
var famous_person = 'Albert Einstein';
var message = "".concat(famous_person, " once said, \"").concat(quote2, "\"");
console.log(message);
// exercise 6
var personNameWithWhitespace = '\t\n   John Doe    \n\t';
console.log("Original Name (with whitespace): \"".concat(personNameWithWhitespace, "\""));
var strippedName = personNameWithWhitespace.trim();
console.log("Stripped Name (without whitespace): \"".concat(strippedName, "\""));
// exercise 7
// Addition
var additionResult = 5 + 3;
console.log("Addition Result: ".concat(additionResult));
// Subtraction
var subtractionResult = 15 - 7;
console.log("Subtraction Result: ".concat(subtractionResult));
// Multiplication
var multiplicationResult = 4 * 2;
console.log("Multiplication Result: ".concat(multiplicationResult));
// Division
var divisionResult = 64 / 8;
console.log("Division Result: ".concat(divisionResult));
// exercise 9
var favoriteNumber = 42;
var msg = "My favorite number is ".concat(favoriteNumber, ".");
console.log(msg);
// exercise 10
// Author: Rahman
// Date: September 23, 2022
function add(a, b) {
    return a + b; // Return the sum of two numbers.
}
var result = add(5, 3); // Call the 'add' function with arguments (5,3) and store the result in 'result'.
console.log(result); // Print the result to the console.
// exercise 11
var names = ['Alice', 'Bob', 'Charlie'];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// exercise 12
var array = ['Alice', 'Bob', 'Charlie'];
var messages = 'Hello, would you like to hang out sometime, ';
for (var i = 0; i < array.length; i++) {
    console.log(messages + array[i] + '?');
}
// exercise 13
var transportationModes = ['car', 'motorcycle', 'bicycle'];
for (var i = 0; i < transportationModes.length; i++) {
    console.log("I would like to own a ".concat(transportationModes[i], "."));
}
// exercise 14
var guestList = [
    'Albert Einstein',
    'Ada Lovelace',
    'Nelson Mandela',
];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner at my place."));
}
// exercise 15
var guestListnew = [
    'Albert Einstein',
    'Ada Lovelace',
    'Nelson Mandela',
];
var unableToAttend = guestListnew[1]; // Assuming Ada Lovelace can't make it.
console.log("".concat(unableToAttend, " is unable to attend the dinner."));
guestListnew[1] = 'Marie Curie'; // Replace Ada Lovelace with Marie Curie.
for (var i = 0; i < guestListnew.length; i++) {
    console.log("Dear ".concat(guestListnew[i], ", you are cordially invited to dinner at my place."));
}
// exercise 16
var guestLists = [
    'Albert Einstein',
    'Ada Lovelace',
    'Nelson Mandela',
];
var unableToAttends = guestLists[1]; // Assuming Ada Lovelace can't make it.
console.log("".concat(unableToAttends, " is unable to attend the dinner."));
guestLists[1] = 'Marie Curie'; // Replace Ada Lovelace with Marie Curie.
guestLists.unshift('Isaac Newton'); // Add Isaac Newton to the beginning of the list.
guestLists.splice(Math.floor(guestLists.length / 2), 0, 'Leonardo da Vinci'); // Add Leonardo da Vinci to the middle of the list.
guestLists.push('Jane Goodall'); // Append Jane Goodall to the end of the list.
console.log('Good news! I found a bigger dinner table.');
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner at my place."));
}
// exercise 17
var guestListing = [
    'Isaac Newton',
    'Albert Einstein',
    'Leonardo da Vinci',
    'Marie Curie',
    'Nelson Mandela',
    'Jane Goodall',
];
console.log("Oops! The new dinner table won't arrive in time. We can only invite two people for dinner.");
while (guestListing.length > 2) {
    var removedGuest = guestListing.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
for (var i = 0; i < guestListing.length; i++) {
    console.log("Dear ".concat(guestListing[i], ", you are still invited to dinner at my place."));
}
guestListing.splice(0); // Remove last two names from the list
console.log(guestListing);
// exercise 18
var placesToVisit = [
    'Bora Bora',
    'Machu Picchu',
    'Santorini',
    'Kyoto',
    'Reykjavik',
];
console.log('Original order:');
console.log(placesToVisit);
console.log('\nAlphabetical order without modifying the actual list:');
console.log(__spreadArray([], placesToVisit, true).sort());
console.log('\nStill in original order:');
console.log(placesToVisit);
console.log('\nReverse alphabetical order without changing the original list:');
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
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
var guestListLength = [
    'Isaac Newton',
    'Albert Einstein',
    'Leonardo da Vinci',
    'Marie Curie',
    'Nelson Mandela',
];
console.log("You are inviting ".concat(guestListLength.length, " people to dinner."));
// exercise 20
var landmarks = [
    'Great Wall of China',
    'Eiffel Tower',
    'Taj Mahal',
    'Machu Picchu',
    'Pyramids of Giza',
];
console.log('List of Famous Landmarks:');
for (var i = 0; i < landmarks.length; i++) {
    console.log(landmarks[i]);
}
var book1 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Classic',
};
var book2 = {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
};
var book3 = {
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
var landmark = ['Great Wall of China'];
console.log('List of Famous Landmarks:');
for (var i = 0; i <= landmark.length; i++) {
    console.log(landmark[i]);
}
// correct
var landmarking = ['Great Wall of China'];
console.log('List of Famous Landmarks:');
for (var i = 0; i < landmarking.length; i++) {
    console.log(landmarking[i]);
}
