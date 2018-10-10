// const person = {
//   name: "Misha",
//   age: 24,
//   location: {
//     city: "Moscow",
//     temp: 8
//   }
// };
// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`);
//
// const {city, temp: temperature} = person.location;
//
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`)
// }

const address = [];
const [, , state = "NY"] = address

console.log(`You are in ${state}`)
