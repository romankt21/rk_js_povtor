// let a = 100;
// let b = a;// a=b=100
// b = 200 //a = 100, b =200
//
// let obj1 = {name: 'vasyl'};
// let obj2 = obj1;
// console.log(obj2);
//
// obj2.name = 'ivan'
// console.log(obj2);
// console.log(obj1);
//
// let array1 = [1, 2 ,3];
// let array2 = array1;
// console.log(array1);
// console.log(array2);
// array2 = [10, 20, 30];
// console.log(array2);
// console.log(array1);

// let arr =[];
// function foobar(){
//     arr = [100, 20, 30];
// }
// foobar();
// console.log(arr)

// let calculator = function (a, b) {
//     return a + b;
// };
//
// console.log(calculator(10, 20))
//
// let calcuratorArrow = (a, b) => {
//     return a + b
// };
// console.log(calcuratorArrow(10, 20));
//
// let calculat = (a, b) => a + b;
// console.log(calculat(11, 22))


// (function (args) {
//     console.log('some stuff', args)
// }('hellow') )

// function asd (a, b, fn) {
//     console.log(a);
//     console.log(b);
//     console.log(fn)
//     fn();
// }
// asd (10, 20, function () {
//     console.log('hello')
// });



// let users = [
//     {name : 'roman', age : 41, status: false},
//     {name : 'zoryana', age : 37, status: false},
//     {name : 'kateryna', age : 11, status: true},
//     {name : 'demian', age : 5, status: true},
//     {name : 'myhailo', age : 1, status: true},
// ];
//
// console.log(users.filter(function (user){
//     return user.status;
// }));


// function calculatorCallback (num1, num2, action){
//     if (action === '+') {
//         console.log(num1 + num2)
//     } else if (action === 'pow') {
//         console.log( Math.pow(num1, num2));
//     }
// }
//
// calculatorCallback(1,3,'+')
// calculatorCallback(3, 2, 'pow')


// function calculatorCallback (a, b, fn){
//     return fn (a, b)
// }
//
// calculatorCallback(10, 20, function (a, b) {
//        console.log( a + b )
// });
//
// calculatorCallback(3, 2, function (x, y) {
//     console.log( Math.pow(x, y) )
// });
//
// calculatorCallback(100, 200, function (foo, bar) {
//     console.log( (foo - bar ) / foo)
// });

// function recursion () {
//     console.log('hello');
//     recursion();
// }

// function cycle(counter) {
//     console.log(counter);
//     counter++;
//
//     if (counter >= 10) {
//         return
//     } else {
//         cycle(counter);
//     }
// }
// cycle(0);


//home work lesson 5
// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника
// let areaRectangle1 = function  (c, d) {
//
//     console.log(c * d)
// }
// areaRectangle1 (5, 2 )
//
//
// let areaRectangle = (a, b) => a * b
//  console.log(areaRectangle(3, 4))

// - створити функцію яка обчислює та повертає площу круга
// const p = 3.14;
// let areaCyrcle1 = function (c) {
//     console.log(p * (c**2))
// };
// areaCyrcle1(1)
//
// let areaCyrcle = (r) => (p * (r**2));
// console.log(areaCyrcle(2));

//- створити функцію яка обчислює та повертає площу циліндру S= 2πRH
// const p = 3.14;
// let areaСylinder = (R, H) => (2 * p * R * H);
// console.log(areaСylinder(1, 2));
// document.write('площа циліндра = '+ areaСylinder(1,2)+' см квадратних');

//- створити функцію яка приймає масив та виводить кожен його елемент
//звичайна функція
// let array1 = [1, 25, 5, 10];
// function funcArray1(array1) {
//     for (j = 0; j < array1.length; j++) {
//
//         console.log(array1[j]);
//     }
// }
// funcArray1(array1)

//стрілочна функція
// let array2 =[10, 58, 'ok', true];
// let funcArray2 = (array2) => {
//     for (i = 0; i < array2.length; i++) {
//         console.log(array2[i])
//     }
// }
// funcArray2(array2);

// let array3 = ['str', 12, 54, false];
// let dataArray3 = (array3) => {
//     for (let t = 0; t < array3.length; t++) {
//         console.log(array3[t])
//     }
//
// }
// dataArray3(array3);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let funParagraph = (text1) => {
//     document.write(`<p>${text1}</p>`);
//     document.write(`<hr>`);
// }
// funParagraph('hello')

// == за допомогою циклу ==
// let funParagraph2 = (number, text2) => {
//     for (let i = 0; i < number; i++) {
//         document.write(`<p>${text2}</p>`)
//     }
// }
// funParagraph2(2,'hi');

//  - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let funUl = (text) => {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
//funUl('hi')

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let funUlCycle = (num, textc) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < num ; i++)  {
//
//         document.write(`<li>${textc}</li>`);
//
//     };
//     document.write(`</ul>`);
// }
// funUlCycle(3, 'hello')


// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
// let array = [1, 5, 'ok', true];
// let list = (ar) => {
//     document.write(`<ol>`)
//         for (let i = 0; i < ar.length; i++) {
//
//             document.write(`<li>${ar[i]}</li>`)
//
//         }
//     document.write(`</ol>`)
// }
// list(array);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
let array = [{id: 1, name: 'Roman', age: 42}, {id: 2, name: 'Ivan', age: 35}, {id: 3, name: 'Vasyl', age: 20}];
let func = (three) => {
    for (const threeElement of three) {
        document.write(`<div>${threeElement.id}, ${threeElement.name}, ${threeElement.age}</div>`)
    }
}
func(array);