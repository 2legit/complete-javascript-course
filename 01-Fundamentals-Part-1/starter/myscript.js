// // Part - 1, coding challenge #1

// const Mark = { weight: 78, height: 1.69 }
// const John = { weight: 92, height: 1.95 }

// function calcBMI(person) {
//     return person.weight / (person.height ** 2)
// }

// const markHigherBMI = calcBMI(Mark) > calcBMI(John)

// console.log(`Given ${Mark} and ${John}, markHigherBMI is ${markHigherBMI}.`)

// // coding challenge #2
// output = markHigherBMI ? `Mark (${calcBMI(Mark).toFixed(3)}) has higher BMI than John (${calcBMI(John).toFixed(1)}).` :
//     `John (${calcBMI(John).toFixed(1)}) has higher BMI than Mark (${calcBMI(Mark).toFixed(1)})`

// console.log(output)

// coding challenge #3
// const D = [97, 112, 101]
// const K = [109, 95, 106]

// const avgD = D.reduce(function (a, b) { return a + b; }, 0) / D.length
// const avgK = K.reduce(function (a, b) { return a + b; }, 0) / K.length

// let output = ''
// if (avgD > avgK && avgD >= 100) {
//     output = 'D team wins'
// } else if (avgK < avgD && avgK >= 100) {
//     output = 'K team wins'
// } else if (avgK == avgD && avgD >= 100 && avgK >= 100) { output = 'Everyone wins!.' }
// else { output = 'Everyone is a loser!' }

// console.log(`With D coming in at ${avgD.toFixed(1)} and K at ${avgK.toFixed(1)} ... ${output}`)

//1.4
// const bill = 430
// tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2

// console.log(`The bill was ${bill}, the tip then was ${tip}, for total check of ${bill + tip}}`)

// coding challenge 2.1
// const D = [85, 54, 41]
// const K = [23, 34, 27]

// // const avgD = D.reduce(function (a, b) { return a + b; }, 0) / D.length
// // const avgK = K.reduce(function (a, b) { return a + b; }, 0) / K.length

// calcAvg = (scoreArray) => {
//     return scoreArray.reduce(function (a, b) { return a + b; }) / scoreArray.length
// }

// checkWinner = (scoresD, scoresK) => {
//     avgD = calcAvg(scoresD)
//     avgK = calcAvg(scoresK)
//     if (avgD > 2 * avgK) {
//         console.log(`D wins (${avgD} vs ${avgK})`)
//     } else if (avgK > 2 * avgD) {
//         console.log(`K wins (${avgK} vs ${avgD})`)
//     } else {
//         console.log('no one wins')
//     }
// }

// checkWinner(D, K)

// 2.2
inRange = (x) => (x >= 50 && x <= 300 ? true : false);
calcTip = (bill) => (inRange(bill) ? bill * 0.15 : bill * 0.2);
console.log(`${calcTip(100)}`);

calcTips = (bills) => {
  tips = [];
  for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
  }
  return tips;
};

bills = [125, 555, 44];

console.log(`for bills of ${bills}, the tips would be ${calcTips(bills)}`);

// 2.3
// skipped since mostly done already

// 2.4
calcTotals = (bills) => {
  totals = [];
  tips = calcTips(bills);
  for (let i = 0; i < bills.length; i++) {
    totals.push(bills[i] + tips[i]);
  }
  return totals;
};

bills = [22, 295, 176, 440, 37, 105, 10, 110, 86, 52];
console.log(
  `for bills ${bills}, tips=${calcTips(bills)}, so totals=${calcTotals(bills)}`
);

// 3.1
console.log("live from new york its monday night!");
