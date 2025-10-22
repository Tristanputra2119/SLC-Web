document.addEventListener("DOMContentLoaded", () => {
    //anim fade in
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    //parallax effect
    const heroImage = document.getElementById('hero-image-parallax');
    function isElementInViewport(el) {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight && rect.bottom >= 0
        );
    }
    function handleScroll() {
        let scrollPos = window.scrollY;
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrollPos * 0.4}px)`;
        }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Navbar mobile slide animation
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
    });
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('open');
        });
    });

    // Parallax background for visit section
    window.addEventListener('scroll', () => {
        const bg = document.getElementById('visit-bg-parallax');
        if (bg) {
            const scrollY = window.scrollY;
            bg.style.transform = `translateY(${scrollY * 0.2}px)`;
        }
    });

    // Beach carousel
    const beachImages = [
        {
            src: "https://images.unsplash.com/photo-1672153919629-a9fc42869e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOdXNhJTIwUGVuaWRhJTIwYmVhY2h8ZW58MXx8fHwxNzYxMTM0MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            caption: "The most beautiful beaches on the island of Bali"
        },
        {
            src: "https://images.unsplash.com/photo-1618519370613-788d5baab49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpJTIwYmVhY2glMjBhZXJpYWx8ZW58MXx8fHwxNzYxMTM0MzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            caption: "Crystal clear water and white sand"
        },
        {
            src: "https://images.unsplash.com/photo-1729673767346-b9970ff56599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVYnVkJTIwcmljZSUyMHRlcnJhY2VzfGVufDF8fHx8MTc2MTEzNDM0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            caption: "Ubud rice terraces view"
        }
    ];
    let beachIndex = 0;
    const beachImg = document.getElementById('beach-img');
    const beachCaption = document.getElementById('beach-caption');
    const beachPrev = document.getElementById('beach-prev');
    const beachNext = document.getElementById('beach-next');
    function showBeach(idx, direction = 0) {
        beachImg.style.transition = 'none';
        beachImg.style.transform = `translateX(${direction * 100}%)`;
        setTimeout(() => {
            beachImg.src = beachImages[idx].src;
            beachCaption.textContent = beachImages[idx].caption;
            beachImg.style.transition = 'transform 0.5s cubic-bezier(.4,0,.2,1)';
            beachImg.style.transform = 'translateX(0)';
        }, 50);
    }
    beachPrev.addEventListener('click', () => {
        const prevIdx = (beachIndex - 1 + beachImages.length) % beachImages.length;
        showBeach(prevIdx, -1);
        beachIndex = prevIdx;
    });
    beachNext.addEventListener('click', () => {
        const nextIdx = (beachIndex + 1) % beachImages.length;
        showBeach(nextIdx, 1);
        beachIndex = nextIdx;
    });
});