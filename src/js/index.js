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
  // Listen for click to scroll to main content
  const headerLogo = document.querySelector('.header__logo');
  const skipIcon = document.querySelector('.header__skip-to-main');
  const skipElements = [headerLogo, skipIcon];
  const htmlElement = document.querySelector('html');
  const yPosition = getYPositionOfMainContent();
  let scrollToMain;
  if ('scrollBehavior' in htmlElement.style) {
    scrollToMain = () => {
      window.scrollTo(0, yPosition);
    };
  } else {
    scrollToMain = () => {
      const scroll = new smoothScroll();
      scroll.animateScroll(yPosition, undefined, {
        speed: 800,
        easing: 'easeOutQuint'
      });
    };
  }
  skipElements.forEach(element => {
    element.addEventListener('click', scrollToMain);
  });
  // Listen for click to copy email address
  const rsvpEmail = document.querySelector('.rsvp__email');
  rsvpEmail.addEventListener('click', copyRsvpEmail);
  const copyEmailTrigger = document.querySelector('.rsvp__copy');
  copyEmailTrigger.addEventListener('click', copyRsvpEmail);
  // Listen for a click on the menu button
  const menuButton = document.querySelector('.header__menu-button');
  menuButton.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    menu.style.transform = 'translateY(0)';
    menu.style.opacity = '1';
  });
  // Listen for click on the menu close button
  const menuClose = document.querySelector('.menu__close-control');
  menuClose.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    menu.style.opacity = '0';
    menu.style.transform = 'translateY(-100%)';
  });
  // Listen for click on menu links
  const menuLinks = document.querySelectorAll('.menu__link');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.querySelector('.menu');
      menu.style.opacity = '0';
      menu.style.transform = 'translateY(-100%)';
    });
  });
};

const initSmoothScrolling = () => {
  const htmlElement = document.querySelector('html');
  if (!('scrollBehavior' in htmlElement.style)) {
    // Initialize smooth scrolling for all anchors
    const scroll = new smoothScroll('a[href*="#"]');
    console.info(
      'CSS property `scroll-behavior` is not supported by this browser. Falling back to smooth-scroll.'
    );
  }
};

// Initialize JavaScript when all resources have been loaded
window.addEventListener('DOMContentLoaded', () => {
  events();
  initSmoothScrolling();
});
