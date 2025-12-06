// Interactive Features - Card Hover Effects

document.addEventListener('DOMContentLoaded', function() {
  const featureCards = document.querySelectorAll('.interactive-feature-card');

  featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      // Remove active state from all cards
      featureCards.forEach(c => c.classList.remove('active'));
      // Add active state to current card
      this.classList.add('active');
    });
  });
});
