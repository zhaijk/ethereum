(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function p_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ug={exports:{}},oc={},dg={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ta=Symbol.for("react.element"),m_=Symbol.for("react.portal"),g_=Symbol.for("react.fragment"),v_=Symbol.for("react.strict_mode"),__=Symbol.for("react.profiler"),x_=Symbol.for("react.provider"),y_=Symbol.for("react.context"),S_=Symbol.for("react.forward_ref"),M_=Symbol.for("react.suspense"),E_=Symbol.for("react.memo"),w_=Symbol.for("react.lazy"),Bh=Symbol.iterator;function T_(t){return t===null||typeof t!="object"?null:(t=Bh&&t[Bh]||t["@@iterator"],typeof t=="function"?t:null)}var fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hg=Object.assign,pg={};function Ys(t,e,n){this.props=t,this.context=e,this.refs=pg,this.updater=n||fg}Ys.prototype.isReactComponent={};Ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mg(){}mg.prototype=Ys.prototype;function Mf(t,e,n){this.props=t,this.context=e,this.refs=pg,this.updater=n||fg}var Ef=Mf.prototype=new mg;Ef.constructor=Mf;hg(Ef,Ys.prototype);Ef.isPureReactComponent=!0;var Hh=Array.isArray,gg=Object.prototype.hasOwnProperty,wf={current:null},vg={key:!0,ref:!0,__self:!0,__source:!0};function _g(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)gg.call(e,i)&&!vg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ta,type:t,key:s,ref:o,props:r,_owner:wf.current}}function A_(t,e){return{$$typeof:ta,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ta}function C_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vh=/\/+/g;function Lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?C_(""+t.key):e.toString(36)}function sl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ta:case m_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Lc(o,0):i,Hh(r)?(n="",t!=null&&(n=t.replace(Vh,"$&/")+"/"),sl(r,e,n,"",function(c){return c})):r!=null&&(Tf(r)&&(r=A_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Vh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Hh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Lc(s,a);o+=sl(s,e,n,l,r)}else if(l=T_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Lc(s,a++),o+=sl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function da(t,e,n){if(t==null)return t;var i=[],r=0;return sl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function R_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},ol={transition:null},b_={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:ol,ReactCurrentOwner:wf};function xg(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:da,forEach:function(t,e,n){da(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return da(t,function(){e++}),e},toArray:function(t){return da(t,function(e){return e})||[]},only:function(t){if(!Tf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=Ys;$e.Fragment=g_;$e.Profiler=__;$e.PureComponent=Mf;$e.StrictMode=v_;$e.Suspense=M_;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b_;$e.act=xg;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=hg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)gg.call(e,l)&&!vg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ta,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:y_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:x_,_context:t},t.Consumer=t};$e.createElement=_g;$e.createFactory=function(t){var e=_g.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:S_,render:t}};$e.isValidElement=Tf;$e.lazy=function(t){return{$$typeof:w_,_payload:{_status:-1,_result:t},_init:R_}};$e.memo=function(t,e){return{$$typeof:E_,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=ol.transition;ol.transition={};try{t()}finally{ol.transition=e}};$e.unstable_act=xg;$e.useCallback=function(t,e){return Zt.current.useCallback(t,e)};$e.useContext=function(t){return Zt.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};$e.useEffect=function(t,e){return Zt.current.useEffect(t,e)};$e.useId=function(){return Zt.current.useId()};$e.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return Zt.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};$e.useRef=function(t){return Zt.current.useRef(t)};$e.useState=function(t){return Zt.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return Zt.current.useTransition()};$e.version="18.3.1";dg.exports=$e;var we=dg.exports;const rr=p_(we);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_=we,L_=Symbol.for("react.element"),D_=Symbol.for("react.fragment"),I_=Object.prototype.hasOwnProperty,U_=P_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N_={key:!0,ref:!0,__self:!0,__source:!0};function yg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)I_.call(e,i)&&!N_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:L_,type:t,key:s,ref:o,props:r,_owner:U_.current}}oc.Fragment=D_;oc.jsx=yg;oc.jsxs=yg;ug.exports=oc;var R=ug.exports,Wu={},Sg={exports:{}},yn={},Mg={exports:{}},Eg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,Y){var K=I.length;I.push(Y);e:for(;0<K;){var Z=K-1>>>1,de=I[Z];if(0<r(de,Y))I[Z]=Y,I[K]=de,K=Z;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var Y=I[0],K=I.pop();if(K!==Y){I[0]=K;e:for(var Z=0,de=I.length,Pe=de>>>1;Z<Pe;){var j=2*(Z+1)-1,ne=I[j],re=j+1,Q=I[re];if(0>r(ne,K))re<de&&0>r(Q,ne)?(I[Z]=Q,I[re]=K,Z=re):(I[Z]=ne,I[j]=K,Z=j);else if(re<de&&0>r(Q,K))I[Z]=Q,I[re]=K,Z=re;else break e}}return Y}function r(I,Y){var K=I.sortIndex-Y.sortIndex;return K!==0?K:I.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,p=!1,x=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=I)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function M(I){if(g=!1,_(I),!x)if(n(l)!==null)x=!0,X(L);else{var Y=n(c);Y!==null&&$(M,Y.startTime-I)}}function L(I,Y){x=!1,g&&(g=!1,u(D),D=-1),p=!0;var K=h;try{for(_(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||I&&!U());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,h=d.priorityLevel;var de=Z(d.expirationTime<=Y);Y=t.unstable_now(),typeof de=="function"?d.callback=de:d===n(l)&&i(l),_(Y)}else i(l);d=n(l)}if(d!==null)var Pe=!0;else{var j=n(c);j!==null&&$(M,j.startTime-Y),Pe=!1}return Pe}finally{d=null,h=K,p=!1}}var A=!1,T=null,D=-1,w=5,y=-1;function U(){return!(t.unstable_now()-y<w)}function V(){if(T!==null){var I=t.unstable_now();y=I;var Y=!0;try{Y=T(!0,I)}finally{Y?B():(A=!1,T=null)}}else A=!1}var B;if(typeof v=="function")B=function(){v(V)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,N=q.port2;q.port1.onmessage=V,B=function(){N.postMessage(null)}}else B=function(){m(V,0)};function X(I){T=I,A||(A=!0,B())}function $(I,Y){D=m(function(){I(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,X(L))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var K=h;h=Y;try{return I()}finally{h=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,Y){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var K=h;h=I;try{return Y()}finally{h=K}},t.unstable_scheduleCallback=function(I,Y,K){var Z=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Z+K:Z):K=Z,I){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=K+de,I={id:f++,callback:Y,priorityLevel:I,startTime:K,expirationTime:de,sortIndex:-1},K>Z?(I.sortIndex=K,e(c,I),n(l)===null&&I===n(c)&&(g?(u(D),D=-1):g=!0,$(M,K-Z))):(I.sortIndex=de,e(l,I),x||p||(x=!0,X(L))),I},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(I){var Y=h;return function(){var K=h;h=Y;try{return I.apply(this,arguments)}finally{h=K}}}})(Eg);Mg.exports=Eg;var F_=Mg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_=we,xn=F_;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wg=new Set,Uo={};function zr(t,e){Ns(t,e),Ns(t+"Capture",e)}function Ns(t,e){for(Uo[t]=e,t=0;t<e.length;t++)wg.add(e[t])}var Si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xu=Object.prototype.hasOwnProperty,z_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gh={},Wh={};function O_(t){return Xu.call(Wh,t)?!0:Xu.call(Gh,t)?!1:z_.test(t)?Wh[t]=!0:(Gh[t]=!0,!1)}function B_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function H_(t,e,n,i){if(e===null||typeof e>"u"||B_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Af=/[\-:]([a-z])/g;function Cf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Af,Cf);Ot[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Af,Cf);Ot[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Af,Cf);Ot[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rf(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(H_(e,n,r,i)&&(n=null),i||r===null?O_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ai=k_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),ds=Symbol.for("react.portal"),fs=Symbol.for("react.fragment"),bf=Symbol.for("react.strict_mode"),ju=Symbol.for("react.profiler"),Tg=Symbol.for("react.provider"),Ag=Symbol.for("react.context"),Pf=Symbol.for("react.forward_ref"),Yu=Symbol.for("react.suspense"),$u=Symbol.for("react.suspense_list"),Lf=Symbol.for("react.memo"),Fi=Symbol.for("react.lazy"),Cg=Symbol.for("react.offscreen"),Xh=Symbol.iterator;function Qs(t){return t===null||typeof t!="object"?null:(t=Xh&&t[Xh]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,Dc;function xo(t){if(Dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dc=e&&e[1]||""}return`
`+Dc+t}var Ic=!1;function Uc(t,e){if(!t||Ic)return"";Ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xo(t):""}function V_(t){switch(t.tag){case 5:return xo(t.type);case 16:return xo("Lazy");case 13:return xo("Suspense");case 19:return xo("SuspenseList");case 0:case 2:case 15:return t=Uc(t.type,!1),t;case 11:return t=Uc(t.type.render,!1),t;case 1:return t=Uc(t.type,!0),t;default:return""}}function qu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fs:return"Fragment";case ds:return"Portal";case ju:return"Profiler";case bf:return"StrictMode";case Yu:return"Suspense";case $u:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ag:return(t.displayName||"Context")+".Consumer";case Tg:return(t._context.displayName||"Context")+".Provider";case Pf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lf:return e=t.displayName||null,e!==null?e:qu(t.type)||"Memo";case Fi:e=t._payload,t=t._init;try{return qu(t(e))}catch{}}return null}function G_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qu(e);case 8:return e===bf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function W_(t){var e=Rg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ha(t){t._valueTracker||(t._valueTracker=W_(t))}function bg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Rg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function El(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ku(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pg(t,e){e=e.checked,e!=null&&Rf(t,"checked",e,!1)}function Zu(t,e){Pg(t,e);var n=er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qu(t,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qu(t,e,n){(e!=="number"||El(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var yo=Array.isArray;function Ts(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ju(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $h(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(yo(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:er(n)}}function Lg(t,e){var n=er(e.value),i=er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function qh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ed(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pa,Ig=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(pa=pa||document.createElement("div"),pa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function No(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var To={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},X_=["Webkit","ms","Moz","O"];Object.keys(To).forEach(function(t){X_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),To[e]=To[t]})});function Ug(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||To.hasOwnProperty(t)&&To[t]?(""+e).trim():e+"px"}function Ng(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ug(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var j_=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function td(t,e){if(e){if(j_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function nd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var id=null;function Df(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rd=null,As=null,Cs=null;function Kh(t){if(t=ra(t)){if(typeof rd!="function")throw Error(se(280));var e=t.stateNode;e&&(e=dc(e),rd(t.stateNode,t.type,e))}}function Fg(t){As?Cs?Cs.push(t):Cs=[t]:As=t}function kg(){if(As){var t=As,e=Cs;if(Cs=As=null,Kh(t),e)for(t=0;t<e.length;t++)Kh(e[t])}}function zg(t,e){return t(e)}function Og(){}var Nc=!1;function Bg(t,e,n){if(Nc)return t(e,n);Nc=!0;try{return zg(t,e,n)}finally{Nc=!1,(As!==null||Cs!==null)&&(Og(),kg())}}function Fo(t,e){var n=t.stateNode;if(n===null)return null;var i=dc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var sd=!1;if(Si)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){sd=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{sd=!1}function Y_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ao=!1,wl=null,Tl=!1,od=null,$_={onError:function(t){Ao=!0,wl=t}};function q_(t,e,n,i,r,s,o,a,l){Ao=!1,wl=null,Y_.apply($_,arguments)}function K_(t,e,n,i,r,s,o,a,l){if(q_.apply(this,arguments),Ao){if(Ao){var c=wl;Ao=!1,wl=null}else throw Error(se(198));Tl||(Tl=!0,od=c)}}function Or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zh(t){if(Or(t)!==t)throw Error(se(188))}function Z_(t){var e=t.alternate;if(!e){if(e=Or(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Zh(r),t;if(s===i)return Zh(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Vg(t){return t=Z_(t),t!==null?Gg(t):null}function Gg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gg(t);if(e!==null)return e;t=t.sibling}return null}var Wg=xn.unstable_scheduleCallback,Qh=xn.unstable_cancelCallback,Q_=xn.unstable_shouldYield,J_=xn.unstable_requestPaint,St=xn.unstable_now,ex=xn.unstable_getCurrentPriorityLevel,If=xn.unstable_ImmediatePriority,Xg=xn.unstable_UserBlockingPriority,Al=xn.unstable_NormalPriority,tx=xn.unstable_LowPriority,jg=xn.unstable_IdlePriority,ac=null,ii=null;function nx(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(ac,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:sx,ix=Math.log,rx=Math.LN2;function sx(t){return t>>>=0,t===0?32:31-(ix(t)/rx|0)|0}var ma=64,ga=4194304;function So(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=So(a):(s&=o,s!==0&&(i=So(s)))}else o=n&~r,o!==0?i=So(o):s!==0&&(i=So(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function ox(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ax(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=ox(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ad(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yg(){var t=ma;return ma<<=1,!(ma&4194240)&&(ma=64),t}function Fc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function lx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Uf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function $g(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var qg,Nf,Kg,Zg,Qg,ld=!1,va=[],Gi=null,Wi=null,Xi=null,ko=new Map,zo=new Map,zi=[],cx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jh(t,e){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(e.pointerId)}}function eo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ra(e),e!==null&&Nf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ux(t,e,n,i,r){switch(e){case"focusin":return Gi=eo(Gi,t,e,n,i,r),!0;case"dragenter":return Wi=eo(Wi,t,e,n,i,r),!0;case"mouseover":return Xi=eo(Xi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ko.set(s,eo(ko.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,zo.set(s,eo(zo.get(s)||null,t,e,n,i,r)),!0}return!1}function Jg(t){var e=Mr(t.target);if(e!==null){var n=Or(e);if(n!==null){if(e=n.tag,e===13){if(e=Hg(n),e!==null){t.blockedOn=e,Qg(t.priority,function(){Kg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);id=i,n.target.dispatchEvent(i),id=null}else return e=ra(n),e!==null&&Nf(e),t.blockedOn=n,!1;e.shift()}return!0}function ep(t,e,n){al(t)&&n.delete(e)}function dx(){ld=!1,Gi!==null&&al(Gi)&&(Gi=null),Wi!==null&&al(Wi)&&(Wi=null),Xi!==null&&al(Xi)&&(Xi=null),ko.forEach(ep),zo.forEach(ep)}function to(t,e){t.blockedOn===e&&(t.blockedOn=null,ld||(ld=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,dx)))}function Oo(t){function e(r){return to(r,t)}if(0<va.length){to(va[0],t);for(var n=1;n<va.length;n++){var i=va[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Gi!==null&&to(Gi,t),Wi!==null&&to(Wi,t),Xi!==null&&to(Xi,t),ko.forEach(e),zo.forEach(e),n=0;n<zi.length;n++)i=zi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<zi.length&&(n=zi[0],n.blockedOn===null);)Jg(n),n.blockedOn===null&&zi.shift()}var Rs=Ai.ReactCurrentBatchConfig,Rl=!0;function fx(t,e,n,i){var r=rt,s=Rs.transition;Rs.transition=null;try{rt=1,Ff(t,e,n,i)}finally{rt=r,Rs.transition=s}}function hx(t,e,n,i){var r=rt,s=Rs.transition;Rs.transition=null;try{rt=4,Ff(t,e,n,i)}finally{rt=r,Rs.transition=s}}function Ff(t,e,n,i){if(Rl){var r=cd(t,e,n,i);if(r===null)jc(t,e,i,bl,n),Jh(t,i);else if(ux(r,t,e,n,i))i.stopPropagation();else if(Jh(t,i),e&4&&-1<cx.indexOf(t)){for(;r!==null;){var s=ra(r);if(s!==null&&qg(s),s=cd(t,e,n,i),s===null&&jc(t,e,i,bl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else jc(t,e,i,null,n)}}var bl=null;function cd(t,e,n,i){if(bl=null,t=Df(i),t=Mr(t),t!==null)if(e=Or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bl=t,null}function e0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ex()){case If:return 1;case Xg:return 4;case Al:case tx:return 16;case jg:return 536870912;default:return 16}default:return 16}}var Hi=null,kf=null,ll=null;function t0(){if(ll)return ll;var t,e=kf,n=e.length,i,r="value"in Hi?Hi.value:Hi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ll=r.slice(t,1<i?1-i:void 0)}function cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _a(){return!0}function tp(){return!1}function Sn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_a:tp,this.isPropagationStopped=tp,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),e}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zf=Sn($s),ia=vt({},$s,{view:0,detail:0}),px=Sn(ia),kc,zc,no,lc=vt({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(kc=t.screenX-no.screenX,zc=t.screenY-no.screenY):zc=kc=0,no=t),kc)},movementY:function(t){return"movementY"in t?t.movementY:zc}}),np=Sn(lc),mx=vt({},lc,{dataTransfer:0}),gx=Sn(mx),vx=vt({},ia,{relatedTarget:0}),Oc=Sn(vx),_x=vt({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),xx=Sn(_x),yx=vt({},$s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Sx=Sn(yx),Mx=vt({},$s,{data:0}),ip=Sn(Mx),Ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ax(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Tx[t])?!!e[t]:!1}function Of(){return Ax}var Cx=vt({},ia,{key:function(t){if(t.key){var e=Ex[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Of,charCode:function(t){return t.type==="keypress"?cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Rx=Sn(Cx),bx=vt({},lc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=Sn(bx),Px=vt({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Of}),Lx=Sn(Px),Dx=vt({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ix=Sn(Dx),Ux=vt({},lc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Nx=Sn(Ux),Fx=[9,13,27,32],Bf=Si&&"CompositionEvent"in window,Co=null;Si&&"documentMode"in document&&(Co=document.documentMode);var kx=Si&&"TextEvent"in window&&!Co,n0=Si&&(!Bf||Co&&8<Co&&11>=Co),sp=" ",op=!1;function i0(t,e){switch(t){case"keyup":return Fx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hs=!1;function zx(t,e){switch(t){case"compositionend":return r0(e);case"keypress":return e.which!==32?null:(op=!0,sp);case"textInput":return t=e.data,t===sp&&op?null:t;default:return null}}function Ox(t,e){if(hs)return t==="compositionend"||!Bf&&i0(t,e)?(t=t0(),ll=kf=Hi=null,hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return n0&&e.locale!=="ko"?null:e.data;default:return null}}var Bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Bx[t.type]:e==="textarea"}function s0(t,e,n,i){Fg(i),e=Pl(e,"onChange"),0<e.length&&(n=new zf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ro=null,Bo=null;function Hx(t){g0(t,0)}function cc(t){var e=gs(t);if(bg(e))return t}function Vx(t,e){if(t==="change")return e}var o0=!1;if(Si){var Bc;if(Si){var Hc="oninput"in document;if(!Hc){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),Hc=typeof lp.oninput=="function"}Bc=Hc}else Bc=!1;o0=Bc&&(!document.documentMode||9<document.documentMode)}function cp(){Ro&&(Ro.detachEvent("onpropertychange",a0),Bo=Ro=null)}function a0(t){if(t.propertyName==="value"&&cc(Bo)){var e=[];s0(e,Bo,t,Df(t)),Bg(Hx,e)}}function Gx(t,e,n){t==="focusin"?(cp(),Ro=e,Bo=n,Ro.attachEvent("onpropertychange",a0)):t==="focusout"&&cp()}function Wx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cc(Bo)}function Xx(t,e){if(t==="click")return cc(e)}function jx(t,e){if(t==="input"||t==="change")return cc(e)}function Yx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:Yx;function Ho(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Xu.call(e,r)||!$n(t[r],e[r]))return!1}return!0}function up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dp(t,e){var n=up(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=up(n)}}function l0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?l0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function c0(){for(var t=window,e=El();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=El(t.document)}return e}function Hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $x(t){var e=c0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&l0(n.ownerDocument.documentElement,n)){if(i!==null&&Hf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=dp(n,s);var o=dp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qx=Si&&"documentMode"in document&&11>=document.documentMode,ps=null,ud=null,bo=null,dd=!1;function fp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dd||ps==null||ps!==El(i)||(i=ps,"selectionStart"in i&&Hf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),bo&&Ho(bo,i)||(bo=i,i=Pl(ud,"onSelect"),0<i.length&&(e=new zf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ps)))}function xa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ms={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},Vc={},u0={};Si&&(u0=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function uc(t){if(Vc[t])return Vc[t];if(!ms[t])return t;var e=ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in u0)return Vc[t]=e[n];return t}var d0=uc("animationend"),f0=uc("animationiteration"),h0=uc("animationstart"),p0=uc("transitionend"),m0=new Map,hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){m0.set(t,e),zr(e,[t])}for(var Gc=0;Gc<hp.length;Gc++){var Wc=hp[Gc],Kx=Wc.toLowerCase(),Zx=Wc[0].toUpperCase()+Wc.slice(1);sr(Kx,"on"+Zx)}sr(d0,"onAnimationEnd");sr(f0,"onAnimationIteration");sr(h0,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(p0,"onTransitionEnd");Ns("onMouseEnter",["mouseout","mouseover"]);Ns("onMouseLeave",["mouseout","mouseover"]);Ns("onPointerEnter",["pointerout","pointerover"]);Ns("onPointerLeave",["pointerout","pointerover"]);zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function pp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,K_(i,e,void 0,t),t.currentTarget=null}function g0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;pp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;pp(r,a,c),s=l}}}if(Tl)throw t=od,Tl=!1,od=null,t}function lt(t,e){var n=e[gd];n===void 0&&(n=e[gd]=new Set);var i=t+"__bubble";n.has(i)||(v0(e,t,2,!1),n.add(i))}function Xc(t,e,n){var i=0;e&&(i|=4),v0(n,t,i,e)}var ya="_reactListening"+Math.random().toString(36).slice(2);function Vo(t){if(!t[ya]){t[ya]=!0,wg.forEach(function(n){n!=="selectionchange"&&(Qx.has(n)||Xc(n,!1,t),Xc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ya]||(e[ya]=!0,Xc("selectionchange",!1,e))}}function v0(t,e,n,i){switch(e0(e)){case 1:var r=fx;break;case 4:r=hx;break;default:r=Ff}n=r.bind(null,e,n,t),r=void 0,!sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function jc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Mr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Bg(function(){var c=s,f=Df(n),d=[];e:{var h=m0.get(t);if(h!==void 0){var p=zf,x=t;switch(t){case"keypress":if(cl(n)===0)break e;case"keydown":case"keyup":p=Rx;break;case"focusin":x="focus",p=Oc;break;case"focusout":x="blur",p=Oc;break;case"beforeblur":case"afterblur":p=Oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Lx;break;case d0:case f0:case h0:p=xx;break;case p0:p=Ix;break;case"scroll":p=px;break;case"wheel":p=Nx;break;case"copy":case"cut":case"paste":p=Sx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=rp}var g=(e&4)!==0,m=!g&&t==="scroll",u=g?h!==null?h+"Capture":null:h;g=[];for(var v=c,_;v!==null;){_=v;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,u!==null&&(M=Fo(v,u),M!=null&&g.push(Go(v,M,_)))),m)break;v=v.return}0<g.length&&(h=new p(h,x,null,n,f),d.push({event:h,listeners:g}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==id&&(x=n.relatedTarget||n.fromElement)&&(Mr(x)||x[Mi]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Mr(x):null,x!==null&&(m=Or(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(g=np,M="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(g=rp,M="onPointerLeave",u="onPointerEnter",v="pointer"),m=p==null?h:gs(p),_=x==null?h:gs(x),h=new g(M,v+"leave",p,n,f),h.target=m,h.relatedTarget=_,M=null,Mr(f)===c&&(g=new g(u,v+"enter",x,n,f),g.target=_,g.relatedTarget=m,M=g),m=M,p&&x)t:{for(g=p,u=x,v=0,_=g;_;_=Vr(_))v++;for(_=0,M=u;M;M=Vr(M))_++;for(;0<v-_;)g=Vr(g),v--;for(;0<_-v;)u=Vr(u),_--;for(;v--;){if(g===u||u!==null&&g===u.alternate)break t;g=Vr(g),u=Vr(u)}g=null}else g=null;p!==null&&mp(d,h,p,g,!1),x!==null&&m!==null&&mp(d,m,x,g,!0)}}e:{if(h=c?gs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var L=Vx;else if(ap(h))if(o0)L=jx;else{L=Wx;var A=Gx}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(L=Xx);if(L&&(L=L(t,c))){s0(d,L,n,f);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Qu(h,"number",h.value)}switch(A=c?gs(c):window,t){case"focusin":(ap(A)||A.contentEditable==="true")&&(ps=A,ud=c,bo=null);break;case"focusout":bo=ud=ps=null;break;case"mousedown":dd=!0;break;case"contextmenu":case"mouseup":case"dragend":dd=!1,fp(d,n,f);break;case"selectionchange":if(qx)break;case"keydown":case"keyup":fp(d,n,f)}var T;if(Bf)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else hs?i0(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(n0&&n.locale!=="ko"&&(hs||D!=="onCompositionStart"?D==="onCompositionEnd"&&hs&&(T=t0()):(Hi=f,kf="value"in Hi?Hi.value:Hi.textContent,hs=!0)),A=Pl(c,D),0<A.length&&(D=new ip(D,t,null,n,f),d.push({event:D,listeners:A}),T?D.data=T:(T=r0(n),T!==null&&(D.data=T)))),(T=kx?zx(t,n):Ox(t,n))&&(c=Pl(c,"onBeforeInput"),0<c.length&&(f=new ip("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=T))}g0(d,e)})}function Go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Pl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Fo(t,n),s!=null&&i.unshift(Go(t,s,r)),s=Fo(t,e),s!=null&&i.push(Go(t,s,r))),t=t.return}return i}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Fo(n,s),l!=null&&o.unshift(Go(n,l,a))):r||(l=Fo(n,s),l!=null&&o.push(Go(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Jx=/\r\n?/g,ey=/\u0000|\uFFFD/g;function gp(t){return(typeof t=="string"?t:""+t).replace(Jx,`
`).replace(ey,"")}function Sa(t,e,n){if(e=gp(e),gp(t)!==e&&n)throw Error(se(425))}function Ll(){}var fd=null,hd=null;function pd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var md=typeof setTimeout=="function"?setTimeout:void 0,ty=typeof clearTimeout=="function"?clearTimeout:void 0,vp=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof vp<"u"?function(t){return vp.resolve(null).then(t).catch(iy)}:md;function iy(t){setTimeout(function(){throw t})}function Yc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Oo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Oo(e)}function ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _p(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qs=Math.random().toString(36).slice(2),ei="__reactFiber$"+qs,Wo="__reactProps$"+qs,Mi="__reactContainer$"+qs,gd="__reactEvents$"+qs,ry="__reactListeners$"+qs,sy="__reactHandles$"+qs;function Mr(t){var e=t[ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mi]||n[ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_p(t);t!==null;){if(n=t[ei])return n;t=_p(t)}return e}t=n,n=t.parentNode}return null}function ra(t){return t=t[ei]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function dc(t){return t[Wo]||null}var vd=[],vs=-1;function or(t){return{current:t}}function dt(t){0>vs||(t.current=vd[vs],vd[vs]=null,vs--)}function at(t,e){vs++,vd[vs]=t.current,t.current=e}var tr={},Xt=or(tr),sn=or(!1),Lr=tr;function Fs(t,e){var n=t.type.contextTypes;if(!n)return tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function Dl(){dt(sn),dt(Xt)}function xp(t,e,n){if(Xt.current!==tr)throw Error(se(168));at(Xt,e),at(sn,n)}function _0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,G_(t)||"Unknown",r));return vt({},n,i)}function Il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Lr=Xt.current,at(Xt,t),at(sn,sn.current),!0}function yp(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=_0(t,e,Lr),i.__reactInternalMemoizedMergedChildContext=t,dt(sn),dt(Xt),at(Xt,t)):dt(sn),at(sn,n)}var pi=null,fc=!1,$c=!1;function x0(t){pi===null?pi=[t]:pi.push(t)}function oy(t){fc=!0,x0(t)}function ar(){if(!$c&&pi!==null){$c=!0;var t=0,e=rt;try{var n=pi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}pi=null,fc=!1}catch(r){throw pi!==null&&(pi=pi.slice(t+1)),Wg(If,ar),r}finally{rt=e,$c=!1}}return null}var _s=[],xs=0,Ul=null,Nl=0,An=[],Cn=0,Dr=null,gi=1,vi="";function gr(t,e){_s[xs++]=Nl,_s[xs++]=Ul,Ul=t,Nl=e}function y0(t,e,n){An[Cn++]=gi,An[Cn++]=vi,An[Cn++]=Dr,Dr=t;var i=gi;t=vi;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,gi=1<<32-Xn(e)+r|n<<r|i,vi=s+t}else gi=1<<s|n<<r|i,vi=t}function Vf(t){t.return!==null&&(gr(t,1),y0(t,1,0))}function Gf(t){for(;t===Ul;)Ul=_s[--xs],_s[xs]=null,Nl=_s[--xs],_s[xs]=null;for(;t===Dr;)Dr=An[--Cn],An[Cn]=null,vi=An[--Cn],An[Cn]=null,gi=An[--Cn],An[Cn]=null}var _n=null,vn=null,ht=!1,Hn=null;function S0(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,vn=ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:gi,overflow:vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,vn=null,!0):!1;default:return!1}}function _d(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xd(t){if(ht){var e=vn;if(e){var n=e;if(!Sp(t,e)){if(_d(t))throw Error(se(418));e=ji(n.nextSibling);var i=_n;e&&Sp(t,e)?S0(i,n):(t.flags=t.flags&-4097|2,ht=!1,_n=t)}}else{if(_d(t))throw Error(se(418));t.flags=t.flags&-4097|2,ht=!1,_n=t}}}function Mp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function Ma(t){if(t!==_n)return!1;if(!ht)return Mp(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pd(t.type,t.memoizedProps)),e&&(e=vn)){if(_d(t))throw M0(),Error(se(418));for(;e;)S0(t,e),e=ji(e.nextSibling)}if(Mp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vn=ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vn=null}}else vn=_n?ji(t.stateNode.nextSibling):null;return!0}function M0(){for(var t=vn;t;)t=ji(t.nextSibling)}function ks(){vn=_n=null,ht=!1}function Wf(t){Hn===null?Hn=[t]:Hn.push(t)}var ay=Ai.ReactCurrentBatchConfig;function io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Ea(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ep(t){var e=t._init;return e(t._payload)}function E0(t){function e(u,v){if(t){var _=u.deletions;_===null?(u.deletions=[v],u.flags|=16):_.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Ki(u,v),u.index=0,u.sibling=null,u}function s(u,v,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<v?(u.flags|=2,v):_):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,_,M){return v===null||v.tag!==6?(v=tu(_,u.mode,M),v.return=u,v):(v=r(v,_),v.return=u,v)}function l(u,v,_,M){var L=_.type;return L===fs?f(u,v,_.props.children,M,_.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Fi&&Ep(L)===v.type)?(M=r(v,_.props),M.ref=io(u,v,_),M.return=u,M):(M=gl(_.type,_.key,_.props,null,u.mode,M),M.ref=io(u,v,_),M.return=u,M)}function c(u,v,_,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=nu(_,u.mode,M),v.return=u,v):(v=r(v,_.children||[]),v.return=u,v)}function f(u,v,_,M,L){return v===null||v.tag!==7?(v=Rr(_,u.mode,M,L),v.return=u,v):(v=r(v,_),v.return=u,v)}function d(u,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=tu(""+v,u.mode,_),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fa:return _=gl(v.type,v.key,v.props,null,u.mode,_),_.ref=io(u,null,v),_.return=u,_;case ds:return v=nu(v,u.mode,_),v.return=u,v;case Fi:var M=v._init;return d(u,M(v._payload),_)}if(yo(v)||Qs(v))return v=Rr(v,u.mode,_,null),v.return=u,v;Ea(u,v)}return null}function h(u,v,_,M){var L=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return L!==null?null:a(u,v,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case fa:return _.key===L?l(u,v,_,M):null;case ds:return _.key===L?c(u,v,_,M):null;case Fi:return L=_._init,h(u,v,L(_._payload),M)}if(yo(_)||Qs(_))return L!==null?null:f(u,v,_,M,null);Ea(u,_)}return null}function p(u,v,_,M,L){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(_)||null,a(v,u,""+M,L);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case fa:return u=u.get(M.key===null?_:M.key)||null,l(v,u,M,L);case ds:return u=u.get(M.key===null?_:M.key)||null,c(v,u,M,L);case Fi:var A=M._init;return p(u,v,_,A(M._payload),L)}if(yo(M)||Qs(M))return u=u.get(_)||null,f(v,u,M,L,null);Ea(v,M)}return null}function x(u,v,_,M){for(var L=null,A=null,T=v,D=v=0,w=null;T!==null&&D<_.length;D++){T.index>D?(w=T,T=null):w=T.sibling;var y=h(u,T,_[D],M);if(y===null){T===null&&(T=w);break}t&&T&&y.alternate===null&&e(u,T),v=s(y,v,D),A===null?L=y:A.sibling=y,A=y,T=w}if(D===_.length)return n(u,T),ht&&gr(u,D),L;if(T===null){for(;D<_.length;D++)T=d(u,_[D],M),T!==null&&(v=s(T,v,D),A===null?L=T:A.sibling=T,A=T);return ht&&gr(u,D),L}for(T=i(u,T);D<_.length;D++)w=p(T,u,D,_[D],M),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?D:w.key),v=s(w,v,D),A===null?L=w:A.sibling=w,A=w);return t&&T.forEach(function(U){return e(u,U)}),ht&&gr(u,D),L}function g(u,v,_,M){var L=Qs(_);if(typeof L!="function")throw Error(se(150));if(_=L.call(_),_==null)throw Error(se(151));for(var A=L=null,T=v,D=v=0,w=null,y=_.next();T!==null&&!y.done;D++,y=_.next()){T.index>D?(w=T,T=null):w=T.sibling;var U=h(u,T,y.value,M);if(U===null){T===null&&(T=w);break}t&&T&&U.alternate===null&&e(u,T),v=s(U,v,D),A===null?L=U:A.sibling=U,A=U,T=w}if(y.done)return n(u,T),ht&&gr(u,D),L;if(T===null){for(;!y.done;D++,y=_.next())y=d(u,y.value,M),y!==null&&(v=s(y,v,D),A===null?L=y:A.sibling=y,A=y);return ht&&gr(u,D),L}for(T=i(u,T);!y.done;D++,y=_.next())y=p(T,u,D,y.value,M),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?D:y.key),v=s(y,v,D),A===null?L=y:A.sibling=y,A=y);return t&&T.forEach(function(V){return e(u,V)}),ht&&gr(u,D),L}function m(u,v,_,M){if(typeof _=="object"&&_!==null&&_.type===fs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case fa:e:{for(var L=_.key,A=v;A!==null;){if(A.key===L){if(L=_.type,L===fs){if(A.tag===7){n(u,A.sibling),v=r(A,_.props.children),v.return=u,u=v;break e}}else if(A.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Fi&&Ep(L)===A.type){n(u,A.sibling),v=r(A,_.props),v.ref=io(u,A,_),v.return=u,u=v;break e}n(u,A);break}else e(u,A);A=A.sibling}_.type===fs?(v=Rr(_.props.children,u.mode,M,_.key),v.return=u,u=v):(M=gl(_.type,_.key,_.props,null,u.mode,M),M.ref=io(u,v,_),M.return=u,u=M)}return o(u);case ds:e:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(u,v.sibling),v=r(v,_.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=nu(_,u.mode,M),v.return=u,u=v}return o(u);case Fi:return A=_._init,m(u,v,A(_._payload),M)}if(yo(_))return x(u,v,_,M);if(Qs(_))return g(u,v,_,M);Ea(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,_),v.return=u,u=v):(n(u,v),v=tu(_,u.mode,M),v.return=u,u=v),o(u)):n(u,v)}return m}var zs=E0(!0),w0=E0(!1),Fl=or(null),kl=null,ys=null,Xf=null;function jf(){Xf=ys=kl=null}function Yf(t){var e=Fl.current;dt(Fl),t._currentValue=e}function yd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function bs(t,e){kl=t,Xf=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(Xf!==t)if(t={context:t,memoizedValue:e,next:null},ys===null){if(kl===null)throw Error(se(308));ys=t,kl.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return e}var Er=null;function $f(t){Er===null?Er=[t]:Er.push(t)}function T0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,$f(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ei(t,i)}function Ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ki=!1;function qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function A0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(t,n)}return r=i.interleaved,r===null?(e.next=e,$f(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(t,n)}function ul(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uf(t,n)}}function wp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zl(t,e,n,i){var r=t.updateQueue;ki=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,g=a;switch(h=e,p=n,g.tag){case 1:if(x=g.payload,typeof x=="function"){d=x.call(p,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,h=typeof x=="function"?x.call(p,d,h):x,h==null)break e;d=vt({},d,h);break e;case 2:ki=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ur|=o,t.lanes=o,t.memoizedState=d}}function Tp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var sa={},ri=or(sa),Xo=or(sa),jo=or(sa);function wr(t){if(t===sa)throw Error(se(174));return t}function Kf(t,e){switch(at(jo,e),at(Xo,t),at(ri,sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ed(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ed(e,t)}dt(ri),at(ri,e)}function Os(){dt(ri),dt(Xo),dt(jo)}function C0(t){wr(jo.current);var e=wr(ri.current),n=ed(e,t.type);e!==n&&(at(Xo,t),at(ri,n))}function Zf(t){Xo.current===t&&(dt(ri),dt(Xo))}var mt=or(0);function Ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qc=[];function Qf(){for(var t=0;t<qc.length;t++)qc[t]._workInProgressVersionPrimary=null;qc.length=0}var dl=Ai.ReactCurrentDispatcher,Kc=Ai.ReactCurrentBatchConfig,Ir=0,gt=null,Ct=null,Dt=null,Bl=!1,Po=!1,Yo=0,ly=0;function Bt(){throw Error(se(321))}function Jf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function eh(t,e,n,i,r,s){if(Ir=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,dl.current=t===null||t.memoizedState===null?fy:hy,t=n(i,r),Po){s=0;do{if(Po=!1,Yo=0,25<=s)throw Error(se(301));s+=1,Dt=Ct=null,e.updateQueue=null,dl.current=py,t=n(i,r)}while(Po)}if(dl.current=Hl,e=Ct!==null&&Ct.next!==null,Ir=0,Dt=Ct=gt=null,Bl=!1,e)throw Error(se(300));return t}function th(){var t=Yo!==0;return Yo=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?gt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function In(){if(Ct===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Dt===null?gt.memoizedState:Dt.next;if(e!==null)Dt=e,Ct=t;else{if(t===null)throw Error(se(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Dt===null?gt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function $o(t,e){return typeof e=="function"?e(t):e}function Zc(t){var e=In(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Ir&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,gt.lanes|=f,Ur|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,$n(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,Ur|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qc(t){var e=In(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);$n(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function R0(){}function b0(t,e){var n=gt,i=In(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,nh(D0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,qo(9,L0.bind(null,n,i,r,e),void 0,null),It===null)throw Error(se(349));Ir&30||P0(n,e,r)}return r}function P0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function L0(t,e,n,i){e.value=n,e.getSnapshot=i,I0(e)&&U0(t)}function D0(t,e,n){return n(function(){I0(e)&&U0(t)})}function I0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function U0(t){var e=Ei(t,1);e!==null&&jn(e,t,1,-1)}function Ap(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},e.queue=t,t=t.dispatch=dy.bind(null,gt,t),[e.memoizedState,t]}function qo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function N0(){return In().memoizedState}function fl(t,e,n,i){var r=Zn();gt.flags|=t,r.memoizedState=qo(1|e,n,void 0,i===void 0?null:i)}function hc(t,e,n,i){var r=In();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&Jf(i,o.deps)){r.memoizedState=qo(e,n,s,i);return}}gt.flags|=t,r.memoizedState=qo(1|e,n,s,i)}function Cp(t,e){return fl(8390656,8,t,e)}function nh(t,e){return hc(2048,8,t,e)}function F0(t,e){return hc(4,2,t,e)}function k0(t,e){return hc(4,4,t,e)}function z0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function O0(t,e,n){return n=n!=null?n.concat([t]):null,hc(4,4,z0.bind(null,e,t),n)}function ih(){}function B0(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function H0(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function V0(t,e,n){return Ir&21?($n(n,e)||(n=Yg(),gt.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function cy(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Kc.transition;Kc.transition={};try{t(!1),e()}finally{rt=n,Kc.transition=i}}function G0(){return In().memoizedState}function uy(t,e,n){var i=qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},W0(t))X0(e,n);else if(n=T0(t,e,n,i),n!==null){var r=qt();jn(n,t,i,r),j0(n,e,i)}}function dy(t,e,n){var i=qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(W0(t))X0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,$n(a,o)){var l=e.interleaved;l===null?(r.next=r,$f(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=T0(t,e,r,i),n!==null&&(r=qt(),jn(n,t,i,r),j0(n,e,i))}}function W0(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function X0(t,e){Po=Bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function j0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uf(t,n)}}var Hl={readContext:Dn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},fy={readContext:Dn,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:Cp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fl(4194308,4,z0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fl(4194308,4,t,e)},useInsertionEffect:function(t,e){return fl(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=uy.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:Ap,useDebugValue:ih,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=Ap(!1),e=t[0];return t=cy.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=Zn();if(ht){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),It===null)throw Error(se(349));Ir&30||P0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Cp(D0.bind(null,i,s,t),[t]),i.flags|=2048,qo(9,L0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=It.identifierPrefix;if(ht){var n=vi,i=gi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Yo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ly++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hy={readContext:Dn,useCallback:B0,useContext:Dn,useEffect:nh,useImperativeHandle:O0,useInsertionEffect:F0,useLayoutEffect:k0,useMemo:H0,useReducer:Zc,useRef:N0,useState:function(){return Zc($o)},useDebugValue:ih,useDeferredValue:function(t){var e=In();return V0(e,Ct.memoizedState,t)},useTransition:function(){var t=Zc($o)[0],e=In().memoizedState;return[t,e]},useMutableSource:R0,useSyncExternalStore:b0,useId:G0,unstable_isNewReconciler:!1},py={readContext:Dn,useCallback:B0,useContext:Dn,useEffect:nh,useImperativeHandle:O0,useInsertionEffect:F0,useLayoutEffect:k0,useMemo:H0,useReducer:Qc,useRef:N0,useState:function(){return Qc($o)},useDebugValue:ih,useDeferredValue:function(t){var e=In();return Ct===null?e.memoizedState=t:V0(e,Ct.memoizedState,t)},useTransition:function(){var t=Qc($o)[0],e=In().memoizedState;return[t,e]},useMutableSource:R0,useSyncExternalStore:b0,useId:G0,unstable_isNewReconciler:!1};function On(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Sd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pc={isMounted:function(t){return(t=t._reactInternals)?Or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=qi(t),s=yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(jn(e,t,r,i),ul(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=qi(t),s=yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(jn(e,t,r,i),ul(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=qi(t),r=yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Yi(t,r,i),e!==null&&(jn(e,t,i,n),ul(e,t,i))}};function Rp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ho(n,i)||!Ho(r,s):!0}function Y0(t,e,n){var i=!1,r=tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(r=on(e)?Lr:Xt.current,i=e.contextTypes,s=(i=i!=null)?Fs(t,r):tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function bp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&pc.enqueueReplaceState(e,e.state,null)}function Md(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},qf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Dn(s):(s=on(e)?Lr:Xt.current,r.context=Fs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Sd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&pc.enqueueReplaceState(r,r.state,null),zl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,e){try{var n="",i=e;do n+=V_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Jc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ed(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var my=typeof WeakMap=="function"?WeakMap:Map;function $0(t,e,n){n=yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Gl||(Gl=!0,Id=i),Ed(t,e)},n}function q0(t,e,n){n=yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ed(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ed(t,e),typeof i!="function"&&($i===null?$i=new Set([this]):$i.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new my;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=by.bind(null,t,e,n),e.then(t,t))}function Lp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yi(-1,1),e.tag=2,Yi(n,e,1))),n.lanes|=1),t)}var gy=Ai.ReactCurrentOwner,rn=!1;function $t(t,e,n,i){e.child=t===null?w0(e,null,n,i):zs(e,t.child,n,i)}function Ip(t,e,n,i,r){n=n.render;var s=e.ref;return bs(e,r),i=eh(t,e,n,i,s,r),n=th(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(ht&&n&&Vf(e),e.flags|=1,$t(t,e,i,r),e.child)}function Up(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!dh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,K0(t,e,s,i,r)):(t=gl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ho,n(o,i)&&t.ref===e.ref)return wi(t,e,r)}return e.flags|=1,t=Ki(s,i),t.ref=e.ref,t.return=e,e.child=t}function K0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ho(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,wi(t,e,r)}return wd(t,e,n,i,r)}function Z0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(Ms,mn),mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(Ms,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,at(Ms,mn),mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,at(Ms,mn),mn|=i;return $t(t,e,r,n),e.child}function Q0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wd(t,e,n,i,r){var s=on(n)?Lr:Xt.current;return s=Fs(e,s),bs(e,r),n=eh(t,e,n,i,s,r),i=th(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(ht&&i&&Vf(e),e.flags|=1,$t(t,e,n,r),e.child)}function Np(t,e,n,i,r){if(on(n)){var s=!0;Il(e)}else s=!1;if(bs(e,r),e.stateNode===null)hl(t,e),Y0(e,n,i),Md(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dn(c):(c=on(n)?Lr:Xt.current,c=Fs(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&bp(e,o,i,c),ki=!1;var h=e.memoizedState;o.state=h,zl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||sn.current||ki?(typeof f=="function"&&(Sd(e,n,f,i),l=e.memoizedState),(a=ki||Rp(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,A0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:On(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=on(n)?Lr:Xt.current,l=Fs(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&bp(e,o,i,l),ki=!1,h=e.memoizedState,o.state=h,zl(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||sn.current||ki?(typeof p=="function"&&(Sd(e,n,p,i),x=e.memoizedState),(c=ki||Rp(e,n,c,i,h,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Td(t,e,n,i,s,r)}function Td(t,e,n,i,r,s){Q0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&yp(e,n,!1),wi(t,e,s);i=e.stateNode,gy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,a,s)):$t(t,e,a,s),e.memoizedState=i.state,r&&yp(e,n,!0),e.child}function J0(t){var e=t.stateNode;e.pendingContext?xp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xp(t,e.context,!1),Kf(t,e.containerInfo)}function Fp(t,e,n,i,r){return ks(),Wf(r),e.flags|=256,$t(t,e,n,i),e.child}var Ad={dehydrated:null,treeContext:null,retryLane:0};function Cd(t){return{baseLanes:t,cachePool:null,transitions:null}}function ev(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(mt,r&1),t===null)return xd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vc(o,i,0,null),t=Rr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Cd(n),e.memoizedState=Ad,t):rh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return vy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ki(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ki(a,s):(s=Rr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Cd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ad,i}return s=t.child,t=s.sibling,i=Ki(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function rh(t,e){return e=vc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wa(t,e,n,i){return i!==null&&Wf(i),zs(e,t.child,null,n),t=rh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Jc(Error(se(422))),wa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=vc({mode:"visible",children:i.children},r,0,null),s=Rr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zs(e,t.child,null,o),e.child.memoizedState=Cd(o),e.memoizedState=Ad,s);if(!(e.mode&1))return wa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Jc(s,i,void 0),wa(t,e,o,i)}if(a=(o&t.childLanes)!==0,rn||a){if(i=It,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ei(t,r),jn(i,t,r,-1))}return uh(),i=Jc(Error(se(421))),wa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Py.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,vn=ji(r.nextSibling),_n=e,ht=!0,Hn=null,t!==null&&(An[Cn++]=gi,An[Cn++]=vi,An[Cn++]=Dr,gi=t.id,vi=t.overflow,Dr=e),e=rh(e,i.children),e.flags|=4096,e)}function kp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),yd(t.return,e,n)}function eu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function tv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kp(t,n,e);else if(t.tag===19)kp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ol(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),eu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ol(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}eu(e,!0,n,null,s);break;case"together":eu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _y(t,e,n){switch(e.tag){case 3:J0(e),ks();break;case 5:C0(e);break;case 1:on(e.type)&&Il(e);break;case 4:Kf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(Fl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?ev(t,e,n):(at(mt,mt.current&1),t=wi(t,e,n),t!==null?t.sibling:null);at(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return tv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,Z0(t,e,n)}return wi(t,e,n)}var nv,Rd,iv,rv;nv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rd=function(){};iv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,wr(ri.current);var s=null;switch(n){case"input":r=Ku(t,r),i=Ku(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=Ju(t,r),i=Ju(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ll)}td(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Uo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&lt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};rv=function(t,e,n,i){n!==i&&(e.flags|=4)};function ro(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function xy(t,e,n){var i=e.pendingProps;switch(Gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return on(e.type)&&Dl(),Ht(e),null;case 3:return i=e.stateNode,Os(),dt(sn),dt(Xt),Qf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ma(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(Fd(Hn),Hn=null))),Rd(t,e),Ht(e),null;case 5:Zf(e);var r=wr(jo.current);if(n=e.type,t!==null&&e.stateNode!=null)iv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Ht(e),null}if(t=wr(ri.current),Ma(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ei]=e,i[Wo]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<Mo.length;r++)lt(Mo[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":jh(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":$h(i,s),lt("invalid",i)}td(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Sa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Sa(i.textContent,a,t),r=["children",""+a]):Uo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&lt("scroll",i)}switch(n){case"input":ha(i),Yh(i,s,!0);break;case"textarea":ha(i),qh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ll)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ei]=e,t[Wo]=i,nv(t,e,!1,!1),e.stateNode=t;e:{switch(o=nd(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Mo.length;r++)lt(Mo[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":jh(t,i),r=Ku(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":$h(t,i),r=Ju(t,i),lt("invalid",t);break;default:r=i}td(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ng(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ig(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&No(t,l):typeof l=="number"&&No(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Uo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",t):l!=null&&Rf(t,s,l,o))}switch(n){case"input":ha(t),Yh(t,i,!1);break;case"textarea":ha(t),qh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ts(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ts(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ll)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)rv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=wr(jo.current),wr(ri.current),Ma(e)){if(i=e.stateNode,n=e.memoizedProps,i[ei]=e,(s=i.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:Sa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return Ht(e),null;case 13:if(dt(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&vn!==null&&e.mode&1&&!(e.flags&128))M0(),ks(),e.flags|=98560,s=!1;else if(s=Ma(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[ei]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),s=!1}else Hn!==null&&(Fd(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Rt===0&&(Rt=3):uh())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return Os(),Rd(t,e),t===null&&Vo(e.stateNode.containerInfo),Ht(e),null;case 10:return Yf(e.type._context),Ht(e),null;case 17:return on(e.type)&&Dl(),Ht(e),null;case 19:if(dt(mt),s=e.memoizedState,s===null)return Ht(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ro(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ol(t),o!==null){for(e.flags|=128,ro(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>Hs&&(e.flags|=128,i=!0,ro(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ol(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return Ht(e),null}else 2*St()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,i=!0,ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=mt.current,at(mt,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return ch(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function yy(t,e){switch(Gf(e),e.tag){case 1:return on(e.type)&&Dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Os(),dt(sn),dt(Xt),Qf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zf(e),null;case 13:if(dt(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(mt),null;case 4:return Os(),null;case 10:return Yf(e.type._context),null;case 22:case 23:return ch(),null;case 24:return null;default:return null}}var Ta=!1,Wt=!1,Sy=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function bd(t,e,n){try{n()}catch(i){yt(t,e,i)}}var zp=!1;function My(t,e){if(fd=Rl,t=c0(),Hf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hd={focusedElem:t,selectionRange:n},Rl=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,m=x.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?g:On(e.type,g),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(M){yt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return x=zp,zp=!1,x}function Lo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&bd(e,n,s)}r=r.next}while(r!==i)}}function mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Pd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sv(t){var e=t.alternate;e!==null&&(t.alternate=null,sv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ei],delete e[Wo],delete e[gd],delete e[ry],delete e[sy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ov(t){return t.tag===5||t.tag===3||t.tag===4}function Op(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ov(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ld(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ll));else if(i!==4&&(t=t.child,t!==null))for(Ld(t,e,n),t=t.sibling;t!==null;)Ld(t,e,n),t=t.sibling}function Dd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Dd(t,e,n),t=t.sibling;t!==null;)Dd(t,e,n),t=t.sibling}var kt=null,Bn=!1;function Ri(t,e,n){for(n=n.child;n!==null;)av(t,e,n),n=n.sibling}function av(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(ac,n)}catch{}switch(n.tag){case 5:Wt||Ss(n,e);case 6:var i=kt,r=Bn;kt=null,Ri(t,e,n),kt=i,Bn=r,kt!==null&&(Bn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Bn?(t=kt,n=n.stateNode,t.nodeType===8?Yc(t.parentNode,n):t.nodeType===1&&Yc(t,n),Oo(t)):Yc(kt,n.stateNode));break;case 4:i=kt,r=Bn,kt=n.stateNode.containerInfo,Bn=!0,Ri(t,e,n),kt=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bd(n,e,o),r=r.next}while(r!==i)}Ri(t,e,n);break;case 1:if(!Wt&&(Ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}Ri(t,e,n);break;case 21:Ri(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Ri(t,e,n),Wt=i):Ri(t,e,n);break;default:Ri(t,e,n)}}function Bp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Sy),e.forEach(function(i){var r=Ly.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Bn=!1;break e;case 3:kt=a.stateNode.containerInfo,Bn=!0;break e;case 4:kt=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(kt===null)throw Error(se(160));av(s,o,r),kt=null,Bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lv(e,t),e=e.sibling}function lv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),Kn(t),i&4){try{Lo(3,t,t.return),mc(3,t)}catch(g){yt(t,t.return,g)}try{Lo(5,t,t.return)}catch(g){yt(t,t.return,g)}}break;case 1:Nn(e,t),Kn(t),i&512&&n!==null&&Ss(n,n.return);break;case 5:if(Nn(e,t),Kn(t),i&512&&n!==null&&Ss(n,n.return),t.flags&32){var r=t.stateNode;try{No(r,"")}catch(g){yt(t,t.return,g)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Pg(r,s),nd(a,o);var c=nd(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?Ng(r,d):f==="dangerouslySetInnerHTML"?Ig(r,d):f==="children"?No(r,d):Rf(r,f,d,c)}switch(a){case"input":Zu(r,s);break;case"textarea":Lg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ts(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ts(r,!!s.multiple,s.defaultValue,!0):Ts(r,!!s.multiple,s.multiple?[]:"",!1))}r[Wo]=s}catch(g){yt(t,t.return,g)}}break;case 6:if(Nn(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(g){yt(t,t.return,g)}}break;case 3:if(Nn(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Oo(e.containerInfo)}catch(g){yt(t,t.return,g)}break;case 4:Nn(e,t),Kn(t);break;case 13:Nn(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ah=St())),i&4&&Bp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(c=Wt)||f,Nn(e,t),Wt=c):Nn(e,t),Kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Se=t,f=t.child;f!==null;){for(d=Se=f;Se!==null;){switch(h=Se,p=h.child,h.tag){case 0:case 11:case 14:case 15:Lo(4,h,h.return);break;case 1:Ss(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(g){yt(i,n,g)}}break;case 5:Ss(h,h.return);break;case 22:if(h.memoizedState!==null){Vp(d);continue}}p!==null?(p.return=h,Se=p):Vp(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ug("display",o))}catch(g){yt(t,t.return,g)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(g){yt(t,t.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Nn(e,t),Kn(t),i&4&&Bp(t);break;case 21:break;default:Nn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ov(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(No(r,""),i.flags&=-33);var s=Op(t);Dd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Op(t);Ld(t,a,o);break;default:throw Error(se(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ey(t,e,n){Se=t,cv(t)}function cv(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ta;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=Ta;var c=Wt;if(Ta=o,(Wt=l)&&!c)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?Gp(r):l!==null?(l.return=o,Se=l):Gp(r);for(;s!==null;)Se=s,cv(s),s=s.sibling;Se=r,Ta=a,Wt=c}Hp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):Hp(t)}}function Hp(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||mc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Oo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Wt||e.flags&512&&Pd(e)}catch(h){yt(e,e.return,h)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Vp(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Gp(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{mc(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{Pd(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{Pd(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var wy=Math.ceil,Vl=Ai.ReactCurrentDispatcher,sh=Ai.ReactCurrentOwner,Ln=Ai.ReactCurrentBatchConfig,Qe=0,It=null,Tt=null,zt=0,mn=0,Ms=or(0),Rt=0,Ko=null,Ur=0,gc=0,oh=0,Do=null,en=null,ah=0,Hs=1/0,hi=null,Gl=!1,Id=null,$i=null,Aa=!1,Vi=null,Wl=0,Io=0,Ud=null,pl=-1,ml=0;function qt(){return Qe&6?St():pl!==-1?pl:pl=St()}function qi(t){return t.mode&1?Qe&2&&zt!==0?zt&-zt:ay.transition!==null?(ml===0&&(ml=Yg()),ml):(t=rt,t!==0||(t=window.event,t=t===void 0?16:e0(t.type)),t):1}function jn(t,e,n,i){if(50<Io)throw Io=0,Ud=null,Error(se(185));na(t,n,i),(!(Qe&2)||t!==It)&&(t===It&&(!(Qe&2)&&(gc|=n),Rt===4&&Oi(t,zt)),an(t,i),n===1&&Qe===0&&!(e.mode&1)&&(Hs=St()+500,fc&&ar()))}function an(t,e){var n=t.callbackNode;ax(t,e);var i=Cl(t,t===It?zt:0);if(i===0)n!==null&&Qh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Qh(n),e===1)t.tag===0?oy(Wp.bind(null,t)):x0(Wp.bind(null,t)),ny(function(){!(Qe&6)&&ar()}),n=null;else{switch($g(i)){case 1:n=If;break;case 4:n=Xg;break;case 16:n=Al;break;case 536870912:n=jg;break;default:n=Al}n=vv(n,uv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function uv(t,e){if(pl=-1,ml=0,Qe&6)throw Error(se(327));var n=t.callbackNode;if(Ps()&&t.callbackNode!==n)return null;var i=Cl(t,t===It?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Xl(t,i);else{e=i;var r=Qe;Qe|=2;var s=fv();(It!==t||zt!==e)&&(hi=null,Hs=St()+500,Cr(t,e));do try{Cy();break}catch(a){dv(t,a)}while(!0);jf(),Vl.current=s,Qe=r,Tt!==null?e=0:(It=null,zt=0,e=Rt)}if(e!==0){if(e===2&&(r=ad(t),r!==0&&(i=r,e=Nd(t,r))),e===1)throw n=Ko,Cr(t,0),Oi(t,i),an(t,St()),n;if(e===6)Oi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ty(r)&&(e=Xl(t,i),e===2&&(s=ad(t),s!==0&&(i=s,e=Nd(t,s))),e===1))throw n=Ko,Cr(t,0),Oi(t,i),an(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:vr(t,en,hi);break;case 3:if(Oi(t,i),(i&130023424)===i&&(e=ah+500-St(),10<e)){if(Cl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=md(vr.bind(null,t,en,hi),e);break}vr(t,en,hi);break;case 4:if(Oi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Xn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*wy(i/1960))-i,10<i){t.timeoutHandle=md(vr.bind(null,t,en,hi),i);break}vr(t,en,hi);break;case 5:vr(t,en,hi);break;default:throw Error(se(329))}}}return an(t,St()),t.callbackNode===n?uv.bind(null,t):null}function Nd(t,e){var n=Do;return t.current.memoizedState.isDehydrated&&(Cr(t,e).flags|=256),t=Xl(t,e),t!==2&&(e=en,en=n,e!==null&&Fd(e)),t}function Fd(t){en===null?en=t:en.push.apply(en,t)}function Ty(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Oi(t,e){for(e&=~oh,e&=~gc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function Wp(t){if(Qe&6)throw Error(se(327));Ps();var e=Cl(t,0);if(!(e&1))return an(t,St()),null;var n=Xl(t,e);if(t.tag!==0&&n===2){var i=ad(t);i!==0&&(e=i,n=Nd(t,i))}if(n===1)throw n=Ko,Cr(t,0),Oi(t,e),an(t,St()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,en,hi),an(t,St()),null}function lh(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(Hs=St()+500,fc&&ar())}}function Nr(t){Vi!==null&&Vi.tag===0&&!(Qe&6)&&Ps();var e=Qe;Qe|=1;var n=Ln.transition,i=rt;try{if(Ln.transition=null,rt=1,t)return t()}finally{rt=i,Ln.transition=n,Qe=e,!(Qe&6)&&ar()}}function ch(){mn=Ms.current,dt(Ms)}function Cr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ty(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(Gf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Dl();break;case 3:Os(),dt(sn),dt(Xt),Qf();break;case 5:Zf(i);break;case 4:Os();break;case 13:dt(mt);break;case 19:dt(mt);break;case 10:Yf(i.type._context);break;case 22:case 23:ch()}n=n.return}if(It=t,Tt=t=Ki(t.current,null),zt=mn=e,Rt=0,Ko=null,oh=gc=Ur=0,en=Do=null,Er!==null){for(e=0;e<Er.length;e++)if(n=Er[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Er=null}return t}function dv(t,e){do{var n=Tt;try{if(jf(),dl.current=Hl,Bl){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Bl=!1}if(Ir=0,Dt=Ct=gt=null,Po=!1,Yo=0,sh.current=null,n===null||n.return===null){Rt=1,Ko=e,Tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Lp(o);if(p!==null){p.flags&=-257,Dp(p,o,a,s,e),p.mode&1&&Pp(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var g=new Set;g.add(l),e.updateQueue=g}else x.add(l);break e}else{if(!(e&1)){Pp(s,c,e),uh();break e}l=Error(se(426))}}else if(ht&&a.mode&1){var m=Lp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Dp(m,o,a,s,e),Wf(Bs(l,a));break e}}s=l=Bs(l,a),Rt!==4&&(Rt=2),Do===null?Do=[s]:Do.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=$0(s,l,e);wp(s,u);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&($i===null||!$i.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=q0(s,a,e);wp(s,M);break e}}s=s.return}while(s!==null)}pv(n)}catch(L){e=L,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function fv(){var t=Vl.current;return Vl.current=Hl,t===null?Hl:t}function uh(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),It===null||!(Ur&268435455)&&!(gc&268435455)||Oi(It,zt)}function Xl(t,e){var n=Qe;Qe|=2;var i=fv();(It!==t||zt!==e)&&(hi=null,Cr(t,e));do try{Ay();break}catch(r){dv(t,r)}while(!0);if(jf(),Qe=n,Vl.current=i,Tt!==null)throw Error(se(261));return It=null,zt=0,Rt}function Ay(){for(;Tt!==null;)hv(Tt)}function Cy(){for(;Tt!==null&&!Q_();)hv(Tt)}function hv(t){var e=gv(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?pv(t):Tt=e,sh.current=null}function pv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yy(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,Tt=null;return}}else if(n=xy(n,e,mn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Rt===0&&(Rt=5)}function vr(t,e,n){var i=rt,r=Ln.transition;try{Ln.transition=null,rt=1,Ry(t,e,n,i)}finally{Ln.transition=r,rt=i}return null}function Ry(t,e,n,i){do Ps();while(Vi!==null);if(Qe&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(lx(t,s),t===It&&(Tt=It=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Aa||(Aa=!0,vv(Al,function(){return Ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var o=rt;rt=1;var a=Qe;Qe|=4,sh.current=null,My(t,n),lv(n,t),$x(hd),Rl=!!fd,hd=fd=null,t.current=n,Ey(n),J_(),Qe=a,rt=o,Ln.transition=s}else t.current=n;if(Aa&&(Aa=!1,Vi=t,Wl=r),s=t.pendingLanes,s===0&&($i=null),nx(n.stateNode),an(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Gl)throw Gl=!1,t=Id,Id=null,t;return Wl&1&&t.tag!==0&&Ps(),s=t.pendingLanes,s&1?t===Ud?Io++:(Io=0,Ud=t):Io=0,ar(),null}function Ps(){if(Vi!==null){var t=$g(Wl),e=Ln.transition,n=rt;try{if(Ln.transition=null,rt=16>t?16:t,Vi===null)var i=!1;else{if(t=Vi,Vi=null,Wl=0,Qe&6)throw Error(se(331));var r=Qe;for(Qe|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Se=c;Se!==null;){var f=Se;switch(f.tag){case 0:case 11:case 15:Lo(8,f,s)}var d=f.child;if(d!==null)d.return=f,Se=d;else for(;Se!==null;){f=Se;var h=f.sibling,p=f.return;if(sv(f),f===c){Se=null;break}if(h!==null){h.return=p,Se=h;break}Se=p}}}var x=s.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Lo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Se=u;break e}Se=s.return}}var v=t.current;for(Se=v;Se!==null;){o=Se;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Se=_;else e:for(o=v;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mc(9,a)}}catch(L){yt(a,a.return,L)}if(a===o){Se=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Se=M;break e}Se=a.return}}if(Qe=r,ar(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(ac,t)}catch{}i=!0}return i}finally{rt=n,Ln.transition=e}}return!1}function Xp(t,e,n){e=Bs(n,e),e=$0(t,e,1),t=Yi(t,e,1),e=qt(),t!==null&&(na(t,1,e),an(t,e))}function yt(t,e,n){if(t.tag===3)Xp(t,t,n);else for(;e!==null;){if(e.tag===3){Xp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($i===null||!$i.has(i))){t=Bs(n,t),t=q0(e,t,1),e=Yi(e,t,1),t=qt(),e!==null&&(na(e,1,t),an(e,t));break}}e=e.return}}function by(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(zt&n)===n&&(Rt===4||Rt===3&&(zt&130023424)===zt&&500>St()-ah?Cr(t,0):oh|=n),an(t,e)}function mv(t,e){e===0&&(t.mode&1?(e=ga,ga<<=1,!(ga&130023424)&&(ga=4194304)):e=1);var n=qt();t=Ei(t,e),t!==null&&(na(t,e,n),an(t,n))}function Py(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mv(t,n)}function Ly(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),mv(t,n)}var gv;gv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,_y(t,e,n);rn=!!(t.flags&131072)}else rn=!1,ht&&e.flags&1048576&&y0(e,Nl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;hl(t,e),t=e.pendingProps;var r=Fs(e,Xt.current);bs(e,n),r=eh(null,e,i,t,r,n);var s=th();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(s=!0,Il(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,qf(e),r.updater=pc,e.stateNode=r,r._reactInternals=e,Md(e,i,t,n),e=Td(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&Vf(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(hl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Iy(i),t=On(i,t),r){case 0:e=wd(null,e,i,t,n);break e;case 1:e=Np(null,e,i,t,n);break e;case 11:e=Ip(null,e,i,t,n);break e;case 14:e=Up(null,e,i,On(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),wd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Np(t,e,i,r,n);case 3:e:{if(J0(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,A0(t,e),zl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Bs(Error(se(423)),e),e=Fp(t,e,i,n,r);break e}else if(i!==r){r=Bs(Error(se(424)),e),e=Fp(t,e,i,n,r);break e}else for(vn=ji(e.stateNode.containerInfo.firstChild),_n=e,ht=!0,Hn=null,n=w0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),i===r){e=wi(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return C0(e),t===null&&xd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,pd(i,r)?o=null:s!==null&&pd(i,s)&&(e.flags|=32),Q0(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&xd(e),null;case 13:return ev(t,e,n);case 4:return Kf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Ip(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,at(Fl,i._currentValue),i._currentValue=o,s!==null)if($n(s.value,o)){if(s.children===r.children&&!sn.current){e=wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=yi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),yd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),yd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,bs(e,n),r=Dn(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=On(i,e.pendingProps),r=On(i.type,r),Up(t,e,i,r,n);case 15:return K0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),hl(t,e),e.tag=1,on(i)?(t=!0,Il(e)):t=!1,bs(e,n),Y0(e,i,r),Md(e,i,r,n),Td(null,e,i,!0,t,n);case 19:return tv(t,e,n);case 22:return Z0(t,e,n)}throw Error(se(156,e.tag))};function vv(t,e){return Wg(t,e)}function Dy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new Dy(t,e,n,i)}function dh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Iy(t){if(typeof t=="function")return dh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pf)return 11;if(t===Lf)return 14}return 2}function Ki(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")dh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fs:return Rr(n.children,r,s,e);case bf:o=8,r|=8;break;case ju:return t=Rn(12,n,e,r|2),t.elementType=ju,t.lanes=s,t;case Yu:return t=Rn(13,n,e,r),t.elementType=Yu,t.lanes=s,t;case $u:return t=Rn(19,n,e,r),t.elementType=$u,t.lanes=s,t;case Cg:return vc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tg:o=10;break e;case Ag:o=9;break e;case Pf:o=11;break e;case Lf:o=14;break e;case Fi:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Rn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Rr(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function vc(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=Cg,t.lanes=n,t.stateNode={isHidden:!1},t}function tu(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function nu(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Uy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fc(0),this.expirationTimes=Fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function fh(t,e,n,i,r,s,o,a,l){return t=new Uy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qf(s),t}function Ny(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ds,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function _v(t){if(!t)return tr;t=t._reactInternals;e:{if(Or(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(on(n))return _0(t,n,e)}return e}function xv(t,e,n,i,r,s,o,a,l){return t=fh(n,i,!0,t,r,s,o,a,l),t.context=_v(null),n=t.current,i=qt(),r=qi(n),s=yi(i,r),s.callback=e??null,Yi(n,s,r),t.current.lanes=r,na(t,r,i),an(t,i),t}function _c(t,e,n,i){var r=e.current,s=qt(),o=qi(r);return n=_v(n),e.context===null?e.context=n:e.pendingContext=n,e=yi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Yi(r,e,o),t!==null&&(jn(t,r,o,s),ul(t,r,o)),o}function jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hh(t,e){jp(t,e),(t=t.alternate)&&jp(t,e)}function Fy(){return null}var yv=typeof reportError=="function"?reportError:function(t){console.error(t)};function ph(t){this._internalRoot=t}xc.prototype.render=ph.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));_c(t,e,null,null)};xc.prototype.unmount=ph.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){_c(null,t,null,null)}),e[Mi]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zi.length&&e!==0&&e<zi[n].priority;n++);zi.splice(n,0,t),n===0&&Jg(t)}};function mh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yp(){}function ky(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=jl(o);s.call(c)}}var o=xv(e,i,t,0,null,!1,!1,"",Yp);return t._reactRootContainer=o,t[Mi]=o.current,Vo(t.nodeType===8?t.parentNode:t),Nr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=jl(l);a.call(c)}}var l=fh(t,0,!1,null,null,!1,!1,"",Yp);return t._reactRootContainer=l,t[Mi]=l.current,Vo(t.nodeType===8?t.parentNode:t),Nr(function(){_c(e,l,n,i)}),l}function Sc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=jl(o);a.call(l)}}_c(e,o,t,r)}else o=ky(n,e,t,r,i);return jl(o)}qg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=So(e.pendingLanes);n!==0&&(Uf(e,n|1),an(e,St()),!(Qe&6)&&(Hs=St()+500,ar()))}break;case 13:Nr(function(){var i=Ei(t,1);if(i!==null){var r=qt();jn(i,t,1,r)}}),hh(t,1)}};Nf=function(t){if(t.tag===13){var e=Ei(t,134217728);if(e!==null){var n=qt();jn(e,t,134217728,n)}hh(t,134217728)}};Kg=function(t){if(t.tag===13){var e=qi(t),n=Ei(t,e);if(n!==null){var i=qt();jn(n,t,e,i)}hh(t,e)}};Zg=function(){return rt};Qg=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};rd=function(t,e,n){switch(e){case"input":if(Zu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=dc(i);if(!r)throw Error(se(90));bg(i),Zu(i,r)}}}break;case"textarea":Lg(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};zg=lh;Og=Nr;var zy={usingClientEntryPoint:!1,Events:[ra,gs,dc,Fg,kg,lh]},so={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Oy={bundleType:so.bundleType,version:so.version,rendererPackageName:so.rendererPackageName,rendererConfig:so.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ai.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vg(t),t===null?null:t.stateNode},findFiberByHostInstance:so.findFiberByHostInstance||Fy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ca.isDisabled&&Ca.supportsFiber)try{ac=Ca.inject(Oy),ii=Ca}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zy;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mh(e))throw Error(se(200));return Ny(t,e,null,n)};yn.createRoot=function(t,e){if(!mh(t))throw Error(se(299));var n=!1,i="",r=yv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=fh(t,1,!1,null,null,n,!1,i,r),t[Mi]=e.current,Vo(t.nodeType===8?t.parentNode:t),new ph(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Vg(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return Nr(t)};yn.hydrate=function(t,e,n){if(!yc(e))throw Error(se(200));return Sc(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!mh(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=yv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=xv(e,null,t,1,n??null,r,!1,s,o),t[Mi]=e.current,Vo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new xc(e)};yn.render=function(t,e,n){if(!yc(e))throw Error(se(200));return Sc(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!yc(t))throw Error(se(40));return t._reactRootContainer?(Nr(function(){Sc(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1};yn.unstable_batchedUpdates=lh;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!yc(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Sc(t,e,n,!1,i)};yn.version="18.3.1-next-f1338f8080-20240426";function Sv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sv)}catch(t){console.error(t)}}Sv(),Sg.exports=yn;var By=Sg.exports,$p=By;Wu.createRoot=$p.createRoot,Wu.hydrateRoot=$p.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gh="167",Hy=0,qp=1,Vy=2,Mv=1,Ev=2,fi=3,nr=0,ln=1,mi=2,Zi=0,Ls=1,Kp=2,Zp=3,Qp=4,Gy=5,yr=100,Wy=101,Xy=102,jy=103,Yy=104,$y=200,qy=201,Ky=202,Zy=203,kd=204,zd=205,Qy=206,Jy=207,eS=208,tS=209,nS=210,iS=211,rS=212,sS=213,oS=214,aS=0,lS=1,cS=2,Yl=3,uS=4,dS=5,fS=6,hS=7,vh=0,pS=1,mS=2,Qi=0,gS=1,vS=2,_S=3,xS=4,yS=5,SS=6,MS=7,wv=300,Vs=301,Gs=302,Od=303,Bd=304,Mc=306,Hd=1e3,Tr=1001,Vd=1002,bn=1003,ES=1004,Ra=1005,Vn=1006,iu=1007,Ar=1008,Ti=1009,Tv=1010,Av=1011,Zo=1012,_h=1013,Fr=1014,_i=1015,oa=1016,xh=1017,yh=1018,Ws=1020,Cv=35902,Rv=1021,bv=1022,Wn=1023,Pv=1024,Lv=1025,Ds=1026,Xs=1027,Dv=1028,Sh=1029,Iv=1030,Mh=1031,Eh=1033,vl=33776,_l=33777,xl=33778,yl=33779,Gd=35840,Wd=35841,Xd=35842,jd=35843,Yd=36196,$d=37492,qd=37496,Kd=37808,Zd=37809,Qd=37810,Jd=37811,ef=37812,tf=37813,nf=37814,rf=37815,sf=37816,of=37817,af=37818,lf=37819,cf=37820,uf=37821,Sl=36492,df=36494,ff=36495,Uv=36283,hf=36284,pf=36285,mf=36286,wS=3200,TS=3201,Nv=0,AS=1,Bi="",Qn="srgb",lr="srgb-linear",wh="display-p3",Ec="display-p3-linear",$l="linear",ct="srgb",ql="rec709",Kl="p3",Gr=7680,Jp=519,CS=512,RS=513,bS=514,Fv=515,PS=516,LS=517,DS=518,IS=519,gf=35044,em="300 es",xi=2e3,Zl=2001;class Ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ru=Math.PI/180,vf=180/Math.PI;function Ji(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[t&255]+Vt[t>>8&255]+Vt[t>>16&255]+Vt[t>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[n&63|128]+Vt[n>>8&255]+"-"+Vt[n>>16&255]+Vt[n>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function US(t,e){return(t%e+e)%e}function su(t,e,n){return(1-n)*t+n*e}function ti(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function st(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,n=0){He.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],x=i[8],g=r[0],m=r[3],u=r[6],v=r[1],_=r[4],M=r[7],L=r[2],A=r[5],T=r[8];return s[0]=o*g+a*v+l*L,s[3]=o*m+a*_+l*A,s[6]=o*u+a*M+l*T,s[1]=c*g+f*v+d*L,s[4]=c*m+f*_+d*A,s[7]=c*u+f*M+d*T,s[2]=h*g+p*v+x*L,s[5]=h*m+p*_+x*A,s[8]=h*u+p*M+x*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,p=c*s-o*l,x=n*d+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=d*g,e[1]=(r*c-f*i)*g,e[2]=(a*i-r*o)*g,e[3]=h*g,e[4]=(f*n-r*l)*g,e[5]=(r*s-a*n)*g,e[6]=p*g,e[7]=(i*l-c*n)*g,e[8]=(o*n-i*s)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ou.makeScale(e,n)),this}rotate(e){return this.premultiply(ou.makeRotation(-e)),this}translate(e,n){return this.premultiply(ou.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ou=new je;function kv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ql(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function NS(){const t=Ql("canvas");return t.style.display="block",t}const tm={};function Is(t){t in tm||(tm[t]=!0,console.warn(t))}function FS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const nm=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),im=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oo={[lr]:{transfer:$l,primaries:ql,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Qn]:{transfer:ct,primaries:ql,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ec]:{transfer:$l,primaries:Kl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(im),fromReference:t=>t.applyMatrix3(nm)},[wh]:{transfer:ct,primaries:Kl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(im),fromReference:t=>t.applyMatrix3(nm).convertLinearToSRGB()}},kS=new Set([lr,Ec]),it={enabled:!0,_workingColorSpace:lr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!kS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=oo[e].toReference,r=oo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return oo[t].primaries},getTransfer:function(t){return t===Bi?$l:oo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(oo[e].luminanceCoefficients)}};function Us(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function au(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Wr;class zS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wr===void 0&&(Wr=Ql("canvas")),Wr.width=e.width,Wr.height=e.height;const i=Wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Wr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ql("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Us(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Us(n[i]/255)*255):n[i]=Us(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OS=0;class zv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=Ji(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(lu(r[o].image)):s.push(lu(r[o]))}else s=lu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function lu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BS=0;class Kt extends Ks{constructor(e=Kt.DEFAULT_IMAGE,n=Kt.DEFAULT_MAPPING,i=Tr,r=Tr,s=Vn,o=Ar,a=Wn,l=Ti,c=Kt.DEFAULT_ANISOTROPY,f=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=Ji(),this.name="",this.source=new zv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hd:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case Vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hd:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case Vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=wv;Kt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,n=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],x=l[9],g=l[2],m=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(p+1)/2,L=(u+1)/2,A=(f+h)/4,T=(d+g)/4,D=(x+m)/4;return _>M&&_>L?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=T/i):M>L?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=D/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=T/s,r=D/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-x)*(m-x)+(d-g)*(d-g)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(d-g)/v,this.z=(h-f)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HS extends Ks{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new zv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends HS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ov extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VS extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],x=s[o+2],g=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=x,e[n+3]=g;return}if(d!==g||l!==h||c!==p||f!==x){let m=1-a;const u=l*h+c*p+f*x+d*g,v=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const L=Math.sqrt(_),A=Math.atan2(L,u*v);m=Math.sin(m*A)/L,a=Math.sin(a*A)/L}const M=a*v;if(l=l*m+h*M,c=c*m+p*M,f=f*m+x*M,d=d*m+g*M,m===1-a){const L=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=L,c*=L,f*=L,d*=L}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[n]=a*x+f*d+l*p-c*h,e[n+1]=l*x+f*h+c*d-a*p,e[n+2]=c*x+f*p+a*h-l*d,e[n+3]=f*x-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*p*x,this._y=c*p*d-h*f*x,this._z=c*f*x+h*p*d,this._w=c*f*d-h*p*x;break;case"YXZ":this._x=h*f*d+c*p*x,this._y=c*p*d-h*f*x,this._z=c*f*x-h*p*d,this._w=c*f*d+h*p*x;break;case"ZXY":this._x=h*f*d-c*p*x,this._y=c*p*d+h*f*x,this._z=c*f*x+h*p*d,this._w=c*f*d-h*p*x;break;case"ZYX":this._x=h*f*d-c*p*x,this._y=c*p*d+h*f*x,this._z=c*f*x-h*p*d,this._w=c*f*d+h*p*x;break;case"YZX":this._x=h*f*d+c*p*x,this._y=c*p*d+h*f*x,this._z=c*f*x-h*p*d,this._w=c*f*d-h*p*x;break;case"XZY":this._x=h*f*d-c*p*x,this._y=c*p*d-h*f*x,this._z=c*f*x+h*p*d,this._w=c*f*d+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,n=0,i=0){b.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(rm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(rm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cu.copy(this).projectOnVector(e),this.sub(cu)}reflect(e){return this.sub(cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cu=new b,rm=new aa;class la{constructor(e=new b(1/0,1/0,1/0),n=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ba.copy(i.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),Pa.subVectors(this.max,ao),Xr.subVectors(e.a,ao),jr.subVectors(e.b,ao),Yr.subVectors(e.c,ao),bi.subVectors(jr,Xr),Pi.subVectors(Yr,jr),ur.subVectors(Xr,Yr);let n=[0,-bi.z,bi.y,0,-Pi.z,Pi.y,0,-ur.z,ur.y,bi.z,0,-bi.x,Pi.z,0,-Pi.x,ur.z,0,-ur.x,-bi.y,bi.x,0,-Pi.y,Pi.x,0,-ur.y,ur.x,0];return!uu(n,Xr,jr,Yr,Pa)||(n=[1,0,0,0,1,0,0,0,1],!uu(n,Xr,jr,Yr,Pa))?!1:(La.crossVectors(bi,Pi),n=[La.x,La.y,La.z],uu(n,Xr,jr,Yr,Pa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new b,new b,new b,new b,new b,new b,new b,new b],Fn=new b,ba=new la,Xr=new b,jr=new b,Yr=new b,bi=new b,Pi=new b,ur=new b,ao=new b,Pa=new b,La=new b,dr=new b;function uu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){dr.fromArray(t,s);const a=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),c=n.dot(dr),f=i.dot(dr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const GS=new la,lo=new b,du=new b;class wc{constructor(e=new b,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):GS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);const n=lo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(lo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(du)),this.expandByPoint(lo.copy(e.center).sub(du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new b,fu=new b,Da=new b,Li=new b,hu=new b,Ia=new b,pu=new b;class Th{constructor(e=new b,n=new b(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,n),li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){fu.copy(e).add(n).multiplyScalar(.5),Da.copy(n).sub(e).normalize(),Li.copy(this.origin).sub(fu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Da),a=Li.dot(this.direction),l=-Li.dot(Da),c=Li.lengthSq(),f=Math.abs(1-o*o);let d,h,p,x;if(f>0)if(d=o*l-a,h=o*a-l,x=s*f,d>=0)if(h>=-x)if(h<=x){const g=1/f;d*=g,h*=g,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(fu).addScaledVector(Da,h),p}intersectSphere(e,n){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),r=li.dot(li)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,n,i,r,s){hu.subVectors(n,e),Ia.subVectors(i,e),pu.crossVectors(hu,Ia);let o=this.direction.dot(pu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,e);const l=a*this.direction.dot(Ia.crossVectors(Li,Ia));if(l<0)return null;const c=a*this.direction.dot(hu.cross(Li));if(c<0||l+c>o)return null;const f=-a*Li.dot(pu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,n,i,r,s,o,a,l,c,f,d,h,p,x,g,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,p,x,g,m)}set(e,n,i,r,s,o,a,l,c,f,d,h,p,x,g,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=x,u[11]=g,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/$r.setFromMatrixColumn(e,0).length(),s=1/$r.setFromMatrixColumn(e,1).length(),o=1/$r.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*d,x=a*f,g=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+x*c,n[5]=h-g*c,n[9]=-a*l,n[2]=g-h*c,n[6]=x+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,x=c*f,g=c*d;n[0]=h+g*a,n[4]=x*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-x,n[6]=g+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,x=c*f,g=c*d;n[0]=h-g*a,n[4]=-o*d,n[8]=x+p*a,n[1]=p+x*a,n[5]=o*f,n[9]=g-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*d,x=a*f,g=a*d;n[0]=l*f,n[4]=x*c-p,n[8]=h*c+g,n[1]=l*d,n[5]=g*c+h,n[9]=p*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,x=a*l,g=a*c;n[0]=l*f,n[4]=g-h*d,n[8]=x*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*d+x,n[10]=h-g*d}else if(e.order==="XZY"){const h=o*l,p=o*c,x=a*l,g=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+g,n[5]=o*f,n[9]=p*d-x,n[2]=x*d-p,n[6]=a*f,n[10]=g*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(WS,e,XS)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Di.crossVectors(i,fn),Di.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Di.crossVectors(i,fn)),Di.normalize(),Ua.crossVectors(fn,Di),r[0]=Di.x,r[4]=Ua.x,r[8]=fn.x,r[1]=Di.y,r[5]=Ua.y,r[9]=fn.y,r[2]=Di.z,r[6]=Ua.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],x=i[2],g=i[6],m=i[10],u=i[14],v=i[3],_=i[7],M=i[11],L=i[15],A=r[0],T=r[4],D=r[8],w=r[12],y=r[1],U=r[5],V=r[9],B=r[13],q=r[2],N=r[6],X=r[10],$=r[14],I=r[3],Y=r[7],K=r[11],Z=r[15];return s[0]=o*A+a*y+l*q+c*I,s[4]=o*T+a*U+l*N+c*Y,s[8]=o*D+a*V+l*X+c*K,s[12]=o*w+a*B+l*$+c*Z,s[1]=f*A+d*y+h*q+p*I,s[5]=f*T+d*U+h*N+p*Y,s[9]=f*D+d*V+h*X+p*K,s[13]=f*w+d*B+h*$+p*Z,s[2]=x*A+g*y+m*q+u*I,s[6]=x*T+g*U+m*N+u*Y,s[10]=x*D+g*V+m*X+u*K,s[14]=x*w+g*B+m*$+u*Z,s[3]=v*A+_*y+M*q+L*I,s[7]=v*T+_*U+M*N+L*Y,s[11]=v*D+_*V+M*X+L*K,s[15]=v*w+_*B+M*$+L*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],p=e[14],x=e[3],g=e[7],m=e[11],u=e[15];return x*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+g*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*f-s*l*f)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],p=e[11],x=e[12],g=e[13],m=e[14],u=e[15],v=d*m*c-g*h*c+g*l*p-a*m*p-d*l*u+a*h*u,_=x*h*c-f*m*c-x*l*p+o*m*p+f*l*u-o*h*u,M=f*g*c-x*d*c+x*a*p-o*g*p-f*a*u+o*d*u,L=x*d*l-f*g*l-x*a*h+o*g*h+f*a*m-o*d*m,A=n*v+i*_+r*M+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(g*h*s-d*m*s-g*r*p+i*m*p+d*r*u-i*h*u)*T,e[2]=(a*m*s-g*l*s+g*r*c-i*m*c-a*r*u+i*l*u)*T,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*T,e[4]=_*T,e[5]=(f*m*s-x*h*s+x*r*p-n*m*p-f*r*u+n*h*u)*T,e[6]=(x*l*s-o*m*s-x*r*c+n*m*c+o*r*u-n*l*u)*T,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*p+n*l*p)*T,e[8]=M*T,e[9]=(x*d*s-f*g*s-x*i*p+n*g*p+f*i*u-n*d*u)*T,e[10]=(o*g*s-x*a*s+x*i*c-n*g*c-o*i*u+n*a*u)*T,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*p-n*a*p)*T,e[12]=L*T,e[13]=(f*g*r-x*d*r+x*i*h-n*g*h-f*i*m+n*d*m)*T,e[14]=(x*a*r-o*g*r-x*i*l+n*g*l+o*i*m-n*a*m)*T,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,p=s*f,x=s*d,g=o*f,m=o*d,u=a*d,v=l*c,_=l*f,M=l*d,L=i.x,A=i.y,T=i.z;return r[0]=(1-(g+u))*L,r[1]=(p+M)*L,r[2]=(x-_)*L,r[3]=0,r[4]=(p-M)*A,r[5]=(1-(h+u))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(x+_)*T,r[9]=(m-v)*T,r[10]=(1-(h+g))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=$r.set(r[0],r[1],r[2]).length();const o=$r.set(r[4],r[5],r[6]).length(),a=$r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const c=1/s,f=1/o,d=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=f,kn.elements[5]*=f,kn.elements[6]*=f,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,n.setFromRotationMatrix(kn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=xi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,x;if(a===xi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Zl)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=xi){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*c,p=(i+r)*f;let x,g;if(a===xi)x=(o+s)*d,g=-2*d;else if(a===Zl)x=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const $r=new b,kn=new ft,WS=new b(0,0,0),XS=new b(1,1,1),Di=new b,Ua=new b,fn=new b,sm=new ft,om=new aa;class si{constructor(e=0,n=0,i=0,r=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class Ah{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jS=0;const am=new b,qr=new aa,ci=new ft,Na=new b,co=new b,YS=new b,$S=new aa,lm=new b(1,0,0),cm=new b(0,1,0),um=new b(0,0,1),dm={type:"added"},qS={type:"removed"},Kr={type:"childadded",child:null},mu={type:"childremoved",child:null};class Ut extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new b,n=new si,i=new aa,r=new b(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new je}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(lm,e)}rotateY(e){return this.rotateOnAxis(cm,e)}rotateZ(e){return this.rotateOnAxis(um,e)}translateOnAxis(e,n){return am.copy(e).applyQuaternion(this.quaternion),this.position.add(am.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(lm,e)}translateY(e){return this.translateOnAxis(cm,e)}translateZ(e){return this.translateOnAxis(um,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Na.copy(e):Na.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(co,Na,this.up):ci.lookAt(Na,co,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(ci),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dm),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(qS),mu.child=e,this.dispatchEvent(mu),mu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dm),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,YS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,$S,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new b(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new b,ui=new b,gu=new b,di=new b,Zr=new b,Qr=new b,fm=new b,vu=new b,_u=new b,xu=new b;class Gn{constructor(e=new b,n=new b,i=new b){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),ui.subVectors(i,n),gu.subVectors(e,n);const o=zn.dot(zn),a=zn.dot(ui),l=zn.dot(gu),c=ui.dot(ui),f=ui.dot(gu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*f)*h,x=(o*f-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),ui.subVectors(e,n),zn.cross(ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),zn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Zr.subVectors(r,i),Qr.subVectors(s,i),vu.subVectors(e,i);const l=Zr.dot(vu),c=Qr.dot(vu);if(l<=0&&c<=0)return n.copy(i);_u.subVectors(e,r);const f=Zr.dot(_u),d=Qr.dot(_u);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Zr,o);xu.subVectors(e,s);const p=Zr.dot(xu),x=Qr.dot(xu);if(x>=0&&p<=x)return n.copy(s);const g=p*c-l*x;if(g<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Qr,a);const m=f*x-p*d;if(m<=0&&d-f>=0&&p-x>=0)return fm.subVectors(s,r),a=(d-f)/(d-f+(p-x)),n.copy(r).addScaledVector(fm,a);const u=1/(m+g+h);return o=g*u,a=h*u,n.copy(i).addScaledVector(Zr,o).addScaledVector(Qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function yu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ve{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=US(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=yu(o,s,e+1/3),this.g=yu(o,s,e),this.b=yu(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=Qn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const i=Bv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=au(e.r),this.g=au(e.g),this.b=au(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return it.fromWorkingColorSpace(Gt.copy(this),e),Math.round(tn(Gt.r*255,0,255))*65536+Math.round(tn(Gt.g*255,0,255))*256+Math.round(tn(Gt.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Qn){it.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+n,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ii),e.getHSL(Fa);const i=su(Ii.h,Fa.h,n),r=su(Ii.s,Fa.s,n),s=su(Ii.l,Fa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ve;Ve.NAMES=Bv;let KS=0;class Br extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Ls,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=zd,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Yl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kd&&(i.blendSrc=this.blendSrc),this.blendDst!==zd&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class wn extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new b,ka=new He;class Yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=gf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Is("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ka.fromBufferAttribute(this,n),ka.applyMatrix3(e),this.setXY(n,ka.x,ka.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=st(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ti(n,this.array)),n}setX(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ti(n,this.array)),n}setY(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ti(n,this.array)),n}setZ(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ti(n,this.array)),n}setW(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gf&&(e.usage=this.usage),e}}class Hv extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Vv extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class At extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ZS=0;const En=new ft,Su=new Ut,Jr=new b,hn=new la,uo=new la,Lt=new b;class cn extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kv(e)?Vv:Hv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return Su.lookAt(e),Su.updateMatrix(),this.applyMatrix4(Su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new At(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new la);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(hn.min,uo.min),hn.expandByPoint(Lt),Lt.addVectors(hn.max,uo.max),hn.expandByPoint(Lt)):(hn.expandByPoint(uo.min),hn.expandByPoint(uo.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Lt.fromBufferAttribute(a,c),l&&(Jr.fromBufferAttribute(e,c),Lt.add(Jr)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new b,l[D]=new b;const c=new b,f=new b,d=new b,h=new He,p=new He,x=new He,g=new b,m=new b;function u(D,w,y){c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,w),d.fromBufferAttribute(i,y),h.fromBufferAttribute(s,D),p.fromBufferAttribute(s,w),x.fromBufferAttribute(s,y),f.sub(c),d.sub(c),p.sub(h),x.sub(h);const U=1/(p.x*x.y-x.x*p.y);isFinite(U)&&(g.copy(f).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(U),a[D].add(g),a[w].add(g),a[y].add(g),l[D].add(m),l[w].add(m),l[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,w=v.length;D<w;++D){const y=v[D],U=y.start,V=y.count;for(let B=U,q=U+V;B<q;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new b,M=new b,L=new b,A=new b;function T(D){L.fromBufferAttribute(r,D),A.copy(L);const w=a[D];_.copy(w),_.sub(L.multiplyScalar(L.dot(w))).normalize(),M.crossVectors(A,w);const U=M.dot(l[D])<0?-1:1;o.setXYZW(D,_.x,_.y,_.z,U)}for(let D=0,w=v.length;D<w;++D){const y=v[D],U=y.start,V=y.count;for(let B=U,q=U+V;B<q;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new b,s=new b,o=new b,a=new b,l=new b,c=new b,f=new b,d=new b;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let p=0,x=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*f;for(let u=0;u<f;u++)h[x++]=c[p++]}return new Yn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new cn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hm=new ft,fr=new Th,za=new wc,pm=new b,es=new b,ts=new b,ns=new b,Mu=new b,Oa=new b,Ba=new He,Ha=new He,Va=new He,mm=new b,gm=new b,vm=new b,Ga=new b,Wa=new b;class Ke extends Ut{constructor(e=new cn,n=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Oa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(Mu.fromBufferAttribute(d,e),o?Oa.addScaledVector(Mu,f):Oa.addScaledVector(Mu.sub(n),f))}n.add(Oa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(za.containsPoint(fr.origin)===!1&&(fr.intersectSphere(za,pm)===null||fr.origin.distanceToSquared(pm)>(e.far-e.near)**2))&&(hm.copy(s).invert(),fr.copy(e.ray).applyMatrix4(hm),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=h.length;x<g;x++){const m=h[x],u=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,L=_;M<L;M+=3){const A=a.getX(M),T=a.getX(M+1),D=a.getX(M+2);r=Xa(this,u,e,i,c,f,d,A,T,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=x,u=g;m<u;m+=3){const v=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);r=Xa(this,o,e,i,c,f,d,v,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=h.length;x<g;x++){const m=h[x],u=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,L=_;M<L;M+=3){const A=M,T=M+1,D=M+2;r=Xa(this,u,e,i,c,f,d,A,T,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=x,u=g;m<u;m+=3){const v=m,_=m+1,M=m+2;r=Xa(this,o,e,i,c,f,d,v,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function QS(t,e,n,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===nr,a),l===null)return null;Wa.copy(a),Wa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Wa);return c<n.near||c>n.far?null:{distance:c,point:Wa.clone(),object:t}}function Xa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,es),t.getVertexPosition(l,ts),t.getVertexPosition(c,ns);const f=QS(t,e,n,i,es,ts,ns,Ga);if(f){r&&(Ba.fromBufferAttribute(r,a),Ha.fromBufferAttribute(r,l),Va.fromBufferAttribute(r,c),f.uv=Gn.getInterpolation(Ga,es,ts,ns,Ba,Ha,Va,new He)),s&&(Ba.fromBufferAttribute(s,a),Ha.fromBufferAttribute(s,l),Va.fromBufferAttribute(s,c),f.uv1=Gn.getInterpolation(Ga,es,ts,ns,Ba,Ha,Va,new He)),o&&(mm.fromBufferAttribute(o,a),gm.fromBufferAttribute(o,l),vm.fromBufferAttribute(o,c),f.normal=Gn.getInterpolation(Ga,es,ts,ns,mm,gm,vm,new b),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new b,materialIndex:0};Gn.getNormal(es,ts,ns,d.normal),f.face=d}return f}class nn extends cn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(f,3)),this.setAttribute("uv",new At(d,2));function x(g,m,u,v,_,M,L,A,T,D,w){const y=M/T,U=L/D,V=M/2,B=L/2,q=A/2,N=T+1,X=D+1;let $=0,I=0;const Y=new b;for(let K=0;K<X;K++){const Z=K*U-B;for(let de=0;de<N;de++){const Pe=de*y-V;Y[g]=Pe*v,Y[m]=Z*_,Y[u]=q,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[u]=A>0?1:-1,f.push(Y.x,Y.y,Y.z),d.push(de/T),d.push(1-K/D),$+=1}}for(let K=0;K<D;K++)for(let Z=0;Z<T;Z++){const de=h+Z+N*K,Pe=h+Z+N*(K+1),j=h+(Z+1)+N*(K+1),ne=h+(Z+1)+N*K;l.push(de,Pe,ne),l.push(Pe,j,ne),I+=6}a.addGroup(p,I,w),p+=I,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=js(t[n]);for(const r in i)e[r]=i[r]}return e}function JS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Gv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const eM={clone:js,merge:Yt};var tM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tM,this.fragmentShader=nM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=JS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Wv extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new b,_m=new He,xm=new He;class gn extends Wv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ru*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vf*2*Math.atan(Math.tan(ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,n){return this.getViewBounds(e,_m,xm),n.subVectors(xm,_m)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ru*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const is=-90,rs=1;class iM extends Ut{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(is,rs,e,n);r.layers=this.layers,this.add(r);const s=new gn(is,rs,e,n);s.layers=this.layers,this.add(s);const o=new gn(is,rs,e,n);o.layers=this.layers,this.add(o);const a=new gn(is,rs,e,n);a.layers=this.layers,this.add(a);const l=new gn(is,rs,e,n);l.layers=this.layers,this.add(l);const c=new gn(is,rs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Xv extends Kt{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Vs,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rM extends kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Xv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new nn(5,5,5),s=new ir({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Zi});s.uniforms.tEquirect.value=n;const o=new Ke(r,s),a=n.minFilter;return n.minFilter===Ar&&(n.minFilter=Vn),new iM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Eu=new b,sM=new b,oM=new je;class _r{constructor(e=new b(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Eu.subVectors(i,n).cross(sM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Eu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||oM.getNormalMatrix(e),r=this.coplanarPoint(Eu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new wc,ja=new b;class Ch{constructor(e=new _r,n=new _r,i=new _r,r=new _r,s=new _r,o=new _r){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=xi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],p=r[8],x=r[9],g=r[10],m=r[11],u=r[12],v=r[13],_=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,m-p,M-u).normalize(),i[1].setComponents(l+s,h+c,m+p,M+u).normalize(),i[2].setComponents(l+o,h+f,m+x,M+v).normalize(),i[3].setComponents(l-o,h-f,m-x,M-v).normalize(),i[4].setComponents(l-a,h-d,m-g,M-_).normalize(),n===xi)i[5].setComponents(l+a,h+d,m+g,M+_).normalize();else if(n===Zl)i[5].setComponents(a,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ja.x=r.normal.x>0?e.max.x:e.min.x,ja.y=r.normal.y>0?e.max.y:e.min.y,ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function aM(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,a),d.count===-1&&h.length===0&&t.bufferSubData(c,0,f),h.length!==0){for(let p=0,x=h.length;p<x;p++){const g=h[p];t.bufferSubData(c,g.start*f.BYTES_PER_ELEMENT,f,g.start,g.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Tc extends cn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,p=[],x=[],g=[],m=[];for(let u=0;u<f;u++){const v=u*h-o;for(let _=0;_<c;_++){const M=_*d-s;x.push(M,-v,0),g.push(0,0,1),m.push(_/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const _=v+c*u,M=v+c*(u+1),L=v+1+c*(u+1),A=v+1+c*u;p.push(_,M,A),p.push(M,L,A)}this.setIndex(p),this.setAttribute("position",new At(x,3)),this.setAttribute("normal",new At(g,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.width,e.height,e.widthSegments,e.heightSegments)}}var lM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,SM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,MM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,LM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,IM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zM="gl_FragColor = linearToOutputTexel( gl_FragColor );",OM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,XM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,KM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,e1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,t1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,o1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,a1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,v1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,A1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,L1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,k1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,X1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,j1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,q1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Z1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_E=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,OE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:lM,alphahash_pars_fragment:cM,alphamap_fragment:uM,alphamap_pars_fragment:dM,alphatest_fragment:fM,alphatest_pars_fragment:hM,aomap_fragment:pM,aomap_pars_fragment:mM,batching_pars_vertex:gM,batching_vertex:vM,begin_vertex:_M,beginnormal_vertex:xM,bsdfs:yM,iridescence_fragment:SM,bumpmap_pars_fragment:MM,clipping_planes_fragment:EM,clipping_planes_pars_fragment:wM,clipping_planes_pars_vertex:TM,clipping_planes_vertex:AM,color_fragment:CM,color_pars_fragment:RM,color_pars_vertex:bM,color_vertex:PM,common:LM,cube_uv_reflection_fragment:DM,defaultnormal_vertex:IM,displacementmap_pars_vertex:UM,displacementmap_vertex:NM,emissivemap_fragment:FM,emissivemap_pars_fragment:kM,colorspace_fragment:zM,colorspace_pars_fragment:OM,envmap_fragment:BM,envmap_common_pars_fragment:HM,envmap_pars_fragment:VM,envmap_pars_vertex:GM,envmap_physical_pars_fragment:e1,envmap_vertex:WM,fog_vertex:XM,fog_pars_vertex:jM,fog_fragment:YM,fog_pars_fragment:$M,gradientmap_pars_fragment:qM,lightmap_pars_fragment:KM,lights_lambert_fragment:ZM,lights_lambert_pars_fragment:QM,lights_pars_begin:JM,lights_toon_fragment:t1,lights_toon_pars_fragment:n1,lights_phong_fragment:i1,lights_phong_pars_fragment:r1,lights_physical_fragment:s1,lights_physical_pars_fragment:o1,lights_fragment_begin:a1,lights_fragment_maps:l1,lights_fragment_end:c1,logdepthbuf_fragment:u1,logdepthbuf_pars_fragment:d1,logdepthbuf_pars_vertex:f1,logdepthbuf_vertex:h1,map_fragment:p1,map_pars_fragment:m1,map_particle_fragment:g1,map_particle_pars_fragment:v1,metalnessmap_fragment:_1,metalnessmap_pars_fragment:x1,morphinstance_vertex:y1,morphcolor_vertex:S1,morphnormal_vertex:M1,morphtarget_pars_vertex:E1,morphtarget_vertex:w1,normal_fragment_begin:T1,normal_fragment_maps:A1,normal_pars_fragment:C1,normal_pars_vertex:R1,normal_vertex:b1,normalmap_pars_fragment:P1,clearcoat_normal_fragment_begin:L1,clearcoat_normal_fragment_maps:D1,clearcoat_pars_fragment:I1,iridescence_pars_fragment:U1,opaque_fragment:N1,packing:F1,premultiplied_alpha_fragment:k1,project_vertex:z1,dithering_fragment:O1,dithering_pars_fragment:B1,roughnessmap_fragment:H1,roughnessmap_pars_fragment:V1,shadowmap_pars_fragment:G1,shadowmap_pars_vertex:W1,shadowmap_vertex:X1,shadowmask_pars_fragment:j1,skinbase_vertex:Y1,skinning_pars_vertex:$1,skinning_vertex:q1,skinnormal_vertex:K1,specularmap_fragment:Z1,specularmap_pars_fragment:Q1,tonemapping_fragment:J1,tonemapping_pars_fragment:eE,transmission_fragment:tE,transmission_pars_fragment:nE,uv_pars_fragment:iE,uv_pars_vertex:rE,uv_vertex:sE,worldpos_vertex:oE,background_vert:aE,background_frag:lE,backgroundCube_vert:cE,backgroundCube_frag:uE,cube_vert:dE,cube_frag:fE,depth_vert:hE,depth_frag:pE,distanceRGBA_vert:mE,distanceRGBA_frag:gE,equirect_vert:vE,equirect_frag:_E,linedashed_vert:xE,linedashed_frag:yE,meshbasic_vert:SE,meshbasic_frag:ME,meshlambert_vert:EE,meshlambert_frag:wE,meshmatcap_vert:TE,meshmatcap_frag:AE,meshnormal_vert:CE,meshnormal_frag:RE,meshphong_vert:bE,meshphong_frag:PE,meshphysical_vert:LE,meshphysical_frag:DE,meshtoon_vert:IE,meshtoon_frag:UE,points_vert:NE,points_frag:FE,shadow_vert:kE,shadow_frag:zE,sprite_vert:OE,sprite_frag:BE},me={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Jn={basic:{uniforms:Yt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Yt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Yt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Yt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Yt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Yt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Yt([me.points,me.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Yt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Yt([me.common,me.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Yt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Yt([me.sprite,me.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Yt([me.common,me.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Yt([me.lights,me.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Jn.physical={uniforms:Yt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ya={r:0,b:0,g:0},pr=new si,HE=new ft;function VE(t,e,n,i,r,s,o){const a=new Ve(0);let l=s===!0?0:1,c,f,d=null,h=0,p=null;function x(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function g(v){let _=!1;const M=x(v);M===null?u(a,l):M&&M.isColor&&(u(M,1),_=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,_){const M=x(_);M&&(M.isCubeTexture||M.mapping===Mc)?(f===void 0&&(f=new Ke(new nn(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:js(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),pr.copy(_.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(HE.makeRotationFromEuler(pr)),f.material.toneMapped=it.getTransfer(M.colorSpace)!==ct,(d!==M||h!==M.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=M,h=M.version,p=t.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ke(new Tc(2,2),new ir({name:"BackgroundMaterial",uniforms:js(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=it.getTransfer(M.colorSpace)!==ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,_){v.getRGB(Ya,Gv(t)),i.buffers.color.setClear(Ya.r,Ya.g,Ya.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:g,addToRenderList:m}}function GE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,U,V,B,q){let N=!1;const X=d(B,V,U);s!==X&&(s=X,c(s.object)),N=p(y,B,V,q),N&&x(y,B,V,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,M(y,U,V,B),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function f(y){return t.deleteVertexArray(y)}function d(y,U,V){const B=V.wireframe===!0;let q=i[y.id];q===void 0&&(q={},i[y.id]=q);let N=q[U.id];N===void 0&&(N={},q[U.id]=N);let X=N[B];return X===void 0&&(X=h(l()),N[B]=X),X}function h(y){const U=[],V=[],B=[];for(let q=0;q<n;q++)U[q]=0,V[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:B,object:y,attributes:{},index:null}}function p(y,U,V,B){const q=s.attributes,N=U.attributes;let X=0;const $=V.getAttributes();for(const I in $)if($[I].location>=0){const K=q[I];let Z=N[I];if(Z===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),K===void 0||K.attribute!==Z||Z&&K.data!==Z.data)return!0;X++}return s.attributesNum!==X||s.index!==B}function x(y,U,V,B){const q={},N=U.attributes;let X=0;const $=V.getAttributes();for(const I in $)if($[I].location>=0){let K=N[I];K===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));const Z={};Z.attribute=K,K&&K.data&&(Z.data=K.data),q[I]=Z,X++}s.attributes=q,s.attributesNum=X,s.index=B}function g(){const y=s.newAttributes;for(let U=0,V=y.length;U<V;U++)y[U]=0}function m(y){u(y,0)}function u(y,U){const V=s.newAttributes,B=s.enabledAttributes,q=s.attributeDivisors;V[y]=1,B[y]===0&&(t.enableVertexAttribArray(y),B[y]=1),q[y]!==U&&(t.vertexAttribDivisor(y,U),q[y]=U)}function v(){const y=s.newAttributes,U=s.enabledAttributes;for(let V=0,B=U.length;V<B;V++)U[V]!==y[V]&&(t.disableVertexAttribArray(V),U[V]=0)}function _(y,U,V,B,q,N,X){X===!0?t.vertexAttribIPointer(y,U,V,q,N):t.vertexAttribPointer(y,U,V,B,q,N)}function M(y,U,V,B){g();const q=B.attributes,N=V.getAttributes(),X=U.defaultAttributeValues;for(const $ in N){const I=N[$];if(I.location>=0){let Y=q[$];if(Y===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),Y!==void 0){const K=Y.normalized,Z=Y.itemSize,de=e.get(Y);if(de===void 0)continue;const Pe=de.buffer,j=de.type,ne=de.bytesPerElement,re=j===t.INT||j===t.UNSIGNED_INT||Y.gpuType===_h;if(Y.isInterleavedBufferAttribute){const Q=Y.data,Re=Q.stride,Te=Y.offset;if(Q.isInstancedInterleavedBuffer){for(let Ie=0;Ie<I.locationSize;Ie++)u(I.location+Ie,Q.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ie=0;Ie<I.locationSize;Ie++)m(I.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let Ie=0;Ie<I.locationSize;Ie++)_(I.location+Ie,Z/I.locationSize,j,K,Re*ne,(Te+Z/I.locationSize*Ie)*ne,re)}else{if(Y.isInstancedBufferAttribute){for(let Q=0;Q<I.locationSize;Q++)u(I.location+Q,Y.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Q=0;Q<I.locationSize;Q++)m(I.location+Q);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let Q=0;Q<I.locationSize;Q++)_(I.location+Q,Z/I.locationSize,j,K,Z*ne,Z/I.locationSize*Q*ne,re)}}else if(X!==void 0){const K=X[$];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(I.location,K);break;case 3:t.vertexAttrib3fv(I.location,K);break;case 4:t.vertexAttrib4fv(I.location,K);break;default:t.vertexAttrib1fv(I.location,K)}}}}v()}function L(){D();for(const y in i){const U=i[y];for(const V in U){const B=U[V];for(const q in B)f(B[q].object),delete B[q];delete U[V]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const U=i[y.id];for(const V in U){const B=U[V];for(const q in B)f(B[q].object),delete B[q];delete U[V]}delete i[y.id]}function T(y){for(const U in i){const V=i[U];if(V[y.id]===void 0)continue;const B=V[y.id];for(const q in B)f(B[q].object),delete B[q];delete V[y.id]}}function D(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function WE(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,d){d!==0&&(t.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function a(c,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let x=0;x<d;x++)p+=f[x];n.update(p,i,1)}function l(c,f,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],f[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];for(let g=0;g<h.length;g++)n.update(x,i,h[g])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function XE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Wn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const T=A===oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ti&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==_i&&!T)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,L=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:u,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:M,maxSamples:L}}function jE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new _r,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,u=t.get(d);if(!r||x===null||x.length===0||s&&!m)s?f(null):c();else{const v=s?0:i,_=v*4;let M=u.clippingState||null;l.value=M,M=f(x,h,_,p);for(let L=0;L!==_;++L)M[L]=n[L];u.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,x){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const u=p+g*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,M=p;_!==g;++_,M+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function YE(t){let e=new WeakMap;function n(o,a){return a===Od?o.mapping=Vs:a===Bd&&(o.mapping=Gs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Od||a===Bd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new rM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Yv extends Wv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Es=4,ym=[.125,.215,.35,.446,.526,.582],Sr=20,wu=new Yv,Sm=new Ve;let Tu=null,Au=0,Cu=0,Ru=!1;const xr=(1+Math.sqrt(5))/2,ss=1/xr,Mm=[new b(-xr,ss,0),new b(xr,ss,0),new b(-ss,0,xr),new b(ss,0,xr),new b(0,xr,-ss),new b(0,xr,ss),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class Em{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Tu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tu,Au,Cu),this._renderer.xr.enabled=Ru,e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:oa,format:Wn,colorSpace:lr,depthBuffer:!1},r=wm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$E(s)),this._blurMaterial=qE(s,e,n)}return r}_compileMaterial(e){const n=new Ke(this._lodPlanes[0],e);this._renderer.compile(n,wu)}_sceneToCubeUV(e,n,i,r){const a=new gn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Sm),f.toneMapping=Qi,f.autoClear=!1;const p=new wn({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),x=new Ke(new nn,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Sm),g=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const _=this._cubeSize;$a(r,v*_,u>2?_:0,_,_),f.setRenderTarget(r),g&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Vs||e.mapping===Gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ke(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;$a(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,wu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Mm[(r-s-1)%Mm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Ke(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Sr-1),g=s/x,m=isFinite(s)?1+Math.floor(f*g):Sr;m>Sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Sr}`);const u=[];let v=0;for(let T=0;T<Sr;++T){const D=T/g,w=Math.exp(-D*D/2);u.push(w),T===0?v+=w:T<m&&(v+=2*w)}for(let T=0;T<u.length;T++)u[T]=u[T]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=x,h.mipInt.value=_-i;const M=this._sizeLods[r],L=3*M*(r>_-Es?r-_+Es:0),A=4*(this._cubeSize-M);$a(n,L,A,3*M,2*M),l.setRenderTarget(n),l.render(d,wu)}}function $E(t){const e=[],n=[],i=[];let r=t;const s=t-Es+1+ym.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Es?l=ym[o-t+Es-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,x=6,g=3,m=2,u=1,v=new Float32Array(g*x*p),_=new Float32Array(m*x*p),M=new Float32Array(u*x*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,D=A>2?0:-1,w=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];v.set(w,g*x*A),_.set(h,m*x*A);const y=[A,A,A,A,A,A];M.set(y,u*x*A)}const L=new cn;L.setAttribute("position",new Yn(v,g)),L.setAttribute("uv",new Yn(_,m)),L.setAttribute("faceIndex",new Yn(M,u)),e.push(L),r>Es&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function wm(t,e,n){const i=new kr(t,e,n);return i.texture.mapping=Mc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $a(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function qE(t,e,n){const i=new Float32Array(Sr),r=new b(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Tm(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Am(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Rh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function KE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Od||l===Bd,f=l===Vs||l===Gs;if(c||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Em(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new Em(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function ZE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Is("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function QE(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const g=h.morphAttributes[x];for(let m=0,u=g.length;m<u;m++)e.remove(g[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const x in p){const g=p[x];for(let m=0,u=g.length;m<u;m++)e.update(g[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,x=d.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let _=0,M=v.length;_<M;_+=3){const L=v[_+0],A=v[_+1],T=v[_+2];h.push(L,A,A,T,T,L)}}else if(x!==void 0){const v=x.array;g=x.version;for(let _=0,M=v.length/3-1;_<M;_+=3){const L=_+0,A=_+1,T=_+2;h.push(L,A,A,T,T,L)}}else return;const m=new(kv(h)?Vv:Hv)(h,1);m.version=g;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function JE(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,x){x!==0&&(t.drawElementsInstanced(i,p,s,h*o,x),n.update(p,i,x))}function f(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,x);let m=0;for(let u=0;u<x;u++)m+=p[u];n.update(m,i,1)}function d(h,p,x,g){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],g[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,g,0,x);let u=0;for(let v=0;v<x;v++)u+=p[v];for(let v=0;v<g.length;v++)n.update(u,i,g[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function ew(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function tw(t,e,n){const i=new WeakMap,r=new ut;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let y=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;x===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let L=a.attributes.position.count*M,A=1;L>e.maxTextureSize&&(A=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const T=new Float32Array(L*A*4*d),D=new Ov(T,L,A,d);D.type=_i,D.needsUpdate=!0;const w=M*4;for(let U=0;U<d;U++){const V=u[U],B=v[U],q=_[U],N=L*A*4*U;for(let X=0;X<V.count;X++){const $=X*w;x===!0&&(r.fromBufferAttribute(V,X),T[N+$+0]=r.x,T[N+$+1]=r.y,T[N+$+2]=r.z,T[N+$+3]=0),g===!0&&(r.fromBufferAttribute(B,X),T[N+$+4]=r.x,T[N+$+5]=r.y,T[N+$+6]=r.z,T[N+$+7]=0),m===!0&&(r.fromBufferAttribute(q,X),T[N+$+8]=r.x,T[N+$+9]=r.y,T[N+$+10]=r.z,T[N+$+11]=q.itemSize===4?r.w:1)}}h={count:d,texture:D,size:new He(L,A)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const g=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function nw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class $v extends Kt{constructor(e,n,i,r,s,o,a,l,c,f=Ds){if(f!==Ds&&f!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Ds&&(i=Fr),i===void 0&&f===Xs&&(i=Ws),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const qv=new Kt,Cm=new $v(1,1),Kv=new Ov,Zv=new VS,Qv=new Xv,Rm=[],bm=[],Pm=new Float32Array(16),Lm=new Float32Array(9),Dm=new Float32Array(4);function Zs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Rm[r];if(s===void 0&&(s=new Float32Array(r),Rm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ac(t,e){let n=bm[e];n===void 0&&(n=new Int32Array(e),bm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function iw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function aw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;Dm.set(i),t.uniformMatrix2fv(this.addr,!1,Dm),Pt(n,i)}}function lw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;Lm.set(i),t.uniformMatrix3fv(this.addr,!1,Lm),Pt(n,i)}}function cw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;Pm.set(i),t.uniformMatrix4fv(this.addr,!1,Pm),Pt(n,i)}}function uw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function pw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function _w(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Cm.compareFunction=Fv,s=Cm):s=qv,n.setTexture2D(e||s,r)}function xw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Zv,r)}function yw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Qv,r)}function Sw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Kv,r)}function Mw(t){switch(t){case 5126:return iw;case 35664:return rw;case 35665:return sw;case 35666:return ow;case 35674:return aw;case 35675:return lw;case 35676:return cw;case 5124:case 35670:return uw;case 35667:case 35671:return dw;case 35668:case 35672:return fw;case 35669:case 35673:return hw;case 5125:return pw;case 36294:return mw;case 36295:return gw;case 36296:return vw;case 35678:case 36198:case 36298:case 36306:case 35682:return _w;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return yw;case 36289:case 36303:case 36311:case 36292:return Sw}}function Ew(t,e){t.uniform1fv(this.addr,e)}function ww(t,e){const n=Zs(e,this.size,2);t.uniform2fv(this.addr,n)}function Tw(t,e){const n=Zs(e,this.size,3);t.uniform3fv(this.addr,n)}function Aw(t,e){const n=Zs(e,this.size,4);t.uniform4fv(this.addr,n)}function Cw(t,e){const n=Zs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Rw(t,e){const n=Zs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function bw(t,e){const n=Zs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Pw(t,e){t.uniform1iv(this.addr,e)}function Lw(t,e){t.uniform2iv(this.addr,e)}function Dw(t,e){t.uniform3iv(this.addr,e)}function Iw(t,e){t.uniform4iv(this.addr,e)}function Uw(t,e){t.uniform1uiv(this.addr,e)}function Nw(t,e){t.uniform2uiv(this.addr,e)}function Fw(t,e){t.uniform3uiv(this.addr,e)}function kw(t,e){t.uniform4uiv(this.addr,e)}function zw(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||qv,s[o])}function Ow(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Zv,s[o])}function Bw(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Qv,s[o])}function Hw(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Kv,s[o])}function Vw(t){switch(t){case 5126:return Ew;case 35664:return ww;case 35665:return Tw;case 35666:return Aw;case 35674:return Cw;case 35675:return Rw;case 35676:return bw;case 5124:case 35670:return Pw;case 35667:case 35671:return Lw;case 35668:case 35672:return Dw;case 35669:case 35673:return Iw;case 5125:return Uw;case 36294:return Nw;case 36295:return Fw;case 36296:return kw;case 35678:case 36198:case 36298:case 36306:case 35682:return zw;case 35679:case 36299:case 36307:return Ow;case 35680:case 36300:case 36308:case 36293:return Bw;case 36289:case 36303:case 36311:case 36292:return Hw}}class Gw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Mw(n.type)}}class Ww{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Vw(n.type)}}class Xw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const bu=/(\w+)(\])?(\[|\.)?/g;function Im(t,e){t.seq.push(e),t.map[e.id]=e}function jw(t,e,n){const i=t.name,r=i.length;for(bu.lastIndex=0;;){const s=bu.exec(i),o=bu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Im(n,c===void 0?new Gw(a,t,e):new Ww(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new Xw(a),Im(n,d)),n=d}}}class Ml{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);jw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Um(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Yw=37297;let $w=0;function qw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Kw(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===Kl&&n===ql?i="LinearDisplayP3ToLinearSRGB":e===ql&&n===Kl&&(i="LinearSRGBToLinearDisplayP3"),t){case lr:case Ec:return[i,"LinearTransferOETF"];case Qn:case wh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Nm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+qw(t.getShaderSource(e),o)}else return r}function Zw(t,e){const n=Kw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Qw(t,e){let n;switch(e){case gS:n="Linear";break;case vS:n="Reinhard";break;case _S:n="OptimizedCineon";break;case xS:n="ACESFilmic";break;case SS:n="AgX";break;case MS:n="Neutral";break;case yS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const qa=new b;function Jw(){it.getLuminanceCoefficients(qa);const t=qa.x.toFixed(4),e=qa.y.toFixed(4),n=qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function tT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function nT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Eo(t){return t!==""}function Fm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function km(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iT=/^[ \t]*#include +<([\w\d./]+)>/gm;function _f(t){return t.replace(iT,sT)}const rT=new Map;function sT(t,e){let n=Xe[e];if(n===void 0){const i=rT.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _f(n)}const oT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zm(t){return t.replace(oT,aT)}function aT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Om(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Mv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ev?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function cT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Vs:case Gs:e="ENVMAP_TYPE_CUBE";break;case Mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function dT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case vh:e="ENVMAP_BLENDING_MULTIPLY";break;case pS:e="ENVMAP_BLENDING_MIX";break;case mS:e="ENVMAP_BLENDING_ADD";break}return e}function fT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function hT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=lT(n),c=cT(n),f=uT(n),d=dT(n),h=fT(n),p=eT(n),x=tT(s),g=r.createProgram();let m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Eo).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Eo).join(`
`),u.length>0&&(u+=`
`)):(m=[Om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),u=[Om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qi?"#define TONE_MAPPING":"",n.toneMapping!==Qi?Xe.tonemapping_pars_fragment:"",n.toneMapping!==Qi?Qw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Zw("linearToOutputTexel",n.outputColorSpace),Jw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Eo).join(`
`)),o=_f(o),o=Fm(o,n),o=km(o,n),a=_f(a),a=Fm(a,n),a=km(a,n),o=zm(o),a=zm(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===em?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=v+m+o,M=v+u+a,L=Um(r,r.VERTEX_SHADER,_),A=Um(r,r.FRAGMENT_SHADER,M);r.attachShader(g,L),r.attachShader(g,A),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(U){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(g).trim(),B=r.getShaderInfoLog(L).trim(),q=r.getShaderInfoLog(A).trim();let N=!0,X=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(N=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,L,A);else{const $=Nm(r,L,"vertex"),I=Nm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+$+`
`+I)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||q==="")&&(X=!1);X&&(U.diagnostics={runnable:N,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:q,prefix:u}})}r.deleteShader(L),r.deleteShader(A),D=new Ml(r,g),w=nT(r,g)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(g,Yw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$w++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=A,this}let pT=0;class mT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new gT(e),n.set(e,i)),i}}class gT{constructor(e){this.id=pT++,this.code=e,this.usedTimes=0}}function vT(t,e,n,i,r,s,o){const a=new Ah,l=new mT,c=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,y,U,V,B){const q=V.fog,N=B.geometry,X=w.isMeshStandardMaterial?V.environment:null,$=(w.isMeshStandardMaterial?n:e).get(w.envMap||X),I=$&&$.mapping===Mc?$.image.height:null,Y=x[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Z=K!==void 0?K.length:0;let de=0;N.morphAttributes.position!==void 0&&(de=1),N.morphAttributes.normal!==void 0&&(de=2),N.morphAttributes.color!==void 0&&(de=3);let Pe,j,ne,re;if(Y){const Je=Jn[Y];Pe=Je.vertexShader,j=Je.fragmentShader}else Pe=w.vertexShader,j=w.fragmentShader,l.update(w),ne=l.getVertexShaderID(w),re=l.getFragmentShaderID(w);const Q=t.getRenderTarget(),Re=B.isInstancedMesh===!0,Te=B.isBatchedMesh===!0,Ie=!!w.map,O=!!w.matcap,C=!!$,pe=!!w.aoMap,_e=!!w.lightMap,fe=!!w.bumpMap,ae=!!w.normalMap,Ge=!!w.displacementMap,xe=!!w.emissiveMap,be=!!w.metalnessMap,P=!!w.roughnessMap,S=w.anisotropy>0,H=w.clearcoat>0,ie=w.dispersion>0,oe=w.iridescence>0,te=w.sheen>0,De=w.transmission>0,ge=S&&!!w.anisotropyMap,ye=H&&!!w.clearcoatMap,We=H&&!!w.clearcoatNormalMap,le=H&&!!w.clearcoatRoughnessMap,Me=oe&&!!w.iridescenceMap,qe=oe&&!!w.iridescenceThicknessMap,Oe=te&&!!w.sheenColorMap,Ee=te&&!!w.sheenRoughnessMap,Be=!!w.specularMap,Ye=!!w.specularColorMap,pt=!!w.specularIntensityMap,F=De&&!!w.transmissionMap,ce=De&&!!w.thicknessMap,J=!!w.gradientMap,ee=!!w.alphaMap,he=w.alphaTest>0,Fe=!!w.alphaHash,Ze=!!w.extensions;let Mt=Qi;w.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Mt=t.toneMapping);const Nt={shaderID:Y,shaderType:w.type,shaderName:w.name,vertexShader:Pe,fragmentShader:j,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:re,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Te,batchingColor:Te&&B._colorsTexture!==null,instancing:Re,instancingColor:Re&&B.instanceColor!==null,instancingMorph:Re&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Q===null?t.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:lr,alphaToCoverage:!!w.alphaToCoverage,map:Ie,matcap:O,envMap:C,envMapMode:C&&$.mapping,envMapCubeUVHeight:I,aoMap:pe,lightMap:_e,bumpMap:fe,normalMap:ae,displacementMap:h&&Ge,emissiveMap:xe,normalMapObjectSpace:ae&&w.normalMapType===AS,normalMapTangentSpace:ae&&w.normalMapType===Nv,metalnessMap:be,roughnessMap:P,anisotropy:S,anisotropyMap:ge,clearcoat:H,clearcoatMap:ye,clearcoatNormalMap:We,clearcoatRoughnessMap:le,dispersion:ie,iridescence:oe,iridescenceMap:Me,iridescenceThicknessMap:qe,sheen:te,sheenColorMap:Oe,sheenRoughnessMap:Ee,specularMap:Be,specularColorMap:Ye,specularIntensityMap:pt,transmission:De,transmissionMap:F,thicknessMap:ce,gradientMap:J,opaque:w.transparent===!1&&w.blending===Ls&&w.alphaToCoverage===!1,alphaMap:ee,alphaTest:he,alphaHash:Fe,combine:w.combine,mapUv:Ie&&g(w.map.channel),aoMapUv:pe&&g(w.aoMap.channel),lightMapUv:_e&&g(w.lightMap.channel),bumpMapUv:fe&&g(w.bumpMap.channel),normalMapUv:ae&&g(w.normalMap.channel),displacementMapUv:Ge&&g(w.displacementMap.channel),emissiveMapUv:xe&&g(w.emissiveMap.channel),metalnessMapUv:be&&g(w.metalnessMap.channel),roughnessMapUv:P&&g(w.roughnessMap.channel),anisotropyMapUv:ge&&g(w.anisotropyMap.channel),clearcoatMapUv:ye&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:We&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(w.sheenRoughnessMap.channel),specularMapUv:Be&&g(w.specularMap.channel),specularColorMapUv:Ye&&g(w.specularColorMap.channel),specularIntensityMapUv:pt&&g(w.specularIntensityMap.channel),transmissionMapUv:F&&g(w.transmissionMap.channel),thicknessMapUv:ce&&g(w.thicknessMap.channel),alphaMapUv:ee&&g(w.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ae||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!N.attributes.uv&&(Ie||ee),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:de,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:Mt,decodeVideoTexture:Ie&&w.map.isVideoTexture===!0&&it.getTransfer(w.map.colorSpace)===ct,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===mi,flipSided:w.side===ln,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ze&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&w.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function u(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const U in w.defines)y.push(U),y.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(v(y,w),_(y,w),y.push(t.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function v(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function _(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),w.push(a.mask)}function M(w){const y=x[w.type];let U;if(y){const V=Jn[y];U=eM.clone(V.uniforms)}else U=w.uniforms;return U}function L(w,y){let U;for(let V=0,B=f.length;V<B;V++){const q=f[V];if(q.cacheKey===y){U=q,++U.usedTimes;break}}return U===void 0&&(U=new hT(t,y,w,s),f.push(U)),U}function A(w){if(--w.usedTimes===0){const y=f.indexOf(w);f[y]=f[f.length-1],f.pop(),w.destroy()}}function T(w){l.remove(w)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:L,releaseProgram:A,releaseShaderCache:T,programs:f,dispose:D}}function _T(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function xT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Bm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Hm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,x,g,m){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=x,u.renderOrder=d.renderOrder,u.z=g,u.group=m),e++,u}function a(d,h,p,x,g,m){const u=o(d,h,p,x,g,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(d,h,p,x,g,m){const u=o(d,h,p,x,g,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||xT),i.length>1&&i.sort(h||Bm),r.length>1&&r.sort(h||Bm)}function f(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function yT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Hm,t.set(i,[o])):r>=s.length?(o=new Hm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function ST(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new b,color:new Ve};break;case"SpotLight":n={position:new b,direction:new b,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new b,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new b,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new b,halfWidth:new b,halfHeight:new b};break}return t[e.id]=n,n}}}function MT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ET=0;function wT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function TT(t){const e=new ST,n=MT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new b);const r=new b,s=new ft,o=new ft;function a(c){let f=0,d=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,x=0,g=0,m=0,u=0,v=0,_=0,M=0,L=0,A=0,T=0;c.sort(wT);for(let w=0,y=c.length;w<y;w++){const U=c[w],V=U.color,B=U.intensity,q=U.distance,N=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=V.r*B,d+=V.g*B,h+=V.b*B;else if(U.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(U.sh.coefficients[X],B);T++}else if(U.isDirectionalLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const $=U.shadow,I=n.get(U);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=N,i.directionalShadowMatrix[p]=U.shadow.matrix,v++}i.directional[p]=X,p++}else if(U.isSpotLight){const X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(V).multiplyScalar(B),X.distance=q,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,i.spot[g]=X;const $=U.shadow;if(U.map&&(i.spotLightMap[L]=U.map,L++,$.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[g]=$.matrix,U.castShadow){const I=n.get(U);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,i.spotShadow[g]=I,i.spotShadowMap[g]=N,M++}g++}else if(U.isRectAreaLight){const X=e.get(U);X.color.copy(V).multiplyScalar(B),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=X,m++}else if(U.isPointLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){const $=U.shadow,I=n.get(U);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,I.shadowCameraNear=$.camera.near,I.shadowCameraFar=$.camera.far,i.pointShadow[x]=I,i.pointShadowMap[x]=N,i.pointShadowMatrix[x]=U.shadow.matrix,_++}i.point[x]=X,x++}else if(U.isHemisphereLight){const X=e.get(U);X.skyColor.copy(U.color).multiplyScalar(B),X.groundColor.copy(U.groundColor).multiplyScalar(B),i.hemi[u]=X,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==p||D.pointLength!==x||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==v||D.numPointShadows!==_||D.numSpotShadows!==M||D.numSpotMaps!==L||D.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+L-A,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,D.directionalLength=p,D.pointLength=x,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=v,D.numPointShadows=_,D.numSpotShadows=M,D.numSpotMaps=L,D.numLightProbes=T,i.version=ET++)}function l(c,f){let d=0,h=0,p=0,x=0,g=0;const m=f.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const _=c[u];if(_.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(_.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const M=i.hemi[g];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function Vm(t){const e=new TT(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function AT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Vm(t),e.set(r,[a])):s>=o.length?(a=new Vm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class CT extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RT extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LT(t,e,n){let i=new Ch;const r=new He,s=new He,o=new ut,a=new CT({depthPacking:TS}),l=new RT,c={},f=n.maxTextureSize,d={[nr]:ln,[ln]:nr,[mi]:mi},h=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:bT,fragmentShader:PT}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new cn;x.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ke(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mv;let u=this.type;this.render=function(A,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=t.getRenderTarget(),y=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Zi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=u!==fi&&this.type===fi,q=u===fi&&this.type!==fi;for(let N=0,X=A.length;N<X;N++){const $=A[N],I=$.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const Y=I.getFrameExtents();if(r.multiply(Y),s.copy(I.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Y.x),r.x=s.x*Y.x,I.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Y.y),r.y=s.y*Y.y,I.mapSize.y=s.y)),I.map===null||B===!0||q===!0){const Z=this.type!==fi?{minFilter:bn,magFilter:bn}:{};I.map!==null&&I.map.dispose(),I.map=new kr(r.x,r.y,Z),I.map.texture.name=$.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const K=I.getViewportCount();for(let Z=0;Z<K;Z++){const de=I.getViewport(Z);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),V.viewport(o),I.updateMatrices($,Z),i=I.getFrustum(),M(T,D,I.camera,$,this.type)}I.isPointLightShadow!==!0&&this.type===fi&&v(I,D),I.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(w,y,U)};function v(A,T){const D=e.update(g);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new kr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,D,h,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,D,p,g,null)}function _(A,T,D,w){let y=null;const U=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)y=U;else if(y=D.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const V=y.uuid,B=T.uuid;let q=c[V];q===void 0&&(q={},c[V]=q);let N=q[B];N===void 0&&(N=y.clone(),q[B]=N,T.addEventListener("dispose",L)),y=N}if(y.visible=T.visible,y.wireframe=T.wireframe,w===fi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=t.properties.get(y);V.light=D}return y}function M(A,T,D,w,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===fi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const B=e.update(A),q=A.material;if(Array.isArray(q)){const N=B.groups;for(let X=0,$=N.length;X<$;X++){const I=N[X],Y=q[I.materialIndex];if(Y&&Y.visible){const K=_(A,Y,w,y);A.onBeforeShadow(t,A,T,D,B,K,I),t.renderBufferDirect(D,null,B,K,A,I),A.onAfterShadow(t,A,T,D,B,K,I)}}}else if(q.visible){const N=_(A,q,w,y);A.onBeforeShadow(t,A,T,D,B,N,null),t.renderBufferDirect(D,null,B,N,A,null),A.onAfterShadow(t,A,T,D,B,N,null)}}const V=A.children;for(let B=0,q=V.length;B<q;B++)M(V[B],T,D,w,y)}function L(A){A.target.removeEventListener("dispose",L);for(const D in c){const w=c[D],y=A.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}function DT(t){function e(){let F=!1;const ce=new ut;let J=null;const ee=new ut(0,0,0,0);return{setMask:function(he){J!==he&&!F&&(t.colorMask(he,he,he,he),J=he)},setLocked:function(he){F=he},setClear:function(he,Fe,Ze,Mt,Nt){Nt===!0&&(he*=Mt,Fe*=Mt,Ze*=Mt),ce.set(he,Fe,Ze,Mt),ee.equals(ce)===!1&&(t.clearColor(he,Fe,Ze,Mt),ee.copy(ce))},reset:function(){F=!1,J=null,ee.set(-1,0,0,0)}}}function n(){let F=!1,ce=null,J=null,ee=null;return{setTest:function(he){he?re(t.DEPTH_TEST):Q(t.DEPTH_TEST)},setMask:function(he){ce!==he&&!F&&(t.depthMask(he),ce=he)},setFunc:function(he){if(J!==he){switch(he){case aS:t.depthFunc(t.NEVER);break;case lS:t.depthFunc(t.ALWAYS);break;case cS:t.depthFunc(t.LESS);break;case Yl:t.depthFunc(t.LEQUAL);break;case uS:t.depthFunc(t.EQUAL);break;case dS:t.depthFunc(t.GEQUAL);break;case fS:t.depthFunc(t.GREATER);break;case hS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=he}},setLocked:function(he){F=he},setClear:function(he){ee!==he&&(t.clearDepth(he),ee=he)},reset:function(){F=!1,ce=null,J=null,ee=null}}}function i(){let F=!1,ce=null,J=null,ee=null,he=null,Fe=null,Ze=null,Mt=null,Nt=null;return{setTest:function(Je){F||(Je?re(t.STENCIL_TEST):Q(t.STENCIL_TEST))},setMask:function(Je){ce!==Je&&!F&&(t.stencilMask(Je),ce=Je)},setFunc:function(Je,oi,qn){(J!==Je||ee!==oi||he!==qn)&&(t.stencilFunc(Je,oi,qn),J=Je,ee=oi,he=qn)},setOp:function(Je,oi,qn){(Fe!==Je||Ze!==oi||Mt!==qn)&&(t.stencilOp(Je,oi,qn),Fe=Je,Ze=oi,Mt=qn)},setLocked:function(Je){F=Je},setClear:function(Je){Nt!==Je&&(t.clearStencil(Je),Nt=Je)},reset:function(){F=!1,ce=null,J=null,ee=null,he=null,Fe=null,Ze=null,Mt=null,Nt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},f={},d=new WeakMap,h=[],p=null,x=!1,g=null,m=null,u=null,v=null,_=null,M=null,L=null,A=new Ve(0,0,0),T=0,D=!1,w=null,y=null,U=null,V=null,B=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,X=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec($)[1]),N=X>=1):$.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),N=X>=2);let I=null,Y={};const K=t.getParameter(t.SCISSOR_BOX),Z=t.getParameter(t.VIEWPORT),de=new ut().fromArray(K),Pe=new ut().fromArray(Z);function j(F,ce,J,ee){const he=new Uint8Array(4),Fe=t.createTexture();t.bindTexture(F,Fe),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<J;Ze++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ce+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return Fe}const ne={};ne[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),re(t.DEPTH_TEST),s.setFunc(Yl),fe(!1),ae(qp),re(t.CULL_FACE),pe(Zi);function re(F){c[F]!==!0&&(t.enable(F),c[F]=!0)}function Q(F){c[F]!==!1&&(t.disable(F),c[F]=!1)}function Re(F,ce){return f[F]!==ce?(t.bindFramebuffer(F,ce),f[F]=ce,F===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ce),F===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Te(F,ce){let J=h,ee=!1;if(F){J=d.get(ce),J===void 0&&(J=[],d.set(ce,J));const he=F.textures;if(J.length!==he.length||J[0]!==t.COLOR_ATTACHMENT0){for(let Fe=0,Ze=he.length;Fe<Ze;Fe++)J[Fe]=t.COLOR_ATTACHMENT0+Fe;J.length=he.length,ee=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,ee=!0);ee&&t.drawBuffers(J)}function Ie(F){return p!==F?(t.useProgram(F),p=F,!0):!1}const O={[yr]:t.FUNC_ADD,[Wy]:t.FUNC_SUBTRACT,[Xy]:t.FUNC_REVERSE_SUBTRACT};O[jy]=t.MIN,O[Yy]=t.MAX;const C={[$y]:t.ZERO,[qy]:t.ONE,[Ky]:t.SRC_COLOR,[kd]:t.SRC_ALPHA,[nS]:t.SRC_ALPHA_SATURATE,[eS]:t.DST_COLOR,[Qy]:t.DST_ALPHA,[Zy]:t.ONE_MINUS_SRC_COLOR,[zd]:t.ONE_MINUS_SRC_ALPHA,[tS]:t.ONE_MINUS_DST_COLOR,[Jy]:t.ONE_MINUS_DST_ALPHA,[iS]:t.CONSTANT_COLOR,[rS]:t.ONE_MINUS_CONSTANT_COLOR,[sS]:t.CONSTANT_ALPHA,[oS]:t.ONE_MINUS_CONSTANT_ALPHA};function pe(F,ce,J,ee,he,Fe,Ze,Mt,Nt,Je){if(F===Zi){x===!0&&(Q(t.BLEND),x=!1);return}if(x===!1&&(re(t.BLEND),x=!0),F!==Gy){if(F!==g||Je!==D){if((m!==yr||_!==yr)&&(t.blendEquation(t.FUNC_ADD),m=yr,_=yr),Je)switch(F){case Ls:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Kp:t.blendFunc(t.ONE,t.ONE);break;case Zp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Qp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ls:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Kp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Zp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Qp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}u=null,v=null,M=null,L=null,A.set(0,0,0),T=0,g=F,D=Je}return}he=he||ce,Fe=Fe||J,Ze=Ze||ee,(ce!==m||he!==_)&&(t.blendEquationSeparate(O[ce],O[he]),m=ce,_=he),(J!==u||ee!==v||Fe!==M||Ze!==L)&&(t.blendFuncSeparate(C[J],C[ee],C[Fe],C[Ze]),u=J,v=ee,M=Fe,L=Ze),(Mt.equals(A)===!1||Nt!==T)&&(t.blendColor(Mt.r,Mt.g,Mt.b,Nt),A.copy(Mt),T=Nt),g=F,D=!1}function _e(F,ce){F.side===mi?Q(t.CULL_FACE):re(t.CULL_FACE);let J=F.side===ln;ce&&(J=!J),fe(J),F.blending===Ls&&F.transparent===!1?pe(Zi):pe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const ee=F.stencilWrite;o.setTest(ee),ee&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),xe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):Q(t.SAMPLE_ALPHA_TO_COVERAGE)}function fe(F){w!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),w=F)}function ae(F){F!==Hy?(re(t.CULL_FACE),F!==y&&(F===qp?t.cullFace(t.BACK):F===Vy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Q(t.CULL_FACE),y=F}function Ge(F){F!==U&&(N&&t.lineWidth(F),U=F)}function xe(F,ce,J){F?(re(t.POLYGON_OFFSET_FILL),(V!==ce||B!==J)&&(t.polygonOffset(ce,J),V=ce,B=J)):Q(t.POLYGON_OFFSET_FILL)}function be(F){F?re(t.SCISSOR_TEST):Q(t.SCISSOR_TEST)}function P(F){F===void 0&&(F=t.TEXTURE0+q-1),I!==F&&(t.activeTexture(F),I=F)}function S(F,ce,J){J===void 0&&(I===null?J=t.TEXTURE0+q-1:J=I);let ee=Y[J];ee===void 0&&(ee={type:void 0,texture:void 0},Y[J]=ee),(ee.type!==F||ee.texture!==ce)&&(I!==J&&(t.activeTexture(J),I=J),t.bindTexture(F,ce||ne[F]),ee.type=F,ee.texture=ce)}function H(){const F=Y[I];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ie(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qe(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(F){de.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),de.copy(F))}function Ee(F){Pe.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Pe.copy(F))}function Be(F,ce){let J=l.get(ce);J===void 0&&(J=new WeakMap,l.set(ce,J));let ee=J.get(F);ee===void 0&&(ee=t.getUniformBlockIndex(ce,F.name),J.set(F,ee))}function Ye(F,ce){const ee=l.get(ce).get(F);a.get(ce)!==ee&&(t.uniformBlockBinding(ce,ee,F.__bindingPointIndex),a.set(ce,ee))}function pt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,Y={},f={},d=new WeakMap,h=[],p=null,x=!1,g=null,m=null,u=null,v=null,_=null,M=null,L=null,A=new Ve(0,0,0),T=0,D=!1,w=null,y=null,U=null,V=null,B=null,de.set(0,0,t.canvas.width,t.canvas.height),Pe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:re,disable:Q,bindFramebuffer:Re,drawBuffers:Te,useProgram:Ie,setBlending:pe,setMaterial:_e,setFlipSided:fe,setCullFace:ae,setLineWidth:Ge,setPolygonOffset:xe,setScissorTest:be,activeTexture:P,bindTexture:S,unbindTexture:H,compressedTexImage2D:ie,compressedTexImage3D:oe,texImage2D:Me,texImage3D:qe,updateUBOMapping:Be,uniformBlockBinding:Ye,texStorage2D:We,texStorage3D:le,texSubImage2D:te,texSubImage3D:De,compressedTexSubImage2D:ge,compressedTexSubImage3D:ye,scissor:Oe,viewport:Ee,reset:pt}}function Gm(t,e,n,i){const r=IT(i);switch(n){case Rv:return t*e;case Pv:return t*e;case Lv:return t*e*2;case Dv:return t*e/r.components*r.byteLength;case Sh:return t*e/r.components*r.byteLength;case Iv:return t*e*2/r.components*r.byteLength;case Mh:return t*e*2/r.components*r.byteLength;case bv:return t*e*3/r.components*r.byteLength;case Wn:return t*e*4/r.components*r.byteLength;case Eh:return t*e*4/r.components*r.byteLength;case vl:case _l:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xl:case yl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wd:case jd:return Math.max(t,16)*Math.max(e,8)/4;case Gd:case Xd:return Math.max(t,8)*Math.max(e,8)/2;case Yd:case $d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ef:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case tf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case nf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case rf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case sf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case of:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case af:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case lf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case cf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case uf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Sl:case df:case ff:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Uv:case hf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case pf:case mf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function IT(t){switch(t){case Ti:case Tv:return{byteLength:1,components:1};case Zo:case Av:case oa:return{byteLength:2,components:1};case xh:case yh:return{byteLength:2,components:4};case Fr:case _h:case _i:return{byteLength:4,components:1};case Cv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function UT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,S){return p?new OffscreenCanvas(P,S):Ql("canvas")}function g(P,S,H){let ie=1;const oe=be(P);if((oe.width>H||oe.height>H)&&(ie=H/Math.max(oe.width,oe.height)),ie<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const te=Math.floor(ie*oe.width),De=Math.floor(ie*oe.height);d===void 0&&(d=x(te,De));const ge=S?x(te,De):d;return ge.width=te,ge.height=De,ge.getContext("2d").drawImage(P,0,0,te,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+te+"x"+De+")."),ge}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==bn&&P.minFilter!==Vn}function u(P){t.generateMipmap(P)}function v(P,S,H,ie,oe=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let te=S;if(S===t.RED&&(H===t.FLOAT&&(te=t.R32F),H===t.HALF_FLOAT&&(te=t.R16F),H===t.UNSIGNED_BYTE&&(te=t.R8)),S===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(te=t.R8UI),H===t.UNSIGNED_SHORT&&(te=t.R16UI),H===t.UNSIGNED_INT&&(te=t.R32UI),H===t.BYTE&&(te=t.R8I),H===t.SHORT&&(te=t.R16I),H===t.INT&&(te=t.R32I)),S===t.RG&&(H===t.FLOAT&&(te=t.RG32F),H===t.HALF_FLOAT&&(te=t.RG16F),H===t.UNSIGNED_BYTE&&(te=t.RG8)),S===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(te=t.RG8UI),H===t.UNSIGNED_SHORT&&(te=t.RG16UI),H===t.UNSIGNED_INT&&(te=t.RG32UI),H===t.BYTE&&(te=t.RG8I),H===t.SHORT&&(te=t.RG16I),H===t.INT&&(te=t.RG32I)),S===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),S===t.RGBA){const De=oe?$l:it.getTransfer(ie);H===t.FLOAT&&(te=t.RGBA32F),H===t.HALF_FLOAT&&(te=t.RGBA16F),H===t.UNSIGNED_BYTE&&(te=De===ct?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function _(P,S){let H;return P?S===null||S===Fr||S===Ws?H=t.DEPTH24_STENCIL8:S===_i?H=t.DEPTH32F_STENCIL8:S===Zo&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Fr||S===Ws?H=t.DEPTH_COMPONENT24:S===_i?H=t.DEPTH_COMPONENT32F:S===Zo&&(H=t.DEPTH_COMPONENT16),H}function M(P,S){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==bn&&P.minFilter!==Vn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function L(P){const S=P.target;S.removeEventListener("dispose",L),T(S),S.isVideoTexture&&f.delete(S)}function A(P){const S=P.target;S.removeEventListener("dispose",A),w(S)}function T(P){const S=i.get(P);if(S.__webglInit===void 0)return;const H=P.source,ie=h.get(H);if(ie){const oe=ie[S.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&D(P),Object.keys(ie).length===0&&h.delete(H)}i.remove(P)}function D(P){const S=i.get(P);t.deleteTexture(S.__webglTexture);const H=P.source,ie=h.get(H);delete ie[S.__cacheKey],o.memory.textures--}function w(P){const S=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(S.__webglFramebuffer[ie]))for(let oe=0;oe<S.__webglFramebuffer[ie].length;oe++)t.deleteFramebuffer(S.__webglFramebuffer[ie][oe]);else t.deleteFramebuffer(S.__webglFramebuffer[ie]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[ie])}else{if(Array.isArray(S.__webglFramebuffer))for(let ie=0;ie<S.__webglFramebuffer.length;ie++)t.deleteFramebuffer(S.__webglFramebuffer[ie]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ie=0;ie<S.__webglColorRenderbuffer.length;ie++)S.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[ie]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=P.textures;for(let ie=0,oe=H.length;ie<oe;ie++){const te=i.get(H[ie]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(H[ie])}i.remove(P)}let y=0;function U(){y=0}function V(){const P=y;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),y+=1,P}function B(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function q(P,S){const H=i.get(P);if(P.isVideoTexture&&Ge(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const ie=P.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(H,P,S);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+S)}function N(P,S){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Pe(H,P,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+S)}function X(P,S){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Pe(H,P,S);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+S)}function $(P,S){const H=i.get(P);if(P.version>0&&H.__version!==P.version){j(H,P,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+S)}const I={[Hd]:t.REPEAT,[Tr]:t.CLAMP_TO_EDGE,[Vd]:t.MIRRORED_REPEAT},Y={[bn]:t.NEAREST,[ES]:t.NEAREST_MIPMAP_NEAREST,[Ra]:t.NEAREST_MIPMAP_LINEAR,[Vn]:t.LINEAR,[iu]:t.LINEAR_MIPMAP_NEAREST,[Ar]:t.LINEAR_MIPMAP_LINEAR},K={[CS]:t.NEVER,[IS]:t.ALWAYS,[RS]:t.LESS,[Fv]:t.LEQUAL,[bS]:t.EQUAL,[DS]:t.GEQUAL,[PS]:t.GREATER,[LS]:t.NOTEQUAL};function Z(P,S){if(S.type===_i&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Vn||S.magFilter===iu||S.magFilter===Ra||S.magFilter===Ar||S.minFilter===Vn||S.minFilter===iu||S.minFilter===Ra||S.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,I[S.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,I[S.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,I[S.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,Y[S.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,Y[S.minFilter]),S.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,K[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===bn||S.minFilter!==Ra&&S.minFilter!==Ar||S.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function de(P,S){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",L));const ie=S.source;let oe=h.get(ie);oe===void 0&&(oe={},h.set(ie,oe));const te=B(S);if(te!==P.__cacheKey){oe[te]===void 0&&(oe[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),oe[te].usedTimes++;const De=oe[P.__cacheKey];De!==void 0&&(oe[P.__cacheKey].usedTimes--,De.usedTimes===0&&D(S)),P.__cacheKey=te,P.__webglTexture=oe[te].texture}return H}function Pe(P,S,H){let ie=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=t.TEXTURE_3D);const oe=de(P,S),te=S.source;n.bindTexture(ie,P.__webglTexture,t.TEXTURE0+H);const De=i.get(te);if(te.version!==De.__version||oe===!0){n.activeTexture(t.TEXTURE0+H);const ge=it.getPrimaries(it.workingColorSpace),ye=S.colorSpace===Bi?null:it.getPrimaries(S.colorSpace),We=S.colorSpace===Bi||ge===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let le=g(S.image,!1,r.maxTextureSize);le=xe(S,le);const Me=s.convert(S.format,S.colorSpace),qe=s.convert(S.type);let Oe=v(S.internalFormat,Me,qe,S.colorSpace,S.isVideoTexture);Z(ie,S);let Ee;const Be=S.mipmaps,Ye=S.isVideoTexture!==!0,pt=De.__version===void 0||oe===!0,F=te.dataReady,ce=M(S,le);if(S.isDepthTexture)Oe=_(S.format===Xs,S.type),pt&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,Oe,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Oe,le.width,le.height,0,Me,qe,null));else if(S.isDataTexture)if(Be.length>0){Ye&&pt&&n.texStorage2D(t.TEXTURE_2D,ce,Oe,Be[0].width,Be[0].height);for(let J=0,ee=Be.length;J<ee;J++)Ee=Be[J],Ye?F&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Ee.width,Ee.height,Me,qe,Ee.data):n.texImage2D(t.TEXTURE_2D,J,Oe,Ee.width,Ee.height,0,Me,qe,Ee.data);S.generateMipmaps=!1}else Ye?(pt&&n.texStorage2D(t.TEXTURE_2D,ce,Oe,le.width,le.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,Me,qe,le.data)):n.texImage2D(t.TEXTURE_2D,0,Oe,le.width,le.height,0,Me,qe,le.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ye&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Oe,Be[0].width,Be[0].height,le.depth);for(let J=0,ee=Be.length;J<ee;J++)if(Ee=Be[J],S.format!==Wn)if(Me!==null)if(Ye){if(F)if(S.layerUpdates.size>0){const he=Gm(Ee.width,Ee.height,S.format,S.type);for(const Fe of S.layerUpdates){const Ze=Ee.data.subarray(Fe*he/Ee.data.BYTES_PER_ELEMENT,(Fe+1)*he/Ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,Fe,Ee.width,Ee.height,1,Me,Ze,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Ee.width,Ee.height,le.depth,Me,Ee.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,Oe,Ee.width,Ee.height,le.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Ee.width,Ee.height,le.depth,Me,qe,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,Oe,Ee.width,Ee.height,le.depth,0,Me,qe,Ee.data)}else{Ye&&pt&&n.texStorage2D(t.TEXTURE_2D,ce,Oe,Be[0].width,Be[0].height);for(let J=0,ee=Be.length;J<ee;J++)Ee=Be[J],S.format!==Wn?Me!==null?Ye?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,Ee.width,Ee.height,Me,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,J,Oe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?F&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Ee.width,Ee.height,Me,qe,Ee.data):n.texImage2D(t.TEXTURE_2D,J,Oe,Ee.width,Ee.height,0,Me,qe,Ee.data)}else if(S.isDataArrayTexture)if(Ye){if(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Oe,le.width,le.height,le.depth),F)if(S.layerUpdates.size>0){const J=Gm(le.width,le.height,S.format,S.type);for(const ee of S.layerUpdates){const he=le.data.subarray(ee*J/le.data.BYTES_PER_ELEMENT,(ee+1)*J/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,le.width,le.height,1,Me,qe,he)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Me,qe,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,le.width,le.height,le.depth,0,Me,qe,le.data);else if(S.isData3DTexture)Ye?(pt&&n.texStorage3D(t.TEXTURE_3D,ce,Oe,le.width,le.height,le.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Me,qe,le.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,le.width,le.height,le.depth,0,Me,qe,le.data);else if(S.isFramebufferTexture){if(pt)if(Ye)n.texStorage2D(t.TEXTURE_2D,ce,Oe,le.width,le.height);else{let J=le.width,ee=le.height;for(let he=0;he<ce;he++)n.texImage2D(t.TEXTURE_2D,he,Oe,J,ee,0,Me,qe,null),J>>=1,ee>>=1}}else if(Be.length>0){if(Ye&&pt){const J=be(Be[0]);n.texStorage2D(t.TEXTURE_2D,ce,Oe,J.width,J.height)}for(let J=0,ee=Be.length;J<ee;J++)Ee=Be[J],Ye?F&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Me,qe,Ee):n.texImage2D(t.TEXTURE_2D,J,Oe,Me,qe,Ee);S.generateMipmaps=!1}else if(Ye){if(pt){const J=be(le);n.texStorage2D(t.TEXTURE_2D,ce,Oe,J.width,J.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,qe,le)}else n.texImage2D(t.TEXTURE_2D,0,Oe,Me,qe,le);m(S)&&u(ie),De.__version=te.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function j(P,S,H){if(S.image.length!==6)return;const ie=de(P,S),oe=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+H);const te=i.get(oe);if(oe.version!==te.__version||ie===!0){n.activeTexture(t.TEXTURE0+H);const De=it.getPrimaries(it.workingColorSpace),ge=S.colorSpace===Bi?null:it.getPrimaries(S.colorSpace),ye=S.colorSpace===Bi||De===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const We=S.isCompressedTexture||S.image[0].isCompressedTexture,le=S.image[0]&&S.image[0].isDataTexture,Me=[];for(let ee=0;ee<6;ee++)!We&&!le?Me[ee]=g(S.image[ee],!0,r.maxCubemapSize):Me[ee]=le?S.image[ee].image:S.image[ee],Me[ee]=xe(S,Me[ee]);const qe=Me[0],Oe=s.convert(S.format,S.colorSpace),Ee=s.convert(S.type),Be=v(S.internalFormat,Oe,Ee,S.colorSpace),Ye=S.isVideoTexture!==!0,pt=te.__version===void 0||ie===!0,F=oe.dataReady;let ce=M(S,qe);Z(t.TEXTURE_CUBE_MAP,S);let J;if(We){Ye&&pt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,Be,qe.width,qe.height);for(let ee=0;ee<6;ee++){J=Me[ee].mipmaps;for(let he=0;he<J.length;he++){const Fe=J[he];S.format!==Wn?Oe!==null?Ye?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,0,0,Fe.width,Fe.height,Oe,Fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,Be,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,0,0,Fe.width,Fe.height,Oe,Ee,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,Be,Fe.width,Fe.height,0,Oe,Ee,Fe.data)}}}else{if(J=S.mipmaps,Ye&&pt){J.length>0&&ce++;const ee=be(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,Be,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(le){Ye?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Me[ee].width,Me[ee].height,Oe,Ee,Me[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Be,Me[ee].width,Me[ee].height,0,Oe,Ee,Me[ee].data);for(let he=0;he<J.length;he++){const Ze=J[he].image[ee].image;Ye?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,0,0,Ze.width,Ze.height,Oe,Ee,Ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,Be,Ze.width,Ze.height,0,Oe,Ee,Ze.data)}}else{Ye?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Oe,Ee,Me[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Be,Oe,Ee,Me[ee]);for(let he=0;he<J.length;he++){const Fe=J[he];Ye?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,0,0,Oe,Ee,Fe.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,Be,Oe,Ee,Fe.image[ee])}}}m(S)&&u(t.TEXTURE_CUBE_MAP),te.__version=oe.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ne(P,S,H,ie,oe,te){const De=s.convert(H.format,H.colorSpace),ge=s.convert(H.type),ye=v(H.internalFormat,De,ge,H.colorSpace);if(!i.get(S).__hasExternalTextures){const le=Math.max(1,S.width>>te),Me=Math.max(1,S.height>>te);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,te,ye,le,Me,S.depth,0,De,ge,null):n.texImage2D(oe,te,ye,le,Me,0,De,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),ae(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,oe,i.get(H).__webglTexture,0,fe(S)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,oe,i.get(H).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(P,S,H){if(t.bindRenderbuffer(t.RENDERBUFFER,P),S.depthBuffer){const ie=S.depthTexture,oe=ie&&ie.isDepthTexture?ie.type:null,te=_(S.stencilBuffer,oe),De=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=fe(S);ae(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge,te,S.width,S.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,te,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,te,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,De,t.RENDERBUFFER,P)}else{const ie=S.textures;for(let oe=0;oe<ie.length;oe++){const te=ie[oe],De=s.convert(te.format,te.colorSpace),ge=s.convert(te.type),ye=v(te.internalFormat,De,ge,te.colorSpace),We=fe(S);H&&ae(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,We,ye,S.width,S.height):ae(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,We,ye,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ye,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Q(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const ie=i.get(S.depthTexture).__webglTexture,oe=fe(S);if(S.depthTexture.format===Ds)ae(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(S.depthTexture.format===Xs)ae(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Re(P){const S=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Q(S.__webglFramebuffer,P)}else if(H){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]=t.createRenderbuffer(),re(S.__webglDepthbuffer[ie],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),re(S.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(P,S,H){const ie=i.get(P);S!==void 0&&ne(ie.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Re(P)}function Ie(P){const S=P.texture,H=i.get(P),ie=i.get(S);P.addEventListener("dispose",A);const oe=P.textures,te=P.isWebGLCubeRenderTarget===!0,De=oe.length>1;if(De||(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=S.version,o.memory.textures++),te){H.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[ge]=[];for(let ye=0;ye<S.mipmaps.length;ye++)H.__webglFramebuffer[ge][ye]=t.createFramebuffer()}else H.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let ge=0;ge<S.mipmaps.length;ge++)H.__webglFramebuffer[ge]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(De)for(let ge=0,ye=oe.length;ge<ye;ge++){const We=i.get(oe[ge]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&ae(P)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ge=0;ge<oe.length;ge++){const ye=oe[ge];H.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ge]);const We=s.convert(ye.format,ye.colorSpace),le=s.convert(ye.type),Me=v(ye.internalFormat,We,le,ye.colorSpace,P.isXRRenderTarget===!0),qe=fe(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,Me,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,H.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),re(H.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),Z(t.TEXTURE_CUBE_MAP,S);for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)ne(H.__webglFramebuffer[ge][ye],P,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ye);else ne(H.__webglFramebuffer[ge],P,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){for(let ge=0,ye=oe.length;ge<ye;ge++){const We=oe[ge],le=i.get(We);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),Z(t.TEXTURE_2D,We),ne(H.__webglFramebuffer,P,We,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,0),m(We)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,ie.__webglTexture),Z(ge,S),S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)ne(H.__webglFramebuffer[ye],P,S,t.COLOR_ATTACHMENT0,ge,ye);else ne(H.__webglFramebuffer,P,S,t.COLOR_ATTACHMENT0,ge,0);m(S)&&u(ge),n.unbindTexture()}P.depthBuffer&&Re(P)}function O(P){const S=P.textures;for(let H=0,ie=S.length;H<ie;H++){const oe=S[H];if(m(oe)){const te=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,De=i.get(oe).__webglTexture;n.bindTexture(te,De),u(te),n.unbindTexture()}}}const C=[],pe=[];function _e(P){if(P.samples>0){if(ae(P)===!1){const S=P.textures,H=P.width,ie=P.height;let oe=t.COLOR_BUFFER_BIT;const te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,De=i.get(P),ge=S.length>1;if(ge)for(let ye=0;ye<S.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let ye=0;ye<S.length;ye++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),ge){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,De.__webglColorRenderbuffer[ye]);const We=i.get(S[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,We,0)}t.blitFramebuffer(0,0,H,ie,0,0,H,ie,oe,t.NEAREST),l===!0&&(C.length=0,pe.length=0,C.push(t.COLOR_ATTACHMENT0+ye),P.depthBuffer&&P.resolveDepthBuffer===!1&&(C.push(te),pe.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,pe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,C))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let ye=0;ye<S.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,De.__webglColorRenderbuffer[ye]);const We=i.get(S[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,We,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function fe(P){return Math.min(r.maxSamples,P.samples)}function ae(P){const S=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ge(P){const S=o.render.frame;f.get(P)!==S&&(f.set(P,S),P.update())}function xe(P,S){const H=P.colorSpace,ie=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==lr&&H!==Bi&&(it.getTransfer(H)===ct?(ie!==Wn||oe!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function be(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=U,this.setTexture2D=q,this.setTexture2DArray=N,this.setTexture3D=X,this.setTextureCube=$,this.rebindTextures=Te,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ae}function NT(t,e){function n(i,r=Bi){let s;const o=it.getTransfer(r);if(i===Ti)return t.UNSIGNED_BYTE;if(i===xh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===yh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Cv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Tv)return t.BYTE;if(i===Av)return t.SHORT;if(i===Zo)return t.UNSIGNED_SHORT;if(i===_h)return t.INT;if(i===Fr)return t.UNSIGNED_INT;if(i===_i)return t.FLOAT;if(i===oa)return t.HALF_FLOAT;if(i===Rv)return t.ALPHA;if(i===bv)return t.RGB;if(i===Wn)return t.RGBA;if(i===Pv)return t.LUMINANCE;if(i===Lv)return t.LUMINANCE_ALPHA;if(i===Ds)return t.DEPTH_COMPONENT;if(i===Xs)return t.DEPTH_STENCIL;if(i===Dv)return t.RED;if(i===Sh)return t.RED_INTEGER;if(i===Iv)return t.RG;if(i===Mh)return t.RG_INTEGER;if(i===Eh)return t.RGBA_INTEGER;if(i===vl||i===_l||i===xl||i===yl)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_l)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gd||i===Wd||i===Xd||i===jd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Gd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yd||i===$d||i===qd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yd||i===$d)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Kd||i===Zd||i===Qd||i===Jd||i===ef||i===tf||i===nf||i===rf||i===sf||i===of||i===af||i===lf||i===cf||i===uf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Kd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ef)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===of)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===af)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===uf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sl||i===df||i===ff)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Sl)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===df)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ff)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uv||i===hf||i===pf||i===mf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Sl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===hf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class FT extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wo extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kT={type:"move"};class Pu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),u=this._getHandJoint(c,g);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new wo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const zT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Kt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ir({vertexShader:zT,fragmentShader:OT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ke(new Tc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HT extends Ks{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,x=null;const g=new BT,m=n.getContextAttributes();let u=null,v=null;const _=[],M=[],L=new He;let A=null;const T=new gn;T.layers.enable(1),T.viewport=new ut;const D=new gn;D.layers.enable(2),D.viewport=new ut;const w=[T,D],y=new FT;y.layers.enable(1),y.layers.enable(2);let U=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=_[j];return ne===void 0&&(ne=new Pu,_[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=_[j];return ne===void 0&&(ne=new Pu,_[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=_[j];return ne===void 0&&(ne=new Pu,_[j]=ne),ne.getHandSpace()};function B(j){const ne=M.indexOf(j.inputSource);if(ne===-1)return;const re=_[ne];re!==void 0&&(re.update(j.inputSource,j.frame,c||o),re.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",N);for(let j=0;j<_.length;j++){const ne=M[j];ne!==null&&(M[j]=null,_[j].disconnect(ne))}U=null,V=null,g.reset(),e.setRenderTarget(u),p=null,h=null,d=null,r=null,v=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",q),r.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new kr(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,re=null,Q=null;m.depth&&(Q=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?Xs:Ds,re=m.stencil?Ws:Fr);const Re={colorFormat:n.RGBA8,depthFormat:Q,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Re),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new kr(h.textureWidth,h.textureHeight,{format:Wn,type:Ti,depthTexture:new $v(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N(j){for(let ne=0;ne<j.removed.length;ne++){const re=j.removed[ne],Q=M.indexOf(re);Q>=0&&(M[Q]=null,_[Q].disconnect(re))}for(let ne=0;ne<j.added.length;ne++){const re=j.added[ne];let Q=M.indexOf(re);if(Q===-1){for(let Te=0;Te<_.length;Te++)if(Te>=M.length){M.push(re),Q=Te;break}else if(M[Te]===null){M[Te]=re,Q=Te;break}if(Q===-1)break}const Re=_[Q];Re&&Re.connect(re)}}const X=new b,$=new b;function I(j,ne,re){X.setFromMatrixPosition(ne.matrixWorld),$.setFromMatrixPosition(re.matrixWorld);const Q=X.distanceTo($),Re=ne.projectionMatrix.elements,Te=re.projectionMatrix.elements,Ie=Re[14]/(Re[10]-1),O=Re[14]/(Re[10]+1),C=(Re[9]+1)/Re[5],pe=(Re[9]-1)/Re[5],_e=(Re[8]-1)/Re[0],fe=(Te[8]+1)/Te[0],ae=Ie*_e,Ge=Ie*fe,xe=Q/(-_e+fe),be=xe*-_e;ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(be),j.translateZ(xe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const P=Ie+xe,S=O+xe,H=ae-be,ie=Ge+(Q-be),oe=C*O/S*P,te=pe*O/S*P;j.projectionMatrix.makePerspective(H,ie,oe,te,P,S),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function Y(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;g.texture!==null&&(j.near=g.depthNear,j.far=g.depthFar),y.near=D.near=T.near=j.near,y.far=D.far=T.far=j.far,(U!==y.near||V!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),U=y.near,V=y.far,T.near=U,T.far=V,D.near=U,D.far=V,T.updateProjectionMatrix(),D.updateProjectionMatrix(),j.updateProjectionMatrix());const ne=j.parent,re=y.cameras;Y(y,ne);for(let Q=0;Q<re.length;Q++)Y(re[Q],ne);re.length===2?I(y,T,D):y.projectionMatrix.copy(T.projectionMatrix),K(j,y,ne)};function K(j,ne,re){re===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(re.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=vf*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let Z=null;function de(j,ne){if(f=ne.getViewerPose(c||o),x=ne,f!==null){const re=f.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Q=!1;re.length!==y.cameras.length&&(y.cameras.length=0,Q=!0);for(let Te=0;Te<re.length;Te++){const Ie=re[Te];let O=null;if(p!==null)O=p.getViewport(Ie);else{const pe=d.getViewSubImage(h,Ie);O=pe.viewport,Te===0&&(e.setRenderTargetTextures(v,pe.colorTexture,h.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(v))}let C=w[Te];C===void 0&&(C=new gn,C.layers.enable(Te),C.viewport=new ut,w[Te]=C),C.matrix.fromArray(Ie.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Ie.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(O.x,O.y,O.width,O.height),Te===0&&(y.matrix.copy(C.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Q===!0&&y.cameras.push(C)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Te=d.getDepthInformation(re[0]);Te&&Te.isValid&&Te.texture&&g.init(e,Te,r.renderState)}}for(let re=0;re<_.length;re++){const Q=M[re],Re=_[re];Q!==null&&Re!==void 0&&Re.update(Q,ne,c||o)}Z&&Z(j,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),x=null}const Pe=new jv;Pe.setAnimationLoop(de),this.setAnimationLoop=function(j){Z=j},this.dispose=function(){}}}const mr=new si,VT=new ft;function GT(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Gv(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,_,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),x(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),g(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,v,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===ln&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===ln&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u),_=v.envMap,M=v.envMapRotation;_&&(m.envMap.value=_,mr.copy(M),mr.x*=-1,mr.y*=-1,mr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),m.envMapRotation.value.setFromMatrix4(VT.makeRotationFromEuler(mr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ln&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function g(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const M=_.program;i.uniformBlockBinding(v,M)}function c(v,_){let M=r[v.id];M===void 0&&(x(v),M=f(v),r[v.id]=M,v.addEventListener("dispose",m));const L=_.program;i.updateUBOMapping(v,L);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function f(v){const _=d();v.__bindingPointIndex=_;const M=t.createBuffer(),L=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,L,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=r[v.id],M=v.uniforms,L=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,T=M.length;A<T;A++){const D=Array.isArray(M[A])?M[A]:[M[A]];for(let w=0,y=D.length;w<y;w++){const U=D[w];if(p(U,A,w,L)===!0){const V=U.__offset,B=Array.isArray(U.value)?U.value:[U.value];let q=0;for(let N=0;N<B.length;N++){const X=B[N],$=g(X);typeof X=="number"||typeof X=="boolean"?(U.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,V+q,U.__data)):X.isMatrix3?(U.__data[0]=X.elements[0],U.__data[1]=X.elements[1],U.__data[2]=X.elements[2],U.__data[3]=0,U.__data[4]=X.elements[3],U.__data[5]=X.elements[4],U.__data[6]=X.elements[5],U.__data[7]=0,U.__data[8]=X.elements[6],U.__data[9]=X.elements[7],U.__data[10]=X.elements[8],U.__data[11]=0):(X.toArray(U.__data,q),q+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,_,M,L){const A=v.value,T=_+"_"+M;if(L[T]===void 0)return typeof A=="number"||typeof A=="boolean"?L[T]=A:L[T]=A.clone(),!0;{const D=L[T];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return L[T]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function x(v){const _=v.uniforms;let M=0;const L=16;for(let T=0,D=_.length;T<D;T++){const w=Array.isArray(_[T])?_[T]:[_[T]];for(let y=0,U=w.length;y<U;y++){const V=w[y],B=Array.isArray(V.value)?V.value:[V.value];for(let q=0,N=B.length;q<N;q++){const X=B[q],$=g(X),I=M%L,Y=I%$.boundary,K=I+Y;M+=Y,K!==0&&L-K<$.storage&&(M+=L-K),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=$.storage}}}const A=M%L;return A>0&&(M+=L-A),v.__size=M,v.__cache={},this}function g(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class XT{constructor(e={}){const{canvas:n=NS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),x=new Int32Array(4);let g=null,m=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=Qi,this.toneMappingExposure=1;const _=this;let M=!1,L=0,A=0,T=null,D=-1,w=null;const y=new ut,U=new ut;let V=null;const B=new Ve(0);let q=0,N=n.width,X=n.height,$=1,I=null,Y=null;const K=new ut(0,0,N,X),Z=new ut(0,0,N,X);let de=!1;const Pe=new Ch;let j=!1,ne=!1;const re=new ft,Q=new b,Re=new ut,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function O(){return T===null?$:1}let C=i;function pe(E,k){return n.getContext(E,k)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gh}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",ee,!1),n.addEventListener("webglcontextcreationerror",he,!1),C===null){const k="webgl2";if(C=pe(k,E),C===null)throw pe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let _e,fe,ae,Ge,xe,be,P,S,H,ie,oe,te,De,ge,ye,We,le,Me,qe,Oe,Ee,Be,Ye,pt;function F(){_e=new ZE(C),_e.init(),Be=new NT(C,_e),fe=new XE(C,_e,e,Be),ae=new DT(C),Ge=new ew(C),xe=new _T,be=new UT(C,_e,ae,xe,fe,Be,Ge),P=new YE(_),S=new KE(_),H=new aM(C),Ye=new GE(C,H),ie=new QE(C,H,Ge,Ye),oe=new nw(C,ie,H,Ge),qe=new tw(C,fe,be),We=new jE(xe),te=new vT(_,P,S,_e,fe,Ye,We),De=new GT(_,xe),ge=new yT,ye=new AT(_e),Me=new VE(_,P,S,ae,oe,h,l),le=new LT(_,oe,fe),pt=new WT(C,Ge,fe,ae),Oe=new WE(C,_e,Ge),Ee=new JE(C,_e,Ge),Ge.programs=te.programs,_.capabilities=fe,_.extensions=_e,_.properties=xe,_.renderLists=ge,_.shadowMap=le,_.state=ae,_.info=Ge}F();const ce=new HT(_,C);this.xr=ce,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=_e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=_e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(N,X,!1))},this.getSize=function(E){return E.set(N,X)},this.setSize=function(E,k,G=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,X=k,n.width=Math.floor(E*$),n.height=Math.floor(k*$),G===!0&&(n.style.width=E+"px",n.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(N*$,X*$).floor()},this.setDrawingBufferSize=function(E,k,G){N=E,X=k,$=G,n.width=Math.floor(E*G),n.height=Math.floor(k*G),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,k,G,W){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,k,G,W),ae.viewport(y.copy(K).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(Z)},this.setScissor=function(E,k,G,W){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,k,G,W),ae.scissor(U.copy(Z).multiplyScalar($).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(E){ae.setScissorTest(de=E)},this.setOpaqueSort=function(E){I=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(E=!0,k=!0,G=!0){let W=0;if(E){let z=!1;if(T!==null){const ue=T.texture.format;z=ue===Eh||ue===Mh||ue===Sh}if(z){const ue=T.texture.type,ve=ue===Ti||ue===Fr||ue===Zo||ue===Ws||ue===xh||ue===yh,Ae=Me.getClearColor(),Ce=Me.getClearAlpha(),ke=Ae.r,ze=Ae.g,Ne=Ae.b;ve?(p[0]=ke,p[1]=ze,p[2]=Ne,p[3]=Ce,C.clearBufferuiv(C.COLOR,0,p)):(x[0]=ke,x[1]=ze,x[2]=Ne,x[3]=Ce,C.clearBufferiv(C.COLOR,0,x))}else W|=C.COLOR_BUFFER_BIT}k&&(W|=C.DEPTH_BUFFER_BIT),G&&(W|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",ee,!1),n.removeEventListener("webglcontextcreationerror",he,!1),ge.dispose(),ye.dispose(),xe.dispose(),P.dispose(),S.dispose(),oe.dispose(),Ye.dispose(),pt.dispose(),te.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",qn),ce.removeEventListener("sessionend",Ih),cr.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=Ge.autoReset,k=le.enabled,G=le.autoUpdate,W=le.needsUpdate,z=le.type;F(),Ge.autoReset=E,le.enabled=k,le.autoUpdate=G,le.needsUpdate=W,le.type=z}function he(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Fe(E){const k=E.target;k.removeEventListener("dispose",Fe),Ze(k)}function Ze(E){Mt(E),xe.remove(E)}function Mt(E){const k=xe.get(E).programs;k!==void 0&&(k.forEach(function(G){te.releaseProgram(G)}),E.isShaderMaterial&&te.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,G,W,z,ue){k===null&&(k=Te);const ve=z.isMesh&&z.matrixWorld.determinant()<0,Ae=u_(E,k,G,W,z);ae.setMaterial(W,ve);let Ce=G.index,ke=1;if(W.wireframe===!0){if(Ce=ie.getWireframeAttribute(G),Ce===void 0)return;ke=2}const ze=G.drawRange,Ne=G.attributes.position;let et=ze.start*ke,_t=(ze.start+ze.count)*ke;ue!==null&&(et=Math.max(et,ue.start*ke),_t=Math.min(_t,(ue.start+ue.count)*ke)),Ce!==null?(et=Math.max(et,0),_t=Math.min(_t,Ce.count)):Ne!=null&&(et=Math.max(et,0),_t=Math.min(_t,Ne.count));const xt=_t-et;if(xt<0||xt===1/0)return;Ye.setup(z,W,Ae,G,Ce);let un,tt=Oe;if(Ce!==null&&(un=H.get(Ce),tt=Ee,tt.setIndex(un)),z.isMesh)W.wireframe===!0?(ae.setLineWidth(W.wireframeLinewidth*O()),tt.setMode(C.LINES)):tt.setMode(C.TRIANGLES);else if(z.isLine){let Le=W.linewidth;Le===void 0&&(Le=1),ae.setLineWidth(Le*O()),z.isLineSegments?tt.setMode(C.LINES):z.isLineLoop?tt.setMode(C.LINE_LOOP):tt.setMode(C.LINE_STRIP)}else z.isPoints?tt.setMode(C.POINTS):z.isSprite&&tt.setMode(C.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)tt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))tt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Le=z._multiDrawStarts,Ft=z._multiDrawCounts,nt=z._multiDrawCount,Un=Ce?H.get(Ce).bytesPerElement:1,Hr=xe.get(W).currentProgram.getUniforms();for(let dn=0;dn<nt;dn++)Hr.setValue(C,"_gl_DrawID",dn),tt.render(Le[dn]/Un,Ft[dn])}else if(z.isInstancedMesh)tt.renderInstances(et,xt,z.count);else if(G.isInstancedBufferGeometry){const Le=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ft=Math.min(G.instanceCount,Le);tt.renderInstances(et,xt,Ft)}else tt.render(et,xt)};function Nt(E,k,G){E.transparent===!0&&E.side===mi&&E.forceSinglePass===!1?(E.side=ln,E.needsUpdate=!0,ua(E,k,G),E.side=nr,E.needsUpdate=!0,ua(E,k,G),E.side=mi):ua(E,k,G)}this.compile=function(E,k,G=null){G===null&&(G=E),m=ye.get(G),m.init(k),v.push(m),G.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),E!==G&&E.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const W=new Set;return E.traverse(function(z){const ue=z.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){const Ae=ue[ve];Nt(Ae,G,z),W.add(Ae)}else Nt(ue,G,z),W.add(ue)}),v.pop(),m=null,W},this.compileAsync=function(E,k,G=null){const W=this.compile(E,k,G);return new Promise(z=>{function ue(){if(W.forEach(function(ve){xe.get(ve).currentProgram.isReady()&&W.delete(ve)}),W.size===0){z(E);return}setTimeout(ue,10)}_e.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Je=null;function oi(E){Je&&Je(E)}function qn(){cr.stop()}function Ih(){cr.start()}const cr=new jv;cr.setAnimationLoop(oi),typeof self<"u"&&cr.setContext(self),this.setAnimationLoop=function(E){Je=E,ce.setAnimationLoop(E),E===null?cr.stop():cr.start()},ce.addEventListener("sessionstart",qn),ce.addEventListener("sessionend",Ih),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(k),k=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,k,T),m=ye.get(E,v.length),m.init(k),v.push(m),re.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Pe.setFromProjectionMatrix(re),ne=this.localClippingEnabled,j=We.init(this.clippingPlanes,ne),g=ge.get(E,u.length),g.init(),u.push(g),ce.enabled===!0&&ce.isPresenting===!0){const ue=_.xr.getDepthSensingMesh();ue!==null&&Cc(ue,k,-1/0,_.sortObjects)}Cc(E,k,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(I,Y),Ie=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ie&&Me.addToRenderList(g,E),this.info.render.frame++,j===!0&&We.beginShadows();const G=m.state.shadowsArray;le.render(G,E,k),j===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,z=g.transmissive;if(m.setupLights(),k.isArrayCamera){const ue=k.cameras;if(z.length>0)for(let ve=0,Ae=ue.length;ve<Ae;ve++){const Ce=ue[ve];Nh(W,z,E,Ce)}Ie&&Me.render(E);for(let ve=0,Ae=ue.length;ve<Ae;ve++){const Ce=ue[ve];Uh(g,E,Ce,Ce.viewport)}}else z.length>0&&Nh(W,z,E,k),Ie&&Me.render(E),Uh(g,E,k);T!==null&&(be.updateMultisampleRenderTarget(T),be.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(_,E,k),Ye.resetDefaultState(),D=-1,w=null,v.pop(),v.length>0?(m=v[v.length-1],j===!0&&We.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function Cc(E,k,G,W){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Pe.intersectsSprite(E)){W&&Re.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);const ve=oe.update(E),Ae=E.material;Ae.visible&&g.push(E,ve,Ae,G,Re.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Pe.intersectsObject(E))){const ve=oe.update(E),Ae=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Re.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Re.copy(ve.boundingSphere.center)),Re.applyMatrix4(E.matrixWorld).applyMatrix4(re)),Array.isArray(Ae)){const Ce=ve.groups;for(let ke=0,ze=Ce.length;ke<ze;ke++){const Ne=Ce[ke],et=Ae[Ne.materialIndex];et&&et.visible&&g.push(E,ve,et,G,Re.z,Ne)}}else Ae.visible&&g.push(E,ve,Ae,G,Re.z,null)}}const ue=E.children;for(let ve=0,Ae=ue.length;ve<Ae;ve++)Cc(ue[ve],k,G,W)}function Uh(E,k,G,W){const z=E.opaque,ue=E.transmissive,ve=E.transparent;m.setupLightsView(G),j===!0&&We.setGlobalState(_.clippingPlanes,G),W&&ae.viewport(y.copy(W)),z.length>0&&ca(z,k,G),ue.length>0&&ca(ue,k,G),ve.length>0&&ca(ve,k,G),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Nh(E,k,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new kr(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float")?oa:Ti,minFilter:Ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ue=m.state.transmissionRenderTarget[W.id],ve=W.viewport||y;ue.setSize(ve.z,ve.w);const Ae=_.getRenderTarget();_.setRenderTarget(ue),_.getClearColor(B),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),Ie&&Me.render(G);const Ce=_.toneMapping;_.toneMapping=Qi;const ke=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),j===!0&&We.setGlobalState(_.clippingPlanes,W),ca(E,G,W),be.updateMultisampleRenderTarget(ue),be.updateRenderTargetMipmap(ue),_e.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ne=0,et=k.length;Ne<et;Ne++){const _t=k[Ne],xt=_t.object,un=_t.geometry,tt=_t.material,Le=_t.group;if(tt.side===mi&&xt.layers.test(W.layers)){const Ft=tt.side;tt.side=ln,tt.needsUpdate=!0,Fh(xt,G,W,un,tt,Le),tt.side=Ft,tt.needsUpdate=!0,ze=!0}}ze===!0&&(be.updateMultisampleRenderTarget(ue),be.updateRenderTargetMipmap(ue))}_.setRenderTarget(Ae),_.setClearColor(B,q),ke!==void 0&&(W.viewport=ke),_.toneMapping=Ce}function ca(E,k,G){const W=k.isScene===!0?k.overrideMaterial:null;for(let z=0,ue=E.length;z<ue;z++){const ve=E[z],Ae=ve.object,Ce=ve.geometry,ke=W===null?ve.material:W,ze=ve.group;Ae.layers.test(G.layers)&&Fh(Ae,k,G,Ce,ke,ze)}}function Fh(E,k,G,W,z,ue){E.onBeforeRender(_,k,G,W,z,ue),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.transparent===!0&&z.side===mi&&z.forceSinglePass===!1?(z.side=ln,z.needsUpdate=!0,_.renderBufferDirect(G,k,W,z,E,ue),z.side=nr,z.needsUpdate=!0,_.renderBufferDirect(G,k,W,z,E,ue),z.side=mi):_.renderBufferDirect(G,k,W,z,E,ue),E.onAfterRender(_,k,G,W,z,ue)}function ua(E,k,G){k.isScene!==!0&&(k=Te);const W=xe.get(E),z=m.state.lights,ue=m.state.shadowsArray,ve=z.state.version,Ae=te.getParameters(E,z.state,ue,k,G),Ce=te.getProgramCacheKey(Ae);let ke=W.programs;W.environment=E.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(E.isMeshStandardMaterial?S:P).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",Fe),ke=new Map,W.programs=ke);let ze=ke.get(Ce);if(ze!==void 0){if(W.currentProgram===ze&&W.lightsStateVersion===ve)return zh(E,Ae),ze}else Ae.uniforms=te.getUniforms(E),E.onBeforeCompile(Ae,_),ze=te.acquireProgram(Ae,Ce),ke.set(Ce,ze),W.uniforms=Ae.uniforms;const Ne=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ne.clippingPlanes=We.uniform),zh(E,Ae),W.needsLights=f_(E),W.lightsStateVersion=ve,W.needsLights&&(Ne.ambientLightColor.value=z.state.ambient,Ne.lightProbe.value=z.state.probe,Ne.directionalLights.value=z.state.directional,Ne.directionalLightShadows.value=z.state.directionalShadow,Ne.spotLights.value=z.state.spot,Ne.spotLightShadows.value=z.state.spotShadow,Ne.rectAreaLights.value=z.state.rectArea,Ne.ltc_1.value=z.state.rectAreaLTC1,Ne.ltc_2.value=z.state.rectAreaLTC2,Ne.pointLights.value=z.state.point,Ne.pointLightShadows.value=z.state.pointShadow,Ne.hemisphereLights.value=z.state.hemi,Ne.directionalShadowMap.value=z.state.directionalShadowMap,Ne.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ne.spotShadowMap.value=z.state.spotShadowMap,Ne.spotLightMatrix.value=z.state.spotLightMatrix,Ne.spotLightMap.value=z.state.spotLightMap,Ne.pointShadowMap.value=z.state.pointShadowMap,Ne.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=ze,W.uniformsList=null,ze}function kh(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Ml.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function zh(E,k){const G=xe.get(E);G.outputColorSpace=k.outputColorSpace,G.batching=k.batching,G.batchingColor=k.batchingColor,G.instancing=k.instancing,G.instancingColor=k.instancingColor,G.instancingMorph=k.instancingMorph,G.skinning=k.skinning,G.morphTargets=k.morphTargets,G.morphNormals=k.morphNormals,G.morphColors=k.morphColors,G.morphTargetsCount=k.morphTargetsCount,G.numClippingPlanes=k.numClippingPlanes,G.numIntersection=k.numClipIntersection,G.vertexAlphas=k.vertexAlphas,G.vertexTangents=k.vertexTangents,G.toneMapping=k.toneMapping}function u_(E,k,G,W,z){k.isScene!==!0&&(k=Te),be.resetTextureUnits();const ue=k.fog,ve=W.isMeshStandardMaterial?k.environment:null,Ae=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:lr,Ce=(W.isMeshStandardMaterial?S:P).get(W.envMap||ve),ke=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ne=!!G.morphAttributes.position,et=!!G.morphAttributes.normal,_t=!!G.morphAttributes.color;let xt=Qi;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(xt=_.toneMapping);const un=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,tt=un!==void 0?un.length:0,Le=xe.get(W),Ft=m.state.lights;if(j===!0&&(ne===!0||E!==w)){const Mn=E===w&&W.id===D;We.setState(W,E,Mn)}let nt=!1;W.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Ft.state.version||Le.outputColorSpace!==Ae||z.isBatchedMesh&&Le.batching===!1||!z.isBatchedMesh&&Le.batching===!0||z.isBatchedMesh&&Le.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Le.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Le.instancing===!1||!z.isInstancedMesh&&Le.instancing===!0||z.isSkinnedMesh&&Le.skinning===!1||!z.isSkinnedMesh&&Le.skinning===!0||z.isInstancedMesh&&Le.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Le.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Le.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Le.instancingMorph===!1&&z.morphTexture!==null||Le.envMap!==Ce||W.fog===!0&&Le.fog!==ue||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==We.numPlanes||Le.numIntersection!==We.numIntersection)||Le.vertexAlphas!==ke||Le.vertexTangents!==ze||Le.morphTargets!==Ne||Le.morphNormals!==et||Le.morphColors!==_t||Le.toneMapping!==xt||Le.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Le.__version=W.version);let Un=Le.currentProgram;nt===!0&&(Un=ua(W,k,z));let Hr=!1,dn=!1,Rc=!1;const Et=Un.getUniforms(),Ci=Le.uniforms;if(ae.useProgram(Un.program)&&(Hr=!0,dn=!0,Rc=!0),W.id!==D&&(D=W.id,dn=!0),Hr||w!==E){Et.setValue(C,"projectionMatrix",E.projectionMatrix),Et.setValue(C,"viewMatrix",E.matrixWorldInverse);const Mn=Et.map.cameraPosition;Mn!==void 0&&Mn.setValue(C,Q.setFromMatrixPosition(E.matrixWorld)),fe.logarithmicDepthBuffer&&Et.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Et.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,dn=!0,Rc=!0)}if(z.isSkinnedMesh){Et.setOptional(C,z,"bindMatrix"),Et.setOptional(C,z,"bindMatrixInverse");const Mn=z.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Et.setValue(C,"boneTexture",Mn.boneTexture,be))}z.isBatchedMesh&&(Et.setOptional(C,z,"batchingTexture"),Et.setValue(C,"batchingTexture",z._matricesTexture,be),Et.setOptional(C,z,"batchingIdTexture"),Et.setValue(C,"batchingIdTexture",z._indirectTexture,be),Et.setOptional(C,z,"batchingColorTexture"),z._colorsTexture!==null&&Et.setValue(C,"batchingColorTexture",z._colorsTexture,be));const bc=G.morphAttributes;if((bc.position!==void 0||bc.normal!==void 0||bc.color!==void 0)&&qe.update(z,G,Un),(dn||Le.receiveShadow!==z.receiveShadow)&&(Le.receiveShadow=z.receiveShadow,Et.setValue(C,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ci.envMap.value=Ce,Ci.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(Ci.envMapIntensity.value=k.environmentIntensity),dn&&(Et.setValue(C,"toneMappingExposure",_.toneMappingExposure),Le.needsLights&&d_(Ci,Rc),ue&&W.fog===!0&&De.refreshFogUniforms(Ci,ue),De.refreshMaterialUniforms(Ci,W,$,X,m.state.transmissionRenderTarget[E.id]),Ml.upload(C,kh(Le),Ci,be)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ml.upload(C,kh(Le),Ci,be),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Et.setValue(C,"center",z.center),Et.setValue(C,"modelViewMatrix",z.modelViewMatrix),Et.setValue(C,"normalMatrix",z.normalMatrix),Et.setValue(C,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Mn=W.uniformsGroups;for(let Pc=0,h_=Mn.length;Pc<h_;Pc++){const Oh=Mn[Pc];pt.update(Oh,Un),pt.bind(Oh,Un)}}return Un}function d_(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function f_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,k,G){xe.get(E.texture).__webglTexture=k,xe.get(E.depthTexture).__webglTexture=G;const W=xe.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const G=xe.get(E);G.__webglFramebuffer=k,G.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,G=0){T=E,L=k,A=G;let W=!0,z=null,ue=!1,ve=!1;if(E){const Ce=xe.get(E);Ce.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(C.FRAMEBUFFER,null),W=!1):Ce.__webglFramebuffer===void 0?be.setupRenderTarget(E):Ce.__hasExternalTextures&&be.rebindTextures(E,xe.get(E.texture).__webglTexture,xe.get(E.depthTexture).__webglTexture);const ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ve=!0);const ze=xe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[k])?z=ze[k][G]:z=ze[k],ue=!0):E.samples>0&&be.useMultisampledRTT(E)===!1?z=xe.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?z=ze[G]:z=ze,y.copy(E.viewport),U.copy(E.scissor),V=E.scissorTest}else y.copy(K).multiplyScalar($).floor(),U.copy(Z).multiplyScalar($).floor(),V=de;if(ae.bindFramebuffer(C.FRAMEBUFFER,z)&&W&&ae.drawBuffers(E,z),ae.viewport(y),ae.scissor(U),ae.setScissorTest(V),ue){const Ce=xe.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ce.__webglTexture,G)}else if(ve){const Ce=xe.get(E.texture),ke=k||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ce.__webglTexture,G||0,ke)}D=-1},this.readRenderTargetPixels=function(E,k,G,W,z,ue,ve){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae){ae.bindFramebuffer(C.FRAMEBUFFER,Ae);try{const Ce=E.texture,ke=Ce.format,ze=Ce.type;if(!fe.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-W&&G>=0&&G<=E.height-z&&C.readPixels(k,G,W,z,Be.convert(ke),Be.convert(ze),ue)}finally{const Ce=T!==null?xe.get(T).__webglFramebuffer:null;ae.bindFramebuffer(C.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(E,k,G,W,z,ue,ve){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae){ae.bindFramebuffer(C.FRAMEBUFFER,Ae);try{const Ce=E.texture,ke=Ce.format,ze=Ce.type;if(!fe.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-W&&G>=0&&G<=E.height-z){const Ne=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ne),C.bufferData(C.PIXEL_PACK_BUFFER,ue.byteLength,C.STREAM_READ),C.readPixels(k,G,W,z,Be.convert(ke),Be.convert(ze),0),C.flush();const et=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await FS(C,et,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,Ne),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ue)}finally{C.deleteBuffer(Ne),C.deleteSync(et)}return ue}}finally{const Ce=T!==null?xe.get(T).__webglFramebuffer:null;ae.bindFramebuffer(C.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(E,k=null,G=0){E.isTexture!==!0&&(Is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-G),z=Math.floor(E.image.width*W),ue=Math.floor(E.image.height*W),ve=k!==null?k.x:0,Ae=k!==null?k.y:0;be.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,ve,Ae,z,ue),ae.unbindTexture()},this.copyTextureToTexture=function(E,k,G=null,W=null,z=0){E.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],k=arguments[2],z=arguments[3]||0,G=null);let ue,ve,Ae,Ce,ke,ze;G!==null?(ue=G.max.x-G.min.x,ve=G.max.y-G.min.y,Ae=G.min.x,Ce=G.min.y):(ue=E.image.width,ve=E.image.height,Ae=0,Ce=0),W!==null?(ke=W.x,ze=W.y):(ke=0,ze=0);const Ne=Be.convert(k.format),et=Be.convert(k.type);be.setTexture2D(k,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment);const _t=C.getParameter(C.UNPACK_ROW_LENGTH),xt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),un=C.getParameter(C.UNPACK_SKIP_PIXELS),tt=C.getParameter(C.UNPACK_SKIP_ROWS),Le=C.getParameter(C.UNPACK_SKIP_IMAGES),Ft=E.isCompressedTexture?E.mipmaps[z]:E.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Ft.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ft.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ae),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ce),E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,z,ke,ze,ue,ve,Ne,et,Ft.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,z,ke,ze,Ft.width,Ft.height,Ne,Ft.data):C.texSubImage2D(C.TEXTURE_2D,z,ke,ze,ue,ve,Ne,et,Ft),C.pixelStorei(C.UNPACK_ROW_LENGTH,_t),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,un),C.pixelStorei(C.UNPACK_SKIP_ROWS,tt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Le),z===0&&k.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),ae.unbindTexture()},this.copyTextureToTexture3D=function(E,k,G=null,W=null,z=0){E.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,E=arguments[2],k=arguments[3],z=arguments[4]||0);let ue,ve,Ae,Ce,ke,ze,Ne,et,_t;const xt=E.isCompressedTexture?E.mipmaps[z]:E.image;G!==null?(ue=G.max.x-G.min.x,ve=G.max.y-G.min.y,Ae=G.max.z-G.min.z,Ce=G.min.x,ke=G.min.y,ze=G.min.z):(ue=xt.width,ve=xt.height,Ae=xt.depth,Ce=0,ke=0,ze=0),W!==null?(Ne=W.x,et=W.y,_t=W.z):(Ne=0,et=0,_t=0);const un=Be.convert(k.format),tt=Be.convert(k.type);let Le;if(k.isData3DTexture)be.setTexture3D(k,0),Le=C.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)be.setTexture2DArray(k,0),Le=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment);const Ft=C.getParameter(C.UNPACK_ROW_LENGTH),nt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Un=C.getParameter(C.UNPACK_SKIP_PIXELS),Hr=C.getParameter(C.UNPACK_SKIP_ROWS),dn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,xt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ce),C.pixelStorei(C.UNPACK_SKIP_ROWS,ke),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ze),E.isDataTexture||E.isData3DTexture?C.texSubImage3D(Le,z,Ne,et,_t,ue,ve,Ae,un,tt,xt.data):k.isCompressedArrayTexture?C.compressedTexSubImage3D(Le,z,Ne,et,_t,ue,ve,Ae,un,xt.data):C.texSubImage3D(Le,z,Ne,et,_t,ue,ve,Ae,un,tt,xt),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ft),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,nt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Un),C.pixelStorei(C.UNPACK_SKIP_ROWS,Hr),C.pixelStorei(C.UNPACK_SKIP_IMAGES,dn),z===0&&k.generateMipmaps&&C.generateMipmap(Le),ae.unbindTexture()},this.initRenderTarget=function(E){xe.get(E).__webglFramebuffer===void 0&&be.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?be.setTextureCube(E,0):E.isData3DTexture?be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?be.setTexture2DArray(E,0):be.setTexture2D(E,0),ae.unbindTexture()},this.resetState=function(){L=0,A=0,T=null,ae.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===wh?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===Ec?"display-p3":"srgb"}}class bh{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=n,this.far=i}clone(){return new bh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jT extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class YT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=gf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Is("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new b;class Jl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix4(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.applyNormalMatrix(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.transformDirection(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=st(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ti(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ti(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ti(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ti(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Yn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Jl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Jv extends Br{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let os;const fo=new b,as=new b,ls=new b,cs=new He,ho=new He,e_=new ft,Ka=new b,po=new b,Za=new b,Wm=new He,Lu=new He,Xm=new He;class t_ extends Ut{constructor(e=new Jv){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new cn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new YT(n,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new Jl(i,3,0,!1)),os.setAttribute("uv",new Jl(i,2,3,!1))}this.geometry=os,this.material=e,this.center=new He(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),e_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-ls.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Qa(Ka.set(-.5,-.5,0),ls,o,as,r,s),Qa(po.set(.5,-.5,0),ls,o,as,r,s),Qa(Za.set(.5,.5,0),ls,o,as,r,s),Wm.set(0,0),Lu.set(1,0),Xm.set(1,1);let a=e.ray.intersectTriangle(Ka,po,Za,!1,fo);if(a===null&&(Qa(po.set(-.5,.5,0),ls,o,as,r,s),Lu.set(0,1),a=e.ray.intersectTriangle(Ka,Za,po,!1,fo),a===null))return;const l=e.ray.origin.distanceTo(fo);l<e.near||l>e.far||n.push({distance:l,point:fo.clone(),uv:Gn.getInterpolation(fo,Ka,po,Za,Wm,Lu,Xm,new He),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Qa(t,e,n,i,r,s){cs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ho.x=s*cs.x-r*cs.y,ho.y=r*cs.x+s*cs.y):ho.copy(cs),t.copy(e),t.x+=ho.x,t.y+=ho.y,t.applyMatrix4(e_)}class Ph extends Br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ec=new b,tc=new b,jm=new ft,mo=new Th,Ja=new wc,Du=new b,Ym=new b;class Lh extends Ut{constructor(e=new cn,n=new Ph){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ec.fromBufferAttribute(n,r-1),tc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ec.distanceTo(tc);e.setAttribute("lineDistance",new At(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(r),Ja.radius+=s,e.ray.intersectsSphere(Ja)===!1)return;jm.copy(r).invert(),mo.copy(e.ray).applyMatrix4(jm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let g=p,m=x-1;g<m;g+=c){const u=f.getX(g),v=f.getX(g+1),_=el(this,e,mo,l,u,v);_&&n.push(_)}if(this.isLineLoop){const g=f.getX(x-1),m=f.getX(p),u=el(this,e,mo,l,g,m);u&&n.push(u)}}else{const p=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let g=p,m=x-1;g<m;g+=c){const u=el(this,e,mo,l,g,g+1);u&&n.push(u)}if(this.isLineLoop){const g=el(this,e,mo,l,x-1,p);g&&n.push(g)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function el(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(ec.fromBufferAttribute(o,r),tc.fromBufferAttribute(o,s),n.distanceSqToSegment(ec,tc,Du,Ym)>i)return;Du.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Du);if(!(l<e.near||l>e.far))return{distance:l,point:Ym.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const $m=new b,qm=new b;class $T extends Lh{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)$m.fromBufferAttribute(n,r),qm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+$m.distanceTo(qm);e.setAttribute("lineDistance",new At(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qT extends Kt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nc extends cn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],h=[],p=[];let x=0;const g=[],m=i/2;let u=0;v(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(f),this.setAttribute("position",new At(d,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(p,2));function v(){const M=new b,L=new b;let A=0;const T=(n-e)/i;for(let D=0;D<=s;D++){const w=[],y=D/s,U=y*(n-e)+e;for(let V=0;V<=r;V++){const B=V/r,q=B*l+a,N=Math.sin(q),X=Math.cos(q);L.x=U*N,L.y=-y*i+m,L.z=U*X,d.push(L.x,L.y,L.z),M.set(N,T,X).normalize(),h.push(M.x,M.y,M.z),p.push(B,1-y),w.push(x++)}g.push(w)}for(let D=0;D<r;D++)for(let w=0;w<s;w++){const y=g[w][D],U=g[w+1][D],V=g[w+1][D+1],B=g[w][D+1];f.push(y,U,B),f.push(U,V,B),A+=6}c.addGroup(u,A,0),u+=A}function _(M){const L=x,A=new He,T=new b;let D=0;const w=M===!0?e:n,y=M===!0?1:-1;for(let V=1;V<=r;V++)d.push(0,m*y,0),h.push(0,y,0),p.push(.5,.5),x++;const U=x;for(let V=0;V<=r;V++){const q=V/r*l+a,N=Math.cos(q),X=Math.sin(q);T.x=w*X,T.y=m*y,T.z=w*N,d.push(T.x,T.y,T.z),h.push(0,y,0),A.x=N*.5+.5,A.y=X*.5*y+.5,p.push(A.x,A.y),x++}for(let V=0;V<r;V++){const B=L+V,q=U+V;M===!0?f.push(q,q+1,B):f.push(q+1,q,B),D+=3}c.addGroup(u,D,M===!0?1:2),u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tn extends cn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new b,h=new b,p=[],x=[],g=[],m=[];for(let u=0;u<=i;u++){const v=[],_=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let L=0;L<=n;L++){const A=L/n;d.x=-e*Math.cos(r+A*s)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+_*a),x.push(d.x,d.y,d.z),h.copy(d).normalize(),g.push(h.x,h.y,h.z),m.push(A+M,1-_),v.push(c++)}f.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const _=f[u][v+1],M=f[u][v],L=f[u+1][v],A=f[u+1][v+1];(u!==0||o>0)&&p.push(_,M,A),(u!==i-1||l<Math.PI)&&p.push(M,L,A)}this.setIndex(p),this.setAttribute("position",new At(x,3)),this.setAttribute("normal",new At(g,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qo extends cn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new b,d=new b,h=new b;for(let p=0;p<=i;p++)for(let x=0;x<=r;x++){const g=x/r*s,m=p/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(g),d.y=(e+n*Math.cos(m))*Math.sin(g),d.z=n*Math.sin(m),a.push(d.x,d.y,d.z),f.x=e*Math.cos(g),f.y=e*Math.sin(g),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),c.push(x/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let x=1;x<=r;x++){const g=(r+1)*p+x-1,m=(r+1)*(p-1)+x-1,u=(r+1)*(p-1)+x,v=(r+1)*p+x;o.push(g,m,v),o.push(m,u,v)}this.setIndex(o),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Jt extends Br{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ve(16777215),this.specular=new Ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nv,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dh extends Ut{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Iu=new ft,Km=new b,Zm=new b;class n_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ch,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Km.setFromMatrixPosition(e.matrixWorld),n.position.copy(Km),Zm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Zm),n.updateMatrixWorld(),Iu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Iu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qm=new ft,go=new b,Uu=new b;class KT extends n_{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),go.setFromMatrixPosition(e.matrixWorld),i.position.copy(go),Uu.copy(i.position),Uu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Uu),i.updateMatrixWorld(),r.makeTranslation(-go.x,-go.y,-go.z),Qm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qm)}}class Jm extends Dh{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new KT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ZT extends n_{constructor(){super(new Yv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class QT extends Dh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new ZT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class JT extends Dh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const eg=new ft;class eA{constructor(e,n,i=0,r=1/0){this.ray=new Th(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Ah,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return eg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eg),this}intersectObject(e,n=!0,i=[]){return xf(e,this,i,n),i.sort(tg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)xf(e[r],this,i,n);return i.sort(tg),i}}function tg(t,e){return t.distance-e.distance}function xf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)xf(s[o],e,n,!0)}}class tA extends $T{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ve(i),r=new Ve(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,p=0,x=-a;h<=n;h++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const g=h===s?i:r;g.toArray(c,p),p+=3,g.toArray(c,p),p+=3,g.toArray(c,p),p+=3,g.toArray(c,p),p+=3}const f=new cn;f.setAttribute("position",new At(l,3)),f.setAttribute("color",new At(c,3));const d=new Ph({vertexColors:!0,toneMapped:!1});super(f,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gh);const nA=[{id:0,title:"以太坊概述与去中心化理念",content:'以太坊是一个去中心化的开源区块链平台，支持智能合约和去中心化应用（DApp）。与比特币不同，以太坊不仅是数字货币，更是一个可编程的分布式计算平台。其愿景是构建"世界计算机"，让任何人都能部署和运行不受审查的应用程序。'},{id:1,title:"账户模型与交易结构",content:"以太坊采用账户模型（Account Model）而非UTXO。每个账户包含余额（balance）、nonce（交易计数器）、storageRoot（存储根）和codeHash（代码哈希）。交易（Transaction）包含：nonce、gasPrice、gasLimit、to（接收方）、value（转账金额）、data（附加数据）、v/r/s（ECDSA签名）。"},{id:2,title:"区块结构：Header 与 Body",content:"以太坊区块由区块头（Header）和区块体（Body）两部分组成。区块头携带三棵树的根哈希：stateRoot（状态树根）、transactionsRoot（交易树根）、receiptsRoot（收据树根），以及 parentHash、ommersHash、beneficiary（出块者）、difficulty、number、gasLimit、gasUsed、timestamp、extraData、mixHash、nonce、baseFeePerGas 等字段。区块体包含交易列表（Transactions）和叔块列表（Ommers）。"},{id:3,title:"共识机制（PoW 与 PoS）",content:"PoW（工作量证明）：矿工不断尝试 nonce 值，使区块哈希小于目标难度，通过哈希碰撞竞争出块权。PoS（权益证明）：验证者质押 32 ETH 成为验证者，随机被选为区块提议者（Proposer），其余验证者进行 attestation（证明）投票确认区块有效性。两种机制都以最长/最重链为有效链，保证全网账本一致。"},{id:4,title:"智能合约与 EVM",content:"智能合约是部署在区块链上的可执行代码，由EVM（以太坊虚拟机）执行。EVM是图灵完备的栈式虚拟机，执行字节码（Bytecode）并收取Gas费用。合约调用会触发状态转换函数，改变世界状态（World State），并把新状态写回状态树与存储树。"},{id:5,title:"Gas 与费用市场",content:"Gas是执行操作所需的计算资源计量单位。EIP-1559后，交易费用 = baseFee（销毁）+ priorityFee（给矿工/验证者）。Gas Price由网络拥堵程度决定，复杂操作（如存储写入）消耗更多Gas。"},{id:6,title:"四棵树：状态 / 交易 / 收据 / 存储",content:"以太坊用 Modified Merkle Patricia Trie（MPT）维护四棵关键树：① 状态树（State Trie）——映射地址到账户状态，根哈希 stateRoot；② 交易树（Transaction Trie）——记录区块内所有交易，根哈希 transactionsRoot；③ 收据树（Receipt Trie）——记录交易执行回执与日志，根哈希 receiptsRoot；④ 存储树（Storage Trie）——记录每个合约账户的存储槽，根哈希 storageRoot。前三棵树的根哈希写入区块头，存储树根写入账户状态，四棵树共同保证全链数据可验证。"},{id:7,title:"去中心化应用生态",content:"DApp通过Web3.js/ethers.js等库与链交互。用户通过钱包（如MetaMask）签名交易。DeFi（去中心化金融）、NFT（非同质化代币）、DAO（去中心化自治组织）等构成了丰富的以太坊生态系统。"}],ng={0:{scene:"overview",bullets:["去中心化 P2P 网络：无中心服务器，节点彼此对等互联","每个全节点保存完整账本副本，共同维护一致状态","“世界计算机”：可编程的分布式计算平台"]},1:{scene:"account",bullets:["外部账户 EOA：由私钥控制，codeHash / storageRoot 为空","合约账户：由代码控制，含 codeHash 与 storageRoot","账户四要素：nonce、balance、storageRoot、codeHash","交易字段：nonce、gasPrice、gasLimit、to、value、data、v/r/s"]},2:{scene:"block",bullets:["区块 = 区块头 Header + 区块体 Body","Header 携带三棵树根：stateRoot / transactionsRoot / receiptsRoot","Body 承载交易列表与叔块列表","parentHash 把区块串成不可篡改的链"]},3:{scene:"consensus",bullets:["PoW：矿工不断试 nonce 做哈希碰撞，竞争出块权","PoS：验证者质押 32 ETH，随机成为区块提议者","其余节点验证/证明（attestation）后确认区块","最长（最重）链原则保证全网账本一致"]},4:{scene:"contract",bullets:["智能合约是部署在链上的可执行代码，由 EVM 执行","EVM 是图灵完备的栈式虚拟机，按字节码逐条计费","调用流程：交易 → EVM 加载字节码 → 执行 → 写回状态","状态变更写回状态树与存储树"]},5:{scene:"gas",bullets:["Gas 是计算资源的计量单位，复杂操作消耗更多 Gas","EIP-1559：总费用 = baseFee（销毁）+ priorityFee（小费）","maxFeePerGas = baseFee + priorityFee 上限","区块 gasLimit 30M，拥堵时 baseFee 自动上调"]},6:{scene:"trees",bullets:["状态树：地址 → 账户状态（stateRoot）","交易树：区块内交易索引（transactionsRoot）","收据树：执行回执与日志（receiptsRoot）","存储树：合约存储槽（storageRoot，写入账户状态）"]},7:{scene:"dapp",bullets:["用户通过钱包（MetaMask）签名交易","Web3.js / ethers.js 经 JSON-RPC 与节点交互","DApp 调用合约，合约由 EVM 执行","DeFi / NFT / DAO / 社交构成应用生态"]}},iA=nA.map(t=>({...t,scene:ng[t.id].scene,bullets:ng[t.id].bullets})),rA={overview:{rx:1,ry:0,zoom:.62},account:{rx:1.05,ry:0,zoom:.85},block:{rx:1.2,ry:.6,zoom:1},consensus:{rx:1.15,ry:.9,zoom:.75},contract:{rx:1.1,ry:.35,zoom:.95},gas:{rx:1.15,ry:.25,zoom:.9},trees:{rx:.95,ry:.8,zoom:.7},dapp:{rx:.86,ry:.5,zoom:.7}},sA={overview:"第 1 章 · 以太坊概述与去中心化理念",account:"第 2 章 · 账户模型与交易结构",block:"第 3 章 · 区块结构 Header 与 Body",consensus:"第 4 章 · 共识机制 PoW 与 PoS",contract:"第 5 章 · 智能合约与 EVM",gas:"第 6 章 · Gas 与费用市场",trees:"第 7 章 · 四棵树 状态 / 交易 / 收据 / 存储",dapp:"第 8 章 · 去中心化应用生态"},ig={title:"外部账户 EOA",fields:[["address","0x71C7…9F3a"],["nonce","27"],["balance","3.4821 ETH"],["storageRoot","空 (无存储)"],["codeHash","空 (无代码)"]]},rg={title:"合约账户 Contract",fields:[["address","0xA0b8…4e21"],["nonce","1"],["balance","128.5000 ETH"],["storageRoot","0x9f3c…c71d"],["codeHash","0x4e77…8ab3 (有代码)"]]},sg={title:"交易 Transaction",fields:[["nonce","27"],["gasPrice","18.5 gwei"],["gasLimit","21000"],["to","0xA0b8…4e21"],["value","0.5 ETH"],["data","0xa9059cbb…"],["v / r / s","签名 (ECDSA)"]]},Ni={gasLimit:3e7,gasUsed:214e5,baseFee:24.6,priorityFee:2},og=[{y:20,color:"#06b6d4",label:"用户 / 钱包：MetaMask 签名交易"},{y:12,color:"#8b5cf6",label:"DApp 层：DeFi · NFT · DAO · Social"},{y:4,color:"#3b82f6",label:"Web3.js / ethers.js · JSON-RPC"},{y:-4,color:"#ec4899",label:"智能合约层：ERC20 / ERC721 / 业务合约"},{y:-12,color:"#f59e0b",label:"EVM / 以太坊网络：共识与账本"}],Nu=12,Jo=[{type:"state",name:"状态树 State Trie",shortName:"State Trie",color:"#10b981",rootField:"stateRoot",location:"区块头",desc:"地址 → 账户状态（余额/nonce/codeHash/storageRoot）"},{type:"transaction",name:"交易树 Transaction Trie",shortName:"Transaction Trie",color:"#3b82f6",rootField:"transactionsRoot",location:"区块头",desc:"区块体内所有交易的哈希索引"},{type:"receipt",name:"收据树 Receipt Trie",shortName:"Receipt Trie",color:"#f59e0b",rootField:"receiptsRoot",location:"区块头",desc:"每笔交易的执行回执、Gas 与日志"},{type:"storage",name:"存储树 Storage Trie",shortName:"Storage Trie",color:"#8b5cf6",rootField:"storageRoot",location:"账户状态",desc:"合约账户的键值存储槽（storage slot）"}],Ue={block:"#3b82f6",blockGenesis:"#64748b",header:"#f59e0b",body:"#3b82f6",mempool:"#8b5cf6",miner:"#64748b",minerSelected:"#f59e0b",validator:"#64748b",validatorProposer:"#10b981",contract:"#ec4899",contractSelected:"#f59e0b",dapp:"#06b6d4",dappSelected:"#f59e0b",evm:"#f59e0b",txTransfer:"#3b82f6",txContractCall:"#f59e0b",txContractDeploy:"#ec4899",hashParticle:"#f59e0b",connection:"#3b82f6",background:"#eef1f6"},tl={slow:5,medium:15,fast:40},nl={pow:12,pos:4},ic=3e7,oA=20,yf=6,Sf=8;function rc(){return"0x"+Math.random().toString(16).slice(2,12)+"..."+Math.random().toString(16).slice(2,6)}function us(t=10){return"0x"+Math.random().toString(16).slice(2,2+t)}function aA(){return"0x"+Array.from({length:64},()=>Math.floor(Math.random()*16).toString(16)).join("")}function lA(t){const e=["transfer","contract_call","contract_deploy"],n=e[Math.floor(Math.random()*e.length)];return{id:Math.random().toString(36).slice(2,12),type:n,from:rc(),to:rc(),value:n==="transfer"?Math.random()*10:0,gasPrice:Math.max(1,t+(Math.random()-.5)*20),gasLimit:Math.floor(Math.random()*1e5)+21e3,nonce:Math.floor(Math.random()*100),position:{x:(Math.random()-.5)*16,y:-15,z:(Math.random()-.5)*16},velocity:{x:(Math.random()-.5)*.3,y:0,z:(Math.random()-.5)*.3},life:1,status:"pending"}}function ea(t){let e="";for(let n=0;n<t;n++)e+=Math.floor(Math.random()*16).toString(16);return e}function ws(){return"0x"+ea(64)}function Fu(){return"0x"+ea(40)}function cA(t,e){switch(t){case"state":{const n=(Math.random()*800+2).toFixed(4),i=Math.floor(Math.random()*9e3)+1,r=Math.random()>.4;return{title:"账户状态 Account State",fields:[{label:"地址 address",value:Fu()},{label:"nonce",value:String(i)},{label:"balance",value:`${n} ETH`},{label:"storageRoot",value:r?"0x"+"0".repeat(64):ws()},{label:"codeHash",value:r?"0x"+"0".repeat(64):ws()}]}}case"transaction":return{title:"交易 Transaction",fields:[{label:"交易哈希 hash",value:ws()},{label:"类型 type",value:Math.random()>.5?"0x0 (Legacy)":"0x2 (EIP-1559)"},{label:"from",value:Fu()},{label:"to",value:Fu()},{label:"value",value:`${(Math.random()*5).toFixed(4)} ETH`},{label:"gasPrice",value:`${(Math.random()*60+5).toFixed(1)} gwei`}]};case"receipt":return{title:"交易收据 Receipt",fields:[{label:"状态 status",value:"1 (成功)"},{label:"cumulativeGasUsed",value:String(Math.floor(Math.random()*8e6)+21e3)},{label:"gasUsed",value:String(Math.floor(Math.random()*2e5)+21e3)},{label:"logsBloom",value:"0x"+ea(16)+"…"},{label:"logs 数量",value:String(Math.floor(Math.random()*4))}]};case"storage":{const n=Math.random()>.5;return{title:"存储槽 Storage Slot",fields:[{label:"slot 槽位",value:"0x"+"0".repeat(30)+ea(4)},{label:"value 值",value:ws()},{label:"语义 mapping",value:n?"balanceOf(持有人)":"允许额 allowance(owner, spender)"}]}}}}function i_(t,e,n,i,r,s,o){const a=Math.random().toString(36).slice(2,10),l=e===0?"root":e>=n?"leaf":"branch",c=e===0?"":ea(2),f=s+c,d=l==="root"?o:l==="branch"?`分支 ${f}`:`叶子 ${f}`;if(l==="leaf")return{id:a,hash:ws(),label:d,key:f,kind:l,content:cA(t),children:[]};const h=e===0?i:r,p=Array.from({length:h},()=>i_(t,e+1,n,i,r,f,o));return{id:a,hash:ws(),label:d,key:f,kind:l,content:null,children:p}}function il(t,e=3){const n=Jo.find(o=>o.type===t)??Jo[0],i=3,r=Math.max(2,Math.min(4,e)),s=i_(t,0,2,i,r,"",n.shortName);return{type:t,name:n.name,rootHash:s.hash,root:s}}function r_(t){const e=Math.max(2,Math.min(4,Math.ceil(t/3)+1));return{state:il("state"),transaction:il("transaction",e),receipt:il("receipt",e),storage:il("storage")}}function s_(t,e,n,i,r){return{parentHash:e,ommersHash:us(16),beneficiary:rc(),stateRoot:us(16),transactionsRoot:us(16),receiptsRoot:us(16),logsBloom:"0x"+"0".repeat(16),difficulty:Math.floor(Math.random()*1e15).toString(),number:t,gasLimit:r,gasUsed:i,timestamp:n,extraData:"0x",mixHash:us(16),nonce:"0x"+Math.floor(Math.random()*1e16).toString(16).padStart(16,"0"),baseFeePerGas:Math.floor(Math.random()*50)+10}}function o_(t,e=[]){return{transactions:t,ommers:e,txCount:t.length,ommerCount:e.length}}function uA(t,e,n,i=0,r=0){const s=Date.now(),o=i*8e4,a=Array.from({length:i},()=>aA()),l=s_(t,n,s,o,ic);return{height:t,position:{...e},txCount:i,gasUsed:o,gasLimit:ic,timestamp:s,miner:rc(),hash:us(16),parentHash:n,type:"block",selected:!1,opacity:1,scale:1,producerId:r,header:l,body:o_(a),trees:r_(i)}}function ag(){const t=Date.now(),e=s_(0,"0x0000...0000",t,0,ic);return{height:0,position:{x:0,y:0,z:0},txCount:0,gasUsed:0,gasLimit:ic,timestamp:t,miner:"0x0000...0000",hash:"0xgenesis0000",parentHash:"0x0000...0000",type:"block",selected:!1,opacity:1,scale:1,producerId:-1,header:e,body:o_([]),trees:r_(0)}}function dA(){return Array.from({length:yf},(t,e)=>{const n=e/yf*Math.PI*2;return{id:e,position:{x:Math.cos(n)*35,y:-8,z:Math.sin(n)*35},angle:n,power:Math.random()*.5+.5,hashRate:Math.random()*100+50,stake:Math.floor(Math.random()*1e3)+100,type:"miner",selected:!1,color:Ue.miner}})}function fA(){return Array.from({length:Sf},(t,e)=>{const n=e/Sf*Math.PI*2;return{id:e,position:{x:Math.cos(n)*30,y:-8,z:Math.sin(n)*30},angle:n,stake:Math.floor(Math.random()*32e3)+32e3,active:!1,type:"validator",selected:!1}})}function lg(){return[{name:"ERC20 Token",x:-25,y:5,z:15},{name:"NFT Market",x:25,y:5,z:15},{name:"DeFi Pool",x:0,y:5,z:-20},{name:"DAO Gov",x:-15,y:8,z:-10}].map((e,n)=>({id:n,name:e.name,position:{x:e.x,y:e.y,z:e.z},type:"contract",state:{balance:1e3+Math.random()*1e3,calls:0,storage:{}},selected:!1,pulse:0}))}function hA(){return[{name:"Uniswap",x:-35,y:12,z:0},{name:"OpenSea",x:35,y:12,z:0},{name:"Aave",x:0,y:12,z:30},{name:"Lens",x:0,y:12,z:-30}].map((e,n)=>({id:n,name:e.name,position:{x:e.x,y:e.y,z:e.z},type:"dapp",users:Math.floor(Math.random()*5e4)+1e4,selected:!1}))}function ku(t,e,n=1){return Array.from({length:n},()=>({position:{...t},velocity:{x:(Math.random()-.5)*3,y:(Math.random()-.5)*3,z:(Math.random()-.5)*3},color:e,size:1.5+Math.random(),life:1}))}function ni(t){return t>=1e6?`${(t/1e6).toFixed(2)}M`:t>=1e3?`${(t/1e3).toFixed(1)}k`:t.toString()}function a_(t){return new Date(t).toLocaleTimeString("zh-CN",{hour12:!1})}function sc(t){return t.toLocaleString("zh-CN")}const pA={state:new b(0,1,0),transaction:new b(1,0,0),receipt:new b(0,0,1),storage:new b(0,0,-1)};function mA(t){const e=Math.abs(t.y)>.9?new b(1,0,0):new b(0,1,0);return new b().crossVectors(t,e).normalize()}function br(t,e,n,i,r){const s=new Tn(r,16,16),o=new Jt({color:n,transparent:!0,opacity:i*.92,emissive:new Ve(n),emissiveIntensity:.25}),a=new Ke(s,o);return a.position.copy(e),t.add(a),a}function Pn(t,e,n,i,r){const s=new cn().setFromPoints([e,n]),o=new Ph({color:i,transparent:!0,opacity:r});t.add(new Lh(s,o))}function ot(t,e,n,i,r,s,o="#1f2430"){const a=document.createElement("canvas");a.width=Math.max(64,Math.round(i*48)),a.height=Math.max(32,Math.round(r*24));const l=a.getContext("2d");l.fillStyle="rgba(255,255,255,0.88)",l.strokeStyle="rgba(31,36,48,0.28)",l.lineWidth=Math.max(2,Math.round(a.height*.04));const c=Math.min(12,a.height*.3);l.beginPath(),l.moveTo(a.width-c,1),l.arcTo(1,1,1,a.height-1,c),l.arcTo(1,a.height-1,a.width-1,a.height-1,c),l.arcTo(a.width-1,a.height-1,a.width-1,1,c),l.arcTo(a.width-1,1,1,1,c),l.closePath(),l.fill(),l.stroke(),l.fillStyle=o,l.font=`bold ${Math.round(a.height*.5)}px sans-serif`,l.textAlign="center",l.textBaseline="middle",l.fillText(e,a.width/2,a.height/2);const f=new qT(a),d=new Jv({map:f,transparent:!0,opacity:s}),h=new t_(d);h.position.copy(n),h.scale.set(i,r,1),t.add(h)}function gA(t,e,n,i,r,s){const o=mA(i),a=new b().crossVectors(i,o).normalize(),l=7,c=3.6,f=3.2,d=n.clone().add(i.clone().multiplyScalar(l));br(t,d,r,s,1.6),ot(t,e.name,d.clone().add(i.clone().multiplyScalar(2.2)),11,1.6,s,r),ot(t,"根 "+e.rootHash.slice(0,8),d.clone().add(i.clone().multiplyScalar(-1.8)),9,1.1,s*.9),Pn(t,n,d,r,s*.55);const h=e.root.children,p=5.2;h.forEach((x,g)=>{const m=h.length<=1?0:(g/(h.length-1)-.5)*2,u=d.clone().add(i.clone().multiplyScalar(c)).add(o.clone().multiplyScalar(m*p));br(t,u,r,s,1.05),Pn(t,d,u,r,s*.45);const v=x.key?`${x.key} · ${x.hash.slice(2,8)}…`:`${x.hash.slice(2,8)}…`;ot(t,v,u.clone().add(new b(0,1.5,0)),6.5,1.15,s*.92);const _=x.children,M=3.4;_.forEach((L,A)=>{var U,V,B;const T=_.length<=1?0:(A/(_.length-1)-.5)*2,D=u.clone().add(i.clone().multiplyScalar(f)).add(a.clone().multiplyScalar(T*M));br(t,D,r,s,.62),Pn(t,u,D,r,s*.35);const w=((B=(V=(U=L.content)==null?void 0:U.fields)==null?void 0:V[0])==null?void 0:B.value)??"",y=w.length>16?`${w.slice(0,16)}…`:w;ot(t,`${L.key} ${y}`,D.clone().add(new b(0,1,0)),7.5,1.1,s*.9)})})}function Pr(t,e,n,i,r,s,o=15,a=1.35){const l=(n.length+1.2)*a,c=i.y+l/2;ot(t,e,new b(i.x,c,i.z),o,a*1.25,s,r),n.forEach(([f,d],h)=>{ot(t,`${f}: ${d}`,new b(i.x,c-(h+1.35)*a,i.z),o,a,s*.95)})}function zu(t,e,n,i,r,s){const o=new nn(n,i,.8),a=new Jt({color:r,transparent:!0,opacity:s*.55,emissive:new Ve(r),emissiveIntensity:.12}),l=new Ke(o,a);return l.position.copy(e),t.add(l),l}function vA(t,e,n){const r=[];for(let l=0;l<Nu;l++){const c=l/Nu*Math.PI*2,f=l%2===0?3:-5;r.push(new b(Math.cos(c)*26,f,Math.sin(c)*26))}r.forEach((l,c)=>{const f=1+Math.sin(n*2+c)*.1;br(t,l,c%3===0?Ue.dapp:Ue.block,e,1.9*f),ot(t,`节点 ${c+1}`,l.clone().add(new b(0,3.2,0)),6,1.2,e*.9)}),r.forEach((l,c)=>{[1,3,5].forEach(f=>{const d=r[(c+f)%Nu];Pn(t,l,d,Ue.connection,e*.32)})});const s=new Qo(7,.08,8,48),o=new wn({color:Ue.header,transparent:!0,opacity:e*.5}),a=new Ke(s,o);a.position.set(0,0,0),a.rotation.x=Math.PI/2,t.add(a),ot(t,"去中心化 P2P 网络 · 无中心服务器",new b(0,12,0),26,2.2,e,"#b45309"),ot(t,"每个全节点保存完整账本副本，共同维护一致状态",new b(0,8.6,0),28,1.7,e*.9),ot(t,"“世界计算机”：可编程的分布式计算平台",new b(0,-14,0),26,1.8,e*.9,"#7c3aed")}function _A(t,e,n){const i=new b(-20,2,0);zu(t,i,16,11,Ue.block,e),Pr(t,ig.title,ig.fields,new b(i.x,i.y+10,i.z),"#1d4ed8",e);const r=new b(20,2,0);zu(t,r,16,11,Ue.contract,e),Pr(t,rg.title,rg.fields,new b(r.x,r.y+10,r.z),"#be185d",e);const s=new b(0,-12,0);zu(t,s,22,13,Ue.header,e),Pr(t,sg.title,sg.fields,new b(s.x,s.y+11,s.z),"#b45309",e,18),Pn(t,new b(i.x+8,i.y,0),new b(s.x-11,s.y+4,0),Ue.header,e*.5),Pn(t,new b(s.x+11,s.y+4,0),new b(r.x-8,r.y,0),Ue.header,e*.5);const o=n%2/2,a=i.x+8+(s.x-11-(i.x+8))*o,l=i.y+(s.y+4-i.y)*o;br(t,new b(a,l,0),Ue.header,e,.7),ot(t,"账户模型 = 账户状态的世界状态树 (State Trie)",new b(0,20,0),30,2,e*.95,"#7c3aed")}function xA(t,e,n){const i=new b(e.position.x,e.position.y,e.position.z),r=[["parentHash",e.header.parentHash.slice(0,12)+"…"],["stateRoot",e.header.stateRoot.slice(0,12)+"…"],["transactionsRoot",e.header.transactionsRoot.slice(0,12)+"…"],["receiptsRoot",e.header.receiptsRoot.slice(0,12)+"…"],["beneficiary",e.header.beneficiary]],s=[["number",`#${e.header.number}`],["gasLimit",ni(e.header.gasLimit)],["gasUsed",ni(e.header.gasUsed)],["baseFeePerGas",`${e.header.baseFeePerGas} gwei`],["nonce / mixHash",e.header.nonce.slice(0,10)+"…"]];Pr(t,"区块头 Header（字段）",r,new b(i.x-19,i.y+4,i.z),"#b45309",n,20),Pr(t,"区块头 Header（字段）· 续",s,new b(i.x+19,i.y+4,i.z),"#b45309",n,20);const o=[["交易列表",`${e.body.txCount} 笔`],["叔块 Ommers",`${e.body.ommerCount} 个`]];Pr(t,"区块体 Body",o,new b(i.x,i.y-9,i.z),"#1d4ed8",n,18)}function yA(t,e,n){["① 用户发起交易","② EVM 加载字节码","③ 执行并计算 Gas","④ 写回状态树 / 存储树"].forEach((s,o)=>{const a=-33+o*22;ot(t,s,new b(a,-14,0),20,1.8,e*.95,"#be185d"),o>0&&Pn(t,new b(a-11,-14,0),new b(a-8.5,-14,0),Ue.contract,e*.6)});const r=n%3/3;br(t,new b(-33+r*66,-14,0),Ue.contract,e,.8),ot(t,"EVM：图灵完备的栈式虚拟机，逐条执行字节码并收取 Gas",new b(0,14,0),34,2,e*.95,"#b45309")}function SA(t,e,n){const i=Math.min(1,Ni.gasUsed/Ni.gasLimit),r=44,s=6,o=new nn(r,3.4,3.4),a=new Jt({color:Ue.blockGenesis,transparent:!0,opacity:e*.35}),l=new Ke(o,a);l.position.set(0,s,0),t.add(l);const c=r*i,f=new nn(c,3.4,3.6),d=new Jt({color:Ue.block,transparent:!0,opacity:e*.85}),h=new Ke(f,d);h.position.set(-r/2+c/2,s,0),t.add(h),ot(t,`gasUsed ${ni(Ni.gasUsed)} / gasLimit ${ni(Ni.gasLimit)}`,new b(0,s+3.4,0),26,2,e,"#1d4ed8");const p=s-7;Pr(t,"EIP-1559 费用构成",[["baseFee",`${Ni.baseFee} gwei → 销毁 (burn)`],["priorityFee",`${Ni.priorityFee} gwei → 出块者`],["maxFeePerGas",`${(Ni.baseFee+Ni.priorityFee).toFixed(1)} gwei 上限`]],new b(-14,p,0),"#b45309",e,26);const x=n%1.5/1.5;for(let g=0;g<4;g++){const m=(x+g*.25)%1;br(t,new b(16+g*1.6,p+2+m*14,0),Ue.header,e*(1-m),.6)}ot(t,"baseFee 销毁 (burn)",new b(19,p+18,0),18,1.8,e*.95,"#b45309"),ot(t,"拥堵时 baseFee 自动上调，抑制过量需求",new b(0,-18,0),30,1.8,e*.9,"#7c3aed")}function MA(t,e){og.forEach((n,i)=>{const r=52-Math.abs(i-2)*4,s=new nn(r,1.2,8),o=new Jt({color:n.color,transparent:!0,opacity:e*.4,emissive:new Ve(n.color),emissiveIntensity:.15}),a=new Ke(s,o);a.position.set(0,n.y,0),t.add(a),ot(t,n.label,new b(0,n.y+2.4,0),40,1.9,e,n.color==="#f59e0b"?"#b45309":n.color),i>0&&Pn(t,new b(0,n.y-.8,0),new b(0,og[i-1].y+.8,0),Ue.connection,e*.35)}),ot(t,"用户签名 → Web3 库 → 合约 → EVM → 全网上链",new b(0,26,0),34,2,e*.95,"#7c3aed")}const EA=({blocks:t,mempool:e,miners:n,validators:i,contracts:r,dapps:s,particles:o,consensus:a,showTrees:l,showBlockStructure:c,showParticles:f,globalOpacity:d,animTime:h,selectedObject:p,onObjectClick:x,scene:g})=>{const m=we.useRef(null),u=we.useRef(null),v=we.useRef(null),_=we.useRef(null),M=we.useRef(0),L=we.useRef(null),A=we.useRef({active:!1,lx:0,ly:0}),T=we.useRef({rx:.3,ry:0,zoom:1}),D=we.useRef(new eA),w=we.useRef(new He);we.useEffect(()=>{const N=m.current;if(!N)return;const X=N.clientWidth,$=N.clientHeight,I=new jT;I.background=new Ve(Ue.background),I.fog=new bh(Ue.background,60,250),u.current=I;const Y=new gn(60,X/$,.1,500);Y.position.set(0,-20,55),Y.lookAt(0,0,0),v.current=Y;const K=new XT({antialias:!0});K.setSize(X,$),K.setPixelRatio(Math.min(window.devicePixelRatio,2)),K.shadowMap.enabled=!0,K.shadowMap.type=Ev,N.appendChild(K.domElement),_.current=K,I.add(new JT(16777215,.95));const Z=new QT(16777215,.85);Z.position.set(30,50,30),Z.castShadow=!0,I.add(Z);const de=new Jm(3900150,.25,100);de.position.set(0,10,0),I.add(de);const Pe=new Jm(9133302,.2,80);Pe.position.set(0,-10,0),I.add(Pe);const j=new tA(160,40,10134450,14212839);j.position.y=-15,I.add(j);const ne=new wo;I.add(ne),L.current=ne;const re=()=>{if(!N||!Y||!K)return;const Q=N.clientWidth,Re=N.clientHeight;Y.aspect=Q/Re,Y.updateProjectionMatrix(),K.setSize(Q,Re)};return window.addEventListener("resize",re),()=>{window.removeEventListener("resize",re),cancelAnimationFrame(M.current),K.dispose(),N.contains(K.domElement)&&N.removeChild(K.domElement)}},[]),we.useEffect(()=>{var Ie;const N=L.current,X=u.current;if(!N||!X)return;for(;N.children.length>0;){const O=N.children[0];if(N.remove(O),O instanceof Ke||O instanceof Lh){O.geometry.dispose();const C=O.material;Array.isArray(C)?C.forEach(pe=>pe.dispose()):C.dispose()}else if(O instanceof t_){const C=O.material;(Ie=C.map)==null||Ie.dispose(),C.dispose()}}const $=(p==null?void 0:p.type)==="block"?p:null,I=t.length>0?t[t.length-1]:null,Y=$??I,K=g==="block"||g==="trees"||g==="consensus"||g==="gas",Z=g==="consensus"||g==="gas"||g==="block",de=g==="consensus"||g==="gas"||g==="block",Pe=g==="contract"||g==="dapp"||g==="gas",j=g==="dapp",ne=g==="dapp"||g==="contract"||g==="gas"||g==="block"||g==="consensus",re=de?n:[],Q=de?i:[];if(g==="overview"&&vA(N,d,h),g==="account"&&_A(N,d,h),g==="gas"&&SA(N,d,h),g==="dapp"&&MA(N,d),g==="contract"&&yA(N,d,h),g==="block"&&Y&&xA(N,Y,d),(K?t:[]).forEach((O,C)=>{const pe=p===O,_e=C===0,fe=pe?5:4,ae=_e?Ue.blockGenesis:Ue.header,Ge=_e?Ue.blockGenesis:Ue.body,xe=pe?4465152:0,be=pe?.35:.08,P=new nn(fe*.62,fe*.42,fe*.62),S=new Jt({color:ae,transparent:!0,opacity:d,emissive:xe,emissiveIntensity:be}),H=new Ke(P,S);H.position.set(O.position.x,O.position.y+fe*.38,O.position.z),H.castShadow=!0,H.userData={object:O,type:"block",part:"header"},N.add(H);const ie=new nn(fe,fe*.72,fe),oe=new Jt({color:Ge,transparent:!0,opacity:d,emissive:xe,emissiveIntensity:be}),te=new Ke(ie,oe);if(te.position.set(O.position.x,O.position.y-fe*.34,O.position.z),te.castShadow=!0,te.receiveShadow=!0,te.userData={object:O,type:"block",part:"body"},N.add(te),(c||pe)&&(ot(N,"Header 区块头",new b(O.position.x,O.position.y+fe*.78,O.position.z),5.5,1.1,d,ae),ot(N,"Body 区块体",new b(O.position.x,O.position.y-fe*.88,O.position.z),5.5,1.1,d,Ge)),ot(N,_e?"创世区块":`区块 #${O.height}`,new b(O.position.x,O.position.y+fe*1.1,O.position.z),_e?6:5.5,1.5,d,pe?"#b45309":"#1f2430"),C>0){const De=t[C-1],ge=new b(De.position.x,De.position.y-2,De.position.z),ye=new b(O.position.x,O.position.y-2,O.position.z);Pn(N,ge,ye,Ue.block,d*.5)}}),(g==="trees"||l&&g==="block")&&Y){const O=new b(Y.position.x,Y.position.y,Y.position.z);Jo.forEach(C=>{const pe=Y.trees[C.type],_e=pA[C.type];gA(N,pe,O,_e,C.color,d)})}if(Z){const O=new nc(6,6,3,32),C=new Jt({color:Ue.mempool,transparent:!0,opacity:d*.4}),pe=new Ke(O,C);pe.position.set(0,-15,0),N.add(pe);const _e=new nc(6,6,3,32),fe=new wn({color:Ue.mempool,transparent:!0,opacity:d*.6,wireframe:!0}),ae=new Ke(_e,fe);ae.position.set(0,-15,0),N.add(ae),ot(N,`交易池 Mempool (${e.length})`,new b(0,-12,0),11,1.7,d)}(Z?e:[]).forEach(O=>{const C=O.type==="transfer"?Ue.txTransfer:O.type==="contract_call"?Ue.txContractCall:Ue.txContractDeploy,pe=new Tn(.4,8,8),_e=new Jt({color:C,transparent:!0,opacity:d*.8}),fe=new Ke(pe,_e);fe.position.set(O.position.x,O.position.y,O.position.z),N.add(fe)});const Re=(I==null?void 0:I.producerId)??-1;if(a==="pow"?re.forEach(O=>{const C=p===O,pe=O.id===Re,_e=C||pe?Ue.minerSelected:Ue.miner,fe=pe?1.3:1,ae=new nn(3*fe,3*fe,3*fe),Ge=new Jt({color:_e,transparent:!0,opacity:d,emissive:pe?4465152:0,emissiveIntensity:pe?.5:0}),xe=new Ke(ae,Ge);if(xe.position.set(O.position.x,O.position.y,O.position.z),xe.castShadow=!0,xe.userData={object:O,type:"miner"},N.add(xe),f)for(let be=0;be<3;be++){const P=new nn(.3,.3,.3),S=new wn({color:Ue.hashParticle,transparent:!0,opacity:Math.random()*.5*d}),H=new Ke(P,S);H.position.set(O.position.x+(Math.random()-.5)*6,O.position.y+Math.random()*4,O.position.z+(Math.random()-.5)*6),N.add(H)}ot(N,pe?`矿工${O.id} ⛏ 出块`:`矿工${O.id}`,new b(O.position.x,O.position.y+(pe?3.2:2.5),O.position.z),6,1.5,d,pe?"#b45309":"#1f2430")}):Q.forEach((O,C)=>{const pe=p===O,_e=C===0,fe=O.id===Re,ae=_e||fe?Ue.validatorProposer:pe?Ue.minerSelected:Ue.validator,Ge=fe?1.25:1,xe=new Tn(2.5*Ge,32,32),be=new Jt({color:ae,transparent:!0,opacity:d,emissive:_e||fe?8704:0,emissiveIntensity:_e||fe?.5:0}),P=new Ke(xe,be);if(P.position.set(O.position.x,O.position.y,O.position.z),P.castShadow=!0,P.userData={object:O,type:"validator"},N.add(P),f){const S=new Qo(4*Ge,.1,8,32),H=new wn({color:"#10b981",transparent:!0,opacity:d*.3}),ie=new Ke(S,H);ie.position.set(O.position.x,O.position.y,O.position.z),ie.rotation.x=Math.PI/2,N.add(ie)}ot(N,fe?`V${O.id} ⚡ 提议`:`V${O.id}`,new b(O.position.x,O.position.y+(fe?4.2:3.5),O.position.z),5,1.5,d,fe?"#15803d":"#1f2430")}),de&&I&&Re>=0){const O=a==="pow"?n.find(C=>C.id===Re):i.find(C=>C.id===Re);if(O){const C=new b(O.position.x,O.position.y,O.position.z),pe=new b(I.position.x,I.position.y-2,I.position.z),_e=a==="pow"?Ue.hashParticle:Ue.validatorProposer;Pn(N,C,pe,_e,d*.7);const fe=h%2/2,ae=C.x+(pe.x-C.x)*fe,Ge=C.y+(pe.y-C.y)*fe,xe=C.z+(pe.z-C.z)*fe,be=new Tn(.5,8,8),P=new wn({color:_e,transparent:!0,opacity:d}),S=new Ke(be,P);S.position.set(ae,Ge,xe),N.add(S)}}if((Pe?r:[]).forEach(O=>{const C=p===O,pe=O.pulse,_e=C?Ue.contractSelected:Ue.contract,fe=3*pe,ae=new nn(fe,fe,fe),Ge=new Jt({color:_e,transparent:!0,opacity:d*pe,emissive:C?3351040:0,emissiveIntensity:C?.3:0}),xe=new Ke(ae,Ge);xe.position.set(O.position.x,O.position.y,O.position.z),xe.castShadow=!0,xe.userData={object:O,type:"contract"},N.add(xe),Pn(N,new b(O.position.x,O.position.y,O.position.z),new b(0,0,0),Ue.contract,d*.3),ot(N,O.name,new b(O.position.x,O.position.y+fe*.7,O.position.z),8,1.5,d)}),(j?s:[]).forEach(O=>{const C=p===O,pe=C?Ue.dappSelected:Ue.dapp,_e=new Tn(2.5,32,32),fe=new Jt({color:pe,transparent:!0,opacity:d,emissive:C?3351040:0,emissiveIntensity:C?.3:0}),ae=new Ke(_e,fe);ae.position.set(O.position.x,O.position.y,O.position.z),ae.castShadow=!0,ae.userData={object:O,type:"dapp"},N.add(ae),r.forEach((Ge,xe)=>{xe<2&&Pn(N,new b(O.position.x,O.position.y,O.position.z),new b(Ge.position.x,Ge.position.y,Ge.position.z),Ue.dapp,d*.2)}),ot(N,O.name,new b(O.position.x,O.position.y+3.5,O.position.z),5,1.5,d)}),Pe){const O=new Tn(4,32,32),C=new Jt({color:Ue.evm,transparent:!0,opacity:d,emissive:3351040,emissiveIntensity:.2}),pe=new Ke(O,C);pe.position.set(0,0,0),pe.castShadow=!0,N.add(pe);const _e=new Qo(5.5,.15,16,64),fe=new wn({color:Ue.evm,transparent:!0,opacity:d*.5}),ae=new Ke(_e,fe);ae.position.set(0,0,0),ae.rotation.x=Math.PI/2,N.add(ae),ot(N,"EVM",new b(0,5.5,0),4,1.5,d)}f&&ne&&o.forEach(O=>{const C=new Tn(O.size*.3,8,8),pe=new wn({color:O.color,transparent:!0,opacity:O.life*d}),_e=new Ke(C,pe);_e.position.set(O.position.x,O.position.y,O.position.z),N.add(_e)});const Te=h%3/3;if((j?s:[]).forEach((O,C)=>{if(C<r.length){const pe=r[C],_e=O.position.x+(pe.position.x-O.position.x)*Te,fe=O.position.y+(pe.position.y-O.position.y)*Te,ae=O.position.z+(pe.position.z-O.position.z)*Te,Ge=new Tn(.3,8,8),xe=new wn({color:Ue.dapp,transparent:!0,opacity:d}),be=new Ke(Ge,xe);be.position.set(_e,fe,ae),N.add(be)}}),(Pe?r:[]).forEach((O,C)=>{const pe=(Te+C*.25)%1,_e=O.position.x+(0-O.position.x)*pe,fe=O.position.y+(0-O.position.y)*pe,ae=O.position.z+(0-O.position.z)*pe,Ge=new Tn(.3,8,8),xe=new wn({color:Ue.contract,transparent:!0,opacity:d}),be=new Ke(Ge,xe);be.position.set(_e,fe,ae),N.add(be)}),Z&&I){const O=0+(I.position.x-0)*Te,C=-15+(I.position.y-2- -15)*Te,pe=0+(I.position.z-0)*Te,_e=new Tn(.4,8,8),fe=new wn({color:Ue.mempool,transparent:!0,opacity:d}),ae=new Ke(_e,fe);ae.position.set(O,C,pe),N.add(ae)}},[t,e,n,i,r,s,o,a,l,c,f,d,h,p,g]);const y=we.useCallback(N=>{const X="touches"in N?N.touches[0].clientX:N.clientX,$="touches"in N?N.touches[0].clientY:N.clientY;A.current={active:!0,lx:X,ly:$};const I=m.current,Y=v.current,K=_.current;if(!I||!Y||!K)return;const Z=I.getBoundingClientRect();w.current.set((X-Z.left)/Z.width*2-1,-(($-Z.top)/Z.height)*2+1),D.current.setFromCamera(w.current,Y);const de=L.current;if(!de)return;const Pe=[];de.children.forEach(ne=>{const re=ne.userData;re&&re.object&&(re.type==="block"||re.type==="miner"||re.type==="validator"||re.type==="contract"||re.type==="dapp")&&Pe.push(ne)});const j=D.current.intersectObjects(Pe,!1);if(j.length>0){const ne=j[0].object.userData;x(ne.object)}else x(null)},[x]),U=we.useCallback(N=>{const X="touches"in N?N.touches[0].clientX:N.clientX,$="touches"in N?N.touches[0].clientY:N.clientY;if(A.current.active){const I=X-A.current.lx,Y=$-A.current.ly;T.current.ry+=I*.005,T.current.rx+=Y*.005,T.current.rx=Math.max(-1,Math.min(1,T.current.rx)),A.current.lx=X,A.current.ly=$,q()}},[]),V=we.useCallback(()=>{A.current.active=!1},[]),B=we.useCallback(N=>{N.preventDefault(),T.current.zoom*=N.deltaY>0?.9:1.1,T.current.zoom=Math.max(.3,Math.min(3,T.current.zoom)),q()},[]),q=we.useCallback(()=>{const N=v.current;if(!N)return;const{rx:X,ry:$,zoom:I}=T.current,Y=55/I;N.position.x=Math.sin($)*Y,N.position.y=-20+Math.sin(X)*Y*.5,N.position.z=Math.cos($)*Y,N.lookAt(0,0,0)},[]);return we.useEffect(()=>{const N=rA[g];T.current={rx:N.rx,ry:N.ry,zoom:N.zoom},q()},[g,q]),we.useEffect(()=>{const N=_.current,X=u.current,$=v.current;if(!N||!X||!$)return;const I=()=>{M.current=requestAnimationFrame(I),N.render(X,$)};return I(),()=>cancelAnimationFrame(M.current)},[]),R.jsx("div",{ref:m,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:1,cursor:A.current.active?"grabbing":"grab"},onMouseDown:y,onMouseMove:U,onMouseUp:V,onMouseLeave:V,onWheel:B,onTouchStart:y,onTouchMove:U,onTouchEnd:V})},wA=rr.memo(EA),TA=({config:t,chapters:e,onToggleRunning:n,onReset:i,onClearMempool:r,onSetConsensus:s,onSetTxRate:o,onToggleOption:a,onSetOpacity:l,onSetChapter:c})=>{var m;const f=u=>{o(tl[u]||15)},d=((m=e[t.currentChapter])==null?void 0:m.scene)??"overview",h=d==="consensus"||d==="block"||d==="gas",p=d==="consensus",x=d==="trees"||d==="block",g=d==="block";return R.jsxs("div",{style:{position:"absolute",left:12,top:12,bottom:12,width:260,background:"rgba(255,255,255,0.94)",border:"1px solid var(--kimi-color-border)",borderRadius:12,padding:16,zIndex:10,overflowY:"auto",backdropFilter:"blur(8px)",boxShadow:"0 4px 16px rgba(15,23,42,0.08)",fontFamily:"var(--kimi-font-sans, system-ui)"},children:[R.jsxs("h2",{style:{fontSize:16,fontWeight:500,margin:"0 0 12px 0",color:"var(--kimi-color-text-primary)",display:"flex",alignItems:"center",gap:8},children:[R.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:R.jsx("polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"})}),"控制台"]}),R.jsxs(vo,{title:"模拟控制",children:[R.jsx("button",{onClick:n,style:{width:"100%",padding:"10px 16px",borderRadius:8,border:"none",background:t.running?"var(--kimi-color-positive)":"var(--kimi-color-danger)",color:"#fff",fontWeight:500,cursor:"pointer",marginBottom:8,fontSize:14},children:t.running?"⏸ 暂停模拟":"▶ 启动模拟"}),R.jsxs("div",{style:{display:"flex",gap:8},children:[R.jsx("button",{onClick:i,style:{flex:1,padding:8,borderRadius:8,border:"1px solid var(--kimi-color-border)",background:"transparent",color:"var(--kimi-color-text-secondary)",cursor:"pointer",fontSize:13},children:"重置"}),R.jsx("button",{onClick:r,style:{flex:1,padding:8,borderRadius:8,border:"1px solid var(--kimi-color-border)",background:"transparent",color:"var(--kimi-color-text-secondary)",cursor:"pointer",fontSize:13},children:"清空"})]})]}),h&&R.jsxs(vo,{title:"交易速率 (TPS)",children:[R.jsx("div",{style:{display:"flex",gap:4,marginBottom:8},children:["slow","medium","fast"].map(u=>R.jsx("button",{onClick:()=>f(u),style:{flex:1,padding:6,borderRadius:6,border:"1px solid",borderColor:t.txRate===tl[u]?"var(--kimi-color-accent)":"var(--kimi-color-border)",background:t.txRate===tl[u]?"rgba(59,130,246,0.15)":"transparent",color:t.txRate===tl[u]?"var(--kimi-color-accent)":"var(--kimi-color-text-secondary)",cursor:"pointer",fontSize:12},children:u==="slow"?"慢":u==="medium"?"中":"快"},u))}),R.jsx("input",{type:"range",min:1,max:50,value:t.txRate,onChange:u=>o(parseInt(u.target.value)),style:{width:"100%",accentColor:"var(--kimi-color-text-primary)"}}),R.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--kimi-color-text-quaternary)",marginTop:4},children:[R.jsx("span",{children:"1 TPS"}),R.jsxs("span",{children:[t.txRate," TPS"]}),R.jsx("span",{children:"50 TPS"})]})]}),p&&R.jsxs(vo,{title:"共识机制",children:[R.jsxs("div",{style:{display:"flex",gap:4,background:"rgba(31,41,55,0.06)",borderRadius:8,padding:4},children:[R.jsx("button",{onClick:()=>s("pow"),style:{flex:1,padding:8,borderRadius:6,border:"none",background:t.consensus==="pow"?"var(--kimi-color-accent)":"transparent",color:t.consensus==="pow"?"#fff":"var(--kimi-color-text-secondary)",fontWeight:500,cursor:"pointer",fontSize:13},children:"PoW"}),R.jsx("button",{onClick:()=>s("pos"),style:{flex:1,padding:8,borderRadius:6,border:"none",background:t.consensus==="pos"?"var(--kimi-color-accent)":"transparent",color:t.consensus==="pos"?"#fff":"var(--kimi-color-text-secondary)",fontWeight:500,cursor:"pointer",fontSize:13},children:"PoS"})]}),R.jsx("div",{style:{fontSize:12,color:"var(--kimi-color-text-tertiary)",marginTop:8,lineHeight:1.5},children:t.consensus==="pow"?"工作量证明：矿工通过哈希碰撞竞争出块权":"权益证明：验证者质押 ETH 后随机获得出块权"})]}),R.jsxs(vo,{title:"视图选项",children:[R.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[x&&R.jsx(Ou,{label:"显示四棵树 (MPT)",checked:t.showTrees,onChange:()=>a("showTrees")}),g&&R.jsx(Ou,{label:"显示区块结构 (Header/Body)",checked:t.showBlockStructure,onChange:()=>a("showBlockStructure")}),R.jsx(Ou,{label:"粒子效果",checked:t.showParticles,onChange:()=>a("showParticles")})]}),R.jsxs("div",{style:{marginTop:10},children:[R.jsx("div",{style:{fontSize:11,color:"var(--kimi-color-text-quaternary)",marginBottom:4},children:"网络透明度"}),R.jsx("input",{type:"range",min:20,max:100,value:t.globalOpacity*100,onChange:u=>l(parseInt(u.target.value)/100),style:{width:"100%",accentColor:"var(--kimi-color-text-primary)"}})]})]}),R.jsx(vo,{title:"教学章节",children:R.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:e.map(u=>R.jsxs("button",{onClick:()=>c(u.id),style:{textAlign:"left",padding:"8px 10px",borderRadius:6,border:"none",background:t.currentChapter===u.id?"rgba(59,130,246,0.12)":"transparent",color:t.currentChapter===u.id?"var(--kimi-color-accent)":"var(--kimi-color-text-secondary)",cursor:"pointer",fontSize:12,fontWeight:t.currentChapter===u.id?500:400},children:[u.id+1,". ",u.title]},u.id))})})]})},vo=({title:t,children:e})=>R.jsxs("div",{style:{marginBottom:16,paddingBottom:12,borderBottom:"1px solid var(--kimi-color-border)"},children:[R.jsx("div",{style:{fontSize:12,color:"var(--kimi-color-text-tertiary)",marginBottom:8,textTransform:"uppercase",letterSpacing:"0.5px"},children:t}),e]}),Ou=({label:t,checked:e,onChange:n})=>R.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer",fontSize:13,color:"var(--kimi-color-text-secondary)"},children:[R.jsx("input",{type:"checkbox",checked:e,onChange:n,style:{accentColor:"var(--kimi-color-text-primary)"}}),t]}),AA=rr.memo(TA),CA=({networkState:t,selectedObject:e,currentChapter:n})=>{const i=n.scene==="block"||n.scene==="trees"||n.scene==="consensus"||n.scene==="gas";return R.jsxs("div",{style:{position:"absolute",right:12,top:12,bottom:12,width:240,background:"rgba(255,255,255,0.94)",border:"1px solid var(--kimi-color-border)",borderRadius:12,padding:16,zIndex:10,overflowY:"auto",backdropFilter:"blur(8px)",boxShadow:"0 4px 16px rgba(15,23,42,0.08)",fontFamily:"var(--kimi-font-sans, system-ui)"},children:[R.jsxs("h2",{style:{fontSize:16,fontWeight:500,margin:"0 0 12px 0",color:"var(--kimi-color-text-primary)",display:"flex",alignItems:"center",gap:8},children:[R.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[R.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"10"}),R.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"4"}),R.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"16"})]}),"网络状态"]}),R.jsxs("div",{style:{marginBottom:16,padding:12,background:"rgba(31,41,55,0.045)",borderRadius:10,border:"1px solid var(--kimi-color-border)"},children:[R.jsx("div",{style:{fontSize:11,color:"var(--kimi-color-text-quaternary)",marginBottom:4},children:"区块高度"}),R.jsx("div",{style:{fontSize:28,fontWeight:500,color:"var(--kimi-color-text-primary)",fontVariantNumeric:"tabular-nums"},children:sc(t.blockHeight)})]}),R.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16},children:[R.jsx(rl,{label:"实时 TPS",value:t.tps.toFixed(1),color:"var(--kimi-color-accent)"}),R.jsx(rl,{label:"Gas 价格",value:`${t.gasPrice.toFixed(1)}`,color:"var(--kimi-color-warning)"}),R.jsx(rl,{label:"交易池",value:sc(t.mempoolSize),color:"var(--kimi-color-text-secondary)"}),R.jsx(rl,{label:"确认时间",value:`${t.confirmationTime}s`,color:"var(--kimi-color-positive)"})]}),R.jsx(_o,{title:"本章 3D 场景要点",children:R.jsx("div",{style:{display:"grid",gap:6},children:n.bullets.map((r,s)=>R.jsxs("div",{style:{display:"flex",gap:6,fontSize:12,color:"var(--kimi-color-text-secondary)",lineHeight:1.5},children:[R.jsxs("span",{style:{color:"var(--kimi-color-accent)",flexShrink:0},children:[s+1,"."]}),R.jsx("span",{children:r})]},s))})}),i&&R.jsx(_o,{title:"最新区块",children:t.latestBlock?R.jsxs("div",{style:{fontSize:12,color:"var(--kimi-color-text-secondary)",lineHeight:1.6,fontFamily:"var(--kimi-font-mono)",wordBreak:"break-all"},children:[R.jsxs("div",{children:["Hash: ",R.jsxs("span",{style:{color:"var(--kimi-color-text-primary)"},children:[t.latestBlock.hash.slice(0,10),"..."]})]}),R.jsxs("div",{children:["Txs: ",R.jsx("span",{style:{color:"var(--kimi-color-text-primary)"},children:t.latestBlock.txCount})]}),R.jsxs("div",{children:["Gas: ",R.jsxs("span",{style:{color:"var(--kimi-color-text-primary)"},children:[ni(t.latestBlock.gasUsed)," / 30M"]})]}),R.jsxs("div",{children:["Miner: ",R.jsx("span",{style:{color:"var(--kimi-color-text-primary)"},children:t.latestBlock.miner})]})]}):R.jsx("div",{style:{fontSize:12,color:"var(--kimi-color-text-quaternary)"},children:"暂无区块数据"})}),e&&R.jsx(_o,{title:"选中对象",children:R.jsx(RA,{obj:e})}),(e==null?void 0:e.type)==="block"&&R.jsx(_o,{title:"四棵树 · MPT 根哈希",children:R.jsx(bA,{block:e})}),R.jsx(_o,{title:"教学内容",children:R.jsxs("div",{style:{fontSize:13,color:"var(--kimi-color-text-secondary)",lineHeight:1.6},children:[R.jsx("div",{style:{fontWeight:500,color:"var(--kimi-color-text-primary)",marginBottom:6},children:n.title}),R.jsxs("div",{children:[n.content.slice(0,120),n.content.length>120?"…":""]})]})})]})},rl=({label:t,value:e,color:n})=>R.jsxs("div",{style:{padding:10,background:"rgba(31,41,55,0.045)",borderRadius:8,border:"1px solid var(--kimi-color-border)"},children:[R.jsx("div",{style:{fontSize:10,color:"var(--kimi-color-text-quaternary)",marginBottom:2},children:t}),R.jsx("div",{style:{fontSize:18,fontWeight:500,color:n,fontVariantNumeric:"tabular-nums"},children:e})]}),_o=({title:t,children:e})=>R.jsxs("div",{style:{marginBottom:16,paddingBottom:12,borderBottom:"1px solid var(--kimi-color-border)"},children:[R.jsx("div",{style:{fontSize:12,color:"var(--kimi-color-text-tertiary)",marginBottom:8,textTransform:"uppercase",letterSpacing:"0.5px"},children:t}),e]}),RA=({obj:t})=>t.type==="block"?R.jsxs("div",{style:{fontSize:12,color:"var(--kimi-color-text-secondary)",lineHeight:1.6},children:[R.jsxs("div",{style:{fontWeight:500,marginBottom:4},children:["区块 #",t.height]}),R.jsx("div",{children:"结构: Header（区块头）+ Body（区块体）"}),R.jsxs("div",{children:["交易数: ",t.txCount]}),R.jsxs("div",{children:["Gas消耗: ",ni(t.gasUsed)]}),R.jsxs("div",{children:["时间戳: ",a_(t.timestamp)]}),R.jsxs("div",{children:["出块者: ",t.miner]}),R.jsxs("div",{children:["哈希: ",t.hash.slice(0,16),"..."]})]}):t.type==="contract"?R.jsxs("div",{style:{fontSize:12,color:"var(--kimi-color-text-secondary)",lineHeight:1.6},children:[R.jsxs("div",{style:{fontWeight:500,marginBottom:4},children:["合约: ",t.name]}),R.jsx("div",{children:"状态: 活跃"}),R.jsxs("div",{children:["调用次数: ",t.state.calls]}),R.jsxs("div",{children:["存储余额: ",t.state.balance.toFixed(2)," ETH"]}),R.jsx("div",{style:{marginTop:6,padding:6,background:"rgba(236,72,153,0.1)",borderRadius:4,fontSize:11},children:"点击合约可模拟函数调用"})]}):t.type==="miner"?R.jsxs("div",{style:{fontSize:12,color:"var(--kimi-color-text-secondary)",lineHeight:1.6},children:[R.jsxs("div",{style:{fontWeight:500,marginBottom:4},children:["矿工 #",t.id]}),R.jsxs("div",{children:["算力: ",t.hashRate.toFixed(0)," MH/s"]}),R.jsxs("div",{children:["权重: ",(t.power*100).toFixed(0),"%"]}),R.jsxs("div",{children:["质押: ",t.stake," ETH"]})]}):t.type==="validator"?R.jsxs("div",{style:{fontSize:12,color:"var(--kimi-color-text-secondary)",lineHeight:1.6},children:[R.jsxs("div",{style:{fontWeight:500,marginBottom:4},children:["验证者 #",t.id]}),R.jsxs("div",{children:["质押: ",(t.stake/1e3).toFixed(1),"k ETH"]}),R.jsxs("div",{children:["状态: ",t.active?"活跃":"待命"]})]}):t.type==="dapp"?R.jsxs("div",{style:{fontSize:12,color:"var(--kimi-color-text-secondary)",lineHeight:1.6},children:[R.jsxs("div",{style:{fontWeight:500,marginBottom:4},children:["DApp: ",t.name]}),R.jsxs("div",{children:["用户数: ",sc(t.users)]}),R.jsx("div",{children:"类型: 去中心化应用"})]}):null,bA=({block:t})=>R.jsxs("div",{style:{display:"grid",gap:6},children:[Jo.map(e=>{const n=t.trees[e.type];return R.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[R.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:e.color,flexShrink:0}}),R.jsxs("div",{style:{flex:1,minWidth:0},children:[R.jsx("div",{style:{fontSize:12,fontWeight:500,color:"var(--kimi-color-text-primary)"},children:e.shortName}),R.jsxs("div",{style:{fontSize:10,color:"var(--kimi-color-text-quaternary)",fontFamily:"var(--kimi-font-mono)",wordBreak:"break-all"},children:[n.rootHash.slice(0,14),"..."]})]})]},e.type)}),R.jsx("div",{style:{fontSize:11,color:"var(--kimi-color-text-quaternary)",marginTop:2,lineHeight:1.5},children:"前三棵树根写入区块头（Header），存储树根写入账户状态。"})]}),PA=rr.memo(CA),LA=({config:t,networkState:e,chapters:n,selectedObject:i,onToggleRunning:r,onSetConsensus:s,onSetChapter:o,onToggleOption:a})=>{const[l,c]=we.useState(!1),[f,d]=we.useState(!0),[h,p]=we.useState(!1),x=n[t.currentChapter];return R.jsxs("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:10,pointerEvents:"none",fontFamily:"var(--kimi-font-sans, system-ui)"},children:[f&&R.jsxs("div",{style:{position:"absolute",top:8,left:8,right:8,background:"rgba(180,140,20,0.2)",border:"1px solid rgba(180,140,20,0.4)",borderRadius:8,padding:"8px 12px",fontSize:12,color:"var(--kimi-color-warning)",textAlign:"center",pointerEvents:"auto"},children:["建议使用电脑端打开，获得更完整的 3D 交互体验",R.jsx("button",{onClick:()=>d(!1),style:{marginLeft:8,background:"none",border:"none",color:"var(--kimi-color-warning)",cursor:"pointer",fontSize:16,lineHeight:1},children:"×"})]}),R.jsxs("div",{style:{position:"absolute",top:f?48:8,left:8,right:8,display:"flex",gap:8,pointerEvents:"auto"},children:[R.jsx(Bu,{label:"区块",value:e.blockHeight.toString()}),R.jsx(Bu,{label:"TPS",value:e.tps.toFixed(1),color:"var(--kimi-color-accent)"}),R.jsx(Bu,{label:"Gas",value:e.gasPrice.toFixed(0),color:"var(--kimi-color-warning)"})]}),!!i&&h&&R.jsxs("div",{style:{position:"absolute",top:120,right:8,background:"rgba(255,255,255,0.95)",border:"1px solid var(--kimi-color-border)",borderRadius:8,padding:10,maxWidth:180,pointerEvents:"auto",boxShadow:"0 4px 12px rgba(15,23,42,0.12)"},children:[R.jsx("div",{style:{fontSize:12,color:"var(--kimi-color-text-secondary)"},children:"已选中对象，详情见桌面端右侧面板"}),R.jsx("button",{onClick:()=>p(!1),style:{marginTop:6,background:"none",border:"none",color:"var(--kimi-color-text-quaternary)",cursor:"pointer",fontSize:11},children:"关闭"})]}),R.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:"rgba(255,255,255,0.96)",borderTop:"1px solid var(--kimi-color-border)",borderRadius:"16px 16px 0 0",padding:"12px 16px 24px",pointerEvents:"auto",boxShadow:"0 -4px 16px rgba(15,23,42,0.08)",transform:l?"translateY(0px)":"translateY(calc(100% - 48px))",transition:"transform 0.3s ease"},children:[R.jsx("div",{onClick:()=>c(!l),style:{width:40,height:4,background:"var(--kimi-color-border)",borderRadius:2,margin:"0 auto 12px",cursor:"pointer"}}),R.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12,overflowX:"auto"},children:[R.jsx("button",{onClick:r,style:{padding:"8px 16px",borderRadius:8,border:"none",background:t.running?"var(--kimi-color-positive)":"var(--kimi-color-danger)",color:"#fff",fontWeight:500,cursor:"pointer",fontSize:13,whiteSpace:"nowrap"},children:t.running?"⏸ 暂停":"▶ 启动"}),R.jsx("button",{onClick:()=>s(t.consensus==="pow"?"pos":"pow"),style:{padding:"8px 16px",borderRadius:8,border:"1px solid var(--kimi-color-border)",background:"transparent",color:"var(--kimi-color-text-secondary)",cursor:"pointer",fontSize:13,whiteSpace:"nowrap"},children:t.consensus.toUpperCase()}),R.jsx("button",{onClick:()=>c(!l),style:{padding:"8px 16px",borderRadius:8,border:"1px solid var(--kimi-color-border)",background:"transparent",color:"var(--kimi-color-text-secondary)",cursor:"pointer",fontSize:13,whiteSpace:"nowrap"},children:"章节"})]}),l&&R.jsxs("div",{style:{maxHeight:200,overflowY:"auto"},children:[R.jsxs("div",{style:{marginBottom:12},children:[R.jsx("div",{style:{fontSize:12,color:"var(--kimi-color-text-tertiary)",marginBottom:8,textTransform:"uppercase",letterSpacing:"0.5px"},children:"教学章节"}),R.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:n.map(g=>R.jsxs("button",{onClick:()=>{o(g.id),c(!1)},style:{textAlign:"left",padding:"10px",borderRadius:6,border:"none",background:t.currentChapter===g.id?"rgba(37,99,235,0.1)":"rgba(31,41,55,0.05)",color:t.currentChapter===g.id?"var(--kimi-color-accent)":"var(--kimi-color-text-secondary)",cursor:"pointer",fontSize:13},children:[g.id+1,". ",g.title]},g.id))})]}),R.jsxs("div",{style:{padding:10,background:"rgba(31,41,55,0.05)",borderRadius:8,border:"1px solid var(--kimi-color-border)"},children:[R.jsx("div",{style:{fontWeight:500,color:"var(--kimi-color-text-primary)",marginBottom:4,fontSize:13},children:x.title}),R.jsxs("div",{style:{fontSize:12,color:"var(--kimi-color-text-secondary)",lineHeight:1.5},children:[x.content.slice(0,120),"..."]}),R.jsx("div",{style:{display:"grid",gap:4,marginTop:8},children:x.bullets.map((g,m)=>R.jsxs("div",{style:{fontSize:11,color:"var(--kimi-color-text-tertiary)",lineHeight:1.5},children:[m+1,". ",g]},m))})]}),R.jsxs("div",{style:{marginTop:12},children:[R.jsx("div",{style:{fontSize:12,color:"var(--kimi-color-text-tertiary)",marginBottom:8,textTransform:"uppercase",letterSpacing:"0.5px"},children:"视图选项"}),R.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[R.jsx(Hu,{label:"四棵树 (MPT)",checked:t.showTrees,onChange:()=>a("showTrees")}),R.jsx(Hu,{label:"区块结构 (Header/Body)",checked:t.showBlockStructure,onChange:()=>a("showBlockStructure")}),R.jsx(Hu,{label:"粒子效果",checked:t.showParticles,onChange:()=>a("showParticles")})]})]})]})]})]})},Bu=({label:t,value:e,color:n="var(--kimi-color-text-primary)"})=>R.jsxs("div",{style:{flex:1,background:"rgba(255,255,255,0.95)",border:"1px solid var(--kimi-color-border)",borderRadius:8,padding:"8px 12px",textAlign:"center",boxShadow:"0 2px 8px rgba(15,23,42,0.08)"},children:[R.jsx("div",{style:{fontSize:10,color:"var(--kimi-color-text-quaternary)"},children:t}),R.jsx("div",{style:{fontSize:18,fontWeight:500,color:n,fontVariantNumeric:"tabular-nums"},children:e})]}),Hu=({label:t,checked:e,onChange:n})=>R.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer",fontSize:13,color:"var(--kimi-color-text-secondary)"},children:[R.jsx("input",{type:"checkbox",checked:e,onChange:n,style:{accentColor:"var(--kimi-color-text-primary)"}}),t]}),DA=rr.memo(LA),IA={root:"#7c3aed",branch:"#2563eb",leaf:"#15803d"},UA=({block:t,visible:e,onClose:n})=>{const[i,r]=we.useState("state");if(!e||!t)return null;const{header:s,body:o,trees:a}=t;return R.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:480,maxWidth:"92vw",maxHeight:"88vh",overflowY:"auto",background:"rgba(255,255,255,0.97)",border:"1px solid var(--kimi-color-border)",borderRadius:12,padding:20,zIndex:100,backdropFilter:"blur(12px)",boxShadow:"0 8px 30px rgba(15,23,42,0.16)",fontFamily:"var(--kimi-font-sans, system-ui)"},children:[R.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},children:[R.jsxs("h3",{style:{margin:0,fontSize:18,fontWeight:600,color:"var(--kimi-color-text-primary)"},children:["区块 #",t.height," 详情"]}),R.jsx("button",{onClick:n,style:{background:"none",border:"none",color:"var(--kimi-color-text-secondary)",cursor:"pointer",fontSize:20,lineHeight:1},children:"×"})]}),R.jsxs("div",{style:{display:"grid",gap:14},children:[R.jsx(pn,{label:"区块哈希",value:t.hash}),R.jsx(pn,{label:"时间戳",value:a_(t.timestamp)}),R.jsx(pn,{label:"交易数量",value:sc(t.txCount)}),R.jsx(pn,{label:"Gas 已用",value:`${ni(t.gasUsed)} / ${ni(t.gasLimit)}`}),R.jsx(Gu,{color:"#b45309",children:"区块头 · Header（具体字段数据）"}),R.jsxs(cg,{children:[R.jsx(pn,{label:"parentHash",value:s.parentHash}),R.jsx(pn,{label:"ommersHash",value:s.ommersHash}),R.jsx(pn,{label:"beneficiary",value:s.beneficiary}),R.jsx(pn,{label:"difficulty",value:s.difficulty}),R.jsx(pn,{label:"number",value:String(s.number)}),R.jsx(pn,{label:"gasUsed",value:ni(s.gasUsed)}),R.jsx(pn,{label:"gasLimit",value:ni(s.gasLimit)}),R.jsx(pn,{label:"baseFeePerGas",value:String(s.baseFeePerGas)}),R.jsx(pn,{label:"nonce",value:s.nonce})]}),R.jsx("div",{style:{fontSize:12,fontWeight:500,color:"var(--kimi-color-text-tertiary)",marginBottom:2},children:"区块头中的树根（MPT Root）"}),R.jsx(Vu,{label:"stateRoot",value:s.stateRoot,color:"#15803d"}),R.jsx(Vu,{label:"transactionsRoot",value:s.transactionsRoot,color:"#2563eb"}),R.jsx(Vu,{label:"receiptsRoot",value:s.receiptsRoot,color:"#b45309"}),R.jsx(Gu,{color:"#2563eb",children:"区块体 · Body"}),R.jsxs(cg,{children:[R.jsxs("div",{style:{fontSize:12,color:"var(--kimi-color-text-secondary)",marginBottom:4},children:["交易列表（",o.txCount," 笔）:"]}),o.transactions.slice(0,6).map((l,c)=>R.jsxs("div",{style:{fontFamily:"var(--kimi-font-mono)",fontSize:11,color:"var(--kimi-color-text-quaternary)",wordBreak:"break-all"},children:[l.slice(0,20),"…"]},c)),o.txCount>6&&R.jsxs("div",{style:{fontSize:11,color:"var(--kimi-color-text-quaternary)"},children:["… 还有 ",o.txCount-6," 笔交易"]}),R.jsxs("div",{style:{fontSize:12,color:"var(--kimi-color-text-secondary)",marginTop:6},children:["叔块列表（Ommer）: ",o.ommerCount," 个"]})]}),R.jsx(Gu,{color:"#7c3aed",children:"四棵树 · Merkle Patricia Trie（节点明细）"}),R.jsx("div",{style:{display:"grid",gap:6},children:Jo.map(l=>{const c=a[l.type],f=c.root.children.length,d=l_(c.root),h=i===l.type;return R.jsxs("div",{style:{border:"1px solid var(--kimi-color-border)",borderRadius:8,overflow:"hidden",background:"rgba(255,255,255,0.6)"},children:[R.jsxs("button",{onClick:()=>r(h?null:l.type),style:{width:"100%",display:"flex",alignItems:"center",gap:8,padding:"8px 10px",background:"none",border:"none",cursor:"pointer",textAlign:"left"},children:[R.jsx("span",{style:{width:10,height:10,borderRadius:"50%",background:l.color,flexShrink:0}}),R.jsxs("span",{style:{flex:1,minWidth:0},children:[R.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--kimi-color-text-primary)",display:"block"},children:l.name}),R.jsxs("span",{style:{fontSize:10,color:"var(--kimi-color-text-quaternary)",display:"block",wordBreak:"break-all",fontFamily:"var(--kimi-font-mono)"},children:[l.rootField," = ",c.rootHash.slice(0,14),"…"]})]}),R.jsxs("span",{style:{fontSize:10,color:"var(--kimi-color-text-quaternary)",background:"rgba(31,41,55,0.05)",borderRadius:6,padding:"2px 6px",whiteSpace:"nowrap"},children:["1 根 · ",f," 分支 · ",d," 叶"]})]}),h&&R.jsx(c_,{nodes:c.root.children,color:l.color,depth:0})]},l.type)})}),R.jsx("div",{style:{fontSize:11,color:"var(--kimi-color-text-quaternary)",lineHeight:1.5},children:"前三棵树根写入区块头（Header），存储树根写入账户状态。展开可查看每棵树的每个节点路径、哈希与叶子承载的具体数据。"})]})]})};function l_(t){return t.children.length===0?1:t.children.reduce((e,n)=>e+l_(n),0)}const c_=({nodes:t,color:e,depth:n})=>R.jsx("div",{style:{display:"grid",gap:2,padding:"2px 0 8px",background:"rgba(255,255,255,0.5)"},children:t.map((i,r)=>{const s=n*14+12,o=i.content;return R.jsxs("div",{children:[R.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"3px 10px 3px 0",marginLeft:s,fontSize:11},children:[R.jsx("span",{style:{flexShrink:0,fontSize:9,color:"#fff",background:IA[i.kind],borderRadius:4,padding:"1px 5px"},children:i.kind==="leaf"?"LEAF":"BRANCH"}),R.jsx("span",{style:{fontFamily:"var(--kimi-font-mono)",color:"var(--kimi-color-text-secondary)",flexShrink:0},children:i.key}),R.jsxs("span",{style:{flex:1,minWidth:0,fontFamily:"var(--kimi-font-mono)",color:e,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[i.hash.slice(0,18),"…"]}),o&&R.jsx("span",{style:{color:"var(--kimi-color-text-quaternary)",fontSize:9,flexShrink:0},children:o.title})]}),o&&R.jsx("div",{style:{marginLeft:s+26,marginRight:10,padding:"4px 8px",background:"rgba(31,41,55,0.045)",borderRadius:6,display:"grid",gap:2},children:o.fields.map((a,l)=>R.jsxs("div",{style:{display:"flex",gap:8,fontSize:10},children:[R.jsx("span",{style:{color:"var(--kimi-color-text-tertiary)",flexShrink:0,minWidth:100},children:a.label}),R.jsx("span",{style:{color:"var(--kimi-color-text-secondary)",fontFamily:"var(--kimi-font-mono)",wordBreak:"break-all",textAlign:"right"},children:a.value})]},l))}),i.children.length>0&&R.jsx(c_,{nodes:i.children,color:e,depth:n+1})]},`${i.id}-${r}`)})}),pn=({label:t,value:e})=>R.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,gap:8},children:[R.jsx("span",{style:{color:"var(--kimi-color-text-tertiary)",flexShrink:0},children:t}),R.jsx("span",{style:{color:"var(--kimi-color-text-primary)",fontFamily:"var(--kimi-font-mono)",wordBreak:"break-all",textAlign:"right"},children:e})]}),Vu=({label:t,value:e,color:n})=>R.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,fontSize:12},children:[R.jsx("span",{style:{color:n,fontWeight:600,flexShrink:0},children:t}),R.jsx("span",{style:{color:"var(--kimi-color-text-primary)",fontFamily:"var(--kimi-font-mono)",wordBreak:"break-all",textAlign:"right"},children:e})]}),cg=({children:t})=>R.jsx("div",{style:{display:"grid",gap:6,padding:10,background:"rgba(31,41,55,0.045)",borderRadius:8},children:t}),Gu=({color:t,children:e})=>R.jsx("div",{style:{fontSize:13,fontWeight:600,color:t,borderBottom:`1px solid ${t}40`,paddingBottom:4},children:e}),NA=rr.memo(UA),FA=({contract:t,visible:e,onClose:n,onInteract:i})=>!e||!t?null:R.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:360,maxWidth:"90vw",background:"rgba(255,255,255,0.97)",border:"1px solid var(--kimi-color-border)",borderRadius:12,padding:20,zIndex:100,backdropFilter:"blur(12px)",boxShadow:"0 8px 30px rgba(15,23,42,0.16)",fontFamily:"var(--kimi-font-sans, system-ui)"},children:[R.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},children:[R.jsx("h3",{style:{margin:0,fontSize:18,fontWeight:500,color:"var(--kimi-color-text-primary)"},children:t.name}),R.jsx("button",{onClick:n,style:{background:"none",border:"none",color:"var(--kimi-color-text-secondary)",cursor:"pointer",fontSize:20},children:"×"})]}),R.jsxs("div",{style:{display:"grid",gap:12},children:[R.jsxs("div",{style:{padding:12,background:"rgba(31,41,55,0.045)",borderRadius:8},children:[R.jsx("div",{style:{fontSize:12,color:"var(--kimi-color-text-tertiary)",marginBottom:4},children:"合约状态"}),R.jsx("div",{style:{fontSize:14,color:"var(--kimi-color-text-primary)"},children:"活跃"})]}),R.jsxs("div",{style:{padding:12,background:"rgba(31,41,55,0.045)",borderRadius:8},children:[R.jsx("div",{style:{fontSize:12,color:"var(--kimi-color-text-tertiary)",marginBottom:4},children:"调用次数"}),R.jsx("div",{style:{fontSize:14,color:"var(--kimi-color-text-primary)"},children:t.state.calls})]}),R.jsxs("div",{style:{padding:12,background:"rgba(31,41,55,0.045)",borderRadius:8},children:[R.jsx("div",{style:{fontSize:12,color:"var(--kimi-color-text-tertiary)",marginBottom:4},children:"存储余额"}),R.jsxs("div",{style:{fontSize:14,color:"var(--kimi-color-text-primary)"},children:[t.state.balance.toFixed(4)," ETH"]})]}),R.jsx("button",{onClick:()=>i(t.id),style:{width:"100%",padding:"12px 16px",borderRadius:8,border:"none",background:"var(--kimi-color-accent)",color:"#fff",fontWeight:500,cursor:"pointer",fontSize:14,marginTop:8},children:"模拟调用合约函数"}),R.jsx("div",{style:{fontSize:11,color:"var(--kimi-color-text-quaternary)",lineHeight:1.5},children:"点击上方按钮模拟一次合约函数调用。这将增加调用计数、更新合约余额，并在 3D 场景中生成粒子效果。"})]})]}),kA=rr.memo(FA);function zA(){const[t,e]=we.useState([ag()]),[n,i]=we.useState([]),[r]=we.useState(dA()),[s]=we.useState(fA()),[o,a]=we.useState(lg()),[l]=we.useState(hA()),[c,f]=we.useState([]),[d,h]=we.useState(null),[p,x]=we.useState(0),[g,m]=we.useState({running:!0,consensus:"pow",txRate:15,showTrees:!0,showBlockStructure:!1,showParticles:!0,globalOpacity:.85,currentChapter:0}),[u,v]=we.useState({blockHeight:0,tps:0,gasPrice:20,mempoolSize:0,confirmationTime:12,latestBlock:null}),_=we.useRef(Date.now()),M=we.useRef(Date.now()),L=we.useRef(0),A=we.useRef(0),T=we.useRef(0),D=we.useRef(20),w=we.useRef(0),y=we.useRef(0),U=we.useCallback(()=>{e([ag()]),i([]),f([]),h(null),_.current=Date.now(),L.current=0,A.current=0,T.current=0,D.current=20,w.current=0,v({blockHeight:0,tps:0,gasPrice:20,mempoolSize:0,confirmationTime:nl.pow,latestBlock:null}),a(lg())},[]),V=we.useCallback(()=>{i([])},[]),B=we.useCallback(()=>{m(Z=>({...Z,running:!Z.running}))},[]),q=we.useCallback(Z=>{m(de=>({...de,consensus:Z})),v(de=>({...de,confirmationTime:nl[Z]}))},[]),N=we.useCallback(Z=>{m(de=>({...de,txRate:Z}))},[]),X=we.useCallback(Z=>{m(de=>({...de,[Z]:!de[Z]}))},[]),$=we.useCallback(Z=>{m(de=>({...de,globalOpacity:Z}))},[]),I=we.useCallback(Z=>{m(de=>({...de,currentChapter:Z}))},[]),Y=we.useCallback(Z=>{h(Z)},[]),K=we.useCallback(Z=>{a(de=>de.map(Pe=>{if(Pe.id===Z){const j=ku(Pe.position,Ue.contract,10);return f(ne=>[...ne,...j]),{...Pe,state:{...Pe.state,calls:Pe.state.calls+1,balance:Pe.state.balance+Math.random()*10}}}return Pe}))},[]);return we.useEffect(()=>{let Z;const de=()=>{if(!g.running){Z=requestAnimationFrame(de);return}const Pe=Date.now(),j=Math.min((Pe-M.current)/1e3,.1);for(M.current=Pe,w.current+=j,x(w.current),L.current+=g.txRate*j;L.current>=1;)L.current-=1,i(re=>{const Q=lA(D.current);return[...re,Q]}),A.current++,D.current=Math.max(5,D.current+(Math.random()-.5)*2);i(re=>re.map(Q=>{const Re=Q.position.x+Q.velocity.x,Te=Q.position.z+Q.velocity.z,Ie=Math.sqrt(Re*Re+Te*Te);return{...Q,position:{x:Ie>8?Q.position.x-Q.velocity.x:Re,y:Q.position.y,z:Ie>8?Q.position.z-Q.velocity.z:Te},velocity:{x:Ie>8?-Q.velocity.x:Q.velocity.x,y:Q.velocity.y,z:Ie>8?-Q.velocity.z:Q.velocity.z}}}));const ne=nl[g.consensus]*1e3;if(Pe-_.current>ne&&n.length>0){_.current=Pe;const re=Math.min(n.length,Math.floor(Math.random()*150)+50),Q=g.consensus==="pow"?Math.floor(Math.random()*yf):Math.floor(Math.random()*Sf),Re=g.consensus==="pow"?r.find(Te=>Te.id===Q):s.find(Te=>Te.id===Q);if(i(Te=>Te.slice(re)),e(Te=>{const Ie=Te[Te.length-1],O=Ie.height+1,C=uA(O,{x:Ie.position.x+10,y:Ie.position.y,z:Ie.position.z},Ie.hash,re,Q);let pe=[...Te,C];if(pe.length>oA){const fe=pe[0].position.x;pe=pe.slice(1).map(ae=>({...ae,position:{...ae.position,x:ae.position.x-fe}}))}const _e=ku(C.position,Ue.block,20);return f(fe=>[...fe,..._e]),pe}),Re){const Te=g.consensus==="pow"?Ue.hashParticle:Ue.validatorProposer,Ie=ku(Re.position,Te,16);f(O=>[...O,...Ie])}}f(re=>re.map(Q=>({...Q,position:{x:Q.position.x+Q.velocity.x,y:Q.position.y+Q.velocity.y,z:Q.position.z+Q.velocity.z},life:Q.life-.02})).filter(Q=>Q.life>0)),a(re=>re.map(Q=>({...Q,pulse:Math.sin(w.current*2+Q.id)*.3+.7}))),y.current++,y.current%60===0&&(T.current=A.current/2,A.current=0),v({blockHeight:t.length>0?t[t.length-1].height:0,tps:T.current,gasPrice:D.current,mempoolSize:n.length,confirmationTime:nl[g.consensus],latestBlock:t.length>0?t[t.length-1]:null}),Z=requestAnimationFrame(de)};return Z=requestAnimationFrame(de),()=>cancelAnimationFrame(Z)},[g.running,g.consensus,g.txRate,n.length,t.length]),{blocks:t,mempool:n,miners:r,validators:s,contracts:o,dapps:l,particles:c,networkState:u,config:g,selectedObject:d,animTime:p,chapters:iA,actions:{resetSimulation:U,clearMempool:V,toggleRunning:B,setConsensus:q,setTxRate:N,toggleOption:X,setOpacity:$,setChapter:I,selectObject:Y,interactContract:K}}}const OA=()=>{const{blocks:t,mempool:e,miners:n,validators:i,contracts:r,dapps:s,particles:o,networkState:a,config:l,selectedObject:c,animTime:f,chapters:d,actions:h}=zA(),[p,x]=we.useState(!1),[g,m]=we.useState(!1),[u,v]=we.useState(window.innerWidth<768);rr.useEffect(()=>{const T=()=>v(window.innerWidth<768);return window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)},[]);const _=we.useCallback(T=>{h.selectObject(T),(T==null?void 0:T.type)==="block"?x(!0):(T==null?void 0:T.type)==="contract"&&m(!0)},[h]),M=we.useCallback(T=>{h.interactContract(T)},[h]),L=we.useCallback(T=>{h.setChapter(T),h.selectObject(null),x(!1),m(!1)},[h]),A=we.useMemo(()=>d[l.currentChapter],[d,l.currentChapter]);return R.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden",background:"#eef1f6",color:"var(--kimi-color-text-primary)",fontFamily:"var(--kimi-font-sans, system-ui)"},children:[R.jsx(wA,{blocks:t,mempool:e,miners:n,validators:i,contracts:r,dapps:s,particles:o,consensus:l.consensus,showTrees:l.showTrees,showBlockStructure:l.showBlockStructure,showParticles:l.showParticles,globalOpacity:l.globalOpacity,animTime:f,selectedObject:c,onObjectClick:_,scene:A.scene}),!u&&R.jsxs("div",{style:{position:"absolute",top:12,left:"50%",transform:"translateX(-50%)",background:"rgba(255,255,255,0.94)",border:"1px solid var(--kimi-color-border)",borderRadius:10,padding:"8px 20px",zIndex:10,boxShadow:"0 4px 14px rgba(15,23,42,0.08)",textAlign:"center"},children:[R.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--kimi-color-text-primary)"},children:sA[A.scene]}),R.jsx("div",{style:{fontSize:11,color:"var(--kimi-color-text-tertiary)",marginTop:2},children:"切换章节即切换 3D 教学场景 · 点击场景中的对象查看详情"})]}),!u&&R.jsxs(R.Fragment,{children:[R.jsx(AA,{config:l,chapters:d,onToggleRunning:h.toggleRunning,onReset:h.resetSimulation,onClearMempool:h.clearMempool,onSetConsensus:h.setConsensus,onSetTxRate:h.setTxRate,onToggleOption:h.toggleOption,onSetOpacity:h.setOpacity,onSetChapter:L}),R.jsx(PA,{networkState:a,selectedObject:c,currentChapter:A})]}),u&&R.jsx(DA,{config:l,networkState:a,chapters:d,selectedObject:c,onToggleRunning:h.toggleRunning,onSetConsensus:h.setConsensus,onSetChapter:h.setChapter,onToggleOption:h.toggleOption}),R.jsx(NA,{block:(c==null?void 0:c.type)==="block"?c:null,visible:p,onClose:()=>x(!1)}),R.jsx(kA,{contract:(c==null?void 0:c.type)==="contract"?c:null,visible:g,onClose:()=>m(!1),onInteract:M}),!u&&R.jsx("div",{style:{position:"absolute",bottom:12,left:"50%",transform:"translateX(-50%)",background:"rgba(255,255,255,0.9)",border:"1px solid var(--kimi-color-border)",borderRadius:8,padding:"8px 16px",fontSize:12,color:"var(--kimi-color-text-tertiary)",zIndex:10,boxShadow:"0 2px 8px rgba(15,23,42,0.08)"},children:"拖拽旋转 · 滚轮缩放 · 点击交互"})]})};Wu.createRoot(document.getElementById("root")).render(R.jsx(rr.StrictMode,{children:R.jsx(OA,{})}));
