let myForm = document.querySelector("#myForm");

myForm.addEventListener("submit", function (event) {
	event.preventDefault();

	let q1 = Number(document.getElementById("q1").value);
	let q2 = Number(document.getElementById("q2").value);
	let q3 = Number(document.getElementById("q3").value);
	let q4 = Number(document.getElementById("q4").value);
	let q5 = Number(document.getElementById("q5").value);
	let q6 = Number(document.getElementById("q6").value);
	let q7 = Number(document.getElementById("q7").value);
	let q8 = Number(document.getElementById("q8").value);
	let q9 = Number(document.getElementById("q9").value);
	let q10 = Number(document.getElementById("q10").value);

	// For odd items: subtract one
	q1 -= 1;
	q3 -= 1;
	q5 -= 1;
	q7 -= 1;
	q9 -= 1;

	// For even-numbered items: subtract from 5
	q2 = 5 - q2;
	q4 = 5 - q4;
	q6 = 5 - q6;
	q8 = 5 - q8;
	q10 = 5 - q10;

	// Sum
	let total = (q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10);

	// Final SUS score
	let answer = total * 2.5;

	console.log(answer);

	document.getElementById("answer").value = answer;
});