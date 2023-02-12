(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const g=[{emotionTags:["moody"],isGif:!1,image:"angry.jpeg",alt:"A cat looking moody"},{emotionTags:["moody","insomniac"],isGif:!1,image:"angry2.jpeg",alt:"A cat looking moody"},{emotionTags:["moody"],isGif:!1,image:"angry3.jpeg",alt:"A cat looking moody"},{emotionTags:["confused","sad"],isGif:!1,image:"confused.jpeg",alt:"A cat looking confused"},{emotionTags:["dominant","moody"],isGif:!1,image:"dominant.jpeg",alt:"A cat looking dominant"},{emotionTags:["happy","relaxed"],isGif:!1,image:"happy.jpeg",alt:"A cat looking happy"},{emotionTags:["hungry"],isGif:!1,image:"hungry.jpeg",alt:"A cat looking hungry"},{emotionTags:["hungry"],isGif:!1,image:"hungry1.jpeg",alt:"A cat looking hungry"},{emotionTags:["insomniac"],isGif:!1,image:"insomnia.jpeg",alt:"A cat looking insomniac"},{emotionTags:["insomniac"],isGif:!1,image:"insomnia1.jpeg",alt:"A cat looking insomniac"},{emotionTags:["relaxed"],isGif:!1,image:"lazy.jpeg",alt:"A cat looking lazy"},{emotionTags:["scared"],isGif:!1,image:"nervous.jpeg",alt:"A cat looking nervous"},{emotionTags:["sad"],isGif:!1,image:"sad.jpeg",alt:"A cat looking sad"},{emotionTags:["sad","moody"],isGif:!1,image:"sad1.jpeg",alt:"A cat looking sad"},{emotionTags:["moody"],isGif:!0,image:"angry.gif",alt:"A cat looking moody"},{emotionTags:["moody"],isGif:!0,image:"angry2.gif",alt:"A cat looking angry"},{emotionTags:["confused"],isGif:!0,image:"confused2.gif",alt:"A cat looking confused"},{emotionTags:["dominant"],isGif:!0,image:"dominant.gif",alt:"A cat looking dominant"},{emotionTags:["happy"],isGif:!0,image:"happy.gif",alt:"A cat looking happy"},{emotionTags:["hungry","sad","confused"],isGif:!0,image:"confused.gif",alt:"A cat looking hungry"},{emotionTags:["hungry"],isGif:!0,image:"hungry.gif",alt:"A cat looking hungry"},{emotionTags:["hungry"],isGif:!0,image:"hungry2.gif",alt:"A cat looking hungry"},{emotionTags:["insomniac","scared"],isGif:!0,image:"insomnia2.gif",alt:"A cat looking insomniac"},{emotionTags:["relaxed"],isGif:!0,image:"lazy.gif",alt:"A cat looking relaxed"},{emotionTags:["relaxed"],isGif:!0,image:"relaxed2.gif",alt:"A cat looking relaxed"},{emotionTags:["scared","sad"],isGif:!0,image:"nervous.gif",alt:"A cat looking nervous"},{emotionTags:["scared"],isGif:!0,image:"nervous2.gif",alt:"A cat looking scared"},{emotionTags:["sad"],isGif:!0,image:"sad.gif",alt:"A cat looking sad"}],l=document.getElementById("emotion-radios"),m=document.getElementById("get-image-btn"),c=document.getElementById("gifs-only-option"),d=document.getElementById("meme-modal-inner"),r=document.getElementById("meme-modal"),f=document.getElementById("meme-modal-close-btn");l.addEventListener("change",u);f.addEventListener("click",function(){r.style.display="none"});m.addEventListener("click",y);function u(e){const i=document.getElementsByClassName("radio");for(let a of i)a.classList.remove("highlight");document.getElementById(e.target.id).parentElement.classList.add("highlight")}function y(){const e=h();d.innerHTML=`
        <img 
        class="cat-img" 
        src="./images/${e.image}"
        alt="${e.alt}"
        >
        `,r.style.display="flex"}function h(){const e=p();return e.length===1?e[0]:e[Math.floor(Math.random()*e.length)]}function p(){const e=document.querySelector('input[type="radio"]:checked');if(e){const i=c.checked;return g.filter(function(t){return i?t.emotionTags.includes(e.value)&&t.isGif:t.emotionTags.includes(e.value)})}}function A(e){const i=[];for(let a of e)for(let t of a.emotionTags)i.includes(t)||i.push(t);return i}function k(e){let i="";const a=A(e);for(let t of a)i+=`
        <div class="radio">
            <label for="${t}">${t}</label>
            <input
                type="radio"
                id="${t}"
                value="${t}"
                name="choice-emotion"
            >
        </div>
        `;l.innerHTML=i}console.log(k(g));