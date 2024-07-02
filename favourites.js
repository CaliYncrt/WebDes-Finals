// Add an event listener to each heart icon
document.querySelectorAll('.fa-heart').forEach(heart => {
  heart.addEventListener('click', () => {
    // Toggle the favourite state
    heart.classList.toggle('fas');
    heart.classList.toggle('far');
  });
});

// Add to Favourites 
document.querySelectorAll('.fa-heart').forEach(heart => {
    heart.addEventListener('click', () => {
      heart.classList.toggle('favourite');
    });
  });

  const navToggler = document.getElementById('nav-toggler');
const navbarNav = document.getElementById('navbarNav');

navToggler.addEventListener('click', () => {
  navToggler.classList.toggle('open');
  navbarNav.classList.toggle('open');
});

// Meet the team Js
const cards = document.querySelectorAll(".grid-item");
cards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cards.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});