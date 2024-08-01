document.addEventListener("DOMContentLoaded", function () {
  // Home (0)
  const bannerContentH2 = document.querySelector("#banner-content h2");
  const bannerContentP = document.querySelector("#banner-content p");
  const buttonsSection = document.getElementById("buttons-section");
  // About (1)
  const photo = document.getElementById("photo");
  const imgPhoto = document.querySelector("#photo img");
  const textAbout = document.getElementById("text-about");
  // Skills (2)
  const skillsH2 = document.querySelector("#skills h2");
  const skillsLeft = document.getElementById("skills-left");
  const skillsCenter = document.getElementById("skills-center");
  const skillsRight = document.getElementById("skills-right");
  const skillsP = document.querySelector("#skills p");

  //*** Set animations on index change ****************************************************/
  window.addEventListener("indexChanged", function (event) {
    // Remove all animations
    switch (event.detail.previousIndex) {
      case 0:
        bannerContentH2.classList.remove("banner-content-h2-intro");
        bannerContentP.classList.remove("banner-content-p-intro");
        buttonsSection.classList.remove("buttons-section-intro");
        break;
      case 1:
        photo.classList.remove("photo-intro");
        imgPhoto.classList.remove("img-photo-intro");
        textAbout.classList.remove("text-about-intro");
        break;
      case 2:
        skillsH2.classList.remove("skills-h2-intro");
        skillsLeft.classList.remove("skills-left-intro");
        skillsCenter.classList.remove("skills-center-intro");
        skillsRight.classList.remove("skills-right-intro");
        skillsP.classList.remove("skills-p-intro");
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

    // Add animations intro
    switch (event.detail.index) {
      case 0:
        bannerContentH2.classList.add("banner-content-h2-intro");
        bannerContentP.classList.add("banner-content-p-intro");
        buttonsSection.classList.add("buttons-section-intro");
        break;
      case 1:
        photo.classList.add("photo-intro");
        imgPhoto.classList.add("img-photo-intro");
        textAbout.classList.add("text-about-intro");
        break;
      case 2:
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
