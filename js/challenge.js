document.addEventListener("DOMContentLoaded", () => {

})


const h1 = document.getElementById('counter')
let counter = 0
let plusCounter = 0

counter + plusCounter

const counterInterval = setInterval(()=>{
 
  h1.innerHTML = counter
  counter += 1
}, 1000)


const plus = document.getElementById('plus')

plus.addEventListener('click',()=>{
  plusCounter += 1
})

const minus = document.getElementById('minus')

minus.addEventListener('click',()=>{
  h1.innerHTML = counter
  counter - 1
})