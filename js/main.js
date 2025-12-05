// Parallax background interactions
(function () {
    const topLayer = document.querySelector('.parallax-top');
    const tileLayer = document.querySelector('.parallax-tile');
    const bottomLayer = document.querySelector('.parallax-bottom');

    if (!topLayer || !tileLayer || !bottomLayer) return;

    function onScroll() {
        const scrollY = window.scrollY || window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? scrollY / docHeight : 0;

        // Move the top and tile layers at slightly different speeds
        const topOffset = scrollY * 1.26;
        const tileOffset = scrollY * 1.27;

        topLayer.style.transform = `translateY(${topOffset * -0.2}px)`;
        tileLayer.style.backgroundPosition = `center ${tileOffset * -0.1}px`;

        // Fade and slide the bottom image in as we near the bottom of the page
        const startReveal = 0.76; // when bottom image starts appearing
        const endReveal = 1.0;   // fully visible at bottom
        let t = (progress - startReveal) / (endReveal - startReveal);
        t = Math.min(1, Math.max(0, t));

        const translateY = 50 * (1 - t); // slide up slightly
        bottomLayer.style.opacity = t;
        //bottomLayer.style.transform = `translateY(${translateY}px)`;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
})();

// Toggle references section
(function () {
    const toggleBtn = document.getElementById('toggleReferences');
    const referencesSection = document.getElementById('referencesSection');
    
    if (!toggleBtn || !referencesSection) return;
    
    toggleBtn.addEventListener('click', function() {
        const isHidden = referencesSection.style.display === 'none' || 
                         getComputedStyle(referencesSection).display === 'none';
        
        if (isHidden) {
            referencesSection.style.display = 'block';
            toggleBtn.textContent = 'Hide References';
        } else {
            referencesSection.style.display = 'none';
            toggleBtn.textContent = 'Show References';
        }
    });
})();

