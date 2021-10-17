

// this


// Task 1
function sayHello() {
console.log(`Hello! My name is ${this.name}`);
}
const persons = [
	{
		name: 'One',
		age: 1,

	},
	{
		name: 'Two',
		age: 2,

	},
	{
		name: 'Three',
		age: 3,

	},
	{
		name: 'Four',
		age: 4,
	}
];
// Task 1
for (let i = 0; i < persons.length;i++) {
	persons[i].sayHello = sayHello;
}



// // Task 2
function callHello(id) {
setTimeout(persons[id].sayHello.bind(persons[id]),1000*id)
}
for (let i = 0; i < persons.length; i++) {
callHello(i);
// или
setTimeout(() => {
	persons[i].sayHello();
},1000*i)
}





// Task 3
const creature = { name: 'Ctulhu', eyes: 8 };
 persons[0].sayHello.call(creature);

// Task 4
function callHello(i) {
persons[i].sayHello.call(persons[i]);
}
function presentation(cb,i) {
	console.log("Ladies and Gentlemen, here is our person:");
	cb(i);

}
for(let i = 0;i<persons.length;i++){
presentation(callHello,i);
}






