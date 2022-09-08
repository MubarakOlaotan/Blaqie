

function darkModeContact() {
    const body = document.getElementById('contact-body')
    body.classList.toggle('contact-dark')

    const home = document.getElementById('home')
    home.classList.toggle('dark-li-a')

    contactLink()

}

function contactLink() {
    const whatsappContact = document.getElementById('whatsapp')
    whatsappContact.classList.toggle('dark-li-a')

}


// Nav Menu

const menu = document.getElementById('links')
const hamburger = document.getElementById('sm-link')
const nav = document.getElementById('nav')
const body = document.getElementById('contact-body')

function myFunction() {
    
 
    if (menu.style.display === 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
        }

    hideMenu()
    navMenu()
}

function navMenu() {
   if (body.classList.contains('dark-body')){
       nav.style.backgroundColor = 'black'
   } else {
       nav.style.backgroundColor = 'white'
   }
}



// Start Mobile Nav

function hideMenu() {
   if (nav.classList.contains("hide")){
       nav.classList.remove('hide')
   }
   else {
       nav.classList.add('hide')   
   }
}