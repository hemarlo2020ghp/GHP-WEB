const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name')?.value?.trim() || 'Cliente';
    message.textContent = `Gracias ${name}, tu mensaje ha sido enviado. Te responderemos pronto.`;
    form.reset();
  });
}
