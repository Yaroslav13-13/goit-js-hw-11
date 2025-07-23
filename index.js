import{a as d,S as f,i}from"./assets/vendor-5YrzWRhu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="51453330-23ef603bbdd92dbcc1cebb640",m="https://pixabay.com/api/";async function y(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(m,{params:o})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new f(".gallery a");function g(s){const o=s.map(t=>`
        <li class="gallery-item">
          <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${t.likes}</p>
            <p><b>Views:</b> ${t.views}</p>
            <p><b>Comments:</b> ${t.comments}</p>
            <p><b>Downloads:</b> ${t.downloads}</p>
          </div>
        </li>`).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){c.innerHTML=""}function L(){l.classList.add("is-visible")}function v(){l.classList.remove("is-visible")}const u=document.querySelector(".form"),w=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async s=>{s.preventDefault();const o=w.value.trim();if(!o){i.warning({message:"Please enter a search term",position:"topRight"});return}b(),L();try{const t=await y(o);t.hits.length===0?i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):g(t.hits)}catch{i.error({message:"An error occurred. Please try again later.",position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
