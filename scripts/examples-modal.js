import examples from "../datas/examples.js";
import { setModalState, getModalState } from "./modal-state.js";

document.addEventListener("DOMContentLoaded", () => {
  const articles = document.querySelectorAll(".examples-filter");
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

  // Function for adapting content modal
  function adaptingContent(index) {
    image.setAttribute("src", `./assets/images/${examples[index].image}`);

    title.innerHTML = "";
    title.innerHTML = `N°${index + 1} : ${examples[index].title}`;

    link.innerHTML = "";
    link.setAttribute("href", `${examples[index].link}`);
    link.innerHTML = `${examples[index].link}`;

    description.innerHTML = "";
    description.innerHTML = `${examples[index].description}`;

    difficulties.innerHTML = "";
    examples[index].difficulties.forEach((difficulty) => {
      difficulties.insertAdjacentHTML("beforeend", `<p><img class="arrow-text" src="./assets/svg/arrow-problem.svg" alt="Icône de flèche.">${difficulty.problems}<br><span>Solution :</span> ${difficulty.solutions}</p>`);
    });

    skills.innerHTML = "";
    examples[index].skills.forEach((skill) => {
      skills.insertAdjacentHTML("beforeend", `<li>${skill}</li>`);
    });
  }

  // Closing modal
  document.addEventListener("click", (event) => {
    if (getModalState() === true) {
      if ((!modal.contains(event.target) && !modalPrevious.contains(event.target) && !modalNext.contains(event.target)) || event.target === closeIcon) {
        modal.classList.remove("modal-anim-open");
        modal.classList.add("modal-anim-close");
        modalDisplay.style.display = "none";
        setModalState(false);
      }
    }
  });

  // Opening modal
  articles.forEach((article, index) => {
    article.addEventListener("click", (event) => {
      currentIndex = index;
      adaptingContent(index);
      event.stopPropagation();
      modal.classList.remove("modal-anim-close");
      modalDisplay.style.display = "flex";
      modal.classList.add("modal-anim-open");
      setModalState(true);
    });
  });

  // Previous & next arrows
  modalPrevious.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + articles.length) % articles.length;
    adaptingContent(currentIndex);
  });
  modalNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % articles.length;
    adaptingContent(currentIndex);
  });
});
