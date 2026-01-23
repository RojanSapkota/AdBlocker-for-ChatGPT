# Security Policy

## 🔒 Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## 🛡️ Security Features

ChatGPT AdBlocker is designed with security and privacy in mind:

### Data Privacy
- ✅ **No data collection** - We don't collect any user data
- ✅ **No external requests** - All processing happens locally
- ✅ **No analytics** - No tracking or telemetry
- ✅ **No third-party services** - Completely self-contained

### Permissions
The extension requests minimal permissions:
- **activeTab** - To interact with ChatGPT pages
- **storage** - To save toggle state locally

### Code Security
- ✅ **No eval()** - No dynamic code execution
- ✅ **No inline scripts** - Follows CSP best practices
- ✅ **Content Security Policy** - Strict CSP headers
- ✅ **Open source** - All code is publicly auditable

## 🐛 Reporting a Vulnerability

We take security seriously. If you discover a security vulnerability:

### Please DO:
1. **Email us privately** at gh-security@rojansapkota.com.np (or create a private security advisory on GitHub)
2. **Provide details**:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)
3. **Give us time** to address the issue before public disclosure

### Please DON'T:
- ❌ Publicly disclose the vulnerability before we've had a chance to fix it
- ❌ Exploit the vulnerability
- ❌ Access data that doesn't belong to you

## ⏱️ Response Timeline

- **Initial response**: Within 48 hours
- **Status update**: Within 7 days
- **Fix timeline**: Depends on severity
  - Critical: Within 24-48 hours
  - High: Within 7 days
  - Medium: Within 30 days
  - Low: Next release cycle

## 🏆 Recognition

We appreciate security researchers who help keep our users safe. With your permission, we'll:
- Credit you in our CHANGELOG
- Mention you in release notes
- Add you to our security hall of fame

## 🔐 Security Best Practices for Users

### Installation
- ✅ Only install from official sources (GitHub, Chrome Web Store)
- ✅ Verify the publisher/author
- ✅ Check permissions before installing
- ✅ Keep the extension updated

### Usage
- ✅ Review what permissions the extension requests
- ✅ Disable the extension if you notice suspicious behavior
- ✅ Report any security concerns immediately

## 📋 Security Checklist

We regularly:
- [ ] Review code for security vulnerabilities
- [ ] Update dependencies
- [ ] Follow Chrome extension security best practices
- [ ] Conduct security audits
- [ ] Monitor for reported issues

## 🔍 Audit Information

- **Last security audit**: 2026-01-23
- **Audit scope**: Full codebase review
- **Findings**: None
- **Status**: Secure

## 📞 Contact

For security-related inquiries:
- **Email**: gh-security@rojansapkota.com.np
- **GitHub**: [Security Advisories](https://github.com/rojansapkota/chatgpt-adblocker/security/advisories)

---

**Thank you for helping keep ChatGPT AdBlocker secure!** 🙏
