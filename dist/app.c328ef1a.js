// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/handlers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.show = show;
exports.disableButton = disableButton;
exports.enableButton = enableButton;
exports.hide = hide;
exports.updateScrollPosition = updateScrollPosition;
exports.calculateTotal = calculateTotal;
exports.handleRemovePlayer = handleRemovePlayer;
exports.isActivePlayer = isActivePlayer;
exports.printScore = printScore;
exports.updateInitals = updateInitals;
exports.saveInitials = saveInitials;

function addClass(el, cls) {
  el.classList.add(cls);
}

function removeClass(el, cls) {
  el.classList.remove(cls);
}

function show(el) {
  addClass(el, "show");
  removeClass(el, "hide");
}

function disableButton(btn) {
  btn.disabled = true;
}

function enableButton(btn) {
  btn.disabled = false;
}

function hide(el) {
  addClass(el, "hide");
  removeClass(el, "show");
}

function updateScrollPosition(elId) {
  console.log("elId", elId);
  elId.scrollTop = elId.scrollHeight; // setTimeout(() => {
  //   elId.scrollTop = autp;
  // }, 100);
}

function calculateTotal(showTotal, calcTotal, btnLabel, scoreEl) {
  var out = 0;
  var eachScore = document.querySelectorAll(scoreEl);

  for (var i = 0; i < eachScore.length; i++) {
    out += parseInt(eachScore[i].innerText, 10);
  }

  showTotal.innerText = out;
  calcTotal.innerText = btnLabel;
}

function handleRemovePlayer(el) {
  removeClass(el, "show");
  removeClass(el, "active-player");
  hide(el);
}

function isActivePlayer(el) {
  if (el.classList.contains("active-player")) {
    return true;
  } else {
    return false;
  }
}

function printScore(score, inputField, output, playerScoreClass) {
  var li = document.createElement("li");
  li.setAttribute("class", "".concat(playerScoreClass, " score-item typography__heading--03 typography__color--white"));
  li.innerText = score;
  output.append(li);
  inputField.value = null;
}

function updateInitals(formEl, playerInitials) {
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    var initals = formEl.querySelector("input").value;
    playerInitials.innerText = initals;
  });
}

function saveInitials(playerSaveBtn, formEl) {
  playerSaveBtn.addEventListener("click", function (e) {
    e.preventDefault();
    hide(formEl);
  });
}
},{}],"js/variables.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.p4_showTotal = exports.p4_totalCell = exports.p4_calcTotal = exports.p4_column = exports.p4_initials = exports.p4_save_initials = exports.p4_output = exports.p3_showTotal = exports.p3_totalCell = exports.p3_calcTotal = exports.p3_column = exports.p3_initials = exports.p3_save_initials = exports.p3_output = exports.p2_showTotal = exports.p2_calcTotal = exports.p2_initials = exports.p2_save_initials = exports.p2_output = exports.p1_showTotal = exports.p1_calcTotal = exports.p1_initials = exports.p1_save_initials = exports.p1_output = exports.stillPlayingLabel = exports.calcTotalLabel = exports.scoreCard = exports.howManyPlayersSubmit = exports.p4_score_submit = exports.p3_score_submit = exports.p2_score_submit = exports.p1_score_submit = exports.p4_input = exports.p3_input = exports.p2_input = exports.p1_input = exports.p4_initials_form = exports.p3_initials_form = exports.p2_initials_form = exports.p1_initials_form = exports.p1_form = exports.howManyPlayersForm = exports.initialsUpdateModal = exports.howManyPlayersModal = exports.removePlayer = exports.addPlayer = exports.commonAncestorEl = void 0;
var commonAncestorEl = document.querySelector("#score-card"); // Variables
//  + / -

exports.commonAncestorEl = commonAncestorEl;
var addPlayer = document.querySelector("#add-player");
exports.addPlayer = addPlayer;
var removePlayer = document.querySelector("#remove-player"); // Modals

