function loadPage(url) {
  document.getElementById('mainFrame').src = url;
}

window.onload = () => loadPage('web-apps/dlspaceconstruction/index.html');
