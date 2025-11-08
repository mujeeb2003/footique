# Bilingual Implementation Guide (English/Arabic)

## 🌐 Overview
This project now supports both English and Arabic with automatic RTL (Right-to-Left) layout switching.

## 📁 Files Structure
```
├── translations.json       # All translation content
├── index.html             # Updated with data-i18n attributes
├── style.css              # RTL styles added
└── script.js              # Translation system logic
```

## 🔧 How It Works

### 1. **translations.json**
- Contains all text content in both languages
- Structured as nested objects for easy access
- Add new translations here

### 2. **HTML Data Attributes**
Elements that need translation have `data-i18n` attribute:
```html
<a href="#" data-i18n="nav.products">Products</a>
<h1 data-i18n="hero.headlines.0.0">Step Forward</h1>
```

### 3. **Language Toggle**
- Button in navigation: عربي / English
- Click to switch between languages
- Preference saved in localStorage

### 4. **RTL Support**
CSS automatically adjusts:
- Text direction (left-to-right ↔ right-to-left)
- Layout direction (flex-direction)
- Text alignment
- Positioning (left ↔ right)

## 🎨 Adding New Content

### Step 1: Add to translations.json
```json
{
  "en": {
    "newSection": {
      "title": "Your English Text"
    }
  },
  "ar": {
    "newSection": {
      "title": "النص العربي"
    }
  }
}
```

### Step 2: Add data-i18n to HTML
```html
<h2 data-i18n="newSection.title">Your English Text</h2>
```

### Step 3: Add RTL styles (if needed)
```css
[dir="rtl"] .your-element {
    /* RTL-specific styles */
}
```

## 🚀 Features
- ✅ Instant language switching
- ✅ Automatic RTL layout
- ✅ Saves user preference
- ✅ Smooth transitions
- ✅ No page reload needed
- ✅ All GSAP animations work in both directions

## 📝 Notes
- Default language: English
- Language preference persists across sessions
- All original animations work in both languages
- Typography adjusts automatically for Arabic text
