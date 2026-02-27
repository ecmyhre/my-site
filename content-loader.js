(function () {
  function setText(id, value) {
    var el = document.getElementById(id);
    if (el && value != null) el.textContent = value;
  }

  function setAttr(id, attr, value) {
    var el = document.getElementById(id);
    if (el && value != null) el.setAttribute(attr, value);
  }

  function applyContent(data) {
    if (!data) return;

    // Title
    if (data.siteTitle) document.title = data.siteTitle;

    // Home
    if (data.home) {
      setText("home-headline", data.home.headline);
      setText("home-subhead", data.home.subhead);
      setText("home-cta-text", data.home.ctaText);
      setAttr("home-cta", "href", data.home.ctaHref);
    }

    // Nav labels (optional)
    if (data.nav) {
      setText("nav-home", data.nav.home);
      setText("nav-about", data.nav.about);
      setText("nav-portfolio", data.nav.portfolio);
      setText("nav-words", data.nav.words);
    }
  }

  fetch("./content.json")
    .then(function (r) { return r.json(); })
    .then(applyContent)
    .catch(function (e) { console.warn("content.json failed to load", e); });
})();
