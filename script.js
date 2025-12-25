document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Navigation Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('is-active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('is-active');
            navMenu.classList.remove('active');
        });
    });


    // --- Dynamic Product Card Generation ---

    const dressesGrid = document.getElementById('dresses-grid');
    const shirtsGrid = document.getElementById('shirts-grid');
    const ITEM_PRICE = 200;

    // Function to create HTML structure for a product card
    function createProductCard(type, index) {
        const card = document.createElement('div');
        card.classList.add('product-card');

        // Keep track of item number for display
        const itemNumber = index + 1;
        const productTitle = `${type.charAt(0).toUpperCase() + type.slice(1)} Style #${itemNumber}`;

        /* IMPORTANT: This is where you will eventually put real images.
           Currently, it creates a gray placeholder div.
           To use real images, delete the line below and uncomment the <img> line next to it.
        */
        const imagePlaceholder = `<div class="image-container"><img src="images/image_${type}_${itemNumber}.jpeg" alt="${productTitle}"></div>`;
        // const realImage = `<div class="image-container"><img src="path/to/your/image_${type}_${itemNumber}.jpg" alt="${productTitle}"></div>`;


        card.innerHTML = `
            <span class="card-badge">New</span>
            ${imagePlaceholder} <div class="product-info">
                <h3 class="product-title">${productTitle}</h3>
                <div class="price-container">
                    <span class="price">Rs. ${ITEM_PRICE}</span>
                </div>
            
        `;

        return card;
    }

    // Generate 34 Dress Cards
    for (let i = 0; i < 35; i++) {
        dressesGrid.appendChild(createProductCard('dress', i));
    }

    // Generate 17 Shirt Cards
    for (let i = 0; i < 17; i++) {
        shirtsGrid.appendChild(createProductCard('shirt', i));
    }
    // --- Mobile Popup Logic ---
    const mobilePopup = document.getElementById('mobile-popup');
    const closePopupBtn = document.getElementById('close-popup-btn');

    // Check if screen width is less than 768px (Standard mobile width)
    if (window.innerWidth <= 768) {
        // Show the popup
        mobilePopup.style.display = 'flex';
        // Disable scrolling on the body while popup is open
        document.body.style.overflow = 'hidden';
    }

    // Close functionality
    closePopupBtn.addEventListener('click', () => {
        mobilePopup.style.display = 'none';
        // Re-enable scrolling
        document.body.style.overflow = 'auto';
    });
});