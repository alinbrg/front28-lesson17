// console.log("Hello " + " World");

// console.log(`${"hello"} World`);

let totalPrice = 200;
let deliveryPrice = 0;
let city = "Tbilisi";
let discount = 0;

// if (city !== "tbilisi" || totalPrice > 100) {
// 	discount = 30;
// 	console.log("discount", discount);
// }

// if (totalPrice < 200) {
// 	deliveryPrice = 20;
// 	console.log("totalPrice < 200", totalPrice);
// } else {
// 	deliveryPrice = 50;
// 	console.log("totalPrice >= 200", totalPrice);
// }

// deliveryPrice = totalPrice < 200 ? 20 : 50;

// if (city === "Tbilisi") {
// 	deliveryPrice = 5;
// } else if (city === "Batumi") {
// 	deliveryPrice = 15;
// } else if (city === "Zugdidi") {
// 	deliveryPrice = 20;
// } else if (city === "Kutaisi") {
// 	deliveryPrice = 10;
// } else {
// 	deliveryPrice = 50;
// }

// console.log("deliveryPrice", deliveryPrice);

// const phoneNumber = "";
// if (!phoneNumber) {
// 	console.log("Phone number is required");
// } else if (phoneNumber.length !== 9) {
// 	console.log("Phone number must be 9 digits long");
// }
switch (city) {
	case "Tbilisi":
		deliveryPrice = 5;
		// console.log("deliveryPrice", deliveryPrice);
		break;
	case "Batumi":
		deliveryPrice = 15;
		// console.log("deliveryPrice", deliveryPrice);
		break;
	case "Zugdidi":
	case "Poti":
		deliveryPrice = 20;
		// console.log("deliveryPrice", deliveryPrice);
		break;
	case "Kutaisi":
		deliveryPrice = 10;
		// console.log("deliveryPrice", deliveryPrice);
		break;
	default:
		deliveryPrice = 50;
		// console.log("deliveryPrice", deliveryPrice);
		break;
}
// console.log("deliveryPrice", deliveryPrice);

const userFirstName = "John";
const userLastName = "Doe";
const displayName = userFirstName || userLastName;
// console.log(displayName);

const numbers = [100, 200, 300, 400, 500, 100, 200, 300, 400, 500];
const sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];

let numbersSum = 0;
for (let index = 0; index < numbers.length; index++) {
	// if (numbers[index] > 300) {
	// 	console.log(numbers[index], "discount is 5");
	// }
	if (index === 1) {
		// console.log("continue at 1");
		// i++; // Increment i to avoid infinite loop
		// continue; // Skips the rest of the loop when i is 1
		continue;
	}
	numbersSum += numbers[index];
	console.log("hello, world", numbers[index]);
}

console.log("after for loop", numbersSum);

let i = 0;
while (i < 10) {
	// continue
	if (i === 1) {
		i++;
		continue;
	}
	if (i === 4) {
		// console.log("break at 2");
		break; // Exits the loop when i is 2
	}
	i++;

	console.log("while loop", i);
}

// console.log(i)

let j = 5;
do {
	// console.log("do while loop", j);
	j++;
} while (j < 5);
