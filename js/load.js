var i = setInterval(function () {
    clearInterval(i);

    // The desired code is only this:
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.display = "block";
   
}, 2000);