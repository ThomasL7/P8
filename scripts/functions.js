// =====================================================================================================================================================
// -------- Variables ----------------------------------------------------------------------------------------------------------------------------------
// =====================================================================================================================================================
// ===== DOM =====
// → General
let root;
let rootCSS;
let anchors;
// → header
let header;
let headerTitleBlock;
let headerTitle;
let nav;
let navLinks;
// → Home
let homeContent;
let homeTitle;
let homeText;
let homeButtons;
let homeContactButton;
let homeCVButton;
// → About
let aboutContent;
let aboutBlockPhoto;
let aboutImagePhoto;
let aboutText;
// → Skills
let skillsContent;
let skillsTitle;
let skillsTrees;
let skillsTreeLeft;
let skillsTreeCenter;
let skillsTreeRight;
let skills;
let skillsDivs;
let skillsText;
// Info-bubbles
let infoBubblesArray;
// → Examples
let examplesContent;
let examplesTitle;
let examples;
let examplesDivs;
let example1;
let example2;
let example3;
let example4;
let examplesFilters;
// Modal
let examplesModalDatasArray;
let modalScreen;
let modal;
let modalPreviousButton;
let modalNextButton;
let modalCloseIcon;
let modalBody;
let modalImage;
let modalTitle;
let modalLink;
let modalDescription;
let modalDifficulties;
let modalSkills;

// ===== Classes =====
const CLASS_HOME_BUTTONS_INTRO = "home-buttons-intro";
const CLASS_HOME_TEXT_INTRO = "home-text-intro";
const CLASS_HOME_TITLE_INTRO = "home-title-intro";
const CLASS_ELEMENTS_HEADER_INTRO = "elements-header-intro";
const CLASS_EXAMPLES_DIVS_HOVER = "examples-divs-hover";
const CLASS_EXAMPLES_FILTERS_HOVER = "examples-filters-hover";
const CLASS_FILTER_CHANGE = "active-example-filter-on-change";
const CLASS_FILTER_CLOSE = "active-example-filter-close";
const CLASS_FILTER_OPEN = "active-example-filter-open";
const CLASS_FRONT_Z_INDEX = "front-z-index";
const CLASS_MODAL_OPEN = "modal-open";
const CLASS_MODAL_SCREEN_CLOSE = "modal-screen-close";
const CLASS_HEADER_INTRO = "header-intro";
const CLASS_HEADER_TITLE_HOVER = "header-title-hover";
const CLASS_HOME_BUTTON_HOVER = "home-button-hover";
const CLASS_INFO_BUBBLE_CLOSE_LEFT = "info-bubbles-close-left";
const CLASS_INFO_BUBBLE_CLOSE_RIGHT = "info-bubbles-close-right";
const CLASS_INFO_BUBBLE_OPEN_LEFT = "info-bubbles-open-left";
const CLASS_INFO_BUBBLE_OPEN_RIGHT = "info-bubbles-open-right";
const CLASS_INFO_BUBBLE_WIDTH_MAX = "info-bubble-width-max";
const CLASS_INFO_BUBBLE_WIDTH_UNSET = "info-bubble-width-unset";
const CLASS_NAV_LINK_HOVER = "nav-link-hover";
const CLASS_NAV_LINK_ACTIVE = "nav-link-active";
const CLASS_SKILLS_ITEMS_HOVER = "skills-items-hover";
const CLASS_OUTRO_BACKWARD = "slide-outro-backward";
const CLASS_OUTRO_FORWARD = "slide-outro-forward";

// ===== Variables =====
// → General
let contentSlidesAndIntroClassesArray;
let indexSlide = 0;
let isScrolling = false;
let isWindowLoaded = false;
let maxIndexSlide = 0;
let mouseX = 0;
let mouseY = 0;
let previousIndexSlide = null;
let scrollDuration = 0;
let scrollY = 0;
// → Header
let headerAnimationDuration = 0;
let isHeaderTitleAnimationEnded = false;
// → Home
let isHomeButtonsAnimationEnded = false;
let isHoverHomeContactButton = false;
let isHoverHomeCVButton = false;
// → Skills
const easingSkillsEndingAnimationDuration = "linear";
let indexOfItemsDivsInSkillsTreesArray = [];
let indexOfSkillTargetForLeaveDetection = null;
let itemDivIndexInSkillsTreeArray = [];
let isPreviousSkillsAlreadyReset = true;
let isSkillsIntroAnimationsEndedArray = [];
let parentTree = null;
let previousAnimatedItem = null;
let previousIndexOfSkill = 0;
let previousParentTree = null;
let previousSkill = null;
let skillsBlocksCollisionsArray = [];
let skillsEndingHoverAnimationsArray = [];
let skillsEndingAnimationDuration = 0;
let skillTargetForLeaveDetection = null;
// Info-bubbles
let infoBubbleAnimationsLeftDirection = false;
let infoBubbleMarginRight = 0;
let infoBubbleOffsetX = 0;
let infoBubbleOffsetY = 0;
let infoBubbleWidthCSSValue = 0;
let infoBubbleTextsArray = [];
let infoBubbleWidth = 0;
let isHoverSkillArray = [];
let textInfoBubbleAnimationsArray = [];
let textSpeed = 0;
// → Examples
let currentModalExampleDisplay = null;
let exampleTargetForLeaveDetection = null;
let examplesBlocksCollisionsArray = [];
let isPreviousExampleAlreadyReset = true;
let indexOfExampleTargetForLeaveDetection = null;
let isHoverExamplesArray = [];
let isExamplesIntroAnimationsEnded = [];
let previousExample = null;
let previousFilterAnimation = null;
let previousIndexOfExample = 0;
// Modal
let modalClosingAnimationDuration = 0;
let isModalOpen = false;

