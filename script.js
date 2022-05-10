let cta_video1, cta_video2, video_overlay, video_player, close_btn, img_podium, img_pc, cta_podium, bubble;
let cta_wtb = [];
let highlightedWTB = 0;
let highlightInterval;
let videoIDs = ["0sjUjl_7nI8", "zIgEaGz_CO4"];
let wtb_links = [
    "https://www.ldlc.com/fiche/PB00469315.html",
    "https://estore.asus.com/fr/90nb0vc2-m005a0-vivobook-13-slate-oled-t3300.html",
    "https://www.fnac.com/Pack-PC-portable-2-en-1-Asus-VivoBook-13-Slate-OLED-T3300KA-LQ069W-13-3-Full-HD-tactile-Intel-Pentium-8-Go-RAM-128-Go-SSD-Noir-Housse-stylet/a16314972/w-4#omnsearchpos=1",
    "https://www.darty.com/nav/achat/informatique/ordinateur_portable-portable/portable/asus_t3300ka-pen_8_28_1.html"
];


function init(){
    cta_video1 = document.getElementById("cta_video1");
    cta_video2 = document.getElementById("cta_video2");
    video_overlay = document.getElementById("video_overlay");
    close_btn = document.getElementById("close_btn");
    img_pc = document.getElementById("img_pc");
    img_podium = document.getElementById("img_podium");
    cta_podium = document.getElementById("cta_podium");
    bubble = document.getElementById("bubble");
    cta_wtb = document.getElementsByClassName("WTB");

    cta_video1.dataset.videoid = videoIDs[0];
    cta_video2.dataset.videoid = videoIDs[1];

    for(let i=0; i<cta_wtb.length; i++){
        cta_wtb[i].addEventListener("click", function(){
            console.log("test");
            window.open(wtb_links[i], "_blank");
        });
    }

    cta_video1.onclick = openVideo;
    cta_video2.onclick = openVideo;
    video_overlay.onclick = closeVideo;
    close_btn.onclick = closeVideo;

    img_pc.onmouseenter = hoverPodium;
    img_podium.onmouseenter = hoverPodium;
    cta_podium.onmouseenter = hoverPodium;
    img_pc.onmouseleave = leavePodium;
    img_podium.onmouseleave = leavePodium;
    cta_podium.onmouseleave = leavePodium;

    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    highlightInterval = setInterval(highlightWTB, 3000);
}

function onYouTubeIframeAPIReady() {
    video_player = new YT.Player('video_player', {
        height: '360',
        width: '640'
    });
  }

function openVideo(e){
    video_overlay.classList.add("open");
    let videoID = e.target.dataset.videoid;
    video_player.loadVideoById(videoID);
    video_player.playVideo();
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function closeVideo(){
    video_player.stopVideo();
    video_overlay.classList.remove("open");
    document.getElementById("video_player");
}

function hoverPodium(){
    bubble.classList.add("show");
}
function leavePodium(){
    bubble.classList.remove("show");
}

function highlightWTB(){
    cta_wtb[highlightedWTB].classList.remove("highlight");
    highlightedWTB ++;

    if(highlightedWTB >= cta_wtb.length) highlightedWTB = 0;

    cta_wtb[highlightedWTB].classList.add("highlight");
}









window.onload = init;