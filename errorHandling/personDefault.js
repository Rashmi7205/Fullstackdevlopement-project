class Person{
    #name
    #age
    constructor(name="unknown",age=0){
        this.#name = name
        this.#age = age
    }
    getDetails(){
        console.log("Name:",this.#name,"age:",this.#age)
    }
}
const person1 = new Person("Mithun",20);
person1.getDetails();
const person2 = new Person();
person2.getDetails();
