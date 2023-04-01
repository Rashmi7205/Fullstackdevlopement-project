let products = [
    {name:"Shirt",category:"Clothing"},
    {name:"Pant",category:"Clothing"},
    {name:"Hat",category:"Accsesories"},
        {name:"Sunglasses",category:"Accsesories"}
];

function filterByCatagory(products){
    function filterProduct(category){
            return products.filter((ele)=>ele.category==category)    
        }
    return filterProduct;
}
let clothingProducts = filterByCatagory(products)("Clothing");
console.log(clothingProducts)
