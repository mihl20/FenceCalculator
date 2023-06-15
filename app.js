$(document).ready(() => {

  /*select fence type and show appropriate page*/

    $('#ok-btn').on('click', () => {
        var fenceChoice = document.getElementById("fence").value;
        switch (fenceChoice) {
          case '3ft-picket':
            $('#fence-selector').hide();
            $('#picket3').show();
            document.getElementById('main-header').innerHTML = "3ft High Picket Fence";
            break;
          case '4ft-picket':
            $('#fence-selector').hide();
            $('#picket3').show();
            document.getElementById('main-header').innerHTML = "4ft High Picket Fence";
            break;
            default:
              console.log('error');
              break;
        }
    
    });

    /*return to start screen*/

    $('#back-btn').on('click', () => {
        $('#picket3').hide();
        $('#fence-selector').show();
        resetPicket();
        document.getElementById("label-description").innerHTML = "Fence Length (Meters)";
      document.getElementById("label-description").style.color = "white";
    });

    
});

/*Reset picket fence screen*/

const resetPicket = () => {
    document.getElementById("length").value = "";
    document.getElementById("pickets").value = "";
    document.getElementById("rails").innerHTML = "-";
    document.getElementById("posts").innerHTML = "-";
    document.getElementById("postcrete").innerHTML = "-";
    document.getElementById("btn").value = "calculate";
  }

/* calculate picket fence */

  const Calculate = () => {
    var buttonValue = document.getElementById('btn').value;
    var fenceSelection = document.getElementById("fence").value;
    if (document.getElementById("length").value === "") {
      document.getElementById("label-description").innerHTML = "Please enter a length";
      document.getElementById("label-description").style.color = "red";
      document.getElementById("label-description").style.fontWeight = "600";
      return;
    }
    if (buttonValue === "calculate") {

      /* choose fence size to calculate*/ 

      if(fenceSelection === '3ft-picket') {
      var length = document.getElementById("length").value;
      var lengthInFeet = length * 3.28084;
      var rails = Math.ceil((length / 3.6) * 2);
      var posts = Math.ceil((length / 1.8) + 1);
      var postcrete = Math.ceil(posts * 2);
      var pickets = Math.ceil(length / 0.125);
      document.getElementById("label-description").innerHTML = "Fence Length (Meters)";
      document.getElementById("label-description").style.color = "white";
      document.getElementById("pickets").value = pickets;
      document.getElementById("rails").innerHTML = rails;
      document.getElementById("posts").innerHTML = posts;
      document.getElementById("postcrete").innerHTML = postcrete;
      document.getElementById("btn").value = "reset";
      } else if (fenceSelection === '4ft-picket') {
        document.getElementById("label-description").innerHTML = "This worked!";
      }
    } else {
      resetPicket();
    }
  }
  