(function () {
    'use strict';

    // ============================================
    // ChatGPT Ad Blocker Configuration
    // ============================================

    const config = {
        // Protection enabled/disabled state
        enabled: true,

        // Enable debug messages in console (set to false for production)
        debugMessages: false,

        // Check interval in milliseconds
        checkInterval: 500,

        // Patterns to detect sponsored content
        sponsoredPatterns: [
            /\bsponsored\b/i,
            /\badvertisement\b/i,
            /\bpromoted\b/i,
            /\bpartner content\b/i,
            /\bpaid promotion\b/i,
            /\bad\s*$/i,
            /\[ad\]/i,
            /\(sponsored\)/i,
            /\bthis is an ad\b/i,  // Word boundary to avoid matching "this is an adjective"
        ],

        // CSS selectors that might contain ads
        adSelectors: [
            '[data-sponsored]',
            '[data-ad]',
            '[data-advertisement]',
            '[aria-label*="sponsored" i]',
            '[aria-label*="advertisement" i]',
            '[class*="sponsored" i]',
            '[class*="advertisement" i]',
            '[id*="sponsored" i]',
            '[id*="advertisement" i]',
            '.ad-container',
            '.sponsored-content',
            '.promotion',
            '[data-testid*="ad"]',
            '[data-testid*="sponsored"]',
        ],

        // Additional attributes to check
        suspiciousAttributes: [
            'data-ad',
            'data-sponsored',
            'data-promotion',
            'data-partner',
        ]
    };

    // ============================================
    // Statistics & State
    // ============================================

    let stats = {
        adsBlocked: 0,
        lastAdBlockedTime: null,
        startTime: Date.now()
    };

    let processedElements = new WeakSet();
    let observer = null;

    // ============================================
    // Utility Functions
    // ============================================

    function log(message, level = 'info', ...args) {
        if (!config.debugMessages) return;

        const prefix = '🛡️ ChatGPT AdBlocker:';
        const timestamp = new Date().toLocaleTimeString();
        const fullMessage = `${prefix} [${timestamp}] ${message}`;

        switch (level) {
            case 'error':
                console.error(fullMessage, ...args);
                break;
            case 'warn':
                console.warn(fullMessage, ...args);
                break;
            case 'success':
                console.log(`%c${fullMessage}`, 'color: #10b981; font-weight: bold;', ...args);
                break;
            default:
                console.log(fullMessage, ...args);
        }
    }

    function getElementText(element) {
        return (element.textContent || element.innerText || '').trim();
    }

    function hasAttribute(element, attributes) {
        return attributes.some(attr => element.hasAttribute(attr));
    }

    function matchesPattern(text, patterns) {
        return patterns.some(pattern => pattern.test(text));
    }

    // ============================================
    // Ad Detection Functions
    // ============================================

    function isElementSponsored(element) {
        // Skip if already processed
        if (processedElements.has(element)) {
            return false;
        }

        // ============================================
        // CRITICAL: Only check assistant messages, not user messages
        // ============================================

        // Skip user messages entirely (they have class "user-message-bubble-color")
        if (element.classList && element.classList.contains('user-message-bubble-color')) {
            return false;
        }

        // Skip if this element is inside a user message
        if (element.closest && element.closest('.user-message-bubble-color')) {
            return false;
        }

        // Only process assistant messages
        // Assistant messages have data-message-author-role="assistant"
        const isAssistantMessage = element.getAttribute('data-message-author-role') === 'assistant' ||
            (element.closest && element.closest('[data-message-author-role="assistant"]'));

        if (!isAssistantMessage) {
            return false; // Not an assistant message, skip it
        }


        // Check 1: CSS Selectors
        for (const selector of config.adSelectors) {
            try {
                if (element.matches(selector)) {
                    log(`Detected ad via selector: ${selector}`, 'warn');
                    return true;
                }
            } catch (e) {
                // Invalid selector, skip
            }
        }

        // Check 2: Suspicious attributes
        if (hasAttribute(element, config.suspiciousAttributes)) {
            log('Detected ad via suspicious attributes', 'warn');
            return true;
        }

        // Check 3: Text content patterns
        const text = getElementText(element);
        if (text && matchesPattern(text, config.sponsoredPatterns)) {
            log(`Detected ad via text pattern: "${text.substring(0, 50)}..."`, 'warn');
            return true;
        }

        // Check 4: Aria labels
        const ariaLabel = element.getAttribute('aria-label');
        if (ariaLabel && matchesPattern(ariaLabel, config.sponsoredPatterns)) {
            log(`Detected ad via aria-label: "${ariaLabel}"`, 'warn');
            return true;
        }

        // Check 5: Data attributes
        const dataAttrs = Array.from(element.attributes)
            .filter(attr => attr.name.startsWith('data-'))
            .map(attr => `${attr.name}=${attr.value}`);

        for (const dataAttr of dataAttrs) {
            if (matchesPattern(dataAttr, config.sponsoredPatterns)) {
                log(`Detected ad via data attribute: ${dataAttr}`, 'warn');
                return true;
            }
        }

        // Check 6: Child elements with sponsored indicators
        const childText = Array.from(element.querySelectorAll('*'))
            .map(child => getElementText(child))
            .join(' ');

        if (childText && matchesPattern(childText, config.sponsoredPatterns)) {
            log('Detected ad via child element text', 'warn');
            return true;
        }

        return false;
    }

    function removeAdElement(element) {
        if (!element || !element.parentNode) return false;

        try {
            // Mark as processed before removing
            processedElements.add(element);

            // Try to find the parent container (message container)
            let targetElement = element;

            // Look for common ChatGPT message containers
            const messageContainer = element.closest('[data-message-id]') ||
                element.closest('.group') ||
                element.closest('[class*="message"]') ||
                element;

            if (messageContainer && messageContainer !== element) {
                targetElement = messageContainer;
                log('Found message container, removing entire message', 'warn');
            }

            // Add a visual indicator before removing (for debugging)
            if (config.debugMessages) {
                targetElement.style.outline = '3px solid red';
                targetElement.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
                setTimeout(() => {
                    targetElement.remove();
                }, 100);
            } else {
                targetElement.remove();
            }

            stats.adsBlocked++;
            stats.lastAdBlockedTime = new Date();

            log(`✅ Blocked sponsored content! Total blocked: ${stats.adsBlocked}`, 'success');
            return true;
        } catch (error) {
            log(`Error removing ad element: ${error.message}`, 'error');
            return false;
        }
    }

    // ============================================
    // Main Scanning Function
    // ============================================

    function scanForAds() {
        // Check if protection is enabled
        if (!config.enabled) {
            return; // Protection is OFF, don't scan
        }

        // Scan ONLY assistant messages, not user messages
        // Assistant messages have data-message-author-role="assistant"
        const messages = document.querySelectorAll('[data-message-author-role="assistant"]');

        let adsFound = 0;

        messages.forEach(message => {
            if (isElementSponsored(message)) {
                if (removeAdElement(message)) {
                    adsFound++;
                }
            }
        });

        // Also scan for standalone ad elements
        config.adSelectors.forEach(selector => {
            try {
                const adElements = document.querySelectorAll(selector);
                adElements.forEach(element => {
                    if (!processedElements.has(element)) {
                        if (removeAdElement(element)) {
                            adsFound++;
                        }
                    }
                });
            } catch (e) {
                // Invalid selector
            }
        });

        if (adsFound > 0) {
            log(`Scan complete: ${adsFound} ads removed`, 'success');
        }
    }

    // ============================================
    // Mutation Observer Setup
    // ============================================

    function setupObserver() {
        // Disconnect existing observer
        if (observer) {
            observer.disconnect();
        }

        observer = new MutationObserver((mutations) => {
            // Check if protection is enabled
            if (!config.enabled) {
                return; // Protection is OFF, don't process mutations
            }

            let shouldScan = false;

            for (const mutation of mutations) {
                // Check added nodes
                if (mutation.addedNodes.length > 0) {
                    for (const node of mutation.addedNodes) {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            // Check if the added node itself is sponsored
                            if (isElementSponsored(node)) {
                                removeAdElement(node);
                            } else {
                                shouldScan = true;
                            }
                        }
                    }
                }

                // Check attribute changes
                if (mutation.type === 'attributes') {
                    const target = mutation.target;
                    if (target.nodeType === Node.ELEMENT_NODE && isElementSponsored(target)) {
                        removeAdElement(target);
                    }
                }
            }

            if (shouldScan) {
                scanForAds();
            }
        });

        // Observe the entire document
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class', 'data-sponsored', 'data-ad', 'aria-label']
        });

        log('MutationObserver initialized', 'success');
    }

    // ============================================
    // CSS Injection for Additional Blocking
    // ============================================

    function injectBlockingCSS() {
        const style = document.createElement('style');
        style.id = 'chatgpt-adblocker-styles';

        style.textContent = `
            /* Hide elements with sponsored indicators */
            [data-sponsored="true"],
            [data-ad="true"],
            [data-advertisement="true"],
            .sponsored-content,
            .ad-container,
            .advertisement,
            [class*="sponsored" i],
            [class*="advertisement" i] {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                height: 0 !important;
                width: 0 !important;
                overflow: hidden !important;
                position: absolute !important;
                left: -9999px !important;
            }
        `;

        document.head.appendChild(style);
        log('Blocking CSS injected', 'success');
    }

    // ============================================
    // Initialization
    // ============================================

    function init() {
        log('🚀 ChatGPT AdBlocker initializing...', 'info');

        // Load saved protection state
        chrome.storage.local.get(['protectionEnabled'], function (result) {
            config.enabled = result.protectionEnabled !== false; // Default to true
            log(`Protection state loaded: ${config.enabled ? 'ENABLED' : 'DISABLED'}`, 'info');
        });

        // Inject CSS
        injectBlockingCSS();

        // Initial scan
        scanForAds();

        // Setup observer
        setupObserver();

        // Periodic scan as backup
        setInterval(scanForAds, config.checkInterval);

        log('✅ ChatGPT AdBlocker initialized successfully!', 'success');
        log(`Monitoring for sponsored content...`, 'info');
    }

    // ============================================
    // Start when DOM is ready
    // ============================================

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // ============================================
    // Expose stats for debugging
    // ============================================

    window.chatGPTAdBlockerStats = function () {
        const runtime = Math.floor((Date.now() - stats.startTime) / 1000);
        console.log('📊 ChatGPT AdBlocker Statistics:');
        console.log(`   Ads Blocked: ${stats.adsBlocked}`);
        console.log(`   Runtime: ${runtime} seconds`);
        console.log(`   Last Ad Blocked: ${stats.lastAdBlockedTime || 'Never'}`);
    };

    // ============================================
    // Message Listener for Popup Communication
    // ============================================

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.action === 'getStats') {
            // Send current statistics to popup
            sendResponse({
                stats: {
                    adsBlocked: stats.adsBlocked,
                    startTime: stats.startTime,
                    lastAdBlockedTime: stats.lastAdBlockedTime
                }
            });
        } else if (request.action === 'toggleProtection') {
            // Toggle protection on/off
            config.enabled = request.enabled;
            log(`Protection ${request.enabled ? 'enabled' : 'disabled'}`, 'info');
            sendResponse({ success: true });
        }
        return true; // Keep message channel open for async response
    });

})();