// =====================================================================================================================================================
// -------- Changing variables on DOM load -------------------------------------------------------------------------------------------------------------
// =====================================================================================================================================================
document.addEventListener("DOMContentLoaded", () => {
  // ===== DOM =====
  // → General
  root = document.documentElement;
  rootCSS = getComputedStyle(root);
  anchors = document.querySelectorAll(".anchors");
  // → header
  header = document.querySelector("header");
  headerTitleBlock = document.getElementById("header-title-block");
  window.headerTitle = document.querySelector("h1");
  headerTitle = window.headerTitle;
  nav = document.querySelector("nav");
  window.navLinks = document.querySelectorAll("nav a");
  navLinks = window.navLinks;
  // → Home
  homeContent = document.getElementById("home-content");
  homeTitle = document.querySelector("#home-content h2");
  homeText = document.querySelector("#home-content p");
  window.homeButtons = document.getElementById("home-buttons");
  homeButtons = window.homeButtons;
  window.homeContactButton = document.getElementById("home-contact-button");
  homeContactButton = window.homeContactButton;
  window.homeCVButton = document.getElementById("home-CV-button");
  homeCVButton = window.homeCVButton;
  // → About
  aboutContent = document.getElementById("about-content");
  aboutBlockPhoto = document.getElementById("about-block-photo");
  aboutImagePhoto = document.querySelector("#about-block-photo img");
  aboutText = document.getElementById("about-text");
  // → Skills
  skillsContent = document.getElementById("skills-content");
  skillsTitle = document.querySelector("#skills-content h2");
  window.skillsTrees = document.querySelectorAll("#skills-trees > div");
  skillsTrees = window.skillsTrees;
  skillsTreeLeft = document.getElementById("skills-tree-left");
  skillsTreeCenter = document.getElementById("skills-tree-center");
  skillsTreeRight = document.getElementById("skills-tree-right");
  window.skills = document.querySelectorAll("#skills-trees li");
  skills = window.skills;
  window.skillsDivs = document.querySelectorAll(".skills-items-div");
  skillsDivs = window.skillsDivs;
  skillsText = document.querySelector("#skills-content > p");
  // Info-bubbles
  infoBubblesArray = document.querySelectorAll(".info-bubbles");
  // → Examples
  examplesContent = document.getElementById("examples-content");
  examplesTitle = document.querySelector("#examples-content h2");
  window.examples = document.querySelectorAll("#examples-gallery article");
  examples = window.examples;
  examplesDivs = document.querySelectorAll("#examples-gallery article > div");
  example1 = document.getElementById("example-1");
  example2 = document.getElementById("example-2");
  example3 = document.getElementById("example-3");
  example4 = document.getElementById("example-4");
  window.examplesFilters = document.querySelectorAll(".examples-filters");
  examplesFilters = window.examplesFilters;
  // Modal
  modalScreen = document.getElementById("modal-screen");
  modal = document.getElementById("modal");
  window.modalPreviousButton = document.getElementById("modal-previous-button");
  modalPreviousButton = window.modalPreviousButton;
  window.modalNextButton = document.getElementById("modal-next-button");
  modalNextButton = window.modalPreviousButton;
  modalCloseIcon = document.getElementById("modal-close-icon");
  modalBody = document.getElementById("modal-body");
  modalImage = document.getElementById("modal-image");
  modalTitle = document.getElementById("modal-title");
  modalLink = document.getElementById("modal-link");
  modalDescription = document.getElementById("modal-description");
  modalDifficulties = document.getElementById("modal-difficulties");
  modalSkills = document.getElementById("modal-skills");

  // ===== Variables =====
  // → General
  contentSlidesAndIntroClassesArray = [
    {
      index: 0,
      slide: homeContent,
      elements: [
        { element: homeTitle, introClass: "home-title-intro" },
        { element: homeText, introClass: "home-text-intro" },
        { element: homeButtons, introClass: "home-buttons-intro" },
      ],
    },
    {
      index: 1,
      slide: aboutContent,
      elements: [
        { element: aboutBlockPhoto, introClass: "about-block-photo-intro" },
        { element: aboutImagePhoto, introClass: "about-image-photo-intro" },
        { element: aboutText, introClass: "about-text-intro" },
      ],
    },
    {
      index: 2,
      slide: skillsContent,
      elements: [
        { element: skillsTitle, introClass: "skills-title-intro" },
        { element: skillsTreeLeft, introClass: "skills-tree-left-intro" },
        { element: skillsTreeCenter, introClass: "skills-tree-center-intro" },
        { element: skillsTreeRight, introClass: "skills-tree-right-intro" },
        { element: skillsText, introClass: "skills-text-intro" },
      ],
    },
    {
      index: 3,
      slide: examplesContent,
      elements: [
        { element: examplesTitle, introClass: "examples-title-intro" },
        { element: example1, introClass: "example-1-intro" },
        { element: example2, introClass: "example-2-intro" },
        { element: example3, introClass: "example-3-intro" },
        { element: example4, introClass: "example-4-intro" },
      ],
    },
  ];
  maxIndexSlide = anchors.length - 1;
  scrollDuration = parseFloat(rootCSS.getPropertyValue("--delay-before-next-scroll")) * 1000;
  // → Header
  headerAnimationDuration = parseFloat(getComputedStyle(root).getPropertyValue("--header-animation-duration")) * 1000;
  // → Skills
  isSkillsIntroAnimationsEndedArray = new Array(skillsDivs.length).fill(false);
  skillsEndingAnimationDuration = parseFloat(getComputedStyle(root).getPropertyValue("--skills-item-ending-animation-duration")) * 1000;
  // Info-bubbles
  infoBubbleMarginRight = parseInt(getComputedStyle(root).getPropertyValue("--bubble-margin-right"));
  infoBubbleOffsetX = parseInt(getComputedStyle(root).getPropertyValue("--bubble-offset-x"));
  infoBubbleOffsetY = parseInt(getComputedStyle(root).getPropertyValue("--bubble-offset-y"));
  infoBubbleWidthCSSValue = parseInt(getComputedStyle(root).getPropertyValue("--info-bubbles-width"));
  infoBubbleTextsArray = window.infoBubblesDatas;
  isHoverSkillArray = new Array(skillsDivs.length).fill(false);
  textSpeed = parseInt(getComputedStyle(root).getPropertyValue("--info-bubbles-text-speed"));
  // → Examples
  examplesModalDatasArray = window.examplesModalDatas;
  isExamplesIntroAnimationsEnded = new Array(examplesDivs.length).fill(false);
  // Modal
  modalClosingAnimationDuration = parseFloat(getComputedStyle(root).getPropertyValue("--modal-closing-animation-duration")) * 1000;
});

