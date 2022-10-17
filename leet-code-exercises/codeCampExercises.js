"use strict";
// TASK #1
// function sum(array) {
//   let something = 0;
//   for (let i = 0; i < array.length; i++) {
//     something = something + array[i];
//   }
//   return something;
// }

// const arr = [1, 2, 3, 10, 16, 12, 16, 63, 2, 10];
// console.log(sum(arr));

// TASK #2
// function multiply(a, b) {
//   let something = 0;
//   for (let _ = 0; _ < a; _++) {
//     something = something + b;
//   }
//   return something;
//   // add a b amount of times
// }

// console.log(multiply(5, 6)); // 30
// console.log(multiply(9, 9)); // 81
// console.log(multiply(7, 0)); // 0

// TASK #3
// create a function that greets every person provided in the array.
// in other words, display the following for each person: "Hello, <person>.", where <person> is replaced by their name
// function greetPeople(people) {
//   for (let i = 0; i < people.length; i++) {
//     console.log("Hello, " + people[i] + ".");
//   }
// }

// const arrayOfPeople = ["David", "Kirill", "Chanti", "Sky", "Janik"];
// greetPeople(arrayOfPeople);

// const str1 = "asd";
// const str2 = "fgh";

// const str3 = str1 + str2;

// TASK #4
// Write a function that displays the names of people who scored less than 50. The list of students expects
// an array of student objects in the following format: {name: "name", score: 69}
// the function should display the names on separate lines
// function displayStudentsThatFailed(students) {
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].score < 50) {
//       console.log(students[i].name);
//     }
//   }
// }

// const studentList = [
//   {
//     name: "Chanti",
//     score: 100,
//   },
//   {
//     name: "Janik",
//     score: 80,
//   },
//   {
//     name: "Kirill",
//     score: 70,
//   },
//   {
//     name: "Sky",
//     score: 48,
//   },
//   {
//     name: "David",
//     score: 3,
//   },
// ];
// displayStudentsThatFailed(studentList);

//-----------------------------------------------------
// TASK #5
// BabaNuki
// 2 Players are playing a game of babanuki and each player has their own hand (given in an array).
// Write a function that randomly selects a card from player 2's hand and adds it to player 1's hand
// Print out "You received the old maid!" if the card selected from player 2's hand was the queen of spades.
// In the event of the card being drawn is the same value, and also the same color as a card in player 1's hand, discard both
// For simplicity in the below demo only H6 and D6 will trigger this condition (as both are red 6's)

// Card values are formatted by suite and then value: eg H3 = 3 of hearts
// C clubs,S spades,H hearts,D diamonds

//hints: here is a generic way to get a random index from an array in JS
// const randomElement = array[Math.floor(Math.random() * array.length)];
//-----------------------------------------------------

// yourArray = ["4", "3", "2", "1", "0"]

// let currentIndex = 1;

// let item = yourArray[currentIndex];

// player1Hand = ["H6"];
// player2Hand = ["D6", "SQ"];

// function p1PickCard(player1Hand, player2Hand) {
//   const randomIndex = Math.floor(Math.random() * player2Hand.length);
//   let randomElement = player2Hand[randomIndex];
//   console.log(randomIndex);
//   player2Hand.splice(randomIndex, 1);
//   player1Hand.push(randomElement);
//   for (i = 0; i < player1Hand.length; i++) {
//     if (checkPair() === true) {
//     }
//   }
// for()

// check new card with all cards in p1 hand if pairs
// if yes, discard both cards
// if hand is empty, say true
// }

// function checkPair(card1, card2) {
//   return card1[1] === card2[1];
// }

// checkPair("h6", "d6");
// p1PickCard(player1Hand, player2Hand);
//EXAMPLE

// TASK #6
// Setup

// function something() {
//   let i = 0;
//   console.log(i);

//   if (i < 50) {
//     console.log("something");
//   }
// }

// const contacts = [
//   {
//     firstName: "David",
//     lastName: "Lysenko",
//   },
//   {
//     firstName: "Kirill",
//     lastName: "Lysenko",
//   },
//   {
//     firstName: "Skye",
//     lastName: "Wren",
//   },
//   {
//     firstName: "Chantal",
//     lastName: "Ariu",
//   },
//   {
//     firstName: "Janik",
//     lastName: "Jehmlich", // whatever the spelling is lmao
//   },
// ];

// Write a function which searches the contact list defined in the global variable `contacts` for a contact with the
// first name that is provided in the first argument `firstName`. The function should return the contact's lastName
// if it was found. If the contact wasn't found in the list, return "Contact with the provided first name doesn't exist".
// function getLastNameOfContact(firstName) {
//   for (let i = 0; i < contacts.length; i++) {
//     if (firstName === contacts[i]["firstName"]) {
//       return contacts[i]["lastName"];
//     }
//   }
//   return "Contact with the provided first name doesn't exist";
// }

// console.log(getLastNameOfContact("David")); // Lysenko
// console.log(getLastNameOfContact("Kirill")); // Lysenko
// console.log(getLastNameOfContact("Chantal")); // Ariu
// console.log(getLastNameOfContact("Skye")); // Wren
// console.log(getLastNameOfContact("Sky")); // Contact with the provided first name doesn't exist

// Write a function that validates a given object `object` against a given schema `schema`. Schema is an object that contains
// key and value pairs where the key corresponds to the object's key and the value corresponds to the type of the value that
// the object expects. For example, validate({ hello: 5 }, { hello: "number" }) will return true because the schema passed
// in the second argument signifies that the object should have a property "hello" with a type of "number".
// function validate(object, schema) {
//   //
// }

// const obj1 = {
//   hello: 5,
//   bye: "foo",
//   cond: true,
// };
// const schema1 = {
//   hello: "number",
//   bye: "string",
//   cond: "boolean",
// };

// console.log(validate(obj1, schema1)); // true

// const schema2 = {
//   a: "string",
//   b: "function",
//   c: "number",
// };

// const obj2 = {
//   a: "a",
//   b: function () {
//     //
//   },
// };

// console.log(validate(obj2, schema2)); // false; c wasn't provided

// const obj3 = {
//   a: 5,
//   b: function () {},
//   c: 123,
// };

// console.log(validate(obj3, schema2)); // false; a should be a string

// const obj4 = {
//   a: "string",
//   b: function () {},
//   c: 10,
// };

// console.log(validate(obj4, schema2)); // true

// const users = {
//   Alan: {
//     online: true,
//   },
//   Jeff: {
//     online: true,
//   },
//   Sarah: {
//     online: true,
//   },
// };

// function countOnline(usersObj) {
//   // Only change code below this line
//   var count = 0;
//   for (let usersObj in users) {
//     if (users[usersObj]["online"] === true) {
//       count++;
//     }
//   }
//   return count;
//   // Only change code above this line
// }

// console.log(countOnline(users));

// function titleCase(str) {
//   let newStr = "";
//   let finalStr = "";
//   newStr = str.toLowerCase();
//   let splitNewStr = newStr.split(" ");
//   for (let i = 0; i < splitNewStr.length; i++) {
//     finalStr += splitNewStr[i][0].toUpperCase() + splitNewStr[i].substring(1);
//     if (i !== splitNewStr.length - 1) {
//       finalStr += " ";
//     }
//   }
//   return finalStr;
// }

// console.log(titleCase("I'm a little tea pot"));
// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
// console.log(titleCase("sHoRt AnD sToUt"));

// function getMaxValue(arr) {
//   let largestNum = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largestNum) {
//       largestNum = arr[i];
//     }
//   }
//   return largestNum;
// }

// // console.log(getMaxValue([-10, 32, 10, 12, 15, 10]));
// // console.log(getMaxValue([-10, -3, -1, -12]));

// // you need an empty accumulator array
// // iterate through the array and apply getMaxValue on each element and add it to the accumulator array
// // return the array

// function largestOfFour(arr) {
//   let accumulatorArr = [];
//   for (let j = 0; j < arr.length; j++) {
//     accumulatorArr.push(getMaxValue(arr[j]));
//     // accumulatorArr.push("largestNum");
//   }
//   return accumulatorArr;
// }

// console.log(
//   largestOfFour([
//     [1, 2, 3, 4],
//     [-1, -2, -3, -4],
//     [12, 32, 14, 30],
//     [0, 1, 0, 0],
//   ])
// ); // prints out [4, -1, 32, 1]

// function largestOfFour(arr) {
//   let accumulator = [];
//   for (let i = 0; i < arr.length; i++) {
//     let largestNum = -Infinity;
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] > largestNum) {
//         largestNum = arr[i][j];
//       }
//     }
//     accumulator.push(largestNum);
//   }
//   return accumulator;
// }

// console.log(
//   largestOfFour([
//     [1, 2, 3, 4],
//     [-1, -2, -3, -4],
//     [12, 32, 14, 30],
//     [0, 1, 0, 0],
//   ])
// ); // prints out [4, -1, 32, 1]

// function sortArr(arr) {
//   let newArr = [...arr];
//   for (let i = 1; i < newArr.length; i++) {
//     for (let j = 0; j < newArr.length - 1; j++) {
//       if (newArr[j] > newArr[j + 1]) {
//         [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
//       }
//     }
//   }
//   return newArr;
// }
// console.log(sortArr([3, -1, 6, 10, 3]));

// function getIndexToIns(arr, num) {
//   let array = sortArr(arr);
//   for (let i = 0; i < array.length; i++) {
//     if (num <= array[i]) {
//       return i;
//     }
//   }
//   return arr.length;
// }

// console.log(getIndexToIns([40, 60], 30));
// console.log(getIndexToIns([10, 20, 30, 40, 50], 70));

// function getIndexToIns(arr, num) {
//   let newArr = [...arr];
//   for (let i = 1; i < newArr.length; i++) {
//     for (let j = 0; j < newArr.length - 1; j++) {
//       if (newArr[j] > newArr[j + 1]) {
//         [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
//       }
//     }
//   }
//   for (let i = 0; i < newArr.length; i++) {
//     if (num <= newArr[i]) {
//       return i;
//     }
//   }
//   return newArr.length;
// }

// function diffArray(arr1, arr2) {
//   const newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (!arr1.includes(arr2[j])) {
//         newArr.push(arr2[j]);
//       } else if (!arr2.includes(arr1[i])) {
//         newArr.push(arr1[i]);
//       }
//     }

//     // if (!arr2.includes(arr1[i])) {
//     //   newArr.push(arr1[i])
//     // }
//     // for (let j = 0; j < arr2.length; j++) {
//     //   if (!arr1.includes(arr2[j])) {
//     //     newArr.push(arr2[j])
//     //   }
//     // }
//   }
//   return newArr;
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// function diffArray(arr1, arr2) {
//   const newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (!arr2.includes(arr1[i])) {
//       newArr.push(arr1[i]);
//     }
//   }
//   for (let j = 0; j < arr2.length; j++) {
//     if (!arr1.includes(arr2[j])) {
//       newArr.push(arr2[j]);
//     }
//   }
//   return newArr;
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4]
// console.log(
//   diffArray(
//     ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
//     ["diorite", "andesite", "grass", "dirt", "dead shrub"]
//   )
// ); // ["pink wool"]
// console.log(
//   diffArray(
//     ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
//     ["diorite", "andesite", "grass", "dirt", "dead shrub"]
//   )
// ); // ["diorite", "pink wool"]

