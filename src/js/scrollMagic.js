// ScroolMagic
const controller = new ScrollMagic.Controller();

const aboutMeScroll = new ScrollMagic.Scene({
  triggerElement: ".about__container",
  triggerHook: 0.7, // show trigger (up or down)
})
  .setClassToggle(".about__container-left-subtitle", "visible")
  .addTo(controller);

const contactMeScrollMail = new ScrollMagic.Scene({
  triggerElement: ".contact__container",
  triggerHook: 0.5, // show trigger (up or down)
})
  .setClassToggle(".contact__container-mail", "visible")
  .addTo(controller);

const contactMeScrollPhone = new ScrollMagic.Scene({
  triggerElement: ".contact__container",
  triggerHook: 0.5, // show trigger (up or down)
})
  .setClassToggle(".contact__container-phone", "visible")
  .addTo(controller);
