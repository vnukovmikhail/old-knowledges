const section = document.querySelector('section')
section.style.display = 'flex';
const h1 = document.createElement('h1')
h1.textContent = 'No Way!'
h1.style.cssText = `
    align-content: center;
    justify-content: center;
    color: blue;
    background: royalblue;
    padding: 0 10px;
`;
const ul = document.createElement('ul')
ul.style.padding = '0';
ul.style.listStyle = 'none';
ul.innerHTML = `
    <li>000</li>
    <li>123</li>
    <li>321</li>
`;
for (let i = 0; i < ul.children.length; i++) {
    const li = ul.children[i]
    li.style.cssText = `
        background: black;
        color: white;
        margin: 5px;
    `;
}
section.appendChild(h1)
section.appendChild(ul)
document.body.appendChild(section)