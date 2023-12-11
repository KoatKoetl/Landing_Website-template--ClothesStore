/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/burger-menu.js":
/*!****************************!*\
  !*** ./src/burger-menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actionHamburgerMenu: () => (/* binding */ actionHamburgerMenu),
/* harmony export */   hideHamburgerMenuOnResize: () => (/* binding */ hideHamburgerMenuOnResize),
/* harmony export */   openHamburgerMenuLink: () => (/* binding */ openHamburgerMenuLink)
/* harmony export */ });
var hamburgerMenuButton = document.querySelector('.header__hamburger-menu');
var hamburgerMenuCheckbox = document.querySelector('.header__hamburger-menu-checkbox');
var hamburgerMenuLinks = Array.from(document.querySelectorAll('.header__hamburger-menu-sidebar .header__nav-link'));
var hamburgerMenuSidebar = document.querySelector('.header__hamburger-menu-sidebar');
function actionHamburgerMenu() {
  hamburgerMenuButton.addEventListener('click', function () {
    if (hamburgerMenuCheckbox.checked === false) {
      hamburgerMenuCheckbox.checked = true;
      hamburgerMenuSidebar.style.right = '0';
      document.body.style.overflow = 'hidden';
    } else {
      hamburgerMenuCheckbox.checked = false;
      hamburgerMenuSidebar.style.right = '100%';
      document.body.style.overflow = 'scroll';
    }
  });
}
function openHamburgerMenuLink() {
  hamburgerMenuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      hamburgerMenuCheckbox.checked = false;
      hamburgerMenuSidebar.style.right = '100%';
      document.body.style.overflow = 'scroll';
    });
  });
}
function hideHamburgerMenuOnResize() {
  window.addEventListener('resize', function () {
    var windowWidth = window.innerWidth;
    if (windowWidth > 768) {
      hamburgerMenuCheckbox.checked = false;
      hamburgerMenuSidebar.style.right = '100%';
      document.body.style.overflow = 'scroll';
    }
  });
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/CSS/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/CSS/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../node_modules/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/section-icon.svg */ "./src/assets/section-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/list-style-hyphen.svg */ "./src/assets/list-style-hyphen.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/open-more-in_circrle-arrow.svg */ "./src/assets/open-more-in_circrle-arrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/list-style-hyphen--smaller.svg */ "./src/assets/list-style-hyphen--smaller.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Presets */
html {
  scroll-behavior: smooth;
}

:root {
  --font-color-primary: #333;
  --font-color-white: #fff;
  --font-color-black: #000;
  --font-color-dark-blue: #13829b;
  --bg-color-light-orange: #fcc29a;
  --bg-color-very-light-orange: #fde9c9;
  --bg-color-cyan: #29d2e4;
  --bg-color-dark-cyan: #13829b;
  --font-family-primary: Lato;
  --font-family-secondary: Raleway;

  --bar-width: 18px;
  --bar-height: 2px;
  --hamburger-gap: 3px;
  --foreground: #333;
  --background: white;
  --hamburger-margin: 8px;
  --animation-timing: 200ms ease-in-out;
  --hamburger-height: calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2);
}

body {
  font-size: 1rem;
  color: var(--font-color-primary, #333);
  position: relative;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 1rem;
  margin: 0;
  padding: 0;
}

ul,
ol,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
  padding: 0;
}

