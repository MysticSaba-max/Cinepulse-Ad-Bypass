# 🎬 Cinepulse Ad Bypass Extension

> **Your time is important.** Don't waste it on ads.

A browser extension that automatically removes the ad overlay on Cinepulse websites, giving you instant access to your content.

## 🚀 Installation

### Chrome / Edge / Brave

1. Download or clone this repository

2. Open your browser's extensions page:
   - **Chrome**: `chrome://extensions/`
   - **Edge**: `edge://extensions/`
   - **Brave**: `brave://extensions/`

3. Enable **Developer mode** (toggle in the top right corner)

4. Click **"Load unpacked"**

5. Select the `Chrome` folder

6. Done! ✅ The extension is now active.

## ⚙️ How It Works

The extension uses multiple methods to ensure the ad overlay is removed:

| Method | Description |
|--------|-------------|
| **XPath** | Targets the exact element in the DOM tree |
| **CSS Selector** | Backup method based on overlay class names |
| **MutationObserver** | Watches for dynamically loaded overlays |
| **Periodic Check** | Runs every 500ms for the first 5 seconds |

## 📁 Files

```
Chrome/
├── manifest.json    # Extension configuration
└── content.js       # Script that removes the overlay
```

## 🔧 Customization

### Add more domains

Edit `manifest.json` and add domains to the `matches` array:

```json
"matches": [
  "*://cinepulse.lol/*",
  "*://other-domain.com/*"
]
```

## 🐛 Troubleshooting

**Overlay not being removed?**
- Open DevTools (F12) and check for `[Cinepulse Ad Bypass]` messages in the console
- The website may have changed its HTML structure

**Extension won't load?**
- Make sure Developer mode is enabled
- Select the correct folder (`Chrome`)

## 📜 License

This project is provided as-is for educational purposes only.

---

⏱️ **Your time is important. Enjoy your content without interruptions.**
