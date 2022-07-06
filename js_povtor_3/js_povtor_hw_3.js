// з 2 lesson
//Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let number = +prompt('Введіть число 1, 0 , -3');
//  (number !== 0) ? console.log('ВІРНО') : console.log('НЕВІРНО')


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 2.
// let year = +prompt('Введіть кількість днів в цьому році');
// (year % 2 === 0) ? alert('високосний рік') : alert('звичайний рік')

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// let number =+prompt('прошу ввести число');
// (number === 10) ? alert('вірно') : alert('невірно');


//lesson 3
//homework
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arrayNum = [1, 11, 2, 350, 78];
// let arrayStr = ['one', 'horse', 'tomato', 'car', 'tre'];
// let  arrayOter = [5, 'apple', true, 'monkey', false]
// console.log(arrayOter);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let  arrayEmpty = [];
// arrayEmpty [1] =100;
// arrayEmpty [2] = false;
// arrayEmpty [3] = 'green';
// arrayEmpty [4] = true;
// arrayEmpty [5] = 432;
// console.log(arrayEmpty)


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let i = 0; i < 10; i++) {
//     document.write(`<div> text </div>`);
// }
//
// for (let j = 0; j < 10; j++) {
//     document.write(`<div>text ${j}</div>`)
// }
//
// let q = 0;
// while (q < 10) {
//     document.write(`<div> text </div>`);
//     q++;
// }
//
// let u = 0;
// while (u < 10) {
//     document.write(`<div>text${u}</div>`);
//     u++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let array = [1, 3, 0, -20, 50];
// for (i = 0; i < array.length; i++){
//     console.log(array[i])
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let array = ['one', 'door', 'cheese', 'chair', 'motorcycle'];
// for (i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arrayOther = [1, 'two', true, false, -100 ];
// for (i = 0; i < arrayOther.length; i++) {
//     if (typeof arrayOther[i] === "boolean") {
//         console.log(arrayOther[i])
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arrayNumber = [2, 'street', 100, 'garden', true];
// for(i = 0; i < arrayNumber.length; i++) {
//     if ( typeof arrayNumber[i] === "number") {
//         console.log(arrayNumber[i])
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arrayString = [100, 'hundred', 'lanch', 350, false];
// for (i = 0; i < arrayString.length; i++) {
//     if (typeof arrayString[i] === 'string') {
//         console.log(arrayString[i])
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// let array = [];
// array[0] =3000;
// array[1] = 'sofa';
// array[2] =true;
// array[3] = 100000;
// array[4] = 'Roman';
// for (i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (i = 0; i < 10; i++) {
//     console.log('поточний крок циклу : ' + i);
//     document.write('поточний крок циклу : ' + i +'.  ')
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (i = 0; i < 100; i++) {
//     console.log('поточний крок циклу: '+ i);
//     document.write('поточний крок циклу : ' + i +'.  ')
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (i = 0; i < 100; i+=2) {
//     console.log('поточний крок циклу: '+i);
//     document.write('поточний крок циклу: '+i+'  ')
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log('парний крок циклу:' +i)
//         document.write('парний крок циклу: ' +i+'  ')
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log('непарний крок циклу:' +i)
//         document.write('непарний крок циклу: ' +i+'  ')
//     }
// }


// lesson 3
// class work

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arrayNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while
//  i = 0;
// while (i  < arrayNumbers.length) {
//     console.log(arrayNumbers[i]);
//     i++;
//    }

// 2. перебрати його циклом for
// for (let i = 0; i <arrayNumbers.length; i++) {
//     console.log(arrayNumbers[i])
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// i = 0;
// while (i <arrayNumbers.length) {
//     if (i % 2 !==0 ) {
//         console.log(arrayNumbers[i]);
//     }
//         i++
//
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < arrayNumbers.length; i++){
//     if (i % 2 !==0){
//         console.log(arrayNumbers[i])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// i = 0;
// while (i < arrayNumbers.length) {
//     if (i % 2 === 0) {
//         console.log(arrayNumbers[i])
//     };
//     i++
// };

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arrayNumbers.length; i++) {
//     if (i % 2 === 0) {
//         console.log(arrayNumbers[i])
//     };
// };

// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < arrayNumbers.length; i++){
// if (arrayNumbers[i] % 3 === 0) {
//     arrayNumbers[i] = 'okten'
//    console.log(arrayNumbers[i])
// }
// }
// console.log(arrayNumbers)

// 8. вивести масив в зворотньому порядку.
// for (let i = arrayNumbers.length-1; i >=0; i--) {
//     console.log(arrayNumbers[i])
// }
//
// let i = arrayNumbers.length-1 ;
// while (i >= 0) {
//     console.log(arrayNumbers[i])
//     i--
// }