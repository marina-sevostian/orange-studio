import{S as y,N as L,P as w,A as b,a as f,i as m}from"./assets/vendor-Lbuq5iAk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".menu-header"),t=document.querySelector(".menu-list");t.style.display="none",e.addEventListener("click",()=>{t.style.display==="block"?t.style.display="none":t.style.display="block"}),document.querySelectorAll(".menu-list a").forEach(o=>{o.addEventListener("click",()=>{t.style.display="none"})})});const q=document.querySelector("[data-menu-open]"),E=document.querySelector("[data-menu-close]"),g=document.querySelector("[data-menu]");q.addEventListener("click",v);E.addEventListener("click",v);function v(){g.classList.toggle("is-open")}document.querySelector(".menu-list-mobile");const S=document.querySelectorAll(".menu-list-mobile a");S.forEach(e=>{e.addEventListener("click",()=>{g.classList.remove("is-open")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".accordion-item");e.forEach((t,i)=>{const o=t.querySelector(".accordion-trigger"),s=t.querySelector(".accordion-icon");i===0&&(t.classList.add("open"),s.classList.add("active")),o.addEventListener("click",()=>{const n=t.classList.contains("open");e.forEach(r=>{r.classList.remove("open");const u=r.querySelector(".accordion-icon");r.querySelector(".accordion-icon svg"),u&&u.classList.remove("active")}),n||(t.classList.add("open"),s.classList.add("active"))})})});document.addEventListener("DOMContentLoaded",()=>{new y(".swiper-about",{slidesPerView:2,modules:[L,w],navigation:{nextEl:".swiper-button-next-2"},loop:!0,watchOverflow:!1,pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,loopFillGroupWithBlank:!0,breakpoints:{640:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}})});new b(".faq-list",{duration:500,showMultiple:!1});const B=document.querySelectorAll(".faq-button");B.forEach(e=>{e.addEventListener("click",()=>{const i=e.closest(".faq-item").querySelector(".faq-answer"),o=e.classList.contains("active");document.querySelectorAll(".faq-answer").forEach(s=>{s.style.maxHeight=null,s.style.opacity="0",s.style.transition="opacity 0.3s ease, max-height 0.5s ease"}),document.querySelectorAll(".faq-button").forEach(s=>{s.classList.remove("active")}),o||(i.style.maxHeight=i.scrollHeight+"px",i.style.opacity="1",i.style.transition="opacity 0.5s ease, max-height 0.5s ease",e.classList.add("active"))})});const k="https://portfolio-js.b.goit.study/api/reviews",c=document.querySelector(".reviews-list");async function x(e){return(await f.get(e)).data}function A(e){return e.map(({_id:t,avatar_url:i,author:o,review:s})=>`
    <li data-id="${t}" class="reviews-item swiper-slide">
      <img class="avatar-image" 
        src="${i}" 
        alt="${o}" 
        width="48" 
      />
      <h3 class="reviews-subtitle">${o}</h3>
      <p class="reviews-text">${s}</p>
    </li>
  `).join("")}const l=new y(".swiper",{loop:!1,direction:"horizontal",simulateTouch:!0,grabCursor:!0,spaceBetween:16,slidesPerView:1,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}});x(k).then(e=>{if(!e.length){c.innerHTML="<p>Not found</p>";return}c.insertAdjacentHTML("beforeend",A(e)),l.update()}).catch(e=>{c.innerHTML="<p>Not found</p>",alert(`Error: ${e.message}`)});l.on("slideChange",()=>{const e=document.querySelector(".swiper-button-prev"),t=document.querySelector(".swiper-button-next");l.isBeginning?(e.disabled=!0,e.classList.add("disabled")):(e.disabled=!1,e.classList.remove("disabled")),l.isEnd?(t.disabled=!0,t.classList.add("disabled")):(t.disabled=!1,t.classList.remove("disabled"))});const a=document.querySelector(".footer-js-submit-form"),d=document.querySelector(".check-inv"),p=document.querySelector(".check-succ"),h=document.querySelector("[data-modal]"),C=document.querySelector(".response-title"),P=document.querySelector(".response-message"),F=document.querySelector("[data-modal-close]"),M="https://portfolio-js.b.goit.study/api/requests";a.addEventListener("submit",$);async function O(e,t){return(await f(e,t)).data}async function $(e){e.preventDefault();const t=e.target.elements.email.value.trim(),i=e.target.elements.comment.value.trim();if(t)d.classList.add("visually-hidden"),p.classList.remove("visually-hidden"),a[0].style.borderBottom="2px solid  #3CBC81";else{d.classList.remove("visually-hidden"),a[0].style.borderBottom="2px solid  #E74A3B";return}if(!i){m.show({message:"Please, fill the comments field.",backgroundColor:"#EF4040",messageColor:"#FAFAFB",position:"topRight",progressBarColor:"#FFBEBE"});return}try{const o=await O(M,{method:"POST",data:{email:`${t}`,comment:`${i}`}});d.classList.add("visually-hidden"),C.textContent=`${o.title}`,P.textContent=`${o.message}`,h.classList.toggle("is-open")}catch(o){m.show({message:o.message,backgroundColor:"#EF4040",messageColor:"#FAFAFB",position:"topRight",progressBarColor:"#FFBEBE"})}finally{a.reset(),a[0].style.borderBottom="2px solid  #ccc",p.classList.add("visually-hidden")}}F.addEventListener("click",V);function V(e){h.classList.toggle("is-open")}
//# sourceMappingURL=index.js.map
