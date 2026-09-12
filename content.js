(() => {
  'use strict';


  function isTypingInField() {
    const el = document.activeElement;
    if (!el) return false;
    const tag = el.tagName;
    return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable;
  }

  function playPronunciation() {
    const icon = document.querySelector('.contentTopAudioIcon');
    if (icon) {
      icon.click();
      return;
    }
  }

  document.addEventListener('keydown', (e) => {
    if (isTypingInField()) return;

    if (e.key === 'Enter') {
      playPronunciation();
      return;
    }

    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (!/^[a-zA-Z]$/.test(e.key)) return;

    const searchInput = document.querySelector('input#searchWord');
    if (!searchInput) return;
    searchInput.value = '';

    searchInput.focus();
  }, true);
})();
