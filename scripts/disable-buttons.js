document.addEventListener("DOMContentLoaded", () => {
  const buttonsSection = document.getElementById("buttons-section");

  buttonsSection.addEventListener("animationstart", (event) => {
    if (event.animationName === "banner-buttons") {
      buttonsSection.style.pointerEvents = "none";
      buttonsSection.style.cursor = "none";
    }
  });

  buttonsSection.addEventListener("animationend", (event) => {
    if (event.animationName === "banner-buttons") {
      buttonsSection.style.pointerEvents = "auto";
      buttonsSection.style.cursor = "pointer";
    }
  });
});
