# Contributing to KICKS_OS

## 🤝 Development Guidelines

### Code Style

#### JavaScript
- Use ES6 modules (`import`/`export`)
- Add JSDoc comments for all functions
- Use descriptive variable names
- Indent with 4 spaces
- Max line length: 100 characters

Example:
```javascript
/**
 * Description of what function does
 * @param {type} paramName - Description
 * @returns {type} Description
 */
export function myFunction(paramName) {
    // implementation
}
```

#### CSS
- Use Tailwind CSS utility classes when possible
- Add custom styles only to `style/style.css`
- Follow neo-brutalist design principles
- Use consistent spacing and sizing

#### HTML
- Semantic HTML5 structure
- Clear comments for major sections
- Accessible alt text for images
- Proper form labels

### File Organization

```
script/
├── script.js           # Entry point only
├── auth.js            # Auth logic
├── carousel.js        # Carousel logic
├── productGrid.js     # Product display
├── cart.js            # Cart logic
├── modal.js           # Modal logic
├── login.js           # Login page logic
├── utils.js           # Helper functions
└── [feature].js       # New features here
```

**Rules:**
- One primary feature per file
- Functions exported explicitly
- Use window object for global state
- Keep modules under 150 lines when possible

## 🚀 Adding a New Feature

### Step 1: Plan
- Document feature requirements
- Design user flow
- Plan state management
- Consider mobile responsiveness

### Step 2: Create Module
```javascript
// script/myFeature.js
/**
 * My Feature Module
 * Description of what it does
 */

export function initMyFeature() {
    // Initialize
}

export function myFunction() {
    // Implementation
}
```

### Step 3: Import in script.js
```javascript
import { initMyFeature, myFunction } from './myFeature.js';

// Add to init() or setupEventListeners()
// Expose to window if needed
window.myFunction = myFunction;
```

### Step 4: Add to HTML
- Add required HTML elements
- Add event listeners
- Update styles if needed

### Step 5: Test
- Test on desktop
- Test on mobile
- Test on tablets
- Check for console errors

### Step 6: Document
- Update README.md
- Add JSDoc comments
- Update TESTING.md

## 🔧 Common Tasks

### Adding a Product
Edit `data/data.js`:
```javascript
{
    id: 7,
    name: "PRODUCT NAME",
    price: 199.99,
    category: "Running|Casual|High-Top|Classic",
    tag: "NEW DROP|BEST SELLER|LIMITED|SALE|null",
    image: "https://images.unsplash.com/..."
}
```

### Modifying Colors
Edit `style/style.css` or use Tailwind classes:
- Primary: `bg-lime-400` (lime-400)
- Dark: `bg-black`, `text-black`
- Light: `bg-white`, `text-white`
- Accent: `bg-yellow-400`, `bg-blue-400`, `bg-pink-300`

### Changing Responsive Breakpoints
Tailwind breakpoints (built-in):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🧪 Testing New Features

```bash
# Manual testing checklist
✓ Desktop (1920x1080)
✓ Tablet (768x1024)
✓ Mobile (375x667)
✓ Chrome browser
✓ Firefox browser
✓ Safari browser
✓ Edge browser
✓ No console errors
✓ LocalStorage working
✓ Performance acceptable
```

## 📋 Pull Request Checklist

- [ ] Feature implemented and tested
- [ ] No console errors or warnings
- [ ] Code follows style guide
- [ ] JSDoc comments added
- [ ] README.md updated
- [ ] TESTING.md updated
- [ ] Responsive design verified
- [ ] No unused variables/imports
- [ ] Performance acceptable

## 🐛 Bug Reporting

Include:
1. Steps to reproduce
2. Expected behavior
3. Actual behavior
4. Browser/OS
5. Console errors (if any)
6. Screenshots/videos

## 📱 Responsive Design Principles

Always test at these breakpoints:
- 320px (iPhone SE)
- 375px (iPhone 12)
- 768px (iPad)
- 1024px (iPad Pro)
- 1920px (Desktop)

Use Tailwind prefixes:
```html
<!-- Mobile first -->
<div class="col-1 md:col-2 lg:col-3">
    <!-- 1 column mobile, 2 tablet, 3 desktop -->
</div>
```

## 🎨 Design Consistency

### Neo-Brutalist Rules
✓ Bold 4px borders
✓ High contrast (black/white)
✓ Strong typography
✓ Limited color palette
✓ Generous whitespace
✓ Clear hierarchy

### Don't
✗ Gradients (use solid colors)
✗ Rounded corners on main elements
✗ Drop shadows (use 4px hard shadows)
✗ Decorative elements
✗ Pastel colors

## 🚀 Performance Tips

- Use CSS classes instead of inline styles
- Lazy load images if possible
- Minimize DOM manipulation
- Cache DOM elements
- Use event delegation
- Avoid deep nesting

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [MDN Web Docs](https://developer.mozilla.org)
- [ES6 Modules](https://javascript.info/modules)

## 💬 Questions?

Check:
1. Existing code for similar features
2. TESTING.md for testing guidelines
3. DEPLOYMENT.md for production info
4. README.md for architecture overview

---

Happy coding! 🎉
