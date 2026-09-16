(() => {
  const valueCards = Array.from(document.querySelectorAll('.value-card'));
  const faqCards = Array.from(document.querySelectorAll('.faq-card'));
  const thinkingImage = '../assets/pictures/thinking.jpg';
  const ideaImage = '../assets/pictures/idea.jpg';
  const character = document.getElementById('faqCharacter');

  const setValueCard = selectedCard => {
    const willOpen = !selectedCard.classList.contains('active');
    valueCards.forEach(card => {
      const isSelected = card === selectedCard && willOpen;
      card.classList.toggle('active', isSelected);
      card.setAttribute('aria-expanded', String(isSelected));
    });
  };

  valueCards.forEach(card => {
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-expanded', 'false');
    card.addEventListener('click', () => setValueCard(card));
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setValueCard(card);
      }
    });
  });

  window.toggleFAQ = selectedCard => {
    const willOpen = !selectedCard.classList.contains('active');
    faqCards.forEach(card => {
      const isSelected = card === selectedCard && willOpen;
      card.classList.toggle('active', isSelected);
      card.setAttribute('aria-expanded', String(isSelected));
    });

    if (character) {
      character.style.opacity = '0';
      window.setTimeout(() => {
        character.src = willOpen ? ideaImage : thinkingImage;
        character.style.opacity = '1';
      }, 150);
    }
  };

  faqCards.forEach(card => {
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-expanded', 'false');
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        window.toggleFAQ(card);
      }
    });
  });
})();
