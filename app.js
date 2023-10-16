var numberOfDrumButtons = document.querySelectorAll(".btn").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".btn")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "q":
      var sound1 = new Audio("sound1.mp3");
      sound1.play();
      break;

    case "w":
      var sound2 = new Audio("sound2.mp3");
      sound2.play();
      break;

    case "e":
      var sound3 = new Audio('sound3.mp3');
      sound3.play();
      break;

    case "r":
      var sound4 = new Audio('sound4.mp3');
      sound4.play();
      break;

    case "t":
      var sound5 = new Audio('sound5.mp3');
      sound5.play();
      break;

    case "y":
      var sound6 = new Audio('sound6.mp3');
      sound6.play();
      break;

    case "u":
      var sound7 = new Audio('sound7.mp3');
      sound7.play();
      break;

    case "i":
      var sound8 = new Audio('sound8.mp3');
      sound8.play();
      break;

    case "o":
      var sound9 = new Audio('sound20.mp3');
      sound9.play();
      break;

    case "p":
      var sound10 = new Audio('sound10.mp3');
      sound10.play();
      break;
 	case "a":
      var sound11 = new Audio("sound11.mp3");
      sound11.play();
      break;

    case "s":
      var sound12 = new Audio("sound12.mp3");
      sound12.play();
      break;

    case "d":
      var sound13 = new Audio('sound13.mp3');
      sound13.play();
      break;

    case "f":
      var sound14 = new Audio('sound14.mp3');
      sound14.play();
      break;

    case "g":
      var sound15 = new Audio('sound15.mp3');
      sound15.play();
      break;

    case "h":
      var sound16 = new Audio('sound16.mp3');
      sound16.play();
      break;

    case "j":
      var sound17 = new Audio('sound17.mp3');
      sound17.play();
      break;

    case "k":
      var sound18 = new Audio('sound18.mp3');
      sound18.play();
      break;

    case "l":
      var sound19 = new Audio('sound19.mp3');
      sound19.play();
      break;

    case "z":
      var sound20 = new Audio('sound21.mp3');
      sound20.play();
      break;

   	case "x":
      var sound21 = new Audio('sound22.mp3');
      sound21.play();
      break;   

    case "c":
      var sound22 = new Audio('sound25.mp3');
      sound22.play();
      break;

    case "v":
      var sound23 = new Audio('sound23.mp3');
      sound23.play();
      break;

    case "b":
      var sound24 = new Audio('sound24.mp3');
      sound24.play();
      break;
   
    case "n":
      var sound25 = new Audio('sound26.mp3');
      sound25.play();
      break;
   
    case "m":
      var sound26 = new Audio('pato.mp3');
      sound26.play();
      break;
  
    case "1":
      var sound27 = new Audio('mark3.m4a');
      sound27.play();
      break;   

    case "2":
      var sound28 = new Audio('murio.mp3');
      sound28.play();
      break;   
   
    case "3":
      var sound28 = new Audio('dominicano.mp3');
      sound28.play();
      break;   

    case "4":
      var sound29 = new Audio('game.mp3');
      sound29.play();
      break;   

    case "5":
      var sound30 = new Audio('deliver.mp3');
      sound30.play();
      break;   

    case "6":
      var sound31 = new Audio('sound27.mp3');
      sound31.play();
      break;   
     
    case "7":
      var sound32 = new Audio('sound28.mp3');
      sound32.play();
      break;   

    case "8":
      var sound33 = new Audio('sound29.mp3');
      sound33.play();
      break;   

    case "9":
      var sound34 = new Audio('sound30.mp3');
      sound34.play();
      break;   

    case "10":
      var sound35 = new Audio('sound31.mp3');
      sound35.play();
      break;   

    
    case "11":
      var sound36 = new Audio('sound32.mp3');
      sound36.play();
      break;   

    case "12":
      var sound37 = new Audio('sound33.mp3');
      sound37.play();
      break;   

    case "13":
      var sound38 = new Audio('sound34.mp3');
      sound38.play();
      break;   

    case "14":
      var sound39 = new Audio('sound36.mp3');
      sound39.play();
      break;   

    case "15":
      var sound40 = new Audio('sound37.mp3');
      sound40.play();
      break;  

    case "16":
      var sound41 = new Audio('sound38.mp3');
      sound41.play();
      break;   
          
    case "17":
      var sound42 = new Audio('what.mp3');
      sound42.play();
      break;   
      
    case "18":
        var sound43 = new Audio('stone.mp3');
        sound43.play();
        break;  

    case "19":
      var sound44 = new Audio('gotit.mp3');
      sound44.play();
      break; 

    case "20":
      var sound45 = new Audio('pavo.mp3');
      sound45.play();
      break; 

    case "21":
      var sound46 = new Audio('back.mp3');
      sound46.play();
      break; 


    case "22":
        var sound47 = new Audio('damm.mp3');
        sound47.play();
        break; 


    case "23":
        var sound48 = new Audio('next.mp3');
        sound48.play();
        break; 


    case "24":
        var sound49 = new Audio('eww.mp3');
        sound49.play();
        break; 

    case "25":
          var sound50 = new Audio('english.mp3');
          sound50.play();
          break; 

    case "26":
      var sound51 = new Audio('nigan1.mp3');
      sound51.play();
      break; 

    case "27":
      var sound52 = new Audio('nigan2.mp3');
      sound52.play();
      break; 

    case "28":
      var sound53 = new Audio('nigan3.mp3');
      sound53.play();
      break; 

    case "29":
      var sound54 = new Audio('nigan4.mp3');
      sound54.play();
      break; 

    case "30":
      var sound55 = new Audio('nigan5.mp3');
      sound55.play();
      break; 

    case "31":
      var sound56 = new Audio('joe.mp3');
      sound56.play();
      break; 

    case "32":
      var sound57 = new Audio('rick.mp3');
      sound57.play();
      break; 

    case "33":
      var sound58 = new Audio('rick2.mp3');
      sound58.play();
      break; 

    case "34":
      var sound59 = new Audio('steven.mp3');
      sound59.play();
      break; 

    case "35":
      var sound60 = new Audio('holdon.mp3');
      sound60.play();
      break; 

    case "36":
      var sound61 = new Audio('snoog.mp3');
      sound61.play();
      break; 
      
 
    case "37":
      var sound62 = new Audio('batman.mp3');
      sound62.play();
      break; 
    
    case "38":
      var sound63 = new Audio('joe2.mp3');
      sound63.play();
      break;

    case "39":
      var sound64 = new Audio('joe3.mp3');
      sound64.play();
      break;

    case "40":
      var sound65 = new Audio('tony.mp3');
      sound65.play();
      break;

    case "41":
      var sound66 = new Audio('tony2.mp3');
      sound66.play();
      break;

    case "42":
      var sound67 = new Audio('mmg.mp3');
      sound67.play();
      break;

    case "43":
      var sound68 = new Audio('mari.mp3');
      sound68.play();
      break;

    


  	default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}




