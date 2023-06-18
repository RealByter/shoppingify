function Hb(t,e){return e.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in t)){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}})}),Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}const Wb=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};Wb();var _={exports:{}},ce={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var L_=Object.getOwnPropertySymbols,qb=Object.prototype.hasOwnProperty,Kb=Object.prototype.propertyIsEnumerable;function Gb(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function Qb(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Q1=Qb()?Object.assign:function(t,e){for(var n,r=Gb(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)qb.call(n,o)&&(r[o]=n[o]);if(L_){i=L_(n);for(var a=0;a<i.length;a++)Kb.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg=Q1,To=60103,Y1=60106;ce.Fragment=60107;ce.StrictMode=60108;ce.Profiler=60114;var X1=60109,J1=60110,Z1=60112;ce.Suspense=60113;var eC=60115,tC=60116;if(typeof Symbol=="function"&&Symbol.for){var vn=Symbol.for;To=vn("react.element"),Y1=vn("react.portal"),ce.Fragment=vn("react.fragment"),ce.StrictMode=vn("react.strict_mode"),ce.Profiler=vn("react.profiler"),X1=vn("react.provider"),J1=vn("react.context"),Z1=vn("react.forward_ref"),ce.Suspense=vn("react.suspense"),eC=vn("react.memo"),tC=vn("react.lazy")}var M_=typeof Symbol=="function"&&Symbol.iterator;function Yb(t){return t===null||typeof t!="object"?null:(t=M_&&t[M_]||t["@@iterator"],typeof t=="function"?t:null)}function Vl(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nC={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rC={};function So(t,e,n){this.props=t,this.context=e,this.refs=rC,this.updater=n||nC}So.prototype.isReactComponent={};So.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(Vl(85));this.updater.enqueueSetState(this,t,e,"setState")};So.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function iC(){}iC.prototype=So.prototype;function Tg(t,e,n){this.props=t,this.context=e,this.refs=rC,this.updater=n||nC}var Sg=Tg.prototype=new iC;Sg.constructor=Tg;Cg(Sg,So.prototype);Sg.isPureReactComponent=!0;var Ig={current:null},sC=Object.prototype.hasOwnProperty,oC={key:!0,ref:!0,__self:!0,__source:!0};function aC(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)sC.call(e,r)&&!oC.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:To,type:t,key:s,ref:o,props:i,_owner:Ig.current}}function Xb(t,e){return{$$typeof:To,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function kg(t){return typeof t=="object"&&t!==null&&t.$$typeof===To}function Jb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $_=/\/+/g;function Yd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Jb(""+t.key):e.toString(36)}function nc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case To:case Y1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Yd(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace($_,"$&/")+"/"),nc(i,e,n,"",function(u){return u})):i!=null&&(kg(i)&&(i=Xb(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Yd(s,a);o+=nc(s,e,n,l,i)}else if(l=Yb(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Yd(s,a++),o+=nc(s,e,n,l,i);else if(s==="object")throw e=""+t,Error(Vl(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function Nu(t,e,n){if(t==null)return t;var r=[],i=0;return nc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Zb(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var lC={current:null};function mr(){var t=lC.current;if(t===null)throw Error(Vl(321));return t}var eR={ReactCurrentDispatcher:lC,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Ig,IsSomeRendererActing:{current:!1},assign:Cg};ce.Children={map:Nu,forEach:function(t,e,n){Nu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Nu(t,function(){e++}),e},toArray:function(t){return Nu(t,function(e){return e})||[]},only:function(t){if(!kg(t))throw Error(Vl(143));return t}};ce.Component=So;ce.PureComponent=Tg;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eR;ce.cloneElement=function(t,e,n){if(t==null)throw Error(Vl(267,t));var r=Cg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ig.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)sC.call(e,l)&&!oC.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:To,type:t.type,key:i,ref:s,props:r,_owner:o}};ce.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:J1,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:X1,_context:t},t.Consumer=t};ce.createElement=aC;ce.createFactory=function(t){var e=aC.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:Z1,render:t}};ce.isValidElement=kg;ce.lazy=function(t){return{$$typeof:tC,_payload:{_status:-1,_result:t},_init:Zb}};ce.memo=function(t,e){return{$$typeof:eC,type:t,compare:e===void 0?null:e}};ce.useCallback=function(t,e){return mr().useCallback(t,e)};ce.useContext=function(t,e){return mr().useContext(t,e)};ce.useDebugValue=function(){};ce.useEffect=function(t,e){return mr().useEffect(t,e)};ce.useImperativeHandle=function(t,e,n){return mr().useImperativeHandle(t,e,n)};ce.useLayoutEffect=function(t,e){return mr().useLayoutEffect(t,e)};ce.useMemo=function(t,e){return mr().useMemo(t,e)};ce.useReducer=function(t,e,n){return mr().useReducer(t,e,n)};ce.useRef=function(t){return mr().useRef(t)};ce.useState=function(t){return mr().useState(t)};ce.version="17.0.2";_.exports=ce;var K=_.exports,wp=Hb({__proto__:null,default:K},[_.exports]),xg={exports:{}},pn={},uC={exports:{}},cC={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var l=null,u=null,c=function(){if(l!==null)try{var b=t.unstable_now();l(!0,b),l=null}catch(Q){throw setTimeout(c,0),Q}};e=function(b){l!==null?setTimeout(e,0,b):(l=b,setTimeout(c,0))},n=function(b,Q){u=setTimeout(b,Q)},r=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var h=window.setTimeout,d=window.clearTimeout;if(typeof console!="undefined"){var p=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof p!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var y=!1,v=null,f=-1,m=5,g=0;t.unstable_shouldYield=function(){return t.unstable_now()>=g},i=function(){},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):m=0<b?Math.floor(1e3/b):5};var w=new MessageChannel,C=w.port2;w.port1.onmessage=function(){if(v!==null){var b=t.unstable_now();g=b+m;try{v(!0,b)?C.postMessage(null):(y=!1,v=null)}catch(Q){throw C.postMessage(null),Q}}else y=!1},e=function(b){v=b,y||(y=!0,C.postMessage(null))},n=function(b,Q){f=h(function(){b(t.unstable_now())},Q)},r=function(){d(f),f=-1}}function k(b,Q){var ne=b.length;b.push(Q);e:for(;;){var _e=ne-1>>>1,$e=b[_e];if($e!==void 0&&0<$($e,Q))b[_e]=Q,b[ne]=$e,ne=_e;else break e}}function I(b){return b=b[0],b===void 0?null:b}function L(b){var Q=b[0];if(Q!==void 0){var ne=b.pop();if(ne!==Q){b[0]=ne;e:for(var _e=0,$e=b.length;_e<$e;){var Xt=2*(_e+1)-1,Bt=b[Xt],Pn=Xt+1,ye=b[Pn];if(Bt!==void 0&&0>$(Bt,ne))ye!==void 0&&0>$(ye,Bt)?(b[_e]=ye,b[Pn]=ne,_e=Pn):(b[_e]=Bt,b[Xt]=ne,_e=Xt);else if(ye!==void 0&&0>$(ye,ne))b[_e]=ye,b[Pn]=ne,_e=Pn;else break e}}return Q}return null}function $(b,Q){var ne=b.sortIndex-Q.sortIndex;return ne!==0?ne:b.id-Q.id}var O=[],le=[],Be=1,q=null,U=3,fe=!1,pe=!1,be=!1;function Je(b){for(var Q=I(le);Q!==null;){if(Q.callback===null)L(le);else if(Q.startTime<=b)L(le),Q.sortIndex=Q.expirationTime,k(O,Q);else break;Q=I(le)}}function Ze(b){if(be=!1,Je(b),!pe)if(I(O)!==null)pe=!0,e(Ot);else{var Q=I(le);Q!==null&&n(Ze,Q.startTime-b)}}function Ot(b,Q){pe=!1,be&&(be=!1,r()),fe=!0;var ne=U;try{for(Je(Q),q=I(O);q!==null&&(!(q.expirationTime>Q)||b&&!t.unstable_shouldYield());){var _e=q.callback;if(typeof _e=="function"){q.callback=null,U=q.priorityLevel;var $e=_e(q.expirationTime<=Q);Q=t.unstable_now(),typeof $e=="function"?q.callback=$e:q===I(O)&&L(O),Je(Q)}else L(O);q=I(O)}if(q!==null)var Xt=!0;else{var Bt=I(le);Bt!==null&&n(Ze,Bt.startTime-Q),Xt=!1}return Xt}finally{q=null,U=ne,fe=!1}}var gn=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){pe||fe||(pe=!0,e(Ot))},t.unstable_getCurrentPriorityLevel=function(){return U},t.unstable_getFirstCallbackNode=function(){return I(O)},t.unstable_next=function(b){switch(U){case 1:case 2:case 3:var Q=3;break;default:Q=U}var ne=U;U=Q;try{return b()}finally{U=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=gn,t.unstable_runWithPriority=function(b,Q){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var ne=U;U=b;try{return Q()}finally{U=ne}},t.unstable_scheduleCallback=function(b,Q,ne){var _e=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?_e+ne:_e):ne=_e,b){case 1:var $e=-1;break;case 2:$e=250;break;case 5:$e=1073741823;break;case 4:$e=1e4;break;default:$e=5e3}return $e=ne+$e,b={id:Be++,callback:Q,priorityLevel:b,startTime:ne,expirationTime:$e,sortIndex:-1},ne>_e?(b.sortIndex=ne,k(le,b),I(O)===null&&b===I(le)&&(be?r():be=!0,n(Ze,ne-_e))):(b.sortIndex=$e,k(O,b),pe||fe||(pe=!0,e(Ot))),b},t.unstable_wrapCallback=function(b){var Q=U;return function(){var ne=U;U=Q;try{return b.apply(this,arguments)}finally{U=ne}}}})(cC);uC.exports=cC;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh=_.exports,Ne=Q1,ot=uC.exports;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!zh)throw Error(N(227));var hC=new Set,Ja={};function ns(t,e){no(t,e),no(t+"Capture",e)}function no(t,e){for(Ja[t]=e,t=0;t<e.length;t++)hC.add(e[t])}var cr=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),tR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,F_=Object.prototype.hasOwnProperty,U_={},V_={};function nR(t){return F_.call(V_,t)?!0:F_.call(U_,t)?!1:tR.test(t)?V_[t]=!0:(U_[t]=!0,!1)}function rR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function iR(t,e,n,r){if(e===null||typeof e=="undefined"||rR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ng=/[\-:]([a-z])/g;function bg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ng,bg);mt[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ng,bg);mt[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ng,bg);mt[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rg(t,e,n,r){var i=mt.hasOwnProperty(e)?mt[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(iR(e,n,i,r)&&(n=null),r||i===null?nR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var rs=zh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ya=60103,Ei=60106,Tr=60107,Ag=60108,Ra=60114,Pg=60109,Og=60110,Hh=60112,Aa=60113,xc=60120,Wh=60115,Dg=60116,Lg=60121,Mg=60128,dC=60129,$g=60130,Ep=60131;if(typeof Symbol=="function"&&Symbol.for){var et=Symbol.for;ya=et("react.element"),Ei=et("react.portal"),Tr=et("react.fragment"),Ag=et("react.strict_mode"),Ra=et("react.profiler"),Pg=et("react.provider"),Og=et("react.context"),Hh=et("react.forward_ref"),Aa=et("react.suspense"),xc=et("react.suspense_list"),Wh=et("react.memo"),Dg=et("react.lazy"),Lg=et("react.block"),et("react.scope"),Mg=et("react.opaque.id"),dC=et("react.debug_trace_mode"),$g=et("react.offscreen"),Ep=et("react.legacy_hidden")}var B_=typeof Symbol=="function"&&Symbol.iterator;function Yo(t){return t===null||typeof t!="object"?null:(t=B_&&t[B_]||t["@@iterator"],typeof t=="function"?t:null)}var Xd;function va(t){if(Xd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xd=e&&e[1]||""}return`
`+Xd+t}var Jd=!1;function bu(t,e){if(!t||Jd)return"";Jd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{Jd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?va(t):""}function sR(t){switch(t.tag){case 5:return va(t.type);case 16:return va("Lazy");case 13:return va("Suspense");case 19:return va("SuspenseList");case 0:case 2:case 15:return t=bu(t.type,!1),t;case 11:return t=bu(t.type.render,!1),t;case 22:return t=bu(t.type._render,!1),t;case 1:return t=bu(t.type,!0),t;default:return""}}function Ps(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Tr:return"Fragment";case Ei:return"Portal";case Ra:return"Profiler";case Ag:return"StrictMode";case Aa:return"Suspense";case xc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Og:return(t.displayName||"Context")+".Consumer";case Pg:return(t._context.displayName||"Context")+".Provider";case Hh:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case Wh:return Ps(t.type);case Lg:return Ps(t._render);case Dg:e=t._payload,t=t._init;try{return Ps(t(e))}catch{}}return null}function Yr(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function fC(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function oR(t){var e=fC(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ru(t){t._valueTracker||(t._valueTracker=oR(t))}function pC(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=fC(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Nc(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cp(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function j_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mC(t,e){e=e.checked,e!=null&&Rg(t,"checked",e,!1)}function Tp(t,e){mC(t,e);var n=Yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sp(t,e.type,Yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function z_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sp(t,e,n){(e!=="number"||Nc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function aR(t){var e="";return zh.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function Ip(t,e){return t=Ne({children:void 0},e),(e=aR(e.children))&&(t.children=e),t}function Os(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function kp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function H_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(N(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(N(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yr(n)}}function gC(t,e){var n=Yr(e.value),r=Yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function W_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var xp={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function yC(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Np(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yC(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Au,vC=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==xp.svg||"innerHTML"in t)t.innerHTML=e;else{for(Au=Au||document.createElement("div"),Au.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Au.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Pa={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lR=["Webkit","ms","Moz","O"];Object.keys(Pa).forEach(function(t){lR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Pa[e]=Pa[t]})});function _C(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Pa.hasOwnProperty(t)&&Pa[t]?(""+e).trim():e+"px"}function wC(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_C(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var uR=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bp(t,e){if(e){if(uR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function Rp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Fg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ap=null,Ds=null,Ls=null;function q_(t){if(t=jl(t)){if(typeof Ap!="function")throw Error(N(280));var e=t.stateNode;e&&(e=Xh(e),Ap(t.stateNode,t.type,e))}}function EC(t){Ds?Ls?Ls.push(t):Ls=[t]:Ds=t}function CC(){if(Ds){var t=Ds,e=Ls;if(Ls=Ds=null,q_(t),e)for(t=0;t<e.length;t++)q_(e[t])}}function Ug(t,e){return t(e)}function TC(t,e,n,r,i){return t(e,n,r,i)}function Vg(){}var SC=Ug,Ci=!1,Zd=!1;function Bg(){(Ds!==null||Ls!==null)&&(Vg(),CC())}function cR(t,e,n){if(Zd)return t(e,n);Zd=!0;try{return SC(t,e,n)}finally{Zd=!1,Bg()}}function el(t,e){var n=t.stateNode;if(n===null)return null;var r=Xh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(N(231,e,typeof n));return n}var Pp=!1;if(cr)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){Pp=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{Pp=!1}function hR(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Oa=!1,bc=null,Rc=!1,Op=null,dR={onError:function(t){Oa=!0,bc=t}};function fR(t,e,n,r,i,s,o,a,l){Oa=!1,bc=null,hR.apply(dR,arguments)}function pR(t,e,n,r,i,s,o,a,l){if(fR.apply(this,arguments),Oa){if(Oa){var u=bc;Oa=!1,bc=null}else throw Error(N(198));Rc||(Rc=!0,Op=u)}}function is(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function IC(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function K_(t){if(is(t)!==t)throw Error(N(188))}function mR(t){var e=t.alternate;if(!e){if(e=is(t),e===null)throw Error(N(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return K_(i),t;if(s===r)return K_(i),e;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?t:e}function kC(t){if(t=mR(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function G_(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var xC,jg,NC,bC,Dp=!1,Ln=[],Mr=null,$r=null,Fr=null,tl=new Map,nl=new Map,Jo=[],Q_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lp(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function Y_(t,e){switch(t){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":tl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(e.pointerId)}}function Zo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=Lp(e,n,r,i,s),e!==null&&(e=jl(e),e!==null&&jg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function gR(t,e,n,r,i){switch(e){case"focusin":return Mr=Zo(Mr,t,e,n,r,i),!0;case"dragenter":return $r=Zo($r,t,e,n,r,i),!0;case"mouseover":return Fr=Zo(Fr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return tl.set(s,Zo(tl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,nl.set(s,Zo(nl.get(s)||null,t,e,n,r,i)),!0}return!1}function yR(t){var e=Ti(t.target);if(e!==null){var n=is(e);if(n!==null){if(e=n.tag,e===13){if(e=IC(n),e!==null){t.blockedOn=e,bC(t.lanePriority,function(){ot.unstable_runWithPriority(t.priority,function(){NC(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qg(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=jl(n),e!==null&&jg(e),t.blockedOn=n,!1;e.shift()}return!0}function X_(t,e,n){rc(t)&&n.delete(e)}function vR(){for(Dp=!1;0<Ln.length;){var t=Ln[0];if(t.blockedOn!==null){t=jl(t.blockedOn),t!==null&&xC(t);break}for(var e=t.targetContainers;0<e.length;){var n=qg(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&Ln.shift()}Mr!==null&&rc(Mr)&&(Mr=null),$r!==null&&rc($r)&&($r=null),Fr!==null&&rc(Fr)&&(Fr=null),tl.forEach(X_),nl.forEach(X_)}function ea(t,e){t.blockedOn===e&&(t.blockedOn=null,Dp||(Dp=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,vR)))}function RC(t){function e(i){return ea(i,t)}if(0<Ln.length){ea(Ln[0],t);for(var n=1;n<Ln.length;n++){var r=Ln[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Mr!==null&&ea(Mr,t),$r!==null&&ea($r,t),Fr!==null&&ea(Fr,t),tl.forEach(e),nl.forEach(e),n=0;n<Jo.length;n++)r=Jo[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jo.length&&(n=Jo[0],n.blockedOn===null);)yR(n),n.blockedOn===null&&Jo.shift()}function Pu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:Pu("Animation","AnimationEnd"),animationiteration:Pu("Animation","AnimationIteration"),animationstart:Pu("Animation","AnimationStart"),transitionend:Pu("Transition","TransitionEnd")},ef={},AC={};cr&&(AC=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function qh(t){if(ef[t])return ef[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in AC)return ef[t]=e[n];return t}var PC=qh("animationend"),OC=qh("animationiteration"),DC=qh("animationstart"),LC=qh("transitionend"),MC=new Map,zg=new Map,_R=["abort","abort",PC,"animationEnd",OC,"animationIteration",DC,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",LC,"transitionEnd","waiting","waiting"];function Hg(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),zg.set(r,e),MC.set(r,i),ns(i,[r])}}var wR=ot.unstable_now;wR();var we=8;function ys(t){if((1&t)!==0)return we=15,1;if((2&t)!==0)return we=14,2;if((4&t)!==0)return we=13,4;var e=24&t;return e!==0?(we=12,e):(t&32)!==0?(we=11,32):(e=192&t,e!==0?(we=10,e):(t&256)!==0?(we=9,256):(e=3584&t,e!==0?(we=8,e):(t&4096)!==0?(we=7,4096):(e=4186112&t,e!==0?(we=6,e):(e=62914560&t,e!==0?(we=5,e):t&67108864?(we=4,67108864):(t&134217728)!==0?(we=3,134217728):(e=805306368&t,e!==0?(we=2,e):(1073741824&t)!==0?(we=1,1073741824):(we=8,t))))))}function ER(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function CR(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(N(358,t))}}function rl(t,e){var n=t.pendingLanes;if(n===0)return we=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)r=s,i=we=15;else if(s=n&134217727,s!==0){var l=s&~o;l!==0?(r=ys(l),i=we):(a&=s,a!==0&&(r=ys(a),i=we))}else s=n&~o,s!==0?(r=ys(s),i=we):a!==0&&(r=ys(a),i=we);if(r===0)return 0;if(r=31-Xr(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&(e&o)===0){if(ys(e),i<=we)return e;we=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xr(e),i=1<<n,r|=t[n],e&=~i;return r}function $C(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ac(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=vs(24&~e),t===0?Ac(10,e):t;case 10:return t=vs(192&~e),t===0?Ac(8,e):t;case 8:return t=vs(3584&~e),t===0&&(t=vs(4186112&~e),t===0&&(t=512)),t;case 2:return e=vs(805306368&~e),e===0&&(e=268435456),e}throw Error(N(358,t))}function vs(t){return t&-t}function tf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Kh(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-Xr(e),t[e]=n}var Xr=Math.clz32?Math.clz32:IR,TR=Math.log,SR=Math.LN2;function IR(t){return t===0?32:31-(TR(t)/SR|0)|0}var kR=ot.unstable_UserBlockingPriority,xR=ot.unstable_runWithPriority,ic=!0;function NR(t,e,n,r){Ci||Vg();var i=Wg,s=Ci;Ci=!0;try{TC(i,t,e,n,r)}finally{(Ci=s)||Bg()}}function bR(t,e,n,r){xR(kR,Wg.bind(null,t,e,n,r))}function Wg(t,e,n,r){if(ic){var i;if((i=(e&4)===0)&&0<Ln.length&&-1<Q_.indexOf(t))t=Lp(null,t,e,n,r),Ln.push(t);else{var s=qg(t,e,n,r);if(s===null)i&&Y_(t,r);else{if(i){if(-1<Q_.indexOf(t)){t=Lp(s,t,e,n,r),Ln.push(t);return}if(gR(s,t,e,n,r))return;Y_(t,r)}YC(t,e,r,null,n)}}}}function qg(t,e,n,r){var i=Fg(r);if(i=Ti(i),i!==null){var s=is(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=IC(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return YC(t,e,r,i,n),null}var br=null,Kg=null,sc=null;function FC(){if(sc)return sc;var t,e=Kg,n=e.length,r,i="value"in br?br.value:br.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return sc=i.slice(t,1<r?1-r:void 0)}function oc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ou(){return!0}function J_(){return!1}function rn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ou:J_,this.isPropagationStopped=J_,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ou)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ou)},persist:function(){},isPersistent:Ou}),e}var Io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gg=rn(Io),Bl=Ne({},Io,{view:0,detail:0}),RR=rn(Bl),nf,rf,ta,Gh=Ne({},Bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ta&&(ta&&t.type==="mousemove"?(nf=t.screenX-ta.screenX,rf=t.screenY-ta.screenY):rf=nf=0,ta=t),nf)},movementY:function(t){return"movementY"in t?t.movementY:rf}}),Z_=rn(Gh),AR=Ne({},Gh,{dataTransfer:0}),PR=rn(AR),OR=Ne({},Bl,{relatedTarget:0}),sf=rn(OR),DR=Ne({},Io,{animationName:0,elapsedTime:0,pseudoElement:0}),LR=rn(DR),MR=Ne({},Io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$R=rn(MR),FR=Ne({},Io,{data:0}),e0=rn(FR),UR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=BR[t])?!!e[t]:!1}function Qg(){return jR}var zR=Ne({},Bl,{key:function(t){if(t.key){var e=UR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=oc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?VR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qg,charCode:function(t){return t.type==="keypress"?oc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?oc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),HR=rn(zR),WR=Ne({},Gh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),t0=rn(WR),qR=Ne({},Bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qg}),KR=rn(qR),GR=Ne({},Io,{propertyName:0,elapsedTime:0,pseudoElement:0}),QR=rn(GR),YR=Ne({},Gh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XR=rn(YR),JR=[9,13,27,32],Yg=cr&&"CompositionEvent"in window,Da=null;cr&&"documentMode"in document&&(Da=document.documentMode);var ZR=cr&&"TextEvent"in window&&!Da,UC=cr&&(!Yg||Da&&8<Da&&11>=Da),n0=String.fromCharCode(32),r0=!1;function VC(t,e){switch(t){case"keyup":return JR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function BC(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cs=!1;function eA(t,e){switch(t){case"compositionend":return BC(e);case"keypress":return e.which!==32?null:(r0=!0,n0);case"textInput":return t=e.data,t===n0&&r0?null:t;default:return null}}function tA(t,e){if(Cs)return t==="compositionend"||!Yg&&VC(t,e)?(t=FC(),sc=Kg=br=null,Cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return UC&&e.locale!=="ko"?null:e.data;default:return null}}var nA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function i0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nA[t.type]:e==="textarea"}function jC(t,e,n,r){EC(r),e=Pc(e,"onChange"),0<e.length&&(n=new Gg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var La=null,il=null;function rA(t){KC(t,0)}function Qh(t){var e=Ss(t);if(pC(e))return t}function iA(t,e){if(t==="change")return e}var zC=!1;if(cr){var of;if(cr){var af="oninput"in document;if(!af){var s0=document.createElement("div");s0.setAttribute("oninput","return;"),af=typeof s0.oninput=="function"}of=af}else of=!1;zC=of&&(!document.documentMode||9<document.documentMode)}function o0(){La&&(La.detachEvent("onpropertychange",HC),il=La=null)}function HC(t){if(t.propertyName==="value"&&Qh(il)){var e=[];if(jC(e,il,t,Fg(t)),t=rA,Ci)t(e);else{Ci=!0;try{Ug(t,e)}finally{Ci=!1,Bg()}}}}function sA(t,e,n){t==="focusin"?(o0(),La=e,il=n,La.attachEvent("onpropertychange",HC)):t==="focusout"&&o0()}function oA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qh(il)}function aA(t,e){if(t==="click")return Qh(e)}function lA(t,e){if(t==="input"||t==="change")return Qh(e)}function uA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var an=typeof Object.is=="function"?Object.is:uA,cA=Object.prototype.hasOwnProperty;function sl(t,e){if(an(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!cA.call(e,n[r])||!an(t[n[r]],e[n[r]]))return!1;return!0}function a0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function l0(t,e){var n=a0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=a0(n)}}function WC(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?WC(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function u0(){for(var t=window,e=Nc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Nc(t.document)}return e}function Mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var hA=cr&&"documentMode"in document&&11>=document.documentMode,Ts=null,$p=null,Ma=null,Fp=!1;function c0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fp||Ts==null||Ts!==Nc(r)||(r=Ts,"selectionStart"in r&&Mp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ma&&sl(Ma,r)||(Ma=r,r=Pc($p,"onSelect"),0<r.length&&(e=new Gg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ts)))}Hg("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Hg("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Hg(_R,2);for(var h0="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),lf=0;lf<h0.length;lf++)zg.set(h0[lf],0);no("onMouseEnter",["mouseout","mouseover"]);no("onMouseLeave",["mouseout","mouseover"]);no("onPointerEnter",["pointerout","pointerover"]);no("onPointerLeave",["pointerout","pointerover"]);ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qC=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function d0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,pR(r,e,void 0,t),t.currentTarget=null}function KC(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;d0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;d0(i,a,u),s=l}}}if(Rc)throw t=Op,Rc=!1,Op=null,t}function Ce(t,e){var n=JC(e),r=t+"__bubble";n.has(r)||(QC(e,t,2,!1),n.add(r))}var f0="_reactListening"+Math.random().toString(36).slice(2);function GC(t){t[f0]||(t[f0]=!0,hC.forEach(function(e){qC.has(e)||p0(e,!1,t,null),p0(e,!0,t,null)}))}function p0(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&qC.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=JC(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(i|=4),QC(s,t,i,e),o.add(a))}function QC(t,e,n,r){var i=zg.get(e);switch(i===void 0?2:i){case 0:i=NR;break;case 1:i=bR;break;default:i=Wg}n=i.bind(null,e,n,t),i=void 0,!Pp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function YC(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ti(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}cR(function(){var u=s,c=Fg(n),h=[];e:{var d=MC.get(t);if(d!==void 0){var p=Gg,y=t;switch(t){case"keypress":if(oc(n)===0)break e;case"keydown":case"keyup":p=HR;break;case"focusin":y="focus",p=sf;break;case"focusout":y="blur",p=sf;break;case"beforeblur":case"afterblur":p=sf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Z_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=PR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=KR;break;case PC:case OC:case DC:p=LR;break;case LC:p=QR;break;case"scroll":p=RR;break;case"wheel":p=XR;break;case"copy":case"cut":case"paste":p=$R;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=t0}var v=(e&4)!==0,f=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var g=u,w;g!==null;){w=g;var C=w.stateNode;if(w.tag===5&&C!==null&&(w=C,m!==null&&(C=el(g,m),C!=null&&v.push(ol(g,C,w)))),f)break;g=g.return}0<v.length&&(d=new p(d,y,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&(e&16)===0&&(y=n.relatedTarget||n.fromElement)&&(Ti(y)||y[ko]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?Ti(y):null,y!==null&&(f=is(y),y!==f||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=Z_,C="onMouseLeave",m="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=t0,C="onPointerLeave",m="onPointerEnter",g="pointer"),f=p==null?d:Ss(p),w=y==null?d:Ss(y),d=new v(C,g+"leave",p,n,c),d.target=f,d.relatedTarget=w,C=null,Ti(c)===u&&(v=new v(m,g+"enter",y,n,c),v.target=w,v.relatedTarget=f,C=v),f=C,p&&y)t:{for(v=p,m=y,g=0,w=v;w;w=fs(w))g++;for(w=0,C=m;C;C=fs(C))w++;for(;0<g-w;)v=fs(v),g--;for(;0<w-g;)m=fs(m),w--;for(;g--;){if(v===m||m!==null&&v===m.alternate)break t;v=fs(v),m=fs(m)}v=null}else v=null;p!==null&&m0(h,d,p,v,!1),y!==null&&f!==null&&m0(h,f,y,v,!0)}}e:{if(d=u?Ss(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var k=iA;else if(i0(d))if(zC)k=lA;else{k=oA;var I=sA}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=aA);if(k&&(k=k(t,u))){jC(h,k,n,c);break e}I&&I(t,d,u),t==="focusout"&&(I=d._wrapperState)&&I.controlled&&d.type==="number"&&Sp(d,"number",d.value)}switch(I=u?Ss(u):window,t){case"focusin":(i0(I)||I.contentEditable==="true")&&(Ts=I,$p=u,Ma=null);break;case"focusout":Ma=$p=Ts=null;break;case"mousedown":Fp=!0;break;case"contextmenu":case"mouseup":case"dragend":Fp=!1,c0(h,n,c);break;case"selectionchange":if(hA)break;case"keydown":case"keyup":c0(h,n,c)}var L;if(Yg)e:{switch(t){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Cs?VC(t,n)&&($="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(UC&&n.locale!=="ko"&&(Cs||$!=="onCompositionStart"?$==="onCompositionEnd"&&Cs&&(L=FC()):(br=c,Kg="value"in br?br.value:br.textContent,Cs=!0)),I=Pc(u,$),0<I.length&&($=new e0($,t,null,n,c),h.push({event:$,listeners:I}),L?$.data=L:(L=BC(n),L!==null&&($.data=L)))),(L=ZR?eA(t,n):tA(t,n))&&(u=Pc(u,"onBeforeInput"),0<u.length&&(c=new e0("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=L))}KC(h,e)})}function ol(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Pc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=el(t,n),s!=null&&r.unshift(ol(t,s,i)),s=el(t,e),s!=null&&r.push(ol(t,s,i))),t=t.return}return r}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function m0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=el(n,s),l!=null&&o.unshift(ol(n,l,a))):i||(l=el(n,s),l!=null&&o.push(ol(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function Oc(){}var uf=null,cf=null;function XC(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function Up(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var g0=typeof setTimeout=="function"?setTimeout:void 0,dA=typeof clearTimeout=="function"?clearTimeout:void 0;function Xg(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function Ms(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function y0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var hf=0;function fA(t){return{$$typeof:Mg,toString:t,valueOf:t}}var Yh=Math.random().toString(36).slice(2),Rr="__reactFiber$"+Yh,Dc="__reactProps$"+Yh,ko="__reactContainer$"+Yh,v0="__reactEvents$"+Yh;function Ti(t){var e=t[Rr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ko]||n[Rr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=y0(t);t!==null;){if(n=t[Rr])return n;t=y0(t)}return e}t=n,n=t.parentNode}return null}function jl(t){return t=t[Rr]||t[ko],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function Xh(t){return t[Dc]||null}function JC(t){var e=t[v0];return e===void 0&&(e=t[v0]=new Set),e}var Vp=[],Is=-1;function ai(t){return{current:t}}function Ie(t){0>Is||(t.current=Vp[Is],Vp[Is]=null,Is--)}function Oe(t,e){Is++,Vp[Is]=t.current,t.current=e}var Jr={},Rt=ai(Jr),Kt=ai(!1),Vi=Jr;function ro(t,e){var n=t.type.contextTypes;if(!n)return Jr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Gt(t){return t=t.childContextTypes,t!=null}function Lc(){Ie(Kt),Ie(Rt)}function _0(t,e,n){if(Rt.current!==Jr)throw Error(N(168));Oe(Rt,e),Oe(Kt,n)}function ZC(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,Ps(e)||"Unknown",i));return Ne({},n,r)}function ac(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jr,Vi=Rt.current,Oe(Rt,t),Oe(Kt,Kt.current),!0}function w0(t,e,n){var r=t.stateNode;if(!r)throw Error(N(169));n?(t=ZC(t,e,Vi),r.__reactInternalMemoizedMergedChildContext=t,Ie(Kt),Ie(Rt),Oe(Rt,t)):Ie(Kt),Oe(Kt,n)}var Jg=null,Oi=null,pA=ot.unstable_runWithPriority,Zg=ot.unstable_scheduleCallback,Bp=ot.unstable_cancelCallback,mA=ot.unstable_shouldYield,E0=ot.unstable_requestPaint,jp=ot.unstable_now,gA=ot.unstable_getCurrentPriorityLevel,Jh=ot.unstable_ImmediatePriority,eT=ot.unstable_UserBlockingPriority,tT=ot.unstable_NormalPriority,nT=ot.unstable_LowPriority,rT=ot.unstable_IdlePriority,df={},yA=E0!==void 0?E0:function(){},Xn=null,lc=null,ff=!1,C0=jp(),St=1e4>C0?jp:function(){return jp()-C0};function io(){switch(gA()){case Jh:return 99;case eT:return 98;case tT:return 97;case nT:return 96;case rT:return 95;default:throw Error(N(332))}}function iT(t){switch(t){case 99:return Jh;case 98:return eT;case 97:return tT;case 96:return nT;case 95:return rT;default:throw Error(N(332))}}function Bi(t,e){return t=iT(t),pA(t,e)}function al(t,e,n){return t=iT(t),Zg(t,e,n)}function Kn(){if(lc!==null){var t=lc;lc=null,Bp(t)}sT()}function sT(){if(!ff&&Xn!==null){ff=!0;var t=0;try{var e=Xn;Bi(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),Xn=null}catch(n){throw Xn!==null&&(Xn=Xn.slice(t+1)),Zg(Jh,Kn),n}finally{ff=!1}}}var vA=rs.ReactCurrentBatchConfig;function _n(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Mc=ai(null),$c=null,ks=null,Fc=null;function ey(){Fc=ks=$c=null}function ty(t){var e=Mc.current;Ie(Mc),t.type._context._currentValue=e}function oT(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function $s(t,e){$c=t,Fc=ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Cn=!0),t.firstContext=null)}function hn(t,e){if(Fc!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(Fc=t,e=1073741823),e={context:t,observedBits:e,next:null},ks===null){if($c===null)throw Error(N(308));ks=e,$c.dependencies={lanes:0,firstContext:e,responders:null}}else ks=ks.next=e;return t._currentValue}var Cr=!1;function ny(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function aT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ur(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vr(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function T0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ll(t,e,n,r){var i=t.updateQueue;Cr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;if(c!==null){c=c.updateQueue;var h=c.lastBaseUpdate;h!==o&&(h===null?c.firstBaseUpdate=u:h.next=u,c.lastBaseUpdate=l)}}if(s!==null){h=i.baseState,o=0,c=u=l=null;do{a=s.lane;var d=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:d,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var p=t,y=s;switch(a=e,d=n,y.tag){case 1:if(p=y.payload,typeof p=="function"){h=p.call(d,h,a);break e}h=p;break e;case 3:p.flags=p.flags&-4097|64;case 0:if(p=y.payload,a=typeof p=="function"?p.call(d,h,a):p,a==null)break e;h=Ne({},h,a);break e;case 2:Cr=!0}}s.callback!==null&&(t.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else d={eventTime:d,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=d,l=h):c=c.next=d,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,Hl|=o,t.lanes=o,t.memoizedState=h}}function S0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var lT=new zh.Component().refs;function Uc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zh={isMounted:function(t){return(t=t._reactInternals)?is(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Zt(),i=Br(t),s=Ur(r,i);s.payload=e,n!=null&&(s.callback=n),Vr(t,s),jr(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Zt(),i=Br(t),s=Ur(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),Vr(t,s),jr(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),r=Br(t),i=Ur(n,r);i.tag=2,e!=null&&(i.callback=e),Vr(t,i),jr(t,r,n)}};function I0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!sl(n,r)||!sl(i,s):!0}function uT(t,e,n){var r=!1,i=Jr,s=e.contextType;return typeof s=="object"&&s!==null?s=hn(s):(i=Gt(e)?Vi:Rt.current,r=e.contextTypes,s=(r=r!=null)?ro(t,i):Jr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function k0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zh.enqueueReplaceState(e,e.state,null)}function zp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=lT,ny(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=hn(s):(s=Gt(e)?Vi:Rt.current,i.context=ro(t,s)),ll(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Uc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zh.enqueueReplaceState(i,i.state,null),ll(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var Du=Array.isArray;function na(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===lT&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,t))}return t}function Lu(t,e){if(t.type!=="textarea")throw Error(N(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function cT(t){function e(f,m){if(t){var g=f.lastEffect;g!==null?(g.nextEffect=m,f.lastEffect=m):f.firstEffect=f.lastEffect=m,m.nextEffect=null,m.flags=8}}function n(f,m){if(!t)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function r(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function i(f,m){return f=ei(f,m),f.index=0,f.sibling=null,f}function s(f,m,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<m?(f.flags=2,m):g):(f.flags=2,m)):m}function o(f){return t&&f.alternate===null&&(f.flags=2),f}function a(f,m,g,w){return m===null||m.tag!==6?(m=vf(g,f.mode,w),m.return=f,m):(m=i(m,g),m.return=f,m)}function l(f,m,g,w){return m!==null&&m.elementType===g.type?(w=i(m,g.props),w.ref=na(f,m,g),w.return=f,w):(w=dc(g.type,g.key,g.props,null,f.mode,w),w.ref=na(f,m,g),w.return=f,w)}function u(f,m,g,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=_f(g,f.mode,w),m.return=f,m):(m=i(m,g.children||[]),m.return=f,m)}function c(f,m,g,w,C){return m===null||m.tag!==7?(m=Bs(g,f.mode,w,C),m.return=f,m):(m=i(m,g),m.return=f,m)}function h(f,m,g){if(typeof m=="string"||typeof m=="number")return m=vf(""+m,f.mode,g),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ya:return g=dc(m.type,m.key,m.props,null,f.mode,g),g.ref=na(f,null,m),g.return=f,g;case Ei:return m=_f(m,f.mode,g),m.return=f,m}if(Du(m)||Yo(m))return m=Bs(m,f.mode,g,null),m.return=f,m;Lu(f,m)}return null}function d(f,m,g,w){var C=m!==null?m.key:null;if(typeof g=="string"||typeof g=="number")return C!==null?null:a(f,m,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ya:return g.key===C?g.type===Tr?c(f,m,g.props.children,w,C):l(f,m,g,w):null;case Ei:return g.key===C?u(f,m,g,w):null}if(Du(g)||Yo(g))return C!==null?null:c(f,m,g,w,null);Lu(f,g)}return null}function p(f,m,g,w,C){if(typeof w=="string"||typeof w=="number")return f=f.get(g)||null,a(m,f,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ya:return f=f.get(w.key===null?g:w.key)||null,w.type===Tr?c(m,f,w.props.children,C,w.key):l(m,f,w,C);case Ei:return f=f.get(w.key===null?g:w.key)||null,u(m,f,w,C)}if(Du(w)||Yo(w))return f=f.get(g)||null,c(m,f,w,C,null);Lu(m,w)}return null}function y(f,m,g,w){for(var C=null,k=null,I=m,L=m=0,$=null;I!==null&&L<g.length;L++){I.index>L?($=I,I=null):$=I.sibling;var O=d(f,I,g[L],w);if(O===null){I===null&&(I=$);break}t&&I&&O.alternate===null&&e(f,I),m=s(O,m,L),k===null?C=O:k.sibling=O,k=O,I=$}if(L===g.length)return n(f,I),C;if(I===null){for(;L<g.length;L++)I=h(f,g[L],w),I!==null&&(m=s(I,m,L),k===null?C=I:k.sibling=I,k=I);return C}for(I=r(f,I);L<g.length;L++)$=p(I,f,L,g[L],w),$!==null&&(t&&$.alternate!==null&&I.delete($.key===null?L:$.key),m=s($,m,L),k===null?C=$:k.sibling=$,k=$);return t&&I.forEach(function(le){return e(f,le)}),C}function v(f,m,g,w){var C=Yo(g);if(typeof C!="function")throw Error(N(150));if(g=C.call(g),g==null)throw Error(N(151));for(var k=C=null,I=m,L=m=0,$=null,O=g.next();I!==null&&!O.done;L++,O=g.next()){I.index>L?($=I,I=null):$=I.sibling;var le=d(f,I,O.value,w);if(le===null){I===null&&(I=$);break}t&&I&&le.alternate===null&&e(f,I),m=s(le,m,L),k===null?C=le:k.sibling=le,k=le,I=$}if(O.done)return n(f,I),C;if(I===null){for(;!O.done;L++,O=g.next())O=h(f,O.value,w),O!==null&&(m=s(O,m,L),k===null?C=O:k.sibling=O,k=O);return C}for(I=r(f,I);!O.done;L++,O=g.next())O=p(I,f,L,O.value,w),O!==null&&(t&&O.alternate!==null&&I.delete(O.key===null?L:O.key),m=s(O,m,L),k===null?C=O:k.sibling=O,k=O);return t&&I.forEach(function(Be){return e(f,Be)}),C}return function(f,m,g,w){var C=typeof g=="object"&&g!==null&&g.type===Tr&&g.key===null;C&&(g=g.props.children);var k=typeof g=="object"&&g!==null;if(k)switch(g.$$typeof){case ya:e:{for(k=g.key,C=m;C!==null;){if(C.key===k){switch(C.tag){case 7:if(g.type===Tr){n(f,C.sibling),m=i(C,g.props.children),m.return=f,f=m;break e}break;default:if(C.elementType===g.type){n(f,C.sibling),m=i(C,g.props),m.ref=na(f,C,g),m.return=f,f=m;break e}}n(f,C);break}else e(f,C);C=C.sibling}g.type===Tr?(m=Bs(g.props.children,f.mode,w,g.key),m.return=f,f=m):(w=dc(g.type,g.key,g.props,null,f.mode,w),w.ref=na(f,m,g),w.return=f,f=w)}return o(f);case Ei:e:{for(C=g.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(f,m.sibling),m=i(m,g.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else e(f,m);m=m.sibling}m=_f(g,f.mode,w),m.return=f,f=m}return o(f)}if(typeof g=="string"||typeof g=="number")return g=""+g,m!==null&&m.tag===6?(n(f,m.sibling),m=i(m,g),m.return=f,f=m):(n(f,m),m=vf(g,f.mode,w),m.return=f,f=m),o(f);if(Du(g))return y(f,m,g,w);if(Yo(g))return v(f,m,g,w);if(k&&Lu(f,g),typeof g=="undefined"&&!C)switch(f.tag){case 1:case 22:case 0:case 11:case 15:throw Error(N(152,Ps(f.type)||"Component"))}return n(f,m)}}var Vc=cT(!0),hT=cT(!1),zl={},Bn=ai(zl),ul=ai(zl),cl=ai(zl);function Si(t){if(t===zl)throw Error(N(174));return t}function Hp(t,e){switch(Oe(cl,e),Oe(ul,t),Oe(Bn,zl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Np(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Np(e,t)}Ie(Bn),Oe(Bn,e)}function so(){Ie(Bn),Ie(ul),Ie(cl)}function x0(t){Si(cl.current);var e=Si(Bn.current),n=Np(e,t.type);e!==n&&(Oe(ul,t),Oe(Bn,n))}function ry(t){ul.current===t&&(Ie(Bn),Ie(ul))}var Pe=ai(0);function Bc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zn=null,Ar=null,jn=!1;function dT(t,e){var n=ln(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function N0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function Wp(t){if(jn){var e=Ar;if(e){var n=e;if(!N0(t,e)){if(e=Ms(n.nextSibling),!e||!N0(t,e)){t.flags=t.flags&-1025|2,jn=!1,Zn=t;return}dT(Zn,n)}Zn=t,Ar=Ms(e.firstChild)}else t.flags=t.flags&-1025|2,jn=!1,Zn=t}}function b0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Zn=t}function Mu(t){if(t!==Zn)return!1;if(!jn)return b0(t),jn=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!Up(e,t.memoizedProps))for(e=Ar;e;)dT(t,e),e=Ms(e.nextSibling);if(b0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ar=Ms(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ar=null}}else Ar=Zn?Ms(t.stateNode.nextSibling):null;return!0}function pf(){Ar=Zn=null,jn=!1}var Fs=[];function iy(){for(var t=0;t<Fs.length;t++)Fs[t]._workInProgressVersionPrimary=null;Fs.length=0}var $a=rs.ReactCurrentDispatcher,cn=rs.ReactCurrentBatchConfig,hl=0,Ue=null,vt=null,ct=null,jc=!1,Fa=!1;function jt(){throw Error(N(321))}function sy(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!an(t[n],e[n]))return!1;return!0}function oy(t,e,n,r,i,s){if(hl=s,Ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$a.current=t===null||t.memoizedState===null?wA:EA,t=n(r,i),Fa){s=0;do{if(Fa=!1,!(25>s))throw Error(N(301));s+=1,ct=vt=null,e.updateQueue=null,$a.current=CA,t=n(r,i)}while(Fa)}if($a.current=qc,e=vt!==null&&vt.next!==null,hl=0,ct=vt=Ue=null,jc=!1,e)throw Error(N(300));return t}function Ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?Ue.memoizedState=ct=t:ct=ct.next=t,ct}function ss(){if(vt===null){var t=Ue.alternate;t=t!==null?t.memoizedState:null}else t=vt.next;var e=ct===null?Ue.memoizedState:ct.next;if(e!==null)ct=e,vt=t;else{if(t===null)throw Error(N(310));vt=t,t={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},ct===null?Ue.memoizedState=ct=t:ct=ct.next=t}return ct}function Mn(t,e){return typeof e=="function"?e(t):e}function ra(t){var e=ss(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=vt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,l=i;do{var u=l.lane;if((hl&u)===u)a!==null&&(a=a.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===t?l.eagerState:t(r,l.action);else{var c={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,Ue.lanes|=u,Hl|=u}l=l.next}while(l!==null&&l!==i);a===null?s=r:a.next=o,an(r,e.memoizedState)||(Cn=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function ia(t){var e=ss(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);an(s,e.memoizedState)||(Cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function R0(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(hl&t)===t)&&(e._workInProgressVersionPrimary=r,Fs.push(e))),t)return n(e._source);throw Fs.push(e),Error(N(350))}function fT(t,e,n,r){var i=Ft;if(i===null)throw Error(N(349));var s=e._getVersion,o=s(e._source),a=$a.current,l=a.useState(function(){return R0(i,e,n)}),u=l[1],c=l[0];l=ct;var h=t.memoizedState,d=h.refs,p=d.getSnapshot,y=h.source;h=h.subscribe;var v=Ue;return t.memoizedState={refs:d,source:e,subscribe:r},a.useEffect(function(){d.getSnapshot=n,d.setSnapshot=u;var f=s(e._source);if(!an(o,f)){f=n(e._source),an(c,f)||(u(f),f=Br(v),i.mutableReadLanes|=f&i.pendingLanes),f=i.mutableReadLanes,i.entangledLanes|=f;for(var m=i.entanglements,g=f;0<g;){var w=31-Xr(g),C=1<<w;m[w]|=f,g&=~C}}},[n,e,r]),a.useEffect(function(){return r(e._source,function(){var f=d.getSnapshot,m=d.setSnapshot;try{m(f(e._source));var g=Br(v);i.mutableReadLanes|=g&i.pendingLanes}catch(w){m(function(){throw w})}})},[e,r]),an(p,n)&&an(y,e)&&an(h,r)||(t={pending:null,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:c},t.dispatch=u=uy.bind(null,Ue,t),l.queue=t,l.baseQueue=null,c=R0(i,e,n),l.memoizedState=l.baseState=c),c}function pT(t,e,n){var r=ss();return fT(r,t,e,n)}function sa(t){var e=Ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:t},t=t.dispatch=uy.bind(null,Ue,t),[e.memoizedState,t]}function zc(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ue.updateQueue,e===null?(e={lastEffect:null},Ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function A0(t){var e=Ii();return t={current:t},e.memoizedState=t}function Hc(){return ss().memoizedState}function qp(t,e,n,r){var i=Ii();Ue.flags|=t,i.memoizedState=zc(1|e,n,void 0,r===void 0?null:r)}function ay(t,e,n,r){var i=ss();r=r===void 0?null:r;var s=void 0;if(vt!==null){var o=vt.memoizedState;if(s=o.destroy,r!==null&&sy(r,o.deps)){zc(e,n,s,r);return}}Ue.flags|=t,i.memoizedState=zc(1|e,n,s,r)}function P0(t,e){return qp(516,4,t,e)}function Wc(t,e){return ay(516,4,t,e)}function mT(t,e){return ay(4,2,t,e)}function gT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yT(t,e,n){return n=n!=null?n.concat([t]):null,ay(4,2,gT.bind(null,e,t),n)}function ly(){}function vT(t,e){var n=ss();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sy(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function _T(t,e){var n=ss();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sy(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function _A(t,e){var n=io();Bi(98>n?98:n,function(){t(!0)}),Bi(97<n?97:n,function(){var r=cn.transition;cn.transition=1;try{t(!1),e()}finally{cn.transition=r}})}function uy(t,e,n){var r=Zt(),i=Br(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===Ue||o!==null&&o===Ue)Fa=jc=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,l=o(a,n);if(s.eagerReducer=o,s.eagerState=l,an(l,a))return}catch{}finally{}jr(t,i,r)}}var qc={readContext:hn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useOpaqueIdentifier:jt,unstable_isNewReconciler:!1},wA={readContext:hn,useCallback:function(t,e){return Ii().memoizedState=[t,e===void 0?null:e],t},useContext:hn,useEffect:P0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,qp(4,2,gT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return qp(4,2,t,e)},useMemo:function(t,e){var n=Ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ii();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=uy.bind(null,Ue,t),[r.memoizedState,t]},useRef:A0,useState:sa,useDebugValue:ly,useDeferredValue:function(t){var e=sa(t),n=e[0],r=e[1];return P0(function(){var i=cn.transition;cn.transition=1;try{r(t)}finally{cn.transition=i}},[t]),n},useTransition:function(){var t=sa(!1),e=t[0];return t=_A.bind(null,t[1]),A0(t),[t,e]},useMutableSource:function(t,e,n){var r=Ii();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},fT(r,t,e,n)},useOpaqueIdentifier:function(){if(jn){var t=!1,e=fA(function(){throw t||(t=!0,n("r:"+(hf++).toString(36))),Error(N(355))}),n=sa(e)[1];return(Ue.mode&2)===0&&(Ue.flags|=516,zc(5,function(){n("r:"+(hf++).toString(36))},void 0,null)),e}return e="r:"+(hf++).toString(36),sa(e),e},unstable_isNewReconciler:!1},EA={readContext:hn,useCallback:vT,useContext:hn,useEffect:Wc,useImperativeHandle:yT,useLayoutEffect:mT,useMemo:_T,useReducer:ra,useRef:Hc,useState:function(){return ra(Mn)},useDebugValue:ly,useDeferredValue:function(t){var e=ra(Mn),n=e[0],r=e[1];return Wc(function(){var i=cn.transition;cn.transition=1;try{r(t)}finally{cn.transition=i}},[t]),n},useTransition:function(){var t=ra(Mn)[0];return[Hc().current,t]},useMutableSource:pT,useOpaqueIdentifier:function(){return ra(Mn)[0]},unstable_isNewReconciler:!1},CA={readContext:hn,useCallback:vT,useContext:hn,useEffect:Wc,useImperativeHandle:yT,useLayoutEffect:mT,useMemo:_T,useReducer:ia,useRef:Hc,useState:function(){return ia(Mn)},useDebugValue:ly,useDeferredValue:function(t){var e=ia(Mn),n=e[0],r=e[1];return Wc(function(){var i=cn.transition;cn.transition=1;try{r(t)}finally{cn.transition=i}},[t]),n},useTransition:function(){var t=ia(Mn)[0];return[Hc().current,t]},useMutableSource:pT,useOpaqueIdentifier:function(){return ia(Mn)[0]},unstable_isNewReconciler:!1},TA=rs.ReactCurrentOwner,Cn=!1;function zt(t,e,n,r){e.child=t===null?hT(e,null,n,r):Vc(e,t.child,n,r)}function O0(t,e,n,r,i){n=n.render;var s=e.ref;return $s(e,i),r=oy(t,e,n,r,s,i),t!==null&&!Cn?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,er(t,e,i)):(e.flags|=1,zt(t,e,r,i),e.child)}function D0(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!my(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,wT(t,e,o,r,i,s)):(t=dc(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(i&s)===0&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:sl,n(i,r)&&t.ref===e.ref)?er(t,e,s):(e.flags|=1,t=ei(o,r),t.ref=e.ref,t.return=e,e.child=t)}function wT(t,e,n,r,i,s){if(t!==null&&sl(t.memoizedProps,r)&&t.ref===e.ref)if(Cn=!1,(s&i)!==0)(t.flags&16384)!==0&&(Cn=!0);else return e.lanes=t.lanes,er(t,e,s);return Kp(t,e,n,r,s)}function mf(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((e.mode&4)===0)e.memoizedState={baseLanes:0},Fu(e,n);else if((n&1073741824)!==0)e.memoizedState={baseLanes:0},Fu(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},Fu(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Fu(e,r);return zt(t,e,i,n),e.child}function ET(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Kp(t,e,n,r,i){var s=Gt(n)?Vi:Rt.current;return s=ro(e,s),$s(e,i),n=oy(t,e,n,r,s,i),t!==null&&!Cn?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,er(t,e,i)):(e.flags|=1,zt(t,e,n,i),e.child)}function L0(t,e,n,r,i){if(Gt(n)){var s=!0;ac(e)}else s=!1;if($s(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),uT(e,n,r),zp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=hn(u):(u=Gt(n)?Vi:Rt.current,u=ro(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&k0(e,o,r,u),Cr=!1;var d=e.memoizedState;o.state=d,ll(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Kt.current||Cr?(typeof c=="function"&&(Uc(e,n,c,r),l=e.memoizedState),(a=Cr||I0(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,aT(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:_n(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=hn(l):(l=Gt(n)?Vi:Rt.current,l=ro(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&k0(e,o,r,l),Cr=!1,d=e.memoizedState,o.state=d,ll(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Kt.current||Cr?(typeof p=="function"&&(Uc(e,n,p,r),y=e.memoizedState),(u=Cr||I0(e,n,u,r,d,y,l))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),r=!1)}return Gp(t,e,n,r,s,i)}function Gp(t,e,n,r,i,s){ET(t,e);var o=(e.flags&64)!==0;if(!r&&!o)return i&&w0(e,n,!1),er(t,e,s);r=e.stateNode,TA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Vc(e,t.child,null,s),e.child=Vc(e,null,a,s)):zt(t,e,a,s),e.memoizedState=r.state,i&&w0(e,n,!0),e.child}function M0(t){var e=t.stateNode;e.pendingContext?_0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_0(t,e.context,!1),Hp(t,e.containerInfo)}var $u={dehydrated:null,retryLane:0};function $0(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o;return(o=(e.flags&64)!==0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!==0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),Oe(Pe,i&1),t===null?(r.fallback!==void 0&&Wp(e),t=r.children,i=r.fallback,s?(t=F0(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=$u,t):typeof r.unstable_expectedLoadTime=="number"?(t=F0(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=$u,e.lanes=33554432,t):(n=gy({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=V0(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=$u,r):(n=U0(t,e,r.children,n),e.memoizedState=null,n):s?(r=V0(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=$u,r):(n=U0(t,e,r.children,n),e.memoizedState=null,n)}function F0(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},(i&2)===0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=gy(e,i,0,null),n=Bs(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function U0(t,e,n,r){var i=t.child;return t=i.sibling,n=ei(i,{mode:"visible",children:n}),(e.mode&2)===0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function V0(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)===0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=ei(o,a),t!==null?r=ei(t,r):(r=Bs(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function B0(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),oT(t.return,e)}function gf(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function j0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(zt(t,e,r.children,n),r=Pe.current,(r&2)!==0)r=r&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&B0(t,n);else if(t.tag===19)B0(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Oe(Pe,r),(e.mode&2)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Bc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),gf(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Bc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}gf(e,!0,n,null,s,e.lastEffect);break;case"together":gf(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hl|=e.lanes,(n&e.childLanes)!==0){if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,n=ei(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ei(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var CT,Qp,TT,ST;CT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qp=function(){};TT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Si(Bn.current);var s=null;switch(n){case"input":i=Cp(t,i),r=Cp(t,r),s=[];break;case"option":i=Ip(t,i),r=Ip(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=kp(t,i),r=kp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Oc)}bp(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ja.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ja.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ce("scroll",t),s||a===l||(s=[])):typeof l=="object"&&l!==null&&l.$$typeof===Mg?l.toString():(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ST=function(t,e,n,r){n!==r&&(e.flags|=4)};function oa(t,e){if(!jn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function SA(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Gt(e.type)&&Lc(),null;case 3:return so(),Ie(Kt),Ie(Rt),iy(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Mu(e)?e.flags|=4:r.hydrate||(e.flags|=256)),Qp(e),null;case 5:ry(e);var i=Si(cl.current);if(n=e.type,t!==null&&e.stateNode!=null)TT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(N(166));return null}if(t=Si(Bn.current),Mu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Rr]=e,r[Dc]=s,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(t=0;t<_a.length;t++)Ce(_a[t],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":j_(r,s),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ce("invalid",r);break;case"textarea":H_(r,s),Ce("invalid",r)}bp(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):Ja.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&Ce("scroll",r));switch(n){case"input":Ru(r),z_(r,s,!0);break;case"textarea":Ru(r),W_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Oc)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===xp.html&&(t=yC(n)),t===xp.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rr]=e,t[Dc]=r,CT(t,e,!1,!1),e.stateNode=t,o=Rp(n,r),n){case"dialog":Ce("cancel",t),Ce("close",t),i=r;break;case"iframe":case"object":case"embed":Ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<_a.length;i++)Ce(_a[i],t);i=r;break;case"source":Ce("error",t),i=r;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),i=r;break;case"details":Ce("toggle",t),i=r;break;case"input":j_(t,r),i=Cp(t,r),Ce("invalid",t);break;case"option":i=Ip(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),Ce("invalid",t);break;case"textarea":H_(t,r),i=kp(t,r),Ce("invalid",t);break;default:i=r}bp(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?wC(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vC(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Za(t,l):typeof l=="number"&&Za(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ja.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ce("scroll",t):l!=null&&Rg(t,s,l,o))}switch(n){case"input":Ru(t),z_(t,r,!1);break;case"textarea":Ru(t),W_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Os(t,!!r.multiple,s,!1):r.defaultValue!=null&&Os(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Oc)}XC(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)ST(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(N(166));n=Si(cl.current),Si(Bn.current),Mu(e)?(r=e.stateNode,n=e.memoizedProps,r[Rr]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rr]=e,e.stateNode=r)}return null;case 13:return Ie(Pe),r=e.memoizedState,(e.flags&64)!==0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&Mu(e):n=t.memoizedState!==null,r&&!n&&(e.mode&2)!==0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(Pe.current&1)!==0?dt===0&&(dt=3):((dt===0||dt===3)&&(dt=4),Ft===null||(Hl&134217727)===0&&(No&134217727)===0||Us(Ft,kt))),(r||n)&&(e.flags|=4),null);case 4:return so(),Qp(e),t===null&&GC(e.stateNode.containerInfo),null;case 10:return ty(e),null;case 17:return Gt(e.type)&&Lc(),null;case 19:if(Ie(Pe),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!==0,o=r.rendering,o===null)if(s)oa(r,!1);else{if(dt!==0||t!==null&&(t.flags&64)!==0)for(t=e.child;t!==null;){if(o=Bc(t),o!==null){for(e.flags|=64,oa(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Oe(Pe,Pe.current&1|2),e.child}t=t.sibling}r.tail!==null&&St()>tm&&(e.flags|=64,s=!0,oa(r,!1),e.lanes=33554432)}else{if(!s)if(t=Bc(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oa(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!jn)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*St()-r.renderingStartTime>tm&&n!==1073741824&&(e.flags|=64,s=!0,oa(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=St(),n.sibling=null,e=Pe.current,Oe(Pe,s?e&1|2:e&1),n):null;case 23:case 24:return py(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(N(156,e.tag))}function IA(t){switch(t.tag){case 1:Gt(t.type)&&Lc();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(so(),Ie(Kt),Ie(Rt),iy(),e=t.flags,(e&64)!==0)throw Error(N(285));return t.flags=e&-4097|64,t;case 5:return ry(t),null;case 13:return Ie(Pe),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return Ie(Pe),null;case 4:return so(),null;case 10:return ty(t),null;case 23:case 24:return py(),null;default:return null}}function cy(t,e){try{var n="",r=e;do n+=sR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function Yp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kA=typeof WeakMap=="function"?WeakMap:Map;function IT(t,e,n){n=Ur(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Gc||(Gc=!0,nm=r),Yp(t,e)},n}function kT(t,e,n){n=Ur(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return Yp(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this),Yp(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var xA=typeof WeakSet=="function"?WeakSet:Set;function z0(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){zr(t,n)}else e.current=null}function NA(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:_n(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&Xg(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(N(163))}function bA(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)===3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(LT(n,t),$A(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:_n(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&S0(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}S0(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&XC(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&RC(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(N(163))}function H0(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=_C("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function W0(t,e){if(Oi&&typeof Oi.onCommitFiberUnmount=="function")try{Oi.onCommitFiberUnmount(Jg,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!==0)LT(e,n);else{r=e;try{i()}catch(s){zr(r,s)}}n=n.next}while(n!==t)}break;case 1:if(z0(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){zr(e,s)}break;case 5:z0(e);break;case 4:xT(t,e)}}function q0(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function K0(t){return t.tag===5||t.tag===3||t.tag===4}function G0(t){e:{for(var e=t.return;e!==null;){if(K0(e))break e;e=e.return}throw Error(N(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(N(161))}n.flags&16&&(Za(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||K0(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Xp(t,n,e):Jp(t,n,e)}function Xp(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Oc));else if(r!==4&&(t=t.child,t!==null))for(Xp(t,e,n),t=t.sibling;t!==null;)Xp(t,e,n),t=t.sibling}function Jp(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Jp(t,e,n),t=t.sibling;t!==null;)Jp(t,e,n),t=t.sibling}function xT(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(N(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,l=a;;)if(W0(o,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(W0(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function yf(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[Dc]=r,t==="input"&&r.type==="radio"&&r.name!=null&&mC(n,r),Rp(t,i),e=Rp(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?wC(n,a):o==="dangerouslySetInnerHTML"?vC(n,a):o==="children"?Za(n,a):Rg(n,o,a,e)}switch(t){case"input":Tp(n,r);break;case"textarea":gC(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?Os(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?Os(n,!!r.multiple,r.defaultValue,!0):Os(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(N(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,RC(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(fy=St(),H0(e.child,!0)),Q0(e);return;case 19:Q0(e);return;case 17:return;case 23:case 24:H0(e,e.memoizedState!==null);return}throw Error(N(163))}function Q0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xA),e.forEach(function(r){var i=VA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function RA(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var AA=Math.ceil,Kc=rs.ReactCurrentDispatcher,hy=rs.ReactCurrentOwner,J=0,Ft=null,Ge=null,kt=0,ji=0,Zp=ai(0),dt=0,ed=null,xo=0,Hl=0,No=0,dy=0,em=null,fy=0,tm=1/0;function bo(){tm=St()+500}var F=null,Gc=!1,nm=null,$n=null,Zr=!1,Ua=null,wa=90,rm=[],im=[],or=null,Va=0,sm=null,uc=-1,Jn=0,cc=0,Ba=null,hc=!1;function Zt(){return(J&48)!==0?St():uc!==-1?uc:uc=St()}function Br(t){if(t=t.mode,(t&2)===0)return 1;if((t&4)===0)return io()===99?1:2;if(Jn===0&&(Jn=xo),vA.transition!==0){cc!==0&&(cc=em!==null?em.pendingLanes:0),t=Jn;var e=4186112&~cc;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=io(),(J&4)!==0&&t===98?t=Ac(12,Jn):(t=ER(t),t=Ac(t,Jn)),t}function jr(t,e,n){if(50<Va)throw Va=0,sm=null,Error(N(185));if(t=td(t,e),t===null)return null;Kh(t,e,n),t===Ft&&(No|=e,dt===4&&Us(t,kt));var r=io();e===1?(J&8)!==0&&(J&48)===0?om(t):(dn(t,n),J===0&&(bo(),Kn())):((J&4)===0||r!==98&&r!==99||(or===null?or=new Set([t]):or.add(t)),dn(t,n)),em=t}function td(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function dn(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Xr(o),l=1<<a,u=s[a];if(u===-1){if((l&r)===0||(l&i)!==0){u=e,ys(l);var c=we;s[a]=10<=c?u+250:6<=c?u+5e3:-1}}else u<=e&&(t.expiredLanes|=l);o&=~l}if(r=rl(t,t===Ft?kt:0),e=we,r===0)n!==null&&(n!==df&&Bp(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==df&&Bp(n)}e===15?(n=om.bind(null,t),Xn===null?(Xn=[n],lc=Zg(Jh,sT)):Xn.push(n),n=df):e===14?n=al(99,om.bind(null,t)):(n=CR(e),n=al(n,NT.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function NT(t){if(uc=-1,cc=Jn=0,(J&48)!==0)throw Error(N(327));var e=t.callbackNode;if(li()&&t.callbackNode!==e)return null;var n=rl(t,t===Ft?kt:0);if(n===0)return null;var r=n,i=J;J|=16;var s=PT();(Ft!==t||kt!==r)&&(bo(),Vs(t,r));do try{DA();break}catch(a){AT(t,a)}while(1);if(ey(),Kc.current=s,J=i,Ge!==null?r=0:(Ft=null,kt=0,r=dt),(xo&No)!==0)Vs(t,0);else if(r!==0){if(r===2&&(J|=64,t.hydrate&&(t.hydrate=!1,Xg(t.containerInfo)),n=$C(t),n!==0&&(r=Ea(t,n))),r===1)throw e=ed,Vs(t,0),Us(t,n),dn(t,St()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(N(345));case 2:mi(t);break;case 3:if(Us(t,n),(n&62914560)===n&&(r=fy+500-St(),10<r)){if(rl(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){Zt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=g0(mi.bind(null,t),r);break}mi(t);break;case 4:if(Us(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-Xr(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=St()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*AA(n/1960))-n,10<n){t.timeoutHandle=g0(mi.bind(null,t),n);break}mi(t);break;case 5:mi(t);break;default:throw Error(N(329))}}return dn(t,St()),t.callbackNode===e?NT.bind(null,t):null}function Us(t,e){for(e&=~dy,e&=~No,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xr(e),r=1<<n;t[n]=-1,e&=~r}}function om(t){if((J&48)!==0)throw Error(N(327));if(li(),t===Ft&&(t.expiredLanes&kt)!==0){var e=kt,n=Ea(t,e);(xo&No)!==0&&(e=rl(t,e),n=Ea(t,e))}else e=rl(t,0),n=Ea(t,e);if(t.tag!==0&&n===2&&(J|=64,t.hydrate&&(t.hydrate=!1,Xg(t.containerInfo)),e=$C(t),e!==0&&(n=Ea(t,e))),n===1)throw n=ed,Vs(t,0),Us(t,e),dn(t,St()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,mi(t),dn(t,St()),null}function PA(){if(or!==null){var t=or;or=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,dn(e,St())})}Kn()}function bT(t,e){var n=J;J|=1;try{return t(e)}finally{J=n,J===0&&(bo(),Kn())}}function RT(t,e){var n=J;J&=-2,J|=8;try{return t(e)}finally{J=n,J===0&&(bo(),Kn())}}function Fu(t,e){Oe(Zp,ji),ji|=e,xo|=e}function py(){ji=Zp.current,Ie(Zp)}function Vs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dA(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Lc();break;case 3:so(),Ie(Kt),Ie(Rt),iy();break;case 5:ry(r);break;case 4:so();break;case 13:Ie(Pe);break;case 19:Ie(Pe);break;case 10:ty(r);break;case 23:case 24:py()}n=n.return}Ft=t,Ge=ei(t.current,null),kt=ji=xo=e,dt=0,ed=null,dy=No=Hl=0}function AT(t,e){do{var n=Ge;try{if(ey(),$a.current=qc,jc){for(var r=Ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}jc=!1}if(hl=0,ct=vt=Ue=null,Fa=!1,hy.current=null,n===null||n.return===null){dt=1,ed=e,Ge=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=kt,a.flags|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l;if((a.mode&2)===0){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var h=(Pe.current&1)!==0,d=o;do{var p;if(p=d.tag===13){var y=d.memoizedState;if(y!==null)p=y.dehydrated!==null;else{var v=d.memoizedProps;p=v.fallback===void 0?!1:v.unstable_avoidThisFallback!==!0?!0:!h}}if(p){var f=d.updateQueue;if(f===null){var m=new Set;m.add(u),d.updateQueue=m}else f.add(u);if((d.mode&2)===0){if(d.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var g=Ur(-1,1);g.tag=2,Vr(a,g)}a.lanes|=1;break e}l=void 0,a=e;var w=s.pingCache;if(w===null?(w=s.pingCache=new kA,l=new Set,w.set(u,l)):(l=w.get(u),l===void 0&&(l=new Set,w.set(u,l))),!l.has(a)){l.add(a);var C=UA.bind(null,s,u,a);u.then(C,C)}d.flags|=4096,d.lanes=e;break e}d=d.return}while(d!==null);l=Error((Ps(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}dt!==5&&(dt=2),l=cy(l,a),d=o;do{switch(d.tag){case 3:s=l,d.flags|=4096,e&=-e,d.lanes|=e;var k=IT(d,s,e);T0(d,k);break e;case 1:s=l;var I=d.type,L=d.stateNode;if((d.flags&64)===0&&(typeof I.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&($n===null||!$n.has(L)))){d.flags|=4096,e&=-e,d.lanes|=e;var $=kT(d,s,e);T0(d,$);break e}}d=d.return}while(d!==null)}DT(n)}catch(O){e=O,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(1)}function PT(){var t=Kc.current;return Kc.current=qc,t===null?qc:t}function Ea(t,e){var n=J;J|=16;var r=PT();Ft===t&&kt===e||Vs(t,e);do try{OA();break}catch(i){AT(t,i)}while(1);if(ey(),J=n,Kc.current=r,Ge!==null)throw Error(N(261));return Ft=null,kt=0,dt}function OA(){for(;Ge!==null;)OT(Ge)}function DA(){for(;Ge!==null&&!mA();)OT(Ge)}function OT(t){var e=MT(t.alternate,t,ji);t.memoizedProps=t.pendingProps,e===null?DT(t):Ge=e,hy.current=null}function DT(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)===0){if(n=SA(n,e,ji),n!==null){Ge=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(ji&1073741824)!==0||(n.mode&4)===0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&(t.flags&2048)===0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=IA(e),n!==null){n.flags&=2047,Ge=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){Ge=e;return}Ge=e=t}while(e!==null);dt===0&&(dt=5)}function mi(t){var e=io();return Bi(99,LA.bind(null,t,e)),null}function LA(t,e){do li();while(Ua!==null);if((J&48)!==0)throw Error(N(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(N(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var l=31-Xr(s),u=1<<l;i[l]=0,o[l]=-1,a[l]=-1,s&=~u}if(or!==null&&(r&24)===0&&or.has(t)&&or.delete(t),t===Ft&&(Ge=Ft=null,kt=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=J,J|=32,hy.current=null,uf=ic,o=u0(),Mp(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(u=a.getSelection&&a.getSelection())&&u.rangeCount!==0){a=u.anchorNode,s=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var c=0,h=-1,d=-1,p=0,y=0,v=o,f=null;t:for(;;){for(var m;v!==a||s!==0&&v.nodeType!==3||(h=c+s),v!==l||u!==0&&v.nodeType!==3||(d=c+u),v.nodeType===3&&(c+=v.nodeValue.length),(m=v.firstChild)!==null;)f=v,v=m;for(;;){if(v===o)break t;if(f===a&&++p===s&&(h=c),f===l&&++y===u&&(d=c),(m=v.nextSibling)!==null)break;v=f,f=v.parentNode}v=m}a=h===-1||d===-1?null:{start:h,end:d}}else a=null;a=a||{start:0,end:0}}else a=null;cf={focusedElem:o,selectionRange:a},ic=!1,Ba=null,hc=!1,F=r;do try{MA()}catch(O){if(F===null)throw Error(N(330));zr(F,O),F=F.nextEffect}while(F!==null);Ba=null,F=r;do try{for(o=t;F!==null;){var g=F.flags;if(g&16&&Za(F.stateNode,""),g&128){var w=F.alternate;if(w!==null){var C=w.ref;C!==null&&(typeof C=="function"?C(null):C.current=null)}}switch(g&1038){case 2:G0(F),F.flags&=-3;break;case 6:G0(F),F.flags&=-3,yf(F.alternate,F);break;case 1024:F.flags&=-1025;break;case 1028:F.flags&=-1025,yf(F.alternate,F);break;case 4:yf(F.alternate,F);break;case 8:a=F,xT(o,a);var k=a.alternate;q0(a),k!==null&&q0(k)}F=F.nextEffect}}catch(O){if(F===null)throw Error(N(330));zr(F,O),F=F.nextEffect}while(F!==null);if(C=cf,w=u0(),g=C.focusedElem,o=C.selectionRange,w!==g&&g&&g.ownerDocument&&WC(g.ownerDocument.documentElement,g)){for(o!==null&&Mp(g)&&(w=o.start,C=o.end,C===void 0&&(C=w),"selectionStart"in g?(g.selectionStart=w,g.selectionEnd=Math.min(C,g.value.length)):(C=(w=g.ownerDocument||document)&&w.defaultView||window,C.getSelection&&(C=C.getSelection(),a=g.textContent.length,k=Math.min(o.start,a),o=o.end===void 0?k:Math.min(o.end,a),!C.extend&&k>o&&(a=o,o=k,k=a),a=l0(g,k),s=l0(g,o),a&&s&&(C.rangeCount!==1||C.anchorNode!==a.node||C.anchorOffset!==a.offset||C.focusNode!==s.node||C.focusOffset!==s.offset)&&(w=w.createRange(),w.setStart(a.node,a.offset),C.removeAllRanges(),k>o?(C.addRange(w),C.extend(s.node,s.offset)):(w.setEnd(s.node,s.offset),C.addRange(w)))))),w=[],C=g;C=C.parentNode;)C.nodeType===1&&w.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<w.length;g++)C=w[g],C.element.scrollLeft=C.left,C.element.scrollTop=C.top}ic=!!uf,cf=uf=null,t.current=n,F=r;do try{for(g=t;F!==null;){var I=F.flags;if(I&36&&bA(g,F.alternate,F),I&128){w=void 0;var L=F.ref;if(L!==null){var $=F.stateNode;switch(F.tag){case 5:w=$;break;default:w=$}typeof L=="function"?L(w):L.current=w}}F=F.nextEffect}}catch(O){if(F===null)throw Error(N(330));zr(F,O),F=F.nextEffect}while(F!==null);F=null,yA(),J=i}else t.current=n;if(Zr)Zr=!1,Ua=t,wa=e;else for(F=r;F!==null;)e=F.nextEffect,F.nextEffect=null,F.flags&8&&(I=F,I.sibling=null,I.stateNode=null),F=e;if(r=t.pendingLanes,r===0&&($n=null),r===1?t===sm?Va++:(Va=0,sm=t):Va=0,n=n.stateNode,Oi&&typeof Oi.onCommitFiberRoot=="function")try{Oi.onCommitFiberRoot(Jg,n,void 0,(n.current.flags&64)===64)}catch{}if(dn(t,St()),Gc)throw Gc=!1,t=nm,nm=null,t;return(J&8)!==0||Kn(),null}function MA(){for(;F!==null;){var t=F.alternate;hc||Ba===null||((F.flags&8)!==0?G_(F,Ba)&&(hc=!0):F.tag===13&&RA(t,F)&&G_(F,Ba)&&(hc=!0));var e=F.flags;(e&256)!==0&&NA(t,F),(e&512)===0||Zr||(Zr=!0,al(97,function(){return li(),null})),F=F.nextEffect}}function li(){if(wa!==90){var t=97<wa?97:wa;return wa=90,Bi(t,FA)}return!1}function $A(t,e){rm.push(e,t),Zr||(Zr=!0,al(97,function(){return li(),null}))}function LT(t,e){im.push(e,t),Zr||(Zr=!0,al(97,function(){return li(),null}))}function FA(){if(Ua===null)return!1;var t=Ua;if(Ua=null,(J&48)!==0)throw Error(N(331));var e=J;J|=32;var n=im;im=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(l){if(s===null)throw Error(N(330));zr(s,l)}}for(n=rm,rm=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(l){if(s===null)throw Error(N(330));zr(s,l)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return J=e,Kn(),!0}function Y0(t,e,n){e=cy(n,e),e=IT(t,e,1),Vr(t,e),e=Zt(),t=td(t,1),t!==null&&(Kh(t,1,e),dn(t,e))}function zr(t,e){if(t.tag===3)Y0(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){Y0(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){t=cy(e,t);var i=kT(n,t,1);if(Vr(n,i),i=Zt(),n=td(n,1),n!==null)Kh(n,1,i),dn(n,i);else if(typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function UA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(kt&n)===n&&(dt===4||dt===3&&(kt&62914560)===kt&&500>St()-fy?Vs(t,0):dy|=n),dn(t,e)}function VA(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)===0?e=1:(e&4)===0?e=io()===99?1:2:(Jn===0&&(Jn=xo),e=vs(62914560&~Jn),e===0&&(e=4194304))),n=Zt(),t=td(t,e),t!==null&&(Kh(t,e,n),dn(t,n))}var MT;MT=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||Kt.current)Cn=!0;else if((n&r)!==0)Cn=(t.flags&16384)!==0;else{switch(Cn=!1,e.tag){case 3:M0(e),pf();break;case 5:x0(e);break;case 1:Gt(e.type)&&ac(e);break;case 4:Hp(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;Oe(Mc,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!==0?$0(t,e,n):(Oe(Pe,Pe.current&1),e=er(t,e,n),e!==null?e.sibling:null);Oe(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&64)!==0){if(r)return j0(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Oe(Pe,Pe.current),r)break;return null;case 23:case 24:return e.lanes=0,mf(t,e,n)}return er(t,e,n)}else Cn=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=ro(e,Rt.current),$s(e,n),i=oy(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,Gt(r)){var s=!0;ac(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ny(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&Uc(e,r,o,t),i.updater=Zh,e.stateNode=i,i._reactInternals=e,zp(e,r,t,n),e=Gp(null,e,r,!0,s,n)}else e.tag=0,zt(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=jA(i),t=_n(i,t),s){case 0:e=Kp(null,e,i,t,n);break e;case 1:e=L0(null,e,i,t,n);break e;case 11:e=O0(null,e,i,t,n);break e;case 14:e=D0(null,e,i,_n(i.type,t),r,n);break e}throw Error(N(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),Kp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),L0(t,e,r,i,n);case 3:if(M0(e),r=e.updateQueue,t===null||r===null)throw Error(N(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,aT(t,e),ll(e,r,null,n),r=e.memoizedState.element,r===i)pf(),e=er(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(Ar=Ms(e.stateNode.containerInfo.firstChild),Zn=e,s=jn=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],Fs.push(s);for(n=hT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else zt(t,e,r,n),pf();e=e.child}return e;case 5:return x0(e),t===null&&Wp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Up(r,i)?o=null:s!==null&&Up(r,s)&&(e.flags|=16),ET(t,e),zt(t,e,o,n),e.child;case 6:return t===null&&Wp(e),null;case 13:return $0(t,e,n);case 4:return Hp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Vc(e,null,r,n):zt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),O0(t,e,r,i,n);case 7:return zt(t,e,e.pendingProps,n),e.child;case 8:return zt(t,e,e.pendingProps.children,n),e.child;case 12:return zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(Oe(Mc,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=an(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!Kt.current){e=er(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var u=l.firstContext;u!==null;){if(u.context===r&&(u.observedBits&s)!==0){a.tag===1&&(u=Ur(-1,n&-n),u.tag=2,Vr(a,u)),a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),oT(a.return,n),l.lanes|=n;break}u=u.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}zt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,$s(e,n),i=hn(i,s.unstable_observedBits),r=r(i),e.flags|=1,zt(t,e,r,n),e.child;case 14:return i=e.type,s=_n(i,e.pendingProps),s=_n(i.type,s),D0(t,e,i,s,r,n);case 15:return wT(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,Gt(r)?(t=!0,ac(e)):t=!1,$s(e,n),uT(e,r,i),zp(e,r,i,n),Gp(null,e,r,!0,t,n);case 19:return j0(t,e,n);case 23:return mf(t,e,n);case 24:return mf(t,e,n)}throw Error(N(156,e.tag))};function BA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(t,e,n,r){return new BA(t,e,n,r)}function my(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jA(t){if(typeof t=="function")return my(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hh)return 11;if(t===Wh)return 14}return 2}function ei(t,e){var n=t.alternate;return n===null?(n=ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function dc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")my(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Tr:return Bs(n.children,i,s,e);case dC:o=8,i|=16;break;case Ag:o=8,i|=1;break;case Ra:return t=ln(12,n,e,i|8),t.elementType=Ra,t.type=Ra,t.lanes=s,t;case Aa:return t=ln(13,n,e,i),t.type=Aa,t.elementType=Aa,t.lanes=s,t;case xc:return t=ln(19,n,e,i),t.elementType=xc,t.lanes=s,t;case $g:return gy(n,i,s,e);case Ep:return t=ln(24,n,e,i),t.elementType=Ep,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Pg:o=10;break e;case Og:o=9;break e;case Hh:o=11;break e;case Wh:o=14;break e;case Dg:o=16,r=null;break e;case Lg:o=22;break e}throw Error(N(130,t==null?t:typeof t,""))}return e=ln(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Bs(t,e,n,r){return t=ln(7,t,r,e),t.lanes=n,t}function gy(t,e,n,r){return t=ln(23,t,r,e),t.elementType=$g,t.lanes=n,t}function vf(t,e,n){return t=ln(6,t,null,e),t.lanes=n,t}function _f(t,e,n){return e=ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zA(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=tf(0),this.expirationTimes=tf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tf(0),this.mutableSourceEagerHydrationData=null}function HA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ei,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Qc(t,e,n,r){var i=e.current,s=Zt(),o=Br(i);e:if(n){n=n._reactInternals;t:{if(is(n)!==n||n.tag!==1)throw Error(N(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(Gt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(N(171))}if(n.tag===1){var l=n.type;if(Gt(l)){n=ZC(n,l,a);break e}}n=a}else n=Jr;return e.context===null?e.context=n:e.pendingContext=n,e=Ur(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),Vr(i,e),jr(i,o,s),o}function wf(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function X0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yy(t,e){X0(t,e),(t=t.alternate)&&X0(t,e)}function WA(){return null}function vy(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new zA(t,e,n!=null&&n.hydrate===!0),e=ln(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,ny(e),t[ko]=n.current,GC(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}vy.prototype.render=function(t){Qc(t,this._internalRoot,null,null)};vy.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;Qc(null,t,null,function(){e[ko]=null})};function Wl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qA(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new vy(t,0,e?{hydrate:!0}:void 0)}function nd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var u=wf(o);a.call(u)}}Qc(e,o,t,i)}else{if(s=n._reactRootContainer=qA(n,r),o=s._internalRoot,typeof i=="function"){var l=i;i=function(){var u=wf(o);l.call(u)}}RT(function(){Qc(e,o,t,i)})}return wf(o)}xC=function(t){if(t.tag===13){var e=Zt();jr(t,4,e),yy(t,4)}};jg=function(t){if(t.tag===13){var e=Zt();jr(t,67108864,e),yy(t,67108864)}};NC=function(t){if(t.tag===13){var e=Zt(),n=Br(t);jr(t,n,e),yy(t,n)}};bC=function(t,e){return e()};Ap=function(t,e,n){switch(e){case"input":if(Tp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Xh(r);if(!i)throw Error(N(90));pC(r),Tp(r,i)}}}break;case"textarea":gC(t,n);break;case"select":e=n.value,e!=null&&Os(t,!!n.multiple,e,!1)}};Ug=bT;TC=function(t,e,n,r,i){var s=J;J|=4;try{return Bi(98,t.bind(null,e,n,r,i))}finally{J=s,J===0&&(bo(),Kn())}};Vg=function(){(J&49)===0&&(PA(),li())};SC=function(t,e){var n=J;J|=2;try{return t(e)}finally{J=n,J===0&&(bo(),Kn())}};function $T(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wl(e))throw Error(N(200));return HA(t,e,null,n)}var KA={Events:[jl,Ss,Xh,EC,CC,li,{current:!1}]},aa={findFiberByHostInstance:Ti,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},GA={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rs.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=kC(t),t===null?null:t.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||WA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uu.isDisabled&&Uu.supportsFiber)try{Jg=Uu.inject(GA),Oi=Uu}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KA;pn.createPortal=$T;pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):Error(N(268,Object.keys(t)));return t=kC(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t,e){var n=J;if((n&48)!==0)return t(e);J|=1;try{if(t)return Bi(99,t.bind(null,e))}finally{J=n,Kn()}};pn.hydrate=function(t,e,n){if(!Wl(e))throw Error(N(200));return nd(null,t,e,!0,n)};pn.render=function(t,e,n){if(!Wl(e))throw Error(N(200));return nd(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!Wl(t))throw Error(N(40));return t._reactRootContainer?(RT(function(){nd(null,null,t,!1,function(){t._reactRootContainer=null,t[ko]=null})}),!0):!1};pn.unstable_batchedUpdates=bT;pn.unstable_createPortal=function(t,e){return $T(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};pn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Wl(n))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return nd(t,e,n,!1,r)};pn.version="17.0.2";function FT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(FT)}catch(t){console.error(t)}}FT(),xg.exports=pn;var QA=xg.exports;/**
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
 */const UT={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const A=function(t,e){if(!t)throw Ro(e)},Ro=function(t){return new Error("Firebase Database ("+UT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const VT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},YA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(VT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new XA;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BT=function(t){const e=VT(t);return _y.encodeByteArray(e,!0)},Yc=function(t){return BT(t).replace(/\./g,"")},Xc=function(t){try{return _y.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function JA(t){return jT(void 0,t)}function jT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ZA(n)||(t[n]=jT(t[n],e[n]));return t}function ZA(t){return t!=="__proto__"}/**
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
 */function eP(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tP=()=>eP().__FIREBASE_DEFAULTS__,nP=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rP=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xc(t[1]);return e&&JSON.parse(e)},wy=()=>{try{return tP()||nP()||rP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zT=t=>{var e,n;return(n=(e=wy())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},iP=t=>{const e=zT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},HT=()=>{var t;return(t=wy())===null||t===void 0?void 0:t.config},WT=t=>{var e;return(e=wy())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ey{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function sP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Yc(JSON.stringify(n)),Yc(JSON.stringify(o)),a].join(".")}/**
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
 */function At(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cy(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function oP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aP(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function KT(){return UT.NODE_ADMIN===!0}function GT(){try{return typeof indexedDB=="object"}catch{return!1}}function lP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const uP="FirebaseError";class Qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=uP,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,os.prototype.create)}}class os{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?cP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Qt(i,a,r)}}function cP(t,e){return t.replace(hP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const hP=/\{\$([^}]+)}/g;/**
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
 */function dl(t){return JSON.parse(t)}function it(t){return JSON.stringify(t)}/**
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
 */const QT=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=dl(Xc(s[0])||""),n=dl(Xc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},dP=function(t){const e=QT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},fP=function(t){const e=QT(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function gr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function oo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function am(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Zc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(J0(s)&&J0(o)){if(!Zc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function J0(t){return t!==null&&typeof t=="object"}/**
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
 */function Ao(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ca(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ta(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class pP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):h<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function mP(t,e){const n=new gP(t,e);return n.subscribe.bind(n)}class gP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ef),i.error===void 0&&(i.error=Ef),i.complete===void 0&&(i.complete=Ef);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ef(){}function YT(t,e){return`${t} failed: ${e} argument `}/**
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
 */const vP=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,A(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},rd=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const _P=1e3,wP=2,EP=4*60*60*1e3,CP=.5;function TP(t,e=_P,n=wP){const r=e*Math.pow(n,t),i=Math.round(CP*r*(Math.random()-.5)*2);return Math.min(EP,r+i)}/**
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
 */function gt(t){return t&&t._delegate?t._delegate:t}class tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gi="[DEFAULT]";/**
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
 */class SP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ey;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kP(e))try{this.getOrInitializeService({instanceIdentifier:gi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=gi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gi){return this.instances.has(e)}getOptions(e=gi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:IP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gi){return this.component?this.component.multipleInstances?e:gi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function IP(t){return t===gi?void 0:t}function kP(t){return t.instantiationMode==="EAGER"}/**
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
 */class xP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new SP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const NP={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},bP=ae.INFO,RP={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},AP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=RP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ql{constructor(e){this.name=e,this._logLevel=bP,this._logHandler=AP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const PP=(t,e)=>e.some(n=>t instanceof n);let Z0,ew;function OP(){return Z0||(Z0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DP(){return ew||(ew=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const XT=new WeakMap,lm=new WeakMap,JT=new WeakMap,Cf=new WeakMap,Ty=new WeakMap;function LP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&XT.set(n,t)}).catch(()=>{}),Ty.set(e,t),e}function MP(t){if(lm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});lm.set(t,e)}let um={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||JT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $P(t){um=t(um)}function FP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tf(this),e,...n);return JT.set(r,e.sort?e.sort():[e]),Hr(r)}:DP().includes(t)?function(...e){return t.apply(Tf(this),e),Hr(XT.get(this))}:function(...e){return Hr(t.apply(Tf(this),e))}}function UP(t){return typeof t=="function"?FP(t):(t instanceof IDBTransaction&&MP(t),PP(t,OP())?new Proxy(t,um):t)}function Hr(t){if(t instanceof IDBRequest)return LP(t);if(Cf.has(t))return Cf.get(t);const e=UP(t);return e!==t&&(Cf.set(t,e),Ty.set(e,t)),e}const Tf=t=>Ty.get(t);function VP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Hr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Hr(o.result),l.oldVersion,l.newVersion,Hr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const BP=["get","getKey","getAll","getAllKeys","count"],jP=["put","add","delete","clear"],Sf=new Map;function tw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sf.get(e))return Sf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||BP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Sf.set(e,s),s}$P(t=>({...t,get:(e,n,r)=>tw(e,n)||t.get(e,n,r),has:(e,n)=>!!tw(e,n)||t.has(e,n)}));/**
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
 */class zP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cm="@firebase/app",nw="0.9.12";/**
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
 */const zi=new ql("@firebase/app"),WP="@firebase/app-compat",qP="@firebase/analytics-compat",KP="@firebase/analytics",GP="@firebase/app-check-compat",QP="@firebase/app-check",YP="@firebase/auth",XP="@firebase/auth-compat",JP="@firebase/database",ZP="@firebase/database-compat",eO="@firebase/functions",tO="@firebase/functions-compat",nO="@firebase/installations",rO="@firebase/installations-compat",iO="@firebase/messaging",sO="@firebase/messaging-compat",oO="@firebase/performance",aO="@firebase/performance-compat",lO="@firebase/remote-config",uO="@firebase/remote-config-compat",cO="@firebase/storage",hO="@firebase/storage-compat",dO="@firebase/firestore",fO="@firebase/firestore-compat",pO="firebase",mO="9.22.2";/**
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
 */const hm="[DEFAULT]",gO={[cm]:"fire-core",[WP]:"fire-core-compat",[KP]:"fire-analytics",[qP]:"fire-analytics-compat",[QP]:"fire-app-check",[GP]:"fire-app-check-compat",[YP]:"fire-auth",[XP]:"fire-auth-compat",[JP]:"fire-rtdb",[ZP]:"fire-rtdb-compat",[eO]:"fire-fn",[tO]:"fire-fn-compat",[nO]:"fire-iid",[rO]:"fire-iid-compat",[iO]:"fire-fcm",[sO]:"fire-fcm-compat",[oO]:"fire-perf",[aO]:"fire-perf-compat",[lO]:"fire-rc",[uO]:"fire-rc-compat",[cO]:"fire-gcs",[hO]:"fire-gcs-compat",[dO]:"fire-fst",[fO]:"fire-fst-compat","fire-js":"fire-js",[pO]:"fire-js-all"};/**
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
 */const fl=new Map,dm=new Map;function yO(t,e){try{t.container.addComponent(e)}catch(n){zi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fn(t){const e=t.name;if(dm.has(e))return zi.debug(`There were multiple attempts to register component ${e}.`),!1;dm.set(e,t);for(const n of fl.values())yO(n,t);return!0}function Kl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const vO={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wr=new os("app","Firebase",vO);/**
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
 */class _O{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
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
 */const yr=mO;function ZT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Wr.create("bad-app-name",{appName:String(i)});if(n||(n=HT()),!n)throw Wr.create("no-options");const s=fl.get(i);if(s){if(Zc(n,s.options)&&Zc(r,s.config))return s;throw Wr.create("duplicate-app",{appName:i})}const o=new xP(i);for(const l of dm.values())o.addComponent(l);const a=new _O(n,r,o);return fl.set(i,a),a}function eS(t=hm){const e=fl.get(t);if(!e&&t===hm&&HT())return ZT();if(!e)throw Wr.create("no-app",{appName:t});return e}function wO(){return Array.from(fl.values())}function qe(t,e,n){var r;let i=(r=gO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zi.warn(a.join(" "));return}fn(new tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const EO="firebase-heartbeat-database",CO=1,pl="firebase-heartbeat-store";let If=null;function tS(){return If||(If=VP(EO,CO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pl)}}}).catch(t=>{throw Wr.create("idb-open",{originalErrorMessage:t.message})})),If}async function TO(t){try{return await(await tS()).transaction(pl).objectStore(pl).get(nS(t))}catch(e){if(e instanceof Qt)zi.warn(e.message);else{const n=Wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zi.warn(n.message)}}}async function rw(t,e){try{const r=(await tS()).transaction(pl,"readwrite");await r.objectStore(pl).put(e,nS(t)),await r.done}catch(n){if(n instanceof Qt)zi.warn(n.message);else{const r=Wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zi.warn(r.message)}}}function nS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const SO=1024,IO=30*24*60*60*1e3;class kO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=iw();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=IO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=iw(),{heartbeatsToSend:n,unsentEntries:r}=xO(this._heartbeatsCache.heartbeats),i=Yc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function iw(){return new Date().toISOString().substring(0,10)}function xO(t,e=SO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GT()?lP().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await TO(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sw(t){return Yc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function bO(t){fn(new tn("platform-logger",e=>new zP(e),"PRIVATE")),fn(new tn("heartbeat",e=>new kO(e),"PRIVATE")),qe(cm,nw,t),qe(cm,nw,"esm2017"),qe("fire-js","")}bO("");function Sy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function rS(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RO=rS,iS=new os("auth","Firebase",rS());/**
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
 */const eh=new ql("@firebase/auth");function AO(t,...e){eh.logLevel<=ae.WARN&&eh.warn(`Auth (${yr}): ${t}`,...e)}function fc(t,...e){eh.logLevel<=ae.ERROR&&eh.error(`Auth (${yr}): ${t}`,...e)}/**
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
 */function xn(t,...e){throw Iy(t,...e)}function zn(t,...e){return Iy(t,...e)}function PO(t,e,n){const r=Object.assign(Object.assign({},RO()),{[e]:n});return new os("auth","Firebase",r).create(e,{appName:t.name})}function Iy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return iS.create(t,...e)}function X(t,e,...n){if(!t)throw Iy(e,...n)}function tr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fc(e),new Error(e)}function hr(t,e){t||tr(e)}/**
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
 */function fm(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function OO(){return ow()==="http:"||ow()==="https:"}function ow(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function DO(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OO()||oP()||"connection"in navigator)?navigator.onLine:!0}function LO(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Gl{constructor(e,n){this.shortDelay=e,this.longDelay=n,hr(n>e,"Short delay should be less than long delay!"),this.isMobile=Cy()||qT()}get(){return DO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ky(t,e){hr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const MO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const $O=new Gl(3e4,6e4);function Po(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Oo(t,e,n,r,i={}){return oS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ao(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),sS.fetch()(aS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function oS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},MO),e);try{const i=new FO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Vu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Vu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Vu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw PO(t,c,u);xn(t,c)}}catch(i){if(i instanceof Qt)throw i;xn(t,"network-request-failed",{message:String(i)})}}async function Ql(t,e,n,r,i={}){const s=await Oo(t,e,n,r,i);return"mfaPendingCredential"in s&&xn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function aS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ky(t.config,i):`${t.config.apiScheme}://${i}`}class FO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zn(this.auth,"network-request-failed")),$O.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=zn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function UO(t,e){return Oo(t,"POST","/v1/accounts:delete",e)}async function VO(t,e){return Oo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ja(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BO(t,e=!1){const n=gt(t),r=await n.getIdToken(e),i=xy(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ja(kf(i.auth_time)),issuedAtTime:ja(kf(i.iat)),expirationTime:ja(kf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function kf(t){return Number(t)*1e3}function xy(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xc(n);return i?JSON.parse(i):(fc("Failed to decode base64 JWT payload"),null)}catch(i){return fc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jO(t){const e=xy(t);return X(e,"internal-error"),X(typeof e.exp!="undefined","internal-error"),X(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ml(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qt&&zO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class HO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ja(this.lastLoginAt),this.creationTime=ja(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function th(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ml(t,VO(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?KO(s.providerUserInfo):[],a=qO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new lS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function WO(t){const e=gt(t);await th(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function KO(t){return t.map(e=>{var{providerId:n}=e,r=Sy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function GO(t,e){const n=await oS(t,{},async()=>{const r=Ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=aS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class gl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken!="undefined","internal-error"),X(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):jO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return X(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await GO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new gl;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gl,this.toJSON())}_performRefresh(){return tr("not implemented")}}/**
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
 */function wr(t,e){X(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Di{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Sy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new lS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ml(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BO(this,e)}reload(){return WO(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Di(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await th(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ml(this,UO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,f=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,g=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:w,emailVerified:C,isAnonymous:k,providerData:I,stsTokenManager:L}=n;X(w&&L,e,"internal-error");const $=gl.fromJSON(this.name,L);X(typeof w=="string",e,"internal-error"),wr(h,e.name),wr(d,e.name),X(typeof C=="boolean",e,"internal-error"),X(typeof k=="boolean",e,"internal-error"),wr(p,e.name),wr(y,e.name),wr(v,e.name),wr(f,e.name),wr(m,e.name),wr(g,e.name);const O=new Di({uid:w,auth:e,email:d,emailVerified:C,displayName:h,isAnonymous:k,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:$,createdAt:m,lastLoginAt:g});return I&&Array.isArray(I)&&(O.providerData=I.map(le=>Object.assign({},le))),f&&(O._redirectEventId=f),O}static async _fromIdTokenResponse(e,n,r=!1){const i=new gl;i.updateFromServerResponse(n);const s=new Di({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await th(s),s}}/**
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
 */const aw=new Map;function nr(t){hr(t instanceof Function,"Expected a class definition");let e=aw.get(t);return e?(hr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,aw.set(t,e),e)}/**
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
 */class uS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uS.type="NONE";const lw=uS;/**
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
 */function pc(t,e,n){return`firebase:${t}:${e}:${n}`}class js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=pc(this.userKey,i.apiKey,s),this.fullPersistenceKey=pc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Di._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new js(nr(lw),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||nr(lw);const o=pc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Di._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new js(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new js(s,e,r))}}/**
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
 */function uw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pS(e))return"Blackberry";if(mS(e))return"Webos";if(Ny(e))return"Safari";if((e.includes("chrome/")||hS(e))&&!e.includes("edge/"))return"Chrome";if(fS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cS(t=At()){return/firefox\//i.test(t)}function Ny(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hS(t=At()){return/crios\//i.test(t)}function dS(t=At()){return/iemobile/i.test(t)}function fS(t=At()){return/android/i.test(t)}function pS(t=At()){return/blackberry/i.test(t)}function mS(t=At()){return/webos/i.test(t)}function id(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function QO(t=At()){var e;return id(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YO(){return aP()&&document.documentMode===10}function gS(t=At()){return id(t)||fS(t)||mS(t)||pS(t)||/windows phone/i.test(t)||dS(t)}function XO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function yS(t,e=[]){let n;switch(t){case"Browser":n=uw(At());break;case"Worker":n=`${uw(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yr}/${r}`}async function vS(t,e){return Oo(t,"GET","/v2/recaptchaConfig",Po(t,e))}function cw(t){return t!==void 0&&t.enterprise!==void 0}class _S{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function JO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=zn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",JO().appendChild(r)})}function ZO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const eD="https://www.google.com/recaptcha/enterprise.js?render=",tD="recaptcha-enterprise",nD="NO_RECAPTCHA";class ES{constructor(e){this.type=tD,this.auth=Do(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{vS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new _S(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;cw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(nD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&cw(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}wS(eD+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function nh(t,e,n,r=!1){const i=new ES(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class rD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class iD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hw(this),this.idTokenSubscription=new hw(this),this.beforeStateQueue=new rD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await th(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?gt(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(nr(e))})}async initializeRecaptchaConfig(){const e=await vS(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new _S(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new ES(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new os("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nr(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[nr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return X(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&AO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Do(t){return gt(t)}class hw{constructor(e){this.auth=e,this.observer=null,this.addObserver=mP(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function sD(t,e){const n=Kl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Zc(s,e!=null?e:{}))return i;xn(i,"already-initialized")}return n.initialize({options:e})}function oD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function aD(t,e,n){const r=Do(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=CS(e),{host:o,port:a}=lD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||uD()}function CS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lD(t){const e=CS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:dw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:dw(o)}}}function dw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class by{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tr("not implemented")}_getIdTokenResponse(e){return tr("not implemented")}_linkToIdToken(e,n){return tr("not implemented")}_getReauthenticationResolver(e){return tr("not implemented")}}async function cD(t,e){return Oo(t,"POST","/v1/accounts:update",e)}/**
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
 */async function xf(t,e){return Ql(t,"POST","/v1/accounts:signInWithPassword",Po(t,e))}/**
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
 */async function hD(t,e){return Ql(t,"POST","/v1/accounts:signInWithEmailLink",Po(t,e))}async function dD(t,e){return Ql(t,"POST","/v1/accounts:signInWithEmailLink",Po(t,e))}/**
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
 */class yl extends by{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new yl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new yl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await nh(e,r,"signInWithPassword");return xf(e,i)}else return xf(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await nh(e,r,"signInWithPassword");return xf(e,s)}else return Promise.reject(i)});case"emailLink":return hD(e,{email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return cD(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return dD(e,{idToken:n,email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zs(t,e){return Ql(t,"POST","/v1/accounts:signInWithIdp",Po(t,e))}/**
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
 */const fD="http://localhost";class Hi extends by{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Sy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Hi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zs(e,n)}buildRequest(){const e={requestUri:fD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ao(n)}return e}}/**
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
 */function pD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mD(t){const e=Ca(Ta(t)).link,n=e?Ca(Ta(e)).deep_link_id:null,r=Ca(Ta(t)).deep_link_id;return(r?Ca(Ta(r)).link:null)||r||n||e||t}class Ry{constructor(e){var n,r,i,s,o,a;const l=Ca(Ta(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=pD((i=l.mode)!==null&&i!==void 0?i:null);X(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=mD(e);try{return new Ry(n)}catch{return null}}}/**
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
 */class Lo{constructor(){this.providerId=Lo.PROVIDER_ID}static credential(e,n){return yl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ry.parseLink(n);return X(r,"argument-error"),yl._fromEmailAndCode(e,r.code,r.tenantId)}}Lo.PROVIDER_ID="password";Lo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Lo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class TS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yl extends TS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Sr extends Yl{constructor(){super("facebook.com")}static credential(e){return Hi._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sr.PROVIDER_ID="facebook.com";/**
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
 */class Ir extends Yl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hi._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.GOOGLE_SIGN_IN_METHOD="google.com";Ir.PROVIDER_ID="google.com";/**
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
 */class kr extends Yl{constructor(){super("github.com")}static credential(e){return Hi._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
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
 */class xr extends Yl{constructor(){super("twitter.com")}static credential(e,n){return Hi._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.TWITTER_SIGN_IN_METHOD="twitter.com";xr.PROVIDER_ID="twitter.com";/**
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
 */async function Nf(t,e){return Ql(t,"POST","/v1/accounts:signUp",Po(t,e))}/**
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
 */class Wi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Di._fromIdTokenResponse(e,r,i),o=fw(r);return new Wi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=fw(r);return new Wi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function fw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class rh extends Qt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,rh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new rh(e,n,r,i)}}function SS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?rh._fromErrorAndOperation(t,s,e,r):s})}async function gD(t,e,n=!1){const r=await ml(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wi._forOperation(t,"link",r)}/**
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
 */async function yD(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ml(t,SS(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=xy(s.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),Wi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xn(r,"user-mismatch"),s}}/**
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
 */async function IS(t,e,n=!1){const r="signIn",i=await SS(t,r,e),s=await Wi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function vD(t,e){return IS(Do(t),e)}async function _D(t,e,n){var r;const i=Do(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await nh(i,s,"signUpPassword");o=Nf(i,u)}else o=Nf(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await nh(i,s,"signUpPassword");return Nf(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Wi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function wD(t,e,n){return vD(gt(t),Lo.credential(e,n))}function kS(t,e,n,r){return gt(t).onIdTokenChanged(e,n,r)}function ED(t,e,n){return gt(t).beforeAuthStateChanged(e,n)}const ih="__sak";/**
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
 */class xS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ih,"1"),this.storage.removeItem(ih),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function CD(){const t=At();return Ny(t)||id(t)}const TD=1e3,SD=10;class NS extends xS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=CD()&&XO(),this.fallbackToPolling=gS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);YO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,SD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},TD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}NS.type="LOCAL";const ID=NS;/**
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
 */class bS extends xS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bS.type="SESSION";const RS=bS;/**
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
 */function kD(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class sd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new sd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await kD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sd.receivers=[];/**
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
 */function Ay(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ay("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Hn(){return window}function ND(t){Hn().location.href=t}/**
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
 */function AS(){return typeof Hn().WorkerGlobalScope!="undefined"&&typeof Hn().importScripts=="function"}async function bD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AD(){return AS()?self:null}/**
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
 */const PS="firebaseLocalStorageDb",PD=1,sh="firebaseLocalStorage",OS="fbase_key";class Xl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function od(t,e){return t.transaction([sh],e?"readwrite":"readonly").objectStore(sh)}function OD(){const t=indexedDB.deleteDatabase(PS);return new Xl(t).toPromise()}function pm(){const t=indexedDB.open(PS,PD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(sh,{keyPath:OS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(sh)?e(r):(r.close(),await OD(),e(await pm()))})})}async function pw(t,e,n){const r=od(t,!0).put({[OS]:e,value:n});return new Xl(r).toPromise()}async function DD(t,e){const n=od(t,!1).get(e),r=await new Xl(n).toPromise();return r===void 0?null:r.value}function mw(t,e){const n=od(t,!0).delete(e);return new Xl(n).toPromise()}const LD=800,MD=3;class DS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>MD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return AS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sd._getInstance(AD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bD(),!this.activeServiceWorker)return;this.sender=new xD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pm();return await pw(e,ih,"1"),await mw(e,ih),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=od(i,!1).getAll();return new Xl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}DS.type="LOCAL";const $D=DS;new Gl(3e4,6e4);/**
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
 */function FD(t,e){return e?nr(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Py extends by{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UD(t){return IS(t.auth,new Py(t),t.bypassAuthState)}function VD(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),yD(n,new Py(t),t.bypassAuthState)}async function BD(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),gD(n,new Py(t),t.bypassAuthState)}/**
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
 */class LS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UD;case"linkViaPopup":case"linkViaRedirect":return BD;case"reauthViaPopup":case"reauthViaRedirect":return VD;default:xn(this.auth,"internal-error")}}resolve(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jD=new Gl(2e3,1e4);class xs extends LS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xs.currentPopupAction&&xs.currentPopupAction.cancel(),xs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){hr(this.filter.length===1,"Popup operations only handle one event");const e=Ay();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jD.get())};e()}}xs.currentPopupAction=null;/**
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
 */const zD="pendingRedirect",mc=new Map;class HD extends LS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=mc.get(this.auth._key());if(!e){try{const r=await WD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}mc.set(this.auth._key(),e)}return this.bypassAuthState||mc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WD(t,e){const n=GD(e),r=KD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function qD(t,e){mc.set(t._key(),e)}function KD(t){return nr(t._redirectPersistence)}function GD(t){return pc(zD,t.config.apiKey,t.name)}async function QD(t,e,n=!1){const r=Do(t),i=FD(r,e),o=await new HD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const YD=10*60*1e3;class XD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!MS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(zn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YD&&this.cachedEventUids.clear(),this.cachedEventUids.has(gw(e))}saveEventToCache(e){this.cachedEventUids.add(gw(e)),this.lastProcessedEventTime=Date.now()}}function gw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function MS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return MS(t);default:return!1}}/**
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
 */async function ZD(t,e={}){return Oo(t,"GET","/v1/projects",e)}/**
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
 */const eL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tL=/^https?/;async function nL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZD(t);for(const n of e)try{if(rL(n))return}catch{}xn(t,"unauthorized-domain")}function rL(t){const e=fm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tL.test(n))return!1;if(eL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const iL=new Gl(3e4,6e4);function yw(){const t=Hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sL(t){return new Promise((e,n)=>{var r,i,s;function o(){yw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yw(),n(zn(t,"network-request-failed"))},timeout:iL.get()})}if(!((i=(r=Hn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Hn().gapi)===null||s===void 0)&&s.load)o();else{const a=ZO("iframefcb");return Hn()[a]=()=>{gapi.load?o():n(zn(t,"network-request-failed"))},wS(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw gc=null,e})}let gc=null;function oL(t){return gc=gc||sL(t),gc}/**
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
 */const aL=new Gl(5e3,15e3),lL="__/auth/iframe",uL="emulator/auth/iframe",cL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dL(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ky(e,uL):`https://${t.config.authDomain}/${lL}`,r={apiKey:e.apiKey,appName:t.name,v:yr},i=hL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ao(r).slice(1)}`}async function fL(t){const e=await oL(t),n=Hn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:dL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=zn(t,"network-request-failed"),a=Hn().setTimeout(()=>{s(o)},aL.get());function l(){Hn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const pL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mL=500,gL=600,yL="_blank",vL="http://localhost";class vw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _L(t,e,n,r=mL,i=gL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},pL),{width:r.toString(),height:i.toString(),top:s,left:o}),u=At().toLowerCase();n&&(a=hS(u)?yL:n),cS(u)&&(e=e||vL,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(QO(u)&&a!=="_self")return wL(e||"",a),new vw(null);const h=window.open(e||"",a,c);X(h,t,"popup-blocked");try{h.focus()}catch{}return new vw(h)}function wL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const EL="__/auth/handler",CL="emulator/auth/handler",TL=encodeURIComponent("fac");async function _w(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yr,eventId:i};if(e instanceof TS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",am(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Yl){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${TL}=${encodeURIComponent(l)}`:"";return`${SL(t)}?${Ao(a).slice(1)}${u}`}function SL({config:t}){return t.emulator?ky(t,CL):`https://${t.authDomain}/${EL}`}/**
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
 */const bf="webStorageSupport";class IL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=RS,this._completeRedirectFn=QD,this._overrideRedirectResult=qD}async _openPopup(e,n,r,i){var s;hr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await _w(e,n,r,fm(),i);return _L(e,o,Ay())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await _w(e,n,r,fm(),i);return ND(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(hr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fL(e),r=new XD(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bf,{type:bf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[bf];o!==void 0&&n(!!o),xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gS()||Ny()||id()}}const kL=IL;var ww="@firebase/auth",Ew="0.23.2";/**
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
 */class xL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function NL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bL(t){fn(new tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yS(t)},u=new iD(r,i,s,l);return oD(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fn(new tn("auth-internal",e=>{const n=Do(e.getProvider("auth").getImmediate());return(r=>new xL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qe(ww,Ew,NL(t)),qe(ww,Ew,"esm2017")}/**
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
 */const RL=5*60,AL=WT("authIdTokenMaxAge")||RL;let Cw=null;const PL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AL)return;const i=n==null?void 0:n.token;Cw!==i&&(Cw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function OL(t=eS()){const e=Kl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sD(t,{popupRedirectResolver:kL,persistence:[$D,ID,RS]}),r=WT("authTokenSyncURL");if(r){const s=PL(r);ED(n,s,()=>s(n.currentUser)),kS(n,o=>s(o))}const i=zT("auth");return i&&aD(n,`http://${i}`),n}bL("Browser");var DL=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},D,Oy=Oy||{},Z=DL||self;function ad(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Jl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function LL(t){return Object.prototype.hasOwnProperty.call(t,Rf)&&t[Rf]||(t[Rf]=++ML)}var Rf="closure_uid_"+(1e9*Math.random()>>>0),ML=0;function $L(t,e,n){return t.call.apply(t.bind,arguments)}function FL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function xt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?xt=$L:xt=FL,xt.apply(null,arguments)}function Bu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function lt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ui(){this.s=this.s,this.o=this.o}var UL=0;ui.prototype.s=!1;ui.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),UL!=0)&&LL(this)};ui.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const $S=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Dy(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Tw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ad(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Nt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Nt.prototype.h=function(){this.defaultPrevented=!0};var VL=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",()=>{},e),Z.removeEventListener("test",()=>{},e)}catch{}return t}();function vl(t){return/^[\s\xa0]*$/.test(t)}function ld(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function On(t){return ld().indexOf(t)!=-1}function Ly(t){return Ly[" "](t),t}Ly[" "]=function(){};function BL(t,e){var n=OM;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var jL=On("Opera"),ao=On("Trident")||On("MSIE"),FS=On("Edge"),mm=FS||ao,US=On("Gecko")&&!(ld().toLowerCase().indexOf("webkit")!=-1&&!On("Edge"))&&!(On("Trident")||On("MSIE"))&&!On("Edge"),zL=ld().toLowerCase().indexOf("webkit")!=-1&&!On("Edge");function VS(){var t=Z.document;return t?t.documentMode:void 0}var gm;e:{var Af="",Pf=function(){var t=ld();if(US)return/rv:([^\);]+)(\)|;)/.exec(t);if(FS)return/Edge\/([\d\.]+)/.exec(t);if(ao)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(zL)return/WebKit\/(\S+)/.exec(t);if(jL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Pf&&(Af=Pf?Pf[1]:""),ao){var Of=VS();if(Of!=null&&Of>parseFloat(Af)){gm=String(Of);break e}}gm=Af}var ym;if(Z.document&&ao){var Sw=VS();ym=Sw||parseInt(gm,10)||void 0}else ym=void 0;var HL=ym;function _l(t,e){if(Nt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(US){e:{try{Ly(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:WL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_l.$.h.call(this)}}lt(_l,Nt);var WL={2:"touch",3:"pen",4:"mouse"};_l.prototype.h=function(){_l.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Zl="closure_listenable_"+(1e6*Math.random()|0),qL=0;function KL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++qL,this.fa=this.ia=!1}function ud(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function My(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function GL(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function BS(t){const e={};for(const n in t)e[n]=t[n];return e}const Iw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Iw.length;s++)n=Iw[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function cd(t){this.src=t,this.g={},this.h=0}cd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=_m(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new KL(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function vm(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=$S(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ud(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function _m(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var $y="closure_lm_"+(1e6*Math.random()|0),Df={};function zS(t,e,n,r,i){if(r&&r.once)return WS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)zS(t,e[s],n,r,i);return null}return n=Vy(n),t&&t[Zl]?t.O(e,n,Jl(r)?!!r.capture:!!r,i):HS(t,e,n,!1,r,i)}function HS(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Jl(i)?!!i.capture:!!i,a=Uy(t);if(a||(t[$y]=a=new cd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=QL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)VL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(KS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function QL(){function t(n){return e.call(t.src,t.listener,n)}const e=YL;return t}function WS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)WS(t,e[s],n,r,i);return null}return n=Vy(n),t&&t[Zl]?t.P(e,n,Jl(r)?!!r.capture:!!r,i):HS(t,e,n,!0,r,i)}function qS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)qS(t,e[s],n,r,i);else r=Jl(r)?!!r.capture:!!r,n=Vy(n),t&&t[Zl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=_m(s,n,r,i),-1<n&&(ud(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Uy(t))&&(e=t.g[e.toString()],t=-1,e&&(t=_m(e,n,r,i)),(n=-1<t?e[t]:null)&&Fy(n))}function Fy(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Zl])vm(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(KS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Uy(e))?(vm(n,t),n.h==0&&(n.src=null,e[$y]=null)):ud(t)}}}function KS(t){return t in Df?Df[t]:Df[t]="on"+t}function YL(t,e){if(t.fa)t=!0;else{e=new _l(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Fy(t),t=n.call(r,e)}return t}function Uy(t){return t=t[$y],t instanceof cd?t:null}var Lf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vy(t){return typeof t=="function"?t:(t[Lf]||(t[Lf]=function(e){return t.handleEvent(e)}),t[Lf])}function at(){ui.call(this),this.i=new cd(this),this.S=this,this.J=null}lt(at,ui);at.prototype[Zl]=!0;at.prototype.removeEventListener=function(t,e,n,r){qS(this,t,e,n,r)};function pt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Nt(e,t);else if(e instanceof Nt)e.target=e.target||t;else{var i=e;e=new Nt(r,t),jS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ju(o,r,!0,e)&&i}if(o=e.g=t,i=ju(o,r,!0,e)&&i,i=ju(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ju(o,r,!1,e)&&i}at.prototype.N=function(){if(at.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ud(n[r]);delete t.g[e],t.h--}}this.J=null};at.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};at.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ju(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&vm(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var By=Z.JSON.stringify;class XL{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function JL(){var t=jy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ZL{constructor(){this.h=this.g=null}add(e,n){const r=GS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var GS=new XL(()=>new eM,t=>t.reset());class eM{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function tM(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function nM(t){Z.setTimeout(()=>{throw t},0)}let wl,El=!1,jy=new ZL,QS=()=>{const t=Z.Promise.resolve(void 0);wl=()=>{t.then(rM)}};var rM=()=>{for(var t;t=JL();){try{t.h.call(t.g)}catch(n){nM(n)}var e=GS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}El=!1};function hd(t,e){at.call(this),this.h=t||1,this.g=e||Z,this.j=xt(this.qb,this),this.l=Date.now()}lt(hd,at);D=hd.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),pt(this,"tick"),this.ga&&(zy(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function zy(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){hd.$.N.call(this),zy(this),delete this.g};function Hy(t,e,n){if(typeof t=="function")n&&(t=xt(t,n));else if(t&&typeof t.handleEvent=="function")t=xt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function YS(t){t.g=Hy(()=>{t.g=null,t.i&&(t.i=!1,YS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class iM extends ui{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:YS(this)}N(){super.N(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cl(t){ui.call(this),this.h=t,this.g={}}lt(Cl,ui);var kw=[];function XS(t,e,n,r){Array.isArray(n)||(n&&(kw[0]=n.toString()),n=kw);for(var i=0;i<n.length;i++){var s=zS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function JS(t){My(t.g,function(e,n){this.g.hasOwnProperty(n)&&Fy(e)},t),t.g={}}Cl.prototype.N=function(){Cl.$.N.call(this),JS(this)};Cl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function dd(){this.g=!0}dd.prototype.Ea=function(){this.g=!1};function sM(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function oM(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ns(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+lM(t,n)+(r?" "+r:"")})}function aM(t,e){t.info(function(){return"TIMEOUT: "+e})}dd.prototype.info=function(){};function lM(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return By(n)}catch{return e}}var as={},xw=null;function fd(){return xw=xw||new at}as.Ta="serverreachability";function ZS(t){Nt.call(this,as.Ta,t)}lt(ZS,Nt);function Tl(t){const e=fd();pt(e,new ZS(e))}as.STAT_EVENT="statevent";function eI(t,e){Nt.call(this,as.STAT_EVENT,t),this.stat=e}lt(eI,Nt);function $t(t){const e=fd();pt(e,new eI(e,t))}as.Ua="timingevent";function tI(t,e){Nt.call(this,as.Ua,t),this.size=e}lt(tI,Nt);function eu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var pd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},nI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Wy(){}Wy.prototype.h=null;function Nw(t){return t.h||(t.h=t.i())}function rI(){}var tu={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function qy(){Nt.call(this,"d")}lt(qy,Nt);function Ky(){Nt.call(this,"c")}lt(Ky,Nt);var wm;function md(){}lt(md,Wy);md.prototype.g=function(){return new XMLHttpRequest};md.prototype.i=function(){return{}};wm=new md;function nu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Cl(this),this.P=uM,t=mm?125:void 0,this.V=new hd(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new iI}function iI(){this.i=null,this.g="",this.h=!1}var uM=45e3,Em={},oh={};D=nu.prototype;D.setTimeout=function(t){this.P=t};function Cm(t,e,n){t.L=1,t.v=yd(dr(e)),t.s=n,t.S=!0,sI(t,null)}function sI(t,e){t.G=Date.now(),ru(t),t.A=dr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),fI(n.i,"t",r),t.C=0,n=t.l.J,t.h=new iI,t.g=DI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new iM(xt(t.Pa,t,t.g),t.O)),XS(t.U,t.g,"readystatechange",t.nb),e=t.I?BS(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Tl(),sM(t.j,t.u,t.A,t.m,t.W,t.s)}D.nb=function(t){t=t.target;const e=this.M;e&&Fn(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const c=Fn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||mm||this.g&&(this.h.h||this.g.ja()||Pw(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Tl(3):Tl(2)),gd(this);var n=this.g.da();this.ca=n;t:if(oI(this)){var r=Pw(this.g);t="";var i=r.length,s=Fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){ki(this),za(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,oM(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vl(a)){var u=a;break t}}u=null}if(n=u)Ns(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Tm(this,n);else{this.i=!1,this.o=3,$t(12),ki(this),za(this);break e}}this.S?(aI(this,c,o),mm&&this.i&&c==3&&(XS(this.U,this.V,"tick",this.mb),this.V.start())):(Ns(this.j,this.m,o,null),Tm(this,o)),c==4&&ki(this),this.i&&!this.J&&(c==4?RI(this.l,this):(this.i=!1,ru(this)))}else RM(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,$t(12)):(this.o=0,$t(13)),ki(this),za(this)}}}catch{}finally{}};function oI(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function aI(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=cM(t,n),i==oh){e==4&&(t.o=4,$t(14),r=!1),Ns(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Em){t.o=4,$t(15),Ns(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ns(t.j,t.m,i,null),Tm(t,i);oI(t)&&i!=oh&&i!=Em&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,$t(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zy(e),e.M=!0,$t(11))):(Ns(t.j,t.m,n,"[Invalid Chunked Response]"),ki(t),za(t))}D.mb=function(){if(this.g){var t=Fn(this.g),e=this.g.ja();this.C<e.length&&(gd(this),aI(this,t,e),this.i&&t!=4&&ru(this))}};function cM(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?oh:(n=Number(e.substring(n,r)),isNaN(n)?Em:(r+=1,r+n>e.length?oh:(e=e.slice(r,r+n),t.C=r+n,e)))}D.cancel=function(){this.J=!0,ki(this)};function ru(t){t.Y=Date.now()+t.P,lI(t,t.P)}function lI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=eu(xt(t.lb,t),e)}function gd(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}D.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(aM(this.j,this.A),this.L!=2&&(Tl(),$t(17)),ki(this),this.o=2,za(this)):lI(this,this.Y-t)};function za(t){t.l.H==0||t.J||RI(t.l,t)}function ki(t){gd(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,zy(t.V),JS(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Tm(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Sm(n.i,t))){if(!t.K&&Sm(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)uh(n),wd(n);else break e;Jy(n),$t(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=eu(xt(n.ib,n),6e3));if(1>=gI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else xi(n,11)}else if((t.K||n.g==t)&&uh(n),!vl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Gy(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Se(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=OI(r,r.J?r.pa:null,r.Y),o.K){yI(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(gd(a),ru(a)),r.g=o}else NI(r);0<n.j.length&&Ed(n)}else u[0]!="stop"&&u[0]!="close"||xi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?xi(n,7):Xy(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Tl(4)}catch{}}function hM(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ad(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function dM(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(ad(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function uI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ad(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=dM(t),r=hM(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var cI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fM(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Li(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Li){this.h=t.h,ah(this,t.j),this.s=t.s,this.g=t.g,lh(this,t.m),this.l=t.l;var e=t.i,n=new Sl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),bw(this,n),this.o=t.o}else t&&(e=String(t).match(cI))?(this.h=!1,ah(this,e[1]||"",!0),this.s=Sa(e[2]||""),this.g=Sa(e[3]||"",!0),lh(this,e[4]),this.l=Sa(e[5]||"",!0),bw(this,e[6]||"",!0),this.o=Sa(e[7]||"")):(this.h=!1,this.i=new Sl(null,this.h))}Li.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ia(e,Rw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ia(e,Rw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ia(n,n.charAt(0)=="/"?gM:mM,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ia(n,vM)),t.join("")};function dr(t){return new Li(t)}function ah(t,e,n){t.j=n?Sa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function lh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function bw(t,e,n){e instanceof Sl?(t.i=e,_M(t.i,t.h)):(n||(e=Ia(e,yM)),t.i=new Sl(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function yd(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Sa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ia(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,pM),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function pM(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Rw=/[#\/\?@]/g,mM=/[#\?:]/g,gM=/[#\?]/g,yM=/[#\?@]/g,vM=/#/g;function Sl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ci(t){t.g||(t.g=new Map,t.h=0,t.i&&fM(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Sl.prototype;D.add=function(t,e){ci(this),this.i=null,t=Mo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function hI(t,e){ci(t),e=Mo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function dI(t,e){return ci(t),e=Mo(t,e),t.g.has(e)}D.forEach=function(t,e){ci(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};D.ta=function(){ci(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};D.Z=function(t){ci(this);let e=[];if(typeof t=="string")dI(this,t)&&(e=e.concat(this.g.get(Mo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return ci(this),this.i=null,t=Mo(this,t),dI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function fI(t,e,n){hI(t,e),0<n.length&&(t.i=null,t.g.set(Mo(t,e),Dy(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Mo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function _M(t,e){e&&!t.j&&(ci(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(hI(this,r),fI(this,i,n))},t)),t.j=e}var wM=class{constructor(t,e){this.g=t,this.map=e}};function pI(t){this.l=t||EM,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ka&&Z.g.Ka()&&Z.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var EM=10;function mI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function gI(t){return t.h?1:t.g?t.g.size:0}function Sm(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Gy(t,e){t.g?t.g.add(e):t.h=e}function yI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}pI.prototype.cancel=function(){if(this.i=vI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function vI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Dy(t.i)}var CM=class{stringify(t){return Z.JSON.stringify(t,void 0)}parse(t){return Z.JSON.parse(t,void 0)}};function TM(){this.g=new CM}function SM(t,e,n){const r=n||"";try{uI(t,function(i,s){let o=i;Jl(i)&&(o=By(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function IM(t,e){const n=new dd;if(Z.Image){const r=new Image;r.onload=Bu(zu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Bu(zu,n,r,"TestLoadImage: error",!1,e),r.onabort=Bu(zu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Bu(zu,n,r,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function zu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function iu(t){this.l=t.fc||null,this.j=t.ob||!1}lt(iu,Wy);iu.prototype.g=function(){return new vd(this.l,this.j)};iu.prototype.i=function(t){return function(){return t}}({});function vd(t,e){at.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Qy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}lt(vd,at);var Qy=0;D=vd.prototype;D.open=function(t,e){if(this.readyState!=Qy)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Il(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,su(this)),this.readyState=Qy};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Il(this)),this.g&&(this.readyState=3,Il(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Z.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_I(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function _I(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?su(this):Il(this),this.readyState==3&&_I(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,su(this))};D.Ya=function(t){this.g&&(this.response=t,su(this))};D.ka=function(){this.g&&su(this)};function su(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Il(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Il(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(vd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var kM=Z.JSON.parse;function Le(t){at.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=wI,this.L=this.M=!1}lt(Le,at);var wI="",xM=/^https?$/i,NM=["POST","PUT"];D=Le.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():wm.g(),this.C=this.u?Nw(this.u):Nw(wm),this.g.onreadystatechange=xt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Aw(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Z.FormData&&t instanceof Z.FormData,!(0<=$S(NM,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{TI(this),0<this.B&&((this.L=bM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xt(this.ua,this)):this.A=Hy(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Aw(this,s)}};function bM(t){return ao&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof Oy!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,pt(this,"timeout"),this.abort(8))};function Aw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,EI(t),_d(t)}function EI(t){t.F||(t.F=!0,pt(t,"complete"),pt(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,pt(this,"complete"),pt(this,"abort"),_d(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_d(this,!0)),Le.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?CI(this):this.kb())};D.kb=function(){CI(this)};function CI(t){if(t.h&&typeof Oy!="undefined"&&(!t.C[1]||Fn(t)!=4||t.da()!=2)){if(t.v&&Fn(t)==4)Hy(t.La,0,t);else if(pt(t,"readystatechange"),Fn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(cI)[1]||null;!i&&Z.self&&Z.self.location&&(i=Z.self.location.protocol.slice(0,-1)),r=!xM.test(i?i.toLowerCase():"")}n=r}if(n)pt(t,"complete"),pt(t,"success");else{t.m=6;try{var s=2<Fn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",EI(t)}}finally{_d(t)}}}}function _d(t,e){if(t.g){TI(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||pt(t,"ready");try{n.onreadystatechange=r}catch{}}}function TI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function Fn(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<Fn(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),kM(e)}};function Pw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case wI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function RM(t){const e={};t=(t.g&&2<=Fn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(vl(t[r]))continue;var n=tM(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}GL(e,function(r){return r.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function SI(t){let e="";return My(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Yy(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=SI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function la(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function II(t){this.Ga=0,this.j=[],this.l=new dd,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=la("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=la("baseRetryDelayMs",5e3,t),this.hb=la("retryDelaySeedMs",1e4,t),this.eb=la("forwardChannelMaxRetries",2,t),this.xa=la("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new pI(t&&t.concurrentRequestLimit),this.Ja=new TM,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=II.prototype;D.ra=8;D.H=1;function Xy(t){if(kI(t),t.H==3){var e=t.W++,n=dr(t.I);if(Se(n,"SID",t.K),Se(n,"RID",e),Se(n,"TYPE","terminate"),ou(t,n),e=new nu(t,t.l,e),e.L=2,e.v=yd(dr(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon)try{n=Z.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Z.Image&&(new Image().src=e.v,n=!0),n||(e.g=DI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ru(e)}PI(t)}function wd(t){t.g&&(Zy(t),t.g.cancel(),t.g=null)}function kI(t){wd(t),t.u&&(Z.clearTimeout(t.u),t.u=null),uh(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function Ed(t){if(!mI(t.i)&&!t.m){t.m=!0;var e=t.Na;wl||QS(),El||(wl(),El=!0),jy.add(e,t),t.C=0}}function AM(t,e){return gI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=eu(xt(t.Na,t,e),AI(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new nu(this,this.l,t);let s=this.s;if(this.U&&(s?(s=BS(s),jS(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=xI(this,i,e),n=dr(this.I),Se(n,"RID",t),Se(n,"CVER",22),this.F&&Se(n,"X-HTTP-Session-Id",this.F),ou(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(SI(s)))+"&"+e:this.o&&Yy(n,this.o,s)),Gy(this.i,i),this.bb&&Se(n,"TYPE","init"),this.P?(Se(n,"$req",e),Se(n,"SID","null"),i.aa=!0,Cm(i,n,null)):Cm(i,n,e),this.H=2}}else this.H==3&&(t?Ow(this,t):this.j.length==0||mI(this.i)||Ow(this))};function Ow(t,e){var n;e?n=e.m:n=t.W++;const r=dr(t.I);Se(r,"SID",t.K),Se(r,"RID",n),Se(r,"AID",t.V),ou(t,r),t.o&&t.s&&Yy(r,t.o,t.s),n=new nu(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=xI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Gy(t.i,n),Cm(n,r,e)}function ou(t,e){t.na&&My(t.na,function(n,r){Se(e,r,n)}),t.h&&uI({},function(n,r){Se(e,r,n)})}function xI(t,e,n){n=Math.min(t.j.length,n);var r=t.h?xt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{SM(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function NI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;wl||QS(),El||(wl(),El=!0),jy.add(e,t),t.A=0}}function Jy(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=eu(xt(t.Ma,t),AI(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,bI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=eu(xt(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,$t(10),wd(this),bI(this))};function Zy(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function bI(t){t.g=new nu(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=dr(t.wa);Se(e,"RID","rpc"),Se(e,"SID",t.K),Se(e,"AID",t.V),Se(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Se(e,"TO",t.qa),Se(e,"TYPE","xmlhttp"),ou(t,e),t.o&&t.s&&Yy(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=yd(dr(e)),n.s=null,n.S=!0,sI(n,t)}D.ib=function(){this.v!=null&&(this.v=null,wd(this),Jy(this),$t(19))};function uh(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function RI(t,e){var n=null;if(t.g==e){uh(t),Zy(t),t.g=null;var r=2}else if(Sm(t.i,e))n=e.F,yI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=fd(),pt(r,new tI(r,n)),Ed(t)}else NI(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&AM(t,e)||r==2&&Jy(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:xi(t,5);break;case 4:xi(t,10);break;case 3:xi(t,6);break;default:xi(t,2)}}}function AI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function xi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=xt(t.pb,t);n||(n=new Li("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||ah(n,"https"),yd(n)),IM(n.toString(),r)}else $t(2);t.H=0,t.h&&t.h.za(e),PI(t),kI(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),$t(2)):(this.l.info("Failed to ping google.com"),$t(1))};function PI(t){if(t.H=0,t.ma=[],t.h){const e=vI(t.i);(e.length!=0||t.j.length!=0)&&(Tw(t.ma,e),Tw(t.ma,t.j),t.i.i.length=0,Dy(t.j),t.j.length=0),t.h.ya()}}function OI(t,e,n){var r=n instanceof Li?dr(n):new Li(n);if(r.g!="")e&&(r.g=e+"."+r.g),lh(r,r.m);else{var i=Z.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Li(null);r&&ah(s,r),e&&(s.g=e),i&&lh(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Se(r,n,e),Se(r,"VER",t.ra),ou(t,r),r}function DI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Le(new iu({ob:!0})):new Le(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function LI(){}D=LI.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function ch(){if(ao&&!(10<=Number(HL)))throw Error("Environmental error: no available transport.")}ch.prototype.g=function(t,e){return new nn(t,e)};function nn(t,e){at.call(this),this.g=new II(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!vl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!vl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $o(this)}lt(nn,at);nn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;$t(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=OI(t,null,t.Y),Ed(t)};nn.prototype.close=function(){Xy(this.g)};nn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=By(t),t=n);e.j.push(new wM(e.fb++,t)),e.H==3&&Ed(e)};nn.prototype.N=function(){this.g.h=null,delete this.j,Xy(this.g),delete this.g,nn.$.N.call(this)};function MI(t){qy.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}lt(MI,qy);function $I(){Ky.call(this),this.status=1}lt($I,Ky);function $o(t){this.g=t}lt($o,LI);$o.prototype.Ba=function(){pt(this.g,"a")};$o.prototype.Aa=function(t){pt(this.g,new MI(t))};$o.prototype.za=function(t){pt(this.g,new $I)};$o.prototype.ya=function(){pt(this.g,"b")};function PM(){this.blockSize=-1}function Nn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}lt(Nn,PM);Nn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Mf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Nn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Mf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Mf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Mf(this,r),i=0;break}}this.h=i,this.i+=e};Nn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ge(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var OM={};function ev(t){return-128<=t&&128>t?BL(t,function(e){return new ge([e|0],0>e?-1:0)}):new ge([t|0],0>t?-1:0)}function Un(t){if(isNaN(t)||!isFinite(t))return Hs;if(0>t)return ft(Un(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Im;return new ge(e,0)}function FI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ft(FI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Un(Math.pow(e,8)),r=Hs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Un(Math.pow(e,s)),r=r.R(s).add(Un(o))):(r=r.R(n),r=r.add(Un(o)))}return r}var Im=4294967296,Hs=ev(0),km=ev(1),Dw=ev(16777216);D=ge.prototype;D.ea=function(){if(un(this))return-ft(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Im+r)*e,e*=Im}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(rr(this))return"0";if(un(this))return"-"+ft(this).toString(t);for(var e=Un(Math.pow(t,6)),n=this,r="";;){var i=dh(n,e).g;n=hh(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,rr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function rr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function un(t){return t.h==-1}D.X=function(t){return t=hh(this,t),un(t)?-1:rr(t)?0:1};function ft(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ge(n,~t.h).add(km)}D.abs=function(){return un(this)?ft(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ge(n,n[n.length-1]&-2147483648?-1:0)};function hh(t,e){return t.add(ft(e))}D.R=function(t){if(rr(this)||rr(t))return Hs;if(un(this))return un(t)?ft(this).R(ft(t)):ft(ft(this).R(t));if(un(t))return ft(this.R(ft(t)));if(0>this.X(Dw)&&0>t.X(Dw))return Un(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Hu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Hu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Hu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Hu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ge(n,0)};function Hu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ua(t,e){this.g=t,this.h=e}function dh(t,e){if(rr(e))throw Error("division by zero");if(rr(t))return new ua(Hs,Hs);if(un(t))return e=dh(ft(t),e),new ua(ft(e.g),ft(e.h));if(un(e))return e=dh(t,ft(e)),new ua(ft(e.g),e.h);if(30<t.g.length){if(un(t)||un(e))throw Error("slowDivide_ only works with positive integers.");for(var n=km,r=e;0>=r.X(t);)n=Lw(n),r=Lw(r);var i=ps(n,1),s=ps(r,1);for(r=ps(r,2),n=ps(n,2);!rr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ps(r,1),n=ps(n,1)}return e=hh(t,i.R(e)),new ua(i,e)}for(i=Hs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Un(n),o=s.R(e);un(o)||0<o.X(t);)n-=r,s=Un(n),o=s.R(e);rr(s)&&(s=km),i=i.add(s),t=hh(t,o)}return new ua(i,t)}D.gb=function(t){return dh(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ge(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ge(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ge(n,this.h^t.h)};function Lw(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ge(n,t.h)}function ps(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ge(i,t.h)}ch.prototype.createWebChannel=ch.prototype.g;nn.prototype.send=nn.prototype.u;nn.prototype.open=nn.prototype.m;nn.prototype.close=nn.prototype.close;pd.NO_ERROR=0;pd.TIMEOUT=8;pd.HTTP_ERROR=6;nI.COMPLETE="complete";rI.EventType=tu;tu.OPEN="a";tu.CLOSE="b";tu.ERROR="c";tu.MESSAGE="d";at.prototype.listen=at.prototype.O;Le.prototype.listenOnce=Le.prototype.P;Le.prototype.getLastError=Le.prototype.Sa;Le.prototype.getLastErrorCode=Le.prototype.Ia;Le.prototype.getStatus=Le.prototype.da;Le.prototype.getResponseJson=Le.prototype.Wa;Le.prototype.getResponseText=Le.prototype.ja;Le.prototype.send=Le.prototype.ha;Le.prototype.setWithCredentials=Le.prototype.Oa;Nn.prototype.digest=Nn.prototype.l;Nn.prototype.reset=Nn.prototype.reset;Nn.prototype.update=Nn.prototype.j;ge.prototype.add=ge.prototype.add;ge.prototype.multiply=ge.prototype.R;ge.prototype.modulo=ge.prototype.gb;ge.prototype.compare=ge.prototype.X;ge.prototype.toNumber=ge.prototype.ea;ge.prototype.toString=ge.prototype.toString;ge.prototype.getBits=ge.prototype.D;ge.fromNumber=Un;ge.fromString=FI;var DM=function(){return new ch},LM=function(){return fd()},$f=pd,MM=nI,$M=as,Mw={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},FM=iu,Wu=rI,UM=Le,VM=Nn,Ws=ge;const $w="@firebase/firestore";/**
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
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */let Fo="9.22.2";/**
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
 */const qi=new ql("@firebase/firestore");function Fw(){return qi.logLevel}function H(t,...e){if(qi.logLevel<=ae.DEBUG){const n=e.map(tv);qi.debug(`Firestore (${Fo}): ${t}`,...n)}}function fr(t,...e){if(qi.logLevel<=ae.ERROR){const n=e.map(tv);qi.error(`Firestore (${Fo}): ${t}`,...n)}}function lo(t,...e){if(qi.logLevel<=ae.WARN){const n=e.map(tv);qi.warn(`Firestore (${Fo}): ${t}`,...n)}}function tv(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function te(t="Unexpected state"){const e=`FIRESTORE (${Fo}) INTERNAL ASSERTION FAILED: `+t;throw fr(e),new Error(e)}function Qe(t,e){t||te()}function he(t,e){return t}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class UI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class jM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zM{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new qs;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Qe(typeof r.accessToken=="string"),new UI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string"),new _t(e)}}class HM{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class WM{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new HM(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KM{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Qe(typeof n.token=="string"),this.T=n.token,new qM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function GM(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class QM{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=GM(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function uo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class st{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new st(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new st(0,0))}static max(){return new ee(new st(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class kl{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return kl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof kl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends kl{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const YM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends kl{construct(e,n,r){return new Mt(e,n,r)}static isValidIdentifier(e){return YM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Mt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new B(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new B(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mt(n)}static emptyPath(){return new Mt([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Re.fromString(e))}static fromName(e){return new G(Re.fromString(e).popFirst(5))}static empty(){return new G(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Re(e.slice()))}}function XM(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new st(n+1,0):new st(n,r));return new ti(i,G.empty(),e)}function JM(t){return new ti(t.readTime,t.key,-1)}class ti{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ti(ee.min(),G.empty(),-1)}static max(){return new ti(ee.max(),G.empty(),-1)}}function ZM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
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
 */const e2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class t2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function nv(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==e2)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function au(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class rv{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}rv.ct=-1;function Cd(t){return t==null}function fh(t){return t===0&&1/t==-1/0}function n2(t){return typeof t=="number"&&Number.isInteger(t)&&!fh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Uw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function lu(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function VI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Me{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qu(this.root,e,this.comparator,!1)}getReverseIterator(){return new qu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qu(this.root,e,this.comparator,!0)}}class qu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ht.RED,this.left=i!=null?i:ht.EMPTY,this.right=s!=null?s:ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ht(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ht(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class bt{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vw(this.data.getIterator())}getIteratorFrom(e){return new Vw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof bt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new bt(this.comparator);return n.data=e,n}}class Vw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pr{constructor(e){this.fields=e,e.sort(Mt.comparator)}static empty(){return new Pr([])}unionWith(e){let n=new bt(Mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return uo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class BI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException!="undefined"&&i instanceof DOMException?new BI("Invalid base64 string: "+i):i}}(e);return new Pt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const r2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ni(t){if(Qe(!!t),typeof t=="string"){let e=0;const n=r2.exec(t);if(Qe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ki(t){return typeof t=="string"?Pt.fromBase64String(t):Pt.fromUint8Array(t)}/**
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
 */function iv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function sv(t){const e=t.mapValue.fields.__previous_value__;return iv(e)?sv(e):e}function xl(t){const e=ni(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
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
 */class i2{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Nl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Nl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Nl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ku={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?iv(t)?4:s2(t)?9007199254740991:10:te()}function Wn(t,e){if(t===e)return!0;const n=Gi(t);if(n!==Gi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xl(t).isEqual(xl(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ni(r.timestampValue),o=ni(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ki(r.bytesValue).isEqual(Ki(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ze(r.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(r.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ze(r.integerValue)===ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ze(r.doubleValue),o=ze(i.doubleValue);return s===o?fh(s)===fh(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return uo(t.arrayValue.values||[],e.arrayValue.values||[],Wn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Uw(s)!==Uw(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Wn(s[a],o[a])))return!1;return!0}(t,e);default:return te()}}function bl(t,e){return(t.values||[]).find(n=>Wn(n,e))!==void 0}function co(t,e){if(t===e)return 0;const n=Gi(t),r=Gi(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ze(i.integerValue||i.doubleValue),a=ze(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Bw(t.timestampValue,e.timestampValue);case 4:return Bw(xl(t),xl(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Ki(i),a=Ki(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=me(o[l],a[l]);if(u!==0)return u}return me(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=me(ze(i.latitude),ze(s.latitude));return o!==0?o:me(ze(i.longitude),ze(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=co(o[l],a[l]);if(u)return u}return me(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ku.mapValue&&s===Ku.mapValue)return 0;if(i===Ku.mapValue)return 1;if(s===Ku.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=me(a[c],u[c]);if(h!==0)return h;const d=co(o[a[c]],l[u[c]]);if(d!==0)return d}return me(a.length,u.length)}(t.mapValue,e.mapValue);default:throw te()}}function Bw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=ni(t),r=ni(e),i=me(n.seconds,r.seconds);return i!==0?i:me(n.nanos,r.nanos)}function ho(t){return xm(t)}function xm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=ni(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ki(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,G.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=xm(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${xm(r.fields[a])}`;return s+"}"}(t.mapValue):te();var e,n}function jw(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Nm(t){return!!t&&"integerValue"in t}function ov(t){return!!t&&"arrayValue"in t}function zw(t){return!!t&&"nullValue"in t}function Hw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ff(t){return!!t&&"mapValue"in t}function Ha(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return lu(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ha(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ha(t.arrayValue.values[n]);return e}return Object.assign({},t)}function s2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Dn{constructor(e){this.value=e}static empty(){return new Dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ff(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ha(n)}setAll(e){let n=Mt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ha(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ff(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ff(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){lu(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dn(Ha(this.value))}}/**
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
 */class wt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new wt(e,0,ee.min(),ee.min(),ee.min(),Dn.empty(),0)}static newFoundDocument(e,n,r,i){return new wt(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new wt(e,2,n,ee.min(),ee.min(),Dn.empty(),0)}static newUnknownDocument(e,n){return new wt(e,3,n,ee.min(),ee.min(),Dn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ph{constructor(e,n){this.position=e,this.inclusive=n}}function Ww(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=co(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function qw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Wa{constructor(e,n="asc"){this.field=e,this.dir=n}}function o2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class jI{}class We extends jI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new l2(e,n,r):n==="array-contains"?new h2(e,r):n==="in"?new d2(e,r):n==="not-in"?new f2(e,r):n==="array-contains-any"?new p2(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new u2(e,r):new c2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(co(n,this.value)):n!==null&&Gi(this.value)===Gi(n)&&this.matchesComparison(co(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class bn extends jI{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new bn(e,n)}matches(e){return zI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function zI(t){return t.op==="and"}function HI(t){return a2(t)&&zI(t)}function a2(t){for(const e of t.filters)if(e instanceof bn)return!1;return!0}function bm(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+ho(t.value);if(HI(t))return t.filters.map(e=>bm(e)).join(",");{const e=t.filters.map(n=>bm(n)).join(",");return`${t.op}(${e})`}}function WI(t,e){return t instanceof We?function(n,r){return r instanceof We&&n.op===r.op&&n.field.isEqual(r.field)&&Wn(n.value,r.value)}(t,e):t instanceof bn?function(n,r){return r instanceof bn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&WI(s,r.filters[o]),!0):!1}(t,e):void te()}function qI(t){return t instanceof We?function(e){return`${e.field.canonicalString()} ${e.op} ${ho(e.value)}`}(t):t instanceof bn?function(e){return e.op.toString()+" {"+e.getFilters().map(qI).join(" ,")+"}"}(t):"Filter"}class l2 extends We{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class u2 extends We{constructor(e,n){super(e,"in",n),this.keys=KI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class c2 extends We{constructor(e,n){super(e,"not-in",n),this.keys=KI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function KI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class h2 extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ov(n)&&bl(n.arrayValue,this.value)}}class d2 extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bl(this.value.arrayValue,n)}}class f2 extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(bl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!bl(this.value.arrayValue,n)}}class p2 extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ov(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>bl(this.value.arrayValue,r))}}/**
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
 */class m2{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function Kw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new m2(t,e,n,r,i,s,o)}function av(t){const e=he(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>bm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Cd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ho(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ho(r)).join(",")),e.dt=n}return e.dt}function lv(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!o2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!WI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qw(t.startAt,e.startAt)&&qw(t.endAt,e.endAt)}function Rm(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class uu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function g2(t,e,n,r,i,s,o,a){return new uu(t,e,n,r,i,s,o,a)}function uv(t){return new uu(t)}function Gw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function GI(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function cv(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function QI(t){return t.collectionGroup!==null}function Ks(t){const e=he(t);if(e.wt===null){e.wt=[];const n=cv(e),r=GI(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Wa(n)),e.wt.push(new Wa(Mt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Wa(Mt.keyField(),s))}}}return e.wt}function pr(t){const e=he(t);if(!e._t)if(e.limitType==="F")e._t=Kw(e.path,e.collectionGroup,Ks(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ks(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Wa(s.field,o))}const r=e.endAt?new ph(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ph(e.startAt.position,e.startAt.inclusive):null;e._t=Kw(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Am(t,e){e.getFirstInequalityField(),cv(t);const n=t.filters.concat([e]);return new uu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Pm(t,e,n){return new uu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cu(t,e){return lv(pr(t),pr(e))&&t.limitType===e.limitType}function YI(t){return`${av(pr(t))}|lt:${t.limitType}`}function Om(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>qI(r)).join(", ")}]`),Cd(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ho(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ho(r)).join(",")),`Target(${n})`}(pr(t))}; limitType=${t.limitType})`}function Td(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):G.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Ks(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Ww(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ks(n),r)||n.endAt&&!function(i,s,o){const a=Ww(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ks(n),r))}(t,e)}function y2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function XI(t){return(e,n)=>{let r=!1;for(const i of Ks(t)){const s=v2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function v2(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?co(a,l):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
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
 */class Uo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){lu(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return VI(this.inner)}size(){return this.innerSize}}/**
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
 */const _2=new Me(G.comparator);function ri(){return _2}const JI=new Me(G.comparator);function ka(...t){let e=JI;for(const n of t)e=e.insert(n.key,n);return e}function w2(t){let e=JI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ni(){return qa()}function ZI(){return qa()}function qa(){return new Uo(t=>t.toString(),(t,e)=>t.isEqual(e))}new Me(G.comparator);const E2=new bt(G.comparator);function ue(...t){let e=E2;for(const n of t)e=e.add(n);return e}const C2=new bt(me);function T2(){return C2}/**
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
 */function ek(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fh(e)?"-0":e}}function tk(t){return{integerValue:""+t}}function S2(t,e){return n2(e)?tk(e):ek(t,e)}/**
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
 */class Sd{constructor(){this._=void 0}}function I2(t,e,n){return t instanceof Dm?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&iv(i)&&(i=sv(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof mh?nk(t,e):t instanceof gh?rk(t,e):function(r,i){const s=x2(r,i),o=Qw(s)+Qw(r.gt);return Nm(s)&&Nm(r.gt)?tk(o):ek(r.serializer,o)}(t,e)}function k2(t,e,n){return t instanceof mh?nk(t,e):t instanceof gh?rk(t,e):n}function x2(t,e){return t instanceof Lm?Nm(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Dm extends Sd{}class mh extends Sd{constructor(e){super(),this.elements=e}}function nk(t,e){const n=ik(e);for(const r of t.elements)n.some(i=>Wn(i,r))||n.push(r);return{arrayValue:{values:n}}}class gh extends Sd{constructor(e){super(),this.elements=e}}function rk(t,e){let n=ik(e);for(const r of t.elements)n=n.filter(i=>!Wn(i,r));return{arrayValue:{values:n}}}class Lm extends Sd{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Qw(t){return ze(t.integerValue||t.doubleValue)}function ik(t){return ov(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function N2(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof mh&&r instanceof mh||n instanceof gh&&r instanceof gh?uo(n.elements,r.elements,Wn):n instanceof Lm&&r instanceof Lm?Wn(n.gt,r.gt):n instanceof Dm&&r instanceof Dm}(t.transform,e.transform)}class Mi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mi}static exists(e){return new Mi(void 0,e)}static updateTime(e){return new Mi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hv{}function sk(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new R2(t.key,Mi.none()):new dv(t.key,t.data,Mi.none());{const n=t.data,r=Dn.empty();let i=new bt(Mt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Id(t.key,r,new Pr(i.toArray()),Mi.none())}}function b2(t,e,n){t instanceof dv?function(r,i,s){const o=r.value.clone(),a=Xw(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Id?function(r,i,s){if(!yc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Xw(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(ok(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ka(t,e,n,r){return t instanceof dv?function(i,s,o,a){if(!yc(i.precondition,s))return o;const l=i.value.clone(),u=Jw(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Id?function(i,s,o,a){if(!yc(i.precondition,s))return o;const l=Jw(i.fieldTransforms,a,s),u=s.data;return u.setAll(ok(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return yc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Yw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&uo(n,r,(i,s)=>N2(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class dv extends hv{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Id extends hv{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ok(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Xw(t,e,n){const r=new Map;Qe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,k2(o,a,n[i]))}return r}function Jw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,I2(s,o,e))}return r}class R2 extends hv{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class A2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&b2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ka(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ka(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ZI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=sk(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&uo(this.mutations,e.mutations,(n,r)=>Yw(n,r))&&uo(this.baseMutations,e.baseMutations,(n,r)=>Yw(n,r))}}/**
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
 */class P2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class O2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var je,oe;function ak(t){if(t===void 0)return fr("GRPC error has no .code"),R.UNKNOWN;switch(t){case je.OK:return R.OK;case je.CANCELLED:return R.CANCELLED;case je.UNKNOWN:return R.UNKNOWN;case je.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case je.INTERNAL:return R.INTERNAL;case je.UNAVAILABLE:return R.UNAVAILABLE;case je.UNAUTHENTICATED:return R.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case je.NOT_FOUND:return R.NOT_FOUND;case je.ALREADY_EXISTS:return R.ALREADY_EXISTS;case je.PERMISSION_DENIED:return R.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case je.ABORTED:return R.ABORTED;case je.OUT_OF_RANGE:return R.OUT_OF_RANGE;case je.UNIMPLEMENTED:return R.UNIMPLEMENTED;case je.DATA_LOSS:return R.DATA_LOSS;default:return te()}}(oe=je||(je={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class fv{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Gu}static getOrCreateInstance(){return Gu===null&&(Gu=new fv),Gu}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Gu=null;/**
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
 */function D2(){return new TextEncoder}/**
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
 */const L2=new Ws([4294967295,4294967295],0);function Zw(t){const e=D2().encode(t),n=new VM;return n.update(e),new Uint8Array(n.digest())}function eE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ws([n,r],0),new Ws([i,s],0)]}class pv{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xa(`Invalid padding: ${n}`);if(r<0)throw new xa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xa(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Ws.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Ws.fromNumber(r)));return i.compare(L2)===1&&(i=new Ws([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Zw(e),[r,i]=eE(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new pv(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Zw(e),[r,i]=eE(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class kd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,hu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new kd(ee.min(),i,new Me(me),ri(),ue())}}class hu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new hu(r,n,ue(),ue(),ue())}}/**
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
 */class vc{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class lk{constructor(e,n){this.targetId=e,this.Vt=n}}class uk{constructor(e,n,r=Pt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class tE{constructor(){this.St=0,this.Dt=rE(),this.Ct=Pt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=ue(),n=ue(),r=ue();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:te()}}),new hu(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=rE()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class M2{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=ri(),this.zt=nE(),this.Wt=new Me(me)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Rm(o))if(i===0){const a=new G(o.path);this.Yt(r,a,wt.newNoDocument(a,ee.min()))}else Qe(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=fv.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,p,y,v,f,m;const g={localCacheCount:c,existenceFilterCount:h.count},w=h.unchangedNames;return w&&(g.bloomFilter={applied:u===0,hashCount:(d=w==null?void 0:w.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(y=(p=w==null?void 0:w.bits)===null||p===void 0?void 0:p.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(m=(f=w==null?void 0:w.bits)===null||f===void 0?void 0:f.padding)!==null&&m!==void 0?m:0}),g}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Ki(s).toUint8Array()}catch(c){if(c instanceof BI)return lo("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new pv(l,o,a)}catch(c){return lo(c instanceof xa?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Rm(a.target)){const l=new G(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,wt.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=ue();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new kd(e,n,this.Wt,this.jt,r);return this.jt=ri(),this.zt=nE(),this.Wt=new Me(me),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new tE,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new bt(me),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new tE),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function nE(){return new Me(G.comparator)}function rE(){return new Me(G.comparator)}const $2=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),F2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),U2=(()=>({and:"AND",or:"OR"}))();class V2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mm(t,e){return t.useProto3Json||Cd(e)?e:{value:e}}function $m(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ck(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Gs(t){return Qe(!!t),ee.fromTimestamp(function(e){const n=ni(e);return new st(n.seconds,n.nanos)}(t))}function hk(t,e){return function(n){return new Re(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function dk(t){const e=Re.fromString(t);return Qe(gk(e)),e}function Uf(t,e){const n=dk(e);if(n.get(1)!==t.databaseId.projectId)throw new B(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(fk(n))}function Fm(t,e){return hk(t.databaseId,e)}function B2(t){const e=dk(t);return e.length===4?Re.emptyPath():fk(e)}function iE(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fk(t){return Qe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function j2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(Qe(u===void 0||typeof u=="string"),Pt.fromBase64String(u||"")):(Qe(u===void 0||u instanceof Uint8Array),Pt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?R.UNKNOWN:ak(l.code);return new B(u,l.message||"")}(o);n=new uk(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Uf(t,r.document.name),s=Gs(r.document.updateTime),o=r.document.createTime?Gs(r.document.createTime):ee.min(),a=new Dn({mapValue:{fields:r.document.fields}}),l=wt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new vc(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Uf(t,r.document),s=r.readTime?Gs(r.readTime):ee.min(),o=wt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new vc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Uf(t,r.document),s=r.removedTargetIds||[];n=new vc([],s,i,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new O2(i,s),a=r.targetId;n=new lk(a,o)}}return n}function z2(t,e){return{documents:[Fm(t,e.path)]}}function H2(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Fm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return mk(bn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:_s(c.field),direction:K2(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Mm(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function W2(t){let e=B2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Qe(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=pk(c);return h instanceof bn&&HI(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Wa(ws(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Cd(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new ph(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new ph(d,h)}(n.endAt)),g2(e,i,o,s,a,"F",l,u)}function q2(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function pk(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ws(e.unaryFilter.field);return We.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ws(e.unaryFilter.field);return We.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ws(e.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ws(e.unaryFilter.field);return We.create(s,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(e){return We.create(ws(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return bn.create(e.compositeFilter.filters.map(n=>pk(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return te()}}(e.compositeFilter.op))}(t):te()}function K2(t){return $2[t]}function G2(t){return F2[t]}function Q2(t){return U2[t]}function _s(t){return{fieldPath:t.canonicalString()}}function ws(t){return Mt.fromServerFormat(t.fieldPath)}function mk(t){return t instanceof We?function(e){if(e.op==="=="){if(Hw(e.value))return{unaryFilter:{field:_s(e.field),op:"IS_NAN"}};if(zw(e.value))return{unaryFilter:{field:_s(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Hw(e.value))return{unaryFilter:{field:_s(e.field),op:"IS_NOT_NAN"}};if(zw(e.value))return{unaryFilter:{field:_s(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_s(e.field),op:G2(e.op),value:e.value}}}(t):t instanceof bn?function(e){const n=e.getFilters().map(r=>mk(r));return n.length===1?n[0]:{compositeFilter:{op:Q2(e.op),filters:n}}}(t):te()}function gk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Or{constructor(e,n,r,i,s=ee.min(),o=ee.min(),a=Pt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Y2{constructor(e){this.fe=e}}function X2(t){const e=W2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pm(e,e.limit,"L"):e}/**
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
 */class J2{constructor(){this.rn=new Z2}addToCollectionParentIndex(e,n){return this.rn.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(ti.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(ti.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class Z2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new bt(Re.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new bt(Re.comparator)).toArray()}}/**
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
 */class fo{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new fo(0)}static Mn(){return new fo(-1)}}/**
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
 */class e${constructor(){this.changes=new Uo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class t${constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class n${constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ka(r.mutation,i,Pr.empty(),st.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const i=Ni();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ka();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ni();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ri();const o=qa(),a=qa();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Id)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ka(c.mutation,u,c.mutation.getFieldMask(),st.now())):o.set(u.key,Pr.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new t$(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=qa();let i=new Me((o,a)=>o-a),s=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Pr.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ue()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=ZI();c.forEach(d=>{if(!s.has(d)){const p=sk(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return G.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):QI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(Ni());let a=-1,l=s;return o.next(u=>x.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?x.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ue())).next(c=>({batchId:a,changes:w2(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=ka();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ka();return this.indexManager.getCollectionParents(e,i).next(o=>x.forEach(o,a=>{const l=function(u,c){return new uu(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,wt.newInvalidDocument(u)))});let o=ka();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Ka(u.mutation,l,Pr.empty(),st.now()),Td(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class r${constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return x.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:Gs(r.createTime)}),x.resolve()}getNamedQuery(e,n){return x.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:X2(r.bundledQuery),readTime:Gs(r.readTime)}}(n)),x.resolve()}}/**
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
 */class i${constructor(){this.overlays=new Me(G.comparator),this.ls=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ni();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=Ni(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Me((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Ni(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Ni(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return x.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new P2(n,r));let s=this.ls.get(n);s===void 0&&(s=ue(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
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
 */class mv{constructor(){this.fs=new bt(nt.ds),this.ws=new bt(nt._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new nt(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new nt(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new G(new Re([])),r=new nt(n,e),i=new nt(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new G(new Re([])),r=new nt(n,e),i=new nt(n,e+1);let s=ue();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new nt(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return G.comparator(e.key,n.key)||me(e.As,n.As)}static _s(e,n){return me(e.As,n.As)||G.comparator(e.key,n.key)}}/**
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
 */class s${constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new bt(nt.ds)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new A2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new nt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),i=new nt(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new bt(me);return n.forEach(i=>{const s=new nt(i,0),o=new nt(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),x.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new nt(new G(s),0);let a=new bt(me);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),x.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Qe(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return x.forEach(n.mutations,i=>{const s=new nt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new nt(n,0),i=this.Rs.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class o${constructor(e){this.Ds=e,this.docs=new Me(G.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(n))}getEntries(e,n){let r=ri();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():wt.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ri();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||ZM(JM(c),r)<=0||(i.has(c.key)||Td(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,n,r,i){te()}Cs(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new a$(this)}getSize(e){return x.resolve(this.size)}}class a$ extends e${constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class l${constructor(e){this.persistence=e,this.xs=new Uo(n=>av(n),lv),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Ns=0,this.ks=new mv,this.targetCount=0,this.Ms=fo.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),x.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new fo(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Fn(n),x.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.ks.containsKey(n))}}/**
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
 */class u${constructor(e,n){this.$s={},this.overlays={},this.Os=new rv(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new l$(this),this.indexManager=new J2,this.remoteDocumentCache=function(r){return new o$(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new Y2(n),this.qs=new r$(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new i$,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new s$(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new c$(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return x.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class c$ extends t2{constructor(e){super(),this.currentSequenceNumber=e}}class gv{constructor(e){this.persistence=e,this.Qs=new mv,this.js=null}static zs(e){return new gv(e)}get Ws(){if(this.js)return this.js;throw te()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),x.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Ws,r=>{const i=G.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return x.or([()=>x.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class yv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=ue(),i=ue();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new yv(e,n.fromCache,r,i)}}/**
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
 */class h${constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(Gw(n))return x.resolve(null);let r=pr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Pm(n,null,"F"),r=pr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ue(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,Pm(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return Gw(n)||i.isEqual(ee.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(Fw()<=ae.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Om(n)),this.Wi(e,o,n,XM(i,-1)))})}ji(e,n){let r=new bt(XI(e));return n.forEach((i,s)=>{Td(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return Fw()<=ae.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Om(n)),this.Ui.getDocumentsMatchingQuery(e,n,ti.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class d${constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Me(me),this.Yi=new Uo(s=>av(s),lv),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new n$(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function f$(t,e,n,r){return new d$(t,e,n,r)}async function yk(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ue();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function vk(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function p$(t,e){const n=he(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(Pt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(y,v,f){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:f.addedDocuments.size+f.modifiedDocuments.size+f.removedDocuments.size>0}(d,p,c)&&a.push(n.Bs.updateTargetData(s,p))});let l=ri(),u=ue();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(m$(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(ee.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return x.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function m$(t,e,n){let r=ue(),i=ue();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ri();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function g$(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new Or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Um(t,e,n){const r=he(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!au(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function sE(t,e,n){const r=he(t);let i=ee.min(),s=ue();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=he(a),h=c.Yi.get(u);return h!==void 0?x.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,pr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:ue())).next(a=>(y$(r,y2(e),a),{documents:a,ir:s})))}function y$(t,e,n){let r=t.Xi.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class oE{constructor(){this.activeTargetIds=T2()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class v${constructor(){this.Hr=new oE,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new oE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _${Yr(e){}shutdown(){}}/**
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
 */class aE{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qu=null;function Vf(){return Qu===null?Qu=268435456+Math.round(2147483648*Math.random()):Qu++,"0x"+Qu.toString(16)}/**
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
 */const w$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class E${constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const yt="WebChannelConnection";class C$ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=Vf(),a=this.To(e,n);H("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(H("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw lo("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Fo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=w$[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=Vf();return new Promise((o,a)=>{const l=new UM;l.setWithCredentials(!0),l.listenOnce(MM.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case $f.NO_ERROR:const c=l.getResponseJson();H(yt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case $f.TIMEOUT:H(yt,`RPC '${e}' ${s} timed out`),a(new B(R.DEADLINE_EXCEEDED,"Request time out"));break;case $f.HTTP_ERROR:const h=l.getStatus();if(H(yt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(v){const f=v.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(f)>=0?f:R.UNKNOWN}(p.status);a(new B(y,p.message))}else a(new B(R.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new B(R.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{H(yt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);H(yt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=Vf(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=DM(),a=LM(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new FM({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");H(yt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,p=!1;const y=new E$({ro:f=>{p?H(yt,`Not sending because RPC '${e}' stream ${i} is closed:`,f):(d||(H(yt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),H(yt,`RPC '${e}' stream ${i} sending:`,f),h.send(f))},oo:()=>h.close()}),v=(f,m,g)=>{f.listen(m,w=>{try{g(w)}catch(C){setTimeout(()=>{throw C},0)}})};return v(h,Wu.EventType.OPEN,()=>{p||H(yt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Wu.EventType.CLOSE,()=>{p||(p=!0,H(yt,`RPC '${e}' stream ${i} transport closed`),y.wo())}),v(h,Wu.EventType.ERROR,f=>{p||(p=!0,lo(yt,`RPC '${e}' stream ${i} transport errored:`,f),y.wo(new B(R.UNAVAILABLE,"The operation could not be completed")))}),v(h,Wu.EventType.MESSAGE,f=>{var m;if(!p){const g=f.data[0];Qe(!!g);const w=g,C=w.error||((m=w[0])===null||m===void 0?void 0:m.error);if(C){H(yt,`RPC '${e}' stream ${i} received error:`,C);const k=C.status;let I=function($){const O=je[$];if(O!==void 0)return ak(O)}(k),L=C.message;I===void 0&&(I=R.INTERNAL,L="Unknown error status: "+k+" with message "+C.message),p=!0,y.wo(new B(I,L)),h.close()}else H(yt,`RPC '${e}' stream ${i} received:`,g),y._o(g)}}),v(a,$M.STAT_EVENT,f=>{f.stat===Mw.PROXY?H(yt,`RPC '${e}' stream ${i} detected buffering proxy`):f.stat===Mw.NOPROXY&&H(yt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}function Bf(){return typeof document!="undefined"?document:null}/**
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
 */function xd(t){return new V2(t,!0)}/**
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
 */class _k{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class T${constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new _k(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(fr(n.toString()),fr("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new B(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class S$ extends T${constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=j2(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ee.min():s.readTime?Gs(s.readTime):ee.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=iE(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Rm(a)?{documents:z2(i,a)}:{query:H2(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=ck(i,s.resumeToken);const l=Mm(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(ee.min())>0){o.readTime=$m(i,s.snapshotVersion.toTimestamp());const l=Mm(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=q2(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=iE(this.serializer),n.removeTarget=e,this.Wo(n)}}/**
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
 */class I$ extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new B(R.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(R.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(R.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class k${constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(fr(n),this.mu=!1):H("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class x${constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{fu(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=he(a);l.vu.add(4),await du(l),l.bu.set("Unknown"),l.vu.delete(4),await Nd(l)}(this))})}),this.bu=new k$(r,i)}}async function Nd(t){if(fu(t))for(const e of t.Ru)await e(!0)}async function du(t){for(const e of t.Ru)await e(!1)}function wk(t,e){const n=he(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),wv(n)?_v(n):Vo(n).Ko()&&vv(n,e))}function Ek(t,e){const n=he(t),r=Vo(n);n.Au.delete(e),r.Ko()&&Ck(n,e),n.Au.size===0&&(r.Ko()?r.jo():fu(n)&&n.bu.set("Unknown"))}function vv(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vo(t).su(e)}function Ck(t,e){t.Vu.qt(e),Vo(t).iu(e)}function _v(t){t.Vu=new M2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Vo(t).start(),t.bu.gu()}function wv(t){return fu(t)&&!Vo(t).Uo()&&t.Au.size>0}function fu(t){return he(t).vu.size===0}function Tk(t){t.Vu=void 0}async function N$(t){t.Au.forEach((e,n)=>{vv(t,e)})}async function b$(t,e){Tk(t),wv(t)?(t.bu.Iu(e),_v(t)):t.bu.set("Unknown")}async function R$(t,e,n){if(t.bu.set("Online"),e instanceof uk&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await lE(t,r)}else if(e instanceof vc?t.Vu.Ht(e):e instanceof lk?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(ee.min()))try{const r=await vk(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(Pt.EMPTY_BYTE_STRING,u.snapshotVersion)),Ck(i,a);const c=new Or(u.target,a,l,u.sequenceNumber);vv(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await lE(t,r)}}async function lE(t,e,n){if(!au(e))throw e;t.vu.add(1),await du(t),t.bu.set("Offline"),n||(n=()=>vk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Nd(t)})}async function uE(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=fu(n);n.vu.add(3),await du(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Nd(n)}async function A$(t,e){const n=he(t);e?(n.vu.delete(2),await Nd(n)):e||(n.vu.add(2),await du(n),n.bu.set("Unknown"))}function Vo(t){return t.Su||(t.Su=function(e,n,r){const i=he(e);return i.fu(),new S$(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:N$.bind(null,t),ao:b$.bind(null,t),nu:R$.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),wv(t)?_v(t):t.bu.set("Unknown")):(await t.Su.stop(),Tk(t))})),t.Su}/**
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
 */class Ev{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new qs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ev(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sk(t,e){if(fr("AsyncQueue",`${e}: ${t}`),au(t))return new B(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Qs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=ka(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new Qs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class cE{constructor(){this.Cu=new Me(G.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):te():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class po{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new po(e,n,Qs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class P${constructor(){this.Nu=void 0,this.listeners=[]}}class O${constructor(){this.queries=new Uo(e=>YI(e),cu),this.onlineState="Unknown",this.ku=new Set}}async function D$(t,e){const n=he(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new P$),i)try{s.Nu=await n.onListen(r)}catch(o){const a=Sk(o,`Initialization of query '${Om(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&Cv(n)}async function L$(t,e){const n=he(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function M$(t,e){const n=he(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&Cv(n)}function $$(t,e,n){const r=he(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Cv(t){t.ku.forEach(e=>{e.next()})}class F${constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new po(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class Ik{constructor(e){this.key=e}}class kk{constructor(e){this.key=e}}class U${constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=ue(),this.mutatedKeys=ue(),this.tc=XI(e),this.ec=new Qs(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new cE,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=Td(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let f=!1;d&&p?d.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),f=!0):this.rc(d,p)||(r.track({type:2,doc:p}),f=!0,(l&&this.tc(p,l)>0||u&&this.tc(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),f=!0):d&&!p&&(r.track({type:1,doc:d}),f=!0,(l||u)&&(a=!0)),f&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return p(h)-p(d)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new po(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new cE,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=ue(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new kk(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new Ik(r))}),n}hc(e){this.Yu=e.ir,this.Zu=ue();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return po.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class V${constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class B${constructor(e){this.key=e,this.fc=!1}}class j${constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Uo(a=>YI(a),cu),this._c=new Map,this.mc=new Set,this.gc=new Me(G.comparator),this.yc=new Map,this.Ic=new mv,this.Tc={},this.Ec=new Map,this.Ac=fo.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function z$(t,e){const n=Y$(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await g$(n.localStore,pr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await H$(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&wk(n.remoteStore,o)}return i}async function H$(t,e,n,r,i){t.Rc=(h,d,p)=>async function(y,v,f,m){let g=v.view.sc(f);g.zi&&(g=await sE(y.localStore,v.query,!1).then(({documents:k})=>v.view.sc(k,g)));const w=m&&m.targetChanges.get(v.targetId),C=v.view.applyChanges(g,y.isPrimaryClient,w);return dE(y,v.targetId,C.cc),C.snapshot}(t,h,d,p);const s=await sE(t.localStore,e,!0),o=new U$(e,s.ir),a=o.sc(s.documents),l=hu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);dE(t,n,u.cc);const c=new V$(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function W$(t,e){const n=he(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!cu(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Um(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ek(n.remoteStore,r.targetId),Vm(n,r.targetId)}).catch(nv)):(Vm(n,r.targetId),await Um(n.localStore,r.targetId,!0))}async function xk(t,e){const n=he(t);try{const r=await p$(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(Qe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?Qe(o.fc):i.removedDocuments.size>0&&(Qe(o.fc),o.fc=!1))}),await bk(n,r,e)}catch(r){await nv(r)}}function hE(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=he(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&Cv(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function q$(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new Me(G.comparator);o=o.insert(s,wt.newNoDocument(s,ee.min()));const a=ue().add(s),l=new kd(ee.min(),new Map,new Me(me),o,a);await xk(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),Tv(r)}else await Um(r.localStore,e,!1).then(()=>Vm(r,e,n)).catch(nv)}function Vm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||Nk(t,r)})}function Nk(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Ek(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Tv(t))}function dE(t,e,n){for(const r of n)r instanceof Ik?(t.Ic.addReference(r.key,e),K$(t,r)):r instanceof kk?(H("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||Nk(t,r.key)):te()}function K$(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(H("SyncEngine","New document in limbo: "+n),t.mc.add(r),Tv(t))}function Tv(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new G(Re.fromString(e)),r=t.Ac.next();t.yc.set(r,new B$(n)),t.gc=t.gc.insert(n,r),wk(t.remoteStore,new Or(pr(uv(n.path)),r,"TargetPurposeLimboResolution",rv.ct))}}async function bk(t,e,n){const r=he(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=yv.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=he(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>x.forEach(l,h=>x.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>x.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!au(c))throw c;H("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ji.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);u.Ji=u.Ji.insert(h,y)}}}(r.localStore,s))}async function G$(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await yk(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new B(R.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bk(n,r.er)}}function Q$(t,e){const n=he(t),r=n.yc.get(e);if(r&&r.fc)return ue().add(r.key);{let i=ue();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function Y$(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xk.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Q$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=q$.bind(null,e),e.dc.nu=M$.bind(null,e.eventManager),e.dc.Pc=$$.bind(null,e.eventManager),e}class fE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=xd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return f$(this.persistence,new h$,e.initialUser,this.serializer)}createPersistence(e){return new u$(gv.zs,this.serializer)}createSharedClientState(e){return new v$}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class X${async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=G$.bind(null,this.syncEngine),await A$(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new O$}createDatastore(e){const n=xd(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new C$(i));var i;return function(s,o,a,l){return new I$(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>hE(this.syncEngine,a,0),o=aE.D()?new aE:new _$,new x$(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new j$(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=he(e);H("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await du(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class J${constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):fr("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Z${constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=QM.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Sk(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jf(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await yk(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function pE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tF(t);H("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>uE(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>uE(e.remoteStore,s)),t._onlineComponents=e}function eF(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function tF(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await jf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!eF(n))throw n;lo("Error using user provided cache. Falling back to memory cache: "+n),await jf(t,new fE)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await jf(t,new fE);return t._offlineComponents}async function nF(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await pE(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await pE(t,new X$))),t._onlineComponents}async function mE(t){const e=await nF(t),n=e.eventManager;return n.onListen=z$.bind(null,e.syncEngine),n.onUnlisten=W$.bind(null,e.syncEngine),n}/**
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
 */function Rk(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const gE=new Map;/**
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
 */function rF(t,e,n){if(!n)throw new B(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iF(t,e,n,r){if(e===!0&&r===!0)throw new B(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yE(t){if(G.isDocumentKey(t))throw new B(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function bd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function _c(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bd(t);throw new B(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class vE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rk((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Sv{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vE(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new BM;switch(n.type){case"firstParty":return new WM(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new B(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=gE.get(e);n&&(H("ComponentProvider","Removing Datastore"),gE.delete(e),n.terminate())}(this),Promise.resolve()}}function sF(t,e,n,r={}){var i;const s=(t=_c(t,Sv))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&lo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=_t.MOCK_USER;else{a=sP(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new B(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new _t(u)}t._authCredentials=new jM(new UI(a,l))}}/**
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
 */class Gn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ys(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gn(this.firestore,e,this._key)}}class ii{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ii(this.firestore,e,this._query)}}class Ys extends ii{constructor(e,n,r){super(e,n,uv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gn(this.firestore,null,new G(e))}withConverter(e){return new Ys(this.firestore,e,this._path)}}function oF(t,e,...n){if(t=gt(t),rF("collection","path",e),t instanceof Sv){const r=Re.fromString(e,...n);return yE(r),new Ys(t,null,r)}{if(!(t instanceof Gn||t instanceof Ys))throw new B(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return yE(r),new Ys(t.firestore,null,r)}}function aF(t,e){return t=gt(t),e=gt(e),t instanceof ii&&e instanceof ii&&t.firestore===e.firestore&&cu(t._query,e._query)&&t.converter===e.converter}/**
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
 */class lF{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new _k(this,"async_queue_retry"),this.Xc=()=>{const n=Bf();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Bf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Bf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new qs;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!au(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw fr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=Ev.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&te()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function _E(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Bm extends Sv{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new lF,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ak(this),this._firestoreClient.terminate()}}function uF(t,e){const n=typeof t=="object"?t:eS(),r=typeof t=="string"?t:e||"(default)",i=Kl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=iP("firestore");s&&sF(i,...s)}return i}function cF(t){return t._firestoreClient||Ak(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ak(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new i2(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Rk(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Z$(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.cache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class mo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mo(Pt.fromBase64String(e))}catch(n){throw new B(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new mo(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Pk{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ok{constructor(e){this._methodName=e}}/**
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
 */class Iv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
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
 */const hF=/^__.*__$/;function Dk(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class kv{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new kv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return jm(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Dk(this.ca)&&hF.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class dF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||xd(e)}ya(e,n,r,i=!1){return new kv({ca:e,methodName:n,ga:r,path:Mt.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fF(t){const e=t._freezeSettings(),n=xd(t._databaseId);return new dF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pF(t,e,n,r=!1){return xv(n,t.ya(r?4:3,e))}function xv(t,e){if(Lk(t=gt(t)))return gF("Unsupported field value:",e,t),mF(t,e);if(t instanceof Ok)return function(n,r){if(!Dk(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=xv(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=gt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return S2(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=st.fromDate(n);return{timestampValue:$m(r.serializer,i)}}if(n instanceof st){const i=new st(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:$m(r.serializer,i)}}if(n instanceof Iv)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof mo)return{bytesValue:ck(r.serializer,n._byteString)};if(n instanceof Gn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:hk(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${bd(n)}`)}(t,e)}function mF(t,e){const n={};return VI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):lu(t,(r,i)=>{const s=xv(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Lk(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof Iv||t instanceof mo||t instanceof Gn||t instanceof Ok)}function gF(t,e,n){if(!Lk(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=bd(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}const yF=new RegExp("[~\\*/\\[\\]]");function vF(t,e,n){if(e.search(yF)>=0)throw jm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Pk(...e.split("."))._internalPath}catch{throw jm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function jm(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new B(R.INVALID_ARGUMENT,a+t+l)}/**
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
 */class Mk{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Gn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _F(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Nv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _F extends Mk{data(){return super.data()}}function Nv(t,e){return typeof e=="string"?vF(t,e):e instanceof Pk?e._internalPath:e._delegate._internalPath}/**
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
 */function wF(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bv{}class EF extends bv{}function CF(t,e,...n){let r=[];e instanceof bv&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Rv).length,o=i.filter(a=>a instanceof Rd).length;if(s>1||s>0&&o>0)throw new B(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Rd extends EF{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Rd(e,n,r)}_apply(e){const n=this._parse(e);return $k(e._query,n),new ii(e.firestore,e.converter,Am(e._query,n))}_parse(e){const n=fF(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new B(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){EE(c,u);const d=[];for(const p of c)d.push(wE(a,i,p));h={arrayValue:{values:d}}}else h=wE(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||EE(c,u),h=pF(o,s,c,u==="in"||u==="not-in");return We.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function TF(t,e,n){const r=e,i=Nv("where",t);return Rd._create(i,r,n)}class Rv extends bv{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Rv(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:bn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)$k(s,a),s=Am(s,a)}(e._query,n),new ii(e.firestore,e.converter,Am(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function wE(t,e,n){if(typeof(n=gt(n))=="string"){if(n==="")throw new B(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!QI(e)&&n.indexOf("/")!==-1)throw new B(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Re.fromString(n));if(!G.isDocumentKey(r))throw new B(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return jw(t,new G(r))}if(n instanceof Gn)return jw(t,n._key);throw new B(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bd(n)}.`)}function EE(t,e){if(!Array.isArray(t)||t.length===0)throw new B(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $k(t,e){if(e.isInequality()){const r=cv(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new B(R.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=GI(t);s!==null&&SF(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function SF(t,e,n){if(!n.isEqual(e))throw new B(R.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class IF{convertValue(e,n="none"){switch(Gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw te()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return lu(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Iv(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=sv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xl(e));default:return null}}convertTimestamp(e){const n=ni(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);Qe(gk(r));const i=new Nl(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||fr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class Na{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Fk extends Mk{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Nv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class wc extends Fk{data(e={}){return super.data(e)}}class kF{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Na(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new wc(this._firestore,this._userDataWriter,r.key,r,new Na(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new wc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Na(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new wc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Na(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:xF(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}class Uk extends IF{constructor(e){super(),this.firestore=e}convertBytes(e){return new mo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Gn(this.firestore,null,n)}}function NF(t,...e){var n,r,i;t=gt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||_E(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(_E(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Gn)u=_c(t.firestore,Bm),c=uv(t._key.path),l={next:h=>{e[o]&&e[o](bF(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=_c(t,ii);u=_c(h.firestore,Bm),c=h._query;const d=new Uk(u);l={next:p=>{e[o]&&e[o](new kF(u,d,h,p))},error:e[o+1],complete:e[o+2]},wF(t._query)}return function(h,d,p,y){const v=new J$(y),f=new F$(d,v,p);return h.asyncQueue.enqueueAndForget(async()=>D$(await mE(h),f)),()=>{v.Dc(),h.asyncQueue.enqueueAndForget(async()=>L$(await mE(h),f))}}(cF(u),c,a,l)}function bF(t,e,n){const r=n.docs.get(e._key),i=new Uk(t);return new Fk(t,i,e._key,r,new Na(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Fo=n})(yr),fn(new tn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Bm(new zM(n.getProvider("auth-internal")),new KM(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new B(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nl(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),qe($w,"3.12.2",t),qe($w,"3.12.2","esm2017")})();const CE="@firebase/database",TE="0.14.4";/**
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
 */let Vk="";function RF(t){Vk=t}/**
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
 */class AF{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),it(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:dl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class PF{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return gr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Bk=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new AF(e)}}catch{}return new PF},bi=Bk("localStorage"),zm=Bk("sessionStorage");/**
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
 */const Xs=new ql("@firebase/database"),OF=function(){let t=1;return function(){return t++}}(),jk=function(t){const e=vP(t),n=new pP;n.update(e);const r=n.digest();return _y.encodeByteArray(r)},pu=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=pu.apply(null,r):typeof r=="object"?e+=it(r):e+=r,e+=" "}return e};let $i=null,SE=!0;const DF=function(t,e){A(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Xs.logLevel=ae.VERBOSE,$i=Xs.log.bind(Xs),e&&zm.set("logging_enabled",!0)):typeof t=="function"?$i=t:($i=null,zm.remove("logging_enabled"))},Et=function(...t){if(SE===!0&&(SE=!1,$i===null&&zm.get("logging_enabled")===!0&&DF(!0)),$i){const e=pu.apply(null,t);$i(e)}},mu=function(t){return function(...e){Et(t,...e)}},Hm=function(...t){const e="FIREBASE INTERNAL ERROR: "+pu(...t);Xs.error(e)},Qi=function(...t){const e=`FIREBASE FATAL ERROR: ${pu(...t)}`;throw Xs.error(e),new Error(e)},en=function(...t){const e="FIREBASE WARNING: "+pu(...t);Xs.warn(e)},LF=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&en("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},zk=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},MF=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},go="[MIN_NAME]",Yi="[MAX_NAME]",Bo=function(t,e){if(t===e)return 0;if(t===go||e===Yi)return-1;if(e===go||t===Yi)return 1;{const n=IE(t),r=IE(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},$F=function(t,e){return t===e?0:t<e?-1:1},ca=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+it(e))},Av=function(t){if(typeof t!="object"||t===null)return it(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=it(e[r]),n+=":",n+=Av(t[e[r]]);return n+="}",n},Hk=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Yt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Wk=function(t){A(!zk(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},FF=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},UF=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function VF(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const BF=new RegExp("^-?(0*)\\d{1,10}$"),jF=-2147483648,zF=2147483647,IE=function(t){if(BF.test(t)){const e=Number(t);if(e>=jF&&e<=zF)return e}return null},gu=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw en("Exception was thrown by user callback.",n),e},Math.floor(0))}},HF=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ga=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class WF{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){en(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class qF{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',en(e)}}class Wm{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Wm.OWNER="owner";/**
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
 */const Pv="5",qk="v",Kk="s",Gk="r",Qk="f",Yk=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Xk="ls",Jk="p",qm="ac",Zk="websocket",ex="long_polling";/**
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
 */class KF{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=bi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&bi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function GF(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function tx(t,e,n){A(typeof e=="string","typeof type must == string"),A(typeof n=="object","typeof params must == object");let r;if(e===Zk)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ex)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);GF(t)&&(n.ns=t.namespace);const i=[];return Yt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class QF{constructor(){this.counters_={}}incrementCounter(e,n=1){gr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return JA(this.counters_)}}/**
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
 */const zf={},Hf={};function Ov(t){const e=t.toString();return zf[e]||(zf[e]=new QF),zf[e]}function YF(t,e){const n=t.toString();return Hf[n]||(Hf[n]=e()),Hf[n]}/**
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
 */class XF{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&gu(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const kE="start",JF="close",ZF="pLPCommand",eU="pRTLPCB",nx="id",rx="pw",ix="ser",tU="cb",nU="seg",rU="ts",iU="d",sU="dframe",sx=1870,ox=30,oU=sx-ox,aU=25e3,lU=3e4;class bs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=mu(e),this.stats_=Ov(n),this.urlFn=l=>(this.appCheckToken&&(l[qm]=this.appCheckToken),tx(n,ex,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new XF(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(lU)),MF(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Dv((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===kE)this.id=a,this.password=l;else if(o===JF)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[kE]="t",r[ix]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[tU]=this.scriptTagHolder.uniqueCallbackIdentifier),r[qk]=Pv,this.transportSessionId&&(r[Kk]=this.transportSessionId),this.lastSessionId&&(r[Xk]=this.lastSessionId),this.applicationId&&(r[Jk]=this.applicationId),this.appCheckToken&&(r[qm]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Yk.test(location.hostname)&&(r[Gk]=Qk);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){bs.forceAllow_=!0}static forceDisallow(){bs.forceDisallow_=!0}static isAvailable(){return bs.forceAllow_?!0:!bs.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!FF()&&!UF()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=BT(n),i=Hk(r,oU);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[sU]="t",r[nx]=e,r[rx]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=it(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Dv{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=OF(),window[ZF+this.uniqueCallbackIdentifier]=e,window[eU+this.uniqueCallbackIdentifier]=n,this.myIFrame=Dv.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Et("frame writing exception"),a.stack&&Et(a.stack),Et(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Et("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[nx]=this.myID,e[rx]=this.myPW,e[ix]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ox+r.length<=sx;){const o=this.pendingSegs.shift();r=r+"&"+nU+i+"="+o.seg+"&"+rU+i+"="+o.ts+"&"+iU+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(aU)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Et("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const uU=16384,cU=45e3;let yh=null;typeof MozWebSocket!="undefined"?yh=MozWebSocket:typeof WebSocket!="undefined"&&(yh=WebSocket);class wn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=mu(this.connId),this.stats_=Ov(n),this.connURL=wn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[qk]=Pv,typeof location!="undefined"&&location.hostname&&Yk.test(location.hostname)&&(o[Gk]=Qk),n&&(o[Kk]=n),r&&(o[Xk]=r),i&&(o[qm]=i),s&&(o[Jk]=s),tx(e,Zk,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,bi.set("previous_websocket_failure",!0);try{let r;KT(),this.mySock=new yh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){wn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&yh!==null&&!wn.forceDisallow_}static previouslyFailed(){return bi.isInMemoryStorage||bi.get("previous_websocket_failure")===!0}markConnectionHealthy(){bi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=dl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Hk(n,uU);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(cU))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}wn.responsesRequiredToBeHealthy=2;wn.healthyTimeout=3e4;/**
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
 */class Rl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[bs,wn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=wn&&wn.isAvailable();let r=n&&!wn.previouslyFailed();if(e.webSocketOnly&&(n||en("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[wn];else{const i=this.transports_=[];for(const s of Rl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Rl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Rl.globalTransportInitialized_=!1;/**
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
 */const hU=6e4,dU=5e3,fU=10*1024,pU=100*1024,Wf="t",xE="d",mU="s",NE="r",gU="e",bE="o",RE="a",AE="n",PE="p",yU="h";class vU{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=mu("c:"+this.id+":"),this.transportManager_=new Rl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ga(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pU?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fU?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wf in e){const n=e[Wf];n===RE?this.upgradeIfSecondaryHealthy_():n===NE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===bE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ca("t",e),r=ca("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:PE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:RE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:AE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ca("t",e),r=ca("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ca(Wf,e);if(xE in e){const r=e[xE];if(n===yU){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===AE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===mU?this.onConnectionShutdown_(r):n===NE?this.onReset_(r):n===gU?Hm("Server Error: "+r):n===bE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Pv!==r&&en("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ga(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(hU))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ga(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(dU))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:PE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(bi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ax{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class lx{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){A(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class vh extends lx{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Cy()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new vh}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const OE=32,DE=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function de(){return new ve("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function si(t){return t.pieces_.length-t.pieceNum_}function Ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function ux(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function _U(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function cx(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function hx(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function Ke(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ve)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ve(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function Wt(t,e){const n=ie(t),r=ie(e);if(n===null)return e;if(n===r)return Wt(Ee(t),Ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Lv(t,e){if(si(t)!==si(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Tn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(si(t)>si(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class wU{constructor(e,n){this.errorPrefix_=n,this.parts_=cx(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=rd(this.parts_[r]);dx(this)}}function EU(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=rd(e),dx(t)}function CU(t){const e=t.parts_.pop();t.byteLength_-=rd(e),t.parts_.length>0&&(t.byteLength_-=1)}function dx(t){if(t.byteLength_>DE)throw new Error(t.errorPrefix_+"has a key path longer than "+DE+" bytes ("+t.byteLength_+").");if(t.parts_.length>OE)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+OE+") or object contains a cycle "+yi(t))}function yi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Mv extends lx{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Mv}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ha=1e3,TU=60*5*1e3,LE=30*1e3,SU=1.3,IU=3e4,kU="server_kill",ME=3;class ar extends ax{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ar.nextPersistentConnectionId_++,this.log_=mu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ha,this.maxReconnectDelay_=TU,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!KT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Mv.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&vh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(it(s)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ey,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;ar.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&gr(e,"w")){const r=oo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();en(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||fP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=LE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=dP(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+it(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Hm("Unrecognized action received from server: "+it(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ha,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ha,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>IU&&(this.reconnectDelay_=ha),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*SU)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ar.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){A(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Et("getToken() completed but was canceled"):(Et("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new vU(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{en(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(kU)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&en(h),l())}}}interrupt(e){Et("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Et("Resuming connection for reason: "+e),delete this.interruptReasons_[e],am(this.interruptReasons_)&&(this.reconnectDelay_=ha,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Av(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ve(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Et("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ME&&(this.reconnectDelay_=LE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Et("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ME&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Vk.replace(/\./g,"-")]=1,Cy()?e["framework.cordova"]=1:qT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=vh.getInstance().currentlyOnline();return am(this.interruptReasons_)&&e}}ar.nextPersistentConnectionId_=0;ar.nextConnectionId_=0;/**
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
 */class re{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new re(e,n)}}/**
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
 */class Ad{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new re(go,e),i=new re(go,n);return this.compare(r,i)!==0}minPost(){return re.MIN}}/**
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
 */let Yu;class fx extends Ad{static get __EMPTY_NODE(){return Yu}static set __EMPTY_NODE(e){Yu=e}compare(e,n){return Bo(e.name,n.name)}isDefinedOn(e){throw Ro("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return re.MIN}maxPost(){return new re(Yi,Yu)}makePost(e,n){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new re(e,Yu)}toString(){return".key"}}const Js=new fx;/**
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
 */class Xu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:rt.RED,this.left=i!=null?i:qt.EMPTY_NODE,this.right=s!=null?s:qt.EMPTY_NODE}copy(e,n,r,i,s){return new rt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return qt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return qt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}rt.RED=!0;rt.BLACK=!1;class xU{copy(e,n,r,i,s){return this}insert(e,n,r){return new rt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qt{constructor(e,n=qt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new qt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,rt.BLACK,null,null))}remove(e){return new qt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,rt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Xu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Xu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Xu(this.root_,null,this.comparator_,!0,e)}}qt.EMPTY_NODE=new xU;/**
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
 */function NU(t,e){return Bo(t.name,e.name)}function $v(t,e){return Bo(t,e)}/**
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
 */let Km;function bU(t){Km=t}const px=function(t){return typeof t=="number"?"number:"+Wk(t):"string:"+t},mx=function(t){if(t.isLeafNode()){const e=t.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&gr(e,".sv"),"Priority must be a string or number.")}else A(t===Km||t.isEmpty(),"priority of unexpected type.");A(t===Km||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let $E;class tt{constructor(e,n=tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),mx(this.priorityNode_)}static set __childrenNodeConstructor(e){$E=e}static get __childrenNodeConstructor(){return $E}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:ie(e)===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ie(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(A(r!==".priority"||si(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+px(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Wk(this.value_):e+=this.value_,this.lazyHash_=jk(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tt.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=tt.VALUE_TYPE_ORDER.indexOf(n),s=tt.VALUE_TYPE_ORDER.indexOf(r);return A(i>=0,"Unknown leaf type: "+n),A(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let gx,yx;function RU(t){gx=t}function AU(t){yx=t}class PU extends Ad{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Bo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return re.MIN}maxPost(){return new re(Yi,new tt("[PRIORITY-POST]",yx))}makePost(e,n){const r=gx(e);return new re(n,new tt("[PRIORITY-POST]",r))}toString(){return".priority"}}const De=new PU;/**
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
 */const OU=Math.log(2);class DU{constructor(e){const n=s=>parseInt(Math.log(s)/OU,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _h=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let h,d;if(c===0)return null;if(c===1)return h=t[l],d=n?n(h):h,new rt(d,h.node,rt.BLACK,null,null);{const p=parseInt(c/2,10)+l,y=i(l,p),v=i(p+1,u);return h=t[p],d=n?n(h):h,new rt(d,h.node,rt.BLACK,y,v)}},s=function(l){let u=null,c=null,h=t.length;const d=function(y,v){const f=h-y,m=h;h-=y;const g=i(f+1,m),w=t[f],C=n?n(w):w;p(new rt(C,w.node,v,null,g))},p=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<l.count;++y){const v=l.nextBitIsOne(),f=Math.pow(2,l.count-(y+1));v?d(f,rt.BLACK):(d(f,rt.BLACK),d(f,rt.RED))}return c},o=new DU(t.length),a=s(o);return new qt(r||e,a)};/**
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
 */let qf;const ms={};class ir{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return A(ms&&De,"ChildrenNode.ts has not been loaded"),qf=qf||new ir({".priority":ms},{".priority":De}),qf}get(e){const n=oo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof qt?n:null}hasIndex(e){return gr(this.indexSet_,e.toString())}addIndex(e,n){A(e!==Js,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(re.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=_h(r,e.getCompare()):a=ms;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new ir(c,u)}addToIndexes(e,n){const r=Jc(this.indexes_,(i,s)=>{const o=oo(this.indexSet_,s);if(A(o,"Missing index implementation for "+s),i===ms)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(re.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),_h(a,o.getCompare())}else return ms;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new re(e.name,a))),l.insert(e,e.node)}});return new ir(r,this.indexSet_)}removeFromIndexes(e,n){const r=Jc(this.indexes_,i=>{if(i===ms)return i;{const s=n.get(e.name);return s?i.remove(new re(e.name,s)):i}});return new ir(r,this.indexSet_)}}/**
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
 */let da;class Y{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&mx(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return da||(da=new Y(new qt($v),null,ir.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||da}updatePriority(e){return this.children_.isEmpty()?this:new Y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?da:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(Ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(A(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new re(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?da:this.priorityNode_;return new Y(i,o,s)}}updateChild(e,n){const r=ie(e);if(r===null)return n;{A(ie(e)!==".priority"||si(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ee(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(De,(o,a)=>{n[o]=a.val(e),r++,s&&Y.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+px(this.getPriority().val())+":"),this.forEachChild(De,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":jk(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new re(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new re(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new re(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,re.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,re.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yu?-1:0}withIndex(e){if(e===Js||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Y(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Js||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(De),i=n.getIterator(De);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Js?null:this.indexMap_.get(e.toString())}}Y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class LU extends Y{constructor(){super(new qt($v),Y.EMPTY_NODE,ir.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Y.EMPTY_NODE}isEmpty(){return!1}}const yu=new LU;Object.defineProperties(re,{MIN:{value:new re(go,Y.EMPTY_NODE)},MAX:{value:new re(Yi,yu)}});fx.__EMPTY_NODE=Y.EMPTY_NODE;tt.__childrenNodeConstructor=Y;bU(yu);AU(yu);/**
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
 */const MU=!0;function Ct(t,e=null){if(t===null)return Y.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new tt(n,Ct(e))}if(!(t instanceof Array)&&MU){const n=[];let r=!1;if(Yt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ct(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new re(o,l)))}}),n.length===0)return Y.EMPTY_NODE;const s=_h(n,NU,o=>o.name,$v);if(r){const o=_h(n,De.getCompare());return new Y(s,Ct(e),new ir({".priority":o},{".priority":De}))}else return new Y(s,Ct(e),ir.Default)}else{let n=Y.EMPTY_NODE;return Yt(t,(r,i)=>{if(gr(t,r)&&r.substring(0,1)!=="."){const s=Ct(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ct(e))}}RU(Ct);/**
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
 */class $U extends Ad{constructor(e){super(),this.indexPath_=e,A(!se(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Bo(e.name,n.name):s}makePost(e,n){const r=Ct(e),i=Y.EMPTY_NODE.updateChild(this.indexPath_,r);return new re(n,i)}maxPost(){const e=Y.EMPTY_NODE.updateChild(this.indexPath_,yu);return new re(Yi,e)}toString(){return cx(this.indexPath_,0).join("/")}}/**
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
 */class FU extends Ad{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Bo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return re.MIN}maxPost(){return re.MAX}makePost(e,n){const r=Ct(e);return new re(n,r)}toString(){return".value"}}const UU=new FU;/**
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
 */function vx(t){return{type:"value",snapshotNode:t}}function yo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Al(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Pl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function VU(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Fv{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){A(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Al(n,a)):A(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(yo(n,r)):o.trackChildChange(Pl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(De,(i,s)=>{n.hasChild(i)||r.trackChildChange(Al(i,s))}),n.isLeafNode()||n.forEachChild(De,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Pl(i,s,o))}else r.trackChildChange(yo(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Y.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ol{constructor(e){this.indexedFilter_=new Fv(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ol.getStartPost_(e),this.endPost_=Ol.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new re(n,r))||(r=Y.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Y.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Y.EMPTY_NODE);const s=this;return n.forEachChild(De,(o,a)=>{s.matches(new re(o,a))||(i=i.updateImmediateChild(o,Y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class BU{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ol(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new re(n,r))||(r=Y.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=Y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=Y.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(Y.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,Y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;A(a.numChildren()===this.limit_,"");const l=new re(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(c&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(Pl(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Al(n,h));const v=a.updateImmediateChild(n,Y.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(yo(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Al(u.name,u.node)),s.trackChildChange(yo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,Y.EMPTY_NODE)):e}}/**
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
 */class Uv{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=De}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:go}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Yi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===De}copy(){const e=new Uv;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jU(t){return t.loadsAllData()?new Fv(t.getIndex()):t.hasLimit()?new BU(t):new Ol(t)}function FE(t){const e={};if(t.isDefault())return e;let n;if(t.index_===De?n="$priority":t.index_===UU?n="$value":t.index_===Js?n="$key":(A(t.index_ instanceof $U,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=it(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=it(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+it(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=it(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+it(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function UE(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==De&&(e.i=t.index_.toString()),e}/**
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
 */class wh extends ax{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=mu("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=wh.getListenId_(e,r),a={};this.listens_[o]=a;const l=FE(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),oo(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=wh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=FE(e._queryParams),r=e._path.toString(),i=new Ey;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ao(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=dl(a.responseText)}catch{en("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&en("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class zU{constructor(){this.rootNode_=Y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Eh(){return{value:null,children:new Map}}function _x(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ie(e);t.children.has(r)||t.children.set(r,Eh());const i=t.children.get(r);e=Ee(e),_x(i,e,n)}}function Gm(t,e,n){t.value!==null?n(e,t.value):HU(t,(r,i)=>{const s=new ve(e.toString()+"/"+r);Gm(i,s,n)})}function HU(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class WU{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Yt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const VE=10*1e3,qU=30*1e3,KU=5*60*1e3;class GU{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new WU(e);const r=VE+(qU-VE)*Math.random();Ga(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Yt(e,(i,s)=>{s>0&&gr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ga(this.reportStats_.bind(this),Math.floor(Math.random()*2*KU))}}/**
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
 */var Sn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Sn||(Sn={}));function wx(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Bv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ch{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Sn.ACK_USER_WRITE,this.source=wx()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new Ch(de(),n,this.revert)}}else return A(ie(this.path)===e,"operationForChild called for unrelated child."),new Ch(Ee(this.path),this.affectedTree,this.revert)}}/**
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
 */class Dl{constructor(e,n){this.source=e,this.path=n,this.type=Sn.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new Dl(this.source,de()):new Dl(this.source,Ee(this.path))}}/**
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
 */class Xi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Sn.OVERWRITE}operationForChild(e){return se(this.path)?new Xi(this.source,de(),this.snap.getImmediateChild(e)):new Xi(this.source,Ee(this.path),this.snap)}}/**
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
 */class Ll{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Sn.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new Xi(this.source,de(),n.value):new Ll(this.source,de(),n)}else return A(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ll(this.source,Ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ji{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class QU{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function YU(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(VU(o.childName,o.snapshotNode))}),fa(t,i,"child_removed",e,r,n),fa(t,i,"child_added",e,r,n),fa(t,i,"child_moved",s,r,n),fa(t,i,"child_changed",e,r,n),fa(t,i,"value",e,r,n),i}function fa(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>JU(t,a,l)),o.forEach(a=>{const l=XU(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function XU(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function JU(t,e,n){if(e.childName==null||n.childName==null)throw Ro("Should only compare child_ events.");const r=new re(e.childName,e.snapshotNode),i=new re(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Pd(t,e){return{eventCache:t,serverCache:e}}function Qa(t,e,n,r){return Pd(new Ji(e,n,r),t.serverCache)}function Ex(t,e,n,r){return Pd(t.eventCache,new Ji(e,n,r))}function Qm(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Kf;const ZU=()=>(Kf||(Kf=new qt($F)),Kf);class Te{constructor(e,n=ZU()){this.value=e,this.children=n}static fromObject(e){let n=new Te(null);return Yt(e,(r,i)=>{n=n.set(new ve(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:de(),value:this.value};if(se(e))return null;{const r=ie(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ee(e),n);return s!=null?{path:Ke(new ve(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=ie(e),r=this.children.get(n);return r!==null?r.subtree(Ee(e)):new Te(null)}}set(e,n){if(se(e))return new Te(n,this.children);{const r=ie(e),s=(this.children.get(r)||new Te(null)).set(Ee(e),n),o=this.children.insert(r,s);return new Te(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new Te(null):new Te(null,this.children);{const n=ie(e),r=this.children.get(n);if(r){const i=r.remove(Ee(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Te(null):new Te(this.value,s)}else return this}}get(e){if(se(e))return this.value;{const n=ie(e),r=this.children.get(n);return r?r.get(Ee(e)):null}}setTree(e,n){if(se(e))return n;{const r=ie(e),s=(this.children.get(r)||new Te(null)).setTree(Ee(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Te(this.value,o)}}fold(e){return this.fold_(de(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ke(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,de(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(se(e))return null;{const s=ie(e),o=this.children.get(s);return o?o.findOnPath_(Ee(e),Ke(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,de(),n)}foreachOnPath_(e,n,r){if(se(e))return this;{this.value&&r(n,this.value);const i=ie(e),s=this.children.get(i);return s?s.foreachOnPath_(Ee(e),Ke(n,i),r):new Te(null)}}foreach(e){this.foreach_(de(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ke(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class kn{constructor(e){this.writeTree_=e}static empty(){return new kn(new Te(null))}}function Ya(t,e,n){if(se(e))return new kn(new Te(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Wt(i,e);return s=s.updateChild(o,n),new kn(t.writeTree_.set(i,s))}else{const i=new Te(n),s=t.writeTree_.setTree(e,i);return new kn(s)}}}function BE(t,e,n){let r=t;return Yt(n,(i,s)=>{r=Ya(r,Ke(e,i),s)}),r}function jE(t,e){if(se(e))return kn.empty();{const n=t.writeTree_.setTree(e,new Te(null));return new kn(n)}}function Ym(t,e){return ls(t,e)!=null}function ls(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Wt(n.path,e)):null}function zE(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(De,(r,i)=>{e.push(new re(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new re(r,i.value))}),e}function qr(t,e){if(se(e))return t;{const n=ls(t,e);return n!=null?new kn(new Te(n)):new kn(t.writeTree_.subtree(e))}}function Xm(t){return t.writeTree_.isEmpty()}function vo(t,e){return Cx(de(),t.writeTree_,e)}function Cx(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(A(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Cx(Ke(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ke(t,".priority"),r)),n}}/**
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
 */function jv(t,e){return kx(e,t)}function e4(t,e,n,r,i){A(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ya(t.visibleWrites,e,n)),t.lastWriteId=r}function t4(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function n4(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);A(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&r4(a,r.path)?i=!1:Tn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return i4(t),!0;if(r.snap)t.visibleWrites=jE(t.visibleWrites,r.path);else{const a=r.children;Yt(a,l=>{t.visibleWrites=jE(t.visibleWrites,Ke(r.path,l))})}return!0}else return!1}function r4(t,e){if(t.snap)return Tn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Tn(Ke(t.path,n),e))return!0;return!1}function i4(t){t.visibleWrites=Tx(t.allWrites,s4,de()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function s4(t){return t.visible}function Tx(t,e,n){let r=kn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Tn(n,o)?(a=Wt(n,o),r=Ya(r,a,s.snap)):Tn(o,n)&&(a=Wt(o,n),r=Ya(r,de(),s.snap.getChild(a)));else if(s.children){if(Tn(n,o))a=Wt(n,o),r=BE(r,a,s.children);else if(Tn(o,n))if(a=Wt(o,n),se(a))r=BE(r,de(),s.children);else{const l=oo(s.children,ie(a));if(l){const u=l.getChild(Ee(a));r=Ya(r,de(),u)}}}else throw Ro("WriteRecord should have .snap or .children")}}return r}function Sx(t,e,n,r,i){if(!r&&!i){const s=ls(t.visibleWrites,e);if(s!=null)return s;{const o=qr(t.visibleWrites,e);if(Xm(o))return n;if(n==null&&!Ym(o,de()))return null;{const a=n||Y.EMPTY_NODE;return vo(o,a)}}}else{const s=qr(t.visibleWrites,e);if(!i&&Xm(s))return n;if(!i&&n==null&&!Ym(s,de()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Tn(u.path,e)||Tn(e,u.path))},a=Tx(t.allWrites,o,e),l=n||Y.EMPTY_NODE;return vo(a,l)}}}function o4(t,e,n){let r=Y.EMPTY_NODE;const i=ls(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(De,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=qr(t.visibleWrites,e);return n.forEachChild(De,(o,a)=>{const l=vo(qr(s,new ve(o)),a);r=r.updateImmediateChild(o,l)}),zE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=qr(t.visibleWrites,e);return zE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function a4(t,e,n,r,i){A(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ke(e,n);if(Ym(t.visibleWrites,s))return null;{const o=qr(t.visibleWrites,s);return Xm(o)?i.getChild(n):vo(o,i.getChild(n))}}function l4(t,e,n,r){const i=Ke(e,n),s=ls(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=qr(t.visibleWrites,i);return vo(o,r.getNode().getImmediateChild(n))}else return null}function u4(t,e){return ls(t.visibleWrites,e)}function c4(t,e,n,r,i,s,o){let a;const l=qr(t.visibleWrites,e),u=ls(l,de());if(u!=null)a=u;else if(n!=null)a=vo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=d.getNext();for(;p&&c.length<i;)h(p,r)!==0&&c.push(p),p=d.getNext();return c}else return[]}function h4(){return{visibleWrites:kn.empty(),allWrites:[],lastWriteId:-1}}function Th(t,e,n,r){return Sx(t.writeTree,t.treePath,e,n,r)}function zv(t,e){return o4(t.writeTree,t.treePath,e)}function HE(t,e,n,r){return a4(t.writeTree,t.treePath,e,n,r)}function Sh(t,e){return u4(t.writeTree,Ke(t.treePath,e))}function d4(t,e,n,r,i,s){return c4(t.writeTree,t.treePath,e,n,r,i,s)}function Hv(t,e,n){return l4(t.writeTree,t.treePath,e,n)}function Ix(t,e){return kx(Ke(t.treePath,e),t.writeTree)}function kx(t,e){return{treePath:t,writeTree:e}}/**
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
 */class f4{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;A(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),A(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Pl(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Al(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,yo(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Pl(r,e.snapshotNode,i.oldSnap));else throw Ro("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class p4{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const xx=new p4;class Wv{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ji(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hv(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zi(this.viewCache_),s=d4(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function m4(t){return{filter:t}}function g4(t,e){A(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function y4(t,e,n,r,i){const s=new f4;let o,a;if(n.type===Sn.OVERWRITE){const u=n;u.source.fromUser?o=Jm(t,e,u.path,u.snap,r,i,s):(A(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!se(u.path),o=Ih(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Sn.MERGE){const u=n;u.source.fromUser?o=_4(t,e,u.path,u.children,r,i,s):(A(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Zm(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Sn.ACK_USER_WRITE){const u=n;u.revert?o=C4(t,e,u.path,r,i,s):o=w4(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Sn.LISTEN_COMPLETE)o=E4(t,e,n.path,r,s);else throw Ro("Unknown operation type: "+n.type);const l=s.getChanges();return v4(e,o,l),{viewCache:o,changes:l}}function v4(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Qm(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(vx(Qm(e)))}}function Nx(t,e,n,r,i,s){const o=e.eventCache;if(Sh(r,n)!=null)return e;{let a,l;if(se(n))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Zi(e),c=u instanceof Y?u:Y.EMPTY_NODE,h=zv(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=Th(r,Zi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=ie(n);if(u===".priority"){A(si(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=HE(r,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=Ee(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=HE(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=Hv(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,i,s):a=o.getNode()}}return Qa(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function Ih(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(se(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),p,null)}else{const p=ie(n);if(!l.isCompleteForPath(n)&&si(n)>1)return e;const y=Ee(n),f=l.getNode().getImmediateChild(p).updateChild(y,r);p===".priority"?u=c.updatePriority(l.getNode(),f):u=c.updateChild(l.getNode(),p,f,y,xx,null)}const h=Ex(e,u,l.isFullyInitialized()||se(n),c.filtersNodes()),d=new Wv(i,h,s);return Nx(t,h,n,i,d,a)}function Jm(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Wv(i,e,s);if(se(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Qa(e,u,!0,t.filter.filtersNodes());else{const h=ie(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Qa(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=Ee(n),p=a.getNode().getImmediateChild(h);let y;if(se(d))y=r;else{const v=c.getCompleteChild(h);v!=null?ux(d)===".priority"&&v.getChild(hx(d)).isEmpty()?y=v:y=v.updateChild(d,r):y=Y.EMPTY_NODE}if(p.equals(y))l=e;else{const v=t.filter.updateChild(a.getNode(),h,y,d,c,o);l=Qa(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function WE(t,e){return t.eventCache.isCompleteForChild(e)}function _4(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Ke(n,l);WE(e,ie(c))&&(a=Jm(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Ke(n,l);WE(e,ie(c))||(a=Jm(t,a,c,u,i,s,o))}),a}function qE(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Zm(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;se(n)?u=r:u=new Te(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),y=qE(t,p,d);l=Ih(t,l,new ve(h),y,i,s,o,a)}}),u.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!p){const y=e.serverCache.getNode().getImmediateChild(h),v=qE(t,y,d);l=Ih(t,l,new ve(h),v,i,s,o,a)}}),l}function w4(t,e,n,r,i,s,o){if(Sh(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(se(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ih(t,e,n,l.getNode().getChild(n),i,s,a,o);if(se(n)){let u=new Te(null);return l.getNode().forEachChild(Js,(c,h)=>{u=u.set(new ve(c),h)}),Zm(t,e,n,u,i,s,a,o)}else return e}else{let u=new Te(null);return r.foreach((c,h)=>{const d=Ke(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),Zm(t,e,n,u,i,s,a,o)}}function E4(t,e,n,r,i){const s=e.serverCache,o=Ex(e,s.getNode(),s.isFullyInitialized()||se(n),s.isFiltered());return Nx(t,o,n,r,xx,i)}function C4(t,e,n,r,i,s){let o;if(Sh(r,n)!=null)return e;{const a=new Wv(r,e,i),l=e.eventCache.getNode();let u;if(se(n)||ie(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Th(r,Zi(e));else{const h=e.serverCache.getNode();A(h instanceof Y,"serverChildren would be complete if leaf node"),c=zv(r,h)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=ie(n);let h=Hv(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,Ee(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,Y.EMPTY_NODE,Ee(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Th(r,Zi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Sh(r,de())!=null,Qa(e,u,o,t.filter.filtersNodes())}}/**
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
 */class T4{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Fv(r.getIndex()),s=jU(r);this.processor_=m4(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(Y.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(Y.EMPTY_NODE,a.getNode(),null),c=new Ji(l,o.isFullyInitialized(),i.filtersNodes()),h=new Ji(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Pd(h,c),this.eventGenerator_=new QU(this.query_)}get query(){return this.query_}}function S4(t){return t.viewCache_.serverCache.getNode()}function I4(t,e){const n=Zi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function KE(t){return t.eventRegistrations_.length===0}function k4(t,e){t.eventRegistrations_.push(e)}function GE(t,e,n){const r=[];if(n){A(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function QE(t,e,n,r){e.type===Sn.MERGE&&e.source.queryId!==null&&(A(Zi(t.viewCache_),"We should always have a full cache before handling merges"),A(Qm(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=y4(t.processor_,i,e,n,r);return g4(t.processor_,s.viewCache),A(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,bx(t,s.changes,s.viewCache.eventCache.getNode(),null)}function x4(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(De,(s,o)=>{r.push(yo(s,o))}),n.isFullyInitialized()&&r.push(vx(n.getNode())),bx(t,r,n.getNode(),e)}function bx(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return YU(t.eventGenerator_,e,n,i)}/**
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
 */let kh;class N4{constructor(){this.views=new Map}}function b4(t){A(!kh,"__referenceConstructor has already been defined"),kh=t}function R4(){return A(kh,"Reference.ts has not been loaded"),kh}function A4(t){return t.views.size===0}function qv(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return A(s!=null,"SyncTree gave us an op for an invalid query."),QE(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(QE(o,e,n,r));return s}}function P4(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Th(n,i?r:null),l=!1;a?l=!0:r instanceof Y?(a=zv(n,r),l=!1):(a=Y.EMPTY_NODE,l=!1);const u=Pd(new Ji(a,l,!1),new Ji(r,i,!1));return new T4(e,u)}return o}function O4(t,e,n,r,i,s){const o=P4(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),k4(o,n),x4(o,n)}function D4(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=oi(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(GE(u,n,r)),KE(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(GE(l,n,r)),KE(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!oi(t)&&s.push(new(R4())(e._repo,e._path)),{removed:s,events:o}}function Rx(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Zs(t,e){let n=null;for(const r of t.views.values())n=n||I4(r,e);return n}function Ax(t,e){if(e._queryParams.loadsAllData())return Od(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Px(t,e){return Ax(t,e)!=null}function oi(t){return Od(t)!=null}function Od(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let xh;function L4(t){A(!xh,"__referenceConstructor has already been defined"),xh=t}function M4(){return A(xh,"Reference.ts has not been loaded"),xh}let $4=1;class YE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Te(null),this.pendingWriteTree_=h4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function F4(t,e,n,r,i){return e4(t.pendingWriteTree_,e,n,r,i),i?vu(t,new Xi(wx(),e,n)):[]}function Rs(t,e,n=!1){const r=t4(t.pendingWriteTree_,e);if(n4(t.pendingWriteTree_,e)){let s=new Te(null);return r.snap!=null?s=s.set(de(),!0):Yt(r.children,o=>{s=s.set(new ve(o),!0)}),vu(t,new Ch(r.path,s,n))}else return[]}function Dd(t,e,n){return vu(t,new Xi(Vv(),e,n))}function U4(t,e,n){const r=Te.fromObject(n);return vu(t,new Ll(Vv(),e,r))}function V4(t,e){return vu(t,new Dl(Vv(),e))}function B4(t,e,n){const r=Kv(t,n);if(r){const i=Gv(r),s=i.path,o=i.queryId,a=Wt(s,e),l=new Dl(Bv(o),a);return Qv(t,s,l)}else return[]}function eg(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Px(o,e))){const l=D4(o,e,n,r);A4(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(d,p)=>oi(p));if(c&&!h){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const p=H4(d);for(let y=0;y<p.length;++y){const v=p[y],f=v.query,m=Mx(t,v);t.listenProvider_.startListening(Xa(f),Nh(t,f),m.hashFn,m.onComplete)}}}!h&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Xa(e),null):u.forEach(d=>{const p=t.queryToTagMap.get(Ld(d));t.listenProvider_.stopListening(Xa(d),p)}))}W4(t,u)}return a}function j4(t,e,n,r){const i=Kv(t,r);if(i!=null){const s=Gv(i),o=s.path,a=s.queryId,l=Wt(o,e),u=new Xi(Bv(a),l,n);return Qv(t,o,u)}else return[]}function z4(t,e,n,r){const i=Kv(t,r);if(i){const s=Gv(i),o=s.path,a=s.queryId,l=Wt(o,e),u=Te.fromObject(n),c=new Ll(Bv(a),l,u);return Qv(t,o,c)}else return[]}function XE(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,p)=>{const y=Wt(d,i);s=s||Zs(p,y),o=o||oi(p)});let a=t.syncPointTree_.get(i);a?(o=o||oi(a),s=s||Zs(a,de())):(a=new N4,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=Y.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,y)=>{const v=Zs(y,de());v&&(s=s.updateImmediateChild(p,v))}));const u=Px(a,e);if(!u&&!e._queryParams.loadsAllData()){const d=Ld(e);A(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=q4();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const c=jv(t.pendingWriteTree_,i);let h=O4(a,e,n,c,s,l);if(!u&&!o&&!r){const d=Ax(a,e);h=h.concat(K4(t,e,d))}return h}function Ox(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Wt(o,e),u=Zs(a,l);if(u)return u});return Sx(i,e,s,n,!0)}function vu(t,e){return Dx(e,t.syncPointTree_,null,jv(t.pendingWriteTree_,de()))}function Dx(t,e,n,r){if(se(t.path))return Lx(t,e,n,r);{const i=e.get(de());n==null&&i!=null&&(n=Zs(i,de()));let s=[];const o=ie(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=Ix(r,o);s=s.concat(Dx(a,l,u,c))}return i&&(s=s.concat(qv(i,t,r,n))),s}}function Lx(t,e,n,r){const i=e.get(de());n==null&&i!=null&&(n=Zs(i,de()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Ix(r,o),c=t.operationForChild(o);c&&(s=s.concat(Lx(c,a,l,u)))}),i&&(s=s.concat(qv(i,t,r,n))),s}function Mx(t,e){const n=e.query,r=Nh(t,n);return{hashFn:()=>(S4(e)||Y.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?B4(t,n._path,r):V4(t,n._path);{const s=VF(i,n);return eg(t,n,null,s)}}}}function Nh(t,e){const n=Ld(e);return t.queryToTagMap.get(n)}function Ld(t){return t._path.toString()+"$"+t._queryIdentifier}function Kv(t,e){return t.tagToQueryMap.get(e)}function Gv(t){const e=t.indexOf("$");return A(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function Qv(t,e,n){const r=t.syncPointTree_.get(e);A(r,"Missing sync point for query tag that we're tracking");const i=jv(t.pendingWriteTree_,e);return qv(r,n,i,null)}function H4(t){return t.fold((e,n,r)=>{if(n&&oi(n))return[Od(n)];{let i=[];return n&&(i=Rx(n)),Yt(r,(s,o)=>{i=i.concat(o)}),i}})}function Xa(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(M4())(t._repo,t._path):t}function W4(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ld(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function q4(){return $4++}function K4(t,e,n){const r=e._path,i=Nh(t,e),s=Mx(t,n),o=t.listenProvider_.startListening(Xa(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)A(!oi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,h)=>{if(!se(u)&&c&&oi(c))return[Od(c).query];{let d=[];return c&&(d=d.concat(Rx(c).map(p=>p.query))),Yt(h,(p,y)=>{d=d.concat(y)}),d}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Xa(c),Nh(t,c))}}return o}/**
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
 */class Yv{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Yv(n)}node(){return this.node_}}class Xv{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ke(this.path_,e);return new Xv(this.syncTree_,n)}node(){return Ox(this.syncTree_,this.path_)}}const G4=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},JE=function(t,e,n){if(!t||typeof t!="object")return t;if(A(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Q4(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Y4(t[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Q4=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:A(!1,"Unexpected server value: "+t)}},Y4=function(t,e,n){t.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&A(!1,"Unexpected increment value: "+r);const i=e.node();if(A(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},X4=function(t,e,n,r){return Jv(e,new Xv(n,t),r)},J4=function(t,e,n){return Jv(t,new Yv(e),n)};function Jv(t,e,n){const r=t.getPriority().val(),i=JE(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=JE(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new tt(a,Ct(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new tt(i))),o.forEachChild(De,(a,l)=>{const u=Jv(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class Zv{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function e_(t,e){let n=e instanceof ve?e:new ve(e),r=t,i=ie(n);for(;i!==null;){const s=oo(r.node.children,i)||{children:{},childCount:0};r=new Zv(i,r,s),n=Ee(n),i=ie(n)}return r}function jo(t){return t.node.value}function $x(t,e){t.node.value=e,tg(t)}function Fx(t){return t.node.childCount>0}function Z4(t){return jo(t)===void 0&&!Fx(t)}function Md(t,e){Yt(t.node.children,(n,r)=>{e(new Zv(n,t,r))})}function Ux(t,e,n,r){n&&!r&&e(t),Md(t,i=>{Ux(i,e,!0,r)}),n&&r&&e(t)}function eV(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function _u(t){return new ve(t.parent===null?t.name:_u(t.parent)+"/"+t.name)}function tg(t){t.parent!==null&&tV(t.parent,t.name,t)}function tV(t,e,n){const r=Z4(n),i=gr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,tg(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,tg(t))}/**
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
 */const nV=/[\[\].#$\/\u0000-\u001F\u007F]/,rV=/[\[\].#$\u0000-\u001F\u007F]/,Gf=10*1024*1024,Vx=function(t){return typeof t=="string"&&t.length!==0&&!nV.test(t)},Bx=function(t){return typeof t=="string"&&t.length!==0&&!rV.test(t)},iV=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Bx(t)},jx=function(t,e,n){const r=n instanceof ve?new wU(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+yi(r));if(typeof e=="function")throw new Error(t+"contains a function "+yi(r)+" with contents = "+e.toString());if(zk(e))throw new Error(t+"contains "+e.toString()+" "+yi(r));if(typeof e=="string"&&e.length>Gf/3&&rd(e)>Gf)throw new Error(t+"contains a string greater than "+Gf+" utf8 bytes "+yi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Yt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Vx(o)))throw new Error(t+" contains an invalid key ("+o+") "+yi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);EU(r,o),jx(t,a,r),CU(r)}),i&&s)throw new Error(t+' contains ".value" child '+yi(r)+" in addition to actual children.")}},zx=function(t,e,n,r){if(!(r&&n===void 0)&&!Bx(n))throw new Error(YT(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sV=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zx(t,e,n,r)},oV=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Vx(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!iV(n))throw new Error(YT(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class aV{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Hx(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Lv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Wx(t,e,n){Hx(t,n),qx(t,r=>Lv(r,e))}function us(t,e,n){Hx(t,n),qx(t,r=>Tn(r,e)||Tn(e,r))}function qx(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(lV(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function lV(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();$i&&Et("event: "+n.toString()),gu(r)}}}/**
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
 */const uV="repo_interrupt",cV=25;class hV{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new aV,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Eh(),this.transactionQueueTree_=new Zv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function dV(t,e,n){if(t.stats_=Ov(t.repoInfo_),t.forceRestClient_||HF())t.server_=new wh(t.repoInfo_,(r,i,s,o)=>{ZE(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>e1(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{it(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new ar(t.repoInfo_,e,(r,i,s,o)=>{ZE(t,r,i,s,o)},r=>{e1(t,r)},r=>{pV(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=YF(t.repoInfo_,()=>new GU(t.stats_,t.server_)),t.infoData_=new zU,t.infoSyncTree_=new YE({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Dd(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),t_(t,"connected",!1),t.serverSyncTree_=new YE({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);us(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function fV(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Kx(t){return G4({timestamp:fV(t)})}function ZE(t,e,n,r,i){t.dataUpdateCount++;const s=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Jc(n,u=>Ct(u));o=z4(t.serverSyncTree_,s,l,i)}else{const l=Ct(n);o=j4(t.serverSyncTree_,s,l,i)}else if(r){const l=Jc(n,u=>Ct(u));o=U4(t.serverSyncTree_,s,l)}else{const l=Ct(n);o=Dd(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=r_(t,s)),us(t.eventQueue_,a,o)}function e1(t,e){t_(t,"connected",e),e===!1&&gV(t)}function pV(t,e){Yt(e,(n,r)=>{t_(t,n,r)})}function t_(t,e,n){const r=new ve("/.info/"+e),i=Ct(n);t.infoData_.updateSnapshot(r,i);const s=Dd(t.infoSyncTree_,r,i);us(t.eventQueue_,r,s)}function mV(t){return t.nextWriteId_++}function gV(t){Gx(t,"onDisconnectEvents");const e=Kx(t),n=Eh();Gm(t.onDisconnect_,de(),(i,s)=>{const o=X4(i,s,t.serverSyncTree_,e);_x(n,i,o)});let r=[];Gm(n,de(),(i,s)=>{r=r.concat(Dd(t.serverSyncTree_,i,s));const o=EV(t,i);r_(t,o)}),t.onDisconnect_=Eh(),us(t.eventQueue_,de(),r)}function yV(t,e,n){let r;ie(e._path)===".info"?r=XE(t.infoSyncTree_,e,n):r=XE(t.serverSyncTree_,e,n),Wx(t.eventQueue_,e._path,r)}function t1(t,e,n){let r;ie(e._path)===".info"?r=eg(t.infoSyncTree_,e,n):r=eg(t.serverSyncTree_,e,n),Wx(t.eventQueue_,e._path,r)}function vV(t){t.persistentConnection_&&t.persistentConnection_.interrupt(uV)}function Gx(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Et(n,...e)}function Qx(t,e,n){return Ox(t.serverSyncTree_,e,n)||Y.EMPTY_NODE}function n_(t,e=t.transactionQueueTree_){if(e||$d(t,e),jo(e)){const n=Xx(t,e);A(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&_V(t,_u(e),n)}else Fx(e)&&Md(e,n=>{n_(t,n)})}function _V(t,e,n){const r=n.map(u=>u.currentWriteId),i=Qx(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];A(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=Wt(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Gx(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(Rs(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();$d(t,e_(t.transactionQueueTree_,e)),n_(t,t.transactionQueueTree_),us(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)gu(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{en("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}r_(t,e)}},o)}function r_(t,e){const n=Yx(t,e),r=_u(n),i=Xx(t,n);return wV(t,i,r),r}function wV(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Wt(n,l.path);let c=!1,h;if(A(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,i=i.concat(Rs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=cV)c=!0,h="maxretry",i=i.concat(Rs(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Qx(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){jx("transaction failed: Data returned ",p,l.path);let y=Ct(p);typeof p=="object"&&p!=null&&gr(p,".priority")||(y=y.updatePriority(d.getPriority()));const f=l.currentWriteId,m=Kx(t),g=J4(y,d,m);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=g,l.currentWriteId=mV(t),o.splice(o.indexOf(f),1),i=i.concat(F4(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),i=i.concat(Rs(t.serverSyncTree_,f,!0))}else c=!0,h="nodata",i=i.concat(Rs(t.serverSyncTree_,l.currentWriteId,!0))}us(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}$d(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)gu(r[a]);n_(t,t.transactionQueueTree_)}function Yx(t,e){let n,r=t.transactionQueueTree_;for(n=ie(e);n!==null&&jo(r)===void 0;)r=e_(r,n),e=Ee(e),n=ie(e);return r}function Xx(t,e){const n=[];return Jx(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Jx(t,e,n){const r=jo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Md(e,i=>{Jx(t,i,n)})}function $d(t,e){const n=jo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,$x(e,n.length>0?n:void 0)}Md(e,r=>{$d(t,r)})}function EV(t,e){const n=_u(Yx(t,e)),r=e_(t.transactionQueueTree_,e);return eV(r,i=>{Qf(t,i)}),Qf(t,r),Ux(r,i=>{Qf(t,i)}),n}function Qf(t,e){const n=jo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(A(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(A(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Rs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?$x(e,void 0):n.length=s+1,us(t.eventQueue_,_u(e),i);for(let o=0;o<r.length;o++)gu(r[o])}}/**
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
 */function CV(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function TV(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):en(`Invalid query segment '${n}' in query '${t}'`)}return e}const n1=function(t,e){const n=SV(t),r=n.namespace;n.domain==="firebase.com"&&Qi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Qi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||LF();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new KF(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ve(n.pathString)}},SV=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=CV(t.substring(c,h)));const d=TV(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class Zx{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+it(this.snapshot.exportVal())}}class eN{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class IV{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class i_{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return se(this._path)?null:ux(this._path)}get ref(){return new vr(this._repo,this._path)}get _queryIdentifier(){const e=UE(this._queryParams),n=Av(e);return n==="{}"?"default":n}get _queryObject(){return UE(this._queryParams)}isEqual(e){if(e=gt(e),!(e instanceof i_))return!1;const n=this._repo===e._repo,r=Lv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+_U(this._path)}}class vr extends i_{constructor(e,n){super(e,n,new Uv,!1)}get parent(){const e=hx(this._path);return e===null?null:new vr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ml{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),r=ng(this.ref,e);return new Ml(this._node.getChild(n),r,De)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ml(i,ng(this.ref,r),De)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ng(t,e){return t=gt(t),ie(t._path)===null?sV("child","path",e,!1):zx("child","path",e,!1),new vr(t._repo,Ke(t._path,e))}class s_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Zx("value",this,new Ml(e.snapshotNode,new vr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new eN(this,e,n):null}matches(e){return e instanceof s_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class o_{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new eN(this,e,n):null}createEvent(e,n){A(e.childName!=null,"Child events should have a childName.");const r=ng(new vr(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Zx(e.type,this,new Ml(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof o_?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function wu(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,h)=>{t1(t._repo,t,a),l(c,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new IV(n,s||void 0),a=e==="value"?new s_(o):new o_(e,o);return yV(t._repo,t,a),()=>t1(t._repo,t,a)}function kV(t,e,n,r){return wu(t,"value",e,n,r)}function xV(t,e,n,r){return wu(t,"child_added",e,n,r)}function NV(t,e,n,r){return wu(t,"child_changed",e,n,r)}function bV(t,e,n,r){return wu(t,"child_moved",e,n,r)}function RV(t,e,n,r){return wu(t,"child_removed",e,n,r)}b4(vr);L4(vr);/**
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
 */const AV="FIREBASE_DATABASE_EMULATOR_HOST",rg={};let PV=!1;function OV(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Qi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Et("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=n1(s,i),a=o.repoInfo,l,u;typeof process!="undefined"&&process.env&&(u=process.env[AV]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=n1(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Wm(Wm.OWNER):new qF(t.name,t.options,e);oV("Invalid Firebase Database URL",o),se(o.path)||Qi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=LV(a,t,c,new WF(t.name,n));return new MV(h,t)}function DV(t,e){const n=rg[e];(!n||n[t.key]!==t)&&Qi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),vV(t),delete n[t.key]}function LV(t,e,n,r){let i=rg[e.name];i||(i={},rg[e.name]=i);let s=i[t.toURLString()];return s&&Qi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new hV(t,PV,n,r),i[t.toURLString()]=s,s}class MV{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(dV(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vr(this._repo,de())),this._rootInternal}_delete(){return this._rootInternal!==null&&(DV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qi("Cannot call "+e+" on a deleted database.")}}/**
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
 */function $V(t){RF(yr),fn(new tn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return OV(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),qe(CE,TE,t),qe(CE,TE,"esm2017")}ar.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ar.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};$V();var FV="firebase",UV="9.22.2";/**
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
 */qe(FV,UV,"app");/**
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
 */const VV="functions";/**
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
 */class BV{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
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
 */const r1="us-central1";class jV{constructor(e,n,r,i,s=r1,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new BV(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=r1}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}const i1="@firebase/functions",s1="0.10.0";/**
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
 */const zV="auth-internal",HV="app-check-internal",WV="messaging-internal";function qV(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(zV),a=r.getProvider(WV),l=r.getProvider(HV);return new jV(s,o,a,l,i,t)};fn(new tn(VV,n,"PUBLIC").setMultipleInstances(!0)),qe(i1,s1,e),qe(i1,s1,"esm2017")}qV(fetch.bind(self));/**
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
 */const tN="firebasestorage.googleapis.com",KV="storageBucket",GV=2*60*1e3,QV=10*60*1e3;/**
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
 */class Qn extends Qt{constructor(e,n,r=0){super(Yf(e),`Firebase Storage: ${n} (${Yf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Qn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var qn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(qn||(qn={}));function Yf(t){return"storage/"+t}function YV(){const t="An unknown error occurred, please check the error payload for server response.";return new Qn(qn.UNKNOWN,t)}function XV(){return new Qn(qn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function JV(){return new Qn(qn.CANCELED,"User canceled the upload/download.")}function ZV(t){return new Qn(qn.INVALID_URL,"Invalid URL '"+t+"'.")}function e9(t){return new Qn(qn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function o1(t){return new Qn(qn.INVALID_ARGUMENT,t)}function nN(){return new Qn(qn.APP_DELETED,"The Firebase app was deleted.")}function t9(t){return new Qn(qn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class In{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=In.makeFromUrl(e,n)}catch{return new In(e,"")}if(r.path==="")return r;throw e9(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(C){C.path_=decodeURIComponent(C.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},v=n===tN?"(?:storage.googleapis.com|storage.cloud.google.com)":n,f="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${f}`,"i"),w=[{regex:a,indices:l,postModify:s},{regex:p,indices:y,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let C=0;C<w.length;C++){const k=w[C],I=k.regex.exec(e);if(I){const L=I[k.indices.bucket];let $=I[k.indices.path];$||($=""),r=new In(L,$),k.postModify(r);break}}if(r==null)throw ZV(e);return r}}class n9{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function r9(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...f){u||(u=!0,e.apply(null,f))}function h(f){i=setTimeout(()=>{i=null,t(p,l())},f)}function d(){s&&clearTimeout(s)}function p(f,...m){if(u){d();return}if(f){d(),c.call(null,f,...m);return}if(l()||o){d(),c.call(null,f,...m);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,h(w)}let y=!1;function v(f){y||(y=!0,d(),!u&&(i!==null?(f||(a=2),clearTimeout(i),h(0)):f||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function i9(t){t(!1)}/**
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
 */function s9(t){return t!==void 0}function a1(t,e,n,r){if(r<e)throw o1(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw o1(`Invalid value for '${t}'. Expected ${n} or less.`)}function o9(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var bh;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(bh||(bh={}));/**
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
 */function a9(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class l9{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ju(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===bh.NO_ERROR,l=s.getStatus();if(!a||a9(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===bh.ABORT;r(!1,new Ju(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ju(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());s9(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=YV();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?nN():JV();o(l)}else{const l=XV();o(l)}};this.canceled_?n(!1,new Ju(!1,null,!0)):this.backoffId_=r9(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&i9(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ju{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function u9(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function c9(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function h9(t,e){e&&(t["X-Firebase-GMPID"]=e)}function d9(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function f9(t,e,n,r,i,s,o=!0){const a=o9(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return h9(u,e),u9(u,n),c9(u,s),d9(u,r),new l9(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function p9(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function m9(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Rh{constructor(e,n){this._service=e,n instanceof In?this._location=n:this._location=In.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Rh(e,n)}get root(){const e=new In(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return m9(this._location.path)}get storage(){return this._service}get parent(){const e=p9(this._location.path);if(e===null)return null;const n=new In(this._location.bucket,e);return new Rh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw t9(e)}}function l1(t,e){const n=e==null?void 0:e[KV];return n==null?null:In.makeFromBucketSpec(n,t)}class g9{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=tN,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=GV,this._maxUploadRetryTime=QV,this._requests=new Set,i!=null?this._bucket=In.makeFromBucketSpec(i,this._host):this._bucket=l1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=In.makeFromBucketSpec(this._url,e):this._bucket=l1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){a1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){a1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Rh(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new n9(nN());{const o=f9(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const u1="@firebase/storage",c1="0.11.2";/**
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
 */const y9="storage";function v9(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new g9(n,r,i,e,yr)}function _9(){fn(new tn(y9,v9,"PUBLIC").setMultipleInstances(!0)),qe(u1,c1,""),qe(u1,c1,"esm2017")}_9();const w9=(t,e)=>e.some(n=>t instanceof n);let h1,d1;function E9(){return h1||(h1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function C9(){return d1||(d1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rN=new WeakMap,ig=new WeakMap,iN=new WeakMap,Xf=new WeakMap,a_=new WeakMap;function T9(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rN.set(n,t)}).catch(()=>{}),a_.set(e,t),e}function S9(t){if(ig.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ig.set(t,e)}let sg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ig.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iN.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function I9(t){sg=t(sg)}function k9(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jf(this),e,...n);return iN.set(r,e.sort?e.sort():[e]),Kr(r)}:C9().includes(t)?function(...e){return t.apply(Jf(this),e),Kr(rN.get(this))}:function(...e){return Kr(t.apply(Jf(this),e))}}function x9(t){return typeof t=="function"?k9(t):(t instanceof IDBTransaction&&S9(t),w9(t,E9())?new Proxy(t,sg):t)}function Kr(t){if(t instanceof IDBRequest)return T9(t);if(Xf.has(t))return Xf.get(t);const e=x9(t);return e!==t&&(Xf.set(t,e),a_.set(e,t)),e}const Jf=t=>a_.get(t);function N9(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Kr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Kr(o.result),l.oldVersion,l.newVersion,Kr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const b9=["get","getKey","getAll","getAllKeys","count"],R9=["put","add","delete","clear"],Zf=new Map;function f1(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zf.get(e))return Zf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=R9.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||b9.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Zf.set(e,s),s}I9(t=>({...t,get:(e,n,r)=>f1(e,n)||t.get(e,n,r),has:(e,n)=>!!f1(e,n)||t.has(e,n)}));const sN="@firebase/installations",l_="0.6.4";/**
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
 */const oN=1e4,aN=`w:${l_}`,lN="FIS_v2",A9="https://firebaseinstallations.googleapis.com/v1",P9=60*60*1e3,O9="installations",D9="Installations";/**
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
 */const L9={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},es=new os(O9,D9,L9);function uN(t){return t instanceof Qt&&t.code.includes("request-failed")}/**
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
 */function cN({projectId:t}){return`${A9}/projects/${t}/installations`}function hN(t){return{token:t.token,requestStatus:2,expiresIn:$9(t.expiresIn),creationTime:Date.now()}}async function dN(t,e){const r=(await e.json()).error;return es.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function fN({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function M9(t,{refreshToken:e}){const n=fN(t);return n.append("Authorization",F9(e)),n}async function pN(t){const e=await t();return e.status>=500&&e.status<600?t():e}function $9(t){return Number(t.replace("s","000"))}function F9(t){return`${lN} ${t}`}/**
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
 */async function U9({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=cN(t),i=fN(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:lN,appId:t.appId,sdkVersion:aN},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await pN(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:hN(u.authToken)}}else throw await dN("Create Installation",l)}/**
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
 */function mN(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function V9(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const B9=/^[cdef][\w-]{21}$/,og="";function j9(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=z9(t);return B9.test(n)?n:og}catch{return og}}function z9(t){return V9(t).substr(0,22)}/**
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
 */function Fd(t){return`${t.appName}!${t.appId}`}/**
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
 */const gN=new Map;function yN(t,e){const n=Fd(t);vN(n,e),H9(n,e)}function vN(t,e){const n=gN.get(t);if(!!n)for(const r of n)r(e)}function H9(t,e){const n=W9();n&&n.postMessage({key:t,fid:e}),q9()}let Ri=null;function W9(){return!Ri&&"BroadcastChannel"in self&&(Ri=new BroadcastChannel("[Firebase] FID Change"),Ri.onmessage=t=>{vN(t.data.key,t.data.fid)}),Ri}function q9(){gN.size===0&&Ri&&(Ri.close(),Ri=null)}/**
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
 */const K9="firebase-installations-database",G9=1,ts="firebase-installations-store";let ep=null;function u_(){return ep||(ep=N9(K9,G9,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ts)}}})),ep}async function Ah(t,e){const n=Fd(t),i=(await u_()).transaction(ts,"readwrite"),s=i.objectStore(ts),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&yN(t,e.fid),e}async function _N(t){const e=Fd(t),r=(await u_()).transaction(ts,"readwrite");await r.objectStore(ts).delete(e),await r.done}async function Ud(t,e){const n=Fd(t),i=(await u_()).transaction(ts,"readwrite"),s=i.objectStore(ts),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&yN(t,a.fid),a}/**
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
 */async function c_(t){let e;const n=await Ud(t.appConfig,r=>{const i=Q9(r),s=Y9(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===og?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Q9(t){const e=t||{fid:j9(),registrationStatus:0};return wN(e)}function Y9(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(es.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=X9(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:J9(t)}:{installationEntry:e}}async function X9(t,e){try{const n=await U9(t,e);return Ah(t.appConfig,n)}catch(n){throw uN(n)&&n.customData.serverCode===409?await _N(t.appConfig):await Ah(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function J9(t){let e=await p1(t.appConfig);for(;e.registrationStatus===1;)await mN(100),e=await p1(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await c_(t);return r||n}return e}function p1(t){return Ud(t,e=>{if(!e)throw es.create("installation-not-found");return wN(e)})}function wN(t){return Z9(t)?{fid:t.fid,registrationStatus:0}:t}function Z9(t){return t.registrationStatus===1&&t.registrationTime+oN<Date.now()}/**
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
 */async function e3({appConfig:t,heartbeatServiceProvider:e},n){const r=t3(t,n),i=M9(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:aN,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await pN(()=>fetch(r,a));if(l.ok){const u=await l.json();return hN(u)}else throw await dN("Generate Auth Token",l)}function t3(t,{fid:e}){return`${cN(t)}/${e}/authTokens:generate`}/**
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
 */async function h_(t,e=!1){let n;const r=await Ud(t.appConfig,s=>{if(!EN(s))throw es.create("not-registered");const o=s.authToken;if(!e&&i3(o))return s;if(o.requestStatus===1)return n=n3(t,e),s;{if(!navigator.onLine)throw es.create("app-offline");const a=o3(s);return n=r3(t,a),a}});return n?await n:r.authToken}async function n3(t,e){let n=await m1(t.appConfig);for(;n.authToken.requestStatus===1;)await mN(100),n=await m1(t.appConfig);const r=n.authToken;return r.requestStatus===0?h_(t,e):r}function m1(t){return Ud(t,e=>{if(!EN(e))throw es.create("not-registered");const n=e.authToken;return a3(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function r3(t,e){try{const n=await e3(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ah(t.appConfig,r),n}catch(n){if(uN(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _N(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ah(t.appConfig,r)}throw n}}function EN(t){return t!==void 0&&t.registrationStatus===2}function i3(t){return t.requestStatus===2&&!s3(t)}function s3(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+P9}function o3(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function a3(t){return t.requestStatus===1&&t.requestTime+oN<Date.now()}/**
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
 */async function l3(t){const e=t,{installationEntry:n,registrationPromise:r}=await c_(e);return r?r.catch(console.error):h_(e).catch(console.error),n.fid}/**
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
 */async function u3(t,e=!1){const n=t;return await c3(n),(await h_(n,e)).token}async function c3(t){const{registrationPromise:e}=await c_(t);e&&await e}/**
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
 */function h3(t){if(!t||!t.options)throw tp("App Configuration");if(!t.name)throw tp("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw tp(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function tp(t){return es.create("missing-app-config-values",{valueName:t})}/**
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
 */const CN="installations",d3="installations-internal",f3=t=>{const e=t.getProvider("app").getImmediate(),n=h3(e),r=Kl(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},p3=t=>{const e=t.getProvider("app").getImmediate(),n=Kl(e,CN).getImmediate();return{getId:()=>l3(n),getToken:i=>u3(n,i)}};function m3(){fn(new tn(CN,f3,"PUBLIC")),fn(new tn(d3,p3,"PRIVATE"))}m3();qe(sN,l_);qe(sN,l_,"esm2017");const np="@firebase/remote-config",g1="0.4.4";/**
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
 */const g3="remote-config";/**
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
 */const y3={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},Ht=new os("remoteconfig","Remote Config",y3);function v3(t){const e=gt(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}/**
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
 */class _3{constructor(e,n,r,i){this.client=e,this.storage=n,this.storageCache=r,this.logger=i}isCachedDataFresh(e,n){if(!n)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const r=Date.now()-n,i=r<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${r}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${i}.`),i}async fetch(e){const[n,r]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(r&&this.isCachedDataFresh(e.cacheMaxAgeMillis,n))return r;e.eTag=r&&r.eTag;const i=await this.client.fetch(e),s=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return i.status===200&&s.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(s),i}}/**
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
 */function w3(t=navigator){return t.languages&&t.languages[0]||t.language}/**
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
 */class E3{constructor(e,n,r,i,s,o){this.firebaseInstallations=e,this.sdkVersion=n,this.namespace=r,this.projectId=i,this.apiKey=s,this.appId=o}async fetch(e){const[n,r]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),s=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,o={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},a={sdk_version:this.sdkVersion,app_instance_id:n,app_instance_id_token:r,app_id:this.appId,language_code:w3()},l={method:"POST",headers:o,body:JSON.stringify(a)},u=fetch(s,l),c=new Promise((f,m)=>{e.signal.addEventListener(()=>{const g=new Error("The operation was aborted.");g.name="AbortError",m(g)})});let h;try{await Promise.race([u,c]),h=await u}catch(f){let m="fetch-client-network";throw(f==null?void 0:f.name)==="AbortError"&&(m="fetch-timeout"),Ht.create(m,{originalErrorMessage:f==null?void 0:f.message})}let d=h.status;const p=h.headers.get("ETag")||void 0;let y,v;if(h.status===200){let f;try{f=await h.json()}catch(m){throw Ht.create("fetch-client-parse",{originalErrorMessage:m==null?void 0:m.message})}y=f.entries,v=f.state}if(v==="INSTANCE_STATE_UNSPECIFIED"?d=500:v==="NO_CHANGE"?d=304:(v==="NO_TEMPLATE"||v==="EMPTY_CONFIG")&&(y={}),d!==304&&d!==200)throw Ht.create("fetch-status",{httpStatus:d});return{status:d,eTag:p,config:y}}}/**
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
 */function C3(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ht.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function T3(t){if(!(t instanceof Qt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class S3{constructor(e,n){this.client=e,this.storage=n}async fetch(e){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,n)}async attemptFetch(e,{throttleEndTimeMillis:n,backoffCount:r}){await C3(e.signal,n);try{const i=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),i}catch(i){if(!T3(i))throw i;const s={throttleEndTimeMillis:Date.now()+TP(r),backoffCount:r+1};return await this.storage.setThrottleMetadata(s),this.attemptFetch(e,s)}}}/**
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
 */const I3=60*1e3,k3=12*60*60*1e3;class x3{constructor(e,n,r,i,s){this.app=e,this._client=n,this._storageCache=r,this._storage=i,this._logger=s,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:I3,minimumFetchIntervalMillis:k3},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
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
 */function Ec(t,e){const n=t.target.error||void 0;return Ht.create(e,{originalErrorMessage:n&&(n==null?void 0:n.message)})}const vi="app_namespace_store",N3="firebase_remote_config",b3=1;function R3(){return new Promise((t,e)=>{try{const n=indexedDB.open(N3,b3);n.onerror=r=>{e(Ec(r,"storage-open"))},n.onsuccess=r=>{t(r.target.result)},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(vi,{keyPath:"compositeKey"})}}}catch(n){e(Ht.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}})}class A3{constructor(e,n,r,i=R3()){this.appId=e,this.appName=n,this.namespace=r,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const n=await this.openDbPromise;return new Promise((r,i)=>{const o=n.transaction([vi],"readonly").objectStore(vi),a=this.createCompositeKey(e);try{const l=o.get(a);l.onerror=u=>{i(Ec(u,"storage-get"))},l.onsuccess=u=>{const c=u.target.result;r(c?c.value:void 0)}}catch(l){i(Ht.create("storage-get",{originalErrorMessage:l==null?void 0:l.message}))}})}async set(e,n){const r=await this.openDbPromise;return new Promise((i,s)=>{const a=r.transaction([vi],"readwrite").objectStore(vi),l=this.createCompositeKey(e);try{const u=a.put({compositeKey:l,value:n});u.onerror=c=>{s(Ec(c,"storage-set"))},u.onsuccess=()=>{i()}}catch(u){s(Ht.create("storage-set",{originalErrorMessage:u==null?void 0:u.message}))}})}async delete(e){const n=await this.openDbPromise;return new Promise((r,i)=>{const o=n.transaction([vi],"readwrite").objectStore(vi),a=this.createCompositeKey(e);try{const l=o.delete(a);l.onerror=u=>{i(Ec(u,"storage-delete"))},l.onsuccess=()=>{r()}}catch(l){i(Ht.create("storage-delete",{originalErrorMessage:l==null?void 0:l.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
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
 */class P3{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),i=await e;i&&(this.lastFetchStatus=i);const s=await n;s&&(this.lastSuccessfulFetchTimestampMillis=s);const o=await r;o&&(this.activeConfig=o)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}/**
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
 */function O3(){fn(new tn(g3,t,"PUBLIC").setMultipleInstances(!0)),qe(np,g1),qe(np,g1,"esm2017");function t(e,{instanceIdentifier:n}){const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if(typeof window=="undefined")throw Ht.create("registration-window");if(!GT())throw Ht.create("indexed-db-unavailable");const{projectId:s,apiKey:o,appId:a}=r.options;if(!s)throw Ht.create("registration-project-id");if(!o)throw Ht.create("registration-api-key");if(!a)throw Ht.create("registration-app-id");n=n||"firebase";const l=new A3(a,r.name,n),u=new P3(l),c=new ql(np);c.logLevel=ae.ERROR;const h=new E3(i,yr,n,s,o,a),d=new S3(h,l),p=new _3(d,l,u,c),y=new x3(r,p,u,l,c);return v3(y),y}}O3();var ag=function(t,e){return ag=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},ag(t,e)};function _r(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");ag(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function D3(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function TN(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function _o(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function wo(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function Eo(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function eo(t){return this instanceof eo?(this.v=t,this):new eo(t)}function L3(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(d){r[d]&&(i[d]=function(p){return new Promise(function(y,v){s.push([d,p,y,v])>1||a(d,p)})})}function a(d,p){try{l(r[d](p))}catch(y){h(s[0][3],y)}}function l(d){d.value instanceof eo?Promise.resolve(d.value.v).then(u,c):h(s[0][2],d)}function u(d){a("next",d)}function c(d){a("throw",d)}function h(d,p){d(p),s.shift(),s.length&&a(s[0][0],s[0][1])}}function M3(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof _o=="function"?_o(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(s){n[s]=t[s]&&function(o){return new Promise(function(a,l){o=t[s](o),i(a,l,o.done,o.value)})}}function i(s,o,a,l){Promise.resolve(l).then(function(u){s({value:u,done:a})},o)}}function Ye(t){return typeof t=="function"}function d_(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var rp=d_(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function Ph(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Eu=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,i,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=_o(o),l=a.next();!l.done;l=a.next()){var u=l.value;u.remove(this)}}catch(v){e={error:v}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else o.remove(this);var c=this.initialTeardown;if(Ye(c))try{c()}catch(v){s=v instanceof rp?v.errors:[v]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var d=_o(h),p=d.next();!p.done;p=d.next()){var y=p.value;try{y1(y)}catch(v){s=s!=null?s:[],v instanceof rp?s=Eo(Eo([],wo(s)),wo(v.errors)):s.push(v)}}}catch(v){r={error:v}}finally{try{p&&!p.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(s)throw new rp(s)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)y1(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&Ph(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&Ph(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),SN=Eu.EMPTY;function IN(t){return t instanceof Eu||t&&"closed"in t&&Ye(t.remove)&&Ye(t.add)&&Ye(t.unsubscribe)}function y1(t){Ye(t)?t():t.unsubscribe()}var kN={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},$3={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,Eo([t,e],wo(n)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function xN(t){$3.setTimeout(function(){throw t})}function v1(){}function Cc(t){t()}var f_=function(t){_r(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,IN(n)&&n.add(r)):r.destination=B3,r}return e.create=function(n,r,i){return new $l(n,r,i)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Eu),F3=Function.prototype.bind;function ip(t,e){return F3.call(t,e)}var U3=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){Zu(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){Zu(r)}else Zu(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){Zu(n)}},t}(),$l=function(t){_r(e,t);function e(n,r,i){var s=t.call(this)||this,o;if(Ye(n)||!n)o={next:n!=null?n:void 0,error:r!=null?r:void 0,complete:i!=null?i:void 0};else{var a;s&&kN.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return s.unsubscribe()},o={next:n.next&&ip(n.next,a),error:n.error&&ip(n.error,a),complete:n.complete&&ip(n.complete,a)}):o=n}return s.destination=new U3(o),s}return e}(f_);function Zu(t){xN(t)}function V3(t){throw t}var B3={closed:!0,next:v1,error:V3,complete:v1},p_=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function NN(t){return t}function j3(t){return t.length===0?NN:t.length===1?t[0]:function(e){return t.reduce(function(n,r){return r(n)},e)}}var Ut=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var i=this,s=H3(e)?e:new $l(e,n,r);return Cc(function(){var o=i,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?i._subscribe(s):i._trySubscribe(s))}),s},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=_1(n),new n(function(i,s){var o=new $l({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:i});r.subscribe(o)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[p_]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return j3(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=_1(e),new e(function(r,i){var s;n.subscribe(function(o){return s=o},function(o){return i(o)},function(){return r(s)})})},t.create=function(e){return new t(e)},t}();function _1(t){var e;return(e=t!=null?t:kN.Promise)!==null&&e!==void 0?e:Promise}function z3(t){return t&&Ye(t.next)&&Ye(t.error)&&Ye(t.complete)}function H3(t){return t&&t instanceof f_||z3(t)&&IN(t)}function W3(t){return Ye(t==null?void 0:t.lift)}function cs(t){return function(e){if(W3(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Co(t,e,n,r,i){return new q3(t,e,n,r,i)}var q3=function(t){_r(e,t);function e(n,r,i,s,o,a){var l=t.call(this,n)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=r?function(u){try{r(u)}catch(c){n.error(c)}}:t.prototype._next,l._error=s?function(u){try{s(u)}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=i?function(){try{i()}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e}(f_),K3=d_(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Vd=function(t){_r(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new w1(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new K3},e.prototype.next=function(n){var r=this;Cc(function(){var i,s;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var o=_o(r.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(n)}}catch(u){i={error:u}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}})},e.prototype.error=function(n){var r=this;Cc(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},e.prototype.complete=function(){var n=this;Cc(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,i=this,s=i.hasError,o=i.isStopped,a=i.observers;return s||o?SN:(this.currentObservers=null,a.push(n),new Eu(function(){r.currentObservers=null,Ph(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,s=r.thrownError,o=r.isStopped;i?n.error(s):o&&n.complete()},e.prototype.asObservable=function(){var n=new Ut;return n.source=this,n},e.create=function(n,r){return new w1(n,r)},e}(Ut),w1=function(t){_r(e,t);function e(n,r){var i=t.call(this)||this;return i.destination=n,i.source=r,i}return e.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},e.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:SN},e}(Vd),m_={now:function(){return(m_.delegate||Date).now()},delegate:void 0},G3=function(t){_r(e,t);function e(n,r,i){n===void 0&&(n=1/0),r===void 0&&(r=1/0),i===void 0&&(i=m_);var s=t.call(this)||this;return s._bufferSize=n,s._windowTime=r,s._timestampProvider=i,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=r===1/0,s._bufferSize=Math.max(1,n),s._windowTime=Math.max(1,r),s}return e.prototype.next=function(n){var r=this,i=r.isStopped,s=r._buffer,o=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;i||(s.push(n),!o&&s.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),i=this,s=i._infiniteTimeWindow,o=i._buffer,a=o.slice(),l=0;l<a.length&&!n.closed;l+=s?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,i=n._timestampProvider,s=n._buffer,o=n._infiniteTimeWindow,a=(o?1:2)*r;if(r<1/0&&a<s.length&&s.splice(0,s.length-a),!o){for(var l=i.now(),u=0,c=1;c<s.length&&s[c]<=l;c+=2)u=c;u&&s.splice(0,u+1)}},e}(Vd),Q3=function(t){_r(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}(Eu),lg={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=lg.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,Eo([t,e],wo(n))):setInterval.apply(void 0,Eo([t,e],wo(n)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},Y3=function(t){_r(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return e.prototype.schedule=function(n,r){if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(s,this.id,r),this},e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),lg.setInterval(n.flush.bind(n,this),i)},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;lg.clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var i=!1,s;try{this.work(n)}catch(o){i=!0,s=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,s=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Ph(s,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(Q3),E1=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(r,n)},t.now=m_.now,t}(),X3=function(t){_r(e,t);function e(n,r){r===void 0&&(r=E1.now);var i=t.call(this,n,r)||this;return i.actions=[],i._active=!1,i._scheduled=void 0,i}return e.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},e}(E1);new X3(Y3);var J3=new Ut(function(t){return t.complete()});function Z3(t){return t?eB(t):J3}function eB(t){return new Ut(function(e){return t.schedule(function(){return e.complete()})})}function tB(t){return t&&Ye(t.schedule)}function nB(t){return t[t.length-1]}function rB(t){return tB(nB(t))?t.pop():void 0}var bN=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function RN(t){return Ye(t==null?void 0:t.then)}function AN(t){return Ye(t[p_])}function PN(t){return Symbol.asyncIterator&&Ye(t==null?void 0:t[Symbol.asyncIterator])}function ON(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function iB(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var DN=iB();function LN(t){return Ye(t==null?void 0:t[DN])}function MN(t){return L3(this,arguments,function(){var e,n,r,i;return TN(this,function(s){switch(s.label){case 0:e=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,eo(e.read())];case 3:return n=s.sent(),r=n.value,i=n.done,i?[4,eo(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,eo(r)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function $N(t){return Ye(t==null?void 0:t.getReader)}function zo(t){if(t instanceof Ut)return t;if(t!=null){if(AN(t))return sB(t);if(bN(t))return oB(t);if(RN(t))return aB(t);if(PN(t))return FN(t);if(LN(t))return lB(t);if($N(t))return uB(t)}throw ON(t)}function sB(t){return new Ut(function(e){var n=t[p_]();if(Ye(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function oB(t){return new Ut(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function aB(t){return new Ut(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,xN)})}function lB(t){return new Ut(function(e){var n,r;try{for(var i=_o(t),s=i.next();!s.done;s=i.next()){var o=s.value;if(e.next(o),e.closed)return}}catch(a){n={error:a}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}e.complete()})}function FN(t){return new Ut(function(e){cB(t,e).catch(function(n){return e.error(n)})})}function uB(t){return FN(MN(t))}function cB(t,e){var n,r,i,s;return D3(this,void 0,void 0,function(){var o,a;return TN(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),n=M3(t),l.label=1;case 1:return[4,n.next()];case 2:if(r=l.sent(),!!r.done)return[3,4];if(o=r.value,e.next(o),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=l.sent(),i={error:a},[3,11];case 6:return l.trys.push([6,,9,10]),r&&!r.done&&(s=n.return)?[4,s.call(n)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function Fi(t,e,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var s=e.schedule(function(){n(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(s),!i)return s}function UN(t,e){return e===void 0&&(e=0),cs(function(n,r){n.subscribe(Co(r,function(i){return Fi(r,t,function(){return r.next(i)},e)},function(){return Fi(r,t,function(){return r.complete()},e)},function(i){return Fi(r,t,function(){return r.error(i)},e)}))})}function VN(t,e){return e===void 0&&(e=0),cs(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function hB(t,e){return zo(t).pipe(VN(e),UN(e))}function dB(t,e){return zo(t).pipe(VN(e),UN(e))}function fB(t,e){return new Ut(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function pB(t,e){return new Ut(function(n){var r;return Fi(n,e,function(){r=t[DN](),Fi(n,e,function(){var i,s,o;try{i=r.next(),s=i.value,o=i.done}catch(a){n.error(a);return}o?n.complete():n.next(s)},0,!0)}),function(){return Ye(r==null?void 0:r.return)&&r.return()}})}function BN(t,e){if(!t)throw new Error("Iterable cannot be null");return new Ut(function(n){Fi(n,e,function(){var r=t[Symbol.asyncIterator]();Fi(n,e,function(){r.next().then(function(i){i.done?n.complete():n.next(i.value)})},0,!0)})})}function mB(t,e){return BN(MN(t),e)}function gB(t,e){if(t!=null){if(AN(t))return hB(t,e);if(bN(t))return fB(t,e);if(RN(t))return dB(t,e);if(PN(t))return BN(t,e);if(LN(t))return pB(t,e);if($N(t))return mB(t,e)}throw ON(t)}function jN(t,e){return e?gB(t,e):zo(t)}function C1(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=rB(t);return jN(t,n)}d_(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function g_(t,e){return cs(function(n,r){var i=0;n.subscribe(Co(r,function(s){r.next(t.call(e,s,i++))}))})}function zN(t){return cs(function(e,n){var r=null,i=!1,s;r=e.subscribe(Co(n,void 0,void 0,function(o){s=zo(t(o,zN(t)(e))),r?(r.unsubscribe(),r=null,s.subscribe(n)):i=!0})),i&&(r.unsubscribe(),r=null,s.subscribe(n))})}function yB(t){t===void 0&&(t={});var e=t.connector,n=e===void 0?function(){return new Vd}:e,r=t.resetOnError,i=r===void 0?!0:r,s=t.resetOnComplete,o=s===void 0?!0:s,a=t.resetOnRefCountZero,l=a===void 0?!0:a;return function(u){var c,h,d,p=0,y=!1,v=!1,f=function(){h==null||h.unsubscribe(),h=void 0},m=function(){f(),c=d=void 0,y=v=!1},g=function(){var w=c;m(),w==null||w.unsubscribe()};return cs(function(w,C){p++,!v&&!y&&f();var k=d=d!=null?d:n();C.add(function(){p--,p===0&&!v&&!y&&(h=sp(g,l))}),k.subscribe(C),!c&&p>0&&(c=new $l({next:function(I){return k.next(I)},error:function(I){v=!0,f(),h=sp(m,i,I),k.error(I)},complete:function(){y=!0,f(),h=sp(m,o),k.complete()}}),zo(w).subscribe(c))})(u)}}function sp(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(e===!0){t();return}if(e!==!1){var i=new $l({next:function(){i.unsubscribe(),t()}});return e.apply(void 0,Eo([],wo(n))).subscribe(i)}}function vB(t,e,n){var r,i,s,o,a=!1;return t&&typeof t=="object"?(r=t.bufferSize,o=r===void 0?1/0:r,i=t.windowTime,e=i===void 0?1/0:i,s=t.refCount,a=s===void 0?!1:s,n=t.scheduler):o=t!=null?t:1/0,yB({connector:function(){return new G3(o,e,n)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:a})}function _B(t,e){return cs(function(n,r){var i=null,s=0,o=!1,a=function(){return o&&!i&&r.complete()};n.subscribe(Co(r,function(l){i==null||i.unsubscribe();var u=0,c=s++;zo(t(l,c)).subscribe(i=Co(r,function(h){return r.next(e?e(l,h,c,u++):h)},function(){i=null,a()}))},function(){o=!0,a()}))})}function wB(t,e,n){var r=Ye(t)||e||n?{next:t,error:e,complete:n}:t;return r?cs(function(i,s){var o;(o=r.subscribe)===null||o===void 0||o.call(r);var a=!0;i.subscribe(Co(s,function(l){var u;(u=r.next)===null||u===void 0||u.call(r,l),s.next(l)},function(){var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),s.complete()},function(l){var u;a=!1,(u=r.error)===null||u===void 0||u.call(r,l),s.error(l)},function(){var l,u;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(u=r.finalize)===null||u===void 0||u.call(r)}))}):NN}function EB(t){return new Ut(function(e){var n=kS(t,e.next.bind(e),e.error.bind(e),e.complete.bind(e));return{unsubscribe:n}})}const CB="[DEFAULT]",HN=_.exports.createContext(void 0),WN=_.exports.createContext(!1),TB="4.2.2",SB=(t,e)=>t===e||[...Object.keys(t),...Object.keys(e)].every(n=>t[n]===e[n]);function IB(t){const{firebaseConfig:e,appName:n,suspense:r}=t,i=_.exports.useMemo(()=>{if(t.firebaseApp)return t.firebaseApp;const s=wO().find(o=>o.name===(n||CB));if(s){if(e&&SB(s.options,e))return s;throw new Error(`Does not match the options already provided to the ${n||"default"} firebase app instance, give this new instance a different appName.`)}else{if(!e)throw new Error("No firebaseConfig provided");const o=_.exports.version||"unknown";return qe("react",o),qe("reactfire",TB),ZT(e,n)}},[t.firebaseApp,e,n]);return _.exports.createElement(HN.Provider,{value:i},_.exports.createElement(WN.Provider,Object.assign({value:r!=null?r:!1},t)))}function kB(t){let e=_.exports.useContext(WN);return t!==void 0?t:e}function qN(){const t=_.exports.useContext(HN);if(!t)throw new Error("Cannot call useFirebaseApp unless your component is within a FirebaseAppProvider");return t}function KN(t){if((t==null?void 0:t.hasOwnProperty("requiredClaims"))&&(t==null?void 0:t.hasOwnProperty("validateCustomClaims")))throw new Error('Cannot have both "requiredClaims" and "validateCustomClaims". Use one or the other.');const e=ZN();let n=`auth:signInCheck:${e.name}::forceRefresh:${!!(t!=null&&t.forceRefresh)}`;t!=null&&t.forceRefresh&&(n=`${n}:forceRefresh:${t.forceRefresh}`),t!=null&&t.hasOwnProperty("requiredClaims")?n=`${n}:requiredClaims:${JSON.stringify(t.requiredClaims)}`:t!=null&&t.hasOwnProperty("validateCustomClaims")&&(n=`${n}:validateCustomClaims:${JSON.stringify(t.validateCustomClaims)}`);const r=EB(e).pipe(_B(i=>{var s;return i?t&&(t.hasOwnProperty("requiredClaims")||t.hasOwnProperty("validateCustomClaims"))?jN(i.getIdTokenResult((s=t==null?void 0:t.forceRefresh)!==null&&s!==void 0?s:!1)).pipe(g_(o=>{let a;t.hasOwnProperty("requiredClaims")?a=xB(t.requiredClaims):a=t.validateCustomClaims;const{hasRequiredClaims:l,errors:u}=a(o.claims);return{signedIn:!0,hasRequiredClaims:l,errors:u,user:i}})):C1({signedIn:!0,hasRequiredClaims:!0,errors:{},user:i}):C1({signedIn:!1,hasRequiredClaims:!1,errors:{},user:null})}));return GN(n,r)}function xB(t){return function(e){const n={};return Object.keys(t).forEach(r=>{t[r]!==e[r]&&(n[r]=[new y_("auth/missing-claim",`Expected "${t[r]}", but user has "${e[r]}" instead`)])}),{hasRequiredClaims:Object.keys(n).length===0,errors:n}}}/**
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
 */var fi,_i;(function(t){t.added="child_added",t.removed="child_removed",t.changed="child_changed",t.moved="child_moved",t.value="value"})(_i||(_i={}));Object.freeze((fi={},fi[_i.added]=xV,fi[_i.removed]=RV,fi[_i.changed]=NV,fi[_i.moved]=bV,fi[_i.value]=kV,fi));const NB=globalThis._reactFireDatabaseCachedQueries||[];globalThis._reactFireDatabaseCachedQueries||(globalThis._reactFireDatabaseCachedQueries=NB);/**
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
 */var bB={includeMetadataChanges:!1};function RB(t,e){return e===void 0&&(e=bB),new Ut(function(n){var r=NF(t,e,{next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)});return{unsubscribe:r}})}function AB(t,e){e===void 0&&(e={});var n=t.data();return!t.exists()||typeof n!="object"||n===null||e.idField&&(n[e.idField]=t.id),n}function PB(t){return RB(t,{includeMetadataChanges:!0}).pipe(g_(function(e){return e.docs}))}function OB(t,e){return e===void 0&&(e={}),PB(t).pipe(g_(function(n){return n.map(function(r){return AB(r,e)})}))}class DB extends Vd{constructor(e,n){super(),this._timeoutWindow=n,this._hasValue=!1,this._error=void 0,this._firstEmission=new Promise(r=>this._resolveFirstEmission=r),this._innerObservable=e.pipe(wB({next:r=>{this._next(r)},error:r=>{this._error=r,this._resolveFirstEmission()}}),zN(()=>Z3()),vB(1)),this._warmupSubscription=this._innerObservable.subscribe(),this._timeoutHandler=setTimeout(this._reset.bind(this),this._timeoutWindow)}get hasValue(){return this._hasValue||!!this._error}get value(){if(this._error)throw this._error;if(!this.hasValue)throw Error("Can only get value if SuspenseSubject has a value");return this._value}get firstEmission(){return this._firstEmission}_next(e){this._hasValue=!0,this._value=e,this._resolveFirstEmission()}_reset(){this._warmupSubscription&&this._warmupSubscription.unsubscribe(),this._hasValue=!1,this._value=void 0,this._error=void 0,this._firstEmission=new Promise(e=>this._resolveFirstEmission=e)}_subscribe(e){return this._timeoutHandler&&clearTimeout(this._timeoutHandler),this._innerSubscriber=this._innerObservable.subscribe(e),this._innerSubscriber}get ourError(){return this._error}}const LB=3e4,Tc=globalThis._reactFirePreloadedObservables||new Map;globalThis._reactFirePreloadedObservables||(globalThis._reactFirePreloadedObservables=Tc);function MB(t,e){if(Tc.has(e))return Tc.get(e);{const n=new DB(t,LB);return Tc.set(e,n),n}}function $B(t){return function(e,n){const r=Object.assign(Object.assign({},e),{hasEmitted:e.hasEmitted||t.hasValue,error:t.ourError,firstValuePromise:t.firstEmission});switch(t.hasValue&&(r.data=t.value),n){case"value":return r.status="success",r;case"error":return r.status="error",r;case"complete":return r.isComplete=!0,r;default:throw new Error(`invalid action "${n}"`)}}}function GN(t,e,n={}){var r;if(!t)throw new Error("cannot call useObservable without an observableId");const i=MB(e,t),s=n.hasOwnProperty("initialData")||n.hasOwnProperty("startWithValue"),o=i.hasValue||s;if(kB(n.suspense)===!0&&!o)throw i.firstEmission;const a={status:o?"success":"loading",hasEmitted:o,isComplete:!1,data:i.hasValue?i.value:(r=n==null?void 0:n.initialData)!==null&&r!==void 0?r:n==null?void 0:n.startWithValue,error:i.ourError,firstValuePromise:i.firstEmission},[l,u]=_.exports.useReducer($B(i),a);return _.exports.useEffect(()=>{const c=i.subscribe({next:()=>{u("value")},error:h=>{throw u("error"),h},complete:()=>{u("complete")}});return()=>c.unsubscribe()},[i]),l}const ug=globalThis._reactFireFirestoreQueryCache||[];globalThis._reactFireFirestoreQueryCache||(globalThis._reactFireFirestoreQueryCache=ug);function FB(t){const e=ug.findIndex(n=>aF(n,t));return e>-1?e:ug.push(t)-1}function UB(t,e){const n=e?HB(e):"NO_ID_FIELD",r=`firestore:collectionData:${FB(t)}:idField=${n}`,i=OB(t,{idField:n});return GN(r,i,e)}_.exports.createContext(void 0);const QN=_.exports.createContext(void 0);_.exports.createContext(void 0);_.exports.createContext(void 0);const YN=_.exports.createContext(void 0);_.exports.createContext(void 0);_.exports.createContext(void 0);_.exports.createContext(void 0);_.exports.createContext(void 0);function XN(t){return function(e){var n,r;if(!e.sdk)throw new Error("no sdk provided");const i=qN().name;if(((r=(n=e==null?void 0:e.sdk)===null||n===void 0?void 0:n.app)===null||r===void 0?void 0:r.name)!==i)throw new Error("sdk was initialized with a different firebase app");return _.exports.createElement(t.Provider,Object.assign({value:e.sdk},e))}}function JN(t){const e=_.exports.useContext(t);if(!e)throw new Error("SDK not found. useSdk must be called from within a provider");return e}const VB=XN(QN),BB=XN(YN),ZN=()=>JN(QN),jB=()=>JN(YN);class y_ extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name="ReactFireError",Object.setPrototypeOf(this,y_.prototype)}}function zB(t,e){if(e==="idField"||e==="initialData"||e==="suspense")return t?t[e]:void 0;throw new Error(`Field "${e}" is not a valid key in ReactFireOptions`)}function HB(t){return zB(t,"idField")}/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fl(){return Fl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fl.apply(this,arguments)}var Dr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Dr||(Dr={}));const T1="popstate";function WB(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return cg("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Oh(i)}return KB(e,n,null,t)}function Ve(t,e){if(t===!1||t===null||typeof t=="undefined")throw new Error(e)}function v_(t,e){if(!t){typeof console!="undefined"&&console.warn(e);try{throw new Error(e)}catch{}}}function qB(){return Math.random().toString(36).substr(2,8)}function S1(t,e){return{usr:t.state,key:t.key,idx:e}}function cg(t,e,n,r){return n===void 0&&(n=null),Fl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ho(e):e,{state:n,key:e&&e.key||r||qB()})}function Oh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ho(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function KB(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Dr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Fl({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Dr.Pop;let f=c(),m=f==null?null:f-u;u=f,l&&l({action:a,location:v.location,delta:m})}function d(f,m){a=Dr.Push;let g=cg(v.location,f,m);n&&n(g,f),u=c()+1;let w=S1(g,u),C=v.createHref(g);try{o.pushState(w,"",C)}catch{i.location.assign(C)}s&&l&&l({action:a,location:v.location,delta:1})}function p(f,m){a=Dr.Replace;let g=cg(v.location,f,m);n&&n(g,f),u=c();let w=S1(g,u),C=v.createHref(g);o.replaceState(w,"",C),s&&l&&l({action:a,location:v.location,delta:0})}function y(f){let m=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof f=="string"?f:Oh(f);return Ve(m,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,m)}let v={get action(){return a},get location(){return t(i,o)},listen(f){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(T1,h),l=f,()=>{i.removeEventListener(T1,h),l=null}},createHref(f){return e(i,f)},createURL:y,encodeLocation(f){let m=y(f);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:p,go(f){return o.go(f)}};return v}var I1;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(I1||(I1={}));function GB(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ho(e):e,i=__(r.pathname||"/",n);if(i==null)return null;let s=eb(t);QB(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=ij(s[a],aj(i));return o}function eb(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ve(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Gr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ve(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),eb(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:nj(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of tb(s.path))i(s,o,l)}),e}function tb(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=tb(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function QB(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:rj(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const YB=/^:\w+$/,XB=3,JB=2,ZB=1,ej=10,tj=-2,k1=t=>t==="*";function nj(t,e){let n=t.split("/"),r=n.length;return n.some(k1)&&(r+=tj),e&&(r+=JB),n.filter(i=>!k1(i)).reduce((i,s)=>i+(YB.test(s)?XB:s===""?ZB:ej),r)}function rj(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function ij(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=sj({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Gr([i,c.pathname]),pathnameBase:hj(Gr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Gr([i,c.pathnameBase]))}return s}function sj(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=oj(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=lj(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function oj(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),v_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function aj(t){try{return decodeURI(t)}catch(e){return v_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function lj(t,e){try{return decodeURIComponent(t)}catch(n){return v_(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function __(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function uj(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ho(t):t;return{pathname:n?n.startsWith("/")?n:cj(n,e):e,search:dj(r),hash:fj(i)}}function cj(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function op(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function w_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function E_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ho(t):(i=Fl({},t),Ve(!i.pathname||!i.pathname.includes("?"),op("?","pathname","search",i)),Ve(!i.pathname||!i.pathname.includes("#"),op("#","pathname","hash",i)),Ve(!i.search||!i.search.includes("#"),op("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=uj(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Gr=t=>t.join("/").replace(/\/\/+/g,"/"),hj=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),dj=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,fj=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function pj(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const mj=["post","put","patch","delete"];[...mj];/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dh(){return Dh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Dh.apply(this,arguments)}const C_=_.exports.createContext(null),nb=_.exports.createContext(null),hs=_.exports.createContext(null),Bd=_.exports.createContext(null),hi=_.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),rb=_.exports.createContext(null);function gj(t,e){let{relative:n}=e===void 0?{}:e;Wo()||Ve(!1);let{basename:r,navigator:i}=_.exports.useContext(hs),{hash:s,pathname:o,search:a}=T_(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Gr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Wo(){return _.exports.useContext(Bd)!=null}function qo(){return Wo()||Ve(!1),_.exports.useContext(Bd).location}function ib(t){_.exports.useContext(hs).static||_.exports.useLayoutEffect(t)}function sb(){let{isDataRoute:t}=_.exports.useContext(hi);return t?bj():yj()}function yj(){Wo()||Ve(!1);let t=_.exports.useContext(C_),{basename:e,navigator:n}=_.exports.useContext(hs),{matches:r}=_.exports.useContext(hi),{pathname:i}=qo(),s=JSON.stringify(w_(r).map(l=>l.pathnameBase)),o=_.exports.useRef(!1);return ib(()=>{o.current=!0}),_.exports.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=E_(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Gr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function T_(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=_.exports.useContext(hi),{pathname:i}=qo(),s=JSON.stringify(w_(r).map(o=>o.pathnameBase));return _.exports.useMemo(()=>E_(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function vj(t,e){return _j(t,e)}function _j(t,e,n){Wo()||Ve(!1);let{navigator:r}=_.exports.useContext(hs),{matches:i}=_.exports.useContext(hi),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=qo(),u;if(e){var c;let v=typeof e=="string"?Ho(e):e;a==="/"||((c=v.pathname)==null?void 0:c.startsWith(a))||Ve(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=GB(t,{pathname:d}),y=Sj(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Gr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Gr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?_.exports.createElement(Bd.Provider,{value:{location:Dh({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Dr.Pop}},y):y}function wj(){let t=Nj(),e=pj(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return _.exports.createElement(_.exports.Fragment,null,_.exports.createElement("h2",null,"Unexpected Application Error!"),_.exports.createElement("h3",{style:{fontStyle:"italic"}},e),n?_.exports.createElement("pre",{style:i},n):null,s)}const Ej=_.exports.createElement(wj,null);class Cj extends _.exports.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?_.exports.createElement(hi.Provider,{value:this.props.routeContext},_.exports.createElement(rb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Tj(t){let{routeContext:e,match:n,children:r}=t,i=_.exports.useContext(C_);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.exports.createElement(hi.Provider,{value:e},r)}function Sj(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Ve(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||Ej);let d=e.concat(s.slice(0,u+1)),p=()=>{let y;return c?y=h:l.route.Component?y=_.exports.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,_.exports.createElement(Tj,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?_.exports.createElement(Cj,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var hg;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(hg||(hg={}));var Ul;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Ul||(Ul={}));function Ij(t){let e=_.exports.useContext(C_);return e||Ve(!1),e}function kj(t){let e=_.exports.useContext(nb);return e||Ve(!1),e}function xj(t){let e=_.exports.useContext(hi);return e||Ve(!1),e}function ob(t){let e=xj(),n=e.matches[e.matches.length-1];return n.route.id||Ve(!1),n.route.id}function Nj(){var t;let e=_.exports.useContext(rb),n=kj(Ul.UseRouteError),r=ob(Ul.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function bj(){let{router:t}=Ij(hg.UseNavigateStable),e=ob(Ul.UseNavigateStable),n=_.exports.useRef(!1);return ib(()=>{n.current=!0}),_.exports.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Dh({fromRouteId:e},s)))},[t,e])}function Rj(t){let{to:e,replace:n,state:r,relative:i}=t;Wo()||Ve(!1);let{matches:s}=_.exports.useContext(hi),{pathname:o}=qo(),a=sb(),l=E_(e,w_(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return _.exports.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Sc(t){Ve(!1)}function Aj(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Dr.Pop,navigator:s,static:o=!1}=t;Wo()&&Ve(!1);let a=e.replace(/^\/*/,"/"),l=_.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ho(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,y=_.exports.useMemo(()=>{let v=__(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return y==null?null:_.exports.createElement(hs.Provider,{value:l},_.exports.createElement(Bd.Provider,{children:n,value:y}))}function Pj(t){let{children:e,location:n}=t;return vj(dg(e),n)}var x1;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(x1||(x1={}));new Promise(()=>{});function dg(t,e){e===void 0&&(e=[]);let n=[];return _.exports.Children.forEach(t,(r,i)=>{if(!_.exports.isValidElement(r))return;let s=[...e,i];if(r.type===_.exports.Fragment){n.push.apply(n,dg(r.props.children,s));return}r.type!==Sc&&Ve(!1),!r.props.index||!r.props.children||Ve(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=dg(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lh(){return Lh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lh.apply(this,arguments)}function ab(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Oj(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Dj(t,e){return t.button===0&&(!e||e==="_self")&&!Oj(t)}const Lj=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Mj=["aria-current","caseSensitive","className","end","style","to","children"];function $j(t){let{basename:e,children:n,window:r}=t,i=_.exports.useRef();i.current==null&&(i.current=WB({window:r,v5Compat:!0}));let s=i.current,[o,a]=_.exports.useState({action:s.action,location:s.location});return _.exports.useLayoutEffect(()=>s.listen(a),[s]),_.exports.createElement(Aj,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const Fj=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",Uj=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vj=_.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=ab(e,Lj),{basename:d}=_.exports.useContext(hs),p,y=!1;if(typeof u=="string"&&Uj.test(u)&&(p=u,Fj))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),C=__(w.pathname,d);w.origin===g.origin&&C!=null?u=C+w.search+w.hash:y=!0}catch{}let v=gj(u,{relative:i}),f=jj(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(g){r&&r(g),g.defaultPrevented||f(g)}return _.exports.createElement("a",Lh({},h,{href:p||v,onClick:y||s?r:m,ref:n,target:l}))}),Bj=_.exports.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=ab(e,Mj),h=T_(l,{relative:c.relative}),d=qo(),p=_.exports.useContext(nb),{navigator:y}=_.exports.useContext(hs),v=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,f=d.pathname,m=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(f=f.toLowerCase(),m=m?m.toLowerCase():null,v=v.toLowerCase());let g=f===v||!o&&f.startsWith(v)&&f.charAt(v.length)==="/",w=m!=null&&(m===v||!o&&m.startsWith(v)&&m.charAt(v.length)==="/"),C=g?r:void 0,k;typeof s=="function"?k=s({isActive:g,isPending:w}):k=[s,g?"active":null,w?"pending":null].filter(Boolean).join(" ");let I=typeof a=="function"?a({isActive:g,isPending:w}):a;return _.exports.createElement(Vj,Lh({},c,{"aria-current":C,className:k,ref:n,style:I,to:l}),typeof u=="function"?u({isActive:g,isPending:w}):u)});var N1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(N1||(N1={}));var b1;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(b1||(b1={}));function jj(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=sb(),l=qo(),u=T_(t,{relative:o});return _.exports.useCallback(c=>{if(Dj(c,n)){c.preventDefault();let h=r!==void 0?r:Oh(l)===Oh(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var Cu=t=>t.type==="checkbox",As=t=>t instanceof Date,Lt=t=>t==null;const lb=t=>typeof t=="object";var Xe=t=>!Lt(t)&&!Array.isArray(t)&&lb(t)&&!As(t),zj=t=>Xe(t)&&t.target?Cu(t.target)?t.target.checked:t.target.value:t,Hj=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,Wj=(t,e)=>t.has(Hj(e)),qj=t=>{const e=t.constructor&&t.constructor.prototype;return Xe(e)&&e.hasOwnProperty("isPrototypeOf")},S_=typeof window!="undefined"&&typeof window.HTMLElement!="undefined"&&typeof document!="undefined";function Er(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(S_&&(t instanceof Blob||t instanceof FileList))&&(n||Xe(t)))if(e=n?[]:{},!n&&!qj(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=Er(t[r]));else return t;return e}var Tu=t=>Array.isArray(t)?t.filter(Boolean):[],He=t=>t===void 0,j=(t,e,n)=>{if(!e||!Xe(t))return n;const r=Tu(e.split(/[,[\].]+?/)).reduce((i,s)=>Lt(i)?i:i[s],t);return He(r)||r===t?He(t[e])?n:t[e]:r};const R1={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},En={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Yn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};K.createContext(null);var Kj=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==En.all&&(e._proxyFormState[o]=!r||En.all),n&&(n[o]=!0),t[o]}});return i},on=t=>Xe(t)&&!Object.keys(t).length,Gj=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return on(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||En.all))},ap=t=>Array.isArray(t)?t:[t];function Qj(t){const e=K.useRef(t);e.current=t,K.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var Vn=t=>typeof t=="string",Yj=(t,e,n,r,i)=>Vn(t)?(r&&e.watch.add(t),j(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),j(n,s))):(r&&(e.watchAll=!0),n),I_=t=>/^\w*$/.test(t),ub=t=>Tu(t.replace(/["|']|\]/g,"").split(/\.|\[/));function ke(t,e,n){let r=-1;const i=I_(e)?[e]:ub(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=t[a];l=Xe(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t}var Xj=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{};const fg=(t,e,n)=>{for(const r of n||Object.keys(t)){const i=j(t,r);if(i){const{_f:s,...o}=i;if(s&&e(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else Xe(o)&&fg(o,e)}}};var A1=t=>({isOnSubmit:!t||t===En.onSubmit,isOnBlur:t===En.onBlur,isOnChange:t===En.onChange,isOnAll:t===En.all,isOnTouch:t===En.onTouched}),P1=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length)))),Jj=(t,e,n)=>{const r=Tu(j(t,n));return ke(r,"root",e[n]),ke(t,n,r),t},to=t=>typeof t=="boolean",k_=t=>t.type==="file",Lr=t=>typeof t=="function",Mh=t=>{if(!S_)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},Ic=t=>Vn(t),x_=t=>t.type==="radio",$h=t=>t instanceof RegExp;const O1={value:!1,isValid:!1},D1={value:!0,isValid:!0};var cb=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!He(t[0].attributes.value)?He(t[0].value)||t[0].value===""?D1:{value:t[0].value,isValid:!0}:D1:O1}return O1};const L1={isValid:!1,value:null};var hb=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,L1):L1;function M1(t,e,n="validate"){if(Ic(t)||Array.isArray(t)&&t.every(Ic)||to(t)&&!t)return{type:n,message:Ic(t)?t:"",ref:e}}var gs=t=>Xe(t)&&!$h(t)?t:{value:t,message:""},$1=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:c,max:h,pattern:d,validate:p,name:y,valueAsNumber:v,mount:f,disabled:m}=t._f,g=j(e,y);if(!f||m)return{};const w=o?o[0]:s,C=q=>{r&&w.reportValidity&&(w.setCustomValidity(to(q)?"":q||""),w.reportValidity())},k={},I=x_(s),L=Cu(s),$=I||L,O=(v||k_(s))&&He(s.value)&&He(g)||Mh(s)&&s.value===""||g===""||Array.isArray(g)&&!g.length,le=Xj.bind(null,y,n,k),Be=(q,U,fe,pe=Yn.maxLength,be=Yn.minLength)=>{const Je=q?U:fe;k[y]={type:q?pe:be,message:Je,ref:s,...le(q?pe:be,Je)}};if(i?!Array.isArray(g)||!g.length:a&&(!$&&(O||Lt(g))||to(g)&&!g||L&&!cb(o).isValid||I&&!hb(o).isValid)){const{value:q,message:U}=Ic(a)?{value:!!a,message:a}:gs(a);if(q&&(k[y]={type:Yn.required,message:U,ref:w,...le(Yn.required,U)},!n))return C(U),k}if(!O&&(!Lt(c)||!Lt(h))){let q,U;const fe=gs(h),pe=gs(c);if(!Lt(g)&&!isNaN(g)){const be=s.valueAsNumber||g&&+g;Lt(fe.value)||(q=be>fe.value),Lt(pe.value)||(U=be<pe.value)}else{const be=s.valueAsDate||new Date(g),Je=gn=>new Date(new Date().toDateString()+" "+gn),Ze=s.type=="time",Ot=s.type=="week";Vn(fe.value)&&g&&(q=Ze?Je(g)>Je(fe.value):Ot?g>fe.value:be>new Date(fe.value)),Vn(pe.value)&&g&&(U=Ze?Je(g)<Je(pe.value):Ot?g<pe.value:be<new Date(pe.value))}if((q||U)&&(Be(!!q,fe.message,pe.message,Yn.max,Yn.min),!n))return C(k[y].message),k}if((l||u)&&!O&&(Vn(g)||i&&Array.isArray(g))){const q=gs(l),U=gs(u),fe=!Lt(q.value)&&g.length>+q.value,pe=!Lt(U.value)&&g.length<+U.value;if((fe||pe)&&(Be(fe,q.message,U.message),!n))return C(k[y].message),k}if(d&&!O&&Vn(g)){const{value:q,message:U}=gs(d);if($h(q)&&!g.match(q)&&(k[y]={type:Yn.pattern,message:U,ref:s,...le(Yn.pattern,U)},!n))return C(U),k}if(p){if(Lr(p)){const q=await p(g,e),U=M1(q,w);if(U&&(k[y]={...U,...le(Yn.validate,U.message)},!n))return C(U.message),k}else if(Xe(p)){let q={};for(const U in p){if(!on(q)&&!n)break;const fe=M1(await p[U](g,e),w,U);fe&&(q={...fe,...le(U,fe.message)},C(fe.message),n&&(k[y]=q))}if(!on(q)&&(k[y]={ref:w,...q},!n))return k}}return C(!0),k};function Zj(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=He(t)?r++:t[e[r++]];return t}function e6(t){for(const e in t)if(t.hasOwnProperty(e)&&!He(t[e]))return!1;return!0}function ut(t,e){const n=Array.isArray(e)?e:I_(e)?[e]:ub(e),r=n.length===1?t:Zj(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(Xe(r)&&on(r)||Array.isArray(r)&&e6(r))&&ut(t,n.slice(0,-1)),t}function lp(){let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}}var Fh=t=>Lt(t)||!lb(t);function Ai(t,e){if(Fh(t)||Fh(e))return t===e;if(As(t)&&As(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(As(s)&&As(o)||Xe(s)&&Xe(o)||Array.isArray(s)&&Array.isArray(o)?!Ai(s,o):s!==o)return!1}}return!0}var db=t=>t.type==="select-multiple",t6=t=>x_(t)||Cu(t),up=t=>Mh(t)&&t.isConnected,fb=t=>{for(const e in t)if(Lr(t[e]))return!0;return!1};function Uh(t,e={}){const n=Array.isArray(t);if(Xe(t)||n)for(const r in t)Array.isArray(t[r])||Xe(t[r])&&!fb(t[r])?(e[r]=Array.isArray(t[r])?[]:{},Uh(t[r],e[r])):Lt(t[r])||(e[r]=!0);return e}function pb(t,e,n){const r=Array.isArray(t);if(Xe(t)||r)for(const i in t)Array.isArray(t[i])||Xe(t[i])&&!fb(t[i])?He(e)||Fh(n[i])?n[i]=Array.isArray(t[i])?Uh(t[i],[]):{...Uh(t[i])}:pb(t[i],Lt(e)?{}:e[i],n[i]):n[i]=!Ai(t[i],e[i]);return n}var cp=(t,e)=>pb(t,e,Uh(e)),mb=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>He(t)?t:e?t===""?NaN:t&&+t:n&&Vn(t)?new Date(t):r?r(t):t;function hp(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return k_(e)?e.files:x_(e)?hb(t.refs).value:db(e)?[...e.selectedOptions].map(({value:n})=>n):Cu(e)?cb(t.refs).value:mb(He(e.value)?t.ref.value:e.value,t)}var n6=(t,e,n,r)=>{const i={};for(const s of t){const o=j(e,s);o&&ke(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},pa=t=>He(t)?t:$h(t)?t.source:Xe(t)?$h(t.value)?t.value.source:t.value:t,r6=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function F1(t,e,n){const r=j(t,n);if(r||I_(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=j(e,s),a=j(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var i6=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,s6=(t,e)=>!Tu(j(t,e)).length&&ut(t,e);const o6={mode:En.onSubmit,reValidateMode:En.onChange,shouldFocusError:!0};function a6(t={},e){let n={...o6,...t},r={submitCount:0,isDirty:!1,isLoading:Lr(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},s=Xe(n.defaultValues)||Xe(n.values)?Er(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:Er(s),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const h={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={values:lp(),array:lp(),state:lp()},p=t.resetOptions&&t.resetOptions.keepDirtyValues,y=A1(n.mode),v=A1(n.reValidateMode),f=n.criteriaMode===En.all,m=E=>T=>{clearTimeout(c),c=setTimeout(E,T)},g=async E=>{if(h.isValid||E){const T=n.resolver?on((await O()).errors):await Be(i,!0);T!==r.isValid&&d.state.next({isValid:T})}},w=E=>h.isValidating&&d.state.next({isValidating:E}),C=(E,T=[],S,z,M=!0,P=!0)=>{if(z&&S){if(a.action=!0,P&&Array.isArray(j(i,E))){const W=S(j(i,E),z.argA,z.argB);M&&ke(i,E,W)}if(P&&Array.isArray(j(r.errors,E))){const W=S(j(r.errors,E),z.argA,z.argB);M&&ke(r.errors,E,W),s6(r.errors,E)}if(h.touchedFields&&P&&Array.isArray(j(r.touchedFields,E))){const W=S(j(r.touchedFields,E),z.argA,z.argB);M&&ke(r.touchedFields,E,W)}h.dirtyFields&&(r.dirtyFields=cp(s,o)),d.state.next({name:E,isDirty:U(E,T),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else ke(o,E,T)},k=(E,T)=>{ke(r.errors,E,T),d.state.next({errors:r.errors})},I=(E,T,S,z)=>{const M=j(i,E);if(M){const P=j(o,E,He(S)?j(s,E):S);He(P)||z&&z.defaultChecked||T?ke(o,E,T?P:hp(M._f)):be(E,P),a.mount&&g()}},L=(E,T,S,z,M)=>{let P=!1,W=!1;const Ae={name:E};if(!S||z){h.isDirty&&(W=r.isDirty,r.isDirty=Ae.isDirty=U(),P=W!==Ae.isDirty);const Fe=Ai(j(s,E),T);W=j(r.dirtyFields,E),Fe?ut(r.dirtyFields,E):ke(r.dirtyFields,E,!0),Ae.dirtyFields=r.dirtyFields,P=P||h.dirtyFields&&W!==!Fe}if(S){const Fe=j(r.touchedFields,E);Fe||(ke(r.touchedFields,E,S),Ae.touchedFields=r.touchedFields,P=P||h.touchedFields&&Fe!==S)}return P&&M&&d.state.next(Ae),P?Ae:{}},$=(E,T,S,z)=>{const M=j(r.errors,E),P=h.isValid&&to(T)&&r.isValid!==T;if(t.delayError&&S?(u=m(()=>k(E,S)),u(t.delayError)):(clearTimeout(c),u=null,S?ke(r.errors,E,S):ut(r.errors,E)),(S?!Ai(M,S):M)||!on(z)||P){const W={...z,...P&&to(T)?{isValid:T}:{},errors:r.errors,name:E};r={...r,...W},d.state.next(W)}w(!1)},O=async E=>n.resolver(o,n.context,n6(E||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),le=async E=>{const{errors:T}=await O();if(E)for(const S of E){const z=j(T,S);z?ke(r.errors,S,z):ut(r.errors,S)}else r.errors=T;return T},Be=async(E,T,S={valid:!0})=>{for(const z in E){const M=E[z];if(M){const{_f:P,...W}=M;if(P){const Ae=l.array.has(P.name),Fe=await $1(M,o,f,n.shouldUseNativeValidation&&!T,Ae);if(Fe[P.name]&&(S.valid=!1,T))break;!T&&(j(Fe,P.name)?Ae?Jj(r.errors,Fe,P.name):ke(r.errors,P.name,Fe[P.name]):ut(r.errors,P.name))}W&&await Be(W,T,S)}}return S.valid},q=()=>{for(const E of l.unMount){const T=j(i,E);T&&(T._f.refs?T._f.refs.every(S=>!up(S)):!up(T._f.ref))&&Xt(E)}l.unMount=new Set},U=(E,T)=>(E&&T&&ke(o,E,T),!Ai(b(),s)),fe=(E,T,S)=>Yj(E,l,{...a.mount?o:He(T)?s:Vn(E)?{[E]:T}:T},S,T),pe=E=>Tu(j(a.mount?o:s,E,t.shouldUnregister?j(s,E,[]):[])),be=(E,T,S={})=>{const z=j(i,E);let M=T;if(z){const P=z._f;P&&(!P.disabled&&ke(o,E,mb(T,P)),M=Mh(P.ref)&&Lt(T)?"":T,db(P.ref)?[...P.ref.options].forEach(W=>W.selected=M.includes(W.value)):P.refs?Cu(P.ref)?P.refs.length>1?P.refs.forEach(W=>(!W.defaultChecked||!W.disabled)&&(W.checked=Array.isArray(M)?!!M.find(Ae=>Ae===W.value):M===W.value)):P.refs[0]&&(P.refs[0].checked=!!M):P.refs.forEach(W=>W.checked=W.value===M):k_(P.ref)?P.ref.value="":(P.ref.value=M,P.ref.type||d.values.next({name:E,values:{...o}})))}(S.shouldDirty||S.shouldTouch)&&L(E,M,S.shouldTouch,S.shouldDirty,!0),S.shouldValidate&&gn(E)},Je=(E,T,S)=>{for(const z in T){const M=T[z],P=`${E}.${z}`,W=j(i,P);(l.array.has(E)||!Fh(M)||W&&!W._f)&&!As(M)?Je(P,M,S):be(P,M,S)}},Ze=(E,T,S={})=>{const z=j(i,E),M=l.array.has(E),P=Er(T);ke(o,E,P),M?(d.array.next({name:E,values:{...o}}),(h.isDirty||h.dirtyFields)&&S.shouldDirty&&d.state.next({name:E,dirtyFields:cp(s,o),isDirty:U(E,P)})):z&&!z._f&&!Lt(P)?Je(E,P,S):be(E,P,S),P1(E,l)&&d.state.next({...r}),d.values.next({name:E,values:{...o}}),!a.mount&&e()},Ot=async E=>{const T=E.target;let S=T.name,z=!0;const M=j(i,S),P=()=>T.type?hp(M._f):zj(E);if(M){let W,Ae;const Fe=P(),ds=E.type===R1.BLUR||E.type===R1.FOCUS_OUT,Bb=!r6(M._f)&&!n.resolver&&!j(r.errors,S)&&!M._f.deps||i6(ds,j(r.touchedFields,S),r.isSubmitted,v,y),Gd=P1(S,l,ds);ke(o,S,Fe),ds?(M._f.onBlur&&M._f.onBlur(E),u&&u(0)):M._f.onChange&&M._f.onChange(E);const Qd=L(S,Fe,ds,!1),jb=!on(Qd)||Gd;if(!ds&&d.values.next({name:S,type:E.type,values:{...o}}),Bb)return h.isValid&&g(),jb&&d.state.next({name:S,...Gd?{}:Qd});if(!ds&&Gd&&d.state.next({...r}),w(!0),n.resolver){const{errors:O_}=await O([S]),zb=F1(r.errors,i,S),D_=F1(O_,i,zb.name||S);W=D_.error,S=D_.name,Ae=on(O_)}else W=(await $1(M,o,f,n.shouldUseNativeValidation))[S],z=isNaN(Fe)||Fe===j(o,S,Fe),z&&(W?Ae=!1:h.isValid&&(Ae=await Be(i,!0)));z&&(M._f.deps&&gn(M._f.deps),$(S,Ae,W,Qd))}},gn=async(E,T={})=>{let S,z;const M=ap(E);if(w(!0),n.resolver){const P=await le(He(E)?E:M);S=on(P),z=E?!M.some(W=>j(P,W)):S}else E?(z=(await Promise.all(M.map(async P=>{const W=j(i,P);return await Be(W&&W._f?{[P]:W}:W)}))).every(Boolean),!(!z&&!r.isValid)&&g()):z=S=await Be(i);return d.state.next({...!Vn(E)||h.isValid&&S!==r.isValid?{}:{name:E},...n.resolver||!E?{isValid:S}:{},errors:r.errors,isValidating:!1}),T.shouldFocus&&!z&&fg(i,P=>P&&j(r.errors,P),E?M:l.mount),z},b=E=>{const T={...s,...a.mount?o:{}};return He(E)?T:Vn(E)?j(T,E):E.map(S=>j(T,S))},Q=(E,T)=>({invalid:!!j((T||r).errors,E),isDirty:!!j((T||r).dirtyFields,E),isTouched:!!j((T||r).touchedFields,E),error:j((T||r).errors,E)}),ne=E=>{E&&ap(E).forEach(T=>ut(r.errors,T)),d.state.next({errors:E?r.errors:{}})},_e=(E,T,S)=>{const z=(j(i,E,{_f:{}})._f||{}).ref;ke(r.errors,E,{...T,ref:z}),d.state.next({name:E,errors:r.errors,isValid:!1}),S&&S.shouldFocus&&z&&z.focus&&z.focus()},$e=(E,T)=>Lr(E)?d.values.subscribe({next:S=>E(fe(void 0,T),S)}):fe(E,T,!0),Xt=(E,T={})=>{for(const S of E?ap(E):l.mount)l.mount.delete(S),l.array.delete(S),T.keepValue||(ut(i,S),ut(o,S)),!T.keepError&&ut(r.errors,S),!T.keepDirty&&ut(r.dirtyFields,S),!T.keepTouched&&ut(r.touchedFields,S),!n.shouldUnregister&&!T.keepDefaultValue&&ut(s,S);d.values.next({values:{...o}}),d.state.next({...r,...T.keepDirty?{isDirty:U()}:{}}),!T.keepIsValid&&g()},Bt=(E,T={})=>{let S=j(i,E);const z=to(T.disabled);return ke(i,E,{...S||{},_f:{...S&&S._f?S._f:{ref:{name:E}},name:E,mount:!0,...T}}),l.mount.add(E),S?z&&ke(o,E,T.disabled?void 0:j(o,E,hp(S._f))):I(E,!0,T.value),{...z?{disabled:T.disabled}:{},...n.progressive?{required:!!T.required,min:pa(T.min),max:pa(T.max),minLength:pa(T.minLength),maxLength:pa(T.maxLength),pattern:pa(T.pattern)}:{},name:E,onChange:Ot,onBlur:Ot,ref:M=>{if(M){Bt(E,T),S=j(i,E);const P=He(M.value)&&M.querySelectorAll&&M.querySelectorAll("input,select,textarea")[0]||M,W=t6(P),Ae=S._f.refs||[];if(W?Ae.find(Fe=>Fe===P):P===S._f.ref)return;ke(i,E,{_f:{...S._f,...W?{refs:[...Ae.filter(up),P,...Array.isArray(j(s,E))?[{}]:[]],ref:{type:P.type,name:E}}:{ref:P}}}),I(E,!1,void 0,P)}else S=j(i,E,{}),S._f&&(S._f.mount=!1),(n.shouldUnregister||T.shouldUnregister)&&!(Wj(l.array,E)&&a.action)&&l.unMount.add(E)}}},Pn=()=>n.shouldFocusError&&fg(i,E=>E&&j(r.errors,E),l.mount),ye=(E,T)=>async S=>{S&&(S.preventDefault&&S.preventDefault(),S.persist&&S.persist());let z=Er(o);if(d.state.next({isSubmitting:!0}),n.resolver){const{errors:M,values:P}=await O();r.errors=M,z=P}else await Be(i);ut(r.errors,"root"),on(r.errors)?(d.state.next({errors:{}}),await E(z,S)):(T&&await T({...r.errors},S),Pn(),setTimeout(Pn)),d.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:on(r.errors),submitCount:r.submitCount+1,errors:r.errors})},yn=(E,T={})=>{j(i,E)&&(He(T.defaultValue)?Ze(E,j(s,E)):(Ze(E,T.defaultValue),ke(s,E,T.defaultValue)),T.keepTouched||ut(r.touchedFields,E),T.keepDirty||(ut(r.dirtyFields,E),r.isDirty=T.defaultValue?U(E,j(s,E)):U()),T.keepError||(ut(r.errors,E),h.isValid&&g()),d.state.next({...r}))},Dt=(E,T={})=>{const S=E||s,z=Er(S),M=E&&!on(E)?z:s;if(T.keepDefaultValues||(s=S),!T.keepValues){if(T.keepDirtyValues||p)for(const P of l.mount)j(r.dirtyFields,P)?ke(M,P,j(o,P)):Ze(P,j(M,P));else{if(S_&&He(E))for(const P of l.mount){const W=j(i,P);if(W&&W._f){const Ae=Array.isArray(W._f.refs)?W._f.refs[0]:W._f.ref;if(Mh(Ae)){const Fe=Ae.closest("form");if(Fe){Fe.reset();break}}}}i={}}o=t.shouldUnregister?T.keepDefaultValues?Er(s):{}:Er(M),d.array.next({values:{...M}}),d.values.next({values:{...M}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&e(),a.mount=!h.isValid||!!T.keepIsValid,a.watch=!!t.shouldUnregister,d.state.next({submitCount:T.keepSubmitCount?r.submitCount:0,isDirty:T.keepDirty?r.isDirty:!!(T.keepDefaultValues&&!Ai(E,s)),isSubmitted:T.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:T.keepDirtyValues?r.dirtyFields:T.keepDefaultValues&&E?cp(s,E):{},touchedFields:T.keepTouched?r.touchedFields:{},errors:T.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},di=(E,T)=>Dt(Lr(E)?E(o):E,T);return{control:{register:Bt,unregister:Xt,getFieldState:Q,handleSubmit:ye,setError:_e,_executeSchema:O,_getWatch:fe,_getDirty:U,_updateValid:g,_removeUnmounted:q,_updateFieldArray:C,_getFieldArray:pe,_reset:Dt,_resetDefaultValues:()=>Lr(n.defaultValues)&&n.defaultValues().then(E=>{di(E,n.resetOptions),d.state.next({isLoading:!1})}),_updateFormState:E=>{r={...r,...E}},_subjects:d,_proxyFormState:h,get _fields(){return i},get _formValues(){return o},get _state(){return a},set _state(E){a=E},get _defaultValues(){return s},get _names(){return l},set _names(E){l=E},get _formState(){return r},set _formState(E){r=E},get _options(){return n},set _options(E){n={...n,...E}}},trigger:gn,register:Bt,handleSubmit:ye,watch:$e,setValue:Ze,getValues:b,reset:di,resetField:yn,clearErrors:ne,unregister:Xt,setError:_e,setFocus:(E,T={})=>{const S=j(i,E),z=S&&S._f;if(z){const M=z.refs?z.refs[0]:z.ref;M.focus&&(M.focus(),T.shouldSelect&&M.select())}},getFieldState:Q}}function l6(t={}){const e=K.useRef(),[n,r]=K.useState({isDirty:!1,isValidating:!1,isLoading:Lr(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:Lr(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...a6(t,()=>r(s=>({...s}))),formState:n});const i=e.current.control;return i._options=t,Qj({subject:i._subjects.state,next:s=>{Gj(s,i._proxyFormState,i._updateFormState,!0)&&r({...i._formState})}}),K.useEffect(()=>{t.values&&!Ai(t.values,i._defaultValues)?i._reset(t.values,i._options.resetOptions):i._resetDefaultValues()},[t.values,i]),K.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),e.current.formState=Kj(n,i),e.current}var jd={exports:{}},Su={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u6=_.exports,gb=60103;Su.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var U1=Symbol.for;gb=U1("react.element"),Su.Fragment=U1("react.fragment")}var c6=u6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h6=Object.prototype.hasOwnProperty,d6={key:!0,ref:!0,__self:!0,__source:!0};function yb(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)h6.call(e,r)&&!d6.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:gb,type:t,key:s,ref:o,props:i,_owner:c6.current}}Su.jsx=yb;Su.jsxs=yb;jd.exports=Su;const V=jd.exports.jsx,Tt=jd.exports.jsxs,f6=jd.exports.Fragment,V1=({type:t="text",placeholder:e,register:n,label:r,errorMessage:i,rules:s})=>Tt("div",{className:"relative",children:[Tt("label",{className:"flex flex-col text-sm font-medium focus-within:text-primary",children:[r,V("input",{className:"mt-1 rounded-xl border-2 border-solid border-gray-400 px-3 py-4 text-black outline-none placeholder:text-gray-400 focus:border-primary",type:t,placeholder:e,...n&&n(r.toLowerCase(),s)})]}),V("p",{className:"absolute -bottom-5 text-sm font-semibold text-red-500",children:i&&`* ${i}`})]}),p6="_container_1ko5j_1";var B1={container:p6,"lds-ring":"_lds-ring_1ko5j_15"};const vb=({loading:t})=>t?V("div",{className:B1.container,children:Tt("div",{className:B1["lds-ring"],children:[V("div",{}),V("div",{}),V("div",{}),V("div",{})]})}):V("div",{});var m6=Object.defineProperty,g6=(t,e,n)=>e in t?m6(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,dp=(t,e,n)=>(g6(t,typeof e!="symbol"?e+"":e,n),n);class y6{constructor(){dp(this,"current",this.detect()),dp(this,"handoffState","pending"),dp(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}}let lr=new y6,Rn=(t,e)=>{lr.isServer?_.exports.useEffect(t,e):_.exports.useLayoutEffect(t,e)};function ur(t){let e=_.exports.useRef(t);return Rn(()=>{e.current=t},[t]),e}function zd(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e}))}function Ko(){let t=[],e={addEventListener(n,r,i,s){return n.addEventListener(r,i,s),e.add(()=>n.removeEventListener(r,i,s))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return e.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return e.requestAnimationFrame(()=>e.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return e.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return zd(()=>{r.current&&n[0]()}),e.add(()=>{r.current=!1})},style(n,r,i){let s=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:i}),this.add(()=>{Object.assign(n.style,{[r]:s})})},group(n){let r=Ko();return n(r),this.add(()=>r.dispose())},add(n){return t.push(n),()=>{let r=t.indexOf(n);if(r>=0)for(let i of t.splice(r,1))i()}},dispose(){for(let n of t.splice(0))n()}};return e}function N_(){let[t]=_.exports.useState(Ko);return _.exports.useEffect(()=>()=>t.dispose(),[t]),t}let xe=function(t){let e=ur(t);return K.useCallback((...n)=>e.current(...n),[e])};function Go(){let[t,e]=_.exports.useState(lr.isHandoffComplete);return t&&lr.isHandoffComplete===!1&&e(!1),_.exports.useEffect(()=>{t!==!0&&e(!0)},[t]),_.exports.useEffect(()=>lr.handoff(),[]),t}var j1;let Qo=(j1=K.useId)!=null?j1:function(){let t=Go(),[e,n]=K.useState(t?()=>lr.nextId():null);return Rn(()=>{e===null&&n(lr.nextId())},[e]),e!=null?""+e:void 0};function It(t,e,...n){if(t in e){let i=e[t];return typeof i=="function"?i(...n):i}let r=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,It),r}function _b(t){return lr.isServer?null:t instanceof Node?t.ownerDocument:t!=null&&t.hasOwnProperty("current")&&t.current instanceof Node?t.current.ownerDocument:document}let pg=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var wi=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(wi||{}),wb=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(wb||{}),v6=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(v6||{});function _6(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(pg)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Eb=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(Eb||{});function w6(t,e=0){var n;return t===((n=_b(t))==null?void 0:n.body)?!1:It(e,{[0](){return t.matches(pg)},[1](){let r=t;for(;r!==null;){if(r.matches(pg))return!0;r=r.parentElement}return!1}})}var E6=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(E6||{});typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Ui(t){t==null||t.focus({preventScroll:!0})}let C6=["textarea","input"].join(",");function T6(t){var e,n;return(n=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,C6))!=null?n:!1}function S6(t,e=n=>n){return t.slice().sort((n,r)=>{let i=e(n),s=e(r);if(i===null||s===null)return 0;let o=i.compareDocumentPosition(s);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function kc(t,e,{sorted:n=!0,relativeTo:r=null,skipElements:i=[]}={}){let s=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t.ownerDocument,o=Array.isArray(t)?n?S6(t):t:_6(t);i.length>0&&o.length>1&&(o=o.filter(p=>!i.includes(p))),r=r!=null?r:s.activeElement;let a=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,o.indexOf(r))-1;if(e&4)return Math.max(0,o.indexOf(r))+1;if(e&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},c=0,h=o.length,d;do{if(c>=h||c+h<=0)return 0;let p=l+c;if(e&16)p=(p+h)%h;else{if(p<0)return 3;if(p>=h)return 1}d=o[p],d==null||d.focus(u),c+=a}while(d!==s.activeElement);return e&6&&T6(d)&&d.select(),2}function z1(t,e,n){let r=ur(e);_.exports.useEffect(()=>{function i(s){r.current(s)}return document.addEventListener(t,i,n),()=>document.removeEventListener(t,i,n)},[t,n])}function Cb(t,e,n){let r=ur(e);_.exports.useEffect(()=>{function i(s){r.current(s)}return window.addEventListener(t,i,n),()=>window.removeEventListener(t,i,n)},[t,n])}function I6(t,e,n=!0){let r=_.exports.useRef(!1);_.exports.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function i(o,a){if(!r.current||o.defaultPrevented)return;let l=a(o);if(l===null||!l.getRootNode().contains(l))return;let u=function c(h){return typeof h=="function"?c(h()):Array.isArray(h)||h instanceof Set?h:[h]}(t);for(let c of u){if(c===null)continue;let h=c instanceof HTMLElement?c:c.current;if(h!=null&&h.contains(l)||o.composed&&o.composedPath().includes(h))return}return!w6(l,Eb.Loose)&&l.tabIndex!==-1&&o.preventDefault(),e(o,l)}let s=_.exports.useRef(null);z1("mousedown",o=>{var a,l;r.current&&(s.current=((l=(a=o.composedPath)==null?void 0:a.call(o))==null?void 0:l[0])||o.target)},!0),z1("click",o=>{s.current&&(i(o,()=>s.current),s.current=null)},!0),Cb("blur",o=>i(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}let Tb=Symbol();function k6(t,e=!0){return Object.assign(t,{[Tb]:e})}function An(...t){let e=_.exports.useRef(t);_.exports.useEffect(()=>{e.current=t},[t]);let n=xe(r=>{for(let i of e.current)i!=null&&(typeof i=="function"?i(r):i.current=r)});return t.every(r=>r==null||(r==null?void 0:r[Tb]))?void 0:n}function mg(...t){return t.filter(Boolean).join(" ")}var Vh=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Vh||{}),sr=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(sr||{});function mn({ourProps:t,theirProps:e,slot:n,defaultTag:r,features:i,visible:s=!0,name:o}){let a=Sb(e,t);if(s)return ec(a,n,r,o);let l=i!=null?i:0;if(l&2){let{static:u=!1,...c}=a;if(u)return ec(c,n,r,o)}if(l&1){let{unmount:u=!0,...c}=a;return It(u?0:1,{[0](){return null},[1](){return ec({...c,hidden:!0,style:{display:"none"}},n,r,o)}})}return ec(a,n,r,o)}function ec(t,e={},n,r){let{as:i=n,children:s,refName:o="ref",...a}=fp(t,["unmount","static"]),l=t.ref!==void 0?{[o]:t.ref}:{},u=typeof s=="function"?s(e):s;"className"in a&&a.className&&typeof a.className=="function"&&(a.className=a.className(e));let c={};if(e){let h=!1,d=[];for(let[p,y]of Object.entries(e))typeof y=="boolean"&&(h=!0),y===!0&&d.push(p);h&&(c["data-headlessui-state"]=d.join(" "))}if(i===_.exports.Fragment&&Object.keys(H1(a)).length>0){if(!_.exports.isValidElement(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(y=>`  - ${y}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(y=>`  - ${y}`).join(`
`)].join(`
`));let h=u.props,d=typeof(h==null?void 0:h.className)=="function"?(...y)=>mg(h==null?void 0:h.className(...y),a.className):mg(h==null?void 0:h.className,a.className),p=d?{className:d}:{};return _.exports.cloneElement(u,Object.assign({},Sb(u.props,H1(fp(a,["ref"]))),c,l,x6(u.ref,l.ref),p))}return _.exports.createElement(i,Object.assign({},fp(a,["ref"]),i!==_.exports.Fragment&&l,i!==_.exports.Fragment&&c),u)}function x6(...t){return{ref:t.every(e=>e==null)?void 0:e=>{for(let n of t)n!=null&&(typeof n=="function"?n(e):n.current=e)}}}function Sb(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let r of t)for(let i in r)i.startsWith("on")&&typeof r[i]=="function"?(n[i]!=null||(n[i]=[]),n[i].push(r[i])):e[i]=r[i];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(e,{[r](i,...s){let o=n[r];for(let a of o){if((i instanceof Event||(i==null?void 0:i.nativeEvent)instanceof Event)&&i.defaultPrevented)return;a(i,...s)}}});return e}function sn(t){var e;return Object.assign(_.exports.forwardRef(t),{displayName:(e=t.displayName)!=null?e:t.name})}function H1(t){let e=Object.assign({},t);for(let n in e)e[n]===void 0&&delete e[n];return e}function fp(t,e=[]){let n=Object.assign({},t);for(let r of e)r in n&&delete n[r];return n}function N6(t){let e=t.parentElement,n=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(n=e),e=e.parentElement;let r=(e==null?void 0:e.getAttribute("disabled"))==="";return r&&b6(n)?!1:r}function b6(t){if(!t)return!1;let e=t.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}let R6="div";var Bh=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(Bh||{});function A6(t,e){let{features:n=1,...r}=t,i={ref:e,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return mn({ourProps:i,theirProps:r,slot:{},defaultTag:R6,name:"Hidden"})}let gg=sn(A6),b_=_.exports.createContext(null);b_.displayName="OpenClosedContext";var Jt=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(Jt||{});function R_(){return _.exports.useContext(b_)}function P6({value:t,children:e}){return K.createElement(b_.Provider,{value:t},e)}var Ib=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(Ib||{});function A_(t,e){let n=_.exports.useRef([]),r=xe(t);_.exports.useEffect(()=>{let i=[...n.current];for(let[s,o]of e.entries())if(n.current[s]!==o){let a=r(e,i);return n.current=e,a}},[r,...e])}function O6(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}var ba=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(ba||{});function D6(){let t=_.exports.useRef(0);return Cb("keydown",e=>{e.key==="Tab"&&(t.current=e.shiftKey?1:0)},!0),t}function Iu(){let t=_.exports.useRef(!1);return Rn(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function ku(...t){return _.exports.useMemo(()=>_b(...t),[...t])}function kb(t,e,n,r){let i=ur(n);_.exports.useEffect(()=>{t=t!=null?t:window;function s(o){i.current(o)}return t.addEventListener(e,s,r),()=>t.removeEventListener(e,s,r)},[t,e,r])}function L6(t){function e(){document.readyState!=="loading"&&(t(),document.removeEventListener("DOMContentLoaded",e))}typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("DOMContentLoaded",e),e())}function xb(t){let e=xe(t),n=_.exports.useRef(!1);_.exports.useEffect(()=>(n.current=!1,()=>{n.current=!0,zd(()=>{n.current&&e()})}),[e])}function Nb(t){if(!t)return new Set;if(typeof t=="function")return new Set(t());let e=new Set;for(let n of t.current)n.current instanceof HTMLElement&&e.add(n.current);return e}let M6="div";var bb=(t=>(t[t.None=1]="None",t[t.InitialFocus=2]="InitialFocus",t[t.TabLock=4]="TabLock",t[t.FocusLock=8]="FocusLock",t[t.RestoreFocus=16]="RestoreFocus",t[t.All=30]="All",t))(bb||{});function $6(t,e){let n=_.exports.useRef(null),r=An(n,e),{initialFocus:i,containers:s,features:o=30,...a}=t;Go()||(o=1);let l=ku(n);V6({ownerDocument:l},Boolean(o&16));let u=B6({ownerDocument:l,container:n,initialFocus:i},Boolean(o&2));j6({ownerDocument:l,container:n,containers:s,previousActiveElement:u},Boolean(o&8));let c=D6(),h=xe(v=>{let f=n.current;!f||(m=>m())(()=>{It(c.current,{[ba.Forwards]:()=>{kc(f,wi.First,{skipElements:[v.relatedTarget]})},[ba.Backwards]:()=>{kc(f,wi.Last,{skipElements:[v.relatedTarget]})}})})}),d=N_(),p=_.exports.useRef(!1),y={ref:r,onKeyDown(v){v.key=="Tab"&&(p.current=!0,d.requestAnimationFrame(()=>{p.current=!1}))},onBlur(v){let f=Nb(s);n.current instanceof HTMLElement&&f.add(n.current);let m=v.relatedTarget;m instanceof HTMLElement&&m.dataset.headlessuiFocusGuard!=="true"&&(Rb(f,m)||(p.current?kc(n.current,It(c.current,{[ba.Forwards]:()=>wi.Next,[ba.Backwards]:()=>wi.Previous})|wi.WrapAround,{relativeTo:v.target}):v.target instanceof HTMLElement&&Ui(v.target)))}};return K.createElement(K.Fragment,null,Boolean(o&4)&&K.createElement(gg,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:h,features:Bh.Focusable}),mn({ourProps:y,theirProps:a,defaultTag:M6,name:"FocusTrap"}),Boolean(o&4)&&K.createElement(gg,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:h,features:Bh.Focusable}))}let F6=sn($6),ma=Object.assign(F6,{features:bb}),Nr=[];L6(()=>{function t(e){e.target instanceof HTMLElement&&e.target!==document.body&&Nr[0]!==e.target&&(Nr.unshift(e.target),Nr=Nr.filter(n=>n!=null&&n.isConnected),Nr.splice(10))}window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})});function U6(t=!0){let e=_.exports.useRef(Nr.slice());return A_(([n],[r])=>{r===!0&&n===!1&&zd(()=>{e.current.splice(0)}),r===!1&&n===!0&&(e.current=Nr.slice())},[t,Nr,e]),xe(()=>{var n;return(n=e.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function V6({ownerDocument:t},e){let n=U6(e);A_(()=>{e||(t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&Ui(n())},[e]),xb(()=>{e&&Ui(n())})}function B6({ownerDocument:t,container:e,initialFocus:n},r){let i=_.exports.useRef(null),s=Iu();return A_(()=>{if(!r)return;let o=e.current;o&&zd(()=>{if(!s.current)return;let a=t==null?void 0:t.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===a){i.current=a;return}}else if(o.contains(a)){i.current=a;return}n!=null&&n.current?Ui(n.current):kc(o,wi.First)===wb.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),i.current=t==null?void 0:t.activeElement})},[r]),i}function j6({ownerDocument:t,container:e,containers:n,previousActiveElement:r},i){let s=Iu();kb(t==null?void 0:t.defaultView,"focus",o=>{if(!i||!s.current)return;let a=Nb(n);e.current instanceof HTMLElement&&a.add(e.current);let l=r.current;if(!l)return;let u=o.target;u&&u instanceof HTMLElement?Rb(a,u)?(r.current=u,Ui(u)):(o.preventDefault(),o.stopPropagation(),Ui(l)):Ui(r.current)},!0)}function Rb(t,e){for(let n of t)if(n.contains(e))return!0;return!1}let Ab=_.exports.createContext(!1);function z6(){return _.exports.useContext(Ab)}function yg(t){return K.createElement(Ab.Provider,{value:t.force},t.children)}function H6(t){let e=z6(),n=_.exports.useContext(Pb),r=ku(t),[i,s]=_.exports.useState(()=>{if(!e&&n!==null||lr.isServer)return null;let o=r==null?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(r===null)return null;let a=r.createElement("div");return a.setAttribute("id","headlessui-portal-root"),r.body.appendChild(a)});return _.exports.useEffect(()=>{i!==null&&(r!=null&&r.body.contains(i)||r==null||r.body.appendChild(i))},[i,r]),_.exports.useEffect(()=>{e||n!==null&&s(n.current)},[n,s,e]),i}let W6=_.exports.Fragment;function q6(t,e){let n=t,r=_.exports.useRef(null),i=An(k6(c=>{r.current=c}),e),s=ku(r),o=H6(r),[a]=_.exports.useState(()=>{var c;return lr.isServer?null:(c=s==null?void 0:s.createElement("div"))!=null?c:null}),l=_.exports.useContext(vg),u=Go();return Rn(()=>{!o||!a||o.contains(a)||(a.setAttribute("data-headlessui-portal",""),o.appendChild(a))},[o,a]),Rn(()=>{if(a&&l)return l.register(a)},[l,a]),xb(()=>{var c;!o||!a||(a instanceof Node&&o.contains(a)&&o.removeChild(a),o.childNodes.length<=0&&((c=o.parentElement)==null||c.removeChild(o)))}),u?!o||!a?null:xg.exports.createPortal(mn({ourProps:{ref:i},theirProps:n,defaultTag:W6,name:"Portal"}),a):null}let K6=_.exports.Fragment,Pb=_.exports.createContext(null);function G6(t,e){let{target:n,...r}=t,i={ref:An(e)};return K.createElement(Pb.Provider,{value:n},mn({ourProps:i,theirProps:r,defaultTag:K6,name:"Popover.Group"}))}let vg=_.exports.createContext(null);function Q6(){let t=_.exports.useContext(vg),e=_.exports.useRef([]),n=xe(s=>(e.current.push(s),t&&t.register(s),()=>r(s))),r=xe(s=>{let o=e.current.indexOf(s);o!==-1&&e.current.splice(o,1),t&&t.unregister(s)}),i=_.exports.useMemo(()=>({register:n,unregister:r,portals:e}),[n,r,e]);return[e,_.exports.useMemo(()=>function({children:s}){return K.createElement(vg.Provider,{value:i},s)},[i])]}let Y6=sn(q6),X6=sn(G6),_g=Object.assign(Y6,{Group:X6}),Ob=_.exports.createContext(null);function Db(){let t=_.exports.useContext(Ob);if(t===null){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,Db),e}return t}function J6(){let[t,e]=_.exports.useState([]);return[t.length>0?t.join(" "):void 0,_.exports.useMemo(()=>function(n){let r=xe(s=>(e(o=>[...o,s]),()=>e(o=>{let a=o.slice(),l=a.indexOf(s);return l!==-1&&a.splice(l,1),a}))),i=_.exports.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return K.createElement(Ob.Provider,{value:i},n.children)},[e])]}let Z6="p";function ez(t,e){let n=Qo(),{id:r=`headlessui-description-${n}`,...i}=t,s=Db(),o=An(e);Rn(()=>s.register(r),[r,s.register]);let a={ref:o,...s.props,id:r};return mn({ourProps:a,theirProps:i,slot:s.slot||{},defaultTag:Z6,name:s.name||"Description"})}let tz=sn(ez),nz=Object.assign(tz,{}),P_=_.exports.createContext(()=>{});P_.displayName="StackContext";var wg=(t=>(t[t.Add=0]="Add",t[t.Remove=1]="Remove",t))(wg||{});function rz(){return _.exports.useContext(P_)}function iz({children:t,onUpdate:e,type:n,element:r,enabled:i}){let s=rz(),o=xe((...a)=>{e==null||e(...a),s(...a)});return Rn(()=>{let a=i===void 0||i===!0;return a&&o(0,n,r),()=>{a&&o(1,n,r)}},[o,n,r,i]),K.createElement(P_.Provider,{value:o},t)}function sz(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const oz=typeof Object.is=="function"?Object.is:sz,{useState:az,useEffect:lz,useLayoutEffect:uz,useDebugValue:cz}=wp;function hz(t,e,n){const r=e(),[{inst:i},s]=az({inst:{value:r,getSnapshot:e}});return uz(()=>{i.value=r,i.getSnapshot=e,pp(i)&&s({inst:i})},[t,r,e]),lz(()=>(pp(i)&&s({inst:i}),t(()=>{pp(i)&&s({inst:i})})),[t]),cz(r),r}function pp(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!oz(n,r)}catch{return!0}}function dz(t,e,n){return e()}const fz=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",pz=!fz,mz=pz?dz:hz,gz="useSyncExternalStore"in wp?(t=>t.useSyncExternalStore)(wp):mz;function yz(t){return gz(t.subscribe,t.getSnapshot,t.getSnapshot)}function vz(t,e){let n=t(),r=new Set;return{getSnapshot(){return n},subscribe(i){return r.add(i),()=>r.delete(i)},dispatch(i,...s){let o=e[i].call(n,...s);o&&(n=o,r.forEach(a=>a()))}}}function _z(){let t;return{before({doc:e}){var n;let r=e.documentElement;t=((n=e.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:e,d:n}){let r=e.documentElement,i=r.clientWidth-r.offsetWidth,s=t-i;n.style(r,"paddingRight",`${s}px`)}}}function wz(){if(!O6())return{};let t;return{before(){t=window.pageYOffset},after({doc:e,d:n,meta:r}){function i(o){return r.containers.flatMap(a=>a()).some(a=>a.contains(o))}n.style(e.body,"marginTop",`-${t}px`),window.scrollTo(0,0);let s=null;n.addEventListener(e,"click",o=>{if(o.target instanceof HTMLElement)try{let a=o.target.closest("a");if(!a)return;let{hash:l}=new URL(a.href),u=e.querySelector(l);u&&!i(u)&&(s=u)}catch{}},!0),n.addEventListener(e,"touchmove",o=>{o.target instanceof HTMLElement&&!i(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+t),s&&s.isConnected&&(s.scrollIntoView({block:"nearest"}),s=null)})}}}function Ez(){return{before({doc:t,d:e}){e.style(t.documentElement,"overflow","hidden")}}}function Cz(t){let e={};for(let n of t)Object.assign(e,n(e));return e}let Pi=vz(()=>new Map,{PUSH(t,e){var n;let r=(n=this.get(t))!=null?n:{doc:t,count:0,d:Ko(),meta:new Set};return r.count++,r.meta.add(e),this.set(t,r),this},POP(t,e){let n=this.get(t);return n&&(n.count--,n.meta.delete(e)),this},SCROLL_PREVENT({doc:t,d:e,meta:n}){let r={doc:t,d:e,meta:Cz(n)},i=[wz(),_z(),Ez()];i.forEach(({before:s})=>s==null?void 0:s(r)),i.forEach(({after:s})=>s==null?void 0:s(r))},SCROLL_ALLOW({d:t}){t.dispose()},TEARDOWN({doc:t}){this.delete(t)}});Pi.subscribe(()=>{let t=Pi.getSnapshot(),e=new Map;for(let[n]of t)e.set(n,n.documentElement.style.overflow);for(let n of t.values()){let r=e.get(n.doc)==="hidden",i=n.count!==0;(i&&!r||!i&&r)&&Pi.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&Pi.dispatch("TEARDOWN",n)}});function Tz(t,e,n){let r=yz(Pi),i=t?r.get(t):void 0,s=i?i.count>0:!1;return Rn(()=>{if(!(!t||!e))return Pi.dispatch("PUSH",t,n),()=>Pi.dispatch("POP",t,n)},[e,t]),s}let mp=new Map,ga=new Map;function W1(t,e=!0){Rn(()=>{var n;if(!e)return;let r=typeof t=="function"?t():t.current;if(!r)return;function i(){var o;if(!r)return;let a=(o=ga.get(r))!=null?o:1;if(a===1?ga.delete(r):ga.set(r,a-1),a!==1)return;let l=mp.get(r);l&&(l["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",l["aria-hidden"]),r.inert=l.inert,mp.delete(r))}let s=(n=ga.get(r))!=null?n:0;return ga.set(r,s+1),s!==0||(mp.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),i},[t,e])}function Sz({defaultContainers:t=[],portals:e}={}){let n=_.exports.useRef(null),r=ku(n),i=xe(()=>{var s;let o=[];for(let a of t)a!==null&&(a instanceof HTMLElement?o.push(a):"current"in a&&a.current instanceof HTMLElement&&o.push(a.current));if(e!=null&&e.current)for(let a of e.current)o.push(a);for(let a of(s=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?s:[])a!==document.body&&a!==document.head&&a instanceof HTMLElement&&a.id!=="headlessui-portal-root"&&(a.contains(n.current)||o.some(l=>a.contains(l))||o.push(a));return o});return{resolveContainers:i,contains:xe(s=>i().some(o=>o.contains(s))),mainTreeNodeRef:n,MainTreeNode:_.exports.useMemo(()=>function(){return K.createElement(gg,{features:Bh.Hidden,ref:n})},[n])}}var Iz=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(Iz||{}),kz=(t=>(t[t.SetTitleId=0]="SetTitleId",t))(kz||{});let xz={[0](t,e){return t.titleId===e.id?t:{...t,titleId:e.id}}},jh=_.exports.createContext(null);jh.displayName="DialogContext";function xu(t){let e=_.exports.useContext(jh);if(e===null){let n=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,xu),n}return e}function Nz(t,e,n=()=>[document.body]){Tz(t,e,r=>{var i;return{containers:[...(i=r.containers)!=null?i:[],n]}})}function bz(t,e){return It(e.type,xz,t,e)}let Rz="div",Az=Vh.RenderStrategy|Vh.Static;function Pz(t,e){var n;let r=Qo(),{id:i=`headlessui-dialog-${r}`,open:s,onClose:o,initialFocus:a,__demoMode:l=!1,...u}=t,[c,h]=_.exports.useState(0),d=R_();s===void 0&&d!==null&&(s=(d&Jt.Open)===Jt.Open);let p=_.exports.useRef(null),y=An(p,e),v=ku(p),f=t.hasOwnProperty("open")||d!==null,m=t.hasOwnProperty("onClose");if(!f&&!m)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!f)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!m)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof s!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s}`);if(typeof o!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let g=s?0:1,[w,C]=_.exports.useReducer(bz,{titleId:null,descriptionId:null,panelRef:_.exports.createRef()}),k=xe(()=>o(!1)),I=xe(ye=>C({type:0,id:ye})),L=Go()?l?!1:g===0:!1,$=c>1,O=_.exports.useContext(jh)!==null,[le,Be]=Q6(),{resolveContainers:q,mainTreeNodeRef:U,MainTreeNode:fe}=Sz({portals:le,defaultContainers:[(n=w.panelRef.current)!=null?n:p.current]}),pe=$?"parent":"leaf",be=d!==null?(d&Jt.Closing)===Jt.Closing:!1,Je=(()=>O||be?!1:L)(),Ze=_.exports.useCallback(()=>{var ye,yn;return(yn=Array.from((ye=v==null?void 0:v.querySelectorAll("body > *"))!=null?ye:[]).find(Dt=>Dt.id==="headlessui-portal-root"?!1:Dt.contains(U.current)&&Dt instanceof HTMLElement))!=null?yn:null},[U]);W1(Ze,Je);let Ot=(()=>$?!0:L)(),gn=_.exports.useCallback(()=>{var ye,yn;return(yn=Array.from((ye=v==null?void 0:v.querySelectorAll("[data-headlessui-portal]"))!=null?ye:[]).find(Dt=>Dt.contains(U.current)&&Dt instanceof HTMLElement))!=null?yn:null},[U]);W1(gn,Ot);let b=(()=>!(!L||$))();I6(q,k,b);let Q=(()=>!($||g!==0))();kb(v==null?void 0:v.defaultView,"keydown",ye=>{Q&&(ye.defaultPrevented||ye.key===Ib.Escape&&(ye.preventDefault(),ye.stopPropagation(),k()))});let ne=(()=>!(be||g!==0||O))();Nz(v,ne,q),_.exports.useEffect(()=>{if(g!==0||!p.current)return;let ye=new ResizeObserver(yn=>{for(let Dt of yn){let di=Dt.target.getBoundingClientRect();di.x===0&&di.y===0&&di.width===0&&di.height===0&&k()}});return ye.observe(p.current),()=>ye.disconnect()},[g,p,k]);let[_e,$e]=J6(),Xt=_.exports.useMemo(()=>[{dialogState:g,close:k,setTitleId:I},w],[g,w,k,I]),Bt=_.exports.useMemo(()=>({open:g===0}),[g]),Pn={ref:y,id:i,role:"dialog","aria-modal":g===0?!0:void 0,"aria-labelledby":w.titleId,"aria-describedby":_e};return K.createElement(iz,{type:"Dialog",enabled:g===0,element:p,onUpdate:xe((ye,yn)=>{yn==="Dialog"&&It(ye,{[wg.Add]:()=>h(Dt=>Dt+1),[wg.Remove]:()=>h(Dt=>Dt-1)})})},K.createElement(yg,{force:!0},K.createElement(_g,null,K.createElement(jh.Provider,{value:Xt},K.createElement(_g.Group,{target:p},K.createElement(yg,{force:!1},K.createElement($e,{slot:Bt,name:"Dialog.Description"},K.createElement(ma,{initialFocus:a,containers:q,features:L?It(pe,{parent:ma.features.RestoreFocus,leaf:ma.features.All&~ma.features.FocusLock}):ma.features.None},K.createElement(Be,null,mn({ourProps:Pn,theirProps:u,slot:Bt,defaultTag:Rz,features:Az,visible:g===0,name:"Dialog"}))))))))),K.createElement(fe,null))}let Oz="div";function Dz(t,e){let n=Qo(),{id:r=`headlessui-dialog-overlay-${n}`,...i}=t,[{dialogState:s,close:o}]=xu("Dialog.Overlay"),a=An(e),l=xe(c=>{if(c.target===c.currentTarget){if(N6(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),o()}}),u=_.exports.useMemo(()=>({open:s===0}),[s]);return mn({ourProps:{ref:a,id:r,"aria-hidden":!0,onClick:l},theirProps:i,slot:u,defaultTag:Oz,name:"Dialog.Overlay"})}let Lz="div";function Mz(t,e){let n=Qo(),{id:r=`headlessui-dialog-backdrop-${n}`,...i}=t,[{dialogState:s},o]=xu("Dialog.Backdrop"),a=An(e);_.exports.useEffect(()=>{if(o.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[o.panelRef]);let l=_.exports.useMemo(()=>({open:s===0}),[s]);return K.createElement(yg,{force:!0},K.createElement(_g,null,mn({ourProps:{ref:a,id:r,"aria-hidden":!0},theirProps:i,slot:l,defaultTag:Lz,name:"Dialog.Backdrop"})))}let $z="div";function Fz(t,e){let n=Qo(),{id:r=`headlessui-dialog-panel-${n}`,...i}=t,[{dialogState:s},o]=xu("Dialog.Panel"),a=An(e,o.panelRef),l=_.exports.useMemo(()=>({open:s===0}),[s]),u=xe(c=>{c.stopPropagation()});return mn({ourProps:{ref:a,id:r,onClick:u},theirProps:i,slot:l,defaultTag:$z,name:"Dialog.Panel"})}let Uz="h2";function Vz(t,e){let n=Qo(),{id:r=`headlessui-dialog-title-${n}`,...i}=t,[{dialogState:s,setTitleId:o}]=xu("Dialog.Title"),a=An(e);_.exports.useEffect(()=>(o(r),()=>o(null)),[r,o]);let l=_.exports.useMemo(()=>({open:s===0}),[s]);return mn({ourProps:{ref:a,id:r},theirProps:i,slot:l,defaultTag:Uz,name:"Dialog.Title"})}let Bz=sn(Pz),jz=sn(Mz),zz=sn(Fz),Hz=sn(Dz),Wz=sn(Vz),tc=Object.assign(Bz,{Backdrop:jz,Panel:zz,Overlay:Hz,Title:Wz,Description:nz});function qz(t=0){let[e,n]=_.exports.useState(t),r=Iu(),i=_.exports.useCallback(l=>{r.current&&n(u=>u|l)},[e,r]),s=_.exports.useCallback(l=>Boolean(e&l),[e]),o=_.exports.useCallback(l=>{r.current&&n(u=>u&~l)},[n,r]),a=_.exports.useCallback(l=>{r.current&&n(u=>u^l)},[n]);return{flags:e,addFlag:i,hasFlag:s,removeFlag:o,toggleFlag:a}}function Kz(t){let e={called:!1};return(...n)=>{if(!e.called)return e.called=!0,t(...n)}}function gp(t,...e){t&&e.length>0&&t.classList.add(...e)}function yp(t,...e){t&&e.length>0&&t.classList.remove(...e)}function Gz(t,e){let n=Ko();if(!t)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(t),[s,o]=[r,i].map(l=>{let[u=0]=l.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,h)=>h-c);return u}),a=s+o;if(a!==0){n.group(u=>{u.setTimeout(()=>{e(),u.dispose()},a),u.addEventListener(t,"transitionrun",c=>{c.target===c.currentTarget&&u.dispose()})});let l=n.addEventListener(t,"transitionend",u=>{u.target===u.currentTarget&&(e(),l())})}else e();return n.add(()=>e()),n.dispose}function Qz(t,e,n,r){let i=n?"enter":"leave",s=Ko(),o=r!==void 0?Kz(r):()=>{};i==="enter"&&(t.removeAttribute("hidden"),t.style.display="");let a=It(i,{enter:()=>e.enter,leave:()=>e.leave}),l=It(i,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),u=It(i,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return yp(t,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),gp(t,...a,...u),s.nextFrame(()=>{yp(t,...u),gp(t,...l),Gz(t,()=>(yp(t,...a),gp(t,...e.entered),o()))}),s.dispose}function Yz({container:t,direction:e,classes:n,onStart:r,onStop:i}){let s=Iu(),o=N_(),a=ur(e);Rn(()=>{let l=Ko();o.add(l.dispose);let u=t.current;if(u&&a.current!=="idle"&&s.current)return l.dispose(),r.current(a.current),l.add(Qz(u,n.current,a.current==="enter",()=>{l.dispose(),i.current(a.current)})),l.dispose},[e])}function pi(t=""){return t.split(" ").filter(e=>e.trim().length>1)}let Hd=_.exports.createContext(null);Hd.displayName="TransitionContext";var Xz=(t=>(t.Visible="visible",t.Hidden="hidden",t))(Xz||{});function Jz(){let t=_.exports.useContext(Hd);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}function Zz(){let t=_.exports.useContext(Wd);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}let Wd=_.exports.createContext(null);Wd.displayName="NestingContext";function qd(t){return"children"in t?qd(t.children):t.current.filter(({el:e})=>e.current!==null).filter(({state:e})=>e==="visible").length>0}function Lb(t,e){let n=ur(t),r=_.exports.useRef([]),i=Iu(),s=N_(),o=xe((p,y=sr.Hidden)=>{let v=r.current.findIndex(({el:f})=>f===p);v!==-1&&(It(y,{[sr.Unmount](){r.current.splice(v,1)},[sr.Hidden](){r.current[v].state="hidden"}}),s.microTask(()=>{var f;!qd(r)&&i.current&&((f=n.current)==null||f.call(n))}))}),a=xe(p=>{let y=r.current.find(({el:v})=>v===p);return y?y.state!=="visible"&&(y.state="visible"):r.current.push({el:p,state:"visible"}),()=>o(p,sr.Unmount)}),l=_.exports.useRef([]),u=_.exports.useRef(Promise.resolve()),c=_.exports.useRef({enter:[],leave:[],idle:[]}),h=xe((p,y,v)=>{l.current.splice(0),e&&(e.chains.current[y]=e.chains.current[y].filter(([f])=>f!==p)),e==null||e.chains.current[y].push([p,new Promise(f=>{l.current.push(f)})]),e==null||e.chains.current[y].push([p,new Promise(f=>{Promise.all(c.current[y].map(([m,g])=>g)).then(()=>f())})]),y==="enter"?u.current=u.current.then(()=>e==null?void 0:e.wait.current).then(()=>v(y)):v(y)}),d=xe((p,y,v)=>{Promise.all(c.current[y].splice(0).map(([f,m])=>m)).then(()=>{var f;(f=l.current.shift())==null||f()}).then(()=>v(y))});return _.exports.useMemo(()=>({children:r,register:a,unregister:o,onStart:h,onStop:d,wait:u,chains:c}),[a,o,r,h,d,c,u])}function e5(){}let t5=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function q1(t){var e;let n={};for(let r of t5)n[r]=(e=t[r])!=null?e:e5;return n}function n5(t){let e=_.exports.useRef(q1(t));return _.exports.useEffect(()=>{e.current=q1(t)},[t]),e}let r5="div",Mb=Vh.RenderStrategy;function i5(t,e){let{beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:s,enter:o,enterFrom:a,enterTo:l,entered:u,leave:c,leaveFrom:h,leaveTo:d,...p}=t,y=_.exports.useRef(null),v=An(y,e),f=p.unmount?sr.Unmount:sr.Hidden,{show:m,appear:g,initial:w}=Jz(),[C,k]=_.exports.useState(m?"visible":"hidden"),I=Zz(),{register:L,unregister:$}=I,O=_.exports.useRef(null);_.exports.useEffect(()=>L(y),[L,y]),_.exports.useEffect(()=>{if(f===sr.Hidden&&y.current){if(m&&C!=="visible"){k("visible");return}return It(C,{hidden:()=>$(y),visible:()=>L(y)})}},[C,y,L,$,m,f]);let le=ur({enter:pi(o),enterFrom:pi(a),enterTo:pi(l),entered:pi(u),leave:pi(c),leaveFrom:pi(h),leaveTo:pi(d)}),Be=n5({beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:s}),q=Go();_.exports.useEffect(()=>{if(q&&C==="visible"&&y.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[y,C,q]);let U=w&&!g,fe=(()=>!q||U||O.current===m?"idle":m?"enter":"leave")(),pe=qz(0),be=xe(b=>It(b,{enter:()=>{pe.addFlag(Jt.Opening),Be.current.beforeEnter()},leave:()=>{pe.addFlag(Jt.Closing),Be.current.beforeLeave()},idle:()=>{}})),Je=xe(b=>It(b,{enter:()=>{pe.removeFlag(Jt.Opening),Be.current.afterEnter()},leave:()=>{pe.removeFlag(Jt.Closing),Be.current.afterLeave()},idle:()=>{}})),Ze=Lb(()=>{k("hidden"),$(y)},I);Yz({container:y,classes:le,direction:fe,onStart:ur(b=>{Ze.onStart(y,b,be)}),onStop:ur(b=>{Ze.onStop(y,b,Je),b==="leave"&&!qd(Ze)&&(k("hidden"),$(y))})}),_.exports.useEffect(()=>{U&&(f===sr.Hidden?O.current=null:O.current=m)},[m,U,C]);let Ot=p,gn={ref:v};return g&&m&&w&&(Ot={...Ot,className:mg(p.className,...le.current.enter,...le.current.enterFrom)}),K.createElement(Wd.Provider,{value:Ze},K.createElement(P6,{value:It(C,{visible:Jt.Open,hidden:Jt.Closed})|pe.flags},mn({ourProps:gn,theirProps:Ot,defaultTag:r5,features:Mb,visible:C==="visible",name:"Transition.Child"})))}function s5(t,e){let{show:n,appear:r=!1,unmount:i,...s}=t,o=_.exports.useRef(null),a=An(o,e);Go();let l=R_();if(n===void 0&&l!==null&&(n=(l&Jt.Open)===Jt.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[u,c]=_.exports.useState(n?"visible":"hidden"),h=Lb(()=>{c("hidden")}),[d,p]=_.exports.useState(!0),y=_.exports.useRef([n]);Rn(()=>{d!==!1&&y.current[y.current.length-1]!==n&&(y.current.push(n),p(!1))},[y,n]);let v=_.exports.useMemo(()=>({show:n,appear:r,initial:d}),[n,r,d]);_.exports.useEffect(()=>{if(n)c("visible");else if(!qd(h))c("hidden");else{let w=o.current;if(!w)return;let C=w.getBoundingClientRect();C.x===0&&C.y===0&&C.width===0&&C.height===0&&c("hidden")}},[n,h]);let f={unmount:i},m=xe(()=>{var w;d&&p(!1),(w=t.beforeEnter)==null||w.call(t)}),g=xe(()=>{var w;d&&p(!1),(w=t.beforeLeave)==null||w.call(t)});return K.createElement(Wd.Provider,{value:h},K.createElement(Hd.Provider,{value:v},mn({ourProps:{...f,as:_.exports.Fragment,children:K.createElement($b,{ref:a,...f,...s,beforeEnter:m,beforeLeave:g})},theirProps:{},defaultTag:_.exports.Fragment,features:Mb,visible:u==="visible",name:"Transition"})))}function o5(t,e){let n=_.exports.useContext(Hd)!==null,r=R_()!==null;return K.createElement(K.Fragment,null,!n&&r?K.createElement(Eg,{ref:e,...t}):K.createElement($b,{ref:e,...t}))}let Eg=sn(s5),$b=sn(i5),a5=sn(o5),vp=Object.assign(Eg,{Child:a5,Root:Eg});const l5=({title:t,description:e,open:n,onClose:r,children:i})=>V(vp,{appear:!0,show:n,as:_.exports.Fragment,children:Tt(tc,{open:n,onClose:r,as:"div",className:"relative z-10",children:[V(vp.Child,{as:_.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:V("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),V("div",{className:"fixed inset-0 overflow-y-auto",children:V("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:V(vp.Child,{as:_.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Tt(tc.Panel,{className:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[V(tc.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:t}),V(tc.Description,{as:"div",className:"mt-2",children:V("p",{className:"text-sm text-gray-500",children:e})}),i]})})})})]})}),u5="_container_syanv_1",c5="_ripple_syanv_19";var K1={container:u5,ripple:c5};const h5=(t,e,n)=>{_.exports.useLayoutEffect(()=>{let r=null;return t>0&&(clearTimeout(r),r=setTimeout(()=>{n(),clearTimeout(r)},e*4)),()=>clearTimeout(r)},[t,e,n])},Fb=({duration:t,color:e})=>{const[n,r]=_.exports.useState([]);return h5(n.length,t,()=>{r([])}),V("div",{onMouseDown:s=>{const o=s.currentTarget.getBoundingClientRect(),a=o.width>o.height?o.width:o.height,l=s.pageX-o.x-a/2,u=s.pageY-o.y-a/2,c={x:l,y:u,size:a};r([...n,c])},className:K1.container,children:n.length>0&&n.map((s,o)=>V("span",{className:K1.ripple,style:{top:s.y,left:s.x,width:s.size,height:s.size,backgroundColor:e,animationDuration:`${t}ms`}},"span"+o))})},d5=()=>{var p,y;const[t,e]=_.exports.useState(!0),[n,r]=_.exports.useState(!1),[i,s]=_.exports.useState(""),o=ZN(),{register:a,handleSubmit:l,getValues:u,formState:{errors:c}}=l6(),h=async v=>{r(!0),t?wD(o,v.email,v.password).catch(f=>{f instanceof Qt&&(f.code==="auth/user-not-found"?s("Couldn't find the user. Try another one"):f.code==="auth/wrong-password"&&s("Incorrect password. Please try again"))}).finally(()=>{r(!1)}):_D(o,v.email,v.password).catch(f=>{f instanceof Qt&&f.code==="auth/email-already-in-use"&&s("Email already in use. Try to log in?")}).finally(()=>{r(!1)})},d=()=>{s("")};return Tt(f6,{children:[V(vb,{loading:n}),V(l5,{title:t?"Login error":"Sign up error",description:i,onClose:d,open:!!i,children:V("div",{className:"mt-4",children:V("button",{onClick:d,className:"inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2",children:"Close"})})}),Tt("div",{className:"mx-auto p-6",children:[V("h1",{className:"mb-20 mt-4 text-center text-5xl font-light text-primary",children:"Shoppingify"}),Tt("form",{onSubmit:l(h),className:"mx-auto flex max-w-xs flex-col gap-6",children:[V(V1,{register:a,rules:{required:"this is required",pattern:{value:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}/,message:"must be a valid email address"}},placeholder:"Enter an email",label:"Email",errorMessage:(p=c.email)==null?void 0:p.message}),V(V1,{type:"password",register:a,rules:{required:"this is required"},placeholder:"Enter a password",label:"Password",errorMessage:(y=c.password)==null?void 0:y.message}),Tt("button",{type:"submit",className:"relative mt-2 w-full cursor-pointer rounded-xl bg-primary py-2 text-base font-bold text-white",children:[t?"Login":"Signup",V(Fb,{color:"#FFF0DE",duration:1500})]}),Tt("p",{className:"-mt-5",children:[t?"Don't have an account?":"Already have an account?"," ",V("a",{onClick:()=>e(v=>!v),className:"cursor-pointer text-primary hover:underline focus-visible:underline",children:t?"Sign up":"Login"})]})]})]})]})};var f5="/shoppingify/assets/favicon.5b151dc7.svg",Ub={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},G1=K.createContext&&K.createContext(Ub),Qr=globalThis&&globalThis.__assign||function(){return Qr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Qr.apply(this,arguments)},p5=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function Vb(t){return t&&t.map(function(e,n){return K.createElement(e.tag,Qr({key:n},e.attr),Vb(e.child))})}function Kd(t){return function(e){return K.createElement(m5,Qr({attr:Qr({},t.attr)},e),Vb(t.child))}}function m5(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=p5(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),K.createElement("svg",Qr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Qr(Qr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&K.createElement("title",null,s),t.children)};return G1!==void 0?K.createElement(G1.Consumer,null,function(n){return e(n)}):e(Ub)}function g5(t){return Kd({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}}]})(t)}function y5(t){return Kd({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}}]})(t)}function v5(t){return Kd({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}}]})(t)}function _5(t){return Kd({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{fill:"none"},child:[{tag:"path",attr:{d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M0 0h24v24H0z"}}]},{tag:"path",attr:{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}}]})(t)}const _p=({to:t,tooltip:e,Icon:n})=>Tt(Bj,{to:t,className:({isActive:r})=>`group relative block px-4 py-8 sm:px-6 ${r&&"before:absolute before:left-0 before:top-1/2 before:h-12 before:w-1.5 before:-translate-y-1/2 before:rounded-r-lg before:bg-primary"}`,children:[V(n,{className:"text-2xl"}),V(Fb,{color:"#dddddd",duration:1e3}),V("span",{className:"pointer-events-none absolute -right-12 top-1/2 flex h-5 w-16 -translate-y-1/2 items-center justify-center rounded-md bg-gray-700 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100",children:e})]}),w5=()=>Tt("nav",{className:"flex h-screen w-fit flex-col justify-between bg-white",children:[V("img",{src:f5,alt:"logo",className:"relative top-4 mx-auto h-12 w-12"}),Tt("div",{className:"flex flex-col items-center",children:[V(_p,{to:"/",Icon:g5,tooltip:"items"}),V(_p,{to:"/history",Icon:_5,tooltip:"history"}),V(_p,{to:"/statistics",Icon:y5,tooltip:"statistics"})]}),V(v5,{className:"relative bottom-6 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary p-2.5 text-white"})]}),E5=({name:t,image:e,category:n,note:r})=>V("div",{className:"flex min-w-[140px] max-w-[182px] grow items-center rounded-xl bg-white p-4 text-sm font-medium shadow-[0px_2px_12px_rgba(0,0,0,0.05)] sm:text-base",children:V("span",{className:"max-w-[100px]",children:t})}),C5=({name:t,items:e})=>e.length===0?V("div",{}):Tt("div",{children:[V("h3",{children:t}),V("div",{children:e.map(n=>_.exports.createElement(E5,{...n,key:n.id}))})]}),T5=["Fruit and vegetables","Meat and Fish","Beverages","Sweets","Pets"],S5=()=>{var o;const{data:t}=KN(),e=jB(),n=oF(e,"items"),r=CF(n,TF("userId","==",(o=t.user)==null?void 0:o.uid)),{status:i,data:s}=UB(r,{idField:"id"});return i==="loading"?V(vb,{loading:!0}):V("div",{children:T5.map(a=>V(C5,{name:a,items:s.filter(l=>l.category===a)}))})},I5=()=>{const{status:t,data:e}=KN();return t==="loading"?V("div",{}):V($j,{basename:"/shoppingify",children:Tt("div",{className:"flex",children:[e.signedIn&&V(w5,{}),V("div",{className:"grow",children:Tt(Pj,{children:[!e.signedIn&&V(Sc,{path:"/login",element:V(d5,{})}),e.signedIn&&V(Sc,{path:"/",element:V(S5,{})}),V(Sc,{path:"*",element:V(Rj,{to:e.signedIn?"/":"/login"})})]})})]})})};const k5=()=>{const t=qN(),e=uF(t),n=OL(t);return V(VB,{sdk:n,children:V(BB,{sdk:e,children:V(I5,{})})})},x5={apiKey:"AIzaSyAltaAAbp3yed-PjevL5ASwWihJYeNCGU0",authDomain:"shoppingify-1bd7f.firebaseapp.com",projectId:"shoppingify-1bd7f",storageBucket:"shoppingify-1bd7f.appspot.com",messagingSenderId:"601698294825",appId:"1:601698294825:web:6a0e15be24181c41d8d038",measurementId:"G-BMQPZHF7V1"};QA.render(V(K.StrictMode,{children:V(IB,{firebaseConfig:x5,children:V(k5,{})})}),document.getElementById("root"));
