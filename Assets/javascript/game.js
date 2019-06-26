$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    
    // This selects a random number to be shown at the start of the game
    // The number should be should be between 19 - 120
    
    $('#randomNumber').text(Random);
    
    // Appending random number to the randomNumber id in the html doc
    
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    
    // Setting up random numbers for each jewel
    // Random number has to be between 1 - 12 
    
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    //  This declaring variables for tallies
  
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);
  
  //This will reset the game.
  
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalScore').text(userTotal);
        } 
  
  // This will alert the win.
  function winner(){
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  
  //This will alert the loss.
  function loser(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  
  //This sets up click for jewels.
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalScore').text(userTotal); 
            //sets win/lose conditions
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalScore').text(userTotal); 
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalScore').text(userTotal);

    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalScore').text(userTotal); 
        
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  }); 