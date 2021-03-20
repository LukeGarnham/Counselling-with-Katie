// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
// https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-76px"; //Change pixels if navbar height changes.
    }
    prevScrollpos = currentScrollPos;
}