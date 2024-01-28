function toggleParagraph(event) {
    var clickedHeading = event.target;
    var paragraph = clickedHeading.nextElementSibling;
    var table = paragraph.nextElementSibling;
    if (paragraph.classList.contains("displayme")) {
        if (paragraph.style.display === "none") {
            paragraph.style.display = "block";
            table.style.display = "block";
        } else {
            paragraph.style.display = "none";
            table.style.display = "none";
        }
    }
}