document.querySelectorAll('.card').forEach(card => {
  const toggle = card.querySelector('.toggle input');
  const status = card.querySelector('p');

  toggle.addEventListener('change', () => {
    card.classList.remove('glow-sage','glow-blue','glow-amber','glow-red');

    if (toggle.checked) {
      const color = getColor(card);
      card.classList.add('glow-' + color);
      switch(card.dataset.device) {
        case 'door': status.innerText = 'LOCKED'; break;
        case 'camera': status.innerText = 'LIVE'; break;
        case 'light': status.innerText = 'ON'; break;
        case 'alarm': status.innerText = 'ARMED'; break;
        default: status.innerText = 'ON';
      }
    } else {
      status.innerText = 'OFF';
    }
  });
});

function getColor(card) {
  switch(card.dataset.device) {
    case 'door': return 'sage';
    case 'camera': return 'blue';
    case 'light': return 'amber';
    case 'alarm': return 'red';
    default: return 'blue';
  }
}


  const cameraBtn = document.getElementById("camera");
  const app = document.querySelector(".app");
  const cam = document.getElementById("cam");
  const back = document.getElementById("back");

  cameraBtn.addEventListener("click", () => {
    app.style.display = "none";
    cam.style.display = "block";
  });

  back.addEventListener("click", () => {
    cam.style.display = "none";
    app.style.display = "flex";
  });


  const settings = document.getElementById("settings");
  const settingsBtn = document.getElementById("settingsBtn");

  const backFromSettings = document.getElementById("backFromSettings");

  
  cameraBtn.addEventListener("click", () => {
    app.style.display = "none";
    settings.style.display = "none";
    cam.style.display = "grid";
  });

  settingsBtn.addEventListener("click", () => {
    app.style.display = "none";
    cam.style.display = "none";
    settings.style.display = "block";
  });

  backFromSettings.addEventListener("click", () => {
    settings.style.display = "none";
    app.style.display = "flex";
  });

  aiCamera.addEventListener("click", () => {
      alert("🔒 This feature is available for Premium users only.");
  });

  const addBtn = document.getElementById("addBtn");
const addPanel = document.getElementById("addPanel");
const addDevice = document.getElementById("addDevice");
const deviceType = document.getElementById("deviceType");
const grid = document.querySelector(".grid");

addBtn.addEventListener("click", () => {
  addPanel.style.display =
    addPanel.style.display === "flex" ? "none" : "flex";
});

addDevice.addEventListener("click", () => {
  const type = deviceType.value;

  const card = document.createElement("div");
  card.className = "card glow-blue";
  card.dataset.device = type;

  card.innerHTML = `
    <i class="fas fa-${type === "light" ? "lightbulb" :
                       type === "camera" ? "video" :
                       type === "fan" ? "fan" : "wifi"}"></i>
    <h3>${type.charAt(0).toUpperCase() + type.slice(1)}</h3>
    <p>OFF</p>
    <label class="toggle">
      <input type="checkbox">
      <span class="slider"></span>
    </label>
  `;

  grid.appendChild(card);
  addPanel.style.display = "none";
});







