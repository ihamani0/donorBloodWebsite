// -------------Start scroolbox----------------- 
let scroolbox = document.querySelector('.scroolbox');

window.onscroll = ()=> {
  if(window.scrollY >= 250){
  scroolbox.style.display='flex'; 
}else {
  scroolbox.style.display='none'; 
}
}
scroolbox.addEventListener('click',()=>{
  scroll({
    top:0,
    left:0,
    behavior:"smooth"
  })
})


//scroll To About section and home 
let aboutscroll =document.getElementById('about');
let homescroll = document.getElementById('home');

aboutscroll.addEventListener('click',()=>{
  scroll({
    top:1100 , 
    left: 0 ,
   
  })
});
homescroll.addEventListener('click',()=>{
  scroll({
    top:0 , 
    left: 0 ,
    behavior : "smooth"
  })
});

// animation humberger with eventclick
let humburger = document.querySelector('.hamburger');
let linksdiv =document.querySelector('.links');


humburger.addEventListener('click',()=>{
  linksdiv.classList.toggle('active')
  humburger.classList.toggle('active')
})





