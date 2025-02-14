const video1 = document.getElementById ('projectVideo-1');
const video2 = document.getElementById ('projectVideo-2');
const video3 = document.getElementById ('projectVideo-3');
const hoverSign = document.querySelector(".hover-sign");


const videoList = [video1, video2, video3] ;

videoList.forEach(function(video) {
    video.addEventListener('mouseover', function(){
        video.play()
        hoverSign.classList.add("active")
    })

    video.addEventListener('mouseout', function(){
        video.pause()
        hoverSign.classList.remove("active")
    })
});

// Side bar element//

// Side bar Element //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close= document.querySelector('.close-icon');


menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar") ;
    sideBar.classList.add("open-sidebar");
});

close.addEventListener("click", () => {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
});

//download resume hover alret//

const resdwnl = document.querySelector('.download-btn');

resdwnl.addEventListener('click', () => {
    alert("You're Downloading Anurag Sharma's Resume");
})
