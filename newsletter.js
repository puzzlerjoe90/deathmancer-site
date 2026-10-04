(() => {
  const key = 'deathmancer-newsletter-visit';
  const visitTimeout = 30 * 60 * 1000;
  const selector = 'iframe[src^="https://assets.mailerlite.com/jsonp/2631999/forms/"]';
  let seen = false;
  let dismissed = false;
  try {
    seen = Date.now() - Number(sessionStorage.getItem(key) || 0) < visitTimeout;
  } catch {}
  const remember = () => {
    try { sessionStorage.setItem(key, String(Date.now())); } catch {}
  };
  window.addEventListener('pagehide', () => { if (seen) remember(); });
  if (seen) { remember(); return; }

  // Persist across page navigation, but allow another invitation on a later visit.
  const observer = new MutationObserver(() => {
    for (const frame of document.querySelectorAll(selector)) {
      if (dismissed) { frame.remove(); continue; }
      const style = getComputedStyle(frame);
      if (!seen && style.display !== 'none' && style.visibility !== 'hidden' && frame.getBoundingClientRect().height > 0) {
        seen = true;
        remember();
      }
    }
  });
  observer.observe(document.documentElement, {subtree:true, childList:true, attributes:true, attributeFilter:['style','class']});
  window.addEventListener('message', event => {
    if (event.origin !== 'https://assets.mailerlite.com' || typeof event.data !== 'string') return;
    const frames = [...document.querySelectorAll(selector)];
    if (!frames.some(frame => frame.contentWindow === event.source)) return;
    if (!/^ml-accounts---popups-.+--hide$/.test(event.data) && !/^mlWebformSubmitSuccess-/.test(event.data)) return;
    dismissed = seen = true;
    remember();
    const style = document.createElement('style');
    style.textContent = `${selector}{display:none!important;pointer-events:none!important}`;
    document.head.append(style);
    frames.forEach(frame => frame.remove());
  });

  window.ml = window.ml || function () { (window.ml.q = window.ml.q || []).push(arguments); };
  const loader = document.createElement('script');
  loader.async = true;
  loader.src = 'https://assets.mailerlite.com/js/universal.js';
  document.head.append(loader);
  window.ml('account', '2631999');
})();
