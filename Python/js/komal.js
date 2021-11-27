const button = document.querySelector(".toggle-btn"); const line1 = document.querySelector(".toggle-btn-line-1");
const line2 = document.querySelector(".toggle-btn-line-2"); const scale = document.querySelector(".all-other-items");
const ssss = document.querySelectorAll(".link"); const anchor = document.querySelectorAll(".main-item-a");
const link_1 = document.querySelector(".link_1"); const link_2 = document.querySelector(".link_2");
const link_3 = document.querySelector(".link_3"); const logo_svg_container = document.querySelector('.main-item-a-svg-container')
const svg_g = document.querySelector('.main-logo-svg-g')
const link_4 = document.querySelector(".link_4"); 
// const link_5 = document.querySelector(".link_5"); 
const apple = document.querySelector('.link-to-apple'); const apple_svg = document.querySelector('.link-to-apple-svg-g');

button.addEventListener("click", () => { toggle(); }
);

ssss.forEach((item) => {
    item.addEventListener("click", () => {
        if (scale.classList.contains("sushantsejwal")) { toggle(); }
    });
});

anchor.forEach((item) => {
    item.addEventListener("click", () => {
        if (scale.classList.contains("sushantsejwal")) { toggle(); }
    });
});

function toggle() {
    line1.classList.toggle("sushantsejwal");
    line2.classList.toggle("sushantsejwal");
    scale.classList.toggle("sushantsejwal");
    link_1.classList.toggle("sushantsejwal");
    link_2.classList.toggle("sushantsejwal");
    link_3.classList.toggle("sushantsejwal");
    link_4.classList.toggle("sushantsejwal");
};

logo_svg_container.addEventListener("mouseover", () => {
    svg_g.classList.add("sushant_anshika")
});

logo_svg_container.addEventListener("mouseleave", () =>{
    svg_g.classList.remove("sushant_anshika")
});

apple.addEventListener("mouseover", () => {
    apple_svg.classList.add("apple_sushantanshika")
});

apple.addEventListener("mouseleave", () => {
    apple_svg.classList.remove("apple_sushantanshika")
});

const d = new Date();
const year = d.getFullYear();

const footer = document.getElementById('footer-para-text');
footer.innerHTML = 'Copyright &copy;' + ' ' + year + ' ' + 'Sushant. All rights reserved';

// Bullet
const bullet_audio = document.querySelector('.bullet-audio');
const bullet = document.querySelector('.bullet-svg');
const bullet_svg_g = document.querySelector('.bullet-svg-g');

const media_phone = window.matchMedia('(max-width: 768px)')
if (media_phone.matches) {
    function bullet_audio_toogle() {

        if (bullet_audio.paused) {
            bullet_audio.play();
        }

        else {
            bullet_audio.pause();
        }
    };

    function bullet_svg_grey() {
        if (bullet_audio.paused) {
            bullet_svg_g.classList.remove("sushant_bullet_phone");
        }
    }

    function bullet_svg_white() {
        if (bullet_audio.played) {
            bullet_svg_g.classList.add("sushant_bullet_phone");
        }
    }
    
    bullet.addEventListener("click", () => {
        bullet_svg_white();
        bullet_audio_toogle();
        bullet_svg_grey();
        RR_audio.pause();
        anitek_audio.pause();
    });
}

else {

    bullet.addEventListener("mouseover", () => {
        
        bullet_svg_g.classList.add("sushant_bullet");
        bullet_audio.play();
        RR_audio.pause();
        anitek_audio.pause();

    });

    bullet.addEventListener("mouseleave", () => {

        bullet_svg_g.classList.remove("sushant_bullet");
        bullet_audio.pause();

    });
}


// anitek audio

const ferrari_img = document.querySelector(".ferrari-img")
const anitek_audio = document.querySelector(".anitek-audio")

ferrari_img.addEventListener("click", () =>{
    anitek_audio_toggle()
    RR_audio.pause()
    bullet_audio.pause();
});

function anitek_audio_toggle() {
    if (anitek_audio.paused){
        anitek_audio.play()
    }
    else{
        anitek_audio.pause();
        RR_audio.pause()
    }
}

// RR audio

const RR_img = document.querySelector(".rr-img")
const RR_audio = document.querySelector(".rr-audio")

RR_img.addEventListener("click", () =>{
    rr_audio_toggle();
    anitek_audio.pause();
    bullet_audio.pause();
});

function rr_audio_toggle() {
    if (RR_audio.paused){
        RR_audio.play()
    }
    else{
        RR_audio.pause();
        anitek_audio.pause();
    }
}
