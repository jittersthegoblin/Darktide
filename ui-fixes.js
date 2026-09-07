// app.js attaches its original copy handler before talent-guides.js replaces it.
// Capture the click first so the detailed talent-tree summary is what reaches the clipboard.
const talentCopyButton = document.querySelector('#copy-build');
if (talentCopyButton) {
  talentCopyButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    window.copySummary();
  }, { capture: true });
}
