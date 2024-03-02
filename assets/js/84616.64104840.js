/*! For license information please see 84616.64104840.js.LICENSE.txt */
"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[84616],{67239:(t,e)=>{Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const s=globalThis,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}};const a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:l,defineProperty:h,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,g=globalThis,_=g.trustedTypes,m=_?_.emptyScript:"",f=g.reactiveElementPolyfillSupport,$=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},y=(t,e)=>!l(t,e),A={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&h(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==i?void 0:i.call(this)},set(e){const n=null==i?void 0:i.call(this);r.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const t=this._$Eu(e,s);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e;(this._$E_??(this._$E_=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$E_)||e.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(i)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),r=s.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$E_)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$E_)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){var s;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==(null==(s=i.converter)?void 0:s.toAttribute)?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var s;const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(s=t.converter)?void 0:s.fromAttribute)?t.converter:v;this._$Em=r,this[r]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(void 0!==t){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??y)(i?r:this[t],e))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],s)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null==(t=this._$E_)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(s)):this._$ET()}catch(i){throw e=!1,this._$ET(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null==(e=this._$E_)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EO(t,this[t])))),this._$ET()}updated(t){}firstUpdated(t){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[$("elementProperties")]=new Map,E[$("finalized")]=new Map,null==f||f({ReactiveElement:E}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.0.2");const S=globalThis,b=S.trustedTypes,C=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",U=`lit$${(Math.random()+"").slice(9)}$`,P="?"+U,O=`<${P}>`,N=document,T=()=>N.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,I="[ \t\n\f\r]",x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,H=/>/g,G=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,W=/"/g,j=/^(?:script|style|textarea|title)$/i,D=(K=1,(t,...e)=>({_$litType$:K,strings:t,values:e})),z=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),q=new WeakMap,V=N.createTreeWalker(N,129);var K;function F(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}class Y{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,h]=((t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":"",o=x;for(let a=0;a<s;a++){const e=t[a];let s,l,h=-1,c=0;for(;c<e.length&&(o.lastIndex=c,l=o.exec(e),null!==l);)c=o.lastIndex,o===x?"!--"===l[1]?o=k:void 0!==l[1]?o=H:void 0!==l[2]?(j.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=G):void 0!==l[3]&&(o=G):o===G?">"===l[0]?(o=r??x,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?G:'"'===l[3]?W:L):o===W||o===L?o=G:o===k||o===H?o=x:(o=G,r=void 0);const d=o===G&&t[a+1].startsWith("/>")?" ":"";n+=o===x?e+O:h>=0?(i.push(s),e.slice(0,h)+w+e.slice(h)+U+d):e+U+(-2===h?a:d)}return[F(t,n+(t[s]||"<?>")+(2===e?"</svg>":"")),i]})(t,e);if(this.el=Y.createElement(l,s),V.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=V.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(w)){const e=h[n++],s=i.getAttribute(t).split(U),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?tt:"?"===o[1]?et:"@"===o[1]?st:X}),i.removeAttribute(t)}else t.startsWith(U)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(j.test(i.tagName)){const t=i.textContent.split(U),e=t.length-1;if(e>0){i.textContent=b?b.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),V.nextNode(),a.push({type:2,index:++r});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(U,t+1));)a.push({type:7,index:r}),t+=U.length-1}r++}}static createElement(t,e){const s=N.createElement("template");return s.innerHTML=t,s}}function J(t,e,s=t,i){var r,n;if(e===z)return e;let o=void 0!==i?null==(r=s._$Co)?void 0:r[i]:s._$Cl;const a=R(e)?void 0:e._$litDirective$;return(null==o?void 0:o.constructor)!==a&&(null==(n=null==o?void 0:o._$AO)||n.call(o,!1),void 0===a?o=void 0:(o=new a(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??(s._$Co=[]))[i]=o:s._$Cl=o),void 0!==o&&(e=J(t,o._$AS(t,e.values),o,i)),e}let Q=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((null==t?void 0:t.creationScope)??N).importNode(e,!0);V.currentNode=i;let r=V.nextNode(),n=0,o=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Z(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new it(r,this,t)),this._$AV.push(e),a=s[++o]}n!==(null==a?void 0:a.index)&&(r=V.nextNode(),n++)}return V.currentNode=N,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}};class Z{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(null==i?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),R(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==z&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>M(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==B&&R(this._$AH)?this._$AA.nextSibling.data=t:this.$(N.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(F(i.h,i.h[0]),this.options)),i);if((null==(e=this._$AH)?void 0:e._$AD)===r)this._$AH.p(s);else{const t=new Q(r,this),e=t.u(this.options);t.p(s),this.$(e),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Y(t)),e}T(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Z(this.k(T()),this.k(T()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null==(s=this._$AP)||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=B}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=J(this,t,e,0),n=!R(t)||t!==this._$AH&&t!==z,n&&(this._$AH=t);else{const i=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=J(this,i[s+o],e,o),a===z&&(a=this._$AH[o]),n||(n=!R(a)||a!==this._$AH[o]),a===B?t=B:t!==B&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!i&&this.O(t)}O(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===B?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class st extends X{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??B)===z)return;const s=this._$AH,i=t===B&&s!==B||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==B&&(s===B||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const rt=S.litHtmlPolyfillSupport;null==rt||rt(Y,Z),(S.litHtmlVersions??(S.litHtmlVersions=[])).push("3.1.0");let nt=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=(null==s?void 0:s.renderBefore)??e;let r=i._$litPart$;if(void 0===r){const t=(null==s?void 0:s.renderBefore)??null;i._$litPart$=r=new Z(e.insertBefore(T(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return z}};var ot;nt._$litElement$=!0,nt.finalized=!0,null==(ot=globalThis.litElementHydrateSupport)||ot.call(globalThis,{LitElement:nt});const at=globalThis.litElementPolyfillSupport;null==at||at({LitElement:nt}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");const lt={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},ht=(t=lt,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.C(i,void 0,t),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function ct(t){return(e,s)=>"object"==typeof s?ht(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}const dt=2;let ut=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const pt=(t,e)=>{var s;const i=t._$AN;if(void 0===i)return!1;for(const r of i)null==(s=r._$AO)||s.call(r,e,!1),pt(r,e);return!0},gt=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},_t=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),$t(e)}};function mt(t){void 0!==this._$AN?(gt(this),this._$AM=t,_t(this)):this._$AM=t}function ft(t,e=!1,s=0){const i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(i))for(let n=s;n<i.length;n++)pt(i[n],!1),gt(i[n]);else null!=i&&(pt(i,!1),gt(i));else pt(this,t)}const $t=t=>{t.type==dt&&(t._$AP??(t._$AP=ft),t._$AQ??(t._$AQ=mt))};class vt extends ut{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),_t(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?null==(s=this.reconnected)||s.call(this):null==(i=this.disconnected)||i.call(this)),e&&(pt(this,t),gt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class yt{}const At=new WeakMap,Et=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends vt{render(t){return B}update(t,[e]){var s;const i=e!==this.G;return i&&void 0!==this.G&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.ct=null==(s=t.options)?void 0:s.host,this.ot(this.lt=t.element)),B}ot(t){if("function"==typeof this.G){const e=this.ct??globalThis;let s=At.get(e);void 0===s&&(s=new WeakMap,At.set(e,s)),void 0!==s.get(this.G)&&this.G.call(this.ct,void 0),s.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){var t,e;return"function"==typeof this.G?null==(t=At.get(this.ct??globalThis))?void 0:t.get(this.G):null==(e=this.G)?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var St=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,Ct=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?bt(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&St(e,s,n),n};e.GiscusWidget=class extends nt{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=new yt,this.messageEventHandler=this.handleMessageEvent.bind(this),this.hasLoaded=!1,this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var t;return null==(t=this._iframeRef)?void 0:t.value}get _host(){try{return new URL(this.host),this.host}catch{return this.GISCUS_DEFAULT_HOST}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(t){return`[giscus] An error occurred. Error message: "${t}".`}setupSession(){const t=location.href,e=new URL(t),s=localStorage.getItem(this.GISCUS_SESSION_KEY),i=e.searchParams.get("giscus")??"";if(this.__session="",i)return localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(i)),this.__session=i,e.searchParams.delete("giscus"),e.hash="",void history.replaceState(void 0,document.title,e.toString());if(s)try{this.__session=JSON.parse(s)}catch(r){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(null==r?void 0:r.message)} Session has been cleared.`)}}signOut(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}handleMessageEvent(t){if(t.origin!==this._host)return;const{data:e}=t;if("object"!=typeof e||!e.giscus)return;if(this.iframeRef&&e.giscus.resizeHeight&&(this.iframeRef.style.height=`${e.giscus.resizeHeight}px`),e.giscus.signOut)return console.info("[giscus] User has logged out. Session has been cleared."),void this.signOut();if(!e.giscus.error)return;const s=e.giscus.error;if(s.includes("Bad credentials")||s.includes("Invalid state value")||s.includes("State has expired")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY))return console.warn(`${this._formatError(s)} Session has been cleared.`),void this.signOut();console.error(`${this._formatError(s)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}s.includes("Discussion not found")?console.warn(`[giscus] ${s}. A new discussion will be created if a comment/reaction is submitted.`):console.error(`${this._formatError(s)} ${this.ERROR_SUGGESTION}`)}sendMessage(t){var e;null==(e=this.iframeRef)||!e.contentWindow||!this.hasLoaded||this.iframeRef.contentWindow.postMessage({giscus:t},this._host)}updateConfig(){const t={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(t)}firstUpdated(){var t;null==(t=this.iframeRef)||t.addEventListener("load",(()=>{var t;null==(t=this.iframeRef)||t.classList.remove("loading"),this.hasLoaded=!0,this.updateConfig()}))}requestUpdate(t,e,s){this.hasUpdated&&"host"!==t?this.updateConfig():super.requestUpdate(t,e,s)}getMetaContent(t,e=!1){const s=e?`meta[property='og:${t}'],`:"",i=document.querySelector(s+`meta[name='${t}']`);return i?i.content:""}_getCleanedUrl(){const t=new URL(location.href);return t.searchParams.delete("giscus"),t.hash="",t}getTerm(){switch(this.mapping){case"url":return this._getCleanedUrl().toString();case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term??"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return"number"===this.mapping?this.term??"":""}getIframeSrc(){const t=this._getCleanedUrl().toString(),e=`${t}${this.id?"#"+this.id:""}`,s=this.getMetaContent("description",!0),i=this.getMetaContent("giscus:backlink")||t,r={origin:e,session:this.__session,repo:this.repo,repoId:this.repoId??"",category:this.category??"",categoryId:this.categoryId??"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:s,backLink:i};return`${this._host}${this.lang?`/${this.lang}`:""}/widget?${new URLSearchParams(r).toString()}`}render(){return D`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${Et(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}},e.GiscusWidget.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new o(s,t,r)})`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `,Ct([ct({reflect:!0})],e.GiscusWidget.prototype,"host",2),Ct([ct({reflect:!0})],e.GiscusWidget.prototype,"repo",2),Ct([ct({reflect:!0})],e.GiscusWidget.prototype,"repoId",2),Ct([ct({reflect:!0})],e.GiscusWidget.prototype,"category",2),Ct([ct({reflect:!0})],e.GiscusWidget.prototype,"categoryId",2),Ct([ct({reflect:!0})],e.GiscusWidget.prototype,"mapping",2),Ct([ct({reflect:!0})],e.GiscusWidget.prototype,"term",2),Ct([ct({reflect:!0})],e.GiscusWidget.prototype,"strict",2),Ct([ct({reflect:!0})],e.GiscusWidget.prototype,"reactionsEnabled",2),Ct([ct({reflect:!0})],e.GiscusWidget.prototype,"emitMetadata",2),Ct([ct({reflect:!0})],e.GiscusWidget.prototype,"inputPosition",2),Ct([ct({reflect:!0})],e.GiscusWidget.prototype,"theme",2),Ct([ct({reflect:!0})],e.GiscusWidget.prototype,"lang",2),Ct([ct({reflect:!0})],e.GiscusWidget.prototype,"loading",2),e.GiscusWidget=Ct([function(t){return customElements.get(t)?t=>t:(t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)})(t)}("giscus-widget")],e.GiscusWidget)},21673:(t,e,s)=>{const i=s(31085),r=s(14041);t.exports=function({id:t,host:e,repo:n,repoId:o,category:a,categoryId:l,mapping:h,term:c,strict:d,reactionsEnabled:u,emitMetadata:p,inputPosition:g,theme:_,lang:m,loading:f}){const[$,v]=r.useState(!1);return r.useEffect((()=>{$||(Promise.resolve().then((()=>s(67239))),v(!0))}),[]),$?i.jsx("giscus-widget",{id:t,host:e,repo:n,repoid:o,category:a,categoryid:l,mapping:h,term:c,strict:d,reactionsenabled:u,emitmetadata:p,inputposition:g,theme:_,lang:m,loading:f}):null}},8689:(t,e,s)=>{s.d(e,{A:()=>c});var i=s(14041),r=s(49028),n=s(68844),o=s(89575),a=s(9546);const l={iconEdit:"iconEdit_UohW"};function h(t){let{className:e,...s}=t;return i.createElement("svg",(0,o.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.A)(l.iconEdit,e),"aria-hidden":"true"},s),i.createElement("g",null,i.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function c(t){let{editUrl:e}=t;return i.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:n.G.common.editThisPage},i.createElement(h,null),i.createElement(r.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},14297:(t,e,s)=>{s.d(e,{A:()=>o});var i=s(14041),r=s(9546),n=s(75460);function o(t){const{permalink:e,title:s,subLabel:o,isNext:a}=t;return i.createElement(n.default,{className:(0,r.A)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:e},o&&i.createElement("div",{className:"pagination-nav__sublabel"},o),i.createElement("div",{className:"pagination-nav__label"},s))}},93437:(t,e,s)=>{s.d(e,{A:()=>a});var i=s(14041),r=s(9546),n=s(75460);const o={tag:"tag_qE9H",tagRegular:"tagRegular_aHXt",tagWithCount:"tagWithCount_UC8q"};function a(t){let{permalink:e,label:s,count:a}=t;return i.createElement(n.default,{href:e,className:(0,r.A)(o.tag,a?o.tagWithCount:o.tagRegular)},s,a&&i.createElement("span",null,a))}},22639:(t,e,s)=>{s.d(e,{A:()=>l});var i=s(14041),r=s(9546),n=s(49028),o=s(93437);const a={tags:"tags_q74f",tag:"tag_lSC7"};function l(t){let{tags:e}=t;return i.createElement(i.Fragment,null,i.createElement("b",null,i.createElement(n.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),i.createElement("ul",{className:(0,r.A)(a.tags,"padding--none","margin-left--sm")},e.map((t=>{let{label:e,permalink:s}=t;return i.createElement("li",{key:s,className:a.tag},i.createElement(o.A,{label:e,permalink:s}))}))))}},73335:(t,e,s)=>{s(61513);var i=s(14041),r=60103;if(e.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var n=Symbol.for;r=n("react.element"),e.Fragment=n("react.fragment")}var o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function h(t,e,s){var i,n={},h=null,c=null;for(i in void 0!==s&&(h=""+s),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(c=e.ref),e)a.call(e,i)&&!l.hasOwnProperty(i)&&(n[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps)void 0===n[i]&&(n[i]=e[i]);return{$$typeof:r,type:t,key:h,ref:c,props:n,_owner:o.current}}e.jsx=h,e.jsxs=h},31085:(t,e,s)=>{t.exports=s(73335)},44634:(t,e,s)=>{s.d(e,{A:()=>i});const i=s(21673)}}]);