export function startSlider(){
  const silder = document.querySelectorAll(".slide");

  let currentSlide = 0;

setInterval(() =>{
  if(currentSlide > silder.length -1){
    currentSlide = 0;
  }else{
    silder.forEach(slide => (
      slide.style.display = "none"
    ))
    silder[currentSlide].style.display = "flex";
    currentSlide++
  }
}, 5000)
}