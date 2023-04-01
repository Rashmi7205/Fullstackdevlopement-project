const convertToNum = (str)=>{
    try {
        if(isNaN(parseInt(str))) 
            throw "Invalid Number"
        console.log(parseInt(str))
    }catch(err){
        console.log(err)
    }
}
convertToNum("123")
convertToNum("abs")