// =====================================================================================================================================================
// -------- Functions ----------------------------------------------------------------------------------------------------------------------------------
// =====================================================================================================================================================
// ===== General =====
function setIsWindowLoadedTrue() {
  setTimeout(() => (isWindowLoaded = true), headerAnimationDuration);
}

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function disableZoom(event) {
  if (event.type === "wheel" && event.ctrlKey) event.preventDefault();
  else if (event.type === "keydown" && event.ctrlKey && (event.key === "+" || event.key === "-" || event.key === "=")) event.preventDefault();
}

// → For mouse position and collision leave detection
function getMousePosition(event) {
  mouseX = event.clientX;
  mouseY = event.clientY + window.scrollY;
}

function updateScrollY() {
  scrollY = window.scrollY;
}

function createArrayOfBlocksCollision(targets, array) {
  targets.forEach((target) => {
    const blockCollision = target.getBoundingClientRect();
    const blockCollisionObject = {
      top: blockCollision.top + window.scrollY,
      right: blockCollision.right,
      bottom: blockCollision.bottom + window.scrollY,
      left: blockCollision.left,
    };
    array.push(blockCollisionObject);
  });
}

function createAllArraysOfBlocksCollision() {
  createArrayOfBlocksCollision(skills, skillsBlocksCollisionsArray);
  createArrayOfBlocksCollision(examplesDivs, examplesBlocksCollisionsArray);
}

function updateAllArraysOfBlocksCollision() {
  skillsBlocksCollisionsArray = [];
  createArrayOfBlocksCollision(skills, skillsBlocksCollisionsArray);
  examplesBlocksCollisionsArray = [];
  createArrayOfBlocksCollision(examplesDivs, examplesBlocksCollisionsArray);
}

