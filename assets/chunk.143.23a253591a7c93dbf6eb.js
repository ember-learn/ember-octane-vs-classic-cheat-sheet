var __ember_auto_import__;(()=>{var e,r,t,o={533:(e,r,t)=>{var o,i
e.exports=(o=_eai_d,i=_eai_r,window.emberAutoImportDynamic=function(e){return 1===arguments.length?i("_eai_dyn_"+e):i("_eai_dynt_"+e)(Array.prototype.slice.call(arguments,1))},window.emberAutoImportSync=function(e){return i("_eai_sync_"+e)(Array.prototype.slice.call(arguments,1))},o("ember-container-query/components/container-query",[],(function(){return t(483)})),o("ember-container-query/helpers/aspect-ratio",[],(function(){return t(860)})),o("ember-container-query/helpers/height",[],(function(){return t(380)})),o("ember-container-query/helpers/width",[],(function(){return t(878)})),o("ember-container-query/modifiers/container-query",[],(function(){return t(4)})),o("ember-element-helper/helpers/element",[],(function(){return t(534)})),o("ember-shiki/components/code-block",[],(function(){return t(804)})),o("ember-shiki/components/code-group",[],(function(){return t(624)})),o("ember-shiki/components/code-tab",[],(function(){return t(257)})),o("ember-shiki/components/copy-button",[],(function(){return t(382)})),o("ember-shiki/modifiers/shiki-render",[],(function(){return t(550)})),o("ember-shiki/services/shiki",[],(function(){return t(947)})),o("fast-memoize",[],(function(){return t(721)})),o("intl-messageformat",[],(function(){return t(772)})),void o("intl-messageformat-parser",[],(function(){return t(301)})))},8:function(e,r){window._eai_r=require,window._eai_d=define},292:e=>{"use strict"
e.exports=require("@ember/application")},574:e=>{"use strict"
e.exports=require("@ember/component")},797:e=>{"use strict"
e.exports=require("@ember/component/helper")},353:e=>{"use strict"
e.exports=require("@ember/debug")},341:e=>{"use strict"
e.exports=require("@ember/destroyable")},927:e=>{"use strict"
e.exports=require("@ember/modifier")},219:e=>{"use strict"
e.exports=require("@ember/object")},773:e=>{"use strict"
e.exports=require("@ember/runloop")},146:e=>{"use strict"
e.exports=require("@ember/service")},938:e=>{"use strict"
e.exports=require("@ember/template")},266:e=>{"use strict"
e.exports=require("@ember/template-factory")},612:e=>{"use strict"
e.exports=require("@embroider/util")},990:e=>{"use strict"
e.exports=require("@glimmer/component")},521:e=>{"use strict"
e.exports=require("@glimmer/tracking")},117:e=>{"use strict"
e.exports=require("ember-concurrency")},486:e=>{"use strict"
e.exports=require("ember-concurrency/-private/async-arrow-runtime")}},i={}
function n(e){var r=i[e]
if(void 0!==r)return r.exports
var t=i[e]={exports:{}}
return o[e].call(t.exports,t,t.exports,n),t.exports}n.m=o,e=[],n.O=(r,t,o,i)=>{if(!t){var u=1/0
for(m=0;m<e.length;m++){for(var[t,o,i]=e[m],s=!0,a=0;a<t.length;a++)(!1&i||u>=i)&&Object.keys(n.O).every((e=>n.O[e](t[a])))?t.splice(a--,1):(s=!1,i<u&&(u=i))
if(s){e.splice(m--,1)
var c=o()
void 0!==c&&(r=c)}}return r}i=i||0
for(var m=e.length;m>0&&e[m-1][2]>i;m--)e[m]=e[m-1]
e[m]=[t,o,i]},n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e
return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((r,t)=>(n.f[t](e,r),r)),[])),n.u=e=>"chunk."+e+"."+{163:"a2b745d790eb8f43ab30",290:"57a6d52a9f8ab84952f6"}[e]+".js",n.miniCssF=e=>{},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},t="__ember_auto_import__:",n.l=(e,o,i,u)=>{if(r[e])r[e].push(o)
else{var s,a
if(void 0!==i)for(var c=document.getElementsByTagName("script"),m=0;m<c.length;m++){var p=c[m]
if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==t+i){s=p
break}}s||(a=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=e),r[e]=[o]
var l=(t,o)=>{s.onerror=s.onload=null,clearTimeout(b)
var i=r[e]
if(delete r[e],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(o))),t)return t(o)},b=setTimeout(l.bind(null,void 0,{type:"timeout",target:s}),12e4)
s.onerror=l.bind(null,s.onerror),s.onload=l.bind(null,s.onload),a&&document.head.appendChild(s)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/ember-octane-vs-classic-cheat-sheet/assets/",(()=>{var e={143:0}
n.f.j=(r,t)=>{var o=n.o(e,r)?e[r]:void 0
if(0!==o)if(o)t.push(o[2])
else{var i=new Promise(((t,i)=>o=e[r]=[t,i]))
t.push(o[2]=i)
var u=n.p+n.u(r),s=new Error
n.l(u,(t=>{if(n.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src
s.message="Loading chunk "+r+" failed.\n("+i+": "+u+")",s.name="ChunkLoadError",s.type=i,s.request=u,o[1](s)}}),"chunk-"+r,r)}},n.O.j=r=>0===e[r]
var r=(r,t)=>{var o,i,[u,s,a]=t,c=0
if(u.some((r=>0!==e[r]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o])
if(a)var m=a(n)}for(r&&r(t);c<u.length;c++)i=u[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0
return n.O(m)},t=globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]
t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),n.O(void 0,[207],(()=>n(8)))
var u=n.O(void 0,[207],(()=>n(533)))
u=n.O(u),__ember_auto_import__=u})()
