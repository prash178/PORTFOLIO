let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a ');

window.onscroll=()=>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset=sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset+height){
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header new a[href*='+ id +']').classList.add('active');
            });

        };
    });
    let header = document.querySelector('header');
    header. classList.toggle('sticky',Window.scrollY  > 100);
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


};

//scroll revards//
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,


});
ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contcat form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,about-content',{origin:'right'});


//typed JS//
const typed = new Typed('.multiple-text',{
   strings:['Frontend Developer','Eathical Hacker ','Graphic Desginer'],
   typeSpeed:100,
   backSpeed:100,
   backDelay:1000,
   loop:true
});

