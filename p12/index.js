const section = document.querySelector('section')
const h1 = document.createElement('h1')
h1.textContent = 'No Way!'
h1.style.cssText = ``;
const ul = document.createElement('ul')
ul.innerHTML = `
    <li>000</li>
    <li>123</li>
    <li>321</li>
`;
section.appendChild(h1)
section.appendChild(ul)
document.body.appendChild(section)