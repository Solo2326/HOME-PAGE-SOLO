gsap.from("chisono.html h2, chisono.html p", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: "#chi-sono",
        start: "top center",
        end: "bottom center",
        scrub: true, 
    }
});
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("chisono.html h2, chisono.html p, chisono.html .skill-list").forEach((elem) => {
    gsap.from(elem, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: elem,
            start: "top center+=100",
            toggleActions: "play none none reverse"
        }
    });
});

gsap.from("chisono.html .parallax-image", {
    opacity: 0,
    x: -50,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "chisono.html .parallax-image",
        start: "top center+=100",
        toggleActions: "play none none reverse"
    }
});
