function getAISentence(){
    document.getElementById('sentence-section').style.display = "block";
    document.getElementById('get-sentence').style.display = "none";
    document.getElementById('user-sentence-input').style.display = "block";
    
}
function yearEntered(){
    document.getElementById('computer-guess').style.display = "block";
}

document.getElementById("sentence-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();  // Prevents the newline in the textarea
        yearEntered();
    }
});