
function loadingAnimation() {
    let x = document.cookie;
    console.log(x);
    if (getCookie("animationPlayed") == "True") {
        var gateContainer = document.getElementById("loading-overlay");
        gateContainer.style.visibility = 'hidden';
    } else {
        gatesFreeze();
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  /**
   * Function to display loading animation. Sets gate visibility, waits 1.5 seconds
   * and then hides the gate. Sets cookie so animation not played again until it expires
   */
function gatesFreeze () {
    document.cookie = "animationPlayed=True";
    var gateContainer = document.getElementById("loading-overlay");
    gateContainer.style.visibility = 'visible';
    setTimeout(function() {
        gateContainer.style.visibility = 'hidden';
    }, 1500) 
}