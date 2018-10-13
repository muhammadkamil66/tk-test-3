// write your JS code here
let count=0;
let amount = 0;
function plus(){
	count+=1;
	amount+=5.99;
	let a = amount.toFixed(2);
	document.querySelector(".text").innerHTML = count; 
	document.querySelector(".amount").innerHTML = a; 
} 

function minus(){
	count-=1;
	amount-=5.99;
	if (count < 0) {
		count=0;
		document.querySelector(".text").innerHTML = count;
	}
	if (amount < 0) {
		amount=0;
		document.querySelector(".amount").innerHTML = amount;
	}
	let a = amount.toFixed(2);
	document.querySelector(".text").innerHTML = count; 
	document.querySelector(".amount").innerHTML = a; 
}


	