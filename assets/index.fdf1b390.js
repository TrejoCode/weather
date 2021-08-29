var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,o=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&l(e,r,t[r]);if(a)for(var r of a(t))c.call(t,r)&&l(e,r,t[r]);return e},s=(e,a)=>t(e,r(a));import{c as i,a as m,t as d,b as u,u as E,r as p,R as h,S as y,P as g,d as _,E as f,e as v,f as N,g as w}from"./vendor.5a5c54f9.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const b={weather:!1,loading:!1,error:!1},T=i(((e=b,{payload:t,type:r})=>{switch(r){case"GET_WEATHER_REQUEST":return s(o({},e),{error:!1,loading:!0});case"GET_WEATHER_SUCCESS":return s(o({},e),{weather:t,error:!1,loading:!1});case"GET_WEATHER_ERROR":return s(o({},e),{payload:!1,loading:!1,error:t});default:return e}}),m(d)),S=e=>async t=>{t({type:"GET_WEATHER_REQUEST"});try{const{data:r,error:a}=await(async e=>{try{const{data:t}=await u.get(`http://api.weatherstack.com${e}`,{});return{data:t}}catch(a){return a.response?{error:a.response.data}:"Network Error"===a.message?{error:"Sin conexión al servidor"}:{error:a.message}}})(`/current?access_key=c7a267ee85d7df095a7c478ab0a8b82e&query=${e}`);if(a||(null==r?void 0:r.error))throw a;t({type:"GET_WEATHER_SUCCESS",payload:r})}catch(r){t({type:"GET_WEATHER_ERROR",payload:"Sorry we can't find it, try another city"})}},R=()=>{const e=E(),[t,r]=p.exports.useState(!1);return h.createElement("div",{className:"__search"},h.createElement("form",{className:"__input__container align-center",onSubmit:r=>{r.preventDefault(),e(S(t))}},h.createElement("button",{className:"__button",type:"submit"},h.createElement(y,{width:"1rem","aria-hidden":!0,focusable:!1}),h.createElement("span",{className:"hidden"},"Search button")),h.createElement("label",{htmlFor:"search",className:"hidden"},"Search a city"),h.createElement("input",{id:"search",type:"text",placeholder:"Search a city",name:"search",className:"__input",onChange:e=>r(e.currentTarget.value)})))},O=({data:e,loading:t})=>{var r,a,n,c;return h.createElement("div",{className:"__current full column justify-center align-center"},h.createElement("div",{className:"__image responsive-img"},t?h.createElement(_,{circle:!0,height:50,width:50}):h.createElement("img",{src:null==(r=null==e?void 0:e.current)?void 0:r.weather_icons[0],alt:"Icono del clima actual"})),h.createElement("div",{className:"__temperature"},h.createElement("h2",{className:"font-large text-center"},t&&h.createElement(_,{height:"2rem",width:"120px"}),null==(a=null==e?void 0:e.current)?void 0:a.temperature," ",h.createElement("span",{className:"weight-medium"},"°C"))),h.createElement("div",{className:"__location"},t&&h.createElement(_,{height:"2rem",width:"120px"}),h.createElement("h3",{className:"text-center"},null==(n=null==e?void 0:e.location)?void 0:n.name)),h.createElement("div",{className:"__description"},h.createElement("p",{className:"weight-medium text-center"},t&&h.createElement(_,{height:"2rem",width:"120px"}),null==(c=null==e?void 0:e.current)?void 0:c.weather_descriptions[0])))};O.propTypes={data:g.oneOfType([g.object,g.bool]).isRequired,error:g.oneOfType([g.string,g.bool])};const j=({error:e})=>h.createElement("div",{className:"__error column"},h.createElement(f,{height:"2rem"}),h.createElement("h3",null,e));j.propTypes={error:g.string.isRequired};const x=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],W=({data:e,loading:t})=>null==x?void 0:x.map(((r,a)=>{var n,c;return h.createElement("div",{className:"__card column justify-center align-center",key:a},h.createElement("div",{className:"__day"},h.createElement("p",{className:"weight-medium text-center"},r)),h.createElement("div",{className:"__image responsive-img"},t?h.createElement(_,{circle:!0,height:50,width:50}):h.createElement("img",{src:null==(n=null==e?void 0:e.current)?void 0:n.weather_icons[0],alt:"Icono del clima actual"})),h.createElement("div",{className:"__temperature"},h.createElement("p",{className:"text-center"},t&&h.createElement(_,{height:"1.5rem",width:"2rem"}),h.createElement("span",{className:"weight-bold"},null==(c=null==e?void 0:e.current)?void 0:c.temperature),"°C")))}));W.propTypes={data:g.oneOfType([g.object,g.bool]).isRequired};const k=()=>{const e=E(),t=v((e=>e.weather)),r=v((e=>e.error)),a=v((e=>e.loading));return p.exports.useEffect((()=>{e(S("cancun"))}),[e]),h.createElement("div",{className:"home justify-center align-center"},h.createElement("div",{className:"wrapper row-responsive"},h.createElement("aside",{className:"column"},h.createElement(R,null),h.createElement(O,{data:t,error:r,loading:a})),h.createElement("div",{className:"__content column"},h.createElement("nav",null,h.createElement("ul",null,h.createElement("li",{className:"color-primary weight-semi"},"This Week"))),h.createElement("main",{className:"column"},h.createElement("div",{className:"__cards__container justify-center align-center wrap"},r?h.createElement(j,{error:r}):h.createElement(W,{data:t,loading:a}))))))},A=()=>h.createElement(N,{store:T},h.createElement(k,null));w.render(h.createElement(h.StrictMode,null,h.createElement(A,null)),document.getElementById("root"));