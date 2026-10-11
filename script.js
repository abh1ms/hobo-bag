// Mock data for hobo bags
const products = [
    {
        id: 1,
        name: "Wanderlust Hobo",
        price: 1500,
        description: "A spacious hobo bag made from premium leather with a bohemian fringe detail.",
        image: "https://static.zara.net/assets/public/3f64/8c7e/397e4fddb9a5/a7e5d6bf3619/13318820700-e1/13318820700-e1.jpg?ts=1783433906440&w=938",
        category: "leather"
    },
    {
        id: 2,
        name: "Nomad's Companion",
        price: 900,
        description: "Canvas hobo bag with adjustable strap and multiple interior pockets.",
        image: "https://static.zara.net/assets/public/298b/0dfe/cdaf42e39afb/4c7e79ada27f/13312820800-e1/13312820800-e1.jpg?ts=1783433911553&w=938",
        category: "canvas"
    },
    {
        id: 3,
        name: "Boho Chic Hobo",
        price: 1200,
        description: "Suede hobo bag with embroidered floral pattern and tassel accents.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc43POt9mudTDmmk29nfa9mytc9p8guqIcNPgCGEZR4A&s=10",
        category: "suede"
    },
    {
        id: 4,
        name: "Slouchy Hobo Bag",
        price: 900,
        description: "Large capacity hobo bag perfect for travel with zip-top closure.",
        image: "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301072638001_1.jpg?v=1787746930",
        category: "leather"
    },
    {
        id: 5,
        name: "Artisan's Hobo",
        price: 700,
        description: "Handwoven jute hobo bag with leather trim and magnetic snap closure.",
        image: "https://shop.westside.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0266%2F6276%2F4597%2Ffiles%2F301086110001_1_800x.jpg%3Fv%3D1791354162&w=3840&q=75",
        category: "jute"
    },
    {
        id: 6,
        name: "City Explorer",
        price: 1100,
        description: "Compact hobo bag for urban adventures with RFID blocking pocket.",
        image: "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301086102001_1_6d6ec2d8-1f37-489c-8093-04d16e3c04fd_800x.jpg?v=1791354054&width=700&height=933&crop=center",
        category: "leather"
    },
    {
        id: 7,
        name: "Desert Drifter",
        price: 1800,
        description: "Distressed leather hobo bag with carved buckle detailing and interior zip pocket.",
        image: "https://media.landmarkshops.in/cdn-cgi/image/h=730,w=540,q=85,fit=cover/max-new/1000016600498-Brown-TAN-1000016600498_01-2100.jpg",
        category: "leather"
    },
    {
        id: 8,
        name: "Sunset Weaver",
        price: 1300,
        description: "Straw and leather blend hobo bag with tasseled strap and magnetic closure.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0RNqjdkmMaSFelDzH-zfdUe9wC42uXx8L8uj-tmtcGw&s",
        category: "straw"
    },
    {
        id: 9,
        name: "Midnight Nomad",
        price: 1600,
        description: "Black suede hobo bag with silver chain strap and embossed logo detailing.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhD1NFCKrfDXpb_rGMR4bxdV7kEiu5kbQOVv_FTJhY5U5M08jJco2T8-ze&s=10",
        category: "suede"
    },
    {
        id: 10,
        name: "Bazaar Beauty",
        price: 950,
        description: "Patchwork fabric hobo bag with mirror work embroidery and tassel corners.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0RNqjdkmMaSFelDzH-zfdUe9wC42uXx8L8uj-tmtcGw&s",
        category: "fabric"
    },
    {
        id: 11,
        name: "Coastal Drifter",
        price: 1150,
        description: "Rope-handled canvas hobo bag with nautical stripes and water-resistant coating.",
        image: "https://thestruttstore.com/cdn/shop/files/Artboard11_702717a8-7831-4dd9-ad23-ce1b82efdb11.png?v=1776421449&width=600",
        category: "canvas"
    },
    {
        id: 12,
        name: "Artisan's Journey",
        price: 850,
        description: "Braided leather hobo bag with wooden bead accents and interior slip pocket.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-J0Dy1qCkp83V1B9PQzJ09reM6xsfLPYZZYoJ0WnNA&s",
        category: "leather"
    },
    {
        id: 13,
        name: "Zen Garden",
        price: 1400,
        description: "Linen hobo bag with bamboo handles and minimalist geometric print.",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSc25FV_FO3YkCVKYy1wZ-l_0T3UjgfOFN-mIU6w1epn0VInMSNBHvK2Y_W4otRyI4uHXdmWpyv3lTZYqAy7su1fH31FQRdGcAMyr0n8aQJUw2lDQUpvcXw4ro2gecgCgyCeyvLv_sc&usqp=CAc",
        category: "linen"
    },
    {
        id: 14,
        name: "Festival Fringe",
        price: 750,
        description: "Suede hobo bag with multi-color fringe detailing and braided strap.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNh2V1d1Mmzi12a9FH4kIV-ZvDb7H-hBTf8c-cVbqO3A&s=10",
        category: "suede"
    },
    {
        id: 15,
        name: "Voyageur's Mate",
        price: 1900,
        description: "Full-grain leather hobo bag with antique brass hardware and detachable pouch.",
        image: "https://i5.walmartimages.com/seo/Zendure-Hand-woven-Soft-Large-Straw-Shoulder-Bag-Boho-Straw-Handle-Tote-Retro-Summer-Beach-Bag-Rattan-Handbag-Khaki_9abe0b64-4b66-4b96-aab3-aa4deb26124d.581579516b4ef1d6eaf5c4ada239bbac.jpeg",
        category: "leather"
    }
];

