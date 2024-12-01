const all = document.querySelectorAll('.products_selector')
const allButtons1 = all[0].querySelectorAll('div')
const allButtons2 = all[1].querySelectorAll('div')

for (let i = 0; i < allButtons1.length; i++) {
    allButtons1[i].addEventListener('click', selectHandler1)
}
for (let i = 0; i < allButtons2.length; i++) {
    allButtons2[i].addEventListener('click', selectHandler2)
}

function selectHandler1(event) {
    const highlighted = all[0].querySelector('.highlighted')
    highlighted.classList.toggle('highlighted')
    event.target.classList.toggle('highlighted')
}
function selectHandler2(event) {
    const highlighted = all[1].querySelector('.highlighted')
    highlighted.classList.toggle('highlighted')
    event.target.classList.toggle('highlighted')
}