import{u as q}from"./gxAW-2bA.js";import{ak as $,a4 as R,a5 as S,am as L,an as O,ao as U,ap as I,u as P,x as k,E as p,a as B,c as W,o as D,H as C}from"./D-sy4gyn.js";async function F(e,t){return await T(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function T(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const n={width:i.width,height:i.height,ratio:i.width/i.height};t(n)},i.onerror=n=>r(n),i.src=e})}function j(e){return t=>t?e[t]||t:e.missingValue}function G({formatter:e,keyMap:t,joinWith:r="/",valueMap:i}={}){e||(e=(o,s)=>`${o}=${s}`),t&&typeof t!="function"&&(t=j(t));const n=i||{};return Object.keys(n).forEach(o=>{typeof n[o]!="function"&&(n[o]=j(n[o]))}),(o={})=>Object.entries(o).filter(([d,c])=>typeof c<"u").map(([d,c])=>{const l=n[d];return typeof l=="function"&&(c=l(o[d])),d=typeof t=="function"?t(d):d,e(d,c)}).join(r)}function g(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function V(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const r of e.split(" ")){const i=Number.parseInt(r.replace("x",""));i&&t.add(i)}return Array.from(t)}function J(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function Y(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(i=>i)){const i=r.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function Q(e){const t={options:e},r=(n,o={})=>A(t,n,o),i=(n,o={},s={})=>r(n,{...s,modifiers:O(o,s.modifiers||{})}).url;for(const n in e.presets)i[n]=(o,s,d)=>i(o,s,{...e.presets[n],...d});return i.options=e,i.getImage=r,i.getMeta=(n,o)=>X(t,n,o),i.getSizes=(n,o)=>ee(t,n,o),t.$img=i,i}async function X(e,t,r){const i=A(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await F(e,i.url)}function A(e,t,r){var l,h;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:i,defaults:n}=Z(e,r.provider||e.options.provider),o=K(e,r.preset);if(t=$(t)?t:R(t),!i.supportsAlias)for(const m in e.options.alias)t.startsWith(m)&&(t=S(e.options.alias[m],t.substr(m.length)));if(i.validateDomains&&$(t)){const m=L(t).host;if(!e.options.domains.find(w=>w===m))return{url:t}}const s=O(r,o,n);s.modifiers={...s.modifiers};const d=s.modifiers.format;(l=s.modifiers)!=null&&l.width&&(s.modifiers.width=g(s.modifiers.width)),(h=s.modifiers)!=null&&h.height&&(s.modifiers.height=g(s.modifiers.height));const c=i.getImage(t,s,e);return c.format=c.format||d||"",c}function Z(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function K(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function ee(e,t,r){var f,b,_,z,x;const i=g((f=r.modifiers)==null?void 0:f.width),n=g((b=r.modifiers)==null?void 0:b.height),o=Y(r.sizes),s=(_=r.densities)!=null&&_.trim()?V(r.densities.trim()):e.options.densities;J(s);const d=i&&n?n/i:0,c=[],l=[];if(Object.keys(o).length>=1){for(const u in o){const v=M(u,String(o[u]),n,d,e);if(v!==void 0){c.push({size:v.size,screenMaxWidth:v.screenMaxWidth,media:`(max-width: ${v.screenMaxWidth}px)`});for(const y of s)l.push({width:v._cWidth*y,src:N(e,t,r,v,y)})}}te(c)}else for(const u of s){const v=Object.keys(o)[0];let y=M(v,String(o[v]),n,d,e);y===void 0&&(y={size:"",screenMaxWidth:0,_cWidth:(z=r.modifiers)==null?void 0:z.width,_cHeight:(x=r.modifiers)==null?void 0:x.height}),l.push({width:u,src:N(e,t,r,y,u)})}ie(l);const h=l[l.length-1],m=c.length?c.map(u=>`${u.media?u.media+" ":""}${u.size}`).join(", "):void 0,w=m?"w":"x",a=l.map(u=>`${u.src} ${u.width}${w}`).join(", ");return{sizes:m,srcset:a,src:h==null?void 0:h.src}}function M(e,t,r,i,n){const o=n.options.screens&&n.options.screens[e]||Number.parseInt(e),s=t.endsWith("vw");if(!s&&/^\d+$/.test(t)&&(t=t+"px"),!s&&!t.endsWith("px"))return;let d=Number.parseInt(t);if(!o||!d)return;s&&(d=Math.round(d/100*o));const c=i?Math.round(d*i):r;return{size:t,screenMaxWidth:o,_cWidth:d,_cHeight:c}}function N(e,t,r,i,n){return e.$img(t,{...r.modifiers,width:i._cWidth?i._cWidth*n:void 0,height:i._cHeight?i._cHeight*n:void 0},r)}function te(e){var r;e.sort((i,n)=>i.screenMaxWidth-n.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const n=e[i];n.media===t&&e.splice(i,1),t=n.media}for(let i=0;i<e.length;i++)e[i].media=((r=e[i+1])==null?void 0:r.media)||""}function ie(e){e.sort((r,i)=>r.width-i.width);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.width===t&&e.splice(r,1),t=i.width}}const re=G({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>I(e)+"_"+I(t)}),ne=(e,{modifiers:t={},baseURL:r}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const n=re(t)||"_";return r||(r=S(i.options.nuxt.baseURL,"/_ipx")),{url:S(r,n,U(e))}},oe=!0,se=!0,ae=Object.freeze(Object.defineProperty({__proto__:null,getImage:ne,supportsAlias:se,validateDomains:oe},Symbol.toStringTag,{value:"Module"})),E={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};E.providers={ipxStatic:{provider:ae,defaults:{}}};const H=()=>{const e=k(),t=P();return t.$img||t._img||(t._img=Q({...E,nuxt:{baseURL:e.app.baseURL}}))};function de(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const ce={src:{type:String,default:void 0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:[Boolean,Object],default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},le=e=>{const t=p(()=>({provider:e.provider,preset:e.preset})),r=p(()=>({width:g(e.width),height:g(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=H(),n=p(()=>({...e.modifiers,width:g(e.width),height:g(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:n}},ue={...ce,placeholder:{type:[Boolean,String,Number,Array],default:void 0},placeholderClass:{type:String,default:void 0}},he=B({name:"NuxtImg",props:ue,emits:["load","error"],setup:(e,t)=>{const r=H(),i=le(e),n=W(!1),o=W(),s=p(()=>r.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:g(e.width),height:g(e.height)}})),d=p(()=>{const a={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||n.value)&&(a.sizes=s.value.sizes,a.srcset=s.value.srcset),a}),c=p(()=>{let a=e.placeholder;if(a===""&&(a=!0),!a||n.value)return!1;if(typeof a=="string")return a;const f=Array.isArray(a)?a:typeof a=="number"?[a,a]:[10,10];return r(e.src,{...i.modifiers.value,width:f[0],height:f[1],quality:f[2]||50,blur:f[3]||3},i.options.value)}),l=p(()=>e.sizes?s.value.src:r(e.src,i.modifiers.value,i.options.value)),h=p(()=>c.value?c.value:l.value);if(e.preload){const a=Object.values(s.value).every(f=>f);q({link:[{rel:"preload",as:"image",nonce:e.nonce,...a?{href:s.value.src,imagesizes:s.value.sizes,imagesrcset:s.value.srcset}:{href:h.value},...typeof e.preload!="boolean"&&e.preload.fetchPriority?{fetchpriority:e.preload.fetchPriority}:{}}]})}const w=P().isHydrating;return D(()=>{if(c.value){const a=new Image;a.src=l.value,e.sizes&&(a.sizes=s.value.sizes||"",a.srcset=s.value.srcset),a.onload=f=>{n.value=!0,t.emit("load",f)},de("nuxt-image");return}o.value&&(o.value.complete&&w&&(o.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),o.value.onload=a=>{t.emit("load",a)},o.value.onerror=a=>{t.emit("error",a)})}),()=>C("img",{ref:o,...d.value,...t.attrs,class:e.placeholder&&!n.value?[e.placeholderClass]:void 0,src:h.value})}});export{he as _};
