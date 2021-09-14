// Listen for click event on hamburger menu button
  // - when clicked, display mobile nav menu on page
  // - toggle hamburger button to X button
    // - when X is clicked, hide mobile menu


const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  console.log('you clicked it');

  const mobileMenu = document.querySelector('.mobileMenu');
  mobileMenu.classList.add('');
})