document.addEventListener("DOMContentLoaded", () => {
  const scrollTimeOut = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--scroll-delay"));
  const headerAnimationTime = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-animation-time")) * 1000;
  // const headerTitleAnimationTime = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-title-animation-time")) * 1000;

  // let onLoadAnim = true;
  // Home (0)
  const bannerContentH2 = document.querySelector("#banner-content h2");
  const bannerContentP = document.querySelector("#banner-content p");
  const buttonsSection = document.getElementById("buttons-section");
  const bannerContent = document.getElementById("banner-content");
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
  const examples = document.querySelectorAll("#gallery article");
  const examplesImage = document.querySelectorAll(".examples-filter");
  const modalPrevious = document.getElementById("modal-previous");
  const modal = document.getElementById("modal");
  const modalNext = document.getElementById("modal-next");

  // Home animations delay for header animation
  setTimeout(() => {
    bannerContentH2.classList.remove("opacity-0");
    bannerContentH2.classList.remove("opacity-0");
    bannerContentH2.classList.remove("opacity-0");
    bannerContentH2.classList.add("banner-content-h2-intro");
    bannerContentP.classList.add("banner-content-p-intro");
    buttonsSection.classList.add("buttons-section-intro");
  }, headerAnimationTime);

  //*** Set animations on index change ****************************************************/
  window.addEventListener("indexChanged", function (event) {
    // // Remove intro animations & add outro animations
    switch (event.detail.previousIndex) {
      case 0:
        buttonsSection.style.pointerEvents = "none";
        buttonsSection.style.cursor = "default";

        setTimeout(() => {
          // if (onLoadAnim) {
          //   bannerContentH2.classList.remove("banner-content-h2-on-load");
          //   bannerContentP.classList.remove("banner-content-p-on-load");
          //   buttonsSection.classList.remove("buttons-section-on-load");
          //   onLoadAnim = false;
          // }
          bannerContentH2.classList.remove("banner-content-h2-intro");
          bannerContentP.classList.remove("banner-content-p-intro");
          buttonsSection.classList.remove("buttons-section-intro");
        }, scrollTimeOut);

        if (event.detail.previousIndex < event.detail.index) {
          bannerContent.classList.add("outro-forward");
        } else {
          bannerContent.classList.add("outro-backward");
        }
        break;

      case 1:
        setTimeout(() => {
          photo.classList.remove("photo-intro");
          imgPhoto.classList.remove("img-photo-intro");
          textAbout.classList.remove("text-about-intro");
        }, scrollTimeOut);

        if (event.detail.previousIndex < event.detail.index) {
          aboutContent.classList.add("outro-forward");
        } else {
          aboutContent.classList.add("outro-backward");
        }
        break;

      case 2:
        skillsItems.forEach((skillsItem) => {
          skillsItem.style.pointerEvents = "none";
          skillsItem.style.cursor = "default";
        });

        setTimeout(() => {
          skillsH2.classList.remove("skills-h2-intro");
          skillsLeft.classList.remove("skills-left-intro");
          skillsCenter.classList.remove("skills-center-intro");
          skillsRight.classList.remove("skills-right-intro");
          skillsP.classList.remove("skills-p-intro");
        }, scrollTimeOut);

        if (event.detail.previousIndex < event.detail.index) {
          skillsContent.classList.add("outro-forward");
        } else {
          skillsContent.classList.add("outro-backward");
        }
        break;

      case 3:
        examplesImage.forEach((exampleImage) => {
          exampleImage.style.pointerEvents = "none";
          exampleImage.style.cursor = "default";
        });

        setTimeout(() => {
          examplesH2.classList.remove("examples-h2-intro");
          e1.classList.remove("examples-e1-intro");
          e2.classList.remove("examples-e2-intro");
          e3.classList.remove("examples-e3-intro");
          e4.classList.remove("examples-e4-intro");
        }, scrollTimeOut);
        if (event.detail.previousIndex < event.detail.index) {
          examplesContent.classList.add("outro-forward");
        } else {
          examplesContent.classList.add("outro-backward");
        }
        break;

      case 4:
        break;
      case 5:
        break;

      default:
        break;
    }

    // Add animations intro & remove outro animations
    switch (event.detail.index) {
      case 0:
        bannerContent.classList.remove("outro-forward");
        bannerContent.classList.remove("outro-backward");

        bannerContentH2.classList.add("banner-content-h2-intro");
        bannerContentP.classList.add("banner-content-p-intro");
        buttonsSection.classList.add("buttons-section-intro");
        break;

      case 1:
        aboutContent.classList.remove("outro-forward");
        aboutContent.classList.remove("outro-backward");
        imgPhoto.classList.remove("img-photo-fixed-filter");

        photo.classList.add("photo-intro");
        imgPhoto.classList.add("img-photo-intro");
        textAbout.classList.add("text-about-intro");
        break;

      case 2:
        skillsContent.classList.remove("outro-forward");
        skillsContent.classList.remove("outro-backward");

        skillsH2.classList.add("skills-h2-intro");
        skillsLeft.classList.add("skills-left-intro");
        skillsCenter.classList.add("skills-center-intro");
        skillsRight.classList.add("skills-right-intro");
        skillsP.classList.add("skills-p-intro");
        break;

      case 3:
        examplesContent.classList.remove("outro-forward");
        examplesContent.classList.remove("outro-backward");

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

  //*** Managing cursor pointer and interactions when animations is playing *************************************/
  // Home
  buttonsSection.addEventListener("animationend", (event) => {
    if (event.animationName === "banner-buttons") {
      buttonsSection.style.pointerEvents = "auto";
      buttonsSection.style.cursor = "pointer";
    }
  });

  // Skills
  skillsTrees.forEach((tree) => {
    const items = tree.querySelectorAll("li div");
    tree.addEventListener("animationend", (event) => {
      if (event.animationName === "pop") {
        items.forEach((item) => {
          item.style.pointerEvents = "auto";
          item.style.cursor = "help";
        });
      }
    });
  });

  // Examples
  examples.forEach((example) => {
    const image = example.querySelector(".examples-filter");
    example.addEventListener("animationstart", (event) => {
      if (event.animationName === "examples-anim") {
        image.style.pointerEvents = "auto";
        image.style.cursor = "pointer";
      }
    });
  });
});
