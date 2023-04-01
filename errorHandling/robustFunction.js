function getPerson(obj){
    try{
        if(obj.name==undefined) throw "Invalid parameter type"
        if(obj.age ==undefined) throw "Invlaid parameter type"
        console.log("Name :",obj.name,"Age :",obj.age)
    }
    catch(err){
        console.log(err)
    }
}
getPerson({name:"Mithun",age:20})
getPerson({name:"mithun"})
getPerson(["Mithun","20"])