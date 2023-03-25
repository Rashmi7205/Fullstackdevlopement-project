function calculateRent(carType,days){
    if(carType === "Economy")
        return 4000*days
    if(carType ==="Midsize")
        return 10000*days
    if(carType==="Luxury")
        return 20000*days
}
console.log(calculateRent("Luxury",10))
console.log(calculateRent("Midsize",10))
console.log(calculateRent("Economy",10))

