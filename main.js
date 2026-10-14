/* ====== НАЛАШТУВАННЯ: міняйте тут ====== */
var CONFIG = {
  examples: [
    {
      url: "https://cybertech-r7rn.onrender.com/index.html",
      domain: "cybertech-r7rn.onrender.com",
      title: "CyberTech Store",
      desc: "Магазин ігрової периферії: клавіатури, миші, монітори, крісла та готові збірки ПК.",
      points: [
        "Фільтри за категоріями, сортування та кошик",
        "Нічна тема, перемикач мови й чат-асистент",
      ],
      // Превʼю-відео: поклади файли у папку video/ (webm необовʼязковий).
      // start    — з якої секунди починати (за замовчуванням 0)
      // duration — скільки секунд показувати перед повтором (без нього грає все відео)
      // Поки відео не завантажилось (або файлу немає), видно намальовану заглушку.
      video: {
        mp4: "video/cybertech.mp4",
        webm: "video/cybertech.webm",
        start: 0,
        duration: 25,
      },
      thumb:
        '<svg class="thumb" viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="320" height="180" fill="#0B1020"/><rect width="320" height="22" fill="#141B34"/><rect x="12" y="8" width="44" height="6" rx="3" fill="#22D3EE"/><rect x="226" y="8" width="26" height="6" rx="3" fill="#475569"/><rect x="262" y="8" width="44" height="6" rx="3" fill="#475569"/><rect x="20" y="40" width="130" height="10" rx="4" fill="#F1F5F9"/><rect x="20" y="58" width="100" height="10" rx="4" fill="#F1F5F9"/><rect x="20" y="78" width="150" height="5" rx="2.5" fill="#64748B"/><rect x="20" y="92" width="60" height="18" rx="9" fill="#22D3EE"/><rect x="88" y="92" width="60" height="18" rx="9" fill="none" stroke="#E879F9" stroke-width="2"/><rect x="190" y="36" width="116" height="80" rx="10" fill="#1E2A52"/><circle cx="248" cy="76" r="22" fill="#E879F9" opacity=".75"/><rect x="20" y="128" width="64" height="40" rx="8" fill="#141B34"/><rect x="92" y="128" width="64" height="40" rx="8" fill="#141B34"/><rect x="164" y="128" width="64" height="40" rx="8" fill="#141B34"/><rect x="236" y="128" width="64" height="40" rx="8" fill="#141B34"/><rect x="30" y="138" width="44" height="14" rx="4" fill="#22D3EE" opacity=".6"/><rect x="102" y="138" width="44" height="14" rx="4" fill="#E879F9" opacity=".6"/><rect x="174" y="138" width="44" height="14" rx="4" fill="#22D3EE" opacity=".6"/><rect x="246" y="138" width="44" height="14" rx="4" fill="#E879F9" opacity=".6"/></svg>',
    },
    {
      url: "https://foxtrot-shop.onrender.com/index.html",
      domain: "foxtrot-shop.onrender.com",
      title: "Foxtrot",
      desc: "Інтернет-магазин техніки на 60 товарів, зроблений за зразком великих українських магазинів.",
      points: [
        "Каталог із сортуванням, фільтрами й пошуком",
        "Обране та кошик із підрахунком суми",
      ],
      video: {
        mp4: "video/foxtrot.mp4",
        webm: "video/foxtrot.webm",
        start: 0,
        duration: 30,
      },
      thumb:
        '<svg class="thumb" viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="320" height="180" fill="#FFFFFF"/><rect width="320" height="26" fill="#F97316"/><rect x="12" y="9" width="48" height="8" rx="4" fill="#fff"/><rect x="80" y="7" width="130" height="12" rx="6" fill="#FFEDD5"/><rect x="236" y="9" width="30" height="8" rx="4" fill="#fff" opacity=".8"/><rect x="274" y="9" width="34" height="8" rx="4" fill="#fff" opacity=".8"/><rect x="12" y="36" width="296" height="70" rx="12" fill="#FFEDD5"/><rect x="26" y="50" width="120" height="10" rx="4" fill="#9A3412"/><rect x="26" y="68" width="90" height="10" rx="4" fill="#9A3412"/><rect x="26" y="86" width="56" height="12" rx="6" fill="#F97316"/><circle cx="254" cy="71" r="28" fill="#F97316"/><rect x="238" y="66" width="32" height="8" rx="3" fill="#fff"/><rect x="12" y="118" width="68" height="50" rx="10" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2"/><rect x="88" y="118" width="68" height="50" rx="10" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2"/><rect x="164" y="118" width="68" height="50" rx="10" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2"/><rect x="240" y="118" width="68" height="50" rx="10" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2"/><circle cx="46" cy="136" r="8" fill="#F97316"/><circle cx="122" cy="136" r="8" fill="#F97316"/><circle cx="198" cy="136" r="8" fill="#F97316"/><circle cx="274" cy="136" r="8" fill="#F97316"/><rect x="26" y="152" width="40" height="5" rx="2.5" fill="#94A3B8"/><rect x="102" y="152" width="40" height="5" rx="2.5" fill="#94A3B8"/><rect x="178" y="152" width="40" height="5" rx="2.5" fill="#94A3B8"/><rect x="254" y="152" width="40" height="5" rx="2.5" fill="#94A3B8"/></svg>',
    },
    {
      // Файл best.html лежить поруч з index.html, тому адреса відносна
      url: "best.html",
      domain: "best.html",
      title: "Best",
      desc: `Ще один проєкт, який створений з "особливим" стилем. Відкрий і подивись, як він працює ;)`,
      points: [
        "Окрема сторінка, що відкривається прямо з цього сайту",
        "Створено з особливим дизайном)",
      ],
      video: {
        mp4: "video/best.mp4",
        webm: "video/best.webm",
        start: 0,
        duration: 20,
      },
      thumb:
        '<svg class="thumb" viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="320" height="180" fill="#EEF0FF"/><rect width="320" height="26" fill="#3A47F5"/><rect x="12" y="9" width="40" height="8" rx="4" fill="#fff"/><rect x="236" y="9" width="30" height="8" rx="4" fill="#fff" opacity=".8"/><rect x="274" y="9" width="34" height="8" rx="4" fill="#fff" opacity=".8"/><rect x="20" y="44" width="150" height="12" rx="5" fill="#14163A"/><rect x="20" y="64" width="110" height="12" rx="5" fill="#14163A"/><rect x="20" y="88" width="160" height="6" rx="3" fill="#8087B8"/><rect x="20" y="100" width="130" height="6" rx="3" fill="#8087B8"/><rect x="20" y="120" width="64" height="20" rx="10" fill="#FF5C8A"/><rect x="200" y="42" width="108" height="100" rx="12" fill="#3A47F5"/><circle cx="254" cy="84" r="24" fill="#FFE45C"/><rect x="20" y="152" width="288" height="10" rx="5" fill="#D6DAF3"/></svg>',
    },
  ],
};

