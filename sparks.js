/* Floaty white sparks - drop-in background layer.
   Self-injects its CSS + a .sparks container, then generates drifting dots.
   Matches the effect on index.html / awards.html. */
(function () {
  if (document.getElementById('sparks')) return; // page already has its own sparks

  var css = ''
    + '.sparks{position:fixed;inset:0;z-index:-1;pointer-events:none;overflow:hidden;}'
    + '.spark{position:absolute;bottom:-16px;border-radius:50%;background:rgba(255,255,255,0.9);'
    + 'opacity:0;box-shadow:0 0 4px 1px rgba(255,255,255,0.30);'
    + 'animation:sparkFloat linear infinite;will-change:transform,opacity;}'
    + '.spark.big{box-shadow:0 0 6px 1px rgba(255,255,255,0.38);}'
    + '.spark.twinkle{animation:sparkFloat linear infinite,sparkTwinkle 2.2s ease-in-out infinite;}'
    + '@keyframes sparkFloat{0%{transform:translateY(0) translateX(0);opacity:0;}'
    + '12%{opacity:0.4;}50%{transform:translateY(-52vh) translateX(12px);opacity:0.38;}'
    + '88%{opacity:0.32;}100%{transform:translateY(-104vh) translateX(-8px);opacity:0;}}'
    + '@keyframes sparkTwinkle{0%,100%{opacity:0.4;}50%{opacity:0.14;}}'
    + '@media (prefers-reduced-motion:reduce){.spark{animation:none;opacity:0.18;}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var wrap = document.createElement('div');
  wrap.className = 'sparks';
  wrap.id = 'sparks';
  wrap.setAttribute('aria-hidden', 'true');

  var COUNT = 20, html = '';
  for (var i = 0; i < COUNT; i++) {
    var size = (Math.random() * 4 + 2).toFixed(1);   // 2–6px
    var left = (Math.random() * 100).toFixed(2);      // across the width
    var dur = (Math.random() * 14 + 12).toFixed(1);   // 12–26s rise
    var delay = (-Math.random() * 26).toFixed(1);     // stagger (already mid-flight)
    var big = Math.random() < 0.28 ? ' big' : '';
    var tw = Math.random() < 0.5 ? ' twinkle' : '';
    html += '<span class="spark' + big + tw + '" style="left:' + left + '%;width:' + size
      + 'px;height:' + size + 'px;animation-duration:' + dur + 's,1.8s;animation-delay:'
      + delay + 's,' + (-Math.random() * 1.8).toFixed(1) + 's"></span>';
  }
  wrap.innerHTML = html;

  function attach() { document.body.appendChild(wrap); }
  if (document.body) attach();
  else document.addEventListener('DOMContentLoaded', attach);
})();
