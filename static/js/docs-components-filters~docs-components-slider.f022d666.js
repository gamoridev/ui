(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./packages/ui-dom/components/Row/index.js":function(e,t,n){"use strict";var r=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")),s=o(n("./node_modules/styled-components/dist/styled-components.browser.esm.js")),u=r(n("./packages/ui/lib/components/Row/index.js"));function i(){var e=(0,a.default)(["\n  ",";\n"]);return i=function(){return e},e}var l=s.default.div(i(),u.container);t.default=l},"./packages/ui-dom/components/Slider/MarkerHandler.js":function(e,t,n){"use strict";var r=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/classCallCheck.js")),s=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/createClass.js")),u=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/getPrototypeOf.js")),l=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/inherits.js")),d=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/assertThisInitialized.js")),c=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/defineProperty.js")),p=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")),f=r(n("./node_modules/react/index.js")),m=o(n("./node_modules/styled-components/dist/styled-components.browser.esm.js")),h=o(n("./node_modules/react-pose/dist/react-pose.es.js")),b=o(n("./node_modules/react-measure/dist/index.esm.js")),g=n("./packages/ui-dom/node_modules/styled-system/dist/index.esm.js");function y(){var e=(0,p.default)(["\n  cursor: ew-resize;\n  position: absolute;\n  padding: ","px;\n  ",";\n  & > * {\n    transition: box-shadow 250ms ease-in-out;\n  }\n  &:focus {\n    outline: none;\n  }\n  ",";\n"]);return y=function(){return e},e}var v=(0,m.default)(h.default.div({draggable:"x",dragBounds:function(e){var t=e.bounds;return{left:t.left,right:t.right}}}))(y(),function(e){return e.hitSlop},function(e){var t=e.layout,n=e.hitSlop;return t?{left:"-".concat(t.width/2+n,"px")}:{opacity:0}},g.zIndex),k=function(e){function t(){var e,n;(0,a.default)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=(0,u.default)(this,(e=(0,i.default)(t)).call.apply(e,[this].concat(o))),(0,c.default)((0,d.default)((0,d.default)(n)),"state",{layout:void 0,focus:!1}),(0,c.default)((0,d.default)((0,d.default)(n)),"onResize",function(e){var t=e.entry;t&&n.setState({layout:{width:t.width,height:t.height}})}),(0,c.default)((0,d.default)((0,d.default)(n)),"onChange",function(e){var t=n.props,r=t.index,o=t.onSlide;o&&o(r,e)}),(0,c.default)((0,d.default)((0,d.default)(n)),"onDragEnd",function(){var e=n.props.onSlideStop;e&&e()}),(0,c.default)((0,d.default)((0,d.default)(n)),"onFocus",function(){return n.setState({focus:!0})}),(0,c.default)((0,d.default)((0,d.default)(n)),"onBlur",function(){return n.setState({focus:!1})}),(0,c.default)((0,d.default)((0,d.default)(n)),"onKeyPress",function(e){var t=n.props,r=t.step,o=t.bounds,a=t.animatedValues,s=t.incrementKeys,u=t.decrementKeys;if(n.state.focus){var i=a.x.get();if(-1!==s.indexOf(e.keyCode))i+=r;else{if(-1===u.indexOf(e.keyCode))return;i-=r}e.preventDefault(),a.x.update(o.clamp(i))}}),n}return(0,l.default)(t,e),(0,s.default)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.animatedValues;e.position!==this.props.posed&&e.value===this.props.value&&this.props.position!==t.x.get()&&this.props.animatedValues.x.update(this.props.position),e.disabled!==this.props.disabled&&(this.props.disabled?this._unregisterListeners():this._registerListeners())}},{key:"_registerListeners",value:function(){document.addEventListener("keydown",this.onKeyPress)}},{key:"_unregisterListeners",value:function(){document.removeEventListener("keydown",this.onKeyPress)}},{key:"componentDidMount",value:function(){this.props.disabled||this._registerListeners()}},{key:"componentWillUnmount",value:function(){this.props.disabled||this._unregisterListeners()}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.bounds,o=t.hitSlop,a=t.position,s=t.value,u=t.sliderLayout,i=t.index,l=t.disabled,d=t.animatedValues,c=this.state,p=c.layout,m=c.focus,h=(l?-1:i)+this.props.zIndex;return m&&(h+=100),f.default.createElement(b.default,{onResize:this.onResize},function(t){var i=t.measureRef;return f.default.createElement(v,{ref:i,bounds:r,tabIndex:0,zIndex:h,hitSlop:o,layout:p,sliderLayout:u,onValueChange:{x:e.onChange},onDragEnd:e.onDragEnd,onFocus:e.onFocus,onBlur:e.onBlur,values:d},f.default.cloneElement(n,{focus:m,markerState:{position:a,value:s,bounds:r}}))})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{layout:e.layout||t.layout}}}]),t}(f.PureComponent);t.default=k,(0,c.default)(k,"defaultProps",{zIndex:100,hitSlop:15,step:1,incrementKeys:[39,38],decrementKeys:[37,40]})},"./packages/ui-dom/components/Slider/MarkerTrack.js":function(e,t,n){"use strict";var r=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/classCallCheck.js")),s=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/createClass.js")),u=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/getPrototypeOf.js")),l=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/inherits.js")),d=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/assertThisInitialized.js")),c=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/defineProperty.js")),p=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/extends.js")),f=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),m=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")),h=o(n("./node_modules/lodash/identity.js")),b=r(n("./node_modules/react/index.js")),g=o(n("./node_modules/styled-components/dist/styled-components.browser.esm.js")),y=n("./node_modules/popmotion/dist/popmotion.es.js"),v=o(n("./node_modules/react-pose/dist/react-pose.es.js")),k=o(n("./packages/ui-dom/components/Slider/Track.js"));function j(){var e=(0,m.default)(["\n  margin-top: ","px;\n"]);return j=function(){return e},e}var _=(0,g.default)((0,v.default)(b.default.forwardRef(function(e,t){var n=e.style,r=(0,f.default)(e,["style"]);return delete r.x,delete r.offset,b.default.createElement(k.default,(0,p.default)({ref:t,style:Object.assign({position:"absolute"},n)},r))}))({passive:{width:["x",h.default,!0],left:["offset",h.default,!0]}}))(j(),function(e){var t=e.height;return-((parseInt(t)||2)-2)/2}),x=function(e){function t(e){var n;return(0,a.default)(this,t),n=(0,u.default)(this,(0,i.default)(t).call(this,e)),(0,c.default)((0,d.default)((0,d.default)(n)),"_getParentValues",function(){var e=n.props,t=e.x,r=e.offset,o={x:(0,y.value)(t.get()-r.get()),offset:r};return n.unsubscribeFromX=t.subscribe({update:function(e){return o.x.update(e-r.get())}}),n.unsubscribeFromOffset=r.subscribe({update:function(e){return o.x.update(t.get()-e)}}),o}),n.state={values:n._getParentValues()},n}return(0,l.default)(t,e),(0,s.default)(t,[{key:"componentDidUpdate",value:function(e){e.sliderLayout.width!==this.props.sliderLayout.width&&(this.unsubscribeFromX(),this.unsubscribeFromOffset(),this.setState({values:this._getParentValues()}))}},{key:"render",value:function(){var e=(0,p.default)({},this.props),t=this.state.values;return b.default.createElement(_,(0,p.default)({},e,{parentValues:t}))}}]),t}(b.PureComponent);t.default=x},"./packages/ui-dom/components/Slider/SliderTrack.js":function(e,t,n){"use strict";var r=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/extends.js")),s=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/classCallCheck.js")),u=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/createClass.js")),i=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/inherits.js")),c=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/assertThisInitialized.js")),p=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/defineProperty.js")),f=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")),m=r(n("./node_modules/react/index.js")),h=o(n("./node_modules/styled-components/dist/styled-components.browser.esm.js")),b=n("./packages/ui/lib/components/Slider/Context.js"),g=o(n("./packages/ui-dom/components/Row/index.js")),y=o(n("./packages/ui-dom/components/Slider/Track.js")),v=o(n("./packages/ui-dom/components/Slider/MarkerTrack.js")),k=n("./node_modules/popmotion/dist/popmotion.es.js");function j(){var e=(0,f.default)(["\n  position: relative;\n  width: 100%;\n  height: 2px;\n"]);return j=function(){return e},e}var _=(0,h.default)(g.default)(j()),x=(0,k.value)(0),w=function(e){function t(){var e,n;(0,s.default)(this,t);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return n=(0,i.default)(this,(e=(0,l.default)(t)).call.apply(e,[this].concat(o))),(0,p.default)((0,c.default)((0,c.default)(n)),"renderMarkerTrack",function(e,t){var r=e.element.props.trackProps;if(r){var o=t>0?n.props.markers[t-1]:void 0;return m.default.createElement(v.default,(0,a.default)({key:e.key,zIndex:n.props.markers.length-t+1,x:e.state.animatedValues.x,offset:o?o.state.animatedValues.x:x},n.props.trackProps,r))}}),n}return(0,d.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.markers,n=e.trackProps;return m.default.createElement(_,null,t&&t.map(this.renderMarkerTrack),m.default.createElement(y.default,(0,a.default)({zIndex:0},n)))}}]),t}(m.PureComponent);(0,p.default)(w,"defaultProps",{markers:[],sliderLayout:{},trackProps:{}});var S=(0,b.withSliderContext)(function(e){return{markers:e.markers,sliderLayout:e.layout}})(w);t.default=S},"./packages/ui-dom/components/Slider/Track.js":function(e,t,n){"use strict";var r=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")),s=o(n("./node_modules/styled-components/dist/styled-components.browser.esm.js")),u=r(n("./packages/ui/lib/components/Slider/index.js"));function i(){var e=(0,a.default)(["\n  width: 100%;\n  border-radius: 4px;\n  ",";\n"]);return i=function(){return e},e}var l=s.default.div(i(),u.track);l.displayName="SliderTrack",l.defaultProps=u.track.defaultProps;var d=l;t.default=d},"./packages/ui-dom/components/Slider/index.js":function(e,t,n){"use strict";var r=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/extends.js")),s=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),u=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")),i=o(n("./node_modules/react/index.js")),l=o(n("./node_modules/styled-components/dist/styled-components.browser.esm.js")),d=n("./node_modules/popmotion/dist/popmotion.es.js"),c=o(n("./node_modules/react-measure/dist/index.esm.js")),p=r(n("./packages/ui/lib/components/Slider/index.js")),f=o(n("./packages/ui-dom/components/Slider/MarkerHandler.js")),m=o(n("./packages/ui-dom/components/Slider/SliderTrack.js")),h=o(n("./packages/ui-dom/components/View/index.js"));function b(){var e=(0,u.default)(["\n  ",";\n  position: relative;\n"]);return b=function(){return e},e}function g(){var e=(0,u.default)(["\n  ",";\n"]);return g=function(){return e},e}function y(){var e=(0,u.default)(["\n  ",";\n  margin-bottom: 50%;\n  margin-left: -50%;\n  left: ","px;\n"]);return y=function(){return e},e}var v=(0,l.default)(h.default)(y(),p.marker.label,function(e){return e.size});v.displayName="SliderMarkerLabel";var k=(0,l.default)(function(e){var t=e.style,n=e.size,r=e.markerState,o=e.renderLabel,u=(0,s.default)(e,["style","size","markerState","renderLabel"]);return i.default.createElement(h.default,(0,a.default)({style:t},u),o&&i.default.createElement(v,{size:n},o(r)))})(g(),p.marker);k.displayName="SliderMarker",k.defaultProps=p.marker.defaultProps;var j=(0,l.default)(function(e){var t=e.onLayout,n=(0,s.default)(e,["onLayout"]);return i.default.createElement(c.default,{onResize:function(e){var n=e.entry;if(n)return t({width:n.width,height:n.height})}},function(e){var t=e.measureRef;return i.default.createElement(h.default,(0,a.default)({ref:t},n))})})(b(),p.container);j.defaultProps=p.container.defaultProps;var _=(0,p.default)({MarkerHandler:f.default,Marker:k,SliderTrack:m.default,getInitialMarkerState:function(e){var t=e.position;return{animatedValues:{x:(0,d.value)(t)}}}})(j);_.Marker=k;var x=_;t.default=x},"./packages/ui/lib/components/Slider/Context.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withSliderContext=t.Provider=t.Consumer=void 0;var r,o=(r=n("./node_modules/react/index.js"))&&r.__esModule?r:{default:r};function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=o.default.createContext({}),u=s.Consumer,i=s.Provider;t.Provider=i,t.Consumer=u;t.withSliderContext=function(e){return function(t){return function(n){return o.default.createElement(u,null,function(r){return o.default.createElement(t,a({},n,e(r)))})}}}},"./packages/ui/lib/components/Slider/hoc.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n("./node_modules/lodash/fp/flow.js")),o=d(n("./node_modules/lodash/throttle.js")),a=d(n("./node_modules/lodash/identity.js")),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("./node_modules/react/index.js")),u=d(n("./packages/ui/node_modules/prop-types/index.js")),i=d(n("./node_modules/everpolate/lib/everpolate.js")),l=n("./packages/ui/lib/components/Slider/Context.js");function d(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){k(e,t,n[t])})}return e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e,t,n){return Math.max(t,Math.min(n,e))},_=function(e,t,n){t.bounds=function(e,t){return{left:t?t.position:0,right:e[1],clamp:function(e){return j(e,this.left,this.right)}}}(e,n),n&&(n.bounds.right=Math.min(t.position,e[1]))},x=function(e,t){return function(n){return i.default.linear(n,e,t)[0]}};t.default=function(e){var t=e.MarkerHandler,n=e.Marker,i=e.SliderTrack,d=e.getDerivedState,w=e.getInitialMarkerState,S=void 0===w?function(){return{}}:w;return function(e){var w,P;return P=w=function(u){function d(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d);for(var u=arguments.length,i=new Array(u),l=0;l<u;l++)i[l]=arguments[l];return r=this,a=(e=g(d)).call.apply(e,[this].concat(i)),n=!a||"object"!==c(a)&&"function"!==typeof a?v(r):a,k(v(v(n)),"state",n._getInitialState()),k(v(v(n)),"_onChangeCallback",function(){var e=n.props.onChange;e&&e(n.state.markers.reduce(function(e,t){return h({},e,k({},t.key,t.state.value))},{}))}),k(v(v(n)),"_updateBounds",function(){n.setState(function(e){var t=e.markers,r=e.layout;return{markers:t.reduce(function(e,t,o){var a=h({},t,{state:h({},t.state,{position:n._getPositionFromValue(t.state.value)})});return _([0,r.width],a.state,o>0?e[o-1].state:void 0),e.push(a),e},[])}})}),k(v(v(n)),"onSlide",(0,o.default)(function(e,t){n.state.markers[e].position!==t&&n.setState(function(r){var o=r.markers,a=m(o);return a[e]=h({},o[e],{state:h({},o[e].state,{position:t,value:n._getValueFromPosition(t)})}),{markers:a}},n._onChangeCallback)},n.props.slideEventThrottle,{leading:!1,trailing:!0})),k(v(v(n)),"onSlideStop",function(){n.onSlide.flush(),n._updateBounds()}),k(v(v(n)),"onLayout",(0,o.default)(function(e){var t=n.state.markers||n._getInitialMarkerState(e);n.setState({layout:e,markers:t})},n.props.layoutEventThrottle,{leading:!0,trailing:!0})),k(v(v(n)),"renderMarker",function(e){var r=e.key,o=e.index,a=e.element,u=e.state;return s.default.createElement(t,f({},u,{disabled:u.bounds.left==u.bounds.right,key:r,index:o,name:r,onSlide:n.onSlide,onSlideStop:n.onSlideStop,sliderLayout:n.state.layout}),a)}),n}var w,P,O;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(d,s.PureComponent),w=d,(P=[{key:"componentDidUpdate",value:function(e,t){if(e.children&&this.props.children&&e.children.length!==this.props.children.length)throw new Error("Changing Slider children on the fly is not supported.");t.layout&&t.layout.width!==this.state.layout.width&&this._updateBounds()}},{key:"_getInitialState",value:function(){var e=this.props.width,t=Number(e)===e?{width:e}:void 0;return{layout:t,markers:t?this._getInitialMarkerState(t):void 0}}},{key:"_getInitialMarkerState",value:function(e){var t=this,n=this.props.initialValue,r=this.props.range||[0,1],o=[0,e.width],a=x(r,o),u=function(e){if(!isNaN(n))return n||0;if(!(e in n))throw new Error('Undefined initial value for slider marker "'.concat(e,'".'));return n[e]},i=[];return s.default.Children.forEach(this.props.children,function(e,n){if(s.default.isValidElement(e)){var l=e.props.name||n,d=j.apply(void 0,[u(l)].concat(m(r))),c={value:d,position:a(d),layout:t._getMarkerLayout({index:n,key:l,element:e})};_(o,c,n>0?i[n-1].state:void 0),Object.assign(c,S(c));var p={key:l,index:n,element:e,state:c};i.push(p)}}),i}},{key:"_getMarkerLayout",value:function(e){var t=this.props.getMarkerLayout;if(t)return t(e);if(s.default.isValidElement(e.element)&&e.element.type===n){var r=e.element.props.size;return{width:r,height:r}}}},{key:"render",value:function(){var t=this.props,n=t.trackProps,r=p(t,["trackProps"]),o=this.state.markers;return s.default.createElement(l.Provider,{value:this.state},s.default.createElement(e,f({onLayout:this.onLayout},r),o&&o.map(this.renderMarker),s.default.createElement(i,{trackProps:n})))}},{key:"_getValueFromPosition",get:function(){return this.state.layout&&this.props.range?(0,r.default)(x([0,this.state.layout.width],this.props.range),this.props.formatValue):a.default}},{key:"_getPositionFromValue",get:function(){return this.state.layout&&this.props.range?x(this.props.range,[0,this.state.layout.width]):a.default}}])&&b(w.prototype,P),O&&b(w,O),d}(),k(w,"displayName","Slider(".concat(e.displayName||e.name,")")),k(w,"defaultProps",Object.assign({formatValue:a.default,initialValue:0,minDistance:1,slideEventThrottle:50,layoutEventThrottle:50},e.defaultProps||{})),k(w,"propTypes",h({width:u.default.oneOfType([u.default.string,u.default.number]),initialValue:u.default.oneOfType([u.default.number,u.default.array,u.default.object]).isRequired,formatValue:u.default.func,getMarkerLayout:u.default.func,minDistance:u.default.number.isRequired,slideEventThrottle:u.default.number.isRequired,layoutEventThrottle:u.default.number.isRequired},e.propTypes||{})),k(w,"getDerivedStateFromProps",d),P}}},"./packages/ui/lib/components/Slider/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}}),t.track=t.marker=t.container=void 0;var r,o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("./packages/ui/node_modules/styled-system/dist/index.esm.js"),s=n("./packages/ui/lib/styles/index.js"),u=n("./packages/ui/lib/components/Col/index.js"),i=(r=n("./packages/ui/lib/components/Slider/hoc.js"))&&r.__esModule?r:{default:r};function l(){var e=f(["\n  position: relative;\n  height: 2px;\n  ",";\n  ",";\n  ",";\n"]);return l=function(){return e},e}function d(){var e=f(["\n  position: absolute;\n  bottom: ","px;\n  left: ","px;\n"]);return d=function(){return e},e}function c(){var e=f(["\n  width: ","px;\n  height: ","px;\n  border-radius: ","px;\n  ",";\n  ",";\n"]);return c=function(){return e},e}function p(){var e=f(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  ",";\n  ",";\n  ",";\n"]);return p=function(){return e},e}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var m=(0,o.css)(p(),u.container,a.width,s.buttonHeight);t.container=m,m.defaultProps={width:"100%",height:"tall"};var h=(0,o.css)(c(),function(e){return e.size},function(e){return e.size},function(e){return e.size},a.backgroundColor,function(e){var t=e.focus,n=e.theme,r=e.bg;return t&&"box-shadow: 0 0 0 10px ".concat(n.colors[r],"50;")});t.marker=h,h.label=(0,o.css)(d(),function(e){return e.size},function(e){var t=e.size;return parseInt(t)/2}),h.defaultProps={size:16,bg:"pink"};var b=(0,o.css)(l(),a.height,a.backgroundColor,a.zIndex);t.track=b,b.defaultProps={width:"100%",bg:"pink"}}}]);
//# sourceMappingURL=docs-components-filters~docs-components-slider.a9ddeb7e859d14913164.js.map