window.onload=()=>{
(function load1(n=5000){
    let h=new Peculiar.int("gold",100,"grey","column","20px");
    h.start();
    h.addText("Loading");
    
    h.animateText();
    h.removeOnTouch();
    h.remove(n)
})();       
   if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}
p("#mathematics").on("click",()=>{
    p("#home").hide();
   
    
    Peculiar.load();
  
    showMaths();
   
});
p("#literature").on("click",()=>{
    
    p("#home").hide();
    Peculiar.load();
    //updateTimer();
    showLit()
    });
p("#chemistry").on("click",()=>{
     function load2(n=5000){
    let h=new Peculiar.int("Indigo",100,"grey","column","20px");
    h.start();
    h.addText("Loading");
    
    h.animateText();
    h.removeOnTouch();
    h.remove(n)
};  
load2();     
    p("#home").hide();
    /*p("#sidebar-container").hide();
    p("#overlay").hide();*/
  
   // updateTimer();
    showChem();
    });
p("#government").on("click",()=>{
    p("#home").hide();
  
    Peculiar.load();
   // updateTimer();
showGov();
    });
document.querySelector("#english").addEventListener ("click",()=>{
  
})   
p("#english").on("click",()=>{
     p("#home").hide();
    
  //  updateTimer();
 
    showEng()
     (function load3(n=5000){
    let h=new Peculiar.int("orange",100,"grey","column","20px");
    h.start();
    h.addText("Loading");
    
    h.animateText();
    h.removeOnTouch();
    h.remove(n)
})();       
  
   
    });
    p("#spelling").on("click",()=>{
         (function load(n=5000){
    let h=new Peculiar.int("gold",100,"grey","column","20px");
    h.start();
    h.addText("Loading");
    
    h.animateText();
    h.removeOnTouch();
    h.remove(n)
})();    
        p("#home").hide();
        
        startSpelling();
    
        
    });
    
 }   
    
   

