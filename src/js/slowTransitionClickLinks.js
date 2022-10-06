// Slow transition when clicking on links
const links = document.querySelectorAll('a[href*="#"]');

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const blockID = link.getAttribute("href").substring(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
