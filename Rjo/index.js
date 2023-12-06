console.log("Check online")


// cursor position

let page1Content = document.querySelector(".page1-content");

let cursor = document.querySelector(".cursor");

page1Content.addEventListener("mousemove",function(dets){
    // console.log(dets.x)
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
})