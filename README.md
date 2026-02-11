<div align="center">

#  ChatGPT AdBlocker

**Block sponsored content in ChatGPT responses**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Chromium](https://img.shields.io/badge/Chromium-Compatible-green.svg)](https://www.chromium.org/)
[![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)](https://github.com/rojansapkota/chatgpt-adblocker/releases)

*Works on Chrome, Edge, Brave, Opera, Vivaldi, and all Chromium-based browsers*

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Contributing](#-contributing) • [License](#-license)

</div>

---

## 📖 Overview

ChatGPT AdBlocker is a lightweight browser extension that automatically detects and blocks sponsored content in ChatGPT responses, ensuring a clean and ad-free AI experience. Works on all Chromium-based browsers including Chrome, Edge, Brave, Opera, and Vivaldi.

> **⚠️ Important Note:**  
> ~~ChatGPT's ad system has **not been officially released yet**. This extension is a **proactive prototype** designed to be ready when/if sponsored content appears in ChatGPT responses. The detection patterns and blocking mechanisms may need adjustments once the actual ad system is launched. Consider this an early-access tool that will evolve based on how ChatGPT implements advertisements.~~
> As of 9 February ads are live in ChatGPT. However, they are available only for US based users and free and Go users above 18. You can read more info here: https://openai.com/index/testing-ads-in-chatgpt/

##  Features

-  **Smart Detection** - Multiple detection methods for comprehensive ad blocking
-  **Real-time Monitoring** - Instantly blocks sponsored content as it appears
-  **Precision Targeting** - Only blocks ChatGPT's responses, never your messages
-  **Toggle Control** - Easy ON/OFF switch in the popup
-  **State Persistence** - Remembers your preferences across sessions
-  **Modern UI** - Clean, ChatGPT-themed interface

##  Installation

### From Source

**Compatible with all Chromium-based browsers:**
-  Google Chrome
-  Microsoft Edge  
-  Brave Browser
-  Opera
-  Vivaldi
-  Any Chromium-based browser with developer mode

1. **Download the extension**
   ```bash
   git clone https://github.com/rojansapkota/chatgpt-adblocker.git
   cd chatgpt-adblocker
   ```

2. **Load in your browser**
   
   **Chrome / Brave / Vivaldi:**
   - Navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top-right)
   - Click "Load unpacked"
   - Select the extension folder
   
   **Microsoft Edge:**
   - Navigate to `edge://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the extension folder
   
   **Opera:**
   - Navigate to `opera://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the extension folder

3. **You're done!** 

### From Web Stores

*Coming soon to Chrome Web Store and Edge Add-ons...*

##  Usage

1. **Click the extension icon** in your browser toolbar
2. **Toggle protection** ON or OFF as needed
3. **Visit ChatGPT** and enjoy an ad-free experience

The extension works automatically - no configuration needed!

##  How It Works

### Detection Methods

The extension uses multiple strategies to identify sponsored content:

1. **Text Pattern Matching** - Detects keywords like "sponsored", "advertisement", "promoted"
2. **CSS Selector Detection** - Identifies elements with ad-related classes
3. **Attribute Analysis** - Checks data attributes and aria-labels
4. **DOM Structure** - Analyzes ChatGPT message containers

### User Message Protection

Your messages are **completely safe**:
-  Only scans ChatGPT's assistant responses
-  Triple-layer protection against false positives
-  Uses `data-message-author-role="assistant"` targeting

##  Supported Platforms

### Browsers
-  Google Chrome
-  Microsoft Edge
-  Brave Browser
-  Opera
-  Vivaldi
-  Any Chromium-based browser with developer mode

### ChatGPT Platforms
-  ChatGPT (chatgpt.com)
-  ChatGPT Legacy (chat.openai.com)

## Development

### Prerequisites

- Any Chromium-based browser (Chrome, Edge, Brave, Opera, Vivaldi, etc.)
- Basic knowledge of browser extensions

### Project Structure

```
chatgpt-adblocker/
├── manifest.json       # Extension configuration
├── content.js          # Main ad-blocking logic
├── index.html          # Popup interface
├── index.css           # Popup styling
├── index.js            # Popup functionality
├── icon.png            # Extension icon
├── LICENSE             # MIT License
└── README.md           # This file
```

### Building

No build process required! The extension runs directly from source.

### Testing

1. Load the extension in your browser
2. Navigate to ChatGPT
3. Open DevTools console (F12)
4. Look for initialization messages
5. Test with toggle ON/OFF

##  Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Guidelines

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Disclaimer

**Prototype Status:**
~~This extension is built to block potential sponsored content in ChatGPT. As of version 1.0.0:
-  This extension is **ready to block them** when/if they appear
-  Detection patterns **may need updates** once the actual ad system launches
-  The extension is **fully functional** but untested against real ChatGPT ads.~~

**Functionality:**
This extension is designed to improve user experience by removing sponsored content. It:
-  Does not modify ChatGPT's core functionality
-  Does not intercept or modify API requests
-  Does not collect any user data
-  Respects OpenAI's terms of service
-  Will be updated as needed when ChatGPT's ad system launches

**Future Updates:**
Once ChatGPT officially implements sponsored content, this extension will be updated to:
- Adapt to the actual ad implementation
- Refine detection patterns based on real ads
- Optimize blocking mechanisms
- Ensure compatibility with ChatGPT's evolving interface

Use at your own discretion. This is experimental software that will evolve with ChatGPT's advertising system.

##  Acknowledgments

- Built with modern web technologies
- Designed with user privacy in mind
- Inspired by the need for an ad-free AI experience

##  Support

Having issues? Please:
1. Check the [Troubleshooting Guide](TROUBLESHOOTING.md)
2. Search [existing issues](https://github.com/rojansapkota/chatgpt-adblocker/issues)
3. Create a [new issue](https://github.com/rojansapkota/chatgpt-adblocker/issues/new) if needed

##  Roadmap

- [ ] Custom pattern editor
- [ ] Whitelist functionality
- [ ] Statistics dashboard
- [ ] Export/import settings

---

<div align="center">

**Made with for the ChatGPT community**

[⬆ back to top](#-chatgpt-adblocker)

</div>



### Support Me

[![Wise](https://img.shields.io/badge/Wise-00B9FF?style=for-the-badge&logo=wise&logoColor=white)](https://rojansapkota.com.np/wise) 
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/payrojan) 
[![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/rojansapkota) 
[![Website](https://img.shields.io/badge/Website-000000?style=for-the-badge&logo=google-chrome&logoColor=white)](https://rojansapkota.com.np/pay) 
![Views Counter](https://views-counter.vercel.app/badge?pageId=rojansapkota-ChatGPT-AdBlocker&leftColor=000000&rightColor=0adb3f&type=total&label=Viewers&style=none)
