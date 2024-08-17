document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  let indexSlide;
  window.addEventListener("indexChanged", function (event) {
    indexSlide = event.detail.index;
  });
  // Mouse
  let mouseX = 0;
  let mouseY = 0;
  let scrollY = 1;
  let mouseYFinal;
  // Skills
  const items = document.querySelectorAll("#skills li");
  const hoverDelay = parseFloat(getComputedStyle(root).getPropertyValue("--skills-item-animation-duration")) * 1000;
  const textSpeed = parseInt(getComputedStyle(root).getPropertyValue("--info-bubble-text-speed"));
  const bubbleWidthValue = parseFloat(getComputedStyle(root).getPropertyValue("--info-bubble-width")) / 100;
  let bubbleWidth = window.innerWidth * bubbleWidthValue;
  let maxBubbleWidth = window.innerWidth * bubbleWidthValue;
  const bubbleMarginRight = parseInt(getComputedStyle(root).getPropertyValue("--bubble-margin-right"));
  const bubbleOffsetX = parseInt(getComputedStyle(root).getPropertyValue("--bubble-offset-x"));
  const bubbleOffsetY = parseInt(getComputedStyle(root).getPropertyValue("--bubble-offset-y"));
  let isHovering = false;
  let previousAnimatedItem = null;
  let previousParent = null;
  let timeoutToLeave;
  let parent = null;
  const durationEndingAnimation = parseInt(getComputedStyle(root).getPropertyValue("--skills-item-ending-animation-duration"));
  const maxHeightAnimation = parseInt(getComputedStyle(root).getPropertyValue("--skills-item-animation-height"));
  const endingAnimations = [];
  const textBubbleAnimations = [];
  // Exemples
  const articles = document.querySelectorAll("#gallery article");
  const examples = document.querySelectorAll(".examples-filter");
  let exampleBlockCollisions = [];
  const isOverExamples = [];

  //*** Capturing mouse position ****************************************************/
  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    mouseYFinal = mouseY + scrollY;
  });
  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;
    mouseYFinal = mouseY + scrollY;
  });

  //*** Blocks collision function for events ****************************************************/
  function createArrayOfBlocksCollision(target, array) {
    const blockCollision = target.getBoundingClientRect();
    const blockCollisionObject = {
      top: blockCollision.top,
      right: blockCollision.right,
      bottom: blockCollision.bottom,
      left: blockCollision.left,
    };
    array.push(blockCollisionObject);
  }
  function checkIfCursorOverTarget(target, letOver, onOverFunction, onLeaveFunction) {
    if (target) {
      const isCurrentlyOverBlock = mouseX >= target.left && mouseX <= target.right && mouseYFinal >= target.top && mouseYFinal <= target.bottom;
      if (isCurrentlyOverBlock && !letOver) {
        onOverFunction();
        letOver = true;
      } else if (!isCurrentlyOverBlock && letOver) {
        onLeaveFunction();
        letOver = false;
      }
    }
  }

  // Calcul of collision blocks
  window.onload = () => {
    // Examples
    examples.forEach((example, index) => {
      isOverExamples[index] = false;
      createArrayOfBlocksCollision(example, exampleBlockCollisions);
    });
  };
  window.addEventListener("resize", () => {
    // Mouse
    scrollY = window.scrollY;
    mouseYFinal = mouseY + scrollY;
    // Skills
    bubbleWidth = window.innerWidth * bubbleWidthValue;
    maxBubbleWidth = window.innerWidth * bubbleWidthValue;
    // Examples
    exampleBlockCollisions = [];
    examples.forEach((example) => {
      createArrayOfBlocksCollision(example, exampleBlockCollisions);
    });
  });

  //*** Events when collision with mousemove ****************************************************/
  // Examples
  examples.forEach((example, index) => {
    document.addEventListener("mousemove", () => {
      if (indexSlide === 3) {
        checkIfCursorOverTarget(
          exampleBlockCollisions[index],
          isOverExamples[index],
          () => {
            if (example.dataset.animState === "true") {
              example.classList.add("examples-filter-hover");
              isOverExamples[index] = true;
            }
          },
          () => {
            example.classList.remove("examples-filter-hover");
            isOverExamples[index] = false;
          }
        );
      }
    });
  });

  //*** Events after intro slide animations ****************************************************/
  // Examples
  articles.forEach((article, index) => {
    article.addEventListener("animationstart", (event) => {
      if (event.animationName === "examples-anim") {
        checkIfCursorOverTarget(
          exampleBlockCollisions[index],
          isOverExamples[index],
          () => {
            examples[index].classList.add("examples-filter-hover");
            isOverExamples[index] = true;
          },
          () => {}
        );
        examples[index].style.cursor = "pointer";
        examples[index].setAttribute("data-anim-state", "true");
      }
    });
  });

  //*** Skills animations + info bubbles ****************************************************/
  // Ending item animation
  function addEndingAnimation(div) {
    const currentTransform = getComputedStyle(div).transform;
    const matrixValues = currentTransform.match(/matrix\(([^)]+)\)/);

    if (matrixValues) {
      const yPosition = parseFloat(matrixValues[1].split(", ")[5]);
      div.classList.remove("skills-items-anim");
      const endingAnimation = div.animate([{ transform: `translateY(${yPosition}px)` }, { transform: "translateY(0)" }], {
        duration: durationEndingAnimation,
        easing: "linear",
      });
      endingAnimation.onfinish = () => {
        const target = endingAnimations.findIndex((item) => item.div === div);
        if (target !== -1) {
          endingAnimations.splice(target, 1);
        }
      };
      endingAnimations.push({ div, endingAnimation });
    }
  }

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
    const target = textBubbleAnimations.findIndex((item) => item.infoBubble === infoBubble);
    if (target !== -1) {
      clearInterval(textBubbleAnimations[target].textBubbleAnimation);
      textBubbleAnimations.splice(target, 1);
    }
    infoBubble.style.display = "none";
    infoBubble.innerHTML = "";
    infoBubble.classList.remove("info-bubble-anim");
  }

  // Animation
  function animateText(infoBubble, bubbleText) {
    let indexChar = 0;
    infoBubble.style.width = "unset";
    infoBubble.style.whiteSpace = "nowrap";
    const textBubbleAnimation = setInterval(() => {
      if (indexChar < bubbleText.length) {
        infoBubble.innerHTML += bubbleText.charAt(indexChar);
        indexChar++;
        const bubbleSize = infoBubble.getBoundingClientRect();
        if (bubbleSize.width >= maxBubbleWidth) {
          infoBubble.style.width = "15vw";
          infoBubble.style.whiteSpace = "normal";
        }
      } else {
        clearInterval(textBubbleAnimation);
        const target = textBubbleAnimations.findIndex((item) => item.infoBubble === infoBubble);
        if (target !== -1) {
          textBubbleAnimations.splice(target, 1);
        }
      }
    }, textSpeed);
    textBubbleAnimations.push({ infoBubble, textBubbleAnimation });
  }

  // *** Events ***
  items.forEach((item) => {
    const infoBubble = document.createElement("div");
    infoBubble.classList.add("info-bubble");
    item.appendChild(infoBubble);
    const infoBubbleText = item.getAttribute("data-info-bubble");
    const div = item.querySelector(".item-div");

    // => Entering trigger
    div.addEventListener("mouseenter", () => {
      isHovering = true;

      // If leaving and hover the same item, reset leaving timer
      if (previousAnimatedItem === item) {
        clearTimeout(timeoutToLeave);
      } else {
        // Cancel ending animation & add bounce animation
        const target = endingAnimations.findIndex((item) => item.div === div);
        if (target !== -1) {
          endingAnimations[target].endingAnimation.cancel();
          endingAnimations.splice(target, 1);
        }
        div.classList.add("skills-items-anim");

        // Fixing z-index tree for bubble info
        if (previousAnimatedItem !== item) {
          parent = div.parentElement.parentElement.parentElement;
          if (previousParent !== null && previousParent !== parent) {
            previousParent.classList.remove("front-z-index");
          }
          if (previousParent !== parent) {
            parent.classList.add("front-z-index");
            previousParent = parent;
          }
        }

        // Adding bubble
        displayBubble(item, infoBubble, infoBubbleText);

        // Reset previous item & add ending animation
        if (previousAnimatedItem !== item && previousAnimatedItem !== null) {
          resetBubble(previousAnimatedItem.querySelector(".info-bubble"));
          addEndingAnimation(previousAnimatedItem.querySelector("div"));
        }

        previousAnimatedItem = item;
      }
    });

    // => Leaving trigger
    div.addEventListener("mouseleave", () => {
      isHovering = false;
      timeoutToLeave = setTimeout(() => {
        if (!isHovering && previousAnimatedItem === item) {
          resetBubble(infoBubble);
          addEndingAnimation(div);
          previousAnimatedItem = null;
        }
      }, hoverDelay);
    });
  });
});
