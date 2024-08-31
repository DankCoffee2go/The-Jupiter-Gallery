//Nav Toggle
$(document).ready(function(){
  $("#nav-toggle").click(function(){
      $("#nav-toggle").toggle();
      $("nav.main-nav").toggle();

  });

  $("#exit-nav").click(function(){
      $("#nav-toggle").toggle();
      $("nav.main-nav").toggle();
  });
});

document.querySelector('.hamburger-menu').addEventListener('click', function() {
  const navButtons = document.querySelectorAll('.nav-button');
  navButtons.forEach(button => button.classList.toggle('show'));
});
