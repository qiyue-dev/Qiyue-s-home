(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');

  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    root.setAttribute('data-theme', 'light');
  }

  function nextTheme() {
    const isLight = root.getAttribute('data-theme') === 'light';
    const to = isLight ? 'dark' : 'light';
    if (to === 'light') root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');
    localStorage.setItem('theme', to);
  }

  if (toggle) toggle.addEventListener('click', nextTheme);
})();