/* Whidespread used classes */
.button {
  padding: 1.5rem 3.5rem;
  background-color: var(--bg-color-dark-cyan, #13829b);
  font-family: var(--font-family-primary, Lato);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  color: var(--font-color-white, #fff);
  line-height: normal;
  border: none;
  border-radius: 0.5rem;
}

.section__text-content {
  font-family: var(--font-family-primary, Lato);
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  color: var(--font-color-primary, #333);
  line-height: 1.75rem;
}

.section__title-icon {
  width: 3.2rem;
  height: 3.2rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.section__item-title {
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  gap: 1.9rem;
  align-items: center;
  margin-bottom: 1.25rem;
}

.section__content-item-link {
  text-decoration: none;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.section__content-item-link:hover {
  text-decoration: underline;
  text-decoration-color: var(--font-color-primary, #333);
  text-underline-offset: 0.3rem;
  text-decoration-thickness: 0.2rem;
}

.section__item-link-title {
  font-family: var(--font-family-secondary, Raleway);
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  color: var(--font-color-primary, #333);
  text-transform: uppercase;
  line-height: normal;
}

.section__item-link-title-icon {
  width: 1.125rem;
  height: 1.125rem;
}

/* website primary header */
.header__content {
  display: grid;
  position: relative;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem 5rem;
  border-bottom: 3px solid #000;
}

.header__content-logo {
  width: 60px;
  height: 60px;
}
.header__content-logo-image {
  width: 60px;
  height: 60px;
}

.header__nav {
  display: flex;
  justify-content: space-between;
}

.header__nav-links-list {
  display: flex;
  gap: 4rem;
  padding-top: 0.8rem;
}

.header__nav-link {
  font-family: var(--font-family-primary, Lato);
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  color: var(--font-color-black, #000);
  text-decoration: underline;
  text-decoration-color: #00000000;
  line-height: normal;
  padding: 0.425rem;
  border-radius: 0.5rem;
  transition: text-decoration-color 250ms;
  text-decoration-thickness: 0.625rem;
  text-underline-offset: 1.9rem;
}

.header__nav-link:hover {
  text-decoration-color: #000000ff;
}

.header__nav-link:active {
  transition: text-underline-offset 100ms ease;
  text-underline-offset: 0.5rem;
}

.header__nav--secondary {
  align-self: flex-end;
}

.header__nav-button {
  font-size: 1rem;
  padding: 0.75rem 2rem;
}

.button--click-animation {
  transition: transform 100ms;
}

.button--click-animation:hover {
  transform: scale(1.05);
}

.button--click-animation:active {
  transform: scale(1);
}

.header__hamburger-menu {
  --x-width: calc(var(--hamburger-height) * 1.41421356237);

  display: none;
  position: absolute;
  z-index: 11;
  flex-direction: column;
  gap: var(--hamburger-gap);
  right: 1rem;
  width: max-content;
  cursor: pointer;
}

.header__hamburger-menu::before,
.header__hamburger-menu::after,
.header__hamburger-menu input {
  content: '';
  width: var(--bar-width);
  height: var(--bar-height);
  background-color: var(--foreground);
  transform-origin: left center;
  transition: opacity var(--animation-timing), width var(--animation-timing), rotate var(--animation-timing),
    translate var(--animation-timing), background-color var(--animation-timing);
}

.header__hamburger-menu input {
  margin: 0;
  padding: 0;
  outline: none;
  pointer-events: none;
  appearance: none;
}

.header__hamburger-menu:has(input:checked)::before {
  width: var(--x-width);
  rotate: 45deg;
  translate: 0 calc(var(--bar-height) / -2);
}

.header__hamburger-menu:has(input:checked)::after {
  width: var(--x-width);
  rotate: -45deg;
  translate: 0 calc(var(--bar-height) / 2);
}

.header__hamburger-menu input:checked {
  width: 0;
  opacity: 0;
}

.header__hamburger-menu-sidebar {
  color: var(--background);
  text-align: center;
  visibility: hidden;
  position: absolute;
  z-index: 10;
  top: 0;
  right: 100%;
  width: 100dvw;
  min-height: 100dvh;
  background-color: #fde9c9f9;
  transition: right var(--animation-timing);
  translate: 0;
}

.header__hamburger-menu-sidebar > .header__nav-list-element > .header__nav-link {
  font-family: var(--font-family-secondary, Raleway);
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  color: var(--font-color-primary, #333);
  line-height: normal;
  text-underline-offset: 0.3rem;
  text-decoration-thickness: 0.2rem;
}

/* main block (first section) */
.donate-section {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1.2fr;
  justify-content: center;
  align-items: center;
  margin-bottom: 15rem;
  padding-left: 5rem;
}

.donate-section__text-content {
  position: relative;
  z-index: 1;
}

.donate-section__tag-list {
  list-style-position: inside;
  list-style-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.donate-section__tag-list-element {
  font-family: Lato;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  color: var(--bg-color-dark-cyan, #13829b);
  line-height: normal;
}

.donate-section__title {
  font-family: var(--font-family-secondary, Raleway);
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  color: var(--font-color-primary, #333);
  line-height: normal;
  position: relative;
  margin-bottom: 2.75rem;
  max-width: 90%;
}

.donate-section__title--highlighted {
  font-family: var(--font-family-secondary, Raleway);
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  color: var(--bg-color-dark-cyan, #13829b);
  text-decoration: underline;
  text-decoration-color: var(--bg-color-very-light-orange, #fde9c9);
  line-height: normal;
  text-underline-offset: 1rem;
  text-decoration-thickness: 0.625rem;
}

.donate-section__title-block-icon {
  position: absolute;
  right: 3rem;
  bottom: 0;
}

.donate-section__desctiption {
  font-family: var(--font-family-primary, Lato);
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  color: var(--font-color-primary, #333);
  line-height: 1.8125rem; /* 161.111% */
  margin-bottom: 2.5rem;
  max-width: 70%;
}

.donate-section__support-block {
  display: flex;
  gap: 4rem;
  align-items: center;
}

.donate-section__support-block--extra {
  text-decoration: none;
  display: flex;
  gap: 1rem;
  align-items: center;
}

.donate-section__support-block-icon {
  display: block;
  width: 3rem;
  height: 3rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.donate-section__support-block-title {
  font-family: var(--font-family-primary, Lato);
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  color: var(--font-color-primary, #333);
  line-height: 1.8125rem;
}

.donate-section__image-content {
  display: grid;
  position: relative;
  justify-content: right;
}

.donate-section__image-content--kids-image {
  position: absolute;
  z-index: 3;
  top: 8rem;
  right: 65%;
  border: 5px solid white;
  border-radius: 15rem;
  filter: grayscale(100%);
}

.donate-section__image-content-block--clothes-image {
  position: relative;
  z-index: 1;
}

.donate-section__image-content-square--blue-transparent {
  position: absolute;
  bottom: 15%;
  left: 15%;
  width: 30%;
  height: 27%;
  background-color: var(--bg-color-cyan, #29d2e4);
  mix-blend-mode: multiply;
}

.donate-section__image-content-rectangle {
  position: absolute;
  z-index: 0;
  right: 0;
  bottom: -5rem;
  width: 100%;
  height: 19rem;
  background-color: var(--bg-color-light-orange, #fcc29a);
}

/* additional-section (second section) */
.additional-info-section__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, 400px);
  justify-content: center;
  align-items: center;
  margin-bottom: 14rem;
}

.additional-info-section__content-item {
  display: grid;
  padding: 1rem;
  border-right: 0.3rem solid #fcc29a;
  justify-items: center;
}

.additional-info-section__content-item:last-child {
  border: none;
}

.additional-info-section__content-item-icon {
  margin-bottom: 1.7rem;
  width: 3.0625rem;
  height: 2.875rem;
}

.additional-info-section__content-item-title {
  font-family: var(--font-family-secondary, Raleway);
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  color: var(--font-color-primary, #333);
  text-align: center;
  line-height: normal;
  margin-bottom: 1.25rem;
}

/* product-section (third section)*/
.product-section__content {
  display: grid;
  grid-gap: 15rem;
  margin-bottom: 11.25rem;
  padding: 0 5rem;
  justify-items: center;
}

.product-section__content-item {
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  align-items: center;
  justify-items: center;
}

.product-section__content-item-desctiption {
  max-width: 80%;
}

.product-section__content-item-image {
  box-shadow: -8rem -3rem var(--bg-color-light-orange, #fcc29a);
}

.product-section__content-item--2 {
  justify-items: flex-start;
}

.product-section__content-item--2 > .product-section__content-item-text-content {
  order: 1;
}

.product-section__content-item--2 .product-section__content-item-image {
  box-shadow: 8rem -3rem var(--bg-color-cyan, #29d2e4);
}

/* blog-section (fourth section) */

.blog-section__content {
  position: relative;
  padding-bottom: 3.25rem;
  margin-bottom: 22.5rem;
}

.blog-section__background-rectangle {
  position: absolute;
  height: 100%;
  width: 70%;
  background-color: var(--bg-color-very-light-orange, #fde9c9);
  z-index: 0;
}

.blog-section__items {
  position: relative;
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(384px, 1fr));
  padding: 7.25rem 12.5rem 4.5rem;
  z-index: 10;
}

.blog-section__item-block {
  display: grid;
  justify-items: center;
  grid-gap: 2.8rem;
}

.blog-section__item-title {
  font-family: var(--font-family-secondary, Raleway);
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  color: var(--bg-color-dark-cyan, #13829b);
  line-height: normal;
  margin-bottom: 1.25rem;
}

.blog-section__link-block {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 10;
}

.blog-section__button {
  color: var(--bg-color-dark-cyan, #13829b);
  border: 1px solid var(--bg-color-dark-cyan, #13829b);
  background-color: #fff;
}

.blog-section__title-block {
  display: none;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.3rem;
}

.blog-section__title {
  color: var(--font-color-primary, #333);
  font-family: var(--font-family-secondary, Raleway);
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.blog-section__image {
  position: absolute;
  right: 20%;
  top: 100%;
  filter: grayscale(100%);
}

/* get-in-touch section (fifth section)*/
.get-in-touch-section__content {
  padding-bottom: 7rem;
}

.get-in-touch-section__help-us-block {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
}

.get-in-touch-section__text-block {
  display: grid;
  padding: 5rem;
}

.get-in-touch-section__title {
  text-align: center;
}

.get-in-touch-section__text {
  margin-bottom: 2.5rem;
}

.get-in-touch-section__button {
  justify-self: left;
}

.get-in-touch-section__image-block {
  display: grid;
  justify-content: right;
  align-content: flex-end;
}

@media screen and (max-width: 1700px) {
  .blog-section__item-block:last-child {
    grid-column: 1/3;
  }

  .blog-section__background-rectangle {
    width: 100%;
  }
}

@media screen and (max-width: 1600px) {
  /* Additional-section media querry*/
  .additional-info-section__content-item:nth-child(3) {
    border-right: none;
  }
  .additional-info-section__content-item:last-child {
    grid-column: 2/3;
    grid-row: 2/3;
  }
}

@media screen and (max-width: 1400px) {
  /* Product section (third section) media query */
  .product-section__content {
    grid-gap: 5rem;
    align-items: center;
    margin-bottom: 3rem;
  }
  .product-section__content-item {
    max-width: 70vw;
    justify-items: flex-start;
  }
  .product-section__content-item-image-block {
    justify-self: center;
  }
  .product-section__content-item--2 > .product-section__content-item-image-block {
    justify-self: center;
  }
  .product-section__content-item-desctiption {
    max-width: 100%;
  }
  .product-section__content-item > .product-section__content-item-text-content {
    order: 1;
  }
}

@media screen and (max-width: 1200px) {
  /* Donate Section(Main block) media query */
  .donate-section {
    grid-auto-flow: row;
    grid-gap: 1.5rem;
    grid-template-columns: auto;
    margin-bottom: 5rem;
  }

  .donate-section__title-block-icon {
    right: 0;
  }

  .donate-section__image-content--kids-image {
    top: 30%;
    left: 0;
  }
  .donate-section__image-content-rectangle {
    bottom: 30%;
    width: 100%;
    height: 20%;
  }

  /* Additional-section(Second section) media query */
  .additional-info-section__content {
    grid-gap: 1rem;
    margin-bottom: 7rem;
  }
  .additional-info-section__content-item:nth-child(2) {
    border-right: none;
  }
  .additional-info-section__content-item:nth-child(3) {
    border-right: 0.3rem solid #fcc29a;
  }
  .additional-info-section__content-item:last-child {
    grid-column: auto;
    grid-row: auto;
  }

  /* Product section (third section) media query */
  .product-section__content-item--2 > .product-section__content-item-image-block {
    justify-self: flex-start;
  }

  /* Blog section(fourth section) media query */
  .blog-section__item-block:last-child {
    grid-column: auto;
  }

  .get-in-touch-section__text-block {
    padding: 12rem 5rem 3rem;
  }

  .get-in-touch-section__text {
    text-align: center;
  }

  .get-in-touch-section__title {
    justify-self: center;
  }

  .get-in-touch-section__button {
    justify-self: center;
  }
}

@media screen and (max-width: 850px) {
  /* Primary header media query */
  .header__content {
    padding: 0.5rem 1rem;
  }
}

@media (width > 768px) {
  .header__hamburger-menu-sidebar {
    right: 100%;
  }
}

@media screen and (max-width: 768px) {
  /* Primary header media query */
  .header__content-logo {
    width: 30px;
    height: 30px;
  }
  .header__content-logo-image {
    width: 30px;
    height: 30px;
  }

  .header__nav--primary {
    display: none;
  }

  .header__nav-button {
    display: none;
  }

  .header__hamburger-menu {
    display: flex;
  }

  .header__hamburger-menu-sidebar {
    display: flex;
    visibility: visible;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
  }

  /* Donate Section(Main block) media query */
  .donate-section__title {
    margin-bottom: 0;
  }
  .donate-section__title-block-icon {
    position: relative;
    margin-left: 90%;
  }
  .donate-section {
    padding-left: 1rem;
  }
  .donate-section__support-block {
    gap: 3rem;
  }

  /* Additional-section(Second section) media query */
  .additional-info-section__content {
    justify-items: center;
  }
  .additional-info-section__content-item {
    border-right: none;
    border-bottom: 0.3rem solid #fcc29a;
    border-radius: 2rem;
  }
  .additional-info-section__content-item:nth-child(3) {
    border-right: none;
  }
  .additional-info-section__content-item:last-child {
    border-bottom: 0.3rem solid #fcc29a;
    border-radius: 2rem;
  }

  /* Product section (third section) media query */
  .product-section__content {
    padding: 0 1rem;
  }
  .product-section__content-item {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .product-section__content-item-title-icon {
    display: none;
  }
  .product-section__content-item-image {
    box-shadow: -4rem -2rem var(--bg-color-light-orange, #fcc29a);
  }
  .product-section__content-item--2 .product-section__content-item-image {
    box-shadow: 4rem -2rem var(--bg-color-cyan, #29d2e4);
  }
  .product-section__content-item-desctiption {
    font-size: 0.875rem;
    line-height: 1.3125rem;
  }

  .blog-section__content {
    padding: 2rem 0 3.3rem;
    background-color: var(--bg-color-very-light-orange, #fde9c9);
  }

  .blog-section__background-rectangle {
    display: none;
  }

  .blog-section__title-block {
    display: flex;
  }

  .blog-section__items {
    padding: 0 0 2.3rem;
  }

  .blog-section__item-block {
    grid-auto-flow: column;
    margin: 0 5%;
    align-items: center;
    grid-gap: 1rem;
  }

  .get-in-touch-section__help-us-block {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }

  .get-in-touch-section__text-block {
    padding-top: 1rem;
  }

  .get-in-touch-section__text--visibility-hidden {
    display: none;
  }
}

@media screen and (max-width: 425px) {
  .donate-section__tag-list-element {
    font-size: 0.75rem;
  }
  .donate-section__tag-list-element {
    list-style-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  }
  .donate-section__title {
    font-size: 1.5rem;
  }
  .donate-section__title--highlighted {
    font-size: 1.5rem;
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 0.5rem;
  }
  .donate-section__title-block-icon {
    width: 1.6rem;
    height: 1.25rem;
  }
  .donate-section__desctiption {
    font-size: 0.75rem;
    line-height: 1.125rem;
  }
  .donate-section__button {
    font-size: 0.875rem;
    padding: 0.75rem 2rem;
  }
  .donate-section__support-block {
    gap: 1rem;
  }
  .donate-section__support-block-icon {
    width: 2.5rem;
    height: 2.5rem;
  }
  .donate-section__support-block-title {
    font-size: 0.75rem;
  }

  .product-section__content-item {
    max-width: 100%;
  }
  .product-section__content-item-title {
    font-size: 1.25rem;
  }

  .blog-section__items {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
  }

  .blog-section__content {
    margin-bottom: 12.5rem;
  }

  .blog-section__content-item-link-title {
    font-size: 0.75rem;
  }

  .blog-section__item-title {
    font-size: 1.5rem;
  }

  .blog-section__button {
    padding: 0.75rem 2rem;
    font-size: 1rem;
  }

  .get-in-touch-section__content {
    padding-bottom: 3rem;
  }

  .get-in-touch-section__help-us-block {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .get-in-touch-section__title {
    font-size: 2rem;
  }

  .get-in-touch-section__text {
    font-size: 0.75rem;
    line-height: 1.125rem;
  }

  .get-in-touch-section__button {
    padding: 0.75rem 2rem;
    font-size: 1rem;
  }
}

@media screen and (min-width: 2200px) {
  .header__content {
    padding: 1rem 20vw;
  }

  .donate-section {
    padding: 0 20vw;
  }

  .product-section__content {
    padding: 0 20vw;
  }

  .blog-section__items {
    padding: 7.25rem 20vw 4.5rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/CSS/style.css"],"names":[],"mappings":"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E,oBAAoB;EACtB;;EAEA;IACE,oBAAoB;EACtB;AACF;;AAEA;EACE,+BAA+B;EAC/B;IACE,oBAAoB;EACtB;AACF;;AAEA;EACE;IACE,WAAW;EACb;AACF;;AAEA;EACE,+BAA+B;EAC/B;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,SAAS;IACT,uBAAuB;EACzB;;EAEA,2CAA2C;EAC3C;IACE,gBAAgB;EAClB;EACA;IACE,kBAAkB;IAClB,gBAAgB;EAClB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,SAAS;EACX;;EAEA,mDAAmD;EACnD;IACE,qBAAqB;EACvB;EACA;IACE,kBAAkB;IAClB,mCAAmC;IACnC,mBAAmB;EACrB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,mCAAmC;IACnC,mBAAmB;EACrB;;EAEA,gDAAgD;EAChD;IACE,eAAe;EACjB;EACA;IACE,2DAA2D;EAC7D;;EAEA;IACE,aAAa;EACf;EACA;IACE,6DAA6D;EAC/D;EACA;IACE,oDAAoD;EACtD;EACA;IACE,mBAAmB;IACnB,sBAAsB;EACxB;;EAEA;IACE,sBAAsB;IACtB,4DAA4D;EAC9D;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,sBAAsB;IACtB,YAAY;IACZ,mBAAmB;IACnB,cAAc;EAChB;;EAEA;IACE,2DAA2D;EAC7D;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;EACA;IACE,yDAA+D;EACjE;EACA;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;IACjB,iCAAiC;IACjC,6BAA6B;EAC/B;EACA;IACE,aAAa;IACb,eAAe;EACjB;EACA;IACE,kBAAkB;IAClB,qBAAqB;EACvB;EACA;IACE,mBAAmB;IACnB,qBAAqB;EACvB;EACA;IACE,SAAS;EACX;EACA;IACE,aAAa;IACb,cAAc;EAChB;EACA;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;EACjB;EACA;IACE,kBAAkB;EACpB;;EAEA;IACE,2DAA2D;IAC3D,cAAc;EAChB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,qBAAqB;IACrB,eAAe;EACjB;;EAEA;IACE,oBAAoB;EACtB;;EAEA;IACE,2DAA2D;EAC7D;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,qBAAqB;EACvB;;EAEA;IACE,qBAAqB;IACrB,eAAe;EACjB;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,4BAA4B;EAC9B;AACF","sourcesContent":["@import '~normalize.css/normalize.css';\n@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');\n\n/* Presets */\nhtml {\n  scroll-behavior: smooth;\n}\n\n:root {\n  --font-color-primary: #333;\n  --font-color-white: #fff;\n  --font-color-black: #000;\n  --font-color-dark-blue: #13829b;\n  --bg-color-light-orange: #fcc29a;\n  --bg-color-very-light-orange: #fde9c9;\n  --bg-color-cyan: #29d2e4;\n  --bg-color-dark-cyan: #13829b;\n  --font-family-primary: Lato;\n  --font-family-secondary: Raleway;\n\n  --bar-width: 18px;\n  --bar-height: 2px;\n  --hamburger-gap: 3px;\n  --foreground: #333;\n  --background: white;\n  --hamburger-margin: 8px;\n  --animation-timing: 200ms ease-in-out;\n  --hamburger-height: calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2);\n}\n\nbody {\n  font-size: 1rem;\n  color: var(--font-color-primary, #333);\n  position: relative;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 1rem;\n  margin: 0;\n  padding: 0;\n}\n\nul,\nol,\nli {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\n/* Whidespread used classes */\n.button {\n  padding: 1.5rem 3.5rem;\n  background-color: var(--bg-color-dark-cyan, #13829b);\n  font-family: var(--font-family-primary, Lato);\n  font-size: 1.25rem;\n  font-style: normal;\n  font-weight: 600;\n  color: var(--font-color-white, #fff);\n  line-height: normal;\n  border: none;\n  border-radius: 0.5rem;\n}\n\n.section__text-content {\n  font-family: var(--font-family-primary, Lato);\n  font-size: 1.125rem;\n  font-style: normal;\n  font-weight: 400;\n  color: var(--font-color-primary, #333);\n  line-height: 1.75rem;\n}\n\n.section__title-icon {\n  width: 3.2rem;\n  height: 3.2rem;\n  background-image: url(../assets/section-icon.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.section__item-title {\n  font-size: 3rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  display: flex;\n  gap: 1.9rem;\n  align-items: center;\n  margin-bottom: 1.25rem;\n}\n\n.section__content-item-link {\n  text-decoration: none;\n  display: flex;\n  gap: 0.5rem;\n  justify-content: center;\n}\n\n.section__content-item-link:hover {\n  text-decoration: underline;\n  text-decoration-color: var(--font-color-primary, #333);\n  text-underline-offset: 0.3rem;\n  text-decoration-thickness: 0.2rem;\n}\n\n.section__item-link-title {\n  font-family: var(--font-family-secondary, Raleway);\n  font-size: 1rem;\n  font-style: normal;\n  font-weight: 600;\n  color: var(--font-color-primary, #333);\n  text-transform: uppercase;\n  line-height: normal;\n}\n\n.section__item-link-title-icon {\n  width: 1.125rem;\n  height: 1.125rem;\n}\n\n/* website primary header */\n.header__content {\n  display: grid;\n  position: relative;\n  grid-auto-flow: column;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding: 1rem 5rem;\n  border-bottom: 3px solid #000;\n}\n\n.header__content-logo {\n  width: 60px;\n  height: 60px;\n}\n.header__content-logo-image {\n  width: 60px;\n  height: 60px;\n}\n\n.header__nav {\n  display: flex;\n  justify-content: space-between;\n}\n\n.header__nav-links-list {\n  display: flex;\n  gap: 4rem;\n  padding-top: 0.8rem;\n}\n\n.header__nav-link {\n  font-family: var(--font-family-primary, Lato);\n  font-size: 1.125rem;\n  font-style: normal;\n  font-weight: 400;\n  color: var(--font-color-black, #000);\n  text-decoration: underline;\n  text-decoration-color: #00000000;\n  line-height: normal;\n  padding: 0.425rem;\n  border-radius: 0.5rem;\n  transition: text-decoration-color 250ms;\n  text-decoration-thickness: 0.625rem;\n  text-underline-offset: 1.9rem;\n}\n\n.header__nav-link:hover {\n  text-decoration-color: #000000ff;\n}\n\n.header__nav-link:active {\n  transition: text-underline-offset 100ms ease;\n  text-underline-offset: 0.5rem;\n}\n\n.header__nav--secondary {\n  align-self: flex-end;\n}\n\n.header__nav-button {\n  font-size: 1rem;\n  padding: 0.75rem 2rem;\n}\n\n.button--click-animation {\n  transition: transform 100ms;\n}\n\n.button--click-animation:hover {\n  transform: scale(1.05);\n}\n\n.button--click-animation:active {\n  transform: scale(1);\n}\n\n.header__hamburger-menu {\n  --x-width: calc(var(--hamburger-height) * 1.41421356237);\n\n  display: none;\n  position: absolute;\n  z-index: 11;\n  flex-direction: column;\n  gap: var(--hamburger-gap);\n  right: 1rem;\n  width: max-content;\n  cursor: pointer;\n}\n\n.header__hamburger-menu::before,\n.header__hamburger-menu::after,\n.header__hamburger-menu input {\n  content: '';\n  width: var(--bar-width);\n  height: var(--bar-height);\n  background-color: var(--foreground);\n  transform-origin: left center;\n  transition: opacity var(--animation-timing), width var(--animation-timing), rotate var(--animation-timing),\n    translate var(--animation-timing), background-color var(--animation-timing);\n}\n\n.header__hamburger-menu input {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  pointer-events: none;\n  appearance: none;\n}\n\n.header__hamburger-menu:has(input:checked)::before {\n  width: var(--x-width);\n  rotate: 45deg;\n  translate: 0 calc(var(--bar-height) / -2);\n}\n\n.header__hamburger-menu:has(input:checked)::after {\n  width: var(--x-width);\n  rotate: -45deg;\n  translate: 0 calc(var(--bar-height) / 2);\n}\n\n.header__hamburger-menu input:checked {\n  width: 0;\n  opacity: 0;\n}\n\n.header__hamburger-menu-sidebar {\n  color: var(--background);\n  text-align: center;\n  visibility: hidden;\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  right: 100%;\n  width: 100dvw;\n  min-height: 100dvh;\n  background-color: #fde9c9f9;\n  transition: right var(--animation-timing);\n  translate: 0;\n}\n\n.header__hamburger-menu-sidebar > .header__nav-list-element > .header__nav-link {\n  font-family: var(--font-family-secondary, Raleway);\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 600;\n  color: var(--font-color-primary, #333);\n  line-height: normal;\n  text-underline-offset: 0.3rem;\n  text-decoration-thickness: 0.2rem;\n}\n\n/* main block (first section) */\n.donate-section {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: 1fr 1.2fr;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 15rem;\n  padding-left: 5rem;\n}\n\n.donate-section__text-content {\n  position: relative;\n  z-index: 1;\n}\n\n.donate-section__tag-list {\n  list-style-position: inside;\n  list-style-image: url(../assets/list-style-hyphen.svg);\n}\n\n.donate-section__tag-list-element {\n  font-family: Lato;\n  font-size: 1.125rem;\n  font-style: normal;\n  font-weight: 400;\n  color: var(--bg-color-dark-cyan, #13829b);\n  line-height: normal;\n}\n\n.donate-section__title {\n  font-family: var(--font-family-secondary, Raleway);\n  font-size: 4rem;\n  font-style: normal;\n  font-weight: 700;\n  color: var(--font-color-primary, #333);\n  line-height: normal;\n  position: relative;\n  margin-bottom: 2.75rem;\n  max-width: 90%;\n}\n\n.donate-section__title--highlighted {\n  font-family: var(--font-family-secondary, Raleway);\n  font-size: 4rem;\n  font-style: normal;\n  font-weight: 700;\n  color: var(--bg-color-dark-cyan, #13829b);\n  text-decoration: underline;\n  text-decoration-color: var(--bg-color-very-light-orange, #fde9c9);\n  line-height: normal;\n  text-underline-offset: 1rem;\n  text-decoration-thickness: 0.625rem;\n}\n\n.donate-section__title-block-icon {\n  position: absolute;\n  right: 3rem;\n  bottom: 0;\n}\n\n.donate-section__desctiption {\n  font-family: var(--font-family-primary, Lato);\n  font-size: 1.125rem;\n  font-style: normal;\n  font-weight: 400;\n  color: var(--font-color-primary, #333);\n  line-height: 1.8125rem; /* 161.111% */\n  margin-bottom: 2.5rem;\n  max-width: 70%;\n}\n\n.donate-section__support-block {\n  display: flex;\n  gap: 4rem;\n  align-items: center;\n}\n\n.donate-section__support-block--extra {\n  text-decoration: none;\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n\n.donate-section__support-block-icon {\n  display: block;\n  width: 3rem;\n  height: 3rem;\n  background-image: url(../assets/open-more-in_circrle-arrow.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.donate-section__support-block-title {\n  font-family: var(--font-family-primary, Lato);\n  font-size: 1.125rem;\n  font-style: normal;\n  font-weight: 600;\n  color: var(--font-color-primary, #333);\n  line-height: 1.8125rem;\n}\n\n.donate-section__image-content {\n  display: grid;\n  position: relative;\n  justify-content: right;\n}\n\n.donate-section__image-content--kids-image {\n  position: absolute;\n  z-index: 3;\n  top: 8rem;\n  right: 65%;\n  border: 5px solid white;\n  border-radius: 15rem;\n  filter: grayscale(100%);\n}\n\n.donate-section__image-content-block--clothes-image {\n  position: relative;\n  z-index: 1;\n}\n\n.donate-section__image-content-square--blue-transparent {\n  position: absolute;\n  bottom: 15%;\n  left: 15%;\n  width: 30%;\n  height: 27%;\n  background-color: var(--bg-color-cyan, #29d2e4);\n  mix-blend-mode: multiply;\n}\n\n.donate-section__image-content-rectangle {\n  position: absolute;\n  z-index: 0;\n  right: 0;\n  bottom: -5rem;\n  width: 100%;\n  height: 19rem;\n  background-color: var(--bg-color-light-orange, #fcc29a);\n}\n\n/* additional-section (second section) */\n.additional-info-section__content {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 400px);\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 14rem;\n}\n\n.additional-info-section__content-item {\n  display: grid;\n  padding: 1rem;\n  border-right: 0.3rem solid #fcc29a;\n  justify-items: center;\n}\n\n.additional-info-section__content-item:last-child {\n  border: none;\n}\n\n.additional-info-section__content-item-icon {\n  margin-bottom: 1.7rem;\n  width: 3.0625rem;\n  height: 2.875rem;\n}\n\n.additional-info-section__content-item-title {\n  font-family: var(--font-family-secondary, Raleway);\n  font-size: 1.5rem;\n  font-style: normal;\n  font-weight: 600;\n  color: var(--font-color-primary, #333);\n  text-align: center;\n  line-height: normal;\n  margin-bottom: 1.25rem;\n}\n\n/* product-section (third section)*/\n.product-section__content {\n  display: grid;\n  grid-gap: 15rem;\n  margin-bottom: 11.25rem;\n  padding: 0 5rem;\n  justify-items: center;\n}\n\n.product-section__content-item {\n  display: grid;\n  grid-gap: 3rem;\n  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));\n  align-items: center;\n  justify-items: center;\n}\n\n.product-section__content-item-desctiption {\n  max-width: 80%;\n}\n\n.product-section__content-item-image {\n  box-shadow: -8rem -3rem var(--bg-color-light-orange, #fcc29a);\n}\n\n.product-section__content-item--2 {\n  justify-items: flex-start;\n}\n\n.product-section__content-item--2 > .product-section__content-item-text-content {\n  order: 1;\n}\n\n.product-section__content-item--2 .product-section__content-item-image {\n  box-shadow: 8rem -3rem var(--bg-color-cyan, #29d2e4);\n}\n\n/* blog-section (fourth section) */\n\n.blog-section__content {\n  position: relative;\n  padding-bottom: 3.25rem;\n  margin-bottom: 22.5rem;\n}\n\n.blog-section__background-rectangle {\n  position: absolute;\n  height: 100%;\n  width: 70%;\n  background-color: var(--bg-color-very-light-orange, #fde9c9);\n  z-index: 0;\n}\n\n.blog-section__items {\n  position: relative;\n  display: grid;\n  grid-gap: 5rem;\n  grid-template-columns: repeat(auto-fit, minmax(384px, 1fr));\n  padding: 7.25rem 12.5rem 4.5rem;\n  z-index: 10;\n}\n\n.blog-section__item-block {\n  display: grid;\n  justify-items: center;\n  grid-gap: 2.8rem;\n}\n\n.blog-section__item-title {\n  font-family: var(--font-family-secondary, Raleway);\n  font-size: 2rem;\n  font-style: normal;\n  font-weight: 600;\n  color: var(--bg-color-dark-cyan, #13829b);\n  line-height: normal;\n  margin-bottom: 1.25rem;\n}\n\n.blog-section__link-block {\n  display: flex;\n  justify-content: center;\n  position: relative;\n  z-index: 10;\n}\n\n.blog-section__button {\n  color: var(--bg-color-dark-cyan, #13829b);\n  border: 1px solid var(--bg-color-dark-cyan, #13829b);\n  background-color: #fff;\n}\n\n.blog-section__title-block {\n  display: none;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2.3rem;\n}\n\n.blog-section__title {\n  color: var(--font-color-primary, #333);\n  font-family: var(--font-family-secondary, Raleway);\n  font-size: 2rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n}\n\n.blog-section__image {\n  position: absolute;\n  right: 20%;\n  top: 100%;\n  filter: grayscale(100%);\n}\n\n/* get-in-touch section (fifth section)*/\n.get-in-touch-section__content {\n  padding-bottom: 7rem;\n}\n\n.get-in-touch-section__help-us-block {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));\n}\n\n.get-in-touch-section__text-block {\n  display: grid;\n  padding: 5rem;\n}\n\n.get-in-touch-section__title {\n  text-align: center;\n}\n\n.get-in-touch-section__text {\n  margin-bottom: 2.5rem;\n}\n\n.get-in-touch-section__button {\n  justify-self: left;\n}\n\n.get-in-touch-section__image-block {\n  display: grid;\n  justify-content: right;\n  align-content: flex-end;\n}\n\n@media screen and (max-width: 1700px) {\n  .blog-section__item-block:last-child {\n    grid-column: 1/3;\n  }\n\n  .blog-section__background-rectangle {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 1600px) {\n  /* Additional-section media querry*/\n  .additional-info-section__content-item:nth-child(3) {\n    border-right: none;\n  }\n  .additional-info-section__content-item:last-child {\n    grid-column: 2/3;\n    grid-row: 2/3;\n  }\n}\n\n@media screen and (max-width: 1400px) {\n  /* Product section (third section) media query */\n  .product-section__content {\n    grid-gap: 5rem;\n    align-items: center;\n    margin-bottom: 3rem;\n  }\n  .product-section__content-item {\n    max-width: 70vw;\n    justify-items: flex-start;\n  }\n  .product-section__content-item-image-block {\n    justify-self: center;\n  }\n  .product-section__content-item--2 > .product-section__content-item-image-block {\n    justify-self: center;\n  }\n  .product-section__content-item-desctiption {\n    max-width: 100%;\n  }\n  .product-section__content-item > .product-section__content-item-text-content {\n    order: 1;\n  }\n}\n\n@media screen and (max-width: 1200px) {\n  /* Donate Section(Main block) media query */\n  .donate-section {\n    grid-auto-flow: row;\n    grid-gap: 1.5rem;\n    grid-template-columns: auto;\n    margin-bottom: 5rem;\n  }\n\n  .donate-section__title-block-icon {\n    right: 0;\n  }\n\n  .donate-section__image-content--kids-image {\n    top: 30%;\n    left: 0;\n  }\n  .donate-section__image-content-rectangle {\n    bottom: 30%;\n    width: 100%;\n    height: 20%;\n  }\n\n  /* Additional-section(Second section) media query */\n  .additional-info-section__content {\n    grid-gap: 1rem;\n    margin-bottom: 7rem;\n  }\n  .additional-info-section__content-item:nth-child(2) {\n    border-right: none;\n  }\n  .additional-info-section__content-item:nth-child(3) {\n    border-right: 0.3rem solid #fcc29a;\n  }\n  .additional-info-section__content-item:last-child {\n    grid-column: auto;\n    grid-row: auto;\n  }\n\n  /* Product section (third section) media query */\n  .product-section__content-item--2 > .product-section__content-item-image-block {\n    justify-self: flex-start;\n  }\n\n  /* Blog section(fourth section) media query */\n  .blog-section__item-block:last-child {\n    grid-column: auto;\n  }\n\n  .get-in-touch-section__text-block {\n    padding: 12rem 5rem 3rem;\n  }\n\n  .get-in-touch-section__text {\n    text-align: center;\n  }\n\n  .get-in-touch-section__title {\n    justify-self: center;\n  }\n\n  .get-in-touch-section__button {\n    justify-self: center;\n  }\n}\n\n@media screen and (max-width: 850px) {\n  /* Primary header media query */\n  .header__content {\n    padding: 0.5rem 1rem;\n  }\n}\n\n@media (width > 768px) {\n  .header__hamburger-menu-sidebar {\n    right: 100%;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  /* Primary header media query */\n  .header__content-logo {\n    width: 30px;\n    height: 30px;\n  }\n  .header__content-logo-image {\n    width: 30px;\n    height: 30px;\n  }\n\n  .header__nav--primary {\n    display: none;\n  }\n\n  .header__nav-button {\n    display: none;\n  }\n\n  .header__hamburger-menu {\n    display: flex;\n  }\n\n  .header__hamburger-menu-sidebar {\n    display: flex;\n    visibility: visible;\n    flex-direction: column;\n    gap: 2rem;\n    justify-content: center;\n  }\n\n  /* Donate Section(Main block) media query */\n  .donate-section__title {\n    margin-bottom: 0;\n  }\n  .donate-section__title-block-icon {\n    position: relative;\n    margin-left: 90%;\n  }\n  .donate-section {\n    padding-left: 1rem;\n  }\n  .donate-section__support-block {\n    gap: 3rem;\n  }\n\n  /* Additional-section(Second section) media query */\n  .additional-info-section__content {\n    justify-items: center;\n  }\n  .additional-info-section__content-item {\n    border-right: none;\n    border-bottom: 0.3rem solid #fcc29a;\n    border-radius: 2rem;\n  }\n  .additional-info-section__content-item:nth-child(3) {\n    border-right: none;\n  }\n  .additional-info-section__content-item:last-child {\n    border-bottom: 0.3rem solid #fcc29a;\n    border-radius: 2rem;\n  }\n\n  /* Product section (third section) media query */\n  .product-section__content {\n    padding: 0 1rem;\n  }\n  .product-section__content-item {\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  }\n\n  .product-section__content-item-title-icon {\n    display: none;\n  }\n  .product-section__content-item-image {\n    box-shadow: -4rem -2rem var(--bg-color-light-orange, #fcc29a);\n  }\n  .product-section__content-item--2 .product-section__content-item-image {\n    box-shadow: 4rem -2rem var(--bg-color-cyan, #29d2e4);\n  }\n  .product-section__content-item-desctiption {\n    font-size: 0.875rem;\n    line-height: 1.3125rem;\n  }\n\n  .blog-section__content {\n    padding: 2rem 0 3.3rem;\n    background-color: var(--bg-color-very-light-orange, #fde9c9);\n  }\n\n  .blog-section__background-rectangle {\n    display: none;\n  }\n\n  .blog-section__title-block {\n    display: flex;\n  }\n\n  .blog-section__items {\n    padding: 0 0 2.3rem;\n  }\n\n  .blog-section__item-block {\n    grid-auto-flow: column;\n    margin: 0 5%;\n    align-items: center;\n    grid-gap: 1rem;\n  }\n\n  .get-in-touch-section__help-us-block {\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  }\n\n  .get-in-touch-section__text-block {\n    padding-top: 1rem;\n  }\n\n  .get-in-touch-section__text--visibility-hidden {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 425px) {\n  .donate-section__tag-list-element {\n    font-size: 0.75rem;\n  }\n  .donate-section__tag-list-element {\n    list-style-image: url(../assets/list-style-hyphen--smaller.svg);\n  }\n  .donate-section__title {\n    font-size: 1.5rem;\n  }\n  .donate-section__title--highlighted {\n    font-size: 1.5rem;\n    text-decoration-thickness: 0.2rem;\n    text-underline-offset: 0.5rem;\n  }\n  .donate-section__title-block-icon {\n    width: 1.6rem;\n    height: 1.25rem;\n  }\n  .donate-section__desctiption {\n    font-size: 0.75rem;\n    line-height: 1.125rem;\n  }\n  .donate-section__button {\n    font-size: 0.875rem;\n    padding: 0.75rem 2rem;\n  }\n  .donate-section__support-block {\n    gap: 1rem;\n  }\n  .donate-section__support-block-icon {\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n  .donate-section__support-block-title {\n    font-size: 0.75rem;\n  }\n\n  .product-section__content-item {\n    max-width: 100%;\n  }\n  .product-section__content-item-title {\n    font-size: 1.25rem;\n  }\n\n  .blog-section__items {\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    grid-gap: 2rem;\n  }\n\n  .blog-section__content {\n    margin-bottom: 12.5rem;\n  }\n\n  .blog-section__content-item-link-title {\n    font-size: 0.75rem;\n  }\n\n  .blog-section__item-title {\n    font-size: 1.5rem;\n  }\n\n  .blog-section__button {\n    padding: 0.75rem 2rem;\n    font-size: 1rem;\n  }\n\n  .get-in-touch-section__content {\n    padding-bottom: 3rem;\n  }\n\n  .get-in-touch-section__help-us-block {\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  }\n\n  .get-in-touch-section__title {\n    font-size: 2rem;\n  }\n\n  .get-in-touch-section__text {\n    font-size: 0.75rem;\n    line-height: 1.125rem;\n  }\n\n  .get-in-touch-section__button {\n    padding: 0.75rem 2rem;\n    font-size: 1rem;\n  }\n}\n\n@media screen and (min-width: 2200px) {\n  .header__content {\n    padding: 1rem 20vw;\n  }\n\n  .donate-section {\n    padding: 0 20vw;\n  }\n\n  .product-section__content {\n    padding: 0 20vw;\n  }\n\n  .blog-section__items {\n    padding: 7.25rem 20vw 4.5rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/CSS/style.css":
/*!***************************!*\
  !*** ./src/CSS/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/CSS/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets sync recursive ^\\.\\/.*$":
/*!***********************************!*\
  !*** ./src/assets/ sync ^\.\/.*$ ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./bg-image-clothes-142w.png": "./src/assets/bg-image-clothes-142w.png",
	"./bg-image-clothes-608w.png": "./src/assets/bg-image-clothes-608w.png",
	"./blog-item-image--3.png": "./src/assets/blog-item-image--3.png",
	"./blog-item-image-384w--2.png": "./src/assets/blog-item-image-384w--2.png",
	"./blog-item-image-384w.png": "./src/assets/blog-item-image-384w.png",
	"./blog-section-image-105w.png": "./src/assets/blog-section-image-105w.png",
	"./blog-section-image-420w.png": "./src/assets/blog-section-image-420w.png",
	"./bunch-of-clothes-484w.png": "./src/assets/bunch-of-clothes-484w.png",
	"./clothes-on-rack-484w.png": "./src/assets/clothes-on-rack-484w.png",
	"./drone-video.svg": "./src/assets/drone-video.svg",
	"./get-in-touch-557w.png": "./src/assets/get-in-touch-557w.png",
	"./incognito.svg": "./src/assets/incognito.svg",
	"./kids-selfie-100w.png": "./src/assets/kids-selfie-100w.png",
	"./kids-selfie-233w.png": "./src/assets/kids-selfie-233w.png",
	"./link-icon.svg": "./src/assets/link-icon.svg",
	"./list-style-hyphen--smaller.svg": "./src/assets/list-style-hyphen--smaller.svg",
	"./list-style-hyphen.svg": "./src/assets/list-style-hyphen.svg",
	"./map-marker.svg": "./src/assets/map-marker.svg",
	"./open-more-in_circrle-arrow.svg": "./src/assets/open-more-in_circrle-arrow.svg",
	"./section-icon.svg": "./src/assets/section-icon.svg",
	"./shop-outline.svg": "./src/assets/shop-outline.svg",
	"./web-logo-30w.svg": "./src/assets/web-logo-30w.svg",
	"./web-logo-60w.svg": "./src/assets/web-logo-60w.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/assets/bg-image-clothes-142w.png":
/*!**********************************************!*\
  !*** ./src/assets/bg-image-clothes-142w.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bg-image-clothes-142w.png";

/***/ }),

/***/ "./src/assets/bg-image-clothes-608w.png":
/*!**********************************************!*\
  !*** ./src/assets/bg-image-clothes-608w.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bg-image-clothes-608w.png";

/***/ }),

/***/ "./src/assets/blog-item-image--3.png":
/*!*******************************************!*\
  !*** ./src/assets/blog-item-image--3.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/blog-item-image--3.png";

/***/ }),

/***/ "./src/assets/blog-item-image-384w--2.png":
/*!************************************************!*\
  !*** ./src/assets/blog-item-image-384w--2.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/blog-item-image-384w--2.png";

/***/ }),

/***/ "./src/assets/blog-item-image-384w.png":
/*!*********************************************!*\
  !*** ./src/assets/blog-item-image-384w.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/blog-item-image-384w.png";

/***/ }),

/***/ "./src/assets/blog-section-image-105w.png":
/*!************************************************!*\
  !*** ./src/assets/blog-section-image-105w.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/blog-section-image-105w.png";

/***/ }),

/***/ "./src/assets/blog-section-image-420w.png":
/*!************************************************!*\
  !*** ./src/assets/blog-section-image-420w.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/blog-section-image-420w.png";

/***/ }),

/***/ "./src/assets/bunch-of-clothes-484w.png":
/*!**********************************************!*\
  !*** ./src/assets/bunch-of-clothes-484w.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bunch-of-clothes-484w.png";

/***/ }),

/***/ "./src/assets/clothes-on-rack-484w.png":
/*!*********************************************!*\
  !*** ./src/assets/clothes-on-rack-484w.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/clothes-on-rack-484w.png";

/***/ }),

/***/ "./src/assets/drone-video.svg":
/*!************************************!*\
  !*** ./src/assets/drone-video.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/drone-video.svg";

/***/ }),

/***/ "./src/assets/get-in-touch-557w.png":
/*!******************************************!*\
  !*** ./src/assets/get-in-touch-557w.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/get-in-touch-557w.png";

/***/ }),

/***/ "./src/assets/incognito.svg":
/*!**********************************!*\
  !*** ./src/assets/incognito.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/incognito.svg";

/***/ }),

/***/ "./src/assets/kids-selfie-100w.png":
/*!*****************************************!*\
  !*** ./src/assets/kids-selfie-100w.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/kids-selfie-100w.png";

/***/ }),

/***/ "./src/assets/kids-selfie-233w.png":
/*!*****************************************!*\
  !*** ./src/assets/kids-selfie-233w.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/kids-selfie-233w.png";

/***/ }),

/***/ "./src/assets/link-icon.svg":
/*!**********************************!*\
  !*** ./src/assets/link-icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/link-icon.svg";

/***/ }),

/***/ "./src/assets/list-style-hyphen--smaller.svg":
/*!***************************************************!*\
  !*** ./src/assets/list-style-hyphen--smaller.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/list-style-hyphen--smaller.svg";

/***/ }),

