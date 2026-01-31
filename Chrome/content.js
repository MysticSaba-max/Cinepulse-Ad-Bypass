// Cinepulse Ad Overlay Remover

function removeAdOverlay() {
  // Method 1: Remove by XPath
  const xpath = "/html/body/div[1]/div[2]/div[3]/div[1]/div[3]/div/div[3]/div/div";
  const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  if (result.singleNodeValue) {
    result.singleNodeValue.remove();
    console.log("[Cinepulse Ad Bypass] Removed overlay via XPath");
  }

  // Method 2: Remove by class selector (backup method)
  const overlays = document.querySelectorAll('div.absolute.inset-0.flex.items-center.justify-center.z-modal-overlay.cursor-pointer');
  overlays.forEach((overlay) => {
    overlay.remove();
    console.log("[Cinepulse Ad Bypass] Removed overlay via class selector");
  });
}

// Run immediately
removeAdOverlay();

// Observe DOM changes to catch dynamically loaded overlays
const observer = new MutationObserver((mutations) => {
  removeAdOverlay();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Also run periodically for a short time after page load
let attempts = 0;
const interval = setInterval(() => {
  removeAdOverlay();
  attempts++;
  if (attempts >= 10) {
    clearInterval(interval);
  }
}, 500);

console.log("[Cinepulse Ad Bypass] Extension loaded");
