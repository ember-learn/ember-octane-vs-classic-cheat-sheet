/*! For license information please see chunk.881.2a807fc92bccc48845b2.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[881],{126:function(e,t){!function t(n){var r=n,a=n.document
function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=i||{}
function s(e){this.name="SupportError",this.cause=e.cause,this.message="`".concat(e.cause,"` - feature unsupported in your environment."),e.ruleId&&(this.ruleId=e.ruleId,this.message+=" Skipping ".concat(this.ruleId," rule.")),this.stack=(new Error).stack}i.version="4.3.5","function"==typeof define&&define.amd&&define("axe-core",[],(function(){return i})),"object"===(void 0===e?"undefined":o(e))&&e.exports&&"function"==typeof t.toString&&(i.source="("+t.toString()+')(typeof window === "object" ? window : this);',e.exports=i),"function"==typeof n.getComputedStyle&&(n.axe=i),s.prototype=Object.create(Error.prototype),s.prototype.constructor=s
var l=["node"],u=["node"],c=["variant"],d=["matches"],p=["chromium"],f=["noImplicit"],h=["noPresentational"],m=["nodes"],g=["node"],v=["relatedNodes"],b=["environmentData"],y=["environmentData"],w=["node"],D=["environmentData"],x=["environmentData"],E=["environmentData"]
function A(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=N(e)
if(t){var a=N(this).constructor
n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments)
return F(this,n)}}function F(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?T(e):t}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){if(null==e)return{}
var n,r,a=function(e,t){if(null==e)return{}
var n,r,a={},o=Object.keys(e)
for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n])
return a}(e,t)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function _(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||q(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o=[],i=!0,s=!1
try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){s=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return o}}(e,t)||q(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return t&&P(e.prototype,t),n&&P(e,n),e}function M(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!n){if(Array.isArray(e)||(n=q(e))||t&&e&&"number"==typeof e.length){n&&(e=n)
var r=0,a=function(){}
return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1
return{s:function(){n=n.call(e)},n:function(){var e=n.next()
return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}function q(e,t){if(e){if("string"==typeof e)return L(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}function L(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){var e=Object.create,t=Object.defineProperty,C=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty,N=Object.getOwnPropertyNames,P=Object.getOwnPropertyDescriptor,q=function(e){return t(e,"__esModule",{value:!0})},L=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},B=function(e,n){for(var r in q(e),n)t(e,r,{get:n[r],enumerable:!0})},U=function(n){return n&&n.__esModule?n:function(e,n,r){if(q(e),"object"===o(n)||"function"==typeof n){var a,i=M(N(n))
try{var s=function(){var o=a.value
F.call(e,o)||"default"===o||t(e,o,{get:function(){return n[o]},enumerable:!(r=P(n,o))||r.enumerable})}
for(i.s();!(a=i.n()).done;)s()}catch(e){i.e(e)}finally{i.f()}}return e}(t(e(C(n)),"default",{value:n,enumerable:!0}),n)},H=L((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.isIdentStart=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||"-"===e||"_"===e},e.isIdent=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||"-"===e||"_"===e},e.isHex=function(e){return e>="a"&&e<="f"||e>="A"&&e<="F"||e>="0"&&e<="9"},e.escapeIdentifier=function(t){for(var n=t.length,r="",a=0;a<n;){var o=t.charAt(a)
if(e.identSpecialChars[o])r+="\\"+o
else if("_"===o||"-"===o||o>="A"&&o<="Z"||o>="a"&&o<="z"||0!==a&&o>="0"&&o<="9")r+=o
else{var i=o.charCodeAt(0)
if(55296==(63488&i)){var s=t.charCodeAt(a++)
if(55296!=(64512&i)||56320!=(64512&s))throw Error("UCS-2(decode): illegal sequence")
i=((1023&i)<<10)+(1023&s)+65536}r+="\\"+i.toString(16)+" "}a++}return r},e.escapeStr=function(t){for(var n,r=t.length,a="",o=0;o<r;){var i=t.charAt(o)
'"'===i?i='\\"':"\\"===i?i="\\\\":void 0!==(n=e.strReplacementsRev[i])&&(i=n),a+=i,o++}return'"'+a+'"'},e.identSpecialChars={"!":!0,'"':!0,"#":!0,$:!0,"%":!0,"&":!0,"'":!0,"(":!0,")":!0,"*":!0,"+":!0,",":!0,".":!0,"/":!0,";":!0,"<":!0,"=":!0,">":!0,"?":!0,"@":!0,"[":!0,"\\":!0,"]":!0,"^":!0,"`":!0,"{":!0,"|":!0,"}":!0,"~":!0},e.strReplacementsRev={"\n":"\\n","\r":"\\r","\t":"\\t","\f":"\\f","\v":"\\v"},e.singleQuoteEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\","'":"'"},e.doubleQuotesEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\",'"':'"'}})),V=L((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=H()
e.parseCssSelector=function(e,n,r,a,o,i){var s=e.length,l=""
function u(r,a){var o=""
for(n++,l=e.charAt(n);n<s;){if(l===r)return n++,o
if("\\"===l){n++
var i=void 0
if((l=e.charAt(n))===r)o+=r
else if(void 0!==(i=a[l]))o+=i
else{if(t.isHex(l)){var u=l
for(n++,l=e.charAt(n);t.isHex(l);)u+=l,n++,l=e.charAt(n)
" "===l&&(n++,l=e.charAt(n)),o+=String.fromCharCode(parseInt(u,16))
continue}o+=l}}else o+=l
n++,l=e.charAt(n)}return o}function c(){var r=""
for(l=e.charAt(n);n<s;){if(t.isIdent(l))r+=l
else{if("\\"!==l)return r
if(++n>=s)throw Error("Expected symbol but end of file reached.")
if(l=e.charAt(n),t.identSpecialChars[l])r+=l
else{if(t.isHex(l)){var a=l
for(n++,l=e.charAt(n);t.isHex(l);)a+=l,n++,l=e.charAt(n)
" "===l&&(n++,l=e.charAt(n)),r+=String.fromCharCode(parseInt(a,16))
continue}r+=l}}n++,l=e.charAt(n)}return r}function d(){l=e.charAt(n)
for(var t=!1;" "===l||"\t"===l||"\n"===l||"\r"===l||"\f"===l;)t=!0,n++,l=e.charAt(n)
return t}function p(){var t=f()
if(!t)return null
var r=t
for(l=e.charAt(n);","===l;){if(n++,d(),"selectors"!==r.type&&(r={type:"selectors",selectors:[t]}),!(t=f()))throw Error('Rule expected after ",".')
r.selectors.push(t)}return r}function f(){d()
var t={type:"ruleSet"},r=h()
if(!r)return null
for(var a=t;r&&(r.type="rule",a.rule=r,a=r,d(),l=e.charAt(n),!(n>=s||","===l||")"===l));)if(o[l]){var i=l
if(n++,d(),!(r=h()))throw Error('Rule expected after "'+i+'".')
r.nestingOperator=i}else(r=h())&&(r.nestingOperator=null)
return t}function h(){for(var o=null;n<s;)if("*"===(l=e.charAt(n)))n++,(o=o||{}).tagName="*"
else if(t.isIdentStart(l)||"\\"===l)(o=o||{}).tagName=c()
else if("."===l)n++,((o=o||{}).classNames=o.classNames||[]).push(c())
else if("#"===l)n++,(o=o||{}).id=c()
else if("["===l){n++,d()
var f={name:c()}
if(d(),"]"===l)n++
else{var h=""
if(a[l]&&(h=l,n++,l=e.charAt(n)),n>=s)throw Error('Expected "=" but end of file reached.')
if("="!==l)throw Error('Expected "=" but "'+l+'" found.')
f.operator=h+"=",n++,d()
var m=""
if(f.valueType="string",'"'===l)m=u('"',t.doubleQuotesEscapeChars)
else if("'"===l)m=u("'",t.singleQuoteEscapeChars)
else if(i&&"$"===l)n++,m=c(),f.valueType="substitute"
else{for(;n<s&&"]"!==l;)m+=l,n++,l=e.charAt(n)
m=m.trim()}if(d(),n>=s)throw Error('Expected "]" but end of file reached.')
if("]"!==l)throw Error('Expected "]" but "'+l+'" found.')
n++,f.value=m}((o=o||{}).attrs=o.attrs||[]).push(f)}else{if(":"!==l)break
n++
var g=c(),v={name:g}
if("("===l){n++
var b=""
if(d(),"selector"===r[g])v.valueType="selector",b=p()
else{if(v.valueType=r[g]||"string",'"'===l)b=u('"',t.doubleQuotesEscapeChars)
else if("'"===l)b=u("'",t.singleQuoteEscapeChars)
else if(i&&"$"===l)n++,b=c(),v.valueType="substitute"
else{for(;n<s&&")"!==l;)b+=l,n++,l=e.charAt(n)
b=b.trim()}d()}if(n>=s)throw Error('Expected ")" but end of file reached.')
if(")"!==l)throw Error('Expected ")" but "'+l+'" found.')
n++,v.value=b}((o=o||{}).pseudos=o.pseudos||[]).push(v)}return o}return function(){var t=p()
if(n<s)throw Error('Rule expected but "'+e.charAt(n)+'" found.')
return t}()}})),z=L((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=H()
e.renderEntity=function e(n){var r=""
switch(n.type){case"ruleSet":for(var a=n.rule,o=[];a;)a.nestingOperator&&o.push(a.nestingOperator),o.push(e(a)),a=a.rule
r=o.join(" ")
break
case"selectors":r=n.selectors.map(e).join(", ")
break
case"rule":n.tagName&&(r="*"===n.tagName?"*":t.escapeIdentifier(n.tagName)),n.id&&(r+="#"+t.escapeIdentifier(n.id)),n.classNames&&(r+=n.classNames.map((function(e){return"."+t.escapeIdentifier(e)})).join("")),n.attrs&&(r+=n.attrs.map((function(e){return"operator"in e?"substitute"===e.valueType?"["+t.escapeIdentifier(e.name)+e.operator+"$"+e.value+"]":"["+t.escapeIdentifier(e.name)+e.operator+t.escapeStr(e.value)+"]":"["+t.escapeIdentifier(e.name)+"]"})).join("")),n.pseudos&&(r+=n.pseudos.map((function(n){return n.valueType?"selector"===n.valueType?":"+t.escapeIdentifier(n.name)+"("+e(n.value)+")":"substitute"===n.valueType?":"+t.escapeIdentifier(n.name)+"($"+n.value+")":"numeric"===n.valueType?":"+t.escapeIdentifier(n.name)+"("+n.value+")":":"+t.escapeIdentifier(n.name)+"("+t.escapeIdentifier(n.value)+")":":"+t.escapeIdentifier(n.name)})).join(""))
break
default:throw Error('Unknown entity type: "'+n.type+'".')}return r}})),$=L((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=V(),n=z(),r=function(){function e(){this.pseudos={},this.attrEqualityMods={},this.ruleNestingOperators={},this.substitutesEnabled=!1}return e.prototype.registerSelectorPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
this.pseudos[a]="selector"}return this},e.prototype.unregisterSelectorPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
delete this.pseudos[a]}return this},e.prototype.registerNumericPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
this.pseudos[a]="numeric"}return this},e.prototype.unregisterNumericPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
delete this.pseudos[a]}return this},e.prototype.registerNestingOperators=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
this.ruleNestingOperators[a]=!0}return this},e.prototype.unregisterNestingOperators=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
delete this.ruleNestingOperators[a]}return this},e.prototype.registerAttrEqualityMods=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
this.attrEqualityMods[a]=!0}return this},e.prototype.unregisterAttrEqualityMods=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
delete this.attrEqualityMods[a]}return this},e.prototype.enableSubstitutes=function(){return this.substitutesEnabled=!0,this},e.prototype.disableSubstitutes=function(){return this.substitutesEnabled=!1,this},e.prototype.parse=function(e){return t.parseCssSelector(e,0,this.pseudos,this.attrEqualityMods,this.ruleNestingOperators,this.substitutesEnabled)},e.prototype.render=function(e){return n.renderEntity(e).trim()},e}()
e.CssSelectorParser=r})),W=L((function(e,t){"use strict"
t.exports=function(){}})),G=L((function(e,t){"use strict"
var n=W()()
t.exports=function(e){return e!==n&&null!==e}})),Y=L((function(e,t){"use strict"
var n=G(),r=Array.prototype.forEach,a=Object.create,o=function(e,t){var n
for(n in e)t[n]=e[n]}
t.exports=function(e){var t=a(null)
return r.call(arguments,(function(e){n(e)&&o(Object(e),t)})),t}})),Q=L((function(e,t){"use strict"
t.exports=function(){var e=Math.sign
return"function"==typeof e&&1===e(10)&&-1===e(-20)}})),K=L((function(e,t){"use strict"
t.exports=function(e){return e=Number(e),isNaN(e)||0===e?e:e>0?1:-1}})),J=L((function(e,t){"use strict"
t.exports=Q()()?Math.sign:K()})),X=L((function(e,t){"use strict"
var n=J(),r=Math.abs,a=Math.floor
t.exports=function(e){return isNaN(e)?0:0!==(e=Number(e))&&isFinite(e)?n(e)*a(r(e)):e}})),Z=L((function(e,t){"use strict"
var n=X(),r=Math.max
t.exports=function(e){return r(0,n(e))}})),ee=L((function(e,t){"use strict"
var n=Z()
t.exports=function(e,t,r){var a
return isNaN(e)?(a=t)>=0?r&&a?a-1:a:1:!1!==e&&n(e)}})),te=L((function(e,t){"use strict"
t.exports=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function")
return e}})),ne=L((function(e,t){"use strict"
var n=G()
t.exports=function(e){if(!n(e))throw new TypeError("Cannot use null or undefined")
return e}})),re=L((function(e,t){"use strict"
var n=te(),r=ne(),a=Function.prototype.bind,o=Function.prototype.call,i=Object.keys,s=Object.prototype.propertyIsEnumerable
t.exports=function(e,t){return function(l,u){var c,d=arguments[2],p=arguments[3]
return l=Object(r(l)),n(u),c=i(l),p&&c.sort("function"==typeof p?a.call(p,l):void 0),"function"!=typeof e&&(e=c[e]),o.call(e,c,(function(e,n){return s.call(l,e)?o.call(u,d,l[e],e,l,n):t}))}}})),ae=L((function(e,t){"use strict"
t.exports=re()("forEach")})),oe=L((function(){})),ie=L((function(e,t){"use strict"
t.exports=function(){var e,t=Object.assign
return"function"==typeof t&&(t(e={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")}})),se=L((function(e,t){"use strict"
t.exports=function(){try{return Object.keys("primitive"),!0}catch(e){return!1}}})),le=L((function(e,t){"use strict"
var n=G(),r=Object.keys
t.exports=function(e){return r(n(e)?Object(e):e)}})),ue=L((function(e,t){"use strict"
t.exports=se()()?Object.keys:le()})),ce=L((function(e,t){"use strict"
var n=ue(),r=ne(),a=Math.max
t.exports=function(e,t){var o,i,s,l=a(arguments.length,2)
for(e=Object(r(e)),s=function(n){try{e[n]=t[n]}catch(e){o||(o=e)}},i=1;i<l;++i)n(t=arguments[i]).forEach(s)
if(void 0!==o)throw o
return e}})),de=L((function(e,t){"use strict"
t.exports=ie()()?Object.assign:ce()})),pe=L((function(e,t){"use strict"
var n=G(),r={function:!0,object:!0}
t.exports=function(e){return n(e)&&r[o(e)]||!1}})),fe=L((function(e,t){"use strict"
var n=de(),r=pe(),a=G(),o=Error.captureStackTrace
t.exports=function(e){var i=new Error(e),s=arguments[1],l=arguments[2]
return a(l)||r(s)&&(l=s,s=null),a(l)&&n(i,l),a(s)&&(i.code=s),o&&o(i,t.exports),i}})),he=L((function(e,t){"use strict"
var n=ne(),r=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols
t.exports=function(e,t){var s,l=Object(n(t))
if(e=Object(n(e)),o(l).forEach((function(n){try{r(e,n,a(t,n))}catch(e){s=e}})),"function"==typeof i&&i(l).forEach((function(n){try{r(e,n,a(t,n))}catch(e){s=e}})),void 0!==s)throw s
return e}})),me=L((function(e,t){"use strict"
var n,r,a,o,i,s=Z(),l=function(e,t){return t}
try{Object.defineProperty(l,"length",{configurable:!0,writable:!1,enumerable:!1,value:1})}catch(e){}1===l.length?(n={configurable:!0,writable:!1,enumerable:!1},r=Object.defineProperty,t.exports=function(e,t){return t=s(t),e.length===t?e:(n.value=t,r(e,"length",n))}):(o=he(),i=[],a=function(e){var t,n=0
if(i[e])return i[e]
for(t=[];e--;)t.push("a"+(++n).toString(36))
return new Function("fn","return function ("+t.join(", ")+") { return fn.apply(this, arguments); };")},t.exports=function(e,t){var n
if(t=s(t),e.length===t)return e
n=a(t)(e)
try{o(n,e)}catch(e){}return n})})),ge=L((function(e,t){"use strict"
t.exports=function(e){return null!=e}})),ve=L((function(e,t){"use strict"
var n=ge(),r={object:!0,function:!0,undefined:!0}
t.exports=function(e){return!!n(e)&&hasOwnProperty.call(r,o(e))}})),be=L((function(e,t){"use strict"
var n=ve()
t.exports=function(e){if(!n(e))return!1
try{return!!e.constructor&&e.constructor.prototype===e}catch(e){return!1}}})),ye=L((function(e,t){"use strict"
var n=be()
t.exports=function(e){if("function"!=typeof e)return!1
if(!hasOwnProperty.call(e,"length"))return!1
try{if("number"!=typeof e.length)return!1
if("function"!=typeof e.call)return!1
if("function"!=typeof e.apply)return!1}catch(e){return!1}return!n(e)}})),we=L((function(e,t){"use strict"
var n=ye(),r=/^\s*class[\s{/}]/,a=Function.prototype.toString
t.exports=function(e){return!!n(e)&&!r.test(a.call(e))}})),De=L((function(e,t){"use strict"
var n="razdwatrzy"
t.exports=function(){return"function"==typeof n.contains&&!0===n.contains("dwa")&&!1===n.contains("foo")}})),xe=L((function(e,t){"use strict"
var n=String.prototype.indexOf
t.exports=function(e){return n.call(this,e,arguments[1])>-1}})),Ee=L((function(e,t){"use strict"
t.exports=De()()?String.prototype.contains:xe()})),Ae=L((function(e,t){"use strict"
var n=ge(),r=we(),a=de(),o=Y(),i=Ee();(t.exports=function(e,t){var r,s,l,u,c
return arguments.length<2||"string"!=typeof e?(u=t,t=e,e=null):u=arguments[2],n(e)?(r=i.call(e,"c"),s=i.call(e,"e"),l=i.call(e,"w")):(r=l=!0,s=!1),c={value:t,configurable:r,enumerable:s,writable:l},u?a(o(u),c):c}).gs=function(e,t,s){var l,u,c,d
return"string"!=typeof e?(c=s,s=t,t=e,e=null):c=arguments[3],n(t)?r(t)?n(s)?r(s)||(c=s,s=void 0):s=void 0:(c=t,t=s=void 0):t=void 0,n(e)?(l=i.call(e,"c"),u=i.call(e,"e")):(l=!0,u=!1),d={get:t,set:s,configurable:l,enumerable:u},c?a(o(c),d):d}})),Ce=L((function(e,t){"use strict"
var n,r,a,i,s,l,u,c=Ae(),d=te(),p=Function.prototype.apply,f=Function.prototype.call,h=Object.create,m=Object.defineProperty,g=Object.defineProperties,v=Object.prototype.hasOwnProperty,b={configurable:!0,enumerable:!1,writable:!0}
r=function(e,t){var r,o
return d(t),o=this,n.call(this,e,r=function(){a.call(o,e,r),p.call(t,this,arguments)}),r.__eeOnceListener__=t,this},a=function(e,t){var n,r,a,i
if(d(t),!v.call(this,"__ee__"))return this
if(!(n=this.__ee__)[e])return this
if(r=n[e],"object"===o(r))for(i=0;a=r[i];++i)a!==t&&a.__eeOnceListener__!==t||(2===r.length?n[e]=r[i?0:1]:r.splice(i,1))
else r!==t&&r.__eeOnceListener__!==t||delete n[e]
return this},i=function(e){var t,n,r,a,i
if(v.call(this,"__ee__")&&(a=this.__ee__[e]))if("object"===o(a)){for(n=arguments.length,i=new Array(n-1),t=1;t<n;++t)i[t-1]=arguments[t]
for(a=a.slice(),t=0;r=a[t];++t)p.call(r,this,i)}else switch(arguments.length){case 1:f.call(a,this)
break
case 2:f.call(a,this,arguments[1])
break
case 3:f.call(a,this,arguments[1],arguments[2])
break
default:for(n=arguments.length,i=new Array(n-1),t=1;t<n;++t)i[t-1]=arguments[t]
p.call(a,this,i)}},s={on:n=function(e,t){var n
return d(t),v.call(this,"__ee__")?n=this.__ee__:(n=b.value=h(null),m(this,"__ee__",b),b.value=null),n[e]?"object"===o(n[e])?n[e].push(t):n[e]=[n[e],t]:n[e]=t,this},once:r,off:a,emit:i},l={on:c(n),once:c(r),off:c(a),emit:c(i)},u=g({},l),t.exports=e=function(e){return null==e?h(u):g(Object(e),l)},e.methods=s})),ke=L((function(e,t){"use strict"
t.exports=function(){var e,t,n=Array.from
return"function"==typeof n&&(t=n(e=["raz","dwa"]),Boolean(t&&t!==e&&"dwa"===t[1]))}})),Fe=L((function(e,t){"use strict"
t.exports=function(){return"object"===("undefined"==typeof globalThis?"undefined":o(globalThis))&&!!globalThis&&globalThis.Array===Array}})),Te=L((function(e,t){var r=function(){if("object"===("undefined"==typeof self?"undefined":o(self))&&self)return self
if("object"===(void 0===n?"undefined":o(n))&&n)return n
throw new Error("Unable to resolve global `this`")}
t.exports=function(){if(this)return this
try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return r()}try{return __global__||r()}finally{delete Object.prototype.__global__}}()})),Ne=L((function(e,t){"use strict"
t.exports=Fe()()?globalThis:Te()})),Re=L((function(e,t){"use strict"
var n=Ne(),r={object:!0,symbol:!0}
t.exports=function(){var e,t=n.Symbol
if("function"!=typeof t)return!1
e=t("test symbol")
try{String(e)}catch(e){return!1}return!!r[o(t.iterator)]&&!!r[o(t.toPrimitive)]&&!!r[o(t.toStringTag)]}})),_e=L((function(e,t){"use strict"
t.exports=function(e){return!!e&&("symbol"===o(e)||!!e.constructor&&"Symbol"===e.constructor.name&&"Symbol"===e[e.constructor.toStringTag])}})),Oe=L((function(e,t){"use strict"
var n=_e()
t.exports=function(e){if(!n(e))throw new TypeError(e+" is not a symbol")
return e}})),Se=L((function(e,t){"use strict"
var n=Ae(),r=Object.create,a=Object.defineProperty,o=Object.prototype,i=r(null)
t.exports=function(e){for(var t,r,s=0;i[e+(s||"")];)++s
return i[e+=s||""]=!0,a(o,t="@@"+e,n.gs(null,(function(e){r||(r=!0,a(this,t,n(e)),r=!1)}))),t}})),Ie=L((function(e,t){"use strict"
var n=Ae(),r=Ne().Symbol
t.exports=function(e){return Object.defineProperties(e,{hasInstance:n("",r&&r.hasInstance||e("hasInstance")),isConcatSpreadable:n("",r&&r.isConcatSpreadable||e("isConcatSpreadable")),iterator:n("",r&&r.iterator||e("iterator")),match:n("",r&&r.match||e("match")),replace:n("",r&&r.replace||e("replace")),search:n("",r&&r.search||e("search")),species:n("",r&&r.species||e("species")),split:n("",r&&r.split||e("split")),toPrimitive:n("",r&&r.toPrimitive||e("toPrimitive")),toStringTag:n("",r&&r.toStringTag||e("toStringTag")),unscopables:n("",r&&r.unscopables||e("unscopables"))})}})),Pe=L((function(e,t){"use strict"
var n=Ae(),r=Oe(),a=Object.create(null)
t.exports=function(e){return Object.defineProperties(e,{for:n((function(t){return a[t]?a[t]:a[t]=e(String(t))})),keyFor:n((function(e){var t
for(t in r(e),a)if(a[t]===e)return t}))})}})),je=L((function(e,t){"use strict"
var n,r,a,i=Ae(),s=Oe(),l=Ne().Symbol,u=Se(),c=Ie(),d=Pe(),p=Object.create,f=Object.defineProperties,h=Object.defineProperty
if("function"==typeof l)try{String(l()),a=!0}catch(e){}else l=null
r=function(e){if(this instanceof r)throw new TypeError("Symbol is not a constructor")
return n(e)},t.exports=n=function e(t){var n
if(this instanceof e)throw new TypeError("Symbol is not a constructor")
return a?l(t):(n=p(r.prototype),t=void 0===t?"":String(t),f(n,{__description__:i("",t),__name__:i("",u(t))}))},c(n),d(n),f(r.prototype,{constructor:i(n),toString:i("",(function(){return this.__name__}))}),f(n.prototype,{toString:i((function(){return"Symbol ("+s(this).__description__+")"})),valueOf:i((function(){return s(this)}))}),h(n.prototype,n.toPrimitive,i("",(function(){var e=s(this)
return"symbol"===o(e)?e:e.toString()}))),h(n.prototype,n.toStringTag,i("c","Symbol")),h(r.prototype,n.toStringTag,i("c",n.prototype[n.toStringTag])),h(r.prototype,n.toPrimitive,i("c",n.prototype[n.toPrimitive]))})),Me=L((function(e,t){"use strict"
t.exports=Re()()?Ne().Symbol:je()})),qe=L((function(e,t){"use strict"
var n=Object.prototype.toString,r=n.call(function(){return arguments}())
t.exports=function(e){return n.call(e)===r}})),Le=L((function(e,t){"use strict"
var n=Object.prototype.toString,r=RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/)
t.exports=function(e){return"function"==typeof e&&r(n.call(e))}})),Be=L((function(e,t){"use strict"
var n=Object.prototype.toString,r=n.call("")
t.exports=function(e){return"string"==typeof e||e&&"object"===o(e)&&(e instanceof String||n.call(e)===r)||!1}})),Ue=L((function(e,t){"use strict"
var n=Me().iterator,r=qe(),a=Le(),o=Z(),i=te(),s=ne(),l=G(),u=Be(),c=Array.isArray,d=Function.prototype.call,p={configurable:!0,enumerable:!0,writable:!0,value:null},f=Object.defineProperty
t.exports=function(e){var t,h,m,g,v,b,y,w,D,x,E=arguments[1],A=arguments[2]
if(e=Object(s(e)),l(E)&&i(E),this&&this!==Array&&a(this))t=this
else{if(!E){if(r(e))return 1!==(v=e.length)?Array.apply(null,e):((g=new Array(1))[0]=e[0],g)
if(c(e)){for(g=new Array(v=e.length),h=0;h<v;++h)g[h]=e[h]
return g}}g=[]}if(!c(e))if(void 0!==(D=e[n])){for(y=i(D).call(e),t&&(g=new t),w=y.next(),h=0;!w.done;)x=E?d.call(E,A,w.value,h):w.value,t?(p.value=x,f(g,h,p)):g[h]=x,w=y.next(),++h
v=h}else if(u(e)){for(v=e.length,t&&(g=new t),h=0,m=0;h<v;++h)x=e[h],h+1<v&&(b=x.charCodeAt(0))>=55296&&b<=56319&&(x+=e[++h]),x=E?d.call(E,A,x,m):x,t?(p.value=x,f(g,m,p)):g[m]=x,++m
v=m}if(void 0===v)for(v=o(e.length),t&&(g=new t(v)),h=0;h<v;++h)x=E?d.call(E,A,e[h],h):e[h],t?(p.value=x,f(g,h,p)):g[h]=x
return t&&(p.value=null,g.length=v),g}})),He=L((function(e,t){"use strict"
t.exports=ke()()?Array.from:Ue()})),Ve=L((function(e,t){"use strict"
var n=He(),r=Array.isArray
t.exports=function(e){return r(e)?e:n(e)}})),ze=L((function(e,t){"use strict"
var n,r=Ve(),a=G(),o=te(),i=Array.prototype.slice
n=function(e){return this.map((function(t,n){return t?t(e[n]):e[n]})).concat(i.call(e,this.length))},t.exports=function(e){return(e=r(e)).forEach((function(e){a(e)&&o(e)})),n.bind(e)}})),$e=L((function(e,t){"use strict"
var n=te()
t.exports=function(e){var t
return"function"==typeof e?{set:e,get:e}:(t={get:n(e.get)},void 0!==e.set?(t.set=n(e.set),e.delete&&(t.delete=n(e.delete)),e.clear&&(t.clear=n(e.clear)),t):(t.set=t.get,t))}})),We=L((function(e,t){"use strict"
var n=fe(),r=me(),a=Ae(),o=Ce().methods,i=ze(),s=$e(),l=Function.prototype.apply,u=Function.prototype.call,c=Object.create,d=Object.defineProperties,p=o.on,f=o.emit
t.exports=function(e,t,o){var h,m,g,v,b,y,w,D,x,E,A,C,k,F,T,N=c(null)
return m=!1!==t?t:isNaN(e.length)?1:e.length,o.normalizer&&(E=s(o.normalizer),g=E.get,v=E.set,b=E.delete,y=E.clear),null!=o.resolvers&&(T=i(o.resolvers)),F=g?r((function(t){var r,a,o=arguments
if(T&&(o=T(o)),null!==(r=g(o))&&hasOwnProperty.call(N,r))return A&&h.emit("get",r,o,this),N[r]
if(a=1===o.length?u.call(e,this,o[0]):l.call(e,this,o),null===r){if(null!==(r=g(o)))throw n("Circular invocation","CIRCULAR_INVOCATION")
r=v(o)}else if(hasOwnProperty.call(N,r))throw n("Circular invocation","CIRCULAR_INVOCATION")
return N[r]=a,C&&h.emit("set",r,null,a),a}),m):0===t?function(){var t
if(hasOwnProperty.call(N,"data"))return A&&h.emit("get","data",arguments,this),N.data
if(t=arguments.length?l.call(e,this,arguments):u.call(e,this),hasOwnProperty.call(N,"data"))throw n("Circular invocation","CIRCULAR_INVOCATION")
return N.data=t,C&&h.emit("set","data",null,t),t}:function(t){var r,a,o=arguments
if(T&&(o=T(arguments)),a=String(o[0]),hasOwnProperty.call(N,a))return A&&h.emit("get",a,o,this),N[a]
if(r=1===o.length?u.call(e,this,o[0]):l.call(e,this,o),hasOwnProperty.call(N,a))throw n("Circular invocation","CIRCULAR_INVOCATION")
return N[a]=r,C&&h.emit("set",a,null,r),r},h={original:e,memoized:F,profileName:o.profileName,get:function(e){return T&&(e=T(e)),g?g(e):String(e[0])},has:function(e){return hasOwnProperty.call(N,e)},delete:function(e){var t
hasOwnProperty.call(N,e)&&(b&&b(e),t=N[e],delete N[e],k&&h.emit("delete",e,t))},clear:function(){var e=N
y&&y(),N=c(null),h.emit("clear",e)},on:function(e,t){return"get"===e?A=!0:"set"===e?C=!0:"delete"===e&&(k=!0),p.call(this,e,t)},emit:f,updateEnv:function(){e=h.original}},w=g?r((function(e){var t,n=arguments
T&&(n=T(n)),null!==(t=g(n))&&h.delete(t)}),m):0===t?function(){return h.delete("data")}:function(e){return T&&(e=T(arguments)[0]),h.delete(e)},D=r((function(){var e,n=arguments
return 0===t?N.data:(T&&(n=T(n)),e=g?g(n):String(n[0]),N[e])})),x=r((function(){var e,n=arguments
return 0===t?h.has("data"):(T&&(n=T(n)),null!==(e=g?g(n):String(n[0]))&&h.has(e))})),d(F,{__memoized__:a(!0),delete:a(w),clear:a(h.clear),_get:a(D),_has:a(x)}),h}})),Ge=L((function(e,t){"use strict"
var n=te(),r=ae(),a=oe(),o=We(),i=ee()
t.exports=function e(t){var s,l,u
if(n(t),(s=Object(arguments[1])).async&&s.promise)throw new Error("Options 'async' and 'promise' cannot be used together")
return hasOwnProperty.call(t,"__memoized__")&&!s.force?t:(l=i(s.length,t.length,s.async&&a.async),u=o(t,l,s),r(a,(function(e,t){s[t]&&e(s[t],u,s)})),e.__profiler__&&e.__profiler__(u),u.updateEnv(),u.memoized)}})),Ye=L((function(e,t){"use strict"
t.exports=function(e){var t,n,r=e.length
if(!r)return""
for(t=String(e[n=0]);--r;)t+=""+e[++n]
return t}})),Qe=L((function(e,t){"use strict"
t.exports=function(e){return e?function(t){for(var n=String(t[0]),r=0,a=e;--a;)n+=""+t[++r]
return n}:function(){return""}}})),Ke=L((function(e,t){"use strict"
t.exports=function(){var e=Number.isNaN
return"function"==typeof e&&!e({})&&e(NaN)&&!e(34)}})),Je=L((function(e,t){"use strict"
t.exports=function(e){return e!=e}})),Xe=L((function(e,t){"use strict"
t.exports=Ke()()?Number.isNaN:Je()})),Ze=L((function(e,t){"use strict"
var n=Xe(),r=Z(),a=ne(),o=Array.prototype.indexOf,i=Object.prototype.hasOwnProperty,s=Math.abs,l=Math.floor
t.exports=function(e){var t,u,c,d
if(!n(e))return o.apply(this,arguments)
for(u=r(a(this).length),c=arguments[1],t=c=isNaN(c)?0:c>=0?l(c):r(this.length)-l(s(c));t<u;++t)if(i.call(this,t)&&(d=this[t],n(d)))return t
return-1}})),et=L((function(e,t){"use strict"
var n=Ze(),r=Object.create
t.exports=function(){var e=0,t=[],a=r(null)
return{get:function(e){var r,a=0,o=t,i=e.length
if(0===i)return o[i]||null
if(o=o[i]){for(;a<i-1;){if(-1===(r=n.call(o[0],e[a])))return null
o=o[1][r],++a}return-1===(r=n.call(o[0],e[a]))?null:o[1][r]||null}return null},set:function(r){var o,i=0,s=t,l=r.length
if(0===l)s[l]=++e
else{for(s[l]||(s[l]=[[],[]]),s=s[l];i<l-1;)-1===(o=n.call(s[0],r[i]))&&(o=s[0].push(r[i])-1,s[1].push([[],[]])),s=s[1][o],++i;-1===(o=n.call(s[0],r[i]))&&(o=s[0].push(r[i])-1),s[1][o]=++e}return a[e]=r,e},delete:function(e){var r,o=0,i=t,s=a[e],l=s.length,u=[]
if(0===l)delete i[l]
else if(i=i[l]){for(;o<l-1;){if(-1===(r=n.call(i[0],s[o])))return
u.push(i,r),i=i[1][r],++o}if(-1===(r=n.call(i[0],s[o])))return
for(e=i[1][r],i[0].splice(r,1),i[1].splice(r,1);!i[0].length&&u.length;)r=u.pop(),(i=u.pop())[0].splice(r,1),i[1].splice(r,1)}delete a[e]},clear:function(){t=[],a=r(null)}}}})),tt=L((function(e,t){"use strict"
var n=Ze()
t.exports=function(){var e=0,t=[],r=[]
return{get:function(e){var a=n.call(t,e[0])
return-1===a?null:r[a]},set:function(n){return t.push(n[0]),r.push(++e),e},delete:function(e){var a=n.call(r,e);-1!==a&&(t.splice(a,1),r.splice(a,1))},clear:function(){t=[],r=[]}}}})),nt=L((function(e,t){"use strict"
var n=Ze(),r=Object.create
t.exports=function(e){var t=0,a=[[],[]],o=r(null)
return{get:function(t){for(var r,o=0,i=a;o<e-1;){if(-1===(r=n.call(i[0],t[o])))return null
i=i[1][r],++o}return-1===(r=n.call(i[0],t[o]))?null:i[1][r]||null},set:function(r){for(var i,s=0,l=a;s<e-1;)-1===(i=n.call(l[0],r[s]))&&(i=l[0].push(r[s])-1,l[1].push([[],[]])),l=l[1][i],++s
return-1===(i=n.call(l[0],r[s]))&&(i=l[0].push(r[s])-1),l[1][i]=++t,o[t]=r,t},delete:function(t){for(var r,i=0,s=a,l=[],u=o[t];i<e-1;){if(-1===(r=n.call(s[0],u[i])))return
l.push(s,r),s=s[1][r],++i}if(-1!==(r=n.call(s[0],u[i]))){for(t=s[1][r],s[0].splice(r,1),s[1].splice(r,1);!s[0].length&&l.length;)r=l.pop(),(s=l.pop())[0].splice(r,1),s[1].splice(r,1)
delete o[t]}},clear:function(){a=[[],[]],o=r(null)}}}})),rt=L((function(e,t){"use strict"
var n=te(),r=ae(),a=Function.prototype.call
t.exports=function(e,t){var o={},i=arguments[2]
return n(t),r(e,(function(e,n,r,s){o[n]=a.call(t,i,e,n,r,s)})),o}})),at=L((function(e,t){"use strict"
var n=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function")
return e},r=function(e){var t,r,o=a.createTextNode(""),i=0
return new e((function(){var e
if(t)r&&(t=r.concat(t))
else{if(!r)return
t=r}if(r=t,t=null,"function"==typeof r)return e=r,r=null,void e()
for(o.data=i=++i%2;r;)e=r.shift(),r.length||(r=null),e()})).observe(o,{characterData:!0}),function(e){n(e),t?"function"==typeof t?t=[t,e]:t.push(e):(t=e,o.data=i=++i%2)}}
t.exports=function(){if("object"===("undefined"==typeof process?"undefined":o(process))&&process&&"function"==typeof process.nextTick)return process.nextTick
if("function"==typeof queueMicrotask)return function(e){queueMicrotask(n(e))}
if("object"===(void 0===a?"undefined":o(a))&&a){if("function"==typeof MutationObserver)return r(MutationObserver)
if("function"==typeof WebKitMutationObserver)return r(WebKitMutationObserver)}return"function"==typeof setImmediate?function(e){setImmediate(n(e))}:"function"==typeof setTimeout||"object"===("undefined"==typeof setTimeout?"undefined":o(setTimeout))?function(e){setTimeout(n(e),0)}:null}()})),ot=L((function(){"use strict"
var e=He(),t=rt(),n=he(),r=me(),a=at(),o=Array.prototype.slice,i=Function.prototype.apply,s=Object.create
oe().async=function(l,u){var c,d,p,f=s(null),h=s(null),m=u.memoized,g=u.original
u.memoized=r((function(e){var t=arguments,n=t[t.length-1]
return"function"==typeof n&&(c=n,t=o.call(t,0,-1)),m.apply(d=this,p=t)}),m)
try{n(u.memoized,m)}catch(e){}u.on("get",(function(e){var t,n,r
if(c){if(f[e])return"function"==typeof f[e]?f[e]=[f[e],c]:f[e].push(c),void(c=null)
t=c,n=d,r=p,c=d=p=null,a((function(){var a
hasOwnProperty.call(h,e)?(a=h[e],u.emit("getasync",e,r,n),i.call(t,a.context,a.args)):(c=t,d=n,p=r,m.apply(n,r))}))}})),u.original=function(){var t,n,r,o
return c?(t=e(arguments),n=function t(n){var r,s,l=t.id
if(null!=l){if(delete t.id,r=f[l],delete f[l],r)return s=e(arguments),u.has(l)&&(n?u.delete(l):(h[l]={context:this,args:s},u.emit("setasync",l,"function"==typeof r?1:r.length))),"function"==typeof r?o=i.call(r,this,s):r.forEach((function(e){o=i.call(e,this,s)}),this),o}else a(i.bind(t,this,arguments))},r=c,c=d=p=null,t.push(n),o=i.call(g,this,t),n.cb=r,c=n,o):i.call(g,this,arguments)},u.on("set",(function(e){c?(f[e]?"function"==typeof f[e]?f[e]=[f[e],c.cb]:f[e].push(c.cb):f[e]=c.cb,delete c.cb,c.id=e,c=null):u.delete(e)})),u.on("delete",(function(e){var t
hasOwnProperty.call(f,e)||h[e]&&(t=h[e],delete h[e],u.emit("deleteasync",e,o.call(t.args,1)))})),u.on("clear",(function(){var e=h
h=s(null),u.emit("clearasync",t(e,(function(e){return o.call(e.args,1)})))}))}})),it=L((function(e,t){"use strict"
var n=Array.prototype.forEach,r=Object.create
t.exports=function(e){var t=r(null)
return n.call(arguments,(function(e){t[e]=!0})),t}})),st=L((function(e,t){"use strict"
t.exports=function(e){return"function"==typeof e}})),lt=L((function(e,t){"use strict"
var n=st()
t.exports=function(e){try{return e&&n(e.toString)?e.toString():String(e)}catch(e){throw new TypeError("Passed argument cannot be stringifed")}}})),ut=L((function(e,t){"use strict"
var n=ne(),r=lt()
t.exports=function(e){return r(n(e))}})),ct=L((function(e,t){"use strict"
var n=st()
t.exports=function(e){try{return e&&n(e.toString)?e.toString():String(e)}catch(e){return"<Non-coercible to string value>"}}})),dt=L((function(e,t){"use strict"
var n=ct(),r=/[\n\r\u2028\u2029]/g
t.exports=function(e){var t=n(e)
return t.length>100&&(t=t.slice(0,99)+"…"),t.replace(r,(function(e){return JSON.stringify(e).slice(1,-1)}))}})),pt=L((function(e,t){function n(e){return!!e&&("object"===o(e)||"function"==typeof e)&&"function"==typeof e.then}t.exports=n,t.exports.default=n})),ft=L((function(){"use strict"
var e=rt(),t=it(),n=ut(),r=dt(),a=pt(),o=at(),i=Object.create,s=t("then","then:finally","done","done:finally")
oe().promise=function(t,l){var u=i(null),c=i(null),d=i(null)
if(!0===t)t=null
else if(t=n(t),!s[t])throw new TypeError("'"+r(t)+"' is not valid promise mode")
l.on("set",(function(e,n,r){var i=!1
if(!a(r))return c[e]=r,void l.emit("setasync",e,1)
u[e]=1,d[e]=r
var s=function(t){var n=u[e]
if(i)throw new Error("Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)\nConsider to rely on 'then' or 'done' mode instead.")
n&&(delete u[e],c[e]=t,l.emit("setasync",e,n))},p=function(){i=!0,u[e]&&(delete u[e],delete d[e],l.delete(e))},f=t
if(f||(f="then"),"then"===f){var h=function(){o(p)}
"function"==typeof(r=r.then((function(e){o(s.bind(this,e))}),h)).finally&&r.finally(h)}else if("done"===f){if("function"!=typeof r.done)throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode")
r.done(s,p)}else if("done:finally"===f){if("function"!=typeof r.done)throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode")
if("function"!=typeof r.finally)throw new Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode")
r.done(s),r.finally(p)}})),l.on("get",(function(e,t,n){var r
if(u[e])++u[e]
else{r=d[e]
var i=function(){l.emit("getasync",e,t,n)}
a(r)?"function"==typeof r.done?r.done(i):r.then((function(){o(i)})):i()}})),l.on("delete",(function(e){if(delete d[e],u[e])delete u[e]
else if(hasOwnProperty.call(c,e)){var t=c[e]
delete c[e],l.emit("deleteasync",e,[t])}})),l.on("clear",(function(){var t=c
c=i(null),u=i(null),d=i(null),l.emit("clearasync",e(t,(function(e){return[e]})))}))}})),ht=L((function(){"use strict"
var e=te(),t=ae(),n=oe(),r=Function.prototype.apply
n.dispose=function(a,o,i){var s
if(e(a),i.async&&n.async||i.promise&&n.promise)return o.on("deleteasync",s=function(e,t){r.call(a,null,t)}),void o.on("clearasync",(function(e){t(e,(function(e,t){s(t,e)}))}))
o.on("delete",s=function(e,t){a(t)}),o.on("clear",(function(e){t(e,(function(e,t){s(t,e)}))}))}})),mt=L((function(e,t){"use strict"
t.exports=2147483647})),gt=L((function(e,t){"use strict"
var n=Z(),r=mt()
t.exports=function(e){if((e=n(e))>r)throw new TypeError(e+" exceeds maximum possible timeout")
return e}})),vt=L((function(){"use strict"
var e=He(),t=ae(),n=at(),r=pt(),a=gt(),o=oe(),i=Function.prototype,s=Math.max,l=Math.min,u=Object.create
o.maxAge=function(c,d,p){var f,h,m,g;(c=a(c))&&(f=u(null),h=p.async&&o.async||p.promise&&o.promise?"async":"",d.on("set"+h,(function(e){f[e]=setTimeout((function(){d.delete(e)}),c),"function"==typeof f[e].unref&&f[e].unref(),g&&(g[e]&&"nextTick"!==g[e]&&clearTimeout(g[e]),g[e]=setTimeout((function(){delete g[e]}),m),"function"==typeof g[e].unref&&g[e].unref())})),d.on("delete"+h,(function(e){clearTimeout(f[e]),delete f[e],g&&("nextTick"!==g[e]&&clearTimeout(g[e]),delete g[e])})),p.preFetch&&(m=!0===p.preFetch||isNaN(p.preFetch)?.333:s(l(Number(p.preFetch),1),0))&&(g={},m=(1-m)*c,d.on("get"+h,(function(t,a,o){g[t]||(g[t]="nextTick",n((function(){var n
"nextTick"===g[t]&&(delete g[t],d.delete(t),p.async&&(a=e(a)).push(i),n=d.memoized.apply(o,a),p.promise&&r(n)&&("function"==typeof n.done?n.done(i,i):n.then(i,i)))})))}))),d.on("clear"+h,(function(){t(f,(function(e){clearTimeout(e)})),f={},g&&(t(g,(function(e){"nextTick"!==e&&clearTimeout(e)})),g={})})))}})),bt=L((function(e,t){"use strict"
var n=Z(),r=Object.create,a=Object.prototype.hasOwnProperty
t.exports=function(e){var t,o=0,i=1,s=r(null),l=r(null),u=0
return e=n(e),{hit:function(n){var r=l[n],c=++u
if(s[c]=n,l[n]=c,!r){if(++o<=e)return
return n=s[i],t(n),n}if(delete s[r],i===r)for(;!a.call(s,++i););},delete:t=function(e){var t=l[e]
if(t&&(delete s[t],delete l[e],--o,i===t)){if(!o)return u=0,void(i=1)
for(;!a.call(s,++i););}},clear:function(){o=0,i=1,s=r(null),l=r(null),u=0}}}})),yt=L((function(){"use strict"
var e=Z(),t=bt(),n=oe()
n.max=function(r,a,o){var i,s,l;(r=e(r))&&(s=t(r),i=o.async&&n.async||o.promise&&n.promise?"async":"",a.on("set"+i,l=function(e){void 0!==(e=s.hit(e))&&a.delete(e)}),a.on("get"+i,l),a.on("delete"+i,s.delete),a.on("clear"+i,s.clear))}})),wt=L((function(){"use strict"
var e=Ae(),t=oe(),n=Object.create,r=Object.defineProperties
t.refCounter=function(a,o,i){var s,l
s=n(null),l=i.async&&t.async||i.promise&&t.promise?"async":"",o.on("set"+l,(function(e,t){s[e]=t||1})),o.on("get"+l,(function(e){++s[e]})),o.on("delete"+l,(function(e){delete s[e]})),o.on("clear"+l,(function(){s={}})),r(o.memoized,{deleteRef:e((function(){var e=o.get(arguments)
return null===e?null:s[e]?!--s[e]&&(o.delete(e),!0):null})),getRefCount:e((function(){var e=o.get(arguments)
return null===e?0:s[e]?s[e]:0}))})}})),Dt=L((function(e,t){"use strict"
var n=Y(),r=ee(),a=Ge()
t.exports=function(e){var t,o=n(arguments[1])
return o.normalizer||0!==(t=o.length=r(o.length,e.length,o.async))&&(o.primitive?!1===t?o.normalizer=Ye():t>1&&(o.normalizer=Qe()(t)):o.normalizer=!1===t?et()():1===t?tt()():nt()(t)),o.async&&ot(),o.promise&&ft(),o.dispose&&ht(),o.maxAge&&vt(),o.max&&yt(),o.refCounter&&wt(),a(e,o)}})),xt=L((function(e,t){"use strict"
t.exports=function(){return/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g}})),Et=L((function(e,t){!function(){"use strict"
var e={name:"doT",version:"1.1.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0,log:!0}
!function(){if("object"!==("undefined"==typeof globalThis?"undefined":o(globalThis)))try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch(e){n.globalThis=function(){if("undefined"!=typeof self)return self
if(void 0!==n)return n
if(void 0!==r)return r
if(void 0!==this)return this
throw new Error("Unable to locate global `this`")}()}}(),e.encodeHTMLSource=function(e){var t={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},n=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g
return function(e){return e?e.toString().replace(n,(function(e){return t[e]||e})):""}},void 0!==t&&t.exports?t.exports=e:"function"==typeof define&&define.amd?define((function(){return e})):globalThis.doT=e
var a={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("}},i=/$^/
function s(e,t,n){return("string"==typeof t?t:t.toString()).replace(e.define||i,(function(t,r,a,o){return 0===r.indexOf("def.")&&(r=r.substring(4)),r in n||(":"===a?(e.defineParams&&o.replace(e.defineParams,(function(e,t,a){n[r]={arg:t,text:a}})),r in n||(n[r]=o)):new Function("def","def['"+r+"']="+o)(n)),""})).replace(e.use||i,(function(t,r){e.useParams&&(r=r.replace(e.useParams,(function(e,t,r,a){if(n[r]&&n[r].arg&&a){var o=(r+":"+a).replace(/'|\\/g,"_")
return n.__exp=n.__exp||{},n.__exp[o]=n[r].text.replace(new RegExp("(^|[^\\w$])"+n[r].arg+"([^\\w$])","g"),"$1"+a+"$2"),t+"def.__exp['"+o+"']"}})))
var a=new Function("def","return "+r)(n)
return a?s(e,a,n):a}))}function l(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}e.template=function(t,n,r){var o,u,c=(n=n||e.templateSettings).append?a.append:a.split,d=0,p=n.use||n.define?s(n,t,r||{}):t
p=("var out='"+(n.strip?p.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):p).replace(/'|\\/g,"\\$&").replace(n.interpolate||i,(function(e,t){return c.start+l(t)+c.end})).replace(n.encode||i,(function(e,t){return o=!0,c.startencode+l(t)+c.end})).replace(n.conditional||i,(function(e,t,n){return t?n?"';}else if("+l(n)+"){out+='":"';}else{out+='":n?"';if("+l(n)+"){out+='":"';}out+='"})).replace(n.iterate||i,(function(e,t,n,r){return t?(d+=1,u=r||"i"+d,t=l(t),"';var arr"+d+"="+t+";if(arr"+d+"){var "+n+","+u+"=-1,l"+d+"=arr"+d+".length-1;while("+u+"<l"+d+"){"+n+"=arr"+d+"["+u+"+=1];out+='"):"';} } out+='"})).replace(n.evaluate||i,(function(e,t){return"';"+l(t)+"out+='"}))+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),o&&(n.selfcontained||!globalThis||globalThis._encodeHTML||(globalThis._encodeHTML=e.encodeHTMLSource(n.doNotSkipEncoded)),p="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+e.encodeHTMLSource.toString()+"("+(n.doNotSkipEncoded||"")+"));"+p)
try{return new Function(n.varname,p)}catch(e){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+p),e}},e.compile=function(t,n){return e.template(t,null,n)}}()})),At=L((function(e,t){var i,s
i=e,s=function(){"use strict"
function e(e){return"function"==typeof e}var t=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=0,s=void 0,l=void 0,u=function(e,t){g[i]=e,g[i+1]=t,2===(i+=2)&&(l?l(v):x())},c=void 0!==n?n:void 0,d=c||{},p=d.MutationObserver||d.WebKitMutationObserver,f="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function m(){var e=setTimeout
return function(){return e(v,1)}}var g=new Array(1e3)
function v(){for(var e=0;e<i;e+=2)(0,g[e])(g[e+1]),g[e]=void 0,g[e+1]=void 0
i=0}var b,y,w,D,x=void 0
function E(e,t){var n=this,r=new this.constructor(k)
void 0===r[C]&&M(r)
var a=n._state
if(a){var o=arguments[a-1]
u((function(){return P(a,r,o,n._result)}))}else S(n,r,e,t)
return r}function A(e){if(e&&"object"===o(e)&&e.constructor===this)return e
var t=new this(k)
return N(t,e),t}f?x=function(){return process.nextTick(v)}:p?(y=0,w=new p(v),D=a.createTextNode(""),w.observe(D,{characterData:!0}),x=function(){D.data=y=++y%2}):h?((b=new MessageChannel).port1.onmessage=v,x=function(){return b.port2.postMessage(0)}):x=void 0===c?function(){try{var e=Function("return this")().require("vertx")
return void 0!==(s=e.runOnLoop||e.runOnContext)?function(){s(v)}:m()}catch(e){return m()}}():m()
var C=Math.random().toString(36).substring(2)
function k(){}var F=void 0
function T(t,n,r){n.constructor===t.constructor&&r===E&&n.constructor.resolve===A?function(e,t){1===t._state?_(e,t._result):2===t._state?O(e,t._result):S(t,void 0,(function(t){return N(e,t)}),(function(t){return O(e,t)}))}(t,n):void 0===r?_(t,n):e(r)?function(e,t,n){u((function(e){var r=!1,a=function(n,a,o,i){try{n.call(a,(function(n){r||(r=!0,t!==n?N(e,n):_(e,n))}),(function(t){r||(r=!0,O(e,t))}))}catch(e){return e}}(n,t,0,0,e._label)
!r&&a&&(r=!0,O(e,a))}),e)}(t,n,r):_(t,n)}function N(e,t){if(e===t)O(e,new TypeError("You cannot resolve a promise with itself"))
else if(a=o(r=t),null===r||"object"!==a&&"function"!==a)_(e,t)
else{var n=void 0
try{n=t.then}catch(t){return void O(e,t)}T(e,t,n)}var r,a}function R(e){e._onerror&&e._onerror(e._result),I(e)}function _(e,t){e._state===F&&(e._result=t,e._state=1,0!==e._subscribers.length&&u(I,e))}function O(e,t){e._state===F&&(e._state=2,e._result=t,u(R,e))}function S(e,t,n,r){var a=e._subscribers,o=a.length
e._onerror=null,a[o]=t,a[o+1]=n,a[o+2]=r,0===o&&e._state&&u(I,e)}function I(e){var t=e._subscribers,n=e._state
if(0!==t.length){for(var r=void 0,a=void 0,o=e._result,i=0;i<t.length;i+=3)r=t[i],a=t[i+n],r?P(n,r,a,o):a(o)
e._subscribers.length=0}}function P(t,n,r,a){var o=e(r),i=void 0,s=void 0,l=!0
if(o){try{i=r(a)}catch(e){l=!1,s=e}if(n===i)return void O(n,new TypeError("A promises callback cannot return that same promise."))}else i=a
n._state!==F||(o&&l?N(n,i):!1===l?O(n,s):1===t?_(n,i):2===t&&O(n,i))}var j=0
function M(e){e[C]=j++,e._state=void 0,e._result=void 0,e._subscribers=[]}var q=function(){function e(e,n){this._instanceConstructor=e,this.promise=new e(k),this.promise[C]||M(this.promise),t(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?_(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&_(this.promise,this._result))):O(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;this._state===F&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve
if(r===A){var a=void 0,o=void 0,i=!1
try{a=e.then}catch(e){i=!0,o=e}if(a===E&&e._state!==F)this._settledAt(e._state,t,e._result)
else if("function"!=typeof a)this._remaining--,this._result[t]=e
else if(n===L){var s=new n(k)
i?O(s,o):T(s,e,a),this._willSettleAt(s,t)}else this._willSettleAt(new n((function(t){return t(e)})),t)}else this._willSettleAt(r(e),t)},e.prototype._settledAt=function(e,t,n){var r=this.promise
r._state===F&&(this._remaining--,2===e?O(r,n):this._result[t]=n),0===this._remaining&&_(r,this._result)},e.prototype._willSettleAt=function(e,t){var n=this
S(e,void 0,(function(e){return n._settledAt(1,t,e)}),(function(e){return n._settledAt(2,t,e)}))},e}(),L=function(){function t(e){this[C]=j++,this._result=this._state=void 0,this._subscribers=[],k!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(e,t){try{t((function(t){N(e,t)}),(function(t){O(e,t)}))}catch(t){O(e,t)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(t){var n=this,r=n.constructor
return e(t)?n.then((function(e){return r.resolve(t()).then((function(){return e}))}),(function(e){return r.resolve(t()).then((function(){throw e}))})):n.then(t,t)},t}()
return L.prototype.then=E,L.all=function(e){return new q(this,e).promise},L.race=function(e){var n=this
return t(e)?new n((function(t,r){for(var a=e.length,o=0;o<a;o++)n.resolve(e[o]).then(t,r)})):new n((function(e,t){return t(new TypeError("You must pass an array to race."))}))},L.resolve=A,L.reject=function(e){var t=new this(k)
return O(t,e),t},L._setScheduler=function(e){l=e},L._setAsap=function(e){u=e},L._asap=u,L.polyfill=function(){var e=void 0
if(void 0!==r)e=r
else if("undefined"!=typeof self)e=self
else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise
if(t){var n=null
try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=L},L.Promise=L,L},"object"===o(e)&&void 0!==t?t.exports=s():"function"==typeof define&&define.amd?define(s):i.ES6Promise=s()})),Ct=L((function(e){var t,n,r,a=void 0,i=(t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,{Class:function(e){return t.call(e).replace(/^\[object *|\]$/g,"")},HasProperty:function(e,t){return t in e},HasOwnProperty:function(e,t){return n.call(e,t)},IsCallable:function(e){return"function"==typeof e},ToInt32:function(e){return e>>0},ToUint32:function(e){return e>>>0}}),s=Math.LN2,l=Math.abs,u=Math.floor,c=Math.log,d=Math.min,p=Math.pow,f=Math.round
function h(e){if(m&&r){var t,n=m(e)
for(t=0;t<n.length;t+=1)r(e,n[t],{value:e[n[t]],writable:!1,enumerable:!1,configurable:!1})}}r=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}()?Object.defineProperty:function(e,t,n){if(!e===Object(e))throw new TypeError("Object.defineProperty called on non-object")
return i.HasProperty(n,"get")&&Object.prototype.__defineGetter__&&Object.prototype.__defineGetter__.call(e,t,n.get),i.HasProperty(n,"set")&&Object.prototype.__defineSetter__&&Object.prototype.__defineSetter__.call(e,t,n.set),i.HasProperty(n,"value")&&(e[t]=n.value),e}
var m=Object.getOwnPropertyNames||function(e){if(e!==Object(e))throw new TypeError("Object.getOwnPropertyNames called on non-object")
var t,n=[]
for(t in e)i.HasOwnProperty(e,t)&&n.push(t)
return n}
function g(e){if(r){if(e.length>1e5)throw new RangeError("Array too large for polyfill")
var t
for(t=0;t<e.length;t+=1)n(t)}function n(t){r(e,t,{get:function(){return e._getter(t)},set:function(n){e._setter(t,n)},enumerable:!0,configurable:!1})}}function v(e,t){var n=32-t
return e<<n>>n}function b(e,t){var n=32-t
return e<<n>>>n}function y(e){return[255&e]}function w(e){return v(e[0],8)}function D(e){return[255&e]}function x(e){return b(e[0],8)}function E(e){return[(e=f(Number(e)))<0?0:e>255?255:255&e]}function A(e){return[e>>8&255,255&e]}function C(e){return v(e[0]<<8|e[1],16)}function k(e){return[e>>8&255,255&e]}function F(e){return b(e[0]<<8|e[1],16)}function T(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}function N(e){return v(e[0]<<24|e[1]<<16|e[2]<<8|e[3],32)}function R(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}function _(e){return b(e[0]<<24|e[1]<<16|e[2]<<8|e[3],32)}function O(e,t,n){var r,a,o,i,f,h,m,g=(1<<t-1)-1
function v(e){var t=u(e),n=e-t
return n<.5?t:n>.5||t%2?t+1:t}for(e!=e?(a=(1<<t)-1,o=p(2,n-1),r=0):e===1/0||e===-1/0?(a=(1<<t)-1,o=0,r=e<0?1:0):0===e?(a=0,o=0,r=1/e==-1/0?1:0):(r=e<0,(e=l(e))>=p(2,1-g)?(a=d(u(c(e)/s),1023),(o=v(e/p(2,a)*p(2,n)))/p(2,n)>=2&&(a+=1,o=1),a>g?(a=(1<<t)-1,o=0):(a+=g,o-=p(2,n))):(a=0,o=v(e/p(2,1-g-n)))),f=[],i=n;i;i-=1)f.push(o%2?1:0),o=u(o/2)
for(i=t;i;i-=1)f.push(a%2?1:0),a=u(a/2)
for(f.push(r?1:0),f.reverse(),h=f.join(""),m=[];h.length;)m.push(parseInt(h.substring(0,8),2)),h=h.substring(8)
return m}function S(e,t,n){var r,a,o,i,s,l,u,c,d=[]
for(r=e.length;r;r-=1)for(o=e[r-1],a=8;a;a-=1)d.push(o%2?1:0),o>>=1
return d.reverse(),i=d.join(""),s=(1<<t-1)-1,l=parseInt(i.substring(0,1),2)?-1:1,u=parseInt(i.substring(1,1+t),2),c=parseInt(i.substring(1+t),2),u===(1<<t)-1?0!==c?NaN:l*(1/0):u>0?l*p(2,u-s)*(1+c/p(2,n)):0!==c?l*p(2,-(s-1))*(c/p(2,n)):l<0?-0:0}function I(e){return S(e,11,52)}function P(e){return O(e,11,52)}function j(e){return S(e,8,23)}function M(e){return O(e,8,23)}!function(){var t=function(e){if((e=i.ToInt32(e))<0)throw new RangeError("ArrayBuffer size is not a small enough positive integer")
var t
for(this.byteLength=e,this._bytes=[],this._bytes.length=e,t=0;t<this.byteLength;t+=1)this._bytes[t]=0
h(this)}
e.ArrayBuffer=e.ArrayBuffer||t
var n=function(){}
function r(e,r,s){var l
return(l=function(e,n,r){var a,s,u,c
if(arguments.length&&"number"!=typeof arguments[0])if("object"===o(arguments[0])&&arguments[0].constructor===l)for(a=arguments[0],this.length=a.length,this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0,u=0;u<this.length;u+=1)this._setter(u,a._getter(u))
else if("object"!==o(arguments[0])||arguments[0]instanceof t||"ArrayBuffer"===i.Class(arguments[0])){if("object"!==o(arguments[0])||!(arguments[0]instanceof t||"ArrayBuffer"===i.Class(arguments[0])))throw new TypeError("Unexpected argument type(s)")
if(this.buffer=e,this.byteOffset=i.ToUint32(n),this.byteOffset>this.buffer.byteLength)throw new RangeError("byteOffset out of range")
if(this.byteOffset%this.BYTES_PER_ELEMENT)throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.")
if(arguments.length<3){if(this.byteLength=this.buffer.byteLength-this.byteOffset,this.byteLength%this.BYTES_PER_ELEMENT)throw new RangeError("length of buffer minus byteOffset not a multiple of the element size")
this.length=this.byteLength/this.BYTES_PER_ELEMENT}else this.length=i.ToUint32(r),this.byteLength=this.length*this.BYTES_PER_ELEMENT
if(this.byteOffset+this.byteLength>this.buffer.byteLength)throw new RangeError("byteOffset and length reference an area beyond the end of the buffer")}else for(s=arguments[0],this.length=i.ToUint32(s.length),this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0,u=0;u<this.length;u+=1)c=s[u],this._setter(u,Number(c))
else{if(this.length=i.ToInt32(arguments[0]),r<0)throw new RangeError("ArrayBufferView size is not a small enough positive integer")
this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0}this.constructor=l,h(this),g(this)}).prototype=new n,l.prototype.BYTES_PER_ELEMENT=e,l.prototype._pack=r,l.prototype._unpack=s,l.BYTES_PER_ELEMENT=e,l.prototype._getter=function(e){if(arguments.length<1)throw new SyntaxError("Not enough arguments")
if((e=i.ToUint32(e))>=this.length)return a
var t,n,r=[]
for(t=0,n=this.byteOffset+e*this.BYTES_PER_ELEMENT;t<this.BYTES_PER_ELEMENT;t+=1,n+=1)r.push(this.buffer._bytes[n])
return this._unpack(r)},l.prototype.get=l.prototype._getter,l.prototype._setter=function(e,t){if(arguments.length<2)throw new SyntaxError("Not enough arguments")
if((e=i.ToUint32(e))>=this.length)return a
var n,r,o=this._pack(t)
for(n=0,r=this.byteOffset+e*this.BYTES_PER_ELEMENT;n<this.BYTES_PER_ELEMENT;n+=1,r+=1)this.buffer._bytes[r]=o[n]},l.prototype.set=function(e,t){if(arguments.length<1)throw new SyntaxError("Not enough arguments")
var n,r,a,s,l,u,c,d,p,f
if("object"===o(arguments[0])&&arguments[0].constructor===this.constructor){if(n=arguments[0],(a=i.ToUint32(arguments[1]))+n.length>this.length)throw new RangeError("Offset plus length of array is out of range")
if(d=this.byteOffset+a*this.BYTES_PER_ELEMENT,p=n.length*this.BYTES_PER_ELEMENT,n.buffer===this.buffer){for(f=[],l=0,u=n.byteOffset;l<p;l+=1,u+=1)f[l]=n.buffer._bytes[u]
for(l=0,c=d;l<p;l+=1,c+=1)this.buffer._bytes[c]=f[l]}else for(l=0,u=n.byteOffset,c=d;l<p;l+=1,u+=1,c+=1)this.buffer._bytes[c]=n.buffer._bytes[u]}else{if("object"!==o(arguments[0])||void 0===arguments[0].length)throw new TypeError("Unexpected argument type(s)")
if(r=arguments[0],s=i.ToUint32(r.length),(a=i.ToUint32(arguments[1]))+s>this.length)throw new RangeError("Offset plus length of array is out of range")
for(l=0;l<s;l+=1)u=r[l],this._setter(a+l,Number(u))}},l.prototype.subarray=function(e,t){function n(e,t,n){return e<t?t:e>n?n:e}e=i.ToInt32(e),t=i.ToInt32(t),arguments.length<1&&(e=0),arguments.length<2&&(t=this.length),e<0&&(e=this.length+e),t<0&&(t=this.length+t),e=n(e,0,this.length)
var r=(t=n(t,0,this.length))-e
return r<0&&(r=0),new this.constructor(this.buffer,this.byteOffset+e*this.BYTES_PER_ELEMENT,r)},l}var s=r(1,y,w),l=r(1,D,x),u=r(1,E,x),c=r(2,A,C),d=r(2,k,F),p=r(4,T,N),f=r(4,R,_),m=r(4,M,j),v=r(8,P,I)
e.Int8Array=e.Int8Array||s,e.Uint8Array=e.Uint8Array||l,e.Uint8ClampedArray=e.Uint8ClampedArray||u,e.Int16Array=e.Int16Array||c,e.Uint16Array=e.Uint16Array||d,e.Int32Array=e.Int32Array||p,e.Uint32Array=e.Uint32Array||f,e.Float32Array=e.Float32Array||m,e.Float64Array=e.Float64Array||v}(),function(){function t(e,t){return i.IsCallable(e.get)?e.get(t):e[t]}var n,r=(n=new e.Uint16Array([4660]),18===t(new e.Uint8Array(n.buffer),0)),a=function(t,n,r){if(0===arguments.length)t=new e.ArrayBuffer(0)
else if(!(t instanceof e.ArrayBuffer||"ArrayBuffer"===i.Class(t)))throw new TypeError("TypeError")
if(this.buffer=t||new e.ArrayBuffer(0),this.byteOffset=i.ToUint32(n),this.byteOffset>this.buffer.byteLength)throw new RangeError("byteOffset out of range")
if(this.byteLength=arguments.length<3?this.buffer.byteLength-this.byteOffset:i.ToUint32(r),this.byteOffset+this.byteLength>this.buffer.byteLength)throw new RangeError("byteOffset and length reference an area beyond the end of the buffer")
h(this)}
function o(n){return function(a,o){if((a=i.ToUint32(a))+n.BYTES_PER_ELEMENT>this.byteLength)throw new RangeError("Array index out of range")
a+=this.byteOffset
var s,l=new e.Uint8Array(this.buffer,a,n.BYTES_PER_ELEMENT),u=[]
for(s=0;s<n.BYTES_PER_ELEMENT;s+=1)u.push(t(l,s))
return Boolean(o)===Boolean(r)&&u.reverse(),t(new n(new e.Uint8Array(u).buffer),0)}}function s(n){return function(a,o,s){if((a=i.ToUint32(a))+n.BYTES_PER_ELEMENT>this.byteLength)throw new RangeError("Array index out of range")
var l,u=new n([o]),c=new e.Uint8Array(u.buffer),d=[]
for(l=0;l<n.BYTES_PER_ELEMENT;l+=1)d.push(t(c,l))
Boolean(s)===Boolean(r)&&d.reverse(),new e.Uint8Array(this.buffer,a,n.BYTES_PER_ELEMENT).set(d)}}a.prototype.getUint8=o(e.Uint8Array),a.prototype.getInt8=o(e.Int8Array),a.prototype.getUint16=o(e.Uint16Array),a.prototype.getInt16=o(e.Int16Array),a.prototype.getUint32=o(e.Uint32Array),a.prototype.getInt32=o(e.Int32Array),a.prototype.getFloat32=o(e.Float32Array),a.prototype.getFloat64=o(e.Float64Array),a.prototype.setUint8=s(e.Uint8Array),a.prototype.setInt8=s(e.Int8Array),a.prototype.setUint16=s(e.Uint16Array),a.prototype.setInt16=s(e.Int16Array),a.prototype.setUint32=s(e.Uint32Array),a.prototype.setInt32=s(e.Int32Array),a.prototype.setFloat32=s(e.Float32Array),a.prototype.setFloat64=s(e.Float64Array),e.DataView=e.DataView||a}()})),kt=L((function(e){!function(e){"use strict"
if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),r=function(e,t,r){n?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:r}):e[t]=r}
e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'")
if(r(this,"_id",i("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function n(e,n){if(!a(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+o(e))}function i(e){return e+"_"+s()+"."+s()}function s(){return Math.random().toString().substring(2)}return r(e.prototype,"delete",(function(e){if(n(this,"delete"),!a(e))return!1
var t=e[this._id]
return!(!t||t[0]!==e||(delete e[this._id],0))})),r(e.prototype,"get",(function(e){if(n(this,"get"),a(e)){var t=e[this._id]
return t&&t[0]===e?t[1]:void 0}})),r(e.prototype,"has",(function(e){if(n(this,"has"),!a(e))return!1
var t=e[this._id]
return!(!t||t[0]!==e)})),r(e.prototype,"set",(function(e,t){if(n(this,"set"),!a(e))throw new TypeError("Invalid value used as weak map key")
var o=e[this._id]
return o&&o[0]===e?(o[1]=t,this):(r(e,this._id,[e,t]),this)})),r(e,"_polyfill",!0),e}()}function a(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:void 0!==n?n:void 0!==r?r:e)})),Ft={helpUrlBase:"https://dequeuniversity.com/rules/",results:[],resultGroups:[],resultGroupMap:{},impact:Object.freeze(["minor","moderate","serious","critical"]),preload:Object.freeze({assets:["cssom","media"],timeout:1e4}),allOrigins:"<unsafe_all_origins>",sameOrigin:"<same_origin>"};[{name:"NA",value:"inapplicable",priority:0,group:"inapplicable"},{name:"PASS",value:"passed",priority:1,group:"passes"},{name:"CANTTELL",value:"cantTell",priority:2,group:"incomplete"},{name:"FAIL",value:"failed",priority:3,group:"violations"}].forEach((function(e){var t=e.name,n=e.value,r=e.priority,a=e.group
Ft[t]=n,Ft[t+"_PRIO"]=r,Ft[t+"_GROUP"]=a,Ft.results[r]=n,Ft.resultGroups[r]=a,Ft.resultGroupMap[n]=a})),Object.freeze(Ft.results),Object.freeze(Ft.resultGroups),Object.freeze(Ft.resultGroupMap),Object.freeze(Ft)
var Tt=Ft,Nt=function(){"object"===("undefined"==typeof console?"undefined":o(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},Rt=/[\t\r\n\f]/g,_t=function(){function e(){I(this,e),this.parent=void 0}return j(e,[{key:"props",get:function(){throw new Error('VirtualNode class must have a "props" object consisting of "nodeType" and "nodeName" properties')}},{key:"attrNames",get:function(){throw new Error('VirtualNode class must have an "attrNames" property')}},{key:"attr",value:function(){throw new Error('VirtualNode class must have an "attr" function')}},{key:"hasAttr",value:function(){throw new Error('VirtualNode class must have a "hasAttr" function')}},{key:"hasClass",value:function(e){var t=this.attr("class")
if(!t)return!1
var n=" "+e+" "
return(" "+t+" ").replace(Rt," ").indexOf(n)>=0}}]),e}(),Ot={}
B(Ot,{DqElement:function(){return rr},aggregate:function(){return pn},aggregateChecks:function(){return bn},aggregateNodeResults:function(){return wn},aggregateResult:function(){return xn},areStylesSet:function(){return En},assert:function(){return Pt},checkHelper:function(){return ar},clone:function(){return or},closest:function(){return wr},collectResultsFromFrames:function(){return Pr},contains:function(){return jr},convertSelector:function(){return gr},cssParser:function(){return sr},deepMerge:function(){return Mr},escapeSelector:function(){return Cn},extendMetaData:function(){return qr},filterHtmlAttrs:function(){return yi},finalizeRuleResult:function(){return yn},findBy:function(){return Or},getAllChecks:function(){return _r},getAncestry:function(){return Qn},getBaseLang:function(){return co},getCheckMessage:function(){return yo},getCheckOption:function(){return wo},getEnvironmentData:function(){return Do},getFlattenedTree:function(){return uo},getFrameContexts:function(){return No},getFriendlyUriEnd:function(){return On},getNodeAttributes:function(){return Sn},getNodeFromTree:function(){return er},getPreloadConfig:function(){return pi},getRootNode:function(){return Hr},getRule:function(){return Ro},getScroll:function(){return _o},getScrollState:function(){return So},getSelector:function(){return Gn},getSelectorData:function(){return Un},getShadowSelector:function(){return jn},getStandards:function(){return Io},getStyleSheetFactory:function(){return jo},getXpath:function(){return Jn},injectStyle:function(){return Mo},isHidden:function(){return qo},isHtmlElement:function(){return Lo},isNodeInContext:function(){return Uo},isShadowRoot:function(){return Br},isValidLang:function(){return Ni},isXHTML:function(){return Pn},matchAncestry:function(){return Ho},matches:function(){return yr},matchesExpression:function(){return br},matchesSelector:function(){return In},memoize:function(){return zo},mergeResults:function(){return Ir},nodeSorter:function(){return $o},parseCrossOriginStylesheet:function(){return Zo},parseSameOriginStylesheet:function(){return Wo},parseStylesheet:function(){return Xo},performanceTimer:function(){return ei},pollyfillElementsFromPoint:function(){return ti},preload:function(){return fi},preloadCssom:function(){return ii},preloadMedia:function(){return ci},processMessage:function(){return bo},publishMetaData:function(){return mi},querySelectorAll:function(){return gi},querySelectorAllFilter:function(){return oi},queue:function(){return Cr},respondable:function(){return Fr},ruleShouldRun:function(){return bi},select:function(){return Di},sendCommandToFrame:function(){return Rr},setScrollState:function(){return xi},shadowSelect:function(){return Ei},shouldPreload:function(){return di},toArray:function(){return An},tokenList:function(){return Ci},uniqueArray:function(){return ni},uuid:function(){return an},validInputTypes:function(){return ki},validLangs:function(){return Ti}})
var St=Object.freeze(["EvalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
function It(){var e="axeAPI",t=""
return void 0!==i&&i._audit&&i._audit.application&&(e=i._audit.application),void 0!==i&&(t=i.version),e+"."+t}var Pt=function(e,t){if(!e)throw new Error(t)}
function jt(e){qt(e),Pt(n.parent===e,"Source of the response must be the parent window.")}function Mt(e){qt(e),Pt(e.parent===n,"Respondable target must be a frame in the current window")}function qt(e){Pt(n!==e,"Messages can not be sent to the same window.")}var Lt,Bt,Ut={},Ht=n.crypto||n.msCrypto
if(!Bt&&Ht&&Ht.getRandomValues){var Vt=new Uint8Array(16)
Bt=function(){return Ht.getRandomValues(Vt),Vt}}try{if(!Bt){var zt=require("crypto")
Bt=function(){return zt.randomBytes(16)}}}catch(e){}if(!Bt){var $t=new Array(16)
Bt=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),$t[t]=e>>>((3&t)<<3)&255
return $t}}for(var Wt="function"==typeof n.Buffer?n.Buffer:Array,Gt=[],Yt={},Qt=0;Qt<256;Qt++)Gt[Qt]=(Qt+256).toString(16).substr(1),Yt[Gt[Qt]]=Qt
function Kt(e,t){var n=t||0,r=Gt
return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}var Jt=Bt(),Xt=[1|Jt[0],Jt[1],Jt[2],Jt[3],Jt[4],Jt[5]],Zt=16383&(Jt[6]<<8|Jt[7]),en=0,tn=0
function nn(e,t,n){var r=t&&n||0,a=t||[],o=null!=(e=e||{}).clockseq?e.clockseq:Zt,i=null!=e.msecs?e.msecs:(new Date).getTime(),s=null!=e.nsecs?e.nsecs:tn+1,l=i-en+(s-tn)/1e4
if(l<0&&null==e.clockseq&&(o=o+1&16383),(l<0||i>en)&&null==e.nsecs&&(s=0),s>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
en=i,tn=s,Zt=o
var u=(1e4*(268435455&(i+=122192928e5))+s)%4294967296
a[r++]=u>>>24&255,a[r++]=u>>>16&255,a[r++]=u>>>8&255,a[r++]=255&u
var c=i/4294967296*1e4&268435455
a[r++]=c>>>8&255,a[r++]=255&c,a[r++]=c>>>24&15|16,a[r++]=c>>>16&255,a[r++]=o>>>8|128,a[r++]=255&o
for(var d=e.node||Xt,p=0;p<6;p++)a[r+p]=d[p]
return t||Kt(a)}function rn(e,t,n){var r=t&&n||0
"string"==typeof e&&(t="binary"==e?new Wt(16):null,e=null)
var a=(e=e||{}).random||(e.rng||Bt)()
if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var o=0;o<16;o++)t[r+o]=a[o]
return t||Kt(a)}(Lt=rn).v1=nn,Lt.v4=rn,Lt.parse=function(e,t,n){var r=t&&n||0,a=0
for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,(function(e){a<16&&(t[r+a++]=Yt[e])}));a<16;)t[r+a++]=0
return t},Lt.unparse=Kt,Lt.BufferClass=Wt,i._uuid=nn()
var an=rn,on=[]
function sn(){var e="".concat(rn(),":").concat(rn())
return on.includes(e)?sn():(on.push(e),e)}function ln(e,t,n,r){if("function"==typeof r&&function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
Pt(!Ut[e],"A replyHandler already exists for this message channel."),Ut[e]={replyHandler:t,sendToParent:n}}(t.channelId,r,n),n?jt(e):Mt(e),t.message instanceof Error&&!n)return i.log(t.message),!1
var a=function(e){var t=e.topic,n=e.channelId,r=e.message,a={channelId:n,topic:t,messageId:e.messageId,keepalive:!!e.keepalive,source:It()}
return r instanceof Error?a.error={name:r.name,message:r.message,stack:r.stack}:a.payload=r,JSON.stringify(a)}(S({messageId:sn()},t)),o=i._audit.allowedOrigins
return!(!o||!o.length||(o.forEach((function(t){try{e.postMessage(a,t)}catch(n){if(n instanceof e.DOMException)throw new Error('allowedOrigins value "'.concat(t,'" is not a valid origin'))
throw n}})),0))}function un(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
return function(r,a,o){ln(e,{channelId:t,message:r,keepalive:a},n,o)}}var cn={open:function(e){if("function"==typeof n.addEventListener){var t=function(t){(function(e,t){var r=e.origin,a=e.data,s=e.source,l=function(e){var t,r,a,i,s
try{t=JSON.parse(e)}catch(e){return}if("object"===o(l=t)&&"string"==typeof l.channelId&&l.source===It()){var l,u=t,c=u.topic,d=u.channelId,p=u.messageId,f=u.keepalive
return{topic:c,message:"object"===o(t.error)?(r=t.error,a=r.message||"Unknown error occurred",i=St.includes(r.name)?r.name:"Error",s=n[i]||Error,r.stack&&(a+="\n"+r.stack.replace(r.message,"")),new s(a)):t.payload,messageId:p,channelId:d,keepalive:!!f}}}(a)||{},u=l.channelId,c=l.message,d=l.messageId
if(function(e){var t=i._audit.allowedOrigins
return t&&t.includes("*")||t.includes(e)}(r)&&(p=d,!on.includes(p)&&(on.push(p),1))){var p
if(c instanceof Error&&s.parent!==n)return i.log(c),!1
try{if(l.topic){var f=un(s,u)
jt(s),t(l,f)}else!function(e,t){var n=t.channelId,r=t.message,a=t.keepalive,o=function(e){return Ut[e]}(n)||{},s=o.replyHandler,l=o.sendToParent
if(s){l?jt(e):Mt(e)
var u=un(e,n,l)
!a&&n&&function(e){delete Ut[e]}(n)
try{s(r,a,u)}catch(e){i.log(e),u(e,a)}}}(s,l)}catch(e){!function(e,t,r){if(!e.parent!==n)return i.log(t)
try{ln(e,{topic:null,channelId:r,message:t,messageId:sn(),keepalive:!0},!0)}catch(e){return i.log(e)}}(s,e,u)}}})(t,e)}
return n.addEventListener("message",t,!1),function(){n.removeEventListener("message",t,!1)}}},post:function(e,t,r){return"function"==typeof n.addEventListener&&ln(e,t,!1,r)}}
function dn(e){e.updateMessenger(cn)}var pn=function(e,t,n){t=t.slice(),n&&t.push(n)
var r=t.map((function(t){return e.indexOf(t)})).sort()
return e[r.pop()]},fn=Tt.CANTTELL_PRIO,hn=Tt.FAIL_PRIO,mn=[]
mn[Tt.PASS_PRIO]=!0,mn[Tt.CANTTELL_PRIO]=null,mn[Tt.FAIL_PRIO]=!1
var gn=["any","all","none"]
function vn(e,t){return gn.reduce((function(n,r){return n[r]=(e[r]||[]).map((function(e){return t(e,r)})),n}),{})}var bn=function(e){var t=Object.assign({},e)
vn(t,(function(e,t){var n=void 0===e.result?-1:mn.indexOf(e.result)
e.priority=-1!==n?n:Tt.CANTTELL_PRIO,"none"===t&&(e.priority===Tt.PASS_PRIO?e.priority=Tt.FAIL_PRIO:e.priority===Tt.FAIL_PRIO&&(e.priority=Tt.PASS_PRIO))}))
var n={all:t.all.reduce((function(e,t){return Math.max(e,t.priority)}),0),none:t.none.reduce((function(e,t){return Math.max(e,t.priority)}),0),any:t.any.reduce((function(e,t){return Math.min(e,t.priority)}),4)%4}
t.priority=Math.max(n.all,n.none,n.any)
var r=[]
return gn.forEach((function(e){t[e]=t[e].filter((function(r){return r.priority===t.priority&&r.priority===n[e]})),t[e].forEach((function(e){return r.push(e.impact)}))})),[fn,hn].includes(t.priority)?t.impact=pn(Tt.impact,r):t.impact=null,vn(t,(function(e){delete e.result,delete e.priority})),t.result=Tt.results[t.priority],delete t.priority,t},yn=function(e){var t=i._audit.rules.find((function(t){return t.id===e.id}))
return t&&t.impact&&e.nodes.forEach((function(e){["any","all","none"].forEach((function(n){(e[n]||[]).forEach((function(e){e.impact=t.impact}))}))})),Object.assign(e,wn(e.nodes)),delete e.nodes,e},wn=function(e){var t={}
if((e=e.map((function(e){if(e.any&&e.all&&e.none)return bn(e)
if(Array.isArray(e.node))return yn(e)
throw new TypeError("Invalid Result type")})))&&e.length){var n=e.map((function(e){return e.result}))
t.result=pn(Tt.results,n,t.result)}else t.result="inapplicable"
Tt.resultGroups.forEach((function(e){return t[e]=[]})),e.forEach((function(e){var n=Tt.resultGroupMap[e.result]
t[n].push(e)}))
var r=Tt.FAIL_GROUP
if(0===t[r].length&&(r=Tt.CANTTELL_GROUP),t[r].length>0){var a=t[r].map((function(e){return e.impact}))
t.impact=pn(Tt.impact,a)||null}else t.impact=null
return t}
function Dn(e,t,n){var r=Object.assign({},t)
r.nodes=(r[n]||[]).concat(),Tt.resultGroups.forEach((function(e){delete r[e]})),e[n].push(r)}var xn=function(e){var t={}
return Tt.resultGroups.forEach((function(e){return t[e]=[]})),e.forEach((function(e){e.error?Dn(t,e,Tt.CANTTELL_GROUP):e.result===Tt.NA?Dn(t,e,Tt.NA_GROUP):Tt.resultGroups.forEach((function(n){Array.isArray(e[n])&&e[n].length>0&&Dn(t,e,n)}))})),t},En=function e(t,r,a){var o=n.getComputedStyle(t,null)
if(!o)return!1
for(var i=0;i<r.length;++i){var s=r[i]
if(o.getPropertyValue(s.property)===s.value)return!0}return!(!t.parentNode||t.nodeName.toUpperCase()===a.toUpperCase())&&e(t.parentNode,r,a)},An=function(e){return Array.prototype.slice.call(e)},Cn=function(e){for(var t,n=String(e),r=n.length,a=-1,o="",i=n.charCodeAt(0);++a<r;)0!=(t=n.charCodeAt(a))?o+=t>=1&&t<=31||127==t||0==a&&t>=48&&t<=57||1==a&&t>=48&&t<=57&&45==i?"\\"+t.toString(16)+" ":0==a&&1==r&&45==t||!(t>=128||45==t||95==t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122)?"\\"+n.charAt(a):n.charAt(a):o+="�"
return o}
function kn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return 0!==e.length&&(e.match(/[0-9]/g)||"").length>=e.length/2}function Fn(e,t){return[e.substring(0,t),e.substring(t)]}function Tn(e){return e.replace(/\s+$/,"")}function Nn(e){var t=e,n="",r="",a="",o="",i=""
if(e.includes("#")){var s=O(Fn(e,e.indexOf("#")),2)
e=s[0],i=s[1]}if(e.includes("?")){var l=O(Fn(e,e.indexOf("?")),2)
e=l[0],o=l[1]}if(e.includes("://")){var u=O(e.split("://"),2)
n=u[0]
var c=O(Fn(e=u[1],e.indexOf("/")),2)
r=c[0],e=c[1]}else if("//"===e.substr(0,2)){var d=O(Fn(e=e.substr(2),e.indexOf("/")),2)
r=d[0],e=d[1]}if("www."===r.substr(0,4)&&(r=r.substr(4)),r&&r.includes(":")){var p=O(Fn(r,r.indexOf(":")),2)
r=p[0],a=p[1]}return{original:t,protocol:n,domain:r,port:a,path:e,query:o,hash:i}}var Rn,_n,On=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!(e.length<=1||"data:"===e.substr(0,5)||"javascript:"===e.substr(0,11)||e.includes("?"))){var n=t.currentDomain,r=t.maxLength,a=void 0===r?25:r,o=Nn(e),i=o.path,s=o.domain,l=o.hash,u=i.substr(i.substr(0,i.length-2).lastIndexOf("/")+1)
if(l)return u&&(u+l).length<=a?Tn(u+l):u.length<2&&l.length>2&&l.length<=a?Tn(l):void 0
if(s&&s.length<a&&i.length<=1)return Tn(s+i)
if(i==="/"+u&&s&&n&&s!==n&&(s+i).length<=a)return Tn(s+i)
var c=u.lastIndexOf(".")
return(-1===c||c>1)&&(-1!==c||u.length>2)&&u.length<=a&&!u.match(/index(\.[a-zA-Z]{2-4})?/)&&!kn(u)?Tn(u):void 0}},Sn=function(e){return e.attributes instanceof n.NamedNodeMap?e.attributes:e.cloneNode(!1).attributes},In=function(e,t){return Rn&&e[Rn]||(Rn=function(e){var t,n,r=["matches","matchesSelector","mozMatchesSelector","webkitMatchesSelector","msMatchesSelector"],a=r.length
for(t=0;t<a;t++)if(e[n=r[t]])return n}(e)),!!e[Rn]&&e[Rn](t)},Pn=function(e){return!!e.createElement&&"A"===e.createElement("A").localName},jn=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(!t)return""
var r=t.getRootNode&&t.getRootNode()||a
if(11!==r.nodeType)return e(t,n,r)
for(var o=[];11===r.nodeType;){if(!r.host)return""
o.unshift({elm:t,doc:r}),r=(t=r.host).getRootNode()}return o.unshift({elm:t,doc:r}),o.map((function(t){var r=t.elm,a=t.doc
return e(r,n,a)}))},Mn=["class","style","id","selected","checked","disabled","tabindex","aria-checked","aria-selected","aria-invalid","aria-activedescendant","aria-busy","aria-disabled","aria-expanded","aria-grabbed","aria-pressed","aria-valuenow"]
function qn(e,t){var n,r=t.name
if(-1!==r.indexOf("href")||-1!==r.indexOf("src")){var a=On(e.getAttribute(r))
if(a){var o=encodeURI(a)
if(!o)return
n=Cn(t.name)+'$="'+Cn(o)+'"'}else n=Cn(t.name)+'="'+Cn(e.getAttribute(r))+'"'}else n=Cn(r)+'="'+Cn(t.value)+'"'
return n}function Ln(e,t){return e.count<t.count?-1:e.count===t.count?0:1}function Bn(e){return!Mn.includes(e.name)&&-1===e.name.indexOf(":")&&(!e.value||e.value.length<31)}function Un(e){for(var t={classes:{},tags:{},attributes:{}},n=(e=Array.isArray(e)?e:[e]).slice(),r=[],a=function(){var e=n.pop(),a=e.actualNode
if(a.querySelectorAll){var o=a.nodeName
t.tags[o]?t.tags[o]++:t.tags[o]=1,a.classList&&Array.from(a.classList).forEach((function(e){var n=Cn(e)
t.classes[n]?t.classes[n]++:t.classes[n]=1})),a.hasAttributes()&&Array.from(Sn(a)).filter(Bn).forEach((function(e){var n=qn(a,e)
n&&(t.attributes[n]?t.attributes[n]++:t.attributes[n]=1)}))}for(e.children.length&&(r.push(n),n=e.children.slice());!n.length&&r.length;)n=r.pop()};n.length;)a()
return t}function Hn(e,t){var n=e.parentNode&&Array.from(e.parentNode.children||"")||[]
return n.find((function(n){return n!==e&&In(n,t)}))?":nth-child("+(1+n.indexOf(e))+")":""}function Vn(e){if(e.getAttribute("id")){var t=e.getRootNode&&e.getRootNode()||a,n="#"+Cn(e.getAttribute("id")||"")
return n.match(/player_uid_/)||1!==t.querySelectorAll(n).length?void 0:n}}function zn(e){return void 0===_n&&(_n=Pn(a)),Cn(_n?e.localName:e.nodeName.toLowerCase())}function $n(e,t){var n,r="",a=function(e,t){var n=[],r=t.classes,a=t.tags
return e.classList&&Array.from(e.classList).forEach((function(t){var o=Cn(t)
r[o]<a[e.nodeName]&&n.push({name:o,count:r[o],species:"class"})})),n.sort(Ln)}(e,t),o=function(e,t){var n=[],r=t.attributes,a=t.tags
return e.hasAttributes()&&Array.from(Sn(e)).filter(Bn).forEach((function(t){var o=qn(e,t)
o&&r[o]<a[e.nodeName]&&n.push({name:o,count:r[o],species:"attribute"})})),n.sort(Ln)}(e,t)
return a.length&&1===a[0].count?n=[a[0]]:o.length&&1===o[0].count?(n=[o[0]],r=zn(e)):((n=a.concat(o)).sort(Ln),(n=n.slice(0,3)).some((function(e){return"class"===e.species}))?n.sort((function(e,t){return e.species!==t.species&&"class"===e.species?-1:e.species===t.species?0:1})):r=zn(e)),r+n.reduce((function(e,t){switch(t.species){case"class":return e+"."+t.name
case"attribute":return e+"["+t.name+"]"}return e}),"")}function Wn(e,t,n){if(!i._selectorData)throw new Error("Expect axe._selectorData to be set up")
var r,a,o=t.toRoot,s=void 0!==o&&o
do{var l=Vn(e)
l||(l=$n(e,i._selectorData),l+=Hn(e,l)),r=r?l+" > "+r:l,a=a?a.filter((function(e){return In(e,r)})):Array.from(n.querySelectorAll(r)),e=e.parentElement}while((a.length>1||s)&&e&&11!==e.nodeType)
return 1===a.length?r:-1!==r.indexOf(" > ")?":root"+r.substring(r.indexOf(" > ")):":root"}function Gn(e,t){return jn(Wn,e,t)}function Yn(e){var t=e.nodeName.toLowerCase(),n=e.parentElement
if(!n)return t
var r=""
if("head"!==t&&"body"!==t&&n.children.length>1){var a=Array.prototype.indexOf.call(n.children,e)+1
r=":nth-child(".concat(a,")")}return Yn(n)+" > "+t+r}function Qn(e,t){return jn(Yn,e,t)}function Kn(e,t){var n,r
if(!e)return[]
if(!t&&9===e.nodeType)return[{str:"html"}]
if(t=t||[],e.parentNode&&e.parentNode!==e&&(t=Kn(e.parentNode,t)),e.previousSibling){r=1,n=e.previousSibling
do{1===n.nodeType&&n.nodeName===e.nodeName&&r++,n=n.previousSibling}while(n)
1===r&&(r=null)}else if(e.nextSibling){n=e.nextSibling
do{1===n.nodeType&&n.nodeName===e.nodeName?(r=1,n=null):(r=null,n=n.previousSibling)}while(n)}if(1===e.nodeType){var a={}
a.str=e.nodeName.toLowerCase()
var o=e.getAttribute&&Cn(e.getAttribute("id"))
o&&1===e.ownerDocument.querySelectorAll("#"+o).length&&(a.id=e.getAttribute("id")),r>1&&(a.count=r),t.push(a)}return t}var Jn=function(e){return Kn(e).reduce((function(e,t){return t.id?"/".concat(t.str,"[@id='").concat(t.id,"']"):e+"/".concat(t.str)+(t.count>0?"[".concat(t.count,"]"):"")}),"")},Xn={},Zn={set:function(e,t){Xn[e]=t},get:function(e){return Xn[e]},clear:function(){Xn={}}},er=function(e,t){var n=t||e
return Zn.get("nodeMap")?Zn.get("nodeMap").get(n):null}
function tr(e){if(null==e||!e.outerHTML)return""
var t=e.outerHTML
return t||"function"!=typeof XMLSerializer||(t=(new XMLSerializer).serializeToString(e)),function(e,t){if(t=t||300,e.length>t){var n=e.indexOf(">")
e=e.substring(0,n+1)}return e}(t||"")}function nr(e){var t,n,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
this.spec=o,e instanceof _t?(this._virtualNode=e,this._element=e.actualNode):(this._element=e,this._virtualNode=er(e)),this.fromFrame=(null===(t=this.spec.selector)||void 0===t?void 0:t.length)>1,a.absolutePaths&&(this._options={toRoot:!0}),this.nodeIndexes=[],Array.isArray(this.spec.nodeIndexes)?this.nodeIndexes=this.spec.nodeIndexes:"number"==typeof(null===(n=this._virtualNode)||void 0===n?void 0:n.nodeIndex)&&(this.nodeIndexes=[this._virtualNode.nodeIndex]),this.source=null,i._audit.noHtml||(this.source=null!==(r=this.spec.source)&&void 0!==r?r:tr(this._element))}nr.prototype={get selector(){return this.spec.selector||[Gn(this.element,this._options)]},get ancestry(){return this.spec.ancestry||[Qn(this.element)]},get xpath(){return this.spec.xpath||[Jn(this.element)]},get element(){return this._element},toJSON:function(){return{selector:this.selector,source:this.source,xpath:this.xpath,ancestry:this.ancestry,nodeIndexes:this.nodeIndexes}}},nr.fromFrame=function(e,t,n){var r=nr.mergeSpecs(e,n)
return new nr(n.element,t,r)},nr.mergeSpecs=function(e,t){return S({},e,{selector:[].concat(_(t.selector),_(e.selector)),ancestry:[].concat(_(t.ancestry),_(e.ancestry)),xpath:[].concat(_(t.xpath),_(e.xpath)),nodeIndexes:[].concat(_(t.nodeIndexes),_(e.nodeIndexes))})}
var rr=nr,ar=function(e,t,r,a){return{isAsync:!1,async:function(){return this.isAsync=!0,function(t){t instanceof Error==0?(e.result=t,r(e)):a(t)}},data:function(t){e.data=t},relatedNodes:function(r){r=r instanceof n.Node?[r]:An(r),e.relatedNodes=r.map((function(e){return new rr(e,t)}))}}},or=function e(t){var r,a,i,s,l=t
if(null!==(r=n)&&void 0!==r&&r.Node&&t instanceof n.Node||null!==(a=n)&&void 0!==a&&a.HTMLCollection&&t instanceof n.HTMLCollection)return t
if(null!==t&&"object"===o(t))if(Array.isArray(t))for(l=[],i=0,s=t.length;i<s;i++)l[i]=e(t[i])
else for(i in l={},t)l[i]=e(t[i])
return l},ir=new(U($()).CssSelectorParser)
ir.registerSelectorPseudos("not"),ir.registerSelectorPseudos("is"),ir.registerNestingOperators(">"),ir.registerAttrEqualityMods("^","$","*","~")
var sr=ir
function lr(e,t){return function(e,t){return 1===e.props.nodeType&&("*"===t.tag||e.props.nodeName===t.tag)}(e,t)&&function(e,t){return!t.classes||t.classes.every((function(t){return e.hasClass(t.value)}))}(e,t)&&function(e,t){return!t.attributes||t.attributes.every((function(t){var n=e.attr(t.key)
return null!==n&&(!t.value||t.test(n))}))}(e,t)&&function(e,t){return!t.id||e.props.id===t.id}(e,t)&&(n=e,!((r=t).pseudos&&!r.pseudos.every((function(e){if("not"===e.name)return!e.expressions.some((function(e){return br(n,e)}))
if("is"===e.name)return e.expressions.some((function(e){return br(n,e)}))
throw new Error("the pseudo selector "+e.name+" has not yet been implemented")}))))
var n,r}var ur,cr=(ur=/(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g,function(e){return e.replace(ur,"\\")}),dr=/\\/g
function pr(e){if(e)return e.map((function(e){var t,n,r=e.name.replace(dr,""),a=(e.value||"").replace(dr,"")
switch(e.operator){case"^=":n=new RegExp("^"+cr(a))
break
case"$=":n=new RegExp(cr(a)+"$")
break
case"~=":n=new RegExp("(^|\\s)"+cr(a)+"(\\s|$)")
break
case"|=":n=new RegExp("^"+cr(a)+"(-|$)")
break
case"=":t=function(e){return a===e}
break
case"*=":t=function(e){return e&&e.includes(a)}
break
case"!=":t=function(e){return a!==e}
break
default:t=function(e){return!!e}}return""===a&&/^[*$^]=$/.test(e.operator)&&(t=function(){return!1}),t||(t=function(e){return e&&n.test(e)}),{key:r,value:a,test:t}}))}function fr(e){if(e)return e.map((function(e){return{value:e=e.replace(dr,""),regexp:new RegExp("(^|\\s)"+cr(e)+"(\\s|$)")}}))}function hr(e){if(e)return e.map((function(e){var t
return["is","not"].includes(e.name)&&(t=mr(t=(t=e.value).selectors?t.selectors:[t])),{name:e.name,expressions:t,value:e.value}}))}function mr(e){return e.map((function(e){for(var t=[],n=e.rule;n;)t.push({tag:n.tagName?n.tagName.toLowerCase():"*",combinator:n.nestingOperator?n.nestingOperator:" ",id:n.id,attributes:pr(n.attrs),classes:fr(n.classNames),pseudos:hr(n.pseudos)}),n=n.rule
return t}))}function gr(e){var t=sr.parse(e)
return mr(t=t.selectors?t.selectors:[t])}function vr(e,t,n,r){for(var a=Array.isArray(t)?t[n]:t,o=lr(e,a);!o&&r&&e.parent;)o=lr(e=e.parent,a)
if(n>0){if(!1===[" ",">"].includes(a.combinator))throw new Error("axe.utils.matchesExpression does not support the combinator: "+a.combinator)
o=o&&vr(e.parent,t,n-1," "===a.combinator)}return o}function br(e,t,n){return vr(e,t,t.length-1,n)}var yr=function(e,t){return gr(t).some((function(t){return br(e,t)}))},wr=function(e,t){for(;e;){if(yr(e,t))return e
if(void 0===e.parent)throw new TypeError("Cannot resolve parent for non-DOM nodes")
e=e.parent}return null}
function Dr(){}function xr(e){if("function"!=typeof e)throw new TypeError("Queue methods require functions as arguments")}var Er,Ar,Cr=function(){var e,t=[],n=0,r=0,a=Dr,i=!1,s=function(t){e=t,setTimeout((function(){null!=e&&Nt("Uncaught error (of queue)",e)}),1)},l=s
function u(e){return function(n){t[e]=n,(r-=1)||a===Dr||(i=!0,a(t))}}function c(e){return a=Dr,l(e),t}var d={defer:function(a){if("object"===o(a)&&a.then&&a.catch){var s=a
a=function(e,t){s.then(e).catch(t)}}if(xr(a),void 0===e){if(i)throw new Error("Queue already completed")
return t.push(a),++r,function(){for(var e=t.length;n<e;n++){var r=t[n]
try{r.call(null,u(n),c)}catch(e){c(e)}}}(),d}},then:function(n){if(xr(n),a!==Dr)throw new Error("queue `then` already set")
return e||(a=n,r||(i=!0,a(t))),d},catch:function(t){if(xr(t),l!==s)throw new Error("queue `catch` already set")
return e?(t(e),e=null):l=t,d},abort:c}
return d},kr={}
function Fr(e,t,n,r,a){var o={topic:t,message:n,channelId:"".concat(rn(),":").concat(rn()),keepalive:r}
return Ar(e,o,a)}function Tr(e,t){var n=e.topic,r=e.message,a=e.keepalive,o=kr[n]
if(o)try{o(r,a,t)}catch(e){i.log(e),t(e,a)}}function Nr(e,t){var n
return i._tree&&(n=Gn(t)),new Error(e+": "+(n||t))}Fr.updateMessenger=function(e){var t=e.open,n=e.post
Pt("function"==typeof t,"open callback must be a function"),Pt("function"==typeof n,"post callback must be a function"),Er&&Er()
var r=t(Tr)
r?(Pt("function"==typeof r,"open callback must return a cleanup function"),Er=r):Er=null,Ar=n},Fr.subscribe=function(e,t){Pt("function"==typeof t,"Subscriber callback must be a function"),Pt(!kr[e],"Topic ".concat(e," is already registered to.")),kr[e]=t},Fr.isInFrame=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n
return!!e.frameElement},dn(Fr)
var Rr=function(e,t,n,r){var a,o,i=e.contentWindow
if(!i)return Nt("Frame does not have a content window",e),void n(null)
var s=setTimeout((function(){s=setTimeout((function(){t.debug?r(Nr("No response from frame",e)):n(null)}),0)}),null!==(a=null===(o=t.options)||void 0===o?void 0:o.pingWaitTime)&&void 0!==a?a:500)
Fr(i,"axe.ping",null,void 0,(function(){clearTimeout(s)
var a=t.options&&t.options.frameWaitTime||6e4
s=setTimeout((function(){r(Nr("Axe in frame timed out",e))}),a),Fr(i,"axe.start",t,void 0,(function(e){clearTimeout(s),e instanceof Error==0?n(e):r(e)}))}))},_r=function(e){return[].concat(e.any||[]).concat(e.all||[]).concat(e.none||[])},Or=function(e,t,n){if(Array.isArray(e))return e.find((function(e){return"object"===o(e)&&e[t]===n}))}
function Sr(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Math.max(null==e?void 0:e.length,null==t?void 0:t.length),r=0;r<n;r++){var a=null==e?void 0:e[r],o=null==t?void 0:t[r]
if("number"!=typeof a||isNaN(a))return 0===r?1:-1
if("number"!=typeof o||isNaN(o))return 0===r?-1:1
if(a!==o)return a-o}return 0}var Ir=function(e,t){var n=[]
return e.forEach((function(e){var r,a=(r=e)&&r.results?Array.isArray(r.results)?r.results.length?r.results:null:[r.results]:null
if(a&&a.length){var o=function(e,t){return e.frameElement?new rr(e.frameElement,t):e.frameSpec?e.frameSpec:null}(e,t)
a.forEach((function(e){e.nodes&&o&&function(e,t,n){e.forEach((function(e){e.node=rr.fromFrame(e.node,t,n),_r(e).forEach((function(e){e.relatedNodes=e.relatedNodes.map((function(e){return rr.fromFrame(e,t,n)}))}))}))}(e.nodes,t,o)
var r=Or(n,"id",e.id)
r?e.nodes.length&&function(e,t){for(var n=t[0].node,r=0;r<e.length;r++){var a=e[r].node,o=Sr(a.nodeIndexes,n.nodeIndexes)
if(o>0||0===o&&n.selector.length<a.selector.length)return void e.splice.apply(e,[r,0].concat(_(t)))}e.push.apply(e,_(t))}(r.nodes,e.nodes):n.push(e)}))}})),n.forEach((function(e){e.nodes&&e.nodes.sort((function(e,t){return Sr(e.node.nodeIndexes,t.node.nodeIndexes)}))})),n}
function Pr(e,t,n,r,a,o){var i=Cr()
e.frames.forEach((function(e){var a=e.node,o=R(e,l)
i.defer((function(e,i){Rr(a,{options:t,command:n,parameter:r,context:o},(function(t){return e(t?{results:t,frameElement:a}:null)}),i)}))})),i.then((function(e){a(Ir(e,t))})).catch(o)}var jr=function(e,t){if(e.shadowId||t.shadowId)return function e(t,n){return t.shadowId===n.shadowId||!!t.children.find((function(t){return e(t,n)}))}(e,t)
if(e.actualNode)return"function"==typeof e.actualNode.contains?e.actualNode.contains(t.actualNode):!!(16&e.actualNode.compareDocumentPosition(t.actualNode))
do{if(t===e)return!0}while(t=t&&t.parent)
return!1},Mr=function e(){for(var t={},n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return r.forEach((function(n){if(n&&"object"===o(n)&&!Array.isArray(n))for(var r=0,a=Object.keys(n);r<a.length;r++){var i=a[r]
!t.hasOwnProperty(i)||"object"!==o(n[i])||Array.isArray(t[i])?t[i]=n[i]:t[i]=e(t[i],n[i])}})),t},qr=function(e,t){Object.assign(e,t),Object.keys(t).filter((function(e){return"function"==typeof t[e]})).forEach((function(n){e[n]=null
try{e[n]=t[n](e)}catch(e){}}))},Lr=["article","aside","blockquote","body","div","footer","h1","h2","h3","h4","h5","h6","header","main","nav","p","section","span"],Br=function(e){if(e.shadowRoot){var t=e.nodeName.toLowerCase()
if(Lr.includes(t)||/^[a-z][a-z0-9_.-]*-[a-z0-9_.-]*$/.test(t))return!0}return!1},Ur={}
B(Ur,{findElmsInContext:function(){return zr},findUp:function(){return Wr},findUpVirtual:function(){return $r},getComposedParent:function(){return Gr},getElementByReference:function(){return Yr},getElementCoordinates:function(){return Kr},getElementStack:function(){return da},getRootNode:function(){return Vr},getScrollOffset:function(){return Qr},getTabbableElements:function(){return pa},getTextElementStack:function(){return ha},getViewportSize:function(){return Jr},hasContent:function(){return xa},hasContentVirtual:function(){return Da},idrefs:function(){return va},insertedIntoFocusOrder:function(){return Na},isFocusable:function(){return Ta},isHTML5:function(){return Ra},isHiddenWithCSS:function(){return Ca},isInTextBlock:function(){return Ia},isModalOpen:function(){return Pa},isNativelyFocusable:function(){return Fa},isNode:function(){return ja},isOffscreen:function(){return Xr},isOpaque:function(){return Ga},isSkipLink:function(){return Qa},isVisible:function(){return ta},isVisualContent:function(){return ga},reduceToElementsBelowFloating:function(){return Ka},shadowElementsFromPoint:function(){return eo},urlPropsFromAttribute:function(){return ao},visuallyContains:function(){return Ja},visuallyOverlaps:function(){return oo}})
var Hr=function(e){var t=e.getRootNode&&e.getRootNode()||a
return t===e&&(t=a),t},Vr=Hr,zr=function(e){var t,n=e.context,r=e.value,a=e.attr,o=e.elm,i=void 0===o?"":o,s=Cn(r)
return t=9===n.nodeType||11===n.nodeType?n:Vr(n),Array.from(t.querySelectorAll(i+"["+a+"="+s+"]"))},$r=function(e,t){var n
if(n=e.actualNode,!e.shadowId&&"function"==typeof e.actualNode.closest)return e.actualNode.closest(t)||null
do{(n=n.assignedSlot?n.assignedSlot:n.parentNode)&&11===n.nodeType&&(n=n.host)}while(n&&!In(n,t)&&n!==a.documentElement)
return n&&In(n,t)?n:null},Wr=function(e,t){return $r(er(e),t)},Gr=function e(t){if(t.assignedSlot)return e(t.assignedSlot)
if(t.parentNode){var n=t.parentNode
if(1===n.nodeType)return n
if(n.host)return n.host}return null},Yr=function(e,t){var n=e.getAttribute(t)
if(!n)return null
"#"===n.charAt(0)?n=decodeURIComponent(n.substring(1)):"/#"===n.substr(0,2)&&(n=decodeURIComponent(n.substring(2)))
var r=a.getElementById(n)
return r||((r=a.getElementsByName(n)).length?r[0]:null)},Qr=function(e){if(!e.nodeType&&e.document&&(e=e.document),9===e.nodeType){var t=e.documentElement,n=e.body
return{left:t&&t.scrollLeft||n&&n.scrollLeft||0,top:t&&t.scrollTop||n&&n.scrollTop||0}}return{left:e.scrollLeft,top:e.scrollTop}},Kr=function(e){var t=Qr(a),n=t.left,r=t.top,o=e.getBoundingClientRect()
return{top:o.top+r,right:o.right+n,bottom:o.bottom+r,left:o.left+n,width:o.right-o.left,height:o.bottom-o.top}},Jr=function(e){var t=e.document,n=t.documentElement
if(e.innerWidth)return{width:e.innerWidth,height:e.innerHeight}
if(n)return{width:n.clientWidth,height:n.clientHeight}
var r=t.body
return{width:r.clientWidth,height:r.clientHeight}},Xr=function(e){var t,r=a.documentElement,o=n.getComputedStyle(e),i=n.getComputedStyle(a.body||r).getPropertyValue("direction"),s=Kr(e)
if(s.bottom<0&&(function(e,t){for(e=Gr(e);e&&"html"!==e.nodeName.toLowerCase();){if(e.scrollTop&&(t+=e.scrollTop)>=0)return!1
e=Gr(e)}return!0}(e,s.bottom)||"absolute"===o.position))return!0
if(0===s.left&&0===s.right)return!1
if("ltr"===i){if(s.right<=0)return!0}else if(t=Math.max(r.scrollWidth,Jr(n).width),s.left>=t)return!0
return!1},Zr=/rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,ea=/(\w+)\((\d+)/,ta=function e(t,r,a){var o
if(!t)throw new TypeError("Cannot determine if element is visible for non-DOM nodes")
var s=t instanceof _t?t:er(t)
t=s?s.actualNode:t
var l="_isVisible"+(r?"ScreenReader":""),u=null!==(o=n.Node)&&void 0!==o?o:{},c=u.DOCUMENT_NODE,d=u.DOCUMENT_FRAGMENT_NODE,p=s?s.props.nodeType:t.nodeType,f=s?s.props.nodeName:t.nodeName.toLowerCase()
if(s&&void 0!==s[l])return s[l]
if(p===c)return!0
if(["style","script","noscript","template"].includes(f))return!1
if(t&&p===d&&(t=t.host),r&&"true"===(s?s.attr("aria-hidden"):t.getAttribute("aria-hidden")))return!1
if(!t){var h=s.parent,m=!0
return h&&(m=e(h,r,!0)),s&&(s[l]=m),m}var g=n.getComputedStyle(t,null)
if(null===g)return!1
if("area"===f)return function(t,n,r){var a=Wr(t,"map")
if(!a)return!1
var o=a.getAttribute("name")
if(!o)return!1
var s=Vr(t)
if(!s||9!==s.nodeType)return!1
var l=gi(i._tree,'img[usemap="#'.concat(Cn(o),'"]'))
return!(!l||!l.length)&&l.some((function(t){return e(t.actualNode,n,r)}))}(t,r,a)
if("none"===g.getPropertyValue("display"))return!1
var v=parseInt(g.getPropertyValue("height")),b=parseInt(g.getPropertyValue("width")),y=_o(t),w=y&&0===v,D=y&&0===b,x="absolute"===g.getPropertyValue("position")&&(v<2||b<2)&&"hidden"===g.getPropertyValue("overflow")
if(!r&&(function(e){var t=e.getPropertyValue("clip").match(Zr),n=e.getPropertyValue("clip-path").match(ea)
if(t&&5===t.length){var r=e.getPropertyValue("position")
if(["fixed","absolute"].includes(r))return t[3]-t[1]<=0&&t[2]-t[4]<=0}if(n){var a=n[1],o=parseInt(n[2],10)
switch(a){case"inset":return o>=50
case"circle":return 0===o}}return!1}(g)||"0"===g.getPropertyValue("opacity")||w||D||x))return!1
if(!a&&("hidden"===g.getPropertyValue("visibility")||!r&&Xr(t)))return!1
var E=t.assignedSlot?t.assignedSlot:t.parentNode,A=!1
return E&&(A=e(E,r,!0)),s&&(s[l]=A),A},na=200
function ra(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.body,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:null,cells:[]},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
if(!r){var o=er(a.documentElement)
if(o||(o=new so(a.documentElement)),o._stackingOrder=[0],ca(t,o),_o(o.actualNode)){var s={container:o,cells:[]}
o._subGrid=s}}for(var l=a.createTreeWalker(e,n.NodeFilter.SHOW_ELEMENT,null,!1),u=r?l.nextNode():l.currentNode;u;){var c=er(u)
u.parentElement?r=er(u.parentElement):u.parentNode&&er(u.parentNode)&&(r=er(u.parentNode)),c||(c=new i.VirtualNode(u,r)),c._stackingOrder=la(c,r)
var d=ua(c,r),p=d?d._subGrid:t
if(_o(c.actualNode)){var f={container:c,cells:[]}
c._subGrid=f}var h=c.boundingClientRect
0!==h.width&&0!==h.height&&ta(u)&&ca(p,c),Br(u)&&ra(u.shadowRoot,p,c),u=l.nextNode()}}function aa(e,t){var n,r,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=t.left+t.width/2,s=t.top+t.height/2,l=s/na|0,u=i/na|0
if(l>e.cells.length||u>e.numCols)throw new Error("Element midpoint exceeds the grid bounds")
var c=null!==(n=null===(r=e.cells[l][u])||void 0===r?void 0:r.filter((function(e){return e.clientRects.find((function(e){var t=e.left,n=e.top
return i<=t+e.width&&i>=t&&s<=n+e.height&&s>=n}))})))&&void 0!==n?n:[],d=e.container
return d&&(c=aa(d._grid,d.boundingClientRect,!0).concat(c)),o||(c=c.sort(sa).map((function(e){return e.actualNode})).concat(a.documentElement).filter((function(e,t,n){return n.indexOf(e)===t}))),c}function oa(e){if(!e)return!1
if(void 0!==e._isFloated)return e._isFloated
if("none"!==e.getComputedStylePropertyValue("float"))return e._isFloated=!0,!0
var t=oa(e.parent)
return e._isFloated=t,t}function ia(e){return-1!==e.getComputedStylePropertyValue("display").indexOf("inline")?2:oa(e)?1:0}function sa(e,t){for(var r=Math.max(e._stackingOrder.length,t._stackingOrder.length),a=0;a<r;a++){if(void 0===t._stackingOrder[a])return-1
if(void 0===e._stackingOrder[a])return 1
if(t._stackingOrder[a]>e._stackingOrder[a])return 1
if(t._stackingOrder[a]<e._stackingOrder[a])return-1}var o=e.actualNode,i=t.actualNode
if(o.getRootNode&&o.getRootNode()!==i.getRootNode()){for(var s=[];o;)s.push({root:o.getRootNode(),node:o}),o=o.getRootNode().host
for(;i&&!s.find((function(e){return e.root===i.getRootNode()}));)i=i.getRootNode().host
if((o=s.find((function(e){return e.root===i.getRootNode()})).node)===i)return e.actualNode.getRootNode()!==o.getRootNode()?-1:1}var l=n.Node,u=l.DOCUMENT_POSITION_FOLLOWING,c=l.DOCUMENT_POSITION_CONTAINS,d=l.DOCUMENT_POSITION_CONTAINED_BY,p=o.compareDocumentPosition(i),f=p&u?1:-1,h=p&c||p&d,m=ia(e),g=ia(t)
return m===g||h?f:g-m}function la(e,t){var n=t._stackingOrder.slice(),r=e.getComputedStylePropertyValue("z-index"),a="static"!==e.getComputedStylePropertyValue("position"),o="none"!==e.getComputedStylePropertyValue("float")
if(a&&!["auto","0"].includes(r)){for(;n.find((function(e){return e%1!=0}));){var i=n.findIndex((function(e){return e%1!=0}))
n.splice(i,1)}n[n.length-1]=parseInt(r)}return function(e,t){var n=e.getComputedStylePropertyValue("position"),r=e.getComputedStylePropertyValue("z-index")
if("fixed"===n||"sticky"===n)return!0
if("auto"!==r&&"static"!==n)return!0
if("1"!==e.getComputedStylePropertyValue("opacity"))return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-transform")||e.getComputedStylePropertyValue("-ms-transform")||e.getComputedStylePropertyValue("transform")||"none"))return!0
var a=e.getComputedStylePropertyValue("mix-blend-mode")
if(a&&"normal"!==a)return!0
var o=e.getComputedStylePropertyValue("filter")
if(o&&"none"!==o)return!0
var i=e.getComputedStylePropertyValue("perspective")
if(i&&"none"!==i)return!0
var s=e.getComputedStylePropertyValue("clip-path")
if(s&&"none"!==s)return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-mask")||e.getComputedStylePropertyValue("mask")||"none"))return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-mask-image")||e.getComputedStylePropertyValue("mask-image")||"none"))return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-mask-border")||e.getComputedStylePropertyValue("mask-border")||"none"))return!0
if("isolate"===e.getComputedStylePropertyValue("isolation"))return!0
var l=e.getComputedStylePropertyValue("will-change")
if("transform"===l||"opacity"===l)return!0
if("touch"===e.getComputedStylePropertyValue("-webkit-overflow-scrolling"))return!0
var u=e.getComputedStylePropertyValue("contain")
if(["layout","paint","strict","content"].includes(u))return!0
if("auto"!==r&&t){var c=t.getComputedStylePropertyValue("display")
if(["flex","inline-flex","inline flex","grid","inline-grid","inline grid"].includes(c))return!0}return!1}(e,t)?n.push(0):a?n.push(.5):o&&n.push(.25),n}function ua(e,t){for(var n=null,r=[e];t;){if(_o(t.actualNode)){n=t
break}if(t._scrollRegionParent){n=t._scrollRegionParent
break}r.push(t),t=er(t.actualNode.parentElement||t.actualNode.parentNode)}return r.forEach((function(e){return e._scrollRegionParent=n})),n}function ca(e,t){t._grid=e,t.clientRects.forEach((function(n){var r,a=n.left,o=n.top,i=o/na|0,s=a/na|0,l=(o+n.height)/na|0,u=(a+n.width)/na|0
e.numCols=Math.max(null!==(r=e.numCols)&&void 0!==r?r:0,u)
for(var c=i;c<=l;c++){e.cells[c]=e.cells[c]||[]
for(var d=s;d<=u;d++)e.cells[c][d]=e.cells[c][d]||[],e.cells[c][d].includes(t)||e.cells[c][d].push(t)}}))}var da=function(e){Zn.get("gridCreated")||(ra(),Zn.set("gridCreated",!0))
var t=er(e),n=t._grid
return n?aa(n,t.boundingClientRect):[]},pa=function(e){return gi(e,"*").filter((function(e){var t=e.isFocusable,n=e.actualNode.getAttribute("tabindex")
return(n=n&&!isNaN(parseInt(n,10))?parseInt(n):null)?t&&n>=0:t}))},fa=function(e){return e?e.replace(/\r\n/g,"\n").replace(/\u00A0/g," ").replace(/[\s]{2,}/g," ").trim():""},ha=function(e){Zn.get("gridCreated")||(ra(),Zn.set("gridCreated",!0))
var t=er(e),n=t._grid
if(!n)return[]
var r=t.boundingClientRect,o=[]
return Array.from(e.childNodes).forEach((function(e){if(3===e.nodeType&&""!==fa(e.textContent)){var t=a.createRange()
t.selectNodeContents(e)
var n=t.getClientRects()
if(Array.from(n).some((function(e){var t=e.left+e.width/2,n=e.top+e.height/2
return t<r.left||t>r.right||n<r.top||n>r.bottom})))return
for(var i=0;i<n.length;i++){var s=n[i]
s.width>=1&&s.height>=1&&o.push(s)}}})),o.length?o.map((function(e){return aa(n,e)})):[da(e)]},ma=["checkbox","img","radio","range","slider","spinbutton","textbox"],ga=function(e){var t=e.getAttribute("role")
if(t)return-1!==ma.indexOf(t)
switch(e.nodeName.toUpperCase()){case"IMG":case"IFRAME":case"OBJECT":case"VIDEO":case"AUDIO":case"CANVAS":case"SVG":case"MATH":case"BUTTON":case"SELECT":case"TEXTAREA":case"KEYGEN":case"PROGRESS":case"METER":return!0
case"INPUT":return"hidden"!==e.type
default:return!1}},va=function(e,t){e=e.actualNode||e
try{var n=Vr(e),r=[],a=e.getAttribute(t)
if(a){a=Ci(a)
for(var o=0;o<a.length;o++)r.push(n.getElementById(a[o]))}return r}catch(e){throw new TypeError("Cannot resolve id references for non-DOM nodes")}},ba=function e(t,n,r){var a=t instanceof _t?t:er(t),o=!t.actualNode||t.actualNode&&ta(t.actualNode,n),i=a.children.map((function(t){var a=t.props,i=a.nodeType,s=a.nodeValue
if(3===i){if(s&&o)return s}else if(!r)return e(t,n)})).join("")
return fa(i)},ya=function(e){var t
return e.attr("aria-labelledby")&&(t=va(e.actualNode,"aria-labelledby").map((function(e){var t=er(e)
return t?ba(t):""})).join(" ").trim())||(t=e.attr("aria-label"))&&(t=fa(t))?t:null},wa=["HEAD","TITLE","TEMPLATE","SCRIPT","STYLE","IFRAME","OBJECT","VIDEO","AUDIO","NOSCRIPT"],Da=function e(t,n,r){return function(e){if(!wa.includes(e.actualNode.nodeName.toUpperCase()))return e.children.some((function(e){var t=e.actualNode
return 3===t.nodeType&&t.nodeValue.trim()}))}(t)||ga(t.actualNode)||!r&&!!ya(t)||!n&&t.children.some((function(t){return 1===t.actualNode.nodeType&&e(t)}))},xa=function(e,t,n){return e=er(e),Da(e,t,n)}
function Ea(e,t){var n=er(e)
return n?(void 0===n._isHiddenWithCSS&&(n._isHiddenWithCSS=Aa(e,t)),n._isHiddenWithCSS):Aa(e,t)}function Aa(e,t){if(9===e.nodeType)return!1
if(11===e.nodeType&&(e=e.host),["STYLE","SCRIPT"].includes(e.nodeName.toUpperCase()))return!1
var r=n.getComputedStyle(e,null)
if(!r)throw new Error("Style does not exist for the given element.")
if("none"===r.getPropertyValue("display"))return!0
var a=["hidden","collapse"],o=r.getPropertyValue("visibility")
if(a.includes(o)&&!t)return!0
if(a.includes(o)&&t&&a.includes(t))return!0
var i=Gr(e)
return!(!i||a.includes(o))&&Ea(i,o)}var Ca=Ea,ka=function(e){var t=e instanceof _t?e:er(e)
if(t.hasAttr("disabled"))return!0
for(var n=t.parent,r=[],a=!1;n&&n.shadowId===t.shadowId&&!a&&(r.push(n),"legend"!==n.props.nodeName);){if(void 0!==n._inDisabledFieldset){a=n._inDisabledFieldset
break}"fieldset"===n.props.nodeName&&n.hasAttr("disabled")&&(a=!0),n=n.parent}return r.forEach((function(e){return e._inDisabledFieldset=a})),!!a||"area"!==t.props.nodeName&&!!t.actualNode&&Ca(t.actualNode)},Fa=function(e){var t=e instanceof _t?e:er(e)
if(!t||ka(t))return!1
switch(t.props.nodeName){case"a":case"area":if(t.hasAttr("href"))return!0
break
case"input":return"hidden"!==t.props.type
case"textarea":case"select":case"summary":case"button":return!0
case"details":return!gi(t,"summary").length}return!1},Ta=function(e){var t=e instanceof _t?e:er(e)
if(1!==t.props.nodeType)return!1
if(ka(t))return!1
if(Fa(t))return!0
var n=t.attr("tabindex")
return!(!n||isNaN(parseInt(n,10)))},Na=function(e){return parseInt(e.getAttribute("tabindex"),10)>-1&&Ta(e)&&!Fa(e)},Ra=function(e){var t=e.doctype
return null!==t&&"html"===t.name&&!t.publicId&&!t.systemId}
function _a(e,t){!1!==t(e.actualNode)&&e.children.forEach((function(e){return _a(e,t)}))}var Oa=["block","list-item","table","flex","grid","inline-block"]
function Sa(e){var t=n.getComputedStyle(e).getPropertyValue("display")
return Oa.includes(t)||"table-"===t.substr(0,6)}var Ia=function(e){if(Sa(e))return!1
var t=function(e){for(var t=Gr(e);t&&!Sa(t);)t=Gr(t)
return er(t)}(e),n="",r="",a=0
return _a(t,(function(t){if(2===a)return!1
if(3===t.nodeType&&(n+=t.nodeValue),1===t.nodeType){var o=(t.nodeName||"").toUpperCase()
if(["BR","HR"].includes(o))0===a?(n="",r=""):a=2
else{if("none"===t.style.display||"hidden"===t.style.overflow||!["",null,"none"].includes(t.style.float)||!["",null,"relative"].includes(t.style.position))return!1
if("A"===o&&t.href||"link"===(t.getAttribute("role")||"").toLowerCase())return t===e&&(a=1),r+=t.textContent,!1}}})),n=fa(n),r=fa(r),n.length>r.length},Pa=function(e){var t=(e=e||{}).modalPercent||.75
if(Zn.get("isModalOpen"))return Zn.get("isModalOpen")
if(oi(i._tree[0],"dialog, [role=dialog], [aria-modal=true]",(function(e){return ta(e.actualNode)})).length)return Zn.set("isModalOpen",!0),!0
for(var r=Jr(n),s=r.width*t,l=r.height*t,u=(r.width-s)/2,c=(r.height-l)/2,d=[{x:u,y:c},{x:r.width-u,y:c},{x:r.width/2,y:r.height/2},{x:u,y:r.height-c},{x:r.width-u,y:r.height-c}].map((function(e){return Array.from(a.elementsFromPoint(e.x,e.y))})),p=function(e){var t=d[e].find((function(e){var t=n.getComputedStyle(e)
return parseInt(t.width,10)>=s&&parseInt(t.height,10)>=l&&"none"!==t.getPropertyValue("pointer-events")&&("absolute"===t.position||"fixed"===t.position)}))
if(t&&d.every((function(e){return e.includes(t)})))return Zn.set("isModalOpen",!0),{v:!0}},f=0;f<d.length;f++){var h=p(f)
if("object"===o(h))return h.v}Zn.set("isModalOpen",void 0)},ja=function(e){return e instanceof n.Node},Ma={},qa={set:function(e,t){if("string"!=typeof e)throw new Error("Incomplete data: key must be a string")
return t&&(Ma[e]=t),Ma[e]},get:function(e){return Ma[e]},clear:function(){Ma={}}},La=function(e,t){var r=e.nodeName.toUpperCase()
if(["IMG","CANVAS","OBJECT","IFRAME","VIDEO","SVG"].includes(r))return qa.set("bgColor","imgNode"),!0
var a=(t=t||n.getComputedStyle(e)).getPropertyValue("background-image"),o="none"!==a
if(o){var i=/gradient/.test(a)
qa.set("bgColor",i?"bgGradient":"bgImage")}return o},Ba={"aria-activedescendant":{type:"idref",allowEmpty:!0},"aria-atomic":{type:"boolean",global:!0},"aria-autocomplete":{type:"nmtoken",values:["inline","list","both","none"]},"aria-busy":{type:"boolean",global:!0},"aria-checked":{type:"nmtoken",values:["false","mixed","true","undefined"]},"aria-colcount":{type:"int",minValue:-1},"aria-colindex":{type:"int",minValue:1},"aria-colspan":{type:"int",minValue:1},"aria-controls":{type:"idrefs",allowEmpty:!0,global:!0},"aria-current":{type:"nmtoken",allowEmpty:!0,values:["page","step","location","date","time","true","false"],global:!0},"aria-describedby":{type:"idrefs",allowEmpty:!0,global:!0},"aria-details":{type:"idref",allowEmpty:!0,global:!0},"aria-disabled":{type:"boolean",global:!0},"aria-dropeffect":{type:"nmtokens",values:["copy","execute","link","move","none","popup"],global:!0},"aria-errormessage":{type:"idref",allowEmpty:!0,global:!0},"aria-expanded":{type:"nmtoken",values:["true","false","undefined"]},"aria-flowto":{type:"idrefs",allowEmpty:!0,global:!0},"aria-grabbed":{type:"nmtoken",values:["true","false","undefined"],global:!0},"aria-haspopup":{type:"nmtoken",allowEmpty:!0,values:["true","false","menu","listbox","tree","grid","dialog"],global:!0},"aria-hidden":{type:"nmtoken",values:["true","false","undefined"],global:!0},"aria-invalid":{type:"nmtoken",allowEmpty:!0,values:["grammar","false","spelling","true"],global:!0},"aria-keyshortcuts":{type:"string",allowEmpty:!0,global:!0},"aria-label":{type:"string",allowEmpty:!0,global:!0},"aria-labelledby":{type:"idrefs",allowEmpty:!0,global:!0},"aria-level":{type:"int",minValue:1},"aria-live":{type:"nmtoken",values:["assertive","off","polite"],global:!0},"aria-modal":{type:"boolean"},"aria-multiline":{type:"boolean"},"aria-multiselectable":{type:"boolean"},"aria-orientation":{type:"nmtoken",values:["horizontal","undefined","vertical"]},"aria-owns":{type:"idrefs",allowEmpty:!0,global:!0},"aria-placeholder":{type:"string",allowEmpty:!0},"aria-posinset":{type:"int",minValue:1},"aria-pressed":{type:"nmtoken",values:["false","mixed","true","undefined"]},"aria-readonly":{type:"boolean"},"aria-relevant":{type:"nmtokens",values:["additions","all","removals","text"],global:!0},"aria-required":{type:"boolean"},"aria-roledescription":{type:"string",allowEmpty:!0,global:!0},"aria-rowcount":{type:"int",minValue:-1},"aria-rowindex":{type:"int",minValue:1},"aria-rowspan":{type:"int",minValue:0},"aria-selected":{type:"nmtoken",values:["false","true","undefined"]},"aria-setsize":{type:"int",minValue:-1},"aria-sort":{type:"nmtoken",values:["ascending","descending","none","other"]},"aria-valuemax":{type:"decimal"},"aria-valuemin":{type:"decimal"},"aria-valuenow":{type:"decimal"},"aria-valuetext":{type:"string"}},Ua={alert:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"]},alertdialog:{type:"widget",allowedAttrs:["aria-expanded","aria-modal"],superclassRole:["alert","dialog"],accessibleNameRequired:!0},application:{type:"landmark",allowedAttrs:["aria-activedescendant","aria-expanded"],superclassRole:["structure"],accessibleNameRequired:!0},article:{type:"structure",allowedAttrs:["aria-posinset","aria-setsize","aria-expanded"],superclassRole:["document"]},banner:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},blockquote:{type:"structure",superclassRole:["section"]},button:{type:"widget",allowedAttrs:["aria-expanded","aria-pressed"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},caption:{type:"structure",requiredContext:["figure","table","grid","treegrid"],superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},cell:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-colindex","aria-colspan","aria-rowindex","aria-rowspan","aria-expanded"],superclassRole:["section"],nameFromContent:!0},checkbox:{type:"widget",allowedAttrs:["aria-checked","aria-readonly","aria-required"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},code:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},columnheader:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-sort","aria-colindex","aria-colspan","aria-expanded","aria-readonly","aria-required","aria-rowindex","aria-rowspan","aria-selected"],superclassRole:["cell","gridcell","sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},combobox:{type:"composite",requiredAttrs:["aria-expanded","aria-controls"],allowedAttrs:["aria-owns","aria-autocomplete","aria-readonly","aria-required","aria-activedescendant","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!0},command:{type:"abstract",superclassRole:["widget"]},complementary:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},composite:{type:"abstract",superclassRole:["widget"]},contentinfo:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},definition:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},deletion:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},dialog:{type:"widget",allowedAttrs:["aria-expanded","aria-modal"],superclassRole:["window"],accessibleNameRequired:!0},directory:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["list"],nameFromContent:!0},document:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["structure"]},emphasis:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},feed:{type:"structure",requiredOwned:["article"],allowedAttrs:["aria-expanded"],superclassRole:["list"]},figure:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},form:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},grid:{type:"composite",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-level","aria-multiselectable","aria-readonly","aria-activedescendant","aria-colcount","aria-expanded","aria-rowcount"],superclassRole:["composite","table"],accessibleNameRequired:!1},gridcell:{type:"widget",requiredContext:["row"],allowedAttrs:["aria-readonly","aria-required","aria-selected","aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan"],superclassRole:["cell","widget"],nameFromContent:!0},group:{type:"structure",allowedAttrs:["aria-activedescendant","aria-expanded"],superclassRole:["section"]},heading:{type:"structure",requiredAttrs:["aria-level"],allowedAttrs:["aria-expanded"],superclassRole:["sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},img:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],accessibleNameRequired:!0,childrenPresentational:!0},input:{type:"abstract",superclassRole:["widget"]},insertion:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},landmark:{type:"abstract",superclassRole:["section"]},link:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0},list:{type:"structure",requiredOwned:["group","listitem"],allowedAttrs:["aria-expanded"],superclassRole:["section"]},listbox:{type:"composite",requiredOwned:["group","option"],allowedAttrs:["aria-multiselectable","aria-readonly","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!0},listitem:{type:"structure",requiredContext:["list","group"],allowedAttrs:["aria-level","aria-posinset","aria-setsize","aria-expanded"],superclassRole:["section"],nameFromContent:!0},log:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"]},main:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},marquee:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"]},math:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],childrenPresentational:!0},menu:{type:"composite",requiredOwned:["group","menuitemradio","menuitem","menuitemcheckbox"],allowedAttrs:["aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"]},menubar:{type:"composite",requiredOwned:["group","menuitemradio","menuitem","menuitemcheckbox"],allowedAttrs:["aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["menu"]},menuitem:{type:"widget",requiredContext:["menu","menubar","group"],allowedAttrs:["aria-posinset","aria-setsize","aria-expanded"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0},menuitemcheckbox:{type:"widget",requiredContext:["menu","menubar","group"],allowedAttrs:["aria-checked","aria-posinset","aria-readonly","aria-setsize"],superclassRole:["checkbox","menuitem"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},menuitemradio:{type:"widget",requiredContext:["menu","menubar","group"],allowedAttrs:["aria-checked","aria-posinset","aria-readonly","aria-setsize"],superclassRole:["menuitemcheckbox","radio"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},meter:{type:"structure",allowedAttrs:["aria-valuetext"],requiredAttrs:["aria-valuemax","aria-valuemin","aria-valuenow"],superclassRole:["range"],accessibleNameRequired:!0,childrenPresentational:!0},navigation:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},none:{type:"structure",superclassRole:["structure"],prohibitedAttrs:["aria-label","aria-labelledby"]},note:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},option:{type:"widget",requiredContext:["group","listbox"],allowedAttrs:["aria-selected","aria-checked","aria-posinset","aria-setsize"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},paragraph:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},presentation:{type:"structure",superclassRole:["structure"],prohibitedAttrs:["aria-label","aria-labelledby"]},progressbar:{type:"widget",allowedAttrs:["aria-expanded","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],superclassRole:["range"],accessibleNameRequired:!0,childrenPresentational:!0},radio:{type:"widget",allowedAttrs:["aria-checked","aria-posinset","aria-setsize","aria-required"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},radiogroup:{type:"composite",requiredOwned:["radio"],allowedAttrs:["aria-readonly","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!1},range:{type:"abstract",superclassRole:["widget"]},region:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"],accessibleNameRequired:!1},roletype:{type:"abstract",superclassRole:[]},row:{type:"structure",requiredContext:["grid","rowgroup","table","treegrid"],requiredOwned:["cell","columnheader","gridcell","rowheader"],allowedAttrs:["aria-colindex","aria-level","aria-rowindex","aria-selected","aria-activedescendant","aria-expanded","aria-posinset","aria-setsize"],superclassRole:["group","widget"],nameFromContent:!0},rowgroup:{type:"structure",requiredContext:["grid","table","treegrid"],requiredOwned:["row"],superclassRole:["structure"],nameFromContent:!0},rowheader:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-sort","aria-colindex","aria-colspan","aria-expanded","aria-readonly","aria-required","aria-rowindex","aria-rowspan","aria-selected"],superclassRole:["cell","gridcell","sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},scrollbar:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-controls","aria-orientation","aria-valuemax","aria-valuemin","aria-valuetext"],superclassRole:["range"],childrenPresentational:!0},search:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},searchbox:{type:"widget",allowedAttrs:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-placeholder","aria-readonly","aria-required"],superclassRole:["textbox"],accessibleNameRequired:!0},section:{type:"abstract",superclassRole:["structure"],nameFromContent:!0},sectionhead:{type:"abstract",superclassRole:["structure"],nameFromContent:!0},select:{type:"abstract",superclassRole:["composite","group"]},separator:{type:"structure",allowedAttrs:["aria-valuemax","aria-valuemin","aria-valuenow","aria-orientation","aria-valuetext"],superclassRole:["structure","widget"],childrenPresentational:!0},slider:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-orientation","aria-readonly","aria-valuetext"],superclassRole:["input","range"],accessibleNameRequired:!0,childrenPresentational:!0},spinbutton:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-readonly","aria-required","aria-activedescendant","aria-valuetext"],superclassRole:["composite","input","range"],accessibleNameRequired:!0},status:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"]},strong:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},structure:{type:"abstract",superclassRole:["roletype"]},subscript:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},superscript:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},switch:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-readonly"],superclassRole:["checkbox"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},tab:{type:"widget",requiredContext:["tablist"],allowedAttrs:["aria-posinset","aria-selected","aria-setsize","aria-expanded"],superclassRole:["sectionhead","widget"],nameFromContent:!0,childrenPresentational:!0},table:{type:"structure",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-colcount","aria-rowcount","aria-expanded"],superclassRole:["section"],accessibleNameRequired:!1,nameFromContent:!0},tablist:{type:"composite",requiredOwned:["tab"],allowedAttrs:["aria-level","aria-multiselectable","aria-orientation","aria-activedescendant","aria-expanded"],superclassRole:["composite"]},tabpanel:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"],accessibleNameRequired:!1},term:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},text:{type:"structure",superclassRole:["section"],nameFromContent:!0},textbox:{type:"widget",allowedAttrs:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-placeholder","aria-readonly","aria-required"],superclassRole:["input"],accessibleNameRequired:!0},time:{type:"structure",superclassRole:["section"]},timer:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["status"]},toolbar:{type:"structure",allowedAttrs:["aria-orientation","aria-activedescendant","aria-expanded"],superclassRole:["group"],accessibleNameRequired:!0},tooltip:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},tree:{type:"composite",requiredOwned:["group","treeitem"],allowedAttrs:["aria-multiselectable","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!1},treegrid:{type:"composite",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-activedescendant","aria-colcount","aria-expanded","aria-level","aria-multiselectable","aria-orientation","aria-readonly","aria-required","aria-rowcount"],superclassRole:["grid","tree"],accessibleNameRequired:!1},treeitem:{type:"widget",requiredContext:["group","tree"],allowedAttrs:["aria-checked","aria-expanded","aria-level","aria-posinset","aria-selected","aria-setsize"],superclassRole:["listitem","option"],accessibleNameRequired:!0,nameFromContent:!0},widget:{type:"abstract",superclassRole:["roletype"]},window:{type:"abstract",superclassRole:["roletype"]}},Ha={ariaAttrs:Ba,ariaRoles:S({},Ua,{"doc-abstract":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-acknowledgments":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-afterword":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-appendix":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-backlink":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-biblioentry":{type:"listitem",requiredContext:["doc-bibliography"],allowedAttrs:["aria-expanded","aria-level","aria-posinset","aria-setsize"],superclassRole:["listitem"]},"doc-bibliography":{type:"landmark",requiredOwned:["doc-biblioentry"],allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-biblioref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-chapter":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-colophon":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-conclusion":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-cover":{type:"img",allowedAttrs:["aria-expanded"],superclassRole:["img"]},"doc-credit":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-credits":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-dedication":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-endnote":{type:"listitem",requiredContext:["doc-endnotes"],allowedAttrs:["aria-expanded","aria-level","aria-posinset","aria-setsize"],superclassRole:["listitem"]},"doc-endnotes":{type:"landmark",requiredOwned:["doc-endnote"],allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-epigraph":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-epilogue":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-errata":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-example":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-footnote":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-foreword":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-glossary":{type:"landmark",requiredOwned:["definition","term"],allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-glossref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-index":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]},"doc-introduction":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-noteref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-notice":{type:"note",allowedAttrs:["aria-expanded"],superclassRole:["note"]},"doc-pagebreak":{type:"separator",allowedAttrs:["aria-expanded","aria-orientation"],superclassRole:["separator"],childrenPresentational:!0},"doc-pagelist":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]},"doc-part":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-preface":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-prologue":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-pullquote":{type:"none",superclassRole:["none"]},"doc-qna":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-subtitle":{type:"sectionhead",allowedAttrs:["aria-expanded"],superclassRole:["sectionhead"]},"doc-tip":{type:"note",allowedAttrs:["aria-expanded"],superclassRole:["note"]},"doc-toc":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]}},{"graphics-document":{type:"structure",superclassRole:["document"],accessibleNameRequired:!0},"graphics-object":{type:"structure",superclassRole:["group"],nameFromContent:!0},"graphics-symbol":{type:"structure",superclassRole:["img"],accessibleNameRequired:!0,childrenPresentational:!0}}),htmlElms:{a:{variant:{href:{matches:"[href]",contentTypes:["interactive","phrasing","flow"],allowedRoles:["button","checkbox","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab","treeitem","doc-backlink","doc-biblioref","doc-glossref","doc-noteref"],namingMethods:["subtreeText"]},default:{contentTypes:["phrasing","flow"],allowedRoles:!0}}},abbr:{contentTypes:["phrasing","flow"],allowedRoles:!0},addres:{contentTypes:["flow"],allowedRoles:!0},area:{contentTypes:["phrasing","flow"],allowedRoles:!1,namingMethods:["altText"]},article:{contentTypes:["sectioning","flow"],allowedRoles:["feed","presentation","none","document","application","main","region"],shadowRoot:!0},aside:{contentTypes:["sectioning","flow"],allowedRoles:["feed","note","presentation","none","region","search","doc-dedication","doc-example","doc-footnote","doc-pullquote","doc-tip"]},audio:{variant:{controls:{matches:"[controls]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application"],chromiumRole:"Audio"},b:{contentTypes:["phrasing","flow"],allowedRoles:!0},base:{allowedRoles:!1,noAriaAttrs:!0},bdi:{contentTypes:["phrasing","flow"],allowedRoles:!0},bdo:{contentTypes:["phrasing","flow"],allowedRoles:!0},blockquote:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},body:{allowedRoles:!1,shadowRoot:!0},br:{contentTypes:["phrasing","flow"],allowedRoles:["presentation","none"],namingMethods:["titleText","singleSpace"]},button:{contentTypes:["interactive","phrasing","flow"],allowedRoles:["checkbox","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab"],namingMethods:["subtreeText"]},canvas:{allowedRoles:!0,contentTypes:["embedded","phrasing","flow"],chromiumRole:"Canvas"},caption:{allowedRoles:!1},cite:{contentTypes:["phrasing","flow"],allowedRoles:!0},code:{contentTypes:["phrasing","flow"],allowedRoles:!0},col:{allowedRoles:!1,noAriaAttrs:!0},colgroup:{allowedRoles:!1,noAriaAttrs:!0},data:{contentTypes:["phrasing","flow"],allowedRoles:!0},datalist:{contentTypes:["phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-multiselectable":"false"}},dd:{allowedRoles:!1},del:{contentTypes:["phrasing","flow"],allowedRoles:!0},dfn:{contentTypes:["phrasing","flow"],allowedRoles:!0},details:{contentTypes:["interactive","flow"],allowedRoles:!1},dialog:{contentTypes:["flow"],allowedRoles:["alertdialog"]},div:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},dl:{contentTypes:["flow"],allowedRoles:["group","list","presentation","none"],chromiumRole:"DescriptionList"},dt:{allowedRoles:["listitem"]},em:{contentTypes:["phrasing","flow"],allowedRoles:!0},embed:{contentTypes:["interactive","embedded","phrasing","flow"],allowedRoles:["application","document","img","presentation","none"],chromiumRole:"EmbeddedObject"},fieldset:{contentTypes:["flow"],allowedRoles:["none","presentation","radiogroup"],namingMethods:["fieldsetLegendText"]},figcaption:{allowedRoles:["group","none","presentation"]},figure:{contentTypes:["flow"],allowedRoles:!0,namingMethods:["figureText","titleText"]},footer:{contentTypes:["flow"],allowedRoles:["group","none","presentation","doc-footnote"],shadowRoot:!0},form:{contentTypes:["flow"],allowedRoles:["search","none","presentation"]},h1:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"1"}},h2:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"2"}},h3:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"3"}},h4:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"4"}},h5:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"5"}},h6:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"6"}},head:{allowedRoles:!1,noAriaAttrs:!0},header:{contentTypes:["flow"],allowedRoles:["group","none","presentation","doc-footnote"],shadowRoot:!0},hgroup:{contentTypes:["heading","flow"],allowedRoles:!0},hr:{contentTypes:["flow"],allowedRoles:["none","presentation","doc-pagebreak"],namingMethods:["titleText","singleSpace"]},html:{allowedRoles:!1,noAriaAttrs:!0},i:{contentTypes:["phrasing","flow"],allowedRoles:!0},iframe:{contentTypes:["interactive","embedded","phrasing","flow"],allowedRoles:["application","document","img","none","presentation"],chromiumRole:"Iframe"},img:{variant:{nonEmptyAlt:{matches:{attributes:{alt:"/.+/"}},allowedRoles:["button","checkbox","link","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","scrollbar","separator","slider","switch","tab","treeitem","doc-cover"]},usemap:{matches:"[usemap]",contentTypes:["interactive","embedded","flow"]},default:{allowedRoles:["presentation","none"],contentTypes:["embedded","flow"]}},namingMethods:["altText"]},input:{variant:{button:{matches:{properties:{type:"button"}},allowedRoles:["link","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab"]},buttonType:{matches:{properties:{type:["button","submit","reset"]}},namingMethods:["valueText","titleText","buttonDefaultText"]},checkboxPressed:{matches:{properties:{type:"checkbox"},attributes:{"aria-pressed":"/.*/"}},allowedRoles:["button","menuitemcheckbox","option","switch"],implicitAttrs:{"aria-checked":"false"}},checkbox:{matches:{properties:{type:"checkbox"},attributes:{"aria-pressed":null}},allowedRoles:["menuitemcheckbox","option","switch"],implicitAttrs:{"aria-checked":"false"}},noRoles:{matches:{properties:{type:["color","date","datetime-local","file","month","number","password","range","reset","submit","time","week"]}},allowedRoles:!1},hidden:{matches:{properties:{type:"hidden"}},contentTypes:["flow"],allowedRoles:!1,noAriaAttrs:!0},image:{matches:{properties:{type:"image"}},allowedRoles:["link","menuitem","menuitemcheckbox","menuitemradio","radio","switch"],namingMethods:["altText","valueText","labelText","titleText","buttonDefaultText"]},radio:{matches:{properties:{type:"radio"}},allowedRoles:["menuitemradio"],implicitAttrs:{"aria-checked":"false"}},textWithList:{matches:{properties:{type:"text"},attributes:{list:"/.*/"}},allowedRoles:!1},default:{contentTypes:["interactive","flow"],allowedRoles:["combobox","searchbox","spinbutton"],implicitAttrs:{"aria-valuenow":""},namingMethods:["labelText","placeholderText"]}}},ins:{contentTypes:["phrasing","flow"],allowedRoles:!0},kbd:{contentTypes:["phrasing","flow"],allowedRoles:!0},label:{contentTypes:["interactive","phrasing","flow"],allowedRoles:!1,chromiumRole:"Label"},legend:{allowedRoles:!1},li:{allowedRoles:["menuitem","menuitemcheckbox","menuitemradio","option","none","presentation","radio","separator","tab","treeitem","doc-biblioentry","doc-endnote"],implicitAttrs:{"aria-setsize":"1","aria-posinset":"1"}},link:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},main:{contentTypes:["flow"],allowedRoles:!1,shadowRoot:!0},map:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},math:{contentTypes:["embedded","phrasing","flow"],allowedRoles:!1},mark:{contentTypes:["phrasing","flow"],allowedRoles:!0},menu:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},meta:{variant:{itemprop:{matches:"[itemprop]",contentTypes:["phrasing","flow"]}},allowedRoles:!1,noAriaAttrs:!0},meter:{contentTypes:["phrasing","flow"],allowedRoles:!1,chromiumRole:"progressbar"},nav:{contentTypes:["sectioning","flow"],allowedRoles:["doc-index","doc-pagelist","doc-toc","menu","menubar","tablist"],shadowRoot:!0},noscript:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},object:{variant:{usemap:{matches:"[usemap]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application","document","img"],chromiumRole:"PluginObject"},ol:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},optgroup:{allowedRoles:!1},option:{allowedRoles:!1,implicitAttrs:{"aria-selected":"false"}},output:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingMethods:["subtreeText"]},p:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},param:{allowedRoles:!1,noAriaAttrs:!0},picture:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},pre:{contentTypes:["flow"],allowedRoles:!0},progress:{contentTypes:["phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-valuemax":"100","aria-valuemin":"0","aria-valuenow":"0"}},q:{contentTypes:["phrasing","flow"],allowedRoles:!0},rp:{allowedRoles:!0},rt:{allowedRoles:!0},ruby:{contentTypes:["phrasing","flow"],allowedRoles:!0},s:{contentTypes:["phrasing","flow"],allowedRoles:!0},samp:{contentTypes:["phrasing","flow"],allowedRoles:!0},script:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},section:{contentTypes:["sectioning","flow"],allowedRoles:["alert","alertdialog","application","banner","complementary","contentinfo","dialog","document","feed","log","main","marquee","navigation","none","note","presentation","search","status","tabpanel","doc-abstract","doc-acknowledgments","doc-afterword","doc-appendix","doc-bibliography","doc-chapter","doc-colophon","doc-conclusion","doc-credit","doc-credits","doc-dedication","doc-endnotes","doc-epigraph","doc-epilogue","doc-errata","doc-example","doc-foreword","doc-glossary","doc-index","doc-introduction","doc-notice","doc-pagelist","doc-part","doc-preface","doc-prologue","doc-pullquote","doc-qna","doc-toc"],shadowRoot:!0},select:{variant:{combobox:{matches:{attributes:{multiple:null,size:[null,"1"]}},allowedRoles:["menu"]},default:{allowedRoles:!1}},contentTypes:["interactive","phrasing","flow"],implicitAttrs:{"aria-valuenow":""},namingMethods:["labelText"]},slot:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},small:{contentTypes:["phrasing","flow"],allowedRoles:!0},source:{allowedRoles:!1,noAriaAttrs:!0},span:{contentTypes:["phrasing","flow"],allowedRoles:!0,shadowRoot:!0},strong:{contentTypes:["phrasing","flow"],allowedRoles:!0},style:{allowedRoles:!1,noAriaAttrs:!0},svg:{contentTypes:["embedded","phrasing","flow"],allowedRoles:!0,chromiumRole:"SVGRoot",namingMethods:["svgTitleText"]},sub:{contentTypes:["phrasing","flow"],allowedRoles:!0},summary:{allowedRoles:!1,namingMethods:["subtreeText"]},sup:{contentTypes:["phrasing","flow"],allowedRoles:!0},table:{contentTypes:["flow"],allowedRoles:!0,namingMethods:["tableCaptionText","tableSummaryText"]},tbody:{allowedRoles:!0},template:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},textarea:{contentTypes:["interactive","phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-valuenow":"","aria-multiline":"true"},namingMethods:["labelText","placeholderText"]},tfoot:{allowedRoles:!0},thead:{allowedRoles:!0},time:{contentTypes:["phrasing","flow"],allowedRoles:!0},title:{allowedRoles:!1,noAriaAttrs:!0},td:{allowedRoles:!0},th:{allowedRoles:!0},tr:{allowedRoles:!0},track:{allowedRoles:!1,noAriaAttrs:!0},u:{contentTypes:["phrasing","flow"],allowedRoles:!0},ul:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},var:{contentTypes:["phrasing","flow"],allowedRoles:!0},video:{variant:{controls:{matches:"[controls]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application"],chromiumRole:"video"},wbr:{contentTypes:["phrasing","flow"],allowedRoles:["presentation","none"]}},cssColors:{aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},Va=S({},Ha),za=Va,$a=function(e,t,n,r){this.red=e,this.green=t,this.blue=n,this.alpha=r,this.toHexString=function(){var e=Math.round(this.red).toString(16),t=Math.round(this.green).toString(16),n=Math.round(this.blue).toString(16)
return"#"+(this.red>15.5?e:"0"+e)+(this.green>15.5?t:"0"+t)+(this.blue>15.5?n:"0"+n)}
var a=/^#[0-9a-f]{3,8}$/i,o=/^((?:rgb|hsl)a?)\s*\(([^\)]*)\)/i
this.parseString=function(e){if(za.cssColors[e]||"transparent"===e){var t=O(za.cssColors[e]||[0,0,0],3),n=t[0],r=t[1],i=t[2]
return this.red=n,this.green=r,this.blue=i,void(this.alpha="transparent"===e?0:1)}if(e.match(o))this.parseColorFnString(e)
else{if(!e.match(a))throw new Error('Unable to parse color "'.concat(e,'"'))
this.parseHexString(e)}},this.parseRgbString=function(e){if("transparent"===e)return this.red=0,this.green=0,this.blue=0,void(this.alpha=0)
this.parseColorFnString(e)},this.parseHexString=function(e){if(e.match(a)&&![6,8].includes(e.length)){if((e=e.replace("#","")).length<6){var t=O(e,4),n=t[0],r=t[1],o=t[2],i=t[3]
e=n+n+r+r+o+o,i&&(e+=i+i)}var s=e.match(/.{1,2}/g)
this.red=parseInt(s[0],16),this.green=parseInt(s[1],16),this.blue=parseInt(s[2],16),s[3]?this.alpha=parseInt(s[3],16)/255:this.alpha=1}},this.parseColorFnString=function(e){var t=O(e.match(o)||[],3),n=t[1],r=t[2]
if(n&&r){var a=r.split(/\s*[,\/\s]\s*/).map((function(e){return e.replace(",","").trim()})).filter((function(e){return""!==e})).map((function(e,t){return function(e,t,n){if(/%$/.test(t))return 3===n?parseFloat(t)/100:255*parseFloat(t)/100
if("h"===e[n]){if(/turn$/.test(t))return 360*parseFloat(t)
if(/rad$/.test(t))return 57.3*parseFloat(t)}return parseFloat(t)}(n,e,t)}))
"hsl"===n.substr(0,3)&&(a=function(e){var t=O(e,4),n=t[0],r=t[1],a=t[2],o=t[3]
r/=255,a/=255
var i=(1-Math.abs(2*a-1))*r,s=i*(1-Math.abs(n/60%2-1)),l=a-i/2
return(n<60?[i,s,0]:n<120?[s,i,0]:n<180?[0,i,s]:n<240?[0,s,i]:n<300?[s,0,i]:[i,0,s]).map((function(e){return Math.round(255*(e+l))})).concat(o)}(a)),this.red=a[0],this.green=a[1],this.blue=a[2],this.alpha="number"==typeof a[3]?a[3]:1}},this.getRelativeLuminance=function(){var e=this.red/255,t=this.green/255,n=this.blue/255
return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))}},Wa=function(e){var t=new $a
if(t.parseString(e.getPropertyValue("background-color")),0!==t.alpha){var n=e.getPropertyValue("opacity")
t.alpha=t.alpha*n}return t},Ga=function(e){var t=n.getComputedStyle(e)
return La(e,t)||1===Wa(t).alpha},Ya=/^\/?#[^/!]/,Qa=function(e){return!!Ya.test(e.getAttribute("href"))&&(void 0!==Zn.get("firstPageLink")?t=Zn.get("firstPageLink"):(t=gi(i._tree,'a:not([href^="#"]):not([href^="/#"]):not([href^="javascript"])')[0],Zn.set("firstPageLink",t||null)),!t||e.compareDocumentPosition(t.actualNode)===e.DOCUMENT_POSITION_FOLLOWING)
var t},Ka=function(e,t){for(var r=["fixed","sticky"],a=[],o=!1,i=0;i<e.length;++i){var s=e[i]
s===t&&(o=!0)
var l=n.getComputedStyle(s)
o||-1===r.indexOf(l.position)?a.push(s):a=[]}return a}
function Ja(e,t){var n=Xa(t)
do{var r=Xa(e)
if(r===n||r===t)return Za(e,t)
e=r}while(e)
return!1}function Xa(e){for(var t=er(e).parent;t;){if(_o(t.actualNode))return t.actualNode
t=t.parent}}function Za(e,t){var r=n.getComputedStyle(t),a=r.getPropertyValue("overflow")
if("inline"===r.getPropertyValue("display"))return!0
var o=Array.from(e.getClientRects()),i=t.getBoundingClientRect(),s={left:i.left,top:i.top,width:i.width,height:i.height}
return(["scroll","auto"].includes(a)||t instanceof n.HTMLHtmlElement)&&(s.width=t.scrollWidth,s.height=t.scrollHeight),1===o.length&&"hidden"===a&&"nowrap"===r.getPropertyValue("white-space")&&(o[0]=s),o.some((function(e){return!(Math.ceil(e.left)<Math.floor(s.left)||Math.ceil(e.top)<Math.floor(s.top)||Math.floor(e.left+e.width)>Math.ceil(s.left+s.width)||Math.floor(e.top+e.height)>Math.ceil(s.top+s.height))}))}var eo=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
if(o>999)throw new Error("Infinite loop detected")
return Array.from(r.elementsFromPoint(t,n)||[]).filter((function(e){return Vr(e)===r})).reduce((function(r,a){if(Br(a)){var i=e(t,n,a.shadowRoot,o+1);(r=r.concat(i)).length&&Ja(r[0],a)&&r.push(a)}else r.push(a)
return r}),[])}
function to(e){var t={}
if(!e||!e.length)return t
var n=e.substring(1).split("&")
if(!n||!n.length)return t
for(var r=0;r<n.length;r++){var a=O(n[r].split("="),2),o=a[0],i=a[1],s=void 0===i?"":i
t[decodeURIComponent(o)]=decodeURIComponent(s)}return t}function no(e){if(!e)return""
var t=e.match(/#!?\/?/g)
return t?"#"===O(t,1)[0]?"":e:""}var ro,ao=function(e,t){if(e.hasAttribute(t)){var n=e.nodeName.toUpperCase(),r=e;["A","AREA"].includes(n)&&!e.ownerSVGElement||((r=a.createElement("a")).href=e.getAttribute(t))
var o,i=["https:","ftps:"].includes(r.protocol)?r.protocol.replace(/s:$/,":"):r.protocol,s=function(e){var t=e.split("/").pop()
return t&&-1!==t.indexOf(".")?{pathname:e.replace(t,""),filename:/index./.test(t)?"":t}:{pathname:e,filename:""}}(/^\//.test(r.pathname)?r.pathname:"/".concat(r.pathname)),l=s.pathname,u=s.filename
return{protocol:i,hostname:r.hostname,port:(o=r.port,["443","80"].includes(o)?"":o),pathname:/\/$/.test(l)?l:"".concat(l,"/"),search:to(r.search),hash:no(r.hash),filename:u}}},oo=function(e,t){var r=t.getBoundingClientRect(),a=r.top,o=r.left,i=a-t.scrollTop,s=a-t.scrollTop+t.scrollHeight,l=o-t.scrollLeft,u=o-t.scrollLeft+t.scrollWidth
if(e.left>u&&e.left>r.right||e.top>s&&e.top>r.bottom||e.right<l&&e.right<r.left||e.bottom<i&&e.bottom<r.top)return!1
var c=n.getComputedStyle(t)
return!(e.left>r.right||e.top>r.bottom)||"scroll"===c.overflow||"auto"===c.overflow||t instanceof n.HTMLBodyElement||t instanceof n.HTMLHtmlElement},io=0,so=function(e){A(r,e)
var t=k(r)
function r(e,n,a){var o
if(I(this,r),(o=t.call(this)).shadowId=a,o.children=[],o.actualNode=e,o.parent=n,n||(io=0),o.nodeIndex=io++,o._isHidden=null,o._cache={},void 0===ro&&(ro=Pn(e.ownerDocument)),o._isXHTML=ro,"input"===e.nodeName.toLowerCase()){var i=e.getAttribute("type")
i=o._isXHTML?i:(i||"").toLowerCase(),ki().includes(i)||(i="text"),o._type=i}return Zn.get("nodeMap")&&Zn.get("nodeMap").set(e,T(o)),o}return j(r,[{key:"props",get:function(){if(!this._cache.hasOwnProperty("props")){var e=this.actualNode,t=e.nodeType,n=e.nodeName,r=e.id,a=e.multiple,o=e.nodeValue,i=e.value,s=e.selected
this._cache.props={nodeType:t,nodeName:this._isXHTML?n:n.toLowerCase(),id:r,type:this._type,multiple:a,nodeValue:o,value:i,selected:s}}return this._cache.props}},{key:"attr",value:function(e){return"function"!=typeof this.actualNode.getAttribute?null:this.actualNode.getAttribute(e)}},{key:"hasAttr",value:function(e){return"function"==typeof this.actualNode.hasAttribute&&this.actualNode.hasAttribute(e)}},{key:"attrNames",get:function(){var e
return this._cache.hasOwnProperty("attrNames")||(e=this.actualNode.attributes instanceof n.NamedNodeMap?this.actualNode.attributes:this.actualNode.cloneNode(!1).attributes,this._cache.attrNames=Array.from(e).map((function(e){return e.name}))),this._cache.attrNames}},{key:"getComputedStylePropertyValue",value:function(e){var t="computedStyle_"+e
return this._cache.hasOwnProperty(t)||(this._cache.hasOwnProperty("computedStyle")||(this._cache.computedStyle=n.getComputedStyle(this.actualNode)),this._cache[t]=this._cache.computedStyle.getPropertyValue(e)),this._cache[t]}},{key:"isFocusable",get:function(){return this._cache.hasOwnProperty("isFocusable")||(this._cache.isFocusable=Ta(this.actualNode)),this._cache.isFocusable}},{key:"tabbableElements",get:function(){return this._cache.hasOwnProperty("tabbableElements")||(this._cache.tabbableElements=pa(this)),this._cache.tabbableElements}},{key:"clientRects",get:function(){return this._cache.hasOwnProperty("clientRects")||(this._cache.clientRects=Array.from(this.actualNode.getClientRects()).filter((function(e){return e.width>0}))),this._cache.clientRects}},{key:"boundingClientRect",get:function(){return this._cache.hasOwnProperty("boundingClientRect")||(this._cache.boundingClientRect=this.actualNode.getBoundingClientRect()),this._cache.boundingClientRect}}]),r}(_t)
function lo(e,t,r){var a,o,i
function s(e,n,r){var a=lo(n,t,r)
return a&&(e=e.concat(a)),e}return e.documentElement&&(e=e.documentElement),i=e.nodeName.toLowerCase(),Br(e)?(a=new so(e,r,t),t="a"+Math.random().toString().substring(2),o=Array.from(e.shadowRoot.childNodes),a.children=o.reduce((function(e,t){return s(e,t,a)}),[]),[a]):"content"===i&&"function"==typeof e.getDistributedNodes?(o=Array.from(e.getDistributedNodes())).reduce((function(e,t){return s(e,t,r)}),[]):"slot"===i&&"function"==typeof e.assignedNodes?((o=Array.from(e.assignedNodes())).length||(o=function(e){var t=[]
for(e=e.firstChild;e;)t.push(e),e=e.nextSibling
return t}(e)),n.getComputedStyle(e),o.reduce((function(e,t){return s(e,t,r)}),[])):1===e.nodeType?(a=new so(e,r,t),o=Array.from(e.childNodes),a.children=o.reduce((function(e,t){return s(e,t,a)}),[]),[a]):3===e.nodeType?[new so(e,r)]:void 0}var uo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.documentElement,t=arguments.length>1?arguments[1]:void 0
return Zn.set("nodeMap",new WeakMap),lo(e,t,null)},co=function(e){return e?e.trim().split("-")[0].toLowerCase():""},po=function(e){var t={}
return t.none=e.none.concat(e.all),t.any=e.any,Object.keys(t).map((function(e){if(t[e].length){var n=i._audit.data.failureSummaries[e]
return n&&"function"==typeof n.failureMessage?n.failureMessage(t[e].map((function(e){return e.message||""}))):void 0}})).filter((function(e){return void 0!==e})).join("\n\n")},fo=function(){return"function"==typeof i._audit.data.incompleteFallbackMessage?i._audit.data.incompleteFallbackMessage():i._audit.data.incompleteFallbackMessage},ho=Tt.resultGroups,mo=function(e,t){var n=i.utils.aggregateResult(e)
return ho.forEach((function(e){t.resultTypes&&!t.resultTypes.includes(e)&&(n[e]||[]).forEach((function(e){Array.isArray(e.nodes)&&e.nodes.length>0&&(e.nodes=[e.nodes[0]])})),n[e]=(n[e]||[]).map((function(e){return e=Object.assign({},e),Array.isArray(e.nodes)&&e.nodes.length>0&&(e.nodes=e.nodes.map((function(e){return"object"===o(e.node)&&(e.html=e.node.source,t.elementRef&&!e.node.fromFrame&&(e.element=e.node.element),(!1!==t.selectors||e.node.fromFrame)&&(e.target=e.node.selector),t.ancestry&&(e.ancestry=e.node.ancestry),t.xpath&&(e.xpath=e.node.xpath)),delete e.result,delete e.node,function(e,t){["any","all","none"].forEach((function(n){Array.isArray(e[n])&&e[n].filter((function(e){return Array.isArray(e.relatedNodes)})).forEach((function(e){e.relatedNodes=e.relatedNodes.map((function(e){var n={html:e.source}
return t.elementRef&&!e.fromFrame&&(n.element=e.element),(!1!==t.selectors||e.fromFrame)&&(n.target=e.selector),t.ancestry&&(n.ancestry=e.ancestry),t.xpath&&(n.xpath=e.xpath),n}))}))}))}(e,t),e}))),ho.forEach((function(t){return delete e[t]})),delete e.pageLevel,delete e.result,e}))})),n}
i._thisWillBeDeletedDoNotUse=i._thisWillBeDeletedDoNotUse||{},i._thisWillBeDeletedDoNotUse.helpers={failureSummary:po,incompleteFallbackMessage:fo,processAggregate:mo}
var go=/\$\{\s?data\s?\}/g
function vo(e,t){if("string"==typeof t)return e.replace(go,t)
for(var n in t)if(t.hasOwnProperty(n)){var r=new RegExp("\\${\\s?data\\."+n+"\\s?}","g"),a=void 0===t[n]?"":String(t[n])
e=e.replace(r,a)}return e}var bo=function e(t,n){if(t){if(Array.isArray(n))return n.values=n.join(", "),"string"==typeof t.singular&&"string"==typeof t.plural?vo(1===n.length?t.singular:t.plural,n):vo(t,n)
if("string"==typeof t)return vo(t,n)
if("string"==typeof n)return vo(t[n],n)
var r=t.default||fo()
return n&&n.messageKey&&t[n.messageKey]&&(r=t[n.messageKey]),e(r,n)}},yo=function(e,t,n){var r=i._audit.data.checks[e]
if(!r)throw new Error("Cannot get message for unknown check: ".concat(e,"."))
if(!r.messages[t])throw new Error('Check "'.concat(e,'"" does not have a "').concat(t,'" message.'))
return bo(r.messages[t],n)},wo=function(e,t,n){var r=((n.rules&&n.rules[t]||{}).checks||{})[e.id],a=(n.checks||{})[e.id],o=e.enabled,i=e.options
return a&&(a.hasOwnProperty("enabled")&&(o=a.enabled),a.hasOwnProperty("options")&&(i=a.options)),r&&(r.hasOwnProperty("enabled")&&(o=r.enabled),r.hasOwnProperty("options")&&(i=r.options)),{enabled:o,options:i,absolutePaths:n.absolutePaths}}
function Do(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n
return t&&"object"===o(t)?t:"object"!==o(r)?{}:{testEngine:{name:"axe-core",version:i.version},testRunner:{name:i._audit.brand},testEnvironment:xo(r),timestamp:(new Date).toISOString(),url:null===(e=r.location)||void 0===e?void 0:e.href}}function xo(e){if(!e.navigator||"object"!==o(e.navigator))return{}
var t,n=e.navigator,r=e.innerHeight,a=e.innerWidth,i=(t=e.screen).orientation||t.msOrientation||t.mozOrientation||{},s=i.angle,l=i.type
return{userAgent:n.userAgent,windowWidth:a,windowHeight:r,orientationAngle:s,orientationType:l}}function Eo(e,t){var n=t.focusable,r=t.page
return{node:e,include:[],exclude:[],initiator:!1,focusable:n&&Ao(e),size:Co(e),page:r}}function Ao(e){var t=e.getAttribute("tabindex")
if(!t)return!0
var n=parseInt(t,10)
return isNaN(n)||n>=0}function Co(e){var t=parseInt(e.getAttribute("width"),10),n=parseInt(e.getAttribute("height"),10)
if(isNaN(t)||isNaN(n)){var r=e.getBoundingClientRect()
t=isNaN(t)?r.width:t,n=isNaN(n)?r.height:n}return{width:t,height:n}}function ko(e,t,n){e.frames=e.frames||[]
var r=n.shift(),o=a.querySelectorAll(r)
Array.from(o).forEach((function(r){if(e.frames.forEach((function(e){e.node===r&&e[t].push(n)})),!e.frames.find((function(e){return e.node===r}))){var a=Eo(r,e)
n&&a[t].push(n),e.frames.push(a)}}))}function Fo(e,t){for(var r,o,i=[],s=0,l=e[t].length;s<l;s++){if("string"==typeof(r=e[t][s])){o=Array.from(a.querySelectorAll(r)),i=i.concat(o.map((function(e){return er(e)})))
break}!r||!r.length||r instanceof n.Node?r instanceof n.Node&&(r.documentElement instanceof n.Node?i.push(e.flatTree[0]):i.push(er(r))):r.length>1?ko(e,t,r):(o=Array.from(a.querySelectorAll(r[0])),i=i.concat(o.map((function(e){return er(e)}))))}return i.filter((function(e){return e}))}function To(e,t){var r,i,s,l,u,c=this
e=or(e),this.frames=[],this.page="boolean"==typeof(null===(r=e)||void 0===r?void 0:r.page)?e.page:void 0,this.initiator="boolean"!=typeof(null===(i=e)||void 0===i?void 0:i.initiator)||e.initiator,this.focusable="boolean"!=typeof(null===(s=e)||void 0===s?void 0:s.focusable)||e.focusable,this.size="object"===o(null===(l=e)||void 0===l?void 0:l.size)?e.size:{},e=function(e){if(e&&"object"===o(e)||e instanceof n.NodeList){if(e instanceof n.Node)return{include:[e],exclude:[]}
if(e.hasOwnProperty("include")||e.hasOwnProperty("exclude"))return{include:e.include&&+e.include.length?e.include:[a],exclude:e.exclude||[]}
if(e.length===+e.length)return{include:e,exclude:[]}}return"string"==typeof e?{include:[e],exclude:[]}:{include:[a],exclude:[]}}(e),this.flatTree=null!=t?t:uo(function(e){for(var t=e.include,r=e.exclude,o=Array.from(t).concat(Array.from(r)),i=0;i<o.length;++i){var s=o[i]
if(s instanceof n.Element)return s.ownerDocument.documentElement
if(s instanceof n.Document)return s.documentElement}return a.documentElement}(e)),this.exclude=e.exclude,this.include=e.include,this.include=Fo(this,"include"),this.exclude=Fo(this,"exclude"),Di("frame, iframe",this).forEach((function(e){Uo(e,c)&&function(e,t){qo(t)||Or(e.frames,"node",t)||e.frames.push(Eo(t,e))}(c,e.actualNode)})),void 0===this.page&&(this.page=1===(u=this.include).length&&u[0].actualNode===a.documentElement,this.frames.forEach((function(e){e.page=c.page})))
var d=function(e){if(0===e.include.length){if(0===e.frames.length){var t=Fr.isInFrame()?"frame":"page"
return new Error("No elements found for include in "+t+" Context")}e.frames.forEach((function(e,t){if(0===e.include.length)return new Error("No elements found for include in Context of frame "+t)}))}}(this)
if(d instanceof Error)throw d
Array.isArray(this.include)||(this.include=Array.from(this.include)),this.include.sort($o)}function No(e){return new To(e).frames.map((function(e){var t=e.node,n=R(e,u)
return n.initiator=!1,{frameSelector:Qn(t),frameContext:n}}))}var Ro=function(e){var t=i._audit.rules.find((function(t){return t.id===e}))
if(!t)throw new Error("Cannot find rule by id: ".concat(e))
return t},_o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e.scrollWidth>e.clientWidth+t,a=e.scrollHeight>e.clientHeight+t
if(r||a){var o=n.getComputedStyle(e),i=o.getPropertyValue("overflow-x"),s=o.getPropertyValue("overflow-y"),l="visible"!==i&&"hidden"!==i,u="visible"!==s&&"hidden"!==s
return r&&l||a&&u?{elm:e,top:e.scrollTop,left:e.scrollLeft}:void 0}}
function Oo(e){return Array.from(e.children||e.childNodes||[]).reduce((function(e,t){var n=_o(t)
return n&&e.push(n),e.concat(Oo(t))}),[])}var So=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=e.document.documentElement,r=[void 0!==e.pageXOffset?{elm:e,top:e.pageYOffset,left:e.pageXOffset}:{elm:t,top:t.scrollTop,left:t.scrollLeft}]
return r.concat(Oo(a.body))}
function Io(){return or(za)}var Po,jo=function(e){if(!e)throw new Error("axe.utils.getStyleSheetFactory should be invoked with an argument")
return function(t){var n=t.data,r=t.isCrossOrigin,a=void 0!==r&&r,o=t.shadowId,i=t.root,s=t.priority,l=t.isLink,u=void 0!==l&&l,c=e.createElement("style")
if(u){var d=e.createTextNode('@import "'.concat(n.href,'"'))
c.appendChild(d)}else c.appendChild(e.createTextNode(n))
return e.head.appendChild(c),{sheet:c.sheet,isCrossOrigin:a,shadowId:o,root:i,priority:s}}},Mo=function(e){if(Po&&Po.parentNode)return void 0===Po.styleSheet?Po.appendChild(a.createTextNode(e)):Po.styleSheet.cssText+=e,Po
if(e){var t=a.head||a.getElementsByTagName("head")[0]
return(Po=a.createElement("style")).type="text/css",void 0===Po.styleSheet?Po.appendChild(a.createTextNode(e)):Po.styleSheet.cssText=e,t.appendChild(Po),Po}},qo=function e(t,r){var a=er(t)
if(9===t.nodeType)return!1
if(11===t.nodeType&&(t=t.host),a&&null!==a._isHidden)return a._isHidden
var o=n.getComputedStyle(t,null)
if(!o||!t.parentNode||"none"===o.getPropertyValue("display")||!r&&"hidden"===o.getPropertyValue("visibility")||"true"===t.getAttribute("aria-hidden"))return!0
var i=e(t.assignedSlot?t.assignedSlot:t.parentNode,!0)
return a&&(a._isHidden=i),i},Lo=function(e){var t,n,r=null!==(t=null===(n=e.props)||void 0===n?void 0:n.nodeName)&&void 0!==t?t:e.nodeName.toLowerCase()
return"http://www.w3.org/2000/svg"!==e.namespaceURI&&!!za.htmlElms[r]}
function Bo(e){return e.sort((function(e,t){return jr(e,t)?1:-1}))[0]}var Uo=function(e,t){var n=t.include&&Bo(t.include.filter((function(t){return jr(t,e)}))),r=t.exclude&&Bo(t.exclude.filter((function(t){return jr(t,e)})))
return!!(!r&&n||r&&jr(r,n))},Ho=function(e,t){return e.length===t.length&&e.every((function(e,n){var r=t[n]
return Array.isArray(e)?e.length===r.length&&e.every((function(e,t){return r[t]===e})):e===r}))},Vo=U(Dt())
i._memoizedFns=[]
var zo=function(e){var t=Vo.default(e)
return i._memoizedFns.push(t),t},$o=function(e,t){return(e=e.actualNode||e)===(t=t.actualNode||t)?0:4&e.compareDocumentPosition(t)?-1:1},Wo=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=Array.from(e.cssRules)
if(!o)return Promise.resolve()
var i=o.filter((function(e){return 3===e.type}))
if(!i.length)return Promise.resolve({isCrossOrigin:a,priority:n,root:t.rootNode,shadowId:t.shadowId,sheet:e})
var s=i.filter((function(e){return e.href})).map((function(e){return e.href})).filter((function(e){return!r.includes(e)})),l=s.map((function(e,a){var o=[].concat(_(n),[a]),i=/^https?:\/\/|^\/\//i.test(e)
return Zo(e,t,o,r,i)})),u=o.filter((function(e){return 3!==e.type}))
return u.length?(l.push(Promise.resolve(t.convertDataToStylesheet({data:u.map((function(e){return e.cssText})).join(),isCrossOrigin:a,priority:n,root:t.rootNode,shadowId:t.shadowId}))),Promise.all(l)):Promise.all(l)}
function Go(e){try{return!(!e.cssRules&&e.href)}catch(e){return!1}}var Yo,Qo,Ko,Jo,Xo=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=Go(e)
return o?Wo(e,t,n,r,a):Zo(e.href,t,n,r,!0)},Zo=function(e,t,n,r,a){return r.push(e),new Promise((function(t,n){var r=new XMLHttpRequest
r.open("GET",e),r.timeout=Tt.preload.timeout,r.addEventListener("error",n),r.addEventListener("timeout",n),r.addEventListener("loadend",(function(e){if(e.loaded&&r.responseText)return t(r.responseText)
n(r.responseText)})),r.send()})).then((function(e){var o=t.convertDataToStylesheet({data:e,isCrossOrigin:a,priority:n,root:t.rootNode,shadowId:t.shadowId})
return Xo(o.sheet,t,n,r,o.isCrossOrigin)}))},ei=function(){function e(){if(n.performance&&n.performance)return n.performance.now()}var t=null,r=e()
return{start:function(){this.mark("mark_axe_start")},end:function(){this.mark("mark_axe_end"),this.measure("axe","mark_axe_start","mark_axe_end"),this.logMeasures("axe")},auditStart:function(){this.mark("mark_audit_start")},auditEnd:function(){this.mark("mark_audit_end"),this.measure("audit_start_to_end","mark_audit_start","mark_audit_end"),this.logMeasures()},mark:function(e){n.performance&&void 0!==n.performance.mark&&n.performance.mark(e)},measure:function(e,t,r){n.performance&&void 0!==n.performance.measure&&n.performance.measure(e,t,r)},logMeasures:function(e){function t(e){Nt("Measure "+e.name+" took "+e.duration+"ms")}if(n.performance&&void 0!==n.performance.getEntriesByType)for(var r=n.performance.getEntriesByName("mark_axe_start")[0],a=n.performance.getEntriesByType("measure").filter((function(e){return e.startTime>=r.startTime})),o=0;o<a.length;++o){var i=a[o]
if(i.name===e)return void t(i)
t(i)}},timeElapsed:function(){return e()-r},reset:function(){t||(t=e()),r=e()}}}()
function ti(){if(a.elementsFromPoint)return a.elementsFromPoint
if(a.msElementsFromPoint)return a.msElementsFromPoint
var e,t=((e=a.createElement("x")).style.cssText="pointer-events:auto","auto"===e.style.pointerEvents),n=t?"pointer-events":"visibility",r=t?"none":"hidden",o=a.createElement("style")
return o.innerHTML=t?"* { pointer-events: all }":"* { visibility: visible }",function(e,t){var i,s,l,u=[],c=[]
for(a.head.appendChild(o);(i=a.elementFromPoint(e,t))&&-1===u.indexOf(i);)u.push(i),c.push({value:i.style.getPropertyValue(n),priority:i.style.getPropertyPriority(n)}),i.style.setProperty(n,r,"important")
for(u.indexOf(a.documentElement)<u.length-1&&(u.splice(u.indexOf(a.documentElement),1),u.push(a.documentElement)),s=c.length;l=c[--s];)u[s].style.setProperty(n,l.value?l.value:"",l.priority)
return a.head.removeChild(o),u}}"function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object")
for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n]
if(null!=r)for(var a in r)r.hasOwnProperty(a)&&(t[a]=r[a])}return t}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined")
if("function"!=typeof e)throw new TypeError("predicate must be a function")
for(var t,n=Object(this),r=n.length>>>0,a=arguments[1],o=0;o<r;o++)if(t=n[o],e.call(a,t,o,n))return t}}),Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e,t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined")
if("function"!=typeof e)throw new TypeError("predicate must be a function")
for(var n,r=Object(this),a=r.length>>>0,o=0;o<a;o++)if(n=r[o],e.call(t,n,o,r))return o
return-1}}),"function"==typeof n.addEventListener&&(a.elementsFromPoint=ti()),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e){var t=Object(this),n=parseInt(t.length,10)||0
if(0===n)return!1
var r,a,o=parseInt(arguments[1],10)||0
for(o>=0?r=o:(r=n+o)<0&&(r=0);r<n;){if(e===(a=t[r])||e!=e&&a!=a)return!0
r++}return!1}}),Array.prototype.some||Object.defineProperty(Array.prototype,"some",{value:function(e){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined")
if("function"!=typeof e)throw new TypeError
for(var t=Object(this),n=t.length>>>0,r=arguments.length>=2?arguments[1]:void 0,a=0;a<n;a++)if(a in t&&e.call(r,t[a],a,t))return!0
return!1}}),Array.from||Object.defineProperty(Array,"from",{value:(Yo=Object.prototype.toString,Qo=function(e){return"function"==typeof e||"[object Function]"===Yo.call(e)},Ko=Math.pow(2,53)-1,Jo=function(e){var t=function(e){var t=Number(e)
return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e)
return Math.min(Math.max(t,0),Ko)},function(e){var t=this,n=Object(e)
if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined")
var r,a=arguments.length>1?arguments[1]:void 0
if(void 0!==a){if(!Qo(a))throw new TypeError("Array.from: when provided, the second argument must be a function")
arguments.length>2&&(r=arguments[2])}for(var o,i=Jo(n.length),s=Qo(t)?Object(new t(i)):new Array(i),l=0;l<i;)o=n[l],s[l]=a?void 0===r?a(o,l):a.call(r,o,l):o,l+=1
return s.length=i,s})}),String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)}),Array.prototype.flat||Object.defineProperty(Array.prototype,"flat",{configurable:!0,value:function e(){var t=isNaN(arguments[0])?1:Number(arguments[0])
return t?Array.prototype.reduce.call(this,(function(n,r){return Array.isArray(r)?n.push.apply(n,e.call(r,t-1)):n.push(r),n}),[]):Array.prototype.slice.call(this)},writable:!0})
var ni=function(e,t){return e.concat(t).filter((function(e,t,n){return n.indexOf(e)===t}))}
function ri(e,t,n,r,a){var o=a||{}
return o.vNodes=e,o.vNodesIndex=0,o.anyLevel=t,o.thisLevel=n,o.parentShadowId=r,o}var ai=[],oi=function(e,t,n){return function(e,t,n){for(var r=[],a=ri(Array.isArray(e)?e:[e],t,null,e[0].shadowId,ai.pop()),o=[];a.vNodesIndex<a.vNodes.length;){for(var i,s,l=a.vNodes[a.vNodesIndex++],u=null,c=null,d=((null===(i=a.anyLevel)||void 0===i?void 0:i.length)||0)+((null===(s=a.thisLevel)||void 0===s?void 0:s.length)||0),p=!1,f=0;f<d;f++){var h,m,g,v=f<((null===(h=a.anyLevel)||void 0===h?void 0:h.length)||0)?a.anyLevel[f]:a.thisLevel[f-((null===(m=a.anyLevel)||void 0===m?void 0:m.length)||0)]
if((!v[0].id||l.shadowId===a.parentShadowId)&&br(l,v[0]))if(1===v.length)p||n&&!n(l)||(o.push(l),p=!0)
else{var b=v.slice(1)
if(!1===[" ",">"].includes(b[0].combinator))throw new Error("axe.utils.querySelectorAll does not support the combinator: "+v[1].combinator)
">"===b[0].combinator?(u=u||[]).push(b):(c=c||[]).push(b)}v[0].id&&l.shadowId!==a.parentShadowId||null===(g=a.anyLevel)||void 0===g||!g.includes(v)||(c=c||[]).push(v)}for(l.children&&l.children.length&&(r.push(a),a=ri(l.children,c,u,l.shadowId,ai.pop()));a.vNodesIndex===a.vNodes.length&&r.length;)ai.push(a),a=r.pop()}return o}(e=Array.isArray(e)?e:[e],gr(t),n)},ii=function(e){var t=e.treeRoot,n=function(e){var t=[],n=oi(e,"*",(function(e){return!t.includes(e.shadowId)&&(t.push(e.shadowId),!0)})).map((function(e){return{shadowId:e.shadowId,rootNode:Hr(e.actualNode)}}))
return ni(n,[])}(void 0===t?i._tree[0]:t)
if(!n.length)return Promise.resolve()
var r=a.implementation.createHTMLDocument("Dynamic document for loading cssom")
return function(e,t){var n=[]
return e.forEach((function(e,r){var a=e.rootNode,o=e.shadowId,i=function(e,t,n){return function(e){var t=[]
return e.filter((function(e){return!e.href||!t.includes(e.href)&&(t.push(e.href),!0)}))}(11===e.nodeType&&t?function(e,t){return Array.from(e.children).filter(li).reduce((function(n,r){var a=r.nodeName.toUpperCase(),o="STYLE"===a?r.textContent:r,i=t({data:o,isLink:"LINK"===a,root:e})
return n.push(i.sheet),n}),[])}(e,n):function(e){return Array.from(e.styleSheets).filter((function(e){return ui(e.media.mediaText)}))}(e))}(a,o,t)
if(!i)return Promise.all(n)
var s=r+1,l={rootNode:a,shadowId:o,convertDataToStylesheet:t,rootIndex:s},u=[],c=Promise.all(i.map((function(e,t){return Xo(e,l,[s,t],u)})))
n.push(c)})),Promise.all(n)}(n,jo(r)).then((function(e){return si(e)}))}
function si(e){return e.reduce((function(e,t){return Array.isArray(t)?e.concat(si(t)):e.concat(t)}),[])}function li(e){var t=e.nodeName.toUpperCase(),n=e.getAttribute("href"),r=e.getAttribute("rel"),a="LINK"===t&&n&&r&&e.rel.toUpperCase().includes("STYLESHEET")
return"STYLE"===t||a&&ui(e.media)}function ui(e){return!e||!e.toUpperCase().includes("PRINT")}var ci=function(e){var t=e.treeRoot,n=void 0===t?i._tree[0]:t,r=oi(n,"video, audio",(function(e){var t=e.actualNode
return t.hasAttribute("src")?!!t.getAttribute("src"):!(Array.from(t.getElementsByTagName("source")).filter((function(e){return!!e.getAttribute("src")})).length<=0)}))
return Promise.all(r.map((function(e){var t,n=e.actualNode
return t=n,new Promise((function(e){t.readyState>0&&e(t),t.addEventListener("loadedmetadata",(function n(){t.removeEventListener("loadedmetadata",n),e(t)}))}))})))}
function di(e){return!e||void 0===e.preload||null===e.preload||("boolean"==typeof e.preload?e.preload:(t=e.preload,"object"===o(t)&&Array.isArray(t.assets)))
var t}function pi(e){var t=Tt.preload,n=t.assets,r=t.timeout,a={assets:n,timeout:r}
if(!e.preload)return a
if("boolean"==typeof e.preload)return a
if(!e.preload.assets.every((function(e){return n.includes(e.toLowerCase())})))throw new Error("Requested assets, not supported. Supported assets are: ".concat(n.join(", "),"."))
return a.assets=ni(e.preload.assets.map((function(e){return e.toLowerCase()})),[]),e.preload.timeout&&"number"==typeof e.preload.timeout&&!isNaN(e.preload.timeout)&&(a.timeout=e.preload.timeout),a}var fi=function(e){var t={cssom:ii,media:ci}
return di(e)?new Promise((function(n,r){var a=pi(e),o=a.assets,i=a.timeout,s=setTimeout((function(){return r(new Error("Preload assets timed out."))}),i)
Promise.all(o.map((function(n){return t[n](e).then((function(e){return a=e,(r=n)in(t={})?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t
var t,r,a}))}))).then((function(e){var t=e.reduce((function(e,t){return S({},e,t)}),{})
clearTimeout(s),n(t)})).catch((function(e){clearTimeout(s),r(e)}))})):Promise.resolve()}
function hi(e,t,n){return function(r){var a=e[r.id]||{},i=a.messages||{},s=Object.assign({},a)
delete s.messages,n.reviewOnFail||void 0!==r.result?s.message=r.result===t?i.pass:i.fail:("object"!==o(i.incomplete)||Array.isArray(r.data)||(s.message=function(e,t){function n(e){return e.incomplete&&e.incomplete.default?e.incomplete.default:fo()}if(!e||!e.missingData)return e&&e.messageKey?t.incomplete[e.messageKey]:n(t)
try{var r=t.incomplete[e.missingData[0].reason]
if(!r)throw new Error
return r}catch(r){return"string"==typeof e.missingData?t.incomplete[e.missingData]:n(t)}}(r.data,i)),s.message||(s.message=i.incomplete)),"function"!=typeof s.message&&(s.message=bo(s.message,r.data)),qr(r,s)}}var mi=function(e){var t=i._audit.data.checks||{},n=i._audit.data.rules||{},r=Or(i._audit.rules,"id",e.id)||{}
e.tags=or(r.tags||[])
var a=hi(t,!0,r),o=hi(t,!1,r)
e.nodes.forEach((function(e){e.any.forEach(a),e.all.forEach(a),e.none.forEach(o)})),qr(e,or(n[e.id]||{}))},gi=function(e,t){return oi(e,t)}
function vi(e,t){var n,r,a=i._audit&&i._audit.tagExclude?i._audit.tagExclude:[]
return t.hasOwnProperty("include")||t.hasOwnProperty("exclude")?(n=t.include||[],n=Array.isArray(n)?n:[n],r=t.exclude||[],r=(r=Array.isArray(r)?r:[r]).concat(a.filter((function(e){return-1===n.indexOf(e)})))):(n=Array.isArray(t)?t:[t],r=a.filter((function(e){return-1===n.indexOf(e)}))),!!(n.some((function(t){return-1!==e.tags.indexOf(t)}))||0===n.length&&!1!==e.enabled)&&r.every((function(t){return-1===e.tags.indexOf(t)}))}var bi=function(e,t,n){var r=n.runOnly||{},a=(n.rules||{})[e.id]
return!(e.pageLevel&&!t.page)&&("rule"===r.type?-1!==r.values.indexOf(e.id):a&&"boolean"==typeof a.enabled?a.enabled:"tag"===r.type&&r.values?vi(e,r.values):vi(e,[]))},yi=function e(t,n){if(!n)return t
var r=t.cloneNode(!1),o=r.outerHTML,i=Sn(r)
return Zn.get(o)?r=Zn.get(o):i&&(r=a.createElement(r.nodeName),Array.from(i).forEach((function(e){(function(e,t,n){return void 0!==n[t]&&(!0===n[t]||In(e,n[t]))})(t,e.name,n)||r.setAttribute(e.name,e.value)})),Zn.set(o,r)),Array.from(t.childNodes).forEach((function(t){r.appendChild(e(t,n))})),r}
function wi(e,t){var n
if(0===e.length)return t
e.length<t.length&&(n=e,e=t,t=n)
for(var r=0,a=t.length;r<a;r++)e.includes(t[r])||e.push(t[r])
return e}var Di=function(e,t){var n,r=[]
if(i._selectCache)for(var a=0,o=i._selectCache.length;a<o;a++){var s=i._selectCache[a]
if(s.selector===e)return s.result}for(var l,u=(l=t,function(e){return Uo(e,l)}),c=t.include.reduce((function(e,t){return e.length&&jr(e[e.length-1],t)||e.push(t),e}),[]),d=0;d<c.length;d++)n=c[d],r=wi(r,oi(n,e,u))
return i._selectCache&&i._selectCache.push({selector:e,result:r}),r},xi=function(e){e.forEach((function(e){return function(e,t,r){if(e===n)return e.scroll(r,t)
e.scrollTop=t,e.scrollLeft=r}(e.elm,e.top,e.left)}))}
function Ei(e){return Ai(Array.isArray(e)?_(e):[e],a)}function Ai(e,t){var n=e.shift(),r=n?t.querySelector(n):null
return 0===e.length?r:null!=r&&r.shadowRoot?Ai(e,r.shadowRoot):null}var Ci=function(e){return(e||"").trim().replace(/\s{2,}/g," ").split(" ")},ki=function(){return["hidden","text","search","tel","url","email","password","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]},Fi=[,[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,,,,,1,1,1,1,,,1,1,1,,1,,1,,1,1],[1,1,1,,1,1,,1,1,1,,1,,,1,1,1,,,1,1,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,,,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1],[,1,,,,,,1,,1,,,,,1,,1,,,,1,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,,,1,,,,,1,1,1,,1,,1,,1,,,,,,1],[1,,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,,1,,1,,,,,1,,1,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,,1,1,1,,1,,1,1,1,,,1,1,1,1,1,1,1,1],[,,1,,,1,,1,,,,1,1,1,,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1,1,1,1,1,,,1,1,1],[1,1,1,1,1,,,1,,,1,,,1,1,1,,,,,1,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1],[,1,,1,1,1,,1,1,,1,,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,,,1,1,1,,,1,1,,,,,,1,1],[1,1,1,,,,,1,,,,1,1,,1,,,,,,1,,,,,1],[,1,,,1,,,1,,,,,,1],[,1,,1,,,,1,,,,1],[1,,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,,1,,,1,1,1,1],[,1,1,1,1,1,,,1,,,1,,1,1,,1,,1,,,,,1,,1],[,1,,,,1,,,1,1,,1,,1,1,1,1,,1,1,,,1,,,1],[,1,1,,,,,,1,,,,1,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,,1,1,1,,,1,1,1,1,1,1,,1,,,,,1,1,,1,,1],[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,1,1],[,1,1,1,,,,1,1,1,,1,1,,,1,1,,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,,1,,,,,1,1,1,,,1,,1,,,1,1],[,,,,1,,,,,,,,,,,,,,,,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,,1,1,1,,1,1,,,,1,1,1,1,1,,,1,1,1,,,,,1],[1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,1,,,,,,,1],[,1,1,,1,1,,1,,,,,,,,,,,,,1],,[1,1,1,,,,,,,,,,,,,1],[,,,,,,,,1,,,1,,,1,1,,,,,1]],[,[1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,,1],[,,,1,,,,,,,,,,,,,,,1],[,1,,,1,1,,1,,1,1,,,,1,1,,,1,1,,,,1],[1,,,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,,,,1],,[,1,1,1,1,1,,1,1,1,,1,1,,1,1,,,1,1,1,1,,1,1,,1],[,1,,,1,,,1,,1,,,1,1,1,1,,,1,1,,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,,,1,1,1,1,1,1,1,,,1,,,1,,1],[,1,,,,,,,,,,1,1,,,,,,1,1,,,,,1],[,,,,,,,1,,,,1,,1,1],[,1,1,1,1,1,1,1,,,,1,1,1,1,1,,,1,1,,1,1,1,1,1],[,1,,,1,1,,1,,1,1,1,,,1,1,,,1,,1,1,1,1,,1],[,1,1,1,,1,1,,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1],[,,,,,,,,,,,,,,,,1],,[,1,1,1,1,1,,1,1,1,,,1,,1,1,,1,1,1,1,1,,1,,1],[,,1,,,1,,,1,1,,,1,,1,1,,1],[,1,1,,1,,,,1,1,,1,,1,1,1,1,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1],[,1,,,,,,,,,,1,1,,,,,,1,1,,1,,1,,1,1],,[,1,1,,1,,,1,,1,,,,1,1,1,,,,,,1,,,,1],[1,1,,,1,1,,1,,,,,1,,1]],[,[,1],[,,,1,,,,1,,,,1,,,,1,,,1,,,1],[,,,,,,,,,,,,,,,,,,1,1,,,,,,1],,[1,,,,,1],[,1,,,,1,,,,1],[,1,,,,,,,,,,,1,,,1,,,,,,,,,1,1],[,,,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,1,,,,1,,1],[,1],[,1,,1,,1,,1,,1,,1,1,1,,1,1,,1,,,,,,,1],[1,,,,,1,,,1,1,,1,,1,,1,1,,,,,1,,,1],[,1,1,,,1,,1,,1,,1,,1,1,1,1,,,1,,1,,1,1,1],[1,1,1,1,1,,1,,1,,,,1,1,1,1,,1,1,,,1,1,1,1],[1,,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],,[,1,,,,,,1,1,1,,1,,,,1,,,1,1,1,,,1],[1,,,,,1,,1,1,1,,1,1,1,1,1,,1,,1,,1,,,1,1],[1,,1,1,,,,,1,,,,,,1,1,,,1,1,1,1,,,1,,1],[1,,,,,,,,,,,,,,,,,1],[,,,,,1,,,1,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,,,1],[,1,,,,1]],[,[1,1,1,,1,,1,1,1,1,1,1,1,1,1,,1,,1,,1,1,,,1,1,1],[,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],,[,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1],,[1,1,,,,1,1,,,,,,1,,,,1,,1,,1,1,,1],[1],[,,,,,,,,,,,1,,,,,,,,,,,1],[,1,,,,,,,1,1,,,1,,1,,,,1,,,,,,,1],[,,,,,,,,,,,,,,,,1,,,,,1],[,,1,,,,,1,,1],[1,,,,1,,,,,1,,,,1,1,,,,1,1,,,,,1],[,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[1,,,1,1,,,,,,,1,,1,,1,1,1,1,1,1],[,,,,,1,,,,,,,1,,,,,,,1],,[,,1,1,1,1,1,,1,1,1,,,1,1,,,1,1,,1,1,1,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,,,,1],,[1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,,,1,1,1,1,,,,,,1,,1,,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,,,,1,,1,,,1,1,1,1,1],[,,,,,,,,,,,1,,,,,,,,,1,,,,1],[,1,1,,1,1,,1,,,,1,1,,1,1,,,1,,1,1,,1],[,1,,1,,1,,,1,,,1,1,,1,1,,,1,1,1],[,1,1,1,1,1,,1,1,,,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,,,,,,,,,1,,1,,1,1,,,,1,,,1],[,1,,,1,1,,,,,,,,,1,1,1,,,,,1],[1,,,1,1,,,,1,1,1,1,1,,,1,,,1,,,1,,1,,1],[,1,1,,1,1,,1,1,,,,1,1,1,,,1,1,,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,,,,1,,,,,,,,,1],[,1,,,,,,,,1,,,,,1,,,,1,,,1],[,1,1,1,1,,,1,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1],[,,,,,1,,1,,,,,1,1,1,1,1,,,1,,,,1],[,1,,,,,,,,1,,,,,,,,,,,,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,1,,,,1,,1,1,1,1,1,,1,1,,,,,,1],[,1,1,1,1,1,1,1,,1,1,,,1,1,,,,1,,1,1,,1,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,1,1,,1,,,1,1,1,1,,,1,,,,,,,1],[,1,,,,,,,,1,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1],[,1,1,,,,,,,,,,,,1,1,,,,,,1],[,1,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,,,,,1],[1,1,,,1,,,1,1,1,,,,1],,[,,,,,,,,,,,,,1,,,,,,,,,,1],[,,,,,,,,,1,,,,,,,,,1,,,,,,,1],[1,1,1,,1,,1,1,1,1,1,1,1,1,,1,,,1,,1,,,1,1],[,,,,,,,,,1],[,1,,,,1,,,,,,1,,,1,,,,,1],[,1,1,,1,1,,,,,,,,,,,,,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,1,1,1,,,,1,1,,,,1,,1],[1,1,1,1,1,1,,,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,,1,1],[,,,,,,,,,,,,,,,1,,,,1],,[1,1,,1,,1,,,,,,1,,1,,1,1,,1,,1,1,,1,1,,1],[,,1,,,,,,1,,,,1,,1,,,,,1],[1,,,,,,,,,1,,,,,,1,,,,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,,1,,,,,,1,,,1,,,,,,,,1],[,1,,1,,,,,,,,,,,,1],,[1,1,,,,,,,,,,,,,,,,,,,,,,1,1],[1]],[,[1,,,,,,,,,1,,,,,1,,1,,1],[,1,1,,1,1,,1,1,1,,,1,1,1,,,,1,,,1,,,,1],[,1,,,,,,,1,,,,1,,,,,,1],[1,1,1,1,1,1,,,,1,,,,,,,,,1,1,1,1],[1],[,1,1,,,1,1,,,,,1,,1,,,,,,,,1,,,,1],[1,,1,,,1,,1,,,,,1,1,1,1,,,,1,,,,1],[,,1,,,,,,,1,,,,,,,1,,,,,,,1],[1,,,,,,,,,,,,,,1,,,,1],[,,,1,,1,,,,,1,,,,1,1,,,,1],[1,,,,,1,,,,1,,1,1,,,1,1,,1,1,1,,1,1,1,,1],[,1,1,,,,,1,,1,,1,1,1,,1,1,,,1,,1,1,1],[,1,,,,1,,,,1,,,1,,1,1,,,1,1,,,,,,1],[1,,1,1,,1,,1,1,,1,,1,1,1,1,1,,,1,1,,,,,,1],[1,,,,,,,,,,,,,,,,,,1,,,1,,1],[,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,,1,,1],[,1,,,,1,,,1,1,,1,,,1,1,,,1,,,1,,,1,1],[1,1,,1,1,1,,1,1,1,,1,,1,1,1,,,1,,1,1],[1,,1,1,1,1,,,,1,,1,1,1,,1,,,1,1,1,,1,1,1,1,1],[1,,,,,,,,,,,,,1],[,,1,,,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,,,1,,1,,1,,,,1],[,,,1,,,,,,,,,1],[,1,,,,,,,,,,,,,,1,,,,,,,,,1],[,,,,,,,,1,1,,,,,,,,,1,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,,,1,1,1],[,,,,,1,,,,1,1,1,,,1,1,,,1,,1,1,,1],[,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,,,1,,,,,,,,,,,,,1],[,,1,,,1,,1,1,1,,1,1,,1,,,,1,,1,1],,[,,1,,,1,,,,,,1,,,,1],[,,,,,,,,,1,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,,1,1,,1,,1,,,1,1,1,,,1],[,,,,,1,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,1,,1,1,,1,,,1],[,,,,,1,,,,,,,,,,,,,,1],[,1,1,1,1,,,,,1,,,1,,1,,,,1,1,,,,1,1],[,1,,,1,,,1,,1,1,,1,,,,,,,1],[,,1,,1,,,1,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,,,,,,,,,,1,,1,1],[,,,,,,,,,,,,1],,[,1,1,1,1,,,,1,1,,1,1,1,1,1,1,,1,1,1,1,,1,,1],[1,,,,1,,,,,,,,,,1],[1,,,,,,,,,1],,[,1,,,,1,,,,,,,,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,,1,,,,1,1,,,1,1,,1],[,1,1,,1,,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,1],[1,1,1,,,,,1,1,1,,1,1,1,1,,,1,1,,1,1,,,,,1],[,1,,,,,,,1,1,,,1,1,1,,1,,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,,,1,,,,1,,,1,,,,1,,,,,,,1,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1],[1,1,1,,1,,,1,1,1,1,,1,1,1,1,,,,1,,1,,1,,,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,,1,1,,,,,,,,,1],,[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,,1,,1,,,,1],[,1,,,1,1,,1,1,1,,,1,1,1,1,1,,1,1,1,,1,,,1],[1,,,1,,,,1,1,1,,,,,1,1,,,,1,,1],[1,1,,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,,1,,1,,,,,,,,1,,1],[,1,,,,1,,1,1,,,,1,1,,1,,,,1,1,1,,1],,[,1,,,,,,1,,,,,,,1],[,,,,,,,,1,,,,1,,1,,,,,,,,,,,,1]],[,[,1,1,,1,1,1,1,,1,1,1,,1,1,,1,1,,1,1,1,1,1,1,,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,,,1,,,,,,,,1,,,,,,1,,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,,1,,1,1,1,1,1,1,1,,1,1,,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1],[,1,1,,,,,1,1,1,,,1,,1,1,,,,1,,1,,,1,1],[,,,,,,,1,,,,1,1,1,1,1,,1,,,,,,,,1],[1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,,1,,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,1,1,,1,,1,1,1,,1,,1,1,,1,1,,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,,1,,,,,1,,1],[,1,1,1,,1,,1,,1,,,,1,,1,,,1,,,,,,1,1],[,1,,,1,1,,1,,1,,1,1,1,1,1,,1,1,,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,,1,,1,,1,,,,,,1,,1,,,,1,1]],[,[,1,,1,,,,,,,,,,,,,,,1,,,,1],[,,,,,,,,,1,,1,1,1,,1,,,1,,1,1],[1,1,,,,,,,1,,,,,,,1,,,,,,1],[,1,,,,,,,,,,1,,,,,,,,,1,1],,[,,,,,,,,,,,,,,,1,,,,1,,1],[,,1,1,,1,,1,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,,,,,,,,,,1],[1,,1,1,,,,1,,,,,,,,,1,,,1,,,1,1],[,1,1,,1,1,,1,1,1,1,1,1,1,1,1,,,1,1,,1,1,,1],[,1,,,1,1,,,,,,1,,1,,1,,,1,,1,1],[1,1,1,1,,1,,1,,1,,1,1,,1,1,1,1,1,,1,1,1,1,1],[,1,1,,,1,,1,,1,1,1,,,1,1,1,,1,1,1,1,,1,1],[,,,,1,,,1,,,,,,,1,,,,1,1],[,1,,,,,,,,,,1,,1,,1,,,,,1,,,,,1],,[1,1,,1,,1,,1,1,,,,,,1,1,,,1,1,1,1,1,1,1,1,1],[1,1,,1,,,,,,1,,,,,,1,1,,,,1,1,,,1],[,1,1,,1,1,,,,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,,,1,,,,1,,,,1,1],[,,,,1],[,,,,,,,,,1,,,1],,[,,1,,1,,,,,,,,,1,,,,,,,,,,,,1],[,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,,,1],[,1,,1,,,,,,1,,,,,1,1,,,,,1,1],[,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,,,1,,1,1,1],[,1,,,,1,,,,,,,1],[,1,,,1,,,1,,1,,1,1,,1,,,,,1,,1,,,,1,1],[,1,,,1,,,1,1,1,,1,1,1,1,1,,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,1,1,,,,1,1,,,,,,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,,1,1,,1,1,1,1,1],[,1,,,,1,,,,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,1,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,,1,1,1,,1,1,1,,,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,,,,,,,1,1,,,,,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,1,,1,1,1,1],,[,1,1,,,,,1,,1,,,,1,1,1,,,1,,,,,1],[,,,,,,,,,,,,,1],[,,,,,1,,,,,,,,1,1,,,,,1,,1,,,1,1],[,,,,,,,,,,,,,,1]],[,[,1],,,,,,,,,,,,,,,,,,,,[1,1,1,1,1,,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,1,1,1,1],[,1,,1,,1,,,1,1,1,,1,1,1,1,1,,,1,,,,1,,1,1],[,1,,1,,1,,,1,,,,,1,,,,,,1,1],[,1,,1,,,,,1,,,,1,,1,1,1,1,1,1,1,1,,1],[,1,,,,,,,,,,,,,,,1]],[,[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,,,,,,,,,1,1,,,,1],[,,,,,,1],[,,1],[,1,1,,,1,,1,,1,1,,1,1,1,,,,1,1,1,,,,,1],,[,1,,,,1,,,,,,1,,,1,,,,1,1,,1],[,,,,,,,1,,,,,,,,,1],[,1,,,,1,1,,,,,,1,1,1,,,,1,,1,1],[,,,,,,,1,,1,,,,,,,,,,1],[,1,1,,,,,,1,1,,,,1,,,,,,,1,,,1],,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,,1,,,1,,,,,1,,1,,1,,1,,,,,1],[1,1,1,1,1,1,1,1,,,,,1,1,,1,1,,1,,,1,,1],[,,,,,,,,,,,,,,1,,,,,,1],,[,,,,,,,,,1,,,,,,1,,,,,1],[,,1,,,,,,,1,,,1,1],[,,,1,,,,,1,,,,,1,,,,,,1,,,,1],[1,,1,1,,1,1,1,1,1,,1,,,,1,1,1,,,1,1,,,,1,1],,[1,1,,,,,,,,,,1,,1,,1,,,1],[,,,,1,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,1],[,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,,1,,,1,,,,,,,,1,,,,,,1,,,,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,,1,,,,1,1,1,1,1,1,,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,1,,1,1,,1,1,1,,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,,1,,1,,1,1,1,1,1,,,,1,1,1,1,,1,1,1,1,1],[1,1,1,1,,1,,,,,,1,,1,,,,,1,1,,,,,1],[1,,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,,1,,,,1,1,1,1,1,,,1,1,,1,,1],[,1,1,1,1,,,,,1,,1,1,1,1,1,,,1,1,,,,1,1,1],[,1,1,1,1,1,,1,,,,,1,,1,,1,,,1,,,1,1,,1]],[,[1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,,,,,1,,,,,1,1,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,,,,1,,1,1,,1,1,1,1,1,,,1,,1,,1],[1,1,1,,1,1,1,1,,,,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,,1,,,,,,,,,,1,1,1,1,1,1,1,,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,1,1,,,,,,1,1,1,1,1,,,,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,,1,1,1],[,1,1,1,,1,,1,1,1,1,,,1,1,1,,1,1,1,1,1,,,1,1],[1,1,,,,1,,,1,1,1,,1,,1,,1,,1,1,1,1,1,,1,,1],[,1,,,,,,,1,,1,,1,1,1,1,,,,,,,,,1]],[,[,,,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,1,,,1,,,,,,1,,,1,,,,1],,[,1,,,,1,,1,,1,1,,1,1,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],[1,1,1,,,1,,,,,,,,,1,1,,,,,,,,,,1],[,1,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1,,,1],[,,,,,,,,,1],[1,1,,,,,,1,1,1,,1,1,,,,1,1,,1,,1,1,1,,1],[,1,1,1,,1,1,,,1,,1,1,1,1,,,,,,,1,,1],[,1,1,1,1,,,1,,1,,,,1,1,1,1,,1,1,,1],[,1,,,1,1,,1,,,,1,,1,1,,1,,1,,,1,,,1,,1],[,,,,,,,,,,,1],[,,,,,,,,,1,,,,,,,,,,,,,1],,[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1],[,1,,,,,,,1,1,,1,,,,,1,,,1,,1],[,1,,,,1,,,1,,,,,,,,1,,1,,,1],[,,,,,,,,,,,,,1,1,,,,1,,,1],[,,,,,1,,,1,,,,1],[,1],,[,1],[1,,,,,,,,,,,,,,1,,,,,1]],[,[,1,,,,1,1,1,1,1,1,,1,1,1,1,1,,1,1,,1,1,,,1],[,,1,,,,,,,,,1],,,[1,,,1,1,,,,,,,,1,1,,1,1,,1],,[,,,,,,,,,,,,,,,,,,1,,1],,[1,,,1,1,,1,1,,,,,1,,1,,,,,1,1,,1],,[,1,,,,,,,,1,1,1,1,1,,1,1,,,,1,1],[,,,,,,,,,,,,,,,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,,1,1,1,1,1,1],[,,,,,,,,,,,1,,1,,,1],[1,,,,,,,,,,,,,,,,,,1,,1],,,[,1,,,,,,,,,,,,,,1,,,,1,1],[,,,,,,,,,1,,,1,,,,,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,1,1,,,,,,1],,[,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,1,1,,1,1,1,1,1,1,,,1,1,1,1,1,,1,1],[,1,,,,,,,,1],[,,,,1,,,1,,,1,1,,,,,,,,,,1,,,,1],[,1,,1,1,,,1,1,1,,,,1,1,1,1,,1,1,1,1,,1],[,,,,,,,1],[,1,1,,,,,1,,1,,,,,,1,,,,,,1,,1,,1],[,1,,,,,,1,,,,1,,,,,,,,,,1],[,,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1,1,1,1,,1],[,1,,,,,,,,1],[,1,1,,1,,,,,,,,1,,,,,,1,,,1,,1,,1],[,1,,1,,1,,1,1,1,,1,1,1,,1,,,1,1,,1,1,1,1,1],[,1,1,1,1,1,,,1,1,,,,1,1,1,,,,1,1,,,1,1],[,,1,1,1,1,,1,,1,,1,,1,1,1,1,,,,,1,,1,,1],[1,1,1,1,1,1,1,1,,1,,1,,1,1,1,,,1,1,,,,1,,1],[,,,1],,[,1,1,,1,,,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1],[,1,,,,,,1,,1,,1,,,,,,,1,1,,1,1],[,,,,,,1,,1,1,,1,,1,,,,,,,,,,1],[,1,1,,1,,,,1,,,,1,1,1,,,,1,,1,1,1,,1,1],,[,1,1,,,,,,,,,,,,,1,,,1,,,,,1],[,1,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,1,,,,1,,,,,1,,,,,,,1]],[,[,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[,1,1,1,1,1,,1,,1,1,,,1,1,1,1,,1,,,,,1,1,1],[,,1,1,,1,,1,1,,,,1,1,1,1,,,1,,1,1,1,1,,1],[,1,,1,,,,,,,,1,,1,,1,,,,,,,,,,1],[,,1,,1,,,1,,,,,1,1,,,1,,1,1,1,1],[,1],[,1,1,,1,,1,1,,1,,,1,1,1,,,,1,,,1,,1],[1,1,,1,1,1,,,,,,,,,,,,,1,,1,1,1],[,1,1,,,,,,,1,,,1,,1,,1,,1,1,,,1,,,1],[,,1,,,,,,,,,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,,1,,,,,1,1,1,,,1,,1,,,,1],[,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,1,1,1,,1,,1,1,1,,,1,1,1,1,,,,1,1],[,,,1,1,,,1,,1,,1,,1,1,1,1,,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,,1,,1,,,,1,1,,,1,1,,1,1,,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1,,1,1,,,1],[,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,,1,,,1,,,1,,1,1,1,1,1,,1,,1,1],[,,,,,1,,,,1,,,,,1,1,,,,1],[,1,,1,1,1,,1,,,1,1,1,,,1,,,1,,1,,,1],[,,1,,,,,,,,,1,,1,,,,,1,,1],[,1,1,,,,,,,,1,1,1,,,,,,,,1,,,,,1],[,,,,,,,,1,,,,,1,,,1]],[,[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,,,1,1,1,1,1,1,1,1,,,,,,,,,1,1],[,,,,,,,,1,,,,1,,1,,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,1,,1,,1,,,,1,1,,1,,1,,,,1,1,1,1,1,,,1],,[,1,,,,,,,,1,,,1,1,,,1,,1,1,,1,,1],[,1,,,1,,,,,,,,1,,,,,,,1],[1,1,,,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1],,[,1,,,,,,1,,1,,1,1,1,1,1,,,1,,1,1,,,,1],[,1,1,,,1,,1,,1,,,1,1,1,1,,,1,,,1,,,,1],[,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1],[,1,,,1,1,,1,1,,,1,1,,1,1,,1,,1,,1],[1,,1,,,,,1,,1,,1,1,1,1,,,,,1,1,,,,1,1],[,1,1,,,,,1,1,,,1,,1,1,1,1,,,,,,,,,,1],,[,1,1,,,1,,,,1,,1,1,1,1,1,,,,1,,,,1,,1],[,,,1,1,,,1,,,,,1,,1,1,1,,1,1,,,,,,1],[,1,,,,,,,,,,,1,,,,1,,,,,,,1,,1],[,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,1,,,,,1,,1,,,1,1,,1,1,,1],[,1,,,,,,1,,,,,1,1,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1,,,1,,,,,1],[,,,,,,,1,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,,1,,,,,,,1,,,,,,,,1,,,1],[,1,,,,,,,1],[,,,,,,,,,,1],[,1,,,,,,1,1,,,,,,1],,[,1,1,,,,,,1,,,,,1,1,,,,1],[1,,1,,1,,,,,1,,,,,1,,,,,,,,,1,1],[,1,1,,,,,,,,,1,1,1,1,,,,1,,,,,1,,,1],,[,1,1,,1,,,1,1,,,1,,,1,1,1,,1,,1,1,1,,,,1],[,,,,,1,,,,,1,,,1,1,,,1,,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,,,1,,,,,1,,,,,1,,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,1],[,1,,,,,,1,,,,,,,1,1,1,,,1],[,1,,,,,,,,,,1,1,1,,,,,1,,,1],[,,,,,1,,1,,,,,1,1,1,,1,1,,1,1,1,,,1,1],[1,1,,,,,,,1,,,,,1,1,,,,,,,,,,,1],,[,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,,1,,,,,1,,,1,,,,1,,1],[,1,,,,,,,,,1]]]
function Ti(e){e=Array.isArray(e)?e:Fi
var t=[]
return e.forEach((function(e,n){var r=String.fromCharCode(n+96).replace("`","")
Array.isArray(e)?t=t.concat(Ti(e).map((function(e){return r+e}))):t.push(r)})),t}var Ni=function(e){for(var t=Fi;e.length<3;)e+="`"
for(var n=0;n<=e.length-1;n++)if(!(t=t[e.charCodeAt(n)-96]))return!1
return!0}
i._thisWillBeDeletedDoNotUse=i._thisWillBeDeletedDoNotUse||{},i._thisWillBeDeletedDoNotUse.utils={setDefaultFrameMessenger:dn}
var Ri=function(e){A(n,e)
var t=k(n)
function n(e){var r,a,i,s
return I(this,n),(r=t.call(this))._props=function(e){var t,n,r,a=null!==(t=e.nodeName)&&void 0!==t?t:Oi[e.nodeType],o=null!==(n=null!==(r=e.nodeType)&&void 0!==r?r:_i[e.nodeName])&&void 0!==n?n:1
Pt("number"==typeof o,"nodeType has to be a number, got '".concat(o,"'")),Pt("string"==typeof a,"nodeName has to be a string, got '".concat(a,"'"))
var i=null
"input"===(a=a.toLowerCase())&&(i=(e.type||e.attributes&&e.attributes.type||"").toLowerCase(),ki().includes(i)||(i="text"))
var s=S({},e,{nodeType:o,nodeName:a})
return i&&(s.type=i),delete s.attributes,Object.freeze(s)}(e),r._attrs=(a=e.attributes,i=void 0===a?{}:a,s={htmlFor:"for",className:"class"},Object.keys(i).reduce((function(e,t){var n=i[t]
return Pt("object"!==o(n)||null===n,"expects attributes not to be an object, '".concat(t,"' was")),void 0!==n&&(e[s[t]||t]=null!==n?String(n):null),e}),{})),r}return j(n,[{key:"props",get:function(){return this._props}},{key:"attr",value:function(e){var t
return null!==(t=this._attrs[e])&&void 0!==t?t:null}},{key:"hasAttr",value:function(e){return void 0!==this._attrs[e]}},{key:"attrNames",get:function(){return Object.keys(this._attrs)}}]),n}(_t),_i={"#cdata-section":2,"#text":3,"#comment":8,"#document":9,"#document-fragment":11},Oi={}
Object.keys(_i).forEach((function(e){Oi[_i[e]]=e}))
var Si=Ri,Ii={}
B(Ii,{allowedAttr:function(){return ji},arialabelText:function(){return Mi},arialabelledbyText:function(){return Js},getAccessibleRefs:function(){return hl},getElementUnallowedRoles:function(){return yl},getExplicitRole:function(){return Bi},getImplicitRole:function(){return cs},getOwnedVirtual:function(){return ws},getRole:function(){return gs},getRoleType:function(){return ml},getRolesByType:function(){return Dl},getRolesWithNameFromContents:function(){return El},implicitNodes:function(){return Tl},implicitRole:function(){return cs},isAccessibleRef:function(){return Nl},isAriaRoleAllowedOnElement:function(){return gl},isUnsupportedRole:function(){return qi},isValidRole:function(){return Li},label:function(){return Rl},labelVirtual:function(){return ya},lookupTable:function(){return Fl},namedFromContents:function(){return ys},requiredAttr:function(){return _l},requiredContext:function(){return Ol},requiredOwned:function(){return Sl},validateAttr:function(){return Pl},validateAttrValue:function(){return Il}})
var Pi=function(){if(Zn.get("globalAriaAttrs"))return Zn.get("globalAriaAttrs")
var e=Object.keys(za.ariaAttrs).filter((function(e){return za.ariaAttrs[e].global}))
return Zn.set("globalAriaAttrs",e),e},ji=function(e){var t=za.ariaRoles[e],n=_(Pi())
return t?(t.allowedAttrs&&n.push.apply(n,_(t.allowedAttrs)),t.requiredAttrs&&n.push.apply(n,_(t.requiredAttrs)),n):n},Mi=function(e){if(!(e instanceof _t)){if(1!==e.nodeType)return""
e=er(e)}return e.attr("aria-label")||""},qi=function(e){var t=za.ariaRoles[e]
return!!t&&!!t.unsupported},Li=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.allowAbstract,r=t.flagUnsupported,a=void 0!==r&&r,o=za.ariaRoles[e],i=qi(e)
return!(!o||a&&i||!n&&"abstract"===o.type)},Bi=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.fallback,r=t.abstracts,a=t.dpub
if(1!==(e=e instanceof _t?e:er(e)).props.nodeType)return null
var o=(e.attr("role")||"").trim().toLowerCase(),i=n?Ci(o):[o],s=i.find((function(e){return!(!a&&"doc-"===e.substr(0,4))&&Li(e,{allowAbstract:r})}))
return s||null},Ui=function(e){return Object.keys(za.htmlElms).filter((function(t){var n=za.htmlElms[t]
return n.contentTypes?n.contentTypes.includes(e):!!n.variant&&!(!n.variant.default||!n.variant.default.contentTypes)&&n.variant.default.contentTypes.includes(e)}))},Hi=zo((function(e){for(var t=[],n=e.rows,r=0,a=n.length;r<a;r++){var o=n[r].cells
t[r]=t[r]||[]
for(var i=0,s=0,l=o.length;s<l;s++)for(var u=0;u<o[s].colSpan;u++){for(var c=o[s].getAttribute("rowspan"),d=0===parseInt(c)||0===o[s].rowspan?n.length:o[s].rowSpan,p=0;p<d;p++){for(t[r+p]=t[r+p]||[];t[r+p][i];)i++
t[r+p][i]=o[s]}i++}}return t})),Vi=zo((function(e,t){var n,r
for(t||(t=Hi(Wr(e,"table"))),n=0;n<t.length;n++)if(t[n]&&-1!==(r=t[n].indexOf(e)))return{x:r,y:n}})),zi=function(e){var t=e.getAttribute("scope"),r=e.getAttribute("role")
if(e instanceof n.Element==0||-1===["TD","TH"].indexOf(e.nodeName.toUpperCase()))throw new TypeError("Expected TD or TH element")
if("columnheader"===r)return"col"
if("rowheader"===r)return"row"
if("col"===t||"row"===t)return t
if("TH"!==e.nodeName.toUpperCase())return!1
var a=Hi(Wr(e,"table")),o=Vi(e,a)
return a[o.y].reduce((function(e,t){return e&&"TH"===t.nodeName.toUpperCase()}),!0)?"col":a.map((function(e){return e[o.x]})).reduce((function(e,t){return e&&t&&"TH"===t.nodeName.toUpperCase()}),!0)?"row":"auto"},$i=function(e){return-1!==["col","auto"].indexOf(zi(e))},Wi=function(e){return["row","auto"].includes(zi(e))},Gi=Ui("sectioning").map((function(e){return"".concat(e,":not([role])")})).join(", ")+" , main:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]"
function Yi(e){var t=fa(Js(e)),n=fa(Mi(e))
return!(!t&&!n)}var Qi={a:function(e){return e.hasAttr("href")?"link":null},area:function(e){return e.hasAttr("href")?"link":null},article:"article",aside:"complementary",body:"document",button:"button",datalist:"listbox",dd:"definition",dfn:"term",details:"group",dialog:"dialog",dt:"term",fieldset:"group",figure:"figure",footer:function(e){return wr(e,Gi)?null:"contentinfo"},form:function(e){return Yi(e)?"form":null},h1:"heading",h2:"heading",h3:"heading",h4:"heading",h5:"heading",h6:"heading",header:function(e){return wr(e,Gi)?null:"banner"},hr:"separator",img:function(e){var t=e.hasAttr("alt")&&!e.attr("alt"),n=Pi().find((function(t){return e.hasAttr(t)}))
return!t||n||Ta(e)?"img":"presentation"},input:function(e){var t
if(e.hasAttr("list")){var n=va(e.actualNode,"list").filter((function(e){return!!e}))[0]
t=n&&"datalist"===n.nodeName.toLowerCase()}switch(e.props.type){case"checkbox":return"checkbox"
case"number":return"spinbutton"
case"radio":return"radio"
case"range":return"slider"
case"search":return t?"combobox":"searchbox"
case"button":case"image":case"reset":case"submit":return"button"
case"text":case"tel":case"url":case"email":case"":return t?"combobox":"textbox"
default:return"textbox"}},li:"listitem",main:"main",math:"math",menu:"list",nav:"navigation",ol:"list",optgroup:"group",option:"option",output:"status",progress:"progressbar",section:function(e){return Yi(e)?"region":null},select:function(e){return e.hasAttr("multiple")||parseInt(e.attr("size"))>1?"listbox":"combobox"},summary:"button",table:"table",tbody:"rowgroup",td:function(e){var t=wr(e,"table"),n=Bi(t)
return["grid","treegrid"].includes(n)?"gridcell":"cell"},textarea:"textbox",tfoot:"rowgroup",th:function(e){return $i(e.actualNode)?"columnheader":Wi(e.actualNode)?"rowheader":void 0},thead:"rowgroup",tr:"row",ul:"list"},Ki=function(e,t){var n=o(t)
if(Array.isArray(t)&&void 0!==e)return t.includes(e)
if("function"===n)return!!t(e)
if(null!=e){if(t instanceof RegExp)return t.test(e)
if(/^\/.*\/$/.test(t)){var r=t.substring(1,t.length-1)
return new RegExp(r).test(e)}}return t===e},Ji=function(e,t){if("object"!==o(t)||Array.isArray(t)||t instanceof RegExp)throw new Error("Expect matcher to be an object")
return Object.keys(t).every((function(n){return Ki(e(n),t[n])}))},Xi=function(e,t){return e instanceof _t||(e=er(e)),Ji((function(t){return e.attr(t)}),t)},Zi=function(e,t){return!!t(e)},es=function(e,t){return Ki(Bi(e),t)},ts=function(e,t){return Ki(cs(e),t)},ns=function(e,t){return e instanceof _t||(e=er(e)),Ki(e.props.nodeName,t)},rs=function(e,t){return e instanceof _t||(e=er(e)),Ji((function(t){return e.props[t]}),t)},as=function(e,t){return Ki(gs(e),t)},os={attributes:Xi,condition:Zi,explicitRole:es,implicitRole:ts,nodeName:ns,properties:rs,semanticRole:as},is=function e(t,n){return t instanceof _t||(t=er(t)),Array.isArray(n)?n.some((function(n){return e(t,n)})):"string"==typeof n?yr(t,n):Object.keys(n).every((function(e){if(!os[e])throw new Error('Unknown matcher type "'.concat(e,'"'))
var r=os[e],a=n[e]
return r(t,a)}))},ss=function(e,t){return is(e,t)}
ss.attributes=Xi,ss.condition=Zi,ss.explicitRole=es,ss.fromDefinition=is,ss.fromFunction=Ji,ss.fromPrimative=Ki,ss.implicitRole=ts,ss.nodeName=ns,ss.properties=rs,ss.semanticRole=as
var ls=ss,us=function(e){var t=za.htmlElms[e.props.nodeName]
if(!t)return{}
if(!t.variant)return t
var n=t.variant,r=R(t,c)
for(var a in n)if(n.hasOwnProperty(a)&&"default"!==a){var o=n[a],i=o.matches,s=R(o,d)
if(ls(e,i))for(var l in s)s.hasOwnProperty(l)&&(r[l]=s[l])}for(var u in n.default)n.default.hasOwnProperty(u)&&void 0===r[u]&&(r[u]=n.default[u])
return r},cs=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.chromium,r=e instanceof _t?e:er(e)
if(e=r.actualNode,!r)throw new ReferenceError("Cannot get implicit role of a node outside the current scope.")
var a=r.props.nodeName,o=Qi[a]
if(!o&&n){var i=us(r),s=i.chromiumRole
return s||null}return"function"==typeof o?o(r):o||null},ds={td:["tr"],th:["tr"],tr:["thead","tbody","tfoot","table"],thead:["table"],tbody:["table"],tfoot:["table"],li:["ol","ul"],dt:["dl","div"],dd:["dl","div"],div:["dl"]}
function ps(e,t){var n=ds[e.props.nodeName]
if(!n)return null
if(!e.parent)throw new ReferenceError("Cannot determine role presentational inheritance of a required parent outside the current scope.")
if(!n.includes(e.parent.props.nodeName))return null
var r=Bi(e.parent,t)
return["none","presentation"].includes(r)&&!hs(e.parent)?r:r?null:ps(e.parent,t)}function fs(e,t){var n=t.chromium,r=R(t,p),a=cs(e,{chromium:n})
return a?ps(e,r)||a:null}function hs(e){return Pi().some((function(t){return e.hasAttr(t)}))||Ta(e)}function ms(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.noImplicit,r=R(t,f),a=e instanceof _t?e:er(e)
if(1!==a.props.nodeType)return null
var o=Bi(a,r)
return o?["presentation","none"].includes(o)&&hs(a)?n?null:fs(a,r):o:n?null:fs(a,r)}var gs=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.noPresentational,r=R(t,h),a=ms(e,r)
return n&&["presentation","none"].includes(a)?null:a},vs=["iframe"],bs=function(e){var t=e instanceof _t?e:er(e)
return 1===t.props.nodeType&&e.hasAttr("title")?!ss(t,vs)&&["none","presentation"].includes(gs(t))?"":t.attr("title"):""},ys=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.strict
if(1!==(e=e instanceof _t?e:er(e)).props.nodeType)return!1
var r=gs(e),a=za.ariaRoles[r]
return!(!a||!a.nameFromContent)||!n&&(!a||["presentation","none"].includes(r))},ws=function(e){var t=e.actualNode,n=e.children
if(!n)throw new Error("getOwnedVirtual requires a virtual node")
if(e.hasAttr("aria-owns")){var r=va(t,"aria-owns").filter((function(e){return!!e})).map((function(e){return i.utils.getNodeFromTree(e)}))
return[].concat(_(n),_(r))}return _(n)},Ds=Ui("phrasing").concat(["#text"])
function xs(e,t,n){var r=t.props.nodeName,a=Qs(t,n)
return a?(Ds.includes(r)||(" "!==a[0]&&(a+=" "),e&&" "!==e[e.length-1]&&(a=" "+a)),e+a):e}var Es=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Qs.alreadyProcessed
t.startNode=t.startNode||e
var r=t,a=r.strict,o=r.inControlContext,i=r.inLabelledByContext,s=us(e),l=s.contentTypes
if(n(e,t)||1!==e.props.nodeType||null!=l&&l.includes("embedded"))return""
if(!ys(e,{strict:a})&&!t.subtreeDescendant)return""
if(!a){var u=!o&&!i
t=S({subtreeDescendant:u},t)}return ws(e).reduce((function(e,n){return xs(e,n,t)}),"")}
function As(e){if(!e.attr("id"))return[]
if(!e.actualNode)throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes")
return zr({elm:"label",attr:"for",value:e.attr("id"),context:e.actualNode})}var Cs=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Qs.alreadyProcessed
if(t.inControlContext||t.inLabelledByContext||n(e,t))return""
t.startNode||(t.startNode=e)
var r,a=S({inControlContext:!0},t),o=As(e),i=wr(e,"label")
return i?(r=[].concat(_(o),[i.actualNode])).sort($o):r=o,r.map((function(e){return Ks(e,a)})).filter((function(e){return""!==e})).join(" ")},ks={submit:"Submit",image:"Submit",reset:"Reset",button:""}
function Fs(e,t){return t.attr(e)||""}function Ts(e,t,n){var r=t.actualNode,a=[e=e.toLowerCase(),r.nodeName.toLowerCase()].join(","),o=r.querySelector(a)
return o&&o.nodeName.toLowerCase()===e?Ks(o,n):""}var Ns={valueText:function(e){return e.actualNode.value||""},buttonDefaultText:function(e){var t=e.actualNode
return ks[t.type]||""},tableCaptionText:Ts.bind(null,"caption"),figureText:Ts.bind(null,"figcaption"),svgTitleText:Ts.bind(null,"title"),fieldsetLegendText:Ts.bind(null,"legend"),altText:Fs.bind(null,"alt"),tableSummaryText:Fs.bind(null,"summary"),titleText:bs,subtreeText:Es,labelText:Cs,singleSpace:function(){return" "},placeholderText:Fs.bind(null,"placeholder")}
function Rs(e){return(us(e).namingMethods||[]).map((function(e){return Ns[e]}))}var _s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actualNode
if(1!==e.props.nodeType||["presentation","none"].includes(gs(e)))return""
var r=Rs(e),a=r.reduce((function(n,r){return n||r(e,t)}),"")
return t.debug&&i.log(a||"{empty-value}",n,t),a},Os={accessibleNameFromFieldValue:["combobox","listbox","progressbar"]},Ss=["button","checkbox","color","file","hidden","image","password","radio","reset","submit"],Is=function(e){var t=(e=e instanceof _t?e:er(e)).props.nodeName
return"textarea"===t||"input"===t&&!Ss.includes((e.attr("type")||"").toLowerCase())},Ps=function(e){return"select"===(e=e instanceof _t?e:er(e)).props.nodeName},js=function(e){return"textbox"===Bi(e)},Ms=function(e){return"listbox"===Bi(e)},qs=function(e){return"combobox"===Bi(e)},Ls=["progressbar","scrollbar","slider","spinbutton"],Bs=function(e){var t=Bi(e)
return Ls.includes(t)},Us=["textbox","progressbar","scrollbar","slider","spinbutton","combobox","listbox"],Hs={nativeTextboxValue:function(e){var t=e instanceof _t?e:er(e)
return Is(t)&&t.props.value||""},nativeSelectValue:function(e){var t=e instanceof _t?e:er(e)
if(!Ps(t))return""
var n=gi(t,"option"),r=n.filter((function(e){return e.props.selected}))
return r.length||r.push(n[0]),r.map((function(e){return ba(e)})).join(" ")||""},ariaTextboxValue:function(e){var t=e instanceof _t?e:er(e),n=t.actualNode
return js(t)?!n||n&&!Ca(n)?ba(t,!0):n.textContent:""},ariaListboxValue:Vs,ariaComboboxValue:function(e,t){var n=e instanceof _t?e:er(e)
if(!qs(n))return""
var r=ws(n).filter((function(e){return"listbox"===gs(e)}))[0]
return r?Vs(r,t):""},ariaRangeValue:function(e){var t=e instanceof _t?e:er(e)
if(!Bs(t)||!t.hasAttr("aria-valuenow"))return""
var n=+t.attr("aria-valuenow")
return isNaN(n)?"0":String(n)}}
function Vs(e,t){var n=e instanceof _t?e:er(e)
if(!Ms(n))return""
var r=ws(n).filter((function(e){return"option"===gs(e)&&"true"===e.attr("aria-selected")}))
return 0===r.length?"":Qs(r[0],t)}var zs=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actualNode,r=Os.accessibleNameFromFieldValue||[],a=gs(e)
if(t.startNode===e||!Us.includes(a)||r.includes(a))return""
var o=Object.keys(Hs).map((function(e){return Hs[e]})),i=o.reduce((function(n,r){return n||r(e,t)}),"")
return t.debug&&Nt(i||"{empty-value}",n,t),i}
function $s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actualNode
if(t=Ys(e,t),Gs(e,t))return""
var r=[Js,Mi,_s,zs,Es,Ws,bs],a=r.reduce((function(n,r){return t.startNode===e&&(n=fa(n)),""!==n?n:r(e,t)}),"")
return t.debug&&i.log(a||"{empty-value}",n,t),a}function Ws(e){return 3!==e.props.nodeType?"":e.props.nodeValue}function Gs(e,t){var n=e.actualNode
return!!n&&1===n.nodeType&&!t.includeHidden&&!ta(n,!0)}function Ys(e,t){var n=e.actualNode
return t.startNode||(t=S({startNode:e},t)),n?(1===n.nodeType&&t.inLabelledByContext&&void 0===t.includeHidden&&(t=S({includeHidden:!ta(n,!0)},t)),t):t}$s.alreadyProcessed=function(e,t){return t.processed=t.processed||[],!!t.processed.includes(e)||(t.processed.push(e),!1)}
var Qs=$s,Ks=function(e,t){var n=er(e)
return Qs(n,t)},Js=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!(e instanceof _t)){if(1!==e.nodeType)return""
e=er(e)}if(1!==e.props.nodeType||t.inLabelledByContext||t.inControlContext||!e.attr("aria-labelledby"))return""
var n=va(e,"aria-labelledby").filter((function(e){return e}))
return n.reduce((function(n,r){var a=Ks(r,S({inLabelledByContext:!0,startNode:t.startNode||e},t))
return n?"".concat(n," ").concat(a):a}),"")},Xs={}
B(Xs,{accessibleText:function(){return Ks},accessibleTextVirtual:function(){return Qs},autocomplete:function(){return ol},formControlValue:function(){return zs},formControlValueMethods:function(){return Hs},hasUnicode:function(){return el},isHumanInterpretable:function(){return rl},isIconLigature:function(){return al},isValidAutocomplete:function(){return il},label:function(){return ul},labelText:function(){return Cs},labelVirtual:function(){return ll},nativeElementType:function(){return cl},nativeTextAlternative:function(){return _s},nativeTextMethods:function(){return Ns},removeUnicode:function(){return nl},sanitize:function(){return fa},subtreeText:function(){return Es},titleText:function(){return bs},unsupported:function(){return Os},visible:function(){return sl},visibleTextNodes:function(){return dl},visibleVirtual:function(){return ba}})
var Zs=U(xt()),el=function(e,t){var n=t.emoji,r=t.nonBmp,a=t.punctuations
return n?Zs.default().test(e):r?/[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g.test(e)||/[\uDB80-\uDBBF][\uDC00-\uDFFF]/g.test(e):!!a&&/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g.test(e)},tl=U(xt()),nl=function(e,t){var n=t.emoji,r=t.nonBmp,a=t.punctuations
return n&&(e=e.replace(tl.default(),"")),r&&(e=(e=e.replace(/[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g,"")).replace(/[\uDB80-\uDBBF][\uDC00-\uDFFF]/g,"")),a&&(e=e.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g,"")),e},rl=function(e){if(!e.length)return 0
if(["x","i"].includes(e))return 0
var t=nl(e,{emoji:!0,nonBmp:!0,punctuations:!0})
return fa(t)?1:0},al=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,o=e.actualNode.nodeValue.trim()
if(!fa(o)||el(o,{emoji:!0,nonBmp:!0}))return!1
Zn.get("canvasContext")||Zn.set("canvasContext",a.createElement("canvas").getContext("2d"))
var i=Zn.get("canvasContext"),s=i.canvas
Zn.get("fonts")||Zn.set("fonts",{})
var l=Zn.get("fonts"),u=n.getComputedStyle(e.parent.actualNode),c=u.getPropertyValue("font-family")
l[c]||(l[c]={occurances:0,numLigatures:0})
var d=l[c]
if(d.occurances>=r){if(d.numLigatures/d.occurances==1)return!0
if(0===d.numLigatures)return!1}d.occurances++
var p=30,f="".concat(p,"px ").concat(c)
i.font=f
var h=o.charAt(0),m=i.measureText(h).width
if(m<30){var g=30/m
m*=g,f="".concat(p*=g,"px ").concat(c)}s.width=m,s.height=p,i.font=f,i.textAlign="left",i.textBaseline="top",i.fillText(h,0,0)
var v=new Uint32Array(i.getImageData(0,0,m,p).data.buffer)
if(!v.some((function(e){return e})))return d.numLigatures++,!0
i.clearRect(0,0,m,p),i.fillText(o,0,0)
var b=new Uint32Array(i.getImageData(0,0,m,p).data.buffer),y=v.reduce((function(e,t,n){return 0===t&&0===b[n]||0!==t&&0!==b[n]?e:++e}),0),w=o.split("").reduce((function(e,t){return e+i.measureText(t).width}),0),D=i.measureText(o).width,x=y/v.length,E=1-D/w
return x>=t&&E>=t&&(d.numLigatures++,!0)},ol={stateTerms:["on","off"],standaloneTerms:["name","honorific-prefix","given-name","additional-name","family-name","honorific-suffix","nickname","username","new-password","current-password","organization-title","organization","street-address","address-line1","address-line2","address-line3","address-level4","address-level3","address-level2","address-level1","country","country-name","postal-code","cc-name","cc-given-name","cc-additional-name","cc-family-name","cc-number","cc-exp","cc-exp-month","cc-exp-year","cc-csc","cc-type","transaction-currency","transaction-amount","language","bday","bday-day","bday-month","bday-year","sex","url","photo","one-time-code"],qualifiers:["home","work","mobile","fax","pager"],qualifiedTerms:["tel","tel-country-code","tel-national","tel-area-code","tel-local","tel-local-prefix","tel-local-suffix","tel-extension","email","impp"],locations:["billing","shipping"]},il=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.looseTyped,r=void 0!==n&&n,a=t.stateTerms,o=void 0===a?[]:a,i=t.locations,s=void 0===i?[]:i,l=t.qualifiers,u=void 0===l?[]:l,c=t.standaloneTerms,d=void 0===c?[]:c,p=t.qualifiedTerms,f=void 0===p?[]:p
if(e=e.toLowerCase().trim(),(o=o.concat(ol.stateTerms)).includes(e)||""===e)return!0
u=u.concat(ol.qualifiers),s=s.concat(ol.locations),d=d.concat(ol.standaloneTerms),f=f.concat(ol.qualifiedTerms)
var h=e.split(/\s+/g)
if(!r&&(h[0].length>8&&"section-"===h[0].substr(0,8)&&h.shift(),s.includes(h[0])&&h.shift(),u.includes(h[0])&&(h.shift(),d=[]),1!==h.length))return!1
var m=h[h.length-1]
return d.includes(m)||f.includes(m)},sl=function(e,t,n){return e=er(e),ba(e,t,n)},ll=function(e){var t,n
if(n=ya(e))return n
if(e.attr("id")){if(!e.actualNode)throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes")
var r=Cn(e.attr("id"))
if(n=(t=Vr(e.actualNode).querySelector('label[for="'+r+'"]'))&&sl(t,!0))return n}return(n=(t=wr(e,"label"))&&ba(t,!0))||null},ul=function(e){return e=er(e),ll(e)},cl=[{matches:[{nodeName:"textarea"},{nodeName:"input",properties:{type:["text","password","search","tel","email","url"]}}],namingMethods:"labelText"},{matches:{nodeName:"input",properties:{type:["button","submit","reset"]}},namingMethods:["valueText","titleText","buttonDefaultText"]},{matches:{nodeName:"input",properties:{type:"image"}},namingMethods:["altText","valueText","labelText","titleText","buttonDefaultText"]},{matches:"button",namingMethods:"subtreeText"},{matches:"fieldset",namingMethods:"fieldsetLegendText"},{matches:"OUTPUT",namingMethods:"subtreeText"},{matches:[{nodeName:"select"},{nodeName:"input",properties:{type:/^(?!text|password|search|tel|email|url|button|submit|reset)/}}],namingMethods:"labelText"},{matches:"summary",namingMethods:"subtreeText"},{matches:"figure",namingMethods:["figureText","titleText"]},{matches:"img",namingMethods:"altText"},{matches:"table",namingMethods:["tableCaptionText","tableSummaryText"]},{matches:["hr","br"],namingMethods:["titleText","singleSpace"]}],dl=function e(t){var n=ta(t.actualNode),r=[]
return t.children.forEach((function(t){3===t.actualNode.nodeType?n&&r.push(t):r=r.concat(e(t))})),r},pl=/^idrefs?$/
function fl(e,t,n){if(e.hasAttribute){if("LABEL"===e.nodeName.toUpperCase()&&e.hasAttribute("for")){var r=e.getAttribute("for")
t[r]=t[r]||[],t[r].push(e)}for(var a=0;a<n.length;++a){var o=n[a],i=fa(e.getAttribute(o)||"")
if(i)for(var s=Ci(i),l=0;l<s.length;++l)t[s[l]]=t[s[l]]||[],t[s[l]].push(e)}}for(var u=0;u<e.children.length;u++)fl(e.children[u],t,n)}var hl=function(e){e=e.actualNode||e
var t=Vr(e)
t=t.documentElement||t
var n=Zn.get("idRefsByRoot")
n||(n=new WeakMap,Zn.set("idRefsByRoot",n))
var r=n.get(t)
return r||(r={},n.set(t,r),fl(t,r,Object.keys(za.ariaAttrs).filter((function(e){var t=za.ariaAttrs[e].type
return pl.test(t)})))),r[e.id]||[]},ml=function(e){var t=za.ariaRoles[e]
return t?t.type:null},gl=function(e,t){var n=e instanceof _t?e:er(e)
if(t===cs(n))return!0
var r=us(n)
return Array.isArray(r.allowedRoles)?r.allowedRoles.includes(t):!!r.allowedRoles},vl=["doc-backlink","doc-biblioentry","doc-biblioref","doc-cover","doc-endnote","doc-glossref","doc-noteref"]
function bl(e){var t=[]
if(!e)return t
if(e.hasAttr("role")){var n=Ci(e.attr("role").toLowerCase())
t=t.concat(n)}return t.filter((function(e){return Li(e)}))}var yl=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e instanceof _t?e:er(e),r=n.props.nodeName
if(!Lo(n))return[]
var a=bl(n),o=cs(n),i=a.filter((function(e){if(t&&e===o)return!1
if(t&&vl.includes(e)){var a=ml(e)
if(o!==a)return!0}return!(t||"row"===e&&"tr"===r&&In(n,'table[role="grid"] > tr'))||!gl(n,e)}))
return i},wl=function(e){return Object.keys(za.ariaRoles).filter((function(t){return za.ariaRoles[t].type===e}))},Dl=function(e){return wl(e)},xl=function(){if(Zn.get("ariaRolesNameFromContent"))return Zn.get("ariaRolesNameFromContent")
var e=Object.keys(za.ariaRoles).filter((function(e){return za.ariaRoles[e].nameFromContent}))
return Zn.set("ariaRolesNameFromContent",e),e},El=function(){return xl()},Al=function(e){return null===e},Cl=function(e){return null!==e},kl={attributes:{"aria-activedescendant":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-atomic":{type:"boolean",values:["true","false"],unsupported:!1},"aria-autocomplete":{type:"nmtoken",values:["inline","list","both","none"],unsupported:!1},"aria-busy":{type:"boolean",values:["true","false"],unsupported:!1},"aria-checked":{type:"nmtoken",values:["true","false","mixed","undefined"],unsupported:!1},"aria-colcount":{type:"int",unsupported:!1},"aria-colindex":{type:"int",unsupported:!1},"aria-colspan":{type:"int",unsupported:!1},"aria-controls":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-current":{type:"nmtoken",allowEmpty:!0,values:["page","step","location","date","time","true","false"],unsupported:!1},"aria-describedby":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-describedat":{unsupported:!0,unstandardized:!0},"aria-details":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-disabled":{type:"boolean",values:["true","false"],unsupported:!1},"aria-dropeffect":{type:"nmtokens",values:["copy","move","reference","execute","popup","none"],unsupported:!1},"aria-errormessage":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-expanded":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-flowto":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-grabbed":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-haspopup":{type:"nmtoken",allowEmpty:!0,values:["true","false","menu","listbox","tree","grid","dialog"],unsupported:!1},"aria-hidden":{type:"boolean",values:["true","false"],unsupported:!1},"aria-invalid":{type:"nmtoken",allowEmpty:!0,values:["true","false","spelling","grammar"],unsupported:!1},"aria-keyshortcuts":{type:"string",allowEmpty:!0,unsupported:!1},"aria-label":{type:"string",allowEmpty:!0,unsupported:!1},"aria-labelledby":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-level":{type:"int",unsupported:!1},"aria-live":{type:"nmtoken",values:["off","polite","assertive"],unsupported:!1},"aria-modal":{type:"boolean",values:["true","false"],unsupported:!1},"aria-multiline":{type:"boolean",values:["true","false"],unsupported:!1},"aria-multiselectable":{type:"boolean",values:["true","false"],unsupported:!1},"aria-orientation":{type:"nmtoken",values:["horizontal","vertical"],unsupported:!1},"aria-owns":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-placeholder":{type:"string",allowEmpty:!0,unsupported:!1},"aria-posinset":{type:"int",unsupported:!1},"aria-pressed":{type:"nmtoken",values:["true","false","mixed","undefined"],unsupported:!1},"aria-readonly":{type:"boolean",values:["true","false"],unsupported:!1},"aria-relevant":{type:"nmtokens",values:["additions","removals","text","all"],unsupported:!1},"aria-required":{type:"boolean",values:["true","false"],unsupported:!1},"aria-roledescription":{type:"string",allowEmpty:!0,unsupported:!1},"aria-rowcount":{type:"int",unsupported:!1},"aria-rowindex":{type:"int",unsupported:!1},"aria-rowspan":{type:"int",unsupported:!1},"aria-selected":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-setsize":{type:"int",unsupported:!1},"aria-sort":{type:"nmtoken",values:["ascending","descending","other","none"],unsupported:!1},"aria-valuemax":{type:"decimal",unsupported:!1},"aria-valuemin":{type:"decimal",unsupported:!1},"aria-valuenow":{type:"decimal",unsupported:!1},"aria-valuetext":{type:"string",unsupported:!1}},globalAttributes:["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-dropeffect","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"]}
kl.role={alert:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},alertdialog:{type:"widget",attributes:{allowed:["aria-expanded","aria-modal","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["dialog","section"]},application:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage","aria-activedescendant"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["article","audio","embed","iframe","object","section","svg","video"]},article:{type:"structure",attributes:{allowed:["aria-expanded","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["article"],unsupported:!1},banner:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["header"],unsupported:!1,allowedElements:["section"]},button:{type:"widget",attributes:{allowed:["aria-expanded","aria-pressed","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["button",'input[type="button"]','input[type="image"]','input[type="reset"]','input[type="submit"]',"summary"],unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:Cl}}]},cell:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-rowindex","aria-rowspan","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["td","th"],unsupported:!1},checkbox:{type:"widget",attributes:{allowed:["aria-checked","aria-required","aria-readonly","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:['input[type="checkbox"]'],unsupported:!1,allowedElements:["button"]},columnheader:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-required","aria-readonly","aria-selected","aria-sort","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["th"],unsupported:!1},combobox:{type:"composite",attributes:{allowed:["aria-autocomplete","aria-required","aria-activedescendant","aria-orientation","aria-errormessage"],required:["aria-expanded"]},owned:{all:["listbox","tree","grid","dialog","textbox"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:"input",properties:{type:["text","search","tel","url","email"]}}]},command:{nameFrom:["author"],type:"abstract",unsupported:!1},complementary:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["aside"],unsupported:!1,allowedElements:["section"]},composite:{nameFrom:["author"],type:"abstract",unsupported:!1},contentinfo:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["footer"],unsupported:!1,allowedElements:["section"]},definition:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["dd","dfn"],unsupported:!1},dialog:{type:"widget",attributes:{allowed:["aria-expanded","aria-modal","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["dialog"],unsupported:!1,allowedElements:["section"]},directory:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:["ol","ul"]},document:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["body"],unsupported:!1,allowedElements:["article","embed","iframe","object","section","svg"]},"doc-abstract":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-acknowledgments":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-afterword":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-appendix":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-backlink":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:Cl}}]},"doc-biblioentry":{type:"listitem",attributes:{allowed:["aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author"],context:["doc-bibliography"],unsupported:!1,allowedElements:["li"]},"doc-bibliography":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["doc-biblioentry"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-biblioref":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:Cl}}]},"doc-chapter":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-colophon":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-conclusion":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-cover":{type:"img",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1},"doc-credit":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-credits":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-dedication":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-endnote":{type:"listitem",attributes:{allowed:["aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,namefrom:["author"],context:["doc-endnotes"],unsupported:!1,allowedElements:["li"]},"doc-endnotes":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["doc-endnote"]},namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-epigraph":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1},"doc-epilogue":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-errata":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-example":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","section"]},"doc-footnote":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","footer","header"]},"doc-foreword":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-glossary":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:["term","definition"],namefrom:["author"],context:null,unsupported:!1,allowedElements:["dl"]},"doc-glossref":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:Cl}}]},"doc-index":{type:"navigation",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},"doc-introduction":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-noteref":{type:"link",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:Cl}}]},"doc-notice":{type:"note",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-pagebreak":{type:"separator",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["hr"]},"doc-pagelist":{type:"navigation",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},"doc-part":{type:"landmark",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-preface":{type:"landmark",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-prologue":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-pullquote":{type:"none",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","section"]},"doc-qna":{type:"section",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-subtitle":{type:"sectionhead",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["h1","h2","h3","h4","h5","h6"]}},"doc-tip":{type:"note",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside"]},"doc-toc":{type:"navigation",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},feed:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["article"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["article","aside","section"]},figure:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["figure"],unsupported:!1},form:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["form"],unsupported:!1},grid:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-colcount","aria-level","aria-multiselectable","aria-readonly","aria-rowcount","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author"],context:null,implicit:["table"],unsupported:!1},gridcell:{type:"widget",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-selected","aria-readonly","aria-required","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["td","th"],unsupported:!1},group:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["details","optgroup"],unsupported:!1,allowedElements:["dl","figcaption","fieldset","figure","footer","header","ol","ul"]},heading:{type:"structure",attributes:{required:["aria-level"],allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["h1","h2","h3","h4","h5","h6"],unsupported:!1},img:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["img"],unsupported:!1,allowedElements:["embed","iframe","object","svg"]},input:{nameFrom:["author"],type:"abstract",unsupported:!1},landmark:{nameFrom:["author"],type:"abstract",unsupported:!1},link:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["a[href]","area[href]"],unsupported:!1,allowedElements:["button",{nodeName:"input",properties:{type:["image","button"]}}]},list:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{all:["listitem"]},nameFrom:["author"],context:null,implicit:["ol","ul","dl"],unsupported:!1},listbox:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-multiselectable","aria-readonly","aria-required","aria-expanded","aria-orientation","aria-errormessage"]},owned:{all:["option"]},nameFrom:["author"],context:null,implicit:["select"],unsupported:!1,allowedElements:["ol","ul"]},listitem:{type:"structure",attributes:{allowed:["aria-level","aria-posinset","aria-setsize","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["list"],implicit:["li","dt"],unsupported:!1},log:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},main:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["main"],unsupported:!1,allowedElements:["article","section"]},marquee:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},math:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["math"],unsupported:!1},menu:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:{one:["menuitem","menuitemradio","menuitemcheckbox"]},nameFrom:["author"],context:null,implicit:['menu[type="context"]'],unsupported:!1,allowedElements:["ol","ul"]},menubar:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:{one:["menuitem","menuitemradio","menuitemcheckbox"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},menuitem:{type:"widget",attributes:{allowed:["aria-posinset","aria-setsize","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="command"]'],unsupported:!1,allowedElements:["button","li",{nodeName:"iput",properties:{type:["image","button"]}},{nodeName:"a",attributes:{href:Cl}}]},menuitemcheckbox:{type:"widget",attributes:{allowed:["aria-checked","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="checkbox"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["checkbox","image","button"]}},{nodeName:"a",attributes:{href:Cl}}]},menuitemradio:{type:"widget",attributes:{allowed:["aria-checked","aria-selected","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="radio"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["image","button","radio"]}},{nodeName:"a",attributes:{href:Cl}}]},navigation:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["nav"],unsupported:!1,allowedElements:["section"]},none:{type:"structure",attributes:null,owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:["article","aside","dl","embed","figcaption","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","iframe","li","ol","section","ul"]},{nodeName:"img",attributes:{alt:Cl}}]},note:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["aside"]},option:{type:"widget",attributes:{allowed:["aria-selected","aria-posinset","aria-setsize","aria-checked","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["listbox"],implicit:["option"],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["checkbox","button"]}},{nodeName:"a",attributes:{href:Cl}}]},presentation:{type:"structure",attributes:null,owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:["article","aside","dl","embed","figcaption","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","iframe","li","ol","section","ul"]},{nodeName:"img",attributes:{alt:Cl}}]},progressbar:{type:"widget",attributes:{allowed:["aria-valuetext","aria-valuenow","aria-valuemax","aria-valuemin","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["progress"],unsupported:!1},radio:{type:"widget",attributes:{allowed:["aria-selected","aria-posinset","aria-setsize","aria-required","aria-errormessage","aria-checked"]},owned:null,nameFrom:["author","contents"],context:null,implicit:['input[type="radio"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["image","button"]}}]},radiogroup:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-required","aria-expanded","aria-readonly","aria-errormessage","aria-orientation"]},owned:{all:["radio"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["ol","ul","fieldset"]}},range:{nameFrom:["author"],type:"abstract",unsupported:!1},region:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["section[aria-label]","section[aria-labelledby]","section[title]"],unsupported:!1,allowedElements:{nodeName:["article","aside"]}},roletype:{type:"abstract",unsupported:!1},row:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-colindex","aria-expanded","aria-level","aria-selected","aria-rowindex","aria-errormessage"]},owned:{one:["cell","columnheader","rowheader","gridcell"]},nameFrom:["author","contents"],context:["rowgroup","grid","treegrid","table"],implicit:["tr"],unsupported:!1},rowgroup:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-errormessage"]},owned:{all:["row"]},nameFrom:["author","contents"],context:["grid","table","treegrid"],implicit:["tbody","thead","tfoot"],unsupported:!1},rowheader:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-required","aria-readonly","aria-selected","aria-sort","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["th"],unsupported:!1},scrollbar:{type:"widget",attributes:{required:["aria-controls","aria-valuenow"],allowed:["aria-valuetext","aria-orientation","aria-errormessage","aria-valuemax","aria-valuemin"]},owned:null,nameFrom:["author"],context:null,unsupported:!1},search:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["aside","form","section"]}},searchbox:{type:"widget",attributes:{allowed:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-readonly","aria-required","aria-placeholder","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="search"]'],unsupported:!1,allowedElements:{nodeName:"input",properties:{type:"text"}}},section:{nameFrom:["author","contents"],type:"abstract",unsupported:!1},sectionhead:{nameFrom:["author","contents"],type:"abstract",unsupported:!1},select:{nameFrom:["author"],type:"abstract",unsupported:!1},separator:{type:"structure",attributes:{allowed:["aria-expanded","aria-orientation","aria-valuenow","aria-valuemax","aria-valuemin","aria-valuetext","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["hr"],unsupported:!1,allowedElements:["li"]},slider:{type:"widget",attributes:{allowed:["aria-valuetext","aria-orientation","aria-readonly","aria-errormessage","aria-valuemax","aria-valuemin"],required:["aria-valuenow"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="range"]'],unsupported:!1},spinbutton:{type:"widget",attributes:{allowed:["aria-valuetext","aria-required","aria-readonly","aria-errormessage","aria-valuemax","aria-valuemin"],required:["aria-valuenow"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="number"]'],unsupported:!1,allowedElements:{nodeName:"input",properties:{type:["text","tel"]}}},status:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["output"],unsupported:!1,allowedElements:["section"]},structure:{type:"abstract",unsupported:!1},switch:{type:"widget",attributes:{allowed:["aria-errormessage"],required:["aria-checked"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:["button",{nodeName:"input",properties:{type:["checkbox","image","button"]}},{nodeName:"a",attributes:{href:Cl}}]},tab:{type:"widget",attributes:{allowed:["aria-selected","aria-expanded","aria-setsize","aria-posinset","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["tablist"],unsupported:!1,allowedElements:[{nodeName:["button","h1","h2","h3","h4","h5","h6","li"]},{nodeName:"input",properties:{type:"button"}},{nodeName:"a",attributes:{href:Cl}}]},table:{type:"structure",attributes:{allowed:["aria-colcount","aria-rowcount","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author","contents"],context:null,implicit:["table"],unsupported:!1},tablist:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-level","aria-multiselectable","aria-orientation","aria-errormessage"]},owned:{all:["tab"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},tabpanel:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},term:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["dt"],unsupported:!1},textbox:{type:"widget",attributes:{allowed:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-readonly","aria-required","aria-placeholder","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="text"]','input[type="email"]','input[type="password"]','input[type="tel"]','input[type="url"]',"input:not([type])","textarea"],unsupported:!1},timer:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1},toolbar:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['menu[type="toolbar"]'],unsupported:!1,allowedElements:["ol","ul"]},tooltip:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1},tree:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-multiselectable","aria-required","aria-expanded","aria-orientation","aria-errormessage"]},owned:{all:["treeitem"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},treegrid:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-colcount","aria-expanded","aria-level","aria-multiselectable","aria-readonly","aria-required","aria-rowcount","aria-orientation","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author"],context:null,unsupported:!1},treeitem:{type:"widget",attributes:{allowed:["aria-checked","aria-selected","aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["group","tree"],unsupported:!1,allowedElements:["li",{nodeName:"a",attributes:{href:Cl}}]},widget:{type:"abstract",unsupported:!1},window:{nameFrom:["author"],type:"abstract",unsupported:!1}},kl.implicitHtmlRole=Qi,kl.elementsAllowedNoRole=[{nodeName:["base","body","caption","col","colgroup","datalist","dd","details","dt","head","html","keygen","label","legend","main","map","math","meta","meter","noscript","optgroup","param","picture","progress","script","source","style","template","textarea","title","track"]},{nodeName:"area",attributes:{href:Cl}},{nodeName:"input",properties:{type:["color","data","datatime","file","hidden","month","number","password","range","reset","submit","time","week"]}},{nodeName:"link",attributes:{href:Cl}},{nodeName:"menu",attributes:{type:"context"}},{nodeName:"menuitem",attributes:{type:["command","checkbox","radio"]}},{nodeName:"select",condition:function(e){return e instanceof i.AbstractVirtualNode||(e=i.utils.getNodeFromTree(e)),Number(e.attr("size"))>1},properties:{multiple:!0}},{nodeName:["clippath","cursor","defs","desc","feblend","fecolormatrix","fecomponenttransfer","fecomposite","feconvolvematrix","fediffuselighting","fedisplacementmap","fedistantlight","fedropshadow","feflood","fefunca","fefuncb","fefuncg","fefuncr","fegaussianblur","feimage","femerge","femergenode","femorphology","feoffset","fepointlight","fespecularlighting","fespotlight","fetile","feturbulence","filter","hatch","hatchpath","lineargradient","marker","mask","meshgradient","meshpatch","meshrow","metadata","mpath","pattern","radialgradient","solidcolor","stop","switch","view"]}],kl.elementsAllowedAnyRole=[{nodeName:"a",attributes:{href:Al}},{nodeName:"img",attributes:{alt:Al}},{nodeName:["abbr","address","canvas","div","p","pre","blockquote","ins","del","output","span","table","tbody","thead","tfoot","td","em","strong","small","s","cite","q","dfn","abbr","time","code","var","samp","kbd","sub","sup","i","b","u","mark","ruby","rt","rp","bdi","bdo","br","wbr","th","tr"]}],kl.evaluateRoleForElement={A:function(e){var t=e.node,n=e.out
return"http://www.w3.org/2000/svg"===t.namespaceURI||!t.href.length||n},AREA:function(e){return!e.node.href},BUTTON:function(e){var t=e.node,n=e.role,r=e.out
return"menu"===t.getAttribute("type")?"menuitem"===n:r},IMG:function(e){var t=e.node,n=e.role,r=e.out
switch(t.alt){case null:return r
case"":return"presentation"===n||"none"===n
default:return"presentation"!==n&&"none"!==n}},INPUT:function(e){var t=e.node,n=e.role,r=e.out
switch(t.type){case"button":case"image":return r
case"checkbox":return!("button"!==n||!t.hasAttribute("aria-pressed"))||r
case"radio":return"menuitemradio"===n
case"text":return"combobox"===n||"searchbox"===n||"spinbutton"===n
case"tel":return"combobox"===n||"spinbutton"===n
case"url":case"search":case"email":return"combobox"===n
default:return!1}},LI:function(e){var t=e.node,n=e.out
return!i.utils.matchesSelector(t,"ol li, ul li")||n},MENU:function(e){return"context"!==e.node.getAttribute("type")},OPTION:function(e){var t=e.node
return!i.utils.matchesSelector(t,"select > option, datalist > option, optgroup > option")},SELECT:function(e){var t=e.node,n=e.role
return!t.multiple&&t.size<=1&&"menu"===n},SVG:function(e){var t=e.node,n=e.out
return!(!t.parentNode||"http://www.w3.org/2000/svg"!==t.parentNode.namespaceURI)||n}},kl.rolesOfType={widget:["button","checkbox","dialog","gridcell","link","log","marquee","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","searchbox","slider","spinbutton","status","switch","tab","tabpanel","textbox","timer","tooltip","tree","treeitem"]}
var Fl=kl,Tl=function(e){var t=null,n=Fl.role[e]
return n&&n.implicit&&(t=or(n.implicit)),t},Nl=function(e){return!!hl(e).length},Rl=function(e){return e=er(e),ya(e)},_l=function(e){var t=za.ariaRoles[e]
return t&&Array.isArray(t.requiredAttrs)?_(t.requiredAttrs):[]},Ol=function(e){var t=za.ariaRoles[e]
return t&&Array.isArray(t.requiredContext)?_(t.requiredContext):null},Sl=function(e){var t=za.ariaRoles[e]
return t&&Array.isArray(t.requiredOwned)?_(t.requiredOwned):null},Il=function(e,t){var n,r,a=(e=e instanceof _t?e:er(e)).attr(t),o=za.ariaAttrs[t]
if(!o)return!0
if(o.allowEmpty&&(!a||""===a.trim()))return!0
switch(o.type){case"boolean":return["true","false"].includes(a.toLowerCase())
case"nmtoken":return"string"==typeof a&&o.values.includes(a.toLowerCase())
case"nmtokens":return(r=Ci(a)).reduce((function(e,t){return e&&o.values.includes(t)}),0!==r.length)
case"idref":try{var i=Vr(e.actualNode)
return!(!a||!i.getElementById(a))}catch(e){throw new TypeError("Cannot resolve id references for partial DOM")}case"idrefs":return va(e,t).some((function(e){return!!e}))
case"string":return""!==a.trim()
case"decimal":return!(!(n=a.match(/^[-+]?([0-9]*)\.?([0-9]*)$/))||!n[1]&&!n[2])
case"int":var s=void 0!==o.minValue?o.minValue:-1/0
return/^[-+]?[0-9]+$/.test(a)&&parseInt(a)>=s}},Pl=function(e){return!!za.ariaAttrs[e]}
function jl(e,t){var n=gs(e,{chromium:!0}),r=za.ariaRoles[n]
if(r)return r.prohibitedAttrs||[]
var a=e.props.nodeName
return n||t.includes(a)?[]:["aria-label","aria-labelledby"]}var Ml={}
function ql(e,t,n,r){var a=Bi(e)
if(n||(n=Ol(a)),!n)return null
for(var o=r?e:e.parent;o;){var i=gs(o)
if(n.includes("group")&&"group"===i)t.includes(a)&&n.push(a),n=n.filter((function(e){return"group"!==e})),o=o.parent
else{if(n.includes(i))return null
if(i&&!["presentation","none"].includes(i))return n
o=o.parent}}return n}B(Ml,{getAriaRolesByType:function(){return wl},getAriaRolesSupportingNameFromContent:function(){return xl},getElementSpec:function(){return us},getElementsByContentType:function(){return Ui},getGlobalAriaAttrs:function(){return Pi},implicitHtmlRoles:function(){return Qi}})
var Ll={ARTICLE:!0,ASIDE:!0,NAV:!0,SECTION:!0},Bl={application:!0,banner:!1,complementary:!0,contentinfo:!0,form:!0,main:!0,navigation:!0,region:!0,search:!1},Ul={}
B(Ul,{getAllCells:function(){return Hl},getCellPosition:function(){return Vi},getHeaders:function(){return zl},getScope:function(){return zi},isColumnHeader:function(){return $i},isDataCell:function(){return $l},isDataTable:function(){return Wl},isHeader:function(){return Gl},isRowHeader:function(){return Wi},toArray:function(){return Hi},toGrid:function(){return Hi},traverse:function(){return Ql}})
var Hl=function(e){var t,n,r,a,o=[]
for(t=0,r=e.rows.length;t<r;t++)for(n=0,a=e.rows[t].cells.length;n<a;n++)o.push(e.rows[t].cells[n])
return o}
function Vl(e,t,n){for(var r,a="row"===e?"_rowHeaders":"_colHeaders",o="row"===e?Wi:$i,s=n[t.y][t.x],l=s.colSpan-1,u=s.getAttribute("rowspan"),c=(0===parseInt(u)||0===s.rowspan?n.length:s.rowSpan)-1,d=t.y+c,p=t.x+l,f="row"===e?t.y:0,h="row"===e?0:t.x,m=[],g=d;g>=f&&!r;g--)for(var v=p;v>=h;v--){var b=n[g]?n[g][v]:void 0
if(b){var y=i.utils.getNodeFromTree(b)
if(y[a]){r=y[a]
break}m.push(b)}}return r=(r||[]).concat(m.filter(o)),m.forEach((function(e){i.utils.getNodeFromTree(e)[a]=r})),r}var zl=function(e,t){if(e.getAttribute("headers")){var n=va(e,"headers")
if(n.filter((function(e){return e})).length)return n}t||(t=Hi(Wr(e,"table")))
var r=Vi(e,t),a=Vl("row",r,t),o=Vl("col",r,t)
return[].concat(a,o).reverse()},$l=function(e){if(!e.children.length&&!e.textContent.trim())return!1
var t=e.getAttribute("role")
return Li(t)?["cell","gridcell"].includes(t):"TD"===e.nodeName.toUpperCase()},Wl=function(e){var t=(e.getAttribute("role")||"").toLowerCase()
if(("presentation"===t||"none"===t)&&!Ta(e))return!1
if("true"===e.getAttribute("contenteditable")||Wr(e,'[contenteditable="true"]'))return!0
if("grid"===t||"treegrid"===t||"table"===t)return!0
if("landmark"===ml(t))return!0
if("0"===e.getAttribute("datatable"))return!1
if(e.getAttribute("summary"))return!0
if(e.tHead||e.tFoot||e.caption)return!0
for(var r=0,a=e.children.length;r<a;r++)if("COLGROUP"===e.children[r].nodeName.toUpperCase())return!0
for(var o,i,s=0,l=e.rows.length,u=!1,c=0;c<l;c++)for(var d=0,p=(o=e.rows[c]).cells.length;d<p;d++){if("TH"===(i=o.cells[d]).nodeName.toUpperCase())return!0
if(u||i.offsetWidth===i.clientWidth&&i.offsetHeight===i.clientHeight||(u=!0),i.getAttribute("scope")||i.getAttribute("headers")||i.getAttribute("abbr"))return!0
if(["columnheader","rowheader"].includes((i.getAttribute("role")||"").toLowerCase()))return!0
if(1===i.children.length&&"ABBR"===i.children[0].nodeName.toUpperCase())return!0
s++}if(e.getElementsByTagName("table").length)return!1
if(l<2)return!1
var f,h,m=e.rows[Math.ceil(l/2)]
if(1===m.cells.length&&1===m.cells[0].colSpan)return!1
if(m.cells.length>=5)return!0
if(u)return!0
for(c=0;c<l;c++){if(o=e.rows[c],f&&f!==n.getComputedStyle(o).getPropertyValue("background-color"))return!0
if(f=n.getComputedStyle(o).getPropertyValue("background-color"),h&&h!==n.getComputedStyle(o).getPropertyValue("background-image"))return!0
h=n.getComputedStyle(o).getPropertyValue("background-image")}return l>=20||!(Kr(e).width>.95*Jr(n).width)&&!(s<10)&&!e.querySelector("object, embed, iframe, applet")},Gl=function(e){if($i(e)||Wi(e))return!0
if(e.getAttribute("id")){var t=Cn(e.getAttribute("id"))
return!!a.querySelector('[headers~="'.concat(t,'"]'))}return!1}
function Yl(e,t,n,r){var a,o=n[t.y]?n[t.y][t.x]:void 0
return o?"function"==typeof r&&!0===(a=r(o,t,n))?[o]:((a=Yl(e,{x:t.x+e.x,y:t.y+e.y},n,r)).unshift(o),a):[]}var Ql=function(e,t,n,r){if(Array.isArray(t)&&(r=n,n=t,t={x:0,y:0}),"string"==typeof e)switch(e){case"left":e={x:-1,y:0}
break
case"up":e={x:0,y:-1}
break
case"right":e={x:1,y:0}
break
case"down":e={x:0,y:1}}return Yl(e,{x:t.x+e.x,y:t.y+e.y},n,r)},Kl={}
B(Kl,{Color:function(){return $a},centerPointOfRect:function(){return Jl},elementHasImage:function(){return La},elementIsDistinct:function(){return Zl},filteredRectStack:function(){return tu},flattenColors:function(){return au},flattenShadowColors:function(){return ou},getBackgroundColor:function(){return du},getBackgroundStack:function(){return su},getContrast:function(){return hu},getForegroundColor:function(){return gu},getOwnBackgroundColor:function(){return Wa},getRectStack:function(){return eu},getTextShadowColors:function(){return cu},hasValidContrastRatio:function(){return vu},incompleteData:function(){return qa}})
var Jl=function(e){if(!(e.left>n.innerWidth||e.top>n.innerHeight))return{x:Math.min(Math.ceil(e.left+e.width/2),n.innerWidth-1),y:Math.min(Math.ceil(e.top+e.height/2),n.innerHeight-1)}}
function Xl(e){return e.getPropertyValue("font-family").split(/[,;]/g).map((function(e){return e.trim().toLowerCase()}))}var Zl=function(e,t){var r=n.getComputedStyle(e)
if("none"!==r.getPropertyValue("background-image"))return!0
if(["border-bottom","border-top","outline"].reduce((function(e,t){var n=new $a
return n.parseString(r.getPropertyValue(t+"-color")),e||"none"!==r.getPropertyValue(t+"-style")&&parseFloat(r.getPropertyValue(t+"-width"))>0&&0!==n.alpha}),!1))return!0
var a=n.getComputedStyle(t)
if(Xl(r)[0]!==Xl(a)[0])return!0
var o=["text-decoration-line","text-decoration-style","font-weight","font-style","font-size"].reduce((function(e,t){return e||r.getPropertyValue(t)!==a.getPropertyValue(t)}),!1),i=r.getPropertyValue("text-decoration")
return i.split(" ").length<3&&(o=o||i!==a.getPropertyValue("text-decoration")),o},eu=function(e){var t=da(e),n=ha(e)
return!n||n.length<=1?[t]:n.some((function(e){return void 0===e}))?null:(n.splice(0,0,t),n)},tu=function(e){var t=eu(e)
if(t&&1===t.length)return t[0]
if(t&&t.length>1){var n,r=t.shift()
return t.forEach((function(a,o){if(0!==o){var i=t[o-1],s=t[o]
n=i.every((function(e,t){return e===s[t]}))||r.includes(e)}})),n?t[0]:(qa.set("bgColor","elmPartiallyObscuring"),null)}return qa.set("bgColor","outsideViewport"),null},nu={normal:function(e,t){return t}}
function ru(e,t,n,r,a){return Math.round(t*(1-r)*e+t*r*nu[a](n,e)+(1-t)*r*n)}var au=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal",r=ru(e.red,e.alpha,t.red,t.alpha,n),a=ru(e.green,e.alpha,t.green,t.alpha,n),o=ru(e.blue,e.alpha,t.blue,t.alpha,n),i=Math.max(0,Math.min(e.alpha+t.alpha*(1-e.alpha),1))
return new $a(r,a,o,i)},ou=function(e,t){var n=e.alpha,r=(1-n)*t.red+n*e.red,a=(1-n)*t.green+n*e.green,o=(1-n)*t.blue+n*e.blue,i=e.alpha+t.alpha*(1-e.alpha)
return new $a(r,a,o,i)}
function iu(e,t){var n=e.getClientRects()[0],r=eo(n.left,n.top)
if(r)for(var a=0;a<r.length;a++)if(r[a]!==e&&r[a]===t)return!0
return!1}var su=function(e){var t=tu(e)
if(null===t)return null
var r=(t=function(e){var t=e.indexOf(a.body),r=e,o=Wa(n.getComputedStyle(a.documentElement))
if(t>1&&0===o.alpha&&!La(a.documentElement)){t>1&&(r.splice(t,1),r.push(a.body))
var i=r.indexOf(a.documentElement)
i>0&&(r.splice(i,1),r.push(a.documentElement))}return r}(t=Ka(t,e))).indexOf(e)
return function(e,t,n){if(e>0)for(var r=e-1;r>=0;r--){if(iu(n,t[r]))return!0
t.splice(r,1)}return!1}(r,t,e)?(qa.set("bgColor","bgOverlap"),null):-1!==r?t:null}
function lu(e){var t={pixels:[]},n=e.trim(),r=[t]
if(!n)return[]
for(;n;){var a=n.match(/^rgba?\([0-9,.\s]+\)/i)||n.match(/^[a-z]+/i)||n.match(/^#[0-9a-f]+/i),o=n.match(/^([0-9.-]+)px/i)||n.match(/^(0)/)
if(a)Pt(!t.colorStr,"Multiple colors identified in text-shadow: ".concat(e)),n=n.replace(a[0],"").trim(),t.colorStr=a[0]
else if(o){Pt(t.pixels.length<3,"Too many pixel units in text-shadow: ".concat(e)),n=n.replace(o[0],"").trim()
var i=parseFloat(("."===o[1][0]?"0":"")+o[1])
t.pixels.push(i)}else{if(","!==n[0])throw new Error("Unable to process text-shadows: ".concat(e))
Pt(t.pixels.length>=2,"Missing pixel value in text-shadow: ".concat(e)),t={pixels:[]},r.push(t),n=n.substr(1).trim()}}return r}function uu(e){var t=e.colorStr,n=e.offsetX,r=e.offsetY,a=e.blurRadius,o=e.fontSize
if(n>a||r>a)return new $a(0,0,0,0)
var i=new $a
return i.parseString(t),i.alpha*=function(e,t){return 0===e?1:.185/(e/t+.4)}(a,o),i}var cu=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minRatio,a=t.maxRatio,o=n.getComputedStyle(e),i=o.getPropertyValue("text-shadow")
if("none"===i)return[]
var s=o.getPropertyValue("font-size"),l=parseInt(s)
Pt(!1===isNaN(l),"Unable to determine font-size value ".concat(s))
var u=[],c=lu(i)
return c.forEach((function(e){var t=e.colorStr,n=e.pixels
t=t||o.getPropertyValue("color")
var i=O(n,3),s=i[0],c=i[1],d=i[2],p=void 0===d?0:d
if((!r||p>=l*r)&&(!a||p<l*a)){var f=uu({colorStr:t,offsetY:s,offsetX:c,blurRadius:p,fontSize:l})
u.push(f)}})),u}
function du(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.1,i=cu(e,{minRatio:o})
i.length&&(i=[i.reduce(ou)])
var s=su(e)
if((s||[]).some((function(t){var a=n.getComputedStyle(t),o=Wa(a)
return pu(e,t,o)||La(t,a)?(i=null,r.push(t),!0):0!==o.alpha&&(r.push(t),i.unshift(o),1===o.alpha)})),null===i||null===s)return null
var l=fu(e,s.includes(a.body));(t=i).unshift.apply(t,_(l))
var u=i.reduce((function(e,t){return au(t,e)}))
return u}function pu(e,t,n){var r=e!==t&&!Ja(e,t)&&0!==n.alpha
return r&&qa.set("bgColor","elmPartiallyObscured"),r}function fu(e,t){var r=[]
if(!t){var o=a.documentElement,i=a.body,s=n.getComputedStyle(o),l=n.getComputedStyle(i),u=Wa(s),c=Wa(l),d=0!==c.alpha&&Ja(e,i);(0!==c.alpha&&0===u.alpha||d&&1!==c.alpha)&&r.unshift(c),0!==u.alpha&&(!d||d&&1!==c.alpha)&&r.unshift(u)}return r.unshift(new $a(255,255,255,1)),r}var hu=function(e,t){if(!t||!e)return null
t.alpha<1&&(t=au(t,e))
var n=e.getRelativeLuminance(),r=t.getRelativeLuminance()
return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}
function mu(e){if(!e)return 1
var t=er(e)
if(t&&void 0!==t._opacity&&null!==t._opacity)return t._opacity
var r=n.getComputedStyle(e).getPropertyValue("opacity")*mu(e.parentElement)
return t&&(t._opacity=r),r}var gu=function(e,t,r){var a=n.getComputedStyle(e),o=new $a
o.parseString(a.getPropertyValue("color"))
var i=mu(e)
if(o.alpha=o.alpha*i,1===o.alpha)return o
if(r||(r=du(e,[])),null===r){var s=qa.get("bgColor")
return qa.set("fgColor",s),null}if(o.alpha<1){var l=cu(e,{minRatio:0})
return[o].concat(_(l),[r]).reduce(ou)}return au(o,r)},vu=function(e,t,n,r){var a=hu(e,t),o=r&&Math.ceil(72*n)/96<14||!r&&Math.ceil(72*n)/96<18?4.5:3
return{isValid:a>o,contrastRatio:a,expectedContrastRatio:o}},bu=zo((function(e,t){var r=n.getComputedStyle(e,t),a=function(e,t){return r.getPropertyValue(e)===t}
if(a("content","none")||a("display","none")||a("visibility","hidden")||!1===a("position","absolute"))return 0
if(0===Wa(r).alpha&&a("background-image","none"))return 0
var o=yu(r.getPropertyValue("width")),i=yu(r.getPropertyValue("height"))
return"px"!==o.unit||"px"!==i.unit?0===o.value||0===i.value?0:1/0:o.value*i.value}))
function yu(e){var t=O(e.match(/^([0-9.]+)([a-z]+)$/i)||[],3),n=t[1],r=void 0===n?"":n,a=t[2],o=void 0===a?"":a
return{value:parseFloat(r),unit:o.toLowerCase()}}function wu(e,t){var n=e.getRelativeLuminance(),r=t.getRelativeLuminance()
return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}var Du=["block","list-item","table","flex","grid","inline-block"]
function xu(e){var t=n.getComputedStyle(e).getPropertyValue("display")
return-1!==Du.indexOf(t)||"table-"===t.substr(0,6)}function Eu(e,t){var n,r=null===(n=t.data)||void 0===n?void 0:n.headingOrder,a=Cu(t.node.ancestry,1)
if(!r)return e
var o=r.map((function(e){return function(e,t){return S({},e,{ancestry:t.concat(e.ancestry)})}(e,a)})),i=function(e,t){for(;t.length;){var n=Au(e,t)
if(-1!==n)return n
t=Cu(t,1)}return-1}(e,a)
return-1===i?e.push.apply(e,_(o)):e.splice.apply(e,[i,0].concat(_(o))),e}function Au(e,t){return e.findIndex((function(e){return Ho(e.ancestry,t)}))}function Cu(e,t){return e.slice(0,e.length-t)}function ku(e){var t=gs(e),n=t&&t.includes("heading"),r=e.attr("aria-level"),a=parseInt(r,10),o=O(e.props.nodeName.match(/h(\d)/)||[],2)[1]
return n?o&&!r?parseInt(o,10):isNaN(a)||a<1?o?parseInt(o,10):2:a||-1:-1}function Fu(e,t){if(!e||!t)return!1
var n=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(t)
return n.length===r.length&&n.every((function(n){var r=e[n],a=t[n]
return o(r)===o(a)&&("object"==typeof r||"object"==typeof a?Fu(r,a):r===a)}))}var Tu={}
B(Tu,{aria:function(){return Ii},color:function(){return Kl},dom:function(){return Ur},forms:function(){return Nu},matches:function(){return ls},standards:function(){return Ml},table:function(){return Ul},text:function(){return Xs},utils:function(){return Ot}})
var Nu={}
B(Nu,{isAriaCombobox:function(){return qs},isAriaListbox:function(){return Ms},isAriaRange:function(){return Bs},isAriaTextbox:function(){return js},isDisabled:function(){return _u},isNativeSelect:function(){return Ps},isNativeTextbox:function(){return Is}})
var Ru=["fieldset","button","select","input","textarea"],_u=function e(t){var n=t._isDisabled
if("boolean"==typeof n)return n
var r=t.props.nodeName,a=t.attr("aria-disabled")
return n=!(!Ru.includes(r)||!t.hasAttr("disabled"))||(a?"true"===a.toLowerCase():!!t.parent&&e(t.parent)),t._isDisabled=n,n}
function Ou(e){switch(e){case"lighter":return 100
case"normal":return 400
case"bold":return 700
case"bolder":return 900}return e=parseInt(e),isNaN(e)?400:e}function Su(e){var t=n.getComputedStyle(function(e){for(var t=e,n=e.textContent.trim(),r=n;r===n&&void 0!==t;){var a=-1
if(0===(e=t).children.length)return e
do{a++,r=e.children[a].textContent.trim()}while(""===r&&a+1<e.children.length)
t=e.children[a]}return e}(e))
return{fontWeight:Ou(t.getPropertyValue("font-weight")),fontSize:parseInt(t.getPropertyValue("font-size")),isItalic:"italic"===t.getPropertyValue("font-style")}}function Iu(e,t,n){return n.reduce((function(n,r){return n||(!r.size||e.fontSize/r.size>t.fontSize)&&(!r.weight||e.fontWeight-r.weight>t.fontWeight)&&(!r.italic||e.isItalic&&!t.isItalic)}),!1)}var Pu=wl("landmark"),ju=["alert","log","status"]
function Mu(e,t){var n=e.actualNode
if(function(e,t){var n=e.actualNode,r=gs(e),a=(n.getAttribute("aria-live")||"").toLowerCase().trim()
return!!(["assertive","polite"].includes(a)||ju.includes(r)||Pu.includes(r)||t.regionMatcher&&ls(e,t.regionMatcher))}(e,t)||["iframe","frame"].includes(e.props.nodeName)||Qa(e.actualNode)&&Yr(e.actualNode,"href")||!ta(n,!0)){for(var r=e;r;)r._hasRegionDescendant=!0,r=r.parent
return["iframe","frame"].includes(e.props.nodeName)?[e]:[]}return n!==a.body&&xa(n,!0)?[e]:e.children.filter((function(e){return 1===e.actualNode.nodeType})).map((function(e){return Mu(e,t)})).reduce((function(e,t){return e.concat(t)}),[])}function qu(e){if(Ta(e))return!0
if(!e.children){if(1===e.props.nodeType)throw new Error("Cannot determine children")
return!1}return e.children.some((function(e){return qu(e)}))}function Lu(e,t){var n=Bu(t),r=Bu(e)
return!(!n||!r)&&n.includes(r)}function Bu(e){var t=nl(e,{emoji:!0,nonBmp:!0,punctuations:!0})
return fa(t)}function Uu(e){return""!==(e||"").trim()}function Hu(e){return!e||"true"!==e.getAttribute("aria-hidden")&&Hu(Gr(e))}var Vu=function(e,t,n){return n.initiator},zu=function(e,t){try{return"svg"===t.props.nodeName||!!wr(t,"svg")}catch(e){return!1}},$u=function(e,t){var n=us(t).namingMethods
return!(n&&0!==n.length||"combobox"===Bi(t)&&gi(t,'input:not([type="hidden"])').length)},Wu={"abstractrole-evaluate":function(e,t,n){var r=Ci(n.attr("role")).filter((function(e){return"abstract"===ml(e)}))
return r.length>0&&(this.data(r),!0)},"aria-allowed-attr-evaluate":function(e,t,n){var r=[],a=gs(n),o=n.attrNames,i=ji(a)
Array.isArray(t[a])&&(i=ni(t[a].concat(i)))
var s=Zn.get("aria-allowed-attr-table")
function l(){if(n.parent&&"row"===a){var e=wr(n,'table, [role="treegrid"], [role="table"], [role="grid"]'),t=s.get(e)
if(e&&!t&&(t=gs(e),s.set(e,t)),["table","grid"].includes(t)&&"row"===a)return!0}}s||(s=new WeakMap,Zn.set("aria-allowed-attr-table",s))
var u=Array.isArray(t.validTreeRowAttrs)?t.validTreeRowAttrs:[],c={}
if(u.forEach((function(e){c[e]=l})),a&&i)for(var d=0;d<o.length;d++){var p,f=o[d];(Pl(f)&&null!==(p=c[f])&&void 0!==p&&p.call(c)||Pl(f)&&!i.includes(f))&&r.push(f+'="'+n.attr(f)+'"')}return!r.length||(this.data(r),!1)},"aria-allowed-role-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=t.allowImplicit,a=void 0===r||r,o=t.ignoredTags,i=void 0===o?[]:o,s=n.props.nodeName
if(i.map((function(e){return e.toLowerCase()})).includes(s))return!0
var l=yl(n,a)
if(l.length){if(this.data(l),!ta(n,!0))return
return!1}return!0},"aria-errormessage-evaluate":function(e,t,n){t=Array.isArray(t)?t:[]
var r=n.attr("aria-errormessage"),a=n.hasAttr("aria-errormessage"),o=n.attr("aria-invalid")
return!n.hasAttr("aria-invalid")||"false"===o||-1!==t.indexOf(r)||!a||(this.data(Ci(r)),function(e){if(""===e.trim())return za.ariaAttrs["aria-errormessage"].allowEmpty
var t
try{t=e&&va(n,"aria-errormessage")[0]}catch(t){return void this.data({messageKey:"idrefs",values:Ci(e)})}return t?ta(t,!0)?"alert"===t.getAttribute("role")||"assertive"===t.getAttribute("aria-live")||"polite"===t.getAttribute("aria-live")||Ci(n.attr("aria-describedby")).indexOf(e)>-1:(this.data({messageKey:"hidden",values:Ci(e)}),!1):void 0}.call(this,r))},"aria-hidden-body-evaluate":function(e,t,n){return"true"!==n.attr("aria-hidden")},"aria-level-evaluate":function(e,t,n){var r=n.attr("aria-level")
if(!(parseInt(r,10)>6))return!0},"aria-prohibited-attr-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=t.elementsAllowedAriaLabel||[],a=jl(n,r),o=a.filter((function(e){return!!n.attrNames.includes(e)&&""!==fa(n.attr(e))}))
if(0===o.length)return!1
this.data(o)
var i=""!==fa(Es(n))
return!i||void 0},"aria-required-attr-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=[],a=n.attrNames,o=Bi(n)
if(a.length){var i=_l(o),s=us(n)
if(Array.isArray(t[o])&&(i=ni(t[o],i)),o&&i)for(var l=0,u=i.length;l<u;l++){var c=i[l]
n.attr(c)||s.implicitAttrs&&void 0!==s.implicitAttrs[c]||r.push(c)}}var d="combobox"===o&&r.includes("aria-controls")
return d&&(n.hasAttr("aria-owns")||"true"!==n.attr("aria-expanded"))&&r.splice(r.indexOf("aria-controls",1)),!r.length||(this.data(r),!1)},"aria-required-children-evaluate":function(e,t,n){var r=t&&Array.isArray(t.reviewEmpty)?t.reviewEmpty:[],a=Bi(n,{dpub:!0}),o=Sl(a)
if(null===o)return!0
var i=function(e,t){for(var n=[],r=ws(e),a=function(e){var a=r[e],o=gs(a,{noPresentational:!0})
!o||["group","rowgroup"].includes(o)&&t.some((function(e){return e===o}))?r.push.apply(r,_(a.children)):o&&n.push(o)},o=0;o<r.length;o++)a(o)
return n}(n,o),s=function(e,t,n,r){for(var a=0;a<r.length;a++){var o=r[a]
if(n.includes(o))return n=n.filter((function(e){return e!==o})),null}return n.length?n:null}(0,0,o,i)
return!s||(this.data(s),!(!r.includes(a)||Da(n,!1,!0)||i.length||n.hasAttr("aria-owns")&&va(e,"aria-owns").length)&&void 0)},"aria-required-parent-evaluate":function(e,t,n){var r=t&&Array.isArray(t.ownGroupRoles)?t.ownGroupRoles:[],a=ql(n,r)
if(!a)return!0
var o=function(e){for(var t=[],n=null;e;){if(e.getAttribute("id")){var r=Cn(e.getAttribute("id"));(n=Vr(e).querySelector("[aria-owns~=".concat(r,"]")))&&t.push(n)}e=e.parentElement}return t.length?t:null}(e)
if(o)for(var i=0,s=o.length;i<s;i++)if(!(a=ql(er(o[i]),r,a,!0)))return!0
return this.data(a),!1},"aria-roledescription-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=gs(e),r=t.supportedRoles||[]
return!!r.includes(n)||!(!n||"presentation"===n||"none"===n)&&void 0},"aria-unsupported-attr-evaluate":function(e,t,n){var r=n.attrNames.filter((function(t){var n=za.ariaAttrs[t]
if(!Pl(t))return!1
var r=n.unsupported
return"object"!==o(r)?!!r:!ls(e,r.exceptions)}))
return!!r.length&&(this.data(r),!0)},"aria-valid-attr-evaluate":function(e,t,n){t=Array.isArray(t.value)?t.value:[]
var r=[],a=/^aria-/
return n.attrNames.forEach((function(e){-1===t.indexOf(e)&&a.test(e)&&!Pl(e)&&r.push(e)})),!r.length||(this.data(r),!1)},"aria-valid-attr-value-evaluate":function(e,t,n){t=Array.isArray(t.value)?t.value:[]
var r="",a="",o=[],i=/^aria-/,s=["aria-errormessage"],l={"aria-controls":function(){return"false"!==n.attr("aria-expanded")&&"false"!==n.attr("aria-selected")},"aria-current":function(e){e||(r='aria-current="'.concat(n.attr("aria-current"),'"'),a="ariaCurrent")},"aria-owns":function(){return"false"!==n.attr("aria-expanded")},"aria-describedby":function(e){e||(r='aria-describedby="'.concat(n.attr("aria-describedby"),'"'),a="noId")},"aria-labelledby":function(e){e||(r='aria-labelledby="'.concat(n.attr("aria-labelledby"),'"'),a="noId")}}
if(n.attrNames.forEach((function(e){if(!s.includes(e)&&!t.includes(e)&&i.test(e)){var u,c=n.attr(e)
try{u=Il(n,e)}catch(t){r="".concat(e,'="').concat(c,'"'),a="idrefs"}l[e]&&!l[e](u)||u||o.push("".concat(e,'="').concat(c,'"'))}})),!r)return!o.length||(this.data(o),!1)
this.data({messageKey:a,needsReview:r})},"fallbackrole-evaluate":function(e,t,n){var r=Ci(n.attr("role"))
return!(r.length<=1)&&(!function(e,t){return!cs(e)&&2===t.length&&t.includes("none")&&t.includes("presentation")}(n,r)||void 0)},"has-global-aria-attribute-evaluate":function(e,t,n){var r=Pi().filter((function(e){return n.hasAttr(e)}))
return this.data(r),r.length>0},"has-implicit-chromium-role-matches":function(e,t){return null!==cs(t,{chromium:!0})},"has-widget-role-evaluate":function(e){var t=e.getAttribute("role")
if(null===t)return!1
var n=ml(t)
return"widget"===n||"composite"===n},"invalidrole-evaluate":function(e,t,n){var r=Ci(n.attr("role"))
return!!r.every((function(e){return!Li(e,{allowAbstract:!0})}))&&(this.data(r),!0)},"is-element-focusable-evaluate":function(e,t,n){return Ta(n)},"no-implicit-explicit-label-evaluate":function(e,t,n){var r,a,o=gs(n,{noImplicit:!0})
this.data(o)
try{r=fa(Cs(n)).toLowerCase(),a=fa(Qs(n)).toLowerCase()}catch(e){return}return!(!a&&!r)&&!((a||!r)&&a.includes(r))&&void 0},"unsupportedrole-evaluate":function(e,t,n){return qi(gs(n))},"valid-scrollable-semantics-evaluate":function(e,t){return function(e,t){var n=Bi(e)
return n&&(Bl[n]||t.roles.includes(n))||!1}(e,t)||function(e){var t=e.nodeName.toUpperCase()
return Ll[t]||!1}(e)},"caption-faked-evaluate":function(e){var t=Hi(e),n=t[0]
return t.length<=1||n.length<=1||e.rows.length<=1||n.reduce((function(e,t,r){return e||t!==n[r+1]&&void 0!==n[r+1]}),!1)},"html5-scope-evaluate":function(e){return!Ra(a)||"TH"===e.nodeName.toUpperCase()},"same-caption-summary-evaluate":function(e){return!(!e.summary||!e.caption)&&e.summary.toLowerCase()===Ks(e.caption).toLowerCase()},"scope-value-evaluate":function(e,t){var n=e.getAttribute("scope").toLowerCase()
return-1!==t.values.indexOf(n)},"td-has-header-evaluate":function(e){var t=[],n=Hl(e),r=Hi(e)
return n.forEach((function(e){xa(e)&&$l(e)&&!Rl(e)&&(zl(e,r).some((function(e){return null!==e&&!!xa(e)}))||t.push(e))})),!t.length||(this.relatedNodes(t),!1)},"td-headers-attr-evaluate":function(e){for(var t=[],n=[],r=[],a=0;a<e.rows.length;a++)for(var o=e.rows[a],i=0;i<o.cells.length;i++)t.push(o.cells[i])
var s=t.reduce((function(e,t){return t.getAttribute("id")&&e.push(t.getAttribute("id")),e}),[])
return t.forEach((function(e){var t=!1,a=!1
if(e.hasAttribute("headers")){var o=e.getAttribute("headers").trim()
if(!o)return n.push(e)
var i=Ci(o)
0!==i.length&&(e.getAttribute("id")&&(t=-1!==i.indexOf(e.getAttribute("id").trim())),a=i.some((function(e){return!s.includes(e)})),(t||a)&&r.push(e))}})),r.length>0?(this.relatedNodes(r),!1):!n.length||void this.relatedNodes(n)},"th-has-data-cells-evaluate":function(e){var t=Hl(e),n=this,r=[]
t.forEach((function(e){var t=e.getAttribute("headers")
t&&(r=r.concat(t.split(/\s+/)))
var n=e.getAttribute("aria-labelledby")
n&&(r=r.concat(n.split(/\s+/)))}))
var a=t.filter((function(e){return""!==fa(e.textContent)&&("TH"===e.nodeName.toUpperCase()||-1!==["rowheader","columnheader"].indexOf(e.getAttribute("role")))})),o=Hi(e),i=!0
return a.forEach((function(e){if(!e.getAttribute("id")||!r.includes(e.getAttribute("id"))){var t=Vi(e,o),a=!1
$i(e)&&(a=Ql("down",t,o).find((function(t){return!$i(t)&&zl(t,o).includes(e)}))),!a&&Wi(e)&&(a=Ql("right",t,o).find((function(t){return!Wi(t)&&zl(t,o).includes(e)}))),a||n.relatedNodes(e),i=i&&a}})),!!i||void 0},"hidden-content-evaluate":function(e,t,r){if(!["SCRIPT","HEAD","TITLE","NOSCRIPT","STYLE","TEMPLATE"].includes(e.nodeName.toUpperCase())&&Da(r)){var a=n.getComputedStyle(e)
if("none"===a.getPropertyValue("display"))return
if("hidden"===a.getPropertyValue("visibility")){var o=Gr(e),i=o&&n.getComputedStyle(o)
if(!i||"hidden"!==i.getPropertyValue("visibility"))return}}return!0},"color-contrast-evaluate":function(e,t,r){var a=t.ignoreUnicode,o=t.ignoreLength,i=t.ignorePseudo,s=t.boldValue,l=t.boldTextPt,u=t.largeTextPt,c=t.contrastRatio,d=t.shadowOutlineEmMax,p=t.pseudoSizeThreshold
if(!ta(e,!1))return!0
var f=ba(r,!1,!0)
if(!a||!function(e){var t={nonBmp:!0},n=el(e,t),r=""===fa(nl(e,t))
return n&&r}(f)){var h=function(e,t){var n=t.pseudoSizeThreshold,r=void 0===n?.25:n,a=t.ignorePseudo
if(void 0===a||!a){var o=e.boundingClientRect,i=o.width*o.height*r
do{if(bu(e.actualNode,":before")+bu(e.actualNode,":after")>i)return e}while(e=e.parent)}}(r,{ignorePseudo:i,pseudoSizeThreshold:p})
if(h)return this.data({messageKey:"pseudoContent"}),void this.relatedNodes(h.actualNode)
var m=[],g=du(e,m,d),v=gu(e,!1,g),b=cu(e,{minRatio:.001,maxRatio:d}),y=n.getComputedStyle(e),w=parseFloat(y.getPropertyValue("font-size")),D=y.getPropertyValue("font-weight"),x=parseFloat(D)>=s||"bold"===D,E=null,A=null,C=null
if(0===b.length)E=hu(g,v)
else if(v&&g){C=[].concat(_(b),[g]).reduce(ou)
var k=hu(g,C),F=hu(C,v)
E=Math.max(k,F),A=k>F?"shadowOnBgColor":"fgOnShadowColor"}var T=Math.ceil(72*w)/96,N=x&&T<l||!x&&T<u?c.normal:c.large,R=N.expected,O=N.minThreshold,S=N.maxThreshold,I=E>R
if("number"==typeof O&&E<O||"number"==typeof S&&E>S)return!0
var P,j=Math.floor(100*E)/100
null===g?P=qa.get("bgColor"):I||(P=A)
var M=1===j,q=1===f.length
return M?P=qa.set("bgColor","equalRatio"):I||!q||o||(P="shortTextContent"),this.data({fgColor:v?v.toHexString():void 0,bgColor:g?g.toHexString():void 0,contrastRatio:j,fontSize:"".concat((72*w/96).toFixed(1),"pt (").concat(w,"px)"),fontWeight:x?"bold":"normal",messageKey:P,expectedContrastRatio:R+":1",shadowColor:C?C.toHexString():void 0}),null===v||null===g||M||q&&!o&&!I?(P=null,qa.clear(),void this.relatedNodes(m)):(I||this.relatedNodes(m),I)}this.data({messageKey:"nonBmp"})},"link-in-text-block-evaluate":function(e){if(xu(e))return!1
for(var t,n,r=Gr(e);1===r.nodeType&&!xu(r);)r=Gr(r)
if(this.relatedNodes([r]),Zl(e,r))return!0
if(t=gu(e),n=gu(r),t&&n){var a,o=wu(t,n)
return 1===o||(o>=3?(qa.set("fgColor","bgContrast"),this.data({messageKey:qa.get("fgColor")}),void qa.clear()):(t=du(e),n=du(r),(!t||!n||wu(t,n)>=3)&&(a=t&&n?"bgContrast":qa.get("bgColor"),qa.set("fgColor",a),this.data({messageKey:qa.get("fgColor")}),void qa.clear())))}},"autocomplete-appropriate-evaluate":function(e,t,n){if("input"!==n.props.nodeName)return!0
var r=["text","search","number","tel"],a=["text","search","url"],i={bday:["text","search","date"],email:["text","search","email"],username:["text","search","email"],"street-address":["text"],tel:["text","search","tel"],"tel-country-code":["text","search","tel"],"tel-national":["text","search","tel"],"tel-area-code":["text","search","tel"],"tel-local":["text","search","tel"],"tel-local-prefix":["text","search","tel"],"tel-local-suffix":["text","search","tel"],"tel-extension":["text","search","tel"],"cc-number":r,"cc-exp":["text","search","month","tel"],"cc-exp-month":r,"cc-exp-year":r,"cc-csc":r,"transaction-amount":r,"bday-day":r,"bday-month":r,"bday-year":r,"new-password":["text","search","password"],"current-password":["text","search","password"],url:a,photo:a,impp:a}
"object"===o(t)&&Object.keys(t).forEach((function(e){i[e]||(i[e]=[]),i[e]=i[e].concat(t[e])}))
var s=n.attr("autocomplete").split(/\s+/g).map((function(e){return e.toLowerCase()})),l=s[s.length-1]
if(ol.stateTerms.includes(l))return!0
var u=i[l],c=n.hasAttr("type")?fa(n.attr("type")).toLowerCase():"text"
return c=ki().includes(c)?c:"text",void 0===u?"text"===c:u.includes(c)},"autocomplete-valid-evaluate":function(e,t,n){var r=n.attr("autocomplete")||""
return il(r,t)},"attr-non-space-content-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0
if(!t.attribute||"string"!=typeof t.attribute)throw new TypeError("attr-non-space-content requires options.attribute to be a string")
if(!n.hasAttr(t.attribute))return this.data({messageKey:"noAttr"}),!1
var r=n.attr(t.attribute),a=!fa(r)
return!a||(this.data({messageKey:"emptyAttr"}),!1)},"has-descendant-after":function(e){return e.some((function(e){return!0===e.result}))&&e.forEach((function(e){e.result=!0})),e},"has-descendant-evaluate":function(e,t,n){if(!t||!t.selector||"string"!=typeof t.selector)throw new TypeError("has-descendant requires options.selector to be a string")
var r=oi(n,t.selector,(function(e){return ta(e.actualNode,!0)}))
return this.relatedNodes(r.map((function(e){return e.actualNode}))),r.length>0},"has-text-content-evaluate":function(e,t,n){try{return""!==fa(Es(n))}catch(e){return}},"matches-definition-evaluate":function(e,t,n){return ls(n,t.matcher)},"page-no-duplicate-after":function(e){return e.filter((function(e){return"ignored"!==e.data}))},"page-no-duplicate-evaluate":function(e,t,n){if(!t||!t.selector||"string"!=typeof t.selector)throw new TypeError("page-no-duplicate requires options.selector to be a string")
var r="page-no-duplicate;"+t.selector
if(!Zn.get(r)){Zn.set(r,!0)
var a=oi(i._tree[0],t.selector,(function(e){return ta(e.actualNode,!0)}))
return"string"==typeof t.nativeScopeFilter&&(a=a.filter((function(e){return e.actualNode.hasAttribute("role")||!$r(e,t.nativeScopeFilter)}))),this.relatedNodes(a.filter((function(e){return e!==n})).map((function(e){return e.actualNode}))),a.length<=1}this.data("ignored")},"heading-order-after":function(e){var t=function(e){return(e=_(e)).sort((function(e,t){var n=e.node,r=t.node
return n.ancestry.length-r.ancestry.length})),e.reduce(Eu,[]).filter((function(e){return-1!==e.level}))}(e)
return e.forEach((function(e){e.result=function(e,t){var n,r,a,o,i=Au(t,e.node.ancestry),s=null!==(n=null===(r=t[i])||void 0===r?void 0:r.level)&&void 0!==n?n:-1,l=null!==(a=null===(o=t[i-1])||void 0===o?void 0:o.level)&&void 0!==a?a:-1
return 0===i||(-1!==s?s-l<=1:void 0)}(e,t)})),e},"heading-order-evaluate":function(){var e=Zn.get("headingOrder")
if(e)return!0
var t=oi(i._tree[0],"h1, h2, h3, h4, h5, h6, [role=heading], iframe, frame",(function(e){return ta(e.actualNode,!0)}))
return e=t.map((function(e){return{ancestry:[Qn(e.actualNode)],level:ku(e)}})),this.data({headingOrder:e}),Zn.set("headingOrder",t),!0},"identical-links-same-purpose-after":function(e){if(e.length<2)return e
for(var t=e.filter((function(e){return void 0!==e.result})),n=[],r={},a=function(e){var a,o=t[e],i=o.data,s=i.name,l=i.urlProps
if(r[s])return"continue"
var u=t.filter((function(t,n){return t.data.name===s&&n!==e})),c=u.every((function(e){return Fu(e.data.urlProps,l)}))
u.length&&!c&&(o.result=void 0),o.relatedNodes=[],(a=o.relatedNodes).push.apply(a,_(u.map((function(e){return e.relatedNodes[0]})))),r[s]=u,n.push(o)},o=0;o<t.length;o++)a(o)
return n},"identical-links-same-purpose-evaluate":function(e,t,n){var r=Xs.accessibleTextVirtual(n),a=Xs.sanitize(Xs.removeUnicode(r,{emoji:!0,nonBmp:!0,punctuations:!0})).toLowerCase()
if(a){var o={name:a,urlProps:Ur.urlPropsFromAttribute(e,"href")}
return this.data(o),this.relatedNodes([e]),!0}},"internal-link-present-evaluate":function(e,t,n){return gi(n,"a[href]").some((function(e){return/^#[^/!]/.test(e.actualNode.getAttribute("href"))}))},"meta-refresh-evaluate":function(e,t,n){var r=n.attr("content")||"",a=r.split(/[;,]/)
return""===r||"0"===a[0]},"p-as-heading-evaluate":function(e,t,n){var r=Array.from(e.parentNode.children),a=r.indexOf(e),o=(t=t||{}).margins||[],i=r.slice(a+1).find((function(e){return"P"===e.nodeName.toUpperCase()})),s=r.slice(0,a).reverse().find((function(e){return"P"===e.nodeName.toUpperCase()})),l=Su(e),u=i?Su(i):null,c=s?Su(s):null,d=t.passLength,p=t.failLength,f=e.textContent.trim().length,h=null==i?void 0:i.textContent.trim().length
if(f>h*d)return!0
if(!u||!Iu(l,u,o))return!0
var m=$r(n,"blockquote")
return!!(m&&"BLOCKQUOTE"===m.nodeName.toUpperCase()||c&&!Iu(l,c,o)||f>h*p)&&void 0},"region-evaluate":function(e,t,n){var r=Zn.get("regionlessNodes")
return this.data({isIframe:["iframe","frame"].includes(n.props.nodeName)}),r||(r=Mu(i._tree[0],t).map((function(e){for(;e.parent&&!e.parent._hasRegionDescendant&&e.parent.actualNode!==a.body;)e=e.parent
return e})).filter((function(e,t,n){return n.indexOf(e)===t})),Zn.set("regionlessNodes",r)),!r.includes(n)},"region-after":function(e){var t=e.filter((function(e){return e.data.isIframe}))
return e.forEach((function(e){if(!e.result&&1!==e.node.ancestry.length){var n,r=e.node.ancestry.slice(0,-1),a=M(t)
try{for(a.s();!(n=a.n()).done;){var o=n.value
if(Ho(r,o.node.ancestry)){e.result=o.result
break}}}catch(e){a.e(e)}finally{a.f()}}})),t.forEach((function(e){e.result||(e.result=!0)})),e},"skip-link-evaluate":function(e){var t=Yr(e,"href")
return!!t&&(ta(t,!0)||void 0)},"unique-frame-title-after":function(e){var t={}
return e.forEach((function(e){t[e.data]=void 0!==t[e.data]?++t[e.data]:0})),e.forEach((function(e){e.result=!!t[e.data]})),e},"unique-frame-title-evaluate":function(e,t,n){var r=fa(n.attr("title")).toLowerCase()
return this.data(r),!0},"aria-label-evaluate":function(e,t,n){return!!fa(Mi(n))},"aria-labelledby-evaluate":function(e,t,n){try{return!!fa(Js(n))}catch(e){return}},"avoid-inline-spacing-evaluate":function(e,t){var n=t.cssProperties.filter((function(t){if("important"===e.style.getPropertyPriority(t))return t}))
return!(n.length>0&&(this.data(n),1))},"doc-has-title-evaluate":function(){var e=a.title
return!!fa(e)},"exists-evaluate":function(){},"has-alt-evaluate":function(e,t,n){var r=n.props.nodeName
return!!["img","input","area"].includes(r)&&n.hasAttr("alt")},"is-on-screen-evaluate":function(e){return ta(e,!1)&&!Xr(e)},"non-empty-if-present-evaluate":function(e,t,n){var r=n.props.nodeName,a=(n.attr("type")||"").toLowerCase(),o=n.attr("value")
return o&&this.data({messageKey:"has-label"}),!("input"!==r||!["submit","reset"].includes(a))&&null===o},"presentational-role-evaluate":function(e,t,n){var r=gs(n),a=Bi(n)
if(["presentation","none"].includes(r))return this.data({role:r}),!0
if(!["presentation","none"].includes(a))return!1
var o,i=Pi().some((function(e){return n.hasAttr(e)})),s=Ta(n)
return o=i&&!s?"globalAria":!i&&s?"focusable":"both",this.data({messageKey:o,role:r}),!1},"svg-non-empty-title-evaluate":function(e,t,n){if(n.children){var r=n.children.find((function(e){return"title"===e.props.nodeName}))
if(!r)return this.data({messageKey:"noTitle"}),!1
try{if(""===ba(r))return this.data({messageKey:"emptyTitle"}),!1}catch(e){return}return!0}},"css-orientation-lock-evaluate":function(e,t,n,r){var a=(r||{}).cssom,o=void 0===a?void 0:a,i=(t||{}).degreeThreshold,s=void 0===i?0:i
if(o&&o.length){for(var l=!1,u=[],c=o.reduce((function(e,t){var n=t.sheet,r=t.root,a=t.shadowId||"topDocument"
if(e[a]||(e[a]={root:r,rules:[]}),!n||!n.cssRules)return e
var o=Array.from(n.cssRules)
return e[a].rules=e[a].rules.concat(o),e}),{}),d=function(){var e=f[p],t=c[e],n=t.root,r=t.rules.filter(h)
if(!r.length)return"continue"
r.forEach((function(e){var t=e.cssRules
Array.from(t).forEach((function(e){var t=function(e){var t=e.selectorText,n=e.style
if(!t||n.length<=0)return!1
var r=n.transform||n.webkitTransform||n.msTransform||!1
if(!r)return!1
var a=r.match(/(rotate|rotateZ|rotate3d|matrix|matrix3d)\(([^)]+)\)(?!.*(rotate|rotateZ|rotate3d|matrix|matrix3d))/)
if(!a)return!1
var o=O(a,3),i=function(e,t){switch(e){case"rotate":case"rotateZ":return m(t)
case"rotate3d":var n=O(t.split(",").map((function(e){return e.trim()})),4),r=n[2],a=n[3]
if(0===parseInt(r))return
return m(a)
case"matrix":case"matrix3d":return function(e){var t=e.split(",")
if(t.length<=6){var n=O(t,2),r=n[0],a=n[1]
return g(Math.atan2(parseFloat(a),parseFloat(r)))}var o=parseFloat(t[8]),i=Math.asin(o),s=Math.cos(i)
return g(Math.acos(parseFloat(t[0])/s))}(t)
default:return}}(o[1],o[2])
return!!i&&(i=Math.abs(i),!(Math.abs(i-180)%180<=s)&&Math.abs(i-90)%90<=s)}(e)
if(t&&"HTML"!==e.selectorText.toUpperCase()){var r=Array.from(n.querySelectorAll(e.selectorText))||[]
u=u.concat(r)}l=l||t}))}))},p=0,f=Object.keys(c);p<f.length;p++)d()
return!l||(u.length&&this.relatedNodes(u),!1)}function h(e){var t=e.type,n=e.cssText
return 4===t&&(/orientation:\s*landscape/i.test(n)||/orientation:\s*portrait/i.test(n))}function m(e){var t,n=O(e.match(/(deg|grad|rad|turn)/)||[],1)[0]
if(n){var r,a=parseFloat(e.replace(n,""))
switch(n){case"rad":return g(a)
case"grad":return t=a,(t%=400)<0&&(t+=400),Math.round(t/400*360)
case"turn":return r=a,Math.round(360/(1/r))
default:return parseInt(a)}}}function g(e){return Math.round(e*(180/Math.PI))}},"meta-viewport-scale-evaluate":function(e,t,n){var r=t||{},a=r.scaleMinimum,o=void 0===a?2:a,i=r.lowerBound,s=void 0!==i&&i,l=n.attr("content")||""
if(!l)return!0
var u=l.split(/[;,]/).reduce((function(e,t){var n=t.trim()
if(!n)return e
var r=O(n.split("="),2),a=r[0],o=r[1]
if(!a||!o)return e
var i=a.toLowerCase().trim(),s=o.toLowerCase().trim()
return"maximum-scale"===i&&"yes"===s&&(s=1),"maximum-scale"===i&&parseFloat(s)<0||(e[i]=s),e}),{})
if(s&&u["maximum-scale"]&&parseFloat(u["maximum-scale"])<s)return!0
if(!s&&"no"===u["user-scalable"])return this.data("user-scalable=no"),!1
var c=parseFloat(u["user-scalable"])
return!s&&u["user-scalable"]&&(c||0===c)&&c>-1&&c<1?(this.data("user-scalable"),!1):!(u["maximum-scale"]&&parseFloat(u["maximum-scale"])<o&&(this.data("maximum-scale"),1))},"duplicate-id-after":function(e){var t=[]
return e.filter((function(e){return-1===t.indexOf(e.data)&&(t.push(e.data),!0)}))},"duplicate-id-evaluate":function(e){var t=e.getAttribute("id").trim()
if(!t)return!0
var n=Vr(e),r=Array.from(n.querySelectorAll('[id="'.concat(Cn(t),'"]'))).filter((function(t){return t!==e}))
return r.length&&this.relatedNodes(r),this.data(t),0===r.length},"accesskeys-after":function(e){var t={}
return e.filter((function(e){if(!e.data)return!1
var n=e.data.toUpperCase()
return t[n]?(t[n].relatedNodes.push(e.relatedNodes[0]),!1):(t[n]=e,e.relatedNodes=[],!0)})).map((function(e){return e.result=!!e.relatedNodes.length,e}))},"accesskeys-evaluate":function(e){return ta(e,!1)&&(this.data(e.getAttribute("accesskey")),this.relatedNodes([e])),!0},"focusable-content-evaluate":function(e,t,n){var r=n.tabbableElements
return!!r&&r.filter((function(e){return e!==n})).length>0},"focusable-disabled-evaluate":function(e,t,n){var r=["BUTTON","FIELDSET","INPUT","SELECT","TEXTAREA"],a=n.tabbableElements
if(!a||!a.length)return!0
var o=a.reduce((function(e,t){var n=t.actualNode,a=n.nodeName.toUpperCase()
return r.includes(a)&&e.push(n),e}),[])
return this.relatedNodes(o),!(!o.length||!Pa())||0===o.length},"focusable-element-evaluate":function(e,t,n){if(n.hasAttr("contenteditable")&&function e(t){var r=t.attr("contenteditable")
if("true"===r||""===r)return!0
if("false"===r)return!1
var a=wr(n.parent,"[contenteditable]")
return!!a&&e(a)}(n))return!0
var r=n.isFocusable,a=parseInt(n.attr("tabindex"),10)
return(a=isNaN(a)?null:a)?r&&a>=0:r},"focusable-modal-open-evaluate":function(e,t,n){var r=n.tabbableElements.map((function(e){return e.actualNode}))
return!r||!r.length||!Pa()||void this.relatedNodes(r)},"focusable-no-name-evaluate":function(e,t,n){var r=n.attr("tabindex")
if(!(Ta(n)&&r>-1))return!1
try{return!Qs(n)}catch(e){return}},"focusable-not-tabbable-evaluate":function(e,t,n){var r=["BUTTON","FIELDSET","INPUT","SELECT","TEXTAREA"],a=n.tabbableElements
if(!a||!a.length)return!0
var o=a.reduce((function(e,t){var n=t.actualNode,a=n.nodeName.toUpperCase()
return r.includes(a)||e.push(n),e}),[])
return this.relatedNodes(o),!!(o.length>0&&Pa())||0===o.length},"landmark-is-top-level-evaluate":function(e){var t=wl("landmark"),n=Gr(e),r=gs(e)
for(this.data({role:r});n;){var a=n.getAttribute("role")
if(a||"FORM"===n.nodeName.toUpperCase()||(a=cs(n)),a&&t.includes(a)&&("main"!==a||"complementary"!==r))return!1
n=Gr(n)}return!0},"no-focusable-content-evaluate":function(e,t,n){if(n.children)try{return!n.children.some((function(e){return qu(e)}))}catch(e){return}},"tabindex-evaluate":function(e,t,n){var r=parseInt(n.attr("tabindex"),10)
return!!isNaN(r)||r<=0},"alt-space-value-evaluate":function(e,t,n){var r=n.attr("alt")
return"string"==typeof r&&/^\s+$/.test(r)},"duplicate-img-label-evaluate":function(e,t,n){if(["none","presentation"].includes(gs(n)))return!1
var r=wr(n,t.parentSelector)
if(!r)return!1
var a=ba(r,!0).toLowerCase()
return""!==a&&a===Qs(n).toLowerCase()},"explicit-evaluate":function(e,t,n){if(n.attr("id")){if(!n.actualNode)return
var r=Vr(n.actualNode),a=Cn(n.attr("id")),o=Array.from(r.querySelectorAll('label[for="'.concat(a,'"]')))
if(o.length)try{return o.some((function(e){return!ta(e)||!!Ks(e)}))}catch(e){return}}return!1},"help-same-as-label-evaluate":function(e,t,n){var r=ll(n),a=e.getAttribute("title")
return!!r&&(a||(a="",e.getAttribute("aria-describedby")&&(a=va(e,"aria-describedby").map((function(e){return e?Ks(e):""})).join(""))),fa(a)===fa(r))},"hidden-explicit-label-evaluate":function(e,t,n){if(n.hasAttr("id")){if(!n.actualNode)return
var r=Vr(e),a=Cn(e.getAttribute("id")),o=r.querySelector('label[for="'.concat(a,'"]'))
if(o&&!ta(o,!0)){var i
try{i=Qs(n).trim()}catch(e){return}return""===i}}return!1},"implicit-evaluate":function(e,t,n){try{var r=wr(n,"label")
return!!r&&!!Qs(r,{inControlContext:!0})}catch(e){return}},"label-content-name-mismatch-evaluate":function(e,t,n){var r=t||{},a=r.pixelThreshold,o=r.occuranceThreshold,i=Ks(e).toLowerCase()
if(!(rl(i)<1)){var s=dl(n).filter((function(e){return!al(e,a,o)})).map((function(e){return e.actualNode.nodeValue})).join(""),l=fa(s).toLowerCase()
return!l||(rl(l)<1?!!Lu(l,i)||void 0:Lu(l,i))}},"multiple-label-evaluate":function(e){var t=Cn(e.getAttribute("id")),n=e.parentNode,r=Vr(e)
r=r.documentElement||r
var a=Array.from(r.querySelectorAll('label[for="'.concat(t,'"]')))
for(a.length&&(a=a.filter((function(e){return ta(e)})));n;)"LABEL"===n.nodeName.toUpperCase()&&-1===a.indexOf(n)&&a.push(n),n=n.parentNode
if(this.relatedNodes(a),a.length>1){var o=a.filter((function(e){return ta(e,!0)}))
if(o.length>1)return
return!va(e,"aria-labelledby").includes(o[0])&&void 0}return!1},"title-only-evaluate":function(e,t,n){var r=ll(n),a=bs(n),o=n.attr("aria-describedby")
return!(r||!a&&!o)},"landmark-is-unique-after":function(e){var t=[]
return e.filter((function(e){var n=t.find((function(t){return e.data.role===t.data.role&&e.data.accessibleText===t.data.accessibleText}))
return n?(n.result=!1,n.relatedNodes.push(e.relatedNodes[0]),!1):(t.push(e),e.relatedNodes=[],!0)}))},"landmark-is-unique-evaluate":function(e,t,n){var r=gs(e),a=Qs(n)
return a=a?a.toLowerCase():null,this.data({role:r,accessibleText:a}),this.relatedNodes([e]),!0},"has-lang-evaluate":function(e,t,n){var r=void 0!==a&&Pn(a)
return t.attributes.includes("xml:lang")&&t.attributes.includes("lang")&&Uu(n.attr("xml:lang"))&&!Uu(n.attr("lang"))&&!r?(this.data({messageKey:"noXHTML"}),!1):!!t.attributes.some((function(e){return Uu(n.attr(e))}))||(this.data({messageKey:"noLang"}),!1)},"valid-lang-evaluate":function(e,t,n){var r=[]
return t.attributes.forEach((function(e){var a=n.attr(e)
if("string"==typeof a){var o=co(a),i=t.value?!t.value.map(co).includes(o):!Ni(o);(""!==o&&i||""!==a&&!fa(a))&&r.push(e+'="'+n.attr(e)+'"')}})),!!r.length&&(this.data(r),!0)},"xml-lang-mismatch-evaluate":function(e,t,n){return co(n.attr("lang"))===co(n.attr("xml:lang"))},"dlitem-evaluate":function(e){var t=Gr(e),n=t.nodeName.toUpperCase(),r=Bi(t)
return"DIV"===n&&["presentation","none",null].includes(r)&&(n=(t=Gr(t)).nodeName.toUpperCase(),r=Bi(t)),"DL"===n&&!(r&&!["presentation","none","list"].includes(r))},"listitem-evaluate":function(e){var t=Gr(e)
if(t){var n=t.nodeName.toUpperCase(),r=(t.getAttribute("role")||"").toLowerCase()
return!!["presentation","none","list"].includes(r)||(r&&Li(r)?(this.data({messageKey:"roleNotValid"}),!1):["UL","OL"].includes(n))}},"only-dlitems-evaluate":function(e,t,n){var r=["definition","term","list"],a=n.children.reduce((function(e,t){var n=t.actualNode
return"DIV"===n.nodeName.toUpperCase()&&null===gs(n)?e.concat(t.children):e.concat(t)}),[]).reduce((function(e,t){var n=t.actualNode,a=n.nodeName.toUpperCase()
if(1===n.nodeType&&ta(n,!0,!1)){var o=Bi(n);("DT"!==a&&"DD"!==a||o)&&(r.includes(o)||e.badNodes.push(n))}else 3===n.nodeType&&""!==n.nodeValue.trim()&&(e.hasNonEmptyTextNode=!0)
return e}),{badNodes:[],hasNonEmptyTextNode:!1})
return a.badNodes.length&&this.relatedNodes(a.badNodes),!!a.badNodes.length||a.hasNonEmptyTextNode},"only-listitems-evaluate":function(e,t,n){var r=!1,a=!1,o=!0,i=[],s=[],l=[]
return n.children.forEach((function(e){var t=e.actualNode
if(3!==t.nodeType||""===t.nodeValue.trim()){if(1===t.nodeType&&ta(t,!0,!1)){o=!1
var n="LI"===t.nodeName.toUpperCase(),u=gs(e),c="listitem"===u
n||c||i.push(t),n&&!c&&(s.push(t),l.includes(u)||l.push(u)),c&&(a=!0)}}else r=!0})),r||i.length?(this.relatedNodes(i),!0):!o&&!a&&(this.relatedNodes(s),this.data({messageKey:"roleNotValid",roles:l.join(", ")}),!0)},"structured-dlitems-evaluate":function(e,t,n){var r=n.children
if(!r||!r.length)return!1
for(var a,o=!1,i=!1,s=0;s<r.length;s++){if("DT"===(a=r[s].props.nodeName.toUpperCase())&&(o=!0),o&&"DD"===a)return!1
"DD"===a&&(i=!0)}return o||i},"caption-evaluate":function(e,t,n){return!gi(n,"track").some((function(e){return"captions"===(e.attr("kind")||"").toLowerCase()}))&&void 0},"frame-tested-evaluate":function(e,t){return!t.isViolation&&void 0},"frame-tested-after":function(e){var t={}
return e.filter((function(e){if("html"!==e.node.ancestry[e.node.ancestry.length-1]){var n=e.node.ancestry.flat(1/0).join(" > ")
return t[n]=e,!0}var r=e.node.ancestry.slice(0,e.node.ancestry.length-1).flat(1/0).join(" > ")
return t[r]&&(t[r].result=!0),!1}))},"no-autoplay-audio-evaluate":function(e,t){if(e.duration){var n=t.allowedDuration,r=void 0===n?3:n
return function(e){if(!e.currentSrc)return 0
var t=function(e){var t=e.match(/#t=(.*)/)
if(t)return O(t,2)[1].split(",").map((function(e){return/:/.test(e)?function(e){for(var t=e.split(":"),n=0,r=1;t.length>0;)n+=r*parseInt(t.pop(),10),r*=60
return parseFloat(n)}(e):parseFloat(e)}))}(e.currentSrc)
return t?1===t.length?Math.abs(e.duration-t[0]):Math.abs(t[1]-t[0]):Math.abs(e.duration-(e.currentTime||0))}(e)<=r&&!e.hasAttribute("loop")||!!e.hasAttribute("controls")}console.warn("axe.utils.preloadMedia did not load metadata")},"aria-allowed-attr-matches":function(e,t){var n=/^aria-/,r=t.attrNames
if(r.length)for(var a=0,o=r.length;a<o;a++)if(n.test(r[a]))return!0
return!1},"aria-allowed-role-matches":function(e,t){return null!==Bi(t,{dpub:!0,fallback:!0})},"aria-form-field-name-matches":$u,"aria-has-attr-matches":function(e,t){var n=/^aria-/
return t.attrNames.some((function(e){return n.test(e)}))},"aria-hidden-focus-matches":function(e){return Hu(Gr(e))},"aria-required-children-matches":function(e,t){var n=Bi(t,{dpub:!0})
return!!Sl(n)},"aria-required-parent-matches":function(e,t){var n=Bi(t)
return!!Ol(n)},"autocomplete-matches":function(e,t){var n=t.attr("autocomplete")
if(!n||""===fa(n))return!1
var r=t.props.nodeName
if(!1===["textarea","input","select"].includes(r))return!1
if("input"===r&&["submit","reset","button","hidden"].includes(t.props.type))return!1
var a=t.attr("aria-disabled")||"false"
if(t.hasAttr("disabled")||"true"===a.toLowerCase())return!1
var o=t.attr("role"),i=t.attr("tabindex")
if("-1"===i&&o){var s=za.ariaRoles[o]
if(void 0===s||"widget"!==s.type)return!1}return!("-1"===i&&t.actualNode&&!ta(t.actualNode,!1)&&!ta(t.actualNode,!0))},"bypass-matches":function(e,t,n){return!Vu(0,0,n)||!!e.querySelector("a[href]")},"color-contrast-matches":function(e,t){var r=t.props,o=r.nodeName,i=r.type
if("option"===o)return!1
if("select"===o&&!e.options.length)return!1
if("input"===o&&["hidden","range","color","checkbox","radio","image"].includes(i))return!1
if(_u(t))return!1
if(["input","select","textarea"].includes(o)){var s=n.getComputedStyle(e),l=parseInt(s.getPropertyValue("text-indent"),10)
if(l){var u=e.getBoundingClientRect()
if(u={top:u.top,bottom:u.bottom,left:u.left+l,right:u.right+l},!oo(u,e))return!1}return!0}var c=$r(t,"label")
if("label"===o||c){var d=c||e,p=c?er(c):t
if(d.htmlFor){var f=Vr(d).getElementById(d.htmlFor),h=f&&er(f)
if(h&&_u(h))return!1}var m=gi(p,'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea')[0]
if(m&&_u(m))return!1}for(var g=[],v=t;v;){if(v.props.id){var b=hl(v).filter((function(e){return Ci(e.getAttribute("aria-labelledby")||"").includes(v.props.id)})).map((function(e){return er(e)}))
g.push.apply(g,_(b))}v=v.parent}if(g.length>0&&g.every(_u))return!1
var y=ba(t,!1,!0)
if(!y||!nl(y,{emoji:!0,nonBmp:!1,punctuations:!0}))return!1
for(var w=a.createRange(),D=t.children,x=0;x<D.length;x++){var E=D[x]
3===E.actualNode.nodeType&&""!==fa(E.actualNode.nodeValue)&&w.selectNodeContents(E.actualNode)}for(var A=w.getClientRects(),C=0;C<A.length;C++)if(oo(A[C],e))return!0
return!1},"data-table-large-matches":function(e){if(Wl(e)){var t=Hi(e)
return t.length>=3&&t[0].length>=3&&t[1].length>=3&&t[2].length>=3}return!1},"data-table-matches":function(e){return Wl(e)},"duplicate-id-active-matches":function(e){var t=e.getAttribute("id").trim(),n='*[id="'.concat(Cn(t),'"]'),r=Array.from(Vr(e).querySelectorAll(n))
return!Nl(e)&&r.some(Ta)},"duplicate-id-aria-matches":function(e){return Nl(e)},"duplicate-id-misc-matches":function(e){var t=e.getAttribute("id").trim(),n='*[id="'.concat(Cn(t),'"]'),r=Array.from(Vr(e).querySelectorAll(n))
return!Nl(e)&&r.every((function(e){return!Ta(e)}))},"frame-focusable-content-matches":function(e,t,n){var r,a
return!n.initiator&&!n.focusable&&(null===(r=n.size)||void 0===r?void 0:r.width)*(null===(a=n.size)||void 0===a?void 0:a.height)>1},"frame-title-has-text-matches":function(e){var t=e.getAttribute("title")
return!!fa(t)},"heading-matches":function(e){var t
return e.hasAttribute("role")&&(t=e.getAttribute("role").split(/\s+/i).filter(i.commons.aria.isValidRole)),t&&t.length>0?t.includes("heading"):"heading"===i.commons.aria.implicitRole(e)},"html-namespace-matches":function(e,t){return!zu(0,t)},"identical-links-same-purpose-matches":function(e,t){if(!Qs(t))return!1
var n=gs(e)
return!n||"link"===n},"inserted-into-focus-order-matches":function(e){return Na(e)},"is-initiator-matches":Vu,"label-content-name-mismatch-matches":function(e,t){var n=gs(e)
return!!(n&&wl("widget").includes(n)&&xl().includes(n)&&(fa(Mi(t))||fa(Js(e)))&&fa(ba(t)))},"label-matches":function(e,t){if("input"!==t.props.nodeName||!1===t.hasAttr("type"))return!0
var n=t.attr("type").toLowerCase()
return!1===["hidden","image","button","submit","reset"].includes(n)},"landmark-has-body-context-matches":function(e,t){return e.hasAttribute("role")||!$r(t,"article, aside, main, nav, section")},"landmark-unique-matches":function(e,t){var n=["article","aside","main","nav","section"].join(",")
return function(e){var t=e.actualNode,r=wl("landmark"),a=gs(t)
if(!a)return!1
var o=t.nodeName.toUpperCase()
return"HEADER"===o||"FOOTER"===o?!$r(e,n):"SECTION"===o||"FORM"===o?!!Qs(e):r.indexOf(a)>=0||"region"===a}(t)&&ta(e,!0)},"layout-table-matches":function(e){return!Wl(e)&&!Ta(e)},"link-in-text-block-matches":function(e){var t=fa(e.textContent),n=e.getAttribute("role")
return(!n||"link"===n)&&!!t&&!!ta(e,!1)&&Ia(e)},"nested-interactive-matches":function(e,t){var n=gs(t)
return!!n&&!!za.ariaRoles[n].childrenPresentational},"no-autoplay-audio-matches":function(e){return!!e.currentSrc&&!e.hasAttribute("paused")&&!e.hasAttribute("muted")},"no-empty-role-matches":function(e,t){return!!t.hasAttr("role")&&!!t.attr("role").trim()},"no-explicit-name-required-matches":function(e,t){var n=Bi(t)
return!(n&&!["none","presentation"].includes(n)&&!(Ua[n]||{}).accessibleNameRequired&&!Ta(t))},"no-naming-method-matches":$u,"no-role-matches":function(e){return!e.getAttribute("role")},"not-html-matches":function(e,t){return"html"!==t.props.nodeName},"p-as-heading-matches":function(e){var t=Array.from(e.parentNode.childNodes),n=e.textContent.trim()
return!(0===n.length||(n.match(/[.!?:;](?![.!?:;])/g)||[]).length>=2)&&0!==t.slice(t.indexOf(e)+1).filter((function(e){return"P"===e.nodeName.toUpperCase()&&""!==e.textContent.trim()})).length},"scrollable-region-focusable-matches":function(e,t){if(0==!!_o(e,13))return!1
var n=Bi(t)
if(Ba["aria-haspopup"].values.includes(n)){if(wr(t,'[role~="combobox"]'))return!1
var r=t.attr("id")
if(r){var a=Hr(e)
if(Array.from(a.querySelectorAll('[aria-owns~="'.concat(r,'"], [aria-controls~="').concat(r,'"]'))).some((function(e){return Ci(e.getAttribute("role")).includes("combobox")})))return!1}}return!!gi(t,"*").some((function(e){return Da(e,!0,!0)}))},"skip-link-matches":function(e){return Qa(e)&&Xr(e)},"svg-namespace-matches":zu,"window-is-top-matches":function(e){return e.ownerDocument.defaultView.self===e.ownerDocument.defaultView.top},"xml-lang-mismatch-matches":function(e){var t=co(e.getAttribute("lang")),n=co(e.getAttribute("xml:lang"))
return Ni(t)&&Ni(n)}},Gu=function(e){this.id=e.id,this.data=null,this.relatedNodes=[],this.result=null}
function Yu(e){if("string"==typeof e){if(Wu[e])return Wu[e]
if(/^\s*function[\s\w]*\(/.test(e))return new Function("return "+e+";")()
throw new ReferenceError("Function ID does not exist in the metadata-function-map: ".concat(e))}return e}function Qu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return(Array.isArray(e)||"object"!==o(e))&&(e={value:e}),e}function Ku(e){e&&(this.id=e.id,this.configure(e))}Ku.prototype.enabled=!0,Ku.prototype.run=function(e,t,n,r,a){var o=(t=t||{}).hasOwnProperty("enabled")?t.enabled:this.enabled,i=this.getOptions(t.options)
if(o){var s,l=new Gu(this),u=ar(l,t,r,a)
try{s=this.evaluate.call(u,e.actualNode,i,e,n)}catch(t){return e&&e.actualNode&&(t.errorNode=new rr(e).toJSON()),void a(t)}u.isAsync||(l.result=s,r(l))}else r(null)},Ku.prototype.runSync=function(e,t,n){var r=(t=t||{}).enabled
if(!(void 0===r?this.enabled:r))return null
var a,o=this.getOptions(t.options),i=new Gu(this),s=ar(i,t)
s.async=function(){throw new Error("Cannot run async check while in a synchronous run")}
try{a=this.evaluate.call(s,e.actualNode,o,e,n)}catch(t){throw e&&e.actualNode&&(t.errorNode=new rr(e).toJSON()),t}return i.result=a,i},Ku.prototype.configure=function(e){var t=this
e.evaluate&&!Wu[e.evaluate]||(this._internalCheck=!0),e.hasOwnProperty("enabled")&&(this.enabled=e.enabled),e.hasOwnProperty("options")&&(this._internalCheck?this.options=Qu(e.options):this.options=e.options),["evaluate","after"].filter((function(t){return e.hasOwnProperty(t)})).forEach((function(n){return t[n]=Yu(e[n])}))},Ku.prototype.getOptions=function(e){return this._internalCheck?Mr(this.options,Qu(e||{})):e||this.options}
var Ju=Ku,Xu=function(e){this.id=e.id,this.result=Tt.NA,this.pageLevel=e.pageLevel,this.impact=null,this.nodes=[]}
function Zu(e,t){this._audit=t,this.id=e.id,this.selector=e.selector||"*",e.impact&&(Pt(Tt.impact.includes(e.impact),"Impact ".concat(e.impact," is not a valid impact")),this.impact=e.impact),this.excludeHidden="boolean"!=typeof e.excludeHidden||e.excludeHidden,this.enabled="boolean"!=typeof e.enabled||e.enabled,this.pageLevel="boolean"==typeof e.pageLevel&&e.pageLevel,this.reviewOnFail="boolean"==typeof e.reviewOnFail&&e.reviewOnFail,this.any=e.any||[],this.all=e.all||[],this.none=e.none||[],this.tags=e.tags||[],this.preload=!!e.preload,e.matches&&(this.matches=Yu(e.matches))}function ec(e){if(e.length){var t=!1,n={}
return e.forEach((function(e){var r=e.results.filter((function(e){return e}))
n[e.type]=r,r.length&&(t=!0)})),t?n:null}}Zu.prototype.matches=function(){return!0},Zu.prototype.gather=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="mark_gather_start_"+this.id,r="mark_gather_end_"+this.id,a="mark_isHidden_start_"+this.id,o="mark_isHidden_end_"+this.id
t.performanceTimer&&ei.mark(n)
var i=Di(this.selector,e)
return this.excludeHidden&&(t.performanceTimer&&ei.mark(a),i=i.filter((function(e){return!qo(e.actualNode)})),t.performanceTimer&&(ei.mark(o),ei.measure("rule_"+this.id+"#gather_axe.utils.isHidden",a,o))),t.performanceTimer&&(ei.mark(r),ei.measure("rule_"+this.id+"#gather",n,r)),i},Zu.prototype.runChecks=function(e,t,n,r,a,o){var i=this,s=Cr()
this[e].forEach((function(e){var a=i._audit.checks[e.id||e],o=wo(a,i.id,n)
s.defer((function(e,n){a.run(t,o,r,e,n)}))})),s.then((function(t){t=t.filter((function(e){return e})),a({type:e,results:t})})).catch(o)},Zu.prototype.runChecksSync=function(e,t,n,r){var a=this,o=[]
return this[e].forEach((function(e){var i=a._audit.checks[e.id||e],s=wo(i,a.id,n)
o.push(i.runSync(t,s,r))})),{type:e,results:o=o.filter((function(e){return e}))}},Zu.prototype.run=function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0
n.performanceTimer&&this._trackPerformance()
var o,i=Cr(),l=new Xu(this)
try{o=this.gatherAndMatchNodes(e,n)}catch(e){return void a(new s({cause:e,ruleId:this.id}))}n.performanceTimer&&this._logGatherPerformance(o),o.forEach((function(r){i.defer((function(a,o){var i=Cr();["any","all","none"].forEach((function(a){i.defer((function(o,i){t.runChecks(a,r,n,e,o,i)}))})),i.then((function(e){var o=ec(e)
o&&(o.node=new rr(r,n),l.nodes.push(o),t.reviewOnFail&&(["any","all"].forEach((function(e){o[e].forEach((function(e){!1===e.result&&(e.result=void 0)}))})),o.none.forEach((function(e){!0===e.result&&(e.result=void 0)})))),a()})).catch((function(e){return o(e)}))}))})),i.defer((function(e){return setTimeout(e,0)})),n.performanceTimer&&this._logRulePerformance(),i.then((function(){return r(l)})).catch((function(e){return a(e)}))},Zu.prototype.runSync=function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
n.performanceTimer&&this._trackPerformance()
var r,a=new Xu(this)
try{r=this.gatherAndMatchNodes(e,n)}catch(e){throw new s({cause:e,ruleId:this.id})}return n.performanceTimer&&this._logGatherPerformance(r),r.forEach((function(r){var o=[];["any","all","none"].forEach((function(a){o.push(t.runChecksSync(a,r,n,e))}))
var i=ec(o)
i&&(i.node=r.actualNode?new rr(r,n):null,a.nodes.push(i),t.reviewOnFail&&(["any","all"].forEach((function(e){i[e].forEach((function(e){!1===e.result&&(e.result=void 0)}))})),i.none.forEach((function(e){!0===e.result&&(e.result=void 0)}))))})),n.performanceTimer&&this._logRulePerformance(),a},Zu.prototype._trackPerformance=function(){this._markStart="mark_rule_start_"+this.id,this._markEnd="mark_rule_end_"+this.id,this._markChecksStart="mark_runchecks_start_"+this.id,this._markChecksEnd="mark_runchecks_end_"+this.id},Zu.prototype._logGatherPerformance=function(e){Nt("gather (",e.length,"):",ei.timeElapsed()+"ms"),ei.mark(this._markChecksStart)},Zu.prototype._logRulePerformance=function(){ei.mark(this._markChecksEnd),ei.mark(this._markEnd),ei.measure("runchecks_"+this.id,this._markChecksStart,this._markChecksEnd),ei.measure("rule_"+this.id,this._markStart,this._markEnd)},Zu.prototype.gatherAndMatchNodes=function(e,t){var n=this,r="mark_matches_start_"+this.id,a="mark_matches_end_"+this.id,o=this.gather(e,t)
return t.performanceTimer&&ei.mark(r),o=o.filter((function(t){return n.matches(t.actualNode,t,e)})),t.performanceTimer&&(ei.mark(a),ei.measure("rule_"+this.id+"#matches",r,a)),o},Zu.prototype.after=function(e,t){var n,r=_r(n=this).map((function(e){var t=n._audit.checks[e.id||e]
return t&&"function"==typeof t.after?t:null})).filter(Boolean),a=this.id
return r.forEach((function(n){var r,o,i,s=(r=e.nodes,o=n.id,i=[],r.forEach((function(e){_r(e).forEach((function(t){t.id===o&&(t.node=e.node,i.push(t))}))})),i),l=wo(n,a,t),u=n.after(s,l)
s.forEach((function(e){delete e.node,-1===u.indexOf(e)&&(e.filtered=!0)}))})),e.nodes=function(e){var t=["any","all","none"],n=e.nodes.filter((function(e){var n=0
return t.forEach((function(t){e[t]=e[t].filter((function(e){return!0!==e.filtered})),n+=e[t].length})),n>0}))
return e.pageLevel&&n.length&&(n=[n.reduce((function(e,n){if(e)return t.forEach((function(t){e[t].push.apply(e[t],n[t])})),e}))]),n}(e),e},Zu.prototype.configure=function(e){e.hasOwnProperty("selector")&&(this.selector=e.selector),e.hasOwnProperty("excludeHidden")&&(this.excludeHidden="boolean"!=typeof e.excludeHidden||e.excludeHidden),e.hasOwnProperty("enabled")&&(this.enabled="boolean"!=typeof e.enabled||e.enabled),e.hasOwnProperty("pageLevel")&&(this.pageLevel="boolean"==typeof e.pageLevel&&e.pageLevel),e.hasOwnProperty("reviewOnFail")&&(this.reviewOnFail="boolean"==typeof e.reviewOnFail&&e.reviewOnFail),e.hasOwnProperty("any")&&(this.any=e.any),e.hasOwnProperty("all")&&(this.all=e.all),e.hasOwnProperty("none")&&(this.none=e.none),e.hasOwnProperty("tags")&&(this.tags=e.tags),e.hasOwnProperty("matches")&&(this.matches=Yu(e.matches)),e.impact&&(Pt(Tt.impact.includes(e.impact),"Impact ".concat(e.impact," is not a valid impact")),this.impact=e.impact)}
var tc=Zu,nc=U(Et()),rc=/\{\{.+?\}\}/g
function ac(){return n.origin?n.origin:n.location&&n.location.origin?n.location.origin:void 0}function oc(e,t,n){var r,a
for(r=0,a=e.length;r<a;r++)t[n](e[r])}function ic(e,t,n){return n.performanceTimer&&ei.mark("mark_rule_start_"+e.id),function(r,a){e.run(t,n,(function(e){r(e)}),(function(t){if(n.debug)a(t)
else{var o=Object.assign(new Xu(e),{result:Tt.CANTTELL,description:"An error occured while running this rule",message:t.message,stack:t.stack,error:t,errorNode:t.errorNode})
r(o)}}))}}function sc(e,t,n){var r=e.brand,a=e.application,o=e.lang
return Tt.helpUrlBase+r+"/"+(n||i.version.substring(0,i.version.lastIndexOf(".")))+"/"+t+"?application="+encodeURIComponent(a)+(o&&"en"!==o?"&lang="+encodeURIComponent(o):"")}var lc=function(){function e(t){I(this,e),this.lang="en",this.defaultConfig=t,this.standards=za,this._init(),this._defaultLocale=null}return j(e,[{key:"_setDefaultLocale",value:function(){if(!this._defaultLocale){for(var e={checks:{},rules:{},failureSummaries:{},incompleteFallbackMessage:"",lang:this.lang},t=Object.keys(this.data.checks),n=0;n<t.length;n++){var r=t[n],a=this.data.checks[r].messages,o=a.pass,i=a.fail,s=a.incomplete
e.checks[r]={pass:o,fail:i,incomplete:s}}for(var l=Object.keys(this.data.rules),u=0;u<l.length;u++){var c=l[u],d=this.data.rules[c],p=d.description,f=d.help
e.rules[c]={description:p,help:f}}for(var h=Object.keys(this.data.failureSummaries),m=0;m<h.length;m++){var g=h[m],v=this.data.failureSummaries[g].failureMessage
e.failureSummaries[g]={failureMessage:v}}e.incompleteFallbackMessage=this.data.incompleteFallbackMessage,this._defaultLocale=e}}},{key:"_resetLocale",value:function(){var e=this._defaultLocale
e&&this.applyLocale(e)}},{key:"_applyCheckLocale",value:function(e){for(var t,n,r,a,i=Object.keys(e),s=0;s<i.length;s++){var l=i[s]
if(!this.data.checks[l])throw new Error('Locale provided for unknown check: "'.concat(l,'"'))
this.data.checks[l]=(t=this.data.checks[l],r=void 0,a=void 0,r=(n=e[l]).pass,a=n.fail,"string"==typeof r&&rc.test(r)&&(r=nc.default.compile(r)),"string"==typeof a&&rc.test(a)&&(a=nc.default.compile(a)),S({},t,{messages:{pass:r||t.messages.pass,fail:a||t.messages.fail,incomplete:"object"===o(t.messages.incomplete)?S({},t.messages.incomplete,n.incomplete):n.incomplete}}))}}},{key:"_applyRuleLocale",value:function(e){for(var t,n,r,a,o=Object.keys(e),i=0;i<o.length;i++){var s=o[i]
if(!this.data.rules[s])throw new Error('Locale provided for unknown rule: "'.concat(s,'"'))
this.data.rules[s]=(t=this.data.rules[s],r=void 0,a=void 0,r=(n=e[s]).help,a=n.description,"string"==typeof r&&rc.test(r)&&(r=nc.default.compile(r)),"string"==typeof a&&rc.test(a)&&(a=nc.default.compile(a)),S({},t,{help:r||t.help,description:a||t.description}))}}},{key:"_applyFailureSummaries",value:function(e){for(var t,n,r=Object.keys(e),a=0;a<r.length;a++){var o=r[a]
if(!this.data.failureSummaries[o])throw new Error('Locale provided for unknown failureMessage: "'.concat(o,'"'))
this.data.failureSummaries[o]=(t=this.data.failureSummaries[o],n=void 0,"string"==typeof(n=e[o].failureMessage)&&rc.test(n)&&(n=nc.default.compile(n)),S({},t,{failureMessage:n||t.failureMessage}))}}},{key:"applyLocale",value:function(e){var t,n
this._setDefaultLocale(),e.checks&&this._applyCheckLocale(e.checks),e.rules&&this._applyRuleLocale(e.rules),e.failureSummaries&&this._applyFailureSummaries(e.failureSummaries,"failureSummaries"),e.incompleteFallbackMessage&&(this.data.incompleteFallbackMessage=(t=this.data.incompleteFallbackMessage,"string"==typeof(n=e.incompleteFallbackMessage)&&rc.test(n)&&(n=nc.default.compile(n)),n||t)),e.lang&&(this.lang=e.lang)}},{key:"setAllowedOrigins",value:function(e){var t=ac()
this.allowedOrigins=[]
var n,r=M(e)
try{for(r.s();!(n=r.n()).done;){var a=n.value
if(a===Tt.allOrigins)return void(this.allowedOrigins=["*"])
a!==Tt.sameOrigin?this.allowedOrigins.push(a):t&&this.allowedOrigins.push(t)}}catch(e){r.e(e)}finally{r.f()}}},{key:"_init",value:function(){var e=function(e){var t
if(e?(t=or(e)).commons=e.commons:t={},t.reporter=t.reporter||null,t.noHtml=t.noHtml||!1,!t.allowedOrigins){var n=ac()
t.allowedOrigins=n?[n]:[]}return t.rules=t.rules||[],t.checks=t.checks||[],t.data=S({checks:{},rules:{}},t.data),t}(this.defaultConfig)
this.lang=e.lang||"en",this.reporter=e.reporter,this.commands={},this.rules=[],this.checks={},this.brand="axe",this.application="axeAPI",this.tagExclude=["experimental"],this.noHtml=e.noHtml,this.allowedOrigins=e.allowedOrigins,oc(e.rules,this,"addRule"),oc(e.checks,this,"addCheck"),this.data={},this.data.checks=e.data&&e.data.checks||{},this.data.rules=e.data&&e.data.rules||{},this.data.failureSummaries=e.data&&e.data.failureSummaries||{},this.data.incompleteFallbackMessage=e.data&&e.data.incompleteFallbackMessage||"",this._constructHelpUrls()}},{key:"registerCommand",value:function(e){this.commands[e.id]=e.callback}},{key:"addRule",value:function(e){e.metadata&&(this.data.rules[e.id]=e.metadata)
var t=this.getRule(e.id)
t?t.configure(e):this.rules.push(new tc(e,this))}},{key:"addCheck",value:function(e){var t=e.metadata
"object"===o(t)&&(this.data.checks[e.id]=t,"object"===o(t.messages)&&Object.keys(t.messages).filter((function(e){return t.messages.hasOwnProperty(e)&&"string"==typeof t.messages[e]})).forEach((function(e){0===t.messages[e].indexOf("function")&&(t.messages[e]=new Function("return "+t.messages[e]+";")())}))),this.checks[e.id]?this.checks[e.id].configure(e):this.checks[e.id]=new Ju(e)}},{key:"run",value:function(e,t,n,r){this.normalizeOptions(t),i._selectCache=[]
var a=function(e,t,n){return e.reduce((function(e,r){return bi(r,t,n)?r.preload?(e.later.push(r),e):(e.now.push(r),e):e}),{now:[],later:[]})}(this.rules,e,t),o=a.now,s=a.later,l=Cr()
o.forEach((function(n){l.defer(ic(n,e,t))}))
var u=Cr()
s.length&&u.defer((function(e){fi(t).then((function(t){return e(t)})).catch((function(t){console.warn("Couldn't load preload assets: ",t),e(void 0)}))}))
var c=Cr()
c.defer(l),c.defer(u),c.then((function(a){var o=a.pop()
if(o&&o.length){var l=o[0]
l&&(e=S({},e,l))}var u=a[0]
if(!s.length)return i._selectCache=void 0,void n(u.filter((function(e){return!!e})))
var c=Cr()
s.forEach((function(n){var r=ic(n,e,t)
c.defer(r)})),c.then((function(e){i._selectCache=void 0,n(u.concat(e).filter((function(e){return!!e})))})).catch(r)})).catch(r)}},{key:"after",value:function(e,t){var n=this.rules
return e.map((function(e){var r=Or(n,"id",e.id)
if(!r)throw new Error("Result for unknown rule. You may be running mismatch axe-core versions")
return r.after(e,t)}))}},{key:"getRule",value:function(e){return this.rules.find((function(t){return t.id===e}))}},{key:"normalizeOptions",value:function(e){var t=[],n=[]
if(this.rules.forEach((function(e){n.push(e.id),e.tags.forEach((function(e){t.includes(e)||t.push(e)}))})),["object","string"].includes(o(e.runOnly))){if("string"==typeof e.runOnly&&(e.runOnly=[e.runOnly]),Array.isArray(e.runOnly)){var r=e.runOnly.find((function(e){return t.includes(e)})),a=e.runOnly.find((function(e){return n.includes(e)}))
if(r&&a)throw new Error("runOnly cannot be both rules and tags")
e.runOnly=a?{type:"rule",values:e.runOnly}:{type:"tag",values:e.runOnly}}var s=e.runOnly
if(s.value&&!s.values&&(s.values=s.value,delete s.value),!Array.isArray(s.values)||0===s.values.length)throw new Error("runOnly.values must be a non-empty array")
if(["rule","rules"].includes(s.type))s.type="rule",s.values.forEach((function(e){if(!n.includes(e))throw new Error("unknown rule `"+e+"` in options.runOnly")}))
else{if(!["tag","tags",void 0].includes(s.type))throw new Error("Unknown runOnly type '".concat(s.type,"'"))
s.type="tag"
var l=s.values.filter((function(e){return!t.includes(e)&&!/wcag2[1-3]a{1,3}/.test(e)}))
0!==l.length&&i.log("Could not find tags `"+l.join("`, `")+"`")}}return"object"===o(e.rules)&&Object.keys(e.rules).forEach((function(e){if(!n.includes(e))throw new Error("unknown rule `"+e+"` in options.rules")})),e}},{key:"setBranding",value:function(e){var t={brand:this.brand,application:this.application}
e&&e.hasOwnProperty("brand")&&e.brand&&"string"==typeof e.brand&&(this.brand=e.brand),e&&e.hasOwnProperty("application")&&e.application&&"string"==typeof e.application&&(this.application=e.application),this._constructHelpUrls(t)}},{key:"_constructHelpUrls",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=(i.version.match(/^[1-9][0-9]*\.[0-9]+/)||["x.y"])[0]
this.rules.forEach((function(r){e.data.rules[r.id]||(e.data.rules[r.id]={})
var a=e.data.rules[r.id];("string"!=typeof a.helpUrl||t&&a.helpUrl===sc(t,r.id,n))&&(a.helpUrl=sc(e,r.id,n))}))}},{key:"resetRulesAndChecks",value:function(){this._init(),this._resetLocale()}}]),e}(),uc={}
B(uc,{CssSelectorParser:function(){return cc.CssSelectorParser},doT:function(){return dc.default},emojiRegexText:function(){return pc.default},memoize:function(){return fc.default}})
var cc=U($()),dc=U(Et()),pc=U(xt()),fc=U(Dt()),hc=U(At()),mc=U(Ct())
U(kt()),dc.default.templateSettings.strip=!1,"Promise"in n||hc.default.polyfill(),"Uint32Array"in n||(n.Uint32Array=mc.Uint32Array),n.Uint32Array&&("some"in n.Uint32Array.prototype||Object.defineProperty(n.Uint32Array.prototype,"some",{value:Array.prototype.some}),"reduce"in n.Uint32Array.prototype||Object.defineProperty(n.Uint32Array.prototype,"reduce",{value:Array.prototype.reduce}))
var gc,vc=function(e,t){if(e=e||function(){},t=t||i.log,!i._audit)throw new Error("No audit configured")
var n=i.utils.queue(),r=[]
Object.keys(i.plugins).forEach((function(e){n.defer((function(t){var n=function(e){r.push(e),t()}
try{i.plugins[e].cleanup(t,n)}catch(e){n(e)}}))}))
var o=i.utils.getFlattenedTree(a.body)
i.utils.querySelectorAll(o,"iframe, frame").forEach((function(e){n.defer((function(t,n){return i.utils.sendCommandToFrame(e.actualNode,{command:"cleanup-plugin"},t,n)}))})),n.then((function(n){0===r.length?e(n):t(r)})).catch(t)},bc={}
function yc(e){return bc.hasOwnProperty(e)}function wc(e){return"string"==typeof e&&bc[e]?bc[e]:"function"==typeof e?e:gc}function Dc(e){var t=n&&"Node"in n&&"NodeList"in n,r=!!a
if(!t||!r){if(!e||!e.ownerDocument)throw new Error('Required "window" or "document" globals not defined and cannot be deduced from the context. Either set the globals before running or pass in a valid Element.')
r||(Zn.set("globalDocumentSet",!0),a=e.ownerDocument),t||(Zn.set("globalWindowSet",!0),n=a.defaultView)}}function xc(){Zn.get("globalDocumentSet")&&(Zn.set("globalDocumentSet",!1),a=null),Zn.get("globalWindowSet")&&(Zn.set("globalWindowSet",!1),n=null)}var Ec=function(){xc(),i._memoizedFns.forEach((function(e){return e.clear()})),Zn.clear(),i._tree=void 0,i._selectorData=void 0,i._selectCache=void 0},Ac=function(e,t,n,r){try{e=new To(e),i._tree=e.flatTree,i._selectorData=Un(e.flatTree)}catch(e){return Ec(),r(e)}var a=Cr(),o=i._audit
t.performanceTimer&&ei.auditStart(),e.frames.length&&!1!==t.iframes&&a.defer((function(n,r){Pr(e,t,"rules",null,n,r)})),a.defer((function(n,r){o.run(e,t,n,r)})),a.then((function(a){try{t.performanceTimer&&ei.auditEnd()
var i=Ir(a.map((function(e){return{results:e}})))
e.initiator&&((i=o.after(i,t)).forEach(mi),i=i.map(yn))
try{n(i,Ec)}catch(e){Ec(),Nt(e)}}catch(e){Ec(),r(e)}})).catch((function(e){Ec(),r(e)}))}
function Cc(e){this._run=e.run,this._collect=e.collect,this._registry={},e.commands.forEach((function(e){i._audit.registerCommand(e)}))}function kc(e){var t,r,s,l=O(e,3),u=l[0],c=l[1],d=l[2],p=new TypeError("axe.run arguments are invalid")
if(!function(e){switch(!0){case"string"==typeof e:case Array.isArray(e):case n.Node&&e instanceof n.Node:case n.NodeList&&e instanceof n.NodeList:return!0
case"object"!==o(e):return!1
case void 0!==e.include:case void 0!==e.exclude:case"number"==typeof e.length:return!0
default:return!1}}(u)){if(void 0!==d)throw p
d=c,c=u,u=a}if("object"!==o(c)){if(void 0!==d)throw p
d=c,c={}}if("function"!=typeof d&&void 0!==d)throw p
return(c=or(c)).reporter=null!==(t=null!==(r=c.reporter)&&void 0!==r?r:null===(s=i._audit)||void 0===s?void 0:s.reporter)&&void 0!==t?t:"v1",{context:u,options:c,callback:d}}n.top!==n&&(Fr.subscribe("axe.start",(function(e,t,n){var r=n,o=function(e){e instanceof Error==0&&(e=new Error(e)),n(e)},s=e&&e.context||{}
s.hasOwnProperty("include")&&!s.include.length&&(s.include=[a])
var l=e&&e.options||{}
switch(e.command){case"rules":return Ac(s,l,(function(e,t){r(e),t()}),o)
case"cleanup-plugin":return vc(r,o)
default:if(i._audit&&i._audit.commands&&i._audit.commands[e.command])return i._audit.commands[e.command](e,n)}})),Fr.subscribe("axe.ping",(function(e,t,n){n({axe:!0})}))),Cc.prototype.run=function(){return this._run.apply(this,arguments)},Cc.prototype.collect=function(){return this._collect.apply(this,arguments)},Cc.prototype.cleanup=function(e){var t=i.utils.queue(),n=this
Object.keys(this._registry).forEach((function(e){t.defer((function(t){n._registry[e].cleanup(t)}))})),t.then(e)},Cc.prototype.add=function(e){this._registry[e.id]=e}
var Fc=function(){}
function Tc(e){var t,n,r
return"function"==typeof Promise&&e===Fc?t=new Promise((function(e,t){n=t,r=e})):r=n=Fc,{thenable:t,reject:n,resolve:r}}function Nc(e,t,n){var r=wc(t.reporter)(e,t,n)
void 0!==r&&n(r)}function Rc(e,t){if(xc(),"function"!=typeof t||t===Fc)throw e
t(e.message)}function _c(e){var t=e.node,n=R(e,g)
n.node=t.toJSON()
for(var r=0,a=["any","all","none"];r<a.length;r++){var o=a[r]
n[o]=n[o].map((function(e){var t=e.relatedNodes
return S({},R(e,v),{relatedNodes:t.map((function(e){return e.toJSON()}))})}))}return n}function Oc(e){var t,n=[],r=M(e)
try{for(r.s();!(t=r.n()).done;){var a=t.value,o=n.shift()
if(a){a.frameSpec=null!=o?o:null
var i=Sc(a)
n.unshift.apply(n,_(i))}}}catch(e){r.e(e)}finally{r.f()}}function Sc(e){var t=e.frames,n=e.frameSpec
return n?t.map((function(e){return rr.mergeSpecs(e,n)})):t}function Ic(e,t){return new Promise((function(n){wc(t.reporter)(e,t,n)}))}var Pc=function(e,t,n){if("function"==typeof t&&(n=t,t={}),!e||!Array.isArray(e))return n(e)
n(e.map((function(e){for(var t=S({},e),n=0,r=["passes","violations","incomplete","inapplicable"];n<r.length;n++){var a=r[n]
t[a]&&Array.isArray(t[a])&&(t[a]=t[a].map((function(e){var t,n=e.node,r=R(e,w)
return S({node:n="function"==typeof(null===(t=n)||void 0===t?void 0:t.toJSON)?n.toJSON():n},r)})))}return t})))}
i.constants=Tt,i.log=Nt,i.AbstractVirtualNode=_t,i.SerialVirtualNode=Si,i.VirtualNode=so,i._cache=Zn,i._thisWillBeDeletedDoNotUse=i._thisWillBeDeletedDoNotUse||{},i._thisWillBeDeletedDoNotUse.base={Audit:lc,CheckResult:Gu,Check:Ju,Context:To,RuleResult:Xu,Rule:tc,metadataFunctionMap:Wu},i._thisWillBeDeletedDoNotUse.public={reporters:bc},i.imports=uc,i.cleanup=vc,i.configure=function(e){var t
if(!(t=i._audit))throw new Error("No audit configured")
if(e.axeVersion||e.ver){var n=e.axeVersion||e.ver
if(!/^\d+\.\d+\.\d+(-canary)?/.test(n))throw new Error("Invalid configured version ".concat(n))
var r=O(n.split("-"),2),a=r[0],o=r[1],s=O(a.split(".").map(Number),3),l=s[0],u=s[1],c=s[2],d=O(i.version.split("-"),2),p=d[0],f=d[1],h=O(p.split(".").map(Number),3),m=h[0],g=h[1],v=h[2]
if(l!==m||g<u||g===u&&v<c||l===m&&u===g&&c===v&&o&&o!==f)throw new Error("Configured version ".concat(n," is not compatible with current axe version ").concat(i.version))}if(e.reporter&&("function"==typeof e.reporter||yc(e.reporter))&&(t.reporter=e.reporter),e.checks){if(!Array.isArray(e.checks))throw new TypeError("Checks property must be an array")
e.checks.forEach((function(e){if(!e.id)throw new TypeError("Configured check ".concat(JSON.stringify(e)," is invalid. Checks must be an object with at least an id property"))
t.addCheck(e)}))}var b,y=[]
if(e.rules){if(!Array.isArray(e.rules))throw new TypeError("Rules property must be an array")
e.rules.forEach((function(e){if(!e.id)throw new TypeError("Configured rule ".concat(JSON.stringify(e)," is invalid. Rules must be an object with at least an id property"))
y.push(e.id),t.addRule(e)}))}if(e.disableOtherRules&&t.rules.forEach((function(e){!1===y.includes(e.id)&&(e.enabled=!1)})),void 0!==e.branding?t.setBranding(e.branding):t._constructHelpUrls(),e.tagExclude&&(t.tagExclude=e.tagExclude),e.locale&&t.applyLocale(e.locale),e.standards&&(b=e.standards,Object.keys(Va).forEach((function(e){b[e]&&(Va[e]=Mr(Va[e],b[e]))}))),e.noHtml&&(t.noHtml=!0),e.allowedOrigins){if(!Array.isArray(e.allowedOrigins))throw new TypeError("Allowed origins property must be an array")
if(e.allowedOrigins.includes("*"))throw new Error('"*" is not allowed. Use "'.concat(Tt.allOrigins,'" instead'))
t.setAllowedOrigins(e.allowedOrigins)}},i.frameMessenger=function(e){Fr.updateMessenger(e)},i.getRules=function(e){var t=(e=e||[]).length?i._audit.rules.filter((function(t){return!!e.filter((function(e){return-1!==t.tags.indexOf(e)})).length})):i._audit.rules,n=i._audit.data.rules||{}
return t.map((function(e){var t=n[e.id]||{}
return{ruleId:e.id,description:t.description,help:t.help,helpUrl:t.helpUrl,tags:e.tags}}))},i._load=function(e){i._audit=new lc(e)},i.plugins={},i.registerPlugin=function(e){i.plugins[e.id]=new Cc(e)},i.hasReporter=yc,i.getReporter=wc,i.addReporter=function(e,t,n){bc[e]=t,n&&(gc=t)},i.reset=function(){var e=i._audit
if(!e)throw new Error("No audit configured")
e.resetRulesAndChecks(),Object.keys(Va).forEach((function(e){Va[e]=Ha[e]}))},i._runRules=Ac,i.runVirtualRule=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
n.reporter=n.reporter||i._audit.reporter||"v1",i._selectorData={},t instanceof _t||(t=new Si(t))
var r=Ro(e)
if(!r)throw new Error("unknown rule `"+e+"`")
var a={initiator:!0,include:[t]},o=(r=Object.create(r,{excludeHidden:{value:!1}})).runSync(a,n)
mi(o),yn(o)
var s=xn([o])
return s.violations.forEach((function(e){return e.nodes.forEach((function(e){e.failureSummary=po(e)}))})),S({},Do(),s,{toolOptions:n})},i.run=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
Dc(t[0])
var r=kc(t),a=r.context,o=r.options,s=r.callback,l=void 0===s?Fc:s,u=Tc(l),c=u.thenable,d=u.resolve,p=u.reject
try{Pt(i._audit,"No audit configured"),Pt(!i._running,"Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.")}catch(e){return Rc(e,l)}function f(e,t){o.performanceTimer&&i.utils.performanceTimer.end()
try{Nc(e,o,(function(e){i._running=!1,t()
try{l(null,e)}catch(e){i.log(e)}d(e)}))}catch(e){i._running=!1,t(),l(e),p(e)}}function h(e){o.performanceTimer&&i.utils.performanceTimer.end(),i._running=!1,xc(),l(e),p(e)}return i._running=!0,o.performanceTimer&&i.utils.performanceTimer.start(),i._runRules(a,o,f,h),c},i.setup=function(e){if(i._tree)throw new Error("Axe is already setup. Call `axe.teardown()` before calling `axe.setup` again.")
return i._tree=uo(e),i._selectorData=Un(i._tree),i._tree[0]},i.teardown=Ec,i.runPartial=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=kc(t),a=r.options,o=r.context
Pt(i._audit,"Axe is not configured. Audit is missing."),Pt(!i._running,"Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.")
var s=new To(o,i._tree)
return i._tree=s.flatTree,i._selectorData=Un(s.flatTree),i._running=!0,new Promise((function(e,t){i._audit.run(s,a,e,t)})).then((function(e){e=e.map((function(e){var t=e.nodes,n=R(e,m)
return S({nodes:t.map(_c)},n)}))
var t,n=s.frames.map((function(e){var t=e.node
return new rr(t,a).toJSON()}))
return s.initiator&&(t=Do()),{results:e,frames:n,environmentData:t}})).finally((function(){i._running=!1,Ec()}))},i.finishRun=function(e){var t,n,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
a=or(a)
var o=e.find((function(e){return e.environmentData}))||{},s=o.environmentData
i._audit.normalizeOptions(a),a.reporter=null!==(t=null!==(n=a.reporter)&&void 0!==n?n:null===(r=i._audit)||void 0===r?void 0:r.reporter)&&void 0!==t?t:"v1",Oc(e)
var l=Ir(e)
return(l=i._audit.after(l,a)).forEach(mi),Ic(l=l.map(yn),S({environmentData:s},a))},i.commons=Tu,i.utils=Ot,i.addReporter("na",(function(e,t,n){console.warn('"na" reporter will be deprecated in axe v4.0. Use the "v2" reporter instead.'),"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=R(r,b)
n(S({},Do(a),{toolOptions:o},mo(e,t)))})),i.addReporter("no-passes",(function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=R(r,y)
t.resultTypes=["violations"]
var i=mo(e,t).violations
n(S({},Do(a),{toolOptions:o,violations:i}))})),i.addReporter("rawEnv",(function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=R(r,D)
Pc(e,o,(function(e){var t=Do(a)
n({raw:e,env:t})}))})),i.addReporter("raw",Pc),i.addReporter("v1",(function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=R(r,x),i=mo(e,t),s=function(e){e.nodes.forEach((function(e){e.failureSummary=po(e)}))}
i.incomplete.forEach(s),i.violations.forEach(s),n(S({},Do(a),{toolOptions:o},i))})),i.addReporter("v2",(function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=R(r,E),i=mo(e,t)
n(S({},Do(a),{toolOptions:o},i))}),!0)}(),i._load({lang:"en",data:{rules:{accesskeys:{description:"Ensures every accesskey attribute value is unique",help:"accesskey attribute value should be unique"},"area-alt":{description:"Ensures <area> elements of image maps have alternate text",help:"Active <area> elements must have alternate text"},"aria-allowed-attr":{description:"Ensures ARIA attributes are allowed for an element's role",help:"Elements must only use allowed ARIA attributes"},"aria-allowed-role":{description:"Ensures role attribute has an appropriate value for the element",help:"ARIA role should be appropriate for the element"},"aria-command-name":{description:"Ensures every ARIA button, link and menuitem has an accessible name",help:"ARIA commands must have an accessible name"},"aria-dialog-name":{description:"Ensures every ARIA dialog and alertdialog node has an accessible name",help:"ARIA dialog and alertdialog nodes should have an accessible name"},"aria-hidden-body":{description:"Ensures aria-hidden='true' is not present on the document body.",help:"aria-hidden='true' must not be present on the document body"},"aria-hidden-focus":{description:"Ensures aria-hidden elements do not contain focusable elements",help:"ARIA hidden element must not contain focusable elements"},"aria-input-field-name":{description:"Ensures every ARIA input field has an accessible name",help:"ARIA input fields must have an accessible name"},"aria-meter-name":{description:"Ensures every ARIA meter node has an accessible name",help:"ARIA meter nodes must have an accessible name"},"aria-progressbar-name":{description:"Ensures every ARIA progressbar node has an accessible name",help:"ARIA progressbar nodes must have an accessible name"},"aria-required-attr":{description:"Ensures elements with ARIA roles have all required ARIA attributes",help:"Required ARIA attributes must be provided"},"aria-required-children":{description:"Ensures elements with an ARIA role that require child roles contain them",help:"Certain ARIA roles must contain particular children"},"aria-required-parent":{description:"Ensures elements with an ARIA role that require parent roles are contained by them",help:"Certain ARIA roles must be contained by particular parents"},"aria-roledescription":{description:"Ensure aria-roledescription is only used on elements with an implicit or explicit role",help:"aria-roledescription must be on elements with a semantic role"},"aria-roles":{description:"Ensures all elements with a role attribute use a valid value",help:"ARIA roles used must conform to valid values"},"aria-text":{description:'Ensures "role=text" is used on elements with no focusable descendants',help:'"role=text" should have no focusable descendants'},"aria-toggle-field-name":{description:"Ensures every ARIA toggle field has an accessible name",help:"ARIA toggle fields must have an accessible name"},"aria-tooltip-name":{description:"Ensures every ARIA tooltip node has an accessible name",help:"ARIA tooltip nodes must have an accessible name"},"aria-treeitem-name":{description:"Ensures every ARIA treeitem node has an accessible name",help:"ARIA treeitem nodes should have an accessible name"},"aria-valid-attr-value":{description:"Ensures all ARIA attributes have valid values",help:"ARIA attributes must conform to valid values"},"aria-valid-attr":{description:"Ensures attributes that begin with aria- are valid ARIA attributes",help:"ARIA attributes must conform to valid names"},"audio-caption":{description:"Ensures <audio> elements have captions",help:"<audio> elements must have a captions track"},"autocomplete-valid":{description:"Ensure the autocomplete attribute is correct and suitable for the form field",help:"autocomplete attribute must be used correctly"},"avoid-inline-spacing":{description:"Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",help:"Inline text spacing must be adjustable with custom stylesheets"},blink:{description:"Ensures <blink> elements are not used",help:"<blink> elements are deprecated and must not be used"},"button-name":{description:"Ensures buttons have discernible text",help:"Buttons must have discernible text"},bypass:{description:"Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content",help:"Page must have means to bypass repeated blocks"},"color-contrast":{description:"Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds",help:"Elements must have sufficient color contrast"},"css-orientation-lock":{description:"Ensures content is not locked to any specific display orientation, and the content is operable in all display orientations",help:"CSS Media queries must not lock display orientation"},"definition-list":{description:"Ensures <dl> elements are structured correctly",help:"<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements"},dlitem:{description:"Ensures <dt> and <dd> elements are contained by a <dl>",help:"<dt> and <dd> elements must be contained by a <dl>"},"document-title":{description:"Ensures each HTML document contains a non-empty <title> element",help:"Documents must have <title> element to aid in navigation"},"duplicate-id-active":{description:"Ensures every id attribute value of active elements is unique",help:"IDs of active elements must be unique"},"duplicate-id-aria":{description:"Ensures every id attribute value used in ARIA and in labels is unique",help:"IDs used in ARIA and labels must be unique"},"duplicate-id":{description:"Ensures every id attribute value is unique",help:"id attribute value must be unique"},"empty-heading":{description:"Ensures headings have discernible text",help:"Headings should not be empty"},"empty-table-header":{description:"Ensures table headers have discernible text",help:"Table header text must not be empty"},"focus-order-semantics":{description:"Ensures elements in the focus order have a role appropriate for interactive content",help:"Elements in the focus order should have an appropriate role"},"form-field-multiple-labels":{description:"Ensures form field does not have multiple label elements",help:"Form field must not have multiple label elements"},"frame-focusable-content":{description:"Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1",help:"Frames with focusable content must not have tabindex=-1"},"frame-tested":{description:"Ensures <iframe> and <frame> elements contain the axe-core script",help:"Frames should be tested with axe-core"},"frame-title-unique":{description:"Ensures <iframe> and <frame> elements contain a unique title attribute",help:"Frames should have a unique title attribute"},"frame-title":{description:"Ensures <iframe> and <frame> elements have an accessible name",help:"Frames must have an accessible name"},"heading-order":{description:"Ensures the order of headings is semantically correct",help:"Heading levels should only increase by one"},"hidden-content":{description:"Informs users about hidden content.",help:"Hidden content on the page should be analyzed"},"html-has-lang":{description:"Ensures every HTML document has a lang attribute",help:"<html> element must have a lang attribute"},"html-lang-valid":{description:"Ensures the lang attribute of the <html> element has a valid value",help:"<html> element must have a valid value for the lang attribute"},"html-xml-lang-mismatch":{description:"Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",help:"HTML elements with lang and xml:lang must have the same base language"},"identical-links-same-purpose":{description:"Ensure that links with the same accessible name serve a similar purpose",help:"Links with the same name must have a similar purpose"},"image-alt":{description:"Ensures <img> elements have alternate text or a role of none or presentation",help:"Images must have alternate text"},"image-redundant-alt":{description:"Ensure image alternative is not repeated as text",help:"Alternative text of images should not be repeated as text"},"input-button-name":{description:"Ensures input buttons have discernible text",help:"Input buttons must have discernible text"},"input-image-alt":{description:'Ensures <input type="image"> elements have alternate text',help:"Image buttons must have alternate text"},"label-content-name-mismatch":{description:"Ensures that elements labelled through their content must have their visible text as part of their accessible name",help:"Elements must have their visible text as part of their accessible name"},"label-title-only":{description:"Ensures that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",help:"Form elements should have a visible label"},label:{description:"Ensures every form element has a label",help:"Form elements must have labels"},"landmark-banner-is-top-level":{description:"Ensures the banner landmark is at top level",help:"Banner landmark should not be contained in another landmark"},"landmark-complementary-is-top-level":{description:"Ensures the complementary landmark or aside is at top level",help:"Aside should not be contained in another landmark"},"landmark-contentinfo-is-top-level":{description:"Ensures the contentinfo landmark is at top level",help:"Contentinfo landmark should not be contained in another landmark"},"landmark-main-is-top-level":{description:"Ensures the main landmark is at top level",help:"Main landmark should not be contained in another landmark"},"landmark-no-duplicate-banner":{description:"Ensures the document has at most one banner landmark",help:"Document should not have more than one banner landmark"},"landmark-no-duplicate-contentinfo":{description:"Ensures the document has at most one contentinfo landmark",help:"Document should not have more than one contentinfo landmark"},"landmark-no-duplicate-main":{description:"Ensures the document has at most one main landmark",help:"Document should not have more than one main landmark"},"landmark-one-main":{description:"Ensures the document has a main landmark",help:"Document should have one main landmark"},"landmark-unique":{help:"Ensures landmarks are unique",description:"Landmarks should have a unique role or role/label/title (i.e. accessible name) combination"},"link-in-text-block":{description:"Ensure links are distinguished from surrounding text in a way that does not rely on color",help:"Links must be distinguishable without relying on color"},"link-name":{description:"Ensures links have discernible text",help:"Links must have discernible text"},list:{description:"Ensures that lists are structured correctly",help:"<ul> and <ol> must only directly contain <li>, <script> or <template> elements"},listitem:{description:"Ensures <li> elements are used semantically",help:"<li> elements must be contained in a <ul> or <ol>"},marquee:{description:"Ensures <marquee> elements are not used",help:"<marquee> elements are deprecated and must not be used"},"meta-refresh":{description:'Ensures <meta http-equiv="refresh"> is not used',help:"Timed refresh must not exist"},"meta-viewport-large":{description:'Ensures <meta name="viewport"> can scale a significant amount',help:"Users should be able to zoom and scale the text up to 500%"},"meta-viewport":{description:'Ensures <meta name="viewport"> does not disable text scaling and zooming',help:"Zooming and scaling should not be disabled"},"nested-interactive":{description:"Ensure controls are not nested as they are not announced by screen readers",help:"Interactive controls must not be nested"},"no-autoplay-audio":{description:"Ensures <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",help:"<video> or <audio> elements must not play automatically"},"object-alt":{description:"Ensures <object> elements have alternate text",help:"<object> elements must have alternate text"},"p-as-heading":{description:"Ensure bold, italic text and font-size is not used to style <p> elements as a heading",help:"Styled <p> elements must not be used as headings"},"page-has-heading-one":{description:"Ensure that the page, or at least one of its frames contains a level-one heading",help:"Page should contain a level-one heading"},"presentation-role-conflict":{description:"Flags elements whose role is none or presentation and which cause the role conflict resolution to trigger.",help:"Elements of role none or presentation should be flagged"},region:{description:"Ensures all page content is contained by landmarks",help:"All page content should be contained by landmarks"},"role-img-alt":{description:"Ensures [role='img'] elements have alternate text",help:"[role='img'] elements must have an alternative text"},"scope-attr-valid":{description:"Ensures the scope attribute is used correctly on tables",help:"scope attribute should be used correctly"},"scrollable-region-focusable":{description:"Ensure elements that have scrollable content are accessible by keyboard",help:"Scrollable region must have keyboard access"},"select-name":{description:"Ensures select element has an accessible name",help:"Select element must have an accessible name"},"server-side-image-map":{description:"Ensures that server-side image maps are not used",help:"Server-side image maps must not be used"},"skip-link":{description:"Ensure all skip links have a focusable target",help:"The skip-link target should exist and be focusable"},"svg-img-alt":{description:"Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text",help:"<svg> elements with an img role must have an alternative text"},tabindex:{description:"Ensures tabindex attribute values are not greater than 0",help:"Elements should not have tabindex greater than zero"},"table-duplicate-name":{description:"Ensure the <caption> element does not contain the same text as the summary attribute",help:"tables should not have the same summary and caption"},"table-fake-caption":{description:"Ensure that tables with a caption use the <caption> element.",help:"Data or header cells must not be used to give caption to a data table."},"td-has-header":{description:"Ensure that each non-empty data cell in a <table> larger than 3 by 3  has one or more table headers",help:"Non-empty <td> elements in larger <table> must have an associated table header"},"td-headers-attr":{description:"Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table",help:"Table cells that use the headers attribute must only refer to cells in the same table"},"th-has-data-cells":{description:"Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",help:"Table headers in a data table must refer to data cells"},"valid-lang":{description:"Ensures lang attributes have valid values",help:"lang attribute must have a valid value"},"video-caption":{description:"Ensures <video> elements have captions",help:"<video> elements must have captions"}},checks:{abstractrole:{impact:"serious",messages:{pass:"Abstract roles are not used",fail:{singular:"Abstract role cannot be directly used: ${data.values}",plural:"Abstract roles cannot be directly used: ${data.values}"}}},"aria-allowed-attr":{impact:"critical",messages:{pass:"ARIA attributes are used correctly for the defined role",fail:{singular:"ARIA attribute is not allowed: ${data.values}",plural:"ARIA attributes are not allowed: ${data.values}"}}},"aria-allowed-role":{impact:"minor",messages:{pass:"ARIA role is allowed for given element",fail:{singular:"ARIA role ${data.values} is not allowed for given element",plural:"ARIA roles ${data.values} are not allowed for given element"},incomplete:{singular:"ARIA role ${data.values} must be removed when the element is made visible, as it is not allowed for the element",plural:"ARIA roles ${data.values} must be removed when the element is made visible, as they are not allowed for the element"}}},"aria-errormessage":{impact:"critical",messages:{pass:"aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique",fail:{singular:"aria-errormessage value `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",plural:"aria-errormessage values `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",hidden:"aria-errormessage value `${data.values}` cannot reference a hidden element"},incomplete:{singular:"ensure aria-errormessage value `${data.values}` references an existing element",plural:"ensure aria-errormessage values `${data.values}` reference existing elements",idrefs:"unable to determine if aria-errormessage element exists on the page: ${data.values}"}}},"aria-hidden-body":{impact:"critical",messages:{pass:"No aria-hidden attribute is present on document body",fail:"aria-hidden=true should not be present on the document body"}},"aria-level":{impact:"serious",messages:{pass:"aria-level values are valid",incomplete:"aria-level values greater than 6 are not supported in all screenreader and browser combinations"}},"aria-prohibited-attr":{impact:"serious",messages:{pass:"ARIA attribute is allowed",fail:"ARIA attribute: ${data.values} is not allowed. Use a different role attribute or element.",incomplete:"ARIA attribute: ${data.values} is not well supported. Use a different role attribute or element."}},"aria-required-attr":{impact:"critical",messages:{pass:"All required ARIA attributes are present",fail:{singular:"Required ARIA attribute not present: ${data.values}",plural:"Required ARIA attributes not present: ${data.values}"}}},"aria-required-children":{impact:"critical",messages:{pass:"Required ARIA children are present",fail:{singular:"Required ARIA child role not present: ${data.values}",plural:"Required ARIA children role not present: ${data.values}"},incomplete:{singular:"Expecting ARIA child role to be added: ${data.values}",plural:"Expecting ARIA children role to be added: ${data.values}"}}},"aria-required-parent":{impact:"critical",messages:{pass:"Required ARIA parent role present",fail:{singular:"Required ARIA parent role not present: ${data.values}",plural:"Required ARIA parents role not present: ${data.values}"}}},"aria-roledescription":{impact:"serious",messages:{pass:"aria-roledescription used on a supported semantic role",incomplete:"Check that the aria-roledescription is announced by supported screen readers",fail:"Give the element a role that supports aria-roledescription"}},"aria-unsupported-attr":{impact:"critical",messages:{pass:"ARIA attribute is supported",fail:"ARIA attribute is not widely supported in screen readers and assistive technologies: ${data.values}"}},"aria-valid-attr-value":{impact:"critical",messages:{pass:"ARIA attribute values are valid",fail:{singular:"Invalid ARIA attribute value: ${data.values}",plural:"Invalid ARIA attribute values: ${data.values}"},incomplete:{noId:"ARIA attribute element ID does not exist on the page: ${data.needsReview}",ariaCurrent:'ARIA attribute value is invalid and will be treated as "aria-current=true": ${data.needsReview}',idrefs:"Unable to determine if ARIA attribute element ID exists on the page: ${data.needsReview}"}}},"aria-valid-attr":{impact:"critical",messages:{pass:"ARIA attribute name is valid",fail:{singular:"Invalid ARIA attribute name: ${data.values}",plural:"Invalid ARIA attribute names: ${data.values}"}}},fallbackrole:{impact:"serious",messages:{pass:"Only one role value used",fail:"Use only one role value, since fallback roles are not supported in older browsers",incomplete:"Use only role 'presentation' or 'none' since they are synonymous."}},"has-global-aria-attribute":{impact:"minor",messages:{pass:{singular:"Element has global ARIA attribute: ${data.values}",plural:"Element has global ARIA attributes: ${data.values}"},fail:"Element does not have global ARIA attribute"}},"has-widget-role":{impact:"minor",messages:{pass:"Element has a widget role.",fail:"Element does not have a widget role."}},invalidrole:{impact:"critical",messages:{pass:"ARIA role is valid",fail:{singular:"Role must be one of the valid ARIA roles: ${data.values}",plural:"Roles must be one of the valid ARIA roles: ${data.values}"}}},"is-element-focusable":{impact:"minor",messages:{pass:"Element is focusable.",fail:"Element is not focusable."}},"no-implicit-explicit-label":{impact:"moderate",messages:{pass:"There is no mismatch between a <label> and accessible name",incomplete:"Check that the <label> does not need be part of the ARIA ${data} field's name"}},unsupportedrole:{impact:"critical",messages:{pass:"ARIA role is supported",fail:"The role used is not widely supported in screen readers and assistive technologies: ${data.values}"}},"valid-scrollable-semantics":{impact:"minor",messages:{pass:"Element has valid semantics for an element in the focus order.",fail:"Element has invalid semantics for an element in the focus order."}},"color-contrast":{impact:"serious",messages:{pass:"Element has sufficient color contrast of ${data.contrastRatio}",fail:{default:"Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",fgOnShadowColor:"Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",shadowOnBgColor:"Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"},incomplete:{default:"Unable to determine contrast ratio",bgImage:"Element's background color could not be determined due to a background image",bgGradient:"Element's background color could not be determined due to a background gradient",imgNode:"Element's background color could not be determined because element contains an image node",bgOverlap:"Element's background color could not be determined because it is overlapped by another element",fgAlpha:"Element's foreground color could not be determined because of alpha transparency",elmPartiallyObscured:"Element's background color could not be determined because it's partially obscured by another element",elmPartiallyObscuring:"Element's background color could not be determined because it partially overlaps other elements",outsideViewport:"Element's background color could not be determined because it's outside the viewport",equalRatio:"Element has a 1:1 contrast ratio with the background",shortTextContent:"Element content is too short to determine if it is actual text content",nonBmp:"Element content contains only non-text characters",pseudoContent:"Element's background color could not be determined due to a pseudo element"}}},"link-in-text-block":{impact:"serious",messages:{pass:"Links can be distinguished from surrounding text in some way other than by color",fail:"Links need to be distinguished from surrounding text in some way other than by color",incomplete:{default:"Unable to determine contrast ratio",bgContrast:"Element's contrast ratio could not be determined. Check for a distinct hover/focus style",bgImage:"Element's contrast ratio could not be determined due to a background image",bgGradient:"Element's contrast ratio could not be determined due to a background gradient",imgNode:"Element's contrast ratio could not be determined because element contains an image node",bgOverlap:"Element's contrast ratio could not be determined because of element overlap"}}},"autocomplete-appropriate":{impact:"serious",messages:{pass:"the autocomplete value is on an appropriate element",fail:"the autocomplete value is inappropriate for this type of input"}},"autocomplete-valid":{impact:"serious",messages:{pass:"the autocomplete attribute is correctly formatted",fail:"the autocomplete attribute is incorrectly formatted"}},accesskeys:{impact:"serious",messages:{pass:"Accesskey attribute value is unique",fail:"Document has multiple elements with the same accesskey"}},"focusable-content":{impact:"moderate",messages:{pass:"Element contains focusable elements",fail:"Element should have focusable content"}},"focusable-disabled":{impact:"serious",messages:{pass:"No focusable elements contained within element",fail:"Focusable content should be disabled or be removed from the DOM"}},"focusable-element":{impact:"moderate",messages:{pass:"Element is focusable",fail:"Element should be focusable"}},"focusable-modal-open":{impact:"serious",messages:{pass:"No focusable elements while a modal is open",incomplete:"Check that focusable elements are not tabbable in the current state"}},"focusable-no-name":{impact:"serious",messages:{pass:"Element is not in tab order or has accessible text",fail:"Element is in tab order and does not have accessible text",incomplete:"Unable to determine if element has an accessible name"}},"focusable-not-tabbable":{impact:"serious",messages:{pass:"No focusable elements contained within element",fail:"Focusable content should have tabindex='-1' or be removed from the DOM"}},"frame-focusable-content":{impact:"serious",messages:{pass:"Element does not have focusable descendants",fail:"Element has focusable descendants",incomplete:"Could not determine if element has descendants"}},"landmark-is-top-level":{impact:"moderate",messages:{pass:"The ${data.role} landmark is at the top level.",fail:"The ${data.role} landmark is contained in another landmark."}},"no-focusable-content":{impact:"serious",messages:{pass:"Element does not have focusable descendants",fail:"Element has focusable descendants",incomplete:"Could not determine if element has descendants"}},"page-has-heading-one":{impact:"moderate",messages:{pass:"Page has at least one level-one heading",fail:"Page must have a level-one heading"}},"page-has-main":{impact:"moderate",messages:{pass:"Document has at least one main landmark",fail:"Document does not have a main landmark"}},"page-no-duplicate-banner":{impact:"moderate",messages:{pass:"Document does not have more than one banner landmark",fail:"Document has more than one banner landmark"}},"page-no-duplicate-contentinfo":{impact:"moderate",messages:{pass:"Document does not have more than one contentinfo landmark",fail:"Document has more than one contentinfo landmark"}},"page-no-duplicate-main":{impact:"moderate",messages:{pass:"Document does not have more than one main landmark",fail:"Document has more than one main landmark"}},tabindex:{impact:"serious",messages:{pass:"Element does not have a tabindex greater than 0",fail:"Element has a tabindex greater than 0"}},"alt-space-value":{impact:"critical",messages:{pass:"Element has a valid alt attribute value",fail:"Element has an alt attribute containing only a space character, which is not ignored by all screen readers"}},"duplicate-img-label":{impact:"minor",messages:{pass:"Element does not duplicate existing text in <img> alt text",fail:"Element contains <img> element with alt text that duplicates existing text"}},"explicit-label":{impact:"critical",messages:{pass:"Form element has an explicit <label>",fail:"Form element does not have an explicit <label>",incomplete:"Unable to determine if form element has an explicit <label>"}},"help-same-as-label":{impact:"minor",messages:{pass:"Help text (title or aria-describedby) does not duplicate label text",fail:"Help text (title or aria-describedby) text is the same as the label text"}},"hidden-explicit-label":{impact:"critical",messages:{pass:"Form element has a visible explicit <label>",fail:"Form element has explicit <label> that is hidden",incomplete:"Unable to determine if form element has explicit <label> that is hidden"}},"implicit-label":{impact:"critical",messages:{pass:"Form element has an implicit (wrapped) <label>",fail:"Form element does not have an implicit (wrapped) <label>",incomplete:"Unable to determine if form element has an implicit (wrapped} <label>"}},"label-content-name-mismatch":{impact:"serious",messages:{pass:"Element contains visible text as part of it's accessible name",fail:"Text inside the element is not included in the accessible name"}},"multiple-label":{impact:"moderate",messages:{pass:"Form field does not have multiple label elements",incomplete:"Multiple label elements is not widely supported in assistive technologies. Ensure the first label contains all necessary information."}},"title-only":{impact:"serious",messages:{pass:"Form element does not solely use title attribute for its label",fail:"Only title used to generate label for form element"}},"landmark-is-unique":{impact:"moderate",messages:{pass:"Landmarks must have a unique role or role/label/title (i.e. accessible name) combination",fail:"The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable"}},"has-lang":{impact:"serious",messages:{pass:"The <html> element has a lang attribute",fail:{noXHTML:"The xml:lang attribute is not valid on HTML pages, use the lang attribute.",noLang:"The <html> element does not have a lang attribute"}}},"valid-lang":{impact:"serious",messages:{pass:"Value of lang attribute is included in the list of valid languages",fail:"Value of lang attribute not included in the list of valid languages"}},"xml-lang-mismatch":{impact:"moderate",messages:{pass:"Lang and xml:lang attributes have the same base language",fail:"Lang and xml:lang attributes do not have the same base language"}},dlitem:{impact:"serious",messages:{pass:"Description list item has a <dl> parent element",fail:"Description list item does not have a <dl> parent element"}},listitem:{impact:"serious",messages:{pass:'List item has a <ul>, <ol> or role="list" parent element',fail:{default:"List item does not have a <ul>, <ol> parent element",roleNotValid:'List item does not have a <ul>, <ol> parent element without a role, or a role="list"'}}},"only-dlitems":{impact:"serious",messages:{pass:"List element only has direct children that are allowed inside <dt> or <dd> elements",fail:"List element has direct children that are not allowed inside <dt> or <dd> elements"}},"only-listitems":{impact:"serious",messages:{pass:"List element only has direct children that are allowed inside <li> elements",fail:{default:"List element has direct children that are not allowed inside <li> elements",roleNotValid:"List element has direct children with a role that is not allowed: ${data.roles}"}}},"structured-dlitems":{impact:"serious",messages:{pass:"When not empty, element has both <dt> and <dd> elements",fail:"When not empty, element does not have at least one <dt> element followed by at least one <dd> element"}},caption:{impact:"critical",messages:{pass:"The multimedia element has a captions track",incomplete:"Check that captions is available for the element"}},"frame-tested":{impact:"critical",messages:{pass:"The iframe was tested with axe-core",fail:"The iframe could not be tested with axe-core",incomplete:"The iframe still has to be tested with axe-core"}},"no-autoplay-audio":{impact:"moderate",messages:{pass:"<video> or <audio> does not output audio for more than allowed duration or has controls mechanism",fail:"<video> or <audio> outputs audio for more than allowed duration and does not have a controls mechanism",incomplete:"Check that the <video> or <audio> does not output audio for more than allowed duration or provides a controls mechanism"}},"css-orientation-lock":{impact:"serious",messages:{pass:"Display is operable, and orientation lock does not exist",fail:"CSS Orientation lock is applied, and makes display inoperable",incomplete:"CSS Orientation lock cannot be determined"}},"meta-viewport-large":{impact:"minor",messages:{pass:"<meta> tag does not prevent significant zooming on mobile devices",fail:"<meta> tag limits zooming on mobile devices"}},"meta-viewport":{impact:"critical",messages:{pass:"<meta> tag does not disable zooming on mobile devices",fail:"${data} on <meta> tag disables zooming on mobile devices"}},"header-present":{impact:"serious",messages:{pass:"Page has a heading",fail:"Page does not have a heading"}},"heading-order":{impact:"moderate",messages:{pass:"Heading order valid",fail:"Heading order invalid",incomplete:"Unable to determine previous heading"}},"identical-links-same-purpose":{impact:"minor",messages:{pass:"There are no other links with the same name, that go to a different URL",incomplete:"Check that links have the same purpose, or are intentionally ambiguous."}},"internal-link-present":{impact:"serious",messages:{pass:"Valid skip link found",fail:"No valid skip link found"}},landmark:{impact:"serious",messages:{pass:"Page has a landmark region",fail:"Page does not have a landmark region"}},"meta-refresh":{impact:"critical",messages:{pass:"<meta> tag does not immediately refresh the page",fail:"<meta> tag forces timed refresh of page"}},"p-as-heading":{impact:"serious",messages:{pass:"<p> elements are not styled as headings",fail:"Heading elements should be used instead of styled <p> elements",incomplete:"Unable to determine if <p> elements are styled as headings"}},region:{impact:"moderate",messages:{pass:"All page content is contained by landmarks",fail:"Some page content is not contained by landmarks"}},"skip-link":{impact:"moderate",messages:{pass:"Skip link target exists",incomplete:"Skip link target should become visible on activation",fail:"No skip link target"}},"unique-frame-title":{impact:"serious",messages:{pass:"Element's title attribute is unique",fail:"Element's title attribute is not unique"}},"duplicate-id-active":{impact:"serious",messages:{pass:"Document has no active elements that share the same id attribute",fail:"Document has active elements with the same id attribute: ${data}"}},"duplicate-id-aria":{impact:"critical",messages:{pass:"Document has no elements referenced with ARIA or labels that share the same id attribute",fail:"Document has multiple elements referenced with ARIA with the same id attribute: ${data}"}},"duplicate-id":{impact:"minor",messages:{pass:"Document has no static elements that share the same id attribute",fail:"Document has multiple static elements with the same id attribute: ${data}"}},"aria-label":{impact:"serious",messages:{pass:"aria-label attribute exists and is not empty",fail:"aria-label attribute does not exist or is empty"}},"aria-labelledby":{impact:"serious",messages:{pass:"aria-labelledby attribute exists and references elements that are visible to screen readers",fail:"aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",incomplete:"ensure aria-labelledby references an existing element"}},"avoid-inline-spacing":{impact:"serious",messages:{pass:"No inline styles with '!important' that affect text spacing has been specified",fail:{singular:"Remove '!important' from inline style ${data.values}, as overriding this is not supported by most browsers",plural:"Remove '!important' from inline styles ${data.values}, as overriding this is not supported by most browsers"}}},"button-has-visible-text":{impact:"critical",messages:{pass:"Element has inner text that is visible to screen readers",fail:"Element does not have inner text that is visible to screen readers",incomplete:"Unable to determine if element has children"}},"doc-has-title":{impact:"serious",messages:{pass:"Document has a non-empty <title> element",fail:"Document does not have a non-empty <title> element"}},exists:{impact:"minor",messages:{pass:"Element does not exist",incomplete:"Element exists"}},"has-alt":{impact:"critical",messages:{pass:"Element has an alt attribute",fail:"Element does not have an alt attribute"}},"has-visible-text":{impact:"minor",messages:{pass:"Element has text that is visible to screen readers",fail:"Element does not have text that is visible to screen readers",incomplete:"Unable to determine if element has children"}},"is-on-screen":{impact:"serious",messages:{pass:"Element is not visible",fail:"Element is visible"}},"non-empty-alt":{impact:"critical",messages:{pass:"Element has a non-empty alt attribute",fail:{noAttr:"Element has no alt attribute",emptyAttr:"Element has an empty alt attribute"}}},"non-empty-if-present":{impact:"critical",messages:{pass:{default:"Element does not have a value attribute","has-label":"Element has a non-empty value attribute"},fail:"Element has a value attribute and the value attribute is empty"}},"non-empty-placeholder":{impact:"serious",messages:{pass:"Element has a placeholder attribute",fail:{noAttr:"Element has no placeholder attribute",emptyAttr:"Element has an empty placeholder attribute"}}},"non-empty-title":{impact:"serious",messages:{pass:"Element has a title attribute",fail:{noAttr:"Element has no title attribute",emptyAttr:"Element has an empty title attribute"}}},"non-empty-value":{impact:"critical",messages:{pass:"Element has a non-empty value attribute",fail:{noAttr:"Element has no value attribute",emptyAttr:"Element has an empty value attribute"}}},"presentational-role":{impact:"minor",messages:{pass:'Element\'s default semantics were overriden with role="${data.role}"',fail:{default:'Element\'s default semantics were not overridden with role="none" or role="presentation"',globalAria:"Element's role is not presentational because it has a global ARIA attribute",focusable:"Element's role is not presentational because it is focusable",both:"Element's role is not presentational because it has a global ARIA attribute and is focusable"}}},"role-none":{impact:"minor",messages:{pass:'Element\'s default semantics were overriden with role="none"',fail:'Element\'s default semantics were not overridden with role="none"'}},"role-presentation":{impact:"minor",messages:{pass:'Element\'s default semantics were overriden with role="presentation"',fail:'Element\'s default semantics were not overridden with role="presentation"'}},"svg-non-empty-title":{impact:"serious",messages:{pass:"Element has a child that is a title",fail:{noTitle:"Element has no child that is a title",emptyTitle:"Element child title is empty"},incomplete:"Unable to determine element has a child that is a title"}},"caption-faked":{impact:"serious",messages:{pass:"The first row of a table is not used as a caption",fail:"The first child of the table should be a caption instead of a table cell"}},"html5-scope":{impact:"moderate",messages:{pass:"Scope attribute is only used on table header elements (<th>)",fail:"In HTML 5, scope attributes may only be used on table header elements (<th>)"}},"same-caption-summary":{impact:"minor",messages:{pass:"Content of summary attribute and <caption> are not duplicated",fail:"Content of summary attribute and <caption> element are identical"}},"scope-value":{impact:"critical",messages:{pass:"Scope attribute is used correctly",fail:"The value of the scope attribute may only be 'row' or 'col'"}},"td-has-header":{impact:"critical",messages:{pass:"All non-empty data cells have table headers",fail:"Some non-empty data cells do not have table headers"}},"td-headers-attr":{impact:"serious",messages:{pass:"The headers attribute is exclusively used to refer to other cells in the table",incomplete:"The headers attribute is empty",fail:"The headers attribute is not exclusively used to refer to other cells in the table"}},"th-has-data-cells":{impact:"serious",messages:{pass:"All table header cells refer to data cells",fail:"Not all table header cells refer to data cells",incomplete:"Table data cells are missing or empty"}},"hidden-content":{impact:"minor",messages:{pass:"All content on the page has been analyzed.",fail:"There were problems analyzing the content on this page.",incomplete:"There is hidden content on the page that was not analyzed. You will need to trigger the display of this content in order to analyze it."}}},failureSummaries:{any:{failureMessage:function(e){var t="Fix any of the following:",n=e
if(n)for(var r=-1,a=n.length-1;r<a;)t+="\n  "+n[r+=1].split("\n").join("\n  ")
return t}},none:{failureMessage:function(e){var t="Fix all of the following:",n=e
if(n)for(var r=-1,a=n.length-1;r<a;)t+="\n  "+n[r+=1].split("\n").join("\n  ")
return t}}},incompleteFallbackMessage:{}},rules:[{id:"accesskeys",selector:"[accesskey]",excludeHidden:!1,tags:["cat.keyboard","best-practice"],all:[],any:[],none:["accesskeys"]},{id:"area-alt",selector:"map area[href]",excludeHidden:!1,tags:["cat.text-alternatives","wcag2a","wcag111","wcag244","wcag412","section508","section508.22.a","ACT"],actIds:["c487ae"],all:[],any:[{options:{attribute:"alt"},id:"non-empty-alt"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-allowed-attr",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412"],actIds:["5c01ea"],all:[],any:[{options:{validTreeRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]},id:"aria-allowed-attr"}],none:["aria-unsupported-attr",{options:{elementsAllowedAriaLabel:["applet","input"]},id:"aria-prohibited-attr"}]},{id:"aria-allowed-role",excludeHidden:!1,selector:"[role]",matches:"aria-allowed-role-matches",tags:["cat.aria","best-practice"],all:[],any:[{options:{allowImplicit:!0,ignoredTags:[]},id:"aria-allowed-role"}],none:[]},{id:"aria-command-name",selector:'[role="link"], [role="button"], [role="menuitem"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412"],actIds:["97a4e1"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-dialog-name",selector:'[role="dialog"], [role="alertdialog"]',matches:"no-naming-method-matches",tags:["cat.aria","best-practice"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-hidden-body",selector:"body",excludeHidden:!1,matches:"is-initiator-matches",tags:["cat.aria","wcag2a","wcag412"],all:[],any:["aria-hidden-body"],none:[]},{id:"aria-hidden-focus",selector:'[aria-hidden="true"]',matches:"aria-hidden-focus-matches",excludeHidden:!1,tags:["cat.name-role-value","wcag2a","wcag412","wcag131"],actIds:["6cfa84"],all:["focusable-modal-open","focusable-disabled","focusable-not-tabbable"],any:[],none:[]},{id:"aria-input-field-name",selector:'[role="combobox"], [role="listbox"], [role="searchbox"], [role="slider"], [role="spinbutton"], [role="textbox"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","ACT"],actIds:["e086e5"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["no-implicit-explicit-label"]},{id:"aria-meter-name",selector:'[role="meter"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag111"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-progressbar-name",selector:'[role="progressbar"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag111"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-required-attr",selector:"[role]",tags:["cat.aria","wcag2a","wcag412"],all:[],any:["aria-required-attr"],none:[]},{id:"aria-required-children",selector:"[role]",matches:"aria-required-children-matches",tags:["cat.aria","wcag2a","wcag131"],actIds:["ff89c9"],all:[],any:[{options:{reviewEmpty:["doc-bibliography","doc-endnotes","grid","list","listbox","table","tablist","tree","treegrid","rowgroup"]},id:"aria-required-children"}],none:[]},{id:"aria-required-parent",selector:"[role]",matches:"aria-required-parent-matches",tags:["cat.aria","wcag2a","wcag131"],actIds:["bc4a75","ff89c9"],all:[],any:[{options:{ownGroupRoles:["listitem","treeitem"]},id:"aria-required-parent"}],none:[]},{id:"aria-roledescription",selector:"[aria-roledescription]",tags:["cat.aria","wcag2a","wcag412"],all:[],any:[{options:{supportedRoles:["button","img","checkbox","radio","combobox","menuitemcheckbox","menuitemradio"]},id:"aria-roledescription"}],none:[]},{id:"aria-roles",selector:"[role]",matches:"no-empty-role-matches",tags:["cat.aria","wcag2a","wcag412"],all:[],any:[],none:["fallbackrole","invalidrole","abstractrole","unsupportedrole"]},{id:"aria-text",selector:"[role=text]",tags:["cat.aria","best-practice"],all:[],any:["no-focusable-content"],none:[]},{id:"aria-toggle-field-name",selector:'[role="checkbox"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="radio"], [role="switch"], [role="option"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","ACT"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["no-implicit-explicit-label"]},{id:"aria-tooltip-name",selector:'[role="tooltip"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-treeitem-name",selector:'[role="treeitem"]',matches:"no-naming-method-matches",tags:["cat.aria","best-practice"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-valid-attr-value",matches:"aria-has-attr-matches",tags:["cat.aria","wcag2a","wcag412"],actIds:["5c01ea","c487ae"],all:[{options:[],id:"aria-valid-attr-value"},"aria-errormessage","aria-level"],any:[],none:[]},{id:"aria-valid-attr",matches:"aria-has-attr-matches",tags:["cat.aria","wcag2a","wcag412"],all:[],any:[{options:[],id:"aria-valid-attr"}],none:[]},{id:"audio-caption",selector:"audio",enabled:!1,excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag121","section508","section508.22.a"],actIds:["c3232f","e7aa44"],all:[],any:[],none:["caption"]},{id:"autocomplete-valid",matches:"autocomplete-matches",tags:["cat.forms","wcag21aa","wcag135"],actIds:["73f2c2"],all:["autocomplete-valid"],any:[],none:[]},{id:"avoid-inline-spacing",selector:"[style]",tags:["cat.structure","wcag21aa","wcag1412"],all:[{options:{cssProperties:["line-height","letter-spacing","word-spacing"]},id:"avoid-inline-spacing"}],any:[],none:[]},{id:"blink",selector:"blink",excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag222","section508","section508.22.j"],all:[],any:[],none:["is-on-screen"]},{id:"button-name",selector:"button",matches:"no-explicit-name-required-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","ACT"],actIds:["97a4e1","m6b1q3"],all:[],any:["button-has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"bypass",selector:"html",pageLevel:!0,matches:"bypass-matches",reviewOnFail:!0,tags:["cat.keyboard","wcag2a","wcag241","section508","section508.22.o"],all:[],any:["internal-link-present",{options:{selector:":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"},id:"header-present"},{options:{selector:"main, [role=main]"},id:"landmark"}],none:[]},{id:"color-contrast",matches:"color-contrast-matches",excludeHidden:!1,tags:["cat.color","wcag2aa","wcag143"],all:[],any:[{options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:4.5},large:{expected:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.1},id:"color-contrast"}],none:[]},{id:"css-orientation-lock",selector:"html",tags:["cat.structure","wcag134","wcag21aa","experimental"],actIds:["b33eff"],all:[{options:{degreeThreshold:2},id:"css-orientation-lock"}],any:[],none:[],preload:!0},{id:"definition-list",selector:"dl",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131"],all:[],any:[],none:["structured-dlitems","only-dlitems"]},{id:"dlitem",selector:"dd, dt",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131"],all:[],any:["dlitem"],none:[]},{id:"document-title",selector:"html",matches:"is-initiator-matches",tags:["cat.text-alternatives","wcag2a","wcag242","ACT"],actIds:["2779a5"],all:[],any:["doc-has-title"],none:[]},{id:"duplicate-id-active",selector:"[id]",matches:"duplicate-id-active-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag411"],all:[],any:["duplicate-id-active"],none:[]},{id:"duplicate-id-aria",selector:"[id]",matches:"duplicate-id-aria-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag411"],actIds:["3ea0c8"],all:[],any:["duplicate-id-aria"],none:[]},{id:"duplicate-id",selector:"[id]",matches:"duplicate-id-misc-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag411"],all:[],any:["duplicate-id"],none:[]},{id:"empty-heading",selector:'h1, h2, h3, h4, h5, h6, [role="heading"]',matches:"heading-matches",tags:["cat.name-role-value","best-practice"],impact:"minor",all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"empty-table-header",selector:'th, [role="rowheader"], [role="columnheader"]',tags:["wcag131","cat.aria"],reviewOnFail:!0,all:[],any:["has-visible-text"],none:[]},{id:"focus-order-semantics",selector:"div, h1, h2, h3, h4, h5, h6, [role=heading], p, span",matches:"inserted-into-focus-order-matches",tags:["cat.keyboard","best-practice","experimental"],all:[],any:[{options:[],id:"has-widget-role"},{options:{roles:["tooltip"]},id:"valid-scrollable-semantics"}],none:[]},{id:"form-field-multiple-labels",selector:"input, select, textarea",matches:"label-matches",tags:["cat.forms","wcag2a","wcag332"],all:[],any:[],none:["multiple-label"]},{id:"frame-focusable-content",selector:"html",matches:"frame-focusable-content-matches",tags:["cat.keyboard","wcag2a","wcag211"],all:[],any:["frame-focusable-content"],none:[]},{id:"frame-tested",selector:"html, frame, iframe",tags:["cat.structure","review-item","best-practice"],all:[{options:{isViolation:!1},id:"frame-tested"}],any:[],none:[]},{id:"frame-title-unique",selector:"frame[title], iframe[title]",matches:"frame-title-has-text-matches",tags:["cat.text-alternatives","best-practice"],all:[],any:[],none:["unique-frame-title"]},{id:"frame-title",selector:"frame, iframe",tags:["cat.text-alternatives","wcag2a","wcag241","wcag412","section508","section508.22.i"],all:[],any:[{options:{attribute:"title"},id:"non-empty-title"},"aria-label","aria-labelledby","presentational-role"],none:[]},{id:"heading-order",selector:"h1, h2, h3, h4, h5, h6, [role=heading]",matches:"heading-matches",tags:["cat.semantics","best-practice"],all:[],any:["heading-order"],none:[]},{id:"hidden-content",selector:"*",excludeHidden:!1,tags:["cat.structure","experimental","review-item","best-practice"],all:[],any:["hidden-content"],none:[]},{id:"html-has-lang",selector:"html",matches:"is-initiator-matches",tags:["cat.language","wcag2a","wcag311","ACT"],actIds:["b5c3f8"],all:[],any:[{options:{attributes:["lang","xml:lang"]},id:"has-lang"}],none:[]},{id:"html-lang-valid",selector:"html[lang], html[xml\\:lang]",tags:["cat.language","wcag2a","wcag311","ACT"],actIds:["bf051a"],all:[],any:[],none:[{options:{attributes:["lang","xml:lang"]},id:"valid-lang"}]},{id:"html-xml-lang-mismatch",selector:"html[lang][xml\\:lang]",matches:"xml-lang-mismatch-matches",tags:["cat.language","wcag2a","wcag311","ACT"],actIds:["5b7ae0"],all:["xml-lang-mismatch"],any:[],none:[]},{id:"identical-links-same-purpose",selector:'a[href], area[href], [role="link"]',excludeHidden:!1,matches:"identical-links-same-purpose-matches",tags:["cat.semantics","wcag2aaa","wcag249"],actIds:["b20e66","fd3a94"],all:["identical-links-same-purpose"],any:[],none:[]},{id:"image-alt",selector:"img",matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","ACT"],actIds:["23a2a8"],all:[],any:["has-alt","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:["alt-space-value"]},{id:"image-redundant-alt",selector:"img",tags:["cat.text-alternatives","best-practice"],all:[],any:[],none:[{options:{parentSelector:"button, [role=button], a[href], p, li, td, th"},id:"duplicate-img-label"}]},{id:"input-button-name",selector:'input[type="button"], input[type="submit"], input[type="reset"]',matches:"no-explicit-name-required-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a"],all:[],any:["non-empty-if-present",{options:{attribute:"value"},id:"non-empty-value"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"input-image-alt",selector:'input[type="image"]',matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","ACT"],actIds:["59796f"],all:[],any:[{options:{attribute:"alt"},id:"non-empty-alt"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"label-content-name-mismatch",matches:"label-content-name-mismatch-matches",tags:["cat.semantics","wcag21a","wcag253","experimental"],actIds:["2ee8b8"],all:[],any:[{options:{pixelThreshold:.1,occuranceThreshold:3},id:"label-content-name-mismatch"}],none:[]},{id:"label-title-only",selector:"input, select, textarea",matches:"label-matches",tags:["cat.forms","best-practice"],all:[],any:[],none:["title-only"]},{id:"label",selector:"input, textarea",matches:"label-matches",tags:["cat.forms","wcag2a","wcag412","wcag131","section508","section508.22.n","ACT"],actIds:["e086e5","307n5z"],all:[],any:["implicit-label","explicit-label","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},{options:{attribute:"placeholder"},id:"non-empty-placeholder"},"presentational-role"],none:["help-same-as-label","hidden-explicit-label"]},{id:"landmark-banner-is-top-level",selector:"header:not([role]), [role=banner]",matches:"landmark-has-body-context-matches",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-complementary-is-top-level",selector:"aside:not([role]), [role=complementary]",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-contentinfo-is-top-level",selector:"footer:not([role]), [role=contentinfo]",matches:"landmark-has-body-context-matches",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-main-is-top-level",selector:"main:not([role]), [role=main]",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-no-duplicate-banner",selector:"header:not([role]), [role=banner]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"header:not([role]), [role=banner]",nativeScopeFilter:"article, aside, main, nav, section"},id:"page-no-duplicate-banner"}],none:[]},{id:"landmark-no-duplicate-contentinfo",selector:"footer:not([role]), [role=contentinfo]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"footer:not([role]), [role=contentinfo]",nativeScopeFilter:"article, aside, main, nav, section"},id:"page-no-duplicate-contentinfo"}],none:[]},{id:"landmark-no-duplicate-main",selector:"main:not([role]), [role=main]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"main:not([role]), [role='main']"},id:"page-no-duplicate-main"}],none:[]},{id:"landmark-one-main",selector:"html",tags:["cat.semantics","best-practice"],all:[{options:{selector:"main:not([role]), [role='main']"},id:"page-has-main"}],any:[],none:[]},{id:"landmark-unique",selector:"[role=banner], [role=complementary], [role=contentinfo], [role=main], [role=navigation], [role=region], [role=search], [role=form], form, footer, header, aside, main, nav, section",tags:["cat.semantics","best-practice"],matches:"landmark-unique-matches",all:[],any:["landmark-is-unique"],none:[]},{id:"link-in-text-block",selector:"a[href], [role=link]",matches:"link-in-text-block-matches",excludeHidden:!1,tags:["cat.color","experimental","wcag2a","wcag141"],all:["link-in-text-block"],any:[],none:[]},{id:"link-name",selector:"a[href]",tags:["cat.name-role-value","wcag2a","wcag412","wcag244","section508","section508.22.a","ACT"],actIds:["c487ae"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["focusable-no-name"]},{id:"list",selector:"ul, ol",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131"],all:[],any:[],none:["only-listitems"]},{id:"listitem",selector:"li",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131"],all:[],any:["listitem"],none:[]},{id:"marquee",selector:"marquee",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag222"],all:[],any:[],none:["is-on-screen"]},{id:"meta-refresh",selector:'meta[http-equiv="refresh"]',excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag221","wcag224","wcag325"],all:[],any:["meta-refresh"],none:[]},{id:"meta-viewport-large",selector:'meta[name="viewport"]',matches:"is-initiator-matches",excludeHidden:!1,tags:["cat.sensory-and-visual-cues","best-practice"],all:[],any:[{options:{scaleMinimum:5,lowerBound:2},id:"meta-viewport-large"}],none:[]},{id:"meta-viewport",selector:'meta[name="viewport"]',matches:"is-initiator-matches",excludeHidden:!1,tags:["cat.sensory-and-visual-cues","best-practice","ACT"],actIds:["b4f0c3"],all:[],any:[{options:{scaleMinimum:2},id:"meta-viewport"}],none:[]},{id:"nested-interactive",matches:"nested-interactive-matches",tags:["cat.keyboard","wcag2a","wcag412"],actIds:["307n5z"],all:[],any:["no-focusable-content"],none:[]},{id:"no-autoplay-audio",excludeHidden:!1,selector:"audio[autoplay], video[autoplay]",matches:"no-autoplay-audio-matches",tags:["cat.time-and-media","wcag2a","wcag142","experimental"],actIds:["80f0bf"],preload:!0,all:[{options:{allowedDuration:3},id:"no-autoplay-audio"}],any:[],none:[]},{id:"object-alt",selector:"object",matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a"],actIds:["8fc3b6"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"p-as-heading",selector:"p",matches:"p-as-heading-matches",tags:["cat.semantics","wcag2a","wcag131","experimental"],all:[{options:{margins:[{weight:150,italic:!0},{weight:150,size:1.15},{italic:!0,size:1.15},{size:1.4}],passLength:1,failLength:.5},id:"p-as-heading"}],any:[],none:[]},{id:"page-has-heading-one",selector:"html",tags:["cat.semantics","best-practice"],all:[{options:{selector:"h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]"},id:"page-has-heading-one"}],any:[],none:[]},{id:"presentation-role-conflict",matches:"has-implicit-chromium-role-matches",selector:'[role="none"], [role="presentation"]',tags:["cat.aria","best-practice"],all:[],any:[],none:["is-element-focusable","has-global-aria-attribute"]},{id:"region",selector:"body *",tags:["cat.keyboard","best-practice"],all:[],any:[{options:{regionMatcher:"dialog, [role=dialog], [role=alertdialog], svg"},id:"region"}],none:[]},{id:"role-img-alt",selector:"[role='img']:not(img, area, input, object)",matches:"html-namespace-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","ACT"],actIds:["23a2a8"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"scope-attr-valid",selector:"td[scope], th[scope]",tags:["cat.tables","best-practice"],all:["html5-scope",{options:{values:["row","col","rowgroup","colgroup"]},id:"scope-value"}],any:[],none:[]},{id:"scrollable-region-focusable",matches:"scrollable-region-focusable-matches",tags:["cat.keyboard","wcag2a","wcag211"],actIds:["0ssw9k"],all:[],any:["focusable-content","focusable-element"],none:[]},{id:"select-name",selector:"select",tags:["cat.forms","wcag2a","wcag412","wcag131","section508","section508.22.n","ACT"],actIds:["e086e5"],all:[],any:["implicit-label","explicit-label","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:["help-same-as-label","hidden-explicit-label"]},{id:"server-side-image-map",selector:"img[ismap]",tags:["cat.text-alternatives","wcag2a","wcag211","section508","section508.22.f"],all:[],any:[],none:["exists"]},{id:"skip-link",selector:'a[href^="#"], a[href^="/#"]',matches:"skip-link-matches",tags:["cat.keyboard","best-practice"],all:[],any:["skip-link"],none:[]},{id:"svg-img-alt",selector:'[role="img"], [role="graphics-symbol"], svg[role="graphics-document"]',matches:"svg-namespace-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","ACT"],actIds:["7d6734"],all:[],any:["svg-non-empty-title","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"tabindex",selector:"[tabindex]",tags:["cat.keyboard","best-practice"],all:[],any:["tabindex"],none:[]},{id:"table-duplicate-name",selector:"table",tags:["cat.tables","best-practice"],all:[],any:[],none:["same-caption-summary"]},{id:"table-fake-caption",selector:"table",matches:"data-table-matches",tags:["cat.tables","experimental","wcag2a","wcag131","section508","section508.22.g"],all:["caption-faked"],any:[],none:[]},{id:"td-has-header",selector:"table",matches:"data-table-large-matches",tags:["cat.tables","experimental","wcag2a","wcag131","section508","section508.22.g"],all:["td-has-header"],any:[],none:[]},{id:"td-headers-attr",selector:"table",tags:["cat.tables","wcag2a","wcag131","section508","section508.22.g"],actIds:["a25f45"],all:["td-headers-attr"],any:[],none:[]},{id:"th-has-data-cells",selector:"table",matches:"data-table-matches",tags:["cat.tables","wcag2a","wcag131","section508","section508.22.g"],actIds:["d0f69e"],all:["th-has-data-cells"],any:[],none:[]},{id:"valid-lang",selector:"[lang], [xml\\:lang]",matches:"not-html-matches",tags:["cat.language","wcag2aa","wcag312"],all:[],any:[],none:[{options:{attributes:["lang","xml:lang"]},id:"valid-lang"}]},{id:"video-caption",selector:"video",excludeHidden:!1,tags:["cat.text-alternatives","wcag2a","wcag122","section508","section508.22.a"],actIds:["eac66b"],all:[],any:[],none:["caption"]}],checks:[{id:"abstractrole",evaluate:"abstractrole-evaluate"},{id:"aria-allowed-attr",evaluate:"aria-allowed-attr-evaluate",options:{validTreeRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]}},{id:"aria-allowed-role",evaluate:"aria-allowed-role-evaluate",options:{allowImplicit:!0,ignoredTags:[]}},{id:"aria-errormessage",evaluate:"aria-errormessage-evaluate"},{id:"aria-hidden-body",evaluate:"aria-hidden-body-evaluate"},{id:"aria-level",evaluate:"aria-level-evaluate"},{id:"aria-prohibited-attr",evaluate:"aria-prohibited-attr-evaluate",options:{elementsAllowedAriaLabel:["applet","input"]}},{id:"aria-required-attr",evaluate:"aria-required-attr-evaluate"},{id:"aria-required-children",evaluate:"aria-required-children-evaluate",options:{reviewEmpty:["doc-bibliography","doc-endnotes","grid","list","listbox","table","tablist","tree","treegrid","rowgroup"]}},{id:"aria-required-parent",evaluate:"aria-required-parent-evaluate",options:{ownGroupRoles:["listitem","treeitem"]}},{id:"aria-roledescription",evaluate:"aria-roledescription-evaluate",options:{supportedRoles:["button","img","checkbox","radio","combobox","menuitemcheckbox","menuitemradio"]}},{id:"aria-unsupported-attr",evaluate:"aria-unsupported-attr-evaluate"},{id:"aria-valid-attr-value",evaluate:"aria-valid-attr-value-evaluate",options:[]},{id:"aria-valid-attr",evaluate:"aria-valid-attr-evaluate",options:[]},{id:"fallbackrole",evaluate:"fallbackrole-evaluate"},{id:"has-global-aria-attribute",evaluate:"has-global-aria-attribute-evaluate"},{id:"has-widget-role",evaluate:"has-widget-role-evaluate",options:[]},{id:"invalidrole",evaluate:"invalidrole-evaluate"},{id:"is-element-focusable",evaluate:"is-element-focusable-evaluate"},{id:"no-implicit-explicit-label",evaluate:"no-implicit-explicit-label-evaluate"},{id:"unsupportedrole",evaluate:"unsupportedrole-evaluate"},{id:"valid-scrollable-semantics",evaluate:"valid-scrollable-semantics-evaluate",options:{roles:["tooltip"]}},{id:"color-contrast",evaluate:"color-contrast-evaluate",options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:4.5},large:{expected:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.1}},{id:"link-in-text-block",evaluate:"link-in-text-block-evaluate"},{id:"autocomplete-appropriate",evaluate:"autocomplete-appropriate-evaluate",deprecated:!0},{id:"autocomplete-valid",evaluate:"autocomplete-valid-evaluate"},{id:"accesskeys",evaluate:"accesskeys-evaluate",after:"accesskeys-after"},{id:"focusable-content",evaluate:"focusable-content-evaluate"},{id:"focusable-disabled",evaluate:"focusable-disabled-evaluate"},{id:"focusable-element",evaluate:"focusable-element-evaluate"},{id:"focusable-modal-open",evaluate:"focusable-modal-open-evaluate"},{id:"focusable-no-name",evaluate:"focusable-no-name-evaluate"},{id:"focusable-not-tabbable",evaluate:"focusable-not-tabbable-evaluate"},{id:"frame-focusable-content",evaluate:"no-focusable-content-evaluate"},{id:"landmark-is-top-level",evaluate:"landmark-is-top-level-evaluate"},{id:"no-focusable-content",evaluate:"no-focusable-content-evaluate"},{id:"page-has-heading-one",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:"h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]"}},{id:"page-has-main",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:"main:not([role]), [role='main']"}},{id:"page-no-duplicate-banner",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"header:not([role]), [role=banner]",nativeScopeFilter:"article, aside, main, nav, section"}},{id:"page-no-duplicate-contentinfo",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"footer:not([role]), [role=contentinfo]",nativeScopeFilter:"article, aside, main, nav, section"}},{id:"page-no-duplicate-main",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"main:not([role]), [role='main']"}},{id:"tabindex",evaluate:"tabindex-evaluate"},{id:"alt-space-value",evaluate:"alt-space-value-evaluate"},{id:"duplicate-img-label",evaluate:"duplicate-img-label-evaluate",options:{parentSelector:"button, [role=button], a[href], p, li, td, th"}},{id:"explicit-label",evaluate:"explicit-evaluate"},{id:"help-same-as-label",evaluate:"help-same-as-label-evaluate",enabled:!1},{id:"hidden-explicit-label",evaluate:"hidden-explicit-label-evaluate"},{id:"implicit-label",evaluate:"implicit-evaluate"},{id:"label-content-name-mismatch",evaluate:"label-content-name-mismatch-evaluate",options:{pixelThreshold:.1,occuranceThreshold:3}},{id:"multiple-label",evaluate:"multiple-label-evaluate"},{id:"title-only",evaluate:"title-only-evaluate"},{id:"landmark-is-unique",evaluate:"landmark-is-unique-evaluate",after:"landmark-is-unique-after"},{id:"has-lang",evaluate:"has-lang-evaluate",options:{attributes:["lang","xml:lang"]}},{id:"valid-lang",evaluate:"valid-lang-evaluate",options:{attributes:["lang","xml:lang"]}},{id:"xml-lang-mismatch",evaluate:"xml-lang-mismatch-evaluate"},{id:"dlitem",evaluate:"dlitem-evaluate"},{id:"listitem",evaluate:"listitem-evaluate"},{id:"only-dlitems",evaluate:"only-dlitems-evaluate"},{id:"only-listitems",evaluate:"only-listitems-evaluate"},{id:"structured-dlitems",evaluate:"structured-dlitems-evaluate"},{id:"caption",evaluate:"caption-evaluate"},{id:"frame-tested",evaluate:"frame-tested-evaluate",after:"frame-tested-after",options:{isViolation:!1}},{id:"no-autoplay-audio",evaluate:"no-autoplay-audio-evaluate",options:{allowedDuration:3}},{id:"css-orientation-lock",evaluate:"css-orientation-lock-evaluate",options:{degreeThreshold:2}},{id:"meta-viewport-large",evaluate:"meta-viewport-scale-evaluate",options:{scaleMinimum:5,lowerBound:2}},{id:"meta-viewport",evaluate:"meta-viewport-scale-evaluate",options:{scaleMinimum:2}},{id:"header-present",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"}},{id:"heading-order",evaluate:"heading-order-evaluate",after:"heading-order-after"},{id:"identical-links-same-purpose",evaluate:"identical-links-same-purpose-evaluate",after:"identical-links-same-purpose-after"},{id:"internal-link-present",evaluate:"internal-link-present-evaluate"},{id:"landmark",evaluate:"has-descendant-evaluate",options:{selector:"main, [role=main]"}},{id:"meta-refresh",evaluate:"meta-refresh-evaluate"},{id:"p-as-heading",evaluate:"p-as-heading-evaluate",options:{margins:[{weight:150,italic:!0},{weight:150,size:1.15},{italic:!0,size:1.15},{size:1.4}],passLength:1,failLength:.5}},{id:"region",evaluate:"region-evaluate",after:"region-after",options:{regionMatcher:"dialog, [role=dialog], [role=alertdialog], svg"}},{id:"skip-link",evaluate:"skip-link-evaluate"},{id:"unique-frame-title",evaluate:"unique-frame-title-evaluate",after:"unique-frame-title-after"},{id:"duplicate-id-active",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"duplicate-id-aria",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"duplicate-id",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"aria-label",evaluate:"aria-label-evaluate"},{id:"aria-labelledby",evaluate:"aria-labelledby-evaluate"},{id:"avoid-inline-spacing",evaluate:"avoid-inline-spacing-evaluate",options:{cssProperties:["line-height","letter-spacing","word-spacing"]}},{id:"button-has-visible-text",evaluate:"has-text-content-evaluate"},{id:"doc-has-title",evaluate:"doc-has-title-evaluate"},{id:"exists",evaluate:"exists-evaluate"},{id:"has-alt",evaluate:"has-alt-evaluate"},{id:"has-visible-text",evaluate:"has-text-content-evaluate"},{id:"is-on-screen",evaluate:"is-on-screen-evaluate"},{id:"non-empty-alt",evaluate:"attr-non-space-content-evaluate",options:{attribute:"alt"}},{id:"non-empty-if-present",evaluate:"non-empty-if-present-evaluate"},{id:"non-empty-placeholder",evaluate:"attr-non-space-content-evaluate",options:{attribute:"placeholder"}},{id:"non-empty-title",evaluate:"attr-non-space-content-evaluate",options:{attribute:"title"}},{id:"non-empty-value",evaluate:"attr-non-space-content-evaluate",options:{attribute:"value"}},{id:"presentational-role",evaluate:"presentational-role-evaluate"},{id:"role-none",evaluate:"matches-definition-evaluate",deprecated:!0,options:{matcher:{attributes:{role:"none"}}}},{id:"role-presentation",evaluate:"matches-definition-evaluate",deprecated:!0,options:{matcher:{attributes:{role:"presentation"}}}},{id:"svg-non-empty-title",evaluate:"svg-non-empty-title-evaluate"},{id:"caption-faked",evaluate:"caption-faked-evaluate"},{id:"html5-scope",evaluate:"html5-scope-evaluate"},{id:"same-caption-summary",evaluate:"same-caption-summary-evaluate"},{id:"scope-value",evaluate:"scope-value-evaluate",options:{values:["row","col","rowgroup","colgroup"]}},{id:"td-has-header",evaluate:"td-has-header-evaluate"},{id:"td-headers-attr",evaluate:"td-headers-attr-evaluate"},{id:"th-has-data-cells",evaluate:"th-has-data-cells-evaluate"},{id:"hidden-content",evaluate:"hidden-content-evaluate"}]})}("object"==typeof window?window:this)},831:e=>{var t=Array.isArray
e.exports=function(){if(!arguments.length)return[]
var e=arguments[0]
return t(e)?e:[e]}},5:e=>{e.exports=function(e){var t=e?e.length:0
return t?e[t-1]:void 0}},150:e=>{var t="__lodash_hash_undefined__",n=9007199254740991,r=/^\[object .+?Constructor\]$/,a=/^(?:0|[1-9]\d*)$/,o="object"==typeof global&&global&&global.Object===Object&&global,i="object"==typeof self&&self&&self.Object===Object&&self,s=o||i||Function("return this")()
function l(e,t,n){switch(n.length){case 0:return e.call(t)
case 1:return e.call(t,n[0])
case 2:return e.call(t,n[0],n[1])
case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function u(e,t){return!(!e||!e.length)&&function(e,t,n){if(t!=t)return function(e,t,n,r){for(var a=e.length,o=-1;++o<a;)if(t(e[o],o,e))return o
return-1}(e,d)
for(var r=-1,a=e.length;++r<a;)if(e[r]===t)return r
return-1}(e,t)>-1}function c(e,t){for(var n=-1,r=t.length,a=e.length;++n<r;)e[a+n]=t[n]
return e}function d(e){return e!=e}function p(e,t){return e.has(t)}function f(e,t){return function(n){return e(t(n))}}var h,m=Array.prototype,g=Function.prototype,v=Object.prototype,b=s["__core-js_shared__"],y=(h=/[^.]+$/.exec(b&&b.keys&&b.keys.IE_PROTO||""))?"Symbol(src)_1."+h:"",w=g.toString,D=v.hasOwnProperty,x=v.toString,E=RegExp("^"+w.call(D).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),A=s.Symbol,C=f(Object.getPrototypeOf,Object),k=v.propertyIsEnumerable,F=m.splice,T=A?A.isConcatSpreadable:void 0,N=Object.getOwnPropertySymbols,R=Math.max,_=B(s,"Map"),O=B(Object,"create")
function S(e){var t=-1,n=e?e.length:0
for(this.clear();++t<n;){var r=e[t]
this.set(r[0],r[1])}}function I(e){var t=-1,n=e?e.length:0
for(this.clear();++t<n;){var r=e[t]
this.set(r[0],r[1])}}function P(e){var t=-1,n=e?e.length:0
for(this.clear();++t<n;){var r=e[t]
this.set(r[0],r[1])}}function j(e){var t=-1,n=e?e.length:0
for(this.__data__=new P;++t<n;)this.add(e[t])}function M(e,t){for(var n,r,a=e.length;a--;)if((n=e[a][0])===(r=t)||n!=n&&r!=r)return a
return-1}function q(e,t,n,r,a){var o=-1,i=e.length
for(n||(n=V),a||(a=[]);++o<i;){var s=e[o]
t>0&&n(s)?t>1?q(s,t-1,n,r,a):c(a,s):r||(a[a.length]=s)}return a}function L(e,t){var n,r,a=e.__data__
return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?a["string"==typeof t?"string":"hash"]:a.map}function B(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t)
return function(e){return!(!K(e)||y&&y in e)&&(Q(e)||function(e){var t=!1
if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?E:r).test(function(e){if(null!=e){try{return w.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))}(n)?n:void 0}S.prototype.clear=function(){this.__data__=O?O(null):{}},S.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},S.prototype.get=function(e){var n=this.__data__
if(O){var r=n[e]
return r===t?void 0:r}return D.call(n,e)?n[e]:void 0},S.prototype.has=function(e){var t=this.__data__
return O?void 0!==t[e]:D.call(t,e)},S.prototype.set=function(e,n){return this.__data__[e]=O&&void 0===n?t:n,this},I.prototype.clear=function(){this.__data__=[]},I.prototype.delete=function(e){var t=this.__data__,n=M(t,e)
return!(n<0||(n==t.length-1?t.pop():F.call(t,n,1),0))},I.prototype.get=function(e){var t=this.__data__,n=M(t,e)
return n<0?void 0:t[n][1]},I.prototype.has=function(e){return M(this.__data__,e)>-1},I.prototype.set=function(e,t){var n=this.__data__,r=M(n,e)
return r<0?n.push([e,t]):n[r][1]=t,this},P.prototype.clear=function(){this.__data__={hash:new S,map:new(_||I),string:new S}},P.prototype.delete=function(e){return L(this,e).delete(e)},P.prototype.get=function(e){return L(this,e).get(e)},P.prototype.has=function(e){return L(this,e).has(e)},P.prototype.set=function(e,t){return L(this,e).set(e,t),this},j.prototype.add=j.prototype.push=function(e){return this.__data__.set(e,t),this},j.prototype.has=function(e){return this.__data__.has(e)}
var U=N?f(N,Object):ne,H=N?function(e){for(var t=[];e;)c(t,U(e)),e=C(e)
return t}:ne
function V(e){return G(e)||W(e)||!!(T&&e&&e[T])}function z(e,t){return!!(t=null==t?n:t)&&("number"==typeof e||a.test(e))&&e>-1&&e%1==0&&e<t}function $(e){if("string"==typeof e||function(e){return"symbol"==typeof e||J(e)&&"[object Symbol]"==x.call(e)}(e))return e
var t=e+""
return"0"==t&&1/e==-1/0?"-0":t}function W(e){return function(e){return J(e)&&Y(e)}(e)&&D.call(e,"callee")&&(!k.call(e,"callee")||"[object Arguments]"==x.call(e))}var G=Array.isArray
function Y(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}(e.length)&&!Q(e)}function Q(e){var t=K(e)?x.call(e):""
return"[object Function]"==t||"[object GeneratorFunction]"==t}function K(e){var t=typeof e
return!!e&&("object"==t||"function"==t)}function J(e){return!!e&&"object"==typeof e}function X(e){return Y(e)?function(e,t){var n=G(e)||W(e)?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n)
return r}(e.length,String):[],r=n.length,a=!!r
for(var o in e)a&&("length"==o||z(o,r))||n.push(o)
return n}(e):function(e){if(!K(e))return function(e){var t=[]
if(null!=e)for(var n in Object(e))t.push(n)
return t}(e)
var t,n,r=(n=(t=e)&&t.constructor,t===("function"==typeof n&&n.prototype||v)),a=[]
for(var o in e)("constructor"!=o||!r&&D.call(e,o))&&a.push(o)
return a}(e)}var Z,ee,te=(Z=function(e,t){return null==e?{}:(t=function(e,t){for(var n=-1,r=e?e.length:0,a=Array(r);++n<r;)a[n]=t(e[n],n,e)
return a}(q(t,1),$),function(e,t){return function(e,t,n){for(var r=-1,a=t.length,o={};++r<a;){var i=t[r],s=e[i]
n(0,i)&&(o[i]=s)}return o}(e=Object(e),t,(function(t,n){return n in e}))}(e,function(e,t,n,r){var a=-1,o=u,i=!0,s=e.length,l=[],c=t.length
if(!s)return l
t.length>=200&&(o=p,i=!1,t=new j(t))
e:for(;++a<s;){var d=e[a],f=d
if(d=0!==d?d:0,i&&f==f){for(var h=c;h--;)if(t[h]===f)continue e
l.push(d)}else o(t,f,undefined)||l.push(d)}return l}(function(e){return function(e,t,n){var r=t(e)
return G(e)?r:c(r,n(e))}(e,X,H)}(e),t)))},ee=R(void 0===ee?Z.length-1:ee,0),function(){for(var e=arguments,t=-1,n=R(e.length-ee,0),r=Array(n);++t<n;)r[t]=e[ee+t]
t=-1
for(var a=Array(ee+1);++t<ee;)a[t]=e[t]
return a[ee]=r,l(Z,this,a)})
function ne(){return[]}e.exports=te},916:(e,t,n)=>{var r
e=n.nmd(e),function(){"use strict"
var a,o="function"==typeof o?o:function(){var e=Object.create(null),t=Object.prototype.hasOwnProperty
this.get=function(t){return e[t]},this.set=function(n,r){return t.call(e,n)||this.size++,e[n]=r,this},this.delete=function(n){t.call(e,n)&&(delete e[n],this.size--)},this.forEach=function(t){for(var n in e)t(e[n],n)},this.clear=function(){e=Object.create(null),this.size=0},this.size=0}
function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o=[],i=!0,s=!1
try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){s=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return o}}(e,t)||p(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){if(e){if("string"==typeof e)return f(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}!function(e){if("object"===("undefined"==typeof globalThis?"undefined":i(globalThis)))a=globalThis
else{var t=function(){a=this||self,delete e.prototype._T_}
this?t():(e.defineProperty(e.prototype,"_T_",{configurable:!0,get:t}),_T_)}}(Object)
var h=a,m=h.window,g=h.self,v=h.console,b=h.setTimeout,y=h.clearTimeout,w=m&&m.document,D=m&&m.navigator,x=function(){var e="qunit-test-string"
try{return h.sessionStorage.setItem(e,e),h.sessionStorage.removeItem(e),h.sessionStorage}catch(e){return}}(),E={warn:v?Function.prototype.bind.call(v.warn||v.log,v):function(){}},A=Object.prototype.toString,C=Object.prototype.hasOwnProperty,k=Date.now||function(){return(new Date).getTime()},F=m&&void 0!==m.performance&&"function"==typeof m.performance.mark&&"function"==typeof m.performance.measure?m.performance:void 0,T={now:F?F.now.bind(F):k,measure:F?function(e,t,n){try{F.measure(e,t,n)}catch(e){E.warn("performance.measure could not be executed because of ",e.message)}}:function(){},mark:F?F.mark.bind(F):function(){}}
function N(e,t){for(var n=e.slice(),r=0;r<n.length;r++)for(var a=0;a<t.length;a++)if(n[r]===t[a]){n.splice(r,1),r--
break}return n}function R(e,t){return-1!==t.indexOf(e)}function _(e){var t=I("array",e)?[]:{}
for(var n in e)if(C.call(e,n)){var r=e[n]
t[n]=r===Object(r)?_(r):r}return t}function O(e,t,n){for(var r in t)C.call(t,r)&&(void 0===t[r]?delete e[r]:n&&void 0!==e[r]||(e[r]=t[r]))
return e}function S(e){if(void 0===e)return"undefined"
if(null===e)return"null"
var t=A.call(e).match(/^\[object\s(.*)\]$/),n=t&&t[1]
switch(n){case"Number":return isNaN(e)?"nan":"number"
case"String":case"Boolean":case"Array":case"Set":case"Map":case"Date":case"RegExp":case"Function":case"Symbol":return n.toLowerCase()
default:return i(e)}}function I(e,t){return S(t)===e}function P(e,t){for(var n=e+""+t,r=0,a=0;a<n.length;a++)r=(r<<5)-r+n.charCodeAt(a),r|=0
var o=(4294967296+r).toString(16)
return o.length<8&&(o="0000000"+o),o.slice(-8)}function j(e){var t=String(e)
return"[object"===t.slice(0,7)?(e.name||"Error")+(e.message?": ".concat(e.message):""):t}var M=function(){var e=[],t=Object.getPrototypeOf||function(e){return e.__proto__}
function n(e,t){return"object"===i(e)&&(e=e.valueOf()),"object"===i(t)&&(t=t.valueOf()),e===t}function r(e){return"flags"in e?e.flags:e.toString().match(/[gimuy]*$/)[0]}function a(t,n){return t===n||(-1===["object","array","map","set"].indexOf(S(t))?s(t,n):(e.every((function(e){return e.a!==t||e.b!==n}))&&e.push({a:t,b:n}),!0))}var o={string:n,boolean:n,number:n,null:n,undefined:n,symbol:n,date:n,nan:function(){return!0},regexp:function(e,t){return e.source===t.source&&r(e)===r(t)},function:function(){return!1},array:function(e,t){var n=e.length
if(n!==t.length)return!1
for(var r=0;r<n;r++)if(!a(e[r],t[r]))return!1
return!0},set:function(t,n){if(t.size!==n.size)return!1
var r=!0
return t.forEach((function(t){if(r){var a=!1
n.forEach((function(n){if(!a){var r=e
l(n,t)&&(a=!0),e=r}})),a||(r=!1)}})),r},map:function(t,n){if(t.size!==n.size)return!1
var r=!0
return t.forEach((function(t,a){if(r){var o=!1
n.forEach((function(n,r){if(!o){var i=e
l([n,r],[t,a])&&(o=!0),e=i}})),o||(r=!1)}})),r},object:function(e,n){if(!1===function(e,n){var r=t(e),a=t(n)
return e.constructor===n.constructor||(r&&null===r.constructor&&(r=null),a&&null===a.constructor&&(a=null),null===r&&a===Object.prototype||null===a&&r===Object.prototype)}(e,n))return!1
var r=[],o=[]
for(var i in e)if(r.push(i),(e.constructor===Object||void 0===e.constructor||"function"!=typeof e[i]||"function"!=typeof n[i]||e[i].toString()!==n[i].toString())&&!a(e[i],n[i]))return!1
for(var l in n)o.push(l)
return s(r.sort(),o.sort())}}
function s(e,t){var n=S(e)
return S(t)===n&&o[n](e,t)}function l(t,n){if(arguments.length<2)return!0
e=[{a:t,b:n}]
for(var r=0;r<e.length;r++){var a=e[r]
if(a.a!==a.b&&!s(a.a,a.b))return!1}return 2===arguments.length||l.apply(this,[].slice.call(arguments,1))}return function(){var t=l.apply(void 0,arguments)
return e.length=0,t}}(),q={queue:[],stats:{all:0,bad:0,testCount:0},blocking:!0,failOnZeroTests:!0,reorder:!0,altertitle:!0,collapse:!0,scrolltop:!0,maxDepth:5,requireExpects:!1,urlConfig:[],modules:[],currentModule:{name:"",tests:[],childModules:[],testsRun:0,testsIgnored:0,hooks:{before:[],beforeEach:[],afterEach:[],after:[]}},callbacks:{},storage:x},L=m&&m.QUnit&&m.QUnit.config
m&&m.QUnit&&!m.QUnit.version&&O(q,L),q.modules.push(q.currentModule)
var B=function(){function e(e){return'"'+e.toString().replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}function t(e){return e+""}function n(e,t,n){var r=o.separator(),a=o.indent(1)
return t.join&&(t=t.join(","+r+a)),t?[e,a+t,o.indent()+n].join(r):e+n}function r(e,t){if(o.maxDepth&&o.depth>o.maxDepth)return"[object Array]"
this.up()
for(var r=e.length,a=new Array(r);r--;)a[r]=this.parse(e[r],void 0,t)
return this.down(),n("[",a,"]")}var a=/^function (\w+)/,o={parse:function(e,t,n){var r=(n=n||[]).indexOf(e)
if(-1!==r)return"recursion(".concat(r-n.length,")")
t=t||this.typeOf(e)
var a=this.parsers[t],o=i(a)
if("function"===o){n.push(e)
var s=a.call(this,e,n)
return n.pop(),s}return"string"===o?a:"[ERROR: Missing QUnit.dump formatter for type "+t+"]"},typeOf:function(e){return null===e?"null":void 0===e?"undefined":I("regexp",e)?"regexp":I("date",e)?"date":I("function",e)?"function":void 0!==e.setInterval&&void 0!==e.document&&void 0===e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":function(e){return"[object Array]"===A.call(e)||"number"==typeof e.length&&void 0!==e.item&&(e.length?e.item(0)===e[0]:null===e.item(0)&&void 0===e[0])}(e)?"array":e.constructor===Error.prototype.constructor?"error":i(e)},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&#160;":" "},indent:function(e){if(!this.multiline)return""
var t=this.indentChar
return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&#160;")),new Array(this.depth+(e||0)).join(t)},up:function(e){this.depth+=e||1},down:function(e){this.depth-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:n,depth:1,maxDepth:q.maxDepth,parsers:{window:"[Window]",document:"[Document]",error:function(e){return'Error("'+e.message+'")'},unknown:"[Unknown]",null:"null",undefined:"undefined",function:function(e){var t="function",r="name"in e?e.name:(a.exec(e)||[])[1]
return r&&(t+=" "+r),n(t=[t+="(",o.parse(e,"functionArgs"),"){"].join(""),o.parse(e,"functionCode"),"}")},array:r,nodelist:r,arguments:r,object:function(e,t){var r=[]
if(o.maxDepth&&o.depth>o.maxDepth)return"[object Object]"
o.up()
var a=[]
for(var i in e)a.push(i)
var s=["message","name"]
for(var l in s){var u=s[l]
u in e&&!R(u,a)&&a.push(u)}a.sort()
for(var c=0;c<a.length;c++){var d=a[c],p=e[d]
r.push(o.parse(d,"key")+": "+o.parse(p,void 0,t))}return o.down(),n("{",r,"}")},node:function(e){var t=o.HTML?"&lt;":"<",n=o.HTML?"&gt;":">",r=e.nodeName.toLowerCase(),a=t+r,i=e.attributes
if(i)for(var s=0,l=i.length;s<l;s++){var u=i[s].nodeValue
u&&"inherit"!==u&&(a+=" "+i[s].nodeName+"="+o.parse(u,"attribute"))}return a+=n,3!==e.nodeType&&4!==e.nodeType||(a+=e.nodeValue),a+t+"/"+r+n},functionArgs:function(e){var t=e.length
if(!t)return""
for(var n=new Array(t);t--;)n[t]=String.fromCharCode(97+t)
return" "+n.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,boolean:t,symbol:function(e){return e.toString()}},HTML:!1,indentChar:"  ",multiline:!0}
return o}(),U=function(){function e(t,n){s(this,e),this.name=t,this.fullName=n?n.fullName.concat(t):[],this.globalFailureCount=0,this.tests=[],this.childSuites=[],n&&n.pushChildSuite(this)}return u(e,[{key:"start",value:function(e){if(e){this._startTime=T.now()
var t=this.fullName.length
T.mark("qunit_suite_".concat(t,"_start"))}return{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.start()})),childSuites:this.childSuites.map((function(e){return e.start()})),testCounts:{total:this.getTestCounts().total}}}},{key:"end",value:function(e){if(e){this._endTime=T.now()
var t=this.fullName.length,n=this.fullName.join(" – ")
T.mark("qunit_suite_".concat(t,"_end")),T.measure(0===t?"QUnit Test Run":"QUnit Test Suite: ".concat(n),"qunit_suite_".concat(t,"_start"),"qunit_suite_".concat(t,"_end"))}return{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.end()})),childSuites:this.childSuites.map((function(e){return e.end()})),testCounts:this.getTestCounts(),runtime:this.getRuntime(),status:this.getStatus()}}},{key:"pushChildSuite",value:function(e){this.childSuites.push(e)}},{key:"pushTest",value:function(e){this.tests.push(e)}},{key:"getRuntime",value:function(){return this._endTime-this._startTime}},{key:"getTestCounts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{passed:0,failed:0,skipped:0,todo:0,total:0}
return e.failed+=this.globalFailureCount,e.total+=this.globalFailureCount,e=this.tests.reduce((function(e,t){return t.valid&&(e[t.getStatus()]++,e.total++),e}),e),this.childSuites.reduce((function(e,t){return t.getTestCounts(e)}),e)}},{key:"getStatus",value:function(){var e=this.getTestCounts(),t=e.total,n=e.failed,r=e.skipped,a=e.todo
return n?"failed":r===t?"skipped":a===t?"todo":"passed"}}]),e}(),H=[]
function V(e,t,n){var r=H.length?H.slice(-1)[0]:null,a=null!==r?[r.name,e].join(" > "):e,o=r?r.suiteReport:ze,i=null!==r&&r.skip||n.skip,s=null!==r&&r.todo||n.todo,l={name:a,parentModule:r,tests:[],moduleId:P(a),testsRun:0,testsIgnored:0,childModules:[],suiteReport:new U(e,o),skip:i,todo:!i&&s,ignored:n.ignored||!1},u={}
return r&&(r.childModules.push(l),O(u,r.testEnvironment)),O(u,t),l.testEnvironment=u,q.modules.push(l),l}function z(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
"function"===S(t)&&(n=t,t=void 0)
var a=V(e,t,r),o=a.testEnvironment,i=a.hooks={}
c(i,o,"before"),c(i,o,"beforeEach"),c(i,o,"afterEach"),c(i,o,"after")
var s={before:d(a,"before"),beforeEach:d(a,"beforeEach"),afterEach:d(a,"afterEach"),after:d(a,"after")},l=q.currentModule
if(q.currentModule=a,"function"===S(n)){H.push(a)
try{var u=n.call(a.testEnvironment,s)
null!=u&&"function"===S(u.then)&&E.warn("Returning a promise from a module callback is not supported. Instead, use hooks for async behavior. This will become an error in QUnit 3.0.")}finally{H.pop(),q.currentModule=a.parentModule||l}}function c(e,t,n){var r=t[n]
e[n]="function"==typeof r?[r]:[],delete t[n]}function d(e,t){return function(n){q.currentModule!==e&&E.warn("The `"+t+"` hook was called inside the wrong module (`"+q.currentModule.name+"`). Instead, use hooks provided by the callback to the containing module (`"+e.name+"`). This will become an error in QUnit 3.0."),e.hooks[t].push(n)}}}var $=!1
function W(e,t,n){var r
z(e,t,n,{ignored:$&&(r=q.modules.filter((function(e){return!e.ignored})).map((function(e){return e.moduleId})),!H.some((function(e){return r.includes(e.moduleId)})))})}W.only=function(){$||(q.modules.length=0,q.queue.length=0,q.currentModule.ignored=!0),$=!0,z.apply(void 0,arguments)},W.skip=function(e,t,n){$||z(e,t,n,{skip:!0})},W.todo=function(e,t,n){$||z(e,t,n,{todo:!0})}
var G=Object.create(null),Y=["error","runStart","suiteStart","testStart","assertion","testEnd","suiteEnd","runEnd"]
function Q(e,t){if("string"!==S(e))throw new TypeError("eventName must be a string when emitting an event")
for(var n=G[e],r=n?d(n):[],a=0;a<r.length;a++)r[a](t)}var K="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},J={exports:{}}
!function(){var e=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if(void 0!==K)return K
throw new Error("unable to locate global object")}()
if("function"!=typeof e.Promise){var t=setTimeout
a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var n=new this.constructor(r)
return o(this,new c(e,t,n)),n},a.prototype.finally=function(e){var t=this.constructor
return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))},a.all=function(e){return new a((function(t,r){if(!n(e))return r(new TypeError("Promise.all accepts an array"))
var a=Array.prototype.slice.call(e)
if(0===a.length)return t([])
var o=a.length
function s(e,n){try{if(n&&("object"===i(n)||"function"==typeof n)){var l=n.then
if("function"==typeof l)return void l.call(n,(function(t){s(e,t)}),r)}a[e]=n,0==--o&&t(a)}catch(e){r(e)}}for(var l=0;l<a.length;l++)s(l,a[l])}))},a.allSettled=function(e){return new this((function(t,n){if(!e||void 0===e.length)return n(new TypeError(i(e)+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"))
var r=Array.prototype.slice.call(e)
if(0===r.length)return t([])
var a=r.length
function o(e,n){if(n&&("object"===i(n)||"function"==typeof n)){var s=n.then
if("function"==typeof s)return void s.call(n,(function(t){o(e,t)}),(function(n){r[e]={status:"rejected",reason:n},0==--a&&t(r)}))}r[e]={status:"fulfilled",value:n},0==--a&&t(r)}for(var s=0;s<r.length;s++)o(s,r[s])}))},a.resolve=function(e){return e&&"object"===i(e)&&e.constructor===a?e:new a((function(t){t(e)}))},a.reject=function(e){return new a((function(t,n){n(e)}))},a.race=function(e){return new a((function(t,r){if(!n(e))return r(new TypeError("Promise.race accepts an array"))
for(var o=0,i=e.length;o<i;o++)a.resolve(e[o]).then(t,r)}))},a._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){t(e,0)},a._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},J.exports=a}else J.exports=e.Promise
function n(e){return Boolean(e&&void 0!==e.length)}function r(){}function a(e){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function o(e,t){for(;3===e._state;)e=e._value
0!==e._state?(e._handled=!0,a._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected
if(null!==n){var r
try{r=n(e._value)}catch(e){return void l(t.promise,e)}s(t.promise,r)}else(1===e._state?s:l)(t.promise,e._value)}))):e._deferreds.push(t)}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"===i(t)||"function"==typeof t)){var n=t.then
if(t instanceof a)return e._state=3,e._value=t,void u(e)
if("function"==typeof n)return void d((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,u(e)}catch(t){l(e,t)}var r,o}function l(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&a._immediateFn((function(){e._handled||a._unhandledRejectionFn(e._value)}))
for(var t=0,n=e._deferreds.length;t<n;t++)o(e,e._deferreds[t])
e._deferreds=null}function c(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function d(e,t){var n=!1
try{e((function(e){n||(n=!0,s(t,e))}),(function(e){n||(n=!0,l(t,e))}))}catch(e){if(n)return
n=!0,l(t,e)}}}()
var X=J.exports
function Z(e,t){var n=q.callbacks[e]
if("log"!==e)return n.reduce((function(e,n){return e.then((function(){return X.resolve(n(t))}))}),X.resolve([]))
n.map((function(e){return e(t)}))}var ee=(ne(0)||"").replace(/(:\d+)+\)?/,"").replace(/.+\//,"")
function te(e,t){if(t=void 0===t?4:t,e&&e.stack){var n=e.stack.split("\n")
if(/^error$/i.test(n[0])&&n.shift(),ee){for(var r=[],a=t;a<n.length&&-1===n[a].indexOf(ee);a++)r.push(n[a])
if(r.length)return r.join("\n")}return n[t]}}function ne(e){var t=new Error
if(!t.stack)try{throw t}catch(e){t=e}return te(t,e)}var re,ae=0,oe=[]
function ie(){var e,t
e=k(),q.depth=(q.depth||0)+1,se(e),q.depth--,oe.length||q.blocking||q.current||(q.blocking||q.queue.length||0!==q.depth?(t=q.queue.shift()(),oe.push.apply(oe,d(t)),ae>0&&ae--,ie()):function(){var e
if(0===q.stats.testCount&&!0===q.failOnZeroTests)return e=q.filter&&q.filter.length?new Error('No tests matched the filter "'.concat(q.filter,'".')):q.module&&q.module.length?new Error('No tests matched the module "'.concat(q.module,'".')):q.moduleId&&q.moduleId.length?new Error('No tests matched the moduleId "'.concat(q.moduleId,'".')):q.testId&&q.testId.length?new Error('No tests matched the testId "'.concat(q.testId,'".')):new Error("No tests were run."),ge("global failure",O((function(t){t.pushResult({result:!1,message:e.message,source:e.stack})}),{validTest:!0})),void ie()
var t=q.storage,n=k()-q.started,r=q.stats.all-q.stats.bad
le.finished=!0,Q("runEnd",ze.end(!0)),Z("done",{passed:r,failed:q.stats.bad,total:q.stats.all,runtime:n}).then((function(){if(t&&0===q.stats.bad)for(var e=t.length-1;e>=0;e--){var n=t.key(e)
0===n.indexOf("qunit-test-")&&t.removeItem(n)}}))}())}function se(e){if(oe.length&&!q.blocking){var t=k()-e
if(!b||q.updateRate<=0||t<q.updateRate){var n=oe.shift()
X.resolve(n()).then((function(){oe.length?se(e):ie()}))}else b(ie)}}var le={finished:!1,add:function(e,t,n){if(t)q.queue.splice(ae++,0,e)
else if(n){re||(re=function(e){var t=parseInt(P(e),16)||-1
return function(){return t^=t<<13,t^=t>>>17,(t^=t<<5)<0&&(t+=4294967296),t/4294967296}}(n))
var r=Math.floor(re()*(q.queue.length-ae+1))
q.queue.splice(ae+r,0,e)}else q.queue.push(e)},advance:ie,taskCount:function(){return oe.length}},ue=function(){function e(t,n,r){s(this,e),this.name=t,this.suiteName=n.name,this.fullName=n.fullName.concat(t),this.runtime=0,this.assertions=[],this.skipped=!!r.skip,this.todo=!!r.todo,this.valid=r.valid,this._startTime=0,this._endTime=0,n.pushTest(this)}return u(e,[{key:"start",value:function(e){return e&&(this._startTime=T.now(),T.mark("qunit_test_start")),{name:this.name,suiteName:this.suiteName,fullName:this.fullName.slice()}}},{key:"end",value:function(e){if(e&&(this._endTime=T.now(),T)){T.mark("qunit_test_end")
var t=this.fullName.join(" – ")
T.measure("QUnit Test: ".concat(t),"qunit_test_start","qunit_test_end")}return O(this.start(),{runtime:this.getRuntime(),status:this.getStatus(),errors:this.getFailedAssertions(),assertions:this.getAssertions()})}},{key:"pushAssertion",value:function(e){this.assertions.push(e)}},{key:"getRuntime",value:function(){return this._endTime-this._startTime}},{key:"getStatus",value:function(){return this.skipped?"skipped":(this.getFailedAssertions().length>0?this.todo:!this.todo)?this.todo?"todo":"passed":"failed"}},{key:"getFailedAssertions",value:function(){return this.assertions.filter((function(e){return!e.passed}))}},{key:"getAssertions",value:function(){return this.assertions.slice()}},{key:"slimAssertions",value:function(){this.assertions=this.assertions.map((function(e){return delete e.actual,delete e.expected,e}))}}]),e}()
function ce(e){if(this.expected=null,this.assertions=[],this.module=q.currentModule,this.steps=[],this.timeout=void 0,this.data=void 0,this.withData=!1,this.pauses=new o,this.nextPauseId=1,O(this,e),this.module.skip?(this.skip=!0,this.todo=!1):this.module.todo&&!this.skip&&(this.todo=!0),le.finished)E.warn("Unexpected test after runEnd. This is unstable and will fail in QUnit 3.0.")
else{if(!this.skip&&"function"!=typeof this.callback){var t=this.todo?"QUnit.todo":"QUnit.test"
throw new TypeError("You must provide a callback to ".concat(t,'("').concat(this.testName,'")'))}++ce.count,this.errorForStack=new Error,this.callback&&this.callback.validTest&&(this.errorForStack.stack=void 0),this.testReport=new ue(this.testName,this.module.suiteReport,{todo:this.todo,skip:this.skip,valid:this.valid()})
for(var n=0,r=this.module.tests;n<r.length;n++)this.module.tests[n].name===this.testName&&(this.testName+=" ")
this.testId=P(this.module.name,this.testName),this.module.tests.push({name:this.testName,testId:this.testId,skip:!!this.skip}),this.skip?(this.callback=function(){},this.async=!1,this.expected=0):this.assert=new Ce(this)}}function de(){if(!q.current)throw new Error("pushFailure() assertion outside test context, in "+ne(2))
var e=q.current
return e.pushFailure.apply(e,arguments)}function pe(){if(q.pollution=[],q.noglobals)for(var e in h)if(C.call(h,e)){if(/^qunit-test-output/.test(e))continue
q.pollution.push(e)}}ce.count=0,ce.prototype={get stack(){return te(this.errorForStack,2)},before:function(){var e=this,t=this.module
return function(e){for(var t=e,n=[];t&&0===t.testsRun;)n.push(t),t=t.parentModule
return n.reverse()}(t).reduce((function(e,t){return e.then((function(){return t.stats={all:0,bad:0,started:k()},Q("suiteStart",t.suiteReport.start(!0)),Z("moduleStart",{name:t.name,tests:t.tests})}))}),X.resolve([])).then((function(){return q.current=e,e.testEnvironment=O({},t.testEnvironment),e.started=k(),Q("testStart",e.testReport.start(!0)),Z("testStart",{name:e.testName,module:t.name,testId:e.testId,previousFailure:e.previousFailure}).then((function(){q.pollution||pe()}))}))},run:function(){if(q.current=this,this.callbackStarted=k(),q.notrycatch)e(this)
else try{e(this)}catch(e){this.pushFailure("Died on test #"+(this.assertions.length+1)+" "+this.stack+": "+(e.message||e),te(e,0)),pe(),q.blocking&&we(this)}function e(e){var t
t=e.withData?e.callback.call(e.testEnvironment,e.assert,e.data):e.callback.call(e.testEnvironment,e.assert),e.resolvePromise(t),0===e.timeout&&e.pauses.size>0&&de("Test did not finish synchronously even though assert.timeout( 0 ) was used.",ne(2))}},after:function(){!function(){var e=q.pollution
pe()
var t=N(q.pollution,e)
t.length>0&&de("Introduced global variable(s): "+t.join(", "))
var n=N(e,q.pollution)
n.length>0&&de("Deleted global variable(s): "+n.join(", "))}()},queueHook:function(e,t,n){var r=this,a=function(){var n=e.call(r.testEnvironment,r.assert)
r.resolvePromise(n,t)}
return function(){if("before"===t){if(0!==n.testsRun)return
r.preserveEnvironment=!0}if("after"!==t||function(e){return e.testsRun===xe(e).filter((function(e){return!e.skip})).length-1}(n)||!(q.queue.length>0||le.taskCount()>2))if(q.current=r,q.notrycatch)a()
else try{a()}catch(e){r.pushFailure(t+" failed on "+r.testName+": "+(e.message||e),te(e,0))}}},hooks:function(e){var t=[]
return this.skip||function n(r,a){if(a.parentModule&&n(r,a.parentModule),a.hooks[e].length)for(var o=0;o<a.hooks[e].length;o++)t.push(r.queueHook(a.hooks[e][o],e,a))}(this,this.module),t},finish:function(){if(q.current=this,this.callback=void 0,this.steps.length){var e=this.steps.join(", ")
this.pushFailure("Expected assert.verifySteps() to be called before end of test "+"after using assert.step(). Unverified steps: ".concat(e),this.stack)}q.requireExpects&&null===this.expected?this.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!==this.expected&&this.expected!==this.assertions.length?this.pushFailure("Expected "+this.expected+" assertions, but "+this.assertions.length+" were run",this.stack):null!==this.expected||this.assertions.length||this.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack)
var t=this.module,n=t.name,r=this.testName,a=!!this.skip,o=!!this.todo,i=0,s=q.storage
this.runtime=k()-this.started,q.stats.all+=this.assertions.length,q.stats.testCount+=1,t.stats.all+=this.assertions.length
for(var l=0;l<this.assertions.length;l++)this.assertions[l].result||(i++,q.stats.bad++,t.stats.bad++)
a?Ae(t):function(e){for(e.testsRun++;e=e.parentModule;)e.testsRun++}(t),s&&(i?s.setItem("qunit-test-"+n+"-"+r,i):s.removeItem("qunit-test-"+n+"-"+r)),Q("testEnd",this.testReport.end(!0)),this.testReport.slimAssertions()
var u=this
return Z("testDone",{name:r,module:n,skipped:a,todo:o,failed:i,passed:this.assertions.length-i,total:this.assertions.length,runtime:a?0:this.runtime,assertions:this.assertions,testId:this.testId,get source(){return u.stack}}).then((function(){if(Ee(t)){for(var e=[t],n=t.parentModule;n&&Ee(n);)e.push(n),n=n.parentModule
return e.reduce((function(e,t){return e.then((function(){return function(e){for(var t=[e];t.length;){var n=t.shift()
n.hooks={},t.push.apply(t,d(n.childModules))}return Q("suiteEnd",e.suiteReport.end(!0)),Z("moduleDone",{name:e.name,tests:e.tests,failed:e.stats.bad,passed:e.stats.all-e.stats.bad,total:e.stats.all,runtime:k()-e.stats.started})}(t)}))}),X.resolve([]))}})).then((function(){q.current=void 0}))},preserveTestEnvironment:function(){this.preserveEnvironment&&(this.module.testEnvironment=this.testEnvironment,this.testEnvironment=O({},this.module.testEnvironment))},queue:function(){var e=this
if(this.valid()){var t=q.storage&&+q.storage.getItem("qunit-test-"+this.module.name+"-"+this.testName),n=q.reorder&&!!t
this.previousFailure=!!t,le.add((function(){return[function(){return e.before()}].concat(d(e.hooks("before")),[function(){e.preserveTestEnvironment()}],d(e.hooks("beforeEach")),[function(){e.run()}],d(e.hooks("afterEach").reverse()),d(e.hooks("after").reverse()),[function(){e.after()},function(){return e.finish()}])}),n,q.seed)}else Ae(this.module)},pushResult:function(e){if(this!==q.current){var t=e&&e.message||"",n=this&&this.testName||""
throw new Error("Assertion occurred after test finished.\n> Test: "+n+"\n> Message: "+t+"\n")}var r={module:this.module.name,name:this.testName,result:e.result,message:e.message,actual:e.actual,testId:this.testId,negative:e.negative||!1,runtime:k()-this.started,todo:!!this.todo}
if(C.call(e,"expected")&&(r.expected=e.expected),!e.result){var a=e.source||ne()
a&&(r.source=a)}this.logAssertion(r),this.assertions.push({result:!!e.result,message:e.message})},pushFailure:function(e,t,n){if(!(this instanceof ce))throw new Error("pushFailure() assertion outside test context, was "+ne(2))
this.pushResult({result:!1,message:e||"error",actual:n||null,source:t})},logAssertion:function(e){Z("log",e)
var t={passed:e.result,actual:e.actual,expected:e.expected,message:e.message,stack:e.source,todo:e.todo}
this.testReport.pushAssertion(t),Q("assertion",t)},resolvePromise:function(e,t){if(null!=e){var n=this,r=e.then
if("function"===S(r)){var a=ye(n),o=function(){a()}
q.notrycatch?r.call(e,o):r.call(e,o,(function(e){var r="Promise rejected "+(t?t.replace(/Each$/,""):"during")+' "'+n.testName+'": '+(e&&e.message||e)
n.pushFailure(r,te(e,0)),pe(),we(n)}))}}},valid:function(){var e=q.filter,t=/^(!?)\/([\w\W]*)\/(i?$)/.exec(e),n=q.module&&q.module.toLowerCase(),r=this.module.name+": "+this.testName
return!(!this.callback||!this.callback.validTest)||!(q.moduleId&&q.moduleId.length>0&&!function e(t){return R(t.moduleId,q.moduleId)||t.parentModule&&e(t.parentModule)}(this.module))&&!(q.testId&&q.testId.length>0&&!R(this.testId,q.testId))&&!(n&&!function e(t){return(t.name?t.name.toLowerCase():null)===n||!!t.parentModule&&e(t.parentModule)}(this.module))&&(!e||(t?this.regexFilter(!!t[1],t[2],t[3],r):this.stringFilter(e,r)))},regexFilter:function(e,t,n,r){return new RegExp(t,n).test(r)!==e},stringFilter:function(e,t){e=e.toLowerCase(),t=t.toLowerCase()
var n="!"!==e.charAt(0)
return n||(e=e.slice(1)),-1!==t.indexOf(e)?n:!n}}
var fe=!1
function he(e){fe||q.currentModule.ignored||new ce(e).queue()}function me(e){q.currentModule.ignored||(fe||(q.queue.length=0,fe=!0),new ce(e).queue())}function ge(e,t){he({testName:e,callback:t})}function ve(e,t){return"".concat(e," [").concat(t,"]")}function be(e,t){if(Array.isArray(e))e.forEach(t)
else{if("object"!==i(e)||null===e)throw new Error("test.each() expects an array or object as input, but\nfound ".concat(i(e)," instead."))
Object.keys(e).forEach((function(n){t(e[n],n)}))}}function ye(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1
q.blocking=!0
var n,r=e.nextPauseId++,a={cancelled:!1,remaining:t}
function o(){if(!a.cancelled){if(void 0===q.current)throw new Error("Unexpected release of async pause after tests finished.\n"+"> Test: ".concat(e.testName," [async #").concat(r,"]"))
if(q.current!==e)throw new Error("Unexpected release of async pause during a different test.\n"+"> Test: ".concat(e.testName," [async #").concat(r,"]"))
if(a.remaining<=0)throw new Error("Tried to release async pause that was already released.\n"+"> Test: ".concat(e.testName," [async #").concat(r,"]"))
a.remaining--,0===a.remaining&&e.pauses.delete(r),De(e)}}return e.pauses.set(r,a),b&&("number"==typeof e.timeout?n=e.timeout:"number"==typeof q.testTimeout&&(n=q.testTimeout),"number"==typeof n&&n>0&&(q.timeoutHandler=function(t){return function(){q.timeout=null,a.cancelled=!0,e.pauses.delete(r),e.pushFailure("Test took longer than ".concat(t,"ms; test timed out."),ne(2)),De(e)}},y(q.timeout),q.timeout=b(q.timeoutHandler(n),n))),o}function we(e){e.pauses.forEach((function(e){e.cancelled=!0})),e.pauses.clear(),De(e)}function De(e){e.pauses.size>0||(b?(y(q.timeout),q.timeout=b((function(){e.pauses.size>0||(y(q.timeout),q.timeout=null,Qe())}))):Qe())}function xe(e){for(var t=[].concat(e.tests),n=d(e.childModules);n.length;){var r=n.shift()
t.push.apply(t,r.tests),n.push.apply(n,d(r.childModules))}return t}function Ee(e){return e.testsRun+e.testsIgnored===xe(e).length}function Ae(e){for(e.testsIgnored++;e=e.parentModule;)e.testsIgnored++}O(ge,{todo:function(e,t){he({testName:e,callback:t,todo:!0})},skip:function(e){he({testName:e,skip:!0})},only:function(e,t){me({testName:e,callback:t})},each:function(e,t,n){be(t,(function(t,r){he({testName:ve(e,r),callback:n,withData:!0,data:t})}))}}),ge.todo.each=function(e,t,n){be(t,(function(t,r){he({testName:ve(e,r),callback:n,todo:!0,withData:!0,data:t})}))},ge.skip.each=function(e,t){be(t,(function(t,n){he({testName:ve(e,n),skip:!0})}))},ge.only.each=function(e,t,n){be(t,(function(t,r){me({testName:ve(e,r),callback:n,withData:!0,data:t})}))}
var Ce=function(){function e(t){s(this,e),this.test=t}return u(e,[{key:"timeout",value:function(e){if("number"!=typeof e)throw new Error("You must pass a number as the duration to assert.timeout")
var t
this.test.timeout=e,q.timeout&&(y(q.timeout),q.timeout=null,q.timeoutHandler&&this.test.timeout>0&&(t=this.test.timeout,y(q.timeout),q.timeout=b(q.timeoutHandler(t),t)))}},{key:"step",value:function(e){var t=e,n=!!e
this.test.steps.push(e),"undefined"===S(e)||""===e?t="You must provide a message to assert.step":"string"!==S(e)&&(t="You must provide a string value to assert.step",n=!1),this.pushResult({result:n,message:t})}},{key:"verifySteps",value:function(e,t){var n=this.test.steps.slice()
this.deepEqual(n,e,t),this.test.steps.length=0}},{key:"expect",value:function(e){if(1!==arguments.length)return this.test.expected
this.test.expected=e}},{key:"async",value:function(e){var t=void 0===e?1:e
return ye(this.test,t)}},{key:"push",value:function(t,n,r,a,o){return E.warn("assert.push is deprecated and will be removed in QUnit 3.0. Please use assert.pushResult instead (https://api.qunitjs.com/assert/pushResult)."),(this instanceof e?this:q.current.assert).pushResult({result:t,actual:n,expected:r,message:a,negative:o})}},{key:"pushResult",value:function(t){var n=this,r=n instanceof e&&n.test||q.current
if(!r)throw new Error("assertion outside test context, in "+ne(2))
return n instanceof e||(n=r.assert),n.test.pushResult(t)}},{key:"ok",value:function(e,t){t||(t=e?"okay":"failed, expected argument to be truthy, was: ".concat(B.parse(e))),this.pushResult({result:!!e,actual:e,expected:!0,message:t})}},{key:"notOk",value:function(e,t){t||(t=e?"failed, expected argument to be falsy, was: ".concat(B.parse(e)):"okay"),this.pushResult({result:!e,actual:e,expected:!1,message:t})}},{key:"true",value:function(e,t){this.pushResult({result:!0===e,actual:e,expected:!0,message:t})}},{key:"false",value:function(e,t){this.pushResult({result:!1===e,actual:e,expected:!1,message:t})}},{key:"equal",value:function(e,t,n){var r=t==e
this.pushResult({result:r,actual:e,expected:t,message:n})}},{key:"notEqual",value:function(e,t,n){var r=t!=e
this.pushResult({result:r,actual:e,expected:t,message:n,negative:!0})}},{key:"propEqual",value:function(e,t,n){e=_(e),t=_(t),this.pushResult({result:M(e,t),actual:e,expected:t,message:n})}},{key:"notPropEqual",value:function(e,t,n){e=_(e),t=_(t),this.pushResult({result:!M(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"deepEqual",value:function(e,t,n){this.pushResult({result:M(e,t),actual:e,expected:t,message:n})}},{key:"notDeepEqual",value:function(e,t,n){this.pushResult({result:!M(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"strictEqual",value:function(e,t,n){this.pushResult({result:t===e,actual:e,expected:t,message:n})}},{key:"notStrictEqual",value:function(e,t,n){this.pushResult({result:t!==e,actual:e,expected:t,message:n,negative:!0})}},{key:"throws",value:function(t,n,r){var a=c(ke(n,r,"throws"),2)
n=a[0],r=a[1]
var o=this instanceof e&&this.test||q.current
if("function"===S(t)){var i,s=!1
o.ignoreGlobalErrors=!0
try{t.call(o.testEnvironment)}catch(e){i=e}if(o.ignoreGlobalErrors=!1,i){var l=c(Fe(i,n,r),3)
s=l[0],n=l[1],r=l[2]}o.assert.pushResult({result:s,actual:i&&j(i),expected:n,message:r})}else{var u='The value provided to `assert.throws` in "'+o.testName+'" was not a function.'
o.assert.pushResult({result:!1,actual:t,message:u})}}},{key:"rejects",value:function(t,n,r){var a=c(ke(n,r,"rejects"),2)
n=a[0],r=a[1]
var o=this instanceof e&&this.test||q.current,i=t&&t.then
if("function"===S(i)){var s=this.async()
return i.call(t,(function(){var e='The promise returned by the `assert.rejects` callback in "'+o.testName+'" did not reject.'
o.assert.pushResult({result:!1,message:e,actual:t}),s()}),(function(e){var t,a=c(Fe(e,n,r),3)
t=a[0],n=a[1],r=a[2],o.assert.pushResult({result:t,actual:e&&j(e),expected:n,message:r}),s()}))}var l='The value provided to `assert.rejects` in "'+o.testName+'" was not a promise.'
o.assert.pushResult({result:!1,message:l,actual:t})}}]),e}()
function ke(e,t,n){var r=S(e)
if("string"===r){if(void 0===t)return t=e,[e=void 0,t]
throw new Error("assert."+n+" does not accept a string value for the expected argument.\nUse a non-string object value (e.g. RegExp or validator function) instead if necessary.")}if(e&&"regexp"!==r&&"function"!==r&&"object"!==r)throw new Error("Invalid expected value type ("+r+") provided to assert."+n+".")
return[e,t]}function Fe(e,t,n){var r=!1,a=S(t)
if(t){if("regexp"===a)r=t.test(j(e)),t=String(t)
else if("function"===a&&void 0!==t.prototype&&e instanceof t)r=!0
else if("object"===a)r=e instanceof t.constructor&&e.name===t.name&&e.message===t.message,t=j(t)
else if("function"===a)try{r=!0===t.call({},e),t=null}catch(e){t=j(e)}}else r=!0
return[r,t,n]}Ce.prototype.raises=Ce.prototype.throws
var Te,Ne,Re,_e,Oe=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
s(this,e),this.log=n.log||Function.prototype.bind.call(v.log,v),t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testStart",this.onTestStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return u(e,[{key:"onError",value:function(e){this.log("error",e)}},{key:"onRunStart",value:function(e){this.log("runStart",e)}},{key:"onTestStart",value:function(e){this.log("testStart",e)}},{key:"onTestEnd",value:function(e){this.log("testEnd",e)}},{key:"onRunEnd",value:function(e){this.log("runEnd",e)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),Se=!0
if("undefined"!=typeof process){var Ie=process.env
Te=Ie.FORCE_COLOR,Ne=Ie.NODE_DISABLE_COLORS,Re=Ie.NO_COLOR,_e=Ie.TERM,Se=process.stdout&&process.stdout.isTTY}var Pe={enabled:!Ne&&null==Re&&"dumb"!==_e&&(null!=Te&&"0"!==Te||Se),reset:Me(0,0),bold:Me(1,22),dim:Me(2,22),italic:Me(3,23),underline:Me(4,24),inverse:Me(7,27),hidden:Me(8,28),strikethrough:Me(9,29),black:Me(30,39),red:Me(31,39),green:Me(32,39),yellow:Me(33,39),blue:Me(34,39),magenta:Me(35,39),cyan:Me(36,39),white:Me(37,39),gray:Me(90,39),grey:Me(90,39),bgBlack:Me(40,49),bgRed:Me(41,49),bgGreen:Me(42,49),bgYellow:Me(43,49),bgBlue:Me(44,49),bgMagenta:Me(45,49),bgCyan:Me(46,49),bgWhite:Me(47,49)}
function je(e,t){for(var n,r=0,a="",o="";r<e.length;r++)a+=(n=e[r]).open,o+=n.close,~t.indexOf(n.close)&&(t=t.replace(n.rgx,n.close+n.open))
return a+t+o}function Me(e,t){var n={open:"[".concat(e,"m"),close:"[".concat(t,"m"),rgx:new RegExp("\\x1b\\[".concat(t,"m"),"g")}
return function(t){return void 0!==this&&void 0!==this.has?(~this.has.indexOf(e)||(this.has.push(e),this.keys.push(n)),void 0===t?this:Pe.enabled?je(this.keys,t+""):t+""):void 0===t?((r={has:[e],keys:[n]}).reset=Pe.reset.bind(r),r.bold=Pe.bold.bind(r),r.dim=Pe.dim.bind(r),r.italic=Pe.italic.bind(r),r.underline=Pe.underline.bind(r),r.inverse=Pe.inverse.bind(r),r.hidden=Pe.hidden.bind(r),r.strikethrough=Pe.strikethrough.bind(r),r.black=Pe.black.bind(r),r.red=Pe.red.bind(r),r.green=Pe.green.bind(r),r.yellow=Pe.yellow.bind(r),r.blue=Pe.blue.bind(r),r.magenta=Pe.magenta.bind(r),r.cyan=Pe.cyan.bind(r),r.white=Pe.white.bind(r),r.gray=Pe.gray.bind(r),r.grey=Pe.grey.bind(r),r.bgBlack=Pe.bgBlack.bind(r),r.bgRed=Pe.bgRed.bind(r),r.bgGreen=Pe.bgGreen.bind(r),r.bgYellow=Pe.bgYellow.bind(r),r.bgBlue=Pe.bgBlue.bind(r),r.bgMagenta=Pe.bgMagenta.bind(r),r.bgCyan=Pe.bgCyan.bind(r),r.bgWhite=Pe.bgWhite.bind(r),r):Pe.enabled?je([n],t+""):t+""
var r}}var qe=Object.prototype.hasOwnProperty
function Le(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4
if(void 0===e&&(e=String(e)),"number"!=typeof e||isFinite(e)||(e=String(e)),"number"==typeof e)return JSON.stringify(e)
if("string"==typeof e){var n=/['"\\/[{}\]\r\n]/,r=/[-?:,[\]{}#&*!|=>'"%@`]/,a=/(^\s|\s$)/,o=/^[\d._-]+$/,i=/^(true|false|y|n|yes|no|on|off)$/i
if(""===e||n.test(e)||r.test(e[0])||a.test(e)||o.test(e)||i.test(e)){if(!/\n/.test(e))return JSON.stringify(e)
var s=new Array(t+1).join(" "),l=e.match(/\n+$/),u=l?l[0].length:0
if(1===u){var c=e.replace(/\n$/,"").split("\n").map((function(e){return s+e}))
return"|\n"+c.join("\n")}var d=e.split("\n").map((function(e){return s+e}))
return"|+\n"+d.join("\n")}return e}return JSON.stringify(Be(e),null,2)}function Be(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(-1!==n.indexOf(e))return"[Circular]"
var r=Object.prototype.toString.call(e).replace(/^\[.+\s(.+?)]$/,"$1").toLowerCase()
switch(r){case"array":n.push(e),t=e.map((function(e){return Be(e,n)})),n.pop()
break
case"object":n.push(e),t={},Object.keys(e).forEach((function(r){t[r]=Be(e[r],n)})),n.pop()
break
default:t=e}return t}var Ue={console:Oe,tap:function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
s(this,e),this.log=n.log||Function.prototype.bind.call(v.log,v),this.testCount=0,this.ended=!1,this.bailed=!1,t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return u(e,[{key:"onRunStart",value:function(e){this.log("TAP version 13")}},{key:"onError",value:function(e){this.bailed||(this.bailed=!0,this.ended||(this.testCount=this.testCount+1,this.log(Pe.red("not ok ".concat(this.testCount," global failure"))),this.logError(e)),this.log("Bail out! "+j(e).split("\n")[0]),this.ended&&this.logError(e))}},{key:"onTestEnd",value:function(e){var t=this
this.testCount=this.testCount+1,"passed"===e.status?this.log("ok ".concat(this.testCount," ").concat(e.fullName.join(" > "))):"skipped"===e.status?this.log(Pe.yellow("ok ".concat(this.testCount," # SKIP ").concat(e.fullName.join(" > ")))):"todo"===e.status?(this.log(Pe.cyan("not ok ".concat(this.testCount," # TODO ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e,"todo")}))):(this.log(Pe.red("not ok ".concat(this.testCount," ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e)})))}},{key:"onRunEnd",value:function(e){this.ended=!0,this.log("1..".concat(e.testCounts.total)),this.log("# pass ".concat(e.testCounts.passed)),this.log(Pe.yellow("# skip ".concat(e.testCounts.skipped))),this.log(Pe.cyan("# todo ".concat(e.testCounts.todo))),this.log(Pe.red("# fail ".concat(e.testCounts.failed)))}},{key:"logAssertion",value:function(e,t){var n="  ---"
n+="\n  message: ".concat(Le(e.message||"failed")),n+="\n  severity: ".concat(Le(t||"failed")),qe.call(e,"actual")&&(n+="\n  actual  : ".concat(Le(e.actual))),qe.call(e,"expected")&&(n+="\n  expected: ".concat(Le(e.expected))),e.stack&&(n+="\n  stack: ".concat(Le(e.stack+"\n"))),n+="\n  ...",this.log(n)}},{key:"logError",value:function(e){var t="  ---"
t+="\n  message: ".concat(Le(j(e))),t+="\n  severity: ".concat(Le("failed")),e&&e.stack&&(t+="\n  stack: ".concat(Le(e.stack+"\n"))),t+="\n  ...",this.log(t)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}()}
function He(e){q.current?q.current.assert.pushResult({result:!1,message:"global failure: ".concat(j(e)),source:e&&e.stack||ne(2)}):(ze.globalFailureCount++,q.stats.bad++,q.stats.all++,Q("error",e))}var Ve={},ze=new U
q.currentModule.suiteReport=ze
var $e=!1,We=!1
function Ge(){We=!0,b?b((function(){Qe()})):Qe()}function Ye(){q.blocking=!1,le.advance()}function Qe(){if(q.started)Ye()
else{q.started=k(),""===q.modules[0].name&&0===q.modules[0].tests.length&&q.modules.shift()
for(var e=q.modules.length,t=[],n=0;n<e;n++)t.push({name:q.modules[n].name,tests:q.modules[n].tests})
Q("runStart",ze.start(!0)),Z("begin",{totalTests:ce.count,modules:t}).then(Ye)}}Ve.isLocal=m&&m.location&&"file:"===m.location.protocol,Ve.version="2.17.2",O(Ve,{config:q,dump:B,equiv:M,reporters:Ue,is:I,objectType:S,on:function(e,t){if("string"!==S(e))throw new TypeError("eventName must be a string when registering a listener")
if(!R(e,Y)){var n=Y.join(", ")
throw new Error('"'.concat(e,'" is not a valid event; must be one of: ').concat(n,"."))}if("function"!==S(t))throw new TypeError("callback must be a function when registering a listener")
G[e]||(G[e]=[]),R(t,G[e])||G[e].push(t)},onError:function(e){if(E.warn("QUnit.onError is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),q.current&&q.current.ignoreGlobalErrors)return!0
var t=new Error(e.message)
return t.stack=e.stacktrace||e.fileName+":"+e.lineNumber,He(t),!1},onUncaughtException:He,pushFailure:de,assert:Ce.prototype,module:W,test:ge,todo:ge.todo,skip:ge.skip,only:ge.only,start:function(e){if(q.current)throw new Error("QUnit.start cannot be called inside a test context.")
var t=$e
if($e=!0,We)throw new Error("Called start() while test already started running")
if(t||e>1)throw new Error("Called start() outside of a test context too many times")
if(q.autostart)throw new Error("Called start() outside of a test context when QUnit.config.autostart was true")
if(!q.pageLoaded)return q.autostart=!0,void(w||Ve.load())
Ge()},onUnhandledRejection:function(e){E.warn("QUnit.onUnhandledRejection is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),He(e)},extend:function(){E.warn("QUnit.extend is deprecated and will be removed in QUnit 3.0. Please use Object.assign instead.")
for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return O.apply(this,t)},load:function(){q.pageLoaded=!0,O(q,{started:0,updateRate:1e3,autostart:!0,filter:""},!0),We||(q.blocking=!1,q.autostart&&Ge())},stack:function(e){return ne(e=(e||0)+2)}}),function(e){var t=["begin","done","log","testStart","testDone","moduleStart","moduleDone"]
function n(e){return function(t){if("function"!==S(t))throw new Error("QUnit logging methods require a callback function as their first parameters.")
q.callbacks[e].push(t)}}for(var r=0,a=t.length;r<a;r++){var o=t[r]
"undefined"===S(q.callbacks[o])&&(q.callbacks[o]=[]),e[o]=n(o)}}(Ve),function(a){var o=!1
if(m&&w){if(m.QUnit&&m.QUnit.version)throw new Error("QUnit has already been defined.")
m.QUnit=a,o=!0}e&&e.exports&&(e.exports=a,e.exports.QUnit=a,o=!0),t&&(t.QUnit=a,o=!0),void 0===(r=function(){return a}.call(t,n,t,e))||(e.exports=r),a.config.autostart=!1,o=!0,g&&g.WorkerGlobalScope&&g instanceof g.WorkerGlobalScope&&(g.QUnit=a,o=!0),o||(h.QUnit=a)}(Ve),function(){if(m&&w){var e=Ve.config,t=Object.prototype.hasOwnProperty
Ve.begin((function(){if(!t.call(e,"fixture")){var n=w.getElementById("qunit-fixture")
n&&(e.fixture=n.cloneNode(!0))}})),Ve.testStart((function(){if(null!=e.fixture){var t=w.getElementById("qunit-fixture")
if("string"===i(e.fixture)){var n=w.createElement("div")
n.setAttribute("id","qunit-fixture"),n.innerHTML=e.fixture,t.parentNode.replaceChild(n,t)}else{var r=e.fixture.cloneNode(!0)
t.parentNode.replaceChild(r,t)}}}))}}(),function(){var e=void 0!==m&&m.location
if(e){var t=function(){var t,r,a,o,i=Object.create(null),s=e.search.slice(1).split("&"),l=s.length
for(t=0;t<l;t++)s[t]&&(a=n((r=s[t].split("="))[0]),o=1===r.length||n(r.slice(1).join("=")),i[a]=a in i?[].concat(i[a],o):o)
return i}()
Ve.urlParams=t,Ve.config.moduleId=[].concat(t.moduleId||[]),Ve.config.testId=[].concat(t.testId||[]),Ve.config.module=t.module,Ve.config.filter=t.filter,!0===t.seed?Ve.config.seed=Math.random().toString(36).slice(2):t.seed&&(Ve.config.seed=t.seed),Ve.config.urlConfig.push({id:"hidepassed",label:"Hide passed tests",tooltip:"Only show tests and assertions that fail. Stored as query-strings."},{id:"noglobals",label:"Check for Globals",tooltip:"Enabling this will test if any test introduces new properties on the global object (`window` in Browsers). Stored as query-strings."},{id:"notrycatch",label:"No try-catch",tooltip:"Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."}),Ve.begin((function(){var e,n,r=Ve.config.urlConfig
for(e=0;e<r.length;e++)"string"!=typeof(n=Ve.config.urlConfig[e])&&(n=n.id),void 0===Ve.config[n]&&(Ve.config[n]=t[n])}))}function n(e){return decodeURIComponent(e.replace(/\+/g,"%20"))}}()
var Ke={exports:{}}
!function(e){var t,n
t=K,n=function(){var e="undefined"==typeof window,t=new o,n=new o,r=[]
r.total=0
var a=[],s=[]
function l(){t.clear(),n.clear(),a=[],s=[]}function u(e){for(var t=-9007199254740991,n=e.length-1;n>=0;--n){var r=e[n]
if(null!==r){var a=r.score
a>t&&(t=a)}}return-9007199254740991===t?null:t}function c(e,t){var n=e[t]
if(void 0!==n)return n
var r=t
Array.isArray(t)||(r=t.split("."))
for(var a=r.length,o=-1;e&&++o<a;)e=e[r[o]]
return e}function d(e){return"object"===i(e)}var p=function(){var e=[],t=0,n={}
function r(){for(var n=0,r=e[n],a=1;a<t;){var o=a+1
n=a,o<t&&e[o].score<e[a].score&&(n=o),e[n-1>>1]=e[n],a=1+(n<<1)}for(var i=n-1>>1;n>0&&r.score<e[i].score;i=(n=i)-1>>1)e[n]=e[i]
e[n]=r}return n.add=function(n){var r=t
e[t++]=n
for(var a=r-1>>1;r>0&&n.score<e[a].score;a=(r=a)-1>>1)e[r]=e[a]
e[r]=n},n.poll=function(){if(0!==t){var n=e[0]
return e[0]=e[--t],r(),n}},n.peek=function(n){if(0!==t)return e[0]},n.replaceTop=function(t){e[0]=t,r()},n},f=p()
return function o(i){var h={single:function(e,t,n){return e?(d(e)||(e=h.getPreparedSearch(e)),t?(d(t)||(t=h.getPrepared(t)),((n&&void 0!==n.allowTypo?n.allowTypo:!i||void 0===i.allowTypo||i.allowTypo)?h.algorithm:h.algorithmNoTypo)(e,t,e[0])):null):null},go:function(e,t,n){if(!e)return r
var a=(e=h.prepareSearch(e))[0],o=n&&n.threshold||i&&i.threshold||-9007199254740991,s=n&&n.limit||i&&i.limit||9007199254740991,l=(n&&void 0!==n.allowTypo?n.allowTypo:!i||void 0===i.allowTypo||i.allowTypo)?h.algorithm:h.algorithmNoTypo,p=0,m=0,g=t.length
if(n&&n.keys)for(var v=n.scoreFn||u,b=n.keys,y=b.length,w=g-1;w>=0;--w){for(var D=t[w],x=new Array(y),E=y-1;E>=0;--E)(k=c(D,C=b[E]))?(d(k)||(k=h.getPrepared(k)),x[E]=l(e,k,a)):x[E]=null
x.obj=D
var A=v(x)
null!==A&&(A<o||(x.score=A,p<s?(f.add(x),++p):(++m,A>f.peek().score&&f.replaceTop(x))))}else if(n&&n.key){var C=n.key
for(w=g-1;w>=0;--w)(k=c(D=t[w],C))&&(d(k)||(k=h.getPrepared(k)),null!==(F=l(e,k,a))&&(F.score<o||(F={target:F.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:F.score,indexes:F.indexes,obj:D},p<s?(f.add(F),++p):(++m,F.score>f.peek().score&&f.replaceTop(F)))))}else for(w=g-1;w>=0;--w){var k,F;(k=t[w])&&(d(k)||(k=h.getPrepared(k)),null!==(F=l(e,k,a))&&(F.score<o||(p<s?(f.add(F),++p):(++m,F.score>f.peek().score&&f.replaceTop(F)))))}if(0===p)return r
var T=new Array(p)
for(w=p-1;w>=0;--w)T[w]=f.poll()
return T.total=p+m,T},goAsync:function(t,n,a){var o=!1,s=new Promise((function(s,l){if(!t)return s(r)
var f=(t=h.prepareSearch(t))[0],m=p(),g=n.length-1,v=a&&a.threshold||i&&i.threshold||-9007199254740991,b=a&&a.limit||i&&i.limit||9007199254740991,y=(a&&void 0!==a.allowTypo?a.allowTypo:!i||void 0===i.allowTypo||i.allowTypo)?h.algorithm:h.algorithmNoTypo,w=0,D=0
function x(){if(o)return l("canceled")
var i=Date.now()
if(a&&a.keys)for(var p=a.scoreFn||u,E=a.keys,A=E.length;g>=0;--g){for(var C=n[g],k=new Array(A),F=A-1;F>=0;--F)(R=c(C,N=E[F]))?(d(R)||(R=h.getPrepared(R)),k[F]=y(t,R,f)):k[F]=null
k.obj=C
var T=p(k)
if(null!==T&&!(T<v)&&(k.score=T,w<b?(m.add(k),++w):(++D,T>m.peek().score&&m.replaceTop(k)),g%1e3==0&&Date.now()-i>=10))return void(e?setImmediate(x):setTimeout(x))}else if(a&&a.key){for(var N=a.key;g>=0;--g)if((R=c(C=n[g],N))&&(d(R)||(R=h.getPrepared(R)),null!==(_=y(t,R,f))&&!(_.score<v)&&(_={target:_.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:_.score,indexes:_.indexes,obj:C},w<b?(m.add(_),++w):(++D,_.score>m.peek().score&&m.replaceTop(_)),g%1e3==0&&Date.now()-i>=10)))return void(e?setImmediate(x):setTimeout(x))}else for(;g>=0;--g){var R,_
if((R=n[g])&&(d(R)||(R=h.getPrepared(R)),null!==(_=y(t,R,f))&&!(_.score<v)&&(w<b?(m.add(_),++w):(++D,_.score>m.peek().score&&m.replaceTop(_)),g%1e3==0&&Date.now()-i>=10)))return void(e?setImmediate(x):setTimeout(x))}if(0===w)return s(r)
for(var O=new Array(w),S=w-1;S>=0;--S)O[S]=m.poll()
O.total=w+D,s(O)}e?setImmediate(x):x()}))
return s.cancel=function(){o=!0},s},highlight:function(e,t,n){if(null===e)return null
void 0===t&&(t="<b>"),void 0===n&&(n="</b>")
for(var r="",a=0,o=!1,i=e.target,s=i.length,l=e.indexes,u=0;u<s;++u){var c=i[u]
if(l[a]===u){if(o||(o=!0,r+=t),++a===l.length){r+=c+n+i.substr(u+1)
break}}else o&&(o=!1,r+=n)
r+=c}return r},prepare:function(e){if(e)return{target:e,_targetLowerCodes:h.prepareLowerCodes(e),_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSlow:function(e){if(e)return{target:e,_targetLowerCodes:h.prepareLowerCodes(e),_nextBeginningIndexes:h.prepareNextBeginningIndexes(e),score:null,indexes:null,obj:null}},prepareSearch:function(e){if(e)return h.prepareLowerCodes(e)},getPrepared:function(e){if(e.length>999)return h.prepare(e)
var n=t.get(e)
return void 0!==n||(n=h.prepare(e),t.set(e,n)),n},getPreparedSearch:function(e){if(e.length>999)return h.prepareSearch(e)
var t=n.get(e)
return void 0!==t||(t=h.prepareSearch(e),n.set(e,t)),t},algorithm:function(e,t,n){for(var r=t._targetLowerCodes,o=e.length,i=r.length,l=0,u=0,c=0,d=0;;){if(n===r[u]){if(a[d++]=u,++l===o)break
n=e[0===c?l:c===l?l+1:c===l-1?l-1:l]}if(++u>=i)for(;;){if(l<=1)return null
if(0===c){if(n===e[--l])continue
c=l}else{if(1===c)return null
if((n=e[1+(l=--c)])===e[l])continue}u=a[(d=l)-1]+1
break}}l=0
var p=0,f=!1,m=0,g=t._nextBeginningIndexes
null===g&&(g=t._nextBeginningIndexes=h.prepareNextBeginningIndexes(t.target))
var v=u=0===a[0]?0:g[a[0]-1]
if(u!==i)for(;;)if(u>=i){if(l<=0){if(++p>o-2)break
if(e[p]===e[p+1])continue
u=v
continue}--l,u=g[s[--m]]}else if(e[0===p?l:p===l?l+1:p===l-1?l-1:l]===r[u]){if(s[m++]=u,++l===o){f=!0
break}++u}else u=g[u]
if(f)var b=s,y=m
else b=a,y=d
for(var w=0,D=-1,x=0;x<o;++x)D!==(u=b[x])-1&&(w-=u),D=u
for(f?0!==p&&(w+=-20):(w*=1e3,0!==c&&(w+=-20)),w-=i-o,t.score=w,t.indexes=new Array(y),x=y-1;x>=0;--x)t.indexes[x]=b[x]
return t},algorithmNoTypo:function(e,t,n){for(var r=t._targetLowerCodes,o=e.length,i=r.length,l=0,u=0,c=0;;){if(n===r[u]){if(a[c++]=u,++l===o)break
n=e[l]}if(++u>=i)return null}l=0
var d=!1,p=0,f=t._nextBeginningIndexes
if(null===f&&(f=t._nextBeginningIndexes=h.prepareNextBeginningIndexes(t.target)),(u=0===a[0]?0:f[a[0]-1])!==i)for(;;)if(u>=i){if(l<=0)break;--l,u=f[s[--p]]}else if(e[l]===r[u]){if(s[p++]=u,++l===o){d=!0
break}++u}else u=f[u]
if(d)var m=s,g=p
else m=a,g=c
for(var v=0,b=-1,y=0;y<o;++y)b!==(u=m[y])-1&&(v-=u),b=u
for(d||(v*=1e3),v-=i-o,t.score=v,t.indexes=new Array(g),y=g-1;y>=0;--y)t.indexes[y]=m[y]
return t},prepareLowerCodes:function(e){for(var t=e.length,n=[],r=e.toLowerCase(),a=0;a<t;++a)n[a]=r.charCodeAt(a)
return n},prepareBeginningIndexes:function(e){for(var t=e.length,n=[],r=0,a=!1,o=!1,i=0;i<t;++i){var s=e.charCodeAt(i),l=s>=65&&s<=90,u=l||s>=97&&s<=122||s>=48&&s<=57,c=l&&!a||!o||!u
a=l,o=u,c&&(n[r++]=i)}return n},prepareNextBeginningIndexes:function(e){for(var t=e.length,n=h.prepareBeginningIndexes(e),r=[],a=n[0],o=0,i=0;i<t;++i)a>i?r[i]=a:(a=n[++o],r[i]=void 0===a?t:a)
return r},cleanup:l,new:o}
return h}()},e.exports?e.exports=n():t.fuzzysort=n()}(Ke)
var Je=Ke.exports,Xe={failedTests:[],defined:0,completed:0}
function Ze(e){return e?(e+="").replace(/['"<>&]/g,(function(e){switch(e){case"'":return"&#039;"
case'"':return"&quot;"
case"<":return"&lt;"
case">":return"&gt;"
case"&":return"&amp;"}})):""}!function(){if(m&&w){var e=Ve.config,t=[],n=!1,r=Object.prototype.hasOwnProperty,a=C({filter:void 0,module:void 0,moduleId:void 0,testId:void 0})
Ve.on("runStart",(function(e){Xe.defined=e.testCounts.total})),Ve.begin((function(){var t,n,o,i,s,l,p,f,v,C,T;(l=y("qunit"))&&(l.setAttribute("role","main"),l.innerHTML="<h1 id='qunit-header'>"+Ze(w.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar' role='navigation'></div>"+(!(t=Ve.config.testId)||t.length<=0?"":"<div id='qunit-filteredTest'>Rerunning selected tests: "+Ze(t.join(", "))+" <a id='qunit-clearFilter' href='"+Ze(a)+"'>Run all tests</a></div>")+"<h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>"),(n=y("qunit-header"))&&(n.innerHTML="<a href='"+Ze(a)+"'>"+n.innerHTML+"</a> "),(o=y("qunit-banner"))&&(o.className=""),C=y("qunit-tests"),(T=y("qunit-testresult"))&&T.parentNode.removeChild(T),C&&(C.innerHTML="",(T=w.createElement("p")).id="qunit-testresult",T.className="result",C.parentNode.insertBefore(T,C),T.innerHTML='<div id="qunit-testresult-display">Running...<br />&#160;</div><div id="qunit-testresult-controls"></div><div class="clearfix"></div>',f=y("qunit-testresult-controls")),f&&f.appendChild(((v=w.createElement("button")).id="qunit-abort-tests-button",v.innerHTML="Abort",u(v,"click",x),v)),(i=y("qunit-userAgent"))&&(i.innerHTML="",i.appendChild(w.createTextNode("QUnit "+Ve.version+"; "+D.userAgent))),(s=y("qunit-testrunner-toolbar"))&&(s.appendChild(((p=w.createElement("span")).innerHTML=function(){var t,n,a,o,i,s=!1,l=e.urlConfig,u=""
for(t=0;t<l.length;t++)if("string"==typeof(a=e.urlConfig[t])&&(a={id:a,label:a}),o=Ze(a.id),i=Ze(a.tooltip),a.value&&"string"!=typeof a.value){if(u+="<label for='qunit-urlconfig-"+o+"' title='"+i+"'>"+a.label+": </label><select id='qunit-urlconfig-"+o+"' name='"+o+"' title='"+i+"'><option></option>",Array.isArray(a.value))for(n=0;n<a.value.length;n++)u+="<option value='"+(o=Ze(a.value[n]))+"'"+(e[a.id]===a.value[n]?(s=!0)&&" selected='selected'":"")+">"+o+"</option>"
else for(n in a.value)r.call(a.value,n)&&(u+="<option value='"+Ze(n)+"'"+(e[a.id]===n?(s=!0)&&" selected='selected'":"")+">"+Ze(a.value[n])+"</option>")
e[a.id]&&!s&&(u+="<option value='"+(o=Ze(e[a.id]))+"' selected='selected' disabled='disabled'>"+o+"</option>"),u+="</select>"}else u+="<label for='qunit-urlconfig-"+o+"' title='"+i+"'><input id='qunit-urlconfig-"+o+"' name='"+o+"' type='checkbox'"+(a.value?" value='"+Ze(a.value)+"'":"")+(e[a.id]?" checked='checked'":"")+" title='"+i+"' />"+Ze(a.label)+"</label>"
return u}(),h(p,"qunit-url-config"),d(p.getElementsByTagName("input"),"change",A),d(p.getElementsByTagName("select"),"change",A),p)),s.appendChild(function(){var t,n,r,a,o=w.createElement("span")
return o.id="qunit-toolbar-filters",o.appendChild((t=w.createElement("form"),n=w.createElement("label"),r=w.createElement("input"),a=w.createElement("button"),h(t,"qunit-filter"),n.innerHTML="Filter: ",r.type="text",r.value=e.filter||"",r.name="filter",r.id="qunit-filter-input",a.innerHTML="Go",n.appendChild(r),t.appendChild(n),t.appendChild(w.createTextNode(" ")),t.appendChild(a),u(t,"submit",E),t)),o.appendChild(function(){var t,n,r,a=w.createElement("form"),o=w.createElement("label"),i=w.createElement("input"),s=w.createElement("div"),l=w.createElement("span"),d=w.createElement("button"),p=w.createElement("button"),f=w.createElement("label"),h=w.createElement("input"),v=w.createElement("ul"),y=!1
function D(){function e(t){var n=a.contains(t.target)
27!==t.keyCode&&n||(27===t.keyCode&&n&&i.focus(),s.style.display="none",c(w,"click",e),c(w,"keydown",e),i.value="",x())}"none"===s.style.display&&(s.style.display="block",u(w,"click",e),u(w,"keydown",e))}function x(){m.clearTimeout(r),r=m.setTimeout((function(){var t,n=""===(t=i.value.toLowerCase())?e.modules:Je.go(t,e.modules,{key:"namePrepared",threshold:-1e4}).map((function(e){return e.obj}))
v.innerHTML=F(n)}),200)}function A(e){var r,a,o=e&&e.target||h,s=v.getElementsByTagName("input"),l=[]
for(g(o.parentNode,"checked",o.checked),y=!1,o.checked&&o!==h&&(h.checked=!1,b(h.parentNode,"checked")),r=0;r<s.length;r++)a=s[r],e?o===h&&o.checked&&(a.checked=!1,b(a.parentNode,"checked")):g(a.parentNode,"checked",a.checked),y=y||a.checked!==a.defaultChecked,a.checked&&l.push(a.parentNode.textContent)
t.style.display=n.style.display=y?"":"none",i.placeholder=l.join(", ")||h.parentNode.textContent,i.title="Type to filter list. Current selection:\n"+(l.join("\n")||h.parentNode.textContent)}return i.id="qunit-modulefilter-search",i.autocomplete="off",u(i,"input",x),u(i,"input",D),u(i,"focus",D),u(i,"click",D),e.modules.forEach((function(e){return e.namePrepared=Je.prepare(e.name)})),o.id="qunit-modulefilter-search-container",o.innerHTML="Module: ",o.appendChild(i),d.textContent="Apply",d.style.display="none",p.textContent="Reset",p.type="reset",p.style.display="none",h.type="checkbox",h.checked=0===e.moduleId.length,f.className="clickable",e.moduleId.length&&(f.className="checked"),f.appendChild(h),f.appendChild(w.createTextNode("All modules")),l.id="qunit-modulefilter-actions",l.appendChild(d),l.appendChild(p),l.appendChild(f),t=l.firstChild,n=t.nextSibling,u(t,"click",k),v.id="qunit-modulefilter-dropdown-list",v.innerHTML=F(e.modules),s.id="qunit-modulefilter-dropdown",s.style.display="none",s.appendChild(l),s.appendChild(v),u(s,"change",A),A(),a.id="qunit-modulefilter",a.appendChild(o),a.appendChild(s),u(a,"submit",E),u(a,"reset",(function(){m.setTimeout(A)})),a}()),o}()),s.appendChild(w.createElement("div")).className="clearfix")})),Ve.on("runEnd",(function(t){var n,r,a,o=y("qunit-banner"),i=y("qunit-tests"),s=y("qunit-abort-tests-button"),l=e.stats.all-e.stats.bad,u=[t.testCounts.total," tests completed in ",t.runtime," milliseconds, with ",t.testCounts.failed," failed, ",t.testCounts.skipped," skipped, and ",t.testCounts.todo," todo.<br />","<span class='passed'>",l,"</span> assertions of <span class='total'>",e.stats.all,"</span> passed, <span class='failed'>",e.stats.bad,"</span> failed.",N(Xe.failedTests)].join("")
if(s&&s.disabled){u="Tests aborted after "+t.runtime+" milliseconds."
for(var c=0;c<i.children.length;c++)""!==(n=i.children[c]).className&&"running"!==n.className||(n.className="aborted",a=n.getElementsByTagName("ol")[0],(r=w.createElement("li")).className="fail",r.innerHTML="Test aborted.",a.appendChild(r))}!o||s&&!1!==s.disabled||(o.className="failed"===t.status?"qunit-fail":"qunit-pass"),s&&s.parentNode.removeChild(s),i&&(y("qunit-testresult-display").innerHTML=u),e.altertitle&&w.title&&(w.title=["failed"===t.status?"✖":"✔",w.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),e.scrolltop&&m.scrollTo&&m.scrollTo(0,0)})),Ve.testStart((function(e){var t,n
T(e.name,e.testId,e.module),(t=y("qunit-testresult-display"))&&(h(t,"running"),n=Ve.config.reorder&&e.previousFailure,t.innerHTML=[_(Xe),n?"Rerunning previously failed test: <br />":"Running: ",R(e.name,e.module),N(Xe.failedTests)].join(""))})),Ve.log((function(e){var t,n,a,o,i,s,l=!1,u=y("qunit-test-output-"+e.testId)
u&&(a="<span class='test-message'>"+(a=Ze(e.message)||(e.result?"okay":"failed"))+"</span>",a+="<span class='runtime'>@ "+e.runtime+" ms</span>",!e.result&&r.call(e,"expected")?(o=e.negative?"NOT "+Ve.dump.parse(e.expected):Ve.dump.parse(e.expected),i=Ve.dump.parse(e.actual),a+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+Ze(o)+"</pre></td></tr>",i!==o?(a+="<tr class='test-actual'><th>Result: </th><td><pre>"+Ze(i)+"</pre></td></tr>","number"==typeof e.actual&&"number"==typeof e.expected?isNaN(e.actual)||isNaN(e.expected)||(l=!0,s=((s=e.actual-e.expected)>0?"+":"")+s):"boolean"!=typeof e.actual&&"boolean"!=typeof e.expected&&(l=S(s=Ve.diff(o,i)).length!==S(o).length+S(i).length),l&&(a+="<tr class='test-diff'><th>Diff: </th><td><pre>"+s+"</pre></td></tr>")):-1!==o.indexOf("[object Array]")||-1!==o.indexOf("[object Object]")?a+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the depth of object is more than current max depth ("+Ve.config.maxDepth+").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to  run with a higher max depth or <a href='"+Ze(C({maxDepth:-1}))+"'>Rerun</a> without max depth.</p></td></tr>":a+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the expected and actual results have an equivalent serialization</td></tr>",e.source&&(a+="<tr class='test-source'><th>Source: </th><td><pre>"+Ze(e.source)+"</pre></td></tr>"),a+="</table>"):!e.result&&e.source&&(a+="<table><tr class='test-source'><th>Source: </th><td><pre>"+Ze(e.source)+"</pre></td></tr></table>"),t=u.getElementsByTagName("ol")[0],(n=w.createElement("li")).className=e.result?"pass":"fail",n.innerHTML=a,t.appendChild(n))})),Ve.testDone((function(r){var a,o,i,s,l,c,d,p,f,m=y("qunit-tests"),v=y("qunit-test-output-"+r.testId)
if(m&&v){b(v,"running"),s=r.failed>0?"failed":r.todo?"todo":r.skipped?"skipped":"passed",i=v.getElementsByTagName("ol")[0],l=r.passed,c=r.failed
var D=r.failed>0?r.todo:!r.todo
if(D?h(i,"qunit-collapsed"):(Xe.failedTests.push(r.testId),e.collapse&&(n?h(i,"qunit-collapsed"):n=!0)),d=c?"<b class='failed'>"+c+"</b>, <b class='passed'>"+l+"</b>, ":"",(a=v.firstChild).innerHTML+=" <b class='counts'>("+d+r.assertions.length+")</b>",Xe.completed++,r.skipped)v.className="skipped",(p=w.createElement("em")).className="qunit-skipped-label",p.innerHTML="skipped",v.insertBefore(p,a)
else{if(u(a,"click",(function(){g(i,"qunit-collapsed")})),v.className=D?"pass":"fail",r.todo){var x=w.createElement("em")
x.className="qunit-todo-label",x.innerHTML="todo",v.className+=" todo",v.insertBefore(x,a)}(o=w.createElement("span")).className="runtime",o.innerHTML=r.runtime+" ms",v.insertBefore(o,i)}r.source&&((f=w.createElement("p")).innerHTML="<strong>Source: </strong>"+Ze(r.source),h(f,"qunit-source"),D&&h(f,"qunit-collapsed"),u(a,"click",(function(){g(f,"qunit-collapsed")})),v.appendChild(f)),e.hidepassed&&("passed"===s||r.skipped)&&(t.push(v),m.removeChild(v))}})),Ve.on("error",(function(e){var t=T("global failure")
if(t){var n=Ze(j(e))
n="<span class='test-message'>"+n+"</span>",e&&e.stack&&(n+="<table><tr class='test-source'><th>Source: </th><td><pre>"+Ze(e.stack)+"</pre></td></tr></table>")
var r=t.getElementsByTagName("ol")[0],a=w.createElement("li")
a.className="fail",a.innerHTML=n,r.appendChild(a),t.className="fail"}}))
var o,i=(o=m.phantom)&&o.version&&o.version.major>0
i&&v.warn("Support for PhantomJS is deprecated and will be removed in QUnit 3.0."),i||"complete"!==w.readyState?u(m,"load",Ve.load):Ve.load()
var s=m.onerror
m.onerror=function(t,n,r,a,o){var i=!1
if(s){for(var l=arguments.length,u=new Array(l>5?l-5:0),c=5;c<l;c++)u[c-5]=arguments[c]
i=s.call.apply(s,[this,t,n,r,a,o].concat(u))}if(!0!==i){if(e.current&&e.current.ignoreGlobalErrors)return!0
var d=o||new Error(t)
!d.stack&&n&&r&&(d.stack="".concat(n,":").concat(r)),Ve.onUncaughtException(d)}return i},m.addEventListener("unhandledrejection",(function(e){Ve.onUncaughtException(e.reason)}))}function l(e){return"function"==typeof e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function u(e,t,n){e.addEventListener(t,n,!1)}function c(e,t,n){e.removeEventListener(t,n,!1)}function d(e,t,n){for(var r=e.length;r--;)u(e[r],t,n)}function f(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>=0}function h(e,t){f(e,t)||(e.className+=(e.className?" ":"")+t)}function g(e,t,n){n||void 0===n&&!f(e,t)?h(e,t):b(e,t)}function b(e,t){for(var n=" "+e.className+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ")
e.className=l(n)}function y(e){return w.getElementById&&w.getElementById(e)}function x(){var e=y("qunit-abort-tests-button")
return e&&(e.disabled=!0,e.innerHTML="Aborting..."),Ve.config.queue.length=0,!1}function E(e){var t=y("qunit-filter-input")
return t.value=l(t.value),k(),e&&e.preventDefault&&e.preventDefault(),!1}function A(){var n,r,a,o=this,i={}
if(r="selectedIndex"in o?o.options[o.selectedIndex].value||void 0:o.checked?o.defaultValue||!0:void 0,i[o.name]=r,n=C(i),"hidepassed"===o.name&&"replaceState"in m.history){if(Ve.urlParams[o.name]=r,e[o.name]=r||!1,a=y("qunit-tests")){var s=a.children.length,l=a.children
if(o.checked){for(var u=0;u<s;u++){var c=l[u],d=c?c.className:"",f=d.indexOf("pass")>-1,h=d.indexOf("skipped")>-1;(f||h)&&t.push(c)}var g,v=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!n){if(Array.isArray(e)||(n=p(e))){n&&(e=n)
var r=0,a=function(){}
return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1
return{s:function(){n=n.call(e)},n:function(){var e=n.next()
return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}(t)
try{for(v.s();!(g=v.n()).done;){var b=g.value
a.removeChild(b)}}catch(e){v.e(e)}finally{v.f()}}else for(;null!=(c=t.pop());)a.appendChild(c)}m.history.replaceState(null,"",n)}else m.location=n}function C(e){var t,n,a,o="?",i=m.location
for(t in e=O(O({},Ve.urlParams),e))if(r.call(e,t)&&void 0!==e[t])for(n=[].concat(e[t]),a=0;a<n.length;a++)o+=encodeURIComponent(t),!0!==n[a]&&(o+="="+encodeURIComponent(n[a])),o+="&"
return i.protocol+"//"+i.host+i.pathname+o.slice(0,-1)}function k(){var e,t=[],n=y("qunit-modulefilter-dropdown-list").getElementsByTagName("input"),r=y("qunit-filter-input").value
for(e=0;e<n.length;e++)n[e].checked&&t.push(n[e].value)
m.location=C({filter:""===r?void 0:r,moduleId:0===t.length?void 0:t,module:void 0,testId:void 0})}function F(t){var n,r,a=""
for(n=0;n<t.length;n++)""!==t[n].name&&(a+="<li><label class='clickable"+((r=e.moduleId.indexOf(t[n].moduleId)>-1)?" checked":"")+"'><input type='checkbox' value='"+t[n].moduleId+"'"+(r?" checked='checked'":"")+" />"+Ze(t[n].name)+"</label></li>")
return a}function T(e,t,n){var r,a,o,i,s=y("qunit-tests")
if(s)return(r=w.createElement("strong")).innerHTML=R(e,n),(o=w.createElement("li")).appendChild(r),void 0!==t&&((a=w.createElement("a")).innerHTML="Rerun",a.href=C({testId:t}),o.id="qunit-test-output-"+t,o.appendChild(a)),(i=w.createElement("ol")).className="qunit-assert-list",o.appendChild(i),s.appendChild(o),o}function N(e){return 0===e.length?"":["<br /><a href='"+Ze(C({testId:e}))+"'>",1===e.length?"Rerun 1 failed test":"Rerun "+e.length+" failed tests","</a>"].join("")}function R(e,t){var n=""
return t&&(n="<span class='module-name'>"+Ze(t)+"</span>: "),n+"<span class='test-name'>"+Ze(e)+"</span>"}function _(e){return[e.completed," / ",e.defined," tests completed.<br />"].join("")}function S(e){return e.replace(/<\/?[^>]+(>|$)/g,"").replace(/&quot;/g,"").replace(/\s+/g,"")}}(),Ve.diff=function(){function e(){}var t=-1,n=Object.prototype.hasOwnProperty
return e.prototype.DiffMain=function(e,t,n){var r,a,o,i,s,l
if(r=(new Date).getTime()+1e3,null===e||null===t)throw new Error("Null input. (DiffMain)")
return e===t?e?[[0,e]]:[]:(void 0===n&&(n=!0),a=n,o=this.diffCommonPrefix(e,t),i=e.substring(0,o),e=e.substring(o),t=t.substring(o),o=this.diffCommonSuffix(e,t),s=e.substring(e.length-o),e=e.substring(0,e.length-o),t=t.substring(0,t.length-o),l=this.diffCompute(e,t,a,r),i&&l.unshift([0,i]),s&&l.push([0,s]),this.diffCleanupMerge(l),l)},e.prototype.diffCleanupEfficiency=function(e){var n,r,a,o,i,s,l,u,c
for(n=!1,r=[],a=0,o=null,i=0,s=!1,l=!1,u=!1,c=!1;i<e.length;)0===e[i][0]?(e[i][1].length<4&&(u||c)?(r[a++]=i,s=u,l=c,o=e[i][1]):(a=0,o=null),u=c=!1):(e[i][0]===t?c=!0:u=!0,o&&(s&&l&&u&&c||o.length<2&&s+l+u+c===3)&&(e.splice(r[a-1],0,[t,o]),e[r[a-1]+1][0]=1,a--,o=null,s&&l?(u=c=!0,a=0):(i=--a>0?r[a-1]:-1,u=c=!1),n=!0)),i++
n&&this.diffCleanupMerge(e)},e.prototype.diffPrettyHtml=function(e){var n,r,a,o=[]
for(a=0;a<e.length;a++)switch(n=e[a][0],r=e[a][1],n){case 1:o[a]="<ins>"+Ze(r)+"</ins>"
break
case t:o[a]="<del>"+Ze(r)+"</del>"
break
case 0:o[a]="<span>"+Ze(r)+"</span>"}return o.join("")},e.prototype.diffCommonPrefix=function(e,t){var n,r,a,o
if(!e||!t||e.charAt(0)!==t.charAt(0))return 0
for(a=0,n=r=Math.min(e.length,t.length),o=0;a<n;)e.substring(o,n)===t.substring(o,n)?o=a=n:r=n,n=Math.floor((r-a)/2+a)
return n},e.prototype.diffCommonSuffix=function(e,t){var n,r,a,o
if(!e||!t||e.charAt(e.length-1)!==t.charAt(t.length-1))return 0
for(a=0,n=r=Math.min(e.length,t.length),o=0;a<n;)e.substring(e.length-n,e.length-o)===t.substring(t.length-n,t.length-o)?o=a=n:r=n,n=Math.floor((r-a)/2+a)
return n},e.prototype.diffCompute=function(e,n,r,a){var o,i,s,l,u,c,d,p,f,h,m,g
return e?n?(i=e.length>n.length?e:n,s=e.length>n.length?n:e,-1!==(l=i.indexOf(s))?(o=[[1,i.substring(0,l)],[0,s],[1,i.substring(l+s.length)]],e.length>n.length&&(o[0][0]=o[2][0]=t),o):1===s.length?[[t,e],[1,n]]:(u=this.diffHalfMatch(e,n))?(c=u[0],p=u[1],d=u[2],f=u[3],h=u[4],m=this.DiffMain(c,d,r,a),g=this.DiffMain(p,f,r,a),m.concat([[0,h]],g)):r&&e.length>100&&n.length>100?this.diffLineMode(e,n,a):this.diffBisect(e,n,a)):[[t,e]]:[[1,n]]},e.prototype.diffHalfMatch=function(e,t){var n,r,a,o,i,s,l,u,c,d
if(n=e.length>t.length?e:t,r=e.length>t.length?t:e,n.length<4||2*r.length<n.length)return null
function p(e,t,n){var r,o,i,s,l,u,c,d,p
for(r=e.substring(n,n+Math.floor(e.length/4)),o=-1,i="";-1!==(o=t.indexOf(r,o+1));)s=a.diffCommonPrefix(e.substring(n),t.substring(o)),l=a.diffCommonSuffix(e.substring(0,n),t.substring(0,o)),i.length<l+s&&(i=t.substring(o-l,o)+t.substring(o,o+s),u=e.substring(0,n-l),c=e.substring(n+s),d=t.substring(0,o-l),p=t.substring(o+s))
return 2*i.length>=e.length?[u,c,d,p,i]:null}return a=this,u=p(n,r,Math.ceil(n.length/4)),c=p(n,r,Math.ceil(n.length/2)),u||c?(d=c?u&&u[4].length>c[4].length?u:c:u,e.length>t.length?(o=d[0],l=d[1],s=d[2],i=d[3]):(s=d[0],i=d[1],o=d[2],l=d[3]),[o,l,s,i,d[4]]):null},e.prototype.diffLineMode=function(e,n,r){var a,o,i,s,l,u,c,d,p
for(e=(a=this.diffLinesToChars(e,n)).chars1,n=a.chars2,i=a.lineArray,o=this.DiffMain(e,n,!1,r),this.diffCharsToLines(o,i),this.diffCleanupSemantic(o),o.push([0,""]),s=0,u=0,l=0,d="",c="";s<o.length;){switch(o[s][0]){case 1:l++,c+=o[s][1]
break
case t:u++,d+=o[s][1]
break
case 0:if(u>=1&&l>=1){for(o.splice(s-u-l,u+l),s=s-u-l,p=(a=this.DiffMain(d,c,!1,r)).length-1;p>=0;p--)o.splice(s,0,a[p])
s+=a.length}l=0,u=0,d="",c=""}s++}return o.pop(),o},e.prototype.diffBisect=function(e,n,r){var a,o,i,s,l,u,c,d,p,f,h,m,g,v,b,y,w,D,x,E,A,C,k
for(a=e.length,o=n.length,s=i=Math.ceil((a+o)/2),l=2*i,u=new Array(l),c=new Array(l),d=0;d<l;d++)u[d]=-1,c[d]=-1
for(u[s+1]=0,c[s+1]=0,f=(p=a-o)%2!=0,h=0,m=0,g=0,v=0,A=0;A<i&&!((new Date).getTime()>r);A++){for(C=-A+h;C<=A-m;C+=2){for(y=s+C,x=(w=C===-A||C!==A&&u[y-1]<u[y+1]?u[y+1]:u[y-1]+1)-C;w<a&&x<o&&e.charAt(w)===n.charAt(x);)w++,x++
if(u[y]=w,w>a)m+=2
else if(x>o)h+=2
else if(f&&(b=s+p-C)>=0&&b<l&&-1!==c[b]&&w>=(D=a-c[b]))return this.diffBisectSplit(e,n,w,x,r)}for(k=-A+g;k<=A-v;k+=2){for(b=s+k,E=(D=k===-A||k!==A&&c[b-1]<c[b+1]?c[b+1]:c[b-1]+1)-k;D<a&&E<o&&e.charAt(a-D-1)===n.charAt(o-E-1);)D++,E++
if(c[b]=D,D>a)v+=2
else if(E>o)g+=2
else if(!f&&(y=s+p-k)>=0&&y<l&&-1!==u[y]&&(x=s+(w=u[y])-y,w>=(D=a-D)))return this.diffBisectSplit(e,n,w,x,r)}}return[[t,e],[1,n]]},e.prototype.diffBisectSplit=function(e,t,n,r,a){var o,i,s,l,u,c
return o=e.substring(0,n),s=t.substring(0,r),i=e.substring(n),l=t.substring(r),u=this.DiffMain(o,s,!1,a),c=this.DiffMain(i,l,!1,a),u.concat(c)},e.prototype.diffCleanupSemantic=function(e){var n,r,a,o,i,s,l,u,c,d,p,f,h
for(n=!1,r=[],a=0,o=null,i=0,u=0,c=0,s=0,l=0;i<e.length;)0===e[i][0]?(r[a++]=i,u=s,c=l,s=0,l=0,o=e[i][1]):(1===e[i][0]?s+=e[i][1].length:l+=e[i][1].length,o&&o.length<=Math.max(u,c)&&o.length<=Math.max(s,l)&&(e.splice(r[a-1],0,[t,o]),e[r[a-1]+1][0]=1,a--,i=--a>0?r[a-1]:-1,u=0,c=0,s=0,l=0,o=null,n=!0)),i++
for(n&&this.diffCleanupMerge(e),i=1;i<e.length;)e[i-1][0]===t&&1===e[i][0]&&(d=e[i-1][1],p=e[i][1],(f=this.diffCommonOverlap(d,p))>=(h=this.diffCommonOverlap(p,d))?(f>=d.length/2||f>=p.length/2)&&(e.splice(i,0,[0,p.substring(0,f)]),e[i-1][1]=d.substring(0,d.length-f),e[i+1][1]=p.substring(f),i++):(h>=d.length/2||h>=p.length/2)&&(e.splice(i,0,[0,d.substring(0,h)]),e[i-1][0]=1,e[i-1][1]=p.substring(0,p.length-h),e[i+1][0]=t,e[i+1][1]=d.substring(h),i++),i++),i++},e.prototype.diffCommonOverlap=function(e,t){var n,r,a,o,i,s,l
if(n=e.length,r=t.length,0===n||0===r)return 0
if(n>r?e=e.substring(n-r):n<r&&(t=t.substring(0,n)),a=Math.min(n,r),e===t)return a
for(o=0,i=1;;){if(s=e.substring(a-i),-1===(l=t.indexOf(s)))return o
i+=l,0!==l&&e.substring(a-i)!==t.substring(0,i)||(o=i,i++)}},e.prototype.diffLinesToChars=function(e,t){var r,a
function o(e){var t,o,i,s,l
for(t="",o=0,i=-1,s=r.length;i<e.length-1;)-1===(i=e.indexOf("\n",o))&&(i=e.length-1),l=e.substring(o,i+1),o=i+1,n.call(a,l)?t+=String.fromCharCode(a[l]):(t+=String.fromCharCode(s),a[l]=s,r[s++]=l)
return t}return a={},(r=[])[0]="",{chars1:o(e),chars2:o(t),lineArray:r}},e.prototype.diffCharsToLines=function(e,t){var n,r,a,o
for(n=0;n<e.length;n++){for(r=e[n][1],a=[],o=0;o<r.length;o++)a[o]=t[r.charCodeAt(o)]
e[n][1]=a.join("")}},e.prototype.diffCleanupMerge=function(e){var n,r,a,o,i,s,l,u
for(e.push([0,""]),n=0,r=0,a=0,i="",o="";n<e.length;)switch(e[n][0]){case 1:a++,o+=e[n][1],n++
break
case t:r++,i+=e[n][1],n++
break
case 0:r+a>1?(0!==r&&0!==a&&(0!==(s=this.diffCommonPrefix(o,i))&&(n-r-a>0&&0===e[n-r-a-1][0]?e[n-r-a-1][1]+=o.substring(0,s):(e.splice(0,0,[0,o.substring(0,s)]),n++),o=o.substring(s),i=i.substring(s)),0!==(s=this.diffCommonSuffix(o,i))&&(e[n][1]=o.substring(o.length-s)+e[n][1],o=o.substring(0,o.length-s),i=i.substring(0,i.length-s))),0===r?e.splice(n-a,r+a,[1,o]):0===a?e.splice(n-r,r+a,[t,i]):e.splice(n-r-a,r+a,[t,i],[1,o]),n=n-r-a+(r?1:0)+(a?1:0)+1):0!==n&&0===e[n-1][0]?(e[n-1][1]+=e[n][1],e.splice(n,1)):n++,a=0,r=0,i="",o=""}for(""===e[e.length-1][1]&&e.pop(),l=!1,n=1;n<e.length-1;)0===e[n-1][0]&&0===e[n+1][0]&&((u=e[n][1]).substring(u.length-e[n-1][1].length)===e[n-1][1]?(e[n][1]=e[n-1][1]+e[n][1].substring(0,e[n][1].length-e[n-1][1].length),e[n+1][1]=e[n-1][1]+e[n+1][1],e.splice(n-1,1),l=!0):u.substring(0,e[n+1][1].length)===e[n+1][1]&&(e[n-1][1]+=e[n+1][1],e[n][1]=e[n][1].substring(e[n+1][1].length)+e[n+1][1],e.splice(n+1,1),l=!0)),n++
l&&this.diffCleanupMerge(e)},function(t,n){var r,a
return a=(r=new e).DiffMain(t,n),r.diffCleanupEfficiency(a),r.diffPrettyHtml(a)}}()}()}}])
