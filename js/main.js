$(document).ready(function () {


    $('.section-2 .grid .text-popup-link').magnificPopup({
        type: 'image',
        gallery: {enabled:true}
    });
    
    gallery()
    
})

function gallery() {
    $('.section-3 .category-images .text-popup-link').magnificPopup({
        type: 'image',
        gallery: {enabled:true}
    });
}

// Start Readmore

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}

//   End Readmore

 

const menu = document.getElementById('links')
const hamburger = document.getElementById('sm-link')
const nav = document.getElementById('nav')


 
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

// End Mobile Nav


//  Dark Mode

 function darkMode() {
    const body = document.getElementById('body')
    body.classList.toggle('dark-body')

const section3 = document.getElementById('services')
if (section3.classList.contains("dark-section-3")){
    section3.classList.remove('dark-section-3')
}
else {
    section3.classList.add('dark-section-3')   
}

darkLink()
 }

function darkLink() {
    const home = document.getElementById('home')
    home.classList.toggle('dark-li-a')

    const about = document.getElementById('about')
    about.classList.toggle('dark-li-a')

    const service = document.getElementById('service')
    service.classList.toggle('dark-li-a')

    const contact = document.getElementById('contact')
    contact.classList.toggle('dark-li-a')


 }


//  End Dark Mode


