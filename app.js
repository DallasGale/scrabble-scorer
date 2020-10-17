import {
  addClass,
  calculateTotal,
  disableButton,
  enableButton,
  handleRemovePlayer,
  updateScrollPosition,
  hide,
  isActivePlayer,
  printScore,
  removeClass,
  saveInitials,
  show,
  updateInitals,
} from "./handlers";

import {
  commonAncestorEl,
  addPlayer,
  removePlayer,
  howManyPlayersForm,
  howManyPlayersModal,
  howManyPlayersSubmit,
  initialsUpdateModal,
  p1_input,
  p1_calcTotal,
  p1_initials,
  p1_output,
  p1_initials_form,
  p1_save_initials,
  p1_showTotal,
  p1_score_submit,
  p2_input,
  p2_calcTotal,
  p2_initials,
  p2_output,
  p2_showTotal,
  p2_initials_form,
  p2_save_initials,
  p2_score_submit,
  p3_input,
  p3_calcTotal,
  p3_initials,
  p3_output,
  p3_initials_form,
  p3_save_initials,
  p3_score_submit,
  p3_showTotal,
  p3_column,
  p4_input,
  p4_calcTotal,
  p4_initials,
  p4_column,
  p4_output,
  p4_initials_form,
  p4_save_initials,
  p4_score_submit,
  p4_showTotal,
  p4_totalCell,
  stillPlayingLabel,
  scoreCard,
  calcTotalLabel,
  p3_totalCell,
} from "./variables";

// Set height here because 100vh in css not quite working on ios
const scoreCardEl = document.querySelector(".score-card");
scoreCardEl.style.height = window.innerHeight - 110;

function handleScoreSubmit(playerInput, playerOutput, playerId) {
  if (playerInput.value === 0 || playerInput.value === "") {
    return;
  } else {
    printScore(playerInput.value, playerInput, playerOutput, playerId);
  }
}

function handleScoreTotals(playerCalcTotal, playerShowTotal, liClassName) {
  if (playerCalcTotal.innerText === stillPlayingLabel) {
    playerShowTotal.innerText = null;
    playerCalcTotal.innerText = calcTotalLabel;
  } else {
    calculateTotal(
      playerShowTotal,
      playerCalcTotal,
      stillPlayingLabel,
      liClassName
    );
  }
}

commonAncestorEl.onclick = function (e) {
  e.preventDefault();
  let target = e.target;

  // Score Submits
  if (target.id === p1_score_submit.id) {
    console.log("submitting");
    handleScoreSubmit(p1_input, p1_output, "p1");
    updateScrollPosition(p1_output);
  } else if (target.id === p2_score_submit.id) {
    handleScoreSubmit(p2_input, p2_output, "p2");
    updateScrollPosition(p2_output);
  } else if (target.id === p3_score_submit.id) {
    handleScoreSubmit(p3_input, p3_output, "p3");
    updateScrollPosition(p3_output);
  } else if (target.id === p4_score_submit.id) {
    handleScoreSubmit(p4_input, p4_output, "p4");
    updateScrollPosition(p4_output);
  }

  // Score Totals
  if (target.id === p1_calcTotal.id) {
    handleScoreTotals(p1_calcTotal, p1_showTotal, "li.p1");
  } else if (target.id === p2_calcTotal.id) {
    handleScoreTotals(p2_calcTotal, p2_showTotal, "li.p2");
  } else if (target.id === p3_calcTotal.id) {
    handleScoreTotals(p3_calcTotal, p3_showTotal, "li.p3");
  } else if (target.id === p4_calcTotal.id) {
    handleScoreTotals(p4_calcTotal, p4_showTotal, "li.p4");
  }
};

// Select players
howManyPlayersSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  show(scoreCard);
  hide(howManyPlayersModal);

  const selectedPlayers = howManyPlayersForm.querySelectorAll(
    "input[type=radio]:checked"
  )[0].value;

  if (selectedPlayers === "2") {
    hide(p3_column);
    hide(p4_column);
  }

  if (selectedPlayers >= "3") {
    show(p3_column);
    addClass(p3_column, "active-player");
    show(p3_totalCell);
    hide(p4_column);
    enableButton(removePlayer);
    // removeClass(p3_initials_form, "hide");
    // addClass(p3_initials_form, "show");
    // addClass(initialsUpdateModal, "show");
  }
  if (selectedPlayers === "4") {
    // removeClass(p4_initials_form, "hide");
    addClass(p4_column, "active-player");
    show(p4_column);
    show(p3_totalCell);
    show(p4_totalCell);
    console.log("p4_totalCell", p4_totalCell);
    // addClass(p4_initials_form, "show");
    // addClass(initialsUpdateModal, "show");
  }

  if (selectedPlayers >= "2" && selectedPlayers <= "3") {
    enableButton(addPlayer);
    // addClass(initialsUpdateModal, "show");
  }

  // removeClass(initialsUpdateModal, "hide");
  // addClass(initialsUpdateModal, "show");
});

// Listeners
addPlayer.addEventListener("click", (e) => {
  e.preventDefault();
  const activePlayers = document.querySelectorAll(".active-player");
  if (activePlayers.length === 2) {
    removeClass(p3_column, "hide");
    enableButton(removePlayer);
    addClass(p3_column, "show");
    addClass(p3_column, "active-player");

    removeClass(p3_initials_form, "hide");
  } else if (activePlayers.length === 3) {
    removeClass(p4_column, "hide");
    enableButton(removePlayer);
    addClass(p4_column, "show");
    addClass(p4_column, "active-player");
    removeClass(p4_initials_form, "hide");
    disableButton(addPlayer);
  }
});

removePlayer.addEventListener("click", (e) => {
  e.preventDefault();
  const p3 = isActivePlayer(p3_column);
  const p4 = isActivePlayer(p4_column);
  if (p3 && p4) {
    enableButton(addPlayer);
    handleRemovePlayer(p4_column);
    handleRemovePlayer(p4_initials_form);
    return;
  }
  if (p3 && !p4) {
    disableButton(removePlayer);
    handleRemovePlayer(p3_column);
    handleRemovePlayer(p3_initials_form);
    return;
  }
});

updateInitals(p1_initials_form, p1_initials);
saveInitials(p1_save_initials, p1_initials_form);
updateInitals(p2_initials_form, p2_initials);
saveInitials(p2_save_initials, p2_initials_form);
updateInitals(p3_initials_form, p3_initials);
saveInitials(p3_save_initials, p3_initials_form);
updateInitals(p4_initials_form, p4_initials);
saveInitials(p4_save_initials, p4_initials_form);
