// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  // eslint-disable-next-line no-undef
  showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
});

// eslint-disable-next-line no-undef
buttonInstall.addEventListener("click", async () => {
  // Hide the app provided install promotion
  // eslint-disable-next-line no-undef
  hideInstallPromotion();
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;
  // Optionally, send analytics event with outcome of user choice
  console.log(`User response to the install prompt: ${outcome}`);
  // We've used the prompt, and can't use it again, throw it away
  deferredPrompt = null;
});
window.addEventListener("appinstalled", () => {
  // Hide the app-provided install promotion
  // eslint-disable-next-line no-undef
  hideInstallPromotion();
  // Clear the deferredPrompt so it can be garbage collected
  deferredPrompt = null;
  // Optionally, send analytics event to indicate successful install
  console.log("PWA was installed");
});
// eslint-disable-next-line no-unused-vars
function getPWADisplayMode() {
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
  if (document.referrer.startsWith("android-app://")) {
    return "twa";
  } else if (navigator.standalone || isStandalone) {
    return "standalone";
  }
  return "browser";
}

window.matchMedia("(display-mode: standalone)").addEventListener("change", (evt) => {
  let displayMode = "browser";
  if (evt.matches) {
    displayMode = "standalone";
  }
  // Log display mode change to analytics
  console.log("DISPLAY_MODE_CHANGED", displayMode);
});
