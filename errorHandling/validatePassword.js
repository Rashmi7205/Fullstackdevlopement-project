class User{
    #userName
    #password
    constructor(usrname,pass){
        this.#userName = usrname
        this.#password = pass
    }
    get getPassword(){
        console.log("*".repeat(this.#password.length))
    }
    set setPassword(password){
        let pattern = /^[A-Z0-9]/
        if(password.length > 8 && (pattern.test(password)))
           this.#password = password
        else
            console.log("Error : Password must be at least 8 characters long and contain at least one number and one uppercase letter")    
    }
}
const user = new User("abc","Password123")
user.getPassword
user.setPassword= "myPassword";
user.setPassword = "MyPassword123"
user.getPassword


