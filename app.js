const btn1 = document.querySelector('.share')
const btn2 = document.querySelector('.active div')
const share = document.querySelector('.active')

btn1.addEventListener('click', () => {
    share.style.display = 'flex'
})

btn2.addEventListener('click', () => {
    share.style.display = 'none'
})