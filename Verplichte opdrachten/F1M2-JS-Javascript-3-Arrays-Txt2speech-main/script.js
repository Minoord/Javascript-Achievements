    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
       
        window.location.reload();
        
    })

    //my button------------------------------------------------------------------
    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index1 = randomizer(arrayLength1);
        let index2 = randomizer(arrayLength2);
        let index3 = randomizer(arrayLength3);
        let woord1 = onderwerp[index1];
        let woord2 = werkwoord[index2];
        let woord3 = restwoord[index3];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["he", "Lena", "Roger"];
    const werkwoord = ["likes", "hates", "loves"];
    const restwoord = ["working", "you", "food"];
        
    let plaatjes = ["cat.jpg", "love.jpg", "angry.jpg", "Food.jpg"]
    let arrayLength =  plaatjes.length; 
    let arrayLength1 = onderwerp.length;
    let arrayLength2 = werkwoord.length;
    let arrayLength3 = restwoord.length; 

  //reset--------------------------------------------------------------------------------------------------------------------
  
   