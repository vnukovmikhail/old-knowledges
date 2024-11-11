// const section = document.querySelector('section')
// const main = document.querySelector('main')
// console.log(section.children) // все дети
// console.log(section.parentNode) // родитель
// 
// console.log(`--list "${section.children[0].textContent}"`)
// for (let i = 0; i < section.children.length; i++) {
//     const element = section.children[i]
//     console.log(element)
// }

// const section = document.querySelector('section')
// console.log(section.previousElementSibling)
// console.log(section.nextElementSibling)

// const section = document.querySelector('section')
// let i = 0
// section.innerHTML = `<button>Number:[${i}]</button>`
// section.textContent = `<button>Number:[${i}]</button>`

const section = document.querySelector('section')
for (let i = 0; i < section.children.length; i++) {
    const element = section.children[i]
    if (element.tagName === 'BUTTON') {
        element.innerHTML += `
            <div>this is button</div>
        `
        console.log(element)
    }
}