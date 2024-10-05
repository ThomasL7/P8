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
let smallMobileScreenMessage;
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
// let aboutBackground;
let aboutContent;
let aboutBlockPhoto;
let aboutImagePhoto;
let aboutText;
let aboutTextP;
let aboutP1;
let aboutP2;
let aboutP3;
let aboutP4;
let aboutTextArrowDownDiv;
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
let skillsIcons;
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
let examplesImages;
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
let modalChallengesButtonH4;
let modalSkillsButtonH4;
let modalButtonsImages;
let modalText;
let modalTextArrowDownDiv;
let modalLink;
// → Contact
let contactSection;
let contactContent;
let contactTitle;
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
// → Footer
let footer;
let footerLinks;

// ===== Classes =====
const CLASS_HOME_BUTTONS_INTRO = "home-buttons-intro";
const CLASS_HOME_TEXT_INTRO = "home-text-intro";
const CLASS_HOME_TITLE_INTRO = "home-title-intro";
const CLASS_ELEMENTS_FOOTER_INTRO = "elements-header-intro";
const CLASS_ELEMENTS_HEADER_INTRO = "elements-header-intro";
const CLASS_EXAMPLE_FILTER_HOVER = "example-filter-hover";
const CLASS_EXAMPLE_H3_HOVER = "example-h3-hover";
const CLASS_EXAMPLE_FILTER_IMAGE_HOVER = "example-filter-image-hover";
const CLASS_FOOTER_INTRO = "footer-intro";
const CLASS_FRONT_Z_INDEX = "front-z-index";
const CLASS_MODAL_OPEN = "modal-open";
const CLASS_MODAL_SCREEN_CLOSE = "modal-screen-close";
const CLASS_HEADER_INTRO = "header-intro";
const CLASS_HEADER_TITLE_BLOCK_HOVER = "header-title-block-hover";
const CLASS_HEADER_TITLE_IMAGE_HOVER = "header-title-image-hover";
const CLASS_HEADER_TITLE_HOVER = "header-title-hover";
const CLASS_HOME_BUTTON_HOVER = "home-button-hover";
const CLASS_INFO_BUBBLE_CLOSE_BOTTOM = "info-bubbles-close-bottom";
const CLASS_INFO_BUBBLE_CLOSE_LEFT = "info-bubbles-close-left";
const CLASS_INFO_BUBBLE_CLOSE_RIGHT = "info-bubbles-close-right";
const CLASS_INFO_BUBBLE_CLOSE_TOP = "info-bubbles-close-top";
const CLASS_INFO_BUBBLE_DISPLAY_AND_HIDE = "info-bubble-display-and-hide";
const CLASS_INFO_BUBBLE_OPEN_BOTTOM = "info-bubbles-open-bottom";
const CLASS_INFO_BUBBLE_OPEN_LEFT = "info-bubbles-open-left";
const CLASS_INFO_BUBBLE_OPEN_RIGHT = "info-bubbles-open-right";
const CLASS_INFO_BUBBLE_OPEN_TOP = "info-bubbles-open-top";
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
const CLASS_MOBILE_NAV_OPEN = "mobile-nav-open";
const CLASS_SKILL_HOVER = "skills-items-hover";
const CLASS_SKILLS_TEXT_INTRO = "skills-text-intro";
// const CLASS_SKILLS_TEXT_VISIBLE = "skills-text-visible";
const CLASS_OUTRO_BACKWARD = "slide-outro-backward";
const CLASS_OUTRO_FORWARD = "slide-outro-forward";

// ===== Variables =====
// → General
let bottomCurrentMobileSlideLimit;
let contentSlidesAndIntroClassesArray;
let hoverTarget = null;
let indexSlide = 0;
let isAuthorizeToSlideChange = true;
let isBottomMobileSlideLimitReach = false;
let isForceToMobileMod = false;
let isHoverScrollableContent = false;
let isMobileScreenTooSmall = false;
let isReloading = false;
let isSlideScrollable = false;
let isScrolling = false;
let isTopMobileSlideLimitReach = false;
let isWindowLoaded = false;
let limitReachCount = 0;
let maxIndexSlide = 0;
let mouseX = 0;
let mouseY = 0;
let mouseYFinal = 0;
let previousIndexSlide = null;
let scrollDistance = 0;
let scrollDuration = 0;
let sectionMobileSlides;
let startTouchTime = 0;
let startTouchY = 0;
let startTouchYInScrolling = 0;
let endTouchY = 0;
let topCurrentMobileSlideLimit;
let touchDistance = 0;
let touchDistanceToChangeSlide = 50;
window.isTouchInsteadOfMouse = false;
window.mobileDetected = false;
// Media queries
let isOnMobile = false;
// → Header
let headerAnimationDuration = 0;
let headerHeightOnMobile;
let isHeaderTitleAnimationEnded = false;
// → Home
let isHomeButtonsAnimationEnded = false;
let isHoverHomeContactButton = false;
let isHoverHomeCVButton = false;
// → About
let aboutTextBlockCollisionArray = [];
let isAboutTextScrollable = false;
// let isHoverAboutText;
let scrollAboutTextInterval;
// → Skills
const easingSkillsEndingAnimationDuration = "linear";
let indexOfItemsDivsInSkillsTreesArray = [];
let indexOfSkillTargetForLeaveDetection = null;
let itemDivIndexInSkillsTreeArray = [];
let isPreviousSkillsAlreadyReset = true;
let isSkillsIntroAnimationsEndedArray = [];
let parentTree = null;
let previousAnimatedItem = null;
let previousIndexOfSkill = null;
let previousParentTree = null;
let previousSkill = null;
let skillsBlocksCollisionsArray = [];
let skillsEndingHoverAnimationsArray = [];
let skillsEndingAnimationDuration = 0;
let skillTargetForLeaveDetection = null;
// Info-bubbles
let indexOfInfoBubbleToReset;
let infoBubbleAnimationsDirection = "";
let infoBubbleMargin = 0;
let infoBubbleOffsetX = 0;
let infoBubbleOffsetY = 0;
let infoBubbleOffsetYOnMobile = 0;
// let infoBubbleTextsArray = [];
let infoBubbleMaxWidth = 0;
let isHoverSkillArray = [];
// let textInfoBubbleAnimationsArray = [];
let textSpeed = 0;
// → Examples
let currentHoverExampleIndex = null;
let examplesBlocksCollisionsArray = [];
let isHoverExamplesArray = [];
let isExamplesIntroAnimationsEnded = [];
let isExamplesIntroAnimationsStarted = [];
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
let numberOfModalExampleToDisplay = null;
let previousExampleImage = null;
let previousExampleH3 = null;
let scrollModalTextInterval;
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
  smallMobileScreenMessage = document.getElementById("small-mobile-screen-message");
  // → header
  header = document.getElementById("header");
  window.headerTitleBlock = document.getElementById("header-title-block");
  headerTitleBlock = window.headerTitleBlock;
  headerTitleImage = document.querySelector("#header-title-block img");
  headerTitle = document.querySelector("h1");
  window.navMenuBurger = document.getElementById("nav-menu-burger");
  navMenuBurger = window.navMenuBurger;
  window.nav = document.querySelector("nav");
  nav = window.nav;
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
  // aboutBackground = document.querySelector("#about .background");
  aboutContent = document.getElementById("about-content");
  aboutBlockPhoto = document.getElementById("about-block-photo");
  aboutImagePhoto = document.querySelector("#about-block-photo img");
  window.aboutText = document.getElementById("about-text");
  aboutText = window.aboutText;
  aboutTextP = document.getElementById("about-text-p");
  aboutP1 = document.getElementById("about-p-1");
  aboutP2 = document.getElementById("about-p-2");
  aboutP3 = document.getElementById("about-p-3");
  window.aboutP4 = document.getElementById("about-p-4");
  aboutP4 = window.aboutP4;
  window.aboutTextArrowDownDiv = document.getElementById("about-text-arrow-down");
  aboutTextArrowDownDiv = window.aboutTextArrowDownDiv;
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
  skillsIcons = document.querySelectorAll(".skills-items-div > img");
  window.skillsText = document.querySelector("#skills-content > p");
  skillsText = window.skillsText;
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
  examplesImages = document.querySelectorAll(".examples-images");
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
  window.modalChallengesButtonH4 = document.getElementById("modal-challenges-button-h4");
  modalChallengesButtonH4 = window.modalChallengesButtonH4;
  window.modalSkillsButtonH4 = document.getElementById("modal-skills-button-h4");
  modalSkillsButtonH4 = window.modalSkillsButtonH4;
  modalButtonsImages = document.querySelectorAll(".modal-buttons-images");
  window.modalText = document.getElementById("modal-text");
  modalText = window.modalText;
  window.modalTextArrowDownDiv = document.getElementById("modal-text-arrow-down");
  modalTextArrowDownDiv = window.modalTextArrowDownDiv;
  modalLink = document.getElementById("modal-link");
  // → Contact
  contactSection = document.getElementById("contact");
  contactContent = document.getElementById("contact-content");
  contactTitle = document.querySelector("#contact-content h2");
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
  // → header
  footer = document.getElementById("footer");
  footerLinksDiv = document.querySelector("#footer div");

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
        { element: aboutP1, introClass: "about-p-1-intro" },
        { element: aboutP2, introClass: "about-p-2-intro" },
        { element: aboutP3, introClass: "about-p-3-intro" },
        { element: aboutP4, introClass: "about-p-4-intro" },
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
        { element: contactFormInputs, introClass: "contact-form-inputs-intro" },
        { element: contactFormButton, introClass: "contact-form-button-intro" },
      ],
    },
  ];
  maxIndexSlide = anchors.length - 1;
  scrollDuration = parseFloat(rootCSS.getPropertyValue("--delay-before-next-scroll")) * 1000;
  sectionMobileSlides = [homeSection, aboutSection, skillsSection, examplesSection, contactSection];
  // Media queries
  window.mqMobileTrigger = window.matchMedia(`(max-width: ${rootCSS.getPropertyValue("--mq-mobile")})`);
  window.mqForceMobileMod = window.matchMedia(`(max-height: 590px)`);
  window.mqMaxHeight = window.matchMedia(`(max-height: 450px)`);
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
  infoBubbleMaxWidth = parseInt(rootCSS.getPropertyValue("--info-bubbles-max-width"));
  infoBubbleWidthPourcent = parseFloat(rootCSS.getPropertyValue("--info-bubbles-width-pourcent")) / 100;
  // infoBubbleTextsArray = window.infoBubblesDatas;
  isHoverSkillArray = new Array(skillsDivs.length).fill(false);
  textSpeed = parseInt(rootCSS.getPropertyValue("--info-bubbles-text-speed"));
  // → Examples
  examplesModalDatasArray = window.examplesModalDatas;
  isExamplesIntroAnimationsEnded = new Array(examplesDivs.length).fill(false);
  isExamplesIntroAnimationsStarted = new Array(examplesDivs.length).fill(false);
  // Modal
  modalClosingAnimationDuration = parseFloat(rootCSS.getPropertyValue("--modal-closing-animation-duration")) * 1000;
  modalSlideChangeDuration = parseFloat(rootCSS.getPropertyValue("--modal-slide-change-duration")) * 1000;
});

