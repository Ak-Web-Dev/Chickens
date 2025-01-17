function theme(){
    if(document.body.style.backgroundColor == "black"){
        document.body.style.backgroundColor = "white";
    }else{
    document.body.style.backgroundColor = "black";
    }
}

const myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
let hasModalShown = false;

window.addEventListener('scroll', () => {
    if (hasModalShown) return; // If the modal has already been shown, do nothing

    const scrollTop = window.scrollY; // Amount scrolled
    const docHeight = document.documentElement.scrollHeight; // Full document height
    const winHeight = window.innerHeight; // Viewport height

    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

    if (scrollPercent > 6) {
        hasModalShown = true; // Set the flag to prevent further triggers
      myModal.show(); // Show the modal
      window.removeEventListener('scroll', arguments.callee); // Stop further triggers
    }
});