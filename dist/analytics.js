"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=init,exports.pageview=pageview,exports.event=event,exports.exception=exception;var _reactGa=require("react-ga"),_reactGa2=_interopRequireDefault(_reactGa);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var IS_BROWSER="undefined"!=typeof window;function init(a){IS_BROWSER&&!window.GA_INITIALIZED&&a&&_reactGa2.default.initialize(a)}function pageview(){_reactGa2.default.set({page:window.location.pathname}),_reactGa2.default.pageview(window.location.pathname)}function event(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"",b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"";a&&b&&_reactGa2.default.event({category:a,action:b})}function exception(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"",b=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1];a&&_reactGa2.default.exception({description:a,fatal:b})}