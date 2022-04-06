const btn_modal = document.getElementById('btn-op-modal')
const div_modal = document.getElementById('div-modal')
const btn_close_modal = document.getElementById('btn-close-modal')

console.log(btn_modal)
console.log(div_modal)
console.log(btn_close_modal)

btn_modal.addEventListener('click', () => {
    div_modal.style.display = 'flex'
})

btn_close_modal.addEventListener('click', () => {
    div_modal.style.display = 'none'
})

window.onclick = (event) => {
    if(event.target === div_modal)
    div_modal.style.display = 'none'
}