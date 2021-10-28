// query page elements
const hero = document.querySelector(".hero");
const ImageTransform = document.querySelector(".card-image-transform");
const ImageStandOut = document.querySelector(".card-image-stand-out");
const fieldPhotography = document.querySelector(".field-photography");
const fieldGraphicDesign = document.querySelector(".field-graphic-design");
const gallery = document.querySelector(".gallery");
const hamburger = document.querySelector(".hamburger-icon");
const dropDown = document.querySelector(".drop-down-menu");
// load the correct image for mobile and desktop
let imagePath = ""
if(window.screen.width < 800);
    imagePath = "./images/mobile";
if(window.screen.width >= 800)
    imagePath = "./images/desktop";    
console.log(imagePath);

// set background for the hero section
hero.style.backgroundImage = "url(" + imagePath + "/image-header.jpg" + ")";

// apply images 
ImageTransform.src = imagePath +"/image-transform.jpg";
ImageStandOut.src = imagePath + "/image-stand-out.jpg";
fieldPhotography.style.backgroundImage = "url(" + imagePath + "/image-photography.jpg" + ")";
fieldGraphicDesign.style.backgroundImage = "url(" + imagePath + "/image-graphic-design.jpg" + ")";

// gallery images
const galleryImages = [
    "/image-gallery-milkbottles.jpg",
    "/image-gallery-orange.jpg",
    "/image-gallery-cone.jpg",
    "/image-gallery-sugarcubes.jpg",
]

Array.from(gallery.children).forEach((pic, index) =>{
    pic.src = imagePath + galleryImages[index];
})

// drop dowm open close
let dropDowIsOpen = false;

const openCloseDropDown = () =>{
     if(!dropDowIsOpen){
         dropDown.style.display = "block";
         dropDowIsOpen = !dropDowIsOpen;
     }
     else{
         dropDown.style.display = "none";
         dropDowIsOpen =!dropDowIsOpen;
     }

 }

hamburger.addEventListener("click",(e)=>{
    openCloseDropDown();
});