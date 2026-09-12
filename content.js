(() => {
  'use strict';


  function isTypingInField() {
    const el = document.activeElement;
    if (!el) return false;
    const tag = el.tagName;
    return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable;
  }

  function initSearchBox(char) {
    const SEARCH_INPUT = document.querySelector('input#searchWord');
    if (!char || !SEARCH_INPUT) return;

    SEARCH_INPUT.focus();

    SEARCH_INPUT.value = '';
    SEARCH_INPUT.selectionStart = SEARCH_INPUT.selectionEnd = 0;
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

    initSearchBox(e.key);
    const searchInput = document.querySelector('input#searchWord');
    if (!searchInput) return;
    searchInput.value = '';

    searchInput.focus();
  }, true);
})();
