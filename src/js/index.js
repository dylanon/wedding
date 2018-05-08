import '../sass/style.scss';

const copyRsvpEmail = () => {
  const email = document.querySelector('.rsvp__email');
  window.getSelection().selectAllChildren(email);
  document.execCommand('copy');
  const copyMessage = document.querySelector('.rsvp__copy-message');
  copyMessage.textContent = 'Copied!';
};

const events = () => {
  // Listen for click to copy email address
  const rsvpEmail = document.querySelector('.rsvp__email');
  rsvpEmail.addEventListener('click', copyRsvpEmail);
  const copyEmailTrigger = document.querySelector('.rsvp__copy');
  copyEmailTrigger.addEventListener('click', copyRsvpEmail);
};

window.addEventListener('load', () => {
  events();
});
