// for progress bar animation
window.addEventListener("load", function() {
    let completedHours = 187;  
    let totalHours = 300;
    let percentage = (completedHours / totalHours) * 100;

    document.getElementById("progbar").style.width = percentage + "%";
});