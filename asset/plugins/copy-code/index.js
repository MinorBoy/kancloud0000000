(()=>{"use strict";var e,t,r={196:e=>{e.exports=window.React},99:e=>{e.exports=window.TopWrite}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return r[e](i,i.exports,n),i.exports}n.m=r,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>e+"-1859ef.js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="TopWritePlugins.copy-code:",n.l=(r,o,i,a)=>{if(e[r])e[r].push(o);else{var c,l;if(void 0!==i)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){c=d;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+i),c.src=r),e[r]=[o];var p=(t,o)=>{c.onerror=c.onload=null,clearTimeout(f);var n=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((e=>e(o))),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),l&&document.head.appendChild(c)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={179:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=i);var a=n.p+n.u(t),c=new Error;n.l(a,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,o[1](c)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,i,[a,c,l]=r,u=0;if(a.some((t=>0!==e[t]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)l(n)}for(t&&t(r);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunkTopWritePlugins_copy_code=self.webpackChunkTopWritePlugins_copy_code||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i={};(()=>{n.d(i,{default:()=>r});var e=n(99),t=n(196);const r=function(r){let{components:o,localize:n,locales:i,...a}=r,c={};if(o)for(const[e,r]of Object.entries(o))r&&(c[e]=r instanceof Array?[(0,t.lazy)(r[0]),r[1]]:(0,t.lazy)(r));return new e.Plugin({name:"copy-code",meta:void 0,components:c,localize:n,config:undefined,...a})}({components:{"html:pre":()=>n.e(289).then(n.bind(n,289))}})})(),(window.TopWritePlugins=window.TopWritePlugins||{})["copy-code"]=i.default})();
//# sourceMappingURL=index.js.map