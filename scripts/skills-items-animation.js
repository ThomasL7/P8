document.addEventListener("DOMContentLoaded", () => {
  const divs = document.querySelectorAll("#skills li div");
  const hoverDelay = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--skills-item-animation-time")) * 1000;

  divs.forEach((div) => {
    let isHovering = false;
    let timeoutToLeave;

    div.addEventListener("mouseenter", () => {
      isHovering = true;
      clearTimeout(timeoutToLeave);
      if (div.classList.contains("skills-items-end-anim")) {
        div.classList.remove("skills-items-end-anim");
      }
      if (!div.classList.contains("skills-items-anim")) {
        div.classList.add("skills-items-anim");
      }
    });

    div.addEventListener("mouseleave", () => {
      isHovering = false;
      timeoutToLeave = setTimeout(() => {
        if (!isHovering) {
          const currentTransform = getComputedStyle(div).transform;
          const matrixValues = currentTransform.match(/matrix\(([^)]+)\)/)[1].split(", ");
          const yPosition = parseFloat(matrixValues[5]);
          document.documentElement.style.setProperty("--item-y-position", `${yPosition}px`);

          div.classList.remove("skills-items-anim");
          div.classList.add("skills-items-end-anim");
        }
      }, hoverDelay);
    });
  });
});
