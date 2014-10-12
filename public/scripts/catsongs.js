
console.log("Linked.")

 window.addEventListener('load', function(){
  var container = document.querySelector('.container');

  var callback = function(e){
     e.stopPropagation();
    console.log("works");
  };

  container.addEventListener('click', callback);


  var body = document.querySelector('body')

function playCat (cat){
  var sound = document.getElementById(cat).play();
  return sound
}

function opacityChange (div){
  var cat = document.getElementById(div);
       cat.style.opacity = '0.4';
       window.addEventListener("keyup", function(e){
       cat.style.opacity = '.7'
      });
}

  window.addEventListener("keypress", function(e){
    // var string = String.fromCharCode(e.keyCode)
     if (e.keyCode == 97) {
       playCat('step_01');
       opacityChange('cat_01');
     } else if(e.keyCode == 115){
        playCat('step_02');
        opacityChange('cat_02');
     } else if(e.keyCode == 100){
        playCat('step_03');
        opacityChange('cat_03')
     } else if(e.keyCode == 102){
        playCat('step_04');
        opacityChange('cat_04');
     } else if(e.keyCode == 106){
        playCat('step_05');
        opacityChange('cat_05');
     } else if(e.keyCode == 107){
        playCat('step_06');
        opacityChange('cat_06');
     } else if(e.keyCode == 108){
        playCat('step_07');
        opacityChange('cat_07');
     } else if(e.keyCode == 59){
        playCat('step_08');
        opacityChange('cat_08');
     } else if(e.keyCode == 32){
        playCat('thelongmeow');
        opacityChange('long_meow');
     }
    console.log(e.keyCode);
  });

});



// function stepOne (){
//   document.getElementById("step_01").play();
// }

// function stepTwo (){
//   document.getElementById("step_02").play();
// }

// function stepThree (){
//   document.getElementById("step_03").play();
// }

// function stepFour (){
//   document.getElementById("step_04").play();
// }

// function stepFive (){
//   document.getElementById("step_05").play();
// }

// function stepSix (){
//   document.getElementById("step_06").play();
// }

// function stepSeven (){
//   document.getElementById("step_07").play();
// }

// function stepEight (){
//   document.getElementById("step_08").play();
// }

