var numSlide = 0;
var next = document.getElementById('Next');
var prev = document.getElementById('Prev');
var image = document.getElementById('Image');
var arrayImages = ["img/banners/banner1.png", "img/banners/banner2.jpg", "img/banners/banner3.jpg","img/banners/banner4.jpg","img/banners/banner5.jpg"];


//Retroceder en el slider
prev.addEventListener("click", function(){
    changeImagePrev(numSlide);
    numSlide++;
});

//Avanzar en el slider
next.addEventListener("click", function(){
    changeImageNext(numSlide);
    numSlide++;
});

function changeImagePrev(num){
    image.style.opacity ='0';
    setTimeout(function(){
        var position = (num - 1) % arrayImages.length
        image.src = arrayImages[position];
    }, 500)
    setTimeout(function(){
        image.style.opacity = '1';  
    }, 700)
}
function changeImageNext(num){
    image.style.opacity ='0';
    setTimeout(function(){
        var position = (num + 1) % arrayImages.length
        image.src = arrayImages[position];
    }, 500)
    setTimeout(function(){
        image.style.opacity = '1';  
    }, 700)
    
}