let costOfDishes = [300,400,500,6000]
let noOfPeople = [10,20,25,60]
function calculateBill(costOfDishes,noOfPeople){
    let eachPeopleWillPay = []
    for(let i=0;i<costOfDishes.length;i++){
        eachPeopleWillPay.push(costOfDishes[i]/noOfPeople[i])
    }
    return eachPeopleWillPay
}
console.log(calculateBill(costOfDishes,noOfPeople))