(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Ed=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ha(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ga={exports:{}},Ii={},Wa={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kr=Symbol.for("react.element"),kd=Symbol.for("react.portal"),Td=Symbol.for("react.fragment"),Cd=Symbol.for("react.strict_mode"),bd=Symbol.for("react.profiler"),Pd=Symbol.for("react.provider"),jd=Symbol.for("react.context"),Md=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Nd=Symbol.for("react.memo"),_d=Symbol.for("react.lazy"),Po=Symbol.iterator;function Ld(e){return e===null||typeof e!="object"?null:(e=Po&&e[Po]||e["@@iterator"],typeof e=="function"?e:null)}var Ua={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qa=Object.assign,Ya={};function Ln(e,t,n){this.props=e,this.context=t,this.refs=Ya,this.updater=n||Ua}Ln.prototype.isReactComponent={};Ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xa(){}Xa.prototype=Ln.prototype;function Pl(e,t,n){this.props=e,this.context=t,this.refs=Ya,this.updater=n||Ua}var jl=Pl.prototype=new Xa;jl.constructor=Pl;Qa(jl,Ln.prototype);jl.isPureReactComponent=!0;var jo=Array.isArray,qa=Object.prototype.hasOwnProperty,Ml={current:null},Ka={key:!0,ref:!0,__self:!0,__source:!0};function Za(e,t,n){var r,i={},s=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)qa.call(t,r)&&!Ka.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var a=Array(o),u=0;u<o;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:kr,type:e,key:s,ref:l,props:i,_owner:Ml.current}}function Od(e,t){return{$$typeof:kr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function zl(e){return typeof e=="object"&&e!==null&&e.$$typeof===kr}function Id(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Mo=/\/+/g;function Zi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Id(""+e.key):t.toString(36)}function Qr(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case kr:case kd:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Zi(l,0):r,jo(i)?(n="",e!=null&&(n=e.replace(Mo,"$&/")+"/"),Qr(i,t,n,"",function(u){return u})):i!=null&&(zl(i)&&(i=Od(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Mo,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",jo(e))for(var o=0;o<e.length;o++){s=e[o];var a=r+Zi(s,o);l+=Qr(s,t,n,a,i)}else if(a=Ld(e),typeof a=="function")for(e=a.call(e),o=0;!(s=e.next()).done;)s=s.value,a=r+Zi(s,o++),l+=Qr(s,t,n,a,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function jr(e,t,n){if(e==null)return e;var r=[],i=0;return Qr(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Ad(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},Yr={transition:null},Dd={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:Yr,ReactCurrentOwner:Ml};function Ja(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:jr,forEach:function(e,t,n){jr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jr(e,function(){t++}),t},toArray:function(e){return jr(e,function(t){return t})||[]},only:function(e){if(!zl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=Ln;$.Fragment=Td;$.Profiler=bd;$.PureComponent=Pl;$.StrictMode=Cd;$.Suspense=zd;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dd;$.act=Ja;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qa({},e.props),i=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=Ml.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(a in t)qa.call(t,a)&&!Ka.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&o!==void 0?o[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){o=Array(a);for(var u=0;u<a;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:kr,type:e.type,key:i,ref:s,props:r,_owner:l}};$.createContext=function(e){return e={$$typeof:jd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Pd,_context:e},e.Consumer=e};$.createElement=Za;$.createFactory=function(e){var t=Za.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:Md,render:e}};$.isValidElement=zl;$.lazy=function(e){return{$$typeof:_d,_payload:{_status:-1,_result:e},_init:Ad}};$.memo=function(e,t){return{$$typeof:Nd,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Yr.transition;Yr.transition={};try{e()}finally{Yr.transition=t}};$.unstable_act=Ja;$.useCallback=function(e,t){return ke.current.useCallback(e,t)};$.useContext=function(e){return ke.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};$.useEffect=function(e,t){return ke.current.useEffect(e,t)};$.useId=function(){return ke.current.useId()};$.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return ke.current.useMemo(e,t)};$.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};$.useRef=function(e){return ke.current.useRef(e)};$.useState=function(e){return ke.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return ke.current.useTransition()};$.version="18.3.1";Wa.exports=$;var R=Wa.exports;const se=Ha(R);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fd=R,Rd=Symbol.for("react.element"),Bd=Symbol.for("react.fragment"),$d=Object.prototype.hasOwnProperty,Vd=Fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hd={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,t,n){var r,i={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)$d.call(t,r)&&!Hd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Rd,type:e,key:s,ref:l,props:i,_owner:Vd.current}}Ii.Fragment=Bd;Ii.jsx=eu;Ii.jsxs=eu;Ga.exports=Ii;var m=Ga.exports,Ns={},tu={exports:{}},Re={},nu={exports:{}},ru={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,L){var I=j.length;j.push(L);e:for(;0<I;){var V=I-1>>>1,G=j[V];if(0<i(G,L))j[V]=L,j[I]=G,I=V;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var L=j[0],I=j.pop();if(I!==L){j[0]=I;e:for(var V=0,G=j.length,xe=G>>>1;V<xe;){var ie=2*(V+1)-1,be=j[ie],ce=ie+1,te=j[ce];if(0>i(be,I))ce<G&&0>i(te,be)?(j[V]=te,j[ce]=I,V=ce):(j[V]=be,j[ie]=I,V=ie);else if(ce<G&&0>i(te,I))j[V]=te,j[ce]=I,V=ce;else break e}}return L}function i(j,L){var I=j.sortIndex-L.sortIndex;return I!==0?I:j.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var a=[],u=[],d=1,f=null,h=3,v=!1,y=!1,S=!1,z=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(j){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=j)r(u),L.sortIndex=L.expirationTime,t(a,L);else break;L=n(u)}}function w(j){if(S=!1,p(j),!y)if(n(a)!==null)y=!0,D(x);else{var L=n(u);L!==null&&B(w,L.startTime-j)}}function x(j,L){y=!1,S&&(S=!1,g(E),E=-1),v=!0;var I=h;try{for(p(L),f=n(a);f!==null&&(!(f.expirationTime>L)||j&&!k());){var V=f.callback;if(typeof V=="function"){f.callback=null,h=f.priorityLevel;var G=V(f.expirationTime<=L);L=e.unstable_now(),typeof G=="function"?f.callback=G:f===n(a)&&r(a),p(L)}else r(a);f=n(a)}if(f!==null)var xe=!0;else{var ie=n(u);ie!==null&&B(w,ie.startTime-L),xe=!1}return xe}finally{f=null,h=I,v=!1}}var T=!1,b=null,E=-1,M=5,C=-1;function k(){return!(e.unstable_now()-C<M)}function P(){if(b!==null){var j=e.unstable_now();C=j;var L=!0;try{L=b(!0,j)}finally{L?_():(T=!1,b=null)}}else T=!1}var _;if(typeof c=="function")_=function(){c(P)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,F=O.port2;O.port1.onmessage=P,_=function(){F.postMessage(null)}}else _=function(){z(P,0)};function D(j){b=j,T||(T=!0,_())}function B(j,L){E=z(function(){j(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,D(x))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(j){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var I=h;h=L;try{return j()}finally{h=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,L){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var I=h;h=j;try{return L()}finally{h=I}},e.unstable_scheduleCallback=function(j,L,I){var V=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?V+I:V):I=V,j){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=I+G,j={id:d++,callback:L,priorityLevel:j,startTime:I,expirationTime:G,sortIndex:-1},I>V?(j.sortIndex=I,t(u,j),n(a)===null&&j===n(u)&&(S?(g(E),E=-1):S=!0,B(w,I-V))):(j.sortIndex=G,t(a,j),y||v||(y=!0,D(x))),j},e.unstable_shouldYield=k,e.unstable_wrapCallback=function(j){var L=h;return function(){var I=h;h=L;try{return j.apply(this,arguments)}finally{h=I}}}})(ru);nu.exports=ru;var Gd=nu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd=R,Fe=Gd;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iu=new Set,sr={};function rn(e,t){bn(e,t),bn(e+"Capture",t)}function bn(e,t){for(sr[e]=t,e=0;e<t.length;e++)iu.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_s=Object.prototype.hasOwnProperty,Ud=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zo={},No={};function Qd(e){return _s.call(No,e)?!0:_s.call(zo,e)?!1:Ud.test(e)?No[e]=!0:(zo[e]=!0,!1)}function Yd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xd(e,t,n,r){if(t===null||typeof t>"u"||Yd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,r,i,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var Nl=/[\-:]([a-z])/g;function _l(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Nl,_l);he[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Nl,_l);he[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Nl,_l);he[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ll(e,t,n,r){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Xd(t,n,i,r)&&(n=null),r||i===null?Qd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=Wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mr=Symbol.for("react.element"),on=Symbol.for("react.portal"),an=Symbol.for("react.fragment"),Ol=Symbol.for("react.strict_mode"),Ls=Symbol.for("react.profiler"),su=Symbol.for("react.provider"),lu=Symbol.for("react.context"),Il=Symbol.for("react.forward_ref"),Os=Symbol.for("react.suspense"),Is=Symbol.for("react.suspense_list"),Al=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),ou=Symbol.for("react.offscreen"),_o=Symbol.iterator;function An(e){return e===null||typeof e!="object"?null:(e=_o&&e[_o]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Ji;function Wn(e){if(Ji===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ji=t&&t[1]||""}return`
`+Ji+e}var es=!1;function ts(e,t){if(!e||es)return"";es=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),l=i.length-1,o=s.length-1;1<=l&&0<=o&&i[l]!==s[o];)o--;for(;1<=l&&0<=o;l--,o--)if(i[l]!==s[o]){if(l!==1||o!==1)do if(l--,o--,0>o||i[l]!==s[o]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=o);break}}}finally{es=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wn(e):""}function qd(e){switch(e.tag){case 5:return Wn(e.type);case 16:return Wn("Lazy");case 13:return Wn("Suspense");case 19:return Wn("SuspenseList");case 0:case 2:case 15:return e=ts(e.type,!1),e;case 11:return e=ts(e.type.render,!1),e;case 1:return e=ts(e.type,!0),e;default:return""}}function As(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case an:return"Fragment";case on:return"Portal";case Ls:return"Profiler";case Ol:return"StrictMode";case Os:return"Suspense";case Is:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lu:return(e.displayName||"Context")+".Consumer";case su:return(e._context.displayName||"Context")+".Provider";case Il:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Al:return t=e.displayName||null,t!==null?t:As(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return As(e(t))}catch{}}return null}function Kd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return As(t);case 8:return t===Ol?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function au(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zd(e){var t=au(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zr(e){e._valueTracker||(e._valueTracker=Zd(e))}function uu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=au(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ds(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Lo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cu(e,t){t=t.checked,t!=null&&Ll(e,"checked",t,!1)}function Fs(e,t){cu(e,t);var n=Rt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Rs(e,t.type,Rt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Oo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Rs(e,t,n){(t!=="number"||li(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Un=Array.isArray;function wn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Io(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Un(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rt(n)}}function du(e,t){var n=Rt(t.value),r=Rt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ao(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $s(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nr,pu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jd=["Webkit","ms","Moz","O"];Object.keys(Xn).forEach(function(e){Jd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xn[t]=Xn[e]})});function mu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Xn.hasOwnProperty(e)&&Xn[e]?(""+t).trim():t+"px"}function hu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ef=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vs(e,t){if(t){if(ef[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Hs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gs=null;function Dl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ws=null,xn=null,Sn=null;function Do(e){if(e=br(e)){if(typeof Ws!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Bi(t),Ws(e.stateNode,e.type,t))}}function gu(e){xn?Sn?Sn.push(e):Sn=[e]:xn=e}function vu(){if(xn){var e=xn,t=Sn;if(Sn=xn=null,Do(e),t)for(e=0;e<t.length;e++)Do(t[e])}}function yu(e,t){return e(t)}function wu(){}var ns=!1;function xu(e,t,n){if(ns)return e(t,n);ns=!0;try{return yu(e,t,n)}finally{ns=!1,(xn!==null||Sn!==null)&&(wu(),vu())}}function or(e,t){var n=e.stateNode;if(n===null)return null;var r=Bi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Us=!1;if(ht)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){Us=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{Us=!1}function tf(e,t,n,r,i,s,l,o,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var qn=!1,oi=null,ai=!1,Qs=null,nf={onError:function(e){qn=!0,oi=e}};function rf(e,t,n,r,i,s,l,o,a){qn=!1,oi=null,tf.apply(nf,arguments)}function sf(e,t,n,r,i,s,l,o,a){if(rf.apply(this,arguments),qn){if(qn){var u=oi;qn=!1,oi=null}else throw Error(N(198));ai||(ai=!0,Qs=u)}}function sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Su(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fo(e){if(sn(e)!==e)throw Error(N(188))}function lf(e){var t=e.alternate;if(!t){if(t=sn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Fo(i),e;if(s===r)return Fo(i),t;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var l=!1,o=i.child;o;){if(o===n){l=!0,n=i,r=s;break}if(o===r){l=!0,r=i,n=s;break}o=o.sibling}if(!l){for(o=s.child;o;){if(o===n){l=!0,n=s,r=i;break}if(o===r){l=!0,r=s,n=i;break}o=o.sibling}if(!l)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Eu(e){return e=lf(e),e!==null?ku(e):null}function ku(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ku(e);if(t!==null)return t;e=e.sibling}return null}var Tu=Fe.unstable_scheduleCallback,Ro=Fe.unstable_cancelCallback,of=Fe.unstable_shouldYield,af=Fe.unstable_requestPaint,re=Fe.unstable_now,uf=Fe.unstable_getCurrentPriorityLevel,Fl=Fe.unstable_ImmediatePriority,Cu=Fe.unstable_UserBlockingPriority,ui=Fe.unstable_NormalPriority,cf=Fe.unstable_LowPriority,bu=Fe.unstable_IdlePriority,Ai=null,it=null;function df(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Ai,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:mf,ff=Math.log,pf=Math.LN2;function mf(e){return e>>>=0,e===0?32:31-(ff(e)/pf|0)|0}var _r=64,Lr=4194304;function Qn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ci(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var o=l&~i;o!==0?r=Qn(o):(s&=l,s!==0&&(r=Qn(s)))}else l=n&~i,l!==0?r=Qn(l):s!==0&&(r=Qn(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),i=1<<n,r|=e[n],t&=~i;return r}function hf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-Ke(s),o=1<<l,a=i[l];a===-1?(!(o&n)||o&r)&&(i[l]=hf(o,t)):a<=t&&(e.expiredLanes|=o),s&=~o}}function Ys(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pu(){var e=_r;return _r<<=1,!(_r&4194240)&&(_r=64),e}function rs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function vf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ke(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Rl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var W=0;function ju(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mu,Bl,zu,Nu,_u,Xs=!1,Or=[],Nt=null,_t=null,Lt=null,ar=new Map,ur=new Map,bt=[],yf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bo(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ur.delete(t.pointerId)}}function Fn(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=br(t),t!==null&&Bl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function wf(e,t,n,r,i){switch(t){case"focusin":return Nt=Fn(Nt,e,t,n,r,i),!0;case"dragenter":return _t=Fn(_t,e,t,n,r,i),!0;case"mouseover":return Lt=Fn(Lt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ar.set(s,Fn(ar.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ur.set(s,Fn(ur.get(s)||null,e,t,n,r,i)),!0}return!1}function Lu(e){var t=Ut(e.target);if(t!==null){var n=sn(t);if(n!==null){if(t=n.tag,t===13){if(t=Su(n),t!==null){e.blockedOn=t,_u(e.priority,function(){zu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Gs=r,n.target.dispatchEvent(r),Gs=null}else return t=br(n),t!==null&&Bl(t),e.blockedOn=n,!1;t.shift()}return!0}function $o(e,t,n){Xr(e)&&n.delete(t)}function xf(){Xs=!1,Nt!==null&&Xr(Nt)&&(Nt=null),_t!==null&&Xr(_t)&&(_t=null),Lt!==null&&Xr(Lt)&&(Lt=null),ar.forEach($o),ur.forEach($o)}function Rn(e,t){e.blockedOn===t&&(e.blockedOn=null,Xs||(Xs=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,xf)))}function cr(e){function t(i){return Rn(i,e)}if(0<Or.length){Rn(Or[0],e);for(var n=1;n<Or.length;n++){var r=Or[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nt!==null&&Rn(Nt,e),_t!==null&&Rn(_t,e),Lt!==null&&Rn(Lt,e),ar.forEach(t),ur.forEach(t),n=0;n<bt.length;n++)r=bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)Lu(n),n.blockedOn===null&&bt.shift()}var En=wt.ReactCurrentBatchConfig,di=!0;function Sf(e,t,n,r){var i=W,s=En.transition;En.transition=null;try{W=1,$l(e,t,n,r)}finally{W=i,En.transition=s}}function Ef(e,t,n,r){var i=W,s=En.transition;En.transition=null;try{W=4,$l(e,t,n,r)}finally{W=i,En.transition=s}}function $l(e,t,n,r){if(di){var i=qs(e,t,n,r);if(i===null)ps(e,t,r,fi,n),Bo(e,r);else if(wf(i,e,t,n,r))r.stopPropagation();else if(Bo(e,r),t&4&&-1<yf.indexOf(e)){for(;i!==null;){var s=br(i);if(s!==null&&Mu(s),s=qs(e,t,n,r),s===null&&ps(e,t,r,fi,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ps(e,t,r,null,n)}}var fi=null;function qs(e,t,n,r){if(fi=null,e=Dl(r),e=Ut(e),e!==null)if(t=sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Su(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fi=e,null}function Ou(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uf()){case Fl:return 1;case Cu:return 4;case ui:case cf:return 16;case bu:return 536870912;default:return 16}default:return 16}}var jt=null,Vl=null,qr=null;function Iu(){if(qr)return qr;var e,t=Vl,n=t.length,r,i="value"in jt?jt.value:jt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[s-r];r++);return qr=i.slice(e,1<r?1-r:void 0)}function Kr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ir(){return!0}function Vo(){return!1}function Be(e){function t(n,r,i,s,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ir:Vo,this.isPropagationStopped=Vo,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ir)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ir)},persist:function(){},isPersistent:Ir}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=Be(On),Cr=ee({},On,{view:0,detail:0}),kf=Be(Cr),is,ss,Bn,Di=ee({},Cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(is=e.screenX-Bn.screenX,ss=e.screenY-Bn.screenY):ss=is=0,Bn=e),is)},movementY:function(e){return"movementY"in e?e.movementY:ss}}),Ho=Be(Di),Tf=ee({},Di,{dataTransfer:0}),Cf=Be(Tf),bf=ee({},Cr,{relatedTarget:0}),ls=Be(bf),Pf=ee({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),jf=Be(Pf),Mf=ee({},On,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zf=Be(Mf),Nf=ee({},On,{data:0}),Go=Be(Nf),_f={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function If(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Of[e])?!!t[e]:!1}function Gl(){return If}var Af=ee({},Cr,{key:function(e){if(e.key){var t=_f[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gl,charCode:function(e){return e.type==="keypress"?Kr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Df=Be(Af),Ff=ee({},Di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wo=Be(Ff),Rf=ee({},Cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gl}),Bf=Be(Rf),$f=ee({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vf=Be($f),Hf=ee({},Di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gf=Be(Hf),Wf=[9,13,27,32],Wl=ht&&"CompositionEvent"in window,Kn=null;ht&&"documentMode"in document&&(Kn=document.documentMode);var Uf=ht&&"TextEvent"in window&&!Kn,Au=ht&&(!Wl||Kn&&8<Kn&&11>=Kn),Uo=" ",Qo=!1;function Du(e,t){switch(e){case"keyup":return Wf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var un=!1;function Qf(e,t){switch(e){case"compositionend":return Fu(t);case"keypress":return t.which!==32?null:(Qo=!0,Uo);case"textInput":return e=t.data,e===Uo&&Qo?null:e;default:return null}}function Yf(e,t){if(un)return e==="compositionend"||!Wl&&Du(e,t)?(e=Iu(),qr=Vl=jt=null,un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Au&&t.locale!=="ko"?null:t.data;default:return null}}var Xf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xf[e.type]:t==="textarea"}function Ru(e,t,n,r){gu(r),t=pi(t,"onChange"),0<t.length&&(n=new Hl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zn=null,dr=null;function qf(e){qu(e,0)}function Fi(e){var t=fn(e);if(uu(t))return e}function Kf(e,t){if(e==="change")return t}var Bu=!1;if(ht){var os;if(ht){var as="oninput"in document;if(!as){var Xo=document.createElement("div");Xo.setAttribute("oninput","return;"),as=typeof Xo.oninput=="function"}os=as}else os=!1;Bu=os&&(!document.documentMode||9<document.documentMode)}function qo(){Zn&&(Zn.detachEvent("onpropertychange",$u),dr=Zn=null)}function $u(e){if(e.propertyName==="value"&&Fi(dr)){var t=[];Ru(t,dr,e,Dl(e)),xu(qf,t)}}function Zf(e,t,n){e==="focusin"?(qo(),Zn=t,dr=n,Zn.attachEvent("onpropertychange",$u)):e==="focusout"&&qo()}function Jf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fi(dr)}function ep(e,t){if(e==="click")return Fi(t)}function tp(e,t){if(e==="input"||e==="change")return Fi(t)}function np(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Je=typeof Object.is=="function"?Object.is:np;function fr(e,t){if(Je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_s.call(t,i)||!Je(e[i],t[i]))return!1}return!0}function Ko(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zo(e,t){var n=Ko(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ko(n)}}function Vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hu(){for(var e=window,t=li();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=li(e.document)}return t}function Ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rp(e){var t=Hu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vu(n.ownerDocument.documentElement,n)){if(r!==null&&Ul(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Zo(n,s);var l=Zo(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ip=ht&&"documentMode"in document&&11>=document.documentMode,cn=null,Ks=null,Jn=null,Zs=!1;function Jo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zs||cn==null||cn!==li(r)||(r=cn,"selectionStart"in r&&Ul(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jn&&fr(Jn,r)||(Jn=r,r=pi(Ks,"onSelect"),0<r.length&&(t=new Hl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=cn)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dn={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionend:Ar("Transition","TransitionEnd")},us={},Gu={};ht&&(Gu=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function Ri(e){if(us[e])return us[e];if(!dn[e])return e;var t=dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gu)return us[e]=t[n];return e}var Wu=Ri("animationend"),Uu=Ri("animationiteration"),Qu=Ri("animationstart"),Yu=Ri("transitionend"),Xu=new Map,ea="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $t(e,t){Xu.set(e,t),rn(t,[e])}for(var cs=0;cs<ea.length;cs++){var ds=ea[cs],sp=ds.toLowerCase(),lp=ds[0].toUpperCase()+ds.slice(1);$t(sp,"on"+lp)}$t(Wu,"onAnimationEnd");$t(Uu,"onAnimationIteration");$t(Qu,"onAnimationStart");$t("dblclick","onDoubleClick");$t("focusin","onFocus");$t("focusout","onBlur");$t(Yu,"onTransitionEnd");bn("onMouseEnter",["mouseout","mouseover"]);bn("onMouseLeave",["mouseout","mouseover"]);bn("onPointerEnter",["pointerout","pointerover"]);bn("onPointerLeave",["pointerout","pointerover"]);rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),op=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));function ta(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,sf(r,t,void 0,e),e.currentTarget=null}function qu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var l=r.length-1;0<=l;l--){var o=r[l],a=o.instance,u=o.currentTarget;if(o=o.listener,a!==s&&i.isPropagationStopped())break e;ta(i,o,u),s=a}else for(l=0;l<r.length;l++){if(o=r[l],a=o.instance,u=o.currentTarget,o=o.listener,a!==s&&i.isPropagationStopped())break e;ta(i,o,u),s=a}}}if(ai)throw e=Qs,ai=!1,Qs=null,e}function Y(e,t){var n=t[rl];n===void 0&&(n=t[rl]=new Set);var r=e+"__bubble";n.has(r)||(Ku(t,e,2,!1),n.add(r))}function fs(e,t,n){var r=0;t&&(r|=4),Ku(n,e,r,t)}var Dr="_reactListening"+Math.random().toString(36).slice(2);function pr(e){if(!e[Dr]){e[Dr]=!0,iu.forEach(function(n){n!=="selectionchange"&&(op.has(n)||fs(n,!1,e),fs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dr]||(t[Dr]=!0,fs("selectionchange",!1,t))}}function Ku(e,t,n,r){switch(Ou(t)){case 1:var i=Sf;break;case 4:i=Ef;break;default:i=$l}n=i.bind(null,t,n,e),i=void 0,!Us||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ps(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;o!==null;){if(l=Ut(o),l===null)return;if(a=l.tag,a===5||a===6){r=s=l;continue e}o=o.parentNode}}r=r.return}xu(function(){var u=s,d=Dl(n),f=[];e:{var h=Xu.get(e);if(h!==void 0){var v=Hl,y=e;switch(e){case"keypress":if(Kr(n)===0)break e;case"keydown":case"keyup":v=Df;break;case"focusin":y="focus",v=ls;break;case"focusout":y="blur",v=ls;break;case"beforeblur":case"afterblur":v=ls;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ho;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Cf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Bf;break;case Wu:case Uu:case Qu:v=jf;break;case Yu:v=Vf;break;case"scroll":v=kf;break;case"wheel":v=Gf;break;case"copy":case"cut":case"paste":v=zf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Wo}var S=(t&4)!==0,z=!S&&e==="scroll",g=S?h!==null?h+"Capture":null:h;S=[];for(var c=u,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,g!==null&&(w=or(c,g),w!=null&&S.push(mr(c,w,p)))),z)break;c=c.return}0<S.length&&(h=new v(h,y,null,n,d),f.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Gs&&(y=n.relatedTarget||n.fromElement)&&(Ut(y)||y[gt]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?Ut(y):null,y!==null&&(z=sn(y),y!==z||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(S=Ho,w="onMouseLeave",g="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=Wo,w="onPointerLeave",g="onPointerEnter",c="pointer"),z=v==null?h:fn(v),p=y==null?h:fn(y),h=new S(w,c+"leave",v,n,d),h.target=z,h.relatedTarget=p,w=null,Ut(d)===u&&(S=new S(g,c+"enter",y,n,d),S.target=p,S.relatedTarget=z,w=S),z=w,v&&y)t:{for(S=v,g=y,c=0,p=S;p;p=ln(p))c++;for(p=0,w=g;w;w=ln(w))p++;for(;0<c-p;)S=ln(S),c--;for(;0<p-c;)g=ln(g),p--;for(;c--;){if(S===g||g!==null&&S===g.alternate)break t;S=ln(S),g=ln(g)}S=null}else S=null;v!==null&&na(f,h,v,S,!1),y!==null&&z!==null&&na(f,z,y,S,!0)}}e:{if(h=u?fn(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var x=Kf;else if(Yo(h))if(Bu)x=tp;else{x=Jf;var T=Zf}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=ep);if(x&&(x=x(e,u))){Ru(f,x,n,d);break e}T&&T(e,h,u),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Rs(h,"number",h.value)}switch(T=u?fn(u):window,e){case"focusin":(Yo(T)||T.contentEditable==="true")&&(cn=T,Ks=u,Jn=null);break;case"focusout":Jn=Ks=cn=null;break;case"mousedown":Zs=!0;break;case"contextmenu":case"mouseup":case"dragend":Zs=!1,Jo(f,n,d);break;case"selectionchange":if(ip)break;case"keydown":case"keyup":Jo(f,n,d)}var b;if(Wl)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else un?Du(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Au&&n.locale!=="ko"&&(un||E!=="onCompositionStart"?E==="onCompositionEnd"&&un&&(b=Iu()):(jt=d,Vl="value"in jt?jt.value:jt.textContent,un=!0)),T=pi(u,E),0<T.length&&(E=new Go(E,e,null,n,d),f.push({event:E,listeners:T}),b?E.data=b:(b=Fu(n),b!==null&&(E.data=b)))),(b=Uf?Qf(e,n):Yf(e,n))&&(u=pi(u,"onBeforeInput"),0<u.length&&(d=new Go("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=b))}qu(f,t)})}function mr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=or(e,n),s!=null&&r.unshift(mr(e,s,i)),s=or(e,t),s!=null&&r.push(mr(e,s,i))),e=e.return}return r}function ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function na(e,t,n,r,i){for(var s=t._reactName,l=[];n!==null&&n!==r;){var o=n,a=o.alternate,u=o.stateNode;if(a!==null&&a===r)break;o.tag===5&&u!==null&&(o=u,i?(a=or(n,s),a!=null&&l.unshift(mr(n,a,o))):i||(a=or(n,s),a!=null&&l.push(mr(n,a,o)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var ap=/\r\n?/g,up=/\u0000|\uFFFD/g;function ra(e){return(typeof e=="string"?e:""+e).replace(ap,`
`).replace(up,"")}function Fr(e,t,n){if(t=ra(t),ra(e)!==t&&n)throw Error(N(425))}function mi(){}var Js=null,el=null;function tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nl=typeof setTimeout=="function"?setTimeout:void 0,cp=typeof clearTimeout=="function"?clearTimeout:void 0,ia=typeof Promise=="function"?Promise:void 0,dp=typeof queueMicrotask=="function"?queueMicrotask:typeof ia<"u"?function(e){return ia.resolve(null).then(e).catch(fp)}:nl;function fp(e){setTimeout(function(){throw e})}function ms(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),cr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);cr(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var In=Math.random().toString(36).slice(2),nt="__reactFiber$"+In,hr="__reactProps$"+In,gt="__reactContainer$"+In,rl="__reactEvents$"+In,pp="__reactListeners$"+In,mp="__reactHandles$"+In;function Ut(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sa(e);e!==null;){if(n=e[nt])return n;e=sa(e)}return t}e=n,n=e.parentNode}return null}function br(e){return e=e[nt]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Bi(e){return e[hr]||null}var il=[],pn=-1;function Vt(e){return{current:e}}function X(e){0>pn||(e.current=il[pn],il[pn]=null,pn--)}function Q(e,t){pn++,il[pn]=e.current,e.current=t}var Bt={},we=Vt(Bt),ze=Vt(!1),Kt=Bt;function Pn(e,t){var n=e.type.contextTypes;if(!n)return Bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function hi(){X(ze),X(we)}function la(e,t,n){if(we.current!==Bt)throw Error(N(168));Q(we,t),Q(ze,n)}function Zu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,Kd(e)||"Unknown",i));return ee({},n,r)}function gi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bt,Kt=we.current,Q(we,e),Q(ze,ze.current),!0}function oa(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Zu(e,t,Kt),r.__reactInternalMemoizedMergedChildContext=e,X(ze),X(we),Q(we,e)):X(ze),Q(ze,n)}var dt=null,$i=!1,hs=!1;function Ju(e){dt===null?dt=[e]:dt.push(e)}function hp(e){$i=!0,Ju(e)}function Ht(){if(!hs&&dt!==null){hs=!0;var e=0,t=W;try{var n=dt;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dt=null,$i=!1}catch(i){throw dt!==null&&(dt=dt.slice(e+1)),Tu(Fl,Ht),i}finally{W=t,hs=!1}}return null}var mn=[],hn=0,vi=null,yi=0,$e=[],Ve=0,Zt=null,ft=1,pt="";function Gt(e,t){mn[hn++]=yi,mn[hn++]=vi,vi=e,yi=t}function ec(e,t,n){$e[Ve++]=ft,$e[Ve++]=pt,$e[Ve++]=Zt,Zt=e;var r=ft;e=pt;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var s=32-Ke(t)+i;if(30<s){var l=i-i%5;s=(r&(1<<l)-1).toString(32),r>>=l,i-=l,ft=1<<32-Ke(t)+i|n<<i|r,pt=s+e}else ft=1<<s|n<<i|r,pt=e}function Ql(e){e.return!==null&&(Gt(e,1),ec(e,1,0))}function Yl(e){for(;e===vi;)vi=mn[--hn],mn[hn]=null,yi=mn[--hn],mn[hn]=null;for(;e===Zt;)Zt=$e[--Ve],$e[Ve]=null,pt=$e[--Ve],$e[Ve]=null,ft=$e[--Ve],$e[Ve]=null}var De=null,Ae=null,q=!1,qe=null;function tc(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function aa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,De=e,Ae=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,De=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:ft,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,De=e,Ae=null,!0):!1;default:return!1}}function sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ll(e){if(q){var t=Ae;if(t){var n=t;if(!aa(e,t)){if(sl(e))throw Error(N(418));t=Ot(n.nextSibling);var r=De;t&&aa(e,t)?tc(r,n):(e.flags=e.flags&-4097|2,q=!1,De=e)}}else{if(sl(e))throw Error(N(418));e.flags=e.flags&-4097|2,q=!1,De=e}}}function ua(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function Rr(e){if(e!==De)return!1;if(!q)return ua(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tl(e.type,e.memoizedProps)),t&&(t=Ae)){if(sl(e))throw nc(),Error(N(418));for(;t;)tc(e,t),t=Ot(t.nextSibling)}if(ua(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ae=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=De?Ot(e.stateNode.nextSibling):null;return!0}function nc(){for(var e=Ae;e;)e=Ot(e.nextSibling)}function jn(){Ae=De=null,q=!1}function Xl(e){qe===null?qe=[e]:qe.push(e)}var gp=wt.ReactCurrentBatchConfig;function $n(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var o=i.refs;l===null?delete o[s]:o[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Br(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ca(e){var t=e._init;return t(e._payload)}function rc(e){function t(g,c){if(e){var p=g.deletions;p===null?(g.deletions=[c],g.flags|=16):p.push(c)}}function n(g,c){if(!e)return null;for(;c!==null;)t(g,c),c=c.sibling;return null}function r(g,c){for(g=new Map;c!==null;)c.key!==null?g.set(c.key,c):g.set(c.index,c),c=c.sibling;return g}function i(g,c){return g=Ft(g,c),g.index=0,g.sibling=null,g}function s(g,c,p){return g.index=p,e?(p=g.alternate,p!==null?(p=p.index,p<c?(g.flags|=2,c):p):(g.flags|=2,c)):(g.flags|=1048576,c)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function o(g,c,p,w){return c===null||c.tag!==6?(c=Es(p,g.mode,w),c.return=g,c):(c=i(c,p),c.return=g,c)}function a(g,c,p,w){var x=p.type;return x===an?d(g,c,p.props.children,w,p.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Tt&&ca(x)===c.type)?(w=i(c,p.props),w.ref=$n(g,c,p),w.return=g,w):(w=ii(p.type,p.key,p.props,null,g.mode,w),w.ref=$n(g,c,p),w.return=g,w)}function u(g,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=ks(p,g.mode,w),c.return=g,c):(c=i(c,p.children||[]),c.return=g,c)}function d(g,c,p,w,x){return c===null||c.tag!==7?(c=qt(p,g.mode,w,x),c.return=g,c):(c=i(c,p),c.return=g,c)}function f(g,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Es(""+c,g.mode,p),c.return=g,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Mr:return p=ii(c.type,c.key,c.props,null,g.mode,p),p.ref=$n(g,null,c),p.return=g,p;case on:return c=ks(c,g.mode,p),c.return=g,c;case Tt:var w=c._init;return f(g,w(c._payload),p)}if(Un(c)||An(c))return c=qt(c,g.mode,p,null),c.return=g,c;Br(g,c)}return null}function h(g,c,p,w){var x=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return x!==null?null:o(g,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Mr:return p.key===x?a(g,c,p,w):null;case on:return p.key===x?u(g,c,p,w):null;case Tt:return x=p._init,h(g,c,x(p._payload),w)}if(Un(p)||An(p))return x!==null?null:d(g,c,p,w,null);Br(g,p)}return null}function v(g,c,p,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(p)||null,o(c,g,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Mr:return g=g.get(w.key===null?p:w.key)||null,a(c,g,w,x);case on:return g=g.get(w.key===null?p:w.key)||null,u(c,g,w,x);case Tt:var T=w._init;return v(g,c,p,T(w._payload),x)}if(Un(w)||An(w))return g=g.get(p)||null,d(c,g,w,x,null);Br(c,w)}return null}function y(g,c,p,w){for(var x=null,T=null,b=c,E=c=0,M=null;b!==null&&E<p.length;E++){b.index>E?(M=b,b=null):M=b.sibling;var C=h(g,b,p[E],w);if(C===null){b===null&&(b=M);break}e&&b&&C.alternate===null&&t(g,b),c=s(C,c,E),T===null?x=C:T.sibling=C,T=C,b=M}if(E===p.length)return n(g,b),q&&Gt(g,E),x;if(b===null){for(;E<p.length;E++)b=f(g,p[E],w),b!==null&&(c=s(b,c,E),T===null?x=b:T.sibling=b,T=b);return q&&Gt(g,E),x}for(b=r(g,b);E<p.length;E++)M=v(b,g,E,p[E],w),M!==null&&(e&&M.alternate!==null&&b.delete(M.key===null?E:M.key),c=s(M,c,E),T===null?x=M:T.sibling=M,T=M);return e&&b.forEach(function(k){return t(g,k)}),q&&Gt(g,E),x}function S(g,c,p,w){var x=An(p);if(typeof x!="function")throw Error(N(150));if(p=x.call(p),p==null)throw Error(N(151));for(var T=x=null,b=c,E=c=0,M=null,C=p.next();b!==null&&!C.done;E++,C=p.next()){b.index>E?(M=b,b=null):M=b.sibling;var k=h(g,b,C.value,w);if(k===null){b===null&&(b=M);break}e&&b&&k.alternate===null&&t(g,b),c=s(k,c,E),T===null?x=k:T.sibling=k,T=k,b=M}if(C.done)return n(g,b),q&&Gt(g,E),x;if(b===null){for(;!C.done;E++,C=p.next())C=f(g,C.value,w),C!==null&&(c=s(C,c,E),T===null?x=C:T.sibling=C,T=C);return q&&Gt(g,E),x}for(b=r(g,b);!C.done;E++,C=p.next())C=v(b,g,E,C.value,w),C!==null&&(e&&C.alternate!==null&&b.delete(C.key===null?E:C.key),c=s(C,c,E),T===null?x=C:T.sibling=C,T=C);return e&&b.forEach(function(P){return t(g,P)}),q&&Gt(g,E),x}function z(g,c,p,w){if(typeof p=="object"&&p!==null&&p.type===an&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Mr:e:{for(var x=p.key,T=c;T!==null;){if(T.key===x){if(x=p.type,x===an){if(T.tag===7){n(g,T.sibling),c=i(T,p.props.children),c.return=g,g=c;break e}}else if(T.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Tt&&ca(x)===T.type){n(g,T.sibling),c=i(T,p.props),c.ref=$n(g,T,p),c.return=g,g=c;break e}n(g,T);break}else t(g,T);T=T.sibling}p.type===an?(c=qt(p.props.children,g.mode,w,p.key),c.return=g,g=c):(w=ii(p.type,p.key,p.props,null,g.mode,w),w.ref=$n(g,c,p),w.return=g,g=w)}return l(g);case on:e:{for(T=p.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(g,c.sibling),c=i(c,p.children||[]),c.return=g,g=c;break e}else{n(g,c);break}else t(g,c);c=c.sibling}c=ks(p,g.mode,w),c.return=g,g=c}return l(g);case Tt:return T=p._init,z(g,c,T(p._payload),w)}if(Un(p))return y(g,c,p,w);if(An(p))return S(g,c,p,w);Br(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(g,c.sibling),c=i(c,p),c.return=g,g=c):(n(g,c),c=Es(p,g.mode,w),c.return=g,g=c),l(g)):n(g,c)}return z}var Mn=rc(!0),ic=rc(!1),wi=Vt(null),xi=null,gn=null,ql=null;function Kl(){ql=gn=xi=null}function Zl(e){var t=wi.current;X(wi),e._currentValue=t}function ol(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function kn(e,t){xi=e,ql=gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(ql!==e)if(e={context:e,memoizedValue:t,next:null},gn===null){if(xi===null)throw Error(N(308));gn=e,xi.dependencies={lanes:0,firstContext:e}}else gn=gn.next=e;return t}var Qt=null;function Jl(e){Qt===null?Qt=[e]:Qt.push(e)}function sc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Jl(t)):(n.next=i.next,i.next=n),t.interleaved=n,vt(e,r)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ct=!1;function eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function It(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,vt(e,n)}return i=r.interleaved,i===null?(t.next=t,Jl(r)):(t.next=i.next,i.next=t),r.interleaved=t,vt(e,n)}function Zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rl(e,n)}}function da(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Si(e,t,n,r){var i=e.updateQueue;Ct=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var a=o,u=a.next;a.next=null,l===null?s=u:l.next=u,l=a;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==l&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=a))}if(s!==null){var f=i.baseState;l=0,d=u=a=null,o=s;do{var h=o.lane,v=o.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=e,S=o;switch(h=t,v=n,S.tag){case 1:if(y=S.payload,typeof y=="function"){f=y.call(v,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,h=typeof y=="function"?y.call(v,f,h):y,h==null)break e;f=ee({},f,h);break e;case 2:Ct=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[o]:h.push(o))}else v={eventTime:v,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=v,a=f):d=d.next=v,l|=h;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;h=o,o=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=f),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);en|=l,e.lanes=l,e.memoizedState=f}}function fa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var Pr={},st=Vt(Pr),gr=Vt(Pr),vr=Vt(Pr);function Yt(e){if(e===Pr)throw Error(N(174));return e}function to(e,t){switch(Q(vr,t),Q(gr,e),Q(st,Pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$s(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$s(t,e)}X(st),Q(st,t)}function zn(){X(st),X(gr),X(vr)}function oc(e){Yt(vr.current);var t=Yt(st.current),n=$s(t,e.type);t!==n&&(Q(gr,e),Q(st,n))}function no(e){gr.current===e&&(X(st),X(gr))}var Z=Vt(0);function Ei(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gs=[];function ro(){for(var e=0;e<gs.length;e++)gs[e]._workInProgressVersionPrimary=null;gs.length=0}var Jr=wt.ReactCurrentDispatcher,vs=wt.ReactCurrentBatchConfig,Jt=0,J=null,ae=null,de=null,ki=!1,er=!1,yr=0,vp=0;function ge(){throw Error(N(321))}function io(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Je(e[n],t[n]))return!1;return!0}function so(e,t,n,r,i,s){if(Jt=s,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Jr.current=e===null||e.memoizedState===null?Sp:Ep,e=n(r,i),er){s=0;do{if(er=!1,yr=0,25<=s)throw Error(N(301));s+=1,de=ae=null,t.updateQueue=null,Jr.current=kp,e=n(r,i)}while(er)}if(Jr.current=Ti,t=ae!==null&&ae.next!==null,Jt=0,de=ae=J=null,ki=!1,t)throw Error(N(300));return e}function lo(){var e=yr!==0;return yr=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?J.memoizedState=de=e:de=de.next=e,de}function Ue(){if(ae===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=de===null?J.memoizedState:de.next;if(t!==null)de=t,ae=e;else{if(e===null)throw Error(N(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},de===null?J.memoizedState=de=e:de=de.next=e}return de}function wr(e,t){return typeof t=="function"?t(e):t}function ys(e){var t=Ue(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var o=l=null,a=null,u=s;do{var d=u.lane;if((Jt&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(o=a=f,l=r):a=a.next=f,J.lanes|=d,en|=d}u=u.next}while(u!==null&&u!==s);a===null?l=r:a.next=o,Je(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,J.lanes|=s,en|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ws(e){var t=Ue(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);Je(s,t.memoizedState)||(Me=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function ac(){}function uc(e,t){var n=J,r=Ue(),i=t(),s=!Je(r.memoizedState,i);if(s&&(r.memoizedState=i,Me=!0),r=r.queue,oo(fc.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,xr(9,dc.bind(null,n,r,i,t),void 0,null),fe===null)throw Error(N(349));Jt&30||cc(n,t,i)}return i}function cc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dc(e,t,n,r){t.value=n,t.getSnapshot=r,pc(t)&&mc(e)}function fc(e,t,n){return n(function(){pc(t)&&mc(e)})}function pc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Je(e,n)}catch{return!0}}function mc(e){var t=vt(e,1);t!==null&&Ze(t,e,1,-1)}function pa(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:e},t.queue=e,e=e.dispatch=xp.bind(null,J,e),[t.memoizedState,e]}function xr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hc(){return Ue().memoizedState}function ei(e,t,n,r){var i=tt();J.flags|=e,i.memoizedState=xr(1|t,n,void 0,r===void 0?null:r)}function Vi(e,t,n,r){var i=Ue();r=r===void 0?null:r;var s=void 0;if(ae!==null){var l=ae.memoizedState;if(s=l.destroy,r!==null&&io(r,l.deps)){i.memoizedState=xr(t,n,s,r);return}}J.flags|=e,i.memoizedState=xr(1|t,n,s,r)}function ma(e,t){return ei(8390656,8,e,t)}function oo(e,t){return Vi(2048,8,e,t)}function gc(e,t){return Vi(4,2,e,t)}function vc(e,t){return Vi(4,4,e,t)}function yc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wc(e,t,n){return n=n!=null?n.concat([e]):null,Vi(4,4,yc.bind(null,t,e),n)}function ao(){}function xc(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&io(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sc(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&io(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ec(e,t,n){return Jt&21?(Je(n,t)||(n=Pu(),J.lanes|=n,en|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=n)}function yp(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=vs.transition;vs.transition={};try{e(!1),t()}finally{W=n,vs.transition=r}}function kc(){return Ue().memoizedState}function wp(e,t,n){var r=Dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Tc(e))Cc(t,n);else if(n=sc(e,t,n,r),n!==null){var i=Ee();Ze(n,e,r,i),bc(n,t,r)}}function xp(e,t,n){var r=Dt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tc(e))Cc(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,o=s(l,n);if(i.hasEagerState=!0,i.eagerState=o,Je(o,l)){var a=t.interleaved;a===null?(i.next=i,Jl(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=sc(e,t,i,r),n!==null&&(i=Ee(),Ze(n,e,r,i),bc(n,t,r))}}function Tc(e){var t=e.alternate;return e===J||t!==null&&t===J}function Cc(e,t){er=ki=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rl(e,n)}}var Ti={readContext:We,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Sp={readContext:We,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:ma,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ei(4194308,4,yc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ei(4194308,4,e,t)},useInsertionEffect:function(e,t){return ei(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=wp.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:pa,useDebugValue:ao,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=pa(!1),t=e[0];return e=yp.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,i=tt();if(q){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),fe===null)throw Error(N(349));Jt&30||cc(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,ma(fc.bind(null,r,s,e),[e]),r.flags|=2048,xr(9,dc.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=tt(),t=fe.identifierPrefix;if(q){var n=pt,r=ft;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=yr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ep={readContext:We,useCallback:xc,useContext:We,useEffect:oo,useImperativeHandle:wc,useInsertionEffect:gc,useLayoutEffect:vc,useMemo:Sc,useReducer:ys,useRef:hc,useState:function(){return ys(wr)},useDebugValue:ao,useDeferredValue:function(e){var t=Ue();return Ec(t,ae.memoizedState,e)},useTransition:function(){var e=ys(wr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:ac,useSyncExternalStore:uc,useId:kc,unstable_isNewReconciler:!1},kp={readContext:We,useCallback:xc,useContext:We,useEffect:oo,useImperativeHandle:wc,useInsertionEffect:gc,useLayoutEffect:vc,useMemo:Sc,useReducer:ws,useRef:hc,useState:function(){return ws(wr)},useDebugValue:ao,useDeferredValue:function(e){var t=Ue();return ae===null?t.memoizedState=e:Ec(t,ae.memoizedState,e)},useTransition:function(){var e=ws(wr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:ac,useSyncExternalStore:uc,useId:kc,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function al(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hi={isMounted:function(e){return(e=e._reactInternals)?sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),i=Dt(e),s=mt(r,i);s.payload=t,n!=null&&(s.callback=n),t=It(e,s,i),t!==null&&(Ze(t,e,i,r),Zr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),i=Dt(e),s=mt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=It(e,s,i),t!==null&&(Ze(t,e,i,r),Zr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=Dt(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=It(e,i,r),t!==null&&(Ze(t,e,r,n),Zr(t,e,r))}};function ha(e,t,n,r,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,l):t.prototype&&t.prototype.isPureReactComponent?!fr(n,r)||!fr(i,s):!0}function Pc(e,t,n){var r=!1,i=Bt,s=t.contextType;return typeof s=="object"&&s!==null?s=We(s):(i=Ne(t)?Kt:we.current,r=t.contextTypes,s=(r=r!=null)?Pn(e,i):Bt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ga(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hi.enqueueReplaceState(t,t.state,null)}function ul(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},eo(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=We(s):(s=Ne(t)?Kt:we.current,i.context=Pn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(al(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Hi.enqueueReplaceState(i,i.state,null),Si(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Nn(e,t){try{var n="",r=t;do n+=qd(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function xs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function cl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Tp=typeof WeakMap=="function"?WeakMap:Map;function jc(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bi||(bi=!0,xl=r),cl(e,t)},n}function Mc(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){cl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){cl(e,t),typeof r!="function"&&(At===null?At=new Set([this]):At.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function va(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Tp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Fp.bind(null,e,t,n),t.then(e,e))}function ya(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function wa(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,It(n,t,1))),n.lanes|=1),e)}var Cp=wt.ReactCurrentOwner,Me=!1;function Se(e,t,n,r){t.child=e===null?ic(t,null,n,r):Mn(t,e.child,n,r)}function xa(e,t,n,r,i){n=n.render;var s=t.ref;return kn(t,i),r=so(e,t,n,r,s,i),n=lo(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(q&&n&&Ql(t),t.flags|=1,Se(e,t,r,i),t.child)}function Sa(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!vo(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,zc(e,t,s,r,i)):(e=ii(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:fr,n(l,r)&&e.ref===t.ref)return yt(e,t,i)}return t.flags|=1,e=Ft(s,r),e.ref=t.ref,e.return=t,t.child=e}function zc(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(fr(s,r)&&e.ref===t.ref)if(Me=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,yt(e,t,i)}return dl(e,t,n,r,i)}function Nc(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(yn,Oe),Oe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(yn,Oe),Oe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(yn,Oe),Oe|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Q(yn,Oe),Oe|=r;return Se(e,t,i,n),t.child}function _c(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function dl(e,t,n,r,i){var s=Ne(n)?Kt:we.current;return s=Pn(t,s),kn(t,i),n=so(e,t,n,r,s,i),r=lo(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(q&&r&&Ql(t),t.flags|=1,Se(e,t,n,i),t.child)}function Ea(e,t,n,r,i){if(Ne(n)){var s=!0;gi(t)}else s=!1;if(kn(t,i),t.stateNode===null)ti(e,t),Pc(t,n,r),ul(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=We(u):(u=Ne(n)?Kt:we.current,u=Pn(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==r||a!==u)&&ga(t,l,r,u),Ct=!1;var h=t.memoizedState;l.state=h,Si(t,r,l,i),a=t.memoizedState,o!==r||h!==a||ze.current||Ct?(typeof d=="function"&&(al(t,n,d,r),a=t.memoizedState),(o=Ct||ha(t,n,o,r,h,a,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,lc(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:Ye(t.type,o),l.props=u,f=t.pendingProps,h=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=We(a):(a=Ne(n)?Kt:we.current,a=Pn(t,a));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==f||h!==a)&&ga(t,l,r,a),Ct=!1,h=t.memoizedState,l.state=h,Si(t,r,l,i);var y=t.memoizedState;o!==f||h!==y||ze.current||Ct?(typeof v=="function"&&(al(t,n,v,r),y=t.memoizedState),(u=Ct||ha(t,n,u,r,h,y,a)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return fl(e,t,n,r,s,i)}function fl(e,t,n,r,i,s){_c(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&oa(t,n,!1),yt(e,t,s);r=t.stateNode,Cp.current=t;var o=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Mn(t,e.child,null,s),t.child=Mn(t,null,o,s)):Se(e,t,o,s),t.memoizedState=r.state,i&&oa(t,n,!0),t.child}function Lc(e){var t=e.stateNode;t.pendingContext?la(e,t.pendingContext,t.pendingContext!==t.context):t.context&&la(e,t.context,!1),to(e,t.containerInfo)}function ka(e,t,n,r,i){return jn(),Xl(i),t.flags|=256,Se(e,t,n,r),t.child}var pl={dehydrated:null,treeContext:null,retryLane:0};function ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function Oc(e,t,n){var r=t.pendingProps,i=Z.current,s=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Q(Z,i&1),e===null)return ll(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,s?(r=t.mode,s=t.child,l={mode:"hidden",children:l},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Ui(l,r,0,null),e=qt(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ml(n),t.memoizedState=pl,e):uo(t,l));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return bp(e,t,l,r,o,i,n);if(s){s=r.fallback,l=t.mode,i=e.child,o=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Ft(i,a),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?s=Ft(o,s):(s=qt(s,l,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,l=e.child.memoizedState,l=l===null?ml(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=pl,r}return s=e.child,e=s.sibling,r=Ft(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function uo(e,t){return t=Ui({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $r(e,t,n,r){return r!==null&&Xl(r),Mn(t,e.child,null,n),e=uo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bp(e,t,n,r,i,s,l){if(n)return t.flags&256?(t.flags&=-257,r=xs(Error(N(422))),$r(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Ui({mode:"visible",children:r.children},i,0,null),s=qt(s,i,l,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Mn(t,e.child,null,l),t.child.memoizedState=ml(l),t.memoizedState=pl,s);if(!(t.mode&1))return $r(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,s=Error(N(419)),r=xs(s,r,void 0),$r(e,t,l,r)}if(o=(l&e.childLanes)!==0,Me||o){if(r=fe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,vt(e,i),Ze(r,e,i,-1))}return go(),r=xs(Error(N(421))),$r(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Rp.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ae=Ot(i.nextSibling),De=t,q=!0,qe=null,e!==null&&($e[Ve++]=ft,$e[Ve++]=pt,$e[Ve++]=Zt,ft=e.id,pt=e.overflow,Zt=t),t=uo(t,r.children),t.flags|=4096,t)}function Ta(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ol(e.return,t,n)}function Ss(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ic(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Se(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ta(e,n,t);else if(e.tag===19)Ta(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(Z,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ei(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ss(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ei(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ss(t,!0,n,null,s);break;case"together":Ss(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ti(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),en|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pp(e,t,n){switch(t.tag){case 3:Lc(t),jn();break;case 5:oc(t);break;case 1:Ne(t.type)&&gi(t);break;case 4:to(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Q(wi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?Oc(e,t,n):(Q(Z,Z.current&1),e=yt(e,t,n),e!==null?e.sibling:null);Q(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ic(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,Nc(e,t,n)}return yt(e,t,n)}var Ac,hl,Dc,Fc;Ac=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hl=function(){};Dc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yt(st.current);var s=null;switch(n){case"input":i=Ds(e,i),r=Ds(e,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=Bs(e,i),r=Bs(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=mi)}Vs(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(l in o)o.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(sr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(o=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==o&&(a!=null||o!=null))if(u==="style")if(o){for(l in o)!o.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&o[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,o=o?o.__html:void 0,a!=null&&o!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(sr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Y("scroll",e),s||o===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Fc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Vn(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jp(e,t,n){var r=t.pendingProps;switch(Yl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Ne(t.type)&&hi(),ve(t),null;case 3:return r=t.stateNode,zn(),X(ze),X(we),ro(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Rr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qe!==null&&(kl(qe),qe=null))),hl(e,t),ve(t),null;case 5:no(t);var i=Yt(vr.current);if(n=t.type,e!==null&&t.stateNode!=null)Dc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return ve(t),null}if(e=Yt(st.current),Rr(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[nt]=t,r[hr]=s,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<Yn.length;i++)Y(Yn[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":Lo(r,s),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Y("invalid",r);break;case"textarea":Io(r,s),Y("invalid",r)}Vs(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var o=s[l];l==="children"?typeof o=="string"?r.textContent!==o&&(s.suppressHydrationWarning!==!0&&Fr(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Fr(r.textContent,o,e),i=["children",""+o]):sr.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&Y("scroll",r)}switch(n){case"input":zr(r),Oo(r,s,!0);break;case"textarea":zr(r),Ao(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=mi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[nt]=t,e[hr]=r,Ac(e,t,!1,!1),t.stateNode=e;e:{switch(l=Hs(n,r),n){case"dialog":Y("cancel",e),Y("close",e),i=r;break;case"iframe":case"object":case"embed":Y("load",e),i=r;break;case"video":case"audio":for(i=0;i<Yn.length;i++)Y(Yn[i],e);i=r;break;case"source":Y("error",e),i=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),i=r;break;case"details":Y("toggle",e),i=r;break;case"input":Lo(e,r),i=Ds(e,r),Y("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),Y("invalid",e);break;case"textarea":Io(e,r),i=Bs(e,r),Y("invalid",e);break;default:i=r}Vs(n,i),o=i;for(s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="style"?hu(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&pu(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&lr(e,a):typeof a=="number"&&lr(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sr.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Y("scroll",e):a!=null&&Ll(e,s,a,l))}switch(n){case"input":zr(e),Oo(e,r,!1);break;case"textarea":zr(e),Ao(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?wn(e,!!r.multiple,s,!1):r.defaultValue!=null&&wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=mi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Fc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Yt(vr.current),Yt(st.current),Rr(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(s=r.nodeValue!==n)&&(e=De,e!==null))switch(e.tag){case 3:Fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fr(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return ve(t),null;case 13:if(X(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Ae!==null&&t.mode&1&&!(t.flags&128))nc(),jn(),t.flags|=98560,s=!1;else if(s=Rr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(N(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[nt]=t}else jn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),s=!1}else qe!==null&&(kl(qe),qe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?ue===0&&(ue=3):go())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return zn(),hl(e,t),e===null&&pr(t.stateNode.containerInfo),ve(t),null;case 10:return Zl(t.type._context),ve(t),null;case 17:return Ne(t.type)&&hi(),ve(t),null;case 19:if(X(Z),s=t.memoizedState,s===null)return ve(t),null;if(r=(t.flags&128)!==0,l=s.rendering,l===null)if(r)Vn(s,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ei(e),l!==null){for(t.flags|=128,Vn(s,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(Z,Z.current&1|2),t.child}e=e.sibling}s.tail!==null&&re()>_n&&(t.flags|=128,r=!0,Vn(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ei(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!q)return ve(t),null}else 2*re()-s.renderingStartTime>_n&&n!==1073741824&&(t.flags|=128,r=!0,Vn(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=re(),t.sibling=null,n=Z.current,Q(Z,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return ho(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Oe&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Mp(e,t){switch(Yl(t),t.tag){case 1:return Ne(t.type)&&hi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(),X(ze),X(we),ro(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return no(t),null;case 13:if(X(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(Z),null;case 4:return zn(),null;case 10:return Zl(t.type._context),null;case 22:case 23:return ho(),null;case 24:return null;default:return null}}var Vr=!1,ye=!1,zp=typeof WeakSet=="function"?WeakSet:Set,A=null;function vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function gl(e,t,n){try{n()}catch(r){ne(e,t,r)}}var Ca=!1;function Np(e,t){if(Js=di,e=Hu(),Ul(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,o=-1,a=-1,u=0,d=0,f=e,h=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(o=l+i),f!==s||r!==0&&f.nodeType!==3||(a=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===e)break t;if(h===n&&++u===i&&(o=l),h===s&&++d===r&&(a=l),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}n=o===-1||a===-1?null:{start:o,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(el={focusedElem:e,selectionRange:n},di=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,z=y.memoizedState,g=t.stateNode,c=g.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ye(t.type,S),z);g.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){ne(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return y=Ca,Ca=!1,y}function tr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&gl(t,n,s)}i=i.next}while(i!==r)}}function Gi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rc(e){var t=e.alternate;t!==null&&(e.alternate=null,Rc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[hr],delete t[rl],delete t[pp],delete t[mp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bc(e){return e.tag===5||e.tag===3||e.tag===4}function ba(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mi));else if(r!==4&&(e=e.child,e!==null))for(yl(e,t,n),e=e.sibling;e!==null;)yl(e,t,n),e=e.sibling}function wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wl(e,t,n),e=e.sibling;e!==null;)wl(e,t,n),e=e.sibling}var pe=null,Xe=!1;function kt(e,t,n){for(n=n.child;n!==null;)$c(e,t,n),n=n.sibling}function $c(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Ai,n)}catch{}switch(n.tag){case 5:ye||vn(n,t);case 6:var r=pe,i=Xe;pe=null,kt(e,t,n),pe=r,Xe=i,pe!==null&&(Xe?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(Xe?(e=pe,n=n.stateNode,e.nodeType===8?ms(e.parentNode,n):e.nodeType===1&&ms(e,n),cr(e)):ms(pe,n.stateNode));break;case 4:r=pe,i=Xe,pe=n.stateNode.containerInfo,Xe=!0,kt(e,t,n),pe=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&gl(n,t,l),i=i.next}while(i!==r)}kt(e,t,n);break;case 1:if(!ye&&(vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){ne(n,t,o)}kt(e,t,n);break;case 21:kt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,kt(e,t,n),ye=r):kt(e,t,n);break;default:kt(e,t,n)}}function Pa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zp),t.forEach(function(r){var i=Bp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:pe=o.stateNode,Xe=!1;break e;case 3:pe=o.stateNode.containerInfo,Xe=!0;break e;case 4:pe=o.stateNode.containerInfo,Xe=!0;break e}o=o.return}if(pe===null)throw Error(N(160));$c(s,l,i),pe=null,Xe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ne(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vc(t,e),t=t.sibling}function Vc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),et(e),r&4){try{tr(3,e,e.return),Gi(3,e)}catch(S){ne(e,e.return,S)}try{tr(5,e,e.return)}catch(S){ne(e,e.return,S)}}break;case 1:Qe(t,e),et(e),r&512&&n!==null&&vn(n,n.return);break;case 5:if(Qe(t,e),et(e),r&512&&n!==null&&vn(n,n.return),e.flags&32){var i=e.stateNode;try{lr(i,"")}catch(S){ne(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,o=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&cu(i,s),Hs(o,l);var u=Hs(o,s);for(l=0;l<a.length;l+=2){var d=a[l],f=a[l+1];d==="style"?hu(i,f):d==="dangerouslySetInnerHTML"?pu(i,f):d==="children"?lr(i,f):Ll(i,d,f,u)}switch(o){case"input":Fs(i,s);break;case"textarea":du(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?wn(i,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?wn(i,!!s.multiple,s.defaultValue,!0):wn(i,!!s.multiple,s.multiple?[]:"",!1))}i[hr]=s}catch(S){ne(e,e.return,S)}}break;case 6:if(Qe(t,e),et(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(S){ne(e,e.return,S)}}break;case 3:if(Qe(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{cr(t.containerInfo)}catch(S){ne(e,e.return,S)}break;case 4:Qe(t,e),et(e);break;case 13:Qe(t,e),et(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(po=re())),r&4&&Pa(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(u=ye)||d,Qe(t,e),ye=u):Qe(t,e),et(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(A=e,d=e.child;d!==null;){for(f=A=d;A!==null;){switch(h=A,v=h.child,h.tag){case 0:case 11:case 14:case 15:tr(4,h,h.return);break;case 1:vn(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(S){ne(r,n,S)}}break;case 5:vn(h,h.return);break;case 22:if(h.memoizedState!==null){Ma(f);continue}}v!==null?(v.return=h,A=v):Ma(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,a=f.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,o.style.display=mu("display",l))}catch(S){ne(e,e.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(S){ne(e,e.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Qe(t,e),et(e),r&4&&Pa(e);break;case 21:break;default:Qe(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bc(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(lr(i,""),r.flags&=-33);var s=ba(e);wl(e,s,i);break;case 3:case 4:var l=r.stateNode.containerInfo,o=ba(e);yl(e,o,l);break;default:throw Error(N(161))}}catch(a){ne(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _p(e,t,n){A=e,Hc(e)}function Hc(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Vr;if(!l){var o=i.alternate,a=o!==null&&o.memoizedState!==null||ye;o=Vr;var u=ye;if(Vr=l,(ye=a)&&!u)for(A=i;A!==null;)l=A,a=l.child,l.tag===22&&l.memoizedState!==null?za(i):a!==null?(a.return=l,A=a):za(i);for(;s!==null;)A=s,Hc(s),s=s.sibling;A=i,Vr=o,ye=u}ja(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):ja(e)}}function ja(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Gi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&fa(t,s,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fa(t,l,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&cr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ye||t.flags&512&&vl(t)}catch(h){ne(t,t.return,h)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function Ma(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function za(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Gi(4,t)}catch(a){ne(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){ne(t,i,a)}}var s=t.return;try{vl(t)}catch(a){ne(t,s,a)}break;case 5:var l=t.return;try{vl(t)}catch(a){ne(t,l,a)}}}catch(a){ne(t,t.return,a)}if(t===e){A=null;break}var o=t.sibling;if(o!==null){o.return=t.return,A=o;break}A=t.return}}var Lp=Math.ceil,Ci=wt.ReactCurrentDispatcher,co=wt.ReactCurrentOwner,Ge=wt.ReactCurrentBatchConfig,H=0,fe=null,le=null,me=0,Oe=0,yn=Vt(0),ue=0,Sr=null,en=0,Wi=0,fo=0,nr=null,je=null,po=0,_n=1/0,ct=null,bi=!1,xl=null,At=null,Hr=!1,Mt=null,Pi=0,rr=0,Sl=null,ni=-1,ri=0;function Ee(){return H&6?re():ni!==-1?ni:ni=re()}function Dt(e){return e.mode&1?H&2&&me!==0?me&-me:gp.transition!==null?(ri===0&&(ri=Pu()),ri):(e=W,e!==0||(e=window.event,e=e===void 0?16:Ou(e.type)),e):1}function Ze(e,t,n,r){if(50<rr)throw rr=0,Sl=null,Error(N(185));Tr(e,n,r),(!(H&2)||e!==fe)&&(e===fe&&(!(H&2)&&(Wi|=n),ue===4&&Pt(e,me)),_e(e,r),n===1&&H===0&&!(t.mode&1)&&(_n=re()+500,$i&&Ht()))}function _e(e,t){var n=e.callbackNode;gf(e,t);var r=ci(e,e===fe?me:0);if(r===0)n!==null&&Ro(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ro(n),t===1)e.tag===0?hp(Na.bind(null,e)):Ju(Na.bind(null,e)),dp(function(){!(H&6)&&Ht()}),n=null;else{switch(ju(r)){case 1:n=Fl;break;case 4:n=Cu;break;case 16:n=ui;break;case 536870912:n=bu;break;default:n=ui}n=Kc(n,Gc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gc(e,t){if(ni=-1,ri=0,H&6)throw Error(N(327));var n=e.callbackNode;if(Tn()&&e.callbackNode!==n)return null;var r=ci(e,e===fe?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ji(e,r);else{t=r;var i=H;H|=2;var s=Uc();(fe!==e||me!==t)&&(ct=null,_n=re()+500,Xt(e,t));do try{Ap();break}catch(o){Wc(e,o)}while(!0);Kl(),Ci.current=s,H=i,le!==null?t=0:(fe=null,me=0,t=ue)}if(t!==0){if(t===2&&(i=Ys(e),i!==0&&(r=i,t=El(e,i))),t===1)throw n=Sr,Xt(e,0),Pt(e,r),_e(e,re()),n;if(t===6)Pt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Op(i)&&(t=ji(e,r),t===2&&(s=Ys(e),s!==0&&(r=s,t=El(e,s))),t===1))throw n=Sr,Xt(e,0),Pt(e,r),_e(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Wt(e,je,ct);break;case 3:if(Pt(e,r),(r&130023424)===r&&(t=po+500-re(),10<t)){if(ci(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=nl(Wt.bind(null,e,je,ct),t);break}Wt(e,je,ct);break;case 4:if(Pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ke(r);s=1<<l,l=t[l],l>i&&(i=l),r&=~s}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lp(r/1960))-r,10<r){e.timeoutHandle=nl(Wt.bind(null,e,je,ct),r);break}Wt(e,je,ct);break;case 5:Wt(e,je,ct);break;default:throw Error(N(329))}}}return _e(e,re()),e.callbackNode===n?Gc.bind(null,e):null}function El(e,t){var n=nr;return e.current.memoizedState.isDehydrated&&(Xt(e,t).flags|=256),e=ji(e,t),e!==2&&(t=je,je=n,t!==null&&kl(t)),e}function kl(e){je===null?je=e:je.push.apply(je,e)}function Op(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Je(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pt(e,t){for(t&=~fo,t&=~Wi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function Na(e){if(H&6)throw Error(N(327));Tn();var t=ci(e,0);if(!(t&1))return _e(e,re()),null;var n=ji(e,t);if(e.tag!==0&&n===2){var r=Ys(e);r!==0&&(t=r,n=El(e,r))}if(n===1)throw n=Sr,Xt(e,0),Pt(e,t),_e(e,re()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wt(e,je,ct),_e(e,re()),null}function mo(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(_n=re()+500,$i&&Ht())}}function tn(e){Mt!==null&&Mt.tag===0&&!(H&6)&&Tn();var t=H;H|=1;var n=Ge.transition,r=W;try{if(Ge.transition=null,W=1,e)return e()}finally{W=r,Ge.transition=n,H=t,!(H&6)&&Ht()}}function ho(){Oe=yn.current,X(yn)}function Xt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cp(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(Yl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hi();break;case 3:zn(),X(ze),X(we),ro();break;case 5:no(r);break;case 4:zn();break;case 13:X(Z);break;case 19:X(Z);break;case 10:Zl(r.type._context);break;case 22:case 23:ho()}n=n.return}if(fe=e,le=e=Ft(e.current,null),me=Oe=t,ue=0,Sr=null,fo=Wi=en=0,je=nr=null,Qt!==null){for(t=0;t<Qt.length;t++)if(n=Qt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,r.next=l}n.pending=r}Qt=null}return e}function Wc(e,t){do{var n=le;try{if(Kl(),Jr.current=Ti,ki){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ki=!1}if(Jt=0,de=ae=J=null,er=!1,yr=0,co.current=null,n===null||n.return===null){ue=1,Sr=t,le=null;break}e:{var s=e,l=n.return,o=n,a=t;if(t=me,o.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=ya(l);if(v!==null){v.flags&=-257,wa(v,l,o,s,t),v.mode&1&&va(s,u,t),t=v,a=u;var y=t.updateQueue;if(y===null){var S=new Set;S.add(a),t.updateQueue=S}else y.add(a);break e}else{if(!(t&1)){va(s,u,t),go();break e}a=Error(N(426))}}else if(q&&o.mode&1){var z=ya(l);if(z!==null){!(z.flags&65536)&&(z.flags|=256),wa(z,l,o,s,t),Xl(Nn(a,o));break e}}s=a=Nn(a,o),ue!==4&&(ue=2),nr===null?nr=[s]:nr.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=jc(s,a,t);da(s,g);break e;case 1:o=a;var c=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(At===null||!At.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=Mc(s,o,t);da(s,w);break e}}s=s.return}while(s!==null)}Yc(n)}catch(x){t=x,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function Uc(){var e=Ci.current;return Ci.current=Ti,e===null?Ti:e}function go(){(ue===0||ue===3||ue===2)&&(ue=4),fe===null||!(en&268435455)&&!(Wi&268435455)||Pt(fe,me)}function ji(e,t){var n=H;H|=2;var r=Uc();(fe!==e||me!==t)&&(ct=null,Xt(e,t));do try{Ip();break}catch(i){Wc(e,i)}while(!0);if(Kl(),H=n,Ci.current=r,le!==null)throw Error(N(261));return fe=null,me=0,ue}function Ip(){for(;le!==null;)Qc(le)}function Ap(){for(;le!==null&&!of();)Qc(le)}function Qc(e){var t=qc(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,t===null?Yc(e):le=t,co.current=null}function Yc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Mp(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,le=null;return}}else if(n=jp(n,t,Oe),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ue===0&&(ue=5)}function Wt(e,t,n){var r=W,i=Ge.transition;try{Ge.transition=null,W=1,Dp(e,t,n,r)}finally{Ge.transition=i,W=r}return null}function Dp(e,t,n,r){do Tn();while(Mt!==null);if(H&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(vf(e,s),e===fe&&(le=fe=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hr||(Hr=!0,Kc(ui,function(){return Tn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ge.transition,Ge.transition=null;var l=W;W=1;var o=H;H|=4,co.current=null,Np(e,n),Vc(n,e),rp(el),di=!!Js,el=Js=null,e.current=n,_p(n),af(),H=o,W=l,Ge.transition=s}else e.current=n;if(Hr&&(Hr=!1,Mt=e,Pi=i),s=e.pendingLanes,s===0&&(At=null),df(n.stateNode),_e(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bi)throw bi=!1,e=xl,xl=null,e;return Pi&1&&e.tag!==0&&Tn(),s=e.pendingLanes,s&1?e===Sl?rr++:(rr=0,Sl=e):rr=0,Ht(),null}function Tn(){if(Mt!==null){var e=ju(Pi),t=Ge.transition,n=W;try{if(Ge.transition=null,W=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,Pi=0,H&6)throw Error(N(331));var i=H;for(H|=4,A=e.current;A!==null;){var s=A,l=s.child;if(A.flags&16){var o=s.deletions;if(o!==null){for(var a=0;a<o.length;a++){var u=o[a];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:tr(8,d,s)}var f=d.child;if(f!==null)f.return=d,A=f;else for(;A!==null;){d=A;var h=d.sibling,v=d.return;if(Rc(d),d===u){A=null;break}if(h!==null){h.return=v,A=h;break}A=v}}}var y=s.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var z=S.sibling;S.sibling=null,S=z}while(S!==null)}}A=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,A=l;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:tr(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,A=g;break e}A=s.return}}var c=e.current;for(A=c;A!==null;){l=A;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,A=p;else e:for(l=c;A!==null;){if(o=A,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Gi(9,o)}}catch(x){ne(o,o.return,x)}if(o===l){A=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,A=w;break e}A=o.return}}if(H=i,Ht(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Ai,e)}catch{}r=!0}return r}finally{W=n,Ge.transition=t}}return!1}function _a(e,t,n){t=Nn(n,t),t=jc(e,t,1),e=It(e,t,1),t=Ee(),e!==null&&(Tr(e,1,t),_e(e,t))}function ne(e,t,n){if(e.tag===3)_a(e,e,n);else for(;t!==null;){if(t.tag===3){_a(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(At===null||!At.has(r))){e=Nn(n,e),e=Mc(t,e,1),t=It(t,e,1),e=Ee(),t!==null&&(Tr(t,1,e),_e(t,e));break}}t=t.return}}function Fp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(me&n)===n&&(ue===4||ue===3&&(me&130023424)===me&&500>re()-po?Xt(e,0):fo|=n),_e(e,t)}function Xc(e,t){t===0&&(e.mode&1?(t=Lr,Lr<<=1,!(Lr&130023424)&&(Lr=4194304)):t=1);var n=Ee();e=vt(e,t),e!==null&&(Tr(e,t,n),_e(e,n))}function Rp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xc(e,n)}function Bp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Xc(e,n)}var qc;qc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ze.current)Me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Me=!1,Pp(e,t,n);Me=!!(e.flags&131072)}else Me=!1,q&&t.flags&1048576&&ec(t,yi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ti(e,t),e=t.pendingProps;var i=Pn(t,we.current);kn(t,n),i=so(null,t,r,e,i,n);var s=lo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(s=!0,gi(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eo(t),i.updater=Hi,t.stateNode=i,i._reactInternals=t,ul(t,r,e,n),t=fl(null,t,r,!0,s,n)):(t.tag=0,q&&s&&Ql(t),Se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ti(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Vp(r),e=Ye(r,e),i){case 0:t=dl(null,t,r,e,n);break e;case 1:t=Ea(null,t,r,e,n);break e;case 11:t=xa(null,t,r,e,n);break e;case 14:t=Sa(null,t,r,Ye(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),dl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Ea(e,t,r,i,n);case 3:e:{if(Lc(t),e===null)throw Error(N(387));r=t.pendingProps,s=t.memoizedState,i=s.element,lc(e,t),Si(t,r,null,n);var l=t.memoizedState;if(r=l.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Nn(Error(N(423)),t),t=ka(e,t,r,n,i);break e}else if(r!==i){i=Nn(Error(N(424)),t),t=ka(e,t,r,n,i);break e}else for(Ae=Ot(t.stateNode.containerInfo.firstChild),De=t,q=!0,qe=null,n=ic(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jn(),r===i){t=yt(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return oc(t),e===null&&ll(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,tl(r,i)?l=null:s!==null&&tl(r,s)&&(t.flags|=32),_c(e,t),Se(e,t,l,n),t.child;case 6:return e===null&&ll(t),null;case 13:return Oc(e,t,n);case 4:return to(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mn(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),xa(e,t,r,i,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,l=i.value,Q(wi,r._currentValue),r._currentValue=l,s!==null)if(Je(s.value,l)){if(s.children===i.children&&!ze.current){t=yt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var o=s.dependencies;if(o!==null){l=s.child;for(var a=o.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=mt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ol(s.return,n,t),o.lanes|=n;break}a=a.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(N(341));l.lanes|=n,o=l.alternate,o!==null&&(o.lanes|=n),ol(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}Se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,kn(t,n),i=We(i),r=r(i),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,i=Ye(r,t.pendingProps),i=Ye(r.type,i),Sa(e,t,r,i,n);case 15:return zc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),ti(e,t),t.tag=1,Ne(r)?(e=!0,gi(t)):e=!1,kn(t,n),Pc(t,r,i),ul(t,r,i,n),fl(null,t,r,!0,e,n);case 19:return Ic(e,t,n);case 22:return Nc(e,t,n)}throw Error(N(156,t.tag))};function Kc(e,t){return Tu(e,t)}function $p(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new $p(e,t,n,r)}function vo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vp(e){if(typeof e=="function")return vo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Il)return 11;if(e===Al)return 14}return 2}function Ft(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ii(e,t,n,r,i,s){var l=2;if(r=e,typeof e=="function")vo(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case an:return qt(n.children,i,s,t);case Ol:l=8,i|=8;break;case Ls:return e=He(12,n,t,i|2),e.elementType=Ls,e.lanes=s,e;case Os:return e=He(13,n,t,i),e.elementType=Os,e.lanes=s,e;case Is:return e=He(19,n,t,i),e.elementType=Is,e.lanes=s,e;case ou:return Ui(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case su:l=10;break e;case lu:l=9;break e;case Il:l=11;break e;case Al:l=14;break e;case Tt:l=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=He(l,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function qt(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function Ui(e,t,n,r){return e=He(22,e,r,t),e.elementType=ou,e.lanes=n,e.stateNode={isHidden:!1},e}function Es(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function ks(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rs(0),this.expirationTimes=rs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yo(e,t,n,r,i,s,l,o,a){return e=new Hp(e,t,n,o,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=He(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eo(s),e}function Gp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:on,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zc(e){if(!e)return Bt;e=e._reactInternals;e:{if(sn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Zu(e,n,t)}return t}function Jc(e,t,n,r,i,s,l,o,a){return e=yo(n,r,!0,e,i,s,l,o,a),e.context=Zc(null),n=e.current,r=Ee(),i=Dt(n),s=mt(r,i),s.callback=t??null,It(n,s,i),e.current.lanes=i,Tr(e,i,r),_e(e,r),e}function Qi(e,t,n,r){var i=t.current,s=Ee(),l=Dt(i);return n=Zc(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(s,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=It(i,t,l),e!==null&&(Ze(e,i,l,s),Zr(e,i,l)),l}function Mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function La(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wo(e,t){La(e,t),(e=e.alternate)&&La(e,t)}function Wp(){return null}var ed=typeof reportError=="function"?reportError:function(e){console.error(e)};function xo(e){this._internalRoot=e}Yi.prototype.render=xo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Qi(e,t,null,null)};Yi.prototype.unmount=xo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tn(function(){Qi(null,e,null,null)}),t[gt]=null}};function Yi(e){this._internalRoot=e}Yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bt.length&&t!==0&&t<bt[n].priority;n++);bt.splice(n,0,e),n===0&&Lu(e)}};function So(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Oa(){}function Up(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Mi(l);s.call(u)}}var l=Jc(t,r,e,0,null,!1,!1,"",Oa);return e._reactRootContainer=l,e[gt]=l.current,pr(e.nodeType===8?e.parentNode:e),tn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var u=Mi(a);o.call(u)}}var a=yo(e,0,!1,null,null,!1,!1,"",Oa);return e._reactRootContainer=a,e[gt]=a.current,pr(e.nodeType===8?e.parentNode:e),tn(function(){Qi(t,a,n,r)}),a}function qi(e,t,n,r,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var o=i;i=function(){var a=Mi(l);o.call(a)}}Qi(t,l,e,i)}else l=Up(n,t,e,i,r);return Mi(l)}Mu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Qn(t.pendingLanes);n!==0&&(Rl(t,n|1),_e(t,re()),!(H&6)&&(_n=re()+500,Ht()))}break;case 13:tn(function(){var r=vt(e,1);if(r!==null){var i=Ee();Ze(r,e,1,i)}}),wo(e,1)}};Bl=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=Ee();Ze(t,e,134217728,n)}wo(e,134217728)}};zu=function(e){if(e.tag===13){var t=Dt(e),n=vt(e,t);if(n!==null){var r=Ee();Ze(n,e,t,r)}wo(e,t)}};Nu=function(){return W};_u=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};Ws=function(e,t,n){switch(t){case"input":if(Fs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Bi(r);if(!i)throw Error(N(90));uu(r),Fs(r,i)}}}break;case"textarea":du(e,n);break;case"select":t=n.value,t!=null&&wn(e,!!n.multiple,t,!1)}};yu=mo;wu=tn;var Qp={usingClientEntryPoint:!1,Events:[br,fn,Bi,gu,vu,mo]},Hn={findFiberByHostInstance:Ut,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yp={bundleType:Hn.bundleType,version:Hn.version,rendererPackageName:Hn.rendererPackageName,rendererConfig:Hn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Eu(e),e===null?null:e.stateNode},findFiberByHostInstance:Hn.findFiberByHostInstance||Wp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gr.isDisabled&&Gr.supportsFiber)try{Ai=Gr.inject(Yp),it=Gr}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qp;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!So(t))throw Error(N(200));return Gp(e,t,null,n)};Re.createRoot=function(e,t){if(!So(e))throw Error(N(299));var n=!1,r="",i=ed;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=yo(e,1,!1,null,null,n,!1,r,i),e[gt]=t.current,pr(e.nodeType===8?e.parentNode:e),new xo(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Eu(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return tn(e)};Re.hydrate=function(e,t,n){if(!Xi(t))throw Error(N(200));return qi(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!So(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",l=ed;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Jc(t,null,e,1,n??null,i,!1,s,l),e[gt]=t.current,pr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Yi(t)};Re.render=function(e,t,n){if(!Xi(t))throw Error(N(200));return qi(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!Xi(e))throw Error(N(40));return e._reactRootContainer?(tn(function(){qi(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};Re.unstable_batchedUpdates=mo;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xi(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return qi(e,t,n,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function td(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(td)}catch(e){console.error(e)}}td(),tu.exports=Re;var Xp=tu.exports,Ia=Xp;Ns.createRoot=Ia.createRoot,Ns.hydrateRoot=Ia.hydrateRoot;var nd={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Ed,function(){return function(n){function r(s){if(i[s])return i[s].exports;var l=i[s]={exports:{},id:s,loaded:!1};return n[s].call(l.exports,l,l.exports,r),l.loaded=!0,l.exports}var i={};return r.m=n,r.c=i,r.p="dist/",r(0)}([function(n,r,i){function s(O){return O&&O.__esModule?O:{default:O}}var l=Object.assign||function(O){for(var F=1;F<arguments.length;F++){var D=arguments[F];for(var B in D)Object.prototype.hasOwnProperty.call(D,B)&&(O[B]=D[B])}return O},o=i(1),a=(s(o),i(6)),u=s(a),d=i(7),f=s(d),h=i(8),v=s(h),y=i(9),S=s(y),z=i(10),g=s(z),c=i(11),p=s(c),w=i(14),x=s(w),T=[],b=!1,E={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},M=function(){var O=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(O&&(b=!0),b)return T=(0,p.default)(T,E),(0,g.default)(T,E.once),T},C=function(){T=(0,x.default)(),M()},k=function(){T.forEach(function(O,F){O.node.removeAttribute("data-aos"),O.node.removeAttribute("data-aos-easing"),O.node.removeAttribute("data-aos-duration"),O.node.removeAttribute("data-aos-delay")})},P=function(O){return O===!0||O==="mobile"&&S.default.mobile()||O==="phone"&&S.default.phone()||O==="tablet"&&S.default.tablet()||typeof O=="function"&&O()===!0},_=function(O){E=l(E,O),T=(0,x.default)();var F=document.all&&!window.atob;return P(E.disable)||F?k():(E.disableMutationObserver||v.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),E.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",E.easing),document.querySelector("body").setAttribute("data-aos-duration",E.duration),document.querySelector("body").setAttribute("data-aos-delay",E.delay),E.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?M(!0):E.startEvent==="load"?window.addEventListener(E.startEvent,function(){M(!0)}):document.addEventListener(E.startEvent,function(){M(!0)}),window.addEventListener("resize",(0,f.default)(M,E.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(M,E.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,g.default)(T,E.once)},E.throttleDelay)),E.disableMutationObserver||v.default.ready("[data-aos]",C),T)};n.exports={init:_,refresh:M,refreshHard:C}},function(n,r){},,,,,function(n,r){(function(i){function s(P,_,O){function F(U){var Pe=ie,Et=be;return ie=be=void 0,xt=U,te=P.apply(Et,Pe)}function D(U){return xt=U,oe=setTimeout(L,_),St?F(U):te}function B(U){var Pe=U-Le,Et=U-xt,bo=_-Pe;return ot?C(bo,ce-Et):bo}function j(U){var Pe=U-Le,Et=U-xt;return Le===void 0||Pe>=_||Pe<0||ot&&Et>=ce}function L(){var U=k();return j(U)?I(U):void(oe=setTimeout(L,B(U)))}function I(U){return oe=void 0,K&&ie?F(U):(ie=be=void 0,te)}function V(){oe!==void 0&&clearTimeout(oe),xt=0,ie=Le=be=oe=void 0}function G(){return oe===void 0?te:I(k())}function xe(){var U=k(),Pe=j(U);if(ie=arguments,be=this,Le=U,Pe){if(oe===void 0)return D(Le);if(ot)return oe=setTimeout(L,_),F(Le)}return oe===void 0&&(oe=setTimeout(L,_)),te}var ie,be,ce,te,oe,Le,xt=0,St=!1,ot=!1,K=!0;if(typeof P!="function")throw new TypeError(h);return _=d(_)||0,o(O)&&(St=!!O.leading,ot="maxWait"in O,ce=ot?M(d(O.maxWait)||0,_):ce,K="trailing"in O?!!O.trailing:K),xe.cancel=V,xe.flush=G,xe}function l(P,_,O){var F=!0,D=!0;if(typeof P!="function")throw new TypeError(h);return o(O)&&(F="leading"in O?!!O.leading:F,D="trailing"in O?!!O.trailing:D),s(P,_,{leading:F,maxWait:_,trailing:D})}function o(P){var _=typeof P>"u"?"undefined":f(P);return!!P&&(_=="object"||_=="function")}function a(P){return!!P&&(typeof P>"u"?"undefined":f(P))=="object"}function u(P){return(typeof P>"u"?"undefined":f(P))=="symbol"||a(P)&&E.call(P)==y}function d(P){if(typeof P=="number")return P;if(u(P))return v;if(o(P)){var _=typeof P.valueOf=="function"?P.valueOf():P;P=o(_)?_+"":_}if(typeof P!="string")return P===0?P:+P;P=P.replace(S,"");var O=g.test(P);return O||c.test(P)?p(P.slice(2),O?2:8):z.test(P)?v:+P}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},h="Expected a function",v=NaN,y="[object Symbol]",S=/^\s+|\s+$/g,z=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,c=/^0o[0-7]+$/i,p=parseInt,w=(typeof i>"u"?"undefined":f(i))=="object"&&i&&i.Object===Object&&i,x=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,T=w||x||Function("return this")(),b=Object.prototype,E=b.toString,M=Math.max,C=Math.min,k=function(){return T.Date.now()};n.exports=l}).call(r,function(){return this}())},function(n,r){(function(i){function s(k,P,_){function O(K){var U=xe,Pe=ie;return xe=ie=void 0,Le=K,ce=k.apply(Pe,U)}function F(K){return Le=K,te=setTimeout(j,P),xt?O(K):ce}function D(K){var U=K-oe,Pe=K-Le,Et=P-U;return St?M(Et,be-Pe):Et}function B(K){var U=K-oe,Pe=K-Le;return oe===void 0||U>=P||U<0||St&&Pe>=be}function j(){var K=C();return B(K)?L(K):void(te=setTimeout(j,D(K)))}function L(K){return te=void 0,ot&&xe?O(K):(xe=ie=void 0,ce)}function I(){te!==void 0&&clearTimeout(te),Le=0,xe=oe=ie=te=void 0}function V(){return te===void 0?ce:L(C())}function G(){var K=C(),U=B(K);if(xe=arguments,ie=this,oe=K,U){if(te===void 0)return F(oe);if(St)return te=setTimeout(j,P),O(oe)}return te===void 0&&(te=setTimeout(j,P)),ce}var xe,ie,be,ce,te,oe,Le=0,xt=!1,St=!1,ot=!0;if(typeof k!="function")throw new TypeError(f);return P=u(P)||0,l(_)&&(xt=!!_.leading,St="maxWait"in _,be=St?E(u(_.maxWait)||0,P):be,ot="trailing"in _?!!_.trailing:ot),G.cancel=I,G.flush=V,G}function l(k){var P=typeof k>"u"?"undefined":d(k);return!!k&&(P=="object"||P=="function")}function o(k){return!!k&&(typeof k>"u"?"undefined":d(k))=="object"}function a(k){return(typeof k>"u"?"undefined":d(k))=="symbol"||o(k)&&b.call(k)==v}function u(k){if(typeof k=="number")return k;if(a(k))return h;if(l(k)){var P=typeof k.valueOf=="function"?k.valueOf():k;k=l(P)?P+"":P}if(typeof k!="string")return k===0?k:+k;k=k.replace(y,"");var _=z.test(k);return _||g.test(k)?c(k.slice(2),_?2:8):S.test(k)?h:+k}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},f="Expected a function",h=NaN,v="[object Symbol]",y=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,g=/^0o[0-7]+$/i,c=parseInt,p=(typeof i>"u"?"undefined":d(i))=="object"&&i&&i.Object===Object&&i,w=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,x=p||w||Function("return this")(),T=Object.prototype,b=T.toString,E=Math.max,M=Math.min,C=function(){return x.Date.now()};n.exports=s}).call(r,function(){return this}())},function(n,r){function i(d){var f=void 0,h=void 0;for(f=0;f<d.length;f+=1)if(h=d[f],h.dataset&&h.dataset.aos||h.children&&i(h.children))return!0;return!1}function s(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function l(){return!!s()}function o(d,f){var h=window.document,v=s(),y=new v(a);u=f,y.observe(h.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(d){d&&d.forEach(function(f){var h=Array.prototype.slice.call(f.addedNodes),v=Array.prototype.slice.call(f.removedNodes),y=h.concat(v);if(i(y))return u()})}Object.defineProperty(r,"__esModule",{value:!0});var u=function(){};r.default={isSupported:l,ready:o}},function(n,r){function i(h,v){if(!(h instanceof v))throw new TypeError("Cannot call a class as a function")}function s(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var l=function(){function h(v,y){for(var S=0;S<y.length;S++){var z=y[S];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(v,z.key,z)}}return function(v,y,S){return y&&h(v.prototype,y),S&&h(v,S),v}}(),o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,d=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function h(){i(this,h)}return l(h,[{key:"phone",value:function(){var v=s();return!(!o.test(v)&&!a.test(v.substr(0,4)))}},{key:"mobile",value:function(){var v=s();return!(!u.test(v)&&!d.test(v.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),h}();r.default=new f},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(l,o,a){var u=l.node.getAttribute("data-aos-once");o>l.position?l.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!a&&u!=="true")&&l.node.classList.remove("aos-animate")},s=function(l,o){var a=window.pageYOffset,u=window.innerHeight;l.forEach(function(d,f){i(d,u+a,o)})};r.default=s},function(n,r,i){function s(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(r,"__esModule",{value:!0});var l=i(12),o=s(l),a=function(u,d){return u.forEach(function(f,h){f.node.classList.add("aos-init"),f.position=(0,o.default)(f.node,d.offset)}),u};r.default=a},function(n,r,i){function s(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(r,"__esModule",{value:!0});var l=i(13),o=s(l),a=function(u,d){var f=0,h=0,v=window.innerHeight,y={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(y.offset&&!isNaN(y.offset)&&(h=parseInt(y.offset)),y.anchor&&document.querySelectorAll(y.anchor)&&(u=document.querySelectorAll(y.anchor)[0]),f=(0,o.default)(u).top,y.anchorPlacement){case"top-bottom":break;case"center-bottom":f+=u.offsetHeight/2;break;case"bottom-bottom":f+=u.offsetHeight;break;case"top-center":f+=v/2;break;case"bottom-center":f+=v/2+u.offsetHeight;break;case"center-center":f+=v/2+u.offsetHeight/2;break;case"top-top":f+=v;break;case"bottom-top":f+=u.offsetHeight+v;break;case"center-top":f+=u.offsetHeight/2+v}return y.anchorPlacement||y.offset||isNaN(d)||(h=d),f+h};r.default=a},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(s){for(var l=0,o=0;s&&!isNaN(s.offsetLeft)&&!isNaN(s.offsetTop);)l+=s.offsetLeft-(s.tagName!="BODY"?s.scrollLeft:0),o+=s.offsetTop-(s.tagName!="BODY"?s.scrollTop:0),s=s.offsetParent;return{top:o,left:l}};r.default=i},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(s){return s=s||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(s,function(l){return{node:l}})};r.default=i}])})})(nd);var qp=nd.exports;const Kp=Ha(qp),Zp=({onQuoteClick:e,onAppointmentClick:t})=>{const[n,r]=R.useState(!1),[i,s]=R.useState(!1);R.useEffect(()=>{const o=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const l=(o,a)=>{o.preventDefault(),s(!1);const u=document.querySelector(a);u&&u.scrollIntoView({behavior:"smooth",block:"start"})};return m.jsxs(m.Fragment,{children:[m.jsxs("nav",{className:`navbar ${n?"scrolled":""}`,children:[m.jsxs("div",{className:"nav-container",children:[m.jsxs("a",{href:"#home",className:"logo",onClick:o=>l(o,"#home"),children:[m.jsxs("div",{className:"logo-wrapper",children:[m.jsx("img",{src:"/logo.png",alt:"iPHIX Logo",className:"logo-image",onError:o=>{var a;o.currentTarget.style.display="none",(a=o.currentTarget.nextElementSibling)==null||a.setAttribute("style","display: flex")}}),m.jsx("div",{className:"logo-fallback",style:{display:"none"},children:m.jsx("i",{className:"fas fa-mobile-alt"})})]}),m.jsx("span",{className:"logo-text",children:"iPHIX"})]}),m.jsxs("div",{className:"nav-links-desktop",children:[m.jsx("a",{href:"#home",className:"nav-link",onClick:o=>l(o,"#home"),children:"Home"}),m.jsx("a",{href:"#services",className:"nav-link",onClick:o=>l(o,"#services"),children:"Services"}),m.jsx("a",{href:"#about",className:"nav-link",onClick:o=>l(o,"#about"),children:"About"}),m.jsx("button",{className:"nav-quote-btn",onClick:e,children:"Get Quote"}),m.jsx("button",{className:"nav-book-btn",onClick:t,children:"Book Appointment"})]}),m.jsx("div",{className:`mobile-menu-btn ${i?"active":""}`,onClick:()=>s(!i),children:m.jsxs("div",{className:"menu-icon",children:[m.jsx("span",{}),m.jsx("span",{}),m.jsx("span",{})]})})]}),m.jsx("div",{className:`mobile-nav-overlay ${i?"active":""}`,children:m.jsxs("div",{className:"mobile-nav-menu",children:[m.jsx("div",{className:"mobile-nav-header",children:m.jsxs("div",{className:"mobile-logo",children:[m.jsx("img",{src:"/image.png",alt:"Logo",className:"mobile-logo-img"}),m.jsx("span",{children:"iPHIX"})]})}),m.jsxs("div",{className:"mobile-nav-links",children:[m.jsx("a",{href:"#home",onClick:o=>l(o,"#home"),className:"mobile-nav-link",children:"Home"}),m.jsx("a",{href:"#services",onClick:o=>l(o,"#services"),className:"mobile-nav-link",children:"Services"}),m.jsx("a",{href:"#about",onClick:o=>l(o,"#about"),className:"mobile-nav-link",children:"About"})]}),m.jsxs("div",{className:"mobile-nav-buttons",children:[m.jsx("button",{className:"mobile-quote-btn",onClick:e,children:"Get Quote"}),m.jsx("button",{className:"mobile-book-btn",onClick:t,children:"Book Appointment"})]})]})})]}),m.jsx("style",{children:`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(227, 27, 35, 0.3);
        }
        
        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0.8rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          cursor: pointer;
        }
        
        .logo-wrapper {
          background: #E31B23;
          border-radius: 12px;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .logo-image {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }
        
        .logo-fallback {
          color: white;
          font-size: 1.2rem;
        }
        
        .logo-text {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #FFFFFF, #E31B23);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        
        .mobile-logo-img {
          width: 30px;
          height: 30px;
          object-fit: contain;
        }
        
        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        .nav-link {
          color: #E0E0E0;
          text-decoration: none;
          font-weight: 500;
          cursor: pointer;
        }
        
        .nav-link:hover {
          color: #E31B23;
        }
        
        .nav-quote-btn, .nav-book-btn {
          padding: 0.5rem 1.2rem;
          border-radius: 40px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.85rem;
          border: none;
        }
        
        .nav-quote-btn {
          background: transparent;
          border: 1.5px solid #E31B23;
          color: #E31B23;
        }
        
        .nav-book-btn {
          background: #E31B23;
          color: white;
        }
        
        .mobile-menu-btn {
          display: none;
          cursor: pointer;
        }
        
        .menu-icon {
          width: 24px;
          height: 20px;
          position: relative;
        }
        
        .menu-icon span {
          position: absolute;
          width: 100%;
          height: 2px;
          background: white;
          transition: all 0.3s ease;
        }
        
        .menu-icon span:nth-child(1) { top: 0; }
        .menu-icon span:nth-child(2) { top: 9px; }
        .menu-icon span:nth-child(3) { top: 18px; }
        
        .mobile-menu-btn.active .menu-icon span:nth-child(1) {
          transform: rotate(45deg);
          top: 9px;
        }
        
        .mobile-menu-btn.active .menu-icon span:nth-child(2) { opacity: 0; }
        .mobile-menu-btn.active .menu-icon span:nth-child(3) {
          transform: rotate(-45deg);
          top: 9px;
        }
        
        .mobile-nav-overlay {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(20px);
          z-index: 999;
          transition: right 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .mobile-nav-overlay.active {
          right: 0;
        }
        
        .mobile-nav-menu {
          width: 100%;
          max-width: 350px;
          padding: 2rem;
          text-align: center;
        }
        
        .mobile-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 2rem;
          font-size: 1.5rem;
          font-weight: 800;
        }
        
        .mobile-logo span {
          background: linear-gradient(135deg, #FFFFFF, #E31B23);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .mobile-nav-link {
          display: block;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          text-decoration: none;
          color: white;
        }
        
        .mobile-nav-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .mobile-quote-btn, .mobile-book-btn {
          padding: 0.8rem;
          border-radius: 40px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.9rem;
          border: none;
        }
        
        .mobile-quote-btn {
          background: transparent;
          border: 1.5px solid #E31B23;
          color: #E31B23;
        }
        
        .mobile-book-btn {
          background: #E31B23;
          color: white;
        }
        
        @media (max-width: 968px) {
          .nav-links-desktop {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
          .nav-container {
            padding: 0.8rem 1rem;
          }
        }
      `})]})};function Aa(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Eo(e,t){e===void 0&&(e={}),t===void 0&&(t={});const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Aa(t[r])&&Aa(e[r])&&Object.keys(t[r]).length>0&&Eo(e[r],t[r])})}const rd={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function lt(){const e=typeof document<"u"?document:{};return Eo(e,rd),e}const Jp={document:rd,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Ce(){const e=typeof window<"u"?window:{};return Eo(e,Jp),e}function em(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function tm(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function id(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function zi(){return Date.now()}function nm(e){const t=Ce();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function rm(e,t){t===void 0&&(t="x");const n=Ce();let r,i,s;const l=nm(e);return n.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(o=>o.replace(",",".")).join(", ")),s=new n.WebKitCSSMatrix(i==="none"?"":i)):(s=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=s.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=s.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Wr(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function im(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Ie(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!im(r)){const i=Object.keys(Object(r)).filter(s=>t.indexOf(s)<0);for(let s=0,l=i.length;s<l;s+=1){const o=i[s],a=Object.getOwnPropertyDescriptor(r,o);a!==void 0&&a.enumerable&&(Wr(e[o])&&Wr(r[o])?r[o].__swiper__?e[o]=r[o]:Ie(e[o],r[o]):!Wr(e[o])&&Wr(r[o])?(e[o]={},r[o].__swiper__?e[o]=r[o]:Ie(e[o],r[o])):e[o]=r[o])}}}return e}function Ur(e,t,n){e.style.setProperty(t,n)}function sd(e){let{swiper:t,targetPosition:n,side:r}=e;const i=Ce(),s=-t.translate;let l=null,o;const a=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const u=n>s?"next":"prev",d=(h,v)=>u==="next"&&h>=v||u==="prev"&&h<=v,f=()=>{o=new Date().getTime(),l===null&&(l=o);const h=Math.max(Math.min((o-l)/a,1),0),v=.5-Math.cos(h*Math.PI)/2;let y=s+v*(n-s);if(d(y,n)&&(y=n),t.wrapperEl.scrollTo({[r]:y}),d(y,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:y})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(f)};f()}function Ki(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function rt(e,t){t===void 0&&(t="");const n=Ce(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function sm(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function lm(e,t){const n=Ce();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=sm(e,t))),r}function Ni(e){try{console.warn(e);return}catch{}}function Er(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:em(t)),n}function om(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function am(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function zt(e,t){return Ce().getComputedStyle(e,null).getPropertyValue(t)}function _i(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function ld(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function um(e,t){function n(r){r.target===e&&(t.call(e,r),e.removeEventListener("transitionend",n))}t&&e.addEventListener("transitionend",n)}function Tl(e,t,n){const r=Ce();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function at(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function cm(e){return t=>Math.abs(t)>0&&e.browser&&e.browser.need3dFix&&Math.abs(t)%90===0?t+.001:t}function Li(e,t){t===void 0&&(t=""),typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}let Ts;function dm(){const e=Ce(),t=lt();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function od(){return Ts||(Ts=dm()),Ts}let Cs;function fm(e){let{userAgent:t}=e===void 0?{}:e;const n=od(),r=Ce(),i=r.navigator.platform,s=t||r.navigator.userAgent,l={ios:!1,android:!1},o=r.screen.width,a=r.screen.height,u=s.match(/(Android);?[\s\/]+([\d.]+)?/);let d=s.match(/(iPad).*OS\s([\d_]+)/);const f=s.match(/(iPod)(.*OS\s([\d_]+))?/),h=!d&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=i==="Win32";let y=i==="MacIntel";const S=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&y&&n.touch&&S.indexOf(`${o}x${a}`)>=0&&(d=s.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),y=!1),u&&!v&&(l.os="android",l.android=!0),(d||h||f)&&(l.os="ios",l.ios=!0),l}function ad(e){return e===void 0&&(e={}),Cs||(Cs=fm(e)),Cs}let bs;function pm(){const e=Ce(),t=ad();let n=!1;function r(){const o=e.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(r()){const o=String(e.navigator.userAgent);if(o.includes("Version/")){const[a,u]=o.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=a<16||a===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),s=r(),l=s||i&&t.ios;return{isSafari:n||s,needPerspectiveFix:n,need3dFix:l,isWebView:i}}function ud(){return bs||(bs=pm()),bs}function mm(e){let{swiper:t,on:n,emit:r}=e;const i=Ce();let s=null,l=null;const o=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},a=()=>{!t||t.destroyed||!t.initialized||(s=new ResizeObserver(f=>{l=i.requestAnimationFrame(()=>{const{width:h,height:v}=t;let y=h,S=v;f.forEach(z=>{let{contentBoxSize:g,contentRect:c,target:p}=z;p&&p!==t.el||(y=c?c.width:(g[0]||g).inlineSize,S=c?c.height:(g[0]||g).blockSize)}),(y!==h||S!==v)&&o()})}),s.observe(t.el))},u=()=>{l&&i.cancelAnimationFrame(l),s&&s.unobserve&&t.el&&(s.unobserve(t.el),s=null)},d=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){a();return}i.addEventListener("resize",o),i.addEventListener("orientationchange",d)}),n("destroy",()=>{u(),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",d)})}function hm(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const s=[],l=Ce(),o=function(d,f){f===void 0&&(f={});const h=l.MutationObserver||l.WebkitMutationObserver,v=new h(y=>{if(t.__preventObserver__)return;if(y.length===1){i("observerUpdate",y[0]);return}const S=function(){i("observerUpdate",y[0])};l.requestAnimationFrame?l.requestAnimationFrame(S):l.setTimeout(S,0)});v.observe(d,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:t.isElement||(typeof f.childList>"u"?!0:f).childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),s.push(v)},a=()=>{if(t.params.observer){if(t.params.observeParents){const d=ld(t.hostEl);for(let f=0;f<d.length;f+=1)o(d[f])}o(t.hostEl,{childList:t.params.observeSlideChildren}),o(t.wrapperEl,{attributes:!1})}},u=()=>{s.forEach(d=>{d.disconnect()}),s.splice(0,s.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",a),r("destroy",u)}var gm={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(s=>{r.eventsListeners[s]||(r.eventsListeners[s]=[]),r.eventsListeners[s][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,l=new Array(s),o=0;o<s;o++)l[o]=arguments[o];t.apply(r,l)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,s)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(s,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return typeof s[0]=="string"||Array.isArray(s[0])?(t=s[0],n=s.slice(1,s.length),r=e):(t=s[0].events,n=s[0].data,r=s[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(a=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(u=>{u.apply(r,[a,...n])}),e.eventsListeners&&e.eventsListeners[a]&&e.eventsListeners[a].forEach(u=>{u.apply(r,n)})}),e}};function vm(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(zt(r,"padding-left")||0,10)-parseInt(zt(r,"padding-right")||0,10),n=n-parseInt(zt(r,"padding-top")||0,10)-parseInt(zt(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function ym(){const e=this;function t(C,k){return parseFloat(C.getPropertyValue(e.getDirectionLabel(k))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:s,rtlTranslate:l,wrongRTL:o}=e,a=e.virtual&&n.virtual.enabled,u=a?e.virtual.slides.length:e.slides.length,d=rt(i,`.${e.params.slideClass}, swiper-slide`),f=a?e.virtual.slides.length:d.length;let h=[];const v=[],y=[];let S=n.slidesOffsetBefore;typeof S=="function"&&(S=n.slidesOffsetBefore.call(e));let z=n.slidesOffsetAfter;typeof z=="function"&&(z=n.slidesOffsetAfter.call(e));const g=e.snapGrid.length,c=e.slidesGrid.length;let p=n.spaceBetween,w=-S,x=0,T=0;if(typeof s>"u")return;typeof p=="string"&&p.indexOf("%")>=0?p=parseFloat(p.replace("%",""))/100*s:typeof p=="string"&&(p=parseFloat(p)),e.virtualSize=-p,d.forEach(C=>{l?C.style.marginLeft="":C.style.marginRight="",C.style.marginBottom="",C.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Ur(r,"--swiper-centered-offset-before",""),Ur(r,"--swiper-centered-offset-after",""));const b=n.grid&&n.grid.rows>1&&e.grid;b?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();let E;const M=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(C=>typeof n.breakpoints[C].slidesPerView<"u").length>0;for(let C=0;C<f;C+=1){E=0;let k;if(d[C]&&(k=d[C]),b&&e.grid.updateSlide(C,k,d),!(d[C]&&zt(k,"display")==="none")){if(n.slidesPerView==="auto"){M&&(d[C].style[e.getDirectionLabel("width")]="");const P=getComputedStyle(k),_=k.style.transform,O=k.style.webkitTransform;if(_&&(k.style.transform="none"),O&&(k.style.webkitTransform="none"),n.roundLengths)E=e.isHorizontal()?Tl(k,"width"):Tl(k,"height");else{const F=t(P,"width"),D=t(P,"padding-left"),B=t(P,"padding-right"),j=t(P,"margin-left"),L=t(P,"margin-right"),I=P.getPropertyValue("box-sizing");if(I&&I==="border-box")E=F+j+L;else{const{clientWidth:V,offsetWidth:G}=k;E=F+D+B+j+L+(G-V)}}_&&(k.style.transform=_),O&&(k.style.webkitTransform=O),n.roundLengths&&(E=Math.floor(E))}else E=(s-(n.slidesPerView-1)*p)/n.slidesPerView,n.roundLengths&&(E=Math.floor(E)),d[C]&&(d[C].style[e.getDirectionLabel("width")]=`${E}px`);d[C]&&(d[C].swiperSlideSize=E),y.push(E),n.centeredSlides?(w=w+E/2+x/2+p,x===0&&C!==0&&(w=w-s/2-p),C===0&&(w=w-s/2-p),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),T%n.slidesPerGroup===0&&h.push(w),v.push(w)):(n.roundLengths&&(w=Math.floor(w)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup===0&&h.push(w),v.push(w),w=w+E+p),e.virtualSize+=E+p,x=E,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,s)+z,l&&o&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+p}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+p}px`),b&&e.grid.updateWrapperSize(E,h),!n.centeredSlides){const C=[];for(let k=0;k<h.length;k+=1){let P=h[k];n.roundLengths&&(P=Math.floor(P)),h[k]<=e.virtualSize-s&&C.push(P)}h=C,Math.floor(e.virtualSize-s)-Math.floor(h[h.length-1])>1&&h.push(e.virtualSize-s)}if(a&&n.loop){const C=y[0]+p;if(n.slidesPerGroup>1){const k=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),P=C*n.slidesPerGroup;for(let _=0;_<k;_+=1)h.push(h[h.length-1]+P)}for(let k=0;k<e.virtual.slidesBefore+e.virtual.slidesAfter;k+=1)n.slidesPerGroup===1&&h.push(h[h.length-1]+C),v.push(v[v.length-1]+C),e.virtualSize+=C}if(h.length===0&&(h=[0]),p!==0){const C=e.isHorizontal()&&l?"marginLeft":e.getDirectionLabel("marginRight");d.filter((k,P)=>!n.cssMode||n.loop?!0:P!==d.length-1).forEach(k=>{k.style[C]=`${p}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let C=0;y.forEach(P=>{C+=P+(p||0)}),C-=p;const k=C>s?C-s:0;h=h.map(P=>P<=0?-S:P>k?k+z:P)}if(n.centerInsufficientSlides){let C=0;y.forEach(P=>{C+=P+(p||0)}),C-=p;const k=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(C+k<s){const P=(s-C-k)/2;h.forEach((_,O)=>{h[O]=_-P}),v.forEach((_,O)=>{v[O]=_+P})}}if(Object.assign(e,{slides:d,snapGrid:h,slidesGrid:v,slidesSizesGrid:y}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Ur(r,"--swiper-centered-offset-before",`${-h[0]}px`),Ur(r,"--swiper-centered-offset-after",`${e.size/2-y[y.length-1]/2}px`);const C=-e.snapGrid[0],k=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(P=>P+C),e.slidesGrid=e.slidesGrid.map(P=>P+k)}if(f!==u&&e.emit("slidesLengthChange"),h.length!==g&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==c&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!a&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const C=`${n.containerModifierClass}backface-hidden`,k=e.el.classList.contains(C);f<=n.maxBackfaceHiddenSlides?k||e.el.classList.add(C):k&&e.el.classList.remove(C)}}function wm(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,s;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const l=o=>r?t.slides[t.getSlideIndexByData(o)]:t.slides[o];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(o=>{n.push(o)});else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){const o=t.activeIndex+s;if(o>t.slides.length&&!r)break;n.push(l(o))}else n.push(l(t.activeIndex));for(s=0;s<n.length;s+=1)if(typeof n[s]<"u"){const o=n[s].offsetHeight;i=o>i?o:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function xm(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Da=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function Sm(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:s}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let l=-e;i&&(l=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let o=n.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*t.size:typeof o=="string"&&(o=parseFloat(o));for(let a=0;a<r.length;a+=1){const u=r[a];let d=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const f=(l+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+o),h=(l-s[0]+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+o),v=-(l-d),y=v+t.slidesSizesGrid[a],S=v>=0&&v<=t.size-t.slidesSizesGrid[a],z=v>=0&&v<t.size-1||y>1&&y<=t.size||v<=0&&y>=t.size;z&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(a)),Da(u,z,n.slideVisibleClass),Da(u,S,n.slideFullyVisibleClass),u.progress=i?-f:f,u.originalProgress=i?-h:h}}function Em(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:s,isEnd:l,progressLoop:o}=t;const a=s,u=l;if(r===0)i=0,s=!0,l=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,f=Math.abs(e-t.maxTranslate())<1;s=d||i<=0,l=f||i>=1,d&&(i=0),f&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),f=t.getSlideIndexByData(t.slides.length-1),h=t.slidesGrid[d],v=t.slidesGrid[f],y=t.slidesGrid[t.slidesGrid.length-1],S=Math.abs(e);S>=h?o=(S-h)/y:o=(S+y-v)/y,o>1&&(o-=1)}Object.assign(t,{progress:i,progressLoop:o,isBeginning:s,isEnd:l}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),s&&!a&&t.emit("reachBeginning toEdge"),l&&!u&&t.emit("reachEnd toEdge"),(a&&!s||u&&!l)&&t.emit("fromEdge"),t.emit("progress",i)}const Ps=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function km(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,s=e.virtual&&n.virtual.enabled,l=e.grid&&n.grid&&n.grid.rows>1,o=f=>rt(r,`.${n.slideClass}${f}, swiper-slide${f}`)[0];let a,u,d;if(s)if(n.loop){let f=i-e.virtual.slidesBefore;f<0&&(f=e.virtual.slides.length+f),f>=e.virtual.slides.length&&(f-=e.virtual.slides.length),a=o(`[data-swiper-slide-index="${f}"]`)}else a=o(`[data-swiper-slide-index="${i}"]`);else l?(a=t.find(f=>f.column===i),d=t.find(f=>f.column===i+1),u=t.find(f=>f.column===i-1)):a=t[i];a&&(l||(d=am(a,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),u=om(a,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(f=>{Ps(f,f===a,n.slideActiveClass),Ps(f,f===d,n.slideNextClass),Ps(f,f===u,n.slidePrevClass)}),e.emitSlidesClasses()}const si=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},js=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Cl=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const l=i,o=[l-t];o.push(...Array.from({length:t}).map((a,u)=>l+r+u)),e.slides.forEach((a,u)=>{o.includes(a.column)&&js(e,u)});return}const s=i+r-1;if(e.params.rewind||e.params.loop)for(let l=i-t;l<=s+t;l+=1){const o=(l%n+n)%n;(o<i||o>s)&&js(e,o)}else for(let l=Math.max(i-t,0);l<=Math.min(s+t,n-1);l+=1)l!==i&&(l>s||l<i)&&js(e,l)};function Tm(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let s=0;s<t.length;s+=1)typeof t[s+1]<"u"?r>=t[s]&&r<t[s+1]-(t[s+1]-t[s])/2?i=s:r>=t[s]&&r<t[s+1]&&(i=s+1):r>=t[s]&&(i=s);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function Cm(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:s,realIndex:l,snapIndex:o}=t;let a=e,u;const d=v=>{let y=v-t.virtual.slidesBefore;return y<0&&(y=t.virtual.slides.length+y),y>=t.virtual.slides.length&&(y-=t.virtual.slides.length),y};if(typeof a>"u"&&(a=Tm(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const v=Math.min(i.slidesPerGroupSkip,a);u=v+Math.floor((a-v)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),a===s&&!t.params.loop){u!==o&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(a===s&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(a);return}const f=t.grid&&i.grid&&i.grid.rows>1;let h;if(t.virtual&&i.virtual.enabled&&i.loop)h=d(a);else if(f){const v=t.slides.find(S=>S.column===a);let y=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(y)&&(y=Math.max(t.slides.indexOf(v),0)),h=Math.floor(y/i.grid.rows)}else if(t.slides[a]){const v=t.slides[a].getAttribute("data-swiper-slide-index");v?h=parseInt(v,10):h=a}else h=a;Object.assign(t,{previousSnapIndex:o,snapIndex:u,previousRealIndex:l,realIndex:h,previousIndex:s,activeIndex:a}),t.initialized&&Cl(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(l!==h&&t.emit("realIndexChange"),t.emit("slideChange"))}function bm(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(o=>{!i&&o.matches&&o.matches(`.${r.slideClass}, swiper-slide`)&&(i=o)});let s=!1,l;if(i){for(let o=0;o<n.slides.length;o+=1)if(n.slides[o]===i){s=!0,l=o;break}}if(i&&s)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=l;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var Pm={updateSize:vm,updateSlides:ym,updateAutoHeight:wm,updateSlidesOffset:xm,updateSlidesProgress:Sm,updateProgress:Em,updateSlidesClasses:km,updateActiveIndex:Cm,updateClickedSlide:bm};function jm(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:s}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let l=rm(s,e);return l+=t.cssOverflowAdjustment(),r&&(l=-l),l||0}function Mm(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:s,progress:l}=n;let o=0,a=0;const u=0;n.isHorizontal()?o=r?-e:e:a=e,i.roundLengths&&(o=Math.floor(o),a=Math.floor(a)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?o:a,i.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-o:-a:i.virtualTranslate||(n.isHorizontal()?o-=n.cssOverflowAdjustment():a-=n.cssOverflowAdjustment(),s.style.transform=`translate3d(${o}px, ${a}px, ${u}px)`);let d;const f=n.maxTranslate()-n.minTranslate();f===0?d=0:d=(e-n.minTranslate())/f,d!==l&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function zm(){return-this.snapGrid[0]}function Nm(){return-this.snapGrid[this.snapGrid.length-1]}function _m(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const s=this,{params:l,wrapperEl:o}=s;if(s.animating&&l.preventInteractionOnTransition)return!1;const a=s.minTranslate(),u=s.maxTranslate();let d;if(r&&e>a?d=a:r&&e<u?d=u:d=e,s.updateProgress(d),l.cssMode){const f=s.isHorizontal();if(t===0)o[f?"scrollLeft":"scrollTop"]=-d;else{if(!s.support.smoothScroll)return sd({swiper:s,targetPosition:-d,side:f?"left":"top"}),!0;o.scrollTo({[f?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(s.setTransition(0),s.setTranslate(d),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(d),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(h){!s||s.destroyed||h.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,n&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var Lm={getTranslate:jm,setTranslate:Mm,minTranslate:zm,maxTranslate:Nm,translateTo:_m};function Om(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function cd(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:s,previousIndex:l}=t;let o=r;o||(s>l?o="next":s<l?o="prev":o="reset"),t.emit(`transition${i}`),n&&o==="reset"?t.emit(`slideResetTransition${i}`):n&&s!==l&&(t.emit(`slideChangeTransition${i}`),o==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`))}function Im(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),cd({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function Am(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),cd({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var Dm={setTransition:Om,transitionStart:Im,transitionEnd:Am};function Fm(e,t,n,r,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const s=this;let l=e;l<0&&(l=0);const{params:o,snapGrid:a,slidesGrid:u,previousIndex:d,activeIndex:f,rtlTranslate:h,wrapperEl:v,enabled:y}=s;if(!y&&!r&&!i||s.destroyed||s.animating&&o.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=s.params.speed);const S=Math.min(s.params.slidesPerGroupSkip,l);let z=S+Math.floor((l-S)/s.params.slidesPerGroup);z>=a.length&&(z=a.length-1);const g=-a[z];if(o.normalizeSlideIndex)for(let b=0;b<u.length;b+=1){const E=-Math.floor(g*100),M=Math.floor(u[b]*100),C=Math.floor(u[b+1]*100);typeof u[b+1]<"u"?E>=M&&E<C-(C-M)/2?l=b:E>=M&&E<C&&(l=b+1):E>=M&&(l=b)}if(s.initialized&&l!==f&&(!s.allowSlideNext&&(h?g>s.translate&&g>s.minTranslate():g<s.translate&&g<s.minTranslate())||!s.allowSlidePrev&&g>s.translate&&g>s.maxTranslate()&&(f||0)!==l))return!1;l!==(d||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(g);let c;l>f?c="next":l<f?c="prev":c="reset";const p=s.virtual&&s.params.virtual.enabled;if(!(p&&i)&&(h&&-g===s.translate||!h&&g===s.translate))return s.updateActiveIndex(l),o.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),o.effect!=="slide"&&s.setTranslate(g),c!=="reset"&&(s.transitionStart(n,c),s.transitionEnd(n,c)),!1;if(o.cssMode){const b=s.isHorizontal(),E=h?g:-g;if(t===0)p&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),p&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[b?"scrollLeft":"scrollTop"]=E})):v[b?"scrollLeft":"scrollTop"]=E,p&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1});else{if(!s.support.smoothScroll)return sd({swiper:s,targetPosition:E,side:b?"left":"top"}),!0;v.scrollTo({[b?"left":"top"]:E,behavior:"smooth"})}return!0}const T=ud().isSafari;return p&&!i&&T&&s.isElement&&s.virtual.update(!1,!1,l),s.setTransition(t),s.setTranslate(g),s.updateActiveIndex(l),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,r),s.transitionStart(n,c),t===0?s.transitionEnd(n,c):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(E){!s||s.destroyed||E.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,c))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function Rm(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const s=i.grid&&i.params.grid&&i.params.grid.rows>1;let l=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)l=l+i.virtual.slidesBefore;else{let o;if(s){const h=l*i.params.grid.rows;o=i.slides.find(v=>v.getAttribute("data-swiper-slide-index")*1===h).column}else o=i.getSlideIndexByData(l);const a=s?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u}=i.params;let d=i.params.slidesPerView;d==="auto"?d=i.slidesPerViewDynamic():(d=Math.ceil(parseFloat(i.params.slidesPerView,10)),u&&d%2===0&&(d=d+1));let f=a-o<d;if(u&&(f=f||o<Math.ceil(d/2)),r&&u&&i.params.slidesPerView!=="auto"&&!s&&(f=!1),f){const h=u?o<i.activeIndex?"prev":"next":o-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:h,slideTo:!0,activeSlideIndex:h==="next"?o+1:o-a+1,slideRealIndex:h==="next"?i.realIndex:void 0})}if(s){const h=l*i.params.grid.rows;l=i.slides.find(v=>v.getAttribute("data-swiper-slide-index")*1===h).column}else l=i.getSlideIndexByData(l)}return requestAnimationFrame(()=>{i.slideTo(l,t,n,r)}),i}function Bm(e,t,n){t===void 0&&(t=!0);const r=this,{enabled:i,params:s,animating:l}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let o=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(o=Math.max(r.slidesPerViewDynamic("current",!0),1));const a=r.activeIndex<s.slidesPerGroupSkip?1:o,u=r.virtual&&s.virtual.enabled;if(s.loop){if(l&&!u&&s.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+a,e,t,n)}),!0}return s.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+a,e,t,n)}function $m(e,t,n){t===void 0&&(t=!0);const r=this,{params:i,snapGrid:s,slidesGrid:l,rtlTranslate:o,enabled:a,animating:u}=r;if(!a||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const f=o?r.translate:-r.translate;function h(c){return c<0?-Math.floor(Math.abs(c)):Math.floor(c)}const v=h(f),y=s.map(c=>h(c)),S=i.freeMode&&i.freeMode.enabled;let z=s[y.indexOf(v)-1];if(typeof z>"u"&&(i.cssMode||S)){let c;s.forEach((p,w)=>{v>=p&&(c=w)}),typeof c<"u"&&(z=S?s[c]:s[c>0?c-1:c])}let g=0;if(typeof z<"u"&&(g=l.indexOf(z),g<0&&(g=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(g=g-r.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),i.rewind&&r.isBeginning){const c=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(c,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(g,e,t,n)}),!0;return r.slideTo(g,e,t,n)}function Vm(e,t,n){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function Hm(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let s=i.activeIndex;const l=Math.min(i.params.slidesPerGroupSkip,s),o=l+Math.floor((s-l)/i.params.slidesPerGroup),a=i.rtlTranslate?i.translate:-i.translate;if(a>=i.snapGrid[o]){const u=i.snapGrid[o],d=i.snapGrid[o+1];a-u>(d-u)*r&&(s+=i.params.slidesPerGroup)}else{const u=i.snapGrid[o-1],d=i.snapGrid[o];a-u<=(d-u)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,e,t,n)}function Gm(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),s;const l=e.isElement?"swiper-slide":`.${t.slideClass}`,o=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;s=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(s):i>(o?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(rt(n,`${l}[data-swiper-slide-index="${s}"]`)[0]),id(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var Wm={slideTo:Fm,slideToLoop:Rm,slideNext:Bm,slidePrev:$m,slideReset:Vm,slideToClosest:Hm,slideToClickedSlide:Gm};function Um(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const s=()=>{rt(i,`.${r.slideClass}, swiper-slide`).forEach((v,y)=>{v.setAttribute("data-swiper-slide-index",y)})},l=()=>{const h=rt(i,`.${r.slideBlankClass}`);h.forEach(v=>{v.remove()}),h.length>0&&(n.recalcSlides(),n.updateSlides())},o=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||o)&&l();const a=r.slidesPerGroup*(o?r.grid.rows:1),u=n.slides.length%a!==0,d=o&&n.slides.length%r.grid.rows!==0,f=h=>{for(let v=0;v<h;v+=1){const y=n.isElement?Er("swiper-slide",[r.slideBlankClass]):Er("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(y)}};if(u){if(r.loopAddBlankSlides){const h=a-n.slides.length%a;f(h),n.recalcSlides(),n.updateSlides()}else Ni("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else if(d){if(r.loopAddBlankSlides){const h=r.grid.rows-n.slides.length%r.grid.rows;f(h),n.recalcSlides(),n.updateSlides()}else Ni("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else s();n.loopFix({slideRealIndex:e,direction:r.centeredSlides?void 0:"next",initial:t})}function Qm(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:s,initial:l,byController:o,byMousewheel:a}=e===void 0?{}:e;const u=this;if(!u.params.loop)return;u.emit("beforeLoopFix");const{slides:d,allowSlidePrev:f,allowSlideNext:h,slidesEl:v,params:y}=u,{centeredSlides:S,initialSlide:z}=y;if(u.allowSlidePrev=!0,u.allowSlideNext=!0,u.virtual&&y.virtual.enabled){n&&(!y.centeredSlides&&u.snapIndex===0?u.slideTo(u.virtual.slides.length,0,!1,!0):y.centeredSlides&&u.snapIndex<y.slidesPerView?u.slideTo(u.virtual.slides.length+u.snapIndex,0,!1,!0):u.snapIndex===u.snapGrid.length-1&&u.slideTo(u.virtual.slidesBefore,0,!1,!0)),u.allowSlidePrev=f,u.allowSlideNext=h,u.emit("loopFix");return}let g=y.slidesPerView;g==="auto"?g=u.slidesPerViewDynamic():(g=Math.ceil(parseFloat(y.slidesPerView,10)),S&&g%2===0&&(g=g+1));const c=y.slidesPerGroupAuto?g:y.slidesPerGroup;let p=S?Math.max(c,Math.ceil(g/2)):c;p%c!==0&&(p+=c-p%c),p+=y.loopAdditionalSlides,u.loopedSlides=p;const w=u.grid&&y.grid&&y.grid.rows>1;d.length<g+p||u.params.effect==="cards"&&d.length<g+p*2?Ni("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):w&&y.grid.fill==="row"&&Ni("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const x=[],T=[],b=w?Math.ceil(d.length/y.grid.rows):d.length,E=l&&b-z<g&&!S;let M=E?z:u.activeIndex;typeof s>"u"?s=u.getSlideIndex(d.find(D=>D.classList.contains(y.slideActiveClass))):M=s;const C=r==="next"||!r,k=r==="prev"||!r;let P=0,_=0;const F=(w?d[s].column:s)+(S&&typeof i>"u"?-g/2+.5:0);if(F<p){P=Math.max(p-F,c);for(let D=0;D<p-F;D+=1){const B=D-Math.floor(D/b)*b;if(w){const j=b-B-1;for(let L=d.length-1;L>=0;L-=1)d[L].column===j&&x.push(L)}else x.push(b-B-1)}}else if(F+g>b-p){_=Math.max(F-(b-p*2),c),E&&(_=Math.max(_,g-b+z+1));for(let D=0;D<_;D+=1){const B=D-Math.floor(D/b)*b;w?d.forEach((j,L)=>{j.column===B&&T.push(L)}):T.push(B)}}if(u.__preventObserver__=!0,requestAnimationFrame(()=>{u.__preventObserver__=!1}),u.params.effect==="cards"&&d.length<g+p*2&&(T.includes(s)&&T.splice(T.indexOf(s),1),x.includes(s)&&x.splice(x.indexOf(s),1)),k&&x.forEach(D=>{d[D].swiperLoopMoveDOM=!0,v.prepend(d[D]),d[D].swiperLoopMoveDOM=!1}),C&&T.forEach(D=>{d[D].swiperLoopMoveDOM=!0,v.append(d[D]),d[D].swiperLoopMoveDOM=!1}),u.recalcSlides(),y.slidesPerView==="auto"?u.updateSlides():w&&(x.length>0&&k||T.length>0&&C)&&u.slides.forEach((D,B)=>{u.grid.updateSlide(B,D,u.slides)}),y.watchSlidesProgress&&u.updateSlidesOffset(),n){if(x.length>0&&k){if(typeof t>"u"){const D=u.slidesGrid[M],j=u.slidesGrid[M+P]-D;a?u.setTranslate(u.translate-j):(u.slideTo(M+Math.ceil(P),0,!1,!0),i&&(u.touchEventsData.startTranslate=u.touchEventsData.startTranslate-j,u.touchEventsData.currentTranslate=u.touchEventsData.currentTranslate-j))}else if(i){const D=w?x.length/y.grid.rows:x.length;u.slideTo(u.activeIndex+D,0,!1,!0),u.touchEventsData.currentTranslate=u.translate}}else if(T.length>0&&C)if(typeof t>"u"){const D=u.slidesGrid[M],j=u.slidesGrid[M-_]-D;a?u.setTranslate(u.translate-j):(u.slideTo(M-_,0,!1,!0),i&&(u.touchEventsData.startTranslate=u.touchEventsData.startTranslate-j,u.touchEventsData.currentTranslate=u.touchEventsData.currentTranslate-j))}else{const D=w?T.length/y.grid.rows:T.length;u.slideTo(u.activeIndex-D,0,!1,!0)}}if(u.allowSlidePrev=f,u.allowSlideNext=h,u.controller&&u.controller.control&&!o){const D={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(u.controller.control)?u.controller.control.forEach(B=>{!B.destroyed&&B.params.loop&&B.loopFix({...D,slideTo:B.params.slidesPerView===y.slidesPerView?n:!1})}):u.controller.control instanceof u.constructor&&u.controller.control.params.loop&&u.controller.control.loopFix({...D,slideTo:u.controller.control.params.slidesPerView===y.slidesPerView?n:!1})}u.emit("loopFix")}function Ym(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const s=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[s]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Xm={loopCreate:Um,loopFix:Qm,loopDestroy:Ym};function qm(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function Km(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var Zm={setGrabCursor:qm,unsetGrabCursor:Km};function Jm(e,t){t===void 0&&(t=this);function n(r){if(!r||r===lt()||r===Ce())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Fa(e,t,n){const r=Ce(),{params:i}=e,s=i.edgeSwipeDetection,l=i.edgeSwipeThreshold;return s&&(n<=l||n>=r.innerWidth-l)?s==="prevent"?(t.preventDefault(),!0):!1:!0}function eh(e){const t=this,n=lt();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Fa(t,r,r.targetTouches[0].pageX);return}const{params:s,touches:l,enabled:o}=t;if(!o||!s.simulateTouch&&r.pointerType==="mouse"||t.animating&&s.preventInteractionOnTransition)return;!t.animating&&s.cssMode&&s.loop&&t.loopFix();let a=r.target;if(s.touchEventsTarget==="wrapper"&&!lm(a,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!s.noSwipingClass&&s.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&d&&(a=d[0]);const f=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,h=!!(r.target&&r.target.shadowRoot);if(s.noSwiping&&(h?Jm(f,a):a.closest(f))){t.allowClick=!0;return}if(s.swipeHandler&&!a.closest(s.swipeHandler))return;l.currentX=r.pageX,l.currentY=r.pageY;const v=l.currentX,y=l.currentY;if(!Fa(t,r,v))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),l.startX=v,l.startY=y,i.touchStartTime=zi(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let S=!0;a.matches(i.focusableElements)&&(S=!1,a.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==a&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!a.matches(i.focusableElements))&&n.activeElement.blur();const z=S&&t.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||z)&&!a.isContentEditable&&r.preventDefault(),s.freeMode&&s.freeMode.enabled&&t.freeMode&&t.animating&&!s.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function th(e){const t=lt(),n=this,r=n.touchEventsData,{params:i,touches:s,rtlTranslate:l,enabled:o}=n;if(!o||!i.simulateTouch&&e.pointerType==="mouse")return;let a=e;if(a.originalEvent&&(a=a.originalEvent),a.type==="pointermove"&&(r.touchId!==null||a.pointerId!==r.pointerId))return;let u;if(a.type==="touchmove"){if(u=[...a.changedTouches].find(x=>x.identifier===r.touchId),!u||u.identifier!==r.touchId)return}else u=a;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",a);return}const d=u.pageX,f=u.pageY;if(a.preventedByNestedSwiper){s.startX=d,s.startY=f;return}if(!n.allowTouchMove){a.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(s,{startX:d,startY:f,currentX:d,currentY:f}),r.touchStartTime=zi());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(f<s.startY&&n.translate<=n.maxTranslate()||f>s.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(l&&(d>s.startX&&-n.translate<=n.maxTranslate()||d<s.startX&&-n.translate>=n.minTranslate()))return;if(!l&&(d<s.startX&&n.translate<=n.maxTranslate()||d>s.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==a.target&&a.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&a.target===t.activeElement&&a.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",a),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=d,s.currentY=f;const h=s.currentX-s.startX,v=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(h**2+v**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let x;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:h*h+v*v>=25&&(x=Math.atan2(Math.abs(v),Math.abs(h))*180/Math.PI,r.isScrolling=n.isHorizontal()?x>i.touchAngle:90-x>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",a),typeof r.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(r.startMoving=!0),r.isScrolling||a.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&a.cancelable&&a.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&a.stopPropagation();let y=n.isHorizontal()?h:v,S=n.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(y=Math.abs(y)*(l?1:-1),S=Math.abs(S)*(l?1:-1)),s.diff=y,y*=i.touchRatio,l&&(y=-y,S=-S);const z=n.touchesDirection;n.swipeDirection=y>0?"prev":"next",n.touchesDirection=S>0?"prev":"next";const g=n.params.loop&&!i.cssMode,c=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(g&&c&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const x=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(x)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",a)}if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&z!==n.touchesDirection&&g&&c&&Math.abs(y)>=1){Object.assign(s,{startX:d,startY:f,currentX:d,currentY:f,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",a),r.isMoved=!0,r.currentTranslate=y+r.startTranslate;let p=!0,w=i.resistanceRatio;if(i.touchReleaseOnEdges&&(w=0),y>0?(g&&c&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(p=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+y)**w))):y<0&&(g&&c&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(p=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-y)**w))),p&&(a.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(y)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function nh(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(x=>x.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:l,touches:o,rtlTranslate:a,slidesGrid:u,enabled:d}=t;if(!d||!l.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&l.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}l.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const f=zi(),h=f-n.touchStartTime;if(t.allowClick){const x=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(x&&x[0]||r.target,x),t.emit("tap click",r),h<300&&f-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=zi(),id(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||o.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let v;if(l.followFinger?v=a?t.translate:-t.translate:v=-n.currentTranslate,l.cssMode)return;if(l.freeMode&&l.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:v});return}const y=v>=-t.maxTranslate()&&!t.params.loop;let S=0,z=t.slidesSizesGrid[0];for(let x=0;x<u.length;x+=x<l.slidesPerGroupSkip?1:l.slidesPerGroup){const T=x<l.slidesPerGroupSkip-1?1:l.slidesPerGroup;typeof u[x+T]<"u"?(y||v>=u[x]&&v<u[x+T])&&(S=x,z=u[x+T]-u[x]):(y||v>=u[x])&&(S=x,z=u[u.length-1]-u[u.length-2])}let g=null,c=null;l.rewind&&(t.isBeginning?c=l.virtual&&l.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const p=(v-u[S])/z,w=S<l.slidesPerGroupSkip-1?1:l.slidesPerGroup;if(h>l.longSwipesMs){if(!l.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(p>=l.longSwipesRatio?t.slideTo(l.rewind&&t.isEnd?g:S+w):t.slideTo(S)),t.swipeDirection==="prev"&&(p>1-l.longSwipesRatio?t.slideTo(S+w):c!==null&&p<0&&Math.abs(p)>l.longSwipesRatio?t.slideTo(c):t.slideTo(S))}else{if(!l.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(S+w):t.slideTo(S):(t.swipeDirection==="next"&&t.slideTo(g!==null?g:S+w),t.swipeDirection==="prev"&&t.slideTo(c!==null?c:S))}}function Ra(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=e,l=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const o=l&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!o?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!l?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}function rh(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function ih(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const s=e.maxTranslate()-e.minTranslate();s===0?i=0:i=(e.translate-e.minTranslate())/s,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function sh(e){const t=this;si(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function lh(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const dd=(e,t)=>{const n=lt(),{params:r,el:i,wrapperEl:s,device:l}=e,o=!!r.nested,a=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[a]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:o}),i[a]("touchstart",e.onTouchStart,{passive:!1}),i[a]("pointerdown",e.onTouchStart,{passive:!1}),n[a]("touchmove",e.onTouchMove,{passive:!1,capture:o}),n[a]("pointermove",e.onTouchMove,{passive:!1,capture:o}),n[a]("touchend",e.onTouchEnd,{passive:!0}),n[a]("pointerup",e.onTouchEnd,{passive:!0}),n[a]("pointercancel",e.onTouchEnd,{passive:!0}),n[a]("touchcancel",e.onTouchEnd,{passive:!0}),n[a]("pointerout",e.onTouchEnd,{passive:!0}),n[a]("pointerleave",e.onTouchEnd,{passive:!0}),n[a]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[a]("click",e.onClick,!0),r.cssMode&&s[a]("scroll",e.onScroll),r.updateOnWindowResize?e[u](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",Ra,!0):e[u]("observerUpdate",Ra,!0),i[a]("load",e.onLoad,{capture:!0}))};function oh(){const e=this,{params:t}=e;e.onTouchStart=eh.bind(e),e.onTouchMove=th.bind(e),e.onTouchEnd=nh.bind(e),e.onDocumentTouchStart=lh.bind(e),t.cssMode&&(e.onScroll=ih.bind(e)),e.onClick=rh.bind(e),e.onLoad=sh.bind(e),dd(e,"on")}function ah(){dd(this,"off")}var uh={attachEvents:oh,detachEvents:ah};const Ba=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function ch(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,s=r.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const l=lt(),o=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",a=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:l.querySelector(r.breakpointsBase),u=e.getBreakpoint(s,o,a);if(!u||e.currentBreakpoint===u)return;const f=(u in s?s[u]:void 0)||e.originalParams,h=Ba(e,r),v=Ba(e,f),y=e.params.grabCursor,S=f.grabCursor,z=r.enabled;h&&!v?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!h&&v&&(i.classList.add(`${r.containerModifierClass}grid`),(f.grid.fill&&f.grid.fill==="column"||!f.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),y&&!S?e.unsetGrabCursor():!y&&S&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(T=>{if(typeof f[T]>"u")return;const b=r[T]&&r[T].enabled,E=f[T]&&f[T].enabled;b&&!E&&e[T].disable(),!b&&E&&e[T].enable()});const g=f.direction&&f.direction!==r.direction,c=r.loop&&(f.slidesPerView!==r.slidesPerView||g),p=r.loop;g&&n&&e.changeDirection(),Ie(e.params,f);const w=e.params.enabled,x=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),z&&!w?e.disable():!z&&w&&e.enable(),e.currentBreakpoint=u,e.emit("_beforeBreakpoint",f),n&&(c?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!p&&x?(e.loopCreate(t),e.updateSlides()):p&&!x&&e.loopDestroy()),e.emit("breakpoint",f)}function dh(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=Ce(),s=t==="window"?i.innerHeight:n.clientHeight,l=Object.keys(e).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const a=parseFloat(o.substr(1));return{value:s*a,point:o}}return{value:o,point:o}});l.sort((o,a)=>parseInt(o.value,10)-parseInt(a.value,10));for(let o=0;o<l.length;o+=1){const{point:a,value:u}=l[o];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=a):u<=n.clientWidth&&(r=a)}return r||"max"}var fh={setBreakpoint:ch,getBreakpoint:dh};function ph(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function mh(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:s}=e,l=ph(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...l),i.classList.add(...t),e.emitContainerClasses()}function hh(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var gh={addClasses:mh,removeClasses:hh};function vh(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,s=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>s}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var yh={checkOverflow:vh},bl={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function wh(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],s=r[i];if(typeof s!="object"||s===null){Ie(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in s)){Ie(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Ie(t,r)}}const Ms={eventsEmitter:gm,update:Pm,translate:Lm,transition:Dm,slide:Wm,loop:Xm,grabCursor:Zm,events:uh,breakpoints:fh,checkOverflow:yh,classes:gh},zs={};let ko=class ut{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=Ie({},n),t&&!n.el&&(n.el=t);const l=lt();if(n.el&&typeof n.el=="string"&&l.querySelectorAll(n.el).length>1){const d=[];return l.querySelectorAll(n.el).forEach(f=>{const h=Ie({},n,{el:f});d.push(new ut(h))}),d}const o=this;o.__swiper__=!0,o.support=od(),o.device=ad({userAgent:n.userAgent}),o.browser=ud(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],n.modules&&Array.isArray(n.modules)&&o.modules.push(...n.modules);const a={};o.modules.forEach(d=>{d({params:n,swiper:o,extendParams:wh(n,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const u=Ie({},bl,a);return o.params=Ie({},u,zs,n),o.originalParams=Ie({},o.params),o.passedParams=Ie({},n),o.params&&o.params.on&&Object.keys(o.params.on).forEach(d=>{o.on(d,o.params.on[d])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=rt(n,`.${r.slideClass}, swiper-slide`),s=_i(i[0]);return _i(t)-s}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=rt(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),l=(r.maxTranslate()-i)*t+i;r.translateTo(l,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:s,slidesGrid:l,slidesSizesGrid:o,size:a,activeIndex:u}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let f=s[u]?Math.ceil(s[u].swiperSlideSize):0,h;for(let v=u+1;v<s.length;v+=1)s[v]&&!h&&(f+=Math.ceil(s[v].swiperSlideSize),d+=1,f>a&&(h=!0));for(let v=u-1;v>=0;v-=1)s[v]&&!h&&(f+=s[v].swiperSlideSize,d+=1,f>a&&(h=!0))}else if(t==="current")for(let f=u+1;f<s.length;f+=1)(n?l[f]+o[f]-l[u]<a:l[f]-l[u]<a)&&(d+=1);else for(let f=u-1;f>=0;f-=1)l[u]-l[f]<a&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(l=>{l.complete&&si(t,l)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const l=t.rtlTranslate?t.translate*-1:t.translate,o=Math.min(Math.max(l,t.maxTranslate()),t.minTranslate());t.setTranslate(o),t.updateActiveIndex(),t.updateSlidesClasses()}let s;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const l=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;s=t.slideTo(l.length-1,0,!1,!0)}else s=t.slideTo(t.activeIndex,0,!1,!0);s||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(s=>{t==="vertical"?s.style.width="":s.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let l=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):rt(r,i())[0];return!l&&n.params.createElements&&(l=Er("div",n.params.wrapperClass),r.append(l),rt(r,`.${n.params.slideClass}`).forEach(o=>{l.append(o)})),Object.assign(n,{el:r,wrapperEl:l,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:l,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||zt(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||zt(r,"direction")==="rtl"),wrongRTL:zt(l,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(s=>{s.complete?si(n,s):s.addEventListener("load",l=>{si(n,l.target)})}),Cl(n),n.initialized=!0,Cl(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:s,wrapperEl:l,slides:o}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),s&&typeof s!="string"&&s.removeAttribute("style"),l&&l.removeAttribute("style"),o&&o.length&&o.forEach(a=>{a.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),a.removeAttribute("style"),a.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(a=>{r.off(a)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),tm(r)),r.destroyed=!0),null}static extendDefaults(t){Ie(zs,t)}static get extendedDefaults(){return zs}static get defaults(){return bl}static installModule(t){ut.prototype.__modules__||(ut.prototype.__modules__=[]);const n=ut.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>ut.installModule(n)),ut):(ut.installModule(t),ut)}};Object.keys(Ms).forEach(e=>{Object.keys(Ms[e]).forEach(t=>{ko.prototype[t]=Ms[e][t]})});ko.use([mm,hm]);const fd=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function nn(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Cn(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:nn(t[r])&&nn(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Cn(e[r],t[r]):e[r]=t[r]})}function pd(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function md(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function hd(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function gd(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function xh(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function Sh(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:s,prevEl:l,scrollbarEl:o,paginationEl:a}=e;const u=i.filter(M=>M!=="children"&&M!=="direction"&&M!=="wrapperClass"),{params:d,pagination:f,navigation:h,scrollbar:v,virtual:y,thumbs:S}=t;let z,g,c,p,w,x,T,b;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&!r.thumbs.swiper.destroyed&&d.thumbs&&(!d.thumbs.swiper||d.thumbs.swiper.destroyed)&&(z=!0),i.includes("controller")&&r.controller&&r.controller.control&&d.controller&&!d.controller.control&&(g=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||a)&&(d.pagination||d.pagination===!1)&&f&&!f.el&&(c=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||o)&&(d.scrollbar||d.scrollbar===!1)&&v&&!v.el&&(p=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||l)&&(r.navigation.nextEl||s)&&(d.navigation||d.navigation===!1)&&h&&!h.prevEl&&!h.nextEl&&(w=!0);const E=M=>{t[M]&&(t[M].destroy(),M==="navigation"?(t.isElement&&(t[M].prevEl.remove(),t[M].nextEl.remove()),d[M].prevEl=void 0,d[M].nextEl=void 0,t[M].prevEl=void 0,t[M].nextEl=void 0):(t.isElement&&t[M].el.remove(),d[M].el=void 0,t[M].el=void 0))};i.includes("loop")&&t.isElement&&(d.loop&&!r.loop?x=!0:!d.loop&&r.loop?T=!0:b=!0),u.forEach(M=>{if(nn(d[M])&&nn(r[M]))Object.assign(d[M],r[M]),(M==="navigation"||M==="pagination"||M==="scrollbar")&&"enabled"in r[M]&&!r[M].enabled&&E(M);else{const C=r[M];(C===!0||C===!1)&&(M==="navigation"||M==="pagination"||M==="scrollbar")?C===!1&&E(M):d[M]=r[M]}}),u.includes("controller")&&!g&&t.controller&&t.controller.control&&d.controller&&d.controller.control&&(t.controller.control=d.controller.control),i.includes("children")&&n&&y&&d.virtual.enabled?(y.slides=n,y.update(!0)):i.includes("virtual")&&y&&d.virtual.enabled&&(n&&(y.slides=n),y.update(!0)),i.includes("children")&&n&&d.loop&&(b=!0),z&&S.init()&&S.update(!0),g&&(t.controller.control=d.controller.control),c&&(t.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-pagination"),a.part.add("pagination"),t.el.appendChild(a)),a&&(d.pagination.el=a),f.init(),f.render(),f.update()),p&&(t.isElement&&(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-scrollbar"),o.part.add("scrollbar"),t.el.appendChild(o)),o&&(d.scrollbar.el=o),v.init(),v.updateSize(),v.setTranslate()),w&&(t.isElement&&((!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-next"),Li(s,t.hostEl.constructor.nextButtonSvg),s.part.add("button-next"),t.el.appendChild(s)),(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-prev"),Li(l,t.hostEl.constructor.prevButtonSvg),l.part.add("button-prev"),t.el.appendChild(l))),s&&(d.navigation.nextEl=s),l&&(d.navigation.prevEl=l),h.init(),h.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(x||b)&&t.loopDestroy(),(T||b)&&t.loopCreate(),t.update()}function Eh(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};Cn(n,bl),n._emitClasses=!0,n.init=!1;const s={},l=fd.map(a=>a.replace(/_/,"")),o=Object.assign({},e);return Object.keys(o).forEach(a=>{typeof e[a]>"u"||(l.indexOf(a)>=0?nn(e[a])?(n[a]={},i[a]={},Cn(n[a],e[a]),Cn(i[a],e[a])):(n[a]=e[a],i[a]=e[a]):a.search(/on[A-Z]/)===0&&typeof e[a]=="function"?t?r[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:n.on[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:s[a]=e[a])}),["navigation","pagination","scrollbar"].forEach(a=>{n[a]===!0&&(n[a]={}),n[a]===!1&&delete n[a]}),{params:n,passedParams:i,rest:s,events:r}}function kh(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:s,scrollbarEl:l,swiper:o}=e;pd(t)&&r&&i&&(o.params.navigation.nextEl=r,o.originalParams.navigation.nextEl=r,o.params.navigation.prevEl=i,o.originalParams.navigation.prevEl=i),md(t)&&s&&(o.params.pagination.el=s,o.originalParams.pagination.el=s),hd(t)&&l&&(o.params.scrollbar.el=l,o.originalParams.scrollbar.el=l),o.init(n)}function Th(e,t,n,r,i){const s=[];if(!t)return s;const l=a=>{s.indexOf(a)<0&&s.push(a)};if(n&&r){const a=r.map(i),u=n.map(i);a.join("")!==u.join("")&&l("children"),r.length!==n.length&&l("children")}return fd.filter(a=>a[0]==="_").map(a=>a.replace(/_/,"")).forEach(a=>{if(a in e&&a in t)if(nn(e[a])&&nn(t[a])){const u=Object.keys(e[a]),d=Object.keys(t[a]);u.length!==d.length?l(a):(u.forEach(f=>{e[a][f]!==t[a][f]&&l(a)}),d.forEach(f=>{e[a][f]!==t[a][f]&&l(a)}))}else e[a]!==t[a]&&l(a)}),s}const Ch=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Oi(){return Oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oi.apply(this,arguments)}function vd(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function yd(e){const t=[];return se.Children.toArray(e).forEach(n=>{vd(n)?t.push(n):n.props&&n.props.children&&yd(n.props.children).forEach(r=>t.push(r))}),t}function bh(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return se.Children.toArray(e).forEach(r=>{if(vd(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=yd(r.props.children);i.length>0?i.forEach(s=>t.push(s)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function Ph(e,t,n){if(!n)return null;const r=d=>{let f=d;return d<0?f=t.length+d:f>=t.length&&(f=f-t.length),f},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:s,to:l}=n,o=e.params.loop?-t.length:0,a=e.params.loop?t.length*2:t.length,u=[];for(let d=o;d<a;d+=1)d>=s&&d<=l&&u.push(t[r(d)]);return u.map((d,f)=>se.cloneElement(d,{swiper:e,style:i,key:d.props.virtualIndex||d.key||`slide-${f}`}))}function ir(e,t){return typeof window>"u"?R.useEffect(e,t):R.useLayoutEffect(e,t)}const $a=R.createContext(null),jh=R.createContext(null),To=R.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:s,onSwiper:l,...o}=e===void 0?{}:e,a=!1;const[u,d]=R.useState("swiper"),[f,h]=R.useState(null),[v,y]=R.useState(!1),S=R.useRef(!1),z=R.useRef(null),g=R.useRef(null),c=R.useRef(null),p=R.useRef(null),w=R.useRef(null),x=R.useRef(null),T=R.useRef(null),b=R.useRef(null),{params:E,passedParams:M,rest:C,events:k}=Eh(o),{slides:P,slots:_}=bh(s),O=()=>{y(!v)};Object.assign(E.on,{_containerClasses(L,I){d(I)}});const F=()=>{Object.assign(E.on,k),a=!0;const L={...E};if(delete L.wrapperClass,g.current=new ko(L),g.current.virtual&&g.current.params.virtual.enabled){g.current.virtual.slides=P;const I={cache:!1,slides:P,renderExternal:h,renderExternalUpdate:!1};Cn(g.current.params.virtual,I),Cn(g.current.originalParams.virtual,I)}};z.current||F(),g.current&&g.current.on("_beforeBreakpoint",O);const D=()=>{a||!k||!g.current||Object.keys(k).forEach(L=>{g.current.on(L,k[L])})},B=()=>{!k||!g.current||Object.keys(k).forEach(L=>{g.current.off(L,k[L])})};R.useEffect(()=>()=>{g.current&&g.current.off("_beforeBreakpoint",O)}),R.useEffect(()=>{!S.current&&g.current&&(g.current.emitSlidesClasses(),S.current=!0)}),ir(()=>{if(t&&(t.current=z.current),!!z.current)return g.current.destroyed&&F(),kh({el:z.current,nextEl:w.current,prevEl:x.current,paginationEl:T.current,scrollbarEl:b.current,swiper:g.current},E),l&&!g.current.destroyed&&l(g.current),()=>{g.current&&!g.current.destroyed&&g.current.destroy(!0,!1)}},[]),ir(()=>{D();const L=Th(M,c.current,P,p.current,I=>I.key);return c.current=M,p.current=P,L.length&&g.current&&!g.current.destroyed&&Sh({swiper:g.current,slides:P,passedParams:M,changedParams:L,nextEl:w.current,prevEl:x.current,scrollbarEl:b.current,paginationEl:T.current}),()=>{B()}}),ir(()=>{Ch(g.current)},[f]);function j(){return E.virtual?Ph(g.current,P,f):P.map((L,I)=>se.cloneElement(L,{swiper:g.current,swiperSlideIndex:I}))}return se.createElement(r,Oi({ref:z,className:gd(`${u}${n?` ${n}`:""}`)},C),se.createElement(jh.Provider,{value:g.current},_["container-start"],se.createElement(i,{className:xh(E.wrapperClass)},_["wrapper-start"],j(),_["wrapper-end"]),pd(E)&&se.createElement(se.Fragment,null,se.createElement("div",{ref:x,className:"swiper-button-prev"}),se.createElement("div",{ref:w,className:"swiper-button-next"})),hd(E)&&se.createElement("div",{ref:b,className:"swiper-scrollbar"}),md(E)&&se.createElement("div",{ref:T,className:"swiper-pagination"}),_["container-end"]))});To.displayName="Swiper";const Co=R.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:s,zoom:l,lazy:o,virtualIndex:a,swiperSlideIndex:u,...d}=e===void 0?{}:e;const f=R.useRef(null),[h,v]=R.useState("swiper-slide"),[y,S]=R.useState(!1);function z(w,x,T){x===f.current&&v(T)}ir(()=>{if(typeof u<"u"&&(f.current.swiperSlideIndex=u),t&&(t.current=f.current),!(!f.current||!s)){if(s.destroyed){h!=="swiper-slide"&&v("swiper-slide");return}return s.on("_slideClass",z),()=>{s&&s.off("_slideClass",z)}}}),ir(()=>{s&&f.current&&!s.destroyed&&v(s.getSlideClasses(f.current))},[s]);const g={isActive:h.indexOf("swiper-slide-active")>=0,isVisible:h.indexOf("swiper-slide-visible")>=0,isPrev:h.indexOf("swiper-slide-prev")>=0,isNext:h.indexOf("swiper-slide-next")>=0},c=()=>typeof r=="function"?r(g):r,p=()=>{S(!0)};return se.createElement(n,Oi({ref:f,className:gd(`${h}${i?` ${i}`:""}`),"data-swiper-slide-index":a,onLoad:p},d),l&&se.createElement($a.Provider,{value:g},se.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof l=="number"?l:void 0},c(),o&&!y&&se.createElement("div",{className:"swiper-lazy-preloader"}))),!l&&se.createElement($a.Provider,{value:g},c(),o&&!y&&se.createElement("div",{className:"swiper-lazy-preloader"})))});Co.displayName="SwiperSlide";function Mh(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let s=rt(e.el,`.${r[i]}`)[0];s||(s=Er("div",r[i]),s.className=r[i],e.el.append(s)),n[i]=s,t[i]=s}}),n}function Gn(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function zh(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const s="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:c=>c,formatFractionTotal:c=>c,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),t.pagination={el:null,bullets:[]};let l,o=0;function a(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function u(c,p){const{bulletActiveClass:w}=t.params.pagination;c&&(c=c[`${p==="prev"?"previous":"next"}ElementSibling`],c&&(c.classList.add(`${w}-${p}`),c=c[`${p==="prev"?"previous":"next"}ElementSibling`],c&&c.classList.add(`${w}-${p}-${p}`)))}function d(c,p,w){if(c=c%w,p=p%w,p===c+1)return"next";if(p===c-1)return"previous"}function f(c){const p=c.target.closest(Gn(t.params.pagination.bulletClass));if(!p)return;c.preventDefault();const w=_i(p)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===w)return;const x=d(t.realIndex,w,t.slides.length);x==="next"?t.slideNext():x==="previous"?t.slidePrev():t.slideToLoop(w)}else t.slideTo(w)}function h(){const c=t.rtl,p=t.params.pagination;if(a())return;let w=t.pagination.el;w=at(w);let x,T;const b=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,E=t.params.loop?Math.ceil(b/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(T=t.previousRealIndex||0,x=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(x=t.snapIndex,T=t.previousSnapIndex):(T=t.previousIndex||0,x=t.activeIndex||0),p.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const M=t.pagination.bullets;let C,k,P;if(p.dynamicBullets&&(l=Tl(M[0],t.isHorizontal()?"width":"height"),w.forEach(_=>{_.style[t.isHorizontal()?"width":"height"]=`${l*(p.dynamicMainBullets+4)}px`}),p.dynamicMainBullets>1&&T!==void 0&&(o+=x-(T||0),o>p.dynamicMainBullets-1?o=p.dynamicMainBullets-1:o<0&&(o=0)),C=Math.max(x-o,0),k=C+(Math.min(M.length,p.dynamicMainBullets)-1),P=(k+C)/2),M.forEach(_=>{const O=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(F=>`${p.bulletActiveClass}${F}`)].map(F=>typeof F=="string"&&F.includes(" ")?F.split(" "):F).flat();_.classList.remove(...O)}),w.length>1)M.forEach(_=>{const O=_i(_);O===x?_.classList.add(...p.bulletActiveClass.split(" ")):t.isElement&&_.setAttribute("part","bullet"),p.dynamicBullets&&(O>=C&&O<=k&&_.classList.add(...`${p.bulletActiveClass}-main`.split(" ")),O===C&&u(_,"prev"),O===k&&u(_,"next"))});else{const _=M[x];if(_&&_.classList.add(...p.bulletActiveClass.split(" ")),t.isElement&&M.forEach((O,F)=>{O.setAttribute("part",F===x?"bullet-active":"bullet")}),p.dynamicBullets){const O=M[C],F=M[k];for(let D=C;D<=k;D+=1)M[D]&&M[D].classList.add(...`${p.bulletActiveClass}-main`.split(" "));u(O,"prev"),u(F,"next")}}if(p.dynamicBullets){const _=Math.min(M.length,p.dynamicMainBullets+4),O=(l*_-l)/2-P*l,F=c?"right":"left";M.forEach(D=>{D.style[t.isHorizontal()?F:"top"]=`${O}px`})}}w.forEach((M,C)=>{if(p.type==="fraction"&&(M.querySelectorAll(Gn(p.currentClass)).forEach(k=>{k.textContent=p.formatFractionCurrent(x+1)}),M.querySelectorAll(Gn(p.totalClass)).forEach(k=>{k.textContent=p.formatFractionTotal(E)})),p.type==="progressbar"){let k;p.progressbarOpposite?k=t.isHorizontal()?"vertical":"horizontal":k=t.isHorizontal()?"horizontal":"vertical";const P=(x+1)/E;let _=1,O=1;k==="horizontal"?_=P:O=P,M.querySelectorAll(Gn(p.progressbarFillClass)).forEach(F=>{F.style.transform=`translate3d(0,0,0) scaleX(${_}) scaleY(${O})`,F.style.transitionDuration=`${t.params.speed}ms`})}p.type==="custom"&&p.renderCustom?(Li(M,p.renderCustom(t,x+1,E)),C===0&&i("paginationRender",M)):(C===0&&i("paginationRender",M),i("paginationUpdate",M)),t.params.watchOverflow&&t.enabled&&M.classList[t.isLocked?"add":"remove"](p.lockClass)})}function v(){const c=t.params.pagination;if(a())return;const p=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let w=t.pagination.el;w=at(w);let x="";if(c.type==="bullets"){let T=t.params.loop?Math.ceil(p/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&T>p&&(T=p);for(let b=0;b<T;b+=1)c.renderBullet?x+=c.renderBullet.call(t,b,c.bulletClass):x+=`<${c.bulletElement} ${t.isElement?'part="bullet"':""} class="${c.bulletClass}"></${c.bulletElement}>`}c.type==="fraction"&&(c.renderFraction?x=c.renderFraction.call(t,c.currentClass,c.totalClass):x=`<span class="${c.currentClass}"></span> / <span class="${c.totalClass}"></span>`),c.type==="progressbar"&&(c.renderProgressbar?x=c.renderProgressbar.call(t,c.progressbarFillClass):x=`<span class="${c.progressbarFillClass}"></span>`),t.pagination.bullets=[],w.forEach(T=>{c.type!=="custom"&&Li(T,x||""),c.type==="bullets"&&t.pagination.bullets.push(...T.querySelectorAll(Gn(c.bulletClass)))}),c.type!=="custom"&&i("paginationRender",w[0])}function y(){t.params.pagination=Mh(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const c=t.params.pagination;if(!c.el)return;let p;typeof c.el=="string"&&t.isElement&&(p=t.el.querySelector(c.el)),!p&&typeof c.el=="string"&&(p=[...document.querySelectorAll(c.el)]),p||(p=c.el),!(!p||p.length===0)&&(t.params.uniqueNavElements&&typeof c.el=="string"&&Array.isArray(p)&&p.length>1&&(p=[...t.el.querySelectorAll(c.el)],p.length>1&&(p=p.find(w=>ld(w,".swiper")[0]===t.el))),Array.isArray(p)&&p.length===1&&(p=p[0]),Object.assign(t.pagination,{el:p}),p=at(p),p.forEach(w=>{c.type==="bullets"&&c.clickable&&w.classList.add(...(c.clickableClass||"").split(" ")),w.classList.add(c.modifierClass+c.type),w.classList.add(t.isHorizontal()?c.horizontalClass:c.verticalClass),c.type==="bullets"&&c.dynamicBullets&&(w.classList.add(`${c.modifierClass}${c.type}-dynamic`),o=0,c.dynamicMainBullets<1&&(c.dynamicMainBullets=1)),c.type==="progressbar"&&c.progressbarOpposite&&w.classList.add(c.progressbarOppositeClass),c.clickable&&w.addEventListener("click",f),t.enabled||w.classList.add(c.lockClass)}))}function S(){const c=t.params.pagination;if(a())return;let p=t.pagination.el;p&&(p=at(p),p.forEach(w=>{w.classList.remove(c.hiddenClass),w.classList.remove(c.modifierClass+c.type),w.classList.remove(t.isHorizontal()?c.horizontalClass:c.verticalClass),c.clickable&&(w.classList.remove(...(c.clickableClass||"").split(" ")),w.removeEventListener("click",f))})),t.pagination.bullets&&t.pagination.bullets.forEach(w=>w.classList.remove(...c.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const c=t.params.pagination;let{el:p}=t.pagination;p=at(p),p.forEach(w=>{w.classList.remove(c.horizontalClass,c.verticalClass),w.classList.add(t.isHorizontal()?c.horizontalClass:c.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?g():(y(),v(),h())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&h()}),r("snapIndexChange",()=>{h()}),r("snapGridLengthChange",()=>{v(),h()}),r("destroy",()=>{S()}),r("enable disable",()=>{let{el:c}=t.pagination;c&&(c=at(c),c.forEach(p=>p.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{h()}),r("click",(c,p)=>{const w=p.target,x=at(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&x&&x.length>0&&!w.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&w===t.navigation.nextEl||t.navigation.prevEl&&w===t.navigation.prevEl))return;const T=x[0].classList.contains(t.params.pagination.hiddenClass);i(T===!0?"paginationShow":"paginationHide"),x.forEach(b=>b.classList.toggle(t.params.pagination.hiddenClass))}});const z=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:c}=t.pagination;c&&(c=at(c),c.forEach(p=>p.classList.remove(t.params.pagination.paginationDisabledClass))),y(),v(),h()},g=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:c}=t.pagination;c&&(c=at(c),c.forEach(p=>p.classList.add(t.params.pagination.paginationDisabledClass))),S()};Object.assign(t.pagination,{enable:z,disable:g,render:v,update:h,init:y,destroy:S})}function wd(e){let{swiper:t,extendParams:n,on:r,emit:i,params:s}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let l,o,a=s&&s.autoplay?s.autoplay.delay:3e3,u=s&&s.autoplay?s.autoplay.delay:3e3,d,f=new Date().getTime(),h,v,y,S,z,g,c;function p(j){!t||t.destroyed||!t.wrapperEl||j.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",p),!(c||j.detail&&j.detail.bySwiperTouchMove)&&C())}const w=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?h=!0:h&&(u=d,h=!1);const j=t.autoplay.paused?d:f+u-new Date().getTime();t.autoplay.timeLeft=j,i("autoplayTimeLeft",j,j/a),o=requestAnimationFrame(()=>{w()})},x=()=>{let j;return t.virtual&&t.params.virtual.enabled?j=t.slides.find(I=>I.classList.contains("swiper-slide-active")):j=t.slides[t.activeIndex],j?parseInt(j.getAttribute("data-swiper-autoplay"),10):void 0},T=j=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(o),w();let L=typeof j>"u"?t.params.autoplay.delay:j;a=t.params.autoplay.delay,u=t.params.autoplay.delay;const I=x();!Number.isNaN(I)&&I>0&&typeof j>"u"&&(L=I,a=I,u=I),d=L;const V=t.params.speed,G=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(V,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,V,!0,!0),i("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(V,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,V,!0,!0),i("autoplay")),t.params.cssMode&&(f=new Date().getTime(),requestAnimationFrame(()=>{T()})))};return L>0?(clearTimeout(l),l=setTimeout(()=>{G()},L)):requestAnimationFrame(()=>{G()}),L},b=()=>{f=new Date().getTime(),t.autoplay.running=!0,T(),i("autoplayStart")},E=()=>{t.autoplay.running=!1,clearTimeout(l),cancelAnimationFrame(o),i("autoplayStop")},M=(j,L)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(l),j||(g=!0);const I=()=>{i("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",p):C()};if(t.autoplay.paused=!0,L){z&&(d=t.params.autoplay.delay),z=!1,I();return}d=(d||t.params.autoplay.delay)-(new Date().getTime()-f),!(t.isEnd&&d<0&&!t.params.loop)&&(d<0&&(d=0),I())},C=()=>{t.isEnd&&d<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(f=new Date().getTime(),g?(g=!1,T(d)):T(),t.autoplay.paused=!1,i("autoplayResume"))},k=()=>{if(t.destroyed||!t.autoplay.running)return;const j=lt();j.visibilityState==="hidden"&&(g=!0,M(!0)),j.visibilityState==="visible"&&C()},P=j=>{j.pointerType==="mouse"&&(g=!0,c=!0,!(t.animating||t.autoplay.paused)&&M(!0))},_=j=>{j.pointerType==="mouse"&&(c=!1,t.autoplay.paused&&C())},O=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",P),t.el.addEventListener("pointerleave",_))},F=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",P),t.el.removeEventListener("pointerleave",_))},D=()=>{lt().addEventListener("visibilitychange",k)},B=()=>{lt().removeEventListener("visibilitychange",k)};r("init",()=>{t.params.autoplay.enabled&&(O(),D(),b())}),r("destroy",()=>{F(),B(),t.autoplay.running&&E()}),r("_freeModeStaticRelease",()=>{(y||g)&&C()}),r("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?E():M(!0,!0)}),r("beforeTransitionStart",(j,L,I)=>{t.destroyed||!t.autoplay.running||(I||!t.params.autoplay.disableOnInteraction?M(!0,!0):E())}),r("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){E();return}v=!0,y=!1,g=!1,S=setTimeout(()=>{g=!0,y=!0,M(!0)},200)}}),r("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!v)){if(clearTimeout(S),clearTimeout(l),t.params.autoplay.disableOnInteraction){y=!1,v=!1;return}y&&t.params.cssMode&&C(),y=!1,v=!1}}),r("slideChange",()=>{t.destroyed||!t.autoplay.running||(z=!0)}),Object.assign(t.autoplay,{start:b,stop:E,pause:M,resume:C})}function xd(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:s,overwriteParams:l,perspective:o,recreateShadows:a,getEffectParams:u}=e;r("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),o&&o()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const f=l?l():{};Object.assign(n.params,f),Object.assign(n.originalParams,f)}),r("setTranslate _virtualUpdated",()=>{n.params.effect===t&&i()}),r("setTransition",(f,h)=>{n.params.effect===t&&s(h)}),r("transitionEnd",()=>{if(n.params.effect===t&&a){if(!u||!u().slideShadows)return;n.slides.forEach(f=>{f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(h=>h.remove())}),a()}});let d;r("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(d=!0),requestAnimationFrame(()=>{d&&n.slides&&n.slides.length&&(i(),d=!1)}))})}function Sd(e,t){const n=Ki(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function Nh(e){let{swiper:t,duration:n,transformElements:r}=e;const{activeIndex:i}=t;if(t.params.virtualTranslate&&n!==0){let s=!1,l;l=r,l.forEach(o=>{um(o,()=>{if(s||!t||t.destroyed)return;s=!0,t.animating=!1;const a=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(a)})})}}function _h(e){let{swiper:t,extendParams:n,on:r}=e;n({fadeEffect:{crossFade:!1}}),xd({effect:"fade",swiper:t,on:r,setTranslate:()=>{const{slides:l}=t,o=t.params.fadeEffect;for(let a=0;a<l.length;a+=1){const u=t.slides[a];let f=-u.swiperSlideOffset;t.params.virtualTranslate||(f-=t.translate);let h=0;t.isHorizontal()||(h=f,f=0);const v=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(u.progress),0):1+Math.min(Math.max(u.progress,-1),0),y=Sd(o,u);y.style.opacity=v,y.style.transform=`translate3d(${f}px, ${h}px, 0px)`}},setTransition:l=>{const o=t.slides.map(a=>Ki(a));o.forEach(a=>{a.style.transitionDuration=`${l}ms`}),Nh({swiper:t,duration:l,transformElements:o})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})}function Va(e,t,n){const r=`swiper-slide-shadow${n?`-${n}`:""}${` swiper-slide-shadow-${e}`}`,i=Ki(t);let s=i.querySelector(`.${r.split(" ").join(".")}`);return s||(s=Er("div",r.split(" ")),i.append(s)),s}function Lh(e){let{swiper:t,extendParams:n,on:r}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),xd({effect:"coverflow",swiper:t,on:r,setTranslate:()=>{const{width:l,height:o,slides:a,slidesSizesGrid:u}=t,d=t.params.coverflowEffect,f=t.isHorizontal(),h=t.translate,v=f?-h+l/2:-h+o/2,y=f?d.rotate:-d.rotate,S=d.depth,z=cm(t);for(let g=0,c=a.length;g<c;g+=1){const p=a[g],w=u[g],x=p.swiperSlideOffset,T=(v-x-w/2)/w,b=typeof d.modifier=="function"?d.modifier(T):T*d.modifier;let E=f?y*b:0,M=f?0:y*b,C=-S*Math.abs(b),k=d.stretch;typeof k=="string"&&k.indexOf("%")!==-1&&(k=parseFloat(d.stretch)/100*w);let P=f?0:k*b,_=f?k*b:0,O=1-(1-d.scale)*Math.abs(b);Math.abs(_)<.001&&(_=0),Math.abs(P)<.001&&(P=0),Math.abs(C)<.001&&(C=0),Math.abs(E)<.001&&(E=0),Math.abs(M)<.001&&(M=0),Math.abs(O)<.001&&(O=0);const F=`translate3d(${_}px,${P}px,${C}px)  rotateX(${z(M)}deg) rotateY(${z(E)}deg) scale(${O})`,D=Sd(d,p);if(D.style.transform=F,p.style.zIndex=-Math.abs(Math.round(b))+1,d.slideShadows){let B=f?p.querySelector(".swiper-slide-shadow-left"):p.querySelector(".swiper-slide-shadow-top"),j=f?p.querySelector(".swiper-slide-shadow-right"):p.querySelector(".swiper-slide-shadow-bottom");B||(B=Va("coverflow",p,f?"left":"top")),j||(j=Va("coverflow",p,f?"right":"bottom")),B&&(B.style.opacity=b>0?b:0),j&&(j.style.opacity=-b>0?-b:0)}}},setTransition:l=>{t.slides.map(a=>Ki(a)).forEach(a=>{a.style.transitionDuration=`${l}ms`,a.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u=>{u.style.transitionDuration=`${l}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const Oh=({onQuoteClick:e,onAppointmentClick:t})=>{const[n,r]=R.useState(""),[i,s]=R.useState(!0),l=[{text:"Fix it fast.",color:"#E31B23"},{text:"Fix it right.",color:"#FFFFFF"},{text:"Expert care.",color:"#E31B23"}];R.useEffect(()=>{let a=0,u=0,d=!1;const h=setInterval(()=>{const y=l[a].text;!d&&u<=y.length&&(r(y.substring(0,u)),u++),d&&u>=0&&(r(y.substring(0,u)),u--),u===y.length+1&&(d=!0,setTimeout(()=>{},1500)),u===0&&d&&(d=!1,a=(a+1)%l.length)},100),v=setInterval(()=>s(y=>!y),500);return()=>{clearInterval(h),clearInterval(v)}},[]);const o=["../assets/hero1.jpg","/images/hero2.jpg","/images/hero3.jpg","/images/hero4.jpg","../assets/hero5.jpg","../assets/hero3.jpg"];return m.jsxs("section",{id:"home",className:"hero",children:[m.jsx(To,{modules:[wd,_h],effect:"fade",autoplay:{delay:5e3,disableOnInteraction:!1},loop:!0,speed:1500,allowTouchMove:!1,className:"hero-slider",children:o.map((a,u)=>m.jsx(Co,{children:m.jsx("img",{src:a,alt:`Phone repair ${u+1}`})},u))}),m.jsx("div",{className:"hero-overlay"}),m.jsx("div",{className:"hero-wrapper",children:m.jsx("div",{className:"hero-container",children:m.jsxs("div",{className:"hero-content",children:[m.jsxs("div",{className:"hero-badge",children:[m.jsx("span",{className:"badge-icon",children:m.jsx("i",{className:"fas fa-certificate"})}),m.jsx("span",{className:"badge-text",children:"SAME-DAY REPAIR"})]}),m.jsxs("div",{className:"hero-title-section",children:[m.jsxs("div",{className:"hero-greeting",children:[m.jsx("i",{className:"fas fa-microchip"})," iPHIX"]}),m.jsxs("h1",{className:"hero-main-title",children:["We ",m.jsx("span",{className:"highlight",children:"repair"})," your",m.jsx("br",{}),"device like ",m.jsx("span",{className:"highlight",children:"family"})]}),m.jsx("div",{className:"hero-typed-wrapper",children:m.jsxs("div",{className:"typed-container",children:[m.jsx("span",{className:"typed-prefix",children:"→ "}),m.jsx("span",{className:"typed-text",children:n}),m.jsx("span",{className:`typed-cursor ${i?"visible":"hidden"}`,children:"|"})]})})]}),m.jsx("div",{className:"hero-description",children:m.jsx("p",{children:"Expert repairs for all phones — from shattered screens to water damage. Free pickup & delivery, certified technicians."})}),m.jsxs("div",{className:"hero-stats",children:[m.jsxs("div",{className:"hero-stat",children:[m.jsx("div",{className:"stat-number",children:"15k+"}),m.jsx("div",{className:"stat-label",children:"Devices Fixed"})]}),m.jsxs("div",{className:"hero-stat",children:[m.jsx("div",{className:"stat-number",children:"4.98★"}),m.jsx("div",{className:"stat-label",children:"Rating"})]}),m.jsxs("div",{className:"hero-stat",children:[m.jsx("div",{className:"stat-number",children:"2hr"}),m.jsx("div",{className:"stat-label",children:"Avg Repair"})]})]}),m.jsxs("div",{className:"hero-buttons",children:[m.jsxs("button",{className:"btn-primary",onClick:t,children:[m.jsx("i",{className:"fas fa-calendar-check"}),m.jsx("span",{children:"Book Now"})]}),m.jsxs("button",{className:"btn-secondary",onClick:e,children:[m.jsx("i",{className:"fas fa-file-invoice"}),m.jsx("span",{children:"Get Quote"})]})]})]})})}),m.jsx("style",{children:`
        .hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        
        .hero-slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        
        .hero-slider .swiper-slide {
          width: 100%;
          height: 100%;
        }
        
        .hero-slider .swiper-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(227,27,35,0.3) 100%);
          z-index: 1;
        }
        
        .hero-wrapper {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 5rem 1rem;
        }
        
        .hero-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .hero-content {
          width: 100%;
        }
        
        /* Mobile Styles (default) */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 0.4rem 0.8rem;
          border-radius: 40px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(227, 27, 35, 0.3);
        }
        
        .badge-icon {
          background: #E31B23;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
        }
        
        .badge-text {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        
        .hero-greeting {
          font-size: 0.85rem;
          color: #E31B23;
          margin-bottom: 0.75rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .hero-main-title {
          font-size: 1.8rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }
        
        .hero-main-title .highlight {
          color: #E31B23;
          position: relative;
          display: inline-block;
        }
        
        .hero-typed-wrapper {
          margin: 0.75rem 0;
        }
        
        .typed-container {
          display: inline-flex;
          align-items: center;
          background: rgba(0, 0, 0, 0.3);
          padding: 0.3rem 0.8rem;
          border-radius: 40px;
          backdrop-filter: blur(5px);
        }
        
        .typed-prefix {
          font-size: 1rem;
          color: #E31B23;
          font-weight: 600;
          margin-right: 0.3rem;
        }
        
        .typed-text {
          font-size: 1rem;
          font-weight: 700;
          color: white;
        }
        
        .typed-cursor {
          font-size: 1rem;
          font-weight: 300;
          margin-left: 2px;
        }
        
        .typed-cursor.visible { opacity: 1; }
        .typed-cursor.hidden { opacity: 0; }
        
        .hero-description {
          margin: 1rem 0;
        }
        
        .hero-description p {
          font-size: 0.85rem;
          line-height: 1.5;
          color: #D0D0D0;
        }
        
        .hero-stats {
          display: flex;
          gap: 1.5rem;
          margin: 1.5rem 0;
        }
        
        .stat-number {
          font-size: 1.3rem;
          font-weight: 800;
          color: #E31B23;
          line-height: 1;
        }
        
        .stat-label {
          font-size: 0.7rem;
          color: #9CA3AF;
          margin-top: 0.2rem;
        }
        
        .hero-buttons {
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
        }
        
        .btn-primary, .btn-secondary {
          padding: 0.7rem 1.2rem;
          border-radius: 40px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
        }
        
        .btn-primary {
          background: #E31B23;
          color: white;
        }
        
        .btn-secondary {
          background: transparent;
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          color: white;
        }
        
        /* Tablet */
        @media (min-width: 768px) {
          .hero-wrapper {
            padding: 6rem 2rem;
          }
          
          .hero-main-title {
            font-size: 3rem;
          }
          
          .typed-text, .typed-cursor {
            font-size: 1.3rem;
          }
          
          .hero-description p {
            font-size: 1rem;
            max-width: 80%;
          }
          
          .stat-number {
            font-size: 1.6rem;
          }
          
          .btn-primary, .btn-secondary {
            padding: 0.9rem 1.8rem;
            font-size: 0.95rem;
          }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
          .hero-wrapper {
            padding: 8rem 2rem;
          }
          
          .hero-main-title {
            font-size: 4rem;
          }
          
          .hero-description p {
            max-width: 60%;
          }
        }
        
        /* Small Mobile */
        @media (max-width: 480px) {
          .hero-wrapper {
            padding: 4rem 0.8rem;
          }
          
          .hero-main-title {
            font-size: 1.5rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }
          
          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
          }
          
          .hero-stats {
            justify-content: space-between;
            gap: 0.5rem;
          }
          
          .stat-number {
            font-size: 1.1rem;
          }
          
          .stat-label {
            font-size: 0.6rem;
          }
        }
      `})]})},Ih=()=>m.jsxs("div",{className:"pickup-banner","data-aos":"fade-up",children:[m.jsx("i",{className:"fas fa-truck-fast",style:{fontSize:"2rem",marginRight:"10px"}}),m.jsx("strong",{children:"Free Pickup & Delivery:"})," We'll collect your phone, repair it, and deliver it back. Or visit our physical shop — your choice!",m.jsx("style",{children:`
        .pickup-banner {
          background: #E31B23;
          border-radius: 1.5rem;
          padding: 2rem;
          text-align: center;
          margin: 2rem 0;
        }
      `})]}),Ah=[{id:1,title:"Screen Replacement",description:"Cracked screen? OLED/LCD repair, original quality with tempered glass option.",icon:"fa-mobile-alt",image:"/images/screen-repair.jpg"},{id:2,title:"Battery Replacement",description:"High-cycle batteries, fast charging restored, full calibration included.",icon:"fa-battery-full",image:"/images/battery-repair.jpg"},{id:3,title:"Water Damage Repair",description:"Ultrasonic cleaning, corrosion removal, component-level restoration.",icon:"fa-water",image:"/images/waterdamage.webp"},{id:4,title:"Button / Mic Repair",description:"Power/volume buttons, microphone, speaker fixes with genuine parts.",icon:"fa-microphone-alt",image:"/images/button-repair.jpg"},{id:5,title:"Diagnostic Scan",description:"Full hardware & software diagnosis, free check with detailed report.",icon:"fa-microchip",image:"/images/diagnostic.jpg"},{id:6,title:"Charge Port Repair",description:"Broken charging port, loose connection, fast fix with original components.",icon:"fa-plug",image:"/images/charge-port.jpg"},{id:7,title:"Camera Repair",description:"Blurry lens, OIS restoration, front/back camera replacement.",icon:"fa-camera",image:"/images/camera-repair.jpg"},{id:8,title:"Software Updates & Fixes",description:"iOS/Android updates, boot loop repair, data recovery services.",icon:"fa-code-branch",image:"/images/software-repair.jpg"}],Dh=()=>{const e=R.useRef(null);return R.useEffect(()=>{const t={threshold:.1,rootMargin:"0px 0px -50px 0px"},n=new IntersectionObserver(r=>{r.forEach(i=>{i.isIntersecting&&(i.target.querySelectorAll(".service-card").forEach((l,o)=>{setTimeout(()=>{l.classList.add("animate-in")},o*100)}),n.unobserve(i.target))})},t);return e.current&&n.observe(e.current),()=>n.disconnect()},[]),m.jsxs("section",{id:"services",className:"services-section",ref:e,children:[m.jsxs("div",{className:"section-header",children:[m.jsxs("h2",{children:["Our ",m.jsx("span",{children:"Repair Services"})]}),m.jsx("p",{children:"Precision repairs for every issue — transparent pricing, genuine parts."})]}),m.jsx("div",{className:"services-wrapper",children:m.jsx("div",{className:"services-grid",children:Ah.map((t,n)=>m.jsxs("div",{className:"service-card","data-delay":n*100,children:[m.jsxs("div",{className:"service-image",children:[m.jsx("img",{src:t.image,alt:t.title,loading:"lazy"}),m.jsx("div",{className:"service-overlay"})]}),m.jsxs("div",{className:"service-info",children:[m.jsx("div",{className:"service-icon",children:m.jsx("i",{className:`fas ${t.icon}`})}),m.jsx("h3",{children:t.title}),m.jsx("p",{children:t.description}),m.jsx("div",{className:"service-hover-effect"})]})]},t.id))})}),m.jsx("style",{children:`
        .services-section {
          padding: 4rem 0;
          width: 100%;
          overflow: hidden;
        }
        
        .services-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 280px));
          gap: 1.5rem;
          justify-content: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .service-card {
          position: relative;
          background: #111;
          border-radius: 1rem;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(227, 27, 35, 0.2);
          width: 100%;
          max-width: 280px;
          margin: 0 auto;
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .service-card.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        /* Alternate animation direction for even cards */
        .service-card:nth-child(even) {
          transform: translateX(50px);
        }
        
        .service-card:nth-child(even).animate-in {
          transform: translateX(0);
        }
        
        .service-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: #E31B23;
          box-shadow: 0 20px 35px rgba(227, 27, 35, 0.2);
        }
        
        .service-image {
          position: relative;
          height: 160px;
          overflow: hidden;
        }
        
        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .service-card:hover .service-image img {
          transform: scale(1.1);
        }
        
        .service-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%);
        }
        
        .service-info {
          padding: 1rem;
          position: relative;
        }
        
        .service-icon {
          font-size: 1.5rem;
          color: #E31B23;
          margin-bottom: 0.5rem;
          transition: transform 0.3s ease;
        }
        
        .service-card:hover .service-icon {
          transform: scale(1.1);
        }
        
        .service-info h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }
        
        .service-info p {
          color: #9CA3AF;
          font-size: 0.8rem;
          line-height: 1.4;
        }
        
        .service-hover-effect {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: #E31B23;
          transition: width 0.4s ease;
        }
        
        .service-card:hover .service-hover-effect {
          width: 100%;
        }
        
        /* Mobile specific */
        @media (max-width: 768px) {
          .services-section {
            padding: 3rem 0;
          }
          
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(240px, 260px));
            gap: 1rem;
            justify-content: center;
          }
          
          .service-card {
            max-width: 260px;
          }
          
          .service-image {
            height: 140px;
          }
          
          .service-info {
            padding: 0.8rem;
          }
          
          .service-info h3 {
            font-size: 1rem;
          }
          
          .service-info p {
            font-size: 0.75rem;
          }
        }
        
        @media (max-width: 560px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.8rem;
          }
          
          .service-card {
            max-width: 100%;
          }
          
          .service-image {
            height: 120px;
          }
          
          .service-icon {
            font-size: 1.2rem;
          }
          
          .service-info h3 {
            font-size: 0.85rem;
          }
          
          .service-info p {
            font-size: 0.7rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
        
        @media (max-width: 480px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .service-card {
            max-width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          
          .service-image {
            width: 100px;
            height: 100px;
            flex-shrink: 0;
          }
          
          .service-info {
            flex: 1;
            padding: 0.8rem;
          }
          
          .service-icon {
            font-size: 1rem;
            margin-bottom: 0.2rem;
          }
          
          .service-info h3 {
            font-size: 0.9rem;
            margin-bottom: 0.2rem;
          }
          
          .service-info p {
            font-size: 0.7rem;
            -webkit-line-clamp: 2;
          }
        }
      `})]})},Fh=()=>{const e=[{number:1,title:"Book",description:"Schedule online or request a quote",icon:"fa-calendar-alt"},{number:2,title:"Diagnostic",description:"Certified techs diagnose the issue",icon:"fa-stethoscope"},{number:3,title:"Repair",description:"Fast & precise component repair",icon:"fa-tools"},{number:4,title:"Ready",description:"Collect your fully repaired device",icon:"fa-hand-peace"}];return m.jsxs("section",{className:"process-section",children:[m.jsxs("div",{className:"section-header",children:[m.jsxs("h2",{children:["How it ",m.jsx("span",{children:"Works"})]}),m.jsx("p",{children:"Simple, transparent, and fast"})]}),m.jsx("div",{className:"steps-container",children:m.jsx("div",{className:"steps-grid",children:e.map(t=>m.jsxs("div",{className:"step",children:[m.jsx("div",{className:"step-icon",children:m.jsx("i",{className:`fas ${t.icon}`})}),m.jsx("div",{className:"step-number",children:t.number}),m.jsx("h3",{children:t.title}),m.jsx("p",{children:t.description})]},t.number))})}),m.jsx("style",{children:`
        .process-section {
          padding: 3rem 0;
          background: #0A0A0A;
          width: 100%;
        }
        
        .steps-container {
          width: 100%;
          overflow-x: auto;
          padding: 0.5rem 0;
        }
        
        .steps-container::-webkit-scrollbar {
          height: 3px;
        }
        
        .steps-container::-webkit-scrollbar-track {
          background: #1A1A1A;
          border-radius: 10px;
        }
        
        .steps-container::-webkit-scrollbar-thumb {
          background: #E31B23;
          border-radius: 10px;
        }
        
        .steps-grid {
          display: flex;
          gap: 1rem;
          min-width: min-content;
          padding: 0.5rem;
        }
        
        .step {
          background: linear-gradient(135deg, #111, #1A1A1A);
          border-radius: 1rem;
          padding: 1.2rem;
          min-width: 200px;
          text-align: center;
          border: 1px solid rgba(227, 27, 35, 0.2);
        }
        
        .step-icon {
          font-size: 1.5rem;
          color: #E31B23;
          margin-bottom: 0.5rem;
        }
        
        .step-number {
          width: 35px;
          height: 35px;
          background: #E31B23;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 800;
          margin: 0 auto 0.5rem;
        }
        
        .step h3 {
          font-size: 1rem;
          margin-bottom: 0.3rem;
        }
        
        .step p {
          color: #9CA3AF;
          font-size: 0.75rem;
        }
        
        @media (min-width: 768px) {
          .process-section {
            padding: 5rem 0;
          }
          
          .steps-container {
            overflow-x: visible;
          }
          
          .steps-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
            min-width: auto;
          }
          
          .step {
            min-width: auto;
            padding: 1.5rem;
          }
          
          .step-icon {
            font-size: 2rem;
          }
          
          .step-number {
            width: 45px;
            height: 45px;
            font-size: 1.2rem;
          }
        }
        
        @media (max-width: 480px) {
          .step {
            min-width: 170px;
            padding: 1rem;
          }
        }
      `})]})},Rh="/assets/hero1-BhZkXP80.png",Bh="/assets/hero2-YRrbn84-.png",$h="/assets/hero3-HAfOgw7l.png",Vh="/assets/hero4-BM032n-X.png",Hh="/assets/hero5-D2puTGmT.png",Gh=()=>{const e=[{id:1,src:Rh,title:"Screen Repair",alt:"Phone screen repair"},{id:2,src:Bh,title:"Internal Fix",alt:"Phone internal repair"},{id:3,src:$h,title:"Diagnostics",alt:"Phone diagnostics"},{id:4,src:Vh,title:"Water Damage Repair",alt:"Water damaged phone repair"},{id:5,src:Hh,title:"Screen Replacement",alt:"Screen replacement"}];return m.jsxs("section",{className:"gallery-section",children:[m.jsxs("div",{className:"section-header",children:[m.jsxs("h2",{children:["Recent ",m.jsx("span",{children:"Repairs"})]}),m.jsx("p",{children:"See our craftsmanship in action — real devices we've restored."})]}),m.jsx(To,{modules:[wd,zh,Lh],effect:"coverflow",coverflowEffect:{rotate:40,stretch:0,depth:120,modifier:1,slideShadows:!1},autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{clickable:!0},loop:!0,speed:800,centeredSlides:!0,slidesPerView:1,breakpoints:{640:{slidesPerView:2},1024:{slidesPerView:3}},className:"gallery-swiper",children:e.map(t=>m.jsx(Co,{children:m.jsxs("div",{className:"gallery-item",children:[m.jsx("img",{src:t.src,alt:t.alt,loading:"lazy"}),m.jsx("div",{className:"gallery-overlay",children:m.jsxs("div",{className:"overlay-content",children:[m.jsx("i",{className:"fas fa-search-plus"}),m.jsx("span",{children:t.title})]})})]})},t.id))}),m.jsx("style",{children:`
        .gallery-section {
          padding: 5rem 0;
          background: #0A0A0A;
          text-align: center;
        }

        .section-header h2 {
          font-size: 2rem;
          color: white;
        }

        .section-header span {
          color: #E31B23;
        }

        .section-header p {
          color: #aaa;
          margin-bottom: 2rem;
        }

        .gallery-swiper {
          width: 100%;
          padding: 2rem 0 3rem;
        }

        .gallery-item {
          position: relative;
          border-radius: 1.5rem;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 4 / 3;
          box-shadow: 0 10px 25px rgba(0,0,0,0.4);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(227, 27, 35, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .overlay-content {
          color: white;
          text-align: center;
          transform: translateY(20px);
          transition: 0.3s ease;
        }

        .gallery-item:hover .overlay-content {
          transform: translateY(0);
        }

        .overlay-content i {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .overlay-content span {
          font-weight: 600;
        }

        .swiper-pagination-bullet {
          background: #E31B23;
        }

        .swiper-pagination-bullet-active {
          background: #E31B23;
        }

        @media (max-width: 768px) {
          .gallery-section {
            padding: 3rem 0;
          }
        }
      `})]})},Wh=()=>{const e=[{icon:"fa-shield-alt",title:"12-Month Warranty",description:"All repairs backed by full warranty.",color:"#E31B23"},{icon:"fa-clock",title:"Same-Day Service",description:"Most repairs completed within 2-3 hours.",color:"#E31B23"},{icon:"fa-store",title:"Physical Shop",description:"Visit us in person — walk-ins welcome.",color:"#E31B23"},{icon:"fa-microchip",title:"Genuine Parts",description:"Premium components, no cheap copies.",color:"#E31B23"},{icon:"fa-truck-fast",title:"Free Pickup",description:"We come to you, anywhere in city.",color:"#E31B23"},{icon:"fa-user-check",title:"Certified Techs",description:"Expert technicians with years of experience.",color:"#E31B23"}];return m.jsxs("section",{className:"why-section",children:[m.jsxs("div",{className:"section-header","data-aos":"fade-left",children:[m.jsxs("h2",{children:["Why ",m.jsx("span",{children:"Choose iPHIX?"})]}),m.jsx("p",{children:"We don't just fix phones — we earn your trust."})]}),m.jsx("div",{className:"why-grid",children:e.map((t,n)=>m.jsxs("div",{className:"why-card","data-aos":"flip-right","data-aos-delay":n*80,children:[m.jsx("div",{className:"why-icon-wrapper",children:m.jsx("i",{className:`fas ${t.icon}`})}),m.jsx("h3",{children:t.title}),m.jsx("p",{children:t.description})]},n))}),m.jsx("style",{children:`
        .why-section {
          padding: 5rem 0;
          background: linear-gradient(180deg, #0F0F0F 0%, #0A0A0A 100%);
        }
        
        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .why-card {
          background: rgba(17, 17, 17, 0.8);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 1.5rem;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(227, 27, 35, 0.1);
        }
        
        .why-card:hover {
          transform: translateY(-8px) rotateX(5deg);
          border-color: #E31B23;
          background: rgba(227, 27, 35, 0.05);
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
        }
        
        .why-icon-wrapper {
          width: 70px;
          height: 70px;
          background: rgba(227, 27, 35, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          transition: all 0.3s ease;
        }
        
        .why-card:hover .why-icon-wrapper {
          background: #E31B23;
          transform: scale(1.1);
        }
        
        .why-icon-wrapper i {
          font-size: 2rem;
          color: #E31B23;
          transition: all 0.3s ease;
        }
        
        .why-card:hover .why-icon-wrapper i {
          color: white;
        }
        
        .why-card h3 {
          margin-bottom: 0.5rem;
        }
        
        .why-card p {
          color: #9CA3AF;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .why-section {
            padding: 3rem 0;
          }
          .why-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .why-card {
            padding: 1.5rem;
          }
        }
      `})]})},Uh=()=>m.jsxs("section",{id:"about",className:"about-section",children:[m.jsxs("div",{className:"section-header",children:[m.jsxs("h2",{children:["About ",m.jsx("span",{children:"iPHIX"})]}),m.jsx("p",{children:"Redefining phone repair with precision"})]}),m.jsxs("div",{className:"about-content",children:[m.jsxs("div",{className:"about-text",children:[m.jsx("p",{children:"Founded in 2018, iPHIX has grown into one of the most trusted phone repair destinations."}),m.jsx("p",{children:"Our certified technicians have repaired over 15,000 devices — from iPhones to Androids."}),m.jsxs("div",{className:"about-stats",children:[m.jsxs("div",{children:[m.jsx("h4",{children:"15k+"}),m.jsx("span",{children:"Devices fixed"})]}),m.jsxs("div",{children:[m.jsx("h4",{children:"4.98★"}),m.jsx("span",{children:"Rating"})]}),m.jsxs("div",{children:[m.jsx("h4",{children:"12 mo"}),m.jsx("span",{children:"Warranty"})]})]})]}),m.jsx("div",{className:"about-img",children:m.jsx("img",{src:"/images/about-shop.jpg",alt:"iPHIX shop"})})]}),m.jsx("style",{children:`
        .about-section {
          padding: 3rem 0;
          width: 100%;
        }
        
        .about-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          background: #111;
          border-radius: 1.5rem;
          padding: 1.5rem;
          border: 1px solid rgba(227, 27, 35, 0.2);
          width: 100%;
        }
        
        .about-text p {
          color: #B0B0B0;
          line-height: 1.5;
          margin-bottom: 0.8rem;
          font-size: 0.85rem;
        }
        
        .about-stats {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        
        .about-stats div h4 {
          color: #E31B23;
          font-size: 1.3rem;
        }
        
        .about-stats div span {
          font-size: 0.7rem;
          color: #9CA3AF;
        }
        
        .about-img img {
          width: 100%;
          border-radius: 1rem;
          height: auto;
        }
        
        @media (min-width: 768px) {
          .about-section {
            padding: 5rem 0;
          }
          
          .about-content {
            flex-direction: row;
            align-items: center;
            gap: 2rem;
            padding: 2rem;
          }
          
          .about-text {
            flex: 1;
          }
          
          .about-img {
            flex: 1;
          }
          
          .about-text p {
            font-size: 0.95rem;
          }
          
          .about-stats div h4 {
            font-size: 1.6rem;
          }
        }
      `})]}),Qh=()=>{const e=[{name:"Michael T.",text:"Cracked screen fixed in 2 hours. Amazing service!",rating:5},{name:"Sarah J.",text:"Water damage repaired perfectly. iPHIX is magic!",rating:5},{name:"David K.",text:"Professional team, fair pricing. Highly recommend!",rating:5}];return m.jsxs("section",{id:"reviews",className:"reviews-section",children:[m.jsxs("div",{className:"section-header",children:[m.jsxs("h2",{children:["Customer ",m.jsx("span",{children:"Stories"})]}),m.jsx("p",{children:"Rated 4.9★ by over 2,000+ customers"})]}),m.jsx("div",{className:"reviews-grid",children:e.map((t,n)=>m.jsxs("div",{className:"review-card",children:[m.jsx("div",{className:"stars",children:[...Array(t.rating)].map((r,i)=>m.jsx("i",{className:"fas fa-star"},i))}),m.jsxs("p",{children:['"',t.text,'"']}),m.jsxs("strong",{children:["— ",t.name]})]},n))}),m.jsx("style",{children:`
        .reviews-section {
          padding: 3rem 0;
          width: 100%;
        }
        
        .reviews-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          width: 100%;
        }
        
        .review-card {
          background: #111;
          padding: 1rem;
          border-radius: 1rem;
          border-left: 3px solid #E31B23;
        }
        
        .stars {
          color: #E31B23;
          margin-bottom: 0.5rem;
          font-size: 0.8rem;
        }
        
        .review-card p {
          margin: 0.5rem 0;
          line-height: 1.4;
          color: #B0B0B0;
          font-size: 0.85rem;
        }
        
        .review-card strong {
          color: #E31B23;
          font-size: 0.8rem;
        }
        
        @media (min-width: 768px) {
          .reviews-section {
            padding: 5rem 0;
          }
          
          .reviews-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
          
          .review-card {
            padding: 1.5rem;
          }
        }
      `})]})},Yh=()=>{const e=[{number:"15,000+",label:"Devices Repaired"},{number:"4.98★",label:"Customer Rating"},{number:"2hr",label:"Avg Turnaround"},{number:"12 mo",label:"Warranty"}];return m.jsxs("div",{className:"stats-section",children:[m.jsx("div",{className:"stats-grid",children:e.map((t,n)=>m.jsxs("div",{className:"stat-item",children:[m.jsx("h3",{children:t.number}),m.jsx("p",{children:t.label})]},n))}),m.jsx("style",{children:`
        .stats-section {
          background: linear-gradient(135deg, #0F0F0F, #111);
          border-radius: 1.5rem;
          padding: 2rem 1rem;
          margin: 2rem 0;
          border: 1px solid rgba(227, 27, 35, 0.3);
          width: 100%;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          text-align: center;
        }
        
        .stat-item h3 {
          font-size: 1.3rem;
          font-weight: 800;
          color: #E31B23;
        }
        
        .stat-item p {
          color: #9CA3AF;
          margin-top: 0.2rem;
          font-size: 0.7rem;
        }
        
        @media (min-width: 768px) {
          .stats-section {
            padding: 3rem 2rem;
            margin: 3rem 0;
          }
          
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
          
          .stat-item h3 {
            font-size: 2rem;
          }
          
          .stat-item p {
            font-size: 0.85rem;
          }
        }
      `})]})},Xh=({onQuoteClick:e,onAppointmentClick:t})=>m.jsxs("section",{id:"quote-section","data-aos":"fade-up",children:[m.jsxs("div",{className:"cta-row",children:[m.jsxs("div",{className:"cta-block",children:[m.jsx("i",{className:"fas fa-file-invoice-dollar",style:{fontSize:"2.5rem",color:"#E31B23"}}),m.jsx("h3",{children:"Request a Quote"}),m.jsx("p",{children:"Tell us the issue, get a fair price estimate within hours."}),m.jsxs("button",{className:"btn-large",onClick:e,children:[m.jsx("i",{className:"fas fa-arrow-right"})," Get Quote →"]})]}),m.jsxs("div",{className:"cta-block",children:[m.jsx("i",{className:"fas fa-calendar-check",style:{fontSize:"2.5rem",color:"#E31B23"}}),m.jsx("h3",{children:"Book Appointment"}),m.jsx("p",{children:"Select a time slot, and we'll confirm instantly."}),m.jsxs("button",{className:"btn-large",onClick:t,children:[m.jsx("i",{className:"fas fa-check-circle"})," Schedule Now →"]})]})]}),m.jsx("style",{children:`
        .cta-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin: 2rem 0;
        }
        .cta-block {
          background: linear-gradient(135deg, #1A1A1A, #0F0F0F);
          padding: 2.5rem;
          border-radius: 2rem;
          text-align: center;
          border: 1px solid #E31B23;
          transition: 0.3s;
        }
        .cta-block:hover {
          transform: translateY(-5px);
        }
        .cta-block h3 {
          margin: 1rem 0;
        }
        .cta-block p {
          color: #9CA3AF;
        }
        .btn-large {
          background: #E31B23;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          display: inline-block;
          margin-top: 1rem;
          color: white;
          text-decoration: none;
          transition: 0.2s;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 1rem;
        }
        .btn-large:hover {
          background: #c01018;
          transform: translateY(-2px);
        }
        @media (max-width: 800px) {
          .cta-row {
            grid-template-columns: 1fr;
          }
          .cta-block {
            padding: 1.5rem;
          }
        }
      `})]}),qh=()=>{const e=(t,n)=>{t.preventDefault();const r=document.querySelector(n);r&&r.scrollIntoView({behavior:"smooth"})};return m.jsxs("footer",{children:[m.jsxs("div",{className:"footer-grid",children:[m.jsxs("div",{children:[m.jsx("h3",{style:{color:"#E31B23"},children:"iPHIX"}),m.jsx("p",{children:"Precision phone repair with free pickup & delivery. Certified experts & physical shop."})]}),m.jsxs("div",{children:[m.jsx("h4",{children:"Quick Links"}),m.jsx("p",{children:m.jsx("a",{href:"#services",onClick:t=>e(t,"#services"),children:"Services"})}),m.jsx("p",{children:m.jsx("a",{href:"#about",onClick:t=>e(t,"#about"),children:"About"})}),m.jsx("p",{children:m.jsx("a",{href:"#quote-section",onClick:t=>e(t,"#quote-section"),children:"Quote & Booking"})})]}),m.jsxs("div",{children:[m.jsx("h4",{children:"Contact & Shop"}),m.jsxs("p",{children:[m.jsx("i",{className:"fas fa-map-marker-alt"})," William Street, Kalungi Plaza, Shop NO- 007"]}),m.jsxs("p",{children:[m.jsx("i",{className:"fas fa-phone"})," +256 753 078 106"]}),m.jsxs("p",{children:[m.jsx("i",{className:"fas fa-envelope"})," info@iphixug.com"]}),m.jsxs("div",{className:"social-links",children:[m.jsx("a",{href:"#",children:m.jsx("i",{className:"fab fa-instagram"})}),m.jsx("a",{href:"#",children:m.jsx("i",{className:"fab fa-facebook"})}),m.jsx("a",{href:"#",children:m.jsx("i",{className:"fab fa-twitter"})}),m.jsx("a",{href:"#",children:m.jsx("i",{className:"fab fa-tiktok"})})]})]})]}),m.jsx("div",{className:"footer-bottom",children:m.jsx("p",{children:"© 2026 iPHIX — All rights reserved. Redefining phone repair."})}),m.jsx("style",{children:`
        footer {
          background: #0A0A0A;
          padding: 3rem 2rem;
          border-top: 1px solid #222;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        .footer-grid h4 {
          margin-bottom: 1rem;
          color: #E31B23;
        }
        .footer-grid p {
          margin-bottom: 0.5rem;
          color: #9CA3AF;
        }
        .footer-grid a {
          color: white;
          text-decoration: none;
          transition: 0.2s;
          cursor: pointer;
        }
        .footer-grid a:hover {
          color: #E31B23;
        }
        .social-links a {
          color: white;
          font-size: 1.5rem;
          margin-right: 1rem;
          transition: 0.2s;
        }
        .social-links a:hover {
          color: #E31B23;
        }
        .footer-bottom {
          text-align: center;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #222;
          color: #6B7280;
          font-size: 0.8rem;
        }
      `})]})},Kh=({isOpen:e,onClose:t})=>{const[n,r]=R.useState({name:"",email:"",phone:"",device:"",issue:""}),[i,s]=R.useState(!1),[l,o]=R.useState("idle"),a=f=>{r({...n,[f.target.name]:f.target.value})},u=async f=>{f.preventDefault(),s(!0),n.name,n.email,n.phone,n.device,n.issue,`${n.name}${n.email}${n.phone}${n.device}${n.issue}`;try{setTimeout(()=>{o("success"),s(!1),setTimeout(()=>{t(),r({name:"",email:"",phone:"",device:"",issue:""}),o("idle")},2e3)},1e3)}catch{o("error"),s(!1)}},d=()=>{const f=`Hi iPHIX! I'd like to request a quote for my ${n.device||"device"}. Issue: ${n.issue||"repair"}. My name is ${n.name}.`;window.open(`https://wa.me/1234567890?text=${encodeURIComponent(f)}`,"_blank")};return e?m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"modal-overlay",onClick:t,children:m.jsxs("div",{className:"modal-content",onClick:f=>f.stopPropagation(),children:[m.jsx("button",{className:"modal-close",onClick:t,children:"×"}),m.jsx("h2",{children:"Request a Quote"}),m.jsx("p",{children:"Fill out the form below and we'll get back to you shortly."}),l==="success"&&m.jsx("div",{className:"success-message",children:"✓ Quote requested successfully! We'll contact you soon."}),l==="error"&&m.jsx("div",{className:"error-message",children:"✗ Something went wrong. Please try again or contact us via WhatsApp."}),m.jsxs("form",{onSubmit:u,children:[m.jsx("input",{type:"text",name:"name",placeholder:"Your Name",value:n.name,onChange:a,required:!0}),m.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:n.email,onChange:a,required:!0}),m.jsx("input",{type:"tel",name:"phone",placeholder:"Phone Number",value:n.phone,onChange:a,required:!0}),m.jsx("input",{type:"text",name:"device",placeholder:"Phone Model (e.g., iPhone 14)",value:n.device,onChange:a,required:!0}),m.jsx("textarea",{name:"issue",placeholder:"Describe the issue...",rows:4,value:n.issue,onChange:a,required:!0}),m.jsx("button",{type:"submit",disabled:i,className:"submit-btn",children:i?"Sending...":"Submit Quote Request"})]}),m.jsxs("div",{className:"whatsapp-option",children:[m.jsx("p",{children:"Or contact us directly on WhatsApp:"}),m.jsxs("button",{onClick:d,className:"whatsapp-btn",children:[m.jsx("i",{className:"fab fa-whatsapp"})," Chat on WhatsApp"]})]})]})}),m.jsx("style",{children:`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
 backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }
        .modal-content {
          background: #111;
          border-radius: 1.5rem;
          padding: 2rem;
          max-width: 500px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          border: 1px solid #E31B23;
          position: relative;
          animation: slideUp 0.3s ease;
        }
        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.8rem;
          cursor: pointer;
          color: white;
          transition: 0.2s;
        }
        .modal-close:hover {
          color: #E31B23;
        }
        .modal-content h2 {
          color: #E31B23;
          margin-bottom: 0.5rem;
        }
        .modal-content p {
          color: #9CA3AF;
          margin-bottom: 1.5rem;
        }
        .modal-content input,
        .modal-content textarea,
        .modal-content select {
          width: 100%;
          padding: 0.8rem;
          margin-bottom: 1rem;
          background: #1A1A1A;
          border: 1px solid #333;
          border-radius: 0.8rem;
          color: white;
          font-family: inherit;
        }
        .modal-content input:focus,
        .modal-content textarea:focus {
          outline: none;
          border-color: #E31B23;
        }
        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: #E31B23;
          border: none;
          border-radius: 2rem;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s;
        }
        .submit-btn:hover:not(:disabled) {
          background: #c01018;
          transform: translateY(-2px);
        }
        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .whatsapp-option {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #333;
          text-align: center;
        }
        .whatsapp-btn {
          background: #25D366;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 2rem;
          color: white;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: 0.2s;
        }
        .whatsapp-btn:hover {
          transform: scale(1.05);
        }
        .success-message {
          background: rgba(76, 175, 80, 0.2);
          border: 1px solid #4CAF50;
          padding: 0.8rem;
          border-radius: 0.8rem;
          margin-bottom: 1rem;
          color: #4CAF50;
        }
        .error-message {
          background: rgba(227, 27, 35, 0.2);
          border: 1px solid #E31B23;
          padding: 0.8rem;
          border-radius: 0.8rem;
          margin-bottom: 1rem;
          color: #E31B23;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `})]}):null},Zh=({isOpen:e,onClose:t})=>{const[n,r]=R.useState({name:"",email:"",phone:"",date:"",time:"",device:"",issue:""}),[i,s]=R.useState(!1),[l,o]=R.useState("idle"),a=f=>{r({...n,[f.target.name]:f.target.value})},u=async f=>{f.preventDefault(),s(!0),n.name,n.email,n.phone,n.date,n.time,n.device,n.issue,`${n.name}${n.email}${n.phone}${n.date}${n.time}${n.device}${n.issue}`;try{setTimeout(()=>{o("success"),s(!1),setTimeout(()=>{t(),r({name:"",email:"",phone:"",date:"",time:"",device:"",issue:""}),o("idle")},2e3)},1e3)}catch{o("error"),s(!1)}},d=()=>{const f=`Hi iPHIX! I'd like to book an appointment for ${n.date||"soon"}. Device: ${n.device}. Issue: ${n.issue}. My name is ${n.name}.`;window.open(`https://wa.me/+256753078106?text=${encodeURIComponent(f)}`,"_blank")};return e?m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"modal-overlay",onClick:t,children:m.jsxs("div",{className:"modal-content",onClick:f=>f.stopPropagation(),children:[m.jsx("button",{className:"modal-close",onClick:t,children:"×"}),m.jsx("h2",{children:"Book an Appointment"}),m.jsx("p",{children:"Select your preferred date and time."}),l==="success"&&m.jsx("div",{className:"success-message",children:"✓ Appointment booked! We'll confirm via email/SMS."}),l==="error"&&m.jsx("div",{className:"error-message",children:"✗ Something went wrong. Please try again or contact us via WhatsApp."}),m.jsxs("form",{onSubmit:u,children:[m.jsx("input",{type:"text",name:"name",placeholder:"Your Name",value:n.name,onChange:a,required:!0}),m.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:n.email,onChange:a,required:!0}),m.jsx("input",{type:"tel",name:"phone",placeholder:"Phone Number",value:n.phone,onChange:a,required:!0}),m.jsx("input",{type:"text",name:"device",placeholder:"Phone Model",value:n.device,onChange:a,required:!0}),m.jsx("input",{type:"date",name:"date",value:n.date,onChange:a,required:!0}),m.jsxs("select",{name:"time",value:n.time,onChange:a,required:!0,children:[m.jsx("option",{value:"",children:"Select Time"}),m.jsx("option",{children:"9:00 AM - 10:00 AM"}),m.jsx("option",{children:"10:00 AM - 11:00 AM"}),m.jsx("option",{children:"11:00 AM - 12:00 PM"}),m.jsx("option",{children:"12:00 PM - 1:00 PM"}),m.jsx("option",{children:"1:00 PM - 2:00 PM"}),m.jsx("option",{children:"2:00 PM - 3:00 PM"}),m.jsx("option",{children:"3:00 PM - 4:00 PM"}),m.jsx("option",{children:"4:00 PM - 5:00 PM"})]}),m.jsx("textarea",{name:"issue",placeholder:"Describe the issue...",rows:3,value:n.issue,onChange:a,required:!0}),m.jsx("button",{type:"submit",disabled:i,className:"submit-btn",children:i?"Booking...":"Confirm Appointment"})]}),m.jsxs("div",{className:"whatsapp-option",children:[m.jsx("p",{children:"Or book via WhatsApp:"}),m.jsxs("button",{onClick:d,className:"whatsapp-btn",children:[m.jsx("i",{className:"fab fa-whatsapp"})," WhatsApp Booking"]})]})]})}),m.jsx("style",{children:`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }
        .modal-content {
          background: #111;
          border-radius: 1.5rem;
          padding: 2rem;
          max-width: 500px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          border: 1px solid #E31B23;
          position: relative;
          animation: slideUp 0.3s ease;
        }
        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.8rem;
          cursor: pointer;
          color: white;
          transition: 0.2s;
        }
        .modal-close:hover {
          color: #E31B23;
        }
        .modal-content h2 {
          color: #E31B23;
          margin-bottom: 0.5rem;
        }
        .modal-content p {
          color: #9CA3AF;
          margin-bottom: 1.5rem;
        }
        .modal-content input,
        .modal-content textarea,
        .modal-content select {
          width: 100%;
          padding: 0.8rem;
          margin-bottom: 1rem;
          background: #1A1A1A;
          border: 1px solid #333;
          border-radius: 0.8rem;
          color: white;
          font-family: inherit;
        }
        .modal-content input:focus,
        .modal-content textarea:focus {
          outline: none;
          border-color: #E31B23;
        }
        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: #E31B23;
          border: none;
          border-radius: 2rem;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s;
        }
        .submit-btn:hover:not(:disabled) {
          background: #c01018;
          transform: translateY(-2px);
        }
        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .whatsapp-option {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #333;
          text-align: center;
        }
        .whatsapp-btn {
          background: #25D366;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 2rem;
          color: white;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: 0.2s;
        }
        .whatsapp-btn:hover {
          transform: scale(1.05);
        }
        .success-message {
          background: rgba(76, 175, 80, 0.2);
          border: 1px solid #4CAF50;
          padding: 0.8rem;
          border-radius: 0.8rem;
          margin-bottom: 1rem;
          color: #4CAF50;
        }
        .error-message {
          background: rgba(227, 27, 35, 0.2);
          border: 1px solid #E31B23;
          padding: 0.8rem;
          border-radius: 0.8rem;
          margin-bottom: 1rem;
          color: #E31B23;
        }
      `})]}):null};function Jh(){const[e,t]=R.useState(!1),[n,r]=R.useState(!1);return R.useEffect(()=>{Kp.init({duration:800,once:!0,offset:100,easing:"ease-out-cubic"})},[]),m.jsxs("div",{className:"app",children:[m.jsx(Zp,{onQuoteClick:()=>t(!0),onAppointmentClick:()=>r(!0)}),m.jsx(Oh,{onQuoteClick:()=>t(!0),onAppointmentClick:()=>r(!0)}),m.jsxs("div",{className:"container",children:[m.jsx(Ih,{}),m.jsx(Dh,{}),m.jsx(Fh,{}),m.jsx(Gh,{}),m.jsx(Wh,{}),m.jsx(Uh,{}),m.jsx(Qh,{}),m.jsx(Yh,{}),m.jsx(Xh,{onQuoteClick:()=>t(!0),onAppointmentClick:()=>r(!0)})]}),m.jsx(qh,{}),m.jsx(Kh,{isOpen:e,onClose:()=>t(!1)}),m.jsx(Zh,{isOpen:n,onClose:()=>r(!1)})]})}Ns.createRoot(document.getElementById("root")).render(m.jsx(se.StrictMode,{children:m.jsx(Jh,{})}));
