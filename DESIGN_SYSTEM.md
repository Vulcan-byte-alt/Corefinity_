# Corefinity Design System Reference

## 🎨 Color Palette

Based on wireframes and brand requirements:

### Primary Colors
```css
--color-primary-blue: #1E73BE;          /* Main brand blue (Corefinity signature) */
--color-primary-blue-dark: #155A9C;     /* Darker shade for hover states */
--color-primary-blue-light: #E8F2FA;    /* Light blue for backgrounds */
```

### Accent Colors
```css
--color-accent-orange: #FF7A59;         /* CTA buttons, highlights (from wireframes) */
--color-accent-orange-hover: #FF6142;   /* Hover state */
--color-accent-orange-light: #FFF3F0;   /* Light background */
```

### Semantic Colors
```css
--color-success-green: #4CAF50;         /* Performance indicators, positive metrics */
--color-success-light: #E8F5E9;         /* Success backgrounds */
--color-warning: #FFA726;               /* Warnings */
--color-error: #EF5350;                 /* Errors, alerts */
```

### Neutral Colors
```css
--color-white: #FFFFFF;
--color-gray-50: #F9FAFB;               /* Very light backgrounds */
--color-gray-100: #F3F4F6;              /* Light backgrounds */
--color-gray-200: #E5E7EB;              /* Borders, dividers */
--color-gray-300: #D1D5DB;              /* Disabled states */
--color-gray-400: #9CA3AF;              /* Placeholder text */
--color-gray-500: #6B7280;              /* Secondary text */
--color-gray-600: #4B5563;              /* Body text */
--color-gray-700: #374151;              /* Headings */
--color-gray-800: #1F2937;              /* Dark headings */
--color-gray-900: #111827;              /* Maximum contrast text */
--color-black: #000000;
```

---

## 📝 Typography

### Font Families
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
--font-heading: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'Roboto Mono', 'Courier New', monospace;
```

**Note:** Use Inter font from Google Fonts for modern, professional look. Fallback to system fonts for performance.

### Font Sizes
```css
/* Mobile First Approach */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */

/* Desktop scaling */
@media (min-width: 1024px) {
  --text-3xl: 2rem;      /* 32px */
  --text-4xl: 2.5rem;    /* 40px */
  --text-5xl: 3.5rem;    /* 56px */
  --text-6xl: 4.5rem;    /* 72px */
}
```

### Font Weights
```css
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

### Line Heights
```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

### Typography Scale
```css
/* Headings */
h1 {
  font-size: var(--text-4xl);    /* 36px mobile, 40px desktop */
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-tight);
  color: var(--color-gray-900);
  margin-bottom: 1.5rem;
}

h2 {
  font-size: var(--text-3xl);    /* 30px mobile, 32px desktop */
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-tight);
  color: var(--color-gray-800);
  margin-bottom: 1.25rem;
}

h3 {
  font-size: var(--text-2xl);    /* 24px */
  font-weight: var(--font-weight-semibold);
  line-height: var(--leading-snug);
  color: var(--color-gray-800);
  margin-bottom: 1rem;
}

h4 {
  font-size: var(--text-xl);     /* 20px */
  font-weight: var(--font-weight-semibold);
  line-height: var(--leading-snug);
  color: var(--color-gray-700);
  margin-bottom: 0.75rem;
}

/* Body Text */
body {
  font-size: var(--text-base);   /* 16px */
  font-weight: var(--font-weight-normal);
  line-height: var(--leading-relaxed);
  color: var(--color-gray-600);
}

/* Small Text */
.text-small {
  font-size: var(--text-sm);     /* 14px */
  line-height: var(--leading-normal);
}

/* Large Text */
.text-large {
  font-size: var(--text-lg);     /* 18px */
  line-height: var(--leading-relaxed);
}
```

---

## 📏 Spacing System

### Base Spacing Scale (8px base)
```css
--space-0: 0;
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
--space-32: 8rem;      /* 128px */
```

### Section Spacing
```css
/* Vertical spacing between major sections */
--section-spacing-mobile: var(--space-16);    /* 64px */
--section-spacing-tablet: var(--space-20);    /* 80px */
--section-spacing-desktop: var(--space-24);   /* 96px */

/* Container padding */
--container-padding-mobile: var(--space-4);   /* 16px */
--container-padding-tablet: var(--space-6);   /* 24px */
--container-padding-desktop: var(--space-8);  /* 32px */

