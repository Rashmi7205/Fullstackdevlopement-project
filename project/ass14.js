let cart = [
{
    "item":"item1",
    "price":100,
    "quantity":9
},
{
    "item":"item2",
    "price":200,
    "quantity":3
},
{
    "item":"item3",
    "price":500,
    "quantity":2
},
{
    "item":"item4",
    "price":1000,
    "quantity":1
}
]

let countTotalPrice = (cart)=>{
    let totalPrice =0;
    for(let i=0;i<cart.length;i++){
        totalPrice = cart[i].price * cart[i].quantity + totalPrice
    }
    return totalPrice;
}
console.log(countTotalPrice(cart))