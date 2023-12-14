//your JS code here. If required.
function daysOfAyear(year){
	if ((year%4==0 && year%100!=0)||(year%400==0)){
		return 366;
	}
	else{
		return 365;
	}
}
let year = prompt("Enter the calendar year which year you want");
console.log(daysOfAyear(2000));
