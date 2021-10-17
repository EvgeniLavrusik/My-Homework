
// array methods part 2



// Task 1
// let oboltusy = ['Евлампий','Никодим','Акакий','Поликарп'];
// let otlichniki = ['Лукьян','Феофил','Афиноген'];
// function toOtlichnik(str) {
// otlichniki.push(oboltusy.splice(oboltusy.indexOf(str),1)[0]);
// return otlichniki;
// }
// console.log( toOtlichnik('Поликарп'));
// console.log(oboltusy);


// Task 2

// function hyphenDestroyer(str) {
// let newStr = str.split('-').join(' ');
// return newStr;
// }
// console.log( hyphenDestroyer("-webkit-transition") );


// // Task 3
// var str = 'Мама мыла раму';
// function toWash(str,world) {
// let arr = str.split(' ');
// arr.splice(arr.length-1,1);
// arr.push(world);
// let newSrt = arr.join(' ');
// return newSrt;
// }
// console.log(toWash(str,'картину'));

// TAsk 4
let arr = [4,-9,49,12, -2, -4, 5, -10, -22, 13, 14];
// Task 4a
// let newArr = arr.map(item => item=-item );
// console.log(newArr);

// Task 4b
let newArr = arr.filter(item => item >= 0);
console.log(newArr);

// Task 4c
let sumNewArr = newArr.reduce((acc,item)=>{
acc=acc+item;
return acc;
})
console.log(sumNewArr);