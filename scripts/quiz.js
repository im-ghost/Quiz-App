 
var questionEl=document.createElement("div");
questionEl.classList.add("container")
const showLit=()=>{
    var score=0;
  var i=0;
  setTimeout(()=>{
  getQuestion();
  },5000);
  var allLitQues=[];
function getQuestion(){
    questionEl.innerHTML="";
    
      var a=Object.values(Object.values(literature.questions)[i]);    
    var eachQuestion=document.createElement("div");
    eachQuestion.setAttribute("id","each");
    eachQuestion.innerHTML=`
    <div class="innerques">
    <h1>${a[0]}</h1>
    <div class="container options">
    <div class="each_options">
      <input type="radio" value="${a[1][0]}" name="options"/>
    <label for="opt1">${a[1][0]}</label>
  
    </div>
     <div class="each_options">
    <input name="options" type="radio" value="${a[1][1]}"/>
    <label for="opt1">${a[1][1]}</label>
    </div>
     <div class="each_options">
       <input name="options" type="radio" value="${a[1][2]}"/>
    <label for="opt1">${a[1][2]}</label>
  </div>
     <div class="each_options">
         <input name="options" type="radio" value="${a[1][3]}"/>
    <label for="opt1">${a[1][3]}</label>

    </div>
    
    
    
    </div>
     <div class="controls">
     
     <div id="nexts"><button class="btn"id="next">Next</button></div>
    </div></div>
    </div>
    `
    function stopQuestion(){ 
    p("#nexts").html("<button class='btn' id='submit'>Submit</button>");
    setTimeout(()=>{
      p("#submit").on("click",()=>{
      questionEl.innerHTML="";
      setTimeout(()=>{
          Peculiar.wait();
           setTimeout(()=>{
      
           p("#score").fadeIn("flex");
  p("#score").html(`<div><h2>Time is up</h2>Your score is <h1>${score}</h1></div>`);
  },1100);
       },1);
         });
         },0);
    }
    
    
   
               var correctAnswer=a[2];
               var answer;
               
   function next(){
       if(p("input[type=radio][name=options]:checked" )!=null){
           
      answer=p("input[type=radio][name=options]:checked" ).val();
    
      
      if(answer==correctAnswer){
          score++;
      }
     
      }
      else{
          alert("null");
      }
       if(i<Object.values(literature.questions).length-1){
           i++;
           
            getQuestion();
        
        }
        else {
           
          stopQuestion();
        }
        
    }

    
    questionEl.appendChild(eachQuestion);
    
    setTimeout(()=>{
       
        
      if(((i%2)===0)&&(i>1)){
      elem("#each").animate(
      [
      {
          transform:'translateY(-300px)',opacity:'0.5'
      },{
        transform:'translateY(0)', opacity:1  
      }
      ],
      {
          duration:670,
          iterations:1
      }
      )
      }
      else{}
      if(((i%7)===0)&&(i>6)){
          elem("#each").animate(
      [
      {
          transform:'scale(0)',opacity:'0'
      },{
        transform:'scale(1)',opacity:'1'  
      }
      ],
      {
          duration:670,
          iterations:1
      }
      )
      }
      if(((i%3)===0)&&(i>2)){
         
          elem("#each").animate(
      [
      {
          transform:'translateX(-300px)'
      },{
        transform:'translateX(0)'  
      }
      ],
      {
          duration:670,
          iterations:1
      }
      )
      }
      else{}
      if(((i%5)===0)&&(i>4)){
          elem("#each").animate(
      [
      {
          transform:'translate(-300px,-300px)'
      },{
        transform:'translate(0)'  
      }
      ],
      {
          duration:670,
          iterations:1
      }
      )
      }
      else{}
   
       if(p("#next")!=null){
            p("#next").on("click",next);
       }  
        
    },10)
   }
   elem("#question").appendChild(questionEl);
}
const showGov=()=>{
    
    var i=0;
    setTimeout(()=>{
    getQuestion();
    },5000);
function getQuestion(){
    questionEl.innerHTML="";
    
      var a=Object.values(Object.values(government.questions)[i]);    
    var eachQuestion=document.createElement("div");
    eachQuestion.setAttribute("id","each")
    eachQuestion.innerHTML=`
    <div class="innerques">
    <h1>${a[0]}</h1>
    <div class="container options">
    <div class="each_options">
      <input type="radio" value="${a[1][0]}" name="options"/>
    <label for="opt1">${a[1][0]}</label>
  
    </div>
     <div class="each_options">
    <input name="options" type="radio" value="${a[1][1]}"/>
    <label for="opt1">${a[1][1]}</label>
    </div>
     <div class="each_options">
       <input name="options" type="radio" value="${a[1][2]}"/>
    <label for="opt1">${a[1][2]}</label>
  </div>
     <div class="each_options">
         <input name="options" type="radio" value="${a[1][3]}"/>
    <label for="opt1">${a[1][3]}</label>

    </div>
    
    
    
    </div>
     <div class="controls">
     
     <div id="nexts"><button class="btn"id="next">Next</button></div>
    </div></div>
    </div>
    `
    function stopQuestion(){ 
    p("#nexts").html("<button class='btn' id='submit'>Submit</button>");
    setTimeout(()=>{
      p("#submit").on("click",()=>{
      questionEl.innerHTML="";
      setTimeout(()=>{
          Peculiar.wait();
           setTimeout(()=>{
           p("#score").fadeIn("flex");
  p("#score").html(`<div><h2>Time is up</h2>Your score is <h1>${score}</h1></div>`);
  },1100);
       },1);
         });
         },0);
    }
    
    
   
               var correctAnswer=a[2];
               var answer;
               
   function next(){
       if(p("input[type=radio][name=options]:checked" )!=null){
           
      answer=p("input[type=radio][name=options]:checked" ).val();
    
      
      if(answer==correctAnswer){
          score++;
      }
     
      }
      else{
          alert("null");
      }
       if(i<Object.values(literature.questions).length-1){
           i++;
            getQuestion();
        
        }
        else {
           
          stopQuestion();
        }
        
    }

    
    questionEl.appendChild(eachQuestion);
    
    setTimeout(()=>{
       
        
      if(((i%2)===0)&&(i>1)){
      elem("#each").animate(
      [
      {
          transform:'translateY(-300px)',opacity:'0.5'
      },{
        transform:'translateY(0)', opacity:1  
      }
      ],
      {
          duration:670,
          iterations:1
      }
      )
      }
      else{}
      if(((i%7)===0)&&(i>6)){
          elem("#each").animate(
      [
      {
          transform:'scale(0)',opacity:'0'
      },{
        transform:'scale(1)',opacity:'1'  
      }
      ],
      {
          duration:670,
          iterations:1
      }
      )
      }
      if(((i%3)===0)&&(i>2)){
         
          elem("#each").animate(
      [
      {
          transform:'translateX(-300px)'
      },{
        transform:'translateX(0)'  
      }
      ],
      {
          duration:670,
          iterations:1
      }
      )
      }
      else{}
      if(((i%5)===0)&&(i>4)){
          elem("#each").animate(
      [
      {
          transform:'translate(-300px,-300px)'
      },{
        transform:'translate(0)'  
      }
      ],
      {
          duration:670,
          iterations:1
      }
      )
      }
      else if(i===1000){}
    else{
          elem("#each").animate(
      [
      {
          transform:'scale(0)'
      },{
        transform:'scale(3)'
      },
      {transform:'scale(1)'}
      ],
      {
          duration:800,
          iterations:1
      }
      )
      }
      
       if(p("#next")!=null){
            p("#next").on("click",next);
       }  
        
    },10)
   }
   elem("#question").appendChild(questionEl);
}
const showMaths=()=>{
    questionEl.innerHTML="";
    var i=0;
    setTimeout(()=>{
    getQuestion();
    },5000);
    function getQuestion(){
    questionEl.innerHTML="";
    
      var a=Object.values(Object.values(mathes.questions)[i]);    
    var eachQuestion=document.createElement("div");
    eachQuestion.setAttribute("id","each")
    eachQuestion.innerHTML=`
    <div class="innerques">
    <h1>${a[0]}</h1>
    <div class="container options">
    <div class="each_options">
      <input type="radio" value="${a[1][0]}" name="options"/>
    <label for="opt1">${a[1][0]}</label>
  
    </div>
     <div class="each_options">
    <input name="options" type="radio" value="${a[1][1]}"/>
    <label for="opt1">${a[1][1]}</label>
    </div>
     <div class="each_options">
       <input name="options" type="radio" value="${a[1][2]}"/>
    <label for="opt1">${a[1][2]}</label>
  </div>
     <div class="each_options">
         <input name="options" type="radio" value="${a[1][3]}"/>
    <label for="opt1">${a[1][3]}</label>

    </div>
    
    
    
    </div>
     <div class="controls">
     
     <div id="nexts"><button class="btn"id="next">Next</button></div>
    </div></div>
    </div>
    `
    function stopQuestion(){ 
    p("#nexts").html("<button class='btn' id='submit'>Submit</button>");
    setTimeout(()=>{
      p("#submit").on("click",()=>{
      questionEl.innerHTML="";
      setTimeout(()=>{
          Peculiar.wait();
           setTimeout(()=>{
           p("#score").fadeIn("flex");
  p("#score").html(`<div><h2>Time is up</h2>Your score is <h1>${score}</h1></div>`);
  },1100);
       },1);
         });
         },0);
    }
    
    
   
               var correctAnswer=a[2];
               var answer;
               
   function next(){
       if(p("input[type=radio][name=options]:checked" )!=null){
           
      answer=p("input[type=radio][name=options]:checked" ).val();
    
      
      if(answer==correctAnswer){
          score++;
      }
     
      }
      else{
          alert("null");
      }
       if(i<Object.values(literature.questions).length-1){
           i++;
            getQuestion();
        
        }
        else {
           
          stopQuestion();
        }
        
    }

    
    questionEl.appendChild(eachQuestion);
    
    setTimeout(()=>{
       
        
      if(((i%2)===0)&&(i>1)){
      elem("#each").animate(
      [
      {
          transform:'translateY(-300px)',opacity:'0.5'
      },{
        transform:'translateY(0)', opacity:1  
      }
      ],
      {
          duration:670,
          iterations:1
      }
      )
      }
      else{}
      if(((i%7)===0)&&(i>6)){
          elem("#each").animate(
      [
      {
          transform:'scale(0)',opacity:'0'
      },{
        transform:'scale(1)',opacity:'1'  
      }
      ],
      {
          duration:670,
          iterations:1
      }
      )
      }
      if(((i%3)===0)&&(i>2)){
         
          elem("#each").animate(
      [
      {
          transform:'translateX(-300px)'
      },{
        transform:'translateX(0)'  
      }
      ],
      {
          duration:670,
          iterations:1
      }
      )
      }
      else{}
      if(((i%5)===0)&&(i>4)){
          elem("#each").animate(
      [
      {
          transform:'translate(-300px,-300px)'
      },{
        transform:'translate(0)'  
      }
      ],
      {
          duration:670,
          iterations:1
      }
      )
      }
     else{}
       if(p("#next")!=null){
            p("#next").on("click",next);
       }  
        
    },10)
   }
 elem("#question").appendChild(questionEl);
}
const showChem=()=>{
    var i=0;
    questionEl.innerHTML="";
    setTimeout(()=>{
    getQuestion();
    },5000);
  function getQuestion(){
    questionEl.innerHTML="";
    
      var a=Object.values(Object.values(chemistry.questions)[i]);    
    var eachQuestion=document.createElement("div");
    eachQuestion.setAttribute("id","each")
    eachQuestion.innerHTML=`
    <div class="innerques">
    <h1>${a[0]}</h1>
    <div class="container options">
    <div class="each_options">
      <input type="radio" value="${a[1][0]}" name="options"/>
    <label for="opt1">${a[1][0]}</label>
  
    </div>
     <div class="each_options">
    <input name="options" type="radio" value="${a[1][1]}"/>
    <label for="opt1">${a[1][1]}</label>
    </div>
     <div class="each_options">
       <input name="options" type="radio" value="${a[1][2]}"/>
    <label for="opt1">${a[1][2]}</label>
  </div>
     <div class="each_options">
         <input name="options" type="radio" value="${a[1][3]}"/>
    <label for="opt1">${a[1][3]}</label>

    </div>
    
    
    
    </div>
     <div class="controls">
     
     <div id="nexts"><button class="btn"id="next">Next</button></div>
    </div></div>
    </div>
    `
    function stopQuestion(){ 
    p("#nexts").html("<button class='btn' id='submit'>Submit</button>");
    setTimeout(()=>{
      p("#submit").on("click",()=>{
          
      questionEl.innerHTML="";
      setTimeout(()=>{
          Peculiar.wait();
           setTimeout(()=>{
           p("#score").fadeIn("flex");
  p("#score").html(`<div><h2>Time is up</h2>Your score is <h1>${score}</h1></div>`);
  },1100);
       },1);
         });
         },0);
    }
    
    
   
               var correctAnswer=a[2];
               var answer;
               
   function next(){
       if(p("input[type=radio][name=options]:checked" )!=null){
           
      answer=p("input[type=radio][name=options]:checked" ).val();
    
      
      if(answer==correctAnswer){
          score++;
      }
     
      }
      else{
          alert("null");
      }
       if(i<Object.values(literature.questions).length-1){
           i++;
            getQuestion();
        
        }
        else {
           
          stopQuestion();
        }
        
    }

    
    questionEl.appendChild(eachQuestion);
    
    setTimeout(()=>{
       
        
      if(((i%2)===0)&&(i>1)){
      elem("#each").animate(
      [
      {
          transform:'translateY(-300px)',opacity:'0.5'
      },{
        transform:'translateY(0)', opacity:1  
      }
      ],
      {
          duration:670,
          iterations:1
      }
      )
      }
      else{}
      if(((i%7)===0)&&(i>6)){
          elem("#each").animate(
      [
      {
          transform:'scale(0)',opacity:'0'
      },{
        transform:'scale(1)',opacity:'1'  
      }
      ],
      {
          duration:670,
          iterations:1
      }
      )
      }
      if(((i%3)===0)&&(i>2)){
         
          elem("#each").animate(
      [
      {
          transform:'translateX(-300px)'
      },{
        transform:'translateX(0)'  
      }
      ],
      {
          duration:670,
          iterations:1
      }
      )
      }
      else{}
      if(((i%5)===0)&&(i>4)){
          elem("#each").animate(
      [
      {
          transform:'translate(-300px,-300px)'
      },{
        transform:'translate(0)'  
      }
      ],
      {
          duration:670,
          iterations:1
      }
      )
      }
      else if(i===1000){}
      else{
          elem("#each").animate(
      [
      {
          transform:'scale(0)'
      },{
        transform:'scale(3)'
      },
      {transform:'scale(1)'}
      ],
      {
          duration:800,
          iterations:1
      }
      )
      }
       if(p("#next")!=null){
            p("#next").on("click",next);
       }  
        
    },10)
   }
   elem("#question").appendChild(questionEl);
}
const showEng=()=>{
    var i=0;
    questionEl.innerHTML="";
    setTimeout(()=>{
    getQuestion();
    },5000);
    function getQuestion(){
    questionEl.innerHTML="";
    
      var a=Object.values(Object.values(english.questions)[i]);    
    var eachQuestion=document.createElement("div");
    eachQuestion.setAttribute("id","each")
    eachQuestion.innerHTML=`
    <div class="innerques">
    <h1>${a[0]}</h1>
    <div class="container options">
    <div class="each_options">
      <input type="radio" value="${a[1][0]}" name="options"/>
    <label for="opt1">${a[1][0]}</label>
  
    </div>
     <div class="each_options">
    <input name="options" type="radio" value="${a[1][1]}"/>
    <label for="opt1">${a[1][1]}</label>
    </div>
     <div class="each_options">
       <input name="options" type="radio" value="${a[1][2]}"/>
    <label for="opt1">${a[1][2]}</label>
  </div>
     <div class="each_options">
         <input name="options" type="radio" value="${a[1][3]}"/>
    <label for="opt1">${a[1][3]}</label>

    </div>
    
    
    
    </div>
     <div class="controls">
     
     <div id="nexts"><button class="btn"id="next">Next</button></div>
    </div></div>
    </div>
    `
    function stopQuestion(){ 
    p("#nexts").html("<button class='btn' id='submit'>Submit</button>");
    setTimeout(()=>{
      p("#submit").on("click",()=>{
      questionEl.innerHTML="";
      setTimeout(()=>{
    Peculiar.wait();
    setTimeout(()=>{
           setTimeout(()=>{
           p("#score").fadeIn("flex");
  p("#score").html(`<div><h2>Time is up</h2>Your score is <h1>${score}</h1></div>`);
  },1100);
  },1100);
       },1);
         });
         },0);
    }
    
    
   
               var correctAnswer=a[2];
               var answer;
               
   function next(){
       if(p("input[type=radio][name=options]:checked" )!=null){
           
      answer=p("input[type=radio][name=options]:checked" ).val();
    
      
      if(answer==correctAnswer){
          score++;
      }
     
      }
      else{
          alert("null");
      }
       if(i<Object.values(literature.questions).length-1){
           i++;
            getQuestion();
        
        }
        else {
           
          stopQuestion();
        }
        
    }

    
    questionEl.appendChild(eachQuestion);
    
    setTimeout(()=>{
       
        
      if(((i%2)===0)&&(i>1)){
      elem("#each").animate(
      [
      {
          transform:'translateY(-300px)',opacity:'0.5'
      },{
        transform:'translateY(0)', opacity:1  
      }
      ],
      {
          duration:670,
          iterations:1
      }
      )
      }
      else{}
      if(((i%7)===0)&&(i>6)){
          elem("#each").animate(
      [
      {
          transform:'scale(0)',opacity:'0'
      },{
        transform:'scale(1)',opacity:'1'  
      }
      ],
      {
          duration:670,
          iterations:1
      }
      )
      }
      if(((i%3)===0)&&(i>2)){
         
          elem("#each").animate(
      [
      {
          transform:'translateX(-300px)'
      },{
        transform:'translateX(0)'  
      }
      ],
      {
          duration:670,
          iterations:1
      }
      )
      }
      else{}
      if(((i%5)===0)&&(i>4)){
          elem("#each").animate(
      [
      {
          transform:'translate(-300px,-300px)'
      },{
        transform:'translate(0)'  
      }
      ],
      {
          duration:670,
          iterations:1
      }
      )
      }
     else{}
       if(p("#next")!=null){
            p("#next").on("click",next);
       }  
        
    },10)
   }
    elem("#question").appendChild(questionEl);
}

