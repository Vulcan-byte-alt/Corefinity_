/**
 * Mega Menu Functionality
 * Handles opening/closing of mega menu dropdowns with proper accessibility
 */

(function() {
  'use strict';

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMegaMenu);
  } else {
    initMegaMenu();
  }

  function initMegaMenu() {
    const megaMenuTriggers = document.querySelectorAll('.nav__link--mega-trigger');

    megaMenuTriggers.forEach(trigger => {
      const parentItem = trigger.closest('.nav__item--has-mega');
      const megaMenu = parentItem.querySelector('.mega-menu');

      if (!megaMenu) return;

      // Handle click on trigger button
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

        // Close all other mega menus first
        closeAllMegaMenus();

        // Toggle this mega menu
        if (!isExpanded) {
          openMegaMenu(trigger, megaMenu);
        }
      });

      // Handle hover (desktop only)
      if (window.matchMedia('(min-width: 1024px)').matches) {
        parentItem.addEventListener('mouseenter', () => {
          closeAllMegaMenus();
          openMegaMenu(trigger, megaMenu);
        });

        parentItem.addEventListener('mouseleave', () => {
          closeMegaMenu(trigger, megaMenu);
        });
      }
    });

    // Close mega menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav__item--has-mega')) {
        closeAllMegaMenus();
      }
    });

    // Close mega menu when pressing Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllMegaMenus();
      }
    });

    // Close mega menus when scrolling
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        closeAllMegaMenus();
      }, 100);
    });
  }

  function openMegaMenu(trigger, megaMenu) {
    trigger.setAttribute('aria-expanded', 'true');
    megaMenu.setAttribute('aria-hidden', 'false');
  }

  function closeMegaMenu(trigger, megaMenu) {
    trigger.setAttribute('aria-expanded', 'false');
    megaMenu.setAttribute('aria-hidden', 'true');
  }

  function closeAllMegaMenus() {
    const allTriggers = document.querySelectorAll('.nav__link--mega-trigger');
    allTriggers.forEach(trigger => {
      const parentItem = trigger.closest('.nav__item--has-mega');
      const megaMenu = parentItem?.querySelector('.mega-menu');

      if (megaMenu) {
        closeMegaMenu(trigger, megaMenu);
      }
    });
  }

})();
