// for (let i = 0; i < cart.length; i++) {
//     const product = cart[i];
//     finalPrice += (product.price * product.count);
// }
// let finalPrice = 0;

const name = 'Alex';
let final = 0;

if (name === 'Alex') {
    const product = createProduct('Пачка сухарей', 15, 3);

    let debt = 150;
    console.log(product);

    final = calculateFinalPrice(product);
    console.log(final += debt);
} 
else if (name === 'John') {
    const product = createProduct('Бублики', 10, 5);

    const debt = 50;

    final = calculateFinalPrice(product);
    console.log(final += debt);
} 
else {
    const product = createProduct('Газировка', 5, 1);
    final = calculateFinalPrice(product);
    console.log(final);
}

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

function calculateFinalPrice(cart) {
    let finalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        finalPrice += (product.price * product.count);
    }
    return finalPrice;
}

