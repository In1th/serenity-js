"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[22379],{82247:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>u});var a=r(14041);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),l=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),y=l(r),g=n,u=y["".concat(o,".").concat(g)]||y[g]||m[g]||s;return r?a.createElement(u,i(i({ref:t},p),{},{components:r})):a.createElement(u,i({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=g;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[y]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<s;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},88442:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=r(89575),n=(r(14041),r(82247));const s={date:"2024-01-12T20:00",title:"3.15.0",tags:["core","cucumber","deps","serenity-bdd"]},i="3.15.0",c={permalink:"/changelog/3.15.0",source:"@site/changelog/source/3.15.0.md",title:"3.15.0",description:"Summary",date:"2024-01-12T20:00:00.000Z",formattedDate:"January 12, 2024",tags:[{label:"core",permalink:"/changelog/tags/core"},{label:"cucumber",permalink:"/changelog/tags/cucumber"},{label:"deps",permalink:"/changelog/tags/deps"},{label:"serenity-bdd",permalink:"/changelog/tags/serenity-bdd"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2024-01-12T20:00",title:"3.15.0",tags:["core","cucumber","deps","serenity-bdd"]},prevItem:{title:"3.15.1",permalink:"/changelog/3.15.1"},nextItem:{title:"3.14.2",permalink:"/changelog/3.14.2"},listPageLink:"/changelog/page/9"},o={authorsImageUrls:[]},l=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Features",id:"features",level:2}],p={toc:l},y="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(y,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"summary"},"Summary"),(0,n.yg)("p",null,"This release addresses ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/1147"},"#1147")," and introduces improvements to\nthe following Serenity/JS modules:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/core"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/cucumber"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/cucumber"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/serenity-bdd"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/serenity-bdd")))),(0,n.yg)("p",null,"View detailed ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.14.2...v3.15.0"},"code diff")," on GitHub"),(0,n.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"cucumber:")," upgraded Cucumber to 10.2.1 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/2665c4aa5e9b8e26239c9bdff414fb56779c8b1b"},"2665c4a"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"deps:")," update dependency @giscus/react to v2.4.0 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/30681d55ef4e688a51846e3c251df8f4f4e95562"},"30681d5"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"deps:")," update dependency moment to v2.30.1 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/42ec5c3b0052a0f939eec761a06ad83c632c7eb8"},"42ec5c3"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"deps:")," update dependency typedoc-plugin-mdn-links to v3.1.8 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/7a559d005a212105e729ef8f0c390dbf16b0ba03"},"7a559d0"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"deps:")," update dependency typedoc-plugin-mdn-links to v3.1.9 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/f3d660b0ddea84434ea45beffc8ad847da7f9ebc"},"f3d660b"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"deps:")," update website dependencies (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/a319ffc13cc74a8dfd3fb9fbb121ca8128ae02a9"},"a319ffc"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"deps:")," update website dependencies (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/ee12098c81b1c04aeae381253812229e65f5cbb0"},"ee12098"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"serenity-bdd:")," upgraded Serenity BDD CLI to 4.0.43 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/e1d22e92e120c7b6205ffe63dc22ebba5844e7ba"},"e1d22e9"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1147"},"#1147"))),(0,n.yg)("h2",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"core:")," enabled ClassLoader to instantiate StageCrewMembers using their factory functions (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/f98bd4206e768d5840d6e7952c61f7a2da1b144e"},"f98bd42"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1147"},"#1147")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"core:")," timestamps can be represented as ISO8601-compatible strings (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/b19e064abdbf5073bc701dd238098aa31ba7fc5a"},"b19e064"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"serenity-bdd:")," auto-detect requirements hierarchy root directory (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/e2011b0b95565d67e8ee785f3e197f827703a934"},"e2011b0"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1147"},"#1147")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"serenity-bdd:")," support for Serenity BDD 4 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/c15c3660f957c21c367f8f27218a05d3fbca78de"},"c15c366"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1147"},"#1147")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"serenity-bdd:")," support for Serenity BDD 4 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/0760417e2fa3e9fbfc78cd9965052531625bf45e"},"0760417"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"serenity-bdd:")," support for Serenity BDD CLI v4.0.40 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/271068e7ff64659138c5662cd3b8ae93bc7a7438"},"271068e"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1147"},"#1147")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"serenity-bdd:")," support for Serenity BDD v4 CLI (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/69882485ce28bb18e502b3f49740a4f82aedaa1d"},"6988248"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1147"},"#1147")," ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/2042"},"#2042"))))}m.isMDXComponent=!0}}]);