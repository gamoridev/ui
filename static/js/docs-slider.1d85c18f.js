(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docs/slider.mdx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),u=n("./packages/ui-dom/components/Slider/index.js"),s=n.n(u),l=n("./packages/ui-dom/components/View/index.js"),c=n.n(l),d=n("./packages/ui-dom/components/Row/index.js"),f=n.n(d),p=n("./packages/ui-dom/components/Text/index.js"),m=n.n(p),y=function(e){var t=e.children;return o.a.createElement(f.a,{bg:"white",width:60,height:30,justifyContent:"center",alignItems:"center",style:{borderRadius:4,borderWidth:1,borderColor:"#f50057",marginBottom:5,transform:[{translateX:-30}]}},o.a.createElement(m.a,{fontSize:"small",color:"pink"},t))};function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}y.__docgenInfo={description:"",methods:[],displayName:"MarkerLabel"};t.default=function(e){var t=e.components,n=b(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"slider"}},"Slider"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Slider component."),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"basic-usage"}},"Basic usage"),o.a.createElement(i.Playground,{__position:0,__code:'<View m={4}>\n  <Slider\n    onChange={console.log}\n    range={[0, 1]}\n    initialValue={{\n      min: 0,\n      max: 1,\n    }}\n  >\n    <Slider.Marker name="min" />\n    <Slider.Marker name="max" />\n  </Slider>\n</View>',__scope:{props:n,Slider:s.a,View:c.a,MarkerLabel:y}},o.a.createElement(c.a,{m:4},o.a.createElement(s.a,{onChange:console.log,range:[0,1],initialValue:{min:0,max:1}},o.a.createElement(s.a.Marker,{name:"min"}),o.a.createElement(s.a.Marker,{name:"max"})))),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"fixed-width"}},"Fixed width"),o.a.createElement(i.Playground,{__position:1,__code:'<View m={4}>\n  <Slider\n    width={200}\n    onChange={console.log}\n    range={[0, 1]}\n    initialValue={{\n      min: 0,\n      max: 1,\n    }}\n  >\n    <Slider.Marker name="min" />\n    <Slider.Marker name="max" />\n  </Slider>\n</View>',__scope:{props:n,Slider:s.a,View:c.a,MarkerLabel:y}},o.a.createElement(c.a,{m:4},o.a.createElement(s.a,{width:200,onChange:console.log,range:[0,1],initialValue:{min:0,max:1}},o.a.createElement(s.a.Marker,{name:"min"}),o.a.createElement(s.a.Marker,{name:"max"})))),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"track-and-marker-styles"}},"Track and marker styles"),o.a.createElement(i.Playground,{__position:2,__code:"<View mb=\"25px\">\n  <Slider\n    range={[0, 1]}\n    initialValue={1 / 2}\n    trackProps={{ bg: 'lightGrey' }}\n  >\n    <Slider.Marker trackProps={{ height: 4, bg: 'pink' }} />\n  </Slider>\n</View>\n<View mb=\"25px\">\n  <Slider\n    range={[0, 1]}\n    initialValue={[1 / 4, 3 / 4]}\n    trackProps={{ bg: 'lightGrey' }}\n  >\n    <View\n      bg=\"pink\"\n      width={25}\n      height={25}\n      borderRadius={5}\n      trackProps={{ bg: 'pink' }}\n    />\n    <View\n      bg=\"blue\"\n      width={25}\n      height={25}\n      borderRadius={5}\n      trackProps={{ bg: 'blue' }}\n    />\n  </Slider>\n</View>",__scope:{props:n,Slider:s.a,View:c.a,MarkerLabel:y}},o.a.createElement(c.a,{mb:"25px"},o.a.createElement(s.a,{range:[0,1],initialValue:.5,trackProps:{bg:"lightGrey"}},o.a.createElement(s.a.Marker,{trackProps:{height:4,bg:"pink"}}))),o.a.createElement(c.a,{mb:"25px"},o.a.createElement(s.a,{range:[0,1],initialValue:[.25,.75],trackProps:{bg:"lightGrey"}},o.a.createElement(c.a,{bg:"pink",width:25,height:25,borderRadius:5,trackProps:{bg:"pink"}}),o.a.createElement(c.a,{bg:"blue",width:25,height:25,borderRadius:5,trackProps:{bg:"blue"}})))),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"marker-labels"}},"Marker labels"),o.a.createElement(i.Playground,{__position:3,__code:'<View flexDirection="column">\n  <Slider range={[0, 100]} initialValue={[0, 100]}>\n    <Slider.Marker\n      renderLabel={({ value }) => (\n        <MarkerLabel>{value.toFixed(2)}</MarkerLabel>\n      )}\n    />\n    <Slider.Marker\n      renderLabel={({ value }) => (\n        <MarkerLabel>{value.toFixed(2)}</MarkerLabel>\n      )}\n    />\n  </Slider>\n</View>',__scope:{props:n,Slider:s.a,View:c.a,MarkerLabel:y}},o.a.createElement(c.a,{flexDirection:"column"},o.a.createElement(s.a,{range:[0,100],initialValue:[0,100]},o.a.createElement(s.a.Marker,{renderLabel:function(e){var t=e.value;return o.a.createElement(y,null,t.toFixed(2))}}),o.a.createElement(s.a.Marker,{renderLabel:function(e){var t=e.value;return o.a.createElement(y,null,t.toFixed(2))}})))))}},"./packages/ui-dom/components/Slider/MarkerHandler.js":function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("./node_modules/react/index.js")),a=l(n("./node_modules/styled-components/dist/styled-components.browser.esm.js")),i=l(n("./node_modules/react-pose/dist/react-pose.es.js")),u=l(n("./node_modules/react-measure/dist/index.esm.js")),s=n("./node_modules/styled-system/dist/index.esm.js");function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  cursor: ew-resize;\n  position: absolute;\n  padding: ","px;\n  ",";\n  & > * {\n    transition: box-shadow 250ms ease-in-out;\n  }\n  &:focus {\n    outline: none;\n  }\n  ",";\n"]);return b=function(){return e},e}var h=(0,a.default)(i.default.div({draggable:"x",dragBounds:function(e){var t=e.bounds;return{left:t.left,right:t.right}}}))(b(),function(e){return e.hitSlop},function(e){var t=e.layout,n=e.hitSlop;return t?{left:"-".concat(t.width/2+n,"px")}:{opacity:0}},s.zIndex),v=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return r=this,o=(e=f(t)).call.apply(e,[this].concat(i)),y(m(m(n=!o||"object"!==c(o)&&"function"!==typeof o?m(r):o)),"state",{layout:void 0,focus:!1}),y(m(m(n)),"onResize",function(e){var t=e.entry;return n.setState({layout:{width:t.width,height:t.height}})}),y(m(m(n)),"onChange",function(e){var t=n.props,r=t.index,o=t.onSlide;o&&o(r,e)}),y(m(m(n)),"onDragEnd",function(){var e=n.props.onSlideStop;e&&e()}),y(m(m(n)),"onFocus",function(){return n.setState({focus:!0})}),y(m(m(n)),"onBlur",function(){return n.setState({focus:!1})}),y(m(m(n)),"onKeyPress",function(e){var t=n.props,r=t.step,o=t.bounds,a=t.animatedValues,i=t.incrementKeys,u=t.decrementKeys;if(n.state.focus){var s=a.x.get();if(-1!==i.indexOf(e.keyCode))s+=r;else{if(-1===u.indexOf(e.keyCode))return;s-=r}e.preventDefault(),a.x.update(o.clamp(s))}}),n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.PureComponent),n=t,a=[{key:"getDerivedStateFromProps",value:function(e,t){return{layout:e.layout||t.layout}}}],(r=[{key:"componentDidUpdate",value:function(e){var t=this.props.animatedValues;e.position!==this.props.posed&&e.value===this.props.value&&this.props.position!==t.x.get()&&this.props.animatedValues.x.update(this.props.position),e.disabled!==this.props.disabled&&(this.props.disabled?this._unregisterListeners():this._registerListeners())}},{key:"_registerListeners",value:function(){document.addEventListener("keydown",this.onKeyPress)}},{key:"_unregisterListeners",value:function(){document.removeEventListener("keydown",this.onKeyPress)}},{key:"componentDidMount",value:function(){this.props.disabled||this._registerListeners()}},{key:"componentWillUnmount",value:function(){this.props.disabled||this._unregisterListeners()}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.bounds,a=t.hitSlop,i=t.position,s=t.value,l=t.sliderLayout,c=t.index,d=t.zIndex,f=t.animatedValues,p=this.state,m=p.layout,y=p.focus;return o.default.createElement(u.default,{onResize:this.onResize},function(t){var u=t.measureRef;return o.default.createElement(h,{innerRef:u,bounds:r,tabIndex:0,zIndex:c+d,hitSlop:a,layout:m,sliderLayout:l,onValueChange:{x:e.onChange},onDragEnd:e.onDragEnd,onFocus:e.onFocus,onBlur:e.onBlur,values:f},o.default.cloneElement(n,{focus:y,markerState:{position:i,value:s,bounds:r}}))})}}])&&d(n.prototype,r),a&&d(n,a),t}();t.default=v,y(v,"defaultProps",{zIndex:100,hitSlop:15,step:1,incrementKeys:[39,38],decrementKeys:[37,40]})},"./packages/ui-dom/components/Slider/MarkerTrack.js":function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n("./node_modules/lodash/identity.js")),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("./node_modules/react/index.js")),i=c(n("./node_modules/styled-components/dist/styled-components.browser.esm.js")),u=n("./node_modules/popmotion/dist/popmotion.es.js"),s=c(n("./node_modules/react-pose/dist/react-pose.es.js")),l=c(n("./packages/ui-dom/components/Slider/Track.js"));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  position: absolute;\n  margin-top: ","px;\n"]);return h=function(){return e},e}var v=(0,i.default)((0,s.default)(a.default.forwardRef(function(e,t){return a.default.createElement(l.default,b({innerRef:t},e))}))({passive:{width:["x",o.default,!0],left:["offset",o.default,!0]}}))(h(),function(e){var t=e.height;return-((parseInt(t)||2)-2)/2}),g=function(e){function t(e){var n,r,o,a,i,s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=p(t).call(this,e),n=!o||"object"!==d(o)&&"function"!==typeof o?y(r):o,a=y(y(n)),s=function(){var e=n.props,t=e.x,r=e.offset,o={x:(0,u.value)(t.get()-r.get()),offset:r};return n.unsubscribeFromX=t.subscribe({update:function(e){return o.x.update(e-r.get())}}),n.unsubscribeFromOffset=r.subscribe({update:function(e){return o.x.update(t.get()-e)}}),o},(i="_getParentValues")in a?Object.defineProperty(a,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[i]=s,n.state={values:n._getParentValues()},n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,a.PureComponent),n=t,(r=[{key:"componentDidUpdate",value:function(e){e.sliderLayout.width!==this.props.sliderLayout.width&&(this.unsubscribeFromX(),this.unsubscribeFromOffset(),this.setState({values:this._getParentValues()}))}},{key:"render",value:function(){var e=b({},this.props),t=this.state.values;return a.default.createElement(v,b({},e,{parentValues:t}))}}])&&f(n.prototype,r),o&&f(n,o),t}();t.default=g},"./packages/ui-dom/components/Slider/SliderTrack.js":function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("./node_modules/react/index.js")),a=d(n("./node_modules/styled-components/dist/styled-components.browser.esm.js")),i=n("./packages/ui/lib/components/Slider/Context.js"),u=d(n("./packages/ui-dom/components/Row/index.js")),s=d(n("./packages/ui-dom/components/Slider/Track.js")),l=d(n("./packages/ui-dom/components/Slider/MarkerTrack.js")),c=n("./node_modules/popmotion/dist/popmotion.es.js");function d(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  position: relative;\n  width: 100%;\n  height: 2px;\n"]);return g=function(){return e},e}var k=(0,a.default)(u.default)(g()),j=(0,c.value)(0),O=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,u=new Array(i),s=0;s<i;s++)u[s]=arguments[s];return r=this,a=(e=y(t)).call.apply(e,[this].concat(u)),v(h(h(n=!a||"object"!==f(a)&&"function"!==typeof a?h(r):a)),"renderMarkerTrack",function(e,t){var r=e.element.props.trackProps;if(r){var a=t>0?n.props.markers[t-1]:void 0;return o.default.createElement(l.default,p({key:e.key,zIndex:n.props.markers.length-t+1,x:e.state.animatedValues.x,offset:a?a.state.animatedValues.x:j},n.props.trackProps,r))}}),n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o.PureComponent),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.markers,n=e.trackProps;return o.default.createElement(k,null,t&&t.map(this.renderMarkerTrack),o.default.createElement(s.default,p({zIndex:0},n)))}}])&&m(n.prototype,r),a&&m(n,a),t}();v(O,"defaultProps",{markers:[],sliderLayout:{},trackProps:{}});var w=(0,i.withSliderContext)(function(e){return{markers:e.markers,sliderLayout:e.layout}})(O);t.default=w},"./packages/ui-dom/components/Slider/Track.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"))&&r.__esModule?r:{default:r},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("./packages/ui/lib/components/Slider/index.js"));function i(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  width: 100%;\n  border-radius: 4px;\n  ",";\n"]);return i=function(){return e},e}var u=o.default.div(i(),a.track);u.displayName="SliderTrack",u.defaultProps=a.track.defaultProps;var s=u;t.default=s},"./packages/ui-dom/components/Slider/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n("./node_modules/react/index.js")),o=d(n("./node_modules/styled-components/dist/styled-components.browser.esm.js")),a=n("./node_modules/popmotion/dist/popmotion.es.js"),i=d(n("./node_modules/react-measure/dist/index.esm.js")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("./packages/ui/lib/components/Slider/index.js")),s=d(n("./packages/ui-dom/components/Slider/MarkerHandler.js")),l=d(n("./packages/ui-dom/components/Slider/SliderTrack.js")),c=d(n("./packages/ui-dom/components/View/index.js"));function d(e){return e&&e.__esModule?e:{default:e}}function f(){var e=h(["\n  ",";\n  position: relative;\n"]);return f=function(){return e},e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(){var e=h(["\n  ",";\n"]);return y=function(){return e},e}function b(){var e=h(["\n  ",";\n  margin-bottom: 50%;\n  margin-left: -50%;\n  left: ","px;\n"]);return b=function(){return e},e}function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var v=(0,o.default)(c.default)(b(),u.marker.label,function(e){return e.size});v.displayName="SliderMarkerLabel";var g=(0,o.default)(function(e){var t=e.style,n=e.size,o=e.markerState,a=e.renderLabel,i=m(e,["style","size","markerState","renderLabel"]);return r.default.createElement(c.default,p({style:t},i),a&&r.default.createElement(v,{size:n},a(o)))})(y(),u.marker);g.displayName="SliderMarker",g.defaultProps=u.marker.defaultProps;var k=(0,o.default)(function(e){var t=e.onLayout,n=m(e,["onLayout"]);return r.default.createElement(i.default,{onResize:function(e){var n=e.entry;return t({width:n.width,height:n.height})}},function(e){var t=e.measureRef;return r.default.createElement(c.default,p({innerRef:t},n))})})(f(),u.container);k.defaultProps=u.container.defaultProps;var j=(0,u.default)({MarkerHandler:s.default,Marker:g,SliderTrack:l.default,getInitialMarkerState:function(e){var t=e.position;return{animatedValues:{x:(0,a.value)(t)}}}})(k);j.Marker=g;var O=j;t.default=O},"./packages/ui/lib/components/Slider/Context.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withSliderContext=t.Provider=t.Consumer=void 0;var r,o=(r=n("./node_modules/react/index.js"))&&r.__esModule?r:{default:r};function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=o.default.createContext({}),u=i.Consumer,s=i.Provider;t.Provider=s,t.Consumer=u;t.withSliderContext=function(e){return function(t){return function(n){return o.default.createElement(u,null,function(r){return o.default.createElement(t,a({},n,e(r)))})}}}},"./packages/ui/lib/components/Slider/hoc.js":function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n("./node_modules/lodash/throttle.js")),a=c(n("./node_modules/lodash/identity.js")),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("./node_modules/react/index.js")),u=c(n("./node_modules/prop-types/index.js")),s=c(n("./node_modules/everpolate/lib/everpolate.js")),l=n("./packages/ui/lib/components/Slider/Context.js");function c(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){k(e,t,n[t])})}return e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e,t,n){return Math.max(t,Math.min(n,e))},O=function(e,t,n){t.bounds=function(e,t){return{left:t?t.position:0,right:e[1],clamp:function(e){return j(e,this.left,this.right)}}}(e,n),n&&(n.bounds.right=Math.min(t.position,e[1]))},w=function(e,t){return function(n){return s.default.linear(n,e,t)[0]}};t.default=function(e){var t=e.MarkerHandler,n=e.Marker,r=e.SliderTrack,s=e.getDerivedState,c=e.getInitialMarkerState,_=void 0===c?function(){return{}}:c;return function(e){var c,S;return S=c=function(u){function s(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);for(var u=arguments.length,l=new Array(u),c=0;c<u;c++)l[c]=arguments[c];return r=this,a=(e=h(s)).call.apply(e,[this].concat(l)),k(g(g(n=!a||"object"!==d(a)&&"function"!==typeof a?g(r):a)),"state",n._getInitialState()),k(g(g(n)),"_onChangeCallback",function(){var e=n.props.onChange;e&&e(n.state.markers.reduce(function(e,t){return y({},e,k({},t.key,t.state.value))},{}))}),k(g(g(n)),"_updateBounds",function(){n.setState(function(e){var t=e.markers,r=e.layout;return{markers:t.reduce(function(e,t,o){var a=y({},t,{state:y({},t.state,{position:n._getPositionFromValue(t.state.value)})});return O([0,r.width],a.state,o>0?e[o-1].state:void 0),e.push(a),e},[])}})}),k(g(g(n)),"onSlide",(0,o.default)(function(e,t){n.state.markers[e].position!==t&&n.setState(function(r){var o=r.markers,a=m(o);return a[e]=y({},o[e],{state:y({},o[e].state,{position:t,value:n._getValueFromPosition(t)})}),{markers:a}},n._onChangeCallback)},n.props.slideEventThrottle,{leading:!1,trailing:!0})),k(g(g(n)),"onSlideStop",function(){n.onSlide.flush(),n._updateBounds()}),k(g(g(n)),"onLayout",(0,o.default)(function(e){var t=n.state.markers||n._getInitialMarkerState(e);n.setState({layout:e,markers:t})},n.props.layoutEventThrottle,{leading:!0,trailing:!0})),k(g(g(n)),"renderMarker",function(e){var r=e.key,o=e.index,a=e.element,u=e.state;return i.default.createElement(t,p({},u,{key:r,index:o,name:r,onSlide:n.onSlide,onSlideStop:n.onSlideStop,sliderLayout:n.state.layout}),a)}),n}var c,S,P;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(s,i.PureComponent),c=s,(S=[{key:"componentDidUpdate",value:function(e,t){if(e.children&&this.props.children&&e.children.length!==this.props.children.length)throw new Error("Changing Slider children on the fly is not supported.");t.layout&&t.layout.width!==this.state.layout.width&&this._updateBounds()}},{key:"_getInitialState",value:function(){var e=this.props.width,t=Number(e)===e?{width:e}:void 0;return{layout:t,markers:t?this._getInitialMarkerState(t):void 0}}},{key:"_getInitialMarkerState",value:function(e){var t=this,n=this.props.initialValue,r=this.props.range||[0,1],o=[0,e.width],a=w(r,o),u=[];return i.default.Children.forEach(this.props.children,function(e,s){if(i.default.isValidElement(e)){var l=e.props.name||s,c=j.apply(void 0,[function(e){if(!isNaN(n))return n||0;if(!(e in n))throw new Error('Undefined initial value for slider marker "'.concat(e,'".'));return n[e]}(l)].concat(m(r))),d={value:c,position:a(c),layout:t._getMarkerLayout({index:s,key:l,element:e})};O(o,d,s>0?u[s-1].state:void 0),Object.assign(d,_(d));var f={key:l,index:s,element:e,state:d};u.push(f)}}),u}},{key:"_getMarkerLayout",value:function(e){var t=this.props.getMarkerLayout;if(t)return t(e);if(i.default.isValidElement(e.element)&&e.element.type===n){var r=e.element.props.size;return{width:r,height:r}}}},{key:"render",value:function(){var t=this.props,n=t.trackProps,o=f(t,["trackProps"]),a=this.state.markers;return i.default.createElement(l.Provider,{value:this.state},i.default.createElement(e,p({onLayout:this.onLayout},o),a&&a.map(this.renderMarker),i.default.createElement(r,{trackProps:n})))}},{key:"_getValueFromPosition",get:function(){return this.state.layout&&this.props.range?w([0,this.state.layout.width],this.props.range):a.default}},{key:"_getPositionFromValue",get:function(){return this.state.layout&&this.props.range?w(this.props.range,[0,this.state.layout.width]):a.default}}])&&b(c.prototype,S),P&&b(c,P),s}(),k(c,"displayName","Slider(".concat(e.displayName||e.name,")")),k(c,"defaultProps",y({initialValue:0,minDistance:1,slideEventThrottle:50,layoutEventThrottle:50},e.defaultProps||{})),k(c,"propTypes",y({width:u.default.oneOfType([u.default.string,u.default.number]),initialValue:u.default.oneOfType([u.default.number,u.default.array,u.default.object]).isRequired,getMarkerLayout:u.default.func,minDistance:u.default.number.isRequired,slideEventThrottle:u.default.number.isRequired,layoutEventThrottle:u.default.number.isRequired},e.propTypes||{})),k(c,"getDerivedStateFromProps",s),S}}},"./packages/ui/lib/components/Slider/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s.default}}),t.track=t.marker=t.container=void 0;var r,o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("./node_modules/styled-system/dist/index.esm.js"),i=n("./packages/ui/lib/styles/index.js"),u=n("./packages/ui/lib/components/Col/index.js"),s=(r=n("./packages/ui/lib/components/Slider/hoc.js"))&&r.__esModule?r:{default:r};function l(){var e=p(["\n  position: relative;\n  height: 2px;\n  ",";\n  ",";\n  ",";\n"]);return l=function(){return e},e}function c(){var e=p(["\n  position: absolute;\n  bottom: ","px;\n  left: ","px;\n"]);return c=function(){return e},e}function d(){var e=p(["\n  width: ","px;\n  height: ","px;\n  border-radius: ","px;\n  ",";\n  ",";\n"]);return d=function(){return e},e}function f(){var e=p(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  ",";\n  ",";\n  ",";\n"]);return f=function(){return e},e}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var m=(0,o.css)(f(),u.container,a.width,i.buttonHeight);t.container=m,m.defaultProps={width:"100%",height:"tall"};var y=(0,o.css)(d(),function(e){return e.size},function(e){return e.size},function(e){return e.size},a.bgColor,function(e){var t=e.focus,n=e.theme;return t&&"box-shadow: 0 0 0 10px ".concat(n.colors.pink,"50;")});t.marker=y,y.label=(0,o.css)(c(),function(e){return e.size},function(e){var t=e.size;return parseInt(t)/2}),y.defaultProps={size:16,bg:"pink"};var b=(0,o.css)(l(),a.height,a.bgColor,a.zIndex);t.track=b,b.defaultProps={width:"100%",bg:"pink"}}}]);