const openNav = document.querySelector('#openNav')
const closeNav = document.querySelector('#closeNav')
const popupNav = document.querySelector('#popupNav')

openNav.addEventListener('click', function () {
    popupNav.classList.remove('!hidden')
    document.body.classList.add('!overflow-hidden')
})

closeNav.addEventListener('click', function () {
    popupNav.classList.add('!hidden')
    document.body.classList.remove('!overflow-hidden')
})



const bookingForm = document.querySelector('#bookingForm')
bookingForm.addEventListener('submit', function (e) {
    e.preventDefault()

    const data = {
        'nama': e.target[0].value,
        'asal': e.target[1].value,
        'tujuan': e.target[2].value,
        'jumlah': e.target[3].value,
    }

    const text = `Saya ingin memesan travel!%0A%0A*Nama* : ${data.nama}%0A*Asal* : ${data.asal}%0A*Tujuan* : ${data.tujuan}%0A*Jumlah* : ${data.jumlah}`
    window.open(`https://wa.me/688214535126/?text=${text}` , '_blank')

})
