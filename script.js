const STORAGE_KEY = "securra_state";

function saveState() {
  const data = [];

  document.querySelectorAll(".card").forEach(card => {
    data.push({
      name: card.querySelector("h3").innerText,
      checked: card.querySelector("input").checked
    });
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadState() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!data) return;

  document.querySelectorAll(".card").forEach(card => {
    const name = card.querySelector("h3").innerText;
    const saved = data.find(d => d.name === name);
    if (!saved) return;

    const toggle = card.querySelector("input");
    toggle.checked = saved.checked;
    applyDeviceUI(card, toggle.checked);
  });
}

function getColor(card) {
  switch(card.dataset.device) {
    case 'door': return 'sage';
    case 'camera': return 'blue';
    case 'light': return 'amber';
    case 'alarm': return 'red';
    default: return 'blue';
  }
}

function getText(card, state){
  if(!state) return "OFF";

  switch(card.dataset.device){
    case 'door': return 'LOCKED';
    case 'camera': return 'LIVE';
    case 'light': return 'ON';
    case 'alarm': return 'ARMED';
    default: return 'ON';
  }
}

function applyDeviceUI(card, state){
  const status = card.querySelector("p");

  card.classList.remove('glow-sage','glow-blue','glow-amber','glow-red');

  status.innerText = getText(card,state);

  if(state){
    card.classList.add('glow-' + getColor(card));
  }
}

function attachToggle(card){
  const toggle = card.querySelector("input");

  toggle.addEventListener("change", ()=>{
    applyDeviceUI(card, toggle.checked);
    saveState();
  });
}

document.querySelectorAll(".card").forEach(attachToggle);

window.addEventListener("DOMContentLoaded", loadState);

const cameraBtn = document.getElementById("camera");
const app = document.querySelector(".app");
const cam = document.getElementById("cam");
const back = document.getElementById("back");

cameraBtn.onclick = () => {
  app.style.display = "none";
  cam.style.display = "grid";
};

back.onclick = () => {
  cam.style.display = "none";
  app.style.display = "flex";
};

const settings = document.getElementById("settings");
const settingsBtn = document.getElementById("settingsBtn");
const backFromSettings = document.getElementById("backFromSettings");

settingsBtn.onclick = ()=>{
  app.style.display = "none";
  cam.style.display = "none";
  settings.style.display = "block";
};

backFromSettings.onclick = ()=>{
  settings.style.display = "none";
  app.style.display = "flex";
};

aiCamera.onclick = ()=>{
  alert("This feature is available for Premium users only.");
};


const addBtn = document.getElementById("addBtn");
const addPanel = document.getElementById("addPanel");
const addDevice = document.getElementById("addDevice");
const deviceType = document.getElementById("deviceType");
const grid = document.querySelector(".grid");

addBtn.onclick = ()=>{
  addPanel.style.display = addPanel.style.display === "flex" ? "none" : "flex";
};

addDevice.onclick = ()=>{
  const type = deviceType.value;

  const icon = type==="light"?"lightbulb":
               type==="camera"?"video":
               type==="fan"?"fan":"wifi";

  const card = document.createElement("div");
  card.className="card";
  card.dataset.device=type;

  card.innerHTML=`
    <i class="fas fa-${icon}"></i>
    <h3>${type.charAt(0).toUpperCase()+type.slice(1)}</h3>
    <p>OFF</p>
    <label class="toggle">
      <input type="checkbox">
      <span class="slider"></span>
    </label>
  `;

  grid.appendChild(card);

  attachToggle(card);    
  saveState();            

  addPanel.style.display="none";
};
