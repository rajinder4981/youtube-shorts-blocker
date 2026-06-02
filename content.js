function removeShorts() {
  // Remove Shorts shelf/sections
  document.querySelectorAll('ytd-rich-section-renderer, ytd-reel-shelf-renderer').forEach((el) => {
    const text = el.innerText?.toLowerCase() || '';
    if (text.includes('shorts')) {
      el.remove();
    }
  });

  // Remove Shorts videos from grid/list
  document.querySelectorAll('a[href*="/shorts/"]').forEach((link) => {
    const item =
      link.closest('ytd-rich-item-renderer') ||
      link.closest('ytd-video-renderer') ||
      link.closest('ytd-grid-video-renderer') ||
      link.closest('ytd-reel-item-renderer');

    if (item) {
      item.remove();
    }
  });

  // Remove Shorts sidebar link
  document.querySelectorAll('a[href="/shorts"]').forEach((link) => {
    const item = link.closest('ytd-guide-entry-renderer');
    if (item) {
      item.remove();
    }
  });
}

removeShorts();

const observer = new MutationObserver(() => {
  removeShorts();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});