(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function $_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var z0={exports:{}},Rc={},B0={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ga=Symbol.for("react.element"),Y_=Symbol.for("react.portal"),q_=Symbol.for("react.fragment"),K_=Symbol.for("react.strict_mode"),Z_=Symbol.for("react.profiler"),Q_=Symbol.for("react.provider"),J_=Symbol.for("react.context"),ex=Symbol.for("react.forward_ref"),tx=Symbol.for("react.suspense"),nx=Symbol.for("react.memo"),ix=Symbol.for("react.lazy"),dp=Symbol.iterator;function rx(t){return t===null||typeof t!="object"?null:(t=dp&&t[dp]||t["@@iterator"],typeof t=="function"?t:null)}var H0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V0=Object.assign,G0={};function ro(t,e,n){this.props=t,this.context=e,this.refs=G0,this.updater=n||H0}ro.prototype.isReactComponent={};ro.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ro.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function W0(){}W0.prototype=ro.prototype;function Vf(t,e,n){this.props=t,this.context=e,this.refs=G0,this.updater=n||H0}var Gf=Vf.prototype=new W0;Gf.constructor=Vf;V0(Gf,ro.prototype);Gf.isPureReactComponent=!0;var fp=Array.isArray,j0=Object.prototype.hasOwnProperty,Wf={current:null},X0={key:!0,ref:!0,__self:!0,__source:!0};function $0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)j0.call(e,i)&&!X0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ga,type:t,key:s,ref:o,props:r,_owner:Wf.current}}function sx(t,e){return{$$typeof:ga,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ga}function ox(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hp=/\/+/g;function Jc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ox(""+t.key):e.toString(36)}function Cl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ga:case Y_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Jc(o,0):i,fp(r)?(n="",t!=null&&(n=t.replace(hp,"$&/")+"/"),Cl(r,e,n,"",function(c){return c})):r!=null&&(jf(r)&&(r=sx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(hp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",fp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Jc(s,a);o+=Cl(s,e,n,l,r)}else if(l=rx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Jc(s,a++),o+=Cl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Aa(t,e,n){if(t==null)return t;var i=[],r=0;return Cl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ax(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var on={current:null},Rl={transition:null},lx={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:Rl,ReactCurrentOwner:Wf};function Y0(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Aa,forEach:function(t,e,n){Aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Aa(t,function(){e++}),e},toArray:function(t){return Aa(t,function(e){return e})||[]},only:function(t){if(!jf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=ro;je.Fragment=q_;je.Profiler=Z_;je.PureComponent=Vf;je.StrictMode=K_;je.Suspense=tx;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lx;je.act=Y0;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=V0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)j0.call(e,l)&&!X0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ga,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:J_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Q_,_context:t},t.Consumer=t};je.createElement=$0;je.createFactory=function(t){var e=$0.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:ex,render:t}};je.isValidElement=jf;je.lazy=function(t){return{$$typeof:ix,_payload:{_status:-1,_result:t},_init:ax}};je.memo=function(t,e){return{$$typeof:nx,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Rl.transition;Rl.transition={};try{t()}finally{Rl.transition=e}};je.unstable_act=Y0;je.useCallback=function(t,e){return on.current.useCallback(t,e)};je.useContext=function(t){return on.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return on.current.useDeferredValue(t)};je.useEffect=function(t,e){return on.current.useEffect(t,e)};je.useId=function(){return on.current.useId()};je.useImperativeHandle=function(t,e,n){return on.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return on.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return on.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return on.current.useMemo(t,e)};je.useReducer=function(t,e,n){return on.current.useReducer(t,e,n)};je.useRef=function(t){return on.current.useRef(t)};je.useState=function(t){return on.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return on.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return on.current.useTransition()};je.version="18.3.1";B0.exports=je;var pe=B0.exports;const q0=$_(pe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cx=pe,ux=Symbol.for("react.element"),dx=Symbol.for("react.fragment"),fx=Object.prototype.hasOwnProperty,hx=cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,px={key:!0,ref:!0,__self:!0,__source:!0};function K0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)fx.call(e,i)&&!px.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ux,type:t,key:s,ref:o,props:r,_owner:hx.current}}Rc.Fragment=dx;Rc.jsx=K0;Rc.jsxs=K0;z0.exports=Rc;var b=z0.exports,dd={},Z0={exports:{}},Tn={},Q0={exports:{}},J0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,W){var q=L.length;L.push(W);e:for(;0<q;){var Q=q-1>>>1,he=L[Q];if(0<r(he,W))L[Q]=W,L[q]=he,q=Q;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var W=L[0],q=L.pop();if(q!==W){L[0]=q;e:for(var Q=0,he=L.length,Ce=he>>>1;Q<Ce;){var Y=2*(Q+1)-1,ee=L[Y],ue=Y+1,te=L[ue];if(0>r(ee,q))ue<he&&0>r(te,ee)?(L[Q]=te,L[ue]=q,Q=ue):(L[Q]=ee,L[Y]=q,Q=Y);else if(ue<he&&0>r(te,q))L[Q]=te,L[ue]=q,Q=ue;else break e}}return W}function r(L,W){var q=L.sortIndex-W.sortIndex;return q!==0?q:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,f=3,p=!1,_=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=L)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function x(L){if(y=!1,g(L),!_)if(n(l)!==null)_=!0,O(A);else{var W=n(c);W!==null&&F(x,W.startTime-L)}}function A(L,W){_=!1,y&&(y=!1,d(R),R=-1),p=!0;var q=f;try{for(g(W),h=n(l);h!==null&&(!(h.expirationTime>W)||L&&!P());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,f=h.priorityLevel;var he=Q(h.expirationTime<=W);W=t.unstable_now(),typeof he=="function"?h.callback=he:h===n(l)&&i(l),g(W)}else i(l);h=n(l)}if(h!==null)var Ce=!0;else{var Y=n(c);Y!==null&&F(x,Y.startTime-W),Ce=!1}return Ce}finally{h=null,f=q,p=!1}}var w=!1,M=null,R=-1,E=5,S=-1;function P(){return!(t.unstable_now()-S<E)}function G(){if(M!==null){var L=t.unstable_now();S=L;var W=!0;try{W=M(!0,L)}finally{W?I():(w=!1,M=null)}}else w=!1}var I;if(typeof m=="function")I=function(){m(G)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,k=z.port2;z.port1.onmessage=G,I=function(){k.postMessage(null)}}else I=function(){v(G,0)};function O(L){M=L,w||(w=!0,I())}function F(L,W){R=v(function(){L(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,O(A))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var q=f;f=W;try{return L()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var q=f;f=L;try{return W()}finally{f=q}},t.unstable_scheduleCallback=function(L,W,q){var Q=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Q+q:Q):q=Q,L){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=q+he,L={id:u++,callback:W,priorityLevel:L,startTime:q,expirationTime:he,sortIndex:-1},q>Q?(L.sortIndex=q,e(c,L),n(l)===null&&L===n(c)&&(y?(d(R),R=-1):y=!0,F(x,q-Q))):(L.sortIndex=he,e(l,L),_||p||(_=!0,O(A))),L},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(L){var W=f;return function(){var q=f;f=W;try{return L.apply(this,arguments)}finally{f=q}}}})(J0);Q0.exports=J0;var mx=Q0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gx=pe,wn=mx;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eg=new Set,Ko={};function Xr(t,e){Ws(t,e),Ws(t+"Capture",e)}function Ws(t,e){for(Ko[t]=e,t=0;t<e.length;t++)eg.add(e[t])}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fd=Object.prototype.hasOwnProperty,vx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pp={},mp={};function _x(t){return fd.call(mp,t)?!0:fd.call(pp,t)?!1:vx.test(t)?mp[t]=!0:(pp[t]=!0,!1)}function xx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function yx(t,e,n,i){if(e===null||typeof e>"u"||xx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xf=/[\-:]([a-z])/g;function $f(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xf,$f);jt[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xf,$f);jt[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xf,$f);jt[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yf(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yx(e,n,r,i)&&(n=null),i||r===null?_x(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=gx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ca=Symbol.for("react.element"),xs=Symbol.for("react.portal"),ys=Symbol.for("react.fragment"),qf=Symbol.for("react.strict_mode"),hd=Symbol.for("react.profiler"),tg=Symbol.for("react.provider"),ng=Symbol.for("react.context"),Kf=Symbol.for("react.forward_ref"),pd=Symbol.for("react.suspense"),md=Symbol.for("react.suspense_list"),Zf=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),ig=Symbol.for("react.offscreen"),gp=Symbol.iterator;function co(t){return t===null||typeof t!="object"?null:(t=gp&&t[gp]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,eu;function Lo(t){if(eu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);eu=e&&e[1]||""}return`
`+eu+t}var tu=!1;function nu(t,e){if(!t||tu)return"";tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{tu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Lo(t):""}function Sx(t){switch(t.tag){case 5:return Lo(t.type);case 16:return Lo("Lazy");case 13:return Lo("Suspense");case 19:return Lo("SuspenseList");case 0:case 2:case 15:return t=nu(t.type,!1),t;case 11:return t=nu(t.type.render,!1),t;case 1:return t=nu(t.type,!0),t;default:return""}}function gd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ys:return"Fragment";case xs:return"Portal";case hd:return"Profiler";case qf:return"StrictMode";case pd:return"Suspense";case md:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ng:return(t.displayName||"Context")+".Consumer";case tg:return(t._context.displayName||"Context")+".Provider";case Kf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zf:return e=t.displayName||null,e!==null?e:gd(t.type)||"Memo";case Xi:e=t._payload,t=t._init;try{return gd(t(e))}catch{}}return null}function Mx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gd(e);case 8:return e===qf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ex(t){var e=rg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ra(t){t._valueTracker||(t._valueTracker=Ex(t))}function sg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=rg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vd(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function og(t,e){e=e.checked,e!=null&&Yf(t,"checked",e,!1)}function _d(t,e){og(t,e);var n=ur(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xd(t,e.type,n):e.hasOwnProperty("defaultValue")&&xd(t,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _p(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xd(t,e,n){(e!=="number"||Xl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Do=Array.isArray;function Ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ur(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function yd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Do(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ur(n)}}function ag(t,e){var n=ur(e.value),i=ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function yp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ba,cg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ba=ba||document.createElement("div"),ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wx=["Webkit","ms","Moz","O"];Object.keys(ko).forEach(function(t){wx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ko[e]=ko[t]})});function ug(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ko.hasOwnProperty(t)&&ko[t]?(""+e).trim():e+"px"}function dg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ug(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Tx=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Md(t,e){if(e){if(Tx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Ed(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wd=null;function Qf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Td=null,Is=null,Ns=null;function Sp(t){if(t=xa(t)){if(typeof Td!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Ic(e),Td(t.stateNode,t.type,e))}}function fg(t){Is?Ns?Ns.push(t):Ns=[t]:Is=t}function hg(){if(Is){var t=Is,e=Ns;if(Ns=Is=null,Sp(t),e)for(t=0;t<e.length;t++)Sp(e[t])}}function pg(t,e){return t(e)}function mg(){}var iu=!1;function gg(t,e,n){if(iu)return t(e,n);iu=!0;try{return pg(t,e,n)}finally{iu=!1,(Is!==null||Ns!==null)&&(mg(),hg())}}function Qo(t,e){var n=t.stateNode;if(n===null)return null;var i=Ic(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Ad=!1;if(Pi)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Ad=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Ad=!1}function Ax(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Oo=!1,$l=null,Yl=!1,Cd=null,Cx={onError:function(t){Oo=!0,$l=t}};function Rx(t,e,n,i,r,s,o,a,l){Oo=!1,$l=null,Ax.apply(Cx,arguments)}function bx(t,e,n,i,r,s,o,a,l){if(Rx.apply(this,arguments),Oo){if(Oo){var c=$l;Oo=!1,$l=null}else throw Error(re(198));Yl||(Yl=!0,Cd=c)}}function $r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function vg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mp(t){if($r(t)!==t)throw Error(re(188))}function Px(t){var e=t.alternate;if(!e){if(e=$r(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Mp(r),t;if(s===i)return Mp(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function _g(t){return t=Px(t),t!==null?xg(t):null}function xg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xg(t);if(e!==null)return e;t=t.sibling}return null}var yg=wn.unstable_scheduleCallback,Ep=wn.unstable_cancelCallback,Lx=wn.unstable_shouldYield,Dx=wn.unstable_requestPaint,wt=wn.unstable_now,Ix=wn.unstable_getCurrentPriorityLevel,Jf=wn.unstable_ImmediatePriority,Sg=wn.unstable_UserBlockingPriority,ql=wn.unstable_NormalPriority,Nx=wn.unstable_LowPriority,Mg=wn.unstable_IdlePriority,bc=null,ci=null;function Ux(t){if(ci&&typeof ci.onCommitFiberRoot=="function")try{ci.onCommitFiberRoot(bc,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:Ox,Fx=Math.log,kx=Math.LN2;function Ox(t){return t>>>=0,t===0?32:31-(Fx(t)/kx|0)|0}var Pa=64,La=4194304;function Io(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Io(a):(s&=o,s!==0&&(i=Io(s)))}else o=n&~r,o!==0?i=Io(o):s!==0&&(i=Io(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Zn(e),r=1<<n,i|=t[n],e&=~r;return i}function zx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Zn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=zx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Rd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Eg(){var t=Pa;return Pa<<=1,!(Pa&4194240)&&(Pa=64),t}function ru(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function Hx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function eh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function wg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tg,th,Ag,Cg,Rg,bd=!1,Da=[],er=null,tr=null,nr=null,Jo=new Map,ea=new Map,Yi=[],Vx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wp(t,e){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":Jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(e.pointerId)}}function fo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xa(e),e!==null&&th(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Gx(t,e,n,i,r){switch(e){case"focusin":return er=fo(er,t,e,n,i,r),!0;case"dragenter":return tr=fo(tr,t,e,n,i,r),!0;case"mouseover":return nr=fo(nr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Jo.set(s,fo(Jo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ea.set(s,fo(ea.get(s)||null,t,e,n,i,r)),!0}return!1}function bg(t){var e=Lr(t.target);if(e!==null){var n=$r(e);if(n!==null){if(e=n.tag,e===13){if(e=vg(n),e!==null){t.blockedOn=e,Rg(t.priority,function(){Ag(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);wd=i,n.target.dispatchEvent(i),wd=null}else return e=xa(n),e!==null&&th(e),t.blockedOn=n,!1;e.shift()}return!0}function Tp(t,e,n){bl(t)&&n.delete(e)}function Wx(){bd=!1,er!==null&&bl(er)&&(er=null),tr!==null&&bl(tr)&&(tr=null),nr!==null&&bl(nr)&&(nr=null),Jo.forEach(Tp),ea.forEach(Tp)}function ho(t,e){t.blockedOn===e&&(t.blockedOn=null,bd||(bd=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,Wx)))}function ta(t){function e(r){return ho(r,t)}if(0<Da.length){ho(Da[0],t);for(var n=1;n<Da.length;n++){var i=Da[n];i.blockedOn===t&&(i.blockedOn=null)}}for(er!==null&&ho(er,t),tr!==null&&ho(tr,t),nr!==null&&ho(nr,t),Jo.forEach(e),ea.forEach(e),n=0;n<Yi.length;n++)i=Yi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Yi.length&&(n=Yi[0],n.blockedOn===null);)bg(n),n.blockedOn===null&&Yi.shift()}var Us=Ui.ReactCurrentBatchConfig,Zl=!0;function jx(t,e,n,i){var r=st,s=Us.transition;Us.transition=null;try{st=1,nh(t,e,n,i)}finally{st=r,Us.transition=s}}function Xx(t,e,n,i){var r=st,s=Us.transition;Us.transition=null;try{st=4,nh(t,e,n,i)}finally{st=r,Us.transition=s}}function nh(t,e,n,i){if(Zl){var r=Pd(t,e,n,i);if(r===null)pu(t,e,i,Ql,n),wp(t,i);else if(Gx(r,t,e,n,i))i.stopPropagation();else if(wp(t,i),e&4&&-1<Vx.indexOf(t)){for(;r!==null;){var s=xa(r);if(s!==null&&Tg(s),s=Pd(t,e,n,i),s===null&&pu(t,e,i,Ql,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else pu(t,e,i,null,n)}}var Ql=null;function Pd(t,e,n,i){if(Ql=null,t=Qf(i),t=Lr(t),t!==null)if(e=$r(t),e===null)t=null;else if(n=e.tag,n===13){if(t=vg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ql=t,null}function Pg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ix()){case Jf:return 1;case Sg:return 4;case ql:case Nx:return 16;case Mg:return 536870912;default:return 16}default:return 16}}var Zi=null,ih=null,Pl=null;function Lg(){if(Pl)return Pl;var t,e=ih,n=e.length,i,r="value"in Zi?Zi.value:Zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Pl=r.slice(t,1<i?1-i:void 0)}function Ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ia(){return!0}function Ap(){return!1}function An(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ia:Ap,this.isPropagationStopped=Ap,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),e}var so={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rh=An(so),_a=_t({},so,{view:0,detail:0}),$x=An(_a),su,ou,po,Pc=_t({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(su=t.screenX-po.screenX,ou=t.screenY-po.screenY):ou=su=0,po=t),su)},movementY:function(t){return"movementY"in t?t.movementY:ou}}),Cp=An(Pc),Yx=_t({},Pc,{dataTransfer:0}),qx=An(Yx),Kx=_t({},_a,{relatedTarget:0}),au=An(Kx),Zx=_t({},so,{animationName:0,elapsedTime:0,pseudoElement:0}),Qx=An(Zx),Jx=_t({},so,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ey=An(Jx),ty=_t({},so,{data:0}),Rp=An(ty),ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ry[t])?!!e[t]:!1}function sh(){return sy}var oy=_t({},_a,{key:function(t){if(t.key){var e=ny[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sh,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ay=An(oy),ly=_t({},Pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=An(ly),cy=_t({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sh}),uy=An(cy),dy=_t({},so,{propertyName:0,elapsedTime:0,pseudoElement:0}),fy=An(dy),hy=_t({},Pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),py=An(hy),my=[9,13,27,32],oh=Pi&&"CompositionEvent"in window,zo=null;Pi&&"documentMode"in document&&(zo=document.documentMode);var gy=Pi&&"TextEvent"in window&&!zo,Dg=Pi&&(!oh||zo&&8<zo&&11>=zo),Pp=" ",Lp=!1;function Ig(t,e){switch(t){case"keyup":return my.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ng(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ss=!1;function vy(t,e){switch(t){case"compositionend":return Ng(e);case"keypress":return e.which!==32?null:(Lp=!0,Pp);case"textInput":return t=e.data,t===Pp&&Lp?null:t;default:return null}}function _y(t,e){if(Ss)return t==="compositionend"||!oh&&Ig(t,e)?(t=Lg(),Pl=ih=Zi=null,Ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Dg&&e.locale!=="ko"?null:e.data;default:return null}}var xy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xy[t.type]:e==="textarea"}function Ug(t,e,n,i){fg(i),e=Jl(e,"onChange"),0<e.length&&(n=new rh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Bo=null,na=null;function yy(t){Xg(t,0)}function Lc(t){var e=ws(t);if(sg(e))return t}function Sy(t,e){if(t==="change")return e}var Fg=!1;if(Pi){var lu;if(Pi){var cu="oninput"in document;if(!cu){var Ip=document.createElement("div");Ip.setAttribute("oninput","return;"),cu=typeof Ip.oninput=="function"}lu=cu}else lu=!1;Fg=lu&&(!document.documentMode||9<document.documentMode)}function Np(){Bo&&(Bo.detachEvent("onpropertychange",kg),na=Bo=null)}function kg(t){if(t.propertyName==="value"&&Lc(na)){var e=[];Ug(e,na,t,Qf(t)),gg(yy,e)}}function My(t,e,n){t==="focusin"?(Np(),Bo=e,na=n,Bo.attachEvent("onpropertychange",kg)):t==="focusout"&&Np()}function Ey(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Lc(na)}function wy(t,e){if(t==="click")return Lc(e)}function Ty(t,e){if(t==="input"||t==="change")return Lc(e)}function Ay(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:Ay;function ia(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!fd.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function Up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fp(t,e){var n=Up(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Up(n)}}function Og(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Og(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zg(){for(var t=window,e=Xl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xl(t.document)}return e}function ah(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Cy(t){var e=zg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Og(n.ownerDocument.documentElement,n)){if(i!==null&&ah(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Fp(n,s);var o=Fp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ry=Pi&&"documentMode"in document&&11>=document.documentMode,Ms=null,Ld=null,Ho=null,Dd=!1;function kp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dd||Ms==null||Ms!==Xl(i)||(i=Ms,"selectionStart"in i&&ah(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ho&&ia(Ho,i)||(Ho=i,i=Jl(Ld,"onSelect"),0<i.length&&(e=new rh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ms)))}function Na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},uu={},Bg={};Pi&&(Bg=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function Dc(t){if(uu[t])return uu[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bg)return uu[t]=e[n];return t}var Hg=Dc("animationend"),Vg=Dc("animationiteration"),Gg=Dc("animationstart"),Wg=Dc("transitionend"),jg=new Map,Op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,e){jg.set(t,e),Xr(e,[t])}for(var du=0;du<Op.length;du++){var fu=Op[du],by=fu.toLowerCase(),Py=fu[0].toUpperCase()+fu.slice(1);pr(by,"on"+Py)}pr(Hg,"onAnimationEnd");pr(Vg,"onAnimationIteration");pr(Gg,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(Wg,"onTransitionEnd");Ws("onMouseEnter",["mouseout","mouseover"]);Ws("onMouseLeave",["mouseout","mouseover"]);Ws("onPointerEnter",["pointerout","pointerover"]);Ws("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ly=new Set("cancel close invalid load scroll toggle".split(" ").concat(No));function zp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,bx(i,e,void 0,t),t.currentTarget=null}function Xg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;zp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;zp(r,a,c),s=l}}}if(Yl)throw t=Cd,Yl=!1,Cd=null,t}function ct(t,e){var n=e[kd];n===void 0&&(n=e[kd]=new Set);var i=t+"__bubble";n.has(i)||($g(e,t,2,!1),n.add(i))}function hu(t,e,n){var i=0;e&&(i|=4),$g(n,t,i,e)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function ra(t){if(!t[Ua]){t[Ua]=!0,eg.forEach(function(n){n!=="selectionchange"&&(Ly.has(n)||hu(n,!1,t),hu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ua]||(e[Ua]=!0,hu("selectionchange",!1,e))}}function $g(t,e,n,i){switch(Pg(e)){case 1:var r=jx;break;case 4:r=Xx;break;default:r=nh}n=r.bind(null,e,n,t),r=void 0,!Ad||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function pu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Lr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}gg(function(){var c=s,u=Qf(n),h=[];e:{var f=jg.get(t);if(f!==void 0){var p=rh,_=t;switch(t){case"keypress":if(Ll(n)===0)break e;case"keydown":case"keyup":p=ay;break;case"focusin":_="focus",p=au;break;case"focusout":_="blur",p=au;break;case"beforeblur":case"afterblur":p=au;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=qx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=uy;break;case Hg:case Vg:case Gg:p=Qx;break;case Wg:p=fy;break;case"scroll":p=$x;break;case"wheel":p=py;break;case"copy":case"cut":case"paste":p=ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=bp}var y=(e&4)!==0,v=!y&&t==="scroll",d=y?f!==null?f+"Capture":null:f;y=[];for(var m=c,g;m!==null;){g=m;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,d!==null&&(x=Qo(m,d),x!=null&&y.push(sa(m,x,g)))),v)break;m=m.return}0<y.length&&(f=new p(f,_,null,n,u),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==wd&&(_=n.relatedTarget||n.fromElement)&&(Lr(_)||_[Li]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Lr(_):null,_!==null&&(v=$r(_),_!==v||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=Cp,x="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=bp,x="onPointerLeave",d="onPointerEnter",m="pointer"),v=p==null?f:ws(p),g=_==null?f:ws(_),f=new y(x,m+"leave",p,n,u),f.target=v,f.relatedTarget=g,x=null,Lr(u)===c&&(y=new y(d,m+"enter",_,n,u),y.target=g,y.relatedTarget=v,x=y),v=x,p&&_)t:{for(y=p,d=_,m=0,g=y;g;g=Zr(g))m++;for(g=0,x=d;x;x=Zr(x))g++;for(;0<m-g;)y=Zr(y),m--;for(;0<g-m;)d=Zr(d),g--;for(;m--;){if(y===d||d!==null&&y===d.alternate)break t;y=Zr(y),d=Zr(d)}y=null}else y=null;p!==null&&Bp(h,f,p,y,!1),_!==null&&v!==null&&Bp(h,v,_,y,!0)}}e:{if(f=c?ws(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var A=Sy;else if(Dp(f))if(Fg)A=Ty;else{A=Ey;var w=My}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=wy);if(A&&(A=A(t,c))){Ug(h,A,n,u);break e}w&&w(t,f,c),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&xd(f,"number",f.value)}switch(w=c?ws(c):window,t){case"focusin":(Dp(w)||w.contentEditable==="true")&&(Ms=w,Ld=c,Ho=null);break;case"focusout":Ho=Ld=Ms=null;break;case"mousedown":Dd=!0;break;case"contextmenu":case"mouseup":case"dragend":Dd=!1,kp(h,n,u);break;case"selectionchange":if(Ry)break;case"keydown":case"keyup":kp(h,n,u)}var M;if(oh)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ss?Ig(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Dg&&n.locale!=="ko"&&(Ss||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ss&&(M=Lg()):(Zi=u,ih="value"in Zi?Zi.value:Zi.textContent,Ss=!0)),w=Jl(c,R),0<w.length&&(R=new Rp(R,t,null,n,u),h.push({event:R,listeners:w}),M?R.data=M:(M=Ng(n),M!==null&&(R.data=M)))),(M=gy?vy(t,n):_y(t,n))&&(c=Jl(c,"onBeforeInput"),0<c.length&&(u=new Rp("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=M))}Xg(h,e)})}function sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Jl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Qo(t,n),s!=null&&i.unshift(sa(t,s,r)),s=Qo(t,e),s!=null&&i.push(sa(t,s,r))),t=t.return}return i}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Qo(n,s),l!=null&&o.unshift(sa(n,l,a))):r||(l=Qo(n,s),l!=null&&o.push(sa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Dy=/\r\n?/g,Iy=/\u0000|\uFFFD/g;function Hp(t){return(typeof t=="string"?t:""+t).replace(Dy,`
`).replace(Iy,"")}function Fa(t,e,n){if(e=Hp(e),Hp(t)!==e&&n)throw Error(re(425))}function ec(){}var Id=null,Nd=null;function Ud(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fd=typeof setTimeout=="function"?setTimeout:void 0,Ny=typeof clearTimeout=="function"?clearTimeout:void 0,Vp=typeof Promise=="function"?Promise:void 0,Uy=typeof queueMicrotask=="function"?queueMicrotask:typeof Vp<"u"?function(t){return Vp.resolve(null).then(t).catch(Fy)}:Fd;function Fy(t){setTimeout(function(){throw t})}function mu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ta(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ta(e)}function ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oo=Math.random().toString(36).slice(2),li="__reactFiber$"+oo,oa="__reactProps$"+oo,Li="__reactContainer$"+oo,kd="__reactEvents$"+oo,ky="__reactListeners$"+oo,Oy="__reactHandles$"+oo;function Lr(t){var e=t[li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Li]||n[li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gp(t);t!==null;){if(n=t[li])return n;t=Gp(t)}return e}t=n,n=t.parentNode}return null}function xa(t){return t=t[li]||t[Li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Ic(t){return t[oa]||null}var Od=[],Ts=-1;function mr(t){return{current:t}}function dt(t){0>Ts||(t.current=Od[Ts],Od[Ts]=null,Ts--)}function lt(t,e){Ts++,Od[Ts]=t.current,t.current=e}var dr={},Qt=mr(dr),un=mr(!1),zr=dr;function js(t,e){var n=t.type.contextTypes;if(!n)return dr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function dn(t){return t=t.childContextTypes,t!=null}function tc(){dt(un),dt(Qt)}function Wp(t,e,n){if(Qt.current!==dr)throw Error(re(168));lt(Qt,e),lt(un,n)}function Yg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,Mx(t)||"Unknown",r));return _t({},n,i)}function nc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,zr=Qt.current,lt(Qt,t),lt(un,un.current),!0}function jp(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=Yg(t,e,zr),i.__reactInternalMemoizedMergedChildContext=t,dt(un),dt(Qt),lt(Qt,t)):dt(un),lt(un,n)}var Mi=null,Nc=!1,gu=!1;function qg(t){Mi===null?Mi=[t]:Mi.push(t)}function zy(t){Nc=!0,qg(t)}function gr(){if(!gu&&Mi!==null){gu=!0;var t=0,e=st;try{var n=Mi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,Nc=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),yg(Jf,gr),r}finally{st=e,gu=!1}}return null}var As=[],Cs=0,ic=null,rc=0,bn=[],Pn=0,Br=null,wi=1,Ti="";function Tr(t,e){As[Cs++]=rc,As[Cs++]=ic,ic=t,rc=e}function Kg(t,e,n){bn[Pn++]=wi,bn[Pn++]=Ti,bn[Pn++]=Br,Br=t;var i=wi;t=Ti;var r=32-Zn(i)-1;i&=~(1<<r),n+=1;var s=32-Zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,wi=1<<32-Zn(e)+r|n<<r|i,Ti=s+t}else wi=1<<s|n<<r|i,Ti=t}function lh(t){t.return!==null&&(Tr(t,1),Kg(t,1,0))}function ch(t){for(;t===ic;)ic=As[--Cs],As[Cs]=null,rc=As[--Cs],As[Cs]=null;for(;t===Br;)Br=bn[--Pn],bn[Pn]=null,Ti=bn[--Pn],bn[Pn]=null,wi=bn[--Pn],bn[Pn]=null}var En=null,Mn=null,ht=!1,$n=null;function Zg(t,e){var n=Un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Mn=ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Br!==null?{id:wi,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Mn=null,!0):!1;default:return!1}}function zd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bd(t){if(ht){var e=Mn;if(e){var n=e;if(!Xp(t,e)){if(zd(t))throw Error(re(418));e=ir(n.nextSibling);var i=En;e&&Xp(t,e)?Zg(i,n):(t.flags=t.flags&-4097|2,ht=!1,En=t)}}else{if(zd(t))throw Error(re(418));t.flags=t.flags&-4097|2,ht=!1,En=t}}}function $p(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function ka(t){if(t!==En)return!1;if(!ht)return $p(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ud(t.type,t.memoizedProps)),e&&(e=Mn)){if(zd(t))throw Qg(),Error(re(418));for(;e;)Zg(t,e),e=ir(e.nextSibling)}if($p(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mn=ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mn=null}}else Mn=En?ir(t.stateNode.nextSibling):null;return!0}function Qg(){for(var t=Mn;t;)t=ir(t.nextSibling)}function Xs(){Mn=En=null,ht=!1}function uh(t){$n===null?$n=[t]:$n.push(t)}var By=Ui.ReactCurrentBatchConfig;function mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Oa(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Yp(t){var e=t._init;return e(t._payload)}function Jg(t){function e(d,m){if(t){var g=d.deletions;g===null?(d.deletions=[m],d.flags|=16):g.push(m)}}function n(d,m){if(!t)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function i(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function r(d,m){return d=ar(d,m),d.index=0,d.sibling=null,d}function s(d,m,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<m?(d.flags|=2,m):g):(d.flags|=2,m)):(d.flags|=1048576,m)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,m,g,x){return m===null||m.tag!==6?(m=Eu(g,d.mode,x),m.return=d,m):(m=r(m,g),m.return=d,m)}function l(d,m,g,x){var A=g.type;return A===ys?u(d,m,g.props.children,x,g.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Xi&&Yp(A)===m.type)?(x=r(m,g.props),x.ref=mo(d,m,g),x.return=d,x):(x=Ol(g.type,g.key,g.props,null,d.mode,x),x.ref=mo(d,m,g),x.return=d,x)}function c(d,m,g,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=wu(g,d.mode,x),m.return=d,m):(m=r(m,g.children||[]),m.return=d,m)}function u(d,m,g,x,A){return m===null||m.tag!==7?(m=Or(g,d.mode,x,A),m.return=d,m):(m=r(m,g),m.return=d,m)}function h(d,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Eu(""+m,d.mode,g),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ca:return g=Ol(m.type,m.key,m.props,null,d.mode,g),g.ref=mo(d,null,m),g.return=d,g;case xs:return m=wu(m,d.mode,g),m.return=d,m;case Xi:var x=m._init;return h(d,x(m._payload),g)}if(Do(m)||co(m))return m=Or(m,d.mode,g,null),m.return=d,m;Oa(d,m)}return null}function f(d,m,g,x){var A=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return A!==null?null:a(d,m,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ca:return g.key===A?l(d,m,g,x):null;case xs:return g.key===A?c(d,m,g,x):null;case Xi:return A=g._init,f(d,m,A(g._payload),x)}if(Do(g)||co(g))return A!==null?null:u(d,m,g,x,null);Oa(d,g)}return null}function p(d,m,g,x,A){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(g)||null,a(m,d,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ca:return d=d.get(x.key===null?g:x.key)||null,l(m,d,x,A);case xs:return d=d.get(x.key===null?g:x.key)||null,c(m,d,x,A);case Xi:var w=x._init;return p(d,m,g,w(x._payload),A)}if(Do(x)||co(x))return d=d.get(g)||null,u(m,d,x,A,null);Oa(m,x)}return null}function _(d,m,g,x){for(var A=null,w=null,M=m,R=m=0,E=null;M!==null&&R<g.length;R++){M.index>R?(E=M,M=null):E=M.sibling;var S=f(d,M,g[R],x);if(S===null){M===null&&(M=E);break}t&&M&&S.alternate===null&&e(d,M),m=s(S,m,R),w===null?A=S:w.sibling=S,w=S,M=E}if(R===g.length)return n(d,M),ht&&Tr(d,R),A;if(M===null){for(;R<g.length;R++)M=h(d,g[R],x),M!==null&&(m=s(M,m,R),w===null?A=M:w.sibling=M,w=M);return ht&&Tr(d,R),A}for(M=i(d,M);R<g.length;R++)E=p(M,d,R,g[R],x),E!==null&&(t&&E.alternate!==null&&M.delete(E.key===null?R:E.key),m=s(E,m,R),w===null?A=E:w.sibling=E,w=E);return t&&M.forEach(function(P){return e(d,P)}),ht&&Tr(d,R),A}function y(d,m,g,x){var A=co(g);if(typeof A!="function")throw Error(re(150));if(g=A.call(g),g==null)throw Error(re(151));for(var w=A=null,M=m,R=m=0,E=null,S=g.next();M!==null&&!S.done;R++,S=g.next()){M.index>R?(E=M,M=null):E=M.sibling;var P=f(d,M,S.value,x);if(P===null){M===null&&(M=E);break}t&&M&&P.alternate===null&&e(d,M),m=s(P,m,R),w===null?A=P:w.sibling=P,w=P,M=E}if(S.done)return n(d,M),ht&&Tr(d,R),A;if(M===null){for(;!S.done;R++,S=g.next())S=h(d,S.value,x),S!==null&&(m=s(S,m,R),w===null?A=S:w.sibling=S,w=S);return ht&&Tr(d,R),A}for(M=i(d,M);!S.done;R++,S=g.next())S=p(M,d,R,S.value,x),S!==null&&(t&&S.alternate!==null&&M.delete(S.key===null?R:S.key),m=s(S,m,R),w===null?A=S:w.sibling=S,w=S);return t&&M.forEach(function(G){return e(d,G)}),ht&&Tr(d,R),A}function v(d,m,g,x){if(typeof g=="object"&&g!==null&&g.type===ys&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ca:e:{for(var A=g.key,w=m;w!==null;){if(w.key===A){if(A=g.type,A===ys){if(w.tag===7){n(d,w.sibling),m=r(w,g.props.children),m.return=d,d=m;break e}}else if(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Xi&&Yp(A)===w.type){n(d,w.sibling),m=r(w,g.props),m.ref=mo(d,w,g),m.return=d,d=m;break e}n(d,w);break}else e(d,w);w=w.sibling}g.type===ys?(m=Or(g.props.children,d.mode,x,g.key),m.return=d,d=m):(x=Ol(g.type,g.key,g.props,null,d.mode,x),x.ref=mo(d,m,g),x.return=d,d=x)}return o(d);case xs:e:{for(w=g.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(d,m.sibling),m=r(m,g.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else e(d,m);m=m.sibling}m=wu(g,d.mode,x),m.return=d,d=m}return o(d);case Xi:return w=g._init,v(d,m,w(g._payload),x)}if(Do(g))return _(d,m,g,x);if(co(g))return y(d,m,g,x);Oa(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(d,m.sibling),m=r(m,g),m.return=d,d=m):(n(d,m),m=Eu(g,d.mode,x),m.return=d,d=m),o(d)):n(d,m)}return v}var $s=Jg(!0),ev=Jg(!1),sc=mr(null),oc=null,Rs=null,dh=null;function fh(){dh=Rs=oc=null}function hh(t){var e=sc.current;dt(sc),t._currentValue=e}function Hd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){oc=t,dh=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(dh!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(oc===null)throw Error(re(308));Rs=t,oc.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var Dr=null;function ph(t){Dr===null?Dr=[t]:Dr.push(t)}function tv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ph(e)):(n.next=r.next,r.next=n),e.interleaved=n,Di(t,i)}function Di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $i=!1;function mh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Di(t,n)}return r=i.interleaved,r===null?(e.next=e,ph(i)):(e.next=r.next,r.next=e),i.interleaved=e,Di(t,n)}function Dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,eh(t,n)}}function qp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ac(t,e,n,i){var r=t.updateQueue;$i=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(f=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(p,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(p,h,f):_,f==null)break e;h=_t({},h,f);break e;case 2:$i=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Vr|=o,t.lanes=o,t.memoizedState=h}}function Kp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var ya={},ui=mr(ya),aa=mr(ya),la=mr(ya);function Ir(t){if(t===ya)throw Error(re(174));return t}function gh(t,e){switch(lt(la,e),lt(aa,t),lt(ui,ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sd(e,t)}dt(ui),lt(ui,e)}function Ys(){dt(ui),dt(aa),dt(la)}function iv(t){Ir(la.current);var e=Ir(ui.current),n=Sd(e,t.type);e!==n&&(lt(aa,t),lt(ui,n))}function vh(t){aa.current===t&&(dt(ui),dt(aa))}var gt=mr(0);function lc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vu=[];function _h(){for(var t=0;t<vu.length;t++)vu[t]._workInProgressVersionPrimary=null;vu.length=0}var Il=Ui.ReactCurrentDispatcher,_u=Ui.ReactCurrentBatchConfig,Hr=0,vt=null,Lt=null,kt=null,cc=!1,Vo=!1,ca=0,Hy=0;function Xt(){throw Error(re(321))}function xh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function yh(t,e,n,i,r,s){if(Hr=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Il.current=t===null||t.memoizedState===null?jy:Xy,t=n(i,r),Vo){s=0;do{if(Vo=!1,ca=0,25<=s)throw Error(re(301));s+=1,kt=Lt=null,e.updateQueue=null,Il.current=$y,t=n(i,r)}while(Vo)}if(Il.current=uc,e=Lt!==null&&Lt.next!==null,Hr=0,kt=Lt=vt=null,cc=!1,e)throw Error(re(300));return t}function Sh(){var t=ca!==0;return ca=0,t}function ri(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?vt.memoizedState=kt=t:kt=kt.next=t,kt}function zn(){if(Lt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=kt===null?vt.memoizedState:kt.next;if(e!==null)kt=e,Lt=t;else{if(t===null)throw Error(re(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},kt===null?vt.memoizedState=kt=t:kt=kt.next=t}return kt}function ua(t,e){return typeof e=="function"?e(t):e}function xu(t){var e=zn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Hr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,vt.lanes|=u,Vr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ei(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,vt.lanes|=s,Vr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yu(t){var e=zn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ei(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function rv(){}function sv(t,e){var n=vt,i=zn(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,Mh(lv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,da(9,av.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(re(349));Hr&30||ov(n,e,r)}return r}function ov(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function av(t,e,n,i){e.value=n,e.getSnapshot=i,cv(e)&&uv(t)}function lv(t,e,n){return n(function(){cv(e)&&uv(t)})}function cv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function uv(t){var e=Di(t,1);e!==null&&Qn(e,t,1,-1)}function Zp(t){var e=ri();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},e.queue=t,t=t.dispatch=Wy.bind(null,vt,t),[e.memoizedState,t]}function da(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function dv(){return zn().memoizedState}function Nl(t,e,n,i){var r=ri();vt.flags|=t,r.memoizedState=da(1|e,n,void 0,i===void 0?null:i)}function Uc(t,e,n,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var o=Lt.memoizedState;if(s=o.destroy,i!==null&&xh(i,o.deps)){r.memoizedState=da(e,n,s,i);return}}vt.flags|=t,r.memoizedState=da(1|e,n,s,i)}function Qp(t,e){return Nl(8390656,8,t,e)}function Mh(t,e){return Uc(2048,8,t,e)}function fv(t,e){return Uc(4,2,t,e)}function hv(t,e){return Uc(4,4,t,e)}function pv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mv(t,e,n){return n=n!=null?n.concat([t]):null,Uc(4,4,pv.bind(null,e,t),n)}function Eh(){}function gv(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function vv(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function _v(t,e,n){return Hr&21?(ei(n,e)||(n=Eg(),vt.lanes|=n,Vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function Vy(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=_u.transition;_u.transition={};try{t(!1),e()}finally{st=n,_u.transition=i}}function xv(){return zn().memoizedState}function Gy(t,e,n){var i=or(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},yv(t))Sv(e,n);else if(n=tv(t,e,n,i),n!==null){var r=rn();Qn(n,t,i,r),Mv(n,e,i)}}function Wy(t,e,n){var i=or(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(yv(t))Sv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ei(a,o)){var l=e.interleaved;l===null?(r.next=r,ph(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=tv(t,e,r,i),n!==null&&(r=rn(),Qn(n,t,i,r),Mv(n,e,i))}}function yv(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function Sv(t,e){Vo=cc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Mv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,eh(t,n)}}var uc={readContext:On,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},jy={readContext:On,useCallback:function(t,e){return ri().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:Qp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,pv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=ri();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ri();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Gy.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=ri();return t={current:t},e.memoizedState=t},useState:Zp,useDebugValue:Eh,useDeferredValue:function(t){return ri().memoizedState=t},useTransition:function(){var t=Zp(!1),e=t[0];return t=Vy.bind(null,t[1]),ri().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=ri();if(ht){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),zt===null)throw Error(re(349));Hr&30||ov(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Qp(lv.bind(null,i,s,t),[t]),i.flags|=2048,da(9,av.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ri(),e=zt.identifierPrefix;if(ht){var n=Ti,i=wi;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Hy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Xy={readContext:On,useCallback:gv,useContext:On,useEffect:Mh,useImperativeHandle:mv,useInsertionEffect:fv,useLayoutEffect:hv,useMemo:vv,useReducer:xu,useRef:dv,useState:function(){return xu(ua)},useDebugValue:Eh,useDeferredValue:function(t){var e=zn();return _v(e,Lt.memoizedState,t)},useTransition:function(){var t=xu(ua)[0],e=zn().memoizedState;return[t,e]},useMutableSource:rv,useSyncExternalStore:sv,useId:xv,unstable_isNewReconciler:!1},$y={readContext:On,useCallback:gv,useContext:On,useEffect:Mh,useImperativeHandle:mv,useInsertionEffect:fv,useLayoutEffect:hv,useMemo:vv,useReducer:yu,useRef:dv,useState:function(){return yu(ua)},useDebugValue:Eh,useDeferredValue:function(t){var e=zn();return Lt===null?e.memoizedState=t:_v(e,Lt.memoizedState,t)},useTransition:function(){var t=yu(ua)[0],e=zn().memoizedState;return[t,e]},useMutableSource:rv,useSyncExternalStore:sv,useId:xv,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fc={isMounted:function(t){return(t=t._reactInternals)?$r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=or(t),s=Ri(i,r);s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,r),e!==null&&(Qn(e,t,r,i),Dl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=or(t),s=Ri(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,r),e!==null&&(Qn(e,t,r,i),Dl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=or(t),r=Ri(n,i);r.tag=2,e!=null&&(r.callback=e),e=rr(t,r,i),e!==null&&(Qn(e,t,i,n),Dl(e,t,i))}};function Jp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ia(n,i)||!ia(r,s):!0}function Ev(t,e,n){var i=!1,r=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=On(s):(r=dn(e)?zr:Qt.current,i=e.contextTypes,s=(i=i!=null)?js(t,r):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function em(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Fc.enqueueReplaceState(e,e.state,null)}function Gd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},mh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=On(s):(s=dn(e)?zr:Qt.current,r.context=js(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Fc.enqueueReplaceState(r,r.state,null),ac(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function qs(t,e){try{var n="",i=e;do n+=Sx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Su(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Yy=typeof WeakMap=="function"?WeakMap:Map;function wv(t,e,n){n=Ri(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){fc||(fc=!0,ef=i),Wd(t,e)},n}function Tv(t,e,n){n=Ri(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Wd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wd(t,e),typeof i!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function tm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Yy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=lS.bind(null,t,e,n),e.then(t,t))}function nm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function im(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ri(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var qy=Ui.ReactCurrentOwner,cn=!1;function nn(t,e,n,i){e.child=t===null?ev(e,null,n,i):$s(e,t.child,n,i)}function rm(t,e,n,i,r){n=n.render;var s=e.ref;return Fs(e,r),i=yh(t,e,n,i,s,r),n=Sh(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(ht&&n&&lh(e),e.flags|=1,nn(t,e,i,r),e.child)}function sm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Lh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Av(t,e,s,i,r)):(t=Ol(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ia,n(o,i)&&t.ref===e.ref)return Ii(t,e,r)}return e.flags|=1,t=ar(s,i),t.ref=e.ref,t.return=e,e.child=t}function Av(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ia(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Ii(t,e,r)}return jd(t,e,n,i,r)}function Cv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(Ps,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(Ps,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(Ps,Sn),Sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(Ps,Sn),Sn|=i;return nn(t,e,r,n),e.child}function Rv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jd(t,e,n,i,r){var s=dn(n)?zr:Qt.current;return s=js(e,s),Fs(e,r),n=yh(t,e,n,i,s,r),i=Sh(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(ht&&i&&lh(e),e.flags|=1,nn(t,e,n,r),e.child)}function om(t,e,n,i,r){if(dn(n)){var s=!0;nc(e)}else s=!1;if(Fs(e,r),e.stateNode===null)Ul(t,e),Ev(e,n,i),Gd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=On(c):(c=dn(n)?zr:Qt.current,c=js(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&em(e,o,i,c),$i=!1;var f=e.memoizedState;o.state=f,ac(e,i,o,r),l=e.memoizedState,a!==i||f!==l||un.current||$i?(typeof u=="function"&&(Vd(e,n,u,i),l=e.memoizedState),(a=$i||Jp(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,nv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:jn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=On(l):(l=dn(n)?zr:Qt.current,l=js(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&em(e,o,i,l),$i=!1,f=e.memoizedState,o.state=f,ac(e,i,o,r);var _=e.memoizedState;a!==h||f!==_||un.current||$i?(typeof p=="function"&&(Vd(e,n,p,i),_=e.memoizedState),(c=$i||Jp(e,n,c,i,f,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Xd(t,e,n,i,s,r)}function Xd(t,e,n,i,r,s){Rv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&jp(e,n,!1),Ii(t,e,s);i=e.stateNode,qy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=$s(e,t.child,null,s),e.child=$s(e,null,a,s)):nn(t,e,a,s),e.memoizedState=i.state,r&&jp(e,n,!0),e.child}function bv(t){var e=t.stateNode;e.pendingContext?Wp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wp(t,e.context,!1),gh(t,e.containerInfo)}function am(t,e,n,i,r){return Xs(),uh(r),e.flags|=256,nn(t,e,n,i),e.child}var $d={dehydrated:null,treeContext:null,retryLane:0};function Yd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Pv(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(gt,r&1),t===null)return Bd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zc(o,i,0,null),t=Or(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yd(n),e.memoizedState=$d,t):wh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ky(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ar(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ar(a,s):(s=Or(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Yd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$d,i}return s=t.child,t=s.sibling,i=ar(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function wh(t,e){return e=zc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function za(t,e,n,i){return i!==null&&uh(i),$s(e,t.child,null,n),t=wh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ky(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Su(Error(re(422))),za(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=zc({mode:"visible",children:i.children},r,0,null),s=Or(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&$s(e,t.child,null,o),e.child.memoizedState=Yd(o),e.memoizedState=$d,s);if(!(e.mode&1))return za(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=Su(s,i,void 0),za(t,e,o,i)}if(a=(o&t.childLanes)!==0,cn||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Di(t,r),Qn(i,t,r,-1))}return Ph(),i=Su(Error(re(421))),za(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=cS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Mn=ir(r.nextSibling),En=e,ht=!0,$n=null,t!==null&&(bn[Pn++]=wi,bn[Pn++]=Ti,bn[Pn++]=Br,wi=t.id,Ti=t.overflow,Br=e),e=wh(e,i.children),e.flags|=4096,e)}function lm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Hd(t.return,e,n)}function Mu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Lv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lm(t,n,e);else if(t.tag===19)lm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&lc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Mu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&lc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Mu(e,!0,n,null,s);break;case"together":Mu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ii(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Zy(t,e,n){switch(e.tag){case 3:bv(e),Xs();break;case 5:iv(e);break;case 1:dn(e.type)&&nc(e);break;case 4:gh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(sc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?Pv(t,e,n):(lt(gt,gt.current&1),t=Ii(t,e,n),t!==null?t.sibling:null);lt(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Lv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,Cv(t,e,n)}return Ii(t,e,n)}var Dv,qd,Iv,Nv;Dv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qd=function(){};Iv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ir(ui.current);var s=null;switch(n){case"input":r=vd(t,r),i=vd(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=yd(t,r),i=yd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ec)}Md(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ko.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ko.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ct("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Nv=function(t,e,n,i){n!==i&&(e.flags|=4)};function go(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Qy(t,e,n){var i=e.pendingProps;switch(ch(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return dn(e.type)&&tc(),$t(e),null;case 3:return i=e.stateNode,Ys(),dt(un),dt(Qt),_h(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ka(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(rf($n),$n=null))),qd(t,e),$t(e),null;case 5:vh(e);var r=Ir(la.current);if(n=e.type,t!==null&&e.stateNode!=null)Iv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return $t(e),null}if(t=Ir(ui.current),ka(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[li]=e,i[oa]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<No.length;r++)ct(No[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":vp(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":xp(i,s),ct("invalid",i)}Md(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Fa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Fa(i.textContent,a,t),r=["children",""+a]):Ko.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ct("scroll",i)}switch(n){case"input":Ra(i),_p(i,s,!0);break;case"textarea":Ra(i),yp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ec)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[li]=e,t[oa]=i,Dv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ed(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<No.length;r++)ct(No[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":vp(t,i),r=vd(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ct("invalid",t);break;case"textarea":xp(t,i),r=yd(t,i),ct("invalid",t);break;default:r=i}Md(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?dg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&cg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Zo(t,l):typeof l=="number"&&Zo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ko.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&Yf(t,s,l,o))}switch(n){case"input":Ra(t),_p(t,i,!1);break;case"textarea":Ra(t),yp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ur(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ec)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)Nv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Ir(la.current),Ir(ui.current),ka(e)){if(i=e.stateNode,n=e.memoizedProps,i[li]=e,(s=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:Fa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return $t(e),null;case 13:if(dt(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&Mn!==null&&e.mode&1&&!(e.flags&128))Qg(),Xs(),e.flags|=98560,s=!1;else if(s=ka(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[li]=e}else Xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else $n!==null&&(rf($n),$n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?It===0&&(It=3):Ph())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return Ys(),qd(t,e),t===null&&ra(e.stateNode.containerInfo),$t(e),null;case 10:return hh(e.type._context),$t(e),null;case 17:return dn(e.type)&&tc(),$t(e),null;case 19:if(dt(gt),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)go(s,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=lc(t),o!==null){for(e.flags|=128,go(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&wt()>Ks&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304)}else{if(!i)if(t=lc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return $t(e),null}else 2*wt()-s.renderingStartTime>Ks&&n!==1073741824&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,n=gt.current,lt(gt,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return bh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function Jy(t,e){switch(ch(e),e.tag){case 1:return dn(e.type)&&tc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ys(),dt(un),dt(Qt),_h(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vh(e),null;case 13:if(dt(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(gt),null;case 4:return Ys(),null;case 10:return hh(e.type._context),null;case 22:case 23:return bh(),null;case 24:return null;default:return null}}var Ba=!1,Zt=!1,eS=typeof WeakSet=="function"?WeakSet:Set,ge=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function Kd(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var cm=!1;function tS(t,e){if(Id=Zl,t=zg(),ah(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nd={focusedElem:t,selectionRange:n},Zl=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,v=_.memoizedState,d=e.stateNode,m=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:jn(e.type,y),v);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(x){Mt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return _=cm,cm=!1,_}function Go(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Kd(e,n,s)}r=r.next}while(r!==i)}}function kc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Zd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Uv(t){var e=t.alternate;e!==null&&(t.alternate=null,Uv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[li],delete e[oa],delete e[kd],delete e[ky],delete e[Oy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fv(t){return t.tag===5||t.tag===3||t.tag===4}function um(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ec));else if(i!==4&&(t=t.child,t!==null))for(Qd(t,e,n),t=t.sibling;t!==null;)Qd(t,e,n),t=t.sibling}function Jd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Jd(t,e,n),t=t.sibling;t!==null;)Jd(t,e,n),t=t.sibling}var Vt=null,Xn=!1;function Oi(t,e,n){for(n=n.child;n!==null;)kv(t,e,n),n=n.sibling}function kv(t,e,n){if(ci&&typeof ci.onCommitFiberUnmount=="function")try{ci.onCommitFiberUnmount(bc,n)}catch{}switch(n.tag){case 5:Zt||bs(n,e);case 6:var i=Vt,r=Xn;Vt=null,Oi(t,e,n),Vt=i,Xn=r,Vt!==null&&(Xn?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(Xn?(t=Vt,n=n.stateNode,t.nodeType===8?mu(t.parentNode,n):t.nodeType===1&&mu(t,n),ta(t)):mu(Vt,n.stateNode));break;case 4:i=Vt,r=Xn,Vt=n.stateNode.containerInfo,Xn=!0,Oi(t,e,n),Vt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kd(n,e,o),r=r.next}while(r!==i)}Oi(t,e,n);break;case 1:if(!Zt&&(bs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Mt(n,e,a)}Oi(t,e,n);break;case 21:Oi(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Oi(t,e,n),Zt=i):Oi(t,e,n);break;default:Oi(t,e,n)}}function dm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new eS),e.forEach(function(i){var r=uS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,Xn=!1;break e;case 3:Vt=a.stateNode.containerInfo,Xn=!0;break e;case 4:Vt=a.stateNode.containerInfo,Xn=!0;break e}a=a.return}if(Vt===null)throw Error(re(160));kv(s,o,r),Vt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ov(e,t),e=e.sibling}function Ov(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),ii(t),i&4){try{Go(3,t,t.return),kc(3,t)}catch(y){Mt(t,t.return,y)}try{Go(5,t,t.return)}catch(y){Mt(t,t.return,y)}}break;case 1:Hn(e,t),ii(t),i&512&&n!==null&&bs(n,n.return);break;case 5:if(Hn(e,t),ii(t),i&512&&n!==null&&bs(n,n.return),t.flags&32){var r=t.stateNode;try{Zo(r,"")}catch(y){Mt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&og(r,s),Ed(a,o);var c=Ed(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?dg(r,h):u==="dangerouslySetInnerHTML"?cg(r,h):u==="children"?Zo(r,h):Yf(r,u,h,c)}switch(a){case"input":_d(r,s);break;case"textarea":ag(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ds(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ds(r,!!s.multiple,s.defaultValue,!0):Ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[oa]=s}catch(y){Mt(t,t.return,y)}}break;case 6:if(Hn(e,t),ii(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Mt(t,t.return,y)}}break;case 3:if(Hn(e,t),ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(e.containerInfo)}catch(y){Mt(t,t.return,y)}break;case 4:Hn(e,t),ii(t);break;case 13:Hn(e,t),ii(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ch=wt())),i&4&&dm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(c=Zt)||u,Hn(e,t),Zt=c):Hn(e,t),ii(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ge=t,u=t.child;u!==null;){for(h=ge=u;ge!==null;){switch(f=ge,p=f.child,f.tag){case 0:case 11:case 14:case 15:Go(4,f,f.return);break;case 1:bs(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){Mt(i,n,y)}}break;case 5:bs(f,f.return);break;case 22:if(f.memoizedState!==null){hm(h);continue}}p!==null?(p.return=f,ge=p):hm(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ug("display",o))}catch(y){Mt(t,t.return,y)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){Mt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Hn(e,t),ii(t),i&4&&dm(t);break;case 21:break;default:Hn(e,t),ii(t)}}function ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Fv(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Zo(r,""),i.flags&=-33);var s=um(t);Jd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=um(t);Qd(t,a,o);break;default:throw Error(re(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nS(t,e,n){ge=t,zv(t)}function zv(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ba;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zt;a=Ba;var c=Zt;if(Ba=o,(Zt=l)&&!c)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?pm(r):l!==null?(l.return=o,ge=l):pm(r);for(;s!==null;)ge=s,zv(s),s=s.sibling;ge=r,Ba=a,Zt=c}fm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):fm(t)}}function fm(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||kc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Kp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Kp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&ta(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Zt||e.flags&512&&Zd(e)}catch(f){Mt(e,e.return,f)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function hm(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function pm(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kc(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{Zd(e)}catch(l){Mt(e,s,l)}break;case 5:var o=e.return;try{Zd(e)}catch(l){Mt(e,o,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var iS=Math.ceil,dc=Ui.ReactCurrentDispatcher,Th=Ui.ReactCurrentOwner,kn=Ui.ReactCurrentBatchConfig,Ke=0,zt=null,Rt=null,Wt=0,Sn=0,Ps=mr(0),It=0,fa=null,Vr=0,Oc=0,Ah=0,Wo=null,ln=null,Ch=0,Ks=1/0,Si=null,fc=!1,ef=null,sr=null,Ha=!1,Qi=null,hc=0,jo=0,tf=null,Fl=-1,kl=0;function rn(){return Ke&6?wt():Fl!==-1?Fl:Fl=wt()}function or(t){return t.mode&1?Ke&2&&Wt!==0?Wt&-Wt:By.transition!==null?(kl===0&&(kl=Eg()),kl):(t=st,t!==0||(t=window.event,t=t===void 0?16:Pg(t.type)),t):1}function Qn(t,e,n,i){if(50<jo)throw jo=0,tf=null,Error(re(185));va(t,n,i),(!(Ke&2)||t!==zt)&&(t===zt&&(!(Ke&2)&&(Oc|=n),It===4&&qi(t,Wt)),fn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Ks=wt()+500,Nc&&gr()))}function fn(t,e){var n=t.callbackNode;Bx(t,e);var i=Kl(t,t===zt?Wt:0);if(i===0)n!==null&&Ep(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ep(n),e===1)t.tag===0?zy(mm.bind(null,t)):qg(mm.bind(null,t)),Uy(function(){!(Ke&6)&&gr()}),n=null;else{switch(wg(i)){case 1:n=Jf;break;case 4:n=Sg;break;case 16:n=ql;break;case 536870912:n=Mg;break;default:n=ql}n=$v(n,Bv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Bv(t,e){if(Fl=-1,kl=0,Ke&6)throw Error(re(327));var n=t.callbackNode;if(ks()&&t.callbackNode!==n)return null;var i=Kl(t,t===zt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=pc(t,i);else{e=i;var r=Ke;Ke|=2;var s=Vv();(zt!==t||Wt!==e)&&(Si=null,Ks=wt()+500,kr(t,e));do try{oS();break}catch(a){Hv(t,a)}while(!0);fh(),dc.current=s,Ke=r,Rt!==null?e=0:(zt=null,Wt=0,e=It)}if(e!==0){if(e===2&&(r=Rd(t),r!==0&&(i=r,e=nf(t,r))),e===1)throw n=fa,kr(t,0),qi(t,i),fn(t,wt()),n;if(e===6)qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!rS(r)&&(e=pc(t,i),e===2&&(s=Rd(t),s!==0&&(i=s,e=nf(t,s))),e===1))throw n=fa,kr(t,0),qi(t,i),fn(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Ar(t,ln,Si);break;case 3:if(qi(t,i),(i&130023424)===i&&(e=Ch+500-wt(),10<e)){if(Kl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Fd(Ar.bind(null,t,ln,Si),e);break}Ar(t,ln,Si);break;case 4:if(qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*iS(i/1960))-i,10<i){t.timeoutHandle=Fd(Ar.bind(null,t,ln,Si),i);break}Ar(t,ln,Si);break;case 5:Ar(t,ln,Si);break;default:throw Error(re(329))}}}return fn(t,wt()),t.callbackNode===n?Bv.bind(null,t):null}function nf(t,e){var n=Wo;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=pc(t,e),t!==2&&(e=ln,ln=n,e!==null&&rf(e)),t}function rf(t){ln===null?ln=t:ln.push.apply(ln,t)}function rS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qi(t,e){for(e&=~Ah,e&=~Oc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),i=1<<n;t[n]=-1,e&=~i}}function mm(t){if(Ke&6)throw Error(re(327));ks();var e=Kl(t,0);if(!(e&1))return fn(t,wt()),null;var n=pc(t,e);if(t.tag!==0&&n===2){var i=Rd(t);i!==0&&(e=i,n=nf(t,i))}if(n===1)throw n=fa,kr(t,0),qi(t,e),fn(t,wt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,ln,Si),fn(t,wt()),null}function Rh(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Ks=wt()+500,Nc&&gr())}}function Gr(t){Qi!==null&&Qi.tag===0&&!(Ke&6)&&ks();var e=Ke;Ke|=1;var n=kn.transition,i=st;try{if(kn.transition=null,st=1,t)return t()}finally{st=i,kn.transition=n,Ke=e,!(Ke&6)&&gr()}}function bh(){Sn=Ps.current,dt(Ps)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ny(n)),Rt!==null)for(n=Rt.return;n!==null;){var i=n;switch(ch(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&tc();break;case 3:Ys(),dt(un),dt(Qt),_h();break;case 5:vh(i);break;case 4:Ys();break;case 13:dt(gt);break;case 19:dt(gt);break;case 10:hh(i.type._context);break;case 22:case 23:bh()}n=n.return}if(zt=t,Rt=t=ar(t.current,null),Wt=Sn=e,It=0,fa=null,Ah=Oc=Vr=0,ln=Wo=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Dr=null}return t}function Hv(t,e){do{var n=Rt;try{if(fh(),Il.current=uc,cc){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}cc=!1}if(Hr=0,kt=Lt=vt=null,Vo=!1,ca=0,Th.current=null,n===null||n.return===null){It=1,fa=e,Rt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=nm(o);if(p!==null){p.flags&=-257,im(p,o,a,s,e),p.mode&1&&tm(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){tm(s,c,e),Ph();break e}l=Error(re(426))}}else if(ht&&a.mode&1){var v=nm(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),im(v,o,a,s,e),uh(qs(l,a));break e}}s=l=qs(l,a),It!==4&&(It=2),Wo===null?Wo=[s]:Wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=wv(s,l,e);qp(s,d);break e;case 1:a=l;var m=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(sr===null||!sr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Tv(s,a,e);qp(s,x);break e}}s=s.return}while(s!==null)}Wv(n)}catch(A){e=A,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function Vv(){var t=dc.current;return dc.current=uc,t===null?uc:t}function Ph(){(It===0||It===3||It===2)&&(It=4),zt===null||!(Vr&268435455)&&!(Oc&268435455)||qi(zt,Wt)}function pc(t,e){var n=Ke;Ke|=2;var i=Vv();(zt!==t||Wt!==e)&&(Si=null,kr(t,e));do try{sS();break}catch(r){Hv(t,r)}while(!0);if(fh(),Ke=n,dc.current=i,Rt!==null)throw Error(re(261));return zt=null,Wt=0,It}function sS(){for(;Rt!==null;)Gv(Rt)}function oS(){for(;Rt!==null&&!Lx();)Gv(Rt)}function Gv(t){var e=Xv(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?Wv(t):Rt=e,Th.current=null}function Wv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Jy(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,Rt=null;return}}else if(n=Qy(n,e,Sn),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);It===0&&(It=5)}function Ar(t,e,n){var i=st,r=kn.transition;try{kn.transition=null,st=1,aS(t,e,n,i)}finally{kn.transition=r,st=i}return null}function aS(t,e,n,i){do ks();while(Qi!==null);if(Ke&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Hx(t,s),t===zt&&(Rt=zt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ha||(Ha=!0,$v(ql,function(){return ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var o=st;st=1;var a=Ke;Ke|=4,Th.current=null,tS(t,n),Ov(n,t),Cy(Nd),Zl=!!Id,Nd=Id=null,t.current=n,nS(n),Dx(),Ke=a,st=o,kn.transition=s}else t.current=n;if(Ha&&(Ha=!1,Qi=t,hc=r),s=t.pendingLanes,s===0&&(sr=null),Ux(n.stateNode),fn(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(fc)throw fc=!1,t=ef,ef=null,t;return hc&1&&t.tag!==0&&ks(),s=t.pendingLanes,s&1?t===tf?jo++:(jo=0,tf=t):jo=0,gr(),null}function ks(){if(Qi!==null){var t=wg(hc),e=kn.transition,n=st;try{if(kn.transition=null,st=16>t?16:t,Qi===null)var i=!1;else{if(t=Qi,Qi=null,hc=0,Ke&6)throw Error(re(331));var r=Ke;for(Ke|=4,ge=t.current;ge!==null;){var s=ge,o=s.child;if(ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ge=c;ge!==null;){var u=ge;switch(u.tag){case 0:case 11:case 15:Go(8,u,s)}var h=u.child;if(h!==null)h.return=u,ge=h;else for(;ge!==null;){u=ge;var f=u.sibling,p=u.return;if(Uv(u),u===c){ge=null;break}if(f!==null){f.return=p,ge=f;break}ge=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Go(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ge=d;break e}ge=s.return}}var m=t.current;for(ge=m;ge!==null;){o=ge;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,ge=g;else e:for(o=m;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:kc(9,a)}}catch(A){Mt(a,a.return,A)}if(a===o){ge=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,ge=x;break e}ge=a.return}}if(Ke=r,gr(),ci&&typeof ci.onPostCommitFiberRoot=="function")try{ci.onPostCommitFiberRoot(bc,t)}catch{}i=!0}return i}finally{st=n,kn.transition=e}}return!1}function gm(t,e,n){e=qs(n,e),e=wv(t,e,1),t=rr(t,e,1),e=rn(),t!==null&&(va(t,1,e),fn(t,e))}function Mt(t,e,n){if(t.tag===3)gm(t,t,n);else for(;e!==null;){if(e.tag===3){gm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(sr===null||!sr.has(i))){t=qs(n,t),t=Tv(e,t,1),e=rr(e,t,1),t=rn(),e!==null&&(va(e,1,t),fn(e,t));break}}e=e.return}}function lS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Wt&n)===n&&(It===4||It===3&&(Wt&130023424)===Wt&&500>wt()-Ch?kr(t,0):Ah|=n),fn(t,e)}function jv(t,e){e===0&&(t.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=rn();t=Di(t,e),t!==null&&(va(t,e,n),fn(t,n))}function cS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jv(t,n)}function uS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),jv(t,n)}var Xv;Xv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,Zy(t,e,n);cn=!!(t.flags&131072)}else cn=!1,ht&&e.flags&1048576&&Kg(e,rc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ul(t,e),t=e.pendingProps;var r=js(e,Qt.current);Fs(e,n),r=yh(null,e,i,t,r,n);var s=Sh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(s=!0,nc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,mh(e),r.updater=Fc,e.stateNode=r,r._reactInternals=e,Gd(e,i,t,n),e=Xd(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&lh(e),nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=fS(i),t=jn(i,t),r){case 0:e=jd(null,e,i,t,n);break e;case 1:e=om(null,e,i,t,n);break e;case 11:e=rm(null,e,i,t,n);break e;case 14:e=sm(null,e,i,jn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),jd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),om(t,e,i,r,n);case 3:e:{if(bv(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,nv(t,e),ac(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=qs(Error(re(423)),e),e=am(t,e,i,n,r);break e}else if(i!==r){r=qs(Error(re(424)),e),e=am(t,e,i,n,r);break e}else for(Mn=ir(e.stateNode.containerInfo.firstChild),En=e,ht=!0,$n=null,n=ev(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xs(),i===r){e=Ii(t,e,n);break e}nn(t,e,i,n)}e=e.child}return e;case 5:return iv(e),t===null&&Bd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Ud(i,r)?o=null:s!==null&&Ud(i,s)&&(e.flags|=32),Rv(t,e),nn(t,e,o,n),e.child;case 6:return t===null&&Bd(e),null;case 13:return Pv(t,e,n);case 4:return gh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=$s(e,null,i,n):nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),rm(t,e,i,r,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(sc,i._currentValue),i._currentValue=o,s!==null)if(ei(s.value,o)){if(s.children===r.children&&!un.current){e=Ii(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ri(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Hd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Hd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Fs(e,n),r=On(r),i=i(r),e.flags|=1,nn(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),sm(t,e,i,r,n);case 15:return Av(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Ul(t,e),e.tag=1,dn(i)?(t=!0,nc(e)):t=!1,Fs(e,n),Ev(e,i,r),Gd(e,i,r,n),Xd(null,e,i,!0,t,n);case 19:return Lv(t,e,n);case 22:return Cv(t,e,n)}throw Error(re(156,e.tag))};function $v(t,e){return yg(t,e)}function dS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new dS(t,e,n,i)}function Lh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fS(t){if(typeof t=="function")return Lh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kf)return 11;if(t===Zf)return 14}return 2}function ar(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Lh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ys:return Or(n.children,r,s,e);case qf:o=8,r|=8;break;case hd:return t=Un(12,n,e,r|2),t.elementType=hd,t.lanes=s,t;case pd:return t=Un(13,n,e,r),t.elementType=pd,t.lanes=s,t;case md:return t=Un(19,n,e,r),t.elementType=md,t.lanes=s,t;case ig:return zc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tg:o=10;break e;case ng:o=9;break e;case Kf:o=11;break e;case Zf:o=14;break e;case Xi:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Un(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Or(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function zc(t,e,n,i){return t=Un(22,t,i,e),t.elementType=ig,t.lanes=n,t.stateNode={isHidden:!1},t}function Eu(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function wu(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ru(0),this.expirationTimes=ru(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ru(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Dh(t,e,n,i,r,s,o,a,l){return t=new hS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mh(s),t}function pS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Yv(t){if(!t)return dr;t=t._reactInternals;e:{if($r(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(dn(n))return Yg(t,n,e)}return e}function qv(t,e,n,i,r,s,o,a,l){return t=Dh(n,i,!0,t,r,s,o,a,l),t.context=Yv(null),n=t.current,i=rn(),r=or(n),s=Ri(i,r),s.callback=e??null,rr(n,s,r),t.current.lanes=r,va(t,r,i),fn(t,i),t}function Bc(t,e,n,i){var r=e.current,s=rn(),o=or(r);return n=Yv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ri(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=rr(r,e,o),t!==null&&(Qn(t,r,o,s),Dl(t,r,o)),o}function mc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ih(t,e){vm(t,e),(t=t.alternate)&&vm(t,e)}function mS(){return null}var Kv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nh(t){this._internalRoot=t}Hc.prototype.render=Nh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Bc(t,e,null,null)};Hc.prototype.unmount=Nh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){Bc(null,t,null,null)}),e[Li]=null}};function Hc(t){this._internalRoot=t}Hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yi.length&&e!==0&&e<Yi[n].priority;n++);Yi.splice(n,0,t),n===0&&bg(t)}};function Uh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _m(){}function gS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=mc(o);s.call(c)}}var o=qv(e,i,t,0,null,!1,!1,"",_m);return t._reactRootContainer=o,t[Li]=o.current,ra(t.nodeType===8?t.parentNode:t),Gr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=mc(l);a.call(c)}}var l=Dh(t,0,!1,null,null,!1,!1,"",_m);return t._reactRootContainer=l,t[Li]=l.current,ra(t.nodeType===8?t.parentNode:t),Gr(function(){Bc(e,l,n,i)}),l}function Gc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=mc(o);a.call(l)}}Bc(e,o,t,r)}else o=gS(n,e,t,r,i);return mc(o)}Tg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Io(e.pendingLanes);n!==0&&(eh(e,n|1),fn(e,wt()),!(Ke&6)&&(Ks=wt()+500,gr()))}break;case 13:Gr(function(){var i=Di(t,1);if(i!==null){var r=rn();Qn(i,t,1,r)}}),Ih(t,1)}};th=function(t){if(t.tag===13){var e=Di(t,134217728);if(e!==null){var n=rn();Qn(e,t,134217728,n)}Ih(t,134217728)}};Ag=function(t){if(t.tag===13){var e=or(t),n=Di(t,e);if(n!==null){var i=rn();Qn(n,t,e,i)}Ih(t,e)}};Cg=function(){return st};Rg=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};Td=function(t,e,n){switch(e){case"input":if(_d(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ic(i);if(!r)throw Error(re(90));sg(i),_d(i,r)}}}break;case"textarea":ag(t,n);break;case"select":e=n.value,e!=null&&Ds(t,!!n.multiple,e,!1)}};pg=Rh;mg=Gr;var vS={usingClientEntryPoint:!1,Events:[xa,ws,Ic,fg,hg,Rh]},vo={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_S={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_g(t),t===null?null:t.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||mS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Va.isDisabled&&Va.supportsFiber)try{bc=Va.inject(_S),ci=Va}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vS;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uh(e))throw Error(re(200));return pS(t,e,null,n)};Tn.createRoot=function(t,e){if(!Uh(t))throw Error(re(299));var n=!1,i="",r=Kv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Dh(t,1,!1,null,null,n,!1,i,r),t[Li]=e.current,ra(t.nodeType===8?t.parentNode:t),new Nh(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=_g(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return Gr(t)};Tn.hydrate=function(t,e,n){if(!Vc(e))throw Error(re(200));return Gc(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!Uh(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Kv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qv(e,null,t,1,n??null,r,!1,s,o),t[Li]=e.current,ra(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Hc(e)};Tn.render=function(t,e,n){if(!Vc(e))throw Error(re(200));return Gc(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!Vc(t))throw Error(re(40));return t._reactRootContainer?(Gr(function(){Gc(null,null,t,!1,function(){t._reactRootContainer=null,t[Li]=null})}),!0):!1};Tn.unstable_batchedUpdates=Rh;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Vc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Gc(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function Zv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zv)}catch(t){console.error(t)}}Zv(),Z0.exports=Tn;var xS=Z0.exports,xm=xS;dd.createRoot=xm.createRoot,dd.hydrateRoot=xm.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fh="167",yS=0,ym=1,SS=2,Qv=1,Jv=2,yi=3,fr=0,hn=1,Ei=2,lr=0,Os=1,Sm=2,Mm=3,Em=4,MS=5,br=100,ES=101,wS=102,TS=103,AS=104,CS=200,RS=201,bS=202,PS=203,sf=204,of=205,LS=206,DS=207,IS=208,NS=209,US=210,FS=211,kS=212,OS=213,zS=214,BS=0,HS=1,VS=2,gc=3,GS=4,WS=5,jS=6,XS=7,e_=0,$S=1,YS=2,cr=0,qS=1,KS=2,ZS=3,QS=4,JS=5,e1=6,t1=7,t_=300,Zs=301,Qs=302,af=303,lf=304,Wc=306,cf=1e3,Nr=1001,uf=1002,Fn=1003,n1=1004,Ga=1005,Yn=1006,Tu=1007,Ur=1008,Ni=1009,n_=1010,i_=1011,ha=1012,kh=1013,Wr=1014,Ai=1015,Sa=1016,Oh=1017,zh=1018,Js=1020,r_=35902,s_=1021,o_=1022,Kn=1023,a_=1024,l_=1025,zs=1026,eo=1027,c_=1028,Bh=1029,u_=1030,Hh=1031,Vh=1033,zl=33776,Bl=33777,Hl=33778,Vl=33779,df=35840,ff=35841,hf=35842,pf=35843,mf=36196,gf=37492,vf=37496,_f=37808,xf=37809,yf=37810,Sf=37811,Mf=37812,Ef=37813,wf=37814,Tf=37815,Af=37816,Cf=37817,Rf=37818,bf=37819,Pf=37820,Lf=37821,Gl=36492,Df=36494,If=36495,d_=36283,Nf=36284,Uf=36285,Ff=36286,i1=3200,r1=3201,f_=0,s1=1,Ki="",si="srgb",vr="srgb-linear",Gh="display-p3",jc="display-p3-linear",vc="linear",ut="srgb",_c="rec709",xc="p3",Qr=7680,wm=519,o1=512,a1=513,l1=514,h_=515,c1=516,u1=517,d1=518,f1=519,kf=35044,Tm="300 es",Ci=2e3,yc=2001;class ao{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Am=1234567;const Bs=Math.PI/180,pa=180/Math.PI;function bi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Gt(t,e,n){return Math.max(e,Math.min(n,t))}function Wh(t,e){return(t%e+e)%e}function h1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function p1(t,e,n){return t!==e?(n-t)/(e-t):0}function Xo(t,e,n){return(1-n)*t+n*e}function m1(t,e,n,i){return Xo(t,e,1-Math.exp(-n*i))}function g1(t,e=1){return e-Math.abs(Wh(t,e*2)-e)}function v1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function _1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function x1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function y1(t,e){return t+Math.random()*(e-t)}function S1(t){return t*(.5-Math.random())}function M1(t){t!==void 0&&(Am=t);let e=Am+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function E1(t){return t*Bs}function w1(t){return t*pa}function T1(t){return(t&t-1)===0&&t!==0}function A1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function C1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function R1(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*h,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*_,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*_,a*c);break;case"ZYZ":t.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Wa={DEG2RAD:Bs,RAD2DEG:pa,generateUUID:bi,clamp:Gt,euclideanModulo:Wh,mapLinear:h1,inverseLerp:p1,lerp:Xo,damp:m1,pingpong:g1,smoothstep:v1,smootherstep:_1,randInt:x1,randFloat:y1,randFloatSpread:S1,seededRandom:M1,degToRad:E1,radToDeg:w1,isPowerOfTwo:T1,ceilPowerOfTwo:A1,floorPowerOfTwo:C1,setQuaternionFromProperEuler:R1,normalize:rt,denormalize:qn};class _e{constructor(e=0,n=0){_e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],_=i[8],y=r[0],v=r[3],d=r[6],m=r[1],g=r[4],x=r[7],A=r[2],w=r[5],M=r[8];return s[0]=o*y+a*m+l*A,s[3]=o*v+a*g+l*w,s[6]=o*d+a*x+l*M,s[1]=c*y+u*m+h*A,s[4]=c*v+u*g+h*w,s[7]=c*d+u*x+h*M,s[2]=f*y+p*m+_*A,s[5]=f*v+p*g+_*w,s[8]=f*d+p*x+_*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,_=n*h+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Au.makeScale(e,n)),this}rotate(e){return this.premultiply(Au.makeRotation(-e)),this}translate(e,n){return this.premultiply(Au.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Au=new Ge;function p_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Sc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function b1(){const t=Sc("canvas");return t.style.display="block",t}const Cm={};function Hs(t){t in Cm||(Cm[t]=!0,console.warn(t))}function P1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Rm=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bm=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_o={[vr]:{transfer:vc,primaries:_c,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[si]:{transfer:ut,primaries:_c,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[jc]:{transfer:vc,primaries:xc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(bm),fromReference:t=>t.applyMatrix3(Rm)},[Gh]:{transfer:ut,primaries:xc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(bm),fromReference:t=>t.applyMatrix3(Rm).convertLinearToSRGB()}},L1=new Set([vr,jc]),nt={enabled:!0,_workingColorSpace:vr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!L1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=_o[e].toReference,r=_o[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return _o[t].primaries},getTransfer:function(t){return t===Ki?vc:_o[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(_o[e].luminanceCoefficients)}};function Vs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Cu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Jr;class D1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jr===void 0&&(Jr=Sc("canvas")),Jr.width=e.width,Jr.height=e.height;const i=Jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Jr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Sc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Vs(n[i]/255)*255):n[i]=Vs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let I1=0;class m_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ru(r[o].image)):s.push(Ru(r[o]))}else s=Ru(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ru(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?D1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let N1=0;class sn extends ao{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=Nr,r=Nr,s=Yn,o=Ur,a=Kn,l=Ni,c=sn.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N1++}),this.uuid=bi(),this.name="",this.source=new m_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==t_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cf:e.x=e.x-Math.floor(e.x);break;case Nr:e.x=e.x<0?0:1;break;case uf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cf:e.y=e.y-Math.floor(e.y);break;case Nr:e.y=e.y<0?0:1;break;case uf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=t_;sn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],_=l[9],y=l[2],v=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(_-v)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(_+v)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,x=(p+1)/2,A=(d+1)/2,w=(u+f)/4,M=(h+y)/4,R=(_+v)/4;return g>x&&g>A?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=w/i,s=M/i):x>A?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=R/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=M/s,r=R/s),this.set(i,r,s,n),this}let m=Math.sqrt((v-_)*(v-_)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(m)<.001&&(m=1),this.x=(v-_)/m,this.y=(h-y)/m,this.z=(f-u)/m,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class U1 extends ao{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new m_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jr extends U1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class g_ extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class F1 extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ma{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(h!==y||l!==f||c!==p||u!==_){let v=1-a;const d=l*f+c*p+u*_+h*y,m=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const A=Math.sqrt(g),w=Math.atan2(A,d*m);v=Math.sin(v*w)/A,a=Math.sin(a*w)/A}const x=a*m;if(l=l*v+f*x,c=c*v+p*x,u=u*v+_*x,h=h*v+y*x,v===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*h+l*p-c*f,e[n+1]=l*_+u*f+c*h-a*p,e[n+2]=c*_+u*p+a*f-l*h,e[n+3]=u*_-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"YZX":this._x=f*u*h+c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h-f*p*_;break;case"XZY":this._x=f*u*h-c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Pm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Pm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bu.copy(this).projectOnVector(e),this.sub(bu)}reflect(e){return this.sub(bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bu=new N,Pm=new Ma;class Ea{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(s,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),Xa.subVectors(this.max,xo),es.subVectors(e.a,xo),ts.subVectors(e.b,xo),ns.subVectors(e.c,xo),zi.subVectors(ts,es),Bi.subVectors(ns,ts),xr.subVectors(es,ns);let n=[0,-zi.z,zi.y,0,-Bi.z,Bi.y,0,-xr.z,xr.y,zi.z,0,-zi.x,Bi.z,0,-Bi.x,xr.z,0,-xr.x,-zi.y,zi.x,0,-Bi.y,Bi.x,0,-xr.y,xr.x,0];return!Pu(n,es,ts,ns,Xa)||(n=[1,0,0,0,1,0,0,0,1],!Pu(n,es,ts,ns,Xa))?!1:($a.crossVectors(zi,Bi),n=[$a.x,$a.y,$a.z],Pu(n,es,ts,ns,Xa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new N,new N,new N,new N,new N,new N,new N,new N],Vn=new N,ja=new Ea,es=new N,ts=new N,ns=new N,zi=new N,Bi=new N,xr=new N,xo=new N,Xa=new N,$a=new N,yr=new N;function Pu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){yr.fromArray(t,s);const a=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),l=e.dot(yr),c=n.dot(yr),u=i.dot(yr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const k1=new Ea,yo=new N,Lu=new N;class Xc{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):k1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const n=yo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(yo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(Lu)),this.expandByPoint(yo.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new N,Du=new N,Ya=new N,Hi=new N,Iu=new N,qa=new N,Nu=new N;class jh{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,n),gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Du.copy(e).add(n).multiplyScalar(.5),Ya.copy(n).sub(e).normalize(),Hi.copy(this.origin).sub(Du);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ya),a=Hi.dot(this.direction),l=-Hi.dot(Ya),c=Hi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const y=1/u;h*=y,f*=y,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Du).addScaledVector(Ya,f),p}intersectSphere(e,n){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,n,i,r,s){Iu.subVectors(n,e),qa.subVectors(i,e),Nu.crossVectors(Iu,qa);let o=this.direction.dot(Nu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,e);const l=a*this.direction.dot(qa.crossVectors(Hi,qa));if(l<0)return null;const c=a*this.direction.dot(Iu.cross(Hi));if(c<0||l+c>o)return null;const u=-a*Hi.dot(Nu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,n,i,r,s,o,a,l,c,u,h,f,p,_,y,v){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,f,p,_,y,v)}set(e,n,i,r,s,o,a,l,c,u,h,f,p,_,y,v){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=y,d[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/is.setFromMatrixColumn(e,0).length(),s=1/is.setFromMatrixColumn(e,1).length(),o=1/is.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,_=a*u,y=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,_=c*u,y=c*h;n[0]=f+y*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,_=c*u,y=c*h;n[0]=f-y*a,n[4]=-o*h,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,_=a*u,y=a*h;n[0]=l*u,n[4]=_*c-p,n[8]=f*c+y,n[1]=l*h,n[5]=y*c+f,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*u,n[4]=y-f*h,n[8]=_*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+_,n[10]=f-y*h}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+y,n[5]=o*u,n[9]=p*h-_,n[2]=_*h-p,n[6]=a*u,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O1,e,z1)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Vi.crossVectors(i,_n),Vi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Vi.crossVectors(i,_n)),Vi.normalize(),Ka.crossVectors(_n,Vi),r[0]=Vi.x,r[4]=Ka.x,r[8]=_n.x,r[1]=Vi.y,r[5]=Ka.y,r[9]=_n.y,r[2]=Vi.z,r[6]=Ka.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],_=i[2],y=i[6],v=i[10],d=i[14],m=i[3],g=i[7],x=i[11],A=i[15],w=r[0],M=r[4],R=r[8],E=r[12],S=r[1],P=r[5],G=r[9],I=r[13],z=r[2],k=r[6],O=r[10],F=r[14],L=r[3],W=r[7],q=r[11],Q=r[15];return s[0]=o*w+a*S+l*z+c*L,s[4]=o*M+a*P+l*k+c*W,s[8]=o*R+a*G+l*O+c*q,s[12]=o*E+a*I+l*F+c*Q,s[1]=u*w+h*S+f*z+p*L,s[5]=u*M+h*P+f*k+p*W,s[9]=u*R+h*G+f*O+p*q,s[13]=u*E+h*I+f*F+p*Q,s[2]=_*w+y*S+v*z+d*L,s[6]=_*M+y*P+v*k+d*W,s[10]=_*R+y*G+v*O+d*q,s[14]=_*E+y*I+v*F+d*Q,s[3]=m*w+g*S+x*z+A*L,s[7]=m*M+g*P+x*k+A*W,s[11]=m*R+g*G+x*O+A*q,s[15]=m*E+g*I+x*F+A*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],y=e[7],v=e[11],d=e[15];return _*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+y*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+v*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*h+n*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],y=e[13],v=e[14],d=e[15],m=h*v*c-y*f*c+y*l*p-a*v*p-h*l*d+a*f*d,g=_*f*c-u*v*c-_*l*p+o*v*p+u*l*d-o*f*d,x=u*y*c-_*h*c+_*a*p-o*y*p-u*a*d+o*h*d,A=_*h*l-u*y*l-_*a*f+o*y*f+u*a*v-o*h*v,w=n*m+i*g+r*x+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=m*M,e[1]=(y*f*s-h*v*s-y*r*p+i*v*p+h*r*d-i*f*d)*M,e[2]=(a*v*s-y*l*s+y*r*c-i*v*c-a*r*d+i*l*d)*M,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*M,e[4]=g*M,e[5]=(u*v*s-_*f*s+_*r*p-n*v*p-u*r*d+n*f*d)*M,e[6]=(_*l*s-o*v*s-_*r*c+n*v*c+o*r*d-n*l*d)*M,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*M,e[8]=x*M,e[9]=(_*h*s-u*y*s-_*i*p+n*y*p+u*i*d-n*h*d)*M,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*d+n*a*d)*M,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*p-n*a*p)*M,e[12]=A*M,e[13]=(u*y*r-_*h*r+_*i*f-n*y*f-u*i*v+n*h*v)*M,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*v-n*a*v)*M,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*f+n*a*f)*M,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,_=s*h,y=o*u,v=o*h,d=a*h,m=l*c,g=l*u,x=l*h,A=i.x,w=i.y,M=i.z;return r[0]=(1-(y+d))*A,r[1]=(p+x)*A,r[2]=(_-g)*A,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(f+d))*w,r[6]=(v+m)*w,r[7]=0,r[8]=(_+g)*M,r[9]=(v-m)*M,r[10]=(1-(f+y))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=is.set(r[0],r[1],r[2]).length();const o=is.set(r[4],r[5],r[6]).length(),a=is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const c=1/s,u=1/o,h=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,n.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ci){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let p,_;if(a===Ci)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===yc)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ci){const l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(o-s),f=(n+e)*c,p=(i+r)*u;let _,y;if(a===Ci)_=(o+s)*h,y=-2*h;else if(a===yc)_=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const is=new N,Gn=new ft,O1=new N(0,0,0),z1=new N(1,1,1),Vi=new N,Ka=new N,_n=new N,Lm=new ft,Dm=new Ma;class fi{constructor(e=0,n=0,i=0,r=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Lm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Dm.setFromEuler(this),this.setFromQuaternion(Dm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Xh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let B1=0;const Im=new N,rs=new Ma,vi=new ft,Za=new N,So=new N,H1=new N,V1=new Ma,Nm=new N(1,0,0),Um=new N(0,1,0),Fm=new N(0,0,1),km={type:"added"},G1={type:"removed"},ss={type:"childadded",child:null},Uu={type:"childremoved",child:null};class bt extends ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new N,n=new fi,i=new Ma,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ge}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return rs.setFromAxisAngle(e,n),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,n){return rs.setFromAxisAngle(e,n),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(Nm,e)}rotateY(e){return this.rotateOnAxis(Um,e)}rotateZ(e){return this.rotateOnAxis(Fm,e)}translateOnAxis(e,n){return Im.copy(e).applyQuaternion(this.quaternion),this.position.add(Im.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Nm,e)}translateY(e){return this.translateOnAxis(Um,e)}translateZ(e){return this.translateOnAxis(Fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Za.copy(e):Za.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(So,Za,this.up):vi.lookAt(Za,So,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),rs.setFromRotationMatrix(vi),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(km),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(G1),Uu.child=e,this.dispatchEvent(Uu),Uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(km),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,H1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,V1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DEFAULT_UP=new N(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new N,_i=new N,Fu=new N,xi=new N,os=new N,as=new N,Om=new N,ku=new N,Ou=new N,zu=new N;class Dn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wn.subVectors(e,n),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Wn.subVectors(r,n),_i.subVectors(i,n),Fu.subVectors(e,n);const o=Wn.dot(Wn),a=Wn.dot(_i),l=Wn.dot(Fu),c=_i.dot(_i),u=_i.dot(Fu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static isFrontFacing(e,n,i,r){return Wn.subVectors(i,n),_i.subVectors(e,n),Wn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Wn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Dn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Dn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;os.subVectors(r,i),as.subVectors(s,i),ku.subVectors(e,i);const l=os.dot(ku),c=as.dot(ku);if(l<=0&&c<=0)return n.copy(i);Ou.subVectors(e,r);const u=os.dot(Ou),h=as.dot(Ou);if(u>=0&&h<=u)return n.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(os,o);zu.subVectors(e,s);const p=os.dot(zu),_=as.dot(zu);if(_>=0&&p<=_)return n.copy(s);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(as,a);const v=u*_-p*h;if(v<=0&&h-u>=0&&p-_>=0)return Om.subVectors(s,r),a=(h-u)/(h-u+(p-_)),n.copy(r).addScaledVector(Om,a);const d=1/(v+y+f);return o=y*d,a=f*d,n.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const v_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function Bu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=Wh(e,1),n=Gt(n,0,1),i=Gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Bu(o,s,e+1/3),this.g=Bu(o,s,e),this.b=Bu(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=si){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=si){const i=v_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}copyLinearToSRGB(e){return this.r=Cu(e.r),this.g=Cu(e.g),this.b=Cu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return nt.fromWorkingColorSpace(qt.copy(this),e),Math.round(Gt(qt.r*255,0,255))*65536+Math.round(Gt(qt.g*255,0,255))*256+Math.round(Gt(qt.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=si){nt.fromWorkingColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==si?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+n,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Gi),e.getHSL(Qa);const i=Xo(Gi.h,Qa.h,n),r=Xo(Gi.s,Qa.s,n),s=Xo(Gi.l,Qa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new ke;ke.NAMES=v_;let W1=0;class Yr extends ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Os,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sf,this.blendDst=of,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=gc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sf&&(i.blendSrc=this.blendSrc),this.blendDst!==of&&(i.blendDst=this.blendDst),this.blendEquation!==br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class to extends Yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=e_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new N,Ja=new _e;class Jn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=kf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ja.fromBufferAttribute(this,n),Ja.applyMatrix3(e),this.setXY(n,Ja.x,Ja.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qn(n,this.array)),n}setX(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qn(n,this.array)),n}setY(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qn(n,this.array)),n}setW(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kf&&(e.usage=this.usage),e}}class __ extends Jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class x_ extends Jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ot extends Jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let j1=0;const Rn=new ft,Hu=new bt,ls=new N,xn=new Ea,Mo=new Ea,Ft=new N;class Pt extends ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p_(e)?x_:__)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return Hu.lookAt(e),Hu.updateMatrix(),this.applyMatrix4(Hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ot(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Mo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(xn.min,Mo.min),xn.expandByPoint(Ft),Ft.addVectors(xn.max,Mo.max),xn.expandByPoint(Ft)):(xn.expandByPoint(Mo.min),xn.expandByPoint(Mo.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ft.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(e,c),Ft.add(ls)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new N,l[R]=new N;const c=new N,u=new N,h=new N,f=new _e,p=new _e,_=new _e,y=new N,v=new N;function d(R,E,S){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,S),u.sub(c),h.sub(c),p.sub(f),_.sub(f);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(P),v.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(P),a[R].add(y),a[E].add(y),a[S].add(y),l[R].add(v),l[E].add(v),l[S].add(v))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let R=0,E=m.length;R<E;++R){const S=m[R],P=S.start,G=S.count;for(let I=P,z=P+G;I<z;I+=3)d(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const g=new N,x=new N,A=new N,w=new N;function M(R){A.fromBufferAttribute(r,R),w.copy(A);const E=a[R];g.copy(E),g.sub(A.multiplyScalar(A.dot(E))).normalize(),x.crossVectors(w,E);const P=x.dot(l[R])<0?-1:1;o.setXYZW(R,g.x,g.y,g.z,P)}for(let R=0,E=m.length;R<E;++R){const S=m[R],P=S.start,G=S.count;for(let I=P,z=P+G;I<z;I+=3)M(e.getX(I+0)),M(e.getX(I+1)),M(e.getX(I+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),y=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,v),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,v),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let y=0,v=l.length;y<v;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let d=0;d<u;d++)f[_++]=c[p++]}return new Jn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Pt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zm=new ft,Sr=new jh,el=new Xc,Bm=new N,cs=new N,us=new N,ds=new N,Vu=new N,tl=new N,nl=new _e,il=new _e,rl=new _e,Hm=new N,Vm=new N,Gm=new N,sl=new N,ol=new N;class ie extends bt{constructor(e=new Pt,n=new to){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){tl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Vu.fromBufferAttribute(h,e),o?tl.addScaledVector(Vu,u):tl.addScaledVector(Vu.sub(n),u))}n.add(tl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(s),Sr.copy(e.ray).recast(e.near),!(el.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(el,Bm)===null||Sr.origin.distanceToSquared(Bm)>(e.far-e.near)**2))&&(zm.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(zm),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Sr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const v=f[_],d=o[v.materialIndex],m=Math.max(v.start,p.start),g=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let x=m,A=g;x<A;x+=3){const w=a.getX(x),M=a.getX(x+1),R=a.getX(x+2);r=al(this,d,e,i,c,u,h,w,M,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let v=_,d=y;v<d;v+=3){const m=a.getX(v),g=a.getX(v+1),x=a.getX(v+2);r=al(this,o,e,i,c,u,h,m,g,x),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const v=f[_],d=o[v.materialIndex],m=Math.max(v.start,p.start),g=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let x=m,A=g;x<A;x+=3){const w=x,M=x+1,R=x+2;r=al(this,d,e,i,c,u,h,w,M,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let v=_,d=y;v<d;v+=3){const m=v,g=v+1,x=v+2;r=al(this,o,e,i,c,u,h,m,g,x),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function X1(t,e,n,i,r,s,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===fr,a),l===null)return null;ol.copy(a),ol.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ol);return c<n.near||c>n.far?null:{distance:c,point:ol.clone(),object:t}}function al(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,cs),t.getVertexPosition(l,us),t.getVertexPosition(c,ds);const u=X1(t,e,n,i,cs,us,ds,sl);if(u){r&&(nl.fromBufferAttribute(r,a),il.fromBufferAttribute(r,l),rl.fromBufferAttribute(r,c),u.uv=Dn.getInterpolation(sl,cs,us,ds,nl,il,rl,new _e)),s&&(nl.fromBufferAttribute(s,a),il.fromBufferAttribute(s,l),rl.fromBufferAttribute(s,c),u.uv1=Dn.getInterpolation(sl,cs,us,ds,nl,il,rl,new _e)),o&&(Hm.fromBufferAttribute(o,a),Vm.fromBufferAttribute(o,l),Gm.fromBufferAttribute(o,c),u.normal=Dn.getInterpolation(sl,cs,us,ds,Hm,Vm,Gm,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new N,materialIndex:0};Dn.getNormal(cs,us,ds,h.normal),u.face=h}return u}class Me extends Pt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(h,2));function _(y,v,d,m,g,x,A,w,M,R,E){const S=x/M,P=A/R,G=x/2,I=A/2,z=w/2,k=M+1,O=R+1;let F=0,L=0;const W=new N;for(let q=0;q<O;q++){const Q=q*P-I;for(let he=0;he<k;he++){const Ce=he*S-G;W[y]=Ce*m,W[v]=Q*g,W[d]=z,c.push(W.x,W.y,W.z),W[y]=0,W[v]=0,W[d]=w>0?1:-1,u.push(W.x,W.y,W.z),h.push(he/M),h.push(1-q/R),F+=1}}for(let q=0;q<R;q++)for(let Q=0;Q<M;Q++){const he=f+Q+k*q,Ce=f+Q+k*(q+1),Y=f+(Q+1)+k*(q+1),ee=f+(Q+1)+k*q;l.push(he,Ce,ee),l.push(Ce,Y,ee),L+=6}a.addGroup(p,L,E),p+=L,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Me(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=no(t[n]);for(const r in i)e[r]=i[r]}return e}function $1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function y_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Y1={clone:no,merge:tn};var q1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends Yr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q1,this.fragmentShader=K1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=$1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class S_ extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Ci}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new N,Wm=new _e,jm=new _e;class Ln extends S_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=pa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,n){return this.getViewBounds(e,Wm,jm),n.subVectors(jm,Wm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const fs=-90,hs=1;class Z1 extends bt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(fs,hs,e,n);r.layers=this.layers,this.add(r);const s=new Ln(fs,hs,e,n);s.layers=this.layers,this.add(s);const o=new Ln(fs,hs,e,n);o.layers=this.layers,this.add(o);const a=new Ln(fs,hs,e,n);a.layers=this.layers,this.add(a);const l=new Ln(fs,hs,e,n);l.layers=this.layers,this.add(l);const c=new Ln(fs,hs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class M_ extends sn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Zs,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Q1 extends jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new M_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Yn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Me(5,5,5),s=new hr({name:"CubemapFromEquirect",uniforms:no(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:lr});s.uniforms.tEquirect.value=n;const o=new ie(r,s),a=n.minFilter;return n.minFilter===Ur&&(n.minFilter=Yn),new Z1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Gu=new N,J1=new N,eM=new Ge;class Cr{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Gu.subVectors(i,n).cross(J1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Gu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||eM.getNormalMatrix(e),r=this.coplanarPoint(Gu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new Xc,ll=new N;class $h{constructor(e=new Cr,n=new Cr,i=new Cr,r=new Cr,s=new Cr,o=new Cr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ci){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],_=r[9],y=r[10],v=r[11],d=r[12],m=r[13],g=r[14],x=r[15];if(i[0].setComponents(l-s,f-c,v-p,x-d).normalize(),i[1].setComponents(l+s,f+c,v+p,x+d).normalize(),i[2].setComponents(l+o,f+u,v+_,x+m).normalize(),i[3].setComponents(l-o,f-u,v-_,x-m).normalize(),i[4].setComponents(l-a,f-h,v-y,x-g).normalize(),n===Ci)i[5].setComponents(l+a,f+h,v+y,x+g).normalize();else if(n===yc)i[5].setComponents(a,h,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){return Mr.center.set(0,0,0),Mr.radius=.7071067811865476,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ll.x=r.normal.x>0?e.max.x:e.min.x,ll.y=r.normal.y>0?e.max.y:e.min.y,ll.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function E_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function tM(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,a),h.count===-1&&f.length===0&&t.bufferSubData(c,0,u),f.length!==0){for(let p=0,_=f.length;p<_;p++){const y=f[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class qr extends Pt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=n/l,p=[],_=[],y=[],v=[];for(let d=0;d<u;d++){const m=d*f-o;for(let g=0;g<c;g++){const x=g*h-s;_.push(x,-m,0),y.push(0,0,1),v.push(g/a),v.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<a;m++){const g=m+c*d,x=m+c*(d+1),A=m+1+c*(d+1),w=m+1+c*d;p.push(g,x,w),p.push(x,A,w)}this.setIndex(p),this.setAttribute("position",new ot(_,3)),this.setAttribute("normal",new ot(y,3)),this.setAttribute("uv",new ot(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.width,e.height,e.widthSegments,e.heightSegments)}}var nM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iM=`#ifdef USE_ALPHAHASH
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
#endif`,rM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lM=`#ifdef USE_AOMAP
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
#endif`,cM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uM=`#ifdef USE_BATCHING
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
#endif`,dM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mM=`#ifdef USE_IRIDESCENCE
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
#endif`,gM=`#ifdef USE_BUMPMAP
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
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,TM=`#define PI 3.141592653589793
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
} // validated`,AM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CM=`vec3 transformedNormal = objectNormal;
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
#endif`,RM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DM="gl_FragColor = linearToOutputTexel( gl_FragColor );",IM=`
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
}`,NM=`#ifdef USE_ENVMAP
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
#endif`,UM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,FM=`#ifdef USE_ENVMAP
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
#endif`,kM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
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
#endif`,zM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GM=`#ifdef USE_GRADIENTMAP
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
}`,WM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$M=`uniform bool receiveShadow;
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
#endif`,YM=`#ifdef USE_ENVMAP
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
#endif`,qM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JM=`PhysicalMaterial material;
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
#endif`,eE=`struct PhysicalMaterial {
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
}`,tE=`
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
#endif`,nE=`#if defined( RE_IndirectDiffuse )
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
#endif`,iE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dE=`#if defined( USE_POINTS_UV )
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
#endif`,fE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vE=`#ifdef USE_MORPHTARGETS
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
#endif`,_E=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ME=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wE=`#ifdef USE_NORMALMAP
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
#endif`,TE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,LE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BE=`float getShadowMask() {
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
}`,HE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VE=`#ifdef USE_SKINNING
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
#endif`,GE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WE=`#ifdef USE_SKINNING
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
#endif`,jE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$E=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qE=`#ifdef USE_TRANSMISSION
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
#endif`,KE=`#ifdef USE_TRANSMISSION
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
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ew=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nw=`uniform sampler2D t2D;
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
}`,iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ow=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aw=`#include <common>
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
}`,lw=`#if DEPTH_PACKING == 3200
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
}`,cw=`#define DISTANCE
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
}`,uw=`#define DISTANCE
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
}`,dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hw=`uniform float scale;
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
}`,pw=`uniform vec3 diffuse;
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
}`,mw=`#include <common>
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
}`,gw=`uniform vec3 diffuse;
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
}`,vw=`#define LAMBERT
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
}`,_w=`#define LAMBERT
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
}`,xw=`#define MATCAP
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
}`,yw=`#define MATCAP
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
}`,Sw=`#define NORMAL
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
}`,Mw=`#define NORMAL
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
}`,Ew=`#define PHONG
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
}`,ww=`#define PHONG
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
}`,Tw=`#define STANDARD
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
}`,Aw=`#define STANDARD
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
}`,Cw=`#define TOON
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
}`,Rw=`#define TOON
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
}`,bw=`uniform float size;
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
}`,Pw=`uniform vec3 diffuse;
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
}`,Lw=`#include <common>
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
}`,Dw=`uniform vec3 color;
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
}`,Iw=`uniform float rotation;
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
}`,Nw=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:nM,alphahash_pars_fragment:iM,alphamap_fragment:rM,alphamap_pars_fragment:sM,alphatest_fragment:oM,alphatest_pars_fragment:aM,aomap_fragment:lM,aomap_pars_fragment:cM,batching_pars_vertex:uM,batching_vertex:dM,begin_vertex:fM,beginnormal_vertex:hM,bsdfs:pM,iridescence_fragment:mM,bumpmap_pars_fragment:gM,clipping_planes_fragment:vM,clipping_planes_pars_fragment:_M,clipping_planes_pars_vertex:xM,clipping_planes_vertex:yM,color_fragment:SM,color_pars_fragment:MM,color_pars_vertex:EM,color_vertex:wM,common:TM,cube_uv_reflection_fragment:AM,defaultnormal_vertex:CM,displacementmap_pars_vertex:RM,displacementmap_vertex:bM,emissivemap_fragment:PM,emissivemap_pars_fragment:LM,colorspace_fragment:DM,colorspace_pars_fragment:IM,envmap_fragment:NM,envmap_common_pars_fragment:UM,envmap_pars_fragment:FM,envmap_pars_vertex:kM,envmap_physical_pars_fragment:YM,envmap_vertex:OM,fog_vertex:zM,fog_pars_vertex:BM,fog_fragment:HM,fog_pars_fragment:VM,gradientmap_pars_fragment:GM,lightmap_pars_fragment:WM,lights_lambert_fragment:jM,lights_lambert_pars_fragment:XM,lights_pars_begin:$M,lights_toon_fragment:qM,lights_toon_pars_fragment:KM,lights_phong_fragment:ZM,lights_phong_pars_fragment:QM,lights_physical_fragment:JM,lights_physical_pars_fragment:eE,lights_fragment_begin:tE,lights_fragment_maps:nE,lights_fragment_end:iE,logdepthbuf_fragment:rE,logdepthbuf_pars_fragment:sE,logdepthbuf_pars_vertex:oE,logdepthbuf_vertex:aE,map_fragment:lE,map_pars_fragment:cE,map_particle_fragment:uE,map_particle_pars_fragment:dE,metalnessmap_fragment:fE,metalnessmap_pars_fragment:hE,morphinstance_vertex:pE,morphcolor_vertex:mE,morphnormal_vertex:gE,morphtarget_pars_vertex:vE,morphtarget_vertex:_E,normal_fragment_begin:xE,normal_fragment_maps:yE,normal_pars_fragment:SE,normal_pars_vertex:ME,normal_vertex:EE,normalmap_pars_fragment:wE,clearcoat_normal_fragment_begin:TE,clearcoat_normal_fragment_maps:AE,clearcoat_pars_fragment:CE,iridescence_pars_fragment:RE,opaque_fragment:bE,packing:PE,premultiplied_alpha_fragment:LE,project_vertex:DE,dithering_fragment:IE,dithering_pars_fragment:NE,roughnessmap_fragment:UE,roughnessmap_pars_fragment:FE,shadowmap_pars_fragment:kE,shadowmap_pars_vertex:OE,shadowmap_vertex:zE,shadowmask_pars_fragment:BE,skinbase_vertex:HE,skinning_pars_vertex:VE,skinning_vertex:GE,skinnormal_vertex:WE,specularmap_fragment:jE,specularmap_pars_fragment:XE,tonemapping_fragment:$E,tonemapping_pars_fragment:YE,transmission_fragment:qE,transmission_pars_fragment:KE,uv_pars_fragment:ZE,uv_pars_vertex:QE,uv_vertex:JE,worldpos_vertex:ew,background_vert:tw,background_frag:nw,backgroundCube_vert:iw,backgroundCube_frag:rw,cube_vert:sw,cube_frag:ow,depth_vert:aw,depth_frag:lw,distanceRGBA_vert:cw,distanceRGBA_frag:uw,equirect_vert:dw,equirect_frag:fw,linedashed_vert:hw,linedashed_frag:pw,meshbasic_vert:mw,meshbasic_frag:gw,meshlambert_vert:vw,meshlambert_frag:_w,meshmatcap_vert:xw,meshmatcap_frag:yw,meshnormal_vert:Sw,meshnormal_frag:Mw,meshphong_vert:Ew,meshphong_frag:ww,meshphysical_vert:Tw,meshphysical_frag:Aw,meshtoon_vert:Cw,meshtoon_frag:Rw,points_vert:bw,points_frag:Pw,shadow_vert:Lw,shadow_frag:Dw,sprite_vert:Iw,sprite_frag:Nw},de={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ai={basic:{uniforms:tn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:tn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:tn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:tn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:tn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:tn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:tn([de.points,de.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:tn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:tn([de.common,de.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:tn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:tn([de.sprite,de.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:tn([de.common,de.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:tn([de.lights,de.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ai.physical={uniforms:tn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const cl={r:0,b:0,g:0},Er=new fi,Uw=new ft;function Fw(t,e,n,i,r,s,o){const a=new ke(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function _(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?n:e).get(g)),g}function y(m){let g=!1;const x=_(m);x===null?d(a,l):x&&x.isColor&&(d(x,1),g=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(m,g){const x=_(g);x&&(x.isCubeTexture||x.mapping===Wc)?(u===void 0&&(u=new ie(new Me(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:no(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Er.copy(g.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Uw.makeRotationFromEuler(Er)),u.material.toneMapped=nt.getTransfer(x.colorSpace)!==ut,(h!==x||f!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ie(new qr(2,2),new hr({name:"BackgroundMaterial",uniforms:no(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=nt.getTransfer(x.colorSpace)!==ut,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function d(m,g){m.getRGB(cl,y_(t)),i.buffers.color.setClear(cl.r,cl.g,cl.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(m,g=1){a.set(m),l=g,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(a,l)},render:y,addToRenderList:v}}function kw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,P,G,I,z){let k=!1;const O=h(I,G,P);s!==O&&(s=O,c(s.object)),k=p(S,I,G,z),k&&_(S,I,G,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,x(S,P,G,I),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function h(S,P,G){const I=G.wireframe===!0;let z=i[S.id];z===void 0&&(z={},i[S.id]=z);let k=z[P.id];k===void 0&&(k={},z[P.id]=k);let O=k[I];return O===void 0&&(O=f(l()),k[I]=O),O}function f(S){const P=[],G=[],I=[];for(let z=0;z<n;z++)P[z]=0,G[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:I,object:S,attributes:{},index:null}}function p(S,P,G,I){const z=s.attributes,k=P.attributes;let O=0;const F=G.getAttributes();for(const L in F)if(F[L].location>=0){const q=z[L];let Q=k[L];if(Q===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),q===void 0||q.attribute!==Q||Q&&q.data!==Q.data)return!0;O++}return s.attributesNum!==O||s.index!==I}function _(S,P,G,I){const z={},k=P.attributes;let O=0;const F=G.getAttributes();for(const L in F)if(F[L].location>=0){let q=k[L];q===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(q=S.instanceColor));const Q={};Q.attribute=q,q&&q.data&&(Q.data=q.data),z[L]=Q,O++}s.attributes=z,s.attributesNum=O,s.index=I}function y(){const S=s.newAttributes;for(let P=0,G=S.length;P<G;P++)S[P]=0}function v(S){d(S,0)}function d(S,P){const G=s.newAttributes,I=s.enabledAttributes,z=s.attributeDivisors;G[S]=1,I[S]===0&&(t.enableVertexAttribArray(S),I[S]=1),z[S]!==P&&(t.vertexAttribDivisor(S,P),z[S]=P)}function m(){const S=s.newAttributes,P=s.enabledAttributes;for(let G=0,I=P.length;G<I;G++)P[G]!==S[G]&&(t.disableVertexAttribArray(G),P[G]=0)}function g(S,P,G,I,z,k,O){O===!0?t.vertexAttribIPointer(S,P,G,z,k):t.vertexAttribPointer(S,P,G,I,z,k)}function x(S,P,G,I){y();const z=I.attributes,k=G.getAttributes(),O=P.defaultAttributeValues;for(const F in k){const L=k[F];if(L.location>=0){let W=z[F];if(W===void 0&&(F==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),F==="instanceColor"&&S.instanceColor&&(W=S.instanceColor)),W!==void 0){const q=W.normalized,Q=W.itemSize,he=e.get(W);if(he===void 0)continue;const Ce=he.buffer,Y=he.type,ee=he.bytesPerElement,ue=Y===t.INT||Y===t.UNSIGNED_INT||W.gpuType===kh;if(W.isInterleavedBufferAttribute){const te=W.data,Re=te.stride,Le=W.offset;if(te.isInstancedInterleavedBuffer){for(let Be=0;Be<L.locationSize;Be++)d(L.location+Be,te.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Be=0;Be<L.locationSize;Be++)v(L.location+Be);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let Be=0;Be<L.locationSize;Be++)g(L.location+Be,Q/L.locationSize,Y,q,Re*ee,(Le+Q/L.locationSize*Be)*ee,ue)}else{if(W.isInstancedBufferAttribute){for(let te=0;te<L.locationSize;te++)d(L.location+te,W.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let te=0;te<L.locationSize;te++)v(L.location+te);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let te=0;te<L.locationSize;te++)g(L.location+te,Q/L.locationSize,Y,q,Q*ee,Q/L.locationSize*te*ee,ue)}}else if(O!==void 0){const q=O[F];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(L.location,q);break;case 3:t.vertexAttrib3fv(L.location,q);break;case 4:t.vertexAttrib4fv(L.location,q);break;default:t.vertexAttrib1fv(L.location,q)}}}}m()}function A(){R();for(const S in i){const P=i[S];for(const G in P){const I=P[G];for(const z in I)u(I[z].object),delete I[z];delete P[G]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const G in P){const I=P[G];for(const z in I)u(I[z].object),delete I[z];delete P[G]}delete i[S.id]}function M(S){for(const P in i){const G=i[P];if(G[S.id]===void 0)continue;const I=G[S.id];for(const z in I)u(I[z].object),delete I[z];delete G[S.id]}}function R(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:M,initAttributes:y,enableAttribute:v,disableUnusedAttributes:m}}function Ow(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];n.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=u[y];for(let y=0;y<f.length;y++)n.update(_,i,f[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Kn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const M=w===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ni&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ai&&!M)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),m=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:d,maxVaryings:m,maxFragmentUniforms:g,vertexTextures:x,maxSamples:A}}function Bw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Cr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,y=h.clipIntersection,v=h.clipShadows,d=t.get(h);if(!r||_===null||_.length===0||s&&!v)s?u(null):c();else{const m=s?0:i,g=m*4;let x=d.clippingState||null;l.value=x,x=u(_,f,g,p);for(let A=0;A!==g;++A)x[A]=n[A];d.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,_){const y=h!==null?h.length:0;let v=null;if(y!==0){if(v=l.value,_!==!0||v===null){const d=p+y*4,m=f.matrixWorldInverse;a.getNormalMatrix(m),(v===null||v.length<d)&&(v=new Float32Array(d));for(let g=0,x=p;g!==y;++g,x+=4)o.copy(h[g]).applyMatrix4(m,a),o.normal.toArray(v,x),v[x+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function Hw(t){let e=new WeakMap;function n(o,a){return a===af?o.mapping=Zs:a===lf&&(o.mapping=Qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===af||a===lf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Q1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class w_ extends S_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ls=4,Xm=[.125,.215,.35,.446,.526,.582],Pr=20,Wu=new w_,$m=new ke;let ju=null,Xu=0,$u=0,Yu=!1;const Rr=(1+Math.sqrt(5))/2,ps=1/Rr,Ym=[new N(-Rr,ps,0),new N(Rr,ps,0),new N(-ps,0,Rr),new N(ps,0,Rr),new N(0,Rr,-ps),new N(0,Rr,ps),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class qm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ju=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ju,Xu,$u),this._renderer.xr.enabled=Yu,e.scissorTest=!1,ul(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Zs||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ju=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Sa,format:Kn,colorSpace:vr,depthBuffer:!1},r=Km(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Km(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vw(s)),this._blurMaterial=Gw(s,e,n)}return r}_compileMaterial(e){const n=new ie(this._lodPlanes[0],e);this._renderer.compile(n,Wu)}_sceneToCubeUV(e,n,i,r){const a=new Ln(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor($m),u.toneMapping=cr,u.autoClear=!1;const p=new to({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),_=new ie(new Me,p);let y=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,y=!0):(p.color.copy($m),y=!0);for(let d=0;d<6;d++){const m=d%3;m===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):m===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const g=this._cubeSize;ul(r,m*g,d>2?g:0,g,g),u.setRenderTarget(r),y&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Zs||e.mapping===Qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ie(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ul(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Wu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ym[(r-s-1)%Ym.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ie(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Pr-1),y=s/_,v=isFinite(s)?1+Math.floor(u*y):Pr;v>Pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Pr}`);const d=[];let m=0;for(let M=0;M<Pr;++M){const R=M/y,E=Math.exp(-R*R/2);d.push(E),M===0?m+=E:M<v&&(m+=2*E)}for(let M=0;M<d.length;M++)d[M]=d[M]/m;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-i;const x=this._sizeLods[r],A=3*x*(r>g-Ls?r-g+Ls:0),w=4*(this._cubeSize-x);ul(n,A,w,3*x,2*x),l.setRenderTarget(n),l.render(h,Wu)}}function Vw(t){const e=[],n=[],i=[];let r=t;const s=t-Ls+1+Xm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ls?l=Xm[o-t+Ls-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,y=3,v=2,d=1,m=new Float32Array(y*_*p),g=new Float32Array(v*_*p),x=new Float32Array(d*_*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,R=w>2?0:-1,E=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];m.set(E,y*_*w),g.set(f,v*_*w);const S=[w,w,w,w,w,w];x.set(S,d*_*w)}const A=new Pt;A.setAttribute("position",new Jn(m,y)),A.setAttribute("uv",new Jn(g,v)),A.setAttribute("faceIndex",new Jn(x,d)),e.push(A),r>Ls&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Km(t,e,n){const i=new jr(t,e,n);return i.texture.mapping=Wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ul(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Gw(t,e,n){const i=new Float32Array(Pr),r=new N(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yh(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Zm(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yh(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Qm(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Yh(){return`

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
	`}function Ww(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===af||l===lf,u=l===Zs||l===Qs;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new qm(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new qm(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function jw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Hs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Xw(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const y=f.morphAttributes[_];for(let v=0,d=y.length;v<d;v++)e.remove(y[v])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const y=p[_];for(let v=0,d=y.length;v<d;v++)e.update(y[v],t.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,_=h.attributes.position;let y=0;if(p!==null){const m=p.array;y=p.version;for(let g=0,x=m.length;g<x;g+=3){const A=m[g+0],w=m[g+1],M=m[g+2];f.push(A,w,w,M,M,A)}}else if(_!==void 0){const m=_.array;y=_.version;for(let g=0,x=m.length/3-1;g<x;g+=3){const A=g+0,w=g+1,M=g+2;f.push(A,w,w,M,M,A)}}else return;const v=new(p_(f)?x_:__)(f,1);v.version=y;const d=s.get(h);d&&e.remove(d),s.set(h,v)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function $w(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,f*o,_),n.update(p,i,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,_);let v=0;for(let d=0;d<_;d++)v+=p[d];n.update(v,i,1)}function h(f,p,_,y){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],y[d]);else{v.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,_);let d=0;for(let m=0;m<_;m++)d+=p[m];for(let m=0;m<y.length;m++)n.update(d,i,y[m])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Yw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function qw(t,e,n){const i=new WeakMap,r=new Dt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),y===!0&&(x=2),v===!0&&(x=3);let A=a.attributes.position.count*x,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const M=new Float32Array(A*w*4*h),R=new g_(M,A,w,h);R.type=Ai,R.needsUpdate=!0;const E=x*4;for(let P=0;P<h;P++){const G=d[P],I=m[P],z=g[P],k=A*w*4*P;for(let O=0;O<G.count;O++){const F=O*E;_===!0&&(r.fromBufferAttribute(G,O),M[k+F+0]=r.x,M[k+F+1]=r.y,M[k+F+2]=r.z,M[k+F+3]=0),y===!0&&(r.fromBufferAttribute(I,O),M[k+F+4]=r.x,M[k+F+5]=r.y,M[k+F+6]=r.z,M[k+F+7]=0),v===!0&&(r.fromBufferAttribute(z,O),M[k+F+8]=r.x,M[k+F+9]=r.y,M[k+F+10]=r.z,M[k+F+11]=z.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new _e(A,w)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let v=0;v<c.length;v++)_+=c[v];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function Kw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class T_ extends sn{constructor(e,n,i,r,s,o,a,l,c,u=zs){if(u!==zs&&u!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===zs&&(i=Wr),i===void 0&&u===eo&&(i=Js),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const A_=new sn,Jm=new T_(1,1),C_=new g_,R_=new F1,b_=new M_,e0=[],t0=[],n0=new Float32Array(16),i0=new Float32Array(9),r0=new Float32Array(4);function lo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=e0[r];if(s===void 0&&(s=new Float32Array(r),e0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function $c(t,e){let n=t0[e];n===void 0&&(n=new Int32Array(e),t0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Zw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function Jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function e2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function t2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(Nt(n,i))return;r0.set(i),t.uniformMatrix2fv(this.addr,!1,r0),Ut(n,i)}}function n2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(Nt(n,i))return;i0.set(i),t.uniformMatrix3fv(this.addr,!1,i0),Ut(n,i)}}function i2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(Nt(n,i))return;n0.set(i),t.uniformMatrix4fv(this.addr,!1,n0),Ut(n,i)}}function r2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function s2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function o2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function a2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function l2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function c2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function u2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function d2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function f2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Jm.compareFunction=h_,s=Jm):s=A_,n.setTexture2D(e||s,r)}function h2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||R_,r)}function p2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||b_,r)}function m2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||C_,r)}function g2(t){switch(t){case 5126:return Zw;case 35664:return Qw;case 35665:return Jw;case 35666:return e2;case 35674:return t2;case 35675:return n2;case 35676:return i2;case 5124:case 35670:return r2;case 35667:case 35671:return s2;case 35668:case 35672:return o2;case 35669:case 35673:return a2;case 5125:return l2;case 36294:return c2;case 36295:return u2;case 36296:return d2;case 35678:case 36198:case 36298:case 36306:case 35682:return f2;case 35679:case 36299:case 36307:return h2;case 35680:case 36300:case 36308:case 36293:return p2;case 36289:case 36303:case 36311:case 36292:return m2}}function v2(t,e){t.uniform1fv(this.addr,e)}function _2(t,e){const n=lo(e,this.size,2);t.uniform2fv(this.addr,n)}function x2(t,e){const n=lo(e,this.size,3);t.uniform3fv(this.addr,n)}function y2(t,e){const n=lo(e,this.size,4);t.uniform4fv(this.addr,n)}function S2(t,e){const n=lo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function M2(t,e){const n=lo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function E2(t,e){const n=lo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function w2(t,e){t.uniform1iv(this.addr,e)}function T2(t,e){t.uniform2iv(this.addr,e)}function A2(t,e){t.uniform3iv(this.addr,e)}function C2(t,e){t.uniform4iv(this.addr,e)}function R2(t,e){t.uniform1uiv(this.addr,e)}function b2(t,e){t.uniform2uiv(this.addr,e)}function P2(t,e){t.uniform3uiv(this.addr,e)}function L2(t,e){t.uniform4uiv(this.addr,e)}function D2(t,e,n){const i=this.cache,r=e.length,s=$c(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||A_,s[o])}function I2(t,e,n){const i=this.cache,r=e.length,s=$c(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||R_,s[o])}function N2(t,e,n){const i=this.cache,r=e.length,s=$c(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||b_,s[o])}function U2(t,e,n){const i=this.cache,r=e.length,s=$c(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||C_,s[o])}function F2(t){switch(t){case 5126:return v2;case 35664:return _2;case 35665:return x2;case 35666:return y2;case 35674:return S2;case 35675:return M2;case 35676:return E2;case 5124:case 35670:return w2;case 35667:case 35671:return T2;case 35668:case 35672:return A2;case 35669:case 35673:return C2;case 5125:return R2;case 36294:return b2;case 36295:return P2;case 36296:return L2;case 35678:case 36198:case 36298:case 36306:case 35682:return D2;case 35679:case 36299:case 36307:return I2;case 35680:case 36300:case 36308:case 36293:return N2;case 36289:case 36303:case 36311:case 36292:return U2}}class k2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=g2(n.type)}}class O2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=F2(n.type)}}class z2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const qu=/(\w+)(\])?(\[|\.)?/g;function s0(t,e){t.seq.push(e),t.map[e.id]=e}function B2(t,e,n){const i=t.name,r=i.length;for(qu.lastIndex=0;;){const s=qu.exec(i),o=qu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){s0(n,c===void 0?new k2(a,t,e):new O2(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new z2(a),s0(n,h)),n=h}}}class Wl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);B2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function o0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const H2=37297;let V2=0;function G2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function W2(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===xc&&n===_c?i="LinearDisplayP3ToLinearSRGB":e===_c&&n===xc&&(i="LinearSRGBToLinearDisplayP3"),t){case vr:case jc:return[i,"LinearTransferOETF"];case si:case Gh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function a0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+G2(t.getShaderSource(e),o)}else return r}function j2(t,e){const n=W2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function X2(t,e){let n;switch(e){case qS:n="Linear";break;case KS:n="Reinhard";break;case ZS:n="OptimizedCineon";break;case QS:n="ACESFilmic";break;case e1:n="AgX";break;case t1:n="Neutral";break;case JS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const dl=new N;function $2(){nt.getLuminanceCoefficients(dl);const t=dl.x.toFixed(4),e=dl.y.toFixed(4),n=dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function q2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function K2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Uo(t){return t!==""}function l0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function c0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Z2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Of(t){return t.replace(Z2,J2)}const Q2=new Map;function J2(t,e){let n=Ve[e];if(n===void 0){const i=Q2.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Of(n)}const eT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u0(t){return t.replace(eT,tT)}function tT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function d0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function nT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Qv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Jv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function iT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Zs:case Qs:e="ENVMAP_TYPE_CUBE";break;case Wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function sT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case e_:e="ENVMAP_BLENDING_MULTIPLY";break;case $S:e="ENVMAP_BLENDING_MIX";break;case YS:e="ENVMAP_BLENDING_ADD";break}return e}function oT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function aT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=nT(n),c=iT(n),u=rT(n),h=sT(n),f=oT(n),p=Y2(n),_=q2(s),y=r.createProgram();let v,d,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Uo).join(`
`),v.length>0&&(v+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Uo).join(`
`),d.length>0&&(d+=`
`)):(v=[d0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),d=[d0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==cr?"#define TONE_MAPPING":"",n.toneMapping!==cr?Ve.tonemapping_pars_fragment:"",n.toneMapping!==cr?X2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,j2("linearToOutputTexel",n.outputColorSpace),$2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Uo).join(`
`)),o=Of(o),o=l0(o,n),o=c0(o,n),a=Of(a),a=l0(a,n),a=c0(a,n),o=u0(o),a=u0(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,d=["#define varying in",n.glslVersion===Tm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Tm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const g=m+v+o,x=m+d+a,A=o0(r,r.VERTEX_SHADER,g),w=o0(r,r.FRAGMENT_SHADER,x);r.attachShader(y,A),r.attachShader(y,w),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function M(P){if(t.debug.checkShaderErrors){const G=r.getProgramInfoLog(y).trim(),I=r.getShaderInfoLog(A).trim(),z=r.getShaderInfoLog(w).trim();let k=!0,O=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,A,w);else{const F=a0(r,A,"vertex"),L=a0(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+F+`
`+L)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(I===""||z==="")&&(O=!1);O&&(P.diagnostics={runnable:k,programLog:G,vertexShader:{log:I,prefix:v},fragmentShader:{log:z,prefix:d}})}r.deleteShader(A),r.deleteShader(w),R=new Wl(r,y),E=K2(r,y)}let R;this.getUniforms=function(){return R===void 0&&M(this),R};let E;this.getAttributes=function(){return E===void 0&&M(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,H2)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=V2++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=w,this}let lT=0;class cT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new uT(e),n.set(e,i)),i}}class uT{constructor(e){this.id=lT++,this.code=e,this.usedTimes=0}}function dT(t,e,n,i,r,s,o){const a=new Xh,l=new cT,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function v(E,S,P,G,I){const z=G.fog,k=I.geometry,O=E.isMeshStandardMaterial?G.environment:null,F=(E.isMeshStandardMaterial?n:e).get(E.envMap||O),L=F&&F.mapping===Wc?F.image.height:null,W=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Q=q!==void 0?q.length:0;let he=0;k.morphAttributes.position!==void 0&&(he=1),k.morphAttributes.normal!==void 0&&(he=2),k.morphAttributes.color!==void 0&&(he=3);let Ce,Y,ee,ue;if(W){const Qe=ai[W];Ce=Qe.vertexShader,Y=Qe.fragmentShader}else Ce=E.vertexShader,Y=E.fragmentShader,l.update(E),ee=l.getVertexShaderID(E),ue=l.getFragmentShaderID(E);const te=t.getRenderTarget(),Re=I.isInstancedMesh===!0,Le=I.isBatchedMesh===!0,Be=!!E.map,it=!!E.matcap,U=!!F,pt=!!E.aoMap,Ye=!!E.lightMap,Ze=!!E.bumpMap,Te=!!E.normalMap,xt=!!E.displacementMap,Ne=!!E.emissiveMap,ze=!!E.metalnessMap,D=!!E.roughnessMap,T=E.anisotropy>0,$=E.clearcoat>0,ne=E.dispersion>0,se=E.iridescence>0,J=E.sheen>0,be=E.transmission>0,fe=T&&!!E.anisotropyMap,xe=$&&!!E.clearcoatMap,He=$&&!!E.clearcoatNormalMap,oe=$&&!!E.clearcoatRoughnessMap,ve=se&&!!E.iridescenceMap,$e=se&&!!E.iridescenceThicknessMap,Fe=J&&!!E.sheenColorMap,ye=J&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,We=!!E.specularColorMap,mt=!!E.specularIntensityMap,B=be&&!!E.transmissionMap,ae=be&&!!E.thicknessMap,K=!!E.gradientMap,Z=!!E.alphaMap,ce=E.alphaTest>0,De=!!E.alphaHash,qe=!!E.extensions;let Tt=cr;E.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Tt=t.toneMapping);const Bt={shaderID:W,shaderType:E.type,shaderName:E.name,vertexShader:Ce,fragmentShader:Y,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:ue,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Le,batchingColor:Le&&I._colorsTexture!==null,instancing:Re,instancingColor:Re&&I.instanceColor!==null,instancingMorph:Re&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?t.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:vr,alphaToCoverage:!!E.alphaToCoverage,map:Be,matcap:it,envMap:U,envMapMode:U&&F.mapping,envMapCubeUVHeight:L,aoMap:pt,lightMap:Ye,bumpMap:Ze,normalMap:Te,displacementMap:f&&xt,emissiveMap:Ne,normalMapObjectSpace:Te&&E.normalMapType===s1,normalMapTangentSpace:Te&&E.normalMapType===f_,metalnessMap:ze,roughnessMap:D,anisotropy:T,anisotropyMap:fe,clearcoat:$,clearcoatMap:xe,clearcoatNormalMap:He,clearcoatRoughnessMap:oe,dispersion:ne,iridescence:se,iridescenceMap:ve,iridescenceThicknessMap:$e,sheen:J,sheenColorMap:Fe,sheenRoughnessMap:ye,specularMap:Oe,specularColorMap:We,specularIntensityMap:mt,transmission:be,transmissionMap:B,thicknessMap:ae,gradientMap:K,opaque:E.transparent===!1&&E.blending===Os&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:ce,alphaHash:De,combine:E.combine,mapUv:Be&&y(E.map.channel),aoMapUv:pt&&y(E.aoMap.channel),lightMapUv:Ye&&y(E.lightMap.channel),bumpMapUv:Ze&&y(E.bumpMap.channel),normalMapUv:Te&&y(E.normalMap.channel),displacementMapUv:xt&&y(E.displacementMap.channel),emissiveMapUv:Ne&&y(E.emissiveMap.channel),metalnessMapUv:ze&&y(E.metalnessMap.channel),roughnessMapUv:D&&y(E.roughnessMap.channel),anisotropyMapUv:fe&&y(E.anisotropyMap.channel),clearcoatMapUv:xe&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:He&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:ye&&y(E.sheenRoughnessMap.channel),specularMapUv:Oe&&y(E.specularMap.channel),specularColorMapUv:We&&y(E.specularColorMap.channel),specularIntensityMapUv:mt&&y(E.specularIntensityMap.channel),transmissionMapUv:B&&y(E.transmissionMap.channel),thicknessMapUv:ae&&y(E.thicknessMap.channel),alphaMapUv:Z&&y(E.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Te||T),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(Be||Z),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:he,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Be&&E.map.isVideoTexture===!0&&nt.getTransfer(E.map.colorSpace)===ut,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ei,flipSided:E.side===hn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:qe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&E.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Bt.vertexUv1s=c.has(1),Bt.vertexUv2s=c.has(2),Bt.vertexUv3s=c.has(3),c.clear(),Bt}function d(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)S.push(P),S.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(m(S,E),g(S,E),S.push(t.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function m(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function g(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),E.push(a.mask)}function x(E){const S=_[E.type];let P;if(S){const G=ai[S];P=Y1.clone(G.uniforms)}else P=E.uniforms;return P}function A(E,S){let P;for(let G=0,I=u.length;G<I;G++){const z=u[G];if(z.cacheKey===S){P=z,++P.usedTimes;break}}return P===void 0&&(P=new aT(t,S,E,s),u.push(P)),P}function w(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function M(E){l.remove(E)}function R(){l.dispose()}return{getParameters:v,getProgramCacheKey:d,getUniforms:x,acquireProgram:A,releaseProgram:w,releaseShaderCache:M,programs:u,dispose:R}}function fT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function hT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function f0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function h0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,p,_,y,v){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:y,group:v},t[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=y,d.group=v),e++,d}function a(h,f,p,_,y,v){const d=o(h,f,p,_,y,v);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(h,f,p,_,y,v){const d=o(h,f,p,_,y,v);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(h,f){n.length>1&&n.sort(h||hT),i.length>1&&i.sort(f||f0),r.length>1&&r.sort(f||f0)}function u(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function pT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new h0,t.set(i,[o])):r>=s.length?(o=new h0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function mT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new ke};break;case"SpotLight":n={position:new N,direction:new N,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":n={color:new ke,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function gT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let vT=0;function _T(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function xT(t){const e=new mT,n=gT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new ft,o=new ft;function a(c){let u=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,y=0,v=0,d=0,m=0,g=0,x=0,A=0,w=0,M=0;c.sort(_T);for(let E=0,S=c.length;E<S;E++){const P=c[E],G=P.color,I=P.intensity,z=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=G.r*I,h+=G.g*I,f+=G.b*I;else if(P.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(P.sh.coefficients[O],I);M++}else if(P.isDirectionalLight){const O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const F=P.shadow,L=n.get(P);L.shadowIntensity=F.intensity,L.shadowBias=F.bias,L.shadowNormalBias=F.normalBias,L.shadowRadius=F.radius,L.shadowMapSize=F.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=P.shadow.matrix,m++}i.directional[p]=O,p++}else if(P.isSpotLight){const O=e.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(G).multiplyScalar(I),O.distance=z,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,i.spot[y]=O;const F=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,F.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[y]=F.matrix,P.castShadow){const L=n.get(P);L.shadowIntensity=F.intensity,L.shadowBias=F.bias,L.shadowNormalBias=F.normalBias,L.shadowRadius=F.radius,L.shadowMapSize=F.mapSize,i.spotShadow[y]=L,i.spotShadowMap[y]=k,x++}y++}else if(P.isRectAreaLight){const O=e.get(P);O.color.copy(G).multiplyScalar(I),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=O,v++}else if(P.isPointLight){const O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){const F=P.shadow,L=n.get(P);L.shadowIntensity=F.intensity,L.shadowBias=F.bias,L.shadowNormalBias=F.normalBias,L.shadowRadius=F.radius,L.shadowMapSize=F.mapSize,L.shadowCameraNear=F.camera.near,L.shadowCameraFar=F.camera.far,i.pointShadow[_]=L,i.pointShadowMap[_]=k,i.pointShadowMatrix[_]=P.shadow.matrix,g++}i.point[_]=O,_++}else if(P.isHemisphereLight){const O=e.get(P);O.skyColor.copy(P.color).multiplyScalar(I),O.groundColor.copy(P.groundColor).multiplyScalar(I),i.hemi[d]=O,d++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==y||R.rectAreaLength!==v||R.hemiLength!==d||R.numDirectionalShadows!==m||R.numPointShadows!==g||R.numSpotShadows!==x||R.numSpotMaps!==A||R.numLightProbes!==M)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=v,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=x+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=M,R.directionalLength=p,R.pointLength=_,R.spotLength=y,R.rectAreaLength=v,R.hemiLength=d,R.numDirectionalShadows=m,R.numPointShadows=g,R.numSpotShadows=x,R.numSpotMaps=A,R.numLightProbes=M,i.version=vT++)}function l(c,u){let h=0,f=0,p=0,_=0,y=0;const v=u.matrixWorldInverse;for(let d=0,m=c.length;d<m;d++){const g=c[d];if(g.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),h++}else if(g.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),p++}else if(g.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(v),o.identity(),s.copy(g.matrixWorld),s.premultiply(v),o.extractRotation(s),x.halfWidth.set(g.width*.5,0,0),x.halfHeight.set(0,g.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(g.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(v),f++}else if(g.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(g.matrixWorld),x.direction.transformDirection(v),y++}}}return{setup:a,setupView:l,state:i}}function p0(t){const e=new xT(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function yT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new p0(t),e.set(r,[a])):s>=o.length?(a=new p0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class ST extends Yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=i1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MT extends Yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ET=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wT=`uniform sampler2D shadow_pass;
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
}`;function TT(t,e,n){let i=new $h;const r=new _e,s=new _e,o=new Dt,a=new ST({depthPacking:r1}),l=new MT,c={},u=n.maxTextureSize,h={[fr]:hn,[hn]:fr,[Ei]:Ei},f=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:ET,fragmentShader:wT}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Pt;_.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ie(_,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qv;let d=this.type;this.render=function(w,M,R){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;const E=t.getRenderTarget(),S=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),G=t.state;G.setBlending(lr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const I=d!==yi&&this.type===yi,z=d===yi&&this.type!==yi;for(let k=0,O=w.length;k<O;k++){const F=w[k],L=F.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const W=L.getFrameExtents();if(r.multiply(W),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,L.mapSize.y=s.y)),L.map===null||I===!0||z===!0){const Q=this.type!==yi?{minFilter:Fn,magFilter:Fn}:{};L.map!==null&&L.map.dispose(),L.map=new jr(r.x,r.y,Q),L.map.texture.name=F.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const q=L.getViewportCount();for(let Q=0;Q<q;Q++){const he=L.getViewport(Q);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),G.viewport(o),L.updateMatrices(F,Q),i=L.getFrustum(),x(M,R,L.camera,F,this.type)}L.isPointLightShadow!==!0&&this.type===yi&&m(L,R),L.needsUpdate=!1}d=this.type,v.needsUpdate=!1,t.setRenderTarget(E,S,P)};function m(w,M){const R=e.update(y);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new jr(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(M,null,R,f,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(M,null,R,p,y,null)}function g(w,M,R,E){let S=null;const P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)S=P;else if(S=R.isPointLight===!0?l:a,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const G=S.uuid,I=M.uuid;let z=c[G];z===void 0&&(z={},c[G]=z);let k=z[I];k===void 0&&(k=S.clone(),z[I]=k,M.addEventListener("dispose",A)),S=k}if(S.visible=M.visible,S.wireframe=M.wireframe,E===yi?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:h[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=t.properties.get(S);G.light=R}return S}function x(w,M,R,E,S){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===yi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const I=e.update(w),z=w.material;if(Array.isArray(z)){const k=I.groups;for(let O=0,F=k.length;O<F;O++){const L=k[O],W=z[L.materialIndex];if(W&&W.visible){const q=g(w,W,E,S);w.onBeforeShadow(t,w,M,R,I,q,L),t.renderBufferDirect(R,null,I,q,w,L),w.onAfterShadow(t,w,M,R,I,q,L)}}}else if(z.visible){const k=g(w,z,E,S);w.onBeforeShadow(t,w,M,R,I,k,null),t.renderBufferDirect(R,null,I,k,w,null),w.onAfterShadow(t,w,M,R,I,k,null)}}const G=w.children;for(let I=0,z=G.length;I<z;I++)x(G[I],M,R,E,S)}function A(w){w.target.removeEventListener("dispose",A);for(const R in c){const E=c[R],S=w.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function AT(t){function e(){let B=!1;const ae=new Dt;let K=null;const Z=new Dt(0,0,0,0);return{setMask:function(ce){K!==ce&&!B&&(t.colorMask(ce,ce,ce,ce),K=ce)},setLocked:function(ce){B=ce},setClear:function(ce,De,qe,Tt,Bt){Bt===!0&&(ce*=Tt,De*=Tt,qe*=Tt),ae.set(ce,De,qe,Tt),Z.equals(ae)===!1&&(t.clearColor(ce,De,qe,Tt),Z.copy(ae))},reset:function(){B=!1,K=null,Z.set(-1,0,0,0)}}}function n(){let B=!1,ae=null,K=null,Z=null;return{setTest:function(ce){ce?ue(t.DEPTH_TEST):te(t.DEPTH_TEST)},setMask:function(ce){ae!==ce&&!B&&(t.depthMask(ce),ae=ce)},setFunc:function(ce){if(K!==ce){switch(ce){case BS:t.depthFunc(t.NEVER);break;case HS:t.depthFunc(t.ALWAYS);break;case VS:t.depthFunc(t.LESS);break;case gc:t.depthFunc(t.LEQUAL);break;case GS:t.depthFunc(t.EQUAL);break;case WS:t.depthFunc(t.GEQUAL);break;case jS:t.depthFunc(t.GREATER);break;case XS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}K=ce}},setLocked:function(ce){B=ce},setClear:function(ce){Z!==ce&&(t.clearDepth(ce),Z=ce)},reset:function(){B=!1,ae=null,K=null,Z=null}}}function i(){let B=!1,ae=null,K=null,Z=null,ce=null,De=null,qe=null,Tt=null,Bt=null;return{setTest:function(Qe){B||(Qe?ue(t.STENCIL_TEST):te(t.STENCIL_TEST))},setMask:function(Qe){ae!==Qe&&!B&&(t.stencilMask(Qe),ae=Qe)},setFunc:function(Qe,pi,ni){(K!==Qe||Z!==pi||ce!==ni)&&(t.stencilFunc(Qe,pi,ni),K=Qe,Z=pi,ce=ni)},setOp:function(Qe,pi,ni){(De!==Qe||qe!==pi||Tt!==ni)&&(t.stencilOp(Qe,pi,ni),De=Qe,qe=pi,Tt=ni)},setLocked:function(Qe){B=Qe},setClear:function(Qe){Bt!==Qe&&(t.clearStencil(Qe),Bt=Qe)},reset:function(){B=!1,ae=null,K=null,Z=null,ce=null,De=null,qe=null,Tt=null,Bt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],p=null,_=!1,y=null,v=null,d=null,m=null,g=null,x=null,A=null,w=new ke(0,0,0),M=0,R=!1,E=null,S=null,P=null,G=null,I=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,O=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(F)[1]),k=O>=1):F.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),k=O>=2);let L=null,W={};const q=t.getParameter(t.SCISSOR_BOX),Q=t.getParameter(t.VIEWPORT),he=new Dt().fromArray(q),Ce=new Dt().fromArray(Q);function Y(B,ae,K,Z){const ce=new Uint8Array(4),De=t.createTexture();t.bindTexture(B,De),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<K;qe++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(ae+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return De}const ee={};ee[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(t.DEPTH_TEST),s.setFunc(gc),Ze(!1),Te(ym),ue(t.CULL_FACE),pt(lr);function ue(B){c[B]!==!0&&(t.enable(B),c[B]=!0)}function te(B){c[B]!==!1&&(t.disable(B),c[B]=!1)}function Re(B,ae){return u[B]!==ae?(t.bindFramebuffer(B,ae),u[B]=ae,B===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ae),B===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ae),!0):!1}function Le(B,ae){let K=f,Z=!1;if(B){K=h.get(ae),K===void 0&&(K=[],h.set(ae,K));const ce=B.textures;if(K.length!==ce.length||K[0]!==t.COLOR_ATTACHMENT0){for(let De=0,qe=ce.length;De<qe;De++)K[De]=t.COLOR_ATTACHMENT0+De;K.length=ce.length,Z=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,Z=!0);Z&&t.drawBuffers(K)}function Be(B){return p!==B?(t.useProgram(B),p=B,!0):!1}const it={[br]:t.FUNC_ADD,[ES]:t.FUNC_SUBTRACT,[wS]:t.FUNC_REVERSE_SUBTRACT};it[TS]=t.MIN,it[AS]=t.MAX;const U={[CS]:t.ZERO,[RS]:t.ONE,[bS]:t.SRC_COLOR,[sf]:t.SRC_ALPHA,[US]:t.SRC_ALPHA_SATURATE,[IS]:t.DST_COLOR,[LS]:t.DST_ALPHA,[PS]:t.ONE_MINUS_SRC_COLOR,[of]:t.ONE_MINUS_SRC_ALPHA,[NS]:t.ONE_MINUS_DST_COLOR,[DS]:t.ONE_MINUS_DST_ALPHA,[FS]:t.CONSTANT_COLOR,[kS]:t.ONE_MINUS_CONSTANT_COLOR,[OS]:t.CONSTANT_ALPHA,[zS]:t.ONE_MINUS_CONSTANT_ALPHA};function pt(B,ae,K,Z,ce,De,qe,Tt,Bt,Qe){if(B===lr){_===!0&&(te(t.BLEND),_=!1);return}if(_===!1&&(ue(t.BLEND),_=!0),B!==MS){if(B!==y||Qe!==R){if((v!==br||g!==br)&&(t.blendEquation(t.FUNC_ADD),v=br,g=br),Qe)switch(B){case Os:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sm:t.blendFunc(t.ONE,t.ONE);break;case Mm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Em:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Os:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Mm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Em:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}d=null,m=null,x=null,A=null,w.set(0,0,0),M=0,y=B,R=Qe}return}ce=ce||ae,De=De||K,qe=qe||Z,(ae!==v||ce!==g)&&(t.blendEquationSeparate(it[ae],it[ce]),v=ae,g=ce),(K!==d||Z!==m||De!==x||qe!==A)&&(t.blendFuncSeparate(U[K],U[Z],U[De],U[qe]),d=K,m=Z,x=De,A=qe),(Tt.equals(w)===!1||Bt!==M)&&(t.blendColor(Tt.r,Tt.g,Tt.b,Bt),w.copy(Tt),M=Bt),y=B,R=!1}function Ye(B,ae){B.side===Ei?te(t.CULL_FACE):ue(t.CULL_FACE);let K=B.side===hn;ae&&(K=!K),Ze(K),B.blending===Os&&B.transparent===!1?pt(lr):pt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),r.setMask(B.colorWrite);const Z=B.stencilWrite;o.setTest(Z),Z&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ne(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(B){E!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),E=B)}function Te(B){B!==yS?(ue(t.CULL_FACE),B!==S&&(B===ym?t.cullFace(t.BACK):B===SS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):te(t.CULL_FACE),S=B}function xt(B){B!==P&&(k&&t.lineWidth(B),P=B)}function Ne(B,ae,K){B?(ue(t.POLYGON_OFFSET_FILL),(G!==ae||I!==K)&&(t.polygonOffset(ae,K),G=ae,I=K)):te(t.POLYGON_OFFSET_FILL)}function ze(B){B?ue(t.SCISSOR_TEST):te(t.SCISSOR_TEST)}function D(B){B===void 0&&(B=t.TEXTURE0+z-1),L!==B&&(t.activeTexture(B),L=B)}function T(B,ae,K){K===void 0&&(L===null?K=t.TEXTURE0+z-1:K=L);let Z=W[K];Z===void 0&&(Z={type:void 0,texture:void 0},W[K]=Z),(Z.type!==B||Z.texture!==ae)&&(L!==K&&(t.activeTexture(K),L=K),t.bindTexture(B,ae||ee[B]),Z.type=B,Z.texture=ae)}function $(){const B=W[L];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ne(){try{t.compressedTexImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{t.compressedTexImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{t.texSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $e(){try{t.texImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(B){he.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),he.copy(B))}function ye(B){Ce.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),Ce.copy(B))}function Oe(B,ae){let K=l.get(ae);K===void 0&&(K=new WeakMap,l.set(ae,K));let Z=K.get(B);Z===void 0&&(Z=t.getUniformBlockIndex(ae,B.name),K.set(B,Z))}function We(B,ae){const Z=l.get(ae).get(B);a.get(ae)!==Z&&(t.uniformBlockBinding(ae,Z,B.__bindingPointIndex),a.set(ae,Z))}function mt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,W={},u={},h=new WeakMap,f=[],p=null,_=!1,y=null,v=null,d=null,m=null,g=null,x=null,A=null,w=new ke(0,0,0),M=0,R=!1,E=null,S=null,P=null,G=null,I=null,he.set(0,0,t.canvas.width,t.canvas.height),Ce.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:te,bindFramebuffer:Re,drawBuffers:Le,useProgram:Be,setBlending:pt,setMaterial:Ye,setFlipSided:Ze,setCullFace:Te,setLineWidth:xt,setPolygonOffset:Ne,setScissorTest:ze,activeTexture:D,bindTexture:T,unbindTexture:$,compressedTexImage2D:ne,compressedTexImage3D:se,texImage2D:ve,texImage3D:$e,updateUBOMapping:Oe,uniformBlockBinding:We,texStorage2D:He,texStorage3D:oe,texSubImage2D:J,texSubImage3D:be,compressedTexSubImage2D:fe,compressedTexSubImage3D:xe,scissor:Fe,viewport:ye,reset:mt}}function m0(t,e,n,i){const r=CT(i);switch(n){case s_:return t*e;case a_:return t*e;case l_:return t*e*2;case c_:return t*e/r.components*r.byteLength;case Bh:return t*e/r.components*r.byteLength;case u_:return t*e*2/r.components*r.byteLength;case Hh:return t*e*2/r.components*r.byteLength;case o_:return t*e*3/r.components*r.byteLength;case Kn:return t*e*4/r.components*r.byteLength;case Vh:return t*e*4/r.components*r.byteLength;case zl:case Bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ff:case pf:return Math.max(t,16)*Math.max(e,8)/4;case df:case hf:return Math.max(t,8)*Math.max(e,8)/2;case mf:case gf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _f:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case yf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Sf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ef:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case wf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Af:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case bf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Pf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Gl:case Df:case If:return Math.ceil(t/4)*Math.ceil(e/4)*16;case d_:case Nf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Uf:case Ff:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function CT(t){switch(t){case Ni:case n_:return{byteLength:1,components:1};case ha:case i_:case Sa:return{byteLength:2,components:1};case Oh:case zh:return{byteLength:2,components:4};case Wr:case kh:case Ai:return{byteLength:4,components:1};case r_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function RT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,T){return p?new OffscreenCanvas(D,T):Sc("canvas")}function y(D,T,$){let ne=1;const se=ze(D);if((se.width>$||se.height>$)&&(ne=$/Math.max(se.width,se.height)),ne<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const J=Math.floor(ne*se.width),be=Math.floor(ne*se.height);h===void 0&&(h=_(J,be));const fe=T?_(J,be):h;return fe.width=J,fe.height=be,fe.getContext("2d").drawImage(D,0,0,J,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+J+"x"+be+")."),fe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),D;return D}function v(D){return D.generateMipmaps&&D.minFilter!==Fn&&D.minFilter!==Yn}function d(D){t.generateMipmap(D)}function m(D,T,$,ne,se=!1){if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let J=T;if(T===t.RED&&($===t.FLOAT&&(J=t.R32F),$===t.HALF_FLOAT&&(J=t.R16F),$===t.UNSIGNED_BYTE&&(J=t.R8)),T===t.RED_INTEGER&&($===t.UNSIGNED_BYTE&&(J=t.R8UI),$===t.UNSIGNED_SHORT&&(J=t.R16UI),$===t.UNSIGNED_INT&&(J=t.R32UI),$===t.BYTE&&(J=t.R8I),$===t.SHORT&&(J=t.R16I),$===t.INT&&(J=t.R32I)),T===t.RG&&($===t.FLOAT&&(J=t.RG32F),$===t.HALF_FLOAT&&(J=t.RG16F),$===t.UNSIGNED_BYTE&&(J=t.RG8)),T===t.RG_INTEGER&&($===t.UNSIGNED_BYTE&&(J=t.RG8UI),$===t.UNSIGNED_SHORT&&(J=t.RG16UI),$===t.UNSIGNED_INT&&(J=t.RG32UI),$===t.BYTE&&(J=t.RG8I),$===t.SHORT&&(J=t.RG16I),$===t.INT&&(J=t.RG32I)),T===t.RGB&&$===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),T===t.RGBA){const be=se?vc:nt.getTransfer(ne);$===t.FLOAT&&(J=t.RGBA32F),$===t.HALF_FLOAT&&(J=t.RGBA16F),$===t.UNSIGNED_BYTE&&(J=be===ut?t.SRGB8_ALPHA8:t.RGBA8),$===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),$===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function g(D,T){let $;return D?T===null||T===Wr||T===Js?$=t.DEPTH24_STENCIL8:T===Ai?$=t.DEPTH32F_STENCIL8:T===ha&&($=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Wr||T===Js?$=t.DEPTH_COMPONENT24:T===Ai?$=t.DEPTH_COMPONENT32F:T===ha&&($=t.DEPTH_COMPONENT16),$}function x(D,T){return v(D)===!0||D.isFramebufferTexture&&D.minFilter!==Fn&&D.minFilter!==Yn?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function A(D){const T=D.target;T.removeEventListener("dispose",A),M(T),T.isVideoTexture&&u.delete(T)}function w(D){const T=D.target;T.removeEventListener("dispose",w),E(T)}function M(D){const T=i.get(D);if(T.__webglInit===void 0)return;const $=D.source,ne=f.get($);if(ne){const se=ne[T.__cacheKey];se.usedTimes--,se.usedTimes===0&&R(D),Object.keys(ne).length===0&&f.delete($)}i.remove(D)}function R(D){const T=i.get(D);t.deleteTexture(T.__webglTexture);const $=D.source,ne=f.get($);delete ne[T.__cacheKey],o.memory.textures--}function E(D){const T=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(T.__webglFramebuffer[ne]))for(let se=0;se<T.__webglFramebuffer[ne].length;se++)t.deleteFramebuffer(T.__webglFramebuffer[ne][se]);else t.deleteFramebuffer(T.__webglFramebuffer[ne]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[ne])}else{if(Array.isArray(T.__webglFramebuffer))for(let ne=0;ne<T.__webglFramebuffer.length;ne++)t.deleteFramebuffer(T.__webglFramebuffer[ne]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ne=0;ne<T.__webglColorRenderbuffer.length;ne++)T.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[ne]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=D.textures;for(let ne=0,se=$.length;ne<se;ne++){const J=i.get($[ne]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove($[ne])}i.remove(D)}let S=0;function P(){S=0}function G(){const D=S;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),S+=1,D}function I(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function z(D,T){const $=i.get(D);if(D.isVideoTexture&&xt(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const ne=D.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce($,D,T);return}}n.bindTexture(t.TEXTURE_2D,$.__webglTexture,t.TEXTURE0+T)}function k(D,T){const $=i.get(D);if(D.version>0&&$.__version!==D.version){Ce($,D,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,$.__webglTexture,t.TEXTURE0+T)}function O(D,T){const $=i.get(D);if(D.version>0&&$.__version!==D.version){Ce($,D,T);return}n.bindTexture(t.TEXTURE_3D,$.__webglTexture,t.TEXTURE0+T)}function F(D,T){const $=i.get(D);if(D.version>0&&$.__version!==D.version){Y($,D,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture,t.TEXTURE0+T)}const L={[cf]:t.REPEAT,[Nr]:t.CLAMP_TO_EDGE,[uf]:t.MIRRORED_REPEAT},W={[Fn]:t.NEAREST,[n1]:t.NEAREST_MIPMAP_NEAREST,[Ga]:t.NEAREST_MIPMAP_LINEAR,[Yn]:t.LINEAR,[Tu]:t.LINEAR_MIPMAP_NEAREST,[Ur]:t.LINEAR_MIPMAP_LINEAR},q={[o1]:t.NEVER,[f1]:t.ALWAYS,[a1]:t.LESS,[h_]:t.LEQUAL,[l1]:t.EQUAL,[d1]:t.GEQUAL,[c1]:t.GREATER,[u1]:t.NOTEQUAL};function Q(D,T){if(T.type===Ai&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Yn||T.magFilter===Tu||T.magFilter===Ga||T.magFilter===Ur||T.minFilter===Yn||T.minFilter===Tu||T.minFilter===Ga||T.minFilter===Ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,L[T.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,L[T.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,L[T.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,W[T.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,W[T.minFilter]),T.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,q[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Fn||T.minFilter!==Ga&&T.minFilter!==Ur||T.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function he(D,T){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",A));const ne=T.source;let se=f.get(ne);se===void 0&&(se={},f.set(ne,se));const J=I(T);if(J!==D.__cacheKey){se[J]===void 0&&(se[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,$=!0),se[J].usedTimes++;const be=se[D.__cacheKey];be!==void 0&&(se[D.__cacheKey].usedTimes--,be.usedTimes===0&&R(T)),D.__cacheKey=J,D.__webglTexture=se[J].texture}return $}function Ce(D,T,$){let ne=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ne=t.TEXTURE_3D);const se=he(D,T),J=T.source;n.bindTexture(ne,D.__webglTexture,t.TEXTURE0+$);const be=i.get(J);if(J.version!==be.__version||se===!0){n.activeTexture(t.TEXTURE0+$);const fe=nt.getPrimaries(nt.workingColorSpace),xe=T.colorSpace===Ki?null:nt.getPrimaries(T.colorSpace),He=T.colorSpace===Ki||fe===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let oe=y(T.image,!1,r.maxTextureSize);oe=Ne(T,oe);const ve=s.convert(T.format,T.colorSpace),$e=s.convert(T.type);let Fe=m(T.internalFormat,ve,$e,T.colorSpace,T.isVideoTexture);Q(ne,T);let ye;const Oe=T.mipmaps,We=T.isVideoTexture!==!0,mt=be.__version===void 0||se===!0,B=J.dataReady,ae=x(T,oe);if(T.isDepthTexture)Fe=g(T.format===eo,T.type),mt&&(We?n.texStorage2D(t.TEXTURE_2D,1,Fe,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Fe,oe.width,oe.height,0,ve,$e,null));else if(T.isDataTexture)if(Oe.length>0){We&&mt&&n.texStorage2D(t.TEXTURE_2D,ae,Fe,Oe[0].width,Oe[0].height);for(let K=0,Z=Oe.length;K<Z;K++)ye=Oe[K],We?B&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ye.width,ye.height,ve,$e,ye.data):n.texImage2D(t.TEXTURE_2D,K,Fe,ye.width,ye.height,0,ve,$e,ye.data);T.generateMipmaps=!1}else We?(mt&&n.texStorage2D(t.TEXTURE_2D,ae,Fe,oe.width,oe.height),B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,ve,$e,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Fe,oe.width,oe.height,0,ve,$e,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){We&&mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,Fe,Oe[0].width,Oe[0].height,oe.depth);for(let K=0,Z=Oe.length;K<Z;K++)if(ye=Oe[K],T.format!==Kn)if(ve!==null)if(We){if(B)if(T.layerUpdates.size>0){const ce=m0(ye.width,ye.height,T.format,T.type);for(const De of T.layerUpdates){const qe=ye.data.subarray(De*ce/ye.data.BYTES_PER_ELEMENT,(De+1)*ce/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,De,ye.width,ye.height,1,ve,qe,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,ye.width,ye.height,oe.depth,ve,ye.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Fe,ye.width,ye.height,oe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?B&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,ye.width,ye.height,oe.depth,ve,$e,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Fe,ye.width,ye.height,oe.depth,0,ve,$e,ye.data)}else{We&&mt&&n.texStorage2D(t.TEXTURE_2D,ae,Fe,Oe[0].width,Oe[0].height);for(let K=0,Z=Oe.length;K<Z;K++)ye=Oe[K],T.format!==Kn?ve!==null?We?B&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,ye.width,ye.height,ve,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Fe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?B&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ye.width,ye.height,ve,$e,ye.data):n.texImage2D(t.TEXTURE_2D,K,Fe,ye.width,ye.height,0,ve,$e,ye.data)}else if(T.isDataArrayTexture)if(We){if(mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,Fe,oe.width,oe.height,oe.depth),B)if(T.layerUpdates.size>0){const K=m0(oe.width,oe.height,T.format,T.type);for(const Z of T.layerUpdates){const ce=oe.data.subarray(Z*K/oe.data.BYTES_PER_ELEMENT,(Z+1)*K/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,oe.width,oe.height,1,ve,$e,ce)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ve,$e,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Fe,oe.width,oe.height,oe.depth,0,ve,$e,oe.data);else if(T.isData3DTexture)We?(mt&&n.texStorage3D(t.TEXTURE_3D,ae,Fe,oe.width,oe.height,oe.depth),B&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ve,$e,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Fe,oe.width,oe.height,oe.depth,0,ve,$e,oe.data);else if(T.isFramebufferTexture){if(mt)if(We)n.texStorage2D(t.TEXTURE_2D,ae,Fe,oe.width,oe.height);else{let K=oe.width,Z=oe.height;for(let ce=0;ce<ae;ce++)n.texImage2D(t.TEXTURE_2D,ce,Fe,K,Z,0,ve,$e,null),K>>=1,Z>>=1}}else if(Oe.length>0){if(We&&mt){const K=ze(Oe[0]);n.texStorage2D(t.TEXTURE_2D,ae,Fe,K.width,K.height)}for(let K=0,Z=Oe.length;K<Z;K++)ye=Oe[K],We?B&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ve,$e,ye):n.texImage2D(t.TEXTURE_2D,K,Fe,ve,$e,ye);T.generateMipmaps=!1}else if(We){if(mt){const K=ze(oe);n.texStorage2D(t.TEXTURE_2D,ae,Fe,K.width,K.height)}B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,$e,oe)}else n.texImage2D(t.TEXTURE_2D,0,Fe,ve,$e,oe);v(T)&&d(ne),be.__version=J.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Y(D,T,$){if(T.image.length!==6)return;const ne=he(D,T),se=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+$);const J=i.get(se);if(se.version!==J.__version||ne===!0){n.activeTexture(t.TEXTURE0+$);const be=nt.getPrimaries(nt.workingColorSpace),fe=T.colorSpace===Ki?null:nt.getPrimaries(T.colorSpace),xe=T.colorSpace===Ki||be===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const He=T.isCompressedTexture||T.image[0].isCompressedTexture,oe=T.image[0]&&T.image[0].isDataTexture,ve=[];for(let Z=0;Z<6;Z++)!He&&!oe?ve[Z]=y(T.image[Z],!0,r.maxCubemapSize):ve[Z]=oe?T.image[Z].image:T.image[Z],ve[Z]=Ne(T,ve[Z]);const $e=ve[0],Fe=s.convert(T.format,T.colorSpace),ye=s.convert(T.type),Oe=m(T.internalFormat,Fe,ye,T.colorSpace),We=T.isVideoTexture!==!0,mt=J.__version===void 0||ne===!0,B=se.dataReady;let ae=x(T,$e);Q(t.TEXTURE_CUBE_MAP,T);let K;if(He){We&&mt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ae,Oe,$e.width,$e.height);for(let Z=0;Z<6;Z++){K=ve[Z].mipmaps;for(let ce=0;ce<K.length;ce++){const De=K[ce];T.format!==Kn?Fe!==null?We?B&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,De.width,De.height,Fe,De.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,Oe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,De.width,De.height,Fe,ye,De.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,Oe,De.width,De.height,0,Fe,ye,De.data)}}}else{if(K=T.mipmaps,We&&mt){K.length>0&&ae++;const Z=ze(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ae,Oe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(oe){We?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ve[Z].width,ve[Z].height,Fe,ye,ve[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,ve[Z].width,ve[Z].height,0,Fe,ye,ve[Z].data);for(let ce=0;ce<K.length;ce++){const qe=K[ce].image[Z].image;We?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,qe.width,qe.height,Fe,ye,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,Oe,qe.width,qe.height,0,Fe,ye,qe.data)}}else{We?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Fe,ye,ve[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,Fe,ye,ve[Z]);for(let ce=0;ce<K.length;ce++){const De=K[ce];We?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,Fe,ye,De.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,Oe,Fe,ye,De.image[Z])}}}v(T)&&d(t.TEXTURE_CUBE_MAP),J.__version=se.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ee(D,T,$,ne,se,J){const be=s.convert($.format,$.colorSpace),fe=s.convert($.type),xe=m($.internalFormat,be,fe,$.colorSpace);if(!i.get(T).__hasExternalTextures){const oe=Math.max(1,T.width>>J),ve=Math.max(1,T.height>>J);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,J,xe,oe,ve,T.depth,0,be,fe,null):n.texImage2D(se,J,xe,oe,ve,0,be,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),Te(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,se,i.get($).__webglTexture,0,Ze(T)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,se,i.get($).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(D,T,$){if(t.bindRenderbuffer(t.RENDERBUFFER,D),T.depthBuffer){const ne=T.depthTexture,se=ne&&ne.isDepthTexture?ne.type:null,J=g(T.stencilBuffer,se),be=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=Ze(T);Te(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,J,T.width,T.height):$?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,J,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,J,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,D)}else{const ne=T.textures;for(let se=0;se<ne.length;se++){const J=ne[se],be=s.convert(J.format,J.colorSpace),fe=s.convert(J.type),xe=m(J.internalFormat,be,fe,J.colorSpace),He=Ze(T);$&&Te(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,He,xe,T.width,T.height):Te(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He,xe,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,xe,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function te(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),z(T.depthTexture,0);const ne=i.get(T.depthTexture).__webglTexture,se=Ze(T);if(T.depthTexture.format===zs)Te(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(T.depthTexture.format===eo)Te(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Re(D){const T=i.get(D),$=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");te(T.__webglFramebuffer,D)}else if($){T.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[ne]),T.__webglDepthbuffer[ne]=t.createRenderbuffer(),ue(T.__webglDepthbuffer[ne],D,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),ue(T.__webglDepthbuffer,D,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(D,T,$){const ne=i.get(D);T!==void 0&&ee(ne.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),$!==void 0&&Re(D)}function Be(D){const T=D.texture,$=i.get(D),ne=i.get(T);D.addEventListener("dispose",w);const se=D.textures,J=D.isWebGLCubeRenderTarget===!0,be=se.length>1;if(be||(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=T.version,o.memory.textures++),J){$.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[fe]=[];for(let xe=0;xe<T.mipmaps.length;xe++)$.__webglFramebuffer[fe][xe]=t.createFramebuffer()}else $.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let fe=0;fe<T.mipmaps.length;fe++)$.__webglFramebuffer[fe]=t.createFramebuffer()}else $.__webglFramebuffer=t.createFramebuffer();if(be)for(let fe=0,xe=se.length;fe<xe;fe++){const He=i.get(se[fe]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),o.memory.textures++)}if(D.samples>0&&Te(D)===!1){$.__webglMultisampledFramebuffer=t.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let fe=0;fe<se.length;fe++){const xe=se[fe];$.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,$.__webglColorRenderbuffer[fe]);const He=s.convert(xe.format,xe.colorSpace),oe=s.convert(xe.type),ve=m(xe.internalFormat,He,oe,xe.colorSpace,D.isXRRenderTarget===!0),$e=Ze(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,ve,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,$.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=t.createRenderbuffer(),ue($.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),Q(t.TEXTURE_CUBE_MAP,T);for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0)for(let xe=0;xe<T.mipmaps.length;xe++)ee($.__webglFramebuffer[fe][xe],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else ee($.__webglFramebuffer[fe],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);v(T)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let fe=0,xe=se.length;fe<xe;fe++){const He=se[fe],oe=i.get(He);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),Q(t.TEXTURE_2D,He),ee($.__webglFramebuffer,D,He,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),v(He)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(fe=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,ne.__webglTexture),Q(fe,T),T.mipmaps&&T.mipmaps.length>0)for(let xe=0;xe<T.mipmaps.length;xe++)ee($.__webglFramebuffer[xe],D,T,t.COLOR_ATTACHMENT0,fe,xe);else ee($.__webglFramebuffer,D,T,t.COLOR_ATTACHMENT0,fe,0);v(T)&&d(fe),n.unbindTexture()}D.depthBuffer&&Re(D)}function it(D){const T=D.textures;for(let $=0,ne=T.length;$<ne;$++){const se=T[$];if(v(se)){const J=D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=i.get(se).__webglTexture;n.bindTexture(J,be),d(J),n.unbindTexture()}}}const U=[],pt=[];function Ye(D){if(D.samples>0){if(Te(D)===!1){const T=D.textures,$=D.width,ne=D.height;let se=t.COLOR_BUFFER_BIT;const J=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(D),fe=T.length>1;if(fe)for(let xe=0;xe<T.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let xe=0;xe<T.length;xe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[xe]);const He=i.get(T[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,He,0)}t.blitFramebuffer(0,0,$,ne,0,0,$,ne,se,t.NEAREST),l===!0&&(U.length=0,pt.length=0,U.push(t.COLOR_ATTACHMENT0+xe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(U.push(J),pt.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,pt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,U))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let xe=0;xe<T.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,be.__webglColorRenderbuffer[xe]);const He=i.get(T[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,He,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function Ze(D){return Math.min(r.maxSamples,D.samples)}function Te(D){const T=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function xt(D){const T=o.render.frame;u.get(D)!==T&&(u.set(D,T),D.update())}function Ne(D,T){const $=D.colorSpace,ne=D.format,se=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==vr&&$!==Ki&&(nt.getTransfer($)===ut?(ne!==Kn||se!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}function ze(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=P,this.setTexture2D=z,this.setTexture2DArray=k,this.setTexture3D=O,this.setTextureCube=F,this.rebindTextures=Le,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Te}function bT(t,e){function n(i,r=Ki){let s;const o=nt.getTransfer(r);if(i===Ni)return t.UNSIGNED_BYTE;if(i===Oh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===zh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===r_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===n_)return t.BYTE;if(i===i_)return t.SHORT;if(i===ha)return t.UNSIGNED_SHORT;if(i===kh)return t.INT;if(i===Wr)return t.UNSIGNED_INT;if(i===Ai)return t.FLOAT;if(i===Sa)return t.HALF_FLOAT;if(i===s_)return t.ALPHA;if(i===o_)return t.RGB;if(i===Kn)return t.RGBA;if(i===a_)return t.LUMINANCE;if(i===l_)return t.LUMINANCE_ALPHA;if(i===zs)return t.DEPTH_COMPONENT;if(i===eo)return t.DEPTH_STENCIL;if(i===c_)return t.RED;if(i===Bh)return t.RED_INTEGER;if(i===u_)return t.RG;if(i===Hh)return t.RG_INTEGER;if(i===Vh)return t.RGBA_INTEGER;if(i===zl||i===Bl||i===Hl||i===Vl)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===zl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===zl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===df||i===ff||i===hf||i===pf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===df)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ff)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mf||i===gf||i===vf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===mf||i===gf)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_f||i===xf||i===yf||i===Sf||i===Mf||i===Ef||i===wf||i===Tf||i===Af||i===Cf||i===Rf||i===bf||i===Pf||i===Lf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===_f)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ef)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Af)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gl||i===Df||i===If)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Gl)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Df)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===If)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===d_||i===Nf||i===Uf||i===Ff)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Gl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Nf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Uf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ff)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Js?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class PT extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xe extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LT={type:"move"};class Ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const v=n.getJointPose(y,i),d=this._getHandJoint(c,y);v!==null&&(d.matrix.fromArray(v.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=v.radius),d.visible=v!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(LT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Xe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const DT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IT=`
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

}`;class NT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new sn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hr({vertexShader:DT,fragmentShader:IT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ie(new qr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UT extends ao{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,_=null;const y=new NT,v=n.getContextAttributes();let d=null,m=null;const g=[],x=[],A=new _e;let w=null;const M=new Ln;M.layers.enable(1),M.viewport=new Dt;const R=new Ln;R.layers.enable(2),R.viewport=new Dt;const E=[M,R],S=new PT;S.layers.enable(1),S.layers.enable(2);let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=g[Y];return ee===void 0&&(ee=new Ku,g[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=g[Y];return ee===void 0&&(ee=new Ku,g[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=g[Y];return ee===void 0&&(ee=new Ku,g[Y]=ee),ee.getHandSpace()};function I(Y){const ee=x.indexOf(Y.inputSource);if(ee===-1)return;const ue=g[ee];ue!==void 0&&(ue.update(Y.inputSource,Y.frame,c||o),ue.dispatchEvent({type:Y.type,data:Y.inputSource}))}function z(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",k);for(let Y=0;Y<g.length;Y++){const ee=x[Y];ee!==null&&(x[Y]=null,g[Y].disconnect(ee))}P=null,G=null,y.reset(),e.setRenderTarget(d),p=null,f=null,h=null,r=null,m=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",z),r.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const ee={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new jr(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ee=null,ue=null,te=null;v.depth&&(te=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=v.stencil?eo:zs,ue=v.stencil?Js:Wr);const Re={colorFormat:n.RGBA8,depthFormat:te,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),m=new jr(f.textureWidth,f.textureHeight,{format:Kn,type:Ni,depthTexture:new T_(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function k(Y){for(let ee=0;ee<Y.removed.length;ee++){const ue=Y.removed[ee],te=x.indexOf(ue);te>=0&&(x[te]=null,g[te].disconnect(ue))}for(let ee=0;ee<Y.added.length;ee++){const ue=Y.added[ee];let te=x.indexOf(ue);if(te===-1){for(let Le=0;Le<g.length;Le++)if(Le>=x.length){x.push(ue),te=Le;break}else if(x[Le]===null){x[Le]=ue,te=Le;break}if(te===-1)break}const Re=g[te];Re&&Re.connect(ue)}}const O=new N,F=new N;function L(Y,ee,ue){O.setFromMatrixPosition(ee.matrixWorld),F.setFromMatrixPosition(ue.matrixWorld);const te=O.distanceTo(F),Re=ee.projectionMatrix.elements,Le=ue.projectionMatrix.elements,Be=Re[14]/(Re[10]-1),it=Re[14]/(Re[10]+1),U=(Re[9]+1)/Re[5],pt=(Re[9]-1)/Re[5],Ye=(Re[8]-1)/Re[0],Ze=(Le[8]+1)/Le[0],Te=Be*Ye,xt=Be*Ze,Ne=te/(-Ye+Ze),ze=Ne*-Ye;ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ze),Y.translateZ(Ne),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const D=Be+Ne,T=it+Ne,$=Te-ze,ne=xt+(te-ze),se=U*it/T*D,J=pt*it/T*D;Y.projectionMatrix.makePerspective($,ne,se,J,D,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function W(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;y.texture!==null&&(Y.near=y.depthNear,Y.far=y.depthFar),S.near=R.near=M.near=Y.near,S.far=R.far=M.far=Y.far,(P!==S.near||G!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,G=S.far,M.near=P,M.far=G,R.near=P,R.far=G,M.updateProjectionMatrix(),R.updateProjectionMatrix(),Y.updateProjectionMatrix());const ee=Y.parent,ue=S.cameras;W(S,ee);for(let te=0;te<ue.length;te++)W(ue[te],ee);ue.length===2?L(S,M,R):S.projectionMatrix.copy(M.projectionMatrix),q(Y,S,ee)};function q(Y,ee,ue){ue===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(ue.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=pa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let Q=null;function he(Y,ee){if(u=ee.getViewerPose(c||o),_=ee,u!==null){const ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let te=!1;ue.length!==S.cameras.length&&(S.cameras.length=0,te=!0);for(let Le=0;Le<ue.length;Le++){const Be=ue[Le];let it=null;if(p!==null)it=p.getViewport(Be);else{const pt=h.getViewSubImage(f,Be);it=pt.viewport,Le===0&&(e.setRenderTargetTextures(m,pt.colorTexture,f.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(m))}let U=E[Le];U===void 0&&(U=new Ln,U.layers.enable(Le),U.viewport=new Dt,E[Le]=U),U.matrix.fromArray(Be.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Be.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(it.x,it.y,it.width,it.height),Le===0&&(S.matrix.copy(U.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),te===!0&&S.cameras.push(U)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Le=h.getDepthInformation(ue[0]);Le&&Le.isValid&&Le.texture&&y.init(e,Le,r.renderState)}}for(let ue=0;ue<g.length;ue++){const te=x[ue],Re=g[ue];te!==null&&Re!==void 0&&Re.update(te,ee,c||o)}Q&&Q(Y,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),_=null}const Ce=new E_;Ce.setAnimationLoop(he),this.setAnimationLoop=function(Y){Q=Y},this.dispose=function(){}}}const wr=new fi,FT=new ft;function kT(t,e){function n(v,d){v.matrixAutoUpdate===!0&&v.updateMatrix(),d.value.copy(v.matrix)}function i(v,d){d.color.getRGB(v.fogColor.value,y_(t)),d.isFog?(v.fogNear.value=d.near,v.fogFar.value=d.far):d.isFogExp2&&(v.fogDensity.value=d.density)}function r(v,d,m,g,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(v,d):d.isMeshToonMaterial?(s(v,d),h(v,d)):d.isMeshPhongMaterial?(s(v,d),u(v,d)):d.isMeshStandardMaterial?(s(v,d),f(v,d),d.isMeshPhysicalMaterial&&p(v,d,x)):d.isMeshMatcapMaterial?(s(v,d),_(v,d)):d.isMeshDepthMaterial?s(v,d):d.isMeshDistanceMaterial?(s(v,d),y(v,d)):d.isMeshNormalMaterial?s(v,d):d.isLineBasicMaterial?(o(v,d),d.isLineDashedMaterial&&a(v,d)):d.isPointsMaterial?l(v,d,m,g):d.isSpriteMaterial?c(v,d):d.isShadowMaterial?(v.color.value.copy(d.color),v.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(v,d){v.opacity.value=d.opacity,d.color&&v.diffuse.value.copy(d.color),d.emissive&&v.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(v.map.value=d.map,n(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.bumpMap&&(v.bumpMap.value=d.bumpMap,n(d.bumpMap,v.bumpMapTransform),v.bumpScale.value=d.bumpScale,d.side===hn&&(v.bumpScale.value*=-1)),d.normalMap&&(v.normalMap.value=d.normalMap,n(d.normalMap,v.normalMapTransform),v.normalScale.value.copy(d.normalScale),d.side===hn&&v.normalScale.value.negate()),d.displacementMap&&(v.displacementMap.value=d.displacementMap,n(d.displacementMap,v.displacementMapTransform),v.displacementScale.value=d.displacementScale,v.displacementBias.value=d.displacementBias),d.emissiveMap&&(v.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,v.emissiveMapTransform)),d.specularMap&&(v.specularMap.value=d.specularMap,n(d.specularMap,v.specularMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest);const m=e.get(d),g=m.envMap,x=m.envMapRotation;g&&(v.envMap.value=g,wr.copy(x),wr.x*=-1,wr.y*=-1,wr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),v.envMapRotation.value.setFromMatrix4(FT.makeRotationFromEuler(wr)),v.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=d.reflectivity,v.ior.value=d.ior,v.refractionRatio.value=d.refractionRatio),d.lightMap&&(v.lightMap.value=d.lightMap,v.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,v.lightMapTransform)),d.aoMap&&(v.aoMap.value=d.aoMap,v.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,v.aoMapTransform))}function o(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,d.map&&(v.map.value=d.map,n(d.map,v.mapTransform))}function a(v,d){v.dashSize.value=d.dashSize,v.totalSize.value=d.dashSize+d.gapSize,v.scale.value=d.scale}function l(v,d,m,g){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.size.value=d.size*m,v.scale.value=g*.5,d.map&&(v.map.value=d.map,n(d.map,v.uvTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function c(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.rotation.value=d.rotation,d.map&&(v.map.value=d.map,n(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function u(v,d){v.specular.value.copy(d.specular),v.shininess.value=Math.max(d.shininess,1e-4)}function h(v,d){d.gradientMap&&(v.gradientMap.value=d.gradientMap)}function f(v,d){v.metalness.value=d.metalness,d.metalnessMap&&(v.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,v.metalnessMapTransform)),v.roughness.value=d.roughness,d.roughnessMap&&(v.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,v.roughnessMapTransform)),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)}function p(v,d,m){v.ior.value=d.ior,d.sheen>0&&(v.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),v.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(v.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,v.sheenColorMapTransform)),d.sheenRoughnessMap&&(v.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,v.sheenRoughnessMapTransform))),d.clearcoat>0&&(v.clearcoat.value=d.clearcoat,v.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(v.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,v.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(v.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===hn&&v.clearcoatNormalScale.value.negate())),d.dispersion>0&&(v.dispersion.value=d.dispersion),d.iridescence>0&&(v.iridescence.value=d.iridescence,v.iridescenceIOR.value=d.iridescenceIOR,v.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(v.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,v.iridescenceMapTransform)),d.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),d.transmission>0&&(v.transmission.value=d.transmission,v.transmissionSamplerMap.value=m.texture,v.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(v.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,v.transmissionMapTransform)),v.thickness.value=d.thickness,d.thicknessMap&&(v.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=d.attenuationDistance,v.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(v.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(v.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=d.specularIntensity,v.specularColor.value.copy(d.specularColor),d.specularColorMap&&(v.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,v.specularColorMapTransform)),d.specularIntensityMap&&(v.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,v.specularIntensityMapTransform))}function _(v,d){d.matcap&&(v.matcap.value=d.matcap)}function y(v,d){const m=e.get(d).light;v.referencePosition.value.setFromMatrixPosition(m.matrixWorld),v.nearDistance.value=m.shadow.camera.near,v.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function OT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,g){const x=g.program;i.uniformBlockBinding(m,x)}function c(m,g){let x=r[m.id];x===void 0&&(_(m),x=u(m),r[m.id]=x,m.addEventListener("dispose",v));const A=g.program;i.updateUBOMapping(m,A);const w=e.render.frame;s[m.id]!==w&&(f(m),s[m.id]=w)}function u(m){const g=h();m.__bindingPointIndex=g;const x=t.createBuffer(),A=m.__size,w=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,A,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,x),x}function h(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(m){const g=r[m.id],x=m.uniforms,A=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let w=0,M=x.length;w<M;w++){const R=Array.isArray(x[w])?x[w]:[x[w]];for(let E=0,S=R.length;E<S;E++){const P=R[E];if(p(P,w,E,A)===!0){const G=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let k=0;k<I.length;k++){const O=I[k],F=y(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,t.bufferSubData(t.UNIFORM_BUFFER,G+z,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):(O.toArray(P.__data,z),z+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,g,x,A){const w=m.value,M=g+"_"+x;if(A[M]===void 0)return typeof w=="number"||typeof w=="boolean"?A[M]=w:A[M]=w.clone(),!0;{const R=A[M];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return A[M]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function _(m){const g=m.uniforms;let x=0;const A=16;for(let M=0,R=g.length;M<R;M++){const E=Array.isArray(g[M])?g[M]:[g[M]];for(let S=0,P=E.length;S<P;S++){const G=E[S],I=Array.isArray(G.value)?G.value:[G.value];for(let z=0,k=I.length;z<k;z++){const O=I[z],F=y(O),L=x%A,W=L%F.boundary,q=L+W;x+=W,q!==0&&A-q<F.storage&&(x+=A-q),G.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=F.storage}}}const w=x%A;return w>0&&(x+=A-w),m.__size=x,m.__cache={},this}function y(m){const g={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(g.boundary=4,g.storage=4):m.isVector2?(g.boundary=8,g.storage=8):m.isVector3||m.isColor?(g.boundary=16,g.storage=12):m.isVector4?(g.boundary=16,g.storage=16):m.isMatrix3?(g.boundary=48,g.storage=48):m.isMatrix4?(g.boundary=64,g.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),g}function v(m){const g=m.target;g.removeEventListener("dispose",v);const x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function d(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class zT{constructor(e={}){const{canvas:n=b1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,v=null;const d=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=si,this.toneMapping=cr,this.toneMappingExposure=1;const g=this;let x=!1,A=0,w=0,M=null,R=-1,E=null;const S=new Dt,P=new Dt;let G=null;const I=new ke(0);let z=0,k=n.width,O=n.height,F=1,L=null,W=null;const q=new Dt(0,0,k,O),Q=new Dt(0,0,k,O);let he=!1;const Ce=new $h;let Y=!1,ee=!1;const ue=new ft,te=new N,Re=new Dt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function it(){return M===null?F:1}let U=i;function pt(C,H){return n.getContext(C,H)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Fh}`),n.addEventListener("webglcontextlost",K,!1),n.addEventListener("webglcontextrestored",Z,!1),n.addEventListener("webglcontextcreationerror",ce,!1),U===null){const H="webgl2";if(U=pt(H,C),U===null)throw pt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ye,Ze,Te,xt,Ne,ze,D,T,$,ne,se,J,be,fe,xe,He,oe,ve,$e,Fe,ye,Oe,We,mt;function B(){Ye=new jw(U),Ye.init(),Oe=new bT(U,Ye),Ze=new zw(U,Ye,e,Oe),Te=new AT(U),xt=new Yw(U),Ne=new fT,ze=new RT(U,Ye,Te,Ne,Ze,Oe,xt),D=new Hw(g),T=new Ww(g),$=new tM(U),We=new kw(U,$),ne=new Xw(U,$,xt,We),se=new Kw(U,ne,$,xt),$e=new qw(U,Ze,ze),He=new Bw(Ne),J=new dT(g,D,T,Ye,Ze,We,He),be=new kT(g,Ne),fe=new pT,xe=new yT(Ye),ve=new Fw(g,D,T,Te,se,f,l),oe=new TT(g,se,Ze),mt=new OT(U,xt,Ze,Te),Fe=new Ow(U,Ye,xt),ye=new $w(U,Ye,xt),xt.programs=J.programs,g.capabilities=Ze,g.extensions=Ye,g.properties=Ne,g.renderLists=fe,g.shadowMap=oe,g.state=Te,g.info=xt}B();const ae=new UT(g,U);this.xr=ae,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=Ye.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ye.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(C){C!==void 0&&(F=C,this.setSize(k,O,!1))},this.getSize=function(C){return C.set(k,O)},this.setSize=function(C,H,j=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,O=H,n.width=Math.floor(C*F),n.height=Math.floor(H*F),j===!0&&(n.style.width=C+"px",n.style.height=H+"px"),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(k*F,O*F).floor()},this.setDrawingBufferSize=function(C,H,j){k=C,O=H,F=j,n.width=Math.floor(C*j),n.height=Math.floor(H*j),this.setViewport(0,0,C,H)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(q)},this.setViewport=function(C,H,j,X){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,H,j,X),Te.viewport(S.copy(q).multiplyScalar(F).round())},this.getScissor=function(C){return C.copy(Q)},this.setScissor=function(C,H,j,X){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,H,j,X),Te.scissor(P.copy(Q).multiplyScalar(F).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(C){Te.setScissorTest(he=C)},this.setOpaqueSort=function(C){L=C},this.setTransparentSort=function(C){W=C},this.getClearColor=function(C){return C.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(C=!0,H=!0,j=!0){let X=0;if(C){let V=!1;if(M!==null){const le=M.texture.format;V=le===Vh||le===Hh||le===Bh}if(V){const le=M.texture.type,me=le===Ni||le===Wr||le===ha||le===Js||le===Oh||le===zh,Se=ve.getClearColor(),Ee=ve.getClearAlpha(),Ie=Se.r,Ue=Se.g,Pe=Se.b;me?(p[0]=Ie,p[1]=Ue,p[2]=Pe,p[3]=Ee,U.clearBufferuiv(U.COLOR,0,p)):(_[0]=Ie,_[1]=Ue,_[2]=Pe,_[3]=Ee,U.clearBufferiv(U.COLOR,0,_))}else X|=U.COLOR_BUFFER_BIT}H&&(X|=U.DEPTH_BUFFER_BIT),j&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",K,!1),n.removeEventListener("webglcontextrestored",Z,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),fe.dispose(),xe.dispose(),Ne.dispose(),D.dispose(),T.dispose(),se.dispose(),We.dispose(),mt.dispose(),J.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ni),ae.removeEventListener("sessionend",rp),_r.stop()};function K(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const C=xt.autoReset,H=oe.enabled,j=oe.autoUpdate,X=oe.needsUpdate,V=oe.type;B(),xt.autoReset=C,oe.enabled=H,oe.autoUpdate=j,oe.needsUpdate=X,oe.type=V}function ce(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function De(C){const H=C.target;H.removeEventListener("dispose",De),qe(H)}function qe(C){Tt(C),Ne.remove(C)}function Tt(C){const H=Ne.get(C).programs;H!==void 0&&(H.forEach(function(j){J.releaseProgram(j)}),C.isShaderMaterial&&J.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,j,X,V,le){H===null&&(H=Le);const me=V.isMesh&&V.matrixWorld.determinant()<0,Se=G_(C,H,j,X,V);Te.setMaterial(X,me);let Ee=j.index,Ie=1;if(X.wireframe===!0){if(Ee=ne.getWireframeAttribute(j),Ee===void 0)return;Ie=2}const Ue=j.drawRange,Pe=j.attributes.position;let Je=Ue.start*Ie,yt=(Ue.start+Ue.count)*Ie;le!==null&&(Je=Math.max(Je,le.start*Ie),yt=Math.min(yt,(le.start+le.count)*Ie)),Ee!==null?(Je=Math.max(Je,0),yt=Math.min(yt,Ee.count)):Pe!=null&&(Je=Math.max(Je,0),yt=Math.min(yt,Pe.count));const St=yt-Je;if(St<0||St===1/0)return;We.setup(V,X,Se,j,Ee);let gn,et=Fe;if(Ee!==null&&(gn=$.get(Ee),et=ye,et.setIndex(gn)),V.isMesh)X.wireframe===!0?(Te.setLineWidth(X.wireframeLinewidth*it()),et.setMode(U.LINES)):et.setMode(U.TRIANGLES);else if(V.isLine){let Ae=X.linewidth;Ae===void 0&&(Ae=1),Te.setLineWidth(Ae*it()),V.isLineSegments?et.setMode(U.LINES):V.isLineLoop?et.setMode(U.LINE_LOOP):et.setMode(U.LINE_STRIP)}else V.isPoints?et.setMode(U.POINTS):V.isSprite&&et.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)et.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))et.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ae=V._multiDrawStarts,Ht=V._multiDrawCounts,tt=V._multiDrawCount,Bn=Ee?$.get(Ee).bytesPerElement:1,Kr=Ne.get(X).currentProgram.getUniforms();for(let vn=0;vn<tt;vn++)Kr.setValue(U,"_gl_DrawID",vn),et.render(Ae[vn]/Bn,Ht[vn])}else if(V.isInstancedMesh)et.renderInstances(Je,St,V.count);else if(j.isInstancedBufferGeometry){const Ae=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ht=Math.min(j.instanceCount,Ae);et.renderInstances(Je,St,Ht)}else et.render(Je,St)};function Bt(C,H,j){C.transparent===!0&&C.side===Ei&&C.forceSinglePass===!1?(C.side=hn,C.needsUpdate=!0,Ta(C,H,j),C.side=fr,C.needsUpdate=!0,Ta(C,H,j),C.side=Ei):Ta(C,H,j)}this.compile=function(C,H,j=null){j===null&&(j=C),v=xe.get(j),v.init(H),m.push(v),j.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(v.pushLight(V),V.castShadow&&v.pushShadow(V))}),C!==j&&C.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(v.pushLight(V),V.castShadow&&v.pushShadow(V))}),v.setupLights();const X=new Set;return C.traverse(function(V){const le=V.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){const Se=le[me];Bt(Se,j,V),X.add(Se)}else Bt(le,j,V),X.add(le)}),m.pop(),v=null,X},this.compileAsync=function(C,H,j=null){const X=this.compile(C,H,j);return new Promise(V=>{function le(){if(X.forEach(function(me){Ne.get(me).currentProgram.isReady()&&X.delete(me)}),X.size===0){V(C);return}setTimeout(le,10)}Ye.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Qe=null;function pi(C){Qe&&Qe(C)}function ni(){_r.stop()}function rp(){_r.start()}const _r=new E_;_r.setAnimationLoop(pi),typeof self<"u"&&_r.setContext(self),this.setAnimationLoop=function(C){Qe=C,ae.setAnimationLoop(C),C===null?_r.stop():_r.start()},ae.addEventListener("sessionstart",ni),ae.addEventListener("sessionend",rp),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(H),H=ae.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,H,M),v=xe.get(C,m.length),v.init(H),m.push(v),ue.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ce.setFromProjectionMatrix(ue),ee=this.localClippingEnabled,Y=He.init(this.clippingPlanes,ee),y=fe.get(C,d.length),y.init(),d.push(y),ae.enabled===!0&&ae.isPresenting===!0){const le=g.xr.getDepthSensingMesh();le!==null&&qc(le,H,-1/0,g.sortObjects)}qc(C,H,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(L,W),Be=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Be&&ve.addToRenderList(y,C),this.info.render.frame++,Y===!0&&He.beginShadows();const j=v.state.shadowsArray;oe.render(j,C,H),Y===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=y.opaque,V=y.transmissive;if(v.setupLights(),H.isArrayCamera){const le=H.cameras;if(V.length>0)for(let me=0,Se=le.length;me<Se;me++){const Ee=le[me];op(X,V,C,Ee)}Be&&ve.render(C);for(let me=0,Se=le.length;me<Se;me++){const Ee=le[me];sp(y,C,Ee,Ee.viewport)}}else V.length>0&&op(X,V,C,H),Be&&ve.render(C),sp(y,C,H);M!==null&&(ze.updateMultisampleRenderTarget(M),ze.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(g,C,H),We.resetDefaultState(),R=-1,E=null,m.pop(),m.length>0?(v=m[m.length-1],Y===!0&&He.setGlobalState(g.clippingPlanes,v.state.camera)):v=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function qc(C,H,j,X){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ce.intersectsSprite(C)){X&&Re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ue);const me=se.update(C),Se=C.material;Se.visible&&y.push(C,me,Se,j,Re.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ce.intersectsObject(C))){const me=se.update(C),Se=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Re.copy(C.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Re.copy(me.boundingSphere.center)),Re.applyMatrix4(C.matrixWorld).applyMatrix4(ue)),Array.isArray(Se)){const Ee=me.groups;for(let Ie=0,Ue=Ee.length;Ie<Ue;Ie++){const Pe=Ee[Ie],Je=Se[Pe.materialIndex];Je&&Je.visible&&y.push(C,me,Je,j,Re.z,Pe)}}else Se.visible&&y.push(C,me,Se,j,Re.z,null)}}const le=C.children;for(let me=0,Se=le.length;me<Se;me++)qc(le[me],H,j,X)}function sp(C,H,j,X){const V=C.opaque,le=C.transmissive,me=C.transparent;v.setupLightsView(j),Y===!0&&He.setGlobalState(g.clippingPlanes,j),X&&Te.viewport(S.copy(X)),V.length>0&&wa(V,H,j),le.length>0&&wa(le,H,j),me.length>0&&wa(me,H,j),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function op(C,H,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[X.id]===void 0&&(v.state.transmissionRenderTarget[X.id]=new jr(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Sa:Ni,minFilter:Ur,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const le=v.state.transmissionRenderTarget[X.id],me=X.viewport||S;le.setSize(me.z,me.w);const Se=g.getRenderTarget();g.setRenderTarget(le),g.getClearColor(I),z=g.getClearAlpha(),z<1&&g.setClearColor(16777215,.5),g.clear(),Be&&ve.render(j);const Ee=g.toneMapping;g.toneMapping=cr;const Ie=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),v.setupLightsView(X),Y===!0&&He.setGlobalState(g.clippingPlanes,X),wa(C,j,X),ze.updateMultisampleRenderTarget(le),ze.updateRenderTargetMipmap(le),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Pe=0,Je=H.length;Pe<Je;Pe++){const yt=H[Pe],St=yt.object,gn=yt.geometry,et=yt.material,Ae=yt.group;if(et.side===Ei&&St.layers.test(X.layers)){const Ht=et.side;et.side=hn,et.needsUpdate=!0,ap(St,j,X,gn,et,Ae),et.side=Ht,et.needsUpdate=!0,Ue=!0}}Ue===!0&&(ze.updateMultisampleRenderTarget(le),ze.updateRenderTargetMipmap(le))}g.setRenderTarget(Se),g.setClearColor(I,z),Ie!==void 0&&(X.viewport=Ie),g.toneMapping=Ee}function wa(C,H,j){const X=H.isScene===!0?H.overrideMaterial:null;for(let V=0,le=C.length;V<le;V++){const me=C[V],Se=me.object,Ee=me.geometry,Ie=X===null?me.material:X,Ue=me.group;Se.layers.test(j.layers)&&ap(Se,H,j,Ee,Ie,Ue)}}function ap(C,H,j,X,V,le){C.onBeforeRender(g,H,j,X,V,le),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.transparent===!0&&V.side===Ei&&V.forceSinglePass===!1?(V.side=hn,V.needsUpdate=!0,g.renderBufferDirect(j,H,X,V,C,le),V.side=fr,V.needsUpdate=!0,g.renderBufferDirect(j,H,X,V,C,le),V.side=Ei):g.renderBufferDirect(j,H,X,V,C,le),C.onAfterRender(g,H,j,X,V,le)}function Ta(C,H,j){H.isScene!==!0&&(H=Le);const X=Ne.get(C),V=v.state.lights,le=v.state.shadowsArray,me=V.state.version,Se=J.getParameters(C,V.state,le,H,j),Ee=J.getProgramCacheKey(Se);let Ie=X.programs;X.environment=C.isMeshStandardMaterial?H.environment:null,X.fog=H.fog,X.envMap=(C.isMeshStandardMaterial?T:D).get(C.envMap||X.environment),X.envMapRotation=X.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,Ie===void 0&&(C.addEventListener("dispose",De),Ie=new Map,X.programs=Ie);let Ue=Ie.get(Ee);if(Ue!==void 0){if(X.currentProgram===Ue&&X.lightsStateVersion===me)return cp(C,Se),Ue}else Se.uniforms=J.getUniforms(C),C.onBeforeCompile(Se,g),Ue=J.acquireProgram(Se,Ee),Ie.set(Ee,Ue),X.uniforms=Se.uniforms;const Pe=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Pe.clippingPlanes=He.uniform),cp(C,Se),X.needsLights=j_(C),X.lightsStateVersion=me,X.needsLights&&(Pe.ambientLightColor.value=V.state.ambient,Pe.lightProbe.value=V.state.probe,Pe.directionalLights.value=V.state.directional,Pe.directionalLightShadows.value=V.state.directionalShadow,Pe.spotLights.value=V.state.spot,Pe.spotLightShadows.value=V.state.spotShadow,Pe.rectAreaLights.value=V.state.rectArea,Pe.ltc_1.value=V.state.rectAreaLTC1,Pe.ltc_2.value=V.state.rectAreaLTC2,Pe.pointLights.value=V.state.point,Pe.pointLightShadows.value=V.state.pointShadow,Pe.hemisphereLights.value=V.state.hemi,Pe.directionalShadowMap.value=V.state.directionalShadowMap,Pe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pe.spotShadowMap.value=V.state.spotShadowMap,Pe.spotLightMatrix.value=V.state.spotLightMatrix,Pe.spotLightMap.value=V.state.spotLightMap,Pe.pointShadowMap.value=V.state.pointShadowMap,Pe.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Ue,X.uniformsList=null,Ue}function lp(C){if(C.uniformsList===null){const H=C.currentProgram.getUniforms();C.uniformsList=Wl.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function cp(C,H){const j=Ne.get(C);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function G_(C,H,j,X,V){H.isScene!==!0&&(H=Le),ze.resetTextureUnits();const le=H.fog,me=X.isMeshStandardMaterial?H.environment:null,Se=M===null?g.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:vr,Ee=(X.isMeshStandardMaterial?T:D).get(X.envMap||me),Ie=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ue=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pe=!!j.morphAttributes.position,Je=!!j.morphAttributes.normal,yt=!!j.morphAttributes.color;let St=cr;X.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(St=g.toneMapping);const gn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,et=gn!==void 0?gn.length:0,Ae=Ne.get(X),Ht=v.state.lights;if(Y===!0&&(ee===!0||C!==E)){const Cn=C===E&&X.id===R;He.setState(X,C,Cn)}let tt=!1;X.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Ht.state.version||Ae.outputColorSpace!==Se||V.isBatchedMesh&&Ae.batching===!1||!V.isBatchedMesh&&Ae.batching===!0||V.isBatchedMesh&&Ae.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ae.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ae.instancing===!1||!V.isInstancedMesh&&Ae.instancing===!0||V.isSkinnedMesh&&Ae.skinning===!1||!V.isSkinnedMesh&&Ae.skinning===!0||V.isInstancedMesh&&Ae.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ae.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ae.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ae.instancingMorph===!1&&V.morphTexture!==null||Ae.envMap!==Ee||X.fog===!0&&Ae.fog!==le||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==He.numPlanes||Ae.numIntersection!==He.numIntersection)||Ae.vertexAlphas!==Ie||Ae.vertexTangents!==Ue||Ae.morphTargets!==Pe||Ae.morphNormals!==Je||Ae.morphColors!==yt||Ae.toneMapping!==St||Ae.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Ae.__version=X.version);let Bn=Ae.currentProgram;tt===!0&&(Bn=Ta(X,H,V));let Kr=!1,vn=!1,Kc=!1;const At=Bn.getUniforms(),ki=Ae.uniforms;if(Te.useProgram(Bn.program)&&(Kr=!0,vn=!0,Kc=!0),X.id!==R&&(R=X.id,vn=!0),Kr||E!==C){At.setValue(U,"projectionMatrix",C.projectionMatrix),At.setValue(U,"viewMatrix",C.matrixWorldInverse);const Cn=At.map.cameraPosition;Cn!==void 0&&Cn.setValue(U,te.setFromMatrixPosition(C.matrixWorld)),Ze.logarithmicDepthBuffer&&At.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&At.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,vn=!0,Kc=!0)}if(V.isSkinnedMesh){At.setOptional(U,V,"bindMatrix"),At.setOptional(U,V,"bindMatrixInverse");const Cn=V.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),At.setValue(U,"boneTexture",Cn.boneTexture,ze))}V.isBatchedMesh&&(At.setOptional(U,V,"batchingTexture"),At.setValue(U,"batchingTexture",V._matricesTexture,ze),At.setOptional(U,V,"batchingIdTexture"),At.setValue(U,"batchingIdTexture",V._indirectTexture,ze),At.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&At.setValue(U,"batchingColorTexture",V._colorsTexture,ze));const Zc=j.morphAttributes;if((Zc.position!==void 0||Zc.normal!==void 0||Zc.color!==void 0)&&$e.update(V,j,Bn),(vn||Ae.receiveShadow!==V.receiveShadow)&&(Ae.receiveShadow=V.receiveShadow,At.setValue(U,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ki.envMap.value=Ee,ki.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&H.environment!==null&&(ki.envMapIntensity.value=H.environmentIntensity),vn&&(At.setValue(U,"toneMappingExposure",g.toneMappingExposure),Ae.needsLights&&W_(ki,Kc),le&&X.fog===!0&&be.refreshFogUniforms(ki,le),be.refreshMaterialUniforms(ki,X,F,O,v.state.transmissionRenderTarget[C.id]),Wl.upload(U,lp(Ae),ki,ze)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Wl.upload(U,lp(Ae),ki,ze),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&At.setValue(U,"center",V.center),At.setValue(U,"modelViewMatrix",V.modelViewMatrix),At.setValue(U,"normalMatrix",V.normalMatrix),At.setValue(U,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Cn=X.uniformsGroups;for(let Qc=0,X_=Cn.length;Qc<X_;Qc++){const up=Cn[Qc];mt.update(up,Bn),mt.bind(up,Bn)}}return Bn}function W_(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function j_(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,H,j){Ne.get(C.texture).__webglTexture=H,Ne.get(C.depthTexture).__webglTexture=j;const X=Ne.get(C);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=j===void 0,X.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,H){const j=Ne.get(C);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,j=0){M=C,A=H,w=j;let X=!0,V=null,le=!1,me=!1;if(C){const Ee=Ne.get(C);Ee.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(U.FRAMEBUFFER,null),X=!1):Ee.__webglFramebuffer===void 0?ze.setupRenderTarget(C):Ee.__hasExternalTextures&&ze.rebindTextures(C,Ne.get(C.texture).__webglTexture,Ne.get(C.depthTexture).__webglTexture);const Ie=C.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(me=!0);const Ue=Ne.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ue[H])?V=Ue[H][j]:V=Ue[H],le=!0):C.samples>0&&ze.useMultisampledRTT(C)===!1?V=Ne.get(C).__webglMultisampledFramebuffer:Array.isArray(Ue)?V=Ue[j]:V=Ue,S.copy(C.viewport),P.copy(C.scissor),G=C.scissorTest}else S.copy(q).multiplyScalar(F).floor(),P.copy(Q).multiplyScalar(F).floor(),G=he;if(Te.bindFramebuffer(U.FRAMEBUFFER,V)&&X&&Te.drawBuffers(C,V),Te.viewport(S),Te.scissor(P),Te.setScissorTest(G),le){const Ee=Ne.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ee.__webglTexture,j)}else if(me){const Ee=Ne.get(C.texture),Ie=H||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.__webglTexture,j||0,Ie)}R=-1},this.readRenderTargetPixels=function(C,H,j,X,V,le,me){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ne.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){Te.bindFramebuffer(U.FRAMEBUFFER,Se);try{const Ee=C.texture,Ie=Ee.format,Ue=Ee.type;if(!Ze.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-X&&j>=0&&j<=C.height-V&&U.readPixels(H,j,X,V,Oe.convert(Ie),Oe.convert(Ue),le)}finally{const Ee=M!==null?Ne.get(M).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(C,H,j,X,V,le,me){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ne.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){Te.bindFramebuffer(U.FRAMEBUFFER,Se);try{const Ee=C.texture,Ie=Ee.format,Ue=Ee.type;if(!Ze.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=C.width-X&&j>=0&&j<=C.height-V){const Pe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Pe),U.bufferData(U.PIXEL_PACK_BUFFER,le.byteLength,U.STREAM_READ),U.readPixels(H,j,X,V,Oe.convert(Ie),Oe.convert(Ue),0),U.flush();const Je=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await P1(U,Je,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,Pe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,le)}finally{U.deleteBuffer(Pe),U.deleteSync(Je)}return le}}finally{const Ee=M!==null?Ne.get(M).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(C,H=null,j=0){C.isTexture!==!0&&(Hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,C=arguments[1]);const X=Math.pow(2,-j),V=Math.floor(C.image.width*X),le=Math.floor(C.image.height*X),me=H!==null?H.x:0,Se=H!==null?H.y:0;ze.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,me,Se,V,le),Te.unbindTexture()},this.copyTextureToTexture=function(C,H,j=null,X=null,V=0){C.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1],H=arguments[2],V=arguments[3]||0,j=null);let le,me,Se,Ee,Ie,Ue;j!==null?(le=j.max.x-j.min.x,me=j.max.y-j.min.y,Se=j.min.x,Ee=j.min.y):(le=C.image.width,me=C.image.height,Se=0,Ee=0),X!==null?(Ie=X.x,Ue=X.y):(Ie=0,Ue=0);const Pe=Oe.convert(H.format),Je=Oe.convert(H.type);ze.setTexture2D(H,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const yt=U.getParameter(U.UNPACK_ROW_LENGTH),St=U.getParameter(U.UNPACK_IMAGE_HEIGHT),gn=U.getParameter(U.UNPACK_SKIP_PIXELS),et=U.getParameter(U.UNPACK_SKIP_ROWS),Ae=U.getParameter(U.UNPACK_SKIP_IMAGES),Ht=C.isCompressedTexture?C.mipmaps[V]:C.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Ht.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ht.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Se),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ee),C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,V,Ie,Ue,le,me,Pe,Je,Ht.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,V,Ie,Ue,Ht.width,Ht.height,Pe,Ht.data):U.texSubImage2D(U.TEXTURE_2D,V,Ie,Ue,le,me,Pe,Je,Ht),U.pixelStorei(U.UNPACK_ROW_LENGTH,yt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,St),U.pixelStorei(U.UNPACK_SKIP_PIXELS,gn),U.pixelStorei(U.UNPACK_SKIP_ROWS,et),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ae),V===0&&H.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(C,H,j=null,X=null,V=0){C.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,X=arguments[1]||null,C=arguments[2],H=arguments[3],V=arguments[4]||0);let le,me,Se,Ee,Ie,Ue,Pe,Je,yt;const St=C.isCompressedTexture?C.mipmaps[V]:C.image;j!==null?(le=j.max.x-j.min.x,me=j.max.y-j.min.y,Se=j.max.z-j.min.z,Ee=j.min.x,Ie=j.min.y,Ue=j.min.z):(le=St.width,me=St.height,Se=St.depth,Ee=0,Ie=0,Ue=0),X!==null?(Pe=X.x,Je=X.y,yt=X.z):(Pe=0,Je=0,yt=0);const gn=Oe.convert(H.format),et=Oe.convert(H.type);let Ae;if(H.isData3DTexture)ze.setTexture3D(H,0),Ae=U.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)ze.setTexture2DArray(H,0),Ae=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const Ht=U.getParameter(U.UNPACK_ROW_LENGTH),tt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Bn=U.getParameter(U.UNPACK_SKIP_PIXELS),Kr=U.getParameter(U.UNPACK_SKIP_ROWS),vn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,St.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,St.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ee),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ie),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ue),C.isDataTexture||C.isData3DTexture?U.texSubImage3D(Ae,V,Pe,Je,yt,le,me,Se,gn,et,St.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(Ae,V,Pe,Je,yt,le,me,Se,gn,St.data):U.texSubImage3D(Ae,V,Pe,Je,yt,le,me,Se,gn,et,St),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ht),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,tt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Bn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Kr),U.pixelStorei(U.UNPACK_SKIP_IMAGES,vn),V===0&&H.generateMipmaps&&U.generateMipmap(Ae),Te.unbindTexture()},this.initRenderTarget=function(C){Ne.get(C).__webglFramebuffer===void 0&&ze.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ze.setTextureCube(C,0):C.isData3DTexture?ze.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ze.setTexture2DArray(C,0):ze.setTexture2D(C,0),Te.unbindTexture()},this.resetState=function(){A=0,w=0,M=null,Te.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Gh?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===jc?"display-p3":"srgb"}}class qh{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=n,this.far=i}clone(){return new qh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class BT extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class HT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=kf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hs("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new N;class Mc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix4(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyNormalMatrix(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.transformDirection(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=qn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=qn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=qn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=qn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Jn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class P_ extends Yr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ms;const Eo=new N,gs=new N,vs=new N,_s=new _e,wo=new _e,L_=new ft,fl=new N,To=new N,hl=new N,g0=new _e,Zu=new _e,v0=new _e;class VT extends bt{constructor(e=new P_){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new Pt;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new HT(n,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new Mc(i,3,0,!1)),ms.setAttribute("uv",new Mc(i,2,3,!1))}this.geometry=ms,this.material=e,this.center=new _e(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),L_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-vs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;pl(fl.set(-.5,-.5,0),vs,o,gs,r,s),pl(To.set(.5,-.5,0),vs,o,gs,r,s),pl(hl.set(.5,.5,0),vs,o,gs,r,s),g0.set(0,0),Zu.set(1,0),v0.set(1,1);let a=e.ray.intersectTriangle(fl,To,hl,!1,Eo);if(a===null&&(pl(To.set(-.5,.5,0),vs,o,gs,r,s),Zu.set(0,1),a=e.ray.intersectTriangle(fl,hl,To,!1,Eo),a===null))return;const l=e.ray.origin.distanceTo(Eo);l<e.near||l>e.far||n.push({distance:l,point:Eo.clone(),uv:Dn.getInterpolation(Eo,fl,To,hl,g0,Zu,v0,new _e),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function pl(t,e,n,i,r,s){_s.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(wo.x=s*_s.x-r*_s.y,wo.y=r*_s.x+s*_s.y):wo.copy(_s),t.copy(e),t.x+=wo.x,t.y+=wo.y,t.applyMatrix4(L_)}class Gs extends Yr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ec=new N,wc=new N,_0=new ft,Ao=new jh,ml=new Xc,Qu=new N,x0=new N;class $o extends bt{constructor(e=new Pt,n=new Gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Ec.fromBufferAttribute(n,r-1),wc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Ec.distanceTo(wc);e.setAttribute("lineDistance",new ot(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(r),ml.radius+=s,e.ray.intersectsSphere(ml)===!1)return;_0.copy(r).invert(),Ao.copy(e.ray).applyMatrix4(_0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let y=p,v=_-1;y<v;y+=c){const d=u.getX(y),m=u.getX(y+1),g=gl(this,e,Ao,l,d,m);g&&n.push(g)}if(this.isLineLoop){const y=u.getX(_-1),v=u.getX(p),d=gl(this,e,Ao,l,y,v);d&&n.push(d)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let y=p,v=_-1;y<v;y+=c){const d=gl(this,e,Ao,l,y,y+1);d&&n.push(d)}if(this.isLineLoop){const y=gl(this,e,Ao,l,_-1,p);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function gl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Ec.fromBufferAttribute(o,r),wc.fromBufferAttribute(o,s),n.distanceSqToSegment(Ec,wc,Qu,x0)>i)return;Qu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Qu);if(!(l<e.near||l>e.far))return{distance:l,point:x0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const y0=new N,S0=new N;class GT extends $o{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)y0.fromBufferAttribute(n,r),S0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+y0.distanceTo(S0);e.setAttribute("lineDistance",new ot(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kh extends sn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new _e:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new N,r=[],s=[],o=[],a=new N,l=new ft;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Gt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Gt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class D_ extends Fi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new _e){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class WT extends D_{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Zh(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const vl=new N,Ju=new Zh,ed=new Zh,td=new Zh;class I_ extends Fi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new N){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(vl.subVectors(r[0],r[1]).add(r[0]),c=vl);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(vl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=vl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),p),y=Math.pow(h.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(u),p);y<1e-4&&(y=1),_<1e-4&&(_=y),v<1e-4&&(v=y),Ju.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,y,v),ed.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,y,v),td.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,y,v)}else this.curveType==="catmullrom"&&(Ju.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),ed.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),td.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Ju.calc(l),ed.calc(l),td.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function M0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function jT(t,e){const n=1-t;return n*n*e}function XT(t,e){return 2*(1-t)*t*e}function $T(t,e){return t*t*e}function Yo(t,e,n,i){return jT(t,e)+XT(t,n)+$T(t,i)}function YT(t,e){const n=1-t;return n*n*n*e}function qT(t,e){const n=1-t;return 3*n*n*t*e}function KT(t,e){return 3*(1-t)*t*t*e}function ZT(t,e){return t*t*t*e}function qo(t,e,n,i,r){return YT(t,e)+qT(t,n)+KT(t,i)+ZT(t,r)}class QT extends Fi{constructor(e=new _e,n=new _e,i=new _e,r=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new _e){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(qo(e,r.x,s.x,o.x,a.x),qo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class JT extends Fi{constructor(e=new N,n=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new N){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(qo(e,r.x,s.x,o.x,a.x),qo(e,r.y,s.y,o.y,a.y),qo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class eA extends Fi{constructor(e=new _e,n=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new _e){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new _e){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class N_ extends Fi{constructor(e=new N,n=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new N){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new N){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tA extends Fi{constructor(e=new _e,n=new _e,i=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new _e){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Yo(e,r.x,s.x,o.x),Yo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tc extends Fi{constructor(e=new N,n=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new N){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Yo(e,r.x,s.x,o.x),Yo(e,r.y,s.y,o.y),Yo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nA extends Fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new _e){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(M0(a,l.x,c.x,u.x,h.x),M0(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new _e().fromArray(r))}return this}}var iA=Object.freeze({__proto__:null,ArcCurve:WT,CatmullRomCurve3:I_,CubicBezierCurve:QT,CubicBezierCurve3:JT,EllipseCurve:D_,LineCurve:eA,LineCurve3:N_,QuadraticBezierCurve:tA,QuadraticBezierCurve3:Tc,SplineCurve:nA});class Qh extends Pt{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new N,u=new _e;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=n;h++,f+=3){const p=i+h/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(a,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class mn extends Pt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],p=[];let _=0;const y=[],v=i/2;let d=0;m(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new ot(h,3)),this.setAttribute("normal",new ot(f,3)),this.setAttribute("uv",new ot(p,2));function m(){const x=new N,A=new N;let w=0;const M=(n-e)/i;for(let R=0;R<=s;R++){const E=[],S=R/s,P=S*(n-e)+e;for(let G=0;G<=r;G++){const I=G/r,z=I*l+a,k=Math.sin(z),O=Math.cos(z);A.x=P*k,A.y=-S*i+v,A.z=P*O,h.push(A.x,A.y,A.z),x.set(k,M,O).normalize(),f.push(x.x,x.y,x.z),p.push(I,1-S),E.push(_++)}y.push(E)}for(let R=0;R<r;R++)for(let E=0;E<s;E++){const S=y[E][R],P=y[E+1][R],G=y[E+1][R+1],I=y[E][R+1];u.push(S,P,I),u.push(P,G,I),w+=6}c.addGroup(d,w,0),d+=w}function g(x){const A=_,w=new _e,M=new N;let R=0;const E=x===!0?e:n,S=x===!0?1:-1;for(let G=1;G<=r;G++)h.push(0,v*S,0),f.push(0,S,0),p.push(.5,.5),_++;const P=_;for(let G=0;G<=r;G++){const z=G/r*l+a,k=Math.cos(z),O=Math.sin(z);M.x=E*O,M.y=v*S,M.z=E*k,h.push(M.x,M.y,M.z),f.push(0,S,0),w.x=k*.5+.5,w.y=O*.5*S+.5,p.push(w.x,w.y),_++}for(let G=0;G<r;G++){const I=A+G,z=P+G;x===!0?u.push(z,z+1,I):u.push(z+1,z,I),R+=3}c.addGroup(d,R,x===!0?1:2),d+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jh extends mn{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Jh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ep extends Pt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new ot(s,3)),this.setAttribute("normal",new ot(s.slice(),3)),this.setAttribute("uv",new ot(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const g=new N,x=new N,A=new N;for(let w=0;w<n.length;w+=3)p(n[w+0],g),p(n[w+1],x),p(n[w+2],A),l(g,x,A,m)}function l(m,g,x,A){const w=A+1,M=[];for(let R=0;R<=w;R++){M[R]=[];const E=m.clone().lerp(x,R/w),S=g.clone().lerp(x,R/w),P=w-R;for(let G=0;G<=P;G++)G===0&&R===w?M[R][G]=E:M[R][G]=E.clone().lerp(S,G/P)}for(let R=0;R<w;R++)for(let E=0;E<2*(w-R)-1;E++){const S=Math.floor(E/2);E%2===0?(f(M[R][S+1]),f(M[R+1][S]),f(M[R][S])):(f(M[R][S+1]),f(M[R+1][S+1]),f(M[R+1][S]))}}function c(m){const g=new N;for(let x=0;x<s.length;x+=3)g.x=s[x+0],g.y=s[x+1],g.z=s[x+2],g.normalize().multiplyScalar(m),s[x+0]=g.x,s[x+1]=g.y,s[x+2]=g.z}function u(){const m=new N;for(let g=0;g<s.length;g+=3){m.x=s[g+0],m.y=s[g+1],m.z=s[g+2];const x=v(m)/2/Math.PI+.5,A=d(m)/Math.PI+.5;o.push(x,1-A)}_(),h()}function h(){for(let m=0;m<o.length;m+=6){const g=o[m+0],x=o[m+2],A=o[m+4],w=Math.max(g,x,A),M=Math.min(g,x,A);w>.9&&M<.1&&(g<.2&&(o[m+0]+=1),x<.2&&(o[m+2]+=1),A<.2&&(o[m+4]+=1))}}function f(m){s.push(m.x,m.y,m.z)}function p(m,g){const x=m*3;g.x=e[x+0],g.y=e[x+1],g.z=e[x+2]}function _(){const m=new N,g=new N,x=new N,A=new N,w=new _e,M=new _e,R=new _e;for(let E=0,S=0;E<s.length;E+=9,S+=6){m.set(s[E+0],s[E+1],s[E+2]),g.set(s[E+3],s[E+4],s[E+5]),x.set(s[E+6],s[E+7],s[E+8]),w.set(o[S+0],o[S+1]),M.set(o[S+2],o[S+3]),R.set(o[S+4],o[S+5]),A.copy(m).add(g).add(x).divideScalar(3);const P=v(A);y(w,S+0,m,P),y(M,S+2,g,P),y(R,S+4,x,P)}}function y(m,g,x,A){A<0&&m.x===1&&(o[g]=m.x-1),x.x===0&&x.z===0&&(o[g]=A/2/Math.PI+.5)}function v(m){return Math.atan2(m.z,-m.x)}function d(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ep(e.vertices,e.indices,e.radius,e.details)}}const _l=new N,xl=new N,nd=new N,yl=new Dn;class rA extends Pt{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Bs*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:y,b:v,c:d}=yl;if(y.fromBufferAttribute(a,c[0]),v.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),yl.getNormal(nd),h[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,h[1]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){const g=(m+1)%3,x=h[m],A=h[g],w=yl[u[m]],M=yl[u[g]],R=`${x}_${A}`,E=`${A}_${x}`;E in f&&f[E]?(nd.dot(f[E].normal)<=s&&(p.push(w.x,w.y,w.z),p.push(M.x,M.y,M.z)),f[E]=null):R in f||(f[R]={index0:c[m],index1:c[g],normal:nd.clone()})}}for(const _ in f)if(f[_]){const{index0:y,index1:v}=f[_];_l.fromBufferAttribute(a,y),xl.fromBufferAttribute(a,v),p.push(_l.x,_l.y,_l.z),p.push(xl.x,xl.y,xl.z)}this.setAttribute("position",new ot(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class tp extends ep{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new tp(e.radius,e.detail)}}class ti extends Pt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new N,f=new N,p=[],_=[],y=[],v=[];for(let d=0;d<=i;d++){const m=[],g=d/i;let x=0;d===0&&o===0?x=.5/n:d===i&&l===Math.PI&&(x=-.5/n);for(let A=0;A<=n;A++){const w=A/n;h.x=-e*Math.cos(r+w*s)*Math.sin(o+g*a),h.y=e*Math.cos(o+g*a),h.z=e*Math.sin(r+w*s)*Math.sin(o+g*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),v.push(w+x,1-g),m.push(c++)}u.push(m)}for(let d=0;d<i;d++)for(let m=0;m<n;m++){const g=u[d][m+1],x=u[d][m],A=u[d+1][m],w=u[d+1][m+1];(d!==0||o>0)&&p.push(g,x,w),(d!==i-1||l<Math.PI)&&p.push(x,A,w)}this.setIndex(p),this.setAttribute("position",new ot(_,3)),this.setAttribute("normal",new ot(y,3)),this.setAttribute("uv",new ot(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class np extends Pt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new N,h=new N,f=new N;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const y=_/r*s,v=p/i*Math.PI*2;h.x=(e+n*Math.cos(v))*Math.cos(y),h.y=(e+n*Math.cos(v))*Math.sin(y),h.z=n*Math.sin(v),a.push(h.x,h.y,h.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const y=(r+1)*p+_-1,v=(r+1)*(p-1)+_-1,d=(r+1)*(p-1)+_,m=(r+1)*p+_;o.push(y,v,m),o.push(v,d,m)}this.setIndex(o),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new np(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Yc extends Pt{constructor(e=new Tc(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new N,l=new N,c=new _e;let u=new N;const h=[],f=[],p=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new ot(h,3)),this.setAttribute("normal",new ot(f,3)),this.setAttribute("uv",new ot(p,2));function y(){for(let g=0;g<n;g++)v(g);v(s===!1?n:0),m(),d()}function v(g){u=e.getPointAt(g/n,u);const x=o.normals[g],A=o.binormals[g];for(let w=0;w<=r;w++){const M=w/r*Math.PI*2,R=Math.sin(M),E=-Math.cos(M);l.x=E*x.x+R*A.x,l.y=E*x.y+R*A.y,l.z=E*x.z+R*A.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function d(){for(let g=1;g<=n;g++)for(let x=1;x<=r;x++){const A=(r+1)*(g-1)+(x-1),w=(r+1)*g+(x-1),M=(r+1)*g+x,R=(r+1)*(g-1)+x;_.push(A,w,R),_.push(w,M,R)}}function m(){for(let g=0;g<=n;g++)for(let x=0;x<=r;x++)c.x=g/n,c.y=x/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Yc(new iA[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ot extends Yr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=f_,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sA extends Gs{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class ip extends bt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class oA extends ip{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const id=new ft,E0=new N,w0=new N;class aA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $h,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;E0.setFromMatrixPosition(e.matrixWorld),n.position.copy(E0),w0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(w0),n.updateMatrixWorld(),id.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(id),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(id)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lA extends aA{constructor(){super(new w_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class T0 extends ip{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new lA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cA extends ip{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const A0=new ft;class C0{constructor(e,n,i=0,r=1/0){this.ray=new jh(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Xh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return A0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(A0),this}intersectObject(e,n=!0,i=[]){return zf(e,this,i,n),i.sort(R0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)zf(e[r],this,i,n);return i.sort(R0),i}}function R0(t,e){return t.distance-e.distance}function zf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)zf(s[o],e,n,!0)}}const b0=new N;let Sl,rd;class uA extends bt{constructor(e=new N(0,0,1),n=new N(0,0,0),i=1,r=16776960,s=i*.2,o=s*.2){super(),this.type="ArrowHelper",Sl===void 0&&(Sl=new Pt,Sl.setAttribute("position",new ot([0,0,0,0,1,0],3)),rd=new mn(0,.5,1,5,1),rd.translate(0,-.5,0)),this.position.copy(n),this.line=new $o(Sl,new Gs({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ie(rd,new to({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{b0.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(b0,n)}}setLength(e,n=e*.2,i=n*.2){this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fh);const ji={theta:0,phi:.2,radius:105,target:new N(10,0,0)};function dA(t,e,n,i=!1){const r=pe.useRef(null),s=pe.useRef(null),o=pe.useRef(null),a=pe.useRef([]),l=pe.useRef(null),c=pe.useRef({active:!1,lastX:0,lastY:0,moved:0}),u=pe.useRef(i);pe.useEffect(()=>{u.current=i},[i]);const h=pe.useRef({theta:ji.theta,phi:ji.phi,radius:ji.radius,target:ji.target.clone()}),f=pe.useRef({theta:ji.theta,phi:ji.phi,radius:ji.radius,target:ji.target.clone()}),[p,_]=pe.useState(!1),y=pe.useCallback((x,A,w)=>{f.current.target.set(x.x,x.y,x.z),A!==void 0&&(f.current.radius=Wa.clamp(A,20,130)),w!==void 0&&(f.current.phi=Wa.clamp(w,.2,1.45))},[]),v=pe.useCallback(x=>{l.current=x},[]);pe.useEffect(()=>{const x=t.current;if(!x)return;const A=x.clientWidth||800,w=x.clientHeight||600,M=new BT;M.background=null,M.fog=new qh("#dfe9f4",120,320),r.current=M;const R=new Ln(52,A/w,.1,600);s.current=R;const E=new zT({antialias:!0,alpha:!0});E.setSize(A,w),E.setPixelRatio(Math.min(window.devicePixelRatio,2)),E.shadowMap.enabled=!0,E.shadowMap.type=Jv,E.domElement.style.display="block",x.appendChild(E.domElement),o.current=E,M.add(new cA(16777215,.6));const S=new oA(16777215,13096168,.45);M.add(S);const P=new T0(16777215,.85);P.position.set(28,46,34),P.castShadow=!0,P.shadow.mapSize.width=2048,P.shadow.mapSize.height=2048,P.shadow.camera.left=-70,P.shadow.camera.right=70,P.shadow.camera.top=70,P.shadow.camera.bottom=-70,M.add(P);const G=new T0(9680127,.35);return G.position.set(-40,24,-30),M.add(G),_(!0),()=>{_(!1),E.domElement.parentNode===x&&x.removeChild(E.domElement),E.dispose(),r.current=null,s.current=null,o.current=null}},[t]),pe.useEffect(()=>{const x=t.current;if(!x)return;const A=()=>{const M=s.current,R=o.current;if(!M||!R)return;const E=x.clientWidth||800,S=x.clientHeight||600;M.aspect=E/S,M.updateProjectionMatrix(),R.setSize(E,S)};window.addEventListener("resize",A);const w=new ResizeObserver(A);return w.observe(x),()=>{window.removeEventListener("resize",A),w.disconnect()}},[t]),pe.useEffect(()=>{let x=0,A=performance.now(),w=0;const M=()=>{var O;x=requestAnimationFrame(M);const R=performance.now(),E=Math.min((R-A)/1e3,.1);A=R,w+=E;const S=h.current,P=f.current,G=1-Math.pow(.001,E);S.theta+=(P.theta-S.theta)*G,S.phi+=(P.phi-S.phi)*G,S.radius+=(P.radius-S.radius)*G,S.target.lerp(P.target,G);const I=s.current;if(I){const F=Math.sin(S.phi);I.position.set(S.target.x+S.radius*F*Math.sin(S.theta),S.target.y+S.radius*Math.cos(S.phi),S.target.z+S.radius*F*Math.cos(S.theta)),I.lookAt(S.target)}(O=l.current)==null||O.call(l,E,w);const z=o.current,k=r.current;z&&k&&I&&z.render(k,I)};return x=requestAnimationFrame(M),()=>cancelAnimationFrame(x)},[]);const d=pe.useCallback((x,A)=>{var G;const w=t.current,M=s.current;if(!w||!M)return;const R=w.getBoundingClientRect(),E=new _e((x-R.left)/R.width*2-1,-((A-R.top)/R.height)*2+1),S=new C0;S.setFromCamera(E,M);const P=S.intersectObjects(a.current,!0);for(const I of P){let z=I.object;for(;z;){const k=(G=z.userData)==null?void 0:G.pick;if(k){e(k);return}z=z.parent}}e(null)},[t,e]),m=pe.useCallback((x,A)=>{var G;const w=t.current,M=s.current;if(!w||!M)return null;const R=w.getBoundingClientRect(),E=new _e((x-R.left)/R.width*2-1,-((A-R.top)/R.height)*2+1),S=new C0;S.setFromCamera(E,M);const P=S.intersectObjects(a.current,!0);for(const I of P){let z=I.object;for(;z;){const k=(G=z.userData)==null?void 0:G.pick;if((k==null?void 0:k.kind)==="node")return k.id;z=z.parent}}return null},[t]);return{sceneRef:r,cameraRef:s,rendererRef:o,pickablesRef:a,isReady:p,handlers:{onMouseDown:x=>{c.current={active:!0,lastX:x.clientX,lastY:x.clientY,moved:0}},onPointerMove:x=>{const A=c.current;if(!A.active)return;const w=x.clientX-A.lastX,M=x.clientY-A.lastY;A.lastX=x.clientX,A.lastY=x.clientY,A.moved+=Math.abs(w)+Math.abs(M),f.current.theta-=w*.005,u.current&&(f.current.phi=Wa.clamp(f.current.phi-M*.004,.02,1.55))},onPointerUp:x=>{const A=c.current;A.active=!1,A.moved<6&&d(x.clientX,x.clientY)},onPointerLeave:()=>{c.current.active=!1},onDoubleClick:x=>{if(!n)return;const A=m(x.clientX,x.clientY);A&&n(A)},onWheel:x=>{const A=f.current;A.radius=Wa.clamp(A.radius*(x.deltaY>0?1.12:.89),20,130)}},setFocus:y,registerFrame:v}}const In={name:"SupplyChain ETH 主网（演示）",contract:"0x9F2c4E8bA1d3C7f0e5A6b2D4c8E1f0A3b7C9d2E1",explorer:"https://sepolia.etherscan.io",consensus:"PoS (权益证明)",gasToken:"ETH"},Et={road:"#9db4d6",chain:"#2563eb",chainNew:"#f59e0b",chainLink:"#64748b",packet:"#38bdf8",ok:"#10b981",warn:"#f59e0b",error:"#ef4444",accent:"#2563eb",cyan:"#06b6d4"},U_=[{msp:"FarmMSP",name:"养殖基地",duty:"登记养殖批次、上传 RDS 证书哈希、登记羽绒初加工产出",color:"#16a34a"},{msp:"SupplierMSP",name:"羽绒供应商",duty:"登记羽绒批次入库工厂",color:"#0891b2"},{msp:"FactoryMSP",name:"波司登工厂",duty:"投料、工序记录、质检、成品入库、绑定 RFID 标签",color:"#2563eb"},{msp:"LogisticsMSP",name:"物流公司",duty:"登记装车、中转、签收节点",color:"#7c3aed"},{msp:"RetailerMSP",name:"门店",duty:"收货确认、销售登记、消费者扫码验证记录",color:"#ea580c"},{msp:"BrandMSP",name:"品牌方 / 监管",duty:"查询全链路、查看异常预警、数据分析",color:"#db2777"}],Fr=U_.reduce((t,e)=>(t[e.msp]=e,t),{}),fA=[{stage:"farm",label:"养殖与初加工",short:"养殖",color:"#16a34a"},{stage:"raw_material",label:"原材料入库",short:"原料",color:"#0891b2"},{stage:"manufacturing",label:"投料生产 / 质检",short:"生产",color:"#2563eb"},{stage:"warehouse",label:"成品入库 / 标签绑定",short:"成品",color:"#4f46e5"},{stage:"transport",label:"运输节点",short:"运输",color:"#7c3aed"},{stage:"retail",label:"门店收货 / 销售",short:"零售",color:"#ea580c"},{stage:"consumer_verify",label:"消费者扫码验证",short:"扫码",color:"#db2777"}],pn=fA.reduce((t,e)=>(t[e.stage]=e,t),{}),io=[{id:"farm",name:"养殖场",subtitle:"黑龙江 · Farm-HLJ-01",msp:"FarmMSP",account:"0x1A2b3C4d5E6f70819a0B1c2D3e4F50617a8B9c0D",lng:127,lat:48,position:{x:53.5,y:0,z:-38.2},color:"#16a34a",duties:["登记养殖批次与出栏 / 屠宰日期","上传 RDS 证书编号与证书哈希","登记羽绒初加工产出批次"],stages:["farm"],site:"黑龙江养殖基地 · 散养棚 + 屠宰分毛车间",equipment:["养殖棚温控系统","屠宰流水线","水洗分毛机","羽绒检测台"],personnel:["养殖管理员 王建国","驻场兽医 赵玲"],vehicles:["活禽运输车 黑A·12345"],activities:["批次登记与出栏","屠宰 / 水洗 / 分毛","RDS 证书上传","羽绒初加工产出"]},{id:"material",name:"原材料库房",subtitle:"常熟原料仓 · CS-WH-01",msp:"SupplierMSP",account:"0x2B3c4D5e6F70819a0B1c2D3e4F50617a8B9c0D1E",lng:108,lat:40,position:{x:-3,y:0,z:-14.4},color:"#0891b2",duties:["扫码收货并登记原材料溯源码","提交材质证明（RDS 摘要）","维护消耗状态 AVAILABLE"],stages:["raw_material"],site:"常熟原料仓 CS-WH-01 · 恒温库房",equipment:["扫码收货终端","电子地磅","高位货架","温湿度记录仪"],personnel:["仓库管理员 李霞","质检收货员 孙浩"],vehicles:["厂内叉车 苏E·F001"],activities:["原材料扫码收货","材质证明核验","上架与入库登记","消耗状态维护"]},{id:"factory",name:"生产线",subtitle:"波司登常熟工厂 · 裁断 / 充绒 / 质检",msp:"FactoryMSP",account:"0x3C4d5E6f70819a0B1c2D3e4F50617a8B9c0D1E2F",lng:120,lat:31.5,position:{x:32.7,y:0,z:10.9},color:"#2563eb",duties:["投料并记录工序 / 设备 / 程序版本","质检结果与操作员签名上链","原材料消耗状态联动更新"],stages:["manufacturing"],site:"波司登常熟工厂 · 裁断 / 充绒车间",equipment:["裁断机 EQ-CUT-07","充绒机 EQ-FILL-03","模板缝制线","悬挂输送系统"],personnel:["产线操作员 陈锋","质检员 张三","设备维护 周磊"],vehicles:["车间 AGV 小车","半成品周转车"],activities:["投料与裁断","充绒工序","在线质检","工序记录上链"]},{id:"warehouse",name:"成品入库",subtitle:"常熟一号仓 · RFID 绑定",msp:"FactoryMSP",account:"0x4D5e6F70819a0B1c2D3e4F50617a8B9c0D1E2F3a",lng:113,lat:28,position:{x:11.9,y:0,z:21.3},color:"#4f46e5",duties:["仓单入库与货物状态登记","逐件绑定 RFID 标签","吊牌信息与链上记录一致性校验"],stages:["warehouse"],site:"常熟一号成品仓 · RFID 绑定区",equipment:["RFID 写标机","智能吊挂线","称重复核台","视频监控"],personnel:["成品库管 周敏","标签绑定员 吴婷"],vehicles:["成品转运叉车 苏E·W205"],activities:["合格品入库","逐件 RFID 绑定","吊牌一致性校验","仓单登记"]},{id:"logistics",name:"物流运输",subtitle:"常熟 → 上海中转 → 杭州",msp:"LogisticsMSP",account:"0x5E6f70819a0B1c2D3e4F50617a8B9c0D1E2F3a4B",lng:113,lat:21,position:{x:11.9,y:0,z:42.1},color:"#7c3aed",duties:["登记装车 / 到达中转 / 签收节点","记录节点位置与交接双方签名","运输时效异常自动预警"],stages:["transport"],site:"常熟 → 上海中转 → 杭州 运输网络",equipment:["干线厢式货车","上海分拨中心","PDA 签收终端","GPS 定位器"],personnel:["司机 刘强","中转分拣员 陈波","门店收货员 吴倩"],vehicles:["干线厢货 沪B·8890","城市配送车 浙A·5521"],activities:["装车发运","到达中转","签收回执","运输时效监控"]},{id:"retailer",name:"门店",subtitle:"杭州门店 · Retailer-HZ-01（含销售）",msp:"RetailerMSP",account:"0x6F70819a0B1c2D3e4F50617a8B9c0D1E2F3a4B5C",lng:102,lat:25,position:{x:-20.8,y:0,z:30.2},color:"#ea580c",duties:["收货确认与上架销售登记","销售状态：在售 → 已售出","记录消费者扫码验证行为"],stages:["retail","consumer_verify"],site:"杭州门店 Retailer-HZ-01 · 卖场 + 收银",equipment:["智能货架","POS 收银台","吊牌验真扫码枪","会员终端"],personnel:["店员 吴倩","导购 林芳"],vehicles:["门店配送电动车"],activities:["收货上架","销售开单","消费者扫码验证","区域授权校验"]},{id:"consumer",name:"消费者",subtitle:"扫码验证 · 最后一公里",msp:"RetailerMSP",account:"0x70819a0B1c2D3e4F50617a8B9c0D1E2F3a4B5C6D",lng:90,lat:43,position:{x:-56.5,y:0,z:-23.3},color:"#db2777",duties:["扫码查看完整履历","验证吊牌信息一致性","扫码行为上链（仅存关联哈希）"],stages:["consumer_verify"],site:"消费者端 · 手机扫码",equipment:["智能手机","吊牌二维码","品牌小程序"],personnel:["消费者","门店导购"],vehicles:[],activities:["扫码查看履历","吊牌信息比对","购买与验证上链"]},{id:"brand",name:"品牌监管云",subtitle:"BrandMSP · 全链路追溯",msp:"BrandMSP",account:"0x8091a0B1c2D3e4F50617a8B9c0D1E2F3a4B5C6D7E",lng:100.6,lat:36,position:{x:-25,y:0,z:1.5},color:"#db2777",duties:["查询任意溯源码的全链路履历","接收质检异常 / 窜货 / 超时预警","数据分析看板与链上验证"],stages:["farm","raw_material","manufacturing","warehouse","transport","retail","consumer_verify"],site:"品牌方 / 监管中心",equipment:["追溯大屏","链上验证平台","预警看板","数据分析引擎"],personnel:["品牌追溯管理员","质量监管员"],vehicles:[],activities:["全链路查询","异常预警接收","数据分析","链上验证"]}],Kt=io.reduce((t,e)=>(t[e.id]=e,t),{}),hA=[{code:"RM-D-001",name:"RDS 认证白鸭绒（绒子含量 90%）",category:"羽绒",duckBatchNo:"DUCK-2025-001",farmCode:"Farm-HLJ-01",rdsCertNo:"RDS-2025-HLJ-0451",rdsCertHash:"",rdsVerified:!1,supplier:"SupplierMSP",unit:"kg",inboundQty:1500,consumedQty:0,consumptionStatus:"NOT_STORED",usedByBatches:[]},{code:"RM-D-002",name:"RDS 认证白鸭绒（绒子含量 90%）",category:"羽绒",duckBatchNo:"DUCK-2025-002",farmCode:"Farm-HLJ-02",rdsCertNo:"RDS-2025-HLJ-0452",rdsCertHash:"",rdsVerified:!1,supplier:"SupplierMSP",unit:"kg",inboundQty:1e3,consumedQty:0,consumptionStatus:"NOT_STORED",usedByBatches:[]},{code:"RM-F-001",name:"防绒面料（20D 尼龙）",category:"面料",supplier:"SupplierMSP",rdsVerified:!1,unit:"m",inboundQty:3e3,consumedQty:0,consumptionStatus:"NOT_STORED",usedByBatches:[]},{code:"RM-Z-001",name:"YKK 拉链（主拉链）",category:"辅料",supplier:"SupplierMSP",rdsVerified:!1,unit:"条",inboundQty:600,consumedQty:0,consumptionStatus:"NOT_STORED",usedByBatches:[]}],ma=[{batchNo:"BATCH-2025-03",prefix:"PROD-A-",count:300,materials:["RM-D-001","RM-F-001","RM-Z-001"],abnormalFrom:100,abnormalTo:160},{batchNo:"BATCH-2025-04",prefix:"PROD-B-",count:200,materials:["RM-D-002","RM-F-001","RM-Z-001"],abnormalFrom:0,abnormalTo:-1}],Fo={shipped:200,sold:168,scanned:152,crossRegionCode:"PROD-A-207",crossRegion:"华南"},oi=[{id:0,no:1,title:"养殖与羽绒初加工",subtitle:"批次 DUCK-2025-001 出栏 → 产出羽绒 RM-D-001",narrative:"黑龙江养殖基地批次 DUCK-2025-001 出栏，经屠宰、水洗、分毛后产出羽绒批次 RM-D-001，RDS 责任羽绒标准证书已核验通过，证书哈希写入链上。",operator:"养殖基地管理员 · 王建国",role:"FarmMSP",stage:"farm",nodeId:"farm",link:["farm","material"],cargoLabel:"RM-D-001",form:[{label:"养殖批次号",value:"DUCK-2025-001"},{label:"养殖场编码",value:"Farm-HLJ-01"},{label:"RDS 证书编号",value:"RDS-2025-HLJ-0451"},{label:"RDS 证书哈希",value:"0x8f2c…a71d（文件哈希，不存原件）"},{label:"出栏 / 屠宰日期",value:"2025-03-01 / 2025-03-02"},{label:"产出羽绒批次",value:"RM-D-001"},{label:"初加工完成日期",value:"2025-03-05"}],payload:[{field:"stage",value:"farm"},{field:"traceCode",value:"RM-D-001"},{field:"duckBatchNo",value:"DUCK-2025-001"},{field:"rdsCertHash",value:"0x8f2c…a71d"},{field:"farmCode",value:"Farm-HLJ-01"},{field:"relation",value:"DUCK-2025-001 → RM-D-001"}],recordCount:2,queryDemo:{code:"RM-D-001",effect:"该羽绒来自黑龙江基地养殖批次 DUCK-2025-001，RDS 认证已核验，初加工完成日期 3 月 5 日。"},bullets:["养殖基地上链：批次号 + 场编码 + 证书哈希，原件不出库","建立 DUCK-2025-001 → RM-D-001 的父子关联","证书只上哈希，链下原件由监管机构保管，可随时比对"]},{id:1,no:2,title:"原材料入库",subtitle:"羽绒 RM-D-001 / RM-D-002 运抵常熟工厂",narrative:"羽绒批次 RM-D-001、RM-D-002 与共用面料 RM-F-001、拉链 RM-Z-001 运抵常熟工厂，仓库扫码收货，材质证明摘要与第一幕证书哈希自动关联。",operator:"工厂仓库管理员 · 李霞",role:"SupplierMSP",stage:"raw_material",nodeId:"material",cargoLabel:"RM-D-001 / RM-D-002",form:[{label:"原材料溯源码",value:"RM-D-001"},{label:"批次号",value:"D-001"},{label:"供应商标识",value:"SupplierMSP"},{label:"材质证明哈希",value:"第一幕 RDS 证书摘要（自动关联）"},{label:"入库时间",value:"2025-03-08 09:20"},{label:"仓库编码",value:"CS-WH-01"},{label:"消耗状态",value:"AVAILABLE"}],payload:[{field:"stage",value:"raw_material"},{field:"traceCode",value:"RM-D-001"},{field:"previousHash",value:"← 第一幕交易哈希"},{field:"materialCertHash",value:"RDS 摘要"},{field:"warehouseCode",value:"CS-WH-01"},{field:"consumptionStatus",value:"AVAILABLE"}],recordCount:4,queryDemo:{code:"RM-D-001",effect:"3 月 8 日入库常熟一号仓，状态可用（AVAILABLE），尚未被消耗。"},bullets:["previousHash 指向第一幕交易，形成不可篡改的链式证据","消耗状态 AVAILABLE 为后续投料扣减提供依据","面料与拉链为两批产品共用原料，是多对多追溯的关键"]},{id:2,no:3,title:"投料生产",subtitle:"BATCH-2025-03 排产 300 件，裁断工序 C-01",narrative:"MES 排产把 RM-D-001 分配给 300 件产品（PROD-A-001 至 PROD-A-300），开始裁断工序；同时消耗面料 RM-F-001 与拉链 RM-Z-001。",operator:"产线操作员 · 陈锋 / MES 自动触发",role:"FactoryMSP",stage:"manufacturing",nodeId:"factory",link:["material","factory"],cargoLabel:"PROD-A-001",form:[{label:"产品溯源码",value:"PROD-A-001"},{label:"生产批次号",value:"BATCH-2025-03"},{label:"消耗原材料",value:'["RM-D-001", "RM-F-001", "RM-Z-001"]'},{label:"工序编号",value:"C-01 裁断"},{label:"设备 / 程序版本",value:"EQ-CUT-07 / v2.3.1"},{label:"质检结果",value:"PASS"},{label:"操作员签名",value:"陈锋（FactoryMSP 数字签名）"}],payload:[{field:"stage",value:"manufacturing"},{field:"traceCode",value:"PROD-A-001"},{field:"batchNo",value:"BATCH-2025-03"},{field:"consumedMaterials",value:'["RM-D-001", "RM-F-001", "RM-Z-001"]'},{field:"processNo",value:"C-01 裁断"},{field:"qcResult",value:"PASS"}],recordCount:3,queryDemo:{code:"PROD-A-001",effect:"使用了 D-001 羽绒、F-001 面料、Z-001 拉链，已完成裁断，质检通过。"},bullets:["一个产品码可关联多个原材料码（多对多）","投料即触发原材料消耗状态 AVAILABLE → PARTIALLY_CONSUMED","设备 ID / 程序版本上链，异常时可快速定责到工序"]},{id:3,no:4,title:"质检异常与影响范围定位",subtitle:"PROD-A-150 充绒量不达标 → 61 件返工",narrative:"PROD-A-150 充绒量不达标，质检 FAIL。品牌方暂停 BATCH-2025-03 中所有使用 RM-D-001 的产品放行；复检确认影响范围 PROD-A-100 至 PROD-A-160 共 61 件，原因为设备参数偏移，61 件返工、其余 239 件放行。",operator:"质检员 · 张三 / 品牌方 BrandMSP",role:"FactoryMSP",stage:"manufacturing",nodeId:"factory",form:[{label:"异常产品码",value:"PROD-A-150"},{label:"质检结果",value:"FAIL"},{label:"异常类型",value:"充绒量不达标（偏差 -8.6%）"},{label:"复检结论",value:"影响 PROD-A-100 ~ PROD-A-160，共 61 件"},{label:"异常原因",value:"充绒机 EQ-FILL-03 设备参数偏移"},{label:"处理动作",value:"61 件标记返工，其余 239 件放行"}],payload:[{field:"stage",value:"manufacturing"},{field:"traceCode",value:"PROD-A-150"},{field:"qcResult",value:"FAIL"},{field:"abnormalType",value:"充绒量不达标"},{field:"affectedRange",value:"PROD-A-100 ~ PROD-A-160（61 件）"},{field:"action",value:"61 件返工 / 239 件放行"}],recordCount:2,queryDemo:{code:"RM-D-001",effect:"该批次被 300 件产品消耗，其中 61 件关联质检异常（PROD-A-100 ~ PROD-A-160），239 件正常放行。"},bullets:["异常记录本身也上链，不可删除，只可追加复检结论","反向追溯：由一个原材料码定位全部受影响成品","影响范围精确隔离：另一批 RM-D-002 的 200 件完全不受影响"]},{id:4,no:5,title:"成品入库与标签绑定",subtitle:"仓单 WH-2025-0315 · 239 件绑定 RFID",narrative:"239 件合格品入库常熟一号仓，逐件绑定 RFID 标签，吊牌信息（绒子含量、充绒量、执行标准）与链上记录比对一致。",operator:"成品仓库管理员 · 周敏 / 标签系统自动触发",role:"FactoryMSP",stage:"warehouse",nodeId:"warehouse",link:["factory","warehouse"],cargoLabel:"WH-2025-0315",form:[{label:"仓单编号",value:"WH-2025-0315"},{label:"货物状态",value:"入库"},{label:"仓库编码",value:"CS-WH-01"},{label:"数量",value:"239 件"},{label:"RFID 标签 ID",value:"RFID-A-001 … RFID-A-239（逐件绑定）"},{label:"吊牌一致性校验",value:"PASS（绒子含量 / 充绒量 / 执行标准一致）"},{label:"操作方签名",value:"周敏（FactoryMSP）"}],payload:[{field:"stage",value:"warehouse"},{field:"traceCode",value:"PROD-A-001"},{field:"warehouseReceiptNo",value:"WH-2025-0315"},{field:"cargoStatus",value:"入库"},{field:"rfidTagId",value:"RFID-A-001"},{field:"labelCheckResult",value:"PASS"}],recordCount:2,queryDemo:{code:"PROD-A-001",effect:"3 月 15 日成品入库常熟一号仓，RFID 标签已绑定，吊牌信息校验一致。"},bullets:["RFID 标签 ID 与溯源码一一绑定，物理件与数字件对齐","吊牌一致性校验阻断“真码假货”与吊牌篡改","仓单号作为成品阶段的业务主键写入 metadata"]},{id:5,no:6,title:"运输节点登记",subtitle:"常熟装车 → 上海中转 → 杭州签收",narrative:"经销商提货 200 件，物流公司承运。装车（常熟 3 月 18 日 09:00）→ 到达中转（上海 3 月 18 日 15:00）→ 签收（杭州 3 月 19 日 10:00），每次交接双方签名上链。",operator:"物流司机 · 刘强 / 杭州门店收货员 · 吴倩",role:"LogisticsMSP",stage:"transport",nodeId:"logistics",link:["warehouse","logistics"],cargoLabel:"WAY-2025-0318",form:[{label:"运输单号",value:"WAY-2025-0318"},{label:"承运方标识",value:"LogisticsMSP"},{label:"节点类型",value:"装车 → 到达中转 → 签收"},{label:"节点位置",value:"常熟 / 上海 / 杭州"},{label:"节点时间",value:"03-18 09:00 / 03-18 15:00 / 03-19 10:00"},{label:"交接签名",value:"发货方 + 承运方 / 承运方 + 门店"},{label:"中转滞留",value:"18 小时（阈值 12 小时 → 超时预警）"}],payload:[{field:"stage",value:"transport"},{field:"traceCode",value:"PROD-A-001"},{field:"nodeType",value:"装车 / 到达中转 / 签收"},{field:"nodeLocation",value:"常熟 / 上海 / 杭州"},{field:"handoverSignatures",value:"双方签名（MSP 背书）"},{field:"dwellHours",value:"18（超时预警）"}],recordCount:3,queryDemo:{code:"PROD-A-001",effect:"3 月 18 日装车离开常熟，当日下午到达上海中转，3 月 19 日上午杭州门店签收。"},bullets:["三条记录 previousHash 首尾衔接，运输链路不可断","交接需双方 MSP 签名，避免单点抵赖","中转滞留超阈值自动生成运输超时事件"]},{id:6,no:7,title:"门店销售与消费者扫码",subtitle:"杭州门店收货上架 → 消费者扫码验证",narrative:"杭州门店收货 200 件上架销售，消费者购买 PROD-A-001 后扫码验证，扫码行为写入链上；品牌方同时发现 PROD-A-207 在非授权区域被扫码，触发窜货预警。",operator:"门店店员 · 吴倩 / 消费者",role:"RetailerMSP",stage:"retail",nodeId:"retailer",link:["logistics","retailer"],cargoLabel:"PROD-A-001×200",form:[{label:"销售商标识",value:"Retailer-HZ-01"},{label:"所属片区",value:"华东"},{label:"收货确认时间",value:"2025-03-19 10:30"},{label:"销售状态",value:"在售 → 已售出"},{label:"销售时间",value:"2025-03-21 16:42"},{label:"扫码渠道 / 时间",value:"门店吊牌二维码 · 2025-03-22 11:08"},{label:"个人信息",value:"仅存购买关联哈希，不存个人信息"}],payload:[{field:"stage",value:"retail / consumer_verify"},{field:"traceCode",value:"PROD-A-001"},{field:"verifyTime",value:"2025-03-22 11:08"},{field:"verifyChannel",value:"门店吊牌二维码"},{field:"purchaseHash",value:"0x4d…c9（会员购买关联哈希）"},{field:"channelAlert",value:"PROD-A-207 华南（授权：华东）→ 窜货预警"}],recordCount:4,queryDemo:{code:"PROD-A-001",effect:"这件羽绒服使用了黑龙江基地 RDS 认证羽绒（批次 DUCK-2025-001），经常熟工厂裁断、充绒、质检（质检员张三签字），成品入库后经上海中转到达杭州门店，您是本店第 128 位验证该产品的消费者。"},bullets:["消费者扫码行为上链，形成“最后一公里”闭环","只存购买关联哈希，不落个人信息，满足隐私合规","销售区域与授权区域比对，自动触发窜货预警"]}],pA=[{code:"PROD-A-001",desc:"正向追溯 · 合格成品"},{code:"PROD-A-150",desc:"正向追溯 · 质检异常"},{code:"PROD-B-001",desc:"对照链路 · 全部正常"},{code:"RM-D-001",desc:"反向追溯 · 300 件（61 异常）"},{code:"RM-D-002",desc:"反向追溯 · 200 件（0 异常）"},{code:"RM-F-001",desc:"共用原料 · 跨批次"}],mA={0:{radius:34,phi:.2},1:{radius:34,phi:.2},2:{radius:32,phi:.2},3:{radius:30,phi:.2},4:{radius:34,phi:.2},5:{radius:36,phi:.2},6:{radius:34,phi:.2}},gA=4200,we=(t,e)=>new Ot({color:t,roughness:.75,metalness:.05,...e});function yn(t,e="#f1c27d"){const n=new Xe,i=new ie(new mn(.22,.28,.7,10),we(t));i.position.y=.35,i.castShadow=!0;const r=new ie(new ti(.18,12,10),we(e));r.position.y=.85,r.castShadow=!0;const s=new ie(new mn(.2,.2,.08,12),we("#fbbf24"));return s.position.y=.98,n.add(i,r,s),n}function Ml(t){const e=new Xe,n=new ie(new Me(1.7,.5,.85),we(t,{metalness:.2}));n.position.y=.5,n.castShadow=!0;const i=new ie(new Me(.6,.45,.7),we("#e2e8f0"));i.position.set(-.45,.85,0);const r=new mn(.2,.2,.14,12),s=we("#1f2937");return[[-.5,.42],[.5,.42],[-.5,-.42],[.5,-.42]].forEach(([o,a])=>{const l=new ie(r,s);l.rotation.x=Math.PI/2,l.position.set(o,.2,a),e.add(l)}),e.add(n,i),e}function sd(){const t=new Xe,e=new ie(new ti(.22,12,10),we("#ffffff"));e.scale.set(1.3,.9,1),e.position.y=.22;const n=new ie(new ti(.13,12,10),we("#ffffff"));n.position.set(.22,.42,0);const i=new ie(new Jh(.06,.18,8),we("#f59e0b"));return i.rotation.z=-Math.PI/2,i.position.set(.38,.4,0),t.add(e,n,i),t}function P0(t){const e=new Xe,n=we("#94a3b8",{metalness:.3});return[[-.9,-.4],[.9,-.4],[-.9,.4],[.9,.4]].forEach(([i,r])=>{const s=new ie(new Me(.1,2.2,.1),n);s.position.set(i,1.1,r),e.add(s)}),[.4,1.2,2].forEach(i=>{const r=new ie(new Me(2,.08,1),we("#cbd5e1"));r.position.y=i,e.add(r);for(let s=-1;s<=1;s++){const o=new ie(new Me(.5,.5,.6),we(t));o.position.set(s*.6,i+.3,0),o.castShadow=!0,e.add(o)}}),e}function vA(t,e=!1){const n=new Xe,i=we("#94a3b8",{metalness:.3});[-1.4,1.4].forEach(s=>{const o=new ie(new mn(.05,.05,3,8),i);o.position.set(s,1.5,0),n.add(o)});const r=new ie(new mn(.05,.05,3,8),i);r.rotation.z=Math.PI/2,r.position.y=2.8,n.add(r);for(let s=-2;s<=2;s++){const o=new ie(new Me(.5,.9,.12),we(t));if(o.position.set(s*.6,2.3,0),o.castShadow=!0,n.add(o),e){const a=new ie(new Me(.62,1,.22),new Ot({color:"#ffffff",transparent:!0,opacity:.35,roughness:.2}));a.position.set(s*.6,2.3,0),n.add(a)}}return n}function _A(){const t=new Xe,e=12,n=5.5,i=3.2,r=new ie(new Me(e,i,n),we("#e5e7eb"));r.position.y=i/2,r.castShadow=!0;const s=new ie(new Me(e+.4,.3,n+.4),we("#2563eb"));s.position.y=i+.15;const o=new ie(new mn(.4,.45,2.4,12),we("#64748b"));o.position.set(e/2-1.5,i+1.3,-n/2+.9);const a=new ie(new Me(2.6,2.2,.1),we("#1e3a8a"));a.position.set(-3,1.1,n/2+.05);const l=we("#bfdbfe",{roughness:.2,metalness:.2}),c=new ie(new Me(e*.8,.5,.06),l);return c.position.set(.5,2.2,n/2+.02),t.add(r,s,o,a,c),t}function xA(t){const e=new Xe,n=we("#fef3c7");[-1,1].forEach(c=>{const u=new ie(new Me(2.4,3.4,.3),n);u.position.set(c*3.8,1.7,-3),u.castShadow=!0,e.add(u)});const i=new ie(new Me(5.2,.5,.3),n);i.position.set(0,.25,-3);const r=new ie(new Me(5.2,.6,.3),n);r.position.set(0,3.1,-3),e.add(i,r);const s=new Ot({color:"#bfdbfe",transparent:!0,opacity:.4,roughness:.1,metalness:.15});[-1,1].forEach(c=>{const u=new ie(new Me(1.9,2.1,.1),s);u.position.set(c*1.7,1.6,-3),e.add(u)});const o=new ie(new Me(1.4,2.1,.1),s);o.position.set(0,1.6,-3),e.add(o);const a=new ie(new Me(6.5,.9,.25),we(t,{emissive:new ke(t),emissiveIntensity:.35}));a.position.set(0,3.85,-3),e.add(a);const l=new ie(new Me(7.2,.12,1.6),we("#dc2626"));return l.position.set(0,3.35,-2.3),l.rotation.x=.18,e.add(l),e}function yA(t=1){const e=new Xe,n=new ie(new mn(.12*t,.16*t,.9*t,8),we("#8b5a2b"));n.position.y=.45*t;const i=new ie(new ti(.55*t,10,8),we("#2f7d32"));return i.position.y=1.15*t,i.castShadow=!0,e.add(n,i),e}function L0(t,e,n=!1){const i=new Xe,r=we("#f8fafc",{roughness:.6}),s=.75,o=u=>{const h=new Xe,f=Math.max(2,Math.round(u/.55));for(let p=0;p<=f;p++){const _=new ie(new Me(.07,s,.07),r);_.position.set(-u/2+p*u/f,s/2,0),h.add(_)}return[.3,.55].forEach(p=>{const _=new ie(new Me(u,.05,.05),r);_.position.y=p,h.add(_)}),h},a=o(t);a.position.z=-e/2,i.add(a);const l=o(e);l.rotation.y=Math.PI/2,l.position.x=-t/2,i.add(l);const c=o(e);if(c.rotation.y=Math.PI/2,c.position.x=t/2,i.add(c),n){const h=(t-1.2)/2;[-1,1].forEach(f=>{const p=o(h);p.position.set(f*(1.2/2+h/2),0,e/2),i.add(p)})}else{const u=o(t);u.position.z=e/2,i.add(u)}return i}function SA(t,e=1){const n=new Xe,i=new ie(new ti(.42*e,8,6),we("#15803d"));i.position.y=.28*e;const r=new ie(new ti(.26*e,8,6),we(t));return r.position.set(.16*e,.5*e,.1*e),n.add(i,r),n}function od(t,e,n){const i=new Xe,r=n*1.1,s=new ie(new Me(t,r,e),we("#f8fafc"));s.position.y=r/2,s.castShadow=!0;const o=new ie(new Me(t+.5,.3,e+.5),we("#2563eb"));o.position.y=r+.15,i.add(s,o);const a=we("#bfdbfe",{roughness:.2,metalness:.2});for(let l=0;l<n;l++){const c=.55+l*1.1;[-1,1].forEach(u=>{const h=new ie(new Me(t*.8,.4,.06),a);h.position.set(0,c,u*(e/2+.03)),i.add(h);const f=new ie(new Me(.06,.4,e*.8),a);f.position.set(u*(t/2+.03),c,0),i.add(f)})}return i}function El(t,e){const n=new I_(t.map(([r,s])=>new N(r,0,s))),i=new ie(new Yc(n,40,e,10,!1),we("#a3866b",{roughness:.95}));return i.scale.y=.03,i.position.y=.05,i}function MA(t,e){const n=new Xe,i=we("#64748b",{metalness:.3}),r=t*1.6;return[-r/2,r/2].forEach(s=>{[-.5,.5].forEach(o=>{const a=new ie(new Me(.1,2.4,.1),i);a.position.set(s,1.2,o),n.add(a)})}),[.5,1.4,2.3].forEach(s=>{const o=new ie(new Me(r,.08,1.1),we("#cbd5e1"));o.position.y=s,n.add(o);for(let a=0;a<t;a++)for(let l=0;l<2;l++){const c=new ie(new Me(.55,.45,.5),we(l?"#e2e8f0":e));c.position.set(-r/2+.8+a*1.6,s+.26,-.22+l*.45),c.castShadow=!0,n.add(c)}}),n}function EA(){const t=new Xe,e=we("#facc15",{roughness:.9});for(let n=0;n<=4;n++){const i=new ie(new Me(.08,.02,2.4),e);i.position.set(-3.2+n*1.6,.02,1.2),t.add(i)}return[0,2.4].forEach(n=>{const i=new ie(new Me(6.4,.02,.08),e);i.position.set(0,.02,n),t.add(i)}),t}function ad(t){const e=new Xe,n=we("#c9955c");let i=0;const r=[.7,.55,.45],s=[0,.08,-.06];for(let o=0;o<Math.min(t,3);o++){const a=r[o],l=new ie(new Me(a*1.3,a,a*1.1),n);l.position.set(s[o],i+a/2,s[2-o]),l.castShadow=!0,e.add(l),i+=a}return e}function wA(t,e){const n=new Xe,i=new ie(new Me(9,.2,1.1),we("#334155",{roughness:.5}));i.position.y=.8;const r=we("#64748b");[-.6,.6].forEach(o=>{const a=new ie(new Me(9,.25,.1),r);a.position.set(0,.92,o),n.add(a)}),n.add(i);const s=[];for(let o=0;o<4;o++){const a=new ie(new Me(.5,.5,.6),we(e));a.position.set(-4+o*2.4,1.15,0),a.castShadow=!0,n.add(a),s.push(a)}return t.push(o=>{s.forEach((a,l)=>{let c=-4.5+(o*1.2+l*2.4)%9;c<-4.5&&(c+=9),a.position.x=c})}),n}function TA(t,e){const n=new Xe,i=we("#475569",{metalness:.4});[-1.2,1.2].forEach(s=>{const o=new ie(new Me(.16,2.6,.16),i);o.position.set(s,1.3,0),n.add(o)});const r=new ie(new Me(2.6,.2,.16),we(e,{emissive:new ke(e),emissiveIntensity:.4}));return r.position.y=2.6,n.add(r),t.push(s=>{const o=r.material;o.emissiveIntensity=.3+Math.abs(Math.sin(s*2))*.5}),n}function AA(t){const e=new Xe,n=document.createElement("canvas");n.width=n.height=256;const i=n.getContext("2d");i.fillStyle="#ffffff",i.fillRect(0,0,256,256),i.fillStyle="#0f172a";const r=16;for(let l=0;l<16;l++)for(let c=0;c<16;c++)(Math.random()>.5||c<4&&l<4||c>11&&l<4||c<4&&l>11)&&i.fillRect(c*r,l*r,r,r);const s=new Kh(n),o=new ie(new Me(1.4,2.8,.18),we("#111827"));o.position.set(0,1.8,.2);const a=new ie(new qr(1.1,1.1),new to({map:s}));return a.position.set(0,2.2,.31),e.add(o,a),t.push(l=>{e.rotation.y=Math.sin(l*.6)*.25}),e}function CA(t,e,n={}){const i=[];if(!n.embedded){const s=new ie(new qr(60,60),we(e.id==="farm"?"#4d7c3f":e.id==="logistics"?"#9ca3af":"#d7dee8",{roughness:.95}));s.rotation.x=-Math.PI/2,s.position.y=-.05,s.receiveShadow=!0,t.add(s)}const r=new Xe;switch(t.add(r),e.id){case"farm":{["#65a30d","#84cc16","#4d7c0f","#a3e635"].forEach((x,A)=>{const w=new ie(new Me(4.5,.04,3.4),we(x,{roughness:1}));w.position.set(-16,.02,-7.5+A*3.8),r.add(w)}),r.add(El([[1,-12],[1.6,-4],[.6,2],[2,8],[1.2,13]],1.15)),r.add(El([[-14,.8],[-8,1.2],[-2,.6],[4,1.4],[10,2],[14,2.6]],1)),r.add(El([[-8.5,.9],[-8.5,-1.2]],.6)),r.add(El([[9.8,2.4],[13,5.5],[13.8,10]],.7));const o=L0(7,5.5,!0);o.position.set(-8.5,0,-4),r.add(o);const a=L0(7,5,!0);a.position.set(-8.5,0,4.8),r.add(a),[[-10.5,-5],[-8.5,-4.4],[-6.6,-5.2],[-9.5,-2.8],[-7.4,-2.6],[-10.8,-3.2]].forEach(([x,A],w)=>{const M=sd();if(M.rotation.y=Math.PI+w%3*.5-.5,w%2===0){const R=x,E=A,S=w;i.push(P=>{M.position.x=R+Math.sin(P*.35+S)*.5,M.position.z=E+Math.cos(P*.28+S)*.4})}r.add(M),M.position.set(x,0,A)}),[[-10.6,4],[-8.6,4.6],[-6.8,4.1],[-9.6,5.6],[-7.6,5.8],[-11,5.2],[-6.2,5.4]].forEach(([x,A],w)=>{const M=sd();if(M.rotation.y=-.6+w%3*.6,w%2===1){const R=x,E=A,S=w;i.push(P=>{M.position.x=R+Math.sin(P*.3+S)*.45,M.position.z=E+Math.cos(P*.26+S)*.35})}r.add(M),M.position.set(x,0,A)});const u=new ie(new Qh(1.9,32),we("#3b82f6",{transparent:!0,opacity:.75,roughness:.25}));u.rotation.x=-Math.PI/2,u.position.set(-2.5,.05,-9),r.add(u),i.push(x=>{const A=u.material;A.opacity=.62+Math.sin(x*1.5)*.12});for(let x=0;x<4;x++){const A=sd(),w=x/4*Math.PI*2,M=x*1.4;r.add(A),i.push(R=>{A.position.set(-2.5+Math.cos(w+R*.4+M)*1.1,.05,-9+Math.sin(w+R*.4+M)*.8),A.rotation.y=-(w+R*.4+M)+Math.PI/2})}const h=od(6,4.5,2);h.position.set(10,0,-6.5),h.rotation.y=.15;const f=od(5.5,5,3);f.position.set(11,0,0),f.rotation.y=-.1;const p=od(5,4,2);p.position.set(10,0,6.5),p.rotation.y=.12,r.add(h,f,p);const _=["#a855f7","#ec4899","#eab308","#ef4444"];[[-4.6,2],[-3.6,2.4],[-5.6,2.5],[4.6,3.6],[5.4,4.4],[-12.6,1.6],[6.8,-2.6],[-1.2,-6.2],[13,8],[4.4,9.6],[-4.2,9.4],[7.6,3.4]].forEach(([x,A],w)=>{const M=SA(_[w%_.length],.8+w%3*.2);M.position.set(x,0,A),r.add(M)}),[[-12.5,9.6,1.2],[-4,10,1],[5.4,9.8,1.1],[13.5,9.6,1],[-12.5,-10,1.1],[5,-10,1.2],[-1,-11,1],[14.2,3.2,1.1],[6.4,-9.4,.9]].forEach(([x,A,w])=>{const M=yA(w);M.position.set(x,0,A),r.add(M)});const d=yn(e.color);d.position.set(-4.4,0,-.8),r.add(d);const m=yn(e.color);m.position.set(7.4,0,2.6),r.add(m);const g=Ml("#e2e8f0");g.scale.set(.75,.75,.75),g.position.set(1.6,0,6),g.rotation.y=Math.PI/2,r.add(g);break}case"material":{[[-5,-2,"#cbd5e1"],[3,-2,"#e2e8f0"],[-5,2.5,"#e2e8f0"],[3,2.5,"#cbd5e1"]].forEach(([u,h,f])=>{const p=MA(4,f);p.position.set(u,0,h),r.add(p)});const o=EA();o.position.set(-1.5,0,4.4),r.add(o);const a=Ml("#f59e0b");a.scale.set(.8,.8,.8),a.position.set(0,0,5),i.push(u=>{a.position.x=-2+Math.sin(u*.5)*2}),r.add(a);const l=yn(e.color);l.position.set(-7.5,0,.5),r.add(l);const c=yn("#0e7490");c.position.set(6,0,.5),r.add(c);break}case"factory":{const s=_A();s.position.set(0,0,-6.5),r.add(s);const o=wA(i,e.color);o.position.set(0,0,0),r.add(o),[-3,3].forEach(l=>{const c=new ie(new Me(1,1.6,1),we("#1e3a8a",{metalness:.3}));c.position.set(l,.8,2),c.castShadow=!0,r.add(c);const u=yn(e.color);u.position.set(l,0,3.2),r.add(u)});const a=new ie(new Me(10,.12,.12),we("#64748b"));a.position.set(0,3.4,-2.5),r.add(a);for(let l=-4;l<=4;l++){const c=new ie(new Me(.4,.7,.1),we(e.color));c.position.set(l,2.9,-2.5),r.add(c)}break}case"warehouse":{for(let f=-1;f<=1;f++){const p=vA(e.color,!0);p.position.set(f*3.5,0,-2),r.add(p)}const s=new ie(new Me(3,.9,1.2),we("#92400e"));s.position.set(3.5,.45,1.5),s.castShadow=!0,r.add(s);const o=ad(3);o.position.set(3,.9,1.5);const a=ad(2);a.position.set(4.3,.9,1.6);const l=ad(3);l.position.set(-4.5,0,2.5),r.add(o,a,l);const c=yn(e.color);c.position.set(2.4,0,1.5),r.add(c);const u=TA(i,e.color);u.position.set(0,0,3.6),r.add(u);const h=Ml("#f59e0b");h.scale.set(.8,.8,.8),h.position.set(-4,0,4.2),i.push(f=>{h.position.x=-4+(Math.sin(f*.4)+1)*1.8}),r.add(h);break}case"logistics":{const s=new ie(new Me(40,.06,3),we("#475569"));s.position.set(0,0,4),s.receiveShadow=!0,r.add(s);const o=new ie(new Me(4,2.6,3),we("#7c3aed"));o.position.set(-6,1.3,-1),o.castShadow=!0,r.add(o);const a=[];[2450411,561586,14362487].forEach((c,u)=>{const h=Ml("#"+c.toString(16).padStart(6,"0"));h.position.set(-10+u*6,0,4),h.scale.set(.9,.9,.9),a.push(h),r.add(h)}),i.push(c=>{a.forEach((u,h)=>{let f=-12+(c*(1.5+h*.4)+h*4)%24;f<-12&&(f+=24),u.position.x=f,u.rotation.y=Math.PI/2})});const l=yn(e.color);l.position.set(0,0,-2),r.add(l);break}case"retailer":{r.add(xA(e.color));const s=P0(e.color);s.scale.set(.9,.9,.9),s.position.set(-3,0,.5);const o=P0(e.color);o.scale.set(.9,.9,.9),o.position.set(3,0,.5),r.add(s,o);const a=new ie(new Me(2.4,1,.8),we("#b45309"));a.position.set(3.2,.5,3),a.castShadow=!0,r.add(a);const l=yn("#0ea5e9");l.position.set(2.4,0,2.2);const c=yn("#0ea5e9");c.position.set(-.8,0,1.2),r.add(l,c);const u=yn("#cbd5e1","#cbd5e1");u.position.set(-1.8,0,-1.8);const h=yn("#e2e8f0","#e2e8f0");h.position.set(1.8,0,-1.8),r.add(u,h);break}case"consumer":{const s=AA(i);s.position.set(1.4,0,1),r.add(s);const o=yn("#1f2937","#f1c27d");o.position.set(1.4,0,.4);const a=yn("#ec4899","#f1c27d");a.position.set(2.7,0,.6),r.add(o,a);const l=new ie(new Me(1,2,.2),we(e.color));l.position.set(-2.5,1,0),r.add(l);const c=new ie(new Me(.3,.5,.05),we("#fbbf24"));c.position.set(-1.9,1.6,.1),r.add(c);break}default:{const s=new ie(new Me(2,2,2),we(e.color));s.position.y=1,r.add(s)}}if(!n.embedded){const s=new ie(new Me(4,.6,.1),we(e.color,{emissive:new ke(e.color),emissiveIntensity:.2}));s.position.set(0,.4,6),r.add(s)}return i}const RA=io.filter(t=>!t.floating&&t.id!=="brand").map(t=>t.id),bA=[[123,53],[126,52],[130,49],[134,48],[131,45],[131,43],[128,42],[124,40],[122,40],[121,39],[118,39],[120,38],[122,37],[120,34],[121,32],[122,30],[120,27],[117,24],[113,22],[110,21],[108,21],[106,22],[102,22],[99,22],[97,24],[98,27],[94,28],[91,28],[88,28],[85,28],[81,30],[78,32],[75,36],[73,39],[80,42],[82,45],[85,47],[90,48],[95,45],[100,42],[105,42],[111,43],[115,45],[119,47],[123,50]],D0=72,PA=146,I0=18,LA=55;function DA(){const r=document.createElement("canvas");r.width=4096,r.height=2048;const s=r.getContext("2d");s.scale(4096/2048,2048/1024);const o=s.createLinearGradient(0,0,0,1024);o.addColorStop(0,"#eef1f5"),o.addColorStop(1,"#e3e8ef"),s.fillStyle=o,s.fillRect(0,0,2048,1024),s.strokeStyle="rgba(110,130,160,0.14)",s.lineWidth=1;const a=2048/24,l=1024/12;for(let f=0;f<=24;f++)s.beginPath(),s.moveTo(f*a,0),s.lineTo(f*a,1024),s.stroke();for(let f=0;f<=12;f++)s.beginPath(),s.moveTo(0,f*l),s.lineTo(2048,f*l),s.stroke();const c=(f,p)=>({x:(f-D0)/(PA-D0)*2048,y:(1-(p-I0)/(LA-I0))*1024});s.beginPath(),bA.forEach(([f,p],_)=>{const y=c(f,p);_?s.lineTo(y.x,y.y):s.moveTo(y.x,y.y)}),s.closePath(),s.fillStyle="rgba(200,210,222,0.55)",s.fill(),s.strokeStyle="rgba(120,135,155,0.9)",s.lineWidth=4,s.stroke(),s.fillStyle="rgba(90,110,140,0.18)",s.font="bold 200px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText("中国",2048*.56,1024*.56),s.textBaseline="alphabetic";const u=RA.map(f=>{const p=io.find(_=>_.id===f);return c(p.lng,p.lat)});s.strokeStyle="#3b6fb0",s.lineWidth=8,s.setLineDash([22,16]),s.lineJoin="round",s.beginPath(),u.forEach((f,p)=>p?s.lineTo(f.x,f.y):s.moveTo(f.x,f.y)),s.stroke(),s.setLineDash([]),io.filter(f=>typeof f.lng=="number").forEach(f=>{const p=c(f.lng,f.lat);s.beginPath(),s.fillStyle=f.color,s.arc(p.x,p.y,15,0,Math.PI*2),s.fill(),s.strokeStyle="#ffffff",s.lineWidth=5,s.stroke(),s.fillStyle="#1f2937",s.font="bold 28px sans-serif",s.textAlign="center",s.fillText(f.name,p.x,p.y-24)}),s.textAlign="left",s.fillStyle="rgba(30,50,90,0.85)",s.font="bold 36px sans-serif",s.fillText("全国供应链地理分布图",34,52);const h=new Kh(r);return h.anisotropy=16,h.needsUpdate=!0,h}const wl=io.filter(t=>!t.floating&&t.id!=="brand").map(t=>t.id),ld=144;function Co(t,e,n){const i=Array.isArray(t)?t:[t],r=(n==null?void 0:n.size)??.62,s=Math.round(r*ld),o=Math.max(28,i.length*s+Math.round(s*.7)),a=document.createElement("canvas");a.width=Math.max(96,Math.round(e*ld)),a.height=o;const l=a.getContext("2d"),c=(n==null?void 0:n.bg)??"rgba(255,255,255,0.92)",u=(n==null?void 0:n.border)??"rgba(31,36,48,0.22)";l.fillStyle=c,l.strokeStyle=u,l.lineWidth=3;const h=Math.min(16,a.height*.28);l.beginPath(),l.moveTo(a.width-h,2),l.arcTo(a.width-2,2,a.width-2,a.height-2,h),l.arcTo(a.width-2,a.height-2,2,a.height-2,h),l.arcTo(2,a.height-2,2,2,h),l.arcTo(2,2,a.width-2,2,h),l.closePath(),l.fill(),l.stroke(),l.fillStyle=(n==null?void 0:n.color)??"#1f2430",l.font=`${(n==null?void 0:n.bold)===!1?"":"bold "}${Math.round(s*.62)}px system-ui, sans-serif`,l.textAlign="center",l.textBaseline="middle",i.forEach((y,v)=>{l.fillText(y,a.width/2,(v+.5)*s+s*.2)});const f=new Kh(a);f.anisotropy=16;const p=new P_({map:f,transparent:!0,depthTest:!0}),_=new VT(p);return _.scale.set(e,o/ld,1),_}function Ro(t){t.traverse(e=>{var s;const n=e;n.geometry&&n.geometry.dispose();const i=n.material;i&&(Array.isArray(i)?i.forEach(o=>o.dispose()):i.dispose());const r=e;(s=r.material)!=null&&s.map&&r.material.map.dispose()})}function en(t){return new N(t.x,t.y,t.z)}function IA(t){const e=new Xe,n=new ie(new mn(.16,.22,.7,10),new Ot({color:t}));n.position.y=.45,n.castShadow=!0;const i=new ie(new ti(.18,12,10),new Ot({color:"#f1c27d"}));return i.position.y=.95,i.castShadow=!0,e.add(n,i),e}function NA(t){const e=new Xe,n=new ie(new Me(1.4,.5,.7),new Ot({color:t,roughness:.5}));n.position.y=.5,n.castShadow=!0;const i=new ie(new Me(.6,.42,.6),new Ot({color:"#e2e8f0"}));i.position.set(-.35,.85,0),e.add(n,i);const r=new mn(.18,.18,.12,12),s=new Ot({color:"#1f2937"});return[[-.45,.36],[.45,.36],[-.45,-.36],[.45,-.36]].forEach(([o,a])=>{const l=new ie(r,s);l.rotation.x=Math.PI/2,l.position.set(o,.18,a),e.add(l)}),e}function UA(t){const e=new Xe,n=new ie(new Me(.7,.7,.7),new Ot({color:t,roughness:.6}));n.position.y=.35,n.castShadow=!0;const i=new ie(new Me(.55,.3,.55),new Ot({color:"#f1f5f9",metalness:.3,roughness:.4}));return i.position.y=.9,e.add(n,i),e}function FA(t){const e=new ie(new mn(4.1,4.1,.08,36),new Ot({color:t,transparent:!0,opacity:.16}));return e.position.y=.07,e}const kA=({nodes:t,blocks:e,records:n,activeNodeIds:i,alertNodeIds:r,actNodeId:s,actId:o,link:a,cargoLabel:l,queryResult:c,selected:u,focusTick:h,showYard:f,onPick:p,onEnterScene:_,focusNodeId:y,onExitNode:v,freeAngle:d})=>{const m=pe.useRef(null),{sceneRef:g,pickablesRef:x,isReady:A,handlers:w,setFocus:M,registerFrame:R}=dA(m,p,_,d),E=pe.useRef(!1),S=y?Kt[y]??null:null,P=pe.useRef(null);pe.useEffect(()=>{const I=g.current;if(!A||!I||E.current)return;E.current=!0;const z=new Xe;I.add(z);const k=new ie(new qr(220,110),new Ot({map:DA(),roughness:.95,metalness:0}));k.rotation.x=-Math.PI/2,k.position.set(0,-.4,-4),k.receiveShadow=!0,z.add(k);const O=new Map,F=new Map,L=new Map,W=[],q=[];t.forEach(te=>{const Re=new Xe;Re.position.copy(en(te.position)),Re.userData.pick={kind:"node",id:te.id};const Le=new Xe,Be=CA(Le,te,{embedded:!0});Le.scale.setScalar(.4),Le.position.y=-.4,Le.userData.baseY=-.4,Re.add(Le),L.set(te.id,Le),q.push(...Be);const it=new ie(new np(te.id==="brand"?9:7,.16,8,48),new to({color:te.color,transparent:!0,opacity:.3}));it.rotation.x=Math.PI/2,it.position.y=.06,Re.add(it),F.set(te.id,it);const U=new ie(new tp(.55),new Ot({color:Et.chain,emissive:new ke(Et.chain),emissiveIntensity:.5}));U.position.set(0,6.6,0),Re.add(U);const pt=Co([te.name,te.subtitle,`${te.account.slice(0,6)}…${te.account.slice(-4)}`],12,{color:"#1f2430",bg:"rgba(255,255,255,0.96)",border:te.color,size:.5});pt.position.set(0,20,0),Re.add(pt),Re.add(new uA(new N(0,-1,0),new N(0,19,0),13.5,new ke(te.color).getHex(),1,.5)),te.id==="brand"&&wl.filter(Ye=>Ye!==te.id).forEach(Ye=>{const Ze=Kt[Ye];if(!Ze)return;const Te=en(te.position).add(new N(0,.6,0)),xt=en(Ze.position).add(new N(0,.6,0)),Ne=new $o(new Pt().setFromPoints([Te,xt]),new sA({color:te.color,transparent:!0,opacity:.3,dashSize:1.2,gapSize:1.2}));Ne.computeLineDistances(),z.add(Ne)}),z.add(Re),O.set(te.id,Re),W.push(Re)});for(let te=0;te<wl.length-1;te++){const Re=en(Kt[wl[te]].position).setY(.8),Le=en(Kt[wl[te+1]].position).setY(.8),Be=new N_(Re,Le),it=new ie(new Yc(Be,40,.22,8,!1),new Ot({color:Et.road,emissive:new ke(Et.road),emissiveIntensity:.25,transparent:!0,opacity:.85}));z.add(it)}const Q=new Xe;z.add(Q);const he=Co(`以太坊账本 · ${In.contract.slice(0,18)}…`,26,{color:"#ffffff",bg:"rgba(37,99,235,0.92)",border:"rgba(37,99,235,0.4)",size:.8});he.position.set(-25,9.4,-8.5),z.add(he);const Ce=new Xe;z.add(Ce);const Y=new Xe;z.add(Y);const ee=new Xe;z.add(ee);const ue=new Xe;return z.add(ue),x.current=W,P.current={root:z,nodeGroups:O,rings:F,towers:L,chainGroup:Q,blockMeshes:[],flowGroup:Ce,flowMesh:null,flowCurve:null,flowT:0,fxGroup:Y,packets:[],queryGroup:ee,yardGroup:ue,yards:new Map,yardAnims:[],embeddedAnims:q,time:0,lastBlockCount:0},()=>{Ro(z),I.remove(z),x.current=[],P.current=null,E.current=!1}},[A,t,g,x]),pe.useEffect(()=>{const I=y?Kt[y]:null;if(!I||I.floating){M({x:10,y:0,z:0},105,.2);return}M({x:I.position.x,y:I.position.y+4,z:I.position.z},34,.2)},[y,M]),pe.useEffect(()=>{const I=P.current;!A||!I||(Ro(I.yardGroup),I.yardGroup.clear(),I.yards.clear(),I.yardAnims=[],f&&t.filter(z=>!z.floating).forEach(z=>{const k=new Xe;k.position.copy(en(z.position)),k.add(FA(z.color)),z.equipment.slice(0,4).forEach((O,F)=>{const L=F/4*Math.PI*2,W=UA(z.color);W.position.set(Math.cos(L)*3,0,Math.sin(L)*3),k.add(W),I.yardAnims.push({kind:"machine",obj:W,baseY:0,baseScale:1,cx:0,cz:0,rx:0,rz:0,speed:1.2+Math.random()*.6,phase:Math.random()*Math.PI*2})}),z.personnel.slice(0,3).forEach((O,F)=>{const L=Math.PI/4+F/3*Math.PI*2,W=IA(z.color);W.position.set(Math.cos(L)*2.1,0,Math.sin(L)*2.1),k.add(W),I.yardAnims.push({kind:"worker",obj:W,baseY:0,baseScale:1,cx:0,cz:0,rx:0,rz:0,speed:1.4+Math.random(),phase:Math.random()*Math.PI*2})}),z.vehicles.slice(0,2).forEach((O,F)=>{const L=Math.PI+F/2*Math.PI*2,W=NA(z.color),q=Math.cos(L)*3.5,Q=Math.sin(L)*3.5;W.position.set(q,0,Q),W.rotation.y=-L,k.add(W),I.yardAnims.push({kind:"vehicle",obj:W,baseY:0,baseScale:1,cx:q,cz:Q,rx:.9,rz:.9,speed:.5+Math.random()*.3,phase:Math.random()*Math.PI*2})}),I.yardGroup.add(k),I.yards.set(z.id,k)}))},[A,f,t]),pe.useEffect(()=>{const I=P.current;if(!I)return;Ro(I.chainGroup),I.chainGroup.clear(),I.blockMeshes=[];const z=x.current.filter(k=>{var O;return((O=k.userData.pick)==null?void 0:O.kind)==="node"});e.forEach((k,O)=>{const F=new Xe;F.position.copy(en(k.position));const L=k.genesis?"#94a3b8":k.status==="error"?Et.error:k.status==="warning"?Et.warn:pn[k.stage].color,W=O===e.length-1&&!k.genesis,q=new ie(new Me(2.1,1.7,2.1),new Ot({color:W?Et.chainNew:L,emissive:new ke(W?Et.chainNew:L),emissiveIntensity:W?.85:.22,roughness:.35,metalness:.15}));q.castShadow=!0,q.userData.flash=W?1:0,F.add(q);const Q=new GT(new rA(new Me(2.1,1.7,2.1)),new Gs({color:"#1f2430",transparent:!0,opacity:.25}));F.add(Q);const he=Co([`#${k.height}`,k.genesis?"创世配置块":`${pn[k.stage].short} · ${k.traceCode}`],3.4,{size:.42,color:W?"#7c2d12":"#1f2430"});if(he.position.set(0,1.6,0),F.add(he),F.userData.pick={kind:"block",id:String(k.height)},I.chainGroup.add(F),I.blockMeshes.push(q),z.push(F),O>0){const Ce=en(e[O-1].position),Y=en(k.position),ee=new $o(new Pt().setFromPoints([Ce.clone().add(new N(1.05,0,0)),Y.clone().add(new N(-1.05,0,0))]),new Gs({color:Et.chainLink,transparent:!0,opacity:.7}));Math.abs(Ce.y-Y.y)<.1&&I.chainGroup.add(ee)}}),x.current=z},[e,A,x]),pe.useEffect(()=>{var O;const I=P.current;if(!I)return;const z=e.length;if(z<=I.lastBlockCount){I.lastBlockCount=z;return}const k=I.lastBlockCount;I.lastBlockCount=z;for(let F=k;F<z;F++){const L=e[F];if(L.genesis)continue;const W=n.find(ee=>ee.blockHeight===L.height),q=(W==null?void 0:W.nodeId)??"factory",Q=en(((O=Kt[q])==null?void 0:O.position)??{x:0,y:0,z:0}).add(new N(0,6.5,0)),he=en(L.position),Ce=Q.clone().add(he).multiplyScalar(.5).add(new N(0,5,0)),Y=new ie(new ti(.42,14,12),new Ot({color:Et.packet,emissive:new ke(Et.packet),emissiveIntensity:.9}));I.fxGroup.add(Y),I.packets.push({mesh:Y,curve:new Tc(Q,Ce,he),t:0,delay:(F-k)*.18,color:pn[L.stage].color,targetIndex:F})}},[e,n,A]),pe.useEffect(()=>{const I=P.current;if(!I||(I.flowGroup.clear(),I.flowMesh=null,I.flowCurve=null,I.flowT=0,!a||!l))return;const z=en(Kt[a[0]].position),k=en(Kt[a[1]].position),O=z.clone().add(k).multiplyScalar(.5).add(new N(0,4.2,0)),F=new Tc(z.clone().setY(1.4),O,k.clone().setY(1.4)),L=new ie(new Me(1.5,1.5,1.5),new Ot({color:"#f8fafc",emissive:new ke(Et.chain),emissiveIntensity:.35,roughness:.4}));L.castShadow=!0;const W=Co(l,4.2,{size:.5});W.position.set(0,1.6,0),L.add(W),I.flowGroup.add(L),I.flowMesh=L,I.flowCurve=F},[a,l,A]),pe.useEffect(()=>{const I=P.current;if(!(!I||(Ro(I.queryGroup),I.queryGroup.clear(),!c.code)))if(c.reverse){const k=c.reverse,O=en(Kt.factory.position),F=20,W=Math.min(k.totalProducts,160),q=k.totalProducts?k.abnormalCount/k.totalProducts:0;for(let Ce=0;Ce<W;Ce++){const Y=Ce%F,ee=Math.floor(Ce/F),ue=Ce<Math.round(W*q),te=new ie(new Me(.5,.5,.5),new Ot({color:ue?Et.error:Et.ok,emissive:new ke(ue?Et.error:Et.ok),emissiveIntensity:.55}));te.position.set(O.x-4.8+Y*.62,O.y+8.2+ee*.62,O.z-1.2),I.queryGroup.add(te)}const Q=Co([`反向追溯 ${k.materialCode}`,`共 ${k.totalProducts} 件 · 异常 ${k.abnormalCount} 件 · 正常 ${k.normalCount} 件`,...k.batches.map(Ce=>`${Ce.batchNo}：${Ce.total} 件（异常 ${Ce.abnormal}）`)],13,{color:"#ffffff",bg:"rgba(31,41,55,0.92)",size:.55});Q.position.set(O.x,O.y+12.6,O.z-1.2),I.queryGroup.add(Q);const he=new $o(new Pt().setFromPoints([O.clone().setY(O.y+6),O.clone().setY(O.y+7.8)]),new Gs({color:Et.accent}));I.queryGroup.add(he)}else c.kind==="product"&&c.steps.forEach((O,F)=>{const L=n.find(he=>he.hash===O.hash),W=L==null?void 0:L.nodeId;if(!W||!Kt[W])return;const q=en(Kt[W].position),Q=new ie(new ti(.45,12,10),new to({color:O.status==="error"?Et.error:Et.cyan}));Q.position.set(q.x+2.6,q.y+7+F%3*.9,q.z+2.6),I.queryGroup.add(Q)})},[c,n,A]),pe.useEffect(()=>{if(!s){M({x:10,y:0,z:0},105,.2);return}const I=Kt[s];if(!I)return;const z=mA[o]??{radius:34,phi:.2};M({x:I.position.x,y:I.position.y+3.5,z:I.position.z},z.radius,z.phi)},[s,o,h,M]),pe.useEffect(()=>{if(!u||u.kind!=="node")return;const I=Kt[u.id];I&&M({x:I.position.x,y:I.position.y+3.5,z:I.position.z},34,.2)},[u,M]);const G=pe.useCallback((I,z)=>{const k=P.current;if(!k)return;k.time=z,k.embeddedAnims.forEach(F=>F(z)),k.yardAnims.forEach(F=>{if(F.kind==="worker")F.obj.position.y=F.baseY+Math.abs(Math.sin(z*F.speed+F.phase))*.12,F.obj.rotation.y=Math.sin(z*.6+F.phase)*.5;else if(F.kind==="machine"){const L=F.baseScale+Math.sin(z*F.speed+F.phase)*.06;F.obj.scale.set(L,L,L)}else if(F.kind==="vehicle"){const L=z*F.speed+F.phase;F.obj.position.x=F.cx+Math.cos(L)*F.rx,F.obj.position.z=F.cz+Math.sin(L)*F.rz,F.obj.rotation.y=-L+Math.PI/2}}),t.forEach(F=>{const L=k.rings.get(F.id),W=k.towers.get(F.id),q=i.includes(F.id),Q=r.includes(F.id);if(L){const he=L.material;if(q){const Ce=1+Math.sin(z*4)*.06;L.scale.set(Ce,Ce,1),he.opacity=.55+Math.sin(z*4)*.25,he.color.set(Q?Et.error:F.color)}else L.scale.set(1,1,1),he.opacity=Q?.45:.22,he.color.set(Q?Et.error:F.color)}W&&(W.position.y=W.userData.baseY+(q?Math.sin(z*3)*.15:0))});const O=k.nodeGroups.get("brand");if(O&&(O.position.y=Kt.brand.position.y+Math.sin(z*.9)*.6),k.flowMesh&&k.flowCurve){k.flowT+=I*.22,k.flowT>1&&(k.flowT=0);const F=k.flowCurve.getPoint(k.flowT);k.flowMesh.position.copy(F),k.flowMesh.rotation.y+=I*1.2}if(k.packets=k.packets.filter(F=>{if(F.delay>0)return F.delay-=I,!0;F.t+=I*.85;const L=Math.min(1,F.t);F.mesh.position.copy(F.curve.getPoint(L));const W=1-L*.35;if(F.mesh.scale.setScalar(W),L>=1){const q=k.blockMeshes[F.targetIndex];return q&&(q.userData.flash=1),k.fxGroup.remove(F.mesh),Ro(F.mesh),!1}return!0}),k.blockMeshes.forEach((F,L)=>{const W=L===k.blockMeshes.length-1,q=F.material,Q=F.userData.flash??0;Q>0?(F.userData.flash=Math.max(0,Q-I*1.4),q.emissiveIntensity=.35+Q*1.4,F.scale.setScalar(1+Q*.22)):(q.emissiveIntensity=W?.55+Math.sin(z*3)*.2:.22,F.scale.setScalar(1))}),(u==null?void 0:u.kind)==="block"){const F=Number(u.id),L=k.blockMeshes[F];if(L){const W=L.material;W.emissiveIntensity=1.1}}},[t,i,r,u]);return pe.useEffect(()=>(R(G),()=>R(null)),[G,R]),b.jsxs("div",{style:{position:"absolute",inset:0,overflow:"hidden"},children:[b.jsx("div",{ref:m,style:{position:"absolute",inset:0,touchAction:"none"},onPointerDown:w.onMouseDown,onPointerMove:w.onPointerMove,onPointerUp:w.onPointerUp,onPointerLeave:w.onPointerLeave,onDoubleClick:w.onDoubleClick,onWheel:w.onWheel}),S&&!S.floating&&b.jsxs(b.Fragment,{children:[b.jsxs("div",{style:{position:"absolute",top:14,left:14,right:14,display:"flex",alignItems:"center",gap:12},children:[b.jsx("button",{type:"button",onClick:v,style:{border:"1px solid var(--kimi-color-border)",background:"rgba(255,255,255,0.95)",borderRadius:10,padding:"8px 14px",fontSize:13,fontWeight:600,cursor:"pointer",color:"var(--kimi-color-text-secondary)"},children:"← 返回总览"}),b.jsxs("div",{style:{background:"rgba(255,255,255,0.95)",border:"1px solid var(--kimi-color-border)",borderRadius:10,padding:"8px 14px"},children:[b.jsx("span",{style:{fontSize:15,fontWeight:700},children:S.name}),b.jsx("span",{style:{fontSize:12,color:"var(--kimi-color-text-tertiary)",marginLeft:8},children:`${S.account.slice(0,6)}…${S.account.slice(-4)}`})]}),b.jsx("div",{style:{fontSize:12,color:"var(--kimi-color-text-tertiary)"},children:"拖拽旋转 · 滚轮缩放"})]}),b.jsxs("div",{style:{position:"absolute",left:14,bottom:14,width:300,background:"rgba(255,255,255,0.95)",border:"1px solid var(--kimi-color-border)",borderRadius:12,padding:14,boxShadow:"0 8px 30px rgba(15,23,42,0.12)",maxHeight:"60vh",overflow:"auto"},children:[b.jsx("div",{style:{fontSize:13,fontWeight:700,marginBottom:6},children:"场景设施"}),b.jsx(bo,{label:"场地",items:[S.site]}),b.jsx(bo,{label:"设备",items:S.equipment}),b.jsx(bo,{label:"人员",items:S.personnel}),b.jsx(bo,{label:"车辆",items:S.vehicles}),b.jsx(bo,{label:"基本活动",items:S.activities})]})]})]})},bo=({label:t,items:e})=>e.length?b.jsxs("div",{style:{marginTop:6},children:[b.jsx("div",{style:{fontSize:11.5,fontWeight:600},children:t}),e.map(n=>b.jsxs("div",{style:{fontSize:11,color:"var(--kimi-color-text-secondary)"},children:["· ",n]},n))]}):null,Ac={position:"absolute",background:"rgba(255,255,255,0.95)",border:"1px solid var(--kimi-color-border)",borderRadius:12,boxShadow:"0 8px 28px rgba(15,23,42,0.10)",padding:14,backdropFilter:"blur(6px)"},hi={background:"var(--kimi-color-surface-muted)",border:"1px solid var(--kimi-color-border)",borderRadius:8,padding:"8px 10px"};function F_({children:t,sub:e,color:n}){return b.jsxs("div",{style:{marginBottom:6},children:[b.jsx("div",{style:{fontSize:13,fontWeight:600,color:n??"var(--kimi-color-text-primary)"},children:t}),e&&b.jsx("div",{style:{fontSize:11,color:"var(--kimi-color-text-tertiary)",marginTop:2},children:e})]})}function at({label:t,value:e,mono:n,color:i}){return b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,fontSize:11.5,padding:"3px 0",borderBottom:"1px dashed rgba(148,163,184,0.28)"},children:[b.jsx("span",{style:{color:"var(--kimi-color-text-tertiary)",whiteSpace:"nowrap"},children:t}),b.jsx("span",{style:{color:i??"var(--kimi-color-text-primary)",fontFamily:n?"var(--kimi-font-mono)":"inherit",textAlign:"right",wordBreak:"break-all"},children:e})]})}function Bf({active:t,onClick:e,children:n,color:i,title:r}){return b.jsx("button",{type:"button",title:r,onClick:e,style:{border:`1px solid ${t?i??"var(--kimi-color-accent)":"var(--kimi-color-border)"}`,background:t?i??"var(--kimi-color-accent)":"#fff",color:t?"#fff":"var(--kimi-color-text-secondary)",borderRadius:999,padding:"4px 10px",fontSize:11.5,cursor:"pointer",whiteSpace:"nowrap"},children:n})}function k_({value:t,color:e}){return b.jsx("div",{style:{height:6,background:"var(--kimi-color-surface-strong)",borderRadius:999,overflow:"hidden",marginTop:6},children:b.jsx("div",{style:{width:`${Math.max(0,Math.min(1,t))*100}%`,height:"100%",background:e,borderRadius:999,transition:"width 0.4s ease"}})})}function di({text:t,color:e}){return b.jsx("span",{style:{display:"inline-block",fontSize:10.5,padding:"1px 7px",borderRadius:4,color:"#fff",background:e,marginRight:6},children:t})}function OA({children:t,height:e}){return b.jsx("div",{style:{height:e,overflowY:"auto",paddingRight:4},children:t})}const jl={flex:1,border:"1px solid var(--kimi-color-border)",background:"#fff",borderRadius:8,padding:"6px 0",fontSize:12,cursor:"pointer",color:"var(--kimi-color-text-secondary)"},zA={...jl,background:"var(--kimi-color-accent)",borderColor:"var(--kimi-color-accent)",color:"#fff",fontWeight:600},BA=({acts:t,currentAct:e,autoPlay:n,speed:i,recordCount:r,onGoToAct:s,onNext:o,onPrev:a,onReset:l,onToggleAutoPlay:c,onSpeed:u,showYard:h,onToggleYard:f})=>{const[p,_]=pe.useState(!1),y=t.length,v=e+1;return p?b.jsx("button",{type:"button",onClick:()=>_(!1),title:"展开演示控制台",style:{position:"absolute",left:14,top:14,zIndex:20,writingMode:"vertical-rl",border:"1px solid var(--kimi-color-border)",background:"rgba(255,255,255,0.95)",borderRadius:10,padding:"10px 6px",fontSize:12,fontWeight:600,color:"var(--kimi-color-text-secondary)",cursor:"pointer"},children:"演示控制台 ◂"}):b.jsxs("div",{style:{...Ac,left:14,top:14,width:322,bottom:14,display:"flex",flexDirection:"column",gap:10},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[b.jsx(F_,{sub:"按幕推进：录入 → 上链 → 查询",children:"演示控制台"}),b.jsx("button",{type:"button",onClick:()=>_(!0),title:"收起面板",style:{border:"1px solid var(--kimi-color-border)",background:"#fff",borderRadius:8,width:26,height:26,fontSize:13,cursor:"pointer",color:"var(--kimi-color-text-tertiary)",flex:"none"},children:"▸"})]}),b.jsxs("div",{style:{display:"flex",gap:6},children:[b.jsx("button",{style:jl,onClick:a,children:"← 上一步"}),b.jsx("button",{style:zA,onClick:c,children:n?"⏸ 暂停":v>=y?"↻ 重新演示":"▶ 自动演示"}),b.jsx("button",{style:jl,onClick:o,children:"下一步 →"})]}),b.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[b.jsx("span",{style:{fontSize:11.5,color:"var(--kimi-color-text-tertiary)"},children:"速度"}),[.5,1,2].map(d=>b.jsxs(Bf,{active:i===d,onClick:()=>u(d),children:[d,"x"]},d)),b.jsx("div",{style:{flex:1}}),b.jsx("button",{style:{...jl,flex:"none",padding:"4px 10px"},onClick:l,children:"重置"})]}),b.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[b.jsx("span",{style:{fontSize:11.5,color:"var(--kimi-color-text-tertiary)"},children:"场景设施"}),b.jsx(Bf,{active:h,onClick:()=>f(!h),children:h?"场地/设备/人员/车辆":"已隐藏"})]}),b.jsxs("div",{children:[b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12},children:[b.jsxs("span",{style:{fontWeight:600},children:["第 ",Math.max(1,v)," 幕 / 共 ",y," 幕"]}),b.jsxs("span",{style:{color:"var(--kimi-color-text-tertiary)"},children:["链上 ",r," 条记录"]})]}),b.jsx(k_,{value:v/y,color:"var(--kimi-color-accent)"})]}),b.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:t.map(d=>{const m=d.id===e,g=d.id<e;return b.jsxs("button",{onClick:()=>s(d.id),style:{textAlign:"left",border:`1px solid ${m?"var(--kimi-color-accent)":"var(--kimi-color-border)"}`,background:m?"rgba(37,99,235,0.08)":g?"rgba(16,185,129,0.06)":"#fff",borderRadius:8,padding:"7px 9px",cursor:"pointer",display:"flex",gap:8,alignItems:"flex-start"},children:[b.jsx("span",{style:{flex:"none",width:20,height:20,borderRadius:"50%",background:m?"var(--kimi-color-accent)":g?"#10b981":"var(--kimi-color-surface-strong)",color:"#fff",fontSize:11,display:"flex",alignItems:"center",justifyContent:"center"},children:g?"✓":d.no}),b.jsxs("span",{style:{minWidth:0},children:[b.jsx("span",{style:{display:"block",fontSize:12,fontWeight:m?600:500,color:"var(--kimi-color-text-primary)"},children:d.title}),b.jsxs("span",{style:{display:"block",fontSize:10.5,color:"var(--kimi-color-text-tertiary)",marginTop:2},children:[pn[d.stage].label," · ",d.role]})]})]},d.id)})}),b.jsxs("div",{style:{borderTop:"1px solid var(--kimi-color-border)",paddingTop:8},children:[b.jsx("div",{style:{fontSize:12,fontWeight:600,marginBottom:6},children:"参与方（MSP）"}),b.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:U_.map(d=>b.jsx("span",{title:d.duty,style:{fontSize:10.5,padding:"2px 7px",borderRadius:999,background:`${d.color}18`,color:d.color,border:`1px solid ${d.color}55`},children:d.name},d.msp))})]})]})};function N0(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}function Ji(t){let e="",n=N0(t);for(let i=0;i<8;i++)n=N0(`${t}#${i}#${n.toString(16)}`),e+=n.toString(16).padStart(8,"0");return`0x${e}`}function Nn(t,e=10){return t.length>e+4?`${t.slice(0,e)}…${t.slice(-4)}`:t}const Cc="0x"+"0".repeat(64);function O_(t,e){return`${t}${String(e).padStart(3,"0")}`}function HA(){const t=hA.map(n=>({...n,rdsCertHash:n.rdsCertNo?Ji(`${n.rdsCertNo}|${n.duckBatchNo}`):void 0})),e=[];return ma.forEach(n=>{for(let i=1;i<=n.count;i++)e.push({code:O_(n.prefix,i),batchNo:n.batchNo,materials:[...n.materials],qcResult:"PENDING",abnormal:!1,status:"未投产",region:"华东",authorizedRegion:"华东",scanCount:0})}),{materials:t,products:e}}function U0(){const t=ma[0],e=[];for(let n=1;n<=t.count&&e.length<Fo.shipped;n++)n>=t.abnormalFrom&&n<=t.abnormalTo||e.push(O_(t.prefix,n));return e}function VA(t,e,n){const i=["RM-D-001","RM-D-002"];switch(n){case 0:e.forEach(r=>{r.category==="羽绒"&&(r.rdsVerified=!0,r.consumptionStatus="NOT_STORED")});break;case 1:e.forEach(r=>{r.warehouse="CS-WH-01",r.consumptionStatus="AVAILABLE"});break;case 2:ma.forEach(r=>{t.forEach(s=>{s.batchNo===r.batchNo&&(s.status="生产中",s.qcResult="PASS")}),r.materials.forEach(s=>{const o=e.find(a=>a.code===s);o&&(o.consumedQty+=r.count*(o.category==="羽绒"?4:o.category==="面料"?5:1),o.consumptionStatus=o.consumedQty>=o.inboundQty?"FULLY_CONSUMED":"PARTIALLY_CONSUMED",o.usedByBatches.includes(r.batchNo)||o.usedByBatches.push(r.batchNo))})}),e.forEach(r=>{i.includes(r.code)&&(r.consumptionStatus="PARTIALLY_CONSUMED")});break;case 3:t.forEach(r=>{const s=ma.find(l=>l.batchNo===r.batchNo),o=Number(r.code.slice(-3));s.abnormalTo>=s.abnormalFrom&&o>=s.abnormalFrom&&o<=s.abnormalTo?(r.abnormal=!0,r.qcResult="FAIL",r.status="返工"):r.status==="生产中"&&(r.status="已放行")});break;case 4:t.forEach(r=>{r.status==="已放行"&&(r.status="已入库",r.rfid=`RFID-${r.code.slice(-7)}`)});break;case 5:{const r=new Set(U0());t.forEach(s=>{r.has(s.code)&&s.status==="已入库"&&(s.status="在途")});break}case 6:{const r=U0(),s=new Set(r.slice(0,Fo.sold)),o=new Set(r.slice(0,Fo.scanned));t.forEach(l=>{r.includes(l.code)&&(l.status=s.has(l.code)?"已售出":"在售",l.retailer="Retailer-HZ-01",l.region="华东",l.soldRegion="华东",o.has(l.code)&&(l.scanCount=1+Number(l.code.slice(-3))%3))});const a=t.find(l=>l.code===Fo.crossRegionCode);a&&(a.soldRegion=Fo.crossRegion,a.status="已售出",a.retailer="Retailer-GZ-08");break}}}function GA(t,e){const n=i=>{var r;return Nn(((r=e.find(s=>s.code===i))==null?void 0:r.rdsCertHash)??Cc,12)};switch(t){case 0:return[{actId:0,stage:"farm",traceCode:"RM-D-001",msp:"FarmMSP",operator:"王建国",action:"登记养殖批次并上传 RDS 证书哈希",timestamp:"2025-03-05 16:20",status:"normal",nodeId:"farm",note:"该羽绒来自黑龙江基地养殖批次 DUCK-2025-001，RDS 认证已核验，初加工完成日期 3 月 5 日。",metadata:{duckBatchNo:"DUCK-2025-001",farmCode:"Farm-HLJ-01",rdsCertNo:"RDS-2025-HLJ-0451",rdsCertHash:n("RM-D-001"),outDate:"2025-03-01",slaughterDate:"2025-03-02",processFinishDate:"2025-03-05",outputCode:"RM-D-001"}},{actId:0,stage:"farm",traceCode:"RM-D-002",msp:"FarmMSP",operator:"王建国",action:"登记第二养殖批次产出",timestamp:"2025-03-06 15:05",status:"normal",nodeId:"farm",note:"养殖批次 DUCK-2025-002 产出羽绒 RM-D-002，RDS 证书 RDS-2025-HLJ-0452 已核验。",metadata:{duckBatchNo:"DUCK-2025-002",farmCode:"Farm-HLJ-02",rdsCertNo:"RDS-2025-HLJ-0452",rdsCertHash:n("RM-D-002"),outDate:"2025-03-03",slaughterDate:"2025-03-04",processFinishDate:"2025-03-06",outputCode:"RM-D-002"}}];case 1:{const i=(r,s,o,a,l)=>({actId:1,stage:"raw_material",traceCode:r,msp:"SupplierMSP",operator:"李霞",action:"原材料扫码入库",timestamp:l,status:"normal",nodeId:"material",note:`${l.slice(5,10)} 入库常熟一号仓（CS-WH-01），状态可用，尚未被消耗。`,metadata:{batchNo:s,supplier:"SupplierMSP",materialCertHash:a,warehouseCode:"CS-WH-01",inboundQty:o,consumptionStatus:"AVAILABLE"}});return[i("RM-D-001","D-001","1200 kg",n("RM-D-001"),"2025-03-08 09:20"),i("RM-D-002","D-002","800 kg",n("RM-D-002"),"2025-03-08 09:35"),i("RM-F-001","F-001","3000 m",Nn(Ji("COC-F-001"),12),"2025-03-08 10:02"),i("RM-Z-001","Z-001","3000 条",Nn(Ji("COC-Z-001"),12),"2025-03-08 10:18")]}case 2:return[{actId:2,stage:"manufacturing",traceCode:"PROD-A-001",msp:"FactoryMSP",operator:"陈锋 / MES 自动触发",action:"投料生产 · 工序 C-01 裁断",timestamp:"2025-03-10 08:40",status:"normal",nodeId:"factory",note:"使用了 D-001 羽绒、F-001 面料、Z-001 拉链，已完成裁断，质检通过。",metadata:{batchNo:"BATCH-2025-03",consumedMaterials:'["RM-D-001", "RM-F-001", "RM-Z-001"]',processNo:"C-01 裁断",deviceId:"EQ-CUT-07",programVersion:"v2.3.1",qcResult:"PASS",operatorSign:"陈锋（FactoryMSP）"}},{actId:2,stage:"manufacturing",traceCode:"PROD-B-001",msp:"FactoryMSP",operator:"陈锋 / MES 自动触发",action:"投料生产 · 工序 C-01 裁断",timestamp:"2025-03-10 13:15",status:"normal",nodeId:"factory",note:"使用了 D-002 羽绒、F-001 面料、Z-001 拉链，已完成裁断，质检通过。",metadata:{batchNo:"BATCH-2025-04",consumedMaterials:'["RM-D-002", "RM-F-001", "RM-Z-001"]',processNo:"C-01 裁断",deviceId:"EQ-CUT-07",programVersion:"v2.3.1",qcResult:"PASS",operatorSign:"陈锋（FactoryMSP）"}},{actId:2,stage:"manufacturing",traceCode:"PROD-A-300",msp:"FactoryMSP",operator:"MES 自动触发",action:"批次末件投料（共 300 件）",timestamp:"2025-03-11 18:50",status:"normal",nodeId:"factory",note:"BATCH-2025-03 共 300 件完成投料，RM-D-001 消耗状态更新为 PARTIALLY_CONSUMED。",metadata:{batchNo:"BATCH-2025-03",consumedMaterials:'["RM-D-001", "RM-F-001", "RM-Z-001"]',plannedQty:"300 件",consumptionUpdate:"RM-D-001: AVAILABLE → PARTIALLY_CONSUMED"}}];case 3:return[{actId:3,stage:"manufacturing",traceCode:"PROD-A-150",msp:"FactoryMSP",operator:"质检员 · 张三",action:"工序质检 · 充绒量不达标",timestamp:"2025-03-12 10:26",status:"error",nodeId:"warehouse",note:"质检 FAIL：充绒量不达标（偏差 -8.6%），品牌方暂停 BATCH-2025-03 使用 RM-D-001 的产品放行。",metadata:{qcResult:"FAIL",abnormalType:"充绒量不达标",deviation:"-8.6%",deviceId:"EQ-FILL-03",inspectorSign:"张三（FactoryMSP）",batchHold:"BATCH-2025-03 暂停放行"}},{actId:3,stage:"manufacturing",traceCode:"PROD-A-150",msp:"BrandMSP",operator:"品牌方质量管理 · 赵磊",action:"复检结论与影响范围锁定",timestamp:"2025-03-13 15:40",status:"warning",nodeId:"warehouse",note:"复检确认影响范围 PROD-A-100 ~ PROD-A-160 共 61 件，原因设备参数偏移；61 件返工，其余 239 件放行。",metadata:{recheckResult:"确认异常",abnormalReason:"充绒机 EQ-FILL-03 参数偏移",affectedRange:"PROD-A-100 ~ PROD-A-160（61 件）",action:"61 件返工 / 239 件放行",brandSign:"赵磊（BrandMSP）"}}];case 4:return[{actId:4,stage:"warehouse",traceCode:"PROD-A-001",msp:"FactoryMSP",operator:"周敏 / 标签系统",action:"成品入库并绑定 RFID 标签",timestamp:"2025-03-15 11:12",status:"normal",nodeId:"warehouse",note:"3 月 15 日成品入库常熟一号仓，RFID 标签已绑定，吊牌信息校验一致。",metadata:{warehouseReceiptNo:"WH-2025-0315",cargoStatus:"入库",warehouseCode:"CS-WH-01",quantity:"239 件",rfidTagId:"RFID-A-001",labelCheckResult:"PASS"}},{actId:4,stage:"warehouse",traceCode:"WH-2025-0315",msp:"FactoryMSP",operator:"周敏",action:"仓单登记（合格品 239 件）",timestamp:"2025-03-15 11:30",status:"normal",nodeId:"warehouse",note:"仓单 WH-2025-0315 登记 239 件合格品，61 件返工件不入库。",metadata:{warehouseReceiptNo:"WH-2025-0315",cargoStatus:"入库",warehouseCode:"CS-WH-01",passedQty:"239 件",reworkQty:"61 件"}}];case 5:{const i={actId:5,stage:"transport",traceCode:"PROD-A-001",msp:"LogisticsMSP",shipmentNo:"WAY-2025-0318"};return[{...i,operator:"司机 · 刘强",action:"装车（常熟）",timestamp:"2025-03-18 09:00",status:"normal",nodeId:"logistics",note:"3 月 18 日 09:00 装车离开常熟，发货方与承运方双方签名确认。",metadata:{shipmentNo:"WAY-2025-0318",nodeType:"装车",nodeLocation:"江苏常熟",quantity:"200 件",handoverSignatures:"FactoryMSP ✔ / LogisticsMSP ✔"}},{...i,operator:"上海分拨中心",action:"到达中转（上海）",timestamp:"2025-03-18 15:00",status:"warning",nodeId:"logistics",note:"当日下午到达上海中转，滞留 18 小时超过 12 小时阈值，触发运输超时预警。",metadata:{shipmentNo:"WAY-2025-0318",nodeType:"到达中转",nodeLocation:"上海分拨中心",dwellHours:"18（阈值 12）",alert:"运输超时"}},{...i,operator:"门店收货员 · 吴倩",action:"签收（杭州）",timestamp:"2025-03-19 10:00",status:"normal",nodeId:"logistics",note:"3 月 19 日 10:00 杭州门店签收，承运方与门店双方签名确认。",metadata:{shipmentNo:"WAY-2025-0318",nodeType:"签收",nodeLocation:"浙江杭州",handoverSignatures:"LogisticsMSP ✔ / RetailerMSP ✔"}}]}case 6:return[{actId:6,stage:"retail",traceCode:"PROD-A-001",msp:"RetailerMSP",operator:"店员 · 吴倩",action:"门店收货确认并上架",timestamp:"2025-03-19 10:30",status:"normal",nodeId:"retailer",note:"杭州门店（华东）收货 200 件，销售状态：在售。",metadata:{retailerId:"Retailer-HZ-01",region:"华东",receiveTime:"2025-03-19 10:30",saleStatus:"在售"}},{actId:6,stage:"retail",traceCode:"PROD-A-001",msp:"RetailerMSP",operator:"店员 · 吴倩",action:"销售登记：在售 → 已售出",timestamp:"2025-03-21 16:42",status:"normal",nodeId:"retailer",note:"该件于 3 月 21 日 16:42 售出，销售区域华东与授权区域一致。",metadata:{retailerId:"Retailer-HZ-01",region:"华东",saleStatus:"已售出",saleTime:"2025-03-21 16:42",purchaseHash:Nn(Ji("member-88231"),12)}},{actId:6,stage:"consumer_verify",traceCode:"PROD-A-001",msp:"RetailerMSP",operator:"消费者扫码",action:"消费者扫码验证",timestamp:"2025-03-22 11:08",status:"normal",nodeId:"retailer",note:"您是本店第 128 位验证该产品的消费者，扫码渠道：门店吊牌二维码。",metadata:{verifyTime:"2025-03-22 11:08",verifyChannel:"门店吊牌二维码",verifySeq:"第 128 位",purchaseHash:Nn(Ji("member-88231"),12)}},{actId:6,stage:"consumer_verify",traceCode:"PROD-A-207",msp:"BrandMSP",operator:"品牌方监管引擎",action:"窜货预警：销售区域与授权区域不一致",timestamp:"2025-03-22 19:31",status:"warning",nodeId:"brand",note:"PROD-A-207 在华南被扫码，授权区域为华东，判定为窜货。",metadata:{verifyTime:"2025-03-22 19:31",verifyChannel:"线上商城",soldRegion:"华南",authorizedRegion:"华东",alert:"窜货预警"}}];default:return[]}}function WA(t,e,n){const i=JSON.stringify({stage:t.stage,traceCode:t.traceCode,msp:t.msp,metadata:t.metadata,ts:t.timestamp,prev:n}),r=Ji(i);return{txId:`tx-${r.slice(2,12)}`,blockHeight:e,actId:t.actId,stage:t.stage,traceCode:t.traceCode,msp:t.msp,operator:t.operator,action:t.action,timestamp:t.timestamp,previousHash:n,hash:r,metadata:t.metadata,status:t.status,note:t.note,nodeId:t.nodeId}}function jA(t,e){return{height:t.blockHeight,hash:Ji(`${e}|${t.hash}|${t.blockHeight}`),prevHash:e,txId:t.txId,timestamp:t.timestamp,stage:t.stage,traceCode:t.traceCode,msp:t.msp,status:t.status,position:Hf(t.blockHeight)}}const F0={x:-25,z:-8.5};function Hf(t){const i=Math.floor(t/14),r=t%14,o=-((Math.min(14,Math.max(1,t-i*14+1))-1)/2)*3.2;return{x:F0.x+o+r*3.2,y:11.5+i*3.4,z:F0.z}}function Tl(t,e){const n=Object.entries(t.metadata).map(([i,r])=>({label:i,value:r}));return{actId:t.actId,stage:t.stage,stageLabel:pn[t.stage].label,title:t.action,time:t.timestamp,msp:t.msp,operator:t.operator,status:t.status,fields:n,hash:t.hash,blockHeight:t.blockHeight,note:t.note,scope:e}}const Al={farm:0,raw_material:1,manufacturing:2,warehouse:3,transport:4,retail:5,consumer_verify:6};function XA(t,e,n,i){const r=i.find(o=>o.code===t||o.duckBatchNo===t),s=n.find(o=>o.code===t);if(r){const o=r.code,a=e.filter(f=>f.traceCode===o||f.metadata.outputCode===o).map(f=>Tl(f,"own")).sort((f,p)=>Al[f.stage]-Al[p.stage]||f.blockHeight-p.blockHeight),l=n.filter(f=>f.materials.includes(o)),c=new Map;l.forEach(f=>{const p=c.get(f.batchNo)??{total:0,abnormal:0,codes:[]};p.total+=1,f.abnormal&&(p.abnormal+=1,p.codes.length<6&&p.codes.push(f.code)),c.set(f.batchNo,p)});const u=l.filter(f=>f.abnormal).length,h=`该${r.category==="羽绒"?"羽绒":"原材料"}来自`+(r.duckBatchNo?`养殖批次 ${r.duckBatchNo}（${r.farmCode??""}），RDS 认证已核验；`:`${r.supplier} 供应；`)+`已被 ${l.length} 件产品消耗，其中 ${u} 件关联质检异常，${l.length-u} 件正常放行。`;return{code:o,kind:"material",title:`${r.code} · ${r.name}`,summary:h,status:u>0?"warning":"normal",steps:a,reverse:{materialCode:o,totalProducts:l.length,normalCount:l.length-u,abnormalCount:u,batches:[...c.entries()].map(([f,p])=>({batchNo:f,total:p.total,abnormal:p.abnormal,codes:p.codes}))}}}if(s){const o=s.code.slice(0,s.code.lastIndexOf("-")+1),a=[];e.forEach(h=>{h.traceCode===s.code?a.push(Tl(h,"own")):s.materials.includes(h.traceCode)?a.push(Tl(h,"material")):s.abnormal&&h.traceCode.startsWith(o)&&h.status!=="normal"&&a.push(Tl(h,"batch"))}),a.sort((h,f)=>Al[h.stage]-Al[f.stage]||h.blockHeight-f.blockHeight);const c=s.materials.map(h=>i.find(f=>f.code===h)).filter(Boolean).find(h=>h.duckBatchNo),u=s.abnormal?`⚠ 该件命中 ${s.batchNo} 充绒量异常影响范围（PROD-A-100 ~ PROD-A-160），已标记返工、暂停放行；原料仍为${c?` ${c.farmCode} 养殖批次 ${c.duckBatchNo}`:"共用原料"}。`:`该件羽绒服使用${c?`黑龙江基地 RDS 认证羽绒（批次 ${c.duckBatchNo}）`:"共用面料与辅料"}，经常熟工厂裁断、充绒、质检${s.qcResult==="PASS"?"合格":"待检"}，成品入库后经上海中转到达杭州门店${s.scanCount?`，已有 ${s.scanCount} 次扫码验证`:""}。`;return{code:s.code,kind:"product",title:`${s.code} · ${s.batchNo}`,summary:u,status:s.abnormal?"error":"normal",steps:a,reverse:null}}return{code:t,kind:"unknown",title:"未查询到该溯源码",summary:"链上不存在该溯源码的记录，请确认吊牌二维码或 RFID 标签是否正确。",status:"warning",steps:[],reverse:null}}const $A={qc_fail:{title:"质检异常",action:"查看完整链路",level:"high"},cross_region:{title:"窜货预警",action:"查看影响范围",level:"medium"},transport_delay:{title:"运输超时",action:"查看运输链路",level:"medium"}};function YA(t){return t.filter(e=>e.status!=="normal").map((e,n)=>{const i=e.stage==="manufacturing"?"qc_fail":e.stage==="transport"?"transport_delay":"cross_region",r=$A[i];return{id:`alert-${n}-${e.txId}`,type:i,level:e.status==="error"?"high":r.level,title:`${r.title} · ${e.action}`,detail:e.note,scope:e.metadata.affectedRange??e.metadata.alert??e.metadata.dwellHours??e.metadata.batchHold??"—",codes:[e.traceCode],txId:e.txId,blockHeight:e.blockHeight,nodeId:e.nodeId,time:e.timestamp,action:r.action}}).reverse()}const cd=48;function qA(t,e,n,i){const r=M=>[...t].reverse().find(R=>R.stage===M),s=(M,R)=>({txId:(M==null?void 0:M.txId)??"—",blockHeight:(M==null?void 0:M.blockHeight)??0,hash:M?M.hash:Cc,label:R}),o=e.filter(M=>M.category==="羽绒"),a=o.filter(M=>M.rdsVerified),l=o.length?a.length/o.length:0,c=n.filter(M=>M.status!=="未投产").length,u=n.filter(M=>M.abnormal).length,h=i>3,f=c?(c-u)/c:0,p=e.filter(M=>M.consumptionStatus!=="NOT_STORED"),_=p.reduce((M,R)=>M+R.inboundQty,0),y=p.reduce((M,R)=>M+R.consumedQty,0),v=_?y/_:0,d=t.filter(M=>M.stage==="transport"&&M.status==="warning").length,m=(cd-d)/cd,g=t.filter(M=>M.metadata.alert==="窜货预警").length,x=n.filter(M=>M.status==="已售出").length,A=n.filter(M=>M.scanCount>0).length,w=x?Math.min(1,A/x):0;return[{id:"rds",name:"RDS 认证覆盖率",value:l,display:i>0?`${(l*100).toFixed(1)}%`:"—",unit:"认证批次 / 羽绒批次",progress:l,hint:"羽绒原料中已上链并核验 RDS 证书的批次占比",color:"#16a34a",rows:o.map(M=>({label:`${M.code}（${M.duckBatchNo}）`,value:M.rdsVerified?`${M.rdsCertNo} 已核验`:"未核验"})),proof:s(r("farm"),"养殖阶段 RDS 证书哈希交易")},{id:"qc",name:"质检通过率",value:f,display:h?`${(f*100).toFixed(1)}%`:"待质检",unit:`合格 ${c-u} / 投产 ${c} 件`,progress:h?f:0,hint:"投产件数中质检合格（含复检放行）的比例",color:f>.95?"#16a34a":"#f59e0b",rows:ma.map(M=>{const R=n.filter(S=>S.batchNo===M.batchNo),E=R.filter(S=>S.abnormal).length;return{label:`${M.batchNo}（${R.length} 件）`,value:i>3?`异常 ${E} 件 · 合格率 ${((R.length-E)/R.length*100).toFixed(1)}%`:"生产中"}}),proof:s(r("manufacturing"),"质检 / 复检交易")},{id:"material",name:"原材料消耗进度",value:v,display:i>2?`${(v*100).toFixed(1)}%`:"—",unit:`已消耗 ${y.toLocaleString()} / 入库 ${_.toLocaleString()}`,progress:v,hint:"已投料消耗量占入库量的比例，投料即触发链上状态更新",color:"#2563eb",rows:p.map(M=>({label:`${M.code} · ${M.name.slice(0,10)}`,value:`${M.consumedQty.toLocaleString()} / ${M.inboundQty.toLocaleString()} ${M.unit} · ${M.consumptionStatus}`})),proof:s(r("raw_material"),"原材料入库交易")},{id:"transport",name:"运输时效达标率",value:m,display:i>5?`${(m*100).toFixed(1)}%`:"—",unit:`本月 ${cd} 单 · 超时 ${d} 单`,progress:m,hint:"运输单在节点时效阈值内完成的比例（中转滞留阈值 12 小时）",color:d?"#f59e0b":"#16a34a",rows:[{label:"平均全程时长",value:"25.2 小时"},{label:"装车 → 中转",value:"6.0 小时（阈值 8）"},{label:"中转滞留",value:`18.0 小时（阈值 12 · ${d?"超时":"正常"}）`},{label:"中转 → 签收",value:"19.0 小时（阈值 24）"}],proof:s(r("transport"),"运输节点登记交易")},{id:"cross",name:"窜货预警数量",value:g,display:i>6?`${g} 起`:"—",unit:"销售区域 ≠ 授权区域",progress:g?Math.min(1,g/5):1,hint:"消费者扫码位置与产品授权销售区域不一致的预警数",color:g?"#ef4444":"#16a34a",rows:g?n.filter(M=>M.soldRegion&&M.soldRegion!==M.authorizedRegion).map(M=>({label:`${M.code}（${M.retailer}）`,value:`售出 ${M.soldRegion} · 授权 ${M.authorizedRegion}`})):[{label:"全部在授权区域内销售",value:"无窜货"}],proof:s(r("consumer_verify"),"消费者扫码 / 预警交易")},{id:"scan",name:"消费者扫码验证率",value:w,display:i>6?`${(w*100).toFixed(1)}%`:"—",unit:`扫码 ${A} / 售出 ${x} 件`,progress:w,hint:"已售出产品中被消费者扫码验证过的比例（不落个人信息）",color:"#db2777",rows:[{label:"门店吊牌二维码",value:`${Math.round(A*.68)} 次`},{label:"线上商城",value:`${Math.round(A*.32)} 次`},{label:"平均单件验证次数",value:"1.6 次"},{label:"个人信息",value:"仅存购买关联哈希"}],proof:s(r("consumer_verify"),"扫码验证交易")}]}function KA(t,e,n){const i=t.find(s=>s.txId===n);if(!i)return null;const r=e.find(s=>s.height===i.blockHeight);return{txId:i.txId,blockHeight:i.blockHeight,hash:i.hash,prevHash:i.previousHash,blockHash:(r==null?void 0:r.hash)??"—",msp:i.msp,stage:pn[i.stage].label}}function ZA(t){return t<=0?"尚未开始上链":`已完成 ${t} / ${oi.length} 幕 · 链上 ${oi.slice(0,t).reduce((e,n)=>e+n.recordCount,0)} 条记录`}const z_=({result:t,code:e,onQuery:n})=>{const[i,r]=pe.useState(e),[s,o]=pe.useState(null),a=()=>{i.trim()&&n(i.trim())},l=c=>c==="own"?null:c==="material"?b.jsx(di,{text:"上游原料",color:"#0891b2"}):b.jsx(di,{text:"批次级",color:"#f59e0b"});return b.jsxs("div",{children:[b.jsx(F_,{sub:"输入产品码或原材料码，查看全链路履历",children:"扫码查询"}),b.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[b.jsx("input",{value:i,onChange:c=>r(c.target.value),onKeyDown:c=>c.key==="Enter"&&a(),placeholder:"如 PROD-A-001 / RM-D-001",style:{flex:1,minWidth:0,border:"1px solid var(--kimi-color-border)",borderRadius:8,padding:"6px 9px",fontSize:12,outline:"none"}}),b.jsx("button",{onClick:a,style:{border:"none",background:"var(--kimi-color-accent)",color:"#fff",borderRadius:8,padding:"6px 14px",fontSize:12,cursor:"pointer"},children:"查询"})]}),b.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:10},children:pA.map(c=>b.jsx(Bf,{active:t.code===c.code,onClick:()=>n(c.code),title:c.desc,children:c.code},c.code))}),b.jsxs("div",{style:{...hi,marginBottom:10,borderColor:t.status==="error"?"#ef4444":t.status==="warning"?"#f59e0b":"var(--kimi-color-border)"},children:[b.jsx("div",{style:{fontSize:12.5,fontWeight:600,marginBottom:4},children:t.title}),b.jsx("div",{style:{fontSize:11.5,color:"var(--kimi-color-text-secondary)",lineHeight:1.6},children:t.summary})]}),t.reverse&&b.jsxs("div",{style:{...hi,marginBottom:10},children:[b.jsxs("div",{style:{fontSize:12,fontWeight:600,marginBottom:4},children:["反向追溯 · 关联成品 ",t.reverse.totalProducts," 件"]}),b.jsxs("div",{style:{display:"flex",gap:10,fontSize:11.5,marginBottom:6},children:[b.jsxs("span",{style:{color:"#16a34a"},children:["正常 ",t.reverse.normalCount," 件"]}),b.jsxs("span",{style:{color:"#ef4444"},children:["异常 ",t.reverse.abnormalCount," 件"]})]}),t.reverse.batches.map(c=>b.jsxs("div",{style:{fontSize:11.5,padding:"4px 0",borderTop:"1px dashed rgba(148,163,184,0.3)"},children:[b.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[b.jsx("span",{style:{fontWeight:600},children:c.batchNo}),b.jsxs("span",{children:[c.total," 件 · 异常 ",c.abnormal," 件"]})]}),c.codes.length>0&&b.jsxs("div",{style:{color:"var(--kimi-color-text-tertiary)",marginTop:2},children:["异常示例：",c.codes.join("、")," …"]})]},c.batchNo))]}),b.jsxs("div",{style:{fontSize:12,fontWeight:600,margin:"10px 0 6px"},children:["全链路履历（",t.steps.length," 条链上记录）"]}),t.steps.length===0&&b.jsx("div",{style:{fontSize:11.5,color:"var(--kimi-color-text-tertiary)"},children:"暂无记录：请先推进演示，或换一个溯源码。"}),b.jsx("div",{style:{borderLeft:"2px solid var(--kimi-color-border)",paddingLeft:10},children:t.steps.map((c,u)=>{const h=c.status==="error"?"#ef4444":c.status==="warning"?"#f59e0b":pn[c.stage].color,f=s===u;return b.jsxs("div",{style:{marginBottom:10,position:"relative"},children:[b.jsx("span",{style:{position:"absolute",left:-15,top:4,width:9,height:9,borderRadius:"50%",background:h,boxShadow:"0 0 0 3px rgba(255,255,255,0.9)"}}),b.jsxs("div",{onClick:()=>o(f?null:u),style:{cursor:"pointer"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},children:[b.jsx(di,{text:pn[c.stage].short,color:h}),l(c.scope),b.jsx("span",{style:{fontSize:12,fontWeight:600},children:c.title})]}),b.jsxs("div",{style:{fontSize:11,color:"var(--kimi-color-text-tertiary)",marginTop:3},children:[c.time," · ",Fr[c.msp].name," · ",c.operator]}),b.jsx("div",{style:{fontSize:11.5,color:"var(--kimi-color-text-secondary)",marginTop:3,lineHeight:1.55},children:c.note})]}),f&&b.jsxs("div",{style:{marginTop:6},children:[c.fields.map(p=>b.jsx(at,{label:p.label,value:p.value,mono:!0},p.label)),b.jsx(at,{label:"区块高度",value:`#${c.blockHeight}`}),b.jsx(at,{label:"交易哈希",value:Nn(c.hash,14),mono:!0})]})]},`${c.hash}-${u}`)})})]})},QA={qc_fail:{label:"质检异常",color:"#ef4444"},cross_region:{label:"窜货预警",color:"#f59e0b"},transport_delay:{label:"运输超时",color:"#7c3aed"}},B_=({alerts:t,onTrace:e})=>b.jsxs("div",{children:[b.jsx("div",{style:{fontSize:13,fontWeight:600,marginBottom:4},children:"异常事件面板"}),b.jsx("div",{style:{fontSize:11,color:"var(--kimi-color-text-tertiary)",marginBottom:10},children:"链上记录一旦写入不可删除；异常以追加记录方式沉淀，可反向定位影响范围"}),t.length===0&&b.jsx("div",{style:{...hi,fontSize:11.5,color:"var(--kimi-color-text-tertiary)"},children:"当前暂无异常事件。推进到第 4 幕（质检异常）后将出现预警。"}),t.map(n=>{const i=QA[n.type];return b.jsxs("div",{style:{...hi,marginBottom:8,borderLeft:`3px solid ${i.color}`},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},children:[b.jsx(di,{text:i.label,color:i.color}),b.jsx("span",{style:{fontSize:12,fontWeight:600},children:n.title})]}),b.jsx("div",{style:{fontSize:11.5,color:"var(--kimi-color-text-secondary)",marginTop:5,lineHeight:1.6},children:n.detail}),b.jsxs("div",{style:{fontSize:11,color:"var(--kimi-color-text-tertiary)",marginTop:5},children:["影响范围：",n.scope]}),b.jsxs("div",{style:{fontSize:11,color:"var(--kimi-color-text-tertiary)",marginTop:2},children:["时间：",n.time," · 区块 #",n.blockHeight]}),b.jsxs("button",{onClick:()=>e(n.codes[0]),style:{marginTop:7,border:`1px solid ${i.color}`,background:"#fff",color:i.color,borderRadius:6,padding:"4px 10px",fontSize:11.5,cursor:"pointer"},children:[n.action," →"]})]},n.id)})]}),H_=({metrics:t,onVerify:e})=>{const[n,i]=pe.useState(null);return b.jsxs("div",{children:[b.jsx("div",{style:{fontSize:13,fontWeight:600,marginBottom:4},children:"数据分析看板"}),b.jsx("div",{style:{fontSize:11,color:"var(--kimi-color-text-tertiary)",marginBottom:10},children:"每个指标均由链上记录聚合而来，可下钻明细并做链上验证"}),t.map(r=>b.jsxs("div",{style:{...hi,marginBottom:8},children:[b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[b.jsx("span",{style:{fontSize:12,fontWeight:600},children:r.name}),b.jsx("span",{style:{fontSize:16,fontWeight:700,color:r.color},children:r.display})]}),b.jsx("div",{style:{fontSize:11,color:"var(--kimi-color-text-tertiary)"},children:r.unit}),b.jsx(k_,{value:r.progress,color:r.color}),b.jsx("div",{style:{fontSize:11,color:"var(--kimi-color-text-tertiary)",marginTop:5},children:r.hint}),n===r.id&&b.jsx("div",{style:{marginTop:8,borderTop:"1px dashed rgba(148,163,184,0.35)",paddingTop:6},children:r.rows.map((s,o)=>b.jsx(at,{label:s.label,value:s.value},`${s.label}-${o}`))}),b.jsxs("div",{style:{display:"flex",gap:6,marginTop:8},children:[b.jsx("button",{onClick:()=>i(n===r.id?null:r.id),style:{border:"1px solid var(--kimi-color-border)",background:"#fff",borderRadius:6,padding:"4px 10px",fontSize:11.5,cursor:"pointer",color:"var(--kimi-color-text-secondary)"},children:n===r.id?"收起明细":"查看明细"}),b.jsx("button",{onClick:()=>e(r.proof.txId),style:{border:"1px solid var(--kimi-color-accent)",background:"rgba(37,99,235,0.08)",borderRadius:6,padding:"4px 10px",fontSize:11.5,cursor:"pointer",color:"var(--kimi-color-accent)"},children:"链上验证"})]}),b.jsxs("div",{style:{fontSize:10.5,color:"var(--kimi-color-text-quaternary)",marginTop:5},children:["依据：",r.proof.label]})]},r.id))]})},V_=({blocks:t,records:e,selectedBlock:n,onSelectBlock:i})=>{const r=[...t].reverse();return b.jsxs("div",{children:[b.jsx("div",{style:{fontSize:13,fontWeight:600,marginBottom:4},children:"链上账本"}),b.jsx("div",{style:{fontSize:11,color:"var(--kimi-color-text-tertiary)",marginBottom:10},children:"每一幕的业务动作都作为一笔交易，由智能合约写入以太坊账本"}),b.jsxs("div",{style:{...hi,marginBottom:10},children:[b.jsx(at,{label:"网络",value:In.name,mono:!0}),b.jsx(at,{label:"智能合约",value:In.contract,mono:!0}),b.jsx(at,{label:"共识",value:In.consensus}),b.jsx(at,{label:"Gas 代币",value:In.gasToken}),b.jsx(at,{label:"区块浏览器",value:In.explorer,mono:!0}),b.jsx(at,{label:"区块数",value:String(t.length)})]}),r.map(s=>{const o=e.find(l=>l.blockHeight===s.height),a=n===String(s.height);return b.jsxs("div",{onClick:()=>i(String(s.height)),style:{...hi,marginBottom:6,cursor:"pointer",borderColor:a?"var(--kimi-color-accent)":"var(--kimi-color-border)",background:a?"rgba(37,99,235,0.07)":"var(--kimi-color-surface-muted)"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},children:[b.jsxs("span",{style:{fontSize:12,fontWeight:700,fontFamily:"var(--kimi-font-mono)"},children:["#",s.height]}),s.genesis?b.jsx(di,{text:"创世块",color:"#64748b"}):b.jsx(di,{text:pn[s.stage].short,color:pn[s.stage].color}),b.jsx("span",{style:{fontSize:11.5,color:"var(--kimi-color-text-secondary)"},children:s.genesis?"通道创世配置":`${s.traceCode} · ${Fr[s.msp].name}`})]}),b.jsxs("div",{style:{fontSize:11,color:"var(--kimi-color-text-tertiary)",marginTop:4},children:[s.timestamp," · tx ",Nn(s.txId,12)]}),o&&b.jsx("div",{style:{fontSize:11,color:"var(--kimi-color-text-tertiary)",marginTop:2},children:o.action}),b.jsxs("div",{style:{fontSize:10.5,color:"var(--kimi-color-text-quaternary)",marginTop:4,fontFamily:"var(--kimi-font-mono)"},children:["prev ",Nn(s.prevHash,8)," → hash ",Nn(s.hash,8)]})]},s.height)})]})},JA=[{key:"query",label:"① 扫码查询"},{key:"alert",label:"② 异常事件"},{key:"dashboard",label:"③ 数据看板"},{key:"ledger",label:"链上账本"}],Po=({title:t,items:e})=>e.length?b.jsxs("div",{style:{marginTop:8},children:[b.jsx("div",{style:{fontSize:11.5,fontWeight:600,marginBottom:3},children:t}),e.map(n=>b.jsxs("div",{style:{fontSize:11,color:"var(--kimi-color-text-secondary)"},children:["· ",n]},n))]}):null,eC=({queryResult:t,queryCode:e,onQuery:n,alerts:i,analytics:r,blocks:s,records:o,selected:a,selectedNode:l,onSelect:c,onEnterScene:u})=>{const[h,f]=pe.useState("query"),[p,_]=pe.useState(null),[y,v]=pe.useState(!1);if(y)return b.jsx("button",{type:"button",onClick:()=>v(!1),title:"展开检视面板",style:{position:"absolute",right:14,top:14,zIndex:20,writingMode:"vertical-rl",border:"1px solid var(--kimi-color-border)",background:"rgba(255,255,255,0.95)",borderRadius:10,padding:"10px 6px",fontSize:12,fontWeight:600,color:"var(--kimi-color-text-secondary)",cursor:"pointer"},children:"检视面板 ▸"});const d=p?KA(o,s,p):null,m=g=>{n(g),f("query")};return b.jsxs("div",{style:{...Ac,right:14,top:14,width:372,bottom:14,display:"flex",flexDirection:"column",gap:8},children:[b.jsx("button",{type:"button",onClick:()=>v(!0),title:"收起面板",style:{position:"absolute",top:10,right:10,zIndex:21,border:"1px solid var(--kimi-color-border)",background:"#fff",borderRadius:8,width:26,height:26,fontSize:13,cursor:"pointer",color:"var(--kimi-color-text-tertiary)"},children:"◂"}),a&&b.jsxs("div",{style:{...hi,borderColor:"var(--kimi-color-accent)"},children:[a.kind==="node"&&l&&b.jsxs(b.Fragment,{children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[b.jsx(di,{text:`${l.account.slice(0,6)}…${l.account.slice(-4)}`,color:l.color}),b.jsx("span",{style:{fontSize:12.5,fontWeight:600},children:l.name})]}),b.jsxs("div",{style:{fontSize:11,color:"var(--kimi-color-text-tertiary)",margin:"4px 0 6px"},children:[l.subtitle," · ",Fr[l.msp].name]}),b.jsx("div",{style:{fontSize:11.5,color:"var(--kimi-color-text-secondary)",lineHeight:1.6},children:Fr[l.msp].duty}),b.jsx("div",{style:{marginTop:6},children:l.duties.map(g=>b.jsxs("div",{style:{fontSize:11,color:"var(--kimi-color-text-secondary)"},children:["· ",g]},g))}),b.jsx(Po,{title:"场地",items:[l.site]}),b.jsx(Po,{title:"设备",items:l.equipment}),b.jsx(Po,{title:"人员",items:l.personnel}),b.jsx(Po,{title:"车辆",items:l.vehicles}),b.jsx(Po,{title:"基本活动",items:l.activities}),b.jsxs("button",{type:"button",onClick:()=>u(l.id),style:{marginTop:10,width:"100%",border:"1px solid var(--kimi-color-accent)",background:"var(--kimi-color-accent)",color:"#fff",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontWeight:600,cursor:"pointer"},children:["进入全屏场景 · ",l.name]})]}),a.kind==="block"&&b.jsxs(b.Fragment,{children:[b.jsxs("div",{style:{fontSize:12.5,fontWeight:600},children:["区块 #",a.id]}),(()=>{const g=s.find(A=>String(A.height)===a.id),x=o.find(A=>String(A.blockHeight)===a.id);return g?b.jsxs("div",{style:{marginTop:6},children:[b.jsx(at,{label:"阶段",value:g.genesis?"创世配置":pn[g.stage].label}),b.jsx(at,{label:"溯源码",value:g.genesis?"genesis":g.traceCode,mono:!0}),b.jsx(at,{label:"提交方",value:Fr[g.msp].name}),b.jsx(at,{label:"时间",value:g.timestamp}),b.jsx(at,{label:"交易哈希",value:x?Nn(x.hash,14):"—",mono:!0}),b.jsx(at,{label:"区块哈希",value:Nn(g.hash,14),mono:!0}),b.jsx(at,{label:"前一区块",value:Nn(g.prevHash,14),mono:!0}),x&&b.jsx("button",{onClick:()=>_(x.txId),style:{marginTop:8,width:"100%",border:"1px solid var(--kimi-color-accent)",background:"rgba(37,99,235,0.08)",color:"var(--kimi-color-accent)",borderRadius:6,padding:"5px 0",fontSize:11.5,cursor:"pointer"},children:"链上验证"})]}):null})()]}),b.jsx("button",{onClick:()=>c(null),style:{marginTop:8,border:"1px solid var(--kimi-color-border)",background:"#fff",borderRadius:6,padding:"3px 10px",fontSize:11,cursor:"pointer",color:"var(--kimi-color-text-tertiary)"},children:"取消选中"})]}),b.jsx("div",{style:{display:"flex",gap:4,flexWrap:"wrap"},children:JA.map(g=>b.jsxs("button",{onClick:()=>f(g.key),style:{border:`1px solid ${h===g.key?"var(--kimi-color-accent)":"var(--kimi-color-border)"}`,background:h===g.key?"var(--kimi-color-accent)":"#fff",color:h===g.key?"#fff":"var(--kimi-color-text-secondary)",borderRadius:8,padding:"5px 9px",fontSize:11.5,cursor:"pointer"},children:[g.label,g.key==="alert"&&i.length>0&&b.jsx("span",{style:{marginLeft:4,background:"#ef4444",color:"#fff",borderRadius:999,padding:"0 5px",fontSize:10},children:i.length})]},g.key))}),b.jsxs(OA,{height:"100%",children:[h==="query"&&b.jsx(z_,{result:t,code:e,onQuery:m}),h==="alert"&&b.jsx(B_,{alerts:i,onTrace:m}),h==="dashboard"&&b.jsx(H_,{metrics:r,onVerify:_}),h==="ledger"&&b.jsx(V_,{blocks:s,records:o,selectedBlock:(a==null?void 0:a.kind)==="block"?a.id:null,onSelectBlock:g=>c({kind:"block",id:g})})]}),d&&b.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(15,23,42,0.35)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:()=>_(null),children:b.jsxs("div",{onClick:g=>g.stopPropagation(),style:{width:420,maxWidth:"90vw",background:"#fff",borderRadius:12,padding:18,boxShadow:"0 20px 60px rgba(15,23,42,0.3)"},children:[b.jsx("div",{style:{fontSize:14,fontWeight:600,marginBottom:4},children:"链上验证"}),b.jsx("div",{style:{fontSize:11.5,color:"var(--kimi-color-text-tertiary)",marginBottom:10},children:"校验该笔交易是否真实存在于联盟链账本中"}),b.jsx(at,{label:"网络 / 智能合约",value:`${In.name} / ${In.contract}`}),b.jsx(at,{label:"区块高度",value:`#${d.blockHeight}`}),b.jsx(at,{label:"阶段",value:d.stage}),b.jsx(at,{label:"提交方",value:Fr[d.msp].name}),b.jsx(at,{label:"交易 ID",value:d.txId,mono:!0}),b.jsx(at,{label:"交易哈希",value:d.hash,mono:!0}),b.jsx(at,{label:"前序哈希",value:d.prevHash,mono:!0}),b.jsx(at,{label:"区块哈希",value:d.blockHash,mono:!0}),b.jsx("div",{style:{marginTop:10,padding:"8px 10px",borderRadius:8,background:"rgba(16,185,129,0.10)",color:"#16a34a",fontSize:12},children:"✔ 哈希链校验通过：该记录自写入后未被篡改（MSP 背书 + 排序服务共识）"}),b.jsx("button",{onClick:()=>_(null),style:{marginTop:12,width:"100%",border:"none",background:"var(--kimi-color-accent)",color:"#fff",borderRadius:8,padding:"8px 0",fontSize:12.5,cursor:"pointer"},children:"关闭"})]})})]})},ud={flex:1,minWidth:0,...hi,background:"#fff"},k0=({title:t,subtitle:e})=>b.jsxs("div",{style:{textAlign:"center",marginBottom:8},children:[b.jsx("div",{style:{fontSize:14,fontWeight:600},children:t}),b.jsx("div",{style:{fontSize:11,color:"var(--kimi-color-text-tertiary)",marginTop:2},children:e})]}),O0=({onCollapse:t})=>b.jsx("button",{type:"button",onClick:t,title:"收起当前幕脚本条",style:{border:"1px solid var(--kimi-color-border)",background:"#fff",borderRadius:8,width:26,height:26,fontSize:13,cursor:"pointer",color:"var(--kimi-color-text-tertiary)",flex:"none"},children:"▾"}),tC=({act:t,onQuery:e,title:n,subtitle:i})=>{const[r,s]=pe.useState(!1);return r?b.jsxs("button",{type:"button",onClick:()=>s(!1),title:"展开当前幕脚本条",style:{position:"absolute",left:350,right:400,top:14,zIndex:20,border:"1px solid var(--kimi-color-border)",background:"rgba(255,255,255,0.95)",borderRadius:10,padding:"6px 16px",fontSize:12,fontWeight:600,color:"var(--kimi-color-text-secondary)",cursor:"pointer"},children:[n," · ",t?`第 ${t.no} 幕 ${t.title}`:"等待演示开始"," ▴"]}):t?b.jsxs("div",{style:{...Ac,left:350,right:400,top:14,maxHeight:"42vh",overflowY:"auto",padding:"10px 14px"},children:[b.jsx(k0,{title:n,subtitle:i}),b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,flexWrap:"wrap"},children:[b.jsxs("span",{style:{background:"var(--kimi-color-accent)",color:"#fff",borderRadius:6,padding:"2px 8px",fontSize:12,fontWeight:600},children:["第 ",t.no," 幕"]}),b.jsx("span",{style:{fontSize:13,fontWeight:600},children:t.title}),b.jsx(di,{text:pn[t.stage].label,color:pn[t.stage].color}),b.jsx(di,{text:t.role,color:Fr[t.role].color}),b.jsxs("span",{style:{fontSize:11.5,color:"var(--kimi-color-text-tertiary)"},children:["操作人：",t.operator]}),b.jsx("div",{style:{flex:1}}),b.jsx(O0,{onCollapse:()=>s(!0)})]}),b.jsx("div",{style:{fontSize:11.5,color:"var(--kimi-color-text-secondary)",lineHeight:1.6,marginBottom:8},children:t.narrative}),b.jsxs("div",{style:{display:"flex",gap:10,alignItems:"stretch"},children:[b.jsxs("div",{style:ud,children:[b.jsx("div",{style:{fontSize:11.5,fontWeight:600,marginBottom:4,color:"#0891b2"},children:"系统录入（前端表单字段）"}),t.form.slice(0,5).map(o=>b.jsx(at,{label:o.label,value:o.value},o.label))]}),b.jsxs("div",{style:ud,children:[b.jsx("div",{style:{fontSize:11.5,fontWeight:600,marginBottom:4,color:"#7c3aed"},children:"上链内容（合约方法 / 状态）"}),t.payload.slice(0,5).map(o=>b.jsx(at,{label:o.field,value:o.value,mono:!0},o.field)),b.jsxs("div",{style:{fontSize:10.5,color:"var(--kimi-color-text-quaternary)",marginTop:4},children:["本幕写入 ",t.recordCount," 条链上记录"]})]}),b.jsxs("div",{style:ud,children:[b.jsxs("div",{style:{fontSize:11.5,fontWeight:600,marginBottom:4,color:"#16a34a"},children:["查询效果（",t.queryDemo.code,"）"]}),b.jsx("div",{style:{fontSize:11.5,color:"var(--kimi-color-text-secondary)",lineHeight:1.6},children:t.queryDemo.effect}),b.jsx("button",{onClick:()=>e(t.queryDemo.code),style:{marginTop:6,border:"1px solid #16a34a",background:"rgba(16,185,129,0.08)",color:"#16a34a",borderRadius:6,padding:"4px 10px",fontSize:11.5,cursor:"pointer"},children:"立即查询 →"})]})]})]}):b.jsxs("div",{style:{...Ac,left:350,right:400,top:14,maxHeight:"42vh",overflowY:"auto",padding:"12px 16px"},children:[b.jsx(k0,{title:n,subtitle:i}),b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[b.jsx("div",{style:{fontSize:13,fontWeight:600},children:"等待演示开始"}),b.jsx(O0,{onCollapse:()=>s(!0)})]}),b.jsx("div",{style:{fontSize:11.5,color:"var(--kimi-color-text-tertiary)",marginTop:4},children:"点击左侧「自动演示」或「下一步」，按幕把波司登羽绒服全链路业务写入联盟链。"})]})},nC=({acts:t,currentAct:e,act:n,autoPlay:i,queryResult:r,queryCode:s,alerts:o,analytics:a,blocks:l,records:c,selected:u,selectedNode:h,onQuery:f,onGoToAct:p,onNext:_,onPrev:y,onToggleAutoPlay:v,onSelect:d})=>{const[m,g]=pe.useState("query");return b.jsxs(b.Fragment,{children:[b.jsxs("div",{style:{position:"absolute",top:8,left:8,right:8,background:"rgba(255,255,255,0.95)",border:"1px solid var(--kimi-color-border)",borderRadius:10,padding:"8px 10px",zIndex:10},children:[b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[b.jsxs("div",{children:[b.jsx("div",{style:{fontSize:12.5,fontWeight:600},children:n?`第 ${n.no} 幕 · ${n.title}`:"波司登羽绒服全链路追溯"}),b.jsx("div",{style:{fontSize:10.5,color:"var(--kimi-color-text-tertiary)",marginTop:2},children:n?`${pn[n.stage].label} · ${n.role}`:`联盟链演示 · ${t.length} 幕`})]}),b.jsxs("div",{style:{display:"flex",gap:6},children:[b.jsx("button",{onClick:y,style:{border:"1px solid var(--kimi-color-border)",background:"#fff",borderRadius:8,padding:"5px 10px",fontSize:12},children:"←"}),b.jsx("button",{onClick:v,style:{border:"none",background:"var(--kimi-color-accent)",color:"#fff",borderRadius:8,padding:"5px 12px",fontSize:12},children:i?"暂停":"播放"}),b.jsx("button",{onClick:_,style:{border:"1px solid var(--kimi-color-border)",background:"#fff",borderRadius:8,padding:"5px 10px",fontSize:12},children:"→"})]})]}),b.jsx("div",{style:{display:"flex",gap:4,marginTop:8},children:t.map(x=>b.jsx("button",{onClick:()=>p(x.id),style:{flex:1,height:6,borderRadius:999,border:"none",background:x.id<e?"#10b981":x.id===e?"var(--kimi-color-accent)":"var(--kimi-color-surface-strong)",padding:0,cursor:"pointer"}},x.id))})]}),u&&h&&b.jsxs("div",{style:{position:"absolute",top:96,left:8,right:8,zIndex:10,...hi},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[b.jsx(di,{text:`${h.account.slice(0,6)}…${h.account.slice(-4)}`,color:h.color}),b.jsx("span",{style:{fontSize:12,fontWeight:600},children:h.name})]}),b.jsx("div",{style:{fontSize:11,color:"var(--kimi-color-text-secondary)",marginTop:4},children:h.duties.join("；")}),b.jsx("button",{onClick:()=>d(null),style:{marginTop:6,border:"1px solid var(--kimi-color-border)",background:"#fff",borderRadius:6,padding:"3px 8px",fontSize:11},children:"取消选中"})]}),b.jsxs("div",{style:{position:"absolute",left:8,right:8,bottom:8,background:"rgba(255,255,255,0.96)",border:"1px solid var(--kimi-color-border)",borderRadius:12,zIndex:10,display:"flex",flexDirection:"column",maxHeight:"52vh"},className:"mobile-safe",children:[b.jsx("div",{style:{display:"flex",gap:4,padding:8,flexWrap:"wrap"},children:[["query","① 查询"],["alert","② 异常"],["dashboard","③ 看板"],["ledger","账本"]].map(([x,A])=>b.jsxs("button",{onClick:()=>g(m===x?null:x),style:{border:`1px solid ${m===x?"var(--kimi-color-accent)":"var(--kimi-color-border)"}`,background:m===x?"var(--kimi-color-accent)":"#fff",color:m===x?"#fff":"var(--kimi-color-text-secondary)",borderRadius:8,padding:"5px 10px",fontSize:11.5,cursor:"pointer"},children:[A,x==="alert"&&o.length>0?` (${o.length})`:""]},String(x)))}),m&&b.jsxs("div",{style:{overflowY:"auto",padding:"0 10px 10px"},children:[m==="query"&&b.jsx(z_,{result:r,code:s,onQuery:f}),m==="alert"&&b.jsx(B_,{alerts:o,onTrace:f}),m==="dashboard"&&b.jsx(H_,{metrics:a,onVerify:()=>{}}),m==="ledger"&&b.jsx(V_,{blocks:l,records:c,selectedBlock:(u==null?void 0:u.kind)==="block"?u.id:null,onSelectBlock:x=>d({kind:"block",id:x})})]})]})]})};function iC(t){const{materials:e,products:n}=HA(),i={height:0,hash:Ji(`genesis|${In.name}|${In.contract}`),prevHash:Cc,txId:"genesis-config",timestamp:"2025-01-05 10:00",stage:"farm",traceCode:"genesis",msp:"BrandMSP",status:"normal",position:Hf(0),genesis:!0},r=[i],s=[];let o=Cc,a=i.hash;for(let l=0;l<=t&&l<oi.length;l++)GA(l,e).forEach(c=>{const u=WA(c,r.length,o);s.push(u);const h=jA(u,a);h.position=Hf(r.length),r.push(h),o=u.hash,a=h.hash}),VA(n,e,l);return{blocks:r,records:s,materials:e,products:n}}function rC(){const[t,e]=pe.useState(-1),[n,i]=pe.useState(!0),[r,s]=pe.useState(1),[o,a]=pe.useState("PROD-A-001"),[l,c]=pe.useState(null),[u,h]=pe.useState("overview"),[f,p]=pe.useState(!0),[_,y]=pe.useState(null),[v,d]=pe.useState(0),m=pe.useMemo(()=>iC(t),[t]),g=pe.useMemo(()=>YA(m.records),[m.records]),x=pe.useMemo(()=>qA(m.records,m.materials,m.products,t+1),[m,t]),A=pe.useMemo(()=>XA(o,m.records,m.products,m.materials),[o,m]),w=t>=0?oi[t]:null,M=pe.useMemo(()=>{if(!w)return["brand"];const O=[w.nodeId];return w.link&&O.push(w.link[1]),t>=5&&O.push("brand"),[...new Set(O)]},[w,t]),R=pe.useMemo(()=>[...new Set(g.map(O=>O.nodeId))],[g]);pe.useEffect(()=>{if(!n)return;if(t>=oi.length-1){i(!1);return}const O=window.setTimeout(()=>{e(F=>Math.min(oi.length-1,F+1)),d(F=>F+1)},gA/r);return()=>window.clearTimeout(O)},[n,r,t]);const E=pe.useCallback(O=>{e(Math.max(-1,Math.min(oi.length-1,O))),d(F=>F+1)},[]),S=pe.useCallback(()=>{e(O=>Math.min(oi.length-1,O+1)),d(O=>O+1)},[]),P=pe.useCallback(()=>{e(O=>Math.max(-1,O-1)),d(O=>O+1)},[]),G=pe.useCallback(()=>{e(-1),c(null),i(!1),d(O=>O+1)},[]),I=pe.useCallback(()=>{i(O=>(!O&&t>=oi.length-1&&e(-1),!O))},[t]),z=pe.useCallback(O=>{a(O.trim())},[]),k=pe.useCallback(O=>{c(O),(O==null?void 0:O.kind)==="node"&&h("node"),(O==null?void 0:O.kind)==="block"&&h("chain")},[]);return{acts:oi,nodes:io,currentAct:t,act:w,autoPlay:n,speed:r,blocks:m.blocks,records:m.records,materials:m.materials,products:m.products,alerts:g,analytics:x,queryResult:A,queryCode:o,activeNodeIds:M,alertNodeIds:R,selected:l,view:u,showYard:f,focusNodeId:_,focusTick:v,actions:{goToAct:E,nextAct:S,prevAct:P,reset:G,toggleAutoPlay:I,setSpeed:s,runQuery:z,selectObject:k,setView:h,setShowYard:p,setFocusNodeId:y}}}const sC=()=>{const{acts:t,nodes:e,currentAct:n,act:i,autoPlay:r,speed:s,blocks:o,records:a,alerts:l,analytics:c,queryResult:u,queryCode:h,activeNodeIds:f,alertNodeIds:p,selected:_,focusTick:y,showYard:v,focusNodeId:d,actions:m}=rC(),[g,x]=pe.useState(window.innerWidth<960);q0.useEffect(()=>{const M=()=>x(window.innerWidth<960);return window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)},[]);const A=pe.useCallback(M=>{m.selectObject(M)},[m]),w=pe.useMemo(()=>(_==null?void 0:_.kind)==="node"?Kt[_.id]??null:null,[_]);return b.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden",background:"linear-gradient(180deg, #6fa9dc 0%, #bcd8ee 48%, #eaf2f9 100%)",color:"var(--kimi-color-text-primary)",fontFamily:"var(--kimi-font-sans, system-ui)"},children:[b.jsx("div",{"aria-hidden":!0,style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"url(/scene-bg.png) center / cover no-repeat",filter:"blur(10px) saturate(1.05)",transform:"scale(1.12)"}}),b.jsx(kA,{nodes:e,blocks:o,records:a,activeNodeIds:f,alertNodeIds:p,actNodeId:(i==null?void 0:i.nodeId)??null,actId:n,link:(i==null?void 0:i.link)??null,cargoLabel:(i==null?void 0:i.cargoLabel)??null,queryResult:u,selected:_,focusTick:y,showYard:v,onPick:A,onEnterScene:M=>{const R=Kt[M];m.setFocusNodeId(R?M:"brand")},focusNodeId:d,onExitNode:()=>m.setFocusNodeId(null),freeAngle:d!==null||_!=null}),!d&&b.jsxs(b.Fragment,{children:[!g&&b.jsxs(b.Fragment,{children:[b.jsx(BA,{acts:t,currentAct:n,autoPlay:r,speed:s,recordCount:a.length,onGoToAct:m.goToAct,onNext:m.nextAct,onPrev:m.prevAct,onReset:m.reset,onToggleAutoPlay:m.toggleAutoPlay,onSpeed:m.setSpeed,showYard:v,onToggleYard:m.setShowYard}),b.jsx(eC,{queryResult:u,queryCode:h,onQuery:m.runQuery,alerts:l,analytics:c,blocks:o,records:a,selected:_,selectedNode:w,onSelect:m.selectObject,onEnterScene:m.setFocusNodeId}),b.jsx(tC,{act:i,onQuery:m.runQuery,title:"XXX羽绒服 ·  区块链技术 · 供应链平台演示",subtitle:`${In.name} · 合约 ${In.contract.slice(0,10)}… · ${ZA(n+1)}`})]}),g&&b.jsx(nC,{acts:t,currentAct:n,act:i,autoPlay:r,queryResult:u,queryCode:h,alerts:l,analytics:c,blocks:o,records:a,selected:_,selectedNode:w,onQuery:m.runQuery,onGoToAct:m.goToAct,onNext:m.nextAct,onPrev:m.prevAct,onToggleAutoPlay:m.toggleAutoPlay,onSelect:m.selectObject}),!g&&b.jsx("div",{style:{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",fontSize:11.5,color:"var(--kimi-color-text-tertiary)",background:"rgba(255,255,255,0.86)",border:"1px solid var(--kimi-color-border)",borderRadius:8,padding:"4px 12px",zIndex:5},children:"拖拽旋转 · 滚轮缩放 · 点击站点查看详情 · 双击聚焦该环节全景"})]})]})};dd.createRoot(document.getElementById("root")).render(b.jsx(q0.StrictMode,{children:b.jsx(sC,{})}));
