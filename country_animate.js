const country = document.querySelector('#country')
const countryStyle = document.querySelector('.country')
const root = document.documentElement
const x = 0
const y = 0

// defaults
const radius = 0.1
const timing = 700;
let currentAnimation;
let color = 0;
root.style.setProperty('--timing', timing + 'ms')

country.addEventListener('mousedown', (e)=>{
    const colors = ['rgb(252, 209, 22)', 'rgb(0, 56, 168)', 'rgb(206, 17, 38)', 'rgb(255, 255, 255)']
    let x = e.clientX - e.target.offsetLeft
    let y = e.clientY - e.target.offsetTop
    let pos = e.target.getBoundingClientRect();
    color = color % 4
    //console.log(x, y)
    
    root.style.setProperty('--pos-x', x + 'px')
    root.style.setProperty('--pos-y', y + 'px')
    root.style.setProperty('--color', colors[color])
    
    const keyframes = [
        {backgroundSize: '100% 100%'},
        {backgroundSize: '10000% 10000%'}
    ]
    const animationProp = {
        duration: timing,
        easing: 'ease-in-out',
        fill: 'forwards'
    }
    if (currentAnimation){
        currentAnimation.cancel()
    }
    var animation = e.target.animate(keyframes, animationProp)
    currentAnimation = animation
    animation.onfinish = ()=>{
        root.style.setProperty('--color-primary', root.style.getPropertyValue('--color')) //THE MAGICCC
        console.log(colors[color])
        color++;
    }
    // e.target.classList.add('countryChange')
    // setTimeout(()=>{
    //     e.target.classList.remove('country')
    // }, timing)


})


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}