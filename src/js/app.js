if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(() => {
        console.log('service worker registered');
    });
}


var defferedPrompt;

window.addEventListener("beforeinstallpropmt", function (event) {
    console.log("before install promt fired")
    event.preventDefault();
    defferedPrompt = event;
    return false;
})