function checkIfCursorHoverTarget(collisionTarget, onHoverFunction, onOutsideFunction) {
  const isCurrentlyHoverBlock = mouseX >= collisionTarget.left && mouseX <= collisionTarget.right && mouseY >= collisionTarget.top && mouseY <= collisionTarget.bottom;
  if (isCurrentlyHoverBlock) onHoverFunction();
  else if (!isCurrentlyHoverBlock) onOutsideFunction();
}

// → For slides change
function scrollSlideChange(event) {
  if (!isWindowLoaded || isModalOpen) return;
  const direction = event.deltaY > 0 ? 1 : -1;
  scrollToSlide(indexSlide, direction);
}

function arrowsSlideChange(event) {
  if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
  if (!isWindowLoaded || isModalOpen || isFocusedOnInput()) return;
  const direction = event.key === "ArrowDown" ? 1 : -1;
  scrollToSlide(indexSlide, direction);
}

function isFocusedOnInput() {
  const activeElement = document.activeElement;
  return activeElement.tagName.toLowerCase() === "input" || activeElement.tagName.toLowerCase() === "textarea" || activeElement.tagName.toLowerCase() === "select";
}

// → Animations
/**  @param {string} isAnimationOrIntervalToCancel (optional) "animation" or "interval" */
function removeAnimationFromArray(elementToTarget, array, isAnimationOrIntervalToCancel) {
  const target = array.findIndex((item) => item.name === elementToTarget);
  if (target === -1) return;
  if (isAnimationOrIntervalToCancel === "animation") array[target].animation.cancel();
  else if (isAnimationOrIntervalToCancel === "interval") clearInterval(array[target].animation);
  array.splice(target, 1);
}

function updateCurrentSlideView() {
  anchors[indexSlide].scrollIntoView({ behavior: "auto" });
}

/**  @param {Number} direction (optional + or -1) only for scroll or arrow keys*/
function scrollToSlide(index, direction) {
  if (isScrolling) return;
  if (direction) {
    index += direction;
    index = Math.max(0, Math.min(index, maxIndexSlide));
  }
  if (index === indexSlide) return;
  isScrolling = true;
  previousIndexSlide = indexSlide;
  indexSlide = index;
  const scrollBehavior = Math.abs(indexSlide - previousIndexSlide) === 1 ? "smooth" : "auto";
  anchors[indexSlide].scrollIntoView({ behavior: scrollBehavior });
  window.dispatchEvent(new CustomEvent("indexSlideChange"));
  setTimeout(() => (isScrolling = false), scrollDuration);
}

function addHeaderAndHomeIntroAnimations() {
  header.classList.add(CLASS_HEADER_INTRO);
  headerTitleBlock.classList.add(CLASS_ELEMENTS_HEADER_INTRO);
  nav.classList.add(CLASS_ELEMENTS_HEADER_INTRO);
  setTimeout(() => {
    headerTitle.classList.add(CLASS_HEADER_TITLE_HOVER);
    homeTitle.classList.add(CLASS_HOME_TITLE_INTRO);
    homeText.classList.add(CLASS_HOME_TEXT_INTRO);
    homeButtons.classList.add(CLASS_HOME_BUTTONS_INTRO);
    isHeaderTitleAnimationEnded = true;
  }, headerAnimationDuration);
}

function resetHomeBeforeReloading() {
  header.classList.remove(CLASS_HEADER_INTRO);
  headerTitleBlock.classList.remove(CLASS_ELEMENTS_HEADER_INTRO);
  nav.classList.remove(CLASS_ELEMENTS_HEADER_INTRO);
  homeTitle.classList.remove(CLASS_HOME_TITLE_INTRO);
  homeText.classList.remove(CLASS_HOME_TEXT_INTRO);
  homeButtons.classList.remove(CLASS_HOME_BUTTONS_INTRO);
}

function addIntroAnimationsSlide() {
  contentSlidesAndIntroClassesArray.forEach(({ index, elements }) => {
    if (index !== indexSlide) return;
    elements.forEach(({ element, introClass }) => element.classList.add(introClass));
  });
}

function addOutroAnimationsSlide() {
  const outroAnimationType = previousIndexSlide < indexSlide ? CLASS_OUTRO_FORWARD : CLASS_OUTRO_BACKWARD;
  contentSlidesAndIntroClassesArray.forEach(({ index, slide, elements }) => {
    if (previousIndexSlide === index) {
      slide.classList.add(outroAnimationType);
      setTimeout(() => {
        elements.forEach(({ element, introClass }) => element.classList.remove(introClass));
        slide.classList.remove(outroAnimationType);
      }, scrollDuration);
    }
  });
}

