import salesDatabase from "./database.js"

const answerPane = document.querySelector("#answer")

// Answer to question 1: Total profit for 2017
const profit2017 = salesDatabase.filter(record => {
    return record.purchase_date.startsWith("2017")})
.reduce((cumulative, record) => cumulative + record.gross_profit, 0)
.toFixed(2)

answerPane.innerHTML = `Total profit for 2017: $${profit2017}`

// Answer to question 2: In which month did they sell the most cars?


