// =====================================================================================================================================================
// -------- Events ------------------------------------------------------------------------------------------------------------------------------------
// =====================================================================================================================================================
document.addEventListener("DOMContentLoaded", () => {
  // ===== General =====
  // → window
  window.onload = () => {
    scrollToTop();
    checkIfOnMobileAndActiveScroll(window.mqMobileTrigger);
    addHeaderAndHomeIntroAnimations();
    createAllArraysOfBlocksCollision();
    updateSkillsInfoBubblesWidth();
    setIsWindowLoadedTrue();
  };

  window.onbeforeunload = () => {
    resetHomeBeforeReloading();
    scrollToTop();
  };

  window.addEventListener("resize", () => {
    updateCurrentSlideView();
    adjustModalPosition();
    updateSkillsInfoBubblesWidth();
    updateAllArraysOfBlocksCollision();
  });

  // window.addEventListener("scroll", () => ifMobileSlideLimitsAreReach());

  window.addEventListener(
    "wheel",
    (event) => {
      disableZoom(event);
      scrollSlideChange(event);
      ifMobileSlideLimitsAreReach();
    },
    { passive: false }
  );

  document.addEventListener("keydown", (event) => {
    disableZoom(event);
    arrowsSlideChange(event);
  });

  document.addEventListener("click", (event) => {
    checkIfClosingModal(event);
    checkIfClosingMobileNav(event);
  });

  // → Custom events
  window.addEventListener("indexSlideChange", () => {
    addOutroAnimationsSlide();
    addIntroAnimationsSlide();
    setActiveClassToNavLink();
    removeHeaderHoverAnimationForNewSlide();
    resetPreviousSlide();
  });

  // ===== Mobile events =====
  window.addEventListener("touchstart", (event) => updateStartScrollingPosition(event));
  window.addEventListener("touchend", (event) => checkIfScrolling(event));

  // → Media query trigger (Mobile)
  window.mqMobileTrigger.addEventListener("change", (event) => checkIfOnMobileAndActiveScroll(event));

  // ===== Header =====
  window.headerTitle.addEventListener("click", () => handleHeaderTitleClick());

  for (let i = 0; i < window.navLinks.length; i++) {
    const navLink = window.navLinks[i];
    navLink.addEventListener("click", (event) => handleNavLinkClick(event, i));
  }

  // ===== Header (Mobile) =====
  window.navMenuBurger.addEventListener("click", (event) => addMobileNavOpenAnimation(event));

  // // ===== Home =====
  window.homeButtons.addEventListener("animationend", (event) => {
    if (event.animationName === "home-buttons-intro") {
      addStyleCursorForHomeButtons();
      checkAfterIntroHomeButtonsIfHoverHomeButton();
      setIsHomeButtonsAnimationEndedTrue();
    }
  });

  homeContactButton.addEventListener("click", (event) => activeContactButtonAfterIntroAnimation(event));
  window.homeContactButton.addEventListener("mouseenter", () => isHoverHomeButton("contact", true));
  window.homeContactButton.addEventListener("mouseleave", () => isHoverHomeButton("contact", false));

  homeCVButton.addEventListener("click", (event) => activeCVButtonAfterIntroAnimation(event));
  window.homeCVButton.addEventListener("mouseenter", () => isHoverHomeButton("CV", true));
  window.homeCVButton.addEventListener("mouseleave", () => isHoverHomeButton("CV", false));

  // ===== About =====

  // ===== Skills =====
  let skillIndexInSkillsTreeArray = [];
  for (let treeIndex = 0; treeIndex < window.skillsTrees.length; treeIndex++) {
    const skillsTree = window.skillsTrees[treeIndex];
    // Create index array of items divs in skills trees
    const skillsDivsInTree = skillsTree.querySelectorAll(".skills-items-div");
    for (let skillIndex = 0; skillIndex < skillsDivsInTree.length; skillIndex++) {
      skillIndexInSkillsTreeArray.push({ treeIndex, skillIndex });
    }

    skillsTree.addEventListener("animationend", (event) => {
      if (event.animationName === "skills-tree-intro") {
        for (let skillIndex = 0; skillIndex < skillsDivsInTree.length; skillIndex++) {
          const skillsDiv = skillsDivsInTree[skillIndex];
          // Getting real index of item div
          const index = skillIndexInSkillsTreeArray.findIndex((item) => item.treeIndex === treeIndex && item.skillIndex === skillIndex);
          addStyleCursorForSkills(index);
          setIsSkillsIntroAnimationsEndedTrue(index);
          checkIfHoverSkillAfterIntro(skillsDiv, index);
        }
      }
    });
  }

  for (let i = 0; i < window.skills.length; i++) {
    const skill = window.skills[i];
    skill.addEventListener("mouseenter", (event) => {
      getMousePosition(event);
      handleEnterSkill(null, i);
    });
    skill.addEventListener("mouseleave", (event) => {
      getMousePosition(event);
      handleLeaveSkill();
    });
  }

  // ===== Examples =====
  for (let i = 0; i < window.examples.length; i++) {
    const example = window.examples[i];
    example.addEventListener("animationstart", (event) => {
      if (event.animationName === "example-intro") {
        addStyleCursorForExamples(i);
        setIsExamplesIntroAnimationsEndedTrue(i);
      }
    });
  }

  document.addEventListener("mousemove", (event) => {
    getMousePosition(event);
  });

  for (let index = 0; index < window.examplesFilters.length; index++) {
    const exampleFilter = window.examplesFilters[index];
    exampleFilter.addEventListener("mouseenter", (event) => {
      getMousePosition(event);
      handleEnterExample(exampleFilter, index);
    });
    exampleFilter.addEventListener("mouseleave", (event) => {
      getMousePosition(event);
      handleLeaveExample();
    });
    exampleFilter.addEventListener("click", (event) => openModalExample(event, index));
  }

  // → Modal
  window.modalPreviousButton.addEventListener("click", (event) => setModalPreviousExample(event));
  window.modalNextButton.addEventListener("click", (event) => setModalNextExample(event));

  window.modalDescriptionButtonH4.addEventListener("click", () => changeModalTextAndActiveButton("description"));
  window.modalDifficultiesButtonH4.addEventListener("click", () => changeModalTextAndActiveButton("difficulties"));
  window.modalSkillsButtonH4.addEventListener("click", () => changeModalTextAndActiveButton("skills"));

  // ===== Contact =====
  window.contactForm.addEventListener("submit", (event) => contactPostRequest(event));
});
