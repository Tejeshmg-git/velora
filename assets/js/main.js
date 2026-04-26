/* 
 * Velora — Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    initGlobalComponents();
    initNavigation();
    initTheme();
    initScrollEffects();
    initSpotlight();
    initDashboardHUD();
    initRTL();
    initCounters();
    initServiceFeatures();
});

/**
 * Service Feature Interaction (Accordion for Mobile/Tablet)
 */
function initServiceFeatures() {
    const featureItems = document.querySelectorAll('.service-feature-list li, .service-grid-2x2 .grid-item');
    
    featureItems.forEach(item => {
        // Add click indicator style via JS for immediate feedback if CSS not loaded yet
        item.style.cursor = 'pointer';
        
        item.addEventListener('click', () => {
            // Check if we are in a mobile/tablet viewport if desired, 
            // but allowing it everywhere is usually fine for UX
            item.classList.toggle('active');
            
            // Optionally close others in the same list
            const parent = item.parentElement;
            if (parent) {
                const siblings = parent.querySelectorAll('li, .grid-item');
                siblings.forEach(sibling => {
                    if (sibling !== item) sibling.classList.remove('active');
                });
            }
        });
    });
}

/**
 * Global Components Injection (Header & Footer)
 */
function initGlobalComponents() {
    const header = document.querySelector('#main-header');
    const footer = document.querySelector('#main-footer');
    
    // Check if we are in the pages directory to adjust paths
    const isInPages = window.location.pathname.includes('/pages/');
    const pathPrefix = isInPages ? '../' : '';

    if (header) {
        header.innerHTML = `
            <div class="container">
                <nav class="nav-container">
                    <div class="nav-left">
                        <a href="${pathPrefix}index.html" class="logo nav-logo" style="text-decoration: none;">
                            <svg class="logo-icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"></path></svg>
                            <span class="logo-text nav-logo-text">VELORA</span>
                        </a>
                    </div>
                    
                    <div class="nav-menu" id="nav-menu">
                        <div class="nav-menu-header mobile-only">
                            <a href="${pathPrefix}index.html" class="logo nav-logo" style="text-decoration: none;">
                                <svg class="logo-icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"></path></svg>
                                <span class="logo-text nav-logo-text">VELORA</span>
                            </a>
                            <button id="nav-close" class="nav-close-btn" aria-label="Close Menu">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>

                        <ul class="nav-links-container">
                            <li><a href="${pathPrefix}index.html" class="nav-link">Home V1</a></li>
                            <li><a href="${pathPrefix}home2.html" class="nav-link">Home V2</a></li>
                            <li><a href="${pathPrefix}pages/about.html" class="nav-link">About</a></li>
                            <li><a href="${pathPrefix}pages/services.html" class="nav-link">Services</a></li>
                            <li><a href="${pathPrefix}pages/pricing.html" class="nav-link">Pricing</a></li>
                            <li><a href="${pathPrefix}pages/contact.html" class="nav-link">Contact</a></li>
                            <li><a href="${pathPrefix}pages/dashboard.html" class="nav-link">Dashboard</a></li>
                            
                            <!-- Combined Menu Controls -->
                            <li class="menu-divider"></li>
                            <li class="menu-control-item">
                                <button id="theme-toggle-mobile" class="control-btn" aria-label="Toggle Theme">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon-icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                    <span>Dark Mode</span>
                                </button>
                            </li>
                            <li class="menu-control-item">
                                <button id="rtl-toggle-mobile" class="control-btn" aria-label="Toggle RTL">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="rtl-icon"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                                    <span>RTL Mode</span>
                                </button>
                            </li>
                            <li class="menu-login-item">
                                <a href="${pathPrefix}pages/login.html" class="mobile-login-btn">Login</a>
                            </li>
                        </ul>
                    </div>

                    <div class="nav-actions">
                        <button id="rtl-toggle-desktop" class="btn-rtl desktop-only" aria-label="Toggle RTL">RTL</button>
                        <button id="theme-toggle" class="btn-theme desktop-only" aria-label="Toggle Theme">
                            <svg class="sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                        </button>
                        <a href="${pathPrefix}pages/login.html" class="nav-link action-login desktop-only">LOGIN</a>
                        <button class="nav-toggle" id="nav-toggle" aria-label="Toggle Menu">
                            <svg class="hamburger-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                                <line x1="4" y1="6" x2="20" y2="6" class="line-top"></line>
                                <line x1="4" y1="12" x2="20" y2="12" class="line-mid"></line>
                                <line x1="4" y1="18" x2="20" y2="18" class="line-bottom"></line>
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>
        `;

        // Active Link Detection Refined
        const currentPath = window.location.pathname;
        const pageName = currentPath.split('/').pop() || 'index.html';
        
        const navLinks = header.querySelectorAll('.nav-link, .dropdown-link');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href || href === '#') return;
            
            const linkPage = href.split('/').pop();
            
            if (pageName === linkPage) {
                link.classList.add('active');
                
                // If it's a dropdown link, also highlight the parent
                const parentDropdown = link.closest('.nav-item')?.querySelector('.dropdown-toggle');
                if (parentDropdown) parentDropdown.classList.add('active');
            }
        });
    }

    if (footer) {
        footer.innerHTML = `
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-brand">
                        <a href="${pathPrefix}index.html" class="logo nav-logo" style="text-decoration: none; margin-bottom: var(--space-4); justify-content: flex-start;">
                            <svg class="logo-icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"></path></svg>
                            <span class="logo-text nav-logo-text">VELORA</span>
                        </a>
                        <p>The world's most discreet lifestyle infrastructure for the global elite. Elevating management to an art form.</p>
                        <div class="footer-social">
                            <a href="#" class="social-icon" aria-label="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="#" class="social-icon" aria-label="LinkedIn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="#" class="social-icon" aria-label="X">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
                            </a>
                            <a href="#" class="social-icon" aria-label="WhatsApp">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div class="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="${pathPrefix}pages/about.html">About</a></li>
                            <li><a href="${pathPrefix}pages/contact.html">Contact</a></li>
                            <li><a href="${pathPrefix}pages/services.html">Services</a></li>
                            <li><a href="${pathPrefix}pages/dashboard.html">Dashboard</a></li>
                        </ul>
                    </div>
                    <div class="footer-links">
                        <h4>Explore</h4>
                        <ul>
                            <li><a href="${pathPrefix}index.html">Home V1</a></li>
                            <li><a href="${pathPrefix}home2.html">Home V2</a></li>
                            <li><a href="${pathPrefix}pages/pricing.html">Pricing</a></li>
                            <li><a href="${pathPrefix}pages/404.html">404 Error</a></li>
                            <li><a href="${pathPrefix}pages/coming-soon.html">Coming Soon</a></li>
                        </ul>
                    </div>
                    <div class="footer-links">
                        <h4>NEWSLETTER</h4>
                        <p style="font-size: 13px; opacity: 0.6; margin-bottom: 20px;">Join the whisper network for elite operational updates.</p>
                        <form class="newsletter-form">
                            <input type="email" class="newsletter-input" placeholder="Secure Email">
                            <button type="submit" class="newsletter-btn">→</button>
                        </form>
                        <p style="font-size: 11px; opacity: 0.4; margin-top: 20px; letter-spacing: 0.5px; text-transform: uppercase; font-weight: 700;">Vetted by world-class standards. Secured with absolute discretion.</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} VELORA CONCIERGE GROUP. ALL RIGHTS RESERVED.</p>
                    <div class="footer-policy">
                        <a href="#">DISCRETION POLICY</a> | <a href="#">TERMS OF ACCESS</a>
                    </div>
                </div>
            </div>
        `;
    }
}

