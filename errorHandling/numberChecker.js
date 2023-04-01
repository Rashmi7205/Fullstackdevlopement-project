function numberChecker(arr){
    function checkNum(numberToBeChecked){
        for(let i=0;i<arr.length;i++){
            if(numberToBeChecked == arr[i])
                return true
        }
        return false
    }
    return checkNum;
}
const arr = [1,2,3,4,5]
const checkNum = numberChecker(arr)
console.log(checkNum(3))
console.log(checkNum(6))