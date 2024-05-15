gsap.from("#chi-sono h2, #chi-sono p", {
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
