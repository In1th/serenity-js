"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[3068],{82247:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>u});var a=r(14041);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=s(r),y=n,u=g["".concat(o,".").concat(y)]||g[y]||m[y]||i;return r?a.createElement(u,l(l({ref:t},p),{},{components:r})):a.createElement(u,l({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=y;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[g]="string"==typeof e?e:n,l[1]=c;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},39048:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=r(89575),n=(r(14041),r(82247));const i={date:"2022-11-25T20:00",title:"3.0.0-rc.35",tags:["core","deps","playwright","web","webdriverio"]},l="3.0.0-rc.35",c={permalink:"/changelog/3.0.0-rc.35",source:"@site/changelog/source/3.0.0-rc.35.md",title:"3.0.0-rc.35",description:"Summary",date:"2022-11-25T20:00:00.000Z",formattedDate:"November 25, 2022",tags:[{label:"core",permalink:"/changelog/tags/core"},{label:"deps",permalink:"/changelog/tags/deps"},{label:"playwright",permalink:"/changelog/tags/playwright"},{label:"web",permalink:"/changelog/tags/web"},{label:"webdriverio",permalink:"/changelog/tags/webdriverio"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-11-25T20:00",title:"3.0.0-rc.35",tags:["core","deps","playwright","web","webdriverio"]},prevItem:{title:"3.0.0-rc.36",permalink:"/changelog/3.0.0-rc.36"},nextItem:{title:"3.0.0-rc.34",permalink:"/changelog/3.0.0-rc.34"},listPageLink:"/changelog/page/60"},o={authorsImageUrls:[]},s=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"BREAKING CHANGES",id:"breaking-changes",level:2}],p={toc:s},g="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(g,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"summary"},"Summary"),(0,n.yg)("p",null,"This release introduces improvements to\nthe following Serenity/JS modules:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/core"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/playwright"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/playwright"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/web"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/web"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/webdriverio"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/webdriverio")))),(0,n.yg)("p",null,"View detailed ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.34...v3.0.0-rc.35"},"code diff")," on GitHub"),(0,n.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"core:")," renamed List.get(index) to List.nth(index) to make the API declarative (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/094e21ceb08e95ba5c9c5998cb5ecdfb13bdcf1b"},"094e21c"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"deps:")," update dependency query-selector-shadow-dom to ^1.0.1 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/9e3bac6b13cfdbcd0ce001fbb363ff87ff3eedd3"},"9e3bac6"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"deps:")," update website dependencies (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/0ac28ff99c3ff16447b033f4e149b77d91fbef00"},"0ac28ff"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"playwright:")," upgraded to Playwright 1.28.1 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/e9c4c1c5c4467423c8254baeab0d0603d90c0d96"},"e9c4c1c"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"webdriverio:")," migrated to use Puppeteer 19.3 APIs (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/1aa2ab7495a7ddc7edf37f6d351ce26ccc7090c8"},"1aa2ab7"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"web:")," marked PageElement methods returning a MetaQuestion (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/6f78186c8c11c603ec447f89007009ea75e80b89"},"6f78186"),")")),(0,n.yg)("h2",{id:"breaking-changes"},"BREAKING CHANGES"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"core:")," List.get(index) replaced by List.nth(index); this affects classes inheriting from List, such as\nPageElements")))}m.isMDXComponent=!0}}]);