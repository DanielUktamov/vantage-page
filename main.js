let burger = document.querySelector('.burger')
let ul = document.querySelector('.ul')
let liHome = document.querySelector('.lihome')
let liAbout = document.querySelector('.liabout')
let liService = document.querySelector('.liservice')
let liProject = document.querySelector('.liproject')
let liNews = document.querySelector('.linews')
let liFoott = document.querySelector('.lifoott')
let line = document.querySelector('.line')
const menuIsActive = () => {
    burger.classList.toggle('active');
}
burger.addEventListener('click', menuIsActive)

burger.addEventListener('click', () =>{
ul.classList.toggle('activee')


})

liHome.addEventListener('click' , ()=>{
ul.classList.remove('activee')
burger.classList.remove('active')
})
liAbout.addEventListener('click' , ()=>{
ul.classList.remove('activee')
burger.classList.remove('active')
})
liService.addEventListener('click' , ()=>{
ul.classList.remove('activee')
burger.classList.remove('active')
})
liProject.addEventListener('click' , ()=>{
ul.classList.remove('activee')
burger.classList.remove('active')
})
liNews.addEventListener('click' , ()=>{
ul.classList.remove('activee')
burger.classList.remove('active')
})
liFoott.addEventListener('click' , ()=>{
ul.classList.remove('activee')
burger.classList.remove('active')

})

