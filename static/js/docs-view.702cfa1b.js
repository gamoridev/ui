(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./docs/view.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),i=t.n(a),o=t("./node_modules/@mdx-js/tag/dist/index.js"),r=t("./node_modules/docz/dist/index.m.js"),l=t("./packages/ui-dom/components/View/index.js"),s=t.n(l),u=t("./packages/ui-dom/components/Row/index.js"),m=t.n(u),c=t("./packages/ui-dom/components/Col/index.js"),p=t.n(c),d=t("./packages/ui-dom/components/Text/index.js"),g=t.n(d),w=t("./packages/ui-dom/components/Button/index.js"),x=t.n(w);function f(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}n.default=function(e){var n=e.components,t=f(e,["components"]);return i.a.createElement(o.MDXTag,{name:"wrapper",components:n},i.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"view"}},"View"),i.a.createElement(o.MDXTag,{name:"p",components:n},"The ",i.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"View")," component is a wrapper for an empty and unstyled ",i.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"div"),"."),i.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},"Basic usage"),i.a.createElement(r.Playground,{__position:0,__code:'<View>\n  <View p={4} body>\n    <Text textAlign="justify">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n      mollit anim id est laborum.\n    </Text>\n  </View>\n  <View p={4} bottom>\n    <Button active fluid>\n      Fixed at the bottom\n    </Button>\n  </View>\n</View>',__scope:{props:t,View:s.a,Row:m.a,Col:p.a,Text:g.a,Button:x.a}},i.a.createElement(s.a,null,i.a.createElement(s.a,{p:4,body:!0},i.a.createElement(g.a,{textAlign:"justify"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),i.a.createElement(s.a,{p:4,bottom:!0},i.a.createElement(x.a,{active:!0,fluid:!0},"Fixed at the bottom")))),i.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"elevation"}},"Elevation"),i.a.createElement(r.Playground,{__position:1,__code:'<Row flexWrap="wrap">\n  {Array(24)\n    .fill(null)\n    .map((_, i) => (\n      <Col key={i} p={5} width={1 / 3}>\n        <View elevation={i} bg="lightGrey" pt={10} pb={10}>\n          <Text size="large" textAlign="center" fontWeight="bold">\n            {i}\n          </Text>\n        </View>\n      </Col>\n    ))}\n</Row>',__scope:{props:t,View:s.a,Row:m.a,Col:p.a,Text:g.a,Button:x.a}},i.a.createElement(m.a,{flexWrap:"wrap"},Array(24).fill(null).map(function(e,n){return i.a.createElement(p.a,{key:n,p:5,width:1/3},i.a.createElement(s.a,{elevation:n,bg:"lightGrey",pt:10,pb:10},i.a.createElement(g.a,{size:"large",textAlign:"center",fontWeight:"bold"},n)))}))))}}}]);