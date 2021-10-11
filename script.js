

// this


// Task 1
function sayHello() {
console.log(`Hello! My name is ${this.name}`);
}
const persons = [
{
name: 'One',
age: 1,
hello:sayHello,
},
{
name: 'Two',
age: 2,
hello:sayHello,
},
{
name: 'Three',
age: 3,
hello:sayHello,
},
{
name: 'Four',
age: 4,
hello:sayHello,
}
]
// persons[0].hello();
// persons[1].hello();
// persons[2].hello();
// persons[3].hello();
// // Task 2
// function callHello(id) {
// setTimeout(persons[id].hello.bind(persons[id]),1000*id)
// }
// for (let i = 0; i < persons.length; i++) {
// callHello(i);

// }

// Task 3
// const creature = { name: 'Ctulhu', eyes: 8 };
//  persons[0].hello.call(creature);

// // Task 4
// function callHello(i) {
// persons[i].hello.call(persons[i]);
// }
// function presentation(cb,i) {
// 	console.log("Ladies and Gentlemen, here is our person:");
// 	cb(i);

// }
// for(let i = 0;i<persons.length;i++){
// presentation(callHello,i);
// }
