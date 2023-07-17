const User = require("./User")
const henrique = new User("Henrique", "@@@", 12344, 25000)
henrique.passWord = 5555
console.log(henrique.passWord)
console.log(henrique)