/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(6);
	__webpack_require__(31);
	
	var App = new Vue(__webpack_require__(10));
	
	function route() {
	  App.params.tab = window.location.hash.slice(1) || 'all';
	}
	
	window.addEventListener('hashchange', route);
	window.addEventListener('load', route);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./layout.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./layout.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "/*http://purecss.io/layouts/email/*/\n/*\n * -- BASE STYLES --\n * Most of these are inherited from Base, but I want to change a few.\n */\nbody {\n    color: #212121;\n    font-family: \"Helvetica Neue\", \"Luxi Sans\", \"DejaVu Sans\", Tahoma, \"Hiragino Sans GB\", \"Microsoft Yahei\", sans-serif;\n}\n\n\n\na {\n    text-decoration: none;\n    color: #1b98f8;\n}\n\n\n/*\n * -- HELPER STYLES --\n * Over-riding some of the .pure-button styles to make my buttons look unique\n */\n.primary-button,\n.secondary-button {\n    box-shadow: none;\n    border-radius: 20px;\n}\n.primary-button {\n    color: #fff;\n    background: #1b98f8;\n    margin: 1em 0;\n}\n.secondary-button {\n    background: #fff;\n    border: 1px solid #ddd;\n    color: #666;\n    padding: 0.5em 2em;\n    font-size: 80%;\n}\n\n/*\n * -- LAYOUT STYLES --\n * This layout consists of three main elements, `#nav` (navigation bar), `#list` (email list), and `#main` (email content). All 3 elements are within `#cnode`\n */\n#cnode, #nav, #list, #main {\n    margin: 0;\n    padding: 0;\n}\n\n/* Make the navigation 100% width on phones */\n#nav {\n    width: 100%;\n    height: 40px;\n    position: relative;\n    background: #fff;\n    text-align: center;\n}\n/* Show the \"Menu\" button on phones */\n#nav .nav-menu-button {\n    display: block;\n    top: 0.5em;\n    right: 0.5em;\n    position: absolute;\n}\n\n/* When \"Menu\" is clicked, the navbar should be 80% height */\n#nav.active {\n    height: 80%;\n}\n/* Don't show the navigation items... */\n.nav-inner {\n    display: none;\n}\n\n/* ...until the \"Menu\" button is clicked */\n#nav.active .nav-inner {\n    display: block;\n    padding: 2em 0;\n}\n\n\n/*\n * -- NAV BAR STYLES --\n * Styling the default .pure-menu to look a little more unique.\n */\n#nav .pure-menu {\n    background: transparent;\n    border: none;\n    text-align: center;\n}\n    #nav .pure-menu-link:hover,\n    #nav .pure-menu-link:focus {\n        background: #dedede;\n    }\n    #nav .pure-menu-link {\n        color: #000;\n        margin-left: 0.5em;\n    }\n    #nav .pure-menu-heading {\n        border-bottom: none;\n        font-size:110%;\n        color: #dedede;\n    }\n\n\n/*\n * -- EMAIL STYLES --\n * Styles relevant to the email messages, labels, counts, and more.\n */\n.email-count {\n    color: rgb(75, 113, 151);\n}\n\n.email-label-personal,\n.email-label-work,\n.email-label-travel {\n    width: 15px;\n    height: 15px;\n    display: inline-block;\n    margin-right: 0.5em;\n    border-radius: 3px;\n}\n.email-label-personal {\n    background: #ffc94c;\n}\n.email-label-work {\n    background: #41ccb4;\n}\n.email-label-travel {\n    background: #40c365;\n}\n\n\n/* Email Item Styles */\n.email-item {\n    padding: 0.9em 1em;\n    border-bottom: 1px solid #ddd;\n    border-left: 6px solid transparent;\n}\n    .email-avatar {\n        border-radius: 3px;\n        margin-right: 0.5em;\n    }\n    .email-name,\n    .email-subject {\n        margin: 0;\n    }\n    .email-name {\n        text-transform: uppercase;\n        color: #999;\n    }\n    .email-desc {\n        font-size: 80%;\n        margin: 0.4em 0;\n    }\n\n.email-item-selected {\n    background: #eee;\n}\n.email-item-unread {\n    border-left: 6px solid #1b98f8;\n}\n\n/* Email Content Styles */\n.email-content-header, .email-content-body, .email-content-footer {\n    padding: 1em 2em;\n}\n    .email-content-header {\n        border-bottom: 1px solid #ddd;\n    }\n\n        .email-content-title {\n            margin: 0.5em 0 0;\n        }\n        .email-content-subtitle {\n            font-size: 1em;\n            margin: 0;\n            font-weight: normal;\n        }\n            .email-content-subtitle span {\n                color: #999;\n            }\n    .email-content-controls {\n        margin-top: 2em;\n        text-align: right;\n    }\n        .email-content-controls .secondary-button {\n            margin-bottom: 0.3em;\n        }\n\n    .email-avatar {\n        width: 40px;\n        height: 40px;\n    }\n\n\n/*\n * -- TABLET (AND UP) MEDIA QUERIES --\n * On tablets and other medium-sized devices, we want to customize some\n * of the mobile styles.\n */\n@media (min-width: 40em) {\n\n    /* Move the layout over so we can fit the nav + list in on the left */\n    #cnode {\n        padding-left:500px; /* \"left col (nav + list)\" width */\n        position: relative;\n    }\n\n    /* These are position:fixed; elements that will be in the left 500px of the screen */\n    #nav, #list {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        overflow: auto;\n    }\n    #nav {\n        margin-left:-500px; /* \"left col (nav + list)\" width */\n        width:150px;\n        height: 100%;\n    }\n\n    /* Show the menu items on the larger screen */\n    .nav-inner {\n        display: block;\n        padding: 2em 0;\n    }\n\n    /* Hide the \"Menu\" button on larger screens */\n    #nav .nav-menu-button {\n        display: none;\n    }\n\n    #list {\n        margin-left: -350px;\n        width: 100%;\n        height: 33%;\n        border-bottom: 1px solid #ddd;\n    }\n\n    #main {\n        position: fixed;\n        top: 33%;\n        right: 0;\n        bottom: 0;\n        left: 150px;\n        overflow: auto;\n        width: auto; /* so that it's not 100% */\n    }\n\n}\n\n/*\n * -- DESKTOP (AND UP) MEDIA QUERIES --\n * On desktops and other large-sized devices, we want to customize some\n * of the mobile styles.\n */\n@media (min-width: 60em) {\n\n    /* This will take up the entire height, and be a little thinner */\n    #list {\n        margin-left: -350px;\n        width:350px;\n        height: 100%;\n        border-right: 1px solid #ddd;\n    }\n\n    /* This will now take up it's own column, so don't need position: fixed; */\n    #main {\n        position: static;\n        margin: 0;\n        padding: 0;\n    }\n}\n\n", ""]);
	
	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(11)
	module.exports = __webpack_require__(13)
	module.exports.template = __webpack_require__(30)


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./app.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./app.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  el: '#cnode',
	  data: {
	    params: {
	      tab: '',
	      topicId: ''
	    }
	  },
	  components: {
	    'article': __webpack_require__(14),
	    'menu': __webpack_require__(20),
	    'topic-list': __webpack_require__(25)
	  }
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(15)
	module.exports = __webpack_require__(17)
	module.exports.template = __webpack_require__(19)


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./article.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./article.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, ".content {\n  padding: 10px;\n}\n\n.content img {\n  max-width: 100%;\n}\n\n.markdown-text p,.preview p {\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -pre-wrap;\n  white-space: -o-pre-wrap;\n  word-wrap: break-word;\n  line-height: 2em;\n  margin: 1em 0\n}\n\n.markdown-text>:first-child,.preview>:first-child {\n  margin-top: 0\n}\n\n.markdown-text>:last-child,.preview>:last-child {\n  margin-bottom: 1em\n}\n\n.markdown-text li,.preview li {\n  font-size: 14px;\n  line-height: 2em\n}\n\n.markdown-text li code,.markdown-text p code,.preview li code,.preview p code {\n  color: #000;\n  background-color: #fcfafa;\n  padding: 4px 6px\n}", ""]);
	
	// exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var store = __webpack_require__(18);
	
	module.exports = {
	  props: ['params'],
	  data: function data() {
	    return {
	      topic: {}
	    };
	  },
	  watch: {
	    'params.topicId': 'update'
	  },
	  compiled: function compiled() {
	    this.update();
	  },
	  methods: {
	    update: function update() {
	      var id = this.params.topicId;
	      if (!id) return;
	
	      this.fetchTopic(id);
	    },
	    fetchTopic: function fetchTopic(id) {
	      this.topic = {};
	
	      store.fetchTopicById(id).then((function (result) {
	        this.topic = result.data;
	      }).bind(this));
	    }
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 *
	 * @authors Your Name (you@example.org)
	 * @date    2015-09-08 14:10:45
	 * @version $Id$
	 */
	'use strict';
	
	var store = {};
	
	store.fetchTopics = function (tab) {
	  return fetch('https://cnodejs.org/api/v1/topics?tab=' + tab).then(function (response) {
	    return response.json();
	  });
	};
	
	store.fetchTopicById = function (id) {
	  return fetch('https://cnodejs.org/api/v1/topic/' + id).then(function (response) {
	    return response.json();
	  });
	};
	
	module.exports = store;

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<div id=\"main\" class=\"pure-u-1\" v-show=\"topic.id\">\n    <div class=\"content\" v-html=\"topic.content\"></div>\n  </div>";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(21)
	module.exports = __webpack_require__(23)
	module.exports.template = __webpack_require__(24)


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./menu.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./menu.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "#nav .pure-menu-item.active {\n  background: #dedede;\n}", ""]);
	
	// exports


