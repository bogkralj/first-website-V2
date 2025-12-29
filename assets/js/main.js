document.addEventListener("DOMContentLoaded", () => {
    /* ===========================
       MOBILE MENU
    ============================ */
    window.toggleMobileMenu = function () {
        const mobileNav = document.getElementById("mobileNav");
        const body = document.body;

        if (!mobileNav) {
            return console.error("mobileNav manjka v HTML!");
        }

        mobileNav.classList.toggle("active");

        if (mobileNav.classList.contains("active")) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "";
        }
    };

    /* ===========================
       CTA DROPDOWN
    ============================ */
    window.toggleDropdown = function () {
        const dropdown = document.getElementById("ctaDropdown");
        if (dropdown) dropdown.classList.toggle("active");
    };

    document.addEventListener("click", (event) => {
        const dropdown = document.getElementById("ctaDropdown");
        const button = document.querySelector(".cta-button");
        if (!dropdown || !button) return;

        if (!dropdown.contains(event.target) && !button.contains(event.target)) {
            dropdown.classList.remove("active");
        }
    });

    /* ===========================
       MODAL – NAROČI STORITEV
    ============================ */
    const modal = document.getElementById("serviceModal");

    window.openModal = function () {
        if (modal) modal.classList.add("active");
    };

    window.closeModal = function () {
        if (modal) modal.classList.remove("active");
    };

    document.addEventListener("click", (event) => {
        if (event.target === modal) window.closeModal();
    });

    /* ===========================
       HEADER SCROLL CLASS
    ============================ */
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (!header) return;

        if (window.scrollY > 50) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
    });

    /* ===========================
       FORME – SUBMIT HANDLERJI
    ============================ */
    window.handleServiceSubmit = function (event) {
        event.preventDefault();
        alert("Hvala! Vaše povpraševanje je bilo poslano.");
        window.closeModal();
        event.target.reset();
    };

    window.handleContactSubmit = function (event) {
        event.preventDefault();
        alert("Hvala! Vaše sporočilo je bilo poslano.");
        event.target.reset();
    };

    /* ===========================
       COOKIE BANNER
    ============================ */
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("cookie-accept");

    if (banner && acceptBtn) {
        if (localStorage.getItem("cookieAccepted") === "yes") {
            banner.style.display = "none";
        }

        acceptBtn.addEventListener("click", () => {
            localStorage.setItem("cookieAccepted", "yes");
            banner.style.display = "none";
        });
    }

    /* ===========================
       INFINITE BRAND SCROLLER
    ============================ */
    const scroller = document.querySelector(".brand-scroller");
    const track = document.querySelector(".brand-track");

    if (scroller && track) {
        // podvojimo elemente, da imamo dovolj za loop
        const items = Array.from(track.children);
        items.forEach((item) => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });

        let offset = 0;
        const speed = 40; // px na sekundo
        let lastTime = null;
        let paused = false;

        // pause na hover
        scroller.addEventListener("mouseenter", () => (paused = true));
        scroller.addEventListener("mouseleave", () => (paused = false));

        const gapValue = parseFloat(getComputedStyle(track).gap || "0");

        function step(timestamp) {
            if (!lastTime) lastTime = timestamp;
            const dt = (timestamp - lastTime) / 1000;
            lastTime = timestamp;

            if (!paused) {
                offset -= speed * dt;

                const firstItem = track.children[0];
                const firstWidth = firstItem.getBoundingClientRect().width;

                // ko prvi element zapusti levo stran, ga prestavimo na konec
                if (Math.abs(offset) > firstWidth + gapValue) {
                    track.appendChild(firstItem);
                    offset += firstWidth + gapValue;
                }

                track.style.transform = `translateX(${offset}px)`;
            }

            requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
    }
});