var SHARE = {
  // Контакт менеджера: підставте реальні дані
  manager: {
    name: "Тетяна",
    role: "менеджер",
    phone: "+380674538635",
    telegram: "https://t.me/NKLOGIKA",
  },
  title: "Курс фронтенду",
  intro: "Створення веб-додатків та їх публікація. \nНайбільша в Україні школа програмування та англійської мови Logika.",
  pageUrl: "", // порожньо = адреса цієї сторінки
  // Лічильник натискань: на сервер іде лише час натискання кнопки
  endpoint: "https://reportsapi-a7tx.onrender.com/ahead/sendMessage",
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

/* ---------- Student project previews ---------- */

// Показує намальовану заглушку, а коли відео готове, плавно підміняє її на відео.
// Відео грає лише тоді, коли картку видно на екрані, і ставиться на паузу, коли ні.
function buildThumb(ex) {
  var wrap = document.createElement("span");
  wrap.className = "thumb-wrap";
  wrap.innerHTML = ex.thumb;
  var v = ex.video;
  if (!v || !v.mp4) return wrap;

  var start = Math.max(0, Number(v.start) || 0);
  var end = v.duration > 0 ? start + Number(v.duration) : 0; // 0 = до кінця файлу

  var video = null;
  var still =
    (window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) ||
    (navigator.connection && navigator.connection.saveData);

  function init() {
    video = document.createElement("video");
    video.className = "thumb-video";
    video.muted = true; // без цього автоплей на телефонах не спрацює
    video.defaultMuted = true;
    video.loop = false; // повтор робимо самі (див. timeupdate / ended)
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("aria-label", "Відеоогляд сайту " + ex.title);
    video.preload = "auto";

    var list = [];
    if (v.webm) list.push(["video/webm", v.webm]);
    list.push(["video/mp4", v.mp4 + (still ? "#t=" + (start || 0.1) : "")]);
    var last = null;
    list.forEach(function (item) {
      last = document.createElement("source");
      last.type = item[0];
      last.src = item[1];
      video.appendChild(last);
    });
    // Помилка останнього джерела = жодне відео не завантажилось: лишаємо заглушку.
    last.addEventListener("error", function () {
      video.remove();
      video = null;
      failed = true;
    });
    video.addEventListener("loadedmetadata", function () {
      // Старт не може бути після кінця відео
      if (start > 0 && start < video.duration) video.currentTime = start;
    });
    video.addEventListener("loadeddata", function () {
      video.classList.add("ready");
    });
    // Власний повтор: дійшли до start + duration, повертаємось на початок відрізка
    video.addEventListener("timeupdate", function () {
      if (end && video.currentTime >= end) video.currentTime = start;
    });
    // Кінець файлу раніше за start + duration: теж повертаємось на start
    video.addEventListener("ended", function () {
      video.currentTime = start;
      var p = video.play();
      if (p && p.catch) p.catch(function () {});
    });
    wrap.appendChild(video);
  }

  var failed = false;
  function onVisible(visible) {
    if (failed) return;
    if (visible && !video) init();
    if (!video) return;
    if (visible && !still) {
      var p = video.play();
      if (p && p.catch) p.catch(function () {});
    } else if (!visible) {
      video.pause();
    }
  }

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          onVisible(en.isIntersecting);
        });
      },
      { rootMargin: "200px" },
    ).observe(wrap);
  } else {
    onVisible(true);
  }
  return wrap;
}

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
      "Відкрити проєкт " + ex.title + " в новій вкладці",
    );
    a.innerHTML =
      '<div class="browser-bar"><i></i><i></i><i></i><span>' +
      esc(ex.domain) +
      "</span></div>" +
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
    a.insertBefore(buildThumb(ex), a.querySelector(".ex-body"));
    grid.appendChild(a);
  });
})();

