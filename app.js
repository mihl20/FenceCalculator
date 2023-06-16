var mainHeading = document.getElementById('main-header');
var topLabel = document.getElementById("label-description");
var firstEntry = document.getElementById("span1");
var secondEntry = document.getElementById("span2");
var thirdEntry = document.getElementById("span3");
var fourthEntry = document.getElementById("span4");
var length1 = document.getElementById("length");

$(document).ready(() => {

  /*select fence type and show appropriate page*/

    $('#ok-btn').on('click', () => {
        fenceChoice();    
    });

    /*return to start screen*/

    $('#back-btn').on('click', () => {
        $('#picket3').hide();
        $('#fence-selector').show();
        resetPicket();
        document.getElementById("label-description").innerHTML = "Fence Length (Meters)";
      document.getElementById("label-description").style.color = "white";
      mainHeading.innerHTML = "Fencing Calculator";
    });

    
});


/* Initialises fence selection screen */

const fenceChoice = () => {

  let picketOutput = document.getElementById('option1');
  let railOutput = document.getElementById('option2');
  let postOutput = document.getElementById('option3');
  let postcreteOutput = document.getElementById('option4');
  var fenceChoice = document.getElementById("fence").value;
        var mainHeaderText = document.getElementById('main-header');
        switch (fenceChoice) {
          case '3ft-picket':
            choosePicket();
            mainHeaderText.innerHTML = "3ft High Picket Fence";
            railOutput.innerHTML = 'Number of 3.6m D Rails (2 high)';
            postOutput.innerHTML = 'Number of 6ft x 4" x 4" Posts';
            postcreteOutput.innerHTML = 'Bags of Postcrete (2 per hole)';
            break;
          case '4ft-picket':
            choosePicket();
            mainHeaderText.innerHTML = "4ft High Picket Fence";
            picketOutput.innerHTML = 'Number of 4ft x 4" Pickets';
            railOutput.innerHTML = 'Number of 3.6m D Rails (3 high)';
            postOutput.innerHTML = 'Number of 6ft x 4" x 4" Posts';
            postcreteOutput.innerHTML = 'Bags of Postcrete (2 per hole)';
            break;
          case '6ft-picket':
            choosePicket();
            mainHeaderText.innerHTML = "6ft High Picket Fence";
            picketOutput.innerHTML = 'Number of 6ft x 4" Pickets';
            railOutput.innerHTML = 'Number of 3.6m D Rails (4 high)';
            postOutput.innerHTML = 'Number of 8ft x 4" x 4" Posts';
            postcreteOutput.innerHTML = 'Bags of Postcrete (3 per hole)';
            break;
          case '6ft6-picket':
            choosePicket();
            mainHeaderText.innerHTML = "6ft High Picket Fence";
            picketOutput.innerHTML = 'Number of 6ft x 6" Pickets';
            railOutput.innerHTML = 'Number of 3.6m D Rails (4 high)';
            postOutput.innerHTML = 'Number of 8ft x 4" x 4" Posts';
            postcreteOutput.innerHTML = 'Bags of Postcrete (3 per hole)';
            break;
          case 'featheredge':
            choosePicket();
            mainHeaderText.innerHTML = "6ft High Featheredge";
            picketOutput.innerHTML = 'Number of 6ft x 5" Featheredge';
            railOutput.innerHTML = 'Number of 3.6m D Rails (4 high)';
            postOutput.innerHTML = 'Number of 8ft x 4" x 4" Posts';
            postcreteOutput.innerHTML = 'Bags of Postcrete (3 per hole)';
          default:
              console.log('error');
              break;
        }
}

/*shows picket fence screen*/

const choosePicket = () => {
  $('#fence-selector').hide();
  $('#picket3').show();
}

/*Reset picket fence screen*/

const resetPicket = () => {
  console.log('test');
    topLabel.innerHTML = "Fence Length (Meters)";
    document.getElementById("length").value = "";
    document.getElementById("span1").innerHTML = "";
    document.getElementById("span2").innerHTML = "";
    document.getElementById("span3").innerHTML = "";
    document.getElementById("span4").innerHTML = "";
    document.getElementById("btn").value = "calculate";
  }

