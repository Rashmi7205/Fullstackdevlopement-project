class Car{
    company
    model
    year
    constructor(company,model,year){
        this.company = company
        this.model = model
        this.year = year
    }
    getDetails(){
        return `This is a ${this.year} ${this.company} ${this.model}`
    }
}

const c1 = new Car("Skoda","Rapid",2022)
console.log(c1.getDetails());