// =====================================================================================================================================================
// -------- Variables ----------------------------------------------------------------------------------------------------------------------------------
// =====================================================================================================================================================
// ===== DOM =====
// → General
let root;
let rootCSS;
let body;
let anchors;
let invisibleBlockForMobile;
// → header
let header;
let headerTitleBlock;
let headerTitle;
let navMenuBurger;
let nav;
let navLinks;
// → Home
let homeSection;
let homeContent;
let homeTitle;
let homeText;
let homeButtons;
let homeContactButton;
let homeCVButton;
// → About
let aboutSection;
let aboutContent;
let aboutBlockPhoto;
let aboutImagePhoto;
let aboutText;
// → Skills
let skillsSection;
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
let examplesSection;
let examplesContent;
let examplesTitle;
let examples;
let examplesDivs;
let example1;
let example2;
let example3;
let example4;
let example5;
let examplesFilters;
let examplesH3;
// Modal
let examplesModalDatasArray;
let modalScreen;
let modal;
let modalExampleToDisplay;
let modalPreviousButton;
let modalNextButton;
let modalCloseIcon;
let modalTitle;
let modalImageA;
let modalImageB;
let modalDescriptionButtonH4;
let modalDifficultiesButtonH4;
let modalSkillsButtonH4;
let modalButtonsImages;
let modalText;
let modalTextArrowUp;
let modalTextArrowDown;
let modalLink;
// → Contact
let contactSection;
let contactContent;
let contactTitle;
let contactText;
let contactForm;
let contactFormInputs;
let contactFamilyName;
let contactGivenName;
let contactPhoneNumber;
let contactSubject;
let contactMessage;
let contactErrorsForm;
let contactErrorsFormText;
let contactSuccessForm;
let contactSuccessFormText;
let contactFormButton;

// ===== Classes =====
const CLASS_HOME_BUTTONS_INTRO = "home-buttons-intro";
const CLASS_HOME_TEXT_INTRO = "home-text-intro";
const CLASS_HOME_TITLE_INTRO = "home-title-intro";
const CLASS_ELEMENTS_HEADER_INTRO = "elements-header-intro";
const CLASS_EXAMPLE_ARTICLE_HOVER = "example-article-hover";
const CLASS_EXAMPLE_FILTER_HOVER = "example-filter-hover";
const CLASS_EXAMPLE_H3_HOVER = "example-h3-hover";
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
const CLASS_INFO_BUBBLE_DISPLAY_AND_HIDE = "info-bubble-display-and-hide";
const CLASS_INFO_BUBBLE_OPEN_LEFT = "info-bubbles-open-left";
const CLASS_INFO_BUBBLE_OPEN_RIGHT = "info-bubbles-open-right";
const CLASS_INFO_BUBBLE_WIDTH_MAX = "info-bubble-width-max";
const CLASS_INFO_BUBBLE_WIDTH_UNSET = "info-bubble-width-unset";
const CLASS_MODAL_BUTTON_ACTIVE = "modal-button-active";
const CLASS_MODAL_BUTTON_HOVER = "modal-button-hover";
const CLASS_MODAL_SLIDE_B_START_POSITION = "modal-slide-B-start-position";
const CLASS_MODAL_SLIDE_IN_LEFT = "modal-slide-in-left";
const CLASS_MODAL_SLIDE_OUT_LEFT = "modal-slide-out-left";
const CLASS_MODAL_SLIDE_IN_RIGHT = "modal-slide-in-right";
const CLASS_MODAL_SLIDE_OUT_RIGHT = "modal-slide-out-right";
const CLASS_NAV_LINK_HOVER = "nav-link-hover";
const CLASS_NAV_LINK_ACTIVE = "nav-link-active";
const CLASS_MOBILE_NAV_CLOSE = "mobile-nav-close";
const CLASS_MOBILE_NAV_HIDE = "mobile-nav-hide";
const CLASS_MOBILE_NAV_OPEN = "mobile-nav-open";
const CLASS_NAV_NORMAL_STATE = "nav-normal-state";
const CLASS_SKILL_HOVER = "skills-items-hover";
const CLASS_OUTRO_BACKWARD = "slide-outro-backward";
const CLASS_OUTRO_FORWARD = "slide-outro-forward";

// ===== Variables =====
// → General
let bottomCurrentMobileSlideLimit;
let contentSlidesAndIntroClassesArray;
let indexSlide = 0;
let isBottomMobileSlideLimitReach = false;
let isSlideScrollable = false;
let isScrolling = false;
let isTopMobileSlideLimitReach = false;
let isWindowLoaded = false;
let maxIndexSlide = 0;
let mouseX = 0;
let mouseY = 0;
let previousIndexSlide = null;
let scrollDuration = 0;
let sectionMobileSlides;
let startMobileTouch = 0;
let endMobileTouch = 0;
let topCurrentMobileSlideLimit;
// Media queries
let isOnMobile = false;
let mqMobileTrigger;
let mqMobileBreakpoint;
let mqTabletBreakpoint;
// → Header
let headerAnimationDuration = 0;
let headerHeightOnMobile;
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
let infoBubbleMargin = 0;
let infoBubbleOffsetX = 0;
let infoBubbleOffsetY = 0;
let infoBubbleOffsetYOnMobile = 0;
let infoBubbleTextsArray = [];
let infoBubbleWidth = 0;
let isHoverSkillArray = [];
let textInfoBubbleAnimationsArray = [];
let textSpeed = 0;
// → Examples
let numberOfModalExampleToDisplay = null;
let exampleTargetForLeaveDetection = null;
let examplesBlocksCollisionsArray = [];
let isPreviousExampleAlreadyReset = true;
let indexOfExampleTargetForLeaveDetection = null;
let isHoverExamplesArray = [];
let isExamplesIntroAnimationsEnded = [];
let previousExample = null;
let previousFilterAnimation = null;
let previousH3Animation = null;
let previousIndexOfExample = 0;
// Modal
let isModalOpen = false;
let isModalSlideChanging = false;
let isModalTextScrollable = false;
let modalClosingAnimationDuration = 0;
let modalPreviousActiveSection = null;
let modalSlideChangeCount = 0;
let modalSlideChangeDirection = null;
let modalSlideChangeDuration = 0;
let modalPreviousSlideChangeDirection = null;
// → Contact
let isMailAlreadySend = false;

