import '../sass/style.scss';

const copyRsvpEmail = () => {
  const email = document.querySelector('.rsvp__email');
  window.getSelection().selectAllChildren(email);
  document.execCommand('copy');
  const copyMessage = document.querySelector('.rsvp__copy-message');
  copyMessage.textContent = 'Copied!';
};

const getYPositionOfMainContent = () => {
  const main = document.querySelector('.main');
  const y = main.getBoundingClientRect().top + window.pageYOffset;
  return y;
};

const events = () => {
  // Listen for click to scroll to main content
  const headerLogo = document.querySelector('.header__logo');
  const skipIcon = document.querySelector('.header__skip-to-main');
  const skipElements = [headerLogo, skipIcon];
  skipElements.forEach(element => {
    element.addEventListener('click', () =>
      window.scrollTo(0, getYPositionOfMainContent())
    );
  });
  // Listen for click to copy email address
  const rsvpEmail = document.querySelector('.rsvp__email');
  rsvpEmail.addEventListener('click', copyRsvpEmail);
  const copyEmailTrigger = document.querySelector('.rsvp__copy');
  copyEmailTrigger.addEventListener('click', copyRsvpEmail);
};

window.addEventListener('load', () => {
  events();
});
