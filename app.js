// Пример №1
// Создайте переменные b1, b2, b3, b4, b5. Поместите в них результат выражений:
// 5 % 3,
// 3 % 5,
// 5 + '3',
// '5' - 3,
// 75 + 'кг'
// Результаты переменных вывести в console.log();

/*let b1 = 5 % 3; //2
let b2 = 3 % 5; //3
let b3 = 5 + '3'; //53
let b4 = '5' - 3; //2
let b5 = 75 + 'кг'; //75кг

console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
console.log(b5);


// Пример №2 
// Напиши скрипт, который находит объем цилиндра высотой 10м (переменная heightC) и 
// диаметром основания 4м (dC), результат поместите в переменную v.
let heightC = 10;
let dc = 4;
let v;
v = heightC * dc;
console.log(v);*/

// Пример №3
// Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
/*let a = 10;
let b = 2;
console.log(a * b, a / b);//20 , //5*/
// Пример №4
//  Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. 
//  Выведите на экран значение переменной result.
/*let c = 15;
let d = 2;
let result1 = c + d;
console.log(result1);//17*/

// Пример №5
//  Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.

/*let y = 10;
let x = 2;
let r = 5;
let result = y + x + r;
console.log(result);//17*/

// Пример №6
//  Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. 
//  Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат 
//  запишите в переменную result. Выведите на экран значение переменной result.
/*let a3 = 17;
let b6 = 10;
let c1 = 7;
let d1 = 7;*/
/*let result2 = c1 + d1;
console.log(result2);//14*/
// Пример №7
// Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, (Имя)!'.
/*let name = 'Vasil';
console.log('hi, Vasil!');*/
// Пример №8
// Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне (Возраст) лет!'.
/*let age = 37;
console.log('I am 37 years old');*/
// Пример №9
// Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите 
// на экран символ 'a', символ 'c', символ 'e'.
/*let str = 'abcde';
console.log(str[0]);
console.log(str[2]);
console.log(str[4]);*/
//Пример №10
// Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
/*console.log(60 * 60);//3600
console.log(60 * 24);//1440
console.log(60 * 31);//1860*/
//Пример №11
//Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=. 
// Количество строк кода при этом не должно измениться.
// let num = 47;
// num = num + 7;
// num = num - 18;
// num = num * 10;
// num = num / 15;
// console.log(num);
//let num = 47;
//num += 7;//54
//num -= 18;//29
//num *= 10;//470
//num /= 15;//3.13
//console.log(num)
// Пример №12
// Переделайте этот код так, чтобы в нем использовались операции ++ и --. 
// Количество строк кода при этом не должно измениться.
// let num = 10;
// num = num + 1;
// num = num + 1;
// num = num - 1;
// console.log(num);
/*let num = 10;
 num = num + 1;//11
 num ++ ;//11
 num -- ;//9
 console.log(num);*/
 /* <h1>Задача 1</h1>
    <button onclick="buttonClick()">Нажми на меня</button>
    <span id="elem">Это span с текстом.</span>*/
    
    /*<!-- <h1>Задача 2</h1>
    <button onclick="buttonClick()">Нажми на меня</button>
    <span id="elem">Это span с текстом.</span> -->

    <!-- <h1>Задача 3</h1>
    <h2>Заголовок, не поменяется.</h2>
    <p>Абзац, поменяется.</p>
    <p>Абзац, поменяется.</p>
    <p>Абзац, поменяется.</p>
    <input type="submit" onclick="func()"> -->
    <!-- <h1>Задача 4</h1>
    <h2 class="a">Заголовок с классом a.</h2>
    <p class="a">Абзац с классом a.</p>
    <p class="a">Абзац с классом a.</p>
    <p>Просто абзац, не поменяется.</p>
    <input type="submit" onclick="func()"> 
    <h1>Задача 5</h1>
    <h2 class="a">Заголовок с классом a, не поменяется.</h2>
    <p class="a">Абзац с классом a.</p>
    <p class="a">Абзац с классом a.</p>
    <p>Просто абзац, не поменяется.</p>
    <input type="submit" onclick="func()">*/

    /*Задача1.*/
 /*function buttonclick(){
    let elem = document.getElementById('elem');
    elem.innerHTML = 'Ку-ку А я жирный';
 }*/ 

/*Задача 2.*/

/*function buttonClick(){
   let elem = document.getElementById('elem');
   elem.innerHTML = 'Абзац превратился в H3!';
   elem.outerHTML = '<h3>'+elem.innerHTML+'</h3>';
}*/

/*ЗАДАЧА3.
function buttonclick(){
  let elem = document.getElementById('elem');
  elem.outerHTML = '<h3>'+elem.innerHTML+'</h3>';
}*/

/*Задача4.*/
function func(){
   let elems = document.getElementsByTagName('p');
   for(let i = 0; i<elems.length; i++){
      elems[i].innerHTML = i+1;
   }
}

/*Задача5*/
   




 
 