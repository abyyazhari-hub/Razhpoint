/* ===========================================
   RAZHPOINT V2
   APP.JS PART 1
=========================================== */

console.log("RAZHPOINT V2 Loaded");

/* ==========================
LOADER
========================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

setTimeout(()=>{

const loader=document.getElementById("loader");

if(loader){

loader.remove();

}

},500);

});

/* ==========================
HEADER
========================== */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.style.background="rgba(8,12,18,.95)";

header.style.boxShadow="0 15px 40px rgba(0,0,0,.35)";

}else{

header.style.background="rgba(10,13,18,.85)";

header.style.boxShadow="none";

}

});

/* ==========================
SMOOTH BUTTON
========================== */

document.querySelectorAll("a[href^='#']").forEach(link=>{

link.onclick=function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

}

});

/* ==========================
SEARCH
========================== */

const search=document.getElementById("search");

if(search){

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

document.querySelectorAll(".product-card").forEach(card=>{

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"block":"none";

});

});

}

/* ==========================
BUY BUTTON
========================== */

document.querySelectorAll(".buy-btn").forEach(btn=>{

btn.addEventListener("click",(e)=>{

if(btn.tagName==="A"){

e.preventDefault();

}

alert("Fitur pembelian akan segera tersedia.");

});

});

/* ==========================
SCROLL TO TOP
========================== */

const topBtn=document.createElement("div");

topBtn.id="scrollTop";

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ==========================
ANIMATION
========================== */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".product-card,.category-card,.seller-box,.faq-item").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition=".7s";

observer.observe(el);

});

/* ==========================
BANNER AUTO SLIDE
========================== */

const banners=document.querySelectorAll(".banner-item");

let current=0;

if(banners.length){

setInterval(()=>{

banners[current].classList.remove("active");

current++;

if(current>=banners.length){

current=0;

}

banners[current].classList.add("active");

},4000);

}

/* ==========================
LOGIN
========================== */

const login=document.querySelector(".login-btn");

if(login){

login.onclick=()=>{

alert("Login Firebase akan ditambahkan pada versi berikutnya.");

};

}

/* ==========================
END
========================== */

console.log("RAZHPOINT Ready 🚀");
