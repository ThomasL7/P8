document.addEventListener("DOMContentLoaded", function () {
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
  const skillsLeft = document.getElementById("skills-left");
  const skillsCenter = document.getElementById("skills-center");
  const skillsRight = document.getElementById("skills-right");
  const skillsP = document.querySelector("#skills p");
  const skillsContent = document.getElementById("skills-content");

  //*** Set animations on index change ****************************************************/
  window.addEventListener("indexChanged", function (event) {
    // Remove intro animations & add outro animations
    switch (event.detail.previousIndex) {
      case 0:
        bannerContentH2.classList.remove("banner-content-h2-intro");
        bannerContentP.classList.remove("banner-content-p-intro");
        buttonsSection.classList.remove("buttons-section-intro");
        if (event.detail.previousIndex < event.detail.index) {
          bannerContent.classList.add("outro-forward");
        } else {
          bannerContent.classList.add("outro-backward");
        }
        break;

      case 1:
        photo.classList.remove("photo-intro");
        imgPhoto.classList.remove("img-photo-intro");
        textAbout.classList.remove("text-about-intro");

        if (event.detail.previousIndex < event.detail.index) {
          aboutContent.classList.add("outro-forward");
        } else {
          aboutContent.classList.add("outro-backward");
        }
        break;

      case 2:
        skillsH2.classList.remove("skills-h2-intro");
        skillsLeft.classList.remove("skills-left-intro");
        skillsCenter.classList.remove("skills-center-intro");
        skillsRight.classList.remove("skills-right-intro");
        skillsP.classList.remove("skills-p-intro");

        if (event.detail.previousIndex < event.detail.index) {
          skillsContent.classList.add("outro-forward");
        } else {
          skillsContent.classList.add("outro-backward");
        }
        break;

      case 3:
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
        break;

      case 4:
        break;
      case 5:
        break;

      default:
        break;
    }
  });
});
