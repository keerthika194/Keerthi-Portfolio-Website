let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');

  if (menuIcon.classList.contains('bx-menu')) {
    menuIcon.classList.remove('bx-menu');
    menuIcon.classList.add('bxs-chevron-up-square');
  } else {
    menuIcon.classList.remove('bxs-chevron-up-square');
    menuIcon.classList.add('bx-menu');
  }
};

// Close navbar on nav link click
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bxs-chevron-up-square');
    menuIcon.classList.add('bx-menu');
  });
});

// Scroll section highlight
window.onscroll = () => {
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      document.querySelector(`header nav a[href*="${id}"]`)?.classList.add('active');
    }
  });
};

/* scroll reveal*/
ScrollReveal({ 
  //reset: true,
  distance:'80px',
  duration:2000,
  delay:200
});


ScrollReveal().reveal('.home-content, .about-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-image, .about-img, .exp-container, .proj-box, .ed-box, .sk-box, .footer-content', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1 ', { origin:'left' });
ScrollReveal().reveal('.home-content p', { origin:'right' });

//typed js
const typed=new Typed('.multiple-text',{
       strings: ['Frontend Enthusiast','Pre-Final Year Student','Machine Learning Intern'],
       typeSpeed:100,
       backSpeed:100,
       backDelay:1000,
       loop:true
});