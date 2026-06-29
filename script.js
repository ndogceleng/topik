/* ============================
   COUNTER ANIMATION
============================ */

const counters = document.querySelectorAll(".counter");

const runCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 100;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

    });

};

/* ============================
   SCROLL REVEAL
============================ */

const reveals = document.querySelectorAll(".reveal");

function revealSection(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;

        const top = section.getBoundingClientRect().top;

        if(top < windowHeight - 120){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSection);

/* ============================
   START COUNTER
============================ */

let started = false;

window.addEventListener("scroll",()=>{

    const stats = document.querySelector(".stats");

    const top = stats.getBoundingClientRect().top;

    if(top < window.innerHeight && !started){

        runCounter();

        started = true;

    }

});

/* ============================
   NAVBAR EFFECT
============================ */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.background="rgba(5,8,22,.85)";

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

        header.style.padding="15px 40px";

    }else{

        header.style.background="rgba(255,255,255,.08)";

        header.style.boxShadow="none";

        header.style.padding="18px 40px";

    }

});

/* ============================
   PARALLAX BLUR
============================ */

window.addEventListener("mousemove",(e)=>{

    const blur = document.querySelectorAll(".blur");

    blur.forEach((item,index)=>{

        const speed=(index+1)*15;

        const x=(window.innerWidth-e.clientX)/speed;

        const y=(window.innerHeight-e.clientY)/speed;

        item.style.transform=`translate(${x}px,${y}px)`;

    });

});

/* ============================
   BUTTON RIPPLE
============================ */

document.querySelectorAll(".btn-primary,.btn-nav").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

const rect=this.getBoundingClientRect();

ripple.style.width=size+"px";
ripple.style.height=size+"px";
ripple.style.left=e.clientX-rect.left-size/2+"px";
ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* ============================
   REVEAL ON LOAD
============================ */

window.addEventListener("load",()=>{

revealSection();

});
