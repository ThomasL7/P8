document.addEventListener("DOMContentLoaded", () => {
  const divs = document.querySelectorAll("#skills li div");
  const hoverDelay = 500;

  divs.forEach((div) => {
    let isHovering = false;
    let timeoutToLeave;

    div.addEventListener("mouseenter", () => {
      isHovering = true;
      clearTimeout(timeoutToLeave);
      if (div.classList.contains("skills-items-outro-anim")) {
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
          // Supposons que vous avez un élément div avec un ID 'myDiv'

          // Obtenez la valeur de la propriété transform
          const currentTransform = getComputedStyle(div).transform;
          let yPosition;
          // Vérifiez si la transformation est une matrice 2D
          if (currentTransform.startsWith("matrix(")) {
            // Extrayez les valeurs de la matrice 2D
            const matrixValues = currentTransform.match(/matrix\(([^)]+)\)/)[1].split(", ");

            // La valeur f est la sixième valeur dans la matrice 2D
            yPosition = parseFloat(matrixValues[5]);

            // console.log("Position en Y:", yPosition);
            document.documentElement.style.setProperty("--item-y-position", `${yPosition}px`);
          } else if (currentTransform.startsWith("matrix3d(")) {
            // Extrayez les valeurs de la matrice 3D
            const matrixValues = currentTransform.match(/matrix3d\(([^)]+)\)/)[1].split(", ");

            // La valeur f est la quatorzième valeur dans la matrice 3D
            yPosition = parseFloat(matrixValues[13]);

            // console.log("Position en Y:", yPosition);
            // document.documentElement.style.setProperty("--item-y-position", `${yPosition}px`);
          } else {
            console.log("La transformation n'est ni une matrice 2D ni une matrice 3D.");
          }
          // div.setAttribute("data-y-position", yPosition);
          // Retirer l'animation de base
          div.classList.remove("skills-items-anim");
          // div.style.transition = "transform 6s ease-in-out";
          // div.classList.add("skills-items-outro-anim");
          // setTimeout(() => {
          //   div.style.transform = "translateY(0)";
          // }, 0);
          // div.style.transform = `translateY(${yPosition}px)`;

          // Utiliser setTimeout pour appliquer la transition
          setTimeout(() => {
            div.style.transition = "transform 5s ease-out";
            div.style.transform = "translateY(0)";
          }, 0);
        }, hoverDelay);
      }
    });
  });
});
