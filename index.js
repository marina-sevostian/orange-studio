import"./assets/vendor-BUbapj32.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".menu-header");console.log(r);const s=document.querySelector(".menu-list");console.log(s),r.addEventListener("click",()=>{s.style.display==="block"?s.style.display="none":s.style.display="block"})});const l=document.querySelectorAll(".menu-list a");l.forEach(r=>{r.addEventListener("click",()=>{menu.style.display="none"})});const c="https://portfolio-js.b.goit.study/api/reviews",a=document.querySelector(".reviews-list");async function u(r=c,s={}){const o=await fetch(r,s);if(!o.ok)throw new Error(o.statusText);return await o.json()}u(url=c).then(r=>a.insertAdjacentHTML("beforeend",d)).catch(r=>console.log(r));function d(r){return r.map(({_id:s,avatar_URL:o,name:i,author:e,review:t})=>`
    <ul class="reviews-list swiper-wrapper">
      <li data-id="${s}" class="reviews-item swiper-slide">
        <img class="avatar-image"
          src="${o}"
          alt="${i}"
          width="48"
        />
        <h3 class="reviews-subtitle">${e}</h3>
        <p class="reviews-text">${t}</p>
      </li>
    </ul> `).join("")}
//# sourceMappingURL=index.js.map
