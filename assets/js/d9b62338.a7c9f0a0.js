"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[11282],{82247:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>u});var n=r(14041);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),y=c(r),m=a,u=y["".concat(l,".").concat(m)]||y[m]||g[m]||i;return r?n.createElement(u,s(s({ref:t},p),{},{components:r})):n.createElement(u,s({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[y]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(89575),a=(r(14041),r(82247));const i={date:"2022-12-28T20:00",title:"3.0.0-rc.38",tags:["assertions","playwright","serenity-bdd"]},s="3.0.0-rc.38",o={permalink:"/changelog/3.0.0-rc.38",source:"@site/changelog/source/3.0.0-rc.38.md",title:"3.0.0-rc.38",description:"Summary",date:"2022-12-28T20:00:00.000Z",formattedDate:"December 28, 2022",tags:[{label:"assertions",permalink:"/changelog/tags/assertions"},{label:"playwright",permalink:"/changelog/tags/playwright"},{label:"serenity-bdd",permalink:"/changelog/tags/serenity-bdd"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-12-28T20:00",title:"3.0.0-rc.38",tags:["assertions","playwright","serenity-bdd"]},prevItem:{title:"3.0.0-rc.39",permalink:"/changelog/3.0.0-rc.39"},nextItem:{title:"3.0.0-rc.37",permalink:"/changelog/3.0.0-rc.37"},listPageLink:"/changelog/page/57"},l={authorsImageUrls:[]},c=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2}],p={toc:c},y="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(y,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"summary"},"Summary"),(0,a.yg)("p",null,"This release introduces improvements to\nthe following Serenity/JS modules:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/assertions"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/assertions"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/playwright"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/playwright"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/serenity-bdd"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/serenity-bdd")))),(0,a.yg)("p",null,"View detailed ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.37...v3.0.0-rc.38"},"code diff")," on GitHub"),(0,a.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"assertions:")," improved AssertionError messages (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/958ab7f79daba8df25dbcff50d6a67b2bef58b29"},"958ab7f"),")"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"playwright:")," introduced an explicit dependency on Playwright (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/2136132a95bfb4181c4854291cfeeacb876b9cfb"},"2136132"),")"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"serenity-bdd:")," better error message when Java Runtime Environment is not detected (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/47c00c342c4d63034a433b96c91eba2ed1305544"},"47c00c3"),"), closes ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1455"},"#1455"))))}g.isMDXComponent=!0}}]);