// Cart state
let cart = [];

// DOM elements
const productGrid = document.getElementById('product-grid');
const sortSelect = document.getElementById('sort');
const cartLink = document.querySelector('a[href="#cart"]');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
    renderCart();

    // Event listeners
    sortSelect.addEventListener('change', handleSort);

    // Cart event listeners
    const clearButton = document.querySelector('.btn-clear');
    const checkoutButton = document.querySelector('.btn-checkout');

    if (clearButton) {
        clearButton.addEventListener('click', clearCart);
    }

    if (checkoutButton) {
        checkoutButton.addEventListener('click', proceedToCheckout);
    }

    // Checkout form listener
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckoutSubmit);
    }
});

// Render products to the grid
function renderProducts() {
    // Sort products based on selected option
    const sortedProducts = [...products].sort((a, b) => {
        const sortValue = sortSelect.value;
        if (sortValue === 'price-low') return a.price - b.price;
        if (sortValue === 'price-high') return b.price - a.price;
        if (sortValue === 'name') return a.name.localeCompare(b.name);
        return 0; // default order
    });

    productGrid.innerHTML = '';

    sortedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">₹${product.price.toFixed(2)}</p>
                <p class="product-description">${product.description}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    // Add event listeners to add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Handle sorting
function handleSort() {
    renderProducts();
}

// Add to cart functionality
function addToCart(event) {
    const productId = parseInt(event.target.dataset.id);
    const product = products.find(p => p.id === productId);

    if (product) {
        // Check if product already in cart
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        updateCartCount();
        renderCart();
        showNotification(`${product.name} added to cart!`);
    }
}

// Update cart count in the nav
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartLink.textContent = `Cart (${totalItems})`;
    // Also update the data-count attribute for the cart indicator
    cartLink.setAttribute('data-count', totalItems);
}

// Update order summary in cart
function updateOrderSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 0 : 0; // Free shipping
    const total = subtotal + shipping;

    // Update DOM elements
    const subtotalElement = document.getElementById('cart-subtotal');
    const shippingElement = document.getElementById('cart-shipping');
    const totalElement = document.getElementById('cart-total');

    if (subtotalElement) subtotalElement.textContent = `₹${subtotal.toFixed(2)}`;
    if (shippingElement) shippingElement.textContent = shipping > 0 ? `₹${shipping.toFixed(2)}` : 'Free';
    if (totalElement) totalElement.textContent = `₹${total.toFixed(2)}`;
}

// Render cart items in the cart section
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSummary = document.getElementById('cart-summary');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        // Hide summary when cart is empty
        if (cartSummary) cartSummary.style.display = 'none';
        return;
    }

    // Show summary when cart has items
    if (cartSummary) cartSummary.style.display = 'block';

    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="cart-item-price">₹${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="qty-decrease" data-id="${item.id}">-</button>
                <span class="qty">${item.quantity}</span>
                <button class="qty-increase" data-id="${item.id}">+</button>
            </div>
            <p class="cart-item-total">₹${(item.price * item.quantity).toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(cartItemElement);
    });

    // Add event listeners for quantity buttons
    document.querySelectorAll('.qty-decrease').forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });
    document.querySelectorAll('.qty-increase').forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });

    // Update order summary
    updateOrderSummary();
}