/* Card/Component internal padding */
--card-padding: var(--space-6);               /* 24px */
--card-padding-sm: var(--space-4);            /* 16px */
--card-padding-lg: var(--space-8);            /* 32px */
```

---

## 🎯 Layout System

### Container Widths
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1440px;

/* Default max-width for content */
--container-max-width: var(--container-xl);
```

### Grid System
```css
/* Column gaps */
--grid-gap-mobile: var(--space-4);     /* 16px */
--grid-gap-tablet: var(--space-6);     /* 24px */
--grid-gap-desktop: var(--space-8);    /* 32px */

/* Common grid layouts */
.grid-2-cols { display: grid; grid-template-columns: repeat(2, 1fr); }
.grid-3-cols { display: grid; grid-template-columns: repeat(3, 1fr); }
.grid-4-cols { display: grid; grid-template-columns: repeat(4, 1fr); }
```

### Breakpoints
```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

---

## 🔘 Buttons

### Button Sizes
```css
/* Small Button */
.btn-sm {
  padding: 0.5rem 1rem;       /* 8px 16px */
  font-size: var(--text-sm);  /* 14px */
  border-radius: 0.375rem;    /* 6px */
}

/* Medium Button (default) */
.btn, .btn-md {
  padding: 0.75rem 1.5rem;    /* 12px 24px */
  font-size: var(--text-base); /* 16px */
  border-radius: 0.5rem;      /* 8px */
}

/* Large Button */
.btn-lg {
  padding: 1rem 2rem;         /* 16px 32px */
  font-size: var(--text-lg);  /* 18px */
  border-radius: 0.5rem;      /* 8px */
}
```

### Button Variants
```css
/* Primary Button (Orange CTA) */
.btn-primary {
  background-color: var(--color-accent-orange);
  color: var(--color-white);
  border: 2px solid var(--color-accent-orange);
  font-weight: var(--font-weight-semibold);
  transition: all 0.2s ease-in-out;
}

.btn-primary:hover {
  background-color: var(--color-accent-orange-hover);
  border-color: var(--color-accent-orange-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 122, 89, 0.3);
}

/* Secondary Button (Blue) */
.btn-secondary {
  background-color: var(--color-primary-blue);
  color: var(--color-white);
  border: 2px solid var(--color-primary-blue);
  font-weight: var(--font-weight-semibold);
  transition: all 0.2s ease-in-out;
}

