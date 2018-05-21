import '../sass/style.scss';
import smoothScroll from 'smooth-scroll/dist/smooth-scroll.polyfills';

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
  // // Initialize smooth scrolling for anchors
  // const scroll = new smoothScroll('a[href*="#"]');
  // Listen for click to scroll to main content
  const headerLogo = document.querySelector('.header__logo');
  const skipIcon = document.querySelector('.header__skip-to-main');
  const skipElements = [headerLogo, skipIcon];
  const htmlElement = document.querySelector('html');
  const yPosition = getYPositionOfMainContent();
  let scrollToIntro;
  if ('scrollBehavior' in htmlElement.style) {
    scrollToIntro = () => {
      console.log('Performed native smooth scroll.');
      window.scrollTo(0, yPosition);
    };
  } else {
    scrollToIntro = () => {
      console.log('Falling back to scroll-smooth library.');
      const scroll = new smoothScroll();
      scroll.animateScroll(yPosition, undefined, {
        speed: 800,
        easing: 'easeOutQuint'
      });
    };
  }
  skipElements.forEach(element => {
    element.addEventListener('click', scrollToIntro);
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
