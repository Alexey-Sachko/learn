var num = "33721";
var sum = 1;
var array = num.split("");

for (var i = 0; i < num.length; i++) {
	sum *= array[i];
}

console.log(sum);

alert(Math.pow(sum, 3));