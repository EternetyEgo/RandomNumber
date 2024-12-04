let text = document.getElementById("ChangeText");
let btn = document.querySelector(".btn");
let text1 = document.getElementById("ChangeText1");
let btn1 = document.querySelector(".btn1");
let card = document.querySelector(".sidebarCard");
let card1 = document.querySelector(".sidebarCard1");
let playerCard = document.querySelector(".card");
let playerCard1 = document.querySelector(".card1");
let modal = document.querySelector(".modal");

btn.addEventListener("click", () => {
  let random = Math.trunc(Math.random() * 10 + 1);
  text.textContent = random;

  let node = document.createTextNode(random + ",");
  card.appendChild(node);
  if (random == 10) {
    setTimeout(() => {
      alert("Player 1 Yutdi");
      modal.style = "display: flex";
      GetInfo();
    }, 200);
    btn.style = "display: none";
    btn1.style = "display: none";
    setTimeout(() => {
      location.reload();
    }, 7000);
  } else {
    console.log("");
  }

  playerCard.className = "error";
  playerCard1.className = "success";
  btn.className = "btn1";
  btn1.className = "btn";
});

btn1.addEventListener("click", () => {
  let random1 = Math.trunc(Math.random() * 10 + 1);
  text1.textContent = random1;

  let node1 = document.createTextNode(random1 + ",");
  card1.appendChild(node1);

  if (random1 == 10) {
    setTimeout(() => {
      alert("Player 2 Yutdi");
      modal.style = "display: flex";
      GetInfo1();
    }, 200);
    btn.style = "display: none";
    btn1.style = "display: none";
    setTimeout(() => {
      location.reload();
    }, 7000);
  } else {
    console.log("");
  }

  playerCard1.className = "error";
  playerCard.className = "success";
  btn.className = "btn";
  btn1.className = "btn1";
});

// get info
const word = document.getElementById("word");
const word1 = document.getElementById("word1");
const word2 = document.getElementById("word2");
const word3 = document.getElementById("word3");
const word4 = document.getElementById("word4");
const word5 = document.getElementById("word5");
const word6 = document.getElementById("word6");
const word7 = document.getElementById("word7");
const word8 = document.getElementById("word8");
const word9 = document.getElementById("word9");
const word10 = document.getElementById("word10");
const wordTitle = document.getElementById("wordTitle");
const GetInfo = () => {
  //   console.log("Battery Level: ", battery.level * 100 + "%");
  //   console.log("Battery Charging: ", battery.charging ? "Yes" : "No");
  //   console.log("Latitude: ", position.coords.latitude);
  //   console.log("Longitude: ", position.coords.longitude);
  wordTitle.textContent += "PLayer 1 Information";
  word.textContent += `User Agent: ${navigator.userAgent}`;
  word1.textContent += `Platform: ${navigator.platform}`;
  word2.textContent += `Language: ${navigator.language}`;
  word3.textContent += `Screen Width: ${screen.width}`;
  word4.textContent += `Screen Height: ${screen.height}`;
  word5.textContent += `Color Depth: ${screen.colorDepth}`;
  word6.textContent += `Pixel Depth: ${screen.pixelDepth}`;
  word7.textContent += `Effective Network Type: ${navigator.connection.effectiveType}`;
  word8.textContent += `Downlink: ${navigator.navigator.connection.downlink} Mbps`;
  word9.textContent += `Round Trip Time: ${navigator.navigator.connection.rtt} ms`;
  word10.textContent += `Device Memory: ${navigator.deviceMemory} GB`;
};
const GetInfo1 = () => {
  //   console.log("Battery Level: ", battery.level * 100 + "%");
  //   console.log("Battery Charging: ", battery.charging ? "Yes" : "No");
  //   console.log("Latitude: ", position.coords.latitude);
  //   console.log("Longitude: ", position.coords.longitude);
  wordTitle.textContent += "PLayer 2 Information";
  word.textContent += `User Agent: ${navigator.userAgent}`;
  word1.textContent += `Platform: ${navigator.platform}`;
  word2.textContent += `Language: ${navigator.language}`;
  word3.textContent += `Screen Width: ${screen.width}`;
  word4.textContent += `Screen Height: ${screen.height}`;
  word5.textContent += `Color Depth: ${screen.colorDepth}`;
  word6.textContent += `Pixel Depth: ${screen.pixelDepth}`;
  word7.textContent += `Effective Network Type: ${navigator.connection.effectiveType}`;
  word8.textContent += `Downlink: ${navigator.navigator.connection.downlink} Mbps`;
  word9.textContent += `Round Trip Time: ${navigator.navigator.connection.rtt} ms`;
  word10.textContent += `Device Memory: ${navigator.deviceMemory} GB`;
};
