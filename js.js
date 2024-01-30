function toggleParagraph(event) {
    var clickedHeading = event.target;
    var paragraph = clickedHeading.nextElementSibling;
    var table = paragraph.nextElementSibling;
    if (paragraph.classList.contains("displayme")) {
        // The paragraph.style property looks at the element's explicitly defined styles (e.g. <p style="display: none" />).
        // You need to look at the calculated style.
        if (window.getComputedStyle(paragraph).display === "none") {
            paragraph.style.display = "block";
            table.style.display = "block";
        } else {
            paragraph.style.display = "none";
            table.style.display = "none";
        }
    }
}