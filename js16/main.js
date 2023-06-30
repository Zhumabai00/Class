let text = document.querySelector('.text');


text.style.width = '150px';
text.style.paddingBottom = '40px';
console.log(text);

// text.classList.add('new');
// text.onfocus = function (e) {
// 	this.classList.toggle('new');
// }
text.addEventListener('click', () => {
	text.classList.toggle('new');
});
let datas = document.querySelector('link');
// console.log(datas)
datas.setAttribute("dataNum", 6)

console.log(datas.getAttribute('dataNum'));

let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas.length; i++) {
	gas[i].onclick = function () {
		let inp = document.querySelector('.inp').value;
		let amount = this.getAttribute('dataGas');
		alert(amount * inp);
	}
}
