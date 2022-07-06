// console.log('asd');
// alert('привіт');
// document.write('привіт ще раз');

// let c = 100;
// console.log(c);
//
// c = 200;
// console.log(c)

// const pi = 3.14;
// console.log(pi)


// console.log(100);
// console.log('рядок');
// console.log(true);
// console.log(false);
// let array= [1, -10, true, 'кома', [11, 22, 33]];
// console.log(array);
// console.log(array[2]);
// console.log(array[4] [2]);
// let user = {name : 'roman', age : 41};
// console.log(user);
// console.log(user.age);
// console.log(user['name']);
// let xxx;
// console.log(xxx);
// console.log(null);
// console.log(NaN);
//
// let num = 100;
// console.log(typeof num);
// let str = 'рядок';
// console.log(typeof str);
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof true);

// let result = 10 + 20;
// console.log(result);
//
// console.log(10 % 3);
// console.log(10 % 4);
// console.log(12 % 3);
// console.log((10+20)*2);
// let a = 0;
// a++;
// console.log(a);
// let b = 0;
// b--;
// console.log(b);

// let a = 0;
// let b = a++;
// console.log(a, b);
//
//
// let c = 0;
// let d = ++c;
// console.log(c, d);
// let e = c + 100;
// console.log(c, e);
// let f = 100 + c;
// console.log(c, f);
// c = c - 100;
// console.log(c)
//
// let h = 2;
// console.log(h ** 2);
//
//
// let str1 = 'привіт';
// let str2 = 'роман';
// console.log(str1 + ' ' + str2);
// console.log( ` ${str1} ${str2} `);
// console.log(+ `100`);
// console.log(!!1);
// console.log(!!0);
// console.log(!!null);
// console.log(!!undefined);
// console.log(!!NaN);

// console.log(5 == '5');
// console.log(5 === '5');

// let users = [
//         {name : 'roman', age : 41},
//         {name : 'zoryana', age : 37},
//         {name : 'kateryna', age : 11},
//
// ]
// console.log(users[2].age);


// let products = [
//    {
//                 title: 'milk',
//                 price: 22,
//                 image: 'https://img2.zakaz.ua/1.1612232018.ad72436478c_2021-02-03_Tatyana_L/1.1612232018.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.350nowm.jpg.350x.jpg'
//    },
//    {
//                 title: 'juice',
//                 price: 27,
//                 image: 'https://aquamarket.ua/65083-large_default/galicia-yabluchno-grushevij-02-l-galichina-sik-naturalnij-bez-dodavannya-cukru.jpg'
//    },
//    {
//       title: 'tomato',
//       price: 47,
//       image: 'https://florium.ua/media/catalog/product/cache/1/file/9df78eab33525d08d6e5fb8d27136e95/_/_/__1_1_68.jpg'
//    },
//    {
//            title: 'tea',
//            price: 15,
//            image: 'https://images.prom.ua/668543501_chaj-chernyj-zavarnoj.jpg'
//    },
// ];
//
// for (const product of products) {
// //    console.log(product)
//     document.write(
//         `<div>
//             <h2>${product.title}, ${product.price}</h2>
//             <img src="${product.image}" alt="image products">
//         </div>`)
//
// }

// урок2

// let age = 20;
// let gender = 'female';
// // if (age >= 18) {
// //     document.write('<div>hello</div>')
// //     if (gender === 'male') {
// //         document.write('<img src="https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png" alt = "bart">')
// //     } else if (gender === 'female') {
// //         document.write('<img src="https://www.idlememe.com/wp-content/uploads/2021/08/lisa-simpson-crying-meme-idlememe-1.jpg" alt = "lisa">')
// //     } else if (gender === 'unknown') {
// //         document.write('<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Sert_-_3_smile.svg/1200px-Sert_-_3_smile.svg.png" alt = "qq">')
// //     }
// // } else {
// //     document.write('<div>not hello</div>')
// // }
//
// if (age > 17 && gender === 'male') {
//     document.write('<img src="https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png" alt = "bart">')
// } else if ( age > 17 && gender === 'female') {
//     document.write('<img src="https://www.idlememe.com/wp-content/uploads/2021/08/lisa-simpson-crying-meme-idlememe-1.jpg" alt = "lisa">')
// }

// let value = 'a';
// switch (value) {
//     case 'a':
//         console.log(' case1');
//         break;
//     case 'b':
//         console.log(' case2');
//         break;
//     case 'c':
//         console.log(' case3');
//         break;
//     default :
//         console.log('else')
//   }

// let xxx = null;
// if (!xxx) {
//     console.log('true');
//     } else {
//     console.log('false')
// }

// let xxx ='1' || '100';
// console.log(xxx)

//


// 3 урок


// let menu = ['about', 'main', 'contacts', 'team', 'xxx'];
// document.write('<ul>');
// for (let i = 0; i < menu.length; i++) {
//     document.write(`<li>${menu[i]}</li>`)
// }
// document.write('</ul>');


// let products = [
//    {
//                 title: 'milk',
//                 price: 22,
//                 image: 'https://img2.zakaz.ua/1.1612232018.ad72436478c_2021-02-03_Tatyana_L/1.1612232018.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.350nowm.jpg.350x.jpg'
//    },
//    {
//                 title: 'juice',
//                 price: 27,
//                 image: 'https://aquamarket.ua/65083-large_default/galicia-yabluchno-grushevij-02-l-galichina-sik-naturalnij-bez-dodavannya-cukru.jpg'
//    },
//    {
//       title: 'tomato',
//       price: 47,
//       image: 'https://florium.ua/media/catalog/product/cache/1/file/9df78eab33525d08d6e5fb8d27136e95/_/_/__1_1_68.jpg'
//    },
//    {
//            title: 'tea',
//            price: 15,
//            image: 'https://images.prom.ua/668543501_chaj-chernyj-zavarnoj.jpg'
//    },
// ];




