(()=>{"use strict";var n={927:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n',""]);const l=a},69:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"@media (max-width: 425px) {\n  #header > div {\n    gap: 2.5vw;\n  }\n\n  footer, \n  #about,\n  .project,\n  #contact > div, \n  form div:first-child, \n  #resume > div, \n  .resumeItem,\n  #skills > ul  {\n    grid-template-columns: 1fr;\n  }\n\n  #about {\n    height: 100%;\n  }\n\n  #about > img {\n    height: 92vw;\n    width: 92vw;\n    grid-row-start: 2;\n  }\n\n  #about > div > div {\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n  }\n\n  button {\n      height: calc((100vw / 3) - 6vw);\n      width: calc((100vw / 3) - 6vw);\n  }\n\n  .project > img {\n    height: 50vw;\n    width: 94vw;\n  }\n\n  #contact {\n    height: fit-content;\n  }\n\n  input {\n    width: 90vw;\n  }\n\n  textarea {\n    width: 90vw;\n  }\n\n  #message {\n    flex-direction: column;\n  }\n\n  form {\n    margin-top: 5vh;\n  }\n\n  nav {\n    width: 0;\n    overflow: hidden;\n  }\n\n  .description {\n    grid-column-start: 1;\n    grid-row-start: 3;\n  }\n\n  #skills > ul > li {\n    grid-column-start: 1;\n  }\n\n  #skills > ul {\n    margin: 10vw;\n  }\n\n  .resumeItem {\n    margin-bottom: 10vh;\n  }\n\n  section ,footer {\n    /* padding: 6vw; */\n  }\n}",""]);const l=a},982:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"* {\n    margin: 0%;\n    padding: 0%;\n    font-size: 16px;\n    font-family: work-sans;\n    margin-left: 0%;\n}\n\nbody {\n    /* width: 100%; */\n    background-color: whitesmoke;\n}\n\ninput, textarea {\n    padding: 1vw;\n    background-color: whitesmoke;\n    border: solid black 1px;\n}\n\ninput {\n    width: calc((50vw / 2));\n}\n\ntextarea {\n    width: calc(50vw * 0.66);\n}\n\nul {\n    list-style: none;\n}\n\n#header, \n#header > div, \nnav > ul {\n    display: flex;\n    flex-direction: row;\n}\n\nsection ,footer {\n    padding: 3vw;\n    padding-top: 2vw;\n    /* padding-right: 2vw; */\n    /* width: 100%; */\n}\n\nsection > h2 {\n    font-size: 6vw;\n    font-weight: bolder;\n    margin-bottom: 2vw;\n}\n\n\n/* header styling */\n\n#header {\n    justify-content: space-between;\n    align-self: center;\n}\n\n#header > div {\n    gap: 1vw;\n    justify-content: center;\n    align-items: center; \n}\n\n#header > div > img {\n    height: 20px;\n    width: 20px;\n    border-radius: 20px;\n    object-fit: cover;\n}\n\n#header p:nth-child(2) {\n    font-weight: bold;\n    font-size: 19px;\n}\n\nnav > ul :nth-child(2) {\n    border-left: solid black 1px;\n    border-right: solid black 1px;\n}\n\nnav > ul > li {\n    padding: 10px;\n    cursor: pointer;\n    font-weight: lighter;\n}\n\nnav > ul > li:hover {\n    color: brown;\n}\n\n/*About section styling*/\n\n#about {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    height: 70vh;\n}\n\n#about > img {\n    height: calc(50vw - 30px - 3vw);\n    width: calc(50vw - 30px - 3vw);\n    border-radius: 50vw;\n    justify-self: center;\n    object-fit: cover;\n}\n\n#about > div > h1 {\n    /* font-size: 10vw; */\n    font-size: clamp(100px, 10vw, 12vw);\n}\n\n#about > div p:nth-child(2){\n    font-weight: bold;\n    font-size: 3vw;\n    font-size: clamp(18px, 2vw, 8vw);\n}\n\n#about > div > div {\n    display: flex;\n    flex-direction: row;\n    margin-top: 3vw;\n    gap: 1vw;\n}\n\n#about > div > div button:first-child {\n    background-color: orange;\n}\n\n#about > div > div button:last-child {\n    background-color: blue;\n}\n\n#about > div > div button:nth-child(2) {\n    background-color: red;\n}\n\nbutton {\n    border-radius: 50%;\n    height: calc((50vw / 3) - 3vw);\n    width: calc((50vw / 3) - 3vw);\n    border: solid black 1px;\n    font-size: x-large;\n    cursor: pointer;\n}\n\n#about > div > div button:hover,\nform button:hover {\n    background-color: white;\n}\n\n/*projects styling*/\n.project {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    margin-top: 5vh;\n    gap: 5vw;\n}\n\n.project > div > h2 {\n    margin-bottom: 20px;\n    font-weight: bolder;\n}\n\n.project > img {\n    height: 30vw;\n    width: calc(50vw - 3vw - 5vw);\n    object-fit: cover;\n}\n\n#resume {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n#resume > div {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n#resume > div > h3 {\n    font-size: xx-large;\n    font-weight: bold;\n}\n\n.separation {\n    border-bottom: solid black 1px;\n}\n\n#skills > ul {\n    list-style:square;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n}\n\n#skills > ul > li {\n    padding: 6px;\n    grid-column-start: 2;\n}\n\n.resumeItem {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    margin-bottom: 3vw;\n    gap: 2vw;\n}\n\n.position {\n    font-weight: bolder;\n}\n\n.description {\n    grid-row-start: 2;\n    grid-column-start: 2;\n    margin-top: 10px;\n}\n\n/*contact styling*/\n#contact {\n    display: flex;\n    flex-direction: column;\n    height: 70vh;\n}\n\n#contact > div {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2vw;\n}\n\n#contact > div > div > div {\n    margin-top: 30px;\n}\n\n#contact > div > div > div :first-child {\n    font-weight: bolder;\n}\n\nform div:first-child {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n}\n\nform div:first-child > div {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n#message > div {\n    display: flex;\n    flex-direction: column;\n}\n\n#message {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 20px;\n    margin-top: 20px;\n}\n\nform button {\n    background-color: orange;\n}\n\n/*footer styling*/\nfooter {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    /* margin-bottom: 100px; */\n    margin-top: 50px;\n    gap: 20px;\n    border-top: solid black 1px;\n    margin-left: 3vw;\n    margin-right: 3vw;\n    padding-top: 30px;\n}\n\nfooter > div > p:first-child {\n    font-weight: bolder;\n}\n\nfooter > div > p {\n    padding: 3px;\n}\n\n#followMe > div {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 15px;\n    padding-left: 5px;\n}\n\nfooter > div:last-child > p {\n    font-weight: lighter;\n    font-size: smaller;\n}\n\nfooter > div:last-child > p:last-child,\nfooter > div:last-child > p:last-child > a {\n    font-size: x-small;\n}\n\n#resume, #projects, #contact {\n    display: none;\n}\n",""]);const l=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],l=0;l<n.length;l++){var c=n[l],s=r.base?c[0]+r.base:c[0],d=i[s]||0,p="".concat(s," ").concat(d);i[s]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=o(f,r);r.byIndex=l,e.splice(l,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var l=t(i[a]);e[l].references--}for(var c=r(n,o),s=0;s<i.length;s++){var d=t(i[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},530:(n,e,t)=>{n.exports=t.p+"d205c6f8f41922154b96.svg"},12:(n,e,t)=>{n.exports=t.p+"1633a96222d704c5ee52.svg"},79:(n,e,t)=>{n.exports=t.p+"e632145e4d72450a14b0.jpg"},275:(n,e,t)=>{n.exports=t.p+"46b7f25a64be4d05c6ed.png"},759:(n,e,t)=>{n.exports=t.p+"ee08094f4c39f2cd666f.png"},180:(n,e,t)=>{n.exports=t.p+"ba5ff925b8fa88ebe6f1.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),l=t(565),c=t.n(l),s=t(216),d=t.n(s),p=t(589),u=t.n(p),f=t(927),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),e()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;var v=t(982),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals;var h=t(69),b={};b.styleTagTransform=u(),b.setAttributes=c(),b.insert=a().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=d(),e()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals;const w=t(79),y=t(180),x=t(275),k=t(759),j=t(12),S=t(530);document.querySelector("img[alt='project1']").src=x,document.querySelector("img[alt='project2']").src=y,document.querySelector("img[alt='project3']").src=k,document.querySelector("#header > div > img").src=w,document.querySelector("img[alt='profile']").src=w,document.querySelector("img[alt='linkedin']").src=j,document.querySelector("img[alt='github']").src=S,document.querySelectorAll("#about button, nav > ul > li, #header p:nth-child(2)").forEach((n=>{n.addEventListener("click",(()=>{document.querySelectorAll("#about, #resume, #contact, #projects").forEach((n=>{n.style.display="none"})),(n=>{["resume","contact"].toString().includes(n.textContent.toLowerCase())?document.querySelector(`#${n.textContent.toLowerCase()}`).style.display="flex":"projects"===n.textContent.toLowerCase()?document.querySelector(`#${n.textContent.toLowerCase()}`).style.display="grid":document.querySelector("#about").style.display="grid"})(n)}))}))})()})();