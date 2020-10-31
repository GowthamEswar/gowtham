const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".ringOne", { x: "50%", duration: 2, delay: 3 });
tl.to(".ringTwo", { x: "50%", duration: 2, delay: 0.5 });
tl.to(".loader2ringOne", { y: "-300%", duration: 2 });
tl.to(".loader2ringTwo", { y: "-300%", duration: 2, delay: 0.5 });
tl.to(".loading-screen", { top: "-110%", duration: 2, delay: 0.5 });