// const fibonacci = (n) => {
//   const fibonacciArr = [];
//   for (let i = 0; i <= n; i++) {
//     fibonacciArr.push(i < 2 ? i : fibonacciArr[i - 2] + fibonacciArr[i - 1]);
//   }
//   return fibonacciArr;
// };

// console.log(fibonacci(10));

// function smallestCommons(arr) {
//   arr.sort((a, b) => a - b);
//   let numerator = 1;
//   while (true) {
//     let x = true;
//     for (let i = arr[0]; i <= arr[1]; i++) {
//       if (numerator % i !== 0) {
//         x = false;
//         break;
//       }
//     }
//     if (x) {
//       return numerator;
//     }
//     numerator++;
//   }
// }

// const divide = (x, y) => {
//   if (typeof x !== "number") {
//     throw new Error("X needs to be a number!");
//   }

//   if (typeof y !== "number") {
//     throw new Error("Y needs to be a number!");
//   }

//   if (y === 0) {
//     throw new Error("Cannot divide by 0!");
//   }

//   return x / y;
// };

// console.log(divide(10, 5));

// // Number to Roman Numeral Converter
// function convertToRoman(num) {
//   let accumulator = "";
//   const romanNumbers = {
//     1000: "M",
//     900: "CM",
//     500: "D",
//     400: "CD",
//     100: "C",
//     90: "XC",
//     50: "L",
//     40: "XL",
//     10: "X",
//     9: "IX",
//     5: "V",
//     4: "IV",
//     1: "I",
//   };
//   let keys = Object.keys(romanNumbers);
//   while (num > 0) {
//     for (let i = keys.length - 1; i >= 0; i--) {
//       if (keys[i] <= num) {
//         accumulator += romanNumbers[keys[i]];
//         num -= keys[i];
//         break;
//       }
//     }
//   }
//   return accumulator;
// }
// console.log(convertToRoman(36));

