var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var demoModal = new bootstrap.Modal(document.getElementById('demo-modal'));
        demoModal.show();
    }, 500);
});