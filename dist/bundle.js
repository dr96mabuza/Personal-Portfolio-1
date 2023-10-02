(()=>{"use strict";var n={924:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n',""]);const i=c},426:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([n.id,"* {\n  font-size: 16px;\n}\n\nh2 {\n  font-size: 1.8rem;\n}\n\n#content {\n  width: 100vw;\n}\n\n#header,\n#footer,\n#mid,\n#headerIcons,\n#projectsContainer,\n.project,\n#footer-icons,\n.nameAndIcons,\n#headerIcons,\n.contactDetails {\n  display: flex;\n}\n\n#header,\n#footer,\n#headerIcons,\n#projectsContainer,\n#mid,\n#footer-icons,\n#headerIcons {\n  align-items: center;\n}\n\n#header,\n#footer,\n#headerIcons,\n#projectsContainer,\n#footer-icons,\n.nameAndIcons,\n#informationContainer {\n  flex-direction: row;\n}\n\n#header,\n#footer,\n#projectsContainer {\n  flex-wrap: wrap;\n}\n\n#header,\n#footer {\n  justify-content: center;\n}\n\n#mid,\n#informationContainer {\n  flex-direction: column;\n}\n\n#header,\n#footer,\n#mid {\n  margin: 20px;\n}\n\n#footer-icons,\n#headerIcons {\n  justify-content: right;\n  gap: 10px;\n}\n\nimg {\n  width: 100%;\n}\n\n/*header section*/\n\n#header {\n  margin-bottom: 40px;\n}\n\n#headerImageContainer {\n  position: relative;\n  max-width: 400px;\n}\n\n#name {\n  position: absolute;\n  top: 80%;\n  left: 20%;\n  color: white;\n  font-size: 2rem;\n}\n\n#headerTextContainer {\n  max-width: 500px;\n  padding: 15px;\n  border: solid black 1px;\n}\n\n#header-icons {\n  width: 30px;\n}\n\n/*mid section*/\n\n#projectsContainer {\n  gap: 10px;\n  max-width: 1000px;\n  justify-content: center;\n}\n\n.project {\n  flex-direction: column-reverse;\n  max-width: 300px;\n}\n\n.Projectdescription {\n  padding: 8px 15px;\n  border: solid black 1px;\n}\n\n.nameAndIcons {\n  justify-content: space-between;\n}\n.project-icon {\n  height: 15px;\n  width: 15px;\n}\n\n/*footer section*/\n#footer {\n  margin-top: 40px;\n}\n\n#footer img {\n  max-width: 400px;\n}\n\n#informationContainer {\n  gap: 10px;\n  max-width: 400px;\n  padding: 30px;\n}\n\n.footerIcons {\n  width: 30px;\n  height: 30px;\n}\n\n.contactIcon {\n  width: 20px;\n  height: 20px;\n}\n\n.contactDetails {\n  flex-direction: row-reverse;\n  justify-content: left;\n}\n",""]);const i=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],p=r.base?s[0]+r.base:s[0],d=a[p]||0,l="".concat(p," ").concat(d);a[p]=d+1;var u=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=i,e.splice(i,0,{identifier:l,updater:m,references:1})}c.push(l)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var s=r(n,o),p=0;p<a.length;p++){var d=t(a[p]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},57:(n,e,t)=>{n.exports=t.p+"ac3172065ee309faf015.svg"},997:(n,e,t)=>{n.exports=t.p+"bc90c4d8bc0daad9dd51.svg"},742:(n,e,t)=>{n.exports=t.p+"e632145e4d72450a14b0.jpg"},7:(n,e,t)=>{n.exports=t.p+"7ba6ddb932ed779cf9f2.jpg"},893:(n,e,t)=>{n.exports=t.p+"7f7a3d3c3eb690cd546b.jpg"},885:(n,e,t)=>{n.exports=t.p+"e9ac1201c7188121cb5e.jpg"},531:(n,e,t)=>{n.exports=t.p+"a846de3ceb5b46c08333.jpg"},505:(n,e,t)=>{n.exports=t.p+"5fd9258f27efce37da5c.jpg"},789:(n,e,t)=>{n.exports=t.p+"7d255265514bf156dbc2.jpg"},116:(n,e,t)=>{n.exports=t.p+"0c91e3ce087ab0ff8188.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),c=t.n(a),i=t(565),s=t.n(i),p=t(216),d=t.n(p),l=t(589),u=t.n(l),f=t(924),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var h=t(426),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),e()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const b=document.querySelector("#project1"),v=document.querySelector("#project2"),x=document.querySelector("#project3"),y=document.querySelector("#project4"),w=document.querySelector("#project5"),j=document.querySelector("#project6"),I=document.querySelector("#headerImageContainer"),C=document.querySelector("#footer"),S=document.querySelector("#email"),q=document.querySelector("#phone"),T=new Image;T.src=t(116);const A=new Image;A.src=t(789);const k=new Image;k.src=t(505);const Z=new Image;Z.src=t(531);const E=new Image;E.src=t(885);const M=new Image;M.src=t(893);const P=new Image;P.src=t(742);const L=new Image;L.src=t(7);const N=new Image;N.setAttribute("class","contactIcon"),N.src=t(997);const z=new Image;z.setAttribute("class","contactIcon"),z.src=t(57),I.appendChild(P),b.appendChild(T),v.appendChild(A),x.appendChild(k),y.appendChild(Z),w.appendChild(E),j.appendChild(M),C.appendChild(L),S.appendChild(z),q.appendChild(N)})()})();