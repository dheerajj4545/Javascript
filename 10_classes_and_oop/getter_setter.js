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
    }

    get password(){
        return `${this._password}dheeraj`
    }

    set password(value){
        this._password = value
    }
}

const dheeraj = new User("h@dheeraj.ai", "abc")
console.log(dheeraj.email);