function resetPreviousSlide() {
  switch (previousIndexSlide) {
    case 0:
      resetHomeSlide();
      break;
    case 2:
      resetSkillsSlide();
      break;
    case 3:
      resetExamplesSlide();
      break;
    default:
  }
}

function resetHomeSlide() {
  setTimeout(() => {
    if (isHoverHomeCVButton) isHoverHomeButton("CV", false);
    else if (isHoverHomeContactButton) isHoverHomeButton("contact", false);
    isHomeButtonsAnimationEnded = false;
  }, scrollDuration);
  removeStyleCursorForHomeButtons();
}

function resetSkillsSlide() {
  resetSkillHoverTarget();
  skills.forEach((skill, index) => {
    removeStyleCursorForSkills(skill);
    isSkillsIntroAnimationsEndedArray[index] = false;
  });
}

function resetExamplesSlide() {
  resetExampleHoverTarget();
  examplesFilters.forEach((exampleFilter, index) => {
    removeStyleCursorForExamples(exampleFilter);
    isExamplesIntroAnimationsEnded[index] = false;
  });
}

// ===== Header =====
function handleHeaderTitleClick() {
  if (isHeaderTitleAnimationEnded) scrollToSlide(1);
}

function handleNavLinkClick(event, index) {
  event.preventDefault();
  if (!isWindowLoaded || index === indexSlide) return;
  scrollToSlide(index);
}

function setActiveClassToNavLink() {
  navLinks[previousIndexSlide].classList.remove(CLASS_NAV_LINK_ACTIVE);
  navLinks[indexSlide].classList.add(CLASS_NAV_LINK_ACTIVE);
}

function removeHeaderHoverAnimationForNewSlide() {
  navLinks[previousIndexSlide].classList.add(CLASS_NAV_LINK_HOVER);
  navLinks[indexSlide].classList.remove(CLASS_NAV_LINK_HOVER);
  if (previousIndexSlide === 1) headerTitle.classList.add(CLASS_HEADER_TITLE_HOVER);
  else if (indexSlide === 1) headerTitle.classList.remove(CLASS_HEADER_TITLE_HOVER);
}

// ===== Home =====
function setIsHomeButtonsAnimationEndedTrue() {
  isHomeButtonsAnimationEnded = true;
}

function addStyleCursorForHomeButtons() {
  homeContactButton.style.cursor = "pointer";
  homeCVButton.style.cursor = "pointer";
}

function removeStyleCursorForHomeButtons() {
  homeContactButton.style.cursor = "default";
  homeCVButton.style.cursor = "default";
}

function checkAfterIntroHomeButtonsIfHoverHomeButton() {
  if (isHoverHomeCVButton) homeCVButton.classList.add(CLASS_HOME_BUTTON_HOVER);
  else if (isHoverHomeContactButton) homeContactButton.classList.add(CLASS_HOME_BUTTON_HOVER);
}

/**  @param {string} button if target is "contact" or "CV" */
/**  @param {boolean} boolean "true" to add class or "false" to delete hover class */
function isHoverHomeButton(button, boolean) {
  switch (button) {
    case "contact":
      isHoverHomeContactButton = boolean;
      if (!isHomeButtonsAnimationEnded) return;
      homeContactButton.classList.toggle(CLASS_HOME_BUTTON_HOVER, boolean);
      break;
    case "CV":
      isHoverHomeCVButton = boolean;
      if (!isHomeButtonsAnimationEnded) return;
      homeCVButton.classList.toggle(CLASS_HOME_BUTTON_HOVER, boolean);
      break;
    default:
  }
}

function activeContactButtonAfterIntroAnimation(event) {
  event.preventDefault();
  if (!isHomeButtonsAnimationEnded) return;
  scrollToSlide(4);
}

function activeCVButtonAfterIntroAnimation(event) {
  if (isHomeButtonsAnimationEnded) return;
  event.preventDefault();
}

// ===== About =====

// ===== Skills =====
function setIsSkillsIntroAnimationsEndedTrue(index) {
  isSkillsIntroAnimationsEndedArray[index] = true;
}

function addStyleCursorForSkills(index) {
  skills[index].style.cursor = "help";
}

function removeStyleCursorForSkills(skill) {
  skill.style.cursor = "default";
}

function checkIfHoverSkillAfterIntro(skillsDiv, index) {
  if (skillTargetForLeaveDetection !== null) return;
  checkIfCursorHoverTarget(
    skillsBlocksCollisionsArray[index],
    () => handleEnterSkill(skillsDiv, index),
    () => {}
  );
}

