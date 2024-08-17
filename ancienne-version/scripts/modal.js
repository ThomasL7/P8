document.addEventListener("DOMContentLoaded", () => {
  const examplesData = window.examplesData;
  const examples = document.querySelectorAll(".examples-filter");
  const modalDisplay = document.getElementById("modal-background");
  const modal = document.getElementById("modal");
  const closeIcon = document.getElementById("close-icon");
  const modalPrevious = document.getElementById("modal-previous");
  const modalNext = document.getElementById("modal-next");
  const image = document.getElementById("modal-image");
  const title = document.getElementById("m-tit");
  const link = document.getElementById("m-lin");
  const description = document.getElementById("m-des");
  const difficulties = document.getElementById("m-dif");
  const skills = document.getElementById("m-ski");
  let currentIndex = 0;
  window.isModalOpen = false;

  // Function for adapting content modal
  function adaptingContent(index) {
    image.setAttribute("src", `./assets/images/${examplesData[index].image}`);

    title.innerHTML = "";
    title.innerHTML = `N°${index + 1} : ${examplesData[index].title}`;

    link.innerHTML = "";
    link.setAttribute("href", `${examplesData[index].link}`);
    link.innerHTML = `${examplesData[index].link}`;

    description.innerHTML = "";
    description.innerHTML = `${examplesData[index].description}`;

    difficulties.innerHTML = "";
    examplesData[index].difficulties.forEach((difficulty) => {
      difficulties.insertAdjacentHTML("beforeend", `<p><img class="arrow-text" src="./assets/svg/arrow-problem.svg" alt="Icône de flèche.">${difficulty.problems}<br><span>Solution :</span> ${difficulty.solutions}</p>`);
    });

    skills.innerHTML = "";
    examplesData[index].skills.forEach((skill) => {
      skills.insertAdjacentHTML("beforeend", `<li>${skill}</li>`);
    });
  }

  // Closing modal
  document.addEventListener("click", (event) => {
    if (window.isModalOpen === true) {
      if ((!modal.contains(event.target) && !modalPrevious.contains(event.target) && !modalNext.contains(event.target)) || event.target === closeIcon) {
        modal.classList.remove("modal-anim-open");
        modal.classList.add("modal-anim-close");
        modalDisplay.style.display = "none";
        window.isModalOpen = false;
      }
    }
  });

  // Opening modal
  examples.forEach((example, index) => {
    example.addEventListener("click", (event) => {
      if (example.dataset.animState === "true") {
        currentIndex = index;
        adaptingContent(index);
        event.stopPropagation();
        modal.classList.remove("modal-anim-close");
        modalDisplay.style.display = "flex";
        modal.classList.add("modal-anim-open");
        window.isModalOpen = true;
      }
    });
  });

  // Previous & next arrows
  modalPrevious.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + examples.length) % examples.length;
    adaptingContent(currentIndex);
  });
  modalNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % examples.length;
    adaptingContent(currentIndex);
  });
});
