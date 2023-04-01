class Student{
    name
    constructor(name)
    {
        this.name = name
    }
}
//injecting print details to the Class Student
Student.prototype.printDetails = function(){
    console.log(this.name)
}

//Instantiating the the Student class
const student = new Student("Mithun")
student.printDetails(); //Accseccing the printDetails prototype

