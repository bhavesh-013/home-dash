# 🏠 Securra — Smart Home Dashboard

A responsive Smart Home Dashboard web interface built with **HTML, CSS, and JavaScript**. Control and monitor smart devices like lights, temperature, and security — all from a clean, interactive UI.

🔗 **Live Demo:** [securra-digitalboard.netlify.app](https://securra-digitalboard.netlify.app/)

---

## ✨ Features

- 💡 **Lights Control** — Toggle individual room lights on/off
- 🌡️ **Temperature Panel** — View and adjust room temperature settings
- 🔒 **Security Status** — Monitor security state at a glance
- 📱 **Responsive Design** — Works across desktop and mobile screens
- ⚡ **Dynamic UI** — Real-time panel updates using vanilla JavaScript (no frameworks)

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Page structure & semantic markup |
| CSS3 | Layout, styling & responsive design |
| JavaScript | DOM manipulation & interactive logic |

---

## 📁 Project Structure

```
home-dash/
├── index.html      # Main layout and UI structure
├── style.css       # Styling and responsive rules
└── script.js       # Interactive logic and DOM events
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/bhavesh-013/home-dash.git

# Open in browser
cd home-dash
open index.html
```

Or just visit the **[live demo](https://securra-digitalboard.netlify.app/)** directly.

---

## 💾 localStorage — How State is Saved

This project uses the browser's **`localStorage` API** to save your dashboard settings. This means your preferences (like which lights are on, or temperature values) **persist even after you close or refresh the browser tab** — no backend or database needed.

### How it works

```javascript
// Save a device state
localStorage.setItem('light_living_room', 'on');

// Read it back on page load
const lightState = localStorage.getItem('light_living_room'); // "on"

// Remove a key
localStorage.removeItem('light_living_room');

// Clear everything
localStorage.clear();
```

### Key concepts

| Concept | Detail |
|---------|--------|
| **Storage type** | Key-value pairs (strings only) |
| **Persistence** | Survives page refresh & browser close |
| **Scope** | Per origin (domain) — not shared across sites |
| **Capacity** | ~5MB per origin |
| **Sync/Async** | Synchronous — no `await` needed |

### Storing objects

Since localStorage only stores strings, objects must be serialized:

```javascript
// Save an object
const settings = { temp: 22, unit: "°C", mode: "cool" };
localStorage.setItem('tempSettings', JSON.stringify(settings));

// Read it back
const saved = JSON.parse(localStorage.getItem('tempSettings'));
console.log(saved.temp); // 22
```

### In this project

On every interaction (toggle a light, adjust temperature), the new state is saved to localStorage. When the page loads, `script.js` reads these saved values and restores the UI — so the dashboard always reflects your last session.

---

## 👤 Author

**Bhavesh Kumawat**
- GitHub: [@bhavesh-013](https://github.com/bhavesh-013)
- LinkedIn: [bhavesh-kumawat](https://www.linkedin.com/in/bhavesh-kumawat-13b191376/)
- LeetCode: [bhavesh_kmwt](https://leetcode.com/u/bhavesh_kmwt/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
