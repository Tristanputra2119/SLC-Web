document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(0,0,0,0.9)';
            nav.style.backdropFilter = 'blur(16px)';
            nav.style.boxShadow = '0 2px 24px 0 rgba(0,0,0,0.2)';
        } else {
            nav.style.backgroundColor = 'transparent';
            nav.style.backdropFilter = 'none';
            nav.style.boxShadow = 'none';
        }
    });

    const heroBg = document.getElementById('hero-bg');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileIcon = document.getElementById('mobile-icon-menu');
    const closeIcon = document.getElementById('mobile-icon-close');

    mobileMenuBtn.addEventListener('click', () => {
        if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
            mobileMenu.style.display = 'flex';
            setTimeout(() => {
                mobileMenu.style.opacity = '1';
                mobileMenu.style.transform = 'translateY(0)';
            }, 10);
            mobileIcon.style.display = 'none';
            closeIcon.style.display = 'inline';
        } else {
            mobileMenu.style.opacity = '0';
            mobileMenu.style.transform = 'translateY(-80px)';
            mobileIcon.style.display = 'inline';
            closeIcon.style.display = 'none';
            setTimeout(() => {
                mobileMenu.style.display = 'none';
            }, 500);
        }
    });

    mobileMenu.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            mobileMenu.style.opacity = '0';
            mobileMenu.style.transform = 'translateY(-40px)';
            mobileIcon.style.display = 'inline';
            closeIcon.style.display = 'none';
            setTimeout(() => {
                mobileMenu.style.display = 'none';
            }, 500);
        });
    });

    document.querySelectorAll('[data-scroll-to]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = el.dataset.scrollTo;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.style.opacity = 0;
                setTimeout(() => {
                    mobileMenu.classList.add('hidden', 'opacity-0');
                    mobileMenu.classList.remove('flex');
                    mobileIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                }, 300);
            }
        });
    });

    function animateInView() {
        document.querySelectorAll('[data-animate]').forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top < windowHeight - 100) {
                el.style.transition = 'all 0.8s cubic-bezier(0.4,0,0.2,1)';
                el.style.opacity = 1;
                el.style.transform = 'none';
                if (el.dataset.animate === 'width-in') {
                    el.style.width = el.dataset.widthTo || '100px';
                }
            }
        });
    }
    window.addEventListener('scroll', animateInView);
    window.addEventListener('DOMContentLoaded', () => {
        nav.style.transform = 'translateY(0)';
        nav.style.transition = 'transform 1s cubic-bezier(0.4,0,0.2,1)';
        const heroContent = document.getElementById('hero-content');
        heroContent.style.opacity = 1;
        heroContent.style.transform = 'translateY(0)';
        heroContent.style.transition = 'all 1.2s cubic-bezier(0.4,0,0.2,1) 0.5s';
        const heroDivider = document.getElementById('hero-divider');
        heroDivider.style.width = '100px';
        heroDivider.style.transition = 'width 1s cubic-bezier(0.4,0,0.2,1) 1.2s';
        animateInView();
    });

    document.getElementById('current-year').textContent = new Date().getFullYear();
});