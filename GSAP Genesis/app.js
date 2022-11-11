const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: "power1.out" },
});

tl.fromTo(
  ".cookie-container",
  { scale: 0 },
  { scale: 1, ease: "elastic.out(1, 0.5)", duration: 1.5 }
);
tl.fromTo(
  ".cookie",
  { opacity: 0, x: -20, rotation: "-45deg" },
  { x: 0, opacity: 1, rotation: "0deg" },
  "<50%"
);
tl.fromTo(".text", { opacity: 0, x: 30 }, { x: 0, opacity: 1 }, "<");

// COOKIE JUMP
tl.fromTo(
  ".cookie",
  { y: 0, rotation: "0deg" },
  { y: -20, rotation: "-20deg", yoyo: true, repeat: -1 }
);

//CRUMBS JUMP
tl.fromTo(
  "#crumbs",
  { y: 0, rotation: "0deg" },
  { y: -20, rotation: "-20deg", yoyo: true, repeat: -1 },
  "<"
);

// FADING COOKIE OUT
const button = document.querySelector("button");
button.addEventListener("click", () => {
  gsap.to(".cookie-container", { opacity: 0, y: 100, duration: 0.75 });
});
