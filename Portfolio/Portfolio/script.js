
/*------Sticky navbar----- */
window.addEventListener("scroll",()=>{
    const header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
});

/*---Internship Section---*/

const internshipModals=document.querySelectorAll(".internships-modal");
const learnMoreBtns=document.querySelectorAll(".learn-more-btn");
const modalCloseBtns=document.querySelectorAll(".modal-close-btn");

var modal=(modalClick)=>{
    internshipModals[modalClick].classList.add("active");
}

learnMoreBtns.forEach((learnmorebtn,i)=>{
    learnmorebtn.addEventListener("click",()=>{
        modal(i);
    });
});


modalCloseBtns.forEach((modalclosebtn)=>{
    modalclosebtn.addEventListener("click",()=>{
        internshipModals.forEach((modalView)=>{
            modalView.classList.remove("active");
        });
    });
});


/*------Swiper----- */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});



/*------Menu icon navbar----- */
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*------Scroll section active link----- */

let section=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{

    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            })
        }
    });



/*---Remove Menu icon navbar--- */
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');


};




  /*---dark light mode---*/
let darkModeIcon=document.querySelector('#darkMode-icon');

darkModeIcon.onclick=()=>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

/*Scroll reveal*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .projects-box, .course-wrapper, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });


