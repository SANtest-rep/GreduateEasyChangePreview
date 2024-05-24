const inputImage = document.querySelector(".input-image");
const uploadBtn = document.getElementById("upload-btn");


let canvas = document.getElementById("canvas");
ctx = canvas.getContext('2d');

const loadImage = () => {
    
    let file = inputImage.files[0];
    if(!file) return;
    console.log(file);
    
    let img = new Image();
    img.src = URL.createObjectURL(file);
    console.log();
    canvas.width  = 600;
    canvas.height = 450;

};








uploadBtn.addEventListener("click", () => inputImage.click());
inputImage.addEventListener("change", loadImage);
