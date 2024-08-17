document.addEventListener(
  "wheel",
  function (event) {
    if (event.ctrlKey) {
      event.preventDefault();
    }
  },
  { passive: false }
);

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && (event.key === "+" || event.key === "-" || event.key === "=")) {
    event.preventDefault();
  }
});

// document.addEventListener("gesturestart", function (event) {
//   event.preventDefault();
// });

// document.addEventListener("gesturechange", function (event) {
//   event.preventDefault();
// });

document.addEventListener(
  "touchmove",
  function (event) {
    event.preventDefault();
  },
  { passive: false }
);

// document.addEventListener("gestureend", function (event) {
//   event.preventDefault();
// });
