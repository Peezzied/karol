import { menuData } from "./index.js"
import { addCard, addCardList } from "./utils.js"

const navigationBtn = document.querySelector('.navbar .menu')
const navigationMenu = document.querySelector('.navbar .menu-list')
const closeBtn = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>'
let previousElement = null;

function handleDatasetChange(mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-status') {
            navigationMenu.classList.toggle('active');
            console.log('clicked');

            if (previousElement === null) {
                previousElement = navigationBtn.innerHTML;
            }

            if (navigationBtn.innerHTML === previousElement) {
                navigationBtn.innerHTML = closeBtn;
            } else {
                navigationBtn.innerHTML = previousElement;
            }

            console.log('previous', previousElement);
        }
    }
}

navigationBtn.addEventListener('click', (e)=>{
    if (navigationMenu.dataset.status === 'inactive') {
        navigationMenu.dataset.status = 'active'
    } else {
        navigationMenu.dataset.status = 'inactive'
    }
})

const observer = new MutationObserver(handleDatasetChange);
const observerOptions = {
    attributes: true,
    attributeFilter: ['data-status'] // Replace with the actual dataset key you want to observe
};

observer.observe(navigationMenu, observerOptions);


menuData.forEach((item)=>{
    const content = `
        <li>
            <a href="${item.url}" class="font-title-med">
                <i class="${item.icon} font-title-med"></i>
                ${item.name}
            </a>
        </li>
    `
    addCard(navigationMenu, content)
})

document.querySelectorAll('.navbar .menu-list li a').forEach((item)=>{
    item.addEventListener('click', ()=>{
        navigationMenu.dataset.status = 'inactive'
    })
})