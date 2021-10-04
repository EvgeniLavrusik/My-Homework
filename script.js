// // Task 1
// let sum = 0;
// function multiplesSum() {
// const userNumber = +prompt(`Enter a number`);
// for (let i = 100;i<200;i++) {
// if(i % userNumber === 0) {
// sum+=i;

// }
// }
// return sum;
// }
// console.log(multiplesSum(sum));


// Task 2
// let arrNumber = [12,5,3,6,8,4,235,7,4];

// function degreeArr(arr,n) {
// for (let i= 0; i < arr.length; i++) {
// arr[i] = arr[i] ** n;
// }
// return arr;
// }
// console.log(degreeArr(arrNumber, 5));


// Task 3
// let arr = [1,1,1,4,4,5,1,23,6,6,74,23,74,74,3];
// let newArr = [];

// function noRepeat(arr) {
// for (let i = 0;i<arr.length;i++) {
// let count = 0;
// if(!newArr.includes(arr[i])){
// for (let a = 0; a<arr.length;a++) {
// if(arr[i] === arr[a]){
// count++
// }
// }
// if(count>=2) {
// newArr.push(arr[i]);
// }
// } else {
// continue;
// }
// }
// return newArr;
// }
// console.log(noRepeat(arr));
// Task 4

// let arr = [[5,7,4,3],[7,4,2,89,4],[5,5,7,89,4,3],[4,9,3,200,6,4,5],[8,9,4,6,34],[5,7,100,9,5,3,6],[5,6,3,7,3,6,8,9],[3,6,7,89,6,34]];
// let sum = 0;

// let index = 0;
// function moreSum(arr) {
// for (let i = 0;i<arr.length;i++) {
// let sumLess = 0;
// for (let a =0; a<arr[i].length;a++) {
// sumLess+=arr[i][a];
// console.log(sumLess);
// }
// if(sumLess>sum){
// sum=sumLess;
// index = i;
// }
// }
// return arr[index];
// }
// console.log(moreSum(arr));