// Decrease quantity of item in cart
function decreaseQuantity(event) {
    const productId = parseInt(event.target.dataset.id);
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            // Remove item if quantity becomes 0
            cart = cart.filter(item => item.id !== productId);
        }
        updateCartCount();
        renderCart();
        showNotification(`${item.name} quantity decreased`);
    }
}

// Increase quantity of item in cart
function increaseQuantity(event) {
    const productId = parseInt(event.target.dataset.id);
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += 1;
        updateCartCount();
        renderCart();
        showNotification(`${item.name} quantity increased`);
    }
}

// Show a simple notification
function showNotification(message) {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#8b5e3c';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '4px';
    notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    notification.style.zIndex = '1000';

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Clear cart
function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        updateCartCount();
        renderCart();
        showNotification('Cart cleared');
    }
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty');
        return;
    }

    // Hide cart section, show checkout section
    document.getElementById('cart').style.display = 'none';
    document.getElementById('checkout').style.display = 'block';

    // Update checkout summary
    updateCheckoutSummary();

    // Initialize payment method toggle
    initializePaymentMethod();
}

// Update checkout summary
function updateCheckoutSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 0; // Free shipping
    const total = subtotal + shipping;

    // Update DOM elements
    const subtotalElement = document.getElementById('checkout-subtotal');
    const shippingElement = document.getElementById('checkout-shipping');
    const totalElement = document.getElementById('checkout-total');
    const checkoutItems = document.getElementById('checkout-items');

    if (subtotalElement) subtotalElement.textContent = `₹${subtotal.toFixed(2)}`;
    if (shippingElement) shippingElement.textContent = shipping > 0 ? `₹${shipping.toFixed(2)}` : 'Free';
    if (totalElement) totalElement.textContent = `₹${total.toFixed(2)}`;

    // Display cart items in checkout summary
    if (checkoutItems) {
        checkoutItems.innerHTML = '';
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'checkout-item';
            itemElement.innerHTML = `
                <div class="item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>₹${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
                <div class="item-total">
                    ₹${(item.price * item.quantity).toFixed(2)}
                </div>
            `;
            checkoutItems.appendChild(itemElement);
        });
    }
}

// Initialize payment method toggle
function initializePaymentMethod() {
    const paymentOptions = document.querySelectorAll('.payment-option input[name="payment-method"]');
    const cardDetails = document.getElementById('card-details');
    const upiQrCode = document.getElementById('upi-qr-code');

    paymentOptions.forEach(option => {
        option.addEventListener('change', () => {
            if (option.value === 'credit-card') {
                cardDetails.style.display = 'block';
                upiQrCode.style.display = 'none';
            } else if (option.value === 'upi') {
                cardDetails.style.display = 'none';
                upiQrCode.style.display = 'block';
                generateUPIQRCode();
            } else {
                cardDetails.style.display = 'none';
                upiQrCode.style.display = 'none';
            }
        });
    });

    // Set initial state
    const selectedOption = document.querySelector('.payment-option input[name="payment-method"]:checked');
    if (selectedOption && selectedOption.value === 'credit-card') {
        cardDetails.style.display = 'block';
        upiQrCode.style.display = 'none';
    } else if (selectedOption && selectedOption.value === 'upi') {
        cardDetails.style.display = 'none';
        upiQrCode.style.display = 'block';
        generateUPIQRCode();
    } else {
        cardDetails.style.display = 'none';
        upiQrCode.style.display = 'none';
    }

    // Add event listener for refresh QR code button
    const refreshButton = document.getElementById('refresh-qr-code');
    if (refreshButton) {
        refreshButton.addEventListener('click', generateUPIQRCode);
    }
}

// Generate UPI QR Code
function generateUPIQRCode() {
    // Generate random UPI ID or transaction reference
    const randomId = Math.floor(100000 + Math.random() * 900000); // 6-digit random number
    const upiId = `hoboboutique${randomId}@upi`;

    // Update UPI ID display
    const upiIdDisplay = document.getElementById('upi-id-display');
    if (upiIdDisplay) {
        upiIdDisplay.textContent = `UPI ID: ${upiId}`;
    }

    // In a real implementation, we would generate an actual QR code image
    // For now, we'll update the placeholder to show the UPI ID
    const qrPlaceholder = document.getElementById('qr-code-placeholder');
    if (qrPlaceholder) {
        qrPlaceholder.innerHTML = `
            <div class="qr-code-content">
                <div class="qr-code-text">${upiId}</div>
            </div>
        `;
    }

    showNotification('UPI QR code generated');
}

