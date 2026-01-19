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

  






