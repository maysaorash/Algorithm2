/*
Ex: [1,1,2,2,3,3,4,4,5,6,6]
Ans: 5
Ex: [3,6,6,7,7,9,9]
Ans: 3
Ex: [1,1,2,3,3]
Ex: [1,2,2]
*/

// const findNonRepeatingNumber = (arr) => {
// let i = 1;
// while (i < arr.length) {
// 	if(arr[i-1] !== arr[i]) {
//   return arr[i-1];
// 	}
// 	i += 2
// }
// return null;
// }

// const findNonRepeatingNumber = (arr) => {
// 	// [1,1,2,2,3,3,5]
// 	// 0,1,2,3,4,5,6, 7
// 	// i = 7
// let i = 1; //O(1)
// for(i=1; i<arr.length; i+=2) {
// 	if(arr[i-1] !== arr[i]) { // O(1) + O(2) O(n/2)
// 		break;
// 	}
// }
// // Final ans: 3*O(n/2) ~ O(n)
// return arr[i-1];
// }
// console.log(findNonRepeatingNumber([1,1,2,2,3,3,5]));




/* Palindrome */

// const isPalindrome = (word) => {
//  const reversed = word.split('').reverse().join('');
// 	return word === reversed;
// }

// const isPalindrome = (word) => {
// let i =0;
// const len = word.length;
// while(i<word.length){
// 	if(word.charAt(i) !== word.charAt(word.length -i -1)) {
// 		return false;
// 	}
// 	i++
// }
// return true;
// }

// const isPalindrome = (word) => {
// let i =0;
// while(i<word.length){
// 	if(word.charAt(i) !== word.charAt(word.length -i -1)) {
// 		return false;
// 	}
// 	i++
// }
// return true;
// }


// //'abdba'
// const isPalindrome = (word) => {
// let i =0;
// const len = word.length;
// while(i<Math.floor(len/2)){ // i = 1 < 1
// 	if(word.charAt(i) !== word.charAt(word.length -i -1)) {
// 		return false;
// 	}
// 	i++
// }
// return true;
// }


// const isPalindrome = (word) => {
// let i =0;//O(1)
// const len = word.length; //O(1)
// const mid = Math.floor(len/2); //O(1)

// while(i<mid){ //O(1)
// 	if(word.charAt(i) !== word.charAt(word.length -i -1)) { //O(1)
// 		return false;
// 	}
// 	i++; //O(1)
// } //O(n/2) * O(3) ~ O(n)
// return true;
// }


// function checkPalindrome(str) {
//   return reversed == str.split('').reverse().join('');
// }

// function isPalindrome(wrd) {
// 	return !wrd || (wrd[0] === wrd[wrd.length-1] && isPalindrome(wrd.slice(1, -1)));
// }

// console.log(isPalindrome('abcddcba'))//true
// console.log(isPalindrome('abcddbacba'))//false

/*Write a function to print a sum of numbers for each number before that */
// Ex: 5
// Ans: 1, 3, 6, 10, 15
//1,2,3,4,5

const printSumOfNumbersForEachNumber = (num) => {
	const ans = []; //O(1)

	for (var i=1; i<=num; i++){ //O(n)
		let sum = 0;  //O(1)
	for (var j=1; j<=num; j++){
	 sum += j;  //O(i)
	}
	ans.push(sum);
	}
	return ans;
} //O(n) * O(i) ~ O(n^2)

// console.log(printSumOfNumbersForEachNumber(3))


// const printSumOfNumberForEachNumber = num => {
//   const result = []; //O(1)
//   let sum = 0; //O(1)
//   for(let i=1; i<=num; i++) { //O(2)
//     sum += i; //O(1)
//     result.push(sum) //O(1)
//   } // * O(num) ~ O(n)
//   return result;
// }
// console.log(printSumOfNumberForEachNumber(5));

// const printSumOfNumbersForEachNumberRecursion = (num) => {
// 	if (num === 1) {
// 		return [1]
// 	}
// 	const ans = printSumOfNumbersForEachNumberRecursion(num-1);
//    ans.push(ans[ans.length-1] + num);
// 	 return ans;
// }
// console.log(printSumOfNumbersForEachNumberRecursion(3))


/*Calculate the factorial of a given number */
// Ex: 3
//Ans: 6

//Ex: 5
//Ans: 120
// const calculateFactorial = (num) => {
// 		if (num === 1) return 1;
//    return calculateFactorial(num-1)*num;
// }


// const calculateFactorial = (num) => {
// 		if (num === 1) {
// 		return 1;
// 	}
// 	const ans = calculateFactorial(num-1);
// 	 return ans*num;
// }

// console.log(calculateFactorial(5))

// n! = n * (n - 1) * (n - 2) * ...*1;

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

function fac(n){
    return(n<2)?1:fac(n-1)*n;
}
console.log(fac(5))


// const factorial = n => !(n > 1) ? 1 : factorial(n - 1) * n;
// console.log(factorial(5))

