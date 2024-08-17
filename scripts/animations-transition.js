document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  // ==== DOM ====
  const header = document.querySelector("header");
  const headerTitleBlock = document.getElementById("header-title-block");
  const headerTitle = document.querySelector("h1");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll("nav a");
  const homeContent = document.getElementById("home-content");
  const homeTitle = document.querySelector("#home-content h2");
  const homeText = document.querySelector("#home-content p");
  const homeButtons = document.getElementById("home-buttons");
  const aboutContent = document.getElementById("about-content");
  const aboutBlockPhoto = document.getElementById("about-block-photo");
  const aboutImagePhoto = document.querySelector("#about-block-photo img");
  const aboutText = document.getElementById("about-text");
  const skillsContent = document.getElementById("skills-content");
  const skillsTitle = document.querySelector("#skills-content h2");
  const skillsTreeLeft = document.getElementById("skills-tree-left");
  const skillsTreeCenter = document.getElementById("skills-tree-center");
  const skillsTreeRight = document.getElementById("skills-tree-right");
  const skillsText = document.querySelector("#skills-content > p");
  const examplesContent = document.getElementById("examples-content");
  const examplesTitle = document.querySelector("#examples-content h2");
  const example1 = document.getElementById("example-1");
  const example2 = document.getElementById("example-2");
  const example3 = document.getElementById("example-3");
  const example4 = document.getElementById("example-4");
  // ==== Classes ====
  const CLASS_ELEMENTS_HEADER_INTRO = "elements-header-intro";
  const CLASS_HEADER_INTRO = "header-intro";
  const CLASS_HEADER_TITLE_HOVER = "header-title-hover";
  const CLASS_HOME_BUTTONS_INTRO = "home-buttons-intro";
  const CLASS_HOME_TEXT_INTRO = "home-text-intro";
  const CLASS_HOME_TITLE_INTRO = "home-title-intro";
  const CLASS_NAV_LINK_HOVER = "nav-link-hover";
  const CLASS_NAV_LINK_ACTIVE = "nav-link-active";
  const CLASS_OUTRO_BACKWARD = "slide-outro-backward";
  const CLASS_OUTRO_FORWARD = "slide-outro-forward";
  // ==== Constants ====
  const contentSlidesAndIntroClassesArray = [
    {
      index: 0,
      slide: homeContent,
      elements: [
        { element: homeTitle, introClass: CLASS_HOME_TITLE_INTRO },
        { element: homeText, introClass: CLASS_HOME_TEXT_INTRO },
        { element: homeButtons, introClass: CLASS_HOME_BUTTONS_INTRO },
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
  const headerAnimationDuration = parseFloat(getComputedStyle(root).getPropertyValue("--header-animation-duration")) * 1000;
  const scrollDuration = parseInt(getComputedStyle(root).getPropertyValue("--delay-before-next-scroll"));
  //  ==== Booleans ====
  window.isHeaderTitleAnimationEnded = false;

  //*** Functions ****************************************************/
  function addIntrosAfterLoading() {
    header.classList.add(CLASS_HEADER_INTRO);
    headerTitleBlock.classList.add(CLASS_ELEMENTS_HEADER_INTRO);
    nav.classList.add(CLASS_ELEMENTS_HEADER_INTRO);
    setTimeout(() => {
      headerTitle.classList.add(CLASS_HEADER_TITLE_HOVER);
      homeTitle.classList.add(CLASS_HOME_TITLE_INTRO);
      homeText.classList.add(CLASS_HOME_TEXT_INTRO);
      homeButtons.classList.add(CLASS_HOME_BUTTONS_INTRO);
      window.isHeaderTitleAnimationEnded = true;
    }, headerAnimationDuration);
  }

  function removeIntrosBeforeLoading() {
    header.classList.remove(CLASS_HEADER_INTRO);
    headerTitleBlock.classList.remove(CLASS_ELEMENTS_HEADER_INTRO);
    nav.classList.remove(CLASS_ELEMENTS_HEADER_INTRO);
    homeTitle.classList.remove(CLASS_HOME_TITLE_INTRO);
    homeText.classList.remove(CLASS_HOME_TEXT_INTRO);
    homeButtons.classList.remove(CLASS_HOME_BUTTONS_INTRO);
  }

  function handleHeaderHoverAnimations(previousIndexSlide, indexSlide) {
    navLinks[previousIndexSlide].classList.add(CLASS_NAV_LINK_HOVER);
    navLinks[indexSlide].classList.remove(CLASS_NAV_LINK_HOVER);
    if (previousIndexSlide === 1) headerTitle.classList.add(CLASS_HEADER_TITLE_HOVER);
    if (indexSlide === 1) headerTitle.classList.remove(CLASS_HEADER_TITLE_HOVER);
  }

  function setIntroAnimationsSlide(indexSlide) {
    contentSlidesAndIntroClassesArray.forEach(({ index, elements }) => {
      if (indexSlide === index) {
        elements.forEach(({ element, introClass }) => {
          element.classList.add(introClass);
        });
      }
    });
  }

  function setActiveNavLink(previousIndexSlide, indexSlide) {
    navLinks[previousIndexSlide].classList.remove(CLASS_NAV_LINK_ACTIVE);
    navLinks[indexSlide].classList.add(CLASS_NAV_LINK_ACTIVE);
  }

  function setOutroAnimationsSlide(previousIndexSlide, indexSlide) {
    const outroAnimationType = previousIndexSlide < indexSlide ? CLASS_OUTRO_FORWARD : CLASS_OUTRO_BACKWARD;

    contentSlidesAndIntroClassesArray.forEach(({ index, slide, elements }) => {
      if (previousIndexSlide === index) {
        slide.classList.add(outroAnimationType);
        setTimeout(() => {
          elements.forEach(({ element, introClass }) => {
            element.classList.remove(introClass);
          });
          slide.classList.remove(outroAnimationType);
        }, scrollDuration);
      }
    });
  }

  //*** Events ****************************************************/
  window.onload = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    window.dispatchEvent(new CustomEvent("windowLoaded"));
    addIntrosAfterLoading();
  };

  window.onbeforeunload = function () {
    removeIntrosBeforeLoading();
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  window.addEventListener("indexSlideChanged", function (event) {
    const { previousIndexSlide, indexSlide } = event.detail;
    setOutroAnimationsSlide(previousIndexSlide, indexSlide);
    setActiveNavLink(previousIndexSlide, indexSlide);
    setIntroAnimationsSlide(indexSlide);
    handleHeaderHoverAnimations(previousIndexSlide, indexSlide);
  });
});
