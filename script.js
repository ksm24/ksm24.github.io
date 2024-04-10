const blocks = document.querySelectorAll('.data-block');

const appearOptions = {
    threshold: 0
};

const appearOn = new IntersectionObserver(
    function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            appearOnScroll.unobserve(entry.target);
        });
    },
    appearOptions
);

blocks.forEach(block => {
    appearOn.observe(block);
});