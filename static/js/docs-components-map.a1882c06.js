(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./docs/components/map.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),l=n("./node_modules/@mdx-js/tag/dist/index.js"),a=n("./node_modules/docz/dist/index.m.js"),i=n("./packages/ui-dom/components/View/index.js"),s=n.n(i),u=n("./packages/ui-dom/components/Map/index.js"),d=n.n(u),c=n("./packages/ui-dom/components/Icon/index.js"),p=n.n(c),f=n("./docs/components/markers.json");function g(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){var t=e.components,n=g(e,["components"]);return r.a.createElement(l.MDXTag,{name:"wrapper",components:t},r.a.createElement(l.MDXTag,{name:"h1",components:t,props:{id:"map"}},"Map"),r.a.createElement(l.MDXTag,{name:"p",components:t},"Map component."),r.a.createElement(l.MDXTag,{name:"h2",components:t,props:{id:"basic-usage"}},"Basic usage"),r.a.createElement(a.Playground,{__position:0,__code:'<View m={4} height={400}>\n  <Map apiKey={GOOGLE_MAPS_API_KEY}>\n    <View {...markers[0]} mt={-25}>\n      <Icon name="map-marker-alt" color="pink" size={25} />\n    </View>\n  </Map>\n</View>',__scope:{props:n,View:s.a,Map:d.a,Icon:p.a,markers:f,GOOGLE_MAPS_API_KEY:""}},r.a.createElement(s.a,{m:4,height:400},r.a.createElement(d.a,{apiKey:""},r.a.createElement(s.a,Object.assign({},f[0],{mt:-25}),r.a.createElement(p.a,{name:"map-marker-alt",color:"pink",size:25}))))),r.a.createElement(l.MDXTag,{name:"h2",components:t,props:{id:"clustermarker"}},"ClusterMarker"),r.a.createElement(a.Playground,{__position:1,__code:"<View m={4} height={400}>\n  <Map\n    cluster\n    apiKey={GOOGLE_MAPS_API_KEY}\n    isHighlight={({ id }) => id == markers[0].id}\n    onChange={(bounds, listings) =>\n      console.log('onChange', { bounds, listings })\n    }\n  >\n    {markers.map(props => (\n      <Map.Marker\n        {...props}\n        key={props.id}\n        onSelect={() => console.log('onSelect', props.id)}\n      >\n        {String(props.text)}\n      </Map.Marker>\n    ))}\n  </Map>\n</View>",__scope:{props:n,View:s.a,Map:d.a,Icon:p.a,markers:f,GOOGLE_MAPS_API_KEY:""}},r.a.createElement(s.a,{m:4,height:400},r.a.createElement(d.a,{cluster:!0,apiKey:"",isHighlight:function(e){return e.id==f[0].id},onChange:function(e,t){return console.log("onChange",{bounds:e,listings:t})}},f.map(function(e){return r.a.createElement(d.a.Marker,Object.assign({},e,{key:e.id,onSelect:function(){return console.log("onSelect",e.id)}}),String(e.text))})))),r.a.createElement(l.MDXTag,{name:"h2",components:t,props:{id:"multimarker"}},"MultiMarker"),r.a.createElement(l.MDXTag,{name:"p",components:t},"When clustering is enabled and the zoom level is greater than ",r.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"cluster.maxZoom")," (defaults to ",r.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"17"),"), markers on the same spot are clustered into multi markers."),r.a.createElement(l.MDXTag,{name:"p",components:t},"Use ",r.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"multiMarkerRadius")," to adjust the cluster radius in pixels. ",r.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"0")," only groups markers in the same coordinates."),r.a.createElement(a.Playground,{__position:2,__code:"<View m={4} height={400}>\n  <Map cluster apiKey={GOOGLE_MAPS_API_KEY}>\n    {['A', 'B', 'C'].map(name => (\n      <Map.Marker {...markers[0]} key={name}>\n        {'Marker ' + name}\n      </Map.Marker>\n    ))}\n  </Map>\n</View>",__scope:{props:n,View:s.a,Map:d.a,Icon:p.a,markers:f,GOOGLE_MAPS_API_KEY:""}},r.a.createElement(s.a,{m:4,height:400},r.a.createElement(d.a,{cluster:!0,apiKey:""},["A","B","C"].map(function(e){return r.a.createElement(d.a.Marker,Object.assign({},f[0],{key:e}),"Marker "+e)})))))}},"./docs/components/markers.json":function(e){e.exports=[{lat:-22.9608099,lng:-43.2096142,id:"101.a",text:6e5},{lat:-22.9608099,lng:-43.2096142,id:"101.b",text:6e5},{lat:-22.9608099,lng:-43.2096142,id:"101.c",text:6e5},{lat:-22.9833576,lng:-43.1998199,id:"312",text:117e4},{lat:-22.9711476,lng:-43.1845933,id:"128",text:119e4},{lat:-22.9390338,lng:-43.1745585,id:"259",text:18e5},{lat:-22.9528316,lng:-43.1769845,id:"65",text:86e4},{lat:-22.9819421,lng:-43.2389042,id:"72",text:14e5},{lat:-22.9430224,lng:-43.19151440000002,id:"89",text:88e4},{lat:-22.9815548,lng:-43.19424230000001,id:"117",text:85e4},{lat:-22.9527353,lng:-43.1677344,id:"190",text:17e5},{lat:-22.9755316,lng:-43.1925039,id:"346",text:7100100},{lat:-22.9565911,lng:-43.1786764,id:"86",text:87e4},{lat:-22.9783778,lng:-43.1894693,id:"227",text:12e5},{lat:-22.983671,lng:-43.195971,id:"201",text:75e4},{lat:-22.9622834,lng:-43.17716410000003,id:"68",text:156e4},{lat:-22.977617,lng:-43.225388,id:"322",text:195e4},{lat:-22.9796507,lng:-43.2204178,id:"267",text:11e5},{lat:-22.9868888,lng:-43.22706640000001,id:"24",text:41e5},{lat:-22.9398251,lng:-43.1780107,id:"76",text:103e4},{lat:-22.9315194,lng:-43.1819802,id:"17",text:475e4},{lat:-22.9401365,lng:-43.17981529999997,id:"10",text:113e4},{lat:-22.964473,lng:-43.193532300000015,id:"73",text:95e4},{lat:-22.9521841,lng:-43.190136300000006,id:"22",text:18e5},{lat:-22.9676447,lng:-43.183341799999994,id:"20",text:32e5},{lat:-22.9298234,lng:-43.18366600000002,id:"18",text:63e5},{lat:-22.9671543,lng:-43.20317490000002,id:"21",text:28e5},{lat:-22.964855,lng:-43.202516,id:"33",text:21e5},{lat:-22.95810179999999,lng:-43.17809299999999,id:"70",text:1035e3},{lat:-22.9775522,lng:-43.228355599999986,id:"7",text:201e4},{lat:-22.983607,lng:-43.227337000000034,id:"9",text:21e5},{lat:-22.9949306,lng:-43.275009599999976,id:"11",text:35e5},{lat:-22.984197,lng:-43.232776,id:"75",text:8e5},{lat:-22.9852005,lng:-43.2040217,id:"14",text:115e4},{lat:-22.9780911,lng:-43.2258137,id:"45",text:17e5},{lat:-22.940907,lng:-43.19132289999999,id:"16",text:85e4},{lat:-22.9489083,lng:-43.18400610000003,id:"25",text:165e4},{lat:-22.9606056,lng:-43.2013486,id:"39",text:38e5},{lat:-22.9777622,lng:-43.2279125,id:"23",text:21e5},{lat:-22.953479,lng:-43.18142260000002,id:"26",text:175e4},{lat:-22.9606056,lng:-43.2013486,id:"34",text:106e4},{lat:-22.9606056,lng:-43.2013486,id:"41",text:117e4},{lat:-22.941858,lng:-43.192853,id:"31",text:145e4},{lat:-22.9834622,lng:-43.192355899999995,id:"19",text:78e4},{lat:-22.9363508,lng:-43.1762839,id:"3",text:85e4},{lat:-22.9830535,lng:-43.21074709999999,id:"8",text:225e4},{lat:-22.9869688,lng:-43.22890540000003,id:"29",text:392e4},{lat:-22.983834,lng:-43.193774,id:"6",text:145e4},{lat:-22.9529669,lng:-43.19172259999999,id:"44",text:265e4},{lat:-22.9335162,lng:-43.1831869,id:"13",text:2e6},{lat:-22.9847552,lng:-43.231512699999996,id:"43",text:26e5},{lat:-22.9393772,lng:-43.19178420000003,id:"28",text:14e5},{lat:-22.937725,lng:-43.17785930000002,id:"27",text:94e4},{lat:-22.965372,lng:-43.18042890000004,id:"58",text:28e5},{lat:-22.9594502,lng:-43.2019129,id:"79",text:11e5},{lat:-22.9353967,lng:-43.1800132,id:"63",text:199e4},{lat:-22.927198,lng:-43.1754482,id:"61",text:99e4},{lat:-22.9695264,lng:-43.189977,id:"48",text:95e4},{lat:-22.937892,lng:-43.176018899999974,id:"50",text:295e4},{lat:-22.9677755,lng:-43.2037935,id:"64",text:1075e3},{lat:-22.972449,lng:-43.1906283,id:"62",text:73e4},{lat:-22.9598355,lng:-43.20344720000001,id:"55",text:236e4},{lat:-22.9753444,lng:-43.192375700000014,id:"36",text:79e4},{lat:-22.987151,lng:-43.231600000000014,id:"49",text:265e4},{lat:-22.9775617,lng:-43.19728040000001,id:"38",text:15e5},{lat:-22.9763192,lng:-43.19340310000001,id:"59",text:115e4},{lat:-22.9769635,lng:-43.19588090000002,id:"66",text:103e4},{lat:-22.937064,lng:-43.18301,id:"54",text:99e4},{lat:-22.9661014,lng:-43.21675540000001,id:"51",text:4e6},{lat:-22.9646223,lng:-43.22099109999999,id:"78",text:113e4},{lat:-22.983573,lng:-43.190094999999985,id:"60",text:147e4},{lat:-22.9560791,lng:-43.190205900000024,id:"84",text:12e5},{lat:-22.9569151,lng:-43.19849629999999,id:"56",text:82e4},{lat:-22.9259373,lng:-43.1772277,id:"85",text:85e4},{lat:-22.983757,lng:-43.1986682,id:"94",text:15e5},{lat:-22.9369602,lng:-43.1775996,id:"90",text:95e4},{lat:-22.966082,lng:-43.18899769999996,id:"69",text:1185e3},{lat:-22.9362411,lng:-43.1850009,id:"92",text:12e5},{lat:-22.961293,lng:-43.218241,id:"88",text:895e3},{lat:-22.9837898,lng:-43.19356979999998,id:"80",text:1e6},{lat:-22.9717697,lng:-43.18636129999999,id:"83",text:105e4},{lat:-22.9746287,lng:-43.19011330000001,id:"81",text:72e4},{lat:-22.9841382,lng:-43.190887299999986,id:"87",text:15e5},{lat:-22.9858367,lng:-43.21370159999999,id:"95",text:2e7},{lat:-22.9910577,lng:-43.3009366,id:"52",text:58e5},{lat:-22.9813083,lng:-43.19266479999999,id:"82",text:12e5},{lat:-22.9847341,lng:-43.1936536,id:"104",text:165e4},{lat:-22.981379,lng:-43.205669,id:"103",text:19e5},{lat:-22.9822996,lng:-43.2038386,id:"112",text:1545e3},{lat:-22.9625068,lng:-43.17389179999999,id:"102",text:14e5},{lat:-22.9600117,lng:-43.2031126,id:"109",text:98e4},{lat:-23.9720949,lng:-46.3159834,id:"100",text:123e4},{lat:-22.9600117,lng:-43.2031126,id:"107",text:92e4},{lat:-22.983799,lng:-43.197536,id:"129",text:1442e3},{lat:-22.9872476,lng:-43.1901074,id:"130",text:265e4},{lat:-22.9817997,lng:-43.2086305,id:"127",text:23e5},{lat:-22.9398054,lng:-43.1801507,id:"125",text:84e4},{lat:-22.985048,lng:-43.19176280000001,id:"131",text:38e5},{lat:-22.9782241,lng:-43.1924238,id:"126",text:134e4},{lat:-22.9828488,lng:-43.21254279999999,id:"114",text:42e5},{lat:-22.96082179999999,lng:-43.2074777,id:"133",text:115e4},{lat:-22.9828153,lng:-43.20972099999999,id:"135",text:28e5},{lat:-22.97413179999999,lng:-43.2304566,id:"124",text:145e4},{lat:-22.977427,lng:-43.2274914,id:"122",text:22e5},{lat:-22.940947,lng:-43.17579899999999,id:"142",text:245e4},{lat:-22.9521983,lng:-43.1875839,id:"140",text:92e4},{lat:-22.9718878,lng:-43.2077073,id:"187",text:155e4},{lat:-22.9288503,lng:-43.17428,id:"139",text:16e5},{lat:-22.9769263,lng:-43.2290044,id:"136",text:23e5},{lat:-22.9835792,lng:-43.19053769999999,id:"144",text:29e5},{lat:-22.95706479999999,lng:-43.1915771,id:"178",text:85e4},{lat:-22.9776292,lng:-43.2285486,id:"137",text:23e5},{lat:-22.941858,lng:-43.192853,id:"181",text:15e5},{lat:-22.9384632,lng:-43.1955651,id:"185",text:1085e3},{lat:-22.965168,lng:-43.2010153,id:"180",text:38e5},{lat:-22.9821776,lng:-43.1999828,id:"179",text:13e5},{lat:-22.9531527,lng:-43.1866453,id:"184",text:18e5},{lat:-22.984756,lng:-43.21304300000001,id:"188",text:32e5},{lat:-22.9962633,lng:-43.2720962,id:"198",text:49e5},{lat:-22.965332,lng:-43.189002,id:"197",text:78e4},{lat:-22.9728969,lng:-43.2272833,id:"134",text:179e4},{lat:-22.987264,lng:-43.229971,id:"192",text:215e4},{lat:-22.967297,lng:-43.184519,id:"196",text:168e4},{lat:-22.93960359999999,lng:-43.1769661,id:"194",text:95e4},{lat:-22.979827,lng:-43.21901400000001,id:"191",text:206e4},{lat:-22.936552,lng:-43.1907049,id:"210",text:36e5},{lat:-22.974009,lng:-43.22941099999999,id:"204",text:42e5},{lat:-22.9846119,lng:-43.2318939,id:"222",text:375e4},{lat:-22.9709026,lng:-43.1856618,id:"214",text:103e4},{lat:-22.9503237,lng:-43.1773817,id:"208",text:22e5},{lat:-22.983944,lng:-43.1928399,id:"202",text:1261e3},{lat:-22.9323341,lng:-43.17647569999999,id:"215",text:95e4},{lat:-22.9392996,lng:-43.1777373,id:"206",text:94e4},{lat:-22.9730155,lng:-43.2047867,id:"251",text:158e4},{lat:-22.9642184,lng:-43.18172510000001,id:"207",text:134e4},{lat:-22.9667925,lng:-43.1856543,id:"71",text:18e5},{lat:-22.9741007,lng:-43.1931298,id:"211",text:103e4},{lat:-22.96607699999999,lng:-43.187534,id:"209",text:99e4},{lat:-22.966354,lng:-43.202437,id:"199",text:44e5},{lat:-22.9853376,lng:-43.19182259999999,id:"221",text:299e4},{lat:-22.9807355,lng:-43.21916179999999,id:"223",text:21e5},{lat:-22.9806269,lng:-43.2027641,id:"218",text:24e5},{lat:-22.9877057,lng:-43.22998750000001,id:"226",text:95e5},{lat:-22.93542,lng:-43.175303,id:"216",text:2e6},{lat:-22.935302,lng:-43.18676699999999,id:"217",text:85e4},{lat:-22.957992,lng:-43.194113,id:"230",text:92e4},{lat:-22.9623311,lng:-43.1699247,id:"229",text:9e5},{lat:-22.9436495,lng:-43.1915764,id:"220",text:125e4},{lat:-22.9803599,lng:-43.20297000000001,id:"291",text:89e4},{lat:-22.962191,lng:-43.168627,id:"113",text:165e4},{lat:-22.9841402,lng:-43.22846229999999,id:"237",text:39e5},{lat:-22.9606056,lng:-43.2013486,id:"240",text:125e4},{lat:-22.9818269,lng:-43.19039859999999,id:"247",text:4e6},{lat:-22.9384778,lng:-43.17529739999999,id:"238",text:15e5},{lat:-22.9782191,lng:-43.19053549999999,id:"245",text:129e4},{lat:-22.9783408,lng:-43.1899313,id:"242",text:122e4},{lat:-22.981283,lng:-43.22583300000001,id:"249",text:2e6},{lat:-22.964187,lng:-43.1926865,id:"292",text:135e4},{lat:-22.9854479,lng:-43.2038987,id:"264",text:15e5},{lat:-22.9436342,lng:-43.1602982,id:"213",text:14e5},{lat:-22.936318,lng:-43.1756702,id:"262",text:98e4},{lat:-22.9747273,lng:-43.18827739999999,id:"260",text:22e5},{lat:-22.984756,lng:-43.21304300000001,id:"265",text:28e5},{lat:-22.9368283,lng:-43.1773625,id:"252",text:12e5},{lat:-22.932436,lng:-43.182209,id:"293",text:87e4},{lat:-22.9497259,lng:-43.191109,id:"258",text:14e5},{lat:-22.95227629999999,lng:-43.1920265,id:"319",text:1655e3},{lat:-22.9862535,lng:-43.2085443,id:"274",text:38e5},{lat:-22.9828471,lng:-43.2190744,id:"106",text:125e4},{lat:-22.9364204,lng:-43.1772464,id:"205",text:8e5},{lat:-22.98536499999999,lng:-43.205812,id:"269",text:24e5},{lat:-22.9841693,lng:-43.1907905,id:"294",text:22e5},{lat:-22.98441279999999,lng:-43.1971263,id:"277",text:888e3},{lat:-22.9951318,lng:-43.25443139999999,id:"272",text:13e5},{lat:-22.961163,lng:-43.21866190000001,id:"243",text:965e3},{lat:-22.9636603,lng:-43.17526919999999,id:"300",text:138e4},{lat:-22.9740647,lng:-43.2295688,id:"286",text:26e5},{lat:-22.9397343,lng:-43.1784653,id:"234",text:12e5},{lat:-22.9595579,lng:-43.2052847,id:"278",text:27e5},{lat:-22.985993,lng:-43.209852,id:"279",text:63e5},{lat:-22.9813418,lng:-43.20087359999999,id:"282",text:285e4},{lat:-22.9989087,lng:-43.2403759,id:"287",text:995e3},{lat:-22.9646235,lng:-43.22099180000001,id:"285",text:1e6},{lat:-23.005915,lng:-43.283554,id:"200",text:45e5},{lat:-22.9681899,lng:-43.1867738,id:"302",text:14e5},{lat:-22.9832883,lng:-43.1942136,id:"301",text:3298e3},{lat:-22.9829472,lng:-43.2273167,id:"297",text:13e6},{lat:-22.9620608,lng:-43.1683987,id:"306",text:15e5},{lat:-22.962482,lng:-43.202303,id:"235",text:21e5},{lat:-22.9664361,lng:-43.2171113,id:"325",text:2e6},{lat:-22.984609,lng:-43.2111949,id:"309",text:408e4},{lat:-22.9740622,lng:-43.1879301,id:"310",text:14e5},{lat:-22.9687043,lng:-43.1874209,id:"281",text:18e5},{lat:-22.95227629999999,lng:-43.1920265,id:"320",text:106e4},{lat:-22.93780599999999,lng:-43.1740104,id:"315",text:82e4},{lat:-22.9755475,lng:-43.2276579,id:"317",text:125e4},{lat:-22.95227629999999,lng:-43.1920265,id:"321",text:227e4},{lat:-22.9802468,lng:-43.2023146,id:"336",text:38e5},{lat:-22.95227629999999,lng:-43.1920265,id:"331",text:3275e3},{lat:-22.9655772,lng:-43.2240566,id:"334",text:48e5},{lat:-22.9753872,lng:-43.19832710000001,id:"268",text:53e5},{lat:-22.9946524,lng:-43.25471029999999,id:"338",text:775e3}]},"./packages/ui-dom/components/Map/ClusterMarker/index.js":function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n("./node_modules/react/index.js")),a=(r=n("./packages/ui-dom/components/Map/ClusterMarker/styles.js"))&&r.__esModule?r:{default:r};function i(e){return(i="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,d(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,l.PureComponent),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.points,n=e.onClick,o=e.highlight,r=void 0===o?[]:o;return l.default.createElement(a.default,{onClick:n&&n.bind(null,t),highlight:r.length>0},l.default.createElement("span",null,t.length))}}])&&s(n.prototype,o),r&&s(n,r),t}();t.default=p},"./packages/ui-dom/components/Map/ClusterMarker/styles.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"))&&o.__esModule?o:{default:o},l=n("./node_modules/styled-system/dist/index.esm.js");function a(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  box-sizing: border-box;\n  width: 35px;\n  height: 35px;\n  margin-left: -10px;\n  text-align: center;\n  font-size: 14px;\n  color: #fff;\n  border: 2px solid #fff;\n  border-radius: 100%;\n  background-color: ",";\n  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.3);\n  transform: translate(-50%, -50%);\n\n  > span {\n    box-sizing: border-box;\n    padding: 2px 0;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  ",";\n  :hover {\n    cursor: pointer;\n    color: ",";\n    background-color: white;\n  }\n"]);return a=function(){return e},e}var i=r.default.div(a(),(0,l.themeGet)("colors.pink"),function(e){var t=e.highlight,n=e.theme;return t?"background-color: white; color: ".concat(n.colors.pink,"; border: 2px solid ").concat(n.colors.pink,";"):""},(0,l.themeGet)("colors.pink"));t.default=i},"./packages/ui-dom/components/Map/Marker/index.js":function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n("./node_modules/react/index.js")),l=i(n("./node_modules/classnames/index.js")),a=i(n("./packages/ui-dom/components/Map/Marker/styles.js"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,c(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r.PureComponent),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.id,n=e.lat,o=e.lng,i=e.children,s=e.onSelect,u=e.highlight,d=e.onClick,c=void 0===d?s?function(){return s(t)}:void 0:d,p=e.onMouseEnter,f=void 0===p?s?function(){return s(t,{lat:n,lng:o})}:void 0:p,g=e.onMouseLeave,m=void 0===g?s?function(){return s(t,{})}:void 0:g;return r.default.createElement(a.default,{onClick:c,onMouseEnter:f,onMouseLeave:m,lat:n,lng:o,className:(0,l.default)({highlight:u,text:"string"===typeof i,clickable:Boolean(c)})},i)}}])&&u(n.prototype,o),i&&u(n,i),t}();t.default=f},"./packages/ui-dom/components/Map/Marker/styles.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.markerTipHighlightStyle=t.markerTipStyle=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n("./node_modules/styled-components/dist/styled-components.browser.esm.js")),r=n("./node_modules/styled-system/dist/index.esm.js");function l(){var e=s(["\n  background: ",";\n  color: white;\n  border-radius: 4px;\n  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.3);\n  font-size: 12px;\n  font-weight: 400;\n  margin-top: -6px;\n  padding: 3px 6px 4px;\n  position: absolute;\n  transform: translate(-50%, -100%)\n    scale(",");\n  transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  z-index: ",";\n  white-space: nowrap;\n  &:after {\n    ",";\n  }\n  &:hover,\n  &.highlight {\n    z-index: 1;\n    cursor: grab;\n  }\n  &.clickable:hover {\n    cursor: pointer;\n  }\n  &.text:hover,\n  &.text.highlight {\n    background: white;\n    color: ",";\n    &:after {\n      ",";\n    }\n  }\n"]);return l=function(){return e},e}function a(){var e=s(["\n  border-top: 8px solid white;\n"]);return a=function(){return e},e}function i(){var e=s(["\n  bottom: -6px;\n  content: '';\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-top: 8px solid ",";\n"]);return i=function(){return e},e}function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var u=(0,o.css)(i(),(0,r.themeGet)("colors.pink"));t.markerTipStyle=u;var d=(0,o.css)(a());t.markerTipHighlightStyle=d;var c=o.default.div(l(),(0,r.themeGet)("colors.pink"),function(e){return e.highlight?1.3:1},function(e){return e.highlight?1:0},u,(0,r.themeGet)("colors.pink"),d);t.default=c},"./packages/ui-dom/components/Map/MultiMarker/index.js":function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,l=s(n("./node_modules/react/index.js")),a=(r=n("./node_modules/classnames/index.js"))&&r.__esModule?r:{default:r},i=s(n("./packages/ui-dom/components/Map/MultiMarker/styles.js"));function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}function u(e){return(u="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,p(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,l.PureComponent),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.className,n=e.points,o=e.onClick,r=e.highlight,s=void 0===r?[]:r;return 1===n.length?l.default.cloneElement(n[0].node,{onClick:o,highlight:s.length>0}):l.default.createElement(i.default,{onClick:o&&o.bind(null,n),className:(0,a.default)(t,{highlight:s.length>0})},l.default.createElement(i.List,null,n.map(function(e){return l.default.cloneElement(e.node,{highlight:-1!==s.indexOf(e.id)})})))}}])&&d(n.prototype,o),r&&d(n,r),t}();t.default=g},"./packages/ui-dom/components/Map/MultiMarker/styles.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var o,r=(o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"))&&o.__esModule?o:{default:o},l=n("./node_modules/styled-system/dist/index.esm.js"),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n("./packages/ui-dom/components/Map/Marker/styles.js"));function i(){var e=u(["\n  z-index: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  border-radius: 4px;\n  overflow: hidden;\n"]);return i=function(){return e},e}function s(){var e=u(["\n  position: absolute;\n  transform: translate(-50%, -100%);\n  border: 2px solid ",";\n  border-radius: 4px;\n  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.3);\n  background: ",";\n  &:before {\n    z-index: 2;\n    position: absolute;\n    content: '';\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border-radius: 4px;\n    border: 1px solid ",";\n    pointer-events: none;\n  }\n  &:after {\n    ",";\n    margin-bottom: -2px;\n  }\n  &.highlight,\n  &:hover {\n    border-color: white;\n    background: white;\n    &:after {\n      ",";\n    }\n  }\n  "," {\n    z-index: 0;\n    position: relative;\n    transform: none;\n    margin: 0;\n    border-radius: 0;\n    box-shadow: none;\n    &:after,\n    &:before {\n      display: none;\n    }\n  }\n"]);return s=function(){return e},e}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d=r.default.div(s(),(0,l.themeGet)("colors.pink"),(0,l.themeGet)("colors.pink"),(0,l.themeGet)("colors.pink"),a.markerTipStyle,a.markerTipHighlightStyle,a.default);t.default=d;var c=r.default.div(i());t.List=c},"./packages/ui-dom/components/Map/index.js":function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=h(n("./node_modules/lodash/cond.js")),l=h(n("./node_modules/lodash/stubTrue.js")),a=h(n("./node_modules/lodash/constant.js")),i=h(n("./node_modules/lodash/identity.js")),s=h(n("./node_modules/lodash/flatten.js")),u=h(n("./node_modules/lodash/isObject.js")),d=h(n("./node_modules/lodash/isFunction.js")),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n("./node_modules/react/index.js")),p=h(n("./node_modules/prop-types/index.js")),f=h(n("./node_modules/google-map-react/lib/index.js")),g=h(n("./node_modules/points-cluster/lib/index.js")),m=h(n("./node_modules/lodash/noop.js")),x=h(n("./packages/ui-dom/components/Map/Marker/index.js")),y=h(n("./packages/ui-dom/components/Map/ClusterMarker/index.js")),b=h(n("./packages/ui-dom/components/Map/MultiMarker/index.js"));function h(e){return e&&e.__esModule?e:{default:e}}function O(e){return(O="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function v(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function j(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){P(e,t,n[t])})}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S,C=(S=function(){return{minZoom:0,maxZoom:17,radius:40}},(0,r.default)([[d.default,i.default],[u.default,a.default],[l.default,S]])),E=function(e,t){return t.mapOptions.bounds?function(e,t){var n=t.markers,o=t.mapOptions,r=w({},t.clusterOptions);return!isNaN(e.multiMarkerRadius)&&o.zoom>r.maxZoom&&Object.assign(r,{maxZoom:e.maxZoom,radius:e.multiMarkerRadius}),(0,g.default)(n,r)(o)}(e,t).map(function(e){var t=e.wx,n=e.wy,o=e.numPoints,r=e.points;return{lat:n,lng:t,numPoints:o,id:"".concat(o,"_").concat(r[0].id),points:r}}):[]},T={Coordinates:p.default.shape({lat:p.default.number.isRequired,lng:p.default.number.isRequired}),SuperClusterOptions:p.default.shape({minZoom:p.default.number.isRequired,maxZoom:p.default.number.isRequired,radius:p.default.number.isRequired})},A=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,a=new Array(l),i=0;i<l;i++)a[i]=arguments[i];return o=this,r=(e=_(t)).call.apply(e,[this].concat(a)),P(M(M(n=!r||"object"!==O(r)&&"function"!==typeof r?M(o):r)),"state",{markers:void 0,clusters:void 0,mapOptions:{center:{lat:-22.9608099,lng:-43.2096142},zoom:8},hasAggregators:!1,loaded:!1}),P(M(M(n)),"onMapLoaded",function(e){var t=e.map,o=e.maps;if(t){var r=n.props,l=r.onDragEnd,a=r.onZoomChanged;n.setState({loaded:!0}),n.map=t,n.maps=o,n.fitMap(n.state.markers),l&&t.addListener("dragend",l),a&&t.addListener("zoom_changed",a)}}),P(M(M(n)),"onMapChange",function(e){var t=e.center,o=e.zoom,r=e.bounds;return n.setState({clusters:void 0,mapOptions:{center:t,zoom:o,bounds:r}},n.boundsUpdated)}),P(M(M(n)),"fitMap",function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.state.markers,t=e.map(function(e){return new n.maps.LatLng(e.lat,e.lng)}),o=new n.maps.LatLngBounds,r=0,l=t.length;r<l;r++)o.extend(t[r]);if(n.fitBounds(o),1===e.length&&n.setZoom(15),0===e.length){var a=n.state.mapOptions.center;n.setCenter(new n.maps.LatLng(a.lat,a.lng)),n.setZoom(13)}}),P(M(M(n)),"frameCluster",function(e){for(var t=n.props.onFrameCluster,o=e.map(function(e){return new n.maps.LatLng(e.lat,e.lng)}),r=new n.maps.LatLngBounds,l=0,a=o.length;l<a;l++)r.extend(o[l]);n.fitBounds(r),t&&t(r,e)}),P(M(M(n)),"createMapOptions",function(e){var t=n.props,o=t.options,r=t.minZoom,l=t.maxZoom,a=t.defaultZoom,i=t.defaultCenter;return"function"===typeof o?o(e):o||{defaultZoom:a,defaultCenter:i,maxZoom:l,minZoom:r,zoomControlOptions:{position:e.ControlPosition.RIGHT_TOP,style:e.ZoomControlStyle.SMALL},mapTypeControlOptions:{position:e.ControlPosition.TOP_RIGHT},mapTypeControl:!0}}),P(M(M(n)),"getMarkerHighlight",function(e){var t=e.id,o=e.lat,r=e.lng,l=n.props,a=l.highlight,i=l.isHighlight;return"function"===typeof i?i({id:t,lat:o,lng:r}):!!a&&(a.lat==o&&a.lng==r)}),P(M(M(n)),"getClusterHighlight",function(e){return e.points.filter(n.getMarkerHighlight).map(function(e){return e.id})}),P(M(M(n)),"renderCluster",function(e){var t=n.state,o=t.mapOptions,r=t.clusterOptions,l={key:e.id,lat:e.lat,lng:e.lng,points:e.points,onClick:n.frameCluster,highlight:n.getClusterHighlight(e)},a=o.zoom>r.maxZoom?b.default:y.default;return c.default.createElement(a,l)}),P(M(M(n)),"renderClusterMarkers",function(e){return e.points.map(function(e){return c.default.cloneElement(e.node,{highlight:n.getMarkerHighlight(e)})})}),n}var n,o,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,c.PureComponent),n=t,r=[{key:"getDerivedStateFromProps",value:function(e,t){var n,o=t.markers,r=t.clusters,l=t.clusterOptions,a=t.hasAggregators,i=t.children!==e.children||!t.markers;return i&&(n=e.children,o=c.default.Children.map(n,function(e){return c.default.isValidElement(e)&&{node:e,id:e.props.id,lat:e.props.lat,lng:e.props.lng}}).filter(Boolean)),!e.cluster||!i&&t.clusters||(l=C(e.cluster,e),a=(r=E(e,w({},t,{markers:o,clusterOptions:l}))).reduce(function(e,t){return t.numPoints>1?e+1:e},0)>=1),{children:e.children,markers:o,clusters:r,clusterOptions:l,hasAggregators:a}}}],(o=[{key:"panTo",value:function(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=this.map?this.map.panTo:m.default).call.apply(e,[this.map].concat(n))}},{key:"fitBounds",value:function(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=this.map?this.map.fitBounds:m.default).call.apply(e,[this.map].concat(n))}},{key:"setCenter",value:function(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=this.map?this.map.setCenter:m.default).call.apply(e,[this.map].concat(n))}},{key:"setZoom",value:function(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=this.map?this.map.setZoom:m.default).call.apply(e,[this.map].concat(n))}},{key:"boundsUpdated",value:function(){var e=this.props.onChange,t=this.state,n=t.mapOptions,o=t.clusters;if(e){var r=o?(0,s.default)(o.filter(function(e){return 1===e.numPoints}).map(function(e){return v(e.points)})):[];e(n.bounds,r.map(function(e){return e.id}))}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.cluster,o=e.apiKey,r=e.libraries,l=e.defaultCenter,a=e.defaultZoom,i=this.state,s=i.hasAggregators,u=i.clusters;return c.default.createElement(f.default,{bootstrapURLKeys:{key:o,libraries:r,language:"pt-BR",region:"br"},defaultZoom:a,defaultCenter:l,options:this.createMapOptions,yesIWantToUseGoogleMapApiInternals:!0,onChange:this.onMapChange,onGoogleApiLoaded:this.onMapLoaded},n?u.map(s?this.renderCluster:this.renderClusterMarkers):t)}}])&&j(n.prototype,o),r&&j(n,r),t}();t.default=A,P(A,"Marker",x.default),P(A,"propTypes",{children:p.default.node.isRequired,apiKey:p.default.string,libraries:p.default.array,highlight:T.Coordinates,isHighlight:p.default.func,minZoom:p.default.number.isRequired,maxZoom:p.default.number.isRequired,defaultZoom:p.default.number.isRequired,defaultCenter:T.Coordinates.isRequired,multiMarkerRadius:p.default.number.isRequired,options:p.default.oneOfType([p.default.object,p.default.func]),cluster:p.default.oneOfType([p.default.bool,p.default.func,T.SuperClusterOptions]),onChange:p.default.func,onDragEnd:p.default.func,onZoomChanged:p.default.func,onFrameCluster:p.default.func}),P(A,"defaultProps",{libraries:[],defaultCenter:{lat:-22.9608099,lng:-43.2096142},defaultZoom:8,minZoom:7,maxZoom:20,multiMarkerRadius:0})}}]);