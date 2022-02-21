
// const num1 = Number(prompt("Введите число 1"));
// const num2 = Number(prompt("Введите число 2"));

// if (num1 > num2){
//     alert(`Число ${num1} больше чем число ${num2}`);
// } else if (num1 < num2) {
//     alert(`Число ${num2} больше чем число ${num1}`);
// } else {
//     alert(`Числа равны`);
// }

// const num1 = Number(prompt("Enter number1"));
// const action = prompt("Enter +, -, * or /");
// const num2 = Number(prompt("Enter number2"));
//  let result;

//  switch (action) {
//      case "+":
//      result = num1+num2;
//      break;

//      case "-":
//      result = num1-num2;
//      break;

//      case "*":
//      result = num1*num2;
//      break;

//      case "/":
//      result = num1/num2;
//      break;

//      default:
//          result = "Error"

//  }
//  alert (result);

// const userAge = Number(prompt("Age: "));

// if ((userAge >= 12 && userAge < 18) || (userAge >= 60 && userAge < 80)) {
// const isParents = confirm("Взрослые дали разрешение?")
// if (isParents) {
//     alert("Можете проходить");
// } else {
//     alert("Запрещено");
// } 
// } else if (userAge < 12 || userAge >= 80) {
//     alert("Запрещено");
// } else {
//     alert("Можете проходить");
// }
// function showMessage () {
//     console.log ("Привет из функции!");
// }
//  showMessage ();
//  showMessage ();
// function getSum () {
//     const num1 = Number(prompt("Первое число"));
//     const num2 = Number(prompt("Второе число"));
//     const sum = num1 + num2;
//     alert("Сумма: " + sum);
// }
// getSum()
// getSum()
// let userName =  "";
// function getUserName () {
//     console.log (`userName`, userName);
//     if (!userName) {
//         userName = prompt ("What is your name?")
//     }
// }
// getUserName ();
// console.log(`userName`, userName);

// let login = "user1";
// function getLogin () {
//     let login = "admin2";
//     login = prompt ("Enter name");
//     console.log (`login local`, login);
// }
// getLogin ();
// console.log (`login global`, login);


let name = prompt('What is your name?');
function checkAge(age) {
    if (age > 30){
        return 'Good afternoon';
    } else (age < 30) {
        return 'Hi';
    }
}
let age  = prompt('How old are you?');
if ( checkAge(age)) {
    alert( 'Good afternoon ' );
} else {
    alert ( 'Hi ');
}
