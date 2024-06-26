function showMessage() {
  console.log("showing Messssage");
  var envelopeContainer = document.getElementById("envelope-container");
  var letterContainer = document.getElementById("letter-container");
  var backgroundClouds = document.getElementById("cloud-container");
  var flowers = document.getElementById("flower-container");
  var cherry = document.getElementById("cherry-container");
  try {
    envelopeContainer.style.display = "none";
    backgroundClouds.style.display = "none";

    flowers.style.display = "block";
    cherry.style.display = "block";
    letterContainer.style.display = "block";
    console.log("succes with showing message");
  } catch (error) {
    console.error("an error occured", error);
  }
}
