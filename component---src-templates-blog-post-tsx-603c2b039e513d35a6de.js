"use strict";(self.webpackChunkryota2357=self.webpackChunkryota2357||[]).push([[7],{4345:function(t,e,r){r.r(e),r.d(e,{default:function(){return N}});var n=r(1597),o=r(8538),i=r.n(o),a=r(4290),l=r(4694),s=r(5697),c=r.n(s),u=r(7294);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function b(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function y(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function v(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}var x=["style"];function g(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r,n=e.indexOf(":"),o=v(e.slice(0,n)),i=e.slice(n+1).trim();return o.startsWith("webkit")?t[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=i:t[o]=i,t}),{})}var j=!1;try{j=!0}catch(R){}function O(t){return t&&"object"===d(t)&&t.prefix&&t.iconName&&t.icon?t:l.parse.icon?l.parse.icon(t):null===t?null:t&&"object"===d(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function k(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?m({},t,e):{}}var w=["forwardedRef"];function P(t){var e=t.forwardedRef,r=b(t,w),n=r.icon,o=r.mask,i=r.symbol,a=r.className,s=r.title,c=r.titleId,u=r.maskId,f=O(n),d=k("classes",[].concat(y(function(t){var e,r=t.beat,n=t.fade,o=t.beatFade,i=t.bounce,a=t.shake,l=t.flash,s=t.spin,c=t.spinPulse,u=t.spinReverse,f=t.pulse,p=t.fixedWidth,d=t.inverse,b=t.border,y=t.listItem,h=t.flip,v=t.size,x=t.rotation,g=t.pull,j=(m(e={"fa-beat":r,"fa-fade":n,"fa-beat-fade":o,"fa-bounce":i,"fa-shake":a,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":p,"fa-inverse":d,"fa-border":b,"fa-li":y,"fa-flip-horizontal":"horizontal"===h||"both"===h,"fa-flip-vertical":"vertical"===h||"both"===h},"fa-".concat(v),null!=v),m(e,"fa-rotate-".concat(x),null!=x&&0!==x),m(e,"fa-pull-".concat(g),null!=g),m(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(j).map((function(t){return j[t]?t:null})).filter((function(t){return t}))}(r)),y(a.split(" ")))),h=k("transform","string"==typeof r.transform?l.parse.transform(r.transform):r.transform),v=k("mask",O(o)),x=(0,l.icon)(f,p(p(p(p({},d),h),v),{},{symbol:i,title:s,titleId:c,maskId:u}));if(!x)return function(){var t;!j&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",f),null;var g=x.abstract,I={ref:e};return Object.keys(r).forEach((function(t){P.defaultProps.hasOwnProperty(t)||(I[t]=r[t])})),A(g[0],I)}P.displayName="FontAwesomeIcon",P.propTypes={beat:c().bool,border:c().bool,bounce:c().bool,className:c().string,fade:c().bool,flash:c().bool,mask:c().oneOfType([c().object,c().array,c().string]),maskId:c().string,fixedWidth:c().bool,inverse:c().bool,flip:c().oneOf(["horizontal","vertical","both"]),icon:c().oneOfType([c().object,c().array,c().string]),listItem:c().bool,pull:c().oneOf(["right","left"]),pulse:c().bool,rotation:c().oneOf([0,90,180,270]),shake:c().bool,size:c().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:c().bool,spinPulse:c().bool,spinReverse:c().bool,symbol:c().oneOfType([c().bool,c().string]),title:c().string,titleId:c().string,transform:c().oneOfType([c().string,c().object]),swapOpacity:c().bool},P.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var A=function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return t(e,r)})),i=Object.keys(r.attributes||{}).reduce((function(t,e){var n=r.attributes[e];switch(e){case"class":t.attrs.className=n,delete r.attributes.class;break;case"style":t.attrs.style=g(n);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=n:t.attrs[v(e)]=n}return t}),{attrs:{}}),a=n.style,l=void 0===a?{}:a,s=b(n,x);return i.attrs.style=p(p({},i.attrs.style),l),e.apply(void 0,[r.tag,p(p({},i.attrs),s)].concat(y(o)))}.bind(null,u.createElement),I=r(8014),S=r(5893),N=function(t){var e,r,o,l,s,c,u,f,p,d,m=t.data,b={postdate:null===(e=m.markdownRemark)||void 0===e?void 0:e.frontmatter.postdate,update:null===(r=m.markdownRemark)||void 0===r?void 0:r.frontmatter.update,title:null!==(o=null===(l=m.markdownRemark)||void 0===l?void 0:l.frontmatter.title)&&void 0!==o?o:"No title",tags:null!==(s=null===(c=m.markdownRemark)||void 0===c?void 0:c.frontmatter.tags)&&void 0!==s?s:[],description:null!==(u=null===(f=m.markdownRemark)||void 0===f?void 0:f.excerpt)&&void 0!==u?u:""},y=function(t){return t?i()(new Date(t)).format("YYYY/MM/DD (HH:mm)"):""};return(0,S.jsxs)(a.Ar,{id:"blog-post",children:[(0,S.jsx)(a.pQ,{title:b.title,description:b.description}),(0,S.jsxs)("article",{itemScope:!0,itemType:"http://schema.org/Article",children:[(0,S.jsxs)("div",{className:"post-front",children:[(0,S.jsx)("h1",{itemProp:"headline",children:b.title}),(0,S.jsxs)("div",{className:"date",children:[(0,S.jsxs)("p",{children:["投稿日:"," ",(0,S.jsx)("time",{itemProp:"datePublished",children:y(b.postdate)})]}),b.update!==b.postdate&&(0,S.jsxs)("p",{children:["更新日:"," ",(0,S.jsx)("time",{itemProp:"dateModified",children:y(b.update)})]})]}),(0,S.jsxs)("div",{className:"tags",children:[(0,S.jsx)(P,{icon:I.tho,style:{color:"#2E2E2E",marginRight:"5px"}}),b.tags.map((function(t){return(0,S.jsx)(n.Link,{to:"/blog/tag/"+t,children:t})}))]})]}),(0,S.jsx)("div",{id:"markdown",itemProp:"articleBody",dangerouslySetInnerHTML:{__html:null!==(p=null===(d=m.markdownRemark)||void 0===d?void 0:d.html)&&void 0!==p?p:""}})]}),(0,S.jsx)("nav",{children:(0,S.jsxs)("ul",{children:[(0,S.jsx)("li",{children:m.previous&&(0,S.jsxs)(n.Link,{to:m.previous.fields.slug,rel:"prev",children:["← ",m.previous.frontmatter.title]})}),(0,S.jsx)("li",{children:m.next&&(0,S.jsxs)(n.Link,{to:m.next.fields.slug,rel:"next",children:[m.next.frontmatter.title," →"]})})]})})]})}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-603c2b039e513d35a6de.js.map