document.addEventListener("DOMContentLoaded", () => {
  // ==== DOM ====
  const examplesDivs = document.querySelectorAll("#examples-gallery article > div");
  const examplesFilters = document.querySelectorAll(".examples-filters");
  const modalScreen = document.getElementById("modal-screen");
  const modal = document.getElementById("modal");
  const modalPreviousButton = document.getElementById("modal-previous-button");
  const modalNextButton = document.getElementById("modal-next-button");
  const modalCloseIcon = document.getElementById("modal-close-icon");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalLink = document.getElementById("modal-link");
  const modalDescription = document.getElementById("modal-description");
  const modalDifficulties = document.getElementById("modal-difficulties");
  const modalSkills = document.getElementById("modal-skills");
  // ==== Classes ====
  const CLASS_FILTER_CHANGE = "active-example-filter-on-change";
  const CLASS_FILTER_CLOSE = "active-example-filter-close";
  const CLASS_FILTER_OPEN = "active-example-filter-open";
  const CLASS_MODAL_CLOSE = "modal-close";
  const CLASS_MODAL_OPEN = "modal-open";
  //  ==== Booleans ====
  window.isModalOpen = false;
  // ==== Variables ====
  let currentIndexSlide = 0;
  let previousFilterAnimation;

  //*** Functions ****************************************************/
  /**  @param {string} animationType "open" or "change" or "close" */
  function setExampleFilterAnimationOnModalEvent(index, animationType) {
    const example = examplesDivs[index];

    switch (animationType) {
      case "open":
        example.classList.remove(CLASS_FILTER_CLOSE);
        example.classList.add(CLASS_FILTER_OPEN);
        break;
      case "change":
        // previous and next
        example.classList.remove(CLASS_FILTER_CLOSE);
        previousFilterAnimation.classList.remove(CLASS_FILTER_OPEN);
        previousFilterAnimation.classList.remove(CLASS_FILTER_CHANGE);
        example.classList.add(CLASS_FILTER_CHANGE);
        break;
      case "close":
        example.classList.remove(CLASS_FILTER_OPEN);
        example.classList.remove(CLASS_FILTER_CHANGE);
        example.classList.add(CLASS_FILTER_CLOSE);
        break;
      default:
    }
    previousFilterAnimation = example;
  }

  function openModal(index) {
    currentIndexSlide = index;
    setExampleFilterAnimationOnModalEvent(index, "open");
    adaptingContent(index);
    modal.classList.remove(CLASS_MODAL_CLOSE);
    modalScreen.style.display = "flex";
    modal.classList.add(CLASS_MODAL_OPEN);
    window.isModalOpen = true;
  }

  function adaptingContent(index) {
    const exampleDatas = window.examplesModalDatas[index];
    modalImage.setAttribute("src", `./assets/images/${exampleDatas.image}`);
    modalTitle.innerHTML = `N°${index + 1} : ${exampleDatas.title}`;
    modalLink.setAttribute("href", exampleDatas.link);
    modalLink.innerHTML = exampleDatas.link;
    modalDescription.innerHTML = exampleDatas.description;
    modalDifficulties.innerHTML = "";
    exampleDatas.difficulties.forEach((difficulty) => {
      modalDifficulties.insertAdjacentHTML("beforeend", `<p><img class="arrows-problems" src="./assets/svg/arrow-problem.svg" alt="Icône de flèche.">${difficulty.problems}<br><span>Solution :</span> ${difficulty.solutions}</p>`);
    });
    modalSkills.innerHTML = "";
    exampleDatas.skills.forEach((skill) => {
      modalSkills.insertAdjacentHTML("beforeend", `<li>${skill}</li>`);
    });
  }

  function closeModal() {
    modal.classList.remove(CLASS_MODAL_OPEN);
    modal.classList.add(CLASS_MODAL_CLOSE);
    setExampleFilterAnimationOnModalEvent(currentIndexSlide, "close");
    modalScreen.style.display = "none";
    window.isModalOpen = false;
  }

  //*** Events ****************************************************/
  examplesFilters.forEach((example, index) => {
    example.addEventListener("click", (event) => {
      if (window.isExampleParentAnimationEndedArray[index]) {
        openModal(index);
        event.stopPropagation();
      }
    });
  });

  modalPreviousButton.addEventListener("click", () => {
    currentIndexSlide = (currentIndexSlide - 1 + examplesFilters.length) % examplesFilters.length;
    setExampleFilterAnimationOnModalEvent(currentIndexSlide, "change");
    adaptingContent(currentIndexSlide);
  });

  modalNextButton.addEventListener("click", () => {
    currentIndexSlide = (currentIndexSlide + 1) % examplesFilters.length;
    setExampleFilterAnimationOnModalEvent(currentIndexSlide, "change");
    adaptingContent(currentIndexSlide);
  });

  // Closing modal on external click
  document.addEventListener("click", (event) => {
    if (!window.isModalOpen) return;
    const isClickInsideModal = modal.contains(event.target) || modalPreviousButton.contains(event.target) || modalNextButton.contains(event.target);
    if (isClickInsideModal && event.target !== modalCloseIcon) return;
    closeModal();
  });
});
