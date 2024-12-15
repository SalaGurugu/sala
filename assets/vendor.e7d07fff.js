var D_=Object.defineProperty,k_=Object.defineProperties;var R_=Object.getOwnPropertyDescriptors;var pu=Object.getOwnPropertySymbols;var O_=Object.prototype.hasOwnProperty,L_=Object.prototype.propertyIsEnumerable;var gu=(n,e,t)=>e in n?D_(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,$=(n,e)=>{for(var t in e||(e={}))O_.call(e,t)&&gu(n,t,e[t]);if(pu)for(var t of pu(e))L_.call(e,t)&&gu(n,t,e[t]);return n},Ns=(n,e)=>k_(n,R_(e));import{e as Hd,r as qd,m as br,i as P_,g as zd,a as M_,w as x_,b as $_,c as Ar,d as Kd,t as U_,o as F_,n as V_,f as B_,h as j_}from"./vue.14856ed3.js";/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Wd;const Zr=n=>Wd=n,Gd=Symbol();function Ra(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Hs;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Hs||(Hs={}));function nk(){const n=Hd(!0),e=n.run(()=>qd({}));let t=[],s=[];const i=br({install(r){Zr(i),i._a=r,r.provide(Gd,i),r.config.globalProperties.$pinia=i,s.forEach(o=>t.push(o)),s=[]},use(r){return!this._a&&!P_?s.push(r):t.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return i}const Yd=()=>{};function mu(n,e,t,s=Yd){n.push(e);const i=()=>{const r=n.indexOf(e);r>-1&&(n.splice(r,1),s())};return!t&&zd()&&F_(i),i}function Ln(n,...e){n.slice().forEach(t=>{t(...e)})}function Oa(n,e){for(const t in e){if(!e.hasOwnProperty(t))continue;const s=e[t],i=n[t];Ra(i)&&Ra(s)&&n.hasOwnProperty(t)&&!Ar(s)&&!Kd(s)?n[t]=Oa(i,s):n[t]=s}return n}const H_=Symbol();function q_(n){return!Ra(n)||!n.hasOwnProperty(H_)}const{assign:ht}=Object;function z_(n){return!!(Ar(n)&&n.effect)}function K_(n,e,t,s){const{state:i,actions:r,getters:o}=e,a=t.state.value[n];let c;function l(){a||(t.state.value[n]=i?i():{});const u=B_(t.state.value[n]);return ht(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=br(j_(()=>{Zr(t);const f=t._s.get(n);return o[d].call(f,f)})),h),{}))}return c=Qd(n,l,e,t),c.$reset=function(){const h=i?i():{};this.$patch(d=>{ht(d,h)})},c}function Qd(n,e,t={},s,i){let r;const o=t.state,a=ht({actions:{}},t),c={deep:!0};let l,u,h=br([]),d=br([]),f;const g=s.state.value[n];!o&&!g&&(s.state.value[n]={}),qd({});function m(I){let A;l=u=!1,typeof I=="function"?(I(s.state.value[n]),A={type:Hs.patchFunction,storeId:n,events:f}):(Oa(s.state.value[n],I),A={type:Hs.patchObject,payload:I,storeId:n,events:f}),V_().then(()=>{l=!0}),u=!0,Ln(h,A,s.state.value[n])}const _=Yd;function C(){r.stop(),h=[],d=[],s._s.delete(n)}function N(I,A){return function(){Zr(s);const U=Array.from(arguments),B=[],K=[];function se(oe){B.push(oe)}function Re(oe){K.push(oe)}Ln(d,{args:U,name:I,store:E,after:se,onError:Re});let ie;try{ie=A.apply(this&&this.$id===n?this:E,U)}catch(oe){throw Ln(K,oe),oe}return ie instanceof Promise?ie.then(oe=>(Ln(B,oe),oe)).catch(oe=>(Ln(K,oe),Promise.reject(oe))):(Ln(B,ie),ie)}}const b={_p:s,$id:n,$onAction:mu.bind(null,d),$patch:m,$reset:_,$subscribe(I,A={}){const U=mu(h,I,A.detached,()=>B()),B=r.run(()=>x_(()=>s.state.value[n],K=>{(A.flush==="sync"?u:l)&&I({storeId:n,type:Hs.direct,events:f},K)},ht({},c,A)));return U},$dispose:C},E=$_(ht({},b));s._s.set(n,E);const k=s._e.run(()=>(r=Hd(),r.run(()=>e())));for(const I in k){const A=k[I];if(Ar(A)&&!z_(A)||Kd(A))o||(g&&q_(A)&&(Ar(A)?A.value=g[I]:Oa(A,g[I])),s.state.value[n][I]=A);else if(typeof A=="function"){const U=N(I,A);k[I]=U,a.actions[I]=A}}return ht(E,k),ht(U_(E),k),Object.defineProperty(E,"$state",{get:()=>s.state.value[n],set:I=>{m(A=>{ht(A,I)})}}),s._p.forEach(I=>{ht(E,r.run(()=>I({store:E,app:s._a,pinia:s,options:a})))}),g&&o&&t.hydrate&&t.hydrate(E.$state,g),l=!0,u=!0,E}function sk(n,e,t){let s,i;const r=typeof e=="function";typeof n=="string"?(s=n,i=r?t:e):(i=n,s=n.id);function o(a,c){const l=zd();return a=a||l&&M_(Gd),a&&Zr(a),a=Wd,a._s.has(s)||(r?Qd(s,e,i,a):K_(s,i,a)),a._s.get(s)}return o.$id=s,o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Xd=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},W_=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Jd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),s.push(t[u],t[h],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Xd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):W_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new G_;const d=r<<2|a>>4;if(s.push(d),l!==64){const f=a<<4&240|l>>2;if(s.push(f),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class G_ extends Error{constructor(){super(...arguments);this.name="DecodeBase64StringError"}}const Y_=function(n){const e=Xd(n);return Jd.encodeByteArray(e,!0)},Sr=function(n){return Y_(n).replace(/\./g,"")},Zd=function(n){try{return Jd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Q_(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const X_=()=>Q_().__FIREBASE_DEFAULTS__,J_=()=>{if(typeof process=="undefined"||typeof{}=="undefined")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Z_=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zd(n[1]);return e&&JSON.parse(e)},eo=()=>{try{return X_()||J_()||Z_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ef=n=>{var e,t;return(t=(e=eo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},tf=n=>{const e=ef(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},nf=()=>{var n;return(n=eo())===null||n===void 0?void 0:n.config},sf=n=>{var e;return(e=eo())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function rf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Sr(JSON.stringify(t)),Sr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ty(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function ny(){var n;const e=(n=eo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function iy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ry(){const n=we();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function oy(){try{return typeof indexedDB=="object"}catch{return!1}}function ay(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="FirebaseError";class lt extends Error{constructor(e,t,s){super(t);this.code=e,this.customData=s,this.name=cy,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_i.prototype.create)}}class _i{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ly(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new lt(i,a,s)}}function ly(n,e){return n.replace(uy,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const uy=/\{\$([^}]+)}/g;function hy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Cr(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(_u(r)&&_u(o)){if(!Cr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function _u(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function dy(n,e){const t=new fy(n,e);return t.subscribe.bind(t)}class fy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");py(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=ea),i.error===void 0&&(i.error=ea),i.complete===void 0&&(i.complete=ea);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function py(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ea(){}/**
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
 */function ne(n){return n&&n._delegate?n._delegate:n}class Ft{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nn="[DEFAULT]";/**
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
 */class gy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ey;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_y(e))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nn){return this.instances.has(e)}getOptions(e=nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(!!s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:my(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=nn){return this.component?this.component.multipleInstances?e:nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function my(n){return n===nn?void 0:n}function _y(n){return n.instantiationMode==="EAGER"}/**
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
 */class yy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const vy={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Ey=j.INFO,wy={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Ty=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=wy[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wc{constructor(e){this.name=e,this._logLevel=Ey,this._logHandler=Ty,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const Iy=(n,e)=>e.some(t=>n instanceof t);let yu,vu;function by(){return yu||(yu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ay(){return vu||(vu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const of=new WeakMap,La=new WeakMap,af=new WeakMap,ta=new WeakMap,Tc=new WeakMap;function Sy(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(xt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&of.set(t,n)}).catch(()=>{}),Tc.set(e,n),e}function Cy(n){if(La.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});La.set(n,e)}let Pa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return La.get(n);if(e==="objectStoreNames")return n.objectStoreNames||af.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ny(n){Pa=n(Pa)}function Dy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(na(this),e,...t);return af.set(s,e.sort?e.sort():[e]),xt(s)}:Ay().includes(n)?function(...e){return n.apply(na(this),e),xt(of.get(this))}:function(...e){return xt(n.apply(na(this),e))}}function ky(n){return typeof n=="function"?Dy(n):(n instanceof IDBTransaction&&Cy(n),Iy(n,by())?new Proxy(n,Pa):n)}function xt(n){if(n instanceof IDBRequest)return Sy(n);if(ta.has(n))return ta.get(n);const e=ky(n);return e!==n&&(ta.set(n,e),Tc.set(e,n)),e}const na=n=>Tc.get(n);function Ry(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=xt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(xt(o.result),c.oldVersion,c.newVersion,xt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Oy=["get","getKey","getAll","getAllKeys","count"],Ly=["put","add","delete","clear"],sa=new Map;function Eu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(sa.get(e))return sa.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Ly.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Oy.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return sa.set(e,r),r}Ny(n=>Ns($({},n),{get:(e,t,s)=>Eu(e,t)||n.get(e,t,s),has:(e,t)=>!!Eu(e,t)||n.has(e,t)}));/**
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
 */class Py{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(My(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function My(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ma="@firebase/app",wu="0.9.13";/**
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
 */const gn=new wc("@firebase/app"),xy="@firebase/app-compat",$y="@firebase/analytics-compat",Uy="@firebase/analytics",Fy="@firebase/app-check-compat",Vy="@firebase/app-check",By="@firebase/auth",jy="@firebase/auth-compat",Hy="@firebase/database",qy="@firebase/database-compat",zy="@firebase/functions",Ky="@firebase/functions-compat",Wy="@firebase/installations",Gy="@firebase/installations-compat",Yy="@firebase/messaging",Qy="@firebase/messaging-compat",Xy="@firebase/performance",Jy="@firebase/performance-compat",Zy="@firebase/remote-config",ev="@firebase/remote-config-compat",tv="@firebase/storage",nv="@firebase/storage-compat",sv="@firebase/firestore",iv="@firebase/firestore-compat",rv="firebase",ov="9.23.0";/**
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
 */const xa="[DEFAULT]",av={[Ma]:"fire-core",[xy]:"fire-core-compat",[Uy]:"fire-analytics",[$y]:"fire-analytics-compat",[Vy]:"fire-app-check",[Fy]:"fire-app-check-compat",[By]:"fire-auth",[jy]:"fire-auth-compat",[Hy]:"fire-rtdb",[qy]:"fire-rtdb-compat",[zy]:"fire-fn",[Ky]:"fire-fn-compat",[Wy]:"fire-iid",[Gy]:"fire-iid-compat",[Yy]:"fire-fcm",[Qy]:"fire-fcm-compat",[Xy]:"fire-perf",[Jy]:"fire-perf-compat",[Zy]:"fire-rc",[ev]:"fire-rc-compat",[tv]:"fire-gcs",[nv]:"fire-gcs-compat",[sv]:"fire-fst",[iv]:"fire-fst-compat","fire-js":"fire-js",[rv]:"fire-js-all"};/**
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
 */const Nr=new Map,$a=new Map;function cv(n,e){try{n.container.addComponent(e)}catch(t){gn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function mn(n){const e=n.name;if($a.has(e))return gn.debug(`There were multiple attempts to register component ${e}.`),!1;$a.set(e,n);for(const t of Nr.values())cv(t,n);return!0}function to(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const lv={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$t=new _i("app","Firebase",lv);/**
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
 */class uv{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
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
 */const An=ov;function hv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:xa,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw $t.create("bad-app-name",{appName:String(i)});if(t||(t=nf()),!t)throw $t.create("no-options");const r=Nr.get(i);if(r){if(Cr(t,r.options)&&Cr(s,r.config))return r;throw $t.create("duplicate-app",{appName:i})}const o=new yy(i);for(const c of $a.values())o.addComponent(c);const a=new uv(t,s,o);return Nr.set(i,a),a}function Ic(n=xa){const e=Nr.get(n);if(!e&&n===xa&&nf())return hv();if(!e)throw $t.create("no-app",{appName:n});return e}function nt(n,e,t){var s;let i=(s=av[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gn.warn(a.join(" "));return}mn(new Ft(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const dv="firebase-heartbeat-database",fv=1,ei="firebase-heartbeat-store";let ia=null;function cf(){return ia||(ia=Ry(dv,fv,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ei)}}}).catch(n=>{throw $t.create("idb-open",{originalErrorMessage:n.message})})),ia}async function pv(n){try{return await(await cf()).transaction(ei).objectStore(ei).get(lf(n))}catch(e){if(e instanceof lt)gn.warn(e.message);else{const t=$t.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gn.warn(t.message)}}}async function Tu(n,e){try{const s=(await cf()).transaction(ei,"readwrite");await s.objectStore(ei).put(e,lf(n)),await s.done}catch(t){if(t instanceof lt)gn.warn(t.message);else{const s=$t.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});gn.warn(s.message)}}}function lf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const gv=1024,mv=30*24*60*60*1e3;class _v{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new vv(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Iu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=mv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Iu(),{heartbeatsToSend:t,unsentEntries:s}=yv(this._heartbeatsCache.heartbeats),i=Sr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Iu(){return new Date().toISOString().substring(0,10)}function yv(n,e=gv){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),bu(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),bu(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class vv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oy()?ay().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bu(n){return Sr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Ev(n){mn(new Ft("platform-logger",e=>new Py(e),"PRIVATE")),mn(new Ft("heartbeat",e=>new _v(e),"PRIVATE")),nt(Ma,wu,n),nt(Ma,wu,"esm2017"),nt("fire-js","")}Ev("");var wv=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},T,bc=bc||{},L=wv||self;function no(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function vi(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Tv(n){return Object.prototype.hasOwnProperty.call(n,ra)&&n[ra]||(n[ra]=++Iv)}var ra="closure_uid_"+(1e9*Math.random()>>>0),Iv=0;function bv(n,e,t){return n.call.apply(n.bind,arguments)}function Av(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function ye(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ye=bv:ye=Av,ye.apply(null,arguments)}function Qi(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function le(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function zt(){this.s=this.s,this.o=this.o}var Sv=0;zt.prototype.s=!1;zt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Sv!=0)&&Tv(this)};zt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const uf=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Ac(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function Au(n,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(no(s)){const i=n.length||0,r=s.length||0;n.length=i+r;for(let o=0;o<r;o++)n[i+o]=s[o]}else n.push(s)}}function ve(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var Cv=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{L.addEventListener("test",()=>{},e),L.removeEventListener("test",()=>{},e)}catch{}return n}();function ti(n){return/^[\s\xa0]*$/.test(n)}function so(){var n=L.navigator;return n&&(n=n.userAgent)?n:""}function Je(n){return so().indexOf(n)!=-1}function Sc(n){return Sc[" "](n),n}Sc[" "]=function(){};function Nv(n,e){var t=EE;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var Dv=Je("Opera"),Jn=Je("Trident")||Je("MSIE"),hf=Je("Edge"),Ua=hf||Jn,df=Je("Gecko")&&!(so().toLowerCase().indexOf("webkit")!=-1&&!Je("Edge"))&&!(Je("Trident")||Je("MSIE"))&&!Je("Edge"),kv=so().toLowerCase().indexOf("webkit")!=-1&&!Je("Edge");function ff(){var n=L.document;return n?n.documentMode:void 0}var Fa;e:{var oa="",aa=function(){var n=so();if(df)return/rv:([^\);]+)(\)|;)/.exec(n);if(hf)return/Edge\/([\d\.]+)/.exec(n);if(Jn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(kv)return/WebKit\/(\S+)/.exec(n);if(Dv)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(aa&&(oa=aa?aa[1]:""),Jn){var ca=ff();if(ca!=null&&ca>parseFloat(oa)){Fa=String(ca);break e}}Fa=oa}var Va;if(L.document&&Jn){var Su=ff();Va=Su||parseInt(Fa,10)||void 0}else Va=void 0;var Rv=Va;function ni(n,e){if(ve.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(df){e:{try{Sc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Ov[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&ni.$.h.call(this)}}le(ni,ve);var Ov={2:"touch",3:"pen",4:"mouse"};ni.prototype.h=function(){ni.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ei="closure_listenable_"+(1e6*Math.random()|0),Lv=0;function Pv(n,e,t,s,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.la=i,this.key=++Lv,this.fa=this.ia=!1}function io(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Cc(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function Mv(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function pf(n){const e={};for(const t in n)e[t]=n[t];return e}const Cu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gf(n,e){let t,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(t in s)n[t]=s[t];for(let r=0;r<Cu.length;r++)t=Cu[r],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function ro(n){this.src=n,this.g={},this.h=0}ro.prototype.add=function(n,e,t,s,i){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=ja(n,e,s,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new Pv(e,this.src,r,!!s,i),e.ia=t,n.push(e)),e};function Ba(n,e){var t=e.type;if(t in n.g){var s=n.g[t],i=uf(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(io(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ja(n,e,t,s){for(var i=0;i<n.length;++i){var r=n[i];if(!r.fa&&r.listener==e&&r.capture==!!t&&r.la==s)return i}return-1}var Nc="closure_lm_"+(1e6*Math.random()|0),la={};function mf(n,e,t,s,i){if(s&&s.once)return yf(n,e,t,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)mf(n,e[r],t,s,i);return null}return t=Rc(t),n&&n[Ei]?n.O(e,t,vi(s)?!!s.capture:!!s,i):_f(n,e,t,!1,s,i)}function _f(n,e,t,s,i,r){if(!e)throw Error("Invalid event type");var o=vi(i)?!!i.capture:!!i,a=kc(n);if(a||(n[Nc]=a=new ro(n)),t=a.add(e,t,s,o,r),t.proxy)return t;if(s=xv(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)Cv||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),s,i);else if(n.attachEvent)n.attachEvent(Ef(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function xv(){function n(t){return e.call(n.src,n.listener,t)}const e=$v;return n}function yf(n,e,t,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)yf(n,e[r],t,s,i);return null}return t=Rc(t),n&&n[Ei]?n.P(e,t,vi(s)?!!s.capture:!!s,i):_f(n,e,t,!0,s,i)}function vf(n,e,t,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)vf(n,e[r],t,s,i);else s=vi(s)?!!s.capture:!!s,t=Rc(t),n&&n[Ei]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=ja(r,t,s,i),-1<t&&(io(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=kc(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ja(e,t,s,i)),(t=-1<n?e[n]:null)&&Dc(t))}function Dc(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Ei])Ba(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(Ef(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=kc(e))?(Ba(t,n),t.h==0&&(t.src=null,e[Nc]=null)):io(n)}}}function Ef(n){return n in la?la[n]:la[n]="on"+n}function $v(n,e){if(n.fa)n=!0;else{e=new ni(e,this);var t=n.listener,s=n.la||n.src;n.ia&&Dc(n),n=t.call(s,e)}return n}function kc(n){return n=n[Nc],n instanceof ro?n:null}var ua="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rc(n){return typeof n=="function"?n:(n[ua]||(n[ua]=function(e){return n.handleEvent(e)}),n[ua])}function ce(){zt.call(this),this.i=new ro(this),this.S=this,this.J=null}le(ce,zt);ce.prototype[Ei]=!0;ce.prototype.removeEventListener=function(n,e,t,s){vf(this,n,e,t,s)};function fe(n,e){var t,s=n.J;if(s)for(t=[];s;s=s.J)t.push(s);if(n=n.S,s=e.type||e,typeof e=="string")e=new ve(e,n);else if(e instanceof ve)e.target=e.target||n;else{var i=e;e=new ve(s,n),gf(e,i)}if(i=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];i=Xi(o,s,!0,e)&&i}if(o=e.g=n,i=Xi(o,s,!0,e)&&i,i=Xi(o,s,!1,e)&&i,t)for(r=0;r<t.length;r++)o=e.g=t[r],i=Xi(o,s,!1,e)&&i}ce.prototype.N=function(){if(ce.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)io(t[s]);delete n.g[e],n.h--}}this.J=null};ce.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};ce.prototype.P=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function Xi(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&Ba(n.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Oc=L.JSON.stringify;class Uv{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Fv(){var n=Lc;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Vv{constructor(){this.h=this.g=null}add(e,t){const s=wf.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var wf=new Uv(()=>new Bv,n=>n.reset());class Bv{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function jv(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function Hv(n){L.setTimeout(()=>{throw n},0)}let si,ii=!1,Lc=new Vv,Tf=()=>{const n=L.Promise.resolve(void 0);si=()=>{n.then(qv)}};var qv=()=>{for(var n;n=Fv();){try{n.h.call(n.g)}catch(t){Hv(t)}var e=wf;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}ii=!1};function oo(n,e){ce.call(this),this.h=n||1,this.g=e||L,this.j=ye(this.qb,this),this.l=Date.now()}le(oo,ce);T=oo.prototype;T.ga=!1;T.T=null;T.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),fe(this,"tick"),this.ga&&(Pc(this),this.start()))}};T.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Pc(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}T.N=function(){oo.$.N.call(this),Pc(this),delete this.g};function Mc(n,e,t){if(typeof n=="function")t&&(n=ye(n,t));else if(n&&typeof n.handleEvent=="function")n=ye(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(n,e||0)}function If(n){n.g=Mc(()=>{n.g=null,n.i&&(n.i=!1,If(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class zv extends zt{constructor(e,t){super();this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:If(this)}N(){super.N(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ri(n){zt.call(this),this.h=n,this.g={}}le(ri,zt);var Nu=[];function bf(n,e,t,s){Array.isArray(t)||(t&&(Nu[0]=t.toString()),t=Nu);for(var i=0;i<t.length;i++){var r=mf(e,t[i],s||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function Af(n){Cc(n.g,function(e,t){this.g.hasOwnProperty(t)&&Dc(e)},n),n.g={}}ri.prototype.N=function(){ri.$.N.call(this),Af(this)};ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ao(){this.g=!0}ao.prototype.Ea=function(){this.g=!1};function Kv(n,e,t,s,i,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function Wv(n,e,t,s,i,r,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+t+`
`+r+" "+o})}function jn(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Yv(n,t)+(s?" "+s:"")})}function Gv(n,e){n.info(function(){return"TIMEOUT: "+e})}ao.prototype.info=function(){};function Yv(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Oc(t)}catch{return e}}var Sn={},Du=null;function co(){return Du=Du||new ce}Sn.Ta="serverreachability";function Sf(n){ve.call(this,Sn.Ta,n)}le(Sf,ve);function oi(n){const e=co();fe(e,new Sf(e))}Sn.STAT_EVENT="statevent";function Cf(n,e){ve.call(this,Sn.STAT_EVENT,n),this.stat=e}le(Cf,ve);function be(n){const e=co();fe(e,new Cf(e,n))}Sn.Ua="timingevent";function Nf(n,e){ve.call(this,Sn.Ua,n),this.size=e}le(Nf,ve);function wi(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){n()},e)}var lo={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Df={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function xc(){}xc.prototype.h=null;function ku(n){return n.h||(n.h=n.i())}function kf(){}var Ti={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function $c(){ve.call(this,"d")}le($c,ve);function Uc(){ve.call(this,"c")}le(Uc,ve);var Ha;function uo(){}le(uo,xc);uo.prototype.g=function(){return new XMLHttpRequest};uo.prototype.i=function(){return{}};Ha=new uo;function Ii(n,e,t,s){this.l=n,this.j=e,this.m=t,this.W=s||1,this.U=new ri(this),this.P=Qv,n=Ua?125:void 0,this.V=new oo(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Rf}function Rf(){this.i=null,this.g="",this.h=!1}var Qv=45e3,qa={},Dr={};T=Ii.prototype;T.setTimeout=function(n){this.P=n};function za(n,e,t){n.L=1,n.v=fo(yt(e)),n.s=t,n.S=!0,Of(n,null)}function Of(n,e){n.G=Date.now(),bi(n),n.A=yt(n.v);var t=n.A,s=n.W;Array.isArray(s)||(s=[String(s)]),Vf(t.i,"t",s),n.C=0,t=n.l.J,n.h=new Rf,n.g=ap(n.l,t?e:null,!n.s),0<n.O&&(n.M=new zv(ye(n.Pa,n,n.g),n.O)),bf(n.U,n.g,"readystatechange",n.nb),e=n.I?pf(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),oi(),Kv(n.j,n.u,n.A,n.m,n.W,n.s)}T.nb=function(n){n=n.target;const e=this.M;e&&Ze(n)==3?e.l():this.Pa(n)};T.Pa=function(n){try{if(n==this.g)e:{const u=Ze(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Ua||this.g&&(this.h.h||this.g.ja()||Pu(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?oi(3):oi(2)),ho(this);var t=this.g.da();this.ca=t;t:if(Lf(this)){var s=Pu(this.g);n="";var i=s.length,r=Ze(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){on(this),qs(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,Wv(this.j,this.u,this.A,this.m,this.W,u,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ti(a)){var l=a;break t}}l=null}if(t=l)jn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ka(this,t);else{this.i=!1,this.o=3,be(12),on(this),qs(this);break e}}this.S?(Pf(this,u,o),Ua&&this.i&&u==3&&(bf(this.U,this.V,"tick",this.mb),this.V.start())):(jn(this.j,this.m,o,null),Ka(this,o)),u==4&&on(this),this.i&&!this.J&&(u==4?sp(this.l,this):(this.i=!1,bi(this)))}else _E(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,be(12)):(this.o=0,be(13)),on(this),qs(this)}}}catch{}finally{}};function Lf(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function Pf(n,e,t){let s=!0,i;for(;!n.J&&n.C<t.length;)if(i=Xv(n,t),i==Dr){e==4&&(n.o=4,be(14),s=!1),jn(n.j,n.m,null,"[Incomplete Response]");break}else if(i==qa){n.o=4,be(15),jn(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else jn(n.j,n.m,i,null),Ka(n,i);Lf(n)&&i!=Dr&&i!=qa&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,be(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),qc(e),e.M=!0,be(11))):(jn(n.j,n.m,t,"[Invalid Chunked Response]"),on(n),qs(n))}T.mb=function(){if(this.g){var n=Ze(this.g),e=this.g.ja();this.C<e.length&&(ho(this),Pf(this,n,e),this.i&&n!=4&&bi(this))}};function Xv(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?Dr:(t=Number(e.substring(t,s)),isNaN(t)?qa:(s+=1,s+t>e.length?Dr:(e=e.slice(s,s+t),n.C=s+t,e)))}T.cancel=function(){this.J=!0,on(this)};function bi(n){n.Y=Date.now()+n.P,Mf(n,n.P)}function Mf(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=wi(ye(n.lb,n),e)}function ho(n){n.B&&(L.clearTimeout(n.B),n.B=null)}T.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Gv(this.j,this.A),this.L!=2&&(oi(),be(17)),on(this),this.o=2,qs(this)):Mf(this,this.Y-n)};function qs(n){n.l.H==0||n.J||sp(n.l,n)}function on(n){ho(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,Pc(n.V),Af(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function Ka(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Wa(t.i,n))){if(!n.K&&Wa(t.i,n)&&t.H==3){try{var s=t.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Or(t),mo(t);else break e;Hc(t),be(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=wi(ye(t.ib,t),6e3));if(1>=Hf(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else an(t,11)}else if((n.K||t.g==n)&&Or(t),!ti(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(t.V=l[0],l=l[1],t.H==2)if(l[0]=="c"){t.K=l[1],t.pa=l[2];const u=l[3];u!=null&&(t.ra=u,t.l.info("VER="+t.ra));const h=l[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.L=s,t.l.info("backChannelRequestTimeoutMs_="+s)),s=t;const f=n.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.i;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Fc(r,r.h),r.h=null))}if(s.F){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.Da=m,W(s.I,s.F,m))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),s=t;var o=n;if(s.wa=op(s,s.J?s.pa:null,s.Y),o.K){qf(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(ho(a),bi(a)),s.g=o}else tp(s);0<t.j.length&&_o(t)}else l[0]!="stop"&&l[0]!="close"||an(t,7);else t.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?an(t,7):jc(t):l[0]!="noop"&&t.h&&t.h.Aa(l),t.A=0)}}oi(4)}catch{}}function Jv(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map!="undefined"&&n instanceof Map||typeof Set!="undefined"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(no(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function Zv(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map!="undefined"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set!="undefined"&&n instanceof Set)){if(no(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const s in n)e[t++]=s;return e}}}function xf(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(no(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=Zv(n),s=Jv(n),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],t&&t[r],n)}var $f=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eE(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),i=null;if(0<=s){var r=n[t].substring(0,s);i=n[t].substring(s+1)}else r=n[t];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ln(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof ln){this.h=n.h,kr(this,n.j),this.s=n.s,this.g=n.g,Rr(this,n.m),this.l=n.l;var e=n.i,t=new ai;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Ru(this,t),this.o=n.o}else n&&(e=String(n).match($f))?(this.h=!1,kr(this,e[1]||"",!0),this.s=$s(e[2]||""),this.g=$s(e[3]||"",!0),Rr(this,e[4]),this.l=$s(e[5]||"",!0),Ru(this,e[6]||"",!0),this.o=$s(e[7]||"")):(this.h=!1,this.i=new ai(null,this.h))}ln.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Us(e,Ou,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Us(e,Ou,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(Us(t,t.charAt(0)=="/"?sE:nE,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Us(t,rE)),n.join("")};function yt(n){return new ln(n)}function kr(n,e,t){n.j=t?$s(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Rr(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Ru(n,e,t){e instanceof ai?(n.i=e,oE(n.i,n.h)):(t||(e=Us(e,iE)),n.i=new ai(e,n.h))}function W(n,e,t){n.i.set(e,t)}function fo(n){return W(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function $s(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Us(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,tE),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function tE(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Ou=/[#\/\?@]/g,nE=/[#\?:]/g,sE=/[#\?]/g,iE=/[#\?@]/g,rE=/#/g;function ai(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Kt(n){n.g||(n.g=new Map,n.h=0,n.i&&eE(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}T=ai.prototype;T.add=function(n,e){Kt(this),this.i=null,n=gs(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Uf(n,e){Kt(n),e=gs(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Ff(n,e){return Kt(n),e=gs(n,e),n.g.has(e)}T.forEach=function(n,e){Kt(this),this.g.forEach(function(t,s){t.forEach(function(i){n.call(e,i,s,this)},this)},this)};T.ta=function(){Kt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const i=n[s];for(let r=0;r<i.length;r++)t.push(e[s])}return t};T.Z=function(n){Kt(this);let e=[];if(typeof n=="string")Ff(this,n)&&(e=e.concat(this.g.get(gs(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};T.set=function(n,e){return Kt(this),this.i=null,n=gs(this,n),Ff(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};T.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function Vf(n,e,t){Uf(n,e),0<t.length&&(n.i=null,n.g.set(gs(n,e),Ac(t)),n.h+=t.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),n.push(i)}}return this.i=n.join("&")};function gs(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function oE(n,e){e&&!n.j&&(Kt(n),n.i=null,n.g.forEach(function(t,s){var i=s.toLowerCase();s!=i&&(Uf(this,s),Vf(this,i,t))},n)),n.j=e}var aE=class{constructor(n,e){this.g=n,this.map=e}};function Bf(n){this.l=n||cE,L.PerformanceNavigationTiming?(n=L.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(L.g&&L.g.Ka&&L.g.Ka()&&L.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cE=10;function jf(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Hf(n){return n.h?1:n.g?n.g.size:0}function Wa(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Fc(n,e){n.g?n.g.add(e):n.h=e}function qf(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Bf.prototype.cancel=function(){if(this.i=zf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function zf(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Ac(n.i)}var lE=class{stringify(n){return L.JSON.stringify(n,void 0)}parse(n){return L.JSON.parse(n,void 0)}};function uE(){this.g=new lE}function hE(n,e,t){const s=t||"";try{xf(n,function(i,r){let o=i;vi(i)&&(o=Oc(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function dE(n,e){const t=new ao;if(L.Image){const s=new Image;s.onload=Qi(Ji,t,s,"TestLoadImage: loaded",!0,e),s.onerror=Qi(Ji,t,s,"TestLoadImage: error",!1,e),s.onabort=Qi(Ji,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=Qi(Ji,t,s,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function Ji(n,e,t,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Ai(n){this.l=n.fc||null,this.j=n.ob||!1}le(Ai,xc);Ai.prototype.g=function(){return new po(this.l,this.j)};Ai.prototype.i=function(n){return function(){return n}}({});function po(n,e){ce.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=Vc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}le(po,ce);var Vc=0;T=po.prototype;T.open=function(n,e){if(this.readyState!=Vc)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,ci(this)};T.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||L).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Si(this)),this.readyState=Vc};T.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,ci(this)),this.g&&(this.readyState=3,ci(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof L.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Kf(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Kf(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}T.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Si(this):ci(this),this.readyState==3&&Kf(this)}};T.Za=function(n){this.g&&(this.response=this.responseText=n,Si(this))};T.Ya=function(n){this.g&&(this.response=n,Si(this))};T.ka=function(){this.g&&Si(this)};function Si(n){n.readyState=4,n.l=null,n.j=null,n.A=null,ci(n)}T.setRequestHeader=function(n,e){this.v.append(n,e)};T.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function ci(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(po.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var fE=L.JSON.parse;function J(n){ce.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Wf,this.L=this.M=!1}le(J,ce);var Wf="",pE=/^https?$/i,gE=["POST","PUT"];T=J.prototype;T.Oa=function(n){this.M=n};T.ha=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ha.g(),this.C=this.u?ku(this.u):ku(Ha),this.g.onreadystatechange=ye(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(r){Lu(this,r);return}if(n=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)t.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())t.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),i=L.FormData&&n instanceof L.FormData,!(0<=uf(gE,e))||s||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of t)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Qf(this),0<this.B&&((this.L=mE(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ye(this.ua,this)):this.A=Mc(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){Lu(this,r)}};function mE(n){return Jn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}T.ua=function(){typeof bc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,fe(this,"timeout"),this.abort(8))};function Lu(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Gf(n),go(n)}function Gf(n){n.F||(n.F=!0,fe(n,"complete"),fe(n,"error"))}T.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,fe(this,"complete"),fe(this,"abort"),go(this))};T.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),go(this,!0)),J.$.N.call(this)};T.La=function(){this.s||(this.G||this.v||this.l?Yf(this):this.kb())};T.kb=function(){Yf(this)};function Yf(n){if(n.h&&typeof bc!="undefined"&&(!n.C[1]||Ze(n)!=4||n.da()!=2)){if(n.v&&Ze(n)==4)Mc(n.La,0,n);else if(fe(n,"readystatechange"),Ze(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=o===0){var i=String(n.I).match($f)[1]||null;!i&&L.self&&L.self.location&&(i=L.self.location.protocol.slice(0,-1)),s=!pE.test(i?i.toLowerCase():"")}t=s}if(t)fe(n,"complete"),fe(n,"success");else{n.m=6;try{var r=2<Ze(n)?n.g.statusText:""}catch{r=""}n.j=r+" ["+n.da()+"]",Gf(n)}}finally{go(n)}}}}function go(n,e){if(n.g){Qf(n);const t=n.g,s=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||fe(n,"ready");try{t.onreadystatechange=s}catch{}}}function Qf(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(L.clearTimeout(n.A),n.A=null)}T.isActive=function(){return!!this.g};function Ze(n){return n.g?n.g.readyState:0}T.da=function(){try{return 2<Ze(this)?this.g.status:-1}catch{return-1}};T.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),fE(e)}};function Pu(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Wf:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function _E(n){const e={};n=(n.g&&2<=Ze(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<n.length;s++){if(ti(n[s]))continue;var t=jv(n[s]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const r=e[i]||[];e[i]=r,r.push(t)}Mv(e,function(s){return s.join(", ")})}T.Ia=function(){return this.m};T.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Xf(n){let e="";return Cc(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function Bc(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=Xf(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):W(n,e,t))}function Ds(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Jf(n){this.Ga=0,this.j=[],this.l=new ao,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ds("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ds("baseRetryDelayMs",5e3,n),this.hb=Ds("retryDelaySeedMs",1e4,n),this.eb=Ds("forwardChannelMaxRetries",2,n),this.xa=Ds("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Bf(n&&n.concurrentRequestLimit),this.Ja=new uE,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}T=Jf.prototype;T.ra=8;T.H=1;function jc(n){if(Zf(n),n.H==3){var e=n.W++,t=yt(n.I);if(W(t,"SID",n.K),W(t,"RID",e),W(t,"TYPE","terminate"),Ci(n,t),e=new Ii(n,n.l,e),e.L=2,e.v=fo(yt(t)),t=!1,L.navigator&&L.navigator.sendBeacon)try{t=L.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&L.Image&&(new Image().src=e.v,t=!0),t||(e.g=ap(e.l,null),e.g.ha(e.v)),e.G=Date.now(),bi(e)}rp(n)}function mo(n){n.g&&(qc(n),n.g.cancel(),n.g=null)}function Zf(n){mo(n),n.u&&(L.clearTimeout(n.u),n.u=null),Or(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&L.clearTimeout(n.m),n.m=null)}function _o(n){if(!jf(n.i)&&!n.m){n.m=!0;var e=n.Na;si||Tf(),ii||(si(),ii=!0),Lc.add(e,n),n.C=0}}function yE(n,e){return Hf(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=wi(ye(n.Na,n,e),ip(n,n.C)),n.C++,!0)}T.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Ii(this,this.l,n);let r=this.s;if(this.U&&(r?(r=pf(r),gf(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var s=this.j[t];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=ep(this,i,e),t=yt(this.I),W(t,"RID",n),W(t,"CVER",22),this.F&&W(t,"X-HTTP-Session-Id",this.F),Ci(this,t),r&&(this.O?e="headers="+encodeURIComponent(String(Xf(r)))+"&"+e:this.o&&Bc(t,this.o,r)),Fc(this.i,i),this.bb&&W(t,"TYPE","init"),this.P?(W(t,"$req",e),W(t,"SID","null"),i.aa=!0,za(i,t,null)):za(i,t,e),this.H=2}}else this.H==3&&(n?Mu(this,n):this.j.length==0||jf(this.i)||Mu(this))};function Mu(n,e){var t;e?t=e.m:t=n.W++;const s=yt(n.I);W(s,"SID",n.K),W(s,"RID",t),W(s,"AID",n.V),Ci(n,s),n.o&&n.s&&Bc(s,n.o,n.s),t=new Ii(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=ep(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Fc(n.i,t),za(t,s,e)}function Ci(n,e){n.na&&Cc(n.na,function(t,s){W(e,s,t)}),n.h&&xf({},function(t,s){W(e,s,t)})}function ep(n,e,t){t=Math.min(n.j.length,t);var s=n.h?ye(n.h.Va,n.h,n):null;e:{var i=n.j;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<t;c++){let l=i[c].g;const u=i[c].map;if(l-=r,0>l)r=Math.max(0,i[c].g-100),a=!1;else try{hE(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,s}function tp(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;si||Tf(),ii||(si(),ii=!0),Lc.add(e,n),n.A=0}}function Hc(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=wi(ye(n.Ma,n),ip(n,n.A)),n.A++,!0)}T.Ma=function(){if(this.u=null,np(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=wi(ye(this.jb,this),n)}};T.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,be(10),mo(this),np(this))};function qc(n){n.B!=null&&(L.clearTimeout(n.B),n.B=null)}function np(n){n.g=new Ii(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=yt(n.wa);W(e,"RID","rpc"),W(e,"SID",n.K),W(e,"AID",n.V),W(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&W(e,"TO",n.qa),W(e,"TYPE","xmlhttp"),Ci(n,e),n.o&&n.s&&Bc(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=fo(yt(e)),t.s=null,t.S=!0,Of(t,n)}T.ib=function(){this.v!=null&&(this.v=null,mo(this),Hc(this),be(19))};function Or(n){n.v!=null&&(L.clearTimeout(n.v),n.v=null)}function sp(n,e){var t=null;if(n.g==e){Or(n),qc(n),n.g=null;var s=2}else if(Wa(n.i,e))t=e.F,qf(n.i,e),s=1;else return;if(n.H!=0){if(e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;s=co(),fe(s,new Nf(s,t)),_o(n)}else tp(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(s==1&&yE(n,e)||s==2&&Hc(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:an(n,5);break;case 4:an(n,10);break;case 3:an(n,6);break;default:an(n,2)}}}function ip(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function an(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var s=ye(n.pb,n);t||(t=new ln("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||kr(t,"https"),fo(t)),dE(t.toString(),s)}else be(2);n.H=0,n.h&&n.h.za(e),rp(n),Zf(n)}T.pb=function(n){n?(this.l.info("Successfully pinged google.com"),be(2)):(this.l.info("Failed to ping google.com"),be(1))};function rp(n){if(n.H=0,n.ma=[],n.h){const e=zf(n.i);(e.length!=0||n.j.length!=0)&&(Au(n.ma,e),Au(n.ma,n.j),n.i.i.length=0,Ac(n.j),n.j.length=0),n.h.ya()}}function op(n,e,t){var s=t instanceof ln?yt(t):new ln(t);if(s.g!="")e&&(s.g=e+"."+s.g),Rr(s,s.m);else{var i=L.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new ln(null);s&&kr(r,s),e&&(r.g=e),i&&Rr(r,i),t&&(r.l=t),s=r}return t=n.F,e=n.Da,t&&e&&W(s,t,e),W(s,"VER",n.ra),Ci(n,s),s}function ap(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new J(new Ai({ob:!0})):new J(n.va),e.Oa(n.J),e}T.isActive=function(){return!!this.h&&this.h.isActive(this)};function cp(){}T=cp.prototype;T.Ba=function(){};T.Aa=function(){};T.za=function(){};T.ya=function(){};T.isActive=function(){return!0};T.Va=function(){};function Lr(){if(Jn&&!(10<=Number(Rv)))throw Error("Environmental error: no available transport.")}Lr.prototype.g=function(n,e){return new Me(n,e)};function Me(n,e){ce.call(this),this.g=new Jf(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!ti(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ti(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new ms(this)}le(Me,ce);Me.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;be(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=op(n,null,n.Y),_o(n)};Me.prototype.close=function(){jc(this.g)};Me.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Oc(n),n=t);e.j.push(new aE(e.fb++,n)),e.H==3&&_o(e)};Me.prototype.N=function(){this.g.h=null,delete this.j,jc(this.g),delete this.g,Me.$.N.call(this)};function lp(n){$c.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}le(lp,$c);function up(){Uc.call(this),this.status=1}le(up,Uc);function ms(n){this.g=n}le(ms,cp);ms.prototype.Ba=function(){fe(this.g,"a")};ms.prototype.Aa=function(n){fe(this.g,new lp(n))};ms.prototype.za=function(n){fe(this.g,new up)};ms.prototype.ya=function(){fe(this.g,"b")};function vE(){this.blockSize=-1}function Ke(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}le(Ke,vE);Ke.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ha(n,e,t){t||(t=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)s[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var r=n.g[3],o=e+(r^t&(i^r))+s[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=r+(i^e&(t^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(t^r&(e^t))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=t+(e^i&(r^e))+s[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(r^t&(i^r))+s[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(i^e&(t^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(t^r&(e^t))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=t+(e^i&(r^e))+s[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(r^t&(i^r))+s[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(i^e&(t^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(t^r&(e^t))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=t+(e^i&(r^e))+s[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(r^t&(i^r))+s[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(i^e&(t^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(t^r&(e^t))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=t+(e^i&(r^e))+s[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(t^i))+s[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^i&(e^t))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(i^r))+s[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(t^i))+s[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^i&(e^t))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(i^r))+s[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(t^i))+s[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^i&(e^t))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(i^r))+s[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(t^i))+s[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^i&(e^t))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(i^r))+s[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^r)+s[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^t)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=t+(i^r^e)+s[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^r)+s[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^t)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=t+(i^r^e)+s[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^r)+s[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^t)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=t+(i^r^e)+s[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^r)+s[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^t)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=t+(i^r^e)+s[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~r))+s[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~t))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=t+(r^(i|~e))+s[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~r))+s[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~t))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=t+(r^(i|~e))+s[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~r))+s[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~t))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=t+(r^(i|~e))+s[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~r))+s[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~t))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=t+(r^(i|~e))+s[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+r&4294967295}Ke.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=t;)ha(this,n,r),r+=this.blockSize;if(typeof n=="string"){for(;r<e;)if(s[i++]=n.charCodeAt(r++),i==this.blockSize){ha(this,s),i=0;break}}else for(;r<e;)if(s[i++]=n[r++],i==this.blockSize){ha(this,s),i=0;break}}this.h=i,this.i+=e};Ke.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var s=0;32>s;s+=8)n[t++]=this.g[e]>>>s&255;return n};function q(n,e){this.h=e;for(var t=[],s=!0,i=n.length-1;0<=i;i--){var r=n[i]|0;s&&r==e||(t[i]=r,s=!1)}this.g=t}var EE={};function zc(n){return-128<=n&&128>n?Nv(n,function(e){return new q([e|0],0>e?-1:0)}):new q([n|0],0>n?-1:0)}function et(n){if(isNaN(n)||!isFinite(n))return zn;if(0>n)return he(et(-n));for(var e=[],t=1,s=0;n>=t;s++)e[s]=n/t|0,t*=Ga;return new q(e,0)}function hp(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return he(hp(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=et(Math.pow(e,8)),s=zn,i=0;i<n.length;i+=8){var r=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+r),e);8>r?(r=et(Math.pow(e,r)),s=s.R(r).add(et(o))):(s=s.R(t),s=s.add(et(o)))}return s}var Ga=4294967296,zn=zc(0),Ya=zc(1),xu=zc(16777216);T=q.prototype;T.ea=function(){if(Fe(this))return-he(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var s=this.D(t);n+=(0<=s?s:Ga+s)*e,e*=Ga}return n};T.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(dt(this))return"0";if(Fe(this))return"-"+he(this).toString(n);for(var e=et(Math.pow(n,6)),t=this,s="";;){var i=Mr(t,e).g;t=Pr(t,i.R(e));var r=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,dt(t))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};T.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function dt(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Fe(n){return n.h==-1}T.X=function(n){return n=Pr(this,n),Fe(n)?-1:dt(n)?0:1};function he(n){for(var e=n.g.length,t=[],s=0;s<e;s++)t[s]=~n.g[s];return new q(t,~n.h).add(Ya)}T.abs=function(){return Fe(this)?he(this):this};T.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(n.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,t[i]=o<<16|r}return new q(t,t[t.length-1]&-2147483648?-1:0)};function Pr(n,e){return n.add(he(e))}T.R=function(n){if(dt(this)||dt(n))return zn;if(Fe(this))return Fe(n)?he(this).R(he(n)):he(he(this).R(n));if(Fe(n))return he(this.R(he(n)));if(0>this.X(xu)&&0>n.X(xu))return et(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],s=0;s<2*e;s++)t[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<n.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*s+2*i]+=o*c,Zi(t,2*s+2*i),t[2*s+2*i+1]+=r*c,Zi(t,2*s+2*i+1),t[2*s+2*i+1]+=o*a,Zi(t,2*s+2*i+1),t[2*s+2*i+2]+=r*a,Zi(t,2*s+2*i+2)}for(s=0;s<e;s++)t[s]=t[2*s+1]<<16|t[2*s];for(s=e;s<2*e;s++)t[s]=0;return new q(t,0)};function Zi(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function ks(n,e){this.g=n,this.h=e}function Mr(n,e){if(dt(e))throw Error("division by zero");if(dt(n))return new ks(zn,zn);if(Fe(n))return e=Mr(he(n),e),new ks(he(e.g),he(e.h));if(Fe(e))return e=Mr(n,he(e)),new ks(he(e.g),e.h);if(30<n.g.length){if(Fe(n)||Fe(e))throw Error("slowDivide_ only works with positive integers.");for(var t=Ya,s=e;0>=s.X(n);)t=$u(t),s=$u(s);var i=Pn(t,1),r=Pn(s,1);for(s=Pn(s,2),t=Pn(t,2);!dt(s);){var o=r.add(s);0>=o.X(n)&&(i=i.add(t),r=o),s=Pn(s,1),t=Pn(t,1)}return e=Pr(n,i.R(e)),new ks(i,e)}for(i=zn;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),s=Math.ceil(Math.log(t)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=et(t),o=r.R(e);Fe(o)||0<o.X(n);)t-=s,r=et(t),o=r.R(e);dt(r)&&(r=Ya),i=i.add(r),n=Pr(n,o)}return new ks(i,n)}T.gb=function(n){return Mr(this,n).h};T.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],s=0;s<e;s++)t[s]=this.D(s)&n.D(s);return new q(t,this.h&n.h)};T.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],s=0;s<e;s++)t[s]=this.D(s)|n.D(s);return new q(t,this.h|n.h)};T.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],s=0;s<e;s++)t[s]=this.D(s)^n.D(s);return new q(t,this.h^n.h)};function $u(n){for(var e=n.g.length+1,t=[],s=0;s<e;s++)t[s]=n.D(s)<<1|n.D(s-1)>>>31;return new q(t,n.h)}function Pn(n,e){var t=e>>5;e%=32;for(var s=n.g.length-t,i=[],r=0;r<s;r++)i[r]=0<e?n.D(r+t)>>>e|n.D(r+t+1)<<32-e:n.D(r+t);return new q(i,n.h)}Lr.prototype.createWebChannel=Lr.prototype.g;Me.prototype.send=Me.prototype.u;Me.prototype.open=Me.prototype.m;Me.prototype.close=Me.prototype.close;lo.NO_ERROR=0;lo.TIMEOUT=8;lo.HTTP_ERROR=6;Df.COMPLETE="complete";kf.EventType=Ti;Ti.OPEN="a";Ti.CLOSE="b";Ti.ERROR="c";Ti.MESSAGE="d";ce.prototype.listen=ce.prototype.O;J.prototype.listenOnce=J.prototype.P;J.prototype.getLastError=J.prototype.Sa;J.prototype.getLastErrorCode=J.prototype.Ia;J.prototype.getStatus=J.prototype.da;J.prototype.getResponseJson=J.prototype.Wa;J.prototype.getResponseText=J.prototype.ja;J.prototype.send=J.prototype.ha;J.prototype.setWithCredentials=J.prototype.Oa;Ke.prototype.digest=Ke.prototype.l;Ke.prototype.reset=Ke.prototype.reset;Ke.prototype.update=Ke.prototype.j;q.prototype.add=q.prototype.add;q.prototype.multiply=q.prototype.R;q.prototype.modulo=q.prototype.gb;q.prototype.compare=q.prototype.X;q.prototype.toNumber=q.prototype.ea;q.prototype.toString=q.prototype.toString;q.prototype.getBits=q.prototype.D;q.fromNumber=et;q.fromString=hp;var wE=function(){return new Lr},TE=function(){return co()},da=lo,IE=Df,bE=Sn,Uu={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},AE=Ai,er=kf,SE=J,CE=Ke,Kn=q;const Fu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ge.UNAUTHENTICATED=new ge(null),ge.GOOGLE_CREDENTIALS=new ge("google-credentials-uid"),ge.FIRST_PARTY=new ge("first-party-uid"),ge.MOCK_USER=new ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new wc("@firebase/firestore");function Vu(){return _n.logLevel}function S(n,...e){if(_n.logLevel<=j.DEBUG){const t=e.map(Kc);_n.debug(`Firestore (${_s}): ${n}`,...t)}}function vt(n,...e){if(_n.logLevel<=j.ERROR){const t=e.map(Kc);_n.error(`Firestore (${_s}): ${n}`,...t)}}function Zn(n,...e){if(_n.logLevel<=j.WARN){const t=e.map(Kc);_n.warn(`Firestore (${_s}): ${n}`,...t)}}function Kc(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
 */function O(n="Unexpected state"){const e=`FIRESTORE (${_s}) INTERNAL ASSERTION FAILED: `+n;throw vt(e),new Error(e)}function G(n,e){n||O()}function x(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends lt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ge.UNAUTHENTICATED))}shutdown(){}}class DE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class kE{constructor(e){this.t=e,this.currentUser=ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const i=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let r=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new mt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{S("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(S("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new mt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(S("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(G(typeof s.accessToken=="string"),new dp(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new ge(e)}}class RE{constructor(e,t,s){this.h=e,this.l=t,this.m=s,this.type="FirstParty",this.user=ge.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class OE{constructor(e,t,s){this.h=e,this.l=t,this.m=s}getToken(){return Promise.resolve(new RE(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class LE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PE{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const s=r=>{r.error!=null&&S("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,S("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{S("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):S("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string"),this.T=t.token,new LE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ME(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=ME(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%e.length))}return s}}function H(n,e){return n<e?-1:n>e?1:0}function es(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new w(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new w(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new w(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new w(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return re.fromMillis(Date.now())}static fromDate(e){return re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new re(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new re(0,0))}static max(){return new P(new re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t,s){t===void 0?t=0:t>e.length&&O(),s===void 0?s=e.length-t:s>e.length-t&&O(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return li.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof li?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=e.get(i),o=t.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class z extends li{construct(e,t,s){return new z(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new w(p.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new z(t)}static emptyPath(){return new z([])}}const xE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _e extends li{construct(e,t,s){return new _e(e,t,s)}static isValidIdentifier(e){return xE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _e(["__name__"])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new w(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new w(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new w(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _e(t)}static emptyPath(){return new _e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.path=e}static fromPath(e){return new D(z.fromString(e))}static fromName(e){return new D(z.fromString(e).popFirst(5))}static empty(){return new D(z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new D(new z(e.slice()))}}function $E(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=P.fromTimestamp(s===1e9?new re(t+1,0):new re(t,s));return new Vt(i,D.empty(),e)}function UE(n){return new Vt(n.readTime,n.key,-1)}class Vt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Vt(P.min(),D.empty(),-1)}static max(){return new Vt(P.max(),D.empty(),-1)}}function FE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=D.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}/**
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
 */const VE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==VE)throw n;S("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new v((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof v?t:v.resolve(t)}catch(t){return v.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):v.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):v.reject(t)}static resolve(e){return new v((t,s)=>{t(e)})}static reject(e){return new v((t,s)=>{s(e)})}static waitFor(e){return new v((t,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&t()},c=>s(c))}),o=!0,r===i&&t()})}static or(e){let t=v.resolve(!1);for(const s of e)t=t.next(i=>i?v.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new v((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,t){return new v((s,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}}function Di(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Wc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>t.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Wc.ct=-1;function yo(n){return n==null}function xr(n){return n===0&&1/n==-1/0}function jE(n){return typeof n=="number"&&Number.isInteger(n)&&!xr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Cn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function pp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.comparator=e,this.root=t||ue.EMPTY}insert(e,t){return new Q(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ue.BLACK,null,null))}remove(e){return new Q(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ue.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tr(this.root,e,this.comparator,!1)}getReverseIterator(){return new tr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tr(this.root,e,this.comparator,!0)}}class tr{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ue{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s!=null?s:ue.RED,this.left=i!=null?i:ue.EMPTY,this.right=r!=null?r:ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new ue(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ue.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}ue.EMPTY=null,ue.RED=!0,ue.BLACK=!1;ue.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(n,e,t,s,i){return this}insert(n,e,t){return new ue(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.comparator=e,this.data=new Q(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ju(this.data.getIterator())}getIteratorFrom(e){return new ju(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ee(this.comparator);return t.data=e,t}}class ju{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Le{constructor(e){this.fields=e,e.sort(_e.comparator)}static empty(){return new Le([])}unionWith(e){let t=new Ee(_e.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Le(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return es(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class gp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException!="undefined"&&i instanceof DOMException?new gp("Invalid base64 string: "+i):i}}(e);return new Te(t)}static fromUint8Array(e){const t=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const HE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bt(n){if(G(!!n),typeof n=="string"){let e=0;const t=HE.exec(n);if(G(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ee(n.seconds),nanos:ee(n.nanos)}}function ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function yn(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
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
 */function vo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Gc(n){const e=n.mapValue.fields.__previous_value__;return vo(e)?Gc(e):e}function ui(n){const e=Bt(n.mapValue.fields.__local_write_time__.timestampValue);return new re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,t,s,i,r,o,a,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class hi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new hi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const nr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?vo(n)?4:zE(n)?9007199254740991:10:O()}function at(n,e){if(n===e)return!0;const t=vn(n);if(t!==vn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ui(n).isEqual(ui(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Bt(s.timestampValue),o=Bt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return yn(s.bytesValue).isEqual(yn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ee(s.geoPointValue.latitude)===ee(i.geoPointValue.latitude)&&ee(s.geoPointValue.longitude)===ee(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ee(s.integerValue)===ee(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ee(s.doubleValue),o=ee(i.doubleValue);return r===o?xr(r)===xr(o):isNaN(r)&&isNaN(o)}return!1}(n,e);case 9:return es(n.arrayValue.values||[],e.arrayValue.values||[],at);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Bu(r)!==Bu(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!at(r[a],o[a])))return!1;return!0}(n,e);default:return O()}}function di(n,e){return(n.values||[]).find(t=>at(t,e))!==void 0}function ts(n,e){if(n===e)return 0;const t=vn(n),s=vn(e);if(t!==s)return H(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return function(i,r){const o=ee(i.integerValue||i.doubleValue),a=ee(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Hu(n.timestampValue,e.timestampValue);case 4:return Hu(ui(n),ui(e));case 5:return H(n.stringValue,e.stringValue);case 6:return function(i,r){const o=yn(i),a=yn(r);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=H(o[c],a[c]);if(l!==0)return l}return H(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,r){const o=H(ee(i.latitude),ee(r.latitude));return o!==0?o:H(ee(i.longitude),ee(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ts(o[c],a[c]);if(l)return l}return H(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===nr.mapValue&&r===nr.mapValue)return 0;if(i===nr.mapValue)return 1;if(r===nr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=H(a[u],l[u]);if(h!==0)return h;const d=ts(o[a[u]],c[l[u]]);if(d!==0)return d}return H(a.length,l.length)}(n.mapValue,e.mapValue);default:throw O()}}function Hu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=Bt(n),s=Bt(e),i=H(t.seconds,s.seconds);return i!==0?i:H(t.nanos,s.nanos)}function ns(n){return Qa(n)}function Qa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const i=Bt(s);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?yn(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,D.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Qa(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Qa(s.fields[a])}`;return r+"}"}(n.mapValue):O();var e,t}function $r(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Xa(n){return!!n&&"integerValue"in n}function Yc(n){return!!n&&"arrayValue"in n}function qu(n){return!!n&&"nullValue"in n}function zu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fr(n){return!!n&&"mapValue"in n}function zs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Cn(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=zs(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function zE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!fr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zs(t)}setAll(e){let t=_e.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,i),s={},i=[],t=a.popLast()}o?s[a.lastSegment()]=zs(o):i.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());fr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return at(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];fr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){Cn(t,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Ne(zs(this.value))}}function mp(n){const e=[];return Cn(n.fields,(t,s)=>{const i=new _e([t]);if(fr(s)){const r=mp(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Le(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t,s,i,r,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new me(e,0,P.min(),P.min(),P.min(),Ne.empty(),0)}static newFoundDocument(e,t,s,i){return new me(e,1,t,P.min(),s,i,0)}static newNoDocument(e,t){return new me(e,2,t,P.min(),P.min(),Ne.empty(),0)}static newUnknownDocument(e,t){return new me(e,3,t,P.min(),P.min(),Ne.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(P.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ss{constructor(e,t){this.position=e,this.inclusive=t}}function Ku(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=D.comparator(D.fromName(o.referenceValue),t.key):s=ts(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Wu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!at(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Wn{constructor(e,t="asc"){this.field=e,this.dir=t}}function KE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class _p{}class te extends _p{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new GE(e,t,s):t==="array-contains"?new XE(e,s):t==="in"?new JE(e,s):t==="not-in"?new ZE(e,s):t==="array-contains-any"?new ew(e,s):new te(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new YE(e,s):new QE(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ts(t,this.value)):t!==null&&vn(this.value)===vn(t)&&this.matchesComparison(ts(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class We extends _p{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new We(e,t)}matches(e){return yp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(t=>t.isInequality());return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function yp(n){return n.op==="and"}function vp(n){return WE(n)&&yp(n)}function WE(n){for(const e of n.filters)if(e instanceof We)return!1;return!0}function Ja(n){if(n instanceof te)return n.field.canonicalString()+n.op.toString()+ns(n.value);if(vp(n))return n.filters.map(e=>Ja(e)).join(",");{const e=n.filters.map(t=>Ja(t)).join(",");return`${n.op}(${e})`}}function Ep(n,e){return n instanceof te?function(t,s){return s instanceof te&&t.op===s.op&&t.field.isEqual(s.field)&&at(t.value,s.value)}(n,e):n instanceof We?function(t,s){return s instanceof We&&t.op===s.op&&t.filters.length===s.filters.length?t.filters.reduce((i,r,o)=>i&&Ep(r,s.filters[o]),!0):!1}(n,e):void O()}function wp(n){return n instanceof te?function(e){return`${e.field.canonicalString()} ${e.op} ${ns(e.value)}`}(n):n instanceof We?function(e){return e.op.toString()+" {"+e.getFilters().map(wp).join(" ,")+"}"}(n):"Filter"}class GE extends te{constructor(e,t,s){super(e,t,s),this.key=D.fromName(s.referenceValue)}matches(e){const t=D.comparator(e.key,this.key);return this.matchesComparison(t)}}class YE extends te{constructor(e,t){super(e,"in",t),this.keys=Tp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class QE extends te{constructor(e,t){super(e,"not-in",t),this.keys=Tp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Tp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>D.fromName(s.referenceValue))}class XE extends te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Yc(t)&&di(t.arrayValue,this.value)}}class JE extends te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&di(this.value.arrayValue,t)}}class ZE extends te{constructor(e,t){super(e,"not-in",t)}matches(e){if(di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!di(this.value.arrayValue,t)}}class ew extends te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Yc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>di(this.value.arrayValue,s))}}/**
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
 */class tw{constructor(e,t=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function Gu(n,e=null,t=[],s=[],i=null,r=null,o=null){return new tw(n,e,t,s,i,r,o)}function Qc(n){const e=x(n);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Ja(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),yo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>ns(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>ns(s)).join(",")),e.dt=t}return e.dt}function Xc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!KE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ep(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Wu(n.startAt,e.startAt)&&Wu(n.endAt,e.endAt)}function Za(n){return D.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function nw(n,e,t,s,i,r,o,a){return new Nn(n,e,t,s,i,r,o,a)}function Jc(n){return new Nn(n)}function Yu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Zc(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Eo(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function el(n){return n.collectionGroup!==null}function un(n){const e=x(n);if(e.wt===null){e.wt=[];const t=Eo(e),s=Zc(e);if(t!==null&&s===null)t.isKeyField()||e.wt.push(new Wn(t)),e.wt.push(new Wn(_e.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Wn(_e.keyField(),r))}}}return e.wt}function Et(n){const e=x(n);if(!e._t)if(e.limitType==="F")e._t=Gu(e.path,e.collectionGroup,un(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of un(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new Wn(r.field,o))}const s=e.endAt?new ss(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ss(e.startAt.position,e.startAt.inclusive):null;e._t=Gu(e.path,e.collectionGroup,t,e.filters,e.limit,s,i)}return e._t}function ec(n,e){e.getFirstInequalityField(),Eo(n);const t=n.filters.concat([e]);return new Nn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ur(n,e,t){return new Nn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function wo(n,e){return Xc(Et(n),Et(e))&&n.limitType===e.limitType}function Ip(n){return`${Qc(Et(n))}|lt:${n.limitType}`}function tc(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(s=>wp(s)).join(", ")}]`),yo(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>ns(s)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>ns(s)).join(",")),`Target(${t})`}(Et(n))}; limitType=${n.limitType})`}function To(n,e){return e.isFoundDocument()&&function(t,s){const i=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):D.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,s){for(const i of un(t))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const i of t.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(i,r,o){const a=Ku(i,r,o);return i.inclusive?a<=0:a<0}(t.startAt,un(t),s)||t.endAt&&!function(i,r,o){const a=Ku(i,r,o);return i.inclusive?a>=0:a>0}(t.endAt,un(t),s))}(n,e)}function sw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function bp(n){return(e,t)=>{let s=!1;for(const i of un(n)){const r=iw(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function iw(n,e,t){const s=n.field.isKeyField()?D.comparator(e.key,t.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?ts(a,c):O()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return O()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Cn(this.inner,(t,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return pp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=new Q(D.comparator);function wt(){return rw}const Ap=new Q(D.comparator);function Fs(...n){let e=Ap;for(const t of n)e=e.insert(t.key,t);return e}function Sp(n){let e=Ap;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function cn(){return Ks()}function Cp(){return Ks()}function Ks(){return new ys(n=>n.toString(),(n,e)=>n.isEqual(e))}const ow=new Q(D.comparator),aw=new Ee(D.comparator);function F(...n){let e=aw;for(const t of n)e=e.add(t);return e}const cw=new Ee(H);function lw(){return cw}/**
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
 */function Np(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xr(e)?"-0":e}}function Dp(n){return{integerValue:""+n}}function uw(n,e){return jE(e)?Dp(e):Np(n,e)}/**
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
 */class Io{constructor(){this._=void 0}}function hw(n,e,t){return n instanceof Fr?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&vo(i)&&(i=Gc(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(t,e):n instanceof fi?Rp(n,e):n instanceof pi?Op(n,e):function(s,i){const r=kp(s,i),o=Qu(r)+Qu(s.gt);return Xa(r)&&Xa(s.gt)?Dp(o):Np(s.serializer,o)}(n,e)}function dw(n,e,t){return n instanceof fi?Rp(n,e):n instanceof pi?Op(n,e):t}function kp(n,e){return n instanceof Vr?Xa(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class Fr extends Io{}class fi extends Io{constructor(e){super(),this.elements=e}}function Rp(n,e){const t=Lp(e);for(const s of n.elements)t.some(i=>at(i,s))||t.push(s);return{arrayValue:{values:t}}}class pi extends Io{constructor(e){super(),this.elements=e}}function Op(n,e){let t=Lp(e);for(const s of n.elements)t=t.filter(i=>!at(i,s));return{arrayValue:{values:t}}}class Vr extends Io{constructor(e,t){super(),this.serializer=e,this.gt=t}}function Qu(n){return ee(n.integerValue||n.doubleValue)}function Lp(n){return Yc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function fw(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof fi&&s instanceof fi||t instanceof pi&&s instanceof pi?es(t.elements,s.elements,at):t instanceof Vr&&s instanceof Vr?at(t.gt,s.gt):t instanceof Fr&&s instanceof Fr}(n.transform,e.transform)}class pw{constructor(e,t){this.version=e,this.transformResults=t}}class ze{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ze}static exists(e){return new ze(void 0,e)}static updateTime(e){return new ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class bo{}function Pp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new tl(n.key,ze.none()):new ki(n.key,n.data,ze.none());{const t=n.data,s=Ne.empty();let i=new Ee(_e.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Wt(n.key,s,new Le(i.toArray()),ze.none())}}function gw(n,e,t){n instanceof ki?function(s,i,r){const o=s.value.clone(),a=Ju(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Wt?function(s,i,r){if(!pr(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Ju(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Mp(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,e,t):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function Ws(n,e,t,s){return n instanceof ki?function(i,r,o,a){if(!pr(i.precondition,r))return o;const c=i.value.clone(),l=Zu(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(n,e,t,s):n instanceof Wt?function(i,r,o,a){if(!pr(i.precondition,r))return o;const c=Zu(i.fieldTransforms,a,r),l=r.data;return l.setAll(Mp(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(n,e,t,s):function(i,r,o){return pr(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(n,e,t)}function mw(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=kp(s.transform,i||null);r!=null&&(t===null&&(t=Ne.empty()),t.set(s.field,r))}return t||null}function Xu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&es(t,s,(i,r)=>fw(i,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ki extends bo{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wt extends bo{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Mp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Ju(n,e,t){const s=new Map;G(n.length===t.length);for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,dw(o,a,t[i]))}return s}function Zu(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,hw(r,o,e))}return s}class tl extends bo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _w extends bo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&gw(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ws(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ws(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Cp();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(i.key)?null:a;const c=Pp(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(P.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),F())}isEqual(e){return this.batchId===e.batchId&&es(this.mutations,e.mutations,(t,s)=>Xu(t,s))&&es(this.baseMutations,e.baseMutations,(t,s)=>Xu(t,s))}}class nl{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){G(e.mutations.length===s.length);let i=ow;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new nl(e,t,s,i)}}/**
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
 */class vw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ew{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z,V;function ww(n){switch(n){default:return O();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function xp(n){if(n===void 0)return vt("GRPC error has no .code"),p.UNKNOWN;switch(n){case Z.OK:return p.OK;case Z.CANCELLED:return p.CANCELLED;case Z.UNKNOWN:return p.UNKNOWN;case Z.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case Z.INTERNAL:return p.INTERNAL;case Z.UNAVAILABLE:return p.UNAVAILABLE;case Z.UNAUTHENTICATED:return p.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case Z.NOT_FOUND:return p.NOT_FOUND;case Z.ALREADY_EXISTS:return p.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return p.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case Z.ABORTED:return p.ABORTED;case Z.OUT_OF_RANGE:return p.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return p.UNIMPLEMENTED;case Z.DATA_LOSS:return p.DATA_LOSS;default:return O()}}(V=Z||(Z={}))[V.OK=0]="OK",V[V.CANCELLED=1]="CANCELLED",V[V.UNKNOWN=2]="UNKNOWN",V[V.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",V[V.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",V[V.NOT_FOUND=5]="NOT_FOUND",V[V.ALREADY_EXISTS=6]="ALREADY_EXISTS",V[V.PERMISSION_DENIED=7]="PERMISSION_DENIED",V[V.UNAUTHENTICATED=16]="UNAUTHENTICATED",V[V.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",V[V.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",V[V.ABORTED=10]="ABORTED",V[V.OUT_OF_RANGE=11]="OUT_OF_RANGE",V[V.UNIMPLEMENTED=12]="UNIMPLEMENTED",V[V.INTERNAL=13]="INTERNAL",V[V.UNAVAILABLE=14]="UNAVAILABLE",V[V.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class sl{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return sr}static getOrCreateInstance(){return sr===null&&(sr=new sl),sr}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let sr=null;/**
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
 */function Tw(){return new TextEncoder}/**
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
 */const Iw=new Kn([4294967295,4294967295],0);function eh(n){const e=Tw().encode(n),t=new CE;return t.update(e),new Uint8Array(t.digest())}function th(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Kn([t,s],0),new Kn([i,r],0)]}class il{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Vs(`Invalid padding: ${t}`);if(s<0)throw new Vs(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Vs(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Vs(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Kn.fromNumber(this.It)}Et(e,t,s){let i=e.add(t.multiply(Kn.fromNumber(s)));return i.compare(Iw)===1&&(i=new Kn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=eh(e),[s,i]=th(t);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);if(!this.At(o))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new il(r,i,t);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const t=eh(e),[s,i]=th(t);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,Ri.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ao(P.min(),i,new Q(H),wt(),F())}}class Ri{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ri(s,t,F(),F(),F())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,t,s,i){this.Pt=e,this.removedTargetIds=t,this.key=s,this.bt=i}}class $p{constructor(e,t){this.targetId=e,this.Vt=t}}class Up{constructor(e,t,s=Te.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class nh{constructor(){this.St=0,this.Dt=ih(),this.Ct=Te.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=F(),t=F(),s=F();return this.Dt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:O()}}),new Ri(this.Ct,this.xt,e,t,s)}Ft(){this.Nt=!1,this.Dt=ih()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class bw{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=wt(),this.zt=sh(),this.Wt=new Q(H)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const s=this.Zt(t);switch(e.state){case 0:this.te(t)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(t);break;case 3:this.te(t)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),s.$t(e.resumeToken));break;default:O()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((s,i)=>{this.te(i)&&t(i)})}ne(e){var t;const s=e.targetId,i=e.Vt.count,r=this.se(s);if(r){const o=r.target;if(Za(o))if(i===0){const a=new D(o.path);this.Yt(s,a,me.newNoDocument(a,P.min()))}else G(i===1);else{const a=this.ie(s);if(a!==i){const c=this.re(e,a);if(c!==0){this.ee(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,l)}(t=sl.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(l,u,h){var d,f,g,m,_,C;const N={localCacheCount:u,existenceFilterCount:h.count},b=h.unchangedNames;return b&&(N.bloomFilter={applied:l===0,hashCount:(d=b==null?void 0:b.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(m=(g=(f=b==null?void 0:b.bits)===null||f===void 0?void 0:f.bitmap)===null||g===void 0?void 0:g.length)!==null&&m!==void 0?m:0,padding:(C=(_=b==null?void 0:b.bits)===null||_===void 0?void 0:_.padding)!==null&&C!==void 0?C:0}),N}(c,a,e.Vt))}}}}re(e,t){const{unchangedNames:s,count:i}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=yn(r).toUint8Array()}catch(u){if(u instanceof gp)return Zn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new il(c,o,a)}catch(u){return Zn(u instanceof Vs?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:i!==t-this.oe(e.targetId,l)?2:0}oe(e,t){const s=this.Gt.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.vt(a)||(this.Yt(e,r,null),i++)}),i}ce(e){const t=new Map;this.Qt.forEach((r,o)=>{const a=this.se(o);if(a){if(r.current&&Za(a.target)){const c=new D(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,me.newNoDocument(c,e))}r.Mt&&(t.set(o,r.Ot()),r.Ft())}});let s=F();this.zt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(e));const i=new Ao(e,t,this.Wt,this.jt,s);return this.jt=wt(),this.zt=sh(),this.Wt=new Q(H),i}Jt(e,t){if(!this.te(e))return;const s=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,s),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,s){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,t)?i.Bt(t,1):i.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),s&&(this.jt=this.jt.insert(t,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new nh,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Ee(H),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||S("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new nh),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function sh(){return new Q(D.comparator)}function ih(){return new Q(D.comparator)}const Aw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Sw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Cw=(()=>({and:"AND",or:"OR"}))();class Nw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function nc(n,e){return n.useProto3Json||yo(e)?e:{value:e}}function Br(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Dw(n,e){return Br(n,e.toTimestamp())}function st(n){return G(!!n),P.fromTimestamp(function(e){const t=Bt(e);return new re(t.seconds,t.nanos)}(n))}function rl(n,e){return function(t){return new z(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Vp(n){const e=z.fromString(n);return G(qp(e)),e}function sc(n,e){return rl(n.databaseId,e.path)}function fa(n,e){const t=Vp(e);if(t.get(1)!==n.databaseId.projectId)throw new w(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new w(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new D(Bp(t))}function ic(n,e){return rl(n.databaseId,e)}function kw(n){const e=Vp(n);return e.length===4?z.emptyPath():Bp(e)}function rc(n){return new z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Bp(n){return G(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function rh(n,e,t){return{name:sc(n,e),fields:t.value.mapValue.fields}}function Rw(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.useProto3Json?(G(l===void 0||typeof l=="string"),Te.fromBase64String(l||"")):(G(l===void 0||l instanceof Uint8Array),Te.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?p.UNKNOWN:xp(c.code);return new w(l,c.message||"")}(o);t=new Up(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=fa(n,s.document.name),r=st(s.document.updateTime),o=s.document.createTime?st(s.document.createTime):P.min(),a=new Ne({mapValue:{fields:s.document.fields}}),c=me.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];t=new gr(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=fa(n,s.document),r=s.readTime?st(s.readTime):P.min(),o=me.newNoDocument(i,r),a=s.removedTargetIds||[];t=new gr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=fa(n,s.document),r=s.removedTargetIds||[];t=new gr([],r,i,null)}else{if(!("filter"in e))return O();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new Ew(i,r),a=s.targetId;t=new $p(a,o)}}return t}function Ow(n,e){let t;if(e instanceof ki)t={update:rh(n,e.key,e.value)};else if(e instanceof tl)t={delete:sc(n,e.key)};else if(e instanceof Wt)t={update:rh(n,e.key,e.data),updateMask:Bw(e.fieldMask)};else{if(!(e instanceof _w))return O();t={verify:sc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Fr)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof fi)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof pi)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Vr)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw O()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Dw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O()}(n,e.precondition)),t}function Lw(n,e){return n&&n.length>0?(G(e!==void 0),n.map(t=>function(s,i){let r=s.updateTime?st(s.updateTime):st(i);return r.isEqual(P.min())&&(r=st(i)),new pw(r,s.transformResults||[])}(t,e))):[]}function Pw(n,e){return{documents:[ic(n,e.path)]}}function Mw(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=ic(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=ic(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return Hp(We.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Un(u.field),direction:Uw(u.dir)}}(l))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=nc(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function xw(n){let e=kw(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){G(s===1);const u=t.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];t.where&&(r=function(u){const h=jp(u);return h instanceof We&&vp(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new Wn(Fn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;t.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,yo(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new ss(d,h)}(t.startAt));let l=null;return t.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new ss(d,h)}(t.endAt)),nw(e,i,o,r,a,"F",c,l)}function $w(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function jp(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Fn(e.unaryFilter.field);return te.create(t,"==",{doubleValue:NaN});case"IS_NULL":const s=Fn(e.unaryFilter.field);return te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fn(e.unaryFilter.field);return te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Fn(e.unaryFilter.field);return te.create(r,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(n):n.fieldFilter!==void 0?function(e){return te.create(Fn(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return We.create(e.compositeFilter.filters.map(t=>jp(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(n):O()}function Uw(n){return Aw[n]}function Fw(n){return Sw[n]}function Vw(n){return Cw[n]}function Un(n){return{fieldPath:n.canonicalString()}}function Fn(n){return _e.fromServerFormat(n.fieldPath)}function Hp(n){return n instanceof te?function(e){if(e.op==="=="){if(zu(e.value))return{unaryFilter:{field:Un(e.field),op:"IS_NAN"}};if(qu(e.value))return{unaryFilter:{field:Un(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(zu(e.value))return{unaryFilter:{field:Un(e.field),op:"IS_NOT_NAN"}};if(qu(e.value))return{unaryFilter:{field:Un(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Un(e.field),op:Fw(e.op),value:e.value}}}(n):n instanceof We?function(e){const t=e.getFilters().map(s=>Hp(s));return t.length===1?t[0]:{compositeFilter:{op:Vw(e.op),filters:t}}}(n):O()}function Bw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function qp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,s,i,r=P.min(),o=P.min(),a=Te.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Mt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){this.fe=e}}function Hw(n){const e=xw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ur(e,e.limit,"L"):e}/**
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
 */class qw{constructor(){this.rn=new zw}addToCollectionParentIndex(e,t){return this.rn.add(t),v.resolve()}getCollectionParents(e,t){return v.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return v.resolve()}deleteFieldIndex(e,t){return v.resolve()}getDocumentsMatchingTarget(e,t){return v.resolve(null)}getIndexType(e,t){return v.resolve(0)}getFieldIndexes(e,t){return v.resolve([])}getNextCollectionGroupToUpdate(e){return v.resolve(null)}getMinOffset(e,t){return v.resolve(Vt.min())}getMinOffsetFromCollectionGroup(e,t){return v.resolve(Vt.min())}updateCollectionGroup(e,t,s){return v.resolve()}updateIndexEntries(e,t){return v.resolve()}}class zw{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new Ee(z.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Ee(z.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new is(0)}static Mn(){return new is(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(){this.changes=new ys(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,me.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?v.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ww{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(s!==null&&Ws(s.mutation,i,Le.empty(),re.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,F()).next(()=>s))}getLocalViewOfDocuments(e,t,s=F()){const i=cn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let o=Fs();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=cn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,F()))}populateOverlays(e,t,s){const i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,i){let r=wt();const o=Ks(),a=Ks();return t.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Wt)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ws(u.mutation,l,u.mutation.getFieldMask(),re.now())):o.set(l.key,Le.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new Ww(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const s=Ks();let i=new Q((o,a)=>o-a),r=F();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=s.get(c)||Le.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||F()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Cp();u.forEach(d=>{if(!r.has(d)){const f=Pp(t.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return v.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(i){return D.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):el(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):v.resolve(cn());let a=-1,c=r;return o.next(l=>v.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?v.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,F())).next(u=>({batchId:a,changes:Sp(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new D(t)).next(s=>{let i=Fs();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const i=t.collectionGroup;let r=Fs();return this.indexManager.getCollectionParents(e,i).next(o=>v.forEach(o,a=>{const c=function(l,u){return new Nn(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,me.newInvalidDocument(l)))});let o=Fs();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Ws(l.mutation,c,Le.empty(),re.now()),To(t,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class Yw{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return v.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var s;return this.cs.set(t.id,{id:(s=t).id,version:s.version,createTime:st(s.createTime)}),v.resolve()}getNamedQuery(e,t){return v.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(s){return{name:s.name,query:Hw(s.bundledQuery),readTime:st(s.readTime)}}(t)),v.resolve()}}/**
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
 */class Qw{constructor(){this.overlays=new Q(D.comparator),this.ls=new Map}getOverlay(e,t){return v.resolve(this.overlays.get(t))}getOverlays(e,t){const s=cn();return v.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.we(e,t,r)}),v.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.ls.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(s)),v.resolve()}getOverlaysForCollection(e,t,s){const i=cn(),r=t.length+1,o=new D(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return v.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new Q((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=cn(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=cn(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return v.resolve(a)}we(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(s.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new vw(t,s));let r=this.ls.get(t);r===void 0&&(r=F(),this.ls.set(t,r)),this.ls.set(t,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.fs=new Ee(ae.ds),this.ws=new Ee(ae._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const s=new ae(e,t);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.ys(new ae(e,t))}ps(e,t){e.forEach(s=>this.removeReference(s,t))}Is(e){const t=new D(new z([])),s=new ae(t,e),i=new ae(t,e+1),r=[];return this.ws.forEachInRange([s,i],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new D(new z([])),s=new ae(t,e),i=new ae(t,e+1);let r=F();return this.ws.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new ae(e,0),s=this.fs.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ae{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return D.comparator(e.key,t.key)||H(e.As,t.As)}static _s(e,t){return H(e.As,t.As)||D.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Ee(ae.ds)}checkEmpty(e){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yw(r,t,s,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new ae(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(e,t){return v.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.bs(s),r=i<0?0:i;return v.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ae(t,0),i=new ae(t,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const a=this.Ps(o.As);r.push(a)}),v.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ee(H);return t.forEach(i=>{const r=new ae(i,0),o=new ae(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{s=s.add(a.As)})}),v.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;D.isDocumentKey(r)||(r=r.child(""));const o=new ae(new D(r),0);let a=new Ee(H);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.As)),!0)},o),v.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach(s=>{const i=this.Ps(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){G(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return v.forEach(t.mutations,i=>{const r=new ae(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,t){const s=new ae(t,0),i=this.Rs.firstAfterOrEqual(s);return v.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,v.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.Ds=e,this.docs=new Q(D.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ds(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return v.resolve(s?s.document.mutableCopy():me.newInvalidDocument(t))}getEntries(e,t){let s=wt();return t.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():me.newInvalidDocument(i))}),v.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=wt();const o=t.path,a=new D(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||FE(UE(u),s)<=0||(i.has(u.key)||To(t,u))&&(r=r.insert(u.key,u.mutableCopy()))}return v.resolve(r)}getAllFromCollectionGroup(e,t,s,i){O()}Cs(e,t){return v.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Zw(this)}getSize(e){return v.resolve(this.size)}}class Zw extends Kw{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.os.addEntry(e,i)):this.os.removeEntry(s)}),v.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e){this.persistence=e,this.xs=new ys(t=>Qc(t),Xc),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Ns=0,this.ks=new ol,this.targetCount=0,this.Ms=is.kn()}forEachTarget(e,t){return this.xs.forEach((s,i)=>t(i)),v.resolve()}getLastRemoteSnapshotVersion(e){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return v.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Ns&&(this.Ns=t),v.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new is(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,v.resolve()}updateTargetData(e,t){return this.Fn(t),v.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,v.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),v.waitFor(r).next(()=>i)}getTargetCount(e){return v.resolve(this.targetCount)}getTargetData(e,t){const s=this.xs.get(t)||null;return v.resolve(s)}addMatchingKeys(e,t,s){return this.ks.gs(t,s),v.resolve()}removeMatchingKeys(e,t,s){this.ks.ps(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),v.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),v.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ks.Es(t);return v.resolve(s)}containsKey(e,t){return v.resolve(this.ks.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,t){this.$s={},this.overlays={},this.Os=new Wc(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new eT(this),this.indexManager=new qw,this.remoteDocumentCache=function(s){return new Jw(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new jw(t),this.qs=new Yw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Qw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.$s[e.toKey()];return s||(s=new Xw(t,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,s){S("MemoryPersistence","Starting transaction:",e);const i=new nT(this.Os.next());return this.referenceDelegate.Us(),s(i).next(r=>this.referenceDelegate.Ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gs(e,t){return v.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,t)))}}class nT extends BE{constructor(e){super(),this.currentSequenceNumber=e}}class al{constructor(e){this.persistence=e,this.Qs=new ol,this.js=null}static zs(e){return new al(e)}get Ws(){if(this.js)return this.js;throw O()}addReference(e,t,s){return this.Qs.addReference(s,t),this.Ws.delete(s.toString()),v.resolve()}removeReference(e,t,s){return this.Qs.removeReference(s,t),this.Ws.add(s.toString()),v.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),v.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(i=>this.Ws.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.Ws.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Ws,s=>{const i=D.fromPath(s);return this.Hs(e,i).next(r=>{r||t.removeEntry(i,P.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(s=>{s?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return v.or([()=>v.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Fi=s,this.Bi=i}static Li(e,t){let s=F(),i=F();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new cl(e,t.fromCache,s,i)}}/**
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
 */class sT{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,s,i){return this.Ki(e,t).next(r=>r||this.Gi(e,t,i,s)).next(r=>r||this.Qi(e,t))}Ki(e,t){if(Yu(t))return v.resolve(null);let s=Et(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ur(t,null,"F"),s=Et(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=F(...r);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.ji(t,a);return this.zi(t,l,o,c.readTime)?this.Ki(e,Ur(t,null,"F")):this.Wi(e,l,t,c)}))})))}Gi(e,t,s,i){return Yu(t)||i.isEqual(P.min())?this.Qi(e,t):this.Ui.getDocuments(e,s).next(r=>{const o=this.ji(t,r);return this.zi(t,o,s,i)?this.Qi(e,t):(Vu()<=j.DEBUG&&S("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),tc(t)),this.Wi(e,o,t,$E(i,-1)))})}ji(e,t){let s=new Ee(bp(e));return t.forEach((i,r)=>{To(e,r)&&(s=s.add(r))}),s}zi(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Qi(e,t){return Vu()<=j.DEBUG&&S("QueryEngine","Using full collection scan to execute query:",tc(t)),this.Ui.getDocumentsMatchingQuery(e,t,Vt.min())}Wi(e,t,s,i){return this.Ui.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class iT{constructor(e,t,s,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new Q(H),this.Yi=new ys(r=>Qc(r),Xc),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gw(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function rT(n,e,t,s){return new iT(n,e,t,s)}async function zp(n,e){const t=x(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t.tr(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=F();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(s,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function oT(n,e){const t=x(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=t.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=v.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(g=>{const m=c.docVersions.get(f);G(m!==null),g.version.compareTo(m)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(t,s,e,r).next(()=>r.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=F();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,i))})}function Kp(n){const e=x(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function aT(n,e){const t=x(n),s=e.snapshotVersion;let i=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});i=t.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(t.Bs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>t.Bs.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Te.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(g,m,_){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,f,u)&&a.push(t.Bs.updateTargetData(r,f))});let c=wt(),l=F();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(cT(r,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!s.isEqual(P.min())){const u=t.Bs.getLastRemoteSnapshotVersion(r).next(h=>t.Bs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return v.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(t.Ji=i,r))}function cT(n,e,t){let s=F(),i=F();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let o=wt();return t.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(P.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):S("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:i}})}function lT(n,e){const t=x(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function uT(n,e){const t=x(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Bs.getTargetData(s,e).next(r=>r?(i=r,v.resolve(i)):t.Bs.allocateTargetId(s).next(o=>(i=new Mt(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Bs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(s.targetId,s),t.Yi.set(e,s.targetId)),s})}async function oc(n,e,t){const s=x(n),i=s.Ji.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Di(o))throw o;S("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(i.target)}function oh(n,e,t){const s=x(n);let i=P.min(),r=F();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=x(a),h=u.Yi.get(l);return h!==void 0?v.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(s,o,Et(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,t?i:P.min(),t?r:F())).next(a=>(hT(s,sw(e),a),{documents:a,ir:r})))}function hT(n,e,t){let s=n.Xi.get(e)||P.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.Xi.set(e,s)}class ah{constructor(){this.activeTargetIds=lw()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dT{constructor(){this.Hr=new ah,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,s){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new ah,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class fT{Yr(e){}shutdown(){}}/**
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
 */class ch{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){S("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){S("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ir=null;function pa(){return ir===null?ir=268435456+Math.round(2147483648*Math.random()):ir++,"0x"+ir.toString(16)}/**
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
 */const pT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="WebChannelConnection";class mT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,s,i,r){const o=pa(),a=this.To(e,t);S("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.Eo(c,i,r),this.Ao(e,a,c,s).then(l=>(S("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Zn("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}vo(e,t,s,i,r,o){return this.Io(e,t,s,i,r)}Eo(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+_s,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}To(e,t){const s=pT[e];return`${this.mo}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,s,i){const r=pa();return new Promise((o,a)=>{const c=new SE;c.setWithCredentials(!0),c.listenOnce(IE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case da.NO_ERROR:const u=c.getResponseJson();S(pe,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case da.TIMEOUT:S(pe,`RPC '${e}' ${r} timed out`),a(new w(p.DEADLINE_EXCEEDED,"Request time out"));break;case da.HTTP_ERROR:const h=c.getStatus();if(S(pe,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(m){const _=m.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(_)>=0?_:p.UNKNOWN}(f.status);a(new w(g,f.message))}else a(new w(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new w(p.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{S(pe,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(i);S(pe,`RPC '${e}' ${r} sending request:`,i),c.send(t,"POST",l,s,15)})}Ro(e,t,s){const i=pa(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=wE(),a=TE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new AE({})),this.Eo(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const u=r.join("");S(pe,`Creating RPC '${e}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const g=new gT({ro:_=>{f?S(pe,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(d||(S(pe,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),S(pe,`RPC '${e}' stream ${i} sending:`,_),h.send(_))},oo:()=>h.close()}),m=(_,C,N)=>{_.listen(C,b=>{try{N(b)}catch(E){setTimeout(()=>{throw E},0)}})};return m(h,er.EventType.OPEN,()=>{f||S(pe,`RPC '${e}' stream ${i} transport opened.`)}),m(h,er.EventType.CLOSE,()=>{f||(f=!0,S(pe,`RPC '${e}' stream ${i} transport closed`),g.wo())}),m(h,er.EventType.ERROR,_=>{f||(f=!0,Zn(pe,`RPC '${e}' stream ${i} transport errored:`,_),g.wo(new w(p.UNAVAILABLE,"The operation could not be completed")))}),m(h,er.EventType.MESSAGE,_=>{var C;if(!f){const N=_.data[0];G(!!N);const b=N,E=b.error||((C=b[0])===null||C===void 0?void 0:C.error);if(E){S(pe,`RPC '${e}' stream ${i} received error:`,E);const k=E.status;let I=function(U){const B=Z[U];if(B!==void 0)return xp(B)}(k),A=E.message;I===void 0&&(I=p.INTERNAL,A="Unknown error status: "+k+" with message "+E.message),f=!0,g.wo(new w(I,A)),h.close()}else S(pe,`RPC '${e}' stream ${i} received:`,N),g._o(N)}}),m(a,bE.STAT_EVENT,_=>{_.stat===Uu.PROXY?S(pe,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===Uu.NOPROXY&&S(pe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.fo()},0),g}}function ga(){return typeof document!="undefined"?document:null}/**
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
 */function So(n){return new Nw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,t,s=1e3,i=1.5,r=6e4){this.ii=e,this.timerId=t,this.Po=s,this.bo=i,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-s);i>0&&S("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,t,s,i,r,o,a,c){this.ii=e,this.$o=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Wp(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===p.RESOURCE_EXHAUSTED?(vt(t.toString()),vt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Fo===t&&this.Zo(s,i)},s=>{e(()=>{const i=new w(p.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(i)})})}Zo(e,t){const s=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{s(()=>this.tu(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return S("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(S("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _T extends Gp{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=Rw(this.serializer,e),s=function(i){if(!("targetChange"in i))return P.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?P.min():r.readTime?st(r.readTime):P.min()}(e);return this.listener.nu(t,s)}su(e){const t={};t.database=rc(this.serializer),t.addTarget=function(i,r){let o;const a=r.target;if(o=Za(a)?{documents:Pw(i,a)}:{query:Mw(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=Fp(i,r.resumeToken);const c=nc(i,r.expectedCount);c!==null&&(o.expectedCount=c)}else if(r.snapshotVersion.compareTo(P.min())>0){o.readTime=Br(i,r.snapshotVersion.toTimestamp());const c=nc(i,r.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=$w(this.serializer,e);s&&(t.labels=s),this.Wo(t)}iu(e){const t={};t.database=rc(this.serializer),t.removeTarget=e,this.Wo(t)}}class yT extends Gp{constructor(e,t,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=Lw(e.writeResults,e.commitTime),s=st(e.commitTime);return this.listener.cu(s,t)}return G(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=rc(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Ow(this.serializer,s))};this.Wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT extends class{}{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new w(p.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Io(e,t,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(p.UNKNOWN,i.toString())})}vo(e,t,s,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(e,t,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(p.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class ET{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(vt(t),this.mu=!1):S("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{Dn(this)&&(S("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=x(a);c.vu.add(4),await Oi(c),c.bu.set("Unknown"),c.vu.delete(4),await Co(c)}(this))})}),this.bu=new ET(s,i)}}async function Co(n){if(Dn(n))for(const e of n.Ru)await e(!0)}async function Oi(n){for(const e of n.Ru)await e(!1)}function Yp(n,e){const t=x(n);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),hl(t)?ul(t):vs(t).Ko()&&ll(t,e))}function Qp(n,e){const t=x(n),s=vs(t);t.Au.delete(e),s.Ko()&&Xp(t,e),t.Au.size===0&&(s.Ko()?s.jo():Dn(t)&&t.bu.set("Unknown"))}function ll(n,e){if(n.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(P.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}vs(n).su(e)}function Xp(n,e){n.Vu.qt(e),vs(n).iu(e)}function ul(n){n.Vu=new bw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),le:e=>n.Au.get(e)||null,ue:()=>n.datastore.serializer.databaseId}),vs(n).start(),n.bu.gu()}function hl(n){return Dn(n)&&!vs(n).Uo()&&n.Au.size>0}function Dn(n){return x(n).vu.size===0}function Jp(n){n.Vu=void 0}async function TT(n){n.Au.forEach((e,t)=>{ll(n,e)})}async function IT(n,e){Jp(n),hl(n)?(n.bu.Iu(e),ul(n)):n.bu.set("Unknown")}async function bT(n,e,t){if(n.bu.set("Online"),e instanceof Up&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Au.delete(o),s.Vu.removeTarget(o))}(n,e)}catch(s){S("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await jr(n,s)}else if(e instanceof gr?n.Vu.Ht(e):e instanceof $p?n.Vu.ne(e):n.Vu.Xt(e),!t.isEqual(P.min()))try{const s=await Kp(n.localStore);t.compareTo(s)>=0&&await function(i,r){const o=i.Vu.ce(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.Au.get(c);l&&i.Au.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,c)=>{const l=i.Au.get(a);if(!l)return;i.Au.set(a,l.withResumeToken(Te.EMPTY_BYTE_STRING,l.snapshotVersion)),Xp(i,a);const u=new Mt(l.target,a,c,l.sequenceNumber);ll(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){S("RemoteStore","Failed to raise snapshot:",s),await jr(n,s)}}async function jr(n,e,t){if(!Di(e))throw e;n.vu.add(1),await Oi(n),n.bu.set("Offline"),t||(t=()=>Kp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{S("RemoteStore","Retrying IndexedDB access"),await t(),n.vu.delete(1),await Co(n)})}function Zp(n,e){return e().catch(t=>jr(n,t,e))}async function No(n){const e=x(n),t=jt(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;AT(e);)try{const i=await lT(e.localStore,s);if(i===null){e.Eu.length===0&&t.jo();break}s=i.batchId,ST(e,i)}catch(i){await jr(e,i)}eg(e)&&tg(e)}function AT(n){return Dn(n)&&n.Eu.length<10}function ST(n,e){n.Eu.push(e);const t=jt(n);t.Ko()&&t.ou&&t.uu(e.mutations)}function eg(n){return Dn(n)&&!jt(n).Uo()&&n.Eu.length>0}function tg(n){jt(n).start()}async function CT(n){jt(n).hu()}async function NT(n){const e=jt(n);for(const t of n.Eu)e.uu(t.mutations)}async function DT(n,e,t){const s=n.Eu.shift(),i=nl.from(s,e,t);await Zp(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await No(n)}async function kT(n,e){e&&jt(n).ou&&await async function(t,s){if(i=s.code,ww(i)&&i!==p.ABORTED){const r=t.Eu.shift();jt(t).Qo(),await Zp(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,s)),await No(t)}var i}(n,e),eg(n)&&tg(n)}async function lh(n,e){const t=x(n);t.asyncQueue.verifyOperationInProgress(),S("RemoteStore","RemoteStore received new credentials");const s=Dn(t);t.vu.add(3),await Oi(t),s&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await Co(t)}async function RT(n,e){const t=x(n);e?(t.vu.delete(2),await Co(t)):e||(t.vu.add(2),await Oi(t),t.bu.set("Unknown"))}function vs(n){return n.Su||(n.Su=function(e,t,s){const i=x(e);return i.fu(),new _T(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{uo:TT.bind(null,n),ao:IT.bind(null,n),nu:bT.bind(null,n)}),n.Ru.push(async e=>{e?(n.Su.Qo(),hl(n)?ul(n):n.bu.set("Unknown")):(await n.Su.stop(),Jp(n))})),n.Su}function jt(n){return n.Du||(n.Du=function(e,t,s){const i=x(e);return i.fu(),new yT(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{uo:CT.bind(null,n),ao:kT.bind(null,n),au:NT.bind(null,n),cu:DT.bind(null,n)}),n.Ru.push(async e=>{e?(n.Du.Qo(),await No(n)):(await n.Du.stop(),n.Eu.length>0&&(S("RemoteStore",`Stopping write stream with ${n.Eu.length} pending writes`),n.Eu=[]))})),n.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,a=new dl(e,t,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fl(n,e){if(vt("AsyncQueue",`${e}: ${n}`),Di(n))return new w(p.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.comparator=e?(t,s)=>e(t,s)||D.comparator(t.key,s.key):(t,s)=>D.comparator(t.key,s.key),this.keyedMap=Fs(),this.sortedSet=new Q(this.comparator)}static emptySet(e){return new Gn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Gn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Gn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.Cu=new Q(D.comparator)}track(e){const t=e.doc.key,s=this.Cu.get(t);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(t):e.type===1&&s.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):O():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,s)=>{e.push(s)}),e}}class rs{constructor(e,t,s,i,r,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new rs(e,t,Gn.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(){this.Nu=void 0,this.listeners=[]}}class LT{constructor(){this.queries=new ys(e=>Ip(e),wo),this.onlineState="Unknown",this.ku=new Set}}async function ng(n,e){const t=x(n),s=e.query;let i=!1,r=t.queries.get(s);if(r||(i=!0,r=new OT),i)try{r.Nu=await t.onListen(s)}catch(o){const a=fl(o,`Initialization of query '${tc(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,r),r.listeners.push(e),e.Mu(t.onlineState),r.Nu&&e.$u(r.Nu)&&pl(t)}async function sg(n,e){const t=x(n),s=e.query;let i=!1;const r=t.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return t.queries.delete(s),t.onUnlisten(s)}function PT(n,e){const t=x(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.$u(i)&&(s=!0);o.Nu=i}}s&&pl(t)}function MT(n,e,t){const s=x(n),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(t);s.queries.delete(e)}function pl(n){n.ku.forEach(e=>{e.next()})}class ig{constructor(e,t,s){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new rs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e){this.key=e}}class og{constructor(e){this.key=e}}class xT{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=F(),this.mutatedKeys=F(),this.tc=bp(e),this.ec=new Gn(this.tc)}get nc(){return this.Yu}sc(e,t){const s=t?t.ic:new uh,i=t?t.ec:this.ec;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=To(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?g!==m&&(s.track({type:3,doc:f}),_=!0):this.rc(d,f)||(s.track({type:2,doc:f}),_=!0,(c&&this.tc(f,c)>0||l&&this.tc(f,l)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),_=!0):d&&!f&&(s.track({type:1,doc:d}),_=!0,(c||l)&&(a=!0)),_&&(f?(o=o.add(f),r=m?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:r}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const r=e.ic.xu();r.sort((l,u)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return f(h)-f(d)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(s);const o=t?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,r.length!==0||c?{snapshot:new rs(this.query,e.ec,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new uh,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=F(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const t=[];return e.forEach(s=>{this.Zu.has(s)||t.push(new og(s))}),this.Zu.forEach(s=>{e.has(s)||t.push(new rg(s))}),t}hc(e){this.Yu=e.ir,this.Zu=F();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return rs.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class $T{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class UT{constructor(e){this.key=e,this.fc=!1}}class FT{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new ys(a=>Ip(a),wo),this._c=new Map,this.mc=new Set,this.gc=new Q(D.comparator),this.yc=new Map,this.Ic=new ol,this.Tc={},this.Ec=new Map,this.Ac=is.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function VT(n,e){const t=QT(n);let s,i;const r=t.wc.get(e);if(r)s=r.targetId,t.sharedClientState.addLocalQueryTarget(s),i=r.view.lc();else{const o=await uT(t.localStore,Et(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await BT(t,e,s,a==="current",o.resumeToken),t.isPrimaryClient&&Yp(t.remoteStore,o)}return i}async function BT(n,e,t,s,i){n.Rc=(h,d,f)=>async function(g,m,_,C){let N=m.view.sc(_);N.zi&&(N=await oh(g.localStore,m.query,!1).then(({documents:k})=>m.view.sc(k,N)));const b=C&&C.targetChanges.get(m.targetId),E=m.view.applyChanges(N,g.isPrimaryClient,b);return dh(g,m.targetId,E.cc),E.snapshot}(n,h,d,f);const r=await oh(n.localStore,e,!0),o=new xT(e,r.ir),a=o.sc(r.documents),c=Ri.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,c);dh(n,t,l.cc);const u=new $T(e,t,o);return n.wc.set(e,u),n._c.has(t)?n._c.get(t).push(e):n._c.set(t,[e]),l.snapshot}async function jT(n,e){const t=x(n),s=t.wc.get(e),i=t._c.get(s.targetId);if(i.length>1)return t._c.set(s.targetId,i.filter(r=>!wo(r,e))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await oc(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),Qp(t.remoteStore,s.targetId),ac(t,s.targetId)}).catch(Ni)):(ac(t,s.targetId),await oc(t.localStore,s.targetId,!0))}async function HT(n,e,t){const s=XT(n);try{const i=await function(r,o){const a=x(r),c=re.now(),l=o.reduce((d,f)=>d.add(f.key),F());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=wt(),g=F();return a.Zi.getEntries(d,l).next(m=>{f=m,f.forEach((_,C)=>{C.isValidDocument()||(g=g.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(m=>{u=m;const _=[];for(const C of o){const N=mw(C,u.get(C.key).overlayedDocument);N!=null&&_.push(new Wt(C.key,N,mp(N.value.mapValue),ze.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,_,o)}).next(m=>{h=m;const _=m.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,m.batchId,_)})}).then(()=>({batchId:h.batchId,changes:Sp(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.Tc[r.currentUser.toKey()];c||(c=new Q(H)),c=c.insert(o,a),r.Tc[r.currentUser.toKey()]=c}(s,i.batchId,t),await Li(s,i.changes),await No(s.remoteStore)}catch(i){const r=fl(i,"Failed to persist write");t.reject(r)}}async function ag(n,e){const t=x(n);try{const s=await aT(t.localStore,e);e.targetChanges.forEach((i,r)=>{const o=t.yc.get(r);o&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?G(o.fc):i.removedDocuments.size>0&&(G(o.fc),o.fc=!1))}),await Li(t,s,e)}catch(s){await Ni(s)}}function hh(n,e,t){const s=x(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.wc.forEach((r,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=x(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&pl(a)}(s.eventManager,e),i.length&&s.dc.nu(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function qT(n,e,t){const s=x(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.yc.get(e),r=i&&i.key;if(r){let o=new Q(D.comparator);o=o.insert(r,me.newNoDocument(r,P.min()));const a=F().add(r),c=new Ao(P.min(),new Map,new Q(H),o,a);await ag(s,c),s.gc=s.gc.remove(r),s.yc.delete(e),gl(s)}else await oc(s.localStore,e,!1).then(()=>ac(s,e,t)).catch(Ni)}async function zT(n,e){const t=x(n),s=e.batch.batchId;try{const i=await oT(t.localStore,e);lg(t,s,null),cg(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Li(t,i)}catch(i){await Ni(i)}}async function KT(n,e,t){const s=x(n);try{const i=await function(r,o){const a=x(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(G(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);lg(s,e,t),cg(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Li(s,i)}catch(i){await Ni(i)}}function cg(n,e){(n.Ec.get(e)||[]).forEach(t=>{t.resolve()}),n.Ec.delete(e)}function lg(n,e,t){const s=x(n);let i=s.Tc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.Tc[s.currentUser.toKey()]=i}}function ac(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n._c.get(e))n.wc.delete(s),t&&n.dc.Pc(s,t);n._c.delete(e),n.isPrimaryClient&&n.Ic.Is(e).forEach(s=>{n.Ic.containsKey(s)||ug(n,s)})}function ug(n,e){n.mc.delete(e.path.canonicalString());const t=n.gc.get(e);t!==null&&(Qp(n.remoteStore,t),n.gc=n.gc.remove(e),n.yc.delete(t),gl(n))}function dh(n,e,t){for(const s of t)s instanceof rg?(n.Ic.addReference(s.key,e),WT(n,s)):s instanceof og?(S("SyncEngine","Document no longer in limbo: "+s.key),n.Ic.removeReference(s.key,e),n.Ic.containsKey(s.key)||ug(n,s.key)):O()}function WT(n,e){const t=e.key,s=t.path.canonicalString();n.gc.get(t)||n.mc.has(s)||(S("SyncEngine","New document in limbo: "+t),n.mc.add(s),gl(n))}function gl(n){for(;n.mc.size>0&&n.gc.size<n.maxConcurrentLimboResolutions;){const e=n.mc.values().next().value;n.mc.delete(e);const t=new D(z.fromString(e)),s=n.Ac.next();n.yc.set(s,new UT(t)),n.gc=n.gc.insert(t,s),Yp(n.remoteStore,new Mt(Et(Jc(t.path)),s,"TargetPurposeLimboResolution",Wc.ct))}}async function Li(n,e,t){const s=x(n),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,e,t).then(l=>{if((l||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=cl.Li(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.dc.nu(i),await async function(a,c){const l=x(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>v.forEach(c,h=>v.forEach(h.Fi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>v.forEach(h.Bi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Di(u))throw u;S("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ji.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);l.Ji=l.Ji.insert(h,g)}}}(s.localStore,r))}async function GT(n,e){const t=x(n);if(!t.currentUser.isEqual(e)){S("SyncEngine","User change. New user:",e.toKey());const s=await zp(t.localStore,e);t.currentUser=e,function(i,r){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new w(p.CANCELLED,r))})}),i.Ec.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Li(t,s.er)}}function YT(n,e){const t=x(n),s=t.yc.get(e);if(s&&s.fc)return F().add(s.key);{let i=F();const r=t._c.get(e);if(!r)return i;for(const o of r){const a=t.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function QT(n){const e=x(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ag.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qT.bind(null,e),e.dc.nu=PT.bind(null,e.eventManager),e.dc.Pc=MT.bind(null,e.eventManager),e}function XT(n){const e=x(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KT.bind(null,e),e}class fh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=So(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return rT(this.persistence,new sT,e.initialUser,this.serializer)}createPersistence(e){return new tT(al.zs,this.serializer)}createSharedClientState(e){return new dT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class JT{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=GT.bind(null,this.syncEngine),await RT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new LT}createDatastore(e){const t=So(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new mT(i));var i;return function(r,o,a,c){return new vT(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>hh(this.syncEngine,a,0),o=ch.D()?new ch:new fT,new wT(t,s,i,r,o);var t,s,i,r,o}createSyncEngine(e,t){return function(s,i,r,o,a,c,l){const u=new FT(s,i,r,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=x(e);S("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await Oi(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class hg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):vt("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,t,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=ge.UNAUTHENTICATED,this.clientId=fp.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{S("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(S("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=fl(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ma(n,e){n.asyncQueue.verifyOperationInProgress(),S("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await zp(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ph(n,e){n.asyncQueue.verifyOperationInProgress();const t=await tI(n);S("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(i=>lh(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>lh(e.remoteStore,r)),n._onlineComponents=e}function eI(n){return n.name==="FirebaseError"?n.code===p.FAILED_PRECONDITION||n.code===p.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function tI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){S("FirestoreClient","Using user provided OfflineComponentProvider");try{await ma(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!eI(t))throw t;Zn("Error using user provided cache. Falling back to memory cache: "+t),await ma(n,new fh)}}else S("FirestoreClient","Using default OfflineComponentProvider"),await ma(n,new fh);return n._offlineComponents}async function dg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(S("FirestoreClient","Using user provided OnlineComponentProvider"),await ph(n,n._uninitializedComponentsProvider._online)):(S("FirestoreClient","Using default OnlineComponentProvider"),await ph(n,new JT))),n._onlineComponents}function nI(n){return dg(n).then(e=>e.syncEngine)}async function fg(n){const e=await dg(n),t=e.eventManager;return t.onListen=VT.bind(null,e.syncEngine),t.onUnlisten=jT.bind(null,e.syncEngine),t}function sI(n,e,t={}){const s=new mt;return n.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new hg({next:h=>{r.enqueueAndForget(()=>sg(i,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new w(p.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new w(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new ig(Jc(o.path),l,{includeMetadataChanges:!0,Ku:!0});return ng(i,u)}(await fg(n),n.asyncQueue,e,t,s)),s.promise}function iI(n,e,t={}){const s=new mt;return n.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new hg({next:h=>{r.enqueueAndForget(()=>sg(i,u)),h.fromCache&&a.source==="server"?c.reject(new w(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new ig(o,l,{includeMetadataChanges:!0,Ku:!0});return ng(i,u)}(await fg(n),n.asyncQueue,e,t,s)),s.promise}/**
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
 */function pg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const gh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(n,e,t){if(!t)throw new w(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function rI(n,e,t,s){if(e===!0&&s===!0)throw new w(p.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function mh(n){if(!D.isDocumentKey(n))throw new w(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _h(n){if(D.isDocumentKey(n))throw new w(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Do(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":O()}function Tt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new w(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Do(n);throw new w(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function oI(n,e){if(e<=0)throw new w(p.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class yh{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new w(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new w(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pg((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new w(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new w(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new w(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,t.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,s}}class ko{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new w(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yh(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new NE;switch(t.type){case"firstParty":return new OE(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new w(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=gh.get(e);t&&(S("ComponentProvider","Removing Datastore"),gh.delete(e),t.terminate())}(this),Promise.resolve()}}function aI(n,e,t,s={}){var i;const r=(n=Tt(n,ko))._getSettings(),o=`${e}:${t}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Zn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=ge.MOCK_USER;else{a=rf(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new w(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ge(l)}n._authCredentials=new DE(new dp(a,c))}}/**
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
 */class ke{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ut(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ke(this.firestore,e,this._key)}}class St{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new St(this.firestore,e,this._query)}}class Ut extends St{constructor(e,t,s){super(e,t,Jc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new D(e))}withConverter(e){return new Ut(this.firestore,e,this._path)}}function ik(n,e,...t){if(n=ne(n),gg("collection","path",e),n instanceof ko){const s=z.fromString(e,...t);return _h(s),new Ut(n,null,s)}{if(!(n instanceof ke||n instanceof Ut))throw new w(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(z.fromString(e,...t));return _h(s),new Ut(n.firestore,null,s)}}function cI(n,e,...t){if(n=ne(n),arguments.length===1&&(e=fp.A()),gg("doc","path",e),n instanceof ko){const s=z.fromString(e,...t);return mh(s),new ke(n,null,new D(s))}{if(!(n instanceof ke||n instanceof Ut))throw new w(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(z.fromString(e,...t));return mh(s),new ke(n.firestore,n instanceof Ut?n.converter:null,new D(s))}}/**
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
 */class lI{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Wp(this,"async_queue_retry"),this.Xc=()=>{const t=ga();t&&S("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=ga();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=ga();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new mt;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Di(e))throw e;S("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw vt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Hc=!1,s))));return this.Gc=t,t}enqueueAfterDelay(e,t,s){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const i=dl.createAndSchedule(this,e,t,s,r=>this.na(r));return this.zc.push(i),i}Zc(){this.Wc&&O()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}class Es extends ko{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new lI,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||mg(this),this._firestoreClient.terminate()}}function rk(n,e){const t=typeof n=="object"?n:Ic(),s=typeof n=="string"?n:e||"(default)",i=to(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=tf("firestore");r&&aI(i,...r)}return i}function ml(n){return n._firestoreClient||mg(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function mg(n){var e,t,s;const i=n._freezeSettings(),r=function(o,a,c,l){return new qE(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,pg(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new ZT(n._authCredentials,n._appCheckCredentials,n._queue,r),((t=i.cache)===null||t===void 0?void 0:t._offlineComponentProvider)&&((s=i.cache)===null||s===void 0?void 0:s._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new os(Te.fromBase64String(e))}catch(t){throw new w(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new os(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ro{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new w(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _l{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new w(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new w(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=/^__.*__$/;class hI{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Wt(e,this.data,this.fieldMask,t,this.fieldTransforms):new ki(e,this.data,t,this.fieldTransforms)}}class _g{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Wt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function yg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class vl{constructor(e,t,s,i,r,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new vl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:s,la:!1});return i.fa(e),i}da(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:s,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Hr(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(yg(this.ca)&&uI.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class dI{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||So(e)}ya(e,t,s,i=!1){return new vl({ca:e,methodName:t,ga:s,path:_e.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oo(n){const e=n._freezeSettings(),t=So(n._databaseId);return new dI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function fI(n,e,t,s,i,r={}){const o=n.ya(r.merge||r.mergeFields?2:0,e,t,i);El("Data must be an object, but it was:",o,s);const a=Eg(s,o);let c,l;if(r.merge)c=new Le(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=cc(e,h,t);if(!o.contains(d))throw new w(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Tg(u,d)||u.push(d)}c=new Le(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new hI(new Ne(a),c,l)}class Lo extends _l{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Lo}}function pI(n,e,t,s){const i=n.ya(1,e,t);El("Data must be an object, but it was:",i,s);const r=[],o=Ne.empty();Cn(s,(c,l)=>{const u=wl(e,c,t);l=ne(l);const h=i.da(u);if(l instanceof Lo)r.push(u);else{const d=Pi(l,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Le(r);return new _g(o,a,i.fieldTransforms)}function gI(n,e,t,s,i,r){const o=n.ya(1,e,t),a=[cc(e,s,t)],c=[i];if(r.length%2!=0)throw new w(p.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(cc(e,r[d])),c.push(r[d+1]);const l=[],u=Ne.empty();for(let d=a.length-1;d>=0;--d)if(!Tg(l,a[d])){const f=a[d];let g=c[d];g=ne(g);const m=o.da(f);if(g instanceof Lo)l.push(f);else{const _=Pi(g,m);_!=null&&(l.push(f),u.set(f,_))}}const h=new Le(l);return new _g(u,h,o.fieldTransforms)}function vg(n,e,t,s=!1){return Pi(t,n.ya(s?4:3,e))}function Pi(n,e){if(wg(n=ne(n)))return El("Unsupported field value:",e,n),Eg(n,e);if(n instanceof _l)return function(t,s){if(!yg(s.ca))throw s._a(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(t,s){const i=[];let r=0;for(const o of t){let a=Pi(o,s.wa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(n,e)}return function(t,s){if((t=ne(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return uw(s.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=re.fromDate(t);return{timestampValue:Br(s.serializer,i)}}if(t instanceof re){const i=new re(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Br(s.serializer,i)}}if(t instanceof yl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof os)return{bytesValue:Fp(s.serializer,t._byteString)};if(t instanceof ke){const i=s.databaseId,r=t.firestore._databaseId;if(!r.isEqual(i))throw s._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:rl(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s._a(`Unsupported field value: ${Do(t)}`)}(n,e)}function Eg(n,e){const t={};return pp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cn(n,(s,i)=>{const r=Pi(i,e.ha(s));r!=null&&(t[s]=r)}),{mapValue:{fields:t}}}function wg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof re||n instanceof yl||n instanceof os||n instanceof ke||n instanceof _l)}function El(n,e,t){if(!wg(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=Do(t);throw s==="an object"?e._a(n+" a custom object"):e._a(n+" "+s)}}function cc(n,e,t){if((e=ne(e))instanceof Ro)return e._internalPath;if(typeof e=="string")return wl(n,e);throw Hr("Field path arguments must be of type string or ",n,!1,void 0,t)}const mI=new RegExp("[~\\*/\\[\\]]");function wl(n,e,t){if(e.search(mI)>=0)throw Hr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ro(...e.split("."))._internalPath}catch{throw Hr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Hr(n,e,t,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new w(p.INVALID_ARGUMENT,a+n+c)}function Tg(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Tl{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _I(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Il("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class _I extends Tl{data(){return super.data()}}function Il(n,e){return typeof e=="string"?wl(n,e):e instanceof Ro?e._internalPath:e._delegate._internalPath}/**
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
 */function yI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new w(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bl{}class Po extends bl{}function ok(n,e,...t){let s=[];e instanceof bl&&s.push(e),s=s.concat(t),function(i){const r=i.filter(a=>a instanceof Sl).length,o=i.filter(a=>a instanceof Al).length;if(r>1||r>0&&o>0)throw new w(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class Al extends Po{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Al(e,t,s)}_apply(e){const t=this._parse(e);return Ig(e._query,t),new St(e.firestore,e.converter,ec(e._query,t))}_parse(e){const t=Oo(e.firestore);return function(i,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new w(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Eh(u,l);const d=[];for(const f of u)d.push(vh(a,i,f));h={arrayValue:{values:d}}}else h=vh(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Eh(u,l),h=vg(o,r,u,l==="in"||l==="not-in");return te.create(c,l,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Sl extends bl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Sl(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:We.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)Ig(r,a),r=ec(r,a)}(e._query,t),new St(e.firestore,e.converter,ec(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cl extends Po{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Cl(e,t)}_apply(e){const t=function(s,i,r){if(s.startAt!==null)throw new w(p.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new w(p.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Wn(i,r);return function(a,c){if(Zc(a)===null){const l=Eo(a);l!==null&&bg(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new St(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new Nn(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function ak(n,e="asc"){const t=e,s=Il("orderBy",n);return Cl._create(s,t)}class Nl extends Po{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new Nl(e,t,s)}_apply(e){return new St(e.firestore,e.converter,Ur(e._query,this._limit,this._limitType))}}function ck(n){return oI("limit",n),Nl._create("limit",n,"F")}class Dl extends Po{constructor(e,t,s){super(),this.type=e,this._docOrFields=t,this._inclusive=s}static _create(e,t,s){return new Dl(e,t,s)}_apply(e){const t=vI(e,this.type,this._docOrFields,this._inclusive);return new St(e.firestore,e.converter,function(s,i){return new Nn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,t))}}function lk(...n){return Dl._create("startAfter",n,!1)}function vI(n,e,t,s){if(t[0]=ne(t[0]),t[0]instanceof Tl)return function(i,r,o,a,c){if(!a)throw new w(p.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of un(i))if(u.field.isKeyField())l.push($r(r,a.key));else{const h=a.data.field(u.field);if(vo(h))throw new w(p.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new w(p.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new ss(l,c)}(n._query,n.firestore._databaseId,e,t[0]._document,s);{const i=Oo(n.firestore);return function(r,o,a,c,l,u){const h=r.explicitOrderBy;if(l.length>h.length)throw new w(p.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const g=l[f];if(h[f].field.isKeyField()){if(typeof g!="string")throw new w(p.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!el(r)&&g.indexOf("/")!==-1)throw new w(p.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const m=r.path.child(z.fromString(g));if(!D.isDocumentKey(m))throw new w(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${m}' is not because it contains an odd number of segments.`);const _=new D(m);d.push($r(o,_))}else{const m=vg(a,c,g);d.push(m)}}return new ss(d,u)}(n._query,n.firestore._databaseId,i,e,t,s)}}function vh(n,e,t){if(typeof(t=ne(t))=="string"){if(t==="")throw new w(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!el(e)&&t.indexOf("/")!==-1)throw new w(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(z.fromString(t));if(!D.isDocumentKey(s))throw new w(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return $r(n,new D(s))}if(t instanceof ke)return $r(n,t._key);throw new w(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Do(t)}.`)}function Eh(n,e){if(!Array.isArray(n)||n.length===0)throw new w(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ig(n,e){if(e.isInequality()){const s=Eo(n),i=e.field;if(s!==null&&!s.isEqual(i))throw new w(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=Zc(n);r!==null&&bg(n,i,r)}const t=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new w(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new w(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function bg(n,e,t){if(!t.isEqual(e))throw new w(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class EI{convertValue(e,t="none"){switch(vn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw O()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Cn(e,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertGeoPoint(e){return new yl(ee(e.latitude),ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Gc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ui(e));default:return null}}convertTimestamp(e){const t=Bt(e);return new re(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=z.fromString(e);G(qp(s));const i=new hi(s.get(1),s.get(3)),r=new D(s.popFirst(5));return i.isEqual(t)||vt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */function wI(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}/**
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
 */class Bs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ag extends Tl{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Il("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class mr extends Ag{data(e={}){return super.data(e)}}class TI{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Bs(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new mr(this._firestore,this._userDataWriter,s.key,s,new Bs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new w(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new mr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Bs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new mr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Bs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:II(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function II(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}/**
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
 */function uk(n){n=Tt(n,ke);const e=Tt(n.firestore,Es);return sI(ml(e),n._key).then(t=>bI(e,n,t))}class Sg extends EI{constructor(e){super(),this.firestore=e}convertBytes(e){return new os(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,t)}}function hk(n){n=Tt(n,St);const e=Tt(n.firestore,Es),t=ml(e),s=new Sg(e);return yI(n._query),iI(t,n._query).then(i=>new TI(e,s,n,i))}function dk(n,e,t,...s){n=Tt(n,ke);const i=Tt(n.firestore,Es),r=Oo(i);let o;return o=typeof(e=ne(e))=="string"||e instanceof Ro?gI(r,"updateDoc",n._key,e,t,s):pI(r,"updateDoc",n._key,e),kl(i,[o.toMutation(n._key,ze.exists(!0))])}function fk(n){return kl(Tt(n.firestore,Es),[new tl(n._key,ze.none())])}function pk(n,e){const t=Tt(n.firestore,Es),s=cI(n),i=wI(n.converter,e);return kl(t,[fI(Oo(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,ze.exists(!1))]).then(()=>s)}function kl(n,e){return function(t,s){const i=new mt;return t.asyncQueue.enqueueAndForget(async()=>HT(await nI(t),s,i)),i.promise}(ml(n),e)}function bI(n,e,t){const s=t.docs.get(e._key),i=new Sg(n);return new Ag(n,i,e._key,s,new Bs(t.hasPendingWrites,t.fromCache),e.converter)}(function(n,e=!0){(function(t){_s=t})(An),mn(new Ft("firestore",(t,{instanceIdentifier:s,options:i})=>{const r=t.getProvider("app").getImmediate(),o=new Es(new kE(t.getProvider("auth-internal")),new PE(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new w(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hi(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),nt(Fu,"3.13.0",n),nt(Fu,"3.13.0","esm2017")})();var AI="firebase",SI="9.23.0";/**
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
 */nt(AI,SI,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="firebasestorage.googleapis.com",Ng="storageBucket",CI=2*60*1e3,NI=10*60*1e3,DI=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X extends lt{constructor(e,t,s=0){super(_a(e),`Firebase Storage: ${t} (${_a(e)})`);this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,X.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _a(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Y;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Y||(Y={}));function _a(n){return"storage/"+n}function Rl(){const n="An unknown error occurred, please check the error payload for server response.";return new X(Y.UNKNOWN,n)}function kI(n){return new X(Y.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function RI(n){return new X(Y.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function OI(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new X(Y.UNAUTHENTICATED,n)}function LI(){return new X(Y.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function PI(n){return new X(Y.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Dg(){return new X(Y.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kg(){return new X(Y.CANCELED,"User canceled the upload/download.")}function MI(n){return new X(Y.INVALID_URL,"Invalid URL '"+n+"'.")}function xI(n){return new X(Y.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function $I(){return new X(Y.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ng+"' property when initializing the app?")}function Rg(){return new X(Y.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function UI(){return new X(Y.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function FI(){return new X(Y.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function VI(n){return new X(Y.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function lc(n){return new X(Y.INVALID_ARGUMENT,n)}function Og(){return new X(Y.APP_DELETED,"The Firebase app was deleted.")}function BI(n){return new X(Y.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Gs(n,e){return new X(Y.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Rs(n){throw new X(Y.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=Pe.makeFromUrl(e,t)}catch{return new Pe(e,"")}if(s.path==="")return s;throw xI(e)}static makeFromUrl(e,t){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},m=t===Cg?"(?:storage.googleapis.com|storage.cloud.google.com)":t,_="([^?#]*)",C=new RegExp(`^https?://${m}/${i}/${_}`,"i"),b=[{regex:a,indices:c,postModify:r},{regex:f,indices:g,postModify:l},{regex:C,indices:{bucket:1,path:2},postModify:l}];for(let E=0;E<b.length;E++){const k=b[E],I=k.regex.exec(e);if(I){const A=I[k.indices.bucket];let U=I[k.indices.path];U||(U=""),s=new Pe(A,U),k.postModify(s);break}}if(s==null)throw MI(e);return s}}class jI{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(n,e,t){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(..._){l||(l=!0,e.apply(null,_))}function h(_){i=setTimeout(()=>{i=null,n(f,c())},_)}function d(){r&&clearTimeout(r)}function f(_,...C){if(l){d();return}if(_){d(),u.call(null,_,...C);return}if(c()||o){d(),u.call(null,_,...C);return}s<64&&(s*=2);let b;a===1?(a=2,b=0):b=(s+Math.random())*1e3,h(b)}let g=!1;function m(_){g||(g=!0,d(),!l&&(i!==null?(_||(a=2),clearTimeout(i),h(0)):_||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,m(!0)},t),m}function qI(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(n){return n!==void 0}function KI(n){return typeof n=="function"}function WI(n){return typeof n=="object"&&!Array.isArray(n)}function Mo(n){return typeof n=="string"||n instanceof String}function wh(n){return Ol()&&n instanceof Blob}function Ol(){return typeof Blob!="undefined"&&!ny()}function Th(n,e,t,s){if(s<e)throw lc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw lc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function Lg(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const i=e(s)+"="+e(n[s]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(hn||(hn={}));/**
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
 */function Pg(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,t,s,i,r,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new rr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===hn.NO_ERROR,c=r.getStatus();if(!a||Pg(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===hn.ABORT;s(!1,new rr(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new rr(l,r))})},t=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());zI(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=Rl();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?Og():kg();o(c)}else{const c=Dg();o(c)}};this.canceled_?t(!1,new rr(!1,null,!0)):this.backoffId_=HI(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class rr{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function YI(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function QI(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function XI(n,e){e&&(n["X-Firebase-GMPID"]=e)}function JI(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function ZI(n,e,t,s,i,r,o=!0){const a=Lg(n.urlParams),c=n.url+a,l=Object.assign({},n.headers);return XI(l,e),YI(l,t),QI(l,r),JI(l,s),new GI(c,n.method,l,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function tb(...n){const e=eb();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(Ol())return new Blob(n);throw new X(Y.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function nb(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function sb(n){if(typeof atob=="undefined")throw VI("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ya{constructor(e,t){this.data=e,this.contentType=t||null}}function ib(n,e){switch(n){case tt.RAW:return new ya(Mg(e));case tt.BASE64:case tt.BASE64URL:return new ya(xg(n,e));case tt.DATA_URL:return new ya(ob(e),ab(e))}throw Rl()}function Mg(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=n.charCodeAt(++t);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function rb(n){let e;try{e=decodeURIComponent(n)}catch{throw Gs(tt.DATA_URL,"Malformed data URL.")}return Mg(e)}function xg(n,e){switch(n){case tt.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw Gs(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case tt.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw Gs(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=sb(e)}catch(i){throw i.message.includes("polyfill")?i:Gs(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}class $g{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Gs(tt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=cb(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function ob(n){const e=new $g(n);return e.base64?xg(tt.BASE64,e.rest):rb(e.rest)}function ab(n){return new $g(n).contentType}function cb(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t){let s=0,i="";wh(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(wh(this.data_)){const s=this.data_,i=nb(s,e,t);return i===null?null:new kt(i)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new kt(s,!0)}}static getBlob(...e){if(Ol()){const t=e.map(s=>s instanceof kt?s.data_:s);return new kt(tb.apply(null,t))}else{const t=e.map(o=>Mo(o)?ib(tt.RAW,o).data:o.data_);let s=0;t.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new kt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(n){let e;try{e=JSON.parse(n)}catch{return null}return WI(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function ub(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function Fg(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(n,e){return e}class Ie{constructor(e,t,s,i){this.server=e,this.local=t||e,this.writable=!!s,this.xform=i||hb}}let or=null;function db(n){return!Mo(n)||n.length<2?n:Fg(n)}function Vg(){if(or)return or;const n=[];n.push(new Ie("bucket")),n.push(new Ie("generation")),n.push(new Ie("metageneration")),n.push(new Ie("name","fullPath",!0));function e(r,o){return db(o)}const t=new Ie("name");t.xform=e,n.push(t);function s(r,o){return o!==void 0?Number(o):o}const i=new Ie("size");return i.xform=s,n.push(i),n.push(new Ie("timeCreated")),n.push(new Ie("updated")),n.push(new Ie("md5Hash",null,!0)),n.push(new Ie("cacheControl",null,!0)),n.push(new Ie("contentDisposition",null,!0)),n.push(new Ie("contentEncoding",null,!0)),n.push(new Ie("contentLanguage",null,!0)),n.push(new Ie("contentType",null,!0)),n.push(new Ie("metadata","customMetadata",!0)),or=n,or}function fb(n,e){function t(){const s=n.bucket,i=n.fullPath,r=new Pe(s,i);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function pb(n,e,t){const s={};s.type="file";const i=t.length;for(let r=0;r<i;r++){const o=t[r];s[o.local]=o.xform(s,e[o.server])}return fb(s,n),s}function Bg(n,e,t){const s=Ug(e);return s===null?null:pb(n,s,t)}function gb(n,e,t,s){const i=Ug(e);if(i===null||!Mo(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(l=>{const u=n.bucket,h=n.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=Mi(d,t,s),g=Lg({alt:"media",token:l});return f+g})[0]}function jg(n,e){const t={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class ws{constructor(e,t,s,i){this.url=e,this.method=t,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n){if(!n)throw Rl()}function Ll(n,e){function t(s,i){const r=Bg(n,i,e);return _t(r!==null),r}return t}function mb(n,e){function t(s,i){const r=Bg(n,i,e);return _t(r!==null),gb(r,i,n.host,n._protocol)}return t}function xi(n){function e(t,s){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=LI():i=OI():t.getStatus()===402?i=RI(n.bucket):t.getStatus()===403?i=PI(n.path):i=s,i.status=t.getStatus(),i.serverResponse=s.serverResponse,i}return e}function Hg(n){const e=xi(n);function t(s,i){let r=e(s,i);return s.getStatus()===404&&(r=kI(n.path)),r.serverResponse=i.serverResponse,r}return t}function _b(n,e,t){const s=e.fullServerUrl(),i=Mi(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new ws(i,r,Ll(n,t),o);return a.errorHandler=Hg(e),a}function yb(n,e,t){const s=e.fullServerUrl(),i=Mi(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new ws(i,r,mb(n,t),o);return a.errorHandler=Hg(e),a}function vb(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function qg(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=vb(null,e)),s}function Eb(n,e,t,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let b="";for(let E=0;E<2;E++)b=b+Math.random().toString().slice(2);return b}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=qg(e,s,i),u=jg(l,t),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=kt.getBlob(h,s,d);if(f===null)throw Rg();const g={name:l.fullPath},m=Mi(r,n.host,n._protocol),_="POST",C=n.maxUploadRetryTime,N=new ws(m,_,Ll(n,t),C);return N.urlParams=g,N.headers=o,N.body=f.uploadData(),N.errorHandler=xi(e),N}class qr{constructor(e,t,s,i){this.current=e,this.total=t,this.finalized=!!s,this.metadata=i||null}}function Pl(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{_t(!1)}return _t(!!t&&(e||["active"]).indexOf(t)!==-1),t}function wb(n,e,t,s,i){const r=e.bucketOnlyServerUrl(),o=qg(e,s,i),a={name:o.fullPath},c=Mi(r,n.host,n._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=jg(o,t),d=n.maxUploadRetryTime;function f(m){Pl(m);let _;try{_=m.getResponseHeader("X-Goog-Upload-URL")}catch{_t(!1)}return _t(Mo(_)),_}const g=new ws(c,l,f,d);return g.urlParams=a,g.headers=u,g.body=h,g.errorHandler=xi(e),g}function Tb(n,e,t,s){const i={"X-Goog-Upload-Command":"query"};function r(l){const u=Pl(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{_t(!1)}h||_t(!1);const d=Number(h);return _t(!isNaN(d)),new qr(d,s.size(),u==="final")}const o="POST",a=n.maxUploadRetryTime,c=new ws(t,o,r,a);return c.headers=i,c.errorHandler=xi(e),c}const Ih=256*1024;function Ib(n,e,t,s,i,r,o,a){const c=new qr(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw UI();const l=c.total-c.current;let u=l;i>0&&(u=Math.min(u,i));const h=c.current,d=h+u;let f="";u===0?f="finalize":l===u?f="upload, finalize":f="upload";const g={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},m=s.slice(h,d);if(m===null)throw Rg();function _(E,k){const I=Pl(E,["active","final"]),A=c.current+u,U=s.size();let B;return I==="final"?B=Ll(e,r)(E,k):B=null,new qr(A,U,I==="final",B)}const C="POST",N=e.maxUploadRetryTime,b=new ws(t,C,_,N);return b.headers=g,b.body=m.uploadData(),b.progressCallback=a||null,b.errorHandler=xi(n),b}const Ce={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function va(n){switch(n){case"running":case"pausing":case"canceling":return Ce.RUNNING;case"paused":return Ce.PAUSED;case"success":return Ce.SUCCESS;case"canceled":return Ce.CANCELED;case"error":return Ce.ERROR;default:return Ce.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,t,s){if(KI(e)||t!=null||s!=null)this.next=e,this.error=t!=null?t:void 0,this.complete=s!=null?s:void 0;else{const r=e;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class Ab{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=hn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=hn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=hn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,i){if(this.sent_)throw Rs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Rs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Rs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Rs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Rs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Sb extends Ab{initXhr(){this.xhr_.responseType="text"}}function Vn(){return new Sb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,t,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=s,this._mappings=Vg(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Y.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const r=this.isExponentialBackoffExpired();if(Pg(i.status,[]))if(r)i=Dg();else{this.sleepTime=Math.max(this.sleepTime*2,DI),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Y.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,r)=>{this._resolve=i,this._reject=r,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,s])=>{switch(this._state){case"running":e(t,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const s=wb(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Vn,e,t);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,s)=>{const i=Tb(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(i,Vn,t,s);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Ih*this._chunkMultiplier,t=new qr(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,r)=>{let o;try{o=Ib(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Vn,i,r,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Ih*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const s=_b(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,Vn,e,t);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const s=Eb(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Vn,e,t);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=kg(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=va(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,s,i){const r=new bb(t||void 0,s||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(va(this._state)){case Ce.SUCCESS:Mn(this._resolve.bind(null,this.snapshot))();break;case Ce.CANCELED:case Ce.ERROR:const t=this._reject;Mn(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(va(this._state)){case Ce.RUNNING:case Ce.PAUSED:e.next&&Mn(e.next.bind(e,this.snapshot))();break;case Ce.SUCCESS:e.complete&&Mn(e.complete.bind(e))();break;case Ce.CANCELED:case Ce.ERROR:e.error&&Mn(e.error.bind(e,this._error))();break;default:e.error&&Mn(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class En{constructor(e,t){this._service=e,t instanceof Pe?this._location=t:this._location=Pe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new En(e,t)}get root(){const e=new Pe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Fg(this._location.path)}get storage(){return this._service}get parent(){const e=lb(this._location.path);if(e===null)return null;const t=new Pe(this._location.bucket,e);return new En(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw BI(e)}}function Nb(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new Cb(n,new kt(e),t)}function Db(n){n._throwIfRoot("getDownloadURL");const e=yb(n.storage,n._location,Vg());return n.storage.makeRequestWithTokens(e,Vn).then(t=>{if(t===null)throw FI();return t})}function kb(n,e){const t=ub(n._location.path,e),s=new Pe(n._location.bucket,t);return new En(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(n){return/^[A-Za-z]+:\/\//.test(n)}function Ob(n,e){return new En(n,e)}function zg(n,e){if(n instanceof Ml){const t=n;if(t._bucket==null)throw $I();const s=new En(t,t._bucket);return e!=null?zg(s,e):s}else return e!==void 0?kb(n,e):n}function Lb(n,e){if(e&&Rb(e)){if(n instanceof Ml)return Ob(n,e);throw lc("To use ref(service, url), the first argument must be a Storage instance.")}else return zg(n,e)}function bh(n,e){const t=e==null?void 0:e[Ng];return t==null?null:Pe.makeFromBucketSpec(t,n)}function Pb(n,e,t,s={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:rf(i,n.app.options.projectId))}class Ml{constructor(e,t,s,i,r){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Cg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CI,this._maxUploadRetryTime=NI,this._requests=new Set,i!=null?this._bucket=Pe.makeFromBucketSpec(i,this._host):this._bucket=bh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Pe.makeFromBucketSpec(this._url,e):this._bucket=bh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Th("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Th("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new En(this,e)}_makeRequest(e,t,s,i,r=!0){if(this._deleted)return new jI(Og());{const o=ZI(e,this._appId,s,i,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,i).getPromise()}}const Ah="@firebase/storage",Sh="0.11.2";/**
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
 */const Kg="storage";function gk(n,e,t){return n=ne(n),Nb(n,e,t)}function mk(n){return n=ne(n),Db(n)}function _k(n,e){return n=ne(n),Lb(n,e)}function yk(n=Ic(),e){n=ne(n);const s=to(n,Kg).getImmediate({identifier:e}),i=tf("storage");return i&&Mb(s,...i),s}function Mb(n,e,t,s={}){Pb(n,e,t,s)}function xb(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Ml(t,s,i,e,An)}function $b(){mn(new Ft(Kg,xb,"PUBLIC").setMultipleInstances(!0)),nt(Ah,Sh,""),nt(Ah,Sh,"esm2017")}$b();function xl(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function Wg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ub=Wg,Gg=new _i("auth","Firebase",Wg());/**
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
 */const zr=new wc("@firebase/auth");function Fb(n,...e){zr.logLevel<=j.WARN&&zr.warn(`Auth (${An}): ${n}`,...e)}function _r(n,...e){zr.logLevel<=j.ERROR&&zr.error(`Auth (${An}): ${n}`,...e)}/**
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
 */function It(n,...e){throw $l(n,...e)}function it(n,...e){return $l(n,...e)}function Vb(n,e,t){const s=Object.assign(Object.assign({},Ub()),{[e]:t});return new _i("auth","Firebase",s).create(e,{appName:n.name})}function $l(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Gg.create(n,...e)}function M(n,e,...t){if(!n)throw $l(e,...t)}function ft(n){const e="INTERNAL ASSERTION FAILED: "+n;throw _r(e),new Error(e)}function bt(n,e){n||ft(e)}/**
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
 */function uc(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Bb(){return Ch()==="http:"||Ch()==="https:"}function Ch(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function jb(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Bb()||sy()||"connection"in navigator)?navigator.onLine:!0}function Hb(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class $i{constructor(e,t){this.shortDelay=e,this.longDelay=t,bt(t>e,"Short delay should be less than long delay!"),this.isMobile=ty()||iy()}get(){return jb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ul(n,e){bt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Yg{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zb=new $i(3e4,6e4);function Qg(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ui(n,e,t,s,i={}){return Xg(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=yi(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Yg.fetch()(Jg(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Xg(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},qb),e);try{const i=new Wb(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ar(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ar(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ar(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ar(n,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Vb(n,u,l);It(n,u)}}catch(i){if(i instanceof lt)throw i;It(n,"network-request-failed",{message:String(i)})}}async function Kb(n,e,t,s,i={}){const r=await Ui(n,e,t,s,i);return"mfaPendingCredential"in r&&It(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Jg(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?Ul(n.config,i):`${n.config.apiScheme}://${i}`}class Wb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(it(this.auth,"network-request-failed")),zb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ar(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=it(n,e,s);return i.customData._tokenResponse=t,i}/**
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
 */async function Gb(n,e){return Ui(n,"POST","/v1/accounts:delete",e)}async function Yb(n,e){return Ui(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ys(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qb(n,e=!1){const t=ne(n),s=await t.getIdToken(e),i=Fl(s);M(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ys(Ea(i.auth_time)),issuedAtTime:Ys(Ea(i.iat)),expirationTime:Ys(Ea(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ea(n){return Number(n)*1e3}function Fl(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return _r("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zd(t);return i?JSON.parse(i):(_r("Failed to decode base64 JWT payload"),null)}catch(i){return _r("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Xb(n){const e=Fl(n);return M(e,"internal-error"),M(typeof e.exp!="undefined","internal-error"),M(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gi(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof lt&&Jb(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Jb({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Zb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ys(this.lastLoginAt),this.creationTime=Ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Kr(n){var e;const t=n.auth,s=await n.getIdToken(),i=await gi(n,Yb(t,{idToken:s}));M(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?nA(r.providerUserInfo):[],a=tA(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Zg(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function eA(n){const e=ne(n);await Kr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tA(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function nA(n){return n.map(e=>{var{providerId:t}=e,s=xl(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function sA(n,e){const t=await Xg(n,{},async()=>{const s=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=Jg(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Yg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken!="undefined","internal-error"),M(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Xb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await sA(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new mi;return s&&(M(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(M(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mi,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
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
 */function Nt(n,e){M(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class dn{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=xl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Zg(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await gi(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Qb(this,e)}reload(){return eA(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Kr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await gi(this,Gb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,c,l,u;const h=(s=t.displayName)!==null&&s!==void 0?s:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,m=(a=t.tenantId)!==null&&a!==void 0?a:void 0,_=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=t.createdAt)!==null&&l!==void 0?l:void 0,N=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:E,isAnonymous:k,providerData:I,stsTokenManager:A}=t;M(b&&A,e,"internal-error");const U=mi.fromJSON(this.name,A);M(typeof b=="string",e,"internal-error"),Nt(h,e.name),Nt(d,e.name),M(typeof E=="boolean",e,"internal-error"),M(typeof k=="boolean",e,"internal-error"),Nt(f,e.name),Nt(g,e.name),Nt(m,e.name),Nt(_,e.name),Nt(C,e.name),Nt(N,e.name);const B=new dn({uid:b,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:k,photoURL:g,phoneNumber:f,tenantId:m,stsTokenManager:U,createdAt:C,lastLoginAt:N});return I&&Array.isArray(I)&&(B.providerData=I.map(K=>Object.assign({},K))),_&&(B._redirectEventId=_),B}static async _fromIdTokenResponse(e,t,s=!1){const i=new mi;i.updateFromServerResponse(t);const r=new dn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Kr(r),r}}/**
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
 */const Nh=new Map;function pt(n){bt(n instanceof Function,"Expected a class definition");let e=Nh.get(n);return e?(bt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Nh.set(n,e),e)}/**
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
 */class em{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}em.type="NONE";const Dh=em;/**
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
 */function yr(n,e,t){return`firebase:${n}:${e}:${t}`}class Yn{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=yr(this.userKey,i.apiKey,r),this.fullPersistenceKey=yr("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Yn(pt(Dh),e,s);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||pt(Dh);const o=yr(s,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=dn._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Yn(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Yn(r,e,s))}}/**
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
 */function kh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rm(e))return"Blackberry";if(om(e))return"Webos";if(Vl(e))return"Safari";if((e.includes("chrome/")||nm(e))&&!e.includes("edge/"))return"Chrome";if(im(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function tm(n=we()){return/firefox\//i.test(n)}function Vl(n=we()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nm(n=we()){return/crios\//i.test(n)}function sm(n=we()){return/iemobile/i.test(n)}function im(n=we()){return/android/i.test(n)}function rm(n=we()){return/blackberry/i.test(n)}function om(n=we()){return/webos/i.test(n)}function xo(n=we()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function iA(n=we()){var e;return xo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rA(){return ry()&&document.documentMode===10}function am(n=we()){return xo(n)||im(n)||om(n)||rm(n)||/windows phone/i.test(n)||sm(n)}function oA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function cm(n,e=[]){let t;switch(n){case"Browser":t=kh(we());break;case"Worker":t=`${kh(we())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${An}/${s}`}async function lm(n,e){return Ui(n,"GET","/v2/recaptchaConfig",Qg(n,e))}function Rh(n){return n!==void 0&&n.enterprise!==void 0}class um{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function aA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function hm(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=it("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",aA().appendChild(s)})}function cA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const lA="https://www.google.com/recaptcha/enterprise.js?render=",uA="recaptcha-enterprise",hA="NO_RECAPTCHA";class dA{constructor(e){this.type=uA,this.auth=$o(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{lm(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new um(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;Rh(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(()=>{o(hA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!t&&Rh(window.grecaptcha))i(a,r,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}hm(lA+a).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
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
 */class fA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class pA{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oh(this),this.idTokenSubscription=new Oh(this),this.beforeStateQueue=new fA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pt(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Yn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Kr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ne(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(e))})}async initializeRecaptchaConfig(){const e=await lm(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new um(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new dA(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _i("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pt(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await Yn.create(this,[pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,s,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Fb(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function $o(n){return ne(n)}class Oh{constructor(e){this.auth=e,this.observer=null,this.addObserver=dy(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function gA(n,e){const t=to(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(Cr(r,e!=null?e:{}))return i;It(i,"already-initialized")}return t.initialize({options:e})}function mA(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(pt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function _A(n,e,t){const s=$o(n);M(s._canInitEmulator,s,"emulator-config-failed"),M(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),r=dm(e),{host:o,port:a}=yA(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||vA()}function dm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function yA(n){const e=dm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Lh(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Lh(o)}}}function Lh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function vA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class fm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,t){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}}/**
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
 */async function Qn(n,e){return Kb(n,"POST","/v1/accounts:signInWithIdp",Qg(n,e))}/**
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
 */const EA="http://localhost";class wn extends fm{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const t=new wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):It("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=xl(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new wn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Qn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Qn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qn(e,t)}buildRequest(){const e={requestUri:EA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yi(t)}return e}}/**
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
 */class pm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fi extends pm{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Rt extends Fi{constructor(){super("facebook.com")}static credential(e){return wn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
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
 */class Ot extends Fi{constructor(){super("google.com");this.addScope("profile")}static credential(e,t){return wn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ot.credential(t,s)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
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
 */class Lt extends Fi{constructor(){super("github.com")}static credential(e){return wn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.GITHUB_SIGN_IN_METHOD="github.com";Lt.PROVIDER_ID="github.com";/**
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
 */class Pt extends Fi{constructor(){super("twitter.com")}static credential(e,t){return wn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Pt.credential(t,s)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
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
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await dn._fromIdTokenResponse(e,s,i),o=Ph(s);return new as({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Ph(s);return new as({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Ph(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Wr extends lt{constructor(e,t,s,i){var r;super(t.code,t.message);this.operationType=s,this.user=i,Object.setPrototypeOf(this,Wr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Wr(e,t,s,i)}}function gm(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Wr._fromErrorAndOperation(n,r,e,s):r})}async function wA(n,e,t=!1){const s=await gi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return as._forOperation(n,"link",s)}/**
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
 */async function TA(n,e,t=!1){const{auth:s}=n,i="reauthenticate";try{const r=await gi(n,gm(s,i,e,n),t);M(r.idToken,s,"internal-error");const o=Fl(r.idToken);M(o,s,"internal-error");const{sub:a}=o;return M(n.uid===a,s,"user-mismatch"),as._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&It(s,"user-mismatch"),r}}/**
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
 */async function IA(n,e,t=!1){const s="signIn",i=await gm(n,s,e),r=await as._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}function bA(n,e,t,s){return ne(n).onIdTokenChanged(e,t,s)}function AA(n,e,t){return ne(n).beforeAuthStateChanged(e,t)}const Gr="__sak";/**
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
 */class mm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Gr,"1"),this.storage.removeItem(Gr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function SA(){const n=we();return Vl(n)||xo(n)}const CA=1e3,NA=10;class _m extends mm{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=SA()&&oA(),this.fallbackToPolling=am(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);rA()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,NA):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},CA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_m.type="LOCAL";const DA=_m;/**
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
 */class ym extends mm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ym.type="SESSION";const vm=ym;/**
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
 */function kA(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Uo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Uo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,r)),c=await kA(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uo.receivers=[];/**
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
 */function Bl(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class RA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Bl("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rt(){return window}function OA(n){rt().location.href=n}/**
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
 */function Em(){return typeof rt().WorkerGlobalScope!="undefined"&&typeof rt().importScripts=="function"}async function LA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function MA(){return Em()?self:null}/**
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
 */const wm="firebaseLocalStorageDb",xA=1,Yr="firebaseLocalStorage",Tm="fbase_key";class Vi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Fo(n,e){return n.transaction([Yr],e?"readwrite":"readonly").objectStore(Yr)}function $A(){const n=indexedDB.deleteDatabase(wm);return new Vi(n).toPromise()}function hc(){const n=indexedDB.open(wm,xA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Yr,{keyPath:Tm})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Yr)?e(s):(s.close(),await $A(),e(await hc()))})})}async function Mh(n,e,t){const s=Fo(n,!0).put({[Tm]:e,value:t});return new Vi(s).toPromise()}async function UA(n,e){const t=Fo(n,!1).get(e),s=await new Vi(t).toPromise();return s===void 0?null:s.value}function xh(n,e){const t=Fo(n,!0).delete(e);return new Vi(t).toPromise()}const FA=800,VA=3;class Im{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>VA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Em()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uo._getInstance(MA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await LA(),!this.activeServiceWorker)return;this.sender=new RA(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((t=s[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hc();return await Mh(e,Gr,"1"),await xh(e,Gr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Mh(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>UA(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>xh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Fo(i,!1).getAll();return new Vi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Im.type="LOCAL";const BA=Im;new $i(3e4,6e4);/**
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
 */function jA(n,e){return e?pt(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class jl extends fm{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Qn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function HA(n){return IA(n.auth,new jl(n),n.bypassAuthState)}function qA(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),TA(t,new jl(n),n.bypassAuthState)}async function zA(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),wA(t,new jl(n),n.bypassAuthState)}/**
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
 */class bm{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HA;case"linkViaPopup":case"linkViaRedirect":return zA;case"reauthViaPopup":case"reauthViaRedirect":return qA;default:It(this.auth,"internal-error")}}resolve(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const KA=new $i(2e3,1e4);class Hn extends bm{constructor(e,t,s,i,r){super(e,t,i,r);this.provider=s,this.authWindow=null,this.pollId=null,Hn.currentPopupAction&&Hn.currentPopupAction.cancel(),Hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const e=Bl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KA.get())};e()}}Hn.currentPopupAction=null;/**
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
 */const WA="pendingRedirect",vr=new Map;class GA extends bm{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s);this.eventId=null}async execute(){let e=vr.get(this.auth._key());if(!e){try{const s=await YA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}vr.set(this.auth._key(),e)}return this.bypassAuthState||vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YA(n,e){const t=JA(e),s=XA(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function QA(n,e){vr.set(n._key(),e)}function XA(n){return pt(n._redirectPersistence)}function JA(n){return yr(WA,n.config.apiKey,n.name)}async function ZA(n,e,t=!1){const s=$o(n),i=jA(s,e),o=await new GA(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const e0=10*60*1e3;class t0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!n0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Am(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(it(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=e0&&this.cachedEventUids.clear(),this.cachedEventUids.has($h(e))}saveEventToCache(e){this.cachedEventUids.add($h(e)),this.lastProcessedEventTime=Date.now()}}function $h(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Am({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function n0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Am(n);default:return!1}}/**
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
 */async function s0(n,e={}){return Ui(n,"GET","/v1/projects",e)}/**
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
 */const i0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,r0=/^https?/;async function o0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await s0(n);for(const t of e)try{if(a0(t))return}catch{}It(n,"unauthorized-domain")}function a0(n){const e=uc(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!r0.test(t))return!1;if(i0.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const c0=new $i(3e4,6e4);function Uh(){const n=rt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function l0(n){return new Promise((e,t)=>{var s,i,r;function o(){Uh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uh(),t(it(n,"network-request-failed"))},timeout:c0.get()})}if(!((i=(s=rt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=rt().gapi)===null||r===void 0)&&r.load)o();else{const a=cA("iframefcb");return rt()[a]=()=>{gapi.load?o():t(it(n,"network-request-failed"))},hm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Er=null,e})}let Er=null;function u0(n){return Er=Er||l0(n),Er}/**
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
 */const h0=new $i(5e3,15e3),d0="__/auth/iframe",f0="emulator/auth/iframe",p0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},g0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function m0(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ul(e,f0):`https://${n.config.authDomain}/${d0}`,s={apiKey:e.apiKey,appName:n.name,v:An},i=g0.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${yi(s).slice(1)}`}async function _0(n){const e=await u0(n),t=rt().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:m0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:p0,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=it(n,"network-request-failed"),a=rt().setTimeout(()=>{r(o)},h0.get());function c(){rt().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const y0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},v0=500,E0=600,w0="_blank",T0="http://localhost";class Fh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function I0(n,e,t,s=v0,i=E0){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},y0),{width:s.toString(),height:i.toString(),top:r,left:o}),l=we().toLowerCase();t&&(a=nm(l)?w0:t),tm(l)&&(e=e||T0,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(iA(l)&&a!=="_self")return b0(e||"",a),new Fh(null);const h=window.open(e||"",a,u);M(h,n,"popup-blocked");try{h.focus()}catch{}return new Fh(h)}function b0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const A0="__/auth/handler",S0="emulator/auth/handler",C0=encodeURIComponent("fac");async function Vh(n,e,t,s,i,r){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:An,eventId:i};if(e instanceof pm){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",hy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Fi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${C0}=${encodeURIComponent(c)}`:"";return`${N0(n)}?${yi(a).slice(1)}${l}`}function N0({config:n}){return n.emulator?Ul(n,S0):`https://${n.authDomain}/${A0}`}/**
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
 */const wa="webStorageSupport";class D0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vm,this._completeRedirectFn=ZA,this._overrideRedirectResult=QA}async _openPopup(e,t,s,i){var r;bt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Vh(e,t,s,uc(),i);return I0(e,o,Bl())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Vh(e,t,s,uc(),i);return OA(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(bt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await _0(e),s=new t0(e);return t.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(wa,{type:wa},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[wa];o!==void 0&&t(!!o),It(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=o0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return am()||Vl()||xo()}}const k0=D0;var Bh="@firebase/auth",jh="0.23.2";/**
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
 */class R0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function O0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function L0(n){mn(new Ft("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cm(n)},l=new pA(s,i,r,c);return mA(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),mn(new Ft("auth-internal",e=>{const t=$o(e.getProvider("auth").getImmediate());return(s=>new R0(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(Bh,jh,O0(n)),nt(Bh,jh,"esm2017")}/**
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
 */const P0=5*60,M0=sf("authIdTokenMaxAge")||P0;let Hh=null;const x0=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>M0)return;const i=t==null?void 0:t.token;Hh!==i&&(Hh=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vk(n=Ic()){const e=to(n,"auth");if(e.isInitialized())return e.getImmediate();const t=gA(n,{popupRedirectResolver:k0,persistence:[BA,DA,vm]}),s=sf("authTokenSyncURL");if(s){const r=x0(s);AA(t,r,()=>r(t.currentUser)),bA(t,o=>r(o))}const i=ef("auth");return i&&_A(t,`http://${i}`),t}L0("Browser");var Ae="top",xe="bottom",$e="right",Se="left",Vo="auto",Ts=[Ae,xe,$e,Se],Tn="start",cs="end",Sm="clippingParents",Hl="viewport",Bn="popper",Cm="reference",dc=Ts.reduce(function(n,e){return n.concat([e+"-"+Tn,e+"-"+cs])},[]),ql=[].concat(Ts,[Vo]).reduce(function(n,e){return n.concat([e,e+"-"+Tn,e+"-"+cs])},[]),Nm="beforeRead",Dm="read",km="afterRead",Rm="beforeMain",Om="main",Lm="afterMain",Pm="beforeWrite",Mm="write",xm="afterWrite",$m=[Nm,Dm,km,Rm,Om,Lm,Pm,Mm,xm];function ct(n){return n?(n.nodeName||"").toLowerCase():null}function Ge(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var e=n.ownerDocument;return e&&e.defaultView||window}return n}function ls(n){var e=Ge(n).Element;return n instanceof e||n instanceof Element}function Be(n){var e=Ge(n).HTMLElement;return n instanceof e||n instanceof HTMLElement}function zl(n){if(typeof ShadowRoot=="undefined")return!1;var e=Ge(n).ShadowRoot;return n instanceof e||n instanceof ShadowRoot}function $0(n){var e=n.state;Object.keys(e.elements).forEach(function(t){var s=e.styles[t]||{},i=e.attributes[t]||{},r=e.elements[t];!Be(r)||!ct(r)||(Object.assign(r.style,s),Object.keys(i).forEach(function(o){var a=i[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function U0(n){var e=n.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(s){var i=e.elements[s],r=e.attributes[s]||{},o=Object.keys(e.styles.hasOwnProperty(s)?e.styles[s]:t[s]),a=o.reduce(function(c,l){return c[l]="",c},{});!Be(i)||!ct(i)||(Object.assign(i.style,a),Object.keys(r).forEach(function(c){i.removeAttribute(c)}))})}}var Kl={name:"applyStyles",enabled:!0,phase:"write",fn:$0,effect:U0,requires:["computeStyles"]};function ot(n){return n.split("-")[0]}var fn=Math.max,Qr=Math.min,us=Math.round;function hs(n,e){e===void 0&&(e=!1);var t=n.getBoundingClientRect(),s=1,i=1;if(Be(n)&&e){var r=n.offsetHeight,o=n.offsetWidth;o>0&&(s=us(t.width)/o||1),r>0&&(i=us(t.height)/r||1)}return{width:t.width/s,height:t.height/i,top:t.top/i,right:t.right/s,bottom:t.bottom/i,left:t.left/s,x:t.left/s,y:t.top/i}}function Wl(n){var e=hs(n),t=n.offsetWidth,s=n.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-s)<=1&&(s=e.height),{x:n.offsetLeft,y:n.offsetTop,width:t,height:s}}function Um(n,e){var t=e.getRootNode&&e.getRootNode();if(n.contains(e))return!0;if(t&&zl(t)){var s=e;do{if(s&&n.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function At(n){return Ge(n).getComputedStyle(n)}function F0(n){return["table","td","th"].indexOf(ct(n))>=0}function Gt(n){return((ls(n)?n.ownerDocument:n.document)||window.document).documentElement}function Bo(n){return ct(n)==="html"?n:n.assignedSlot||n.parentNode||(zl(n)?n.host:null)||Gt(n)}function qh(n){return!Be(n)||At(n).position==="fixed"?null:n.offsetParent}function V0(n){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,t=navigator.userAgent.indexOf("Trident")!==-1;if(t&&Be(n)){var s=At(n);if(s.position==="fixed")return null}var i=Bo(n);for(zl(i)&&(i=i.host);Be(i)&&["html","body"].indexOf(ct(i))<0;){var r=At(i);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return i;i=i.parentNode}return null}function Bi(n){for(var e=Ge(n),t=qh(n);t&&F0(t)&&At(t).position==="static";)t=qh(t);return t&&(ct(t)==="html"||ct(t)==="body"&&At(t).position==="static")?e:t||V0(n)||e}function Gl(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Qs(n,e,t){return fn(n,Qr(e,t))}function B0(n,e,t){var s=Qs(n,e,t);return s>t?t:s}function Fm(){return{top:0,right:0,bottom:0,left:0}}function Vm(n){return Object.assign({},Fm(),n)}function Bm(n,e){return e.reduce(function(t,s){return t[s]=n,t},{})}var j0=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Vm(typeof e!="number"?e:Bm(e,Ts))};function H0(n){var e,t=n.state,s=n.name,i=n.options,r=t.elements.arrow,o=t.modifiersData.popperOffsets,a=ot(t.placement),c=Gl(a),l=[Se,$e].indexOf(a)>=0,u=l?"height":"width";if(!(!r||!o)){var h=j0(i.padding,t),d=Wl(r),f=c==="y"?Ae:Se,g=c==="y"?xe:$e,m=t.rects.reference[u]+t.rects.reference[c]-o[c]-t.rects.popper[u],_=o[c]-t.rects.reference[c],C=Bi(r),N=C?c==="y"?C.clientHeight||0:C.clientWidth||0:0,b=m/2-_/2,E=h[f],k=N-d[u]-h[g],I=N/2-d[u]/2+b,A=Qs(E,I,k),U=c;t.modifiersData[s]=(e={},e[U]=A,e.centerOffset=A-I,e)}}function q0(n){var e=n.state,t=n.options,s=t.element,i=s===void 0?"[data-popper-arrow]":s;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||!Um(e.elements.popper,i)||(e.elements.arrow=i))}var jm={name:"arrow",enabled:!0,phase:"main",fn:H0,effect:q0,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ds(n){return n.split("-")[1]}var z0={top:"auto",right:"auto",bottom:"auto",left:"auto"};function K0(n){var e=n.x,t=n.y,s=window,i=s.devicePixelRatio||1;return{x:us(e*i)/i||0,y:us(t*i)/i||0}}function zh(n){var e,t=n.popper,s=n.popperRect,i=n.placement,r=n.variation,o=n.offsets,a=n.position,c=n.gpuAcceleration,l=n.adaptive,u=n.roundOffsets,h=n.isFixed,d=o.x,f=d===void 0?0:d,g=o.y,m=g===void 0?0:g,_=typeof u=="function"?u({x:f,y:m}):{x:f,y:m};f=_.x,m=_.y;var C=o.hasOwnProperty("x"),N=o.hasOwnProperty("y"),b=Se,E=Ae,k=window;if(l){var I=Bi(t),A="clientHeight",U="clientWidth";if(I===Ge(t)&&(I=Gt(t),At(I).position!=="static"&&a==="absolute"&&(A="scrollHeight",U="scrollWidth")),I=I,i===Ae||(i===Se||i===$e)&&r===cs){E=xe;var B=h&&I===k&&k.visualViewport?k.visualViewport.height:I[A];m-=B-s.height,m*=c?1:-1}if(i===Se||(i===Ae||i===xe)&&r===cs){b=$e;var K=h&&I===k&&k.visualViewport?k.visualViewport.width:I[U];f-=K-s.width,f*=c?1:-1}}var se=Object.assign({position:a},l&&z0),Re=u===!0?K0({x:f,y:m}):{x:f,y:m};if(f=Re.x,m=Re.y,c){var ie;return Object.assign({},se,(ie={},ie[E]=N?"0":"",ie[b]=C?"0":"",ie.transform=(k.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",ie))}return Object.assign({},se,(e={},e[E]=N?m+"px":"",e[b]=C?f+"px":"",e.transform="",e))}function W0(n){var e=n.state,t=n.options,s=t.gpuAcceleration,i=s===void 0?!0:s,r=t.adaptive,o=r===void 0?!0:r,a=t.roundOffsets,c=a===void 0?!0:a,l={placement:ot(e.placement),variation:ds(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,zh(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,zh(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var Yl={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:W0,data:{}},cr={passive:!0};function G0(n){var e=n.state,t=n.instance,s=n.options,i=s.scroll,r=i===void 0?!0:i,o=s.resize,a=o===void 0?!0:o,c=Ge(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&l.forEach(function(u){u.addEventListener("scroll",t.update,cr)}),a&&c.addEventListener("resize",t.update,cr),function(){r&&l.forEach(function(u){u.removeEventListener("scroll",t.update,cr)}),a&&c.removeEventListener("resize",t.update,cr)}}var Ql={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:G0,data:{}},Y0={left:"right",right:"left",bottom:"top",top:"bottom"};function wr(n){return n.replace(/left|right|bottom|top/g,function(e){return Y0[e]})}var Q0={start:"end",end:"start"};function Kh(n){return n.replace(/start|end/g,function(e){return Q0[e]})}function Xl(n){var e=Ge(n),t=e.pageXOffset,s=e.pageYOffset;return{scrollLeft:t,scrollTop:s}}function Jl(n){return hs(Gt(n)).left+Xl(n).scrollLeft}function X0(n){var e=Ge(n),t=Gt(n),s=e.visualViewport,i=t.clientWidth,r=t.clientHeight,o=0,a=0;return s&&(i=s.width,r=s.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=s.offsetLeft,a=s.offsetTop)),{width:i,height:r,x:o+Jl(n),y:a}}function J0(n){var e,t=Gt(n),s=Xl(n),i=(e=n.ownerDocument)==null?void 0:e.body,r=fn(t.scrollWidth,t.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=fn(t.scrollHeight,t.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-s.scrollLeft+Jl(n),c=-s.scrollTop;return At(i||t).direction==="rtl"&&(a+=fn(t.clientWidth,i?i.clientWidth:0)-r),{width:r,height:o,x:a,y:c}}function Zl(n){var e=At(n),t=e.overflow,s=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+i+s)}function Hm(n){return["html","body","#document"].indexOf(ct(n))>=0?n.ownerDocument.body:Be(n)&&Zl(n)?n:Hm(Bo(n))}function Xs(n,e){var t;e===void 0&&(e=[]);var s=Hm(n),i=s===((t=n.ownerDocument)==null?void 0:t.body),r=Ge(s),o=i?[r].concat(r.visualViewport||[],Zl(s)?s:[]):s,a=e.concat(o);return i?a:a.concat(Xs(Bo(o)))}function fc(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function Z0(n){var e=hs(n);return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function Wh(n,e){return e===Hl?fc(X0(n)):ls(e)?Z0(e):fc(J0(Gt(n)))}function eS(n){var e=Xs(Bo(n)),t=["absolute","fixed"].indexOf(At(n).position)>=0,s=t&&Be(n)?Bi(n):n;return ls(s)?e.filter(function(i){return ls(i)&&Um(i,s)&&ct(i)!=="body"}):[]}function tS(n,e,t){var s=e==="clippingParents"?eS(n):[].concat(e),i=[].concat(s,[t]),r=i[0],o=i.reduce(function(a,c){var l=Wh(n,c);return a.top=fn(l.top,a.top),a.right=Qr(l.right,a.right),a.bottom=Qr(l.bottom,a.bottom),a.left=fn(l.left,a.left),a},Wh(n,r));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function qm(n){var e=n.reference,t=n.element,s=n.placement,i=s?ot(s):null,r=s?ds(s):null,o=e.x+e.width/2-t.width/2,a=e.y+e.height/2-t.height/2,c;switch(i){case Ae:c={x:o,y:e.y-t.height};break;case xe:c={x:o,y:e.y+e.height};break;case $e:c={x:e.x+e.width,y:a};break;case Se:c={x:e.x-t.width,y:a};break;default:c={x:e.x,y:e.y}}var l=i?Gl(i):null;if(l!=null){var u=l==="y"?"height":"width";switch(r){case Tn:c[l]=c[l]-(e[u]/2-t[u]/2);break;case cs:c[l]=c[l]+(e[u]/2-t[u]/2);break}}return c}function fs(n,e){e===void 0&&(e={});var t=e,s=t.placement,i=s===void 0?n.placement:s,r=t.boundary,o=r===void 0?Sm:r,a=t.rootBoundary,c=a===void 0?Hl:a,l=t.elementContext,u=l===void 0?Bn:l,h=t.altBoundary,d=h===void 0?!1:h,f=t.padding,g=f===void 0?0:f,m=Vm(typeof g!="number"?g:Bm(g,Ts)),_=u===Bn?Cm:Bn,C=n.rects.popper,N=n.elements[d?_:u],b=tS(ls(N)?N:N.contextElement||Gt(n.elements.popper),o,c),E=hs(n.elements.reference),k=qm({reference:E,element:C,strategy:"absolute",placement:i}),I=fc(Object.assign({},C,k)),A=u===Bn?I:E,U={top:b.top-A.top+m.top,bottom:A.bottom-b.bottom+m.bottom,left:b.left-A.left+m.left,right:A.right-b.right+m.right},B=n.modifiersData.offset;if(u===Bn&&B){var K=B[i];Object.keys(U).forEach(function(se){var Re=[$e,xe].indexOf(se)>=0?1:-1,ie=[Ae,xe].indexOf(se)>=0?"y":"x";U[se]+=K[ie]*Re})}return U}function nS(n,e){e===void 0&&(e={});var t=e,s=t.placement,i=t.boundary,r=t.rootBoundary,o=t.padding,a=t.flipVariations,c=t.allowedAutoPlacements,l=c===void 0?ql:c,u=ds(s),h=u?a?dc:dc.filter(function(g){return ds(g)===u}):Ts,d=h.filter(function(g){return l.indexOf(g)>=0});d.length===0&&(d=h);var f=d.reduce(function(g,m){return g[m]=fs(n,{placement:m,boundary:i,rootBoundary:r,padding:o})[ot(m)],g},{});return Object.keys(f).sort(function(g,m){return f[g]-f[m]})}function sS(n){if(ot(n)===Vo)return[];var e=wr(n);return[Kh(n),e,Kh(e)]}function iS(n){var e=n.state,t=n.options,s=n.name;if(!e.modifiersData[s]._skip){for(var i=t.mainAxis,r=i===void 0?!0:i,o=t.altAxis,a=o===void 0?!0:o,c=t.fallbackPlacements,l=t.padding,u=t.boundary,h=t.rootBoundary,d=t.altBoundary,f=t.flipVariations,g=f===void 0?!0:f,m=t.allowedAutoPlacements,_=e.options.placement,C=ot(_),N=C===_,b=c||(N||!g?[wr(_)]:sS(_)),E=[_].concat(b).reduce(function(On,Ct){return On.concat(ot(Ct)===Vo?nS(e,{placement:Ct,boundary:u,rootBoundary:h,padding:l,flipVariations:g,allowedAutoPlacements:m}):Ct)},[]),k=e.rects.reference,I=e.rects.popper,A=new Map,U=!0,B=E[0],K=0;K<E.length;K++){var se=E[K],Re=ot(se),ie=ds(se)===Tn,oe=[Ae,xe].indexOf(Re)>=0,As=oe?"width":"height",Oe=fs(e,{placement:se,boundary:u,rootBoundary:h,altBoundary:d,padding:l}),qe=oe?ie?$e:Se:ie?xe:Ae;k[As]>I[As]&&(qe=wr(qe));var zi=wr(qe),Qt=[];if(r&&Qt.push(Oe[Re]<=0),a&&Qt.push(Oe[qe]<=0,Oe[zi]<=0),Qt.every(function(On){return On})){B=se,U=!1;break}A.set(se,Qt)}if(U)for(var Ki=g?3:1,Qo=function(Ct){var Cs=E.find(function(Gi){var Xt=A.get(Gi);if(Xt)return Xt.slice(0,Ct).every(function(Xo){return Xo})});if(Cs)return B=Cs,"break"},Ss=Ki;Ss>0;Ss--){var Wi=Qo(Ss);if(Wi==="break")break}e.placement!==B&&(e.modifiersData[s]._skip=!0,e.placement=B,e.reset=!0)}}var zm={name:"flip",enabled:!0,phase:"main",fn:iS,requiresIfExists:["offset"],data:{_skip:!1}};function Gh(n,e,t){return t===void 0&&(t={x:0,y:0}),{top:n.top-e.height-t.y,right:n.right-e.width+t.x,bottom:n.bottom-e.height+t.y,left:n.left-e.width-t.x}}function Yh(n){return[Ae,$e,xe,Se].some(function(e){return n[e]>=0})}function rS(n){var e=n.state,t=n.name,s=e.rects.reference,i=e.rects.popper,r=e.modifiersData.preventOverflow,o=fs(e,{elementContext:"reference"}),a=fs(e,{altBoundary:!0}),c=Gh(o,s),l=Gh(a,i,r),u=Yh(c),h=Yh(l);e.modifiersData[t]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}var Km={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:rS};function oS(n,e,t){var s=ot(n),i=[Se,Ae].indexOf(s)>=0?-1:1,r=typeof t=="function"?t(Object.assign({},e,{placement:n})):t,o=r[0],a=r[1];return o=o||0,a=(a||0)*i,[Se,$e].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function aS(n){var e=n.state,t=n.options,s=n.name,i=t.offset,r=i===void 0?[0,0]:i,o=ql.reduce(function(u,h){return u[h]=oS(h,e.rects,r),u},{}),a=o[e.placement],c=a.x,l=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[s]=o}var Wm={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:aS};function cS(n){var e=n.state,t=n.name;e.modifiersData[t]=qm({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var eu={name:"popperOffsets",enabled:!0,phase:"read",fn:cS,data:{}};function lS(n){return n==="x"?"y":"x"}function uS(n){var e=n.state,t=n.options,s=n.name,i=t.mainAxis,r=i===void 0?!0:i,o=t.altAxis,a=o===void 0?!1:o,c=t.boundary,l=t.rootBoundary,u=t.altBoundary,h=t.padding,d=t.tether,f=d===void 0?!0:d,g=t.tetherOffset,m=g===void 0?0:g,_=fs(e,{boundary:c,rootBoundary:l,padding:h,altBoundary:u}),C=ot(e.placement),N=ds(e.placement),b=!N,E=Gl(C),k=lS(E),I=e.modifiersData.popperOffsets,A=e.rects.reference,U=e.rects.popper,B=typeof m=="function"?m(Object.assign({},e.rects,{placement:e.placement})):m,K=typeof B=="number"?{mainAxis:B,altAxis:B}:Object.assign({mainAxis:0,altAxis:0},B),se=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Re={x:0,y:0};if(!!I){if(r){var ie,oe=E==="y"?Ae:Se,As=E==="y"?xe:$e,Oe=E==="y"?"height":"width",qe=I[E],zi=qe+_[oe],Qt=qe-_[As],Ki=f?-U[Oe]/2:0,Qo=N===Tn?A[Oe]:U[Oe],Ss=N===Tn?-U[Oe]:-A[Oe],Wi=e.elements.arrow,On=f&&Wi?Wl(Wi):{width:0,height:0},Ct=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Fm(),Cs=Ct[oe],Gi=Ct[As],Xt=Qs(0,A[Oe],On[Oe]),Xo=b?A[Oe]/2-Ki-Xt-Cs-K.mainAxis:Qo-Xt-Cs-K.mainAxis,I_=b?-A[Oe]/2+Ki+Xt+Gi+K.mainAxis:Ss+Xt+Gi+K.mainAxis,Jo=e.elements.arrow&&Bi(e.elements.arrow),b_=Jo?E==="y"?Jo.clientTop||0:Jo.clientLeft||0:0,ru=(ie=se==null?void 0:se[E])!=null?ie:0,A_=qe+Xo-ru-b_,S_=qe+I_-ru,ou=Qs(f?Qr(zi,A_):zi,qe,f?fn(Qt,S_):Qt);I[E]=ou,Re[E]=ou-qe}if(a){var au,C_=E==="x"?Ae:Se,N_=E==="x"?xe:$e,Jt=I[k],Yi=k==="y"?"height":"width",cu=Jt+_[C_],lu=Jt-_[N_],Zo=[Ae,Se].indexOf(C)!==-1,uu=(au=se==null?void 0:se[k])!=null?au:0,hu=Zo?cu:Jt-A[Yi]-U[Yi]-uu+K.altAxis,du=Zo?Jt+A[Yi]+U[Yi]-uu-K.altAxis:lu,fu=f&&Zo?B0(hu,Jt,du):Qs(f?hu:cu,Jt,f?du:lu);I[k]=fu,Re[k]=fu-Jt}e.modifiersData[s]=Re}}var Gm={name:"preventOverflow",enabled:!0,phase:"main",fn:uS,requiresIfExists:["offset"]};function hS(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function dS(n){return n===Ge(n)||!Be(n)?Xl(n):hS(n)}function fS(n){var e=n.getBoundingClientRect(),t=us(e.width)/n.offsetWidth||1,s=us(e.height)/n.offsetHeight||1;return t!==1||s!==1}function pS(n,e,t){t===void 0&&(t=!1);var s=Be(e),i=Be(e)&&fS(e),r=Gt(e),o=hs(n,i),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(s||!s&&!t)&&((ct(e)!=="body"||Zl(r))&&(a=dS(e)),Be(e)?(c=hs(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):r&&(c.x=Jl(r))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function gS(n){var e=new Map,t=new Set,s=[];n.forEach(function(r){e.set(r.name,r)});function i(r){t.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!t.has(a)){var c=e.get(a);c&&i(c)}}),s.push(r)}return n.forEach(function(r){t.has(r.name)||i(r)}),s}function mS(n){var e=gS(n);return $m.reduce(function(t,s){return t.concat(e.filter(function(i){return i.phase===s}))},[])}function _S(n){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(n())})})),e}}function yS(n){var e=n.reduce(function(t,s){var i=t[s.name];return t[s.name]=i?Object.assign({},i,s,{options:Object.assign({},i.options,s.options),data:Object.assign({},i.data,s.data)}):s,t},{});return Object.keys(e).map(function(t){return e[t]})}var Qh={placement:"bottom",modifiers:[],strategy:"absolute"};function Xh(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return!e.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function jo(n){n===void 0&&(n={});var e=n,t=e.defaultModifiers,s=t===void 0?[]:t,i=e.defaultOptions,r=i===void 0?Qh:i;return function(a,c,l){l===void 0&&(l=r);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Qh,r),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},h=[],d=!1,f={state:u,setOptions:function(C){var N=typeof C=="function"?C(u.options):C;m(),u.options=Object.assign({},r,u.options,N),u.scrollParents={reference:ls(a)?Xs(a):a.contextElement?Xs(a.contextElement):[],popper:Xs(c)};var b=mS(yS([].concat(s,u.options.modifiers)));return u.orderedModifiers=b.filter(function(E){return E.enabled}),g(),f.update()},forceUpdate:function(){if(!d){var C=u.elements,N=C.reference,b=C.popper;if(!!Xh(N,b)){u.rects={reference:pS(N,Bi(b),u.options.strategy==="fixed"),popper:Wl(b)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(K){return u.modifiersData[K.name]=Object.assign({},K.data)});for(var E=0;E<u.orderedModifiers.length;E++){if(u.reset===!0){u.reset=!1,E=-1;continue}var k=u.orderedModifiers[E],I=k.fn,A=k.options,U=A===void 0?{}:A,B=k.name;typeof I=="function"&&(u=I({state:u,options:U,name:B,instance:f})||u)}}}},update:_S(function(){return new Promise(function(_){f.forceUpdate(),_(u)})}),destroy:function(){m(),d=!0}};if(!Xh(a,c))return f;f.setOptions(l).then(function(_){!d&&l.onFirstUpdate&&l.onFirstUpdate(_)});function g(){u.orderedModifiers.forEach(function(_){var C=_.name,N=_.options,b=N===void 0?{}:N,E=_.effect;if(typeof E=="function"){var k=E({state:u,name:C,instance:f,options:b}),I=function(){};h.push(k||I)}})}function m(){h.forEach(function(_){return _()}),h=[]}return f}}var vS=jo(),ES=[Ql,eu,Yl,Kl],wS=jo({defaultModifiers:ES}),TS=[Ql,eu,Yl,Kl,Wm,zm,Gm,jm,Km],tu=jo({defaultModifiers:TS}),Ym=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:jo,detectOverflow:fs,createPopperBase:vS,createPopper:tu,createPopperLite:wS,top:Ae,bottom:xe,right:$e,left:Se,auto:Vo,basePlacements:Ts,start:Tn,end:cs,clippingParents:Sm,viewport:Hl,popper:Bn,reference:Cm,variationPlacements:dc,placements:ql,beforeRead:Nm,read:Dm,afterRead:km,beforeMain:Rm,main:Om,afterMain:Lm,beforeWrite:Pm,write:Mm,afterWrite:xm,modifierPhases:$m,applyStyles:Kl,arrow:jm,computeStyles:Yl,eventListeners:Ql,flip:zm,hide:Km,offset:Wm,popperOffsets:eu,preventOverflow:Gm},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const IS=1e6,bS=1e3,pc="transitionend",AS=n=>n==null?`${n}`:{}.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),SS=n=>{do n+=Math.floor(Math.random()*IS);while(document.getElementById(n));return n},Qm=n=>{let e=n.getAttribute("data-bs-target");if(!e||e==="#"){let t=n.getAttribute("href");if(!t||!t.includes("#")&&!t.startsWith("."))return null;t.includes("#")&&!t.startsWith("#")&&(t=`#${t.split("#")[1]}`),e=t&&t!=="#"?t.trim():null}return e},nu=n=>{const e=Qm(n);return e&&document.querySelector(e)?e:null},Ht=n=>{const e=Qm(n);return e?document.querySelector(e):null},CS=n=>{if(!n)return 0;let{transitionDuration:e,transitionDelay:t}=window.getComputedStyle(n);const s=Number.parseFloat(e),i=Number.parseFloat(t);return!s&&!i?0:(e=e.split(",")[0],t=t.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(t))*bS)},Xm=n=>{n.dispatchEvent(new Event(pc))},In=n=>!n||typeof n!="object"?!1:(typeof n.jquery!="undefined"&&(n=n[0]),typeof n.nodeType!="undefined"),qt=n=>In(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(n):null,ut=(n,e,t)=>{Object.keys(t).forEach(s=>{const i=t[s],r=e[s],o=r&&In(r)?"element":AS(r);if(!new RegExp(i).test(o))throw new TypeError(`${n.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${i}".`)})},ji=n=>!In(n)||n.getClientRects().length===0?!1:getComputedStyle(n).getPropertyValue("visibility")==="visible",pn=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled!="undefined"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",Jm=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const e=n.getRootNode();return e instanceof ShadowRoot?e:null}return n instanceof ShadowRoot?n:n.parentNode?Jm(n.parentNode):null},Xr=()=>{},Is=n=>{n.offsetHeight},Zm=()=>{const{jQuery:n}=window;return n&&!document.body.hasAttribute("data-bs-no-jquery")?n:null},Ta=[],NS=n=>{document.readyState==="loading"?(Ta.length||document.addEventListener("DOMContentLoaded",()=>{Ta.forEach(e=>e())}),Ta.push(n)):n()},De=()=>document.documentElement.dir==="rtl",je=n=>{NS(()=>{const e=Zm();if(e){const t=n.NAME,s=e.fn[t];e.fn[t]=n.jQueryInterface,e.fn[t].Constructor=n,e.fn[t].noConflict=()=>(e.fn[t]=s,n.jQueryInterface)}})},rn=n=>{typeof n=="function"&&n()},e_=(n,e,t=!0)=>{if(!t){rn(n);return}const s=5,i=CS(e)+s;let r=!1;const o=({target:a})=>{a===e&&(r=!0,e.removeEventListener(pc,o),rn(n))};e.addEventListener(pc,o),setTimeout(()=>{r||Xm(e)},i)},t_=(n,e,t,s)=>{let i=n.indexOf(e);if(i===-1)return n[!t&&s?n.length-1:0];const r=n.length;return i+=t?1:-1,s&&(i=(i+r)%r),n[Math.max(0,Math.min(i,r-1))]},DS=/[^.]*(?=\..*)\.|.*/,kS=/\..*/,RS=/::\d+$/,Ia={};let Jh=1;const OS={mouseenter:"mouseover",mouseleave:"mouseout"},LS=/^(mouseenter|mouseleave)/i,n_=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function s_(n,e){return e&&`${e}::${Jh++}`||n.uidEvent||Jh++}function i_(n){const e=s_(n);return n.uidEvent=e,Ia[e]=Ia[e]||{},Ia[e]}function PS(n,e){return function t(s){return s.delegateTarget=n,t.oneOff&&y.off(n,s.type,e),e.apply(n,[s])}}function MS(n,e,t){return function s(i){const r=n.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(let a=r.length;a--;)if(r[a]===o)return i.delegateTarget=o,s.oneOff&&y.off(n,i.type,e,t),t.apply(o,[i]);return null}}function r_(n,e,t=null){const s=Object.keys(n);for(let i=0,r=s.length;i<r;i++){const o=n[s[i]];if(o.originalHandler===e&&o.delegationSelector===t)return o}return null}function o_(n,e,t){const s=typeof e=="string",i=s?t:e;let r=a_(n);return n_.has(r)||(r=n),[s,i,r]}function Zh(n,e,t,s,i){if(typeof e!="string"||!n)return;if(t||(t=s,s=null),LS.test(e)){const f=g=>function(m){if(!m.relatedTarget||m.relatedTarget!==m.delegateTarget&&!m.delegateTarget.contains(m.relatedTarget))return g.call(this,m)};s?s=f(s):t=f(t)}const[r,o,a]=o_(e,t,s),c=i_(n),l=c[a]||(c[a]={}),u=r_(l,o,r?t:null);if(u){u.oneOff=u.oneOff&&i;return}const h=s_(o,e.replace(DS,"")),d=r?MS(n,t,s):PS(n,t);d.delegationSelector=r?t:null,d.originalHandler=o,d.oneOff=i,d.uidEvent=h,l[h]=d,n.addEventListener(a,d,r)}function gc(n,e,t,s,i){const r=r_(e[t],s,i);!r||(n.removeEventListener(t,r,Boolean(i)),delete e[t][r.uidEvent])}function xS(n,e,t,s){const i=e[t]||{};Object.keys(i).forEach(r=>{if(r.includes(s)){const o=i[r];gc(n,e,t,o.originalHandler,o.delegationSelector)}})}function a_(n){return n=n.replace(kS,""),OS[n]||n}const y={on(n,e,t,s){Zh(n,e,t,s,!1)},one(n,e,t,s){Zh(n,e,t,s,!0)},off(n,e,t,s){if(typeof e!="string"||!n)return;const[i,r,o]=o_(e,t,s),a=o!==e,c=i_(n),l=e.startsWith(".");if(typeof r!="undefined"){if(!c||!c[o])return;gc(n,c,o,r,i?t:null);return}l&&Object.keys(c).forEach(h=>{xS(n,c,h,e.slice(1))});const u=c[o]||{};Object.keys(u).forEach(h=>{const d=h.replace(RS,"");if(!a||e.includes(d)){const f=u[h];gc(n,c,o,f.originalHandler,f.delegationSelector)}})},trigger(n,e,t){if(typeof e!="string"||!n)return null;const s=Zm(),i=a_(e),r=e!==i,o=n_.has(i);let a,c=!0,l=!0,u=!1,h=null;return r&&s&&(a=s.Event(e,t),s(n).trigger(a),c=!a.isPropagationStopped(),l=!a.isImmediatePropagationStopped(),u=a.isDefaultPrevented()),o?(h=document.createEvent("HTMLEvents"),h.initEvent(i,c,!0)):h=new CustomEvent(e,{bubbles:c,cancelable:!0}),typeof t!="undefined"&&Object.keys(t).forEach(d=>{Object.defineProperty(h,d,{get(){return t[d]}})}),u&&h.preventDefault(),l&&n.dispatchEvent(h),h.defaultPrevented&&typeof a!="undefined"&&a.preventDefault(),h}},Dt=new Map,Js={set(n,e,t){Dt.has(n)||Dt.set(n,new Map);const s=Dt.get(n);if(!s.has(e)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(e,t)},get(n,e){return Dt.has(n)&&Dt.get(n).get(e)||null},remove(n,e){if(!Dt.has(n))return;const t=Dt.get(n);t.delete(e),t.size===0&&Dt.delete(n)}},$S="5.1.3";class Ye{constructor(e){e=qt(e),e&&(this._element=e,Js.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Js.remove(this._element,this.constructor.DATA_KEY),y.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(e=>{this[e]=null})}_queueCallback(e,t,s=!0){e_(e,t,s)}static getInstance(e){return Js.get(qt(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t=="object"?t:null)}static get VERSION(){return $S}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const Ho=(n,e="hide")=>{const t=`click.dismiss${n.EVENT_KEY}`,s=n.NAME;y.on(document,t,`[data-bs-dismiss="${s}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),pn(this))return;const r=Ht(this)||this.closest(`.${s}`);n.getOrCreateInstance(r)[e]()})},US="alert",FS="bs.alert",c_=`.${FS}`,VS=`close${c_}`,BS=`closed${c_}`,jS="fade",HS="show";class qo extends Ye{static get NAME(){return US}close(){if(y.trigger(this._element,VS).defaultPrevented)return;this._element.classList.remove(HS);const t=this._element.classList.contains(jS);this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),y.trigger(this._element,BS),this.dispose()}static jQueryInterface(e){return this.each(function(){const t=qo.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}Ho(qo,"close");je(qo);const qS="button",zS="bs.button",KS=`.${zS}`,WS=".data-api",GS="active",ed='[data-bs-toggle="button"]',YS=`click${KS}${WS}`;class zo extends Ye{static get NAME(){return qS}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(GS))}static jQueryInterface(e){return this.each(function(){const t=zo.getOrCreateInstance(this);e==="toggle"&&t[e]()})}}y.on(document,YS,ed,n=>{n.preventDefault();const e=n.target.closest(ed);zo.getOrCreateInstance(e).toggle()});je(zo);function td(n){return n==="true"?!0:n==="false"?!1:n===Number(n).toString()?Number(n):n===""||n==="null"?null:n}function ba(n){return n.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const de={setDataAttribute(n,e,t){n.setAttribute(`data-bs-${ba(e)}`,t)},removeDataAttribute(n,e){n.removeAttribute(`data-bs-${ba(e)}`)},getDataAttributes(n){if(!n)return{};const e={};return Object.keys(n.dataset).filter(t=>t.startsWith("bs")).forEach(t=>{let s=t.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),e[s]=td(n.dataset[t])}),e},getDataAttribute(n,e){return td(n.getAttribute(`data-bs-${ba(e)}`))},offset(n){const e=n.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position(n){return{top:n.offsetTop,left:n.offsetLeft}}},QS=3,R={find(n,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,n))},findOne(n,e=document.documentElement){return Element.prototype.querySelector.call(e,n)},children(n,e){return[].concat(...n.children).filter(t=>t.matches(e))},parents(n,e){const t=[];let s=n.parentNode;for(;s&&s.nodeType===Node.ELEMENT_NODE&&s.nodeType!==QS;)s.matches(e)&&t.push(s),s=s.parentNode;return t},prev(n,e){let t=n.previousElementSibling;for(;t;){if(t.matches(e))return[t];t=t.previousElementSibling}return[]},next(n,e){let t=n.nextElementSibling;for(;t;){if(t.matches(e))return[t];t=t.nextElementSibling}return[]},focusableChildren(n){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(", ");return this.find(e,n).filter(t=>!pn(t)&&ji(t))}},nd="carousel",XS="bs.carousel",Ue=`.${XS}`,l_=".data-api",JS="ArrowLeft",ZS="ArrowRight",eC=500,tC=40,sd={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},nC={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Zt="next",en="prev",sn="left",js="right",sC={[JS]:js,[ZS]:sn},iC=`slide${Ue}`,id=`slid${Ue}`,rC=`keydown${Ue}`,oC=`mouseenter${Ue}`,aC=`mouseleave${Ue}`,cC=`touchstart${Ue}`,lC=`touchmove${Ue}`,uC=`touchend${Ue}`,hC=`pointerdown${Ue}`,dC=`pointerup${Ue}`,fC=`dragstart${Ue}`,pC=`load${Ue}${l_}`,gC=`click${Ue}${l_}`,mC="carousel",tn="active",_C="slide",yC="carousel-item-end",vC="carousel-item-start",EC="carousel-item-next",wC="carousel-item-prev",TC="pointer-event",IC=".active",lr=".active.carousel-item",bC=".carousel-item",AC=".carousel-item img",SC=".carousel-item-next, .carousel-item-prev",CC=".carousel-indicators",NC="[data-bs-target]",DC="[data-bs-slide], [data-bs-slide-to]",kC='[data-bs-ride="carousel"]',RC="touch",OC="pen";class gt extends Ye{constructor(e,t){super(e);this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._indicatorsElement=R.findOne(CC,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return sd}static get NAME(){return nd}next(){this._slide(Zt)}nextWhenVisible(){!document.hidden&&ji(this._element)&&this.next()}prev(){this._slide(en)}pause(e){e||(this._isPaused=!0),R.findOne(SC,this._element)&&(Xm(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=R.findOne(lr,this._element);const t=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding){y.one(this._element,id,()=>this.to(e));return}if(t===e){this.pause(),this.cycle();return}const s=e>t?Zt:en;this._slide(s,this._items[e])}_getConfig(e){return e=$($($({},sd),de.getDataAttributes(this._element)),typeof e=="object"?e:{}),ut(nd,e,nC),e}_handleSwipe(){const e=Math.abs(this.touchDeltaX);if(e<=tC)return;const t=e/this.touchDeltaX;this.touchDeltaX=0,t&&this._slide(t>0?js:sn)}_addEventListeners(){this._config.keyboard&&y.on(this._element,rC,e=>this._keydown(e)),this._config.pause==="hover"&&(y.on(this._element,oC,e=>this.pause(e)),y.on(this._element,aC,e=>this.cycle(e))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=r=>this._pointerEvent&&(r.pointerType===OC||r.pointerType===RC),t=r=>{e(r)?this.touchStartX=r.clientX:this._pointerEvent||(this.touchStartX=r.touches[0].clientX)},s=r=>{this.touchDeltaX=r.touches&&r.touches.length>1?0:r.touches[0].clientX-this.touchStartX},i=r=>{e(r)&&(this.touchDeltaX=r.clientX-this.touchStartX),this._handleSwipe(),this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(o=>this.cycle(o),eC+this._config.interval))};R.find(AC,this._element).forEach(r=>{y.on(r,fC,o=>o.preventDefault())}),this._pointerEvent?(y.on(this._element,hC,r=>t(r)),y.on(this._element,dC,r=>i(r)),this._element.classList.add(TC)):(y.on(this._element,cC,r=>t(r)),y.on(this._element,lC,r=>s(r)),y.on(this._element,uC,r=>i(r)))}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=sC[e.key];t&&(e.preventDefault(),this._slide(t))}_getItemIndex(e){return this._items=e&&e.parentNode?R.find(bC,e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(e,t){const s=e===Zt;return t_(this._items,t,s,this._config.wrap)}_triggerSlideEvent(e,t){const s=this._getItemIndex(e),i=this._getItemIndex(R.findOne(lr,this._element));return y.trigger(this._element,iC,{relatedTarget:e,direction:t,from:i,to:s})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const t=R.findOne(IC,this._indicatorsElement);t.classList.remove(tn),t.removeAttribute("aria-current");const s=R.find(NC,this._indicatorsElement);for(let i=0;i<s.length;i++)if(Number.parseInt(s[i].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){s[i].classList.add(tn),s[i].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||R.findOne(lr,this._element);if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,t){const s=this._directionToOrder(e),i=R.findOne(lr,this._element),r=this._getItemIndex(i),o=t||this._getItemByOrder(s,i),a=this._getItemIndex(o),c=Boolean(this._interval),l=s===Zt,u=l?vC:yC,h=l?EC:wC,d=this._orderToDirection(s);if(o&&o.classList.contains(tn)){this._isSliding=!1;return}if(this._isSliding||this._triggerSlideEvent(o,d).defaultPrevented||!i||!o)return;this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(o),this._activeElement=o;const g=()=>{y.trigger(this._element,id,{relatedTarget:o,direction:d,from:r,to:a})};if(this._element.classList.contains(_C)){o.classList.add(h),Is(o),i.classList.add(u),o.classList.add(u);const m=()=>{o.classList.remove(u,h),o.classList.add(tn),i.classList.remove(tn,h,u),this._isSliding=!1,setTimeout(g,0)};this._queueCallback(m,i,!0)}else i.classList.remove(tn),o.classList.add(tn),this._isSliding=!1,g();c&&this.cycle()}_directionToOrder(e){return[js,sn].includes(e)?De()?e===sn?en:Zt:e===sn?Zt:en:e}_orderToDirection(e){return[Zt,en].includes(e)?De()?e===en?sn:js:e===en?js:sn:e}static carouselInterface(e,t){const s=gt.getOrCreateInstance(e,t);let{_config:i}=s;typeof t=="object"&&(i=$($({},i),t));const r=typeof t=="string"?t:i.slide;if(typeof t=="number")s.to(t);else if(typeof r=="string"){if(typeof s[r]=="undefined")throw new TypeError(`No method named "${r}"`);s[r]()}else i.interval&&i.ride&&(s.pause(),s.cycle())}static jQueryInterface(e){return this.each(function(){gt.carouselInterface(this,e)})}static dataApiClickHandler(e){const t=Ht(this);if(!t||!t.classList.contains(mC))return;const s=$($({},de.getDataAttributes(t)),de.getDataAttributes(this)),i=this.getAttribute("data-bs-slide-to");i&&(s.interval=!1),gt.carouselInterface(t,s),i&&gt.getInstance(t).to(i),e.preventDefault()}}y.on(document,gC,DC,gt.dataApiClickHandler);y.on(window,pC,()=>{const n=R.find(kC);for(let e=0,t=n.length;e<t;e++)gt.carouselInterface(n[e],gt.getInstance(n[e]))});je(gt);const rd="collapse",u_="bs.collapse",Hi=`.${u_}`,LC=".data-api",od={toggle:!0,parent:null},PC={toggle:"boolean",parent:"(null|element)"},MC=`show${Hi}`,xC=`shown${Hi}`,$C=`hide${Hi}`,UC=`hidden${Hi}`,FC=`click${Hi}${LC}`,Aa="show",qn="collapse",ur="collapsing",ad="collapsed",cd=`:scope .${qn} .${qn}`,VC="collapse-horizontal",BC="width",jC="height",HC=".collapse.show, .collapse.collapsing",mc='[data-bs-toggle="collapse"]';class Xn extends Ye{constructor(e,t){super(e);this._isTransitioning=!1,this._config=this._getConfig(t),this._triggerArray=[];const s=R.find(mc);for(let i=0,r=s.length;i<r;i++){const o=s[i],a=nu(o),c=R.find(a).filter(l=>l===this._element);a!==null&&c.length&&(this._selector=a,this._triggerArray.push(o))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return od}static get NAME(){return rd}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[],t;if(this._config.parent){const l=R.find(cd,this._config.parent);e=R.find(HC,this._config.parent).filter(u=>!l.includes(u))}const s=R.findOne(this._selector);if(e.length){const l=e.find(u=>s!==u);if(t=l?Xn.getInstance(l):null,t&&t._isTransitioning)return}if(y.trigger(this._element,MC).defaultPrevented)return;e.forEach(l=>{s!==l&&Xn.getOrCreateInstance(l,{toggle:!1}).hide(),t||Js.set(l,u_,null)});const r=this._getDimension();this._element.classList.remove(qn),this._element.classList.add(ur),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(ur),this._element.classList.add(qn,Aa),this._element.style[r]="",y.trigger(this._element,xC)},c=`scroll${r[0].toUpperCase()+r.slice(1)}`;this._queueCallback(o,this._element,!0),this._element.style[r]=`${this._element[c]}px`}hide(){if(this._isTransitioning||!this._isShown()||y.trigger(this._element,$C).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,Is(this._element),this._element.classList.add(ur),this._element.classList.remove(qn,Aa);const s=this._triggerArray.length;for(let r=0;r<s;r++){const o=this._triggerArray[r],a=Ht(o);a&&!this._isShown(a)&&this._addAriaAndCollapsedClass([o],!1)}this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(ur),this._element.classList.add(qn),y.trigger(this._element,UC)};this._element.style[t]="",this._queueCallback(i,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Aa)}_getConfig(e){return e=$($($({},od),de.getDataAttributes(this._element)),e),e.toggle=Boolean(e.toggle),e.parent=qt(e.parent),ut(rd,e,PC),e}_getDimension(){return this._element.classList.contains(VC)?BC:jC}_initializeChildren(){if(!this._config.parent)return;const e=R.find(cd,this._config.parent);R.find(mc,this._config.parent).filter(t=>!e.includes(t)).forEach(t=>{const s=Ht(t);s&&this._addAriaAndCollapsedClass([t],this._isShown(s))})}_addAriaAndCollapsedClass(e,t){!e.length||e.forEach(s=>{t?s.classList.remove(ad):s.classList.add(ad),s.setAttribute("aria-expanded",t)})}static jQueryInterface(e){return this.each(function(){const t={};typeof e=="string"&&/show|hide/.test(e)&&(t.toggle=!1);const s=Xn.getOrCreateInstance(this,t);if(typeof e=="string"){if(typeof s[e]=="undefined")throw new TypeError(`No method named "${e}"`);s[e]()}})}}y.on(document,FC,mc,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();const e=nu(this);R.find(e).forEach(s=>{Xn.getOrCreateInstance(s,{toggle:!1}).toggle()})});je(Xn);const Sa="dropdown",qC="bs.dropdown",kn=`.${qC}`,su=".data-api",Tr="Escape",ld="Space",ud="Tab",_c="ArrowUp",Ir="ArrowDown",zC=2,KC=new RegExp(`${_c}|${Ir}|${Tr}`),WC=`hide${kn}`,GC=`hidden${kn}`,YC=`show${kn}`,QC=`shown${kn}`,h_=`click${kn}${su}`,d_=`keydown${kn}${su}`,XC=`keyup${kn}${su}`,xn="show",JC="dropup",ZC="dropend",eN="dropstart",tN="navbar",Zs='[data-bs-toggle="dropdown"]',yc=".dropdown-menu",nN=".navbar-nav",sN=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",iN=De()?"top-end":"top-start",rN=De()?"top-start":"top-end",oN=De()?"bottom-end":"bottom-start",aN=De()?"bottom-start":"bottom-end",cN=De()?"left-start":"right-start",lN=De()?"right-start":"left-start",uN={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},hN={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class Ve extends Ye{constructor(e,t){super(e);this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return uN}static get DefaultType(){return hN}static get NAME(){return Sa}toggle(){return this._isShown()?this.hide():this.show()}show(){if(pn(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element};if(y.trigger(this._element,YC,e).defaultPrevented)return;const s=Ve.getParentFromElement(this._element);this._inNavbar?de.setDataAttribute(this._menu,"popper","none"):this._createPopper(s),"ontouchstart"in document.documentElement&&!s.closest(nN)&&[].concat(...document.body.children).forEach(i=>y.on(i,"mouseover",Xr)),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(xn),this._element.classList.add(xn),y.trigger(this._element,QC,e)}hide(){if(pn(this._element)||!this._isShown(this._menu))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){y.trigger(this._element,WC,e).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(s=>y.off(s,"mouseover",Xr)),this._popper&&this._popper.destroy(),this._menu.classList.remove(xn),this._element.classList.remove(xn),this._element.setAttribute("aria-expanded","false"),de.removeDataAttribute(this._menu,"popper"),y.trigger(this._element,GC,e))}_getConfig(e){if(e=$($($({},this.constructor.Default),de.getDataAttributes(this._element)),e),ut(Sa,e,this.constructor.DefaultType),typeof e.reference=="object"&&!In(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${Sa.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(e){if(typeof Ym=="undefined")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=e:In(this._config.reference)?t=qt(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const s=this._getPopperConfig(),i=s.modifiers.find(r=>r.name==="applyStyles"&&r.enabled===!1);this._popper=tu(t,this._menu,s),i&&de.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains(xn)}_getMenuElement(){return R.next(this._element,yc)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains(ZC))return cN;if(e.classList.contains(eN))return lN;const t=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(JC)?t?rN:iN:t?aN:oN}_detectNavbar(){return this._element.closest(`.${tN}`)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return this._config.display==="static"&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),$($({},e),typeof this._config.popperConfig=="function"?this._config.popperConfig(e):this._config.popperConfig)}_selectMenuItem({key:e,target:t}){const s=R.find(sN,this._menu).filter(ji);!s.length||t_(s,t,e===Ir,!s.includes(t)).focus()}static jQueryInterface(e){return this.each(function(){const t=Ve.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]=="undefined")throw new TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(e&&(e.button===zC||e.type==="keyup"&&e.key!==ud))return;const t=R.find(Zs);for(let s=0,i=t.length;s<i;s++){const r=Ve.getInstance(t[s]);if(!r||r._config.autoClose===!1||!r._isShown())continue;const o={relatedTarget:r._element};if(e){const a=e.composedPath(),c=a.includes(r._menu);if(a.includes(r._element)||r._config.autoClose==="inside"&&!c||r._config.autoClose==="outside"&&c||r._menu.contains(e.target)&&(e.type==="keyup"&&e.key===ud||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;e.type==="click"&&(o.clickEvent=e)}r._completeHide(o)}}static getParentFromElement(e){return Ht(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?e.key===ld||e.key!==Tr&&(e.key!==Ir&&e.key!==_c||e.target.closest(yc)):!KC.test(e.key))return;const t=this.classList.contains(xn);if(!t&&e.key===Tr||(e.preventDefault(),e.stopPropagation(),pn(this)))return;const s=this.matches(Zs)?this:R.prev(this,Zs)[0],i=Ve.getOrCreateInstance(s);if(e.key===Tr){i.hide();return}if(e.key===_c||e.key===Ir){t||i.show(),i._selectMenuItem(e);return}(!t||e.key===ld)&&Ve.clearMenus()}}y.on(document,d_,Zs,Ve.dataApiKeydownHandler);y.on(document,d_,yc,Ve.dataApiKeydownHandler);y.on(document,h_,Ve.clearMenus);y.on(document,XC,Ve.clearMenus);y.on(document,h_,Zs,function(n){n.preventDefault(),Ve.getOrCreateInstance(this).toggle()});je(Ve);const hd=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",dd=".sticky-top";class vc{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",t=>t+e),this._setElementAttributes(hd,"paddingRight",t=>t+e),this._setElementAttributes(dd,"marginRight",t=>t-e)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,s){const i=this.getWidth(),r=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+i)return;this._saveInitialAttribute(o,t);const a=window.getComputedStyle(o)[t];o.style[t]=`${s(Number.parseFloat(a))}px`};this._applyManipulationCallback(e,r)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(hd,"paddingRight"),this._resetElementAttributes(dd,"marginRight")}_saveInitialAttribute(e,t){const s=e.style[t];s&&de.setDataAttribute(e,t,s)}_resetElementAttributes(e,t){const s=i=>{const r=de.getDataAttribute(i,t);typeof r=="undefined"?i.style.removeProperty(t):(de.removeDataAttribute(i,t),i.style[t]=r)};this._applyManipulationCallback(e,s)}_applyManipulationCallback(e,t){In(e)?t(e):R.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}const dN={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},fN={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},f_="backdrop",pN="fade",fd="show",pd=`mousedown.bs.${f_}`;class p_{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){if(!this._config.isVisible){rn(e);return}this._append(),this._config.isAnimated&&Is(this._getElement()),this._getElement().classList.add(fd),this._emulateAnimation(()=>{rn(e)})}hide(e){if(!this._config.isVisible){rn(e);return}this._getElement().classList.remove(fd),this._emulateAnimation(()=>{this.dispose(),rn(e)})}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(pN),this._element=e}return this._element}_getConfig(e){return e=$($({},dN),typeof e=="object"?e:{}),e.rootElement=qt(e.rootElement),ut(f_,e,fN),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),y.on(this._getElement(),pd,()=>{rn(this._config.clickCallback)}),this._isAppended=!0)}dispose(){!this._isAppended||(y.off(this._element,pd),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){e_(e,this._getElement(),this._config.isAnimated)}}const gN={trapElement:null,autofocus:!0},mN={trapElement:"element",autofocus:"boolean"},_N="focustrap",yN="bs.focustrap",Jr=`.${yN}`,vN=`focusin${Jr}`,EN=`keydown.tab${Jr}`,wN="Tab",TN="forward",gd="backward";class g_{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:t}=this._config;this._isActive||(t&&e.focus(),y.off(document,Jr),y.on(document,vN,s=>this._handleFocusin(s)),y.on(document,EN,s=>this._handleKeydown(s)),this._isActive=!0)}deactivate(){!this._isActive||(this._isActive=!1,y.off(document,Jr))}_handleFocusin(e){const{target:t}=e,{trapElement:s}=this._config;if(t===document||t===s||s.contains(t))return;const i=R.focusableChildren(s);i.length===0?s.focus():this._lastTabNavDirection===gd?i[i.length-1].focus():i[0].focus()}_handleKeydown(e){e.key===wN&&(this._lastTabNavDirection=e.shiftKey?gd:TN)}_getConfig(e){return e=$($({},gN),typeof e=="object"?e:{}),ut(_N,e,mN),e}}const md="modal",IN="bs.modal",He=`.${IN}`,bN=".data-api",_d="Escape",yd={backdrop:!0,keyboard:!0,focus:!0},AN={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},SN=`hide${He}`,CN=`hidePrevented${He}`,m_=`hidden${He}`,__=`show${He}`,NN=`shown${He}`,vd=`resize${He}`,Ed=`click.dismiss${He}`,wd=`keydown.dismiss${He}`,DN=`mouseup.dismiss${He}`,Td=`mousedown.dismiss${He}`,kN=`click${He}${bN}`,Id="modal-open",RN="fade",bd="show",Ca="modal-static",ON=".modal.show",LN=".modal-dialog",PN=".modal-body",MN='[data-bs-toggle="modal"]';class ps extends Ye{constructor(e,t){super(e);this._config=this._getConfig(t),this._dialog=R.findOne(LN,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new vc}static get Default(){return yd}static get NAME(){return md}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||y.trigger(this._element,__,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(Id),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),y.on(this._dialog,Td,()=>{y.one(this._element,DN,s=>{s.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(e)))}hide(){if(!this._isShown||this._isTransitioning||y.trigger(this._element,SN).defaultPrevented)return;this._isShown=!1;const t=this._isAnimated();t&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(bd),y.off(this._element,Ed),y.off(this._dialog,Td),this._queueCallback(()=>this._hideModal(),this._element,t)}dispose(){[window,this._dialog].forEach(e=>y.off(e,He)),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new p_({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new g_({trapElement:this._element})}_getConfig(e){return e=$($($({},yd),de.getDataAttributes(this._element)),typeof e=="object"?e:{}),ut(md,e,AN),e}_showElement(e){const t=this._isAnimated(),s=R.findOne(PN,this._dialog);(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE)&&document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,s&&(s.scrollTop=0),t&&Is(this._element),this._element.classList.add(bd);const i=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,y.trigger(this._element,NN,{relatedTarget:e})};this._queueCallback(i,this._dialog,t)}_setEscapeEvent(){this._isShown?y.on(this._element,wd,e=>{this._config.keyboard&&e.key===_d?(e.preventDefault(),this.hide()):!this._config.keyboard&&e.key===_d&&this._triggerBackdropTransition()}):y.off(this._element,wd)}_setResizeEvent(){this._isShown?y.on(window,vd,()=>this._adjustDialog()):y.off(window,vd)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Id),this._resetAdjustments(),this._scrollBar.reset(),y.trigger(this._element,m_)})}_showBackdrop(e){y.on(this._element,Ed,t=>{if(this._ignoreBackdropClick){this._ignoreBackdropClick=!1;return}t.target===t.currentTarget&&(this._config.backdrop===!0?this.hide():this._config.backdrop==="static"&&this._triggerBackdropTransition())}),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains(RN)}_triggerBackdropTransition(){if(y.trigger(this._element,CN).defaultPrevented)return;const{classList:t,scrollHeight:s,style:i}=this._element,r=s>document.documentElement.clientHeight;!r&&i.overflowY==="hidden"||t.contains(Ca)||(r||(i.overflowY="hidden"),t.add(Ca),this._queueCallback(()=>{t.remove(Ca),r||this._queueCallback(()=>{i.overflowY=""},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),s=t>0;(!s&&e&&!De()||s&&!e&&De())&&(this._element.style.paddingLeft=`${t}px`),(s&&!e&&!De()||!s&&e&&De())&&(this._element.style.paddingRight=`${t}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each(function(){const s=ps.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof s[e]=="undefined")throw new TypeError(`No method named "${e}"`);s[e](t)}})}}y.on(document,kN,MN,function(n){const e=Ht(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),y.one(e,__,i=>{i.defaultPrevented||y.one(e,m_,()=>{ji(this)&&this.focus()})});const t=R.findOne(ON);t&&ps.getInstance(t).hide(),ps.getOrCreateInstance(e).toggle(this)});Ho(ps);je(ps);const Ad="offcanvas",xN="bs.offcanvas",Rn=`.${xN}`,y_=".data-api",$N=`load${Rn}${y_}`,UN="Escape",Sd={backdrop:!0,keyboard:!0,scroll:!1},FN={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},Cd="show",VN="offcanvas-backdrop",v_=".offcanvas.show",BN=`show${Rn}`,jN=`shown${Rn}`,HN=`hide${Rn}`,E_=`hidden${Rn}`,qN=`click${Rn}${y_}`,zN=`keydown.dismiss${Rn}`,KN='[data-bs-toggle="offcanvas"]';class bn extends Ye{constructor(e,t){super(e);this._config=this._getConfig(t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return Ad}static get Default(){return Sd}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||y.trigger(this._element,BN,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||new vc().hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Cd);const s=()=>{this._config.scroll||this._focustrap.activate(),y.trigger(this._element,jN,{relatedTarget:e})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||y.trigger(this._element,HN).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(Cd),this._backdrop.hide();const t=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||new vc().reset(),y.trigger(this._element,E_)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(e){return e=$($($({},Sd),de.getDataAttributes(this._element)),typeof e=="object"?e:{}),ut(Ad,e,FN),e}_initializeBackDrop(){return new p_({className:VN,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new g_({trapElement:this._element})}_addEventListeners(){y.on(this._element,zN,e=>{this._config.keyboard&&e.key===UN&&this.hide()})}static jQueryInterface(e){return this.each(function(){const t=bn.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}y.on(document,qN,KN,function(n){const e=Ht(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),pn(this))return;y.one(e,E_,()=>{ji(this)&&this.focus()});const t=R.findOne(v_);t&&t!==e&&bn.getInstance(t).hide(),bn.getOrCreateInstance(e).toggle(this)});y.on(window,$N,()=>R.find(v_).forEach(n=>bn.getOrCreateInstance(n).show()));Ho(bn);je(bn);const WN=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),GN=/^aria-[\w-]*$/i,YN=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,QN=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,XN=(n,e)=>{const t=n.nodeName.toLowerCase();if(e.includes(t))return WN.has(t)?Boolean(YN.test(n.nodeValue)||QN.test(n.nodeValue)):!0;const s=e.filter(i=>i instanceof RegExp);for(let i=0,r=s.length;i<r;i++)if(s[i].test(t))return!0;return!1},JN={"*":["class","dir","id","lang","role",GN],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function Nd(n,e,t){if(!n.length)return n;if(t&&typeof t=="function")return t(n);const i=new window.DOMParser().parseFromString(n,"text/html"),r=[].concat(...i.body.querySelectorAll("*"));for(let o=0,a=r.length;o<a;o++){const c=r[o],l=c.nodeName.toLowerCase();if(!Object.keys(e).includes(l)){c.remove();continue}const u=[].concat(...c.attributes),h=[].concat(e["*"]||[],e[l]||[]);u.forEach(d=>{XN(d,h)||c.removeAttribute(d.nodeName)})}return i.body.innerHTML}const Dd="tooltip",ZN="bs.tooltip",Qe=`.${ZN}`,eD="bs-tooltip",tD=new Set(["sanitize","allowList","sanitizeFn"]),nD={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},sD={AUTO:"auto",TOP:"top",RIGHT:De()?"left":"right",BOTTOM:"bottom",LEFT:De()?"right":"left"},iD={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:JN,popperConfig:null},rD={HIDE:`hide${Qe}`,HIDDEN:`hidden${Qe}`,SHOW:`show${Qe}`,SHOWN:`shown${Qe}`,INSERTED:`inserted${Qe}`,CLICK:`click${Qe}`,FOCUSIN:`focusin${Qe}`,FOCUSOUT:`focusout${Qe}`,MOUSEENTER:`mouseenter${Qe}`,MOUSELEAVE:`mouseleave${Qe}`},hr="fade",oD="modal",Os="show",Ls="show",Na="out",kd=".tooltip-inner",Rd=`.${oD}`,Od="hide.bs.modal",Ps="hover",Da="focus",aD="click",cD="manual";class bs extends Ye{constructor(e,t){if(typeof Ym=="undefined")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e);this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(t),this.tip=null,this._setListeners()}static get Default(){return iD}static get NAME(){return Dd}static get Event(){return rD}static get DefaultType(){return nD}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(!!this._isEnabled)if(e){const t=this._initializeOnDelegatedTarget(e);t._activeTrigger.click=!t._activeTrigger.click,t._isWithActiveTrigger()?t._enter(null,t):t._leave(null,t)}else{if(this.getTipElement().classList.contains(Os)){this._leave(null,this);return}this._enter(null,this)}}dispose(){clearTimeout(this._timeout),y.off(this._element.closest(Rd),Od,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this.isWithContent()&&this._isEnabled))return;const e=y.trigger(this._element,this.constructor.Event.SHOW),t=Jm(this._element),s=t===null?this._element.ownerDocument.documentElement.contains(this._element):t.contains(this._element);if(e.defaultPrevented||!s)return;this.constructor.NAME==="tooltip"&&this.tip&&this.getTitle()!==this.tip.querySelector(kd).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const i=this.getTipElement(),r=SS(this.constructor.NAME);i.setAttribute("id",r),this._element.setAttribute("aria-describedby",r),this._config.animation&&i.classList.add(hr);const o=typeof this._config.placement=="function"?this._config.placement.call(this,i,this._element):this._config.placement,a=this._getAttachment(o);this._addAttachmentClass(a);const{container:c}=this._config;Js.set(i,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(c.append(i),y.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=tu(this._element,i,this._getPopperConfig(a)),i.classList.add(Os);const l=this._resolvePossibleFunction(this._config.customClass);l&&i.classList.add(...l.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(d=>{y.on(d,"mouseover",Xr)});const u=()=>{const d=this._hoverState;this._hoverState=null,y.trigger(this._element,this.constructor.Event.SHOWN),d===Na&&this._leave(null,this)},h=this.tip.classList.contains(hr);this._queueCallback(u,this.tip,h)}hide(){if(!this._popper)return;const e=this.getTipElement(),t=()=>{this._isWithActiveTrigger()||(this._hoverState!==Ls&&e.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),y.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())};if(y.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented)return;e.classList.remove(Os),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(r=>y.off(r,"mouseover",Xr)),this._activeTrigger[aD]=!1,this._activeTrigger[Da]=!1,this._activeTrigger[Ps]=!1;const i=this.tip.classList.contains(hr);this._queueCallback(t,this.tip,i),this._hoverState=""}update(){this._popper!==null&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const e=document.createElement("div");e.innerHTML=this._config.template;const t=e.children[0];return this.setContent(t),t.classList.remove(hr,Os),this.tip=t,this.tip}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),kd)}_sanitizeAndSetContent(e,t,s){const i=R.findOne(s,e);if(!t&&i){i.remove();return}this.setElementContent(i,t)}setElementContent(e,t){if(e!==null){if(In(t)){t=qt(t),this._config.html?t.parentNode!==e&&(e.innerHTML="",e.append(t)):e.textContent=t.textContent;return}this._config.html?(this._config.sanitize&&(t=Nd(t,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=t):e.textContent=t}}getTitle(){const e=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(e)}updateAttachment(e){return e==="right"?"end":e==="left"?"start":e}_initializeOnDelegatedTarget(e,t){return t||this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_resolvePossibleFunction(e){return typeof e=="function"?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:s=>this._handlePopperPlacementChange(s)}],onFirstUpdate:s=>{s.options.placement!==s.placement&&this._handlePopperPlacementChange(s)}};return $($({},t),typeof this._config.popperConfig=="function"?this._config.popperConfig(t):this._config.popperConfig)}_addAttachmentClass(e){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)}_getAttachment(e){return sD[e.toUpperCase()]}_setListeners(){this._config.trigger.split(" ").forEach(t=>{if(t==="click")y.on(this._element,this.constructor.Event.CLICK,this._config.selector,s=>this.toggle(s));else if(t!==cD){const s=t===Ps?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,i=t===Ps?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;y.on(this._element,s,this._config.selector,r=>this._enter(r)),y.on(this._element,i,this._config.selector,r=>this._leave(r))}}),this._hideModalHandler=()=>{this._element&&this.hide()},y.on(this._element.closest(Rd),Od,this._hideModalHandler),this._config.selector?this._config=Ns($({},this._config),{trigger:"manual",selector:""}):this._fixTitle()}_fixTitle(){const e=this._element.getAttribute("title"),t=typeof this._element.getAttribute("data-bs-original-title");(e||t!=="string")&&(this._element.setAttribute("data-bs-original-title",e||""),e&&!this._element.getAttribute("aria-label")&&!this._element.textContent&&this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""))}_enter(e,t){if(t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger[e.type==="focusin"?Da:Ps]=!0),t.getTipElement().classList.contains(Os)||t._hoverState===Ls){t._hoverState=Ls;return}if(clearTimeout(t._timeout),t._hoverState=Ls,!t._config.delay||!t._config.delay.show){t.show();return}t._timeout=setTimeout(()=>{t._hoverState===Ls&&t.show()},t._config.delay.show)}_leave(e,t){if(t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger[e.type==="focusout"?Da:Ps]=t._element.contains(e.relatedTarget)),!t._isWithActiveTrigger()){if(clearTimeout(t._timeout),t._hoverState=Na,!t._config.delay||!t._config.delay.hide){t.hide();return}t._timeout=setTimeout(()=>{t._hoverState===Na&&t.hide()},t._config.delay.hide)}}_isWithActiveTrigger(){for(const e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1}_getConfig(e){const t=de.getDataAttributes(this._element);return Object.keys(t).forEach(s=>{tD.has(s)&&delete t[s]}),e=$($($({},this.constructor.Default),t),typeof e=="object"&&e?e:{}),e.container=e.container===!1?document.body:qt(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),ut(Dd,e,this.constructor.DefaultType),e.sanitize&&(e.template=Nd(e.template,e.allowList,e.sanitizeFn)),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e}_cleanTipClass(){const e=this.getTipElement(),t=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),s=e.getAttribute("class").match(t);s!==null&&s.length>0&&s.map(i=>i.trim()).forEach(i=>e.classList.remove(i))}_getBasicClassPrefix(){return eD}_handlePopperPlacementChange(e){const{state:t}=e;!t||(this.tip=t.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(t.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each(function(){const t=bs.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]=="undefined")throw new TypeError(`No method named "${e}"`);t[e]()}})}}je(bs);const lD="popover",uD="bs.popover",Xe=`.${uD}`,hD="bs-popover",dD=Ns($({},bs.Default),{placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),fD=Ns($({},bs.DefaultType),{content:"(string|element|function)"}),pD={HIDE:`hide${Xe}`,HIDDEN:`hidden${Xe}`,SHOW:`show${Xe}`,SHOWN:`shown${Xe}`,INSERTED:`inserted${Xe}`,CLICK:`click${Xe}`,FOCUSIN:`focusin${Xe}`,FOCUSOUT:`focusout${Xe}`,MOUSEENTER:`mouseenter${Xe}`,MOUSELEAVE:`mouseleave${Xe}`},gD=".popover-header",mD=".popover-body";class iu extends bs{static get Default(){return dD}static get NAME(){return lD}static get Event(){return pD}static get DefaultType(){return fD}isWithContent(){return this.getTitle()||this._getContent()}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),gD),this._sanitizeAndSetContent(e,this._getContent(),mD)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return hD}static jQueryInterface(e){return this.each(function(){const t=iu.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]=="undefined")throw new TypeError(`No method named "${e}"`);t[e]()}})}}je(iu);const Ld="scrollspy",_D="bs.scrollspy",Ko=`.${_D}`,yD=".data-api",Pd={offset:10,method:"auto",target:""},vD={offset:"number",method:"string",target:"(string|element)"},ED=`activate${Ko}`,wD=`scroll${Ko}`,TD=`load${Ko}${yD}`,w_="dropdown-item",$n="active",ID='[data-bs-spy="scroll"]',bD=".nav, .list-group",Ec=".nav-link",AD=".nav-item",T_=".list-group-item",ka=`${Ec}, ${T_}, .${w_}`,SD=".dropdown",CD=".dropdown-toggle",ND="offset",Md="position";class Wo extends Ye{constructor(e,t){super(e);this._scrollElement=this._element.tagName==="BODY"?window:this._element,this._config=this._getConfig(t),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,y.on(this._scrollElement,wD,()=>this._process()),this.refresh(),this._process()}static get Default(){return Pd}static get NAME(){return Ld}refresh(){const e=this._scrollElement===this._scrollElement.window?ND:Md,t=this._config.method==="auto"?e:this._config.method,s=t===Md?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),R.find(ka,this._config.target).map(r=>{const o=nu(r),a=o?R.findOne(o):null;if(a){const c=a.getBoundingClientRect();if(c.width||c.height)return[de[t](a).top+s,o]}return null}).filter(r=>r).sort((r,o)=>r[0]-o[0]).forEach(r=>{this._offsets.push(r[0]),this._targets.push(r[1])})}dispose(){y.off(this._scrollElement,Ko),super.dispose()}_getConfig(e){return e=$($($({},Pd),de.getDataAttributes(this._element)),typeof e=="object"&&e?e:{}),e.target=qt(e.target)||document.documentElement,ut(Ld,e,vD),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),s=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=s){const i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i);return}if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0){this._activeTarget=null,this._clear();return}for(let i=this._offsets.length;i--;)this._activeTarget!==this._targets[i]&&e>=this._offsets[i]&&(typeof this._offsets[i+1]=="undefined"||e<this._offsets[i+1])&&this._activate(this._targets[i])}_activate(e){this._activeTarget=e,this._clear();const t=ka.split(",").map(i=>`${i}[data-bs-target="${e}"],${i}[href="${e}"]`),s=R.findOne(t.join(","),this._config.target);s.classList.add($n),s.classList.contains(w_)?R.findOne(CD,s.closest(SD)).classList.add($n):R.parents(s,bD).forEach(i=>{R.prev(i,`${Ec}, ${T_}`).forEach(r=>r.classList.add($n)),R.prev(i,AD).forEach(r=>{R.children(r,Ec).forEach(o=>o.classList.add($n))})}),y.trigger(this._scrollElement,ED,{relatedTarget:e})}_clear(){R.find(ka,this._config.target).filter(e=>e.classList.contains($n)).forEach(e=>e.classList.remove($n))}static jQueryInterface(e){return this.each(function(){const t=Wo.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]=="undefined")throw new TypeError(`No method named "${e}"`);t[e]()}})}}y.on(window,TD,()=>{R.find(ID).forEach(n=>new Wo(n))});je(Wo);const DD="tab",kD="bs.tab",qi=`.${kD}`,RD=".data-api",OD=`hide${qi}`,LD=`hidden${qi}`,PD=`show${qi}`,MD=`shown${qi}`,xD=`click${qi}${RD}`,$D="dropdown-menu",Ms="active",xd="fade",$d="show",UD=".dropdown",FD=".nav, .list-group",Ud=".active",Fd=":scope > li > .active",VD='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',BD=".dropdown-toggle",jD=":scope > .dropdown-menu .active";class Go extends Ye{static get NAME(){return DD}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(Ms))return;let e;const t=Ht(this._element),s=this._element.closest(FD);if(s){const a=s.nodeName==="UL"||s.nodeName==="OL"?Fd:Ud;e=R.find(a,s),e=e[e.length-1]}const i=e?y.trigger(e,OD,{relatedTarget:this._element}):null;if(y.trigger(this._element,PD,{relatedTarget:e}).defaultPrevented||i!==null&&i.defaultPrevented)return;this._activate(this._element,s);const o=()=>{y.trigger(e,LD,{relatedTarget:this._element}),y.trigger(this._element,MD,{relatedTarget:e})};t?this._activate(t,t.parentNode,o):o()}_activate(e,t,s){const r=(t&&(t.nodeName==="UL"||t.nodeName==="OL")?R.find(Fd,t):R.children(t,Ud))[0],o=s&&r&&r.classList.contains(xd),a=()=>this._transitionComplete(e,r,s);r&&o?(r.classList.remove($d),this._queueCallback(a,e,!0)):a()}_transitionComplete(e,t,s){if(t){t.classList.remove(Ms);const r=R.findOne(jD,t.parentNode);r&&r.classList.remove(Ms),t.getAttribute("role")==="tab"&&t.setAttribute("aria-selected",!1)}e.classList.add(Ms),e.getAttribute("role")==="tab"&&e.setAttribute("aria-selected",!0),Is(e),e.classList.contains(xd)&&e.classList.add($d);let i=e.parentNode;if(i&&i.nodeName==="LI"&&(i=i.parentNode),i&&i.classList.contains($D)){const r=e.closest(UD);r&&R.find(BD,r).forEach(o=>o.classList.add(Ms)),e.setAttribute("aria-expanded",!0)}s&&s()}static jQueryInterface(e){return this.each(function(){const t=Go.getOrCreateInstance(this);if(typeof e=="string"){if(typeof t[e]=="undefined")throw new TypeError(`No method named "${e}"`);t[e]()}})}}y.on(document,xD,VD,function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),pn(this))return;Go.getOrCreateInstance(this).show()});je(Go);const Vd="toast",HD="bs.toast",Yt=`.${HD}`,qD=`mouseover${Yt}`,zD=`mouseout${Yt}`,KD=`focusin${Yt}`,WD=`focusout${Yt}`,GD=`hide${Yt}`,YD=`hidden${Yt}`,QD=`show${Yt}`,XD=`shown${Yt}`,JD="fade",Bd="hide",xs="show",dr="showing",ZD={animation:"boolean",autohide:"boolean",delay:"number"},jd={animation:!0,autohide:!0,delay:5e3};class Yo extends Ye{constructor(e,t){super(e);this._config=this._getConfig(t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return ZD}static get Default(){return jd}static get NAME(){return Vd}show(){if(y.trigger(this._element,QD).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(JD);const t=()=>{this._element.classList.remove(dr),y.trigger(this._element,XD),this._maybeScheduleHide()};this._element.classList.remove(Bd),Is(this._element),this._element.classList.add(xs),this._element.classList.add(dr),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(xs)||y.trigger(this._element,GD).defaultPrevented)return;const t=()=>{this._element.classList.add(Bd),this._element.classList.remove(dr),this._element.classList.remove(xs),y.trigger(this._element,YD)};this._element.classList.add(dr),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(xs)&&this._element.classList.remove(xs),super.dispose()}_getConfig(e){return e=$($($({},jd),de.getDataAttributes(this._element)),typeof e=="object"&&e?e:{}),ut(Vd,e,this.constructor.DefaultType),e}_maybeScheduleHide(){!this._config.autohide||this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t){this._clearTimeout();return}const s=e.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){y.on(this._element,qD,e=>this._onInteraction(e,!0)),y.on(this._element,zD,e=>this._onInteraction(e,!1)),y.on(this._element,KD,e=>this._onInteraction(e,!0)),y.on(this._element,WD,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const t=Yo.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]=="undefined")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}Ho(Yo);je(Yo);export{lk as F,rk as P,ok as R,ik as _,vk as a,hk as b,nk as c,sk as d,cI as e,uk as f,yk as g,mk as h,hv as i,dk as j,ck as k,pk as p,_k as r,gk as u,ak as x,fk as y};
