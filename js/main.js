/**
 * Corefinity Website - Main JavaScript
 * Handles: Mega Menu, Mobile Navigation, Accordion, Header Scroll
 */

(function() {
  'use strict';

  // =========================================
  // HEADER SCROLL EFFECT
  // =========================================
  function initHeaderScroll() {
    const header = document.getElementById('header');
    const hero = document.querySelector('.hero');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      const heroHeight = hero ? hero.offsetHeight : 600;

      // After hero section, make header solid blue
      if (currentScroll > heroHeight - 100) {
        header.classList.add('header--scrolled');
        header.classList.add('header--solid-blue');
      } else {
        header.classList.remove('header--scrolled');
        header.classList.remove('header--solid-blue');
      }

      lastScroll = currentScroll;
    });
  }

  // =========================================
  // MOBILE MENU TOGGLE
  // =========================================
  function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (!toggle || !mobileNav) return;

    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

      // Toggle aria-expanded
      toggle.setAttribute('aria-expanded', !isExpanded);

      // Toggle classes
      toggle.classList.toggle('mobile-menu-toggle--active');
      mobileNav.classList.toggle('mobile-nav--open');

      // Prevent body scroll when menu is open
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    const mobileLinks = mobileNav.querySelectorAll('.mobile-nav__link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.classList.remove('mobile-menu-toggle--active');
        mobileNav.classList.remove('mobile-nav--open');
        document.body.style.overflow = '';
      });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('mobile-nav--open')) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.classList.remove('mobile-menu-toggle--active');
        mobileNav.classList.remove('mobile-nav--open');
        document.body.style.overflow = '';
      }
    });
  }

  // =========================================
  // MEGA MENU
  // =========================================
  function initMegaMenu() {
    const megaMenus = document.querySelectorAll('.mega-menu');

    megaMenus.forEach(menu => {
      const trigger = menu.querySelector('.mega-menu__trigger');
      const dropdown = menu.querySelector('.mega-menu__dropdown');

      if (!trigger || !dropdown) return;

      // Desktop: Hover behavior
      menu.addEventListener('mouseenter', () => {
        if (window.innerWidth >= 1024) {
          trigger.setAttribute('aria-expanded', 'true');
          dropdown.setAttribute('aria-hidden', 'false');
          dropdown.classList.add('mega-menu__dropdown--active');
        }
      });

      menu.addEventListener('mouseleave', () => {
        if (window.innerWidth >= 1024) {
          trigger.setAttribute('aria-expanded', 'false');
          dropdown.setAttribute('aria-hidden', 'true');
          dropdown.classList.remove('mega-menu__dropdown--active');
        }
      });

      // Mobile/Desktop: Click/Tap behavior
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

        // Close all other mega menus
        document.querySelectorAll('.mega-menu__trigger').forEach(t => {
          if (t !== trigger) {
            t.setAttribute('aria-expanded', 'false');
            const d = t.closest('.mega-menu').querySelector('.mega-menu__dropdown');
            if (d) {
              d.setAttribute('aria-hidden', 'true');
              d.classList.remove('mega-menu__dropdown--active');
            }
          }
        });

        // Toggle current mega menu
        trigger.setAttribute('aria-expanded', !isExpanded);
        dropdown.setAttribute('aria-hidden', isExpanded);
        dropdown.classList.toggle('mega-menu__dropdown--active');
      });

      // Keyboard navigation
      trigger.addEventListener('keydown', (e) => {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          trigger.click();
        } else if (e.key === 'Escape' && isExpanded) {
          trigger.setAttribute('aria-expanded', 'false');
          dropdown.setAttribute('aria-hidden', 'true');
          dropdown.classList.remove('mega-menu__dropdown--active');
          trigger.focus();
        } else if (e.key === 'ArrowDown' && isExpanded) {
          e.preventDefault();
          const firstLink = dropdown.querySelector('.mega-menu__link');
          if (firstLink) firstLink.focus();
        }
      });

      // Navigate within dropdown with arrow keys
      const menuLinks = dropdown.querySelectorAll('.mega-menu__link');
      menuLinks.forEach((link, index) => {
        link.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextLink = menuLinks[index + 1];
            if (nextLink) nextLink.focus();
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (index === 0) {
              trigger.focus();
            } else {
              menuLinks[index - 1].focus();
            }
          } else if (e.key === 'Escape') {
            trigger.setAttribute('aria-expanded', 'false');
            dropdown.setAttribute('aria-hidden', 'true');
            dropdown.classList.remove('mega-menu__dropdown--active');
            trigger.focus();
          }
        });
      });
    });

    // Close mega menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.mega-menu')) {
        document.querySelectorAll('.mega-menu__trigger').forEach(trigger => {
          trigger.setAttribute('aria-expanded', 'false');
          const dropdown = trigger.closest('.mega-menu').querySelector('.mega-menu__dropdown');
          if (dropdown) {
            dropdown.setAttribute('aria-hidden', 'true');
            dropdown.classList.remove('mega-menu__dropdown--active');
          }
        });
      }
    });
  }

  // =========================================
  // ACCORDION
  // =========================================
  function initAccordion() {
    const accordionItems = document.querySelectorAll('.accordion__item');

    accordionItems.forEach(item => {
      const trigger = item.querySelector('.accordion__trigger');
      const content = item.querySelector('.accordion__content');

      if (!trigger || !content) return;

      trigger.addEventListener('click', () => {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

        // Toggle current item
        trigger.setAttribute('aria-expanded', !isExpanded);
        content.classList.toggle('accordion__content--expanded');
        item.classList.toggle('accordion__item--active');

        // Update max-height for smooth animation
        if (!isExpanded) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = '0';
        }
      });

      // Keyboard support
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          trigger.click();
        }
      });
    });
  }

  // =========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // =========================================
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // Skip if it's just "#" or empty
        if (!href || href === '#') {
          e.preventDefault();
          return;
        }

        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();

          // Close mobile menu if open
          const mobileNav = document.querySelector('.mobile-nav');
          const mobileToggle = document.querySelector('.mobile-menu-toggle');
          if (mobileNav && mobileNav.classList.contains('mobile-nav--open')) {
            mobileToggle.setAttribute('aria-expanded', 'false');
            mobileToggle.classList.remove('mobile-menu-toggle--active');
            mobileNav.classList.remove('mobile-nav--open');
            document.body.style.overflow = '';
          }

          // Scroll to target
          const headerHeight = document.getElementById('header').offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Update focus for accessibility
          target.setAttribute('tabindex', '-1');
          target.focus();
        }
      });
    });
  }

  // =========================================
  // VIDEO TESTIMONIALS
  // =========================================
  function initVideoTestimonials() {
    const videoPlayer = document.querySelector('.video-testimonials__player video');
    const thumbnails = document.querySelectorAll('.video-thumbnail');
    const prevBtn = document.querySelector('.video-testimonials__arrow--prev');
    const nextBtn = document.querySelector('.video-testimonials__arrow--next');

    if (!videoPlayer || !thumbnails.length) return;

    const videos = [
      {
        src: 'videos/testimonial-1.mp4',
        poster: 'images/testimonials/video-1-poster.jpg'
      },
      {
        src: 'videos/testimonial-2.mp4',
        poster: 'images/testimonials/video-2-poster.jpg'
      },
      {
        src: 'videos/testimonial-3.mp4',
        poster: 'images/testimonials/video-3-poster.jpg'
      },
      {
        src: 'videos/testimonial-4.mp4',
        poster: 'images/testimonials/video-4-poster.jpg'
      }
    ];

    let currentVideoIndex = 0;

    function loadVideo(index) {
      if (index < 0 || index >= videos.length) return;

      currentVideoIndex = index;
      const video = videos[index];

      // Update video source and poster
      videoPlayer.src = video.src;
      videoPlayer.poster = video.poster;
      videoPlayer.load();

      // Update thumbnail active states
      thumbnails.forEach((thumb, i) => {
        if (i === index) {
          thumb.classList.add('video-thumbnail--active');
        } else {
          thumb.classList.remove('video-thumbnail--active');
        }
      });
    }

    // Thumbnail click handlers
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
        loadVideo(index);
        videoPlayer.play();
      });
    });

    // Navigation arrow handlers
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const newIndex = currentVideoIndex > 0 ? currentVideoIndex - 1 : videos.length - 1;
        loadVideo(newIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const newIndex = currentVideoIndex < videos.length - 1 ? currentVideoIndex + 1 : 0;
        loadVideo(newIndex);
      });
    }

    // Auto-advance to next video when current one ends
    videoPlayer.addEventListener('ended', () => {
      const newIndex = currentVideoIndex < videos.length - 1 ? currentVideoIndex + 1 : 0;
      loadVideo(newIndex);
      videoPlayer.play();
    });
  }


  // =========================================
  // INITIALIZE ALL
  // =========================================
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initHeaderScroll();
        initMobileMenu();
        initMegaMenu();
        initAccordion();
        initSmoothScroll();
        initVideoTestimonials();
      });
    } else {
      initHeaderScroll();
      initMobileMenu();
      initMegaMenu();
      initAccordion();
      initSmoothScroll();
      initVideoTestimonials();
    }
  }

  // Run initialization
  init();

})();
