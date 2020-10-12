const credits = 23580;
const prisePredroid = 3000;

let number0fDroids = prompt("введіть кількість дроїдів");
let totalprise  = prisePredroid * number0fDroids;
if (number0fDroids === null){
    console.log("скасовано користувачем")
} else if(totalprise>credits){
    console.log("недостатньо коштів на рахунку")
}else{
    console.log(`ви купили ${number0fDroids} дроїдів на рахунку ${credits - totalprise}кредитів`)
}
