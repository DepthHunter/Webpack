import './style.css'



  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); 
      const pageUrl = this.getAttribute('href'); 
      window.location.href = pageUrl; 
    });
  });

