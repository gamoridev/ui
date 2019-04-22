(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"./docs/components/view.mdx":function(e,o,t){"use strict";t.r(o),t.d(o,"default",function(){return C});var n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),A=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),l=t("./node_modules/react/index.js"),c=t.n(l),d=t("./node_modules/@mdx-js/tag/dist/index.js"),u=t("./node_modules/docz/dist/index.esm.js"),p=t("./packages/ui-dom/components/View/index.js"),m=t.n(p),g=t("./packages/ui-dom/components/Row/index.js"),B=t.n(g),E=t("./packages/ui-dom/components/Col/index.js"),w=t.n(E),I=t("./packages/ui-dom/components/Text/index.js"),Y=t.n(I),M=t("./packages/ui-dom/components/Button/index.js"),j=t.n(M),C=function(e){function o(e){var t;return Object(a.a)(this,o),(t=Object(A.a)(this,Object(r.a)(o).call(this,e))).layout=null,t}return Object(s.a)(o,e),Object(i.a)(o,[{key:"render",value:function(){var e=this.props,o=e.components,t=Object(n.a)(e,["components"]);return c.a.createElement(d.MDXTag,{name:"wrapper",components:o},c.a.createElement(d.MDXTag,{name:"h1",components:o,props:{id:"view"}},"View"),c.a.createElement(d.MDXTag,{name:"p",components:o},"The ",c.a.createElement(d.MDXTag,{name:"inlineCode",components:o,parentName:"p"},"View")," component is a wrapper for an empty and unstyled ",c.a.createElement(d.MDXTag,{name:"inlineCode",components:o,parentName:"p"},"div"),"."),c.a.createElement(d.MDXTag,{name:"h2",components:o,props:{id:"basic-usage"}},"Basic usage"),c.a.createElement(u.c,{__position:0,__code:'<View>\n  <View p={4} body>\n    <Text textAlign="justify">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n      mollit anim id est laborum.\n    </Text>\n  </View>\n  <View p={4} bottom>\n    <Button active fluid>\n      Fixed at the bottom\n    </Button>\n  </View>\n</View>',__scope:{props:this?this.props:t,Playground:u.c,View:m.a,Row:B.a,Col:w.a,Text:Y.a,Button:j.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKYADUIBgMYjVldoAAEYCIOIKkkUIIEtSIAXTfQ4EkIiSNwiD2BFUZ0PIqiaP8Vx6MYq0WPXGh2L4kZuPwh0oAEuUhNo0SGKYr5Pikgh2McKB5PVKxsClN1KOotSxM0yTqDYyRLBMwz7WvcIInMMiVIskSrIk7TbOkyQXJuagnI1M1lPlM12jBVBdBRY5Tiw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZwKgAWMr2AANjKir1jAYCADFvWgRICv4ZxDgRB1MBgoR-CWIhqEoOBqoRdrq06mhnAgLDLnYABGerKvkGK4qmABBOZ0vYCMoPIGwoHQMNUI5dKxDO6MZHYFFUpgbhgGw5L3rgeQtxrYBLugG7ggAMjB8ZEnmShmmB67bu4JG5TAZDJQGVB2nYAB-DYQbDCN7queHQdQPbqykGQqzfMwYSMzAwDCKApkJh6nop47l2rBNA0lHAusyFIrwIAGa1rTiRlFsXxeIsYZk--q0K8dBEil6XawcrAploLXDqgCAUlQPgQHUPIYjARJxBXdWLAAGSFajODuUJZROKAhVe8dvVHJY4q2WgCD6EIWBmWxyAKaF9YIJY4FzE5rZtmAIDyaaclobNOFirguGQqZwnYOCvC6aEpjdh32CiQ3XBCfWAEdQlceoAFUpjofkE_VjsK7Qfl2FYNvvSWevbHYVBZtRUIcmwDJw4IaIMdyBJvSoAvXCLkfUFsCBclEbmbYseIIGHmZoR8cVCyIVPhz9-vonqLUGLsMJaE4NFi7Lo40A76Wun7GBNnDP0Mc5hWCUCgKEGYc8X79yjtCOAscejQHAa7MB5cYBQlRs8aIo9QhL2_mLaq_Roh9HqGeLACJIHoKOPkTMpw4hbGwb0UO6BojYLHuYfslAuD6BjrnTO-Cay9CgNVdgw89hgEgOHau5QMh8OmgkL2m9ZRcDgVMQuQoXY4AEVITWItv5SAlmrGsjAJZ9gVkrEQEQiBGLFowIKbkQjo37oacBXAbHSy6hAGoORsETG6F4YKRBtGBVctQdxBjZZGIiSRKWUheYEH5oLYWAMpCc2pmYL8IB5rbFcGkf8cBqCAV0CBAwYEsrVn4Kgb2_Arj8B-MWaoGRzQ_jJIyEAlULD8H7gIfI1AansH4IVHAQzCqTXWPwco5B-iQIxv0_gh1Pa_lPt6VpxwYBkkoIkXMeQI6mklOaepfxSxjIqSAKIX8kADJUOGDQcATmdJAJgeY4Ys7wH6eUsWEzEpzJAJtYZwzzQCHIDgAA7Pcms_A9miEufwTazUcAAA4cDNXBQ8qFmkflwsRci_g6xybyEyQ07wHxqCQBSPkwp2hin6AYFlEA6cyRZBqXU00tBAWanNLMGY_ACXyD5UAA"},c.a.createElement(m.a,null,c.a.createElement(m.a,{p:4,body:!0},c.a.createElement(Y.a,{textAlign:"justify"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),c.a.createElement(m.a,{p:4,bottom:!0},c.a.createElement(j.a,{active:!0,fluid:!0},"Fixed at the bottom")))),c.a.createElement(d.MDXTag,{name:"h2",components:o,props:{id:"elevation"}},"Elevation"),c.a.createElement(u.c,{__position:1,__code:'<Row flexWrap="wrap">\n  {Array(24)\n    .fill(null)\n    .map((_, i) => (\n      <Col key={i} p={5} width={1 / 3}>\n        <View elevation={i} bg="lightGrey" pt={10} pb={10}>\n          <Text size="large" textAlign="center" fontWeight="bold">\n            {i}\n          </Text>\n        </View>\n      </Col>\n    ))}\n</Row>',__scope:{props:this?this.props:t,Playground:u.c,View:m.a,Row:B.a,Col:w.a,Text:Y.a,Button:j.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKYADUIBgMYjVldoAAEYCIOIKkkUIIEtSIAXTfQ4EkIiSNwiD2BFUZ0PIqiaP8Vx6MYq0WPXGh2L4kZuPwh0oAEuUhNo0SGKYr5Pikgh2McKB5PVKxsClN1KOotSxM0yTqDYyRLBMwz7WvcIInMMiVIskSrIk7TbOkyQXJuagnI1M1lPlM12jBVBdBRY5Tiw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZwKgAWMr2AANjKir1jAYCADFvWgRICv4ZxDgRB1MBgoR-CWIhqEoOBqoRdrq06mhnAgLDLnYABGerKvkGK4qmABBOZ0vYCMoPIGwoHQMNUI5dKxDO6MZHYFFUpgbhgGw5L3rgeQtxrYBLugG7ggAMjB8ZEnmShmmB67bu4JG5TAZDJQGVB2nYAB-DYQbDCN7queHQdQPbqykGQqzfMwYSMzAwDCKApkJh6nop47l2rBNA0lHAusyFIrwIAGa1rWTDVgLAAHVMhmPgQBGOXxBXMXgEOgRMkSCMACZ6rfMXDfYHBIASCNUFCBdVcNnAohmCMIwAfSWCB7u4R6o25o2a0YfT2G2GBEk-iA0Pl4AAFY0JxdAJk-zb2EkEr_ut73a04sZ5xgVhogx4O0I8FIFagCAUkIABxLpEn4PsCDjwrQ48Ovk691OxcYBysCmfJ1qL1xcsZEBxhMw7i5SVAFYRPQBGr5aCGlmAS8IBWvGulWW9btWQ5T1upA7kXt6NqR09FnfJH0k-jY5DlycPyRZJPqReYIfnBeFgGpE56mzC_EB5u2Vw0j_jgNQQCugQIGDAllas_BUDegHlcfgPxizVAyOaH8ZIB6VQsPwVgGR8jUH4AgkAhUcAkMKpNdY_ByjkH6DMbs_okDsH4IdV6eFYDQiwN6DBxwYBkkoIkXMeQCgTk1OaJBfxSwUOgSAKIaBCFMJUOGDQcApHYJAJgeY4ZYrERUYwqBYsqGJXkfwTapDSHmgEOQHAAB2VRNZ-CmklMYkAm1mo4AABw4GanYtRjiLRWmca4jxXj-DrHJvIH-yDvAfGoJAFIQCQHaDAfoBgWUQC0B9FkQhiDTS0AsaI2YMx-ARPkKUoAA"},c.a.createElement(B.a,{flexWrap:"wrap"},Array(24).fill(null).map(function(e,o){return c.a.createElement(w.a,{key:o,p:5,width:1/3},c.a.createElement(m.a,{elevation:o,bg:"lightGrey",pt:10,pb:10},c.a.createElement(Y.a,{size:"large",textAlign:"center",fontWeight:"bold"},o)))}))))}}]),o}(c.a.Component);C.isMDXComponent=!0},"./packages/ui-dom/components/Col/index.js":function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n,a=(n=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"))&&n.__esModule?n:{default:n},i=function(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};n.get||n.set?Object.defineProperty(o,t,n):o[t]=e[t]}return o.default=e,o}(t("./packages/ui/lib/components/Col/index.js"));function A(){var e=function(e,o){o||(o=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(o)}}))}(["\n  ",";\n"]);return A=function(){return e},e}var r=a.default.div(A(),i.container);r.propTypes=i.container.propTypes;var s=r;o.default=s}}]);
//# sourceMappingURL=docs-components-view.bf3036c636c099fa2961.js.map