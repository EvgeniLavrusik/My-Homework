

//classes
// task 0 


// class Point {
// 	constructor() {
// 		this.x = Math.round(Math.random(10, 100) * 10);
// 		this.y = Math.round(Math.random(10, 100) * 10);
// 	}
// }
// class Line {
// 	constructor() {
// 		this.point1 = new Point();
// 		this.point2 = new Point();
// 	}
// }
// const line1 = new Line();
// const line2 = new Line();
// const line3 = new Line();

// function getLenghtLine(line) {
	
// const katetx = Math.abs(line.point1.x - line.point2.x);
// const katety = Math.abs(line.point1.y - line.point2.y);
// const gep = Math.sqrt(katetx ** 2 + katety ** 2);
// 	return gep;
// }

// const lengthLine1 = getLenghtLine(line1);
// const lengthLine2 = getLenghtLine(line2);
// const lengthLine3 = getLenghtLine(line3);
// function canTriangExist(length1, length2, length3) {
// length1 + length2 > length3 && length2 + length3 > length1 && length1 + length3 > length2 ? console.log("Triangl can exist") : console.log("Triangl cannot exist");

// 	// if (length1 + length2 > length3 && length2 + length3 > length1 && length1 + length3 > length2) {
// 	// 	console.log("Triangl can exist");
// 	// } else {
// 	// 	console.log("Triangl cannot exist");
// 	// }

// };
// console.log(lengthLine1);
// console.log(lengthLine2);
// console.log(lengthLine3);
// canTriangExist(lengthLine1, lengthLine2, lengthLine3);



// // Task 1

// class Programmer {
// 	constructor(name,stack) {
// 		this.name = name;
// 		this.stack = stack;
// 	}
// 	code() {
// 		this.stack.forEach((item) => {
// 		console.log(`${this.name} is coding ${item}`);
// 	})
// 	}
// }
// const programmerOleg = new Programmer("Oleg", ["Java", "C#", "C", "C++", "Python", "PHP"]);
// console.log(programmerOleg);
// programmerOleg.code();
// //Task 2
// Programmer.prototype.toString = function() {
// 	console.log(`Hello my name is ${this.name}`);
// 	console.log(this);
// }
// programmerOleg.toString([1, 2, 3, 4]);
// //Task 3
// let programmer = [];
// programmer[0] = new Programmer("Oleg", ["Java","C++", "PHP"]);
//  programmer[1] = new Programmer("2", ["C#", "C++", "Python", "PHP",'JS',"React"]);
//  programmer[2] = new Programmer("3", ["Java", "Angular", "C", "C++", "Python"]);
//  programmer[3] = new Programmer("4", ["Java", "React", "JS", "Python", "PHP"]);
//  programmer[4] = new Programmer("5", ["Java", "C", "C++", "Python", "PHP"]);
//  programmer[5] = new Programmer("6", [ "Python", "PHP"]);
//  programmer[6] = new Programmer("7", ["Java", "C#", "Vue", "C++", "Python", "PHP"]);
//  programmer[7] = new Programmer("8", ["Java"]);
//  programmer[8] = new Programmer("9", ["Java", "Python", "PHP"]);
//  programmer[9] = new Programmer("10", ["Java", "C#", "C", "C++", "PHP"]);

// let seniorProgrammer = programmer.filter(item =>  item.stack.length > 4 );

// console.log(seniorProgrammer);



