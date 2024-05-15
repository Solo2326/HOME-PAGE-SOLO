gsap.registerPlugin(ScrollTrigger);

// Animazione glitch di sfondo
gsap.to(".glitch-background", {
    duration: 5,
    ease: "none",
    backgroundPosition: "-200px 0", // Regola i valori per l'effetto glitch
    repeat: -1,
    yoyo: true
});

// Animazioni di testo
gsap.utils.toArray(".text-animation").forEach(elem => {
    gsap.from(elem, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: elem,
            start: "top center",
            end: "bottom center",
            scrub: true
        }
    });
});

// Animazione parallax
let parallaxTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#chi-sono",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

parallaxTl.fromTo(".parallax-image", { y: 0 }, { y: -50 }); 

// Animazioni hover sulle icone delle competenze
gsap.utils.toArray(".skill-list li").forEach(elem => {
    gsap.to(elem, {
        duration: 0.3,
        scale: 1.1,
        ease: "back.out(1.7)",
        paused: true,
        scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
});
