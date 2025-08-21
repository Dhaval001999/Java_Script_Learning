// ama class thi apde get set kari che

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }// setters ne kyare bhi return nathi karta

    get password(){
        return `${this._password}dhaval`
    }// ane ama bhi sudhari devan nu j thi koi problem na aave j set ma karyu aj 

    set password(value){
        this._password = value
    } // ama getter sathe setter pan define karvo pade // set property ma ek navo varible banvi daiye to error j set ni error aave che a nahi aave
}

const dhaval = new User("d@dhaval.ai", "abc")
console.log(dhaval.email);