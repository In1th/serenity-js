"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[3947],{82247:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>g});var n=t(14041);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),y=a,g=u["".concat(l,".").concat(y)]||u[y]||m[y]||i;return t?n.createElement(g,o(o({ref:r},p),{},{components:t})):n.createElement(g,o({ref:r},p))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},29934:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=t(89575),a=(t(14041),t(82247));const i={date:"2022-01-28T20:00",title:"3.0.0-rc.8",tags:["core","webdriverio"]},o="3.0.0-rc.8",c={permalink:"/changelog/3.0.0-rc.8",source:"@site/changelog/source/3.0.0-rc.8.md",title:"3.0.0-rc.8",description:"Summary",date:"2022-01-28T20:00:00.000Z",formattedDate:"January 28, 2022",tags:[{label:"core",permalink:"/changelog/tags/core"},{label:"webdriverio",permalink:"/changelog/tags/webdriverio"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-01-28T20:00",title:"3.0.0-rc.8",tags:["core","webdriverio"]},prevItem:{title:"3.0.0-rc.9",permalink:"/changelog/3.0.0-rc.9"},nextItem:{title:"3.0.0-rc.7",permalink:"/changelog/3.0.0-rc.7"},listPageLink:"/changelog/page/87"},l={authorsImageUrls:[]},s=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2}],p={toc:s},u="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"summary"},"Summary"),(0,a.yg)("p",null,"This release addresses ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/1106"},"#1106")," and introduces improvements to\nthe following Serenity/JS modules:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/core"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/webdriverio"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/webdriverio")))),(0,a.yg)("p",null,"View detailed ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.7...v3.0.0-rc.8"},"code diff")," on GitHub"),(0,a.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"core:")," ensure Question.about doesn't expose internal interfaces (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/4bfb6bca6af81d23ced551f63df5bc9f35d581df"},"4bfb6bc"),"), closes ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1106"},"#1106")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"webdriverio:")," corrected visibility of the ",(0,a.yg)("inlineCode",{parentName:"li"},"browser")," field on BrowseTheWebWithWebdriverIO (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/0de725f71ec67c496b16fabdbc7e1a06715732fa"},"0de725f"),")")))}m.isMDXComponent=!0}}]);