function startSpelling(){
    
    var textForm=document.createElement("div");
    textForm.classList.add("container");
    textForm.classList.add("innerques");
    textForm.innerHTML=`
    <input placeholder="Type the word" id="spellValue" type="text" autocapitalization="off" autocomplete="off"/><br><br>
    <button id="checkSpell">Next</button>
    
    `
    questionEl.appendChild(textForm);
    document.body.appendChild(textForm)
    var spellValue=elem("#spellValue");
    
    var texts=[
    "oscillator",
    "ostentatious",
    "onomatopoeia",
    "synecdoche",
    "oxymoron",
    "philosophy",
    "presupposition",
    "presumptuous",
    "peculiar",
    "riotous",
    "impostor",
    "elegiac",
    "grotesque",
    "invitrofertilization",
    "invulnerable",
    "archaic",
    "launderette",
    "nomenclature",
    "nefarious",
    "dozy",
    "neolithic",
    "gigiantaz",
    "paisley",
    "philanderer",
    "pharmacopoeia",
    "philatelic",
    "philately",
    "bibliophile",
    "phantom",
    "pheasant",
    "feasible",
    "totalitarianism",
    "ghoul",
    "ghee",
    "tungsten",
    "tumultuous",
    "tunic",
    "euphoria",
    "whirl",
    "obsolescence",
    "obscurantist",
    "sultry",
    "vinaigrette"];
    function random(){
        let rand=Math.floor(Math.random()*texts.length-1);
        texts=texts.filter((_, I) => I !== rand);
        
        return texts[rand];
    }
    var rand=random();
    
    var synth = window.speechSynthesis;
var voices = [];

function populateVoiceList() {
  voices = synth.getVoices().sort(function (a, b) {
      const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
      if ( aname < bname ) return -1;
      else if ( aname == bname ) return 0;
      else return +1;
  });
  
}

populateVoiceList();

function speak(){
    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }
    
    var utterThis = new SpeechSynthesisUtterance(rand);
    utterThis.onend = function (event) {
        console.log('Done');
    }
    utterThis.onerror = function (event) {
        console.error('Error');
    }
   var revoice=random(0,voices.length)
        utterThis.voice = voices[revoice];
        
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
    setTimeout(()=>{
    synth.speak(utterThis);
    },2000);
  }

speak();

var score=0;
setTimeout(()=>{
elem("#checkSpell").addEventListener("click",()=>{
    if(rand===spellValue.value){
        score++;
        alert("Correct");
        spellValue.value="";
        speak();
    }
    else{
        alert("Wrong");
    }
});
},200);
function EndQuiz(){
    textForm.innerHTML=`
    <div class="submit" id="submit">
    Time is up your score is ${score}
    </div>
    `
}
setTimeout(()=>{
    EndQuiz();
},100000);

}                    
/*
    ---------`
            ..`
               `
               `
               `
               `
      ________&         _







*/














































































