gsap.registerPlugin(ScrollTrigger);

gsap.from("header", {
    x: -1000,
    opacity: 0,
    duration: 2
});

gsap.from(".banniere", {
   scale: 0.5,
   duration: 3,
   ease: "bounce.out"  
});

gsap.to(".cta", {
    delay: 2,
    scale: 1.1,
    repeat: -1, 
    yoyo: true
});


// Pour chaque élément avec la classe .scroll
document.querySelectorAll(".scroll").forEach((element) => {
	gsap.from(element, {
		y: 50,
		opacity: 0,
		duration: 1,
		scrollTrigger: {
			trigger: element,
			start: "top 80%", // Quand le haut de l'élément atteint 80% de la hauteur du viewport
			toggleActions: "play reset play reset" // Joue à chaque scroll
		},
	});
});


