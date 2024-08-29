// =====================================================================================================================================================
// -------- Events ------------------------------------------------------------------------------------------------------------------------------------
// =====================================================================================================================================================
document.addEventListener("DOMContentLoaded", () => {
  // ===== General =====
  // → window
  window.onload = () => {
    scrollToTop();
    addHeaderAndHomeIntroAnimations();
    createAllArraysOfBlocksCollision();
    updateSkillsInfoBubblesWidth();
    setIsWindowLoadedTrue();
  };

  window.onbeforeunload = function () {
    resetHomeBeforeReloading();
    scrollToTop();
  };

  window.addEventListener("resize", () => {
    updateCurrentSlideView();
    updateSkillsInfoBubblesWidth();
    updateAllArraysOfBlocksCollision();
  });

  window.addEventListener(
    "wheel",
    (event) => {
      disableZoom(event);
      scrollSlideChange(event);
    },
    { passive: false }
  );

  // → Document
  document.addEventListener("keydown", (event) => {
    disableZoom(event);
    arrowsSlideChange(event);
  });

  document.addEventListener("click", (event) => {
    checkIfClosingModal(event);
  });

  // → Custom events
  window.addEventListener("indexSlideChange", function () {
    addOutroAnimationsSlide();
    addIntroAnimationsSlide();
    setActiveClassToNavLink();
    removeHeaderHoverAnimationForNewSlide();
    resetPreviousSlide();
  });

  // ===== Header =====
  window.headerTitle.addEventListener("click", () => handleHeaderTitleClick());

  window.navLinks.forEach((navLink, index) => {
    navLink.addEventListener("click", (event) => handleNavLinkClick(event, index));
  });

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
  window.skillsTrees.forEach((skillsTree, treeIndex) => {
    // Create index array of items divs in skills trees
    const skillsDivsInTree = skillsTree.querySelectorAll(".skills-items-div");
    skillsDivsInTree.forEach((_, skillIndex) => {
      skillIndexInSkillsTreeArray.push({ treeIndex, skillIndex });
    });

    skillsTree.addEventListener("animationend", (event) => {
      if (event.animationName === "skills-tree-intro") {
        skillsDivsInTree.forEach((skillsDiv, skillIndex) => {
          // Getting real index of item div
          const index = skillIndexInSkillsTreeArray.findIndex((item) => item.treeIndex === treeIndex && item.skillIndex === skillIndex);
          addStyleCursorForSkills(index);
          setIsSkillsIntroAnimationsEndedTrue(index);
          checkIfHoverSkillAfterIntro(skillsDiv, index);
        });
      }
    });
  });

  window.skills.forEach((skill, index) => {
    skill.addEventListener("mouseenter", (event) => {
      getMousePosition(event);
      handleEnterSkill(null, index);
    });
    skill.addEventListener("mouseleave", (event) => {
      getMousePosition(event);
      handleLeaveSkill();
    });
  });

  // ===== Examples =====
  window.examples.forEach((example, index) => {
    example.addEventListener("animationstart", (event) => {
      if (event.animationName === "example-intro") {
        addStyleCursorForExamples(index);
        setIsExamplesIntroAnimationsEndedTrue(index);
      }
    });
  });

  document.addEventListener("mousemove", (event) => {
    getMousePosition(event);
  });

  window.examplesFilters.forEach((exampleFilter, index) => {
    exampleFilter.addEventListener("mouseenter", (event) => {
      getMousePosition(event);
      handleEnterExample(exampleFilter, index);
    });
    exampleFilter.addEventListener("mouseleave", (event) => {
      getMousePosition(event);
      handleLeaveExample();
    });
    exampleFilter.addEventListener("click", (event) => openModalExample(event, index));
  });

  // → Modal
  window.modalPreviousButton.addEventListener("click", (event) => setModalPreviousExample(event));
  window.modalNextButton.addEventListener("click", (event) => setModalNextExample(event));

  window.modalDescriptionButton.addEventListener("click", () => changeModalText("description"));
  window.modalDifficultiesButton.addEventListener("click", () => changeModalText("difficulties"));
  window.modalSkillsButton.addEventListener("click", () => changeModalText("skills"));

  // ===== Contact =====
  window.contactForm.addEventListener("submit", (event) => contactPostRequest(event));
});
