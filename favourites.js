// Add an event listener to each heart icon
document.querySelectorAll('.fa-heart').forEach(heart => {
  heart.addEventListener('click', () => {
    // Toggle the favourite state
    heart.classList.toggle('fas');
    heart.classList.toggle('far');
  });
});
