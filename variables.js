export const commonAncestorEl = document.querySelector("#score-card");

// Variables
//  + / -
export const addPlayer = document.querySelector("#add-player");
export const removePlayer = document.querySelector("#remove-player");

// Modals
export const howManyPlayersModal = document.querySelector(
  "#how-many-players-modal"
);
export const initialsUpdateModal = document.querySelector(
  "#players-initials-modal"
);

// Forms
export const howManyPlayersForm = howManyPlayersModal.querySelector(
  "#how-many-players-form"
);
export const p1_form = document.querySelector("form#player-1");
export const p1_initials_form = document.querySelector(
  "form#player-1-initials-form"
);
export const p2_initials_form = document.querySelector(
  "form#player-2-initials-form"
);
export const p3_initials_form = document.querySelector(
  "form#player-3-initials-form"
);
export const p4_initials_form = document.querySelector(
  "form#player-4-initials-form"
);

// Inputs
export const p1_input = p1_form.querySelector("#p1-input");
export const p2_input = document.querySelector("#p2-input");
export const p3_input = document.querySelector("#p3-input");
export const p4_input = document.querySelector("#p4-input");

// Submitters
export const p1_score_submit = document.querySelector("#player-1-score-submit");

export const p2_score_submit = document.querySelector("#player-2-score-submit");
export const p3_score_submit = document.querySelector("#player-3-score-submit");
export const p4_score_submit = document.querySelector("#player-4-score-submit");

// Buttons
export const howManyPlayersSubmit = document.querySelector(
  "#how-many-players-submit"
);

// UI
export const scoreCard = document.querySelector("#score-card");
export const calcTotalLabel = "Calc total";
export const stillPlayingLabel = "Still playing?";

// p1
export const p1_output = document.querySelector("#p1-score-list");
export const p1_save_initials = document.querySelector("#p1-save-initials");
export const p1_initials = document.querySelector("#p1-initials");
export const p1_calcTotal = document.querySelector("#p1-calculate-total");
export const p1_showTotal = document.querySelector("#p1-total");

// p2
export const p2_output = document.querySelector("#p2-score-list");
export const p2_save_initials = document.querySelector("#p2-save-initials");
export const p2_initials = document.querySelector("#p2-initials");
export const p2_calcTotal = document.querySelector("#p2-calculate-total");
export const p2_showTotal = document.querySelector("#p2-total");

// p3
export const p3_output = document.querySelector("#p3-score-list");
export const p3_save_initials = document.querySelector("#p3-save-initials");
export const p3_initials = document.querySelector("#p3-initials");
export const p3_column = document.querySelector("#p3-column");
export const p3_calcTotal = document.querySelector("#p3-calculate-total");
export const p3_totalCell = document.querySelector("#p3-total-cell");
export const p3_showTotal = document.querySelector("#p3-total");

// p4
export const p4_output = document.querySelector("#p4-score-list");
export const p4_save_initials = document.querySelector("#p4-save-initials");
export const p4_initials = document.querySelector("#p4-initials");
export const p4_column = document.querySelector("#p4-column");
export const p4_calcTotal = document.querySelector("#p4-calculate-total");
export const p4_totalCell = document.querySelector("#p4-total-cell");
export const p4_showTotal = document.querySelector("#p4-total");
