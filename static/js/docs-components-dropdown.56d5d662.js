(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./docs/components/dropdown.mdx":function(e,n,o){"use strict";o.r(n);var t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),i=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),l=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),A=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),c=o("./node_modules/react/index.js"),p=o.n(c),s=o("./node_modules/@mdx-js/tag/dist/index.js"),d=o("./node_modules/docz/dist/index.esm.js"),u=o("./packages/ui-dom/components/Dropdown/index.js"),g=o.n(u),m=o("./packages/ui-dom/components/View/index.js"),B=o.n(m),w=o("./packages/ui-dom/components/Row/index.js"),D=o.n(w),b=o("./packages/ui-dom/components/Text/index.js"),O=o.n(b),h=o("./packages/ui-dom/components/Icon/index.js"),f=o.n(h),E=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),j=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),x=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),y=o.n(x),C=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),Q=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),I=o("./packages/ui-dom/components/index.js"),Y=o("./node_modules/lodash/throttle.js"),k=o.n(Y);function M(){var e=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  height: 100%;\n  width: 100%;\n"]);return M=function(){return e},e}var v=function(e){function n(){var e,o;Object(r.a)(this,n);for(var t=arguments.length,a=new Array(t),A=0;A<t;A++)a[A]=arguments[A];return(o=Object(i.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(a)))).state={search:"",results:[]},o.updateResults=k()(Object(C.a)(y.a.mark(function e(){var n,t,r,a,i,l;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=o.state,t=n.search,r=n.loading,!(t.length<3||r)){e.next=3;break}return e.abrupt("return");case 3:return o.setState({loading:!0}),e.next=6,fetch("https://itunes.apple.com/search?limit=10&entity=album&term=".concat(encodeURIComponent(t)));case 6:if(200!==(a=e.sent).status){e.next=13;break}return e.next=10,a.json();case 10:i=e.sent,l=i.results,o.setState({results:l});case 13:o.setState({loading:!1});case 14:case"end":return e.stop()}},e,this)})),300),o.onChange=function(e){return o.setState({search:e},o.updateResults)},o}return Object(A.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){return this.props.children(Object(j.a)({},this.state,{onChange:this.onChange}))}}]),n}(c.PureComponent);v.Input=Object(Q.default)(function(e){var n=e.className,o=e.style,r=Object(t.a)(e,["className","style"]);return p.a.createElement(I.View,{className:n,style:o},p.a.createElement(I.Input,Object.assign({hideLabelView:!0,hideErrorView:!0},r,{height:"55px",width:"100%",style:{border:"none"}})))})(M()),o.d(n,"default",function(){return R});var R=function(e){function n(e){var o;return Object(r.a)(this,n),(o=Object(i.a)(this,Object(l.a)(n).call(this,e))).layout=null,o}return Object(A.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){var e=this.props,n=e.components,o=Object(t.a)(e,["components"]);return p.a.createElement(s.MDXTag,{name:"wrapper",components:n},p.a.createElement(s.MDXTag,{name:"h1",components:n,props:{id:"dropdown"}},"Dropdown"),p.a.createElement(s.MDXTag,{name:"p",components:n},"Dropdown component."),p.a.createElement(s.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},"Basic usage"),p.a.createElement(d.c,{__position:0,__code:'<Dropdown onChange={value => console.log(\'selected\', value)}>\n  <Dropdown.Option value="a">Option A</Dropdown.Option>\n  <Dropdown.Option value="b">Option B</Dropdown.Option>\n  <Dropdown.Option value="c">Option C</Dropdown.Option>\n</Dropdown>',__scope:{props:this?this.props:o,Playground:d.c,Dropdown:g.a,View:B.a,Row:D.a,Text:O.a,Icon:f.a,ItunesSearch:v},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKYtQHE4RnMI1ZXaAABGAiDiCpJFCCBLUiAF030OBJEIygZmI1BcIg9gADUIBgMYyLlKiaP8Vx6MYq0WPXGh2KEkS-Pw9gRVGdDyIk2jpIYpivk-BSCHYjSRlU9UrGwKU3Uo6jdJkgz5OoNjJEsayLPtBpdC08T7Kkxy5KMlzFMkbzqE8qYm2Q-BnHFARyDxMT2g9A92OCjMTLCggYrgOLXASvBIvUzVfPlM12jBVBdBRY5Tiw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZz6gAWEb2AANhGsb1jAYCADFvWgRI-v4ZxDgRB1MBgoR-CWIhqEoOBJoRVbq3WmhnAgLDLnYABGWbxvkKqaqmABBOZWvYCMoMS6B0DDVCOVasQQejGR2BRZqYG4YBsMalG4HkLca2AcGoEh4IADJifGRJ5koZoCaJ8xuHpuUwGQyUBl49gAH4NghsMIxhq4abDH7qykGQqzfMwYUszAwDCKApl52H4eFwHl2rBNA0lHANsyFIrwIXGa1rTjuNGcxqHsPwZ1R4BWHiBlFZqyhYBwKBKBSR84HnLZaHQMb2FtqAGQ5HGV0NxhjZ4nAdRmbtzADhk-BAVxxGj2P2H-qQI9NqOY9Zg3DaNojs9T1n_bt1H-A8FPc-Za9M6Lkic9j_Ow6zxuS-ZeOK50au0_seuuMjjvUBb2sOIbkeVykDWCC1nW9dxqQVbFswvxANLnMy9joudPL4sS_8tAoYD9AYPDLJnpZgGgvoYDXEKCDQ5LTUVW1LOR2AcmSj_snNDK2Mqqgc-9pgDKRGEsBoqAZjhCfrZHSAV9JWkAcAqYEwhA3FgGVV26B_B4EkGgkQBBfRVUlvaaWsspjkDgnAOw-VCpinpHLOw1k6DoDsDfLo99MrtXWCiLIwMOpqyRvvPAfV7qGy6IwkyVwADaABddYQt1ihG4lkBhoQmHAwIRgmAEZ_CJGqiDGG3A4aCMNn9dqnsCqJSWK7DsBQ0JtQmLYHAfDaArggM0CMVjCouzoCkAsjAhrsAAD4hPYHY6aKQYZdBygIf0QjnFwFcaORqWRQaRIKFcVEDJ5BvnMdQWqkinSe2Bq4EYrhxxgFHIlKMQiSiEFuPcR4Lxco4FmGSP8nxJA-MSuzKA_IXjcHev1Ym-gXiJG4PEDwoQiDE1oAIIg3AAAkwB4SAgAKoigaFw_QdSC41l6XgUO7Bg7FBXPkmsniQbFMKX-NxeRWoMwAEz9X6jDMxBcLHAEkRokyjiQgVPHLc1AntD7UF5icpJKSCBpNoKDX5TC8kriFobaFntYUEHScATJM1DTxE9si6sSghpvPFtWc2ls0jA28SI4xcN0WpKxfC4ARySXQpUTg2g6imHkosJOSMHyVyxL6OYaF_YuLJIFnQUGOA5XouZTAJYlL3BpGyQSHAKqrZEosELJRqA6GJR5SZHAkDoFTDaj_B8oMqH-DgAAOW9EqpGTVYBLDlTgCVdw8mK32bWMBPRqEOqdWjW1NDHVHjQj_NGP8Q5CMYGa8IJybCYAADKuECFAMByauAwDPAIIQAhs31Pah6r12Nk0wAgCkQgicACsdaRr8BOTidAExE4jP6gAUmbSW6NwBgBeAEFOPqqAXLtHkKimsm5oySDAWLDk5zqwsBunBXahpYBYBVA9TdVx3rbosGATdloIBdBZtQfmTtZmoAPewdQeQYhgESH_E-NB-b6AyLe-I1bUDmheNRe4LrYmJVvZsathA91vK7be1tExIPdu3Uutet1tiuDSOC1AgFdAgQMGBT5_BUBOv4FcfgPxizVAyOaH8nTzrrH4KwDI-RqDEfYPwfqOB2P9Vo9Wfg5RyD9Brv6JArGQD_SRnhTB1HMGYDJJQRIuY8gFAnJqF95Q_ilm4xYfgUQ0Asf4KobAh9NMiZk6w-Ewk4Asc-Vp9e9U9MgHehxjj5oEo4AAOzGZsy_UQwn-DvUWjgAAHDgRanmRNWpfaxRS9nZo4GeRxsL_BsG4PswAPVi-9NzOB3rvUS4IFTVp7P-aCyF3tuqzDyDXuR7wHxqCQBSBhrDr7cMgA6iAWgPosjEdI6aWgLmVMdP4JVyd8ggA",style:{minHeight:"250px"}},p.a.createElement(g.a,{onChange:function(e){return console.log("selected",e)}},p.a.createElement(g.a.Option,{value:"a"},"Option A"),p.a.createElement(g.a.Option,{value:"b"},"Option B"),p.a.createElement(g.a.Option,{value:"c"},"Option C"))),p.a.createElement(s.MDXTag,{name:"h2",components:n,props:{id:"placeholder-and-labels"}},"Placeholder and labels"),p.a.createElement(d.c,{__position:1,__code:'<View mb="10px">\n  <Text>Dropdown with placeholder</Text>\n  <Dropdown placeholder="Placeholder">\n    <Dropdown.Option value="a">Option A</Dropdown.Option>\n    <Dropdown.Option value="b">Option B</Dropdown.Option>\n    <Dropdown.Option value="c" label="Label for option C">\n      Option C\n    </Dropdown.Option>\n  </Dropdown>\n</View>\n<View mb="10px">\n  <Text>Dropdown with fixed label</Text>\n  <Dropdown label="Fixed label">\n    <Dropdown.Option value="a">Option A</Dropdown.Option>\n    <Dropdown.Option value="b">Option B</Dropdown.Option>\n    <Dropdown.Option value="c">Option C</Dropdown.Option>\n  </Dropdown>\n</View>',__scope:{props:this?this.props:o,Playground:d.c,Dropdown:g.a,View:B.a,Row:D.a,Text:O.a,Icon:f.a,ItunesSearch:v},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKYtQHE4RnMI1ZXaAABGAiDiCpJFCCBLUiAF030OBJEIygZmI1BcIg9gADUIBgMYyLlKiaP8Vx6MYq0WPXGh2KEkS-Pw9gRVGdDyIk2jpIYpivk-BSCHYjSRlU9UrGwKU3Uo6jdJkgz5OoNjJEsayLPtBpdC08T7Kkxy5KMlzFMkbzqE8qYm2Q-BnHFARyDxMT2g9A92OCjMTLCggYrgOLXASvBIvUzVfPlM12jBVBdBRY5Tiw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZz6gAWEb2AANhGsb1jAYCADFvWgRI-v4ZxDgRB1MBgoR-CWIhqEoOBJoRVbq3WmhnAgLDLnYABGWbxvkKqaqmABBOZWvYCMoMS6B0DDVCOVasQQejGR2BRZqYG4YBsMalG4HkLca2AcGoEh4IADJifGRJ5koZoCaJ8xuHpuUwGQyUBl49gAH4NghsMIxhq4abDH7qykGQqzfMwYUszAwDCKApl52H4eFwHl2rBNA0lHANsyFIrwIXGa1rZSxiIDw-BAd7-pG8QV0Nxh3KwfXOO40ZzHzPEyQlGBhkJjIpAd_XbZrRhnZ4vs4IRH2p3N2Cvaj0EQANw3g9D12cB1GZu3MVh4gZc3XHEDOs_Yf6pFTkj08z1mk-T2ty9QSvi5zqA8_4DxC6r5lrzLoi06L6ug7t-vG9Z9hm9bnR-HYODAigc2ABlXFnw0hT2TvzHsG21drmt--ZTft9rnuuJ4kfqBr4OON7kiL6kY3b-N9hTfNy3rcTwfawDsR67zXFDQgGoOQZ7zn9tZC-CYf7ALnvwDaADcxQK3jvFO18G572zrnVG_AC6JzQSXY-LsK5oPAcgk-fd15jwwebduODyHdyvqQwh69iEQJQWfdBLdMGTxocXew-DT5EI_nw12t9JD3xXFIDWBAtY6z1rjKQKsxZmC_CANKzlMrsWis6PK8VEr_i0BQYC-gGB4UspIpYwBoJ9BgGuEKBA0LJVNIqW0llkawByMlVx2RzQZTYpVVAJj7TAGNksBoqAZjhHsbZHSAV9JWj8QEqYEwhA3FgGVKATh_B4EkEkkQBBfRVUlvaaWsspjkDgnAOw-VCpinpHLOw1k6DoDsJYroNjMrtXWCiLIwMOrbzgDovAfV7qGy6LUkyVwADaABddYQt1ihG4lkGpoQ6nAxySkmAEZ_CJGqiDGG3A4a9MNn9dq_SCqJSWOkjsBQ0JtQmLYHAXTaArggM0CMZzCo4FgDOAsjAhrsAAD4AunpQa5M4YZdBygIf0297lwEeaORqWRQZXOmikK4qIGTyDfMc6gtVRlOn6cDVwIxXDjjAKORKUZD7sGKIQW49xHgvFyjgWYZI_yfEkB8xK7MoD8heNwS2xN9AvESNweIHhQhEGJrQAQRBuAABJgDwkBAAVRFA0Np-hqVIO5XgIOHJ5DFBXDimsryQYErxX-J5eRWoMwAEz9X6jDI5ycTnAFGSskytyQikvHJa1A_S9HUF5kHOFCKCBItoKDT1dTsUriFobcN_TI0EGRcAVFBQrgyygP0-N1YlBDSdeLas1B7B-BnN0Nq7yBn7LhsmxFabo3AD1YW8NCz0BLPgF6uAJaLCTkjC6lckK-jmHDf2Li8KBZ0FBjgOdyam0wCWGWitaQMUEhwCu9waR80WCFnM1AVTErLLqTgUJ4SphtU8Q-UGZT_BwAAHLeiXUjJqsAlhzpwBOu42LFY6qNsJMYd6KlPqPGjYDj7n1oU8WjTxONxHnvCEHGwmBF6z2NshrgMAzwCCEAIDDNLgCfu_djZDMAIApEIObAArNRt-QccToAmC_J1ABSfgQcYPAGAF4AQU4-qoBcu0eQiaaybmjKIwDYsOTGurCwG6cFdqGlgFgFUD0VNXHempiwYAVOWggF0Fm1B-aUBbkQVA2n2DqDyDEMAiRvGGJoPzfQGRLPxAo6gc0LxqL3FfZCxKlnNgUcIJptjlnGMTFC_1VjanZPKNutsVwaRg2oEAroECBgwKuv4KgZ9_Arj8B-MWaoGRzQ_nZeddY_BWAZHyNQfL7B-D9RwM1_qlXqz8HKOQfo68Gv8H-kjPCqTyupMwGSSgiRcx5AKBOTUDnyh_FLO1iw_AohoD6yocMGg4DLcayomA8xwzVWEjtpAHTt6dfqht96LWWvmgSjgAA7LtlbghNTXcWjgAAHDgRaL29vXoc6xRSG3Zo4HtS1_7_B0mdrgPqs7_AAB6YP3qPZwO9d6UO3tmgMh977v2OMFrMPIZRxXvAfGoJAFIKW0uOcyyADqIBaA-iyPlwrppaD3bm2y_gJORPyCAA",style:{minHeight:"250px"}},p.a.createElement(B.a,{mb:"10px"},p.a.createElement(O.a,null,"Dropdown with placeholder"),p.a.createElement(g.a,{placeholder:"Placeholder"},p.a.createElement(g.a.Option,{value:"a"},"Option A"),p.a.createElement(g.a.Option,{value:"b"},"Option B"),p.a.createElement(g.a.Option,{value:"c",label:"Label for option C"},"Option C"))),p.a.createElement(B.a,{mb:"10px"},p.a.createElement(O.a,null,"Dropdown with fixed label"),p.a.createElement(g.a,{label:"Fixed label"},p.a.createElement(g.a.Option,{value:"a"},"Option A"),p.a.createElement(g.a.Option,{value:"b"},"Option B"),p.a.createElement(g.a.Option,{value:"c"},"Option C")))),p.a.createElement(s.MDXTag,{name:"h2",components:n,props:{id:"icons"}},"Icons"),p.a.createElement(s.MDXTag,{name:"p",components:n},"You can use the ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"icon")," and ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"iconProps")," props on the ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Dropdown")," component to style the button icon."),p.a.createElement(d.c,{__position:2,__code:'<Dropdown\n  icon="heart"\n  iconProps={{ color: \'red\' }}\n  placeholder="What\'s your favorite animal?"\n>\n  <Dropdown.Option value="cat" label="Cat">\n    <Icon name="cat" color="dark" mr="15px" />\n    <Text inline>Cat</Text>\n  </Dropdown.Option>\n  <Dropdown.Option value="dog" label="Dog">\n    <Icon name="dog" color="dark" mr="15px" />\n    <Text inline>Dog</Text>\n  </Dropdown.Option>\n  <Dropdown.Option value="kiwi" label="Kiwi">\n    <Icon name="kiwi-bird" color="dark" mr="15px" />\n    <Text inline>Kiwi</Text>\n  </Dropdown.Option>\n  <Dropdown.Option value="dragon" label="Dragon">\n    <Icon name="dragon" color="dark" mr="15px" />\n    <Text inline>Dragon</Text>\n  </Dropdown.Option>\n</Dropdown>',__scope:{props:this?this.props:o,Playground:d.c,Dropdown:g.a,View:B.a,Row:D.a,Text:O.a,Icon:f.a,ItunesSearch:v},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKYtQHE4RnMI1ZXaAABGAiDiCpJFCCBLUiAF030OBJEIygZmI1BcIg9gADUIBgMYyLlKiaP8Vx6MYq0WPXGh2KEkS-Pw9gRVGdDyIk2jpIYpivk-BSCHYjSRlU9UrGwKU3Uo6jdJkgz5OoNjJEsayLPtBpdC08T7Kkxy5KMlzFMkbzqE8qYm2Q-BnHFARyDxMT2g9A92OCjMTLCggYrgOLXASvBIvUzVfPlM12jBVBdBRY5Tiw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZz6gAWEb2AANhGsb1jAYCADFvWgRI-v4ZxDgRB1MBgoR-CWIhqEoOBJoRVbq3WmhnAgLDLnYABGWbxvkKqaqmABBOZWvYCMoMS6B0DDVCOVasQQejGR2BRZqYG4YBsMalG4HkLca2AcGoEh4IADJifGRJ5koZoCaJ8xuHpuUwGQyUBl49gAH4NghsMIxhq4abDH7qykGQqzfMwYUszAwDCKApl52H4eFwHl2rBNA0lHANsyFIrwIXGa1rTjuNGf01cNzhdD4EBNgK0QQBXQ3YmoaCBzgNGwcoKAhT6rp0HaVChYtmsyQlGBhkJjJrYAdUmdo7FaPpDVcVghReGl-Xidn-Ed9gDYtxhjZ4nAdRmbtzFYeIGWtuJ7fYODAiga37GicRc8NxhwvMVBvVR_ha_4QtvYEa30AK7ZB6IEf-HegBWEbB83dua0YdysDHVAoDQGBU2iKQ1_15epCL02S7L1n847k-SLP8v2ErqBq_4E5ChAevXEb62tUoV_L4Lrv2A9yPKPH-g8qDD1HuPSe08QBzwXm_Je5tg6r2spwTe28xDfxSPvayf9tzX1QLfC-R8CFEOZA_J-IBtgQBxIPBu85rYAGkaEQDbkg_-PkgF9yoSw80HgIACHQGAr2QpIECAnm_Ke1s4FYEXngleB80Fb2dGIZhOIcHr3kcfIip9S7ly0aQvRrN75V24ZDVwKRqB0I_gw_ghELFWJAPIhMACuGjx1o4oeojn5QMkTAmRcjl4JkUWgZRO97GWNQBow-7D8E6JvkY6gf9tFcR4vnKQGsCBax1nrXGUgVZizMF-EAaVnKZXYtFZ0eV4qJX_FoCgwF9AMDwpZTJSxgDQT6DANcIUCBoWSqaRUtpLLI1gDkZKozsjmgymxSqqAWn2mAMpEYSwGioBmOEfptkdIBX0laOZCypgTCEDcWAZVvZjzgHgSQxyRAEF9FVSW9ppayymOQOCcA7D5UKmKekcs7DWToOgOwnSug9Myu1dYKIsjAw6ubOANS8B9XuobLofyTJXAANoAF11hC3WKEbiWRfmhH-cDW5pyYARn8IkaqIMYbcDhnCw2f12oIoKolJY3sOwFDQm1CYtgcDQtoCuCAzQIzssKjgWAM4CyMCGuwAAPoq-ulAeUzhhl0HKAgzaGwFXAIVo5GpZFBty6aKQriogZPIN8LLqC1TRU6BFwNXAjFcOOMAo5EpRnYcUQgtx7iPBeLlHAswyR_k-JISViV2ZbyIC8bg71-rE30C8RI3B4geFCEQYmtABBEG4AAEmAPCQEABVEUDRwX6B9cHCw0a8C5w5PIYoK5bU1jFSDR19q_zCryK1BmAAmfq_UYbMotqy4AaLSUmT5SEN145u2oARXU6gvNc76sNQQY1tBQbTv-TalcQcayboRduggJrgBmoKFcGWUAEWHurEoIaI7xbVmoPYPwM5uhtQlYihlcNT1Govbu4ADbn2bsJWPWgJL_lvosJOSMY6Vxar6OYTd_YuIGoFnQUGOB8OnpAzAJYH6v1pEtQSHApH3BpEfRYIW-LUDfMSrBkyOA1kbKmG1SZD5QbvP8HAAAcr3JYkylj4ZwJhu4NrFa1trMsnoHyhO9zRvxz5wmjxoUmWjSZOMVyd3WeEXONhMAABkbFQGWcZrgMAzwCCEAIKz7DgASak9jYzMAIApEINbWe89ZEO3YTidAExpEjoAKQ53Ydp4AwAvCCIyH1VALl2jyGPRYRB25lliw5K26sLAbpwV2oaWAWAVQPVK1cd65WLBgFK5aARWxy78y9tm1ANX2DqDyDEMAiRpmNJoPzfQGQOvxC86gc06ciD3CRqiL1eAOubC84QKrEWOvBYmKt_q4Xyt5eKbdbYFi_yaGoIBXQIEDBgXHfwLh_Arj9yLH8Us5ofzhvOusfgrAMj5EcfdkA_UcAA_6u96sz94DkH6OfX77B-D_SRnhM5r2zmYDJJQRIuY8gFAnJqfr5Qns1AECDiw_AohoDuzDlQ4YNBwCJxTlHQL4TCRp0gSF5tn71XJzPQHgPzQJRwAAdlp8TwQmpOewMWjgAAHDgRaQuKc8f66xRSYvZo4EHYDuX_ALn-EbSz_gAA9VX71-c4Heu9TXIuzQGTF-9CX0vZeBfo2YeQxTizVA-NQSAKRV2oDOwNy7IAOogFoD6LId3-6mloLznHYb-Au7S_IIAA",style:{minHeight:"250px"}},p.a.createElement(g.a,{icon:"heart",iconProps:{color:"red"},placeholder:"What's your favorite animal?"},p.a.createElement(g.a.Option,{value:"cat",label:"Cat"},p.a.createElement(f.a,{name:"cat",color:"dark",mr:"15px"}),p.a.createElement(O.a,{inline:!0},"Cat")),p.a.createElement(g.a.Option,{value:"dog",label:"Dog"},p.a.createElement(f.a,{name:"dog",color:"dark",mr:"15px"}),p.a.createElement(O.a,{inline:!0},"Dog")),p.a.createElement(g.a.Option,{value:"kiwi",label:"Kiwi"},p.a.createElement(f.a,{name:"kiwi-bird",color:"dark",mr:"15px"}),p.a.createElement(O.a,{inline:!0},"Kiwi")),p.a.createElement(g.a.Option,{value:"dragon",label:"Dragon"},p.a.createElement(f.a,{name:"dragon",color:"dark",mr:"15px"}),p.a.createElement(O.a,{inline:!0},"Dragon")))),p.a.createElement(s.MDXTag,{name:"p",components:n},"Use ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"flexDirection")," to position the dropdown icon and ",p.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"textAlign")," to position the dropdown text."),p.a.createElement(d.c,{__position:3,__code:'<View mb="10px">\n  <Dropdown flexDirection="row-reverse" placeholder="Select an option">\n    <Dropdown.Option value="a">Option A</Dropdown.Option>\n    <Dropdown.Option value="b">Option B</Dropdown.Option>\n    <Dropdown.Option value="c">Option C</Dropdown.Option>\n  </Dropdown>\n</View>\n<View mb="10px">\n  <Dropdown\n    flexDirection="row-reverse"\n    textAlign="right"\n    placeholder="Select an option"\n  >\n    <Dropdown.Option value="a">Option A</Dropdown.Option>\n    <Dropdown.Option value="b">Option B</Dropdown.Option>\n    <Dropdown.Option value="c">Option C</Dropdown.Option>\n  </Dropdown>\n</View>',__scope:{props:this?this.props:o,Playground:d.c,Dropdown:g.a,View:B.a,Row:D.a,Text:O.a,Icon:f.a,ItunesSearch:v},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKYtQHE4RnMI1ZXaAABGAiDiCpJFCCBLUiAF030OBJEIygZmI1BcIg9gADUIBgMYyLlKiaP8Vx6MYq0WPXGh2KEkS-Pw9gRVGdDyIk2jpIYpivk-BSCHYjSRlU9UrGwKU3Uo6jdJkgz5OoNjJEsayLPtBpdC08T7Kkxy5KMlzFMkbzqE8qYm2Q-BnHFARyDxMT2g9A92OCjMTLCggYrgOLXASvBIvUzVfPlM12jBVBdBRY5Tiw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZz6gAWEb2AANhGsb1jAYCADFvWgRI-v4ZxDgRB1MBgoR-CWIhqEoOBJoRVbq3WmhnAgLDLnYABGWbxvkKqaqmABBOZWvYCMoMS6B0DDVCOVasQQejGR2BRZqYG4YBsMalG4HkLca2AcGoEh4IADJifGRJ5koZoCaJ8xuHpuUwGQyUBl49gAH4NghsMIxhq4abDH7qykGQqzfMwYUszAwDCKApl52H4eFwHl2rBNA0lHANsyFIrwIXGa1rZSxiIDw-BAd7-pG8QV0NxhOO40ZSNgLAtQgLoWeoc2hBGc0ulYDI4EZEA-zghFhkJjJzbi2BJRCcwuO7f0QANw2a3toinZwHUZiT9hWHiBlzdccQc7z_6pAdnjs9z1nU7T2sq6zsvWfzwvUf4DxS9r5lr0rzOSJrpP67TjOuOrlvmQLqAi_4chu7z-x-_H5ue9QEftybkiR6kY2d-N9hTfNy3rZT23063_01Ybw0Xbdj2k-90Y_ZgAOBCD_hz8N2gsAIf6oAgCkVA3tAGEE_tfBuZIJQwAjlOaO84thTHcHsNe4Cb7sA3hfAeqAh6t2nrPEAJcU6T3MBXDi2DcHUEwQmS-lDzD4I7iALuxC17sD7uQleg8SHUMbhQkhbcZ6MPniwxey9HZcLXpgsRPEd6SD3iuKQGsCBax1nrXGUgVZizMF-EAaVnKZXYtFZ0eV4qJX_FoCgwF9AMDwpZJRSxgDQT6DANcIUCBoWSqaRUtpLLI1gDkZKfjsjmgymxSqqBbH2mAMbJYDRUAzHCB42yOkAr6StOEyJUwJhCBuLAMqUAnD-DwJIbJIgCC-iqpLe00tZZTHIHBOAdh8qFTFPSOWdhrJ0HQHYJxXRXGZXausFEWRgYdWvkHAqiU-r3UNl0NpJkrgAG0AC66whbrFCNxLIrTQjtOBqU3JMAIz-ESNVEGMNuBwzGYbP67UJmFSWAUjsBQ0JtQmLYHAwzaArggM0CM9yzGwBnAWRgQ12AAB9wXsCedNFIMMug5QEFfb-BJPmjkalkUGMKChXFRAyeQb4bnUFqnMp0QdgauBGK4ccYBRyJSjBA9gxRCC3HuI8F4uUcCzDJH-T4kgAV4HZgAogLxuCW2JvoF4iRuDxA8KEIgxNaACCINwAAJMAeEgIACqIoGj9P0Ay9BArz4cnkMUFchKay_JBqS4lf4vl5FagzAATP1fqMNrlp1ucAOZuyTKvJCFS8ctrUBB3MdQXm593lwDRQQDFtBQa-vaQSlcQsUUfKDnGggmLgDYpmoaeIQcU3ViUENN14tqzUHsH4Gc3Q2r_NMXgC5cNo2xvjUc4AArS2ts2egbZ8A_VwArRYSckYPUrgRX0cwrb-xcRjQLOgoMcDLtbV8mASwq01rSLi1Fm73BpGLRYIW6zUDNMSjs9pOA4kJKmG1IJD5Qb1P8HAAAct6ddSMmqwCWMunAs67gEsVoao2wkxhPsaW-o8aNwOvvfWhIJaMgk4wUde8I58bCYAADKuECFAY26GuAwDPAIIQAh8OMuAL-_92N0MwFAQQc2ABWRjp9z44nQBMY-bqACkaC04IeAMALwAgpx9VQC5do8g001k3NGORoGxYcnNdWFgN04K7VvtgFUD0XZXHetpiwYAXaWndog1m_NKAzyIKgAz7B1B5BiGARIISrE0H5voDItn4iANQOaF41F7ifoRYlWzmx6N6Z47Z9jEwIv9W49p5TOjbrbFcGkcNqBAK6BAgYMCnr-CoHffwK4c8ix_FLOaH8PLzrrH4G_fI1AivsH4P1HALX-rVerPwco5B-ioKQE1kA_0kZ4TyZVvJmAySUESLmPIBQJyahc-UMrNQBAdYsPwKIaBGv8FUNgcxa2BsTa6fCYScBGuevW7o-q22Latda37cgOAADsB3LteNEP1_g71Fo4AABw4EWq9gb96XOsUUjd2aOBnWtaB_wApfa4B4BuwAPUh-9J7OB3rvVh4IBbVobvfb-wDvjx6dHFmqB8agkAUjpcy65nLIAOogFoD6LIRW56mloC_M05puX8HkAoKTQA",style:{minHeight:"250px"}},p.a.createElement(B.a,{mb:"10px"},p.a.createElement(g.a,{flexDirection:"row-reverse",placeholder:"Select an option"},p.a.createElement(g.a.Option,{value:"a"},"Option A"),p.a.createElement(g.a.Option,{value:"b"},"Option B"),p.a.createElement(g.a.Option,{value:"c"},"Option C"))),p.a.createElement(B.a,{mb:"10px"},p.a.createElement(g.a,{flexDirection:"row-reverse",textAlign:"right",placeholder:"Select an option"},p.a.createElement(g.a.Option,{value:"a"},"Option A"),p.a.createElement(g.a.Option,{value:"b"},"Option B"),p.a.createElement(g.a.Option,{value:"c"},"Option C")))),p.a.createElement(s.MDXTag,{name:"h2",components:n,props:{id:"advanced-usage"}},"Advanced usage"),p.a.createElement(d.c,{__position:4,__code:'<ItunesSearch>\n  {({ search, results, onChange }) => (\n    <Dropdown\n      icon="search"\n      height="tall"\n      containerProps={{ maxHeight: \'150px\' }}\n      label={\n        <ItunesSearch.Input\n          value={search}\n          onChange={e => onChange(e.target.value)}\n        />\n      }\n    >\n      {results.length ? (\n        results.map(\n          ({ collectionId, artworkUrl60, artistName, collectionName }) => (\n            <Dropdown.Option key={collectionId} value={collectionId}>\n              <View mr="15px">\n                <img src={artworkUrl60} height="30px" width="30px" />\n              </View>\n              {artistName} - {collectionName}\n            </Dropdown.Option>\n          ),\n        )\n      ) : search.length ? (\n        <View mr="15px" ml="15px">\n          <Text>No results for "{search}"</Text>\n        </View>\n      ) : (\n        <View mr="15px" ml="15px">\n          <Text>Start typing to search albums</Text>\n        </View>\n      )}\n    </Dropdown>\n  )}\n</ItunesSearch>',__scope:{props:this?this.props:o,Playground:d.c,Dropdown:g.a,View:B.a,Row:D.a,Text:O.a,Icon:f.a,ItunesSearch:v},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKYtQHE4RnMI1ZXaAABGAiDiCpJFCCBLUiAF030OBJEIygZmI1BcIg9gADUIBgMYyLlKiaP8Vx6MYq0WPXGh2KEkS-Pw9gRVGdDyIk2jpIYpivk-BSCHYjSRlU9UrGwKU3Uo6jdJkgz5OoNjJEsayLPtBpdC08T7Kkxy5KMlzFMkbzqE8qYm2Q-BnHFARyDxMT2g9A92OCjMTLCggYrgOLXASvBIvUzVfPlM12jBVBdBRY5Tiw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZz6gAWEb2AANhGsb1jAYCADFvWgRI-v4ZxDgRB1MBgoR-CWIhqEoOBJoRVbq3WmhnAgLDLnYABGWbxvkKqaqmABBOZWvYCMoMS6B0DDVCOVasQQejGR2BRZqYG4YBsMalG4HkLca2AcGoEh4IADJifGRJ5koZoCaJ8xuHpuUwGQyUBl49gAH4NghsMIxhq4abDH7qykGQqzfMwYUszAwDCKApl52H4eFwHl2rBNA0lHANsyFIrwIXGa1raLnTy-LEoNw32tBpGzbwJYunpOW4CWah7D8GdunkGHuDhqM1cthNOO40Z_X9gOLFiag-BAOBbf4Fdw98GAIBSQho4IeIoHjsPw90DO0AyaCBzgNGoKiLAAAlk9Tgg-vegBWfqVtQoXE8NuDAigNGE7bxhjdi22cAaVAZnCHu2_YVh4gZNHY4KxLW4ny3XfdtI0e6H29lQN33DSCM_wz7rRxwKeoAZDlF6X9hN3Hy3L_Di3E-AB3QidnBYBnAtOb9q-LBft-ogzB_r_CwoNb4TyoAkLY3ZUD3nGiAw2BUCAjCFNsAAqgIKAi1-rwIQRYJBtgCAADlvQwFwXgyBsAWbUBIUechv8vaK2AXgxgQceI4B1DMGB7BtgwESGjSh0DWb3jQqfGe-NKBQOobA9AONwFL0YMpMYRABDRwbiNcQ8ir6MH5LOOACU0ZIJQQIdBmDsFoU2CnNO_AkxNywPwPMXAJjR1sRokA19H4IKkEozxIDgAEJRLQmAaFzTtUEdIoJ98QFSDYSHDhXDWa-LbhyehE83xXz5jbeeeB350BSF_JW0SlHsBUWo-ubiSld34Oo-xIAkmJ0YO5LA-siHDn_iZQ0Qp2D8GAHPQqP0mBuWsvUy23jhIjBGRYTJzCFHFNKdU8ptTKllLcZM0ZTT9aNSQeTGYBQhxZMKiEKAHhQhEDgFIDZaztw-K0ewC-8iYlERDkk-5OcpD91Ntki2UgNYEC1jrPWuMpAqzFmYL8IA0rOUyuxD5-VCr_i0BQYC-gGB4Usr8pYwBoJ9BgGuEKBA0LJVNIqW0llkawByMlcl2RzQZTYpVVAaL7TACUUsYeo8CVlR0gFfSVoGVMqmBMIQNxYBlSgE4fweBJBCpEAQX0VVJb2mlrLKY5A4JwDsHCxKYpHYdOsnQdAdhsVdDxZldq6wURZGBh1f2fTEp9Xuobdp9x2AAG0AC66whbrFCNxLIOrX4dLajKkVMAIz-ESNVEG3s4Y2sNn9dqdq7bsHFR2AoaFg0EhwJa2gK4IDNAjEm3Jn88SMCGuwAAPhWlNlA00zhhl0HKAhQ6GwmLYbNo4tm0FBqm6aKQriogZF7FcCaHZOljsDVwIxXDjjAKORKMySiEFuPcR4Lxco4FmGSP8nxJBJvZlAfkLxuDvX6sTfQLx-HxBOUQYmtABBEG4AAEmAPCQEaCRQNFNfoRdNYk09wvsUFc6Saz5pBmO6gsds0ZxynYembUABM_V-owzjZbBNz94CBuxpO6d44IOoCg5oagvMe5trgB2ggXaw2Yd1djEDFh77kco9Rntta-1XBllAWOw7qxKCGsh8W1YV67w3iDJNMb8TttjlRmDNGk38eY769A_qsNOyE3_A1kZUMrkbX0cwzH-xcQowLOgoMcAWeYzmshW8d4ewHVmkTHteOMbMN61AWq8ABrfuy8IwNqUPlBmq_wcAglLGpUsCzOAjN3EYZvYBijxk9HVaF0hAiUuRKRk1WAs9svBO-b50QOcbCYAADKuE7konuJWYBngEEIAQVWc7ACizF7G1Xq7WJAPXRZ2cA44nQM46pyGACkfXLbUtLl4AQU4-qoBcu0eQ98b7C0kDc98HIgPVhYDdOCu1DSwCwCqB6h2rjvWOxYMAh3LQQC6NI_mkjTmoAu-wdQeQYhgESLS5FNB-b6AyC9-IKdUDmheNRF1KJG2JRe5YmuZ3RsvYGxMeH_URvHa2-C262xXBpARdQQCecUVgTQ_wVApD-BXH4D8Ys1QMjmh_Nu866x-CsAyPkagFPukgH6jgHn_UmfVn4OUcg_QEkc6QFz_6SM8KioZ6KzAZJKCJFzHkPZxKLTU7-KWAXFh-BRDQJz_gqhsAIp11zhXWnqrCTgJztDuuIX1UNyAd6vPefmgSjgAA7Gb-36unfvUWjgAAHDgRaPuucBe-6xRSTvZo4AQ7z8P_BxUqbgHgJ3AA9OP71Pc4Heu9JPghNQGX94HkPYeQBerc-Cmn3gPjUEgCkPHqACc_YMMT_gtAfRZAp1T00tB3fF63fweQCgltAA",style:{minHeight:"250px"}},p.a.createElement(v,null,function(e){var n=e.search,o=e.results,t=e.onChange;return p.a.createElement(g.a,{icon:"search",height:"tall",containerProps:{maxHeight:"150px"},label:p.a.createElement(v.Input,{value:n,onChange:function(e){return t(e.target.value)}})},o.length?o.map(function(e){var n=e.collectionId,o=e.artworkUrl60,t=e.artistName,r=e.collectionName;return p.a.createElement(g.a.Option,{key:n,value:n},p.a.createElement(B.a,{mr:"15px"},p.a.createElement("img",{src:o,height:"30px",width:"30px"})),t," - ",r)}):n.length?p.a.createElement(B.a,{mr:"15px",ml:"15px"},p.a.createElement(O.a,null,'No results for "',n,'"')):p.a.createElement(B.a,{mr:"15px",ml:"15px"},p.a.createElement(O.a,null,"Start typing to search albums")))})))}}]),n}(p.a.Component);R.isMDXComponent=!0},"./packages/ui-dom/components/Input/index.js":function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=A(o("./node_modules/react/index.js")),r=A(o("./node_modules/styled-components/dist/styled-components.browser.esm.js")),a=o("./packages/ui/lib/utils.js"),i=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var t=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};t.get||t.set?Object.defineProperty(n,o,t):n[o]=e[o]}return n.default=e,n}(o("./packages/ui/lib/components/Input/index.js")),l=A(o("./packages/ui-dom/components/Field/index.js"));function A(e){return e&&e.__esModule?e:{default:e}}function c(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{},t=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(n){p(e,n,o[n])})}return e}function p(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function s(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  -webkit-font-smoothing: antialiased;\n  display: block;\n  box-sizing: border-box;\n  width: ",";\n  outline: none;\n  :focus {\n    ",";\n  }\n  ::placeholder {\n    ",";\n  }\n  ",";\n  ",";\n"]);return s=function(){return e},e}function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var g=(0,a.withProps)({focus:!0}),m=t.default.forwardRef(function(e,n){var o=e.area,r=u(e,["area"]);return delete r.fluid,delete r.focus,o?t.default.createElement("textarea",d({ref:n},r)):t.default.createElement("input",d({ref:n},r))}),B=(0,r.default)(m)(s(),function(e){return e.fluid?"100%":"auto"},g(i.container),i.placeholder,i.container,i.text),w=t.default.forwardRef(function(e,n){return t.default.createElement(l.default,d({Component:B,fowardedRef:n},e))});w.propTypes=c({},i.container.propTypes,i.text.propTypes),w.defaultProps=c({},i.container.defaultProps,i.text.defaultProps);var D=w;n.default=D},"./packages/ui-dom/components/RadioButton/index.js":function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=A(o("./node_modules/react/index.js")),r=A(o("./node_modules/styled-components/dist/styled-components.browser.esm.js")),a=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var t=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};t.get||t.set?Object.defineProperty(n,o,t):n[o]=e[o]}return n.default=e,n}(o("./packages/ui/lib/components/RadioButton/index.js")),i=A(o("./packages/ui/lib/components/Group/index.js")),l=A(o("./packages/ui-dom/components/View/index.js"));function A(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}function p(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function s(){var e=m(["\n  -webkit-font-smoothing: antialiased;\n  cursor: ",";\n  ",";\n"]);return s=function(){return e},e}function d(){var e=m(["\n  box-sizing: border-box;\n  ",";\n"]);return d=function(){return e},e}function u(){var e=m(["\n  box-sizing: border-box;\n  ",";\n"]);return u=function(){return e},e}function g(){var e=m(["\n  box-sizing: border-box;\n  cursor: ",";\n  ",";\n"]);return g=function(){return e},e}function m(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var B=r.default.div(g(),function(e){return e.disabled?"default":"pointer"},a.container);B.defaultProps=a.container.defaultProps;var w=r.default.div(u(),a.button);w.defaultProps=a.button.defaultProps;var D=r.default.div(d(),a.checkMark);D.defaultProps=a.checkMark.defaultProps;var b=r.default.label(s(),function(e){return e.disabled?"default":"pointer"},a.label);function O(e){var n=e.onChange,o=e.disabled,r=e.checked,a=e.label,i=p(e,["onChange","disabled","checked","label"]);return t.default.createElement(B,c({onClick:n,disabled:o,checked:r},i),t.default.createElement(w,{checked:r,disabled:o,label:a},r&&t.default.createElement(D,null)),a&&t.default.createElement(b,c({disabled:o},i),a))}b.defaultProps=a.label.defaultProps,O.Group=(0,i.default)(function(e){var n=e.onSelect,o=e.selected;return{disabled:e.disabled,onChange:n,checked:o}})(l.default),O.Group.displayName="RadioGroup";var h=O;n.default=h},"./packages/ui-dom/components/index.js":function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Col",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(n,"Row",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(n,"View",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(n,"Button",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(n,"Input",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(n,"RadioButton",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(n,"Dropdown",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(n,"Text",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(n,"Icon",{enumerable:!0,get:function(){return s.default}});var t=d(o("./packages/ui-dom/components/Col/index.js")),r=d(o("./packages/ui-dom/components/Row/index.js")),a=d(o("./packages/ui-dom/components/View/index.js")),i=d(o("./packages/ui-dom/components/Button/index.js")),l=d(o("./packages/ui-dom/components/Input/index.js")),A=d(o("./packages/ui-dom/components/RadioButton/index.js")),c=d(o("./packages/ui-dom/components/Dropdown/index.js")),p=d(o("./packages/ui-dom/components/Text/index.js")),s=d(o("./packages/ui-dom/components/Icon/index.js"));function d(e){return e&&e.__esModule?e:{default:e}}},"./packages/ui/lib/components/Input/index.js":function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.placeholder=n.error=n.text=n.container=void 0;var t=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./packages/ui/node_modules/styled-system/dist/index.esm.js"),a=o("./packages/ui/lib/styles/index.js");function i(){var e=d(["\n  color: ",";\n"]);return i=function(){return e},e}function l(){var e=d(["\n  color: ",";\n  ",";\n  ",";\n  ",";\n"]);return l=function(){return e},e}function A(){var e=d(["\n  color: ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n"]);return A=function(){return e},e}function c(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{},t=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(n){p(e,n,o[n])})}return e}function p(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function s(){var e=d(["\n  border-radius: 4px;\n  border: 1px solid;\n  border-color: ",";\n  padding: ",";\n  ",";\n  ",";\n  ",";\n"]);return s=function(){return e},e}function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var u=(0,t.css)(s(),function(e){var n=e.active,o=e.disabled,t=e.focus,r=e.theme.colors;return t?r.blue:n&&!o?r.pink:r.lightGrey},function(e){var n=e.area,o=e.theme.space;return n?"".concat(o[2],"px ").concat(o[2],"px ").concat(o[2],"px ").concat(o[2],"px"):"".concat(o[0],"px ").concat(o[2],"px ").concat(o[0],"px ").concat(o[2],"px")},a.buttonHeight,r.border,r.borderColor);n.container=u,u.propTypes=c({},a.buttonHeight.propTypes,r.border.propTypes,r.borderColor.propTypes),u.defaultProps={letterSpacing:"default",height:"tall",fluid:!0};var g=(0,t.css)(A(),function(e){var n=e.disabled,o=e.theme.colors;return n?o.disabled:o.dark},a.defaultFontFamily,r.color,a.fontSize,a.letterSpacing,r.fontFamily);n.text=g,g.propTypes=c({},r.color.propTypes,a.fontSize.propTypes,a.letterSpacing.propTypes,r.fontFamily.propTypes),g.defaultProps={fontSize:"default",letterSpacing:"default"};var m=(0,t.css)(l(),(0,r.themeGet)("colors.red"),a.defaultFontFamily,a.fontSize,a.letterSpacing);n.error=m,m.propTypes=c({},a.fontSize.propTypes,a.letterSpacing.propTypes),m.defaultProps={fontSize:"small",letterSpacing:"default"};var B=(0,t.css)(i(),(0,r.themeGet)("colors.disabled"));n.placeholder=B,B.propTypes={}},"./packages/ui/lib/components/RadioButton/index.js":function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.label=n.checkMark=n.button=n.container=n.INNER_BULLET_SIZE=n.BULLET_BORDER=n.BULLET_SIZE=void 0;var t=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./packages/ui/node_modules/styled-system/dist/index.esm.js"),a=o("./packages/ui/lib/components/Text/index.js"),i=o("./packages/ui/lib/styles/index.js");function l(){var e=u(["\n  color: ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n"]);return l=function(){return e},e}function A(){var e=u(["\n  width: ","px;\n  height: ","px;\n  border-radius: ","px;\n  margin: ","px;\n  background-color: white;\n"]);return A=function(){return e},e}function c(){var e=u(["\n  width: ","px;\n  height: ","px;\n  border-radius: ","px;\n  border: ","px solid\n    ",";\n  background-color: ",";\n  margin-right: 14px;\n"]);return c=function(){return e},e}function p(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{},t=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(n){s(e,n,o[n])})}return e}function s(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function d(){var e=u(["\n  border-radius: 4px;\n  border: 1px solid;\n  border-color: ",";\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  ",";\n"]);return d=function(){return e},e}function u(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}n.BULLET_SIZE=18;n.BULLET_BORDER=2;n.INNER_BULLET_SIZE=6;var g=(0,t.css)(d(),function(e){var n=e.checked,o=e.theme.colors;return n?o.pink:o.lightGrey},i.buttonHeight);n.container=g,g.propTypes=p({},i.buttonHeight.propTypes),g.defaultProps={height:"tall",fontSize:"default",letterSpacing:"default"};var m=(0,t.css)(c(),18,18,18,2,function(e){var n=e.checked,o=e.theme.colors;return n?o.pink:o.grey},function(e){var n=e.checked,o=e.disabled,t=e.theme.colors;return n?o?t.grey:t.pink:"transparent"});n.button=m,m.propTypes={};var B=(0,t.css)(A(),6,6,6,4);n.checkMark=B,B.propTypes={};var w=(0,t.css)(l(),function(e){var n=e.disabled,o=e.theme.colors;return n?o.disabled:o.dark},a.container,i.defaultFontFamily,i.fontSize,i.letterSpacing,r.fontFamily);n.label=w,w.propTypes=p({},i.fontSize.propTypes,i.letterSpacing.propTypes,r.fontFamily.propTypes)}}]);
//# sourceMappingURL=docs-components-dropdown.bea259b91bd51e5355bd.js.map