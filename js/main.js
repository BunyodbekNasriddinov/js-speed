const elForm = document.querySelector(".js-form");
const elInput = document.querySelector(".js-input");

let resPedestrain = document.querySelector(".res-pedestrain");
let resBicycle = document.querySelector(".res-bicycle");
let resCar = document.querySelector(".res-car");
let resPlane = document.querySelector(".res-plane");

const pedestrainSpeed = 3.6; // km/hour
const bicycleSpeed = 20.1; // km/hour
const carSpeed = 70; // km/hour
const planeSpeed = 800; // km/hour

function pedestrain(distance, time) {
  time = distance / pedestrainSpeed;
  time = `${+time.toFixed(1)} soat ${(time / 60).toFixed(1)} daqiqa ${(
    time / 3600
  ).toFixed(1)} soniya`;
  return time;
}
function bicycle(distance, time) {
  time = distance / bicycleSpeed;
  time = `${+time.toFixed(1)} soat ${(time / 60).toFixed(1)} daqiqa ${(
    time / 3600
  ).toFixed(1)} soniya`;
  return time;
}
function car(distance, time) {
  time = distance / carSpeed;
  time = `${+time.toFixed(1)} soat ${(time / 60).toFixed(1)} daqiqa ${(
    time / 3600
  ).toFixed(1)} soniya`;
  return time;
}
function plane(distance, time) {
  time = distance / planeSpeed;
  time = `${+time.toFixed(1)} soat ${(time / 60).toFixed(1)} daqiqa ${(
    time / 3600
  ).toFixed(1)} soniya`;
  return time;
}

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log();
  let pedestrainTime = pedestrain(elInput.value);
  let bicycleTime = bicycle(elInput.value);
  let carTime = car(elInput.value);
  let planeTime = plane(elInput.value);
  resPedestrain.textContent = pedestrainTime;
  resBicycle.textContent = bicycleTime;
  resCar.textContent = carTime;
  resPlane.textContent = planeTime;
});
