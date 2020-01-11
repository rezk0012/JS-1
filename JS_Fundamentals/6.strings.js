const firstName = 'Alfred';
const lastName = 'Rezk';
const age = 35;
const str = 'Hello there my name is Alferd';

let val;

val = firstName + lastName;
//Concatenation
val = firstName + ' ' + lastName;

//Append
val = 'Alfred';
val += ' Rezk';
val = 'Hello my name is ' + firstName + ' and I am ' + age;


//Escaping
val = "That's awesome, I can't wait";
val = 'That\'s awesome, I can\'t wait';

//String Properties and methods
val = firstName.length;
val = firstName.concat(' ', lastName);
val = firstName.toUpperCase();
val = firstName.toLowerCase();
val = firstName[2];
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');
val = firstName.charAt('2');
//Get last character
val = firstName.charAt(firstName.length - 1);
//substrings
val = firstName.substring(0, 4);
val = firstName.slice(-3);
val = str.split(' ');
val = str.replace('Alfred', 'Jack');
val = str.includes('Hello');




console.log(val);