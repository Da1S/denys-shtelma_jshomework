let total = 0;
let canInput = true;

while (canInput) {
  const userInput = prompt("Введіть число");
  if (userInput === null) {
    canInput = false;
    console.log(`Total: ${total}`);
  } else {
    const numberToAdd = parseInt(userInput);
    total += numberToAdd;
  }
}

