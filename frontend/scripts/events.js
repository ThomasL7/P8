// =====================================================================================================================================================
// -------- Events ------------------------------------------------------------------------------------------------------------------------------------
// =====================================================================================================================================================
document.addEventListener("DOMContentLoaded", () => {
  // ===== General =====
  // → window
  window.onload = () => {
    scrollToTop();
    detectIfPhone();
    setControlType();
    checkIfOnMobileAndActiveScroll(window.mqMobileTrigger);
    checkIfUnderMQMaxHeight(window.mqMaxHeight);
    checkToForceMobileMod(window.mqForceMobileMod);
    addHeaderAndHomeIntroAnimations();
    createAllArraysOfBlocksCollision();
    setIsWindowLoadedTrue();
    // getY();
  };

  window.onbeforeunload = () => {
    resetHomeBeforeReloading();
    scrollToTop();
  };

  window.addEventListener("resize", () => {
    // getY();
    updateCurrentSlideViewForResize();
    updateAllArraysOfBlocksCollision();
    checkIfAboutTextScrollable();
    updateAboutTextArrow();
    // setSkillPVisible();
    checkIfModalTextScrollable();
    updateModalTextArrow();
    adjustModalPosition();
  });

  window.addEventListener(
    "wheel",
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
    updateAboutTextArrow(event);
    updateModalTextArrow(event);
  });

  document.addEventListener("click", (event) => {
    {
      checkIfClosingModal(event);
      checkIfClosingMobileNav(event);
    }
  });

  document.addEventListener("mousemove", (event) => {
    activeMouseControl();
    getMousePosition(event);
    // updateMousePosition();
  });

  // → Custom events
  window.addEventListener("indexSlideChange", () => {
    // updateMousePosition();
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
        updateAboutTextArrow();
        updateModalTextArrow();
        disablePushToReload(event);
      }
    },
    { passive: false }
  );
  window.addEventListener("touchend", (event) => {
    {
      calculateTouchDistance(event);
      // mobileScrollGlide();
      tabletSlideChange();
      checkIfSwipingToNextMobileSlide();
    }
  });

  // window.addEventListener("scroll", () => {
  //   checkIfSwipingToNextMobileSlide();
  // });

  // → Media query trigger (Mobile)
  window.mqMobileTrigger.addEventListener("change", (event) => checkIfOnMobileAndActiveScroll(event));
  window.mqForceMobileMod.addEventListener("change", (event) => checkToForceMobileMod(event));
  window.mqMaxHeight.addEventListener("change", (event) => checkIfUnderMQMaxHeight(event));

  // ===== Header =====
  window.headerTitleBlock.addEventListener("mouseenter", () => {
    // if (!window.isTouchInsteadOfMouse) return;
    addHeaderTitleHover();
  });

  window.headerTitleBlock.addEventListener("mouseleave", () => {
    // if (!window.isTouchInsteadOfMouse) return;
    removeHeaderTitleHover();
  });

  window.headerTitleBlock.addEventListener("click", () => {
    handleHeaderTitleClick();
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

  // // ===== Home =====
  window.homeButtons.addEventListener("animationend", (event) => {
    if (event.animationName === "home-buttons-intro") {
      addStyleCursorForHomeButtons();
      checkAfterIntroHomeButtonsIfHoverHomeButton();
      setIsHomeButtonsAnimationEndedTrue();
    }
  });

  homeContactButton.addEventListener("click", (event) => {
    activeContactButtonAfterIntroAnimation(event);
  });

  window.homeContactButton.addEventListener("mouseenter", () => {
    // if (!window.isTouchInsteadOfMouse) return;
    isHoverHomeButton("contact", true);
  });
  window.homeContactButton.addEventListener("mouseleave", () => {
    // if (!window.isTouchInsteadOfMouse) return;
    isHoverHomeButton("contact", false);
  });

  homeCVButton.addEventListener("click", (event) => {
    activeCVButtonAfterIntroAnimation(event);
  });

  window.homeCVButton.addEventListener("mouseenter", () => {
    // if (!window.isTouchInsteadOfMouse) return;
    isHoverHomeButton("CV", true);
  });
  window.homeCVButton.addEventListener("mouseleave", () => {
    // if (!window.isTouchInsteadOfMouse) return;
    isHoverHomeButton("CV", false);
  });

  // ===== About =====
  window.aboutText.addEventListener("mouseenter", () => {
    // if (!window.isTouchInsteadOfMouse) return;
    handleAboutTextScroll();
  });
  window.aboutText.addEventListener("touchstart", () => {
    handleAboutTextScroll();
  });
  window.aboutText.addEventListener("mouseleave", () => {
    // if (!window.isTouchInsteadOfMouse) return;
    handleLeavingAboutText();
  });
  window.aboutTextArrowDownImage.addEventListener("mousedown", () => {
    if (window.isTouchInsteadOfMouse) return;
    scrollAboutText();
  });
  window.aboutTextArrowDownImage.addEventListener("mouseup", () => {
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
    skill.addEventListener("mouseenter", (event) => {
      if (window.isTouchInsteadOfMouse) return;
      {
        getMousePosition(event);
        handleEnterSkill(null, index);
      }
    });
    skill.addEventListener("mouseleave", (event) => {
      if (window.isTouchInsteadOfMouse) return;
      {
        getMousePosition(event);
        handleLeaveSkill(index);
      }
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
        setIsExamplesIntroAnimationsEndedTrue(index);
      }
    });

    example.addEventListener("mouseenter", (event) => {
      if (window.isTouchInsteadOfMouse) return;
      {
        getMousePosition(event);
        handleEnterExample(example, index);
      }
    });
    example.addEventListener("mouseleave", (event) => {
      if (window.isTouchInsteadOfMouse) return;
      getMousePosition(event);
      handleLeaveExample(index);
    });

    example.addEventListener("click", (event) => {
      openModalExample(event, index);
    });

    if ((index = window.examples.length - 1)) {
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

  window.modalTextArrowDownImage.addEventListener("mousedown", () => {
    if (window.isTouchInsteadOfMouse) return;
    scrollModalText();
  });
  window.modalTextArrowDownImage.addEventListener("mouseup", () => {
    if (window.isTouchInsteadOfMouse) return;
    stopModalTextScroll();
  });

  // ===== Contact =====
  window.contactForm.addEventListener("submit", (event) => contactPostRequest(event));
});
