function TI(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in e)){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const SI=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};SI();var y={exports:{}},te={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Jm=Object.getOwnPropertySymbols,II=Object.prototype.hasOwnProperty,kI=Object.prototype.propertyIsEnumerable;function xI(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function RI(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(s){return t[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var b0=RI()?Object.assign:function(e,t){for(var n,r=xI(e),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)II.call(n,o)&&(r[o]=n[o]);if(Jm){i=Jm(n);for(var l=0;l<i.length;l++)kI.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp=b0,Ts=60103,O0=60106;te.Fragment=60107;te.StrictMode=60108;te.Profiler=60114;var D0=60109,L0=60110,M0=60112;te.Suspense=60113;var F0=60115,$0=60116;if(typeof Symbol=="function"&&Symbol.for){var Yt=Symbol.for;Ts=Yt("react.element"),O0=Yt("react.portal"),te.Fragment=Yt("react.fragment"),te.StrictMode=Yt("react.strict_mode"),te.Profiler=Yt("react.profiler"),D0=Yt("react.provider"),L0=Yt("react.context"),M0=Yt("react.forward_ref"),te.Suspense=Yt("react.suspense"),F0=Yt("react.memo"),$0=Yt("react.lazy")}var Zm=typeof Symbol=="function"&&Symbol.iterator;function NI(e){return e===null||typeof e!="object"?null:(e=Zm&&e[Zm]||e["@@iterator"],typeof e=="function"?e:null)}function Nl(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var U0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j0={};function Ss(e,t,n){this.props=e,this.context=t,this.refs=j0,this.updater=n||U0}Ss.prototype.isReactComponent={};Ss.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(Nl(85));this.updater.enqueueSetState(this,e,t,"setState")};Ss.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function B0(){}B0.prototype=Ss.prototype;function hp(e,t,n){this.props=e,this.context=t,this.refs=j0,this.updater=n||U0}var dp=hp.prototype=new B0;dp.constructor=hp;cp(dp,Ss.prototype);dp.isPureReactComponent=!0;var fp={current:null},V0=Object.prototype.hasOwnProperty,H0={key:!0,ref:!0,__self:!0,__source:!0};function z0(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)V0.call(t,r)&&!H0.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ts,type:e,key:s,ref:o,props:i,_owner:fp.current}}function PI(e,t){return{$$typeof:Ts,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ts}function AI(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ev=/\/+/g;function ch(e,t){return typeof e=="object"&&e!==null&&e.key!=null?AI(""+e.key):t.toString(36)}function Oa(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ts:case O0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ch(o,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(ev,"$&/")+"/"),Oa(i,t,n,"",function(u){return u})):i!=null&&(pp(i)&&(i=PI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ev,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){s=e[l];var a=r+ch(s,l);o+=Oa(s,t,n,a,i)}else if(a=NI(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=r+ch(s,l++),o+=Oa(s,t,n,a,i);else if(s==="object")throw t=""+e,Error(Nl(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return o}function ca(e,t,n){if(e==null)return e;var r=[],i=0;return Oa(e,r,"","",function(s){return t.call(n,s,i++)}),r}function bI(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var W0={current:null};function Vn(){var e=W0.current;if(e===null)throw Error(Nl(321));return e}var OI={ReactCurrentDispatcher:W0,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:fp,IsSomeRendererActing:{current:!1},assign:cp};te.Children={map:ca,forEach:function(e,t,n){ca(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ca(e,function(){t++}),t},toArray:function(e){return ca(e,function(t){return t})||[]},only:function(e){if(!pp(e))throw Error(Nl(143));return e}};te.Component=Ss;te.PureComponent=hp;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OI;te.cloneElement=function(e,t,n){if(e==null)throw Error(Nl(267,e));var r=cp({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=fp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)V0.call(t,a)&&!H0.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ts,type:e.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:L0,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:D0,_context:e},e.Consumer=e};te.createElement=z0;te.createFactory=function(e){var t=z0.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:M0,render:e}};te.isValidElement=pp;te.lazy=function(e){return{$$typeof:$0,_payload:{_status:-1,_result:e},_init:bI}};te.memo=function(e,t){return{$$typeof:F0,type:e,compare:t===void 0?null:t}};te.useCallback=function(e,t){return Vn().useCallback(e,t)};te.useContext=function(e,t){return Vn().useContext(e,t)};te.useDebugValue=function(){};te.useEffect=function(e,t){return Vn().useEffect(e,t)};te.useImperativeHandle=function(e,t,n){return Vn().useImperativeHandle(e,t,n)};te.useLayoutEffect=function(e,t){return Vn().useLayoutEffect(e,t)};te.useMemo=function(e,t){return Vn().useMemo(e,t)};te.useReducer=function(e,t,n){return Vn().useReducer(e,t,n)};te.useRef=function(e){return Vn().useRef(e)};te.useState=function(e){return Vn().useState(e)};te.version="17.0.2";y.exports=te;var V=y.exports,eu=TI({__proto__:null,default:V},[y.exports]),gp={exports:{}},Wt={},q0={exports:{}},G0={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var t,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var a=null,u=null,c=function(){if(a!==null)try{var R=e.unstable_now();a(!0,R),a=null}catch(z){throw setTimeout(c,0),z}};t=function(R){a!==null?setTimeout(t,0,R):(a=R,setTimeout(c,0))},n=function(R,z){u=setTimeout(R,z)},r=function(){clearTimeout(u)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,h=window.clearTimeout;if(typeof console!="undefined"){var m=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof m!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var v=!1,_=null,f=-1,p=5,g=0;e.unstable_shouldYield=function(){return e.unstable_now()>=g},i=function(){},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):p=0<R?Math.floor(1e3/R):5};var E=new MessageChannel,C=E.port2;E.port1.onmessage=function(){if(_!==null){var R=e.unstable_now();g=R+p;try{_(!0,R)?C.postMessage(null):(v=!1,_=null)}catch(z){throw C.postMessage(null),z}}else v=!1},t=function(R){_=R,v||(v=!0,C.postMessage(null))},n=function(R,z){f=d(function(){R(e.unstable_now())},z)},r=function(){h(f),f=-1}}function k(R,z){var Y=R.length;R.push(z);e:for(;;){var ue=Y-1>>>1,Se=R[ue];if(Se!==void 0&&0<M(Se,z))R[ue]=z,R[Y]=Se,Y=ue;else break e}}function I(R){return R=R[0],R===void 0?null:R}function O(R){var z=R[0];if(z!==void 0){var Y=R.pop();if(Y!==z){R[0]=Y;e:for(var ue=0,Se=R.length;ue<Se;){var Rt=2*(ue+1)-1,vt=R[Rt],an=Rt+1,le=R[an];if(vt!==void 0&&0>M(vt,Y))le!==void 0&&0>M(le,vt)?(R[ue]=le,R[an]=Y,ue=an):(R[ue]=vt,R[Rt]=Y,ue=Rt);else if(le!==void 0&&0>M(le,Y))R[ue]=le,R[an]=Y,ue=an;else break e}}return z}return null}function M(R,z){var Y=R.sortIndex-z.sortIndex;return Y!==0?Y:R.id-z.id}var A=[],ee=[],Ne=1,B=null,F=3,ie=!1,se=!1,_e=!1;function Me(R){for(var z=I(ee);z!==null;){if(z.callback===null)O(ee);else if(z.startTime<=R)O(ee),z.sortIndex=z.expirationTime,k(A,z);else break;z=I(ee)}}function Fe(R){if(_e=!1,Me(R),!se)if(I(A)!==null)se=!0,t(ct);else{var z=I(ee);z!==null&&n(Fe,z.startTime-R)}}function ct(R,z){se=!1,_e&&(_e=!1,r()),ie=!0;var Y=F;try{for(Me(z),B=I(A);B!==null&&(!(B.expirationTime>z)||R&&!e.unstable_shouldYield());){var ue=B.callback;if(typeof ue=="function"){B.callback=null,F=B.priorityLevel;var Se=ue(B.expirationTime<=z);z=e.unstable_now(),typeof Se=="function"?B.callback=Se:B===I(A)&&O(A),Me(z)}else O(A);B=I(A)}if(B!==null)var Rt=!0;else{var vt=I(ee);vt!==null&&n(Fe,vt.startTime-z),Rt=!1}return Rt}finally{B=null,F=Y,ie=!1}}var Gt=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){se||ie||(se=!0,t(ct))},e.unstable_getCurrentPriorityLevel=function(){return F},e.unstable_getFirstCallbackNode=function(){return I(A)},e.unstable_next=function(R){switch(F){case 1:case 2:case 3:var z=3;break;default:z=F}var Y=F;F=z;try{return R()}finally{F=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=Gt,e.unstable_runWithPriority=function(R,z){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var Y=F;F=R;try{return z()}finally{F=Y}},e.unstable_scheduleCallback=function(R,z,Y){var ue=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ue+Y:ue):Y=ue,R){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Y+Se,R={id:Ne++,callback:z,priorityLevel:R,startTime:Y,expirationTime:Se,sortIndex:-1},Y>ue?(R.sortIndex=Y,k(ee,R),I(A)===null&&R===I(ee)&&(_e?r():_e=!0,n(Fe,Y-ue))):(R.sortIndex=Se,k(A,R),se||ie||(se=!0,t(ct))),R},e.unstable_wrapCallback=function(R){var z=F;return function(){var Y=F;F=z;try{return R.apply(this,arguments)}finally{F=Y}}}})(G0);q0.exports=G0;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fc=y.exports,ye=b0,Ve=q0.exports;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!fc)throw Error(x(227));var K0=new Set,zo={};function yi(e,t){cs(e,t),cs(e+"Capture",t)}function cs(e,t){for(zo[e]=t,e=0;e<t.length;e++)K0.add(t[e])}var Un=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),DI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tv=Object.prototype.hasOwnProperty,nv={},rv={};function LI(e){return tv.call(rv,e)?!0:tv.call(nv,e)?!1:DI.test(e)?rv[e]=!0:(nv[e]=!0,!1)}function MI(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function FI(e,t,n,r){if(t===null||typeof t=="undefined"||MI(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function mt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var mp=/[\-:]([a-z])/g;function vp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mp,vp);Qe[t]=new mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mp,vp);Qe[t]=new mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mp,vp);Qe[t]=new mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new mt(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function yp(e,t,n,r){var i=Qe.hasOwnProperty(t)?Qe[t]:null,s=i!==null?i.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");s||(FI(t,n,i,r)&&(n=null),r||i===null?LI(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var _i=fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mo=60103,Vr=60106,Qn=60107,_p=60108,ko=60114,wp=60109,Ep=60110,pc=60112,xo=60113,tu=60120,gc=60115,Cp=60116,Tp=60121,Sp=60128,Y0=60129,Ip=60130,kd=60131;if(typeof Symbol=="function"&&Symbol.for){var $e=Symbol.for;mo=$e("react.element"),Vr=$e("react.portal"),Qn=$e("react.fragment"),_p=$e("react.strict_mode"),ko=$e("react.profiler"),wp=$e("react.provider"),Ep=$e("react.context"),pc=$e("react.forward_ref"),xo=$e("react.suspense"),tu=$e("react.suspense_list"),gc=$e("react.memo"),Cp=$e("react.lazy"),Tp=$e("react.block"),$e("react.scope"),Sp=$e("react.opaque.id"),Y0=$e("react.debug_trace_mode"),Ip=$e("react.offscreen"),kd=$e("react.legacy_hidden")}var iv=typeof Symbol=="function"&&Symbol.iterator;function Ks(e){return e===null||typeof e!="object"?null:(e=iv&&e[iv]||e["@@iterator"],typeof e=="function"?e:null)}var hh;function vo(e){if(hh===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hh=t&&t[1]||""}return`
`+hh+e}var dh=!1;function ha(e,t){if(!e||dh)return"";dh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(a){var r=a}Reflect.construct(e,[],t)}else{try{t.call()}catch(a){r=a}e.call(t.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var i=a.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=l);break}}}finally{dh=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vo(e):""}function $I(e){switch(e.tag){case 5:return vo(e.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return e=ha(e.type,!1),e;case 11:return e=ha(e.type.render,!1),e;case 22:return e=ha(e.type._render,!1),e;case 1:return e=ha(e.type,!0),e;default:return""}}function Wi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case Vr:return"Portal";case ko:return"Profiler";case _p:return"StrictMode";case xo:return"Suspense";case tu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ep:return(e.displayName||"Context")+".Consumer";case wp:return(e._context.displayName||"Context")+".Provider";case pc:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case gc:return Wi(e.type);case Tp:return Wi(e._render);case Cp:t=e._payload,e=e._init;try{return Wi(e(t))}catch{}}return null}function Er(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Q0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function UI(e){var t=Q0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function da(e){e._valueTracker||(e._valueTracker=UI(e))}function X0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Q0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function nu(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function xd(e,t){var n=t.checked;return ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function sv(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Er(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function J0(e,t){t=t.checked,t!=null&&yp(e,"checked",t,!1)}function Rd(e,t){J0(e,t);var n=Er(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Nd(e,t.type,n):t.hasOwnProperty("defaultValue")&&Nd(e,t.type,Er(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ov(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Nd(e,t,n){(t!=="number"||nu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function jI(e){var t="";return fc.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Pd(e,t){return e=ye({children:void 0},t),(t=jI(t.children))&&(e.children=t),e}function qi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Er(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ad(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lv(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Er(n)}}function Z0(e,t){var n=Er(t.value),r=Er(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function av(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var bd={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function ew(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Od(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ew(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fa,tw=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==bd.svg||"innerHTML"in e)e.innerHTML=t;else{for(fa=fa||document.createElement("div"),fa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ro={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},BI=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(e){BI.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ro[t]=Ro[e]})});function nw(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ro.hasOwnProperty(e)&&Ro[e]?(""+t).trim():t+"px"}function rw(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nw(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var VI=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dd(e,t){if(t){if(VI[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function Ld(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function kp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Md=null,Gi=null,Ki=null;function uv(e){if(e=Al(e)){if(typeof Md!="function")throw Error(x(280));var t=e.stateNode;t&&(t=Ec(t),Md(e.stateNode,e.type,t))}}function iw(e){Gi?Ki?Ki.push(e):Ki=[e]:Gi=e}function sw(){if(Gi){var e=Gi,t=Ki;if(Ki=Gi=null,uv(e),t)for(e=0;e<t.length;e++)uv(t[e])}}function xp(e,t){return e(t)}function ow(e,t,n,r,i){return e(t,n,r,i)}function Rp(){}var lw=xp,Hr=!1,fh=!1;function Np(){(Gi!==null||Ki!==null)&&(Rp(),sw())}function HI(e,t,n){if(fh)return e(t,n);fh=!0;try{return lw(e,t,n)}finally{fh=!1,Np()}}function qo(e,t){var n=e.stateNode;if(n===null)return null;var r=Ec(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var Fd=!1;if(Un)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){Fd=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{Fd=!1}function zI(e,t,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var No=!1,ru=null,iu=!1,$d=null,WI={onError:function(e){No=!0,ru=e}};function qI(e,t,n,r,i,s,o,l,a){No=!1,ru=null,zI.apply(WI,arguments)}function GI(e,t,n,r,i,s,o,l,a){if(qI.apply(this,arguments),No){if(No){var u=ru;No=!1,ru=null}else throw Error(x(198));iu||(iu=!0,$d=u)}}function wi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function aw(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cv(e){if(wi(e)!==e)throw Error(x(188))}function KI(e){var t=e.alternate;if(!t){if(t=wi(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return cv(i),e;if(s===r)return cv(i),t;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function uw(e){if(e=KI(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function hv(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var cw,Pp,hw,dw,Ud=!1,cn=[],lr=null,ar=null,ur=null,Go=new Map,Ko=new Map,Qs=[],dv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jd(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function fv(e,t){switch(e){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(t.pointerId)}}function Xs(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e=jd(t,n,r,i,s),t!==null&&(t=Al(t),t!==null&&Pp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function YI(e,t,n,r,i){switch(t){case"focusin":return lr=Xs(lr,e,t,n,r,i),!0;case"dragenter":return ar=Xs(ar,e,t,n,r,i),!0;case"mouseover":return ur=Xs(ur,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Go.set(s,Xs(Go.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ko.set(s,Xs(Ko.get(s)||null,e,t,n,r,i)),!0}return!1}function QI(e){var t=zr(e.target);if(t!==null){var n=wi(t);if(n!==null){if(t=n.tag,t===13){if(t=aw(n),t!==null){e.blockedOn=t,dw(e.lanePriority,function(){Ve.unstable_runWithPriority(e.priority,function(){hw(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Da(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Dp(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=Al(n),t!==null&&Pp(t),e.blockedOn=n,!1;t.shift()}return!0}function pv(e,t,n){Da(e)&&n.delete(t)}function XI(){for(Ud=!1;0<cn.length;){var e=cn[0];if(e.blockedOn!==null){e=Al(e.blockedOn),e!==null&&cw(e);break}for(var t=e.targetContainers;0<t.length;){var n=Dp(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&cn.shift()}lr!==null&&Da(lr)&&(lr=null),ar!==null&&Da(ar)&&(ar=null),ur!==null&&Da(ur)&&(ur=null),Go.forEach(pv),Ko.forEach(pv)}function Js(e,t){e.blockedOn===t&&(e.blockedOn=null,Ud||(Ud=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,XI)))}function fw(e){function t(i){return Js(i,e)}if(0<cn.length){Js(cn[0],e);for(var n=1;n<cn.length;n++){var r=cn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lr!==null&&Js(lr,e),ar!==null&&Js(ar,e),ur!==null&&Js(ur,e),Go.forEach(t),Ko.forEach(t),n=0;n<Qs.length;n++)r=Qs[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Qs.length&&(n=Qs[0],n.blockedOn===null);)QI(n),n.blockedOn===null&&Qs.shift()}function pa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Di={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},ph={},pw={};Un&&(pw=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function mc(e){if(ph[e])return ph[e];if(!Di[e])return e;var t=Di[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pw)return ph[e]=t[n];return e}var gw=mc("animationend"),mw=mc("animationiteration"),vw=mc("animationstart"),yw=mc("transitionend"),_w=new Map,Ap=new Map,JI=["abort","abort",gw,"animationEnd",mw,"animationIteration",vw,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",yw,"transitionEnd","waiting","waiting"];function bp(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),Ap.set(r,t),_w.set(r,i),yi(i,[r])}}var ZI=Ve.unstable_now;ZI();var ce=8;function bi(e){if((1&e)!==0)return ce=15,1;if((2&e)!==0)return ce=14,2;if((4&e)!==0)return ce=13,4;var t=24&e;return t!==0?(ce=12,t):(e&32)!==0?(ce=11,32):(t=192&e,t!==0?(ce=10,t):(e&256)!==0?(ce=9,256):(t=3584&e,t!==0?(ce=8,t):(e&4096)!==0?(ce=7,4096):(t=4186112&e,t!==0?(ce=6,t):(t=62914560&e,t!==0?(ce=5,t):e&67108864?(ce=4,67108864):(e&134217728)!==0?(ce=3,134217728):(t=805306368&e,t!==0?(ce=2,t):(1073741824&e)!==0?(ce=1,1073741824):(ce=8,e))))))}function ek(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function tk(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(x(358,e))}}function Yo(e,t){var n=e.pendingLanes;if(n===0)return ce=0;var r=0,i=0,s=e.expiredLanes,o=e.suspendedLanes,l=e.pingedLanes;if(s!==0)r=s,i=ce=15;else if(s=n&134217727,s!==0){var a=s&~o;a!==0?(r=bi(a),i=ce):(l&=s,l!==0&&(r=bi(l),i=ce))}else s=n&~o,s!==0?(r=bi(s),i=ce):l!==0&&(r=bi(l),i=ce);if(r===0)return 0;if(r=31-Cr(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&o)===0){if(bi(t),i<=ce)return t;ce=i}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Cr(t),i=1<<n,r|=e[n],t&=~i;return r}function ww(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function su(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=Oi(24&~t),e===0?su(10,t):e;case 10:return e=Oi(192&~t),e===0?su(8,t):e;case 8:return e=Oi(3584&~t),e===0&&(e=Oi(4186112&~t),e===0&&(e=512)),e;case 2:return t=Oi(805306368&~t),t===0&&(t=268435456),t}throw Error(x(358,e))}function Oi(e){return e&-e}function gh(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vc(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-Cr(t),e[t]=n}var Cr=Math.clz32?Math.clz32:ik,nk=Math.log,rk=Math.LN2;function ik(e){return e===0?32:31-(nk(e)/rk|0)|0}var sk=Ve.unstable_UserBlockingPriority,ok=Ve.unstable_runWithPriority,La=!0;function lk(e,t,n,r){Hr||Rp();var i=Op,s=Hr;Hr=!0;try{ow(i,e,t,n,r)}finally{(Hr=s)||Np()}}function ak(e,t,n,r){ok(sk,Op.bind(null,e,t,n,r))}function Op(e,t,n,r){if(La){var i;if((i=(t&4)===0)&&0<cn.length&&-1<dv.indexOf(e))e=jd(null,e,t,n,r),cn.push(e);else{var s=Dp(e,t,n,r);if(s===null)i&&fv(e,r);else{if(i){if(-1<dv.indexOf(e)){e=jd(s,e,t,n,r),cn.push(e);return}if(YI(s,e,t,n,r))return;fv(e,r)}Ow(e,t,r,null,n)}}}}function Dp(e,t,n,r){var i=kp(r);if(i=zr(i),i!==null){var s=wi(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=aw(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return Ow(e,t,r,i,n),null}var nr=null,Lp=null,Ma=null;function Ew(){if(Ma)return Ma;var e,t=Lp,n=t.length,r,i="value"in nr?nr.value:nr.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Ma=i.slice(e,1<r?1-r:void 0)}function Fa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ga(){return!0}function gv(){return!1}function Dt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ga:gv,this.isPropagationStopped=gv,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),t}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mp=Dt(Is),Pl=ye({},Is,{view:0,detail:0}),uk=Dt(Pl),mh,vh,Zs,yc=ye({},Pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zs&&(Zs&&e.type==="mousemove"?(mh=e.screenX-Zs.screenX,vh=e.screenY-Zs.screenY):vh=mh=0,Zs=e),mh)},movementY:function(e){return"movementY"in e?e.movementY:vh}}),mv=Dt(yc),ck=ye({},yc,{dataTransfer:0}),hk=Dt(ck),dk=ye({},Pl,{relatedTarget:0}),yh=Dt(dk),fk=ye({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),pk=Dt(fk),gk=ye({},Is,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mk=Dt(gk),vk=ye({},Is,{data:0}),vv=Dt(vk),yk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_k={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ek(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wk[e])?!!t[e]:!1}function Fp(){return Ek}var Ck=ye({},Pl,{key:function(e){if(e.key){var t=yk[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_k[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fp,charCode:function(e){return e.type==="keypress"?Fa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tk=Dt(Ck),Sk=ye({},yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yv=Dt(Sk),Ik=ye({},Pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fp}),kk=Dt(Ik),xk=ye({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rk=Dt(xk),Nk=ye({},yc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pk=Dt(Nk),Ak=[9,13,27,32],$p=Un&&"CompositionEvent"in window,Po=null;Un&&"documentMode"in document&&(Po=document.documentMode);var bk=Un&&"TextEvent"in window&&!Po,Cw=Un&&(!$p||Po&&8<Po&&11>=Po),_v=String.fromCharCode(32),wv=!1;function Tw(e,t){switch(e){case"keyup":return Ak.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sw(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Li=!1;function Ok(e,t){switch(e){case"compositionend":return Sw(t);case"keypress":return t.which!==32?null:(wv=!0,_v);case"textInput":return e=t.data,e===_v&&wv?null:e;default:return null}}function Dk(e,t){if(Li)return e==="compositionend"||!$p&&Tw(e,t)?(e=Ew(),Ma=Lp=nr=null,Li=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cw&&t.locale!=="ko"?null:t.data;default:return null}}var Lk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ev(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lk[e.type]:t==="textarea"}function Iw(e,t,n,r){iw(r),t=ou(t,"onChange"),0<t.length&&(n=new Mp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ao=null,Qo=null;function Mk(e){Pw(e,0)}function _c(e){var t=Fi(e);if(X0(t))return e}function Fk(e,t){if(e==="change")return t}var kw=!1;if(Un){var _h;if(Un){var wh="oninput"in document;if(!wh){var Cv=document.createElement("div");Cv.setAttribute("oninput","return;"),wh=typeof Cv.oninput=="function"}_h=wh}else _h=!1;kw=_h&&(!document.documentMode||9<document.documentMode)}function Tv(){Ao&&(Ao.detachEvent("onpropertychange",xw),Qo=Ao=null)}function xw(e){if(e.propertyName==="value"&&_c(Qo)){var t=[];if(Iw(t,Qo,e,kp(e)),e=Mk,Hr)e(t);else{Hr=!0;try{xp(e,t)}finally{Hr=!1,Np()}}}}function $k(e,t,n){e==="focusin"?(Tv(),Ao=t,Qo=n,Ao.attachEvent("onpropertychange",xw)):e==="focusout"&&Tv()}function Uk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _c(Qo)}function jk(e,t){if(e==="click")return _c(t)}function Bk(e,t){if(e==="input"||e==="change")return _c(t)}function Vk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:Vk,Hk=Object.prototype.hasOwnProperty;function Xo(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Hk.call(t,n[r])||!Ft(e[n[r]],t[n[r]]))return!1;return!0}function Sv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Iv(e,t){var n=Sv(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sv(n)}}function Rw(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rw(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kv(){for(var e=window,t=nu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=nu(e.document)}return t}function Bd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var zk=Un&&"documentMode"in document&&11>=document.documentMode,Mi=null,Vd=null,bo=null,Hd=!1;function xv(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hd||Mi==null||Mi!==nu(r)||(r=Mi,"selectionStart"in r&&Bd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&Xo(bo,r)||(bo=r,r=ou(Vd,"onSelect"),0<r.length&&(t=new Mp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mi)))}bp("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);bp("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);bp(JI,2);for(var Rv="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Eh=0;Eh<Rv.length;Eh++)Ap.set(Rv[Eh],0);cs("onMouseEnter",["mouseout","mouseover"]);cs("onMouseLeave",["mouseout","mouseover"]);cs("onPointerEnter",["pointerout","pointerover"]);cs("onPointerLeave",["pointerout","pointerover"]);yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nw=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function Nv(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,GI(r,t,void 0,e),e.currentTarget=null}function Pw(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Nv(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Nv(i,l,u),s=a}}}if(iu)throw e=$d,iu=!1,$d=null,e}function de(e,t){var n=Lw(t),r=e+"__bubble";n.has(r)||(bw(t,e,2,!1),n.add(r))}var Pv="_reactListening"+Math.random().toString(36).slice(2);function Aw(e){e[Pv]||(e[Pv]=!0,K0.forEach(function(t){Nw.has(t)||Av(t,!1,e,null),Av(t,!0,e,null)}))}function Av(e,t,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(e==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!t&&Nw.has(e)){if(e!=="scroll")return;i|=2,s=r}var o=Lw(s),l=e+"__"+(t?"capture":"bubble");o.has(l)||(t&&(i|=4),bw(s,e,i,t),o.add(l))}function bw(e,t,n,r){var i=Ap.get(t);switch(i===void 0?2:i){case 0:i=lk;break;case 1:i=ak;break;default:i=Op}n=i.bind(null,t,n,e),i=void 0,!Fd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ow(e,t,n,r,i){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=zr(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}HI(function(){var u=s,c=kp(n),d=[];e:{var h=_w.get(e);if(h!==void 0){var m=Mp,v=e;switch(e){case"keypress":if(Fa(n)===0)break e;case"keydown":case"keyup":m=Tk;break;case"focusin":v="focus",m=yh;break;case"focusout":v="blur",m=yh;break;case"beforeblur":case"afterblur":m=yh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=mv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=hk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=kk;break;case gw:case mw:case vw:m=pk;break;case yw:m=Rk;break;case"scroll":m=uk;break;case"wheel":m=Pk;break;case"copy":case"cut":case"paste":m=mk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=yv}var _=(t&4)!==0,f=!_&&e==="scroll",p=_?h!==null?h+"Capture":null:h;_=[];for(var g=u,E;g!==null;){E=g;var C=E.stateNode;if(E.tag===5&&C!==null&&(E=C,p!==null&&(C=qo(g,p),C!=null&&_.push(Jo(g,C,E)))),f)break;g=g.return}0<_.length&&(h=new m(h,v,null,n,c),d.push({event:h,listeners:_}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&(t&16)===0&&(v=n.relatedTarget||n.fromElement)&&(zr(v)||v[ks]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?zr(v):null,v!==null&&(f=wi(v),v!==f||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(_=mv,C="onMouseLeave",p="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(_=yv,C="onPointerLeave",p="onPointerEnter",g="pointer"),f=m==null?h:Fi(m),E=v==null?h:Fi(v),h=new _(C,g+"leave",m,n,c),h.target=f,h.relatedTarget=E,C=null,zr(c)===u&&(_=new _(p,g+"enter",v,n,c),_.target=E,_.relatedTarget=f,C=_),f=C,m&&v)t:{for(_=m,p=v,g=0,E=_;E;E=Ri(E))g++;for(E=0,C=p;C;C=Ri(C))E++;for(;0<g-E;)_=Ri(_),g--;for(;0<E-g;)p=Ri(p),E--;for(;g--;){if(_===p||p!==null&&_===p.alternate)break t;_=Ri(_),p=Ri(p)}_=null}else _=null;m!==null&&bv(d,h,m,_,!1),v!==null&&f!==null&&bv(d,f,v,_,!0)}}e:{if(h=u?Fi(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var k=Fk;else if(Ev(h))if(kw)k=Bk;else{k=Uk;var I=$k}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=jk);if(k&&(k=k(e,u))){Iw(d,k,n,c);break e}I&&I(e,h,u),e==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&Nd(h,"number",h.value)}switch(I=u?Fi(u):window,e){case"focusin":(Ev(I)||I.contentEditable==="true")&&(Mi=I,Vd=u,bo=null);break;case"focusout":bo=Vd=Mi=null;break;case"mousedown":Hd=!0;break;case"contextmenu":case"mouseup":case"dragend":Hd=!1,xv(d,n,c);break;case"selectionchange":if(zk)break;case"keydown":case"keyup":xv(d,n,c)}var O;if($p)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Li?Tw(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(Cw&&n.locale!=="ko"&&(Li||M!=="onCompositionStart"?M==="onCompositionEnd"&&Li&&(O=Ew()):(nr=c,Lp="value"in nr?nr.value:nr.textContent,Li=!0)),I=ou(u,M),0<I.length&&(M=new vv(M,e,null,n,c),d.push({event:M,listeners:I}),O?M.data=O:(O=Sw(n),O!==null&&(M.data=O)))),(O=bk?Ok(e,n):Dk(e,n))&&(u=ou(u,"onBeforeInput"),0<u.length&&(c=new vv("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=O))}Pw(d,t)})}function Jo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ou(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=qo(e,n),s!=null&&r.unshift(Jo(e,s,i)),s=qo(e,t),s!=null&&r.push(Jo(e,s,i))),e=e.return}return r}function Ri(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function bv(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=qo(n,s),a!=null&&o.unshift(Jo(n,a,l))):i||(a=qo(n,s),a!=null&&o.push(Jo(n,a,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}function lu(){}var Ch=null,Th=null;function Dw(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function zd(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ov=typeof setTimeout=="function"?setTimeout:void 0,Wk=typeof clearTimeout=="function"?clearTimeout:void 0;function Up(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function Yi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function Dv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sh=0;function qk(e){return{$$typeof:Sp,toString:e,valueOf:e}}var wc=Math.random().toString(36).slice(2),rr="__reactFiber$"+wc,au="__reactProps$"+wc,ks="__reactContainer$"+wc,Lv="__reactEvents$"+wc;function zr(e){var t=e[rr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ks]||n[rr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Dv(e);e!==null;){if(n=e[rr])return n;e=Dv(e)}return t}e=n,n=e.parentNode}return null}function Al(e){return e=e[rr]||e[ks],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function Ec(e){return e[au]||null}function Lw(e){var t=e[Lv];return t===void 0&&(t=e[Lv]=new Set),t}var Wd=[],$i=-1;function Rr(e){return{current:e}}function ge(e){0>$i||(e.current=Wd[$i],Wd[$i]=null,$i--)}function Ce(e,t){$i++,Wd[$i]=e.current,e.current=t}var Tr={},at=Rr(Tr),Tt=Rr(!1),si=Tr;function hs(e,t){var n=e.type.contextTypes;if(!n)return Tr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function St(e){return e=e.childContextTypes,e!=null}function uu(){ge(Tt),ge(at)}function Mv(e,t,n){if(at.current!==Tr)throw Error(x(168));Ce(at,t),Ce(Tt,n)}function Mw(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,Wi(t)||"Unknown",i));return ye({},n,r)}function $a(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tr,si=at.current,Ce(at,e),Ce(Tt,Tt.current),!0}function Fv(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=Mw(e,t,si),r.__reactInternalMemoizedMergedChildContext=e,ge(Tt),ge(at),Ce(at,e)):ge(Tt),Ce(Tt,n)}var jp=null,Zr=null,Gk=Ve.unstable_runWithPriority,Bp=Ve.unstable_scheduleCallback,qd=Ve.unstable_cancelCallback,Kk=Ve.unstable_shouldYield,$v=Ve.unstable_requestPaint,Gd=Ve.unstable_now,Yk=Ve.unstable_getCurrentPriorityLevel,Cc=Ve.unstable_ImmediatePriority,Fw=Ve.unstable_UserBlockingPriority,$w=Ve.unstable_NormalPriority,Uw=Ve.unstable_LowPriority,jw=Ve.unstable_IdlePriority,Ih={},Qk=$v!==void 0?$v:function(){},kn=null,Ua=null,kh=!1,Uv=Gd(),rt=1e4>Uv?Gd:function(){return Gd()-Uv};function ds(){switch(Yk()){case Cc:return 99;case Fw:return 98;case $w:return 97;case Uw:return 96;case jw:return 95;default:throw Error(x(332))}}function Bw(e){switch(e){case 99:return Cc;case 98:return Fw;case 97:return $w;case 96:return Uw;case 95:return jw;default:throw Error(x(332))}}function oi(e,t){return e=Bw(e),Gk(e,t)}function Zo(e,t,n){return e=Bw(e),Bp(e,t,n)}function Cn(){if(Ua!==null){var e=Ua;Ua=null,qd(e)}Vw()}function Vw(){if(!kh&&kn!==null){kh=!0;var e=0;try{var t=kn;oi(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),kn=null}catch(n){throw kn!==null&&(kn=kn.slice(e+1)),Bp(Cc,Cn),n}finally{kh=!1}}}var Xk=_i.ReactCurrentBatchConfig;function Qt(e,t){if(e&&e.defaultProps){t=ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var cu=Rr(null),hu=null,Ui=null,du=null;function Vp(){du=Ui=hu=null}function Hp(e){var t=cu.current;ge(cu),e.type._context._currentValue=t}function Hw(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function Qi(e,t){hu=e,du=Ui=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Zt=!0),e.firstContext=null)}function Bt(e,t){if(du!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(du=e,t=1073741823),t={context:e,observedBits:t,next:null},Ui===null){if(hu===null)throw Error(x(308));Ui=t,hu.dependencies={lanes:0,firstContext:t,responders:null}}else Ui=Ui.next=t;return e._currentValue}var Yn=!1;function zp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function zw(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function cr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hr(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function jv(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function el(e,t,n,r){var i=e.updateQueue;Yn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=e.alternate;if(c!==null){c=c.updateQueue;var d=c.lastBaseUpdate;d!==o&&(d===null?c.firstBaseUpdate=u:d.next=u,c.lastBaseUpdate=a)}}if(s!==null){d=i.baseState,o=0,c=u=a=null;do{l=s.lane;var h=s.eventTime;if((r&l)===l){c!==null&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=e,v=s;switch(l=t,h=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){d=m.call(h,d,l);break e}d=m;break e;case 3:m.flags=m.flags&-4097|64;case 0:if(m=v.payload,l=typeof m=="function"?m.call(h,d,l):m,l==null)break e;d=ye({},d,l);break e;case 2:Yn=!0}}s.callback!==null&&(e.flags|=32,l=i.effects,l===null?i.effects=[s]:l.push(s))}else h={eventTime:h,lane:l,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=h,a=d):c=c.next=h,o|=l;if(s=s.next,s===null){if(l=i.shared.pending,l===null)break;s=l.next,l.next=null,i.lastBaseUpdate=l,i.shared.pending=null}}while(1);c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,Ol|=o,e.lanes=o,e.memoizedState=d}}function Bv(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var Ww=new fc.Component().refs;function fu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Tc={isMounted:function(e){return(e=e._reactInternals)?wi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=At(),i=dr(e),s=cr(r,i);s.payload=t,n!=null&&(s.callback=n),hr(e,s),fr(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=At(),i=dr(e),s=cr(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),hr(e,s),fr(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=At(),r=dr(e),i=cr(n,r);i.tag=2,t!=null&&(i.callback=t),hr(e,i),fr(e,r,n)}};function Vv(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Xo(n,r)||!Xo(i,s):!0}function qw(e,t,n){var r=!1,i=Tr,s=t.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=St(t)?si:at.current,r=t.contextTypes,s=(r=r!=null)?hs(e,i):Tr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Tc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Hv(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Tc.enqueueReplaceState(t,t.state,null)}function Kd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ww,zp(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=St(t)?si:at.current,i.context=hs(e,s)),el(e,n,i,r),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(fu(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Tc.enqueueReplaceState(i,i.state,null),el(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4)}var ma=Array.isArray;function eo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var o=r.refs;o===Ww&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function va(e,t){if(e.type!=="textarea")throw Error(x(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function Gw(e){function t(f,p){if(e){var g=f.lastEffect;g!==null?(g.nextEffect=p,f.lastEffect=p):f.firstEffect=f.lastEffect=p,p.nextEffect=null,p.flags=8}}function n(f,p){if(!e)return null;for(;p!==null;)t(f,p),p=p.sibling;return null}function r(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function i(f,p){return f=Ir(f,p),f.index=0,f.sibling=null,f}function s(f,p,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<p?(f.flags=2,p):g):(f.flags=2,p)):p}function o(f){return e&&f.alternate===null&&(f.flags=2),f}function l(f,p,g,E){return p===null||p.tag!==6?(p=Ah(g,f.mode,E),p.return=f,p):(p=i(p,g),p.return=f,p)}function a(f,p,g,E){return p!==null&&p.elementType===g.type?(E=i(p,g.props),E.ref=eo(f,p,g),E.return=f,E):(E=Ha(g.type,g.key,g.props,null,f.mode,E),E.ref=eo(f,p,g),E.return=f,E)}function u(f,p,g,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=bh(g,f.mode,E),p.return=f,p):(p=i(p,g.children||[]),p.return=f,p)}function c(f,p,g,E,C){return p===null||p.tag!==7?(p=es(g,f.mode,E,C),p.return=f,p):(p=i(p,g),p.return=f,p)}function d(f,p,g){if(typeof p=="string"||typeof p=="number")return p=Ah(""+p,f.mode,g),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case mo:return g=Ha(p.type,p.key,p.props,null,f.mode,g),g.ref=eo(f,null,p),g.return=f,g;case Vr:return p=bh(p,f.mode,g),p.return=f,p}if(ma(p)||Ks(p))return p=es(p,f.mode,g,null),p.return=f,p;va(f,p)}return null}function h(f,p,g,E){var C=p!==null?p.key:null;if(typeof g=="string"||typeof g=="number")return C!==null?null:l(f,p,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case mo:return g.key===C?g.type===Qn?c(f,p,g.props.children,E,C):a(f,p,g,E):null;case Vr:return g.key===C?u(f,p,g,E):null}if(ma(g)||Ks(g))return C!==null?null:c(f,p,g,E,null);va(f,g)}return null}function m(f,p,g,E,C){if(typeof E=="string"||typeof E=="number")return f=f.get(g)||null,l(p,f,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case mo:return f=f.get(E.key===null?g:E.key)||null,E.type===Qn?c(p,f,E.props.children,C,E.key):a(p,f,E,C);case Vr:return f=f.get(E.key===null?g:E.key)||null,u(p,f,E,C)}if(ma(E)||Ks(E))return f=f.get(g)||null,c(p,f,E,C,null);va(p,E)}return null}function v(f,p,g,E){for(var C=null,k=null,I=p,O=p=0,M=null;I!==null&&O<g.length;O++){I.index>O?(M=I,I=null):M=I.sibling;var A=h(f,I,g[O],E);if(A===null){I===null&&(I=M);break}e&&I&&A.alternate===null&&t(f,I),p=s(A,p,O),k===null?C=A:k.sibling=A,k=A,I=M}if(O===g.length)return n(f,I),C;if(I===null){for(;O<g.length;O++)I=d(f,g[O],E),I!==null&&(p=s(I,p,O),k===null?C=I:k.sibling=I,k=I);return C}for(I=r(f,I);O<g.length;O++)M=m(I,f,O,g[O],E),M!==null&&(e&&M.alternate!==null&&I.delete(M.key===null?O:M.key),p=s(M,p,O),k===null?C=M:k.sibling=M,k=M);return e&&I.forEach(function(ee){return t(f,ee)}),C}function _(f,p,g,E){var C=Ks(g);if(typeof C!="function")throw Error(x(150));if(g=C.call(g),g==null)throw Error(x(151));for(var k=C=null,I=p,O=p=0,M=null,A=g.next();I!==null&&!A.done;O++,A=g.next()){I.index>O?(M=I,I=null):M=I.sibling;var ee=h(f,I,A.value,E);if(ee===null){I===null&&(I=M);break}e&&I&&ee.alternate===null&&t(f,I),p=s(ee,p,O),k===null?C=ee:k.sibling=ee,k=ee,I=M}if(A.done)return n(f,I),C;if(I===null){for(;!A.done;O++,A=g.next())A=d(f,A.value,E),A!==null&&(p=s(A,p,O),k===null?C=A:k.sibling=A,k=A);return C}for(I=r(f,I);!A.done;O++,A=g.next())A=m(I,f,O,A.value,E),A!==null&&(e&&A.alternate!==null&&I.delete(A.key===null?O:A.key),p=s(A,p,O),k===null?C=A:k.sibling=A,k=A);return e&&I.forEach(function(Ne){return t(f,Ne)}),C}return function(f,p,g,E){var C=typeof g=="object"&&g!==null&&g.type===Qn&&g.key===null;C&&(g=g.props.children);var k=typeof g=="object"&&g!==null;if(k)switch(g.$$typeof){case mo:e:{for(k=g.key,C=p;C!==null;){if(C.key===k){switch(C.tag){case 7:if(g.type===Qn){n(f,C.sibling),p=i(C,g.props.children),p.return=f,f=p;break e}break;default:if(C.elementType===g.type){n(f,C.sibling),p=i(C,g.props),p.ref=eo(f,C,g),p.return=f,f=p;break e}}n(f,C);break}else t(f,C);C=C.sibling}g.type===Qn?(p=es(g.props.children,f.mode,E,g.key),p.return=f,f=p):(E=Ha(g.type,g.key,g.props,null,f.mode,E),E.ref=eo(f,p,g),E.return=f,f=E)}return o(f);case Vr:e:{for(C=g.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(f,p.sibling),p=i(p,g.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else t(f,p);p=p.sibling}p=bh(g,f.mode,E),p.return=f,f=p}return o(f)}if(typeof g=="string"||typeof g=="number")return g=""+g,p!==null&&p.tag===6?(n(f,p.sibling),p=i(p,g),p.return=f,f=p):(n(f,p),p=Ah(g,f.mode,E),p.return=f,f=p),o(f);if(ma(g))return v(f,p,g,E);if(Ks(g))return _(f,p,g,E);if(k&&va(f,g),typeof g=="undefined"&&!C)switch(f.tag){case 1:case 22:case 0:case 11:case 15:throw Error(x(152,Wi(f.type)||"Component"))}return n(f,p)}}var pu=Gw(!0),Kw=Gw(!1),bl={},mn=Rr(bl),tl=Rr(bl),nl=Rr(bl);function Wr(e){if(e===bl)throw Error(x(174));return e}function Yd(e,t){switch(Ce(nl,t),Ce(tl,e),Ce(mn,bl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Od(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Od(t,e)}ge(mn),Ce(mn,t)}function fs(){ge(mn),ge(tl),ge(nl)}function zv(e){Wr(nl.current);var t=Wr(mn.current),n=Od(t,e.type);t!==n&&(Ce(tl,e),Ce(mn,n))}function Wp(e){tl.current===e&&(ge(mn),ge(tl))}var Ee=Rr(0);function gu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rn=null,ir=null,vn=!1;function Yw(e,t){var n=$t(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Wv(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function Qd(e){if(vn){var t=ir;if(t){var n=t;if(!Wv(e,t)){if(t=Yi(n.nextSibling),!t||!Wv(e,t)){e.flags=e.flags&-1025|2,vn=!1,Rn=e;return}Yw(Rn,n)}Rn=e,ir=Yi(t.firstChild)}else e.flags=e.flags&-1025|2,vn=!1,Rn=e}}function qv(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Rn=e}function ya(e){if(e!==Rn)return!1;if(!vn)return qv(e),vn=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!zd(t,e.memoizedProps))for(t=ir;t;)Yw(e,t),t=Yi(t.nextSibling);if(qv(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ir=Yi(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ir=null}}else ir=Rn?Yi(e.stateNode.nextSibling):null;return!0}function xh(){ir=Rn=null,vn=!1}var Xi=[];function qp(){for(var e=0;e<Xi.length;e++)Xi[e]._workInProgressVersionPrimary=null;Xi.length=0}var Oo=_i.ReactCurrentDispatcher,jt=_i.ReactCurrentBatchConfig,rl=0,ke=null,Xe=null,qe=null,mu=!1,Do=!1;function yt(){throw Error(x(321))}function Gp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ft(e[n],t[n]))return!1;return!0}function Kp(e,t,n,r,i,s){if(rl=s,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oo.current=e===null||e.memoizedState===null?Zk:ex,e=n(r,i),Do){s=0;do{if(Do=!1,!(25>s))throw Error(x(301));s+=1,qe=Xe=null,t.updateQueue=null,Oo.current=tx,e=n(r,i)}while(Do)}if(Oo.current=wu,t=Xe!==null&&Xe.next!==null,rl=0,qe=Xe=ke=null,mu=!1,t)throw Error(x(300));return e}function qr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?ke.memoizedState=qe=e:qe=qe.next=e,qe}function Ei(){if(Xe===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=qe===null?ke.memoizedState:qe.next;if(t!==null)qe=t,Xe=e;else{if(e===null)throw Error(x(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},qe===null?ke.memoizedState=qe=e:qe=qe.next=e}return qe}function hn(e,t){return typeof t=="function"?t(e):t}function to(e){var t=Ei(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=Xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var l=o=s=null,a=i;do{var u=a.lane;if((rl&u)===u)l!==null&&(l=l.next={lane:0,action:a.action,eagerReducer:a.eagerReducer,eagerState:a.eagerState,next:null}),r=a.eagerReducer===e?a.eagerState:e(r,a.action);else{var c={lane:u,action:a.action,eagerReducer:a.eagerReducer,eagerState:a.eagerState,next:null};l===null?(o=l=c,s=r):l=l.next=c,ke.lanes|=u,Ol|=u}a=a.next}while(a!==null&&a!==i);l===null?s=r:l.next=o,Ft(r,t.memoizedState)||(Zt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function no(e){var t=Ei(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Ft(s,t.memoizedState)||(Zt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Gv(e,t,n){var r=t._getVersion;r=r(t._source);var i=t._workInProgressVersionPrimary;if(i!==null?e=i===r:(e=e.mutableReadLanes,(e=(rl&e)===e)&&(t._workInProgressVersionPrimary=r,Xi.push(t))),e)return n(t._source);throw Xi.push(t),Error(x(350))}function Qw(e,t,n,r){var i=gt;if(i===null)throw Error(x(349));var s=t._getVersion,o=s(t._source),l=Oo.current,a=l.useState(function(){return Gv(i,t,n)}),u=a[1],c=a[0];a=qe;var d=e.memoizedState,h=d.refs,m=h.getSnapshot,v=d.source;d=d.subscribe;var _=ke;return e.memoizedState={refs:h,source:t,subscribe:r},l.useEffect(function(){h.getSnapshot=n,h.setSnapshot=u;var f=s(t._source);if(!Ft(o,f)){f=n(t._source),Ft(c,f)||(u(f),f=dr(_),i.mutableReadLanes|=f&i.pendingLanes),f=i.mutableReadLanes,i.entangledLanes|=f;for(var p=i.entanglements,g=f;0<g;){var E=31-Cr(g),C=1<<E;p[E]|=f,g&=~C}}},[n,t,r]),l.useEffect(function(){return r(t._source,function(){var f=h.getSnapshot,p=h.setSnapshot;try{p(f(t._source));var g=dr(_);i.mutableReadLanes|=g&i.pendingLanes}catch(E){p(function(){throw E})}})},[t,r]),Ft(m,n)&&Ft(v,t)&&Ft(d,r)||(e={pending:null,dispatch:null,lastRenderedReducer:hn,lastRenderedState:c},e.dispatch=u=Xp.bind(null,ke,e),a.queue=e,a.baseQueue=null,c=Gv(i,t,n),a.memoizedState=a.baseState=c),c}function Xw(e,t,n){var r=Ei();return Qw(r,e,t,n)}function ro(e){var t=qr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:hn,lastRenderedState:e},e=e.dispatch=Xp.bind(null,ke,e),[t.memoizedState,e]}function vu(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Kv(e){var t=qr();return e={current:e},t.memoizedState=e}function yu(){return Ei().memoizedState}function Xd(e,t,n,r){var i=qr();ke.flags|=e,i.memoizedState=vu(1|t,n,void 0,r===void 0?null:r)}function Yp(e,t,n,r){var i=Ei();r=r===void 0?null:r;var s=void 0;if(Xe!==null){var o=Xe.memoizedState;if(s=o.destroy,r!==null&&Gp(r,o.deps)){vu(t,n,s,r);return}}ke.flags|=e,i.memoizedState=vu(1|t,n,s,r)}function Yv(e,t){return Xd(516,4,e,t)}function _u(e,t){return Yp(516,4,e,t)}function Jw(e,t){return Yp(4,2,e,t)}function Zw(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function eE(e,t,n){return n=n!=null?n.concat([e]):null,Yp(4,2,Zw.bind(null,t,e),n)}function Qp(){}function tE(e,t){var n=Ei();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nE(e,t){var n=Ei();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jk(e,t){var n=ds();oi(98>n?98:n,function(){e(!0)}),oi(97<n?97:n,function(){var r=jt.transition;jt.transition=1;try{e(!1),t()}finally{jt.transition=r}})}function Xp(e,t,n){var r=At(),i=dr(e),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=t.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),t.pending=s,o=e.alternate,e===ke||o!==null&&o===ke)Do=mu=!0;else{if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(s.eagerReducer=o,s.eagerState=a,Ft(a,l))return}catch{}finally{}fr(e,i,r)}}var wu={readContext:Bt,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useOpaqueIdentifier:yt,unstable_isNewReconciler:!1},Zk={readContext:Bt,useCallback:function(e,t){return qr().memoizedState=[e,t===void 0?null:t],e},useContext:Bt,useEffect:Yv,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xd(4,2,Zw.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xd(4,2,e,t)},useMemo:function(e,t){var n=qr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qr();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Xp.bind(null,ke,e),[r.memoizedState,e]},useRef:Kv,useState:ro,useDebugValue:Qp,useDeferredValue:function(e){var t=ro(e),n=t[0],r=t[1];return Yv(function(){var i=jt.transition;jt.transition=1;try{r(e)}finally{jt.transition=i}},[e]),n},useTransition:function(){var e=ro(!1),t=e[0];return e=Jk.bind(null,e[1]),Kv(e),[e,t]},useMutableSource:function(e,t,n){var r=qr();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},Qw(r,e,t,n)},useOpaqueIdentifier:function(){if(vn){var e=!1,t=qk(function(){throw e||(e=!0,n("r:"+(Sh++).toString(36))),Error(x(355))}),n=ro(t)[1];return(ke.mode&2)===0&&(ke.flags|=516,vu(5,function(){n("r:"+(Sh++).toString(36))},void 0,null)),t}return t="r:"+(Sh++).toString(36),ro(t),t},unstable_isNewReconciler:!1},ex={readContext:Bt,useCallback:tE,useContext:Bt,useEffect:_u,useImperativeHandle:eE,useLayoutEffect:Jw,useMemo:nE,useReducer:to,useRef:yu,useState:function(){return to(hn)},useDebugValue:Qp,useDeferredValue:function(e){var t=to(hn),n=t[0],r=t[1];return _u(function(){var i=jt.transition;jt.transition=1;try{r(e)}finally{jt.transition=i}},[e]),n},useTransition:function(){var e=to(hn)[0];return[yu().current,e]},useMutableSource:Xw,useOpaqueIdentifier:function(){return to(hn)[0]},unstable_isNewReconciler:!1},tx={readContext:Bt,useCallback:tE,useContext:Bt,useEffect:_u,useImperativeHandle:eE,useLayoutEffect:Jw,useMemo:nE,useReducer:no,useRef:yu,useState:function(){return no(hn)},useDebugValue:Qp,useDeferredValue:function(e){var t=no(hn),n=t[0],r=t[1];return _u(function(){var i=jt.transition;jt.transition=1;try{r(e)}finally{jt.transition=i}},[e]),n},useTransition:function(){var e=no(hn)[0];return[yu().current,e]},useMutableSource:Xw,useOpaqueIdentifier:function(){return no(hn)[0]},unstable_isNewReconciler:!1},nx=_i.ReactCurrentOwner,Zt=!1;function _t(e,t,n,r){t.child=e===null?Kw(t,null,n,r):pu(t,e.child,n,r)}function Qv(e,t,n,r,i){n=n.render;var s=t.ref;return Qi(t,i),r=Kp(e,t,n,r,s,i),e!==null&&!Zt?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,Nn(e,t,i)):(t.flags|=1,_t(e,t,r,i),t.child)}function Xv(e,t,n,r,i,s){if(e===null){var o=n.type;return typeof o=="function"&&!rg(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,rE(e,t,o,r,i,s)):(e=Ha(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}return o=e.child,(i&s)===0&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:Xo,n(i,r)&&e.ref===t.ref)?Nn(e,t,s):(t.flags|=1,e=Ir(o,r),e.ref=t.ref,e.return=t,t.child=e)}function rE(e,t,n,r,i,s){if(e!==null&&Xo(e.memoizedProps,r)&&e.ref===t.ref)if(Zt=!1,(s&i)!==0)(e.flags&16384)!==0&&(Zt=!0);else return t.lanes=e.lanes,Nn(e,t,s);return Jd(e,t,n,r,s)}function Rh(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((t.mode&4)===0)t.memoizedState={baseLanes:0},wa(t,n);else if((n&1073741824)!==0)t.memoizedState={baseLanes:0},wa(t,s!==null?s.baseLanes:n);else return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},wa(t,e),null;else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,wa(t,r);return _t(e,t,i,n),t.child}function iE(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function Jd(e,t,n,r,i){var s=St(n)?si:at.current;return s=hs(t,s),Qi(t,i),n=Kp(e,t,n,r,s,i),e!==null&&!Zt?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,Nn(e,t,i)):(t.flags|=1,_t(e,t,n,i),t.child)}function Jv(e,t,n,r,i){if(St(n)){var s=!0;$a(t)}else s=!1;if(Qi(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),qw(t,n,r),Kd(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bt(u):(u=St(n)?si:at.current,u=hs(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Hv(t,o,r,u),Yn=!1;var h=t.memoizedState;o.state=h,el(t,r,o,i),a=t.memoizedState,l!==r||h!==a||Tt.current||Yn?(typeof c=="function"&&(fu(t,n,c,r),a=t.memoizedState),(l=Yn||Vv(t,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4)):(typeof o.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4),r=!1)}else{o=t.stateNode,zw(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Qt(t.type,l),o.props=u,d=t.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Bt(a):(a=St(n)?si:at.current,a=hs(t,a));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&Hv(t,o,r,a),Yn=!1,h=t.memoizedState,o.state=h,el(t,r,o,i);var v=t.memoizedState;l!==d||h!==v||Tt.current||Yn?(typeof m=="function"&&(fu(t,n,m,r),v=t.memoizedState),(u=Yn||Vv(t,n,u,r,h,v,a))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=256),r=!1)}return Zd(e,t,n,r,s,i)}function Zd(e,t,n,r,i,s){iE(e,t);var o=(t.flags&64)!==0;if(!r&&!o)return i&&Fv(t,n,!1),Nn(e,t,s);r=t.stateNode,nx.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=pu(t,e.child,null,s),t.child=pu(t,null,l,s)):_t(e,t,l,s),t.memoizedState=r.state,i&&Fv(t,n,!0),t.child}function Zv(e){var t=e.stateNode;t.pendingContext?Mv(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mv(e,t.context,!1),Yd(e,t.containerInfo)}var _a={dehydrated:null,retryLane:0};function ey(e,t,n){var r=t.pendingProps,i=Ee.current,s=!1,o;return(o=(t.flags&64)!==0)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(s=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),Ce(Ee,i&1),e===null?(r.fallback!==void 0&&Qd(t),e=r.children,i=r.fallback,s?(e=ty(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=_a,e):typeof r.unstable_expectedLoadTime=="number"?(e=ty(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=_a,t.lanes=33554432,e):(n=ig({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):e.memoizedState!==null?s?(r=ry(e,t,r.children,r.fallback,n),s=t.child,i=e.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=e.childLanes&~n,t.memoizedState=_a,r):(n=ny(e,t,r.children,n),t.memoizedState=null,n):s?(r=ry(e,t,r.children,r.fallback,n),s=t.child,i=e.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=e.childLanes&~n,t.memoizedState=_a,r):(n=ny(e,t,r.children,n),t.memoizedState=null,n)}function ty(e,t,n,r){var i=e.mode,s=e.child;return t={mode:"hidden",children:t},(i&2)===0&&s!==null?(s.childLanes=0,s.pendingProps=t):s=ig(t,i,0,null),n=es(n,i,r,null),s.return=e,n.return=e,s.sibling=n,e.child=s,n}function ny(e,t,n,r){var i=e.child;return e=i.sibling,n=Ir(i,{mode:"visible",children:n}),(t.mode&2)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function ry(e,t,n,r,i){var s=t.mode,o=e.child;e=o.sibling;var l={mode:"hidden",children:n};return(s&2)===0&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=l,o=n.lastEffect,o!==null?(t.firstEffect=n.firstEffect,t.lastEffect=o,o.nextEffect=null):t.firstEffect=t.lastEffect=null):n=Ir(o,l),e!==null?r=Ir(e,r):(r=es(r,s,i,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function iy(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Hw(e.return,t)}function Nh(e,t,n,r,i,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function sy(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(_t(e,t,r.children,n),r=Ee.current,(r&2)!==0)r=r&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&iy(e,n);else if(e.tag===19)iy(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ce(Ee,r),(t.mode&2)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&gu(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Nh(t,!1,i,n,s,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&gu(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Nh(t,!0,n,null,s,t.lastEffect);break;case"together":Nh(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ol|=t.lanes,(n&t.childLanes)!==0){if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=Ir(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ir(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var sE,ef,oE,lE;sE=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ef=function(){};oE=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Wr(mn.current);var s=null;switch(n){case"input":i=xd(e,i),r=xd(e,r),s=[];break;case"option":i=Pd(e,i),r=Pd(e,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=Ad(e,i),r=Ad(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=lu)}Dd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zo.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&de("scroll",e),s||l===a||(s=[])):typeof a=="object"&&a!==null&&a.$$typeof===Sp?a.toString():(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};lE=function(e,t,n,r){n!==r&&(t.flags|=4)};function io(e,t){if(!vn)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function rx(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return St(t.type)&&uu(),null;case 3:return fs(),ge(Tt),ge(at),qp(),r=t.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ya(t)?t.flags|=4:r.hydrate||(t.flags|=256)),ef(t),null;case 5:Wp(t);var i=Wr(nl.current);if(n=t.type,e!==null&&t.stateNode!=null)oE(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(t.stateNode===null)throw Error(x(166));return null}if(e=Wr(mn.current),ya(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[rr]=t,r[au]=s,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(e=0;e<yo.length;e++)de(yo[e],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":sv(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":lv(r,s),de("invalid",r)}Dd(n,s),e=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(e=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(e=["children",""+i]):zo.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&de("scroll",r));switch(n){case"input":da(r),ov(r,s,!0);break;case"textarea":da(r),av(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=lu)}r=e,t.updateQueue=r,r!==null&&(t.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,e===bd.html&&(e=ew(n)),e===bd.html?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[rr]=t,e[au]=r,sE(e,t,!1,!1),t.stateNode=e,o=Ld(n,r),n){case"dialog":de("cancel",e),de("close",e),i=r;break;case"iframe":case"object":case"embed":de("load",e),i=r;break;case"video":case"audio":for(i=0;i<yo.length;i++)de(yo[i],e);i=r;break;case"source":de("error",e),i=r;break;case"img":case"image":case"link":de("error",e),de("load",e),i=r;break;case"details":de("toggle",e),i=r;break;case"input":sv(e,r),i=xd(e,r),de("invalid",e);break;case"option":i=Pd(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),de("invalid",e);break;case"textarea":lv(e,r),i=Ad(e,r),de("invalid",e);break;default:i=r}Dd(n,i);var l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?rw(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&tw(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Wo(e,a):typeof a=="number"&&Wo(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zo.hasOwnProperty(s)?a!=null&&s==="onScroll"&&de("scroll",e):a!=null&&yp(e,s,a,o))}switch(n){case"input":da(e),ov(e,r,!1);break;case"textarea":da(e),av(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Er(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?qi(e,!!r.multiple,s,!1):r.defaultValue!=null&&qi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=lu)}Dw(n,r)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)lE(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));n=Wr(nl.current),Wr(mn.current),ya(t)?(r=t.stateNode,n=t.memoizedProps,r[rr]=t,r.nodeValue!==n&&(t.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rr]=t,t.stateNode=r)}return null;case 13:return ge(Ee),r=t.memoizedState,(t.flags&64)!==0?(t.lanes=n,t):(r=r!==null,n=!1,e===null?t.memoizedProps.fallback!==void 0&&ya(t):n=e.memoizedState!==null,r&&!n&&(t.mode&2)!==0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(Ee.current&1)!==0?Ge===0&&(Ge=3):((Ge===0||Ge===3)&&(Ge=4),gt===null||(Ol&134217727)===0&&(Rs&134217727)===0||Ji(gt,st))),(r||n)&&(t.flags|=4),null);case 4:return fs(),ef(t),e===null&&Aw(t.stateNode.containerInfo),null;case 10:return Hp(t),null;case 17:return St(t.type)&&uu(),null;case 19:if(ge(Ee),r=t.memoizedState,r===null)return null;if(s=(t.flags&64)!==0,o=r.rendering,o===null)if(s)io(r,!1);else{if(Ge!==0||e!==null&&(e.flags&64)!==0)for(e=t.child;e!==null;){if(o=gu(e),o!==null){for(t.flags|=64,io(r,!1),s=o.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ce(Ee,Ee.current&1|2),t.child}e=e.sibling}r.tail!==null&&rt()>lf&&(t.flags|=64,s=!0,io(r,!1),t.lanes=33554432)}else{if(!s)if(e=gu(o),e!==null){if(t.flags|=64,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),io(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!vn)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*rt()-r.renderingStartTime>lf&&n!==1073741824&&(t.flags|=64,s=!0,io(r,!1),t.lanes=33554432);r.isBackwards?(o.sibling=t.child,t.child=o):(n=r.last,n!==null?n.sibling=o:t.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=rt(),n.sibling=null,t=Ee.current,Ce(Ee,s?t&1|2:t&1),n):null;case 23:case 24:return ng(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(x(156,t.tag))}function ix(e){switch(e.tag){case 1:St(e.type)&&uu();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(fs(),ge(Tt),ge(at),qp(),t=e.flags,(t&64)!==0)throw Error(x(285));return e.flags=t&-4097|64,e;case 5:return Wp(e),null;case 13:return ge(Ee),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return ge(Ee),null;case 4:return fs(),null;case 10:return Hp(e),null;case 23:case 24:return ng(),null;default:return null}}function Jp(e,t){try{var n="",r=t;do n+=$I(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i}}function tf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sx=typeof WeakMap=="function"?WeakMap:Map;function aE(e,t,n){n=cr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Cu||(Cu=!0,af=r),tf(e,t)},n}function uE(e,t,n){n=cr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return tf(e,t),r(i)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this),tf(e,t));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}var ox=typeof WeakSet=="function"?WeakSet:Set;function oy(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){pr(e,n)}else t.current=null}function lx(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:Qt(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&Up(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(x(163))}function ax(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)===3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var i=e;r=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(yE(n,e),mx(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:Qt(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&Bv(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Bv(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&Dw(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&fw(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(x(163))}function ly(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=nw("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function ay(e,t){if(Zr&&typeof Zr.onCommitFiberUnmount=="function")try{Zr.onCommitFiberUnmount(jp,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!==0)yE(t,n);else{r=t;try{i()}catch(s){pr(r,s)}}n=n.next}while(n!==e)}break;case 1:if(oy(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(s){pr(t,s)}break;case 5:oy(t);break;case 4:cE(e,t)}}function uy(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function cy(e){return e.tag===5||e.tag===3||e.tag===4}function hy(e){e:{for(var t=e.return;t!==null;){if(cy(t))break e;t=t.return}throw Error(x(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(x(161))}n.flags&16&&(Wo(t,""),n.flags&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||cy(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?nf(e,n,t):rf(e,n,t)}function nf(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=lu));else if(r!==4&&(e=e.child,e!==null))for(nf(e,t,n),e=e.sibling;e!==null;)nf(e,t,n),e=e.sibling}function rf(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(rf(e,t,n),e=e.sibling;e!==null;)rf(e,t,n),e=e.sibling}function cE(e,t){for(var n=t,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(x(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=e,l=n,a=l;;)if(ay(o,a),a.child!==null&&a.tag!==4)a.child.return=a,a=a.child;else{if(a===l)break e;for(;a.sibling===null;){if(a.return===null||a.return===l)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}s?(o=i,l=n.stateNode,o.nodeType===8?o.parentNode.removeChild(l):o.removeChild(l)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(ay(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Ph(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var i=e!==null?e.memoizedProps:r;e=t.type;var s=t.updateQueue;if(t.updateQueue=null,s!==null){for(n[au]=r,e==="input"&&r.type==="radio"&&r.name!=null&&J0(n,r),Ld(e,i),t=Ld(e,r),i=0;i<s.length;i+=2){var o=s[i],l=s[i+1];o==="style"?rw(n,l):o==="dangerouslySetInnerHTML"?tw(n,l):o==="children"?Wo(n,l):yp(n,o,l,t)}switch(e){case"input":Rd(n,r);break;case"textarea":Z0(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?qi(n,!!r.multiple,s,!1):e!==!!r.multiple&&(r.defaultValue!=null?qi(n,!!r.multiple,r.defaultValue,!0):qi(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(x(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,fw(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(tg=rt(),ly(t.child,!0)),dy(t);return;case 19:dy(t);return;case 17:return;case 23:case 24:ly(t,t.memoizedState!==null);return}throw Error(x(163))}function dy(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ox),t.forEach(function(r){var i=_x.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ux(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var cx=Math.ceil,Eu=_i.ReactCurrentDispatcher,Zp=_i.ReactCurrentOwner,G=0,gt=null,Oe=null,st=0,li=0,sf=Rr(0),Ge=0,Sc=null,xs=0,Ol=0,Rs=0,eg=0,of=null,tg=0,lf=1/0;function Ns(){lf=rt()+500}var L=null,Cu=!1,af=null,dn=null,Sr=!1,Lo=null,_o=90,uf=[],cf=[],Ln=null,Mo=0,hf=null,ja=-1,xn=0,Ba=0,Fo=null,Va=!1;function At(){return(G&48)!==0?rt():ja!==-1?ja:ja=rt()}function dr(e){if(e=e.mode,(e&2)===0)return 1;if((e&4)===0)return ds()===99?1:2;if(xn===0&&(xn=xs),Xk.transition!==0){Ba!==0&&(Ba=of!==null?of.pendingLanes:0),e=xn;var t=4186112&~Ba;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=ds(),(G&4)!==0&&e===98?e=su(12,xn):(e=ek(e),e=su(e,xn)),e}function fr(e,t,n){if(50<Mo)throw Mo=0,hf=null,Error(x(185));if(e=Ic(e,t),e===null)return null;vc(e,t,n),e===gt&&(Rs|=t,Ge===4&&Ji(e,st));var r=ds();t===1?(G&8)!==0&&(G&48)===0?df(e):(Vt(e,n),G===0&&(Ns(),Cn())):((G&4)===0||r!==98&&r!==99||(Ln===null?Ln=new Set([e]):Ln.add(e)),Vt(e,n)),of=e}function Ic(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function Vt(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Cr(o),a=1<<l,u=s[l];if(u===-1){if((a&r)===0||(a&i)!==0){u=t,bi(a);var c=ce;s[l]=10<=c?u+250:6<=c?u+5e3:-1}}else u<=t&&(e.expiredLanes|=a);o&=~a}if(r=Yo(e,e===gt?st:0),t=ce,r===0)n!==null&&(n!==Ih&&qd(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==Ih&&qd(n)}t===15?(n=df.bind(null,e),kn===null?(kn=[n],Ua=Bp(Cc,Vw)):kn.push(n),n=Ih):t===14?n=Zo(99,df.bind(null,e)):(n=tk(t),n=Zo(n,hE.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function hE(e){if(ja=-1,Ba=xn=0,(G&48)!==0)throw Error(x(327));var t=e.callbackNode;if(Nr()&&e.callbackNode!==t)return null;var n=Yo(e,e===gt?st:0);if(n===0)return null;var r=n,i=G;G|=16;var s=gE();(gt!==e||st!==r)&&(Ns(),Zi(e,r));do try{fx();break}catch(l){pE(e,l)}while(1);if(Vp(),Eu.current=s,G=i,Oe!==null?r=0:(gt=null,st=0,r=Ge),(xs&Rs)!==0)Zi(e,0);else if(r!==0){if(r===2&&(G|=64,e.hydrate&&(e.hydrate=!1,Up(e.containerInfo)),n=ww(e),n!==0&&(r=wo(e,n))),r===1)throw t=Sc,Zi(e,0),Ji(e,n),Vt(e,rt()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(x(345));case 2:Mr(e);break;case 3:if(Ji(e,n),(n&62914560)===n&&(r=tg+500-rt(),10<r)){if(Yo(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){At(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ov(Mr.bind(null,e),r);break}Mr(e);break;case 4:if(Ji(e,n),(n&4186112)===n)break;for(r=e.eventTimes,i=-1;0<n;){var o=31-Cr(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=rt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*cx(n/1960))-n,10<n){e.timeoutHandle=Ov(Mr.bind(null,e),n);break}Mr(e);break;case 5:Mr(e);break;default:throw Error(x(329))}}return Vt(e,rt()),e.callbackNode===t?hE.bind(null,e):null}function Ji(e,t){for(t&=~eg,t&=~Rs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Cr(t),r=1<<n;e[n]=-1,t&=~r}}function df(e){if((G&48)!==0)throw Error(x(327));if(Nr(),e===gt&&(e.expiredLanes&st)!==0){var t=st,n=wo(e,t);(xs&Rs)!==0&&(t=Yo(e,t),n=wo(e,t))}else t=Yo(e,0),n=wo(e,t);if(e.tag!==0&&n===2&&(G|=64,e.hydrate&&(e.hydrate=!1,Up(e.containerInfo)),t=ww(e),t!==0&&(n=wo(e,t))),n===1)throw n=Sc,Zi(e,0),Ji(e,t),Vt(e,rt()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mr(e),Vt(e,rt()),null}function hx(){if(Ln!==null){var e=Ln;Ln=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,Vt(t,rt())})}Cn()}function dE(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Ns(),Cn())}}function fE(e,t){var n=G;G&=-2,G|=8;try{return e(t)}finally{G=n,G===0&&(Ns(),Cn())}}function wa(e,t){Ce(sf,li),li|=t,xs|=t}function ng(){li=sf.current,ge(sf)}function Zi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wk(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&uu();break;case 3:fs(),ge(Tt),ge(at),qp();break;case 5:Wp(r);break;case 4:fs();break;case 13:ge(Ee);break;case 19:ge(Ee);break;case 10:Hp(r);break;case 23:case 24:ng()}n=n.return}gt=e,Oe=Ir(e.current,null),st=li=xs=t,Ge=0,Sc=null,eg=Rs=Ol=0}function pE(e,t){do{var n=Oe;try{if(Vp(),Oo.current=wu,mu){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}mu=!1}if(rl=0,qe=Xe=ke=null,Do=!1,Zp.current=null,n===null||n.return===null){Ge=1,Sc=t,Oe=null;break}e:{var s=e,o=n.return,l=n,a=t;if(t=st,l.flags|=2048,l.firstEffect=l.lastEffect=null,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a;if((l.mode&2)===0){var c=l.alternate;c?(l.updateQueue=c.updateQueue,l.memoizedState=c.memoizedState,l.lanes=c.lanes):(l.updateQueue=null,l.memoizedState=null)}var d=(Ee.current&1)!==0,h=o;do{var m;if(m=h.tag===13){var v=h.memoizedState;if(v!==null)m=v.dehydrated!==null;else{var _=h.memoizedProps;m=_.fallback===void 0?!1:_.unstable_avoidThisFallback!==!0?!0:!d}}if(m){var f=h.updateQueue;if(f===null){var p=new Set;p.add(u),h.updateQueue=p}else f.add(u);if((h.mode&2)===0){if(h.flags|=64,l.flags|=16384,l.flags&=-2981,l.tag===1)if(l.alternate===null)l.tag=17;else{var g=cr(-1,1);g.tag=2,hr(l,g)}l.lanes|=1;break e}a=void 0,l=t;var E=s.pingCache;if(E===null?(E=s.pingCache=new sx,a=new Set,E.set(u,a)):(a=E.get(u),a===void 0&&(a=new Set,E.set(u,a))),!a.has(l)){a.add(l);var C=yx.bind(null,s,u,l);u.then(C,C)}h.flags|=4096,h.lanes=t;break e}h=h.return}while(h!==null);a=Error((Wi(l.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Ge!==5&&(Ge=2),a=Jp(a,l),h=o;do{switch(h.tag){case 3:s=a,h.flags|=4096,t&=-t,h.lanes|=t;var k=aE(h,s,t);jv(h,k);break e;case 1:s=a;var I=h.type,O=h.stateNode;if((h.flags&64)===0&&(typeof I.getDerivedStateFromError=="function"||O!==null&&typeof O.componentDidCatch=="function"&&(dn===null||!dn.has(O)))){h.flags|=4096,t&=-t,h.lanes|=t;var M=uE(h,s,t);jv(h,M);break e}}h=h.return}while(h!==null)}vE(n)}catch(A){t=A,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(1)}function gE(){var e=Eu.current;return Eu.current=wu,e===null?wu:e}function wo(e,t){var n=G;G|=16;var r=gE();gt===e&&st===t||Zi(e,t);do try{dx();break}catch(i){pE(e,i)}while(1);if(Vp(),G=n,Eu.current=r,Oe!==null)throw Error(x(261));return gt=null,st=0,Ge}function dx(){for(;Oe!==null;)mE(Oe)}function fx(){for(;Oe!==null&&!Kk();)mE(Oe)}function mE(e){var t=_E(e.alternate,e,li);e.memoizedProps=e.pendingProps,t===null?vE(e):Oe=t,Zp.current=null}function vE(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&2048)===0){if(n=rx(n,t,li),n!==null){Oe=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||(li&1073741824)!==0||(n.mode&4)===0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}e!==null&&(e.flags&2048)===0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=ix(t),n!==null){n.flags&=2047,Oe=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);Ge===0&&(Ge=5)}function Mr(e){var t=ds();return oi(99,px.bind(null,e,t)),null}function px(e,t){do Nr();while(Lo!==null);if((G&48)!==0)throw Error(x(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var o=e.eventTimes,l=e.expirationTimes;0<s;){var a=31-Cr(s),u=1<<a;i[a]=0,o[a]=-1,l[a]=-1,s&=~u}if(Ln!==null&&(r&24)===0&&Ln.has(e)&&Ln.delete(e),e===gt&&(Oe=gt=null,st=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=G,G|=32,Zp.current=null,Ch=La,o=kv(),Bd(o)){if("selectionStart"in o)l={start:o.selectionStart,end:o.selectionEnd};else e:if(l=(l=o.ownerDocument)&&l.defaultView||window,(u=l.getSelection&&l.getSelection())&&u.rangeCount!==0){l=u.anchorNode,s=u.anchorOffset,a=u.focusNode,u=u.focusOffset;try{l.nodeType,a.nodeType}catch{l=null;break e}var c=0,d=-1,h=-1,m=0,v=0,_=o,f=null;t:for(;;){for(var p;_!==l||s!==0&&_.nodeType!==3||(d=c+s),_!==a||u!==0&&_.nodeType!==3||(h=c+u),_.nodeType===3&&(c+=_.nodeValue.length),(p=_.firstChild)!==null;)f=_,_=p;for(;;){if(_===o)break t;if(f===l&&++m===s&&(d=c),f===a&&++v===u&&(h=c),(p=_.nextSibling)!==null)break;_=f,f=_.parentNode}_=p}l=d===-1||h===-1?null:{start:d,end:h}}else l=null;l=l||{start:0,end:0}}else l=null;Th={focusedElem:o,selectionRange:l},La=!1,Fo=null,Va=!1,L=r;do try{gx()}catch(A){if(L===null)throw Error(x(330));pr(L,A),L=L.nextEffect}while(L!==null);Fo=null,L=r;do try{for(o=e;L!==null;){var g=L.flags;if(g&16&&Wo(L.stateNode,""),g&128){var E=L.alternate;if(E!==null){var C=E.ref;C!==null&&(typeof C=="function"?C(null):C.current=null)}}switch(g&1038){case 2:hy(L),L.flags&=-3;break;case 6:hy(L),L.flags&=-3,Ph(L.alternate,L);break;case 1024:L.flags&=-1025;break;case 1028:L.flags&=-1025,Ph(L.alternate,L);break;case 4:Ph(L.alternate,L);break;case 8:l=L,cE(o,l);var k=l.alternate;uy(l),k!==null&&uy(k)}L=L.nextEffect}}catch(A){if(L===null)throw Error(x(330));pr(L,A),L=L.nextEffect}while(L!==null);if(C=Th,E=kv(),g=C.focusedElem,o=C.selectionRange,E!==g&&g&&g.ownerDocument&&Rw(g.ownerDocument.documentElement,g)){for(o!==null&&Bd(g)&&(E=o.start,C=o.end,C===void 0&&(C=E),"selectionStart"in g?(g.selectionStart=E,g.selectionEnd=Math.min(C,g.value.length)):(C=(E=g.ownerDocument||document)&&E.defaultView||window,C.getSelection&&(C=C.getSelection(),l=g.textContent.length,k=Math.min(o.start,l),o=o.end===void 0?k:Math.min(o.end,l),!C.extend&&k>o&&(l=o,o=k,k=l),l=Iv(g,k),s=Iv(g,o),l&&s&&(C.rangeCount!==1||C.anchorNode!==l.node||C.anchorOffset!==l.offset||C.focusNode!==s.node||C.focusOffset!==s.offset)&&(E=E.createRange(),E.setStart(l.node,l.offset),C.removeAllRanges(),k>o?(C.addRange(E),C.extend(s.node,s.offset)):(E.setEnd(s.node,s.offset),C.addRange(E)))))),E=[],C=g;C=C.parentNode;)C.nodeType===1&&E.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<E.length;g++)C=E[g],C.element.scrollLeft=C.left,C.element.scrollTop=C.top}La=!!Ch,Th=Ch=null,e.current=n,L=r;do try{for(g=e;L!==null;){var I=L.flags;if(I&36&&ax(g,L.alternate,L),I&128){E=void 0;var O=L.ref;if(O!==null){var M=L.stateNode;switch(L.tag){case 5:E=M;break;default:E=M}typeof O=="function"?O(E):O.current=E}}L=L.nextEffect}}catch(A){if(L===null)throw Error(x(330));pr(L,A),L=L.nextEffect}while(L!==null);L=null,Qk(),G=i}else e.current=n;if(Sr)Sr=!1,Lo=e,_o=t;else for(L=r;L!==null;)t=L.nextEffect,L.nextEffect=null,L.flags&8&&(I=L,I.sibling=null,I.stateNode=null),L=t;if(r=e.pendingLanes,r===0&&(dn=null),r===1?e===hf?Mo++:(Mo=0,hf=e):Mo=0,n=n.stateNode,Zr&&typeof Zr.onCommitFiberRoot=="function")try{Zr.onCommitFiberRoot(jp,n,void 0,(n.current.flags&64)===64)}catch{}if(Vt(e,rt()),Cu)throw Cu=!1,e=af,af=null,e;return(G&8)!==0||Cn(),null}function gx(){for(;L!==null;){var e=L.alternate;Va||Fo===null||((L.flags&8)!==0?hv(L,Fo)&&(Va=!0):L.tag===13&&ux(e,L)&&hv(L,Fo)&&(Va=!0));var t=L.flags;(t&256)!==0&&lx(e,L),(t&512)===0||Sr||(Sr=!0,Zo(97,function(){return Nr(),null})),L=L.nextEffect}}function Nr(){if(_o!==90){var e=97<_o?97:_o;return _o=90,oi(e,vx)}return!1}function mx(e,t){uf.push(t,e),Sr||(Sr=!0,Zo(97,function(){return Nr(),null}))}function yE(e,t){cf.push(t,e),Sr||(Sr=!0,Zo(97,function(){return Nr(),null}))}function vx(){if(Lo===null)return!1;var e=Lo;if(Lo=null,(G&48)!==0)throw Error(x(331));var t=G;G|=32;var n=cf;cf=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(a){if(s===null)throw Error(x(330));pr(s,a)}}for(n=uf,uf=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var l=i.create;i.destroy=l()}catch(a){if(s===null)throw Error(x(330));pr(s,a)}}for(l=e.current.firstEffect;l!==null;)e=l.nextEffect,l.nextEffect=null,l.flags&8&&(l.sibling=null,l.stateNode=null),l=e;return G=t,Cn(),!0}function fy(e,t,n){t=Jp(n,t),t=aE(e,t,1),hr(e,t),t=At(),e=Ic(e,1),e!==null&&(vc(e,1,t),Vt(e,t))}function pr(e,t){if(e.tag===3)fy(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){fy(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){e=Jp(t,e);var i=uE(n,e,1);if(hr(n,i),i=At(),n=Ic(n,1),n!==null)vc(n,1,i),Vt(n,i);else if(typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r)))try{r.componentDidCatch(t,e)}catch{}break}}n=n.return}}function yx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=At(),e.pingedLanes|=e.suspendedLanes&n,gt===e&&(st&n)===n&&(Ge===4||Ge===3&&(st&62914560)===st&&500>rt()-tg?Zi(e,0):eg|=n),Vt(e,t)}function _x(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,(t&2)===0?t=1:(t&4)===0?t=ds()===99?1:2:(xn===0&&(xn=xs),t=Oi(62914560&~xn),t===0&&(t=4194304))),n=At(),e=Ic(e,t),e!==null&&(vc(e,t,n),Vt(e,n))}var _E;_E=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||Tt.current)Zt=!0;else if((n&r)!==0)Zt=(e.flags&16384)!==0;else{switch(Zt=!1,t.tag){case 3:Zv(t),xh();break;case 5:zv(t);break;case 1:St(t.type)&&$a(t);break;case 4:Yd(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var i=t.type._context;Ce(cu,i._currentValue),i._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)!==0?ey(e,t,n):(Ce(Ee,Ee.current&1),t=Nn(e,t,n),t!==null?t.sibling:null);Ce(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&64)!==0){if(r)return sy(e,t,n);t.flags|=64}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ce(Ee,Ee.current),r)break;return null;case 23:case 24:return t.lanes=0,Rh(e,t,n)}return Nn(e,t,n)}else Zt=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=hs(t,at.current),Qi(t,n),i=Kp(null,t,r,e,i,n),t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,St(r)){var s=!0;$a(t)}else s=!1;t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zp(t);var o=r.getDerivedStateFromProps;typeof o=="function"&&fu(t,r,o,e),i.updater=Tc,t.stateNode=i,i._reactInternals=t,Kd(t,r,e,n),t=Zd(null,t,r,!0,s,n)}else t.tag=0,_t(null,t,i,n),t=t.child;return t;case 16:i=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,s=i._init,i=s(i._payload),t.type=i,s=t.tag=Ex(i),e=Qt(i,e),s){case 0:t=Jd(null,t,i,e,n);break e;case 1:t=Jv(null,t,i,e,n);break e;case 11:t=Qv(null,t,i,e,n);break e;case 14:t=Xv(null,t,i,Qt(i.type,e),r,n);break e}throw Error(x(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),Jd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),Jv(e,t,r,i,n);case 3:if(Zv(t),r=t.updateQueue,e===null||r===null)throw Error(x(282));if(r=t.pendingProps,i=t.memoizedState,i=i!==null?i.element:null,zw(e,t),el(t,r,null,n),r=t.memoizedState.element,r===i)xh(),t=Nn(e,t,n);else{if(i=t.stateNode,(s=i.hydrate)&&(ir=Yi(t.stateNode.containerInfo.firstChild),Rn=t,s=vn=!0),s){if(e=i.mutableSourceEagerHydrationData,e!=null)for(i=0;i<e.length;i+=2)s=e[i],s._workInProgressVersionPrimary=e[i+1],Xi.push(s);for(n=Kw(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else _t(e,t,r,n),xh();t=t.child}return t;case 5:return zv(t),e===null&&Qd(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,zd(r,i)?o=null:s!==null&&zd(r,s)&&(t.flags|=16),iE(e,t),_t(e,t,o,n),t.child;case 6:return e===null&&Qd(t),null;case 13:return ey(e,t,n);case 4:return Yd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pu(t,null,r,n):_t(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),Qv(e,t,r,i,n);case 7:return _t(e,t,t.pendingProps,n),t.child;case 8:return _t(e,t,t.pendingProps.children,n),t.child;case 12:return _t(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value;var l=t.type._context;if(Ce(cu,l._currentValue),l._currentValue=s,o!==null)if(l=o.value,s=Ft(l,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(l,s):1073741823)|0,s===0){if(o.children===i.children&&!Tt.current){t=Nn(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r&&(u.observedBits&s)!==0){l.tag===1&&(u=cr(-1,n&-n),u.tag=2,hr(l,u)),l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Hw(l.return,n),a.lanes|=n;break}u=u.next}}else o=l.tag===10&&l.type===t.type?null:l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}_t(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,s=t.pendingProps,r=s.children,Qi(t,n),i=Bt(i,s.unstable_observedBits),r=r(i),t.flags|=1,_t(e,t,r,n),t.child;case 14:return i=t.type,s=Qt(i,t.pendingProps),s=Qt(i.type,s),Xv(e,t,i,s,r,n);case 15:return rE(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,St(r)?(e=!0,$a(t)):e=!1,Qi(t,n),qw(t,r,i),Kd(t,r,i,n),Zd(null,t,r,!0,e,n);case 19:return sy(e,t,n);case 23:return Rh(e,t,n);case 24:return Rh(e,t,n)}throw Error(x(156,t.tag))};function wx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(e,t,n,r){return new wx(e,t,n,r)}function rg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ex(e){if(typeof e=="function")return rg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pc)return 11;if(e===gc)return 14}return 2}function Ir(e,t){var n=e.alternate;return n===null?(n=$t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ha(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")rg(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Qn:return es(n.children,i,s,t);case Y0:o=8,i|=16;break;case _p:o=8,i|=1;break;case ko:return e=$t(12,n,t,i|8),e.elementType=ko,e.type=ko,e.lanes=s,e;case xo:return e=$t(13,n,t,i),e.type=xo,e.elementType=xo,e.lanes=s,e;case tu:return e=$t(19,n,t,i),e.elementType=tu,e.lanes=s,e;case Ip:return ig(n,i,s,t);case kd:return e=$t(24,n,t,i),e.elementType=kd,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wp:o=10;break e;case Ep:o=9;break e;case pc:o=11;break e;case gc:o=14;break e;case Cp:o=16,r=null;break e;case Tp:o=22;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=$t(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function es(e,t,n,r){return e=$t(7,e,r,t),e.lanes=n,e}function ig(e,t,n,r){return e=$t(23,e,r,t),e.elementType=Ip,e.lanes=n,e}function Ah(e,t,n){return e=$t(6,e,null,t),e.lanes=n,e}function bh(e,t,n){return t=$t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cx(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=gh(0),this.expirationTimes=gh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gh(0),this.mutableSourceEagerHydrationData=null}function Tx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tu(e,t,n,r){var i=t.current,s=At(),o=dr(i);e:if(n){n=n._reactInternals;t:{if(wi(n)!==n||n.tag!==1)throw Error(x(170));var l=n;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(St(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(l!==null);throw Error(x(171))}if(n.tag===1){var a=n.type;if(St(a)){n=Mw(n,a,l);break e}}n=l}else n=Tr;return t.context===null?t.context=n:t.pendingContext=n,t=cr(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),hr(i,t),fr(i,o,s),o}function Oh(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function py(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sg(e,t){py(e,t),(e=e.alternate)&&py(e,t)}function Sx(){return null}function og(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new Cx(e,t,n!=null&&n.hydrate===!0),t=$t(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,zp(t),e[ks]=n.current,Aw(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var i=t._getVersion;i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}og.prototype.render=function(e){Tu(e,this._internalRoot,null,null)};og.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Tu(null,e,null,function(){t[ks]=null})};function Dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ix(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new og(e,0,t?{hydrate:!0}:void 0)}function kc(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var l=i;i=function(){var u=Oh(o);l.call(u)}}Tu(t,o,e,i)}else{if(s=n._reactRootContainer=Ix(n,r),o=s._internalRoot,typeof i=="function"){var a=i;i=function(){var u=Oh(o);a.call(u)}}fE(function(){Tu(t,o,e,i)})}return Oh(o)}cw=function(e){if(e.tag===13){var t=At();fr(e,4,t),sg(e,4)}};Pp=function(e){if(e.tag===13){var t=At();fr(e,67108864,t),sg(e,67108864)}};hw=function(e){if(e.tag===13){var t=At(),n=dr(e);fr(e,n,t),sg(e,n)}};dw=function(e,t){return t()};Md=function(e,t,n){switch(t){case"input":if(Rd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ec(r);if(!i)throw Error(x(90));X0(r),Rd(r,i)}}}break;case"textarea":Z0(e,n);break;case"select":t=n.value,t!=null&&qi(e,!!n.multiple,t,!1)}};xp=dE;ow=function(e,t,n,r,i){var s=G;G|=4;try{return oi(98,e.bind(null,t,n,r,i))}finally{G=s,G===0&&(Ns(),Cn())}};Rp=function(){(G&49)===0&&(hx(),Nr())};lw=function(e,t){var n=G;G|=2;try{return e(t)}finally{G=n,G===0&&(Ns(),Cn())}};function wE(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dl(t))throw Error(x(200));return Tx(e,t,null,n)}var kx={Events:[Al,Fi,Ec,iw,sw,Nr,{current:!1}]},so={findFiberByHostInstance:zr,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},xx={bundleType:so.bundleType,version:so.version,rendererPackageName:so.rendererPackageName,rendererConfig:so.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_i.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uw(e),e===null?null:e.stateNode},findFiberByHostInstance:so.findFiberByHostInstance||Sx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{jp=Ea.inject(xx),Zr=Ea}catch{}}Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kx;Wt.createPortal=wE;Wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):Error(x(268,Object.keys(e)));return e=uw(t),e=e===null?null:e.stateNode,e};Wt.flushSync=function(e,t){var n=G;if((n&48)!==0)return e(t);G|=1;try{if(e)return oi(99,e.bind(null,t))}finally{G=n,Cn()}};Wt.hydrate=function(e,t,n){if(!Dl(t))throw Error(x(200));return kc(null,e,t,!0,n)};Wt.render=function(e,t,n){if(!Dl(t))throw Error(x(200));return kc(null,e,t,!1,n)};Wt.unmountComponentAtNode=function(e){if(!Dl(e))throw Error(x(40));return e._reactRootContainer?(fE(function(){kc(null,null,e,!1,function(){e._reactRootContainer=null,e[ks]=null})}),!0):!1};Wt.unstable_batchedUpdates=dE;Wt.unstable_createPortal=function(e,t){return wE(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};Wt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Dl(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return kc(e,t,n,!1,r)};Wt.version="17.0.2";function EE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(EE)}catch(e){console.error(e)}}EE(),gp.exports=Wt;var Rx=gp.exports;/**
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
 */const CE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const N=function(e,t){if(!e)throw Ps(t)},Ps=function(e){return new Error("Firebase Database ("+CE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
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
 */const TE=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Nx=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],l=e[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},lg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,l=o?e[i+1]:0,a=i+2<e.length,u=a?e[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,m=u&63;a||(m=64,o||(h=64)),r.push(n[c],n[d],n[h],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(TE(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Nx(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new Px;const h=s<<2|l>>4;if(r.push(h),u!==64){const m=l<<4&240|u>>2;if(r.push(m),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Px extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SE=function(e){const t=TE(e);return lg.encodeByteArray(t,!0)},Su=function(e){return SE(e).replace(/\./g,"")},Iu=function(e){try{return lg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ax(e){return IE(void 0,e)}function IE(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!bx(n)||(e[n]=IE(e[n],t[n]));return e}function bx(e){return e!=="__proto__"}/**
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
 */function Ox(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Dx=()=>Ox().__FIREBASE_DEFAULTS__,Lx=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Mx=()=>{if(typeof document=="undefined")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Iu(e[1]);return t&&JSON.parse(t)},ag=()=>{try{return Dx()||Lx()||Mx()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},kE=e=>{var t,n;return(n=(t=ag())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Fx=e=>{const t=kE(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},xE=()=>{var e;return(e=ag())===null||e===void 0?void 0:e.config},RE=e=>{var t;return(t=ag())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class ug{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function $x(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[Su(JSON.stringify(n)),Su(JSON.stringify(o)),l].join(".")}/**
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
 */function ut(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function Ux(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function NE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jx(){const e=ut();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function PE(){return CE.NODE_ADMIN===!0}function AE(){try{return typeof indexedDB=="object"}catch{return!1}}function Bx(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const Vx="FirebaseError";class It extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Vx,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}}class Ci{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Hx(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new It(i,l,r)}}function Hx(e,t){return e.replace(zx,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const zx=/\{\$([^}]+)}/g;/**
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
 */function il(e){return JSON.parse(e)}function Be(e){return JSON.stringify(e)}/**
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
 */const bE=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=il(Iu(s[0])||""),n=il(Iu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},Wx=function(e){const t=bE(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},qx=function(e){const t=bE(e).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function Hn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ps(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function ff(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ku(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function xu(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(gy(s)&&gy(o)){if(!xu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gy(e){return e!==null&&typeof e=="object"}/**
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
 */function As(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Eo(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Co(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
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
 */class Gx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let d=0;d<16;d++)r[d]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(s[o]=t.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=t[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)t[r]=this.chain_[i]>>s&255,++r;return t}}function Kx(e,t){const n=new Yx(e,t);return n.subscribe.bind(n)}class Yx{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Qx(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Dh),i.error===void 0&&(i.error=Dh),i.complete===void 0&&(i.complete=Dh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qx(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Dh(){}function OE(e,t){return`${e} failed: ${t} argument `}/**
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
 */const Xx=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,N(r<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},xc=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
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
 */const Jx=1e3,Zx=2,eR=4*60*60*1e3,tR=.5;function nR(e,t=Jx,n=Zx){const r=t*Math.pow(n,e),i=Math.round(tR*r*(Math.random()-.5)*2);return Math.min(eR,r+i)}/**
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
 */function Tn(e){return e&&e._delegate?e._delegate:e}class Ot{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Fr="[DEFAULT]";/**
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
 */class rR{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new ug;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(sR(t))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Fr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Fr){return this.instances.has(t)}getOptions(t=Fr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iR(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Fr){return this.component?this.component.multipleInstances?t:Fr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iR(e){return e===Fr?void 0:e}function sR(e){return e.instantiationMode==="EAGER"}/**
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
 */class oR{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new rR(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ne||(ne={}));const lR={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},aR=ne.INFO,uR={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},cR=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=uR[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ll{constructor(t){this.name=t,this._logLevel=aR,this._logHandler=cR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ne))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?lR[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...t),this._logHandler(this,ne.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...t),this._logHandler(this,ne.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...t),this._logHandler(this,ne.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...t),this._logHandler(this,ne.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...t),this._logHandler(this,ne.ERROR,...t)}}const hR=(e,t)=>t.some(n=>e instanceof n);let my,vy;function dR(){return my||(my=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fR(){return vy||(vy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const DE=new WeakMap,pf=new WeakMap,LE=new WeakMap,Lh=new WeakMap,hg=new WeakMap;function pR(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(gr(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&DE.set(n,e)}).catch(()=>{}),hg.set(t,e),t}function gR(e){if(pf.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});pf.set(e,t)}let gf={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return pf.get(e);if(t==="objectStoreNames")return e.objectStoreNames||LE.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function mR(e){gf=e(gf)}function vR(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Mh(this),t,...n);return LE.set(r,t.sort?t.sort():[t]),gr(r)}:fR().includes(e)?function(...t){return e.apply(Mh(this),t),gr(DE.get(this))}:function(...t){return gr(e.apply(Mh(this),t))}}function yR(e){return typeof e=="function"?vR(e):(e instanceof IDBTransaction&&gR(e),hR(e,dR())?new Proxy(e,gf):e)}function gr(e){if(e instanceof IDBRequest)return pR(e);if(Lh.has(e))return Lh.get(e);const t=yR(e);return t!==e&&(Lh.set(e,t),hg.set(t,e)),t}const Mh=e=>hg.get(e);function _R(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),l=gr(o);return r&&o.addEventListener("upgradeneeded",a=>{r(gr(o.result),a.oldVersion,a.newVersion,gr(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const wR=["get","getKey","getAll","getAllKeys","count"],ER=["put","add","delete","clear"],Fh=new Map;function yy(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Fh.get(t))return Fh.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=ER.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wR.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Fh.set(t,s),s}mR(e=>({...e,get:(t,n,r)=>yy(t,n)||e.get(t,n,r),has:(t,n)=>!!yy(t,n)||e.has(t,n)}));/**
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
 */class CR{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function TR(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const mf="@firebase/app",_y="0.9.12";/**
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
 */const ai=new Ll("@firebase/app"),SR="@firebase/app-compat",IR="@firebase/analytics-compat",kR="@firebase/analytics",xR="@firebase/app-check-compat",RR="@firebase/app-check",NR="@firebase/auth",PR="@firebase/auth-compat",AR="@firebase/database",bR="@firebase/database-compat",OR="@firebase/functions",DR="@firebase/functions-compat",LR="@firebase/installations",MR="@firebase/installations-compat",FR="@firebase/messaging",$R="@firebase/messaging-compat",UR="@firebase/performance",jR="@firebase/performance-compat",BR="@firebase/remote-config",VR="@firebase/remote-config-compat",HR="@firebase/storage",zR="@firebase/storage-compat",WR="@firebase/firestore",qR="@firebase/firestore-compat",GR="firebase",KR="9.22.2";/**
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
 */const vf="[DEFAULT]",YR={[mf]:"fire-core",[SR]:"fire-core-compat",[kR]:"fire-analytics",[IR]:"fire-analytics-compat",[RR]:"fire-app-check",[xR]:"fire-app-check-compat",[NR]:"fire-auth",[PR]:"fire-auth-compat",[AR]:"fire-rtdb",[bR]:"fire-rtdb-compat",[OR]:"fire-fn",[DR]:"fire-fn-compat",[LR]:"fire-iid",[MR]:"fire-iid-compat",[FR]:"fire-fcm",[$R]:"fire-fcm-compat",[UR]:"fire-perf",[jR]:"fire-perf-compat",[BR]:"fire-rc",[VR]:"fire-rc-compat",[HR]:"fire-gcs",[zR]:"fire-gcs-compat",[WR]:"fire-fst",[qR]:"fire-fst-compat","fire-js":"fire-js",[GR]:"fire-js-all"};/**
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
 */const sl=new Map,yf=new Map;function QR(e,t){try{e.container.addComponent(t)}catch(n){ai.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ht(e){const t=e.name;if(yf.has(t))return ai.debug(`There were multiple attempts to register component ${t}.`),!1;yf.set(t,e);for(const n of sl.values())QR(n,e);return!0}function Ml(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const XR={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mr=new Ci("app","Firebase",XR);/**
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
 */class JR{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
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
 */const zn=KR;function ME(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:vf,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw mr.create("bad-app-name",{appName:String(i)});if(n||(n=xE()),!n)throw mr.create("no-options");const s=sl.get(i);if(s){if(xu(n,s.options)&&xu(r,s.config))return s;throw mr.create("duplicate-app",{appName:i})}const o=new oR(i);for(const a of yf.values())o.addComponent(a);const l=new JR(n,r,o);return sl.set(i,l),l}function FE(e=vf){const t=sl.get(e);if(!t&&e===vf&&xE())return ME();if(!t)throw mr.create("no-app",{appName:e});return t}function ZR(){return Array.from(sl.values())}function Ae(e,t,n){var r;let i=(r=YR[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ai.warn(l.join(" "));return}Ht(new Ot(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const eN="firebase-heartbeat-database",tN=1,ol="firebase-heartbeat-store";let $h=null;function $E(){return $h||($h=_R(eN,tN,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ol)}}}).catch(e=>{throw mr.create("idb-open",{originalErrorMessage:e.message})})),$h}async function nN(e){try{return await(await $E()).transaction(ol).objectStore(ol).get(UE(e))}catch(t){if(t instanceof It)ai.warn(t.message);else{const n=mr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ai.warn(n.message)}}}async function wy(e,t){try{const r=(await $E()).transaction(ol,"readwrite");await r.objectStore(ol).put(t,UE(e)),await r.done}catch(n){if(n instanceof It)ai.warn(n.message);else{const r=mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ai.warn(r.message)}}}function UE(e){return`${e.name}!${e.options.appId}`}/**
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
 */const rN=1024,iN=30*24*60*60*1e3;class sN{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ey();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=iN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ey(),{heartbeatsToSend:n,unsentEntries:r}=oN(this._heartbeatsCache.heartbeats),i=Su(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ey(){return new Date().toISOString().substring(0,10)}function oN(e,t=rN){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Cy(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cy(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lN{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return AE()?Bx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await nN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wy(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wy(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Cy(e){return Su(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function aN(e){Ht(new Ot("platform-logger",t=>new CR(t),"PRIVATE")),Ht(new Ot("heartbeat",t=>new sN(t),"PRIVATE")),Ae(mf,_y,e),Ae(mf,_y,"esm2017"),Ae("fire-js","")}aN("");function dg(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function jE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uN=jE,BE=new Ci("auth","Firebase",jE());/**
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
 */const Ru=new Ll("@firebase/auth");function cN(e,...t){Ru.logLevel<=ne.WARN&&Ru.warn(`Auth (${zn}): ${e}`,...t)}function za(e,...t){Ru.logLevel<=ne.ERROR&&Ru.error(`Auth (${zn}): ${e}`,...t)}/**
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
 */function sn(e,...t){throw fg(e,...t)}function yn(e,...t){return fg(e,...t)}function hN(e,t,n){const r=Object.assign(Object.assign({},uN()),{[t]:n});return new Ci("auth","Firebase",r).create(t,{appName:e.name})}function fg(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return BE.create(e,...t)}function q(e,t,...n){if(!e)throw fg(t,...n)}function Pn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw za(t),new Error(t)}function jn(e,t){e||Pn(t)}/**
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
 */function _f(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function dN(){return Ty()==="http:"||Ty()==="https:"}function Ty(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function fN(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dN()||Ux()||"connection"in navigator)?navigator.onLine:!0}function pN(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Fl{constructor(t,n){this.shortDelay=t,this.longDelay=n,jn(n>t,"Short delay should be less than long delay!"),this.isMobile=cg()||NE()}get(){return fN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pg(e,t){jn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class VE{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mN=new Fl(3e4,6e4);function bs(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Os(e,t,n,r,i={}){return HE(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const l=As(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),VE.fetch()(zE(e,e.config.apiHost,n,l),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))})}async function HE(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},gN),t);try{const i=new vN(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ca(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ca(e,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Ca(e,"email-already-in-use",o);if(a==="USER_DISABLED")throw Ca(e,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw hN(e,c,u);sn(e,c)}}catch(i){if(i instanceof It)throw i;sn(e,"network-request-failed",{message:String(i)})}}async function $l(e,t,n,r,i={}){const s=await Os(e,t,n,r,i);return"mfaPendingCredential"in s&&sn(e,"multi-factor-auth-required",{_serverResponse:s}),s}function zE(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?pg(e.config,i):`${e.config.apiScheme}://${i}`}class vN{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yn(this.auth,"network-request-failed")),mN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ca(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yn(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function yN(e,t){return Os(e,"POST","/v1/accounts:delete",t)}async function _N(e,t){return Os(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function $o(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function wN(e,t=!1){const n=Tn(e),r=await n.getIdToken(t),i=gg(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:$o(Uh(i.auth_time)),issuedAtTime:$o(Uh(i.iat)),expirationTime:$o(Uh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Uh(e){return Number(e)*1e3}function gg(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return za("JWT malformed, contained fewer than 3 sections"),null;try{const i=Iu(n);return i?JSON.parse(i):(za("Failed to decode base64 JWT payload"),null)}catch(i){return za("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function EN(e){const t=gg(e);return q(t,"internal-error"),q(typeof t.exp!="undefined","internal-error"),q(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function ll(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof It&&CN(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function CN({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class TN{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class WE{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$o(this.lastLoginAt),this.creationTime=$o(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nu(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ll(e,_N(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?kN(s.providerUserInfo):[],l=IN(e.providerData,o),a=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new WE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function SN(e){const t=Tn(e);await Nu(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function IN(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function kN(e){return e.map(t=>{var{providerId:n}=t,r=dg(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function xN(e,t){const n=await HE(e,{},async()=>{const r=As({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=zE(e,i,"/v1/token",`key=${s}`),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",VE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class al{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){q(t.idToken,"internal-error"),q(typeof t.idToken!="undefined","internal-error"),q(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):EN(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return q(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await xN(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new al;return r&&(q(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new al,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Gn(e,t){q(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class ei{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=dg(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new WE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await ll(this,this.stsTokenManager.getToken(this.auth,t));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return wN(this,t)}reload(){return SN(this)}_assign(t){this!==t&&(q(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ei(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Nu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await ll(this,yN(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(l=n.tenantId)!==null&&l!==void 0?l:void 0,f=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,g=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:E,emailVerified:C,isAnonymous:k,providerData:I,stsTokenManager:O}=n;q(E&&O,t,"internal-error");const M=al.fromJSON(this.name,O);q(typeof E=="string",t,"internal-error"),Gn(d,t.name),Gn(h,t.name),q(typeof C=="boolean",t,"internal-error"),q(typeof k=="boolean",t,"internal-error"),Gn(m,t.name),Gn(v,t.name),Gn(_,t.name),Gn(f,t.name),Gn(p,t.name),Gn(g,t.name);const A=new ei({uid:E,auth:t,email:h,emailVerified:C,displayName:d,isAnonymous:k,photoURL:v,phoneNumber:m,tenantId:_,stsTokenManager:M,createdAt:p,lastLoginAt:g});return I&&Array.isArray(I)&&(A.providerData=I.map(ee=>Object.assign({},ee))),f&&(A._redirectEventId=f),A}static async _fromIdTokenResponse(t,n,r=!1){const i=new al;i.updateFromServerResponse(n);const s=new ei({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Nu(s),s}}/**
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
 */const Sy=new Map;function An(e){jn(e instanceof Function,"Expected a class definition");let t=Sy.get(e);return t?(jn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Sy.set(e,t),t)}/**
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
 */class qE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}qE.type="NONE";const Iy=qE;/**
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
 */function Wa(e,t,n){return`firebase:${e}:${t}:${n}`}class ts{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Wa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Wa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ei._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ts(An(Iy),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||An(Iy);const o=Wa(r,t.config.apiKey,t.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=ei._fromJSON(t,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new ts(s,t,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ts(s,t,r))}}/**
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
 */function ky(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(YE(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(GE(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(XE(t))return"Blackberry";if(JE(t))return"Webos";if(mg(t))return"Safari";if((t.includes("chrome/")||KE(t))&&!t.includes("edge/"))return"Chrome";if(QE(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function GE(e=ut()){return/firefox\//i.test(e)}function mg(e=ut()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function KE(e=ut()){return/crios\//i.test(e)}function YE(e=ut()){return/iemobile/i.test(e)}function QE(e=ut()){return/android/i.test(e)}function XE(e=ut()){return/blackberry/i.test(e)}function JE(e=ut()){return/webos/i.test(e)}function Rc(e=ut()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function RN(e=ut()){var t;return Rc(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function NN(){return jx()&&document.documentMode===10}function ZE(e=ut()){return Rc(e)||QE(e)||JE(e)||XE(e)||/windows phone/i.test(e)||YE(e)}function PN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function e1(e,t=[]){let n;switch(e){case"Browser":n=ky(ut());break;case"Worker":n=`${ky(ut())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${zn}/${r}`}async function t1(e,t){return Os(e,"GET","/v2/recaptchaConfig",bs(e,t))}function xy(e){return e!==void 0&&e.enterprise!==void 0}class n1{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function AN(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function r1(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=yn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",AN().appendChild(r)})}function bN(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const ON="https://www.google.com/recaptcha/enterprise.js?render=",DN="recaptcha-enterprise",LN="NO_RECAPTCHA";class i1{constructor(t){this.type=DN,this.auth=Ds(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{t1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new n1(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;xy(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(LN)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&xy(window.grecaptcha))i(l,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}r1(ON+l).then(()=>{i(l,s,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}async function Pu(e,t,n,r=!1){const i=new i1(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class MN{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,l)=>{try{const a=t(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class FN{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ry(this),this.idTokenSubscription=new Ry(this),this.beforeStateQueue=new MN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=BE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ts.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(t);(!o||o===l)&&(a==null?void 0:a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Nu(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=pN()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Tn(t):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&q(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(An(t))})}async initializeRecaptchaConfig(){const t=await t1(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new n1(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new i1(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ci("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&An(t)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await ts.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=e1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&cN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ds(e){return Tn(e)}class Ry{constructor(t){this.auth=t,this.observer=null,this.addObserver=Kx(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function $N(e,t){const n=Ml(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(xu(s,t!=null?t:{}))return i;sn(i,"already-initialized")}return n.initialize({options:t})}function UN(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function jN(e,t,n){const r=Ds(e);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=s1(t),{host:o,port:l}=BN(t),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||VN()}function s1(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function BN(e){const t=s1(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ny(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ny(o)}}}function Ny(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function VN(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class vg{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(t){return Pn("not implemented")}_linkToIdToken(t,n){return Pn("not implemented")}_getReauthenticationResolver(t){return Pn("not implemented")}}async function HN(e,t){return Os(e,"POST","/v1/accounts:update",t)}/**
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
 */async function jh(e,t){return $l(e,"POST","/v1/accounts:signInWithPassword",bs(e,t))}/**
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
 */async function zN(e,t){return $l(e,"POST","/v1/accounts:signInWithEmailLink",bs(e,t))}async function WN(e,t){return $l(e,"POST","/v1/accounts:signInWithEmailLink",bs(e,t))}/**
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
 */class ul extends vg{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ul(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ul(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Pu(t,r,"signInWithPassword");return jh(t,i)}else return jh(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Pu(t,r,"signInWithPassword");return jh(t,s)}else return Promise.reject(i)});case"emailLink":return zN(t,{email:this._email,oobCode:this._password});default:sn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return HN(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return WN(t,{idToken:n,email:this._email,oobCode:this._password});default:sn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function ns(e,t){return $l(e,"POST","/v1/accounts:signInWithIdp",bs(e,t))}/**
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
 */const qN="http://localhost";class ui extends vg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new ui(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=dg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ui(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return ns(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,ns(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ns(t,n)}buildRequest(){const t={requestUri:qN,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=As(n)}return t}}/**
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
 */function GN(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KN(e){const t=Eo(Co(e)).link,n=t?Eo(Co(t)).deep_link_id:null,r=Eo(Co(e)).deep_link_id;return(r?Eo(Co(r)).link:null)||r||n||t||e}class yg{constructor(t){var n,r,i,s,o,l;const a=Eo(Co(t)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,c=(r=a.oobCode)!==null&&r!==void 0?r:null,d=GN((i=a.mode)!==null&&i!==void 0?i:null);q(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(t){const n=KN(t);try{return new yg(n)}catch{return null}}}/**
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
 */class Ls{constructor(){this.providerId=Ls.PROVIDER_ID}static credential(t,n){return ul._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=yg.parseLink(n);return q(r,"argument-error"),ul._fromEmailAndCode(t,r.code,r.tenantId)}}Ls.PROVIDER_ID="password";Ls.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ls.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class o1{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ul extends o1{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Xn extends Ul{constructor(){super("facebook.com")}static credential(t){return ui._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xn.credentialFromTaggedObject(t)}static credentialFromError(t){return Xn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Xn.credential(t.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
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
 */class Jn extends Ul{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return ui._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Jn.credentialFromTaggedObject(t)}static credentialFromError(t){return Jn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
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
 */class Zn extends Ul{constructor(){super("github.com")}static credential(t){return ui._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Zn.credentialFromTaggedObject(t)}static credentialFromError(t){return Zn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Zn.credential(t.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
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
 */class er extends Ul{constructor(){super("twitter.com")}static credential(t,n){return ui._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return er.credentialFromTaggedObject(t)}static credentialFromError(t){return er.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return er.credential(n,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
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
 */async function Bh(e,t){return $l(e,"POST","/v1/accounts:signUp",bs(e,t))}/**
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
 */class ci{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await ei._fromIdTokenResponse(t,r,i),o=Py(r);return new ci({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Py(r);return new ci({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Py(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Au extends It{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Au.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Au(t,n,r,i)}}function l1(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Au._fromErrorAndOperation(e,s,t,r):s})}async function YN(e,t,n=!1){const r=await ll(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ci._forOperation(e,"link",r)}/**
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
 */async function QN(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ll(e,l1(r,i,t,e),n);q(s.idToken,r,"internal-error");const o=gg(s.idToken);q(o,r,"internal-error");const{sub:l}=o;return q(e.uid===l,r,"user-mismatch"),ci._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&sn(r,"user-mismatch"),s}}/**
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
 */async function a1(e,t,n=!1){const r="signIn",i=await l1(e,r,t),s=await ci._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function XN(e,t){return a1(Ds(e),t)}async function JN(e,t,n){var r;const i=Ds(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Pu(i,s,"signUpPassword");o=Bh(i,u)}else o=Bh(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Pu(i,s,"signUpPassword");return Bh(i,c)}else return Promise.reject(u)});const l=await o.catch(u=>Promise.reject(u)),a=await ci._fromIdTokenResponse(i,"signIn",l);return await i._updateCurrentUser(a.user),a}function ZN(e,t,n){return XN(Tn(e),Ls.credential(t,n))}function u1(e,t,n,r){return Tn(e).onIdTokenChanged(t,n,r)}function eP(e,t,n){return Tn(e).beforeAuthStateChanged(t,n)}const bu="__sak";/**
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
 */class c1{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bu,"1"),this.storage.removeItem(bu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function tP(){const e=ut();return mg(e)||Rc(e)}const nP=1e3,rP=10;class h1 extends c1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=tP()&&PN(),this.fallbackToPolling=ZE(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);NN()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,rP):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},nP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}h1.type="LOCAL";const iP=h1;/**
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
 */class d1 extends c1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}d1.type="SESSION";const f1=d1;/**
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
 */function sP(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Nc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Nc(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await sP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nc.receivers=[];/**
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
 */function _g(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class oP{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=_g("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function _n(){return window}function lP(e){_n().location.href=e}/**
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
 */function p1(){return typeof _n().WorkerGlobalScope!="undefined"&&typeof _n().importScripts=="function"}async function aP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uP(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function cP(){return p1()?self:null}/**
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
 */const g1="firebaseLocalStorageDb",hP=1,Ou="firebaseLocalStorage",m1="fbase_key";class jl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pc(e,t){return e.transaction([Ou],t?"readwrite":"readonly").objectStore(Ou)}function dP(){const e=indexedDB.deleteDatabase(g1);return new jl(e).toPromise()}function wf(){const e=indexedDB.open(g1,hP);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ou,{keyPath:m1})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ou)?t(r):(r.close(),await dP(),t(await wf()))})})}async function Ay(e,t,n){const r=Pc(e,!0).put({[m1]:t,value:n});return new jl(r).toPromise()}async function fP(e,t){const n=Pc(e,!1).get(t),r=await new jl(n).toPromise();return r===void 0?null:r.value}function by(e,t){const n=Pc(e,!0).delete(t);return new jl(n).toPromise()}const pP=800,gP=3;class v1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wf(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>gP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return p1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nc._getInstance(cP()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await aP(),!this.activeServiceWorker)return;this.sender=new oP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||uP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await wf();return await Ay(t,bu,"1"),await by(t,bu),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ay(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>fP(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>by(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Pc(i,!1).getAll();return new jl(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}v1.type="LOCAL";const mP=v1;new Fl(3e4,6e4);/**
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
 */function vP(e,t){return t?An(t):(q(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class wg extends vg{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ns(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ns(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ns(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function yP(e){return a1(e.auth,new wg(e),e.bypassAuthState)}function _P(e){const{auth:t,user:n}=e;return q(n,t,"internal-error"),QN(n,new wg(e),e.bypassAuthState)}async function wP(e){const{auth:t,user:n}=e;return q(n,t,"internal-error"),YN(n,new wg(e),e.bypassAuthState)}/**
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
 */class y1{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=t;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return yP;case"linkViaPopup":case"linkViaRedirect":return wP;case"reauthViaPopup":case"reauthViaRedirect":return _P;default:sn(this.auth,"internal-error")}}resolve(t){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const EP=new Fl(2e3,1e4);class ji extends y1{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ji.currentPopupAction&&ji.currentPopupAction.cancel(),ji.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return q(t,this.auth,"internal-error"),t}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const t=_g();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ji.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,EP.get())};t()}}ji.currentPopupAction=null;/**
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
 */const CP="pendingRedirect",qa=new Map;class TP extends y1{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=qa.get(this.auth._key());if(!t){try{const r=await SP(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}qa.set(this.auth._key(),t)}return this.bypassAuthState||qa.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SP(e,t){const n=xP(t),r=kP(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function IP(e,t){qa.set(e._key(),t)}function kP(e){return An(e._redirectPersistence)}function xP(e){return Wa(CP,e.config.apiKey,e.name)}async function RP(e,t,n=!1){const r=Ds(e),i=vP(r,t),o=await new TP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const NP=10*60*1e3;class PP{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!AP(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!_1(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=NP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oy(t))}saveEventToCache(t){this.cachedEventUids.add(Oy(t)),this.lastProcessedEventTime=Date.now()}}function Oy(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function _1({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function AP(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _1(e);default:return!1}}/**
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
 */async function bP(e,t={}){return Os(e,"GET","/v1/projects",t)}/**
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
 */const OP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DP=/^https?/;async function LP(e){if(e.config.emulator)return;const{authorizedDomains:t}=await bP(e);for(const n of t)try{if(MP(n))return}catch{}sn(e,"unauthorized-domain")}function MP(e){const t=_f(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!DP.test(n))return!1;if(OP.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const FP=new Fl(3e4,6e4);function Dy(){const e=_n().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function $P(e){return new Promise((t,n)=>{var r,i,s;function o(){Dy(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Dy(),n(yn(e,"network-request-failed"))},timeout:FP.get()})}if(!((i=(r=_n().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=_n().gapi)===null||s===void 0)&&s.load)o();else{const l=bN("iframefcb");return _n()[l]=()=>{gapi.load?o():n(yn(e,"network-request-failed"))},r1(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(t=>{throw Ga=null,t})}let Ga=null;function UP(e){return Ga=Ga||$P(e),Ga}/**
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
 */const jP=new Fl(5e3,15e3),BP="__/auth/iframe",VP="emulator/auth/iframe",HP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WP(e){const t=e.config;q(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?pg(t,VP):`https://${e.config.authDomain}/${BP}`,r={apiKey:t.apiKey,appName:e.name,v:zn},i=zP.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${As(r).slice(1)}`}async function qP(e){const t=await UP(e),n=_n().gapi;return q(n,e,"internal-error"),t.open({where:document.body,url:WP(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=yn(e,"network-request-failed"),l=_n().setTimeout(()=>{s(o)},jP.get());function a(){_n().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const GP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KP=500,YP=600,QP="_blank",XP="http://localhost";class Ly{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JP(e,t,n,r=KP,i=YP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},GP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ut().toLowerCase();n&&(l=KE(u)?QP:n),GE(u)&&(t=t||XP,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[m,v])=>`${h}${m}=${v},`,"");if(RN(u)&&l!=="_self")return ZP(t||"",l),new Ly(null);const d=window.open(t||"",l,c);q(d,e,"popup-blocked");try{d.focus()}catch{}return new Ly(d)}function ZP(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const eA="__/auth/handler",tA="emulator/auth/handler",nA=encodeURIComponent("fac");async function My(e,t,n,r,i,s){q(e.config.authDomain,e,"auth-domain-config-required"),q(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:zn,eventId:i};if(t instanceof o1){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ff(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(t instanceof Ul){const c=t.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await e._getAppCheckToken(),u=a?`#${nA}=${encodeURIComponent(a)}`:"";return`${rA(e)}?${As(l).slice(1)}${u}`}function rA({config:e}){return e.emulator?pg(e,tA):`https://${e.authDomain}/${eA}`}/**
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
 */const Vh="webStorageSupport";class iA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=f1,this._completeRedirectFn=RP,this._overrideRedirectResult=IP}async _openPopup(t,n,r,i){var s;jn((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await My(t,n,r,_f(),i);return JP(t,o,_g())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await My(t,n,r,_f(),i);return lP(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await qP(t),r=new PP(t);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Vh,{type:Vh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vh];o!==void 0&&n(!!o),sn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LP(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return ZE()||mg()||Rc()}}const sA=iA;var Fy="@firebase/auth",$y="0.23.2";/**
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
 */class oA{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lA(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function aA(e){Ht(new Ot("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:e1(e)},u=new FN(r,i,s,a);return UN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ht(new Ot("auth-internal",t=>{const n=Ds(t.getProvider("auth").getImmediate());return(r=>new oA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ae(Fy,$y,lA(e)),Ae(Fy,$y,"esm2017")}/**
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
 */const uA=5*60,cA=RE("authIdTokenMaxAge")||uA;let Uy=null;const hA=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>cA)return;const i=n==null?void 0:n.token;Uy!==i&&(Uy=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function dA(e=FE()){const t=Ml(e,"auth");if(t.isInitialized())return t.getImmediate();const n=$N(e,{popupRedirectResolver:sA,persistence:[mP,iP,f1]}),r=RE("authTokenSyncURL");if(r){const s=hA(r);eP(n,s,()=>s(n.currentUser)),u1(n,o=>s(o))}const i=kE("auth");return i&&jN(n,`http://${i}`),n}aA("Browser");var fA=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},b,Eg=Eg||{},K=fA||self;function Ac(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Bl(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function pA(e){return Object.prototype.hasOwnProperty.call(e,Hh)&&e[Hh]||(e[Hh]=++gA)}var Hh="closure_uid_"+(1e9*Math.random()>>>0),gA=0;function mA(e,t,n){return e.call.apply(e.bind,arguments)}function vA(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function ot(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ot=mA:ot=vA,ot.apply(null,arguments)}function Ta(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function ze(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return t.prototype[i].apply(r,o)}}function Pr(){this.s=this.s,this.o=this.o}var yA=0;Pr.prototype.s=!1;Pr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),yA!=0)&&pA(this)};Pr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const w1=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Cg(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function jy(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ac(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function lt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var _A=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{K.addEventListener("test",()=>{},t),K.removeEventListener("test",()=>{},t)}catch{}return e}();function cl(e){return/^[\s\xa0]*$/.test(e)}function bc(){var e=K.navigator;return e&&(e=e.userAgent)?e:""}function un(e){return bc().indexOf(e)!=-1}function Tg(e){return Tg[" "](e),e}Tg[" "]=function(){};function wA(e,t){var n=fb;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var EA=un("Opera"),hl=un("Trident")||un("MSIE"),E1=un("Edge"),Ef=E1||hl,C1=un("Gecko")&&!(bc().toLowerCase().indexOf("webkit")!=-1&&!un("Edge"))&&!(un("Trident")||un("MSIE"))&&!un("Edge"),CA=bc().toLowerCase().indexOf("webkit")!=-1&&!un("Edge");function T1(){var e=K.document;return e?e.documentMode:void 0}e:{var By="",zh=function(){var e=bc();if(C1)return/rv:([^\);]+)(\)|;)/.exec(e);if(E1)return/Edge\/([\d\.]+)/.exec(e);if(hl)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(CA)return/WebKit\/(\S+)/.exec(e);if(EA)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(zh&&(By=zh?zh[1]:""),hl){var Vy=T1();if(Vy!=null&&Vy>parseFloat(By))break e}}K.document&&hl&&T1();function dl(e,t){if(lt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(C1){e:{try{Tg(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:TA[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&dl.$.h.call(this)}}ze(dl,lt);var TA={2:"touch",3:"pen",4:"mouse"};dl.prototype.h=function(){dl.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Vl="closure_listenable_"+(1e6*Math.random()|0),SA=0;function IA(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++SA,this.fa=this.ia=!1}function Oc(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Sg(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function kA(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function S1(e){const t={};for(const n in e)t[n]=e[n];return t}const Hy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I1(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Hy.length;s++)n=Hy[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Dc(e){this.src=e,this.g={},this.h=0}Dc.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Tf(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new IA(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Cf(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=w1(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Oc(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Tf(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Ig="closure_lm_"+(1e6*Math.random()|0),Wh={};function k1(e,t,n,r,i){if(r&&r.once)return R1(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)k1(e,t[s],n,r,i);return null}return n=Rg(n),e&&e[Vl]?e.O(t,n,Bl(r)?!!r.capture:!!r,i):x1(e,t,n,!1,r,i)}function x1(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Bl(i)?!!i.capture:!!i,l=xg(e);if(l||(e[Ig]=l=new Dc(e)),n=l.add(t,n,r,o,s),n.proxy)return n;if(r=xA(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)_A||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(P1(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xA(){function e(n){return t.call(e.src,e.listener,n)}const t=RA;return e}function R1(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)R1(e,t[s],n,r,i);return null}return n=Rg(n),e&&e[Vl]?e.P(t,n,Bl(r)?!!r.capture:!!r,i):x1(e,t,n,!0,r,i)}function N1(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)N1(e,t[s],n,r,i);else r=Bl(r)?!!r.capture:!!r,n=Rg(n),e&&e[Vl]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Tf(s,n,r,i),-1<n&&(Oc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=xg(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Tf(t,n,r,i)),(n=-1<e?t[e]:null)&&kg(n))}function kg(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Vl])Cf(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(P1(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=xg(t))?(Cf(n,e),n.h==0&&(n.src=null,t[Ig]=null)):Oc(e)}}}function P1(e){return e in Wh?Wh[e]:Wh[e]="on"+e}function RA(e,t){if(e.fa)e=!0;else{t=new dl(t,this);var n=e.listener,r=e.la||e.src;e.ia&&kg(e),e=n.call(r,t)}return e}function xg(e){return e=e[Ig],e instanceof Dc?e:null}var qh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rg(e){return typeof e=="function"?e:(e[qh]||(e[qh]=function(t){return e.handleEvent(t)}),e[qh])}function He(){Pr.call(this),this.i=new Dc(this),this.S=this,this.J=null}ze(He,Pr);He.prototype[Vl]=!0;He.prototype.removeEventListener=function(e,t,n,r){N1(this,e,t,n,r)};function Ye(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new lt(t,e);else if(t instanceof lt)t.target=t.target||e;else{var i=t;t=new lt(r,e),I1(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Sa(o,r,!0,t)&&i}if(o=t.g=e,i=Sa(o,r,!0,t)&&i,i=Sa(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Sa(o,r,!1,t)&&i}He.prototype.N=function(){if(He.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Oc(n[r]);delete e.g[t],e.h--}}this.J=null};He.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};He.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Sa(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var l=o.listener,a=o.la||o.src;o.ia&&Cf(e.i,o),i=l.call(a,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ng=K.JSON.stringify;class NA{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function PA(){var e=Pg;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class AA{constructor(){this.h=this.g=null}add(t,n){const r=A1.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var A1=new NA(()=>new bA,e=>e.reset());class bA{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function OA(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function DA(e){K.setTimeout(()=>{throw e},0)}let fl,pl=!1,Pg=new AA,b1=()=>{const e=K.Promise.resolve(void 0);fl=()=>{e.then(LA)}};var LA=()=>{for(var e;e=PA();){try{e.h.call(e.g)}catch(n){DA(n)}var t=A1;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}pl=!1};function Lc(e,t){He.call(this),this.h=e||1,this.g=t||K,this.j=ot(this.qb,this),this.l=Date.now()}ze(Lc,He);b=Lc.prototype;b.ga=!1;b.T=null;b.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ye(this,"tick"),this.ga&&(Ag(this),this.start()))}};b.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ag(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}b.N=function(){Lc.$.N.call(this),Ag(this),delete this.g};function bg(e,t,n){if(typeof e=="function")n&&(e=ot(e,n));else if(e&&typeof e.handleEvent=="function")e=ot(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:K.setTimeout(e,t||0)}function O1(e){e.g=bg(()=>{e.g=null,e.i&&(e.i=!1,O1(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class MA extends Pr{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:O1(this)}N(){super.N(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gl(e){Pr.call(this),this.h=e,this.g={}}ze(gl,Pr);var zy=[];function D1(e,t,n,r){Array.isArray(n)||(n&&(zy[0]=n.toString()),n=zy);for(var i=0;i<n.length;i++){var s=k1(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function L1(e){Sg(e.g,function(t,n){this.g.hasOwnProperty(n)&&kg(t)},e),e.g={}}gl.prototype.N=function(){gl.$.N.call(this),L1(this)};gl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Mc(){this.g=!0}Mc.prototype.Ea=function(){this.g=!1};function FA(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",l=s.split("&"),a=0;a<l.length;a++){var u=l[a].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function $A(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function Bi(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+jA(e,n)+(r?" "+r:"")})}function UA(e,t){e.info(function(){return"TIMEOUT: "+t})}Mc.prototype.info=function(){};function jA(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ng(n)}catch{return t}}var Ms={},Wy=null;function Og(){return Wy=Wy||new He}Ms.Ta="serverreachability";function M1(e){lt.call(this,Ms.Ta,e)}ze(M1,lt);function ml(e){const t=Og();Ye(t,new M1(t))}Ms.STAT_EVENT="statevent";function F1(e,t){lt.call(this,Ms.STAT_EVENT,e),this.stat=t}ze(F1,lt);function pt(e){const t=Og();Ye(t,new F1(t,e))}Ms.Ua="timingevent";function $1(e,t){lt.call(this,Ms.Ua,e),this.size=t}ze($1,lt);function Hl(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){e()},t)}var Dg={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},BA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Lg(){}Lg.prototype.h=null;function qy(e){return e.h||(e.h=e.i())}function VA(){}var zl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Mg(){lt.call(this,"d")}ze(Mg,lt);function Fg(){lt.call(this,"c")}ze(Fg,lt);var Sf;function Fc(){}ze(Fc,Lg);Fc.prototype.g=function(){return new XMLHttpRequest};Fc.prototype.i=function(){return{}};Sf=new Fc;function Wl(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new gl(this),this.P=HA,e=Ef?125:void 0,this.V=new Lc(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new U1}function U1(){this.i=null,this.g="",this.h=!1}var HA=45e3,If={},Du={};b=Wl.prototype;b.setTimeout=function(e){this.P=e};function kf(e,t,n){e.L=1,e.v=Uc(Bn(t)),e.s=n,e.S=!0,j1(e,null)}function j1(e,t){e.G=Date.now(),ql(e),e.A=Bn(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),K1(n.i,"t",r),e.C=0,n=e.l.J,e.h=new U1,e.g=gC(e.l,n?t:null,!e.s),0<e.O&&(e.M=new MA(ot(e.Pa,e,e.g),e.O)),D1(e.U,e.g,"readystatechange",e.nb),t=e.I?S1(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),ml(),FA(e.j,e.u,e.A,e.m,e.W,e.s)}b.nb=function(e){e=e.target;const t=this.M;t&&fn(e)==3?t.l():this.Pa(e)};b.Pa=function(e){try{if(e==this.g)e:{const c=fn(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Ef||this.g&&(this.h.h||this.g.ja()||Qy(this.g)))){this.J||c!=4||t==7||(t==8||0>=d?ml(3):ml(2)),$c(this);var n=this.g.da();this.ca=n;t:if(B1(this)){var r=Qy(this.g);e="";var i=r.length,s=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Gr(this),Uo(this);var o="";break t}this.h.i=new K.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,$A(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!cl(l)){var u=l;break t}}u=null}if(n=u)Bi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xf(this,n);else{this.i=!1,this.o=3,pt(12),Gr(this),Uo(this);break e}}this.S?(V1(this,c,o),Ef&&this.i&&c==3&&(D1(this.U,this.V,"tick",this.mb),this.V.start())):(Bi(this.j,this.m,o,null),xf(this,o)),c==4&&Gr(this),this.i&&!this.J&&(c==4?hC(this.l,this):(this.i=!1,ql(this)))}else cb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),Gr(this),Uo(this)}}}catch{}finally{}};function B1(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function V1(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=zA(e,n),i==Du){t==4&&(e.o=4,pt(14),r=!1),Bi(e.j,e.m,null,"[Incomplete Response]");break}else if(i==If){e.o=4,pt(15),Bi(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Bi(e.j,e.m,i,null),xf(e,i);B1(e)&&i!=Du&&i!=If&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,pt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Hg(t),t.M=!0,pt(11))):(Bi(e.j,e.m,n,"[Invalid Chunked Response]"),Gr(e),Uo(e))}b.mb=function(){if(this.g){var e=fn(this.g),t=this.g.ja();this.C<t.length&&($c(this),V1(this,e,t),this.i&&e!=4&&ql(this))}};function zA(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Du:(n=Number(t.substring(n,r)),isNaN(n)?If:(r+=1,r+n>t.length?Du:(t=t.slice(r,r+n),e.C=r+n,t)))}b.cancel=function(){this.J=!0,Gr(this)};function ql(e){e.Y=Date.now()+e.P,H1(e,e.P)}function H1(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Hl(ot(e.lb,e),t)}function $c(e){e.B&&(K.clearTimeout(e.B),e.B=null)}b.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(UA(this.j,this.A),this.L!=2&&(ml(),pt(17)),Gr(this),this.o=2,Uo(this)):H1(this,this.Y-e)};function Uo(e){e.l.H==0||e.J||hC(e.l,e)}function Gr(e){$c(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Ag(e.V),L1(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function xf(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Rf(n.i,e))){if(!e.K&&Rf(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Fu(n),Hc(n);else break e;Vg(n),pt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Hl(ot(n.ib,n),6e3));if(1>=X1(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Kr(n,11)}else if((e.K||n.g==e)&&Fu(n),!cl(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&($g(s,s.h),s.h=null))}if(r.F){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,pe(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=pC(r,r.J?r.pa:null,r.Y),o.K){J1(r.i,o);var l=o,a=r.L;a&&l.setTimeout(a),l.B&&($c(l),ql(l)),r.g=o}else uC(r);0<n.j.length&&zc(n)}else u[0]!="stop"&&u[0]!="close"||Kr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Kr(n,7):Bg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ml(4)}catch{}}function WA(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map!="undefined"&&e instanceof Map||typeof Set!="undefined"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Ac(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function qA(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map!="undefined"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set!="undefined"&&e instanceof Set)){if(Ac(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function z1(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Ac(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=qA(e),r=WA(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var W1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GA(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ti(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ti){this.h=e.h,Lu(this,e.j),this.s=e.s,this.g=e.g,Mu(this,e.m),this.l=e.l;var t=e.i,n=new vl;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Gy(this,n),this.o=e.o}else e&&(t=String(e).match(W1))?(this.h=!1,Lu(this,t[1]||"",!0),this.s=To(t[2]||""),this.g=To(t[3]||"",!0),Mu(this,t[4]),this.l=To(t[5]||"",!0),Gy(this,t[6]||"",!0),this.o=To(t[7]||"")):(this.h=!1,this.i=new vl(null,this.h))}ti.prototype.toString=function(){var e=[],t=this.j;t&&e.push(So(t,Ky,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(So(t,Ky,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(So(n,n.charAt(0)=="/"?QA:YA,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",So(n,JA)),e.join("")};function Bn(e){return new ti(e)}function Lu(e,t,n){e.j=n?To(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Mu(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Gy(e,t,n){t instanceof vl?(e.i=t,ZA(e.i,e.h)):(n||(t=So(t,XA)),e.i=new vl(t,e.h))}function pe(e,t,n){e.i.set(t,n)}function Uc(e){return pe(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function To(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function So(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,KA),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function KA(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ky=/[#\/\?@]/g,YA=/[#\?:]/g,QA=/[#\?]/g,XA=/[#\?@]/g,JA=/#/g;function vl(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ar(e){e.g||(e.g=new Map,e.h=0,e.i&&GA(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}b=vl.prototype;b.add=function(e,t){Ar(this),this.i=null,e=Fs(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function q1(e,t){Ar(e),t=Fs(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function G1(e,t){return Ar(e),t=Fs(e,t),e.g.has(t)}b.forEach=function(e,t){Ar(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};b.ta=function(){Ar(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};b.Z=function(e){Ar(this);let t=[];if(typeof e=="string")G1(this,e)&&(t=t.concat(this.g.get(Fs(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};b.set=function(e,t){return Ar(this),this.i=null,e=Fs(this,e),G1(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};b.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function K1(e,t,n){q1(e,t),0<n.length&&(e.i=null,e.g.set(Fs(e,t),Cg(n)),e.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Fs(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ZA(e,t){t&&!e.j&&(Ar(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(q1(this,r),K1(this,i,n))},e)),e.j=t}var eb=class{constructor(e,t){this.g=e,this.map=t}};function Y1(e){this.l=e||tb,K.PerformanceNavigationTiming?(e=K.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(K.g&&K.g.Ka&&K.g.Ka()&&K.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tb=10;function Q1(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function X1(e){return e.h?1:e.g?e.g.size:0}function Rf(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function $g(e,t){e.g?e.g.add(t):e.h=t}function J1(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Y1.prototype.cancel=function(){if(this.i=Z1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Z1(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Cg(e.i)}var nb=class{stringify(e){return K.JSON.stringify(e,void 0)}parse(e){return K.JSON.parse(e,void 0)}};function rb(){this.g=new nb}function ib(e,t,n){const r=n||"";try{z1(e,function(i,s){let o=i;Bl(i)&&(o=Ng(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function sb(e,t){const n=new Mc;if(K.Image){const r=new Image;r.onload=Ta(Ia,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Ta(Ia,n,r,"TestLoadImage: error",!1,t),r.onabort=Ta(Ia,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ta(Ia,n,r,"TestLoadImage: timeout",!1,t),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Ia(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function jc(e){this.l=e.fc||null,this.j=e.ob||!1}ze(jc,Lg);jc.prototype.g=function(){return new Bc(this.l,this.j)};jc.prototype.i=function(e){return function(){return e}}({});function Bc(e,t){He.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Ug,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(Bc,He);var Ug=0;b=Bc.prototype;b.open=function(e,t){if(this.readyState!=Ug)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,yl(this)};b.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||K).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gl(this)),this.readyState=Ug};b.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,yl(this)),this.g&&(this.readyState=3,yl(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof K.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;eC(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function eC(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}b.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Gl(this):yl(this),this.readyState==3&&eC(this)}};b.Za=function(e){this.g&&(this.response=this.responseText=e,Gl(this))};b.Ya=function(e){this.g&&(this.response=e,Gl(this))};b.ka=function(){this.g&&Gl(this)};function Gl(e){e.readyState=4,e.l=null,e.j=null,e.A=null,yl(e)}b.setRequestHeader=function(e,t){this.v.append(e,t)};b.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function yl(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Bc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var ob=K.JSON.parse;function Re(e){He.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tC,this.L=this.M=!1}ze(Re,He);var tC="",lb=/^https?$/i,ab=["POST","PUT"];b=Re.prototype;b.Oa=function(e){this.M=e};b.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Sf.g(),this.C=this.u?qy(this.u):qy(Sf),this.g.onreadystatechange=ot(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Yy(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=K.FormData&&e instanceof K.FormData,!(0<=w1(ab,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{iC(this),0<this.B&&((this.L=ub(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ot(this.ua,this)):this.A=bg(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Yy(this,s)}};function ub(e){return hl&&typeof e.timeout=="number"&&e.ontimeout!==void 0}b.ua=function(){typeof Eg!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ye(this,"timeout"),this.abort(8))};function Yy(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,nC(e),Vc(e)}function nC(e){e.F||(e.F=!0,Ye(e,"complete"),Ye(e,"error"))}b.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ye(this,"complete"),Ye(this,"abort"),Vc(this))};b.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vc(this,!0)),Re.$.N.call(this)};b.La=function(){this.s||(this.G||this.v||this.l?rC(this):this.kb())};b.kb=function(){rC(this)};function rC(e){if(e.h&&typeof Eg!="undefined"&&(!e.C[1]||fn(e)!=4||e.da()!=2)){if(e.v&&fn(e)==4)bg(e.La,0,e);else if(Ye(e,"readystatechange"),fn(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(W1)[1]||null;!i&&K.self&&K.self.location&&(i=K.self.location.protocol.slice(0,-1)),r=!lb.test(i?i.toLowerCase():"")}n=r}if(n)Ye(e,"complete"),Ye(e,"success");else{e.m=6;try{var s=2<fn(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",nC(e)}}finally{Vc(e)}}}}function Vc(e,t){if(e.g){iC(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Ye(e,"ready");try{n.onreadystatechange=r}catch{}}}function iC(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(K.clearTimeout(e.A),e.A=null)}b.isActive=function(){return!!this.g};function fn(e){return e.g?e.g.readyState:0}b.da=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}};b.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),ob(t)}};function Qy(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case tC:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function cb(e){const t={};e=(e.g&&2<=fn(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(cl(e[r]))continue;var n=OA(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}kA(t,function(r){return r.join(", ")})}b.Ia=function(){return this.m};b.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function sC(e){let t="";return Sg(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function jg(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=sC(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):pe(e,t,n))}function oo(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function oC(e){this.Ga=0,this.j=[],this.l=new Mc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=oo("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=oo("baseRetryDelayMs",5e3,e),this.hb=oo("retryDelaySeedMs",1e4,e),this.eb=oo("forwardChannelMaxRetries",2,e),this.xa=oo("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Y1(e&&e.concurrentRequestLimit),this.Ja=new rb,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}b=oC.prototype;b.ra=8;b.H=1;function Bg(e){if(lC(e),e.H==3){var t=e.W++,n=Bn(e.I);if(pe(n,"SID",e.K),pe(n,"RID",t),pe(n,"TYPE","terminate"),Kl(e,n),t=new Wl(e,e.l,t),t.L=2,t.v=Uc(Bn(n)),n=!1,K.navigator&&K.navigator.sendBeacon)try{n=K.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&K.Image&&(new Image().src=t.v,n=!0),n||(t.g=gC(t.l,null),t.g.ha(t.v)),t.G=Date.now(),ql(t)}fC(e)}function Hc(e){e.g&&(Hg(e),e.g.cancel(),e.g=null)}function lC(e){Hc(e),e.u&&(K.clearTimeout(e.u),e.u=null),Fu(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&K.clearTimeout(e.m),e.m=null)}function zc(e){if(!Q1(e.i)&&!e.m){e.m=!0;var t=e.Na;fl||b1(),pl||(fl(),pl=!0),Pg.add(t,e),e.C=0}}function hb(e,t){return X1(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Hl(ot(e.Na,e,t),dC(e,e.C)),e.C++,!0)}b.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Wl(this,this.l,e);let s=this.s;if(this.U&&(s?(s=S1(s),I1(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=aC(this,i,t),n=Bn(this.I),pe(n,"RID",e),pe(n,"CVER",22),this.F&&pe(n,"X-HTTP-Session-Id",this.F),Kl(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(sC(s)))+"&"+t:this.o&&jg(n,this.o,s)),$g(this.i,i),this.bb&&pe(n,"TYPE","init"),this.P?(pe(n,"$req",t),pe(n,"SID","null"),i.aa=!0,kf(i,n,null)):kf(i,n,t),this.H=2}}else this.H==3&&(e?Xy(this,e):this.j.length==0||Q1(this.i)||Xy(this))};function Xy(e,t){var n;t?n=t.m:n=e.W++;const r=Bn(e.I);pe(r,"SID",e.K),pe(r,"RID",n),pe(r,"AID",e.V),Kl(e,r),e.o&&e.s&&jg(r,e.o,e.s),n=new Wl(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=aC(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),$g(e.i,n),kf(n,r,t)}function Kl(e,t){e.na&&Sg(e.na,function(n,r){pe(t,r,n)}),e.h&&z1({},function(n,r){pe(t,r,n)})}function aC(e,t,n){n=Math.min(e.j.length,n);var r=e.h?ot(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let l=!0;for(let a=0;a<n;a++){let u=i[a].g;const c=i[a].map;if(u-=s,0>u)s=Math.max(0,i[a].g-100),l=!1;else try{ib(c,o,"req"+u+"_")}catch{r&&r(c)}}if(l){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function uC(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;fl||b1(),pl||(fl(),pl=!0),Pg.add(t,e),e.A=0}}function Vg(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Hl(ot(e.Ma,e),dC(e,e.A)),e.A++,!0)}b.Ma=function(){if(this.u=null,cC(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Hl(ot(this.jb,this),e)}};b.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,pt(10),Hc(this),cC(this))};function Hg(e){e.B!=null&&(K.clearTimeout(e.B),e.B=null)}function cC(e){e.g=new Wl(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Bn(e.wa);pe(t,"RID","rpc"),pe(t,"SID",e.K),pe(t,"AID",e.V),pe(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&pe(t,"TO",e.qa),pe(t,"TYPE","xmlhttp"),Kl(e,t),e.o&&e.s&&jg(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Uc(Bn(t)),n.s=null,n.S=!0,j1(n,e)}b.ib=function(){this.v!=null&&(this.v=null,Hc(this),Vg(this),pt(19))};function Fu(e){e.v!=null&&(K.clearTimeout(e.v),e.v=null)}function hC(e,t){var n=null;if(e.g==t){Fu(e),Hg(e),e.g=null;var r=2}else if(Rf(e.i,t))n=t.F,J1(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Og(),Ye(r,new $1(r,n)),zc(e)}else uC(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&hb(e,t)||r==2&&Vg(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Kr(e,5);break;case 4:Kr(e,10);break;case 3:Kr(e,6);break;default:Kr(e,2)}}}function dC(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Kr(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=ot(e.pb,e);n||(n=new ti("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||Lu(n,"https"),Uc(n)),sb(n.toString(),r)}else pt(2);e.H=0,e.h&&e.h.za(t),fC(e),lC(e)}b.pb=function(e){e?(this.l.info("Successfully pinged google.com"),pt(2)):(this.l.info("Failed to ping google.com"),pt(1))};function fC(e){if(e.H=0,e.ma=[],e.h){const t=Z1(e.i);(t.length!=0||e.j.length!=0)&&(jy(e.ma,t),jy(e.ma,e.j),e.i.i.length=0,Cg(e.j),e.j.length=0),e.h.ya()}}function pC(e,t,n){var r=n instanceof ti?Bn(n):new ti(n);if(r.g!="")t&&(r.g=t+"."+r.g),Mu(r,r.m);else{var i=K.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new ti(null);r&&Lu(s,r),t&&(s.g=t),i&&Mu(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&pe(r,n,t),pe(r,"VER",e.ra),Kl(e,r),r}function gC(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new Re(new jc({ob:!0})):new Re(e.va),t.Oa(e.J),t}b.isActive=function(){return!!this.h&&this.h.isActive(this)};function mC(){}b=mC.prototype;b.Ba=function(){};b.Aa=function(){};b.za=function(){};b.ya=function(){};b.isActive=function(){return!0};b.Va=function(){};function zt(e,t){He.call(this),this.g=new oC(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!cl(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!cl(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new $s(this)}ze(zt,He);zt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;pt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=pC(e,null,e.Y),zc(e)};zt.prototype.close=function(){Bg(this.g)};zt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ng(e),e=n);t.j.push(new eb(t.fb++,e)),t.H==3&&zc(t)};zt.prototype.N=function(){this.g.h=null,delete this.j,Bg(this.g),delete this.g,zt.$.N.call(this)};function vC(e){Mg.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ze(vC,Mg);function yC(){Fg.call(this),this.status=1}ze(yC,Fg);function $s(e){this.g=e}ze($s,mC);$s.prototype.Ba=function(){Ye(this.g,"a")};$s.prototype.Aa=function(e){Ye(this.g,new vC(e))};$s.prototype.za=function(e){Ye(this.g,new yC)};$s.prototype.ya=function(){Ye(this.g,"b")};function db(){this.blockSize=-1}function wn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ze(wn,db);wn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Gh(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}wn.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Gh(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Gh(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Gh(this,r),i=0;break}}this.h=i,this.i+=t};wn.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function oe(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var fb={};function zg(e){return-128<=e&&128>e?wA(e,function(t){return new oe([t|0],0>t?-1:0)}):new oe([e|0],0>e?-1:0)}function pn(e){if(isNaN(e)||!isFinite(e))return rs;if(0>e)return Ke(pn(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Nf;return new oe(t,0)}function _C(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Ke(_C(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=pn(Math.pow(t,8)),r=rs,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=pn(Math.pow(t,s)),r=r.R(s).add(pn(o))):(r=r.R(n),r=r.add(pn(o)))}return r}var Nf=4294967296,rs=zg(0),Pf=zg(1),Jy=zg(16777216);b=oe.prototype;b.ea=function(){if(Ut(this))return-Ke(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Nf+r)*t,t*=Nf}return e};b.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(bn(this))return"0";if(Ut(this))return"-"+Ke(this).toString(e);for(var t=pn(Math.pow(e,6)),n=this,r="";;){var i=Uu(n,t).g;n=$u(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,bn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};b.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function bn(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Ut(e){return e.h==-1}b.X=function(e){return e=$u(this,e),Ut(e)?-1:bn(e)?0:1};function Ke(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new oe(n,~e.h).add(Pf)}b.abs=function(){return Ut(this)?Ke(this):this};b.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new oe(n,n[n.length-1]&-2147483648?-1:0)};function $u(e,t){return e.add(Ke(t))}b.R=function(e){if(bn(this)||bn(e))return rs;if(Ut(this))return Ut(e)?Ke(this).R(Ke(e)):Ke(Ke(this).R(e));if(Ut(e))return Ke(this.R(Ke(e)));if(0>this.X(Jy)&&0>e.X(Jy))return pn(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,l=e.D(i)>>>16,a=e.D(i)&65535;n[2*r+2*i]+=o*a,ka(n,2*r+2*i),n[2*r+2*i+1]+=s*a,ka(n,2*r+2*i+1),n[2*r+2*i+1]+=o*l,ka(n,2*r+2*i+1),n[2*r+2*i+2]+=s*l,ka(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new oe(n,0)};function ka(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function lo(e,t){this.g=e,this.h=t}function Uu(e,t){if(bn(t))throw Error("division by zero");if(bn(e))return new lo(rs,rs);if(Ut(e))return t=Uu(Ke(e),t),new lo(Ke(t.g),Ke(t.h));if(Ut(t))return t=Uu(e,Ke(t)),new lo(Ke(t.g),t.h);if(30<e.g.length){if(Ut(e)||Ut(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Pf,r=t;0>=r.X(e);)n=Zy(n),r=Zy(r);var i=Ni(n,1),s=Ni(r,1);for(r=Ni(r,2),n=Ni(n,2);!bn(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Ni(r,1),n=Ni(n,1)}return t=$u(e,i.R(t)),new lo(i,t)}for(i=rs;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=pn(n),o=s.R(t);Ut(o)||0<o.X(e);)n-=r,s=pn(n),o=s.R(t);bn(s)&&(s=Pf),i=i.add(s),e=$u(e,o)}return new lo(i,e)}b.gb=function(e){return Uu(this,e).h};b.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new oe(n,this.h&e.h)};b.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new oe(n,this.h|e.h)};b.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new oe(n,this.h^e.h)};function Zy(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new oe(n,e.h)}function Ni(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new oe(i,e.h)}zt.prototype.send=zt.prototype.u;zt.prototype.open=zt.prototype.m;zt.prototype.close=zt.prototype.close;Dg.NO_ERROR=0;Dg.TIMEOUT=8;Dg.HTTP_ERROR=6;BA.COMPLETE="complete";VA.EventType=zl;zl.OPEN="a";zl.CLOSE="b";zl.ERROR="c";zl.MESSAGE="d";He.prototype.listen=He.prototype.O;Re.prototype.listenOnce=Re.prototype.P;Re.prototype.getLastError=Re.prototype.Sa;Re.prototype.getLastErrorCode=Re.prototype.Ia;Re.prototype.getStatus=Re.prototype.da;Re.prototype.getResponseJson=Re.prototype.Wa;Re.prototype.getResponseText=Re.prototype.ja;Re.prototype.send=Re.prototype.ha;Re.prototype.setWithCredentials=Re.prototype.Oa;wn.prototype.digest=wn.prototype.l;wn.prototype.reset=wn.prototype.reset;wn.prototype.update=wn.prototype.j;oe.prototype.add=oe.prototype.add;oe.prototype.multiply=oe.prototype.R;oe.prototype.modulo=oe.prototype.gb;oe.prototype.compare=oe.prototype.X;oe.prototype.toNumber=oe.prototype.ea;oe.prototype.toString=oe.prototype.toString;oe.prototype.getBits=oe.prototype.D;oe.fromNumber=pn;oe.fromString=_C;var pb=oe;const e_="@firebase/firestore";/**
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
 */class Je{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
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
 */let Yl="9.22.2";/**
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
 */const gs=new Ll("@firebase/firestore");function Pt(e,...t){if(gs.logLevel<=ne.DEBUG){const n=t.map(qg);gs.debug(`Firestore (${Yl}): ${e}`,...n)}}function Wg(e,...t){if(gs.logLevel<=ne.ERROR){const n=t.map(qg);gs.error(`Firestore (${Yl}): ${e}`,...n)}}function gb(e,...t){if(gs.logLevel<=ne.WARN){const n=t.map(qg);gs.warn(`Firestore (${Yl}): ${e}`,...n)}}function qg(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function Gg(e="Unexpected state"){const t=`FIRESTORE (${Yl}) INTERNAL ASSERTION FAILED: `+e;throw Wg(t),new Error(t)}function Af(e,t){e||Gg()}/**
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
 */const tt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class nt extends It{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class is{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class wC{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class mb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class vb{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yb{constructor(t){this.t=t,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let s=new is;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new is,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const a=s;t.enqueueRetryable(async()=>{await a.promise,await i(this.currentUser)})},l=a=>{Pt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(Pt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new is)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(Pt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Af(typeof r.accessToken=="string"),new wC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Af(t===null||typeof t=="string"),new Je(t)}}class _b{constructor(t,n,r){this.h=t,this.l=n,this.m=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class wb{constructor(t,n,r){this.h=t,this.l=n,this.m=r}getToken(){return Promise.resolve(new _b(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Eb{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cb{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const r=s=>{s.error!=null&&Pt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,Pt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{Pt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):Pt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Af(typeof n.token=="string"),this.T=n.token,new Eb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Tb(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Sb{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Tb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function EC(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Ib{constructor(t,n,r,i,s,o,l,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=u}}class ju{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ju("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ju&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var t_,Z;(Z=t_||(t_={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new pb([4294967295,4294967295],0);function Kh(){return typeof document!="undefined"?document:null}/**
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
 */class kb{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&Pt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class Kg{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new is,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,l=new Kg(t,n,o,i,s);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new nt(tt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xb(e,t){if(Wg("AsyncQueue",`${t}: ${e}`),EC(e))return new nt(tt.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Rb{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=Sb.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Pt("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Pt("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new nt(tt.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new is;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=xb(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
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
 */function CC(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const n_=new Map;function Nb(e,t,n,r){if(t===!0&&r===!0)throw new nt(tt.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Pb(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Gg()}function Ab(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new nt(tt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pb(e);throw new nt(tt.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class r_{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new nt(tt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new nt(tt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Nb("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=CC((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new nt(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new nt(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new nt(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=t.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,r}}class TC{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new r_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new nt(tt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new nt(tt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new r_(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new mb;switch(n.type){case"firstParty":return new wb(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new nt(tt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=n_.get(t);n&&(Pt("ComponentProvider","Removing Datastore"),n_.delete(t),n.terminate())}(this),Promise.resolve()}}function bb(e,t,n,r={}){var i;const s=(e=Ab(e,TC))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&gb("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,a;if(typeof r.mockUserToken=="string")l=r.mockUserToken,a=Je.MOCK_USER;else{l=$x(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new nt(tt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Je(u)}e._authCredentials=new vb(new wC(l,a))}}/**
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
 */class Ob{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new kb(this,"async_queue_retry"),this.Xc=()=>{const n=Kh();n&&Pt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=Kh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=Kh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new is;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!EC(t))throw t;Pt("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Wg("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(t,n,r){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const i=Kg.createAndSchedule(this,t,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&Gg()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}class Db extends TC{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new Ob,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Mb(this),this._firestoreClient.terminate()}}function Lb(e,t){const n=typeof e=="object"?e:FE(),r=typeof e=="string"?e:t||"(default)",i=Ml(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Fx("firestore");s&&bb(i,...s)}return i}function Mb(e){var t,n,r;const i=e._freezeSettings(),s=function(o,l,a,u){return new Ib(o,l,a,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,CC(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Rb(e._authCredentials,e._appCheckCredentials,e._queue,s),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.cache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}(function(e,t=!0){(function(n){Yl=n})(zn),Ht(new Ot("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Db(new yb(n.getProvider("auth-internal")),new Cb(n.getProvider("app-check-internal")),function(l,a){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new nt(tt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ju(l.options.projectId,a)}(s,r),s);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ae(e_,"3.12.2",e),Ae(e_,"3.12.2","esm2017")})();const i_="@firebase/database",s_="0.14.4";/**
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
 */let SC="";function Fb(e){SC=e}/**
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
 */class $b{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Be(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:il(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
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
 */class Ub{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return Hn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
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
 */const IC=function(e){try{if(typeof window!="undefined"&&typeof window[e]!="undefined"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new $b(t)}}catch{}return new Ub},Yr=IC("localStorage"),bf=IC("sessionStorage");/**
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
 */const ss=new Ll("@firebase/database"),jb=function(){let e=1;return function(){return e++}}(),kC=function(e){const t=Xx(e),n=new Gx;n.update(t);const r=n.digest();return lg.encodeByteArray(r)},Ql=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=Ql.apply(null,r):typeof r=="object"?t+=Be(r):t+=r,t+=" "}return t};let ni=null,o_=!0;const Bb=function(e,t){N(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(ss.logLevel=ne.VERBOSE,ni=ss.log.bind(ss),t&&bf.set("logging_enabled",!0)):typeof e=="function"?ni=e:(ni=null,bf.remove("logging_enabled"))},Ze=function(...e){if(o_===!0&&(o_=!1,ni===null&&bf.get("logging_enabled")===!0&&Bb(!0)),ni){const t=Ql.apply(null,e);ni(t)}},Xl=function(e){return function(...t){Ze(e,...t)}},Of=function(...e){const t="FIREBASE INTERNAL ERROR: "+Ql(...e);ss.error(t)},hi=function(...e){const t=`FIREBASE FATAL ERROR: ${Ql(...e)}`;throw ss.error(t),new Error(t)},bt=function(...e){const t="FIREBASE WARNING: "+Ql(...e);ss.warn(t)},Vb=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xC=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Hb=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ms="[MIN_NAME]",di="[MAX_NAME]",Us=function(e,t){if(e===t)return 0;if(e===ms||t===di)return-1;if(t===ms||e===di)return 1;{const n=l_(e),r=l_(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1}},zb=function(e,t){return e===t?0:e<t?-1:1},ao=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Be(t))},Yg=function(e){if(typeof e!="object"||e===null)return Be(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)r!==0&&(n+=","),n+=Be(t[r]),n+=":",n+=Yg(e[t[r]]);return n+="}",n},RC=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function kt(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const NC=function(e){N(!xC(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,o,l,a;e===0?(s=0,o=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=l+r,o=Math.round(e*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=t;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Wb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},qb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Gb(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const Kb=new RegExp("^-?(0*)\\d{1,10}$"),Yb=-2147483648,Qb=2147483647,l_=function(e){if(Kb.test(e)){const t=Number(e);if(t>=Yb&&t<=Qb)return t}return null},Jl=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw bt("Exception was thrown by user callback.",n),t},Math.floor(0))}},Xb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},jo=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Jb{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){bt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Zb{constructor(t,n,r){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',bt(t)}}class Df{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Df.OWNER="owner";/**
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
 */const Qg="5",PC="v",AC="s",bC="r",OC="f",DC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,LC="ls",MC="p",Lf="ac",FC="websocket",$C="long_polling";/**
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
 */class eO{constructor(t,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yr.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Yr.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function tO(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function UC(e,t,n){N(typeof t=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let r;if(t===FC)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===$C)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);tO(e)&&(n.ns=e.namespace);const i=[];return kt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class nO{constructor(){this.counters_={}}incrementCounter(t,n=1){Hn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return Ax(this.counters_)}}/**
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
 */const Yh={},Qh={};function Xg(e){const t=e.toString();return Yh[t]||(Yh[t]=new nO),Yh[t]}function rO(e,t){const n=e.toString();return Qh[n]||(Qh[n]=t()),Qh[n]}/**
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
 */class iO{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Jl(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const a_="start",sO="close",oO="pLPCommand",lO="pRTLPCB",jC="id",BC="pw",VC="ser",aO="cb",uO="seg",cO="ts",hO="d",dO="dframe",HC=1870,zC=30,fO=HC-zC,pO=25e3,gO=3e4;class Vi{constructor(t,n,r,i,s,o,l){this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xl(t),this.stats_=Xg(n),this.urlFn=a=>(this.appCheckToken&&(a[Lf]=this.appCheckToken),UC(n,$C,a))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new iO(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(gO)),Hb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Jg((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===a_)this.id=l,this.password=a;else if(o===sO)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[a_]="t",r[VC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[aO]=this.scriptTagHolder.uniqueCallbackIdentifier),r[PC]=Qg,this.transportSessionId&&(r[AC]=this.transportSessionId),this.lastSessionId&&(r[LC]=this.lastSessionId),this.applicationId&&(r[MC]=this.applicationId),this.appCheckToken&&(r[Lf]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&DC.test(location.hostname)&&(r[bC]=OC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Vi.forceAllow_=!0}static forceDisallow(){Vi.forceDisallow_=!0}static isAvailable(){return Vi.forceAllow_?!0:!Vi.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!Wb()&&!qb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=Be(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=SE(n),i=RC(r,fO);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[dO]="t",r[jC]=t,r[BC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=Be(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Jg{constructor(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=jb(),window[oO+this.uniqueCallbackIdentifier]=t,window[lO+this.uniqueCallbackIdentifier]=n,this.myIFrame=Jg.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;s='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ze("frame writing exception"),l.stack&&Ze(l.stack),Ze(l)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Ze("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[jC]=this.myID,t[BC]=this.myPW,t[VC]=this.currentSerial;let n=this.urlFn(t),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zC+r.length<=HC;){const o=this.pendingSegs.shift();r=r+"&"+uO+i+"="+o.seg+"&"+cO+i+"="+o.ts+"&"+hO+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(pO)),s=()=>{clearTimeout(i),r()};this.addTag(t,s)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ze("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const mO=16384,vO=45e3;let Bu=null;typeof MozWebSocket!="undefined"?Bu=MozWebSocket:typeof WebSocket!="undefined"&&(Bu=WebSocket);class Xt{constructor(t,n,r,i,s,o,l){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xl(this.connId),this.stats_=Xg(n),this.connURL=Xt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,r,i,s){const o={};return o[PC]=Qg,typeof location!="undefined"&&location.hostname&&DC.test(location.hostname)&&(o[bC]=OC),n&&(o[AC]=n),r&&(o[LC]=r),i&&(o[Lf]=i),s&&(o[MC]=s),UC(t,FC,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yr.set("previous_websocket_failure",!0);try{let r;PE(),this.mySock=new Bu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Xt.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&Bu!==null&&!Xt.forceDisallow_}static previouslyFailed(){return Yr.isInMemoryStorage||Yr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yr.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=il(n);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(N(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const n=Be(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=RC(n,mO);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vO))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Xt.responsesRequiredToBeHealthy=2;Xt.healthyTimeout=3e4;/**
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
 */class _l{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Vi,Xt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=Xt&&Xt.isAvailable();let r=n&&!Xt.previouslyFailed();if(t.webSocketOnly&&(n||bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Xt];else{const i=this.transports_=[];for(const s of _l.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);_l.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_l.globalTransportInitialized_=!1;/**
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
 */const yO=6e4,_O=5e3,wO=10*1024,EO=100*1024,Xh="t",u_="d",CO="s",c_="r",TO="e",h_="o",d_="a",f_="n",p_="p",SO="h";class IO{constructor(t,n,r,i,s,o,l,a,u,c){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xl("c:"+this.id+":"),this.transportManager_=new _l(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=jo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>EO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>wO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Xh in t){const n=t[Xh];n===d_?this.upgradeIfSecondaryHealthy_():n===c_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===h_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=ao("t",t),r=ao("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:p_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:d_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:f_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=ao("t",t),r=ao("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=ao(Xh,t);if(u_ in t){const r=t[u_];if(n===SO){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===f_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===CO?this.onConnectionShutdown_(r):n===c_?this.onReset_(r):n===TO?Of("Server Error: "+r):n===h_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Of("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Qg!==r&&bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),jo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(yO))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):jo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(_O))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:p_,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class WC{put(t,n,r,i){}merge(t,n,r,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,r){}onDisconnectMerge(t,n,r){}onDisconnectCancel(t,n){}reportStats(t){}}/**
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
 */class qC{constructor(t){this.allowedEvents_=t,this.listeners_={},N(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});const i=this.getInitialEvent(t);i&&n.apply(r,i)}off(t,n,r){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(t){N(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
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
 */class Vu extends qC{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!cg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Vu}getInitialEvent(t){return N(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const g_=32,m_=768;class ae{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function re(){return new ae("")}function X(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function kr(e){return e.pieces_.length-e.pieceNum_}function he(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ae(e.pieces_,t)}function GC(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function kO(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function KC(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function YC(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ae(t,0)}function be(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof ae)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const r=t.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ae(n,0)}function J(e){return e.pieceNum_>=e.pieces_.length}function Et(e,t){const n=X(e),r=X(t);if(n===null)return t;if(n===r)return Et(he(e),he(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Zg(e,t){if(kr(e)!==kr(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function en(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(kr(e)>kr(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class xO{constructor(t,n){this.errorPrefix_=n,this.parts_=KC(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=xc(this.parts_[r]);QC(this)}}function RO(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=xc(t),QC(e)}function NO(e){const t=e.parts_.pop();e.byteLength_-=xc(t),e.parts_.length>0&&(e.byteLength_-=1)}function QC(e){if(e.byteLength_>m_)throw new Error(e.errorPrefix_+"has a key path longer than "+m_+" bytes ("+e.byteLength_+").");if(e.parts_.length>g_)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+g_+") or object contains a cycle "+$r(e))}function $r(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class em extends qC{constructor(){super(["visible"]);let t,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",t="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new em}getInitialEvent(t){return N(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
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
 */const uo=1e3,PO=60*5*1e3,v_=30*1e3,AO=1.3,bO=3e4,OO="server_kill",y_=3;class Mn extends WC{constructor(t,n,r,i,s,o,l,a){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Mn.nextPersistentConnectionId_++,this.log_=Xl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=uo,this.maxReconnectDelay_=PO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!PE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");em.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Vu.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,r){const i=++this.requestNumber_,s={r:i,a:t,b:n};this.log_(Be(s)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(t){this.initConnection_();const n=new ug,r={p:t._path.toString(),q:t._queryObject},i={action:"g",request:r,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(t,n,r,i){this.initConnection_();const s=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),N(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:t,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(t){const n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";t.tag&&(s.q=n._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Mn.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),t.onComplete&&t.onComplete(u,a))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&Hn(t,"w")){const r=ps(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||qx(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=v_)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=Wx(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===t&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,r=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(t,n){const r=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),N(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,t._queryObject,n)}sendUnlisten_(t,n,r,i){this.log_("Unlisten on "+t+" for "+n);const s={p:t},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:r})}onDisconnectMerge(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:r})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(t,n,r,i){this.putInternal("p",t,n,r,i)}merge(t,n,r,i){this.putInternal("m",t,n,r,i)}putInternal(t,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:t,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Be(t));const n=t.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):Of("Unrecognized action received from server: "+Be(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=uo,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=uo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>bO&&(this.reconnectDelay_=uo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*AO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Mn.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){N(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ze("getToken() completed but was canceled"):(Ze("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new IO(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,m=>{bt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(OO)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&bt(d),a())}}}interrupt(t){Ze("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Ze("Resuming connection for reason: "+t),delete this.interruptReasons_[t],ff(this.interruptReasons_)&&(this.reconnectDelay_=uo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let r;n?r=n.map(s=>Yg(s)).join("$"):r="default";const i=this.removeListen_(t,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const r=new ae(t).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(t,n){Ze("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=y_&&(this.reconnectDelay_=v_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Ze("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=y_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+SC.replace(/\./g,"-")]=1,cg()?t["framework.cordova"]=1:NE()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Vu.getInstance().currentlyOnline();return ff(this.interruptReasons_)&&t}}Mn.nextPersistentConnectionId_=0;Mn.nextConnectionId_=0;/**
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
 */class Q{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new Q(t,n)}}/**
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
 */class Wc{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const r=new Q(ms,t),i=new Q(ms,n);return this.compare(r,i)!==0}minPost(){return Q.MIN}}/**
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
 */let xa;class XC extends Wc{static get __EMPTY_NODE(){return xa}static set __EMPTY_NODE(t){xa=t}compare(t,n){return Us(t.name,n.name)}isDefinedOn(t){throw Ps("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return Q.MIN}maxPost(){return new Q(di,xa)}makePost(t,n){return N(typeof t=="string","KeyIndex indexValue must always be a string."),new Q(t,xa)}toString(){return".key"}}const os=new XC;/**
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
 */class Ra{constructor(t,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?r(t.key,n):1,i&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class je{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r!=null?r:je.RED,this.left=i!=null?i:Ct.EMPTY_NODE,this.right=s!=null?s:Ct.EMPTY_NODE}copy(t,n,r,i,s){return new je(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ct.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return Ct.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}je.RED=!0;je.BLACK=!1;class DO{copy(t,n,r,i,s){return this}insert(t,n,r){return new je(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ct{constructor(t,n=Ct.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Ct(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,je.BLACK,null,null))}remove(t){return new Ct(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,je.BLACK,null,null))}get(t){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(t){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Ra(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new Ra(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new Ra(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new Ra(this.root_,null,this.comparator_,!0,t)}}Ct.EMPTY_NODE=new DO;/**
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
 */function LO(e,t){return Us(e.name,t.name)}function tm(e,t){return Us(e,t)}/**
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
 */let Mf;function MO(e){Mf=e}const JC=function(e){return typeof e=="number"?"number:"+NC(e):"string:"+e},ZC=function(e){if(e.isLeafNode()){const t=e.val();N(typeof t=="string"||typeof t=="number"||typeof t=="object"&&Hn(t,".sv"),"Priority must be a string or number.")}else N(e===Mf||e.isEmpty(),"priority of unexpected type.");N(e===Mf||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let __;class Ue{constructor(t,n=Ue.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ZC(this.priorityNode_)}static set __childrenNodeConstructor(t){__=t}static get __childrenNodeConstructor(){return __}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Ue(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Ue.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return J(t)?this:X(t)===".priority"?this.priorityNode_:Ue.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Ue.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const r=X(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(N(r!==".priority"||kr(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ue.__childrenNodeConstructor.EMPTY_NODE.updateChild(he(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+JC(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=NC(this.value_):t+=this.value_,this.lazyHash_=kC(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Ue.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Ue.__childrenNodeConstructor?-1:(N(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,r=typeof this.value_,i=Ue.VALUE_TYPE_ORDER.indexOf(n),s=Ue.VALUE_TYPE_ORDER.indexOf(r);return N(i>=0,"Unknown leaf type: "+n),N(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ue.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let eT,tT;function FO(e){eT=e}function $O(e){tT=e}class UO extends Wc{compare(t,n){const r=t.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Us(t.name,n.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(di,new Ue("[PRIORITY-POST]",tT))}makePost(t,n){const r=eT(t);return new Q(n,new Ue("[PRIORITY-POST]",r))}toString(){return".priority"}}const Te=new UO;/**
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
 */const jO=Math.log(2);class BO{constructor(t){const n=s=>parseInt(Math.log(s)/jO,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const i=r(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Hu=function(e,t,n,r){e.sort(t);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=e[a],h=n?n(d):d,new je(h,d.node,je.BLACK,null,null);{const m=parseInt(c/2,10)+a,v=i(a,m),_=i(m+1,u);return d=e[m],h=n?n(d):d,new je(h,d.node,je.BLACK,v,_)}},s=function(a){let u=null,c=null,d=e.length;const h=function(v,_){const f=d-v,p=d;d-=v;const g=i(f+1,p),E=e[f],C=n?n(E):E;m(new je(C,E.node,_,null,g))},m=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<a.count;++v){const _=a.nextBitIsOne(),f=Math.pow(2,a.count-(v+1));_?h(f,je.BLACK):(h(f,je.BLACK),h(f,je.RED))}return c},o=new BO(e.length),l=s(o);return new Ct(r||t,l)};/**
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
 */let Jh;const Pi={};class On{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return N(Pi&&Te,"ChildrenNode.ts has not been loaded"),Jh=Jh||new On({".priority":Pi},{".priority":Te}),Jh}get(t){const n=ps(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Ct?n:null}hasIndex(t){return Hn(this.indexSet_,t.toString())}addIndex(t,n){N(t!==os,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Q.Wrap);let o=s.getNext();for(;o;)i=i||t.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Hu(r,t.getCompare()):l=Pi;const a=t.toString(),u=Object.assign({},this.indexSet_);u[a]=t;const c=Object.assign({},this.indexes_);return c[a]=l,new On(c,u)}addToIndexes(t,n){const r=ku(this.indexes_,(i,s)=>{const o=ps(this.indexSet_,s);if(N(o,"Missing index implementation for "+s),i===Pi)if(o.isDefinedOn(t.node)){const l=[],a=n.getIterator(Q.Wrap);let u=a.getNext();for(;u;)u.name!==t.name&&l.push(u),u=a.getNext();return l.push(t),Hu(l,o.getCompare())}else return Pi;else{const l=n.get(t.name);let a=i;return l&&(a=a.remove(new Q(t.name,l))),a.insert(t,t.node)}});return new On(r,this.indexSet_)}removeFromIndexes(t,n){const r=ku(this.indexes_,i=>{if(i===Pi)return i;{const s=n.get(t.name);return s?i.remove(new Q(t.name,s)):i}});return new On(r,this.indexSet_)}}/**
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
 */let co;class W{constructor(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ZC(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return co||(co=new W(new Ct(tm),null,On.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||co}updatePriority(t){return this.children_.isEmpty()?this:new W(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?co:n}}getChild(t){const n=X(t);return n===null?this:this.getImmediateChild(n).getChild(he(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(N(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const r=new Q(t,n);let i,s;n.isEmpty()?(i=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?co:this.priorityNode_;return new W(i,o,s)}}updateChild(t,n){const r=X(t);if(r===null)return n;{N(X(t)!==".priority"||kr(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(he(t),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Te,(o,l)=>{n[o]=l.val(t),r++,s&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!t&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+JC(this.getPriority().val())+":"),this.forEachChild(Te,(n,r)=>{const i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":kC(t)}return this.lazyHash_}getPredecessorChildName(t,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Q(t,n));return s?s.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new Q(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new Q(n,this.children_.get(n)):null}forEachChild(t,n){const r=this.resolveIndex_(t);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,Q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,Q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)>0;)i.getNext(),s=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Zl?-1:0}withIndex(t){if(t===os||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===os||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Te),i=n.getIterator(Te);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===os?null:this.indexMap_.get(t.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class VO extends W{constructor(){super(new Ct(tm),W.EMPTY_NODE,On.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return W.EMPTY_NODE}isEmpty(){return!1}}const Zl=new VO;Object.defineProperties(Q,{MIN:{value:new Q(ms,W.EMPTY_NODE)},MAX:{value:new Q(di,Zl)}});XC.__EMPTY_NODE=W.EMPTY_NODE;Ue.__childrenNodeConstructor=W;MO(Zl);$O(Zl);/**
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
 */const HO=!0;function et(e,t=null){if(e===null)return W.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),N(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Ue(n,et(t))}if(!(e instanceof Array)&&HO){const n=[];let r=!1;if(kt(e,(o,l)=>{if(o.substring(0,1)!=="."){const a=et(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new Q(o,a)))}}),n.length===0)return W.EMPTY_NODE;const s=Hu(n,LO,o=>o.name,tm);if(r){const o=Hu(n,Te.getCompare());return new W(s,et(t),new On({".priority":o},{".priority":Te}))}else return new W(s,et(t),On.Default)}else{let n=W.EMPTY_NODE;return kt(e,(r,i)=>{if(Hn(e,r)&&r.substring(0,1)!=="."){const s=et(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(et(t))}}FO(et);/**
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
 */class zO extends Wc{constructor(t){super(),this.indexPath_=t,N(!J(t)&&X(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const r=this.extractChild(t.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Us(t.name,n.name):s}makePost(t,n){const r=et(t),i=W.EMPTY_NODE.updateChild(this.indexPath_,r);return new Q(n,i)}maxPost(){const t=W.EMPTY_NODE.updateChild(this.indexPath_,Zl);return new Q(di,t)}toString(){return KC(this.indexPath_,0).join("/")}}/**
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
 */class WO extends Wc{compare(t,n){const r=t.node.compareTo(n.node);return r===0?Us(t.name,n.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(t,n){const r=et(t);return new Q(n,r)}toString(){return".value"}}const qO=new WO;/**
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
 */function nT(e){return{type:"value",snapshotNode:e}}function vs(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function wl(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function El(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function GO(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
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
 */class nm{constructor(t){this.index_=t}updateChild(t,n,r,i,s,o){N(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=t.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?t.hasChild(n)?o.trackChildChange(wl(n,l)):N(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(vs(n,r)):o.trackChildChange(El(n,r,l))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(t,n,r){return r!=null&&(t.isLeafNode()||t.forEachChild(Te,(i,s)=>{n.hasChild(i)||r.trackChildChange(wl(i,s))}),n.isLeafNode()||n.forEachChild(Te,(i,s)=>{if(t.hasChild(i)){const o=t.getImmediateChild(i);o.equals(s)||r.trackChildChange(El(i,s,o))}else r.trackChildChange(vs(i,s))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?W.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Cl{constructor(t){this.indexedFilter_=new nm(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Cl.getStartPost_(t),this.endPost_=Cl.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&r}updateChild(t,n,r,i,s,o){return this.matches(new Q(n,r))||(r=W.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,r,i,s,o)}updateFullNode(t,n,r){n.isLeafNode()&&(n=W.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(W.EMPTY_NODE);const s=this;return n.forEachChild(Te,(o,l)=>{s.matches(new Q(o,l))||(i=i.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
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
 */class KO{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Cl(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,r,i,s,o){return this.rangedFilter_.matches(new Q(n,r))||(r=W.EMPTY_NODE),t.getImmediateChild(n).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,s,o):this.fullLimitUpdateChild_(t,n,r,s,o)}updateFullNode(t,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=W.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(W.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const l=t;N(l.numChildren()===this.limit_,"");const a=new Q(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,a);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(El(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(wl(n,d));const _=l.updateImmediateChild(n,W.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(vs(h.name,h.node)),_.updateImmediateChild(h.name,h.node)):_}}else return r.isEmpty()?t:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(wl(u.name,u.node)),s.trackChildChange(vs(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,W.EMPTY_NODE)):t}}/**
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
 */class rm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ms}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:di}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Te}copy(){const t=new rm;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function YO(e){return e.loadsAllData()?new nm(e.getIndex()):e.hasLimit()?new KO(e):new Cl(e)}function w_(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Te?n="$priority":e.index_===qO?n="$value":e.index_===os?n="$key":(N(e.index_ instanceof zO,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Be(n),e.startSet_){const r=e.startAfterSet_?"startAfter":"startAt";t[r]=Be(e.indexStartValue_),e.startNameSet_&&(t[r]+=","+Be(e.indexStartName_))}if(e.endSet_){const r=e.endBeforeSet_?"endBefore":"endAt";t[r]=Be(e.indexEndValue_),e.endNameSet_&&(t[r]+=","+Be(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function E_(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==Te&&(t.i=e.index_.toString()),t}/**
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
 */class zu extends WC{constructor(t,n,r,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Xl("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(N(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,r,i){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const o=zu.getListenId_(t,r),l={};this.listens_[o]=l;const a=w_(t._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),ps(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(t,n){const r=zu.getListenId_(t,n);delete this.listens_[r]}get(t){const n=w_(t._queryParams),r=t._path.toString(),i=new ug;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(t){}restRequest_(t,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+As(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=il(l.responseText)}catch{bt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&bt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class QO{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
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
 */function Wu(){return{value:null,children:new Map}}function rT(e,t,n){if(J(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const r=X(t);e.children.has(r)||e.children.set(r,Wu());const i=e.children.get(r);t=he(t),rT(i,t,n)}}function Ff(e,t,n){e.value!==null?n(t,e.value):XO(e,(r,i)=>{const s=new ae(t.toString()+"/"+r);Ff(i,s,n)})}function XO(e,t){e.children.forEach((n,r)=>{t(r,n)})}/**
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
 */class JO{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&kt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=t,n}}/**
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
 */const C_=10*1e3,ZO=30*1e3,eD=5*60*1e3;class tD{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new JO(t);const r=C_+(ZO-C_)*Math.random();jo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),n={};let r=!1;kt(t,(i,s)=>{s>0&&Hn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),jo(this.reportStats_.bind(this),Math.floor(Math.random()*2*eD))}}/**
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
 */var tn;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tn||(tn={}));function iT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function im(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sm(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
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
 */class qu{constructor(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=tn.ACK_USER_WRITE,this.source=iT()}operationForChild(t){if(J(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ae(t));return new qu(re(),n,this.revert)}}else return N(X(this.path)===t,"operationForChild called for unrelated child."),new qu(he(this.path),this.affectedTree,this.revert)}}/**
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
 */class Tl{constructor(t,n){this.source=t,this.path=n,this.type=tn.LISTEN_COMPLETE}operationForChild(t){return J(this.path)?new Tl(this.source,re()):new Tl(this.source,he(this.path))}}/**
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
 */class fi{constructor(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=tn.OVERWRITE}operationForChild(t){return J(this.path)?new fi(this.source,re(),this.snap.getImmediateChild(t)):new fi(this.source,he(this.path),this.snap)}}/**
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
 */class Sl{constructor(t,n,r){this.source=t,this.path=n,this.children=r,this.type=tn.MERGE}operationForChild(t){if(J(this.path)){const n=this.children.subtree(new ae(t));return n.isEmpty()?null:n.value?new fi(this.source,re(),n.value):new Sl(this.source,re(),n)}else return N(X(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Sl(this.source,he(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class pi{constructor(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(J(t))return this.isFullyInitialized()&&!this.filtered_;const n=X(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
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
 */class nD{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function rD(e,t,n,r){const i=[],s=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(GO(o.childName,o.snapshotNode))}),ho(e,i,"child_removed",t,r,n),ho(e,i,"child_added",t,r,n),ho(e,i,"child_moved",s,r,n),ho(e,i,"child_changed",t,r,n),ho(e,i,"value",t,r,n),i}function ho(e,t,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>sD(e,l,a)),o.forEach(l=>{const a=iD(e,l,s);i.forEach(u=>{u.respondsTo(l.type)&&t.push(u.createEvent(a,e.query_))})})}function iD(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function sD(e,t,n){if(t.childName==null||n.childName==null)throw Ps("Should only compare child_ events.");const r=new Q(t.childName,t.snapshotNode),i=new Q(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
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
 */function qc(e,t){return{eventCache:e,serverCache:t}}function Bo(e,t,n,r){return qc(new pi(t,n,r),e.serverCache)}function sT(e,t,n,r){return qc(e.eventCache,new pi(t,n,r))}function $f(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function gi(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
 */let Zh;const oD=()=>(Zh||(Zh=new Ct(zb)),Zh);class fe{constructor(t,n=oD()){this.value=t,this.children=n}static fromObject(t){let n=new fe(null);return kt(t,(r,i)=>{n=n.set(new ae(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:re(),value:this.value};if(J(t))return null;{const r=X(t),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(he(t),n);return s!=null?{path:be(new ae(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(J(t))return this;{const n=X(t),r=this.children.get(n);return r!==null?r.subtree(he(t)):new fe(null)}}set(t,n){if(J(t))return new fe(n,this.children);{const r=X(t),s=(this.children.get(r)||new fe(null)).set(he(t),n),o=this.children.insert(r,s);return new fe(this.value,o)}}remove(t){if(J(t))return this.children.isEmpty()?new fe(null):new fe(null,this.children);{const n=X(t),r=this.children.get(n);if(r){const i=r.remove(he(t));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new fe(null):new fe(this.value,s)}else return this}}get(t){if(J(t))return this.value;{const n=X(t),r=this.children.get(n);return r?r.get(he(t)):null}}setTree(t,n){if(J(t))return n;{const r=X(t),s=(this.children.get(r)||new fe(null)).setTree(he(t),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new fe(this.value,o)}}fold(t){return this.fold_(re(),t)}fold_(t,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(be(t,i),n)}),n(t,this.value,r)}findOnPath(t,n){return this.findOnPath_(t,re(),n)}findOnPath_(t,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(J(t))return null;{const s=X(t),o=this.children.get(s);return o?o.findOnPath_(he(t),be(n,s),r):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,re(),n)}foreachOnPath_(t,n,r){if(J(t))return this;{this.value&&r(n,this.value);const i=X(t),s=this.children.get(i);return s?s.foreachOnPath_(he(t),be(n,i),r):new fe(null)}}foreach(t){this.foreach_(re(),t)}foreach_(t,n){this.children.inorderTraversal((r,i)=>{i.foreach_(be(t,r),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,r)=>{r.value&&t(n,r.value)})}}/**
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
 */class rn{constructor(t){this.writeTree_=t}static empty(){return new rn(new fe(null))}}function Vo(e,t,n){if(J(t))return new rn(new fe(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){const i=r.path;let s=r.value;const o=Et(i,t);return s=s.updateChild(o,n),new rn(e.writeTree_.set(i,s))}else{const i=new fe(n),s=e.writeTree_.setTree(t,i);return new rn(s)}}}function T_(e,t,n){let r=e;return kt(n,(i,s)=>{r=Vo(r,be(t,i),s)}),r}function S_(e,t){if(J(t))return rn.empty();{const n=e.writeTree_.setTree(t,new fe(null));return new rn(n)}}function Uf(e,t){return Ti(e,t)!=null}function Ti(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(Et(n.path,t)):null}function I_(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Te,(r,i)=>{t.push(new Q(r,i))}):e.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&t.push(new Q(r,i.value))}),t}function vr(e,t){if(J(t))return e;{const n=Ti(e,t);return n!=null?new rn(new fe(n)):new rn(e.writeTree_.subtree(t))}}function jf(e){return e.writeTree_.isEmpty()}function ys(e,t){return oT(re(),e.writeTree_,t)}function oT(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((i,s)=>{i===".priority"?(N(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=oT(be(e,i),s,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(be(e,".priority"),r)),n}}/**
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
 */function om(e,t){return cT(t,e)}function lD(e,t,n,r,i){N(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Vo(e.visibleWrites,t,n)),e.lastWriteId=r}function aD(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function uD(e,t){const n=e.allWrites.findIndex(l=>l.writeId===t);N(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const l=e.allWrites[o];l.visible&&(o>=n&&cD(l,r.path)?i=!1:en(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return hD(e),!0;if(r.snap)e.visibleWrites=S_(e.visibleWrites,r.path);else{const l=r.children;kt(l,a=>{e.visibleWrites=S_(e.visibleWrites,be(r.path,a))})}return!0}else return!1}function cD(e,t){if(e.snap)return en(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&en(be(e.path,n),t))return!0;return!1}function hD(e){e.visibleWrites=lT(e.allWrites,dD,re()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function dD(e){return e.visible}function lT(e,t,n){let r=rn.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const o=s.path;let l;if(s.snap)en(n,o)?(l=Et(n,o),r=Vo(r,l,s.snap)):en(o,n)&&(l=Et(o,n),r=Vo(r,re(),s.snap.getChild(l)));else if(s.children){if(en(n,o))l=Et(n,o),r=T_(r,l,s.children);else if(en(o,n))if(l=Et(o,n),J(l))r=T_(r,re(),s.children);else{const a=ps(s.children,X(l));if(a){const u=a.getChild(he(l));r=Vo(r,re(),u)}}}else throw Ps("WriteRecord should have .snap or .children")}}return r}function aT(e,t,n,r,i){if(!r&&!i){const s=Ti(e.visibleWrites,t);if(s!=null)return s;{const o=vr(e.visibleWrites,t);if(jf(o))return n;if(n==null&&!Uf(o,re()))return null;{const l=n||W.EMPTY_NODE;return ys(o,l)}}}else{const s=vr(e.visibleWrites,t);if(!i&&jf(s))return n;if(!i&&n==null&&!Uf(s,re()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(en(u.path,t)||en(t,u.path))},l=lT(e.allWrites,o,t),a=n||W.EMPTY_NODE;return ys(l,a)}}}function fD(e,t,n){let r=W.EMPTY_NODE;const i=Ti(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Te,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=vr(e.visibleWrites,t);return n.forEachChild(Te,(o,l)=>{const a=ys(vr(s,new ae(o)),l);r=r.updateImmediateChild(o,a)}),I_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=vr(e.visibleWrites,t);return I_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function pD(e,t,n,r,i){N(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=be(t,n);if(Uf(e.visibleWrites,s))return null;{const o=vr(e.visibleWrites,s);return jf(o)?i.getChild(n):ys(o,i.getChild(n))}}function gD(e,t,n,r){const i=be(t,n),s=Ti(e.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=vr(e.visibleWrites,i);return ys(o,r.getNode().getImmediateChild(n))}else return null}function mD(e,t){return Ti(e.visibleWrites,t)}function vD(e,t,n,r,i,s,o){let l;const a=vr(e.visibleWrites,t),u=Ti(a,re());if(u!=null)l=u;else if(n!=null)l=ys(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let m=h.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=h.getNext();return c}else return[]}function yD(){return{visibleWrites:rn.empty(),allWrites:[],lastWriteId:-1}}function Gu(e,t,n,r){return aT(e.writeTree,e.treePath,t,n,r)}function lm(e,t){return fD(e.writeTree,e.treePath,t)}function k_(e,t,n,r){return pD(e.writeTree,e.treePath,t,n,r)}function Ku(e,t){return mD(e.writeTree,be(e.treePath,t))}function _D(e,t,n,r,i,s){return vD(e.writeTree,e.treePath,t,n,r,i,s)}function am(e,t,n){return gD(e.writeTree,e.treePath,t,n)}function uT(e,t){return cT(be(e.treePath,t),e.writeTree)}function cT(e,t){return{treePath:e,writeTree:t}}/**
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
 */class wD{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,r=t.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,El(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,wl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,vs(r,t.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,El(r,t.snapshotNode,i.oldSnap));else throw Ps("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ED{getCompleteChild(t){return null}getChildAfterChild(t,n,r){return null}}const hT=new ED;class um{constructor(t,n,r=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new pi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return am(this.writes_,t,r)}}getChildAfterChild(t,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:gi(this.viewCache_),s=_D(this.writes_,i,n,1,r,t);return s.length===0?null:s[0]}}/**
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
 */function CD(e){return{filter:e}}function TD(e,t){N(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),N(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function SD(e,t,n,r,i){const s=new wD;let o,l;if(n.type===tn.OVERWRITE){const u=n;u.source.fromUser?o=Bf(e,t,u.path,u.snap,r,i,s):(N(u.source.fromServer,"Unknown source."),l=u.source.tagged||t.serverCache.isFiltered()&&!J(u.path),o=Yu(e,t,u.path,u.snap,r,i,l,s))}else if(n.type===tn.MERGE){const u=n;u.source.fromUser?o=kD(e,t,u.path,u.children,r,i,s):(N(u.source.fromServer,"Unknown source."),l=u.source.tagged||t.serverCache.isFiltered(),o=Vf(e,t,u.path,u.children,r,i,l,s))}else if(n.type===tn.ACK_USER_WRITE){const u=n;u.revert?o=ND(e,t,u.path,r,i,s):o=xD(e,t,u.path,u.affectedTree,r,i,s)}else if(n.type===tn.LISTEN_COMPLETE)o=RD(e,t,n.path,r,s);else throw Ps("Unknown operation type: "+n.type);const a=s.getChanges();return ID(t,o,a),{viewCache:o,changes:a}}function ID(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=$f(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(nT($f(t)))}}function dT(e,t,n,r,i,s){const o=t.eventCache;if(Ku(r,n)!=null)return t;{let l,a;if(J(n))if(N(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=gi(t),c=u instanceof W?u:W.EMPTY_NODE,d=lm(r,c);l=e.filter.updateFullNode(t.eventCache.getNode(),d,s)}else{const u=Gu(r,gi(t));l=e.filter.updateFullNode(t.eventCache.getNode(),u,s)}else{const u=X(n);if(u===".priority"){N(kr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=t.serverCache.getNode();const d=k_(r,n,c,a);d!=null?l=e.filter.updatePriority(c,d):l=o.getNode()}else{const c=he(n);let d;if(o.isCompleteForChild(u)){a=t.serverCache.getNode();const h=k_(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=am(r,u,t.serverCache);d!=null?l=e.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return Bo(t,l,o.isFullyInitialized()||J(n),e.filter.filtersNodes())}}function Yu(e,t,n,r,i,s,o,l){const a=t.serverCache;let u;const c=o?e.filter:e.filter.getIndexedFilter();if(J(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),m,null)}else{const m=X(n);if(!a.isCompleteForPath(n)&&kr(n)>1)return t;const v=he(n),f=a.getNode().getImmediateChild(m).updateChild(v,r);m===".priority"?u=c.updatePriority(a.getNode(),f):u=c.updateChild(a.getNode(),m,f,v,hT,null)}const d=sT(t,u,a.isFullyInitialized()||J(n),c.filtersNodes()),h=new um(i,d,s);return dT(e,d,n,i,h,l)}function Bf(e,t,n,r,i,s,o){const l=t.eventCache;let a,u;const c=new um(i,t,s);if(J(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),a=Bo(t,u,!0,e.filter.filtersNodes());else{const d=X(n);if(d===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),r),a=Bo(t,u,l.isFullyInitialized(),l.isFiltered());else{const h=he(n),m=l.getNode().getImmediateChild(d);let v;if(J(h))v=r;else{const _=c.getCompleteChild(d);_!=null?GC(h)===".priority"&&_.getChild(YC(h)).isEmpty()?v=_:v=_.updateChild(h,r):v=W.EMPTY_NODE}if(m.equals(v))a=t;else{const _=e.filter.updateChild(l.getNode(),d,v,h,c,o);a=Bo(t,_,l.isFullyInitialized(),e.filter.filtersNodes())}}}return a}function x_(e,t){return e.eventCache.isCompleteForChild(t)}function kD(e,t,n,r,i,s,o){let l=t;return r.foreach((a,u)=>{const c=be(n,a);x_(t,X(c))&&(l=Bf(e,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=be(n,a);x_(t,X(c))||(l=Bf(e,l,c,u,i,s,o))}),l}function R_(e,t,n){return n.foreach((r,i)=>{t=t.updateChild(r,i)}),t}function Vf(e,t,n,r,i,s,o,l){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let a=t,u;J(n)?u=r:u=new fe(null).setTree(n,r);const c=t.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const m=t.serverCache.getNode().getImmediateChild(d),v=R_(e,m,h);a=Yu(e,a,new ae(d),v,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const m=!t.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!m){const v=t.serverCache.getNode().getImmediateChild(d),_=R_(e,v,h);a=Yu(e,a,new ae(d),_,i,s,o,l)}}),a}function xD(e,t,n,r,i,s,o){if(Ku(i,n)!=null)return t;const l=t.serverCache.isFiltered(),a=t.serverCache;if(r.value!=null){if(J(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Yu(e,t,n,a.getNode().getChild(n),i,s,l,o);if(J(n)){let u=new fe(null);return a.getNode().forEachChild(os,(c,d)=>{u=u.set(new ae(c),d)}),Vf(e,t,n,u,i,s,l,o)}else return t}else{let u=new fe(null);return r.foreach((c,d)=>{const h=be(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),Vf(e,t,n,u,i,s,l,o)}}function RD(e,t,n,r,i){const s=t.serverCache,o=sT(t,s.getNode(),s.isFullyInitialized()||J(n),s.isFiltered());return dT(e,o,n,r,hT,i)}function ND(e,t,n,r,i,s){let o;if(Ku(r,n)!=null)return t;{const l=new um(r,t,i),a=t.eventCache.getNode();let u;if(J(n)||X(n)===".priority"){let c;if(t.serverCache.isFullyInitialized())c=Gu(r,gi(t));else{const d=t.serverCache.getNode();N(d instanceof W,"serverChildren would be complete if leaf node"),c=lm(r,d)}c=c,u=e.filter.updateFullNode(a,c,s)}else{const c=X(n);let d=am(r,c,t.serverCache);d==null&&t.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=e.filter.updateChild(a,c,d,he(n),l,s):t.eventCache.getNode().hasChild(c)?u=e.filter.updateChild(a,c,W.EMPTY_NODE,he(n),l,s):u=a,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Gu(r,gi(t)),o.isLeafNode()&&(u=e.filter.updateFullNode(u,o,s)))}return o=t.serverCache.isFullyInitialized()||Ku(r,re())!=null,Bo(t,u,o,e.filter.filtersNodes())}}/**
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
 */class PD{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new nm(r.getIndex()),s=YO(r);this.processor_=CD(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(W.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(W.EMPTY_NODE,l.getNode(),null),c=new pi(a,o.isFullyInitialized(),i.filtersNodes()),d=new pi(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=qc(d,c),this.eventGenerator_=new nD(this.query_)}get query(){return this.query_}}function AD(e){return e.viewCache_.serverCache.getNode()}function bD(e,t){const n=gi(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!J(t)&&!n.getImmediateChild(X(t)).isEmpty())?n.getChild(t):null}function N_(e){return e.eventRegistrations_.length===0}function OD(e,t){e.eventRegistrations_.push(t)}function P_(e,t,n){const r=[];if(n){N(t==null,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(t){let i=[];for(let s=0;s<e.eventRegistrations_.length;++s){const o=e.eventRegistrations_[s];if(!o.matches(t))i.push(o);else if(t.hasAnyCallback()){i=i.concat(e.eventRegistrations_.slice(s+1));break}}e.eventRegistrations_=i}else e.eventRegistrations_=[];return r}function A_(e,t,n,r){t.type===tn.MERGE&&t.source.queryId!==null&&(N(gi(e.viewCache_),"We should always have a full cache before handling merges"),N($f(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=SD(e.processor_,i,t,n,r);return TD(e.processor_,s.viewCache),N(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,fT(e,s.changes,s.viewCache.eventCache.getNode(),null)}function DD(e,t){const n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Te,(s,o)=>{r.push(vs(s,o))}),n.isFullyInitialized()&&r.push(nT(n.getNode())),fT(e,r,n.getNode(),t)}function fT(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return rD(e.eventGenerator_,t,n,i)}/**
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
 */let Qu;class LD{constructor(){this.views=new Map}}function MD(e){N(!Qu,"__referenceConstructor has already been defined"),Qu=e}function FD(){return N(Qu,"Reference.ts has not been loaded"),Qu}function $D(e){return e.views.size===0}function cm(e,t,n,r){const i=t.source.queryId;if(i!==null){const s=e.views.get(i);return N(s!=null,"SyncTree gave us an op for an invalid query."),A_(s,t,n,r)}else{let s=[];for(const o of e.views.values())s=s.concat(A_(o,t,n,r));return s}}function UD(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let l=Gu(n,i?r:null),a=!1;l?a=!0:r instanceof W?(l=lm(n,r),a=!1):(l=W.EMPTY_NODE,a=!1);const u=qc(new pi(l,a,!1),new pi(r,i,!1));return new PD(t,u)}return o}function jD(e,t,n,r,i,s){const o=UD(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),OD(o,n),DD(o,n)}function BD(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const l=xr(e);if(i==="default")for(const[a,u]of e.views.entries())o=o.concat(P_(u,n,r)),N_(u)&&(e.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=e.views.get(i);a&&(o=o.concat(P_(a,n,r)),N_(a)&&(e.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!xr(e)&&s.push(new(FD())(t._repo,t._path)),{removed:s,events:o}}function pT(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function ls(e,t){let n=null;for(const r of e.views.values())n=n||bD(r,t);return n}function gT(e,t){if(t._queryParams.loadsAllData())return Gc(e);{const r=t._queryIdentifier;return e.views.get(r)}}function mT(e,t){return gT(e,t)!=null}function xr(e){return Gc(e)!=null}function Gc(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
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
 */let Xu;function VD(e){N(!Xu,"__referenceConstructor has already been defined"),Xu=e}function HD(){return N(Xu,"Reference.ts has not been loaded"),Xu}let zD=1;class b_{constructor(t){this.listenProvider_=t,this.syncPointTree_=new fe(null),this.pendingWriteTree_=yD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function WD(e,t,n,r,i){return lD(e.pendingWriteTree_,t,n,r,i),i?ea(e,new fi(iT(),t,n)):[]}function Hi(e,t,n=!1){const r=aD(e.pendingWriteTree_,t);if(uD(e.pendingWriteTree_,t)){let s=new fe(null);return r.snap!=null?s=s.set(re(),!0):kt(r.children,o=>{s=s.set(new ae(o),!0)}),ea(e,new qu(r.path,s,n))}else return[]}function Kc(e,t,n){return ea(e,new fi(im(),t,n))}function qD(e,t,n){const r=fe.fromObject(n);return ea(e,new Sl(im(),t,r))}function GD(e,t){return ea(e,new Tl(im(),t))}function KD(e,t,n){const r=hm(e,n);if(r){const i=dm(r),s=i.path,o=i.queryId,l=Et(s,t),a=new Tl(sm(o),l);return fm(e,s,a)}else return[]}function Hf(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let l=[];if(o&&(t._queryIdentifier==="default"||mT(o,t))){const a=BD(o,t,n,r);$D(o)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=e.syncPointTree_.findOnPath(s,(h,m)=>xr(m));if(c&&!d){const h=e.syncPointTree_.subtree(s);if(!h.isEmpty()){const m=XD(h);for(let v=0;v<m.length;++v){const _=m[v],f=_.query,p=wT(e,_);e.listenProvider_.startListening(Ho(f),Ju(e,f),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?e.listenProvider_.stopListening(Ho(t),null):u.forEach(h=>{const m=e.queryToTagMap.get(Yc(h));e.listenProvider_.stopListening(Ho(h),m)}))}JD(e,u)}return l}function YD(e,t,n,r){const i=hm(e,r);if(i!=null){const s=dm(i),o=s.path,l=s.queryId,a=Et(o,t),u=new fi(sm(l),a,n);return fm(e,o,u)}else return[]}function QD(e,t,n,r){const i=hm(e,r);if(i){const s=dm(i),o=s.path,l=s.queryId,a=Et(o,t),u=fe.fromObject(n),c=new Sl(sm(l),a,u);return fm(e,o,c)}else return[]}function O_(e,t,n,r=!1){const i=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(i,(h,m)=>{const v=Et(h,i);s=s||ls(m,v),o=o||xr(m)});let l=e.syncPointTree_.get(i);l?(o=o||xr(l),s=s||ls(l,re())):(l=new LD,e.syncPointTree_=e.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=W.EMPTY_NODE,e.syncPointTree_.subtree(i).foreachChild((m,v)=>{const _=ls(v,re());_&&(s=s.updateImmediateChild(m,_))}));const u=mT(l,t);if(!u&&!t._queryParams.loadsAllData()){const h=Yc(t);N(!e.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=ZD();e.queryToTagMap.set(h,m),e.tagToQueryMap.set(m,h)}const c=om(e.pendingWriteTree_,i);let d=jD(l,t,n,c,s,a);if(!u&&!o&&!r){const h=gT(l,t);d=d.concat(e2(e,t,h))}return d}function vT(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(o,l)=>{const a=Et(o,t),u=ls(l,a);if(u)return u});return aT(i,t,s,n,!0)}function ea(e,t){return yT(t,e.syncPointTree_,null,om(e.pendingWriteTree_,re()))}function yT(e,t,n,r){if(J(e.path))return _T(e,t,n,r);{const i=t.get(re());n==null&&i!=null&&(n=ls(i,re()));let s=[];const o=X(e.path),l=e.operationForChild(o),a=t.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=uT(r,o);s=s.concat(yT(l,a,u,c))}return i&&(s=s.concat(cm(i,e,r,n))),s}}function _T(e,t,n,r){const i=t.get(re());n==null&&i!=null&&(n=ls(i,re()));let s=[];return t.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=uT(r,o),c=e.operationForChild(o);c&&(s=s.concat(_T(c,l,a,u)))}),i&&(s=s.concat(cm(i,e,r,n))),s}function wT(e,t){const n=t.query,r=Ju(e,n);return{hashFn:()=>(AD(t)||W.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?KD(e,n._path,r):GD(e,n._path);{const s=Gb(i,n);return Hf(e,n,null,s)}}}}function Ju(e,t){const n=Yc(t);return e.queryToTagMap.get(n)}function Yc(e){return e._path.toString()+"$"+e._queryIdentifier}function hm(e,t){return e.tagToQueryMap.get(t)}function dm(e){const t=e.indexOf("$");return N(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ae(e.substr(0,t))}}function fm(e,t,n){const r=e.syncPointTree_.get(t);N(r,"Missing sync point for query tag that we're tracking");const i=om(e.pendingWriteTree_,t);return cm(r,n,i,null)}function XD(e){return e.fold((t,n,r)=>{if(n&&xr(n))return[Gc(n)];{let i=[];return n&&(i=pT(n)),kt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ho(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(HD())(e._repo,e._path):e}function JD(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const i=Yc(r),s=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(s)}}}function ZD(){return zD++}function e2(e,t,n){const r=t._path,i=Ju(e,t),s=wT(e,n),o=e.listenProvider_.startListening(Ho(t),i,s.hashFn,s.onComplete),l=e.syncPointTree_.subtree(r);if(i)N(!xr(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!J(u)&&c&&xr(c))return[Gc(c).query];{let h=[];return c&&(h=h.concat(pT(c).map(m=>m.query))),kt(d,(m,v)=>{h=h.concat(v)}),h}});for(let u=0;u<a.length;++u){const c=a[u];e.listenProvider_.stopListening(Ho(c),Ju(e,c))}}return o}/**
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
 */class pm{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new pm(n)}node(){return this.node_}}class gm{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=be(this.path_,t);return new gm(this.syncTree_,n)}node(){return vT(this.syncTree_,this.path_)}}const t2=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},D_=function(e,t,n){if(!e||typeof e!="object")return e;if(N(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return n2(e[".sv"],t,n);if(typeof e[".sv"]=="object")return r2(e[".sv"],t);N(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},n2=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+e)}},r2=function(e,t,n){e.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;typeof r!="number"&&N(!1,"Unexpected increment value: "+r);const i=t.node();if(N(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},i2=function(e,t,n,r){return mm(t,new gm(n,e),r)},s2=function(e,t,n){return mm(e,new pm(t),n)};function mm(e,t,n){const r=e.getPriority().val(),i=D_(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const o=e,l=D_(o.getValue(),t,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ue(l,et(i)):e}else{const o=e;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ue(i))),o.forEachChild(Te,(l,a)=>{const u=mm(a,t.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class vm{constructor(t="",n=null,r={children:{},childCount:0}){this.name=t,this.parent=n,this.node=r}}function ym(e,t){let n=t instanceof ae?t:new ae(t),r=e,i=X(n);for(;i!==null;){const s=ps(r.node.children,i)||{children:{},childCount:0};r=new vm(i,r,s),n=he(n),i=X(n)}return r}function js(e){return e.node.value}function ET(e,t){e.node.value=t,zf(e)}function CT(e){return e.node.childCount>0}function o2(e){return js(e)===void 0&&!CT(e)}function Qc(e,t){kt(e.node.children,(n,r)=>{t(new vm(n,e,r))})}function TT(e,t,n,r){n&&!r&&t(e),Qc(e,i=>{TT(i,t,!0,r)}),n&&r&&t(e)}function l2(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function ta(e){return new ae(e.parent===null?e.name:ta(e.parent)+"/"+e.name)}function zf(e){e.parent!==null&&a2(e.parent,e.name,e)}function a2(e,t,n){const r=o2(n),i=Hn(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,zf(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,zf(e))}/**
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
 */const u2=/[\[\].#$\/\u0000-\u001F\u007F]/,c2=/[\[\].#$\u0000-\u001F\u007F]/,ed=10*1024*1024,ST=function(e){return typeof e=="string"&&e.length!==0&&!u2.test(e)},IT=function(e){return typeof e=="string"&&e.length!==0&&!c2.test(e)},h2=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),IT(e)},kT=function(e,t,n){const r=n instanceof ae?new xO(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+$r(r));if(typeof t=="function")throw new Error(e+"contains a function "+$r(r)+" with contents = "+t.toString());if(xC(t))throw new Error(e+"contains "+t.toString()+" "+$r(r));if(typeof t=="string"&&t.length>ed/3&&xc(t)>ed)throw new Error(e+"contains a string greater than "+ed+" utf8 bytes "+$r(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,s=!1;if(kt(t,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ST(o)))throw new Error(e+" contains an invalid key ("+o+") "+$r(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);RO(r,o),kT(e,l,r),NO(r)}),i&&s)throw new Error(e+' contains ".value" child '+$r(r)+" in addition to actual children.")}},xT=function(e,t,n,r){if(!(r&&n===void 0)&&!IT(n))throw new Error(OE(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},d2=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xT(e,t,n,r)},f2=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!ST(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!h2(n))throw new Error(OE(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class p2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function RT(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();n!==null&&!Zg(s,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function NT(e,t,n){RT(e,n),PT(e,r=>Zg(r,t))}function Si(e,t,n){RT(e,n),PT(e,r=>en(r,t)||en(t,r))}function PT(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const s=i.path;t(s)?(g2(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function g2(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const r=n.getEventRunner();ni&&Ze("event: "+n.toString()),Jl(r)}}}/**
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
 */const m2="repo_interrupt",v2=25;class y2{constructor(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new p2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Wu(),this.transactionQueueTree_=new vm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function _2(e,t,n){if(e.stats_=Xg(e.repoInfo_),e.forceRestClient_||Xb())e.server_=new zu(e.repoInfo_,(r,i,s,o)=>{L_(e,r,i,s,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>M_(e,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Be(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Mn(e.repoInfo_,t,(r,i,s,o)=>{L_(e,r,i,s,o)},r=>{M_(e,r)},r=>{E2(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(r=>{e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(r=>{e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=rO(e.repoInfo_,()=>new tD(e.stats_,e.server_)),e.infoData_=new QO,e.infoSyncTree_=new b_({startListening:(r,i,s,o)=>{let l=[];const a=e.infoData_.getNode(r._path);return a.isEmpty()||(l=Kc(e.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),_m(e,"connected",!1),e.serverSyncTree_=new b_({startListening:(r,i,s,o)=>(e.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Si(e.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{e.server_.unlisten(r,i)}})}function w2(e){const n=e.infoData_.getNode(new ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function AT(e){return t2({timestamp:w2(e)})}function L_(e,t,n,r,i){e.dataUpdateCount++;const s=new ae(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const a=ku(n,u=>et(u));o=QD(e.serverSyncTree_,s,a,i)}else{const a=et(n);o=YD(e.serverSyncTree_,s,a,i)}else if(r){const a=ku(n,u=>et(u));o=qD(e.serverSyncTree_,s,a)}else{const a=et(n);o=Kc(e.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Em(e,s)),Si(e.eventQueue_,l,o)}function M_(e,t){_m(e,"connected",t),t===!1&&T2(e)}function E2(e,t){kt(t,(n,r)=>{_m(e,n,r)})}function _m(e,t,n){const r=new ae("/.info/"+t),i=et(n);e.infoData_.updateSnapshot(r,i);const s=Kc(e.infoSyncTree_,r,i);Si(e.eventQueue_,r,s)}function C2(e){return e.nextWriteId_++}function T2(e){bT(e,"onDisconnectEvents");const t=AT(e),n=Wu();Ff(e.onDisconnect_,re(),(i,s)=>{const o=i2(i,s,e.serverSyncTree_,t);rT(n,i,o)});let r=[];Ff(n,re(),(i,s)=>{r=r.concat(Kc(e.serverSyncTree_,i,s));const o=R2(e,i);Em(e,o)}),e.onDisconnect_=Wu(),Si(e.eventQueue_,re(),r)}function S2(e,t,n){let r;X(t._path)===".info"?r=O_(e.infoSyncTree_,t,n):r=O_(e.serverSyncTree_,t,n),NT(e.eventQueue_,t._path,r)}function F_(e,t,n){let r;X(t._path)===".info"?r=Hf(e.infoSyncTree_,t,n):r=Hf(e.serverSyncTree_,t,n),NT(e.eventQueue_,t._path,r)}function I2(e){e.persistentConnection_&&e.persistentConnection_.interrupt(m2)}function bT(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Ze(n,...t)}function OT(e,t,n){return vT(e.serverSyncTree_,t,n)||W.EMPTY_NODE}function wm(e,t=e.transactionQueueTree_){if(t||Xc(e,t),js(t)){const n=LT(e,t);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&k2(e,ta(t),n)}else CT(t)&&Qc(t,n=>{wm(e,n)})}function k2(e,t,n){const r=n.map(u=>u.currentWriteId),i=OT(e,t,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];N(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Et(t,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=t;e.server_.put(a.toString(),l,u=>{bT(e,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(Hi(e.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Xc(e,ym(e.transactionQueueTree_,t)),wm(e,e.transactionQueueTree_),Si(e.eventQueue_,t,c);for(let h=0;h<d.length;h++)Jl(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{bt("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Em(e,t)}},o)}function Em(e,t){const n=DT(e,t),r=ta(n),i=LT(e,n);return x2(e,i,r),r}function x2(e,t,n){if(t.length===0)return;const r=[];let i=[];const o=t.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<t.length;l++){const a=t[l],u=Et(n,a.path);let c=!1,d;if(N(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(Hi(e.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=v2)c=!0,d="maxretry",i=i.concat(Hi(e.serverSyncTree_,a.currentWriteId,!0));else{const h=OT(e,a.path,o);a.currentInputSnapshot=h;const m=t[l].update(h.val());if(m!==void 0){kT("transaction failed: Data returned ",m,a.path);let v=et(m);typeof m=="object"&&m!=null&&Hn(m,".priority")||(v=v.updatePriority(h.getPriority()));const f=a.currentWriteId,p=AT(e),g=s2(v,h,p);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=g,a.currentWriteId=C2(e),o.splice(o.indexOf(f),1),i=i.concat(WD(e.serverSyncTree_,a.path,g,a.currentWriteId,a.applyLocally)),i=i.concat(Hi(e.serverSyncTree_,f,!0))}else c=!0,d="nodata",i=i.concat(Hi(e.serverSyncTree_,a.currentWriteId,!0))}Si(e.eventQueue_,n,i),i=[],c&&(t[l].status=2,function(h){setTimeout(h,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&(d==="nodata"?r.push(()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot)):r.push(()=>t[l].onComplete(new Error(d),!1,null))))}Xc(e,e.transactionQueueTree_);for(let l=0;l<r.length;l++)Jl(r[l]);wm(e,e.transactionQueueTree_)}function DT(e,t){let n,r=e.transactionQueueTree_;for(n=X(t);n!==null&&js(r)===void 0;)r=ym(r,n),t=he(t),n=X(t);return r}function LT(e,t){const n=[];return MT(e,t,n),n.sort((r,i)=>r.order-i.order),n}function MT(e,t,n){const r=js(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Qc(t,i=>{MT(e,i,n)})}function Xc(e,t){const n=js(t);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ET(t,n.length>0?n:void 0)}Qc(t,r=>{Xc(e,r)})}function R2(e,t){const n=ta(DT(e,t)),r=ym(e.transactionQueueTree_,t);return l2(r,i=>{td(e,i)}),td(e,r),TT(r,i=>{td(e,i)}),n}function td(e,t){const n=js(t);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Hi(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ET(t,void 0):n.length=s+1,Si(e.eventQueue_,ta(t),i);for(let o=0;o<r.length;o++)Jl(r[o])}}/**
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
 */function N2(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function P2(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):bt(`Invalid query segment '${n}' in query '${e}'`)}return t}const $_=function(e,t){const n=A2(e),r=n.namespace;n.domain==="firebase.com"&&hi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&hi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Vb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new eO(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new ae(n.pathString)}},A2=function(e){let t="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(l=e.substring(0,u-1),e=e.substring(u+2));let c=e.indexOf("/");c===-1&&(c=e.length);let d=e.indexOf("?");d===-1&&(d=e.length),t=e.substring(0,Math.min(c,d)),c<d&&(i=N2(e.substring(c,d)));const h=P2(e.substring(Math.min(e.length,d)));u=t.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(t.substring(u+1),10)):u=t.length;const m=t.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const v=t.indexOf(".");r=t.substring(0,v).toLowerCase(),n=t.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:t,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class FT{constructor(t,n,r,i){this.eventType=t,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Be(this.snapshot.exportVal())}}class $T{constructor(t,n,r){this.eventRegistration=t,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class b2{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
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
 */class Cm{constructor(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return J(this._path)?null:GC(this._path)}get ref(){return new Wn(this._repo,this._path)}get _queryIdentifier(){const t=E_(this._queryParams),n=Yg(t);return n==="{}"?"default":n}get _queryObject(){return E_(this._queryParams)}isEqual(t){if(t=Tn(t),!(t instanceof Cm))return!1;const n=this._repo===t._repo,r=Zg(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+kO(this._path)}}class Wn extends Cm{constructor(t,n){super(t,n,new rm,!1)}get parent(){const t=YC(this._path);return t===null?null:new Wn(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class Il{constructor(t,n,r){this._node=t,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new ae(t),r=Wf(this.ref,t);return new Il(this._node.getChild(n),r,Te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>t(new Il(i,Wf(this.ref,r),Te)))}hasChild(t){const n=new ae(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Wf(e,t){return e=Tn(e),X(e._path)===null?d2("child","path",t,!1):xT("child","path",t,!1),new Wn(e._repo,be(e._path,t))}class Tm{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const r=n._queryParams.getIndex();return new FT("value",this,new Il(t.snapshotNode,new Wn(n._repo,n._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new $T(this,t,n):null}matches(t){return t instanceof Tm?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Sm{constructor(t,n){this.eventType=t,this.callbackContext=n}respondsTo(t){let n=t==="children_added"?"child_added":t;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new $T(this,t,n):null}createEvent(t,n){N(t.childName!=null,"Child events should have a childName.");const r=Wf(new Wn(n._repo,n._path),t.childName),i=n._queryParams.getIndex();return new FT(t.type,this,new Il(t.snapshotNode,r,i),t.prevName)}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,t.prevName)}matches(t){return t instanceof Sm?this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function na(e,t,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,d)=>{F_(e._repo,e,l),a(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new b2(n,s||void 0),l=t==="value"?new Tm(o):new Sm(t,o);return S2(e._repo,e,l),()=>F_(e._repo,e,l)}function O2(e,t,n,r){return na(e,"value",t,n,r)}function D2(e,t,n,r){return na(e,"child_added",t,n,r)}function L2(e,t,n,r){return na(e,"child_changed",t,n,r)}function M2(e,t,n,r){return na(e,"child_moved",t,n,r)}function F2(e,t,n,r){return na(e,"child_removed",t,n,r)}MD(Wn);VD(Wn);/**
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
 */const $2="FIREBASE_DATABASE_EMULATOR_HOST",qf={};let U2=!1;function j2(e,t,n,r,i){let s=r||e.options.databaseURL;s===void 0&&(e.options.projectId||hi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ze("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=$_(s,i),l=o.repoInfo,a,u;typeof process!="undefined"&&process.env&&(u=process.env[$2]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=$_(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new Df(Df.OWNER):new Zb(e.name,e.options,t);f2("Invalid Firebase Database URL",o),J(o.path)||hi("Database URL must point to the root of a Firebase Database (not including a child path).");const d=V2(l,e,c,new Jb(e.name,n));return new H2(d,e)}function B2(e,t){const n=qf[t];(!n||n[e.key]!==e)&&hi(`Database ${t}(${e.repoInfo_}) has already been deleted.`),I2(e),delete n[e.key]}function V2(e,t,n,r){let i=qf[t.name];i||(i={},qf[t.name]=i);let s=i[e.toURLString()];return s&&hi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new y2(e,U2,n,r),i[e.toURLString()]=s,s}class H2{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wn(this._repo,re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(B2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&hi("Cannot call "+t+" on a deleted database.")}}/**
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
 */function z2(e){Fb(zn),Ht(new Ot("database",(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return j2(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ae(i_,s_,e),Ae(i_,s_,"esm2017")}Mn.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};Mn.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};z2();var W2="firebase",q2="9.22.2";/**
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
 */Ae(W2,q2,"app");/**
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
 */const G2="functions";/**
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
 */class K2{constructor(t,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||t.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(!!this.auth)try{const t=await this.auth.getToken();return t==null?void 0:t.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(t){if(this.appCheck){const n=t?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(t){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(t);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
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
 */const U_="us-central1";class Y2{constructor(t,n,r,i,s=U_,o){this.app=t,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new K2(n,r,i),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(s);this.customDomain=l.origin,this.region=U_}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(t){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${t}`:this.customDomain!==null?`${this.customDomain}/${t}`:`https://${this.region}-${n}.cloudfunctions.net/${t}`}}const j_="@firebase/functions",B_="0.10.0";/**
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
 */const Q2="auth-internal",X2="app-check-internal",J2="messaging-internal";function Z2(e,t){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(Q2),l=r.getProvider(J2),a=r.getProvider(X2);return new Y2(s,o,l,a,i,e)};Ht(new Ot(G2,n,"PUBLIC").setMultipleInstances(!0)),Ae(j_,B_,t),Ae(j_,B_,"esm2017")}Z2(fetch.bind(self));/**
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
 */const UT="firebasestorage.googleapis.com",eL="storageBucket",tL=2*60*1e3,nL=10*60*1e3;/**
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
 */class Sn extends It{constructor(t,n,r=0){super(nd(t),`Firebase Storage: ${n} (${nd(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Sn.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return nd(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var En;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(En||(En={}));function nd(e){return"storage/"+e}function rL(){const e="An unknown error occurred, please check the error payload for server response.";return new Sn(En.UNKNOWN,e)}function iL(){return new Sn(En.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function sL(){return new Sn(En.CANCELED,"User canceled the upload/download.")}function oL(e){return new Sn(En.INVALID_URL,"Invalid URL '"+e+"'.")}function lL(e){return new Sn(En.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function V_(e){return new Sn(En.INVALID_ARGUMENT,e)}function jT(){return new Sn(En.APP_DELETED,"The Firebase app was deleted.")}function aL(e){return new Sn(En.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class nn{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=nn.makeFromUrl(t,n)}catch{return new nn(t,"")}if(r.path==="")return r;throw lL(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),a={bucket:1,path:3};function u(C){C.path_=decodeURIComponent(C.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${c}/b/${i}/o${h}`,"i"),v={bucket:1,path:3},_=n===UT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,f="([^?#]*)",p=new RegExp(`^https?://${_}/${i}/${f}`,"i"),E=[{regex:l,indices:a,postModify:s},{regex:m,indices:v,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let C=0;C<E.length;C++){const k=E[C],I=k.regex.exec(t);if(I){const O=I[k.indices.bucket];let M=I[k.indices.path];M||(M=""),r=new nn(O,M),k.postModify(r);break}}if(r==null)throw oL(t);return r}}class uL{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function cL(e,t,n){let r=1,i=null,s=null,o=!1,l=0;function a(){return l===2}let u=!1;function c(...f){u||(u=!0,t.apply(null,f))}function d(f){i=setTimeout(()=>{i=null,e(m,a())},f)}function h(){s&&clearTimeout(s)}function m(f,...p){if(u){h();return}if(f){h(),c.call(null,f,...p);return}if(a()||o){h(),c.call(null,f,...p);return}r<64&&(r*=2);let E;l===1?(l=2,E=0):E=(r+Math.random())*1e3,d(E)}let v=!1;function _(f){v||(v=!0,h(),!u&&(i!==null?(f||(l=2),clearTimeout(i),d(0)):f||(l=1)))}return d(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function hL(e){e(!1)}/**
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
 */function dL(e){return e!==void 0}function H_(e,t,n,r){if(r<t)throw V_(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw V_(`Invalid value for '${e}'. Expected ${n} or less.`)}function fL(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Zu;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Zu||(Zu={}));/**
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
 */function pL(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
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
 */class gL{constructor(t,n,r,i,s,o,l,a,u,c,d,h=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,v)=>{this.resolve_=m,this.reject_=v,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Na(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const a=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Zu.NO_ERROR,a=s.getStatus();if(!l||pL(a,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Zu.ABORT;r(!1,new Na(!1,null,c));return}const u=this.successCodes_.indexOf(a)!==-1;r(!0,new Na(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());dL(a)?s(a):s()}catch(a){o(a)}else if(l!==null){const a=rL();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(i.canceled){const a=this.appDelete_?jT():sL();o(a)}else{const a=iL();o(a)}};this.canceled_?n(!1,new Na(!1,null,!0)):this.backoffId_=cL(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&hL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Na{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function mL(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function vL(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t!=null?t:"AppManager")}function yL(e,t){t&&(e["X-Firebase-GMPID"]=t)}function _L(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function wL(e,t,n,r,i,s,o=!0){const l=fL(e.urlParams),a=e.url+l,u=Object.assign({},e.headers);return yL(u,t),mL(u,n),vL(u,s),_L(u,r),new gL(a,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
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
 */function EL(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function CL(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class ec{constructor(t,n){this._service=t,n instanceof nn?this._location=n:this._location=nn.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new ec(t,n)}get root(){const t=new nn(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return CL(this._location.path)}get storage(){return this._service}get parent(){const t=EL(this._location.path);if(t===null)return null;const n=new nn(this._location.bucket,t);return new ec(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw aL(t)}}function z_(e,t){const n=t==null?void 0:t[eL];return n==null?null:nn.makeFromBucketSpec(n,e)}class TL{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=UT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=tL,this._maxUploadRetryTime=nL,this._requests=new Set,i!=null?this._bucket=nn.makeFromBucketSpec(i,this._host):this._bucket=z_(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=nn.makeFromBucketSpec(this._url,t):this._bucket=z_(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){H_("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){H_("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ec(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new uL(jT());{const o=wL(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const W_="@firebase/storage",q_="0.11.2";/**
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
 */const SL="storage";function IL(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new TL(n,r,i,t,zn)}function kL(){Ht(new Ot(SL,IL,"PUBLIC").setMultipleInstances(!0)),Ae(W_,q_,""),Ae(W_,q_,"esm2017")}kL();const xL=(e,t)=>t.some(n=>e instanceof n);let G_,K_;function RL(){return G_||(G_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NL(){return K_||(K_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const BT=new WeakMap,Gf=new WeakMap,VT=new WeakMap,rd=new WeakMap,Im=new WeakMap;function PL(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(yr(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&BT.set(n,e)}).catch(()=>{}),Im.set(t,e),t}function AL(e){if(Gf.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Gf.set(e,t)}let Kf={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Gf.get(e);if(t==="objectStoreNames")return e.objectStoreNames||VT.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function bL(e){Kf=e(Kf)}function OL(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(id(this),t,...n);return VT.set(r,t.sort?t.sort():[t]),yr(r)}:NL().includes(e)?function(...t){return e.apply(id(this),t),yr(BT.get(this))}:function(...t){return yr(e.apply(id(this),t))}}function DL(e){return typeof e=="function"?OL(e):(e instanceof IDBTransaction&&AL(e),xL(e,RL())?new Proxy(e,Kf):e)}function yr(e){if(e instanceof IDBRequest)return PL(e);if(rd.has(e))return rd.get(e);const t=DL(e);return t!==e&&(rd.set(e,t),Im.set(t,e)),t}const id=e=>Im.get(e);function LL(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),l=yr(o);return r&&o.addEventListener("upgradeneeded",a=>{r(yr(o.result),a.oldVersion,a.newVersion,yr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const ML=["get","getKey","getAll","getAllKeys","count"],FL=["put","add","delete","clear"],sd=new Map;function Y_(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(sd.get(t))return sd.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=FL.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ML.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return sd.set(t,s),s}bL(e=>({...e,get:(t,n,r)=>Y_(t,n)||e.get(t,n,r),has:(t,n)=>!!Y_(t,n)||e.has(t,n)}));const HT="@firebase/installations",km="0.6.4";/**
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
 */const zT=1e4,WT=`w:${km}`,qT="FIS_v2",$L="https://firebaseinstallations.googleapis.com/v1",UL=60*60*1e3,jL="installations",BL="Installations";/**
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
 */const VL={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},mi=new Ci(jL,BL,VL);function GT(e){return e instanceof It&&e.code.includes("request-failed")}/**
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
 */function KT({projectId:e}){return`${$L}/projects/${e}/installations`}function YT(e){return{token:e.token,requestStatus:2,expiresIn:zL(e.expiresIn),creationTime:Date.now()}}async function QT(e,t){const r=(await t.json()).error;return mi.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function XT({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function HL(e,{refreshToken:t}){const n=XT(e);return n.append("Authorization",WL(t)),n}async function JT(e){const t=await e();return t.status>=500&&t.status<600?e():t}function zL(e){return Number(e.replace("s","000"))}function WL(e){return`${qT} ${e}`}/**
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
 */async function qL({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=KT(e),i=XT(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:qT,appId:e.appId,sdkVersion:WT},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await JT(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:YT(u.authToken)}}else throw await QT("Create Installation",a)}/**
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
 */function ZT(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function GL(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const KL=/^[cdef][\w-]{21}$/,Yf="";function YL(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=QL(e);return KL.test(n)?n:Yf}catch{return Yf}}function QL(e){return GL(e).substr(0,22)}/**
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
 */function Jc(e){return`${e.appName}!${e.appId}`}/**
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
 */const eS=new Map;function tS(e,t){const n=Jc(e);nS(n,t),XL(n,t)}function nS(e,t){const n=eS.get(e);if(!!n)for(const r of n)r(t)}function XL(e,t){const n=JL();n&&n.postMessage({key:e,fid:t}),ZL()}let Qr=null;function JL(){return!Qr&&"BroadcastChannel"in self&&(Qr=new BroadcastChannel("[Firebase] FID Change"),Qr.onmessage=e=>{nS(e.data.key,e.data.fid)}),Qr}function ZL(){eS.size===0&&Qr&&(Qr.close(),Qr=null)}/**
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
 */const eM="firebase-installations-database",tM=1,vi="firebase-installations-store";let od=null;function xm(){return od||(od=LL(eM,tM,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(vi)}}})),od}async function tc(e,t){const n=Jc(e),i=(await xm()).transaction(vi,"readwrite"),s=i.objectStore(vi),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&tS(e,t.fid),t}async function rS(e){const t=Jc(e),r=(await xm()).transaction(vi,"readwrite");await r.objectStore(vi).delete(t),await r.done}async function Zc(e,t){const n=Jc(e),i=(await xm()).transaction(vi,"readwrite"),s=i.objectStore(vi),o=await s.get(n),l=t(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&tS(e,l.fid),l}/**
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
 */async function Rm(e){let t;const n=await Zc(e.appConfig,r=>{const i=nM(r),s=rM(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Yf?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function nM(e){const t=e||{fid:YL(),registrationStatus:0};return iS(t)}function rM(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(mi.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=iM(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:sM(e)}:{installationEntry:t}}async function iM(e,t){try{const n=await qL(e,t);return tc(e.appConfig,n)}catch(n){throw GT(n)&&n.customData.serverCode===409?await rS(e.appConfig):await tc(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function sM(e){let t=await Q_(e.appConfig);for(;t.registrationStatus===1;)await ZT(100),t=await Q_(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Rm(e);return r||n}return t}function Q_(e){return Zc(e,t=>{if(!t)throw mi.create("installation-not-found");return iS(t)})}function iS(e){return oM(e)?{fid:e.fid,registrationStatus:0}:e}function oM(e){return e.registrationStatus===1&&e.registrationTime+zT<Date.now()}/**
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
 */async function lM({appConfig:e,heartbeatServiceProvider:t},n){const r=aM(e,n),i=HL(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:WT,appId:e.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await JT(()=>fetch(r,l));if(a.ok){const u=await a.json();return YT(u)}else throw await QT("Generate Auth Token",a)}function aM(e,{fid:t}){return`${KT(e)}/${t}/authTokens:generate`}/**
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
 */async function Nm(e,t=!1){let n;const r=await Zc(e.appConfig,s=>{if(!sS(s))throw mi.create("not-registered");const o=s.authToken;if(!t&&hM(o))return s;if(o.requestStatus===1)return n=uM(e,t),s;{if(!navigator.onLine)throw mi.create("app-offline");const l=fM(s);return n=cM(e,l),l}});return n?await n:r.authToken}async function uM(e,t){let n=await X_(e.appConfig);for(;n.authToken.requestStatus===1;)await ZT(100),n=await X_(e.appConfig);const r=n.authToken;return r.requestStatus===0?Nm(e,t):r}function X_(e){return Zc(e,t=>{if(!sS(t))throw mi.create("not-registered");const n=t.authToken;return pM(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function cM(e,t){try{const n=await lM(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await tc(e.appConfig,r),n}catch(n){if(GT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await rS(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await tc(e.appConfig,r)}throw n}}function sS(e){return e!==void 0&&e.registrationStatus===2}function hM(e){return e.requestStatus===2&&!dM(e)}function dM(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+UL}function fM(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function pM(e){return e.requestStatus===1&&e.requestTime+zT<Date.now()}/**
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
 */async function gM(e){const t=e,{installationEntry:n,registrationPromise:r}=await Rm(t);return r?r.catch(console.error):Nm(t).catch(console.error),n.fid}/**
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
 */async function mM(e,t=!1){const n=e;return await vM(n),(await Nm(n,t)).token}async function vM(e){const{registrationPromise:t}=await Rm(e);t&&await t}/**
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
 */function yM(e){if(!e||!e.options)throw ld("App Configuration");if(!e.name)throw ld("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ld(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ld(e){return mi.create("missing-app-config-values",{valueName:e})}/**
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
 */const oS="installations",_M="installations-internal",wM=e=>{const t=e.getProvider("app").getImmediate(),n=yM(t),r=Ml(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},EM=e=>{const t=e.getProvider("app").getImmediate(),n=Ml(t,oS).getImmediate();return{getId:()=>gM(n),getToken:i=>mM(n,i)}};function CM(){Ht(new Ot(oS,wM,"PUBLIC")),Ht(new Ot(_M,EM,"PRIVATE"))}CM();Ae(HT,km);Ae(HT,km,"esm2017");const ad="@firebase/remote-config",J_="0.4.4";/**
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
 */const TM="remote-config";/**
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
 */const SM={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},wt=new Ci("remoteconfig","Remote Config",SM);function IM(e){const t=Tn(e);return t._initializePromise||(t._initializePromise=t._storageCache.loadFromStorage().then(()=>{t._isInitializationComplete=!0})),t._initializePromise}/**
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
 */class kM{constructor(t,n,r,i){this.client=t,this.storage=n,this.storageCache=r,this.logger=i}isCachedDataFresh(t,n){if(!n)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const r=Date.now()-n,i=r<=t;return this.logger.debug(`Config fetch cache check. Cache age millis: ${r}. Cache max age millis (minimumFetchIntervalMillis setting): ${t}. Is cache hit: ${i}.`),i}async fetch(t){const[n,r]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(r&&this.isCachedDataFresh(t.cacheMaxAgeMillis,n))return r;t.eTag=r&&r.eTag;const i=await this.client.fetch(t),s=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return i.status===200&&s.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(s),i}}/**
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
 */function xM(e=navigator){return e.languages&&e.languages[0]||e.language}/**
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
 */class RM{constructor(t,n,r,i,s,o){this.firebaseInstallations=t,this.sdkVersion=n,this.namespace=r,this.projectId=i,this.apiKey=s,this.appId=o}async fetch(t){const[n,r]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),s=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,o={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":t.eTag||"*"},l={sdk_version:this.sdkVersion,app_instance_id:n,app_instance_id_token:r,app_id:this.appId,language_code:xM()},a={method:"POST",headers:o,body:JSON.stringify(l)},u=fetch(s,a),c=new Promise((f,p)=>{t.signal.addEventListener(()=>{const g=new Error("The operation was aborted.");g.name="AbortError",p(g)})});let d;try{await Promise.race([u,c]),d=await u}catch(f){let p="fetch-client-network";throw(f==null?void 0:f.name)==="AbortError"&&(p="fetch-timeout"),wt.create(p,{originalErrorMessage:f==null?void 0:f.message})}let h=d.status;const m=d.headers.get("ETag")||void 0;let v,_;if(d.status===200){let f;try{f=await d.json()}catch(p){throw wt.create("fetch-client-parse",{originalErrorMessage:p==null?void 0:p.message})}v=f.entries,_=f.state}if(_==="INSTANCE_STATE_UNSPECIFIED"?h=500:_==="NO_CHANGE"?h=304:(_==="NO_TEMPLATE"||_==="EMPTY_CONFIG")&&(v={}),h!==304&&h!==200)throw wt.create("fetch-status",{httpStatus:h});return{status:h,eTag:m,config:v}}}/**
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
 */function NM(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(wt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function PM(e){if(!(e instanceof It)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class AM{constructor(t,n){this.client=t,this.storage=n}async fetch(t){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(t,n)}async attemptFetch(t,{throttleEndTimeMillis:n,backoffCount:r}){await NM(t.signal,n);try{const i=await this.client.fetch(t);return await this.storage.deleteThrottleMetadata(),i}catch(i){if(!PM(i))throw i;const s={throttleEndTimeMillis:Date.now()+nR(r),backoffCount:r+1};return await this.storage.setThrottleMetadata(s),this.attemptFetch(t,s)}}}/**
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
 */const bM=60*1e3,OM=12*60*60*1e3;class DM{constructor(t,n,r,i,s){this.app=t,this._client=n,this._storageCache=r,this._storage=i,this._logger=s,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:bM,minimumFetchIntervalMillis:OM},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
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
 */function Ka(e,t){const n=e.target.error||void 0;return wt.create(t,{originalErrorMessage:n&&(n==null?void 0:n.message)})}const Ur="app_namespace_store",LM="firebase_remote_config",MM=1;function FM(){return new Promise((e,t)=>{try{const n=indexedDB.open(LM,MM);n.onerror=r=>{t(Ka(r,"storage-open"))},n.onsuccess=r=>{e(r.target.result)},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(Ur,{keyPath:"compositeKey"})}}}catch(n){t(wt.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}})}class $M{constructor(t,n,r,i=FM()){this.appId=t,this.appName=n,this.namespace=r,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(t){return this.set("last_fetch_status",t)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(t){return this.set("last_successful_fetch_timestamp_millis",t)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(t){return this.set("last_successful_fetch_response",t)}getActiveConfig(){return this.get("active_config")}setActiveConfig(t){return this.set("active_config",t)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(t){return this.set("active_config_etag",t)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(t){return this.set("throttle_metadata",t)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(t){const n=await this.openDbPromise;return new Promise((r,i)=>{const o=n.transaction([Ur],"readonly").objectStore(Ur),l=this.createCompositeKey(t);try{const a=o.get(l);a.onerror=u=>{i(Ka(u,"storage-get"))},a.onsuccess=u=>{const c=u.target.result;r(c?c.value:void 0)}}catch(a){i(wt.create("storage-get",{originalErrorMessage:a==null?void 0:a.message}))}})}async set(t,n){const r=await this.openDbPromise;return new Promise((i,s)=>{const l=r.transaction([Ur],"readwrite").objectStore(Ur),a=this.createCompositeKey(t);try{const u=l.put({compositeKey:a,value:n});u.onerror=c=>{s(Ka(c,"storage-set"))},u.onsuccess=()=>{i()}}catch(u){s(wt.create("storage-set",{originalErrorMessage:u==null?void 0:u.message}))}})}async delete(t){const n=await this.openDbPromise;return new Promise((r,i)=>{const o=n.transaction([Ur],"readwrite").objectStore(Ur),l=this.createCompositeKey(t);try{const a=o.delete(l);a.onerror=u=>{i(Ka(u,"storage-delete"))},a.onsuccess=()=>{r()}}catch(a){i(wt.create("storage-delete",{originalErrorMessage:a==null?void 0:a.message}))}})}createCompositeKey(t){return[this.appId,this.appName,this.namespace,t].join()}}/**
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
 */class UM{constructor(t){this.storage=t}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const t=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),i=await t;i&&(this.lastFetchStatus=i);const s=await n;s&&(this.lastSuccessfulFetchTimestampMillis=s);const o=await r;o&&(this.activeConfig=o)}setLastFetchStatus(t){return this.lastFetchStatus=t,this.storage.setLastFetchStatus(t)}setLastSuccessfulFetchTimestampMillis(t){return this.lastSuccessfulFetchTimestampMillis=t,this.storage.setLastSuccessfulFetchTimestampMillis(t)}setActiveConfig(t){return this.activeConfig=t,this.storage.setActiveConfig(t)}}/**
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
 */function jM(){Ht(new Ot(TM,e,"PUBLIC").setMultipleInstances(!0)),Ae(ad,J_),Ae(ad,J_,"esm2017");function e(t,{instanceIdentifier:n}){const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();if(typeof window=="undefined")throw wt.create("registration-window");if(!AE())throw wt.create("indexed-db-unavailable");const{projectId:s,apiKey:o,appId:l}=r.options;if(!s)throw wt.create("registration-project-id");if(!o)throw wt.create("registration-api-key");if(!l)throw wt.create("registration-app-id");n=n||"firebase";const a=new $M(l,r.name,n),u=new UM(a),c=new Ll(ad);c.logLevel=ne.ERROR;const d=new RM(i,zn,n,s,o,l),h=new AM(d,a),m=new kM(h,a,u,c),v=new DM(r,m,u,a,c);return IM(v),v}}jM();var Qf=function(e,t){return Qf=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Qf(e,t)};function qn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Qf(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function BM(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function l(c){try{u(r.next(c))}catch(d){o(d)}}function a(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(l,a)}u((r=r.apply(e,t||[])).next())})}function lS(e,t){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(u){return function(c){return a([u,c])}}function a(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function _s(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function ws(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,s=[],o;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(l){o={error:l}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function Es(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}function as(e){return this instanceof as?(this.v=e,this):new as(e)}function VM(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(h){r[h]&&(i[h]=function(m){return new Promise(function(v,_){s.push([h,m,v,_])>1||l(h,m)})})}function l(h,m){try{a(r[h](m))}catch(v){d(s[0][3],v)}}function a(h){h.value instanceof as?Promise.resolve(h.value.v).then(u,c):d(s[0][2],h)}function u(h){l("next",h)}function c(h){l("throw",h)}function d(h,m){h(m),s.shift(),s.length&&l(s[0][0],s[0][1])}}function HM(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof _s=="function"?_s(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(s){n[s]=e[s]&&function(o){return new Promise(function(l,a){o=e[s](o),i(l,a,o.done,o.value)})}}function i(s,o,l,a){Promise.resolve(a).then(function(u){s({value:u,done:l})},o)}}function De(e){return typeof e=="function"}function Pm(e){var t=function(r){Error.call(r),r.stack=new Error().stack},n=e(t);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var ud=Pm(function(e){return function(t){e(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function nc(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var ra=function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,n,r,i,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var l=_s(o),a=l.next();!a.done;a=l.next()){var u=a.value;u.remove(this)}}catch(_){t={error:_}}finally{try{a&&!a.done&&(n=l.return)&&n.call(l)}finally{if(t)throw t.error}}else o.remove(this);var c=this.initialTeardown;if(De(c))try{c()}catch(_){s=_ instanceof ud?_.errors:[_]}var d=this._finalizers;if(d){this._finalizers=null;try{for(var h=_s(d),m=h.next();!m.done;m=h.next()){var v=m.value;try{Z_(v)}catch(_){s=s!=null?s:[],_ instanceof ud?s=Es(Es([],ws(s)),ws(_.errors)):s.push(_)}}}catch(_){r={error:_}}finally{try{m&&!m.done&&(i=h.return)&&i.call(h)}finally{if(r)throw r.error}}}if(s)throw new ud(s)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)Z_(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}},e.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},e.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},e.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&nc(n,t)},e.prototype.remove=function(t){var n=this._finalizers;n&&nc(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=function(){var t=new e;return t.closed=!0,t}(),e}(),aS=ra.EMPTY;function uS(e){return e instanceof ra||e&&"closed"in e&&De(e.remove)&&De(e.add)&&De(e.unsubscribe)}function Z_(e){De(e)?e():e.unsubscribe()}var cS={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},zM={setTimeout:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,Es([e,t],ws(n)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function hS(e){zM.setTimeout(function(){throw e})}function e0(){}function Ya(e){e()}var Am=function(e){qn(t,e);function t(n){var r=e.call(this)||this;return r.isStopped=!1,n?(r.destination=n,uS(n)&&n.add(r)):r.destination=KM,r}return t.create=function(n,r,i){return new kl(n,r,i)},t.prototype.next=function(n){this.isStopped||this._next(n)},t.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(n){this.destination.next(n)},t.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(ra),WM=Function.prototype.bind;function cd(e,t){return WM.call(e,t)}var qM=function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(r){Pa(r)}},e.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(r){Pa(r)}else Pa(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){Pa(n)}},e}(),kl=function(e){qn(t,e);function t(n,r,i){var s=e.call(this)||this,o;if(De(n)||!n)o={next:n!=null?n:void 0,error:r!=null?r:void 0,complete:i!=null?i:void 0};else{var l;s&&cS.useDeprecatedNextContext?(l=Object.create(n),l.unsubscribe=function(){return s.unsubscribe()},o={next:n.next&&cd(n.next,l),error:n.error&&cd(n.error,l),complete:n.complete&&cd(n.complete,l)}):o=n}return s.destination=new qM(o),s}return t}(Am);function Pa(e){hS(e)}function GM(e){throw e}var KM={closed:!0,next:e0,error:GM,complete:e0},bm=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function dS(e){return e}function YM(e){return e.length===0?dS:e.length===1?e[0]:function(t){return e.reduce(function(n,r){return r(n)},t)}}var xt=function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(t,n,r){var i=this,s=XM(t)?t:new kl(t,n,r);return Ya(function(){var o=i,l=o.operator,a=o.source;s.add(l?l.call(s,a):a?i._subscribe(s):i._trySubscribe(s))}),s},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},e.prototype.forEach=function(t,n){var r=this;return n=t0(n),new n(function(i,s){var o=new kl({next:function(l){try{t(l)}catch(a){s(a),o.unsubscribe()}},error:s,complete:i});r.subscribe(o)})},e.prototype._subscribe=function(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)},e.prototype[bm]=function(){return this},e.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return YM(t)(this)},e.prototype.toPromise=function(t){var n=this;return t=t0(t),new t(function(r,i){var s;n.subscribe(function(o){return s=o},function(o){return i(o)},function(){return r(s)})})},e.create=function(t){return new e(t)},e}();function t0(e){var t;return(t=e!=null?e:cS.Promise)!==null&&t!==void 0?t:Promise}function QM(e){return e&&De(e.next)&&De(e.error)&&De(e.complete)}function XM(e){return e&&e instanceof Am||QM(e)&&uS(e)}function JM(e){return De(e==null?void 0:e.lift)}function Ii(e){return function(t){if(JM(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Cs(e,t,n,r,i){return new ZM(e,t,n,r,i)}var ZM=function(e){qn(t,e);function t(n,r,i,s,o,l){var a=e.call(this,n)||this;return a.onFinalize=o,a.shouldUnsubscribe=l,a._next=r?function(u){try{r(u)}catch(c){n.error(c)}}:e.prototype._next,a._error=s?function(u){try{s(u)}catch(c){n.error(c)}finally{this.unsubscribe()}}:e.prototype._error,a._complete=i?function(){try{i()}catch(u){n.error(u)}finally{this.unsubscribe()}}:e.prototype._complete,a}return t.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;e.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},t}(Am),eF=Pm(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),eh=function(e){qn(t,e);function t(){var n=e.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return t.prototype.lift=function(n){var r=new n0(this,this);return r.operator=n,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new eF},t.prototype.next=function(n){var r=this;Ya(function(){var i,s;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var o=_s(r.currentObservers),l=o.next();!l.done;l=o.next()){var a=l.value;a.next(n)}}catch(u){i={error:u}}finally{try{l&&!l.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}})},t.prototype.error=function(n){var r=this;Ya(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},t.prototype.complete=function(){var n=this;Ya(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(n){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,n)},t.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},t.prototype._innerSubscribe=function(n){var r=this,i=this,s=i.hasError,o=i.isStopped,l=i.observers;return s||o?aS:(this.currentObservers=null,l.push(n),new ra(function(){r.currentObservers=null,nc(l,n)}))},t.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,s=r.thrownError,o=r.isStopped;i?n.error(s):o&&n.complete()},t.prototype.asObservable=function(){var n=new xt;return n.source=this,n},t.create=function(n,r){return new n0(n,r)},t}(xt),n0=function(e){qn(t,e);function t(n,r){var i=e.call(this)||this;return i.destination=n,i.source=r,i}return t.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},t.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},t.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},t.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:aS},t}(eh),Om={now:function(){return(Om.delegate||Date).now()},delegate:void 0},tF=function(e){qn(t,e);function t(n,r,i){n===void 0&&(n=1/0),r===void 0&&(r=1/0),i===void 0&&(i=Om);var s=e.call(this)||this;return s._bufferSize=n,s._windowTime=r,s._timestampProvider=i,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=r===1/0,s._bufferSize=Math.max(1,n),s._windowTime=Math.max(1,r),s}return t.prototype.next=function(n){var r=this,i=r.isStopped,s=r._buffer,o=r._infiniteTimeWindow,l=r._timestampProvider,a=r._windowTime;i||(s.push(n),!o&&s.push(l.now()+a)),this._trimBuffer(),e.prototype.next.call(this,n)},t.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),i=this,s=i._infiniteTimeWindow,o=i._buffer,l=o.slice(),a=0;a<l.length&&!n.closed;a+=s?1:2)n.next(l[a]);return this._checkFinalizedStatuses(n),r},t.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,i=n._timestampProvider,s=n._buffer,o=n._infiniteTimeWindow,l=(o?1:2)*r;if(r<1/0&&l<s.length&&s.splice(0,s.length-l),!o){for(var a=i.now(),u=0,c=1;c<s.length&&s[c]<=a;c+=2)u=c;u&&s.splice(0,u+1)}},t}(eh),nF=function(e){qn(t,e);function t(n,r){return e.call(this)||this}return t.prototype.schedule=function(n,r){return this},t}(ra),Xf={setInterval:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=Xf.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,Es([e,t],ws(n))):setInterval.apply(void 0,Es([e,t],ws(n)))},clearInterval:function(e){return clearInterval(e)},delegate:void 0},rF=function(e){qn(t,e);function t(n,r){var i=e.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return t.prototype.schedule=function(n,r){if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(s,this.id,r),this},t.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),Xf.setInterval(n.flush.bind(n,this),i)},t.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;Xf.clearInterval(r)},t.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(n,r){var i=!1,s;try{this.work(n)}catch(o){i=!0,s=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s},t.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,s=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,nc(s,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},t}(nF),r0=function(){function e(t,n){n===void 0&&(n=e.now),this.schedulerActionCtor=t,this.now=n}return e.prototype.schedule=function(t,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,t).schedule(r,n)},e.now=Om.now,e}(),iF=function(e){qn(t,e);function t(n,r){r===void 0&&(r=r0.now);var i=e.call(this,n,r)||this;return i.actions=[],i._active=!1,i._scheduled=void 0,i}return t.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},t}(r0);new iF(rF);var sF=new xt(function(e){return e.complete()});function oF(e){return e?lF(e):sF}function lF(e){return new xt(function(t){return e.schedule(function(){return t.complete()})})}function aF(e){return e&&De(e.schedule)}function uF(e){return e[e.length-1]}function cF(e){return aF(uF(e))?e.pop():void 0}var fS=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function pS(e){return De(e==null?void 0:e.then)}function gS(e){return De(e[bm])}function mS(e){return Symbol.asyncIterator&&De(e==null?void 0:e[Symbol.asyncIterator])}function vS(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function hF(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var yS=hF();function _S(e){return De(e==null?void 0:e[yS])}function wS(e){return VM(this,arguments,function(){var t,n,r,i;return lS(this,function(s){switch(s.label){case 0:t=e.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,as(t.read())];case 3:return n=s.sent(),r=n.value,i=n.done,i?[4,as(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,as(r)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function ES(e){return De(e==null?void 0:e.getReader)}function Bs(e){if(e instanceof xt)return e;if(e!=null){if(gS(e))return dF(e);if(fS(e))return fF(e);if(pS(e))return pF(e);if(mS(e))return CS(e);if(_S(e))return gF(e);if(ES(e))return mF(e)}throw vS(e)}function dF(e){return new xt(function(t){var n=e[bm]();if(De(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function fF(e){return new xt(function(t){for(var n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function pF(e){return new xt(function(t){e.then(function(n){t.closed||(t.next(n),t.complete())},function(n){return t.error(n)}).then(null,hS)})}function gF(e){return new xt(function(t){var n,r;try{for(var i=_s(e),s=i.next();!s.done;s=i.next()){var o=s.value;if(t.next(o),t.closed)return}}catch(l){n={error:l}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}t.complete()})}function CS(e){return new xt(function(t){vF(e,t).catch(function(n){return t.error(n)})})}function mF(e){return CS(wS(e))}function vF(e,t){var n,r,i,s;return BM(this,void 0,void 0,function(){var o,l;return lS(this,function(a){switch(a.label){case 0:a.trys.push([0,5,6,11]),n=HM(e),a.label=1;case 1:return[4,n.next()];case 2:if(r=a.sent(),!!r.done)return[3,4];if(o=r.value,t.next(o),t.closed)return[2];a.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return l=a.sent(),i={error:l},[3,11];case 6:return a.trys.push([6,,9,10]),r&&!r.done&&(s=n.return)?[4,s.call(n)]:[3,8];case 7:a.sent(),a.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function ri(e,t,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var s=t.schedule(function(){n(),i?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(s),!i)return s}function TS(e,t){return t===void 0&&(t=0),Ii(function(n,r){n.subscribe(Cs(r,function(i){return ri(r,e,function(){return r.next(i)},t)},function(){return ri(r,e,function(){return r.complete()},t)},function(i){return ri(r,e,function(){return r.error(i)},t)}))})}function SS(e,t){return t===void 0&&(t=0),Ii(function(n,r){r.add(e.schedule(function(){return n.subscribe(r)},t))})}function yF(e,t){return Bs(e).pipe(SS(t),TS(t))}function _F(e,t){return Bs(e).pipe(SS(t),TS(t))}function wF(e,t){return new xt(function(n){var r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function EF(e,t){return new xt(function(n){var r;return ri(n,t,function(){r=e[yS](),ri(n,t,function(){var i,s,o;try{i=r.next(),s=i.value,o=i.done}catch(l){n.error(l);return}o?n.complete():n.next(s)},0,!0)}),function(){return De(r==null?void 0:r.return)&&r.return()}})}function IS(e,t){if(!e)throw new Error("Iterable cannot be null");return new xt(function(n){ri(n,t,function(){var r=e[Symbol.asyncIterator]();ri(n,t,function(){r.next().then(function(i){i.done?n.complete():n.next(i.value)})},0,!0)})})}function CF(e,t){return IS(wS(e),t)}function TF(e,t){if(e!=null){if(gS(e))return yF(e,t);if(fS(e))return wF(e,t);if(pS(e))return _F(e,t);if(mS(e))return IS(e,t);if(_S(e))return EF(e,t);if(ES(e))return CF(e,t)}throw vS(e)}function kS(e,t){return t?TF(e,t):Bs(e)}function i0(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=cF(e);return kS(e,n)}Pm(function(e){return function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}});function SF(e,t){return Ii(function(n,r){var i=0;n.subscribe(Cs(r,function(s){r.next(e.call(t,s,i++))}))})}function xS(e){return Ii(function(t,n){var r=null,i=!1,s;r=t.subscribe(Cs(n,void 0,void 0,function(o){s=Bs(e(o,xS(e)(t))),r?(r.unsubscribe(),r=null,s.subscribe(n)):i=!0})),i&&(r.unsubscribe(),r=null,s.subscribe(n))})}function IF(e){e===void 0&&(e={});var t=e.connector,n=t===void 0?function(){return new eh}:t,r=e.resetOnError,i=r===void 0?!0:r,s=e.resetOnComplete,o=s===void 0?!0:s,l=e.resetOnRefCountZero,a=l===void 0?!0:l;return function(u){var c,d,h,m=0,v=!1,_=!1,f=function(){d==null||d.unsubscribe(),d=void 0},p=function(){f(),c=h=void 0,v=_=!1},g=function(){var E=c;p(),E==null||E.unsubscribe()};return Ii(function(E,C){m++,!_&&!v&&f();var k=h=h!=null?h:n();C.add(function(){m--,m===0&&!_&&!v&&(d=hd(g,a))}),k.subscribe(C),!c&&m>0&&(c=new kl({next:function(I){return k.next(I)},error:function(I){_=!0,f(),d=hd(p,i,I),k.error(I)},complete:function(){v=!0,f(),d=hd(p,o),k.complete()}}),Bs(E).subscribe(c))})(u)}}function hd(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(t===!0){e();return}if(t!==!1){var i=new kl({next:function(){i.unsubscribe(),e()}});return t.apply(void 0,Es([],ws(n))).subscribe(i)}}function kF(e,t,n){var r,i,s,o,l=!1;return e&&typeof e=="object"?(r=e.bufferSize,o=r===void 0?1/0:r,i=e.windowTime,t=i===void 0?1/0:i,s=e.refCount,l=s===void 0?!1:s,n=e.scheduler):o=e!=null?e:1/0,IF({connector:function(){return new tF(o,t,n)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:l})}function xF(e,t){return Ii(function(n,r){var i=null,s=0,o=!1,l=function(){return o&&!i&&r.complete()};n.subscribe(Cs(r,function(a){i==null||i.unsubscribe();var u=0,c=s++;Bs(e(a,c)).subscribe(i=Cs(r,function(d){return r.next(t?t(a,d,c,u++):d)},function(){i=null,l()}))},function(){o=!0,l()}))})}function RF(e,t,n){var r=De(e)||t||n?{next:e,error:t,complete:n}:e;return r?Ii(function(i,s){var o;(o=r.subscribe)===null||o===void 0||o.call(r);var l=!0;i.subscribe(Cs(s,function(a){var u;(u=r.next)===null||u===void 0||u.call(r,a),s.next(a)},function(){var a;l=!1,(a=r.complete)===null||a===void 0||a.call(r),s.complete()},function(a){var u;l=!1,(u=r.error)===null||u===void 0||u.call(r,a),s.error(a)},function(){var a,u;l&&((a=r.unsubscribe)===null||a===void 0||a.call(r)),(u=r.finalize)===null||u===void 0||u.call(r)}))}):dS}function NF(e){return new xt(function(t){var n=u1(e,t.next.bind(t),t.error.bind(t),t.complete.bind(t));return{unsubscribe:n}})}const PF="[DEFAULT]",RS=y.exports.createContext(void 0),NS=y.exports.createContext(!1),AF="4.2.2",bF=(e,t)=>e===t||[...Object.keys(e),...Object.keys(t)].every(n=>e[n]===t[n]);function OF(e){const{firebaseConfig:t,appName:n,suspense:r}=e,i=y.exports.useMemo(()=>{if(e.firebaseApp)return e.firebaseApp;const s=ZR().find(o=>o.name===(n||PF));if(s){if(t&&bF(s.options,t))return s;throw new Error(`Does not match the options already provided to the ${n||"default"} firebase app instance, give this new instance a different appName.`)}else{if(!t)throw new Error("No firebaseConfig provided");const o=y.exports.version||"unknown";return Ae("react",o),Ae("reactfire",AF),ME(t,n)}},[e.firebaseApp,t,n]);return y.exports.createElement(RS.Provider,{value:i},y.exports.createElement(NS.Provider,Object.assign({value:r!=null?r:!1},e)))}function DF(e){let t=y.exports.useContext(NS);return e!==void 0?e:t}function PS(){const e=y.exports.useContext(RS);if(!e)throw new Error("Cannot call useFirebaseApp unless your component is within a FirebaseAppProvider");return e}function LF(e){if((e==null?void 0:e.hasOwnProperty("requiredClaims"))&&(e==null?void 0:e.hasOwnProperty("validateCustomClaims")))throw new Error('Cannot have both "requiredClaims" and "validateCustomClaims". Use one or the other.');const t=OS();let n=`auth:signInCheck:${t.name}::forceRefresh:${!!(e!=null&&e.forceRefresh)}`;e!=null&&e.forceRefresh&&(n=`${n}:forceRefresh:${e.forceRefresh}`),e!=null&&e.hasOwnProperty("requiredClaims")?n=`${n}:requiredClaims:${JSON.stringify(e.requiredClaims)}`:e!=null&&e.hasOwnProperty("validateCustomClaims")&&(n=`${n}:validateCustomClaims:${JSON.stringify(e.validateCustomClaims)}`);const r=NF(t).pipe(xF(i=>{var s;return i?e&&(e.hasOwnProperty("requiredClaims")||e.hasOwnProperty("validateCustomClaims"))?kS(i.getIdTokenResult((s=e==null?void 0:e.forceRefresh)!==null&&s!==void 0?s:!1)).pipe(SF(o=>{let l;e.hasOwnProperty("requiredClaims")?l=MF(e.requiredClaims):l=e.validateCustomClaims;const{hasRequiredClaims:a,errors:u}=l(o.claims);return{signedIn:!0,hasRequiredClaims:a,errors:u,user:i}})):i0({signedIn:!0,hasRequiredClaims:!0,errors:{},user:i}):i0({signedIn:!1,hasRequiredClaims:!1,errors:{},user:null})}));return VF(n,r)}function MF(e){return function(t){const n={};return Object.keys(e).forEach(r=>{e[r]!==t[r]&&(n[r]=[new Dm("auth/missing-claim",`Expected "${e[r]}", but user has "${t[r]}" instead`)])}),{hasRequiredClaims:Object.keys(n).length===0,errors:n}}}/**
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
 */var Dr,jr;(function(e){e.added="child_added",e.removed="child_removed",e.changed="child_changed",e.moved="child_moved",e.value="value"})(jr||(jr={}));Object.freeze((Dr={},Dr[jr.added]=D2,Dr[jr.removed]=F2,Dr[jr.changed]=L2,Dr[jr.moved]=M2,Dr[jr.value]=O2,Dr));const FF=globalThis._reactFireDatabaseCachedQueries||[];globalThis._reactFireDatabaseCachedQueries||(globalThis._reactFireDatabaseCachedQueries=FF);class $F extends eh{constructor(t,n){super(),this._timeoutWindow=n,this._hasValue=!1,this._error=void 0,this._firstEmission=new Promise(r=>this._resolveFirstEmission=r),this._innerObservable=t.pipe(RF({next:r=>{this._next(r)},error:r=>{this._error=r,this._resolveFirstEmission()}}),xS(()=>oF()),kF(1)),this._warmupSubscription=this._innerObservable.subscribe(),this._timeoutHandler=setTimeout(this._reset.bind(this),this._timeoutWindow)}get hasValue(){return this._hasValue||!!this._error}get value(){if(this._error)throw this._error;if(!this.hasValue)throw Error("Can only get value if SuspenseSubject has a value");return this._value}get firstEmission(){return this._firstEmission}_next(t){this._hasValue=!0,this._value=t,this._resolveFirstEmission()}_reset(){this._warmupSubscription&&this._warmupSubscription.unsubscribe(),this._hasValue=!1,this._value=void 0,this._error=void 0,this._firstEmission=new Promise(t=>this._resolveFirstEmission=t)}_subscribe(t){return this._timeoutHandler&&clearTimeout(this._timeoutHandler),this._innerSubscriber=this._innerObservable.subscribe(t),this._innerSubscriber}get ourError(){return this._error}}const UF=3e4,Qa=globalThis._reactFirePreloadedObservables||new Map;globalThis._reactFirePreloadedObservables||(globalThis._reactFirePreloadedObservables=Qa);function jF(e,t){if(Qa.has(t))return Qa.get(t);{const n=new $F(e,UF);return Qa.set(t,n),n}}function BF(e){return function(t,n){const r=Object.assign(Object.assign({},t),{hasEmitted:t.hasEmitted||e.hasValue,error:e.ourError,firstValuePromise:e.firstEmission});switch(e.hasValue&&(r.data=e.value),n){case"value":return r.status="success",r;case"error":return r.status="error",r;case"complete":return r.isComplete=!0,r;default:throw new Error(`invalid action "${n}"`)}}}function VF(e,t,n={}){var r;if(!e)throw new Error("cannot call useObservable without an observableId");const i=jF(t,e),s=n.hasOwnProperty("initialData")||n.hasOwnProperty("startWithValue"),o=i.hasValue||s;if(DF(n.suspense)===!0&&!o)throw i.firstEmission;const l={status:o?"success":"loading",hasEmitted:o,isComplete:!1,data:i.hasValue?i.value:(r=n==null?void 0:n.initialData)!==null&&r!==void 0?r:n==null?void 0:n.startWithValue,error:i.ourError,firstValuePromise:i.firstEmission},[a,u]=y.exports.useReducer(BF(i),l);return y.exports.useEffect(()=>{const c=i.subscribe({next:()=>{u("value")},error:d=>{throw u("error"),d},complete:()=>{u("complete")}});return()=>c.unsubscribe()},[i]),a}const HF=globalThis._reactFireFirestoreQueryCache||[];globalThis._reactFireFirestoreQueryCache||(globalThis._reactFireFirestoreQueryCache=HF);y.exports.createContext(void 0);const AS=y.exports.createContext(void 0);y.exports.createContext(void 0);y.exports.createContext(void 0);const zF=y.exports.createContext(void 0);y.exports.createContext(void 0);y.exports.createContext(void 0);y.exports.createContext(void 0);y.exports.createContext(void 0);function bS(e){return function(t){var n,r;if(!t.sdk)throw new Error("no sdk provided");const i=PS().name;if(((r=(n=t==null?void 0:t.sdk)===null||n===void 0?void 0:n.app)===null||r===void 0?void 0:r.name)!==i)throw new Error("sdk was initialized with a different firebase app");return y.exports.createElement(e.Provider,Object.assign({value:t.sdk},t))}}function WF(e){const t=y.exports.useContext(e);if(!t)throw new Error("SDK not found. useSdk must be called from within a provider");return t}const qF=bS(AS),GF=bS(zF),OS=()=>WF(AS);class Dm extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name="ReactFireError",Object.setPrototypeOf(this,Dm.prototype)}}/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xl(){return xl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xl.apply(this,arguments)}var sr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(sr||(sr={}));const s0="popstate";function KF(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:l}=r.location;return Jf("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:rc(i)}return QF(t,n,null,e)}function xe(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}function Lm(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function YF(){return Math.random().toString(36).substr(2,8)}function o0(e,t){return{usr:e.state,key:e.key,idx:t}}function Jf(e,t,n,r){return n===void 0&&(n=null),xl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Vs(t):t,{state:n,key:t&&t.key||r||YF()})}function rc(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Vs(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function QF(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=sr.Pop,a=null,u=c();u==null&&(u=0,o.replaceState(xl({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){l=sr.Pop;let f=c(),p=f==null?null:f-u;u=f,a&&a({action:l,location:_.location,delta:p})}function h(f,p){l=sr.Push;let g=Jf(_.location,f,p);n&&n(g,f),u=c()+1;let E=o0(g,u),C=_.createHref(g);try{o.pushState(E,"",C)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(C)}s&&a&&a({action:l,location:_.location,delta:1})}function m(f,p){l=sr.Replace;let g=Jf(_.location,f,p);n&&n(g,f),u=c();let E=o0(g,u),C=_.createHref(g);o.replaceState(E,"",C),s&&a&&a({action:l,location:_.location,delta:0})}function v(f){let p=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof f=="string"?f:rc(f);return xe(p,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,p)}let _={get action(){return l},get location(){return e(i,o)},listen(f){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(s0,d),a=f,()=>{i.removeEventListener(s0,d),a=null}},createHref(f){return t(i,f)},createURL:v,encodeLocation(f){let p=v(f);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:m,go(f){return o.go(f)}};return _}var l0;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(l0||(l0={}));function XF(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Vs(t):t,i=Mm(r.pathname||"/",n);if(i==null)return null;let s=DS(e);JF(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=l$(s[l],c$(i));return o}function DS(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(xe(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=_r([r,a.relativePath]),c=n.concat(a);s.children&&s.children.length>0&&(xe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),DS(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:s$(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of LS(s.path))i(s,o,a)}),t}function LS(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=LS(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>e.startsWith("/")&&a===""?"/":a)}function JF(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:o$(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ZF=/^:\w+$/,e$=3,t$=2,n$=1,r$=10,i$=-2,a0=e=>e==="*";function s$(e,t){let n=e.split("/"),r=n.length;return n.some(a0)&&(r+=i$),t&&(r+=t$),n.filter(i=>!a0(i)).reduce((i,s)=>i+(ZF.test(s)?e$:s===""?n$:r$),r)}function o$(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function l$(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=a$({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;s.push({params:r,pathname:_r([i,c.pathname]),pathnameBase:p$(_r([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=_r([i,c.pathnameBase]))}return s}function a$(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=u$(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=l[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=h$(l[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:e}}function u$(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Lm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function c$(e){try{return decodeURI(e)}catch(t){return Lm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function h$(e,t){try{return decodeURIComponent(e)}catch(n){return Lm(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Mm(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function d$(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Vs(e):e;return{pathname:n?n.startsWith("/")?n:f$(n,t):t,search:g$(r),hash:m$(i)}}function f$(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function dd(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Fm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function $m(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Vs(e):(i=xl({},e),xe(!i.pathname||!i.pathname.includes("?"),dd("?","pathname","search",i)),xe(!i.pathname||!i.pathname.includes("#"),dd("#","pathname","hash",i)),xe(!i.search||!i.search.includes("#"),dd("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let d=t.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?t[d]:"/"}let a=d$(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const _r=e=>e.join("/").replace(/\/\/+/g,"/"),p$=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),g$=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,m$=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function v$(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const y$=["post","put","patch","delete"];[...y$];/**
 * React Router v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ic(){return ic=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ic.apply(this,arguments)}const _$="startTransition";var u0=eu[_$];const Um=y.exports.createContext(null),MS=y.exports.createContext(null),ki=y.exports.createContext(null),th=y.exports.createContext(null),br=y.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),FS=y.exports.createContext(null);function w$(e,t){let{relative:n}=t===void 0?{}:t;Hs()||xe(!1);let{basename:r,navigator:i}=y.exports.useContext(ki),{hash:s,pathname:o,search:l}=jm(e,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:_r([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Hs(){return y.exports.useContext(th)!=null}function zs(){return Hs()||xe(!1),y.exports.useContext(th).location}function $S(e){y.exports.useContext(ki).static||y.exports.useLayoutEffect(e)}function US(){let{isDataRoute:e}=y.exports.useContext(br);return e?O$():E$()}function E$(){Hs()||xe(!1);let e=y.exports.useContext(Um),{basename:t,navigator:n}=y.exports.useContext(ki),{matches:r}=y.exports.useContext(br),{pathname:i}=zs(),s=JSON.stringify(Fm(r).map(a=>a.pathnameBase)),o=y.exports.useRef(!1);return $S(()=>{o.current=!0}),y.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!o.current)return;if(typeof a=="number"){n.go(a);return}let c=$m(a,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:_r([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,s,i,e])}function jm(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=y.exports.useContext(br),{pathname:i}=zs(),s=JSON.stringify(Fm(r).map(o=>o.pathnameBase));return y.exports.useMemo(()=>$m(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function C$(e,t){return T$(e,t)}function T$(e,t,n){Hs()||xe(!1);let{navigator:r}=y.exports.useContext(ki),{matches:i}=y.exports.useContext(br),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=zs(),u;if(t){var c;let _=typeof t=="string"?Vs(t):t;l==="/"||((c=_.pathname)==null?void 0:c.startsWith(l))||xe(!1),u=_}else u=a;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",m=XF(e,{pathname:h}),v=R$(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:_r([l,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:_r([l,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return t&&v?y.exports.createElement(th.Provider,{value:{location:ic({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:sr.Pop}},v):v}function S$(){let e=b$(),t=v$(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return y.exports.createElement(y.exports.Fragment,null,y.exports.createElement("h2",null,"Unexpected Application Error!"),y.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.exports.createElement("pre",{style:i},n):null,s)}const I$=y.exports.createElement(S$,null);class k$ extends y.exports.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?y.exports.createElement(br.Provider,{value:this.props.routeContext},y.exports.createElement(FS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function x$(e){let{routeContext:t,match:n,children:r}=e,i=y.exports.useContext(Um);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),y.exports.createElement(br.Provider,{value:t},r)}function R$(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=s.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));l>=0||xe(!1),s=s.slice(0,Math.min(s.length,l+1))}return s.reduceRight((l,a,u)=>{let c=a.route.id?o==null?void 0:o[a.route.id]:null,d=null;n&&(d=a.route.errorElement||I$);let h=t.concat(s.slice(0,u+1)),m=()=>{let v;return c?v=d:a.route.Component?v=y.exports.createElement(a.route.Component,null):a.route.element?v=a.route.element:v=l,y.exports.createElement(x$,{match:a,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:v})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?y.exports.createElement(k$,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var Zf;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Zf||(Zf={}));var Rl;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Rl||(Rl={}));function N$(e){let t=y.exports.useContext(Um);return t||xe(!1),t}function P$(e){let t=y.exports.useContext(MS);return t||xe(!1),t}function A$(e){let t=y.exports.useContext(br);return t||xe(!1),t}function jS(e){let t=A$(),n=t.matches[t.matches.length-1];return n.route.id||xe(!1),n.route.id}function b$(){var e;let t=y.exports.useContext(FS),n=P$(Rl.UseRouteError),r=jS(Rl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function O$(){let{router:e}=N$(Zf.UseNavigateStable),t=jS(Rl.UseNavigateStable),n=y.exports.useRef(!1);return $S(()=>{n.current=!0}),y.exports.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ic({fromRouteId:t},s)))},[e,t])}function D$(e){let{to:t,replace:n,state:r,relative:i}=e;Hs()||xe(!1);let{matches:s}=y.exports.useContext(br),{pathname:o}=zs(),l=US(),a=$m(t,Fm(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(a);return y.exports.useEffect(()=>l(JSON.parse(u),{replace:n,state:r,relative:i}),[l,u,i,n,r]),null}function Xa(e){xe(!1)}function L$(e){let{basename:t="/",children:n=null,location:r,navigationType:i=sr.Pop,navigator:s,static:o=!1}=e;Hs()&&xe(!1);let l=t.replace(/^\/*/,"/"),a=y.exports.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Vs(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:m="default"}=r,v=y.exports.useMemo(()=>{let _=Mm(u,l);return _==null?null:{location:{pathname:_,search:c,hash:d,state:h,key:m},navigationType:i}},[l,u,c,d,h,m,i]);return v==null?null:y.exports.createElement(ki.Provider,{value:a},y.exports.createElement(th.Provider,{children:n,value:v}))}function M$(e){let{children:t,location:n}=e;return C$(ep(t),n)}var c0;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(c0||(c0={}));new Promise(()=>{});function ep(e,t){t===void 0&&(t=[]);let n=[];return y.exports.Children.forEach(e,(r,i)=>{if(!y.exports.isValidElement(r))return;let s=[...t,i];if(r.type===y.exports.Fragment){n.push.apply(n,ep(r.props.children,s));return}r.type!==Xa&&xe(!1),!r.props.index||!r.props.children||xe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ep(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sc(){return sc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sc.apply(this,arguments)}function BS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function F$(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function $$(e,t){return e.button===0&&(!t||t==="_self")&&!F$(e)}const U$=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],j$=["aria-current","caseSensitive","className","end","style","to","children"];function B$(e){let{basename:t,children:n,future:r,window:i}=e,s=y.exports.useRef();s.current==null&&(s.current=KF({window:i,v5Compat:!0}));let o=s.current,[l,a]=y.exports.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=y.exports.useCallback(d=>{u&&u0?u0(()=>a(d)):a(d)},[a,u]);return y.exports.useLayoutEffect(()=>o.listen(c),[o,c]),y.exports.createElement(L$,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const V$=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",H$=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,z$=y.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:c}=t,d=BS(t,U$),{basename:h}=y.exports.useContext(ki),m,v=!1;if(typeof u=="string"&&H$.test(u)&&(m=u,V$))try{let g=new URL(window.location.href),E=u.startsWith("//")?new URL(g.protocol+u):new URL(u),C=Mm(E.pathname,h);E.origin===g.origin&&C!=null?u=C+E.search+E.hash:v=!0}catch{}let _=w$(u,{relative:i}),f=q$(u,{replace:o,state:l,target:a,preventScrollReset:c,relative:i});function p(g){r&&r(g),g.defaultPrevented||f(g)}return y.exports.createElement("a",sc({},d,{href:m||_,onClick:v||s?r:p,ref:n,target:a}))}),W$=y.exports.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:a,children:u}=t,c=BS(t,j$),d=jm(a,{relative:c.relative}),h=zs(),m=y.exports.useContext(MS),{navigator:v}=y.exports.useContext(ki),_=v.encodeLocation?v.encodeLocation(d).pathname:d.pathname,f=h.pathname,p=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(f=f.toLowerCase(),p=p?p.toLowerCase():null,_=_.toLowerCase());let g=f===_||!o&&f.startsWith(_)&&f.charAt(_.length)==="/",E=p!=null&&(p===_||!o&&p.startsWith(_)&&p.charAt(_.length)==="/"),C=g?r:void 0,k;typeof s=="function"?k=s({isActive:g,isPending:E}):k=[s,g?"active":null,E?"pending":null].filter(Boolean).join(" ");let I=typeof l=="function"?l({isActive:g,isPending:E}):l;return y.exports.createElement(z$,sc({},c,{"aria-current":C,className:k,ref:n,style:I,to:a}),typeof u=="function"?u({isActive:g,isPending:E}):u)});var h0;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(h0||(h0={}));var d0;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(d0||(d0={}));function q$(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,l=US(),a=zs(),u=jm(e,{relative:o});return y.exports.useCallback(c=>{if($$(c,n)){c.preventDefault();let d=r!==void 0?r:rc(a)===rc(u);l(e,{replace:d,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,e,s,o])}var ia=e=>e.type==="checkbox",zi=e=>e instanceof Date,dt=e=>e==null;const VS=e=>typeof e=="object";var Le=e=>!dt(e)&&!Array.isArray(e)&&VS(e)&&!zi(e),G$=e=>Le(e)&&e.target?ia(e.target)?e.target.checked:e.target.value:e,K$=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Y$=(e,t)=>e.has(K$(t)),Q$=e=>{const t=e.constructor&&e.constructor.prototype;return Le(t)&&t.hasOwnProperty("isPrototypeOf")},Bm=typeof window!="undefined"&&typeof window.HTMLElement!="undefined"&&typeof document!="undefined";function Kn(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Bm&&(e instanceof Blob||e instanceof FileList))&&(n||Le(e)))if(t=n?[]:{},!n&&!Q$(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=Kn(e[r]));else return e;return t}var sa=e=>Array.isArray(e)?e.filter(Boolean):[],Pe=e=>e===void 0,$=(e,t,n)=>{if(!t||!Le(e))return n;const r=sa(t.split(/[,[\].]+?/)).reduce((i,s)=>dt(i)?i:i[s],e);return Pe(r)||r===e?Pe(e[t])?n:e[t]:r};const f0={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Jt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},In={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};V.createContext(null);var X$=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(i,s,{get:()=>{const o=s;return t._proxyFormState[o]!==Jt.all&&(t._proxyFormState[o]=!r||Jt.all),n&&(n[o]=!0),e[o]}});return i},Mt=e=>Le(e)&&!Object.keys(e).length,J$=(e,t,n,r)=>{n(e);const{name:i,...s}=e;return Mt(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(o=>t[o]===(!r||Jt.all))},fd=e=>Array.isArray(e)?e:[e];function Z$(e){const t=V.useRef(e);t.current=e,V.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var gn=e=>typeof e=="string",e4=(e,t,n,r,i)=>gn(e)?(r&&t.watch.add(e),$(n,e,i)):Array.isArray(e)?e.map(s=>(r&&t.watch.add(s),$(n,s))):(r&&(t.watchAll=!0),n),Vm=e=>/^\w*$/.test(e),HS=e=>sa(e.replace(/["|']|\]/g,"").split(/\.|\[/));function me(e,t,n){let r=-1;const i=Vm(t)?[t]:HS(t),s=i.length,o=s-1;for(;++r<s;){const l=i[r];let a=n;if(r!==o){const u=e[l];a=Le(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}e[l]=a,e=e[l]}return e}var t4=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{};const tp=(e,t,n)=>{for(const r of n||Object.keys(e)){const i=$(e,r);if(i){const{_f:s,...o}=i;if(s&&t(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else Le(o)&&tp(o,t)}}};var p0=e=>({isOnSubmit:!e||e===Jt.onSubmit,isOnBlur:e===Jt.onBlur,isOnChange:e===Jt.onChange,isOnAll:e===Jt.all,isOnTouch:e===Jt.onTouched}),g0=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),n4=(e,t,n)=>{const r=sa($(e,n));return me(r,"root",t[n]),me(e,n,r),e},us=e=>typeof e=="boolean",Hm=e=>e.type==="file",or=e=>typeof e=="function",oc=e=>{if(!Bm)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Ja=e=>gn(e),zm=e=>e.type==="radio",lc=e=>e instanceof RegExp;const m0={value:!1,isValid:!1},v0={value:!0,isValid:!0};var zS=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Pe(e[0].attributes.value)?Pe(e[0].value)||e[0].value===""?v0:{value:e[0].value,isValid:!0}:v0:m0}return m0};const y0={isValid:!1,value:null};var WS=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,y0):y0;function _0(e,t,n="validate"){if(Ja(e)||Array.isArray(e)&&e.every(Ja)||us(e)&&!e)return{type:n,message:Ja(e)?e:"",ref:t}}var Ai=e=>Le(e)&&!lc(e)?e:{value:e,message:""},w0=async(e,t,n,r,i)=>{const{ref:s,refs:o,required:l,maxLength:a,minLength:u,min:c,max:d,pattern:h,validate:m,name:v,valueAsNumber:_,mount:f,disabled:p}=e._f,g=$(t,v);if(!f||p)return{};const E=o?o[0]:s,C=B=>{r&&E.reportValidity&&(E.setCustomValidity(us(B)?"":B||""),E.reportValidity())},k={},I=zm(s),O=ia(s),M=I||O,A=(_||Hm(s))&&Pe(s.value)&&Pe(g)||oc(s)&&s.value===""||g===""||Array.isArray(g)&&!g.length,ee=t4.bind(null,v,n,k),Ne=(B,F,ie,se=In.maxLength,_e=In.minLength)=>{const Me=B?F:ie;k[v]={type:B?se:_e,message:Me,ref:s,...ee(B?se:_e,Me)}};if(i?!Array.isArray(g)||!g.length:l&&(!M&&(A||dt(g))||us(g)&&!g||O&&!zS(o).isValid||I&&!WS(o).isValid)){const{value:B,message:F}=Ja(l)?{value:!!l,message:l}:Ai(l);if(B&&(k[v]={type:In.required,message:F,ref:E,...ee(In.required,F)},!n))return C(F),k}if(!A&&(!dt(c)||!dt(d))){let B,F;const ie=Ai(d),se=Ai(c);if(!dt(g)&&!isNaN(g)){const _e=s.valueAsNumber||g&&+g;dt(ie.value)||(B=_e>ie.value),dt(se.value)||(F=_e<se.value)}else{const _e=s.valueAsDate||new Date(g),Me=Gt=>new Date(new Date().toDateString()+" "+Gt),Fe=s.type=="time",ct=s.type=="week";gn(ie.value)&&g&&(B=Fe?Me(g)>Me(ie.value):ct?g>ie.value:_e>new Date(ie.value)),gn(se.value)&&g&&(F=Fe?Me(g)<Me(se.value):ct?g<se.value:_e<new Date(se.value))}if((B||F)&&(Ne(!!B,ie.message,se.message,In.max,In.min),!n))return C(k[v].message),k}if((a||u)&&!A&&(gn(g)||i&&Array.isArray(g))){const B=Ai(a),F=Ai(u),ie=!dt(B.value)&&g.length>+B.value,se=!dt(F.value)&&g.length<+F.value;if((ie||se)&&(Ne(ie,B.message,F.message),!n))return C(k[v].message),k}if(h&&!A&&gn(g)){const{value:B,message:F}=Ai(h);if(lc(B)&&!g.match(B)&&(k[v]={type:In.pattern,message:F,ref:s,...ee(In.pattern,F)},!n))return C(F),k}if(m){if(or(m)){const B=await m(g,t),F=_0(B,E);if(F&&(k[v]={...F,...ee(In.validate,F.message)},!n))return C(F.message),k}else if(Le(m)){let B={};for(const F in m){if(!Mt(B)&&!n)break;const ie=_0(await m[F](g,t),E,F);ie&&(B={...ie,...ee(F,ie.message)},C(ie.message),n&&(k[v]=B))}if(!Mt(B)&&(k[v]={ref:E,...B},!n))return k}}return C(!0),k};function r4(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Pe(e)?r++:e[t[r++]];return e}function i4(e){for(const t in e)if(e.hasOwnProperty(t)&&!Pe(e[t]))return!1;return!0}function We(e,t){const n=Array.isArray(t)?t:Vm(t)?[t]:HS(t),r=n.length===1?e:r4(e,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(Le(r)&&Mt(r)||Array.isArray(r)&&i4(r))&&We(e,n.slice(0,-1)),e}function pd(){let e=[];return{get observers(){return e},next:i=>{for(const s of e)s.next&&s.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(s=>s!==i)}}),unsubscribe:()=>{e=[]}}}var ac=e=>dt(e)||!VS(e);function Xr(e,t){if(ac(e)||ac(t))return e===t;if(zi(e)&&zi(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const s=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=t[i];if(zi(s)&&zi(o)||Le(s)&&Le(o)||Array.isArray(s)&&Array.isArray(o)?!Xr(s,o):s!==o)return!1}}return!0}var qS=e=>e.type==="select-multiple",s4=e=>zm(e)||ia(e),gd=e=>oc(e)&&e.isConnected,GS=e=>{for(const t in e)if(or(e[t]))return!0;return!1};function uc(e,t={}){const n=Array.isArray(e);if(Le(e)||n)for(const r in e)Array.isArray(e[r])||Le(e[r])&&!GS(e[r])?(t[r]=Array.isArray(e[r])?[]:{},uc(e[r],t[r])):dt(e[r])||(t[r]=!0);return t}function KS(e,t,n){const r=Array.isArray(e);if(Le(e)||r)for(const i in e)Array.isArray(e[i])||Le(e[i])&&!GS(e[i])?Pe(t)||ac(n[i])?n[i]=Array.isArray(e[i])?uc(e[i],[]):{...uc(e[i])}:KS(e[i],dt(t)?{}:t[i],n[i]):n[i]=!Xr(e[i],t[i]);return n}var md=(e,t)=>KS(e,t,uc(t)),YS=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Pe(e)?e:t?e===""?NaN:e&&+e:n&&gn(e)?new Date(e):r?r(e):e;function vd(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Hm(t)?t.files:zm(t)?WS(e.refs).value:qS(t)?[...t.selectedOptions].map(({value:n})=>n):ia(t)?zS(e.refs).value:YS(Pe(t.value)?e.ref.value:t.value,e)}var o4=(e,t,n,r)=>{const i={};for(const s of e){const o=$(t,s);o&&me(i,s,o._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},fo=e=>Pe(e)?e:lc(e)?e.source:Le(e)?lc(e.value)?e.value.source:e.value:e,l4=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function E0(e,t,n){const r=$(e,n);if(r||Vm(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=$(t,s),l=$(e,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(l&&l.type)return{name:s,error:l};i.pop()}return{name:n}}var a4=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,u4=(e,t)=>!sa($(e,t)).length&&We(e,t);const c4={mode:Jt.onSubmit,reValidateMode:Jt.onChange,shouldFocusError:!0};function h4(e={},t){let n={...c4,...e},r={submitCount:0,isDirty:!1,isLoading:or(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},s=Le(n.defaultValues)||Le(n.values)?Kn(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:Kn(s),l={action:!1,mount:!1,watch:!1},a={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const d={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},h={values:pd(),array:pd(),state:pd()},m=e.resetOptions&&e.resetOptions.keepDirtyValues,v=p0(n.mode),_=p0(n.reValidateMode),f=n.criteriaMode===Jt.all,p=w=>T=>{clearTimeout(c),c=setTimeout(w,T)},g=async w=>{if(d.isValid||w){const T=n.resolver?Mt((await A()).errors):await Ne(i,!0);T!==r.isValid&&h.state.next({isValid:T})}},E=w=>d.isValidating&&h.state.next({isValidating:w}),C=(w,T=[],S,U,D=!0,P=!0)=>{if(U&&S){if(l.action=!0,P&&Array.isArray($(i,w))){const j=S($(i,w),U.argA,U.argB);D&&me(i,w,j)}if(P&&Array.isArray($(r.errors,w))){const j=S($(r.errors,w),U.argA,U.argB);D&&me(r.errors,w,j),u4(r.errors,w)}if(d.touchedFields&&P&&Array.isArray($(r.touchedFields,w))){const j=S($(r.touchedFields,w),U.argA,U.argB);D&&me(r.touchedFields,w,j)}d.dirtyFields&&(r.dirtyFields=md(s,o)),h.state.next({name:w,isDirty:F(w,T),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else me(o,w,T)},k=(w,T)=>{me(r.errors,w,T),h.state.next({errors:r.errors})},I=(w,T,S,U)=>{const D=$(i,w);if(D){const P=$(o,w,Pe(S)?$(s,w):S);Pe(P)||U&&U.defaultChecked||T?me(o,w,T?P:vd(D._f)):_e(w,P),l.mount&&g()}},O=(w,T,S,U,D)=>{let P=!1,j=!1;const we={name:w};if(!S||U){d.isDirty&&(j=r.isDirty,r.isDirty=we.isDirty=F(),P=j!==we.isDirty);const Ie=Xr($(s,w),T);j=$(r.dirtyFields,w),Ie?We(r.dirtyFields,w):me(r.dirtyFields,w,!0),we.dirtyFields=r.dirtyFields,P=P||d.dirtyFields&&j!==!Ie}if(S){const Ie=$(r.touchedFields,w);Ie||(me(r.touchedFields,w,S),we.touchedFields=r.touchedFields,P=P||d.touchedFields&&Ie!==S)}return P&&D&&h.state.next(we),P?we:{}},M=(w,T,S,U)=>{const D=$(r.errors,w),P=d.isValid&&us(T)&&r.isValid!==T;if(e.delayError&&S?(u=p(()=>k(w,S)),u(e.delayError)):(clearTimeout(c),u=null,S?me(r.errors,w,S):We(r.errors,w)),(S?!Xr(D,S):D)||!Mt(U)||P){const j={...U,...P&&us(T)?{isValid:T}:{},errors:r.errors,name:w};r={...r,...j},h.state.next(j)}E(!1)},A=async w=>n.resolver(o,n.context,o4(w||a.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),ee=async w=>{const{errors:T}=await A();if(w)for(const S of w){const U=$(T,S);U?me(r.errors,S,U):We(r.errors,S)}else r.errors=T;return T},Ne=async(w,T,S={valid:!0})=>{for(const U in w){const D=w[U];if(D){const{_f:P,...j}=D;if(P){const we=a.array.has(P.name),Ie=await w0(D,o,f,n.shouldUseNativeValidation&&!T,we);if(Ie[P.name]&&(S.valid=!1,T))break;!T&&($(Ie,P.name)?we?n4(r.errors,Ie,P.name):me(r.errors,P.name,Ie[P.name]):We(r.errors,P.name))}j&&await Ne(j,T,S)}}return S.valid},B=()=>{for(const w of a.unMount){const T=$(i,w);T&&(T._f.refs?T._f.refs.every(S=>!gd(S)):!gd(T._f.ref))&&Rt(w)}a.unMount=new Set},F=(w,T)=>(w&&T&&me(o,w,T),!Xr(R(),s)),ie=(w,T,S)=>e4(w,a,{...l.mount?o:Pe(T)?s:gn(w)?{[w]:T}:T},S,T),se=w=>sa($(l.mount?o:s,w,e.shouldUnregister?$(s,w,[]):[])),_e=(w,T,S={})=>{const U=$(i,w);let D=T;if(U){const P=U._f;P&&(!P.disabled&&me(o,w,YS(T,P)),D=oc(P.ref)&&dt(T)?"":T,qS(P.ref)?[...P.ref.options].forEach(j=>j.selected=D.includes(j.value)):P.refs?ia(P.ref)?P.refs.length>1?P.refs.forEach(j=>(!j.defaultChecked||!j.disabled)&&(j.checked=Array.isArray(D)?!!D.find(we=>we===j.value):D===j.value)):P.refs[0]&&(P.refs[0].checked=!!D):P.refs.forEach(j=>j.checked=j.value===D):Hm(P.ref)?P.ref.value="":(P.ref.value=D,P.ref.type||h.values.next({name:w,values:{...o}})))}(S.shouldDirty||S.shouldTouch)&&O(w,D,S.shouldTouch,S.shouldDirty,!0),S.shouldValidate&&Gt(w)},Me=(w,T,S)=>{for(const U in T){const D=T[U],P=`${w}.${U}`,j=$(i,P);(a.array.has(w)||!ac(D)||j&&!j._f)&&!zi(D)?Me(P,D,S):_e(P,D,S)}},Fe=(w,T,S={})=>{const U=$(i,w),D=a.array.has(w),P=Kn(T);me(o,w,P),D?(h.array.next({name:w,values:{...o}}),(d.isDirty||d.dirtyFields)&&S.shouldDirty&&h.state.next({name:w,dirtyFields:md(s,o),isDirty:F(w,P)})):U&&!U._f&&!dt(P)?Me(w,P,S):_e(w,P,S),g0(w,a)&&h.state.next({...r}),h.values.next({name:w,values:{...o}}),!l.mount&&t()},ct=async w=>{const T=w.target;let S=T.name,U=!0;const D=$(i,S),P=()=>T.type?vd(D._f):G$(w);if(D){let j,we;const Ie=P(),xi=w.type===f0.BLUR||w.type===f0.FOCUS_OUT,wI=!l4(D._f)&&!n.resolver&&!$(r.errors,S)&&!D._f.deps||a4(xi,$(r.touchedFields,S),r.isSubmitted,_,v),ah=g0(S,a,xi);me(o,S,Ie),xi?(D._f.onBlur&&D._f.onBlur(w),u&&u(0)):D._f.onChange&&D._f.onChange(w);const uh=O(S,Ie,xi,!1),EI=!Mt(uh)||ah;if(!xi&&h.values.next({name:S,type:w.type,values:{...o}}),wI)return d.isValid&&g(),EI&&h.state.next({name:S,...ah?{}:uh});if(!xi&&ah&&h.state.next({...r}),E(!0),n.resolver){const{errors:Qm}=await A([S]),CI=E0(r.errors,i,S),Xm=E0(Qm,i,CI.name||S);j=Xm.error,S=Xm.name,we=Mt(Qm)}else j=(await w0(D,o,f,n.shouldUseNativeValidation))[S],U=isNaN(Ie)||Ie===$(o,S,Ie),U&&(j?we=!1:d.isValid&&(we=await Ne(i,!0)));U&&(D._f.deps&&Gt(D._f.deps),M(S,we,j,uh))}},Gt=async(w,T={})=>{let S,U;const D=fd(w);if(E(!0),n.resolver){const P=await ee(Pe(w)?w:D);S=Mt(P),U=w?!D.some(j=>$(P,j)):S}else w?(U=(await Promise.all(D.map(async P=>{const j=$(i,P);return await Ne(j&&j._f?{[P]:j}:j)}))).every(Boolean),!(!U&&!r.isValid)&&g()):U=S=await Ne(i);return h.state.next({...!gn(w)||d.isValid&&S!==r.isValid?{}:{name:w},...n.resolver||!w?{isValid:S}:{},errors:r.errors,isValidating:!1}),T.shouldFocus&&!U&&tp(i,P=>P&&$(r.errors,P),w?D:a.mount),U},R=w=>{const T={...s,...l.mount?o:{}};return Pe(w)?T:gn(w)?$(T,w):w.map(S=>$(T,S))},z=(w,T)=>({invalid:!!$((T||r).errors,w),isDirty:!!$((T||r).dirtyFields,w),isTouched:!!$((T||r).touchedFields,w),error:$((T||r).errors,w)}),Y=w=>{w&&fd(w).forEach(T=>We(r.errors,T)),h.state.next({errors:w?r.errors:{}})},ue=(w,T,S)=>{const U=($(i,w,{_f:{}})._f||{}).ref;me(r.errors,w,{...T,ref:U}),h.state.next({name:w,errors:r.errors,isValid:!1}),S&&S.shouldFocus&&U&&U.focus&&U.focus()},Se=(w,T)=>or(w)?h.values.subscribe({next:S=>w(ie(void 0,T),S)}):ie(w,T,!0),Rt=(w,T={})=>{for(const S of w?fd(w):a.mount)a.mount.delete(S),a.array.delete(S),T.keepValue||(We(i,S),We(o,S)),!T.keepError&&We(r.errors,S),!T.keepDirty&&We(r.dirtyFields,S),!T.keepTouched&&We(r.touchedFields,S),!n.shouldUnregister&&!T.keepDefaultValue&&We(s,S);h.values.next({values:{...o}}),h.state.next({...r,...T.keepDirty?{isDirty:F()}:{}}),!T.keepIsValid&&g()},vt=(w,T={})=>{let S=$(i,w);const U=us(T.disabled);return me(i,w,{...S||{},_f:{...S&&S._f?S._f:{ref:{name:w}},name:w,mount:!0,...T}}),a.mount.add(w),S?U&&me(o,w,T.disabled?void 0:$(o,w,vd(S._f))):I(w,!0,T.value),{...U?{disabled:T.disabled}:{},...n.progressive?{required:!!T.required,min:fo(T.min),max:fo(T.max),minLength:fo(T.minLength),maxLength:fo(T.maxLength),pattern:fo(T.pattern)}:{},name:w,onChange:ct,onBlur:ct,ref:D=>{if(D){vt(w,T),S=$(i,w);const P=Pe(D.value)&&D.querySelectorAll&&D.querySelectorAll("input,select,textarea")[0]||D,j=s4(P),we=S._f.refs||[];if(j?we.find(Ie=>Ie===P):P===S._f.ref)return;me(i,w,{_f:{...S._f,...j?{refs:[...we.filter(gd),P,...Array.isArray($(s,w))?[{}]:[]],ref:{type:P.type,name:w}}:{ref:P}}}),I(w,!1,void 0,P)}else S=$(i,w,{}),S._f&&(S._f.mount=!1),(n.shouldUnregister||T.shouldUnregister)&&!(Y$(a.array,w)&&l.action)&&a.unMount.add(w)}}},an=()=>n.shouldFocusError&&tp(i,w=>w&&$(r.errors,w),a.mount),le=(w,T)=>async S=>{S&&(S.preventDefault&&S.preventDefault(),S.persist&&S.persist());let U=Kn(o);if(h.state.next({isSubmitting:!0}),n.resolver){const{errors:D,values:P}=await A();r.errors=D,U=P}else await Ne(i);We(r.errors,"root"),Mt(r.errors)?(h.state.next({errors:{}}),await w(U,S)):(T&&await T({...r.errors},S),an(),setTimeout(an)),h.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Mt(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Kt=(w,T={})=>{$(i,w)&&(Pe(T.defaultValue)?Fe(w,$(s,w)):(Fe(w,T.defaultValue),me(s,w,T.defaultValue)),T.keepTouched||We(r.touchedFields,w),T.keepDirty||(We(r.dirtyFields,w),r.isDirty=T.defaultValue?F(w,$(s,w)):F()),T.keepError||(We(r.errors,w),d.isValid&&g()),h.state.next({...r}))},ht=(w,T={})=>{const S=w||s,U=Kn(S),D=w&&!Mt(w)?U:s;if(T.keepDefaultValues||(s=S),!T.keepValues){if(T.keepDirtyValues||m)for(const P of a.mount)$(r.dirtyFields,P)?me(D,P,$(o,P)):Fe(P,$(D,P));else{if(Bm&&Pe(w))for(const P of a.mount){const j=$(i,P);if(j&&j._f){const we=Array.isArray(j._f.refs)?j._f.refs[0]:j._f.ref;if(oc(we)){const Ie=we.closest("form");if(Ie){Ie.reset();break}}}}i={}}o=e.shouldUnregister?T.keepDefaultValues?Kn(s):{}:Kn(D),h.array.next({values:{...D}}),h.values.next({values:{...D}})}a={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!l.mount&&t(),l.mount=!d.isValid||!!T.keepIsValid,l.watch=!!e.shouldUnregister,h.state.next({submitCount:T.keepSubmitCount?r.submitCount:0,isDirty:T.keepDirty?r.isDirty:!!(T.keepDefaultValues&&!Xr(w,s)),isSubmitted:T.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:T.keepDirtyValues?r.dirtyFields:T.keepDefaultValues&&w?md(s,w):{},touchedFields:T.keepTouched?r.touchedFields:{},errors:T.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Or=(w,T)=>ht(or(w)?w(o):w,T);return{control:{register:vt,unregister:Rt,getFieldState:z,handleSubmit:le,setError:ue,_executeSchema:A,_getWatch:ie,_getDirty:F,_updateValid:g,_removeUnmounted:B,_updateFieldArray:C,_getFieldArray:se,_reset:ht,_resetDefaultValues:()=>or(n.defaultValues)&&n.defaultValues().then(w=>{Or(w,n.resetOptions),h.state.next({isLoading:!1})}),_updateFormState:w=>{r={...r,...w}},_subjects:h,_proxyFormState:d,get _fields(){return i},get _formValues(){return o},get _state(){return l},set _state(w){l=w},get _defaultValues(){return s},get _names(){return a},set _names(w){a=w},get _formState(){return r},set _formState(w){r=w},get _options(){return n},set _options(w){n={...n,...w}}},trigger:Gt,register:vt,handleSubmit:le,watch:Se,setValue:Fe,getValues:R,reset:Or,resetField:Kt,clearErrors:Y,unregister:Rt,setError:ue,setFocus:(w,T={})=>{const S=$(i,w),U=S&&S._f;if(U){const D=U.refs?U.refs[0]:U.ref;D.focus&&(D.focus(),T.shouldSelect&&D.select())}},getFieldState:z}}function d4(e={}){const t=V.useRef(),[n,r]=V.useState({isDirty:!1,isValidating:!1,isLoading:or(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:or(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...h4(e,()=>r(s=>({...s}))),formState:n});const i=t.current.control;return i._options=e,Z$({subject:i._subjects.state,next:s=>{J$(s,i._proxyFormState,i._updateFormState,!0)&&r({...i._formState})}}),V.useEffect(()=>{e.values&&!Xr(e.values,i._defaultValues)?i._reset(e.values,i._options.resetOptions):i._resetDefaultValues()},[e.values,i]),V.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=X$(n,i),t.current}var nh={exports:{}},oa={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f4=y.exports,QS=60103;oa.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var C0=Symbol.for;QS=C0("react.element"),oa.Fragment=C0("react.fragment")}var p4=f4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g4=Object.prototype.hasOwnProperty,m4={key:!0,ref:!0,__self:!0,__source:!0};function XS(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)g4.call(t,r)&&!m4.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:QS,type:e,key:s,ref:o,props:i,_owner:p4.current}}oa.jsx=XS;oa.jsxs=XS;nh.exports=oa;const H=nh.exports.jsx,ft=nh.exports.jsxs,v4=nh.exports.Fragment,T0=({type:e="text",placeholder:t,register:n,label:r,errorMessage:i,rules:s})=>ft("div",{className:"relative",children:[ft("label",{className:"flex flex-col text-sm font-medium focus-within:text-primary",children:[r,H("input",{className:"mt-1 rounded-xl border-2 border-solid border-gray-400 px-3 py-4 text-black outline-none placeholder:text-gray-400 focus:border-primary",type:e,placeholder:t,...n&&n(r.toLowerCase(),s)})]}),H("p",{className:"absolute -bottom-5 text-sm font-semibold text-red-500",children:i&&`* ${i}`})]}),y4="_container_1ko5j_1";var S0={container:y4,"lds-ring":"_lds-ring_1ko5j_15"};const _4=({loading:e})=>e?H("div",{className:S0.container,children:ft("div",{className:S0["lds-ring"],children:[H("div",{}),H("div",{}),H("div",{}),H("div",{})]})}):H("div",{});var w4=Object.defineProperty,E4=(e,t,n)=>t in e?w4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,yd=(e,t,n)=>(E4(e,typeof t!="symbol"?t+"":t,n),n);class C4{constructor(){yd(this,"current",this.detect()),yd(this,"handoffState","pending"),yd(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}}let Fn=new C4,on=(e,t)=>{Fn.isServer?y.exports.useEffect(e,t):y.exports.useLayoutEffect(e,t)};function $n(e){let t=y.exports.useRef(e);return on(()=>{t.current=e},[e]),t}function rh(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function Ws(){let e=[],t={addEventListener(n,r,i,s){return n.addEventListener(r,i,s),t.add(()=>n.removeEventListener(r,i,s))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return rh(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,i){let s=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:i}),this.add(()=>{Object.assign(n.style,{[r]:s})})},group(n){let r=Ws();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let i of e.splice(r,1))i()}},dispose(){for(let n of e.splice(0))n()}};return t}function Wm(){let[e]=y.exports.useState(Ws);return y.exports.useEffect(()=>()=>e.dispose(),[e]),e}let ve=function(e){let t=$n(e);return V.useCallback((...n)=>t.current(...n),[t])};function qs(){let[e,t]=y.exports.useState(Fn.isHandoffComplete);return e&&Fn.isHandoffComplete===!1&&t(!1),y.exports.useEffect(()=>{e!==!0&&t(!0)},[e]),y.exports.useEffect(()=>Fn.handoff(),[]),e}var I0;let Gs=(I0=V.useId)!=null?I0:function(){let e=qs(),[t,n]=V.useState(e?()=>Fn.nextId():null);return on(()=>{t===null&&n(Fn.nextId())},[t]),t!=null?""+t:void 0};function it(e,t,...n){if(e in t){let i=t[e];return typeof i=="function"?i(...n):i}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,it),r}function JS(e){return Fn.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let np=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Br=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Br||{}),ZS=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ZS||{}),T4=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(T4||{});function S4(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(np)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var eI=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(eI||{});function I4(e,t=0){var n;return e===((n=JS(e))==null?void 0:n.body)?!1:it(t,{[0](){return e.matches(np)},[1](){let r=e;for(;r!==null;){if(r.matches(np))return!0;r=r.parentElement}return!1}})}var k4=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(k4||{});typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function ii(e){e==null||e.focus({preventScroll:!0})}let x4=["textarea","input"].join(",");function R4(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,x4))!=null?n:!1}function N4(e,t=n=>n){return e.slice().sort((n,r)=>{let i=t(n),s=t(r);if(i===null||s===null)return 0;let o=i.compareDocumentPosition(s);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Za(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:i=[]}={}){let s=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?N4(e):e:S4(e);i.length>0&&o.length>1&&(o=o.filter(m=>!i.includes(m))),r=r!=null?r:s.activeElement;let l=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=t&32?{preventScroll:!0}:{},c=0,d=o.length,h;do{if(c>=d||c+d<=0)return 0;let m=a+c;if(t&16)m=(m+d)%d;else{if(m<0)return 3;if(m>=d)return 1}h=o[m],h==null||h.focus(u),c+=l}while(h!==s.activeElement);return t&6&&R4(h)&&h.select(),2}function k0(e,t,n){let r=$n(t);y.exports.useEffect(()=>{function i(s){r.current(s)}return document.addEventListener(e,i,n),()=>document.removeEventListener(e,i,n)},[e,n])}function tI(e,t,n){let r=$n(t);y.exports.useEffect(()=>{function i(s){r.current(s)}return window.addEventListener(e,i,n),()=>window.removeEventListener(e,i,n)},[e,n])}function P4(e,t,n=!0){let r=y.exports.useRef(!1);y.exports.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function i(o,l){if(!r.current||o.defaultPrevented)return;let a=l(o);if(a===null||!a.getRootNode().contains(a))return;let u=function c(d){return typeof d=="function"?c(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let c of u){if(c===null)continue;let d=c instanceof HTMLElement?c:c.current;if(d!=null&&d.contains(a)||o.composed&&o.composedPath().includes(d))return}return!I4(a,eI.Loose)&&a.tabIndex!==-1&&o.preventDefault(),t(o,a)}let s=y.exports.useRef(null);k0("mousedown",o=>{var l,a;r.current&&(s.current=((a=(l=o.composedPath)==null?void 0:l.call(o))==null?void 0:a[0])||o.target)},!0),k0("click",o=>{s.current&&(i(o,()=>s.current),s.current=null)},!0),tI("blur",o=>i(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}let nI=Symbol();function A4(e,t=!0){return Object.assign(e,{[nI]:t})}function ln(...e){let t=y.exports.useRef(e);y.exports.useEffect(()=>{t.current=e},[e]);let n=ve(r=>{for(let i of t.current)i!=null&&(typeof i=="function"?i(r):i.current=r)});return e.every(r=>r==null||(r==null?void 0:r[nI]))?void 0:n}function rp(...e){return e.filter(Boolean).join(" ")}var cc=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(cc||{}),Dn=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Dn||{});function qt({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:s=!0,name:o}){let l=rI(t,e);if(s)return Aa(l,n,r,o);let a=i!=null?i:0;if(a&2){let{static:u=!1,...c}=l;if(u)return Aa(c,n,r,o)}if(a&1){let{unmount:u=!0,...c}=l;return it(u?0:1,{[0](){return null},[1](){return Aa({...c,hidden:!0,style:{display:"none"}},n,r,o)}})}return Aa(l,n,r,o)}function Aa(e,t={},n,r){let{as:i=n,children:s,refName:o="ref",...l}=_d(e,["unmount","static"]),a=e.ref!==void 0?{[o]:e.ref}:{},u=typeof s=="function"?s(t):s;"className"in l&&l.className&&typeof l.className=="function"&&(l.className=l.className(t));let c={};if(t){let d=!1,h=[];for(let[m,v]of Object.entries(t))typeof v=="boolean"&&(d=!0),v===!0&&h.push(m);d&&(c["data-headlessui-state"]=h.join(" "))}if(i===y.exports.Fragment&&Object.keys(x0(l)).length>0){if(!y.exports.isValidElement(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(l).map(v=>`  - ${v}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(v=>`  - ${v}`).join(`
`)].join(`
`));let d=u.props,h=typeof(d==null?void 0:d.className)=="function"?(...v)=>rp(d==null?void 0:d.className(...v),l.className):rp(d==null?void 0:d.className,l.className),m=h?{className:h}:{};return y.exports.cloneElement(u,Object.assign({},rI(u.props,x0(_d(l,["ref"]))),c,a,b4(u.ref,a.ref),m))}return y.exports.createElement(i,Object.assign({},_d(l,["ref"]),i!==y.exports.Fragment&&a,i!==y.exports.Fragment&&c),u)}function b4(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function rI(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let i in r)i.startsWith("on")&&typeof r[i]=="function"?(n[i]!=null||(n[i]=[]),n[i].push(r[i])):t[i]=r[i];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](i,...s){let o=n[r];for(let l of o){if((i instanceof Event||(i==null?void 0:i.nativeEvent)instanceof Event)&&i.defaultPrevented)return;l(i,...s)}}});return t}function Lt(e){var t;return Object.assign(y.exports.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function x0(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function _d(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function O4(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&D4(n)?!1:r}function D4(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let L4="div";var hc=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(hc||{});function M4(e,t){let{features:n=1,...r}=e,i={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return qt({ourProps:i,theirProps:r,slot:{},defaultTag:L4,name:"Hidden"})}let ip=Lt(M4),qm=y.exports.createContext(null);qm.displayName="OpenClosedContext";var Nt=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(Nt||{});function Gm(){return y.exports.useContext(qm)}function F4({value:e,children:t}){return V.createElement(qm.Provider,{value:e},t)}var iI=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(iI||{});function Km(e,t){let n=y.exports.useRef([]),r=ve(e);y.exports.useEffect(()=>{let i=[...n.current];for(let[s,o]of t.entries())if(n.current[s]!==o){let l=r(t,i);return n.current=t,l}},[r,...t])}function $4(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}var Io=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Io||{});function U4(){let e=y.exports.useRef(0);return tI("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function la(){let e=y.exports.useRef(!1);return on(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function aa(...e){return y.exports.useMemo(()=>JS(...e),[...e])}function sI(e,t,n,r){let i=$n(n);y.exports.useEffect(()=>{e=e!=null?e:window;function s(o){i.current(o)}return e.addEventListener(t,s,r),()=>e.removeEventListener(t,s,r)},[e,t,r])}function j4(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("DOMContentLoaded",t),t())}function oI(e){let t=ve(e),n=y.exports.useRef(!1);y.exports.useEffect(()=>(n.current=!1,()=>{n.current=!0,rh(()=>{n.current&&t()})}),[t])}function lI(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let B4="div";var aI=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(aI||{});function V4(e,t){let n=y.exports.useRef(null),r=ln(n,t),{initialFocus:i,containers:s,features:o=30,...l}=e;qs()||(o=1);let a=aa(n);W4({ownerDocument:a},Boolean(o&16));let u=q4({ownerDocument:a,container:n,initialFocus:i},Boolean(o&2));G4({ownerDocument:a,container:n,containers:s,previousActiveElement:u},Boolean(o&8));let c=U4(),d=ve(_=>{let f=n.current;!f||(p=>p())(()=>{it(c.current,{[Io.Forwards]:()=>{Za(f,Br.First,{skipElements:[_.relatedTarget]})},[Io.Backwards]:()=>{Za(f,Br.Last,{skipElements:[_.relatedTarget]})}})})}),h=Wm(),m=y.exports.useRef(!1),v={ref:r,onKeyDown(_){_.key=="Tab"&&(m.current=!0,h.requestAnimationFrame(()=>{m.current=!1}))},onBlur(_){let f=lI(s);n.current instanceof HTMLElement&&f.add(n.current);let p=_.relatedTarget;p instanceof HTMLElement&&p.dataset.headlessuiFocusGuard!=="true"&&(uI(f,p)||(m.current?Za(n.current,it(c.current,{[Io.Forwards]:()=>Br.Next,[Io.Backwards]:()=>Br.Previous})|Br.WrapAround,{relativeTo:_.target}):_.target instanceof HTMLElement&&ii(_.target)))}};return V.createElement(V.Fragment,null,Boolean(o&4)&&V.createElement(ip,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:hc.Focusable}),qt({ourProps:v,theirProps:l,defaultTag:B4,name:"FocusTrap"}),Boolean(o&4)&&V.createElement(ip,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:hc.Focusable}))}let H4=Lt(V4),po=Object.assign(H4,{features:aI}),tr=[];j4(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&tr[0]!==t.target&&(tr.unshift(t.target),tr=tr.filter(n=>n!=null&&n.isConnected),tr.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function z4(e=!0){let t=y.exports.useRef(tr.slice());return Km(([n],[r])=>{r===!0&&n===!1&&rh(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=tr.slice())},[e,tr,t]),ve(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function W4({ownerDocument:e},t){let n=z4(t);Km(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&ii(n())},[t]),oI(()=>{t&&ii(n())})}function q4({ownerDocument:e,container:t,initialFocus:n},r){let i=y.exports.useRef(null),s=la();return Km(()=>{if(!r)return;let o=t.current;o&&rh(()=>{if(!s.current)return;let l=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===l){i.current=l;return}}else if(o.contains(l)){i.current=l;return}n!=null&&n.current?ii(n.current):Za(o,Br.First)===ZS.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),i.current=e==null?void 0:e.activeElement})},[r]),i}function G4({ownerDocument:e,container:t,containers:n,previousActiveElement:r},i){let s=la();sI(e==null?void 0:e.defaultView,"focus",o=>{if(!i||!s.current)return;let l=lI(n);t.current instanceof HTMLElement&&l.add(t.current);let a=r.current;if(!a)return;let u=o.target;u&&u instanceof HTMLElement?uI(l,u)?(r.current=u,ii(u)):(o.preventDefault(),o.stopPropagation(),ii(a)):ii(r.current)},!0)}function uI(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let cI=y.exports.createContext(!1);function K4(){return y.exports.useContext(cI)}function sp(e){return V.createElement(cI.Provider,{value:e.force},e.children)}function Y4(e){let t=K4(),n=y.exports.useContext(hI),r=aa(e),[i,s]=y.exports.useState(()=>{if(!t&&n!==null||Fn.isServer)return null;let o=r==null?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(r===null)return null;let l=r.createElement("div");return l.setAttribute("id","headlessui-portal-root"),r.body.appendChild(l)});return y.exports.useEffect(()=>{i!==null&&(r!=null&&r.body.contains(i)||r==null||r.body.appendChild(i))},[i,r]),y.exports.useEffect(()=>{t||n!==null&&s(n.current)},[n,s,t]),i}let Q4=y.exports.Fragment;function X4(e,t){let n=e,r=y.exports.useRef(null),i=ln(A4(c=>{r.current=c}),t),s=aa(r),o=Y4(r),[l]=y.exports.useState(()=>{var c;return Fn.isServer?null:(c=s==null?void 0:s.createElement("div"))!=null?c:null}),a=y.exports.useContext(op),u=qs();return on(()=>{!o||!l||o.contains(l)||(l.setAttribute("data-headlessui-portal",""),o.appendChild(l))},[o,l]),on(()=>{if(l&&a)return a.register(l)},[a,l]),oI(()=>{var c;!o||!l||(l instanceof Node&&o.contains(l)&&o.removeChild(l),o.childNodes.length<=0&&((c=o.parentElement)==null||c.removeChild(o)))}),u?!o||!l?null:gp.exports.createPortal(qt({ourProps:{ref:i},theirProps:n,defaultTag:Q4,name:"Portal"}),l):null}let J4=y.exports.Fragment,hI=y.exports.createContext(null);function Z4(e,t){let{target:n,...r}=e,i={ref:ln(t)};return V.createElement(hI.Provider,{value:n},qt({ourProps:i,theirProps:r,defaultTag:J4,name:"Popover.Group"}))}let op=y.exports.createContext(null);function eU(){let e=y.exports.useContext(op),t=y.exports.useRef([]),n=ve(s=>(t.current.push(s),e&&e.register(s),()=>r(s))),r=ve(s=>{let o=t.current.indexOf(s);o!==-1&&t.current.splice(o,1),e&&e.unregister(s)}),i=y.exports.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,y.exports.useMemo(()=>function({children:s}){return V.createElement(op.Provider,{value:i},s)},[i])]}let tU=Lt(X4),nU=Lt(Z4),lp=Object.assign(tU,{Group:nU}),dI=y.exports.createContext(null);function fI(){let e=y.exports.useContext(dI);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,fI),t}return e}function rU(){let[e,t]=y.exports.useState([]);return[e.length>0?e.join(" "):void 0,y.exports.useMemo(()=>function(n){let r=ve(s=>(t(o=>[...o,s]),()=>t(o=>{let l=o.slice(),a=l.indexOf(s);return a!==-1&&l.splice(a,1),l}))),i=y.exports.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return V.createElement(dI.Provider,{value:i},n.children)},[t])]}let iU="p";function sU(e,t){let n=Gs(),{id:r=`headlessui-description-${n}`,...i}=e,s=fI(),o=ln(t);on(()=>s.register(r),[r,s.register]);let l={ref:o,...s.props,id:r};return qt({ourProps:l,theirProps:i,slot:s.slot||{},defaultTag:iU,name:s.name||"Description"})}let oU=Lt(sU),lU=Object.assign(oU,{}),Ym=y.exports.createContext(()=>{});Ym.displayName="StackContext";var ap=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ap||{});function aU(){return y.exports.useContext(Ym)}function uU({children:e,onUpdate:t,type:n,element:r,enabled:i}){let s=aU(),o=ve((...l)=>{t==null||t(...l),s(...l)});return on(()=>{let l=i===void 0||i===!0;return l&&o(0,n,r),()=>{l&&o(1,n,r)}},[o,n,r,i]),V.createElement(Ym.Provider,{value:o},e)}function cU(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const hU=typeof Object.is=="function"?Object.is:cU,{useState:dU,useEffect:fU,useLayoutEffect:pU,useDebugValue:gU}=eu;function mU(e,t,n){const r=t(),[{inst:i},s]=dU({inst:{value:r,getSnapshot:t}});return pU(()=>{i.value=r,i.getSnapshot=t,wd(i)&&s({inst:i})},[e,r,t]),fU(()=>(wd(i)&&s({inst:i}),e(()=>{wd(i)&&s({inst:i})})),[e]),gU(r),r}function wd(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!hU(n,r)}catch{return!0}}function vU(e,t,n){return t()}const yU=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",_U=!yU,wU=_U?vU:mU,EU="useSyncExternalStore"in eu?(e=>e.useSyncExternalStore)(eu):wU;function CU(e){return EU(e.subscribe,e.getSnapshot,e.getSnapshot)}function TU(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(i){return r.add(i),()=>r.delete(i)},dispatch(i,...s){let o=t[i].call(n,...s);o&&(n=o,r.forEach(l=>l()))}}}function SU(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,i=r.clientWidth-r.offsetWidth,s=e-i;n.style(r,"paddingRight",`${s}px`)}}}function IU(){if(!$4())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function i(o){return r.containers.flatMap(l=>l()).some(l=>l.contains(o))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let s=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let l=o.target.closest("a");if(!l)return;let{hash:a}=new URL(l.href),u=t.querySelector(a);u&&!i(u)&&(s=u)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!i(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),s&&s.isConnected&&(s.scrollIntoView({block:"nearest"}),s=null)})}}}function kU(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function xU(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let Jr=TU(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:Ws(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:xU(n)},i=[IU(),SU(),kU()];i.forEach(({before:s})=>s==null?void 0:s(r)),i.forEach(({after:s})=>s==null?void 0:s(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});Jr.subscribe(()=>{let e=Jr.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",i=n.count!==0;(i&&!r||!i&&r)&&Jr.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&Jr.dispatch("TEARDOWN",n)}});function RU(e,t,n){let r=CU(Jr),i=e?r.get(e):void 0,s=i?i.count>0:!1;return on(()=>{if(!(!e||!t))return Jr.dispatch("PUSH",e,n),()=>Jr.dispatch("POP",e,n)},[t,e]),s}let Ed=new Map,go=new Map;function R0(e,t=!0){on(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function i(){var o;if(!r)return;let l=(o=go.get(r))!=null?o:1;if(l===1?go.delete(r):go.set(r,l-1),l!==1)return;let a=Ed.get(r);a&&(a["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",a["aria-hidden"]),r.inert=a.inert,Ed.delete(r))}let s=(n=go.get(r))!=null?n:0;return go.set(r,s+1),s!==0||(Ed.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),i},[e,t])}function NU({defaultContainers:e=[],portals:t}={}){let n=y.exports.useRef(null),r=aa(n),i=ve(()=>{var s;let o=[];for(let l of e)l!==null&&(l instanceof HTMLElement?o.push(l):"current"in l&&l.current instanceof HTMLElement&&o.push(l.current));if(t!=null&&t.current)for(let l of t.current)o.push(l);for(let l of(s=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?s:[])l!==document.body&&l!==document.head&&l instanceof HTMLElement&&l.id!=="headlessui-portal-root"&&(l.contains(n.current)||o.some(a=>l.contains(a))||o.push(l));return o});return{resolveContainers:i,contains:ve(s=>i().some(o=>o.contains(s))),mainTreeNodeRef:n,MainTreeNode:y.exports.useMemo(()=>function(){return V.createElement(ip,{features:hc.Hidden,ref:n})},[n])}}var PU=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(PU||{}),AU=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(AU||{});let bU={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},dc=y.exports.createContext(null);dc.displayName="DialogContext";function ua(e){let t=y.exports.useContext(dc);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ua),n}return t}function OU(e,t,n=()=>[document.body]){RU(e,t,r=>{var i;return{containers:[...(i=r.containers)!=null?i:[],n]}})}function DU(e,t){return it(t.type,bU,e,t)}let LU="div",MU=cc.RenderStrategy|cc.Static;function FU(e,t){var n;let r=Gs(),{id:i=`headlessui-dialog-${r}`,open:s,onClose:o,initialFocus:l,__demoMode:a=!1,...u}=e,[c,d]=y.exports.useState(0),h=Gm();s===void 0&&h!==null&&(s=(h&Nt.Open)===Nt.Open);let m=y.exports.useRef(null),v=ln(m,t),_=aa(m),f=e.hasOwnProperty("open")||h!==null,p=e.hasOwnProperty("onClose");if(!f&&!p)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!f)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!p)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof s!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s}`);if(typeof o!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let g=s?0:1,[E,C]=y.exports.useReducer(DU,{titleId:null,descriptionId:null,panelRef:y.exports.createRef()}),k=ve(()=>o(!1)),I=ve(le=>C({type:0,id:le})),O=qs()?a?!1:g===0:!1,M=c>1,A=y.exports.useContext(dc)!==null,[ee,Ne]=eU(),{resolveContainers:B,mainTreeNodeRef:F,MainTreeNode:ie}=NU({portals:ee,defaultContainers:[(n=E.panelRef.current)!=null?n:m.current]}),se=M?"parent":"leaf",_e=h!==null?(h&Nt.Closing)===Nt.Closing:!1,Me=(()=>A||_e?!1:O)(),Fe=y.exports.useCallback(()=>{var le,Kt;return(Kt=Array.from((le=_==null?void 0:_.querySelectorAll("body > *"))!=null?le:[]).find(ht=>ht.id==="headlessui-portal-root"?!1:ht.contains(F.current)&&ht instanceof HTMLElement))!=null?Kt:null},[F]);R0(Fe,Me);let ct=(()=>M?!0:O)(),Gt=y.exports.useCallback(()=>{var le,Kt;return(Kt=Array.from((le=_==null?void 0:_.querySelectorAll("[data-headlessui-portal]"))!=null?le:[]).find(ht=>ht.contains(F.current)&&ht instanceof HTMLElement))!=null?Kt:null},[F]);R0(Gt,ct);let R=(()=>!(!O||M))();P4(B,k,R);let z=(()=>!(M||g!==0))();sI(_==null?void 0:_.defaultView,"keydown",le=>{z&&(le.defaultPrevented||le.key===iI.Escape&&(le.preventDefault(),le.stopPropagation(),k()))});let Y=(()=>!(_e||g!==0||A))();OU(_,Y,B),y.exports.useEffect(()=>{if(g!==0||!m.current)return;let le=new ResizeObserver(Kt=>{for(let ht of Kt){let Or=ht.target.getBoundingClientRect();Or.x===0&&Or.y===0&&Or.width===0&&Or.height===0&&k()}});return le.observe(m.current),()=>le.disconnect()},[g,m,k]);let[ue,Se]=rU(),Rt=y.exports.useMemo(()=>[{dialogState:g,close:k,setTitleId:I},E],[g,E,k,I]),vt=y.exports.useMemo(()=>({open:g===0}),[g]),an={ref:v,id:i,role:"dialog","aria-modal":g===0?!0:void 0,"aria-labelledby":E.titleId,"aria-describedby":ue};return V.createElement(uU,{type:"Dialog",enabled:g===0,element:m,onUpdate:ve((le,Kt)=>{Kt==="Dialog"&&it(le,{[ap.Add]:()=>d(ht=>ht+1),[ap.Remove]:()=>d(ht=>ht-1)})})},V.createElement(sp,{force:!0},V.createElement(lp,null,V.createElement(dc.Provider,{value:Rt},V.createElement(lp.Group,{target:m},V.createElement(sp,{force:!1},V.createElement(Se,{slot:vt,name:"Dialog.Description"},V.createElement(po,{initialFocus:l,containers:B,features:O?it(se,{parent:po.features.RestoreFocus,leaf:po.features.All&~po.features.FocusLock}):po.features.None},V.createElement(Ne,null,qt({ourProps:an,theirProps:u,slot:vt,defaultTag:LU,features:MU,visible:g===0,name:"Dialog"}))))))))),V.createElement(ie,null))}let $U="div";function UU(e,t){let n=Gs(),{id:r=`headlessui-dialog-overlay-${n}`,...i}=e,[{dialogState:s,close:o}]=ua("Dialog.Overlay"),l=ln(t),a=ve(c=>{if(c.target===c.currentTarget){if(O4(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),o()}}),u=y.exports.useMemo(()=>({open:s===0}),[s]);return qt({ourProps:{ref:l,id:r,"aria-hidden":!0,onClick:a},theirProps:i,slot:u,defaultTag:$U,name:"Dialog.Overlay"})}let jU="div";function BU(e,t){let n=Gs(),{id:r=`headlessui-dialog-backdrop-${n}`,...i}=e,[{dialogState:s},o]=ua("Dialog.Backdrop"),l=ln(t);y.exports.useEffect(()=>{if(o.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[o.panelRef]);let a=y.exports.useMemo(()=>({open:s===0}),[s]);return V.createElement(sp,{force:!0},V.createElement(lp,null,qt({ourProps:{ref:l,id:r,"aria-hidden":!0},theirProps:i,slot:a,defaultTag:jU,name:"Dialog.Backdrop"})))}let VU="div";function HU(e,t){let n=Gs(),{id:r=`headlessui-dialog-panel-${n}`,...i}=e,[{dialogState:s},o]=ua("Dialog.Panel"),l=ln(t,o.panelRef),a=y.exports.useMemo(()=>({open:s===0}),[s]),u=ve(c=>{c.stopPropagation()});return qt({ourProps:{ref:l,id:r,onClick:u},theirProps:i,slot:a,defaultTag:VU,name:"Dialog.Panel"})}let zU="h2";function WU(e,t){let n=Gs(),{id:r=`headlessui-dialog-title-${n}`,...i}=e,[{dialogState:s,setTitleId:o}]=ua("Dialog.Title"),l=ln(t);y.exports.useEffect(()=>(o(r),()=>o(null)),[r,o]);let a=y.exports.useMemo(()=>({open:s===0}),[s]);return qt({ourProps:{ref:l,id:r},theirProps:i,slot:a,defaultTag:zU,name:"Dialog.Title"})}let qU=Lt(FU),GU=Lt(BU),KU=Lt(HU),YU=Lt(UU),QU=Lt(WU),ba=Object.assign(qU,{Backdrop:GU,Panel:KU,Overlay:YU,Title:QU,Description:lU});function XU(e=0){let[t,n]=y.exports.useState(e),r=la(),i=y.exports.useCallback(a=>{r.current&&n(u=>u|a)},[t,r]),s=y.exports.useCallback(a=>Boolean(t&a),[t]),o=y.exports.useCallback(a=>{r.current&&n(u=>u&~a)},[n,r]),l=y.exports.useCallback(a=>{r.current&&n(u=>u^a)},[n]);return{flags:t,addFlag:i,hasFlag:s,removeFlag:o,toggleFlag:l}}function JU(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Cd(e,...t){e&&t.length>0&&e.classList.add(...t)}function Td(e,...t){e&&t.length>0&&e.classList.remove(...t)}function ZU(e,t){let n=Ws();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[s,o]=[r,i].map(a=>{let[u=0]=a.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,d)=>d-c);return u}),l=s+o;if(l!==0){n.group(u=>{u.setTimeout(()=>{t(),u.dispose()},l),u.addEventListener(e,"transitionrun",c=>{c.target===c.currentTarget&&u.dispose()})});let a=n.addEventListener(e,"transitionend",u=>{u.target===u.currentTarget&&(t(),a())})}else t();return n.add(()=>t()),n.dispose}function e9(e,t,n,r){let i=n?"enter":"leave",s=Ws(),o=r!==void 0?JU(r):()=>{};i==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let l=it(i,{enter:()=>t.enter,leave:()=>t.leave}),a=it(i,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),u=it(i,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return Td(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),Cd(e,...l,...u),s.nextFrame(()=>{Td(e,...u),Cd(e,...a),ZU(e,()=>(Td(e,...l),Cd(e,...t.entered),o()))}),s.dispose}function t9({container:e,direction:t,classes:n,onStart:r,onStop:i}){let s=la(),o=Wm(),l=$n(t);on(()=>{let a=Ws();o.add(a.dispose);let u=e.current;if(u&&l.current!=="idle"&&s.current)return a.dispose(),r.current(l.current),a.add(e9(u,n.current,l.current==="enter",()=>{a.dispose(),i.current(l.current)})),a.dispose},[t])}function Lr(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let ih=y.exports.createContext(null);ih.displayName="TransitionContext";var n9=(e=>(e.Visible="visible",e.Hidden="hidden",e))(n9||{});function r9(){let e=y.exports.useContext(ih);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function i9(){let e=y.exports.useContext(sh);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let sh=y.exports.createContext(null);sh.displayName="NestingContext";function oh(e){return"children"in e?oh(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function pI(e,t){let n=$n(e),r=y.exports.useRef([]),i=la(),s=Wm(),o=ve((m,v=Dn.Hidden)=>{let _=r.current.findIndex(({el:f})=>f===m);_!==-1&&(it(v,{[Dn.Unmount](){r.current.splice(_,1)},[Dn.Hidden](){r.current[_].state="hidden"}}),s.microTask(()=>{var f;!oh(r)&&i.current&&((f=n.current)==null||f.call(n))}))}),l=ve(m=>{let v=r.current.find(({el:_})=>_===m);return v?v.state!=="visible"&&(v.state="visible"):r.current.push({el:m,state:"visible"}),()=>o(m,Dn.Unmount)}),a=y.exports.useRef([]),u=y.exports.useRef(Promise.resolve()),c=y.exports.useRef({enter:[],leave:[],idle:[]}),d=ve((m,v,_)=>{a.current.splice(0),t&&(t.chains.current[v]=t.chains.current[v].filter(([f])=>f!==m)),t==null||t.chains.current[v].push([m,new Promise(f=>{a.current.push(f)})]),t==null||t.chains.current[v].push([m,new Promise(f=>{Promise.all(c.current[v].map(([p,g])=>g)).then(()=>f())})]),v==="enter"?u.current=u.current.then(()=>t==null?void 0:t.wait.current).then(()=>_(v)):_(v)}),h=ve((m,v,_)=>{Promise.all(c.current[v].splice(0).map(([f,p])=>p)).then(()=>{var f;(f=a.current.shift())==null||f()}).then(()=>_(v))});return y.exports.useMemo(()=>({children:r,register:l,unregister:o,onStart:d,onStop:h,wait:u,chains:c}),[l,o,r,d,h,c,u])}function s9(){}let o9=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function N0(e){var t;let n={};for(let r of o9)n[r]=(t=e[r])!=null?t:s9;return n}function l9(e){let t=y.exports.useRef(N0(e));return y.exports.useEffect(()=>{t.current=N0(e)},[e]),t}let a9="div",gI=cc.RenderStrategy;function u9(e,t){let{beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:s,enter:o,enterFrom:l,enterTo:a,entered:u,leave:c,leaveFrom:d,leaveTo:h,...m}=e,v=y.exports.useRef(null),_=ln(v,t),f=m.unmount?Dn.Unmount:Dn.Hidden,{show:p,appear:g,initial:E}=r9(),[C,k]=y.exports.useState(p?"visible":"hidden"),I=i9(),{register:O,unregister:M}=I,A=y.exports.useRef(null);y.exports.useEffect(()=>O(v),[O,v]),y.exports.useEffect(()=>{if(f===Dn.Hidden&&v.current){if(p&&C!=="visible"){k("visible");return}return it(C,{hidden:()=>M(v),visible:()=>O(v)})}},[C,v,O,M,p,f]);let ee=$n({enter:Lr(o),enterFrom:Lr(l),enterTo:Lr(a),entered:Lr(u),leave:Lr(c),leaveFrom:Lr(d),leaveTo:Lr(h)}),Ne=l9({beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:s}),B=qs();y.exports.useEffect(()=>{if(B&&C==="visible"&&v.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[v,C,B]);let F=E&&!g,ie=(()=>!B||F||A.current===p?"idle":p?"enter":"leave")(),se=XU(0),_e=ve(R=>it(R,{enter:()=>{se.addFlag(Nt.Opening),Ne.current.beforeEnter()},leave:()=>{se.addFlag(Nt.Closing),Ne.current.beforeLeave()},idle:()=>{}})),Me=ve(R=>it(R,{enter:()=>{se.removeFlag(Nt.Opening),Ne.current.afterEnter()},leave:()=>{se.removeFlag(Nt.Closing),Ne.current.afterLeave()},idle:()=>{}})),Fe=pI(()=>{k("hidden"),M(v)},I);t9({container:v,classes:ee,direction:ie,onStart:$n(R=>{Fe.onStart(v,R,_e)}),onStop:$n(R=>{Fe.onStop(v,R,Me),R==="leave"&&!oh(Fe)&&(k("hidden"),M(v))})}),y.exports.useEffect(()=>{F&&(f===Dn.Hidden?A.current=null:A.current=p)},[p,F,C]);let ct=m,Gt={ref:_};return g&&p&&E&&(ct={...ct,className:rp(m.className,...ee.current.enter,...ee.current.enterFrom)}),V.createElement(sh.Provider,{value:Fe},V.createElement(F4,{value:it(C,{visible:Nt.Open,hidden:Nt.Closed})|se.flags},qt({ourProps:Gt,theirProps:ct,defaultTag:a9,features:gI,visible:C==="visible",name:"Transition.Child"})))}function c9(e,t){let{show:n,appear:r=!1,unmount:i,...s}=e,o=y.exports.useRef(null),l=ln(o,t);qs();let a=Gm();if(n===void 0&&a!==null&&(n=(a&Nt.Open)===Nt.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[u,c]=y.exports.useState(n?"visible":"hidden"),d=pI(()=>{c("hidden")}),[h,m]=y.exports.useState(!0),v=y.exports.useRef([n]);on(()=>{h!==!1&&v.current[v.current.length-1]!==n&&(v.current.push(n),m(!1))},[v,n]);let _=y.exports.useMemo(()=>({show:n,appear:r,initial:h}),[n,r,h]);y.exports.useEffect(()=>{if(n)c("visible");else if(!oh(d))c("hidden");else{let E=o.current;if(!E)return;let C=E.getBoundingClientRect();C.x===0&&C.y===0&&C.width===0&&C.height===0&&c("hidden")}},[n,d]);let f={unmount:i},p=ve(()=>{var E;h&&m(!1),(E=e.beforeEnter)==null||E.call(e)}),g=ve(()=>{var E;h&&m(!1),(E=e.beforeLeave)==null||E.call(e)});return V.createElement(sh.Provider,{value:d},V.createElement(ih.Provider,{value:_},qt({ourProps:{...f,as:y.exports.Fragment,children:V.createElement(mI,{ref:l,...f,...s,beforeEnter:p,beforeLeave:g})},theirProps:{},defaultTag:y.exports.Fragment,features:gI,visible:u==="visible",name:"Transition"})))}function h9(e,t){let n=y.exports.useContext(ih)!==null,r=Gm()!==null;return V.createElement(V.Fragment,null,!n&&r?V.createElement(up,{ref:t,...e}):V.createElement(mI,{ref:t,...e}))}let up=Lt(c9),mI=Lt(u9),d9=Lt(h9),Sd=Object.assign(up,{Child:d9,Root:up});const f9=({title:e,description:t,open:n,onClose:r,children:i})=>H(Sd,{appear:!0,show:n,as:y.exports.Fragment,children:ft(ba,{open:n,onClose:r,as:"div",className:"relative z-10",children:[H(Sd.Child,{as:y.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:H("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),H("div",{className:"fixed inset-0 overflow-y-auto",children:H("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:H(Sd.Child,{as:y.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:ft(ba.Panel,{className:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[H(ba.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:e}),H(ba.Description,{as:"div",className:"mt-2",children:H("p",{className:"text-sm text-gray-500",children:t})}),i]})})})})]})}),p9="_container_syanv_1",g9="_ripple_syanv_19";var P0={container:p9,ripple:g9};const m9=(e,t,n)=>{y.exports.useLayoutEffect(()=>{let r=null;return e>0&&(clearTimeout(r),r=setTimeout(()=>{n(),clearTimeout(r)},t*4)),()=>clearTimeout(r)},[e,t,n])},vI=({duration:e,color:t})=>{const[n,r]=y.exports.useState([]);return m9(n.length,e,()=>{r([])}),H("div",{onMouseDown:s=>{const o=s.currentTarget.getBoundingClientRect(),l=o.width>o.height?o.width:o.height,a=s.pageX-o.x-l/2,u=s.pageY-o.y-l/2,c={x:a,y:u,size:l};r([...n,c])},className:P0.container,children:n.length>0&&n.map((s,o)=>H("span",{className:P0.ripple,style:{top:s.y,left:s.x,width:s.size,height:s.size,backgroundColor:t,animationDuration:`${e}ms`}},"span"+o))})},v9=()=>{var m,v;const[e,t]=y.exports.useState(!0),[n,r]=y.exports.useState(!1),[i,s]=y.exports.useState(""),o=OS(),{register:l,handleSubmit:a,getValues:u,formState:{errors:c}}=d4(),d=async _=>{r(!0),e?ZN(o,_.email,_.password).catch(f=>{f instanceof It&&(f.code==="auth/user-not-found"?s("Couldn't find the user. Try another one"):f.code==="auth/wrong-password"&&s("Incorrect password. Please try again"))}).finally(()=>{r(!1)}):JN(o,_.email,_.password).catch(f=>{f instanceof It&&f.code==="auth/email-already-in-use"&&s("Email already in use. Try to log in?")}).finally(()=>{r(!1)})},h=()=>{s("")};return ft(v4,{children:[H(_4,{loading:n}),H(f9,{title:e?"Login error":"Sign up error",description:i,onClose:h,open:!!i,children:H("div",{className:"mt-4",children:H("button",{onClick:h,className:"inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2",children:"Close"})})}),ft("div",{className:"mx-auto p-6",children:[H("h1",{className:"mb-20 mt-4 text-center text-5xl font-light text-primary",children:"Shoppingify"}),ft("form",{onSubmit:a(d),className:"mx-auto flex max-w-xs flex-col gap-6",children:[H(T0,{register:l,rules:{required:"this is required",pattern:{value:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}/,message:"must be a valid email address"}},placeholder:"Enter an email",label:"Email",errorMessage:(m=c.email)==null?void 0:m.message}),H(T0,{type:"password",register:l,rules:{required:"this is required"},placeholder:"Enter a password",label:"Password",errorMessage:(v=c.password)==null?void 0:v.message}),ft("button",{type:"submit",className:"relative mt-2 w-full cursor-pointer rounded-xl bg-primary py-2 text-base font-bold text-white",children:[e?"Login":"Signup",H(vI,{color:"#FFF0DE",duration:1500})]}),ft("p",{className:"-mt-5",children:[e?"Don't have an account?":"Already have an account?"," ",H("a",{onClick:()=>t(_=>!_),className:"cursor-pointer text-primary hover:underline focus-visible:underline",children:e?"Sign up":"Login"})]})]})]})]})};var y9="/shoppingify/assets/favicon.5b151dc7.svg",yI={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},A0=V.createContext&&V.createContext(yI),wr=globalThis&&globalThis.__assign||function(){return wr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},wr.apply(this,arguments)},_9=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function _I(e){return e&&e.map(function(t,n){return V.createElement(t.tag,wr({key:n},t.attr),_I(t.child))})}function lh(e){return function(t){return V.createElement(w9,wr({attr:wr({},e.attr)},t),_I(e.child))}}function w9(e){var t=function(n){var r=e.attr,i=e.size,s=e.title,o=_9(e,["attr","size","title"]),l=i||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),V.createElement("svg",wr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:a,style:wr(wr({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&V.createElement("title",null,s),e.children)};return A0!==void 0?V.createElement(A0.Consumer,null,function(n){return t(n)}):t(yI)}function E9(e){return lh({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}}]})(e)}function C9(e){return lh({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}}]})(e)}function T9(e){return lh({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}}]})(e)}function S9(e){return lh({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{fill:"none"},child:[{tag:"path",attr:{d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M0 0h24v24H0z"}}]},{tag:"path",attr:{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}}]})(e)}const Id=({to:e,tooltip:t,Icon:n})=>ft(W$,{to:e,className:({isActive:r})=>`group relative block px-4 py-8 sm:px-6 ${r&&"before:absolute before:left-0 before:top-1/2 before:h-12 before:w-1.5 before:-translate-y-1/2 before:rounded-r-lg before:bg-primary"}`,children:[H(n,{className:"text-2xl"}),H(vI,{color:"#dddddd",duration:1e3}),H("span",{className:"pointer-events-none absolute -right-12 top-1/2 flex h-5 w-16 -translate-y-1/2 items-center justify-center rounded-md bg-gray-700 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100",children:t})]}),I9=()=>ft("nav",{className:"flex h-screen w-fit flex-col justify-between bg-white",children:[H("img",{src:y9,alt:"logo",className:"relative top-4 mx-auto h-12 w-12"}),ft("div",{className:"flex flex-col items-center",children:[H(Id,{to:"/",Icon:E9,tooltip:"items"}),H(Id,{to:"/history",Icon:S9,tooltip:"history"}),H(Id,{to:"/statistics",Icon:C9,tooltip:"statistics"})]}),H(T9,{className:"relative bottom-6 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary p-2.5 text-white"})]}),k9=()=>{const{status:e,data:t}=LF();return e==="loading"?H("div",{}):H(B$,{basename:"/shoppingify",children:ft("div",{className:"flex",children:[t.signedIn&&H(I9,{}),ft(M$,{children:[!t.signedIn&&H(Xa,{path:"/login",element:H(v9,{})}),t.signedIn&&H(Xa,{path:"/",element:H("p",{children:"Logged in"})}),H(Xa,{path:"*",element:H(D$,{to:t.signedIn?"/":"/login"})})]})]})})};const x9=()=>{const e=PS(),t=Lb(e),n=dA(e);return H(qF,{sdk:n,children:H(GF,{sdk:t,children:H(k9,{})})})},R9={apiKey:"AIzaSyAltaAAbp3yed-PjevL5ASwWihJYeNCGU0",authDomain:"shoppingify-1bd7f.firebaseapp.com",projectId:"shoppingify-1bd7f",storageBucket:"shoppingify-1bd7f.appspot.com",messagingSenderId:"601698294825",appId:"1:601698294825:web:6a0e15be24181c41d8d038",measurementId:"G-BMQPZHF7V1"};Rx.render(H(V.StrictMode,{children:H(OF,{firebaseConfig:R9,children:H(x9,{})})}),document.getElementById("root"));
