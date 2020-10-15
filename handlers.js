export function addClass(el, cls) {
  el.classList.add(cls);
}

export function removeClass(el, cls) {
  el.classList.remove(cls);
}

export function show(el) {
  addClass(el, "show");
  removeClass(el, "hide");
}

export function disableButton(btn) {
  btn.disabled = true;
}

export function enableButton(btn) {
  btn.disabled = false;
}

export function hide(el) {
  addClass(el, "hide");
  removeClass(el, "show");
}

export function updateScrollPosition(elId) {
  console.log("elId", elId);
  elId.scrollTop = elId.scrollHeight;
  // setTimeout(() => {
  //   elId.scrollTop = autp;
  // }, 100);
}

export function calculateTotal(showTotal, calcTotal, btnLabel, scoreEl) {
  let out = 0;
  const eachScore = document.querySelectorAll(scoreEl);
  for (let i = 0; i < eachScore.length; i++) {
    out += parseInt(eachScore[i].innerText, 10);
  }
  showTotal.innerText = out;
  calcTotal.innerText = btnLabel;
}

export function handleRemovePlayer(el) {
  removeClass(el, "show");
  removeClass(el, "active-player");
  hide(el);
}

export function isActivePlayer(el) {
  if (el.classList.contains("active-player")) {
    return true;
  } else {
    return false;
  }
}
export function printScore(score, inputField, output, playerScoreClass) {
  const li = document.createElement("li");
  li.setAttribute(
    "class",
    `${playerScoreClass} score-item typography__heading--03 typography__color--white`
  );
  li.innerText = score;
  output.append(li);
  inputField.value = null;
}
export function updateInitals(formEl, playerInitials) {
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const initals = formEl.querySelector("input").value;
    playerInitials.innerText = initals;
  });
}
export function saveInitials(playerSaveBtn, formEl) {
  playerSaveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    hide(formEl);
  });
}
