// const createProduct = (name, price, count) => {
//     if (name === '') {
//         name = 'Неизвестный продукт'
//     }
//     if (typeof price !== 'number') {
//         price = 0;
//         console.log('Вы задали неправильную цену');
//     }
//     if (typeof count !== 'number') {
//         count = 0;
//         console.log('Вы задали неправильное количество');
//     }

//     return [{
//         name,
//         price,
//         count,
//     }];
// }

// const calculateFinalPrice = (cart) => {
//     let finalPrice = 0;
//     for (let i = 0; i < cart.length; i++) {
//         const product = cart[i];
//         finalPrice += (product.price * product.count);
//     }
//     return finalPrice;
// }



const name = 'John';
let final = 0;

// if (name === 'Alex') {
//     const product = createProduct('Пачка сухарей', 15, 3);

//     let debt = 15;

//     final = calculateFinalPrice(product);
//     console.log(final += debt);
// } 
// else if (name === 'John') {
//     const product = createProduct('Бублики', 10, 5);
//     const debt = 10;

//     calculateFinalPrice(product, (final) => {
//         console.log('Привет!', final);
//     });
//     console.log(final += debt);
// } 
// else {
//     const product = createProduct('Газировка', 5, 1);
//     final = calculateFinalPrice(product);
//     console.log(final);
// }



function createProduct(name, price, count) {
    if (name === '') {
        name = 'Неизвестный продукт'
    }
    if (typeof price !== 'number') {
        price = 0;
        console.log('Вы задали неправильную цену');
    }
    if (typeof count !== 'number') {
        count = 0;
        console.log('Вы задали неправильное количество');
    }

    return [{
        name,
        price,
        count,
    }];
}

function calculateFinalPrice(cart, callback) {
    // setTimeout(function() {
    //     console.log(cart)
    // }, 1000 )

    setTimeout(() => {
        let finalPrice = 0;
        for (let i = 0; i < cart.length; i++) {
            const product = cart[i];
            finalPrice += (product.price * product.count);
        }

        callback(finalPrice);
    }, 1000 )
}


const add = (a, b) => a+b;
console.log(add(99, 1))