import { getModalState } from "./modal-state.js";

document.addEventListener("DOMContentLoaded", () => {
  let index = 0;
  let previousIndex = null;
  const anchors = document.querySelectorAll(".anchor");
  const maxIndex = anchors.length - 1;
  let isScrolling;
  const headerAnimationTime = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-animation-time")) * 1000;
  // const headerTitleAnimationTime = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-title-animation-time")) * 1000;
  const scrollTimeOut = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--scroll-delay"));
  const navLinks = document.querySelectorAll("nav a");
  const contactLink = document.getElementById("contact-button");

  // Events listener (wheel + keyboard) for index and functions
  setTimeout(() => {
    window.addEventListener("wheel", (event) => {
      if (isScrolling || getModalState()) return;
      isScrolling = true;
      setTimeout(() => (isScrolling = false), scrollTimeOut);
      previousIndex = index;
      if (event.deltaY > 0) {
        index++;
      } else {
        index--;
      }
      if (index < 0) {
        index = 0;
        return;
      } else if (index > maxIndex) {
        index = maxIndex;
        return;
      }
      scrollToAnchor();
      setActiveNavLink();
      window.dispatchEvent(new CustomEvent("indexChanged", { detail: { index, previousIndex } }));
    });

    window.addEventListener("keydown", (event) => {
      if (isScrolling || getModalState()) return;
      isScrolling = true;
      setTimeout(() => (isScrolling = false), scrollTimeOut);
      if (document.activeElement.tagName.toLowerCase() === "input" || document.activeElement.tagName.toLowerCase() === "textarea" || document.activeElement.tagName.toLowerCase() === "select") {
        return;
      }
      previousIndex = index;
      if (event.key === "ArrowDown") {
        index++;
      } else if (event.key === "ArrowUp") {
        index--;
      }
      if (index < 0) {
        index = 0;
        return;
      }
      if (index > maxIndex) {
        index = maxIndex;
        return;
      }
      scrollToAnchor();
      setActiveNavLink();
      window.dispatchEvent(new CustomEvent("indexChanged", { detail: { index, previousIndex } }));
    });
  }, headerAnimationTime);

  // Resizing window reset to current anchor
  window.addEventListener("resize", function () {
    document.getElementById(anchors[index].id).scrollIntoView({ behavior: "auto" });
  });

  // Auto scroller to next anchor
  function scrollToAnchor() {
    document.getElementById(anchors[index].id).scrollIntoView({ behavior: "smooth" });
  }

  // Nav links + active class
  navLinks.forEach((link, index2) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });

    setTimeout(() => {
      link.addEventListener("click", () => {
        if (isScrolling) return;
        if (index2 !== index) {
          isScrolling = true;
          setTimeout(() => (isScrolling = false), scrollTimeOut);
          navLinks.forEach((link2) => link2.classList.remove("active"));
          link.classList.add("active");
          previousIndex = index;
          index = index2;
          if (previousIndex === index - 1 || previousIndex === index + 1) {
            document.getElementById(anchors[index].id).scrollIntoView({ behavior: "smooth" });
          } else {
            document.getElementById(anchors[index].id).scrollIntoView({ behavior: "auto" });
          }
          window.dispatchEvent(new CustomEvent("indexChanged", { detail: { index, previousIndex } }));
        }
      });
    }, headerAnimationTime);
  });

  function setActiveNavLink() {
    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  // Contact home banner button link
  contactLink.addEventListener("click", (event) => {
    event.preventDefault();
    if (isScrolling) return;
    isScrolling = true;
    setTimeout(() => (isScrolling = false), scrollTimeOut);
    previousIndex = 0;
    index = maxIndex;
    setActiveNavLink();
    document.getElementById(anchors[index].id).scrollIntoView({ behavior: "auto" });
    window.dispatchEvent(new CustomEvent("indexChanged", { detail: { index, previousIndex } }));
  });
});
