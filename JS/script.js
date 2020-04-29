var money = prompt("Ваш бюджет на месяц", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");
var budget = "бюджет";

var answer1 = prompt("Введите обязательную статью расходов в этом месяце", "");
var answer2 = prompt("Во сколько обойдется?", ""); 

var appData = {
    budget: money,
    timedata: time,
    expenses: {answer1: answer2},
    optionalExpenses: {},
    income: [],
    savings: false,
};

alert("Бюджет на 1 день = " + (money - answer2) / 30 + " " + "рублей");
console.log (appData.budget);
console.log (appData.timedata);
console.log (appData.expenses);
console.log (appData.optionalExpenses);
console.log (appData.income);
console.log (appData.savings);