// create an accumulator (string)
// find greatest possible roman numeral (not greater than num)
// subtract it from num
// add coresponding roman numeral to the accumulator

// Final project: "Cash Register"
function checkCashRegister(price, cash, cid) {
  const statusAndChange = { status: "blank", change: "blank" };
  const changeBack = cash - price;

  while (changeBack > 0) {
    for (let i = 0; i < cid.length; i++) {
      if (cid[i][1] % changeBack === 0) {
        cid[i][1] - changeBack;
        const { change: changeBack } = statusAndChange;
      }
    }
  }
  return statusAndChange;
}

function checkCashRegister(price, cash, cid) {
  let changeBack = cash - price; // numeric form
  const cidMap = new Map(cid);
  const changeBackCash = new Map([
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ]); // full form (unit + num)
  const amountToUnit = new Map([
    ["0.01", "PENNY"],
    ["0.05", "NICKEL"],
    ["0.1", "DIME"],
    ["0.25", "QUARTER"],
    ["1", "ONE"],
    ["5", "FIVE"],
    ["10", "TEN"],
    ["20", "TWENTY"],
    ["100", "ONE HUNDRED"],
  ]);

  const keys = [...amountToUnit.keys()].sort((a, b) => b - a);

  mainLoop: while (changeBack > 0) {
    for (let i = 0; i < keys.length; i++) {
      const cidKey = amountToUnit.get(keys[i]);

      if (keys[i] <= changeBack && cidMap.get(cidKey) > 0) {
        const currentAmount = changeBackCash.get(cidKey);
        const newValue = currentAmount + Number(keys[i]);
        changeBackCash.set(cidKey, Number(newValue.toFixed(2)));

        const currentAmountInCid = cidMap.get(cidKey);
        const newValueInCid = currentAmountInCid - Number(keys[i]);
        cidMap.set(cidKey, Number(newValueInCid.toFixed(2)));

        // changeBack -= Number(keys[i]);
        const newChangeBack = changeBack - Number(keys[i]);
        changeBack = Number(newChangeBack.toFixed(2));
        continue mainLoop;
      }
    }

    return {
      status: "INSUFFICIENT_FUNDS",
      change: [],
    };
  }

  const finalSum = [...cidMap.values()].reduce((a, b) => a + b);

  if (finalSum > 0) {
    return {
      status: "OPEN",
      change: [...changeBackCash.entries()]
        .filter((elem) => elem[1] > 0)
        .reverse(),
    };
  }

  return {
    status: "CLOSED",
    change: [...changeBackCash.entries()],
  };
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

// price: price of product
// cash: money given by customer
// cash in drawer: change available
// cash - price: needed change
// iterate over the cid array
// check whether change exists in cid[i][1]
