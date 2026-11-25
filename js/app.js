/* =====================================================================
   Ôn luyện ISTQB CTFL v4.0 — ứng dụng chính
   Dữ liệu câu hỏi nằm trong data/exam-*.js (window.ISTQB.exams.X)
   Tiến độ được lưu trong localStorage của trình duyệt.
   ===================================================================== */
(function () {
'use strict';

const DB = window.ISTQB || { exams: {}, lo: {} };
const LETTERS = ['A', 'B', 'C', 'D', 'E'];

/* Ảnh minh hoạ: khoá "img" trong dữ liệu câu hỏi -> đường dẫn file */
const IMAGES = {
  'state':   'images/a-state.png',
  'b-state': 'images/b-state.png',
  'c-state': 'images/c-state.png',
  'c-cfg':   'images/c-cfg.png',
  'c-deps':  'images/c-deps.png'
};

/* 6 chương của syllabus CTFL v4.0 */
const CHAPTERS = [
  { id: 1, en: 'Fundamentals of Testing',             vi: 'Nền tảng kiểm thử' },
  { id: 2, en: 'Testing Throughout the SDLC',         vi: 'Kiểm thử trong vòng đời phát triển phần mềm' },
  { id: 3, en: 'Static Testing',                      vi: 'Kiểm thử tĩnh' },
  { id: 4, en: 'Test Analysis and Design',            vi: 'Phân tích & thiết kế kiểm thử' },
  { id: 5, en: 'Managing the Test Activities',        vi: 'Quản lý các hoạt động kiểm thử' },
  { id: 6, en: 'Test Tools',                          vi: 'Công cụ kiểm thử' }
];

/* ================== TIỆN ÍCH ================== */
function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function keyOf(q) { return Array.isArray(q.a) ? q.a.slice().sort() : [q.a]; }
function needCount(q) { return Array.isArray(q.a) ? q.a.length : 1; }
function sameSet(x, y) {
  if (!x || !y || x.length !== y.length) return false;
  const a = x.slice().sort(), b = y.slice().sort();
  return a.every((v, i) => v === b[i]);
}
function fmt(sec) {
  const m = Math.floor(sec / 60), s = sec % 60;
  return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}
function fmtDate(ts) {
  const d = new Date(ts);
  const p = n => String(n).padStart(2, '0');
  return p(d.getDate()) + '/' + p(d.getMonth() + 1) + '/' + d.getFullYear() + ' ' + p(d.getHours()) + ':' + p(d.getMinutes());
}
function pctColor(p) { return p >= 80 ? 'var(--ok)' : p >= 65 ? '#3b6ef5' : p >= 50 ? 'var(--warn)' : 'var(--bad)'; }

/* ================== LƯU TRỮ (localStorage) ================== */
const STORE_KEY = 'istqb-ctfl-study-v2';
function blankStore() { return { sets: {}, qres: {}, history: [], lastTab: 'A', chapter: 1, wrongFilter: 'all' }; }
let store = (function load() {
  try {
    const s = JSON.parse(localStorage.getItem(STORE_KEY));
    if (s && typeof s === 'object') return Object.assign(blankStore(), s);
  } catch (e) { /* bỏ qua: chế độ ẩn danh / bị chặn */ }
  return blankStore();
})();
let saveTimer = null;
function save(now) {
  const run = () => { try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* ignore */ } };
  if (now) { clearTimeout(saveTimer); run(); return; }
  clearTimeout(saveTimer); saveTimer = setTimeout(run, 300);
}

/* ================== NGÂN HÀNG CÂU HỎI ================== */
function decorate(exam, list) {
  const map = DB.lo[exam] || {};
  return (list || []).map(q => {
    const m = map[q.n] || {};
    const lo = m.lo || q.lo || '';
    const ch = +(lo.match(/^FL-(\d)/) || [0, 0])[1];
    return Object.assign({}, q, { exam: exam, uid: exam + ':' + q.n, lo: lo, k: m.k || q.k || '', ch: ch });
  });
}

const SETS = [];
const EXAM_META = {
  A: { ver: 'v1.7' }, B: { ver: 'v1.7' }, C: { ver: 'v1.6' }, D: { ver: 'v1.5' }
};
['A', 'B', 'C', 'D'].forEach(X => {
  const ex = DB.exams[X];
  if (!ex || !ex.main) return;
  SETS.push({
    id: X, kind: 'exam', group: 'exam',
    tab: '📝 Đề ' + X, mini: '40 câu · 60 phút',
    title: '🧪 ISTQB CTFL v4.0 — Sample Exam ' + X + ' (40 câu)',
    sub: 'Thi thử: 60 phút · Đạt khi đúng từ 26/40 câu trở lên (65%)',
    foot: 'ISTQB® CTFL v4.0 Sample Exam ' + X + ' ' + EXAM_META[X].ver + ' · Web Speech API (English US) · 40 câu',
    qs: decorate(X, ex.main), minutes: 60, chunk: 10, pass: 26
  });
});
if (DB.exams.A && DB.exams.A.bonus1) {
  SETS.push({
    id: 'A-bonus1', kind: 'exam', group: 'exam', tab: '🎁 Bonus A1–A13', mini: '13 câu · 20 phút',
    title: '🎁 Bonus — Additional Questions A1–A13 (Đề A)',
    sub: 'Câu hỏi bổ sung trong phụ lục Đề A · 20 phút · đạt 9/13',
    foot: 'ISTQB® CTFL v4.0 Additional Questions A1–A13 · 13 câu',
    qs: decorate('A', DB.exams.A.bonus1), minutes: 20, chunk: 13, pass: 9
  });
  SETS.push({
    id: 'A-bonus2', kind: 'exam', group: 'exam', tab: '🎁 Bonus A14–A26', mini: '13 câu · 20 phút',
    title: '🎁 Bonus — Additional Questions A14–A26 (Đề A)',
    sub: 'Câu hỏi bổ sung trong phụ lục Đề A · 20 phút · đạt 9/13',
    foot: 'ISTQB® CTFL v4.0 Additional Questions A14–A26 · 13 câu',
    qs: decorate('A', DB.exams.A.bonus2), minutes: 20, chunk: 13, pass: 9
  });
}
const POOL = [];
const BY_UID = {};
SETS.forEach(s => s.qs.forEach(q => { if (!BY_UID[q.uid]) { BY_UID[q.uid] = q; POOL.push(q); } }));

SETS.push({
  id: 'wrong', kind: 'practice', group: 'study', tab: '📕 Sổ câu sai', mini: 'Luyện lại tới khi đúng',
  title: '📕 Sổ câu sai', sub: 'Tất cả câu bạn từng làm sai ở mọi đề · Làm đúng ở đây thì câu sẽ được gạch khỏi sổ',
  foot: 'Sổ câu sai được lưu trong trình duyệt này'
});
SETS.push({
  id: 'chapter', kind: 'practice', group: 'study', tab: '📚 Theo chương', mini: 'Chương 1–6 syllabus',
  title: '📚 Luyện theo chương syllabus', sub: 'Gom câu hỏi của cả 4 đề theo chương & Learning Objective (FL-x.x.x)',
  foot: 'Mapping chương / LO lấy từ bảng đáp án chính thức của ISTQB'
});
SETS.push({
  id: 'stats', kind: 'stats', group: 'study', tab: '📈 Tiến độ', mini: 'Lịch sử điểm',
  title: '📈 Tiến độ & lịch sử điểm', sub: 'Điểm từng lần nộp bài, điểm cao nhất mỗi đề và độ chính xác theo chương',
  foot: 'Dữ liệu chỉ lưu trên trình duyệt này (localStorage)'
});

/* ================== TRẠNG THÁI TỪNG BỘ ĐỀ ================== */
function setState(s) {
  let st = store.sets[s.id];
  if (!st) {
    st = store.sets[s.id] = { answers: {} };
    if (s.kind === 'exam') { st.remain = s.minutes * 60; st.paused = false; st.expired = false; st.resultHTML = ''; st.resultPass = null; st.attempt = null; }
  }
  if (!st.answers) st.answers = {};
  return st;
}
const picking = {};  // uid -> mảng đáp án đang chọn dở (câu chọn nhiều đáp án), không lưu

let cur = SETS.find(s => s.id === store.lastTab) || SETS[0];
let filter = { from: 0, to: 0 };   // dùng cho bộ đề thi (nhóm 10 câu)
let wrongSnapshot = null;          // danh sách uid trong sổ câu sai lúc mở tab

/* Ghi nhận kết quả từng câu cho thống kê / sổ câu sai */
function recordResult(q, ok) {
  const r = store.qres[q.uid] || (store.qres[q.uid] = { right: 0, wrong: 0 });
  if (ok) r.right++; else r.wrong++;
  r.last = ok; r.at = Date.now();
  if (!ok) r.inBook = true;
  else if (cur.id === 'wrong') r.inBook = false;
}
function bookUids() {
  return Object.keys(store.qres).filter(u => store.qres[u].inBook && BY_UID[u]);
}

/* Danh sách câu đang hiển thị */
function currentList() {
  if (cur.kind === 'exam') return cur.qs;
  if (cur.id === 'wrong') {
    if (!wrongSnapshot) wrongSnapshot = bookUids();
    let list = wrongSnapshot.map(u => BY_UID[u]).filter(Boolean);
    if (store.wrongFilter !== 'all') list = list.filter(q => q.exam === store.wrongFilter || ('ch' + q.ch) === store.wrongFilter);
    return list;
  }
  if (cur.id === 'chapter') return POOL.filter(q => q.ch === store.chapter);
  return [];
}
function visibleList() {
  const list = currentList();
  if (cur.kind === 'exam') return list.slice(filter.from, filter.to + 1);
  return list;
}

/* ================== PHÁT ÂM (Web Speech API) ================== */
let voices = [];
function loadVoices() { try { voices = window.speechSynthesis.getVoices() || []; } catch (e) { voices = []; } }
if ('speechSynthesis' in window) { loadVoices(); window.speechSynthesis.onvoiceschanged = loadVoices; }
function pickVoice() {
  if (!voices.length) loadVoices();
  const pref = ['Google US English', 'Samantha', 'Microsoft Aria Online', 'Microsoft Jenny', 'Microsoft Zira', 'Alex'];
  for (const p of pref) { const v = voices.find(v => v.name && v.name.indexOf(p) > -1); if (v) return v; }
  return voices.find(v => v.lang === 'en-US') || voices.find(v => /^en[-_]/i.test(v.lang || '')) || null;
}
function speak(text, btn) {
  if (!('speechSynthesis' in window)) { alert('Trình duyệt của bạn không hỗ trợ Web Speech API.'); return; }
  window.speechSynthesis.cancel();
  document.querySelectorAll('.spk.playing').forEach(b => b.classList.remove('playing'));
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US'; u.rate = 0.92; u.pitch = 1.0; u.volume = 1;
  const v = pickVoice(); if (v) u.voice = v;
  if (btn) { btn.classList.add('playing'); u.onend = () => btn.classList.remove('playing'); u.onerror = () => btn.classList.remove('playing'); }
  window.speechSynthesis.speak(u);
}
function stopSpeak() { try { window.speechSynthesis.cancel(); } catch (e) { /* ignore */ } }

/* ================== DOM ================== */
const $ = id => document.getElementById(id);
const dash = $('dash'), tBox = $('timerBox'), tVal = $('timerVal'), tLab = $('timerLab'), btnPause = $('btnPause');

/* ================== TAB ================== */
function buildTabs() {
  const ex = $('tabsExam'), st = $('tabsStudy');
  ex.innerHTML = ''; st.innerHTML = '';
  const nBook = bookUids().length;
  SETS.forEach(s => {
    const b = document.createElement('button');
    b.className = 'tab' + (s === cur ? ' active' : '');
    let label = s.tab;
    if (s.id === 'wrong' && nBook) label += '<span class="badge">' + nBook + '</span>';
    if (s.kind === 'exam') {
      const stt = store.sets[s.id];
      if (stt && stt.resultHTML) label += stt.resultPass ? ' ✅' : ' ⚠️';
    }
    b.innerHTML = '<span>' + label + '</span><span class="mini">' + s.mini + '</span>';
    b.onclick = () => switchSet(s);
    (s.group === 'exam' ? ex : st).appendChild(b);
  });
}

function switchSet(s) {
  if (s === cur) return;
  stopSpeak();
  cur = s;
  store.lastTab = s.id; save();
  if (s.id === 'wrong') wrongSnapshot = null;
  if (s.kind === 'exam') filter = { from: 0, to: s.qs.length - 1 };
  mount();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function mount() {
  buildTabs();
  $('hTitle').textContent = cur.title;
  $('hSub').textContent = cur.sub;
  $('foot').textContent = cur.foot;
  if (cur.kind === 'stats') {
    dash.style.display = 'none';
    $('result').className = ''; $('result').innerHTML = '';
    renderStats();
    return;
  }
  dash.style.display = '';
  dash.classList.toggle('practice', cur.kind === 'practice');
  $('btnReset').textContent = cur.id === 'wrong' ? '🔄 Cập nhật sổ & làm lại' : '🔄 Làm lại';
  if (cur.kind === 'exam') {
    const st = setState(cur);
    btnPause.style.display = st.expired ? 'none' : '';
    btnPause.textContent = st.paused ? '▶️ Tiếp tục' : '⏸ Tạm dừng';
    paintTimer();
  }
  buildFilters();
  restoreResult();
  render();
}

/* ================== BỘ LỌC ================== */
function chip(label, active, onClick) {
  const b = document.createElement('button');
  b.className = 'fbtn' + (active ? ' active' : '');
  b.textContent = label;
  b.onclick = onClick;
  return b;
}
function buildFilters() {
  const el = $('filters');
  el.innerHTML = '';
  if (cur.kind === 'exam') {
    const n = cur.qs.length;
    const groups = [{ from: 0, to: n - 1, label: 'Tất cả (' + n + ')' }];
    if (cur.chunk < n) for (let s = 0; s < n; s += cur.chunk) {
      const e = Math.min(s + cur.chunk - 1, n - 1);
      groups.push({ from: s, to: e, label: 'Câu ' + cur.qs[s].n + '–' + cur.qs[e].n });
    }
    groups.forEach(g => el.appendChild(chip(g.label, filter.from === g.from && filter.to === g.to, () => {
      filter = { from: g.from, to: g.to }; buildFilters(); render();
    })));
    return;
  }
  if (cur.id === 'chapter') {
    CHAPTERS.forEach(c => {
      const cnt = POOL.filter(q => q.ch === c.id).length;
      el.appendChild(chip('Chương ' + c.id + ' (' + cnt + ')', store.chapter === c.id, () => {
        store.chapter = c.id; save(); buildFilters(); render(); window.scrollTo({ top: 0, behavior: 'smooth' });
      }));
    });
    return;
  }
  if (cur.id === 'wrong') {
    if (!wrongSnapshot) wrongSnapshot = bookUids();
    const all = wrongSnapshot.map(u => BY_UID[u]).filter(Boolean);
    const opts = [{ k: 'all', label: 'Tất cả (' + all.length + ')' }];
    ['A', 'B', 'C', 'D'].forEach(X => { const c = all.filter(q => q.exam === X).length; if (c) opts.push({ k: X, label: 'Đề ' + X + ' (' + c + ')' }); });
    CHAPTERS.forEach(ch => { const c = all.filter(q => q.ch === ch.id).length; if (c) opts.push({ k: 'ch' + ch.id, label: 'Chương ' + ch.id + ' (' + c + ')' }); });
    if (!opts.some(o => o.k === store.wrongFilter)) store.wrongFilter = 'all';
    opts.forEach(o => el.appendChild(chip(o.label, store.wrongFilter === o.k, () => {
      store.wrongFilter = o.k; save(); buildFilters(); render();
    })));
  }
}

/* ================== HIỂN THỊ CÂU HỎI ================== */
function cardHTML(q) {
  const st = setState(cur);
  const chosen = st.answers[q.uid];
  const pick = picking[q.uid] || [];
  const done = chosen !== undefined;
  const key = keyOf(q);
  const need = needCount(q);
  const correct = done && sameSet(chosen, key);
  let h = '<div class="qcard' + (done ? ' reveal' : '') + '" id="qc-' + esc(q.uid) + '">';
  h += '<div class="qtop">';
  if (cur.kind === 'practice') h += '<span class="qsrc">Đề ' + q.exam + '</span>';
  h += '<span class="qnum">Câu ' + esc(q.n) + '</span>';
  if (need > 1) h += '<span class="qmulti">Chọn ' + need + ' đáp án</span>';
  if (done) h += '<span class="qstate ' + (correct ? 'ok' : 'bad') + '">' + (correct ? '✓ Đúng' : '✗ Sai') + '</span>';
  if (cur.id === 'wrong') {
    const r = store.qres[q.uid];
    if (r && r.wrong) h += '<span class="qwrong">Đã sai ' + r.wrong + ' lần</span>';
  }
  h += '<span class="spacer"></span>';
  if (q.lo) h += '<span class="qlo" title="Learning Objective · K-level">' + esc(q.lo) + (q.k ? ' · ' + esc(q.k) : '') + '</span>';
  h += '</div>';

  if (q.pre) h += '<div class="scen">' + q.pre + '</div>';
  if (q.img && IMAGES[q.img]) h += '<img class="qimg" alt="Sơ đồ minh họa" loading="lazy" src="' + IMAGES[q.img] + '">';
  if (q.prev) h += '<div class="scenv">🇻🇳 ' + q.prev + '</div>';

  h += '<div class="qtext"><span class="t">' + esc(q.q) + '</span>'
     + '<button class="spk" data-say="' + esc(q.q) + '" title="Nghe câu hỏi">🔊</button></div>';
  h += '<div class="qtrans">🇻🇳 ' + esc(q.qv) + '</div>';

  h += '<div class="opts">';
  q.o.forEach((o, j) => {
    let cls = 'opt';
    if (done) {
      if (key.indexOf(j) > -1) cls += ' correct';
      else if (chosen.indexOf(j) > -1) cls += ' wrong';
    } else if (pick.indexOf(j) > -1) cls += ' picked';
    h += '<div class="' + cls + '" data-u="' + esc(q.uid) + '" data-o="' + j + '">';
    h += '<div class="orow"><span class="letter">' + LETTERS[j] + '</span>';
    h += '<span class="otext">' + esc(o.t)
       + (done && key.indexOf(j) > -1 ? '<span class="tag ok">ĐÚNG</span>' : '')
       + (done && chosen.indexOf(j) > -1 && key.indexOf(j) === -1 ? '<span class="tag bad">BẠN CHỌN</span>' : '')
       + '</span>';
    h += '<button class="spk" data-say="' + esc(o.t) + '" title="Nghe đáp án">🔊</button></div>';
    h += '<div class="otrans">→ ' + esc(o.v) + '</div>';
    h += '</div>';
  });
  h += '</div>';

  if (need > 1 && !done) h += '<div class="hint">⚠️ Câu này cần chọn ' + need + ' đáp án — đã chọn ' + pick.length + '/' + need + '</div>';

  const ansTxt = key.map(k => LETTERS[k] + '. ' + esc(q.o[k].t)).join('  |  ');
  h += '<div class="expl"><div class="h">💡 Giải thích</div>'
     + '<div class="ans">✅ Đáp án đúng: ' + ansTxt + '</div>'
     + '<div class="body">' + esc(q.e) + '</div></div>';
  h += '</div>';
  return h;
}

function render() {
  const list = $('list');
  const qs = visibleList();
  let html = '';
  if (cur.id === 'chapter') {
    const c = CHAPTERS[store.chapter - 1];
    html += '<div class="notice">📘 <b>Chương ' + c.id + ' — ' + esc(c.en) + '</b><br>' + esc(c.vi) + ' · ' + qs.length + ' câu từ các đề ' + Array.from(new Set(qs.map(q => q.exam))).join(', ') + '</div><div style="height:12px"></div>';
  }
  if (!qs.length) {
    if (cur.id === 'wrong') html += '<div class="empty"><div class="big">🎉</div><b>Sổ câu sai đang trống</b><br>Làm các đề thi mẫu — câu nào sai sẽ tự động được thêm vào đây để luyện lại.</div>';
    else html += '<div class="empty">Không có câu hỏi nào.</div>';
  }
  qs.forEach(q => { html += cardHTML(q); });
  list.innerHTML = html;
  bindCards(list);
  updateStats();
}

function bindCards(root) {
  root.querySelectorAll('.spk').forEach(b => {
    b.onclick = ev => { ev.stopPropagation(); speak(b.getAttribute('data-say'), b); };
  });
  root.querySelectorAll('.opt').forEach(el => {
    el.onclick = () => {
      const uid = el.getAttribute('data-u');
      const oi = +el.getAttribute('data-o');
      const st = setState(cur);
      if (st.answers[uid] !== undefined) return;                 // đã khoá
      if (cur.kind === 'exam' && st.expired) return;              // hết giờ thì không làm tiếp
      const q = BY_UID[uid], need = needCount(q);
      let locked = null;
      if (need === 1) locked = [oi];
      else {
        const p = picking[uid] || (picking[uid] = []);
        const at = p.indexOf(oi);
        if (at > -1) p.splice(at, 1); else p.push(oi);
        if (p.length >= need) { locked = p.slice(); delete picking[uid]; }
      }
      if (locked) {
        st.answers[uid] = locked;
        recordResult(q, sameSet(locked, keyOf(q)));
        save();
        if (cur.id === 'wrong') buildTabs();
      }
      // chỉ vẽ lại thẻ vừa bấm để giữ vị trí cuộn
      const card = el.closest('.qcard');
      const tmp = document.createElement('div');
      tmp.innerHTML = cardHTML(q);
      const fresh = tmp.firstChild;
      card.replaceWith(fresh);
      bindCards(fresh);
      updateStats();
      if (locked) {
        buildTabs();
        fresh.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    };
  });
}

/* ================== THỐNG KÊ ================== */
function stats() {
  const list = currentList();
  const st = setState(cur);
  let done = 0, ok = 0;
  list.forEach(q => {
    const a = st.answers[q.uid];
    if (a !== undefined) { done++; if (sameSet(a, keyOf(q))) ok++; }
  });
  const total = list.length;
  return { total, done, ok, bad: done - ok, acc: done ? Math.round(ok / done * 100) : 0, pct: total ? Math.round(done / total * 100) : 0 };
}
function updateStats() {
  if (cur.kind === 'stats') return;
  const s = stats();
  $('sDone').textContent = s.done;
  $('sOk').textContent = s.ok;
  $('sBad').textContent = s.bad;
  $('sAcc').textContent = s.acc + '%';
  $('barFill').style.width = s.pct + '%';
  $('barTxt').textContent = 'Tiến độ ' + s.done + '/' + s.total + ' câu';
  $('barPct').textContent = s.pct + '%';
}

/* ================== ĐỒNG HỒ ================== */
function paintTimer() {
  if (cur.kind !== 'exam') return;
  const st = setState(cur);
  tVal.textContent = fmt(st.remain);
  tBox.classList.remove('warn', 'danger', 'done');
  const total = cur.minutes * 60;
  const warnAt = Math.min(600, Math.round(total * 0.20)), dangerAt = Math.min(300, Math.round(total * 0.10));
  if (st.expired) { tBox.classList.add('done'); tLab.textContent = '⛔ Đã hết giờ làm bài'; return; }
  if (st.paused) { tLab.textContent = '⏸ Đang tạm dừng — bấm Tiếp tục để chạy lại'; return; }
  if (st.remain <= dangerAt) { tBox.classList.add('danger'); tLab.textContent = '🔥 Sắp hết giờ — tập trung nào!'; }
  else if (st.remain <= warnAt) { tBox.classList.add('warn'); tLab.textContent = '⚠️ Sắp hết thời gian — soát lại các câu chưa làm nhé'; }
  else tLab.textContent = 'Thời gian còn lại / ' + cur.minutes + ' phút';
}
let ticks = 0;
setInterval(() => {
  if (cur.kind !== 'exam') return;                      // chỉ bộ đề đang mở mới chạy giờ
  const st = setState(cur);
  if (st.paused || st.expired) return;
  st.remain--;
  if (++ticks % 5 === 0) save();
  if (st.remain <= 0) {
    st.remain = 0; st.expired = true; st.paused = false;
    btnPause.style.display = 'none';
    paintTimer();
    submitExam(true);
    return;
  }
  paintTimer();
}, 1000);
btnPause.onclick = () => {
  const st = setState(cur);
  if (st.expired) return;
  st.paused = !st.paused;
  btnPause.textContent = st.paused ? '▶️ Tiếp tục' : '⏸ Tạm dừng';
  paintTimer(); save();
};
window.addEventListener('beforeunload', () => save(true));
document.addEventListener('visibilitychange', () => { if (document.hidden) save(true); });

/* ================== NỘP BÀI ================== */
function pickMsg(list, seed) { return list[seed % list.length]; }
function buildEncouragement(scorePct, s) {
  const seed = s.ok + s.done;
  const need = cur.pass, tot = s.total;
  if (scorePct >= 90) return { icon: '🏆', color: 'var(--ok)', bg: '#e6f7f0', border: '#b9e6d4',
    title: 'Xuất sắc! Bạn đang ở đẳng cấp rất vững.',
    body: pickMsg(['Nền tảng ISTQB của bạn cực chắc — kiến thức đã thành phản xạ chứ không còn là học thuộc. Cứ giữ nhịp này, kỳ thi thật sẽ nhẹ nhàng thôi!',
      'Kết quả này cho thấy bạn đã hiểu bản chất chứ không chỉ nhớ đáp án. Hãy dành thời gian còn lại cho vài câu bẫy K3 (tính toán BVA, EP, bảng quyết định), bạn gần như đã sẵn sàng rồi!'], seed) };
  if (scorePct >= 80) return { icon: '🎉', color: 'var(--ok)', bg: '#e6f7f0', border: '#b9e6d4',
    title: 'Rất tốt! Bạn đã vượt mốc Đạt một cách thuyết phục.',
    body: pickMsg(['Chỉ còn vài điểm mù nhỏ thôi. Hãy lướt lại đúng những câu bạn sai — chúng đã nằm sẵn trong 📕 Sổ câu sai.',
      'Bạn đang đi rất đúng hướng. Xem bảng theo chương bên dưới để biết chương nào còn yếu, ôn thêm một lượt là quá đủ tự tin!'], seed) };
  if (scorePct >= 65) return { icon: '✅', color: 'var(--ok)', bg: '#e6f7f0', border: '#b9e6d4',
    title: 'Chúc mừng, bạn đã ĐẠT!',
    body: pickMsg(['Bạn đã qua mốc ' + need + '/' + tot + ' — thành quả của sự kiên trì đấy. Giờ hãy biến những câu sai thành điểm mạnh, biên độ an toàn sẽ dày hơn nhiều.',
      'Vượt mốc rồi! Đừng dừng ở đây: mở 📕 Sổ câu sai và làm lại các câu sai, mỗi lỗi sửa được là một điểm chắc chắn cho kỳ thi thật.'], seed) };
  if (scorePct >= 50) return { icon: '💪', color: 'var(--warn)', bg: '#fff7e8', border: '#f5e2bd',
    title: 'Sát rồi! Bạn chỉ còn cách mốc Đạt một khoảng rất ngắn.',
    body: pickMsg(['Đừng nản — ' + scorePct + '% nghĩa là nền tảng đã có, chỉ thiếu độ chắc ở vài chủ đề. Ôn lại đúng những câu sai thôi, lần tới chạm mốc ' + need + '/' + tot + ' là chuyện sớm muộn.',
      'Bạn đang rất gần đích. Hãy vào 📚 Theo chương để luyện riêng chương yếu nhất — tiến bộ sẽ thấy rõ ngay ở lần thử tiếp theo!'], seed) };
  if (scorePct >= 35) return { icon: '🌱', color: 'var(--warn)', bg: '#fff7e8', border: '#f5e2bd',
    title: 'Chưa đạt lần này, nhưng bạn đang tiến bộ thật sự.',
    body: pickMsg(['Mỗi câu sai hôm nay là một câu bạn sẽ làm đúng ngày mai. Hãy đọc kỹ phần giải thích, chia nhỏ ôn theo từng nhóm ' + cur.chunk + ' câu — cách này hiệu quả hơn học dồn rất nhiều.',
      'Điểm số chỉ phản ánh hiện tại, không phản ánh khả năng của bạn. Ôn lần lượt từng chương, bạn sẽ ngạc nhiên với tốc độ mình khá lên đấy!'], seed) };
  return { icon: '🤗', color: 'var(--brand)', bg: '#eef2fd', border: '#cdd9f8',
    title: 'Không sao cả — ai cũng bắt đầu từ đây.',
    body: pickMsg(['Lần đầu tiếp cận đề ISTQB thì điểm thấp là hoàn toàn bình thường. Hãy học từng chương nhỏ, đọc kỹ giải thích thay vì cố nhớ đáp án. Kiên trì vài vòng thôi là bạn sẽ khác hẳn.',
      'Đừng để con số làm bạn nản lòng. Đề này bám sát syllabus v4.0 nên khá khó, và bạn đang làm điều đúng đắn nhất: luyện tập. Học từng nhóm nhỏ, hiểu bản chất — tiến bộ chắc chắn sẽ đến.'], seed) };
}

function chapterBreakdown(list, answers) {
  const res = {};
  list.forEach(q => {
    const r = res[q.ch] || (res[q.ch] = [0, 0]);
    r[1]++;
    const a = answers[q.uid];
    if (a !== undefined && sameSet(a, keyOf(q))) r[0]++;
  });
  return res;
}
function chapterRowsHTML(br) {
  let h = '';
  CHAPTERS.forEach(c => {
    const r = br[c.id]; if (!r || !r[1]) return;
    const p = Math.round(r[0] / r[1] * 100);
    h += '<div class="chrow' + (p < 65 ? ' weak' : '') + '"><div class="nm"><b>Ch.' + c.id + ' ' + esc(c.en) + '</b><span>' + esc(c.vi) + ' · đúng ' + r[0] + '/' + r[1] + '</span></div>'
       + '<div class="mbar"><i style="width:' + p + '%;background:' + pctColor(p) + '"></i></div><div class="pc" style="color:' + pctColor(p) + '">' + p + '%</div></div>';
  });
  return h;
}

function submitExam(auto) {
  const st = setState(cur);
  const s = stats();
  const scorePct = Math.round(s.ok / s.total * 100);
  const pass = s.ok >= cur.pass;
  const totalSec = cur.minutes * 60;
  const used = totalSec - st.remain;
  const m = buildEncouragement(scorePct, s);
  const br = chapterBreakdown(cur.qs, st.answers);

  // lưu lịch sử (mỗi lượt làm bài chỉ 1 dòng, nộp lại thì cập nhật)
  if (!st.attempt) st.attempt = 'at' + Date.now();
  const rec = { id: st.attempt, set: cur.id, tab: cur.tab.replace(/^\S+\s/, ''), ok: s.ok, total: s.total, done: s.done, pct: scorePct, pass: pass, used: used, at: Date.now(), chapters: br };
  const idx = store.history.findIndex(h => h.id === rec.id);
  if (idx > -1) store.history[idx] = rec; else store.history.push(rec);
  const prev = store.history.filter(h => h.set === cur.id && h.id !== rec.id);
  const last = prev.length ? prev[prev.length - 1] : null;

  const html =
    (auto ? '<div style="background:#fdeceb;color:#b3312f;border-radius:9px;padding:8px 11px;font-size:13px;font-weight:700;margin-bottom:10px">⏰ Hết giờ! Bài làm đã được nộp tự động.</div>' : '')
    + '<h2>📊 Kết quả bài làm — ' + esc(cur.tab) + '</h2>'
    + '<div class="score" style="color:' + (pass ? 'var(--ok)' : 'var(--bad)') + '">' + s.ok + '/' + s.total + ' &nbsp;<span style="font-size:20px">(' + scorePct + '%)</span></div>'
    + '<div class="verdict ' + (pass ? 'pass' : 'fail') + '">' + (pass ? '🎉 ĐẠT (≥ ' + cur.pass + '/' + s.total + ')' : '❌ CHƯA ĐẠT (cần ≥ ' + cur.pass + '/' + s.total + ')') + '</div>'
    + '<ul>'
    + '<li>Số câu đúng: <b>' + s.ok + '/' + s.total + '</b> (còn thiếu ' + Math.max(0, cur.pass - s.ok) + ' câu để đạt)</li>'
    + '<li>Số câu sai: <b>' + s.bad + '</b> — đã được thêm vào 📕 Sổ câu sai</li>'
    + '<li>Chưa làm: <b>' + (s.total - s.done) + '</b> câu</li>'
    + '<li>Độ chính xác trên số câu đã làm: <b>' + s.acc + '%</b></li>'
    + '<li>Thời gian đã dùng: <b>' + fmt(used) + '</b> / ' + fmt(totalSec) + (st.expired ? '' : ' (còn lại ' + fmt(st.remain) + ')') + '</li>'
    + (last ? '<li>Lần trước: <b>' + last.ok + '/' + last.total + '</b> (' + fmtDate(last.at) + ') → ' + (s.ok > last.ok ? '📈 tăng ' + (s.ok - last.ok) + ' câu' : s.ok < last.ok ? '📉 giảm ' + (last.ok - s.ok) + ' câu' : 'giữ nguyên') + '</li>' : '')
    + '</ul>'
    + '<div style="margin-top:12px;background:' + m.bg + ';border:1px solid ' + m.border + ';border-radius:12px;padding:12px 14px">'
    + '<div style="font-size:15px;font-weight:800;color:' + m.color + ';margin-bottom:5px">' + m.icon + ' ' + m.title + '</div>'
    + '<div style="font-size:14px;color:#44506b;line-height:1.6">' + m.body + '</div>'
    + '</div>'
    + '<div class="rchap"><h4>📚 Kết quả theo chương syllabus</h4>' + chapterRowsHTML(br) + '</div>';
  st.resultHTML = html;
  st.resultPass = pass;
  save(true);
  buildTabs();
  restoreResult();
  $('result').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function restoreResult() {
  const r = $('result');
  const st = cur.kind === 'exam' ? setState(cur) : null;
  if (st && st.resultHTML) {
    r.className = 'show';
    r.style.borderColor = st.resultPass ? 'var(--ok)' : 'var(--bad)';
    r.innerHTML = st.resultHTML;
  } else { r.className = ''; r.innerHTML = ''; }
}
$('btnSubmit').onclick = () => {
  const st = setState(cur);
  submitExam(false);
  if (!st.expired) { st.paused = true; btnPause.textContent = '▶️ Tiếp tục'; paintTimer(); save(); }
};

/* ================== LÀM LẠI ================== */
$('btnReset').onclick = () => {
  const st = setState(cur);
  if (cur.kind === 'exam') {
    if (!confirm('Xóa bài làm hiện tại của "' + cur.tab + '", đặt lại đồng hồ ' + cur.minutes + ' phút và làm lại từ đầu?\n(Lịch sử điểm và sổ câu sai vẫn được giữ.)')) return;
    st.answers = {}; st.resultHTML = ''; st.resultPass = null; st.attempt = null;
    st.remain = cur.minutes * 60; st.paused = false; st.expired = false;
    btnPause.style.display = ''; btnPause.textContent = '⏸ Tạm dừng';
    paintTimer();
  } else {
    const list = currentList();
    list.forEach(q => { delete st.answers[q.uid]; delete picking[q.uid]; });
    if (cur.id === 'wrong') {
      // xoá bài làm của toàn bộ sổ rồi chụp lại danh sách (câu đã làm đúng sẽ biến mất)
      st.answers = {};
      wrongSnapshot = bookUids();
      buildFilters();
    }
  }
  Object.keys(picking).forEach(k => delete picking[k]);
  stopSpeak();
  save(true);
  buildTabs(); restoreResult(); render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/* ================== TAB TIẾN ĐỘ ================== */
function renderStats() {
  const list = $('list');
  const qres = store.qres;
  const answered = Object.keys(qres).filter(u => BY_UID[u]);
  const lastOk = answered.filter(u => qres[u].last).length;
  const nBook = bookUids().length;
  const hist = store.history.slice().sort((a, b) => b.at - a.at);

  let h = '<div class="panel"><h3>Tổng quan</h3><div class="kpis">'
    + '<div class="kpi"><div class="v">' + answered.length + '/' + POOL.length + '</div><div class="l">Câu đã từng làm</div></div>'
    + '<div class="kpi"><div class="v" style="color:' + pctColor(answered.length ? lastOk / answered.length * 100 : 0) + '">' + (answered.length ? Math.round(lastOk / answered.length * 100) : 0) + '%</div><div class="l">Đúng ở lần làm gần nhất</div></div>'
    + '<div class="kpi"><div class="v" style="color:var(--bad)">' + nBook + '</div><div class="l">Câu trong sổ câu sai</div></div>'
    + '<div class="kpi"><div class="v">' + store.history.length + '</div><div class="l">Lần nộp bài</div></div>'
    + '</div></div>';

  // điểm cao nhất theo bộ đề
  h += '<div class="panel"><h3>🏅 Điểm cao nhất mỗi đề</h3><div class="best">';
  SETS.filter(s => s.kind === 'exam').forEach(s => {
    const hs = store.history.filter(x => x.set === s.id);
    const best = hs.reduce((b, x) => (!b || x.ok > b.ok ? x : b), null);
    h += '<div class="it"><div class="t">' + esc(s.tab) + '</div>'
       + (best ? '<div class="s" style="color:' + (best.pass ? 'var(--ok)' : 'var(--bad)') + '">' + best.ok + '/' + best.total + '</div><div class="n">' + hs.length + ' lần nộp</div>'
               : '<div class="s" style="color:var(--muted)">—</div><div class="n">Chưa làm</div>')
       + '</div>';
  });
  h += '</div></div>';

  // độ chính xác theo chương (dựa trên lần làm gần nhất của mỗi câu)
  const br = {};
  answered.forEach(u => { const q = BY_UID[u]; const r = br[q.ch] || (br[q.ch] = [0, 0]); r[1]++; if (qres[u].last) r[0]++; });
  h += '<div class="panel"><h3>📚 Độ chính xác theo chương</h3><div class="sub">Tính trên các câu bạn đã làm (lấy kết quả lần gần nhất). Chương màu đỏ là chương nên ôn lại.</div>'
     + (answered.length ? chapterRowsHTML(br) : '<div class="empty">Chưa có dữ liệu — hãy làm thử một đề.</div>') + '</div>';

  // lịch sử
  h += '<div class="panel"><h3>🕘 Lịch sử nộp bài</h3>';
  if (!hist.length) h += '<div class="empty">Chưa có lần nộp bài nào.</div>';
  else {
    h += '<div class="histwrap"><table class="hist"><tr><th>Thời gian</th><th>Bộ đề</th><th>Điểm</th><th>Kết quả</th><th>Thời gian làm</th></tr>';
    hist.forEach(x => {
      h += '<tr><td>' + fmtDate(x.at) + '</td><td>' + esc(x.tab) + '</td><td><b>' + x.ok + '/' + x.total + '</b> (' + x.pct + '%)</td>'
         + '<td class="' + (x.pass ? 'ok' : 'bad') + '">' + (x.pass ? 'ĐẠT' : 'Chưa đạt') + '</td><td>' + fmt(x.used) + '</td></tr>';
    });
    h += '</table></div>';
  }
  h += '<div class="actions"><button class="btn danger" id="btnWipe">🗑 Xóa toàn bộ dữ liệu ôn tập</button></div></div>';
  list.innerHTML = h;
  $('btnWipe').onclick = () => {
    if (!confirm('Xóa toàn bộ bài làm, lịch sử điểm và sổ câu sai trên trình duyệt này? Không thể hoàn tác.')) return;
    store = blankStore(); store.lastTab = 'stats';
    wrongSnapshot = null;
    save(true); mount();
  };
}

/* ================== KHỞI ĐỘNG ================== */
if (cur.kind === 'exam') filter = { from: 0, to: cur.qs.length - 1 };
mount();
})();
