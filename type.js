function getSentence(){
    document.getElementById('type-sentence').style.display = "none";
    document.getElementById('year-found').style.display = "block";
}

document.getElementById("sentence-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();  // Prevents the newline in the textarea
        getSentence();
    }
});