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

// function makeMessage(name, price) {
//     const message = `You picked ${name}, price per item is ${price} credits.`;
//     return message;
// }

// console.log(makeMessage('Radar', 6150));

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//     const totalPrice = orderedQuantity * pricePerItem;
//     return totalPrice;
// }

// console.log(calculateTotalPrice(5, 100));

//ДЗ1

// function makeTransaction(quantity, pricePerDroid) {
//     let totalPrice = quantity * pricePerDroid;
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// console.log(makeTransaction(5, 3000));
// console.log(makeTransaction(3, 1000));
// console.log(makeTransaction(10, 500));

// function getShippingMessage(country, price, deliveryFee) {
//     let totalPrice = price + deliveryFee;
//     return `Shipping to ${country} will cost ${totalPrice} credits`;
// }

// console.log(getShippingMessage("Australia", 120, 50));
// console.log(getShippingMessage("Germany", 80, 20));
// console.log(getShippingMessage("Sweden", 100, 20));

// function getElementWidth(content, padding, border) {
//     const contentWidth = parseFloat(content);
//     const paddingWidth = parseFloat(padding);
//     const borderWidth = parseFloat(border);
//     const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
//     return totalWidth;
// }

// console.log(getElementWidth("50px", "8px", "4px"));
// console.log(getElementWidth("60px", "12px", "8.5px"));
// console.log(getElementWidth("200px", "0px", "0px"));

//Інструкція if

// function checkAge(age) {
//     let isAdult = 18;
//     if (age >= isAdult) {
//         return "You are an adult";
//     }
// }

// console.log(checkAge(20));
// console.log(checkAge(17));

//Інструкція if...else

// function checkStorage(available, ordered) {
//     if (available >= ordered) {
//         return "Order is processed, our manager will contact you";
//     } else {
//         return "Not enough goods in stock!";
//     }
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));

//else...if

// function checkStorage(available, ordered) {
//     if (ordered === 0) {
//         return "There are no products in the order!";
//     } else if (available >= ordered) {
//         return "The order is accepted, our manager will contact you";;
//     } else {
//        return "Your order is too large, there are not enough items in stock!";
// }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));

//Тернарний оператор

// function checkPassword(password) {
//     const correctPassword = "jqueryismyjam";
//     const userPassword = password === correctPassword ? "Access granted" : "Access denied, wrong password!";
//     return userPassword;
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));

//Оператор switch, Оператор break

// function getSubscriptionPrice(type) {
//     switch (type) {
//         case "starter":
//             return 0;
//             break;
//         case "professional":
//             return 20;
//             break;
//         case "organization":
//             return 50;
//             break;
//         default:
//             return "Invalid subscription type!";
//     }
// }
// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));
// console.log(getSubscriptionPrice("random"));

//Логічне «І» Оператор "І" (&&)
//Оператор “І” зліва направо перевіряє почергово обидва операнди на істинність та повертає або значення останнього істинного (тільки правого) операнда, або першого хибного (лівого чи правого), на якому він запнувся.

// console.log("hello" && 5); // 5
// console.log(5 && "hello"); // "hello"
// console.log("hello" && 0); // 0
// console.log(0 && "hello"); // 0

// function isNumberInRange(start, end, number) {
//     const result = number >= start && number <= end;
//     return result;
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));

//Логічне «АБО» Оператор "АБО" (||)
//Якщо хоча б один із операндів можна перетворити на true, результатом логічного «АБО» буде цей операнд.

//console.log(true || false); // true
//console.log(false || 5); // 5
//console.log("hello" || 0); // "hello"

//Як тільки логічний оператор “АБО” знайшов операнд, який перетворюється на true, він зупиняється та повертає його значення. Якщо до істини було перетворено перший операнд, то другий навіть не буде оцінюватися.

// console.log(5 || 3); // 5
// console.log(3 || 5); // 3
// console.log("mango" || "poly"); // "mango"
// console.log("poly" || "mango"); // "poly"

//Якщо всі операнди перетворюються на false, результатом буде значення крайнього правого операнда.

// console.log(0 || false); // false
// console.log(false || 0); // 0

// console.log(null || ""); // ""
// console.log("" || null); // null

// function checkAccess(subType) {
//     const result = subType === "pro" || subType === "vip";
//     return result;
// }

// console.log(checkAccess("pro"));
// console.log(checkAccess("starter"));

//Логічне «НІ» (!)  унарний оператор — він виконує операцію над одним операндом праворуч.
//Логічне «НІ» приводить операнд до логічного значення (true або false) і потім заперечує (інвертує) його, тобто заміняє на протилежне: true —> false, а false —> true.

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true
// console.log(!null); // !null -> !false -> true

// function toggleModalVisibility(isVisible) {
//     const result = !isVisible;
//     return result;
// }

