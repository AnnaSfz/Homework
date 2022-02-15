
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

const userAge = Number(prompt("Age: "));

if ((userAge >= 12 && userAge < 18) || (userAge >= 60 && userAge < 80))
const isParents = confirm("Взрослые дали разрешение?")
if (isParents){
    alert("Можете проходить");
} else {
    alert("Запрещено");
}
