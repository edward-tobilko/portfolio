// Custom scripts

// // Change color of nav links for scroll
// const changeColorLinks = (root) => {
//   const nav = root.querySelector(".header__nav");

//   root.querySelectorAll(".observe").forEach((s) => {
//     new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           nav
//             .querySelectorAll("a")
//             .forEach((link) => link.classList.remove("active"));
//           let id = entry.target.getAttribute("id");
//           nav.querySelector(`a[href="#${id}"]`).classList.add("active");
//         }
//       });
//     }, {}).observe(s);
//   });
// };
// changeColorLinks(document.querySelector("#main"));
