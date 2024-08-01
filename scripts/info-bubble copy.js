document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("#skills li");

  items.forEach((item) => {
    const infoBubbleText = item.getAttribute("data-info-bubble");

    if (infoBubbleText) {
      const infoBubble = document.createElement("div");
      infoBubble.classList.add("info-bubble");
      item.appendChild(infoBubble);

      const div = item.querySelector("div");
      div.addEventListener("mouseenter", () => {
        infoBubble.style.display = "block";
        animateText(infoBubbleText);

        const rect = item.getBoundingClientRect();
        const spaceRight = window.innerWidth - rect.right;
        const spaceLeft = rect.left;

        if (spaceRight > spaceLeft) {
          infoBubble.style.left = `${rect.width + 10}px`;
          infoBubble.style.top = "0";
        } else {
          infoBubble.style.right = `${rect.width + 10}px`;
          infoBubble.style.top = "0";
        }
      });

      div.addEventListener("mouseleave", () => {
        infoBubble.style.display = "none";
        infoBubble.innerHTML = "";
      });

      function animateText(text) {
        infoBubble.innerHTML = "";
        let index = 0;
        const interval = setInterval(() => {
          if (index < text.length) {
            infoBubble.innerHTML += text.charAt(index);
            index++;
          } else {
            clearInterval(interval);
          }
        }, 100); // Ajustez la vitesse de l'animation ici
      }
    }
  });
});
