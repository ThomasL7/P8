document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("#skills li");
  const hoverDelay = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--skills-item-animation-time")) * 1000;
  const textSpeed = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--info-bubble-text-speed"));
  const bubbleWidthValue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--info-bubble-width")) / 100;
  let bubbleWidth = window.innerWidth * bubbleWidthValue;
  let maxBubbleWidth = window.innerWidth * bubbleWidthValue;
  const bubbleMarginRight = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bubble-margin-right"));
  const bubbleOffsetX = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bubble-offset-x"));
  const bubbleOffsetY = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bubble-offset-y"));

  let previousAnimatedItem = null;
  let previousParent = null;

  window.addEventListener("resize", () => {
    bubbleWidth = window.innerWidth * bubbleWidthValue;
    maxBubbleWidth = window.innerWidth * bubbleWidthValue;
  });

  // *** Functions ***
  // Adding bubble
  function displayBubble(item, infoBubble, infoBubbleText) {
    infoBubble.style.display = "block";
    infoBubble.classList.add("info-bubble-anim");
    animateText(infoBubble, infoBubbleText);

    // Determine if bubble should be on left or right side
    const itemSize = item.getBoundingClientRect();
    const spaceRight = window.innerWidth - itemSize.right;
    if (spaceRight >= bubbleWidth + bubbleOffsetX + bubbleMarginRight) {
      infoBubble.style.top = `${bubbleOffsetY}px`;
      infoBubble.style.left = `${itemSize.width + bubbleOffsetX}px`;
    } else {
      infoBubble.style.top = `${bubbleOffsetY}px`;
      infoBubble.style.right = `${itemSize.width + bubbleOffsetX}px`;
    }
  }

  // Reset Bubble
  function resetBubble(infoBubble) {
    clearInterval(infoBubble.dataset.animationTextID);
    infoBubble.style.display = "none";
    infoBubble.innerHTML = "";
    infoBubble.classList.remove("info-bubble-anim");
  }

  // Animation
  function animateText(infoBubble, bubbleText) {
    let indexChar = 0;
    infoBubble.style.width = "unset";
    infoBubble.style.whiteSpace = "nowrap";
    const animationTextBubble = setInterval(() => {
      if (indexChar < bubbleText.length) {
        infoBubble.innerHTML += bubbleText.charAt(indexChar);
        indexChar++;
        const bubbleSize = infoBubble.getBoundingClientRect();
        if (bubbleSize.width >= maxBubbleWidth) {
          infoBubble.style.width = "15vw";
          infoBubble.style.whiteSpace = "normal";
        }
      } else {
        clearInterval(animationTextBubble);
      }
    }, textSpeed);
    infoBubble.dataset.animationTextID = animationTextBubble;
  }

  // *** Events ***
  items.forEach((item) => {
    let isHovering = false;
    let leavingItem = true;
    let timeoutToLeave;
    const div = item.querySelector("div");
    const infoBubble = document.createElement("div");
    infoBubble.classList.add("info-bubble");
    item.appendChild(infoBubble);
    const infoBubbleText = item.getAttribute("data-info-bubble");

    // => Entering trigger
    div.addEventListener("mouseenter", () => {
      isHovering = true;

      // Fixing z-index tree
      if (previousAnimatedItem !== item) {
        let parent = div.parentElement.parentElement.parentElement;
        if (previousParent !== null && previousParent !== parent) {
          previousParent.classList.remove("front-z-index");
        }
        if (previousParent !== parent) {
          parent.classList.add("front-z-index");
          previousParent = parent;
        }
      }

      // Remove bubble from previous item if different item is hover
      if (previousAnimatedItem !== item && previousAnimatedItem !== null) {
        resetBubble(previousAnimatedItem.querySelector(".info-bubble"));
      }

      // If leaving and hover the same item, reset leaving timer
      if (previousAnimatedItem === item) {
        clearTimeout(timeoutToLeave);
      }

      // Adding bubble
      if (previousAnimatedItem !== item || leavingItem) {
        leavingItem = false;
        displayBubble(item, infoBubble, infoBubbleText);
        previousAnimatedItem = item;
      }
    });

    // => Leaving trigger
    div.addEventListener("mouseleave", () => {
      isHovering = false;
      timeoutToLeave = setTimeout(() => {
        if (!isHovering) {
          leavingItem = true;
          resetBubble(infoBubble);
        }
      }, hoverDelay);
    });
  });
});
