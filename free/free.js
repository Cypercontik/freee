let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");





let appData = {
	"budjet" : money,
	"timeData" : time,
	"expenses" : {},
	"optionalExpenses" : {},
	"income" : [],
	"saving" : false,
};



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
		
};


appData.moneyPerDay = appData.budjet / 30;


alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");


if (appData.moneyPerDay < 100) {
    console.log ("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Это высокий уровень достатка!");
} else {
    console.log ("Произошла ошибка");
}



