import { bento, addCard } from "./index.js";

const bentoCards = document.querySelector('.bento')
let lastItemWidth;
bento.forEach((item, index)=>{
    const forwards = bento[index + 1]?.width
    console.log(index, forwards)
    const content = `
    <div class="item" style="width:${item.width ? item.width : `calc(100% - ${lastItemWidth} - 18px ${forwards ? `- ${forwards} - 18px` : null})`};">
        <div class="content">${item.name}</div>
    </div>
    `
    lastItemWidth = item.width
    console.log(lastItemWidth)
    addCard(bentoCards, content)
})

new Muuri('.bento', {
    dragEnabled: true,
    dragPlaceholder: {
        enabled: true
    },

    layoutOnResize: true
});