/* calculate picket fence */

  const Calculate = () => {
    let buttonValue = document.getElementById('btn').value;
    let fenceSelection = document.getElementById("fence").value;
    
  
    if (document.getElementById("length").value === "") {
      topLabel.innerHTML = "Please enter a length";
      topLabel.style.color = "red";
      topLabel.style.fontWeight = "600";
      return;
    }
    if (buttonValue === "calculate") {

      /* choose fence size to calculate*/ 
      if(fenceSelection === '3ft-picket') {
        picket3ft();
      } else if (fenceSelection === '4ft-picket') {
        picket4ft();
      } else if(fenceSelection === '6ft-picket') {
        picket6ft4();
      } else if(fenceSelection === '6ft6-picket') {
        picket6ft6();
      } else if(fenceSelection === 'featheredge') {
        featherEdge();
      }
    } else {
      resetPicket();
    }
  }
  
  const picket3ft = () => {

      var rails = Math.ceil((length1.value/ 3.6) * 2);
      var posts = Math.ceil((length1.value / 1.8) + 1);
      var postcrete = Math.ceil(posts * 2);
      var pickets = Math.ceil(length1.value / 0.121);
      topLabel.innerHTML = 'Based on 3/4" Picket Spacing';
      topLabel.style.color = "white";
      firstEntry.innerHTML = pickets;
      secondEntry.innerHTML = rails;
      thirdEntry.innerHTML = posts;
      fourthEntry.innerHTML = postcrete;
      document.getElementById('btn').value = "reset";

  }

  const picket4ft = () => {

      var rails = Math.ceil((length1.value/ 3.6) * 3);
      var posts = Math.ceil((length1.value / 1.8) + 1);
      var postcrete = Math.ceil(posts * 2);
      var pickets = Math.ceil(length1.value / 0.121);
      topLabel.innerHTML = 'Based on 3/4" Picket Spacing';
      topLabel.style.color = "white";
      firstEntry.innerHTML = pickets;
      secondEntry.innerHTML = rails;
      thirdEntry.innerHTML = posts;
      fourthEntry.innerHTML = postcrete;
      document.getElementById('btn').value = "reset";

  }

  const picket6ft4 = () => {

    var rails = Math.ceil((length1.value/ 3.6) * 4);
    var posts = Math.ceil((length1.value / 1.8) + 1);
    var postcrete = Math.ceil(posts * 2);
    var pickets = Math.ceil(length1.value / 0.121);
    topLabel.innerHTML = 'Based on 3/4" Picket Spacing';
    topLabel.style.color = "white";
    firstEntry.innerHTML = pickets;
    secondEntry.innerHTML = rails;
    thirdEntry.innerHTML = posts;
    fourthEntry.innerHTML = postcrete;
    document.getElementById('btn').value = "reset";

}

const picket6ft6 = () => {

  var rails = Math.ceil((length1.value/ 3.6) * 4);
  var posts = Math.ceil((length1.value / 1.8) + 1);
  var postcrete = Math.ceil(posts * 2);
  var pickets = Math.ceil(length1.value / 0.172);
  topLabel.innerHTML = 'Based on 3/4" Picket Spacing';
  topLabel.style.color = "white";
  firstEntry.innerHTML = pickets;
  secondEntry.innerHTML = rails;
  thirdEntry.innerHTML = posts;
  fourthEntry.innerHTML = postcrete;
  document.getElementById('btn').value = "reset";

}

const featherEdge = () => {

  var rails = Math.ceil((length1.value/ 3.6) * 4);
  var posts = Math.ceil((length1.value / 1.8) + 1);
  var postcrete = Math.ceil(posts * 2);
  var pickets = Math.ceil(length1.value / 0.10);
  topLabel.innerHTML = 'Based on 1" Overlap';
  topLabel.style.color = "white";
  firstEntry.innerHTML = pickets;
  secondEntry.innerHTML = rails;
  thirdEntry.innerHTML = posts;
  fourthEntry.innerHTML = postcrete;
  document.getElementById('btn').value = "reset";

}