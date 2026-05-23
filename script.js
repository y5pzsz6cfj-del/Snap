function hello() {
  alert("Hi 👍 JavaScript works");
}
function askCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      alert("Camera permission granted 👍");
    })
    .catch(error => {
      alert("Permission denied ❌
  function openCamera() {

  navigator.mediaDevices.getUserMedia({ video: true })

    .then(function(stream) {

      let video = document.getElementById("video");
      video.srcObject = stream;

    })

    .catch(function(error) {

      alert("Camera permission denied ❌");

    });

}