exports.removePlayer = removePlayer;
var howManyPlayersModal = document.querySelector("#how-many-players-modal");
exports.howManyPlayersModal = howManyPlayersModal;
var initialsUpdateModal = document.querySelector("#players-initials-modal"); // Forms

exports.initialsUpdateModal = initialsUpdateModal;
var howManyPlayersForm = howManyPlayersModal.querySelector("#how-many-players-form");
exports.howManyPlayersForm = howManyPlayersForm;
var p1_form = document.querySelector("form#player-1");
exports.p1_form = p1_form;
var p1_initials_form = document.querySelector("form#player-1-initials-form");
exports.p1_initials_form = p1_initials_form;
var p2_initials_form = document.querySelector("form#player-2-initials-form");
exports.p2_initials_form = p2_initials_form;
var p3_initials_form = document.querySelector("form#player-3-initials-form");
exports.p3_initials_form = p3_initials_form;
var p4_initials_form = document.querySelector("form#player-4-initials-form"); // Inputs

exports.p4_initials_form = p4_initials_form;
var p1_input = p1_form.querySelector("#p1-input");
exports.p1_input = p1_input;
var p2_input = document.querySelector("#p2-input");
exports.p2_input = p2_input;
var p3_input = document.querySelector("#p3-input");
exports.p3_input = p3_input;
var p4_input = document.querySelector("#p4-input"); // Submitters

exports.p4_input = p4_input;
var p1_score_submit = document.querySelector("#player-1-score-submit");
exports.p1_score_submit = p1_score_submit;
var p2_score_submit = document.querySelector("#player-2-score-submit");
exports.p2_score_submit = p2_score_submit;
var p3_score_submit = document.querySelector("#player-3-score-submit");
exports.p3_score_submit = p3_score_submit;
var p4_score_submit = document.querySelector("#player-4-score-submit"); // Buttons

exports.p4_score_submit = p4_score_submit;
var howManyPlayersSubmit = document.querySelector("#how-many-players-submit"); // UI

exports.howManyPlayersSubmit = howManyPlayersSubmit;
var scoreCard = document.querySelector("#score-card");
exports.scoreCard = scoreCard;
var calcTotalLabel = "Calc total";
exports.calcTotalLabel = calcTotalLabel;
var stillPlayingLabel = "Still playing?"; // p1

exports.stillPlayingLabel = stillPlayingLabel;
var p1_output = document.querySelector("#p1-score-list");
exports.p1_output = p1_output;
var p1_save_initials = document.querySelector("#p1-save-initials");
exports.p1_save_initials = p1_save_initials;
var p1_initials = document.querySelector("#p1-initials");
exports.p1_initials = p1_initials;
var p1_calcTotal = document.querySelector("#p1-calculate-total");
exports.p1_calcTotal = p1_calcTotal;
var p1_showTotal = document.querySelector("#p1-total"); // p2

exports.p1_showTotal = p1_showTotal;
var p2_output = document.querySelector("#p2-score-list");
exports.p2_output = p2_output;
var p2_save_initials = document.querySelector("#p2-save-initials");
exports.p2_save_initials = p2_save_initials;
var p2_initials = document.querySelector("#p2-initials");
exports.p2_initials = p2_initials;
var p2_calcTotal = document.querySelector("#p2-calculate-total");
exports.p2_calcTotal = p2_calcTotal;
var p2_showTotal = document.querySelector("#p2-total"); // p3

exports.p2_showTotal = p2_showTotal;
var p3_output = document.querySelector("#p3-score-list");
exports.p3_output = p3_output;
var p3_save_initials = document.querySelector("#p3-save-initials");
exports.p3_save_initials = p3_save_initials;
var p3_initials = document.querySelector("#p3-initials");
exports.p3_initials = p3_initials;
var p3_column = document.querySelector("#p3-column");
exports.p3_column = p3_column;
var p3_calcTotal = document.querySelector("#p3-calculate-total");
exports.p3_calcTotal = p3_calcTotal;
var p3_totalCell = document.querySelector("#p3-total-cell");
exports.p3_totalCell = p3_totalCell;
var p3_showTotal = document.querySelector("#p3-total"); // p4

