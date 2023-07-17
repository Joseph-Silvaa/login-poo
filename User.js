const Login = require("./Login")

class User extends Login{
  constructor(name, email, pass, id){
    super(name, email, pass)
    this.id = id
  }
}
module.exports = User