/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  props: ['params'],
	  data: function data() {
	    return {
	      tabs: [{
	        name: '全部',
	        id: 'all'
	      }, {
	        name: '精华',
	        id: 'good'
	      }, {
	        name: '分享',
	        id: 'share'
	      }, {
	        name: '问答',
	        id: 'ask'
	      }, {
	        name: '招聘',
	        id: 'job'
	      }],
	      isSlide: false
	    };
	  },
	  computed: {
	    selectedTab: function selectedTab() {
	      return this.params.tab;
	    }
	  },
	  methods: {
	    select: function select(tab) {
	      this.params.tab = tab;
	    }
	  }
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<div id=\"nav\" class=\"pure-u\" v-class=\"active: isSlide\">\n    <a href=\"#\" class=\"nav-menu-button\" v-on=\"click: isSlide = !isSlide\">Menu</a>\n    <div class=\"nav-inner\">\n      <div class=\"pure-menu\">\n        <ul class=\"pure-menu-list\">\n          <li class=\"pure-menu-item\"\n              v-repeat=\"tab in tabs\"\n              v-class=\"active: selectedTab === tab.id\">\n            <a href=\"#{{tab.id}}\"\n               class=\"pure-menu-link\"\n               v-on=\"click: select(tab.id)\"\n            > {{tab.name}} </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(26)
	module.exports = __webpack_require__(28)
	module.exports.template = __webpack_require__(29)


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./topic-list.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./topic-list.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "#list {\n  box-shadow: 1px 1px 10px rgba(0,0,0,.5);\n}\n\n.topic-item {\n  padding: 0.9em 1em;\n  border-left: 6px solid transparent;\n  border-bottom: 1px solid #B6B6B6;\n}\n\n.topic-item.active {\n  background: #eee;\n}\n\n.topic-item h5 {\n  margin-left: 5px;\n}", ""]);
	
	// exports


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var store = __webpack_require__(18);
	
	module.exports = {
	  props: ['params'],
	  data: function data() {
	    return {
	      topics: []
	    };
	  },
	  watch: {
	    'params.tab': 'update'
	  },
	  compiled: function compiled() {
	    this.update();
	  },
	  computed: {
	    selectTopicId: function selectTopicId() {
	      return this.params.topicId;
	    }
	  },
	  methods: {
	    update: function update() {
	      var tab = this.params.tab;
	
	      this.fetchTopics(tab);
	    },
	    fetchTopics: function fetchTopics(tab) {
	      store.fetchTopics(tab).then((function (result) {
	        // console.log(result)
	        this.topics = result.data;
	      }).bind(this));
	    },
	    select: function select(topicId) {
	      this.params.topicId = topicId;
	    }
	  }
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<div id=\"list\" class=\"pure-u-1\">\n    <div class=\"topic-item pure-g\"\n         v-repeat=\"topic in topics\"\n         v-class=\"active: selectTopicId === topic.id\">\n      <div class=\"pure-u-1\"\n           v-on=\"click: select(topic.id)\">\n        <div class=\"pure-g\">\n          <div class=\"pure-u\">\n            <img src=\"{{topic.author.avatar_url}}\" alt=\"{{topic.author.loginname}}\" width=\"64\" height=\"64\">\n          </div>\n          <div class=\"pure-u-3-4\">\n            <h5>{{topic.title}}</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<div>\n    <menu params=\"{{params}}\"></menu>\n    <topic-list params=\"{{params}}\"></topic-list>\n    <article params=\"{{params}}\"></article>\n  </div>";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./app.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./app.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 2px;\n  height: 2px;\n}\n::-webkit-scrollbar-button {\n  width: 0px;\n  height: 0px;\n}\n::-webkit-scrollbar-thumb {\n  background: #fff;\n  border: 0px none #ffffff;\n  border-radius: 50px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #ffffff;\n}\n::-webkit-scrollbar-thumb:active {\n  background: #000000;\n}\n::-webkit-scrollbar-track {\n  background: transparent;\n  border: 0px none #ffffff;\n  border-radius: 50px;\n}\n::-webkit-scrollbar-track:hover {\n  background: transparent;\n}\n::-webkit-scrollbar-track:active {\n  background: #333333;\n}\n::-webkit-scrollbar-corner {\n  background: transparent;\n}\n", ""]);
	
	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map