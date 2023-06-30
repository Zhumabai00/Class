const func = (first, second) => {
	alert('"Hello "' + first + second)
}
const func2 = (first, second) => {
	alert('"Hello2 "' + first + second)
}
let stop = setInterval(func, 1000, "World", "' --Hey'");

setTimeout(() => {
	clearInterval(stop);
	alert('Func stop');
	let stop2 = setInterval(func2, 1000, "World2", "' --Hey2'");
	setTimeout(() => {
		clearInterval(stop2);
		alert('Func2 stop');
	}, 7000)
}, 5000)

// setTimeout(() => {
// 	alert("'Hello'")
// }, 1000)

// function get(start, end) {
// 	console.log("start ", start);
// 	let stopInterval = setInterval(() => {
// 		start++
// 		if (start == 7) {
// 			clearInterval(stopInterval)
// 		}
// 		console.log('startInterval', start);
// 	}, 1000)
// 	console.log('end', end);
// }
// get(1, 10)