function handleEnterSkill(skillsDiv, index) {
  if (!skillsDiv) skillsDiv = skillsDivs[index];
  if (skillTargetForLeaveDetection === skillsDiv || !isSkillsIntroAnimationsEndedArray[index]) return;
  resetPreviousSkillIfEnterNewSkill();
  addSkillHoverAnimation(skillsDiv, index);
  setSkillTargetForLeaveDetection(skillsDiv, index);
  isPreviousSkillsAlreadyReset = false;
  setPreviousSkill(skillsDiv, index);
}

function resetPreviousSkillIfEnterNewSkill() {
  if (isPreviousSkillsAlreadyReset) return;
  addEndingSkillAnimation(previousSkill);
  hideAndResetInfoBubble(previousIndexOfSkill);
  isHoverSkillArray[previousIndexOfSkill] = false;
}

function addSkillHoverAnimation(skillsDiv, index) {
  removeAnimationFromArray(skillsDiv, skillsEndingHoverAnimationsArray, "animation");
  skillsDiv.classList.add(CLASS_SKILLS_ITEMS_HOVER);
  fixingInfoBubbleZIndex(skillsDiv);
  displayInfoBubble(skillsDiv, index);
}

function setSkillTargetForLeaveDetection(skillsDiv, index) {
  skillTargetForLeaveDetection = skillsDiv;
  indexOfSkillTargetForLeaveDetection = index;
}

function setPreviousSkill(skillsDiv, index) {
  previousSkill = skillsDiv;
  previousIndexOfSkill = index;
}

function handleLeaveSkill() {
  if (indexOfSkillTargetForLeaveDetection === null) return;
  checkIfCursorHoverTarget(
    skillsBlocksCollisionsArray[indexOfSkillTargetForLeaveDetection],
    () => {},
    () => {
      resetSkillHoverTarget();
    }
  );
}

function resetSkillHoverTarget() {
  if (skillTargetForLeaveDetection === null) return;
  isPreviousSkillsAlreadyReset = true;
  removeSkillTargetHoverAnimation();
  removeSkillTargetForLeaveDetection();
}

function removeSkillTargetHoverAnimation() {
  isHoverSkillArray[indexOfSkillTargetForLeaveDetection] = false;
  addEndingSkillAnimation(skillTargetForLeaveDetection);
  hideAndResetInfoBubble(indexOfSkillTargetForLeaveDetection);
}

function removeSkillTargetForLeaveDetection() {
  skillTargetForLeaveDetection = null;
  indexOfSkillTargetForLeaveDetection = null;
}

function addEndingSkillAnimation(skillsDiv) {
  const matrixValues = getComputedStyle(skillsDiv).transform.match(/matrix\(([^)]+)\)/);
  skillsDiv.classList.remove(CLASS_SKILLS_ITEMS_HOVER);
  if (!matrixValues) return;
  const yPosition = parseFloat(matrixValues[1].split(", ")[5]);
  const endingAnimation = skillsDiv.animate([{ transform: `translateY(${yPosition}px)` }, { transform: "translateY(0)" }], {
    duration: skillsEndingAnimationDuration,
    easing: easingSkillsEndingAnimationDuration,
  });
  skillsEndingHoverAnimationsArray.push({ name: skillsDiv, animation: endingAnimation });
  endingAnimation.onfinish = () => removeAnimationFromArray(skillsDiv, skillsEndingHoverAnimationsArray);
}

// → Info-bubbles
function updateSkillsInfoBubblesWidth() {
  infoBubbleWidth = window.innerWidth * (infoBubbleWidthCSSValue / 100);
}

function fixingInfoBubbleZIndex(skillsDiv) {
  if (skillsDiv === previousAnimatedItem) return;
  parentTree = skillsDiv.parentElement.parentElement.parentElement;
  if (previousParentTree !== parentTree) {
    if (previousParentTree !== null) previousParentTree.classList.remove(CLASS_FRONT_Z_INDEX);
    parentTree.classList.add(CLASS_FRONT_Z_INDEX);
    previousParentTree = parentTree;
  }
}

