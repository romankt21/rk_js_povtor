// function foo() {
// let a = 10;
// let b = 20;
// let c = a + b;
// return c;
// }
//
// console.log(foo());
// console.log(a)


//сам пробував
// function foo1() {
//     let z = 1;
//     let x = 2;
//     let v = z - x;
//     return v;
// }
//
// console.log(foo1())

// function foo2 () {
//     let n = 1;
//     let m = 2;
//     let s = n * m;
//     return s;
// }
//
// console.log(foo2());

// function foo3 () {
//     let d = 1;
//     let f = 2;
//     let g = d/f;
//     return g;
// }
//
// console.log(foo3());

// function foo4() {
//     let h = 4;
//     let j = 5;
//     let k = (h + j) * h;
//     return k;
// }
//
// console.log(foo4());

// function foo5() {
//     let q = 5;
//     let w = 6;
//     return (q + w) * (q - w);
// }
//
// console.log(foo5())


//сам пробував


// function foo() {
// let a = 10;
// let b = 20;
// return a + b;
// }
//
// console.log(foo())
// let result = foo();
// console.log(result);
//
// let salary = 10000 + foo()

// function calc1(a,b) {
// return a + b;
// }
// let calcResult = calc1(100, 200);
// console.log(calcResult)
//
// console.log(calc1(5, 12));

// function calcMinus(q, w) {
//     return  q - w;
// }
//
// console.log(calcMinus(100, 20));

// function msg(message) {
//     document.write(`<h1>${message}</h1>`);
// }
// msg('hello');
// msg('hi')




// function massage1(msg1) {
//     document.write(`<h1>${msg1}</h1>`);
// }
// massage1('qwe');

// function massage2 (msg2) {
//     document.write(`<h1>${msg2}</h1>`)
// }
// massage2('rtuu');

// massage3('sdf')
// function massage3 (msg3) {
//     document.write(msg3);
// }




// function listCreator (a, b, c) {
//     document.write('<ul>');
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${b}</li>`);
//     document.write(`<li>${c}</li>`);
//     document.write('</ul>');
// }
// listCreator('item1', 'item2', 'item3');
// listCreator('zxc', 'asd', 'qwe');

// let nums = [111, 222, 333];
//
// let users = [
//     {name : 'roman', age : 41},
//     {name : 'zoryana', age : 37},
//     {name : 'kateryna', age : 11},
//     ];
//
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
// function iteratorOfArray(arr) {
//     for (const item of arr) {
//         console.log(item)
//     }
//
// }
// iteratorOfArray(nums);
// iteratorOfArray(users);
// iteratorOfArray(products);

// let a = 'adsa';
// let b = 123;
// let c = [1, 2, 4, 5];
// let array = [a, b, c];
//
// let a2 = 'adsa';
// let b2 = 123;
// let c2 = [1, 2, 4, 5];
// let array2 = [a2, b2, c2];

// function arrayCreator (a, b, c) {
//     let arr = [a, b, c];
//     return arr;
//
// }
// let array1 = arrayCreator(111, 222, 333);
// console.log(array1);
//
// let array2 = arrayCreator('qwe', 'asd', 'zxc');
// console.log(array2);

//сам пробував
// let num = [1, 2, 3];
// let str = ['hi', 'by', 'lunch'];
// function crArr (d) {
//     for (const data of d) {
//         console.log(data)
//     }
// }
// crArr(num);
// crArr(str);


// let num = [4, 5, 6];
// let str = ['a', 'b', 'c'];
// function crArr (fun){
//     for (const fun1 of fun) {
//
//
//         console.log( fun1)
//     }
// }
// crArr(num);
// crArr(str);

// function checkKreator (arayOfOrderedFood) {
//
//     return arayOfOrderedFood;
//
// }
// let check = checkKreator(['meet', 'beer', 'salad']);
// console.log(check);

// function divCreator(counter) {
//     for (let i = 0; i < counter; i++) {
//         document.write(`<div>test ${i}</div>`)
//     }
//     document.write('<hr>');
// }
// divCreator(2);
// divCreator(10);


// debugger
//
// function summary(arrayChecks){
//     let result = 0;
//     for (const check of arrayChecks) {
//         result = result + check;
//     }
// return result;
//
// }
//
// console.log(summary([100, 200, 300, 1000]));


// function iteratorOfArray(arr) {
//     for (const item of arr) {
//        console.log(item)
//     }
//
// }
//
//
// function calculator(...asd) {
// iteratorOfArray(asd);
// }
// calculator(1, 2, 3, 4);


// function calculator () {
//     console.log(arguments);
//     if (arguments.length === 2) {
//         return arguments[0] + arguments[1];
//     } else if (arguments.length === 3) {
//        return  arguments[2] - arguments[0] + arguments[1];
//
//     }
//
// }
// calculator(1,2,7,-15);


let x = 100;