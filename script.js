// ===== TRANSLATION SYSTEM =====
let translations = {};
let currentLang = 'en';

// Load translations
fetch('./translations.json')
    .then(response => response.json())
    .then(data => {
        translations = data;
        // Check if user prefers Arabic (can be based on browser settings or saved preference)
        const savedLang = localStorage.getItem('preferredLang');
        if (savedLang) {
            currentLang = savedLang;
            setLanguage(currentLang);
        }
    })
    .catch(error => console.error('Error loading translations:', error));

// Function to get nested translation
function getTranslation(key, lang) {
    const keys = key.split('.');
    let value = translations[lang];
    
    for (let k of keys) {
        if (value && value[k] !== undefined) {
            value = value[k];
        } else {
            return key; // Return key if translation not found
        }
    }
    
    return value;
}

// Function to update all translatable elements
function updateTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key, lang);
        element.textContent = translation;
    });
}

// Function to set language and update UI
function setLanguage(lang) {
    currentLang = lang;
    const html = document.documentElement;
    
    // Update HTML attributes
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update all translations
    updateTranslations(lang);
    
    // Update language toggle button text
    const langToggle = document.querySelector('.lang-text');
    if (langToggle) {
        langToggle.textContent = lang === 'en' ? 'عربي' : 'English';
    }
    
    // Save preference
    localStorage.setItem('preferredLang', lang);
}

// Language toggle button event
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            setLanguage(newLang);
        });
    }
});

// ===== ORIGINAL ANIMATIONS =====
function initAnimation(){
    gsap.to("#main",{
        z: '0',
        duration: 1,
        delay: 0.5,
        ease: Expo.easeInOut,
        filter: 'blur(0px)',
        
    })
    gsap.to("body",{
        perspective: '0px',
        duration: 2,
        ease: Expo.easeInOut,
    })
}

initAnimation();

Shery.imageEffect("#bottom", {
    style: 5,
    debug: false,
    gooey: true,
    config: {
        a: { value: 2, range: [0, 30] },
        b: { value: -0.89, range: [-1, 1] },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 1.8139313031282118 },
        ignoreShapeAspect: { value: true },
        shapePosition: { value: { x: 0, y: 0 } },
        shapeScale: { value: { x: 0.5, y: 0.5 } },
        shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
        shapeRadius: { value: 0, range: [0, 2] },
        currentScroll: { value: 0 },
        scrollLerp: { value: 0.07 },
        gooey: { value: true },
        infiniteGooey: { value: true },
        growSize: { value: 2.92, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1.18, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: false },
        onMouse: { value: 1 },
        noise_speed: { value: 0.2, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0, range: [0, 0.1] },
        noise_height: { value: 0.32, range: [0, 2] },
        noise_scale: { value: 19.08, range: [0, 100] },
    },
});

document.querySelectorAll(".h1s").forEach(function (h1sDiv) {
    var h1s = h1sDiv.querySelectorAll("h1");
    var index = 0;
    var animating = false;

    document.querySelector("#main").addEventListener("click", function () {
        if (animating) return;
        animating = true;

        gsap.to(h1s[index], {
            top: "-=100%",
            ease: Expo.easeInOut,
            duration: 1,
            onComplete: function () {
                gsap.set(this._targets[0], { top: "100%" });
                animating = false;
            },
        });

        index = index === h1s.length - 1 ? 0 : index + 1;
        gsap.to(h1s[index], {
            top: "-=100%",
            ease: Expo.easeInOut,
            duration: 1,
        });
    });
});