function displayInfoBubble(skillsDiv, index) {
  const infoBubble = infoBubblesArray[index];
  if (infoBubble.classList.contains(CLASS_INFO_BUBBLE_CLOSE_RIGHT)) infoBubble.classList.remove(CLASS_INFO_BUBBLE_CLOSE_RIGHT);
  else infoBubble.classList.remove(CLASS_INFO_BUBBLE_CLOSE_LEFT);
  // Determine if bubble should be on left or right side
  const skillSize = skillsDiv.getBoundingClientRect();
  console.log("item : " + window.innerWidth);
  const spaceRight = window.innerWidth - skillSize.right;
  if (spaceRight >= infoBubbleWidth + infoBubbleOffsetX + infoBubbleMarginRight) {
    infoBubbleAnimationsLeftDirection = false;
    infoBubble.style.top = `${infoBubbleOffsetY}px`;
    infoBubble.style.left = `${skillSize.width + infoBubbleOffsetX}px`;
  } else {
    infoBubbleAnimationsLeftDirection = true;
    infoBubble.style.top = `${infoBubbleOffsetY}px`;
    infoBubble.style.right = `${skillSize.width + infoBubbleOffsetX}px`;
  }
  if (!infoBubbleAnimationsLeftDirection) infoBubble.classList.add(CLASS_INFO_BUBBLE_OPEN_RIGHT);
  else infoBubble.classList.add(CLASS_INFO_BUBBLE_OPEN_LEFT);
  animateInfoBubbleText(infoBubble, index);
}

function animateInfoBubbleText(infoBubble, index) {
  const infoBubbleText = infoBubbleTextsArray[index];
  let indexChar = 0;
  infoBubble.classList.add(CLASS_INFO_BUBBLE_WIDTH_UNSET);
  const textBubbleAnimation = setInterval(() => {
    if (indexChar < infoBubbleText.length) {
      infoBubble.innerHTML += infoBubbleText.charAt(indexChar);
      indexChar++;
      const bubbleSize = infoBubble.getBoundingClientRect();
      if (bubbleSize.width >= infoBubbleWidth) infoBubble.classList.add(CLASS_INFO_BUBBLE_WIDTH_MAX);
    } else {
      clearInterval(textBubbleAnimation);
      removeAnimationFromArray(infoBubble, textInfoBubbleAnimationsArray);
    }
  }, textSpeed);
  textInfoBubbleAnimationsArray.push({ name: infoBubble, animation: textBubbleAnimation });
}

function hideAndResetInfoBubble(index) {
  const infoBubble = infoBubblesArray[index];
  if (!infoBubbleAnimationsLeftDirection) {
    infoBubble.classList.remove(CLASS_INFO_BUBBLE_OPEN_RIGHT);
    infoBubble.classList.add(CLASS_INFO_BUBBLE_CLOSE_RIGHT);
  } else {
    infoBubble.classList.remove(CLASS_INFO_BUBBLE_OPEN_LEFT);
    infoBubble.classList.add(CLASS_INFO_BUBBLE_CLOSE_LEFT);
  }
  removeAnimationFromArray(infoBubble, textInfoBubbleAnimationsArray, "interval");
  infoBubble.innerHTML = "";
}

// ===== Examples =====
function setIsExamplesIntroAnimationsEndedTrue(index) {
  isExamplesIntroAnimationsEnded[index] = true;
}

function addStyleCursorForExamples(index) {
  examplesFilters[index].style.cursor = "pointer";
}

function removeStyleCursorForExamples(exampleFilter) {
  exampleFilter.style.cursor = "default";
}

function handleEnterExample(exampleFilter, index) {
  if (exampleTargetForLeaveDetection === exampleFilter) return;
  resetPreviousExampleIfEnterNewExample();
  addExampleHoverAnimation(exampleFilter, index);
  setExampleTargetForLeaveDetection(exampleFilter, index);
  isPreviousExampleAlreadyReset = false;
  setPreviousExample(exampleFilter, index);
}

function resetPreviousExampleIfEnterNewExample() {
  if (isPreviousExampleAlreadyReset) return;
  previousExample.classList.remove(CLASS_EXAMPLES_FILTERS_HOVER);
  examplesDivs[previousIndexOfExample].classList.remove(CLASS_EXAMPLES_DIVS_HOVER);
  isHoverExamplesArray[previousIndexOfExample] = false;
}

function addExampleHoverAnimation(exampleFilter, index) {
  exampleFilter.classList.add(CLASS_EXAMPLES_FILTERS_HOVER);
  examplesDivs[index].classList.add(CLASS_EXAMPLES_DIVS_HOVER);
  isHoverExamplesArray[index] = true;
}

function setExampleTargetForLeaveDetection(exampleFilter, index) {
  exampleTargetForLeaveDetection = exampleFilter;
  indexOfExampleTargetForLeaveDetection = index;
}

function setPreviousExample(exampleFilter, index) {
  previousExample = exampleFilter;
  previousIndexOfExample = index;
}

function handleLeaveExample() {
  if (indexOfExampleTargetForLeaveDetection === null) return;
  checkIfCursorHoverTarget(
    examplesBlocksCollisionsArray[indexOfExampleTargetForLeaveDetection],
    () => {},
    () => resetExampleHoverTarget()
  );
}

function resetExampleHoverTarget() {
  if (exampleTargetForLeaveDetection === null) return;
  isPreviousExampleAlreadyReset = true;
  removeExampleTargetHoverAnimation();
  removeExampleTargetForLeaveDetection();
}

