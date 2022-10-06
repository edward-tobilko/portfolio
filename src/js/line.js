// Line
const pathLine = document.querySelector(".path-line");
const pathLength = pathLine.getTotalLength();

pathLine.style.strokeDasharray = pathLength + " " + pathLength;
pathLine.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", () => {
  // What % down is it?
  let scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  // Length to offset the dashes
  let drawLength = pathLength * scrollPercentage;

  // Draw in reverse
  pathLine.style.strokeDashoffset = pathLength - drawLength;
});
