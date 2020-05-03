

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
	"choseExpenses" : function (argument) {
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
	},
	"detectDayBudget" : function (argument) {
		appData.moneyPerDay = (appData.budjet / 30).toFixed();
		alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");

	},
	"detectLevel" : function (argument) {
			if (appData.moneyPerDay < 100) {
    			console.log ("Это минимальный уровень достатка!");
			}else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
   				console.log ("Это средний уровень достатка!");
			}else if (appData.moneyPerDay > 2000) {
    			console.log ("Это высокий уровень достатка!");
			}else {
    			console.log ("Произошла ошибка");
		}
	},
	"checkSaving" : function (argument) {
			if (appData.saving == true) {
				let save = +prompt("Какова сумма накоплений? ", "");
				let percent = +prompt("Под какой процент? ", "");
			
			appData.monthIncome = save / 100 / 12 * percent;
				alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
		}
	},
	"chooseOptExpenses" : function (argument) {
				let optExp;
				let numOptExp = 1;

			for (var i = 0; i < 3; i++) {
				
				optExp = +prompt("Статья необязательных расходов? ", "");
				appData.optionalExpenses[numOptExp++] = optExp;

		}
	},
	"chooseIncome" : function (argument) {
			 
			 for (var i = 0; i < 1; i++) {
			 	let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
			 
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            i--;
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
            continue;
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        }
        appData.income.forEach(function (itemmass, num) {
        alert("Способы дополнительного заработка " + ++num + " - " + itemmass);
           // body...
       });

	},
};

for (var key in appData) {
	console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
	
}










