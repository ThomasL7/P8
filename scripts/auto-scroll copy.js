const headerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height"));
let isScrolling = false;

// Function for scrolling
function scrollPage(direction) {
  if (isScrolling) return;

  const heightToScroll = window.innerHeight - headerHeight;
  isScrolling = true;
  setTimeout(() => (isScrolling = false), 300);

  let scroll = direction === "down" ? heightToScroll : -heightToScroll;
  window.scrollBy({
    top: scroll,
    behavior: "smooth",
  });
}
// Listening events
window.addEventListener("wheel", (event) => {
  const direction = event.deltaY > 0 ? "down" : "up";
  scrollPage(direction);
});

window.addEventListener("keydown", (event) => {
  if (document.activeElement.tagName.toLowerCase() === "input" || document.activeElement.tagName.toLowerCase() === "textarea" || document.activeElement.tagName.toLowerCase() === "select") {
    return;
  }

  if (event.key === "ArrowDown") {
    scrollPage("down");
  } else if (event.key === "ArrowUp") {
    scrollPage("up");
  }
});
