

let money, time;

function start(argument) {
	// body...

money = +prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате YYYY-MM-DD", "");

while(isNaN(money) || money == "" || money == null) {
	money = +prompt("Ваш бюджет на месяц?", "");
	}

}

start();




let appData = {
	"budjet" : money,
	"timeData" : time,
	"expenses" : {},
	"optionalExpenses" : {},
	"income" : [],
	"saving" : true,
};

function choseExpenses(argument) {

	for (var i = 0; i < 2; i++) {
	let quesExp = prompt("Введите обязательную статью расходов в этом месяце", "");
	let quesExp2 = +prompt("Во сколько обойдется?", "");

	if (typeof(quesExp)==='string' && typeof(quesExp) != null && typeof(quesExp2) != null && quesExp != "" && quesExp2 != "" && quesExp.length < 50) {

	 console.log ("done");

	appData.expenses[quesExp] = quesExp2;
	}else {                            
        console.log ("bad result");
        i--;
		}
		
	}
}
choseExpenses();

function detectDayBudget(argument) {
	appData.moneyPerDay = (appData.budjet / 30).toFixed();
alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");

}
detectDayBudget();


function detectLevel(argument) {
	if (appData.moneyPerDay < 100) {
    console.log ("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Это высокий уровень достатка!");
} else {
    console.log ("Произошла ошибка");
	}

}
detectLevel();


function checkSaving(argument) {
	if (appData.saving == true) {
		let save = +prompt("Какова сумма накоплений? ", "");
		let percent = +prompt("Под какой процент? ", "");

		appData.monthIncome = save / 100 / 12 * percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}
checkSaving();



let optExp;
let numOptExp = 1;
function chooseOptExpenses(argument) {
	for (var i = 0; i < 3; i++) {
		optExp = +prompt("Статья необязательных расходов? ", "");
		appData.optionalExpenses[numOptExp++] = optExp;

	}
}

chooseOptExpenses();

console.log(appData);











