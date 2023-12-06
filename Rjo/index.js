console.log("Check online")


// cursor position

let page1Content = document.querySelector(".page1-content");

let cursor = document.querySelector(".cursor");

// page1Content.addEventListener("mousemove",function(dets){
//  
//     cursor.style.left = dets.x + "px";
//     cursor.style.top = dets.y + "px";
// });


page1Content.addEventListener("mousemove",function(dets){

    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})
// gsap.to(".cursor",{
//     x:500.
// })