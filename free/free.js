let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let quesExp = +prompt("Введите обязательную статью расходов в этом месяце", "");
let quesExp2 = +prompt("Во сколько обойдется?", "");




let appData = {
	"budjet" : money,
	"timeData" : time,
	"expenses" : {},
	"optionalExpenses" : {},
	"income" : [],
	"saving" : false,
};

appData.expenses.quesExp = quesExp2;

alert(appData.budjet / 30);

console.log(appData.expenses.quesExp);


console.log(appData.budjet);