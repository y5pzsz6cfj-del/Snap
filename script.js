function hello() {
  alert("Hi 👍 JavaScript works");
}
function askCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      alert("Camera permission granted 👍");
    })
    .catch(error => {
      alert("Permission denied ❌");
    });
}
