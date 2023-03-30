let arr = [1,2,3,3,4,4,5,6,6,7,8,8,8]

const removeDuplicate = (arr)=>{
    let ans = new Set([...arr])
    return ans;
}
console.log(removeDuplicate(arr))