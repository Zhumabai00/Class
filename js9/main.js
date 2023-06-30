let arr2 = [
	'Hello',
	'Chao',
	'GGG',
	{
		name: 'Alex',
		age: 20,
		midObj: {
			midName: 'Alimbekov',
			realAge: 17,
		}
	},
	function () {
		alert('This is a Function')
	}
];
// arr2[4]()


// console.log(arr2[3].name);
// console.log(arr2[3].midObj.midName);
// console.log(arr2[3].midObj.realAge);
arr2.push('New element')
arr2.unshift('first element')
arr2.shift()
arr2.pop()
// arr2.slice(1)

console.log(arr2.slice());

