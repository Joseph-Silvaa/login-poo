class Login {
  #passWord
  constructor(name, email, passWord){
    this.name = name
    this.email = email
    this.#passWord = passWord
  }
  get passWord(){
    return this.#passWord
  }
  set passWord(passWord){
    if(this.#verificaton(passWord)){
      console.log(`Senha trocada com sucesso! \n Nova senha: ${this.passWord}`)
    }
  }
  #verificaton(passWord){
    if(this.#passWord != passWord){
      this.#passWord = passWord
    }
  }
}
module.exports = Login