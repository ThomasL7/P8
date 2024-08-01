document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("#skills li");
  const hoverDelay = 3000;
  let previousAnimatedItem = null;

  items.forEach((item) => {
    const infoBubbleText = item.getAttribute("data-info-bubble");
    const infoBubble = document.createElement("div");
    infoBubble.classList.add("info-bubble");
    item.appendChild(infoBubble);

    let animationTextBubble;
    let timeoutToLeave;
    const div = item.querySelector("div");

    div.addEventListener("mouseenter", () => {
      clearTimeout(timeoutToLeave);

      if (previousAnimatedItem !== item && previousAnimatedItem !== null) {
        console.log("enter - different");
        clearInterval(animationTextBubble);
        const previousInfoBubble = previousAnimatedItem.querySelector(".info-bubble");
        previousInfoBubble.style.display = "none";
        previousInfoBubble.innerHTML = "";
      }

      if (previousAnimatedItem === item) {
        console.log("enter - same");
        // clearTimeout(timeoutToLeave);
      }

      if (previousAnimatedItem !== item) {
        console.log("enter - animation");
        clearInterval(animationTextBubble);
        infoBubble.innerHTML = "";
        infoBubble.style.display = "block";
        animateText(infoBubbleText);
        previousAnimatedItem = item;

        const itemSize = item.getBoundingClientRect();
        const bubbleWidth = window.innerWidth * 0.2;
        const bubbleOffset = -15;
        const bubbleMarginRight = 15;
        const spaceRight = window.innerWidth - itemSize.right;
        if (spaceRight >= bubbleWidth + bubbleOffset + bubbleMarginRight) {
          infoBubble.style.top = "0px";
          infoBubble.style.left = `${itemSize.width + bubbleOffset}px`;
        } else {
          infoBubble.style.top = "0px";
          infoBubble.style.right = `${itemSize.width + bubbleOffset}px`;
        }
      }
    });

    div.addEventListener("mouseleave", () => {
      timeoutToLeave = setTimeout(() => {
        console.log("leave");
        clearInterval(animationTextBubble);
        infoBubble.style.display = "none";
        infoBubble.innerHTML = "";
        previousAnimatedItem = null;
      }, hoverDelay);
    });

    function animateText(text) {
      let indexChar = 0;
      const maxWidth = window.innerWidth * 0.2;
      infoBubble.style.whiteSpace = "nowrap";
      infoBubble.style.width = "unset";
      const typingSpeed = Math.floor(Math.random() * (75 - 40 + 1)) + 40;
      animationTextBubble = setInterval(() => {
        if (indexChar < text.length) {
          infoBubble.innerHTML += text.charAt(indexChar);
          indexChar++;
          const bubbleSize = infoBubble.getBoundingClientRect();
          if (bubbleSize.width >= maxWidth) {
            infoBubble.style.width = "20vw";
            infoBubble.style.whiteSpace = "normal";
          }
        } else {
          clearInterval(animationTextBubble);
        }
      }, typingSpeed);
    }
  });
});
