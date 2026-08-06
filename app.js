/* =====================================
   RAZHPOINT V2
===================================== */

console.log("RAZHPOINT Loaded");

/* ===========================
NAVBAR
=========================== */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.background="rgba(5,15,10,.95)";
header.style.boxShadow="0 15px 40px rgba(0,0,0,.4)";

}else{

header.style.background="rgba(10,20,15,.88)";
header.style.boxShadow="none";

}

});

/* ===========================
BUTTON
=========================== */

document.querySelectorAll(".buy-btn").forEach(button=>{

button.addEventListener("click",(e)=>{

e.preventDefault();

alert("Fitur Detail Akun akan tersedia di RAZHPOINT V3.");

});

});

/* ===========================
LOGIN
=========================== */

const login=document.querySelector(".login-btn");

if(login){

login.onclick=(e)=>{

e.preventDefault();

alert("Login akan dihubungkan ke Firebase.");

}

/* ===========================
ANIMATION
=========================== */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".category-card,.product-card,.seller-box").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition=".7s";

observer.observe(el);

});

  /* ===========================
SEARCH
=========================== */

const search=document.querySelector(".search");

if(search){

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

document.querySelectorAll(".product-card").forEach(card=>{

const text=card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}
/* ===========================
WELCOME
=========================== */

setTimeout(()=>{

console.log("Selamat datang di RAZHPOINT");

},1000);

/* ===========================
COPYRIGHT
=========================== */

console.log("© RAZHPOINT 2026");

/* ===========================
END
=========================== */
