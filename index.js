import{S as p,N as v,P as L,A as b,i as u,a as g}from"./assets/vendor-Lbuq5iAk.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".menu-header"),s=document.querySelector(".menu-list");s.style.display="none",e.addEventListener("click",()=>{s.style.display==="block"?s.style.display="none":s.style.display="block"}),document.querySelectorAll(".menu-list a").forEach(o=>{o.addEventListener("click",t=>{t.preventDefault(),s.style.display="none";const n=o.getAttribute("href").slice(1),i=document.getElementById(n);i&&i.scrollIntoView({behavior:"smooth",block:"start"})})})});const w=document.querySelector("[data-menu-open]"),E=document.querySelector("[data-menu-close]"),f=document.querySelector("[data-menu]");w.addEventListener("click",h);E.addEventListener("click",h);function h(){f.classList.toggle("is-open")}document.querySelector(".menu-list-mobile");const q=document.querySelectorAll(".menu-list-mobile a");q.forEach(e=>{e.addEventListener("click",()=>{f.classList.remove("is-open")})});const S=document.querySelector(".button-header-mobile");S.addEventListener("click",()=>{f.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".accordion-item");e.forEach((s,r)=>{const o=s.querySelector(".accordion-trigger"),t=s.querySelector(".accordion-content");r===0&&(s.classList.add("open"),t.style.maxHeight=t.scrollHeight+"px"),o.addEventListener("click",()=>{const n=s.classList.contains("open");e.forEach(i=>{i.classList.remove("open"),i.querySelector(".accordion-content").style.maxHeight=0}),n?t.style.maxHeight=0:(s.classList.add("open"),t.style.maxHeight=t.scrollHeight+"px")})})});document.addEventListener("DOMContentLoaded",()=>{new p(".swiper-about",{slidesPerView:2,modules:[v,L],navigation:{nextEl:".swiper-button-next-2"},loop:!0,watchOverflow:!1,pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,loopFillGroupWithBlank:!0,breakpoints:{640:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}})});document.addEventListener("DOMContentLoaded",()=>{new p(".swiper-projects",{watchOverflow:!1,loop:!1,direction:"horizontal",simulateTouch:!0,grabCursor:!0,slidesPerView:1,speed:1e3,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".button-next",prevEl:".button-prev"}})});new b(".faq-list",{duration:500,showMultiple:!1});const x=document.querySelectorAll(".faq-button");x.forEach(e=>{e.addEventListener("click",()=>{const r=e.closest(".faq-item").querySelector(".faq-answer"),o=e.classList.contains("active");document.querySelectorAll(".faq-answer").forEach(t=>{t.style.maxHeight=null,t.style.opacity="0",t.style.transition="opacity 0.3s ease, max-height 0.5s ease"}),document.querySelectorAll(".faq-button").forEach(t=>{t.classList.remove("active")}),o||(r.style.maxHeight=r.scrollHeight+"px",r.style.opacity="1",r.style.transition="opacity 0.5s ease, max-height 0.5s ease",e.classList.add("active"))})});const m=document.querySelectorAll(".marquee__line"),B=document.querySelector("#covers");m.forEach(e=>e.classList.add("paused"));const k={root:null,rootMargin:"0px",threshold:.25},A=new IntersectionObserver(C,k);function C(e,s){e.forEach(r=>{r.isIntersecting?m.forEach(o=>o.classList.remove("paused")):m.forEach(o=>o.classList.add("paused"))})}A.observe(B);const P="https://portfolio-js.b.goit.study/api/reviews",O=document.querySelector(".reviews-list");async function F(e){return(await g.get(e)).data}function I(e){return e.map(({_id:s,avatar_url:r,author:o,review:t})=>`
    <li data-id="${s}" class="reviews-item swiper-slide">
      <img class="avatar-image" 
        src="${r}" 
        alt="${o}" 
        width="48" 
      />
      <h3 class="reviews-subtitle">${o}</h3>
      <p class="reviews-text">${t}</p>
    </li>
  `).join("")}const c=new p(".swiper",{loop:!1,direction:"horizontal",simulateTouch:!0,grabCursor:!0,spaceBetween:16,slidesPerView:1,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".swiper-button-next-rev",prevEl:".swiper-button-prev-rev"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}});F(P).then(e=>{O.insertAdjacentHTML("beforeend",I(e)),c.update()}).catch(e=>{u.error({title:"Error",message:"Not found",position:"bottomRight"}),console.error(e.message)});c.on("slideChange",()=>{const e=document.querySelector(".swiper-button-prev"),s=document.querySelector(".swiper-button-next");c.isBeginning?(e.disabled=!0,e.classList.add("disabled")):(e.disabled=!1,e.classList.remove("disabled")),c.isEnd?(s.disabled=!0,s.classList.add("disabled")):(s.disabled=!1,s.classList.remove("disabled"))});const a=document.querySelector(".footer-js-submit-form"),d=document.querySelector(".check-inv"),y=document.querySelector(".check-succ"),l=document.querySelector("[data-modal]"),M=document.querySelector(".response-title"),V=document.querySelector(".response-message");document.querySelector("[data-modal-close]");const H="https://portfolio-js.b.goit.study/api/requests";a.addEventListener("submit",j);async function $(e,s){return(await g(e,s)).data}async function j(e){e.preventDefault();const s=e.target.elements.email.value.trim(),r=e.target.elements.comment.value.trim();if(s)if(r)d.classList.add("visually-hidden"),y.classList.remove("visually-hidden"),a[0].style.borderBottom="2px solid  #3CBC81";else{u.show({message:"Please, fill the comments field.",backgroundColor:"#EF4040",messageColor:"#FAFAFB",position:"topRight",progressBarColor:"#FFBEBE"});return}else{d.classList.remove("visually-hidden"),a[0].style.borderBottom="2px solid  #E74A3B";return}try{const o=await $(H,{method:"POST",data:{email:`${s}`,comment:`${r}`}});d.classList.add("visually-hidden"),M.textContent=`${o.title}`,V.textContent=`${o.message}`,l.classList.add("is-open")}catch(o){u.show({message:o.message,backgroundColor:"#EF4040",messageColor:"#FAFAFB",position:"topRight",progressBarColor:"#FFBEBE"})}finally{a.reset(),a[0].style.borderBottom="2px solid  #ccc",y.classList.add("visually-hidden")}}function D(e){(e.target.classList.contains("svg-close")||e.target.classList.contains("svg-use")||e.currentTarget===l&&e.target===l)&&l.classList.remove("is-open")}l.addEventListener("click",D);
//# sourceMappingURL=index.js.map
