import{S as a,a as d}from"./assets/vendor-DAb5okyw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".menu-header"),t=document.querySelector(".menu-list");t.style.display="none",e.addEventListener("click",()=>{t.style.display==="block"?t.style.display="none":t.style.display="block"})});const u=document.querySelectorAll(".menu-list a");u.forEach(e=>{e.addEventListener("click",()=>{menu.style.display="none"})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".accordion-item");e.forEach((t,i)=>{const n=t.querySelector(".accordion-trigger");i===0&&t.classList.add("open"),n.addEventListener("click",()=>{const s=t.classList.contains("open");e.forEach(r=>r.classList.remove("open")),s||t.classList.add("open")})})});const p="https://portfolio-js.b.goit.study/api/reviews",l=document.querySelector(".reviews-list");async function f(e){return(await d.get(e)).data}function m(e){return e.map(({_id:t,avatar_url:i,author:n,review:s})=>`
    <li data-id="${t}" class="reviews-item swiper-slide">
      <img class="avatar-image" 
        src="${i}" 
        alt="${n}" 
        width="48" 
      />
      <h3 class="reviews-subtitle">${n}</h3>
      <p class="reviews-text">${s}</p>
    </li>
  `).join("")}const o=new a(".swiper",{loop:!1,direction:"horizontal",simulateTouch:!0,grabCursor:!0,spaceBetween:16,slidesPerView:1,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}});f(p).then(e=>{if(!e.length){l.innerHTML="<p>Not found</p>";return}l.insertAdjacentHTML("beforeend",m(e)),o.update()}).catch(e=>{l.innerHTML="<p>Not found</p>",alert(`Error: ${e.message}`)});o.on("slideChange",()=>{const e=document.querySelector(".swiper-button-prev"),t=document.querySelector(".swiper-button-next");o.isBeginning?(e.disabled=!0,e.classList.add("disabled")):(e.disabled=!1,e.classList.remove("disabled")),o.isEnd?(t.disabled=!0,t.classList.add("disabled")):(t.disabled=!1,t.classList.remove("disabled"))});
//# sourceMappingURL=index.js.map
