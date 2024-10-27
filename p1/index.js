// console.log('привет консоль [js]');
// const name = 'привет "консоль"';
// console.log(name);

// let noName = 5;
// noName *= 5;

// console.log(noName);
// console.log(typeof noName)
// console.log(typeof typeof noName);
////[lesson 1]

// const w = 'www';
// const array = ['ru', 'eng', w];
// console.log(array)
// console.log(array.length)
// console.log(array[1])

// array[5] = '...';
// console.log(array)

// const test = {
//     key1: 'obj',
//     key2: 35,
//     key3: true,
//     key4: ['1', '1', '0']
// };
// console.log(test)

const cart = {
    money: {
        sum: 500,
        currency: 'euro',
        allowCurrency: ['usd', 'rub'],
        discount: {
            hasDiscount: true,
            value: 30
        }
    },
    items: [{
        title: 'pen',
        count: 3,
        price: 5
    }, {
        title: 'book',
        count: 1,
        price: 20
    }],

};

console.log(cart.money.discount.value)
console.log(cart.items[0].price)
console.log(cart['money']['sum']);
console.log(cart.money.sum);