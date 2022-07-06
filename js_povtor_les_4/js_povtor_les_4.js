//Lesson 4
// home work

// - створити функцію яка обчислює та повертає площу прямокутника

// function rectangular (a, b) {
//     let c= a*b;
//     return c;
// }
// console.log(rectangular(2,1))
//
// //  - створити функцію яка обчислює та повертає площу круга
// function circle(r) {
//     let radius = r * r;
//     let areaCircle = 3.14 * radius;
//     console.log(areaCircle)
// }
// circle(2)
//
//
//- створити функцію яка обчислює та повертає площу циліндру S= 2πRH
// areaCylinder(3, 4);
// function areaCylinder (R, H) {
//     let P = 3.14;
//     console.log( P * R * R *H);
// }

//- створити функцію яка приймає масив та виводить кожен його елемент


// let array = [0, 5, 8];
// function dataArray(array) {
//     for (i = 0; i <array.length; i++){
//         console.log(array[i])
//     }
//
// }
// dataArray(array)

// let array = [5, 10, 'jr'];
// function dataArray (array) {
//     for (i = 0; i < array.length; i++){
//         console.log(array[i])
//     }
// }
// dataArray(array)
//


// //- створити функцію яка створює параграф з текстом. Текст задати через аргумент
//function createpa(par) {
//     document.write('<p>par</p>')
// }
 //createpa('qwe')

//  за допомогою циклу
//    for (let i = 0; i < 3; i++) {
//         document.write('<p>par</p>')
//     }
// }
// createpa('qwe')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ul(arg) {
//     document.write(`<li>${arg}</li>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`<li>${arg}</li>`)
// }
// ul('text')

//  - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function createUl(arg) {
//     document.write(`<ul>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`</ul>`)
// };
// createUl('text');

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function createUl(arg, numb){
//     document.write(`<ul>`);
//     for (let i = 0; i < numb; i++) {
//         document.write(`<li>${arg}</li>`);
//     }
//     document.write(`</ul>`);
// }
// createUl('rom', 3);
//
// //сам пробував
// function ul (arg, num) {
//     document.write(`<ul>`);
//     for (i = 0; i < num; i++) {
//         document.write(`<li>${arg}</li>`)
//     }
//     document.write(`</ul>`);
//         }
// ul('text', 3)




// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let anyArray = [true,'Stepan Giga', 2021, 'Ivo Bobul'];
// function primitives (array1){
//     document.write(`<ol>`)
//         for (let i = 0; i < array1.length; i++) {
//             document.write(`<li>${array1[i]}</li>`);
//         }
//     document.write(`</ol>`)
// }
// primitives(anyArray);


// сам пробував
// let array = [1, 1000, 'one', 'coffee', true];
// function list(arg) {
//     document.write(`<ol>`)
//     for (i = 0; i < arg.length; i++) {
//         document.write(`<li>${arg[i]}</li>`)
//     }
//     document.write(`</ol>`)
// }
// list(array)
//
// // сам пробував, щоб побачити різницю з iter
// let arrayO = [1, 1000, 'one', 'coffee', true];
// function listO(arg) {
//     for (const argElement of arg) {
//
//     }
//    document.write(arg)
// }
// listO(arrayO)


// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
// let newArray = [{id: 1, name: 'Soso', age: 55}, {id: 2, name: 'Valeriy', age: 50}, {id: 3, name: 'Ivo', age: 65}];
// function arrayField(array) {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id}${arrayElement.name}${arrayElement.age}</div>`)
//     }
//
// }
// arrayField(newArray)

// Lesson 4
// Class work
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min (a, b, c) {
//     if( a< b && a < c) {
//         console.log(a)
//     } else if (b < a && b < c) {
//         console.log(b)
//     } else if (c < a && c < b) {
//         console.log(c)
//     }
// }
// min(-5, 20,1)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function min (a, b, c) {
//     if (a < b && a < c) {
//         document.write(`<h2>найменше число: ${a}</h2>`)
//     }
//     else if (b < a && b < c) {
//         document.write(`<h2>найменше число: ${b}</h2>`)
//     }
//     else if (c < a && c < b) {
//         document.write(`<h2>найменше число: {c}<h2>`)
//     }
//     else if (a === b && a < c) {
//         document.write(`<h2>найменше число: ${a}<h2>`)
//     }
//     else if (a === c && a < b) {
//         document.write(`<h2>найменше число: ${a}<h2>`)
//     }
//     else if (a === b && b < c) {
//         document.write(`<h2>найменше число: ${b}<h2>`)
//     }
//     else if (b === c && b < a) {
//         document.write(`<h2>найменше число: ${b}<h2>`)
//     }
// }
// min (-20, -20, -20);


// - створити функцію яка повертає найбільше число з масиву
// let array = [777, 45, 365, -70, 555];
// function maxArray (ar) {
//     let max = ar[0];
//     for (const max1 of ar) {
//         if (max1 > max) {
//             max = max1
//         }
//     }
//     return max
// }
// document.write(`<h2>Найбільший елемент масиву: ${maxArray(array)}</h2>`)


// - створити функцію яка повертає найменьше число з масиву
// let minArray = [25, -5, 100, 69, 58];
// function Arraymin (array) {
//     let min = array[0]
//     for (const minElement of array) {
//         if (minElement < min) {
//             min = minElement
//         }
//     }
//     return min;
// }
// document.write(`<h2> найменше число ${Arraymin(minArray)}</h2>`)



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// let sumArray = [5, 18, -100, 255];
// function arraySum (array) {
//    let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement
//     }
//     return sum;
// }
// document.write(`<h2> сума елементів масиву ${arraySum(sumArray)}</h2>`)


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let midleArray = [7, 25, 78, 121];
// function arrayMidle (array) {
//     let midle = 0;
//     for (const arrayElement of array) {
//         midle += arrayElement
//
//     }
//     return  midle/array.length
// }
// document.write(`<h2>середнє значення елементів масиву становить ${arrayMidle(midleArray)}</h2>`)

// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let array = [5, 25, 48, 200];
// function anyNumber (arg) {
//     let max = arg[0];
//     let min = arg[0]
//     for (const Element of arg) {
//         if (Element > max) {
//             max = Element;
//         }
//         if (Element < min) {
//             min = Element;
//         }
//     }
//     console.log(min)
//     return max
// }
// document.write(`<h2> найбільший елемент масиву ${anyNumber(array)}</h2>`);


// - створити функцію яка заповнює масив рандомними числами
// function funRandom(length) {
//     let arrayEmpty = [];
//     for (let i = 0; i < length; i++) {
//         arrayEmpty.push(Math.floor(Math.random()*10))
//     }
//     return arrayEmpty
//
// };
// document.write(funRandom(5))



// - створити функцію яка заповнює масив рандомними числами
// function funRandom(lenght) {
//     let arrayEmpty = [];
//     for (let i = 0; i < lenght; i++) {
//         arrayEmpty.push(Math.floor(Math.random()*100))
//     }
//     return arrayEmpty
//
// };
//  document.write(funRandom(6))


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function arrN(length, limit) {
//     let arrayEmpty1 = [];
//     for (let i = 0; i < length; i++) {
//         arrayEmpty1.push(Math.round(Math.random()*limit))
//     }
//     return arrayEmpty1
// }
// document.write(arrN( 4, 100))

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function reverse(arr) {
    let newArr = [];
    for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
        newArr[ri] = arr[i];
    }

    return newArr;

}
console.log(reverse([1, 200, 300]))

