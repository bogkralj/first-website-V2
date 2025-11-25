
document.addEventListener("DOMContentLoaded", () => {
    // --------------------------------------------------------
    // 1. MOBILE MENU LOGIC (PRESTIGE VERSION)
    // --------------------------------------------------------
    window.toggleMobileMenu = function() {
        const mobileNav = document.getElementById('mobileNav');
        const body = document.body;

        if (!mobileNav) {
            console.error("Napaka: Elementa s ID-jem 'mobileNav' ni v HTML-ju.");
            return;
        }

        // Preverimo, ali je meni že odprt
        const isActive = mobileNav.classList.contains('active');

        if (isActive) {
            // ZAPIRANJE
            mobileNav.classList.remove('active');
            body.style.overflow = ''; // Povrnemo scrollanje
        } else {
            // ODPIRANJE
            mobileNav.classList.add('active');
            body.style.overflow = 'hidden'; // Zaklenemo scrollanje
        }
    };

    // --------------------------------------------------------
    // 2. DROPDOWN LOGIC
    // --------------------------------------------------------
    window.toggleDropdown = function() {
        const dropdown = document.getElementById('ctaDropdown');
        if (dropdown) {
            dropdown.classList.toggle('active');
        }
    };

    // Zapri dropdown, če kliknemo drugam
    document.addEventListener('click', function(event) {
        const dropdown = document.getElementById('ctaDropdown');
        const button = document.querySelector('.cta-button');
        
        // Če dropdown obstaja in klik NI bil na gumbu ali v dropdownu
        if (dropdown && button && !dropdown.contains(event.target) && !button.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });

    // --------------------------------------------------------
    // 3. MODAL LOGIC
    // --------------------------------------------------------
    window.openModal = function() {
        const modal = document.getElementById('serviceModal');
        if (modal) modal.classList.add('active');
    };

    window.closeModal = function() {
        const modal = document.getElementById('serviceModal');
        if (modal) modal.classList.remove('active');
    };

    // Zapri modal s klikom na ozadje
    window.onclick = function(event) {
        const modal = document.getElementById('serviceModal');
        if (event.target === modal) {
            window.closeModal();
        }
    };

    // --------------------------------------------------------
    // 4. HEADER SCROLL EFFECT (Glassmorphism trigger)
    // --------------------------------------------------------
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }
    });

    // --------------------------------------------------------
    // 5. FORM SUBMISSION HANDLERS
    // --------------------------------------------------------
    window.handleServiceSubmit = function(event) {
        event.preventDefault();
        alert('Hvala! Vaše povpraševanje je bilo poslano. Kontaktirali vas bomo v najkrajšem možnem času.');
        window.closeModal();
        event.target.reset();
    };

    window.handleContactSubmit = function(event) {
        event.preventDefault();
        alert('Hvala! Vaše sporočilo je bilo poslano. Kontaktirali vas bomo v najkrajšem možnem času.');
        event.target.reset();
    };
});