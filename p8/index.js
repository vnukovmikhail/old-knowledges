// console.log(window);

// function test(a, b, showInfo = true) {
//     if (showInfo) {
//         return 'result: ' + (a + b);
//     }
//     return a + b;
// }

// console.log(test(2, 7, false));

// const button = window.document.getElementById('hello')
// console.log(button)
// console.dir(button)

// const button = window.document.getElementsByClassName('btn1')
// console.log(button)

// const button = window.document.querySelector('button')
const button = window.document.querySelectorAll('.btn1 > span')
console.log(button)