import{g as P,i as We,u as F,o as D,c as j,a as w,F as Ke,j as Ge,t as O,n as Q,k as Xe,f as U,l as Qe,v as Ze,p as Ye,m as et}from"./app-rds9m_Rj.js";import{_ as tt}from"./plugin-vue_export-helper-x3n3nnut.js";const ae=e=>(Ye("data-v-e3df02ca"),e=e(),et(),e),nt={key:0,class:"pool-body"},rt={class:"pool-content"},st={class:"content-mask"},ot={class:"content left"},it={class:"content right"},at={class:"star"},ct={class:"operate-mask"},lt={class:"operate-button-group"},ut=["onClick"],ft=ae(()=>w("i",{class:"fa-solid fa-share-from-square"},null,-1)),dt=[ft],pt=["onClick"],ht={class:"fa-solid fa-copy"},mt=["onClick"],yt=ae(()=>w("i",{class:"fa-solid fa-download"},null,-1)),bt=[yt],wt={class:"pool-title"},Et={key:1,class:"pool-body loading"},St=ae(()=>w("i",{class:"fa-solid fa-spinner fa-spin"},null,-1)),gt={__name:"mapPool",props:{mapData:{type:Object,default:{}}},setup(e){let t=P("https://assets.ppy.sh/beatmaps/"),n=P("/covers/card.jpg"),r=P("http://osu.ppy.sh/b/"),s=P("https://dl.sayobot.cn/beatmaps/download/"),o=P({}),i=P({});const l=e;function p(c){let b=r.value+c;window.open(b,"_blank")}function h(c){let b=document.createElement("input");b.value=c.data.id,document.body.appendChild(b),b.select(),document.execCommand("Copy"),b.remove(),c.isCopied=!0,setTimeout(()=>{c.isCopied=!1},1e3)}function u(c){let b=s.value+c;window.open(b,"_self")}return We(()=>{o.value=l.mapData.data,i.value=l.mapData.status}),(c,b)=>F(i).isLoading?(D(),j("div",Et,[St,w("span",null,"loading beatmaps ... ( "+O(F(o).length)+" / "+O(e.mapData.sets.length)+" )",1)])):(D(),j("div",nt,[w("div",rt,[(D(!0),j(Ke,null,Ge(F(o),(y,d)=>(D(),j("div",{key:d,class:Q(["map-panel",y.isLast?"last":""]),style:Xe({"background-image":`url(${F(t)+y.data.beatmapset_id+F(n)}) `})},[w("div",st,[U(" #region 谱面信息 "),w("div",ot,[w("span",null,O(y.data.beatmapset.title),1),w("span",null,O(y.data.beatmapset.artist)+" // "+O(y.data.beatmapset.creator),1),w("span",null,O(y.data.version)+" - b"+O(y.data.id),1)]),w("div",it,[w("div",{class:Q(["tag",y.tag])},[w("span",null,O(y.tag),1)],2),w("div",at,[w("span",null,O(y.data.difficulty_rating)+"*",1)])]),U(" #endregion "),U(" #region 快捷按钮组 "),w("div",ct,[w("div",lt,[w("div",{class:"website-btn",title:"查看官网谱面信息",onClick:f=>p(y.data.id)},dt,8,ut),w("div",{class:"copy-btn",title:"复制谱面ID",onClick:f=>h(y)},[Qe(w("i",ht,null,512),[[Ze,!y.isCopied]]),y.isCopied?(D(),j("i",{key:0,class:Q(["fa-solid fa-check",y.isCopied?"copied":""])},null,2)):U("v-if",!0)],8,pt),w("div",{class:"download-btn",title:"下载该谱面",onClick:f=>u(y.data.beatmapset_id)},bt,8,mt)])]),U(" #endregion ")])],6))),128))]),w("div",wt,[w("span",null,O(F(i).title),1)])]))}},Vn=tt(gt,[["__scopeId","data-v-e3df02ca"],["__file","mapPool.vue"]]);function _e(e,t){return function(){return e.apply(t,arguments)}}const{toString:Rt}=Object.prototype,{getPrototypeOf:ce}=Object,V=(e=>t=>{const n=Rt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),_=e=>(e=e.toLowerCase(),t=>V(t)===e),W=e=>t=>typeof t===e,{isArray:B}=Array,I=W("undefined");function Ot(e){return e!==null&&!I(e)&&e.constructor!==null&&!I(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Te=_("ArrayBuffer");function At(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Te(e.buffer),t}const _t=W("string"),R=W("function"),Ce=W("number"),K=e=>e!==null&&typeof e=="object",Tt=e=>e===!0||e===!1,v=e=>{if(V(e)!=="object")return!1;const t=ce(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ct=_("Date"),xt=_("File"),Nt=_("Blob"),Pt=_("FileList"),Ft=e=>K(e)&&R(e.pipe),kt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=V(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},Bt=_("URLSearchParams"),Dt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function H(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),B(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function xe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Ne=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Pe=e=>!I(e)&&e!==Ne;function ne(){const{caseless:e}=Pe(this)&&this||{},t={},n=(r,s)=>{const o=e&&xe(t,s)||s;v(t[o])&&v(r)?t[o]=ne(t[o],r):v(r)?t[o]=ne({},r):B(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&H(arguments[r],n);return t}const jt=(e,t,n,{allOwnKeys:r}={})=>(H(t,(s,o)=>{n&&R(s)?e[o]=_e(s,n):e[o]=s},{allOwnKeys:r}),e),Ut=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Lt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},It=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&ce(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ht=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Mt=e=>{if(!e)return null;if(B(e))return e;let t=e.length;if(!Ce(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},qt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ce(Uint8Array)),vt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},zt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Jt=_("HTMLFormElement"),$t=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),he=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Vt=_("RegExp"),Fe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};H(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Wt=e=>{Fe(e,(t,n)=>{if(R(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(R(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Kt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return B(e)?r(e):r(String(e).split(t)),n},Gt=()=>{},Xt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Z="abcdefghijklmnopqrstuvwxyz",me="0123456789",ke={DIGIT:me,ALPHA:Z,ALPHA_DIGIT:Z+Z.toUpperCase()+me},Qt=(e=16,t=ke.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Zt(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Yt=e=>{const t=new Array(10),n=(r,s)=>{if(K(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=B(r)?[]:{};return H(r,(i,l)=>{const p=n(i,s+1);!I(p)&&(o[l]=p)}),t[s]=void 0,o}}return r};return n(e,0)},en=_("AsyncFunction"),tn=e=>e&&(K(e)||R(e))&&R(e.then)&&R(e.catch),a={isArray:B,isArrayBuffer:Te,isBuffer:Ot,isFormData:kt,isArrayBufferView:At,isString:_t,isNumber:Ce,isBoolean:Tt,isObject:K,isPlainObject:v,isUndefined:I,isDate:Ct,isFile:xt,isBlob:Nt,isRegExp:Vt,isFunction:R,isStream:Ft,isURLSearchParams:Bt,isTypedArray:qt,isFileList:Pt,forEach:H,merge:ne,extend:jt,trim:Dt,stripBOM:Ut,inherits:Lt,toFlatObject:It,kindOf:V,kindOfTest:_,endsWith:Ht,toArray:Mt,forEachEntry:vt,matchAll:zt,isHTMLForm:Jt,hasOwnProperty:he,hasOwnProp:he,reduceDescriptors:Fe,freezeMethods:Wt,toObjectSet:Kt,toCamelCase:$t,noop:Gt,toFiniteNumber:Xt,findKey:xe,global:Ne,isContextDefined:Pe,ALPHABET:ke,generateString:Qt,isSpecCompliantForm:Zt,toJSONObject:Yt,isAsyncFn:en,isThenable:tn};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Be=m.prototype,De={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{De[e]={value:e}});Object.defineProperties(m,De);Object.defineProperty(Be,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Be);return a.toFlatObject(e,i,function(p){return p!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const nn=null;function re(e){return a.isPlainObject(e)||a.isArray(e)}function je(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ye(e,t,n){return e?e.concat(t).map(function(s,o){return s=je(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function rn(e){return a.isArray(e)&&!e.some(re)}const sn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function G(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,S){return!a.isUndefined(S[f])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function h(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!p&&a.isBlob(d))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?p&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,f,S){let g=d;if(d&&!S&&typeof d=="object"){if(a.endsWith(f,"{}"))f=r?f:f.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&rn(d)||(a.isFileList(d)||a.endsWith(f,"[]"))&&(g=a.toArray(d)))return f=je(f),g.forEach(function(x,Ve){!(a.isUndefined(x)||x===null)&&t.append(i===!0?ye([f],Ve,o):i===null?f:f+"[]",h(x))}),!1}return re(d)?!0:(t.append(ye(S,f,o),h(d)),!1)}const c=[],b=Object.assign(sn,{defaultVisitor:u,convertValue:h,isVisitable:re});function y(d,f){if(!a.isUndefined(d)){if(c.indexOf(d)!==-1)throw Error("Circular reference detected in "+f.join("."));c.push(d),a.forEach(d,function(g,C){(!(a.isUndefined(g)||g===null)&&s.call(t,g,a.isString(C)?C.trim():C,f,b))===!0&&y(g,f?f.concat(C):[C])}),c.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function be(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function le(e,t){this._pairs=[],e&&G(e,this,t)}const Ue=le.prototype;Ue.append=function(t,n){this._pairs.push([t,n])};Ue.toString=function(t){const n=t?function(r){return t.call(this,r,be)}:be;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function on(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Le(e,t,n){if(!t)return e;const r=n&&n.encode||on,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new le(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class an{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const we=an,Ie={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},cn=typeof URLSearchParams<"u"?URLSearchParams:le,ln=typeof FormData<"u"?FormData:null,un=typeof Blob<"u"?Blob:null,fn={isBrowser:!0,classes:{URLSearchParams:cn,FormData:ln,Blob:un},protocols:["http","https","file","blob","url","data"]},He=typeof window<"u"&&typeof document<"u",dn=(e=>He&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),pn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",hn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:He,hasStandardBrowserEnv:dn,hasStandardBrowserWebWorkerEnv:pn},Symbol.toStringTag,{value:"Module"})),A={...hn,...fn};function mn(e,t){return G(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return A.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function yn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function bn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Me(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const l=Number.isFinite(+i),p=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,p?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=bn(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(yn(r),s,n,0)}),n}return null}function wn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ue={transitional:Ie,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Me(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return mn(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return G(l?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),wn(t)):t}],transformResponse:[function(t){const n=this.transitional||ue.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ue.headers[e]={}});const fe=ue,En=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Sn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&En[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ee=Symbol("internals");function L(e){return e&&String(e).trim().toLowerCase()}function z(e){return e===!1||e==null?e:a.isArray(e)?e.map(z):String(e)}function gn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Rn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Y(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function On(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function An(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class X{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,p,h){const u=L(p);if(!u)throw new Error("header name must be a non-empty string");const c=a.findKey(s,u);(!c||s[c]===void 0||h===!0||h===void 0&&s[c]!==!1)&&(s[c||p]=z(l))}const i=(l,p)=>a.forEach(l,(h,u)=>o(h,u,p));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Rn(t)?i(Sn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=L(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return gn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=L(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Y(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=L(i),i){const l=a.findKey(r,i);l&&(!n||Y(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Y(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=z(s),delete n[o];return}const l=t?On(o):String(o).trim();l!==o&&delete n[o],n[l]=z(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ee]=this[Ee]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=L(i);r[l]||(An(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}X.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(X.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(X);const T=X;function ee(e,t){const n=this||fe,r=t||n,s=T.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function qe(e){return!!(e&&e.__CANCEL__)}function M(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(M,m,{__CANCEL__:!0});function _n(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Tn=A.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Cn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function xn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function ve(e,t){return e&&!Cn(t)?xn(e,t):t}const Nn=A.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Pn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Fn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(p){const h=Date.now(),u=r[o];i||(i=h),n[s]=p,r[s]=h;let c=o,b=0;for(;c!==s;)b+=n[c++],c=c%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),h-i<t)return;const y=u&&h-u;return y?Math.round(b*1e3/y):void 0}}function Se(e,t){let n=0;const r=Fn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,p=r(l),h=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:p||void 0,estimated:p&&i&&h?(i-o)/p:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const kn=typeof XMLHttpRequest<"u",Bn=kn&&function(e){return new Promise(function(n,r){let s=e.data;const o=T.from(e.headers).normalize();let{responseType:i,withXSRFToken:l}=e,p;function h(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}let u;if(a.isFormData(s)){if(A.hasStandardBrowserEnv||A.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((u=o.getContentType())!==!1){const[f,...S]=u?u.split(";").map(g=>g.trim()).filter(Boolean):[];o.setContentType([f||"multipart/form-data",...S].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const f=e.auth.username||"",S=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(f+":"+S))}const b=ve(e.baseURL,e.url);c.open(e.method.toUpperCase(),Le(b,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function y(){if(!c)return;const f=T.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),g={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:f,config:e,request:c};_n(function(x){n(x),h()},function(x){r(x),h()},g),c=null}if("onloadend"in c?c.onloadend=y:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(y)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const g=e.transitional||Ie;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),r(new m(S,g.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},A.hasStandardBrowserEnv&&(l&&a.isFunction(l)&&(l=l(e)),l||l!==!1&&Nn(b))){const f=e.xsrfHeaderName&&e.xsrfCookieName&&Tn.read(e.xsrfCookieName);f&&o.set(e.xsrfHeaderName,f)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(S,g){c.setRequestHeader(g,S)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Se(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Se(e.onUploadProgress)),(e.cancelToken||e.signal)&&(p=f=>{c&&(r(!f||f.type?new M(null,e,c):f),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p)));const d=Pn(b);if(d&&A.protocols.indexOf(d)===-1){r(new m("Unsupported protocol "+d+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},se={http:nn,xhr:Bn};a.forEach(se,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ge=e=>`- ${e}`,Dn=e=>a.isFunction(e)||e===null||e===!1,ze={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Dn(n)&&(r=se[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,p])=>`adapter ${l} `+(p===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(ge).join(`
`):" "+ge(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:se};function te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new M(null,e)}function Re(e){return te(e),e.headers=T.from(e.headers),e.data=ee.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ze.getAdapter(e.adapter||fe.adapter)(e).then(function(r){return te(e),r.data=ee.call(e,e.transformResponse,r),r.headers=T.from(r.headers),r},function(r){return qe(r)||(te(e),r&&r.response&&(r.response.data=ee.call(e,e.transformResponse,r.response),r.response.headers=T.from(r.response.headers))),Promise.reject(r)})}const Oe=e=>e instanceof T?{...e}:e;function k(e,t){t=t||{};const n={};function r(h,u,c){return a.isPlainObject(h)&&a.isPlainObject(u)?a.merge.call({caseless:c},h,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(h,u,c){if(a.isUndefined(u)){if(!a.isUndefined(h))return r(void 0,h,c)}else return r(h,u,c)}function o(h,u){if(!a.isUndefined(u))return r(void 0,u)}function i(h,u){if(a.isUndefined(u)){if(!a.isUndefined(h))return r(void 0,h)}else return r(void 0,u)}function l(h,u,c){if(c in t)return r(h,u);if(c in e)return r(void 0,h)}const p={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(h,u)=>s(Oe(h),Oe(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const c=p[u]||s,b=c(e[u],t[u],u);a.isUndefined(b)&&c!==l||(n[u]=b)}),n}const Je="1.6.8",de={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{de[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ae={};de.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Je+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Ae[i]&&(Ae[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function jn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],p=l===void 0||i(l,o,e);if(p!==!0)throw new m("option "+o+" must be "+p,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const oe={assertOptions:jn,validators:de},N=oe.validators;class ${constructor(t){this.defaults=t,this.interceptors={request:new we,response:new we}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=k(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&oe.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:oe.assertOptions(s,{encode:N.function,serialize:N.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=T.concat(i,o);const l=[];let p=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(n)===!1||(p=p&&f.synchronous,l.unshift(f.fulfilled,f.rejected))});const h=[];this.interceptors.response.forEach(function(f){h.push(f.fulfilled,f.rejected)});let u,c=0,b;if(!p){const d=[Re.bind(this),void 0];for(d.unshift.apply(d,l),d.push.apply(d,h),b=d.length,u=Promise.resolve(n);c<b;)u=u.then(d[c++],d[c++]);return u}b=l.length;let y=n;for(c=0;c<b;){const d=l[c++],f=l[c++];try{y=d(y)}catch(S){f.call(this,S);break}}try{u=Re.call(this,y)}catch(d){return Promise.reject(d)}for(c=0,b=h.length;c<b;)u=u.then(h[c++],h[c++]);return u}getUri(t){t=k(this.defaults,t);const n=ve(t.baseURL,t.url);return Le(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){$.prototype[t]=function(n,r){return this.request(k(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(k(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}$.prototype[t]=n(),$.prototype[t+"Form"]=n(!0)});const J=$;class pe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new M(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new pe(function(s){t=s}),cancel:t}}}const Un=pe;function Ln(e){return function(n){return e.apply(null,n)}}function In(e){return a.isObject(e)&&e.isAxiosError===!0}const ie={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ie).forEach(([e,t])=>{ie[t]=e});const Hn=ie;function $e(e){const t=new J(e),n=_e(J.prototype.request,t);return a.extend(n,J.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return $e(k(e,s))},n}const E=$e(fe);E.Axios=J;E.CanceledError=M;E.CancelToken=Un;E.isCancel=qe;E.VERSION=Je;E.toFormData=G;E.AxiosError=m;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=Ln;E.isAxiosError=In;E.mergeConfig=k;E.AxiosHeaders=T;E.formToJSON=e=>Me(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=ze.getAdapter;E.HttpStatusCode=Hn;E.default=E;const q=E;q.defaults.timeout=6e4;q.defaults.baseURL="https://bot.365246692.xyz";q.interceptors.request.use(e=>(e.headers={"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"},e),e=>Promise.reject(e));q.interceptors.response.use(e=>e,e=>{const{response:t}=e;if(console.log(e),t)return showMessage(t.status),Promise.reject(t.data);message.error(i18n.global.t("notification.badNetwork"))});const Mn=e=>q({method:"get",url:`/pub/api/info/${e}`});async function qn(e,t){for(let n in e){let r=e[n].sets,s=e[n].data;for(let o of r)await Mn(o.id).then(i=>{if(i.status&&i.data){let l=i.data,p=o.tag,u=Object.assign(l,{tag:p,isLast:!1});s.push(u),o===r[r.length-1]&&(e[n].status.isLoading=!1,zn(s))}})}localStorage.setItem(t,JSON.stringify(e))}function vn(e){let n=e.src.split(" "),r=e.sets,s={},o;for(let i in n)isNaN(parseInt(n[i]))?o=n[i]:(s={id:n[i],tag:o},r.push(s));return e}function Wn(e,t){let n=JSON.parse(localStorage.getItem(t));if(n)e=n;else{for(let r in e)vn(e[r]);qn(e,t)}return e}function zn(e){let t=e,n=0;for(let r=0;r<t.length;r++){for(let s=1;s<t.length;s++)if(s===r+1&&t[r].tag!==t[s].tag){let o=t.slice(n,r+1);n=r+1,o.length%2!==0&&o.map(i=>{i===o[o.length-1]&&(i.isLast=!0)})}t[t.length-1].isLast=!0}}export{Vn as M,Wn as g};
