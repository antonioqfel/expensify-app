/* --------------------------------
   Object Destructuring
   -------------------------------*/

/*
const person = {
    name: 'Antonio',
    age: 32,
    location: {
        city: 'Montreal',
        temp: 25
    }
};

// ES6 - Destructuring
// If I want to use a default value, in case name is not passed, we do name = 'Anonymous'
const { name: firstName = 'Anonymous', age } = person;
// The same that:
// const name = person.name;
// const age = person.age;

// If I want to change the name of a variable, I do temp: temperature
const { city, temp: temperature } = person.location;

console.log(`${firstName} is ${age}`);

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}
*/

// Challenge

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const { name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName);

/* --------------------------------
   Array Destructuring
   -------------------------------*/

const address = ['12999 St-Juniper Street', 'Montreal', 'Quebec', '21001'];
// If I don't want to use the first element of the array I don't need to put any
// variable name (before was street), I just put a ,
// Now, If I don't want to put the last element, I don't put any varible name and that's it
const [, city, state = 'New York'] = address;
// I can as well set default values
console.log(`You are in ${city}, ${state}`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemDescription, , priceMedium] = item;

console.log(`A medium ${itemDescription} costs ${priceMedium}`);



