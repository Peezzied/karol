import {top} from './index.js'
const topCards = document.querySelectorAll('.cards-container:nth-of-type(2) div')
console.log(topCards)

top.forEach((item, index)=>{
    const content = `
        <div class="emoji">${item.emoji}</div>
        <div class="title font-muted font-title-normal">${item.title}</div>
        <div class="body">${item.body}</div>
    `
    topCards[index].innerHTML = content
})