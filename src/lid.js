const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

function toggleMenu() {
  const isOpening = navMenu.classList.contains('hidden');

  if (isOpening) {
    navMenu.classList.remove('hidden', 'closing');
    navMenu.classList.add('show');
    navToggle.classList.add('active');
  } else {
    navMenu.classList.remove('show');
    navMenu.classList.add('closing');
    navToggle.classList.remove('active');

    setTimeout(() => {
      if (navMenu.classList.contains('closing')) {
        navMenu.classList.add('hidden');
        navMenu.classList.remove('closing');
      }
    }, 200); 
  }
}

navToggle.addEventListener('click', toggleMenu);

document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => {
    if (!navMenu.classList.contains('hidden')) {
      toggleMenu();
    }
  });
});

function selectCard(cardNumber) {
  const cards = document.querySelectorAll('.membership-card');
  
  cards.forEach(card => {
    card.classList.remove('border-red-500', 'shadow-2xl');
    card.classList.add('border-transparent', 'shadow-lg');
  });

  const selectedCard = document.getElementById('card-' + cardNumber);
  selectedCard.classList.remove('border-transparent', 'shadow-lg');
  selectedCard.classList.add('border-red-500', 'shadow-2xl');
}