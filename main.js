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

    const searchModal = document.getElementById('search-modal');
    const searchToggle = document.getElementById('search-toggle');
    const searchToggleMobile = document.getElementById('search-toggle-mobile');
    const searchOverlay = document.getElementById('search-overlay');
    const searchClose = document.getElementById('search-close');
    const searchInput = document.getElementById('search-input');

    const openSearchModal = () => {
        searchModal.classList.add('is-visible');
        searchInput.focus();
    };

    const closeSearchModal = () => {
        searchModal.classList.remove('is-visible');
        searchInput.value = '';
        document.getElementById('search-results').innerHTML = '';
    };

    if (searchModal) {
        searchToggle.addEventListener('click', openSearchModal);
        searchToggleMobile.addEventListener('click', openSearchModal);
        searchOverlay.addEventListener('click', closeSearchModal);
        searchClose.addEventListener('click', closeSearchModal);
    }

    const allDestinations = [
        {
            name: "Ubud",
            description: "Pusat budaya, sawah terasering, dan hutan kera.",
            image: "https://images.unsplash.com/photo-1729673767346-b9970ff56599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVYnVkJTIwcmljZSUyMHRlcnJhY2VzfGVufDF8fHx8MTc2MTEzNDM0NHww&ixlib.rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
            name: "Nusa Penida",
            description: "Pulau eksotis dengan tebing dramatis dan pantai Kelingking.",
            image: "https://images.unsplash.com/photo-1672153919629-a9fc42869e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOdXNhJTIwUGVuaWRhJTIwYmVhY2h8ZW58MXx8fHwxNzYxMTM0MzQ0fDA&ixlib.rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
            name: "Uluwatu",
            description: "Pura di atas tebing, pemandangan matahari terbenam, dan tari Kecak.",
            image: "https://images.unsplash.com/photo-1604842937136-1648761a6256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVbHV3YXR1JTIwdGVtcGxlJTIwQmFsaXxlbnwxfHx8fDE3NjExMzQzNDV8MA&ixlib.rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
            name: "Seminyak",
            description: "Area resort mewah, butik kelas atas, dan kehidupan malam.",
            image: "https://images.unsplash.com/photo-1717501787981-d5f28eb2df5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTZW1pbnlhayUyMGJlYWNoJTIwQmFsaXxlbnwxfHx8fDE3NjExMzQzNDR8MA&ixlib.rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        {
            name: "Kuta",
            description: "Pantai populer untuk berselancar, terkenal dengan kehidupan malam.",
            image: "https://images.unsplash.com/photo-1510007552857-ac1da038abf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        },
        {
            name: "Canggu",
            description: "Area trendi dengan kafe, selancar, dan suasana santai.",
            image: "https://images.unsplash.com/photo-1547447134-e4418f5c69bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        }
    ];

    const searchResultsContainer = document.getElementById('search-results');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        searchResultsContainer.innerHTML = '';

        if (searchTerm.length < 2) {
            searchResultsContainer.innerHTML = '';
            return;
        }

        const filteredDestinations = allDestinations.filter(dest =>
            dest.name.toLowerCase().includes(searchTerm) ||
            dest.description.toLowerCase().includes(searchTerm)
        );

        if (filteredDestinations.length > 0) {
            filteredDestinations.forEach(dest => {
                const resultItem = document.createElement('a');
                resultItem.href = '#';
                resultItem.classList.add('flex', 'items-center', 'p-4', 'hover:bg-gray-100', 'transition', 'duration-150');
                resultItem.innerHTML = `
                    <img src="${dest.image}" alt="${dest.name}" class="w-16 h-16 object-cover rounded-lg mr-4">
                    <div>
                        <p class="font-semibold text-gray-900">${dest.name}</p>
                        <p class="text-sm text-gray-600">${dest.description}</p>
                    </div>
                `;
                // Menutup modal saat hasil di-klik
                resultItem.addEventListener('click', (e) => {
                    e.preventDefault();
                    closeSearchModal();
                });
                searchResultsContainer.appendChild(resultItem);
            });
        } else {
            searchResultsContainer.innerHTML = `<p class="p-4 text-gray-500">Tidak ada destinasi yang ditemukan untuk "${searchTerm}"</p>`;
        }
    });

    const planContent = {
        standard: [
            {
                src: "https://images.unsplash.com/photo-1604842937136-1648761a6256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVbHV3YXR1JTIwdGVtcGxlJTIwQmFsaXxlbnwxfHx8fDE3NjExMzQzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                alt: "Uluwatu Temple"
            },
            {
                src: "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpJTIwd2F0ZXJmYWxsfGVufDF8fHx8MTc2MTEzNDM0NXww&ixlib.rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                alt: "Bali Waterfall"
            },
            {
                src: "https://images.unsplash.com/photo-1755077005329-13ce030aa794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpJTIwdHJhZGl0aW9uYWwlMjBkYW5jZXxlbnwxfHx8fDE3NjExMzQzNDl8MA&ixlib.rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                alt: "Traditional Dance"
            }
        ],
        family: [
            {
                src: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                alt: "Bali Safari and Marine Park"
            },
            {
                src: "https://images.unsplash.com/photo-1610098410214-964c9ec32e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                alt: "Monkey Forest Ubud"
            },
            {
                src: "https://images.unsplash.com/photo-1555465080-606d1f0533a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                alt: "Family at the beach"
            }
        ],
        premium: [
            {
                src: "https://images.unsplash.com/photo-1559933036-e8265003631b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                alt: "Private Villa Pool"
            },
            {
                src: "https://images.unsplash.com/photo-1642868504628-7886ebd6f17d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpJTIwb2NlYW4lMjBibHVlfGVufDF8fHx8MTc2MTEzNDM0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                alt: "Snorkeling Trip"
            },
            {
                src: "https://images.unsplash.com/photo-1547394333-a268155d1a58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                alt: "Fine Dining in Seminyak"
            }
        ],
        vip: [
            {
                src: "https://images.unsplash.com/photo-1620027600322-6869c629538a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                alt: "Luxury Yacht Charter"
            },
            {
                src: "https://images.unsplash.com/photo-1531731113554-15c10d831518?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                alt: "Private Beach Yoga"
            },
            {
                src: "https://images.unsplash.com/photo-1612373596417-f874b034d0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpJTIwaXNsYW5kJTIwY2xpZmZ8ZW58MXx8fHwxNzYxMTM0MzUwfDA&ixlib.rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                alt: "Helicopter Tour"
            }
        ]
    };

    const planButtons = document.querySelectorAll('.plan-button');
    const contentGrid = document.getElementById('plan-content-grid');

    if (planButtons.length > 0 && contentGrid) {
        planButtons.forEach(button => {
            button.addEventListener('click', () => {
                const selectedPlan = button.dataset.plan;

                planButtons.forEach(btn => {
                    btn.classList.remove('bg-black', 'text-white');
                    btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
                });
                button.classList.add('bg-black', 'text-white');
                button.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');

                contentGrid.innerHTML = '';

                const newContent = planContent[selectedPlan];

                if (newContent) {
                    newContent.forEach((item, index) => {
                        const card = document.createElement('div');
                        card.classList.add('aspect-[4/3]', 'rounded-2xl', 'overflow-hidden', 'animate-on-scroll');
                        card.style.transitionDelay = `${index * 100}ms`;

                        card.innerHTML = `
                            <img src="${item.src}"
                                 alt="${item.alt}"
                                 class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                        `;
                        contentGrid.appendChild(card);
                        observer.observe(card);
                    });
                }
            });
        });
    }
});