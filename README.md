
# ByeByeBots README

Ever see those weird random bot comments while looking at the comment section of your favourite YouTuber? 
Well ByeByeBots fix that for you!

---

## Table of Contents

1. [Features](#features)
2. [Main Features](#main-features)
3. [Usage](#usage)
4. [Code Explanation](#code-explanation)
5. [Contributors](#contributors)
6. [Support Me](#supportme)

---

## Features

The ByeByeBots Chrome Extension will remove 99% of the bot comments and replies!

---

### Main Features

- **Switch**: Turn the ByeByeBots on and off.
- **Enhanced User Experience**: Enjoy a cleaner comment section by reducing noise from unwanted or disruptive comments.

---

## Usage

To use the ByeByeBots Chrome Extension, follow these steps:

1. **Download the Extension**:
   - Download the extension files from the [GitHub repository](https://github.com/Altyd/BYEBYEBOT).
   - Click on the "Code" button and select "Download ZIP". Extract the downloaded ZIP file to a folder on your computer.

2. **Load the Extension in Chrome**:
   - Open Google Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" using the toggle switch in the top right corner of the page.

3. **Load the Unpacked Extension**:
   - Click on the "Load unpacked" button that appears on the left side of the screen.
   - Navigate to the folder where you extracted the extension files and select the folder.

4. **Activate the Extension**:
   - Once loaded, the YouTube Reply Filter extension will appear in your extensions list.
   - Click on the extension's icon in the Chrome toolbar to enable or disable the filter as needed.

5. **Enjoy Cleaner YouTube Comments**:
   - Browse YouTube as usual. The extension will automatically remove all bot comments without bothering you at all!

---

## Code Explanation

The extension consists of a content script (`content.js`) and background script (`background.js`) that work together to filter and hide unwanted replies based on specified criteria.

### Filtering Logic

The content script (`content.js`) uses DOM manipulation and mutation observers to detect new replies and applies filtering based on predefined keywords and usernames.

```javascript
// Example code snippet from content.js
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList' && mutation.addedNodes.length) {
      mutation.addedNodes.forEach(node => {
        if (node.className === 'reply') {
          const replyText = node.innerText.toLowerCase();
          const username = node.querySelector('.username').innerText.toLowerCase();

          if (username.includes('uttp') ||
              replyText.includes('dislike') ||
              replyText.includes('is way better than') ||
              replyText.includes('&#x202c')) {
            node.style.display = 'none';
          }
        }
      });
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
```
---
## Contributors

The ByeByeBots Chrome Extension was created with contributions from the following individuals:

- [Franco](https://github.com/Altyd)

---
## supportme
All and any support would be highly appreciated as I made this myself. This would also help put this extension on the chrome extension store thus making it even easier to use!

- [PayPal](https://www.paypal.com/paypalme/neeltroy)