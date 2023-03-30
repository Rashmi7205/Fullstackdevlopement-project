const findMinMax = (arr)=>{
    return {
        max:Math.max(...arr),
        min:Math.min(...arr)
    }
}
console.log(findMinMax([1,2,2,3,4,4,4,5,6,7]))