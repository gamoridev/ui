(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./packages/ui-dom/components/Slider/MarkerHandler.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r("./node_modules/react/index.js")),o=s(r("./node_modules/styled-components/dist/styled-components.browser.esm.js")),i=s(r("./node_modules/react-pose/dist/react-pose.es.js")),a=s(r("./node_modules/react-measure/dist/index.esm.js")),u=r("./packages/ui-dom/node_modules/styled-system/dist/index.esm.js");function s(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  cursor: ew-resize;\n  position: absolute;\n  padding: ","px;\n  ",";\n  & > * {\n    transition: box-shadow 250ms ease-in-out;\n  }\n  &:focus {\n    outline: none;\n  }\n  ",";\n"]);return b=function(){return e},e}var m=(0,o.default)(i.default.div({draggable:"x",dragBounds:function(e){var t=e.bounds;return{left:t.left,right:t.right}}}))(b(),function(e){return e.hitSlop},function(e){var t=e.layout,r=e.hitSlop;return t?{left:"-".concat(t.width/2+r,"px")}:{opacity:0}},u.zIndex),h=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u];return n=this,o=(e=f(t)).call.apply(e,[this].concat(a)),r=!o||"object"!==l(o)&&"function"!==typeof o?p(n):o,y(p(p(r)),"state",{layout:void 0,focus:!1}),y(p(p(r)),"onResize",function(e){var t=e.entry;return r.setState({layout:{width:t.width,height:t.height}})}),y(p(p(r)),"onChange",function(e){var t=r.props,n=t.index,o=t.onSlide;o&&o(n,e)}),y(p(p(r)),"onDragEnd",function(){var e=r.props.onSlideStop;e&&e()}),y(p(p(r)),"onFocus",function(){return r.setState({focus:!0})}),y(p(p(r)),"onBlur",function(){return r.setState({focus:!1})}),y(p(p(r)),"onKeyPress",function(e){var t=r.props,n=t.step,o=t.bounds,i=t.animatedValues,a=t.incrementKeys,u=t.decrementKeys;if(r.state.focus){var s=i.x.get();if(-1!==a.indexOf(e.keyCode))s+=n;else{if(-1===u.indexOf(e.keyCode))return;s-=n}e.preventDefault(),i.x.update(o.clamp(s))}}),r}var r,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,n.PureComponent),r=t,i=[{key:"getDerivedStateFromProps",value:function(e,t){return{layout:e.layout||t.layout}}}],(o=[{key:"componentDidUpdate",value:function(e){var t=this.props.animatedValues;e.position!==this.props.posed&&e.value===this.props.value&&this.props.position!==t.x.get()&&this.props.animatedValues.x.update(this.props.position),e.disabled!==this.props.disabled&&(this.props.disabled?this._unregisterListeners():this._registerListeners())}},{key:"_registerListeners",value:function(){document.addEventListener("keydown",this.onKeyPress)}},{key:"_unregisterListeners",value:function(){document.removeEventListener("keydown",this.onKeyPress)}},{key:"componentDidMount",value:function(){this.props.disabled||this._registerListeners()}},{key:"componentWillUnmount",value:function(){this.props.disabled||this._unregisterListeners()}},{key:"render",value:function(){var e=this,t=this.props,r=t.children,o=t.bounds,i=t.hitSlop,u=t.position,s=t.value,l=t.sliderLayout,c=t.index,f=t.zIndex,d=t.animatedValues,p=this.state,y=p.layout,b=p.focus;return n.default.createElement(a.default,{onResize:this.onResize},function(t){var a=t.measureRef;return n.default.createElement(m,{ref:a,bounds:o,tabIndex:0,zIndex:c+f,hitSlop:i,layout:y,sliderLayout:l,onValueChange:{x:e.onChange},onDragEnd:e.onDragEnd,onFocus:e.onFocus,onBlur:e.onBlur,values:d},n.default.cloneElement(r,{focus:b,markerState:{position:u,value:s,bounds:o}}))})}}])&&c(r.prototype,o),i&&c(r,i),t}();t.default=h,y(h,"defaultProps",{zIndex:100,hitSlop:15,step:1,incrementKeys:[39,38],decrementKeys:[37,40]})},"./packages/ui-dom/components/Slider/MarkerTrack.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r("./node_modules/lodash/identity.js")),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r("./node_modules/react/index.js")),i=l(r("./node_modules/styled-components/dist/styled-components.browser.esm.js")),a=r("./node_modules/popmotion/dist/popmotion.es.js"),u=l(r("./node_modules/react-pose/dist/react-pose.es.js")),s=l(r("./packages/ui-dom/components/Slider/Track.js"));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  position: absolute;\n  margin-top: ","px;\n"]);return m=function(){return e},e}var h=(0,i.default)((0,u.default)(o.default.forwardRef(function(e,t){return o.default.createElement(s.default,b({ref:t},e))}))({passive:{width:["x",n.default,!0],left:["offset",n.default,!0]}}))(m(),function(e){var t=e.height;return-((parseInt(t)||2)-2)/2}),v=function(e){function t(e){var r,n,o,i,u,s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=d(t).call(this,e),r=!o||"object"!==c(o)&&"function"!==typeof o?y(n):o,i=y(y(r)),s=function(){var e=r.props,t=e.x,n=e.offset,o={x:(0,a.value)(t.get()-n.get()),offset:n};return r.unsubscribeFromX=t.subscribe({update:function(e){return o.x.update(e-n.get())}}),r.unsubscribeFromOffset=n.subscribe({update:function(e){return o.x.update(t.get()-e)}}),o},(u="_getParentValues")in i?Object.defineProperty(i,u,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[u]=s,r.state={values:r._getParentValues()},r}var r,n,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.PureComponent),r=t,(n=[{key:"componentDidUpdate",value:function(e){e.sliderLayout.width!==this.props.sliderLayout.width&&(this.unsubscribeFromX(),this.unsubscribeFromOffset(),this.setState({values:this._getParentValues()}))}},{key:"render",value:function(){var e=b({},this.props),t=this.state.values;return o.default.createElement(h,b({},e,{parentValues:t}))}}])&&f(r.prototype,n),i&&f(r,i),t}();t.default=v},"./packages/ui-dom/components/Slider/SliderTrack.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r("./node_modules/react/index.js")),o=c(r("./node_modules/styled-components/dist/styled-components.browser.esm.js")),i=r("./packages/ui/lib/components/Slider/Context.js"),a=c(r("./packages/ui-dom/components/Row/index.js")),u=c(r("./packages/ui-dom/components/Slider/Track.js")),s=c(r("./packages/ui-dom/components/Slider/MarkerTrack.js")),l=r("./node_modules/popmotion/dist/popmotion.es.js");function c(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  position: relative;\n  width: 100%;\n  height: 2px;\n"]);return v=function(){return e},e}var g=(0,o.default)(a.default)(v()),j=(0,l.value)(0),O=function(e){function t(){var e,r,o,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,u=new Array(a),l=0;l<a;l++)u[l]=arguments[l];return o=this,i=(e=y(t)).call.apply(e,[this].concat(u)),r=!i||"object"!==f(i)&&"function"!==typeof i?m(o):i,h(m(m(r)),"renderMarkerTrack",function(e,t){var o=e.element.props.trackProps;if(o){var i=t>0?r.props.markers[t-1]:void 0;return n.default.createElement(s.default,d({key:e.key,zIndex:r.props.markers.length-t+1,x:e.state.animatedValues.x,offset:i?i.state.animatedValues.x:j},r.props.trackProps,o))}}),r}var r,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,n.PureComponent),r=t,(o=[{key:"render",value:function(){var e=this.props,t=e.markers,r=e.trackProps;return n.default.createElement(g,null,t&&t.map(this.renderMarkerTrack),n.default.createElement(u.default,d({zIndex:0},r)))}}])&&p(r.prototype,o),i&&p(r,i),t}();h(O,"defaultProps",{markers:[],sliderLayout:{},trackProps:{}});var k=(0,i.withSliderContext)(function(e){return{markers:e.markers,sliderLayout:e.layout}})(O);t.default=k},"./packages/ui-dom/components/Slider/Track.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"))&&n.__esModule?n:{default:n},i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r("./packages/ui/lib/components/Slider/index.js"));function a(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  width: 100%;\n  border-radius: 4px;\n  ",";\n"]);return a=function(){return e},e}var u=o.default.div(a(),i.track);u.displayName="SliderTrack",u.defaultProps=i.track.defaultProps;var s=u;t.default=s},"./packages/ui-dom/components/Slider/index.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r("./node_modules/react/index.js")),o=f(r("./node_modules/styled-components/dist/styled-components.browser.esm.js")),i=r("./node_modules/popmotion/dist/popmotion.es.js"),a=f(r("./node_modules/react-measure/dist/index.esm.js")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r("./packages/ui/lib/components/Slider/index.js")),s=f(r("./packages/ui-dom/components/Slider/MarkerHandler.js")),l=f(r("./packages/ui-dom/components/Slider/SliderTrack.js")),c=f(r("./packages/ui-dom/components/View/index.js"));function f(e){return e&&e.__esModule?e:{default:e}}function d(){var e=h(["\n  ",";\n  position: relative;\n"]);return d=function(){return e},e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function b(){var e=h(["\n  ",";\n"]);return b=function(){return e},e}function m(){var e=h(["\n  ",";\n  margin-bottom: 50%;\n  margin-left: -50%;\n  left: ","px;\n"]);return m=function(){return e},e}function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var v=(0,o.default)(c.default)(m(),u.marker.label,function(e){return e.size});v.displayName="SliderMarkerLabel";var g=(0,o.default)(function(e){var t=e.style,r=e.size,o=e.markerState,i=e.renderLabel,a=y(e,["style","size","markerState","renderLabel"]);return n.default.createElement(c.default,p({style:t},a),i&&n.default.createElement(v,{size:r},i(o)))})(b(),u.marker);g.displayName="SliderMarker",g.defaultProps=u.marker.defaultProps;var j=(0,o.default)(function(e){var t=e.onLayout,r=y(e,["onLayout"]);return n.default.createElement(a.default,{onResize:function(e){var r=e.entry;return t({width:r.width,height:r.height})}},function(e){var t=e.measureRef;return n.default.createElement(c.default,p({ref:t},r))})})(d(),u.container);j.defaultProps=u.container.defaultProps;var O=(0,u.default)({MarkerHandler:s.default,Marker:g,SliderTrack:l.default,getInitialMarkerState:function(e){var t=e.position;return{animatedValues:{x:(0,i.value)(t)}}}})(j);O.Marker=g;var k=O;t.default=k},"./packages/ui/lib/components/Slider/Context.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withSliderContext=t.Provider=t.Consumer=void 0;var n,o=(n=r("./node_modules/react/index.js"))&&n.__esModule?n:{default:n};function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var a=o.default.createContext({}),u=a.Consumer,s=a.Provider;t.Provider=s,t.Consumer=u;t.withSliderContext=function(e){return function(t){return function(r){return o.default.createElement(u,null,function(n){return o.default.createElement(t,i({},r,e(n)))})}}}},"./packages/ui/lib/components/Slider/hoc.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r("./node_modules/lodash/fp/flow.js")),o=c(r("./node_modules/lodash/throttle.js")),i=c(r("./node_modules/lodash/identity.js")),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r("./node_modules/react/index.js")),u=c(r("./node_modules/prop-types/index.js")),s=c(r("./node_modules/everpolate/lib/everpolate.js")),l=r("./packages/ui/lib/components/Slider/Context.js");function c(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){j(e,t,r[t])})}return e}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=function(e,t,r){return Math.max(t,Math.min(r,e))},k=function(e,t,r){t.bounds=function(e,t){return{left:t?t.position:0,right:e[1],clamp:function(e){return O(e,this.left,this.right)}}}(e,r),r&&(r.bounds.right=Math.min(t.position,e[1]))},w=function(e,t){return function(r){return s.default.linear(r,e,t)[0]}};t.default=function(e){var t=e.MarkerHandler,r=e.Marker,s=e.SliderTrack,c=e.getDerivedState,_=e.getInitialMarkerState,P=void 0===_?function(){return{}}:_;return function(e){var _,S;return S=_=function(u){function c(){var e,r,n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var u=arguments.length,s=new Array(u),l=0;l<u;l++)s[l]=arguments[l];return n=this,i=(e=h(c)).call.apply(e,[this].concat(s)),r=!i||"object"!==f(i)&&"function"!==typeof i?g(n):i,j(g(g(r)),"state",r._getInitialState()),j(g(g(r)),"_onChangeCallback",function(){var e=r.props.onChange;e&&e(r.state.markers.reduce(function(e,t){return b({},e,j({},t.key,t.state.value))},{}))}),j(g(g(r)),"_updateBounds",function(){r.setState(function(e){var t=e.markers,n=e.layout;return{markers:t.reduce(function(e,t,o){var i=b({},t,{state:b({},t.state,{position:r._getPositionFromValue(t.state.value)})});return k([0,n.width],i.state,o>0?e[o-1].state:void 0),e.push(i),e},[])}})}),j(g(g(r)),"onSlide",(0,o.default)(function(e,t){r.state.markers[e].position!==t&&r.setState(function(n){var o=n.markers,i=y(o);return i[e]=b({},o[e],{state:b({},o[e].state,{position:t,value:r._getValueFromPosition(t)})}),{markers:i}},r._onChangeCallback)},r.props.slideEventThrottle,{leading:!1,trailing:!0})),j(g(g(r)),"onSlideStop",function(){r.onSlide.flush(),r._updateBounds()}),j(g(g(r)),"onLayout",(0,o.default)(function(e){var t=r.state.markers||r._getInitialMarkerState(e);r.setState({layout:e,markers:t})},r.props.layoutEventThrottle,{leading:!0,trailing:!0})),j(g(g(r)),"renderMarker",function(e){var n=e.key,o=e.index,i=e.element,u=e.state;return a.default.createElement(t,p({},u,{key:n,index:o,name:n,onSlide:r.onSlide,onSlideStop:r.onSlideStop,sliderLayout:r.state.layout}),i)}),r}var _,S,x;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(c,a.PureComponent),_=c,(S=[{key:"componentDidUpdate",value:function(e,t){if(e.children&&this.props.children&&e.children.length!==this.props.children.length)throw new Error("Changing Slider children on the fly is not supported.");t.layout&&t.layout.width!==this.state.layout.width&&this._updateBounds()}},{key:"_getInitialState",value:function(){var e=this.props.width,t=Number(e)===e?{width:e}:void 0;return{layout:t,markers:t?this._getInitialMarkerState(t):void 0}}},{key:"_getInitialMarkerState",value:function(e){var t=this,r=this.props.initialValue,n=this.props.range||[0,1],o=[0,e.width],i=w(n,o),u=function(e){if(!isNaN(r))return r||0;if(!(e in r))throw new Error('Undefined initial value for slider marker "'.concat(e,'".'));return r[e]},s=[];return a.default.Children.forEach(this.props.children,function(e,r){if(a.default.isValidElement(e)){var l=e.props.name||r,c=O.apply(void 0,[u(l)].concat(y(n))),f={value:c,position:i(c),layout:t._getMarkerLayout({index:r,key:l,element:e})};k(o,f,r>0?s[r-1].state:void 0),Object.assign(f,P(f));var d={key:l,index:r,element:e,state:f};s.push(d)}}),s}},{key:"_getMarkerLayout",value:function(e){var t=this.props.getMarkerLayout;if(t)return t(e);if(a.default.isValidElement(e.element)&&e.element.type===r){var n=e.element.props.size;return{width:n,height:n}}}},{key:"render",value:function(){var t=this.props,r=t.trackProps,n=d(t,["trackProps"]),o=this.state.markers;return a.default.createElement(l.Provider,{value:this.state},a.default.createElement(e,p({onLayout:this.onLayout},n),o&&o.map(this.renderMarker),a.default.createElement(s,{trackProps:r})))}},{key:"_getValueFromPosition",get:function(){return this.state.layout&&this.props.range?(0,n.default)(w([0,this.state.layout.width],this.props.range),this.props.formatValue):i.default}},{key:"_getPositionFromValue",get:function(){return this.state.layout&&this.props.range?w(this.props.range,[0,this.state.layout.width]):i.default}}])&&m(_.prototype,S),x&&m(_,x),c}(),j(_,"displayName","Slider(".concat(e.displayName||e.name,")")),j(_,"defaultProps",Object.assign({formatValue:i.default,initialValue:0,minDistance:1,slideEventThrottle:50,layoutEventThrottle:50},e.defaultProps||{})),j(_,"propTypes",b({width:u.default.oneOfType([u.default.string,u.default.number]),initialValue:u.default.oneOfType([u.default.number,u.default.array,u.default.object]).isRequired,formatValue:u.default.func,getMarkerLayout:u.default.func,minDistance:u.default.number.isRequired,slideEventThrottle:u.default.number.isRequired,layoutEventThrottle:u.default.number.isRequired},e.propTypes||{})),j(_,"getDerivedStateFromProps",c),S}}},"./packages/ui/lib/components/Slider/index.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s.default}}),t.track=t.marker=t.container=void 0;var n,o=r("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=r("./packages/ui/node_modules/styled-system/dist/index.esm.js"),a=r("./packages/ui/lib/styles/index.js"),u=r("./packages/ui/lib/components/Col/index.js"),s=(n=r("./packages/ui/lib/components/Slider/hoc.js"))&&n.__esModule?n:{default:n};function l(){var e=p(["\n  position: relative;\n  height: 2px;\n  ",";\n  ",";\n  ",";\n"]);return l=function(){return e},e}function c(){var e=p(["\n  position: absolute;\n  bottom: ","px;\n  left: ","px;\n"]);return c=function(){return e},e}function f(){var e=p(["\n  width: ","px;\n  height: ","px;\n  border-radius: ","px;\n  ",";\n  ",";\n"]);return f=function(){return e},e}function d(){var e=p(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  ",";\n  ",";\n  ",";\n"]);return d=function(){return e},e}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var y=(0,o.css)(d(),u.container,i.width,a.buttonHeight);t.container=y,y.defaultProps={width:"100%",height:"tall"};var b=(0,o.css)(f(),function(e){return e.size},function(e){return e.size},function(e){return e.size},i.backgroundColor,function(e){var t=e.focus,r=e.theme;return t&&"box-shadow: 0 0 0 10px ".concat(r.colors.pink,"50;")});t.marker=b,b.label=(0,o.css)(c(),function(e){return e.size},function(e){var t=e.size;return parseInt(t)/2}),b.defaultProps={size:16,bg:"pink"};var m=(0,o.css)(l(),i.height,i.backgroundColor,i.zIndex);t.track=m,m.defaultProps={width:"100%",bg:"pink"}}}]);
//# sourceMappingURL=docs-components-filters~docs-components-slider.53a10b992cebd2505d8d.js.map