/* ---------- Share with parents ---------- */
(function () {
  var btn = document.getElementById("shareBtn");
  if (!btn) return;
  var M = SHARE.manager;
  var card = document.getElementById("managerCard");
  var channels = document.getElementById("shareChannels");
  var statusEl = document.getElementById("shareStatus");

  function pageUrl() {
    return SHARE.pageUrl || location.href.split("#")[0];
  }

  function shareText() {
    return [
      SHARE.intro,
      "",
      "Контакт менеджера:",
      M.name + (M.role ? " (" + M.role + ")" : ""),
      "Тел.: " + M.phone,
      "\nTelegram: " + M.telegram,
    ].join("\n");
  }

  function say(text) {
    statusEl.textContent = text;
    statusEl.hidden = false;
  }

  // Картка менеджера на сторінці
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }
  function svg(inner, fill) {
    return (
      '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false" fill="' +
      (fill || "none") +
      '" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      inner +
      "</svg>"
    );
  }
  var ICON_PHONE = svg(
    '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  );
  var ICON_TG = svg(
    '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
  );
  var ICON_GO = svg('<polyline points="9 18 15 12 9 6"/>');

  var tgHandle = "@" + M.telegram.replace(/\/+$/, "").split("/").pop();
  var telHref = "tel:" + M.phone.replace(/[^\d+]/g, "");

  function row(href, extra, iconCls, icon, label, value, act) {
    return (
      '<li><a class="contact-row" href="' +
      esc(href) +
      '"' +
      extra +
      '><span class="contact-icon ' +
      iconCls +
      '">' +
      icon +
      '</span><span class="contact-text"><small>' +
      label +
      "</small><strong>" +
      esc(value) +
      '</strong></span><span class="contact-act">' +
      act +
      ICON_GO +
      "</span></a></li>"
    );
  }

  card.innerHTML =
    '<div class="manager-head">' +
    '<p class="manager-label">Контакт менеджера</p>' +
    '<p class="manager-name">' +
    esc(M.name) +
    "</p>" +
    (M.role ? '<p class="manager-role">' + esc(M.role) + "</p>" : "") +
    "</div>" +
    '<ul class="contact-list">' +
    row(telHref, "", "is-phone", ICON_PHONE, "Телефон", M.phone, "Подзвонити") +
    row(
      M.telegram,
      ' target="_blank" rel="noopener noreferrer"',
      "is-tg",
      ICON_TG,
      "Telegram",
      tgHandle,
      "Написати",
    ) +
    "</ul>";

  // Лічильник: на сервер іде лише час натискання, без жодних даних про людину
  function track() {
    var when = new Date().toLocaleString("uk-UA", { timeZone: "Europe/Kyiv" });
    try {
      fetch(SHARE.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Натиснули «Поділитися»: " + when }),
        keepalive: true,
      }).catch(function () {});
    } catch (e) {}
  }

  // Запасні способи, якщо на пристрої немає системного меню «Поділитися»
  var full = shareText() + "\n";
  var CH = [
    {
      name: "Telegram",
      href:
        "https://t.me/share/url?url=" +
        encodeURIComponent(pageUrl()) +
        "&text=" +
        encodeURIComponent(shareText()),
    },
    {
      name: "Viber",
      href: "viber://forward?text=" + encodeURIComponent(full),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/?text=" + encodeURIComponent(full),
    },
  ];
  CH.forEach(function (c) {
    var a = el("a", "btn ghost", c.name);
    a.href = c.href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.addEventListener("click", track);
    channels.appendChild(a);
  });

  function copyText(t) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(t).then(
          function () {
            return true;
          },
          function () {
            return false;
          },
        );
      }
    } catch (e) {}
    return Promise.resolve(false);
  }

  function fallback() {
    channels.hidden = false;
    copyText(full).then(function (ok) {
      say(
        ok
          ? "Контакт скопійовано. Встав його в чат з батьками або обери месенджер."
          : "Обери месенджер, щоб надіслати контакт батькам.",
      );
    });
  }

  btn.addEventListener("click", function () {
    track();
    if (navigator.share) {
      navigator
        .share({ title: SHARE.title, text: shareText(), url: pageUrl() })
        .catch(function (err) {
          if (err && err.name === "AbortError") return; // людина закрила меню
          fallback();
        });
    } else {
      fallback();
    }
  });
})();