.btn-secondary:hover {
  background-color: var(--color-primary-blue-dark);
  border-color: var(--color-primary-blue-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(30, 115, 190, 0.3);
}

/* Outline Button */
.btn-outline {
  background-color: transparent;
  color: var(--color-primary-blue);
  border: 2px solid var(--color-primary-blue);
  font-weight: var(--font-weight-semibold);
  transition: all 0.2s ease-in-out;
}

.btn-outline:hover {
  background-color: var(--color-primary-blue);
  color: var(--color-white);
}

/* Ghost Button */
.btn-ghost {
  background-color: transparent;
  color: var(--color-gray-700);
  border: 2px solid transparent;
  font-weight: var(--font-weight-medium);
  transition: all 0.2s ease-in-out;
}

.btn-ghost:hover {
  background-color: var(--color-gray-100);
  color: var(--color-gray-900);
}
```

---

## 🃏 Cards & Components

### Card Styles
```css
.card {
  background-color: var(--color-white);
  border-radius: 0.75rem;                    /* 12px */
  padding: var(--card-padding);              /* 24px */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.card-bordered {
  border: 1px solid var(--color-gray-200);
  box-shadow: none;
}
```

### Border Radius
```css
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;      /* 16px */
--radius-2xl: 1.5rem;   /* 24px */
--radius-full: 9999px;  /* Circular */
```

### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

---

## ⚡ Transitions & Animations

### Timing Functions
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Duration
```css
--duration-fast: 150ms;
--duration-normal: 200ms;
--duration-slow: 300ms;
--duration-slower: 500ms;
```

### Common Transitions
```css
/* Default transition for interactive elements */
.transition-default {
  transition: all var(--duration-normal) var(--ease-in-out);
}

/* Hover lift effect */
.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

---

## 🖼️ Icons & Imagery

### Icon Sizes
```css
--icon-xs: 16px;
--icon-sm: 20px;
--icon-md: 24px;
--icon-lg: 32px;
--icon-xl: 48px;
--icon-2xl: 64px;
```

### Image Aspect Ratios
```css
/* Common aspect ratios */
.aspect-square { aspect-ratio: 1 / 1; }
.aspect-video { aspect-ratio: 16 / 9; }
.aspect-portrait { aspect-ratio: 3 / 4; }
.aspect-landscape { aspect-ratio: 4 / 3; }
```

---

## 📱 Component Specifications

### Header
```
Height: 80px (desktop), 64px (mobile)
Background: White with shadow on scroll
Logo height: 40px
Navigation font-size: 16px
Navigation item spacing: 32px
```

### Mega Menu
```
Dropdown width: Full width or 1200px max
Dropdown padding: 48px
Column gap: 48px
Link spacing: 16px vertical
Hover transition: 200ms
Background: White
Shadow: 0 10px 40px rgba(0, 0, 0, 0.1)
```

### Hero Section
```
Min-height: 600px (desktop), 500px (mobile)
Padding vertical: 120px (desktop), 80px (mobile)
Heading size: 56px (desktop), 36px (mobile)
Button margin-top: 32px
```

### Footer
```
Background: var(--color-gray-900)
Text color: var(--color-gray-300)
Padding vertical: 64px
Link hover: var(--color-accent-orange)
```

---

## ♿ Accessibility Standards

### Focus States
```css
/* Visible focus indicator */
*:focus-visible {
  outline: 3px solid var(--color-accent-orange);
  outline-offset: 2px;
}

/* Button focus */
.btn:focus-visible {
  outline: 3px solid var(--color-accent-orange);
  outline-offset: 2px;
}
```

### Contrast Ratios
- Normal text: Minimum 4.5:1
- Large text (18px+): Minimum 3:1
- UI components: Minimum 3:1

### Touch Targets
- Minimum size: 44x44px
- Recommended size: 48x48px

---

## 📊 Logo Specifications

### Client Logo Display
```
Logo container: 120px x 80px (maintain aspect ratio)
Logo max-width: 100px
Logo max-height: 60px
Logo filter: grayscale(100%) on default
Logo filter: grayscale(0%) on hover
Logo opacity: 0.6 on default, 1 on hover
Transition: 300ms ease
```

---

## 🎭 Form Elements

### Input Fields
```css
.input {
  padding: 0.75rem 1rem;
  font-size: var(--text-base);
  border: 2px solid var(--color-gray-300);
  border-radius: var(--radius-md);
  background-color: var(--color-white);
  transition: all var(--duration-normal);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary-blue);
  box-shadow: 0 0 0 3px var(--color-primary-blue-light);
}

.input::placeholder {
  color: var(--color-gray-400);
}
```

### Labels
```css
.label {
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: var(--space-2);
  display: block;
}
```

---

## 🔤 CSS Variable Implementation

```css
:root {
  /* Colors */
  --color-primary-blue: #1E73BE;
  --color-primary-blue-dark: #155A9C;
  --color-primary-blue-light: #E8F2FA;
  --color-accent-orange: #FF7A59;
  --color-accent-orange-hover: #FF6142;
  --color-white: #FFFFFF;
  --color-gray-50: #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-200: #E5E7EB;
  --color-gray-300: #D1D5DB;
  --color-gray-600: #4B5563;
  --color-gray-700: #374151;
  --color-gray-800: #1F2937;
  --color-gray-900: #111827;

  /* Typography */
  --font-primary: 'Inter', sans-serif;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;

  /* Spacing */
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;

  /* Layout */
  --container-max-width: 1280px;

  /* Effects */
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;

  /* Transitions */
  --duration-normal: 200ms;
  --duration-slow: 300ms;
}

/* Dark mode (if needed in future) */
@media (prefers-color-scheme: dark) {
  :root {
    /* Dark mode color overrides would go here */
  }
}
```

---

## 📋 Component Checklist

When building each component, ensure:
- [ ] Uses design system variables
- [ ] Responsive on all breakpoints
- [ ] Accessible (keyboard navigation, ARIA labels, contrast)
- [ ] Has hover/focus/active states
- [ ] Smooth transitions
- [ ] Consistent spacing
- [ ] Works with and without JavaScript
- [ ] Semantic HTML

---

## 🎯 Quick Reference

**Most Used Colors:**
- Primary CTA: `var(--color-accent-orange)` #FF7A59
- Secondary CTA: `var(--color-primary-blue)` #1E73BE
- Body text: `var(--color-gray-600)` #4B5563
- Headings: `var(--color-gray-900)` #111827

**Most Used Spacing:**
- Section spacing: `var(--space-24)` 96px
- Card padding: `var(--space-6)` 24px
- Element gap: `var(--space-4)` 16px

**Most Used Shadows:**
- Cards: `var(--shadow-md)`
- Hover: `var(--shadow-lg)`

**Most Used Radius:**
- Buttons: `var(--radius-md)` 8px
- Cards: `var(--radius-lg)` 12px
