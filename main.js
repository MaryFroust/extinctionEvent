
 const ol= document.querySelectorAll('.feature')
 const lines = ol[1]
 const li = lines.querySelectorAll('li')
for(let i of li){
   i.addEventListener('click',function(){
        i.style.textDecoration = 'line-through'
        })
}

const ul = document.querySelectorAll('.feature')
const lines2 = ul[2]
const li2 = lines2.querySelectorAll('li')
for(let i of li2){
    i.addEventListener('click',function(){
        i.style.opacity = '0%'
    })
}

const row = document.querySelectorAll('.feature')
const dino = row[3]
const img = dino.querySelectorAll('img')
for(let i of img){
    i.addEventListener('click',function(){
        i.style.width = '0%'
    })
}

const button =  document.querySelector('#destroy-all')
const row2 = document.querySelectorAll('img')
for(let i of row2)
for(let b of li2)
for(let a of li)
    {
button.addEventListener('click',function(){
   a.style.textDecoration = 'line-through'
   b.style.opacity = '0%'
   i.style.width = '0%'
})
}

// const addClickListener(h1){
//     addClickListener.addEventListener('click',function(){
// addClickListener.style.color = 'green'
//     })
// }
