let input = prompt("Please enter your name");
let take_name = document.querySelector("#myName");
take_name.innerHTML = input;
/*let today= new Date().toLocaleTimeString();
let take_id_clock = document.querySelector("#myClock");
take_id_clock.innerHTML = today;*/
function currentTime() {
  let day_array = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let day_count = date.getDay();
  if(hour < 10) hour = "0" + hour;
  if(minute < 10) minute = "0" + minute;
  if(second < 10) second = "0" + second;

  let data = hour + ":" + minute + ":" + second + " " + day_array[day_count-1];
  document.getElementById("myClock").innerText = data;
  let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();
