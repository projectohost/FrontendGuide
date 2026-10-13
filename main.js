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
      title: "Foxtrot — магазин техніки",
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
  ],
};

var FORM = {
  endpoint: "https://reportsapi-a7tx.onrender.com/ahead/sendMessage",
  timeoutMs: 60000, // безкоштовний Render може «прокидатися» майже хвилину
  // Тіло POST-запиту (JSON). Якщо API чекає інші назви полів, міняйте тут.
  buildBody: function (d) {
    return {
      firstName: d.firstName,
      lastName: d.lastName,
      phone: d.phone,
      message: d.interest,
    };
  },
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
  var state = { name: "Олег", color: COLORS[0].hex, size: 36 };
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
      '<span class="t">&lt;button</span> <span class="a">onclick</span>=<span class="s">"alert(\'Працює!\')"</span><span class="t">&gt;</span>Натисни<span class="t">&lt;/button&gt;</span>';
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

/* ---------- Contact form ---------- */
(function () {
  var form = document.getElementById("contactForm");
  if (!form) return;
  var btn = document.getElementById("submitBtn");
  var statusEl = document.getElementById("formStatus");
  var inputs = {
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    phone: document.getElementById("phone"),
    interest: document.getElementById("interest"),
  };
  var BTN_TEXT = btn.textContent;
  var sending = false;

  function fieldError(input, msg) {
    var err = document.getElementById(input.id + "-err");
    if (!err) return;
    err.textContent = msg || "";
    err.hidden = !msg;
    if (msg) input.setAttribute("aria-invalid", "true");
    else input.removeAttribute("aria-invalid");
  }

  function hideStatus() {
    statusEl.hidden = true;
    statusEl.textContent = "";
    statusEl.className = "form-status";
  }

  // Повідомлення під формою: kind = "ok" | "error"
  function showStatus(kind, title, text, code) {
    statusEl.className = "form-status is-" + kind;
    statusEl.textContent = "";
    var t = document.createElement("strong");
    t.textContent = title;
    var m = document.createElement("span");
    m.textContent = text;
    statusEl.appendChild(t);
    statusEl.appendChild(m);
    if (code) {
      var c = document.createElement("small");
      c.textContent = code;
      statusEl.appendChild(c);
    }
    statusEl.hidden = false;
    statusEl.scrollIntoView({ block: "nearest" });
  }

  function validName(v) {
    return v.length >= 2 && /^[\p{L}][\p{L}'’ʼ -]*$/u.test(v);
  }

  // +380XXXXXXXXX, 0XXXXXXXXX або міжнародний номер із «+»
  function normalizePhone(raw) {
    raw = raw.trim();
    var digits = raw.replace(/\D/g, "");
    if (raw.charAt(0) === "+") {
      return digits.length >= 10 && digits.length <= 15 ? "+" + digits : null;
    }
    if (/^0\d{9}$/.test(digits)) return "+38" + digits;
    if (/^380\d{9}$/.test(digits)) return "+" + digits;
    return null;
  }

  function validate() {
    var d = {
      firstName: inputs.firstName.value.trim(),
      lastName: inputs.lastName.value.trim(),
      phone: normalizePhone(inputs.phone.value),
      interest: inputs.interest.value.trim(),
    };
    var first = null;
    function check(ok, input, msg) {
      fieldError(input, ok ? "" : msg);
      if (!ok && !first) first = input;
    }
    check(
      validName(d.firstName),
      inputs.firstName,
      "Введіть ім’я (мінімум 2 літери).",
    );
    check(
      validName(d.lastName),
      inputs.lastName,
      "Введіть прізвище (мінімум 2 літери).",
    );
    check(
      !!d.phone,
      inputs.phone,
      "Номер у форматі +380501234567 або 0501234567.",
    );
    if (first) {
      first.focus();
      return null;
    }
    return d;
  }

  // Текст помилки від сервера: поле message/error у JSON або короткий звичайний текст
  function serverMessage(text) {
    if (!text) return "";
    try {
      var o = JSON.parse(text);
      var m = o && (o.message || o.error || o.detail);
      return typeof m === "string" ? m.slice(0, 300) : "";
    } catch (e) {
      var t = text.trim();
      return t && t.charAt(0) !== "<" && t.length <= 200 ? t : "";
    }
  }

  function fail(status, serverMsg, aborted) {
    var text;
    if (serverMsg) {
      text = serverMsg;
    } else if (aborted) {
      text =
        "Сервер довго не відповідає (можливо, він ще прокидається). Спробуйте ще раз за хвилину.";
    } else if (!status) {
      text = "Немає звʼязку із сервером. Перевірте інтернет і спробуйте ще раз.";
    } else if (status === 429 || status >= 500) {
      text =
        "Забагато спроб або сервер тимчасово недоступний. Зачекайте трохи й спробуйте ще раз.";
    } else {
      text = "Сервер не прийняв заявку. Перевірте дані й спробуйте ще раз.";
    }
    showStatus(
      "error",
      "Не вдалося надіслати заявку",
      text,
      status ? "Код відповіді: " + status : "",
    );
  }

  function send(d) {
    sending = true;
    btn.disabled = true;
    btn.textContent = "Надсилаємо…";
    form.setAttribute("aria-busy", "true");

    var ctrl = "AbortController" in window ? new AbortController() : null;
    var timer = setTimeout(function () {
      if (ctrl) ctrl.abort();
    }, FORM.timeoutMs);

    fetch(FORM.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(FORM.buildBody(d)),
      signal: ctrl ? ctrl.signal : undefined,
    })
      .then(function (res) {
        return res.text().then(function (text) {
          return { res: res, text: text };
        });
      })
      .then(function (r) {
        if (r.res.ok) {
          form.reset();
          showStatus(
            "ok",
            "Дякуємо, заявку надіслано!",
            "Ми зв’яжемося з тобою найближчим часом.",
          );
        } else {
          fail(r.res.status, serverMessage(r.text), false);
        }
      })
      .catch(function (err) {
        fail(0, "", err && err.name === "AbortError");
      })
      .then(function () {
        clearTimeout(timer);
        sending = false;
        btn.disabled = false;
        btn.textContent = BTN_TEXT;
        form.removeAttribute("aria-busy");
      });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (sending) return;
    hideStatus();
    var d = validate();
    if (d) send(d);
  });

  // Прибираємо помилку поля, щойно людина почала його виправляти
  Object.keys(inputs).forEach(function (k) {
    inputs[k].addEventListener("input", function () {
      fieldError(inputs[k], "");
    });
  });
})();
