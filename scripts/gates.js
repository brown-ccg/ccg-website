function gatesFreeze () {
    console.log("test");
    var gateContainer = document.getElementById("loading-overlay");
    
    setTimeout(function() {
        gateContainer.style.visibility = 'hidden';
    }, 1500) 
}