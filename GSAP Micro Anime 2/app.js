const tl = gsap.timeline({
  defaults: { duration: 0.35, ease: "power2.easeOut" },
});

const home = document.querySelector(".home");
const notif = document.querySelector(".notifications");
const messages = document.querySelector(".messages");

gsap.set(".feather", { scale: 0, transformOrigin: "center" });
gsap.set(".roof", { transformOrigin: "center" });
home.addEventListener("click", () => {
  gsap.fromTo(".home-svg", { scale: 1 }, { scale: 0.9, yoyo: true, repeat: 1 });
  gsap.fromTo(
    ".roof",
    { y: 0, scale: 1 },
    { scale: 0.9, y: -3, yoyo: true, repeat: 1, ease: "bounce.out" }
  );
  gsap.fromTo(
    ".feather",
    { y: -5 },
    { y: 20, scale: 1.5, duration: 1, stagger: 0.2 }
  );
  gsap.fromTo(".right-feather", { x: 0 }, { x: 7 });
});

//Notif anime
gsap.set(".bell", { transformOrigin: "top center" });
gsap.set(".ringer", { transformOrigin: "top center" });
gsap.set(".wave", { opacity: 0, transformOrigin: "bottom" });
notif.addEventListener("click", () => {
  gsap.fromTo(
    ".bell",
    { rotation: -5 },
    { rotation: 0, duration: 2, ease: "elastic.out(5, 0.2)" }
  );
  gsap.fromTo(
    ".ringer",
    { rotation: -5, x: 0.5 },
    { rotation: 0, x: 0, duration: 2, ease: "elastic.out(5, 0.2)" }
  );
  gsap.fromTo(
    ".wave",
    { scale: 0, opacity: 1 },
    { scale: 1.3, opacity: 0, duration: 1 }
  );
});

//Messages
gsap.set(".flap", { transformOrigin: "top" });
messages.addEventListener("click", () => {
  tl.fromTo(".messages-svg", { scale: 1 }, { scale: 0.9 });
  tl.fromTo(".flap", { scale: 1 }, { scale: -1 }, "<50%");
  tl.fromTo(".messages-svg", { scale: 0.9 }, { scale: 1 });
  tl.fromTo(
    ".note",
    { y: 0, opacity: 1 },
    { y: -40, opacity: 0, duration: 0.7 }
  );
  tl.to(".flap", { scale: 1 }, "<60%");
});
