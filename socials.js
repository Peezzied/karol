import { socialsData } from "./index.js"
import { addCard } from "./utils.js"

const socials = document.querySelector('.about .socials')

socialsData.forEach((item)=>{
    const content = `
        <a href="${item.url}" target="_blank"><i class="${item.icon}"></i></a>
    `
    addCard(socials, content)
})
