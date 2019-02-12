(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docs/components/breakpoint.mdx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),p=n("./packages/ui-dom/components/Breakpoint/index.js"),u=n.n(p),s=n("./packages/ui-dom/components/Text/index.js"),c=n.n(s),l=n("./packages/ui-dom/components/View/index.js"),d=n.n(l);function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components,n=f(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"breakpoint"}},"Breakpoint"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Renders children when breakpoint requirements are met"),o.a.createElement(i.Playground,{__position:0,__code:'<Breakpoint only="phone">\n  <Text>Only phone</Text>\n</Breakpoint>\n<Breakpoint down="tablet">\n  <Text>Tablet & Phone</Text>\n</Breakpoint>\n<Breakpoint up="desktop">\n  <Text>Desktop</Text>\n</Breakpoint>',__scope:{props:n,Breakpoint:u.a,BreakpointProvider:p.BreakpointProvider,Text:c.a,View:d.a}},o.a.createElement(u.a,{only:"phone"},o.a.createElement(c.a,null,"Only phone")),o.a.createElement(u.a,{down:"tablet"},o.a.createElement(c.a,null,"Tablet & Phone")),o.a.createElement(u.a,{up:"desktop"},o.a.createElement(c.a,null,"Desktop"))),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"breakpointprovider"}},"BreakpointProvider"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Returns current breakpoint"),o.a.createElement(i.Playground,{__position:1,__code:"<BreakpointProvider>\n  {({ breakpoint }) => <Text>{breakpoint}</Text>}\n</BreakpointProvider>",__scope:{props:n,Breakpoint:u.a,BreakpointProvider:p.BreakpointProvider,Text:c.a,View:d.a}},o.a.createElement(p.BreakpointProvider,null,function(e){var t=e.breakpoint;return o.a.createElement(c.a,null,t)})),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"withbreakpoint"}},"withBreakpoint"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Wraps the target component in a ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"BreakpointProvider")," and passes the resulting ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"breakpoint")," to props"))}},"./packages/ui-dom/components/Breakpoint/index.js":function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withBreakpoint=t.BreakpointProvider=t.getBreakpoint=t.default=t.BreakpointType=void 0;var o,a,i=m(n("./node_modules/lodash/debounce.js")),p=m(n("./node_modules/lodash/isFunction.js")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("./node_modules/react/index.js")),s=m(n("./node_modules/prop-types/index.js")),c=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=n("./packages/ui/src/styles/index.js"),d=m(n("./node_modules/react-responsive/dist/react-responsive.js")),f=n("./packages/ui/src/theme/measures.js");function m(e){return e&&e.__esModule?e:{default:e}}function b(e){return(b="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,p=e[Symbol.iterator]();!(r=(i=p.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==p.return||p.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return t&&k(e.prototype,t),n&&k(e,n),e}function _(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=s.default.oneOfType([s.default.oneOf(f.BREAKPOINTS.keys()),s.default.number]);t.BreakpointType=T;var B=(0,c.withTheme)((a=o=function(e){function t(){return v(this,t),_(this,E(t).apply(this,arguments))}return O(t,u.PureComponent),w(t,[{key:"render",value:function(){for(var e,t=this.props,n=t.children,r=t.theme,o=["only","up","down"],a=0;a<o.length;a++){var i=o[a];if(this.props[i]){e=l.breakpoint[i](this.props[i])({theme:r});break}}return u.default.createElement(d.default,{query:e},n)}}]),t}(),P(o,"propTypes",{up:T,down:T,only:T}),a));t.default=B;var x=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.innerWidth||document.documentElement.clientWidth,n=f.BREAKPOINTS[Symbol.iterator](),r=!0,o=!1,a=void 0;try{for(var i,p=n[Symbol.iterator]();!(r=(i=p.next()).done);r=!0){var u=h(i.value,2),s=u[0],c=u[1];if(parseInt(c)>=t)break;e=s}}catch(e){o=!0,a=e}finally{try{r||null==p.return||p.return()}finally{if(o)throw a}}return e};t.getBreakpoint=x;var S=function(e){function t(e){var n;return v(this,t),P(g(g(n=_(this,E(t).call(this,e)))),"state",{breakpoint:void 0}),P(g(g(n)),"_addEvents",function(){window.addEventListener("resize",n.update)}),P(g(g(n)),"_removeEvents",function(){window.removeEventListener("resize",n.update)}),P(g(g(n)),"_update",function(){return n.setState({breakpoint:x()})}),n.update=(0,i.default)(n._update,e.debounce),e.disabled||(n.state.breakpoint=x()),n}return O(t,u.PureComponent),w(t,[{key:"componentDidUpdate",value:function(e){e.debounce!==this.props.debounce?(this._removeEvents(),this.update.cancel(),this.update=(0,i.default)(this._update,this.props.debounce),this._addEvents()):e.disabled!==this.props.disabled&&(this.props.disabled?this._removeEvents():this._addEvents())}},{key:"componentDidMount",value:function(){this.props.disabled||this._addEvents()}},{key:"componentWillUnmount",value:function(){this.props.disabled||this._removeEvents()}},{key:"render",value:function(){return this.props.children(this.state)}}]),t}();t.BreakpointProvider=S,P(S,"propTypes",{children:s.default.func.isRequired,debounce:s.default.number.isRequired,disabled:s.default.bool}),P(S,"defaultProps",{debounce:150});t.withBreakpoint=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){return u.default.createElement(S,(0,p.default)(e)?e(n):e,function(e){return u.default.createElement(t,y({},n,e))})}}}}}]);