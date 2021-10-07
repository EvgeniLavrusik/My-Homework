
// object

// Task 1

// let obj = {
// }

// function isEmptyObj(obj) {
// 	for (let key in obj) {
// 		return false;
// 	}
// 	return true;
// }

// console.log(isEmptyObj(obj));


// Task 2

// const pupyrki = {
// 	blue: 120,
// 	red: 250,
// 	orange: 23,
// 	purple: 231	
// }
// function sumPupyrki(obj) {
// 	let sum = 0;
// 	for (let key in obj) {
// 		sum += obj[key];
// 	}
// 	return sum;
// }
// console.log(sumPupyrki(pupyrki));

// Task 3

// const shtuchki = {
// 	shtuchka1: 200,
// 	shtuchka2: 521,
// 	shtuchka3: 314,
// 	shtuchka4: 113,
// 	shtuchka5: 871
// }
// function moreShtuchka (obj) {
// 	let lessKey = 0;
// 	let nameKey;
// 	for (let key in obj) {
// 		if (lessKey<obj[key]) {
// 			lessKey = obj[key];
// 			nameKey = key
// 	}
// 	}
// 	return nameKey;
// }
// console.log(moreShtuchka(shtuchki));




// Task 4

// const student = {
// 	math: 5,
// 	biology: 3,
// 	language: 2,
// 	isOboltus:"yes",
// }
// function noOboltus(obj) {
// 	for (let key in obj) {
// 		if (typeof obj[key] ==="number") {
// 			obj[key] = obj[key] * 2;
// 		}
// 	}
// 	return obj;
// }
// console.log(noOboltus(student));


