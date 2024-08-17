document.addEventListener("DOMContentLoaded", () => {
  const rootCSS = getComputedStyle(document.documentElement);
  // ==== DOM ====
  const headerTitle = document.querySelector("h1");
  const navLinks = document.querySelectorAll("nav a");
  const anchors = document.querySelectorAll(".anchors");
  const homeContactButton = document.getElementById("home-contact-button");
  // ==== Constants ====
  const headerAnimationDuration = parseFloat(rootCSS.getPropertyValue("--header-animation-duration")) * 1000;
  const maxIndexSlide = anchors.length - 1;
  const scrollDuration = parseInt(rootCSS.getPropertyValue("--delay-before-next-scroll"));
  //  ==== Booleans ====
  let isScrolling = false;
  // ==== Variables ====
  let indexSlide = 0;
  let previousIndexSlide = null;

  //*** Functions ****************************************************/
  function handleScroll(event) {
    if (window.isModalOpen) return;
    scrollToSlide(indexSlide, event.deltaY > 0 ? 1 : -1);
  }

  function handleKeyDown(event) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      if (isScrolling || window.isModalOpen || isFocusedOnInput()) return;
      scrollToSlide(indexSlide, event.key === "ArrowDown" ? 1 : -1);
    }
  }

  function isFocusedOnInput() {
    const activeElement = document.activeElement;
    return activeElement.tagName.toLowerCase() === "input" || activeElement.tagName.toLowerCase() === "textarea" || activeElement.tagName.toLowerCase() === "select";
  }

  /**  @param {Number} direction (optional) only for scroll or arrow keys*/
  function scrollToSlide(newIndexSlide, direction) {
    if (isScrolling) return;
    if (direction) {
      newIndexSlide += direction;
      newIndexSlide = Math.max(0, Math.min(newIndexSlide, maxIndexSlide));
    }
    if (newIndexSlide === indexSlide) return;
    isScrolling = true;
    previousIndexSlide = indexSlide;
    indexSlide = newIndexSlide;
    const scrollBehavior = Math.abs(indexSlide - previousIndexSlide) === 1 ? "smooth" : "auto";
    anchors[indexSlide].scrollIntoView({ behavior: scrollBehavior });
    window.dispatchEvent(new CustomEvent("indexSlideChanged", { detail: { previousIndexSlide, indexSlide } }));
    setTimeout(() => (isScrolling = false), scrollDuration);
  }

  function handleNavLinkClick(index) {
    if (index === indexSlide) return;
    scrollToSlide(index);
  }

  //*** Events ****************************************************/
  window.addEventListener("windowLoaded", function () {
    setTimeout(() => {
      window.addEventListener("wheel", handleScroll);
      window.addEventListener("keydown", handleKeyDown);
      navLinks.forEach((navLink, index) => {
        navLink.addEventListener("click", () => handleNavLinkClick(index));
      });
    }, headerAnimationDuration);
  });

  window.addEventListener("resize", () => {
    anchors[indexSlide].scrollIntoView({ behavior: "auto" });
  });

  headerTitle.addEventListener("click", () => {
    if (!window.isHeaderTitleAnimationEnded) return;
    scrollToSlide(1);
  });

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });

  homeContactButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (!window.isHomeButtonsAnimationEnded) return;
    scrollToSlide(4);
  });
});
