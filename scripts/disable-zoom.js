//*** Functions ****************************************************/
function disableZoom(event) {
  if (event.type === "wheel" && event.ctrlKey) {
    event.preventDefault();
  } else if (event.type === "keydown" && event.ctrlKey && (event.key === "+" || event.key === "-" || event.key === "=")) {
    event.preventDefault();
  }
}

//*** Events ****************************************************/
document.addEventListener("wheel", disableZoom, { passive: false });
document.addEventListener("keydown", disableZoom);