// =====================================================================================================================================================
// -------- Changing variables on DOM load -------------------------------------------------------------------------------------------------------------
// =====================================================================================================================================================
document.addEventListener("DOMContentLoaded", () => {
  // ===== DOM =====
  // → General
  root = document.documentElement;
  rootCSS = getComputedStyle(root);
  body = document.body;
  anchors = document.querySelectorAll(".anchors");
  invisibleBlockForMobile = document.querySelectorAll(".invisible-block-for-mobile");
  // → header
  header = document.querySelector("header");
  headerTitleBlock = document.getElementById("header-title-block");
  window.headerTitle = document.querySelector("h1");
  headerTitle = window.headerTitle;
  window.navMenuBurger = document.getElementById("nav-menu-burger");
  navMenuBurger = window.navMenuBurger;
  nav = document.querySelector("nav");
  window.navLinks = document.querySelectorAll("nav a");
  navLinks = window.navLinks;
  // → Home
  homeSection = document.getElementById("home");
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
  aboutSection = document.getElementById("about");
  aboutContent = document.getElementById("about-content");
  aboutBlockPhoto = document.getElementById("about-block-photo");
  aboutImagePhoto = document.querySelector("#about-block-photo img");
  aboutText = document.getElementById("about-text");
  // → Skills
  skillsSection = document.getElementById("skills");
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
  examplesSection = document.getElementById("examples");
  examplesContent = document.getElementById("examples-content");
  examplesTitle = document.querySelector("#examples-content h2");
  window.examples = document.querySelectorAll("#examples-gallery article");
  examples = window.examples;
  examplesDivs = document.querySelectorAll("#examples-gallery article > div");
  example1 = document.getElementById("example-1");
  example2 = document.getElementById("example-2");
  example3 = document.getElementById("example-3");
  example4 = document.getElementById("example-4");
  example5 = document.getElementById("example-5");
  window.examplesFilters = document.querySelectorAll(".examples-filters");
  examplesFilters = window.examplesFilters;
  examplesH3 = document.querySelectorAll("#examples-gallery article h3");
  // Modal
  modalScreen = document.getElementById("modal-screen");
  modal = document.getElementById("modal");
  window.modalPreviousButton = document.getElementById("modal-previous-button");
  modalPreviousButton = window.modalPreviousButton;
  window.modalNextButton = document.getElementById("modal-next-button");
  modalNextButton = window.modalPreviousButton;
  modalCloseIcon = document.getElementById("modal-close-icon");
  modalTitle = document.getElementById("modal-title");
  modalImageA = document.getElementById("modal-image-A");
  modalImageB = document.getElementById("modal-image-B");
  window.modalDescriptionButtonH4 = document.getElementById("modal-description-button-h4");
  modalDescriptionButtonH4 = window.modalDescriptionButtonH4;
  window.modalDifficultiesButtonH4 = document.getElementById("modal-difficulties-button-h4");
  modalDifficultiesButtonH4 = window.modalDifficultiesButtonH4;
  window.modalSkillsButtonH4 = document.getElementById("modal-skills-button-h4");
  modalSkillsButtonH4 = window.modalSkillsButtonH4;
  modalButtonsImages = document.querySelectorAll(".modal-buttons-images");
  window.modalText = document.getElementById("modal-text");
  modalText = window.modalText;
  modalTextArrowUp = document.getElementById("modal-text-arrow-up");
  modalTextArrowDown = document.getElementById("modal-text-arrow-down");
  modalLink = document.getElementById("modal-link");
  // → Contact
  contactSection = document.getElementById("contact");
  contactContent = document.getElementById("contact-content");
  contactTitle = document.querySelector("#contact-content h2");
  contactText = document.getElementById("contact-text");
  window.contactForm = document.getElementById("contact-form");
  contactForm = window.contactForm;
  contactFormInputs = document.getElementById("contact-form-inputs");
  contactFamilyName = document.getElementById("contact-family-name");
  contactGivenName = document.getElementById("contact-given-name");
  contactPhoneNumber = document.getElementById("contact-phone-number");
  contactSubject = document.getElementById("contact-subject");
  contactMessage = document.getElementById("contact-message");
  contactErrorsForm = document.getElementById("contact-errors-form");
  contactErrorsFormText = document.getElementById("contact-errors-form-text");
  contactSuccessForm = document.getElementById("contact-success-form");
  contactSuccessFormText = document.getElementById("contact-success-form-text");
  contactFormButton = document.querySelector("#contact-form button");

  // ===== Variables =====
  // → General
  contentSlidesAndIntroClassesArray = [
    {
      slide: homeContent,
      elements: [
        { element: homeTitle, introClass: "home-title-intro" },
        { element: homeText, introClass: "home-text-intro" },
        { element: homeButtons, introClass: "home-buttons-intro" },
      ],
    },
    {
      slide: aboutContent,
      elements: [
        { element: aboutBlockPhoto, introClass: "about-block-photo-intro" },
        { element: aboutImagePhoto, introClass: "about-image-photo-intro" },
        { element: aboutText, introClass: "about-text-intro" },
      ],
    },
    {
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
      slide: examplesContent,
      elements: [
        { element: examplesTitle, introClass: "examples-title-intro" },
        { element: example1, introClass: "example-1-intro" },
        { element: example2, introClass: "example-2-intro" },
        { element: example3, introClass: "example-3-intro" },
        { element: example4, introClass: "example-4-intro" },
        { element: example5, introClass: "example-5-intro" },
      ],
    },
    {
      slide: contactContent,
      elements: [
        { element: contactTitle, introClass: "contact-title-intro" },
        { element: contactText, introClass: "contact-text-intro" },
        { element: contactFormInputs, introClass: "contact-form-inputs-intro" },
        { element: contactFormButton, introClass: "contact-form-button-intro" },
      ],
    },
  ];
  maxIndexSlide = anchors.length - 1;
  scrollDuration = parseFloat(rootCSS.getPropertyValue("--delay-before-next-scroll")) * 1000;
  sectionMobileSlides = [homeSection, aboutSection, skillsSection, examplesSection, contactSection];
  // Media queries
  mqMobileBreakpoint = rootCSS.getPropertyValue("--mq-mobile");
  window.mqMobileTrigger = window.matchMedia(`(max-width: ${mqMobileBreakpoint})`);
  mqMobileTrigger = window.mqMobileTrigger;
  mqTabletBreakpoint = rootCSS.getPropertyValue("--mq-tablet");
  // → Header
  headerAnimationDuration = parseFloat(rootCSS.getPropertyValue("--header-animation-duration")) * 1000;
  headerHeightOnMobile = parseInt(rootCSS.getPropertyValue("--header-height-on-mobile"));
  // → Skills
  isSkillsIntroAnimationsEndedArray = new Array(skillsDivs.length).fill(false);
  skillsEndingAnimationDuration = parseFloat(rootCSS.getPropertyValue("--skills-item-ending-animation-duration")) * 1000;
  // Info-bubbles
  infoBubbleMargin = parseInt(rootCSS.getPropertyValue("--bubble-margin"));
  infoBubbleOffsetX = parseInt(rootCSS.getPropertyValue("--bubble-offset-x"));
  infoBubbleOffsetY = parseInt(rootCSS.getPropertyValue("--bubble-offset-y"));
  infoBubbleOffsetYOnMobile = parseInt(rootCSS.getPropertyValue("--bubble-offset-y-on-mobile"));
  infoBubbleWidth = parseInt(rootCSS.getPropertyValue("--info-bubbles-width"));
  infoBubbleTextsArray = window.infoBubblesDatas;
  isHoverSkillArray = new Array(skillsDivs.length).fill(false);
  textSpeed = parseInt(rootCSS.getPropertyValue("--info-bubbles-text-speed"));
  // → Examples
  examplesModalDatasArray = window.examplesModalDatas;
  isExamplesIntroAnimationsEnded = new Array(examplesDivs.length).fill(false);
  // Modal
  modalClosingAnimationDuration = parseFloat(rootCSS.getPropertyValue("--modal-closing-animation-duration")) * 1000;
  modalSlideChangeDuration = parseFloat(rootCSS.getPropertyValue("--modal-slide-change-duration")) * 1000;
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

function enableScroll() {
  root.style.overflowY = "scroll";
}

function disableScroll() {
  root.style.overflowY = "hidden";
}

function disableZoom(event) {
  if (event.type === "wheel" && event.ctrlKey) event.preventDefault();
  else if (event.type === "keydown" && event.ctrlKey && (event.key === "+" || event.key === "-" || event.key === "=")) event.preventDefault();
}

function checkIfSlideIsScrollable() {
  if (root.scrollHeight > root.clientHeight) {
    isSlideScrollable = true;
  } else {
    isSlideScrollable = false;
  }
}

// → For mouse position and collision leave detection
function getMousePosition(event) {
  mouseX = event.clientX;
  mouseY = event.clientY + window.scrollY;
}

function createArrayOfBlocksCollision(targets, array) {
  for (let i = 0; i < targets.length; i++) {
    const blockCollision = targets[i].getBoundingClientRect();
    const blockCollisionObject = {
      top: blockCollision.top + window.scrollY,
      right: blockCollision.right,
      bottom: blockCollision.bottom + window.scrollY,
      left: blockCollision.left,
    };
    array.push(blockCollisionObject);
  }
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
  if (!isWindowLoaded || isModalOpen || isOnMobile || isScrolling) return;
  const direction = event.deltaY > 0 ? 1 : -1;
  scrollToSlide(indexSlide, direction);
}

function arrowsSlideChange(event) {
  if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
  if (!isWindowLoaded || isModalOpen || isOnMobile || isScrolling || isFocusedOnInput()) return;
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
  if (isOnMobile) hideHeaderNav();
  nav.classList.add(CLASS_ELEMENTS_HEADER_INTRO);
  setTimeout(() => {
    headerTitle.classList.add(CLASS_HEADER_TITLE_HOVER);
    homeTitle.classList.add(CLASS_HOME_TITLE_INTRO);
    homeText.classList.add(CLASS_HOME_TEXT_INTRO);
    homeButtons.classList.add(CLASS_HOME_BUTTONS_INTRO);
    nav.classList.remove(CLASS_ELEMENTS_HEADER_INTRO);
    if (!isOnMobile) nav.classList.add(CLASS_NAV_NORMAL_STATE);
    isHeaderTitleAnimationEnded = true;
  }, headerAnimationDuration);
}

function resetHomeBeforeReloading() {
  header.classList.remove(CLASS_HEADER_INTRO);
  headerTitleBlock.classList.remove(CLASS_ELEMENTS_HEADER_INTRO);
  if (!isOnMobile) nav.classList.remove(CLASS_NAV_NORMAL_STATE);
  else {
    hideHeaderNav();
    navMenuBurger.style.display = "none";
  }
  homeTitle.classList.remove(CLASS_HOME_TITLE_INTRO);
  homeText.classList.remove(CLASS_HOME_TEXT_INTRO);
  homeButtons.classList.remove(CLASS_HOME_BUTTONS_INTRO);
}

function addIntroAnimationsSlide() {
  for (let i = 0; i < contentSlidesAndIntroClassesArray.length; i++) {
    if (i !== indexSlide) continue;
    const elements = contentSlidesAndIntroClassesArray[i].elements;
    for (let j = 0; j < elements.length; j++) {
      const { element, introClass } = elements[j];
      element.classList.add(introClass);
    }
  }
}

function addOutroAnimationsSlide() {
  const outroAnimationType = previousIndexSlide < indexSlide ? CLASS_OUTRO_FORWARD : CLASS_OUTRO_BACKWARD;
  for (let i = 0; i < contentSlidesAndIntroClassesArray.length; i++) {
    const { slide, elements } = contentSlidesAndIntroClassesArray[i];
    if (i !== previousIndexSlide) continue;
    slide.classList.add(outroAnimationType);
    setTimeout(() => {
      for (let j = 0; j < elements.length; j++) {
        const { element, introClass } = elements[j];
        element.classList.remove(introClass);
      }
      slide.classList.remove(outroAnimationType);
    }, scrollDuration);
  }
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
    case 4:
      resetContactSlide();
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
  for (let i = 0; i < skills.length; i++) {
    const skill = skills[i];
    removeStyleCursorForSkills(skill);
    isSkillsIntroAnimationsEndedArray[i] = false;
  }
}

function resetExamplesSlide() {
  resetExampleHoverTarget();
  for (let i = 0; i < examplesFilters.length; i++) {
    const exampleFilter = examplesFilters[i];
    removeStyleCursorForExamples(exampleFilter);
    isExamplesIntroAnimationsEnded[i] = false;
  }
  if (!isModalOpen) return;
  if (!isOnMobile) {
    setTimeout(() => {
      closeModal();
      addExampleFilterAnimationOnModalEvent("close");
      isModalOpen = false;
    }, scrollDuration);
  } else {
    closeModal();
    addExampleFilterAnimationOnModalEvent("close");
    isModalOpen = false;
  }
}

function resetContactSlide() {
  setTimeout(() => {
    contactErrorsForm.style.display = "none";
    contactSuccessForm.style.display = "none";
    contactForm.reset();
  }, scrollDuration);
}

// ===== General (Mobile) =====
function checkIfOnMobileAndActiveScroll(event) {
  if (event.matches) {
    isOnMobile = true;
    hideOrShowAllMobileSlides("none");
    hideHeaderNav();
    adjustModalPosition();
    removeNormalHeaderNavSate();
    if (indexSlide !== 0) toggleMarginTopMobileSlide(sectionMobileSlides[indexSlide]);
    updateCurrentMobileSlideLimit();
    checkIfSlideIsScrollable();
    if (isModalOpen) setImageOfActiveMobileModalButton();
    if (!isModalOpen) enableScroll();
  } else {
    isOnMobile = false;
    disableScroll();
    displayHeaderNav();
    addNormalHeaderNavSate();
    removeMobileNavAnimations();
    if (indexSlide !== 0) toggleMarginTopMobileSlide(sectionMobileSlides[indexSlide]);
    hideOrShowAllMobileSlides("flex");
    updateCurrentSlideView();
    if (isModalOpen) resetModalPosition();
  }
}

/**  @param {string} value "none" or "flex" */
function hideOrShowAllMobileSlides(value) {
  for (let i = 0; i < sectionMobileSlides.length; i++) {
    if (i === indexSlide) continue;
    sectionMobileSlides[i].style.display = `${value}`;
  }
}

// For slides change (Mobile)
function updateCurrentMobileSlideLimit() {
  const currentSlide = sectionMobileSlides[indexSlide];
  topCurrentMobileSlideLimit = currentSlide.offsetTop - headerHeightOnMobile;
  bottomCurrentMobileSlideLimit = currentSlide.offsetTop + currentSlide.offsetHeight;
}

function ifMobileSlideLimitsAreReach() {
  if (isModalOpen || !isOnMobile || isScrolling) return;
  const scrollYValue = window.scrollY;
  const scrollYBottom = window.scrollY + window.innerHeight;
  if (scrollYValue <= topCurrentMobileSlideLimit) {
    setTimeout(() => {
      isTopMobileSlideLimitReach = true;
    }, 250);
  } else if (scrollYBottom >= bottomCurrentMobileSlideLimit) {
    setTimeout(() => {
      isBottomMobileSlideLimitReach = true;
    }, 250);
  } else {
    isTopMobileSlideLimitReach = false;
    isBottomMobileSlideLimitReach = false;
  }
}

function updateStartScrollingPosition(event) {
  startMobileTouch = event.changedTouches[0].clientY;
}

function checkIfSwipingToNextMobileSlide(event) {
  if (!isWindowLoaded || isModalOpen || !isOnMobile || isScrolling) return;
  if (isScrolling) return;
  endMobileTouch = event.changedTouches[0].clientY;
  const difference = startMobileTouch - endMobileTouch;
  if (difference < -40) {
    if (!isSlideScrollable || isTopMobileSlideLimitReach || difference < -300) {
      scrollToMobileSlide(indexSlide, -1);
    }
  } else if (difference > 40) {
    if (!isSlideScrollable || isBottomMobileSlideLimitReach || difference > 300) {
      scrollToMobileSlide(indexSlide, 1);
      isBottomMobileSlideLimitReach = false;
    }
  }
}

function checkIfScrollingToNextMobileSlide(event) {
  if (!isWindowLoaded || isModalOpen || !isOnMobile || isScrolling) return;
  const direction = event.deltaY > 0 ? 1 : -1;
  if (!isSlideScrollable) {
    scrollToMobileSlide(indexSlide, direction);
    isBottomMobileSlideLimitReach = false;
  } else if (isTopMobileSlideLimitReach && direction === -1) {
    scrollToMobileSlide(indexSlide, -1);
  } else if (isBottomMobileSlideLimitReach && direction === 1) {
    scrollToMobileSlide(indexSlide, direction);
    isBottomMobileSlideLimitReach = false;
  }
}

/**  @param {Number} direction (optional + or -1) only for scroll or arrow keys*/
function scrollToMobileSlide(index, direction) {
  if (!isWindowLoaded || isScrolling || !isOnMobile) return;
  if (direction) {
    index += direction;
    index = Math.max(0, Math.min(index, maxIndexSlide));
  }
  if (index === indexSlide) return;
  isScrolling = true;
  disableScroll();
  previousIndexSlide = indexSlide;
  indexSlide = index;
  const indexDifference = indexSlide - previousIndexSlide;
  const scrollBehavior = Math.abs(indexDifference) === 1 ? "smooth" : "auto";
  const sectionSlideToDisplay = sectionMobileSlides[indexSlide];
  const sectionSlideToHide = sectionMobileSlides[previousIndexSlide];
  displayNewMobileSlide(sectionSlideToDisplay);
  if (indexDifference === -1) {
    if (indexSlide !== 0) toggleMarginTopMobileSlide(sectionSlideToDisplay);
    if (previousIndexSlide !== 0) toggleMarginTopMobileSlide(sectionSlideToHide);
    anchors[previousIndexSlide].scrollIntoView({ behavior: "auto" });
  }
  if (indexDifference < -1) {
    if (indexSlide !== 0) toggleMarginTopMobileSlide(sectionSlideToDisplay);
    if (previousIndexSlide !== 0) toggleMarginTopMobileSlide(sectionSlideToHide);
  }
  anchors[indexSlide].scrollIntoView({ behavior: scrollBehavior });
  window.dispatchEvent(new CustomEvent("indexSlideChange"));
  setTimeout(() => {
    hidePreviousMobileSlide(sectionSlideToHide);
    updateCurrentSlideView();
    if (indexDifference === 1) {
      if (indexSlide !== 0) toggleMarginTopMobileSlide(sectionSlideToDisplay);
      if (previousIndexSlide !== 0) toggleMarginTopMobileSlide(sectionSlideToHide);
    }
    if (indexDifference > 1) {
      if (indexSlide !== 0) toggleMarginTopMobileSlide(sectionSlideToDisplay);
      if (previousIndexSlide !== 0) toggleMarginTopMobileSlide(sectionSlideToHide);
    }
    updateCurrentMobileSlideLimit();
    checkIfSlideIsScrollable();
    enableScroll();
    isScrolling = false;
  }, scrollDuration);
}

function hidePreviousMobileSlide(target) {
  target.style.display = "none";
}

/**  @param {int} direction -1 for previous or 1 for next*/
function displayNewMobileSlide(target) {
  target.style.display = "flex";
}

function toggleMarginTopMobileSlide(target) {
  target.classList.toggle("margin-top-mobile-slide");
}

// ===== Header =====
function handleHeaderTitleClick() {
  if (!isHeaderTitleAnimationEnded) return;
  if (!isOnMobile) scrollToSlide(1);
  else scrollToMobileSlide(1);
}

function handleNavLinkClick(event, index) {
  event.stopPropagation();
  event.preventDefault();
  if (!isWindowLoaded || index === indexSlide) return;
  if (!isOnMobile) scrollToSlide(index);
  else {
    addMobileNavCloseAnimation();
    scrollToMobileSlide(index);
  }
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

function addNormalHeaderNavSate() {
  nav.classList.add(CLASS_NAV_NORMAL_STATE);
}

function removeNormalHeaderNavSate() {
  nav.classList.remove(CLASS_NAV_NORMAL_STATE);
}

// ===== Header (Mobile) =====
function displayHeaderNav() {
  nav.classList.remove(CLASS_MOBILE_NAV_HIDE);
}

function hideHeaderNav() {
  nav.classList.add(CLASS_MOBILE_NAV_HIDE);
}

function checkIfClosingMobileNav(event) {
  if (!isOnMobile) return;
  if (event.target !== nav && event.target !== navMenuBurger) {
    addMobileNavCloseAnimation();
  }
}

function addMobileNavOpenAnimation(event) {
  event.stopPropagation();
  nav.classList.remove(CLASS_MOBILE_NAV_HIDE);
  nav.classList.remove(CLASS_MOBILE_NAV_CLOSE);
  nav.classList.add(CLASS_MOBILE_NAV_OPEN);
}

function addMobileNavCloseAnimation() {
  nav.classList.remove(CLASS_MOBILE_NAV_OPEN);
  nav.classList.add(CLASS_MOBILE_NAV_CLOSE);
}

function removeMobileNavAnimations() {
  nav.classList.remove(CLASS_MOBILE_NAV_OPEN);
  nav.classList.remove(CLASS_MOBILE_NAV_CLOSE);
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
  if (!isOnMobile) scrollToSlide(4);
  else scrollToMobileSlide(4);
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
  skillsDiv.classList.add(CLASS_SKILL_HOVER);
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
  skillsDiv.classList.remove(CLASS_SKILL_HOVER);
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
  infoBubble.classList.remove(CLASS_INFO_BUBBLE_WIDTH_UNSET);
  infoBubble.classList.remove(CLASS_INFO_BUBBLE_WIDTH_MAX);
  if (infoBubble.classList.contains(CLASS_INFO_BUBBLE_CLOSE_RIGHT)) infoBubble.classList.remove(CLASS_INFO_BUBBLE_CLOSE_RIGHT);
  else infoBubble.classList.remove(CLASS_INFO_BUBBLE_CLOSE_LEFT);
  // Determine if bubble should be on left or right side (desktop, tablet) + on top or bottom side (mobile)
  const skillSize = skillsDiv.getBoundingClientRect();
  if (isOnMobile) {
    infoBubble.classList.add(CLASS_INFO_BUBBLE_DISPLAY_AND_HIDE);
    const infoBubbleText = infoBubbleTextsArray[index];
    infoBubble.innerHTML = infoBubbleText;
    const infoBubbleSize = infoBubble.getBoundingClientRect();
    if (skillSize.top >= infoBubbleSize.height + infoBubbleOffsetYOnMobile + infoBubbleMargin + headerHeightOnMobile) {
      infoBubble.style.top = "auto";
      infoBubble.style.bottom = `${skillSize.height + infoBubbleOffsetYOnMobile}px`;
    } else {
      infoBubble.style.bottom = "auto";
      infoBubble.style.top = `${skillSize.height + infoBubbleOffsetYOnMobile}px`;
    }
    const spaceRight = window.innerWidth - skillSize.right;
    if (spaceRight >= infoBubbleWidth + infoBubbleOffsetX + infoBubbleMargin) {
      infoBubbleAnimationsLeftDirection = false;
      infoBubble.style.right = "auto";
      infoBubble.style.left = "0";
    } else if (skillSize.left >= infoBubbleWidth + infoBubbleOffsetX + infoBubbleMargin) {
      infoBubbleAnimationsLeftDirection = true;
      infoBubble.style.left = "auto";
      infoBubble.style.right = "0";
    } else {
      infoBubbleAnimationsLeftDirection = false;
      const centerPosition = (skillSize.width - infoBubbleWidth) / 2;
      infoBubble.style.right = "auto";
      infoBubble.style.left = `${centerPosition}px`;
    }
    infoBubble.classList.remove(CLASS_INFO_BUBBLE_DISPLAY_AND_HIDE);
    infoBubble.innerHTML = "";
    if (!infoBubbleAnimationsLeftDirection) infoBubble.classList.add(CLASS_INFO_BUBBLE_OPEN_RIGHT);
    else infoBubble.classList.add(CLASS_INFO_BUBBLE_OPEN_LEFT);
    animateInfoBubbleText(infoBubble, index, infoBubbleText);
  } else {
    infoBubble.style.bottom = "auto";
    infoBubble.style.top = `${infoBubbleOffsetY}px`;
    const spaceRight = window.innerWidth - skillSize.right;
    if (spaceRight >= infoBubbleWidth + infoBubbleOffsetX + infoBubbleMargin) {
      infoBubbleAnimationsLeftDirection = false;
      infoBubble.style.right = "auto";
      infoBubble.style.left = `${skillSize.width + infoBubbleOffsetX}px`;
    } else {
      infoBubbleAnimationsLeftDirection = true;
      infoBubble.style.left = "auto";
      infoBubble.style.right = `${skillSize.width + infoBubbleOffsetX}px`;
    }
    if (!infoBubbleAnimationsLeftDirection) infoBubble.classList.add(CLASS_INFO_BUBBLE_OPEN_RIGHT);
    else infoBubble.classList.add(CLASS_INFO_BUBBLE_OPEN_LEFT);
    animateInfoBubbleText(infoBubble, index);
  }
}

function animateInfoBubbleText(infoBubble, index, infoBubbleText) {
  if (!infoBubbleText) infoBubbleText = infoBubbleTextsArray[index];
  let indexChar = 0;
  infoBubble.classList.add(CLASS_INFO_BUBBLE_WIDTH_UNSET);
  const textBubbleAnimation = setInterval(() => {
    if (indexChar < infoBubbleText.length) {
      infoBubble.innerHTML += infoBubbleText.charAt(indexChar);
      indexChar++;
      const bubbleSize = infoBubble.getBoundingClientRect();
      if (bubbleSize.width >= infoBubbleWidth) {
        infoBubble.classList.remove(CLASS_INFO_BUBBLE_WIDTH_UNSET);
        infoBubble.classList.add(CLASS_INFO_BUBBLE_WIDTH_MAX);
      }
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
  previousExample.classList.remove(CLASS_EXAMPLE_FILTER_HOVER);
  examplesDivs[previousIndexOfExample].classList.remove(CLASS_EXAMPLE_ARTICLE_HOVER);
  isHoverExamplesArray[previousIndexOfExample] = false;
}

function addExampleHoverAnimation(exampleFilter, index) {
  exampleFilter.classList.add(CLASS_EXAMPLE_FILTER_HOVER);
  examplesDivs[index].classList.add(CLASS_EXAMPLE_ARTICLE_HOVER);
  examplesH3[index].classList.add(CLASS_EXAMPLE_H3_HOVER);
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
    () => {
      resetExampleHoverTarget();
    }
  );
}

function resetExampleHoverTarget() {
  if (exampleTargetForLeaveDetection === null) return;
  isPreviousExampleAlreadyReset = true;
  removeExampleTargetHoverAnimation();
  removeExampleTargetForLeaveDetection();
}

function removeExampleTargetHoverAnimation() {
  exampleTargetForLeaveDetection.classList.remove(CLASS_EXAMPLE_FILTER_HOVER);
  examplesDivs[indexOfExampleTargetForLeaveDetection].classList.remove(CLASS_EXAMPLE_ARTICLE_HOVER);
  examplesH3[indexOfExampleTargetForLeaveDetection].classList.remove(CLASS_EXAMPLE_H3_HOVER);
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
  if (isOnMobile) {
    disableScroll();
    adjustModalPosition();
    addMobileNavCloseAnimation();
  } else resetModalPosition();
  activeModalTextArrows();
  resetExampleHoverTarget();
  numberOfModalExampleToDisplay = index;
  addExampleFilterAnimationOnModalEvent("open");
  updateModalExampleToDisplay();
  openModalAnimation();
  isModalOpen = true;
}

function openModalAnimation() {
  modalScreen.classList.remove(CLASS_MODAL_SCREEN_CLOSE);
  modalScreen.style.display = "flex";
  modal.classList.add(CLASS_MODAL_OPEN);
}

function setModalPreviousExample(event) {
  event.stopPropagation();
  if (isModalSlideChanging) return;
  modalSlideChangeDirection = "previous";
  numberOfModalExampleToDisplay = (numberOfModalExampleToDisplay - 1 + examplesFilters.length) % examplesFilters.length;
  addExampleFilterAnimationOnModalEvent("change");
  updateModalExampleToDisplay();
}

function setModalNextExample(event) {
  event.stopPropagation();
  if (isModalSlideChanging) return;
  modalSlideChangeDirection = "next";
  numberOfModalExampleToDisplay = (numberOfModalExampleToDisplay + 1) % examplesFilters.length;
  addExampleFilterAnimationOnModalEvent("change");
  updateModalExampleToDisplay();
}

/**  @param {string} animationType "open" or "change" or "close" */
function addExampleFilterAnimationOnModalEvent(animationType) {
  const exampleDiv = examplesDivs[numberOfModalExampleToDisplay];
  const exampleH3 = examplesH3[numberOfModalExampleToDisplay];
  switch (animationType) {
    case "open":
      exampleH3.classList.add(CLASS_EXAMPLE_H3_HOVER);
      exampleDiv.classList.remove(CLASS_FILTER_CLOSE);
      exampleDiv.classList.add(CLASS_FILTER_OPEN);
      break;
    case "change":
      previousH3Animation.classList.remove(CLASS_EXAMPLE_H3_HOVER);
      exampleDiv.classList.remove(CLASS_FILTER_CLOSE);
      previousFilterAnimation.classList.remove(CLASS_FILTER_OPEN);
      previousFilterAnimation.classList.remove(CLASS_FILTER_CHANGE);
      exampleH3.classList.add(CLASS_EXAMPLE_H3_HOVER);
      exampleDiv.classList.add(CLASS_FILTER_CHANGE);
      break;
    case "close":
      exampleH3.classList.remove(CLASS_EXAMPLE_H3_HOVER);
      exampleDiv.classList.remove(CLASS_FILTER_OPEN);
      exampleDiv.classList.remove(CLASS_FILTER_CHANGE);
      exampleDiv.classList.add(CLASS_FILTER_CLOSE);
      break;
    default:
  }
  previousH3Animation = exampleH3;
  previousFilterAnimation = exampleDiv;
}

function updateModalExampleToDisplay() {
  modalExampleToDisplay = examplesModalDatas[numberOfModalExampleToDisplay];
  if (!modalSlideChangeDirection) modalImageA.setAttribute("src", `./assets/images/${modalExampleToDisplay.image}`);
  else changeModalSlide();
  setTimeout(() => {
    modalTitle.innerHTML = `N°${numberOfModalExampleToDisplay + 1} - ${modalExampleToDisplay.title}`;
    changeModalTextAndActiveButton("default");
    modalLink.setAttribute("href", modalExampleToDisplay.link);
    modalLink.innerHTML = `<p><span>Lien : </span>${modalExampleToDisplay.link}</p>`;
  }, modalSlideChangeDuration / 2);
}

/**  @param {string} target "reset", "description", "difficulties" or "skills" */
function changeModalTextAndActiveButton(target) {
  let htmlContent = "";
  switch (target) {
    case "description":
      if (modalPreviousActiveSection === modalDescriptionButtonH4) return;
      if (isOnMobile) {
        setImageOfActiveMobileModalButton("description");
        removeImageOfPreviousActiveMobileModalButton();
      }
      modalPreviousActiveSection.classList.remove(CLASS_MODAL_BUTTON_ACTIVE);
      modalPreviousActiveSection.classList.add(CLASS_MODAL_BUTTON_HOVER);
      modalDescriptionButtonH4.classList.remove(CLASS_MODAL_BUTTON_HOVER);
      modalDescriptionButtonH4.classList.add(CLASS_MODAL_BUTTON_ACTIVE);
      modalText.innerHTML = `<h4 id="modal-text-title">Description de la mission&nbsp;:</h4><p id="modal-description">${modalExampleToDisplay.description}</p>`;
      checkIfModalTextIsScrollable();
      modalText.scrollTop = 0;
      displayModalTextArrow();
      modalPreviousActiveSection = modalDescriptionButtonH4;
      break;
    case "difficulties":
      if (modalPreviousActiveSection === modalDifficultiesButtonH4) return;
      if (isOnMobile) {
        setImageOfActiveMobileModalButton("difficulties");
        removeImageOfPreviousActiveMobileModalButton();
      }
      modalPreviousActiveSection.classList.remove(CLASS_MODAL_BUTTON_ACTIVE);
      modalPreviousActiveSection.classList.add(CLASS_MODAL_BUTTON_HOVER);
      modalDifficultiesButtonH4.classList.remove(CLASS_MODAL_BUTTON_HOVER);
      modalDifficultiesButtonH4.classList.add(CLASS_MODAL_BUTTON_ACTIVE);
      if (modalExampleToDisplay.difficulties.length === 1) htmlContent += `<h4 id="modal-text-title">Difficulté rencontrée et solution&nbsp;:</h4>`;
      else htmlContent += `<h4 id="modal-text-title">Difficultés rencontrées et solutions&nbsp;:</h4>`;
      for (let i = 0; i < modalExampleToDisplay.difficulties.length; i++) {
        const difficulty = modalExampleToDisplay.difficulties[i];
        htmlContent += `<p class="modal-problems-p"><img class="arrows-problems" src="./assets/svg/arrow-problem.svg" alt="Icône de flèche.">${difficulty.problems}</p><p class="modal-solutions-p"><span class="modal-difficulties-span">Solution :</span> ${difficulty.solutions}</p>`;
      }
      modalText.innerHTML = "";
      modalText.insertAdjacentHTML("beforeend", htmlContent);
      checkIfModalTextIsScrollable();
      modalText.scrollTop = 0;
      displayModalTextArrow();
      modalPreviousActiveSection = modalDifficultiesButtonH4;
      break;
    case "skills":
      if (modalPreviousActiveSection === modalSkillsButtonH4) return;
      if (isOnMobile) {
        setImageOfActiveMobileModalButton("skills");
        removeImageOfPreviousActiveMobileModalButton();
      }
      modalPreviousActiveSection.classList.remove(CLASS_MODAL_BUTTON_ACTIVE);
      modalPreviousActiveSection.classList.add(CLASS_MODAL_BUTTON_HOVER);
      modalSkillsButtonH4.classList.remove(CLASS_MODAL_BUTTON_HOVER);
      modalSkillsButtonH4.classList.add(CLASS_MODAL_BUTTON_ACTIVE);
      if (modalExampleToDisplay.difficulties.length === 1) htmlContent += `<h4 id="modal-text-title">Compétence acquise :</h4><ul id="modal-skills">`;
      else htmlContent += `<h4 id="modal-text-title">Compétences acquises :</h4><ul id="modal-skills">`;
      for (let i = 0; i < modalExampleToDisplay.skills.length; i++) {
        const skill = modalExampleToDisplay.skills[i];
        htmlContent += `<li>${skill}</li>`;
      }
      htmlContent += `</ul>`;
      modalText.innerHTML = "";
      modalText.insertAdjacentHTML("beforeend", htmlContent);
      checkIfModalTextIsScrollable();
      modalText.scrollTop = 0;
      displayModalTextArrow();
      modalPreviousActiveSection = modalSkillsButtonH4;
      break;
    case "default":
      if (isOnMobile) {
        setImageOfActiveMobileModalButton("description");
      }
      if (modalPreviousActiveSection && modalPreviousActiveSection !== modalDescriptionButtonH4) {
        if (isOnMobile) removeImageOfPreviousActiveMobileModalButton();
        modalPreviousActiveSection.classList.remove(CLASS_MODAL_BUTTON_ACTIVE);
        modalPreviousActiveSection.classList.add(CLASS_MODAL_BUTTON_HOVER);
        modalDescriptionButtonH4.classList.remove(CLASS_MODAL_BUTTON_HOVER);
        modalDescriptionButtonH4.classList.add(CLASS_MODAL_BUTTON_ACTIVE);
      }
      modalText.innerHTML = `<h4 id="modal-text-title">Description de la mission&nbsp;:</h4><p id="modal-description">${modalExampleToDisplay.description}</p>`;
      checkIfModalTextIsScrollable();
      modalText.scrollTop = 0;
      displayModalTextArrow();
      modalPreviousActiveSection = modalDescriptionButtonH4;
      break;
    case "reset":
      if (modalPreviousActiveSection && modalPreviousActiveSection !== modalDescriptionButtonH4) {
        if (isOnMobile) {
          setImageOfActiveMobileModalButton("description");
          removeImageOfPreviousActiveMobileModalButton();
        }
        modalPreviousActiveSection.classList.remove(CLASS_MODAL_BUTTON_ACTIVE);
        modalPreviousActiveSection.classList.add(CLASS_MODAL_BUTTON_HOVER);
        modalDescriptionButtonH4.classList.remove(CLASS_MODAL_BUTTON_HOVER);
        modalDescriptionButtonH4.classList.add(CLASS_MODAL_BUTTON_ACTIVE);
      }
      modalPreviousActiveSection = null;
      break;
    default:
  }
}

function changeModalSlide() {
  isModalSlideChanging = true;
  modalSlideChangeCount += 1;
  removeModalSlidesClasses();
  switch (modalSlideChangeDirection) {
    case "previous":
      if (modalSlideChangeCount % 2 === 0) {
        modalImageA.setAttribute("src", `./assets/images/${modalExampleToDisplay.image}`);
        modalImageB.classList.add(CLASS_MODAL_SLIDE_OUT_RIGHT);
        modalImageA.classList.add(CLASS_MODAL_SLIDE_IN_LEFT);
        modalPreviousSlideChangeDirection = "previous-A";
      } else {
        modalImageB.setAttribute("src", `./assets/images/${modalExampleToDisplay.image}`);
        modalImageA.classList.add(CLASS_MODAL_SLIDE_OUT_RIGHT);
        modalImageB.classList.add(CLASS_MODAL_SLIDE_IN_LEFT);
        modalPreviousSlideChangeDirection = "previous-B";
      }
      break;
    case "next":
      if (modalSlideChangeCount % 2 === 0) {
        modalImageA.setAttribute("src", `./assets/images/${modalExampleToDisplay.image}`);
        modalImageB.classList.add(CLASS_MODAL_SLIDE_OUT_LEFT);
        modalImageA.classList.add(CLASS_MODAL_SLIDE_IN_RIGHT);
        modalPreviousSlideChangeDirection = "next-A";
      } else {
        modalImageB.setAttribute("src", `./assets/images/${modalExampleToDisplay.image}`);
        modalImageA.classList.add(CLASS_MODAL_SLIDE_OUT_LEFT);
        modalImageB.classList.add(CLASS_MODAL_SLIDE_IN_RIGHT);
        modalPreviousSlideChangeDirection = "next-B";
      }
      break;
    default:
  }
  setTimeout(() => {
    if (isModalSlideChanging) isModalSlideChanging = false;
  }, modalSlideChangeDuration);
}

function removeModalSlidesClasses() {
  if (modalSlideChangeCount === 1) modalImageB.classList.remove(CLASS_MODAL_SLIDE_B_START_POSITION);
  if (!modalPreviousSlideChangeDirection) return;
  switch (modalPreviousSlideChangeDirection) {
    case "previous-A":
      modalImageB.classList.remove(CLASS_MODAL_SLIDE_OUT_RIGHT);
      modalImageA.classList.remove(CLASS_MODAL_SLIDE_IN_LEFT);
      break;
    case "previous-B":
      modalImageA.classList.remove(CLASS_MODAL_SLIDE_OUT_RIGHT);
      modalImageB.classList.remove(CLASS_MODAL_SLIDE_IN_LEFT);
      break;
    case "next-A":
      modalImageB.classList.remove(CLASS_MODAL_SLIDE_OUT_LEFT);
      modalImageA.classList.remove(CLASS_MODAL_SLIDE_IN_RIGHT);
      break;
    case "next-B":
      modalImageA.classList.remove(CLASS_MODAL_SLIDE_OUT_LEFT);
      modalImageB.classList.remove(CLASS_MODAL_SLIDE_IN_RIGHT);
      break;
    default:
  }
}

function resetModalSlideSystem() {
  removeModalSlidesClasses();
  modalImageB.classList.add(CLASS_MODAL_SLIDE_B_START_POSITION);
  isModalSlideChanging = false;
  modalPreviousSlideChangeDirection = null;
  modalSlideChangeDirection = null;
  modalSlideChangeCount = 0;
}

function checkIfClosingModal(event) {
  if (!isModalOpen) return;
  const isClickInsideModal = modal.contains(event.target) || modalPreviousButton.contains(event.target) || modalNextButton.contains(event.target);
  if (isClickInsideModal && event.target !== modalCloseIcon) return;
  closeModal();
  addExampleFilterAnimationOnModalEvent("close");
  isModalOpen = false;
}

function closeModal() {
  if (isOnMobile) enableScroll();
  modal.classList.remove(CLASS_MODAL_OPEN);
  modalScreen.classList.add(CLASS_MODAL_SCREEN_CLOSE);
  disableModalTextArrows();
  resetModalSlideSystem();
  setTimeout(() => {
    modalScreen.style.display = "none";
    changeModalTextAndActiveButton("reset");
  }, modalClosingAnimationDuration);
}

function checkIfModalTextIsScrollable() {
  if (!isModalOpen) return;
  if (modalText.scrollHeight > modalText.clientHeight) {
    isModalTextScrollable = true;
    modalTextArrowDown.style.visibility = "visible";
    modalTextArrowUp.style.visibility = "hidden";
  } else {
    isModalTextScrollable = false;
    modalTextArrowDown.style.visibility = "hidden";
    modalTextArrowUp.style.visibility = "hidden";
  }
}

function displayModalTextArrow() {
  if (!isModalOpen || !isModalTextScrollable) return;
  if (modalText.scrollTop > 0) {
    modalTextArrowUp.style.visibility = "visible";
  } else {
    modalTextArrowUp.style.visibility = "hidden";
  }
  if (modalText.scrollTop + modalText.clientHeight < modalText.scrollHeight) {
    modalTextArrowDown.style.visibility = "visible";
  } else {
    modalTextArrowDown.style.visibility = "hidden";
  }
}

function activeModalTextArrows() {
  modalTextArrowUp.style.display = "flex";
  modalTextArrowDown.style.display = "flex";
}

function disableModalTextArrows() {
  modalTextArrowUp.style.display = "none";
  modalTextArrowDown.style.display = "none";
}

// → Modal (Mobile)
function adjustModalPosition() {
  if (isOnMobile) modalScreen.style.top = window.scrollY + "px";
}

function resetModalPosition() {
  modalScreen.style.top = "auto";
}

/**  @param {string} target "description", "difficulties" or "skills" */
function setImageOfActiveMobileModalButton(target) {
  if (target) {
    switch (target) {
      case "description":
        modalButtonsImages[0].setAttribute("src", "./assets/svg/description-black.svg");
        break;
      case "difficulties":
        modalButtonsImages[2].setAttribute("src", "./assets/svg/exclamation-mark-black.svg");
        break;
      case "skills":
        modalButtonsImages[4].setAttribute("src", "./assets/svg/cog-black.svg");
        break;
      default:
    }
  } else {
    switch (modalPreviousActiveSection) {
      case modalDescriptionButtonH4:
        modalButtonsImages[0].setAttribute("src", "./assets/svg/description-black.svg");
        break;
      case modalDifficultiesButtonH4:
        modalButtonsImages[2].setAttribute("src", "./assets/svg/exclamation-mark-black.svg");
        break;
      case modalSkillsButtonH4:
        modalButtonsImages[4].setAttribute("src", "./assets/svg/cog-black.svg");
        break;
      default:
    }
  }
}

function removeImageOfPreviousActiveMobileModalButton() {
  switch (modalPreviousActiveSection) {
    case modalDescriptionButtonH4:
      modalButtonsImages[0].setAttribute("src", "./assets/svg/description-white.svg");
      break;
    case modalDifficultiesButtonH4:
      modalButtonsImages[2].setAttribute("src", "./assets/svg/exclamation-mark-white.svg");
      break;
    case modalSkillsButtonH4:
      modalButtonsImages[4].setAttribute("src", "./assets/svg/cog-white.svg");
      break;
    default:
  }
}

// ===== Contact =====
function isABot() {
  if (contactPhoneNumber.value) {
    contactErrorsFormText.innerHTML = `Désolé, une erreur est survenue, veuillez revenir à la section contact.`;
    contactErrorsForm.style.display = "flex";
    return true;
  }
}

function validateFields() {
  if (/^\s*$/.test(contactFamilyName.value) || /^\s*$/.test(contactGivenName.value) || /^\s*$/.test(contactSubject.value) || /^\s*$/.test(contactMessage.value)) {
    contactErrorsFormText.innerHTML = `Les champs ne doivent pas contenir que des espaces ou être vides !`;
    contactErrorsForm.style.display = "flex";
    return false;
  } else {
    contactErrorsForm.style.display = "none";
    return true;
  }
}

function contactPostRequest(event) {
  event.preventDefault();
  if (isABot()) return;
  if (isMailAlreadySend) {
    contactSuccessFormText.innerHTML = `Vous avez déjà envoyé un message avec succès.`;
    contactSuccessForm.style.display = "flex";
    return;
  }
  if (!validateFields()) return;

  const data = {};
  const formData = new FormData(event.target);
  const entries = Array.from(formData.entries());
  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    data[key] = value;
  }

  fetch("http://localhost:3000/backend/requests.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((data) => {
          throw new Error(data.message);
        });
      }
      return response.json();
    })
    .then((data) => {
      isMailAlreadySend = true;
      contactErrorsForm.style.display = "none";
      contactSuccessForm.style.display = "flex";
    })
    .catch((error) => {
      contactErrorsFormText.innerHTML = error.message;
      contactErrorsForm.style.display = "flex";
    });
}
