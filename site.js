(function () {
  const updatedNodes = document.querySelectorAll('[data-last-updated]');
  if (!updatedNodes.length) return;

  const modified = new Date(document.lastModified);
  if (Number.isNaN(modified.getTime())) return;

  const formatted = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(modified);

  updatedNodes.forEach((node) => {
    node.textContent = formatted;
  });
})();
