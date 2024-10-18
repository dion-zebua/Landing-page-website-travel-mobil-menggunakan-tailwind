const header = document.querySelector('header')
window.onscroll = () => {
    if (window.scrollY > 200) {
        header.classList.add('activeHeader')
    } else {
        header.classList.remove('activeHeader')
    }

}

const openNav = document.querySelector('#openNav')
const closeNav = document.querySelector('#closeNav')
const popupNav = document.querySelector('#popupNav')

openNav.addEventListener('click', () => {
    popupNav.classList.remove('!hidden')
    document.body.classList.add('!overflow-hidden')
})

closeNav.addEventListener('click', () => {
    popupNav.classList.add('!hidden')
    document.body.classList.remove('!overflow-hidden')
})



const bookingForm = document.querySelector('#bookingForm')
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const data = {
        'nama': e.target[0].value,
        'asal': e.target[1].value,
        'tujuan': e.target[2].value,
        'jumlah': e.target[3].value,
    }

    const text = `Saya ingin memesan travel!%0A%0A*Nama* : ${data.nama}%0A*Asal* : ${data.asal}%0A*Tujuan* : ${data.tujuan}%0A*Jumlah* : ${data.jumlah}`
    window.open(`https://wa.me/62888888888888/?text=${text}`, '_blank')

})