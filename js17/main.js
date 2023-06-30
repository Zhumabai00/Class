// let num = 10;
// const promise = new Promise((resolve, reject) => {
// 	if (num < 5) {
// 		resolve('Hello')
// 	} else {
// 		reject("error")
// 	}
// })

// promise.then((response) => {
// 	console.log(response)
// })
// promise.catch((err) => {
// 	console.log(err)
// })
// promise.finally(() => {
// 	console.log("Work always")
// })
const root = document.getElementById('root');
console.log('start')

fetch('https://fakestoreapi.com/users')
	.then(response => response.json())
	.then(data => {
		data.map((item) => {
			root.innerHTML += `<h1>${item.address.city}</h1>`
			root.innerHTML += `<h1>${item.address.street}</h1>`
			root.innerHTML += `<h1>${item.address.zipcode}</h1>`
		})
	})
// const newFunc1 = async () => {
// 	await fetch('https://fakestoreapi.com/users/1')
// 		.then(response => response.json())
// 		.then(data => {
// 			root.innerHTML += `<h1>${data.id}</h1>`
// 		})
// }
// const newFunc2 = async () => {
// 	await fetch('https://fakestoreapi.com/users/2')
// 		.then(response => response.json())
// 		.then(data => {
// 			root.innerHTML += `<h1>${data.id}</h1>`
// 		})
// }
// const newFunc3 = async () => {
// 	await fetch('https://fakestoreapi.com/users/3')
// 		.then(response => response.json())
// 		.then(data => {
// 			root.innerHTML += `<h1>${data.id}</h1>`
// 		})
// }

const mainFunc = async () => {
	await newFunc1()
	await newFunc2()
	await newFunc3()
}
mainFunc()
