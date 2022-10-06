// Works page
const worksSwiper = new Swiper(".works__swiper", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      origin: "left center",
      translate: ["-50%", 0, -200],
      rotate: [0, 100, 0],
    },
    next: {
      shadow: true,
      origin: "right center",
      translate: ["50%", 0, -200],
      rotate: [0, -100, 0],
    },
  },
});
