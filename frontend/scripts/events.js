// =====================================================================================================================================================
// -------- Events ------------------------------------------------------------------------------------------------------------------------------------
// =====================================================================================================================================================
document.addEventListener("DOMContentLoaded", () => {
  // ===== General =====
  // → window
  window.onload = () => {
    adjustHeightIfVDHNotSupported();
    scrollToTop();
    settingObservers();
    setControlType();
    checkIfOnMobileAndActiveScroll();
    checkIfUnderMQMaxHeight();
    checkToForceMobileMod();
    addHeaderAndHomeIntroAnimations();
    createAllArraysOfBlocksCollision();
    setIsWindowLoadedTrue();
  };

  window.onbeforeunload = () => {
    resetHomeBeforeReloading();
    scrollToTop();
  };

  window.addEventListener("resize", () => {
    adjustHeightIfVDHNotSupported();
    updateCurrentSlideViewForResize();
    updateAllArraysOfBlocksCollision();
    checkIfAboutTextScrollable();
    updateAboutTextArrow();
    checkIfModalTextScrollable();
    updateModalTextArrow();
    adjustModalPosition();
    updateCurrentMobileSlideLimit();
    checkIfSlideIsScrollable();
    checkMediaQueries();
  });

  window.addEventListener(
    "mousewheel",
    (event) => {
      {
        updateAboutTextArrow();
        updateModalTextArrow();
        if (!window.isTouchInsteadOfMouse) scrollSlideChange(event);
        checkIfScrollingToNextMobileSlide(event);
      }
    },
    { passive: false }
  );

  window.addEventListener("keydown", (event) => {
    disableTab(event);
    updateAboutTextArrow(event);
    updateModalTextArrow(event);
  });

  document.addEventListener("click", (event) => {
    {
      checkIfClosingModal(event);
      checkIfClosingMobileNav(event);
      closeContactInfoBubble(false);
    }
  });

  document.addEventListener("mousemove", (event) => {
    activeMouseControl();
    getMousePosition(event);
    handleLeaveExampleBeforeEndAnimation();
  });

  // → Custom events
  window.addEventListener("indexSlideChange", () => {
    checkIfHoverAboutText();
    checkIfAboutTextScrollable();
    updateAboutTextArrow();
    addOutroAnimationsSlide();
    addIntroAnimationsSlide();
    setActiveClassToNavLink();
    removeNavHoverAnimationForNewSlide();
    resetPreviousSlide();
  });

  // ===== Mobile or Tablet touch events =====
  window.addEventListener("touchstart", (event) => {
    activeTouchControl();
    setTouchStartVariables(event);
    handleLeavingAboutText(event);
    checkIfStillTouchingSameSkill(event);
  });
  window.addEventListener(
    "touchmove",
    (event) => {
      {
        disablePushToReload(event);
        updateAboutTextArrow();
        updateModalTextArrow();
        checkIfClosingMobileNav(event);
      }
    },
    { passive: false }
  );
  window.addEventListener("touchend", (event) => {
    {
      calculateTouchDistance(event);
      tabletSlideChange();
      checkIfSwipingToNextMobileSlide();
    }
  });

  // ===== Header =====
  window.headerTitleBlock.addEventListener("mouseenter", () => {
    addHeaderTitleHover();
  });

  window.headerTitleBlock.addEventListener("mouseleave", () => {
    removeHeaderTitleHover();
  });

  window.headerTitleBlock.addEventListener("click", (event) => {
    handleHeaderTitleClick(event);
  });

  window.nav.addEventListener("animationend", (event) => hideNavAfterCloseAnimation(event));

  for (let i = 0; i < window.navLinks.length; i++) {
    const navLink = window.navLinks[i];
    navLink.addEventListener("click", (event) => {
      event.preventDefault();
      handleNavLinkClick(event, i);
    });
  }

  // ===== Header (Mobile) =====
  window.navMenuBurger.addEventListener("click", (event) => {
    addMobileNavOpenAnimation(event);
  });

  // ===== Home =====
  window.homeButtons.addEventListener("animationend", (event) => {
    if (event.animationName === "home-buttons-intro") {
      addStyleCursorForHomeButtons();
      checkAfterIntroHomeButtonsIfHoverHomeButton();
      setIsHomeButtonsAnimationEndedTrue();
    }
  });

  window.homeContactButton.addEventListener("click", (event) => {
    activeContactButtonAfterIntroAnimation(event);
  });

  window.homeContactButton.addEventListener("mouseenter", () => {
    isHoverHomeButton("contact", true);
  });
  window.homeContactButton.addEventListener("mouseleave", () => {
    isHoverHomeButton("contact", false);
  });

  window.homeCVButton.addEventListener("click", (event) => {
    activeCVButtonAfterIntroAnimation(event);
  });

  window.homeCVButton.addEventListener("mouseenter", () => {
    isHoverHomeButton("CV", true);
  });
  window.homeCVButton.addEventListener("mouseleave", () => {
    isHoverHomeButton("CV", false);
  });

  // ===== About =====
  window.aboutText.addEventListener("mouseenter", () => {
    handleAboutTextScroll();
  });
  window.aboutText.addEventListener("touchstart", () => {
    handleAboutTextScroll();
  });
  window.aboutText.addEventListener("mouseleave", () => {
    handleLeavingAboutText();
  });
  window.aboutTextArrowDownDiv.addEventListener("mousedown", () => {
    if (window.isTouchInsteadOfMouse) return;
    scrollAboutText();
  });
  window.aboutTextArrowDownDiv.addEventListener("mouseup", () => {
    if (window.isTouchInsteadOfMouse) return;
    stopAboutTextScroll();
  });

  window.aboutP4.addEventListener("animationend", () => {
    checkIfSlideIsScrollable();
    updateCurrentMobileSlideLimit();
    authorizeSlideChange();
  });

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
          if (!window.isTouchInsteadOfMouse) {
            checkIfHoverSkillAfterIntro(skillsDiv, index);
          }
        }
      }
    });
  }

  for (let index = 0; index < window.skills.length; index++) {
    const skill = window.skills[index];
    skill.addEventListener("mouseenter", () => {
      if (!window.isTouchInsteadOfMouse) handleEnterSkill(null, index);
    });
    skill.addEventListener("mouseleave", () => {
      if (!window.isTouchInsteadOfMouse) handleLeaveSkill(index);
    });

    skill.addEventListener("click", () => {
      {
        handleTouchingSkill(index);
      }
    });
  }

  window.skillsText.addEventListener("animationend", () => {
    checkIfSlideIsScrollable();
    updateCurrentMobileSlideLimit();
    authorizeSlideChange();
  });

  // ===== Examples =====
  for (let index = 0; index < window.examples.length; index++) {
    const example = window.examples[index];

    example.addEventListener("animationstart", (event) => {
      if (event.animationName === "example-intro") {
        addStyleCursorForExamples(example);
        setIsExamplesIntroAnimationsStartedTrue(index);
        handleLeaveExampleBeforeEndAnimation();
      }
    });

    example.addEventListener("animationend", (event) => {
      if (event.animationName === "example-intro") {
        handleLeaveExampleBeforeEndAnimation();
        setIsExamplesIntroAnimationsEndedTrue(index);
      }
    });

    example.addEventListener("mouseenter", (event) => {
      if (window.isTouchInsteadOfMouse) return;
      getMousePosition(event);
      handleLeaveExampleBeforeEndAnimation();
      handleEnterExample(index);
    });
    example.addEventListener("mouseleave", () => {
      handleLeaveExampleBeforeEndAnimation();
      if (!window.isTouchInsteadOfMouse) handleLeaveExample(index);
    });

    example.addEventListener("click", (event) => {
      openModalExample(event, index);
    });

    if (index === window.examples.length - 1) {
      example.addEventListener("animationend", () => {
        checkIfSlideIsScrollable();
        updateCurrentMobileSlideLimit();
        authorizeSlideChange();
      });
    }
  }

  // → Modal
  window.modalPreviousButton.addEventListener("click", (event) => {
    setModalPreviousExample(event);
  });

  window.modalNextButton.addEventListener("click", (event) => {
    setModalNextExample(event);
  });

  window.modalDescriptionButtonH4.addEventListener("click", () => {
    changeModalTextAndActiveButton("description");
  });
  window.modalChallengesButtonH4.addEventListener("click", () => {
    changeModalTextAndActiveButton("challenges");
  });
  window.modalSkillsButtonH4.addEventListener("click", () => {
    changeModalTextAndActiveButton("skills");
  });

  window.modalTextArrowDownDiv.addEventListener("mousedown", () => {
    if (window.isTouchInsteadOfMouse) return;
    scrollModalText();
  });
  window.modalTextArrowDownDiv.addEventListener("mouseup", () => {
    if (window.isTouchInsteadOfMouse) return;
    stopModalTextScroll();
  });

  window.modalCloseIcon.addEventListener("click", () => {
    handleCloseModalButton();
  });

  // ===== Contact =====
  window.contactForm.addEventListener("submit", (event) => contactPostRequest(event));
});
