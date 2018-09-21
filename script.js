var money = prompt("Ваш бюджет?");
var title = prompt("Название магазина?");

var mainList = {
	budget: money,
	name: title,
	shopGoods: [],
	employers: {},
	open: false
};

for (var i = 0; i < 3; i++) {
	var a = prompt("Какой тип товаров будем продавать?");
	
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '') {
		console.log("Все верно");
		mainList.shopGoods[i] = a;
	} else {
		i = i - 1;
	}
}

alert( "бюджет на 1 день: " + ((+money) / 30) );