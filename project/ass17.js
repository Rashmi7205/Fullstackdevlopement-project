let users = [
    {"accno":"1001","balance":10000},
    {"accno":"1002","balance":20000},
    {"accno":"1003","balance":13000}
]
function depositAccount(user,amount){
    user.balance +=amount
}
function withdrawlAccount(user,amount){    
    if(amount <= user.balance)
        user.balance-=amount;
}
depositAccount(users[0],1000)
console.log(users[0].balance)
withdrawlAccount(users[0],2000)
console.log(users[0].balance)
