function loadPage(url) {
  document.getElementById('mainFrame').src = url;
}

window.onload = () => loadPage('web-apps/item1.html');
