function removeDislikeReplies() {
  chrome.storage.sync.get(['filterEnabled'], function(result) {
    if (!result.filterEnabled) return;

    const commentSections = document.querySelectorAll('#contents #replies');
    commentSections.forEach(section => {
      const replies = section.querySelectorAll('#content-text');
      replies.forEach(reply => {
        const replyText = reply.innerText.toLowerCase();
        const username = reply.closest('#body').querySelector('#author-text span').innerText.toLowerCase();
        if (username.includes('uttp') ||
            replyText.includes('is way better than') ||
            replyText.includes('disliking my videos') ||
            replyText.includes('dislike') ||
            replyText.includes('&#x202c')) {
          reply.closest('#body').style.display = 'none';
        }
      });
    });
  });
}

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList' && mutation.addedNodes.length) {
      removeDislikeReplies();
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

removeDislikeReplies();
