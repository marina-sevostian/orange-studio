import"./assets/vendor-BUbapj32.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".menu-header");console.log(s);const t=document.querySelector(".menu-list");console.log(t),s.addEventListener("click",()=>{t.style.display==="block"?t.style.display="none":t.style.display="block"})});const l=document.querySelectorAll(".menu-list a");l.forEach(s=>{s.addEventListener("click",()=>{menu.style.display="none"})});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll(".accordion-item");s.forEach((t,o)=>{const n=t.querySelector(".accordion-trigger");o===0&&t.classList.add("open"),n.addEventListener("click",()=>{const e=t.classList.contains("open");s.forEach(r=>r.classList.remove("open")),e||t.classList.add("open")})})});const c="https://portfolio-js.b.goit.study/api/reviews",a=document.querySelector(".reviews-list");async function d(s=c,t={}){const o=await fetch(s,t);if(!o.ok)throw new Error(o.statusText);return await o.json()}d(url=c).then(s=>a.insertAdjacentHTML("beforeend",u)).catch(s=>console.log(s));function u(s){return s.map(({_id:t,avatar_URL:o,name:n,author:e,review:r})=>`
    <ul class="reviews-list swiper-wrapper">
      <li data-id="${t}" class="reviews-item swiper-slide">
        <img class="avatar-image"
          src="${o}"
          alt="${n}"
          width="48"
        />
        <h3 class="reviews-subtitle">${e}</h3>
        <p class="reviews-text">${r}</p>
      </li>
    </ul> `).join("")}
//# sourceMappingURL=index.js.map
