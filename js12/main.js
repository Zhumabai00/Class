let num = ['go', 'ever', 'also', 'newOk'];

// for (let i = 0; i < num.length; i++) {
// 	console.log(num[i]);
// }
let num2 = [1, 2, 3, 33, 10, 4, 5, 18, 31, 90];
// let sum = 0;
// num2.forEach((item, index) => {
// 	sum += item;
// 	console.log(sum);
// })

const newNum = num2.filter((item, index) => {
	return item <= 10;
})

// const newNum = newNum2.map((item, index) => {
// 	return item + '';
// })
console.log(`Значение "newNum" > '${newNum}' ровно или Меньше чем 10`);
