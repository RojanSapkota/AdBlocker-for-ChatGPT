# Contributing to ChatGPT AdBlocker

First off, thank you for considering contributing to ChatGPT AdBlocker! 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our commitment to providing a welcoming and inclusive environment. Be respectful, constructive, and kind.

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce**
- **Expected vs actual behavior**
- **Screenshots** (if applicable)
- **Browser version**
- **Extension version**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title and description**
- **Use case** - why is this enhancement useful?
- **Proposed solution**
- **Alternative solutions** you've considered

### Pull Requests

1. **Fork the repo** and create your branch from `main`
2. **Make your changes** following our coding standards
3. **Test thoroughly** - ensure the extension works as expected
4. **Update documentation** if needed
5. **Submit the PR** with a clear description

## 🛠️ Development Setup

### Prerequisites

- Chrome browser (latest version)
- Git
- Code editor (VS Code recommended)

### Setup Steps

```bash
# Clone your fork
git clone https://github.com/rojansapkota/chatgpt-adblocker.git
cd chatgpt-adblocker

# Create a branch
git checkout -b feature/your-feature-name

# Load extension in Chrome
# 1. Open chrome://extensions/
# 2. Enable "Developer mode"
# 3. Click "Load unpacked"
# 4. Select the project folder
```

### Testing

1. **Load the extension** in Chrome
2. **Navigate to ChatGPT**
3. **Open DevTools** (F12)
4. **Test your changes**:
   - Toggle ON/OFF
   - Check console for errors
   - Verify ad blocking works
   - Test edge cases

## 🔄 Pull Request Process

1. **Update the README.md** with details of changes if applicable
2. **Ensure all tests pass** and the extension works correctly
3. **Update version number** in `manifest.json` following [SemVer](https://semver.org/)
4. **Get approval** from at least one maintainer
5. **Squash commits** if requested

### PR Title Format

Use conventional commits:
- `feat: Add new detection pattern`
- `fix: Resolve toggle state issue`
- `docs: Update installation guide`
- `refactor: Improve code structure`
- `test: Add test cases`

## 📝 Coding Standards

### JavaScript

- Use **ES6+ features**
- Follow **functional programming** principles where possible
- Add **comments** for complex logic
- Use **meaningful variable names**
- Keep functions **small and focused**

### Code Style

```javascript
// ✅ Good
function isElementSponsored(element) {
    if (!element) return false;
    
    const text = getElementText(element);
    return matchesPattern(text, config.sponsoredPatterns);
}

// ❌ Bad
function check(e) {
    if(!e)return false;
    var t=getElementText(e);return matchesPattern(t,config.sponsoredPatterns);
}
```

### File Organization

- **Keep files focused** - one responsibility per file
- **Group related code** with clear section comments
- **Use consistent naming** - camelCase for variables/functions

### Comments

```javascript
// ============================================
// Section Header (for major sections)
// ============================================

// Brief explanation of complex logic
function complexFunction() {
    // Step-by-step comments for clarity
}
```

## 🧪 Testing Checklist

Before submitting a PR, verify:

- [ ] Extension loads without errors
- [ ] Toggle switch works correctly
- [ ] Ad blocking functions as expected
- [ ] No console errors
- [ ] User messages are not affected
- [ ] State persists across page reloads
- [ ] Works on both chatgpt.com and chat.openai.com
- [ ] No memory leaks (check with DevTools)

## 📚 Documentation

- **Update README.md** for user-facing changes
- **Add inline comments** for complex code
- **Document new features** in detail
- **Update CHANGELOG.md** (if exists)

## 🐛 Debugging Tips

### Enable Debug Mode

In `content.js`, set:
```javascript
debugMessages: true
```

### Check Console

Look for messages starting with:
```
🛡️ ChatGPT AdBlocker: [timestamp] message
```

### Test Patterns

Use the console function:
```javascript
chatGPTAdBlockerStats()
```

## 🎯 Areas for Contribution

We especially welcome contributions in:

- **New detection patterns** - improve ad detection
- **Performance optimization** - reduce resource usage
- **UI/UX improvements** - enhance the popup interface
- **Documentation** - improve guides and examples
- **Testing** - add test cases and scenarios
- **Browser support** - Firefox, Edge compatibility

## 📞 Questions?

Feel free to:
- Open an issue for discussion
- Ask in pull request comments
- Reach out to maintainers

## 🙏 Thank You!

Your contributions make this project better for everyone. We appreciate your time and effort! ❤️

---

**Happy Coding!** 🚀
