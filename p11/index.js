// const input = document.querySelector('[name="my_checkbox"]')
// console.log(input.getAttribute('type'))

// const a = document.querySelector('a')
// const input = document.querySelector('input')
// a.setAttribute('href', 'http://google.com')
// a.removeAttribute('href')
// console.log(a.getAttribute('href'))
// console.log(a.hasAttribute('href'))
// a.setAttribute('data-test_attr', 'link')
// input.setAttribute('data-test_attr', 'input')
// console.log(input.dataset)

// const a = document.querySelector('a')
// a.style.color = 'red'
// a.style.backgroundColor = 'pink'
// a.style.cssText = `
//     color: red;
//     background: black;
// `;
// a.className = 'link2'
// a.classList.add('link3')
// a.classList.add('link5')
// console.log(a.classList)
// a.classList.remove('link3')
// console.log(a.classList.contains('link3'))
// a.classList.toggle('link2')
// a.setAttribute('class', 'link2')

const button = document.createElement('button');
button.textContent = 'Ur!';
button.style.cssText = `
    border-radius: 2px;
    background: transparent;
    border: 1px solid black;
    padding: 1px 3px;
`;
document.body.append(button);