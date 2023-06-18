function MN(t,e){return e.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in t)){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}})}),Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}const $N=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};$N();var T={exports:{}},ye={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var o0=Object.getOwnPropertySymbols,FN=Object.prototype.hasOwnProperty,UN=Object.prototype.propertyIsEnumerable;function VN(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function jN(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var bT=jN()?Object.assign:function(t,e){for(var n,r=VN(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)FN.call(n,o)&&(r[o]=n[o]);if(o0){i=o0(n);for(var a=0;a<i.length;a++)UN.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg=bT,Ao=60103,AT=60106;ye.Fragment=60107;ye.StrictMode=60108;ye.Profiler=60114;var NT=60109,RT=60110,PT=60112;ye.Suspense=60113;var OT=60115,DT=60116;if(typeof Symbol=="function"&&Symbol.for){var Cn=Symbol.for;Ao=Cn("react.element"),AT=Cn("react.portal"),ye.Fragment=Cn("react.fragment"),ye.StrictMode=Cn("react.strict_mode"),ye.Profiler=Cn("react.profiler"),NT=Cn("react.provider"),RT=Cn("react.context"),PT=Cn("react.forward_ref"),ye.Suspense=Cn("react.suspense"),OT=Cn("react.memo"),DT=Cn("react.lazy")}var a0=typeof Symbol=="function"&&Symbol.iterator;function BN(t){return t===null||typeof t!="object"?null:(t=a0&&t[a0]||t["@@iterator"],typeof t=="function"?t:null)}function Hl(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var LT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},MT={};function No(t,e,n){this.props=t,this.context=e,this.refs=MT,this.updater=n||LT}No.prototype.isReactComponent={};No.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(Hl(85));this.updater.enqueueSetState(this,t,e,"setState")};No.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $T(){}$T.prototype=No.prototype;function Wg(t,e,n){this.props=t,this.context=e,this.refs=MT,this.updater=n||LT}var qg=Wg.prototype=new $T;qg.constructor=Wg;Hg(qg,No.prototype);qg.isPureReactComponent=!0;var Kg={current:null},FT=Object.prototype.hasOwnProperty,UT={key:!0,ref:!0,__self:!0,__source:!0};function VT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)FT.call(e,r)&&!UT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ao,type:t,key:s,ref:o,props:i,_owner:Kg.current}}function zN(t,e){return{$$typeof:Ao,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gg(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ao}function HN(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var l0=/\/+/g;function ff(t,e){return typeof t=="object"&&t!==null&&t.key!=null?HN(""+t.key):e.toString(36)}function ac(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ao:case AT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ff(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(l0,"$&/")+"/"),ac(i,e,n,"",function(u){return u})):i!=null&&(Gg(i)&&(i=zN(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(l0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ff(s,a);o+=ac(s,e,n,l,i)}else if(l=BN(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ff(s,a++),o+=ac(s,e,n,l,i);else if(s==="object")throw e=""+t,Error(Hl(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function Pu(t,e,n){if(t==null)return t;var r=[],i=0;return ac(t,r,"","",function(s){return e.call(n,s,i++)}),r}function WN(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var jT={current:null};function wr(){var t=jT.current;if(t===null)throw Error(Hl(321));return t}var qN={ReactCurrentDispatcher:jT,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Kg,IsSomeRendererActing:{current:!1},assign:Hg};ye.Children={map:Pu,forEach:function(t,e,n){Pu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pu(t,function(){e++}),e},toArray:function(t){return Pu(t,function(e){return e})||[]},only:function(t){if(!Gg(t))throw Error(Hl(143));return t}};ye.Component=No;ye.PureComponent=Wg;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qN;ye.cloneElement=function(t,e,n){if(t==null)throw Error(Hl(267,t));var r=Hg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)FT.call(e,l)&&!UT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ao,type:t.type,key:i,ref:s,props:r,_owner:o}};ye.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:RT,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:NT,_context:t},t.Consumer=t};ye.createElement=VT;ye.createFactory=function(t){var e=VT.bind(null,t);return e.type=t,e};ye.createRef=function(){return{current:null}};ye.forwardRef=function(t){return{$$typeof:PT,render:t}};ye.isValidElement=Gg;ye.lazy=function(t){return{$$typeof:DT,_payload:{_status:-1,_result:t},_init:WN}};ye.memo=function(t,e){return{$$typeof:OT,type:t,compare:e===void 0?null:e}};ye.useCallback=function(t,e){return wr().useCallback(t,e)};ye.useContext=function(t,e){return wr().useContext(t,e)};ye.useDebugValue=function(){};ye.useEffect=function(t,e){return wr().useEffect(t,e)};ye.useImperativeHandle=function(t,e,n){return wr().useImperativeHandle(t,e,n)};ye.useLayoutEffect=function(t,e){return wr().useLayoutEffect(t,e)};ye.useMemo=function(t,e){return wr().useMemo(t,e)};ye.useReducer=function(t,e,n){return wr().useReducer(t,e,n)};ye.useRef=function(t){return wr().useRef(t)};ye.useState=function(t){return wr().useState(t)};ye.version="17.0.2";T.exports=ye;var $=T.exports,Bp=MN({__proto__:null,default:$},[T.exports]),Qg={exports:{}},wn={},BT={exports:{}},zT={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var l=null,u=null,c=function(){if(l!==null)try{var I=t.unstable_now();l(!0,I),l=null}catch(P){throw setTimeout(c,0),P}};e=function(I){l!==null?setTimeout(e,0,I):(l=I,setTimeout(c,0))},n=function(I,P){u=setTimeout(I,P)},r=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var h=window.setTimeout,d=window.clearTimeout;if(typeof console!="undefined"){var f=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof f!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var y=!1,v=null,p=-1,m=5,g=0;t.unstable_shouldYield=function(){return t.unstable_now()>=g},i=function(){},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):m=0<I?Math.floor(1e3/I):5};var _=new MessageChannel,E=_.port2;_.port1.onmessage=function(){if(v!==null){var I=t.unstable_now();g=I+m;try{v(!0,I)?E.postMessage(null):(y=!1,v=null)}catch(P){throw E.postMessage(null),P}}else y=!1},e=function(I){v=I,y||(y=!0,E.postMessage(null))},n=function(I,P){p=h(function(){I(t.unstable_now())},P)},r=function(){d(p),p=-1}}function k(I,P){var j=I.length;I.push(P);e:for(;;){var oe=j-1>>>1,fe=I[oe];if(fe!==void 0&&0<N(fe,P))I[oe]=P,I[j]=fe,j=oe;else break e}}function C(I){return I=I[0],I===void 0?null:I}function b(I){var P=I[0];if(P!==void 0){var j=I.pop();if(j!==P){I[0]=j;e:for(var oe=0,fe=I.length;oe<fe;){var Ne=2*(oe+1)-1,ke=I[Ne],it=Ne+1,Te=I[it];if(ke!==void 0&&0>N(ke,j))Te!==void 0&&0>N(Te,ke)?(I[oe]=Te,I[it]=j,oe=it):(I[oe]=ke,I[Ne]=j,oe=Ne);else if(Te!==void 0&&0>N(Te,j))I[oe]=Te,I[it]=j,oe=it;else break e}}return P}return null}function N(I,P){var j=I.sortIndex-P.sortIndex;return j!==0?j:I.id-P.id}var A=[],X=[],ue=1,H=null,V=3,se=!1,te=!1,Ee=!1;function Ue(I){for(var P=C(X);P!==null;){if(P.callback===null)b(X);else if(P.startTime<=I)b(X),P.sortIndex=P.expirationTime,k(A,P);else break;P=C(X)}}function _e(I){if(Ee=!1,Ue(I),!te)if(C(A)!==null)te=!0,e(Y);else{var P=C(X);P!==null&&n(_e,P.startTime-I)}}function Y(I,P){te=!1,Ee&&(Ee=!1,r()),se=!0;var j=V;try{for(Ue(P),H=C(A);H!==null&&(!(H.expirationTime>P)||I&&!t.unstable_shouldYield());){var oe=H.callback;if(typeof oe=="function"){H.callback=null,V=H.priorityLevel;var fe=oe(H.expirationTime<=P);P=t.unstable_now(),typeof fe=="function"?H.callback=fe:H===C(A)&&b(A),Ue(P)}else b(A);H=C(A)}if(H!==null)var Ne=!0;else{var ke=C(X);ke!==null&&n(_e,ke.startTime-P),Ne=!1}return Ne}finally{H=null,V=j,se=!1}}var z=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){te||se||(te=!0,e(Y))},t.unstable_getCurrentPriorityLevel=function(){return V},t.unstable_getFirstCallbackNode=function(){return C(A)},t.unstable_next=function(I){switch(V){case 1:case 2:case 3:var P=3;break;default:P=V}var j=V;V=P;try{return I()}finally{V=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=z,t.unstable_runWithPriority=function(I,P){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var j=V;V=I;try{return P()}finally{V=j}},t.unstable_scheduleCallback=function(I,P,j){var oe=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?oe+j:oe):j=oe,I){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=j+fe,I={id:ue++,callback:P,priorityLevel:I,startTime:j,expirationTime:fe,sortIndex:-1},j>oe?(I.sortIndex=j,k(X,I),C(A)===null&&I===C(X)&&(Ee?r():Ee=!0,n(_e,j-oe))):(I.sortIndex=fe,k(A,I),te||se||(te=!0,e(Y))),I},t.unstable_wrapCallback=function(I){var P=V;return function(){var j=V;V=P;try{return I.apply(this,arguments)}finally{V=j}}}})(zT);BT.exports=zT;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh=T.exports,$e=bT,ht=BT.exports;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Gh)throw Error(O(227));var HT=new Set,il={};function ls(t,e){ao(t,e),ao(t+"Capture",e)}function ao(t,e){for(il[t]=e,t=0;t<e.length;t++)HT.add(e[t])}var mr=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),KN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,u0=Object.prototype.hasOwnProperty,c0={},h0={};function GN(t){return u0.call(h0,t)?!0:u0.call(c0,t)?!1:KN.test(t)?h0[t]=!0:(c0[t]=!0,!1)}function QN(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function YN(t,e,n,r){if(e===null||typeof e=="undefined"||QN(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Tt[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Tt[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Tt[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Tt[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Tt[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Tt[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Tt[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Tt[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Tt[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yg=/[\-:]([a-z])/g;function Xg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yg,Xg);Tt[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yg,Xg);Tt[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yg,Xg);Tt[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Tt[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Tt.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Tt[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jg(t,e,n,r){var i=Tt.hasOwnProperty(e)?Tt[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(YN(e,n,i,r)&&(n=null),r||i===null?GN(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var us=Gh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ta=60103,Ii=60106,br=60107,Zg=60108,La=60114,ey=60109,ty=60110,Qh=60112,Ma=60113,Oc=60120,Yh=60115,ny=60116,ry=60121,iy=60128,WT=60129,sy=60130,zp=60131;if(typeof Symbol=="function"&&Symbol.for){var st=Symbol.for;Ta=st("react.element"),Ii=st("react.portal"),br=st("react.fragment"),Zg=st("react.strict_mode"),La=st("react.profiler"),ey=st("react.provider"),ty=st("react.context"),Qh=st("react.forward_ref"),Ma=st("react.suspense"),Oc=st("react.suspense_list"),Yh=st("react.memo"),ny=st("react.lazy"),ry=st("react.block"),st("react.scope"),iy=st("react.opaque.id"),WT=st("react.debug_trace_mode"),sy=st("react.offscreen"),zp=st("react.legacy_hidden")}var d0=typeof Symbol=="function"&&Symbol.iterator;function ea(t){return t===null||typeof t!="object"?null:(t=d0&&t[d0]||t["@@iterator"],typeof t=="function"?t:null)}var pf;function Ca(t){if(pf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pf=e&&e[1]||""}return`
`+pf+t}var mf=!1;function Ou(t,e){if(!t||mf)return"";mf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{mf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ca(t):""}function XN(t){switch(t.tag){case 5:return Ca(t.type);case 16:return Ca("Lazy");case 13:return Ca("Suspense");case 19:return Ca("SuspenseList");case 0:case 2:case 15:return t=Ou(t.type,!1),t;case 11:return t=Ou(t.type.render,!1),t;case 22:return t=Ou(t.type._render,!1),t;case 1:return t=Ou(t.type,!0),t;default:return""}}function $s(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case br:return"Fragment";case Ii:return"Portal";case La:return"Profiler";case Zg:return"StrictMode";case Ma:return"Suspense";case Oc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ty:return(t.displayName||"Context")+".Consumer";case ey:return(t._context.displayName||"Context")+".Provider";case Qh:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case Yh:return $s(t.type);case ry:return $s(t._render);case ny:e=t._payload,t=t._init;try{return $s(t(e))}catch{}}return null}function ei(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function qT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function JN(t){var e=qT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Du(t){t._valueTracker||(t._valueTracker=JN(t))}function KT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Dc(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hp(t,e){var n=e.checked;return $e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function f0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ei(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function GT(t,e){e=e.checked,e!=null&&Jg(t,"checked",e,!1)}function Wp(t,e){GT(t,e);var n=ei(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qp(t,e.type,n):e.hasOwnProperty("defaultValue")&&qp(t,e.type,ei(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function p0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qp(t,e,n){(e!=="number"||Dc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function ZN(t){var e="";return Gh.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function Kp(t,e){return t=$e({children:void 0},e),(e=ZN(e.children))&&(t.children=e),t}function Fs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ei(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Gp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return $e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function m0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(O(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(O(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ei(n)}}function QT(t,e){var n=ei(e.value),r=ei(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function g0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var Qp={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function YT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?YT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Lu,XT=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==Qp.svg||"innerHTML"in t)t.innerHTML=e;else{for(Lu=Lu||document.createElement("div"),Lu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Lu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function sl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $a={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eR=["Webkit","ms","Moz","O"];Object.keys($a).forEach(function(t){eR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$a[e]=$a[t]})});function JT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$a.hasOwnProperty(t)&&$a[t]?(""+e).trim():e+"px"}function ZT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=JT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var tR=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xp(t,e){if(e){if(tR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function Jp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function oy(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zp=null,Us=null,Vs=null;function y0(t){if(t=ql(t)){if(typeof Zp!="function")throw Error(O(280));var e=t.stateNode;e&&(e=nd(e),Zp(t.stateNode,t.type,e))}}function eC(t){Us?Vs?Vs.push(t):Vs=[t]:Us=t}function tC(){if(Us){var t=Us,e=Vs;if(Vs=Us=null,y0(t),e)for(t=0;t<e.length;t++)y0(e[t])}}function ay(t,e){return t(e)}function nC(t,e,n,r,i){return t(e,n,r,i)}function ly(){}var rC=ay,ki=!1,gf=!1;function uy(){(Us!==null||Vs!==null)&&(ly(),tC())}function nR(t,e,n){if(gf)return t(e,n);gf=!0;try{return rC(t,e,n)}finally{gf=!1,uy()}}function ol(t,e){var n=t.stateNode;if(n===null)return null;var r=nd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(O(231,e,typeof n));return n}var em=!1;if(mr)try{var ta={};Object.defineProperty(ta,"passive",{get:function(){em=!0}}),window.addEventListener("test",ta,ta),window.removeEventListener("test",ta,ta)}catch{em=!1}function rR(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Fa=!1,Lc=null,Mc=!1,tm=null,iR={onError:function(t){Fa=!0,Lc=t}};function sR(t,e,n,r,i,s,o,a,l){Fa=!1,Lc=null,rR.apply(iR,arguments)}function oR(t,e,n,r,i,s,o,a,l){if(sR.apply(this,arguments),Fa){if(Fa){var u=Lc;Fa=!1,Lc=null}else throw Error(O(198));Mc||(Mc=!0,tm=u)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function iC(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function v0(t){if(cs(t)!==t)throw Error(O(188))}function aR(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(O(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return v0(i),t;if(s===r)return v0(i),e;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?t:e}function sC(t){if(t=aR(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function _0(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var oC,cy,aC,lC,nm=!1,Un=[],jr=null,Br=null,zr=null,al=new Map,ll=new Map,na=[],w0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rm(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function E0(t,e){switch(t){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":al.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ll.delete(e.pointerId)}}function ra(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=rm(e,n,r,i,s),e!==null&&(e=ql(e),e!==null&&cy(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function lR(t,e,n,r,i){switch(e){case"focusin":return jr=ra(jr,t,e,n,r,i),!0;case"dragenter":return Br=ra(Br,t,e,n,r,i),!0;case"mouseover":return zr=ra(zr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return al.set(s,ra(al.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ll.set(s,ra(ll.get(s)||null,t,e,n,r,i)),!0}return!1}function uR(t){var e=xi(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=iC(n),e!==null){t.blockedOn=e,lC(t.lanePriority,function(){ht.unstable_runWithPriority(t.priority,function(){aC(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=py(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=ql(n),e!==null&&cy(e),t.blockedOn=n,!1;e.shift()}return!0}function T0(t,e,n){lc(t)&&n.delete(e)}function cR(){for(nm=!1;0<Un.length;){var t=Un[0];if(t.blockedOn!==null){t=ql(t.blockedOn),t!==null&&oC(t);break}for(var e=t.targetContainers;0<e.length;){var n=py(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&Un.shift()}jr!==null&&lc(jr)&&(jr=null),Br!==null&&lc(Br)&&(Br=null),zr!==null&&lc(zr)&&(zr=null),al.forEach(T0),ll.forEach(T0)}function ia(t,e){t.blockedOn===e&&(t.blockedOn=null,nm||(nm=!0,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,cR)))}function uC(t){function e(i){return ia(i,t)}if(0<Un.length){ia(Un[0],t);for(var n=1;n<Un.length;n++){var r=Un[n];r.blockedOn===t&&(r.blockedOn=null)}}for(jr!==null&&ia(jr,t),Br!==null&&ia(Br,t),zr!==null&&ia(zr,t),al.forEach(e),ll.forEach(e),n=0;n<na.length;n++)r=na[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<na.length&&(n=na[0],n.blockedOn===null);)uR(n),n.blockedOn===null&&na.shift()}function Mu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ks={animationend:Mu("Animation","AnimationEnd"),animationiteration:Mu("Animation","AnimationIteration"),animationstart:Mu("Animation","AnimationStart"),transitionend:Mu("Transition","TransitionEnd")},yf={},cC={};mr&&(cC=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function Xh(t){if(yf[t])return yf[t];if(!ks[t])return t;var e=ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in cC)return yf[t]=e[n];return t}var hC=Xh("animationend"),dC=Xh("animationiteration"),fC=Xh("animationstart"),pC=Xh("transitionend"),mC=new Map,hy=new Map,hR=["abort","abort",hC,"animationEnd",dC,"animationIteration",fC,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",pC,"transitionEnd","waiting","waiting"];function dy(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),hy.set(r,e),mC.set(r,i),ls(i,[r])}}var dR=ht.unstable_now;dR();var be=8;function Ts(t){if((1&t)!==0)return be=15,1;if((2&t)!==0)return be=14,2;if((4&t)!==0)return be=13,4;var e=24&t;return e!==0?(be=12,e):(t&32)!==0?(be=11,32):(e=192&t,e!==0?(be=10,e):(t&256)!==0?(be=9,256):(e=3584&t,e!==0?(be=8,e):(t&4096)!==0?(be=7,4096):(e=4186112&t,e!==0?(be=6,e):(e=62914560&t,e!==0?(be=5,e):t&67108864?(be=4,67108864):(t&134217728)!==0?(be=3,134217728):(e=805306368&t,e!==0?(be=2,e):(1073741824&t)!==0?(be=1,1073741824):(be=8,t))))))}function fR(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function pR(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(O(358,t))}}function ul(t,e){var n=t.pendingLanes;if(n===0)return be=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)r=s,i=be=15;else if(s=n&134217727,s!==0){var l=s&~o;l!==0?(r=Ts(l),i=be):(a&=s,a!==0&&(r=Ts(a),i=be))}else s=n&~o,s!==0?(r=Ts(s),i=be):a!==0&&(r=Ts(a),i=be);if(r===0)return 0;if(r=31-ti(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&(e&o)===0){if(Ts(e),i<=be)return e;be=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ti(e),i=1<<n,r|=t[n],e&=~i;return r}function gC(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $c(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=Cs(24&~e),t===0?$c(10,e):t;case 10:return t=Cs(192&~e),t===0?$c(8,e):t;case 8:return t=Cs(3584&~e),t===0&&(t=Cs(4186112&~e),t===0&&(t=512)),t;case 2:return e=Cs(805306368&~e),e===0&&(e=268435456),e}throw Error(O(358,t))}function Cs(t){return t&-t}function vf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jh(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-ti(e),t[e]=n}var ti=Math.clz32?Math.clz32:yR,mR=Math.log,gR=Math.LN2;function yR(t){return t===0?32:31-(mR(t)/gR|0)|0}var vR=ht.unstable_UserBlockingPriority,_R=ht.unstable_runWithPriority,uc=!0;function wR(t,e,n,r){ki||ly();var i=fy,s=ki;ki=!0;try{nC(i,t,e,n,r)}finally{(ki=s)||uy()}}function ER(t,e,n,r){_R(vR,fy.bind(null,t,e,n,r))}function fy(t,e,n,r){if(uc){var i;if((i=(e&4)===0)&&0<Un.length&&-1<w0.indexOf(t))t=rm(null,t,e,n,r),Un.push(t);else{var s=py(t,e,n,r);if(s===null)i&&E0(t,r);else{if(i){if(-1<w0.indexOf(t)){t=rm(s,t,e,n,r),Un.push(t);return}if(lR(s,t,e,n,r))return;E0(t,r)}AC(t,e,r,null,n)}}}}function py(t,e,n,r){var i=oy(r);if(i=xi(i),i!==null){var s=cs(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=iC(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return AC(t,e,r,i,n),null}var Dr=null,my=null,cc=null;function yC(){if(cc)return cc;var t,e=my,n=e.length,r,i="value"in Dr?Dr.value:Dr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return cc=i.slice(t,1<r?1-r:void 0)}function hc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $u(){return!0}function C0(){return!1}function ln(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$u:C0,this.isPropagationStopped=C0,this}return $e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$u)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$u)},persist:function(){},isPersistent:$u}),e}var Ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gy=ln(Ro),Wl=$e({},Ro,{view:0,detail:0}),TR=ln(Wl),_f,wf,sa,Zh=$e({},Wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yy,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==sa&&(sa&&t.type==="mousemove"?(_f=t.screenX-sa.screenX,wf=t.screenY-sa.screenY):wf=_f=0,sa=t),_f)},movementY:function(t){return"movementY"in t?t.movementY:wf}}),S0=ln(Zh),CR=$e({},Zh,{dataTransfer:0}),SR=ln(CR),IR=$e({},Wl,{relatedTarget:0}),Ef=ln(IR),kR=$e({},Ro,{animationName:0,elapsedTime:0,pseudoElement:0}),xR=ln(kR),bR=$e({},Ro,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),AR=ln(bR),NR=$e({},Ro,{data:0}),I0=ln(NR),RR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},PR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},OR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=OR[t])?!!e[t]:!1}function yy(){return DR}var LR=$e({},Wl,{key:function(t){if(t.key){var e=RR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?PR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yy,charCode:function(t){return t.type==="keypress"?hc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),MR=ln(LR),$R=$e({},Zh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),k0=ln($R),FR=$e({},Wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yy}),UR=ln(FR),VR=$e({},Ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),jR=ln(VR),BR=$e({},Zh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zR=ln(BR),HR=[9,13,27,32],vy=mr&&"CompositionEvent"in window,Ua=null;mr&&"documentMode"in document&&(Ua=document.documentMode);var WR=mr&&"TextEvent"in window&&!Ua,vC=mr&&(!vy||Ua&&8<Ua&&11>=Ua),x0=String.fromCharCode(32),b0=!1;function _C(t,e){switch(t){case"keyup":return HR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wC(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function qR(t,e){switch(t){case"compositionend":return wC(e);case"keypress":return e.which!==32?null:(b0=!0,x0);case"textInput":return t=e.data,t===x0&&b0?null:t;default:return null}}function KR(t,e){if(xs)return t==="compositionend"||!vy&&_C(t,e)?(t=yC(),cc=my=Dr=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vC&&e.locale!=="ko"?null:e.data;default:return null}}var GR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function A0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!GR[t.type]:e==="textarea"}function EC(t,e,n,r){eC(r),e=Fc(e,"onChange"),0<e.length&&(n=new gy("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Va=null,cl=null;function QR(t){kC(t,0)}function ed(t){var e=As(t);if(KT(e))return t}function YR(t,e){if(t==="change")return e}var TC=!1;if(mr){var Tf;if(mr){var Cf="oninput"in document;if(!Cf){var N0=document.createElement("div");N0.setAttribute("oninput","return;"),Cf=typeof N0.oninput=="function"}Tf=Cf}else Tf=!1;TC=Tf&&(!document.documentMode||9<document.documentMode)}function R0(){Va&&(Va.detachEvent("onpropertychange",CC),cl=Va=null)}function CC(t){if(t.propertyName==="value"&&ed(cl)){var e=[];if(EC(e,cl,t,oy(t)),t=QR,ki)t(e);else{ki=!0;try{ay(t,e)}finally{ki=!1,uy()}}}}function XR(t,e,n){t==="focusin"?(R0(),Va=e,cl=n,Va.attachEvent("onpropertychange",CC)):t==="focusout"&&R0()}function JR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ed(cl)}function ZR(t,e){if(t==="click")return ed(e)}function eP(t,e){if(t==="input"||t==="change")return ed(e)}function tP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fn=typeof Object.is=="function"?Object.is:tP,nP=Object.prototype.hasOwnProperty;function hl(t,e){if(fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!nP.call(e,n[r])||!fn(t[n[r]],e[n[r]]))return!1;return!0}function P0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function O0(t,e){var n=P0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=P0(n)}}function SC(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?SC(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function D0(){for(var t=window,e=Dc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Dc(t.document)}return e}function im(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var rP=mr&&"documentMode"in document&&11>=document.documentMode,bs=null,sm=null,ja=null,om=!1;function L0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;om||bs==null||bs!==Dc(r)||(r=bs,"selectionStart"in r&&im(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ja&&hl(ja,r)||(ja=r,r=Fc(sm,"onSelect"),0<r.length&&(e=new gy("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bs)))}dy("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);dy("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);dy(hR,2);for(var M0="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Sf=0;Sf<M0.length;Sf++)hy.set(M0[Sf],0);ao("onMouseEnter",["mouseout","mouseover"]);ao("onMouseLeave",["mouseout","mouseover"]);ao("onPointerEnter",["pointerout","pointerover"]);ao("onPointerLeave",["pointerout","pointerover"]);ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function $0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,oR(r,e,void 0,t),t.currentTarget=null}function kC(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;$0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;$0(i,a,u),s=l}}}if(Mc)throw t=tm,Mc=!1,tm=null,t}function Re(t,e){var n=RC(e),r=t+"__bubble";n.has(r)||(bC(e,t,2,!1),n.add(r))}var F0="_reactListening"+Math.random().toString(36).slice(2);function xC(t){t[F0]||(t[F0]=!0,HT.forEach(function(e){IC.has(e)||U0(e,!1,t,null),U0(e,!0,t,null)}))}function U0(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&IC.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=RC(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(i|=4),bC(s,t,i,e),o.add(a))}function bC(t,e,n,r){var i=hy.get(e);switch(i===void 0?2:i){case 0:i=wR;break;case 1:i=ER;break;default:i=fy}n=i.bind(null,e,n,t),i=void 0,!em||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function AC(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=xi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}nR(function(){var u=s,c=oy(n),h=[];e:{var d=mC.get(t);if(d!==void 0){var f=gy,y=t;switch(t){case"keypress":if(hc(n)===0)break e;case"keydown":case"keyup":f=MR;break;case"focusin":y="focus",f=Ef;break;case"focusout":y="blur",f=Ef;break;case"beforeblur":case"afterblur":f=Ef;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=S0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=SR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=UR;break;case hC:case dC:case fC:f=xR;break;case pC:f=jR;break;case"scroll":f=TR;break;case"wheel":f=zR;break;case"copy":case"cut":case"paste":f=AR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=k0}var v=(e&4)!==0,p=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var g=u,_;g!==null;){_=g;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,m!==null&&(E=ol(g,m),E!=null&&v.push(dl(g,E,_)))),p)break;g=g.return}0<v.length&&(d=new f(d,y,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&(e&16)===0&&(y=n.relatedTarget||n.fromElement)&&(xi(y)||y[Po]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(y=n.relatedTarget||n.toElement,f=u,y=y?xi(y):null,y!==null&&(p=cs(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=u),f!==y)){if(v=S0,E="onMouseLeave",m="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=k0,E="onPointerLeave",m="onPointerEnter",g="pointer"),p=f==null?d:As(f),_=y==null?d:As(y),d=new v(E,g+"leave",f,n,c),d.target=p,d.relatedTarget=_,E=null,xi(c)===u&&(v=new v(m,g+"enter",y,n,c),v.target=_,v.relatedTarget=p,E=v),p=E,f&&y)t:{for(v=f,m=y,g=0,_=v;_;_=vs(_))g++;for(_=0,E=m;E;E=vs(E))_++;for(;0<g-_;)v=vs(v),g--;for(;0<_-g;)m=vs(m),_--;for(;g--;){if(v===m||m!==null&&v===m.alternate)break t;v=vs(v),m=vs(m)}v=null}else v=null;f!==null&&V0(h,d,f,v,!1),y!==null&&p!==null&&V0(h,p,y,v,!0)}}e:{if(d=u?As(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var k=YR;else if(A0(d))if(TC)k=eP;else{k=JR;var C=XR}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=ZR);if(k&&(k=k(t,u))){EC(h,k,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&qp(d,"number",d.value)}switch(C=u?As(u):window,t){case"focusin":(A0(C)||C.contentEditable==="true")&&(bs=C,sm=u,ja=null);break;case"focusout":ja=sm=bs=null;break;case"mousedown":om=!0;break;case"contextmenu":case"mouseup":case"dragend":om=!1,L0(h,n,c);break;case"selectionchange":if(rP)break;case"keydown":case"keyup":L0(h,n,c)}var b;if(vy)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else xs?_C(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(vC&&n.locale!=="ko"&&(xs||N!=="onCompositionStart"?N==="onCompositionEnd"&&xs&&(b=yC()):(Dr=c,my="value"in Dr?Dr.value:Dr.textContent,xs=!0)),C=Fc(u,N),0<C.length&&(N=new I0(N,t,null,n,c),h.push({event:N,listeners:C}),b?N.data=b:(b=wC(n),b!==null&&(N.data=b)))),(b=WR?qR(t,n):KR(t,n))&&(u=Fc(u,"onBeforeInput"),0<u.length&&(c=new I0("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=b))}kC(h,e)})}function dl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ol(t,n),s!=null&&r.unshift(dl(t,s,i)),s=ol(t,e),s!=null&&r.push(dl(t,s,i))),t=t.return}return r}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function V0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ol(n,s),l!=null&&o.unshift(dl(n,l,a))):i||(l=ol(n,s),l!=null&&o.push(dl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function Uc(){}var If=null,kf=null;function NC(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function am(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var j0=typeof setTimeout=="function"?setTimeout:void 0,iP=typeof clearTimeout=="function"?clearTimeout:void 0;function _y(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function js(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function B0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xf=0;function sP(t){return{$$typeof:iy,toString:t,valueOf:t}}var td=Math.random().toString(36).slice(2),Lr="__reactFiber$"+td,Vc="__reactProps$"+td,Po="__reactContainer$"+td,z0="__reactEvents$"+td;function xi(t){var e=t[Lr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Po]||n[Lr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=B0(t);t!==null;){if(n=t[Lr])return n;t=B0(t)}return e}t=n,n=t.parentNode}return null}function ql(t){return t=t[Lr]||t[Po],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function nd(t){return t[Vc]||null}function RC(t){var e=t[z0];return e===void 0&&(e=t[z0]=new Set),e}var lm=[],Ns=-1;function hi(t){return{current:t}}function De(t){0>Ns||(t.current=lm[Ns],lm[Ns]=null,Ns--)}function Be(t,e){Ns++,lm[Ns]=t.current,t.current=e}var ni={},$t=hi(ni),Jt=hi(!1),Wi=ni;function lo(t,e){var n=t.type.contextTypes;if(!n)return ni;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Zt(t){return t=t.childContextTypes,t!=null}function jc(){De(Jt),De($t)}function H0(t,e,n){if($t.current!==ni)throw Error(O(168));Be($t,e),Be(Jt,n)}function PC(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(O(108,$s(e)||"Unknown",i));return $e({},n,r)}function dc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ni,Wi=$t.current,Be($t,t),Be(Jt,Jt.current),!0}function W0(t,e,n){var r=t.stateNode;if(!r)throw Error(O(169));n?(t=PC(t,e,Wi),r.__reactInternalMemoizedMergedChildContext=t,De(Jt),De($t),Be($t,t)):De(Jt),Be(Jt,n)}var wy=null,$i=null,oP=ht.unstable_runWithPriority,Ey=ht.unstable_scheduleCallback,um=ht.unstable_cancelCallback,aP=ht.unstable_shouldYield,q0=ht.unstable_requestPaint,cm=ht.unstable_now,lP=ht.unstable_getCurrentPriorityLevel,rd=ht.unstable_ImmediatePriority,OC=ht.unstable_UserBlockingPriority,DC=ht.unstable_NormalPriority,LC=ht.unstable_LowPriority,MC=ht.unstable_IdlePriority,bf={},uP=q0!==void 0?q0:function(){},nr=null,fc=null,Af=!1,K0=cm(),Rt=1e4>K0?cm:function(){return cm()-K0};function uo(){switch(lP()){case rd:return 99;case OC:return 98;case DC:return 97;case LC:return 96;case MC:return 95;default:throw Error(O(332))}}function $C(t){switch(t){case 99:return rd;case 98:return OC;case 97:return DC;case 96:return LC;case 95:return MC;default:throw Error(O(332))}}function qi(t,e){return t=$C(t),oP(t,e)}function fl(t,e,n){return t=$C(t),Ey(t,e,n)}function Jn(){if(fc!==null){var t=fc;fc=null,um(t)}FC()}function FC(){if(!Af&&nr!==null){Af=!0;var t=0;try{var e=nr;qi(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),nr=null}catch(n){throw nr!==null&&(nr=nr.slice(t+1)),Ey(rd,Jn),n}finally{Af=!1}}}var cP=us.ReactCurrentBatchConfig;function Sn(t,e){if(t&&t.defaultProps){e=$e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Bc=hi(null),zc=null,Rs=null,Hc=null;function Ty(){Hc=Rs=zc=null}function Cy(t){var e=Bc.current;De(Bc),t.type._context._currentValue=e}function UC(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function Bs(t,e){zc=t,Hc=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(xn=!0),t.firstContext=null)}function yn(t,e){if(Hc!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(Hc=t,e=1073741823),e={context:t,observedBits:e,next:null},Rs===null){if(zc===null)throw Error(O(308));Rs=e,zc.dependencies={lanes:0,firstContext:e,responders:null}}else Rs=Rs.next=e;return t._currentValue}var xr=!1;function Sy(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function VC(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wr(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function G0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pl(t,e,n,r){var i=t.updateQueue;xr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;if(c!==null){c=c.updateQueue;var h=c.lastBaseUpdate;h!==o&&(h===null?c.firstBaseUpdate=u:h.next=u,c.lastBaseUpdate=l)}}if(s!==null){h=i.baseState,o=0,c=u=l=null;do{a=s.lane;var d=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:d,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var f=t,y=s;switch(a=e,d=n,y.tag){case 1:if(f=y.payload,typeof f=="function"){h=f.call(d,h,a);break e}h=f;break e;case 3:f.flags=f.flags&-4097|64;case 0:if(f=y.payload,a=typeof f=="function"?f.call(d,h,a):f,a==null)break e;h=$e({},h,a);break e;case 2:xr=!0}}s.callback!==null&&(t.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else d={eventTime:d,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=d,l=h):c=c.next=d,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,Gl|=o,t.lanes=o,t.memoizedState=h}}function Q0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var jC=new Gh.Component().refs;function Wc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:$e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var id={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rn(),i=qr(t),s=Hr(r,i);s.payload=e,n!=null&&(s.callback=n),Wr(t,s),Kr(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rn(),i=qr(t),s=Hr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),Wr(t,s),Kr(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),r=qr(t),i=Hr(n,r);i.tag=2,e!=null&&(i.callback=e),Wr(t,i),Kr(t,r,n)}};function Y0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!hl(n,r)||!hl(i,s):!0}function BC(t,e,n){var r=!1,i=ni,s=e.contextType;return typeof s=="object"&&s!==null?s=yn(s):(i=Zt(e)?Wi:$t.current,r=e.contextTypes,s=(r=r!=null)?lo(t,i):ni),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=id,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function X0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&id.enqueueReplaceState(e,e.state,null)}function hm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=jC,Sy(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=yn(s):(s=Zt(e)?Wi:$t.current,i.context=lo(t,s)),pl(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&id.enqueueReplaceState(i,i.state,null),pl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var Fu=Array.isArray;function oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===jC&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,t))}return t}function Uu(t,e){if(t.type!=="textarea")throw Error(O(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function zC(t){function e(p,m){if(t){var g=p.lastEffect;g!==null?(g.nextEffect=m,p.lastEffect=m):p.firstEffect=p.lastEffect=m,m.nextEffect=null,m.flags=8}}function n(p,m){if(!t)return null;for(;m!==null;)e(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function i(p,m){return p=ii(p,m),p.index=0,p.sibling=null,p}function s(p,m,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<m?(p.flags=2,m):g):(p.flags=2,m)):m}function o(p){return t&&p.alternate===null&&(p.flags=2),p}function a(p,m,g,_){return m===null||m.tag!==6?(m=Df(g,p.mode,_),m.return=p,m):(m=i(m,g),m.return=p,m)}function l(p,m,g,_){return m!==null&&m.elementType===g.type?(_=i(m,g.props),_.ref=oa(p,m,g),_.return=p,_):(_=yc(g.type,g.key,g.props,null,p.mode,_),_.ref=oa(p,m,g),_.return=p,_)}function u(p,m,g,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=Lf(g,p.mode,_),m.return=p,m):(m=i(m,g.children||[]),m.return=p,m)}function c(p,m,g,_,E){return m===null||m.tag!==7?(m=qs(g,p.mode,_,E),m.return=p,m):(m=i(m,g),m.return=p,m)}function h(p,m,g){if(typeof m=="string"||typeof m=="number")return m=Df(""+m,p.mode,g),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ta:return g=yc(m.type,m.key,m.props,null,p.mode,g),g.ref=oa(p,null,m),g.return=p,g;case Ii:return m=Lf(m,p.mode,g),m.return=p,m}if(Fu(m)||ea(m))return m=qs(m,p.mode,g,null),m.return=p,m;Uu(p,m)}return null}function d(p,m,g,_){var E=m!==null?m.key:null;if(typeof g=="string"||typeof g=="number")return E!==null?null:a(p,m,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ta:return g.key===E?g.type===br?c(p,m,g.props.children,_,E):l(p,m,g,_):null;case Ii:return g.key===E?u(p,m,g,_):null}if(Fu(g)||ea(g))return E!==null?null:c(p,m,g,_,null);Uu(p,g)}return null}function f(p,m,g,_,E){if(typeof _=="string"||typeof _=="number")return p=p.get(g)||null,a(m,p,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ta:return p=p.get(_.key===null?g:_.key)||null,_.type===br?c(m,p,_.props.children,E,_.key):l(m,p,_,E);case Ii:return p=p.get(_.key===null?g:_.key)||null,u(m,p,_,E)}if(Fu(_)||ea(_))return p=p.get(g)||null,c(m,p,_,E,null);Uu(m,_)}return null}function y(p,m,g,_){for(var E=null,k=null,C=m,b=m=0,N=null;C!==null&&b<g.length;b++){C.index>b?(N=C,C=null):N=C.sibling;var A=d(p,C,g[b],_);if(A===null){C===null&&(C=N);break}t&&C&&A.alternate===null&&e(p,C),m=s(A,m,b),k===null?E=A:k.sibling=A,k=A,C=N}if(b===g.length)return n(p,C),E;if(C===null){for(;b<g.length;b++)C=h(p,g[b],_),C!==null&&(m=s(C,m,b),k===null?E=C:k.sibling=C,k=C);return E}for(C=r(p,C);b<g.length;b++)N=f(C,p,b,g[b],_),N!==null&&(t&&N.alternate!==null&&C.delete(N.key===null?b:N.key),m=s(N,m,b),k===null?E=N:k.sibling=N,k=N);return t&&C.forEach(function(X){return e(p,X)}),E}function v(p,m,g,_){var E=ea(g);if(typeof E!="function")throw Error(O(150));if(g=E.call(g),g==null)throw Error(O(151));for(var k=E=null,C=m,b=m=0,N=null,A=g.next();C!==null&&!A.done;b++,A=g.next()){C.index>b?(N=C,C=null):N=C.sibling;var X=d(p,C,A.value,_);if(X===null){C===null&&(C=N);break}t&&C&&X.alternate===null&&e(p,C),m=s(X,m,b),k===null?E=X:k.sibling=X,k=X,C=N}if(A.done)return n(p,C),E;if(C===null){for(;!A.done;b++,A=g.next())A=h(p,A.value,_),A!==null&&(m=s(A,m,b),k===null?E=A:k.sibling=A,k=A);return E}for(C=r(p,C);!A.done;b++,A=g.next())A=f(C,p,b,A.value,_),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?b:A.key),m=s(A,m,b),k===null?E=A:k.sibling=A,k=A);return t&&C.forEach(function(ue){return e(p,ue)}),E}return function(p,m,g,_){var E=typeof g=="object"&&g!==null&&g.type===br&&g.key===null;E&&(g=g.props.children);var k=typeof g=="object"&&g!==null;if(k)switch(g.$$typeof){case Ta:e:{for(k=g.key,E=m;E!==null;){if(E.key===k){switch(E.tag){case 7:if(g.type===br){n(p,E.sibling),m=i(E,g.props.children),m.return=p,p=m;break e}break;default:if(E.elementType===g.type){n(p,E.sibling),m=i(E,g.props),m.ref=oa(p,E,g),m.return=p,p=m;break e}}n(p,E);break}else e(p,E);E=E.sibling}g.type===br?(m=qs(g.props.children,p.mode,_,g.key),m.return=p,p=m):(_=yc(g.type,g.key,g.props,null,p.mode,_),_.ref=oa(p,m,g),_.return=p,p=_)}return o(p);case Ii:e:{for(E=g.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(p,m.sibling),m=i(m,g.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else e(p,m);m=m.sibling}m=Lf(g,p.mode,_),m.return=p,p=m}return o(p)}if(typeof g=="string"||typeof g=="number")return g=""+g,m!==null&&m.tag===6?(n(p,m.sibling),m=i(m,g),m.return=p,p=m):(n(p,m),m=Df(g,p.mode,_),m.return=p,p=m),o(p);if(Fu(g))return y(p,m,g,_);if(ea(g))return v(p,m,g,_);if(k&&Uu(p,g),typeof g=="undefined"&&!E)switch(p.tag){case 1:case 22:case 0:case 11:case 15:throw Error(O(152,$s(p.type)||"Component"))}return n(p,m)}}var qc=zC(!0),HC=zC(!1),Kl={},Wn=hi(Kl),ml=hi(Kl),gl=hi(Kl);function bi(t){if(t===Kl)throw Error(O(174));return t}function dm(t,e){switch(Be(gl,e),Be(ml,t),Be(Wn,Kl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yp(e,t)}De(Wn),Be(Wn,e)}function co(){De(Wn),De(ml),De(gl)}function J0(t){bi(gl.current);var e=bi(Wn.current),n=Yp(e,t.type);e!==n&&(Be(ml,t),Be(Wn,n))}function Iy(t){ml.current===t&&(De(Wn),De(ml))}var je=hi(0);function Kc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ir=null,Mr=null,qn=!1;function WC(t,e){var n=pn(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function Z0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function fm(t){if(qn){var e=Mr;if(e){var n=e;if(!Z0(t,e)){if(e=js(n.nextSibling),!e||!Z0(t,e)){t.flags=t.flags&-1025|2,qn=!1,ir=t;return}WC(ir,n)}ir=t,Mr=js(e.firstChild)}else t.flags=t.flags&-1025|2,qn=!1,ir=t}}function ew(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ir=t}function Vu(t){if(t!==ir)return!1;if(!qn)return ew(t),qn=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!am(e,t.memoizedProps))for(e=Mr;e;)WC(t,e),e=js(e.nextSibling);if(ew(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mr=js(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mr=null}}else Mr=ir?js(t.stateNode.nextSibling):null;return!0}function Nf(){Mr=ir=null,qn=!1}var zs=[];function ky(){for(var t=0;t<zs.length;t++)zs[t]._workInProgressVersionPrimary=null;zs.length=0}var Ba=us.ReactCurrentDispatcher,gn=us.ReactCurrentBatchConfig,yl=0,Ke=null,It=null,yt=null,Gc=!1,za=!1;function Kt(){throw Error(O(321))}function xy(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fn(t[n],e[n]))return!1;return!0}function by(t,e,n,r,i,s){if(yl=s,Ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ba.current=t===null||t.memoizedState===null?dP:fP,t=n(r,i),za){s=0;do{if(za=!1,!(25>s))throw Error(O(301));s+=1,yt=It=null,e.updateQueue=null,Ba.current=pP,t=n(r,i)}while(za)}if(Ba.current=Jc,e=It!==null&&It.next!==null,yl=0,yt=It=Ke=null,Gc=!1,e)throw Error(O(300));return t}function Ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Ke.memoizedState=yt=t:yt=yt.next=t,yt}function hs(){if(It===null){var t=Ke.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=yt===null?Ke.memoizedState:yt.next;if(e!==null)yt=e,It=t;else{if(t===null)throw Error(O(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},yt===null?Ke.memoizedState=yt=t:yt=yt.next=t}return yt}function Vn(t,e){return typeof e=="function"?e(t):e}function aa(t){var e=hs(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=It,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,l=i;do{var u=l.lane;if((yl&u)===u)a!==null&&(a=a.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===t?l.eagerState:t(r,l.action);else{var c={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,Ke.lanes|=u,Gl|=u}l=l.next}while(l!==null&&l!==i);a===null?s=r:a.next=o,fn(r,e.memoizedState)||(xn=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function la(t){var e=hs(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);fn(s,e.memoizedState)||(xn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function tw(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(yl&t)===t)&&(e._workInProgressVersionPrimary=r,zs.push(e))),t)return n(e._source);throw zs.push(e),Error(O(350))}function qC(t,e,n,r){var i=Ht;if(i===null)throw Error(O(349));var s=e._getVersion,o=s(e._source),a=Ba.current,l=a.useState(function(){return tw(i,e,n)}),u=l[1],c=l[0];l=yt;var h=t.memoizedState,d=h.refs,f=d.getSnapshot,y=h.source;h=h.subscribe;var v=Ke;return t.memoizedState={refs:d,source:e,subscribe:r},a.useEffect(function(){d.getSnapshot=n,d.setSnapshot=u;var p=s(e._source);if(!fn(o,p)){p=n(e._source),fn(c,p)||(u(p),p=qr(v),i.mutableReadLanes|=p&i.pendingLanes),p=i.mutableReadLanes,i.entangledLanes|=p;for(var m=i.entanglements,g=p;0<g;){var _=31-ti(g),E=1<<_;m[_]|=p,g&=~E}}},[n,e,r]),a.useEffect(function(){return r(e._source,function(){var p=d.getSnapshot,m=d.setSnapshot;try{m(p(e._source));var g=qr(v);i.mutableReadLanes|=g&i.pendingLanes}catch(_){m(function(){throw _})}})},[e,r]),fn(f,n)&&fn(y,e)&&fn(h,r)||(t={pending:null,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:c},t.dispatch=u=Ry.bind(null,Ke,t),l.queue=t,l.baseQueue=null,c=tw(i,e,n),l.memoizedState=l.baseState=c),c}function KC(t,e,n){var r=hs();return qC(r,t,e,n)}function ua(t){var e=Ai();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:t},t=t.dispatch=Ry.bind(null,Ke,t),[e.memoizedState,t]}function Qc(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ke.updateQueue,e===null?(e={lastEffect:null},Ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function nw(t){var e=Ai();return t={current:t},e.memoizedState=t}function Yc(){return hs().memoizedState}function pm(t,e,n,r){var i=Ai();Ke.flags|=t,i.memoizedState=Qc(1|e,n,void 0,r===void 0?null:r)}function Ay(t,e,n,r){var i=hs();r=r===void 0?null:r;var s=void 0;if(It!==null){var o=It.memoizedState;if(s=o.destroy,r!==null&&xy(r,o.deps)){Qc(e,n,s,r);return}}Ke.flags|=t,i.memoizedState=Qc(1|e,n,s,r)}function rw(t,e){return pm(516,4,t,e)}function Xc(t,e){return Ay(516,4,t,e)}function GC(t,e){return Ay(4,2,t,e)}function QC(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function YC(t,e,n){return n=n!=null?n.concat([t]):null,Ay(4,2,QC.bind(null,e,t),n)}function Ny(){}function XC(t,e){var n=hs();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xy(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function JC(t,e){var n=hs();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xy(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function hP(t,e){var n=uo();qi(98>n?98:n,function(){t(!0)}),qi(97<n?97:n,function(){var r=gn.transition;gn.transition=1;try{t(!1),e()}finally{gn.transition=r}})}function Ry(t,e,n){var r=rn(),i=qr(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===Ke||o!==null&&o===Ke)za=Gc=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,l=o(a,n);if(s.eagerReducer=o,s.eagerState=l,fn(l,a))return}catch{}finally{}Kr(t,i,r)}}var Jc={readContext:yn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useOpaqueIdentifier:Kt,unstable_isNewReconciler:!1},dP={readContext:yn,useCallback:function(t,e){return Ai().memoizedState=[t,e===void 0?null:e],t},useContext:yn,useEffect:rw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pm(4,2,QC.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pm(4,2,t,e)},useMemo:function(t,e){var n=Ai();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ai();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=Ry.bind(null,Ke,t),[r.memoizedState,t]},useRef:nw,useState:ua,useDebugValue:Ny,useDeferredValue:function(t){var e=ua(t),n=e[0],r=e[1];return rw(function(){var i=gn.transition;gn.transition=1;try{r(t)}finally{gn.transition=i}},[t]),n},useTransition:function(){var t=ua(!1),e=t[0];return t=hP.bind(null,t[1]),nw(t),[t,e]},useMutableSource:function(t,e,n){var r=Ai();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},qC(r,t,e,n)},useOpaqueIdentifier:function(){if(qn){var t=!1,e=sP(function(){throw t||(t=!0,n("r:"+(xf++).toString(36))),Error(O(355))}),n=ua(e)[1];return(Ke.mode&2)===0&&(Ke.flags|=516,Qc(5,function(){n("r:"+(xf++).toString(36))},void 0,null)),e}return e="r:"+(xf++).toString(36),ua(e),e},unstable_isNewReconciler:!1},fP={readContext:yn,useCallback:XC,useContext:yn,useEffect:Xc,useImperativeHandle:YC,useLayoutEffect:GC,useMemo:JC,useReducer:aa,useRef:Yc,useState:function(){return aa(Vn)},useDebugValue:Ny,useDeferredValue:function(t){var e=aa(Vn),n=e[0],r=e[1];return Xc(function(){var i=gn.transition;gn.transition=1;try{r(t)}finally{gn.transition=i}},[t]),n},useTransition:function(){var t=aa(Vn)[0];return[Yc().current,t]},useMutableSource:KC,useOpaqueIdentifier:function(){return aa(Vn)[0]},unstable_isNewReconciler:!1},pP={readContext:yn,useCallback:XC,useContext:yn,useEffect:Xc,useImperativeHandle:YC,useLayoutEffect:GC,useMemo:JC,useReducer:la,useRef:Yc,useState:function(){return la(Vn)},useDebugValue:Ny,useDeferredValue:function(t){var e=la(Vn),n=e[0],r=e[1];return Xc(function(){var i=gn.transition;gn.transition=1;try{r(t)}finally{gn.transition=i}},[t]),n},useTransition:function(){var t=la(Vn)[0];return[Yc().current,t]},useMutableSource:KC,useOpaqueIdentifier:function(){return la(Vn)[0]},unstable_isNewReconciler:!1},mP=us.ReactCurrentOwner,xn=!1;function Gt(t,e,n,r){e.child=t===null?HC(e,null,n,r):qc(e,t.child,n,r)}function iw(t,e,n,r,i){n=n.render;var s=e.ref;return Bs(e,i),r=by(t,e,n,r,s,i),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,sr(t,e,i)):(e.flags|=1,Gt(t,e,r,i),e.child)}function sw(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!$y(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,ZC(t,e,o,r,i,s)):(t=yc(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(i&s)===0&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:hl,n(i,r)&&t.ref===e.ref)?sr(t,e,s):(e.flags|=1,t=ii(o,r),t.ref=e.ref,t.return=e,e.child=t)}function ZC(t,e,n,r,i,s){if(t!==null&&hl(t.memoizedProps,r)&&t.ref===e.ref)if(xn=!1,(s&i)!==0)(t.flags&16384)!==0&&(xn=!0);else return e.lanes=t.lanes,sr(t,e,s);return mm(t,e,n,r,s)}function Rf(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((e.mode&4)===0)e.memoizedState={baseLanes:0},Bu(e,n);else if((n&1073741824)!==0)e.memoizedState={baseLanes:0},Bu(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},Bu(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Bu(e,r);return Gt(t,e,i,n),e.child}function eS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function mm(t,e,n,r,i){var s=Zt(n)?Wi:$t.current;return s=lo(e,s),Bs(e,i),n=by(t,e,n,r,s,i),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,sr(t,e,i)):(e.flags|=1,Gt(t,e,n,i),e.child)}function ow(t,e,n,r,i){if(Zt(n)){var s=!0;dc(e)}else s=!1;if(Bs(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),BC(e,n,r),hm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=yn(u):(u=Zt(n)?Wi:$t.current,u=lo(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&X0(e,o,r,u),xr=!1;var d=e.memoizedState;o.state=d,pl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Jt.current||xr?(typeof c=="function"&&(Wc(e,n,c,r),l=e.memoizedState),(a=xr||Y0(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,VC(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Sn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=yn(l):(l=Zt(n)?Wi:$t.current,l=lo(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&X0(e,o,r,l),xr=!1,d=e.memoizedState,o.state=d,pl(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Jt.current||xr?(typeof f=="function"&&(Wc(e,n,f,r),y=e.memoizedState),(u=xr||Y0(e,n,u,r,d,y,l))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),r=!1)}return gm(t,e,n,r,s,i)}function gm(t,e,n,r,i,s){eS(t,e);var o=(e.flags&64)!==0;if(!r&&!o)return i&&W0(e,n,!1),sr(t,e,s);r=e.stateNode,mP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=qc(e,t.child,null,s),e.child=qc(e,null,a,s)):Gt(t,e,a,s),e.memoizedState=r.state,i&&W0(e,n,!0),e.child}function aw(t){var e=t.stateNode;e.pendingContext?H0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&H0(t,e.context,!1),dm(t,e.containerInfo)}var ju={dehydrated:null,retryLane:0};function lw(t,e,n){var r=e.pendingProps,i=je.current,s=!1,o;return(o=(e.flags&64)!==0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!==0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),Be(je,i&1),t===null?(r.fallback!==void 0&&fm(e),t=r.children,i=r.fallback,s?(t=uw(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=ju,t):typeof r.unstable_expectedLoadTime=="number"?(t=uw(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=ju,e.lanes=33554432,t):(n=Fy({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=hw(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=ju,r):(n=cw(t,e,r.children,n),e.memoizedState=null,n):s?(r=hw(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=ju,r):(n=cw(t,e,r.children,n),e.memoizedState=null,n)}function uw(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},(i&2)===0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=Fy(e,i,0,null),n=qs(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function cw(t,e,n,r){var i=t.child;return t=i.sibling,n=ii(i,{mode:"visible",children:n}),(e.mode&2)===0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function hw(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)===0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=ii(o,a),t!==null?r=ii(t,r):(r=qs(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function dw(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),UC(t.return,e)}function Pf(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function fw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Gt(t,e,r.children,n),r=je.current,(r&2)!==0)r=r&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dw(t,n);else if(t.tag===19)dw(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Be(je,r),(e.mode&2)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Kc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Pf(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Kc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Pf(e,!0,n,null,s,e.lastEffect);break;case"together":Pf(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function sr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gl|=e.lanes,(n&e.childLanes)!==0){if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,n=ii(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ii(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var tS,ym,nS,rS;tS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ym=function(){};nS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,bi(Wn.current);var s=null;switch(n){case"input":i=Hp(t,i),r=Hp(t,r),s=[];break;case"option":i=Kp(t,i),r=Kp(t,r),s=[];break;case"select":i=$e({},i,{value:void 0}),r=$e({},r,{value:void 0}),s=[];break;case"textarea":i=Gp(t,i),r=Gp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Uc)}Xp(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(il.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(il.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Re("scroll",t),s||a===l||(s=[])):typeof l=="object"&&l!==null&&l.$$typeof===iy?l.toString():(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};rS=function(t,e,n,r){n!==r&&(e.flags|=4)};function ca(t,e){if(!qn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function gP(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Zt(e.type)&&jc(),null;case 3:return co(),De(Jt),De($t),ky(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Vu(e)?e.flags|=4:r.hydrate||(e.flags|=256)),ym(e),null;case 5:Iy(e);var i=bi(gl.current);if(n=e.type,t!==null&&e.stateNode!=null)nS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(O(166));return null}if(t=bi(Wn.current),Vu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Lr]=e,r[Vc]=s,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(t=0;t<Sa.length;t++)Re(Sa[t],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":f0(r,s),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Re("invalid",r);break;case"textarea":m0(r,s),Re("invalid",r)}Xp(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):il.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&Re("scroll",r));switch(n){case"input":Du(r),p0(r,s,!0);break;case"textarea":Du(r),g0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Uc)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===Qp.html&&(t=YT(n)),t===Qp.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Lr]=e,t[Vc]=r,tS(t,e,!1,!1),e.stateNode=t,o=Jp(n,r),n){case"dialog":Re("cancel",t),Re("close",t),i=r;break;case"iframe":case"object":case"embed":Re("load",t),i=r;break;case"video":case"audio":for(i=0;i<Sa.length;i++)Re(Sa[i],t);i=r;break;case"source":Re("error",t),i=r;break;case"img":case"image":case"link":Re("error",t),Re("load",t),i=r;break;case"details":Re("toggle",t),i=r;break;case"input":f0(t,r),i=Hp(t,r),Re("invalid",t);break;case"option":i=Kp(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=$e({},r,{value:void 0}),Re("invalid",t);break;case"textarea":m0(t,r),i=Gp(t,r),Re("invalid",t);break;default:i=r}Xp(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ZT(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&XT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&sl(t,l):typeof l=="number"&&sl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(il.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Re("scroll",t):l!=null&&Jg(t,s,l,o))}switch(n){case"input":Du(t),p0(t,r,!1);break;case"textarea":Du(t),g0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ei(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Fs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Fs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Uc)}NC(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)rS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(O(166));n=bi(gl.current),bi(Wn.current),Vu(e)?(r=e.stateNode,n=e.memoizedProps,r[Lr]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Lr]=e,e.stateNode=r)}return null;case 13:return De(je),r=e.memoizedState,(e.flags&64)!==0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&Vu(e):n=t.memoizedState!==null,r&&!n&&(e.mode&2)!==0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(je.current&1)!==0?_t===0&&(_t=3):((_t===0||_t===3)&&(_t=4),Ht===null||(Gl&134217727)===0&&(Do&134217727)===0||Hs(Ht,Ot))),(r||n)&&(e.flags|=4),null);case 4:return co(),ym(e),t===null&&xC(e.stateNode.containerInfo),null;case 10:return Cy(e),null;case 17:return Zt(e.type)&&jc(),null;case 19:if(De(je),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!==0,o=r.rendering,o===null)if(s)ca(r,!1);else{if(_t!==0||t!==null&&(t.flags&64)!==0)for(t=e.child;t!==null;){if(o=Kc(t),o!==null){for(e.flags|=64,ca(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Be(je,je.current&1|2),e.child}t=t.sibling}r.tail!==null&&Rt()>Cm&&(e.flags|=64,s=!0,ca(r,!1),e.lanes=33554432)}else{if(!s)if(t=Kc(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ca(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!qn)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*Rt()-r.renderingStartTime>Cm&&n!==1073741824&&(e.flags|=64,s=!0,ca(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=Rt(),n.sibling=null,e=je.current,Be(je,s?e&1|2:e&1),n):null;case 23:case 24:return My(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(O(156,e.tag))}function yP(t){switch(t.tag){case 1:Zt(t.type)&&jc();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(co(),De(Jt),De($t),ky(),e=t.flags,(e&64)!==0)throw Error(O(285));return t.flags=e&-4097|64,t;case 5:return Iy(t),null;case 13:return De(je),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return De(je),null;case 4:return co(),null;case 10:return Cy(t),null;case 23:case 24:return My(),null;default:return null}}function Py(t,e){try{var n="",r=e;do n+=XN(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function vm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vP=typeof WeakMap=="function"?WeakMap:Map;function iS(t,e,n){n=Hr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){eh||(eh=!0,Sm=r),vm(t,e)},n}function sS(t,e,n){n=Hr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return vm(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this),vm(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var _P=typeof WeakSet=="function"?WeakSet:Set;function pw(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){Gr(t,n)}else e.current=null}function wP(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:Sn(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&_y(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(O(163))}function EP(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)===3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(pS(n,t),AP(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:Sn(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&Q0(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Q0(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&NC(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&uC(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(O(163))}function mw(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=JT("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function gw(t,e){if($i&&typeof $i.onCommitFiberUnmount=="function")try{$i.onCommitFiberUnmount(wy,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!==0)pS(e,n);else{r=e;try{i()}catch(s){Gr(r,s)}}n=n.next}while(n!==t)}break;case 1:if(pw(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){Gr(e,s)}break;case 5:pw(e);break;case 4:oS(t,e)}}function yw(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function vw(t){return t.tag===5||t.tag===3||t.tag===4}function _w(t){e:{for(var e=t.return;e!==null;){if(vw(e))break e;e=e.return}throw Error(O(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(O(161))}n.flags&16&&(sl(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||vw(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?_m(t,n,e):wm(t,n,e)}function _m(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Uc));else if(r!==4&&(t=t.child,t!==null))for(_m(t,e,n),t=t.sibling;t!==null;)_m(t,e,n),t=t.sibling}function wm(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(wm(t,e,n),t=t.sibling;t!==null;)wm(t,e,n),t=t.sibling}function oS(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(O(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,l=a;;)if(gw(o,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(gw(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Of(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[Vc]=r,t==="input"&&r.type==="radio"&&r.name!=null&&GT(n,r),Jp(t,i),e=Jp(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?ZT(n,a):o==="dangerouslySetInnerHTML"?XT(n,a):o==="children"?sl(n,a):Jg(n,o,a,e)}switch(t){case"input":Wp(n,r);break;case"textarea":QT(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?Fs(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?Fs(n,!!r.multiple,r.defaultValue,!0):Fs(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(O(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,uC(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(Ly=Rt(),mw(e.child,!0)),ww(e);return;case 19:ww(e);return;case 17:return;case 23:case 24:mw(e,e.memoizedState!==null);return}throw Error(O(163))}function ww(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _P),e.forEach(function(r){var i=PP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function TP(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var CP=Math.ceil,Zc=us.ReactCurrentDispatcher,Oy=us.ReactCurrentOwner,re=0,Ht=null,et=null,Ot=0,Ki=0,Em=hi(0),_t=0,sd=null,Oo=0,Gl=0,Do=0,Dy=0,Tm=null,Ly=0,Cm=1/0;function Lo(){Cm=Rt()+500}var B=null,eh=!1,Sm=null,jn=null,ri=!1,Ha=null,Ia=90,Im=[],km=[],hr=null,Wa=0,xm=null,pc=-1,rr=0,mc=0,qa=null,gc=!1;function rn(){return(re&48)!==0?Rt():pc!==-1?pc:pc=Rt()}function qr(t){if(t=t.mode,(t&2)===0)return 1;if((t&4)===0)return uo()===99?1:2;if(rr===0&&(rr=Oo),cP.transition!==0){mc!==0&&(mc=Tm!==null?Tm.pendingLanes:0),t=rr;var e=4186112&~mc;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=uo(),(re&4)!==0&&t===98?t=$c(12,rr):(t=fR(t),t=$c(t,rr)),t}function Kr(t,e,n){if(50<Wa)throw Wa=0,xm=null,Error(O(185));if(t=od(t,e),t===null)return null;Jh(t,e,n),t===Ht&&(Do|=e,_t===4&&Hs(t,Ot));var r=uo();e===1?(re&8)!==0&&(re&48)===0?bm(t):(vn(t,n),re===0&&(Lo(),Jn())):((re&4)===0||r!==98&&r!==99||(hr===null?hr=new Set([t]):hr.add(t)),vn(t,n)),Tm=t}function od(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function vn(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-ti(o),l=1<<a,u=s[a];if(u===-1){if((l&r)===0||(l&i)!==0){u=e,Ts(l);var c=be;s[a]=10<=c?u+250:6<=c?u+5e3:-1}}else u<=e&&(t.expiredLanes|=l);o&=~l}if(r=ul(t,t===Ht?Ot:0),e=be,r===0)n!==null&&(n!==bf&&um(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==bf&&um(n)}e===15?(n=bm.bind(null,t),nr===null?(nr=[n],fc=Ey(rd,FC)):nr.push(n),n=bf):e===14?n=fl(99,bm.bind(null,t)):(n=pR(e),n=fl(n,aS.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function aS(t){if(pc=-1,mc=rr=0,(re&48)!==0)throw Error(O(327));var e=t.callbackNode;if(di()&&t.callbackNode!==e)return null;var n=ul(t,t===Ht?Ot:0);if(n===0)return null;var r=n,i=re;re|=16;var s=hS();(Ht!==t||Ot!==r)&&(Lo(),Ws(t,r));do try{kP();break}catch(a){cS(t,a)}while(1);if(Ty(),Zc.current=s,re=i,et!==null?r=0:(Ht=null,Ot=0,r=_t),(Oo&Do)!==0)Ws(t,0);else if(r!==0){if(r===2&&(re|=64,t.hydrate&&(t.hydrate=!1,_y(t.containerInfo)),n=gC(t),n!==0&&(r=ka(t,n))),r===1)throw e=sd,Ws(t,0),Hs(t,n),vn(t,Rt()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(O(345));case 2:_i(t);break;case 3:if(Hs(t,n),(n&62914560)===n&&(r=Ly+500-Rt(),10<r)){if(ul(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){rn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=j0(_i.bind(null,t),r);break}_i(t);break;case 4:if(Hs(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-ti(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=Rt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*CP(n/1960))-n,10<n){t.timeoutHandle=j0(_i.bind(null,t),n);break}_i(t);break;case 5:_i(t);break;default:throw Error(O(329))}}return vn(t,Rt()),t.callbackNode===e?aS.bind(null,t):null}function Hs(t,e){for(e&=~Dy,e&=~Do,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ti(e),r=1<<n;t[n]=-1,e&=~r}}function bm(t){if((re&48)!==0)throw Error(O(327));if(di(),t===Ht&&(t.expiredLanes&Ot)!==0){var e=Ot,n=ka(t,e);(Oo&Do)!==0&&(e=ul(t,e),n=ka(t,e))}else e=ul(t,0),n=ka(t,e);if(t.tag!==0&&n===2&&(re|=64,t.hydrate&&(t.hydrate=!1,_y(t.containerInfo)),e=gC(t),e!==0&&(n=ka(t,e))),n===1)throw n=sd,Ws(t,0),Hs(t,e),vn(t,Rt()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,_i(t),vn(t,Rt()),null}function SP(){if(hr!==null){var t=hr;hr=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,vn(e,Rt())})}Jn()}function lS(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Lo(),Jn())}}function uS(t,e){var n=re;re&=-2,re|=8;try{return t(e)}finally{re=n,re===0&&(Lo(),Jn())}}function Bu(t,e){Be(Em,Ki),Ki|=e,Oo|=e}function My(){Ki=Em.current,De(Em)}function Ws(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,iP(n)),et!==null)for(n=et.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&jc();break;case 3:co(),De(Jt),De($t),ky();break;case 5:Iy(r);break;case 4:co();break;case 13:De(je);break;case 19:De(je);break;case 10:Cy(r);break;case 23:case 24:My()}n=n.return}Ht=t,et=ii(t.current,null),Ot=Ki=Oo=e,_t=0,sd=null,Dy=Do=Gl=0}function cS(t,e){do{var n=et;try{if(Ty(),Ba.current=Jc,Gc){for(var r=Ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Gc=!1}if(yl=0,yt=It=Ke=null,za=!1,Oy.current=null,n===null||n.return===null){_t=1,sd=e,et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ot,a.flags|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l;if((a.mode&2)===0){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var h=(je.current&1)!==0,d=o;do{var f;if(f=d.tag===13){var y=d.memoizedState;if(y!==null)f=y.dehydrated!==null;else{var v=d.memoizedProps;f=v.fallback===void 0?!1:v.unstable_avoidThisFallback!==!0?!0:!h}}if(f){var p=d.updateQueue;if(p===null){var m=new Set;m.add(u),d.updateQueue=m}else p.add(u);if((d.mode&2)===0){if(d.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var g=Hr(-1,1);g.tag=2,Wr(a,g)}a.lanes|=1;break e}l=void 0,a=e;var _=s.pingCache;if(_===null?(_=s.pingCache=new vP,l=new Set,_.set(u,l)):(l=_.get(u),l===void 0&&(l=new Set,_.set(u,l))),!l.has(a)){l.add(a);var E=RP.bind(null,s,u,a);u.then(E,E)}d.flags|=4096,d.lanes=e;break e}d=d.return}while(d!==null);l=Error(($s(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}_t!==5&&(_t=2),l=Py(l,a),d=o;do{switch(d.tag){case 3:s=l,d.flags|=4096,e&=-e,d.lanes|=e;var k=iS(d,s,e);G0(d,k);break e;case 1:s=l;var C=d.type,b=d.stateNode;if((d.flags&64)===0&&(typeof C.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(jn===null||!jn.has(b)))){d.flags|=4096,e&=-e,d.lanes|=e;var N=sS(d,s,e);G0(d,N);break e}}d=d.return}while(d!==null)}fS(n)}catch(A){e=A,et===n&&n!==null&&(et=n=n.return);continue}break}while(1)}function hS(){var t=Zc.current;return Zc.current=Jc,t===null?Jc:t}function ka(t,e){var n=re;re|=16;var r=hS();Ht===t&&Ot===e||Ws(t,e);do try{IP();break}catch(i){cS(t,i)}while(1);if(Ty(),re=n,Zc.current=r,et!==null)throw Error(O(261));return Ht=null,Ot=0,_t}function IP(){for(;et!==null;)dS(et)}function kP(){for(;et!==null&&!aP();)dS(et)}function dS(t){var e=mS(t.alternate,t,Ki);t.memoizedProps=t.pendingProps,e===null?fS(t):et=e,Oy.current=null}function fS(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)===0){if(n=gP(n,e,Ki),n!==null){et=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Ki&1073741824)!==0||(n.mode&4)===0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&(t.flags&2048)===0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=yP(e),n!==null){n.flags&=2047,et=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){et=e;return}et=e=t}while(e!==null);_t===0&&(_t=5)}function _i(t){var e=uo();return qi(99,xP.bind(null,t,e)),null}function xP(t,e){do di();while(Ha!==null);if((re&48)!==0)throw Error(O(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(O(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var l=31-ti(s),u=1<<l;i[l]=0,o[l]=-1,a[l]=-1,s&=~u}if(hr!==null&&(r&24)===0&&hr.has(t)&&hr.delete(t),t===Ht&&(et=Ht=null,Ot=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=re,re|=32,Oy.current=null,If=uc,o=D0(),im(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(u=a.getSelection&&a.getSelection())&&u.rangeCount!==0){a=u.anchorNode,s=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var c=0,h=-1,d=-1,f=0,y=0,v=o,p=null;t:for(;;){for(var m;v!==a||s!==0&&v.nodeType!==3||(h=c+s),v!==l||u!==0&&v.nodeType!==3||(d=c+u),v.nodeType===3&&(c+=v.nodeValue.length),(m=v.firstChild)!==null;)p=v,v=m;for(;;){if(v===o)break t;if(p===a&&++f===s&&(h=c),p===l&&++y===u&&(d=c),(m=v.nextSibling)!==null)break;v=p,p=v.parentNode}v=m}a=h===-1||d===-1?null:{start:h,end:d}}else a=null;a=a||{start:0,end:0}}else a=null;kf={focusedElem:o,selectionRange:a},uc=!1,qa=null,gc=!1,B=r;do try{bP()}catch(A){if(B===null)throw Error(O(330));Gr(B,A),B=B.nextEffect}while(B!==null);qa=null,B=r;do try{for(o=t;B!==null;){var g=B.flags;if(g&16&&sl(B.stateNode,""),g&128){var _=B.alternate;if(_!==null){var E=_.ref;E!==null&&(typeof E=="function"?E(null):E.current=null)}}switch(g&1038){case 2:_w(B),B.flags&=-3;break;case 6:_w(B),B.flags&=-3,Of(B.alternate,B);break;case 1024:B.flags&=-1025;break;case 1028:B.flags&=-1025,Of(B.alternate,B);break;case 4:Of(B.alternate,B);break;case 8:a=B,oS(o,a);var k=a.alternate;yw(a),k!==null&&yw(k)}B=B.nextEffect}}catch(A){if(B===null)throw Error(O(330));Gr(B,A),B=B.nextEffect}while(B!==null);if(E=kf,_=D0(),g=E.focusedElem,o=E.selectionRange,_!==g&&g&&g.ownerDocument&&SC(g.ownerDocument.documentElement,g)){for(o!==null&&im(g)&&(_=o.start,E=o.end,E===void 0&&(E=_),"selectionStart"in g?(g.selectionStart=_,g.selectionEnd=Math.min(E,g.value.length)):(E=(_=g.ownerDocument||document)&&_.defaultView||window,E.getSelection&&(E=E.getSelection(),a=g.textContent.length,k=Math.min(o.start,a),o=o.end===void 0?k:Math.min(o.end,a),!E.extend&&k>o&&(a=o,o=k,k=a),a=O0(g,k),s=O0(g,o),a&&s&&(E.rangeCount!==1||E.anchorNode!==a.node||E.anchorOffset!==a.offset||E.focusNode!==s.node||E.focusOffset!==s.offset)&&(_=_.createRange(),_.setStart(a.node,a.offset),E.removeAllRanges(),k>o?(E.addRange(_),E.extend(s.node,s.offset)):(_.setEnd(s.node,s.offset),E.addRange(_)))))),_=[],E=g;E=E.parentNode;)E.nodeType===1&&_.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<_.length;g++)E=_[g],E.element.scrollLeft=E.left,E.element.scrollTop=E.top}uc=!!If,kf=If=null,t.current=n,B=r;do try{for(g=t;B!==null;){var C=B.flags;if(C&36&&EP(g,B.alternate,B),C&128){_=void 0;var b=B.ref;if(b!==null){var N=B.stateNode;switch(B.tag){case 5:_=N;break;default:_=N}typeof b=="function"?b(_):b.current=_}}B=B.nextEffect}}catch(A){if(B===null)throw Error(O(330));Gr(B,A),B=B.nextEffect}while(B!==null);B=null,uP(),re=i}else t.current=n;if(ri)ri=!1,Ha=t,Ia=e;else for(B=r;B!==null;)e=B.nextEffect,B.nextEffect=null,B.flags&8&&(C=B,C.sibling=null,C.stateNode=null),B=e;if(r=t.pendingLanes,r===0&&(jn=null),r===1?t===xm?Wa++:(Wa=0,xm=t):Wa=0,n=n.stateNode,$i&&typeof $i.onCommitFiberRoot=="function")try{$i.onCommitFiberRoot(wy,n,void 0,(n.current.flags&64)===64)}catch{}if(vn(t,Rt()),eh)throw eh=!1,t=Sm,Sm=null,t;return(re&8)!==0||Jn(),null}function bP(){for(;B!==null;){var t=B.alternate;gc||qa===null||((B.flags&8)!==0?_0(B,qa)&&(gc=!0):B.tag===13&&TP(t,B)&&_0(B,qa)&&(gc=!0));var e=B.flags;(e&256)!==0&&wP(t,B),(e&512)===0||ri||(ri=!0,fl(97,function(){return di(),null})),B=B.nextEffect}}function di(){if(Ia!==90){var t=97<Ia?97:Ia;return Ia=90,qi(t,NP)}return!1}function AP(t,e){Im.push(e,t),ri||(ri=!0,fl(97,function(){return di(),null}))}function pS(t,e){km.push(e,t),ri||(ri=!0,fl(97,function(){return di(),null}))}function NP(){if(Ha===null)return!1;var t=Ha;if(Ha=null,(re&48)!==0)throw Error(O(331));var e=re;re|=32;var n=km;km=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(l){if(s===null)throw Error(O(330));Gr(s,l)}}for(n=Im,Im=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(l){if(s===null)throw Error(O(330));Gr(s,l)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return re=e,Jn(),!0}function Ew(t,e,n){e=Py(n,e),e=iS(t,e,1),Wr(t,e),e=rn(),t=od(t,1),t!==null&&(Jh(t,1,e),vn(t,e))}function Gr(t,e){if(t.tag===3)Ew(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){Ew(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){t=Py(e,t);var i=sS(n,t,1);if(Wr(n,i),i=rn(),n=od(n,1),n!==null)Jh(n,1,i),vn(n,i);else if(typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function RP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&(Ot&n)===n&&(_t===4||_t===3&&(Ot&62914560)===Ot&&500>Rt()-Ly?Ws(t,0):Dy|=n),vn(t,e)}function PP(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)===0?e=1:(e&4)===0?e=uo()===99?1:2:(rr===0&&(rr=Oo),e=Cs(62914560&~rr),e===0&&(e=4194304))),n=rn(),t=od(t,e),t!==null&&(Jh(t,e,n),vn(t,n))}var mS;mS=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)xn=!0;else if((n&r)!==0)xn=(t.flags&16384)!==0;else{switch(xn=!1,e.tag){case 3:aw(e),Nf();break;case 5:J0(e);break;case 1:Zt(e.type)&&dc(e);break;case 4:dm(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;Be(Bc,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!==0?lw(t,e,n):(Be(je,je.current&1),e=sr(t,e,n),e!==null?e.sibling:null);Be(je,je.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&64)!==0){if(r)return fw(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Be(je,je.current),r)break;return null;case 23:case 24:return e.lanes=0,Rf(t,e,n)}return sr(t,e,n)}else xn=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=lo(e,$t.current),Bs(e,n),i=by(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zt(r)){var s=!0;dc(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sy(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&Wc(e,r,o,t),i.updater=id,e.stateNode=i,i._reactInternals=e,hm(e,r,t,n),e=gm(null,e,r,!0,s,n)}else e.tag=0,Gt(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=DP(i),t=Sn(i,t),s){case 0:e=mm(null,e,i,t,n);break e;case 1:e=ow(null,e,i,t,n);break e;case 11:e=iw(null,e,i,t,n);break e;case 14:e=sw(null,e,i,Sn(i.type,t),r,n);break e}throw Error(O(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),mm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),ow(t,e,r,i,n);case 3:if(aw(e),r=e.updateQueue,t===null||r===null)throw Error(O(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,VC(t,e),pl(e,r,null,n),r=e.memoizedState.element,r===i)Nf(),e=sr(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(Mr=js(e.stateNode.containerInfo.firstChild),ir=e,s=qn=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],zs.push(s);for(n=HC(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else Gt(t,e,r,n),Nf();e=e.child}return e;case 5:return J0(e),t===null&&fm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,am(r,i)?o=null:s!==null&&am(r,s)&&(e.flags|=16),eS(t,e),Gt(t,e,o,n),e.child;case 6:return t===null&&fm(e),null;case 13:return lw(t,e,n);case 4:return dm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=qc(e,null,r,n):Gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),iw(t,e,r,i,n);case 7:return Gt(t,e,e.pendingProps,n),e.child;case 8:return Gt(t,e,e.pendingProps.children,n),e.child;case 12:return Gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(Be(Bc,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=fn(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!Jt.current){e=sr(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var u=l.firstContext;u!==null;){if(u.context===r&&(u.observedBits&s)!==0){a.tag===1&&(u=Hr(-1,n&-n),u.tag=2,Wr(a,u)),a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),UC(a.return,n),l.lanes|=n;break}u=u.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,Bs(e,n),i=yn(i,s.unstable_observedBits),r=r(i),e.flags|=1,Gt(t,e,r,n),e.child;case 14:return i=e.type,s=Sn(i,e.pendingProps),s=Sn(i.type,s),sw(t,e,i,s,r,n);case 15:return ZC(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,Zt(r)?(t=!0,dc(e)):t=!1,Bs(e,n),BC(e,r,i),hm(e,r,i,n),gm(null,e,r,!0,t,n);case 19:return fw(t,e,n);case 23:return Rf(t,e,n);case 24:return Rf(t,e,n)}throw Error(O(156,e.tag))};function OP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(t,e,n,r){return new OP(t,e,n,r)}function $y(t){return t=t.prototype,!(!t||!t.isReactComponent)}function DP(t){if(typeof t=="function")return $y(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qh)return 11;if(t===Yh)return 14}return 2}function ii(t,e){var n=t.alternate;return n===null?(n=pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")$y(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case br:return qs(n.children,i,s,e);case WT:o=8,i|=16;break;case Zg:o=8,i|=1;break;case La:return t=pn(12,n,e,i|8),t.elementType=La,t.type=La,t.lanes=s,t;case Ma:return t=pn(13,n,e,i),t.type=Ma,t.elementType=Ma,t.lanes=s,t;case Oc:return t=pn(19,n,e,i),t.elementType=Oc,t.lanes=s,t;case sy:return Fy(n,i,s,e);case zp:return t=pn(24,n,e,i),t.elementType=zp,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ey:o=10;break e;case ty:o=9;break e;case Qh:o=11;break e;case Yh:o=14;break e;case ny:o=16,r=null;break e;case ry:o=22;break e}throw Error(O(130,t==null?t:typeof t,""))}return e=pn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function qs(t,e,n,r){return t=pn(7,t,r,e),t.lanes=n,t}function Fy(t,e,n,r){return t=pn(23,t,r,e),t.elementType=sy,t.lanes=n,t}function Df(t,e,n){return t=pn(6,t,null,e),t.lanes=n,t}function Lf(t,e,n){return e=pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function LP(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=vf(0),this.expirationTimes=vf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vf(0),this.mutableSourceEagerHydrationData=null}function MP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ii,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function th(t,e,n,r){var i=e.current,s=rn(),o=qr(i);e:if(n){n=n._reactInternals;t:{if(cs(n)!==n||n.tag!==1)throw Error(O(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(Zt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(O(171))}if(n.tag===1){var l=n.type;if(Zt(l)){n=PC(n,l,a);break e}}n=a}else n=ni;return e.context===null?e.context=n:e.pendingContext=n,e=Hr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),Wr(i,e),Kr(i,o,s),o}function Mf(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Uy(t,e){Tw(t,e),(t=t.alternate)&&Tw(t,e)}function $P(){return null}function Vy(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new LP(t,e,n!=null&&n.hydrate===!0),e=pn(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,Sy(e),t[Po]=n.current,xC(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}Vy.prototype.render=function(t){th(t,this._internalRoot,null,null)};Vy.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;th(null,t,null,function(){e[Po]=null})};function Ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function FP(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new Vy(t,0,e?{hydrate:!0}:void 0)}function ad(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var u=Mf(o);a.call(u)}}th(e,o,t,i)}else{if(s=n._reactRootContainer=FP(n,r),o=s._internalRoot,typeof i=="function"){var l=i;i=function(){var u=Mf(o);l.call(u)}}uS(function(){th(e,o,t,i)})}return Mf(o)}oC=function(t){if(t.tag===13){var e=rn();Kr(t,4,e),Uy(t,4)}};cy=function(t){if(t.tag===13){var e=rn();Kr(t,67108864,e),Uy(t,67108864)}};aC=function(t){if(t.tag===13){var e=rn(),n=qr(t);Kr(t,n,e),Uy(t,n)}};lC=function(t,e){return e()};Zp=function(t,e,n){switch(e){case"input":if(Wp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=nd(r);if(!i)throw Error(O(90));KT(r),Wp(r,i)}}}break;case"textarea":QT(t,n);break;case"select":e=n.value,e!=null&&Fs(t,!!n.multiple,e,!1)}};ay=lS;nC=function(t,e,n,r,i){var s=re;re|=4;try{return qi(98,t.bind(null,e,n,r,i))}finally{re=s,re===0&&(Lo(),Jn())}};ly=function(){(re&49)===0&&(SP(),di())};rC=function(t,e){var n=re;re|=2;try{return t(e)}finally{re=n,re===0&&(Lo(),Jn())}};function gS(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ql(e))throw Error(O(200));return MP(t,e,null,n)}var UP={Events:[ql,As,nd,eC,tC,di,{current:!1}]},ha={findFiberByHostInstance:xi,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},VP={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:us.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sC(t),t===null?null:t.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||$P,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zu.isDisabled&&zu.supportsFiber)try{wy=zu.inject(VP),$i=zu}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UP;wn.createPortal=gS;wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):Error(O(268,Object.keys(t)));return t=sC(e),t=t===null?null:t.stateNode,t};wn.flushSync=function(t,e){var n=re;if((n&48)!==0)return t(e);re|=1;try{if(t)return qi(99,t.bind(null,e))}finally{re=n,Jn()}};wn.hydrate=function(t,e,n){if(!Ql(e))throw Error(O(200));return ad(null,t,e,!0,n)};wn.render=function(t,e,n){if(!Ql(e))throw Error(O(200));return ad(null,t,e,!1,n)};wn.unmountComponentAtNode=function(t){if(!Ql(t))throw Error(O(40));return t._reactRootContainer?(uS(function(){ad(null,null,t,!1,function(){t._reactRootContainer=null,t[Po]=null})}),!0):!1};wn.unstable_batchedUpdates=lS;wn.unstable_createPortal=function(t,e){return gS(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};wn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ql(n))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return ad(t,e,n,!1,r)};wn.version="17.0.2";function yS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yS)}catch(t){console.error(t)}}yS(),Qg.exports=wn;var jP=Qg.exports;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(t,e){if(!t)throw Mo(e)},Mo=function(t){return new Error("Firebase Database ("+vS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},BP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},jy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_S(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new zP;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wS=function(t){const e=_S(t);return jy.encodeByteArray(e,!0)},nh=function(t){return wS(t).replace(/\./g,"")},rh=function(t){try{return jy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(t){return ES(void 0,t)}function ES(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!WP(n)||(t[n]=ES(t[n],e[n]));return t}function WP(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP=()=>qP().__FIREBASE_DEFAULTS__,GP=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},QP=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rh(t[1]);return e&&JSON.parse(e)},By=()=>{try{return KP()||GP()||QP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},TS=t=>{var e,n;return(n=(e=By())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},YP=t=>{const e=TS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},CS=()=>{var t;return(t=By())===null||t===void 0?void 0:t.config},SS=t=>{var e;return(e=By())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[nh(JSON.stringify(n)),nh(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hy(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function JP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function IS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZP(){const t=Ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kS(){return vS.NODE_ADMIN===!0}function xS(){try{return typeof indexedDB=="object"}catch{return!1}}function eO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO="FirebaseError";class en extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tO,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ds.prototype.create)}}class ds{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?nO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new en(i,a,r)}}function nO(t,e){return t.replace(rO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const rO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(t){return JSON.parse(t)}function ut(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=vl(rh(s[0])||""),n=vl(rh(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},iO=function(t){const e=bS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},sO=function(t){const e=bS(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ho(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Am(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ih(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function sh(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Cw(s)&&Cw(o)){if(!sh(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ba(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):h<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function aO(t,e){const n=new lO(t,e);return n.subscribe.bind(n)}class lO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");uO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=$f),i.error===void 0&&(i.error=$f),i.complete===void 0&&(i.complete=$f);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $f(){}function AS(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,L(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ld=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO=1e3,dO=2,fO=4*60*60*1e3,pO=.5;function mO(t,e=hO,n=dO){const r=e*Math.pow(n,t),i=Math.round(pO*r*(Math.random()-.5)*2);return Math.min(fO,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){return t&&t._delegate?t._delegate:t}class on{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vO(e))try{this.getOrInitializeService({instanceIdentifier:wi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wi){return this.instances.has(e)}getOptions(e=wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wi){return this.component?this.component.multipleInstances?e:wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yO(t){return t===wi?void 0:t}function vO(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const wO={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},EO=me.INFO,TO={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},CO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=TO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yl{constructor(e){this.name=e,this._logLevel=EO,this._logHandler=CO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const SO=(t,e)=>e.some(n=>t instanceof n);let Sw,Iw;function IO(){return Sw||(Sw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kO(){return Iw||(Iw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const NS=new WeakMap,Nm=new WeakMap,RS=new WeakMap,Ff=new WeakMap,Wy=new WeakMap;function xO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Qr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&NS.set(n,t)}).catch(()=>{}),Wy.set(e,t),e}function bO(t){if(Nm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Nm.set(t,e)}let Rm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||RS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AO(t){Rm=t(Rm)}function NO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Uf(this),e,...n);return RS.set(r,e.sort?e.sort():[e]),Qr(r)}:kO().includes(t)?function(...e){return t.apply(Uf(this),e),Qr(NS.get(this))}:function(...e){return Qr(t.apply(Uf(this),e))}}function RO(t){return typeof t=="function"?NO(t):(t instanceof IDBTransaction&&bO(t),SO(t,IO())?new Proxy(t,Rm):t)}function Qr(t){if(t instanceof IDBRequest)return xO(t);if(Ff.has(t))return Ff.get(t);const e=RO(t);return e!==t&&(Ff.set(t,e),Wy.set(e,t)),e}const Uf=t=>Wy.get(t);function PO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Qr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Qr(o.result),l.oldVersion,l.newVersion,Qr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const OO=["get","getKey","getAll","getAllKeys","count"],DO=["put","add","delete","clear"],Vf=new Map;function kw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vf.get(e))return Vf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=DO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||OO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Vf.set(e,s),s}AO(t=>({...t,get:(e,n,r)=>kw(e,n)||t.get(e,n,r),has:(e,n)=>!!kw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function MO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pm="@firebase/app",xw="0.9.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new Yl("@firebase/app"),$O="@firebase/app-compat",FO="@firebase/analytics-compat",UO="@firebase/analytics",VO="@firebase/app-check-compat",jO="@firebase/app-check",BO="@firebase/auth",zO="@firebase/auth-compat",HO="@firebase/database",WO="@firebase/database-compat",qO="@firebase/functions",KO="@firebase/functions-compat",GO="@firebase/installations",QO="@firebase/installations-compat",YO="@firebase/messaging",XO="@firebase/messaging-compat",JO="@firebase/performance",ZO="@firebase/performance-compat",eD="@firebase/remote-config",tD="@firebase/remote-config-compat",nD="@firebase/storage",rD="@firebase/storage-compat",iD="@firebase/firestore",sD="@firebase/firestore-compat",oD="firebase",aD="9.22.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="[DEFAULT]",lD={[Pm]:"fire-core",[$O]:"fire-core-compat",[UO]:"fire-analytics",[FO]:"fire-analytics-compat",[jO]:"fire-app-check",[VO]:"fire-app-check-compat",[BO]:"fire-auth",[zO]:"fire-auth-compat",[HO]:"fire-rtdb",[WO]:"fire-rtdb-compat",[qO]:"fire-fn",[KO]:"fire-fn-compat",[GO]:"fire-iid",[QO]:"fire-iid-compat",[YO]:"fire-fcm",[XO]:"fire-fcm-compat",[JO]:"fire-perf",[ZO]:"fire-perf-compat",[eD]:"fire-rc",[tD]:"fire-rc-compat",[nD]:"fire-gcs",[rD]:"fire-gcs-compat",[iD]:"fire-fst",[sD]:"fire-fst-compat","fire-js":"fire-js",[oD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=new Map,Dm=new Map;function uD(t,e){try{t.container.addComponent(e)}catch(n){Gi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _n(t){const e=t.name;if(Dm.has(e))return Gi.debug(`There were multiple attempts to register component ${e}.`),!1;Dm.set(e,t);for(const n of _l.values())uD(n,t);return!0}function Xl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yr=new ds("app","Firebase",cD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new on("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=aD;function PS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Om,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Yr.create("bad-app-name",{appName:String(i)});if(n||(n=CS()),!n)throw Yr.create("no-options");const s=_l.get(i);if(s){if(sh(n,s.options)&&sh(r,s.config))return s;throw Yr.create("duplicate-app",{appName:i})}const o=new _O(i);for(const l of Dm.values())o.addComponent(l);const a=new hD(n,r,o);return _l.set(i,a),a}function OS(t=Om){const e=_l.get(t);if(!e&&t===Om&&CS())return PS();if(!e)throw Yr.create("no-app",{appName:t});return e}function dD(){return Array.from(_l.values())}function Je(t,e,n){var r;let i=(r=lD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gi.warn(a.join(" "));return}_n(new on(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD="firebase-heartbeat-database",pD=1,wl="firebase-heartbeat-store";let jf=null;function DS(){return jf||(jf=PO(fD,pD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wl)}}}).catch(t=>{throw Yr.create("idb-open",{originalErrorMessage:t.message})})),jf}async function mD(t){try{return await(await DS()).transaction(wl).objectStore(wl).get(LS(t))}catch(e){if(e instanceof en)Gi.warn(e.message);else{const n=Yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gi.warn(n.message)}}}async function bw(t,e){try{const r=(await DS()).transaction(wl,"readwrite");await r.objectStore(wl).put(e,LS(t)),await r.done}catch(n){if(n instanceof en)Gi.warn(n.message);else{const r=Yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gi.warn(r.message)}}}function LS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD=1024,yD=30*24*60*60*1e3;class vD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Aw();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=yD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Aw(),{heartbeatsToSend:n,unsentEntries:r}=_D(this._heartbeatsCache.heartbeats),i=nh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Aw(){return new Date().toISOString().substring(0,10)}function _D(t,e=gD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Nw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Nw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xS()?eO().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await mD(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Nw(t){return nh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(t){_n(new on("platform-logger",e=>new LO(e),"PRIVATE")),_n(new on("heartbeat",e=>new vD(e),"PRIVATE")),Je(Pm,xw,t),Je(Pm,xw,"esm2017"),Je("fire-js","")}ED("");function qy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function MS(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TD=MS,$S=new ds("auth","Firebase",MS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=new Yl("@firebase/auth");function CD(t,...e){oh.logLevel<=me.WARN&&oh.warn(`Auth (${Tr}): ${t}`,...e)}function vc(t,...e){oh.logLevel<=me.ERROR&&oh.error(`Auth (${Tr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,...e){throw Ky(t,...e)}function Kn(t,...e){return Ky(t,...e)}function SD(t,e,n){const r=Object.assign(Object.assign({},TD()),{[e]:n});return new ds("auth","Firebase",r).create(e,{appName:t.name})}function Ky(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $S.create(t,...e)}function ne(t,e,...n){if(!t)throw Ky(e,...n)}function or(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vc(e),new Error(e)}function gr(t,e){t||or(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ID(){return Rw()==="http:"||Rw()==="https:"}function Rw(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kD(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ID()||JP()||"connection"in navigator)?navigator.onLine:!0}function xD(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n){this.shortDelay=e,this.longDelay=n,gr(n>e,"Short delay should be less than long delay!"),this.isMobile=Hy()||IS()}get(){return kD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(t,e){gr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=new Jl(3e4,6e4);function Fo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Uo(t,e,n,r,i={}){return US(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=$o(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),FS.fetch()(VS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function US(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bD),e);try{const i=new ND(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Hu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Hu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Hu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw SD(t,c,u);Pn(t,c)}}catch(i){if(i instanceof en)throw i;Pn(t,"network-request-failed",{message:String(i)})}}async function Zl(t,e,n,r,i={}){const s=await Uo(t,e,n,r,i);return"mfaPendingCredential"in s&&Pn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function VS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Gy(t.config,i):`${t.config.apiScheme}://${i}`}class ND{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kn(this.auth,"network-request-failed")),AD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Kn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RD(t,e){return Uo(t,"POST","/v1/accounts:delete",e)}async function PD(t,e){return Uo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OD(t,e=!1){const n=Ct(t),r=await n.getIdToken(e),i=Qy(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ka(Bf(i.auth_time)),issuedAtTime:Ka(Bf(i.iat)),expirationTime:Ka(Bf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bf(t){return Number(t)*1e3}function Qy(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vc("JWT malformed, contained fewer than 3 sections"),null;try{const i=rh(n);return i?JSON.parse(i):(vc("Failed to decode base64 JWT payload"),null)}catch(i){return vc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function DD(t){const e=Qy(t);return ne(e,"internal-error"),ne(typeof e.exp!="undefined","internal-error"),ne(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof en&&LD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ka(this.lastLoginAt),this.creationTime=Ka(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ah(t){var e;const n=t.auth,r=await t.getIdToken(),i=await El(t,PD(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?UD(s.providerUserInfo):[],a=FD(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function $D(t){const e=Ct(t);await ah(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function UD(t){return t.map(e=>{var{providerId:n}=e,r=qy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VD(t,e){const n=await US(t,{},async()=>{const r=$o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=VS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",FS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken!="undefined","internal-error"),ne(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):DD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await VD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Tl;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tl,this.toJSON())}_performRefresh(){return or("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t,e){ne(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Fi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=qy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await El(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return OD(this,e)}reload(){return $D(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Fi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ah(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await El(this,RD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,p=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,g=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:_,emailVerified:E,isAnonymous:k,providerData:C,stsTokenManager:b}=n;ne(_&&b,e,"internal-error");const N=Tl.fromJSON(this.name,b);ne(typeof _=="string",e,"internal-error"),Ir(h,e.name),Ir(d,e.name),ne(typeof E=="boolean",e,"internal-error"),ne(typeof k=="boolean",e,"internal-error"),Ir(f,e.name),Ir(y,e.name),Ir(v,e.name),Ir(p,e.name),Ir(m,e.name),Ir(g,e.name);const A=new Fi({uid:_,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:k,photoURL:y,phoneNumber:f,tenantId:v,stsTokenManager:N,createdAt:m,lastLoginAt:g});return C&&Array.isArray(C)&&(A.providerData=C.map(X=>Object.assign({},X))),p&&(A._redirectEventId=p),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Tl;i.updateFromServerResponse(n);const s=new Fi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ah(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=new Map;function ar(t){gr(t instanceof Function,"Expected a class definition");let e=Pw.get(t);return e?(gr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pw.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}BS.type="NONE";const Ow=BS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(t,e,n){return`firebase:${t}:${e}:${n}`}class Ks{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_c(this.userKey,i.apiKey,s),this.fullPersistenceKey=_c("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ks(ar(Ow),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ar(Ow);const o=_c(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Fi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ks(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ks(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(WS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(KS(e))return"Blackberry";if(GS(e))return"Webos";if(Yy(e))return"Safari";if((e.includes("chrome/")||HS(e))&&!e.includes("edge/"))return"Chrome";if(qS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zS(t=Ft()){return/firefox\//i.test(t)}function Yy(t=Ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function HS(t=Ft()){return/crios\//i.test(t)}function WS(t=Ft()){return/iemobile/i.test(t)}function qS(t=Ft()){return/android/i.test(t)}function KS(t=Ft()){return/blackberry/i.test(t)}function GS(t=Ft()){return/webos/i.test(t)}function ud(t=Ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jD(t=Ft()){var e;return ud(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BD(){return ZP()&&document.documentMode===10}function QS(t=Ft()){return ud(t)||qS(t)||GS(t)||KS(t)||/windows phone/i.test(t)||WS(t)}function zD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t,e=[]){let n;switch(t){case"Browser":n=Dw(Ft());break;case"Worker":n=`${Dw(Ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Tr}/${r}`}async function XS(t,e){return Uo(t,"GET","/v2/recaptchaConfig",Fo(t,e))}function Lw(t){return t!==void 0&&t.enterprise!==void 0}class JS{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ZS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Kn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",HD().appendChild(r)})}function WD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const qD="https://www.google.com/recaptcha/enterprise.js?render=",KD="recaptcha-enterprise",GD="NO_RECAPTCHA";class eI{constructor(e){this.type=KD,this.auth=Vo(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{XS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new JS(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Lw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(GD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Lw(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ZS(qD+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function lh(t,e,n,r=!1){const i=new eI(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mw(this),this.idTokenSubscription=new Mw(this),this.beforeStateQueue=new QD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$S,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ar(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ah(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ct(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ar(e))})}async initializeRecaptchaConfig(){const e=await XS(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new JS(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new eI(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ds("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ar(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Ks.create(this,[ar(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ne(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=YS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vo(t){return Ct(t)}class Mw{constructor(e){this.auth=e,this.observer=null,this.addObserver=aO(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XD(t,e){const n=Xl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(sh(s,e!=null?e:{}))return i;Pn(i,"already-initialized")}return n.initialize({options:e})}function JD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ar);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ZD(t,e,n){const r=Vo(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=tI(e),{host:o,port:a}=eL(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||tL()}function tI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eL(t){const e=tI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:$w(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:$w(o)}}}function $w(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return or("not implemented")}_getIdTokenResponse(e){return or("not implemented")}_linkToIdToken(e,n){return or("not implemented")}_getReauthenticationResolver(e){return or("not implemented")}}async function nL(t,e){return Uo(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zf(t,e){return Zl(t,"POST","/v1/accounts:signInWithPassword",Fo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rL(t,e){return Zl(t,"POST","/v1/accounts:signInWithEmailLink",Fo(t,e))}async function iL(t,e){return Zl(t,"POST","/v1/accounts:signInWithEmailLink",Fo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends Xy{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Cl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Cl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await lh(e,r,"signInWithPassword");return zf(e,i)}else return zf(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await lh(e,r,"signInWithPassword");return zf(e,s)}else return Promise.reject(i)});case"emailLink":return rL(e,{email:this._email,oobCode:this._password});default:Pn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return nL(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return iL(e,{idToken:n,email:this._email,oobCode:this._password});default:Pn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(t,e){return Zl(t,"POST","/v1/accounts:signInWithIdp",Fo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL="http://localhost";class Qi extends Xy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=qy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Qi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gs(e,n)}buildRequest(){const e={requestUri:sL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$o(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aL(t){const e=xa(ba(t)).link,n=e?xa(ba(e)).deep_link_id:null,r=xa(ba(t)).deep_link_id;return(r?xa(ba(r)).link:null)||r||n||e||t}class Jy{constructor(e){var n,r,i,s,o,a;const l=xa(ba(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=oL((i=l.mode)!==null&&i!==void 0?i:null);ne(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=aL(e);try{return new Jy(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(){this.providerId=jo.PROVIDER_ID}static credential(e,n){return Cl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Jy.parseLink(n);return ne(r,"argument-error"),Cl._fromEmailAndCode(e,r.code,r.tenantId)}}jo.PROVIDER_ID="password";jo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";jo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu extends nI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends eu{constructor(){super("facebook.com")}static credential(e){return Qi._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ar.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends eu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qi._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nr.credential(n,r)}catch{return null}}}Nr.GOOGLE_SIGN_IN_METHOD="google.com";Nr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends eu{constructor(){super("github.com")}static credential(e){return Qi._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.GITHUB_SIGN_IN_METHOD="github.com";Rr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends eu{constructor(){super("twitter.com")}static credential(e,n){return Qi._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pr.credential(n,r)}catch{return null}}}Pr.TWITTER_SIGN_IN_METHOD="twitter.com";Pr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hf(t,e){return Zl(t,"POST","/v1/accounts:signUp",Fo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Fi._fromIdTokenResponse(e,r,i),o=Fw(r);return new Yi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Fw(r);return new Yi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Fw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh extends en{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,uh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new uh(e,n,r,i)}}function rI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?uh._fromErrorAndOperation(t,s,e,r):s})}async function lL(t,e,n=!1){const r=await El(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uL(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await El(t,rI(r,i,e,t),n);ne(s.idToken,r,"internal-error");const o=Qy(s.idToken);ne(o,r,"internal-error");const{sub:a}=o;return ne(t.uid===a,r,"user-mismatch"),Yi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Pn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(t,e,n=!1){const r="signIn",i=await rI(t,r,e),s=await Yi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function cL(t,e){return iI(Vo(t),e)}async function hL(t,e,n){var r;const i=Vo(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await lh(i,s,"signUpPassword");o=Hf(i,u)}else o=Hf(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await lh(i,s,"signUpPassword");return Hf(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Yi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function dL(t,e,n){return cL(Ct(t),jo.credential(e,n))}function sI(t,e,n,r){return Ct(t).onIdTokenChanged(e,n,r)}function fL(t,e,n){return Ct(t).beforeAuthStateChanged(e,n)}const ch="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ch,"1"),this.storage.removeItem(ch),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pL(){const t=Ft();return Yy(t)||ud(t)}const mL=1e3,gL=10;class aI extends oI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pL()&&zD(),this.fallbackToPolling=QS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);BD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}aI.type="LOCAL";const yL=aI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI extends oI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lI.type="SESSION";const uI=lI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vL(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new cd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await vL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Zy("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(){return window}function wL(t){Gn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(){return typeof Gn().WorkerGlobalScope!="undefined"&&typeof Gn().importScripts=="function"}async function EL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CL(){return cI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI="firebaseLocalStorageDb",SL=1,hh="firebaseLocalStorage",dI="fbase_key";class tu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hd(t,e){return t.transaction([hh],e?"readwrite":"readonly").objectStore(hh)}function IL(){const t=indexedDB.deleteDatabase(hI);return new tu(t).toPromise()}function Mm(){const t=indexedDB.open(hI,SL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hh,{keyPath:dI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hh)?e(r):(r.close(),await IL(),e(await Mm()))})})}async function Uw(t,e,n){const r=hd(t,!0).put({[dI]:e,value:n});return new tu(r).toPromise()}async function kL(t,e){const n=hd(t,!1).get(e),r=await new tu(n).toPromise();return r===void 0?null:r.value}function Vw(t,e){const n=hd(t,!0).delete(e);return new tu(n).toPromise()}const xL=800,bL=3;class fI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cd._getInstance(CL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await EL(),!this.activeServiceWorker)return;this.sender=new _L(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mm();return await Uw(e,ch,"1"),await Vw(e,ch),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Uw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=hd(i,!1).getAll();return new tu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fI.type="LOCAL";const AL=fI;new Jl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NL(t,e){return e?ar(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev extends Xy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function RL(t){return iI(t.auth,new ev(t),t.bypassAuthState)}function PL(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),uL(n,new ev(t),t.bypassAuthState)}async function OL(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),lL(n,new ev(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RL;case"linkViaPopup":case"linkViaRedirect":return OL;case"reauthViaPopup":case"reauthViaRedirect":return PL;default:Pn(this.auth,"internal-error")}}resolve(e){gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DL=new Jl(2e3,1e4);class Ps extends pI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ps.currentPopupAction&&Ps.currentPopupAction.cancel(),Ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){gr(this.filter.length===1,"Popup operations only handle one event");const e=Zy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DL.get())};e()}}Ps.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL="pendingRedirect",wc=new Map;class ML extends pI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wc.get(this.auth._key());if(!e){try{const r=await $L(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wc.set(this.auth._key(),e)}return this.bypassAuthState||wc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $L(t,e){const n=VL(e),r=UL(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function FL(t,e){wc.set(t._key(),e)}function UL(t){return ar(t._redirectPersistence)}function VL(t){return _c(LL,t.config.apiKey,t.name)}async function jL(t,e,n=!1){const r=Vo(t),i=NL(r,e),o=await new ML(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BL=10*60*1e3;class zL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BL&&this.cachedEventUids.clear(),this.cachedEventUids.has(jw(e))}saveEventToCache(e){this.cachedEventUids.add(jw(e)),this.lastProcessedEventTime=Date.now()}}function jw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WL(t,e={}){return Uo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KL=/^https?/;async function GL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WL(t);for(const n of e)try{if(QL(n))return}catch{}Pn(t,"unauthorized-domain")}function QL(t){const e=Lm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!KL.test(n))return!1;if(qL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YL=new Jl(3e4,6e4);function Bw(){const t=Gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XL(t){return new Promise((e,n)=>{var r,i,s;function o(){Bw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bw(),n(Kn(t,"network-request-failed"))},timeout:YL.get()})}if(!((i=(r=Gn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Gn().gapi)===null||s===void 0)&&s.load)o();else{const a=WD("iframefcb");return Gn()[a]=()=>{gapi.load?o():n(Kn(t,"network-request-failed"))},ZS(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ec=null,e})}let Ec=null;function JL(t){return Ec=Ec||XL(t),Ec}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZL=new Jl(5e3,15e3),eM="__/auth/iframe",tM="emulator/auth/iframe",nM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iM(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gy(e,tM):`https://${t.config.authDomain}/${eM}`,r={apiKey:e.apiKey,appName:t.name,v:Tr},i=rM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${$o(r).slice(1)}`}async function sM(t){const e=await JL(t),n=Gn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:iM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Kn(t,"network-request-failed"),a=Gn().setTimeout(()=>{s(o)},ZL.get());function l(){Gn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aM=500,lM=600,uM="_blank",cM="http://localhost";class zw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hM(t,e,n,r=aM,i=lM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},oM),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ft().toLowerCase();n&&(a=HS(u)?uM:n),zS(u)&&(e=e||cM,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(jD(u)&&a!=="_self")return dM(e||"",a),new zw(null);const h=window.open(e||"",a,c);ne(h,t,"popup-blocked");try{h.focus()}catch{}return new zw(h)}function dM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fM="__/auth/handler",pM="emulator/auth/handler",mM=encodeURIComponent("fac");async function Hw(t,e,n,r,i,s){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Tr,eventId:i};if(e instanceof nI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Am(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof eu){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${mM}=${encodeURIComponent(l)}`:"";return`${gM(t)}?${$o(a).slice(1)}${u}`}function gM({config:t}){return t.emulator?Gy(t,pM):`https://${t.authDomain}/${fM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="webStorageSupport";class yM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uI,this._completeRedirectFn=jL,this._overrideRedirectResult=FL}async _openPopup(e,n,r,i){var s;gr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Hw(e,n,r,Lm(),i);return hM(e,o,Zy())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Hw(e,n,r,Lm(),i);return wL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(gr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sM(e),r=new zL(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wf,{type:Wf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Wf];o!==void 0&&n(!!o),Pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return QS()||Yy()||ud()}}const vM=yM;var Ww="@firebase/auth",qw="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function EM(t){_n(new on("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:YS(t)},u=new YD(r,i,s,l);return JD(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_n(new on("auth-internal",e=>{const n=Vo(e.getProvider("auth").getImmediate());return(r=>new _M(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Je(Ww,qw,wM(t)),Je(Ww,qw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TM=5*60,CM=SS("authIdTokenMaxAge")||TM;let Kw=null;const SM=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>CM)return;const i=n==null?void 0:n.token;Kw!==i&&(Kw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function IM(t=OS()){const e=Xl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=XD(t,{popupRedirectResolver:vM,persistence:[AL,yL,uI]}),r=SS("authTokenSyncURL");if(r){const s=SM(r);fL(n,s,()=>s(n.currentUser)),sI(n,o=>s(o))}const i=TS("auth");return i&&ZD(n,`http://${i}`),n}EM("Browser");var kM=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},F,tv=tv||{},ie=kM||self;function dd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function nu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function xM(t){return Object.prototype.hasOwnProperty.call(t,qf)&&t[qf]||(t[qf]=++bM)}var qf="closure_uid_"+(1e9*Math.random()>>>0),bM=0;function AM(t,e,n){return t.call.apply(t.bind,arguments)}function NM(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Dt=AM:Dt=NM,Dt.apply(null,arguments)}function Wu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function pt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function fi(){this.s=this.s,this.o=this.o}var RM=0;fi.prototype.s=!1;fi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),RM!=0)&&xM(this)};fi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const gI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function nv(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Gw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(dd(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Lt.prototype.h=function(){this.defaultPrevented=!0};var PM=function(){if(!ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ie.addEventListener("test",()=>{},e),ie.removeEventListener("test",()=>{},e)}catch{}return t}();function Sl(t){return/^[\s\xa0]*$/.test(t)}function fd(){var t=ie.navigator;return t&&(t=t.userAgent)?t:""}function $n(t){return fd().indexOf(t)!=-1}function rv(t){return rv[" "](t),t}rv[" "]=function(){};function OM(t,e){var n=I2;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var DM=$n("Opera"),fo=$n("Trident")||$n("MSIE"),yI=$n("Edge"),$m=yI||fo,vI=$n("Gecko")&&!(fd().toLowerCase().indexOf("webkit")!=-1&&!$n("Edge"))&&!($n("Trident")||$n("MSIE"))&&!$n("Edge"),LM=fd().toLowerCase().indexOf("webkit")!=-1&&!$n("Edge");function _I(){var t=ie.document;return t?t.documentMode:void 0}var Fm;e:{var Kf="",Gf=function(){var t=fd();if(vI)return/rv:([^\);]+)(\)|;)/.exec(t);if(yI)return/Edge\/([\d\.]+)/.exec(t);if(fo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(LM)return/WebKit\/(\S+)/.exec(t);if(DM)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Gf&&(Kf=Gf?Gf[1]:""),fo){var Qf=_I();if(Qf!=null&&Qf>parseFloat(Kf)){Fm=String(Qf);break e}}Fm=Kf}var Um;if(ie.document&&fo){var Qw=_I();Um=Qw||parseInt(Fm,10)||void 0}else Um=void 0;var MM=Um;function Il(t,e){if(Lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(vI){e:{try{rv(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:$M[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Il.$.h.call(this)}}pt(Il,Lt);var $M={2:"touch",3:"pen",4:"mouse"};Il.prototype.h=function(){Il.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ru="closure_listenable_"+(1e6*Math.random()|0),FM=0;function UM(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++FM,this.fa=this.ia=!1}function pd(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function iv(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function VM(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function wI(t){const e={};for(const n in t)e[n]=t[n];return e}const Yw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function EI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Yw.length;s++)n=Yw[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function md(t){this.src=t,this.g={},this.h=0}md.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=jm(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new UM(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Vm(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=gI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(pd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function jm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var sv="closure_lm_"+(1e6*Math.random()|0),Yf={};function TI(t,e,n,r,i){if(r&&r.once)return SI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)TI(t,e[s],n,r,i);return null}return n=lv(n),t&&t[ru]?t.O(e,n,nu(r)?!!r.capture:!!r,i):CI(t,e,n,!1,r,i)}function CI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=nu(i)?!!i.capture:!!i,a=av(t);if(a||(t[sv]=a=new md(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=jM(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)PM||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(kI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function jM(){function t(n){return e.call(t.src,t.listener,n)}const e=BM;return t}function SI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)SI(t,e[s],n,r,i);return null}return n=lv(n),t&&t[ru]?t.P(e,n,nu(r)?!!r.capture:!!r,i):CI(t,e,n,!0,r,i)}function II(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)II(t,e[s],n,r,i);else r=nu(r)?!!r.capture:!!r,n=lv(n),t&&t[ru]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=jm(s,n,r,i),-1<n&&(pd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=av(t))&&(e=t.g[e.toString()],t=-1,e&&(t=jm(e,n,r,i)),(n=-1<t?e[t]:null)&&ov(n))}function ov(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ru])Vm(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(kI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=av(e))?(Vm(n,t),n.h==0&&(n.src=null,e[sv]=null)):pd(t)}}}function kI(t){return t in Yf?Yf[t]:Yf[t]="on"+t}function BM(t,e){if(t.fa)t=!0;else{e=new Il(e,this);var n=t.listener,r=t.la||t.src;t.ia&&ov(t),t=n.call(r,e)}return t}function av(t){return t=t[sv],t instanceof md?t:null}var Xf="__closure_events_fn_"+(1e9*Math.random()>>>0);function lv(t){return typeof t=="function"?t:(t[Xf]||(t[Xf]=function(e){return t.handleEvent(e)}),t[Xf])}function dt(){fi.call(this),this.i=new md(this),this.S=this,this.J=null}pt(dt,fi);dt.prototype[ru]=!0;dt.prototype.removeEventListener=function(t,e,n,r){II(this,t,e,n,r)};function Et(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Lt(e,t);else if(e instanceof Lt)e.target=e.target||t;else{var i=e;e=new Lt(r,t),EI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=qu(o,r,!0,e)&&i}if(o=e.g=t,i=qu(o,r,!0,e)&&i,i=qu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=qu(o,r,!1,e)&&i}dt.prototype.N=function(){if(dt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)pd(n[r]);delete t.g[e],t.h--}}this.J=null};dt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};dt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function qu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Vm(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var uv=ie.JSON.stringify;class zM{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function HM(){var t=cv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class WM{constructor(){this.h=this.g=null}add(e,n){const r=xI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var xI=new zM(()=>new qM,t=>t.reset());class qM{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function KM(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function GM(t){ie.setTimeout(()=>{throw t},0)}let kl,xl=!1,cv=new WM,bI=()=>{const t=ie.Promise.resolve(void 0);kl=()=>{t.then(QM)}};var QM=()=>{for(var t;t=HM();){try{t.h.call(t.g)}catch(n){GM(n)}var e=xI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xl=!1};function gd(t,e){dt.call(this),this.h=t||1,this.g=e||ie,this.j=Dt(this.qb,this),this.l=Date.now()}pt(gd,dt);F=gd.prototype;F.ga=!1;F.T=null;F.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Et(this,"tick"),this.ga&&(hv(this),this.start()))}};F.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function hv(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}F.N=function(){gd.$.N.call(this),hv(this),delete this.g};function dv(t,e,n){if(typeof t=="function")n&&(t=Dt(t,n));else if(t&&typeof t.handleEvent=="function")t=Dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ie.setTimeout(t,e||0)}function AI(t){t.g=dv(()=>{t.g=null,t.i&&(t.i=!1,AI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class YM extends fi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:AI(this)}N(){super.N(),this.g&&(ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bl(t){fi.call(this),this.h=t,this.g={}}pt(bl,fi);var Xw=[];function NI(t,e,n,r){Array.isArray(n)||(n&&(Xw[0]=n.toString()),n=Xw);for(var i=0;i<n.length;i++){var s=TI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function RI(t){iv(t.g,function(e,n){this.g.hasOwnProperty(n)&&ov(e)},t),t.g={}}bl.prototype.N=function(){bl.$.N.call(this),RI(this)};bl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function yd(){this.g=!0}yd.prototype.Ea=function(){this.g=!1};function XM(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function JM(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Os(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+e2(t,n)+(r?" "+r:"")})}function ZM(t,e){t.info(function(){return"TIMEOUT: "+e})}yd.prototype.info=function(){};function e2(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return uv(n)}catch{return e}}var fs={},Jw=null;function vd(){return Jw=Jw||new dt}fs.Ta="serverreachability";function PI(t){Lt.call(this,fs.Ta,t)}pt(PI,Lt);function Al(t){const e=vd();Et(e,new PI(e))}fs.STAT_EVENT="statevent";function OI(t,e){Lt.call(this,fs.STAT_EVENT,t),this.stat=e}pt(OI,Lt);function zt(t){const e=vd();Et(e,new OI(e,t))}fs.Ua="timingevent";function DI(t,e){Lt.call(this,fs.Ua,t),this.size=e}pt(DI,Lt);function iu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ie.setTimeout(function(){t()},e)}var _d={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},LI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function fv(){}fv.prototype.h=null;function Zw(t){return t.h||(t.h=t.i())}function MI(){}var su={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pv(){Lt.call(this,"d")}pt(pv,Lt);function mv(){Lt.call(this,"c")}pt(mv,Lt);var Bm;function wd(){}pt(wd,fv);wd.prototype.g=function(){return new XMLHttpRequest};wd.prototype.i=function(){return{}};Bm=new wd;function ou(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new bl(this),this.P=t2,t=$m?125:void 0,this.V=new gd(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new $I}function $I(){this.i=null,this.g="",this.h=!1}var t2=45e3,zm={},dh={};F=ou.prototype;F.setTimeout=function(t){this.P=t};function Hm(t,e,n){t.L=1,t.v=Td(yr(e)),t.s=n,t.S=!0,FI(t,null)}function FI(t,e){t.G=Date.now(),au(t),t.A=yr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),qI(n.i,"t",r),t.C=0,n=t.l.J,t.h=new $I,t.g=fk(t.l,n?e:null,!t.s),0<t.O&&(t.M=new YM(Dt(t.Pa,t,t.g),t.O)),NI(t.U,t.g,"readystatechange",t.nb),e=t.I?wI(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Al(),XM(t.j,t.u,t.A,t.m,t.W,t.s)}F.nb=function(t){t=t.target;const e=this.M;e&&Bn(t)==3?e.l():this.Pa(t)};F.Pa=function(t){try{if(t==this.g)e:{const c=Bn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||$m||this.g&&(this.h.h||this.g.ja()||rE(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Al(3):Al(2)),Ed(this);var n=this.g.da();this.ca=n;t:if(UI(this)){var r=rE(this.g);t="";var i=r.length,s=Bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Ni(this),Ga(this);var o="";break t}this.h.i=new ie.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,JM(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Sl(a)){var u=a;break t}}u=null}if(n=u)Os(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wm(this,n);else{this.i=!1,this.o=3,zt(12),Ni(this),Ga(this);break e}}this.S?(VI(this,c,o),$m&&this.i&&c==3&&(NI(this.U,this.V,"tick",this.mb),this.V.start())):(Os(this.j,this.m,o,null),Wm(this,o)),c==4&&Ni(this),this.i&&!this.J&&(c==4?uk(this.l,this):(this.i=!1,au(this)))}else T2(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,zt(12)):(this.o=0,zt(13)),Ni(this),Ga(this)}}}catch{}finally{}};function UI(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function VI(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=n2(t,n),i==dh){e==4&&(t.o=4,zt(14),r=!1),Os(t.j,t.m,null,"[Incomplete Response]");break}else if(i==zm){t.o=4,zt(15),Os(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Os(t.j,t.m,i,null),Wm(t,i);UI(t)&&i!=dh&&i!=zm&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,zt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ev(e),e.M=!0,zt(11))):(Os(t.j,t.m,n,"[Invalid Chunked Response]"),Ni(t),Ga(t))}F.mb=function(){if(this.g){var t=Bn(this.g),e=this.g.ja();this.C<e.length&&(Ed(this),VI(this,t,e),this.i&&t!=4&&au(this))}};function n2(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?dh:(n=Number(e.substring(n,r)),isNaN(n)?zm:(r+=1,r+n>e.length?dh:(e=e.slice(r,r+n),t.C=r+n,e)))}F.cancel=function(){this.J=!0,Ni(this)};function au(t){t.Y=Date.now()+t.P,jI(t,t.P)}function jI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=iu(Dt(t.lb,t),e)}function Ed(t){t.B&&(ie.clearTimeout(t.B),t.B=null)}F.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ZM(this.j,this.A),this.L!=2&&(Al(),zt(17)),Ni(this),this.o=2,Ga(this)):jI(this,this.Y-t)};function Ga(t){t.l.H==0||t.J||uk(t.l,t)}function Ni(t){Ed(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,hv(t.V),RI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Wm(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||qm(n.i,t))){if(!t.K&&qm(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)mh(n),Id(n);else break e;wv(n),zt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=iu(Dt(n.ib,n),6e3));if(1>=QI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ri(n,11)}else if((t.K||n.g==t)&&mh(n),!Sl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(gv(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Oe(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=dk(r,r.J?r.pa:null,r.Y),o.K){YI(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Ed(a),au(a)),r.g=o}else ak(r);0<n.j.length&&kd(n)}else u[0]!="stop"&&u[0]!="close"||Ri(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ri(n,7):_v(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Al(4)}catch{}}function r2(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(dd(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function i2(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(dd(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function BI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(dd(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=i2(t),r=r2(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var zI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function s2(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ui(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ui){this.h=t.h,fh(this,t.j),this.s=t.s,this.g=t.g,ph(this,t.m),this.l=t.l;var e=t.i,n=new Nl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),eE(this,n),this.o=t.o}else t&&(e=String(t).match(zI))?(this.h=!1,fh(this,e[1]||"",!0),this.s=Aa(e[2]||""),this.g=Aa(e[3]||"",!0),ph(this,e[4]),this.l=Aa(e[5]||"",!0),eE(this,e[6]||"",!0),this.o=Aa(e[7]||"")):(this.h=!1,this.i=new Nl(null,this.h))}Ui.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Na(e,tE,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Na(e,tE,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Na(n,n.charAt(0)=="/"?l2:a2,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Na(n,c2)),t.join("")};function yr(t){return new Ui(t)}function fh(t,e,n){t.j=n?Aa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ph(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function eE(t,e,n){e instanceof Nl?(t.i=e,h2(t.i,t.h)):(n||(e=Na(e,u2)),t.i=new Nl(e,t.h))}function Oe(t,e,n){t.i.set(e,n)}function Td(t){return Oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Aa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Na(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,o2),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function o2(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var tE=/[#\/\?@]/g,a2=/[#\?:]/g,l2=/[#\?]/g,u2=/[#\?@]/g,c2=/#/g;function Nl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function pi(t){t.g||(t.g=new Map,t.h=0,t.i&&s2(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=Nl.prototype;F.add=function(t,e){pi(this),this.i=null,t=Bo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function HI(t,e){pi(t),e=Bo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function WI(t,e){return pi(t),e=Bo(t,e),t.g.has(e)}F.forEach=function(t,e){pi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};F.ta=function(){pi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};F.Z=function(t){pi(this);let e=[];if(typeof t=="string")WI(this,t)&&(e=e.concat(this.g.get(Bo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return pi(this),this.i=null,t=Bo(this,t),WI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function qI(t,e,n){HI(t,e),0<n.length&&(t.i=null,t.g.set(Bo(t,e),nv(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Bo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function h2(t,e){e&&!t.j&&(pi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(HI(this,r),qI(this,i,n))},t)),t.j=e}var d2=class{constructor(t,e){this.g=t,this.map=e}};function KI(t){this.l=t||f2,ie.PerformanceNavigationTiming?(t=ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ie.g&&ie.g.Ka&&ie.g.Ka()&&ie.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var f2=10;function GI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function QI(t){return t.h?1:t.g?t.g.size:0}function qm(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function gv(t,e){t.g?t.g.add(e):t.h=e}function YI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}KI.prototype.cancel=function(){if(this.i=XI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function XI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return nv(t.i)}var p2=class{stringify(t){return ie.JSON.stringify(t,void 0)}parse(t){return ie.JSON.parse(t,void 0)}};function m2(){this.g=new p2}function g2(t,e,n){const r=n||"";try{BI(t,function(i,s){let o=i;nu(i)&&(o=uv(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function y2(t,e){const n=new yd;if(ie.Image){const r=new Image;r.onload=Wu(Ku,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Wu(Ku,n,r,"TestLoadImage: error",!1,e),r.onabort=Wu(Ku,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Wu(Ku,n,r,"TestLoadImage: timeout",!1,e),ie.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ku(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function lu(t){this.l=t.fc||null,this.j=t.ob||!1}pt(lu,fv);lu.prototype.g=function(){return new Cd(this.l,this.j)};lu.prototype.i=function(t){return function(){return t}}({});function Cd(t,e){dt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=yv,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}pt(Cd,dt);var yv=0;F=Cd.prototype;F.open=function(t,e){if(this.readyState!=yv)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Rl(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ie).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,uu(this)),this.readyState=yv};F.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Rl(this)),this.g&&(this.readyState=3,Rl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ie.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;JI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function JI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}F.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?uu(this):Rl(this),this.readyState==3&&JI(this)}};F.Za=function(t){this.g&&(this.response=this.responseText=t,uu(this))};F.Ya=function(t){this.g&&(this.response=t,uu(this))};F.ka=function(){this.g&&uu(this)};function uu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Rl(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Rl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Cd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var v2=ie.JSON.parse;function He(t){dt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ZI,this.L=this.M=!1}pt(He,dt);var ZI="",_2=/^https?$/i,w2=["POST","PUT"];F=He.prototype;F.Oa=function(t){this.M=t};F.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Bm.g(),this.C=this.u?Zw(this.u):Zw(Bm),this.g.onreadystatechange=Dt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){nE(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ie.FormData&&t instanceof ie.FormData,!(0<=gI(w2,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{nk(this),0<this.B&&((this.L=E2(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Dt(this.ua,this)):this.A=dv(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){nE(this,s)}};function E2(t){return fo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.ua=function(){typeof tv!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))};function nE(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ek(t),Sd(t)}function ek(t){t.F||(t.F=!0,Et(t,"complete"),Et(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),Sd(this))};F.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Sd(this,!0)),He.$.N.call(this)};F.La=function(){this.s||(this.G||this.v||this.l?tk(this):this.kb())};F.kb=function(){tk(this)};function tk(t){if(t.h&&typeof tv!="undefined"&&(!t.C[1]||Bn(t)!=4||t.da()!=2)){if(t.v&&Bn(t)==4)dv(t.La,0,t);else if(Et(t,"readystatechange"),Bn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(zI)[1]||null;!i&&ie.self&&ie.self.location&&(i=ie.self.location.protocol.slice(0,-1)),r=!_2.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var s=2<Bn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",ek(t)}}finally{Sd(t)}}}}function Sd(t,e){if(t.g){nk(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Et(t,"ready");try{n.onreadystatechange=r}catch{}}}function nk(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ie.clearTimeout(t.A),t.A=null)}F.isActive=function(){return!!this.g};function Bn(t){return t.g?t.g.readyState:0}F.da=function(){try{return 2<Bn(this)?this.g.status:-1}catch{return-1}};F.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),v2(e)}};function rE(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case ZI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function T2(t){const e={};t=(t.g&&2<=Bn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Sl(t[r]))continue;var n=KM(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}VM(e,function(r){return r.join(", ")})}F.Ia=function(){return this.m};F.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function rk(t){let e="";return iv(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function vv(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=rk(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Oe(t,e,n))}function da(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ik(t){this.Ga=0,this.j=[],this.l=new yd,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=da("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=da("baseRetryDelayMs",5e3,t),this.hb=da("retryDelaySeedMs",1e4,t),this.eb=da("forwardChannelMaxRetries",2,t),this.xa=da("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new KI(t&&t.concurrentRequestLimit),this.Ja=new m2,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}F=ik.prototype;F.ra=8;F.H=1;function _v(t){if(sk(t),t.H==3){var e=t.W++,n=yr(t.I);if(Oe(n,"SID",t.K),Oe(n,"RID",e),Oe(n,"TYPE","terminate"),cu(t,n),e=new ou(t,t.l,e),e.L=2,e.v=Td(yr(n)),n=!1,ie.navigator&&ie.navigator.sendBeacon)try{n=ie.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ie.Image&&(new Image().src=e.v,n=!0),n||(e.g=fk(e.l,null),e.g.ha(e.v)),e.G=Date.now(),au(e)}hk(t)}function Id(t){t.g&&(Ev(t),t.g.cancel(),t.g=null)}function sk(t){Id(t),t.u&&(ie.clearTimeout(t.u),t.u=null),mh(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ie.clearTimeout(t.m),t.m=null)}function kd(t){if(!GI(t.i)&&!t.m){t.m=!0;var e=t.Na;kl||bI(),xl||(kl(),xl=!0),cv.add(e,t),t.C=0}}function C2(t,e){return QI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=iu(Dt(t.Na,t,e),ck(t,t.C)),t.C++,!0)}F.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ou(this,this.l,t);let s=this.s;if(this.U&&(s?(s=wI(s),EI(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ok(this,i,e),n=yr(this.I),Oe(n,"RID",t),Oe(n,"CVER",22),this.F&&Oe(n,"X-HTTP-Session-Id",this.F),cu(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(rk(s)))+"&"+e:this.o&&vv(n,this.o,s)),gv(this.i,i),this.bb&&Oe(n,"TYPE","init"),this.P?(Oe(n,"$req",e),Oe(n,"SID","null"),i.aa=!0,Hm(i,n,null)):Hm(i,n,e),this.H=2}}else this.H==3&&(t?iE(this,t):this.j.length==0||GI(this.i)||iE(this))};function iE(t,e){var n;e?n=e.m:n=t.W++;const r=yr(t.I);Oe(r,"SID",t.K),Oe(r,"RID",n),Oe(r,"AID",t.V),cu(t,r),t.o&&t.s&&vv(r,t.o,t.s),n=new ou(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ok(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),gv(t.i,n),Hm(n,r,e)}function cu(t,e){t.na&&iv(t.na,function(n,r){Oe(e,r,n)}),t.h&&BI({},function(n,r){Oe(e,r,n)})}function ok(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Dt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{g2(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function ak(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;kl||bI(),xl||(kl(),xl=!0),cv.add(e,t),t.A=0}}function wv(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=iu(Dt(t.Ma,t),ck(t,t.A)),t.A++,!0)}F.Ma=function(){if(this.u=null,lk(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=iu(Dt(this.jb,this),t)}};F.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,zt(10),Id(this),lk(this))};function Ev(t){t.B!=null&&(ie.clearTimeout(t.B),t.B=null)}function lk(t){t.g=new ou(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=yr(t.wa);Oe(e,"RID","rpc"),Oe(e,"SID",t.K),Oe(e,"AID",t.V),Oe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Oe(e,"TO",t.qa),Oe(e,"TYPE","xmlhttp"),cu(t,e),t.o&&t.s&&vv(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Td(yr(e)),n.s=null,n.S=!0,FI(n,t)}F.ib=function(){this.v!=null&&(this.v=null,Id(this),wv(this),zt(19))};function mh(t){t.v!=null&&(ie.clearTimeout(t.v),t.v=null)}function uk(t,e){var n=null;if(t.g==e){mh(t),Ev(t),t.g=null;var r=2}else if(qm(t.i,e))n=e.F,YI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=vd(),Et(r,new DI(r,n)),kd(t)}else ak(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&C2(t,e)||r==2&&wv(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ri(t,5);break;case 4:Ri(t,10);break;case 3:Ri(t,6);break;default:Ri(t,2)}}}function ck(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ri(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Dt(t.pb,t);n||(n=new Ui("//www.google.com/images/cleardot.gif"),ie.location&&ie.location.protocol=="http"||fh(n,"https"),Td(n)),y2(n.toString(),r)}else zt(2);t.H=0,t.h&&t.h.za(e),hk(t),sk(t)}F.pb=function(t){t?(this.l.info("Successfully pinged google.com"),zt(2)):(this.l.info("Failed to ping google.com"),zt(1))};function hk(t){if(t.H=0,t.ma=[],t.h){const e=XI(t.i);(e.length!=0||t.j.length!=0)&&(Gw(t.ma,e),Gw(t.ma,t.j),t.i.i.length=0,nv(t.j),t.j.length=0),t.h.ya()}}function dk(t,e,n){var r=n instanceof Ui?yr(n):new Ui(n);if(r.g!="")e&&(r.g=e+"."+r.g),ph(r,r.m);else{var i=ie.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ui(null);r&&fh(s,r),e&&(s.g=e),i&&ph(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Oe(r,n,e),Oe(r,"VER",t.ra),cu(t,r),r}function fk(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new He(new lu({ob:!0})):new He(t.va),e.Oa(t.J),e}F.isActive=function(){return!!this.h&&this.h.isActive(this)};function pk(){}F=pk.prototype;F.Ba=function(){};F.Aa=function(){};F.za=function(){};F.ya=function(){};F.isActive=function(){return!0};F.Va=function(){};function gh(){if(fo&&!(10<=Number(MM)))throw Error("Environmental error: no available transport.")}gh.prototype.g=function(t,e){return new an(t,e)};function an(t,e){dt.call(this),this.g=new ik(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Sl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Sl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new zo(this)}pt(an,dt);an.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;zt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=dk(t,null,t.Y),kd(t)};an.prototype.close=function(){_v(this.g)};an.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=uv(t),t=n);e.j.push(new d2(e.fb++,t)),e.H==3&&kd(e)};an.prototype.N=function(){this.g.h=null,delete this.j,_v(this.g),delete this.g,an.$.N.call(this)};function mk(t){pv.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}pt(mk,pv);function gk(){mv.call(this),this.status=1}pt(gk,mv);function zo(t){this.g=t}pt(zo,pk);zo.prototype.Ba=function(){Et(this.g,"a")};zo.prototype.Aa=function(t){Et(this.g,new mk(t))};zo.prototype.za=function(t){Et(this.g,new gk)};zo.prototype.ya=function(){Et(this.g,"b")};function S2(){this.blockSize=-1}function On(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}pt(On,S2);On.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Jf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}On.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Jf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Jf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Jf(this,r),i=0;break}}this.h=i,this.i+=e};On.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Se(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var I2={};function Tv(t){return-128<=t&&128>t?OM(t,function(e){return new Se([e|0],0>e?-1:0)}):new Se([t|0],0>t?-1:0)}function zn(t){if(isNaN(t)||!isFinite(t))return Qs;if(0>t)return wt(zn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Km;return new Se(e,0)}function yk(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return wt(yk(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=zn(Math.pow(e,8)),r=Qs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=zn(Math.pow(e,s)),r=r.R(s).add(zn(o))):(r=r.R(n),r=r.add(zn(o)))}return r}var Km=4294967296,Qs=Tv(0),Gm=Tv(1),sE=Tv(16777216);F=Se.prototype;F.ea=function(){if(mn(this))return-wt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Km+r)*e,e*=Km}return t};F.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(lr(this))return"0";if(mn(this))return"-"+wt(this).toString(t);for(var e=zn(Math.pow(t,6)),n=this,r="";;){var i=vh(n,e).g;n=yh(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,lr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};F.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function lr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function mn(t){return t.h==-1}F.X=function(t){return t=yh(this,t),mn(t)?-1:lr(t)?0:1};function wt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Se(n,~t.h).add(Gm)}F.abs=function(){return mn(this)?wt(this):this};F.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Se(n,n[n.length-1]&-2147483648?-1:0)};function yh(t,e){return t.add(wt(e))}F.R=function(t){if(lr(this)||lr(t))return Qs;if(mn(this))return mn(t)?wt(this).R(wt(t)):wt(wt(this).R(t));if(mn(t))return wt(this.R(wt(t)));if(0>this.X(sE)&&0>t.X(sE))return zn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Gu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Gu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Gu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Gu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Se(n,0)};function Gu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function fa(t,e){this.g=t,this.h=e}function vh(t,e){if(lr(e))throw Error("division by zero");if(lr(t))return new fa(Qs,Qs);if(mn(t))return e=vh(wt(t),e),new fa(wt(e.g),wt(e.h));if(mn(e))return e=vh(t,wt(e)),new fa(wt(e.g),e.h);if(30<t.g.length){if(mn(t)||mn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Gm,r=e;0>=r.X(t);)n=oE(n),r=oE(r);var i=_s(n,1),s=_s(r,1);for(r=_s(r,2),n=_s(n,2);!lr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=_s(r,1),n=_s(n,1)}return e=yh(t,i.R(e)),new fa(i,e)}for(i=Qs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=zn(n),o=s.R(e);mn(o)||0<o.X(t);)n-=r,s=zn(n),o=s.R(e);lr(s)&&(s=Gm),i=i.add(s),t=yh(t,o)}return new fa(i,t)}F.gb=function(t){return vh(this,t).h};F.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Se(n,this.h&t.h)};F.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Se(n,this.h|t.h)};F.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Se(n,this.h^t.h)};function oE(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Se(n,t.h)}function _s(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Se(i,t.h)}gh.prototype.createWebChannel=gh.prototype.g;an.prototype.send=an.prototype.u;an.prototype.open=an.prototype.m;an.prototype.close=an.prototype.close;_d.NO_ERROR=0;_d.TIMEOUT=8;_d.HTTP_ERROR=6;LI.COMPLETE="complete";MI.EventType=su;su.OPEN="a";su.CLOSE="b";su.ERROR="c";su.MESSAGE="d";dt.prototype.listen=dt.prototype.O;He.prototype.listenOnce=He.prototype.P;He.prototype.getLastError=He.prototype.Sa;He.prototype.getLastErrorCode=He.prototype.Ia;He.prototype.getStatus=He.prototype.da;He.prototype.getResponseJson=He.prototype.Wa;He.prototype.getResponseText=He.prototype.ja;He.prototype.send=He.prototype.ha;He.prototype.setWithCredentials=He.prototype.Oa;On.prototype.digest=On.prototype.l;On.prototype.reset=On.prototype.reset;On.prototype.update=On.prototype.j;Se.prototype.add=Se.prototype.add;Se.prototype.multiply=Se.prototype.R;Se.prototype.modulo=Se.prototype.gb;Se.prototype.compare=Se.prototype.X;Se.prototype.toNumber=Se.prototype.ea;Se.prototype.toString=Se.prototype.toString;Se.prototype.getBits=Se.prototype.D;Se.fromNumber=zn;Se.fromString=yk;var k2=function(){return new gh},x2=function(){return vd()},Zf=_d,b2=LI,A2=fs,aE={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},N2=lu,Qu=MI,R2=He,P2=On,Ys=Se;const lE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}kt.UNAUTHENTICATED=new kt(null),kt.GOOGLE_CREDENTIALS=new kt("google-credentials-uid"),kt.FIRST_PARTY=new kt("first-party-uid"),kt.MOCK_USER=new kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ho="9.22.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new Yl("@firebase/firestore");function uE(){return Xi.logLevel}function G(t,...e){if(Xi.logLevel<=me.DEBUG){const n=e.map(Cv);Xi.debug(`Firestore (${Ho}): ${t}`,...n)}}function vr(t,...e){if(Xi.logLevel<=me.ERROR){const n=e.map(Cv);Xi.error(`Firestore (${Ho}): ${t}`,...n)}}function po(t,...e){if(Xi.logLevel<=me.WARN){const n=e.map(Cv);Xi.warn(`Firestore (${Ho}): ${t}`,...n)}}function Cv(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t="Unexpected state"){const e=`FIRESTORE (${Ho}) INTERNAL ASSERTION FAILED: `+t;throw vr(e),new Error(e)}function tt(t,e){t||le()}function ve(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends en{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class O2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(kt.UNAUTHENTICATED))}shutdown(){}}class D2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class L2{constructor(e){this.t=e,this.currentUser=kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Xs;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Xs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Xs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(tt(typeof r.accessToken=="string"),new vk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return tt(e===null||typeof e=="string"),new kt(e)}}class M2{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=kt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class $2{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new M2(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class F2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class U2{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(tt(typeof n.token=="string"),this.T=n.token,new F2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V2(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=V2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ce(t,e){return t<e?-1:t>e?1:0}function mo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ct(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new ct(0,0))}static max(){return new ae(new ct(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Pl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends Pl{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const B2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Bt extends Pl{construct(e,n,r){return new Bt(e,n,r)}static isValidIdentifier(e){return B2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Bt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new W(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Bt(n)}static emptyPath(){return new Bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Fe.fromString(e))}static fromName(e){return new Z(Fe.fromString(e).popFirst(5))}static empty(){return new Z(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Fe(e.slice()))}}function z2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ae.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new si(i,Z.empty(),e)}function H2(t){return new si(t.readTime,t.key,-1)}class si{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new si(ae.min(),Z.empty(),-1)}static max(){return new si(ae.max(),Z.empty(),-1)}}function W2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class K2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sv(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==q2)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new R((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new R((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function hu(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Iv.ct=-1;function xd(t){return t==null}function _h(t){return t===0&&1/t==-1/0}function G2(t){return typeof t=="number"&&Number.isInteger(t)&&!_h(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function du(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _k(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){this.comparator=e,this.root=n||vt.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yu(this.root,e,this.comparator,!0)}}class Yu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class vt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:vt.RED,this.left=i!=null?i:vt.EMPTY,this.right=s!=null?s:vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new vt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return vt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(t,e,n,r,i){return this}insert(t,e,n){return new vt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hE(this.data.getIterator())}getIteratorFrom(e){return new hE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Mt(this.comparator);return n.data=e,n}}class hE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.fields=e,e.sort(Bt.comparator)}static empty(){return new $r([])}unionWith(e){let n=new Mt(Bt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $r(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException!="undefined"&&i instanceof DOMException?new wk("Invalid base64 string: "+i):i}}(e);return new Ut(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ut.EMPTY_BYTE_STRING=new Ut("");const Q2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oi(t){if(tt(!!t),typeof t=="string"){let e=0;const n=Q2.exec(t);if(tt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ji(t){return typeof t=="string"?Ut.fromBase64String(t):Ut.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xv(t){const e=t.mapValue.fields.__previous_value__;return kv(e)?xv(e):e}function Ol(t){const e=oi(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Dl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Dl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Dl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kv(t)?4:X2(t)?9007199254740991:10:le()}function Qn(t,e){if(t===e)return!0;const n=Zi(t);if(n!==Zi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ol(t).isEqual(Ol(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=oi(r.timestampValue),o=oi(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ji(r.bytesValue).isEqual(Ji(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Qe(r.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(r.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Qe(r.integerValue)===Qe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Qe(r.doubleValue),o=Qe(i.doubleValue);return s===o?_h(s)===_h(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return mo(t.arrayValue.values||[],e.arrayValue.values||[],Qn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(cE(s)!==cE(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Qn(s[a],o[a])))return!1;return!0}(t,e);default:return le()}}function Ll(t,e){return(t.values||[]).find(n=>Qn(n,e))!==void 0}function go(t,e){if(t===e)return 0;const n=Zi(t),r=Zi(e);if(n!==r)return Ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Qe(i.integerValue||i.doubleValue),a=Qe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return dE(t.timestampValue,e.timestampValue);case 4:return dE(Ol(t),Ol(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Ji(i),a=Ji(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Ce(o[l],a[l]);if(u!==0)return u}return Ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Ce(Qe(i.latitude),Qe(s.latitude));return o!==0?o:Ce(Qe(i.longitude),Qe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=go(o[l],a[l]);if(u)return u}return Ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Xu.mapValue&&s===Xu.mapValue)return 0;if(i===Xu.mapValue)return 1;if(s===Xu.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Ce(a[c],u[c]);if(h!==0)return h;const d=go(o[a[c]],l[u[c]]);if(d!==0)return d}return Ce(a.length,u.length)}(t.mapValue,e.mapValue);default:throw le()}}function dE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=oi(t),r=oi(e),i=Ce(n.seconds,r.seconds);return i!==0?i:Ce(n.nanos,r.nanos)}function yo(t){return Qm(t)}function Qm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=oi(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ji(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Qm(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Qm(r.fields[a])}`;return s+"}"}(t.mapValue):le();var e,n}function fE(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ym(t){return!!t&&"integerValue"in t}function bv(t){return!!t&&"arrayValue"in t}function pE(t){return!!t&&"nullValue"in t}function mE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ep(t){return!!t&&"mapValue"in t}function Qa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return du(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function X2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.value=e}static empty(){return new Fn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ep(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qa(n)}setAll(e){let n=Bt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Qa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ep(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ep(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){du(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Fn(Qa(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new xt(e,0,ae.min(),ae.min(),ae.min(),Fn.empty(),0)}static newFoundDocument(e,n,r,i){return new xt(e,1,n,ae.min(),r,i,0)}static newNoDocument(e,n){return new xt(e,2,n,ae.min(),ae.min(),Fn.empty(),0)}static newUnknownDocument(e,n){return new xt(e,3,n,ae.min(),ae.min(),Fn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Fn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n){this.position=e,this.inclusive=n}}function gE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Z.comparator(Z.fromName(o.referenceValue),n.key):r=go(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function yE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n="asc"){this.field=e,this.dir=n}}function J2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{}class Xe extends Ek{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new e$(e,n,r):n==="array-contains"?new r$(e,r):n==="in"?new i$(e,r):n==="not-in"?new s$(e,r):n==="array-contains-any"?new o$(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new t$(e,r):new n$(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(go(n,this.value)):n!==null&&Zi(this.value)===Zi(n)&&this.matchesComparison(go(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Dn extends Ek{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Dn(e,n)}matches(e){return Tk(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Tk(t){return t.op==="and"}function Ck(t){return Z2(t)&&Tk(t)}function Z2(t){for(const e of t.filters)if(e instanceof Dn)return!1;return!0}function Xm(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+yo(t.value);if(Ck(t))return t.filters.map(e=>Xm(e)).join(",");{const e=t.filters.map(n=>Xm(n)).join(",");return`${t.op}(${e})`}}function Sk(t,e){return t instanceof Xe?function(n,r){return r instanceof Xe&&n.op===r.op&&n.field.isEqual(r.field)&&Qn(n.value,r.value)}(t,e):t instanceof Dn?function(n,r){return r instanceof Dn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&Sk(s,r.filters[o]),!0):!1}(t,e):void le()}function Ik(t){return t instanceof Xe?function(e){return`${e.field.canonicalString()} ${e.op} ${yo(e.value)}`}(t):t instanceof Dn?function(e){return e.op.toString()+" {"+e.getFilters().map(Ik).join(" ,")+"}"}(t):"Filter"}class e$ extends Xe{constructor(e,n,r){super(e,n,r),this.key=Z.fromName(r.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class t$ extends Xe{constructor(e,n){super(e,"in",n),this.keys=kk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class n$ extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=kk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class r$ extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bv(n)&&Ll(n.arrayValue,this.value)}}class i$ extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ll(this.value.arrayValue,n)}}class s$ extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ll(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ll(this.value.arrayValue,n)}}class o$ extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ll(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a${constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function vE(t,e=null,n=[],r=[],i=null,s=null,o=null){return new a$(t,e,n,r,i,s,o)}function Av(t){const e=ve(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Xm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),xd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yo(r)).join(",")),e.dt=n}return e.dt}function Nv(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!J2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Sk(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!yE(t.startAt,e.startAt)&&yE(t.endAt,e.endAt)}function Jm(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function l$(t,e,n,r,i,s,o,a){return new fu(t,e,n,r,i,s,o,a)}function Rv(t){return new fu(t)}function _E(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xk(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Pv(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function bk(t){return t.collectionGroup!==null}function Js(t){const e=ve(t);if(e.wt===null){e.wt=[];const n=Pv(e),r=xk(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Ya(n)),e.wt.push(new Ya(Bt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Ya(Bt.keyField(),s))}}}return e.wt}function _r(t){const e=ve(t);if(!e._t)if(e.limitType==="F")e._t=vE(e.path,e.collectionGroup,Js(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Js(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ya(s.field,o))}const r=e.endAt?new wh(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new wh(e.startAt.position,e.startAt.inclusive):null;e._t=vE(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Zm(t,e){e.getFirstInequalityField(),Pv(t);const n=t.filters.concat([e]);return new fu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function eg(t,e,n){return new fu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pu(t,e){return Nv(_r(t),_r(e))&&t.limitType===e.limitType}function Ak(t){return`${Av(_r(t))}|lt:${t.limitType}`}function tg(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Ik(r)).join(", ")}]`),xd(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yo(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yo(r)).join(",")),`Target(${n})`}(_r(t))}; limitType=${t.limitType})`}function bd(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):Z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Js(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=gE(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Js(n),r)||n.endAt&&!function(i,s,o){const a=gE(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Js(n),r))}(t,e)}function u$(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Nk(t){return(e,n)=>{let r=!1;for(const i of Js(t)){const s=c$(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function c$(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?go(a,l):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){du(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return _k(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h$=new We(Z.comparator);function ai(){return h$}const Rk=new We(Z.comparator);function Ra(...t){let e=Rk;for(const n of t)e=e.insert(n.key,n);return e}function d$(t){let e=Rk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pi(){return Xa()}function Pk(){return Xa()}function Xa(){return new Wo(t=>t.toString(),(t,e)=>t.isEqual(e))}new We(Z.comparator);const f$=new Mt(Z.comparator);function ge(...t){let e=f$;for(const n of t)e=e.add(n);return e}const p$=new Mt(Ce);function m$(){return p$}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_h(e)?"-0":e}}function Dk(t){return{integerValue:""+t}}function g$(t,e){return G2(e)?Dk(e):Ok(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(){this._=void 0}}function y$(t,e,n){return t instanceof ng?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&kv(i)&&(i=xv(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Eh?Lk(t,e):t instanceof Th?Mk(t,e):function(r,i){const s=_$(r,i),o=wE(s)+wE(r.gt);return Ym(s)&&Ym(r.gt)?Dk(o):Ok(r.serializer,o)}(t,e)}function v$(t,e,n){return t instanceof Eh?Lk(t,e):t instanceof Th?Mk(t,e):n}function _$(t,e){return t instanceof rg?Ym(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ng extends Ad{}class Eh extends Ad{constructor(e){super(),this.elements=e}}function Lk(t,e){const n=$k(e);for(const r of t.elements)n.some(i=>Qn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Th extends Ad{constructor(e){super(),this.elements=e}}function Mk(t,e){let n=$k(e);for(const r of t.elements)n=n.filter(i=>!Qn(i,r));return{arrayValue:{values:n}}}class rg extends Ad{constructor(e,n){super(),this.serializer=e,this.gt=n}}function wE(t){return Qe(t.integerValue||t.doubleValue)}function $k(t){return bv(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function w$(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Eh&&r instanceof Eh||n instanceof Th&&r instanceof Th?mo(n.elements,r.elements,Qn):n instanceof rg&&r instanceof rg?Qn(n.gt,r.gt):n instanceof ng&&r instanceof ng}(t.transform,e.transform)}class Vi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vi}static exists(e){return new Vi(void 0,e)}static updateTime(e){return new Vi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ov{}function Fk(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new T$(t.key,Vi.none()):new Dv(t.key,t.data,Vi.none());{const n=t.data,r=Fn.empty();let i=new Mt(Bt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Nd(t.key,r,new $r(i.toArray()),Vi.none())}}function E$(t,e,n){t instanceof Dv?function(r,i,s){const o=r.value.clone(),a=TE(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Nd?function(r,i,s){if(!Tc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=TE(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Uk(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ja(t,e,n,r){return t instanceof Dv?function(i,s,o,a){if(!Tc(i.precondition,s))return o;const l=i.value.clone(),u=CE(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Nd?function(i,s,o,a){if(!Tc(i.precondition,s))return o;const l=CE(i.fieldTransforms,a,s),u=s.data;return u.setAll(Uk(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Tc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function EE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&mo(n,r,(i,s)=>w$(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Dv extends Ov{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nd extends Ov{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Uk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function TE(t,e,n){const r=new Map;tt(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,v$(o,a,n[i]))}return r}function CE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,y$(s,o,e))}return r}class T$ extends Ov{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C${constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&E$(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ja(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ja(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Pk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Fk(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&mo(this.mutations,e.mutations,(n,r)=>EE(n,r))&&mo(this.baseMutations,e.baseMutations,(n,r)=>EE(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S${constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I${constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,pe;function Vk(t){if(t===void 0)return vr("GRPC error has no .code"),D.UNKNOWN;switch(t){case Ge.OK:return D.OK;case Ge.CANCELLED:return D.CANCELLED;case Ge.UNKNOWN:return D.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return D.INTERNAL;case Ge.UNAVAILABLE:return D.UNAVAILABLE;case Ge.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Ge.NOT_FOUND:return D.NOT_FOUND;case Ge.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Ge.ABORTED:return D.ABORTED;case Ge.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Ge.DATA_LOSS:return D.DATA_LOSS;default:return le()}}(pe=Ge||(Ge={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ju}static getOrCreateInstance(){return Ju===null&&(Ju=new Lv),Ju}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ju=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k$(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x$=new Ys([4294967295,4294967295],0);function SE(t){const e=k$().encode(t),n=new P2;return n.update(e),new Uint8Array(n.digest())}function IE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ys([n,r],0),new Ys([i,s],0)]}class Mv{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Pa(`Invalid padding: ${n}`);if(r<0)throw new Pa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Pa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Pa(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Ys.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Ys.fromNumber(r)));return i.compare(x$)===1&&(i=new Ys([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=SE(e),[r,i]=IE(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Mv(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=SE(e),[r,i]=IE(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Pa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,mu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Rd(ae.min(),i,new We(Ce),ai(),ge())}}class mu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new mu(r,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class jk{constructor(e,n){this.targetId=e,this.Vt=n}}class Bk{constructor(e,n,r=Ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class kE{constructor(){this.St=0,this.Dt=bE(),this.Ct=Ut.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=ge(),n=ge(),r=ge();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:le()}}),new mu(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=bE()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class b${constructor(e){this.Gt=e,this.Qt=new Map,this.jt=ai(),this.zt=xE(),this.Wt=new We(Ce)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Jm(o))if(i===0){const a=new Z(o.path);this.Yt(r,a,xt.newNoDocument(a,ae.min()))}else tt(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=Lv.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,f,y,v,p,m;const g={localCacheCount:c,existenceFilterCount:h.count},_=h.unchangedNames;return _&&(g.bloomFilter={applied:u===0,hashCount:(d=_==null?void 0:_.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(y=(f=_==null?void 0:_.bits)===null||f===void 0?void 0:f.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(m=(p=_==null?void 0:_.bits)===null||p===void 0?void 0:p.padding)!==null&&m!==void 0?m:0}),g}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Ji(s).toUint8Array()}catch(c){if(c instanceof wk)return po("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Mv(l,o,a)}catch(c){return po(c instanceof Pa?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Jm(a.target)){const l=new Z(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,xt.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=ge();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new Rd(e,n,this.Wt,this.jt,r);return this.jt=ai(),this.zt=xE(),this.Wt=new We(Ce),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new kE,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Mt(Ce),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new kE),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function xE(){return new We(Z.comparator)}function bE(){return new We(Z.comparator)}const A$=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),N$=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),R$=(()=>({and:"AND",or:"OR"}))();class P${constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ig(t,e){return t.useProto3Json||xd(e)?e:{value:e}}function sg(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zk(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Zs(t){return tt(!!t),ae.fromTimestamp(function(e){const n=oi(e);return new ct(n.seconds,n.nanos)}(t))}function Hk(t,e){return function(n){return new Fe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Wk(t){const e=Fe.fromString(t);return tt(Qk(e)),e}function tp(t,e){const n=Wk(e);if(n.get(1)!==t.databaseId.projectId)throw new W(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(qk(n))}function og(t,e){return Hk(t.databaseId,e)}function O$(t){const e=Wk(t);return e.length===4?Fe.emptyPath():qk(e)}function AE(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qk(t){return tt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function D$(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(tt(u===void 0||typeof u=="string"),Ut.fromBase64String(u||"")):(tt(u===void 0||u instanceof Uint8Array),Ut.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?D.UNKNOWN:Vk(l.code);return new W(u,l.message||"")}(o);n=new Bk(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=tp(t,r.document.name),s=Zs(r.document.updateTime),o=r.document.createTime?Zs(r.document.createTime):ae.min(),a=new Fn({mapValue:{fields:r.document.fields}}),l=xt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Cc(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=tp(t,r.document),s=r.readTime?Zs(r.readTime):ae.min(),o=xt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Cc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=tp(t,r.document),s=r.removedTargetIds||[];n=new Cc([],s,i,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new I$(i,s),a=r.targetId;n=new jk(a,o)}}return n}function L$(t,e){return{documents:[og(t,e.path)]}}function M$(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=og(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=og(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Gk(Dn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Ss(c.field),direction:U$(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=ig(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function $$(t){let e=O$(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){tt(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=Kk(c);return h instanceof Dn&&Ck(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ya(Is(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,xd(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new wh(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new wh(d,h)}(n.endAt)),l$(e,i,o,s,a,"F",l,u)}function F$(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Kk(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Is(e.unaryFilter.field);return Xe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Is(e.unaryFilter.field);return Xe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Is(e.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Is(e.unaryFilter.field);return Xe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(e){return Xe.create(Is(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Dn.create(e.compositeFilter.filters.map(n=>Kk(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return le()}}(e.compositeFilter.op))}(t):le()}function U$(t){return A$[t]}function V$(t){return N$[t]}function j$(t){return R$[t]}function Ss(t){return{fieldPath:t.canonicalString()}}function Is(t){return Bt.fromServerFormat(t.fieldPath)}function Gk(t){return t instanceof Xe?function(e){if(e.op==="=="){if(mE(e.value))return{unaryFilter:{field:Ss(e.field),op:"IS_NAN"}};if(pE(e.value))return{unaryFilter:{field:Ss(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(mE(e.value))return{unaryFilter:{field:Ss(e.field),op:"IS_NOT_NAN"}};if(pE(e.value))return{unaryFilter:{field:Ss(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ss(e.field),op:V$(e.op),value:e.value}}}(t):t instanceof Dn?function(e){const n=e.getFilters().map(r=>Gk(r));return n.length===1?n[0]:{compositeFilter:{op:j$(e.op),filters:n}}}(t):le()}function Qk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n,r,i,s=ae.min(),o=ae.min(),a=Ut.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B${constructor(e){this.fe=e}}function z$(t){const e=$$({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?eg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H${constructor(){this.rn=new W$}addToCollectionParentIndex(e,n){return this.rn.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(si.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(si.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class W${constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Mt(Fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Mt(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new vo(0)}static Mn(){return new vo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q${constructor(){this.changes=new Wo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K${constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G${constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ja(r.mutation,i,$r.empty(),ct.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const i=Pi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ra();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Pi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ai();const o=Xa(),a=Xa();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Nd)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ja(c.mutation,u,c.mutation.getFieldMask(),ct.now())):o.set(u.key,$r.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new K$(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Xa();let i=new We((o,a)=>o-a),s=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||$r.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ge()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Pk();c.forEach(d=>{if(!s.has(d)){const f=Fk(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return Z.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):R.resolve(Pi());let a=-1,l=s;return o.next(u=>R.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?R.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ge())).next(c=>({batchId:a,changes:d$(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(r=>{let i=Ra();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ra();return this.indexManager.getCollectionParents(e,i).next(o=>R.forEach(o,a=>{const l=function(u,c){return new fu(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,xt.newInvalidDocument(u)))});let o=Ra();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Ja(u.mutation,l,$r.empty(),ct.now()),bd(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q${constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return R.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:Zs(r.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:z$(r.bundledQuery),readTime:Zs(r.readTime)}}(n)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y${constructor(){this.overlays=new We(Z.comparator),this.ls=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pi();return R.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const i=Pi(),s=n.length+1,o=new Z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new We((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Pi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Pi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return R.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new S$(n,r));let s=this.ls.get(n);s===void 0&&(s=ge(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(){this.fs=new Mt(at.ds),this.ws=new Mt(at._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new at(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new at(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new Z(new Fe([])),r=new at(n,e),i=new at(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new Z(new Fe([])),r=new at(n,e),i=new at(n,e+1);let s=ge();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new at(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class at{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return Z.comparator(e.key,n.key)||Ce(e.As,n.As)}static _s(e,n){return Ce(e.As,n.As)||Z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X${constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Mt(at.ds)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new C$(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new at(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new at(n,0),i=new at(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Mt(Ce);return n.forEach(i=>{const s=new at(i,0),o=new at(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),R.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Z.isDocumentKey(s)||(s=s.child(""));const o=new at(new Z(s),0);let a=new Mt(Ce);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),R.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){tt(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return R.forEach(n.mutations,i=>{const s=new at(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new at(n,0),i=this.Rs.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J${constructor(e){this.Ds=e,this.docs=new We(Z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():xt.newInvalidDocument(n))}getEntries(e,n){let r=ai();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():xt.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ai();const o=n.path,a=new Z(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||W2(H2(c),r)<=0||(i.has(c.key)||bd(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,r,i){le()}Cs(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Z$(this)}getSize(e){return R.resolve(this.size)}}class Z$ extends q${constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(e){this.persistence=e,this.xs=new Wo(n=>Av(n),Nv),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Ns=0,this.ks=new $v,this.targetCount=0,this.Ms=vo.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),R.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new vo(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Fn(n),R.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{constructor(e,n){this.$s={},this.overlays={},this.Os=new Iv(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new eF(this),this.indexManager=new H$,this.remoteDocumentCache=function(r){return new J$(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new B$(n),this.qs=new Q$(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Y$,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new X$(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new nF(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return R.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class nF extends K2{constructor(e){super(),this.currentSequenceNumber=e}}class Fv{constructor(e){this.persistence=e,this.Qs=new $v,this.js=null}static zs(e){return new Fv(e)}get Ws(){if(this.js)return this.js;throw le()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),R.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Ws,r=>{const i=Z.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,ae.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return R.or([()=>R.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=ge(),i=ge();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Uv(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(_E(n))return R.resolve(null);let r=_r(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=eg(n,null,"F"),r=_r(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ge(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,eg(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return _E(n)||i.isEqual(ae.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(uE()<=me.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),tg(n)),this.Wi(e,o,n,z2(i,-1)))})}ji(e,n){let r=new Mt(Nk(e));return n.forEach((i,s)=>{bd(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return uE()<=me.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",tg(n)),this.Ui.getDocumentsMatchingQuery(e,n,si.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new We(Ce),this.Yi=new Wo(s=>Av(s),Nv),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new G$(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function sF(t,e,n,r){return new iF(t,e,n,r)}async function Yk(t,e){const n=ve(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ge();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function Xk(t){const e=ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function oF(t,e){const n=ve(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Ut.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(y,v,p){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(d,f,c)&&a.push(n.Bs.updateTargetData(s,f))});let l=ai(),u=ge();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(aF(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(ae.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function aF(t,e,n){let r=ge(),i=ge();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ai();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function lF(t,e){const n=ve(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new Fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function ag(t,e,n){const r=ve(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!hu(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function NE(t,e,n){const r=ve(t);let i=ae.min(),s=ge();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=ve(a),h=c.Yi.get(u);return h!==void 0?R.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,_r(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:ae.min(),n?s:ge())).next(a=>(uF(r,u$(e),a),{documents:a,ir:s})))}function uF(t,e,n){let r=t.Xi.get(e)||ae.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class RE{constructor(){this.activeTargetIds=m$()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cF{constructor(){this.Hr=new RE,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new RE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hF{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zu=null;function np(){return Zu===null?Zu=268435456+Math.round(2147483648*Math.random()):Zu++,"0x"+Zu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fF{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="WebChannelConnection";class pF extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=np(),a=this.To(e,n);G("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(G("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw po("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ho,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=dF[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=np();return new Promise((o,a)=>{const l=new R2;l.setWithCredentials(!0),l.listenOnce(b2.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Zf.NO_ERROR:const c=l.getResponseJson();G(St,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Zf.TIMEOUT:G(St,`RPC '${e}' ${s} timed out`),a(new W(D.DEADLINE_EXCEEDED,"Request time out"));break;case Zf.HTTP_ERROR:const h=l.getStatus();if(G(St,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(v){const p=v.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(p)>=0?p:D.UNKNOWN}(f.status);a(new W(y,f.message))}else a(new W(D.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new W(D.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{G(St,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);G(St,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=np(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=k2(),a=x2(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new N2({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");G(St,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const y=new fF({ro:p=>{f?G(St,`Not sending because RPC '${e}' stream ${i} is closed:`,p):(d||(G(St,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),G(St,`RPC '${e}' stream ${i} sending:`,p),h.send(p))},oo:()=>h.close()}),v=(p,m,g)=>{p.listen(m,_=>{try{g(_)}catch(E){setTimeout(()=>{throw E},0)}})};return v(h,Qu.EventType.OPEN,()=>{f||G(St,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Qu.EventType.CLOSE,()=>{f||(f=!0,G(St,`RPC '${e}' stream ${i} transport closed`),y.wo())}),v(h,Qu.EventType.ERROR,p=>{f||(f=!0,po(St,`RPC '${e}' stream ${i} transport errored:`,p),y.wo(new W(D.UNAVAILABLE,"The operation could not be completed")))}),v(h,Qu.EventType.MESSAGE,p=>{var m;if(!f){const g=p.data[0];tt(!!g);const _=g,E=_.error||((m=_[0])===null||m===void 0?void 0:m.error);if(E){G(St,`RPC '${e}' stream ${i} received error:`,E);const k=E.status;let C=function(N){const A=Ge[N];if(A!==void 0)return Vk(A)}(k),b=E.message;C===void 0&&(C=D.INTERNAL,b="Unknown error status: "+k+" with message "+E.message),f=!0,y.wo(new W(C,b)),h.close()}else G(St,`RPC '${e}' stream ${i} received:`,g),y._o(g)}}),v(a,A2.STAT_EVENT,p=>{p.stat===aE.PROXY?G(St,`RPC '${e}' stream ${i} detected buffering proxy`):p.stat===aE.NOPROXY&&G(St,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}function rp(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(t){return new P$(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mF{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Jk(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(vr(n.toString()),vr("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new W(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gF extends mF{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=D$(this.serializer,e),r=function(i){if(!("targetChange"in i))return ae.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ae.min():s.readTime?Zs(s.readTime):ae.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=AE(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Jm(a)?{documents:L$(i,a)}:{query:M$(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=zk(i,s.resumeToken);const l=ig(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(ae.min())>0){o.readTime=sg(i,s.snapshotVersion.toTimestamp());const l=ig(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=F$(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=AE(this.serializer),n.removeTarget=e,this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new W(D.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(D.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(D.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class vF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(vr(n),this.mu=!1):G("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _F{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{yu(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ve(a);l.vu.add(4),await gu(l),l.bu.set("Unknown"),l.vu.delete(4),await Od(l)}(this))})}),this.bu=new vF(r,i)}}async function Od(t){if(yu(t))for(const e of t.Ru)await e(!0)}async function gu(t){for(const e of t.Ru)await e(!1)}function Zk(t,e){const n=ve(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Bv(n)?jv(n):qo(n).Ko()&&Vv(n,e))}function ex(t,e){const n=ve(t),r=qo(n);n.Au.delete(e),r.Ko()&&tx(n,e),n.Au.size===0&&(r.Ko()?r.jo():yu(n)&&n.bu.set("Unknown"))}function Vv(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qo(t).su(e)}function tx(t,e){t.Vu.qt(e),qo(t).iu(e)}function jv(t){t.Vu=new b$({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),qo(t).start(),t.bu.gu()}function Bv(t){return yu(t)&&!qo(t).Uo()&&t.Au.size>0}function yu(t){return ve(t).vu.size===0}function nx(t){t.Vu=void 0}async function wF(t){t.Au.forEach((e,n)=>{Vv(t,e)})}async function EF(t,e){nx(t),Bv(t)?(t.bu.Iu(e),jv(t)):t.bu.set("Unknown")}async function TF(t,e,n){if(t.bu.set("Online"),e instanceof Bk&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await OE(t,r)}else if(e instanceof Cc?t.Vu.Ht(e):e instanceof jk?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(ae.min()))try{const r=await Xk(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(Ut.EMPTY_BYTE_STRING,u.snapshotVersion)),tx(i,a);const c=new Fr(u.target,a,l,u.sequenceNumber);Vv(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await OE(t,r)}}async function OE(t,e,n){if(!hu(e))throw e;t.vu.add(1),await gu(t),t.bu.set("Offline"),n||(n=()=>Xk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Od(t)})}async function DE(t,e){const n=ve(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=yu(n);n.vu.add(3),await gu(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Od(n)}async function CF(t,e){const n=ve(t);e?(n.vu.delete(2),await Od(n)):e||(n.vu.add(2),await gu(n),n.bu.set("Unknown"))}function qo(t){return t.Su||(t.Su=function(e,n,r){const i=ve(e);return i.fu(),new gF(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:wF.bind(null,t),ao:EF.bind(null,t),nu:TF.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Bv(t)?jv(t):t.bu.set("Unknown")):(await t.Su.stop(),nx(t))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Xs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new zv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rx(t,e){if(vr("AsyncQueue",`${e}: ${t}`),hu(t))return new W(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Z.comparator(n.key,r.key):(n,r)=>Z.comparator(n.key,r.key),this.keyedMap=Ra(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new eo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof eo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new eo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(){this.Cu=new We(Z.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):le():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class _o{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new _o(e,n,eo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SF{constructor(){this.Nu=void 0,this.listeners=[]}}class IF{constructor(){this.queries=new Wo(e=>Ak(e),pu),this.onlineState="Unknown",this.ku=new Set}}async function kF(t,e){const n=ve(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new SF),i)try{s.Nu=await n.onListen(r)}catch(o){const a=rx(o,`Initialization of query '${tg(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&Hv(n)}async function xF(t,e){const n=ve(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function bF(t,e){const n=ve(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&Hv(n)}function AF(t,e,n){const r=ve(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Hv(t){t.ku.forEach(e=>{e.next()})}class NF{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new _o(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=_o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e){this.key=e}}class sx{constructor(e){this.key=e}}class RF{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=ge(),this.mutatedKeys=ge(),this.tc=Nk(e),this.ec=new eo(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new LE,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=bd(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let p=!1;d&&f?d.data.isEqual(f.data)?y!==v&&(r.track({type:3,doc:f}),p=!0):this.rc(d,f)||(r.track({type:2,doc:f}),p=!0,(l&&this.tc(f,l)>0||u&&this.tc(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),p=!0):d&&!f&&(r.track({type:1,doc:d}),p=!0,(l||u)&&(a=!0)),p&&(f?(o=o.add(f),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,d){const f=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return f(h)-f(d)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new _o(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new LE,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=ge(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new sx(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new ix(r))}),n}hc(e){this.Yu=e.ir,this.Zu=ge();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return _o.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class PF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class OF{constructor(e){this.key=e,this.fc=!1}}class DF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Wo(a=>Ak(a),pu),this._c=new Map,this.mc=new Set,this.gc=new We(Z.comparator),this.yc=new Map,this.Ic=new $v,this.Tc={},this.Ec=new Map,this.Ac=vo.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function LF(t,e){const n=BF(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await lF(n.localStore,_r(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await MF(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Zk(n.remoteStore,o)}return i}async function MF(t,e,n,r,i){t.Rc=(h,d,f)=>async function(y,v,p,m){let g=v.view.sc(p);g.zi&&(g=await NE(y.localStore,v.query,!1).then(({documents:k})=>v.view.sc(k,g)));const _=m&&m.targetChanges.get(v.targetId),E=v.view.applyChanges(g,y.isPrimaryClient,_);return $E(y,v.targetId,E.cc),E.snapshot}(t,h,d,f);const s=await NE(t.localStore,e,!0),o=new RF(e,s.ir),a=o.sc(s.documents),l=mu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);$E(t,n,u.cc);const c=new PF(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function $F(t,e){const n=ve(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!pu(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ag(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ex(n.remoteStore,r.targetId),lg(n,r.targetId)}).catch(Sv)):(lg(n,r.targetId),await ag(n.localStore,r.targetId,!0))}async function ox(t,e){const n=ve(t);try{const r=await oF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(tt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?tt(o.fc):i.removedDocuments.size>0&&(tt(o.fc),o.fc=!1))}),await lx(n,r,e)}catch(r){await Sv(r)}}function ME(t,e,n){const r=ve(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ve(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&Hv(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function FF(t,e,n){const r=ve(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new We(Z.comparator);o=o.insert(s,xt.newNoDocument(s,ae.min()));const a=ge().add(s),l=new Rd(ae.min(),new Map,new We(Ce),o,a);await ox(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),Wv(r)}else await ag(r.localStore,e,!1).then(()=>lg(r,e,n)).catch(Sv)}function lg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||ax(t,r)})}function ax(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(ex(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Wv(t))}function $E(t,e,n){for(const r of n)r instanceof ix?(t.Ic.addReference(r.key,e),UF(t,r)):r instanceof sx?(G("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||ax(t,r.key)):le()}function UF(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(G("SyncEngine","New document in limbo: "+n),t.mc.add(r),Wv(t))}function Wv(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new Z(Fe.fromString(e)),r=t.Ac.next();t.yc.set(r,new OF(n)),t.gc=t.gc.insert(n,r),Zk(t.remoteStore,new Fr(_r(Rv(n.path)),r,"TargetPurposeLimboResolution",Iv.ct))}}async function lx(t,e,n){const r=ve(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Uv.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=ve(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>R.forEach(l,h=>R.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>R.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!hu(c))throw c;G("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ji.get(h),f=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(f);u.Ji=u.Ji.insert(h,y)}}}(r.localStore,s))}async function VF(t,e){const n=ve(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await Yk(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new W(D.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lx(n,r.er)}}function jF(t,e){const n=ve(t),r=n.yc.get(e);if(r&&r.fc)return ge().add(r.key);{let i=ge();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function BF(t){const e=ve(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ox.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FF.bind(null,e),e.dc.nu=bF.bind(null,e.eventManager),e.dc.Pc=AF.bind(null,e.eventManager),e}class FE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Pd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return sF(this.persistence,new rF,e.initialUser,this.serializer)}createPersistence(e){return new tF(Fv.zs,this.serializer)}createSharedClientState(e){return new cF}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zF{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ME(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VF.bind(null,this.syncEngine),await CF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new IF}createDatastore(e){const n=Pd(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new pF(i));var i;return function(s,o,a,l){return new yF(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>ME(this.syncEngine,a,0),o=PE.D()?new PE:new hF,new _F(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new DF(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ve(e);G("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await gu(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HF{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):vr("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WF{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=kt.UNAUTHENTICATED,this.clientId=j2.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{G("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(G("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=rx(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ip(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Yk(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function UE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await KF(t);G("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>DE(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>DE(e.remoteStore,s)),t._onlineComponents=e}function qF(t){return t.name==="FirebaseError"?t.code===D.FAILED_PRECONDITION||t.code===D.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function KF(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await ip(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!qF(n))throw n;po("Error using user provided cache. Falling back to memory cache: "+n),await ip(t,new FE)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await ip(t,new FE);return t._offlineComponents}async function GF(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await UE(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await UE(t,new zF))),t._onlineComponents}async function VE(t){const e=await GF(t),n=e.eventManager;return n.onListen=LF.bind(null,e.syncEngine),n.onUnlisten=$F.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ux(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QF(t,e,n){if(!n)throw new W(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YF(t,e,n,r){if(e===!0&&r===!0)throw new W(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function BE(t){if(Z.isDocumentKey(t))throw new W(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Dd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function Sc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dd(t);throw new W(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ux((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new W(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new W(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new W(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class qv{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zE(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new O2;switch(n.type){case"firstParty":return new $2(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new W(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=jE.get(e);n&&(G("ComponentProvider","Removing Datastore"),jE.delete(e),n.terminate())}(this),Promise.resolve()}}function XF(t,e,n,r={}){var i;const s=(t=Sc(t,qv))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&po("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=kt.MOCK_USER;else{a=XP(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new W(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new kt(u)}t._authCredentials=new D2(new vk(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new to(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zn(this.firestore,e,this._key)}}class li{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new li(this.firestore,e,this._query)}}class to extends li{constructor(e,n,r){super(e,n,Rv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zn(this.firestore,null,new Z(e))}withConverter(e){return new to(this.firestore,e,this._path)}}function JF(t,e,...n){if(t=Ct(t),QF("collection","path",e),t instanceof qv){const r=Fe.fromString(e,...n);return BE(r),new to(t,null,r)}{if(!(t instanceof Zn||t instanceof to))throw new W(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return BE(r),new to(t.firestore,null,r)}}function ZF(t,e){return t=Ct(t),e=Ct(e),t instanceof li&&e instanceof li&&t.firestore===e.firestore&&pu(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Jk(this,"async_queue_retry"),this.Xc=()=>{const n=rp();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=rp();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=rp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Xs;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!hu(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw vr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=zv.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&le()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function HE(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ug extends qv{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new eU,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cx(this),this._firestoreClient.terminate()}}function tU(t,e){const n=typeof t=="object"?t:OS(),r=typeof t=="string"?t:e||"(default)",i=Xl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=YP("firestore");s&&XF(i,...s)}return i}function nU(t){return t._firestoreClient||cx(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function cx(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new Y2(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,ux(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new WF(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.cache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wo(Ut.fromBase64String(e))}catch(n){throw new W(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wo(Ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rU=/^__.*__$/;function fx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class Gv{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Gv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return cg(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(fx(this.ca)&&rU.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class iU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Pd(e)}ya(e,n,r,i=!1){return new Gv({ca:e,methodName:n,ga:r,path:Bt.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sU(t){const e=t._freezeSettings(),n=Pd(t._databaseId);return new iU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oU(t,e,n,r=!1){return Qv(n,t.ya(r?4:3,e))}function Qv(t,e){if(px(t=Ct(t)))return lU("Unsupported field value:",e,t),aU(t,e);if(t instanceof dx)return function(n,r){if(!fx(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Qv(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ct(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return g$(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ct.fromDate(n);return{timestampValue:sg(r.serializer,i)}}if(n instanceof ct){const i=new ct(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:sg(r.serializer,i)}}if(n instanceof Kv)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof wo)return{bytesValue:zk(r.serializer,n._byteString)};if(n instanceof Zn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Hk(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Dd(n)}`)}(t,e)}function aU(t,e){const n={};return _k(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):du(t,(r,i)=>{const s=Qv(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function px(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof Kv||t instanceof wo||t instanceof Zn||t instanceof dx)}function lU(t,e,n){if(!px(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Dd(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}const uU=new RegExp("[~\\*/\\[\\]]");function cU(t,e,n){if(e.search(uU)>=0)throw cg(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hx(...e.split("."))._internalPath}catch{throw cg(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cg(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new W(D.INVALID_ARGUMENT,a+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Zn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Yv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hU extends mx{data(){return super.data()}}function Yv(t,e){return typeof e=="string"?cU(t,e):e instanceof hx?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dU(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xv{}class fU extends Xv{}function pU(t,e,...n){let r=[];e instanceof Xv&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Jv).length,o=i.filter(a=>a instanceof Ld).length;if(s>1||s>0&&o>0)throw new W(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ld extends fU{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ld(e,n,r)}_apply(e){const n=this._parse(e);return gx(e._query,n),new li(e.firestore,e.converter,Zm(e._query,n))}_parse(e){const n=sU(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new W(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){qE(c,u);const d=[];for(const f of c)d.push(WE(a,i,f));h={arrayValue:{values:d}}}else h=WE(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||qE(c,u),h=oU(o,s,c,u==="in"||u==="not-in");return Xe.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function mU(t,e,n){const r=e,i=Yv("where",t);return Ld._create(i,r,n)}class Jv extends Xv{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Jv(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)gx(s,a),s=Zm(s,a)}(e._query,n),new li(e.firestore,e.converter,Zm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function WE(t,e,n){if(typeof(n=Ct(n))=="string"){if(n==="")throw new W(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bk(e)&&n.indexOf("/")!==-1)throw new W(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Fe.fromString(n));if(!Z.isDocumentKey(r))throw new W(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fE(t,new Z(r))}if(n instanceof Zn)return fE(t,n._key);throw new W(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dd(n)}.`)}function qE(t,e){if(!Array.isArray(t)||t.length===0)throw new W(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gx(t,e){if(e.isInequality()){const r=Pv(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new W(D.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=xk(t);s!==null&&gU(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function gU(t,e,n){if(!n.isEqual(e))throw new W(D.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class yU{convertValue(e,n="none"){switch(Zi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ji(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return du(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Kv(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=xv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ol(e));default:return null}}convertTimestamp(e){const n=oi(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);tt(Qk(r));const i=new Dl(r.get(1),r.get(3)),s=new Z(r.popFirst(5));return i.isEqual(n)||vr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yx extends mx{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ic(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Yv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ic extends yx{data(e={}){return super.data(e)}}class vU{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Oa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ic(this._firestore,this._userDataWriter,r.key,r,new Oa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Ic(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Oa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ic(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Oa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:_U(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _U(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}class vx extends yU{constructor(e){super(),this.firestore=e}convertBytes(e){return new wo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Zn(this.firestore,null,n)}}function wU(t,...e){var n,r,i;t=Ct(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||HE(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(HE(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Zn)u=Sc(t.firestore,ug),c=Rv(t._key.path),l={next:h=>{e[o]&&e[o](EU(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Sc(t,li);u=Sc(h.firestore,ug),c=h._query;const d=new vx(u);l={next:f=>{e[o]&&e[o](new vU(u,d,h,f))},error:e[o+1],complete:e[o+2]},dU(t._query)}return function(h,d,f,y){const v=new HF(y),p=new NF(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>kF(await VE(h),p)),()=>{v.Dc(),h.asyncQueue.enqueueAndForget(async()=>xF(await VE(h),p))}}(nU(u),c,a,l)}function EU(t,e,n){const r=n.docs.get(e._key),i=new vx(t);return new yx(t,i,e._key,r,new Oa(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ho=n})(Tr),_n(new on("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new ug(new L2(n.getProvider("auth-internal")),new U2(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new W(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dl(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Je(lE,"3.12.2",t),Je(lE,"3.12.2","esm2017")})();const KE="@firebase/database",GE="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _x="";function TU(t){_x=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CU{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ut(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:vl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SU{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Er(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new CU(e)}}catch{}return new SU},Oi=wx("localStorage"),hg=wx("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=new Yl("@firebase/database"),IU=function(){let t=1;return function(){return t++}}(),Ex=function(t){const e=cO(t),n=new oO;n.update(e);const r=n.digest();return jy.encodeByteArray(r)},vu=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=vu.apply(null,r):typeof r=="object"?e+=ut(r):e+=r,e+=" "}return e};let ji=null,QE=!0;const kU=function(t,e){L(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(no.logLevel=me.VERBOSE,ji=no.log.bind(no),e&&hg.set("logging_enabled",!0)):typeof t=="function"?ji=t:(ji=null,hg.remove("logging_enabled"))},bt=function(...t){if(QE===!0&&(QE=!1,ji===null&&hg.get("logging_enabled")===!0&&kU(!0)),ji){const e=vu.apply(null,t);ji(e)}},_u=function(t){return function(...e){bt(t,...e)}},dg=function(...t){const e="FIREBASE INTERNAL ERROR: "+vu(...t);no.error(e)},es=function(...t){const e=`FIREBASE FATAL ERROR: ${vu(...t)}`;throw no.error(e),new Error(e)},sn=function(...t){const e="FIREBASE WARNING: "+vu(...t);no.warn(e)},xU=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&sn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Tx=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},bU=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Eo="[MIN_NAME]",ts="[MAX_NAME]",Ko=function(t,e){if(t===e)return 0;if(t===Eo||e===ts)return-1;if(e===Eo||t===ts)return 1;{const n=YE(t),r=YE(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},AU=function(t,e){return t===e?0:t<e?-1:1},pa=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ut(e))},Zv=function(t){if(typeof t!="object"||t===null)return ut(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ut(e[r]),n+=":",n+=Zv(t[e[r]]);return n+="}",n},Cx=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function tn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Sx=function(t){L(!Tx(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},NU=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},RU=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function PU(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const OU=new RegExp("^-?(0*)\\d{1,10}$"),DU=-2147483648,LU=2147483647,YE=function(t){if(OU.test(t)){const e=Number(t);if(e>=DU&&e<=LU)return e}return null},wu=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw sn("Exception was thrown by user callback.",n),e},Math.floor(0))}},MU=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Za=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $U{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){sn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FU{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(bt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',sn(e)}}class fg{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fg.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="5",Ix="v",kx="s",xx="r",bx="f",Ax=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Nx="ls",Rx="p",pg="ac",Px="websocket",Ox="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UU{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Oi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Oi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function VU(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Dx(t,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let r;if(e===Px)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ox)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);VU(t)&&(n.ns=t.namespace);const i=[];return tn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jU{constructor(){this.counters_={}}incrementCounter(e,n=1){Er(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return HP(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp={},op={};function t_(t){const e=t.toString();return sp[e]||(sp[e]=new jU),sp[e]}function BU(t,e){const n=t.toString();return op[n]||(op[n]=e()),op[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zU{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&wu(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="start",HU="close",WU="pLPCommand",qU="pRTLPCB",Lx="id",Mx="pw",$x="ser",KU="cb",GU="seg",QU="ts",YU="d",XU="dframe",Fx=1870,Ux=30,JU=Fx-Ux,ZU=25e3,e4=3e4;class Ds{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_u(e),this.stats_=t_(n),this.urlFn=l=>(this.appCheckToken&&(l[pg]=this.appCheckToken),Dx(n,Ox,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new zU(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(e4)),bU(()=>{if(this.isClosed_)return;this.scriptTagHolder=new n_((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===XE)this.id=a,this.password=l;else if(o===HU)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[XE]="t",r[$x]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[KU]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Ix]=e_,this.transportSessionId&&(r[kx]=this.transportSessionId),this.lastSessionId&&(r[Nx]=this.lastSessionId),this.applicationId&&(r[Rx]=this.applicationId),this.appCheckToken&&(r[pg]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Ax.test(location.hostname)&&(r[xx]=bx);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ds.forceAllow_=!0}static forceDisallow(){Ds.forceDisallow_=!0}static isAvailable(){return Ds.forceAllow_?!0:!Ds.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!NU()&&!RU()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=wS(n),i=Cx(r,JU);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[XU]="t",r[Lx]=e,r[Mx]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ut(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class n_{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=IU(),window[WU+this.uniqueCallbackIdentifier]=e,window[qU+this.uniqueCallbackIdentifier]=n,this.myIFrame=n_.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){bt("frame writing exception"),a.stack&&bt(a.stack),bt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||bt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Lx]=this.myID,e[Mx]=this.myPW,e[$x]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ux+r.length<=Fx;){const o=this.pendingSegs.shift();r=r+"&"+GU+i+"="+o.seg+"&"+QU+i+"="+o.ts+"&"+YU+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(ZU)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{bt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t4=16384,n4=45e3;let Ch=null;typeof MozWebSocket!="undefined"?Ch=MozWebSocket:typeof WebSocket!="undefined"&&(Ch=WebSocket);class In{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_u(this.connId),this.stats_=t_(n),this.connURL=In.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Ix]=e_,typeof location!="undefined"&&location.hostname&&Ax.test(location.hostname)&&(o[xx]=bx),n&&(o[kx]=n),r&&(o[Nx]=r),i&&(o[pg]=i),s&&(o[Rx]=s),Dx(e,Px,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Oi.set("previous_websocket_failure",!0);try{let r;kS(),this.mySock=new Ch(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){In.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ch!==null&&!In.forceDisallow_}static previouslyFailed(){return Oi.isInMemoryStorage||Oi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Oi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=vl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Cx(n,t4);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(n4))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}In.responsesRequiredToBeHealthy=2;In.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ds,In]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=In&&In.isAvailable();let r=n&&!In.previouslyFailed();if(e.webSocketOnly&&(n||sn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[In];else{const i=this.transports_=[];for(const s of Ml.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ml.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ml.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r4=6e4,i4=5e3,s4=10*1024,o4=100*1024,ap="t",JE="d",a4="s",ZE="r",l4="e",e1="o",t1="a",n1="n",r1="p",u4="h";class c4{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_u("c:"+this.id+":"),this.transportManager_=new Ml(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Za(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>o4?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>s4?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ap in e){const n=e[ap];n===t1?this.upgradeIfSecondaryHealthy_():n===ZE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===e1&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=pa("t",e),r=pa("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:r1,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:t1,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:n1,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=pa("t",e),r=pa("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=pa(ap,e);if(JE in e){const r=e[JE];if(n===u4){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===n1){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===a4?this.onConnectionShutdown_(r):n===ZE?this.onReset_(r):n===l4?dg("Server Error: "+r):n===e1?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):dg("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),e_!==r&&sn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Za(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(r4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Za(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(i4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:r1,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Oi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){L(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh extends jx{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Hy()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Sh}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=32,s1=768;class xe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function we(){return new xe("")}function he(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ui(t){return t.pieces_.length-t.pieceNum_}function Ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new xe(t.pieces_,e)}function Bx(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function h4(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function zx(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Hx(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new xe(e,0)}function Ze(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof xe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new xe(n,0)}function de(t){return t.pieceNum_>=t.pieces_.length}function Yt(t,e){const n=he(t),r=he(e);if(n===null)return e;if(n===r)return Yt(Ae(t),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function r_(t,e){if(ui(t)!==ui(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function bn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ui(t)>ui(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class d4{constructor(e,n){this.errorPrefix_=n,this.parts_=zx(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ld(this.parts_[r]);Wx(this)}}function f4(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ld(e),Wx(t)}function p4(t){const e=t.parts_.pop();t.byteLength_-=ld(e),t.parts_.length>0&&(t.byteLength_-=1)}function Wx(t){if(t.byteLength_>s1)throw new Error(t.errorPrefix_+"has a key path longer than "+s1+" bytes ("+t.byteLength_+").");if(t.parts_.length>i1)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+i1+") or object contains a cycle "+Ei(t))}function Ei(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_ extends jx{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new i_}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=1e3,m4=60*5*1e3,o1=30*1e3,g4=1.3,y4=3e4,v4="server_kill",a1=3;class dr extends Vx{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=dr.nextPersistentConnectionId_++,this.log_=_u("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ma,this.maxReconnectDelay_=m4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!kS())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");i_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ut(s)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new zy,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;dr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Er(e,"w")){const r=ho(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();sn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||sO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=o1)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=iO(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ut(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):dg("Unrecognized action received from server: "+ut(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ma,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ma,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>y4&&(this.reconnectDelay_=ma),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*g4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+dr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){L(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?bt("getToken() completed but was canceled"):(bt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new c4(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{sn(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(v4)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&sn(h),l())}}}interrupt(e){bt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){bt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Am(this.interruptReasons_)&&(this.reconnectDelay_=ma,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Zv(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new xe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){bt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=a1&&(this.reconnectDelay_=o1,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){bt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=a1&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+_x.replace(/\./g,"-")]=1,Hy()?e["framework.cordova"]=1:IS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sh.getInstance().currentlyOnline();return Am(this.interruptReasons_)&&e}}dr.nextPersistentConnectionId_=0;dr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ce(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ce(Eo,e),i=new ce(Eo,n);return this.compare(r,i)!==0}minPost(){return ce.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec;class qx extends Md{static get __EMPTY_NODE(){return ec}static set __EMPTY_NODE(e){ec=e}compare(e,n){return Ko(e.name,n.name)}isDefinedOn(e){throw Mo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ce.MIN}maxPost(){return new ce(ts,ec)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new ce(e,ec)}toString(){return".key"}}const ro=new qx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:lt.RED,this.left=i!=null?i:Xt.EMPTY_NODE,this.right=s!=null?s:Xt.EMPTY_NODE}copy(e,n,r,i,s){return new lt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Xt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Xt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}lt.RED=!0;lt.BLACK=!1;class _4{copy(e,n,r,i,s){return this}insert(e,n,r){return new lt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Xt{constructor(e,n=Xt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Xt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,lt.BLACK,null,null))}remove(e){return new Xt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,lt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new tc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new tc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new tc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new tc(this.root_,null,this.comparator_,!0,e)}}Xt.EMPTY_NODE=new _4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w4(t,e){return Ko(t.name,e.name)}function s_(t,e){return Ko(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mg;function E4(t){mg=t}const Kx=function(t){return typeof t=="number"?"number:"+Sx(t):"string:"+t},Gx=function(t){if(t.isLeafNode()){const e=t.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Er(e,".sv"),"Priority must be a string or number.")}else L(t===mg||t.isEmpty(),"priority of unexpected type.");L(t===mg||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l1;class ot{constructor(e,n=ot.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Gx(this.priorityNode_)}static set __childrenNodeConstructor(e){l1=e}static get __childrenNodeConstructor(){return l1}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ot(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return de(e)?this:he(e)===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ot.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=he(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(L(r!==".priority"||ui(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ot.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Kx(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Sx(this.value_):e+=this.value_,this.lazyHash_=Ex(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ot.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ot.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ot.VALUE_TYPE_ORDER.indexOf(n),s=ot.VALUE_TYPE_ORDER.indexOf(r);return L(i>=0,"Unknown leaf type: "+n),L(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ot.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qx,Yx;function T4(t){Qx=t}function C4(t){Yx=t}class S4 extends Md{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ko(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ce.MIN}maxPost(){return new ce(ts,new ot("[PRIORITY-POST]",Yx))}makePost(e,n){const r=Qx(e);return new ce(n,new ot("[PRIORITY-POST]",r))}toString(){return".priority"}}const ze=new S4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I4=Math.log(2);class k4{constructor(e){const n=s=>parseInt(Math.log(s)/I4,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ih=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let h,d;if(c===0)return null;if(c===1)return h=t[l],d=n?n(h):h,new lt(d,h.node,lt.BLACK,null,null);{const f=parseInt(c/2,10)+l,y=i(l,f),v=i(f+1,u);return h=t[f],d=n?n(h):h,new lt(d,h.node,lt.BLACK,y,v)}},s=function(l){let u=null,c=null,h=t.length;const d=function(y,v){const p=h-y,m=h;h-=y;const g=i(p+1,m),_=t[p],E=n?n(_):_;f(new lt(E,_.node,v,null,g))},f=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<l.count;++y){const v=l.nextBitIsOne(),p=Math.pow(2,l.count-(y+1));v?d(p,lt.BLACK):(d(p,lt.BLACK),d(p,lt.RED))}return c},o=new k4(t.length),a=s(o);return new Xt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lp;const ws={};class ur{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return L(ws&&ze,"ChildrenNode.ts has not been loaded"),lp=lp||new ur({".priority":ws},{".priority":ze}),lp}get(e){const n=ho(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Xt?n:null}hasIndex(e){return Er(this.indexSet_,e.toString())}addIndex(e,n){L(e!==ro,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ce.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ih(r,e.getCompare()):a=ws;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new ur(c,u)}addToIndexes(e,n){const r=ih(this.indexes_,(i,s)=>{const o=ho(this.indexSet_,s);if(L(o,"Missing index implementation for "+s),i===ws)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ce.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Ih(a,o.getCompare())}else return ws;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ce(e.name,a))),l.insert(e,e.node)}});return new ur(r,this.indexSet_)}removeFromIndexes(e,n){const r=ih(this.indexes_,i=>{if(i===ws)return i;{const s=n.get(e.name);return s?i.remove(new ce(e.name,s)):i}});return new ur(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga;class ee{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Gx(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ga||(ga=new ee(new Xt(s_),null,ur.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ga}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ga:n}}getChild(e){const n=he(e);return n===null?this:this.getImmediateChild(n).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ce(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ga:this.priorityNode_;return new ee(i,o,s)}}updateChild(e,n){const r=he(e);if(r===null)return n;{L(he(e)!==".priority"||ui(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ae(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ze,(o,a)=>{n[o]=a.val(e),r++,s&&ee.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Kx(this.getPriority().val())+":"),this.forEachChild(ze,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ex(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ce(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ce(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ce(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ce.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ce.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Eu?-1:0}withIndex(e){if(e===ro||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ro||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ze),i=n.getIterator(ze);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ro?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class x4 extends ee{constructor(){super(new Xt(s_),ee.EMPTY_NODE,ur.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const Eu=new x4;Object.defineProperties(ce,{MIN:{value:new ce(Eo,ee.EMPTY_NODE)},MAX:{value:new ce(ts,Eu)}});qx.__EMPTY_NODE=ee.EMPTY_NODE;ot.__childrenNodeConstructor=ee;E4(Eu);C4(Eu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b4=!0;function At(t,e=null){if(t===null)return ee.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ot(n,At(e))}if(!(t instanceof Array)&&b4){const n=[];let r=!1;if(tn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=At(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ce(o,l)))}}),n.length===0)return ee.EMPTY_NODE;const s=Ih(n,w4,o=>o.name,s_);if(r){const o=Ih(n,ze.getCompare());return new ee(s,At(e),new ur({".priority":o},{".priority":ze}))}else return new ee(s,At(e),ur.Default)}else{let n=ee.EMPTY_NODE;return tn(t,(r,i)=>{if(Er(t,r)&&r.substring(0,1)!=="."){const s=At(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(At(e))}}T4(At);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4 extends Md{constructor(e){super(),this.indexPath_=e,L(!de(e)&&he(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ko(e.name,n.name):s}makePost(e,n){const r=At(e),i=ee.EMPTY_NODE.updateChild(this.indexPath_,r);return new ce(n,i)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,Eu);return new ce(ts,e)}toString(){return zx(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N4 extends Md{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ko(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ce.MIN}maxPost(){return ce.MAX}makePost(e,n){const r=At(e);return new ce(n,r)}toString(){return".value"}}const R4=new N4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(t){return{type:"value",snapshotNode:t}}function To(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function $l(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Fl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function P4(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){L(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange($l(n,a)):L(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(To(n,r)):o.trackChildChange(Fl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ze,(i,s)=>{n.hasChild(i)||r.trackChildChange($l(i,s))}),n.isLeafNode()||n.forEachChild(ze,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Fl(i,s,o))}else r.trackChildChange(To(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e){this.indexedFilter_=new o_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ul.getStartPost_(e),this.endPost_=Ul.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ce(n,r))||(r=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=ee.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(ee.EMPTY_NODE);const s=this;return n.forEachChild(ze,(o,a)=>{s.matches(new ce(o,a))||(i=i.updateImmediateChild(o,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O4{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ul(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ce(n,r))||(r=ee.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=ee.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(ee.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;L(a.numChildren()===this.limit_,"");const l=new ce(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(c&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(Fl(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange($l(n,h));const v=a.updateImmediateChild(n,ee.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(To(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange($l(u.name,u.node)),s.trackChildChange(To(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,ee.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ze}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Eo}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ts}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ze}copy(){const e=new a_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function D4(t){return t.loadsAllData()?new o_(t.getIndex()):t.hasLimit()?new O4(t):new Ul(t)}function u1(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ze?n="$priority":t.index_===R4?n="$value":t.index_===ro?n="$key":(L(t.index_ instanceof A4,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ut(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ut(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ut(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ut(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ut(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function c1(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ze&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh extends Vx{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=_u("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=kh.getListenId_(e,r),a={};this.listens_[o]=a;const l=u1(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),ho(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=kh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=u1(e._queryParams),r=e._path.toString(),i=new zy;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$o(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=vl(a.responseText)}catch{sn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&sn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(){return{value:null,children:new Map}}function Jx(t,e,n){if(de(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=he(e);t.children.has(r)||t.children.set(r,xh());const i=t.children.get(r);e=Ae(e),Jx(i,e,n)}}function gg(t,e,n){t.value!==null?n(e,t.value):M4(t,(r,i)=>{const s=new xe(e.toString()+"/"+r);gg(i,s,n)})}function M4(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&tn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=10*1e3,F4=30*1e3,U4=5*60*1e3;class V4{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new $4(e);const r=h1+(F4-h1)*Math.random();Za(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;tn(e,(i,s)=>{s>0&&Er(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Za(this.reportStats_.bind(this),Math.floor(Math.random()*2*U4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var An;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(An||(An={}));function Zx(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function l_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function u_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=An.ACK_USER_WRITE,this.source=Zx()}operationForChild(e){if(de(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new xe(e));return new bh(we(),n,this.revert)}}else return L(he(this.path)===e,"operationForChild called for unrelated child."),new bh(Ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n){this.source=e,this.path=n,this.type=An.LISTEN_COMPLETE}operationForChild(e){return de(this.path)?new Vl(this.source,we()):new Vl(this.source,Ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=An.OVERWRITE}operationForChild(e){return de(this.path)?new ns(this.source,we(),this.snap.getImmediateChild(e)):new ns(this.source,Ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=An.MERGE}operationForChild(e){if(de(this.path)){const n=this.children.subtree(new xe(e));return n.isEmpty()?null:n.value?new ns(this.source,we(),n.value):new jl(this.source,we(),n)}else return L(he(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new jl(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(de(e))return this.isFullyInitialized()&&!this.filtered_;const n=he(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function B4(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(P4(o.childName,o.snapshotNode))}),ya(t,i,"child_removed",e,r,n),ya(t,i,"child_added",e,r,n),ya(t,i,"child_moved",s,r,n),ya(t,i,"child_changed",e,r,n),ya(t,i,"value",e,r,n),i}function ya(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>H4(t,a,l)),o.forEach(a=>{const l=z4(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function z4(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function H4(t,e,n){if(e.childName==null||n.childName==null)throw Mo("Should only compare child_ events.");const r=new ce(e.childName,e.snapshotNode),i=new ce(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t,e){return{eventCache:t,serverCache:e}}function el(t,e,n,r){return $d(new rs(e,n,r),t.serverCache)}function eb(t,e,n,r){return $d(t.eventCache,new rs(e,n,r))}function yg(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function is(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let up;const W4=()=>(up||(up=new Xt(AU)),up);class Pe{constructor(e,n=W4()){this.value=e,this.children=n}static fromObject(e){let n=new Pe(null);return tn(e,(r,i)=>{n=n.set(new xe(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:we(),value:this.value};if(de(e))return null;{const r=he(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ae(e),n);return s!=null?{path:Ze(new xe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(de(e))return this;{const n=he(e),r=this.children.get(n);return r!==null?r.subtree(Ae(e)):new Pe(null)}}set(e,n){if(de(e))return new Pe(n,this.children);{const r=he(e),s=(this.children.get(r)||new Pe(null)).set(Ae(e),n),o=this.children.insert(r,s);return new Pe(this.value,o)}}remove(e){if(de(e))return this.children.isEmpty()?new Pe(null):new Pe(null,this.children);{const n=he(e),r=this.children.get(n);if(r){const i=r.remove(Ae(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Pe(null):new Pe(this.value,s)}else return this}}get(e){if(de(e))return this.value;{const n=he(e),r=this.children.get(n);return r?r.get(Ae(e)):null}}setTree(e,n){if(de(e))return n;{const r=he(e),s=(this.children.get(r)||new Pe(null)).setTree(Ae(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Pe(this.value,o)}}fold(e){return this.fold_(we(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ze(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,we(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(de(e))return null;{const s=he(e),o=this.children.get(s);return o?o.findOnPath_(Ae(e),Ze(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,we(),n)}foreachOnPath_(e,n,r){if(de(e))return this;{this.value&&r(n,this.value);const i=he(e),s=this.children.get(i);return s?s.foreachOnPath_(Ae(e),Ze(n,i),r):new Pe(null)}}foreach(e){this.foreach_(we(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ze(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.writeTree_=e}static empty(){return new Rn(new Pe(null))}}function tl(t,e,n){if(de(e))return new Rn(new Pe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Yt(i,e);return s=s.updateChild(o,n),new Rn(t.writeTree_.set(i,s))}else{const i=new Pe(n),s=t.writeTree_.setTree(e,i);return new Rn(s)}}}function d1(t,e,n){let r=t;return tn(n,(i,s)=>{r=tl(r,Ze(e,i),s)}),r}function f1(t,e){if(de(e))return Rn.empty();{const n=t.writeTree_.setTree(e,new Pe(null));return new Rn(n)}}function vg(t,e){return ps(t,e)!=null}function ps(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Yt(n.path,e)):null}function p1(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ze,(r,i)=>{e.push(new ce(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ce(r,i.value))}),e}function Xr(t,e){if(de(e))return t;{const n=ps(t,e);return n!=null?new Rn(new Pe(n)):new Rn(t.writeTree_.subtree(e))}}function _g(t){return t.writeTree_.isEmpty()}function Co(t,e){return tb(we(),t.writeTree_,e)}function tb(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(L(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=tb(Ze(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ze(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t,e){return sb(e,t)}function q4(t,e,n,r,i){L(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=tl(t.visibleWrites,e,n)),t.lastWriteId=r}function K4(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function G4(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Q4(a,r.path)?i=!1:bn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Y4(t),!0;if(r.snap)t.visibleWrites=f1(t.visibleWrites,r.path);else{const a=r.children;tn(a,l=>{t.visibleWrites=f1(t.visibleWrites,Ze(r.path,l))})}return!0}else return!1}function Q4(t,e){if(t.snap)return bn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&bn(Ze(t.path,n),e))return!0;return!1}function Y4(t){t.visibleWrites=nb(t.allWrites,X4,we()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function X4(t){return t.visible}function nb(t,e,n){let r=Rn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)bn(n,o)?(a=Yt(n,o),r=tl(r,a,s.snap)):bn(o,n)&&(a=Yt(o,n),r=tl(r,we(),s.snap.getChild(a)));else if(s.children){if(bn(n,o))a=Yt(n,o),r=d1(r,a,s.children);else if(bn(o,n))if(a=Yt(o,n),de(a))r=d1(r,we(),s.children);else{const l=ho(s.children,he(a));if(l){const u=l.getChild(Ae(a));r=tl(r,we(),u)}}}else throw Mo("WriteRecord should have .snap or .children")}}return r}function rb(t,e,n,r,i){if(!r&&!i){const s=ps(t.visibleWrites,e);if(s!=null)return s;{const o=Xr(t.visibleWrites,e);if(_g(o))return n;if(n==null&&!vg(o,we()))return null;{const a=n||ee.EMPTY_NODE;return Co(o,a)}}}else{const s=Xr(t.visibleWrites,e);if(!i&&_g(s))return n;if(!i&&n==null&&!vg(s,we()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(bn(u.path,e)||bn(e,u.path))},a=nb(t.allWrites,o,e),l=n||ee.EMPTY_NODE;return Co(a,l)}}}function J4(t,e,n){let r=ee.EMPTY_NODE;const i=ps(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ze,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Xr(t.visibleWrites,e);return n.forEachChild(ze,(o,a)=>{const l=Co(Xr(s,new xe(o)),a);r=r.updateImmediateChild(o,l)}),p1(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Xr(t.visibleWrites,e);return p1(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Z4(t,e,n,r,i){L(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ze(e,n);if(vg(t.visibleWrites,s))return null;{const o=Xr(t.visibleWrites,s);return _g(o)?i.getChild(n):Co(o,i.getChild(n))}}function eV(t,e,n,r){const i=Ze(e,n),s=ps(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Xr(t.visibleWrites,i);return Co(o,r.getNode().getImmediateChild(n))}else return null}function tV(t,e){return ps(t.visibleWrites,e)}function nV(t,e,n,r,i,s,o){let a;const l=Xr(t.visibleWrites,e),u=ps(l,we());if(u!=null)a=u;else if(n!=null)a=Co(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=d.getNext();for(;f&&c.length<i;)h(f,r)!==0&&c.push(f),f=d.getNext();return c}else return[]}function rV(){return{visibleWrites:Rn.empty(),allWrites:[],lastWriteId:-1}}function Ah(t,e,n,r){return rb(t.writeTree,t.treePath,e,n,r)}function h_(t,e){return J4(t.writeTree,t.treePath,e)}function m1(t,e,n,r){return Z4(t.writeTree,t.treePath,e,n,r)}function Nh(t,e){return tV(t.writeTree,Ze(t.treePath,e))}function iV(t,e,n,r,i,s){return nV(t.writeTree,t.treePath,e,n,r,i,s)}function d_(t,e,n){return eV(t.writeTree,t.treePath,e,n)}function ib(t,e){return sb(Ze(t.treePath,e),t.writeTree)}function sb(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Fl(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,$l(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,To(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Fl(r,e.snapshotNode,i.oldSnap));else throw Mo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const ob=new oV;class f_{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new rs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return d_(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:is(this.viewCache_),s=iV(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aV(t){return{filter:t}}function lV(t,e){L(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function uV(t,e,n,r,i){const s=new sV;let o,a;if(n.type===An.OVERWRITE){const u=n;u.source.fromUser?o=wg(t,e,u.path,u.snap,r,i,s):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!de(u.path),o=Rh(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===An.MERGE){const u=n;u.source.fromUser?o=hV(t,e,u.path,u.children,r,i,s):(L(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Eg(t,e,u.path,u.children,r,i,a,s))}else if(n.type===An.ACK_USER_WRITE){const u=n;u.revert?o=pV(t,e,u.path,r,i,s):o=dV(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===An.LISTEN_COMPLETE)o=fV(t,e,n.path,r,s);else throw Mo("Unknown operation type: "+n.type);const l=s.getChanges();return cV(e,o,l),{viewCache:o,changes:l}}function cV(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=yg(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Xx(yg(e)))}}function ab(t,e,n,r,i,s){const o=e.eventCache;if(Nh(r,n)!=null)return e;{let a,l;if(de(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=is(e),c=u instanceof ee?u:ee.EMPTY_NODE,h=h_(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=Ah(r,is(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=he(n);if(u===".priority"){L(ui(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=m1(r,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=Ae(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=m1(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=d_(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,i,s):a=o.getNode()}}return el(e,a,o.isFullyInitialized()||de(n),t.filter.filtersNodes())}}function Rh(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(de(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),f,null)}else{const f=he(n);if(!l.isCompleteForPath(n)&&ui(n)>1)return e;const y=Ae(n),p=l.getNode().getImmediateChild(f).updateChild(y,r);f===".priority"?u=c.updatePriority(l.getNode(),p):u=c.updateChild(l.getNode(),f,p,y,ob,null)}const h=eb(e,u,l.isFullyInitialized()||de(n),c.filtersNodes()),d=new f_(i,h,s);return ab(t,h,n,i,d,a)}function wg(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new f_(i,e,s);if(de(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=el(e,u,!0,t.filter.filtersNodes());else{const h=he(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=el(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=Ae(n),f=a.getNode().getImmediateChild(h);let y;if(de(d))y=r;else{const v=c.getCompleteChild(h);v!=null?Bx(d)===".priority"&&v.getChild(Hx(d)).isEmpty()?y=v:y=v.updateChild(d,r):y=ee.EMPTY_NODE}if(f.equals(y))l=e;else{const v=t.filter.updateChild(a.getNode(),h,y,d,c,o);l=el(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function g1(t,e){return t.eventCache.isCompleteForChild(e)}function hV(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Ze(n,l);g1(e,he(c))&&(a=wg(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Ze(n,l);g1(e,he(c))||(a=wg(t,a,c,u,i,s,o))}),a}function y1(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Eg(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;de(n)?u=r:u=new Pe(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),y=y1(t,f,d);l=Rh(t,l,new xe(h),y,i,s,o,a)}}),u.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!f){const y=e.serverCache.getNode().getImmediateChild(h),v=y1(t,y,d);l=Rh(t,l,new xe(h),v,i,s,o,a)}}),l}function dV(t,e,n,r,i,s,o){if(Nh(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(de(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Rh(t,e,n,l.getNode().getChild(n),i,s,a,o);if(de(n)){let u=new Pe(null);return l.getNode().forEachChild(ro,(c,h)=>{u=u.set(new xe(c),h)}),Eg(t,e,n,u,i,s,a,o)}else return e}else{let u=new Pe(null);return r.foreach((c,h)=>{const d=Ze(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),Eg(t,e,n,u,i,s,a,o)}}function fV(t,e,n,r,i){const s=e.serverCache,o=eb(e,s.getNode(),s.isFullyInitialized()||de(n),s.isFiltered());return ab(t,o,n,r,ob,i)}function pV(t,e,n,r,i,s){let o;if(Nh(r,n)!=null)return e;{const a=new f_(r,e,i),l=e.eventCache.getNode();let u;if(de(n)||he(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Ah(r,is(e));else{const h=e.serverCache.getNode();L(h instanceof ee,"serverChildren would be complete if leaf node"),c=h_(r,h)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=he(n);let h=d_(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,Ae(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,ee.EMPTY_NODE,Ae(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ah(r,is(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Nh(r,we())!=null,el(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mV{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new o_(r.getIndex()),s=D4(r);this.processor_=aV(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(ee.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(ee.EMPTY_NODE,a.getNode(),null),c=new rs(l,o.isFullyInitialized(),i.filtersNodes()),h=new rs(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=$d(h,c),this.eventGenerator_=new j4(this.query_)}get query(){return this.query_}}function gV(t){return t.viewCache_.serverCache.getNode()}function yV(t,e){const n=is(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!de(e)&&!n.getImmediateChild(he(e)).isEmpty())?n.getChild(e):null}function v1(t){return t.eventRegistrations_.length===0}function vV(t,e){t.eventRegistrations_.push(e)}function _1(t,e,n){const r=[];if(n){L(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function w1(t,e,n,r){e.type===An.MERGE&&e.source.queryId!==null&&(L(is(t.viewCache_),"We should always have a full cache before handling merges"),L(yg(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=uV(t.processor_,i,e,n,r);return lV(t.processor_,s.viewCache),L(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,lb(t,s.changes,s.viewCache.eventCache.getNode(),null)}function _V(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ze,(s,o)=>{r.push(To(s,o))}),n.isFullyInitialized()&&r.push(Xx(n.getNode())),lb(t,r,n.getNode(),e)}function lb(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return B4(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ph;class wV{constructor(){this.views=new Map}}function EV(t){L(!Ph,"__referenceConstructor has already been defined"),Ph=t}function TV(){return L(Ph,"Reference.ts has not been loaded"),Ph}function CV(t){return t.views.size===0}function p_(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return L(s!=null,"SyncTree gave us an op for an invalid query."),w1(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(w1(o,e,n,r));return s}}function SV(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ah(n,i?r:null),l=!1;a?l=!0:r instanceof ee?(a=h_(n,r),l=!1):(a=ee.EMPTY_NODE,l=!1);const u=$d(new rs(a,l,!1),new rs(r,i,!1));return new mV(e,u)}return o}function IV(t,e,n,r,i,s){const o=SV(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),vV(o,n),_V(o,n)}function kV(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=ci(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(_1(u,n,r)),v1(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(_1(l,n,r)),v1(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!ci(t)&&s.push(new(TV())(e._repo,e._path)),{removed:s,events:o}}function ub(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function io(t,e){let n=null;for(const r of t.views.values())n=n||yV(r,e);return n}function cb(t,e){if(e._queryParams.loadsAllData())return Fd(t);{const r=e._queryIdentifier;return t.views.get(r)}}function hb(t,e){return cb(t,e)!=null}function ci(t){return Fd(t)!=null}function Fd(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oh;function xV(t){L(!Oh,"__referenceConstructor has already been defined"),Oh=t}function bV(){return L(Oh,"Reference.ts has not been loaded"),Oh}let AV=1;class E1{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pe(null),this.pendingWriteTree_=rV(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function NV(t,e,n,r,i){return q4(t.pendingWriteTree_,e,n,r,i),i?Tu(t,new ns(Zx(),e,n)):[]}function Ls(t,e,n=!1){const r=K4(t.pendingWriteTree_,e);if(G4(t.pendingWriteTree_,e)){let s=new Pe(null);return r.snap!=null?s=s.set(we(),!0):tn(r.children,o=>{s=s.set(new xe(o),!0)}),Tu(t,new bh(r.path,s,n))}else return[]}function Ud(t,e,n){return Tu(t,new ns(l_(),e,n))}function RV(t,e,n){const r=Pe.fromObject(n);return Tu(t,new jl(l_(),e,r))}function PV(t,e){return Tu(t,new Vl(l_(),e))}function OV(t,e,n){const r=m_(t,n);if(r){const i=g_(r),s=i.path,o=i.queryId,a=Yt(s,e),l=new Vl(u_(o),a);return y_(t,s,l)}else return[]}function Tg(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||hb(o,e))){const l=kV(o,e,n,r);CV(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(d,f)=>ci(f));if(c&&!h){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const f=MV(d);for(let y=0;y<f.length;++y){const v=f[y],p=v.query,m=mb(t,v);t.listenProvider_.startListening(nl(p),Dh(t,p),m.hashFn,m.onComplete)}}}!h&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(nl(e),null):u.forEach(d=>{const f=t.queryToTagMap.get(Vd(d));t.listenProvider_.stopListening(nl(d),f)}))}$V(t,u)}return a}function DV(t,e,n,r){const i=m_(t,r);if(i!=null){const s=g_(i),o=s.path,a=s.queryId,l=Yt(o,e),u=new ns(u_(a),l,n);return y_(t,o,u)}else return[]}function LV(t,e,n,r){const i=m_(t,r);if(i){const s=g_(i),o=s.path,a=s.queryId,l=Yt(o,e),u=Pe.fromObject(n),c=new jl(u_(a),l,u);return y_(t,o,c)}else return[]}function T1(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,f)=>{const y=Yt(d,i);s=s||io(f,y),o=o||ci(f)});let a=t.syncPointTree_.get(i);a?(o=o||ci(a),s=s||io(a,we())):(a=new wV,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=ee.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,y)=>{const v=io(y,we());v&&(s=s.updateImmediateChild(f,v))}));const u=hb(a,e);if(!u&&!e._queryParams.loadsAllData()){const d=Vd(e);L(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=FV();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const c=c_(t.pendingWriteTree_,i);let h=IV(a,e,n,c,s,l);if(!u&&!o&&!r){const d=cb(a,e);h=h.concat(UV(t,e,d))}return h}function db(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Yt(o,e),u=io(a,l);if(u)return u});return rb(i,e,s,n,!0)}function Tu(t,e){return fb(e,t.syncPointTree_,null,c_(t.pendingWriteTree_,we()))}function fb(t,e,n,r){if(de(t.path))return pb(t,e,n,r);{const i=e.get(we());n==null&&i!=null&&(n=io(i,we()));let s=[];const o=he(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=ib(r,o);s=s.concat(fb(a,l,u,c))}return i&&(s=s.concat(p_(i,t,r,n))),s}}function pb(t,e,n,r){const i=e.get(we());n==null&&i!=null&&(n=io(i,we()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=ib(r,o),c=t.operationForChild(o);c&&(s=s.concat(pb(c,a,l,u)))}),i&&(s=s.concat(p_(i,t,r,n))),s}function mb(t,e){const n=e.query,r=Dh(t,n);return{hashFn:()=>(gV(e)||ee.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?OV(t,n._path,r):PV(t,n._path);{const s=PU(i,n);return Tg(t,n,null,s)}}}}function Dh(t,e){const n=Vd(e);return t.queryToTagMap.get(n)}function Vd(t){return t._path.toString()+"$"+t._queryIdentifier}function m_(t,e){return t.tagToQueryMap.get(e)}function g_(t){const e=t.indexOf("$");return L(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new xe(t.substr(0,e))}}function y_(t,e,n){const r=t.syncPointTree_.get(e);L(r,"Missing sync point for query tag that we're tracking");const i=c_(t.pendingWriteTree_,e);return p_(r,n,i,null)}function MV(t){return t.fold((e,n,r)=>{if(n&&ci(n))return[Fd(n)];{let i=[];return n&&(i=ub(n)),tn(r,(s,o)=>{i=i.concat(o)}),i}})}function nl(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(bV())(t._repo,t._path):t}function $V(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Vd(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function FV(){return AV++}function UV(t,e,n){const r=e._path,i=Dh(t,e),s=mb(t,n),o=t.listenProvider_.startListening(nl(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)L(!ci(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,h)=>{if(!de(u)&&c&&ci(c))return[Fd(c).query];{let d=[];return c&&(d=d.concat(ub(c).map(f=>f.query))),tn(h,(f,y)=>{d=d.concat(y)}),d}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(nl(c),Dh(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new v_(n)}node(){return this.node_}}class __{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ze(this.path_,e);return new __(this.syncTree_,n)}node(){return db(this.syncTree_,this.path_)}}const VV=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},C1=function(t,e,n){if(!t||typeof t!="object")return t;if(L(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return jV(t[".sv"],e,n);if(typeof t[".sv"]=="object")return BV(t[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},jV=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+t)}},BV=function(t,e,n){t.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&L(!1,"Unexpected increment value: "+r);const i=e.node();if(L(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},zV=function(t,e,n,r){return w_(e,new __(n,t),r)},HV=function(t,e,n){return w_(t,new v_(e),n)};function w_(t,e,n){const r=t.getPriority().val(),i=C1(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=C1(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ot(a,At(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ot(i))),o.forEachChild(ze,(a,l)=>{const u=w_(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function T_(t,e){let n=e instanceof xe?e:new xe(e),r=t,i=he(n);for(;i!==null;){const s=ho(r.node.children,i)||{children:{},childCount:0};r=new E_(i,r,s),n=Ae(n),i=he(n)}return r}function Go(t){return t.node.value}function gb(t,e){t.node.value=e,Cg(t)}function yb(t){return t.node.childCount>0}function WV(t){return Go(t)===void 0&&!yb(t)}function jd(t,e){tn(t.node.children,(n,r)=>{e(new E_(n,t,r))})}function vb(t,e,n,r){n&&!r&&e(t),jd(t,i=>{vb(i,e,!0,r)}),n&&r&&e(t)}function qV(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Cu(t){return new xe(t.parent===null?t.name:Cu(t.parent)+"/"+t.name)}function Cg(t){t.parent!==null&&KV(t.parent,t.name,t)}function KV(t,e,n){const r=WV(n),i=Er(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Cg(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Cg(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GV=/[\[\].#$\/\u0000-\u001F\u007F]/,QV=/[\[\].#$\u0000-\u001F\u007F]/,cp=10*1024*1024,_b=function(t){return typeof t=="string"&&t.length!==0&&!GV.test(t)},wb=function(t){return typeof t=="string"&&t.length!==0&&!QV.test(t)},YV=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),wb(t)},Eb=function(t,e,n){const r=n instanceof xe?new d4(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ei(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ei(r)+" with contents = "+e.toString());if(Tx(e))throw new Error(t+"contains "+e.toString()+" "+Ei(r));if(typeof e=="string"&&e.length>cp/3&&ld(e)>cp)throw new Error(t+"contains a string greater than "+cp+" utf8 bytes "+Ei(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(tn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!_b(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ei(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);f4(r,o),Eb(t,a,r),p4(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ei(r)+" in addition to actual children.")}},Tb=function(t,e,n,r){if(!(r&&n===void 0)&&!wb(n))throw new Error(AS(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},XV=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Tb(t,e,n,r)},JV=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!_b(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!YV(n))throw new Error(AS(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZV{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Cb(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!r_(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Sb(t,e,n){Cb(t,n),Ib(t,r=>r_(r,e))}function ms(t,e,n){Cb(t,n),Ib(t,r=>bn(r,e)||bn(e,r))}function Ib(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(e9(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function e9(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ji&&bt("event: "+n.toString()),wu(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t9="repo_interrupt",n9=25;class r9{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ZV,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=xh(),this.transactionQueueTree_=new E_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function i9(t,e,n){if(t.stats_=t_(t.repoInfo_),t.forceRestClient_||MU())t.server_=new kh(t.repoInfo_,(r,i,s,o)=>{S1(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>I1(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ut(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new dr(t.repoInfo_,e,(r,i,s,o)=>{S1(t,r,i,s,o)},r=>{I1(t,r)},r=>{o9(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=BU(t.repoInfo_,()=>new V4(t.stats_,t.server_)),t.infoData_=new L4,t.infoSyncTree_=new E1({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ud(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),C_(t,"connected",!1),t.serverSyncTree_=new E1({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);ms(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function s9(t){const n=t.infoData_.getNode(new xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function kb(t){return VV({timestamp:s9(t)})}function S1(t,e,n,r,i){t.dataUpdateCount++;const s=new xe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=ih(n,u=>At(u));o=LV(t.serverSyncTree_,s,l,i)}else{const l=At(n);o=DV(t.serverSyncTree_,s,l,i)}else if(r){const l=ih(n,u=>At(u));o=RV(t.serverSyncTree_,s,l)}else{const l=At(n);o=Ud(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=I_(t,s)),ms(t.eventQueue_,a,o)}function I1(t,e){C_(t,"connected",e),e===!1&&l9(t)}function o9(t,e){tn(e,(n,r)=>{C_(t,n,r)})}function C_(t,e,n){const r=new xe("/.info/"+e),i=At(n);t.infoData_.updateSnapshot(r,i);const s=Ud(t.infoSyncTree_,r,i);ms(t.eventQueue_,r,s)}function a9(t){return t.nextWriteId_++}function l9(t){xb(t,"onDisconnectEvents");const e=kb(t),n=xh();gg(t.onDisconnect_,we(),(i,s)=>{const o=zV(i,s,t.serverSyncTree_,e);Jx(n,i,o)});let r=[];gg(n,we(),(i,s)=>{r=r.concat(Ud(t.serverSyncTree_,i,s));const o=f9(t,i);I_(t,o)}),t.onDisconnect_=xh(),ms(t.eventQueue_,we(),r)}function u9(t,e,n){let r;he(e._path)===".info"?r=T1(t.infoSyncTree_,e,n):r=T1(t.serverSyncTree_,e,n),Sb(t.eventQueue_,e._path,r)}function k1(t,e,n){let r;he(e._path)===".info"?r=Tg(t.infoSyncTree_,e,n):r=Tg(t.serverSyncTree_,e,n),Sb(t.eventQueue_,e._path,r)}function c9(t){t.persistentConnection_&&t.persistentConnection_.interrupt(t9)}function xb(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),bt(n,...e)}function bb(t,e,n){return db(t.serverSyncTree_,e,n)||ee.EMPTY_NODE}function S_(t,e=t.transactionQueueTree_){if(e||Bd(t,e),Go(e)){const n=Nb(t,e);L(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&h9(t,Cu(e),n)}else yb(e)&&jd(e,n=>{S_(t,n)})}function h9(t,e,n){const r=n.map(u=>u.currentWriteId),i=bb(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];L(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=Yt(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{xb(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(Ls(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Bd(t,T_(t.transactionQueueTree_,e)),S_(t,t.transactionQueueTree_),ms(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)wu(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{sn("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}I_(t,e)}},o)}function I_(t,e){const n=Ab(t,e),r=Cu(n),i=Nb(t,n);return d9(t,i,r),r}function d9(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Yt(n,l.path);let c=!1,h;if(L(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,i=i.concat(Ls(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=n9)c=!0,h="maxretry",i=i.concat(Ls(t.serverSyncTree_,l.currentWriteId,!0));else{const d=bb(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Eb("transaction failed: Data returned ",f,l.path);let y=At(f);typeof f=="object"&&f!=null&&Er(f,".priority")||(y=y.updatePriority(d.getPriority()));const p=l.currentWriteId,m=kb(t),g=HV(y,d,m);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=g,l.currentWriteId=a9(t),o.splice(o.indexOf(p),1),i=i.concat(NV(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),i=i.concat(Ls(t.serverSyncTree_,p,!0))}else c=!0,h="nodata",i=i.concat(Ls(t.serverSyncTree_,l.currentWriteId,!0))}ms(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Bd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)wu(r[a]);S_(t,t.transactionQueueTree_)}function Ab(t,e){let n,r=t.transactionQueueTree_;for(n=he(e);n!==null&&Go(r)===void 0;)r=T_(r,n),e=Ae(e),n=he(e);return r}function Nb(t,e){const n=[];return Rb(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Rb(t,e,n){const r=Go(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);jd(e,i=>{Rb(t,i,n)})}function Bd(t,e){const n=Go(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,gb(e,n.length>0?n:void 0)}jd(e,r=>{Bd(t,r)})}function f9(t,e){const n=Cu(Ab(t,e)),r=T_(t.transactionQueueTree_,e);return qV(r,i=>{hp(t,i)}),hp(t,r),vb(r,i=>{hp(t,i)}),n}function hp(t,e){const n=Go(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(L(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(L(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ls(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?gb(e,void 0):n.length=s+1,ms(t.eventQueue_,Cu(e),i);for(let o=0;o<r.length;o++)wu(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p9(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function m9(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):sn(`Invalid query segment '${n}' in query '${t}'`)}return e}const x1=function(t,e){const n=g9(t),r=n.namespace;n.domain==="firebase.com"&&es(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&es("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||xU();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new UU(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new xe(n.pathString)}},g9=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=p9(t.substring(c,h)));const d=m9(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const f=e.slice(0,u);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ut(this.snapshot.exportVal())}}class Ob{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y9{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return de(this._path)?null:Bx(this._path)}get ref(){return new Cr(this._repo,this._path)}get _queryIdentifier(){const e=c1(this._queryParams),n=Zv(e);return n==="{}"?"default":n}get _queryObject(){return c1(this._queryParams)}isEqual(e){if(e=Ct(e),!(e instanceof k_))return!1;const n=this._repo===e._repo,r=r_(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+h4(this._path)}}class Cr extends k_{constructor(e,n){super(e,n,new a_,!1)}get parent(){const e=Hx(this._path);return e===null?null:new Cr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Bl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new xe(e),r=Sg(this.ref,e);return new Bl(this._node.getChild(n),r,ze)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Bl(i,Sg(this.ref,r),ze)))}hasChild(e){const n=new xe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Sg(t,e){return t=Ct(t),he(t._path)===null?XV("child","path",e,!1):Tb("child","path",e,!1),new Cr(t._repo,Ze(t._path,e))}class x_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Pb("value",this,new Bl(e.snapshotNode,new Cr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ob(this,e,n):null}matches(e){return e instanceof x_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class b_{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ob(this,e,n):null}createEvent(e,n){L(e.childName!=null,"Child events should have a childName.");const r=Sg(new Cr(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Pb(e.type,this,new Bl(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof b_?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Su(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,h)=>{k1(t._repo,t,a),l(c,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new y9(n,s||void 0),a=e==="value"?new x_(o):new b_(e,o);return u9(t._repo,t,a),()=>k1(t._repo,t,a)}function v9(t,e,n,r){return Su(t,"value",e,n,r)}function _9(t,e,n,r){return Su(t,"child_added",e,n,r)}function w9(t,e,n,r){return Su(t,"child_changed",e,n,r)}function E9(t,e,n,r){return Su(t,"child_moved",e,n,r)}function T9(t,e,n,r){return Su(t,"child_removed",e,n,r)}EV(Cr);xV(Cr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C9="FIREBASE_DATABASE_EMULATOR_HOST",Ig={};let S9=!1;function I9(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||es("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),bt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=x1(s,i),a=o.repoInfo,l,u;typeof process!="undefined"&&process.env&&(u=process.env[C9]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=x1(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new fg(fg.OWNER):new FU(t.name,t.options,e);JV("Invalid Firebase Database URL",o),de(o.path)||es("Database URL must point to the root of a Firebase Database (not including a child path).");const h=x9(a,t,c,new $U(t.name,n));return new b9(h,t)}function k9(t,e){const n=Ig[e];(!n||n[t.key]!==t)&&es(`Database ${e}(${t.repoInfo_}) has already been deleted.`),c9(t),delete n[t.key]}function x9(t,e,n,r){let i=Ig[e.name];i||(i={},Ig[e.name]=i);let s=i[t.toURLString()];return s&&es("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new r9(t,S9,n,r),i[t.toURLString()]=s,s}class b9{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(i9(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Cr(this._repo,we())),this._rootInternal}_delete(){return this._rootInternal!==null&&(k9(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&es("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A9(t){TU(Tr),_n(new on("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return I9(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Je(KE,GE,t),Je(KE,GE,"esm2017")}dr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};dr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};A9();var N9="firebase",R9="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Je(N9,R9,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P9="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O9{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1="us-central1";class D9{constructor(e,n,r,i,s=b1,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new O9(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=b1}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}const A1="@firebase/functions",N1="0.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L9="auth-internal",M9="app-check-internal",$9="messaging-internal";function F9(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(L9),a=r.getProvider($9),l=r.getProvider(M9);return new D9(s,o,a,l,i,t)};_n(new on(P9,n,"PUBLIC").setMultipleInstances(!0)),Je(A1,N1,e),Je(A1,N1,"esm2017")}F9(fetch.bind(self));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db="firebasestorage.googleapis.com",U9="storageBucket",V9=2*60*1e3,j9=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends en{constructor(e,n,r=0){super(dp(e),`Firebase Storage: ${n} (${dp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,er.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return dp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Yn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Yn||(Yn={}));function dp(t){return"storage/"+t}function B9(){const t="An unknown error occurred, please check the error payload for server response.";return new er(Yn.UNKNOWN,t)}function z9(){return new er(Yn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function H9(){return new er(Yn.CANCELED,"User canceled the upload/download.")}function W9(t){return new er(Yn.INVALID_URL,"Invalid URL '"+t+"'.")}function q9(t){return new er(Yn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function R1(t){return new er(Yn.INVALID_ARGUMENT,t)}function Lb(){return new er(Yn.APP_DELETED,"The Firebase app was deleted.")}function K9(t){return new er(Yn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Nn.makeFromUrl(e,n)}catch{return new Nn(e,"")}if(r.path==="")return r;throw q9(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},v=n===Db?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${p}`,"i"),_=[{regex:a,indices:l,postModify:s},{regex:f,indices:y,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<_.length;E++){const k=_[E],C=k.regex.exec(e);if(C){const b=C[k.indices.bucket];let N=C[k.indices.path];N||(N=""),r=new Nn(b,N),k.postModify(r);break}}if(r==null)throw W9(e);return r}}class G9{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q9(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...p){u||(u=!0,e.apply(null,p))}function h(p){i=setTimeout(()=>{i=null,t(f,l())},p)}function d(){s&&clearTimeout(s)}function f(p,...m){if(u){d();return}if(p){d(),c.call(null,p,...m);return}if(l()||o){d(),c.call(null,p,...m);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,h(_)}let y=!1;function v(p){y||(y=!0,d(),!u&&(i!==null?(p||(a=2),clearTimeout(i),h(0)):p||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function Y9(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X9(t){return t!==void 0}function P1(t,e,n,r){if(r<e)throw R1(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw R1(`Invalid value for '${t}'. Expected ${n} or less.`)}function J9(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lh;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Lh||(Lh={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z9(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,y)=>{this.resolve_=f,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new nc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Lh.NO_ERROR,l=s.getStatus();if(!a||Z9(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Lh.ABORT;r(!1,new nc(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new nc(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());X9(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=B9();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Lb():H9();o(l)}else{const l=z9();o(l)}};this.canceled_?n(!1,new nc(!1,null,!0)):this.backoffId_=Q9(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Y9(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class nc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function t3(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function n3(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function r3(t,e){e&&(t["X-Firebase-GMPID"]=e)}function i3(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function s3(t,e,n,r,i,s,o=!0){const a=J9(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return r3(u,e),t3(u,n),n3(u,s),i3(u,r),new e3(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o3(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function a3(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n){this._service=e,n instanceof Nn?this._location=n:this._location=Nn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Mh(e,n)}get root(){const e=new Nn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return a3(this._location.path)}get storage(){return this._service}get parent(){const e=o3(this._location.path);if(e===null)return null;const n=new Nn(this._location.bucket,e);return new Mh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw K9(e)}}function O1(t,e){const n=e==null?void 0:e[U9];return n==null?null:Nn.makeFromBucketSpec(n,t)}class l3{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Db,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=V9,this._maxUploadRetryTime=j9,this._requests=new Set,i!=null?this._bucket=Nn.makeFromBucketSpec(i,this._host):this._bucket=O1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Nn.makeFromBucketSpec(this._url,e):this._bucket=O1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){P1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){P1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Mh(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new G9(Lb());{const o=s3(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const D1="@firebase/storage",L1="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u3="storage";function c3(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new l3(n,r,i,e,Tr)}function h3(){_n(new on(u3,c3,"PUBLIC").setMultipleInstances(!0)),Je(D1,L1,""),Je(D1,L1,"esm2017")}h3();const d3=(t,e)=>e.some(n=>t instanceof n);let M1,$1;function f3(){return M1||(M1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function p3(){return $1||($1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mb=new WeakMap,kg=new WeakMap,$b=new WeakMap,fp=new WeakMap,A_=new WeakMap;function m3(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Jr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Mb.set(n,t)}).catch(()=>{}),A_.set(e,t),e}function g3(t){if(kg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});kg.set(t,e)}let xg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$b.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function y3(t){xg=t(xg)}function v3(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pp(this),e,...n);return $b.set(r,e.sort?e.sort():[e]),Jr(r)}:p3().includes(t)?function(...e){return t.apply(pp(this),e),Jr(Mb.get(this))}:function(...e){return Jr(t.apply(pp(this),e))}}function _3(t){return typeof t=="function"?v3(t):(t instanceof IDBTransaction&&g3(t),d3(t,f3())?new Proxy(t,xg):t)}function Jr(t){if(t instanceof IDBRequest)return m3(t);if(fp.has(t))return fp.get(t);const e=_3(t);return e!==t&&(fp.set(t,e),A_.set(e,t)),e}const pp=t=>A_.get(t);function w3(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Jr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Jr(o.result),l.oldVersion,l.newVersion,Jr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const E3=["get","getKey","getAll","getAllKeys","count"],T3=["put","add","delete","clear"],mp=new Map;function F1(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mp.get(e))return mp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=T3.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||E3.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return mp.set(e,s),s}y3(t=>({...t,get:(e,n,r)=>F1(e,n)||t.get(e,n,r),has:(e,n)=>!!F1(e,n)||t.has(e,n)}));const Fb="@firebase/installations",N_="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=1e4,Vb=`w:${N_}`,jb="FIS_v2",C3="https://firebaseinstallations.googleapis.com/v1",S3=60*60*1e3,I3="installations",k3="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x3={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ss=new ds(I3,k3,x3);function Bb(t){return t instanceof en&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb({projectId:t}){return`${C3}/projects/${t}/installations`}function Hb(t){return{token:t.token,requestStatus:2,expiresIn:A3(t.expiresIn),creationTime:Date.now()}}async function Wb(t,e){const r=(await e.json()).error;return ss.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function qb({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function b3(t,{refreshToken:e}){const n=qb(t);return n.append("Authorization",N3(e)),n}async function Kb(t){const e=await t();return e.status>=500&&e.status<600?t():e}function A3(t){return Number(t.replace("s","000"))}function N3(t){return`${jb} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R3({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=zb(t),i=qb(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:jb,appId:t.appId,sdkVersion:Vb},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Kb(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Hb(u.authToken)}}else throw await Wb("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P3(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O3=/^[cdef][\w-]{21}$/,bg="";function D3(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=L3(t);return O3.test(n)?n:bg}catch{return bg}}function L3(t){return P3(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=new Map;function Yb(t,e){const n=zd(t);Xb(n,e),M3(n,e)}function Xb(t,e){const n=Qb.get(t);if(!!n)for(const r of n)r(e)}function M3(t,e){const n=$3();n&&n.postMessage({key:t,fid:e}),F3()}let Di=null;function $3(){return!Di&&"BroadcastChannel"in self&&(Di=new BroadcastChannel("[Firebase] FID Change"),Di.onmessage=t=>{Xb(t.data.key,t.data.fid)}),Di}function F3(){Qb.size===0&&Di&&(Di.close(),Di=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U3="firebase-installations-database",V3=1,os="firebase-installations-store";let gp=null;function R_(){return gp||(gp=w3(U3,V3,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(os)}}})),gp}async function $h(t,e){const n=zd(t),i=(await R_()).transaction(os,"readwrite"),s=i.objectStore(os),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Yb(t,e.fid),e}async function Jb(t){const e=zd(t),r=(await R_()).transaction(os,"readwrite");await r.objectStore(os).delete(e),await r.done}async function Hd(t,e){const n=zd(t),i=(await R_()).transaction(os,"readwrite"),s=i.objectStore(os),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Yb(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P_(t){let e;const n=await Hd(t.appConfig,r=>{const i=j3(r),s=B3(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===bg?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function j3(t){const e=t||{fid:D3(),registrationStatus:0};return Zb(e)}function B3(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ss.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=z3(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:H3(t)}:{installationEntry:e}}async function z3(t,e){try{const n=await R3(t,e);return $h(t.appConfig,n)}catch(n){throw Bb(n)&&n.customData.serverCode===409?await Jb(t.appConfig):await $h(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function H3(t){let e=await U1(t.appConfig);for(;e.registrationStatus===1;)await Gb(100),e=await U1(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await P_(t);return r||n}return e}function U1(t){return Hd(t,e=>{if(!e)throw ss.create("installation-not-found");return Zb(e)})}function Zb(t){return W3(t)?{fid:t.fid,registrationStatus:0}:t}function W3(t){return t.registrationStatus===1&&t.registrationTime+Ub<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q3({appConfig:t,heartbeatServiceProvider:e},n){const r=K3(t,n),i=b3(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Vb,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Kb(()=>fetch(r,a));if(l.ok){const u=await l.json();return Hb(u)}else throw await Wb("Generate Auth Token",l)}function K3(t,{fid:e}){return`${zb(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(t,e=!1){let n;const r=await Hd(t.appConfig,s=>{if(!eA(s))throw ss.create("not-registered");const o=s.authToken;if(!e&&Y3(o))return s;if(o.requestStatus===1)return n=G3(t,e),s;{if(!navigator.onLine)throw ss.create("app-offline");const a=J3(s);return n=Q3(t,a),a}});return n?await n:r.authToken}async function G3(t,e){let n=await V1(t.appConfig);for(;n.authToken.requestStatus===1;)await Gb(100),n=await V1(t.appConfig);const r=n.authToken;return r.requestStatus===0?O_(t,e):r}function V1(t){return Hd(t,e=>{if(!eA(e))throw ss.create("not-registered");const n=e.authToken;return Z3(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Q3(t,e){try{const n=await q3(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await $h(t.appConfig,r),n}catch(n){if(Bb(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Jb(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await $h(t.appConfig,r)}throw n}}function eA(t){return t!==void 0&&t.registrationStatus===2}function Y3(t){return t.requestStatus===2&&!X3(t)}function X3(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+S3}function J3(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Z3(t){return t.requestStatus===1&&t.requestTime+Ub<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ej(t){const e=t,{installationEntry:n,registrationPromise:r}=await P_(e);return r?r.catch(console.error):O_(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tj(t,e=!1){const n=t;return await nj(n),(await O_(n,e)).token}async function nj(t){const{registrationPromise:e}=await P_(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rj(t){if(!t||!t.options)throw yp("App Configuration");if(!t.name)throw yp("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw yp(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function yp(t){return ss.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA="installations",ij="installations-internal",sj=t=>{const e=t.getProvider("app").getImmediate(),n=rj(e),r=Xl(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},oj=t=>{const e=t.getProvider("app").getImmediate(),n=Xl(e,tA).getImmediate();return{getId:()=>ej(n),getToken:i=>tj(n,i)}};function aj(){_n(new on(tA,sj,"PUBLIC")),_n(new on(ij,oj,"PRIVATE"))}aj();Je(Fb,N_);Je(Fb,N_,"esm2017");const vp="@firebase/remote-config",j1="0.4.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lj="remote-config";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uj={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},Qt=new ds("remoteconfig","Remote Config",uj);function cj(t){const e=Ct(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hj{constructor(e,n,r,i){this.client=e,this.storage=n,this.storageCache=r,this.logger=i}isCachedDataFresh(e,n){if(!n)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const r=Date.now()-n,i=r<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${r}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${i}.`),i}async fetch(e){const[n,r]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(r&&this.isCachedDataFresh(e.cacheMaxAgeMillis,n))return r;e.eTag=r&&r.eTag;const i=await this.client.fetch(e),s=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return i.status===200&&s.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(s),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dj(t=navigator){return t.languages&&t.languages[0]||t.language}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fj{constructor(e,n,r,i,s,o){this.firebaseInstallations=e,this.sdkVersion=n,this.namespace=r,this.projectId=i,this.apiKey=s,this.appId=o}async fetch(e){const[n,r]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),s=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,o={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},a={sdk_version:this.sdkVersion,app_instance_id:n,app_instance_id_token:r,app_id:this.appId,language_code:dj()},l={method:"POST",headers:o,body:JSON.stringify(a)},u=fetch(s,l),c=new Promise((p,m)=>{e.signal.addEventListener(()=>{const g=new Error("The operation was aborted.");g.name="AbortError",m(g)})});let h;try{await Promise.race([u,c]),h=await u}catch(p){let m="fetch-client-network";throw(p==null?void 0:p.name)==="AbortError"&&(m="fetch-timeout"),Qt.create(m,{originalErrorMessage:p==null?void 0:p.message})}let d=h.status;const f=h.headers.get("ETag")||void 0;let y,v;if(h.status===200){let p;try{p=await h.json()}catch(m){throw Qt.create("fetch-client-parse",{originalErrorMessage:m==null?void 0:m.message})}y=p.entries,v=p.state}if(v==="INSTANCE_STATE_UNSPECIFIED"?d=500:v==="NO_CHANGE"?d=304:(v==="NO_TEMPLATE"||v==="EMPTY_CONFIG")&&(y={}),d!==304&&d!==200)throw Qt.create("fetch-status",{httpStatus:d});return{status:d,eTag:f,config:y}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pj(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Qt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function mj(t){if(!(t instanceof en)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class gj{constructor(e,n){this.client=e,this.storage=n}async fetch(e){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,n)}async attemptFetch(e,{throttleEndTimeMillis:n,backoffCount:r}){await pj(e.signal,n);try{const i=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),i}catch(i){if(!mj(i))throw i;const s={throttleEndTimeMillis:Date.now()+mO(r),backoffCount:r+1};return await this.storage.setThrottleMetadata(s),this.attemptFetch(e,s)}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yj=60*1e3,vj=12*60*60*1e3;class _j{constructor(e,n,r,i,s){this.app=e,this._client=n,this._storageCache=r,this._storage=i,this._logger=s,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:yj,minimumFetchIntervalMillis:vj},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(t,e){const n=t.target.error||void 0;return Qt.create(e,{originalErrorMessage:n&&(n==null?void 0:n.message)})}const Ti="app_namespace_store",wj="firebase_remote_config",Ej=1;function Tj(){return new Promise((t,e)=>{try{const n=indexedDB.open(wj,Ej);n.onerror=r=>{e(kc(r,"storage-open"))},n.onsuccess=r=>{t(r.target.result)},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(Ti,{keyPath:"compositeKey"})}}}catch(n){e(Qt.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}})}class Cj{constructor(e,n,r,i=Tj()){this.appId=e,this.appName=n,this.namespace=r,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const n=await this.openDbPromise;return new Promise((r,i)=>{const o=n.transaction([Ti],"readonly").objectStore(Ti),a=this.createCompositeKey(e);try{const l=o.get(a);l.onerror=u=>{i(kc(u,"storage-get"))},l.onsuccess=u=>{const c=u.target.result;r(c?c.value:void 0)}}catch(l){i(Qt.create("storage-get",{originalErrorMessage:l==null?void 0:l.message}))}})}async set(e,n){const r=await this.openDbPromise;return new Promise((i,s)=>{const a=r.transaction([Ti],"readwrite").objectStore(Ti),l=this.createCompositeKey(e);try{const u=a.put({compositeKey:l,value:n});u.onerror=c=>{s(kc(c,"storage-set"))},u.onsuccess=()=>{i()}}catch(u){s(Qt.create("storage-set",{originalErrorMessage:u==null?void 0:u.message}))}})}async delete(e){const n=await this.openDbPromise;return new Promise((r,i)=>{const o=n.transaction([Ti],"readwrite").objectStore(Ti),a=this.createCompositeKey(e);try{const l=o.delete(a);l.onerror=u=>{i(kc(u,"storage-delete"))},l.onsuccess=()=>{r()}}catch(l){i(Qt.create("storage-delete",{originalErrorMessage:l==null?void 0:l.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sj{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),i=await e;i&&(this.lastFetchStatus=i);const s=await n;s&&(this.lastSuccessfulFetchTimestampMillis=s);const o=await r;o&&(this.activeConfig=o)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ij(){_n(new on(lj,t,"PUBLIC").setMultipleInstances(!0)),Je(vp,j1),Je(vp,j1,"esm2017");function t(e,{instanceIdentifier:n}){const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if(typeof window=="undefined")throw Qt.create("registration-window");if(!xS())throw Qt.create("indexed-db-unavailable");const{projectId:s,apiKey:o,appId:a}=r.options;if(!s)throw Qt.create("registration-project-id");if(!o)throw Qt.create("registration-api-key");if(!a)throw Qt.create("registration-app-id");n=n||"firebase";const l=new Cj(a,r.name,n),u=new Sj(l),c=new Yl(vp);c.logLevel=me.ERROR;const h=new fj(i,Tr,n,s,o,a),d=new gj(h,l),f=new hj(d,l,u,c),y=new _j(r,f,u,l,c);return cj(y),y}}Ij();var Ag=function(t,e){return Ag=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Ag(t,e)};function Sr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Ag(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function kj(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function nA(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function So(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Io(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function ko(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function so(t){return this instanceof so?(this.v=t,this):new so(t)}function xj(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(d){r[d]&&(i[d]=function(f){return new Promise(function(y,v){s.push([d,f,y,v])>1||a(d,f)})})}function a(d,f){try{l(r[d](f))}catch(y){h(s[0][3],y)}}function l(d){d.value instanceof so?Promise.resolve(d.value.v).then(u,c):h(s[0][2],d)}function u(d){a("next",d)}function c(d){a("throw",d)}function h(d,f){d(f),s.shift(),s.length&&a(s[0][0],s[0][1])}}function bj(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof So=="function"?So(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(s){n[s]=t[s]&&function(o){return new Promise(function(a,l){o=t[s](o),i(a,l,o.done,o.value)})}}function i(s,o,a,l){Promise.resolve(l).then(function(u){s({value:u,done:a})},o)}}function nt(t){return typeof t=="function"}function D_(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var _p=D_(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function Fh(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Iu=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,i,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=So(o),l=a.next();!l.done;l=a.next()){var u=l.value;u.remove(this)}}catch(v){e={error:v}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else o.remove(this);var c=this.initialTeardown;if(nt(c))try{c()}catch(v){s=v instanceof _p?v.errors:[v]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var d=So(h),f=d.next();!f.done;f=d.next()){var y=f.value;try{B1(y)}catch(v){s=s!=null?s:[],v instanceof _p?s=ko(ko([],Io(s)),Io(v.errors)):s.push(v)}}}catch(v){r={error:v}}finally{try{f&&!f.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(s)throw new _p(s)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)B1(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&Fh(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&Fh(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),rA=Iu.EMPTY;function iA(t){return t instanceof Iu||t&&"closed"in t&&nt(t.remove)&&nt(t.add)&&nt(t.unsubscribe)}function B1(t){nt(t)?t():t.unsubscribe()}var sA={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Aj={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,ko([t,e],Io(n)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function oA(t){Aj.setTimeout(function(){throw t})}function z1(){}function xc(t){t()}var L_=function(t){Sr(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,iA(n)&&n.add(r)):r.destination=Oj,r}return e.create=function(n,r,i){return new zl(n,r,i)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Iu),Nj=Function.prototype.bind;function wp(t,e){return Nj.call(t,e)}var Rj=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){rc(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){rc(r)}else rc(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){rc(n)}},t}(),zl=function(t){Sr(e,t);function e(n,r,i){var s=t.call(this)||this,o;if(nt(n)||!n)o={next:n!=null?n:void 0,error:r!=null?r:void 0,complete:i!=null?i:void 0};else{var a;s&&sA.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return s.unsubscribe()},o={next:n.next&&wp(n.next,a),error:n.error&&wp(n.error,a),complete:n.complete&&wp(n.complete,a)}):o=n}return s.destination=new Rj(o),s}return e}(L_);function rc(t){oA(t)}function Pj(t){throw t}var Oj={closed:!0,next:z1,error:Pj,complete:z1},M_=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function aA(t){return t}function Dj(t){return t.length===0?aA:t.length===1?t[0]:function(e){return t.reduce(function(n,r){return r(n)},e)}}var Wt=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var i=this,s=Mj(e)?e:new zl(e,n,r);return xc(function(){var o=i,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?i._subscribe(s):i._trySubscribe(s))}),s},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=H1(n),new n(function(i,s){var o=new zl({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:i});r.subscribe(o)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[M_]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Dj(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=H1(e),new e(function(r,i){var s;n.subscribe(function(o){return s=o},function(o){return i(o)},function(){return r(s)})})},t.create=function(e){return new t(e)},t}();function H1(t){var e;return(e=t!=null?t:sA.Promise)!==null&&e!==void 0?e:Promise}function Lj(t){return t&&nt(t.next)&&nt(t.error)&&nt(t.complete)}function Mj(t){return t&&t instanceof L_||Lj(t)&&iA(t)}function $j(t){return nt(t==null?void 0:t.lift)}function gs(t){return function(e){if($j(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function xo(t,e,n,r,i){return new Fj(t,e,n,r,i)}var Fj=function(t){Sr(e,t);function e(n,r,i,s,o,a){var l=t.call(this,n)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=r?function(u){try{r(u)}catch(c){n.error(c)}}:t.prototype._next,l._error=s?function(u){try{s(u)}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=i?function(){try{i()}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e}(L_),Uj=D_(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Wd=function(t){Sr(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new W1(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new Uj},e.prototype.next=function(n){var r=this;xc(function(){var i,s;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var o=So(r.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(n)}}catch(u){i={error:u}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}})},e.prototype.error=function(n){var r=this;xc(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},e.prototype.complete=function(){var n=this;xc(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,i=this,s=i.hasError,o=i.isStopped,a=i.observers;return s||o?rA:(this.currentObservers=null,a.push(n),new Iu(function(){r.currentObservers=null,Fh(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,s=r.thrownError,o=r.isStopped;i?n.error(s):o&&n.complete()},e.prototype.asObservable=function(){var n=new Wt;return n.source=this,n},e.create=function(n,r){return new W1(n,r)},e}(Wt),W1=function(t){Sr(e,t);function e(n,r){var i=t.call(this)||this;return i.destination=n,i.source=r,i}return e.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},e.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:rA},e}(Wd),$_={now:function(){return($_.delegate||Date).now()},delegate:void 0},Vj=function(t){Sr(e,t);function e(n,r,i){n===void 0&&(n=1/0),r===void 0&&(r=1/0),i===void 0&&(i=$_);var s=t.call(this)||this;return s._bufferSize=n,s._windowTime=r,s._timestampProvider=i,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=r===1/0,s._bufferSize=Math.max(1,n),s._windowTime=Math.max(1,r),s}return e.prototype.next=function(n){var r=this,i=r.isStopped,s=r._buffer,o=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;i||(s.push(n),!o&&s.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),i=this,s=i._infiniteTimeWindow,o=i._buffer,a=o.slice(),l=0;l<a.length&&!n.closed;l+=s?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,i=n._timestampProvider,s=n._buffer,o=n._infiniteTimeWindow,a=(o?1:2)*r;if(r<1/0&&a<s.length&&s.splice(0,s.length-a),!o){for(var l=i.now(),u=0,c=1;c<s.length&&s[c]<=l;c+=2)u=c;u&&s.splice(0,u+1)}},e}(Wd),jj=function(t){Sr(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}(Iu),Ng={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=Ng.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,ko([t,e],Io(n))):setInterval.apply(void 0,ko([t,e],Io(n)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},Bj=function(t){Sr(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return e.prototype.schedule=function(n,r){if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(s,this.id,r),this},e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),Ng.setInterval(n.flush.bind(n,this),i)},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;Ng.clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var i=!1,s;try{this.work(n)}catch(o){i=!0,s=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,s=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Fh(s,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(jj),q1=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(r,n)},t.now=$_.now,t}(),zj=function(t){Sr(e,t);function e(n,r){r===void 0&&(r=q1.now);var i=t.call(this,n,r)||this;return i.actions=[],i._active=!1,i._scheduled=void 0,i}return e.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},e}(q1);new zj(Bj);var Hj=new Wt(function(t){return t.complete()});function Wj(t){return t?qj(t):Hj}function qj(t){return new Wt(function(e){return t.schedule(function(){return e.complete()})})}function Kj(t){return t&&nt(t.schedule)}function Gj(t){return t[t.length-1]}function Qj(t){return Kj(Gj(t))?t.pop():void 0}var lA=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function uA(t){return nt(t==null?void 0:t.then)}function cA(t){return nt(t[M_])}function hA(t){return Symbol.asyncIterator&&nt(t==null?void 0:t[Symbol.asyncIterator])}function dA(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Yj(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var fA=Yj();function pA(t){return nt(t==null?void 0:t[fA])}function mA(t){return xj(this,arguments,function(){var e,n,r,i;return nA(this,function(s){switch(s.label){case 0:e=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,so(e.read())];case 3:return n=s.sent(),r=n.value,i=n.done,i?[4,so(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,so(r)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function gA(t){return nt(t==null?void 0:t.getReader)}function Qo(t){if(t instanceof Wt)return t;if(t!=null){if(cA(t))return Xj(t);if(lA(t))return Jj(t);if(uA(t))return Zj(t);if(hA(t))return yA(t);if(pA(t))return e6(t);if(gA(t))return t6(t)}throw dA(t)}function Xj(t){return new Wt(function(e){var n=t[M_]();if(nt(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Jj(t){return new Wt(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function Zj(t){return new Wt(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,oA)})}function e6(t){return new Wt(function(e){var n,r;try{for(var i=So(t),s=i.next();!s.done;s=i.next()){var o=s.value;if(e.next(o),e.closed)return}}catch(a){n={error:a}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}e.complete()})}function yA(t){return new Wt(function(e){n6(t,e).catch(function(n){return e.error(n)})})}function t6(t){return yA(mA(t))}function n6(t,e){var n,r,i,s;return kj(this,void 0,void 0,function(){var o,a;return nA(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),n=bj(t),l.label=1;case 1:return[4,n.next()];case 2:if(r=l.sent(),!!r.done)return[3,4];if(o=r.value,e.next(o),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=l.sent(),i={error:a},[3,11];case 6:return l.trys.push([6,,9,10]),r&&!r.done&&(s=n.return)?[4,s.call(n)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function Bi(t,e,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var s=e.schedule(function(){n(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(s),!i)return s}function vA(t,e){return e===void 0&&(e=0),gs(function(n,r){n.subscribe(xo(r,function(i){return Bi(r,t,function(){return r.next(i)},e)},function(){return Bi(r,t,function(){return r.complete()},e)},function(i){return Bi(r,t,function(){return r.error(i)},e)}))})}function _A(t,e){return e===void 0&&(e=0),gs(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function r6(t,e){return Qo(t).pipe(_A(e),vA(e))}function i6(t,e){return Qo(t).pipe(_A(e),vA(e))}function s6(t,e){return new Wt(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function o6(t,e){return new Wt(function(n){var r;return Bi(n,e,function(){r=t[fA](),Bi(n,e,function(){var i,s,o;try{i=r.next(),s=i.value,o=i.done}catch(a){n.error(a);return}o?n.complete():n.next(s)},0,!0)}),function(){return nt(r==null?void 0:r.return)&&r.return()}})}function wA(t,e){if(!t)throw new Error("Iterable cannot be null");return new Wt(function(n){Bi(n,e,function(){var r=t[Symbol.asyncIterator]();Bi(n,e,function(){r.next().then(function(i){i.done?n.complete():n.next(i.value)})},0,!0)})})}function a6(t,e){return wA(mA(t),e)}function l6(t,e){if(t!=null){if(cA(t))return r6(t,e);if(lA(t))return s6(t,e);if(uA(t))return i6(t,e);if(hA(t))return wA(t,e);if(pA(t))return o6(t,e);if(gA(t))return a6(t,e)}throw dA(t)}function EA(t,e){return e?l6(t,e):Qo(t)}function K1(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=Qj(t);return EA(t,n)}D_(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function F_(t,e){return gs(function(n,r){var i=0;n.subscribe(xo(r,function(s){r.next(t.call(e,s,i++))}))})}function TA(t){return gs(function(e,n){var r=null,i=!1,s;r=e.subscribe(xo(n,void 0,void 0,function(o){s=Qo(t(o,TA(t)(e))),r?(r.unsubscribe(),r=null,s.subscribe(n)):i=!0})),i&&(r.unsubscribe(),r=null,s.subscribe(n))})}function u6(t){t===void 0&&(t={});var e=t.connector,n=e===void 0?function(){return new Wd}:e,r=t.resetOnError,i=r===void 0?!0:r,s=t.resetOnComplete,o=s===void 0?!0:s,a=t.resetOnRefCountZero,l=a===void 0?!0:a;return function(u){var c,h,d,f=0,y=!1,v=!1,p=function(){h==null||h.unsubscribe(),h=void 0},m=function(){p(),c=d=void 0,y=v=!1},g=function(){var _=c;m(),_==null||_.unsubscribe()};return gs(function(_,E){f++,!v&&!y&&p();var k=d=d!=null?d:n();E.add(function(){f--,f===0&&!v&&!y&&(h=Ep(g,l))}),k.subscribe(E),!c&&f>0&&(c=new zl({next:function(C){return k.next(C)},error:function(C){v=!0,p(),h=Ep(m,i,C),k.error(C)},complete:function(){y=!0,p(),h=Ep(m,o),k.complete()}}),Qo(_).subscribe(c))})(u)}}function Ep(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(e===!0){t();return}if(e!==!1){var i=new zl({next:function(){i.unsubscribe(),t()}});return e.apply(void 0,ko([],Io(n))).subscribe(i)}}function c6(t,e,n){var r,i,s,o,a=!1;return t&&typeof t=="object"?(r=t.bufferSize,o=r===void 0?1/0:r,i=t.windowTime,e=i===void 0?1/0:i,s=t.refCount,a=s===void 0?!1:s,n=t.scheduler):o=t!=null?t:1/0,u6({connector:function(){return new Vj(o,e,n)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:a})}function h6(t,e){return gs(function(n,r){var i=null,s=0,o=!1,a=function(){return o&&!i&&r.complete()};n.subscribe(xo(r,function(l){i==null||i.unsubscribe();var u=0,c=s++;Qo(t(l,c)).subscribe(i=xo(r,function(h){return r.next(e?e(l,h,c,u++):h)},function(){i=null,a()}))},function(){o=!0,a()}))})}function d6(t,e,n){var r=nt(t)||e||n?{next:t,error:e,complete:n}:t;return r?gs(function(i,s){var o;(o=r.subscribe)===null||o===void 0||o.call(r);var a=!0;i.subscribe(xo(s,function(l){var u;(u=r.next)===null||u===void 0||u.call(r,l),s.next(l)},function(){var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),s.complete()},function(l){var u;a=!1,(u=r.error)===null||u===void 0||u.call(r,l),s.error(l)},function(){var l,u;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(u=r.finalize)===null||u===void 0||u.call(r)}))}):aA}function f6(t){return new Wt(function(e){var n=sI(t,e.next.bind(e),e.error.bind(e),e.complete.bind(e));return{unsubscribe:n}})}const p6="[DEFAULT]",CA=T.exports.createContext(void 0),SA=T.exports.createContext(!1),m6="4.2.2",g6=(t,e)=>t===e||[...Object.keys(t),...Object.keys(e)].every(n=>t[n]===e[n]);function y6(t){const{firebaseConfig:e,appName:n,suspense:r}=t,i=T.exports.useMemo(()=>{if(t.firebaseApp)return t.firebaseApp;const s=dD().find(o=>o.name===(n||p6));if(s){if(e&&g6(s.options,e))return s;throw new Error(`Does not match the options already provided to the ${n||"default"} firebase app instance, give this new instance a different appName.`)}else{if(!e)throw new Error("No firebaseConfig provided");const o=T.exports.version||"unknown";return Je("react",o),Je("reactfire",m6),PS(e,n)}},[t.firebaseApp,e,n]);return T.exports.createElement(CA.Provider,{value:i},T.exports.createElement(SA.Provider,Object.assign({value:r!=null?r:!1},t)))}function v6(t){let e=T.exports.useContext(SA);return t!==void 0?t:e}function IA(){const t=T.exports.useContext(CA);if(!t)throw new Error("Cannot call useFirebaseApp unless your component is within a FirebaseAppProvider");return t}function kA(t){if((t==null?void 0:t.hasOwnProperty("requiredClaims"))&&(t==null?void 0:t.hasOwnProperty("validateCustomClaims")))throw new Error('Cannot have both "requiredClaims" and "validateCustomClaims". Use one or the other.');const e=PA();let n=`auth:signInCheck:${e.name}::forceRefresh:${!!(t!=null&&t.forceRefresh)}`;t!=null&&t.forceRefresh&&(n=`${n}:forceRefresh:${t.forceRefresh}`),t!=null&&t.hasOwnProperty("requiredClaims")?n=`${n}:requiredClaims:${JSON.stringify(t.requiredClaims)}`:t!=null&&t.hasOwnProperty("validateCustomClaims")&&(n=`${n}:validateCustomClaims:${JSON.stringify(t.validateCustomClaims)}`);const r=f6(e).pipe(h6(i=>{var s;return i?t&&(t.hasOwnProperty("requiredClaims")||t.hasOwnProperty("validateCustomClaims"))?EA(i.getIdTokenResult((s=t==null?void 0:t.forceRefresh)!==null&&s!==void 0?s:!1)).pipe(F_(o=>{let a;t.hasOwnProperty("requiredClaims")?a=_6(t.requiredClaims):a=t.validateCustomClaims;const{hasRequiredClaims:l,errors:u}=a(o.claims);return{signedIn:!0,hasRequiredClaims:l,errors:u,user:i}})):K1({signedIn:!0,hasRequiredClaims:!0,errors:{},user:i}):K1({signedIn:!1,hasRequiredClaims:!1,errors:{},user:null})}));return xA(n,r)}function _6(t){return function(e){const n={};return Object.keys(t).forEach(r=>{t[r]!==e[r]&&(n[r]=[new U_("auth/missing-claim",`Expected "${t[r]}", but user has "${e[r]}" instead`)])}),{hasRequiredClaims:Object.keys(n).length===0,errors:n}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yi,Ci;(function(t){t.added="child_added",t.removed="child_removed",t.changed="child_changed",t.moved="child_moved",t.value="value"})(Ci||(Ci={}));Object.freeze((yi={},yi[Ci.added]=_9,yi[Ci.removed]=T9,yi[Ci.changed]=w9,yi[Ci.moved]=E9,yi[Ci.value]=v9,yi));const w6=globalThis._reactFireDatabaseCachedQueries||[];globalThis._reactFireDatabaseCachedQueries||(globalThis._reactFireDatabaseCachedQueries=w6);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var E6={includeMetadataChanges:!1};function T6(t,e){return e===void 0&&(e=E6),new Wt(function(n){var r=wU(t,e,{next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)});return{unsubscribe:r}})}function C6(t,e){e===void 0&&(e={});var n=t.data();return!t.exists()||typeof n!="object"||n===null||e.idField&&(n[e.idField]=t.id),n}function S6(t){return T6(t,{includeMetadataChanges:!0}).pipe(F_(function(e){return e.docs}))}function I6(t,e){return e===void 0&&(e={}),S6(t).pipe(F_(function(n){return n.map(function(r){return C6(r,e)})}))}class k6 extends Wd{constructor(e,n){super(),this._timeoutWindow=n,this._hasValue=!1,this._error=void 0,this._firstEmission=new Promise(r=>this._resolveFirstEmission=r),this._innerObservable=e.pipe(d6({next:r=>{this._next(r)},error:r=>{this._error=r,this._resolveFirstEmission()}}),TA(()=>Wj()),c6(1)),this._warmupSubscription=this._innerObservable.subscribe(),this._timeoutHandler=setTimeout(this._reset.bind(this),this._timeoutWindow)}get hasValue(){return this._hasValue||!!this._error}get value(){if(this._error)throw this._error;if(!this.hasValue)throw Error("Can only get value if SuspenseSubject has a value");return this._value}get firstEmission(){return this._firstEmission}_next(e){this._hasValue=!0,this._value=e,this._resolveFirstEmission()}_reset(){this._warmupSubscription&&this._warmupSubscription.unsubscribe(),this._hasValue=!1,this._value=void 0,this._error=void 0,this._firstEmission=new Promise(e=>this._resolveFirstEmission=e)}_subscribe(e){return this._timeoutHandler&&clearTimeout(this._timeoutHandler),this._innerSubscriber=this._innerObservable.subscribe(e),this._innerSubscriber}get ourError(){return this._error}}const x6=3e4,bc=globalThis._reactFirePreloadedObservables||new Map;globalThis._reactFirePreloadedObservables||(globalThis._reactFirePreloadedObservables=bc);function b6(t,e){if(bc.has(e))return bc.get(e);{const n=new k6(t,x6);return bc.set(e,n),n}}function A6(t){return function(e,n){const r=Object.assign(Object.assign({},e),{hasEmitted:e.hasEmitted||t.hasValue,error:t.ourError,firstValuePromise:t.firstEmission});switch(t.hasValue&&(r.data=t.value),n){case"value":return r.status="success",r;case"error":return r.status="error",r;case"complete":return r.isComplete=!0,r;default:throw new Error(`invalid action "${n}"`)}}}function xA(t,e,n={}){var r;if(!t)throw new Error("cannot call useObservable without an observableId");const i=b6(e,t),s=n.hasOwnProperty("initialData")||n.hasOwnProperty("startWithValue"),o=i.hasValue||s;if(v6(n.suspense)===!0&&!o)throw i.firstEmission;const a={status:o?"success":"loading",hasEmitted:o,isComplete:!1,data:i.hasValue?i.value:(r=n==null?void 0:n.initialData)!==null&&r!==void 0?r:n==null?void 0:n.startWithValue,error:i.ourError,firstValuePromise:i.firstEmission},[l,u]=T.exports.useReducer(A6(i),a);return T.exports.useEffect(()=>{const c=i.subscribe({next:()=>{u("value")},error:h=>{throw u("error"),h},complete:()=>{u("complete")}});return()=>c.unsubscribe()},[i]),l}const Rg=globalThis._reactFireFirestoreQueryCache||[];globalThis._reactFireFirestoreQueryCache||(globalThis._reactFireFirestoreQueryCache=Rg);function N6(t){const e=Rg.findIndex(n=>ZF(n,t));return e>-1?e:Rg.push(t)-1}function R6(t,e){const n=e?M6(e):"NO_ID_FIELD",r=`firestore:collectionData:${N6(t)}:idField=${n}`,i=I6(t,{idField:n});return xA(r,i,e)}T.exports.createContext(void 0);const bA=T.exports.createContext(void 0);T.exports.createContext(void 0);T.exports.createContext(void 0);const AA=T.exports.createContext(void 0);T.exports.createContext(void 0);T.exports.createContext(void 0);T.exports.createContext(void 0);T.exports.createContext(void 0);function NA(t){return function(e){var n,r;if(!e.sdk)throw new Error("no sdk provided");const i=IA().name;if(((r=(n=e==null?void 0:e.sdk)===null||n===void 0?void 0:n.app)===null||r===void 0?void 0:r.name)!==i)throw new Error("sdk was initialized with a different firebase app");return T.exports.createElement(t.Provider,Object.assign({value:e.sdk},e))}}function RA(t){const e=T.exports.useContext(t);if(!e)throw new Error("SDK not found. useSdk must be called from within a provider");return e}const P6=NA(bA),O6=NA(AA),PA=()=>RA(bA),D6=()=>RA(AA);class U_ extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name="ReactFireError",Object.setPrototypeOf(this,U_.prototype)}}function L6(t,e){if(e==="idField"||e==="initialData"||e==="suspense")return t?t[e]:void 0;throw new Error(`Field "${e}" is not a valid key in ReactFireOptions`)}function M6(t){return L6(t,"idField")}function Pg(t,e){return Pg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Pg(t,e)}function Xn(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Pg(t,e)}var OA={exports:{}},$6="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",F6=$6,U6=F6;function DA(){}function LA(){}LA.resetWarningCache=DA;var V6=function(){function t(r,i,s,o,a,l){if(l!==U6){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:LA,resetWarningCache:DA};return n.PropTypes=n,n};OA.exports=V6();var G1=OA.exports;function ft(){return ft=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ft.apply(this,arguments)}function ic(t){return t.charAt(0)==="/"}function Tp(t,e){for(var n=e,r=n+1,i=t.length;r<i;n+=1,r+=1)t[n]=t[r];t.pop()}function MA(t,e){e===void 0&&(e="");var n=t&&t.split("/")||[],r=e&&e.split("/")||[],i=t&&ic(t),s=e&&ic(e),o=i||s;if(t&&ic(t)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";var a;if(r.length){var l=r[r.length-1];a=l==="."||l===".."||l===""}else a=!1;for(var u=0,c=r.length;c>=0;c--){var h=r[c];h==="."?Tp(r,c):h===".."?(Tp(r,c),u++):u&&(Tp(r,c),u--)}if(!o)for(;u--;u)r.unshift("..");o&&r[0]!==""&&(!r[0]||!ic(r[0]))&&r.unshift("");var d=r.join("/");return a&&d.substr(-1)!=="/"&&(d+="/"),d}function Q1(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}function Ac(t,e){if(t===e)return!0;if(t==null||e==null)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every(function(i,s){return Ac(i,e[s])});if(typeof t=="object"||typeof e=="object"){var n=Q1(t),r=Q1(e);return n!==t||r!==e?Ac(n,r):Object.keys(Object.assign({},t,e)).every(function(i){return Ac(t[i],e[i])})}return!1}var j6=!0,Cp="Invariant failed";function mi(t,e){if(!t){if(j6)throw new Error(Cp);var n=typeof e=="function"?e():e,r=n?"".concat(Cp,": ").concat(n):Cp;throw new Error(r)}}function B6(t){var e=t||"/",n="",r="",i=e.indexOf("#");i!==-1&&(r=e.substr(i),e=e.substr(0,i));var s=e.indexOf("?");return s!==-1&&(n=e.substr(s),e=e.substr(0,s)),{pathname:e,search:n==="?"?"":n,hash:r==="#"?"":r}}function $A(t){var e=t.pathname,n=t.search,r=t.hash,i=e||"/";return n&&n!=="?"&&(i+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(i+=r.charAt(0)==="#"?r:"#"+r),i}function Ur(t,e,n,r){var i;typeof t=="string"?(i=B6(t),i.state=e):(i=ft({},t),i.pathname===void 0&&(i.pathname=""),i.search?i.search.charAt(0)!=="?"&&(i.search="?"+i.search):i.search="",i.hash?i.hash.charAt(0)!=="#"&&(i.hash="#"+i.hash):i.hash="",e!==void 0&&i.state===void 0&&(i.state=e));try{i.pathname=decodeURI(i.pathname)}catch(s){throw s instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):s}return n&&(i.key=n),r?i.pathname?i.pathname.charAt(0)!=="/"&&(i.pathname=MA(i.pathname,r.pathname)):i.pathname=r.pathname:i.pathname||(i.pathname="/"),i}function z6(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&Ac(t.state,e.state)}function H6(){var t=null;function e(o){return t=o,function(){t===o&&(t=null)}}function n(o,a,l,u){if(t!=null){var c=typeof t=="function"?t(o,a):t;typeof c=="string"?typeof l=="function"?l(c,u):u(!0):u(c!==!1)}else u(!0)}var r=[];function i(o){var a=!0;function l(){a&&o.apply(void 0,arguments)}return r.push(l),function(){a=!1,r=r.filter(function(u){return u!==l})}}function s(){for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];r.forEach(function(u){return u.apply(void 0,a)})}return{setPrompt:e,confirmTransitionTo:n,appendListener:i,notifyListeners:s}}function Y1(t,e,n){return Math.min(Math.max(t,e),n)}function W6(t){t===void 0&&(t={});var e=t,n=e.getUserConfirmation,r=e.initialEntries,i=r===void 0?["/"]:r,s=e.initialIndex,o=s===void 0?0:s,a=e.keyLength,l=a===void 0?6:a,u=H6();function c(N){ft(b,N),b.length=b.entries.length,u.notifyListeners(b.location,b.action)}function h(){return Math.random().toString(36).substr(2,l)}var d=Y1(o,0,i.length-1),f=i.map(function(N){return typeof N=="string"?Ur(N,void 0,h()):Ur(N,void 0,N.key||h())}),y=$A;function v(N,A){var X="PUSH",ue=Ur(N,A,h(),b.location);u.confirmTransitionTo(ue,X,n,function(H){if(!!H){var V=b.index,se=V+1,te=b.entries.slice(0);te.length>se?te.splice(se,te.length-se,ue):te.push(ue),c({action:X,location:ue,index:se,entries:te})}})}function p(N,A){var X="REPLACE",ue=Ur(N,A,h(),b.location);u.confirmTransitionTo(ue,X,n,function(H){!H||(b.entries[b.index]=ue,c({action:X,location:ue}))})}function m(N){var A=Y1(b.index+N,0,b.entries.length-1),X="POP",ue=b.entries[A];u.confirmTransitionTo(ue,X,n,function(H){H?c({action:X,location:ue,index:A}):c()})}function g(){m(-1)}function _(){m(1)}function E(N){var A=b.index+N;return A>=0&&A<b.entries.length}function k(N){return N===void 0&&(N=!1),u.setPrompt(N)}function C(N){return u.appendListener(N)}var b={length:f.length,action:"POP",location:f[d],index:d,entries:f,createHref:y,push:v,replace:p,go:m,goBack:g,goForward:_,canGo:E,block:k,listen:C};return b}var Sp=1073741823,X1=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:{};function q6(){var t="__global_unique_id__";return X1[t]=(X1[t]||0)+1}function K6(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function G6(t){var e=[];return{on:function(r){e.push(r)},off:function(r){e=e.filter(function(i){return i!==r})},get:function(){return t},set:function(r,i){t=r,e.forEach(function(s){return s(t,i)})}}}function Q6(t){return Array.isArray(t)?t[0]:t}function Y6(t,e){var n,r,i="__create-react-context-"+q6()+"__",s=function(a){Xn(l,a);function l(){var c;return c=a.apply(this,arguments)||this,c.emitter=G6(c.props.value),c}var u=l.prototype;return u.getChildContext=function(){var h;return h={},h[i]=this.emitter,h},u.componentWillReceiveProps=function(h){if(this.props.value!==h.value){var d=this.props.value,f=h.value,y;K6(d,f)?y=0:(y=typeof e=="function"?e(d,f):Sp,y|=0,y!==0&&this.emitter.set(h.value,y))}},u.render=function(){return this.props.children},l}(T.exports.Component);s.childContextTypes=(n={},n[i]=G1.object.isRequired,n);var o=function(a){Xn(l,a);function l(){var c;return c=a.apply(this,arguments)||this,c.state={value:c.getValue()},c.onUpdate=function(h,d){var f=c.observedBits|0;(f&d)!==0&&c.setState({value:c.getValue()})},c}var u=l.prototype;return u.componentWillReceiveProps=function(h){var d=h.observedBits;this.observedBits=d==null?Sp:d},u.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var h=this.props.observedBits;this.observedBits=h==null?Sp:h},u.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},u.getValue=function(){return this.context[i]?this.context[i].get():t},u.render=function(){return Q6(this.props.children)(this.state.value)},l}(T.exports.Component);return o.contextTypes=(r={},r[i]=G1.object,r),{Provider:s,Consumer:o}}var X6=$.createContext||Y6,Yo={exports:{}},J6=Array.isArray||function(t){return Object.prototype.toString.call(t)=="[object Array]"},Uh=J6;Yo.exports=VA;Yo.exports.parse=V_;Yo.exports.compile=eB;Yo.exports.tokensToFunction=FA;Yo.exports.tokensToRegExp=UA;var Z6=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function V_(t,e){for(var n=[],r=0,i=0,s="",o=e&&e.delimiter||"/",a;(a=Z6.exec(t))!=null;){var l=a[0],u=a[1],c=a.index;if(s+=t.slice(i,c),i=c+l.length,u){s+=u[1];continue}var h=t[i],d=a[2],f=a[3],y=a[4],v=a[5],p=a[6],m=a[7];s&&(n.push(s),s="");var g=d!=null&&h!=null&&h!==d,_=p==="+"||p==="*",E=p==="?"||p==="*",k=a[2]||o,C=y||v;n.push({name:f||r++,prefix:d||"",delimiter:k,optional:E,repeat:_,partial:g,asterisk:!!m,pattern:C?rB(C):m?".*":"[^"+Nc(k)+"]+?"})}return i<t.length&&(s+=t.substr(i)),s&&n.push(s),n}function eB(t,e){return FA(V_(t,e),e)}function tB(t){return encodeURI(t).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function nB(t){return encodeURI(t).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function FA(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)typeof t[r]=="object"&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",B_(e)));return function(i,s){for(var o="",a=i||{},l=s||{},u=l.pretty?tB:encodeURIComponent,c=0;c<t.length;c++){var h=t[c];if(typeof h=="string"){o+=h;continue}var d=a[h.name],f;if(d==null)if(h.optional){h.partial&&(o+=h.prefix);continue}else throw new TypeError('Expected "'+h.name+'" to be defined');if(Uh(d)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(d)+"`");if(d.length===0){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var y=0;y<d.length;y++){if(f=u(d[y]),!n[c].test(f))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(f)+"`");o+=(y===0?h.prefix:h.delimiter)+f}continue}if(f=h.asterisk?nB(d):u(d),!n[c].test(f))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+f+'"');o+=h.prefix+f}return o}}function Nc(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function rB(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function j_(t,e){return t.keys=e,t}function B_(t){return t&&t.sensitive?"":"i"}function iB(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return j_(t,e)}function sB(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(VA(t[i],e,n).source);var s=new RegExp("(?:"+r.join("|")+")",B_(n));return j_(s,e)}function oB(t,e,n){return UA(V_(t,n),e,n)}function UA(t,e,n){Uh(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=n.end!==!1,s="",o=0;o<t.length;o++){var a=t[o];if(typeof a=="string")s+=Nc(a);else{var l=Nc(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+l+u+")*"),a.optional?a.partial?u=l+"("+u+")?":u="(?:"+l+"("+u+"))?":u=l+"("+u+")",s+=u}}var c=Nc(n.delimiter||"/"),h=s.slice(-c.length)===c;return r||(s=(h?s.slice(0,-c.length):s)+"(?:"+c+"(?=$))?"),i?s+="$":s+=r&&h?"":"(?="+c+"|$)",j_(new RegExp("^"+s,B_(n)),e)}function VA(t,e,n){return Uh(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?iB(t,e):Uh(t)?sB(t,e,n):oB(t,e,n)}var jA=Yo.exports,BA={exports:{}},Ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mt=typeof Symbol=="function"&&Symbol.for,z_=mt?Symbol.for("react.element"):60103,H_=mt?Symbol.for("react.portal"):60106,qd=mt?Symbol.for("react.fragment"):60107,Kd=mt?Symbol.for("react.strict_mode"):60108,Gd=mt?Symbol.for("react.profiler"):60114,Qd=mt?Symbol.for("react.provider"):60109,Yd=mt?Symbol.for("react.context"):60110,W_=mt?Symbol.for("react.async_mode"):60111,Xd=mt?Symbol.for("react.concurrent_mode"):60111,Jd=mt?Symbol.for("react.forward_ref"):60112,Zd=mt?Symbol.for("react.suspense"):60113,aB=mt?Symbol.for("react.suspense_list"):60120,ef=mt?Symbol.for("react.memo"):60115,tf=mt?Symbol.for("react.lazy"):60116,lB=mt?Symbol.for("react.block"):60121,uB=mt?Symbol.for("react.fundamental"):60117,cB=mt?Symbol.for("react.responder"):60118,hB=mt?Symbol.for("react.scope"):60119;function un(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case z_:switch(t=t.type,t){case W_:case Xd:case qd:case Gd:case Kd:case Zd:return t;default:switch(t=t&&t.$$typeof,t){case Yd:case Jd:case tf:case ef:case Qd:return t;default:return e}}case H_:return e}}}function zA(t){return un(t)===Xd}Ie.AsyncMode=W_;Ie.ConcurrentMode=Xd;Ie.ContextConsumer=Yd;Ie.ContextProvider=Qd;Ie.Element=z_;Ie.ForwardRef=Jd;Ie.Fragment=qd;Ie.Lazy=tf;Ie.Memo=ef;Ie.Portal=H_;Ie.Profiler=Gd;Ie.StrictMode=Kd;Ie.Suspense=Zd;Ie.isAsyncMode=function(t){return zA(t)||un(t)===W_};Ie.isConcurrentMode=zA;Ie.isContextConsumer=function(t){return un(t)===Yd};Ie.isContextProvider=function(t){return un(t)===Qd};Ie.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===z_};Ie.isForwardRef=function(t){return un(t)===Jd};Ie.isFragment=function(t){return un(t)===qd};Ie.isLazy=function(t){return un(t)===tf};Ie.isMemo=function(t){return un(t)===ef};Ie.isPortal=function(t){return un(t)===H_};Ie.isProfiler=function(t){return un(t)===Gd};Ie.isStrictMode=function(t){return un(t)===Kd};Ie.isSuspense=function(t){return un(t)===Zd};Ie.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===qd||t===Xd||t===Gd||t===Kd||t===Zd||t===aB||typeof t=="object"&&t!==null&&(t.$$typeof===tf||t.$$typeof===ef||t.$$typeof===Qd||t.$$typeof===Yd||t.$$typeof===Jd||t.$$typeof===uB||t.$$typeof===cB||t.$$typeof===hB||t.$$typeof===lB)};Ie.typeOf=un;BA.exports=Ie;function nf(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var HA=BA.exports,dB={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fB={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},WA={};WA[HA.ForwardRef]=dB;WA[HA.Memo]=fB;var qA=function(e){var n=X6();return n.displayName=e,n},pB=qA("Router-History"),as=qA("Router"),rf=function(t){Xn(e,t),e.computeRootMatch=function(i){return{path:"/",url:"/",params:{},isExact:i==="/"}};function e(r){var i;return i=t.call(this,r)||this,i.state={location:r.history.location},i._isMounted=!1,i._pendingLocation=null,r.staticContext||(i.unlisten=r.history.listen(function(s){i._isMounted?i.setState({location:s}):i._pendingLocation=s})),i}var n=e.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},n.render=function(){return $.createElement(as.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},$.createElement(pB.Provider,{children:this.props.children||null,value:this.props.history}))},e}($.Component);$.Component;var mB=function(t){Xn(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(i){this.props.onUpdate&&this.props.onUpdate.call(this,this,i)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},e}($.Component),Ip={},gB=1e4,J1=0;function yB(t){if(Ip[t])return Ip[t];var e=jA.compile(t);return J1<gB&&(Ip[t]=e,J1++),e}function Z1(t,e){return t===void 0&&(t="/"),e===void 0&&(e={}),t==="/"?t:yB(t)(e,{pretty:!0})}function vB(t){var e=t.computedMatch,n=t.to,r=t.push,i=r===void 0?!1:r;return $.createElement(as.Consumer,null,function(s){s||mi(!1);var o=s.history,a=s.staticContext,l=i?o.push:o.replace,u=Ur(e?typeof n=="string"?Z1(n,e.params):ft({},n,{pathname:Z1(n.pathname,e.params)}):n);return a?(l(u),null):$.createElement(mB,{onMount:function(){l(u)},onUpdate:function(h,d){var f=Ur(d.to);z6(f,ft({},u,{key:f.key}))||l(u)},to:n})})}var eT={},_B=1e4,tT=0;function wB(t,e){var n=""+e.end+e.strict+e.sensitive,r=eT[n]||(eT[n]={});if(r[t])return r[t];var i=[],s=jA(t,i,e),o={regexp:s,keys:i};return tT<_B&&(r[t]=o,tT++),o}function q_(t,e){e===void 0&&(e={}),(typeof e=="string"||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,i=n.exact,s=i===void 0?!1:i,o=n.strict,a=o===void 0?!1:o,l=n.sensitive,u=l===void 0?!1:l,c=[].concat(r);return c.reduce(function(h,d){if(!d&&d!=="")return null;if(h)return h;var f=wB(d,{end:s,strict:a,sensitive:u}),y=f.regexp,v=f.keys,p=y.exec(t);if(!p)return null;var m=p[0],g=p.slice(1),_=t===m;return s&&!_?null:{path:d,url:d==="/"&&m===""?"/":m,isExact:_,params:v.reduce(function(E,k,C){return E[k.name]=g[C],E},{})}},null)}function EB(t){return $.Children.count(t)===0}var kp=function(t){Xn(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.render=function(){var i=this;return $.createElement(as.Consumer,null,function(s){s||mi(!1);var o=i.props.location||s.location,a=i.props.computedMatch?i.props.computedMatch:i.props.path?q_(o.pathname,i.props):s.match,l=ft({},s,{location:o,match:a}),u=i.props,c=u.children,h=u.component,d=u.render;return Array.isArray(c)&&EB(c)&&(c=null),$.createElement(as.Provider,{value:l},l.match?c?typeof c=="function"?c(l):c:h?$.createElement(h,l):d?d(l):null:typeof c=="function"?c(l):null)})},e}($.Component);function K_(t){return t.charAt(0)==="/"?t:"/"+t}function TB(t,e){return t?ft({},e,{pathname:K_(t)+e.pathname}):e}function CB(t,e){if(!t)return e;var n=K_(t);return e.pathname.indexOf(n)!==0?e:ft({},e,{pathname:e.pathname.substr(n.length)})}function nT(t){return typeof t=="string"?t:$A(t)}function xp(t){return function(){mi(!1)}}function rT(){}$.Component;var SB=function(t){Xn(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.render=function(){var i=this;return $.createElement(as.Consumer,null,function(s){s||mi(!1);var o=i.props.location||s.location,a,l;return $.Children.forEach(i.props.children,function(u){if(l==null&&$.isValidElement(u)){a=u;var c=u.props.path||u.props.from;l=c?q_(o.pathname,ft({},u.props,{path:c})):s.match}}),l?$.cloneElement(a,{location:o,computedMatch:l}):null})},e}($.Component);$.useContext;function rl(t){return t.charAt(0)==="/"?t:"/"+t}function iT(t){return t.charAt(0)==="/"?t.substr(1):t}function IB(t,e){return t.toLowerCase().indexOf(e.toLowerCase())===0&&"/?#".indexOf(t.charAt(e.length))!==-1}function KA(t,e){return IB(t,e)?t.substr(e.length):t}function GA(t){return t.charAt(t.length-1)==="/"?t.slice(0,-1):t}function kB(t){var e=t||"/",n="",r="",i=e.indexOf("#");i!==-1&&(r=e.substr(i),e=e.substr(0,i));var s=e.indexOf("?");return s!==-1&&(n=e.substr(s),e=e.substr(0,s)),{pathname:e,search:n==="?"?"":n,hash:r==="#"?"":r}}function hn(t){var e=t.pathname,n=t.search,r=t.hash,i=e||"/";return n&&n!=="?"&&(i+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(i+=r.charAt(0)==="#"?r:"#"+r),i}function zi(t,e,n,r){var i;typeof t=="string"?(i=kB(t),i.state=e):(i=ft({},t),i.pathname===void 0&&(i.pathname=""),i.search?i.search.charAt(0)!=="?"&&(i.search="?"+i.search):i.search="",i.hash?i.hash.charAt(0)!=="#"&&(i.hash="#"+i.hash):i.hash="",e!==void 0&&i.state===void 0&&(i.state=e));try{i.pathname=decodeURI(i.pathname)}catch(s){throw s instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):s}return n&&(i.key=n),r?i.pathname?i.pathname.charAt(0)!=="/"&&(i.pathname=MA(i.pathname,r.pathname)):i.pathname=r.pathname:i.pathname||(i.pathname="/"),i}function QA(){var t=null;function e(o){return t=o,function(){t===o&&(t=null)}}function n(o,a,l,u){if(t!=null){var c=typeof t=="function"?t(o,a):t;typeof c=="string"?typeof l=="function"?l(c,u):u(!0):u(c!==!1)}else u(!0)}var r=[];function i(o){var a=!0;function l(){a&&o.apply(void 0,arguments)}return r.push(l),function(){a=!1,r=r.filter(function(u){return u!==l})}}function s(){for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];r.forEach(function(u){return u.apply(void 0,a)})}return{setPrompt:e,confirmTransitionTo:n,appendListener:i,notifyListeners:s}}var YA=!!(typeof window!="undefined"&&window.document&&window.document.createElement);function XA(t,e){e(window.confirm(t))}function xB(){var t=window.navigator.userAgent;return(t.indexOf("Android 2.")!==-1||t.indexOf("Android 4.0")!==-1)&&t.indexOf("Mobile Safari")!==-1&&t.indexOf("Chrome")===-1&&t.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function bB(){return window.navigator.userAgent.indexOf("Trident")===-1}function AB(){return window.navigator.userAgent.indexOf("Firefox")===-1}function NB(t){return t.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var sT="popstate",oT="hashchange";function aT(){try{return window.history.state||{}}catch{return{}}}function RB(t){t===void 0&&(t={}),YA||mi(!1);var e=window.history,n=xB(),r=!bB(),i=t,s=i.forceRefresh,o=s===void 0?!1:s,a=i.getUserConfirmation,l=a===void 0?XA:a,u=i.keyLength,c=u===void 0?6:u,h=t.basename?GA(rl(t.basename)):"";function d(Y){var z=Y||{},I=z.key,P=z.state,j=window.location,oe=j.pathname,fe=j.search,Ne=j.hash,ke=oe+fe+Ne;return h&&(ke=KA(ke,h)),zi(ke,P,I)}function f(){return Math.random().toString(36).substr(2,c)}var y=QA();function v(Y){ft(_e,Y),_e.length=e.length,y.notifyListeners(_e.location,_e.action)}function p(Y){NB(Y)||_(d(Y.state))}function m(){_(d(aT()))}var g=!1;function _(Y){if(g)g=!1,v();else{var z="POP";y.confirmTransitionTo(Y,z,l,function(I){I?v({action:z,location:Y}):E(Y)})}}function E(Y){var z=_e.location,I=C.indexOf(z.key);I===-1&&(I=0);var P=C.indexOf(Y.key);P===-1&&(P=0);var j=I-P;j&&(g=!0,X(j))}var k=d(aT()),C=[k.key];function b(Y){return h+hn(Y)}function N(Y,z){var I="PUSH",P=zi(Y,z,f(),_e.location);y.confirmTransitionTo(P,I,l,function(j){if(!!j){var oe=b(P),fe=P.key,Ne=P.state;if(n)if(e.pushState({key:fe,state:Ne},null,oe),o)window.location.href=oe;else{var ke=C.indexOf(_e.location.key),it=C.slice(0,ke+1);it.push(P.key),C=it,v({action:I,location:P})}else window.location.href=oe}})}function A(Y,z){var I="REPLACE",P=zi(Y,z,f(),_e.location);y.confirmTransitionTo(P,I,l,function(j){if(!!j){var oe=b(P),fe=P.key,Ne=P.state;if(n)if(e.replaceState({key:fe,state:Ne},null,oe),o)window.location.replace(oe);else{var ke=C.indexOf(_e.location.key);ke!==-1&&(C[ke]=P.key),v({action:I,location:P})}else window.location.replace(oe)}})}function X(Y){e.go(Y)}function ue(){X(-1)}function H(){X(1)}var V=0;function se(Y){V+=Y,V===1&&Y===1?(window.addEventListener(sT,p),r&&window.addEventListener(oT,m)):V===0&&(window.removeEventListener(sT,p),r&&window.removeEventListener(oT,m))}var te=!1;function Ee(Y){Y===void 0&&(Y=!1);var z=y.setPrompt(Y);return te||(se(1),te=!0),function(){return te&&(te=!1,se(-1)),z()}}function Ue(Y){var z=y.appendListener(Y);return se(1),function(){se(-1),z()}}var _e={length:e.length,action:"POP",location:k,createHref:b,push:N,replace:A,go:X,goBack:ue,goForward:H,block:Ee,listen:Ue};return _e}var lT="hashchange",PB={hashbang:{encodePath:function(e){return e.charAt(0)==="!"?e:"!/"+iT(e)},decodePath:function(e){return e.charAt(0)==="!"?e.substr(1):e}},noslash:{encodePath:iT,decodePath:rl},slash:{encodePath:rl,decodePath:rl}};function JA(t){var e=t.indexOf("#");return e===-1?t:t.slice(0,e)}function va(){var t=window.location.href,e=t.indexOf("#");return e===-1?"":t.substring(e+1)}function OB(t){window.location.hash=t}function bp(t){window.location.replace(JA(window.location.href)+"#"+t)}function DB(t){t===void 0&&(t={}),YA||mi(!1);var e=window.history;AB();var n=t,r=n.getUserConfirmation,i=r===void 0?XA:r,s=n.hashType,o=s===void 0?"slash":s,a=t.basename?GA(rl(t.basename)):"",l=PB[o],u=l.encodePath,c=l.decodePath;function h(){var z=c(va());return a&&(z=KA(z,a)),zi(z)}var d=QA();function f(z){ft(Y,z),Y.length=e.length,d.notifyListeners(Y.location,Y.action)}var y=!1,v=null;function p(z,I){return z.pathname===I.pathname&&z.search===I.search&&z.hash===I.hash}function m(){var z=va(),I=u(z);if(z!==I)bp(I);else{var P=h(),j=Y.location;if(!y&&p(j,P)||v===hn(P))return;v=null,g(P)}}function g(z){if(y)y=!1,f();else{var I="POP";d.confirmTransitionTo(z,I,i,function(P){P?f({action:I,location:z}):_(z)})}}function _(z){var I=Y.location,P=b.lastIndexOf(hn(I));P===-1&&(P=0);var j=b.lastIndexOf(hn(z));j===-1&&(j=0);var oe=P-j;oe&&(y=!0,ue(oe))}var E=va(),k=u(E);E!==k&&bp(k);var C=h(),b=[hn(C)];function N(z){var I=document.querySelector("base"),P="";return I&&I.getAttribute("href")&&(P=JA(window.location.href)),P+"#"+u(a+hn(z))}function A(z,I){var P="PUSH",j=zi(z,void 0,void 0,Y.location);d.confirmTransitionTo(j,P,i,function(oe){if(!!oe){var fe=hn(j),Ne=u(a+fe),ke=va()!==Ne;if(ke){v=fe,OB(Ne);var it=b.lastIndexOf(hn(Y.location)),Te=b.slice(0,it+1);Te.push(fe),b=Te,f({action:P,location:j})}else f()}})}function X(z,I){var P="REPLACE",j=zi(z,void 0,void 0,Y.location);d.confirmTransitionTo(j,P,i,function(oe){if(!!oe){var fe=hn(j),Ne=u(a+fe),ke=va()!==Ne;ke&&(v=fe,bp(Ne));var it=b.indexOf(hn(Y.location));it!==-1&&(b[it]=fe),f({action:P,location:j})}})}function ue(z){e.go(z)}function H(){ue(-1)}function V(){ue(1)}var se=0;function te(z){se+=z,se===1&&z===1?window.addEventListener(lT,m):se===0&&window.removeEventListener(lT,m)}var Ee=!1;function Ue(z){z===void 0&&(z=!1);var I=d.setPrompt(z);return Ee||(te(1),Ee=!0),function(){return Ee&&(Ee=!1,te(-1)),I()}}function _e(z){var I=d.appendListener(z);return te(1),function(){te(-1),I()}}var Y={length:e.length,action:"POP",location:C,createHref:N,push:A,replace:X,go:ue,goBack:H,goForward:V,block:Ue,listen:_e};return Y}var LB=function(t){Xn(e,t);function e(){for(var r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=t.call.apply(t,[this].concat(s))||this,r.history=RB(r.props),r}var n=e.prototype;return n.render=function(){return $.createElement(rf,{history:this.history,children:this.props.children})},e}($.Component);$.Component;var Og=function(e,n){return typeof e=="function"?e(n):e},Dg=function(e,n){return typeof e=="string"?zi(e,null,null,n):e},G_=function(e){return e},bo=$.forwardRef;typeof bo=="undefined"&&(bo=G_);function MB(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}var $B=bo(function(t,e){var n=t.innerRef,r=t.navigate,i=t.onClick,s=nf(t,["innerRef","navigate","onClick"]),o=s.target,a=ft({},s,{onClick:function(u){try{i&&i(u)}catch(c){throw u.preventDefault(),c}!u.defaultPrevented&&u.button===0&&(!o||o==="_self")&&!MB(u)&&(u.preventDefault(),r())}});return G_!==bo?a.ref=e||n:a.ref=n,$.createElement("a",a)}),FB=bo(function(t,e){var n=t.component,r=n===void 0?$B:n,i=t.replace,s=t.to,o=t.innerRef,a=nf(t,["component","replace","to","innerRef"]);return $.createElement(as.Consumer,null,function(l){l||mi(!1);var u=l.history,c=Dg(Og(s,l.location),l.location),h=c?u.createHref(c):"",d=ft({},a,{href:h,navigate:function(){var y=Og(s,l.location),v=hn(l.location)===hn(Dg(y)),p=i||v?u.replace:u.push;p(y)}});return G_!==bo?d.ref=e||o:d.innerRef=o,$.createElement(r,d)})}),ZA=function(e){return e},Vh=$.forwardRef;typeof Vh=="undefined"&&(Vh=ZA);function UB(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter(function(r){return r}).join(" ")}var VB=Vh(function(t,e){var n=t["aria-current"],r=n===void 0?"page":n,i=t.activeClassName,s=i===void 0?"active":i,o=t.activeStyle,a=t.className,l=t.exact,u=t.isActive,c=t.location,h=t.sensitive,d=t.strict,f=t.style,y=t.to,v=t.innerRef,p=nf(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return $.createElement(as.Consumer,null,function(m){m||mi(!1);var g=c||m.location,_=Dg(Og(y,g),g),E=_.pathname,k=E&&E.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),C=k?q_(g.pathname,{path:k,exact:l,sensitive:h,strict:d}):null,b=!!(u?u(C,g):C),N=typeof a=="function"?a(b):a,A=typeof f=="function"?f(b):f;b&&(N=UB(N,s),A=ft({},A,o));var X=ft({"aria-current":b&&r||null,className:N,style:A,to:_},p);return ZA!==Vh?X.ref=e||v:X.innerRef=v,$.createElement(FB,X)})}),ku=t=>t.type==="checkbox",Ms=t=>t instanceof Date,jt=t=>t==null;const eN=t=>typeof t=="object";var rt=t=>!jt(t)&&!Array.isArray(t)&&eN(t)&&!Ms(t),jB=t=>rt(t)&&t.target?ku(t.target)?t.target.checked:t.target.value:t,BB=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,zB=(t,e)=>t.has(BB(e)),HB=t=>{const e=t.constructor&&t.constructor.prototype;return rt(e)&&e.hasOwnProperty("isPrototypeOf")},Q_=typeof window!="undefined"&&typeof window.HTMLElement!="undefined"&&typeof document!="undefined";function kr(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(Q_&&(t instanceof Blob||t instanceof FileList))&&(n||rt(t)))if(e=n?[]:{},!n&&!HB(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=kr(t[r]));else return t;return e}var xu=t=>Array.isArray(t)?t.filter(Boolean):[],Ye=t=>t===void 0,q=(t,e,n)=>{if(!e||!rt(t))return n;const r=xu(e.split(/[,[\].]+?/)).reduce((i,s)=>jt(i)?i:i[s],t);return Ye(r)||r===t?Ye(t[e])?n:t[e]:r};const uT={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},kn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},tr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};$.createContext(null);var WB=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==kn.all&&(e._proxyFormState[o]=!r||kn.all),n&&(n[o]=!0),t[o]}});return i},dn=t=>rt(t)&&!Object.keys(t).length,qB=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return dn(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||kn.all))},Ap=t=>Array.isArray(t)?t:[t];function KB(t){const e=$.useRef(t);e.current=t,$.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var Hn=t=>typeof t=="string",GB=(t,e,n,r,i)=>Hn(t)?(r&&e.watch.add(t),q(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),q(n,s))):(r&&(e.watchAll=!0),n),Y_=t=>/^\w*$/.test(t),tN=t=>xu(t.replace(/["|']|\]/g,"").split(/\.|\[/));function Le(t,e,n){let r=-1;const i=Y_(e)?[e]:tN(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=t[a];l=rt(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t}var QB=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{};const Lg=(t,e,n)=>{for(const r of n||Object.keys(t)){const i=q(t,r);if(i){const{_f:s,...o}=i;if(s&&e(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else rt(o)&&Lg(o,e)}}};var cT=t=>({isOnSubmit:!t||t===kn.onSubmit,isOnBlur:t===kn.onBlur,isOnChange:t===kn.onChange,isOnAll:t===kn.all,isOnTouch:t===kn.onTouched}),hT=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length)))),YB=(t,e,n)=>{const r=xu(q(t,n));return Le(r,"root",e[n]),Le(t,n,r),t},oo=t=>typeof t=="boolean",X_=t=>t.type==="file",Vr=t=>typeof t=="function",jh=t=>{if(!Q_)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},Rc=t=>Hn(t),J_=t=>t.type==="radio",Bh=t=>t instanceof RegExp;const dT={value:!1,isValid:!1},fT={value:!0,isValid:!0};var nN=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!Ye(t[0].attributes.value)?Ye(t[0].value)||t[0].value===""?fT:{value:t[0].value,isValid:!0}:fT:dT}return dT};const pT={isValid:!1,value:null};var rN=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,pT):pT;function mT(t,e,n="validate"){if(Rc(t)||Array.isArray(t)&&t.every(Rc)||oo(t)&&!t)return{type:n,message:Rc(t)?t:"",ref:e}}var Es=t=>rt(t)&&!Bh(t)?t:{value:t,message:""},gT=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:c,max:h,pattern:d,validate:f,name:y,valueAsNumber:v,mount:p,disabled:m}=t._f,g=q(e,y);if(!p||m)return{};const _=o?o[0]:s,E=H=>{r&&_.reportValidity&&(_.setCustomValidity(oo(H)?"":H||""),_.reportValidity())},k={},C=J_(s),b=ku(s),N=C||b,A=(v||X_(s))&&Ye(s.value)&&Ye(g)||jh(s)&&s.value===""||g===""||Array.isArray(g)&&!g.length,X=QB.bind(null,y,n,k),ue=(H,V,se,te=tr.maxLength,Ee=tr.minLength)=>{const Ue=H?V:se;k[y]={type:H?te:Ee,message:Ue,ref:s,...X(H?te:Ee,Ue)}};if(i?!Array.isArray(g)||!g.length:a&&(!N&&(A||jt(g))||oo(g)&&!g||b&&!nN(o).isValid||C&&!rN(o).isValid)){const{value:H,message:V}=Rc(a)?{value:!!a,message:a}:Es(a);if(H&&(k[y]={type:tr.required,message:V,ref:_,...X(tr.required,V)},!n))return E(V),k}if(!A&&(!jt(c)||!jt(h))){let H,V;const se=Es(h),te=Es(c);if(!jt(g)&&!isNaN(g)){const Ee=s.valueAsNumber||g&&+g;jt(se.value)||(H=Ee>se.value),jt(te.value)||(V=Ee<te.value)}else{const Ee=s.valueAsDate||new Date(g),Ue=z=>new Date(new Date().toDateString()+" "+z),_e=s.type=="time",Y=s.type=="week";Hn(se.value)&&g&&(H=_e?Ue(g)>Ue(se.value):Y?g>se.value:Ee>new Date(se.value)),Hn(te.value)&&g&&(V=_e?Ue(g)<Ue(te.value):Y?g<te.value:Ee<new Date(te.value))}if((H||V)&&(ue(!!H,se.message,te.message,tr.max,tr.min),!n))return E(k[y].message),k}if((l||u)&&!A&&(Hn(g)||i&&Array.isArray(g))){const H=Es(l),V=Es(u),se=!jt(H.value)&&g.length>+H.value,te=!jt(V.value)&&g.length<+V.value;if((se||te)&&(ue(se,H.message,V.message),!n))return E(k[y].message),k}if(d&&!A&&Hn(g)){const{value:H,message:V}=Es(d);if(Bh(H)&&!g.match(H)&&(k[y]={type:tr.pattern,message:V,ref:s,...X(tr.pattern,V)},!n))return E(V),k}if(f){if(Vr(f)){const H=await f(g,e),V=mT(H,_);if(V&&(k[y]={...V,...X(tr.validate,V.message)},!n))return E(V.message),k}else if(rt(f)){let H={};for(const V in f){if(!dn(H)&&!n)break;const se=mT(await f[V](g,e),_,V);se&&(H={...se,...X(V,se.message)},E(se.message),n&&(k[y]=H))}if(!dn(H)&&(k[y]={ref:_,...H},!n))return k}}return E(!0),k};function XB(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=Ye(t)?r++:t[e[r++]];return t}function JB(t){for(const e in t)if(t.hasOwnProperty(e)&&!Ye(t[e]))return!1;return!0}function gt(t,e){const n=Array.isArray(e)?e:Y_(e)?[e]:tN(e),r=n.length===1?t:XB(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(rt(r)&&dn(r)||Array.isArray(r)&&JB(r))&&gt(t,n.slice(0,-1)),t}function Np(){let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}}var zh=t=>jt(t)||!eN(t);function Li(t,e){if(zh(t)||zh(e))return t===e;if(Ms(t)&&Ms(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(Ms(s)&&Ms(o)||rt(s)&&rt(o)||Array.isArray(s)&&Array.isArray(o)?!Li(s,o):s!==o)return!1}}return!0}var iN=t=>t.type==="select-multiple",ZB=t=>J_(t)||ku(t),Rp=t=>jh(t)&&t.isConnected,sN=t=>{for(const e in t)if(Vr(t[e]))return!0;return!1};function Hh(t,e={}){const n=Array.isArray(t);if(rt(t)||n)for(const r in t)Array.isArray(t[r])||rt(t[r])&&!sN(t[r])?(e[r]=Array.isArray(t[r])?[]:{},Hh(t[r],e[r])):jt(t[r])||(e[r]=!0);return e}function oN(t,e,n){const r=Array.isArray(t);if(rt(t)||r)for(const i in t)Array.isArray(t[i])||rt(t[i])&&!sN(t[i])?Ye(e)||zh(n[i])?n[i]=Array.isArray(t[i])?Hh(t[i],[]):{...Hh(t[i])}:oN(t[i],jt(e)?{}:e[i],n[i]):n[i]=!Li(t[i],e[i]);return n}var Pp=(t,e)=>oN(t,e,Hh(e)),aN=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>Ye(t)?t:e?t===""?NaN:t&&+t:n&&Hn(t)?new Date(t):r?r(t):t;function Op(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return X_(e)?e.files:J_(e)?rN(t.refs).value:iN(e)?[...e.selectedOptions].map(({value:n})=>n):ku(e)?nN(t.refs).value:aN(Ye(e.value)?t.ref.value:e.value,t)}var ez=(t,e,n,r)=>{const i={};for(const s of t){const o=q(e,s);o&&Le(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},_a=t=>Ye(t)?t:Bh(t)?t.source:rt(t)?Bh(t.value)?t.value.source:t.value:t,tz=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function yT(t,e,n){const r=q(t,n);if(r||Y_(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=q(e,s),a=q(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var nz=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,rz=(t,e)=>!xu(q(t,e)).length&&gt(t,e);const iz={mode:kn.onSubmit,reValidateMode:kn.onChange,shouldFocusError:!0};function sz(t={},e){let n={...iz,...t},r={submitCount:0,isDirty:!1,isLoading:Vr(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},s=rt(n.defaultValues)||rt(n.values)?kr(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:kr(s),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const h={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={values:Np(),array:Np(),state:Np()},f=t.resetOptions&&t.resetOptions.keepDirtyValues,y=cT(n.mode),v=cT(n.reValidateMode),p=n.criteriaMode===kn.all,m=w=>S=>{clearTimeout(c),c=setTimeout(w,S)},g=async w=>{if(h.isValid||w){const S=n.resolver?dn((await A()).errors):await ue(i,!0);S!==r.isValid&&d.state.next({isValid:S})}},_=w=>h.isValidating&&d.state.next({isValidating:w}),E=(w,S=[],x,K,U=!0,M=!0)=>{if(K&&x){if(a.action=!0,M&&Array.isArray(q(i,w))){const J=x(q(i,w),K.argA,K.argB);U&&Le(i,w,J)}if(M&&Array.isArray(q(r.errors,w))){const J=x(q(r.errors,w),K.argA,K.argB);U&&Le(r.errors,w,J),rz(r.errors,w)}if(h.touchedFields&&M&&Array.isArray(q(r.touchedFields,w))){const J=x(q(r.touchedFields,w),K.argA,K.argB);U&&Le(r.touchedFields,w,J)}h.dirtyFields&&(r.dirtyFields=Pp(s,o)),d.state.next({name:w,isDirty:V(w,S),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Le(o,w,S)},k=(w,S)=>{Le(r.errors,w,S),d.state.next({errors:r.errors})},C=(w,S,x,K)=>{const U=q(i,w);if(U){const M=q(o,w,Ye(x)?q(s,w):x);Ye(M)||K&&K.defaultChecked||S?Le(o,w,S?M:Op(U._f)):Ee(w,M),a.mount&&g()}},b=(w,S,x,K,U)=>{let M=!1,J=!1;const Ve={name:w};if(!x||K){h.isDirty&&(J=r.isDirty,r.isDirty=Ve.isDirty=V(),M=J!==Ve.isDirty);const qe=Li(q(s,w),S);J=q(r.dirtyFields,w),qe?gt(r.dirtyFields,w):Le(r.dirtyFields,w,!0),Ve.dirtyFields=r.dirtyFields,M=M||h.dirtyFields&&J!==!qe}if(x){const qe=q(r.touchedFields,w);qe||(Le(r.touchedFields,w,x),Ve.touchedFields=r.touchedFields,M=M||h.touchedFields&&qe!==x)}return M&&U&&d.state.next(Ve),M?Ve:{}},N=(w,S,x,K)=>{const U=q(r.errors,w),M=h.isValid&&oo(S)&&r.isValid!==S;if(t.delayError&&x?(u=m(()=>k(w,x)),u(t.delayError)):(clearTimeout(c),u=null,x?Le(r.errors,w,x):gt(r.errors,w)),(x?!Li(U,x):U)||!dn(K)||M){const J={...K,...M&&oo(S)?{isValid:S}:{},errors:r.errors,name:w};r={...r,...J},d.state.next(J)}_(!1)},A=async w=>n.resolver(o,n.context,ez(w||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),X=async w=>{const{errors:S}=await A();if(w)for(const x of w){const K=q(S,x);K?Le(r.errors,x,K):gt(r.errors,x)}else r.errors=S;return S},ue=async(w,S,x={valid:!0})=>{for(const K in w){const U=w[K];if(U){const{_f:M,...J}=U;if(M){const Ve=l.array.has(M.name),qe=await gT(U,o,p,n.shouldUseNativeValidation&&!S,Ve);if(qe[M.name]&&(x.valid=!1,S))break;!S&&(q(qe,M.name)?Ve?YB(r.errors,qe,M.name):Le(r.errors,M.name,qe[M.name]):gt(r.errors,M.name))}J&&await ue(J,S,x)}}return x.valid},H=()=>{for(const w of l.unMount){const S=q(i,w);S&&(S._f.refs?S._f.refs.every(x=>!Rp(x)):!Rp(S._f.ref))&&Ne(w)}l.unMount=new Set},V=(w,S)=>(w&&S&&Le(o,w,S),!Li(I(),s)),se=(w,S,x)=>GB(w,l,{...a.mount?o:Ye(S)?s:Hn(w)?{[w]:S}:S},x,S),te=w=>xu(q(a.mount?o:s,w,t.shouldUnregister?q(s,w,[]):[])),Ee=(w,S,x={})=>{const K=q(i,w);let U=S;if(K){const M=K._f;M&&(!M.disabled&&Le(o,w,aN(S,M)),U=jh(M.ref)&&jt(S)?"":S,iN(M.ref)?[...M.ref.options].forEach(J=>J.selected=U.includes(J.value)):M.refs?ku(M.ref)?M.refs.length>1?M.refs.forEach(J=>(!J.defaultChecked||!J.disabled)&&(J.checked=Array.isArray(U)?!!U.find(Ve=>Ve===J.value):U===J.value)):M.refs[0]&&(M.refs[0].checked=!!U):M.refs.forEach(J=>J.checked=J.value===U):X_(M.ref)?M.ref.value="":(M.ref.value=U,M.ref.type||d.values.next({name:w,values:{...o}})))}(x.shouldDirty||x.shouldTouch)&&b(w,U,x.shouldTouch,x.shouldDirty,!0),x.shouldValidate&&z(w)},Ue=(w,S,x)=>{for(const K in S){const U=S[K],M=`${w}.${K}`,J=q(i,M);(l.array.has(w)||!zh(U)||J&&!J._f)&&!Ms(U)?Ue(M,U,x):Ee(M,U,x)}},_e=(w,S,x={})=>{const K=q(i,w),U=l.array.has(w),M=kr(S);Le(o,w,M),U?(d.array.next({name:w,values:{...o}}),(h.isDirty||h.dirtyFields)&&x.shouldDirty&&d.state.next({name:w,dirtyFields:Pp(s,o),isDirty:V(w,M)})):K&&!K._f&&!jt(M)?Ue(w,M,x):Ee(w,M,x),hT(w,l)&&d.state.next({...r}),d.values.next({name:w,values:{...o}}),!a.mount&&e()},Y=async w=>{const S=w.target;let x=S.name,K=!0;const U=q(i,x),M=()=>S.type?Op(U._f):jB(w);if(U){let J,Ve;const qe=M(),ys=w.type===uT.BLUR||w.type===uT.FOCUS_OUT,ON=!tz(U._f)&&!n.resolver&&!q(r.errors,x)&&!U._f.deps||nz(ys,q(r.touchedFields,x),r.isSubmitted,v,y),hf=hT(x,l,ys);Le(o,x,qe),ys?(U._f.onBlur&&U._f.onBlur(w),u&&u(0)):U._f.onChange&&U._f.onChange(w);const df=b(x,qe,ys,!1),DN=!dn(df)||hf;if(!ys&&d.values.next({name:x,type:w.type,values:{...o}}),ON)return h.isValid&&g(),DN&&d.state.next({name:x,...hf?{}:df});if(!ys&&hf&&d.state.next({...r}),_(!0),n.resolver){const{errors:i0}=await A([x]),LN=yT(r.errors,i,x),s0=yT(i0,i,LN.name||x);J=s0.error,x=s0.name,Ve=dn(i0)}else J=(await gT(U,o,p,n.shouldUseNativeValidation))[x],K=isNaN(qe)||qe===q(o,x,qe),K&&(J?Ve=!1:h.isValid&&(Ve=await ue(i,!0)));K&&(U._f.deps&&z(U._f.deps),N(x,Ve,J,df))}},z=async(w,S={})=>{let x,K;const U=Ap(w);if(_(!0),n.resolver){const M=await X(Ye(w)?w:U);x=dn(M),K=w?!U.some(J=>q(M,J)):x}else w?(K=(await Promise.all(U.map(async M=>{const J=q(i,M);return await ue(J&&J._f?{[M]:J}:J)}))).every(Boolean),!(!K&&!r.isValid)&&g()):K=x=await ue(i);return d.state.next({...!Hn(w)||h.isValid&&x!==r.isValid?{}:{name:w},...n.resolver||!w?{isValid:x}:{},errors:r.errors,isValidating:!1}),S.shouldFocus&&!K&&Lg(i,M=>M&&q(r.errors,M),w?U:l.mount),K},I=w=>{const S={...s,...a.mount?o:{}};return Ye(w)?S:Hn(w)?q(S,w):w.map(x=>q(S,x))},P=(w,S)=>({invalid:!!q((S||r).errors,w),isDirty:!!q((S||r).dirtyFields,w),isTouched:!!q((S||r).touchedFields,w),error:q((S||r).errors,w)}),j=w=>{w&&Ap(w).forEach(S=>gt(r.errors,S)),d.state.next({errors:w?r.errors:{}})},oe=(w,S,x)=>{const K=(q(i,w,{_f:{}})._f||{}).ref;Le(r.errors,w,{...S,ref:K}),d.state.next({name:w,errors:r.errors,isValid:!1}),x&&x.shouldFocus&&K&&K.focus&&K.focus()},fe=(w,S)=>Vr(w)?d.values.subscribe({next:x=>w(se(void 0,S),x)}):se(w,S,!0),Ne=(w,S={})=>{for(const x of w?Ap(w):l.mount)l.mount.delete(x),l.array.delete(x),S.keepValue||(gt(i,x),gt(o,x)),!S.keepError&&gt(r.errors,x),!S.keepDirty&&gt(r.dirtyFields,x),!S.keepTouched&&gt(r.touchedFields,x),!n.shouldUnregister&&!S.keepDefaultValue&&gt(s,x);d.values.next({values:{...o}}),d.state.next({...r,...S.keepDirty?{isDirty:V()}:{}}),!S.keepIsValid&&g()},ke=(w,S={})=>{let x=q(i,w);const K=oo(S.disabled);return Le(i,w,{...x||{},_f:{...x&&x._f?x._f:{ref:{name:w}},name:w,mount:!0,...S}}),l.mount.add(w),x?K&&Le(o,w,S.disabled?void 0:q(o,w,Op(x._f))):C(w,!0,S.value),{...K?{disabled:S.disabled}:{},...n.progressive?{required:!!S.required,min:_a(S.min),max:_a(S.max),minLength:_a(S.minLength),maxLength:_a(S.maxLength),pattern:_a(S.pattern)}:{},name:w,onChange:Y,onBlur:Y,ref:U=>{if(U){ke(w,S),x=q(i,w);const M=Ye(U.value)&&U.querySelectorAll&&U.querySelectorAll("input,select,textarea")[0]||U,J=ZB(M),Ve=x._f.refs||[];if(J?Ve.find(qe=>qe===M):M===x._f.ref)return;Le(i,w,{_f:{...x._f,...J?{refs:[...Ve.filter(Rp),M,...Array.isArray(q(s,w))?[{}]:[]],ref:{type:M.type,name:w}}:{ref:M}}}),C(w,!1,void 0,M)}else x=q(i,w,{}),x._f&&(x._f.mount=!1),(n.shouldUnregister||S.shouldUnregister)&&!(zB(l.array,w)&&a.action)&&l.unMount.add(w)}}},it=()=>n.shouldFocusError&&Lg(i,w=>w&&q(r.errors,w),l.mount),Te=(w,S)=>async x=>{x&&(x.preventDefault&&x.preventDefault(),x.persist&&x.persist());let K=kr(o);if(d.state.next({isSubmitting:!0}),n.resolver){const{errors:U,values:M}=await A();r.errors=U,K=M}else await ue(i);gt(r.errors,"root"),dn(r.errors)?(d.state.next({errors:{}}),await w(K,x)):(S&&await S({...r.errors},x),it(),setTimeout(it)),d.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:dn(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Tn=(w,S={})=>{q(i,w)&&(Ye(S.defaultValue)?_e(w,q(s,w)):(_e(w,S.defaultValue),Le(s,w,S.defaultValue)),S.keepTouched||gt(r.touchedFields,w),S.keepDirty||(gt(r.dirtyFields,w),r.isDirty=S.defaultValue?V(w,q(s,w)):V()),S.keepError||(gt(r.errors,w),h.isValid&&g()),d.state.next({...r}))},Vt=(w,S={})=>{const x=w||s,K=kr(x),U=w&&!dn(w)?K:s;if(S.keepDefaultValues||(s=x),!S.keepValues){if(S.keepDirtyValues||f)for(const M of l.mount)q(r.dirtyFields,M)?Le(U,M,q(o,M)):_e(M,q(U,M));else{if(Q_&&Ye(w))for(const M of l.mount){const J=q(i,M);if(J&&J._f){const Ve=Array.isArray(J._f.refs)?J._f.refs[0]:J._f.ref;if(jh(Ve)){const qe=Ve.closest("form");if(qe){qe.reset();break}}}}i={}}o=t.shouldUnregister?S.keepDefaultValues?kr(s):{}:kr(U),d.array.next({values:{...U}}),d.values.next({values:{...U}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&e(),a.mount=!h.isValid||!!S.keepIsValid,a.watch=!!t.shouldUnregister,d.state.next({submitCount:S.keepSubmitCount?r.submitCount:0,isDirty:S.keepDirty?r.isDirty:!!(S.keepDefaultValues&&!Li(w,s)),isSubmitted:S.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:S.keepDirtyValues?r.dirtyFields:S.keepDefaultValues&&w?Pp(s,w):{},touchedFields:S.keepTouched?r.touchedFields:{},errors:S.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},gi=(w,S)=>Vt(Vr(w)?w(o):w,S);return{control:{register:ke,unregister:Ne,getFieldState:P,handleSubmit:Te,setError:oe,_executeSchema:A,_getWatch:se,_getDirty:V,_updateValid:g,_removeUnmounted:H,_updateFieldArray:E,_getFieldArray:te,_reset:Vt,_resetDefaultValues:()=>Vr(n.defaultValues)&&n.defaultValues().then(w=>{gi(w,n.resetOptions),d.state.next({isLoading:!1})}),_updateFormState:w=>{r={...r,...w}},_subjects:d,_proxyFormState:h,get _fields(){return i},get _formValues(){return o},get _state(){return a},set _state(w){a=w},get _defaultValues(){return s},get _names(){return l},set _names(w){l=w},get _formState(){return r},set _formState(w){r=w},get _options(){return n},set _options(w){n={...n,...w}}},trigger:z,register:ke,handleSubmit:Te,watch:fe,setValue:_e,getValues:I,reset:gi,resetField:Tn,clearErrors:j,unregister:Ne,setError:oe,setFocus:(w,S={})=>{const x=q(i,w),K=x&&x._f;if(K){const U=K.refs?K.refs[0]:K.ref;U.focus&&(U.focus(),S.shouldSelect&&U.select())}},getFieldState:P}}function oz(t={}){const e=$.useRef(),[n,r]=$.useState({isDirty:!1,isValidating:!1,isLoading:Vr(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:Vr(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...sz(t,()=>r(s=>({...s}))),formState:n});const i=e.current.control;return i._options=t,KB({subject:i._subjects.state,next:s=>{qB(s,i._proxyFormState,i._updateFormState,!0)&&r({...i._formState})}}),$.useEffect(()=>{t.values&&!Li(t.values,i._defaultValues)?i._reset(t.values,i._options.resetOptions):i._resetDefaultValues()},[t.values,i]),$.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),e.current.formState=WB(n,i),e.current}var sf={exports:{}},bu={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var az=T.exports,lN=60103;bu.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var vT=Symbol.for;lN=vT("react.element"),bu.Fragment=vT("react.fragment")}var lz=az.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uz=Object.prototype.hasOwnProperty,cz={key:!0,ref:!0,__self:!0,__source:!0};function uN(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)uz.call(e,r)&&!cz.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:lN,type:t,key:s,ref:o,props:i,_owner:lz.current}}bu.jsx=uN;bu.jsxs=uN;sf.exports=bu;const Q=sf.exports.jsx,Nt=sf.exports.jsxs,hz=sf.exports.Fragment,_T=({type:t="text",placeholder:e,register:n,label:r,errorMessage:i,rules:s})=>Nt("div",{className:"relative",children:[Nt("label",{className:"flex flex-col text-sm font-medium focus-within:text-primary",children:[r,Q("input",{className:"mt-1 rounded-xl border-2 border-solid border-gray-400 px-3 py-4 text-black outline-none placeholder:text-gray-400 focus:border-primary",type:t,placeholder:e,...n&&n(r.toLowerCase(),s)})]}),Q("p",{className:"absolute -bottom-5 text-sm font-semibold text-red-500",children:i&&`* ${i}`})]}),dz="_container_1ko5j_1";var wT={container:dz,"lds-ring":"_lds-ring_1ko5j_15"};const cN=({loading:t})=>t?Q("div",{className:wT.container,children:Nt("div",{className:wT["lds-ring"],children:[Q("div",{}),Q("div",{}),Q("div",{}),Q("div",{})]})}):Q("div",{});var fz=Object.defineProperty,pz=(t,e,n)=>e in t?fz(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Dp=(t,e,n)=>(pz(t,typeof e!="symbol"?e+"":e,n),n);class mz{constructor(){Dp(this,"current",this.detect()),Dp(this,"handoffState","pending"),Dp(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}}let fr=new mz,Ln=(t,e)=>{fr.isServer?T.exports.useEffect(t,e):T.exports.useLayoutEffect(t,e)};function pr(t){let e=T.exports.useRef(t);return Ln(()=>{e.current=t},[t]),e}function of(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e}))}function Xo(){let t=[],e={addEventListener(n,r,i,s){return n.addEventListener(r,i,s),e.add(()=>n.removeEventListener(r,i,s))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return e.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return e.requestAnimationFrame(()=>e.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return e.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return of(()=>{r.current&&n[0]()}),e.add(()=>{r.current=!1})},style(n,r,i){let s=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:i}),this.add(()=>{Object.assign(n.style,{[r]:s})})},group(n){let r=Xo();return n(r),this.add(()=>r.dispose())},add(n){return t.push(n),()=>{let r=t.indexOf(n);if(r>=0)for(let i of t.splice(r,1))i()}},dispose(){for(let n of t.splice(0))n()}};return e}function Z_(){let[t]=T.exports.useState(Xo);return T.exports.useEffect(()=>()=>t.dispose(),[t]),t}let Me=function(t){let e=pr(t);return $.useCallback((...n)=>e.current(...n),[e])};function Jo(){let[t,e]=T.exports.useState(fr.isHandoffComplete);return t&&fr.isHandoffComplete===!1&&e(!1),T.exports.useEffect(()=>{t!==!0&&e(!0)},[t]),T.exports.useEffect(()=>fr.handoff(),[]),t}var ET;let Zo=(ET=$.useId)!=null?ET:function(){let t=Jo(),[e,n]=$.useState(t?()=>fr.nextId():null);return Ln(()=>{e===null&&n(fr.nextId())},[e]),e!=null?""+e:void 0};function Pt(t,e,...n){if(t in e){let i=e[t];return typeof i=="function"?i(...n):i}let r=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Pt),r}function hN(t){return fr.isServer?null:t instanceof Node?t.ownerDocument:t!=null&&t.hasOwnProperty("current")&&t.current instanceof Node?t.current.ownerDocument:document}let Mg=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var Si=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(Si||{}),dN=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(dN||{}),gz=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(gz||{});function yz(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(Mg)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var fN=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(fN||{});function vz(t,e=0){var n;return t===((n=hN(t))==null?void 0:n.body)?!1:Pt(e,{[0](){return t.matches(Mg)},[1](){let r=t;for(;r!==null;){if(r.matches(Mg))return!0;r=r.parentElement}return!1}})}var _z=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(_z||{});typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Hi(t){t==null||t.focus({preventScroll:!0})}let wz=["textarea","input"].join(",");function Ez(t){var e,n;return(n=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,wz))!=null?n:!1}function Tz(t,e=n=>n){return t.slice().sort((n,r)=>{let i=e(n),s=e(r);if(i===null||s===null)return 0;let o=i.compareDocumentPosition(s);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Pc(t,e,{sorted:n=!0,relativeTo:r=null,skipElements:i=[]}={}){let s=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t.ownerDocument,o=Array.isArray(t)?n?Tz(t):t:yz(t);i.length>0&&o.length>1&&(o=o.filter(f=>!i.includes(f))),r=r!=null?r:s.activeElement;let a=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,o.indexOf(r))-1;if(e&4)return Math.max(0,o.indexOf(r))+1;if(e&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},c=0,h=o.length,d;do{if(c>=h||c+h<=0)return 0;let f=l+c;if(e&16)f=(f+h)%h;else{if(f<0)return 3;if(f>=h)return 1}d=o[f],d==null||d.focus(u),c+=a}while(d!==s.activeElement);return e&6&&Ez(d)&&d.select(),2}function TT(t,e,n){let r=pr(e);T.exports.useEffect(()=>{function i(s){r.current(s)}return document.addEventListener(t,i,n),()=>document.removeEventListener(t,i,n)},[t,n])}function pN(t,e,n){let r=pr(e);T.exports.useEffect(()=>{function i(s){r.current(s)}return window.addEventListener(t,i,n),()=>window.removeEventListener(t,i,n)},[t,n])}function Cz(t,e,n=!0){let r=T.exports.useRef(!1);T.exports.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function i(o,a){if(!r.current||o.defaultPrevented)return;let l=a(o);if(l===null||!l.getRootNode().contains(l))return;let u=function c(h){return typeof h=="function"?c(h()):Array.isArray(h)||h instanceof Set?h:[h]}(t);for(let c of u){if(c===null)continue;let h=c instanceof HTMLElement?c:c.current;if(h!=null&&h.contains(l)||o.composed&&o.composedPath().includes(h))return}return!vz(l,fN.Loose)&&l.tabIndex!==-1&&o.preventDefault(),e(o,l)}let s=T.exports.useRef(null);TT("mousedown",o=>{var a,l;r.current&&(s.current=((l=(a=o.composedPath)==null?void 0:a.call(o))==null?void 0:l[0])||o.target)},!0),TT("click",o=>{s.current&&(i(o,()=>s.current),s.current=null)},!0),pN("blur",o=>i(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}let mN=Symbol();function Sz(t,e=!0){return Object.assign(t,{[mN]:e})}function Mn(...t){let e=T.exports.useRef(t);T.exports.useEffect(()=>{e.current=t},[t]);let n=Me(r=>{for(let i of e.current)i!=null&&(typeof i=="function"?i(r):i.current=r)});return t.every(r=>r==null||(r==null?void 0:r[mN]))?void 0:n}function $g(...t){return t.filter(Boolean).join(" ")}var Wh=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Wh||{}),cr=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(cr||{});function En({ourProps:t,theirProps:e,slot:n,defaultTag:r,features:i,visible:s=!0,name:o}){let a=gN(e,t);if(s)return sc(a,n,r,o);let l=i!=null?i:0;if(l&2){let{static:u=!1,...c}=a;if(u)return sc(c,n,r,o)}if(l&1){let{unmount:u=!0,...c}=a;return Pt(u?0:1,{[0](){return null},[1](){return sc({...c,hidden:!0,style:{display:"none"}},n,r,o)}})}return sc(a,n,r,o)}function sc(t,e={},n,r){let{as:i=n,children:s,refName:o="ref",...a}=Lp(t,["unmount","static"]),l=t.ref!==void 0?{[o]:t.ref}:{},u=typeof s=="function"?s(e):s;"className"in a&&a.className&&typeof a.className=="function"&&(a.className=a.className(e));let c={};if(e){let h=!1,d=[];for(let[f,y]of Object.entries(e))typeof y=="boolean"&&(h=!0),y===!0&&d.push(f);h&&(c["data-headlessui-state"]=d.join(" "))}if(i===T.exports.Fragment&&Object.keys(CT(a)).length>0){if(!T.exports.isValidElement(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(y=>`  - ${y}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(y=>`  - ${y}`).join(`
`)].join(`
`));let h=u.props,d=typeof(h==null?void 0:h.className)=="function"?(...y)=>$g(h==null?void 0:h.className(...y),a.className):$g(h==null?void 0:h.className,a.className),f=d?{className:d}:{};return T.exports.cloneElement(u,Object.assign({},gN(u.props,CT(Lp(a,["ref"]))),c,l,Iz(u.ref,l.ref),f))}return T.exports.createElement(i,Object.assign({},Lp(a,["ref"]),i!==T.exports.Fragment&&l,i!==T.exports.Fragment&&c),u)}function Iz(...t){return{ref:t.every(e=>e==null)?void 0:e=>{for(let n of t)n!=null&&(typeof n=="function"?n(e):n.current=e)}}}function gN(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let r of t)for(let i in r)i.startsWith("on")&&typeof r[i]=="function"?(n[i]!=null||(n[i]=[]),n[i].push(r[i])):e[i]=r[i];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(e,{[r](i,...s){let o=n[r];for(let a of o){if((i instanceof Event||(i==null?void 0:i.nativeEvent)instanceof Event)&&i.defaultPrevented)return;a(i,...s)}}});return e}function cn(t){var e;return Object.assign(T.exports.forwardRef(t),{displayName:(e=t.displayName)!=null?e:t.name})}function CT(t){let e=Object.assign({},t);for(let n in e)e[n]===void 0&&delete e[n];return e}function Lp(t,e=[]){let n=Object.assign({},t);for(let r of e)r in n&&delete n[r];return n}function kz(t){let e=t.parentElement,n=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(n=e),e=e.parentElement;let r=(e==null?void 0:e.getAttribute("disabled"))==="";return r&&xz(n)?!1:r}function xz(t){if(!t)return!1;let e=t.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}let bz="div";var qh=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(qh||{});function Az(t,e){let{features:n=1,...r}=t,i={ref:e,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return En({ourProps:i,theirProps:r,slot:{},defaultTag:bz,name:"Hidden"})}let Fg=cn(Az),e0=T.exports.createContext(null);e0.displayName="OpenClosedContext";var nn=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(nn||{});function t0(){return T.exports.useContext(e0)}function Nz({value:t,children:e}){return $.createElement(e0.Provider,{value:t},e)}var yN=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(yN||{});function n0(t,e){let n=T.exports.useRef([]),r=Me(t);T.exports.useEffect(()=>{let i=[...n.current];for(let[s,o]of e.entries())if(n.current[s]!==o){let a=r(e,i);return n.current=e,a}},[r,...e])}function Rz(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}var Da=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(Da||{});function Pz(){let t=T.exports.useRef(0);return pN("keydown",e=>{e.key==="Tab"&&(t.current=e.shiftKey?1:0)},!0),t}function Au(){let t=T.exports.useRef(!1);return Ln(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function Nu(...t){return T.exports.useMemo(()=>hN(...t),[...t])}function vN(t,e,n,r){let i=pr(n);T.exports.useEffect(()=>{t=t!=null?t:window;function s(o){i.current(o)}return t.addEventListener(e,s,r),()=>t.removeEventListener(e,s,r)},[t,e,r])}function Oz(t){function e(){document.readyState!=="loading"&&(t(),document.removeEventListener("DOMContentLoaded",e))}typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("DOMContentLoaded",e),e())}function _N(t){let e=Me(t),n=T.exports.useRef(!1);T.exports.useEffect(()=>(n.current=!1,()=>{n.current=!0,of(()=>{n.current&&e()})}),[e])}function wN(t){if(!t)return new Set;if(typeof t=="function")return new Set(t());let e=new Set;for(let n of t.current)n.current instanceof HTMLElement&&e.add(n.current);return e}let Dz="div";var EN=(t=>(t[t.None=1]="None",t[t.InitialFocus=2]="InitialFocus",t[t.TabLock=4]="TabLock",t[t.FocusLock=8]="FocusLock",t[t.RestoreFocus=16]="RestoreFocus",t[t.All=30]="All",t))(EN||{});function Lz(t,e){let n=T.exports.useRef(null),r=Mn(n,e),{initialFocus:i,containers:s,features:o=30,...a}=t;Jo()||(o=1);let l=Nu(n);Fz({ownerDocument:l},Boolean(o&16));let u=Uz({ownerDocument:l,container:n,initialFocus:i},Boolean(o&2));Vz({ownerDocument:l,container:n,containers:s,previousActiveElement:u},Boolean(o&8));let c=Pz(),h=Me(v=>{let p=n.current;!p||(m=>m())(()=>{Pt(c.current,{[Da.Forwards]:()=>{Pc(p,Si.First,{skipElements:[v.relatedTarget]})},[Da.Backwards]:()=>{Pc(p,Si.Last,{skipElements:[v.relatedTarget]})}})})}),d=Z_(),f=T.exports.useRef(!1),y={ref:r,onKeyDown(v){v.key=="Tab"&&(f.current=!0,d.requestAnimationFrame(()=>{f.current=!1}))},onBlur(v){let p=wN(s);n.current instanceof HTMLElement&&p.add(n.current);let m=v.relatedTarget;m instanceof HTMLElement&&m.dataset.headlessuiFocusGuard!=="true"&&(TN(p,m)||(f.current?Pc(n.current,Pt(c.current,{[Da.Forwards]:()=>Si.Next,[Da.Backwards]:()=>Si.Previous})|Si.WrapAround,{relativeTo:v.target}):v.target instanceof HTMLElement&&Hi(v.target)))}};return $.createElement($.Fragment,null,Boolean(o&4)&&$.createElement(Fg,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:h,features:qh.Focusable}),En({ourProps:y,theirProps:a,defaultTag:Dz,name:"FocusTrap"}),Boolean(o&4)&&$.createElement(Fg,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:h,features:qh.Focusable}))}let Mz=cn(Lz),wa=Object.assign(Mz,{features:EN}),Or=[];Oz(()=>{function t(e){e.target instanceof HTMLElement&&e.target!==document.body&&Or[0]!==e.target&&(Or.unshift(e.target),Or=Or.filter(n=>n!=null&&n.isConnected),Or.splice(10))}window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})});function $z(t=!0){let e=T.exports.useRef(Or.slice());return n0(([n],[r])=>{r===!0&&n===!1&&of(()=>{e.current.splice(0)}),r===!1&&n===!0&&(e.current=Or.slice())},[t,Or,e]),Me(()=>{var n;return(n=e.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function Fz({ownerDocument:t},e){let n=$z(e);n0(()=>{e||(t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&Hi(n())},[e]),_N(()=>{e&&Hi(n())})}function Uz({ownerDocument:t,container:e,initialFocus:n},r){let i=T.exports.useRef(null),s=Au();return n0(()=>{if(!r)return;let o=e.current;o&&of(()=>{if(!s.current)return;let a=t==null?void 0:t.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===a){i.current=a;return}}else if(o.contains(a)){i.current=a;return}n!=null&&n.current?Hi(n.current):Pc(o,Si.First)===dN.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),i.current=t==null?void 0:t.activeElement})},[r]),i}function Vz({ownerDocument:t,container:e,containers:n,previousActiveElement:r},i){let s=Au();vN(t==null?void 0:t.defaultView,"focus",o=>{if(!i||!s.current)return;let a=wN(n);e.current instanceof HTMLElement&&a.add(e.current);let l=r.current;if(!l)return;let u=o.target;u&&u instanceof HTMLElement?TN(a,u)?(r.current=u,Hi(u)):(o.preventDefault(),o.stopPropagation(),Hi(l)):Hi(r.current)},!0)}function TN(t,e){for(let n of t)if(n.contains(e))return!0;return!1}let CN=T.exports.createContext(!1);function jz(){return T.exports.useContext(CN)}function Ug(t){return $.createElement(CN.Provider,{value:t.force},t.children)}function Bz(t){let e=jz(),n=T.exports.useContext(SN),r=Nu(t),[i,s]=T.exports.useState(()=>{if(!e&&n!==null||fr.isServer)return null;let o=r==null?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(r===null)return null;let a=r.createElement("div");return a.setAttribute("id","headlessui-portal-root"),r.body.appendChild(a)});return T.exports.useEffect(()=>{i!==null&&(r!=null&&r.body.contains(i)||r==null||r.body.appendChild(i))},[i,r]),T.exports.useEffect(()=>{e||n!==null&&s(n.current)},[n,s,e]),i}let zz=T.exports.Fragment;function Hz(t,e){let n=t,r=T.exports.useRef(null),i=Mn(Sz(c=>{r.current=c}),e),s=Nu(r),o=Bz(r),[a]=T.exports.useState(()=>{var c;return fr.isServer?null:(c=s==null?void 0:s.createElement("div"))!=null?c:null}),l=T.exports.useContext(Vg),u=Jo();return Ln(()=>{!o||!a||o.contains(a)||(a.setAttribute("data-headlessui-portal",""),o.appendChild(a))},[o,a]),Ln(()=>{if(a&&l)return l.register(a)},[l,a]),_N(()=>{var c;!o||!a||(a instanceof Node&&o.contains(a)&&o.removeChild(a),o.childNodes.length<=0&&((c=o.parentElement)==null||c.removeChild(o)))}),u?!o||!a?null:Qg.exports.createPortal(En({ourProps:{ref:i},theirProps:n,defaultTag:zz,name:"Portal"}),a):null}let Wz=T.exports.Fragment,SN=T.exports.createContext(null);function qz(t,e){let{target:n,...r}=t,i={ref:Mn(e)};return $.createElement(SN.Provider,{value:n},En({ourProps:i,theirProps:r,defaultTag:Wz,name:"Popover.Group"}))}let Vg=T.exports.createContext(null);function Kz(){let t=T.exports.useContext(Vg),e=T.exports.useRef([]),n=Me(s=>(e.current.push(s),t&&t.register(s),()=>r(s))),r=Me(s=>{let o=e.current.indexOf(s);o!==-1&&e.current.splice(o,1),t&&t.unregister(s)}),i=T.exports.useMemo(()=>({register:n,unregister:r,portals:e}),[n,r,e]);return[e,T.exports.useMemo(()=>function({children:s}){return $.createElement(Vg.Provider,{value:i},s)},[i])]}let Gz=cn(Hz),Qz=cn(qz),jg=Object.assign(Gz,{Group:Qz}),IN=T.exports.createContext(null);function kN(){let t=T.exports.useContext(IN);if(t===null){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,kN),e}return t}function Yz(){let[t,e]=T.exports.useState([]);return[t.length>0?t.join(" "):void 0,T.exports.useMemo(()=>function(n){let r=Me(s=>(e(o=>[...o,s]),()=>e(o=>{let a=o.slice(),l=a.indexOf(s);return l!==-1&&a.splice(l,1),a}))),i=T.exports.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return $.createElement(IN.Provider,{value:i},n.children)},[e])]}let Xz="p";function Jz(t,e){let n=Zo(),{id:r=`headlessui-description-${n}`,...i}=t,s=kN(),o=Mn(e);Ln(()=>s.register(r),[r,s.register]);let a={ref:o,...s.props,id:r};return En({ourProps:a,theirProps:i,slot:s.slot||{},defaultTag:Xz,name:s.name||"Description"})}let Zz=cn(Jz),e5=Object.assign(Zz,{}),r0=T.exports.createContext(()=>{});r0.displayName="StackContext";var Bg=(t=>(t[t.Add=0]="Add",t[t.Remove=1]="Remove",t))(Bg||{});function t5(){return T.exports.useContext(r0)}function n5({children:t,onUpdate:e,type:n,element:r,enabled:i}){let s=t5(),o=Me((...a)=>{e==null||e(...a),s(...a)});return Ln(()=>{let a=i===void 0||i===!0;return a&&o(0,n,r),()=>{a&&o(1,n,r)}},[o,n,r,i]),$.createElement(r0.Provider,{value:o},t)}function r5(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const i5=typeof Object.is=="function"?Object.is:r5,{useState:s5,useEffect:o5,useLayoutEffect:a5,useDebugValue:l5}=Bp;function u5(t,e,n){const r=e(),[{inst:i},s]=s5({inst:{value:r,getSnapshot:e}});return a5(()=>{i.value=r,i.getSnapshot=e,Mp(i)&&s({inst:i})},[t,r,e]),o5(()=>(Mp(i)&&s({inst:i}),t(()=>{Mp(i)&&s({inst:i})})),[t]),l5(r),r}function Mp(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!i5(n,r)}catch{return!0}}function c5(t,e,n){return e()}const h5=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",d5=!h5,f5=d5?c5:u5,p5="useSyncExternalStore"in Bp?(t=>t.useSyncExternalStore)(Bp):f5;function m5(t){return p5(t.subscribe,t.getSnapshot,t.getSnapshot)}function g5(t,e){let n=t(),r=new Set;return{getSnapshot(){return n},subscribe(i){return r.add(i),()=>r.delete(i)},dispatch(i,...s){let o=e[i].call(n,...s);o&&(n=o,r.forEach(a=>a()))}}}function y5(){let t;return{before({doc:e}){var n;let r=e.documentElement;t=((n=e.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:e,d:n}){let r=e.documentElement,i=r.clientWidth-r.offsetWidth,s=t-i;n.style(r,"paddingRight",`${s}px`)}}}function v5(){if(!Rz())return{};let t;return{before(){t=window.pageYOffset},after({doc:e,d:n,meta:r}){function i(o){return r.containers.flatMap(a=>a()).some(a=>a.contains(o))}n.style(e.body,"marginTop",`-${t}px`),window.scrollTo(0,0);let s=null;n.addEventListener(e,"click",o=>{if(o.target instanceof HTMLElement)try{let a=o.target.closest("a");if(!a)return;let{hash:l}=new URL(a.href),u=e.querySelector(l);u&&!i(u)&&(s=u)}catch{}},!0),n.addEventListener(e,"touchmove",o=>{o.target instanceof HTMLElement&&!i(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+t),s&&s.isConnected&&(s.scrollIntoView({block:"nearest"}),s=null)})}}}function _5(){return{before({doc:t,d:e}){e.style(t.documentElement,"overflow","hidden")}}}function w5(t){let e={};for(let n of t)Object.assign(e,n(e));return e}let Mi=g5(()=>new Map,{PUSH(t,e){var n;let r=(n=this.get(t))!=null?n:{doc:t,count:0,d:Xo(),meta:new Set};return r.count++,r.meta.add(e),this.set(t,r),this},POP(t,e){let n=this.get(t);return n&&(n.count--,n.meta.delete(e)),this},SCROLL_PREVENT({doc:t,d:e,meta:n}){let r={doc:t,d:e,meta:w5(n)},i=[v5(),y5(),_5()];i.forEach(({before:s})=>s==null?void 0:s(r)),i.forEach(({after:s})=>s==null?void 0:s(r))},SCROLL_ALLOW({d:t}){t.dispose()},TEARDOWN({doc:t}){this.delete(t)}});Mi.subscribe(()=>{let t=Mi.getSnapshot(),e=new Map;for(let[n]of t)e.set(n,n.documentElement.style.overflow);for(let n of t.values()){let r=e.get(n.doc)==="hidden",i=n.count!==0;(i&&!r||!i&&r)&&Mi.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&Mi.dispatch("TEARDOWN",n)}});function E5(t,e,n){let r=m5(Mi),i=t?r.get(t):void 0,s=i?i.count>0:!1;return Ln(()=>{if(!(!t||!e))return Mi.dispatch("PUSH",t,n),()=>Mi.dispatch("POP",t,n)},[e,t]),s}let $p=new Map,Ea=new Map;function ST(t,e=!0){Ln(()=>{var n;if(!e)return;let r=typeof t=="function"?t():t.current;if(!r)return;function i(){var o;if(!r)return;let a=(o=Ea.get(r))!=null?o:1;if(a===1?Ea.delete(r):Ea.set(r,a-1),a!==1)return;let l=$p.get(r);l&&(l["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",l["aria-hidden"]),r.inert=l.inert,$p.delete(r))}let s=(n=Ea.get(r))!=null?n:0;return Ea.set(r,s+1),s!==0||($p.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),i},[t,e])}function T5({defaultContainers:t=[],portals:e}={}){let n=T.exports.useRef(null),r=Nu(n),i=Me(()=>{var s;let o=[];for(let a of t)a!==null&&(a instanceof HTMLElement?o.push(a):"current"in a&&a.current instanceof HTMLElement&&o.push(a.current));if(e!=null&&e.current)for(let a of e.current)o.push(a);for(let a of(s=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?s:[])a!==document.body&&a!==document.head&&a instanceof HTMLElement&&a.id!=="headlessui-portal-root"&&(a.contains(n.current)||o.some(l=>a.contains(l))||o.push(a));return o});return{resolveContainers:i,contains:Me(s=>i().some(o=>o.contains(s))),mainTreeNodeRef:n,MainTreeNode:T.exports.useMemo(()=>function(){return $.createElement(Fg,{features:qh.Hidden,ref:n})},[n])}}var C5=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(C5||{}),S5=(t=>(t[t.SetTitleId=0]="SetTitleId",t))(S5||{});let I5={[0](t,e){return t.titleId===e.id?t:{...t,titleId:e.id}}},Kh=T.exports.createContext(null);Kh.displayName="DialogContext";function Ru(t){let e=T.exports.useContext(Kh);if(e===null){let n=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ru),n}return e}function k5(t,e,n=()=>[document.body]){E5(t,e,r=>{var i;return{containers:[...(i=r.containers)!=null?i:[],n]}})}function x5(t,e){return Pt(e.type,I5,t,e)}let b5="div",A5=Wh.RenderStrategy|Wh.Static;function N5(t,e){var n;let r=Zo(),{id:i=`headlessui-dialog-${r}`,open:s,onClose:o,initialFocus:a,__demoMode:l=!1,...u}=t,[c,h]=T.exports.useState(0),d=t0();s===void 0&&d!==null&&(s=(d&nn.Open)===nn.Open);let f=T.exports.useRef(null),y=Mn(f,e),v=Nu(f),p=t.hasOwnProperty("open")||d!==null,m=t.hasOwnProperty("onClose");if(!p&&!m)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!p)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!m)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof s!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s}`);if(typeof o!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let g=s?0:1,[_,E]=T.exports.useReducer(x5,{titleId:null,descriptionId:null,panelRef:T.exports.createRef()}),k=Me(()=>o(!1)),C=Me(Te=>E({type:0,id:Te})),b=Jo()?l?!1:g===0:!1,N=c>1,A=T.exports.useContext(Kh)!==null,[X,ue]=Kz(),{resolveContainers:H,mainTreeNodeRef:V,MainTreeNode:se}=T5({portals:X,defaultContainers:[(n=_.panelRef.current)!=null?n:f.current]}),te=N?"parent":"leaf",Ee=d!==null?(d&nn.Closing)===nn.Closing:!1,Ue=(()=>A||Ee?!1:b)(),_e=T.exports.useCallback(()=>{var Te,Tn;return(Tn=Array.from((Te=v==null?void 0:v.querySelectorAll("body > *"))!=null?Te:[]).find(Vt=>Vt.id==="headlessui-portal-root"?!1:Vt.contains(V.current)&&Vt instanceof HTMLElement))!=null?Tn:null},[V]);ST(_e,Ue);let Y=(()=>N?!0:b)(),z=T.exports.useCallback(()=>{var Te,Tn;return(Tn=Array.from((Te=v==null?void 0:v.querySelectorAll("[data-headlessui-portal]"))!=null?Te:[]).find(Vt=>Vt.contains(V.current)&&Vt instanceof HTMLElement))!=null?Tn:null},[V]);ST(z,Y);let I=(()=>!(!b||N))();Cz(H,k,I);let P=(()=>!(N||g!==0))();vN(v==null?void 0:v.defaultView,"keydown",Te=>{P&&(Te.defaultPrevented||Te.key===yN.Escape&&(Te.preventDefault(),Te.stopPropagation(),k()))});let j=(()=>!(Ee||g!==0||A))();k5(v,j,H),T.exports.useEffect(()=>{if(g!==0||!f.current)return;let Te=new ResizeObserver(Tn=>{for(let Vt of Tn){let gi=Vt.target.getBoundingClientRect();gi.x===0&&gi.y===0&&gi.width===0&&gi.height===0&&k()}});return Te.observe(f.current),()=>Te.disconnect()},[g,f,k]);let[oe,fe]=Yz(),Ne=T.exports.useMemo(()=>[{dialogState:g,close:k,setTitleId:C},_],[g,_,k,C]),ke=T.exports.useMemo(()=>({open:g===0}),[g]),it={ref:y,id:i,role:"dialog","aria-modal":g===0?!0:void 0,"aria-labelledby":_.titleId,"aria-describedby":oe};return $.createElement(n5,{type:"Dialog",enabled:g===0,element:f,onUpdate:Me((Te,Tn)=>{Tn==="Dialog"&&Pt(Te,{[Bg.Add]:()=>h(Vt=>Vt+1),[Bg.Remove]:()=>h(Vt=>Vt-1)})})},$.createElement(Ug,{force:!0},$.createElement(jg,null,$.createElement(Kh.Provider,{value:Ne},$.createElement(jg.Group,{target:f},$.createElement(Ug,{force:!1},$.createElement(fe,{slot:ke,name:"Dialog.Description"},$.createElement(wa,{initialFocus:a,containers:H,features:b?Pt(te,{parent:wa.features.RestoreFocus,leaf:wa.features.All&~wa.features.FocusLock}):wa.features.None},$.createElement(ue,null,En({ourProps:it,theirProps:u,slot:ke,defaultTag:b5,features:A5,visible:g===0,name:"Dialog"}))))))))),$.createElement(se,null))}let R5="div";function P5(t,e){let n=Zo(),{id:r=`headlessui-dialog-overlay-${n}`,...i}=t,[{dialogState:s,close:o}]=Ru("Dialog.Overlay"),a=Mn(e),l=Me(c=>{if(c.target===c.currentTarget){if(kz(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),o()}}),u=T.exports.useMemo(()=>({open:s===0}),[s]);return En({ourProps:{ref:a,id:r,"aria-hidden":!0,onClick:l},theirProps:i,slot:u,defaultTag:R5,name:"Dialog.Overlay"})}let O5="div";function D5(t,e){let n=Zo(),{id:r=`headlessui-dialog-backdrop-${n}`,...i}=t,[{dialogState:s},o]=Ru("Dialog.Backdrop"),a=Mn(e);T.exports.useEffect(()=>{if(o.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[o.panelRef]);let l=T.exports.useMemo(()=>({open:s===0}),[s]);return $.createElement(Ug,{force:!0},$.createElement(jg,null,En({ourProps:{ref:a,id:r,"aria-hidden":!0},theirProps:i,slot:l,defaultTag:O5,name:"Dialog.Backdrop"})))}let L5="div";function M5(t,e){let n=Zo(),{id:r=`headlessui-dialog-panel-${n}`,...i}=t,[{dialogState:s},o]=Ru("Dialog.Panel"),a=Mn(e,o.panelRef),l=T.exports.useMemo(()=>({open:s===0}),[s]),u=Me(c=>{c.stopPropagation()});return En({ourProps:{ref:a,id:r,onClick:u},theirProps:i,slot:l,defaultTag:L5,name:"Dialog.Panel"})}let $5="h2";function F5(t,e){let n=Zo(),{id:r=`headlessui-dialog-title-${n}`,...i}=t,[{dialogState:s,setTitleId:o}]=Ru("Dialog.Title"),a=Mn(e);T.exports.useEffect(()=>(o(r),()=>o(null)),[r,o]);let l=T.exports.useMemo(()=>({open:s===0}),[s]);return En({ourProps:{ref:a,id:r},theirProps:i,slot:l,defaultTag:$5,name:"Dialog.Title"})}let U5=cn(N5),V5=cn(D5),j5=cn(M5),B5=cn(P5),z5=cn(F5),oc=Object.assign(U5,{Backdrop:V5,Panel:j5,Overlay:B5,Title:z5,Description:e5});function H5(t=0){let[e,n]=T.exports.useState(t),r=Au(),i=T.exports.useCallback(l=>{r.current&&n(u=>u|l)},[e,r]),s=T.exports.useCallback(l=>Boolean(e&l),[e]),o=T.exports.useCallback(l=>{r.current&&n(u=>u&~l)},[n,r]),a=T.exports.useCallback(l=>{r.current&&n(u=>u^l)},[n]);return{flags:e,addFlag:i,hasFlag:s,removeFlag:o,toggleFlag:a}}function W5(t){let e={called:!1};return(...n)=>{if(!e.called)return e.called=!0,t(...n)}}function Fp(t,...e){t&&e.length>0&&t.classList.add(...e)}function Up(t,...e){t&&e.length>0&&t.classList.remove(...e)}function q5(t,e){let n=Xo();if(!t)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(t),[s,o]=[r,i].map(l=>{let[u=0]=l.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,h)=>h-c);return u}),a=s+o;if(a!==0){n.group(u=>{u.setTimeout(()=>{e(),u.dispose()},a),u.addEventListener(t,"transitionrun",c=>{c.target===c.currentTarget&&u.dispose()})});let l=n.addEventListener(t,"transitionend",u=>{u.target===u.currentTarget&&(e(),l())})}else e();return n.add(()=>e()),n.dispose}function K5(t,e,n,r){let i=n?"enter":"leave",s=Xo(),o=r!==void 0?W5(r):()=>{};i==="enter"&&(t.removeAttribute("hidden"),t.style.display="");let a=Pt(i,{enter:()=>e.enter,leave:()=>e.leave}),l=Pt(i,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),u=Pt(i,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return Up(t,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),Fp(t,...a,...u),s.nextFrame(()=>{Up(t,...u),Fp(t,...l),q5(t,()=>(Up(t,...a),Fp(t,...e.entered),o()))}),s.dispose}function G5({container:t,direction:e,classes:n,onStart:r,onStop:i}){let s=Au(),o=Z_(),a=pr(e);Ln(()=>{let l=Xo();o.add(l.dispose);let u=t.current;if(u&&a.current!=="idle"&&s.current)return l.dispose(),r.current(a.current),l.add(K5(u,n.current,a.current==="enter",()=>{l.dispose(),i.current(a.current)})),l.dispose},[e])}function vi(t=""){return t.split(" ").filter(e=>e.trim().length>1)}let af=T.exports.createContext(null);af.displayName="TransitionContext";var Q5=(t=>(t.Visible="visible",t.Hidden="hidden",t))(Q5||{});function Y5(){let t=T.exports.useContext(af);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}function X5(){let t=T.exports.useContext(lf);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}let lf=T.exports.createContext(null);lf.displayName="NestingContext";function uf(t){return"children"in t?uf(t.children):t.current.filter(({el:e})=>e.current!==null).filter(({state:e})=>e==="visible").length>0}function xN(t,e){let n=pr(t),r=T.exports.useRef([]),i=Au(),s=Z_(),o=Me((f,y=cr.Hidden)=>{let v=r.current.findIndex(({el:p})=>p===f);v!==-1&&(Pt(y,{[cr.Unmount](){r.current.splice(v,1)},[cr.Hidden](){r.current[v].state="hidden"}}),s.microTask(()=>{var p;!uf(r)&&i.current&&((p=n.current)==null||p.call(n))}))}),a=Me(f=>{let y=r.current.find(({el:v})=>v===f);return y?y.state!=="visible"&&(y.state="visible"):r.current.push({el:f,state:"visible"}),()=>o(f,cr.Unmount)}),l=T.exports.useRef([]),u=T.exports.useRef(Promise.resolve()),c=T.exports.useRef({enter:[],leave:[],idle:[]}),h=Me((f,y,v)=>{l.current.splice(0),e&&(e.chains.current[y]=e.chains.current[y].filter(([p])=>p!==f)),e==null||e.chains.current[y].push([f,new Promise(p=>{l.current.push(p)})]),e==null||e.chains.current[y].push([f,new Promise(p=>{Promise.all(c.current[y].map(([m,g])=>g)).then(()=>p())})]),y==="enter"?u.current=u.current.then(()=>e==null?void 0:e.wait.current).then(()=>v(y)):v(y)}),d=Me((f,y,v)=>{Promise.all(c.current[y].splice(0).map(([p,m])=>m)).then(()=>{var p;(p=l.current.shift())==null||p()}).then(()=>v(y))});return T.exports.useMemo(()=>({children:r,register:a,unregister:o,onStart:h,onStop:d,wait:u,chains:c}),[a,o,r,h,d,c,u])}function J5(){}let Z5=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function IT(t){var e;let n={};for(let r of Z5)n[r]=(e=t[r])!=null?e:J5;return n}function eH(t){let e=T.exports.useRef(IT(t));return T.exports.useEffect(()=>{e.current=IT(t)},[t]),e}let tH="div",bN=Wh.RenderStrategy;function nH(t,e){let{beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:s,enter:o,enterFrom:a,enterTo:l,entered:u,leave:c,leaveFrom:h,leaveTo:d,...f}=t,y=T.exports.useRef(null),v=Mn(y,e),p=f.unmount?cr.Unmount:cr.Hidden,{show:m,appear:g,initial:_}=Y5(),[E,k]=T.exports.useState(m?"visible":"hidden"),C=X5(),{register:b,unregister:N}=C,A=T.exports.useRef(null);T.exports.useEffect(()=>b(y),[b,y]),T.exports.useEffect(()=>{if(p===cr.Hidden&&y.current){if(m&&E!=="visible"){k("visible");return}return Pt(E,{hidden:()=>N(y),visible:()=>b(y)})}},[E,y,b,N,m,p]);let X=pr({enter:vi(o),enterFrom:vi(a),enterTo:vi(l),entered:vi(u),leave:vi(c),leaveFrom:vi(h),leaveTo:vi(d)}),ue=eH({beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:s}),H=Jo();T.exports.useEffect(()=>{if(H&&E==="visible"&&y.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[y,E,H]);let V=_&&!g,se=(()=>!H||V||A.current===m?"idle":m?"enter":"leave")(),te=H5(0),Ee=Me(I=>Pt(I,{enter:()=>{te.addFlag(nn.Opening),ue.current.beforeEnter()},leave:()=>{te.addFlag(nn.Closing),ue.current.beforeLeave()},idle:()=>{}})),Ue=Me(I=>Pt(I,{enter:()=>{te.removeFlag(nn.Opening),ue.current.afterEnter()},leave:()=>{te.removeFlag(nn.Closing),ue.current.afterLeave()},idle:()=>{}})),_e=xN(()=>{k("hidden"),N(y)},C);G5({container:y,classes:X,direction:se,onStart:pr(I=>{_e.onStart(y,I,Ee)}),onStop:pr(I=>{_e.onStop(y,I,Ue),I==="leave"&&!uf(_e)&&(k("hidden"),N(y))})}),T.exports.useEffect(()=>{V&&(p===cr.Hidden?A.current=null:A.current=m)},[m,V,E]);let Y=f,z={ref:v};return g&&m&&_&&(Y={...Y,className:$g(f.className,...X.current.enter,...X.current.enterFrom)}),$.createElement(lf.Provider,{value:_e},$.createElement(Nz,{value:Pt(E,{visible:nn.Open,hidden:nn.Closed})|te.flags},En({ourProps:z,theirProps:Y,defaultTag:tH,features:bN,visible:E==="visible",name:"Transition.Child"})))}function rH(t,e){let{show:n,appear:r=!1,unmount:i,...s}=t,o=T.exports.useRef(null),a=Mn(o,e);Jo();let l=t0();if(n===void 0&&l!==null&&(n=(l&nn.Open)===nn.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[u,c]=T.exports.useState(n?"visible":"hidden"),h=xN(()=>{c("hidden")}),[d,f]=T.exports.useState(!0),y=T.exports.useRef([n]);Ln(()=>{d!==!1&&y.current[y.current.length-1]!==n&&(y.current.push(n),f(!1))},[y,n]);let v=T.exports.useMemo(()=>({show:n,appear:r,initial:d}),[n,r,d]);T.exports.useEffect(()=>{if(n)c("visible");else if(!uf(h))c("hidden");else{let _=o.current;if(!_)return;let E=_.getBoundingClientRect();E.x===0&&E.y===0&&E.width===0&&E.height===0&&c("hidden")}},[n,h]);let p={unmount:i},m=Me(()=>{var _;d&&f(!1),(_=t.beforeEnter)==null||_.call(t)}),g=Me(()=>{var _;d&&f(!1),(_=t.beforeLeave)==null||_.call(t)});return $.createElement(lf.Provider,{value:h},$.createElement(af.Provider,{value:v},En({ourProps:{...p,as:T.exports.Fragment,children:$.createElement(AN,{ref:a,...p,...s,beforeEnter:m,beforeLeave:g})},theirProps:{},defaultTag:T.exports.Fragment,features:bN,visible:u==="visible",name:"Transition"})))}function iH(t,e){let n=T.exports.useContext(af)!==null,r=t0()!==null;return $.createElement($.Fragment,null,!n&&r?$.createElement(zg,{ref:e,...t}):$.createElement(AN,{ref:e,...t}))}let zg=cn(rH),AN=cn(nH),sH=cn(iH),Vp=Object.assign(zg,{Child:sH,Root:zg});const oH=({title:t,description:e,open:n,onClose:r,children:i})=>Q(Vp,{appear:!0,show:n,as:T.exports.Fragment,children:Nt(oc,{open:n,onClose:r,as:"div",className:"relative z-10",children:[Q(Vp.Child,{as:T.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Q("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),Q("div",{className:"fixed inset-0 overflow-y-auto",children:Q("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:Q(Vp.Child,{as:T.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Nt(oc.Panel,{className:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[Q(oc.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:t}),Q(oc.Description,{as:"div",className:"mt-2",children:Q("p",{className:"text-sm text-gray-500",children:e})}),i]})})})})]})}),aH="_container_syanv_1",lH="_ripple_syanv_19";var kT={container:aH,ripple:lH};const uH=(t,e,n)=>{T.exports.useLayoutEffect(()=>{let r=null;return t>0&&(clearTimeout(r),r=setTimeout(()=>{n(),clearTimeout(r)},e*4)),()=>clearTimeout(r)},[t,e,n])},NN=({duration:t,color:e})=>{const[n,r]=T.exports.useState([]);return uH(n.length,t,()=>{r([])}),Q("div",{onMouseDown:s=>{const o=s.currentTarget.getBoundingClientRect(),a=o.width>o.height?o.width:o.height,l=s.pageX-o.x-a/2,u=s.pageY-o.y-a/2,c={x:l,y:u,size:a};r([...n,c])},className:kT.container,children:n.length>0&&n.map((s,o)=>Q("span",{className:kT.ripple,style:{top:s.y,left:s.x,width:s.size,height:s.size,backgroundColor:e,animationDuration:`${t}ms`}},"span"+o))})},cH=()=>{var f,y;const[t,e]=T.exports.useState(!0),[n,r]=T.exports.useState(!1),[i,s]=T.exports.useState(""),o=PA(),{register:a,handleSubmit:l,getValues:u,formState:{errors:c}}=oz(),h=async v=>{r(!0),t?dL(o,v.email,v.password).catch(p=>{p instanceof en&&(p.code==="auth/user-not-found"?s("Couldn't find the user. Try another one"):p.code==="auth/wrong-password"&&s("Incorrect password. Please try again"))}).finally(()=>{r(!1)}):hL(o,v.email,v.password).catch(p=>{p instanceof en&&p.code==="auth/email-already-in-use"&&s("Email already in use. Try to log in?")}).finally(()=>{r(!1)})},d=()=>{s("")};return Nt(hz,{children:[Q(cN,{loading:n}),Q(oH,{title:t?"Login error":"Sign up error",description:i,onClose:d,open:!!i,children:Q("div",{className:"mt-4",children:Q("button",{onClick:d,className:"inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2",children:"Close"})})}),Nt("div",{className:"mx-auto p-6",children:[Q("h1",{className:"mb-20 mt-4 text-center text-5xl font-light text-primary",children:"Shoppingify"}),Nt("form",{onSubmit:l(h),className:"mx-auto flex max-w-xs flex-col gap-6",children:[Q(_T,{register:a,rules:{required:"this is required",pattern:{value:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}/,message:"must be a valid email address"}},placeholder:"Enter an email",label:"Email",errorMessage:(f=c.email)==null?void 0:f.message}),Q(_T,{type:"password",register:a,rules:{required:"this is required"},placeholder:"Enter a password",label:"Password",errorMessage:(y=c.password)==null?void 0:y.message}),Nt("button",{type:"submit",className:"relative mt-2 w-full cursor-pointer rounded-xl bg-primary py-2 text-base font-bold text-white",children:[t?"Login":"Signup",Q(NN,{color:"#FFF0DE",duration:1500})]}),Nt("p",{className:"-mt-5",children:[t?"Don't have an account?":"Already have an account?"," ",Q("a",{onClick:()=>e(v=>!v),className:"cursor-pointer text-primary hover:underline focus-visible:underline",children:t?"Sign up":"Login"})]})]})]})]})};var hH="/shoppingify/assets/favicon.5b151dc7.svg",RN={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},xT=$.createContext&&$.createContext(RN),Zr=globalThis&&globalThis.__assign||function(){return Zr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Zr.apply(this,arguments)},dH=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function PN(t){return t&&t.map(function(e,n){return $.createElement(e.tag,Zr({key:n},e.attr),PN(e.child))})}function cf(t){return function(e){return $.createElement(fH,Zr({attr:Zr({},t.attr)},e),PN(t.child))}}function fH(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=dH(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),$.createElement("svg",Zr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Zr(Zr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&$.createElement("title",null,s),t.children)};return xT!==void 0?$.createElement(xT.Consumer,null,function(n){return e(n)}):e(RN)}function pH(t){return cf({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}}]})(t)}function mH(t){return cf({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}}]})(t)}function gH(t){return cf({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}}]})(t)}function yH(t){return cf({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{fill:"none"},child:[{tag:"path",attr:{d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M0 0h24v24H0z"}}]},{tag:"path",attr:{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}}]})(t)}const jp=({to:t,tooltip:e,Icon:n})=>Nt(VB,{to:t,activeClassName:"before:absolute before:left-0 before:top-1/2 before:h-12 before:w-1.5 before:-translate-y-1/2 before:rounded-r-lg before:bg-primary",className:"group relative block px-4 py-8 sm:px-6",children:[Q(n,{className:"text-2xl"}),Q(NN,{color:"#dddddd",duration:1e3}),Q("span",{className:"pointer-events-none absolute -right-12 top-1/2 flex h-5 w-16 -translate-y-1/2 items-center justify-center rounded-md bg-gray-700 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100",children:e})]}),vH=()=>Nt("nav",{className:"flex h-screen w-fit flex-col justify-between bg-white",children:[Q("img",{src:hH,alt:"logo",className:"relative top-4 mx-auto h-12 w-12"}),Nt("div",{className:"flex flex-col items-center",children:[Q(jp,{to:"/",Icon:pH,tooltip:"items"}),Q(jp,{to:"/history",Icon:yH,tooltip:"history"}),Q(jp,{to:"/statistics",Icon:mH,tooltip:"statistics"})]}),Q(gH,{className:"relative bottom-6 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary p-2.5 text-white"})]}),_H=({name:t,image:e,category:n,note:r})=>Q("div",{className:"flex min-w-[140px] max-w-[182px] grow items-center rounded-xl bg-white p-4 text-sm font-medium shadow-[0px_2px_12px_rgba(0,0,0,0.05)] sm:text-base",children:Q("span",{className:"max-w-[100px]",children:t})}),wH=({name:t,items:e})=>e.length===0?Q("div",{}):Nt("div",{children:[Q("h3",{children:t}),Q("div",{children:e.map(n=>T.exports.createElement(_H,{...n,key:n.id}))})]}),EH=["Fruit and vegetables","Meat and Fish","Beverages","Sweets","Pets"],TH=()=>{var o;const{data:t}=kA(),e=D6(),n=JF(e,"items"),r=pU(n,mU("userId","==",(o=t.user)==null?void 0:o.uid)),{status:i,data:s}=R6(r,{idField:"id"});return i==="loading"?Q(cN,{loading:!0}):Q("div",{children:EH.map(a=>Q(wH,{name:a,items:s.filter(l=>l.category===a)}))})},CH=()=>{const{status:t,data:e}=kA();return t==="loading"?Q("div",{}):Q(LB,{basename:"/shoppingify",children:Nt("div",{className:"flex",children:[e.signedIn&&Q(vH,{}),Q("div",{className:"grow",children:Nt(SB,{children:[!e.signedIn&&Q(kp,{path:"/login",component:cH}),e.signedIn&&Q(kp,{path:"/",component:TH}),Q(kp,{path:"*",component:()=>Q(vB,{to:e.signedIn?"/":"/login"})})]})})]})})};const SH=()=>{const t=IA(),e=tU(t),n=IM(t);return Q(P6,{sdk:n,children:Q(O6,{sdk:e,children:Q(CH,{})})})},IH={apiKey:"AIzaSyAltaAAbp3yed-PjevL5ASwWihJYeNCGU0",authDomain:"shoppingify-1bd7f.firebaseapp.com",projectId:"shoppingify-1bd7f",storageBucket:"shoppingify-1bd7f.appspot.com",messagingSenderId:"601698294825",appId:"1:601698294825:web:6a0e15be24181c41d8d038",measurementId:"G-BMQPZHF7V1"};jP.render(Q($.StrictMode,{children:Q(y6,{firebaseConfig:IH,children:Q(SH,{})})}),document.getElementById("root"));
