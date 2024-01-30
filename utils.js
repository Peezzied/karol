function goTo(ref){
    location.href = ref
}
export function addCardList(data, index, content){
    data[index].innerHTML = content
}
export function addCard(data, content){
    data.innerHTML += content
}