(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./docs/components/input.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),i=n("./node_modules/docz/dist/index.esm.js"),a=n("./packages/ui-dom/components/Col/index.js"),s=n.n(a),u=n("./packages/ui-dom/components/Row/index.js"),l=n.n(u),c=n("./packages/ui-dom/components/Input/index.js"),p=n.n(c),d={},f="wrapper";function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(f,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"input"},"Input"),Object(o.b)("p",null,"Text input."),Object(o.b)("h2",{id:"basic-usage"},"Basic usage"),Object(o.b)(i.c,{__position:0,__code:'<Col mb={2}>\n  <Input label="Label" placeholder="Input with label" />\n</Col>\n<Col mb={2}>\n  <Input placeholder="Error" error="Invalid input!" />\n</Col>\n<Col mb={2}>\n  <Input\n    hideLabelView\n    hideErrorView\n    placeholder="Input without label or error views"\n  />\n</Col>\n<Col mb={2}>\n  <Input\n    fluid={false}\n    label="This input is not fluid"\n    placeholder="Placeholder text"\n  />\n</Col>\n<Col>\n  <Input area label="Enter a lot of text" placeholder="A textarea" />\n</Col>',__scope:{props:this?this.props:n,Playground:i.c,Col:s.a,Row:l.a,Input:p.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZHCgdDZXaAABGAiDiCpJFCCBLUiAF030OBJEI3CIPYEVRmIuVyMo_xXBouirUY9caBYriRnY_DGlQGZwh4siKKowTaPor5PjEggWIaOTwmk9VOM1RTTUVMFUF0FFjlOLDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnbyABZAvYAA2QLgvWMBgIAMW9aBEm8_hnEOBEHUwGChH4JYiGoSg4DChEkurFKaGcCAsMudgAEYopC-RzMsqYAEE5ic9gIyg8gbCgdAw1QjknLEQboxkdgUQcmBuGAbC7KWuB5C3GtgBG6BxuCAAyQ7xkSeZKGaPaxom7hbrlMBkMlAZUHadgAH4Nn2sMIymq4roO1BOurKQZCrN8zBhQzMDAMIoCmH7ptm4G-uXasE0DSUcFSzIUivAhtprVdKCIogPBWgAmLaV0JxhdPkqY4MCKA-BAAAZVwmf4Ps4IRYYxoyFm6YU_M8UZ-cuc3ana1Y4mCZrRhCPYUmKaptHCdrIWpjJCUYD5qcWbPAQhAELmMmNwXUFYeIuE4PSCAAQgluXt0I52iZJsngEpt2E01qXCZsTB2aZgA1CAYBGf2a0DmBDeNsOI6jixtd54n9f4TW81xfZ2DFoihWhI2C9YcORjgfgo8ltWXdlqWFeJpXPe9qPabtpPDSgWieGAGGoDgGAgfV9W85Z6xbFt-nODsVARA7ruK-r9WU91tOBf4WCdb1jJxmwUQQErt2pFduvj8X327ZCU1c45-cDb0I5XFz2eLp3rA9-5zfV4EFmetfghXFNE7OuMsoByykBjAgWMcZ422lIFGYMzBfhAFVbYrg0j_jgNQQCugQIGDAq5as_BUDekZEgdg_AfjFmqBkc0P4ySkJChYfgrAMj5GoPwK4_AfI4G4T5Eq6x-DlHIP0GY3Z_RkP4L_fIv5oRYG9PQ44MAySUESLmPIBQJyanNJQv4pZ-GEJAFENAHDyEqHDBocuIBGGmMwPMcMFlw6WKuAQwmgibImP4C1HA5MeH6NcYITUHiQAtTijgAAHDgOKfiaz8FMhaK0QSQnhMiQvCwQN5BIKod4D41BIApAwVg7QOD9AMFciAWgPosgcIoaaWg5o4nmlmDMfgGT5BtKAA",mdxType:"Playground"},Object(o.b)(s.a,{mb:2,mdxType:"Col"},Object(o.b)(p.a,{label:"Label",placeholder:"Input with label",mdxType:"Input"})),Object(o.b)(s.a,{mb:2,mdxType:"Col"},Object(o.b)(p.a,{placeholder:"Error",error:"Invalid input!",mdxType:"Input"})),Object(o.b)(s.a,{mb:2,mdxType:"Col"},Object(o.b)(p.a,{hideLabelView:!0,hideErrorView:!0,placeholder:"Input without label or error views",mdxType:"Input"})),Object(o.b)(s.a,{mb:2,mdxType:"Col"},Object(o.b)(p.a,{fluid:!1,label:"This input is not fluid",placeholder:"Placeholder text",mdxType:"Input"})),Object(o.b)(s.a,{mdxType:"Col"},Object(o.b)(p.a,{area:!0,label:"Enter a lot of text",placeholder:"A textarea",mdxType:"Input"}))))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/components/input.mdx"}}),m.isMDXComponent=!0},"./packages/ui-dom/components/Col/index.js":function(e,t,n){"use strict";var r=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")),a=o(n("./node_modules/styled-components/dist/styled-components.browser.esm.js")),s=r(n("./packages/ui/lib/components/Col/index.js"));function u(){var e=(0,i.default)(["\n  ",";\n"]);return u=function(){return e},e}var l=a.default.div(u(),s.container);l.propTypes=s.container.propTypes;var c=l;t.default=c},"./packages/ui-dom/components/Field/index.js":function(e,t,n){"use strict";var r=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/extends.js")),a=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")),u=o(n("./node_modules/react/index.js")),l=o(n("./node_modules/styled-components/dist/styled-components.browser.esm.js")),c=r(n("./packages/ui/lib/components/Field/index.js")),p=o(n("./packages/ui-dom/components/View/index.js")),d=o(n("./packages/ui-dom/components/Text/index.js"));function f(){var e=(0,s.default)(["\n  display: block;\n  ",";\n  ",";\n"]);return f=function(){return e},e}function m(){var e=(0,s.default)(["\n  display: block;\n  ",";\n  ",";\n"]);return m=function(){return e},e}var b=(0,l.default)(d.default).attrs({inline:!0})(m(),c.textContainer,c.label),y=(0,l.default)(d.default).attrs({inline:!0})(f(),c.textContainer,c.error);function g(e){var t=e.hideLabelView,n=e.hideErrorView,r=e.label,o=e.error,s=e.children,l=e.Component,c=e.fowardedRef,d=(0,a.default)(e,["hideLabelView","hideErrorView","label","error","children","Component","fowardedRef"]),f={};return c&&(f.ref=c),u.default.createElement(p.default,null,!t&&u.default.createElement(b,null,r),l?u.default.createElement(l,(0,i.default)({},f,d)):s,!n&&u.default.createElement(y,null,o))}g.propTypes=c.container.propTypes,g.defaultProps=c.container.defaultProps;var j=g;t.default=j},"./packages/ui-dom/components/Input/index.js":function(e,t,n){"use strict";var r=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/objectSpread.js")),a=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")),s=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/extends.js")),u=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=o(n("./node_modules/react/index.js")),c=o(n("./node_modules/styled-components/dist/styled-components.browser.esm.js")),p=n("./packages/ui/lib/utils.js"),d=r(n("./packages/ui/lib/components/Input/index.js")),f=o(n("./packages/ui-dom/components/Field/index.js"));function m(){var e=(0,a.default)(["\n  -webkit-font-smoothing: antialiased;\n  display: block;\n  box-sizing: border-box;\n  width: ",";\n  outline: none;\n  :focus {\n    ",";\n  }\n  ::placeholder {\n    ",";\n  }\n  ",";\n  ",";\n"]);return m=function(){return e},e}var b=(0,p.withProps)({focus:!0}),y=l.default.forwardRef(function(e,t){var n=e.area,r=(0,u.default)(e,["area"]);return delete r.fluid,delete r.focus,n?l.default.createElement("textarea",(0,s.default)({ref:t},r)):l.default.createElement("input",(0,s.default)({ref:t},r))}),g=(0,c.default)(y)(m(),function(e){return e.fluid?"100%":"auto"},b(d.container),d.placeholder,d.container,d.text),j=l.default.forwardRef(function(e,t){return l.default.createElement(f.default,(0,s.default)({Component:g,fowardedRef:t},e))});j.propTypes=(0,i.default)({},d.container.propTypes,d.text.propTypes),j.defaultProps=(0,i.default)({},d.container.defaultProps,d.text.defaultProps);var h=j;t.default=h},"./packages/ui-dom/components/Row/index.js":function(e,t,n){"use strict";var r=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")),a=o(n("./node_modules/styled-components/dist/styled-components.browser.esm.js")),s=r(n("./packages/ui/lib/components/Row/index.js"));function u(){var e=(0,i.default)(["\n  ",";\n"]);return u=function(){return e},e}var l=a.default.div(u(),s.container);t.default=l},"./packages/ui-dom/components/Text/index.js":function(e,t,n){"use strict";var r=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/objectSpread.js")),a=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")),s=o(n("./node_modules/react/index.js")),u=o(n("./node_modules/styled-components/dist/styled-components.browser.esm.js")),l=r(n("./packages/ui/lib/components/Text/index.js"));function c(){var e=(0,a.default)(["\n  -webkit-font-smoothing: antialiased;\n  ",";\n"]);return c=function(){return e},e}var p=(0,u.default)(function(e){var t=Object.assign({},e);return delete t.inline,delete t.textAlign,e.inline?s.default.createElement("span",t):s.default.createElement("p",t)})(c(),l.container);p.defaultProps=(0,i.default)({},l.container.defaultProps);var d=p;t.default=d},"./packages/ui-dom/components/View/index.js":function(e,t,n){"use strict";var r=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./packages/ui-dom/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("./packages/ui-dom/node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js")),a=r(n("./node_modules/styled-components/dist/styled-components.browser.esm.js")),s=n("./packages/ui-dom/node_modules/styled-system/dist/index.esm.js"),u=r(n("./packages/ui/lib/components/View/index.js"));function l(){var e=(0,i.default)(["\n        position: fixed;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        background-color: ",";\n      "]);return l=function(){return e},e}function c(){var e=(0,i.default)(["\n        margin-bottom: ","px;\n      "]);return c=function(){return e},e}function p(){var e=(0,i.default)(["\n  @media only screen and (max-device-width: 600px) {\n    ",";\n    ",";\n  }\n  ",";\n"]);return p=function(){return e},e}var d=a.default.div(p(),function(e){return e.body&&(0,a.css)(c(),(0,s.themeGet)("space.6"))},function(e){return e.bottom&&(0,a.css)(l(),(0,s.themeGet)("colors.white"))},u.container);t.default=d},"./packages/ui/lib/components/Col/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.container=void 0;var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./packages/ui/node_modules/styled-system/dist/index.esm.js"),i=n("./packages/ui/lib/components/View/index.js");function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return s=function(){return e},e}var u=(0,r.css)(s(),i.container,o.flex,o.order,o.alignSelf,o.justifySelf);t.container=u,u.propTypes=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}({},i.container.propTypes,o.flex.propTypes,o.order.propTypes,o.alignSelf.propTypes,o.justifySelf.propTypes)},"./packages/ui/lib/components/Field/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.error=t.label=t.textContainer=t.container=void 0;var r,o=(r=n("./packages/ui/node_modules/prop-types/index.js"))&&r.__esModule?r:{default:r},i=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),a=n("./packages/ui/node_modules/styled-system/dist/index.esm.js"),s=n("./packages/ui/lib/styles/index.js");function u(){var e=p(["\n  color: ",";\n  font-size: ","px;\n  ",";\n"]);return u=function(){return e},e}function l(){var e=p(["\n  font-size: ","px;\n  ",";\n"]);return l=function(){return e},e}function c(){var e=p(["\n  min-height: ","px;\n"]);return c=function(){return e},e}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d={propTypes:{error:o.default.node,label:o.default.node,hideLabelView:o.default.bool,hideErrorView:o.default.bool},defaultProps:{hideLabelView:!1,hideErrorView:!1}};t.container=d;var f=(0,i.css)(c(),(0,a.themeGet)("space.5"));t.textContainer=f;var m=(0,i.css)(l(),(0,a.themeGet)("fontSizes.1"),s.defaultFontFamily);t.label=m;var b=(0,i.css)(u(),(0,a.themeGet)("colors.red"),(0,a.themeGet)("fontSizes.1"),s.defaultFontFamily);t.error=b},"./packages/ui/lib/components/Input/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.placeholder=t.error=t.text=t.container=void 0;var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./packages/ui/node_modules/styled-system/dist/index.esm.js"),i=n("./packages/ui/lib/styles/index.js");function a(){var e=d(["\n  color: ",";\n"]);return a=function(){return e},e}function s(){var e=d(["\n  color: ",";\n  ",";\n  ",";\n  ",";\n"]);return s=function(){return e},e}function u(){var e=d(["\n  color: ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n"]);return u=function(){return e},e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){var e=d(["\n  border-radius: 4px;\n  border: 1px solid;\n  border-color: ",";\n  padding: ",";\n  ",";\n  ",";\n  ",";\n"]);return p=function(){return e},e}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var f=(0,r.css)(p(),function(e){var t=e.active,n=e.disabled,r=e.focus,o=e.theme.colors;return r?o.blue:t&&!n?o.pink:o.lightGrey},function(e){var t=e.area,n=e.theme.space;return t?"".concat(n[2],"px ").concat(n[2],"px ").concat(n[2],"px ").concat(n[2],"px"):"".concat(n[0],"px ").concat(n[2],"px ").concat(n[0],"px ").concat(n[2],"px")},i.buttonHeight,o.border,o.borderColor);t.container=f,f.propTypes=l({},i.buttonHeight.propTypes,o.border.propTypes,o.borderColor.propTypes),f.defaultProps={letterSpacing:"default",height:"tall",fluid:!0};var m=(0,r.css)(u(),function(e){var t=e.disabled,n=e.theme.colors;return t?n.disabled:n.dark},i.defaultFontFamily,o.color,i.fontSize,i.letterSpacing,o.fontFamily);t.text=m,m.propTypes=l({},o.color.propTypes,i.fontSize.propTypes,i.letterSpacing.propTypes,o.fontFamily.propTypes),m.defaultProps={fontSize:"default",letterSpacing:"default"};var b=(0,r.css)(s(),(0,o.themeGet)("colors.red"),i.defaultFontFamily,i.fontSize,i.letterSpacing);t.error=b,b.propTypes=l({},i.fontSize.propTypes,i.letterSpacing.propTypes),b.defaultProps={fontSize:"small",letterSpacing:"default"};var y=(0,r.css)(a(),(0,o.themeGet)("colors.disabled"));t.placeholder=y,y.propTypes={}},"./packages/ui/lib/components/Row/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.container=void 0;var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./packages/ui/node_modules/styled-system/dist/index.esm.js"),i=n("./packages/ui/lib/components/Col/index.js");function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return s=function(){return e},e}var u=(0,r.css)(s(),i.container,o.flexWrap,o.flexBasis,o.flexDirection,o.alignItems,o.justifyContent);t.container=u,u.propTypes=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}({},i.container.propTypes,o.flexWrap.propTypes,o.flexBasis.propTypes,o.flexDirection.propTypes,o.alignItems.propTypes,o.justifyContent.propTypes)},"./packages/ui/lib/components/Text/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.container=void 0;var r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./packages/ui/node_modules/styled-system/dist/index.esm.js"),i=n("./packages/ui/lib/styles/index.js");function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return s=function(){return e},e}var u=(0,r.css)(s(),i.defaultFontFamily,i.letterSpacing,o.color,i.fontSize,i.fontWeight,o.fontFamily,o.fontStyle,o.lineHeight,o.textAlign);t.container=u,u.propTypes=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}({},i.letterSpacing.propTypes,o.color.propTypes,i.fontSize.propTypes,i.fontWeight.propTypes,o.fontFamily.propTypes,o.fontStyle.propTypes,o.lineHeight.propTypes,o.textAlign.propTypes),u.defaultProps={fontSize:"default",color:"dark"}},"./packages/ui/lib/components/View/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.container=void 0;var r,o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=n("./packages/ui/node_modules/styled-system/dist/index.esm.js"),a=(r=n("./packages/ui/lib/styles/elevation/index.js"))&&r.__esModule?r:{default:r};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return u=function(){return e},e}var l=(0,o.css)(u(),i.space,i.width,i.maxWidth,i.minWidth,i.height,i.maxHeight,i.minHeight,i.order,i.flex,i.alignSelf,i.backgroundColor,a.default);t.container=l,l.propTypes=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}({},i.space.propTypes,i.width.propTypes,i.minWidth.propTypes,i.maxWidth.propTypes,i.height.propTypes,i.minHeight.propTypes,i.maxHeight.propTypes,i.flex.propTypes,i.order.propTypes,i.alignSelf.propTypes,i.backgroundColor.propTypes,a.default.propTypes),l.defaultProps={body:!1,bottom:!1}},"./packages/ui/lib/styles/breakpoint.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.isMobile=t.only=t.down=t.up=void 0;var r=function(e,t){var n=t.breakpointNames.indexOf(e);return-1!==n?n:void 0},o=function(e){return function(t){var n=t.theme,o=r(e,n),i=parseInt(n.breakpoints[o]);return"(min-width: ".concat(i,"px)")}};t.up=o;var i=function(e){return function(t){var n=t.theme,o=r(e,n),i=parseInt(n.breakpoints[o+1]);return isNaN(i)?"(min-width: 0px)":"(max-width: ".concat(i-1,"px)")}};t.down=i;var a=function(e){return function(t){var n=t.theme,o=r(e,n),i=parseInt(n.breakpoints[o]),a=parseInt(n.breakpoints[o+1]);return isNaN(a)?"(min-width: ".concat(i,"px)"):"(min-width: ".concat(i,"px) and (max-width: ").concat(a-1,"px)")}};t.only=a;var s=function(e){return-1!==["tablet","phone"].indexOf(e)};t.isMobile=s;var u={up:o,down:i,only:a,isMobile:s};t.default=u},"./packages/ui/lib/styles/elevation/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var r,o=(r=n("./packages/ui/node_modules/prop-types/index.js"))&&r.__esModule?r:{default:r};function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=function(e){var t=e.elevation,n=e.theme,r=n.shadows,o=n.shadowOpacity;return Object.entries(r[t]).map(function(e){var t,n,r,a,s,u=i(e,2),l=u[0],c=u[1];return"".concat((t=c,n=t.x,r=t.y,a=t.radius,s=t.spread,"".concat(n,"px ").concat(r,"px ").concat(a,"px ").concat(s,"px"))," rgba(0,0,0,").concat(o[l],")")})};function s(e){if(e.elevation)return"box-shadow: ".concat(a(e).join(","),";")}s.propTypes={elevation:o.default.number}},"./packages/ui/lib/styles/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"elevation",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"breakpoint",{enumerable:!0,get:function(){return s.default}}),t.defaultFontFamily=t.fontWeight=t.fontSize=t.iconWidth=t.iconHeight=t.iconSize=t.buttonHeight=t.letterSpacing=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("./packages/ui/node_modules/styled-system/dist/index.esm.js")),o=n("./packages/ui/lib/utils.js"),i=n("./packages/ui/lib/theme/measures.js"),a=u(n("./packages/ui/lib/styles/elevation/index.js")),s=u(n("./packages/ui/lib/styles/breakpoint.js"));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(e){return function(t){return isNaN(t)?t:"".concat(t).concat(e)}},p=(0,o.enumeratedStyle)({map:i.LETTER_SPACING,prop:"letterSpacing",cssProperty:"letterSpacing",key:"letterSpacing",transformValue:c("px")});t.letterSpacing=p;var d=(0,o.enumeratedStyle)({map:i.BUTTON_HEIGHT,prop:"height",cssProperty:"height",key:"buttonHeight",transformValue:c("px")});t.buttonHeight=d;var f=function(e){return(0,o.enumeratedStyle)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}({map:i.ICON_SIZE,prop:"size",key:"iconSize",transformValue:c("px")},e))};t.iconSize=f;var m=f({cssProperty:"height"});t.iconHeight=m;var b=f({cssProperty:"height"});t.iconWidth=b;var y=(0,o.enumerated)(i.FONT_SIZE,"fontSize")(r.fontSize);t.fontSize=y;var g=(0,o.enumerated)(i.FONT_WEIGHT,"fontWeight")(r.fontWeight);t.fontWeight=g;t.defaultFontFamily=function(e){var t=e.theme.fontFamily;return t?"font-family: ".concat(t,";"):null}},"./packages/ui/lib/utils.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withProps=t.enumeratedStyle=t.enumerated=void 0;var r=n("./packages/ui/node_modules/styled-system/dist/index.esm.js");function o(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){return function(n){return Object.assign(function(r){var o=r[t],a=i({},r);return e&&"string"==typeof o&&e.has(o)&&(a[t]=e.get(o)),n(a)},n)}};t.enumerated=s;t.enumeratedStyle=function(e){var t=e.map,n=o(e,["map"]);return s(t,n.prop)((0,r.style)(n))};t.withProps=function(e){return function(t){return t.map(function(t){return"function"===typeof t?function(n){return t(i({},n,e))}:t})}}}}]);
//# sourceMappingURL=docs-components-input.eb51af2ad85f0bd6c11a.js.map