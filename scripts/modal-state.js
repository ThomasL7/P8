let isModalOpen = false;

function setModalState(state) {
  isModalOpen = state;
}

function getModalState() {
  return isModalOpen;
}

export { setModalState, getModalState };
