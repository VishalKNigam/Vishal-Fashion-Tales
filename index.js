
var i = 1;
var images = [];
// var time = 3000;
// images[0] = "Images/logo.png"
images[1] = "Images/w1.jpg"
images[2] = "Images/w2.jpg"
images[3] = "Images/w3.jpg"
images[4] = "Images/w4.jpg"
images[5] = "Images/w5.jpg"
images[6] = "Images/w6.jpg"
//console.log(images)
slideshow();
function slideshow(){
    document.slide.src = images[i];
    if(i<images.length-1){
        i++;
    }else{
        i=1;
    }
    setTimeout("slideshow()",3000);
}
window.onload = slideshow;
