import salesDatabase from "./database.js"

const answerPane = document.querySelector("#answer")

// Answer to question 1: Total profit for 2017
const profit2017 = salesDatabase.filter(record => {
    return record.purchase_date.startsWith("2017")})
.reduce((cumulative, record) => cumulative + record.gross_profit, 0)
.toFixed(2)

answerPane.innerHTML = `<p>Total profit for 2017: $${profit2017}</p>`

// Answer to question 2: In which month did they sell the most cars?

let highestMonth = {month: "", dollars: 0}
const monthlySales = salesDatabase.map(record => {
    const month = record.purchase_date.substr(0, 7)
    return {month: month, dollars: record.gross_profit}
}).reduce((acc, cur) => {
    acc[cur.month] = acc[cur.month] + cur.dollars || cur.dollars;
    return acc;
}, {})

console.log(monthlySales)

for (const eachMonth in monthlySales) {
    if (monthlySales[eachMonth] > highestMonth.dollars) {
        highestMonth.month = eachMonth
        highestMonth.dollars = monthlySales[eachMonth]
    }
}

answerPane.innerHTML += `<p>Highest month of sales: ${highestMonth.month}</p>`

// Sum all sales for each month


