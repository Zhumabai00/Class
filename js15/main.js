let ul = document.getElementsByTagName('li');
let ul2 = document.getElementById('idli');
let li3 = document.getElementsByClassName('li2');
// li3.style.background = "blue";
// console.log(li4);
ul2.style.background = 'red'
// for (let element in ul) {
// 	// key.style.color = "blue";
// 	console.log(element);
// }

let li4 = document.querySelector('.li2');
let li5 = document.querySelector('#idli');
console.log(li5);
li5.classList.add('active')
li5.classList.remove('active');
li5.innerHTML = '<div>New element <span style="color: blueviolet;">WITH</span> innrerHTML</div>';
// li5.createElement('div');
setInterval(() => {
	if (document.body.style.background == "white") {
		document.body.style.background = "black"
	} else {
		document.body.style.background = "black"
	}
}, 3000)
// li5.style.background = "red";
// li5.style.cssText = "color: red; background: black;"

	// console.log(element);
// });
