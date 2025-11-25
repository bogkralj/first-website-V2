
        // Toggle dropdown
        function toggleDropdown() {
            document.getElementById('ctaDropdown').classList.toggle('active');
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            const dropdown = document.getElementById('ctaDropdown');
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove('active');
            }
        });

        // Toggle mobile menu
        function toggleMobileMenu() {
            document.getElementById('mobileNav').classList.toggle('active');
        }

        // Modal functions
        function openModal() {
            document.getElementById('serviceModal').classList.add('active');
        }

        function closeModal() {
            document.getElementById('serviceModal').classList.remove('active');
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('serviceModal');
            if (event.target == modal) {
                closeModal();
            }
        }

        // Form submissions
        function handleServiceSubmit(event) {
            event.preventDefault();
            alert('Hvala! Vaše povpraševanje je bilo poslano. Kontaktirali vas bomo v najkrajšem možnem času.');
            closeModal();
            event.target.reset();
        }

        function handleContactSubmit(event) {
            event.preventDefault();
            alert('Hvala! Vaše sporočilo je bilo poslano. Kontaktirali vas bomo v najkrajšem možnem času.');
            event.target.reset();
        }
        window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});