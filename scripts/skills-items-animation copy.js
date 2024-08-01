document.addEventListener("DOMContentLoaded", () => {
  const divs = document.querySelectorAll("#skills li div");
  const hoverDelay = 1000;

  divs.forEach((div) => {
    let isHovering = false;
    let timeoutToLeave;

    div.addEventListener("mouseenter", () => {
      isHovering = true;
      clearTimeout(timeoutToLeave);
      if (!div.classList.contains("skills-items-outro-anim")) {
        div.classList.remove("skills-items-outro-anim");
      }
      if (!div.classList.contains("skills-items-anim")) {
        div.classList.add("skills-items-anim");
      }
    });

    div.addEventListener("mouseleave", () => {
      isHovering = false;
      if (isHovering === false) {
        timeoutToLeave = setTimeout(() => {
          div.style.transform = getComputedStyle(div).transform;
          // const currentTransform = getComputedStyle(div).transform;
          // div.style.transform = currentTransform;

          // Retirer l'animation de base
          div.classList.remove("skills-items-anim");
          // div.style.transition = "transform 6s ease-in-out";
          div.classList.add("skills-items-outro-anim");
          // setTimeout(() => {
          //   div.style.transform = "translateY(0)";
          // }, 0);
        }, hoverDelay);
      }
    });
  });
});
