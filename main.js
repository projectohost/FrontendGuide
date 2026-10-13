/* ====== НАЛАШТУВАННЯ: міняйте тут ====== */
var CONFIG = {
  signupUrl: "#", // посилання на запис (форма, Telegram, пошта)
  facts: [
    { k: "Тривалість", v: "≈ 3 місяці" },
    { k: "Що створиш", v: "сайт-візитку, застосунок і власний проєкт" },
    { k: "З чого почнеш", v: "з нуля, досвід не потрібен" },
    { k: "Розклад і вартість", v: "уточни в організатора" },
  ],
  examples: [
    {
      url: "https://neal.fun",
      domain: "neal.fun",
      title: "Neal.fun",
      desc: "Колекція інтерактивних мініігор і візуалізацій, які працюють просто в браузері.",
      points: [
        "Анімації й реакція на кожен рух пальця",
        "Жодних установок: лише HTML, CSS і JavaScript",
      ],
      thumb:
        '<svg class="thumb" viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="320" height="180" fill="#FFF4D6"/><rect x="16" y="16" width="92" height="68" rx="10" fill="#FF8A5B"/><rect x="114" y="16" width="92" height="68" rx="10" fill="#4CC9A6"/><rect x="212" y="16" width="92" height="68" rx="10" fill="#6C7BFF"/><rect x="16" y="94" width="92" height="68" rx="10" fill="#FFD23F"/><rect x="114" y="94" width="92" height="68" rx="10" fill="#FF6FA5"/><rect x="212" y="94" width="92" height="68" rx="10" fill="#2D3166"/><circle cx="62" cy="50" r="14" fill="#fff" opacity=".85"/><circle cx="160" cy="50" r="14" fill="#fff" opacity=".85"/><circle cx="258" cy="50" r="14" fill="#fff" opacity=".85"/></svg>',
    },
    {
      url: "https://bruno-simon.com",
      domain: "bruno-simon.com",
      title: "Bruno Simon — портфоліо",
      desc: "Сайт-портфоліо, у якому ти їдеш машинкою по 3D-світу. Так виглядає програмування на максимумі.",
      points: [
        "3D-графіка прямо в браузері",
        "Керування клавіатурою або дотиком",
      ],
      thumb:
        '<svg class="thumb" viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7DD3FC"/><stop offset="1" stop-color="#FDE68A"/></linearGradient></defs><rect width="320" height="180" fill="url(#sky)"/><path d="M0 110 Q80 80 160 105 T320 95 V180 H0Z" fill="#86C98B"/><path d="M-10 160 Q110 110 330 140 L330 170 Q110 140 -10 190Z" fill="#4B5563"/><path d="M20 168 Q120 130 310 154" stroke="#FDE68A" stroke-width="3" stroke-dasharray="14 12" fill="none"/><rect x="138" y="118" width="46" height="20" rx="6" fill="#EF4444"/><rect x="150" y="108" width="24" height="14" rx="4" fill="#FCA5A5"/><circle cx="150" cy="140" r="7" fill="#111827"/><circle cx="174" cy="140" r="7" fill="#111827"/><rect x="40" y="70" width="10" height="34" fill="#92400E"/><circle cx="45" cy="62" r="18" fill="#22C55E"/><rect x="262" y="76" width="10" height="30" fill="#92400E"/><circle cx="267" cy="68" r="16" fill="#16A34A"/></svg>',
    },
  ],
};
/* ======================================= */

function esc(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[c];
  });
}