// console.log(toggleModalVisibility(true));
// console.log(toggleModalVisibility(false));

//Метод slice()

// function getSubstring(string, length) {
//     const result = string.slice(0, length);
//     return result;
// }

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 0));

//Методи toLowerCase() і toUpperCase()

// function normalizeInput(input, to) {
//     if (to === "upper") {
//         return input.toUpperCase();
//     } else {
//         return input.toLowerCase();
//     }
// }

// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("This ISN'T SpaM", "upper"));

//Метод includes()

// function checkForName(fullname, firstName) {
//     const result = fullname.toLowerCase().includes(firstName.toLowerCase());
//     return result;
// }

// console.log(checkForName("Jason Neis", "Jason"));
// console.log(checkForName("Jason Neis", "jAsOn"));
// console.log(checkForName("Jason Neis", "Jacob"));

//Методи startsWith() і endsWith()

// function checkFileExtension(fileName, ext) {
//     if (fileName.endsWith(ext)) {
//         return "File extension matches";
//     } else {
//         return "File extension does not match";
// }
// }

// console.log(checkFileExtension("styles.css", ".css"));
// console.log(checkFileExtension("styles.css", ".js"));

//Метод indexOf()

// function getFileName(file) {
//     const fileIndex = file.indexOf(".");
//     if (fileIndex === -1) {
//         return file;
//     } else {
//         return file.slice(0, fileIndex);
// }
// }

// console.log(getFileName("styles.css"));
// console.log(getFileName("app"));
// console.log(getFileName("index.js"));

//Метод trim()

// function createFileName(name, ext) {
//     const nameUser = name.trim();
//     const fileUser = `${nameUser}.${ext}`;
//     return fileUser;
// }

// console.log(createFileName(" order ", "txt"));
// console.log(createFileName("report ", "csv"));

//Цикл while

// function calculateTotal(number) {
//   let total = 0; // Ініціалізуємо змінну 'total' для зберігання суми
//     let i = 1; // Ініціалізуємо змінну 'i' на 1, починаємо з числа 1

//     // Використовуємо цикл 'while', щоб ітерувати від 1 до 'number'
//     while (i <= number) {
//         total += i; // Додаємо поточне значення 'i' до 'total'
//         i++; // Інкрементуємо 'i' на 1 для наступної ітерації
//     }
//     return total; // Повертаємо накопичену суму, збережену в 'total'
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(18));


//Цикл for

// function calculateTotal(number) {
//     let total = 0;
//     for (let i = 1; i <= number; i++) {
//         total += i;
//     }
//     return total;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(18));

//Інкремент і декремент

// let x = 5;
// const y = ++x;
// console.log(x); // 6
// console.log(y); // 6

// let x = 5;
// const y = x++;
// console.log(x); // 6
// console.log(y); // 5

// //let x = 5;
// const y = --x;
// console.log(x); // 4
// console.log(y); // 4

// let x = 5;
// const y = x--;
// console.log(x); // 4
// console.log(y); // 5

// function calculateEvenTotal(number) {
//     let total = 0;
//     for (let i = 2; i <= number; i += 2) {
//         total += i;
//     }
//     return total;
// }

// console.log(calculateEvenTotal(1));
// console.log(calculateEvenTotal(3));
// console.log(calculateEvenTotal(18));

// function calculateEvenTotal(start, end) {
//     let number;
//     for (let i = start; i <= end; i++) {
//         if (i % 5 === 0) {
//         number = i;
//         break;
//         }
//     }
//     return number;
// }

// console.log(calculateEvenTotal(6, 17));

// function findNumber(start, end, divisor) {
//     let number;
//     for (let i = start; i <= end; i++) {
//         if (i % divisor === 0) {
//         number = i;
//         break;
//         }
//     }
//     return number;
// }

// console.log(findNumber(2, 6, 5));


//ДЗ2

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     const totalPrice = quantity * pricePerDroid;
//     if (customerCredits >= totalPrice) {
//         return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//     } else {
//         return `Insufficient funds`;
//     }
// }

// console.log(makeTransaction(5, 3000, 23000));
// console.log(makeTransaction(10, 5000, 8000));

// function formatMessage(message, maxLength) {
//     if (message.length <= maxLength) {
//         return message;
//     } else {
//         return message.slice(0, maxLength)+"...";
// }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));

// function checkForSpam(message) {
//     const word = message.toLowerCase();
//     const spamWord = word.includes("spam");
//     const saleWord = word.includes("sale");
//     if (spamWord || saleWord) {
//         return true;
//     } else {
//         return false;
// }
// }

// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("Get best sale offers now!"));

//Масиви

// const fruits = ["apple", "plum", "pear", "orange"];

//Доступ до елементів

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// console.log(lastElement);

//Перевизначення значення елемента

// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);

//Довжина масиву

