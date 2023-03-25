let calculatePrice = (price,discount) =>{
    return price - (discount/price)*100;
}
console.log(Math.round(calculatePrice(100,20)))
console.log(Math.round(calculatePrice(200,24.5666)))