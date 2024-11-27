// const button = document.querySelector('button')
// button.addEventListener('click', clickHandler)
// let i = 0;
// function clickHandler () {
//     i++;
//     switch (i) {
//         case 1: 
//             button.style.background = 'tomato';
//             break
//         case 2: 
//             button.style.background = 'royalblue';
//             break
//         case 3: 
//             button.style.background = 'lightcoral';
//             i=0;
//             break
//     }
// }

// const divs = document.querySelectorAll('div .cll .cll-olo')
// console.log(divs)

// const input = document.querySelector('[name=my_text]');
// input.addEventListener('input', function_name);
// let prevValue = input.value  
// function function_name (event) {
//     const userData = event.target.value

//     if (userData.includes('(') || userData.includes(')')) {
//         input.value = prevValue;
//         return;
//     }

//     prevValue = event.target.value;
//     event.target.value = userData
// }

// document.addEventListener('scroll', (event) => {
//     console.log(event.target.scrollingElement.scrollTop)
// })

// window.addEventListener('resize', (event) => {
//     console.log(event)
// })

// const button = document.querySelector('button')
// button.addEventListener('mouseenter', (event) => {
//     console.log('enter')
// })
// button.addEventListener('mouseleave', (event) => {
//     console.log('leave')
// })

const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    console.log(event)
    alert('Подтверждено!')
})
