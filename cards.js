import {top, technologies, bentoData} from './index.js'
import { addCard, addCardList } from './utils.js';

let previousProperty = [];
const topCards = document.querySelectorAll('.cards-container:nth-of-type(2) div')
const softSkills = document.querySelector('.cards-container:nth-of-type(4) .cards')
const multimediaElement = document.querySelector('.cards-container:nth-of-type(5) .cards')
const web = document.querySelector('.cards-container:nth-of-type(6) .cards')
const mediaQuery = window.matchMedia('(max-width: 640px)');

const bentoCard = document.querySelectorAll('.projects .bento > div')
const bentoTitle = document.querySelectorAll('.projects .bento > div .description div > div:nth-of-type(1)')
const bentoBody = document.querySelectorAll('.projects .bento > div .description div > div:nth-of-type(2)')
console.log(multimediaElement)
const bentoDesc = document.querySelectorAll('.projects .bento > div .description')

const keyframes = [
    {borderColor: '#57bd84'},
    {borderColor: '#2196f3'}
]
const over = {
    duration: 200,
    easing: 'ease-in-out',
    fill: 'forwards'
}
const out = {
    duration: 200,
    easing: 'ease-in-out',
    fill: 'forwards',
    direction: 'reverse'
}

top.forEach((item, index)=>{
    addCardList(topCards, index,
    `
        <div class="emoji">${item.emoji}</div>
        <div class="title font-muted font-title-normal">${item.title}</div>
        <div class="body">${item.body}</div>
    `)

})
technologies.sort((a, b)=> {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
});
technologies.forEach((item)=>{
    const content = `
    <li class="corner-normal ${item.category === 'soft' ? 'card-hover-soft' : 'card-hover'}">
        <img src="${item.img}" loading="lazy" alt="${item.name} logo">
        <p class="font-pr">${item.name}</p>
    </li> `
    switch(item.category){
        case "multimedia":
            addCard(multimediaElement, content)
            break;
        case "web":
            addCard(web, content)
            break;
        case "soft":
            addCard(softSkills, content)
            break;
    }
        
})

bentoData.forEach((item, index)=>{
    addCardList(bentoTitle, index, item.title)
    addCardList(bentoBody, index, item.body)

    // console.log(bentoCard[index].getAttribute('data-type') === 'include' ? bentoCard[index] : null)
})
bentoDesc.forEach((item)=>{
    if (item.parentElement.getAttribute('data-type') === "exclude") {
        item.classList.add('exclusion')
    }
})


mediaQuery.addEventListener("change", (e)=>{
    if (e.matches){

    } else {

    }
})