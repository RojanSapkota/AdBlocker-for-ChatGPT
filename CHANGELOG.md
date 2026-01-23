# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-23

### 🎯 Prototype Release

**Important:** This is a proactive prototype. ChatGPT's ad system has not been officially released yet. This extension is designed to be ready when/if sponsored content appears.

### Added
- Initial release of ChatGPT AdBlocker
- Smart ad detection with multiple strategies
- Real-time monitoring using MutationObserver
- Toggle ON/OFF functionality in popup
- State persistence across sessions
- User message protection (only scans assistant responses)
- Word boundary patterns to prevent false positives
- Modern ChatGPT-themed UI
- Chrome storage integration
- Comprehensive documentation

### Features
- 🛡️ Blocks sponsored messages in ChatGPT responses
- ⚡ Real-time monitoring with MutationObserver
- 🎯 Smart pattern detection with word boundaries
- 🔄 Easy toggle control
- 💾 Persistent state across page loads
- 🎨 Clean, modern interface

### Security
- No data collection
- No external API calls
- Minimal permissions (activeTab, storage)
- Privacy-focused design

### Performance
- Lightweight footprint
- Efficient DOM scanning
- Optimized pattern matching
- WeakSet for memory management

---

## [Unreleased]

### Planned
- Chrome Web Store publication
- Firefox support
- Custom pattern editor
- Whitelist functionality
- Statistics dashboard
- Export/import settings

---

[1.0.0]: https://github.com/rojansapkota/chatgpt-adblocker/releases/tag/v1.0.0
