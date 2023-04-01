class Employee{
    name
    position
    salary
    constructor(name,position,salary){
        this.name =name
        this.position = position
        this.salary = salary
    }
    getSalary(){
        return this.salary
    }
}

const e1 = new Employee("Rashmi","Devloper",80000);
console.log(e1.getSalary());