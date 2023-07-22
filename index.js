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
// exercise 23
var car = 'subaru';
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');
console.log("Is car == 'honda'? I predict false.");
console.log(car == 'honda');
console.log("Is car != 'toyota'? I predict true.");
console.log(car != 'toyota');
console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru');
var age = 18;
console.log('Is age >= 18? I predict true.');
console.log(age >= 18);
console.log('Is age < 21? I predict true.');
console.log(age < 21);
var name1 = 'Alice';
console.log("Does name start with letter 'A'? I predict True.");
console.log(name1 == 'Alice'); // true
var name2 = 'Bob';
console.log("Does name end with letter 'a'? I predict False.");
console.log(name2 == 'Alice'); // false
// exercise 24
// Tests for equality and inequality with strings:
var string1 = 'Hello';
var string2 = 'World';
console.log(string1 === string2);
console.log(string1 !== string2);
// Tests using the lower case function:
var uppercaseString = 'HELLO';
var lowercaseString = 'hello';
console.log(uppercaseString.toLowerCase() === lowercaseString);
console.log(lowercaseString.toLowerCase() !== uppercaseString);
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:
var num1 = 5;
var num2 = 10;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= 5 && num2 <= 10);
// Tests using "and" and "or" operators:
var x = true;
var y = false;
console.log(x && y);
console.log(x || y);
// Test whether an item is in an array:
var arrays = [1, 2, 3, 4, 5];
var item1 = 3;
var item2 = 6;
var isItemInArray1 = false;
for (var i = 0; i < arrays.length; i++) {
    if (arrays[i] === item1) {
        isItemInArray1 = true;
        break;
    }
}
console.log(isItemInArray1); // true
// example 25
var alien_color = 'green';
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
var alien_colors = 'red';
if (alien_colors === 'green') {
    console.log('Congratulations! You just earned 5 points for shooting the alien.');
}
else {
    console.log('Congratulations! You just earned 10 points for shooting the alien.');
}
// example 27
var alien_color1 = 'yellow';
if (alien_color1 === 'green') {
    console.log('Congratulations! You just earned 5 points.');
}
else if (alien_color1 === 'yellow') {
    console.log('Congratulations! You just earned 10 points.');
}
else if (alien_color1 === 'red') {
    console.log('Congratulations! You just earned 15 points.');
}
// example 28
var ages = 25;
if (ages < 2) {
    console.log('The person is a baby.');
}
else if (ages >= 2 && ages < 4) {
    console.log('The person is a toddler.');
}
else if (ages >= 4 && ages < 13) {
    console.log('The person is a kid.');
}
else if (ages >= 13 && ages < 20) {
    console.log('The person is a teenager.');
}
else if (ages >= 20 && ages < 65) {
    console.log('The person is an adult.');
}
else {
    console.log('The person is an elder.');
}
// example 29
var favoriteFruits = ['banana', 'apple', 'orange'];
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
}
else {
    console.log('Strawberries are not one of your favorite fruits.');
}
// example 30
var usernames = ['admin', 'user1', 'user2', 'user3', 'user4'];
for (var i = 0; i < usernames.length; i++) {
    var username = usernames[i];
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
// example 31
var users = [];
if (users.length === 0) {
    console.log('No Users: We need to find some users!');
}
else {
    for (var i = 0; i < users.length; i++) {
        var username = users[i];
        console.log(username);
    }
}
// example 32
var current_users = ['John', 'Sarah', 'Mike', 'Emma', 'Alex'];
var new_users = ['David', 'John', 'Emily', 'SARAH'];
var _loop_1 = function (i) {
    var usernameExists = current_users.some(function (user) { return user.toLowerCase() === new_users[i].toLowerCase(); });
    if (usernameExists) {
        console.log("Username '".concat(new_users[i], "' is not available. Please enter a new username."));
    }
    else {
        console.log("Username '".concat(new_users[i], "' is available."));
    }
};
for (var i = 0; i < new_users.length; i++) {
    _loop_1(i);
}
// example 33
var ordinalNumbers = [
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
for (var i = 0; i < ordinalNumbers.length; i++) {
    var result_1 = void 0;
    if (i === 0) {
        result_1 = "".concat(ordinalNumbers[i]);
    }
    else if (i === 1) {
        result_1 = "".concat(ordinalNumbers[i]);
    }
    else if (i === 2) {
        result_1 = "".concat(ordinalNumbers[i]);
    }
    else {
        result_1 = "".concat(ordinalNumbers[i], "th");
    }
    console.log(result_1);
}
// example 34
var pizzas = ['Pepperoni', 'Margherita', 'Hawaiian'];
// Loop to print the name of each pizza
for (var i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
console.log('---');
// Loop to print a sentence about each pizza
for (var i = 0; i < pizzas.length; i++) {
    console.log("I like ".concat(pizzas[i], " pizza."));
}
console.log('---');
// Additional statement outside the loop
console.log('I really love very type of pizza!');
// example 35
var animals = ['dog', 'cat', 'rabbit'];
for (var i = 0; i < animals.length; i++) {
    var animalName = animals[i];
    console.log("The animal is ".concat(animalName));
}
console.log('Any of these animals would make a great pet!');
// example 36
function make_shirt(size, message) {
    console.log("Size: ".concat(size));
    console.log("Message: ".concat(message));
}
// Calling the function
make_shirt('L', 'Hello, World!');
function makeShirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Creating a ".concat(size, " shirt with the message: ").concat(message));
}
makeShirt();
makeShirt('medium');
makeShirt('small', 'Hello, world!');
// example 38
function describeCity(city, country) {
    if (country === void 0) { country = 'Unknown Country'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describeCity('Karachi', 'Pakistan');
describeCity('London', 'United Kingdom');
describeCity('New York');
// example 39
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country('Lahore', 'Pakistan')); // Output: Lahore, Pakistan
console.log(city_country('London', 'United Kingdom')); // Output: London, United Kingdom
console.log(city_country('Sydney', 'Australia'));
// example 40
function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
        tracks: tracks,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = makeAlbum('Artist A', 'Album X');
console.log(album1);
var album2 = makeAlbum('Artist B', 'Album Y', 12); // includes the number of tracks
console.log(album2);
var album3 = makeAlbum('Artist C', 'Album Z');
album3.tracks = 8;
console.log(album3);
// example 41
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var magicianNames = [
    'Harry Houdini',
    'David Copperfield',
    'Penn Jillette',
    'Teller',
];
show_magicians(magicianNames);
var magicians = [
    { name: 'Harry Houdini' },
    { name: 'David Blaine' },
    { name: 'Penn Jillette' },
];
function makeGreat(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        magician.name = "the Great ".concat(magician.name);
    }
}
function showMagicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician.name);
    }
}
makeGreat(magicians);
showMagicians(magicians);
// example 43
function makeGreats(magicians) {
    return magicians.map(function (name) { return "Great ".concat(name); });
}
function showMagicians1(magicians) {
    console.log(magicians.join(', '));
}
var originalMagicians = [
    'Harry Houdini',
    'David Copperfield',
    'Penn Jillette',
];
var newMagicians = makeGreats(originalMagicians);
showMagicians1(newMagicians);
// example 44
function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('Order Summary:');
    console.log("- Sandwich with ".concat(items.join(', ')));
}
orderSandwich('Ham', 'Cheese');
orderSandwich('Turkey', 'Lettuce', 'Tomato');
orderSandwich('Chicken', 'Bacon', 'Avocado', 'Mayonnaise');
// example 45
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
var myCar = createCar('Tesla', 'Model S', ['color', 'red'], ['optionalFeature', 'autopilot']);
console.log(myCar);