function removeExampleTargetHoverAnimation() {
  exampleTargetForLeaveDetection.classList.remove(CLASS_EXAMPLES_FILTERS_HOVER);
  examplesDivs[indexOfExampleTargetForLeaveDetection].classList.remove(CLASS_EXAMPLES_DIVS_HOVER);
  isHoverExamplesArray[indexOfExampleTargetForLeaveDetection] = false;
}

function removeExampleTargetForLeaveDetection() {
  exampleTargetForLeaveDetection = null;
  indexOfExampleTargetForLeaveDetection = null;
}

// → Modal
function openModalExample(event, index) {
  event.stopPropagation();
  if (!isExamplesIntroAnimationsEnded[index]) return;
  resetExampleHoverTarget();
  currentModalExampleDisplay = index;
  addExampleFilterAnimationOnModalEvent("open");
  adaptingModalContent();
  openModalAnimation();
  modalBody.scrollTop = 0;
  isModalOpen = true;
}

/**  @param {string} animationType "open" or "change" or "close" */
function addExampleFilterAnimationOnModalEvent(animationType) {
  const exampleDiv = examplesDivs[currentModalExampleDisplay];
  switch (animationType) {
    case "open":
      exampleDiv.classList.remove(CLASS_FILTER_CLOSE);
      exampleDiv.classList.add(CLASS_FILTER_OPEN);
      break;
    case "change":
      exampleDiv.classList.remove(CLASS_FILTER_CLOSE);
      previousFilterAnimation.classList.remove(CLASS_FILTER_OPEN);
      previousFilterAnimation.classList.remove(CLASS_FILTER_CHANGE);
      exampleDiv.classList.add(CLASS_FILTER_CHANGE);
      break;
    case "close":
      exampleDiv.classList.remove(CLASS_FILTER_OPEN);
      exampleDiv.classList.remove(CLASS_FILTER_CHANGE);
      exampleDiv.classList.add(CLASS_FILTER_CLOSE);
      break;
    default:
  }
  previousFilterAnimation = exampleDiv;
}

function adaptingModalContent() {
  const example = examplesModalDatas[currentModalExampleDisplay];
  modalImage.setAttribute("src", `./assets/images/${example.image}`);
  modalTitle.innerHTML = `N°${currentModalExampleDisplay + 1} - ${example.title}`;
  modalLink.setAttribute("href", example.link);
  modalLink.innerHTML = example.link;
  modalDescription.innerHTML = example.description;
  modalDifficulties.innerHTML = "";
  example.difficulties.forEach((difficulty) => modalDifficulties.insertAdjacentHTML("beforeend", `<p class="modal-problems-p"><img class="arrows-problems" src="./assets/svg/arrow-problem.svg" alt="Icône de flèche.">${difficulty.problems}</p><p class="modal-solutions-p"><span>Solution :</span> ${difficulty.solutions}</p>`));
  modalSkills.innerHTML = "";
  example.skills.forEach((skill) => modalSkills.insertAdjacentHTML("beforeend", `<li>${skill}</li>`));
}

function openModalAnimation() {
  modalScreen.classList.remove(CLASS_MODAL_SCREEN_CLOSE);
  modalScreen.style.display = "flex";
  modal.classList.add(CLASS_MODAL_OPEN);
}

function setModalPreviousExample(event) {
  event.stopPropagation();
  currentModalExampleDisplay = (currentModalExampleDisplay - 1 + examplesFilters.length) % examplesFilters.length;
  addExampleFilterAnimationOnModalEvent("change");
  adaptingModalContent();
  modalBody.scrollTop = 0;
}

function setModalNextExample(event) {
  event.stopPropagation();
  currentModalExampleDisplay = (currentModalExampleDisplay + 1) % examplesFilters.length;
  addExampleFilterAnimationOnModalEvent("change");
  adaptingModalContent();
  modalBody.scrollTop = 0;
}

function checkIfClosingModal(event) {
  if (!isModalOpen) return;
  const isClickInsideModal = modal.contains(event.target) || modalPreviousButton.contains(event.target) || modalNextButton.contains(event.target);
  if (isClickInsideModal && event.target !== modalCloseIcon) return;
  closeModalAnimation();
  addExampleFilterAnimationOnModalEvent("close");
  isModalOpen = false;
}

function closeModalAnimation() {
  modal.classList.remove(CLASS_MODAL_OPEN);
  modalScreen.classList.add(CLASS_MODAL_SCREEN_CLOSE);
  setTimeout(() => {
    modalScreen.style.display = "none";
  }, modalClosingAnimationDuration);
}

// ===== Contact =====
