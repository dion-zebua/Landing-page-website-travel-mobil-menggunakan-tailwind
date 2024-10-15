const openNav = document.querySelector('#openNav')
const closeNav = document.querySelector('#closeNav')
const popupNav = document.querySelector('#popupNav')

openNav.addEventListener('click', function () {
    popupNav.classList.remove('!hidden')
})

closeNav.addEventListener('click', function () {
    popupNav.classList.add('!hidden')
})

