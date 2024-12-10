
var typed = new Typed(".text", {
    strings: ["MERN Stack Developer", "Web Developer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// timeline.js
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline-item");

    const isInViewport = (elem) => {
        const bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const run = () =>
        items.forEach((item) => {
            if (isInViewport(item)) {
                item.classList.add("show");
            }
        });

    // Events
    window.addEventListener("load", run);
    window.addEventListener("resize", run);
    window.addEventListener("scroll", run);
});