// function getOrderQuantity(order) {
//     return order.length;
// }

// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]));
// console.log(getOrderQuantity(["apple", "banana"]));

//Індекс останнього елемента

// function getLastElementMeta(array) {
//     // Перевіряємо, чи масив не є порожнім
//     if (array.length === 0) {
//         // Якщо масив порожній, повертаємо спеціальне значення для індексу та значення
//         return [-1, undefined]; // Повертаємо -1 як індекс для порожнього масиву
//     } else {
//         // Знаходимо індекс останнього елемента
//         const lastIndex = array.length - 1;
//         // Повертаємо масив з індексом останнього елемента та самим останнім елементом масиву
//         return [lastIndex, array[lastIndex]];
//     }
// }

// console.log(getLastElementMeta(["apple", "peach", "pear"]));
// console.log(getLastElementMeta(["apple", "peach"]));

// function getExtremeElements(array) {
//     if (array.length === 0) {
//         return [-1, undefined];
//     } else {
//         const lastIndex = array.length - 1;
//         return [array[0], array[lastIndex]];
//     }
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

//Метод join()

// function getLength(array) {
//     const words = array.join("");
//     return words.length;
// }

// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));

//Метод split()

// function calculateEngravingPrice(message, pricePerWord) {
//     const words = message.split(" ");
//     const totalPrice = words.length * pricePerWord;
//     return totalPrice;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));

//Метод slice()

// const fruits = ["apple", "plum", "pear", "orange", "banana"];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

//Метод concat()

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);

// console.log(allClients);

//Метод indexOf()

// function getSlice(array, value) {
//     const index = array.indexOf(value); // Знаходимо індекс першого входження значення в масив
//   if (index === -1) { // Якщо значення не знайдено, повертаємо порожній масив
//     return [];
//   } else { // Якщо значення знайдено, повертаємо підмасив від початку масиву до елемента зі значенням value включно
//     return array.slice(0, index + 1);
//   }
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));

//Метод push()

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//     }
//     return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));

//Ітерація по масиву

// function calculateTotalPrice(order) {
//   let total = 0; // починаємо з нуля

//   // перебираємо кожен елемент масиву
//   for (let i = 0; i < order.length; i++) {
//     // додаємо кожний елемент до загальної суми
//     total += order[i];
//   }

//   return total; // повертаємо загальну суму
// }


// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));

// function getEvenNumbers(start, end) {
//   const evenNumbers = []; // Створюємо порожній масив для парних чисел
  
//   // Перевіряємо, чи є start парним числом. Якщо ні, збільшуємо його на 1, щоб почати з парного числа.
//   if (start % 2 !== 0) {
//     start++;
//   }
  
//   // Проходимо по всіх числах від start до end з кроком 2, щоб отримати лише парні числа.
//   for (let i = start; i <= end; i += 2) {
//     evenNumbers.push(i); // Додаємо поточне парне число до масиву
//   }

//   return evenNumbers; // Повертаємо масив парних чисел
// }

// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

//Метод includes()

// function checkStorage(storage, item) {
//     if (storage.includes(item)) {
//         return `${item} is available to order!`;
//     } else {
//         return `Sorry! We are out of stock!`;
// }
// }

// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// console.log(checkStorage(["apple", "plum", "pear"], "orange"));

//

//Цикл for...of

// function calculateTotalPrice(order) {
//     let total = 0;
//     for (const orders of order) {
//         total += orders;
//     }
//     return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([]));

//Псевдомасив arguments

// function createReversedArray() {
//     const args = Array.from(arguments);
//     const result = args.toReversed();
//     return result;
// }

// console.log(createReversedArray(164, 48, 291));
// console.log(createReversedArray(412, 371, 94, 63, 176));

//Параметри за замовчуванням

// function calculateTax(amount, taxRate = 0.2) {
//     const totalAmount = amount *= taxRate;
//     return totalAmount;
// }

// console.log(calculateTax(100, 0.1));
// console.log(calculateTax(100, 0.2));
// console.log(calculateTax(100, 0.3));

//ДЗ3

// function slugify(title) {
//     let words = title.toLowerCase().split(' ').join("-");
//     return words;
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));

// function makeArray(firstArray, secondArray, maxLength) {
//     let thirdArray = firstArray.concat(secondArray);
//     if (thirdArray.length > maxLength) {
//         return thirdArray.slice(0, maxLength);
//     } else {
//         thirdArray;
//     }

// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));

// function filterArray(numbers, value) {
//     let arrayNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > value) {
//             arrayNumbers.push(numbers[i]);
//         }
//     }
//     return arrayNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log(filterArray([1, 2, 3, 4, 5], 5));

//Створення об'єкта

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

//Вкладені властивості

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

//Доступ до властивостей через крапку

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDesc = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

//Доступ до вкладених властивостей

