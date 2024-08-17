document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  // Timers
  const scrollTimeOut = parseInt(getComputedStyle(root).getPropertyValue("--scroll-delay"));
  const headerAnimationDuration = parseFloat(getComputedStyle(root).getPropertyValue("--header-animation-duration")) * 1000;
  // Header
  const h1 = document.querySelector("h1");
  // Home (0)
  const bannerContentH2 = document.querySelector("#banner-content h2");
  const bannerContentP = document.querySelector("#banner-content p");
  const buttonsSection = document.getElementById("buttons-section");
  const bannerContent = document.getElementById("banner-content");
  const contactButton = document.getElementById("contact-button");
  const CVButton = document.getElementById("CV-dl");
  let CVHover = false;
  let contactHover = false;
  // About (1)
  const photo = document.getElementById("photo");
  const imgPhoto = document.querySelector("#photo img");
  const textAbout = document.getElementById("text-about");
  const aboutContent = document.getElementById("about-content");
  // Skills (2)
  const skillsH2 = document.querySelector("#skills h2");
  const skillsTrees = document.querySelectorAll("#skills-table > div");
  const skillsLeft = document.getElementById("skills-left");
  const skillsCenter = document.getElementById("skills-center");
  const skillsRight = document.getElementById("skills-right");
  const skillsP = document.querySelector("#skills p");
  const skillsContent = document.getElementById("skills-content");
  const skillsItems = document.querySelectorAll("#skills-table li div");
  // Examples (3)
  const examplesContent = document.getElementById("examples-content");
  const examplesH2 = document.querySelector("#examples-content h2");
  const gallery = document.getElementById("gallery");
  const e1 = document.getElementById("e1");
  const e2 = document.getElementById("e2");
  const e3 = document.getElementById("e3");
  const e4 = document.getElementById("e4");
  const articles = document.querySelectorAll("#gallery article");
  const examples = document.querySelectorAll(".examples-filter");
  const modalPrevious = document.getElementById("modal-previous");
  const modal = document.getElementById("modal");
  const modalNext = document.getElementById("modal-next");

  //*** Home animations delay for header animation ****************************************************/
  setTimeout(() => {
    bannerContentH2.classList.remove("opacity-0");
    bannerContentH2.classList.remove("opacity-0");
    bannerContentH2.classList.remove("opacity-0");
    bannerContentH2.classList.add("banner-content-h2-intro");
    bannerContentP.classList.add("banner-content-p-intro");
    buttonsSection.classList.add("buttons-section-intro");
    h1.setAttribute("data-anim-state", "true");
    h1.style.cursor = "pointer";
  }, headerAnimationDuration);

  //*** Set animations on index change ****************************************************/
  window.addEventListener("indexChanged", function (event) {
    // Remove intro animations & manage outro animations
    switch (event.detail.previousIndex) {
      // Home
      case 0:
        contactButton.style.cursor = "default";
        CVButton.style.cursor = "default";
        buttonsSection.setAttribute("data-anim-state", "false");

        setTimeout(() => {
          if (event.detail.previousIndex < event.detail.index) {
            bannerContent.classList.add("outro-forward");
          } else {
            bannerContent.classList.add("outro-backward");
          }
          bannerContentH2.classList.remove("banner-content-h2-intro");
          bannerContentP.classList.remove("banner-content-p-intro");
          buttonsSection.classList.remove("buttons-section-intro");
          bannerContent.classList.remove("outro-forward");
          bannerContent.classList.remove("outro-backward");
        }, scrollTimeOut);
        break;

      // About
      case 1:
        if (event.detail.previousIndex < event.detail.index) {
          aboutContent.classList.add("outro-forward");
        } else {
          aboutContent.classList.add("outro-backward");
        }
        setTimeout(() => {
          photo.classList.remove("photo-intro");
          imgPhoto.classList.remove("img-photo-intro");
          textAbout.classList.remove("text-about-intro");
          aboutContent.classList.remove("outro-forward");
          aboutContent.classList.remove("outro-backward");
        }, scrollTimeOut);
        break;

      // Skills
      case 2:
        skillsItems.forEach((skillsItem) => {
          skillsItem.style.pointerEvents = "none";
          skillsItem.style.cursor = "default";
          // skillsItem.setAttribute("data-anim-state", "false");
        });

        if (event.detail.previousIndex < event.detail.index) {
          skillsContent.classList.add("outro-forward");
        } else {
          skillsContent.classList.add("outro-backward");
        }
        setTimeout(() => {
          skillsH2.classList.remove("skills-h2-intro");
          skillsLeft.classList.remove("skills-left-intro");
          skillsCenter.classList.remove("skills-center-intro");
          skillsRight.classList.remove("skills-right-intro");
          skillsP.classList.remove("skills-p-intro");
          skillsContent.classList.remove("outro-forward");
          skillsContent.classList.remove("outro-backward");
        }, scrollTimeOut);
        break;

      // Examples
      case 3:
        examples.forEach((example) => {
          example.style.cursor = "default";
          example.setAttribute("data-anim-state", "false");
        });

        if (event.detail.previousIndex < event.detail.index) {
          examplesContent.classList.add("outro-forward");
        } else {
          examplesContent.classList.add("outro-backward");
        }
        setTimeout(() => {
          examplesH2.classList.remove("examples-h2-intro");
          e1.classList.remove("examples-e1-intro");
          e2.classList.remove("examples-e2-intro");
          e3.classList.remove("examples-e3-intro");
          e4.classList.remove("examples-e4-intro");
          examplesContent.classList.remove("outro-forward");
          examplesContent.classList.remove("outro-backward");
        }, scrollTimeOut);
        break;

      case 4:
        break;
      case 5:
        break;

      default:
        break;
    }

    // Add animations intro
    switch (event.detail.index) {
      // Home
      case 0:
        bannerContentH2.classList.add("banner-content-h2-intro");
        bannerContentP.classList.add("banner-content-p-intro");
        buttonsSection.classList.add("buttons-section-intro");
        break;

      // About
      case 1:
        photo.classList.add("photo-intro");
        imgPhoto.classList.add("img-photo-intro");
        textAbout.classList.add("text-about-intro");
        break;

      // Skills
      case 2:
        skillsH2.classList.add("skills-h2-intro");
        skillsLeft.classList.add("skills-left-intro");
        skillsCenter.classList.add("skills-center-intro");
        skillsRight.classList.add("skills-right-intro");
        skillsP.classList.add("skills-p-intro");
        break;

      // Examples
      case 3:
        examplesH2.classList.add("examples-h2-intro");
        e1.classList.add("examples-e1-intro");
        e2.classList.add("examples-e2-intro");
        e3.classList.add("examples-e3-intro");
        e4.classList.add("examples-e4-intro");
        break;

      case 4:
        break;
      case 5:
        break;

      default:
        break;
    }
  });

  //*** Fixing cursor pointer and interactions *************************************/
  // Home
  buttonsSection.addEventListener("animationend", (event) => {
    if (event.animationName === "banner-buttons") {
      // // buttonsSection.style.pointerEvents = "auto";
      contactButton.style.cursor = "pointer";
      CVButton.style.cursor = "pointer";
      // buttonsSection.style.cursor = "pointer";
      buttonsSection.setAttribute("data-anim-state", "true");
      // contactButton.style.pointerEvents = "auto";
      // CVButton.style.pointerEvents = "auto";
      if (CVHover) {
        CVButton.classList.add("home-button-anim");
      }
      if (contactHover) {
        contactButton.classList.add("home-button-anim");
      }
    }
  });
  CVButton.addEventListener("mouseover", () => {
    CVHover = true;
    if (CVButton.parentElement.dataset.animState === "true") {
      CVButton.classList.add("home-button-anim");
    }
  });
  contactButton.addEventListener("mouseover", () => {
    contactHover = true;
    if (contactButton.parentElement.dataset.animState === "true") {
      contactButton.classList.add("home-button-anim");
    }
  });
  CVButton.addEventListener("mouseleave", () => {
    CVHover = false;
    CVButton.classList.remove("home-button-anim");
  });
  contactButton.addEventListener("mouseleave", () => {
    contactHover = false;
    contactButton.classList.remove("home-button-anim");
  });
  CVButton.addEventListener("click", (event) => {
    if (CVButton.parentElement.dataset.animState === "false") {
      event.preventDefault();
    }
  });
  // buttonsSection.querySelectorAll("a").forEach((link) => {
  //   link.addEventListener("click", ( ) => {
  //   });
  // });

  // Skills
  skillsTrees.forEach((tree) => {
    const items = tree.querySelectorAll("li div");

    tree.addEventListener("animationend", (event) => {
      if (event.animationName === "pop") {
        items.forEach((item) => {
          item.style.cursor = "help";
          item.style.pointerEvents = "auto";
          // item.setAttribute("data-anim-state", "true");
        });
      }
    });
  });
});
