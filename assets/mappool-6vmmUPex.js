import{g as P,j as Ke,k as Ge,u as D,o as k,c as F,a as b,F as Xe,l as Qe,t as O,n as v,m as Ze,f as B,d as Z,q as Ye,v as et,p as tt,i as nt}from"./app-w2ML5WHw.js";import{_ as rt}from"./plugin-vue_export-helper-x3n3nnut.js";const ce=e=>(tt("data-v-162000c2"),e=e(),nt(),e),st={key:0,class:"pool-body"},ot={class:"pool-content"},it=["onClick"],at={class:"content left"},ct={key:0},lt={class:"content right"},ut={class:"star"},ft={key:0},dt={class:"operate-button-group"},pt=["onClick"],ht=ce(()=>b("i",{class:"fa-solid fa-share-from-square"},null,-1)),mt=[ht],yt=["onClick"],bt={class:"fa-solid fa-copy"},wt=["onClick"],Et=ce(()=>b("i",{class:"fa-solid fa-download"},null,-1)),St=[Et],gt={class:"pool-title"},Ot={key:1,class:"pool-body loading"},Rt=ce(()=>b("i",{class:"fa-solid fa-spinner fa-spin"},null,-1)),_t={__name:"mapPool",props:{mapData:{type:Object,default:{}}},setup(e){let t=P("https://assets.ppy.sh/beatmaps/"),n=P("/covers/card.jpg"),r=P("http://osu.ppy.sh/b/"),s=P("https://dl.sayobot.cn/beatmaps/download/"),o=P({}),i=P({}),c=P({});const p=e;function h(y){y&&(y.clicked=!y.clicked,c.value=y)}function d(y){let f=r.value+y;window.open(f,"_blank")}function l(y){let f=document.createElement("input");f.value=y.data.id,document.body.appendChild(f),f.select(),document.execCommand("Copy"),f.remove(),y.isCopied=!0,setTimeout(()=>{y.isCopied=!1},1e3)}function w(y){let f=s.value+y;window.open(f,"_self")}return Ke(c,(y,f)=>{y!==f&&(f.clicked=!1,y.clicked=!0)},{deep:!1,immediate:!1}),Ge(()=>{o.value=p.mapData.data,o.value.map(y=>Object.assign(y,{clicked:!1})),i.value=p.mapData.status}),(y,f)=>D(i).isLoading?(k(),F("div",Ot,[Rt,b("span",null,"loading beatmaps ... ( "+O(D(o).length)+" / "+O(e.mapData.sets.length)+" )",1)])):(k(),F("div",st,[b("div",ot,[(k(!0),F(Xe,null,Qe(D(o),(u,S)=>(k(),F("div",{key:S,class:v(["map-panel",u.isLast?"last":""]),style:Ze({"background-image":`url(${D(t)+u.data.beatmapset_id+D(n)}) `})},[b("div",{class:"content-mask",onClick:g=>h(u)},[B(" #region 谱面信息 "),b("div",at,[b("span",null,[Z(O(u.data.beatmapset.title)+" ",1),u.data.beatmapset.title!==u.data.beatmapset.title_unicode?(k(),F("span",ct,O(u.data.beatmapset.title_unicode),1)):B("v-if",!0)]),b("span",null,O(u.data.beatmapset.artist)+" // "+O(u.data.beatmapset.creator),1),b("span",null,O(u.data.version)+" - b"+O(u.data.id),1)]),b("div",lt,[b("div",{class:v(["tag",u.tag])},[b("span",null,O(u.tag),1)],2),b("div",ut,[b("span",null,[Z(O(u.data.difficulty_rating.toString().split(".")[0]),1),u.data.difficulty_rating.toString().split(".")[1]?(k(),F("span",ft,O("."+u.data.difficulty_rating.toString().split(".")[1]),1)):B("v-if",!0),Z("* ")])])]),B(" #endregion "),B(" #region 快捷按钮组 "),b("div",{class:v(["operate-mask",u.clicked?"clicked":""])},[b("div",dt,[b("div",{class:"website-btn",title:"查看官网谱面信息",onClick:g=>d(u.data.id)},mt,8,pt),b("div",{class:"copy-btn",title:"复制谱面ID",onClick:g=>l(u)},[Ye(b("i",bt,null,512),[[et,!u.isCopied]]),u.isCopied?(k(),F("i",{key:0,class:v(["fa-solid fa-check",u.isCopied?"copied":""])},null,2)):B("v-if",!0)],8,yt),b("div",{class:"download-btn",title:"下载该谱面",onClick:g=>w(u.data.beatmapset_id)},St,8,wt)])],2),B(" #endregion ")],8,it)],6))),128))]),b("div",gt,[b("span",null,O(D(i).title),1)])]))}},Gn=rt(_t,[["__scopeId","data-v-162000c2"],["__file","mapPool.vue"]]);function Te(e,t){return function(){return e.apply(t,arguments)}}const{toString:At}=Object.prototype,{getPrototypeOf:le}=Object,W=(e=>t=>{const n=At.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>W(t)===e),K=e=>t=>typeof t===e,{isArray:U}=Array,I=K("undefined");function Tt(e){return e!==null&&!I(e)&&e.constructor!==null&&!I(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ce=A("ArrayBuffer");function Ct(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ce(e.buffer),t}const xt=K("string"),R=K("function"),xe=K("number"),G=e=>e!==null&&typeof e=="object",Nt=e=>e===!0||e===!1,z=e=>{if(W(e)!=="object")return!1;const t=le(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Pt=A("Date"),kt=A("File"),Ft=A("Blob"),Bt=A("FileList"),Dt=e=>G(e)&&R(e.pipe),jt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=W(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},Ut=A("URLSearchParams"),Lt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function H(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),U(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Ne(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Pe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ke=e=>!I(e)&&e!==Pe;function re(){const{caseless:e}=ke(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ne(t,s)||s;z(t[o])&&z(r)?t[o]=re(t[o],r):z(r)?t[o]=re({},r):U(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&H(arguments[r],n);return t}const It=(e,t,n,{allOwnKeys:r}={})=>(H(t,(s,o)=>{n&&R(s)?e[o]=Te(s,n):e[o]=s},{allOwnKeys:r}),e),Ht=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Mt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},qt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&le(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},vt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},zt=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!xe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},$t=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&le(Uint8Array)),Jt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Vt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Wt=A("HTMLFormElement"),Kt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),me=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Gt=A("RegExp"),Fe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};H(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Xt=e=>{Fe(e,(t,n)=>{if(R(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(R(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Qt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return U(e)?r(e):r(String(e).split(t)),n},Zt=()=>{},Yt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Y="abcdefghijklmnopqrstuvwxyz",ye="0123456789",Be={DIGIT:ye,ALPHA:Y,ALPHA_DIGIT:Y+Y.toUpperCase()+ye},en=(e=16,t=Be.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function tn(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const nn=e=>{const t=new Array(10),n=(r,s)=>{if(G(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=U(r)?[]:{};return H(r,(i,c)=>{const p=n(i,s+1);!I(p)&&(o[c]=p)}),t[s]=void 0,o}}return r};return n(e,0)},rn=A("AsyncFunction"),sn=e=>e&&(G(e)||R(e))&&R(e.then)&&R(e.catch),a={isArray:U,isArrayBuffer:Ce,isBuffer:Tt,isFormData:jt,isArrayBufferView:Ct,isString:xt,isNumber:xe,isBoolean:Nt,isObject:G,isPlainObject:z,isUndefined:I,isDate:Pt,isFile:kt,isBlob:Ft,isRegExp:Gt,isFunction:R,isStream:Dt,isURLSearchParams:Ut,isTypedArray:$t,isFileList:Bt,forEach:H,merge:re,extend:It,trim:Lt,stripBOM:Ht,inherits:Mt,toFlatObject:qt,kindOf:W,kindOfTest:A,endsWith:vt,toArray:zt,forEachEntry:Jt,matchAll:Vt,isHTMLForm:Wt,hasOwnProperty:me,hasOwnProp:me,reduceDescriptors:Fe,freezeMethods:Xt,toObjectSet:Qt,toCamelCase:Kt,noop:Zt,toFiniteNumber:Yt,findKey:Ne,global:Pe,isContextDefined:ke,ALPHABET:Be,generateString:en,isSpecCompliantForm:tn,toJSONObject:nn,isAsyncFn:rn,isThenable:sn};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const De=m.prototype,je={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{je[e]={value:e}});Object.defineProperties(m,je);Object.defineProperty(De,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(De);return a.toFlatObject(e,i,function(p){return p!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const on=null;function se(e){return a.isPlainObject(e)||a.isArray(e)}function Ue(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function be(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ue(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function an(e){return a.isArray(e)&&!e.some(se)}const cn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function X(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(u,S){return!a.isUndefined(S[u])});const r=n.metaTokens,s=n.visitor||d,o=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function h(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!p&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?p&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function d(f,u,S){let g=f;if(f&&!S&&typeof f=="object"){if(a.endsWith(u,"{}"))u=r?u:u.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&an(f)||(a.isFileList(f)||a.endsWith(u,"[]"))&&(g=a.toArray(f)))return u=Ue(u),g.forEach(function(x,We){!(a.isUndefined(x)||x===null)&&t.append(i===!0?be([u],We,o):i===null?u:u+"[]",h(x))}),!1}return se(f)?!0:(t.append(be(S,u,o),h(f)),!1)}const l=[],w=Object.assign(cn,{defaultVisitor:d,convertValue:h,isVisitable:se});function y(f,u){if(!a.isUndefined(f)){if(l.indexOf(f)!==-1)throw Error("Circular reference detected in "+u.join("."));l.push(f),a.forEach(f,function(g,C){(!(a.isUndefined(g)||g===null)&&s.call(t,g,a.isString(C)?C.trim():C,u,w))===!0&&y(g,u?u.concat(C):[C])}),l.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function we(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ue(e,t){this._pairs=[],e&&X(e,this,t)}const Le=ue.prototype;Le.append=function(t,n){this._pairs.push([t,n])};Le.toString=function(t){const n=t?function(r){return t.call(this,r,we)}:we;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function ln(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ie(e,t,n){if(!t)return e;const r=n&&n.encode||ln,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ue(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class un{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ee=un,He={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},fn=typeof URLSearchParams<"u"?URLSearchParams:ue,dn=typeof FormData<"u"?FormData:null,pn=typeof Blob<"u"?Blob:null,hn={isBrowser:!0,classes:{URLSearchParams:fn,FormData:dn,Blob:pn},protocols:["http","https","file","blob","url","data"]},Me=typeof window<"u"&&typeof document<"u",mn=(e=>Me&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),yn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",bn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Me,hasStandardBrowserEnv:mn,hasStandardBrowserWebWorkerEnv:yn},Symbol.toStringTag,{value:"Module"})),_={...bn,...hn};function wn(e,t){return X(e,new _.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return _.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function En(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Sn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function qe(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),p=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,p?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Sn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(En(r),s,n,0)}),n}return null}function gn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const fe={transitional:He,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(qe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return wn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return X(c?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),gn(t)):t}],transformResponse:[function(t){const n=this.transitional||fe.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_.classes.FormData,Blob:_.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{fe.headers[e]={}});const de=fe,On=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Rn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&On[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Se=Symbol("internals");function L(e){return e&&String(e).trim().toLowerCase()}function $(e){return e===!1||e==null?e:a.isArray(e)?e.map($):String(e)}function _n(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const An=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ee(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Tn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Cn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class Q{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,p,h){const d=L(p);if(!d)throw new Error("header name must be a non-empty string");const l=a.findKey(s,d);(!l||s[l]===void 0||h===!0||h===void 0&&s[l]!==!1)&&(s[l||p]=$(c))}const i=(c,p)=>a.forEach(c,(h,d)=>o(h,d,p));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!An(t)?i(Rn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=L(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return _n(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=L(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ee(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=L(i),i){const c=a.findKey(r,i);c&&(!n||ee(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ee(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=$(s),delete n[o];return}const c=t?Tn(o):String(o).trim();c!==o&&delete n[o],n[c]=$(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Se]=this[Se]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=L(i);r[c]||(Cn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}Q.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(Q.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(Q);const T=Q;function te(e,t){const n=this||de,r=t||n,s=T.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ve(e){return!!(e&&e.__CANCEL__)}function M(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(M,m,{__CANCEL__:!0});function xn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Nn=_.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Pn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function kn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function ze(e,t){return e&&!Pn(t)?kn(e,t):t}const Fn=_.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Bn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Dn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(p){const h=Date.now(),d=r[o];i||(i=h),n[s]=p,r[s]=h;let l=o,w=0;for(;l!==s;)w+=n[l++],l=l%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),h-i<t)return;const y=d&&h-d;return y?Math.round(w*1e3/y):void 0}}function ge(e,t){let n=0;const r=Dn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,p=r(c),h=o<=i;n=o;const d={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:p||void 0,estimated:p&&i&&h?(i-o)/p:void 0,event:s};d[t?"download":"upload"]=!0,e(d)}}const jn=typeof XMLHttpRequest<"u",Un=jn&&function(e){return new Promise(function(n,r){let s=e.data;const o=T.from(e.headers).normalize();let{responseType:i,withXSRFToken:c}=e,p;function h(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}let d;if(a.isFormData(s)){if(_.hasStandardBrowserEnv||_.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((d=o.getContentType())!==!1){const[u,...S]=d?d.split(";").map(g=>g.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...S].join("; "))}}let l=new XMLHttpRequest;if(e.auth){const u=e.auth.username||"",S=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(u+":"+S))}const w=ze(e.baseURL,e.url);l.open(e.method.toUpperCase(),Ie(w,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function y(){if(!l)return;const u=T.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),g={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:u,config:e,request:l};xn(function(x){n(x),h()},function(x){r(x),h()},g),l=null}if("onloadend"in l?l.onloadend=y:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(y)},l.onabort=function(){l&&(r(new m("Request aborted",m.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const g=e.transitional||He;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),r(new m(S,g.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,l)),l=null},_.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&Fn(w))){const u=e.xsrfHeaderName&&e.xsrfCookieName&&Nn.read(e.xsrfCookieName);u&&o.set(e.xsrfHeaderName,u)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&a.forEach(o.toJSON(),function(S,g){l.setRequestHeader(g,S)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",ge(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",ge(e.onUploadProgress)),(e.cancelToken||e.signal)&&(p=u=>{l&&(r(!u||u.type?new M(null,e,l):u),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p)));const f=Bn(w);if(f&&_.protocols.indexOf(f)===-1){r(new m("Unsupported protocol "+f+":",m.ERR_BAD_REQUEST,e));return}l.send(s||null)})},oe={http:on,xhr:Un};a.forEach(oe,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Oe=e=>`- ${e}`,Ln=e=>a.isFunction(e)||e===null||e===!1,$e={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Ln(n)&&(r=oe[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,p])=>`adapter ${c} `+(p===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Oe).join(`
`):" "+Oe(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:oe};function ne(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new M(null,e)}function Re(e){return ne(e),e.headers=T.from(e.headers),e.data=te.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),$e.getAdapter(e.adapter||de.adapter)(e).then(function(r){return ne(e),r.data=te.call(e,e.transformResponse,r),r.headers=T.from(r.headers),r},function(r){return ve(r)||(ne(e),r&&r.response&&(r.response.data=te.call(e,e.transformResponse,r.response),r.response.headers=T.from(r.response.headers))),Promise.reject(r)})}const _e=e=>e instanceof T?{...e}:e;function j(e,t){t=t||{};const n={};function r(h,d,l){return a.isPlainObject(h)&&a.isPlainObject(d)?a.merge.call({caseless:l},h,d):a.isPlainObject(d)?a.merge({},d):a.isArray(d)?d.slice():d}function s(h,d,l){if(a.isUndefined(d)){if(!a.isUndefined(h))return r(void 0,h,l)}else return r(h,d,l)}function o(h,d){if(!a.isUndefined(d))return r(void 0,d)}function i(h,d){if(a.isUndefined(d)){if(!a.isUndefined(h))return r(void 0,h)}else return r(void 0,d)}function c(h,d,l){if(l in t)return r(h,d);if(l in e)return r(void 0,h)}const p={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(h,d)=>s(_e(h),_e(d),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(d){const l=p[d]||s,w=l(e[d],t[d],d);a.isUndefined(w)&&l!==c||(n[d]=w)}),n}const Je="1.6.8",pe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{pe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ae={};pe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Je+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Ae[i]&&(Ae[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function In(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],p=c===void 0||i(c,o,e);if(p!==!0)throw new m("option "+o+" must be "+p,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const ie={assertOptions:In,validators:pe},N=ie.validators;class V{constructor(t){this.defaults=t,this.interceptors={request:new Ee,response:new Ee}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=j(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ie.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ie.assertOptions(s,{encode:N.function,serialize:N.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=T.concat(i,o);const c=[];let p=!0;this.interceptors.request.forEach(function(u){typeof u.runWhen=="function"&&u.runWhen(n)===!1||(p=p&&u.synchronous,c.unshift(u.fulfilled,u.rejected))});const h=[];this.interceptors.response.forEach(function(u){h.push(u.fulfilled,u.rejected)});let d,l=0,w;if(!p){const f=[Re.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,h),w=f.length,d=Promise.resolve(n);l<w;)d=d.then(f[l++],f[l++]);return d}w=c.length;let y=n;for(l=0;l<w;){const f=c[l++],u=c[l++];try{y=f(y)}catch(S){u.call(this,S);break}}try{d=Re.call(this,y)}catch(f){return Promise.reject(f)}for(l=0,w=h.length;l<w;)d=d.then(h[l++],h[l++]);return d}getUri(t){t=j(this.defaults,t);const n=ze(t.baseURL,t.url);return Ie(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){V.prototype[t]=function(n,r){return this.request(j(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(j(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}V.prototype[t]=n(),V.prototype[t+"Form"]=n(!0)});const J=V;class he{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new M(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new he(function(s){t=s}),cancel:t}}}const Hn=he;function Mn(e){return function(n){return e.apply(null,n)}}function qn(e){return a.isObject(e)&&e.isAxiosError===!0}const ae={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ae).forEach(([e,t])=>{ae[t]=e});const vn=ae;function Ve(e){const t=new J(e),n=Te(J.prototype.request,t);return a.extend(n,J.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ve(j(e,s))},n}const E=Ve(de);E.Axios=J;E.CanceledError=M;E.CancelToken=Hn;E.isCancel=ve;E.VERSION=Je;E.toFormData=X;E.AxiosError=m;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=Mn;E.isAxiosError=qn;E.mergeConfig=j;E.AxiosHeaders=T;E.formToJSON=e=>qe(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=$e.getAdapter;E.HttpStatusCode=vn;E.default=E;const q=E;q.defaults.timeout=6e4;q.defaults.baseURL="https://bot.365246692.xyz";q.interceptors.request.use(e=>(e.headers={"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"},e),e=>Promise.reject(e));q.interceptors.response.use(e=>e,e=>{const{response:t}=e;if(console.log(e),t)return showMessage(t.status),Promise.reject(t.data);message.error(i18n.global.t("notification.badNetwork"))});const zn=e=>q({method:"get",url:`/pub/api/info/${e}`});async function $n(e,t){for(let n in e){let r=e[n].sets,s=e[n].data;for(let o of r)await zn(o.id).then(i=>{if(i.status===200&&i.data){let c=i.data,p=o.tag,d=Object.assign(c,{tag:p,isLast:!1});s.push(d),o===r[r.length-1]&&(e[n].status.isLoading=!1,Vn(s))}else alert("谱面加载失败，请刷新页面重新加载。")})}localStorage.setItem(t,JSON.stringify(e))}function Jn(e){let n=e.src.split(" "),r=e.sets,s={},o;for(let i in n)isNaN(parseInt(n[i]))?o=n[i]:(s={id:n[i],tag:o},r.push(s));return e}function Xn(e,t){let n=JSON.parse(localStorage.getItem(t));if(n)e=n;else{for(let r in e)Jn(e[r]);$n(e,t)}return e}function Vn(e){let t=e,n=0;for(let r=0;r<t.length;r++){for(let s=1;s<t.length;s++)if(s===r+1&&t[r].tag!==t[s].tag){let o=t.slice(n,r+1);n=r+1,o.length%2!==0&&o.map(i=>{i===o[o.length-1]&&(i.isLast=!0)})}t[t.length-1].isLast=!0}}export{Gn as M,Xn as g};
