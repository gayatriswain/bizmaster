import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App /> 
  </>
);

// Runtime fix: ensure images from `public/assets` load when referenced without leading slash
function fixAssetPaths() {
  const publicUrl = process.env.PUBLIC_URL || "";

  // fix <img src="assets/.."> that the developer used without leading slash
  document.querySelectorAll('img').forEach((img) => {
    const attr = img.getAttribute('src');
    if (attr && attr.startsWith('assets/')) {
      img.src = `${publicUrl}/${attr}`.replace(/([^:]?)\/\//g, '$1/');
    }
  });

  // fix inline background-image: url(assets/...)
  document.querySelectorAll('[style]').forEach((el) => {
    const bg = el.style.backgroundImage;
    if (bg && bg.includes('url(') && bg.includes('assets/')) {
      el.style.backgroundImage = bg.replace(/url\((['"]?)(assets\/[^)]+)\1\)/g, (m, q, p) => `url(${publicUrl}/${p})`);
    }
  });
}

// run once after initial render
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    try { fixAssetPaths(); } catch (e) { /* ignore */ }
    // observe DOM changes and re-run fixes for dynamically-added elements
    try {
      const obs = new MutationObserver(() => { try { fixAssetPaths(); } catch (e) {} });
      obs.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'src'] });
    } catch (e) {}
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
