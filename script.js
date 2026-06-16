document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(
        ".skill-card, .project-card, .timeline-item, .highlight-bar, .cv-skill-card, .cv-timeline-item, .cv-info-card"
    );

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    cards.forEach(card => {
        card.classList.add("hidden");
        observer.observe(card);
    });

});