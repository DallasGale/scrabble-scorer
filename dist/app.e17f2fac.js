parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NG9Y":[function(require,module,exports) {
"use strict";function e(e,t){e.classList.add(t)}function t(e,t){e.classList.remove(t)}function n(n){e(n,"show"),t(n,"hide")}function o(e){e.disabled=!0}function r(e){e.disabled=!1}function s(n){e(n,"hide"),t(n,"show")}function i(e){console.log("elId",e),e.scrollTop=e.scrollHeight}function l(e,t,n,o){for(var r=0,s=document.querySelectorAll(o),i=0;i<s.length;i++)r+=parseInt(s[i].innerText,10);e.innerText=r,t.innerText=n}function a(e){t(e,"show"),t(e,"active-player"),s(e)}function c(e){return!!e.classList.contains("active-player")}function u(e,t,n,o){var r=document.createElement("li");r.setAttribute("class","".concat(o," score-item typography__heading--03 typography__color--white")),r.innerText=e,n.append(r),t.value=null}function p(e,t){e.addEventListener("submit",function(n){n.preventDefault();var o=e.querySelector("input").value;t.innerText=o})}function d(e,t){e.addEventListener("click",function(e){e.preventDefault(),s(t)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.addClass=e,exports.removeClass=t,exports.show=n,exports.disableButton=o,exports.enableButton=r,exports.hide=s,exports.updateScrollPosition=i,exports.calculateTotal=l,exports.handleRemovePlayer=a,exports.isActivePlayer=c,exports.printScore=u,exports.updateInitals=p,exports.saveInitials=d;
},{}],"gwhS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.p4_showTotal=exports.p4_totalCell=exports.p4_calcTotal=exports.p4_column=exports.p4_initials=exports.p4_save_initials=exports.p4_output=exports.p3_showTotal=exports.p3_totalCell=exports.p3_calcTotal=exports.p3_column=exports.p3_initials=exports.p3_save_initials=exports.p3_output=exports.p2_showTotal=exports.p2_calcTotal=exports.p2_initials=exports.p2_save_initials=exports.p2_output=exports.p1_showTotal=exports.p1_calcTotal=exports.p1_initials=exports.p1_save_initials=exports.p1_output=exports.stillPlayingLabel=exports.calcTotalLabel=exports.scoreCard=exports.howManyPlayersSubmit=exports.p4_score_submit=exports.p3_score_submit=exports.p2_score_submit=exports.p1_score_submit=exports.p4_input=exports.p3_input=exports.p2_input=exports.p1_input=exports.p4_initials_form=exports.p3_initials_form=exports.p2_initials_form=exports.p1_initials_form=exports.p1_form=exports.howManyPlayersForm=exports.initialsUpdateModal=exports.howManyPlayersModal=exports.removePlayer=exports.addPlayer=exports.commonAncestorEl=void 0;var e=document.querySelector("#score-card");exports.commonAncestorEl=e;var t=document.querySelector("#add-player");exports.addPlayer=t;var r=document.querySelector("#remove-player");exports.removePlayer=r;var o=document.querySelector("#how-many-players-modal");exports.howManyPlayersModal=o;var p=document.querySelector("#players-initials-modal");exports.initialsUpdateModal=p;var s=o.querySelector("#how-many-players-form");exports.howManyPlayersForm=s;var a=document.querySelector("form#player-1");exports.p1_form=a;var l=document.querySelector("form#player-1-initials-form");exports.p1_initials_form=l;var i=document.querySelector("form#player-2-initials-form");exports.p2_initials_form=i;var c=document.querySelector("form#player-3-initials-form");exports.p3_initials_form=c;var u=document.querySelector("form#player-4-initials-form");exports.p4_initials_form=u;var n=a.querySelector("#p1-input");exports.p1_input=n;var _=document.querySelector("#p2-input");exports.p2_input=_;var m=document.querySelector("#p3-input");exports.p3_input=m;var x=document.querySelector("#p4-input");exports.p4_input=x;var y=document.querySelector("#player-1-score-submit");exports.p1_score_submit=y;var d=document.querySelector("#player-2-score-submit");exports.p2_score_submit=d;var v=document.querySelector("#player-3-score-submit");exports.p3_score_submit=v;var S=document.querySelector("#player-4-score-submit");exports.p4_score_submit=S;var q=document.querySelector("#how-many-players-submit");exports.howManyPlayersSubmit=q;var f=document.querySelector("#score-card");exports.scoreCard=f;var b="Calc total";exports.calcTotalLabel=b;var T="Still playing?";exports.stillPlayingLabel=T;var h=document.querySelector("#p1-score-list");exports.p1_output=h;var w=document.querySelector("#p1-save-initials");exports.p1_save_initials=w;var P=document.querySelector("#p1-initials");exports.p1_initials=P;var M=document.querySelector("#p1-calculate-total");exports.p1_calcTotal=M;var C=document.querySelector("#p1-total");exports.p1_showTotal=C;var L=document.querySelector("#p2-score-list");exports.p2_output=L;var g=document.querySelector("#p2-save-initials");exports.p2_save_initials=g;var A=document.querySelector("#p2-initials");exports.p2_initials=A;var E=document.querySelector("#p2-calculate-total");exports.p2_calcTotal=E;var F=document.querySelector("#p2-total");exports.p2_showTotal=F;var U=document.querySelector("#p3-score-list");exports.p3_output=U;var j=document.querySelector("#p3-save-initials");exports.p3_save_initials=j;var O=document.querySelector("#p3-initials");exports.p3_initials=O;var k=document.querySelector("#p3-column");exports.p3_column=k;var z=document.querySelector("#p3-calculate-total");exports.p3_calcTotal=z;var B=document.querySelector("#p3-total-cell");exports.p3_totalCell=B;var D=document.querySelector("#p3-total");exports.p3_showTotal=D;var G=document.querySelector("#p4-score-list");exports.p4_output=G;var H=document.querySelector("#p4-save-initials");exports.p4_save_initials=H;var I=document.querySelector("#p4-initials");exports.p4_initials=I;var J=document.querySelector("#p4-column");exports.p4_column=J;var K=document.querySelector("#p4-calculate-total");exports.p4_calcTotal=K;var N=document.querySelector("#p4-total-cell");exports.p4_totalCell=N;var Q=document.querySelector("#p4-total");exports.p4_showTotal=Q;
},{}],"EVxB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var l=require("./src/js/handlers"),e=require("./src/js/variables");function a(e,a,i){0!==e.value&&""!==e.value&&l.printScore(e.value,e,a,i)}function i(a,i,t){a.innerText===e.stillPlayingLabel?(i.innerText=null,a.innerText=e.calcTotalLabel):l.calculateTotal(i,a,e.stillPlayingLabel,t)}e.commonAncestorEl.onclick=function(t){t.preventDefault();var o=t.target;o.id===e.p1_score_submit.id?(console.log("submitting"),a(e.p1_input,e.p1_output,"p1"),l.updateScrollPosition(e.p1_output)):o.id===e.p2_score_submit.id?(a(e.p2_input,e.p2_output,"p2"),l.updateScrollPosition(e.p2_output)):o.id===e.p3_score_submit.id?(a(e.p3_input,e.p3_output,"p3"),l.updateScrollPosition(e.p3_output)):o.id===e.p4_score_submit.id&&(a(e.p4_input,e.p4_output,"p4"),l.updateScrollPosition(e.p4_output)),o.id===e.p1_calcTotal.id?i(e.p1_calcTotal,e.p1_showTotal,"li.p1"):o.id===e.p2_calcTotal.id?i(e.p2_calcTotal,e.p2_showTotal,"li.p2"):o.id===e.p3_calcTotal.id?i(e.p3_calcTotal,e.p3_showTotal,"li.p3"):o.id===e.p4_calcTotal.id&&i(e.p4_calcTotal,e.p4_showTotal,"li.p4")},e.howManyPlayersSubmit.addEventListener("click",function(a){a.preventDefault(),l.show(e.scoreCard),l.hide(e.howManyPlayersModal);var i=e.howManyPlayersForm.querySelectorAll("input[type=radio]:checked")[0].value;"2"===i&&(l.hide(e.p3_column),l.hide(e.p4_column)),i>="3"&&(l.show(e.p3_column),l.addClass(e.p3_column,"active-player"),l.show(e.p3_totalCell),l.hide(e.p4_column),l.enableButton(e.removePlayer)),"4"===i&&(l.addClass(e.p4_column,"active-player"),l.show(e.p4_column),l.show(e.p3_totalCell),l.show(e.p4_totalCell),console.log("p4_totalCell",e.p4_totalCell)),i>="2"&&i<="3"&&l.enableButton(e.addPlayer)}),e.addPlayer.addEventListener("click",function(a){a.preventDefault();var i=document.querySelectorAll(".active-player");2===i.length?(l.removeClass(e.p3_column,"hide"),l.enableButton(e.removePlayer),l.addClass(e.p3_column,"show"),l.addClass(e.p3_column,"active-player"),l.removeClass(e.p3_initials_form,"hide")):3===i.length&&(l.removeClass(e.p4_column,"hide"),l.enableButton(e.removePlayer),l.addClass(e.p4_column,"show"),l.addClass(e.p4_column,"active-player"),l.removeClass(e.p4_initials_form,"hide"),l.disableButton(e.addPlayer))}),e.removePlayer.addEventListener("click",function(a){a.preventDefault();var i=l.isActivePlayer(e.p3_column),t=l.isActivePlayer(e.p4_column);return i&&t?(l.enableButton(e.addPlayer),l.handleRemovePlayer(e.p4_column),void l.handleRemovePlayer(e.p4_initials_form)):i&&!t?(l.disableButton(e.removePlayer),l.handleRemovePlayer(e.p3_column),void l.handleRemovePlayer(e.p3_initials_form)):void 0}),l.updateInitals(e.p1_initials_form,e.p1_initials),l.saveInitials(e.p1_save_initials,e.p1_initials_form),l.updateInitals(e.p2_initials_form,e.p2_initials),l.saveInitials(e.p2_save_initials,e.p2_initials_form),l.updateInitals(e.p3_initials_form,e.p3_initials),l.saveInitials(e.p3_save_initials,e.p3_initials_form),l.updateInitals(e.p4_initials_form,e.p4_initials),l.saveInitials(e.p4_save_initials,e.p4_initials_form);
},{"./src/js/handlers":"NG9Y","./src/js/variables":"gwhS"}]},{},["EVxB"], null)
//# sourceMappingURL=/app.e17f2fac.js.map