// Burger menu
const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");
const body = document.body;

// active burger and burger manu
if (menu && burger) {
  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active-burger");
    body.classList.toggle("locked");
  });

  // close burger manu when click beetwen block
  menu.addEventListener("click", (event) => {
    if (event.target.classList.contains("header__menu")) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });

  // close burger menu when click the link
  menu.querySelectorAll(".header__link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    });
  });
}
