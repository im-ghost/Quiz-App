window.onload=()=>{
   if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}

// Code to  
var timer=elem("#timer");
p("#timer-container").hide();
p("#sidebar").hide();
p("#sidebar-header").on("click",()=>{
      
       p("#sidebar-header").fadeOut();
setTimeout(()=>{
     p("#sidebar").fadeIn();
     },1000);

    
});
p("#close_sidebar").on("click",()=>{
    p("#sidebar").fadeOut();
    setTimeout(()=>{
     p("#sidebar-header").fadeIn();
     },1000);

   
});

p("#mathematics").on("click",()=>{
    p("#sidebar-container").hide();
    Peculiar.load();
   // updateTimer();
    showMaths();
   
});
p("#literature").on("click",()=>{
    p("#sidebar-container").hide();
    Peculiar.load();
    //updateTimer();
    showLit()
    });
p("#chemistry").on("click",()=>{
    p("#sidebar-container").hide();
    Peculiar.load();
   // updateTimer();
    showChem();
    });
p("#government").on("click",()=>{
    p("#sidebar-container").hide();
    Peculiar.load();
   // updateTimer();
showGov();
    });
    
p("#english").on("click",()=>{
  //  updateTimer();
  Peculiar.load();
  p("#sidebar-container").hide();
    showEng()
    });
    p("#spelling").on("click",()=>{
        startSpelling();
     (function(n=5000){
    let h=new Peculiar.int("gold",100,"grey","column","20px");
    h.start();
    h.addText("Loading");
    
    h.animateText();
    h.removeOnTouch();
    h.remove(n)
})();       p("#sidebar-container").hide();
        
    });
    
 }   
    
   

