const str = "hello how hello how are you"

const countWord=(str)=>{
  
  let m = new Map();
  let words = str.split(" ")
  words.forEach((word)=>{
      if(!m.has(word))
        m.set(word,1)
      else{ 
        m.set(word,m.get(word)+1)
      }
  })
  console.log(m)
}
countWord(str)