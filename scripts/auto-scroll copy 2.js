document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  const anchors = document.querySelectorAll(".anchor");
  const maxIndex = anchors.length - 1;
  let isScrolling;
  const scrollTimeOut = 500;
  const navLinks = document.querySelectorAll("nav a");
  const contactLink = document.querySelector("#buttons-section a");
  const sections = document.querySelectorAll("section");

  // Events listener (wheel + keyboard) for index and functions
  window.addEventListener("wheel", (event) => {
    if (isScrolling) return;
    isScrolling = true;
    setTimeout(() => (isScrolling = false), scrollTimeOut);
    if (event.deltaY > 0) {
      index++;
    } else {
      index--;
    }
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;
    scrollToAnchor();
    setActiveNavLink();
    activeSection();
  });

  window.addEventListener("keydown", (event) => {
    if (isScrolling) return;
    isScrolling = true;
    setTimeout(() => (isScrolling = false), scrollTimeOut);
    if (document.activeElement.tagName.toLowerCase() === "input" || document.activeElement.tagName.toLowerCase() === "textarea" || document.activeElement.tagName.toLowerCase() === "select") {
      return;
    }
    if (event.key === "ArrowDown") {
      index++;
    } else if (event.key === "ArrowUp") {
      index--;
    }
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;
    scrollToAnchor();
    setActiveNavLink();
    activeSection();
  });

  // Resizing window reset to current anchor
  window.addEventListener("resize", function () {
    scrollToAnchor();
  });

  // Auto scroller
  function scrollToAnchor() {
    window.location.hash = `#${anchors[index].id}`;
  }

  // Active nav
  navLinks.forEach((link, index2) => {
    link.addEventListener("click", () => {
      if (isScrolling) return;
      isScrolling = true;
      setTimeout(() => (isScrolling = false), scrollTimeOut);
      navLinks.forEach((link2) => link2.classList.remove("active"));
      link.classList.add("active");
      index = index2;
      activeSection();
    });
  });

  function setActiveNavLink() {
    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  contactLink.addEventListener("click", () => {
    if (isScrolling) return;
    isScrolling = true;
    setTimeout(() => (isScrolling = false), scrollTimeOut);
    index = maxIndex;
    setActiveNavLink();
    activeSection();
  });

  // Set active-section class to trigger animations
  function activeSection() {
    sections.forEach((section) => section.classList.remove("active-section"));
    sections[index].classList.add("active-section");
  }
});
