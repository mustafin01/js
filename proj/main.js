// простая страница // let name = prompt("Ваше имя?", "");
// alert(name);

// Постфиксная и префиксная формы
// let a = 1, b = 1;

// let c = ++a; 
// let d = b++;

// alert(a)
// alert(b)
// alert(c)
// alert(d)

// Результат присваивания
// let a = 2;
// let x = 1 + (a*=2);
// alert (x)


// Преобразование типов
// console.log("" + 1 + 0);
// console.log("" - 1 + 0);
// console.log(true +false);
// console.log(6 / "3");
// console.log("2" * "3");
// console.log(4 + 5 + "px");
// console.log("$" + 4 + 5);
// console.log("4" - 2);
// console.log("4px" - 2);
// console.log(" -9 " + 5);
// console.log(" -9 " - 5);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log(" \t \n" - 2);


// Исправьте сложение
// let a = Number(prompt("Первое число?", 1));
// let b = Number(prompt("Второе число?", 2));

// alert(a+b); 



// Работа с переменными
// 1
// var num = 3;
// alert(num);

// 2
// let a = 10;
// let b = 2;

// let sum = a + b;
// let difference = a - b;
// let product = a * b;
// let quotient = a / b;

// console.log("Сумма:", sum);
// console.log("Разность:", difference);
// console.log("Произведение:", product);
// console.log("Частное:", quotient);

// 3
// let c = 15;
// let d = 2;
// let result = c + d;
// console.log(result);

// 4
// var a = 10;
// var b = 2;
// var c = 5;

// var sum = a + b + c;

// console.log(sum);

// 5
// let a = 17;
// let b = 10;

// let c = a - b;

// let d = 7;

// let result = c + d;

// console.log(result);



// Работа со строками
// 1
// let str = 'Привет, Мир!';
// console.log(str);

// 2
// let num = '12345';
// let product = 1;

// for (let i = 0; i < num.length; i++) {
//   product *= parseInt(num[i]);
// }

// console.log(product);


// Практика
// 1
// let secondsInHour = 60 * 60;
// console.log("Количество секунд в часе: "
//  + secondsInHour + " секунд.");


// let secondsInDay = secondsInHour * 24;
// console.log("Количество секунд в сутках: "
//  + secondsInDay + " секунд.");

// let secondsInMonth = secondsInDay * 30; 
// console.log("Количество секунд в месяце: "
//  + secondsInMonth + " секунд.");

// 2
// var date = new Date();

// var hour = date.getHours();
// var minute = date.getMinutes();
// var second = date.getSeconds();


// if (hour < 10) {
//   hour = '0' + hour;
// }
// if (minute < 10) {
//   minute = '0' + minute;
// }
// if (second < 10) {
//   second = '0' + second;
// }

// console.log(hour + ':' + minute + ':' + second);

// 3
// let number = 5;
// let squaredNumber = number * number;
// console.log('Квадрат числа ' + number + ' равен ' + squaredNumber);


// Работа с присваиванием и декрементами
// 1
// var num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);

// 2
// var num = 10;
// num++;
// num++;
// num--;
// alert(num);