// Mobile menu toggle functionality
function initializeMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.main-nav ul');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            // Animate the hamburger to X
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });

        // Close menu when clicking a link
        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                // Reset hamburger animation
                const spans = menuToggle.querySelectorAll('span');
                spans.forEach(span => span.classList.remove('active'));
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navList.contains(e.target)) {
                navList.classList.remove('active');
                // Reset hamburger animation
                const spans = menuToggle.querySelectorAll('span');
                spans.forEach(span => span.classList.remove('active'));
            }
        });
    }
}

// Initialize mobile menu when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeMobileMenu();
});

// Handle checkout form submission
function handleCheckoutSubmit(event) {
    event.preventDefault();

    // Basic validation
    const form = event.target;
    let isValid = true;

    // Check required fields
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#ff0000';
        } else {
            field.style.borderColor = '#ddd';
        }
    });

    if (!isValid) {
        showNotification('Please fill in all required fields');
        return;
    }

    // Simulate order processing
    showNotification('Processing your order...');

    // In a real app, this would send data to a server
    setTimeout(() => {
        // Clear cart and show confirmation
        cart = [];
        updateCartCount();

        // Hide checkout, show thank you message
        document.getElementById('checkout').style.display = 'none';

        // Create thank you section
        const thankYouSection = document.createElement('section');
        thankYouSection.className = 'thank-you-section';
        thankYouSection.innerHTML = `
            <div class="thank-you-content">
                <h2>Thank You for Your Order!</h2>
                <p>Your order has been successfully placed.</p>
                <p>We'll send a confirmation email to ${form.email.value} shortly.</p>
                <a href="#home" class="btn btn-primary">Continue Shopping</a>
            </div>
        `;

        // Insert thank you section after checkout
        const checkoutSection = document.getElementById('checkout');
        checkoutSection.parentNode.insertBefore(thankYouSection, checkoutSection.nextSibling);

        // Add event listener to continue shopping button
        thankYouSection.querySelector('.btn').addEventListener('click', () => {
            thankYouSection.remove();
            document.getElementById('cart').style.display = 'block';
            renderCart();
        });
    }, 2000);
}

// Handle contact form submission
function handleContactSubmit(event) {
    event.preventDefault();

    // Get form values
    const name = event.target.elements[0].value;
    const email = event.target.elements[1].value;
    const message = event.target.elements[2].value;

    // Here you would typically send this to a server
    // For now, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`);

    // Reset form
    event.target.reset();
}

// Carousel functionality
function initializeCarousel() {
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = Array.from(carouselTrack.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const dotsNav = document.querySelector('.carousel-dots');
    const dots = Array.from(dotsNav.children);

    let currentIndex = 0;
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange slides next to each other
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    // Move to slide
    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    // Update dots
    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('active');
        targetDot.classList.add('active');
    };

    // Hide/show arrows
    const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
        if (targetIndex === 0) {
            prevButton.classList.add('is-hidden');
            nextButton.classList.remove('is-hidden');
        } else if (targetIndex === slides.length - 1) {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.add('is-hidden');
        } else {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.remove('is-hidden');
        }
    };

    // Click left
    prevButton.addEventListener('click', e => {
        const currentSlide = carouselTrack.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = dotsNav.querySelector('.active');
        const prevDot = currentDot.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide);

        moveToSlide(carouselTrack, currentSlide, prevSlide);
        updateDots(currentDot, prevDot);
        hideShowArrows(slides, prevButton, nextButton, prevIndex);
    });

    // Click right
    nextButton.addEventListener('click', e => {
        const currentSlide = carouselTrack.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        const currentDot = dotsNav.querySelector('.active');
        const nextDot = currentDot.nextElementSibling;
        const nextIndex = slides.findIndex(slide => slide === nextSlide);

        moveToSlide(carouselTrack, currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
        hideShowArrows(slides, prevButton, nextButton, nextIndex);
    });

    // Click nav dots
    dotsNav.addEventListener('click', e => {
        // What indicator was clicked on?
        const targetDot = e.target.closest('button');

        if (!targetDot) return;

        const currentSlide = carouselTrack.querySelector('.current-slide');
        const currentDot = dotsNav.querySelector('.active');
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        const targetSlide = slides[targetIndex];

        moveToSlide(carouselTrack, currentSlide, targetSlide);
        updateDots(currentDot, targetDot);
        hideShowArrows(slides, prevButton, nextButton, targetIndex);
    });

    // Initialize
    hideShowArrows(slides, prevButton, nextButton, 0);
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeCarousel();
});