//for (let  i = 0; i < products.length; i++) {
//    console.log(product)

// document.write(`<ul>`)
// for (let i = 0; i < products.length-1; i++) {
//     let product = products[i];
//     if (product.price > 10) {
//      document.write(`<li class="target">${product.title} ${product.price} <img src="${product.image}" alt=""></li>`)
//     }
// }
// document.write(`</ul>`)

// document.write(`<ul>`)
// for (let product of products) {
//     document.write(`<li class="target">${product.title} ${product.price} <img src="${product.image}" alt=""></li>`)
// }
//
//
// document.write(`</ul>`)

// document.write(`<ul>`)
// let i = 0;
// while (i < products.length) {
//     let product = products[i]
//     document.write(`<li class="target">${product.title} ${product.price} <img src="${product.image}" alt=""></li>`)
//     i++
// }
// document.write(`</ul>`)


// do {
//     console.log('do some');
// } while(false)

// let user = {name: 'ivan', age: 22, status: true};
// for (let userKey in user) {
//     console.log(userKey, user[userKey])
// }



//лекція 5
// function listcreator(a, b, c, d) {
//     document.write(`<ul>`);
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${b}</li>`);
//     document.write(`<li>${c}</li>`);
//     document.write(`<li>${d}</li>`);
//     document.write(`</ul>`)
// }
// listcreator('item1', 'item2', 'item3', 'item4')


// function listcreator2(size) {
//     document.write(`<ul>`);
//     for (let i = 0 ; i < size; i++) {
//         document.write(`<li>item ${i+1}</li>`);
//     }
//
//     document.write(`</ul>`)
// }
// listcreator2(10)

// function calc(a, b) {
//     let res = a + b;
//     return res;
// }
//
// let result = calc(10, 20);
//  console.log(result)


// function calc2 () {
//     let res = 0;
//     for (const argument of arguments) {
//        res = res + argument ;
//     }
//     return res;
//
// }
// let  res1 = calc2(10, 20, 30);
// let res2 = calc2(500, 600, 700, 800);
// console.log(res1, res2);


// function numberChecker(a,b) {
//      return typeof a === 'number' && typeof b ==='number';
// }
//
// function calculator (action, a, b) {
//     let result;
//     if (action === '+' && numberChecker(a,b)) {
//         result = a + b;
//         } else if (action === '-' && numberChecker(a,b)) {
//         result = a -b;
//     }
//     return result;
// }
// let calculatorResult1 = calculator('+', 10, 20)
// console.log(calculatorResult1);

//лекція 5
// let asd = 0;
// function increment (num) {
//   num++;
// }
// increment(asd);
// console.log(asd)


// let  asd = {val: 0};
// function increment2(obj) {
//     obj.val++;
// }
//
// increment2(asd);
// console.log(asd)


// let foo = function () {
//     console.log('foobar')
// }
// foo();
//
//
// let foobar = () =>
// {console.log('ddd')
// console.log('aaaa')
// console.log(1)}
// foobar()

// let calc = (a,b) =>{
//     return a + b;}
// console.log(calc(5,6));
//
// let  calc1 = (a,b) =>  a + b;
// console.log(calc1(5,6));
//
// let calc2 = function (c, d) {
//     return (c + d)
//
// }
// console.log(calc2(5,6) )
//
// home();
// function home() {
//     console.log("ddd")
// }
// sum (10, 1)
// function sum (a, b) {
//    let g =  a+b;
//     console.log(g)
// }
//
// let p = function sum2 (f, h) {
//      return f+h;
//
// }
// console.log(p(10,2))
//


// (function (msg) {
//     console.log(msg)
// } ('hello'));


// рекурсія// function rec() {
//     rec();
// }
//
// rec()

// function rec(i, limit) {
//     i++;
//     console.log(i)
//     if(i > limit){
//         return;
//     }
//     rec(i, limit)
// }
// rec(0, 10)

// function calc(action, a, b) {
//     if (action === '+') {
//         return a + b;
//     } else if (action === '-') {
//         return a - b;
//     } else if (action === '*') {
//         return a * b;
//     } else if (action === '/') {
//         return a / b;
//     } else if (action === 'custom') {
//         return (a+b) / a;
//     } else {
//         return 0;
//     }
// }
//
// console.log(calc('custom', 10, 20))


// function calculator(action, a, b) {
//     return action(a, b);
// }
//
// console.log(calculator(function (a, b) {
//     return a + b
// }, 10, 20));
//
// console.log(calculator(function (a, b) {
//     return a - b
// }, 10, 20));

// let users = [
//     {name : 'roman', age : 41},
//     {name : 'zoryana', age : 37},
//     {name : 'kateryna', age : 11},
//
// ];
// let filter = [];
//
// for (const user of users) {
//     if(user.age > 30) {
//         filter.push(user)
//     }
// }
// console.log(filter)


// let users = [
// //     {name : 'roman', age : 41},
// //     {name : 'zoryana', age : 37},
// //     {name : 'kateryna', age : 11},
// //     ];
//
// let filter = users.filter(function (user) {return user.age > 30
// });
// console.log(filter)

// calculator((a, b) => a + b, 10 + 20);
// calculator(function (a, b) {
//     return a + b
// }, 10, 20);



}