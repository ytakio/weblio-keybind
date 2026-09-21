(() => {
  'use strict';


  function isTypingInField(event) {
    return event.target.matches('input, textarea, [contenteditable="true"]');
  }

  function playPronunciation() {
    const icon = document.querySelector('.contentTopAudioIcon');
    if (!icon) return;
    icon.click();
  }

  function clearSearchInput() {
    const searchInput = document.querySelector('input#searchWord');
    if (!searchInput) return;
    searchInput.value = '';
    searchInput.focus();
  }

  document.addEventListener('keydown', (event) => {
    if (isTypingInField(event)) return;

    switch (event.key) {
      case 'Enter':
        playPronunciation();
        break;
      case 'Backspace':
        clearSearchInput();
        break;
      default:
    }
  }, true);
})();