/***/ "./src/assets/list-style-hyphen.svg":
/*!******************************************!*\
  !*** ./src/assets/list-style-hyphen.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/list-style-hyphen.svg";

/***/ }),

/***/ "./src/assets/map-marker.svg":
/*!***********************************!*\
  !*** ./src/assets/map-marker.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/map-marker.svg";

/***/ }),

/***/ "./src/assets/open-more-in_circrle-arrow.svg":
/*!***************************************************!*\
  !*** ./src/assets/open-more-in_circrle-arrow.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/open-more-in_circrle-arrow.svg";

/***/ }),

/***/ "./src/assets/section-icon.svg":
/*!*************************************!*\
  !*** ./src/assets/section-icon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/section-icon.svg";

/***/ }),

/***/ "./src/assets/shop-outline.svg":
/*!*************************************!*\
  !*** ./src/assets/shop-outline.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/shop-outline.svg";

/***/ }),

/***/ "./src/assets/web-logo-30w.svg":
/*!*************************************!*\
  !*** ./src/assets/web-logo-30w.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/web-logo-30w.svg";

/***/ }),

/***/ "./src/assets/web-logo-60w.svg":
/*!*************************************!*\
  !*** ./src/assets/web-logo-60w.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/web-logo-60w.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSS/style.css */ "./src/CSS/style.css");
/* harmony import */ var _burger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger-menu */ "./src/burger-menu.js");

// Load all assets
__webpack_require__("./src/assets sync recursive ^\\.\\/.*$");

(0,_burger_menu__WEBPACK_IMPORTED_MODULE_1__.actionHamburgerMenu)();
(0,_burger_menu__WEBPACK_IMPORTED_MODULE_1__.openHamburgerMenuLink)();
(0,_burger_menu__WEBPACK_IMPORTED_MODULE_1__.hideHamburgerMenuOnResize)();
})();

/******/ })()
;
//# sourceMappingURL=bundle71227fee44cb83679ca4.js.map