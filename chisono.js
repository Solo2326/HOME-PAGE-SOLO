gsap.from("h2, p", { // Tolto chisono.html per correggere l'errore
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: "#chi-sono", // ID della sezione
        start: "top center",
        end: "bottom center",
        scrub: true, 
    }
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("h2, p, .skill-list").forEach((elem) => { // Tolto chisono.html per correggere l'errore
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

gsap.from(".parallax-image", {  // Tolto chisono.html per correggere l'errore
    opacity: 0,
    x: -50,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".parallax-image", // Classe dell'immagine
        start: "top center+=100",
        toggleActions: "play none none reverse"
    }
});
