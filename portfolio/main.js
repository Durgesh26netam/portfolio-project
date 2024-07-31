/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

const typed = new Typed(".multiple-text",{
    strings: ["Full Stack Web Developer","Software Engineer","Learner"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const form = document.querySelector("form");

function sendEmail(){
    
    const Name = document.getElementById("name").value;
    const Email = document.getElementById("email").value;
    const Message = document.getElementById("message").value;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "daddunetam638@gmail.com",
        Password : "6FDC6FD3BF6BBDC5DB1C7B2BDC8522C8F790",
        To : "durgeshnetam816@gmail.com",
        From : "daddunetam638@gmail.com.com",
        Subject :"this is the subject",
        Body :"this is the body"
    }).then(
      message =>{
        if(message == "OK"){
            Swal.fire({
                title:"Success",
                text:"Message sent successfully",
                icon:"success"
            })
        }
      }
    );
}

form.addEventListener("button",(e) =>{
    e.preventDefault();

    sendEmail();
});

