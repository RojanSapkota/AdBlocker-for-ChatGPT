document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('toggleProtection');
  const statusText = document.getElementById('statusText');

  // Check if we're in extension context
  const isExtensionContext = typeof chrome !== 'undefined' && chrome.storage;

  // Load saved state
  if (isExtensionContext) {
    chrome.storage.local.get(['protectionEnabled'], function (result) {
      const isEnabled = result.protectionEnabled !== false; // Default to true
      toggle.checked = isEnabled;
      updateStatusText(isEnabled);
    });
  } else {
    // Default state when viewing HTML directly
    toggle.checked = true;
    updateStatusText(true);
  }

  // Handle toggle change
  toggle.addEventListener('change', function () {
    const isEnabled = this.checked;
    updateStatusText(isEnabled);

    if (isExtensionContext) {
      chrome.storage.local.set({ protectionEnabled: isEnabled });

      // Send message to content script (only if on ChatGPT)
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs[0] && (tabs[0].url.includes('chatgpt.com') || tabs[0].url.includes('chat.openai.com'))) {
          chrome.tabs.sendMessage(tabs[0].id, {
            action: 'toggleProtection',
            enabled: isEnabled
          }, function (response) {
            // Ignore errors if content script isn't loaded yet
            if (chrome.runtime.lastError) {
              console.log('Content script not ready yet, toggle will apply on next page load');
            }
          });
        }
      });
    }
  });

  // Update status text
  function updateStatusText(enabled) {
    statusText.textContent = enabled ? 'ON' : 'OFF';
    statusText.classList.toggle('off', !enabled);
  }

  console.log('🛡️ ChatGPT AdBlocker popup loaded');
  if (!isExtensionContext) {
    console.log('⚠️ Running in preview mode (not installed as extension)');
  }
});