// =====================================================================================================================================================
// -------- Functions ----------------------------------------------------------------------------------------------------------------------------------
// =====================================================================================================================================================
// ===== General =====
function setIsWindowLoadedTrue() {
  // if (isOnMobile) setTimeout(() => (isWindowLoaded = true), headerAnimationDuration * 4);
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

function checkIfSlideIsScrollable() {
  if (root.scrollHeight > root.clientHeight) {
    isSlideScrollable = true;
  } else {
    isSlideScrollable = false;
  }
}

function setControlType() {
  if (window.matchMedia("(pointer: coarse)").matches) {
    window.isTouchInsteadOfMouse = true;
  } else {
    window.isTouchInsteadOfMouse = false;
  }
}

function activeMouseControl() {
  if (window.isTouchInsteadOfMouse) {
    window.isTouchInsteadOfMouse = false;
  }
}

function activeTouchControl() {
  if (!window.isTouchInsteadOfMouse) {
    window.isTouchInsteadOfMouse = true;
  }
}

function checkIfTargetIsScrollable(target, arrowDown) {
  if (target.scrollHeight - 1 > target.clientHeight) {
    arrowDown.style.display = "flex";
    return true;
  } else {
    arrowDown.style.display = "none";
    return false;
  }
}

function updateTargetDownArrow(target, isScrollable, arrowDown, margin) {
  if (!isScrollable) {
    arrowDown.style.display = "none";
    return;
  }
  if (target.scrollTop + target.clientHeight < target.scrollHeight - margin) {
    arrowDown.style.display = "flex";
  } else {
    arrowDown.style.display = "none";
    if (indexSlide === 1) clearInterval(scrollAboutTextInterval);
    if (indexSlide === 3) clearInterval(scrollModalTextInterval);
  }
}

function checkIfUnderMQMaxHeight(event) {
  if (isOnMobile) {
    if (event.matches) {
      smallMobileScreenMessage.style.display = "flex";
      isMobileScreenTooSmall = true;
    } else {
      smallMobileScreenMessage.style.display = "none";
      isMobileScreenTooSmall = false;
    }
  } else {
    smallMobileScreenMessage.style.display = "none";
    isMobileScreenTooSmall = false;
  }
}

function checkToForceMobileMod(event) {
  if (event.matches && !isOnMobile) {
    isForceToMobileMod = true;
    checkIfOnMobileAndActiveScroll(window.mqMobileTrigger);
  } else {
    isForceToMobileMod = false;
    checkIfOnMobileAndActiveScroll(window.mqMobileTrigger);
  }
}

function detectIfPhone() {
  const userAgent = navigator.userAgent;
  if (/android/i.test(userAgent)) {
    window.mobileDetected = true;
    // } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
  } else if (/iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.mobileDetected = true;
  } else if (/windows phone/i.test(userAgent)) {
    window.mobileDetected = true;
  } else window.mobileDetected = false;
}

// let startY = 0;
// window.addEventListener("touchstart", function (e) {
//   startY = e.touches[0].clientY;
// });

// window.addEventListener(
//   "touchmove",
//   function (e) {
//     const currentY = e.touches[0].clientY;

//     // Si l'utilisateur tire vers le bas depuis le haut de la page (scroll en haut)
//     if (window.scrollY <= 0 && currentY > startY && indexSlide !== 0) {
//       e.preventDefault(); // Empêche le pull-to-refresh
//     }
//   },
//   { passive: false }
// );

// → For mouse position and collision leave detection
function getMousePosition(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
  mouseYFinal = mouseY + window.scrollY;
}

function updateMousePosition() {
  mouseYFinal = mouseY + window.scrollY;
}

function createArrayOfBlocksCollision(targets, array) {
  if (!NodeList.prototype.isPrototypeOf(targets)) targets = [targets];
  const zoomRatio = window.innerWidth / document.documentElement.clientWidth;
  for (let i = 0; i < targets.length; i++) {
    const blockCollision = targets[i].getBoundingClientRect();
    const scrollY = window.scrollY;
    const blockCollisionObject = {
      top: (blockCollision.top + scrollY) / zoomRatio,
      right: blockCollision.right / zoomRatio,
      bottom: (blockCollision.bottom + scrollY) / zoomRatio,
      left: blockCollision.left / zoomRatio,
    };
    array.push(blockCollisionObject);
  }
}

function createAllArraysOfBlocksCollision() {
  createArrayOfBlocksCollision(aboutText, aboutTextBlockCollisionArray);
  createArrayOfBlocksCollision(skills, skillsBlocksCollisionsArray);
  createArrayOfBlocksCollision(examples, examplesBlocksCollisionsArray);
}

function updateAllArraysOfBlocksCollision() {
  aboutTextBlockCollisionArray = [];
  createArrayOfBlocksCollision(aboutText, aboutTextBlockCollisionArray);
  skillsBlocksCollisionsArray = [];
  createArrayOfBlocksCollision(skills, skillsBlocksCollisionsArray);
  examplesBlocksCollisionsArray = [];
  createArrayOfBlocksCollision(examples, examplesBlocksCollisionsArray);
}

function checkIfCursorHoverTarget(collisionTarget, onHoverFunction, onOutsideFunction) {
  const isCurrentlyHoverBlock = mouseX >= collisionTarget.left && mouseX <= collisionTarget.right && mouseYFinal >= collisionTarget.top && mouseYFinal <= collisionTarget.bottom;
  if (isCurrentlyHoverBlock) onHoverFunction();
  else if (!isCurrentlyHoverBlock) onOutsideFunction();
}

function handleEnterForAccessibility(event) {
  // event.stopPropagation();
  if (event.key === "Enter" || event.keyCode === 13) {
    const focusedElement = document.activeElement;
    // if (indexSlide === 2) {
    // console.log("Focused element:", focusedElement);
    const skillsDivsArray = [...skillsDivs];
    if (focusedElement && skillsDivsArray.includes(focusedElement)) {
      const index = skillsDivsArray.indexOf(focusedElement);
      handleTouchingSkill(index);
    }
    const skillsIconsArray = [...skillsIcons];
    if (focusedElement && skillsIconsArray.includes(focusedElement)) {
      const index = skillsIconsArray.indexOf(focusedElement);
      handleTouchingSkill(index);
    }
    // }
  }
}

// → For slides change
function scrollSlideChange(event) {
  if (event.ctrlKey || !isWindowLoaded || isModalOpen || isOnMobile || isScrolling || isHoverScrollableContent || isMobileScreenTooSmall) return;
  const direction = event.deltaY > 0 ? 1 : -1;
  scrollToSlide(indexSlide, direction);
}

function tabletSlideChange() {
  if (!isWindowLoaded || isOnMobile || isModalOpen || isScrolling || isHoverScrollableContent || isMobileScreenTooSmall) return;
  if (touchDistance < -40) scrollToSlide(indexSlide, -1);
  else if (touchDistance > 40) scrollToSlide(indexSlide, 1);
}

// function arrowsSlideChange(event) {
//   if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
//   if (!isWindowLoaded || isModalOpen || isOnMobile || isScrolling || isFocusedOnInput()) return;
//   const direction = event.key === "ArrowDown" ? 1 : -1;
//   scrollToSlide(indexSlide, direction);
// }

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

function updateCurrentSlideViewForResize() {
  if (isOnMobile) return;
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
  if (index === 0) disableHeaderTitleBlockHover();
  const scrollBehavior = Math.abs(indexSlide - previousIndexSlide) === 1 ? "smooth" : "auto";
  anchors[indexSlide].scrollIntoView({ behavior: scrollBehavior });
  window.dispatchEvent(new CustomEvent("indexSlideChange"));
  setTimeout(() => (isScrolling = false), scrollDuration);
}

function addHeaderAndHomeIntroAnimations() {
  // aboutBackground.classList.remove("background-hidden");
  header.classList.add(CLASS_HEADER_INTRO);
  headerTitleBlock.classList.add(CLASS_ELEMENTS_HEADER_INTRO);
  headerTitleBlock.style.display = "flex";
  if (isOnMobile) {
    nav.style.display = "none";
    navMenuBurger.classList.add(CLASS_ELEMENTS_HEADER_INTRO);
    navMenuBurger.style.display = "flex";
  } else {
    nav.classList.add(CLASS_ELEMENTS_HEADER_INTRO);
    nav.style.display = "flex";
  }
  footer.classList.add(CLASS_FOOTER_INTRO);
  footerLinksDiv.classList.add(CLASS_ELEMENTS_FOOTER_INTRO);
  footerLinksDiv.style.display = "flex";
  setTimeout(() => {
    homeTitle.classList.add(CLASS_HOME_TITLE_INTRO);
    homeText.classList.add(CLASS_HOME_TEXT_INTRO);
    homeButtons.classList.add(CLASS_HOME_BUTTONS_INTRO);
    headerTitleBlock.classList.remove(CLASS_ELEMENTS_HEADER_INTRO);
    navMenuBurger.classList.remove(CLASS_ELEMENTS_HEADER_INTRO);
    nav.classList.remove(CLASS_ELEMENTS_HEADER_INTRO);
    footerLinksDiv.classList.remove(CLASS_ELEMENTS_FOOTER_INTRO);
    isHeaderTitleAnimationEnded = true;
    // enableScroll();
  }, headerAnimationDuration);
  // setTimeout(() => {
  //   enableScroll();
  // }, 1000);
}

function resetHomeBeforeReloading() {
  isReloading = true;
  header.classList.remove(CLASS_HEADER_INTRO);
  footer.classList.remove(CLASS_FOOTER_INTRO);
  headerTitleBlock.style.display = "none";
  nav.style.display = "none";
  footerLinksDiv.style.display = "none";
  navMenuBurger.style.display = "none";
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
    case 1:
      resetAboutSlide();
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

function resetAboutSlide() {
  setTimeout(() => {
    aboutTextP.scrollTop = 0;
    updateTargetDownArrow(aboutTextP, isAboutTextScrollable, aboutTextArrowDownDiv, 2);
  }, scrollDuration);
  isHoverScrollableContent = false;
}

function resetSkillsSlide() {
  resetSkillHoverTarget();
  for (let i = 0; i < skills.length; i++) {
    removeStyleCursorForSkills(skills[i]);
    isSkillsIntroAnimationsEndedArray[i] = false;
  }
  // skillsText.classList.remove(CLASS_SKILLS_TEXT_VISIBLE);
}

function resetExamplesSlide() {
  removeExamplesHover();
  for (let i = 0; i < examplesFilters.length; i++) {
    removeStyleCursorForExamples(examples[i]);
    isExamplesIntroAnimationsStarted[i] = false;
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
  if (event.matches || isForceToMobileMod) {
    isOnMobile = true;
    window.isOnMobile = true;
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    viewportMeta.setAttribute("content", "width=device-width, initial-scale=1.0");
    checkIfUnderMQMaxHeight(window.mqMaxHeight);
    isHoverScrollableContent = false;
    hideOrShowAllMobileSlides("none");
    // hideOrShowAllMobileSlides("flex");
    navMenuBurger.style.display = "flex";
    nav.style.display = "none";
    adjustModalPosition();
    enableScroll();
    updateCurrentMobileSlideLimit();
    checkIfSlideIsScrollable();
    if (isModalOpen) setImageOfActiveMobileModalButton();
    if (!isModalOpen && isWindowLoaded) enableScroll();
    updateAllArraysOfBlocksCollision();
  } else {
    isOnMobile = false;
    window.isOnMobile = false;
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    viewportMeta.setAttribute("content", "width=device-width, initial-scale=1.0, user-scalable=no");
    checkIfUnderMQMaxHeight(window.mqMaxHeight);
    disableScroll();
    navMenuBurger.style.display = "none";
    nav.style.display = "flex";
    // if (isHoverAboutText) isHoverScrollableContent = true;
    removeImageOfPreviousActiveMobileModalButton();
    removeMobileNavAnimations();
    hideOrShowAllMobileSlides("flex");
    updateCurrentSlideView();
    if (isModalOpen) resetModalPosition();
    updateAllArraysOfBlocksCollision();
  }
}

// function disablePushToReload() {
//   if (indexSlide === 0) root.classList.remove("disablePushToReload");
//   else root.classList.add("disablePushToReload");
// }

/**  @param {string} value "none" or "flex" */
function hideOrShowAllMobileSlides(value) {
  for (let i = 0; i < sectionMobileSlides.length; i++) {
    if (i === indexSlide) continue;
    sectionMobileSlides[i].style.display = `${value}`;
  }
}

// For slides change (Mobile)
function preventTouchEvents(event) {
  if (!isOnMobile) event.preventDefault();
  else if (indexSlide !== 0) event.preventDefault();
}

function setTouchStartVariables(event) {
  startTouchY = event.touches[0].clientY;
  startTouchYInScrolling = startTouchY;
  // startTouchTime = new Date().getTime();
  // initialScrollY = window.scrollY;
}

function disablePushToReload(event) {
  // if (isScrolling) {
  //   event.preventDefault();
  // }

  if (event.cancelable) {
    if (window.scrollY <= 0 && endTouchY > startTouchY && indexSlide !== 0) {
      event.preventDefault();
    }
  }
}

function calculateTouchDistance(event) {
  if (!isWindowLoaded || isScrolling) return;
  endTouchY = event.changedTouches[0].clientY;
  touchDistance = startTouchY - endTouchY;
  direction = touchDistance > touchDistanceToChangeSlide ? 1 : touchDistance < -touchDistanceToChangeSlide ? -1 : null;
}

function calculateScrollDistance(event) {
  // const currentTouchY = event.touches[0].clientY;
  // const currentTime = new Date().getTime();
  // const distance = startTouchYInScrolling - currentTouchY;
  // const scrollSpeed = Math.max(0.1, 20 / (currentTime - startTouchTime));
  // scrollDistance = distance * scrollSpeed;
  // startTouchYInScrolling = currentTouchY;
  // startTouchTime = currentTime;
}

function mobileScroll() {
  if (isScrolling) return;
  if (isOnMobile && indexSlide !== 0) {
    window.scrollBy(0, scrollDistance);
  }
}

// let initialScrollY;
// function mobileScrollGlide() {
//   if (isScrolling) return;
//   if (isOnMobile && indexSlide !== 0) {
//     const currentTime = new Date().getTime();
//     const elapsedTime = currentTime - startTouchTime;

//     const finalScrollY = window.scrollY;
//     const distanceScrolled = finalScrollY - initialScrollY;

//     // Calculer la vitesse initiale
//     velocity = (distanceScrolled / elapsedTime) * 0.2;

//     // Définir une fonction pour appliquer la décélération
//     function decelerateScroll() {
//       if (Math.abs(velocity) > 0.1) {
//         window.scrollBy(0, velocity);
//         velocity *= 0.95; // Réduit la vitesse progressivement
//         scrollTimeout = requestAnimationFrame(decelerateScroll);
//       }
//     }

//     // Commence la décélération
//     decelerateScroll();
//   }
// }

function updateDirection(event) {
  direction = event.deltaY > 0 ? 1 : -1;
}

let direction;
let limitTopTimeout;
let limitBottomTimeout;

function handleWheelScroll(event) {
  if (isReloading || event.ctrlKey || !isWindowLoaded || isModalOpen || !isOnMobile || isScrolling || isHoverScrollableContent || isMobileScreenTooSmall) return;

  const currentSection = sectionMobileSlides[indexSlide];
  const sectionTop = currentSection.offsetTop;
  const sectionBottom = sectionTop + currentSection.offsetHeight;
  const scrollPosition = window.scrollY + window.innerHeight;
  if (!isSlideScrollable) {
    if (direction === -1) {
      scrollToMobileSlide(indexSlide, -1);
    }
    if (direction === 1) {
      scrollToMobileSlide(indexSlide, 1);
    }
  } else {
    if (isTopMobileSlideLimitReach && direction === -1 && window.scrollY <= sectionTop) {
      event.preventDefault();
      window.scrollTo(0, sectionBottom - window.innerHeight);
      scrollToMobileSlide(indexSlide, direction);
      clearTimeout(limitTopTimeout);
      // enableScroll();
    } else if (isBottomMobileSlideLimitReach && direction === 1 && scrollPosition >= sectionBottom) {
      event.preventDefault();
      window.scrollTo(0, sectionBottom - window.innerHeight);
      // window.scrollTo({
      //   top: sectionBottom - window.innerHeight,
      //   behavior: "smooth",
      // });

      scrollToMobileSlide(indexSlide, direction);
      clearTimeout(limitBottomTimeout);
      // enableScroll();
    } else if (window.scrollY <= sectionTop) {
      event.preventDefault();
      window.scrollTo(0, sectionTop);
      // window.scrollTo({
      //   top: sectionTop,
      //   behavior: "smooth",
      // });
      disableScroll();
      limitTopTimeout = setTimeout(() => {
        isTopMobileSlideLimitReach = true;
      }, 500);
    } else if (scrollPosition >= sectionBottom) {
      disableScroll();
      event.preventDefault();
      window.scrollTo(0, sectionBottom - window.innerHeight);
      limitBotTimeout = setTimeout(() => {
        isBottomMobileSlideLimitReach = true;
      }, 500);
    } else {
      isTopMobileSlideLimitReach = false;
      isBottomMobileSlideLimitReach = false;
    }
  }
}

function handleSwipe(event) {
  if (event.ctrlKey || !isWindowLoaded || isModalOpen || !isOnMobile || isScrolling || isHoverScrollableContent || isMobileScreenTooSmall) return;

  const currentSection = sectionMobileSlides[indexSlide];
  const sectionTop = currentSection.offsetTop;
  const sectionBottom = sectionTop + currentSection.offsetHeight;
  const scrollPosition = window.scrollY + window.innerHeight;

  if (isTopMobileSlideLimitReach && direction === -1) {
    event.preventDefault();
    window.scrollTo(0, sectionBottom - window.innerHeight);
    scrollToMobileSlide(indexSlide, direction);
    clearTimeout(limitTopTimeout);
    // setTimeout(() => {
    //   isTopMobileSlideLimitReach = false;
    // }, scrollDuration);
  }
  if (isBottomMobileSlideLimitReach && direction === 1) {
    event.preventDefault();
    window.scrollTo(0, sectionBottom - window.innerHeight);
    scrollToMobileSlide(indexSlide, direction);
    clearTimeout(limitBotTimeout);
    // setTimeout(() => {
    //   isBottomMobileSlideLimitReach = false;
    // }, scrollDuration);
  }
  if (!isTopMobileSlideLimitReach) {
    if (window.scrollY <= sectionTop) {
      event.preventDefault();
      window.scrollTo(0, sectionTop);
      limitTopTimeout = setTimeout(() => {
        isTopMobileSlideLimitReach = true;
      }, 500);
    }
  }
  if (!isBottomMobileSlideLimitReach) {
    if (scrollPosition >= sectionBottom) {
      event.preventDefault();
      window.scrollTo(0, sectionBottom - window.innerHeight);
      limitBotTimeout = setTimeout(() => {
        isBottomMobileSlideLimitReach = true;
      }, 500);
    }
  }
}

// Par exemple, tu peux autoriser le scroll à un moment précis :
function allowScrollToNextSection() {
  isScrollAllowed = true;
}

function preventScrollToNextSection() {
  isScrollAllowed = false;
}

// // let currentSectionIndex = 0;
// let isTransitionAllowed = false;

// window.addEventListener("wheel", (event) => {
//   if (isTransitionAllowed) {
//     // Si on scrolle vers le bas
//     if (event.deltaY > 0 && currentSectionIndex < aboutSection.length - 1) {
//       // scrollToSection(currentSectionIndex + 1);
//     }
//     // Si on scrolle vers le haut
//     else if (event.deltaY < 0 && currentSectionIndex > 0) {
//       // scrollToSection(currentSectionIndex - 1);
//     }
//   }
// });

function checkIfSwipingToNextMobileSlide() {
  // !isAuthorizeToSlideChange
  if (!isWindowLoaded || !isOnMobile || !isAuthorizeToSlideChange || isModalOpen || isScrolling || isHoverScrollableContent || isMobileScreenTooSmall) return;
  const direction = touchDistance > touchDistanceToChangeSlide ? 1 : touchDistance < -touchDistanceToChangeSlide ? -1 : null;
  if (!direction) return;
  if (indexSlide === 0) {
    scrollToMobileSlide(indexSlide, direction);
    isBottomMobileSlideLimitReach = false;
  } else {
    if (!isSlideScrollable) {
      scrollToMobileSlide(indexSlide, direction);
      isBottomMobileSlideLimitReach = false;
    } else {
      if (isTopMobileSlideLimitReach && direction === -1) {
        scrollToMobileSlide(indexSlide, -1);
      } else if (isBottomMobileSlideLimitReach && direction === 1) {
        scrollToMobileSlide(indexSlide, direction);
        isBottomMobileSlideLimitReach = false;
      }
      setTimeout(() => {
        ifMobileSlideLimitsAreReach();
      }, 200);
    }
  }
}

function checkIfScrollingToNextMobileSlide(event) {
  if (event.ctrlKey || !isWindowLoaded || isModalOpen || !isAuthorizeToSlideChange || !isOnMobile || isScrolling || isHoverScrollableContent || isMobileScreenTooSmall) return;
  const direction = event.deltaY > 0 ? 1 : -1;
  if (indexSlide === 0) {
    scrollToMobileSlide(indexSlide, direction);
    isBottomMobileSlideLimitReach = false;
  } else {
    if (!isSlideScrollable) {
      scrollToMobileSlide(indexSlide, direction);
      isBottomMobileSlideLimitReach = false;
    } else {
      if (isTopMobileSlideLimitReach && direction === -1) {
        scrollToMobileSlide(indexSlide, -1);
      } else if (isBottomMobileSlideLimitReach && direction === 1) {
        scrollToMobileSlide(indexSlide, direction);
        isBottomMobileSlideLimitReach = false;
      }
      setTimeout(() => {
        ifMobileSlideLimitsAreReach();
      }, 200);
    }
  }
}

function updateCurrentMobileSlideLimit() {
  const currentSection = sectionMobileSlides[indexSlide];
  const sectionTop = currentSection.offsetTop;
  const sectionBottom = sectionTop + currentSection.offsetHeight - 1;
  const scrollPosition = window.scrollY + window.innerHeight;
  topCurrentMobileSlideLimit = sectionTop;
  bottomCurrentMobileSlideLimit = sectionBottom;

  const zoomRatio = window.innerWidth / document.documentElement.clientWidth;

  // topCurrentMobileSlideLimit = 0;
  // bottomCurrentMobileSlideLimit = window.innerHeight / zoomRatio;
  // bottomCurrentMobileSlideLimit = window.screen.height / zoomRatio;
  // bottomCurrentMobileSlideLimit = window.innerHeight;
  // bottomCurrentMobileSlideLimit = window.scrollYBottom;
}

function authorizeSlideChange() {
  isAuthorizeToSlideChange = true;
}

function ifMobileSlideLimitsAreReach() {
  if (isModalOpen || !isOnMobile || isScrolling) return;
  const scrollYValue = window.scrollY;
  const zoomRatio = window.innerWidth / document.documentElement.clientWidth;
  const scrollYBottom = window.scrollY + window.innerHeight;
  if (scrollYValue <= topCurrentMobileSlideLimit) {
    isTopMobileSlideLimitReach = true;
  }
  if (scrollYBottom >= bottomCurrentMobileSlideLimit) {
    isBottomMobileSlideLimitReach = true;
  }
  if (scrollYValue > topCurrentMobileSlideLimit && scrollYBottom < bottomCurrentMobileSlideLimit) {
    isTopMobileSlideLimitReach = false;
    isBottomMobileSlideLimitReach = false;
  }
}

function ifMobileSlideLimitsAreReachForScroll() {
  if (isModalOpen || !isOnMobile || isScrolling) return;
  const scrollYValue = window.scrollY;
  const scrollYBottom = window.scrollY + window.innerHeight;
  if (scrollYValue <= topCurrentMobileSlideLimit) {
    if (limitReachCount > 0) limitReachCount = -1;
    else if (limitReachCount > -2) limitReachCount--;
    if (limitReachCount <= -2) {
      isTopMobileSlideLimitReach = true;
      limitReachCount = 0;
    }
  } else if (scrollYBottom >= bottomCurrentMobileSlideLimit) {
    if (limitReachCount < 0) limitReachCount = 1;
    else if (limitReachCount < 2) limitReachCount++;
    if (limitReachCount >= 2) {
      isBottomMobileSlideLimitReach = true;
      limitReachCount = 0;
    }
  } else {
    limitReachCount = 0;
    isTopMobileSlideLimitReach = false;
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
  isAuthorizeToSlideChange = false;
  disableScroll();
  previousIndexSlide = indexSlide;
  indexSlide = index;
  const indexDifference = indexSlide - previousIndexSlide;
  const scrollBehavior = Math.abs(indexDifference) === 1 ? "smooth" : "auto";
  const sectionSlideToDisplay = sectionMobileSlides[indexSlide];
  const sectionSlideToHide = sectionMobileSlides[previousIndexSlide];
  displayNewMobileSlide(sectionSlideToDisplay);
  if (indexDifference <= -1) {
    anchors[previousIndexSlide].scrollIntoView({ behavior: "auto" });
  }
  anchors[indexSlide].scrollIntoView({ behavior: scrollBehavior });
  window.dispatchEvent(new CustomEvent("indexSlideChange"));
  setTimeout(() => {
    hidePreviousMobileSlide(sectionSlideToHide);
    updateCurrentSlideView();
    if (indexSlide === 0 || indexSlide === 4) {
      // updateCurrentMobileSlideLimit();
      checkIfSlideIsScrollable();
      updateCurrentMobileSlideLimit();
      authorizeSlideChange();
    }
    // checkIfSlideIsScrollable();
    // updateCurrentMobileSlideLimit();
    // authorizeSlideChange();
    // updateCurrentSlideView();
    isTopMobileSlideLimitReach = false;
    isBottomMobileSlideLimitReach = false;
    // checkIfSlideIsScrollable();
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

// ===== Header =====
function handleHeaderTitleClick() {
  if (!isHeaderTitleAnimationEnded) return;
  if (!isOnMobile) scrollToSlide(0);
  else scrollToMobileSlide(0);
}

function addHeaderTitleHover() {
  if (indexSlide === 0 || isOnMobile) return;
  headerTitleBlock.classList.add(CLASS_HEADER_TITLE_BLOCK_HOVER);
  headerTitleImage.classList.add(CLASS_HEADER_TITLE_IMAGE_HOVER);
  headerTitle.classList.add(CLASS_HEADER_TITLE_HOVER);
}

function removeHeaderTitleHover() {
  if (isOnMobile) return;
  if (indexSlide === 0) return;
  headerTitleBlock.classList.remove(CLASS_HEADER_TITLE_BLOCK_HOVER);
  headerTitleImage.classList.remove(CLASS_HEADER_TITLE_IMAGE_HOVER);
  headerTitle.classList.remove(CLASS_HEADER_TITLE_HOVER);
}

function disableHeaderTitleBlockHover() {
  headerTitleBlock.classList.remove(CLASS_HEADER_TITLE_BLOCK_HOVER);
  headerTitleImage.classList.remove(CLASS_HEADER_TITLE_IMAGE_HOVER);
  headerTitle.classList.remove(CLASS_HEADER_TITLE_HOVER);
}

function handleNavLinkClick(event, index) {
  // activeTouchControl();
  event.stopPropagation();
  if (!isWindowLoaded || isScrolling || index === indexSlide) return;
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

function removeNavHoverAnimationForNewSlide() {
  navLinks[previousIndexSlide].classList.add(CLASS_NAV_LINK_HOVER);
  navLinks[indexSlide].classList.remove(CLASS_NAV_LINK_HOVER);
}

// ===== Header (Mobile) =====
function checkIfClosingMobileNav(event) {
  // if (!isOnMobile) return;
  if (event.target !== nav && event.target !== navMenuBurger) {
    addMobileNavCloseAnimation();
  }
}

function addMobileNavOpenAnimation(event) {
  event.stopPropagation();
  // startTouchY = 0;
  nav.style.display = "flex";
  nav.classList.remove(CLASS_MOBILE_NAV_CLOSE);
  nav.classList.add(CLASS_MOBILE_NAV_OPEN);
}

function addMobileNavCloseAnimation() {
  nav.classList.remove(CLASS_MOBILE_NAV_OPEN);
  nav.classList.add(CLASS_MOBILE_NAV_CLOSE);
}

function hideNavAfterCloseAnimation(event) {
  if (event.animationName === "mobile-nav-close") {
    nav.style.display = "none";
  }
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
function handleAboutTextScroll() {
  // isHoverAboutText = true;
  if (isOnMobile || !isAboutTextScrollable) return;
  isHoverScrollableContent = true;
}

function handleLeavingAboutText(event) {
  // isHoverAboutText = false;
  if (isOnMobile || !isAboutTextScrollable) return;
  if (!event) isHoverScrollableContent = false;
  else if (!aboutText.contains(event.target)) {
    isHoverScrollableContent = false;
  }
}

/**  @param {string} delay if should be "delay" or not */
function checkIfAboutTextScrollable(delay) {
  if ((isOnMobile && !isForceToMobileMod) || indexSlide !== 1) return;
  if (delay)
    setTimeout(() => {
      isAboutTextScrollable = checkIfTargetIsScrollable(aboutTextP, aboutTextArrowDownDiv);
    }, scrollDuration);
  else isAboutTextScrollable = checkIfTargetIsScrollable(aboutTextP, aboutTextArrowDownDiv);
}

function updateAboutTextArrow(event) {
  if ((isOnMobile && !isForceToMobileMod) || indexSlide !== 1) return;
  if (event) {
    if (event.type === "keydown") updateTargetDownArrow(aboutTextP, isAboutTextScrollable, aboutTextArrowDownDiv, 2);
  } else updateTargetDownArrow(aboutTextP, isAboutTextScrollable, aboutTextArrowDownDiv, 2);
}

function swipeAboutText() {
  if (isHoverScrollableContent && indexSlide === 1) {
    aboutTextP.scrollBy(0, scrollDistance * 0.4);
  }
}

function scrollAboutText() {
  scrollAboutTextInterval = setInterval(() => {
    aboutTextP.scrollBy(0, 1);
    updateAboutTextArrow();
  }, 1);
}

function stopAboutTextScroll() {
  clearInterval(scrollAboutTextInterval);
}

function checkIfHoverAboutText() {
  if (indexSlide !== 1) return;
  // isHoverScrollableContent = true;
  // updateMousePosition();

  // if (indexSlide !== 1) return;
  // setTimeout(() => {
  updateMousePosition();
  checkIfCursorHoverTarget(
    aboutTextBlockCollisionArray[0],
    () => {
      isHoverScrollableContent = true;
    },
    () => {
      isHoverScrollableContent = false;
    }
  );
  // }, scrollDuration);
}

// ===== Skills =====
// function setSkillPVisible() {
//   setTimeout(() => {
//     skillsText.classList.add(CLASS_SKILLS_TEXT_VISIBLE);
//     // skillsText.style.opacity = 1;
//     skillsText.style.display = "flex";
//     skillsText.classList.remove(CLASS_SKILLS_TEXT_INTRO);
//   }, 10);
// }

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
  // if (index !== 1) return;
  if (previousSkill !== null) return;
  // updateAllArraysOfBlocksCollision;
  updateMousePosition();
  checkIfCursorHoverTarget(
    skillsBlocksCollisionsArray[index],
    () => {
      handleEnterSkill(skillsDiv, index);
    },
    () => {}
  );
}

function handleEnterSkill(skillsDiv, index) {
  // if (isSkillsIntroAnimationsEndedArray[index]) isSkillsIntroAnimationsEndedArray[index] = false;
  if (!skillsDiv) skillsDiv = skillsDivs[index];
  if (previousSkill === skillsDiv || !isSkillsIntroAnimationsEndedArray[index]) return;
  // if (previousSkill === skillsDiv || !isSkillsIntroAnimationsEndedArray[index]) return;
  resetPreviousSkillIfEnterNewSkill();
  // setSkillTargetForLeaveDetection(skillsDiv, index);
  addSkillHoverAnimation(skillsDiv, index);
  isPreviousSkillsAlreadyReset = false;
  setPreviousSkill(skillsDiv, index);
  // currentHoverSkill = skillsDiv;
}

function handleTouchingSkill(index) {
  const skillsDiv = skillsDivs[index];
  if (skillsDiv === previousSkill) return;
  resetPreviousSkillIfEnterNewSkill();
  setPreviousSkill(skillsDiv, index);
  addSkillHoverAnimation(skillsDiv, index);
  isPreviousSkillsAlreadyReset = false;
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

// function setSkillTargetForLeaveDetection(skillsDiv, index) {
//   skillTargetForLeaveDetection = skillsDiv;
//   indexOfSkillTargetForLeaveDetection = index;
// }

function checkIfStillTouchingSameSkill(event) {
  if (previousSkill === null || previousSkill.contains(event.target)) return;
  resetSkillHoverTarget();
  // previousSkill = null;
}

function setPreviousSkill(skillsDiv, index) {
  previousSkill = skillsDiv;
  previousIndexOfSkill = index;
}

function handleLeaveSkill(index) {
  if (isSkillsIntroAnimationsEndedArray[index]) {
    resetSkillHoverTarget();
  }
}

// function handleLeaveSkillBeforeEndAnimation() {
//   if (indexSlide !== 2 || isSkillsIntroAnimationsEndedArray[previousIndexOfSkill] || previousIndexOfSkill === null) return;
//   checkIfCursorHoverTarget(
//     skillsBlocksCollisionsArray[previousIndexOfSkill],
//     () => {},
//     () => resetSkillHoverTarget()
//   );
// }

function resetSkillHoverTarget() {
  if (isPreviousSkillsAlreadyReset) return;
  // if (skillTargetForLeaveDetection === null) return;
  // if (isPreviousSkillsAlreadyReset) return;
  isPreviousSkillsAlreadyReset = true;
  removeSkillTargetHoverAnimation();
  previousSkill = null;
  previousIndexOfSkill = null;
  // removeSkillTargetForLeaveDetection();
}

function removeSkillTargetHoverAnimation() {
  isHoverSkillArray[previousIndexOfSkill] = false;
  addEndingSkillAnimation(previousSkill);
  hideAndResetInfoBubble(previousIndexOfSkill);
}

// function removeSkillTargetForLeaveDetection() {
//   skillTargetForLeaveDetection = null;
//   indexOfSkillTargetForLeaveDetection = null;
// }

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
  indexOfInfoBubbleToReset = index;
  const infoBubble = infoBubblesArray[index];
  infoBubble.classList.remove(CLASS_INFO_BUBBLE_CLOSE_BOTTOM);
  infoBubble.classList.remove(CLASS_INFO_BUBBLE_CLOSE_LEFT);
  infoBubble.classList.remove(CLASS_INFO_BUBBLE_CLOSE_RIGHT);
  infoBubble.classList.remove(CLASS_INFO_BUBBLE_CLOSE_TOP);
  // Determine if bubble should be on left or right side (desktop, tablet) + on top or bottom side (mobile)
  infoBubble.classList.add(CLASS_INFO_BUBBLE_DISPLAY_AND_HIDE);
  const infoBubbleSize = infoBubble.getBoundingClientRect();
  infoBubble.classList.remove(CLASS_INFO_BUBBLE_DISPLAY_AND_HIDE);
  const skillSize = skillsDiv.getBoundingClientRect();
  const fullInfoBubbleWidth = infoBubbleMaxWidth + infoBubbleOffsetX + infoBubbleMargin;
  if (isOnMobile) {
    const realInfoBubbleWidth = window.innerWidth * infoBubbleWidthPourcent;
    if (realInfoBubbleWidth <= infoBubbleMaxWidth) {
      const centerPosition = window.innerWidth / 2 - skillSize.left - realInfoBubbleWidth / 2;
      infoBubble.style.right = "auto";
      infoBubble.style.left = `${centerPosition}px`;
    } else {
      const spaceLeftFromCenter = skillSize.left + skillSize.width / 2;
      const spaceRightFromCenter = window.innerWidth - skillSize.right + skillSize.width / 2;
      if (infoBubbleMaxWidth / 2 <= spaceLeftFromCenter && infoBubbleMaxWidth / 2 <= spaceRightFromCenter) {
        const centerPosition = skillSize.width / 2 - infoBubbleMaxWidth / 2;
        infoBubble.style.right = "auto";
        infoBubble.style.left = `${centerPosition}px`;
      } else {
        const centerPosition = window.innerWidth / 2 - skillSize.left - infoBubbleMaxWidth / 2;
        infoBubble.style.right = "auto";
        infoBubble.style.left = `${centerPosition}px`;
      }
    }
    const fullInfoBubbleHeight = infoBubbleSize.height + infoBubbleOffsetYOnMobile + infoBubbleMargin;
    if (fullInfoBubbleHeight <= skillSize.top - headerHeightOnMobile) {
      infoBubble.style.top = "auto";
      infoBubble.style.bottom = `${skillSize.height + infoBubbleOffsetYOnMobile}px`;
      infoBubble.classList.add(CLASS_INFO_BUBBLE_OPEN_TOP);
      infoBubbleAnimationsDirection = "top";
    } else {
      infoBubble.style.bottom = "auto";
      infoBubble.style.top = `${skillSize.height + infoBubbleOffsetYOnMobile}px`;
      infoBubble.classList.add(CLASS_INFO_BUBBLE_OPEN_BOTTOM);
      infoBubbleAnimationsDirection = "bottom";
    }
  } else {
    const spaceRight = window.innerWidth - skillSize.right;
    infoBubble.style.bottom = "auto";
    infoBubble.style.top = `${infoBubbleOffsetY}px`;
    if (fullInfoBubbleWidth <= spaceRight) {
      infoBubble.style.right = "auto";
      infoBubble.style.left = `${skillSize.width + infoBubbleOffsetX}px`;
      infoBubble.classList.add(CLASS_INFO_BUBBLE_OPEN_RIGHT);
      infoBubbleAnimationsDirection = "right";
    } else {
      infoBubble.style.left = "auto";
      infoBubble.style.right = `${skillSize.width + infoBubbleOffsetX}px`;
      infoBubble.classList.add(CLASS_INFO_BUBBLE_OPEN_LEFT);
      infoBubbleAnimationsDirection = "left";
    }
  }
}

// function animateInfoBubbleText(infoBubble, index, infoBubbleText) {
// function animateInfoBubbleText(infoBubble, index) {
//   // if (!infoBubbleText) infoBubbleText = infoBubbleTextsArray[index];
//   let indexChar = 0;
//   infoBubble.classList.add(CLASS_INFO_BUBBLE_WIDTH_UNSET);
//   const textBubbleAnimation = setInterval(() => {
//     if (indexChar < infoBubbleText.length) {
//       infoBubble.innerHTML += infoBubbleText.charAt(indexChar);
//       indexChar++;
//       const bubbleSize = infoBubble.getBoundingClientRect();
//       if (bubbleSize.width >= infoBubbleWidth) {
//         infoBubble.classList.remove(CLASS_INFO_BUBBLE_WIDTH_UNSET);
//         infoBubble.classList.add(CLASS_INFO_BUBBLE_WIDTH_MAX);
//       }
//     } else {
//       clearInterval(textBubbleAnimation);
//       removeAnimationFromArray(infoBubble, textInfoBubbleAnimationsArray);
//     }
//   }, textSpeed);
//   textInfoBubbleAnimationsArray.push({ name: infoBubble, animation: textBubbleAnimation });
// }

function hideAndResetInfoBubble(index) {
  //indexOfInfoBubbleToReset
  const infoBubble = infoBubblesArray[index];
  switch (infoBubbleAnimationsDirection) {
    case "top":
      infoBubble.classList.remove(CLASS_INFO_BUBBLE_OPEN_TOP);
      infoBubble.classList.add(CLASS_INFO_BUBBLE_CLOSE_TOP);
      break;
    case "bottom":
      infoBubble.classList.remove(CLASS_INFO_BUBBLE_OPEN_BOTTOM);
      infoBubble.classList.add(CLASS_INFO_BUBBLE_CLOSE_BOTTOM);
      break;
    case "left":
      infoBubble.classList.remove(CLASS_INFO_BUBBLE_OPEN_LEFT);
      infoBubble.classList.add(CLASS_INFO_BUBBLE_CLOSE_LEFT);
      break;
    case "right":
      infoBubble.classList.remove(CLASS_INFO_BUBBLE_OPEN_RIGHT);
      infoBubble.classList.add(CLASS_INFO_BUBBLE_CLOSE_RIGHT);
      break;
    default:
  }
}

// ===== Examples =====
function setIsExamplesIntroAnimationsStartedTrue(index) {
  isExamplesIntroAnimationsStarted[index] = true;
}

function setIsExamplesIntroAnimationsEndedTrue(index) {
  isExamplesIntroAnimationsEnded[index] = true;
}

function addStyleCursorForExamples(example) {
  example.style.cursor = "pointer";
}

function removeStyleCursorForExamples(example) {
  example.style.cursor = "default";
}

function handleEnterExample(index) {
  // if (isExamplesIntroAnimationsEnded[index])
  if (currentHoverExampleIndex === index) return;
  // if (isExamplesIntroAnimationsEnded[index]) {
  //   addExampleHoverAnimation(index);
  //   currentHoverExampleIndex = index;
  // } else {
  if (isExamplesIntroAnimationsEnded[index]) {
    addExampleHoverAnimation(index);
    currentHoverExampleIndex = index;
  } else {
    console.log("a");
    checkIfCursorHoverTarget(
      examplesBlocksCollisionsArray[index],
      () => {
        console.log("b");
        addExampleHoverAnimation(index);
        currentHoverExampleIndex = index;
      },
      () => {}
    );
  }
  // checkIfCursorHoverTarget(
  //   examplesBlocksCollisionsArray[index],
  //   () => {
  //     addExampleHoverAnimation(index);
  //     currentHoverExampleIndex = index;
  //   },
  //   () => {}
  // );
  // }
}

function addExampleHoverAnimation(index) {
  examplesImages[index].classList.add(CLASS_EXAMPLE_FILTER_IMAGE_HOVER);
  examplesFilters[index].classList.add(CLASS_EXAMPLE_FILTER_HOVER);
  examplesH3[index].classList.add(CLASS_EXAMPLE_H3_HOVER);
  isHoverExamplesArray[index] = true;
}

function handleLeaveExample(index) {
  if (!isExamplesIntroAnimationsEnded[index]) return;
  // if (isScrolling) return;
  // if (!isExamplesIntroAnimationsEnded[index]) return;
  removeExamplesHover();
  // checkIfCursorHoverTarget(
  //   examplesBlocksCollisionsArray[index],
  //   () => {},
  //   () => {
  //     removeExamplesHover();
  //   }
  // );
}

function handleLeaveExampleBeforeEndAnimation() {
  if (indexSlide !== 3 || isExamplesIntroAnimationsEnded[currentHoverExampleIndex] || currentHoverExampleIndex === null) return;
  // if (isScrolling) return;
  checkIfCursorHoverTarget(
    examplesBlocksCollisionsArray[currentHoverExampleIndex],
    () => {},
    () => {
      removeExamplesHover();
    }
  );
}

function removeExamplesHover() {
  if (currentHoverExampleIndex === null) return;
  // examplesImages[currentHoverExampleIndex].classList.remove(CLASS_EXAMPLE_FILTER_IMAGE_HOVER);
  // examplesFilters[currentHoverExampleIndex].classList.remove(CLASS_EXAMPLE_FILTER_HOVER);
  // examplesH3[currentHoverExampleIndex].classList.remove(CLASS_EXAMPLE_H3_HOVER);
  // isHoverExamplesArray[currentHoverExampleIndex] = false;
  currentHoverExampleIndex = null;
  for (let i = 0; i < examplesFilters.length; i++) {
    examplesImages[i].classList.remove(CLASS_EXAMPLE_FILTER_IMAGE_HOVER);
    examplesFilters[i].classList.remove(CLASS_EXAMPLE_FILTER_HOVER);
    examplesH3[i].classList.remove(CLASS_EXAMPLE_H3_HOVER);
    isHoverExamplesArray[i] = false;
  }
}

// → Modal
function openModalExample(event, index) {
  event.stopPropagation();
  if (!isExamplesIntroAnimationsStarted[index]) return;
  if (isOnMobile) {
    disableScroll();
    adjustModalPosition();
    addMobileNavCloseAnimation();
  } else resetModalPosition();
  // activeModalTextArrows();
  removeExamplesHover();
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
  const exampleImage = examplesImages[numberOfModalExampleToDisplay];
  const exampleH3 = examplesH3[numberOfModalExampleToDisplay];
  switch (animationType) {
    case "open":
      exampleH3.classList.add(CLASS_EXAMPLE_H3_HOVER);
      exampleImage.classList.add(CLASS_EXAMPLE_FILTER_IMAGE_HOVER);
      previousExampleH3 = exampleH3;
      previousExampleImage = exampleImage;
      break;
    case "change":
      previousExampleH3.classList.remove(CLASS_EXAMPLE_H3_HOVER);
      previousExampleImage.classList.remove(CLASS_EXAMPLE_FILTER_IMAGE_HOVER);
      exampleH3.classList.add(CLASS_EXAMPLE_H3_HOVER);
      exampleImage.classList.add(CLASS_EXAMPLE_FILTER_IMAGE_HOVER);
      previousExampleH3 = exampleH3;
      previousExampleImage = exampleImage;
      break;
    case "close":
      previousExampleH3.classList.remove(CLASS_EXAMPLE_H3_HOVER);
      previousExampleImage.classList.remove(CLASS_EXAMPLE_FILTER_IMAGE_HOVER);
      previousExampleH3 = null;
      previousExampleImage = null;
      break;
    default:
  }
}

function updateModalExampleToDisplay() {
  modalExampleToDisplay = examplesModalDatas[numberOfModalExampleToDisplay];
  if (!modalSlideChangeDirection) modalImageA.setAttribute("src", `./assets/images/${modalExampleToDisplay.image}`);
  else changeModalSlide();
  setTimeout(() => {
    modalTitle.innerHTML = `N°${numberOfModalExampleToDisplay + 1} - ${modalExampleToDisplay.title}`;
    changeModalTextAndActiveButton("default");
    modalLink.setAttribute("href", modalExampleToDisplay.link);
    // modalLink.innerHTML = `<p>${modalExampleToDisplay.link}</p>`;
  }, modalSlideChangeDuration / 2);
}

/**  @param {string} target "reset", "description", "challenges" or "skills" */
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
      modalText.scrollTop = 0;
      checkIfModalTextScrollable();
      updateModalTextArrow();
      modalPreviousActiveSection = modalDescriptionButtonH4;
      break;
    case "challenges":
      if (modalPreviousActiveSection === modalChallengesButtonH4) return;
      if (isOnMobile) {
        setImageOfActiveMobileModalButton("challenges");
        removeImageOfPreviousActiveMobileModalButton();
      }
      modalPreviousActiveSection.classList.remove(CLASS_MODAL_BUTTON_ACTIVE);
      modalPreviousActiveSection.classList.add(CLASS_MODAL_BUTTON_HOVER);
      modalChallengesButtonH4.classList.remove(CLASS_MODAL_BUTTON_HOVER);
      modalChallengesButtonH4.classList.add(CLASS_MODAL_BUTTON_ACTIVE);
      if (modalExampleToDisplay.challenges.length === 1) htmlContent += `<h4 id="modal-text-title">Challenge rencontrée et solution&nbsp;:</h4>`;
      else htmlContent += `<h4 id="modal-text-title">Challenges rencontrées et solutions&nbsp;:</h4>`;
      for (let i = 0; i < modalExampleToDisplay.challenges.length; i++) {
        const challenge = modalExampleToDisplay.challenges[i];
        htmlContent += `<p class="modal-problems-p"><img class="arrows-problems" src="./assets/svg/arrow-problem.svg" alt="Icône de flèche.">${challenge.problems}</p><p class="modal-solutions-p"><span class="modal-challenges-span">Solution :</span> ${challenge.solutions}</p>`;
      }
      modalText.innerHTML = "";
      modalText.insertAdjacentHTML("beforeend", htmlContent);
      modalText.scrollTop = 0;
      checkIfModalTextScrollable();
      updateModalTextArrow();
      modalPreviousActiveSection = modalChallengesButtonH4;
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
      if (modalExampleToDisplay.challenges.length === 1) htmlContent += `<h4 id="modal-text-title">Compétence acquise :</h4><ul id="modal-skills">`;
      else htmlContent += `<h4 id="modal-text-title">Compétences acquises :</h4><ul id="modal-skills">`;
      for (let i = 0; i < modalExampleToDisplay.skills.length; i++) {
        const skill = modalExampleToDisplay.skills[i];
        htmlContent += `<li>${skill}</li>`;
      }
      htmlContent += `</ul>`;
      modalText.innerHTML = "";
      modalText.insertAdjacentHTML("beforeend", htmlContent);
      modalText.scrollTop = 0;
      checkIfModalTextScrollable();
      updateModalTextArrow();
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
      modalText.scrollTop = 0;
      checkIfModalTextScrollable();
      updateModalTextArrow();
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
  clearInterval(scrollModalTextInterval);
  modal.classList.remove(CLASS_MODAL_OPEN);
  modalScreen.classList.add(CLASS_MODAL_SCREEN_CLOSE);
  // disableModalTextArrows();
  resetModalSlideSystem();
  setTimeout(() => {
    modalScreen.style.display = "none";
    changeModalTextAndActiveButton("reset");
  }, modalClosingAnimationDuration);
}

function checkIfModalTextScrollable() {
  if (!isModalOpen) return;
  isModalTextScrollable = checkIfTargetIsScrollable(modalText, aboutTextArrowDownDiv);
}

function updateModalTextArrow(event) {
  if (event) {
    if (event.type === "keydown") updateTargetDownArrow(modalText, isModalTextScrollable, modalTextArrowDownDiv, 2);
  } else updateTargetDownArrow(modalText, isModalTextScrollable, modalTextArrowDownDiv, 2);
}

function scrollModalText() {
  scrollModalTextInterval = setInterval(() => {
    modalText.scrollBy(0, 1);
    updateModalTextArrow();
  }, 1);
}

function stopModalTextScroll() {
  clearInterval(scrollModalTextInterval);
}

// → Modal (Mobile)
function adjustModalPosition() {
  if (isOnMobile) modalScreen.style.top = window.scrollY + "px";
}

function resetModalPosition() {
  modalScreen.style.top = "auto";
}

/**  @param {string} target "description", "challenges" or "skills" */
function setImageOfActiveMobileModalButton(target) {
  if (target) {
    switch (target) {
      case "description":
        modalButtonsImages[0].setAttribute("src", "./assets/svg/description-black.svg");
        break;
      case "challenges":
        modalButtonsImages[1].setAttribute("src", "./assets/svg/exclamation-mark-black.svg");
        break;
      case "skills":
        modalButtonsImages[2].setAttribute("src", "./assets/svg/cog-black.svg");
        break;
      default:
    }
  } else {
    switch (modalPreviousActiveSection) {
      case modalDescriptionButtonH4:
        modalButtonsImages[0].setAttribute("src", "./assets/svg/description-black.svg");
        break;
      case modalChallengesButtonH4:
        modalButtonsImages[1].setAttribute("src", "./assets/svg/exclamation-mark-black.svg");
        break;
      case modalSkillsButtonH4:
        modalButtonsImages[2].setAttribute("src", "./assets/svg/cog-black.svg");
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
    case modalChallengesButtonH4:
      modalButtonsImages[1].setAttribute("src", "./assets/svg/exclamation-mark-white.svg");
      break;
    case modalSkillsButtonH4:
      modalButtonsImages[2].setAttribute("src", "./assets/svg/cog-white.svg");
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
    .then(() => {
      isMailAlreadySend = true;
      contactErrorsForm.style.display = "none";
      contactSuccessForm.style.display = "flex";
    })
    .catch((error) => {
      contactErrorsFormText.innerHTML = error.message;
      contactErrorsForm.style.display = "flex";
    });
}
