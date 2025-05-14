import './bootstrap';
import initAllAnimations from './fade-up-animation';

// Initialize all intersection animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initAllAnimations);

Alpine.data('MainNavScrollPeek', () => {
    return {
        scrollPosition: 0,
        isVisible: true,
        init() {
            window.addEventListener('scroll', () => {
                const currentPosition = window.scrollY || document.documentElement.scrollTop;
                this.isVisible = currentPosition <= 20 || currentPosition < this.scrollPosition;
                this.scrollPosition = currentPosition;
            });
        },
    };
});

(function (listenerName = 'app:scroll-to') {
    window.addEventListener(
        listenerName,
        (ev) => {
            ev.stopPropagation();
            const selector = ev?.detail?.query;
            if (!selector) return;
            const el = document.querySelector(selector);
            if (!el) return;
            try {
                el.scrollIntoView({
                    behavior: 'smooth',
                });
            } catch (error) {
                console.error('Error scrolling to element:', error);
            }
        },
        false,
    );
})();
