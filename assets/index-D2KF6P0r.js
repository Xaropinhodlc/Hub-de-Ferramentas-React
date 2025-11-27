(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))r(m);new MutationObserver(m=>{for(const j of m)if(j.type==="childList")for(const C of j.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&r(C)}).observe(document,{childList:!0,subtree:!0});function d(m){const j={};return m.integrity&&(j.integrity=m.integrity),m.referrerPolicy&&(j.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?j.credentials="include":m.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function r(m){if(m.ep)return;m.ep=!0;const j=d(m);fetch(m.href,j)}})();function Vm(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var gr={exports:{}},Pn={};var um;function lg(){if(um)return Pn;um=1;var n=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function d(r,m,j){var C=null;if(j!==void 0&&(C=""+j),m.key!==void 0&&(C=""+m.key),"key"in m){j={};for(var B in m)B!=="key"&&(j[B]=m[B])}else j=m;return m=j.ref,{$$typeof:n,type:r,key:C,ref:m!==void 0?m:null,props:j}}return Pn.Fragment=s,Pn.jsx=d,Pn.jsxs=d,Pn}var im;function ag(){return im||(im=1,gr.exports=lg()),gr.exports}var o=ag(),vr={exports:{}},nt={};var cm;function ng(){if(cm)return nt;cm=1;var n=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),C=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),z=Symbol.iterator;function H(y){return y===null||typeof y!="object"?null:(y=z&&y[z]||y["@@iterator"],typeof y=="function"?y:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,L={};function J(y,R,Z){this.props=y,this.context=R,this.refs=L,this.updater=Z||Y}J.prototype.isReactComponent={},J.prototype.setState=function(y,R){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,R,"setState")},J.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function w(){}w.prototype=J.prototype;function X(y,R,Z){this.props=y,this.context=R,this.refs=L,this.updater=Z||Y}var M=X.prototype=new w;M.constructor=X,G(M,J.prototype),M.isPureReactComponent=!0;var K=Array.isArray;function W(){}var q={H:null,A:null,T:null,S:null},lt=Object.prototype.hasOwnProperty;function yt(y,R,Z){var k=Z.ref;return{$$typeof:n,type:y,key:R,ref:k!==void 0?k:null,props:Z}}function qt(y,R){return yt(y.type,R,y.props)}function Rt(y){return typeof y=="object"&&y!==null&&y.$$typeof===n}function Ht(y){var R={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(Z){return R[Z]})}var me=/\/+/g;function ne(y,R){return typeof y=="object"&&y!==null&&y.key!=null?Ht(""+y.key):R.toString(36)}function ue(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(W,W):(y.status="pending",y.then(function(R){y.status==="pending"&&(y.status="fulfilled",y.value=R)},function(R){y.status==="pending"&&(y.status="rejected",y.reason=R)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function D(y,R,Z,k,at){var ut=typeof y;(ut==="undefined"||ut==="boolean")&&(y=null);var mt=!1;if(y===null)mt=!0;else switch(ut){case"bigint":case"string":case"number":mt=!0;break;case"object":switch(y.$$typeof){case n:case s:mt=!0;break;case $:return mt=y._init,D(mt(y._payload),R,Z,k,at)}}if(mt)return at=at(y),mt=k===""?"."+ne(y,0):k,K(at)?(Z="",mt!=null&&(Z=mt.replace(me,"$&/")+"/"),D(at,R,Z,"",function(ke){return ke})):at!=null&&(Rt(at)&&(at=qt(at,Z+(at.key==null||y&&y.key===at.key?"":(""+at.key).replace(me,"$&/")+"/")+mt)),R.push(at)),1;mt=0;var wt=k===""?".":k+":";if(K(y))for(var jt=0;jt<y.length;jt++)k=y[jt],ut=wt+ne(k,jt),mt+=D(k,R,Z,ut,at);else if(jt=H(y),typeof jt=="function")for(y=jt.call(y),jt=0;!(k=y.next()).done;)k=k.value,ut=wt+ne(k,jt++),mt+=D(k,R,Z,ut,at);else if(ut==="object"){if(typeof y.then=="function")return D(ue(y),R,Z,k,at);throw R=String(y),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}return mt}function Q(y,R,Z){if(y==null)return y;var k=[],at=0;return D(y,k,"","",function(ut){return R.call(Z,ut,at++)}),k}function tt(y){if(y._status===-1){var R=y._result;R=R(),R.then(function(Z){(y._status===0||y._status===-1)&&(y._status=1,y._result=Z)},function(Z){(y._status===0||y._status===-1)&&(y._status=2,y._result=Z)}),y._status===-1&&(y._status=0,y._result=R)}if(y._status===1)return y._result.default;throw y._result}var rt=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var R=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(R))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)},gt={map:Q,forEach:function(y,R,Z){Q(y,function(){R.apply(this,arguments)},Z)},count:function(y){var R=0;return Q(y,function(){R++}),R},toArray:function(y){return Q(y,function(R){return R})||[]},only:function(y){if(!Rt(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return nt.Activity=O,nt.Children=gt,nt.Component=J,nt.Fragment=d,nt.Profiler=m,nt.PureComponent=X,nt.StrictMode=r,nt.Suspense=T,nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,nt.__COMPILER_RUNTIME={__proto__:null,c:function(y){return q.H.useMemoCache(y)}},nt.cache=function(y){return function(){return y.apply(null,arguments)}},nt.cacheSignal=function(){return null},nt.cloneElement=function(y,R,Z){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var k=G({},y.props),at=y.key;if(R!=null)for(ut in R.key!==void 0&&(at=""+R.key),R)!lt.call(R,ut)||ut==="key"||ut==="__self"||ut==="__source"||ut==="ref"&&R.ref===void 0||(k[ut]=R[ut]);var ut=arguments.length-2;if(ut===1)k.children=Z;else if(1<ut){for(var mt=Array(ut),wt=0;wt<ut;wt++)mt[wt]=arguments[wt+2];k.children=mt}return yt(y.type,at,k)},nt.createContext=function(y){return y={$$typeof:C,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:j,_context:y},y},nt.createElement=function(y,R,Z){var k,at={},ut=null;if(R!=null)for(k in R.key!==void 0&&(ut=""+R.key),R)lt.call(R,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&(at[k]=R[k]);var mt=arguments.length-2;if(mt===1)at.children=Z;else if(1<mt){for(var wt=Array(mt),jt=0;jt<mt;jt++)wt[jt]=arguments[jt+2];at.children=wt}if(y&&y.defaultProps)for(k in mt=y.defaultProps,mt)at[k]===void 0&&(at[k]=mt[k]);return yt(y,ut,at)},nt.createRef=function(){return{current:null}},nt.forwardRef=function(y){return{$$typeof:B,render:y}},nt.isValidElement=Rt,nt.lazy=function(y){return{$$typeof:$,_payload:{_status:-1,_result:y},_init:tt}},nt.memo=function(y,R){return{$$typeof:v,type:y,compare:R===void 0?null:R}},nt.startTransition=function(y){var R=q.T,Z={};q.T=Z;try{var k=y(),at=q.S;at!==null&&at(Z,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(W,rt)}catch(ut){rt(ut)}finally{R!==null&&Z.types!==null&&(R.types=Z.types),q.T=R}},nt.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},nt.use=function(y){return q.H.use(y)},nt.useActionState=function(y,R,Z){return q.H.useActionState(y,R,Z)},nt.useCallback=function(y,R){return q.H.useCallback(y,R)},nt.useContext=function(y){return q.H.useContext(y)},nt.useDebugValue=function(){},nt.useDeferredValue=function(y,R){return q.H.useDeferredValue(y,R)},nt.useEffect=function(y,R){return q.H.useEffect(y,R)},nt.useEffectEvent=function(y){return q.H.useEffectEvent(y)},nt.useId=function(){return q.H.useId()},nt.useImperativeHandle=function(y,R,Z){return q.H.useImperativeHandle(y,R,Z)},nt.useInsertionEffect=function(y,R){return q.H.useInsertionEffect(y,R)},nt.useLayoutEffect=function(y,R){return q.H.useLayoutEffect(y,R)},nt.useMemo=function(y,R){return q.H.useMemo(y,R)},nt.useOptimistic=function(y,R){return q.H.useOptimistic(y,R)},nt.useReducer=function(y,R,Z){return q.H.useReducer(y,R,Z)},nt.useRef=function(y){return q.H.useRef(y)},nt.useState=function(y){return q.H.useState(y)},nt.useSyncExternalStore=function(y,R,Z){return q.H.useSyncExternalStore(y,R,Z)},nt.useTransition=function(){return q.H.useTransition()},nt.version="19.2.0",nt}var om;function Xr(){return om||(om=1,vr.exports=ng()),vr.exports}var V=Xr();const le=Vm(V);var xr={exports:{}},tu={},br={exports:{}},Sr={};var rm;function ug(){return rm||(rm=1,(function(n){function s(D,Q){var tt=D.length;D.push(Q);t:for(;0<tt;){var rt=tt-1>>>1,gt=D[rt];if(0<m(gt,Q))D[rt]=Q,D[tt]=gt,tt=rt;else break t}}function d(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var Q=D[0],tt=D.pop();if(tt!==Q){D[0]=tt;t:for(var rt=0,gt=D.length,y=gt>>>1;rt<y;){var R=2*(rt+1)-1,Z=D[R],k=R+1,at=D[k];if(0>m(Z,tt))k<gt&&0>m(at,Z)?(D[rt]=at,D[k]=tt,rt=k):(D[rt]=Z,D[R]=tt,rt=R);else if(k<gt&&0>m(at,tt))D[rt]=at,D[k]=tt,rt=k;else break t}}return Q}function m(D,Q){var tt=D.sortIndex-Q.sortIndex;return tt!==0?tt:D.id-Q.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var j=performance;n.unstable_now=function(){return j.now()}}else{var C=Date,B=C.now();n.unstable_now=function(){return C.now()-B}}var T=[],v=[],$=1,O=null,z=3,H=!1,Y=!1,G=!1,L=!1,J=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function M(D){for(var Q=d(v);Q!==null;){if(Q.callback===null)r(v);else if(Q.startTime<=D)r(v),Q.sortIndex=Q.expirationTime,s(T,Q);else break;Q=d(v)}}function K(D){if(G=!1,M(D),!Y)if(d(T)!==null)Y=!0,W||(W=!0,Ht());else{var Q=d(v);Q!==null&&ue(K,Q.startTime-D)}}var W=!1,q=-1,lt=5,yt=-1;function qt(){return L?!0:!(n.unstable_now()-yt<lt)}function Rt(){if(L=!1,W){var D=n.unstable_now();yt=D;var Q=!0;try{t:{Y=!1,G&&(G=!1,w(q),q=-1),H=!0;var tt=z;try{e:{for(M(D),O=d(T);O!==null&&!(O.expirationTime>D&&qt());){var rt=O.callback;if(typeof rt=="function"){O.callback=null,z=O.priorityLevel;var gt=rt(O.expirationTime<=D);if(D=n.unstable_now(),typeof gt=="function"){O.callback=gt,M(D),Q=!0;break e}O===d(T)&&r(T),M(D)}else r(T);O=d(T)}if(O!==null)Q=!0;else{var y=d(v);y!==null&&ue(K,y.startTime-D),Q=!1}}break t}finally{O=null,z=tt,H=!1}Q=void 0}}finally{Q?Ht():W=!1}}}var Ht;if(typeof X=="function")Ht=function(){X(Rt)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,ne=me.port2;me.port1.onmessage=Rt,Ht=function(){ne.postMessage(null)}}else Ht=function(){J(Rt,0)};function ue(D,Q){q=J(function(){D(n.unstable_now())},Q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):lt=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return z},n.unstable_next=function(D){switch(z){case 1:case 2:case 3:var Q=3;break;default:Q=z}var tt=z;z=Q;try{return D()}finally{z=tt}},n.unstable_requestPaint=function(){L=!0},n.unstable_runWithPriority=function(D,Q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var tt=z;z=D;try{return Q()}finally{z=tt}},n.unstable_scheduleCallback=function(D,Q,tt){var rt=n.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?rt+tt:rt):tt=rt,D){case 1:var gt=-1;break;case 2:gt=250;break;case 5:gt=1073741823;break;case 4:gt=1e4;break;default:gt=5e3}return gt=tt+gt,D={id:$++,callback:Q,priorityLevel:D,startTime:tt,expirationTime:gt,sortIndex:-1},tt>rt?(D.sortIndex=tt,s(v,D),d(T)===null&&D===d(v)&&(G?(w(q),q=-1):G=!0,ue(K,tt-rt))):(D.sortIndex=gt,s(T,D),Y||H||(Y=!0,W||(W=!0,Ht()))),D},n.unstable_shouldYield=qt,n.unstable_wrapCallback=function(D){var Q=z;return function(){var tt=z;z=Q;try{return D.apply(this,arguments)}finally{z=tt}}}})(Sr)),Sr}var sm;function ig(){return sm||(sm=1,br.exports=ug()),br.exports}var jr={exports:{}},ae={};var fm;function cg(){if(fm)return ae;fm=1;var n=Xr();function s(T){var v="https://react.dev/errors/"+T;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var $=2;$<arguments.length;$++)v+="&args[]="+encodeURIComponent(arguments[$])}return"Minified React error #"+T+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var r={d:{f:d,r:function(){throw Error(s(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function j(T,v,$){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:O==null?null:""+O,children:T,containerInfo:v,implementation:$}}var C=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function B(T,v){if(T==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ae.createPortal=function(T,v){var $=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(s(299));return j(T,v,null,$)},ae.flushSync=function(T){var v=C.T,$=r.p;try{if(C.T=null,r.p=2,T)return T()}finally{C.T=v,r.p=$,r.d.f()}},ae.preconnect=function(T,v){typeof T=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,r.d.C(T,v))},ae.prefetchDNS=function(T){typeof T=="string"&&r.d.D(T)},ae.preinit=function(T,v){if(typeof T=="string"&&v&&typeof v.as=="string"){var $=v.as,O=B($,v.crossOrigin),z=typeof v.integrity=="string"?v.integrity:void 0,H=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;$==="style"?r.d.S(T,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:O,integrity:z,fetchPriority:H}):$==="script"&&r.d.X(T,{crossOrigin:O,integrity:z,fetchPriority:H,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},ae.preinitModule=function(T,v){if(typeof T=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var $=B(v.as,v.crossOrigin);r.d.M(T,{crossOrigin:$,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&r.d.M(T)},ae.preload=function(T,v){if(typeof T=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var $=v.as,O=B($,v.crossOrigin);r.d.L(T,$,{crossOrigin:O,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},ae.preloadModule=function(T,v){if(typeof T=="string")if(v){var $=B(v.as,v.crossOrigin);r.d.m(T,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:$,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else r.d.m(T)},ae.requestFormReset=function(T){r.d.r(T)},ae.unstable_batchedUpdates=function(T,v){return T(v)},ae.useFormState=function(T,v,$){return C.H.useFormState(T,v,$)},ae.useFormStatus=function(){return C.H.useHostTransitionStatus()},ae.version="19.2.0",ae}var dm;function og(){if(dm)return jr.exports;dm=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(s){console.error(s)}}return n(),jr.exports=cg(),jr.exports}var hm;function rg(){if(hm)return tu;hm=1;var n=ig(),s=Xr(),d=og();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function j(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function C(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function B(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function T(t){if(j(t)!==t)throw Error(r(188))}function v(t){var e=t.alternate;if(!e){if(e=j(t),e===null)throw Error(r(188));return e!==t?null:t}for(var l=t,a=e;;){var u=l.return;if(u===null)break;var i=u.alternate;if(i===null){if(a=u.return,a!==null){l=a;continue}break}if(u.child===i.child){for(i=u.child;i;){if(i===l)return T(u),t;if(i===a)return T(u),e;i=i.sibling}throw Error(r(188))}if(l.return!==a.return)l=u,a=i;else{for(var c=!1,f=u.child;f;){if(f===l){c=!0,l=u,a=i;break}if(f===a){c=!0,a=u,l=i;break}f=f.sibling}if(!c){for(f=i.child;f;){if(f===l){c=!0,l=i,a=u;break}if(f===a){c=!0,a=i,l=u;break}f=f.sibling}if(!c)throw Error(r(189))}}if(l.alternate!==a)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?t:e}function $(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=$(t),e!==null)return e;t=t.sibling}return null}var O=Object.assign,z=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),X=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),yt=Symbol.for("react.activity"),qt=Symbol.for("react.memo_cache_sentinel"),Rt=Symbol.iterator;function Ht(t){return t===null||typeof t!="object"?null:(t=Rt&&t[Rt]||t["@@iterator"],typeof t=="function"?t:null)}var me=Symbol.for("react.client.reference");function ne(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===me?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case G:return"Fragment";case J:return"Profiler";case L:return"StrictMode";case K:return"Suspense";case W:return"SuspenseList";case yt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Y:return"Portal";case X:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case M:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case q:return e=t.displayName||null,e!==null?e:ne(t.type)||"Memo";case lt:e=t._payload,t=t._init;try{return ne(t(e))}catch{}}return null}var ue=Array.isArray,D=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},rt=[],gt=-1;function y(t){return{current:t}}function R(t){0>gt||(t.current=rt[gt],rt[gt]=null,gt--)}function Z(t,e){gt++,rt[gt]=t.current,t.current=e}var k=y(null),at=y(null),ut=y(null),mt=y(null);function wt(t,e){switch(Z(ut,e),Z(at,t),Z(k,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Oh(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Oh(e),t=Dh(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}R(k),Z(k,t)}function jt(){R(k),R(at),R(ut)}function ke(t){t.memoizedState!==null&&Z(mt,t);var e=k.current,l=Dh(e,t.type);e!==l&&(Z(at,t),Z(k,l))}function Fe(t){at.current===t&&(R(k),R(at)),mt.current===t&&(R(mt),kn._currentValue=tt)}var Ce,as;function Xl(t){if(Ce===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Ce=e&&e[1]||"",as=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ce+t+as}var Pi=!1;function tc(t,e){if(!t||Pi)return"";Pi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(A){var E=A}Reflect.construct(t,[],U)}else{try{U.call()}catch(A){E=A}t.call(U.prototype)}}else{try{throw Error()}catch(A){E=A}(U=t())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(A){if(A&&E&&typeof A.stack=="string")return[A.stack,E.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),c=i[0],f=i[1];if(c&&f){var h=c.split(`
`),b=f.split(`
`);for(u=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;u<b.length&&!b[u].includes("DetermineComponentFrameRoot");)u++;if(a===h.length||u===b.length)for(a=h.length-1,u=b.length-1;1<=a&&0<=u&&h[a]!==b[u];)u--;for(;1<=a&&0<=u;a--,u--)if(h[a]!==b[u]){if(a!==1||u!==1)do if(a--,u--,0>u||h[a]!==b[u]){var _=`
`+h[a].replace(" at new "," at ");return t.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",t.displayName)),_}while(1<=a&&0<=u);break}}}finally{Pi=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Xl(l):""}function N0(t,e){switch(t.tag){case 26:case 27:case 5:return Xl(t.type);case 16:return Xl("Lazy");case 13:return t.child!==e&&e!==null?Xl("Suspense Fallback"):Xl("Suspense");case 19:return Xl("SuspenseList");case 0:case 15:return tc(t.type,!1);case 11:return tc(t.type.render,!1);case 1:return tc(t.type,!0);case 31:return Xl("Activity");default:return""}}function ns(t){try{var e="",l=null;do e+=N0(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ec=Object.prototype.hasOwnProperty,lc=n.unstable_scheduleCallback,ac=n.unstable_cancelCallback,H0=n.unstable_shouldYield,U0=n.unstable_requestPaint,pe=n.unstable_now,B0=n.unstable_getCurrentPriorityLevel,us=n.unstable_ImmediatePriority,is=n.unstable_UserBlockingPriority,iu=n.unstable_NormalPriority,w0=n.unstable_LowPriority,cs=n.unstable_IdlePriority,$0=n.log,G0=n.unstable_setDisableYieldValue,cn=null,ye=null;function yl(t){if(typeof $0=="function"&&G0(t),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(cn,t)}catch{}}var ge=Math.clz32?Math.clz32:L0,q0=Math.log,Y0=Math.LN2;function L0(t){return t>>>=0,t===0?32:31-(q0(t)/Y0|0)|0}var cu=256,ou=262144,ru=4194304;function Ql(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function su(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var u=0,i=t.suspendedLanes,c=t.pingedLanes;t=t.warmLanes;var f=a&134217727;return f!==0?(a=f&~i,a!==0?u=Ql(a):(c&=f,c!==0?u=Ql(c):l||(l=f&~t,l!==0&&(u=Ql(l))))):(f=a&~i,f!==0?u=Ql(f):c!==0?u=Ql(c):l||(l=a&~t,l!==0&&(u=Ql(l)))),u===0?0:e!==0&&e!==u&&(e&i)===0&&(i=u&-u,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:u}function on(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function X0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function os(){var t=ru;return ru<<=1,(ru&62914560)===0&&(ru=4194304),t}function nc(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function rn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Q0(t,e,l,a,u,i){var c=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var f=t.entanglements,h=t.expirationTimes,b=t.hiddenUpdates;for(l=c&~l;0<l;){var _=31-ge(l),U=1<<_;f[_]=0,h[_]=-1;var E=b[_];if(E!==null)for(b[_]=null,_=0;_<E.length;_++){var A=E[_];A!==null&&(A.lane&=-536870913)}l&=~U}a!==0&&rs(t,a,0),i!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=i&~(c&~e))}function rs(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-ge(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function ss(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-ge(l),u=1<<a;u&e|t[a]&e&&(t[a]|=e),l&=~u}}function fs(t,e){var l=e&-e;return l=(l&42)!==0?1:uc(l),(l&(t.suspendedLanes|e))!==0?0:l}function uc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ic(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ds(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:Ih(t.type))}function hs(t,e){var l=Q.p;try{return Q.p=t,e()}finally{Q.p=l}}var gl=Math.random().toString(36).slice(2),Wt="__reactFiber$"+gl,ce="__reactProps$"+gl,ha="__reactContainer$"+gl,cc="__reactEvents$"+gl,Z0="__reactListeners$"+gl,V0="__reactHandles$"+gl,ms="__reactResources$"+gl,sn="__reactMarker$"+gl;function oc(t){delete t[Wt],delete t[ce],delete t[cc],delete t[Z0],delete t[V0]}function ma(t){var e=t[Wt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[ha]||l[Wt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Bh(t);t!==null;){if(l=t[Wt])return l;t=Bh(t)}return e}t=l,l=t.parentNode}return null}function pa(t){if(t=t[Wt]||t[ha]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function fn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function ya(t){var e=t[ms];return e||(e=t[ms]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Kt(t){t[sn]=!0}var ps=new Set,ys={};function Zl(t,e){ga(t,e),ga(t+"Capture",e)}function ga(t,e){for(ys[t]=e,t=0;t<e.length;t++)ps.add(e[t])}var K0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gs={},vs={};function J0(t){return ec.call(vs,t)?!0:ec.call(gs,t)?!1:K0.test(t)?vs[t]=!0:(gs[t]=!0,!1)}function fu(t,e,l){if(J0(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function du(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function We(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function Oe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xs(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function k0(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return u.call(this)},set:function(c){l=""+c,i.call(this,c)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function rc(t){if(!t._valueTracker){var e=xs(t)?"checked":"value";t._valueTracker=k0(t,e,""+t[e])}}function bs(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=xs(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function hu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var F0=/[\n"\\]/g;function De(t){return t.replace(F0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function sc(t,e,l,a,u,i,c,f){t.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.type=c:t.removeAttribute("type"),e!=null?c==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Oe(e)):t.value!==""+Oe(e)&&(t.value=""+Oe(e)):c!=="submit"&&c!=="reset"||t.removeAttribute("value"),e!=null?fc(t,c,Oe(e)):l!=null?fc(t,c,Oe(l)):a!=null&&t.removeAttribute("value"),u==null&&i!=null&&(t.defaultChecked=!!i),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+Oe(f):t.removeAttribute("name")}function Ss(t,e,l,a,u,i,c,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){rc(t);return}l=l!=null?""+Oe(l):"",e=e!=null?""+Oe(e):l,f||e===t.value||(t.value=e),t.defaultValue=e}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=f?t.checked:!!a,t.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.name=c),rc(t)}function fc(t,e,l){e==="number"&&hu(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function va(t,e,l,a){if(t=t.options,e){e={};for(var u=0;u<l.length;u++)e["$"+l[u]]=!0;for(l=0;l<t.length;l++)u=e.hasOwnProperty("$"+t[l].value),t[l].selected!==u&&(t[l].selected=u),u&&a&&(t[l].defaultSelected=!0)}else{for(l=""+Oe(l),e=null,u=0;u<t.length;u++){if(t[u].value===l){t[u].selected=!0,a&&(t[u].defaultSelected=!0);return}e!==null||t[u].disabled||(e=t[u])}e!==null&&(e.selected=!0)}}function js(t,e,l){if(e!=null&&(e=""+Oe(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+Oe(l):""}function Es(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(r(92));if(ue(a)){if(1<a.length)throw Error(r(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=Oe(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),rc(t)}function xa(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var W0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ts(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||W0.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function zs(t,e,l){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var u in e)a=e[u],e.hasOwnProperty(u)&&l[u]!==a&&Ts(t,u,a)}else for(var i in e)e.hasOwnProperty(i)&&Ts(t,i,e[i])}function dc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var I0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),P0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mu(t){return P0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ie(){}var hc=null;function mc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ba=null,Sa=null;function As(t){var e=pa(t);if(e&&(t=e.stateNode)){var l=t[ce]||null;t:switch(t=e.stateNode,e.type){case"input":if(sc(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+De(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var u=a[ce]||null;if(!u)throw Error(r(90));sc(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&bs(a)}break t;case"textarea":js(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&va(t,!!l.multiple,e,!1)}}}var pc=!1;function Cs(t,e,l){if(pc)return t(e,l);pc=!0;try{var a=t(e);return a}finally{if(pc=!1,(ba!==null||Sa!==null)&&(ei(),ba&&(e=ba,t=Sa,Sa=ba=null,As(e),t)))for(e=0;e<t.length;e++)As(t[e])}}function dn(t,e){var l=t.stateNode;if(l===null)return null;var a=l[ce]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(r(231,e,typeof l));return l}var Pe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yc=!1;if(Pe)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){yc=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{yc=!1}var vl=null,gc=null,pu=null;function Os(){if(pu)return pu;var t,e=gc,l=e.length,a,u="value"in vl?vl.value:vl.textContent,i=u.length;for(t=0;t<l&&e[t]===u[t];t++);var c=l-t;for(a=1;a<=c&&e[l-a]===u[i-a];a++);return pu=u.slice(t,1<a?1-a:void 0)}function yu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function gu(){return!0}function Ds(){return!1}function oe(t){function e(l,a,u,i,c){this._reactName=l,this._targetInst=u,this.type=a,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(l=t[f],this[f]=l?l(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?gu:Ds,this.isPropagationStopped=Ds,this}return O(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=gu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=gu)},persist:function(){},isPersistent:gu}),e}var Vl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vu=oe(Vl),mn=O({},Vl,{view:0,detail:0}),tp=oe(mn),vc,xc,pn,xu=O({},mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pn&&(pn&&t.type==="mousemove"?(vc=t.screenX-pn.screenX,xc=t.screenY-pn.screenY):xc=vc=0,pn=t),vc)},movementY:function(t){return"movementY"in t?t.movementY:xc}}),_s=oe(xu),ep=O({},xu,{dataTransfer:0}),lp=oe(ep),ap=O({},mn,{relatedTarget:0}),bc=oe(ap),np=O({},Vl,{animationName:0,elapsedTime:0,pseudoElement:0}),up=oe(np),ip=O({},Vl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cp=oe(ip),op=O({},Vl,{data:0}),Ms=oe(op),rp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dp(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fp[t])?!!e[t]:!1}function Sc(){return dp}var hp=O({},mn,{key:function(t){if(t.key){var e=rp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sc,charCode:function(t){return t.type==="keypress"?yu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mp=oe(hp),pp=O({},xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rs=oe(pp),yp=O({},mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sc}),gp=oe(yp),vp=O({},Vl,{propertyName:0,elapsedTime:0,pseudoElement:0}),xp=oe(vp),bp=O({},xu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sp=oe(bp),jp=O({},Vl,{newState:0,oldState:0}),Ep=oe(jp),Tp=[9,13,27,32],jc=Pe&&"CompositionEvent"in window,yn=null;Pe&&"documentMode"in document&&(yn=document.documentMode);var zp=Pe&&"TextEvent"in window&&!yn,Ns=Pe&&(!jc||yn&&8<yn&&11>=yn),Hs=" ",Us=!1;function Bs(t,e){switch(t){case"keyup":return Tp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ws(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ja=!1;function Ap(t,e){switch(t){case"compositionend":return ws(e);case"keypress":return e.which!==32?null:(Us=!0,Hs);case"textInput":return t=e.data,t===Hs&&Us?null:t;default:return null}}function Cp(t,e){if(ja)return t==="compositionend"||!jc&&Bs(t,e)?(t=Os(),pu=gc=vl=null,ja=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ns&&e.locale!=="ko"?null:e.data;default:return null}}var Op={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $s(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Op[t.type]:e==="textarea"}function Gs(t,e,l,a){ba?Sa?Sa.push(a):Sa=[a]:ba=a,e=oi(e,"onChange"),0<e.length&&(l=new vu("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var gn=null,vn=null;function Dp(t){jh(t,0)}function bu(t){var e=fn(t);if(bs(e))return t}function qs(t,e){if(t==="change")return e}var Ys=!1;if(Pe){var Ec;if(Pe){var Tc="oninput"in document;if(!Tc){var Ls=document.createElement("div");Ls.setAttribute("oninput","return;"),Tc=typeof Ls.oninput=="function"}Ec=Tc}else Ec=!1;Ys=Ec&&(!document.documentMode||9<document.documentMode)}function Xs(){gn&&(gn.detachEvent("onpropertychange",Qs),vn=gn=null)}function Qs(t){if(t.propertyName==="value"&&bu(vn)){var e=[];Gs(e,vn,t,mc(t)),Cs(Dp,e)}}function _p(t,e,l){t==="focusin"?(Xs(),gn=e,vn=l,gn.attachEvent("onpropertychange",Qs)):t==="focusout"&&Xs()}function Mp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bu(vn)}function Rp(t,e){if(t==="click")return bu(e)}function Np(t,e){if(t==="input"||t==="change")return bu(e)}function Hp(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ve=typeof Object.is=="function"?Object.is:Hp;function xn(t,e){if(ve(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var u=l[a];if(!ec.call(e,u)||!ve(t[u],e[u]))return!1}return!0}function Zs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vs(t,e){var l=Zs(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Zs(l)}}function Ks(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ks(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Js(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=hu(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=hu(t.document)}return e}function zc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Up=Pe&&"documentMode"in document&&11>=document.documentMode,Ea=null,Ac=null,bn=null,Cc=!1;function ks(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Cc||Ea==null||Ea!==hu(a)||(a=Ea,"selectionStart"in a&&zc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),bn&&xn(bn,a)||(bn=a,a=oi(Ac,"onSelect"),0<a.length&&(e=new vu("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Ea)))}function Kl(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Ta={animationend:Kl("Animation","AnimationEnd"),animationiteration:Kl("Animation","AnimationIteration"),animationstart:Kl("Animation","AnimationStart"),transitionrun:Kl("Transition","TransitionRun"),transitionstart:Kl("Transition","TransitionStart"),transitioncancel:Kl("Transition","TransitionCancel"),transitionend:Kl("Transition","TransitionEnd")},Oc={},Fs={};Pe&&(Fs=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function Jl(t){if(Oc[t])return Oc[t];if(!Ta[t])return t;var e=Ta[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in Fs)return Oc[t]=e[l];return t}var Ws=Jl("animationend"),Is=Jl("animationiteration"),Ps=Jl("animationstart"),Bp=Jl("transitionrun"),wp=Jl("transitionstart"),$p=Jl("transitioncancel"),tf=Jl("transitionend"),ef=new Map,Dc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Dc.push("scrollEnd");function Ge(t,e){ef.set(t,e),Zl(e,[t])}var Su=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_e=[],za=0,_c=0;function ju(){for(var t=za,e=_c=za=0;e<t;){var l=_e[e];_e[e++]=null;var a=_e[e];_e[e++]=null;var u=_e[e];_e[e++]=null;var i=_e[e];if(_e[e++]=null,a!==null&&u!==null){var c=a.pending;c===null?u.next=u:(u.next=c.next,c.next=u),a.pending=u}i!==0&&lf(l,u,i)}}function Eu(t,e,l,a){_e[za++]=t,_e[za++]=e,_e[za++]=l,_e[za++]=a,_c|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Mc(t,e,l,a){return Eu(t,e,l,a),Tu(t)}function kl(t,e){return Eu(t,null,null,e),Tu(t)}function lf(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var u=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(u=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,u&&e!==null&&(u=31-ge(l),t=i.hiddenUpdates,a=t[u],a===null?t[u]=[e]:a.push(e),e.lane=l|536870912),i):null}function Tu(t){if(50<Ln)throw Ln=0,Yo=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Aa={};function Gp(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(t,e,l,a){return new Gp(t,e,l,a)}function Rc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tl(t,e){var l=t.alternate;return l===null?(l=xe(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function af(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function zu(t,e,l,a,u,i){var c=0;if(a=t,typeof t=="function")Rc(t)&&(c=1);else if(typeof t=="string")c=Qy(t,l,k.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case yt:return t=xe(31,l,e,u),t.elementType=yt,t.lanes=i,t;case G:return Fl(l.children,u,i,e);case L:c=8,u|=24;break;case J:return t=xe(12,l,e,u|2),t.elementType=J,t.lanes=i,t;case K:return t=xe(13,l,e,u),t.elementType=K,t.lanes=i,t;case W:return t=xe(19,l,e,u),t.elementType=W,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case X:c=10;break t;case w:c=9;break t;case M:c=11;break t;case q:c=14;break t;case lt:c=16,a=null;break t}c=29,l=Error(r(130,t===null?"null":typeof t,"")),a=null}return e=xe(c,l,e,u),e.elementType=t,e.type=a,e.lanes=i,e}function Fl(t,e,l,a){return t=xe(7,t,a,e),t.lanes=l,t}function Nc(t,e,l){return t=xe(6,t,null,e),t.lanes=l,t}function nf(t){var e=xe(18,null,null,0);return e.stateNode=t,e}function Hc(t,e,l){return e=xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var uf=new WeakMap;function Me(t,e){if(typeof t=="object"&&t!==null){var l=uf.get(t);return l!==void 0?l:(e={value:t,source:e,stack:ns(e)},uf.set(t,e),e)}return{value:t,source:e,stack:ns(e)}}var Ca=[],Oa=0,Au=null,Sn=0,Re=[],Ne=0,xl=null,Xe=1,Qe="";function el(t,e){Ca[Oa++]=Sn,Ca[Oa++]=Au,Au=t,Sn=e}function cf(t,e,l){Re[Ne++]=Xe,Re[Ne++]=Qe,Re[Ne++]=xl,xl=t;var a=Xe;t=Qe;var u=32-ge(a)-1;a&=~(1<<u),l+=1;var i=32-ge(e)+u;if(30<i){var c=u-u%5;i=(a&(1<<c)-1).toString(32),a>>=c,u-=c,Xe=1<<32-ge(e)+u|l<<u|a,Qe=i+t}else Xe=1<<i|l<<u|a,Qe=t}function Uc(t){t.return!==null&&(el(t,1),cf(t,1,0))}function Bc(t){for(;t===Au;)Au=Ca[--Oa],Ca[Oa]=null,Sn=Ca[--Oa],Ca[Oa]=null;for(;t===xl;)xl=Re[--Ne],Re[Ne]=null,Qe=Re[--Ne],Re[Ne]=null,Xe=Re[--Ne],Re[Ne]=null}function of(t,e){Re[Ne++]=Xe,Re[Ne++]=Qe,Re[Ne++]=xl,Xe=e.id,Qe=e.overflow,xl=t}var It=null,Dt=null,pt=!1,bl=null,He=!1,wc=Error(r(519));function Sl(t){var e=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jn(Me(e,t)),wc}function rf(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[Wt]=t,e[ce]=a,l){case"dialog":ft("cancel",e),ft("close",e);break;case"iframe":case"object":case"embed":ft("load",e);break;case"video":case"audio":for(l=0;l<Qn.length;l++)ft(Qn[l],e);break;case"source":ft("error",e);break;case"img":case"image":case"link":ft("error",e),ft("load",e);break;case"details":ft("toggle",e);break;case"input":ft("invalid",e),Ss(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ft("invalid",e);break;case"textarea":ft("invalid",e),Es(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||Ah(e.textContent,l)?(a.popover!=null&&(ft("beforetoggle",e),ft("toggle",e)),a.onScroll!=null&&ft("scroll",e),a.onScrollEnd!=null&&ft("scrollend",e),a.onClick!=null&&(e.onclick=Ie),e=!0):e=!1,e||Sl(t,!0)}function sf(t){for(It=t.return;It;)switch(It.tag){case 5:case 31:case 13:He=!1;return;case 27:case 3:He=!0;return;default:It=It.return}}function Da(t){if(t!==It)return!1;if(!pt)return sf(t),pt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||lr(t.type,t.memoizedProps)),l=!l),l&&Dt&&Sl(t),sf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Dt=Uh(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Dt=Uh(t)}else e===27?(e=Dt,Ul(t.type)?(t=cr,cr=null,Dt=t):Dt=e):Dt=It?Be(t.stateNode.nextSibling):null;return!0}function Wl(){Dt=It=null,pt=!1}function $c(){var t=bl;return t!==null&&(de===null?de=t:de.push.apply(de,t),bl=null),t}function jn(t){bl===null?bl=[t]:bl.push(t)}var Gc=y(null),Il=null,ll=null;function jl(t,e,l){Z(Gc,e._currentValue),e._currentValue=l}function al(t){t._currentValue=Gc.current,R(Gc)}function qc(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Yc(t,e,l,a){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var i=u.dependencies;if(i!==null){var c=u.child;i=i.firstContext;t:for(;i!==null;){var f=i;i=u;for(var h=0;h<e.length;h++)if(f.context===e[h]){i.lanes|=l,f=i.alternate,f!==null&&(f.lanes|=l),qc(i.return,l,t),a||(c=null);break t}i=f.next}}else if(u.tag===18){if(c=u.return,c===null)throw Error(r(341));c.lanes|=l,i=c.alternate,i!==null&&(i.lanes|=l),qc(c,l,t),c=null}else c=u.child;if(c!==null)c.return=u;else for(c=u;c!==null;){if(c===t){c=null;break}if(u=c.sibling,u!==null){u.return=c.return,c=u;break}c=c.return}u=c}}function _a(t,e,l,a){t=null;for(var u=e,i=!1;u!==null;){if(!i){if((u.flags&524288)!==0)i=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var c=u.alternate;if(c===null)throw Error(r(387));if(c=c.memoizedProps,c!==null){var f=u.type;ve(u.pendingProps.value,c.value)||(t!==null?t.push(f):t=[f])}}else if(u===mt.current){if(c=u.alternate,c===null)throw Error(r(387));c.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(kn):t=[kn])}u=u.return}t!==null&&Yc(e,t,l,a),e.flags|=262144}function Cu(t){for(t=t.firstContext;t!==null;){if(!ve(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Pl(t){Il=t,ll=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Pt(t){return ff(Il,t)}function Ou(t,e){return Il===null&&Pl(t),ff(t,e)}function ff(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},ll===null){if(t===null)throw Error(r(308));ll=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ll=ll.next=e;return l}var qp=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Yp=n.unstable_scheduleCallback,Lp=n.unstable_NormalPriority,Yt={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lc(){return{controller:new qp,data:new Map,refCount:0}}function En(t){t.refCount--,t.refCount===0&&Yp(Lp,function(){t.controller.abort()})}var Tn=null,Xc=0,Ma=0,Ra=null;function Xp(t,e){if(Tn===null){var l=Tn=[];Xc=0,Ma=Ko(),Ra={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Xc++,e.then(df,df),e}function df(){if(--Xc===0&&Tn!==null){Ra!==null&&(Ra.status="fulfilled");var t=Tn;Tn=null,Ma=0,Ra=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Qp(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(u){l.push(u)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var u=0;u<l.length;u++)(0,l[u])(e)},function(u){for(a.status="rejected",a.reason=u,u=0;u<l.length;u++)(0,l[u])(void 0)}),a}var hf=D.S;D.S=function(t,e){Fd=pe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Xp(t,e),hf!==null&&hf(t,e)};var ta=y(null);function Qc(){var t=ta.current;return t!==null?t:Ot.pooledCache}function Du(t,e){e===null?Z(ta,ta.current):Z(ta,e.pool)}function mf(){var t=Qc();return t===null?null:{parent:Yt._currentValue,pool:t}}var Na=Error(r(460)),Zc=Error(r(474)),_u=Error(r(542)),Mu={then:function(){}};function pf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function yf(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Ie,Ie),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,vf(t),t;default:if(typeof e.status=="string")e.then(Ie,Ie);else{if(t=Ot,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=a}},function(a){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,vf(t),t}throw la=e,Na}}function ea(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(la=l,Na):l}}var la=null;function gf(){if(la===null)throw Error(r(459));var t=la;return la=null,t}function vf(t){if(t===Na||t===_u)throw Error(r(483))}var Ha=null,zn=0;function Ru(t){var e=zn;return zn+=1,Ha===null&&(Ha=[]),yf(Ha,t,e)}function An(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Nu(t,e){throw e.$$typeof===z?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function xf(t){function e(g,p){if(t){var x=g.deletions;x===null?(g.deletions=[p],g.flags|=16):x.push(p)}}function l(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function a(g){for(var p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function u(g,p){return g=tl(g,p),g.index=0,g.sibling=null,g}function i(g,p,x){return g.index=x,t?(x=g.alternate,x!==null?(x=x.index,x<p?(g.flags|=67108866,p):x):(g.flags|=67108866,p)):(g.flags|=1048576,p)}function c(g){return t&&g.alternate===null&&(g.flags|=67108866),g}function f(g,p,x,N){return p===null||p.tag!==6?(p=Nc(x,g.mode,N),p.return=g,p):(p=u(p,x),p.return=g,p)}function h(g,p,x,N){var P=x.type;return P===G?_(g,p,x.props.children,N,x.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===lt&&ea(P)===p.type)?(p=u(p,x.props),An(p,x),p.return=g,p):(p=zu(x.type,x.key,x.props,null,g.mode,N),An(p,x),p.return=g,p)}function b(g,p,x,N){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=Hc(x,g.mode,N),p.return=g,p):(p=u(p,x.children||[]),p.return=g,p)}function _(g,p,x,N,P){return p===null||p.tag!==7?(p=Fl(x,g.mode,N,P),p.return=g,p):(p=u(p,x),p.return=g,p)}function U(g,p,x){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=Nc(""+p,g.mode,x),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case H:return x=zu(p.type,p.key,p.props,null,g.mode,x),An(x,p),x.return=g,x;case Y:return p=Hc(p,g.mode,x),p.return=g,p;case lt:return p=ea(p),U(g,p,x)}if(ue(p)||Ht(p))return p=Fl(p,g.mode,x,null),p.return=g,p;if(typeof p.then=="function")return U(g,Ru(p),x);if(p.$$typeof===X)return U(g,Ou(g,p),x);Nu(g,p)}return null}function E(g,p,x,N){var P=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return P!==null?null:f(g,p,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case H:return x.key===P?h(g,p,x,N):null;case Y:return x.key===P?b(g,p,x,N):null;case lt:return x=ea(x),E(g,p,x,N)}if(ue(x)||Ht(x))return P!==null?null:_(g,p,x,N,null);if(typeof x.then=="function")return E(g,p,Ru(x),N);if(x.$$typeof===X)return E(g,p,Ou(g,x),N);Nu(g,x)}return null}function A(g,p,x,N,P){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return g=g.get(x)||null,f(p,g,""+N,P);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case H:return g=g.get(N.key===null?x:N.key)||null,h(p,g,N,P);case Y:return g=g.get(N.key===null?x:N.key)||null,b(p,g,N,P);case lt:return N=ea(N),A(g,p,x,N,P)}if(ue(N)||Ht(N))return g=g.get(x)||null,_(p,g,N,P,null);if(typeof N.then=="function")return A(g,p,x,Ru(N),P);if(N.$$typeof===X)return A(g,p,x,Ou(p,N),P);Nu(p,N)}return null}function F(g,p,x,N){for(var P=null,vt=null,I=p,ct=p=0,ht=null;I!==null&&ct<x.length;ct++){I.index>ct?(ht=I,I=null):ht=I.sibling;var xt=E(g,I,x[ct],N);if(xt===null){I===null&&(I=ht);break}t&&I&&xt.alternate===null&&e(g,I),p=i(xt,p,ct),vt===null?P=xt:vt.sibling=xt,vt=xt,I=ht}if(ct===x.length)return l(g,I),pt&&el(g,ct),P;if(I===null){for(;ct<x.length;ct++)I=U(g,x[ct],N),I!==null&&(p=i(I,p,ct),vt===null?P=I:vt.sibling=I,vt=I);return pt&&el(g,ct),P}for(I=a(I);ct<x.length;ct++)ht=A(I,g,ct,x[ct],N),ht!==null&&(t&&ht.alternate!==null&&I.delete(ht.key===null?ct:ht.key),p=i(ht,p,ct),vt===null?P=ht:vt.sibling=ht,vt=ht);return t&&I.forEach(function(ql){return e(g,ql)}),pt&&el(g,ct),P}function et(g,p,x,N){if(x==null)throw Error(r(151));for(var P=null,vt=null,I=p,ct=p=0,ht=null,xt=x.next();I!==null&&!xt.done;ct++,xt=x.next()){I.index>ct?(ht=I,I=null):ht=I.sibling;var ql=E(g,I,xt.value,N);if(ql===null){I===null&&(I=ht);break}t&&I&&ql.alternate===null&&e(g,I),p=i(ql,p,ct),vt===null?P=ql:vt.sibling=ql,vt=ql,I=ht}if(xt.done)return l(g,I),pt&&el(g,ct),P;if(I===null){for(;!xt.done;ct++,xt=x.next())xt=U(g,xt.value,N),xt!==null&&(p=i(xt,p,ct),vt===null?P=xt:vt.sibling=xt,vt=xt);return pt&&el(g,ct),P}for(I=a(I);!xt.done;ct++,xt=x.next())xt=A(I,g,ct,xt.value,N),xt!==null&&(t&&xt.alternate!==null&&I.delete(xt.key===null?ct:xt.key),p=i(xt,p,ct),vt===null?P=xt:vt.sibling=xt,vt=xt);return t&&I.forEach(function(eg){return e(g,eg)}),pt&&el(g,ct),P}function Ct(g,p,x,N){if(typeof x=="object"&&x!==null&&x.type===G&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case H:t:{for(var P=x.key;p!==null;){if(p.key===P){if(P=x.type,P===G){if(p.tag===7){l(g,p.sibling),N=u(p,x.props.children),N.return=g,g=N;break t}}else if(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===lt&&ea(P)===p.type){l(g,p.sibling),N=u(p,x.props),An(N,x),N.return=g,g=N;break t}l(g,p);break}else e(g,p);p=p.sibling}x.type===G?(N=Fl(x.props.children,g.mode,N,x.key),N.return=g,g=N):(N=zu(x.type,x.key,x.props,null,g.mode,N),An(N,x),N.return=g,g=N)}return c(g);case Y:t:{for(P=x.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){l(g,p.sibling),N=u(p,x.children||[]),N.return=g,g=N;break t}else{l(g,p);break}else e(g,p);p=p.sibling}N=Hc(x,g.mode,N),N.return=g,g=N}return c(g);case lt:return x=ea(x),Ct(g,p,x,N)}if(ue(x))return F(g,p,x,N);if(Ht(x)){if(P=Ht(x),typeof P!="function")throw Error(r(150));return x=P.call(x),et(g,p,x,N)}if(typeof x.then=="function")return Ct(g,p,Ru(x),N);if(x.$$typeof===X)return Ct(g,p,Ou(g,x),N);Nu(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,p!==null&&p.tag===6?(l(g,p.sibling),N=u(p,x),N.return=g,g=N):(l(g,p),N=Nc(x,g.mode,N),N.return=g,g=N),c(g)):l(g,p)}return function(g,p,x,N){try{zn=0;var P=Ct(g,p,x,N);return Ha=null,P}catch(I){if(I===Na||I===_u)throw I;var vt=xe(29,I,null,g.mode);return vt.lanes=N,vt.return=g,vt}finally{}}}var aa=xf(!0),bf=xf(!1),El=!1;function Vc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Tl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function zl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(bt&2)!==0){var u=a.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),a.pending=e,e=Tu(t),lf(t,null,l),e}return Eu(t,a,e,l),Tu(t)}function Cn(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,ss(t,l)}}function Jc(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var u=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?u=i=c:i=i.next=c,l=l.next}while(l!==null);i===null?u=i=e:i=i.next=e}else u=i=e;l={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var kc=!1;function On(){if(kc){var t=Ra;if(t!==null)throw t}}function Dn(t,e,l,a){kc=!1;var u=t.updateQueue;El=!1;var i=u.firstBaseUpdate,c=u.lastBaseUpdate,f=u.shared.pending;if(f!==null){u.shared.pending=null;var h=f,b=h.next;h.next=null,c===null?i=b:c.next=b,c=h;var _=t.alternate;_!==null&&(_=_.updateQueue,f=_.lastBaseUpdate,f!==c&&(f===null?_.firstBaseUpdate=b:f.next=b,_.lastBaseUpdate=h))}if(i!==null){var U=u.baseState;c=0,_=b=h=null,f=i;do{var E=f.lane&-536870913,A=E!==f.lane;if(A?(dt&E)===E:(a&E)===E){E!==0&&E===Ma&&(kc=!0),_!==null&&(_=_.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});t:{var F=t,et=f;E=e;var Ct=l;switch(et.tag){case 1:if(F=et.payload,typeof F=="function"){U=F.call(Ct,U,E);break t}U=F;break t;case 3:F.flags=F.flags&-65537|128;case 0:if(F=et.payload,E=typeof F=="function"?F.call(Ct,U,E):F,E==null)break t;U=O({},U,E);break t;case 2:El=!0}}E=f.callback,E!==null&&(t.flags|=64,A&&(t.flags|=8192),A=u.callbacks,A===null?u.callbacks=[E]:A.push(E))}else A={lane:E,tag:f.tag,payload:f.payload,callback:f.callback,next:null},_===null?(b=_=A,h=U):_=_.next=A,c|=E;if(f=f.next,f===null){if(f=u.shared.pending,f===null)break;A=f,f=A.next,A.next=null,u.lastBaseUpdate=A,u.shared.pending=null}}while(!0);_===null&&(h=U),u.baseState=h,u.firstBaseUpdate=b,u.lastBaseUpdate=_,i===null&&(u.shared.lanes=0),_l|=c,t.lanes=c,t.memoizedState=U}}function Sf(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function jf(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Sf(l[t],e)}var Ua=y(null),Hu=y(0);function Ef(t,e){t=dl,Z(Hu,t),Z(Ua,e),dl=t|e.baseLanes}function Fc(){Z(Hu,dl),Z(Ua,Ua.current)}function Wc(){dl=Hu.current,R(Ua),R(Hu)}var be=y(null),Ue=null;function Al(t){var e=t.alternate;Z($t,$t.current&1),Z(be,t),Ue===null&&(e===null||Ua.current!==null||e.memoizedState!==null)&&(Ue=t)}function Ic(t){Z($t,$t.current),Z(be,t),Ue===null&&(Ue=t)}function Tf(t){t.tag===22?(Z($t,$t.current),Z(be,t),Ue===null&&(Ue=t)):Cl()}function Cl(){Z($t,$t.current),Z(be,be.current)}function Se(t){R(be),Ue===t&&(Ue=null),R($t)}var $t=y(0);function Uu(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||ur(l)||ir(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nl=0,it=null,zt=null,Lt=null,Bu=!1,Ba=!1,na=!1,wu=0,_n=0,wa=null,Zp=0;function Ut(){throw Error(r(321))}function Pc(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!ve(t[l],e[l]))return!1;return!0}function to(t,e,l,a,u,i){return nl=i,it=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,D.H=t===null||t.memoizedState===null?cd:yo,na=!1,i=l(a,u),na=!1,Ba&&(i=Af(e,l,a,u)),zf(t),i}function zf(t){D.H=Nn;var e=zt!==null&&zt.next!==null;if(nl=0,Lt=zt=it=null,Bu=!1,_n=0,wa=null,e)throw Error(r(300));t===null||Xt||(t=t.dependencies,t!==null&&Cu(t)&&(Xt=!0))}function Af(t,e,l,a){it=t;var u=0;do{if(Ba&&(wa=null),_n=0,Ba=!1,25<=u)throw Error(r(301));if(u+=1,Lt=zt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}D.H=od,i=e(l,a)}while(Ba);return i}function Vp(){var t=D.H,e=t.useState()[0];return e=typeof e.then=="function"?Mn(e):e,t=t.useState()[0],(zt!==null?zt.memoizedState:null)!==t&&(it.flags|=1024),e}function eo(){var t=wu!==0;return wu=0,t}function lo(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function ao(t){if(Bu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Bu=!1}nl=0,Lt=zt=it=null,Ba=!1,_n=wu=0,wa=null}function ie(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?it.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Gt(){if(zt===null){var t=it.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=Lt===null?it.memoizedState:Lt.next;if(e!==null)Lt=e,zt=t;else{if(t===null)throw it.alternate===null?Error(r(467)):Error(r(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Lt===null?it.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function $u(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mn(t){var e=_n;return _n+=1,wa===null&&(wa=[]),t=yf(wa,t,e),e=it,(Lt===null?e.memoizedState:Lt.next)===null&&(e=e.alternate,D.H=e===null||e.memoizedState===null?cd:yo),t}function Gu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Mn(t);if(t.$$typeof===X)return Pt(t)}throw Error(r(438,String(t)))}function no(t){var e=null,l=it.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=it.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=$u(),it.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=qt;return e.index++,l}function ul(t,e){return typeof e=="function"?e(t):e}function qu(t){var e=Gt();return uo(e,zt,t)}function uo(t,e,l){var a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=l;var u=t.baseQueue,i=a.pending;if(i!==null){if(u!==null){var c=u.next;u.next=i.next,i.next=c}e.baseQueue=u=i,a.pending=null}if(i=t.baseState,u===null)t.memoizedState=i;else{e=u.next;var f=c=null,h=null,b=e,_=!1;do{var U=b.lane&-536870913;if(U!==b.lane?(dt&U)===U:(nl&U)===U){var E=b.revertLane;if(E===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),U===Ma&&(_=!0);else if((nl&E)===E){b=b.next,E===Ma&&(_=!0);continue}else U={lane:0,revertLane:b.revertLane,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},h===null?(f=h=U,c=i):h=h.next=U,it.lanes|=E,_l|=E;U=b.action,na&&l(i,U),i=b.hasEagerState?b.eagerState:l(i,U)}else E={lane:U,revertLane:b.revertLane,gesture:b.gesture,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},h===null?(f=h=E,c=i):h=h.next=E,it.lanes|=U,_l|=U;b=b.next}while(b!==null&&b!==e);if(h===null?c=i:h.next=f,!ve(i,t.memoizedState)&&(Xt=!0,_&&(l=Ra,l!==null)))throw l;t.memoizedState=i,t.baseState=c,t.baseQueue=h,a.lastRenderedState=i}return u===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function io(t){var e=Gt(),l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=t;var a=l.dispatch,u=l.pending,i=e.memoizedState;if(u!==null){l.pending=null;var c=u=u.next;do i=t(i,c.action),c=c.next;while(c!==u);ve(i,e.memoizedState)||(Xt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function Cf(t,e,l){var a=it,u=Gt(),i=pt;if(i){if(l===void 0)throw Error(r(407));l=l()}else l=e();var c=!ve((zt||u).memoizedState,l);if(c&&(u.memoizedState=l,Xt=!0),u=u.queue,ro(_f.bind(null,a,u,t),[t]),u.getSnapshot!==e||c||Lt!==null&&Lt.memoizedState.tag&1){if(a.flags|=2048,$a(9,{destroy:void 0},Df.bind(null,a,u,l,e),null),Ot===null)throw Error(r(349));i||(nl&127)!==0||Of(a,e,l)}return l}function Of(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=it.updateQueue,e===null?(e=$u(),it.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Df(t,e,l,a){e.value=l,e.getSnapshot=a,Mf(e)&&Rf(t)}function _f(t,e,l){return l(function(){Mf(e)&&Rf(t)})}function Mf(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!ve(t,l)}catch{return!0}}function Rf(t){var e=kl(t,2);e!==null&&he(e,t,2)}function co(t){var e=ie();if(typeof t=="function"){var l=t;if(t=l(),na){yl(!0);try{l()}finally{yl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ul,lastRenderedState:t},e}function Nf(t,e,l,a){return t.baseState=l,uo(t,zt,typeof a=="function"?a:ul)}function Kp(t,e,l,a,u){if(Xu(t))throw Error(r(485));if(t=e.action,t!==null){var i={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};D.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,Hf(e,i)):(i.next=l.next,e.pending=l.next=i)}}function Hf(t,e){var l=e.action,a=e.payload,u=t.state;if(e.isTransition){var i=D.T,c={};D.T=c;try{var f=l(u,a),h=D.S;h!==null&&h(c,f),Uf(t,e,f)}catch(b){oo(t,e,b)}finally{i!==null&&c.types!==null&&(i.types=c.types),D.T=i}}else try{i=l(u,a),Uf(t,e,i)}catch(b){oo(t,e,b)}}function Uf(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Bf(t,e,a)},function(a){return oo(t,e,a)}):Bf(t,e,l)}function Bf(t,e,l){e.status="fulfilled",e.value=l,wf(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Hf(t,l)))}function oo(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,wf(e),e=e.next;while(e!==a)}t.action=null}function wf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function $f(t,e){return e}function Gf(t,e){if(pt){var l=Ot.formState;if(l!==null){t:{var a=it;if(pt){if(Dt){e:{for(var u=Dt,i=He;u.nodeType!==8;){if(!i){u=null;break e}if(u=Be(u.nextSibling),u===null){u=null;break e}}i=u.data,u=i==="F!"||i==="F"?u:null}if(u){Dt=Be(u.nextSibling),a=u.data==="F!";break t}}Sl(a)}a=!1}a&&(e=l[0])}}return l=ie(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$f,lastRenderedState:e},l.queue=a,l=nd.bind(null,it,a),a.dispatch=l,a=co(!1),i=po.bind(null,it,!1,a.queue),a=ie(),u={state:e,dispatch:null,action:t,pending:null},a.queue=u,l=Kp.bind(null,it,u,i,l),u.dispatch=l,a.memoizedState=t,[e,l,!1]}function qf(t){var e=Gt();return Yf(e,zt,t)}function Yf(t,e,l){if(e=uo(t,e,$f)[0],t=qu(ul)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Mn(e)}catch(c){throw c===Na?_u:c}else a=e;e=Gt();var u=e.queue,i=u.dispatch;return l!==e.memoizedState&&(it.flags|=2048,$a(9,{destroy:void 0},Jp.bind(null,u,l),null)),[a,i,t]}function Jp(t,e){t.action=e}function Lf(t){var e=Gt(),l=zt;if(l!==null)return Yf(e,l,t);Gt(),e=e.memoizedState,l=Gt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function $a(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=it.updateQueue,e===null&&(e=$u(),it.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function Xf(){return Gt().memoizedState}function Yu(t,e,l,a){var u=ie();it.flags|=t,u.memoizedState=$a(1|e,{destroy:void 0},l,a===void 0?null:a)}function Lu(t,e,l,a){var u=Gt();a=a===void 0?null:a;var i=u.memoizedState.inst;zt!==null&&a!==null&&Pc(a,zt.memoizedState.deps)?u.memoizedState=$a(e,i,l,a):(it.flags|=t,u.memoizedState=$a(1|e,i,l,a))}function Qf(t,e){Yu(8390656,8,t,e)}function ro(t,e){Lu(2048,8,t,e)}function kp(t){it.flags|=4;var e=it.updateQueue;if(e===null)e=$u(),it.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function Zf(t){var e=Gt().memoizedState;return kp({ref:e,nextImpl:t}),function(){if((bt&2)!==0)throw Error(r(440));return e.impl.apply(void 0,arguments)}}function Vf(t,e){return Lu(4,2,t,e)}function Kf(t,e){return Lu(4,4,t,e)}function Jf(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function kf(t,e,l){l=l!=null?l.concat([t]):null,Lu(4,4,Jf.bind(null,e,t),l)}function so(){}function Ff(t,e){var l=Gt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Pc(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function Wf(t,e){var l=Gt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Pc(e,a[1]))return a[0];if(a=t(),na){yl(!0);try{t()}finally{yl(!1)}}return l.memoizedState=[a,e],a}function fo(t,e,l){return l===void 0||(nl&1073741824)!==0&&(dt&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=Id(),it.lanes|=t,_l|=t,l)}function If(t,e,l,a){return ve(l,e)?l:Ua.current!==null?(t=fo(t,l,a),ve(t,e)||(Xt=!0),t):(nl&42)===0||(nl&1073741824)!==0&&(dt&261930)===0?(Xt=!0,t.memoizedState=l):(t=Id(),it.lanes|=t,_l|=t,e)}function Pf(t,e,l,a,u){var i=Q.p;Q.p=i!==0&&8>i?i:8;var c=D.T,f={};D.T=f,po(t,!1,e,l);try{var h=u(),b=D.S;if(b!==null&&b(f,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var _=Qp(h,a);Rn(t,e,_,Te(t))}else Rn(t,e,a,Te(t))}catch(U){Rn(t,e,{then:function(){},status:"rejected",reason:U},Te())}finally{Q.p=i,c!==null&&f.types!==null&&(c.types=f.types),D.T=c}}function Fp(){}function ho(t,e,l,a){if(t.tag!==5)throw Error(r(476));var u=td(t).queue;Pf(t,u,e,tt,l===null?Fp:function(){return ed(t),l(a)})}function td(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ul,lastRenderedState:tt},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ul,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function ed(t){var e=td(t);e.next===null&&(e=t.alternate.memoizedState),Rn(t,e.next.queue,{},Te())}function mo(){return Pt(kn)}function ld(){return Gt().memoizedState}function ad(){return Gt().memoizedState}function Wp(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Te();t=Tl(l);var a=zl(e,t,l);a!==null&&(he(a,e,l),Cn(a,e,l)),e={cache:Lc()},t.payload=e;return}e=e.return}}function Ip(t,e,l){var a=Te();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Xu(t)?ud(e,l):(l=Mc(t,e,l,a),l!==null&&(he(l,t,a),id(l,e,a)))}function nd(t,e,l){var a=Te();Rn(t,e,l,a)}function Rn(t,e,l,a){var u={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Xu(t))ud(e,u);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var c=e.lastRenderedState,f=i(c,l);if(u.hasEagerState=!0,u.eagerState=f,ve(f,c))return Eu(t,e,u,0),Ot===null&&ju(),!1}catch{}finally{}if(l=Mc(t,e,u,a),l!==null)return he(l,t,a),id(l,e,a),!0}return!1}function po(t,e,l,a){if(a={lane:2,revertLane:Ko(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Xu(t)){if(e)throw Error(r(479))}else e=Mc(t,l,a,2),e!==null&&he(e,t,2)}function Xu(t){var e=t.alternate;return t===it||e!==null&&e===it}function ud(t,e){Ba=Bu=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function id(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,ss(t,l)}}var Nn={readContext:Pt,use:Gu,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useLayoutEffect:Ut,useInsertionEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useSyncExternalStore:Ut,useId:Ut,useHostTransitionStatus:Ut,useFormState:Ut,useActionState:Ut,useOptimistic:Ut,useMemoCache:Ut,useCacheRefresh:Ut};Nn.useEffectEvent=Ut;var cd={readContext:Pt,use:Gu,useCallback:function(t,e){return ie().memoizedState=[t,e===void 0?null:e],t},useContext:Pt,useEffect:Qf,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,Yu(4194308,4,Jf.bind(null,e,t),l)},useLayoutEffect:function(t,e){return Yu(4194308,4,t,e)},useInsertionEffect:function(t,e){Yu(4,2,t,e)},useMemo:function(t,e){var l=ie();e=e===void 0?null:e;var a=t();if(na){yl(!0);try{t()}finally{yl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=ie();if(l!==void 0){var u=l(e);if(na){yl(!0);try{l(e)}finally{yl(!1)}}}else u=e;return a.memoizedState=a.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},a.queue=t,t=t.dispatch=Ip.bind(null,it,t),[a.memoizedState,t]},useRef:function(t){var e=ie();return t={current:t},e.memoizedState=t},useState:function(t){t=co(t);var e=t.queue,l=nd.bind(null,it,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:so,useDeferredValue:function(t,e){var l=ie();return fo(l,t,e)},useTransition:function(){var t=co(!1);return t=Pf.bind(null,it,t.queue,!0,!1),ie().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=it,u=ie();if(pt){if(l===void 0)throw Error(r(407));l=l()}else{if(l=e(),Ot===null)throw Error(r(349));(dt&127)!==0||Of(a,e,l)}u.memoizedState=l;var i={value:l,getSnapshot:e};return u.queue=i,Qf(_f.bind(null,a,i,t),[t]),a.flags|=2048,$a(9,{destroy:void 0},Df.bind(null,a,i,l,e),null),l},useId:function(){var t=ie(),e=Ot.identifierPrefix;if(pt){var l=Qe,a=Xe;l=(a&~(1<<32-ge(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=wu++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=Zp++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:mo,useFormState:Gf,useActionState:Gf,useOptimistic:function(t){var e=ie();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=po.bind(null,it,!0,l),l.dispatch=e,[t,e]},useMemoCache:no,useCacheRefresh:function(){return ie().memoizedState=Wp.bind(null,it)},useEffectEvent:function(t){var e=ie(),l={impl:t};return e.memoizedState=l,function(){if((bt&2)!==0)throw Error(r(440));return l.impl.apply(void 0,arguments)}}},yo={readContext:Pt,use:Gu,useCallback:Ff,useContext:Pt,useEffect:ro,useImperativeHandle:kf,useInsertionEffect:Vf,useLayoutEffect:Kf,useMemo:Wf,useReducer:qu,useRef:Xf,useState:function(){return qu(ul)},useDebugValue:so,useDeferredValue:function(t,e){var l=Gt();return If(l,zt.memoizedState,t,e)},useTransition:function(){var t=qu(ul)[0],e=Gt().memoizedState;return[typeof t=="boolean"?t:Mn(t),e]},useSyncExternalStore:Cf,useId:ld,useHostTransitionStatus:mo,useFormState:qf,useActionState:qf,useOptimistic:function(t,e){var l=Gt();return Nf(l,zt,t,e)},useMemoCache:no,useCacheRefresh:ad};yo.useEffectEvent=Zf;var od={readContext:Pt,use:Gu,useCallback:Ff,useContext:Pt,useEffect:ro,useImperativeHandle:kf,useInsertionEffect:Vf,useLayoutEffect:Kf,useMemo:Wf,useReducer:io,useRef:Xf,useState:function(){return io(ul)},useDebugValue:so,useDeferredValue:function(t,e){var l=Gt();return zt===null?fo(l,t,e):If(l,zt.memoizedState,t,e)},useTransition:function(){var t=io(ul)[0],e=Gt().memoizedState;return[typeof t=="boolean"?t:Mn(t),e]},useSyncExternalStore:Cf,useId:ld,useHostTransitionStatus:mo,useFormState:Lf,useActionState:Lf,useOptimistic:function(t,e){var l=Gt();return zt!==null?Nf(l,zt,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:no,useCacheRefresh:ad};od.useEffectEvent=Zf;function go(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:O({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var vo={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=Te(),u=Tl(a);u.payload=e,l!=null&&(u.callback=l),e=zl(t,u,a),e!==null&&(he(e,t,a),Cn(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=Te(),u=Tl(a);u.tag=1,u.payload=e,l!=null&&(u.callback=l),e=zl(t,u,a),e!==null&&(he(e,t,a),Cn(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Te(),a=Tl(l);a.tag=2,e!=null&&(a.callback=e),e=zl(t,a,l),e!==null&&(he(e,t,l),Cn(e,t,l))}};function rd(t,e,l,a,u,i,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,c):e.prototype&&e.prototype.isPureReactComponent?!xn(l,a)||!xn(u,i):!0}function sd(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&vo.enqueueReplaceState(e,e.state,null)}function ua(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=O({},l));for(var u in t)l[u]===void 0&&(l[u]=t[u])}return l}function fd(t){Su(t)}function dd(t){console.error(t)}function hd(t){Su(t)}function Qu(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function md(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function xo(t,e,l){return l=Tl(l),l.tag=3,l.payload={element:null},l.callback=function(){Qu(t,e)},l}function pd(t){return t=Tl(t),t.tag=3,t}function yd(t,e,l,a){var u=l.type.getDerivedStateFromError;if(typeof u=="function"){var i=a.value;t.payload=function(){return u(i)},t.callback=function(){md(e,l,a)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){md(e,l,a),typeof u!="function"&&(Ml===null?Ml=new Set([this]):Ml.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function Pp(t,e,l,a,u){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&_a(e,l,u,!0),l=be.current,l!==null){switch(l.tag){case 31:case 13:return Ue===null?li():l.alternate===null&&Bt===0&&(Bt=3),l.flags&=-257,l.flags|=65536,l.lanes=u,a===Mu?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Qo(t,a,u)),!1;case 22:return l.flags|=65536,a===Mu?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Qo(t,a,u)),!1}throw Error(r(435,l.tag))}return Qo(t,a,u),li(),!1}if(pt)return e=be.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,a!==wc&&(t=Error(r(422),{cause:a}),jn(Me(t,l)))):(a!==wc&&(e=Error(r(423),{cause:a}),jn(Me(e,l))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,a=Me(a,l),u=xo(t.stateNode,a,u),Jc(t,u),Bt!==4&&(Bt=2)),!1;var i=Error(r(520),{cause:a});if(i=Me(i,l),Yn===null?Yn=[i]:Yn.push(i),Bt!==4&&(Bt=2),e===null)return!0;a=Me(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=u&-u,l.lanes|=t,t=xo(l.stateNode,a,t),Jc(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ml===null||!Ml.has(i))))return l.flags|=65536,u&=-u,l.lanes|=u,u=pd(u),yd(u,t,l,a),Jc(l,u),!1}l=l.return}while(l!==null);return!1}var bo=Error(r(461)),Xt=!1;function te(t,e,l,a){e.child=t===null?bf(e,null,l,a):aa(e,t.child,l,a)}function gd(t,e,l,a,u){l=l.render;var i=e.ref;if("ref"in a){var c={};for(var f in a)f!=="ref"&&(c[f]=a[f])}else c=a;return Pl(e),a=to(t,e,l,c,i,u),f=eo(),t!==null&&!Xt?(lo(t,e,u),il(t,e,u)):(pt&&f&&Uc(e),e.flags|=1,te(t,e,a,u),e.child)}function vd(t,e,l,a,u){if(t===null){var i=l.type;return typeof i=="function"&&!Rc(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,xd(t,e,i,a,u)):(t=zu(l.type,null,a,e,e.mode,u),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Oo(t,u)){var c=i.memoizedProps;if(l=l.compare,l=l!==null?l:xn,l(c,a)&&t.ref===e.ref)return il(t,e,u)}return e.flags|=1,t=tl(i,a),t.ref=e.ref,t.return=e,e.child=t}function xd(t,e,l,a,u){if(t!==null){var i=t.memoizedProps;if(xn(i,a)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=a=i,Oo(t,u))(t.flags&131072)!==0&&(Xt=!0);else return e.lanes=t.lanes,il(t,e,u)}return So(t,e,l,a,u)}function bd(t,e,l,a){var u=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,t!==null){for(a=e.child=t.child,u=0;a!==null;)u=u|a.lanes|a.childLanes,a=a.sibling;a=u&~i}else a=0,e.child=null;return Sd(t,e,i,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Du(e,i!==null?i.cachePool:null),i!==null?Ef(e,i):Fc(),Tf(e);else return a=e.lanes=536870912,Sd(t,e,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(Du(e,i.cachePool),Ef(e,i),Cl(),e.memoizedState=null):(t!==null&&Du(e,null),Fc(),Cl());return te(t,e,u,l),e.child}function Hn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Sd(t,e,l,a,u){var i=Qc();return i=i===null?null:{parent:Yt._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&Du(e,null),Fc(),Tf(e),t!==null&&_a(t,e,a,!0),e.childLanes=u,null}function Zu(t,e){return e=Ku({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function jd(t,e,l){return aa(e,t.child,null,l),t=Zu(e,e.pendingProps),t.flags|=2,Se(e),e.memoizedState=null,t}function ty(t,e,l){var a=e.pendingProps,u=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(pt){if(a.mode==="hidden")return t=Zu(e,a),e.lanes=536870912,Hn(null,t);if(Ic(e),(t=Dt)?(t=Hh(t,He),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:xl!==null?{id:Xe,overflow:Qe}:null,retryLane:536870912,hydrationErrors:null},l=nf(t),l.return=e,e.child=l,It=e,Dt=null)):t=null,t===null)throw Sl(e);return e.lanes=536870912,null}return Zu(e,a)}var i=t.memoizedState;if(i!==null){var c=i.dehydrated;if(Ic(e),u)if(e.flags&256)e.flags&=-257,e=jd(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(r(558));else if(Xt||_a(t,e,l,!1),u=(l&t.childLanes)!==0,Xt||u){if(a=Ot,a!==null&&(c=fs(a,l),c!==0&&c!==i.retryLane))throw i.retryLane=c,kl(t,c),he(a,t,c),bo;li(),e=jd(t,e,l)}else t=i.treeContext,Dt=Be(c.nextSibling),It=e,pt=!0,bl=null,He=!1,t!==null&&of(e,t),e=Zu(e,a),e.flags|=4096;return e}return t=tl(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Vu(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function So(t,e,l,a,u){return Pl(e),l=to(t,e,l,a,void 0,u),a=eo(),t!==null&&!Xt?(lo(t,e,u),il(t,e,u)):(pt&&a&&Uc(e),e.flags|=1,te(t,e,l,u),e.child)}function Ed(t,e,l,a,u,i){return Pl(e),e.updateQueue=null,l=Af(e,a,l,u),zf(t),a=eo(),t!==null&&!Xt?(lo(t,e,i),il(t,e,i)):(pt&&a&&Uc(e),e.flags|=1,te(t,e,l,i),e.child)}function Td(t,e,l,a,u){if(Pl(e),e.stateNode===null){var i=Aa,c=l.contextType;typeof c=="object"&&c!==null&&(i=Pt(c)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=vo,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},Vc(e),c=l.contextType,i.context=typeof c=="object"&&c!==null?Pt(c):Aa,i.state=e.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(go(e,l,c,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&vo.enqueueReplaceState(i,i.state,null),Dn(e,a,i,u),On(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var f=e.memoizedProps,h=ua(l,f);i.props=h;var b=i.context,_=l.contextType;c=Aa,typeof _=="object"&&_!==null&&(c=Pt(_));var U=l.getDerivedStateFromProps;_=typeof U=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=e.pendingProps!==f,_||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||b!==c)&&sd(e,i,a,c),El=!1;var E=e.memoizedState;i.state=E,Dn(e,a,i,u),On(),b=e.memoizedState,f||E!==b||El?(typeof U=="function"&&(go(e,l,U,a),b=e.memoizedState),(h=El||rd(e,l,h,a,E,b,c))?(_||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=b),i.props=a,i.state=b,i.context=c,a=h):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,Kc(t,e),c=e.memoizedProps,_=ua(l,c),i.props=_,U=e.pendingProps,E=i.context,b=l.contextType,h=Aa,typeof b=="object"&&b!==null&&(h=Pt(b)),f=l.getDerivedStateFromProps,(b=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==U||E!==h)&&sd(e,i,a,h),El=!1,E=e.memoizedState,i.state=E,Dn(e,a,i,u),On();var A=e.memoizedState;c!==U||E!==A||El||t!==null&&t.dependencies!==null&&Cu(t.dependencies)?(typeof f=="function"&&(go(e,l,f,a),A=e.memoizedState),(_=El||rd(e,l,_,a,E,A,h)||t!==null&&t.dependencies!==null&&Cu(t.dependencies))?(b||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,A,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,A,h)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=A),i.props=a,i.state=A,i.context=h,a=_):(typeof i.componentDidUpdate!="function"||c===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,Vu(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=aa(e,t.child,null,u),e.child=aa(e,null,l,u)):te(t,e,l,u),e.memoizedState=i.state,t=e.child):t=il(t,e,u),t}function zd(t,e,l,a){return Wl(),e.flags|=256,te(t,e,l,a),e.child}var jo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eo(t){return{baseLanes:t,cachePool:mf()}}function To(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Ee),t}function Ad(t,e,l){var a=e.pendingProps,u=!1,i=(e.flags&128)!==0,c;if((c=i)||(c=t!==null&&t.memoizedState===null?!1:($t.current&2)!==0),c&&(u=!0,e.flags&=-129),c=(e.flags&32)!==0,e.flags&=-33,t===null){if(pt){if(u?Al(e):Cl(),(t=Dt)?(t=Hh(t,He),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:xl!==null?{id:Xe,overflow:Qe}:null,retryLane:536870912,hydrationErrors:null},l=nf(t),l.return=e,e.child=l,It=e,Dt=null)):t=null,t===null)throw Sl(e);return ir(t)?e.lanes=32:e.lanes=536870912,null}var f=a.children;return a=a.fallback,u?(Cl(),u=e.mode,f=Ku({mode:"hidden",children:f},u),a=Fl(a,u,l,null),f.return=e,a.return=e,f.sibling=a,e.child=f,a=e.child,a.memoizedState=Eo(l),a.childLanes=To(t,c,l),e.memoizedState=jo,Hn(null,a)):(Al(e),zo(e,f))}var h=t.memoizedState;if(h!==null&&(f=h.dehydrated,f!==null)){if(i)e.flags&256?(Al(e),e.flags&=-257,e=Ao(t,e,l)):e.memoizedState!==null?(Cl(),e.child=t.child,e.flags|=128,e=null):(Cl(),f=a.fallback,u=e.mode,a=Ku({mode:"visible",children:a.children},u),f=Fl(f,u,l,null),f.flags|=2,a.return=e,f.return=e,a.sibling=f,e.child=a,aa(e,t.child,null,l),a=e.child,a.memoizedState=Eo(l),a.childLanes=To(t,c,l),e.memoizedState=jo,e=Hn(null,a));else if(Al(e),ir(f)){if(c=f.nextSibling&&f.nextSibling.dataset,c)var b=c.dgst;c=b,a=Error(r(419)),a.stack="",a.digest=c,jn({value:a,source:null,stack:null}),e=Ao(t,e,l)}else if(Xt||_a(t,e,l,!1),c=(l&t.childLanes)!==0,Xt||c){if(c=Ot,c!==null&&(a=fs(c,l),a!==0&&a!==h.retryLane))throw h.retryLane=a,kl(t,a),he(c,t,a),bo;ur(f)||li(),e=Ao(t,e,l)}else ur(f)?(e.flags|=192,e.child=t.child,e=null):(t=h.treeContext,Dt=Be(f.nextSibling),It=e,pt=!0,bl=null,He=!1,t!==null&&of(e,t),e=zo(e,a.children),e.flags|=4096);return e}return u?(Cl(),f=a.fallback,u=e.mode,h=t.child,b=h.sibling,a=tl(h,{mode:"hidden",children:a.children}),a.subtreeFlags=h.subtreeFlags&65011712,b!==null?f=tl(b,f):(f=Fl(f,u,l,null),f.flags|=2),f.return=e,a.return=e,a.sibling=f,e.child=a,Hn(null,a),a=e.child,f=t.child.memoizedState,f===null?f=Eo(l):(u=f.cachePool,u!==null?(h=Yt._currentValue,u=u.parent!==h?{parent:h,pool:h}:u):u=mf(),f={baseLanes:f.baseLanes|l,cachePool:u}),a.memoizedState=f,a.childLanes=To(t,c,l),e.memoizedState=jo,Hn(t.child,a)):(Al(e),l=t.child,t=l.sibling,l=tl(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(c=e.deletions,c===null?(e.deletions=[t],e.flags|=16):c.push(t)),e.child=l,e.memoizedState=null,l)}function zo(t,e){return e=Ku({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ku(t,e){return t=xe(22,t,null,e),t.lanes=0,t}function Ao(t,e,l){return aa(e,t.child,null,l),t=zo(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Cd(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),qc(t.return,e,l)}function Co(t,e,l,a,u,i){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:u,treeForkCount:i}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=l,c.tailMode=u,c.treeForkCount=i)}function Od(t,e,l){var a=e.pendingProps,u=a.revealOrder,i=a.tail;a=a.children;var c=$t.current,f=(c&2)!==0;if(f?(c=c&1|2,e.flags|=128):c&=1,Z($t,c),te(t,e,a,l),a=pt?Sn:0,!f&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cd(t,l,e);else if(t.tag===19)Cd(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(l=e.child,u=null;l!==null;)t=l.alternate,t!==null&&Uu(t)===null&&(u=l),l=l.sibling;l=u,l===null?(u=e.child,e.child=null):(u=l.sibling,l.sibling=null),Co(e,!1,u,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,u=e.child,e.child=null;u!==null;){if(t=u.alternate,t!==null&&Uu(t)===null){e.child=u;break}t=u.sibling,u.sibling=l,l=u,u=t}Co(e,!0,l,null,i,a);break;case"together":Co(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function il(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),_l|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(_a(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,l=tl(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=tl(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Oo(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Cu(t)))}function ey(t,e,l){switch(e.tag){case 3:wt(e,e.stateNode.containerInfo),jl(e,Yt,t.memoizedState.cache),Wl();break;case 27:case 5:ke(e);break;case 4:wt(e,e.stateNode.containerInfo);break;case 10:jl(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Ic(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Al(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Ad(t,e,l):(Al(e),t=il(t,e,l),t!==null?t.sibling:null);Al(e);break;case 19:var u=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(_a(t,e,l,!1),a=(l&e.childLanes)!==0),u){if(a)return Od(t,e,l);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Z($t,$t.current),a)break;return null;case 22:return e.lanes=0,bd(t,e,l,e.pendingProps);case 24:jl(e,Yt,t.memoizedState.cache)}return il(t,e,l)}function Dd(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Xt=!0;else{if(!Oo(t,l)&&(e.flags&128)===0)return Xt=!1,ey(t,e,l);Xt=(t.flags&131072)!==0}else Xt=!1,pt&&(e.flags&1048576)!==0&&cf(e,Sn,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=ea(e.elementType),e.type=t,typeof t=="function")Rc(t)?(a=ua(t,a),e.tag=1,e=Td(null,e,t,a,l)):(e.tag=0,e=So(null,e,t,a,l));else{if(t!=null){var u=t.$$typeof;if(u===M){e.tag=11,e=gd(null,e,t,a,l);break t}else if(u===q){e.tag=14,e=vd(null,e,t,a,l);break t}}throw e=ne(t)||t,Error(r(306,e,""))}}return e;case 0:return So(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,u=ua(a,e.pendingProps),Td(t,e,a,u,l);case 3:t:{if(wt(e,e.stateNode.containerInfo),t===null)throw Error(r(387));a=e.pendingProps;var i=e.memoizedState;u=i.element,Kc(t,e),Dn(e,a,null,l);var c=e.memoizedState;if(a=c.cache,jl(e,Yt,a),a!==i.cache&&Yc(e,[Yt],l,!0),On(),a=c.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:c.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=zd(t,e,a,l);break t}else if(a!==u){u=Me(Error(r(424)),e),jn(u),e=zd(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Dt=Be(t.firstChild),It=e,pt=!0,bl=null,He=!0,l=bf(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Wl(),a===u){e=il(t,e,l);break t}te(t,e,a,l)}e=e.child}return e;case 26:return Vu(t,e),t===null?(l=qh(e.type,null,e.pendingProps,null))?e.memoizedState=l:pt||(l=e.type,t=e.pendingProps,a=ri(ut.current).createElement(l),a[Wt]=e,a[ce]=t,ee(a,l,t),Kt(a),e.stateNode=a):e.memoizedState=qh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ke(e),t===null&&pt&&(a=e.stateNode=wh(e.type,e.pendingProps,ut.current),It=e,He=!0,u=Dt,Ul(e.type)?(cr=u,Dt=Be(a.firstChild)):Dt=u),te(t,e,e.pendingProps.children,l),Vu(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&pt&&((u=a=Dt)&&(a=My(a,e.type,e.pendingProps,He),a!==null?(e.stateNode=a,It=e,Dt=Be(a.firstChild),He=!1,u=!0):u=!1),u||Sl(e)),ke(e),u=e.type,i=e.pendingProps,c=t!==null?t.memoizedProps:null,a=i.children,lr(u,i)?a=null:c!==null&&lr(u,c)&&(e.flags|=32),e.memoizedState!==null&&(u=to(t,e,Vp,null,null,l),kn._currentValue=u),Vu(t,e),te(t,e,a,l),e.child;case 6:return t===null&&pt&&((t=l=Dt)&&(l=Ry(l,e.pendingProps,He),l!==null?(e.stateNode=l,It=e,Dt=null,t=!0):t=!1),t||Sl(e)),null;case 13:return Ad(t,e,l);case 4:return wt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=aa(e,null,a,l):te(t,e,a,l),e.child;case 11:return gd(t,e,e.type,e.pendingProps,l);case 7:return te(t,e,e.pendingProps,l),e.child;case 8:return te(t,e,e.pendingProps.children,l),e.child;case 12:return te(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,jl(e,e.type,a.value),te(t,e,a.children,l),e.child;case 9:return u=e.type._context,a=e.pendingProps.children,Pl(e),u=Pt(u),a=a(u),e.flags|=1,te(t,e,a,l),e.child;case 14:return vd(t,e,e.type,e.pendingProps,l);case 15:return xd(t,e,e.type,e.pendingProps,l);case 19:return Od(t,e,l);case 31:return ty(t,e,l);case 22:return bd(t,e,l,e.pendingProps);case 24:return Pl(e),a=Pt(Yt),t===null?(u=Qc(),u===null&&(u=Ot,i=Lc(),u.pooledCache=i,i.refCount++,i!==null&&(u.pooledCacheLanes|=l),u=i),e.memoizedState={parent:a,cache:u},Vc(e),jl(e,Yt,u)):((t.lanes&l)!==0&&(Kc(t,e),Dn(e,null,null,l),On()),u=t.memoizedState,i=e.memoizedState,u.parent!==a?(u={parent:a,cache:a},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),jl(e,Yt,a)):(a=i.cache,jl(e,Yt,a),a!==u.cache&&Yc(e,[Yt],l,!0))),te(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function cl(t){t.flags|=4}function Do(t,e,l,a,u){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(lh())t.flags|=8192;else throw la=Mu,Zc}else t.flags&=-16777217}function _d(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Zh(e))if(lh())t.flags|=8192;else throw la=Mu,Zc}function Ju(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?os():536870912,t.lanes|=e,La|=e)}function Un(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function ly(t,e,l){var a=e.pendingProps;switch(Bc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return _t(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),al(Yt),jt(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Da(e)?cl(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,$c())),_t(e),null;case 26:var u=e.type,i=e.memoizedState;return t===null?(cl(e),i!==null?(_t(e),_d(e,i)):(_t(e),Do(e,u,null,a,l))):i?i!==t.memoizedState?(cl(e),_t(e),_d(e,i)):(_t(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&cl(e),_t(e),Do(e,u,t,a,l)),null;case 27:if(Fe(e),l=ut.current,u=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&cl(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return _t(e),null}t=k.current,Da(e)?rf(e):(t=wh(u,a,l),e.stateNode=t,cl(e))}return _t(e),null;case 5:if(Fe(e),u=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&cl(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return _t(e),null}if(i=k.current,Da(e))rf(e);else{var c=ri(ut.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?c.createElement(u,{is:a.is}):c.createElement(u)}}i[Wt]=e,i[ce]=a;t:for(c=e.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break t;for(;c.sibling===null;){if(c.return===null||c.return===e)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}e.stateNode=i;t:switch(ee(i,u,a),u){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&cl(e)}}return _t(e),Do(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&cl(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(r(166));if(t=ut.current,Da(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,u=It,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}t[Wt]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Ah(t.nodeValue,l)),t||Sl(e,!0)}else t=ri(t).createTextNode(a),t[Wt]=e,e.stateNode=t}return _t(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=Da(e),l!==null){if(t===null){if(!a)throw Error(r(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Wt]=e}else Wl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;_t(e),t=!1}else l=$c(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(Se(e),e):(Se(e),null);if((e.flags&128)!==0)throw Error(r(558))}return _t(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Da(e),a!==null&&a.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Wt]=e}else Wl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;_t(e),u=!1}else u=$c(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return e.flags&256?(Se(e),e):(Se(e),null)}return Se(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==u&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),Ju(e,e.updateQueue),_t(e),null);case 4:return jt(),t===null&&Wo(e.stateNode.containerInfo),_t(e),null;case 10:return al(e.type),_t(e),null;case 19:if(R($t),a=e.memoizedState,a===null)return _t(e),null;if(u=(e.flags&128)!==0,i=a.rendering,i===null)if(u)Un(a,!1);else{if(Bt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=Uu(t),i!==null){for(e.flags|=128,Un(a,!1),t=i.updateQueue,e.updateQueue=t,Ju(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)af(l,t),l=l.sibling;return Z($t,$t.current&1|2),pt&&el(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&pe()>Pu&&(e.flags|=128,u=!0,Un(a,!1),e.lanes=4194304)}else{if(!u)if(t=Uu(i),t!==null){if(e.flags|=128,u=!0,t=t.updateQueue,e.updateQueue=t,Ju(e,t),Un(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!pt)return _t(e),null}else 2*pe()-a.renderingStartTime>Pu&&l!==536870912&&(e.flags|=128,u=!0,Un(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=pe(),t.sibling=null,l=$t.current,Z($t,u?l&1|2:l&1),pt&&el(e,a.treeForkCount),t):(_t(e),null);case 22:case 23:return Se(e),Wc(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),l=e.updateQueue,l!==null&&Ju(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&R(ta),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),al(Yt),_t(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function ay(t,e){switch(Bc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return al(Yt),jt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Fe(e),null;case 31:if(e.memoizedState!==null){if(Se(e),e.alternate===null)throw Error(r(340));Wl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Se(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));Wl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return R($t),null;case 4:return jt(),null;case 10:return al(e.type),null;case 22:case 23:return Se(e),Wc(),t!==null&&R(ta),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return al(Yt),null;case 25:return null;default:return null}}function Md(t,e){switch(Bc(e),e.tag){case 3:al(Yt),jt();break;case 26:case 27:case 5:Fe(e);break;case 4:jt();break;case 31:e.memoizedState!==null&&Se(e);break;case 13:Se(e);break;case 19:R($t);break;case 10:al(e.type);break;case 22:case 23:Se(e),Wc(),t!==null&&R(ta);break;case 24:al(Yt)}}function Bn(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&t)===t){a=void 0;var i=l.create,c=l.inst;a=i(),c.destroy=a}l=l.next}while(l!==u)}}catch(f){Tt(e,e.return,f)}}function Ol(t,e,l){try{var a=e.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var i=u.next;a=i;do{if((a.tag&t)===t){var c=a.inst,f=c.destroy;if(f!==void 0){c.destroy=void 0,u=e;var h=l,b=f;try{b()}catch(_){Tt(u,h,_)}}}a=a.next}while(a!==i)}}catch(_){Tt(e,e.return,_)}}function Rd(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{jf(e,l)}catch(a){Tt(t,t.return,a)}}}function Nd(t,e,l){l.props=ua(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Tt(t,e,a)}}function wn(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(u){Tt(t,e,u)}}function Ze(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(u){Tt(t,e,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(u){Tt(t,e,u)}else l.current=null}function Hd(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(u){Tt(t,t.return,u)}}function _o(t,e,l){try{var a=t.stateNode;zy(a,t.type,l,e),a[ce]=e}catch(u){Tt(t,t.return,u)}}function Ud(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ul(t.type)||t.tag===4}function Mo(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ud(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ul(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ro(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Ie));else if(a!==4&&(a===27&&Ul(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Ro(t,e,l),t=t.sibling;t!==null;)Ro(t,e,l),t=t.sibling}function ku(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&Ul(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(ku(t,e,l),t=t.sibling;t!==null;)ku(t,e,l),t=t.sibling}function Bd(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,u=e.attributes;u.length;)e.removeAttributeNode(u[0]);ee(e,a,l),e[Wt]=t,e[ce]=l}catch(i){Tt(t,t.return,i)}}var ol=!1,Qt=!1,No=!1,wd=typeof WeakSet=="function"?WeakSet:Set,Jt=null;function ny(t,e){if(t=t.containerInfo,tr=yi,t=Js(t),zc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var u=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var c=0,f=-1,h=-1,b=0,_=0,U=t,E=null;e:for(;;){for(var A;U!==l||u!==0&&U.nodeType!==3||(f=c+u),U!==i||a!==0&&U.nodeType!==3||(h=c+a),U.nodeType===3&&(c+=U.nodeValue.length),(A=U.firstChild)!==null;)E=U,U=A;for(;;){if(U===t)break e;if(E===l&&++b===u&&(f=c),E===i&&++_===a&&(h=c),(A=U.nextSibling)!==null)break;U=E,E=U.parentNode}U=A}l=f===-1||h===-1?null:{start:f,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;for(er={focusedElem:t,selectionRange:l},yi=!1,Jt=e;Jt!==null;)if(e=Jt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Jt=t;else for(;Jt!==null;){switch(e=Jt,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)u=t[l],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,u=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var F=ua(l.type,u);t=a.getSnapshotBeforeUpdate(F,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(et){Tt(l,l.return,et)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)nr(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":nr(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,Jt=t;break}Jt=e.return}}function $d(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:sl(t,l),a&4&&Bn(5,l);break;case 1:if(sl(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(c){Tt(l,l.return,c)}else{var u=ua(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(u,e,t.__reactInternalSnapshotBeforeUpdate)}catch(c){Tt(l,l.return,c)}}a&64&&Rd(l),a&512&&wn(l,l.return);break;case 3:if(sl(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{jf(t,e)}catch(c){Tt(l,l.return,c)}}break;case 27:e===null&&a&4&&Bd(l);case 26:case 5:sl(t,l),e===null&&a&4&&Hd(l),a&512&&wn(l,l.return);break;case 12:sl(t,l);break;case 31:sl(t,l),a&4&&Yd(t,l);break;case 13:sl(t,l),a&4&&Ld(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=hy.bind(null,l),Ny(t,l))));break;case 22:if(a=l.memoizedState!==null||ol,!a){e=e!==null&&e.memoizedState!==null||Qt,u=ol;var i=Qt;ol=a,(Qt=e)&&!i?fl(t,l,(l.subtreeFlags&8772)!==0):sl(t,l),ol=u,Qt=i}break;case 30:break;default:sl(t,l)}}function Gd(t){var e=t.alternate;e!==null&&(t.alternate=null,Gd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&oc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Nt=null,re=!1;function rl(t,e,l){for(l=l.child;l!==null;)qd(t,e,l),l=l.sibling}function qd(t,e,l){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(cn,l)}catch{}switch(l.tag){case 26:Qt||Ze(l,e),rl(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Qt||Ze(l,e);var a=Nt,u=re;Ul(l.type)&&(Nt=l.stateNode,re=!1),rl(t,e,l),Vn(l.stateNode),Nt=a,re=u;break;case 5:Qt||Ze(l,e);case 6:if(a=Nt,u=re,Nt=null,rl(t,e,l),Nt=a,re=u,Nt!==null)if(re)try{(Nt.nodeType===9?Nt.body:Nt.nodeName==="HTML"?Nt.ownerDocument.body:Nt).removeChild(l.stateNode)}catch(i){Tt(l,e,i)}else try{Nt.removeChild(l.stateNode)}catch(i){Tt(l,e,i)}break;case 18:Nt!==null&&(re?(t=Nt,Rh(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Fa(t)):Rh(Nt,l.stateNode));break;case 4:a=Nt,u=re,Nt=l.stateNode.containerInfo,re=!0,rl(t,e,l),Nt=a,re=u;break;case 0:case 11:case 14:case 15:Ol(2,l,e),Qt||Ol(4,l,e),rl(t,e,l);break;case 1:Qt||(Ze(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Nd(l,e,a)),rl(t,e,l);break;case 21:rl(t,e,l);break;case 22:Qt=(a=Qt)||l.memoizedState!==null,rl(t,e,l),Qt=a;break;default:rl(t,e,l)}}function Yd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Fa(t)}catch(l){Tt(e,e.return,l)}}}function Ld(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Fa(t)}catch(l){Tt(e,e.return,l)}}function uy(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new wd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new wd),e;default:throw Error(r(435,t.tag))}}function Fu(t,e){var l=uy(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var u=my.bind(null,t,a);a.then(u,u)}})}function se(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var u=l[a],i=t,c=e,f=c;t:for(;f!==null;){switch(f.tag){case 27:if(Ul(f.type)){Nt=f.stateNode,re=!1;break t}break;case 5:Nt=f.stateNode,re=!1;break t;case 3:case 4:Nt=f.stateNode.containerInfo,re=!0;break t}f=f.return}if(Nt===null)throw Error(r(160));qd(i,c,u),Nt=null,re=!1,i=u.alternate,i!==null&&(i.return=null),u.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Xd(e,t),e=e.sibling}var qe=null;function Xd(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:se(e,t),fe(t),a&4&&(Ol(3,t,t.return),Bn(3,t),Ol(5,t,t.return));break;case 1:se(e,t),fe(t),a&512&&(Qt||l===null||Ze(l,l.return)),a&64&&ol&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var u=qe;if(se(e,t),fe(t),a&512&&(Qt||l===null||Ze(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,u=u.ownerDocument||u;e:switch(a){case"title":i=u.getElementsByTagName("title")[0],(!i||i[sn]||i[Wt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=u.createElement(a),u.head.insertBefore(i,u.querySelector("head > title"))),ee(i,a,l),i[Wt]=t,Kt(i),a=i;break t;case"link":var c=Xh("link","href",u).get(a+(l.href||""));if(c){for(var f=0;f<c.length;f++)if(i=c[f],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(f,1);break e}}i=u.createElement(a),ee(i,a,l),u.head.appendChild(i);break;case"meta":if(c=Xh("meta","content",u).get(a+(l.content||""))){for(f=0;f<c.length;f++)if(i=c[f],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(f,1);break e}}i=u.createElement(a),ee(i,a,l),u.head.appendChild(i);break;default:throw Error(r(468,a))}i[Wt]=t,Kt(i),a=i}t.stateNode=a}else Qh(u,t.type,t.stateNode);else t.stateNode=Lh(u,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?Qh(u,t.type,t.stateNode):Lh(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&_o(t,t.memoizedProps,l.memoizedProps)}break;case 27:se(e,t),fe(t),a&512&&(Qt||l===null||Ze(l,l.return)),l!==null&&a&4&&_o(t,t.memoizedProps,l.memoizedProps);break;case 5:if(se(e,t),fe(t),a&512&&(Qt||l===null||Ze(l,l.return)),t.flags&32){u=t.stateNode;try{xa(u,"")}catch(F){Tt(t,t.return,F)}}a&4&&t.stateNode!=null&&(u=t.memoizedProps,_o(t,u,l!==null?l.memoizedProps:u)),a&1024&&(No=!0);break;case 6:if(se(e,t),fe(t),a&4){if(t.stateNode===null)throw Error(r(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(F){Tt(t,t.return,F)}}break;case 3:if(di=null,u=qe,qe=si(e.containerInfo),se(e,t),qe=u,fe(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Fa(e.containerInfo)}catch(F){Tt(t,t.return,F)}No&&(No=!1,Qd(t));break;case 4:a=qe,qe=si(t.stateNode.containerInfo),se(e,t),fe(t),qe=a;break;case 12:se(e,t),fe(t);break;case 31:se(e,t),fe(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Fu(t,a)));break;case 13:se(e,t),fe(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Iu=pe()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Fu(t,a)));break;case 22:u=t.memoizedState!==null;var h=l!==null&&l.memoizedState!==null,b=ol,_=Qt;if(ol=b||u,Qt=_||h,se(e,t),Qt=_,ol=b,fe(t),a&8192)t:for(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,u&&(l===null||h||ol||Qt||ia(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){h=l=e;try{if(i=h.stateNode,u)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{f=h.stateNode;var U=h.memoizedProps.style,E=U!=null&&U.hasOwnProperty("display")?U.display:null;f.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(F){Tt(h,h.return,F)}}}else if(e.tag===6){if(l===null){h=e;try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(F){Tt(h,h.return,F)}}}else if(e.tag===18){if(l===null){h=e;try{var A=h.stateNode;u?Nh(A,!0):Nh(h.stateNode,!1)}catch(F){Tt(h,h.return,F)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Fu(t,l))));break;case 19:se(e,t),fe(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Fu(t,a)));break;case 30:break;case 21:break;default:se(e,t),fe(t)}}function fe(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Ud(a)){l=a;break}a=a.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var u=l.stateNode,i=Mo(t);ku(t,i,u);break;case 5:var c=l.stateNode;l.flags&32&&(xa(c,""),l.flags&=-33);var f=Mo(t);ku(t,f,c);break;case 3:case 4:var h=l.stateNode.containerInfo,b=Mo(t);Ro(t,b,h);break;default:throw Error(r(161))}}catch(_){Tt(t,t.return,_)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Qd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Qd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function sl(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)$d(t,e.alternate,e),e=e.sibling}function ia(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ol(4,e,e.return),ia(e);break;case 1:Ze(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Nd(e,e.return,l),ia(e);break;case 27:Vn(e.stateNode);case 26:case 5:Ze(e,e.return),ia(e);break;case 22:e.memoizedState===null&&ia(e);break;case 30:ia(e);break;default:ia(e)}t=t.sibling}}function fl(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,u=t,i=e,c=i.flags;switch(i.tag){case 0:case 11:case 15:fl(u,i,l),Bn(4,i);break;case 1:if(fl(u,i,l),a=i,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(b){Tt(a,a.return,b)}if(a=i,u=a.updateQueue,u!==null){var f=a.stateNode;try{var h=u.shared.hiddenCallbacks;if(h!==null)for(u.shared.hiddenCallbacks=null,u=0;u<h.length;u++)Sf(h[u],f)}catch(b){Tt(a,a.return,b)}}l&&c&64&&Rd(i),wn(i,i.return);break;case 27:Bd(i);case 26:case 5:fl(u,i,l),l&&a===null&&c&4&&Hd(i),wn(i,i.return);break;case 12:fl(u,i,l);break;case 31:fl(u,i,l),l&&c&4&&Yd(u,i);break;case 13:fl(u,i,l),l&&c&4&&Ld(u,i);break;case 22:i.memoizedState===null&&fl(u,i,l),wn(i,i.return);break;case 30:break;default:fl(u,i,l)}e=e.sibling}}function Ho(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&En(l))}function Uo(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&En(t))}function Ye(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zd(t,e,l,a),e=e.sibling}function Zd(t,e,l,a){var u=e.flags;switch(e.tag){case 0:case 11:case 15:Ye(t,e,l,a),u&2048&&Bn(9,e);break;case 1:Ye(t,e,l,a);break;case 3:Ye(t,e,l,a),u&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&En(t)));break;case 12:if(u&2048){Ye(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,c=i.id,f=i.onPostCommit;typeof f=="function"&&f(c,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){Tt(e,e.return,h)}}else Ye(t,e,l,a);break;case 31:Ye(t,e,l,a);break;case 13:Ye(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,c=e.alternate,e.memoizedState!==null?i._visibility&2?Ye(t,e,l,a):$n(t,e):i._visibility&2?Ye(t,e,l,a):(i._visibility|=2,Ga(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),u&2048&&Ho(c,e);break;case 24:Ye(t,e,l,a),u&2048&&Uo(e.alternate,e);break;default:Ye(t,e,l,a)}}function Ga(t,e,l,a,u){for(u=u&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,c=e,f=l,h=a,b=c.flags;switch(c.tag){case 0:case 11:case 15:Ga(i,c,f,h,u),Bn(8,c);break;case 23:break;case 22:var _=c.stateNode;c.memoizedState!==null?_._visibility&2?Ga(i,c,f,h,u):$n(i,c):(_._visibility|=2,Ga(i,c,f,h,u)),u&&b&2048&&Ho(c.alternate,c);break;case 24:Ga(i,c,f,h,u),u&&b&2048&&Uo(c.alternate,c);break;default:Ga(i,c,f,h,u)}e=e.sibling}}function $n(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,u=a.flags;switch(a.tag){case 22:$n(l,a),u&2048&&Ho(a.alternate,a);break;case 24:$n(l,a),u&2048&&Uo(a.alternate,a);break;default:$n(l,a)}e=e.sibling}}var Gn=8192;function qa(t,e,l){if(t.subtreeFlags&Gn)for(t=t.child;t!==null;)Vd(t,e,l),t=t.sibling}function Vd(t,e,l){switch(t.tag){case 26:qa(t,e,l),t.flags&Gn&&t.memoizedState!==null&&Zy(l,qe,t.memoizedState,t.memoizedProps);break;case 5:qa(t,e,l);break;case 3:case 4:var a=qe;qe=si(t.stateNode.containerInfo),qa(t,e,l),qe=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=Gn,Gn=16777216,qa(t,e,l),Gn=a):qa(t,e,l));break;default:qa(t,e,l)}}function Kd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function qn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Jt=a,kd(a,t)}Kd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jd(t),t=t.sibling}function Jd(t){switch(t.tag){case 0:case 11:case 15:qn(t),t.flags&2048&&Ol(9,t,t.return);break;case 3:qn(t);break;case 12:qn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Wu(t)):qn(t);break;default:qn(t)}}function Wu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Jt=a,kd(a,t)}Kd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ol(8,e,e.return),Wu(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Wu(e));break;default:Wu(e)}t=t.sibling}}function kd(t,e){for(;Jt!==null;){var l=Jt;switch(l.tag){case 0:case 11:case 15:Ol(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:En(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Jt=a;else t:for(l=t;Jt!==null;){a=Jt;var u=a.sibling,i=a.return;if(Gd(a),a===l){Jt=null;break t}if(u!==null){u.return=i,Jt=u;break t}Jt=i}}}var iy={getCacheForType:function(t){var e=Pt(Yt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return Pt(Yt).controller.signal}},cy=typeof WeakMap=="function"?WeakMap:Map,bt=0,Ot=null,st=null,dt=0,Et=0,je=null,Dl=!1,Ya=!1,Bo=!1,dl=0,Bt=0,_l=0,ca=0,wo=0,Ee=0,La=0,Yn=null,de=null,$o=!1,Iu=0,Fd=0,Pu=1/0,ti=null,Ml=null,Vt=0,Rl=null,Xa=null,hl=0,Go=0,qo=null,Wd=null,Ln=0,Yo=null;function Te(){return(bt&2)!==0&&dt!==0?dt&-dt:D.T!==null?Ko():ds()}function Id(){if(Ee===0)if((dt&536870912)===0||pt){var t=ou;ou<<=1,(ou&3932160)===0&&(ou=262144),Ee=t}else Ee=536870912;return t=be.current,t!==null&&(t.flags|=32),Ee}function he(t,e,l){(t===Ot&&(Et===2||Et===9)||t.cancelPendingCommit!==null)&&(Qa(t,0),Nl(t,dt,Ee,!1)),rn(t,l),((bt&2)===0||t!==Ot)&&(t===Ot&&((bt&2)===0&&(ca|=l),Bt===4&&Nl(t,dt,Ee,!1)),Ve(t))}function Pd(t,e,l){if((bt&6)!==0)throw Error(r(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||on(t,e),u=a?sy(t,e):Xo(t,e,!0),i=a;do{if(u===0){Ya&&!a&&Nl(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!oy(l)){u=Xo(t,e,!1),i=!1;continue}if(u===2){if(i=e,t.errorRecoveryDisabledLanes&i)var c=0;else c=t.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){e=c;t:{var f=t;u=Yn;var h=f.current.memoizedState.isDehydrated;if(h&&(Qa(f,c).flags|=256),c=Xo(f,c,!1),c!==2){if(Bo&&!h){f.errorRecoveryDisabledLanes|=i,ca|=i,u=4;break t}i=de,de=u,i!==null&&(de===null?de=i:de.push.apply(de,i))}u=c}if(i=!1,u!==2)continue}}if(u===1){Qa(t,0),Nl(t,e,0,!0);break}t:{switch(a=t,i=u,i){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:Nl(a,e,Ee,!Dl);break t;case 2:de=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(u=Iu+300-pe(),10<u)){if(Nl(a,e,Ee,!Dl),su(a,0,!0)!==0)break t;hl=e,a.timeoutHandle=_h(th.bind(null,a,l,de,ti,$o,e,Ee,ca,La,Dl,i,"Throttled",-0,0),u);break t}th(a,l,de,ti,$o,e,Ee,ca,La,Dl,i,null,-0,0)}}break}while(!0);Ve(t)}function th(t,e,l,a,u,i,c,f,h,b,_,U,E,A){if(t.timeoutHandle=-1,U=e.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ie},Vd(e,i,U);var F=(i&62914560)===i?Iu-pe():(i&4194048)===i?Fd-pe():0;if(F=Vy(U,F),F!==null){hl=i,t.cancelPendingCommit=F(oh.bind(null,t,e,i,l,a,u,c,f,h,_,U,null,E,A)),Nl(t,i,c,!b);return}}oh(t,e,i,l,a,u,c,f,h)}function oy(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var u=l[a],i=u.getSnapshot;u=u.value;try{if(!ve(i(),u))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Nl(t,e,l,a){e&=~wo,e&=~ca,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var u=e;0<u;){var i=31-ge(u),c=1<<i;a[i]=-1,u&=~c}l!==0&&rs(t,l,e)}function ei(){return(bt&6)===0?(Xn(0),!1):!0}function Lo(){if(st!==null){if(Et===0)var t=st.return;else t=st,ll=Il=null,ao(t),Ha=null,zn=0,t=st;for(;t!==null;)Md(t.alternate,t),t=t.return;st=null}}function Qa(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Oy(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),hl=0,Lo(),Ot=t,st=l=tl(t.current,null),dt=e,Et=0,je=null,Dl=!1,Ya=on(t,e),Bo=!1,La=Ee=wo=ca=_l=Bt=0,de=Yn=null,$o=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var u=31-ge(a),i=1<<u;e|=t[u],a&=~i}return dl=e,ju(),l}function eh(t,e){it=null,D.H=Nn,e===Na||e===_u?(e=gf(),Et=3):e===Zc?(e=gf(),Et=4):Et=e===bo?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,je=e,st===null&&(Bt=1,Qu(t,Me(e,t.current)))}function lh(){var t=be.current;return t===null?!0:(dt&4194048)===dt?Ue===null:(dt&62914560)===dt||(dt&536870912)!==0?t===Ue:!1}function ah(){var t=D.H;return D.H=Nn,t===null?Nn:t}function nh(){var t=D.A;return D.A=iy,t}function li(){Bt=4,Dl||(dt&4194048)!==dt&&be.current!==null||(Ya=!0),(_l&134217727)===0&&(ca&134217727)===0||Ot===null||Nl(Ot,dt,Ee,!1)}function Xo(t,e,l){var a=bt;bt|=2;var u=ah(),i=nh();(Ot!==t||dt!==e)&&(ti=null,Qa(t,e)),e=!1;var c=Bt;t:do try{if(Et!==0&&st!==null){var f=st,h=je;switch(Et){case 8:Lo(),c=6;break t;case 3:case 2:case 9:case 6:be.current===null&&(e=!0);var b=Et;if(Et=0,je=null,Za(t,f,h,b),l&&Ya){c=0;break t}break;default:b=Et,Et=0,je=null,Za(t,f,h,b)}}ry(),c=Bt;break}catch(_){eh(t,_)}while(!0);return e&&t.shellSuspendCounter++,ll=Il=null,bt=a,D.H=u,D.A=i,st===null&&(Ot=null,dt=0,ju()),c}function ry(){for(;st!==null;)uh(st)}function sy(t,e){var l=bt;bt|=2;var a=ah(),u=nh();Ot!==t||dt!==e?(ti=null,Pu=pe()+500,Qa(t,e)):Ya=on(t,e);t:do try{if(Et!==0&&st!==null){e=st;var i=je;e:switch(Et){case 1:Et=0,je=null,Za(t,e,i,1);break;case 2:case 9:if(pf(i)){Et=0,je=null,ih(e);break}e=function(){Et!==2&&Et!==9||Ot!==t||(Et=7),Ve(t)},i.then(e,e);break t;case 3:Et=7;break t;case 4:Et=5;break t;case 7:pf(i)?(Et=0,je=null,ih(e)):(Et=0,je=null,Za(t,e,i,7));break;case 5:var c=null;switch(st.tag){case 26:c=st.memoizedState;case 5:case 27:var f=st;if(c?Zh(c):f.stateNode.complete){Et=0,je=null;var h=f.sibling;if(h!==null)st=h;else{var b=f.return;b!==null?(st=b,ai(b)):st=null}break e}}Et=0,je=null,Za(t,e,i,5);break;case 6:Et=0,je=null,Za(t,e,i,6);break;case 8:Lo(),Bt=6;break t;default:throw Error(r(462))}}fy();break}catch(_){eh(t,_)}while(!0);return ll=Il=null,D.H=a,D.A=u,bt=l,st!==null?0:(Ot=null,dt=0,ju(),Bt)}function fy(){for(;st!==null&&!H0();)uh(st)}function uh(t){var e=Dd(t.alternate,t,dl);t.memoizedProps=t.pendingProps,e===null?ai(t):st=e}function ih(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Ed(l,e,e.pendingProps,e.type,void 0,dt);break;case 11:e=Ed(l,e,e.pendingProps,e.type.render,e.ref,dt);break;case 5:ao(e);default:Md(l,e),e=st=af(e,dl),e=Dd(l,e,dl)}t.memoizedProps=t.pendingProps,e===null?ai(t):st=e}function Za(t,e,l,a){ll=Il=null,ao(e),Ha=null,zn=0;var u=e.return;try{if(Pp(t,u,e,l,dt)){Bt=1,Qu(t,Me(l,t.current)),st=null;return}}catch(i){if(u!==null)throw st=u,i;Bt=1,Qu(t,Me(l,t.current)),st=null;return}e.flags&32768?(pt||a===1?t=!0:Ya||(dt&536870912)!==0?t=!1:(Dl=t=!0,(a===2||a===9||a===3||a===6)&&(a=be.current,a!==null&&a.tag===13&&(a.flags|=16384))),ch(e,t)):ai(e)}function ai(t){var e=t;do{if((e.flags&32768)!==0){ch(e,Dl);return}t=e.return;var l=ly(e.alternate,e,dl);if(l!==null){st=l;return}if(e=e.sibling,e!==null){st=e;return}st=e=t}while(e!==null);Bt===0&&(Bt=5)}function ch(t,e){do{var l=ay(t.alternate,t);if(l!==null){l.flags&=32767,st=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){st=t;return}st=t=l}while(t!==null);Bt=6,st=null}function oh(t,e,l,a,u,i,c,f,h){t.cancelPendingCommit=null;do ni();while(Vt!==0);if((bt&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(i=e.lanes|e.childLanes,i|=_c,Q0(t,l,i,c,f,h),t===Ot&&(st=Ot=null,dt=0),Xa=e,Rl=t,hl=l,Go=i,qo=u,Wd=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,py(iu,function(){return hh(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=D.T,D.T=null,u=Q.p,Q.p=2,c=bt,bt|=4;try{ny(t,e,l)}finally{bt=c,Q.p=u,D.T=a}}Vt=1,rh(),sh(),fh()}}function rh(){if(Vt===1){Vt=0;var t=Rl,e=Xa,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=D.T,D.T=null;var a=Q.p;Q.p=2;var u=bt;bt|=4;try{Xd(e,t);var i=er,c=Js(t.containerInfo),f=i.focusedElem,h=i.selectionRange;if(c!==f&&f&&f.ownerDocument&&Ks(f.ownerDocument.documentElement,f)){if(h!==null&&zc(f)){var b=h.start,_=h.end;if(_===void 0&&(_=b),"selectionStart"in f)f.selectionStart=b,f.selectionEnd=Math.min(_,f.value.length);else{var U=f.ownerDocument||document,E=U&&U.defaultView||window;if(E.getSelection){var A=E.getSelection(),F=f.textContent.length,et=Math.min(h.start,F),Ct=h.end===void 0?et:Math.min(h.end,F);!A.extend&&et>Ct&&(c=Ct,Ct=et,et=c);var g=Vs(f,et),p=Vs(f,Ct);if(g&&p&&(A.rangeCount!==1||A.anchorNode!==g.node||A.anchorOffset!==g.offset||A.focusNode!==p.node||A.focusOffset!==p.offset)){var x=U.createRange();x.setStart(g.node,g.offset),A.removeAllRanges(),et>Ct?(A.addRange(x),A.extend(p.node,p.offset)):(x.setEnd(p.node,p.offset),A.addRange(x))}}}}for(U=[],A=f;A=A.parentNode;)A.nodeType===1&&U.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<U.length;f++){var N=U[f];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}yi=!!tr,er=tr=null}finally{bt=u,Q.p=a,D.T=l}}t.current=e,Vt=2}}function sh(){if(Vt===2){Vt=0;var t=Rl,e=Xa,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=D.T,D.T=null;var a=Q.p;Q.p=2;var u=bt;bt|=4;try{$d(t,e.alternate,e)}finally{bt=u,Q.p=a,D.T=l}}Vt=3}}function fh(){if(Vt===4||Vt===3){Vt=0,U0();var t=Rl,e=Xa,l=hl,a=Wd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Vt=5:(Vt=0,Xa=Rl=null,dh(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ml=null),ic(l),e=e.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(cn,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=D.T,u=Q.p,Q.p=2,D.T=null;try{for(var i=t.onRecoverableError,c=0;c<a.length;c++){var f=a[c];i(f.value,{componentStack:f.stack})}}finally{D.T=e,Q.p=u}}(hl&3)!==0&&ni(),Ve(t),u=t.pendingLanes,(l&261930)!==0&&(u&42)!==0?t===Yo?Ln++:(Ln=0,Yo=t):Ln=0,Xn(0)}}function dh(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,En(e)))}function ni(){return rh(),sh(),fh(),hh()}function hh(){if(Vt!==5)return!1;var t=Rl,e=Go;Go=0;var l=ic(hl),a=D.T,u=Q.p;try{Q.p=32>l?32:l,D.T=null,l=qo,qo=null;var i=Rl,c=hl;if(Vt=0,Xa=Rl=null,hl=0,(bt&6)!==0)throw Error(r(331));var f=bt;if(bt|=4,Jd(i.current),Zd(i,i.current,c,l),bt=f,Xn(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(cn,i)}catch{}return!0}finally{Q.p=u,D.T=a,dh(t,e)}}function mh(t,e,l){e=Me(l,e),e=xo(t.stateNode,e,2),t=zl(t,e,2),t!==null&&(rn(t,2),Ve(t))}function Tt(t,e,l){if(t.tag===3)mh(t,t,l);else for(;e!==null;){if(e.tag===3){mh(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ml===null||!Ml.has(a))){t=Me(l,t),l=pd(2),a=zl(e,l,2),a!==null&&(yd(l,a,e,t),rn(a,2),Ve(a));break}}e=e.return}}function Qo(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new cy;var u=new Set;a.set(e,u)}else u=a.get(e),u===void 0&&(u=new Set,a.set(e,u));u.has(l)||(Bo=!0,u.add(l),t=dy.bind(null,t,e,l),e.then(t,t))}function dy(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,Ot===t&&(dt&l)===l&&(Bt===4||Bt===3&&(dt&62914560)===dt&&300>pe()-Iu?(bt&2)===0&&Qa(t,0):wo|=l,La===dt&&(La=0)),Ve(t)}function ph(t,e){e===0&&(e=os()),t=kl(t,e),t!==null&&(rn(t,e),Ve(t))}function hy(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),ph(t,l)}function my(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,u=t.memoizedState;u!==null&&(l=u.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(e),ph(t,l)}function py(t,e){return lc(t,e)}var ui=null,Va=null,Zo=!1,ii=!1,Vo=!1,Hl=0;function Ve(t){t!==Va&&t.next===null&&(Va===null?ui=Va=t:Va=Va.next=t),ii=!0,Zo||(Zo=!0,gy())}function Xn(t,e){if(!Vo&&ii){Vo=!0;do for(var l=!1,a=ui;a!==null;){if(t!==0){var u=a.pendingLanes;if(u===0)var i=0;else{var c=a.suspendedLanes,f=a.pingedLanes;i=(1<<31-ge(42|t)+1)-1,i&=u&~(c&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,xh(a,i))}else i=dt,i=su(a,a===Ot?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||on(a,i)||(l=!0,xh(a,i));a=a.next}while(l);Vo=!1}}function yy(){yh()}function yh(){ii=Zo=!1;var t=0;Hl!==0&&Cy()&&(t=Hl);for(var e=pe(),l=null,a=ui;a!==null;){var u=a.next,i=gh(a,e);i===0?(a.next=null,l===null?ui=u:l.next=u,u===null&&(Va=l)):(l=a,(t!==0||(i&3)!==0)&&(ii=!0)),a=u}Vt!==0&&Vt!==5||Xn(t),Hl!==0&&(Hl=0)}function gh(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,u=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var c=31-ge(i),f=1<<c,h=u[c];h===-1?((f&l)===0||(f&a)!==0)&&(u[c]=X0(f,e)):h<=e&&(t.expiredLanes|=f),i&=~f}if(e=Ot,l=dt,l=su(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(Et===2||Et===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&ac(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||on(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&ac(a),ic(l)){case 2:case 8:l=is;break;case 32:l=iu;break;case 268435456:l=cs;break;default:l=iu}return a=vh.bind(null,t),l=lc(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&ac(a),t.callbackPriority=2,t.callbackNode=null,2}function vh(t,e){if(Vt!==0&&Vt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(ni()&&t.callbackNode!==l)return null;var a=dt;return a=su(t,t===Ot?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(Pd(t,a,e),gh(t,pe()),t.callbackNode!=null&&t.callbackNode===l?vh.bind(null,t):null)}function xh(t,e){if(ni())return null;Pd(t,e,!0)}function gy(){Dy(function(){(bt&6)!==0?lc(us,yy):yh()})}function Ko(){if(Hl===0){var t=Ma;t===0&&(t=cu,cu<<=1,(cu&261888)===0&&(cu=256)),Hl=t}return Hl}function bh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:mu(""+t)}function Sh(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function vy(t,e,l,a,u){if(e==="submit"&&l&&l.stateNode===u){var i=bh((u[ce]||null).action),c=a.submitter;c&&(e=(e=c[ce]||null)?bh(e.formAction):c.getAttribute("formAction"),e!==null&&(i=e,c=null));var f=new vu("action","action",null,a,u);t.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Hl!==0){var h=c?Sh(u,c):new FormData(u);ho(l,{pending:!0,data:h,method:u.method,action:i},null,h)}}else typeof i=="function"&&(f.preventDefault(),h=c?Sh(u,c):new FormData(u),ho(l,{pending:!0,data:h,method:u.method,action:i},i,h))},currentTarget:u}]})}}for(var Jo=0;Jo<Dc.length;Jo++){var ko=Dc[Jo],xy=ko.toLowerCase(),by=ko[0].toUpperCase()+ko.slice(1);Ge(xy,"on"+by)}Ge(Ws,"onAnimationEnd"),Ge(Is,"onAnimationIteration"),Ge(Ps,"onAnimationStart"),Ge("dblclick","onDoubleClick"),Ge("focusin","onFocus"),Ge("focusout","onBlur"),Ge(Bp,"onTransitionRun"),Ge(wp,"onTransitionStart"),Ge($p,"onTransitionCancel"),Ge(tf,"onTransitionEnd"),ga("onMouseEnter",["mouseout","mouseover"]),ga("onMouseLeave",["mouseout","mouseover"]),ga("onPointerEnter",["pointerout","pointerover"]),ga("onPointerLeave",["pointerout","pointerover"]),Zl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Zl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Zl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Zl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Zl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Zl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qn));function jh(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],u=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var c=a.length-1;0<=c;c--){var f=a[c],h=f.instance,b=f.currentTarget;if(f=f.listener,h!==i&&u.isPropagationStopped())break t;i=f,u.currentTarget=b;try{i(u)}catch(_){Su(_)}u.currentTarget=null,i=h}else for(c=0;c<a.length;c++){if(f=a[c],h=f.instance,b=f.currentTarget,f=f.listener,h!==i&&u.isPropagationStopped())break t;i=f,u.currentTarget=b;try{i(u)}catch(_){Su(_)}u.currentTarget=null,i=h}}}}function ft(t,e){var l=e[cc];l===void 0&&(l=e[cc]=new Set);var a=t+"__bubble";l.has(a)||(Eh(e,t,2,!1),l.add(a))}function Fo(t,e,l){var a=0;e&&(a|=4),Eh(l,t,a,e)}var ci="_reactListening"+Math.random().toString(36).slice(2);function Wo(t){if(!t[ci]){t[ci]=!0,ps.forEach(function(l){l!=="selectionchange"&&(Sy.has(l)||Fo(l,!1,t),Fo(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ci]||(e[ci]=!0,Fo("selectionchange",!1,e))}}function Eh(t,e,l,a){switch(Ih(e)){case 2:var u=ky;break;case 8:u=Fy;break;default:u=dr}l=u.bind(null,e,l,t),u=void 0,!yc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),a?u!==void 0?t.addEventListener(e,l,{capture:!0,passive:u}):t.addEventListener(e,l,!0):u!==void 0?t.addEventListener(e,l,{passive:u}):t.addEventListener(e,l,!1)}function Io(t,e,l,a,u){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var f=a.stateNode.containerInfo;if(f===u)break;if(c===4)for(c=a.return;c!==null;){var h=c.tag;if((h===3||h===4)&&c.stateNode.containerInfo===u)return;c=c.return}for(;f!==null;){if(c=ma(f),c===null)return;if(h=c.tag,h===5||h===6||h===26||h===27){a=i=c;continue t}f=f.parentNode}}a=a.return}Cs(function(){var b=i,_=mc(l),U=[];t:{var E=ef.get(t);if(E!==void 0){var A=vu,F=t;switch(t){case"keypress":if(yu(l)===0)break t;case"keydown":case"keyup":A=mp;break;case"focusin":F="focus",A=bc;break;case"focusout":F="blur",A=bc;break;case"beforeblur":case"afterblur":A=bc;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=_s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=lp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=gp;break;case Ws:case Is:case Ps:A=up;break;case tf:A=xp;break;case"scroll":case"scrollend":A=tp;break;case"wheel":A=Sp;break;case"copy":case"cut":case"paste":A=cp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Rs;break;case"toggle":case"beforetoggle":A=Ep}var et=(e&4)!==0,Ct=!et&&(t==="scroll"||t==="scrollend"),g=et?E!==null?E+"Capture":null:E;et=[];for(var p=b,x;p!==null;){var N=p;if(x=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||x===null||g===null||(N=dn(p,g),N!=null&&et.push(Zn(p,N,x))),Ct)break;p=p.return}0<et.length&&(E=new A(E,F,null,l,_),U.push({event:E,listeners:et}))}}if((e&7)===0){t:{if(E=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",E&&l!==hc&&(F=l.relatedTarget||l.fromElement)&&(ma(F)||F[ha]))break t;if((A||E)&&(E=_.window===_?_:(E=_.ownerDocument)?E.defaultView||E.parentWindow:window,A?(F=l.relatedTarget||l.toElement,A=b,F=F?ma(F):null,F!==null&&(Ct=j(F),et=F.tag,F!==Ct||et!==5&&et!==27&&et!==6)&&(F=null)):(A=null,F=b),A!==F)){if(et=_s,N="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(et=Rs,N="onPointerLeave",g="onPointerEnter",p="pointer"),Ct=A==null?E:fn(A),x=F==null?E:fn(F),E=new et(N,p+"leave",A,l,_),E.target=Ct,E.relatedTarget=x,N=null,ma(_)===b&&(et=new et(g,p+"enter",F,l,_),et.target=x,et.relatedTarget=Ct,N=et),Ct=N,A&&F)e:{for(et=jy,g=A,p=F,x=0,N=g;N;N=et(N))x++;N=0;for(var P=p;P;P=et(P))N++;for(;0<x-N;)g=et(g),x--;for(;0<N-x;)p=et(p),N--;for(;x--;){if(g===p||p!==null&&g===p.alternate){et=g;break e}g=et(g),p=et(p)}et=null}else et=null;A!==null&&Th(U,E,A,et,!1),F!==null&&Ct!==null&&Th(U,Ct,F,et,!0)}}t:{if(E=b?fn(b):window,A=E.nodeName&&E.nodeName.toLowerCase(),A==="select"||A==="input"&&E.type==="file")var vt=qs;else if($s(E))if(Ys)vt=Np;else{vt=Mp;var I=_p}else A=E.nodeName,!A||A.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?b&&dc(b.elementType)&&(vt=qs):vt=Rp;if(vt&&(vt=vt(t,b))){Gs(U,vt,l,_);break t}I&&I(t,E,b),t==="focusout"&&b&&E.type==="number"&&b.memoizedProps.value!=null&&fc(E,"number",E.value)}switch(I=b?fn(b):window,t){case"focusin":($s(I)||I.contentEditable==="true")&&(Ea=I,Ac=b,bn=null);break;case"focusout":bn=Ac=Ea=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,ks(U,l,_);break;case"selectionchange":if(Up)break;case"keydown":case"keyup":ks(U,l,_)}var ct;if(jc)t:{switch(t){case"compositionstart":var ht="onCompositionStart";break t;case"compositionend":ht="onCompositionEnd";break t;case"compositionupdate":ht="onCompositionUpdate";break t}ht=void 0}else ja?Bs(t,l)&&(ht="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(ht="onCompositionStart");ht&&(Ns&&l.locale!=="ko"&&(ja||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&ja&&(ct=Os()):(vl=_,gc="value"in vl?vl.value:vl.textContent,ja=!0)),I=oi(b,ht),0<I.length&&(ht=new Ms(ht,t,null,l,_),U.push({event:ht,listeners:I}),ct?ht.data=ct:(ct=ws(l),ct!==null&&(ht.data=ct)))),(ct=zp?Ap(t,l):Cp(t,l))&&(ht=oi(b,"onBeforeInput"),0<ht.length&&(I=new Ms("onBeforeInput","beforeinput",null,l,_),U.push({event:I,listeners:ht}),I.data=ct)),vy(U,t,b,l,_)}jh(U,e)})}function Zn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function oi(t,e){for(var l=e+"Capture",a=[];t!==null;){var u=t,i=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||i===null||(u=dn(t,l),u!=null&&a.unshift(Zn(t,u,i)),u=dn(t,e),u!=null&&a.push(Zn(t,u,i))),t.tag===3)return a;t=t.return}return[]}function jy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Th(t,e,l,a,u){for(var i=e._reactName,c=[];l!==null&&l!==a;){var f=l,h=f.alternate,b=f.stateNode;if(f=f.tag,h!==null&&h===a)break;f!==5&&f!==26&&f!==27||b===null||(h=b,u?(b=dn(l,i),b!=null&&c.unshift(Zn(l,b,h))):u||(b=dn(l,i),b!=null&&c.push(Zn(l,b,h)))),l=l.return}c.length!==0&&t.push({event:e,listeners:c})}var Ey=/\r\n?/g,Ty=/\u0000|\uFFFD/g;function zh(t){return(typeof t=="string"?t:""+t).replace(Ey,`
`).replace(Ty,"")}function Ah(t,e){return e=zh(e),zh(t)===e}function At(t,e,l,a,u,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||xa(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&xa(t,""+a);break;case"className":du(t,"class",a);break;case"tabIndex":du(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":du(t,l,a);break;case"style":zs(t,a,i);break;case"data":if(e!=="object"){du(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=mu(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&At(t,e,"name",u.name,u,null),At(t,e,"formEncType",u.formEncType,u,null),At(t,e,"formMethod",u.formMethod,u,null),At(t,e,"formTarget",u.formTarget,u,null)):(At(t,e,"encType",u.encType,u,null),At(t,e,"method",u.method,u,null),At(t,e,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=mu(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Ie);break;case"onScroll":a!=null&&ft("scroll",t);break;case"onScrollEnd":a!=null&&ft("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=mu(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":ft("beforetoggle",t),ft("toggle",t),fu(t,"popover",a);break;case"xlinkActuate":We(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":We(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":We(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":We(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":We(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":We(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":We(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":We(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":We(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":fu(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=I0.get(l)||l,fu(t,l,a))}}function Po(t,e,l,a,u,i){switch(l){case"style":zs(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"children":typeof a=="string"?xa(t,a):(typeof a=="number"||typeof a=="bigint")&&xa(t,""+a);break;case"onScroll":a!=null&&ft("scroll",t);break;case"onScrollEnd":a!=null&&ft("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Ie);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ys.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(u=l.endsWith("Capture"),e=l.slice(2,u?l.length-7:void 0),i=t[ce]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,u),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,u);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):fu(t,l,a)}}}function ee(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ft("error",t),ft("load",t);var a=!1,u=!1,i;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];if(c!=null)switch(i){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:At(t,e,i,c,l,null)}}u&&At(t,e,"srcSet",l.srcSet,l,null),a&&At(t,e,"src",l.src,l,null);return;case"input":ft("invalid",t);var f=i=c=u=null,h=null,b=null;for(a in l)if(l.hasOwnProperty(a)){var _=l[a];if(_!=null)switch(a){case"name":u=_;break;case"type":c=_;break;case"checked":h=_;break;case"defaultChecked":b=_;break;case"value":i=_;break;case"defaultValue":f=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(137,e));break;default:At(t,e,a,_,l,null)}}Ss(t,i,f,h,b,c,u,!1);return;case"select":ft("invalid",t),a=c=i=null;for(u in l)if(l.hasOwnProperty(u)&&(f=l[u],f!=null))switch(u){case"value":i=f;break;case"defaultValue":c=f;break;case"multiple":a=f;default:At(t,e,u,f,l,null)}e=i,l=c,t.multiple=!!a,e!=null?va(t,!!a,e,!1):l!=null&&va(t,!!a,l,!0);return;case"textarea":ft("invalid",t),i=u=a=null;for(c in l)if(l.hasOwnProperty(c)&&(f=l[c],f!=null))switch(c){case"value":a=f;break;case"defaultValue":u=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:At(t,e,c,f,l,null)}Es(t,a,u,i);return;case"option":for(h in l)if(l.hasOwnProperty(h)&&(a=l[h],a!=null))switch(h){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:At(t,e,h,a,l,null)}return;case"dialog":ft("beforetoggle",t),ft("toggle",t),ft("cancel",t),ft("close",t);break;case"iframe":case"object":ft("load",t);break;case"video":case"audio":for(a=0;a<Qn.length;a++)ft(Qn[a],t);break;case"image":ft("error",t),ft("load",t);break;case"details":ft("toggle",t);break;case"embed":case"source":case"link":ft("error",t),ft("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in l)if(l.hasOwnProperty(b)&&(a=l[b],a!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:At(t,e,b,a,l,null)}return;default:if(dc(e)){for(_ in l)l.hasOwnProperty(_)&&(a=l[_],a!==void 0&&Po(t,e,_,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&At(t,e,f,a,l,null))}function zy(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,i=null,c=null,f=null,h=null,b=null,_=null;for(A in l){var U=l[A];if(l.hasOwnProperty(A)&&U!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":h=U;default:a.hasOwnProperty(A)||At(t,e,A,null,a,U)}}for(var E in a){var A=a[E];if(U=l[E],a.hasOwnProperty(E)&&(A!=null||U!=null))switch(E){case"type":i=A;break;case"name":u=A;break;case"checked":b=A;break;case"defaultChecked":_=A;break;case"value":c=A;break;case"defaultValue":f=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(137,e));break;default:A!==U&&At(t,e,E,A,a,U)}}sc(t,c,f,h,b,_,i,u);return;case"select":A=c=f=E=null;for(i in l)if(h=l[i],l.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":A=h;default:a.hasOwnProperty(i)||At(t,e,i,null,a,h)}for(u in a)if(i=a[u],h=l[u],a.hasOwnProperty(u)&&(i!=null||h!=null))switch(u){case"value":E=i;break;case"defaultValue":f=i;break;case"multiple":c=i;default:i!==h&&At(t,e,u,i,a,h)}e=f,l=c,a=A,E!=null?va(t,!!l,E,!1):!!a!=!!l&&(e!=null?va(t,!!l,e,!0):va(t,!!l,l?[]:"",!1));return;case"textarea":A=E=null;for(f in l)if(u=l[f],l.hasOwnProperty(f)&&u!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:At(t,e,f,null,a,u)}for(c in a)if(u=a[c],i=l[c],a.hasOwnProperty(c)&&(u!=null||i!=null))switch(c){case"value":E=u;break;case"defaultValue":A=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==i&&At(t,e,c,u,a,i)}js(t,E,A);return;case"option":for(var F in l)if(E=l[F],l.hasOwnProperty(F)&&E!=null&&!a.hasOwnProperty(F))switch(F){case"selected":t.selected=!1;break;default:At(t,e,F,null,a,E)}for(h in a)if(E=a[h],A=l[h],a.hasOwnProperty(h)&&E!==A&&(E!=null||A!=null))switch(h){case"selected":t.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:At(t,e,h,E,a,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in l)E=l[et],l.hasOwnProperty(et)&&E!=null&&!a.hasOwnProperty(et)&&At(t,e,et,null,a,E);for(b in a)if(E=a[b],A=l[b],a.hasOwnProperty(b)&&E!==A&&(E!=null||A!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(137,e));break;default:At(t,e,b,E,a,A)}return;default:if(dc(e)){for(var Ct in l)E=l[Ct],l.hasOwnProperty(Ct)&&E!==void 0&&!a.hasOwnProperty(Ct)&&Po(t,e,Ct,void 0,a,E);for(_ in a)E=a[_],A=l[_],!a.hasOwnProperty(_)||E===A||E===void 0&&A===void 0||Po(t,e,_,E,a,A);return}}for(var g in l)E=l[g],l.hasOwnProperty(g)&&E!=null&&!a.hasOwnProperty(g)&&At(t,e,g,null,a,E);for(U in a)E=a[U],A=l[U],!a.hasOwnProperty(U)||E===A||E==null&&A==null||At(t,e,U,E,a,A)}function Ch(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ay(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var u=l[a],i=u.transferSize,c=u.initiatorType,f=u.duration;if(i&&f&&Ch(c)){for(c=0,f=u.responseEnd,a+=1;a<l.length;a++){var h=l[a],b=h.startTime;if(b>f)break;var _=h.transferSize,U=h.initiatorType;_&&Ch(U)&&(h=h.responseEnd,c+=_*(h<f?1:(f-b)/(h-b)))}if(--a,e+=8*(i+c)/(u.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var tr=null,er=null;function ri(t){return t.nodeType===9?t:t.ownerDocument}function Oh(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dh(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function lr(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ar=null;function Cy(){var t=window.event;return t&&t.type==="popstate"?t===ar?!1:(ar=t,!0):(ar=null,!1)}var _h=typeof setTimeout=="function"?setTimeout:void 0,Oy=typeof clearTimeout=="function"?clearTimeout:void 0,Mh=typeof Promise=="function"?Promise:void 0,Dy=typeof queueMicrotask=="function"?queueMicrotask:typeof Mh<"u"?function(t){return Mh.resolve(null).then(t).catch(_y)}:_h;function _y(t){setTimeout(function(){throw t})}function Ul(t){return t==="head"}function Rh(t,e){var l=e,a=0;do{var u=l.nextSibling;if(t.removeChild(l),u&&u.nodeType===8)if(l=u.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(u),Fa(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Vn(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,Vn(l);for(var i=l.firstChild;i;){var c=i.nextSibling,f=i.nodeName;i[sn]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=c}}else l==="body"&&Vn(t.ownerDocument.body);l=u}while(l);Fa(e)}function Nh(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function nr(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":nr(l),oc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function My(t,e,l,a){for(;t.nodeType===1;){var u=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[sn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Be(t.nextSibling),t===null)break}return null}function Ry(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Be(t.nextSibling),t===null))return null;return t}function Hh(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Be(t.nextSibling),t===null))return null;return t}function ur(t){return t.data==="$?"||t.data==="$~"}function ir(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ny(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Be(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var cr=null;function Uh(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Be(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function Bh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function wh(t,e,l){switch(e=ri(l),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Vn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);oc(t)}var we=new Map,$h=new Set;function si(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ml=Q.d;Q.d={f:Hy,r:Uy,D:By,C:wy,L:$y,m:Gy,X:Yy,S:qy,M:Ly};function Hy(){var t=ml.f(),e=ei();return t||e}function Uy(t){var e=pa(t);e!==null&&e.tag===5&&e.type==="form"?ed(e):ml.r(t)}var Ka=typeof document>"u"?null:document;function Gh(t,e,l){var a=Ka;if(a&&typeof e=="string"&&e){var u=De(e);u='link[rel="'+t+'"][href="'+u+'"]',typeof l=="string"&&(u+='[crossorigin="'+l+'"]'),$h.has(u)||($h.add(u),t={rel:t,crossOrigin:l,href:e},a.querySelector(u)===null&&(e=a.createElement("link"),ee(e,"link",t),Kt(e),a.head.appendChild(e)))}}function By(t){ml.D(t),Gh("dns-prefetch",t,null)}function wy(t,e){ml.C(t,e),Gh("preconnect",t,e)}function $y(t,e,l){ml.L(t,e,l);var a=Ka;if(a&&t&&e){var u='link[rel="preload"][as="'+De(e)+'"]';e==="image"&&l&&l.imageSrcSet?(u+='[imagesrcset="'+De(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(u+='[imagesizes="'+De(l.imageSizes)+'"]')):u+='[href="'+De(t)+'"]';var i=u;switch(e){case"style":i=Ja(t);break;case"script":i=ka(t)}we.has(i)||(t=O({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),we.set(i,t),a.querySelector(u)!==null||e==="style"&&a.querySelector(Kn(i))||e==="script"&&a.querySelector(Jn(i))||(e=a.createElement("link"),ee(e,"link",t),Kt(e),a.head.appendChild(e)))}}function Gy(t,e){ml.m(t,e);var l=Ka;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+De(a)+'"][href="'+De(t)+'"]',i=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ka(t)}if(!we.has(i)&&(t=O({rel:"modulepreload",href:t},e),we.set(i,t),l.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Jn(i)))return}a=l.createElement("link"),ee(a,"link",t),Kt(a),l.head.appendChild(a)}}}function qy(t,e,l){ml.S(t,e,l);var a=Ka;if(a&&t){var u=ya(a).hoistableStyles,i=Ja(t);e=e||"default";var c=u.get(i);if(!c){var f={loading:0,preload:null};if(c=a.querySelector(Kn(i)))f.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":e},l),(l=we.get(i))&&or(t,l);var h=c=a.createElement("link");Kt(h),ee(h,"link",t),h._p=new Promise(function(b,_){h.onload=b,h.onerror=_}),h.addEventListener("load",function(){f.loading|=1}),h.addEventListener("error",function(){f.loading|=2}),f.loading|=4,fi(c,e,a)}c={type:"stylesheet",instance:c,count:1,state:f},u.set(i,c)}}}function Yy(t,e){ml.X(t,e);var l=Ka;if(l&&t){var a=ya(l).hoistableScripts,u=ka(t),i=a.get(u);i||(i=l.querySelector(Jn(u)),i||(t=O({src:t,async:!0},e),(e=we.get(u))&&rr(t,e),i=l.createElement("script"),Kt(i),ee(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function Ly(t,e){ml.M(t,e);var l=Ka;if(l&&t){var a=ya(l).hoistableScripts,u=ka(t),i=a.get(u);i||(i=l.querySelector(Jn(u)),i||(t=O({src:t,async:!0,type:"module"},e),(e=we.get(u))&&rr(t,e),i=l.createElement("script"),Kt(i),ee(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function qh(t,e,l,a){var u=(u=ut.current)?si(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Ja(l.href),l=ya(u).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Ja(l.href);var i=ya(u).hoistableStyles,c=i.get(t);if(c||(u=u.ownerDocument||u,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,c),(i=u.querySelector(Kn(t)))&&!i._p&&(c.instance=i,c.state.loading=5),we.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},we.set(t,l),i||Xy(u,t,l,c.state))),e&&a===null)throw Error(r(528,""));return c}if(e&&a!==null)throw Error(r(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=ka(l),l=ya(u).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ja(t){return'href="'+De(t)+'"'}function Kn(t){return'link[rel="stylesheet"]['+t+"]"}function Yh(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function Xy(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),ee(e,"link",l),Kt(e),t.head.appendChild(e))}function ka(t){return'[src="'+De(t)+'"]'}function Jn(t){return"script[async]"+t}function Lh(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+De(l.href)+'"]');if(a)return e.instance=a,Kt(a),a;var u=O({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Kt(a),ee(a,"style",u),fi(a,l.precedence,t),e.instance=a;case"stylesheet":u=Ja(l.href);var i=t.querySelector(Kn(u));if(i)return e.state.loading|=4,e.instance=i,Kt(i),i;a=Yh(l),(u=we.get(u))&&or(a,u),i=(t.ownerDocument||t).createElement("link"),Kt(i);var c=i;return c._p=new Promise(function(f,h){c.onload=f,c.onerror=h}),ee(i,"link",a),e.state.loading|=4,fi(i,l.precedence,t),e.instance=i;case"script":return i=ka(l.src),(u=t.querySelector(Jn(i)))?(e.instance=u,Kt(u),u):(a=l,(u=we.get(i))&&(a=O({},l),rr(a,u)),t=t.ownerDocument||t,u=t.createElement("script"),Kt(u),ee(u,"link",a),t.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,fi(a,l.precedence,t));return e.instance}function fi(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,i=u,c=0;c<a.length;c++){var f=a[c];if(f.dataset.precedence===e)i=f;else if(i!==u)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function or(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function rr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var di=null;function Xh(t,e,l){if(di===null){var a=new Map,u=di=new Map;u.set(l,a)}else u=di,a=u.get(l),a||(a=new Map,u.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),u=0;u<l.length;u++){var i=l[u];if(!(i[sn]||i[Wt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(e)||"";c=t+c;var f=a.get(c);f?f.push(i):a.set(c,[i])}}return a}function Qh(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Qy(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Zh(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Zy(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var u=Ja(a.href),i=e.querySelector(Kn(u));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=hi.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=i,Kt(i);return}i=e.ownerDocument||e,a=Yh(a),(u=we.get(u))&&or(a,u),i=i.createElement("link"),Kt(i);var c=i;c._p=new Promise(function(f,h){c.onload=f,c.onerror=h}),ee(i,"link",a),l.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=hi.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var sr=0;function Vy(t,e){return t.stylesheets&&t.count===0&&pi(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&pi(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&sr===0&&(sr=62500*Ay());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&pi(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>sr?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(u)}}:null}function hi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mi=null;function pi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mi=new Map,e.forEach(Ky,t),mi=null,hi.call(t))}function Ky(t,e){if(!(e.state.loading&4)){var l=mi.get(t);if(l)var a=l.get(null);else{l=new Map,mi.set(t,l);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<u.length;i++){var c=u[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),a=c)}a&&l.set(null,a)}u=e.instance,c=u.getAttribute("data-precedence"),i=l.get(c)||a,i===a&&l.set(null,u),l.set(c,u),this.count++,a=hi.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),i?i.parentNode.insertBefore(u,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),e.state.loading|=4}}var kn={$$typeof:X,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function Jy(t,e,l,a,u,i,c,f,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nc(0),this.hiddenUpdates=nc(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Vh(t,e,l,a,u,i,c,f,h,b,_,U){return t=new Jy(t,e,l,c,h,b,_,U,f),e=1,i===!0&&(e|=24),i=xe(3,null,null,e),t.current=i,i.stateNode=t,e=Lc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},Vc(i),t}function Kh(t){return t?(t=Aa,t):Aa}function Jh(t,e,l,a,u,i){u=Kh(u),a.context===null?a.context=u:a.pendingContext=u,a=Tl(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=zl(t,a,e),l!==null&&(he(l,t,e),Cn(l,t,e))}function kh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function fr(t,e){kh(t,e),(t=t.alternate)&&kh(t,e)}function Fh(t){if(t.tag===13||t.tag===31){var e=kl(t,67108864);e!==null&&he(e,t,67108864),fr(t,67108864)}}function Wh(t){if(t.tag===13||t.tag===31){var e=Te();e=uc(e);var l=kl(t,e);l!==null&&he(l,t,e),fr(t,e)}}var yi=!0;function ky(t,e,l,a){var u=D.T;D.T=null;var i=Q.p;try{Q.p=2,dr(t,e,l,a)}finally{Q.p=i,D.T=u}}function Fy(t,e,l,a){var u=D.T;D.T=null;var i=Q.p;try{Q.p=8,dr(t,e,l,a)}finally{Q.p=i,D.T=u}}function dr(t,e,l,a){if(yi){var u=hr(a);if(u===null)Io(t,e,a,gi,l),Ph(t,a);else if(Iy(u,t,e,l,a))a.stopPropagation();else if(Ph(t,a),e&4&&-1<Wy.indexOf(t)){for(;u!==null;){var i=pa(u);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Ql(i.pendingLanes);if(c!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;c;){var h=1<<31-ge(c);f.entanglements[1]|=h,c&=~h}Ve(i),(bt&6)===0&&(Pu=pe()+500,Xn(0))}}break;case 31:case 13:f=kl(i,2),f!==null&&he(f,i,2),ei(),fr(i,2)}if(i=hr(a),i===null&&Io(t,e,a,gi,l),i===u)break;u=i}u!==null&&a.stopPropagation()}else Io(t,e,a,null,l)}}function hr(t){return t=mc(t),mr(t)}var gi=null;function mr(t){if(gi=null,t=ma(t),t!==null){var e=j(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=C(e),t!==null)return t;t=null}else if(l===31){if(t=B(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return gi=t,null}function Ih(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(B0()){case us:return 2;case is:return 8;case iu:case w0:return 32;case cs:return 268435456;default:return 32}default:return 32}}var pr=!1,Bl=null,wl=null,$l=null,Fn=new Map,Wn=new Map,Gl=[],Wy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ph(t,e){switch(t){case"focusin":case"focusout":Bl=null;break;case"dragenter":case"dragleave":wl=null;break;case"mouseover":case"mouseout":$l=null;break;case"pointerover":case"pointerout":Fn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(e.pointerId)}}function In(t,e,l,a,u,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[u]},e!==null&&(e=pa(e),e!==null&&Fh(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),t)}function Iy(t,e,l,a,u){switch(e){case"focusin":return Bl=In(Bl,t,e,l,a,u),!0;case"dragenter":return wl=In(wl,t,e,l,a,u),!0;case"mouseover":return $l=In($l,t,e,l,a,u),!0;case"pointerover":var i=u.pointerId;return Fn.set(i,In(Fn.get(i)||null,t,e,l,a,u)),!0;case"gotpointercapture":return i=u.pointerId,Wn.set(i,In(Wn.get(i)||null,t,e,l,a,u)),!0}return!1}function tm(t){var e=ma(t.target);if(e!==null){var l=j(e);if(l!==null){if(e=l.tag,e===13){if(e=C(l),e!==null){t.blockedOn=e,hs(t.priority,function(){Wh(l)});return}}else if(e===31){if(e=B(l),e!==null){t.blockedOn=e,hs(t.priority,function(){Wh(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=hr(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);hc=a,l.target.dispatchEvent(a),hc=null}else return e=pa(l),e!==null&&Fh(e),t.blockedOn=l,!1;e.shift()}return!0}function em(t,e,l){vi(t)&&l.delete(e)}function Py(){pr=!1,Bl!==null&&vi(Bl)&&(Bl=null),wl!==null&&vi(wl)&&(wl=null),$l!==null&&vi($l)&&($l=null),Fn.forEach(em),Wn.forEach(em)}function xi(t,e){t.blockedOn===e&&(t.blockedOn=null,pr||(pr=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Py)))}var bi=null;function lm(t){bi!==t&&(bi=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){bi===t&&(bi=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],u=t[e+2];if(typeof a!="function"){if(mr(a||l)===null)continue;break}var i=pa(l);i!==null&&(t.splice(e,3),e-=3,ho(i,{pending:!0,data:u,method:l.method,action:a},a,u))}}))}function Fa(t){function e(h){return xi(h,t)}Bl!==null&&xi(Bl,t),wl!==null&&xi(wl,t),$l!==null&&xi($l,t),Fn.forEach(e),Wn.forEach(e);for(var l=0;l<Gl.length;l++){var a=Gl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Gl.length&&(l=Gl[0],l.blockedOn===null);)tm(l),l.blockedOn===null&&Gl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var u=l[a],i=l[a+1],c=u[ce]||null;if(typeof i=="function")c||lm(l);else if(c){var f=null;if(i&&i.hasAttribute("formAction")){if(u=i,c=i[ce]||null)f=c.formAction;else if(mr(u)!==null)continue}else f=c.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),lm(l)}}}function am(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return u=c})},focusReset:"manual",scroll:"manual"})}function e(){u!==null&&(u(),u=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),u!==null&&(u(),u=null)}}}function yr(t){this._internalRoot=t}Si.prototype.render=yr.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var l=e.current,a=Te();Jh(l,a,t,e,null,null)},Si.prototype.unmount=yr.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jh(t.current,2,null,t,null,null),ei(),e[ha]=null}};function Si(t){this._internalRoot=t}Si.prototype.unstable_scheduleHydration=function(t){if(t){var e=ds();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Gl.length&&e!==0&&e<Gl[l].priority;l++);Gl.splice(l,0,t),l===0&&tm(t)}};var nm=s.version;if(nm!=="19.2.0")throw Error(r(527,nm,"19.2.0"));Q.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=v(e),t=t!==null?$(t):null,t=t===null?null:t.stateNode,t};var tg={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ji.isDisabled&&ji.supportsFiber)try{cn=ji.inject(tg),ye=ji}catch{}}return tu.createRoot=function(t,e){if(!m(t))throw Error(r(299));var l=!1,a="",u=fd,i=dd,c=hd;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError)),e=Vh(t,1,!1,null,null,l,a,null,u,i,c,am),t[ha]=e.current,Wo(t),new yr(e)},tu.hydrateRoot=function(t,e,l){if(!m(t))throw Error(r(299));var a=!1,u="",i=fd,c=dd,f=hd,h=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(u=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.formState!==void 0&&(h=l.formState)),e=Vh(t,1,!0,e,l??null,a,u,h,i,c,f,am),e.context=Kh(null),l=e.current,a=Te(),a=uc(a),u=Tl(a),u.callback=null,zl(l,u,a),l=a,e.current.lanes=l,rn(e,l),Ve(e),t[ha]=e.current,Wo(t),new Si(e)},tu.version="19.2.0",tu}var mm;function sg(){if(mm)return xr.exports;mm=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(s){console.error(s)}}return n(),xr.exports=rg(),xr.exports}var fg=sg();const dg=Vm(fg);var Ft=function(){return Ft=Object.assign||function(s){for(var d,r=1,m=arguments.length;r<m;r++){d=arguments[r];for(var j in d)Object.prototype.hasOwnProperty.call(d,j)&&(s[j]=d[j])}return s},Ft.apply(this,arguments)};function tn(n,s,d){if(d||arguments.length===2)for(var r=0,m=s.length,j;r<m;r++)(j||!(r in s))&&(j||(j=Array.prototype.slice.call(s,0,r)),j[r]=s[r]);return n.concat(j||Array.prototype.slice.call(s))}var Mt="-ms-",au="-moz-",St="-webkit-",Km="comm",Ki="rule",Qr="decl",hg="@import",Jm="@keyframes",mg="@layer",km=Math.abs,Zr=String.fromCharCode,Nr=Object.assign;function pg(n,s){return kt(n,0)^45?(((s<<2^kt(n,0))<<2^kt(n,1))<<2^kt(n,2))<<2^kt(n,3):0}function Fm(n){return n.trim()}function pl(n,s){return(n=s.exec(n))?n[0]:n}function ot(n,s,d){return n.replace(s,d)}function Bi(n,s,d){return n.indexOf(s,d)}function kt(n,s){return n.charCodeAt(s)|0}function en(n,s,d){return n.slice(s,d)}function Ke(n){return n.length}function Wm(n){return n.length}function lu(n,s){return s.push(n),n}function yg(n,s){return n.map(s).join("")}function pm(n,s){return n.filter(function(d){return!pl(d,s)})}var Ji=1,ln=1,Im=0,$e=0,Zt=0,un="";function ki(n,s,d,r,m,j,C,B){return{value:n,root:s,parent:d,type:r,props:m,children:j,line:Ji,column:ln,length:C,return:"",siblings:B}}function Yl(n,s){return Nr(ki("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},s)}function Wa(n){for(;n.root;)n=Yl(n.root,{children:[n]});lu(n,n.siblings)}function gg(){return Zt}function vg(){return Zt=$e>0?kt(un,--$e):0,ln--,Zt===10&&(ln=1,Ji--),Zt}function Le(){return Zt=$e<Im?kt(un,$e++):0,ln++,Zt===10&&(ln=1,Ji++),Zt}function sa(){return kt(un,$e)}function wi(){return $e}function Fi(n,s){return en(un,n,s)}function Hr(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xg(n){return Ji=ln=1,Im=Ke(un=n),$e=0,[]}function bg(n){return un="",n}function Er(n){return Fm(Fi($e-1,Ur(n===91?n+2:n===40?n+1:n)))}function Sg(n){for(;(Zt=sa())&&Zt<33;)Le();return Hr(n)>2||Hr(Zt)>3?"":" "}function jg(n,s){for(;--s&&Le()&&!(Zt<48||Zt>102||Zt>57&&Zt<65||Zt>70&&Zt<97););return Fi(n,wi()+(s<6&&sa()==32&&Le()==32))}function Ur(n){for(;Le();)switch(Zt){case n:return $e;case 34:case 39:n!==34&&n!==39&&Ur(Zt);break;case 40:n===41&&Ur(n);break;case 92:Le();break}return $e}function Eg(n,s){for(;Le()&&n+Zt!==57;)if(n+Zt===84&&sa()===47)break;return"/*"+Fi(s,$e-1)+"*"+Zr(n===47?n:Le())}function Tg(n){for(;!Hr(sa());)Le();return Fi(n,$e)}function zg(n){return bg($i("",null,null,null,[""],n=xg(n),0,[0],n))}function $i(n,s,d,r,m,j,C,B,T){for(var v=0,$=0,O=C,z=0,H=0,Y=0,G=1,L=1,J=1,w=0,X="",M=m,K=j,W=r,q=X;L;)switch(Y=w,w=Le()){case 40:if(Y!=108&&kt(q,O-1)==58){Bi(q+=ot(Er(w),"&","&\f"),"&\f",km(v?B[v-1]:0))!=-1&&(J=-1);break}case 34:case 39:case 91:q+=Er(w);break;case 9:case 10:case 13:case 32:q+=Sg(Y);break;case 92:q+=jg(wi()-1,7);continue;case 47:switch(sa()){case 42:case 47:lu(Ag(Eg(Le(),wi()),s,d,T),T);break;default:q+="/"}break;case 123*G:B[v++]=Ke(q)*J;case 125*G:case 59:case 0:switch(w){case 0:case 125:L=0;case 59+$:J==-1&&(q=ot(q,/\f/g,"")),H>0&&Ke(q)-O&&lu(H>32?gm(q+";",r,d,O-1,T):gm(ot(q," ","")+";",r,d,O-2,T),T);break;case 59:q+=";";default:if(lu(W=ym(q,s,d,v,$,m,B,X,M=[],K=[],O,j),j),w===123)if($===0)$i(q,s,W,W,M,j,O,B,K);else switch(z===99&&kt(q,3)===110?100:z){case 100:case 108:case 109:case 115:$i(n,W,W,r&&lu(ym(n,W,W,0,0,m,B,X,m,M=[],O,K),K),m,K,O,B,r?M:K);break;default:$i(q,W,W,W,[""],K,0,B,K)}}v=$=H=0,G=J=1,X=q="",O=C;break;case 58:O=1+Ke(q),H=Y;default:if(G<1){if(w==123)--G;else if(w==125&&G++==0&&vg()==125)continue}switch(q+=Zr(w),w*G){case 38:J=$>0?1:(q+="\f",-1);break;case 44:B[v++]=(Ke(q)-1)*J,J=1;break;case 64:sa()===45&&(q+=Er(Le())),z=sa(),$=O=Ke(X=q+=Tg(wi())),w++;break;case 45:Y===45&&Ke(q)==2&&(G=0)}}return j}function ym(n,s,d,r,m,j,C,B,T,v,$,O){for(var z=m-1,H=m===0?j:[""],Y=Wm(H),G=0,L=0,J=0;G<r;++G)for(var w=0,X=en(n,z+1,z=km(L=C[G])),M=n;w<Y;++w)(M=Fm(L>0?H[w]+" "+X:ot(X,/&\f/g,H[w])))&&(T[J++]=M);return ki(n,s,d,m===0?Ki:B,T,v,$,O)}function Ag(n,s,d,r){return ki(n,s,d,Km,Zr(gg()),en(n,2,-2),0,r)}function gm(n,s,d,r,m){return ki(n,s,d,Qr,en(n,0,r),en(n,r+1,-1),r,m)}function Pm(n,s,d){switch(pg(n,s)){case 5103:return St+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return St+n+n;case 4789:return au+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return St+n+au+n+Mt+n+n;case 5936:switch(kt(n,s+11)){case 114:return St+n+Mt+ot(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return St+n+Mt+ot(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return St+n+Mt+ot(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return St+n+Mt+n+n;case 6165:return St+n+Mt+"flex-"+n+n;case 5187:return St+n+ot(n,/(\w+).+(:[^]+)/,St+"box-$1$2"+Mt+"flex-$1$2")+n;case 5443:return St+n+Mt+"flex-item-"+ot(n,/flex-|-self/g,"")+(pl(n,/flex-|baseline/)?"":Mt+"grid-row-"+ot(n,/flex-|-self/g,""))+n;case 4675:return St+n+Mt+"flex-line-pack"+ot(n,/align-content|flex-|-self/g,"")+n;case 5548:return St+n+Mt+ot(n,"shrink","negative")+n;case 5292:return St+n+Mt+ot(n,"basis","preferred-size")+n;case 6060:return St+"box-"+ot(n,"-grow","")+St+n+Mt+ot(n,"grow","positive")+n;case 4554:return St+ot(n,/([^-])(transform)/g,"$1"+St+"$2")+n;case 6187:return ot(ot(ot(n,/(zoom-|grab)/,St+"$1"),/(image-set)/,St+"$1"),n,"")+n;case 5495:case 3959:return ot(n,/(image-set\([^]*)/,St+"$1$`$1");case 4968:return ot(ot(n,/(.+:)(flex-)?(.*)/,St+"box-pack:$3"+Mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+St+n+n;case 4200:if(!pl(n,/flex-|baseline/))return Mt+"grid-column-align"+en(n,s)+n;break;case 2592:case 3360:return Mt+ot(n,"template-","")+n;case 4384:case 3616:return d&&d.some(function(r,m){return s=m,pl(r.props,/grid-\w+-end/)})?~Bi(n+(d=d[s].value),"span",0)?n:Mt+ot(n,"-start","")+n+Mt+"grid-row-span:"+(~Bi(d,"span",0)?pl(d,/\d+/):+pl(d,/\d+/)-+pl(n,/\d+/))+";":Mt+ot(n,"-start","")+n;case 4896:case 4128:return d&&d.some(function(r){return pl(r.props,/grid-\w+-start/)})?n:Mt+ot(ot(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ot(n,/(.+)-inline(.+)/,St+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ke(n)-1-s>6)switch(kt(n,s+1)){case 109:if(kt(n,s+4)!==45)break;case 102:return ot(n,/(.+:)(.+)-([^]+)/,"$1"+St+"$2-$3$1"+au+(kt(n,s+3)==108?"$3":"$2-$3"))+n;case 115:return~Bi(n,"stretch",0)?Pm(ot(n,"stretch","fill-available"),s,d)+n:n}break;case 5152:case 5920:return ot(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,m,j,C,B,T,v){return Mt+m+":"+j+v+(C?Mt+m+"-span:"+(B?T:+T-+j)+v:"")+n});case 4949:if(kt(n,s+6)===121)return ot(n,":",":"+St)+n;break;case 6444:switch(kt(n,kt(n,14)===45?18:11)){case 120:return ot(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+St+(kt(n,14)===45?"inline-":"")+"box$3$1"+St+"$2$3$1"+Mt+"$2box$3")+n;case 100:return ot(n,":",":"+Mt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ot(n,"scroll-","scroll-snap-")+n}return n}function Yi(n,s){for(var d="",r=0;r<n.length;r++)d+=s(n[r],r,n,s)||"";return d}function Cg(n,s,d,r){switch(n.type){case mg:if(n.children.length)break;case hg:case Qr:return n.return=n.return||n.value;case Km:return"";case Jm:return n.return=n.value+"{"+Yi(n.children,r)+"}";case Ki:if(!Ke(n.value=n.props.join(",")))return""}return Ke(d=Yi(n.children,r))?n.return=n.value+"{"+d+"}":""}function Og(n){var s=Wm(n);return function(d,r,m,j){for(var C="",B=0;B<s;B++)C+=n[B](d,r,m,j)||"";return C}}function Dg(n){return function(s){s.root||(s=s.return)&&n(s)}}function _g(n,s,d,r){if(n.length>-1&&!n.return)switch(n.type){case Qr:n.return=Pm(n.value,n.length,d);return;case Jm:return Yi([Yl(n,{value:ot(n.value,"@","@"+St)})],r);case Ki:if(n.length)return yg(d=n.props,function(m){switch(pl(m,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Wa(Yl(n,{props:[ot(m,/:(read-\w+)/,":"+au+"$1")]})),Wa(Yl(n,{props:[m]})),Nr(n,{props:pm(d,r)});break;case"::placeholder":Wa(Yl(n,{props:[ot(m,/:(plac\w+)/,":"+St+"input-$1")]})),Wa(Yl(n,{props:[ot(m,/:(plac\w+)/,":"+au+"$1")]})),Wa(Yl(n,{props:[ot(m,/:(plac\w+)/,Mt+"input-$1")]})),Wa(Yl(n,{props:[m]})),Nr(n,{props:pm(d,r)});break}return""})}}var Mg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ae={},an=typeof process<"u"&&Ae!==void 0&&(Ae.REACT_APP_SC_ATTR||Ae.SC_ATTR)||"data-styled",t0="active",e0="data-styled-version",Wi="6.1.19",Vr=`/*!sc*/
`,Li=typeof window<"u"&&typeof document<"u",Rg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ae!==void 0&&Ae.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ae.REACT_APP_SC_DISABLE_SPEEDY!==""?Ae.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ae.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ae!==void 0&&Ae.SC_DISABLE_SPEEDY!==void 0&&Ae.SC_DISABLE_SPEEDY!==""&&Ae.SC_DISABLE_SPEEDY!=="false"&&Ae.SC_DISABLE_SPEEDY),Ng={},Ii=Object.freeze([]),nn=Object.freeze({});function l0(n,s,d){return d===void 0&&(d=nn),n.theme!==d.theme&&n.theme||s||d.theme}var a0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Hg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ug=/(^-|-$)/g;function vm(n){return n.replace(Hg,"-").replace(Ug,"")}var Bg=/(a)(d)/gi,Ei=52,xm=function(n){return String.fromCharCode(n+(n>25?39:97))};function Br(n){var s,d="";for(s=Math.abs(n);s>Ei;s=s/Ei|0)d=xm(s%Ei)+d;return(xm(s%Ei)+d).replace(Bg,"$1-$2")}var Tr,n0=5381,Pa=function(n,s){for(var d=s.length;d;)n=33*n^s.charCodeAt(--d);return n},u0=function(n){return Pa(n0,n)};function Kr(n){return Br(u0(n)>>>0)}function wg(n){return n.displayName||n.name||"Component"}function zr(n){return typeof n=="string"&&!0}var i0=typeof Symbol=="function"&&Symbol.for,c0=i0?Symbol.for("react.memo"):60115,$g=i0?Symbol.for("react.forward_ref"):60112,Gg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Yg=((Tr={})[$g]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tr[c0]=o0,Tr);function bm(n){return("type"in(s=n)&&s.type.$$typeof)===c0?o0:"$$typeof"in n?Yg[n.$$typeof]:Gg;var s}var Lg=Object.defineProperty,Xg=Object.getOwnPropertyNames,Sm=Object.getOwnPropertySymbols,Qg=Object.getOwnPropertyDescriptor,Zg=Object.getPrototypeOf,jm=Object.prototype;function r0(n,s,d){if(typeof s!="string"){if(jm){var r=Zg(s);r&&r!==jm&&r0(n,r,d)}var m=Xg(s);Sm&&(m=m.concat(Sm(s)));for(var j=bm(n),C=bm(s),B=0;B<m.length;++B){var T=m[B];if(!(T in qg||d&&d[T]||C&&T in C||j&&T in j)){var v=Qg(s,T);try{Lg(n,T,v)}catch{}}}}return n}function fa(n){return typeof n=="function"}function Jr(n){return typeof n=="object"&&"styledComponentId"in n}function ra(n,s){return n&&s?"".concat(n," ").concat(s):n||s||""}function Xi(n,s){if(n.length===0)return"";for(var d=n[0],r=1;r<n.length;r++)d+=n[r];return d}function nu(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function wr(n,s,d){if(d===void 0&&(d=!1),!d&&!nu(n)&&!Array.isArray(n))return s;if(Array.isArray(s))for(var r=0;r<s.length;r++)n[r]=wr(n[r],s[r]);else if(nu(s))for(var r in s)n[r]=wr(n[r],s[r]);return n}function kr(n,s){Object.defineProperty(n,"toString",{value:s})}function da(n){for(var s=[],d=1;d<arguments.length;d++)s[d-1]=arguments[d];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var Vg=(function(){function n(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return n.prototype.indexOfGroup=function(s){for(var d=0,r=0;r<s;r++)d+=this.groupSizes[r];return d},n.prototype.insertRules=function(s,d){if(s>=this.groupSizes.length){for(var r=this.groupSizes,m=r.length,j=m;s>=j;)if((j<<=1)<0)throw da(16,"".concat(s));this.groupSizes=new Uint32Array(j),this.groupSizes.set(r),this.length=j;for(var C=m;C<j;C++)this.groupSizes[C]=0}for(var B=this.indexOfGroup(s+1),T=(C=0,d.length);C<T;C++)this.tag.insertRule(B,d[C])&&(this.groupSizes[s]++,B++)},n.prototype.clearGroup=function(s){if(s<this.length){var d=this.groupSizes[s],r=this.indexOfGroup(s),m=r+d;this.groupSizes[s]=0;for(var j=r;j<m;j++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(s){var d="";if(s>=this.length||this.groupSizes[s]===0)return d;for(var r=this.groupSizes[s],m=this.indexOfGroup(s),j=m+r,C=m;C<j;C++)d+="".concat(this.tag.getRule(C)).concat(Vr);return d},n})(),Gi=new Map,Qi=new Map,qi=1,Ti=function(n){if(Gi.has(n))return Gi.get(n);for(;Qi.has(qi);)qi++;var s=qi++;return Gi.set(n,s),Qi.set(s,n),s},Kg=function(n,s){qi=s+1,Gi.set(n,s),Qi.set(s,n)},Jg="style[".concat(an,"][").concat(e0,'="').concat(Wi,'"]'),kg=new RegExp("^".concat(an,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Fg=function(n,s,d){for(var r,m=d.split(","),j=0,C=m.length;j<C;j++)(r=m[j])&&n.registerName(s,r)},Wg=function(n,s){for(var d,r=((d=s.textContent)!==null&&d!==void 0?d:"").split(Vr),m=[],j=0,C=r.length;j<C;j++){var B=r[j].trim();if(B){var T=B.match(kg);if(T){var v=0|parseInt(T[1],10),$=T[2];v!==0&&(Kg($,v),Fg(n,$,T[3]),n.getTag().insertRules(v,m)),m.length=0}else m.push(B)}}},Em=function(n){for(var s=document.querySelectorAll(Jg),d=0,r=s.length;d<r;d++){var m=s[d];m&&m.getAttribute(an)!==t0&&(Wg(n,m),m.parentNode&&m.parentNode.removeChild(m))}};function Ig(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var s0=function(n){var s=document.head,d=n||s,r=document.createElement("style"),m=(function(B){var T=Array.from(B.querySelectorAll("style[".concat(an,"]")));return T[T.length-1]})(d),j=m!==void 0?m.nextSibling:null;r.setAttribute(an,t0),r.setAttribute(e0,Wi);var C=Ig();return C&&r.setAttribute("nonce",C),d.insertBefore(r,j),r},Pg=(function(){function n(s){this.element=s0(s),this.element.appendChild(document.createTextNode("")),this.sheet=(function(d){if(d.sheet)return d.sheet;for(var r=document.styleSheets,m=0,j=r.length;m<j;m++){var C=r[m];if(C.ownerNode===d)return C}throw da(17)})(this.element),this.length=0}return n.prototype.insertRule=function(s,d){try{return this.sheet.insertRule(d,s),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},n.prototype.getRule=function(s){var d=this.sheet.cssRules[s];return d&&d.cssText?d.cssText:""},n})(),t1=(function(){function n(s){this.element=s0(s),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(s,d){if(s<=this.length&&s>=0){var r=document.createTextNode(d);return this.element.insertBefore(r,this.nodes[s]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},n.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},n})(),e1=(function(){function n(s){this.rules=[],this.length=0}return n.prototype.insertRule=function(s,d){return s<=this.length&&(this.rules.splice(s,0,d),this.length++,!0)},n.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},n.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},n})(),Tm=Li,l1={isServer:!Li,useCSSOMInjection:!Rg},Zi=(function(){function n(s,d,r){s===void 0&&(s=nn),d===void 0&&(d={});var m=this;this.options=Ft(Ft({},l1),s),this.gs=d,this.names=new Map(r),this.server=!!s.isServer,!this.server&&Li&&Tm&&(Tm=!1,Em(this)),kr(this,function(){return(function(j){for(var C=j.getTag(),B=C.length,T="",v=function(O){var z=(function(J){return Qi.get(J)})(O);if(z===void 0)return"continue";var H=j.names.get(z),Y=C.getGroup(O);if(H===void 0||!H.size||Y.length===0)return"continue";var G="".concat(an,".g").concat(O,'[id="').concat(z,'"]'),L="";H!==void 0&&H.forEach(function(J){J.length>0&&(L+="".concat(J,","))}),T+="".concat(Y).concat(G,'{content:"').concat(L,'"}').concat(Vr)},$=0;$<B;$++)v($);return T})(m)})}return n.registerId=function(s){return Ti(s)},n.prototype.rehydrate=function(){!this.server&&Li&&Em(this)},n.prototype.reconstructWithOptions=function(s,d){return d===void 0&&(d=!0),new n(Ft(Ft({},this.options),s),this.gs,d&&this.names||void 0)},n.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(s=(function(d){var r=d.useCSSOMInjection,m=d.target;return d.isServer?new e1(m):r?new Pg(m):new t1(m)})(this.options),new Vg(s)));var s},n.prototype.hasNameForId=function(s,d){return this.names.has(s)&&this.names.get(s).has(d)},n.prototype.registerName=function(s,d){if(Ti(s),this.names.has(s))this.names.get(s).add(d);else{var r=new Set;r.add(d),this.names.set(s,r)}},n.prototype.insertRules=function(s,d,r){this.registerName(s,d),this.getTag().insertRules(Ti(s),r)},n.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},n.prototype.clearRules=function(s){this.getTag().clearGroup(Ti(s)),this.clearNames(s)},n.prototype.clearTag=function(){this.tag=void 0},n})(),a1=/&/g,n1=/^\s*\/\/.*$/gm;function f0(n,s){return n.map(function(d){return d.type==="rule"&&(d.value="".concat(s," ").concat(d.value),d.value=d.value.replaceAll(",",",".concat(s," ")),d.props=d.props.map(function(r){return"".concat(s," ").concat(r)})),Array.isArray(d.children)&&d.type!=="@keyframes"&&(d.children=f0(d.children,s)),d})}function u1(n){var s,d,r,m=nn,j=m.options,C=j===void 0?nn:j,B=m.plugins,T=B===void 0?Ii:B,v=function(z,H,Y){return Y.startsWith(d)&&Y.endsWith(d)&&Y.replaceAll(d,"").length>0?".".concat(s):z},$=T.slice();$.push(function(z){z.type===Ki&&z.value.includes("&")&&(z.props[0]=z.props[0].replace(a1,d).replace(r,v))}),C.prefix&&$.push(_g),$.push(Cg);var O=function(z,H,Y,G){H===void 0&&(H=""),Y===void 0&&(Y=""),G===void 0&&(G="&"),s=G,d=H,r=new RegExp("\\".concat(d,"\\b"),"g");var L=z.replace(n1,""),J=zg(Y||H?"".concat(Y," ").concat(H," { ").concat(L," }"):L);C.namespace&&(J=f0(J,C.namespace));var w=[];return Yi(J,Og($.concat(Dg(function(X){return w.push(X)})))),w};return O.hash=T.length?T.reduce(function(z,H){return H.name||da(15),Pa(z,H.name)},n0).toString():"",O}var i1=new Zi,$r=u1(),d0=le.createContext({shouldForwardProp:void 0,styleSheet:i1,stylis:$r});d0.Consumer;le.createContext(void 0);function Gr(){return V.useContext(d0)}var h0=(function(){function n(s,d){var r=this;this.inject=function(m,j){j===void 0&&(j=$r);var C=r.name+j.hash;m.hasNameForId(r.id,C)||m.insertRules(r.id,C,j(r.rules,C,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=d,kr(this,function(){throw da(12,String(r.name))})}return n.prototype.getName=function(s){return s===void 0&&(s=$r),this.name+s.hash},n})(),c1=function(n){return n>="A"&&n<="Z"};function zm(n){for(var s="",d=0;d<n.length;d++){var r=n[d];if(d===1&&r==="-"&&n[0]==="-")return n;c1(r)?s+="-"+r.toLowerCase():s+=r}return s.startsWith("ms-")?"-"+s:s}var m0=function(n){return n==null||n===!1||n===""},p0=function(n){var s,d,r=[];for(var m in n){var j=n[m];n.hasOwnProperty(m)&&!m0(j)&&(Array.isArray(j)&&j.isCss||fa(j)?r.push("".concat(zm(m),":"),j,";"):nu(j)?r.push.apply(r,tn(tn(["".concat(m," {")],p0(j),!1),["}"],!1)):r.push("".concat(zm(m),": ").concat((s=m,(d=j)==null||typeof d=="boolean"||d===""?"":typeof d!="number"||d===0||s in Mg||s.startsWith("--")?String(d).trim():"".concat(d,"px")),";")))}return r};function Ll(n,s,d,r){if(m0(n))return[];if(Jr(n))return[".".concat(n.styledComponentId)];if(fa(n)){if(!fa(j=n)||j.prototype&&j.prototype.isReactComponent||!s)return[n];var m=n(s);return Ll(m,s,d,r)}var j;return n instanceof h0?d?(n.inject(d,r),[n.getName(r)]):[n]:nu(n)?p0(n):Array.isArray(n)?Array.prototype.concat.apply(Ii,n.map(function(C){return Ll(C,s,d,r)})):[n.toString()]}function y0(n){for(var s=0;s<n.length;s+=1){var d=n[s];if(fa(d)&&!Jr(d))return!1}return!0}var o1=u0(Wi),r1=(function(){function n(s,d,r){this.rules=s,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&y0(s),this.componentId=d,this.baseHash=Pa(o1,d),this.baseStyle=r,Zi.registerId(d)}return n.prototype.generateAndInjectStyles=function(s,d,r){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,d,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&d.hasNameForId(this.componentId,this.staticRulesId))m=ra(m,this.staticRulesId);else{var j=Xi(Ll(this.rules,s,d,r)),C=Br(Pa(this.baseHash,j)>>>0);if(!d.hasNameForId(this.componentId,C)){var B=r(j,".".concat(C),void 0,this.componentId);d.insertRules(this.componentId,C,B)}m=ra(m,C),this.staticRulesId=C}else{for(var T=Pa(this.baseHash,r.hash),v="",$=0;$<this.rules.length;$++){var O=this.rules[$];if(typeof O=="string")v+=O;else if(O){var z=Xi(Ll(O,s,d,r));T=Pa(T,z+$),v+=z}}if(v){var H=Br(T>>>0);d.hasNameForId(this.componentId,H)||d.insertRules(this.componentId,H,r(v,".".concat(H),void 0,this.componentId)),m=ra(m,H)}}return m},n})(),uu=le.createContext(void 0);uu.Consumer;function s1(n){var s=le.useContext(uu),d=V.useMemo(function(){return(function(r,m){if(!r)throw da(14);if(fa(r)){var j=r(m);return j}if(Array.isArray(r)||typeof r!="object")throw da(8);return m?Ft(Ft({},m),r):r})(n.theme,s)},[n.theme,s]);return n.children?le.createElement(uu.Provider,{value:d},n.children):null}var Ar={};function f1(n,s,d){var r=Jr(n),m=n,j=!zr(n),C=s.attrs,B=C===void 0?Ii:C,T=s.componentId,v=T===void 0?(function(M,K){var W=typeof M!="string"?"sc":vm(M);Ar[W]=(Ar[W]||0)+1;var q="".concat(W,"-").concat(Kr(Wi+W+Ar[W]));return K?"".concat(K,"-").concat(q):q})(s.displayName,s.parentComponentId):T,$=s.displayName,O=$===void 0?(function(M){return zr(M)?"styled.".concat(M):"Styled(".concat(wg(M),")")})(n):$,z=s.displayName&&s.componentId?"".concat(vm(s.displayName),"-").concat(s.componentId):s.componentId||v,H=r&&m.attrs?m.attrs.concat(B).filter(Boolean):B,Y=s.shouldForwardProp;if(r&&m.shouldForwardProp){var G=m.shouldForwardProp;if(s.shouldForwardProp){var L=s.shouldForwardProp;Y=function(M,K){return G(M,K)&&L(M,K)}}else Y=G}var J=new r1(d,z,r?m.componentStyle:void 0);function w(M,K){return(function(W,q,lt){var yt=W.attrs,qt=W.componentStyle,Rt=W.defaultProps,Ht=W.foldedComponentIds,me=W.styledComponentId,ne=W.target,ue=le.useContext(uu),D=Gr(),Q=W.shouldForwardProp||D.shouldForwardProp,tt=l0(q,ue,Rt)||nn,rt=(function(at,ut,mt){for(var wt,jt=Ft(Ft({},ut),{className:void 0,theme:mt}),ke=0;ke<at.length;ke+=1){var Fe=fa(wt=at[ke])?wt(jt):wt;for(var Ce in Fe)jt[Ce]=Ce==="className"?ra(jt[Ce],Fe[Ce]):Ce==="style"?Ft(Ft({},jt[Ce]),Fe[Ce]):Fe[Ce]}return ut.className&&(jt.className=ra(jt.className,ut.className)),jt})(yt,q,tt),gt=rt.as||ne,y={};for(var R in rt)rt[R]===void 0||R[0]==="$"||R==="as"||R==="theme"&&rt.theme===tt||(R==="forwardedAs"?y.as=rt.forwardedAs:Q&&!Q(R,gt)||(y[R]=rt[R]));var Z=(function(at,ut){var mt=Gr(),wt=at.generateAndInjectStyles(ut,mt.styleSheet,mt.stylis);return wt})(qt,rt),k=ra(Ht,me);return Z&&(k+=" "+Z),rt.className&&(k+=" "+rt.className),y[zr(gt)&&!a0.has(gt)?"class":"className"]=k,lt&&(y.ref=lt),V.createElement(gt,y)})(X,M,K)}w.displayName=O;var X=le.forwardRef(w);return X.attrs=H,X.componentStyle=J,X.displayName=O,X.shouldForwardProp=Y,X.foldedComponentIds=r?ra(m.foldedComponentIds,m.styledComponentId):"",X.styledComponentId=z,X.target=r?m.target:n,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(M){this._foldedDefaultProps=r?(function(K){for(var W=[],q=1;q<arguments.length;q++)W[q-1]=arguments[q];for(var lt=0,yt=W;lt<yt.length;lt++)wr(K,yt[lt],!0);return K})({},m.defaultProps,M):M}}),kr(X,function(){return".".concat(X.styledComponentId)}),j&&r0(X,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function Am(n,s){for(var d=[n[0]],r=0,m=s.length;r<m;r+=1)d.push(s[r],n[r+1]);return d}var Cm=function(n){return Object.assign(n,{isCss:!0})};function Fr(n){for(var s=[],d=1;d<arguments.length;d++)s[d-1]=arguments[d];if(fa(n)||nu(n))return Cm(Ll(Am(Ii,tn([n],s,!0))));var r=n;return s.length===0&&r.length===1&&typeof r[0]=="string"?Ll(r):Cm(Ll(Am(r,s)))}function qr(n,s,d){if(d===void 0&&(d=nn),!s)throw da(1,s);var r=function(m){for(var j=[],C=1;C<arguments.length;C++)j[C-1]=arguments[C];return n(s,d,Fr.apply(void 0,tn([m],j,!1)))};return r.attrs=function(m){return qr(n,s,Ft(Ft({},d),{attrs:Array.prototype.concat(d.attrs,m).filter(Boolean)}))},r.withConfig=function(m){return qr(n,s,Ft(Ft({},d),m))},r}var g0=function(n){return qr(f1,n)},S=g0;a0.forEach(function(n){S[n]=g0(n)});var d1=(function(){function n(s,d){this.rules=s,this.componentId=d,this.isStatic=y0(s),Zi.registerId(this.componentId+1)}return n.prototype.createStyles=function(s,d,r,m){var j=m(Xi(Ll(this.rules,d,r,m)),""),C=this.componentId+s;r.insertRules(C,C,j)},n.prototype.removeStyles=function(s,d){d.clearRules(this.componentId+s)},n.prototype.renderStyles=function(s,d,r,m){s>2&&Zi.registerId(this.componentId+s),this.removeStyles(s,r),this.createStyles(s,d,r,m)},n})();function h1(n){for(var s=[],d=1;d<arguments.length;d++)s[d-1]=arguments[d];var r=Fr.apply(void 0,tn([n],s,!1)),m="sc-global-".concat(Kr(JSON.stringify(r))),j=new d1(r,m),C=function(T){var v=Gr(),$=le.useContext(uu),O=le.useRef(v.styleSheet.allocateGSInstance(m)).current;return v.styleSheet.server&&B(O,T,v.styleSheet,$,v.stylis),le.useLayoutEffect(function(){if(!v.styleSheet.server)return B(O,T,v.styleSheet,$,v.stylis),function(){return j.removeStyles(O,v.styleSheet)}},[O,T,v.styleSheet,$,v.stylis]),null};function B(T,v,$,O,z){if(j.isStatic)j.renderStyles(T,Ng,$,z);else{var H=Ft(Ft({},v),{theme:l0(v,O,C.defaultProps)});j.renderStyles(T,H,$,z)}}return le.memo(C)}function v0(n){for(var s=[],d=1;d<arguments.length;d++)s[d-1]=arguments[d];var r=Xi(Fr.apply(void 0,tn([n],s,!1))),m=Kr(r);return new h0(m,r)}const Vi={primary:"#007bff",accent:"#00bcd4",error:"#dc3545",success:"#2ecc71",warning:"#f1c40f",critical:"#e74c3c",shadow:"0 4px 12px rgba(0, 0, 0, 0.1)"},Om={name:"light",...Vi,bgPage:"#f4f7f6",bgSidebar:"#2c3e50",bgCard:"#ffffff",bgInput:"#ecf0f1",textPrimary:"#2c3e50",textSecondary:"#7f8c8d",textOnPrimary:"#ffffff",textOnSidebar:"#ecf0f1",border:"#dce1e3",historyBg:"#f8f8f8",navHover:"#34495e",navActive:Vi.accent},Dm={name:"dark",...Vi,bgPage:"#1c1c1c",bgSidebar:"#242424",bgCard:"#242424",bgInput:"#333333",border:"#444444",historyBg:"#2f2f2f",textSecondary:"#b8b8b8",textPrimary:"#ffffff",shadow:"0 4px 12px rgba(0, 0, 0, 0.25)",textOnPrimary:"#1c1c1c",textOnSidebar:"#ffffff",navHover:"#3a3a3a",navActive:Vi.accent},m1=h1`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        /* Garante que o fundo da página não fique branco no modo dark */
        background-color: ${n=>n.theme.bgPage};
        color: ${n=>n.theme.textPrimary};
        font-family: 'Inter', sans-serif;
        transition: background-color 0.3s, color 0.3s;
    }

    h1, h2, h3 {
        color: ${n=>n.theme.textPrimary};
        margin-bottom: 10px;
    }

    a {
        text-decoration: none;
        color: ${n=>n.theme.primary};
    }
    
    /* --- BLOCO DE CORREÇÃO CRÍTICA PARA INPUTS --- */
    input[type="number"], 
    input[type="text"], 
    select {
        width: 100%;
        padding: 10px;
        border: 1px solid ${n=>n.theme.border};
        border-radius: 4px;
        
        /* Fundo do campo: CORREÇÃO VISUAL PARA O MODO DARK */
        background-color: ${n=>n.theme.bgInput};
        
        /* Cor do texto digitado: CORREÇÃO VISUAL PARA O MODO DARK */
        color: ${n=>n.theme.textPrimary}; 
        
        font-size: 1em;
        transition: border-color 0.3s, background-color 0.3s, color 0.3s;

        /* Garante que as cores se mantenham quando o campo está focado */
        &:focus {
            border-color: ${n=>n.theme.primary};
            outline: none;
            background-color: ${n=>n.theme.bgInput};
            color: ${n=>n.theme.textPrimary};
        }
        
        /* Estiliza o placeholder */
        &::placeholder {
            color: ${n=>n.theme.textSecondary};
            opacity: 0.8; 
        }

        /* Oculta os botões (spinners) em inputs type="number" para melhor visual */
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
`,p1=S.div`
    display: flex;
    min-height: 100vh;
`,y1=S.main`
    flex-grow: 1;
    padding: 30px;
    
    @media (max-width: 768px) {
        padding: 20px;
    }
`,g1=S.aside`
    width: 250px;
    min-width: 250px;
    background-color: ${n=>n.theme.bgSidebar};
    color: ${n=>n.theme.textOnSidebar};
    padding: 20px 0;
    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: background-color 0.3s;
`,v1=S.header`
    text-align: center;
    padding: 10px 20px;
    margin-bottom: 20px;
    h1 {
        color: ${n=>n.theme.textOnSidebar};
        font-size: 1.8em;
        margin: 0;
    }
`,x1=S.nav`
    flex-grow: 1;
`,b1=S.div`
    padding: 12px 20px;
    margin: 5px 0;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 15px;

    background-color: ${n=>n.active?n.theme.navActive:"transparent"};
    color: ${n=>n.active?n.theme.bgSidebar:n.theme.textOnSidebar};

    &:hover {
        background-color: ${n=>n.active?n.theme.navActive:n.theme.navHover};
        color: ${n=>n.active?n.theme.bgSidebar:n.theme.textOnSidebar};
    }
    
    transition: background-color 0.2s, color 0.2s;
`,S1=S.footer`
    padding: 20px;
    border-top: 1px solid ${n=>n.theme.navHover};
    text-align: center;
`,j1=S.button`
    background: ${n=>n.theme.primary};
    color: ${n=>n.theme.textOnPrimary};
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    width: 100%;
    
    &:hover {
        opacity: 0.9;
    }
`,E1=[{id:"imc",label:"Calculadora IMC",icon:"⚖️"},{id:"moedas",label:"Conversor de Moedas",icon:"💵"},{id:"senha",label:"Gerador de Senha",icon:"🔐"},{id:"metricas",label:"Conversor de Métricas",icon:"📏"},{id:"padrao",label:"Calculadora Padrão",icon:"🧮"},{id:"combustivel",label:"Calc. de Combustível",icon:"⛽"},{id:"juros",label:"Juros Compostos",icon:"📈"},{id:"data",label:"Calc. de Data",icon:"📅"},{id:"gorjeta",label:"Calc. de Gorjeta",icon:"🧾"},{id:"porcentagem",label:"Calc. de Porcentagem",icon:"📊"}];function T1({activeTab:n,setActiveTab:s,toggleTheme:d,themeName:r}){return o.jsxs(g1,{children:[o.jsxs("div",{children:[o.jsx(v1,{children:o.jsx("h1",{children:"🛠️ Hub Tools"})}),o.jsx(x1,{children:E1.map(m=>o.jsxs(b1,{active:n===m.id,onClick:()=>s(m.id),children:[m.icon," ",m.label]},m.id))})]}),o.jsx(S1,{children:o.jsx(j1,{onClick:d,children:r==="light"?"🌙 Modo Escuro":"☀️ Modo Claro"})})]})}function z1(n,s){if(typeof window<"u"){const d=localStorage.getItem(n);if(d!==null)try{return JSON.parse(d)}catch(r){console.error(`Erro ao carregar ou parsear a chave '${n}' do localStorage:`,r)}}return s}const Je=(n,s)=>{const[d,r]=V.useState(()=>z1(n,s));return V.useEffect(()=>{if(typeof window<"u")try{localStorage.setItem(n,JSON.stringify(d))}catch(m){console.error(`Erro ao salvar a chave '${n}' no localStorage:`,m)}},[n,d]),[d,r]},ze=[{max:18.5,classification:"Abaixo do peso",colorKey:"warning"},{max:24.9,classification:"Peso normal",colorKey:"success"},{max:29.9,classification:"Sobrepeso",colorKey:"warning"},{max:34.9,classification:"Obesidade Grau I",colorKey:"error"},{max:39.9,classification:"Obesidade Grau II",colorKey:"critical"},{max:1/0,classification:"Obesidade Grau III (Mórbida)",colorKey:"critical"}],zi=n=>isNaN(n)||n<=0?{classification:"Aguardando dados",colorKey:"textSecondary"}:ze.find(s=>n<s.max),A1=S.div`
    display: flex;
    gap: 20px;
    width: 100%;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`,C1=S.div`
    flex: 3;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: flex-start;
`,Wr=S.div`
    background-color: ${n=>n.theme.bgCard};
    color: ${n=>n.theme.textPrimary};
    padding: 25px;
    border-radius: 8px;
    box-shadow: ${n=>n.theme.shadow};
`,x0=S(Wr)`
    flex: 1 1 45%; 
    min-width: 300px;
`,_m=S.div`
    margin-bottom: 20px;
    label {
        color: ${n=>n.theme.textPrimary};
        display: block;
        font-weight: 500;
        margin-bottom: 5px;
    }
    input {
        margin-top: 5px;
    }
`,b0=S.button`
    background-color: ${n=>n.theme.primary};
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
    width: 100%;
    transition: background-color 0.3s ease;
    margin-top: 10px;
    &:disabled {
        background-color: ${n=>n.theme.textSecondary};
        cursor: not-allowed;
    }

    &:hover:not(:disabled) {
        background-color: ${n=>n.theme.name==="light"?"#0056b3":"#64b5f6"};
    }
`,O1=S(b0)`
    background-color: ${n=>n.theme.textSecondary};
    margin-top: 20px;
    &:hover:not(:disabled) {
        background-color: ${n=>n.theme.name==="light"?"#6c757d":"#8d8d8d"};
    }
`,D1=S(Wr)`
    flex: 1; 
    min-width: 280px;
    max-height: 500px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`,_1=S.div`
    padding: 10px;
    margin-bottom: 8px;
    border-radius: 6px;
    background-color: ${n=>n.theme.historyBg}; 
    font-size: 0.9em;
    border-left: 5px solid ${n=>n.theme.primary};
    word-break: break-all;
`,M1=S(x0)`
    border: 1px solid ${n=>n.theme.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-color: ${n=>n.theme[n.color]||n.theme.border};
`,R1=v0`
    0% { transform: scale(1); }
    50% { transform: scale(1.05);
    }
    100% { transform: scale(1); }
`,N1=S.p`
    font-size: 2.5em;
    font-weight: 700;
    margin: 10px 0 20px;
    color: ${n=>n.theme[n.color]||n.theme.textPrimary};
    animation: ${n=>n.animate?R1:"none"} 0.5s ease-in-out;
`,Mm=S.p`
    color: ${n=>n.theme.textSecondary};
    font-weight: 500;
    margin-top: 15px;
`,H1=S(Wr)`
    flex: 1 1 100%;
    min-width: unset;
    padding: 0;
    overflow: hidden;
    table {
        width: 100%;
        border-collapse: collapse;
        th, td {
            padding: 12px 20px;
            text-align: left;
            border-bottom: 1px solid ${n=>n.theme.border};
        }
        th {
            background-color: ${n=>n.theme.bgInput};
            font-weight: 600;
        }
        tr:last-child td {
            border-bottom: none;
        }
    }
`,Ia=S.tr`
    background-color: ${n=>n.isactive?n.theme.historyBg:"transparent"};
    color: ${n=>n.isactive?n.theme[n.color]:n.theme.textPrimary};
    font-weight: ${n=>n.isactive?600:400};
    border-left: 5px solid ${n=>n.theme[n.color]||"transparent"};
    
    td:last-child {
        color: ${n=>n.theme[n.color]||n.theme.textSecondary};
        font-weight: ${n=>n.isactive?700:500};
    }
`,U1=({activeImc:n})=>o.jsx(H1,{children:o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"IMC (kg/m²)"}),o.jsx("th",{children:"Classificação"})]})}),o.jsxs("tbody",{children:[o.jsxs(Ia,{isactive:n<18.5,color:ze[0].colorKey,children:[o.jsx("td",{children:"Menor que 18,5"}),o.jsx("td",{children:ze[0].classification})]}),o.jsxs(Ia,{isactive:n>=18.5&&n<24.9,color:ze[1].colorKey,children:[o.jsx("td",{children:"18,5 a 24,9"}),o.jsx("td",{children:ze[1].classification})]}),o.jsxs(Ia,{isactive:n>=25&&n<29.9,color:ze[2].colorKey,children:[o.jsx("td",{children:"25,0 a 29,9"}),o.jsx("td",{children:ze[2].classification})]}),o.jsxs(Ia,{isactive:n>=30&&n<34.9,color:ze[3].colorKey,children:[o.jsx("td",{children:"30,0 a 34,9"}),o.jsx("td",{children:ze[3].classification})]}),o.jsxs(Ia,{isactive:n>=35&&n<39.9,color:ze[4].colorKey,children:[o.jsx("td",{children:"35,0 a 39,9"}),o.jsx("td",{children:ze[4].classification})]}),o.jsxs(Ia,{isactive:n>=40,color:ze[5].colorKey,children:[o.jsx("td",{children:"Maior que 40,0"}),o.jsx("td",{children:ze[5].classification})]})]})]})});function B1(){const[n,s]=V.useState(""),[d,r]=V.useState(""),[m,j]=V.useState(null),[C,B]=V.useState(!1),[T,v]=Je("history-imc",[]),$=V.useMemo(()=>zi(m),[m]),O=V.useCallback(()=>{const H=parseFloat(String(n).replace(",",".")),Y=parseFloat(String(d).replace(",","."));if(isNaN(H)||isNaN(Y)||H<=0||Y<=0){alert("Por favor, insira valores válidos (Peso em kg, Altura em metros)."),j(null);return}const G=H/(Y*Y),L=G.toFixed(2);j(L),B(!0),setTimeout(()=>B(!1),500);const J=zi(G).classification,w={weight:H,height:Y,imc:L,classification:J,date:new Date().toLocaleTimeString("pt-BR")};v(X=>[w,...X.slice(0,49)])},[n,d,v]);V.useEffect(()=>{const H=Y=>{Y.key==="Enter"&&(Y.preventDefault(),O())};return window.addEventListener("keydown",H),()=>{window.removeEventListener("keydown",H)}},[O]);const z=()=>o.jsxs(D1,{children:[o.jsx("h3",{children:"Histórico de Cálculos"}),o.jsx("div",{className:"history-list",children:T.length===0?o.jsx("p",{style:{color:"inherit"},children:"Nenhum cálculo registrado."}):T.map((H,Y)=>o.jsxs(_1,{style:{borderLeftColor:zi(parseFloat(H.imc)).colorKey?({theme:G})=>G[zi(parseFloat(H.imc)).colorKey]:"inherit"},children:[o.jsx("small",{children:H.date}),o.jsxs("p",{style:{margin:"5px 0"},children:["IMC: ",o.jsx("strong",{children:H.imc})," - ",H.classification]}),o.jsxs("small",{children:["(",H.weight," kg / ",H.height," m)"]})]},Y))}),o.jsx(O1,{onClick:()=>v([]),children:"Limpar Histórico"})]});return o.jsxs("div",{id:"imc",style:{display:"block"},children:[o.jsx("h2",{children:"⚖️ Calculadora de Índice de Massa Corporal (IMC)"}),o.jsxs(A1,{children:[o.jsxs(C1,{children:[o.jsxs(x0,{children:[o.jsx("h3",{children:"Dados Pessoais"}),o.jsxs(_m,{children:[o.jsx("label",{htmlFor:"peso",children:"Peso (kg):"}),o.jsx("input",{id:"peso",type:"number",placeholder:"Ex: 75.5",value:n,onChange:H=>s(H.target.value),min:"1"})]}),o.jsxs(_m,{children:[o.jsx("label",{htmlFor:"altura",children:"Altura (m):"}),o.jsx("input",{id:"altura",type:"number",placeholder:"Ex: 1.75",value:d,onChange:H=>r(H.target.value),min:"0.1",step:"0.01"})]}),o.jsx(b0,{onClick:O,disabled:!n||!d,children:"Calcular IMC (Enter)"})]}),o.jsxs(M1,{color:$.colorKey,children:[o.jsx("h3",{children:"Seu Resultado"}),o.jsx(Mm,{children:"IMC Calculado:"}),o.jsx(N1,{animate:C,color:$.colorKey,children:m||"0.00"}),o.jsx(Mm,{children:"Classificação:"}),o.jsx("p",{style:{fontWeight:600,fontSize:"1.2em"},children:$.classification})]}),o.jsx(U1,{activeImc:m})]}),o.jsx(z,{})]})]})}const w1=n=>n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),$1=S.div`
    display: flex;
    gap: 20px;
    width: 100%;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`,G1=S.div`
    flex: 3;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: flex-start;
`,S0=S.div`
    background-color: ${n=>n.theme.bgCard};
    color: ${n=>n.theme.textPrimary};
    padding: 25px;
    border-radius: 8px;
    box-shadow: ${n=>n.theme.shadow};
`,j0=S(S0)`
    flex: 1 1 45%; 
    min-width: 300px;
`,Rm=S.div`
    margin-bottom: 20px;
    label {
        color: ${n=>n.theme.textPrimary};
        display: block;
        font-weight: 500;
        margin-bottom: 5px;
    }
    input, select {
        margin-top: 5px;
    }
`,E0=S.button`
    background-color: ${n=>n.theme.primary};
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
    width: 100%;
    transition: background-color 0.3s ease;
    margin-top: 10px;
    &:disabled {
        background-color: ${n=>n.theme.textSecondary};
        cursor: not-allowed;
    }

    &:hover:not(:disabled) {
        background-color: ${n=>n.theme.name==="light"?"#0056b3":"#64b5f6"};
    }
    &.loading {
        background-color: ${n=>n.theme.accent};
    }
`,q1=S(E0)`
    background-color: ${n=>n.theme.textSecondary};
    margin-top: 20px;
    &:hover:not(:disabled) {
        background-color: ${n=>n.theme.name==="light"?"#6c757d":"#8d8d8d"};
    }
`,Y1=S(S0)`
    flex: 1; 
    min-width: 280px;
    max-height: 500px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`,L1=S.div`
    padding: 10px;
    margin-bottom: 8px;
    border-radius: 6px;
    background-color: ${n=>n.theme.historyBg}; 
    font-size: 0.9em;
    border-left: 5px solid ${n=>n.theme.primary};
    word-break: break-all;
`,X1=S(j0)`
    border: 1px solid ${n=>n.theme.primary};
`,Nm=S.p`
    color: ${n=>n.theme.textSecondary};
    font-weight: 500;
    margin-top: 15px;
`,Q1=v0`
    0% { transform: scale(1); }
    50% { transform: scale(1.03);
    }
    100% { transform: scale(1); }
`,Hm=S.p`
    font-size: ${n=>n.large?"2.5em":"1.3em"};
    font-weight: 700;
    margin: ${n=>n.large?"5px 0 0":"5px 0"};
    color: ${n=>n.primary?n.theme.primary:n.theme.textPrimary};
    animation: ${n=>n.animate?Q1:"none"} 0.5s ease-in-out;
`,Z1=S.p`
    font-size: 0.85em;
    color: ${n=>n.theme.textSecondary};
    margin-top: 10px;
    text-align: center;
`,Um=[{value:"USD",label:"Dólar Americano (USD)"},{value:"EUR",label:"Euro (EUR)"},{value:"GBP",label:"Libra Esterlina (GBP)"},{value:"JPY",label:"Iene Japonês (JPY)"},{value:"CAD",label:"Dólar Canadense (CAD)"},{value:"ARS",label:"Peso Argentino (ARS)"}];function V1(){const[n,s]=V.useState(""),[d,r]=V.useState("USD"),[m,j]=V.useState("R$ 0,00"),[C,B]=V.useState("0.00 USD"),[T,v]=V.useState(!1),[$,O]=V.useState(!1),[z,H]=Je("history-moedas",[]);V.useMemo(()=>Um.find(L=>L.value===d)?.label||d,[d]);const Y=V.useCallback(async()=>{const L=parseFloat(String(n).replace(",","."));if(isNaN(L)||L<=0){alert("Por favor, insira um valor válido para conversão."),j("R$ 0,00"),B(`0.00 ${d}`);return}v(!0);try{const J=await fetch(`https://economia.awesomeapi.com.br/last/${d}-BRL`);if(!J.ok)throw new Error("Falha na requisição da cotação");const w=await J.json(),X=`${d}BRL`,M=parseFloat(w[X].bid);if(isNaN(M)||M===0)throw new Error("Taxa de câmbio inválida recebida.");const K=L*M,W=w1(K);B(`${L.toFixed(2).toLocaleString("pt-BR")} ${d}`),j(W),O(!0),setTimeout(()=>O(!1),500);const q={amount:L.toFixed(2),currency:d,result:W,rate:M.toFixed(4),date:new Date().toLocaleTimeString("pt-BR")};H(lt=>[q,...lt.slice(0,49)])}catch(J){console.error("Erro ao buscar cotação:",J),alert("Não foi possível obter a cotação atualizada. Verifique sua internet ou tente outra moeda."),j("R$ 0,00")}finally{v(!1)}},[n,d,H]);V.useEffect(()=>{const L=J=>{J.key==="Enter"&&(J.preventDefault(),Y())};return window.addEventListener("keydown",L),()=>{window.removeEventListener("keydown",L)}},[Y]);const G=()=>o.jsxs(Y1,{children:[o.jsx("h3",{children:"Histórico de Câmbio"}),o.jsx("div",{className:"history-list",children:z.length===0?o.jsx("p",{style:{color:"inherit"},children:"Nenhum cálculo registrado."}):z.map((L,J)=>o.jsxs(L1,{children:[o.jsxs("small",{children:[L.date," - Taxa: ",L.rate]}),o.jsxs("p",{style:{margin:"5px 0"},children:[o.jsxs("strong",{children:[L.amount," ",L.currency]})," = ",L.result]})]},J))}),o.jsx(q1,{onClick:()=>H([]),children:"Limpar Histórico"})]});return o.jsxs("div",{id:"moedas",style:{display:"block"},children:[o.jsx("h2",{children:"💵 Conversor de Moedas"}),o.jsxs($1,{children:[o.jsxs(G1,{children:[o.jsxs(j0,{children:[o.jsx("h3",{children:"Configurar Conversão"}),o.jsxs(Rm,{children:[o.jsx("label",{htmlFor:"moeda-valor",children:"Valor a Converter:"}),o.jsx("input",{id:"moeda-valor",type:"number",placeholder:"Ex: 100.00",value:n,onChange:L=>s(L.target.value),min:"0.01"})]}),o.jsxs(Rm,{children:[o.jsx("label",{htmlFor:"moeda-origem",children:"Moeda de Origem:"}),o.jsx("select",{id:"moeda-origem",value:d,onChange:L=>r(L.target.value),children:Um.map(L=>o.jsx("option",{value:L.value,children:L.label},L.value))})]}),o.jsx(E0,{onClick:Y,disabled:!n||T,className:T?"loading":"",children:T?"Buscando...":"Buscar Cotação e Converter (Enter)"}),o.jsx(Z1,{children:"*Cotação atualizada em tempo real via AwesomeAPI."})]}),o.jsxs(X1,{children:[o.jsx("h3",{children:"Resultado da Conversão"}),o.jsx(Nm,{children:"Moeda de Origem:"}),o.jsx(Hm,{children:C}),o.jsx(Nm,{children:"Valor Convertido (BRL):"}),o.jsx(Hm,{primary:!0,large:!0,animate:$,children:m})]})]}),o.jsx(G,{})]})]})}const Ai={LOWER:"abcdefghijklmnopqrstuvwxyz",UPPER:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",NUMBERS:"0123456789",SYMBOLS:'!@#$%^&*()_+-=[]{}|;:",./<>?'},K1=()=>o.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),o.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),J1=S.div`
    display: flex;
    gap: 20px;
    width: 100%;
    align-items: flex-start;
    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`,k1=S.div`
    flex: 3;
    max-width: 650px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`,T0=S.div`
    background-color: ${n=>n.theme.bgCard};
    color: ${n=>n.theme.textPrimary};
    padding: 25px;
    border-radius: 8px;
    box-shadow: ${n=>n.theme.shadow};
`,F1=S(T0)`
    display: flex;
    flex-direction: column;
    gap: 20px;
`,Bm=S.div`
    display: flex;
    flex-direction: column;
`,wm=S.label`
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 0.95em;
    color: ${n=>n.theme.textSecondary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
`,z0=S.input`
    flex: 1;
    padding: 12px;
    border: 1px solid ${n=>n.theme.border};
    border-radius: 6px;
    font-size: 1.1em;
    background-color: ${n=>n.theme.bgInput};
    color: ${n=>n.theme.textPrimary};
    transition: border-color 0.2s;
    text-align: right;
    
    &:focus {
        border-color: ${n=>n.theme.primary};
        outline: none;
        box-shadow: 0 0 0 2px ${n=>n.theme.primary}50;
    }
`,W1=S.div`
    display: flex;
    gap: 10px;
    align-items: center;
    width: 100%;

    ${z0} {
        flex-grow: 1; 
        min-width: 0;
        font-family: monospace;
        font-size: 1.3em;
        text-align: left;
        overflow-x: auto;
        white-space: nowrap;
        user-select: all;
    }
`,I1=S.button`
    background: none;
    border: 1px solid ${n=>n.theme.primary};
    color: ${n=>n.theme.primary};
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    flex-shrink: 0;
    width: auto; 
    min-width: 100px;

    &:hover {
        background-color: ${n=>n.theme.primary};
        color: ${n=>n.theme.textOnPrimary||"white"};
    }
`,P1=S.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
    margin-top: 15px;
`,Ci=S.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    padding: 8px;
    border-radius: 4px;
    background-color: ${n=>n.theme.historyBg};
    
    input[type="checkbox"] {
        margin-right: 10px;
        appearance: none;
        width: 18px;
        height: 18px;
        border: 2px solid ${n=>n.theme.primary};
        border-radius: 3px;
        position: relative;
        cursor: pointer;
        
        &:checked {
            background-color: ${n=>n.theme.primary};
            &::after {
                content: '✓';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: ${n=>n.theme.textOnPrimary||"white"};
                font-size: 14px;
                font-weight: bold;
            }
        }
    }
    
    span {
        font-weight: 500;
        color: ${n=>n.theme.textPrimary};
    }
`,tv=S.input`
    width: 100%;
    margin-top: 10px;
    &[type=range] {
        -webkit-appearance: none;
        width: 100%;
        height: 8px;
        background: ${n=>n.theme.border};
        border-radius: 5px;
        cursor: pointer;
        margin-top: 15px;
    }

    &[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: ${n=>n.theme.primary};
        cursor: pointer;
    }
`,A0=S.button`
    background-color: ${n=>n.theme.primary};
    color: ${n=>n.theme.textOnPrimary||"white"};
    padding: 12px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 600;
    transition: background-color 0.3s ease;
    margin-top: 20px;
    
    &:hover:not(:disabled) {
        opacity: 0.9;
    }
    &:disabled {
        background-color: ${n=>n.theme.textSecondary}70;
        cursor: not-allowed;
    }
`,ev=S(T0)`
    flex: 1; 
    min-width: 280px;
    max-height: 600px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`,lv=S.div`
    padding: 10px;
    margin-bottom: 8px;
    border-radius: 6px;
    background-color: ${n=>n.theme.historyBg}; 
    font-size: 0.9em;
    border-left: 5px solid ${n=>n.theme.primary};
    word-break: break-all;
    
    small {
        color: ${n=>n.theme.textSecondary};
        font-size: 0.8em;
    }
    .password-text {
        font-family: monospace;
        font-size: 1.1em;
        font-weight: bold;
        color: ${n=>n.theme.textPrimary};
        margin-top: 5px;
    }
`,av=S(A0)`
    background-color: ${n=>n.theme.textSecondary};
    margin-top: 20px;
    &:hover:not(:disabled) {
        background-color: ${n=>n.theme.name==="light"?"#6c757d":"#8d8d8d"};
    }
`;function nv(){const[n,s]=V.useState(12),[d,r]=V.useState(!0),[m,j]=V.useState(!0),[C,B]=V.useState(!0),[T,v]=V.useState(!1),[$,O]=V.useState(""),[z,H]=V.useState(!1),[Y,G]=Je("history-pass-gen",[]),L=V.useCallback(()=>{let M="";if(m&&(M+=Ai.LOWER),d&&(M+=Ai.UPPER),C&&(M+=Ai.NUMBERS),T&&(M+=Ai.SYMBOLS),M.length===0){O("Selecione pelo menos uma opção.");return}let K="";for(let q=0;q<n;q++){const lt=Math.floor(Math.random()*M.length);K+=M[lt]}O(K),H(!1);const W={password:K,options:`Tam: ${n} | Maiúsculas: ${d?"Sim":"Não"} | Símbolos: ${T?"Sim":"Não"}`,date:new Date().toLocaleTimeString("pt-BR")};G(q=>[W,...q.slice(0,49)])},[n,d,m,C,T,G]),J=()=>{$&&$!=="Selecione pelo menos uma opção."&&(navigator.clipboard.writeText($),H(!0),setTimeout(()=>H(!1),2e3))};V.useEffect(()=>{const M=K=>{K.key==="Enter"&&(K.preventDefault(),L())};return window.addEventListener("keydown",M),()=>{window.removeEventListener("keydown",M)}},[L]);const w=()=>o.jsxs(ev,{children:[o.jsx("h3",{style:{fontSize:"1.1em"},children:"Histórico de Senhas"}),o.jsx("div",{className:"history-list",children:Y.length===0?o.jsx("p",{style:{color:"inherit"},children:"Nenhuma senha gerada."}):Y.map((M,K)=>o.jsxs(lv,{children:[o.jsx("small",{children:M.date}),o.jsx("p",{className:"password-text",children:M.password}),o.jsx("small",{children:M.options})]},K))}),o.jsx(av,{onClick:()=>G([]),children:"Limpar Histórico"})]}),X=()=>o.jsxs(F1,{children:[o.jsxs(Bm,{children:[o.jsx(wm,{children:"Senha Gerada:"}),o.jsxs(W1,{children:[o.jsx(z0,{type:"text",value:$,readOnly:!0,onClick:J,title:"Clique para copiar",placeholder:"Clique em 'Gerar Nova Senha' para começar"}),o.jsx(I1,{onClick:J,title:"Copiar senha",children:z?"Copiado!":o.jsx(K1,{})})]})]}),o.jsxs(Bm,{children:[o.jsxs(wm,{htmlFor:"length",children:["Comprimento da Senha:",o.jsx("span",{style:{color:M=>M.theme.primary,fontWeight:"bold"},children:n})]}),o.jsx(tv,{id:"length",type:"range",min:"6",max:"40",value:n,onChange:M=>s(parseInt(M.target.value))})]}),o.jsx("h3",{style:{fontSize:"1em",color:M=>M.theme.textPrimary,marginBottom:"0"},children:"Incluir:"}),o.jsxs(P1,{children:[o.jsxs(Ci,{onClick:()=>j(M=>!M),children:[o.jsx("input",{type:"checkbox",checked:m,onChange:()=>{}}),o.jsx("span",{children:"Letras Minúsculas (a-z)"})]}),o.jsxs(Ci,{onClick:()=>r(M=>!M),children:[o.jsx("input",{type:"checkbox",checked:d,onChange:()=>{}}),o.jsx("span",{children:"Letras Maiúsculas (A-Z)"})]}),o.jsxs(Ci,{onClick:()=>B(M=>!M),children:[o.jsx("input",{type:"checkbox",checked:C,onChange:()=>{}}),o.jsx("span",{children:"Números (0-9)"})]}),o.jsxs(Ci,{onClick:()=>v(M=>!M),children:[o.jsx("input",{type:"checkbox",checked:T,onChange:()=>{}}),o.jsx("span",{children:"Símbolos (!@#$)"})]})]}),o.jsx(A0,{onClick:L,disabled:!(m||d||C||T),children:"Gerar Nova Senha (Enter)"})]});return o.jsxs("div",{id:"password-generator",children:[o.jsx("h2",{children:"🔐 Gerador de Senhas Seguras"}),o.jsxs(J1,{children:[o.jsx(k1,{children:X()}),o.jsx(w,{})]})]})}const oa={meter:{label:"Metro (m)",toBase:1},kilometer:{label:"Quilômetro (km)",toBase:1e3},centimeter:{label:"Centímetro (cm)",toBase:.01},millimeter:{label:"Milímetro (mm)",toBase:.001},inch:{label:"Polegada (in)",toBase:.0254},foot:{label:"Pé (ft)",toBase:.3048},yard:{label:"Jarda (yd)",toBase:.9144},mile:{label:"Milha (mi)",toBase:1609.34}},uv=S.div`
    display: flex;
    gap: 20px;
    width: 100%;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`,iv=S.div`
    flex: 3;
    max-width: 650px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
`,Ir=S.div`
    flex: 1;
    background-color: ${n=>n.theme.bgCard};
    color: ${n=>n.theme.textPrimary};
    padding: 25px;
    border-radius: 8px;
    box-shadow: ${n=>n.theme.shadow};
    display: flex;
    flex-direction: column;
    gap: 20px;
`,cv=S.div`
    display: flex;
    flex-direction: column;
`,ov=S.label`
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 0.95em;
    color: ${n=>n.theme.textSecondary};
`,rv=S.div`
    display: flex;
    gap: 10px;
    align-items: center;
`,sv=S.input`
    flex: 2;
    padding: 12px;
    border: 1px solid ${n=>n.theme.border};
    border-radius: 6px;
    font-size: 1.1em;
    background-color: ${n=>n.theme.bgInput};
    color: ${n=>n.theme.textPrimary};
    transition: border-color 0.2s;
    
    &:focus {
        border-color: ${n=>n.theme.primary};
        outline: none;
        box-shadow: 0 0 0 2px ${n=>n.theme.primary}50;
    }
`,fv=S.select`
    flex: 1;
    padding: 12px;
    border: 1px solid ${n=>n.theme.border};
    border-radius: 6px;
    font-size: 1.1em;
    background-color: ${n=>n.theme.bgInput};
    color: ${n=>n.theme.textPrimary};
    transition: border-color 0.2s;
    
    &:focus {
        border-color: ${n=>n.theme.primary};
        outline: none;
        box-shadow: 0 0 0 2px ${n=>n.theme.primary}50;
    }

    /* CORREÇÃO DE BUG VISUAL: Garante cores visíveis para o dropdown no modo escuro */
    option {
        background-color: ${n=>n.theme.bgCard}; 
        color: ${n=>n.theme.textPrimary};     
    }
`,C0=S.button`
    background-color: ${n=>n.theme.primary};
    color: ${n=>n.theme.textOnPrimary||"white"};
    padding: 12px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 600;
    transition: background-color 0.3s ease;
    
    &:hover:not(:disabled) {
        opacity: 0.9;
    }
    &:disabled {
        background-color: ${n=>n.theme.textSecondary}70;
        cursor: not-allowed;
    }
`,dv=S(Ir)`
    border-left: 5px solid ${n=>n.theme.primary};
    padding: 20px;
`,hv=S.h3`
    color: ${n=>n.theme.textPrimary};
    font-size: 1.5em;
    margin-bottom: 8px;
`,mv=S.div`
    padding: 10px;
    background-color: ${n=>n.theme.historyBg};
    border-radius: 6px;
    margin-bottom: 10px;
    
    p {
        font-size: 1.1em;
        font-weight: bold;
        color: ${n=>n.theme.primary};
    }
    span {
        font-size: 0.9em;
        color: ${n=>n.theme.textSecondary};
    }
`,pv=S(Ir)`
    flex: 1; 
    min-width: 280px;
    max-height: 700px;
    overflow-y: auto;
`,yv=S.div`
    padding: 10px;
    margin-bottom: 8px;
    border-radius: 6px;
    background-color: ${n=>n.theme.historyBg}; 
    font-size: 0.9em;
    border-left: 5px solid ${n=>n.theme.primary};
    word-break: break-all;
    
    small {
        color: ${n=>n.theme.textSecondary};
    }
`,gv=S(C0)`
    background-color: ${n=>n.theme.textSecondary};
    margin-top: 20px;
    &:hover:not(:disabled) {
        background-color: ${n=>n.theme.name==="light"?"#6c757d":"#8d8d8d"};
    }
`;function vv(){const[n,s]=V.useState(""),[d,r]=V.useState("meter"),[m,j]=V.useState(null),[C,B]=Je("history-metric-converter",[]),T=V.useCallback(()=>{const z=parseFloat(n);if(isNaN(z)||z<=0){j(null);return}const H=oa[d].toBase,Y=z*H,G=Object.keys(oa).filter(M=>M!==d).map(M=>{const K=oa[M].toBase,W=Y/K;return{unit:M,label:oa[M].label,value:W.toLocaleString("pt-BR",{maximumFractionDigits:6})}}),L={input:`${z.toLocaleString("pt-BR")} ${oa[d].label}`,results:G};j(L);const J=`Converter ${L.input}`,w=G.map(M=>`${M.value} ${M.label.split(" ")[0]}`).join(" | "),X={operation:J,result:w,date:new Date().toLocaleTimeString("pt-BR")};B(M=>[X,...M.slice(0,49)])},[n,d,B]);V.useEffect(()=>{const z=H=>{H.key==="Enter"&&(H.preventDefault(),parseFloat(n)>0&&T())};return window.addEventListener("keydown",z),()=>{window.removeEventListener("keydown",z)}},[n,T]);const v=()=>o.jsxs(pv,{children:[o.jsx("h3",{children:"Histórico de Conversões"}),o.jsx("div",{className:"history-list",children:C.length===0?o.jsx("p",{style:{color:"inherit"},children:"Nenhuma conversão registrada."}):C.map((z,H)=>o.jsxs(yv,{children:[o.jsx("small",{children:z.date}),o.jsx("p",{style:{margin:"5px 0"},children:o.jsx("span",{style:{fontWeight:"normal"},children:z.operation})}),o.jsxs("p",{style:{fontWeight:"bold"},children:["➡️ ",z.result]})]},H))}),o.jsx(gv,{onClick:()=>B([]),children:"Limpar Histórico"})]}),$=()=>o.jsxs(Ir,{children:[o.jsxs(cv,{children:[o.jsx(ov,{htmlFor:"inputValue",children:"Valor a Converter:"}),o.jsxs(rv,{children:[o.jsx(sv,{id:"inputValue",type:"number",inputMode:"decimal",value:n,onChange:z=>s(z.target.value),placeholder:"Ex: 100",min:"0"}),o.jsx(fv,{value:d,onChange:z=>r(z.target.value),children:Object.keys(oa).map(z=>o.jsx("option",{value:z,children:oa[z].label},z))})]})]}),o.jsx(C0,{onClick:T,disabled:!n||parseFloat(n)<=0,children:"Converter (Enter)"})]}),O=()=>o.jsxs(dv,{children:[o.jsxs(hv,{children:["Resultados para: ",m.input]}),o.jsx("div",{style:{maxHeight:"300px",overflowY:"auto"},children:m.results.map(z=>o.jsxs(mv,{children:[o.jsxs("span",{children:[z.label,":"]}),o.jsx("p",{children:z.value})]},z.unit))})]});return o.jsxs("div",{id:"metric-converter",children:[o.jsx("h2",{children:" 📏 Conversor de Métricas (Comprimento)"}),o.jsxs(uv,{children:[o.jsxs(iv,{children:[$(),m&&O(),!m&&o.jsx("p",{style:{color:z=>z.theme.textSecondary,textAlign:"center",marginTop:"20px"},children:"Insira um valor e a unidade para começar a conversão."})]}),o.jsx(v,{})]})]})}const xv=()=>o.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"}),o.jsx("line",{x1:"18",y1:"9",x2:"12",y2:"15"}),o.jsx("line",{x1:"12",y1:"9",x2:"18",y2:"15"})]}),bv=S.div`
    display: flex;
    gap: 40px; /* Mais espaçamento entre calculadora e histórico */
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`,Sv=S.div`
    background-color: ${n=>n.theme.bgCard};
    padding: 20px;
    border-radius: 20px; /* Bordas bem arredondadas como na foto */
    box-shadow: ${n=>n.theme.shadow};
    width: 100%;
    max-width: 360px;
`,jv=S.div`
    width: 100%;
    height: 80px;
    background-color: ${n=>n.theme.bgInput}; /* Fundo cinza/escuro do input */
    border-radius: 12px;
    margin-bottom: 20px;
    padding: 15px;
    text-align: right;
    color: ${n=>n.theme.textPrimary};
    font-size: 2.5rem;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    overflow-x: auto;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: 1px solid ${n=>n.theme.border};
    
    /* Esconde a barra de rolagem */
    &::-webkit-scrollbar {
        display: none;
    }
`,Ev=S.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px; /* Espaçamento entre os botões */
`,Tv=S.button`
    height: 60px;
    border-radius: 12px; /* Quadrado arredondado */
    border: none;
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    
    /* Cores baseadas no tema */
    background-color: ${n=>n.theme.name==="dark"?"#333333":"#f0f2f5"};
    color: ${n=>n.theme.textPrimary};
    
    /* Sombra suave para dar volume */
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);

    &:hover {
        filter: brightness(0.9);
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(1px);
    }

    /* Estilos específicos para tipos de tecla */
    ${n=>n.$type==="operator"&&`
        color: ${n.theme.primary};
        background-color: ${n.theme.name==="dark"?"#3a3a3a":"#e6e9ec"};
    `}

    ${n=>n.$type==="equal"&&`
        background-color: ${n.theme.primary};
        color: ${n.theme.textOnPrimary||"white"};
    `}
`,zv=S.div`
    background-color: ${n=>n.theme.bgCard};
    border-radius: 20px;
    box-shadow: ${n=>n.theme.shadow};
    width: 100%;
    max-width: 400px;
    padding: 30px;
    min-height: 450px;
    display: flex;
    flex-direction: column;
`,Av=S.h3`
    margin-top: 0;
    margin-bottom: 20px;
    color: ${n=>n.theme.textPrimary};
    font-size: 1.3rem;
`,Cv=S.div`
    flex: 1;
    overflow-y: auto;
    margin-bottom: 20px;
    
    /* Estilização da rolagem */
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${n=>n.theme.border};
        border-radius: 4px;
    }
`,Ov=S.div`
    padding: 10px 0;
    border-bottom: 1px solid ${n=>n.theme.border};
    color: ${n=>n.theme.textSecondary};
    font-size: 0.95rem;
    
    .math {
        display: block;
        margin-bottom: 4px;
    }
    .res {
        display: block;
        font-weight: bold;
        color: ${n=>n.theme.primary};
        font-size: 1.1rem;
        text-align: right;
    }
`,Dv=S.p`
    text-align: center;
    color: ${n=>n.theme.textSecondary};
    margin-top: 50px;
`,_v=S.button`
    background-color: #dc3545; /* Vermelho da foto */
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.9;
    }
`;function Mv(){const[n,s]=V.useState(""),[d,r]=V.useState(""),[m,j]=Je("history-padrao",[]),C=z=>{try{let H=z.replace(/×/g,"*").replace(/÷/g,"/").replace(/,/g,".");const Y=new Function("return "+H)();return!isFinite(Y)||isNaN(Y)?"Erro":parseFloat(Y.toFixed(8)).toString().replace(".",",")}catch{return"Erro"}},B=V.useCallback(z=>{d!==""&&!["+","-","×","÷"].includes(z)?(s(z),r("")):d!==""&&["+","-","×","÷"].includes(z)?(s(d+z),r("")):s(H=>H+z)},[d]),T=()=>{s(""),r("")},v=()=>{d!==""?(s(""),r("")):s(z=>z.slice(0,-1))},$=()=>{if(!n)return;const z=C(n);if(r(z),z!=="Erro"){const H={calc:n,res:z,date:new Date().toLocaleString()};j(Y=>[H,...Y])}},O=[{label:"C",type:"func",action:T},{label:"(",type:"func",action:()=>B("(")},{label:")",type:"func",action:()=>B(")")},{label:"÷",type:"operator",action:()=>B("÷")},{label:"7",type:"num",action:()=>B("7")},{label:"8",type:"num",action:()=>B("8")},{label:"9",type:"num",action:()=>B("9")},{label:"×",type:"operator",action:()=>B("×")},{label:"4",type:"num",action:()=>B("4")},{label:"5",type:"num",action:()=>B("5")},{label:"6",type:"num",action:()=>B("6")},{label:"-",type:"operator",action:()=>B("-")},{label:"1",type:"num",action:()=>B("1")},{label:"2",type:"num",action:()=>B("2")},{label:"3",type:"num",action:()=>B("3")},{label:"+",type:"operator",action:()=>B("+")},{label:"0",type:"num",action:()=>B("0")},{label:",",type:"num",action:()=>B(",")},{label:"back",type:"func",icon:o.jsx(xv,{}),action:v},{label:"=",type:"equal",action:$}];return V.useEffect(()=>{const z=H=>{const Y=H.key;/[0-9]/.test(Y)&&B(Y),Y===","&&B(","),Y==="."&&B(","),Y==="+"&&B("+"),Y==="-"&&B("-"),Y==="*"&&B("×"),Y==="/"&&B("÷"),Y==="("&&B("("),Y===")"&&B(")"),Y==="Enter"&&(H.preventDefault(),$()),Y==="Backspace"&&v(),Y==="Escape"&&T()};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[B,v,$]),o.jsxs("div",{id:"padrao",children:[o.jsx("h2",{children:"🧮 Calculadora Padrão"}),o.jsxs(bv,{children:[o.jsxs(Sv,{children:[o.jsx(jv,{children:d!==""?d:n||"0"}),o.jsx(Ev,{children:O.map((z,H)=>o.jsx(Tv,{onClick:z.action,$type:z.type,children:z.icon||z.label},H))})]}),o.jsxs(zv,{children:[o.jsx(Av,{children:"Histórico de Cálculos"}),o.jsx(Cv,{children:m.length===0?o.jsx(Dv,{children:"Nenhum cálculo registrado."}):m.map((z,H)=>o.jsxs(Ov,{children:[o.jsxs("span",{className:"math",children:[z.calc," ="]}),o.jsx("span",{className:"res",children:z.res})]},H))}),o.jsx(_v,{onClick:()=>j([]),children:"Limpar Histórico"})]})]})]})}const Rv=S.div`
    display: flex;
    gap: 20px;
    width: 100%;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`,Nv=S.div`
    flex: 3;
    max-width: 500px;
    margin: 0 auto;
`,Pr=S.div`
    background-color: ${n=>n.theme.bgCard};
    color: ${n=>n.theme.textPrimary};
    padding: 25px;
    border-radius: 8px;
    box-shadow: ${n=>n.theme.shadow};
`,Hv=S(Pr)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
`,Oi=S.div`
    display: flex;
    flex-direction: column;
`,Di=S.label`
    margin-bottom: 8px;
    font-weight: 600;
    color: ${n=>n.theme.textPrimary};
`,_i=S.input`
    padding: 12px;
    border: 1px solid ${n=>n.theme.border};
    border-radius: 6px;
    font-size: 1em;
    background-color: ${n=>n.theme.bgInput};
    color: ${n=>n.theme.textPrimary};
    transition: border-color 0.2s;

    &:focus {
        border-color: ${n=>n.theme.primary};
        outline: none;
    }
`,O0=S.button`
    background-color: ${n=>n.theme.primary};
    color: ${n=>n.theme.textOnPrimary||"white"};
    padding: 12px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 600;
    transition: background-color 0.3s ease;
    
    &:hover:not(:disabled) {
        opacity: 0.9;
    }
    &:disabled {
        background-color: ${n=>n.theme.textSecondary};
        cursor: not-allowed;
    }
`,Uv=S(Pr)`
    padding: 20px;
    border-left: 5px solid ${n=>n.color};
    text-align: center;
    
    h3 {
        color: ${n=>n.color};
        font-size: 1.5em;
        margin-bottom: 10px;
    }
`,Bv=S.p`
    font-size: 2.5em;
    font-weight: bold;
    color: ${n=>n.theme.textPrimary};
    margin-top: 5px;
`,wv=S.p`
    font-size: 1em;
    color: ${n=>n.theme.textSecondary};
    margin-top: 10px;
`,$v=S(Pr)`
    flex: 1; 
    min-width: 280px;
    max-height: 700px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`,Gv=S.div`
    padding: 10px;
    margin-bottom: 8px;
    border-radius: 6px;
    background-color: ${n=>n.theme.historyBg}; 
    font-size: 0.9em;
    border-left: 5px solid ${n=>n.theme.primary};
    word-break: break-all;
`,qv=S(O0)`
    background-color: ${n=>n.theme.textSecondary};
    margin-top: 20px;
    &:hover:not(:disabled) {
        background-color: ${n=>n.theme.name==="light"?"#6c757d":"#8d8d8d"};
    }
`;function Yv(){const[n,s]=V.useState(""),[d,r]=V.useState(""),[m,j]=V.useState(""),[C,B]=V.useState(""),[T,v]=V.useState(null),[$,O]=Je("history-combustivel",[]),z=w=>parseFloat(w).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),H=V.useCallback(()=>{const w=parseFloat(n.replace(",",".")),X=parseFloat(d.replace(",",".")),M=parseFloat(m.replace(",",".")),K=parseFloat(C.replace(",","."));if(!w||!X||!M||!K||w<=0||X<=0||M<=0||K<=0){v(null);return}const W=w/M,lt=X/K/W;let yt,qt,Rt;lt<.7?(yt="Álcool é mais vantajoso!",qt="#2ecc71",Rt=`A economia é de ${z((1-lt)*100)}% em relação à Gasolina.`):lt>=.7&&lt<=1?(yt="Gasolina é mais vantajosa!",qt="#f39c12",Rt=`O custo do Álcool é equivalente a ${z(lt*100)}% do custo da Gasolina.`):(yt="Gasolina é a melhor opção!",qt="#e74c3c",Rt="O custo do Álcool é muito maior em comparação.");const Ht={decision:yt,ratio:lt.toFixed(3).replace(".",","),color:qt,tip:Rt,data:{pGas:w,pAlc:X,cGas:M,cAlc:K}};v(Ht);const me={input:`G: R$${z(w)}/${z(M)}km - A: R$${z(X)}/${z(K)}km`,result:yt,ratio:Ht.ratio,date:new Date().toLocaleTimeString("pt-BR"),color:qt};O(ne=>[me,...ne.slice(0,49)])},[n,d,m,C,O]),Y=V.useCallback((w,X)=>{const M=X.replace(/[^0-9,.]/g,"");w(M.replace(".",","))},[]),G={gasPrice:le.useRef(null),alcPrice:le.useRef(null),gasConsumption:le.useRef(null),alcConsumption:le.useRef(null)};V.useEffect(()=>{const w=X=>{X.key==="Enter"?(X.preventDefault(),H()):X.key};return window.addEventListener("keydown",w),()=>{window.removeEventListener("keydown",w)}},[H]);const L=()=>o.jsxs($v,{children:[o.jsx("h3",{children:"Histórico de Abastecimento"}),o.jsx("div",{className:"history-list",children:$.length===0?o.jsx("p",{style:{color:"inherit"},children:"Nenhum cálculo registrado."}):$.map((w,X)=>o.jsxs(Gv,{style:{borderLeftColor:w.color},children:[o.jsx("small",{children:w.date}),o.jsxs("p",{style:{margin:"5px 0"},children:["Dados: ",w.input]}),o.jsxs("p",{children:["Razão: ",o.jsx("strong",{children:w.ratio})]}),o.jsxs("p",{style:{fontWeight:"bold",color:w.color},children:["➡️ ",w.result]})]},X))}),o.jsx(qv,{onClick:()=>O([]),children:"Limpar Histórico"})]}),J=n&&d&&m&&C;return o.jsxs("div",{id:"combustivel",children:[o.jsx("h2",{children:"⛽ Calculadora de Combustível"}),o.jsxs(Rv,{children:[o.jsxs(Nv,{children:[o.jsxs(Hv,{children:[o.jsxs(Oi,{children:[o.jsx(Di,{htmlFor:"gasPrice",children:"Preço da Gasolina (R$/Litro)"}),o.jsx(_i,{id:"gasPrice",type:"text",inputMode:"decimal",value:n,onChange:w=>Y(s,w.target.value),placeholder:"Ex: 5,50",ref:G.gasPrice})]}),o.jsxs(Oi,{children:[o.jsx(Di,{htmlFor:"alcPrice",children:"Preço do Álcool (R$/Litro)"}),o.jsx(_i,{id:"alcPrice",type:"text",inputMode:"decimal",value:d,onChange:w=>Y(r,w.target.value),placeholder:"Ex: 3,80",ref:G.alcPrice})]}),o.jsxs(Oi,{children:[o.jsx(Di,{htmlFor:"gasConsumption",children:"Consumo Gasolina (Km/Litro)"}),o.jsx(_i,{id:"gasConsumption",type:"text",inputMode:"decimal",value:m,onChange:w=>Y(j,w.target.value),placeholder:"Ex: 12,5",ref:G.gasConsumption})]}),o.jsxs(Oi,{children:[o.jsx(Di,{htmlFor:"alcConsumption",children:"Consumo Álcool (Km/Litro)"}),o.jsx(_i,{id:"alcConsumption",type:"text",inputMode:"decimal",value:C,onChange:w=>Y(B,w.target.value),placeholder:"Ex: 9,0",ref:G.alcConsumption})]}),o.jsx(O0,{onClick:H,disabled:!J,children:"Calcular Vantagem (Enter)"})]}),T&&o.jsxs(Uv,{color:T.color,children:[o.jsx("h3",{style:{color:T.color},children:T.decision}),o.jsx("p",{children:"Razão Custo-Eficiência:"}),o.jsx(Bv,{children:T.ratio}),o.jsx(wv,{children:T.tip})]})]}),o.jsx(L,{})]})]})}const Lv=S.div`
    display: flex;
    gap: 20px;
    width: 100%;
    align-items: flex-start;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`,Xv=S.div`
    flex: 3;
    max-width: 650px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
`,ts=S.div`
    background-color: ${n=>n.theme.bgCard};
    color: ${n=>n.theme.textPrimary};
    padding: 25px;
    border-radius: 8px;
    box-shadow: ${n=>n.theme.shadow};
`,Qv=S(ts)`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 18px;
`,Mi=S.div`
    display: flex;
    flex-direction: column;
`,Ri=S.label`
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 0.95em;
    color: ${n=>n.theme.textSecondary};
`,Cr=S.div`
    display: flex;
    gap: 10px;
    align-items: center;
`,Yr=S.span`
    padding: 12px;
    border: 1px solid ${n=>n.theme.border};
    border-right: none;
    border-radius: 6px 0 0 6px;
    background-color: ${n=>n.theme.bgInput};
    color: ${n=>n.theme.textSecondary};
    font-size: 1.1em;
`,Ni=S.input`
    flex: 1;
    padding: 12px;
    border: 1px solid ${n=>n.theme.border};
    border-radius: ${n=>n.isCurrency?"0 6px 6px 0":"6px"};
    font-size: 1.1em;
    background-color: ${n=>n.theme.bgInput};
    color: ${n=>n.theme.textPrimary};
    transition: border-color 0.2s;
    text-align: right;
    
    &:focus {
        border-color: ${n=>n.theme.primary};
        outline: none;
        box-shadow: 0 0 0 2px ${n=>n.theme.primary}50;
        z-index: 1;
        /* Garante que o foco cubra a borda do span de moeda */
    }
`,Zv=S(Yr)`
    border-left: none;
    border-right: 1px solid ${n=>n.theme.border};
    border-radius: 0 6px 6px 0;
`;S.select`
    flex: 0.5;
    padding: 12px;
    border: 1px solid ${n=>n.theme.border};
    border-radius: 6px;
    font-size: 1.1em;
    background-color: ${n=>n.theme.bgInput};
    color: ${n=>n.theme.textPrimary};
    transition: border-color 0.2s;
    &:focus {
        border-color: ${n=>n.theme.primary};
        outline: none;
        box-shadow: 0 0 0 2px ${n=>n.theme.primary}50;
    }
    
    option {
        background-color: ${n=>n.theme.bgCard};
        color: ${n=>n.theme.textPrimary};     
    }
`;const D0=S.button`
    background-color: ${n=>n.theme.primary};
    color: ${n=>n.theme.textOnPrimary||"white"};
    padding: 12px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 600;
    transition: background-color 0.3s ease;
    margin-top: 10px;
    
    &:hover:not(:disabled) {
        opacity: 0.9;
    }
    &:disabled { // <--- ESTILO PARA QUANDO ESTIVER DESABILITADO
        background-color: ${n=>n.theme.textSecondary}70;
        cursor: not-allowed;
    }
`,Vv=S(ts)`
    border-left: 5px solid ${n=>n.theme.primary};
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`,Or=S.div`
    background-color: ${n=>n.theme.historyBg};
    padding: 10px 15px;
    border-radius: 6px;
    span {
        font-size: 0.9em;
        color: ${n=>n.theme.textSecondary};
    }
    p {
        font-size: 1.5em;
        font-weight: bold;
        color: ${n=>n.theme.textPrimary};
    }
    .main-result {
        color: ${n=>n.theme.primary};
    }
`,Kv=S(ts)`
    flex: 1; 
    min-width: 280px;
    max-height: 600px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`,Jv=S.div`
    padding: 10px;
    margin-bottom: 8px;
    border-radius: 6px;
    background-color: ${n=>n.theme.historyBg}; 
    font-size: 0.9em;
    border-left: 5px solid ${n=>n.theme.primary};
    word-break: break-all;
    small {
        color: ${n=>n.theme.textSecondary};
    }
`,kv=S(D0)`
    background-color: ${n=>n.theme.textSecondary};
    margin-top: 20px;
    &:hover:not(:disabled) {
        background-color: ${n=>n.theme.name==="light"?"#6c757d":"#8d8d8d"};
    }
`;function Fv(){const[n,s]=V.useState(""),[d,r]=V.useState(""),[m,j]=V.useState(""),[C,B]=V.useState(""),[T,v]=V.useState(null),[$,O]=Je("history-compound-interest",[]),z=w=>{const X=parseFloat(w);return isNaN(X)?"R$ 0,00":X.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})},H=w=>parseFloat(String(w).replace(",",".")),Y=V.useCallback(()=>{const w=H(n)||0,X=H(d)/100,M=H(m)||0,K=H(C)||0;if(M<=0){alert("O período de aplicação deve ser de pelo menos 1 ano."),v(null);return}const W=M*12,q=X/12;let lt=0,yt=w;const qt=w*Math.pow(1+q,W);if(lt+=qt,K>0&&q>0){const D=K*((Math.pow(1+q,W)-1)/q);lt+=D,yt+=K*W}else K>0&&q===0&&(lt+=K*W,yt+=K*W);const Rt=lt-yt,Ht={finalAmount:lt,totalInvested:yt,totalInterest:Rt,rate:H(d),years:M,contributions:K};v(Ht);const me=`Capital Inicial: ${z(w)} | ${Ht.rate}% por ${Ht.years} anos`,ne=`Montante Final: ${z(lt)} (Juros: ${z(Rt)})`,ue={operation:me,result:ne,date:new Date().toLocaleTimeString("pt-BR")};O(D=>[ue,...D.slice(0,49)])},[n,d,m,C,O]);V.useEffect(()=>{const w=X=>{X.key==="Enter"&&(X.preventDefault(),n&&d&&m&&Y())};return window.addEventListener("keydown",w),()=>{window.removeEventListener("keydown",w)}},[n,d,m,Y]);const G=()=>o.jsxs(Kv,{children:[o.jsx("h3",{style:{fontSize:"1.1em"},children:"Histórico de Juros"}),o.jsx("div",{className:"history-list",children:$.length===0?o.jsx("p",{style:{color:"inherit"},children:"Nenhum cálculo registrado."}):$.map((w,X)=>o.jsxs(Jv,{children:[o.jsx("small",{children:w.date}),o.jsx("p",{style:{margin:"5px 0"},children:o.jsx("span",{style:{fontWeight:"normal"},children:w.operation})}),o.jsxs("p",{style:{fontWeight:"bold"},children:["➡️ ",w.result]})]},X))}),o.jsx(kv,{onClick:()=>O([]),children:"Limpar Histórico"})]}),L=()=>o.jsxs(Qv,{children:[o.jsxs(Mi,{children:[o.jsx(Ri,{htmlFor:"principal",children:"Capital Inicial (R$):"}),o.jsxs(Cr,{children:[o.jsx(Yr,{children:"R$"}),o.jsx(Ni,{id:"principal",type:"number",inputMode:"decimal",value:n,onChange:w=>s(w.target.value),placeholder:"Ex: 10000",min:"0",isCurrency:!0})]})]}),o.jsxs(Mi,{children:[o.jsx(Ri,{htmlFor:"rate",children:"Taxa de Juros Anual (%):"}),o.jsxs(Cr,{children:[o.jsx(Ni,{id:"rate",type:"number",inputMode:"decimal",value:d,onChange:w=>r(w.target.value),placeholder:"Ex: 12.0",min:"0"}),o.jsx(Zv,{children:"%"})]})]}),o.jsxs(Mi,{children:[o.jsx(Ri,{htmlFor:"years",children:"Período de Aplicação (Anos):"}),o.jsx(Ni,{id:"years",type:"number",inputMode:"numeric",value:m,onChange:w=>j(w.target.value),placeholder:"Ex: 5",min:"1"})]}),o.jsxs(Mi,{children:[o.jsx(Ri,{htmlFor:"monthlyContribution",children:"Aporte Mensal (R$, Opcional):"}),o.jsxs(Cr,{children:[o.jsx(Yr,{children:"R$"}),o.jsx(Ni,{id:"monthlyContribution",type:"number",inputMode:"decimal",value:C,onChange:w=>B(w.target.value),placeholder:"Ex: 500",min:"0",isCurrency:!0})]})]}),o.jsx(D0,{onClick:Y,disabled:!n||!d||!m,children:"Calcular Juros Compostos (Enter)"})]}),J=()=>o.jsxs(Vv,{children:[o.jsxs("h3",{style:{fontSize:"1.2em",color:w=>w.theme.textPrimary},children:["Resultados Finais em ",T.years," Anos"]}),o.jsxs(Or,{children:[o.jsx("span",{children:"Montante Final (Capital + Juros):"}),o.jsx("p",{className:"main-result",children:z(T.finalAmount)})]}),o.jsxs(Or,{children:[o.jsx("span",{children:"Total de Juros Ganhos:"}),o.jsx("p",{style:{color:T.totalInterest>0?"#2ecc71":w=>w.theme.textPrimary},children:z(T.totalInterest)})]}),o.jsxs(Or,{children:[o.jsx("span",{children:"Total Investido (Capital + Aportes):"}),o.jsx("p",{children:z(T.totalInvested)})]})]});return o.jsxs("div",{id:"compound-interest",children:[o.jsx("h2",{children:"📈 Calculadora de Juros Compostos"}),o.jsxs(Lv,{children:[o.jsxs(Xv,{children:[L(),T&&J(),!T&&o.jsx("p",{style:{color:w=>w.theme.textSecondary,textAlign:"center",marginTop:"20px"},children:"Insira os dados do seu investimento para simular o crescimento."})]}),o.jsx(G,{})]})]})}const Wv=S.div`
    display: flex;
    gap: 20px;
    width: 100%;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`,Iv=S.div`
    flex: 3;
    max-width: 650px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
`,Pv=S.div`
    display: flex;
    gap: 20px;
    @media (min-width: 768px) {
        flex-direction: row; 
    }
    @media (max-width: 767px) {
        flex-direction: column;
    }
`,es=S.div`
    background-color: ${n=>n.theme.bgCard};
    color: ${n=>n.theme.textPrimary};
    padding: 25px;
    border-radius: 8px;
    box-shadow: ${n=>n.theme.shadow};
`,tx=S(es)`
    flex: 1; 
    display: flex;
    flex-direction: column;
    gap: 15px;
`,ex=S(es)`
    flex: 1;
    border-left: 5px solid ${n=>n.theme.primary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,$m=S.div`
    display: flex;
    flex-direction: column;
`,eu=S.label`
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 0.95em;
    color: ${n=>n.theme.textSecondary};
`,Gm=S.input`
    padding: 12px;
    border: 1px solid ${n=>n.theme.border};
    border-radius: 6px;
    font-size: 1.1em;
    /* Garante fundo do input consistente */
    background-color: ${n=>n.theme.bgInput}; 
    color: ${n=>n.theme.textPrimary};
    transition: border-color 0.2s;
    
    &:focus {
        border-color: ${n=>n.theme.primary};
        outline: none;
        box-shadow: 0 0 0 2px ${n=>n.theme.primary}50;
    }
    
    /* CORREÇÃO ROBUSTA FINAL: Garante que o ícone do calendário seja visível */
    &[type="date"]::-webkit-calendar-picker-indicator {
        /* Inverte o ícone de preto para branco no modo escuro */
        filter: ${n=>n.theme.name==="dark"?"invert(1)":"none"};
        cursor: pointer;
        /* Força a cor de fundo do ícone a ser a mesma do input, garantindo o contraste */
        background-color: ${n=>n.theme.bgInput}; 
        /* Para navegadores que suportam customização da cor do ícone */
        color: ${n=>n.theme.textPrimary};
        padding: 2px;
        border-radius: 4px;
    }
`,_0=S.button`
    background-color: ${n=>n.theme.primary};
    color: ${n=>n.theme.textOnPrimary||"white"};
    padding: 12px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 600;
    transition: background-color 0.3s ease;
    
    &:hover:not(:disabled) {
        opacity: 0.9;
    }
    &:disabled {
        background-color: ${n=>n.theme.textSecondary}70;
        cursor: not-allowed;
    }
`,qm=S.h4`
    color: ${n=>n.theme.textSecondary};
    font-size: 1em;
    margin-bottom: 8px;
    border-bottom: 1px solid ${n=>n.theme.border};
    padding-bottom: 5px;
`,Dr=S.p`
    font-size: 1.2em;
    font-weight: bold;
    color: ${n=>n.theme.textPrimary};
    margin-bottom: 5px;
`,lx=S(es)`
    flex: 1; 
    min-width: 280px;
    max-height: 700px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`,ax=S.div`
    padding: 10px;
    margin-bottom: 8px;
    border-radius: 6px;
    background-color: ${n=>n.theme.historyBg}; 
    font-size: 0.9em;
    border-left: 5px solid ${n=>n.theme.primary};
    word-break: break-all;
`,nx=S(_0)`
    background-color: #e74c3c;
    margin-top: 20px;
    &:hover:not(:disabled) {
        background-color: #c0392b;
    }
`;function ux(){const[n,s]=V.useState(""),[d,r]=V.useState(""),[m,j]=V.useState(null),[C,B]=Je("history-date-difference",[]),T=O=>{const z=typeof O=="string"&&O?new Date(O+"T00:00:00"):O;return isNaN(z.getTime())?"Data Inválida":z.toLocaleDateString("pt-BR",{year:"numeric",month:"2-digit",day:"2-digit"})},v=V.useCallback(()=>{const O=new Date(n+"T00:00:00"),z=new Date(d+"T00:00:00");if(isNaN(O.getTime())||isNaN(z.getTime())){j(null);return}const H=O.getTime(),Y=z.getTime(),G=Math.abs(Y-H),L=Math.ceil(G/(1e3*60*60*24));let J=new Date(O.getTime()),w=new Date(z.getTime());J>w&&([J,w]=[w,J]);let X=w.getFullYear()-J.getFullYear(),M=w.getMonth()-J.getMonth(),K=w.getDate()-J.getDate();if(K<0){M--;const Rt=new Date(w.getFullYear(),w.getMonth(),0).getDate();K+=Rt}M<0&&(X--,M+=12);const W=G/(1e3*60*60*24*30.4375),q=`Intervalo de ${T(O)} até ${T(z)}:`,lt=`${X} Anos, ${M} Meses, ${K} Dias`,yt={title:q,complete:lt,totalDays:L.toLocaleString("pt-BR"),totalMonthsApprox:W.toFixed(2).replace(".",",")+" Meses"};j(yt);const qt={operation:q,result:lt,date:new Date().toLocaleTimeString("pt-BR")};B(Rt=>[qt,...Rt.slice(0,49)])},[n,d,B]);V.useEffect(()=>{const O=z=>{z.key==="Enter"&&(z.preventDefault(),n&&d&&v())};return window.addEventListener("keydown",O),()=>{window.removeEventListener("keydown",O)}},[n,d,v]);const $=()=>o.jsxs(lx,{children:[o.jsx("h3",{children:"Histórico de Datas"}),o.jsx("div",{className:"history-list",children:C.length===0?o.jsx("p",{style:{color:"inherit"},children:"Nenhum cálculo registrado."}):C.map((O,z)=>o.jsxs(ax,{children:[o.jsx("small",{children:O.date}),o.jsx("p",{style:{margin:"5px 0"},children:o.jsx("span",{style:{fontWeight:"normal"},children:O.operation})}),o.jsxs("p",{style:{fontWeight:"bold"},children:["➡️ ",O.result]})]},z))}),o.jsx(nx,{onClick:()=>B([]),children:"Limpar Histórico"})]});return o.jsxs("div",{id:"data",children:[o.jsx("h2",{children:" 📅 Calculadora de Diferença de Datas e Idade"}),o.jsx(Wv,{children:o.jsxs(Iv,{children:[o.jsxs(Pv,{children:[o.jsxs(tx,{children:[o.jsx(qm,{children:"Intervalo de Datas"}),o.jsxs($m,{children:[o.jsx(eu,{htmlFor:"startDate",children:"Data de Início:"}),o.jsx(Gm,{id:"startDate",type:"date",value:n,onChange:O=>s(O.target.value)})]}),o.jsxs($m,{children:[o.jsx(eu,{htmlFor:"endDate",children:"Data Final:"}),o.jsx(Gm,{id:"endDate",type:"date",value:d,onChange:O=>r(O.target.value)})]}),o.jsx(_0,{onClick:v,disabled:!n||!d,style:{marginTop:"auto"},children:"Calcular Diferença (Enter)"})]}),o.jsxs(ex,{children:[o.jsx(qm,{children:"Resultados"}),m?o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[o.jsxs("div",{children:[o.jsx(eu,{children:"Diferença Completa:"}),o.jsx(Dr,{children:m.complete})]}),o.jsxs("div",{children:[o.jsx(eu,{children:"Total em Dias:"}),o.jsxs(Dr,{children:[m.totalDays," Dias"]})]}),o.jsxs("div",{children:[o.jsx(eu,{children:"Total em Meses (Aprox.):"}),o.jsx(Dr,{children:m.totalMonthsApprox})]})]}):o.jsx("p",{style:{color:O=>O.theme.textSecondary},children:"Insira as datas para calcular."})]})]}),o.jsx("div",{style:{marginTop:"10px"},children:o.jsx($,{})})]})})]})}const ix=[10,15,20],cx=S.div`
    display: flex;
    gap: 20px;
    width: 100%;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`,ox=S.div`
    flex: 3;
    max-width: 650px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
`,ls=S.div`
    background-color: ${n=>n.theme.bgCard};
    color: ${n=>n.theme.textPrimary};
    padding: 25px;
    border-radius: 8px;
    box-shadow: ${n=>n.theme.shadow};
`,rx=S(ls)`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
`,_r=S.div`
    display: flex;
    flex-direction: column;
`,Mr=S.label`
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 0.95em;
    color: ${n=>n.theme.textSecondary};
`,Rr=S.input`
    padding: 12px;
    border: 1px solid ${n=>n.theme.border};
    border-radius: 6px;
    font-size: 1.1em;
    background-color: ${n=>n.theme.bgInput};
    color: ${n=>n.theme.textPrimary};
    transition: border-color 0.2s;
    text-align: right;
    
    &:focus {
        border-color: ${n=>n.theme.primary};
        outline: none;
        box-shadow: 0 0 0 2px ${n=>n.theme.primary}50;
    }
`,sx=S.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`,fx=S.button`
    flex: 1;
    padding: 10px;
    border: 1px solid ${n=>n.theme.border};
    border-radius: 6px;
    background-color: ${n=>n.active?n.theme.primary:n.theme.bgInput};
    color: ${n=>n.active?n.theme.textOnPrimary:n.theme.textPrimary};
    cursor: pointer;
    font-weight: ${n=>n.active?"bold":"normal"};
    transition: all 0.2s;
    
    &:hover {
        background-color: ${n=>n.active?n.theme.primary:n.theme.historyBg};
    }
`,M0=S.button`
    background-color: ${n=>n.theme.primary};
    color: ${n=>n.theme.textOnPrimary||"white"};
    padding: 12px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 600;
    transition: background-color 0.3s ease;
    
    &:hover:not(:disabled) {
        opacity: 0.9;
    }
    &:disabled {
        background-color: ${n=>n.theme.textSecondary}70;
        cursor: not-allowed;
    }
`,dx=S(ls)`
    border-left: 5px solid ${n=>n.theme.primary};
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    
    h3 {
        color: ${n=>n.theme.primary};
        font-size: 1.5em;
        margin-bottom: 5px;
    }
`,Hi=S.div`
    background-color: ${n=>n.theme.historyBg};
    padding: 10px 15px;
    border-radius: 6px;
    
    span {
        font-size: 0.9em;
        color: ${n=>n.theme.textSecondary};
    }
    p {
        font-size: 1.5em;
        font-weight: bold;
        color: ${n=>n.theme.textPrimary};
    }
`,hx=S(ls)`
    flex: 1; 
    min-width: 280px;
    max-height: 700px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`,mx=S.div`
    padding: 10px;
    margin-bottom: 8px;
    border-radius: 6px;
    background-color: ${n=>n.theme.historyBg}; 
    font-size: 0.9em;
    border-left: 5px solid ${n=>n.theme.primary};
    word-break: break-all;
    
    small {
        color: ${n=>n.theme.textSecondary};
    }
`,px=S(M0)`
    background-color: ${n=>n.theme.textSecondary};
    margin-top: 20px;
    &:hover:not(:disabled) {
        background-color: ${n=>n.theme.name==="light"?"#6c757d":"#8d8d8d"};
    }
`;function yx(){const[n,s]=V.useState(""),[d,r]=V.useState(15),[m,j]=V.useState(1),[C,B]=V.useState(null),[T,v]=Je("history-tip-calculator",[]),$=G=>{const L=parseFloat(G);return isNaN(L)?"R$ 0,00":L.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})},O=V.useCallback(()=>{const G=parseFloat(n.replace(",",".")),L=parseInt(m,10),J=parseFloat(d);if(isNaN(G)||G<=0||isNaN(L)||L<=0||isNaN(J)||J<0){B(null);return}const w=G*J/100,X=G+w,M=w/L,K=X/L;B({tipPercentage:J,billAmount:G,totalTip:w,totalWithTip:X,tipPerPerson:M,totalPerPerson:K,people:L});const q=`R$${n} + ${J}% de Gorjeta (por ${L} pessoas):`,lt=`Gorjeta Total: ${$(w)} | Total por Pessoa: ${$(K)}`,yt={operation:q,result:lt,date:new Date().toLocaleTimeString("pt-BR")};v(qt=>[yt,...qt.slice(0,49)])},[n,d,m,v]);V.useEffect(()=>{const G=L=>{L.key==="Enter"&&(L.preventDefault(),parseFloat(n)>0&&parseInt(m)>0&&O())};return window.addEventListener("keydown",G),()=>{window.removeEventListener("keydown",G)}},[n,m,O]);const z=()=>o.jsxs(hx,{children:[o.jsx("h3",{children:"Histórico de Gorjetas"}),o.jsx("div",{className:"history-list",children:T.length===0?o.jsx("p",{style:{color:"inherit"},children:"Nenhum cálculo registrado."}):T.map((G,L)=>o.jsxs(mx,{children:[o.jsx("small",{children:G.date}),o.jsx("p",{style:{margin:"5px 0"},children:o.jsx("span",{style:{fontWeight:"normal"},children:G.operation})}),o.jsxs("p",{style:{fontWeight:"bold"},children:["➡️ ",G.result]})]},L))}),o.jsx(px,{onClick:()=>v([]),children:"Limpar Histórico"})]}),H=()=>o.jsxs(rx,{children:[o.jsxs(_r,{children:[o.jsx(Mr,{htmlFor:"billAmount",children:"Valor da Conta (R$):"}),o.jsx(Rr,{id:"billAmount",type:"number",inputMode:"decimal",value:n,onChange:G=>s(G.target.value),placeholder:"Ex: 85.50",min:"0"})]}),o.jsxs(_r,{children:[o.jsx(Mr,{children:"Selecione a Porcentagem da Gorjeta:"}),o.jsxs(sx,{children:[ix.map(G=>o.jsxs(fx,{active:d===G,onClick:()=>r(G),children:[G,"%"]},G)),o.jsx(Rr,{type:"number",inputMode:"numeric",value:d,onChange:G=>r(G.target.value),placeholder:"Outra %",style:{flex:1.5,textAlign:"center"},min:"0"})]})]}),o.jsxs(_r,{children:[o.jsx(Mr,{htmlFor:"numberOfPeople",children:"Número de Pessoas:"}),o.jsx(Rr,{id:"numberOfPeople",type:"number",inputMode:"numeric",value:m,onChange:G=>j(G.target.value),placeholder:"1",min:"1"})]}),o.jsx(M0,{onClick:O,disabled:!n||parseFloat(n)<=0||parseInt(m)<=0,children:"Calcular Gorjeta (Enter)"})]}),Y=()=>o.jsxs(dx,{children:[o.jsxs("h3",{children:["Resumo da Conta (",C.tipPercentage,"% Gorjeta)"]}),o.jsxs(Hi,{children:[o.jsx("span",{children:"Gorjeta por Pessoa:"}),o.jsx("p",{children:$(C.tipPerPerson)})]}),o.jsxs(Hi,{children:[o.jsx("span",{children:"Total (Conta + Gorjeta) por Pessoa:"}),o.jsx("p",{children:$(C.totalPerPerson)})]}),o.jsxs(Hi,{style:{backgroundColor:G=>G.theme.primary+"20"},children:[o.jsxs("span",{children:["Gorjeta Total (",C.tipPercentage,"%):"]}),o.jsx("p",{style:{color:G=>G.theme.primary},children:$(C.totalTip)})]}),o.jsxs(Hi,{style:{backgroundColor:G=>G.theme.primary+"20"},children:[o.jsx("span",{children:"Total Geral (Conta + Gorjeta):"}),o.jsx("p",{style:{color:G=>G.theme.primary},children:$(C.totalWithTip)})]})]});return o.jsxs("div",{id:"tip-calculator",children:[o.jsx("h2",{children:"🧾 Calculadora de Gorjeta e Divisão de Conta"}),o.jsxs(cx,{children:[o.jsxs(ox,{children:[H(),C&&Y(),!C&&o.jsx("p",{style:{color:G=>G.theme.textSecondary,textAlign:"center",marginTop:"20px"},children:"Insira os valores da conta para calcular a gorjeta e a divisão."})]}),o.jsx(z,{})]})]})}const gx=S.div`
    display: flex;
    gap: 20px;
    width: 100%;
    align-items: flex-start;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`,vx=S.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 20px;
`,xx=S.div`
    display: flex;
    gap: 20px;
    width: 100%;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`,R0=S.div`
    background-color: ${n=>n.theme.bgCard};
    color: ${n=>n.theme.textPrimary};
    padding: 25px;
    border-radius: 8px;
    box-shadow: ${n=>n.theme.shadow};
`,Ym=S(R0)`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
`,Lm=S.h3`
    color: ${n=>n.theme.textPrimary};
    font-size: 1.2em;
    margin-bottom: 10px;
    font-weight: 600;
`,Xm=S.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
`,Qm=S.span`
    font-weight: 500;
    color: ${n=>n.theme.textSecondary};
    white-space: nowrap;
`,Ui=S.input`
    width: 100%;
    padding: 12px;
    border: 1px solid ${n=>n.theme.border};
    border-radius: 6px;
    font-size: 1.1em;
    background-color: ${n=>n.theme.bgInput}; /* Fundo cinza claro no light, escuro no dark */
    color: ${n=>n.theme.textPrimary};
    /* Texto escuro no light, branco no dark */
    transition: border-color 0.2s;
    text-align: center;
    &:focus {
        border-color: ${n=>n.theme.primary};
        outline: none;
        box-shadow: 0 0 0 2px ${n=>n.theme.primary}50;
    }
    
    &::placeholder {
        color: ${n=>n.theme.textSecondary};
        opacity: 0.7;
    }
`,Lr=S.button`
    background-color: ${n=>n.theme.primary};
    color: ${n=>n.theme.textOnPrimary||"white"};
    padding: 12px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
    width: 100%;
    transition: background-color 0.3s ease;
    &:hover:not(:disabled) {
        opacity: 0.9;
    }
    &:disabled { // <--- ESTILO PARA QUANDO ESTIVER DESABILITADO
        background-color: ${n=>n.theme.textSecondary}70;
        cursor: not-allowed;
    }
`,Zm=S.div`
    margin-top: 10px;
    padding: 15px;
    background-color: ${n=>n.theme.bgInput};
    /* Fundo sutil para o resultado */
    border-radius: 6px;
    text-align: center;
    p {
        font-size: 0.9em;
        color: ${n=>n.theme.textSecondary};
        margin-bottom: 5px;
    }
    
    strong {
        font-size: 1.8em;
        color: ${n=>n.theme.primary};
        display: block;
    }
`,bx=S(R0)`
    flex: 1;
    min-width: 280px;
    max-height: 600px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`,Sx=S.div`
    flex-grow: 1;
    overflow-y: auto;
    margin-top: 15px;
`,jx=S.div`
    padding: 10px;
    margin-bottom: 8px;
    border-radius: 6px;
    background-color: ${n=>n.theme.historyBg}; 
    font-size: 0.9em;
    border-left: 5px solid ${n=>n.theme.primary};
    word-break: break-all;
`,Ex=S(Lr)`
    background-color: #dc3545; /* Vermelho conforme a foto */
    margin-top: 20px;
    &:hover:not(:disabled) {
        background-color: #c82333;
    }
`;function Tx(){const[n,s]=V.useState(""),[d,r]=V.useState(""),[m,j]=V.useState(null),[C,B]=V.useState(""),[T,v]=V.useState(""),[$,O]=V.useState(null),[z,H]=Je("history-percentage",[]),Y=M=>parseFloat(M).toLocaleString("pt-BR",{maximumFractionDigits:2}),G=V.useCallback(()=>{const M=parseFloat(n.replace(",",".")),K=parseFloat(d.replace(",","."));if(isNaN(M)||isNaN(K))return;const W=M/100*K,q=Y(W);j(q);const lt={equation:`${M}% de ${K}`,result:q,date:new Date().toLocaleTimeString("pt-BR")};H(yt=>[lt,...yt.slice(0,49)])},[n,d,H]),L=V.useCallback(()=>{const M=parseFloat(C.replace(",",".")),K=parseFloat(T.replace(",","."));if(isNaN(M)||isNaN(K)||K===0)return;const W=M/K*100,q=Y(W)+"%";O(q);const lt={equation:`${M} é qual % de ${K}?`,result:q,date:new Date().toLocaleTimeString("pt-BR")};H(yt=>[lt,...yt.slice(0,49)])},[C,T,H]),J=M=>{M.key==="Enter"&&n&&d&&G()},w=M=>{M.key==="Enter"&&C&&T&&L()},X=()=>o.jsxs(bx,{children:[o.jsx("h3",{style:{fontSize:"1.1em"},children:"Histórico de Porcentagem"}),o.jsx(Sx,{children:z.length===0?o.jsx("p",{style:{color:"inherit",textAlign:"center",marginTop:"20px",fontSize:"0.9em"},children:"Nenhum cálculo registrado."}):z.map((M,K)=>o.jsxs(jx,{children:[o.jsx("small",{style:{color:"inherit",opacity:.7},children:M.date}),o.jsx("p",{style:{margin:"5px 0"},children:o.jsx("span",{style:{fontWeight:"normal"},children:M.equation})}),o.jsxs("p",{style:{fontWeight:"bold"},children:["= ",M.result]})]},K))}),o.jsx(Ex,{onClick:()=>H([]),children:"Limpar Histórico"})]});return o.jsxs("div",{id:"percentage",children:[o.jsx("h2",{style:{marginBottom:"20px"},children:" 📊 Calculadora de Porcentagem"}),o.jsxs(gx,{children:[o.jsx(vx,{children:o.jsxs(xx,{children:[o.jsxs(Ym,{children:[o.jsx(Lm,{children:"Quanto é X% de Y?"}),o.jsxs(Xm,{children:[o.jsx(Ui,{type:"text",inputMode:"decimal",placeholder:"X",value:n,onChange:M=>s(M.target.value),onKeyDown:J}),o.jsx(Qm,{children:"% de"}),o.jsx(Ui,{type:"text",inputMode:"decimal",placeholder:"Y",value:d,onChange:M=>r(M.target.value),onKeyDown:J})]}),o.jsx(Lr,{onClick:G,disabled:!n||!d,children:"Calcular (Enter)"}),m&&o.jsxs(Zm,{children:[o.jsx("p",{children:"Resultado:"}),o.jsx("strong",{children:m})]})]}),o.jsxs(Ym,{children:[o.jsx(Lm,{children:"X é qual porcentagem de Y?"}),o.jsxs(Xm,{children:[o.jsx(Ui,{type:"text",inputMode:"decimal",placeholder:"X",value:C,onChange:M=>B(M.target.value),onKeyDown:w}),o.jsx(Qm,{children:"é qual % de"}),o.jsx(Ui,{type:"text",inputMode:"decimal",placeholder:"Y",value:T,onChange:M=>v(M.target.value),onKeyDown:w})]}),o.jsx(Lr,{onClick:L,disabled:!C||!T,children:"Calcular (Enter)"}),$&&o.jsxs(Zm,{children:[o.jsx("p",{children:"Resultado:"}),o.jsx("strong",{children:$})]})]})]})}),o.jsx(X,{})]})]})}const zx={imc:B1,moedas:V1,senha:nv,metricas:vv,padrao:Mv,combustivel:Yv,juros:Fv,data:ux,gorjeta:yx,porcentagem:Tx};function Ax(){const[n,s]=V.useState(()=>localStorage.getItem("app-theme")==="dark"?Dm:Om),d=()=>{const C=n.name==="light"?Dm:Om;s(C),localStorage.setItem("app-theme",C.name)},[r,m]=V.useState(()=>localStorage.getItem("active-tab")||"imc");le.useEffect(()=>{localStorage.setItem("active-tab",r)},[r]);const j=zx[r];return o.jsxs(s1,{theme:n,children:[o.jsx(m1,{}),o.jsxs(p1,{children:[o.jsx(T1,{activeTab:r,setActiveTab:m,toggleTheme:d,themeName:n.name}),o.jsx(y1,{children:j?o.jsx(j,{}):o.jsx("h2",{children:"Ferramenta não encontrada."})})]})]})}dg.createRoot(document.getElementById("root")).render(o.jsx(le.StrictMode,{children:o.jsx(Ax,{})}));
