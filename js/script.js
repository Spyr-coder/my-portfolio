document.addEventListener("DOMContentLoaded", () => {
    let text = "Welcome to the Future.";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typing-text").textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});
