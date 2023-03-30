const person = {
    name:"Mithun",
    age:21,
    address:{
            street:"B8,Block B, Industrial Area.",
            city:"Sector 62 Noida",
            state:"Uttar Pradesh"
    }
};

const retriveDetails = (person)=>{
    return {
        name:person.name,
        street:person.address.street
    }
}
console.log(retriveDetails(person))