exports.p3_showTotal = p3_showTotal;
var p4_output = document.querySelector("#p4-score-list");
exports.p4_output = p4_output;
var p4_save_initials = document.querySelector("#p4-save-initials");
exports.p4_save_initials = p4_save_initials;
var p4_initials = document.querySelector("#p4-initials");
exports.p4_initials = p4_initials;
var p4_column = document.querySelector("#p4-column");
exports.p4_column = p4_column;
var p4_calcTotal = document.querySelector("#p4-calculate-total");
exports.p4_calcTotal = p4_calcTotal;
var p4_totalCell = document.querySelector("#p4-total-cell");
exports.p4_totalCell = p4_totalCell;
var p4_showTotal = document.querySelector("#p4-total");
exports.p4_showTotal = p4_showTotal;
},{}],"app.js":[function(require,module,exports) {
"use strict";

var _handlers = require("./js/handlers");

var _variables = require("./js/variables");

// Set height here because 100vh in css not quite working on ios
var scoreCardEl = document.querySelector(".score-card");
scoreCardEl.style.height = window.innerHeight - 110;

function handleScoreSubmit(playerInput, playerOutput, playerId) {
  if (playerInput.value === 0 || playerInput.value === "") {
    return;
  } else {
    (0, _handlers.printScore)(playerInput.value, playerInput, playerOutput, playerId);
  }
}

function handleScoreTotals(playerCalcTotal, playerShowTotal, liClassName) {
  if (playerCalcTotal.innerText === _variables.stillPlayingLabel) {
    playerShowTotal.innerText = null;
    playerCalcTotal.innerText = _variables.calcTotalLabel;
  } else {
    (0, _handlers.calculateTotal)(playerShowTotal, playerCalcTotal, _variables.stillPlayingLabel, liClassName);
  }
}

_variables.commonAncestorEl.onclick = function (e) {
  e.preventDefault();
  var target = e.target; // Score Submits

  if (target.id === _variables.p1_score_submit.id) {
    console.log("submitting");
    handleScoreSubmit(_variables.p1_input, _variables.p1_output, "p1");
    (0, _handlers.updateScrollPosition)(_variables.p1_output);
  } else if (target.id === _variables.p2_score_submit.id) {
    handleScoreSubmit(_variables.p2_input, _variables.p2_output, "p2");
    (0, _handlers.updateScrollPosition)(_variables.p2_output);
  } else if (target.id === _variables.p3_score_submit.id) {
    handleScoreSubmit(_variables.p3_input, _variables.p3_output, "p3");
    (0, _handlers.updateScrollPosition)(_variables.p3_output);
  } else if (target.id === _variables.p4_score_submit.id) {
    handleScoreSubmit(_variables.p4_input, _variables.p4_output, "p4");
    (0, _handlers.updateScrollPosition)(_variables.p4_output);
  } // Score Totals


  if (target.id === _variables.p1_calcTotal.id) {
    handleScoreTotals(_variables.p1_calcTotal, _variables.p1_showTotal, "li.p1");
  } else if (target.id === _variables.p2_calcTotal.id) {
    handleScoreTotals(_variables.p2_calcTotal, _variables.p2_showTotal, "li.p2");
  } else if (target.id === _variables.p3_calcTotal.id) {
    handleScoreTotals(_variables.p3_calcTotal, _variables.p3_showTotal, "li.p3");
  } else if (target.id === _variables.p4_calcTotal.id) {
    handleScoreTotals(_variables.p4_calcTotal, _variables.p4_showTotal, "li.p4");
  }
}; // Select players


_variables.howManyPlayersSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  (0, _handlers.show)(_variables.scoreCard);
  (0, _handlers.hide)(_variables.howManyPlayersModal);

  var selectedPlayers = _variables.howManyPlayersForm.querySelectorAll("input[type=radio]:checked")[0].value;

  if (selectedPlayers === "2") {
    (0, _handlers.hide)(_variables.p3_column);
    (0, _handlers.hide)(_variables.p4_column);
  }

  if (selectedPlayers >= "3") {
    (0, _handlers.show)(_variables.p3_column);
    (0, _handlers.addClass)(_variables.p3_column, "active-player");
    (0, _handlers.show)(_variables.p3_totalCell);
    (0, _handlers.hide)(_variables.p4_column);
    (0, _handlers.enableButton)(_variables.removePlayer); // removeClass(p3_initials_form, "hide");
    // addClass(p3_initials_form, "show");
    // addClass(initialsUpdateModal, "show");
  }

  if (selectedPlayers === "4") {
    // removeClass(p4_initials_form, "hide");
    (0, _handlers.addClass)(_variables.p4_column, "active-player");
    (0, _handlers.show)(_variables.p4_column);
    (0, _handlers.show)(_variables.p3_totalCell);
    (0, _handlers.show)(_variables.p4_totalCell);
    console.log("p4_totalCell", _variables.p4_totalCell); // addClass(p4_initials_form, "show");
    // addClass(initialsUpdateModal, "show");
  }

  if (selectedPlayers >= "2" && selectedPlayers <= "3") {
    (0, _handlers.enableButton)(_variables.addPlayer); // addClass(initialsUpdateModal, "show");
  } // removeClass(initialsUpdateModal, "hide");
  // addClass(initialsUpdateModal, "show");

}); // Listeners


