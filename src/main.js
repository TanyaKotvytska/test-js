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

