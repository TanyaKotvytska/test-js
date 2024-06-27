//виведення значень в консоль

// console.log("Jacob Mercer");
// console.log(26);

//оголошення за допомогою конст

// const productName = "Droid";
// const pricePerItem = 2000;
// console.log(productName);
// console.log(pricePerItem);

//перевизначення лет

// let productName = "Droid";
// let pricePerItem = 2000;
// productName = "Repair droid";
// pricePerItem = 3500;
// console.log(productName);
// console.log(pricePerItem);


// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

//арифметичні операції

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

//комбіновані оператори

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;
// console.log(d);

//конкатенація рядків

// const username = "Poly";
// const message = "Welcome " + username + "!";
// console.log(message);

//шаблонні рядки

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits.`;
// console.log(message);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits.`;
// console.log(message);

//довжина рядка

// const username = "Billy";
// const message = `Username ${username} is ${username.length} characters long.`;
// console.log(message);

//індексація рядків

// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = (courseTopic[courseTopic.length - 1]);
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

//оператори порівняння

// const age = 5
// const isAdult = age >= 18;
// console.log(isAdult);

//оператори рівності

// const userPassword = "jqueryismyjam";
// const correctPassword = "jqueryismyjam";
// const isValid = userPassword == correctPassword;
// console.log(isValid);

//перетворення типів числа

// console.log(Number("5")); // 5
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(undefined)); // NaN
// console.log(Number("Jacob")); // NaN
// console.log("5" * 2); // 10
// console.log("10" - 5); // 5
//console.log("10" > 5); // true
//console.log(5 < true); // false


//перетворення рядків у числа

// console.log(Number.parseInt("5")); // 5
// console.log(Number.parseInt("5.5")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("cm5")); // NaN

// console.log(Number.parseFloat("5")); // 5
// console.log(Number.parseFloat("3.14")); // 3.14
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("cm5")); // NaN

// const value = "24.5px";
// const numerical = Number.parseFloat(value);
// console.log(numerical);

//арифметичні функції

// console.log(Math.floor(1.3)); // 1
// console.log(Math.floor(1.7)); // 1

// console.log(Math.ceil(1.3)); // 2
// console.log(Math.ceil(1.7)); // 2

// console.log(Math.round(1.3)); // 1
// console.log(Math.round(1.7)); // 2

// console.log(Math.max(20, 10, 50, 40)); // 50

// console.log(Math.min(20, 10, 50, 40)); // 10

// console.log(Math.random()); // випадкове число між 0 і 1, наприклад 0.2 ... 0.9166353649342294

//дробове число

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004

// console.log(0.1 * 10 + 0.2 * 10); // 3
// console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3

// console.log((0.1 + 0.2).toFixed(1)); // "0.3"
// console.log((5).toFixed(2));  //  "5.00"
// console.log((8.762195).toFixed(4));  // "8.7622"

//оголошення функції

// function sayHi() {
//     console.log("Hello, this is my first function!");
// }

// sayHi();

//Параметри та аргументи

// function add(a, b, c) {
//     console.log(`Addition result equals ${a + b + c}`)
// }

// add(15, 27, 10);

// function add(a, b, c) {
//     let result = a + b + c;
//     console.log(`Addition result equals ${result}`)
// }

// add(10, 20, 30);

//Повернення значення

// function add(a, b, c) {
//     return a + b + c;
// }

// console.log(add(5, 10, 15));
