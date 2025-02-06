document.getElementById("homeBtn").addEventListener("click", function() {
    showSection('home');
  });
  
  document.getElementById("contactBtn").addEventListener("click", function() {
    showSection('contact');
  });
  
  document.getElementById("eventBtn").addEventListener("click", function() {
    showSection('event');
  });
  
  function showSection(sectionId) {
    
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
      section.style.display = 'none';
    });
  
    
    document.getElementById(sectionId).style.display = 'block';
  }
  