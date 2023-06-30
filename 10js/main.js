let arr = ['JavaScript', "learn"];
let arr2 = ['world', 'New JavaScript', "сложный", 'Js']
// arr.push('world')
// arr.unshift('New JavaScript')
// arr.splice(0, 2, "сложный", 'Js');
let mainArr = arr.concat(...arr, ...arr2)
// arr.concat([...arr, ...arr2])
console.log(arr);
console.log(arr2);
console.log(mainArr);

let inf = [];

// inf.push(prompt('text your adress'))
// alert(`Your information ${inf}`)
// inf.push(prompt('text your name'))
// alert(`Your information ${inf}`)
// inf.push(prompt('text your age'))
// alert(`Your information ${inf}`)





let news = [];

news.push(prompt('Text your information'))
alert(`Your information ${news}`)
news.push(prompt('Text your information'))
alert(`Your information ${news}`)
news.push(prompt('Text your information'))
alert(`Your information ${news}`)
