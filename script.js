function loadPage(url) {
  document.getElementById('mainFrame').src = url;
}

window.onload = () => loadPage('web-apps/portfolio-01/index.html');
