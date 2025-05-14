// Common intersection animations using Intersection Observer

// Helper function to create an observer
function createIntersectionObserver(elements, setupFn, animateFn, options = {}) {
    // Set initial state
    elements.forEach(setupFn);

    // Create the intersection observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                // When element enters viewport
                if (entry.isIntersecting) {
                    // Add a slight delay based on element index for staggered effect
                    setTimeout(() => {
                        animateFn(entry.target);
                    }, index * 100); // 100ms delay between each element

                    // Stop observing once animation is triggered
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            root: null, // Use viewport as root
            rootMargin: '0px',
            threshold: 0.1, // Trigger when 10% of the element is visible
            ...options
        },
    );

    // Start observing each element
    elements.forEach((element) => {
        observer.observe(element);
    });
}

// 1. Fade-up animation (original)
export function initFadeUpAnimation() {
    const elements = document.querySelectorAll('.fade-up-card');

    createIntersectionObserver(
        elements,
        (element) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        },
        (element) => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    );
}

// 2. Fade-in animation (appears in place)
export function initFadeInAnimation() {
    const elements = document.querySelectorAll('.fade-in-element');

    createIntersectionObserver(
        elements,
        (element) => {
            element.style.opacity = '0';
            element.style.transition = 'opacity 0.8s ease-out';
        },
        (element) => {
            element.style.opacity = '1';
        }
    );
}

// 3. Slide-in animation from left
export function initSlideInLeftAnimation() {
    const elements = document.querySelectorAll('.slide-in-left');

    createIntersectionObserver(
        elements,
        (element) => {
            element.style.opacity = '0';
            element.style.transform = 'translateX(-50px)';
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        },
        (element) => {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        }
    );
}

// 4. Slide-in animation from right
export function initSlideInRightAnimation() {
    const elements = document.querySelectorAll('.slide-in-right');

    createIntersectionObserver(
        elements,
        (element) => {
            element.style.opacity = '0';
            element.style.transform = 'translateX(50px)';
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        },
        (element) => {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        }
    );
}

// 5. Scale animation (grows from smaller size)
export function initScaleAnimation() {
    const elements = document.querySelectorAll('.scale-in');

    createIntersectionObserver(
        elements,
        (element) => {
            element.style.opacity = '0';
            element.style.transform = 'scale(0.8)';
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        },
        (element) => {
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
        }
    );
}

// 6. Rotate animation (rotates into view)
export function initRotateAnimation() {
    const elements = document.querySelectorAll('.rotate-in');

    createIntersectionObserver(
        elements,
        (element) => {
            element.style.opacity = '0';
            element.style.transform = 'rotate(-10deg) scale(0.9)';
            element.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
        },
        (element) => {
            element.style.opacity = '1';
            element.style.transform = 'rotate(0deg) scale(1)';
        }
    );
}

// Export default function that initializes all animations
export default function initAllAnimations() {
    initFadeUpAnimation();
    initFadeInAnimation();
    initSlideInLeftAnimation();
    initSlideInRightAnimation();
    initScaleAnimation();
    initRotateAnimation();
}
