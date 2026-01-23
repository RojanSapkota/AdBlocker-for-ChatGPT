# 🔧 Troubleshooting Guide

Having trouble with the ChatGPT AdBlocker? Here are solutions to common issues.

## 📋 Quick Checks

Before diving deeper, please verify:
1. **Extension is enabled** in `chrome://extensions/`
2. **Toggle is ON** (Green) in the extension popup
3. **You are on ChatGPT** (`chatgpt.com` or `chat.openai.com`)
4. **You have reloaded the page** after installing/updating

## ❌ Common Issues

### 1. "Content script not ready yet" or "Receiving end does not exist"
**Symptoms:**
- Error in console when toggling protection
- Toggle works but settings might not apply immediately

**Cause:**
- The extension was just installed/reloaded but the ChatGPT tab hasn't been refreshed.
- You are trying to use the toggle on a page that isn't ChatGPT.

**Solution:**
- **Refresh your ChatGPT tab.** This initializes the extension on the page.
- Note that the toggle works globally, but the "live" update only happens on active ChatGPT tabs.

---

### 2. Ads are still showing
**Symptoms:**
- You see "Sponsored" or "Ad" labels in ChatGPT responses.
- The extension icon is present but nothing happens.

**Possible Causes:**
- **Protection is OFF:** Check the popup menu.
- **New Ad Format:** ChatGPT might have changed how they display ads.
- **False Negative:** The ad pattern isn't in our detection list yet.

**Solution:**
1. Ensure the toggle in the extension popup is **ON** (Green).
2. **Reload the page.**
3. If the ad persists, please **report it**!
   - Take a screenshot.
   - Open a [Bug Report](https://github.com/rojansapkota/chatgpt-adblocker/issues/new?template=bug_report.md) on GitHub.
   - Include the exact text giving it away (e.g., "Sponsored by...").

---

### 3. Extension icon is greyed out
**Symptoms:**
- You can't click the extension icon.

**Cause:**
- This usually shouldn't happen with this extension as it uses a browser action.

**Solution:**
- Check if you have restricted the extension's access in Chrome settings.
- Reinstall the extension.

---

### 4. "This is an adjective" is being blocked (False Positive)
**Symptoms:**
- Normal text is getting removed because it contains the word "ad" or "sponsored".

**Solution:**
- We have implemented "word boundary" checks to prevent this (e.g., matching "ad" but not "add").
- If you still see this, please **report a bug** with the specific sentence that triggered it.

---

## 🛠️ Debugging Steps

If you are technical or want to help us debug:

1. **Open Developer Tools** (F12 or Right-click -> Inspect).
2. Go to the **Console** tab.
3. Filter for logs from the extension (look for `🛡️ ChatGPT AdBlocker`).
4. Type `chatGPTAdBlockerStats()` in the console to see internal stats.
   - This will show you if the blocker is running and how many ads it thinks it blocked.

## 📞 Still need help?

If these steps didn't solve your problem:
- Search existing [Issues](https://github.com/rojansapkota/chatgpt-adblocker/issues)
- Open a [New Issue](https://github.com/rojansapkota/chatgpt-adblocker/issues/new)
