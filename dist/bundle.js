(()=>{"use strict";var n={924:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n',""]);const c=i},426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"* {\n  font-size: 16px;\n}\n\nh2 {\n  font-size: 1.8rem;\n}\n\n#content {\n  width: 100vw;\n}\n\n#header,\n#footer,\n#mid,\n#headerIcons,\n#projectsContainer,\n.project,\n#footer-icons,\n.nameAndIcons,\n#headerIcons,\n.contactDetails {\n  display: flex;\n}\n\n#header,\n#footer,\n#headerIcons,\n#projectsContainer,\n#mid,\n#footer-icons,\n#headerIcons {\n  align-items: center;\n}\n\n#header,\n#footer,\n#headerIcons,\n#projectsContainer,\n#footer-icons,\n.nameAndIcons,\n#informationContainer {\n  flex-direction: row;\n}\n\n#header,\n#footer,\n#projectsContainer {\n  flex-wrap: wrap;\n}\n\n#header,\n#footer {\n  justify-content: center;\n}\n\n#mid,\n#informationContainer {\n  flex-direction: column;\n}\n\n#header,\n#footer,\n#mid {\n  /* margin: 20px; */\n}\n\n#footer-icons,\n#headerIcons {\n  gap: 10px;\n}\n\nimg {\n  width: 100%;\n  height: 100%;\n}\n\n/*header section*/\n\n#header {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  margin-bottom: 40px;\n  background: linear-gradient(\n    to bottom right,\n    #4682b4 00%,\n    #4682b4 50%,                                                                 \n    white 50%,\n    white 100%\n  );\n}\n\n#headerImageContainer {\n  position: relative;\n  max-width: 680px;\n}\n\n#name {\n  position: absolute;\n  top: 85%;\n  left: 2%;\n  color: white;\n  font-size: 2rem;\n}\n\n#headerTextContainer {\n  max-width: 500px;\n  padding: 15px;\n  background-color: white;\n}\n\n#header-icons {\n  width: 30px;\n}\n\n#headerIcons {\n  justify-content: right;\n}\n\n\n/*mid section*/\n\n#projectsContainer {\n  gap: 10px;\n  max-width: 1300px;\n  justify-content: center;\n}\n\n.project {\n  flex-direction: column-reverse;\n  width: 400px;\n  height: 400px;\n}\n\n.Projectdescription {\n  padding: 8px 15px;\n  border: solid black 1px;\n}\n\n.nameAndIcons {\n  justify-content: space-between;\n}\n.project-icon {\n  height: 15px;\n  width: 15px;\n}\n\n#mid > h2 {\n  margin-bottom: 13px;\n}\n\n/*footer section*/\n#footer {\n  margin-top: 40px;\n  /* padding-bottom: 40px; */\n  background-color: #4682b4;\n  align-items: flex-start;\n}\n\n#footer img {\n  max-width: 600px;\n}\n\n#informationContainer {\n  gap: 10px;\n  max-width: 650px;\n  padding: 30px;\n}\n\n.footerIcons {\n  width: 30px;\n  height: 30px;\n}\n\n.contactIcon {\n  width: 20px;\n  height: 20px;\n}\n\n.contactDetails {\n  flex-direction: row-reverse;\n  justify-content: left;\n  align-items: center;\n}\n\n.contactDetails :first-child {\n  padding-left: 10px;\n}\n\n#footer-icons {\n  justify-content: left;\n}\n\n#informationContainer > h2,\n#informationContainer > p,\n#email > p,\n#phone > p{\n  color: white;\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],p=o.base?s[0]+o.base:s[0],d=a[p]||0,l="".concat(p," ").concat(d);a[p]=d+1;var u=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),p=0;p<a.length;p++){var d=t(a[p]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},57:(n,e,t)=>{n.exports=t.p+"ac3172065ee309faf015.svg"},997:(n,e,t)=>{n.exports=t.p+"bc90c4d8bc0daad9dd51.svg"},742:(n,e,t)=>{n.exports=t.p+"e632145e4d72450a14b0.jpg"},7:(n,e,t)=>{n.exports=t.p+"7ba6ddb932ed779cf9f2.jpg"},893:(n,e,t)=>{n.exports=t.p+"7f7a3d3c3eb690cd546b.jpg"},885:(n,e,t)=>{n.exports=t.p+"e9ac1201c7188121cb5e.jpg"},531:(n,e,t)=>{n.exports=t.p+"a846de3ceb5b46c08333.jpg"},505:(n,e,t)=>{n.exports=t.p+"5fd9258f27efce37da5c.jpg"},789:(n,e,t)=>{n.exports=t.p+"7d255265514bf156dbc2.jpg"},116:(n,e,t)=>{n.exports=t.p+"0c91e3ce087ab0ff8188.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),p=t(216),d=t.n(p),l=t(589),u=t.n(l),f=t(924),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var m=t(426),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=d(),e()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const b=document.querySelector("#project1"),v=document.querySelector("#project2"),x=document.querySelector("#project3"),y=document.querySelector("#project4"),w=document.querySelector("#project5"),j=document.querySelector("#project6"),I=document.querySelector("#headerImageContainer"),C=document.querySelector("#footer"),S=document.querySelector("#email"),q=document.querySelector("#phone"),T=new Image;T.src=t(116);const k=new Image;k.src=t(789);const A=new Image;A.src=t(505);const Z=new Image;Z.src=t(531);const E=new Image;E.src=t(885);const M=new Image;M.src=t(893);const P=new Image;P.src=t(742);const L=new Image;L.src=t(7);const N=new Image;N.setAttribute("class","contactIcon"),N.src=t(997);const z=new Image;z.setAttribute("class","contactIcon"),z.src=t(57),I.appendChild(P),b.appendChild(T),v.appendChild(k),x.appendChild(A),y.appendChild(Z),w.appendChild(E),j.appendChild(M),C.appendChild(L),S.appendChild(z),q.appendChild(N)})()})();