_variables.addPlayer.addEventListener("click", function (e) {
  e.preventDefault();
  var activePlayers = document.querySelectorAll(".active-player");

  if (activePlayers.length === 2) {
    (0, _handlers.removeClass)(_variables.p3_column, "hide");
    (0, _handlers.enableButton)(_variables.removePlayer);
    (0, _handlers.addClass)(_variables.p3_column, "show");
    (0, _handlers.addClass)(_variables.p3_column, "active-player");
    (0, _handlers.removeClass)(_variables.p3_initials_form, "hide");
  } else if (activePlayers.length === 3) {
    (0, _handlers.removeClass)(_variables.p4_column, "hide");
    (0, _handlers.enableButton)(_variables.removePlayer);
    (0, _handlers.addClass)(_variables.p4_column, "show");
    (0, _handlers.addClass)(_variables.p4_column, "active-player");
    (0, _handlers.removeClass)(_variables.p4_initials_form, "hide");
    (0, _handlers.disableButton)(_variables.addPlayer);
  }
});

_variables.removePlayer.addEventListener("click", function (e) {
  e.preventDefault();
  var p3 = (0, _handlers.isActivePlayer)(_variables.p3_column);
  var p4 = (0, _handlers.isActivePlayer)(_variables.p4_column);

  if (p3 && p4) {
    (0, _handlers.enableButton)(_variables.addPlayer);
    (0, _handlers.handleRemovePlayer)(_variables.p4_column);
    (0, _handlers.handleRemovePlayer)(_variables.p4_initials_form);
    return;
  }

  if (p3 && !p4) {
    (0, _handlers.disableButton)(_variables.removePlayer);
    (0, _handlers.handleRemovePlayer)(_variables.p3_column);
    (0, _handlers.handleRemovePlayer)(_variables.p3_initials_form);
    return;
  }
});

(0, _handlers.updateInitals)(_variables.p1_initials_form, _variables.p1_initials);
(0, _handlers.saveInitials)(_variables.p1_save_initials, _variables.p1_initials_form);
(0, _handlers.updateInitals)(_variables.p2_initials_form, _variables.p2_initials);
(0, _handlers.saveInitials)(_variables.p2_save_initials, _variables.p2_initials_form);
(0, _handlers.updateInitals)(_variables.p3_initials_form, _variables.p3_initials);
(0, _handlers.saveInitials)(_variables.p3_save_initials, _variables.p3_initials_form);
(0, _handlers.updateInitals)(_variables.p4_initials_form, _variables.p4_initials);
(0, _handlers.saveInitials)(_variables.p4_save_initials, _variables.p4_initials_form);
},{"./js/handlers":"js/handlers.js","./js/variables":"js/variables.js"}],"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49353" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map