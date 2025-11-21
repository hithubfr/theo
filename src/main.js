import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const navbarLinks = document.querySelectorAll('.navbar-links a');

  navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbarLinks.forEach(l => l.style.color = '');
    });
  });

  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
    }
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.project-card, .value-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});
