document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggleFilter');
  
    chrome.storage.sync.get(['filterEnabled'], function(result) {
      toggle.checked = result.filterEnabled;
    });
  
    toggle.addEventListener('change', () => {
      chrome.storage.sync.set({ filterEnabled: toggle.checked });
    });
  });
  