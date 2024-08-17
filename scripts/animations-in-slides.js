document.addEventListener("DOMContentLoaded", () => {
  // ==== DOM ====
  const root = document.documentElement;
  const homeButtons = document.getElementById("home-buttons");
  const homeContactButton = document.getElementById("home-contact-button");
  const homeCVButton = document.getElementById("home-CV-button");
  const skillsTrees = document.querySelectorAll("#skills-trees > div");
  const skillsItems = document.querySelectorAll("#skills-trees li");
  const skillsItemsDivs = document.querySelectorAll(".skills-items-div");
  const infoBubblesArray = document.querySelectorAll(".info-bubbles");
  const examples = document.querySelectorAll("#examples-gallery article");
  const examplesDivs = document.querySelectorAll("#examples-gallery article > div");
  const examplesFilters = document.querySelectorAll(".examples-filters");
  // ==== Constants ====
  const bubbleMarginRight = parseInt(getComputedStyle(root).getPropertyValue("--bubble-margin-right"));
  const bubbleOffsetX = parseInt(getComputedStyle(root).getPropertyValue("--bubble-offset-x"));
  const bubbleOffsetY = parseInt(getComputedStyle(root).getPropertyValue("--bubble-offset-y"));
  const bubbleWidthValue = parseInt(getComputedStyle(root).getPropertyValue("--info-bubbles-width"));
  const infoBubbleTextsArray = window.infoBubblesDatas;
  const scrollDuration = parseInt(getComputedStyle(root).getPropertyValue("--delay-before-next-scroll"));
  const skillsEndingAnimationDuration = parseInt(getComputedStyle(root).getPropertyValue("--skills-item-ending-animation-duration"));
  const textSpeed = parseInt(getComputedStyle(root).getPropertyValue("--info-bubbles-text-speed"));
  // ==== Booleans ====
  window.isHomeButtonsAnimationEnded = false;
  let homeContactButtonHover = false;
  let homeCVButtonHover = false;
  // ==== Arrays of booleans ====
  window.isExampleParentAnimationEndedArray = new Array(examplesDivs.length).fill(false);
  let isOverExamplesArray = new Array(examplesDivs.length).fill(false);
  let isOverSkillArray = new Array(skillsItemsDivs.length).fill(false);
  let isSkillAnimatedArray = new Array(skillsItemsDivs.length).fill(false);
  // ==== Variables ====
  let indexSlide;
  let maxBubbleWidth = window.innerWidth * (bubbleWidthValue / 100);
  let mouseX = 0;
  let mouseY = 0;
  let mouseYFinal;
  let parentTree = null;
  let previousAnimatedItem = null;
  let previousParentTree = null;
  let scrollY = 0;
  // ==== Arrays ====
  window.isExampleParentAnimationEndedArray = new Array(examplesDivs.length).fill(false);
  let examplesBlocksCollisionsArray = [];
  let itemDivIndexInSkillsTree = [];
  let skillsBlocksCollisionsArray = [];
  let skillsEndingAnimationsArray = [];
  let textBubbleAnimationsArray = [];

  //*** Update mouse position when scrolling ****************************************************/
  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;
    mouseYFinal = mouseY + scrollY;
  });

  //*** Blocks collision function for events ****************************************************/
  function createArrayOfBlocksCollision(target, array, optionalScrollY) {
    const blockCollision = target.getBoundingClientRect();
    const blockCollisionObject = {
      top: blockCollision.top + (optionalScrollY || 0),
      right: blockCollision.right,
      bottom: blockCollision.bottom + (optionalScrollY || 0),
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

  //*** Calcul of collision blocks ****************************************************/
  window.addEventListener("windowLoaded", function () {
    // setTimeout(() => {
    // scrollY = window.scrollY;
    // mouseYFinal = mouseY + scrollY;

    // Skills
    skillsItemsDivs.forEach((skillsItemDiv) => {
      createArrayOfBlocksCollision(skillsItemDiv, skillsBlocksCollisionsArray);
      // createArrayOfBlocksCollision(skillsItemDiv, skillsBlocksCollisionsArray, scrollY);
    });

    // Examples
    examplesDivs.forEach((exampleDiv) => {
      createArrayOfBlocksCollision(exampleDiv, examplesBlocksCollisionsArray);
      // createArrayOfBlocksCollision(exampleDiv, examplesBlocksCollisionsArray, scrollY);
    });
    console.log(examplesBlocksCollisionsArray);
    // }, 5000);
  });

  window.addEventListener("resize", () => {
    // Update mouse
    scrollY = window.scrollY;
    mouseYFinal = mouseY + scrollY;

    // Skills
    skillsBlocksCollisionsArray = [];
    skillsItemsDivs.forEach((skillsItemDiv) => {
      createArrayOfBlocksCollision(skillsItemDiv, skillsBlocksCollisionsArray, scrollY);
    });
    maxBubbleWidth = window.innerWidth * (bubbleWidthValue / 100);

    // Examples
    examplesBlocksCollisionsArray = [];
    examplesDivs.forEach((exampleDiv) => {
      createArrayOfBlocksCollision(exampleDiv, examplesBlocksCollisionsArray, scrollY);
    });
  });

  //*** Skills functions ****************************************************/
  // Adding bubble
  function displayBubble(skillsItems, infoBubble, infoBubbleText) {
    infoBubble.classList.add("info-bubbles-open");
    animateText(infoBubble, infoBubbleText);
    // Determine if bubble should be on left or right side
    const skillsItemSize = skillsItems.getBoundingClientRect();
    const spaceRight = window.innerWidth - skillsItemSize.right;

    if (spaceRight >= maxBubbleWidth + bubbleOffsetX + bubbleMarginRight) {
      infoBubble.style.top = `${bubbleOffsetY}px`;
      infoBubble.style.left = `${skillsItemSize.width + bubbleOffsetX}px`;
    } else {
      infoBubble.style.top = `${bubbleOffsetY}px`;
      infoBubble.style.right = `${skillsItemSize.width + bubbleOffsetX}px`;
    }
  }

  // Animation text info bubble
  function animateText(infoBubble, bubbleText) {
    infoBubble.innerHTML = "";
    infoBubble.classList.remove("info-bubbles-close");
    let indexChar = 0;
    infoBubble.style.width = "unset";
    infoBubble.style.whiteSpace = "nowrap";
    console.log(bubbleText);

    const textBubbleAnimation = setInterval(() => {
      if (indexChar < bubbleText.length) {
        infoBubble.innerHTML += bubbleText.charAt(indexChar);
        indexChar++;
        const bubbleSize = infoBubble.getBoundingClientRect();
        if (bubbleSize.width >= maxBubbleWidth) {
          infoBubble.style.width = `${bubbleWidthValue}vw`;
          infoBubble.style.whiteSpace = "normal";
          console.log("message");
        }
      } else {
        clearInterval(textBubbleAnimation);
        removeAnimationFromArray(infoBubble, textBubbleAnimationsArray);
      }
    }, textSpeed);
    textBubbleAnimationsArray.push({ name: infoBubble, animation: textBubbleAnimation });
  }

  // Reset Bubble
  function resetBubble(infoBubble) {
    removeAnimationFromArray(infoBubble, textBubbleAnimationsArray, "interval");
    infoBubble.classList.remove("info-bubbles-open");
    infoBubble.classList.add("info-bubbles-close");
  }

  // Ending item animation
  function addEndingAnimation(skillsItemDiv) {
    const currentTransform = getComputedStyle(skillsItemDiv).transform;
    const matrixValues = currentTransform.match(/matrix\(([^)]+)\)/);
    skillsItemDiv.classList.remove("skills-items-hover");
    if (matrixValues) {
      const yPosition = parseFloat(matrixValues[1].split(", ")[5]);
      const endingAnimation = skillsItemDiv.animate([{ transform: `translateY(${yPosition}px)` }, { transform: "translateY(0)" }], {
        duration: skillsEndingAnimationDuration,
        easing: "linear",
      });
      skillsEndingAnimationsArray.push({ name: skillsItemDiv, animation: endingAnimation });
      endingAnimation.onfinish = () => {
        removeAnimationFromArray(skillsItemDiv, skillsEndingAnimationsArray);
      };
    }
  }

  /**  @param {string} isAnimationOrIntervalToCancel (optional) "animation" or "interval" */
  function removeAnimationFromArray(elementNameToTarget, array, isAnimationOrIntervalToCancel) {
    const target = array.findIndex((item) => item.name === elementNameToTarget);
    if (target !== -1) {
      if (isAnimationOrIntervalToCancel === "animation") {
        array[target].animation.cancel();
      }
      if (isAnimationOrIntervalToCancel === "interval") {
        clearInterval(array[target].animation);
      }
      array.splice(target, 1);
    }
  }

  // Fixing tree z-index when over skills item
  function fixingZIndex(skillsItemDiv) {
    if (skillsItemDiv !== previousAnimatedItem) {
      parentTree = skillsItemDiv.parentElement.parentElement.parentElement;
      if (parentTree !== previousParentTree && previousParentTree !== null) {
        previousParentTree.classList.remove("front-z-index");
      }
      if (previousParentTree !== parentTree) {
        parentTree.classList.add("front-z-index");
        previousParentTree = parentTree;
      }
    }
  }

  //*** Events on index slide change ****************************************************/
  window.addEventListener("indexSlideChanged", function (event) {
    indexSlide = event.detail.indexSlide;

    switch (event.detail.previousIndexSlide) {
      // Home
      case 0:
        homeContactButton.style.cursor = "default";
        homeCVButton.style.cursor = "default";
        window.isHomeButtonsAnimationEnded = false;

      // Skills
      case 2:
        skillsItemsDivs.forEach((skillsItemDiv, index) => {
          if (isOverSkillArray[index] === true) {
            addEndingAnimation(skillsItemDiv);
            resetBubble(infoBubblesArray[index]);
          }
          setTimeout(() => {
            if (isOverSkillArray[index] === true) {
              removeAnimationFromArray(skillsItemDiv, skillsEndingAnimationsArray, "animation");
              isOverSkillArray[index] = false;
            }
          }, scrollDuration);
          isSkillAnimatedArray[index] = false;
          skillsItemDiv.style.cursor = "default";
        });
        break;

      // Examples
      case 3:
        examplesFilters.forEach((exampleFilter, index) => {
          setTimeout(() => {
            if (isOverExamplesArray[index] === true) {
              exampleFilter.classList.remove("examples-filters-hover");
              examplesDivs[index].classList.remove("examples-divs-hover");
              isOverExamplesArray[index] = false;
            }
          }, scrollDuration);
          exampleFilter.style.cursor = "default";
          isExampleParentAnimationEndedArray[index] = false;
        });
        break;

      default:
    }
  });

  //*** Events ****************************************************/
  // Home
  homeButtons.addEventListener("animationend", (event) => {
    if (event.animationName === "home-buttons-intro") {
      homeContactButton.style.cursor = "pointer";
      homeCVButton.style.cursor = "pointer";
      window.isHomeButtonsAnimationEnded = true;
      if (homeCVButtonHover) {
        homeCVButton.classList.add("home-button-hover");
      }
      if (homeContactButtonHover) {
        homeContactButton.classList.add("home-button-hover");
      }
    }
  });
  homeCVButton.addEventListener("mouseover", () => {
    homeCVButtonHover = true;
    if (window.isHomeButtonsAnimationEnded === true) {
      homeCVButton.classList.add("home-button-hover");
    }
  });
  homeContactButton.addEventListener("mouseover", () => {
    homeContactButtonHover = true;
    if (window.isHomeButtonsAnimationEnded === true) {
      homeContactButton.classList.add("home-button-hover");
    }
  });
  homeCVButton.addEventListener("mouseleave", () => {
    homeCVButtonHover = false;
    homeCVButton.classList.remove("home-button-hover");
  });
  homeContactButton.addEventListener("mouseleave", () => {
    homeContactButtonHover = false;
    homeContactButton.classList.remove("home-button-hover");
  });

  homeCVButton.addEventListener("click", (event) => {
    if (window.isHomeButtonsAnimationEnded === false) {
      event.preventDefault();
    }
  });

  // function isHoverButton(button, boolean, force) {
  //   if (window.isHomeButtonsAnimationEnded) {
  //     button.classList.toggle("home-button-hover", force);
  //   }
  // }
  // homeButtons.addEventListener("animationend", onHomeButtonsAnimationEnd);
  // homeCVButton.addEventListener("mouseover", () => isHoverButton(homeCVButton, true));
  // homeCVButton.addEventListener("mouseleave", () => isHoverButton(homeCVButton, false));
  // homeContactButton.addEventListener("mouseover", () => isHoverButton(homeContactButton, true));
  // homeContactButton.addEventListener("mouseleave", () => isHoverButton(homeContactButton, false));

  // [homeCVButton, homeContactButton].forEach((button) => {
  //   button.addEventListener("mouseover", () => {
  //     if (button === homeCVButton) homeCVButtonHover = true;
  //     if (button === homeContactButton) homeContactButtonHover = true;
  //     if (window.isHomeButtonsAnimationEnded === true) {
  //       button.classList.add("home-button-hover");
  //     }
  //   });

  //   button.addEventListener("mouseleave", () => {
  //     if (button === homeCVButton) homeCVButtonHover = false;
  //     if (button === homeContactButton) homeContactButtonHover = false;
  //     button.classList.remove("home-button-hover");
  //   });
  // });

  // homeCVButton.addEventListener("click", (event) => {
  //   if (window.isHomeButtonsAnimationEnded === false) {
  //     event.preventDefault();
  //   }
  // });

  // const onHomeButtonsAnimationEnd = (event) => {
  //   if (event.animationName === "home-buttons-intro") {
  //     homeContactButton.style.cursor = "pointer";
  //     homeCVButton.style.cursor = "pointer";
  //     window.isHomeButtonsAnimationEnded = true;
  //     homeCVButtonHover && homeCVButton.classList.add("home-button-hover");
  //     homeContactButtonHover && homeContactButton.classList.add("home-button-hover");
  //   }
  // };

  // Skills
  skillsTrees.forEach((skillsTree, treeIndex) => {
    const itemsDivsInTrees = skillsTree.querySelectorAll(".skills-items-div");
    itemsDivsInTrees.forEach((_, itemIndex) => {
      itemDivIndexInSkillsTree.push({ treeIndex, itemIndex });
    });

    skillsTree.addEventListener("animationend", (event) => {
      if (event.animationName === "skills-tree-intro") {
        itemsDivsInTrees.forEach((itemDivInTree, itemIndex) => {
          itemDivInTree.style.cursor = "help";
          const index = itemDivIndexInSkillsTree.findIndex((item) => item.treeIndex === treeIndex && item.itemIndex === itemIndex);

          checkIfCursorOverTarget(
            skillsBlocksCollisionsArray[index],
            isOverSkillArray[index],
            () => {
              removeAnimationFromArray(itemDivInTree, skillsEndingAnimationsArray, "animation");
              itemDivInTree.classList.add("skills-items-hover");
              displayBubble(skillsItems[index], infoBubblesArray[index], infoBubbleTextsArray[index]);
              isOverSkillArray[index] = true;
              fixingZIndex(itemDivInTree);
            },
            () => {}
          );
          isSkillAnimatedArray[index] = true;
        });
      }
    });
  });

  // Examples
  examples.forEach((example, index) => {
    example.addEventListener("animationstart", (event) => {
      if (event.animationName === "example-intro") {
        examplesFilters[index].style.cursor = "pointer";
        checkIfCursorOverTarget(
          examplesBlocksCollisionsArray[index],
          isOverExamplesArray[index],
          () => {
            examplesFilters[index].classList.add("examples-filters-hover");
            examplesDivs[index].classList.add("examples-divs-hover");
            isOverExamplesArray[index] = true;
          },
          () => {}
        );
        isExampleParentAnimationEndedArray[index] = true;
      }
    });

    examplesFilters[index].addEventListener("click", () => {
      examplesFilters[index].classList.remove("examples-filters-hover");
      examplesDivs[index].classList.remove("examples-divs-hover");
      isOverExamplesArray[index] = false;
    });
  });

  //*** Events on mouse move ****************************************************/
  // Update mouse
  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    mouseYFinal = mouseY + scrollY;

    // Skills
    if (indexSlide === 2) {
      skillsItemsDivs.forEach((skillsItemDiv, index) => {
        checkIfCursorOverTarget(
          skillsBlocksCollisionsArray[index],
          isOverSkillArray[index],
          () => {
            if (isSkillAnimatedArray[index] === true) {
              removeAnimationFromArray(skillsItemDiv, skillsEndingAnimationsArray, "animation");
              skillsItemDiv.classList.add("skills-items-hover");
              displayBubble(skillsItems[index], infoBubblesArray[index], infoBubbleTextsArray[index]);
              isOverSkillArray[index] = true;
            }
            fixingZIndex(skillsItemDiv);
          },
          () => {
            addEndingAnimation(skillsItemDiv);
            resetBubble(infoBubblesArray[index]);
            isOverSkillArray[index] = false;
          }
        );
      });
    }

    // Examples
    if (indexSlide === 3 && window.isModalOpen === false) {
      examplesFilters.forEach((exampleFilter, index) => {
        checkIfCursorOverTarget(
          examplesBlocksCollisionsArray[index],
          isOverExamplesArray[index],
          () => {
            if (isExampleParentAnimationEndedArray[index] === true) {
              exampleFilter.classList.add("examples-filters-hover");
              examplesDivs[index].classList.add("examples-divs-hover");
              isOverExamplesArray[index] = true;
            }
          },
          () => {
            exampleFilter.classList.remove("examples-filters-hover");
            examplesDivs[index].classList.remove("examples-divs-hover");
            isOverExamplesArray[index] = false;
          }
        );
      });
    }
  });

  console.log("loaded   E: " + Math.floor(examplesFilters[0].getBoundingClientRect().top) + "   S: " + Math.floor(skillsItemsDivs[0].getBoundingClientRect().top));
  document.addEventListener("mousedown", () => {
    console.log("------------------------------");
    console.log("Events   E: " + Math.floor(examplesFilters[0].getBoundingClientRect().top) + "   S: " + Math.floor(skillsItemsDivs[0].getBoundingClientRect().top));
    console.log("X: " + mouseX + " Y: " + mouseY);
  });
});