/* ---------- Live code demo ---------- */
(function () {
  var COLORS = [
    { name: "Червоний", hex: "#E5383B" },
    { name: "Синій", hex: "#3A47F5" },
    { name: "Зелений", hex: "#1FA971" },
    { name: "Рожевий", hex: "#E0306B" },
    { name: "Помаранчевий", hex: "#E67700" },
  ];
  var state = { name: "Олена", color: COLORS[0].hex, size: 36 };
  var nameIn = document.getElementById("nameIn");
  var sizeIn = document.getElementById("sizeIn");
  var sizeOut = document.getElementById("sizeOut");
  var pvH = document.getElementById("pvH");
  var pvBtn = document.getElementById("pvBtn");
  var pvMsg = document.getElementById("pvMsg");
  var code = document.getElementById("code");
  var sw = document.getElementById("swatches");

  COLORS.forEach(function (c, i) {
    var l = document.createElement("label");
    l.className = "sw";
    l.style.setProperty("--c", c.hex);
    l.innerHTML =
      '<input type="radio" name="color" value="' +
      c.hex +
      '" aria-label="' +
      c.name +
      '"' +
      (i === 0 ? " checked" : "") +
      '><span class="dot"></span>';
    sw.appendChild(l);
  });

  function render() {
    var shown = state.name.trim() || "[твоє імʼя]";
    pvH.textContent = "Привіт, я " + shown + "!";
    pvH.style.color = state.color;
    pvH.style.fontSize = state.size + "px";
    sizeOut.textContent = state.size;
    code.innerHTML =
      '<span class="t">&lt;h1</span> <span class="a">style</span>=<span class="s">"color: <mark class="hl">' +
      state.color +
      '</mark>; font-size: <mark class="hl">' +
      state.size +
      'px</mark>;"</span><span class="t">&gt;</span>' +
      'Привіт, я <mark class="hl">' +
      esc(shown) +
      '</mark>!<span class="t">&lt;/h1&gt;</span>\n' +
      '<span class="t">&lt;button</span> <span class="a">onclick</span>=<span class="s">"alert(\'Я зробив це!\')"</span><span class="t">&gt;</span>Натисни<span class="t">&lt;/button&gt;</span>';
  }

  nameIn.addEventListener("input", function () {
    state.name = nameIn.value;
    render();
  });
  sizeIn.addEventListener("input", function () {
    state.size = +sizeIn.value;
    render();
  });
  sw.addEventListener("change", function (e) {
    if (e.target && e.target.name === "color") {
      state.color = e.target.value;
      render();
    }
  });
  pvBtn.addEventListener("click", function () {
    pvMsg.hidden = false;
  });
  render();
})();

/* ---------- Layers: HTML / CSS / JS ---------- */
(function () {
  var like = document.getElementById("like");
  var cnt = document.getElementById("cnt");
  var note = document.getElementById("layerNote");
  var chipCss = document.getElementById("chipCss");
  var chipJs = document.getElementById("chipJs");
  var st = { css: false, js: false, liked: false, base: 128 };
  var NOTES = {
    "00": "Тільки HTML: кнопка є, але вона сіра й нічого не робить. Натисни її — нічого не станеться.",
    10: "HTML і CSS: кнопка гарна, має форму й колір. Але натискання нічого не змінює.",
    "01": "HTML і JavaScript: кнопка рахує лайки, але виглядає як сайт із 1995 року.",
    11: "HTML, CSS і JavaScript разом: це той самий лайк, який ти натискаєш щодня.",
  };
  function render() {
    like.classList.toggle("styled", st.css);
    like.classList.toggle("liked", st.css && st.liked);
    chipCss.setAttribute("aria-pressed", st.css);
    chipJs.setAttribute("aria-pressed", st.js);
    cnt.textContent = st.base + (st.liked ? 1 : 0);
    note.textContent = NOTES[(st.css ? 1 : 0) + "" + (st.js ? 1 : 0)];
  }
  chipCss.addEventListener("click", function () {
    st.css = !st.css;
    render();
  });
  chipJs.addEventListener("click", function () {
    st.js = !st.js;
    if (!st.js) st.liked = false;
    render();
  });
  like.addEventListener("click", function () {
    if (!st.js) return;
    st.liked = !st.liked;
    render();
    if (st.css) {
      like.classList.remove("pop");
      void like.offsetWidth;
      like.classList.add("pop");
    }
  });
  render();
})();

/* ---------- Example previews ---------- */
(function () {
  var grid = document.getElementById("exGrid");
  CONFIG.examples.forEach(function (ex) {
    var a = document.createElement("a");
    a.className = "ex";
    a.href = ex.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute(
      "aria-label",
      "Відкрити сайт " + ex.domain + " в новій вкладці",
    );
    a.innerHTML =
      '<div class="browser-bar"><i></i><i></i><i></i><span>' +
      esc(ex.domain) +
      "</span></div>" +
      ex.thumb +
      '<div class="ex-body"><h3>' +
      esc(ex.title) +
      "</h3><p>" +
      esc(ex.desc) +
      "</p><ul>" +
      ex.points
        .map(function (p) {
          return "<li>" + esc(p) + "</li>";
        })
        .join("") +
      '</ul><span class="ex-cta">Відкрити сайт</span></div>';
    grid.appendChild(a);
  });
})();

/* ---------- Course block ---------- */
(function () {
  document.getElementById("signup").href = CONFIG.signupUrl;
  var f = document.getElementById("facts");
  CONFIG.facts.forEach(function (x) {
    var d = document.createElement("div");
    d.innerHTML = "<dt>" + esc(x.k) + "</dt><dd>" + esc(x.v) + "</dd>";
    f.appendChild(d);
  });
})();
