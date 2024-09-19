// =====================================================================================================================================================
// -------- Events ------------------------------------------------------------------------------------------------------------------------------------
// =====================================================================================================================================================
document.addEventListener("DOMContentLoaded", () => {
  // ===== General =====
  // → window
  window.onload = () => {
    scrollToTop();
    checkIfOnMobileAndActiveScroll(window.mqMobileTrigger);
    checkIfUnderMQMaxHeight(window.mqMaxHeight);
    checkToForceMobileMod(window.mqForceMobileMod);
    addHeaderAndHomeIntroAnimations();
    createAllArraysOfBlocksCollision();
    checkIfAboutTextScrollable("delay");
    setControlType();
    setIsWindowLoadedTrue();
    detectIfPhone();
  };

  window.onbeforeunload = () => {
    resetHomeBeforeReloading();
    scrollToTop();
  };

  window.addEventListener("resize", () => {
    if (window.mobileDetected === true && window.isOnMobile) return;
    updateCurrentSlideView();
    adjustModalPosition();
    updateAllArraysOfBlocksCollision();
    checkIfModalTextIsScrollable();
    checkIfAboutTextScrollable();
    displayModalTextArrow();
  });

  window.addEventListener(
    "wheel",
    (event) => {
      if (!window.isTouchInsteadOfMouse) {
        scrollSlideChange(event);
        updateAboutTextArrow();
        checkIfScrollingToNextMobileSlide(event);
      }
    },
    { passive: false }
  );

  window.addEventListener("keydown", (event) => {
    updateAboutTextArrow(event);
  });

  document.addEventListener("click", (event) => {
    if (!window.isTouchInsteadOfMouse) {
      checkIfClosingModal(event);
      checkIfClosingMobileNav(event);
    }
  });
  document.addEventListener("touchstart", (event) => {
    if (window.isTouchInsteadOfMouse) {
      checkIfClosingModal(event);
      checkIfClosingMobileNav(event);
    }
  });

  document.addEventListener("mousemove", () => {
    activeMouseControl();
  });

  // → Custom events
  window.addEventListener("indexSlideChange", () => {
    // disablePushToReload();
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
      if (window.isTouchInsteadOfMouse) {
        // preventTouchEvents(event);
        calculateScrollDistance(event);
        swipeAboutText();
        updateAboutTextArrow();
        disablePushToReload(event);
        // mobileScroll();
      }
    },
    { passive: false }
  );
  window.addEventListener("touchend", (event) => {
    if (window.isTouchInsteadOfMouse) {
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
    if (!window.isTouchInsteadOfMouse) addHeaderTitleHover();
  });

  window.headerTitleBlock.addEventListener("mouseleave", () => {
    if (!window.isTouchInsteadOfMouse) removeHeaderTitleHover();
  });

  window.headerTitleBlock.addEventListener("click", () => {
    if (!window.isTouchInsteadOfMouse) handleHeaderTitleClick();
  });
  window.headerTitleBlock.addEventListener("touchstart", () => {
    if (window.isTouchInsteadOfMouse) handleHeaderTitleClick();
  });

  window.nav.addEventListener("animationend", (event) => hideNavAfterCloseAnimation(event));

  for (let i = 0; i < window.navLinks.length; i++) {
    const navLink = window.navLinks[i];
    navLink.addEventListener("click", (event) => {
      event.preventDefault();
      if (!window.isTouchInsteadOfMouse) handleNavLinkClick(event, i);
    });
    navLink.addEventListener("touchstart", (event) => {
      if (window.isTouchInsteadOfMouse) handleNavLinkClick(event, i);
    });
  }

  // ===== Header (Mobile) =====
  window.navMenuBurger.addEventListener("click", (event) => {
    if (!window.isTouchInsteadOfMouse) addMobileNavOpenAnimation(event);
  });
  window.navMenuBurger.addEventListener("touchstart", (event) => {
    if (window.isTouchInsteadOfMouse) {
      addMobileNavOpenAnimation(event);
    }
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
    if (!window.isTouchInsteadOfMouse) activeContactButtonAfterIntroAnimation(event);
  });
  homeContactButton.addEventListener("touchstart", (event) => {
    if (window.isTouchInsteadOfMouse) activeContactButtonAfterIntroAnimation(event);
  });
  window.homeContactButton.addEventListener("mouseenter", () => {
    if (!window.isTouchInsteadOfMouse) isHoverHomeButton("contact", true);
  });
  window.homeContactButton.addEventListener("mouseleave", () => {
    if (!window.isTouchInsteadOfMouse) isHoverHomeButton("contact", false);
  });

  homeCVButton.addEventListener("click", (event) => {
    if (!window.isTouchInsteadOfMouse) activeCVButtonAfterIntroAnimation(event);
  });
  homeCVButton.addEventListener("touchstart", (event) => {
    if (window.isTouchInsteadOfMouse) activeCVButtonAfterIntroAnimation(event);
  });
  window.homeCVButton.addEventListener("mouseenter", () => {
    if (!window.isTouchInsteadOfMouse) isHoverHomeButton("CV", true);
  });
  window.homeCVButton.addEventListener("mouseleave", () => {
    if (!window.isTouchInsteadOfMouse) isHoverHomeButton("CV", false);
  });

  // ===== About =====
  window.aboutText.addEventListener("mouseenter", () => {
    if (!window.isTouchInsteadOfMouse) handleAboutTextScroll();
  });
  window.aboutText.addEventListener("touchstart", () => {
    if (window.isTouchInsteadOfMouse) handleAboutTextScroll();
  });
  window.aboutText.addEventListener("mouseleave", () => {
    if (!window.isTouchInsteadOfMouse) handleLeavingAboutText();
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
          if (!window.isTouchInsteadOfMouse) checkIfHoverSkillAfterIntro(skillsDiv, index);
        }
      }
    });
  }

  for (let i = 0; i < window.skills.length; i++) {
    const skill = window.skills[i];
    skill.addEventListener("mouseenter", (event) => {
      if (!window.isTouchInsteadOfMouse) {
        getMousePosition(event);
        handleEnterSkill(null, i);
      }
    });
    skill.addEventListener("mouseleave", (event) => {
      if (!window.isTouchInsteadOfMouse) {
        getMousePosition(event);
        handleLeaveSkill();
      }
    });
    skill.addEventListener("touchstart", (event) => {
      if (window.isTouchInsteadOfMouse) {
        handleTouchingSkill(i);
      }
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
    if (!window.isTouchInsteadOfMouse) getMousePosition(event);
  });

  for (let index = 0; index < window.examples.length; index++) {
    const example = window.examples[index];
    example.addEventListener("mouseenter", (event) => {
      if (!window.isTouchInsteadOfMouse) {
        getMousePosition(event);
        handleEnterExample(example, index);
      }
    });
    example.addEventListener("mouseleave", (event) => {
      if (!window.isTouchInsteadOfMouse) {
        getMousePosition(event);
        handleLeaveExample();
      }
    });
    example.addEventListener("click", (event) => {
      if (!window.isTouchInsteadOfMouse) openModalExample(event, index);
    });
    example.addEventListener("touchstart", (event) => {
      if (window.isTouchInsteadOfMouse) openModalExample(event, index);
    });
  }

  // → Modal
  window.modalPreviousButton.addEventListener("click", (event) => {
    if (!window.isTouchInsteadOfMouse) setModalPreviousExample(event);
  });
  window.modalPreviousButton.addEventListener("touchstart", (event) => {
    if (window.isTouchInsteadOfMouse) setModalPreviousExample(event);
  });
  window.modalNextButton.addEventListener("click", (event) => {
    if (!window.isTouchInsteadOfMouse) setModalNextExample(event);
  });
  window.modalNextButton.addEventListener("touchstart", (event) => {
    if (window.isTouchInsteadOfMouse) setModalNextExample(event);
  });

  window.modalDescriptionButtonH4.addEventListener("click", () => {
    if (!window.isTouchInsteadOfMouse) changeModalTextAndActiveButton("description");
  });
  window.modalDescriptionButtonH4.addEventListener("touchstart", () => {
    if (window.isTouchInsteadOfMouse) changeModalTextAndActiveButton("description");
  });
  window.modalChallengesButtonH4.addEventListener("click", () => {
    if (!window.isTouchInsteadOfMouse) changeModalTextAndActiveButton("challenges");
  });
  window.modalChallengesButtonH4.addEventListener("touchstart", () => {
    if (window.isTouchInsteadOfMouse) changeModalTextAndActiveButton("challenges");
  });
  window.modalSkillsButtonH4.addEventListener("click", () => {
    if (!window.isTouchInsteadOfMouse) changeModalTextAndActiveButton("skills");
  });
  window.modalSkillsButtonH4.addEventListener("touchstart", () => {
    if (window.isTouchInsteadOfMouse) {
      changeModalTextAndActiveButton("skills");
      changeModalTextAndActiveButton("skills");
    }
  });

  window.modalText.addEventListener("scroll", () => {
    if (!window.isTouchInsteadOfMouse) displayModalTextArrow();
  });

  // ===== Contact =====
  window.contactForm.addEventListener("submit", (event) => contactPostRequest(event));
});
