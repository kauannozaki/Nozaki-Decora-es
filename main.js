// Nozaki Decorações custom JS
document.addEventListener('DOMContentLoaded', function () {
  // Handle contact form submission if present
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Obrigado! Entraremos em contato em breve.');
      form.reset();
    });
  }
});