/**
 * Initialize Theme (Dark/Light Mode)
 */
function initTheme() {
    const themeToggles = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
    const body = document.body;
    
    // Check if the page has a hardcoded theme class or a saved preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(savedTheme + '-mode');
    }
    
    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            }
        });
    });
}

/**
 * Mobile Navigation Logic
 */
function initNavigation() {
    const navToggle = document.querySelector('#nav-toggle');
    const navClose = document.querySelector('#nav-close');
    const navMenu = document.querySelector('#nav-menu');
    const navLinks = document.querySelectorAll('.nav-links-container .nav-link');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('active');
            navToggle.classList.add('active');
        });
    }

    if (navClose && navMenu) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    }

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

/**
 * Initialize RTL Mode
 */
function initRTL() {
    const rtlToggles = document.querySelectorAll('#rtl-toggle-mobile, #rtl-toggle-desktop');
    const body = document.body;
    
    function updateRTLText() {
        const desktopToggle = document.querySelector('#rtl-toggle-desktop');
        if (desktopToggle) {
            desktopToggle.textContent = document.documentElement.dir === 'rtl' ? 'LTR' : 'RTL';
        }
    }
    
    const savedRTL = localStorage.getItem('rtl') === 'true';
    if (savedRTL) {
        document.documentElement.setAttribute('dir', 'rtl');
        body.classList.add('rtl');
    }
    
    // Initial text update
    updateRTLText();

    rtlToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            if (document.documentElement.dir === 'rtl') {
                document.documentElement.removeAttribute('dir');
                body.classList.remove('rtl');
                localStorage.setItem('rtl', 'false');
            } else {
                document.documentElement.setAttribute('dir', 'rtl');
                body.classList.add('rtl');
                localStorage.setItem('rtl', 'true');
            }
            updateRTLText();
        });
    });
}

/**
 * Scroll Effects
 */
function initScrollEffects() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}
/**
 * Home V2 Service Spotlight Interaction
 */
function initSpotlight() {
    const spotlightItems = document.querySelectorAll('.spotlight-item');
    const mainImage = document.querySelector('#spotlight-main-image');

    if (spotlightItems.length > 0 && mainImage) {
        spotlightItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                // Remove active class from all
                spotlightItems.forEach(i => i.classList.remove('active'));
                
                // Add to current
                item.classList.add('active');
                
                // Trigger visual shimmer effect
                mainImage.style.transform = 'rotateY(5deg) scale(1.02)';
                setTimeout(() => {
                    mainImage.style.transform = 'rotateY(-5deg) scale(1)';
                }, 400);
            });
        });
    }
}

/**
 * Dashboard HUD Interactions (Clock & Telemetry)
 */
function initDashboardHUD() {
    const clocks = document.querySelectorAll('.c-time');
    if (clocks.length === 0) return;

    function updateClocks() {
        clocks.forEach(clock => {
            const timezone = clock.getAttribute('data-timezone');
            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-GB', { 
                timeZone: timezone, 
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit',
                hour12: false 
            });
            clock.textContent = timeStr;
        });
    }

    setInterval(updateClocks, 1000);
    updateClocks();
}

/**
 * Animated Counters for Operational Metrics
 */
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (counters.length === 0) return;

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const goal = parseInt(target.getAttribute('data-target'));
                let current = 0;
                const increment = goal / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= goal) {
                        target.textContent = goal;
                        clearInterval(timer);
                    } else {
                        target.textContent = Math.ceil(current);
                    }
                }, 30);
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}
