/* =====================================================================
   Ôn luyện ISTQB CTFL v4.0 — ứng dụng chính
   - Dữ liệu câu hỏi: data/exam-*.js      (window.ISTQB.exams.X)
   - Lý thuyết + từ vựng: data/syllabus.js (window.ISTQB.syllabus)
   - Tiến độ được lưu trong localStorage của trình duyệt.
   ===================================================================== */
(function () {
'use strict';

const DB = window.ISTQB || { exams: {}, lo: {} };
const SYL = DB.syllabus || { chapters: [], units: {}, glossary: [] };
const LETTERS = ['A', 'B', 'C', 'D', 'E'];
const SYLLABUS_PDF = 'docs/ISTQB_CTFL_Syllabus_v4.0.1.pdf';

/* Ảnh minh hoạ: khoá "img" trong dữ liệu câu hỏi -> đường dẫn file */
const IMAGES = {
  'state':   'images/a-state.png',
  'b-state': 'images/b-state.png',
  'c-state': 'images/c-state.png',
  'c-cfg':   'images/c-cfg.png',
  'c-deps':  'images/c-deps.png'
};

/* 6 chương của syllabus CTFL v4.0 (+ số câu trong đề thi thật) */
const CHAPTERS = [
  { id: 1, en: 'Fundamentals of Testing',             vi: 'Nền tảng kiểm thử',                              exam: 8 },
  { id: 2, en: 'Testing Throughout the SDLC',         vi: 'Kiểm thử trong vòng đời phát triển phần mềm',    exam: 6 },
  { id: 3, en: 'Static Testing',                      vi: 'Kiểm thử tĩnh',                                  exam: 4 },
  { id: 4, en: 'Test Analysis and Design',            vi: 'Phân tích & thiết kế kiểm thử',                  exam: 11 },
  { id: 5, en: 'Managing the Test Activities',        vi: 'Quản lý các hoạt động kiểm thử',                 exam: 9 },
  { id: 6, en: 'Test Tools',                          vi: 'Công cụ kiểm thử',                               exam: 2 }
];
SYL.chapters.forEach(c => { const x = CHAPTERS[c.id - 1]; if (x) { x.vi = c.vi || x.vi; x.intro = c.intro; x.units = c.units; } });

/* Chế độ ôn tập */
const MODES = [
  { id: 'learn',    icon: '📗', name: 'Học',      desc: 'Hiện tiếng Việt ngay từ đầu — dùng khi mới học một chương' },
  { id: 'practice', icon: '📘', name: 'Luyện',    desc: 'Tiếng Việt & giải thích hiện sau khi chọn đáp án' },
  { id: 'exam',     icon: '📕', name: 'Thi thật', desc: '100% tiếng Anh, được đổi đáp án, chỉ chấm & giải thích khi nộp bài (áp dụng cho tab đề thi)' }
];

/* Từ "bẫy" trong đề ISTQB (viết HOA trong đề) */
const TRAPS = {
  NOT: 'KHÔNG — tìm phương án SAI / không đúng',
  EXCEPT: 'NGOẠI TRỪ — tìm phương án không thuộc nhóm',
  BEST: 'TỐT NHẤT — nhiều phương án có thể đúng một phần, chọn cái đúng nhất',
  MOST: 'NHẤT / NHIỀU NHẤT — chọn phương án phù hợp nhất',
  LEAST: 'ÍT NHẤT — chọn phương án kém phù hợp nhất',
  FIRST: 'ĐẦU TIÊN — chú ý thứ tự',
  NEXT: 'TIẾP THEO — chú ý thứ tự',
  LAST: 'CUỐI CÙNG — chú ý thứ tự',
  MAIN: 'CHÍNH — mục đích / lợi ích chính, không phải phụ',
  PRIMARY: 'CHÍNH YẾU',
  MINIMUM: 'TỐI THIỂU — số nhỏ nhất vẫn đạt yêu cầu',
  MINIMAL: 'TỐI THIỂU — số nhỏ nhất vẫn đạt yêu cầu',
  MAXIMUM: 'TỐI ĐA',
  ONLY: 'CHỈ — loại trừ mọi khả năng khác',
  ALWAYS: 'LUÔN LUÔN — phương án tuyệt đối thường là sai',
  NEVER: 'KHÔNG BAO GIỜ — phương án tuyệt đối thường là sai',
  CORRECT: 'ĐÚNG',
  INCORRECT: 'SAI — tìm phương án sai',
  TRUE: 'ĐÚNG',
  FALSE: 'SAI — tìm phương án sai',
  TWO: 'HAI — chọn đủ 2 đáp án',
  THREE: 'BA',
  LIKELY: 'CÓ KHẢ NĂNG',
  UNLIKELY: 'ÍT KHẢ NĂNG'
};
const TRAP_RE = new RegExp('\\b(' + Object.keys(TRAPS).join('|') + ')\\b', 'g');

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
function pctColor(p) { return p >= 80 ? 'var(--ok)' : p >= 65 ? 'var(--brand)' : p >= 50 ? 'var(--warn)' : 'var(--bad)'; }
/* Màu viết cứng trong HTML kết quả (kể cả bản đã lưu từ phiên bản cũ) -> biến CSS để hợp giao diện tối */
const COLOR_VARS = { '#e6f7f0': 'var(--ok-bg)', '#b9e6d4': 'var(--ok-line)', '#fff7e8': 'var(--warn-bg)', '#f5e2bd': 'var(--warn-line)',
  '#fdeceb': 'var(--bad-bg)', '#eef2fd': 'var(--brand-soft)', '#cdd9f8': 'var(--brand-line)', '#b3312f': 'var(--bad)', '#44506b': 'var(--ink2)' };
function themeColors(html) { return String(html).replace(/#[0-9a-f]{6}\b/gi, h => COLOR_VARS[h.toLowerCase()] || h); }

/* ================== LƯU TRỮ (localStorage) ================== */
const STORE_KEY = 'istqb-ctfl-study-v2';
function blankStore() {
  return { sets: {}, qres: {}, history: [], vocab: {}, lastTab: 'A', chapter: 1, sylUnit: null, wrongFilter: 'all',
           mode: 'practice', vocabCh: 0, vocabView: 'cards', vocabOnlyNew: false, vocabIdx: 0 };
}
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
  clearTimeout(saveTimer);
  if (now) run(); else saveTimer = setTimeout(run, 300);
}

/* ================== THUẬT NGỮ (gạch chân + tooltip) ================== */
const GLOSS = SYL.glossary || [];
const GLOSS_BY = {};
GLOSS.forEach(g => { GLOSS_BY[g.en.toLowerCase()] = g; });
/* Những từ quá phổ biến -> không gạch chân để đỡ rối mắt */
const NO_HL = new Set(['testing', 'quality', 'review', 'risk', 'test case', 'defect', 'error', 'failure', 'coverage', 'test automation', 'test object', 'test', 'testware']);
const TERM_RE = (function () {
  const list = GLOSS.map(g => g.en).filter(t => t.length > 3 && !NO_HL.has(t)).sort((a, b) => b.length - a.length);
  if (!list.length) return null;
  const pat = list.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/[\s-]+/g, '[\\s-]+')).join('|');
  return new RegExp('\\b(' + pat + ')(s|es)?\\b', 'gi');
})();
function findGloss(word) {
  const w = word.toLowerCase().replace(/[\s-]+/g, ' ');
  return GLOSS_BY[w] || GLOSS_BY[w.replace(/-/g, ' ')] || null;
}
/* text: chuỗi ĐÃ escape. used: Set các thuật ngữ đã gạch trong thẻ (mỗi từ chỉ gạch 1 lần) */
function decorate(text, opt) {
  let out = text;
  if (opt.terms && TERM_RE) {
    out = out.replace(TERM_RE, (m, base) => {
      const g = findGloss(base);
      if (!g || opt.used.has(g.en)) return m;
      opt.used.add(g.en);
      return '<span class="term" tabindex="0" data-tip="' + esc(g.vi + ' — ' + g.def) + '">' + m + '</span>';
    });
  }
  if (opt.traps) {
    // chỉ thay ngoài thẻ HTML
    out = out.split(/(<[^>]+>)/).map(seg => seg.charAt(0) === '<' ? seg :
      seg.replace(TRAP_RE, w => '<mark class="trap" tabindex="0" data-tip="' + esc(TRAPS[w]) + '">' + w + '</mark>')).join('');
  }
  return out;
}

/* ================== NGÂN HÀNG CÂU HỎI ================== */
function prepare(exam, list) {
  const map = DB.lo[exam] || {};
  return (list || []).map(q => {
    const m = map[q.n] || {};
    const lo = m.lo || q.lo || '';
    const ch = +(lo.match(/^FL-(\d)/) || [0, 0])[1];
    return Object.assign({}, q, { exam: exam, uid: exam + ':' + q.n, lo: lo, k: m.k || q.k || '', ch: ch });
  });
}

const SETS = [];
const EXAM_VER = { A: 'v1.7', B: 'v1.7', C: 'v1.6', D: 'v1.5' };
['A', 'B', 'C', 'D'].forEach(X => {
  const ex = DB.exams[X];
  if (!ex || !ex.main) return;
  SETS.push({
    id: X, kind: 'exam', group: 'exam',
    tab: '📝 Đề ' + X, mini: '40 câu · 60 phút',
    title: '🧪 ISTQB CTFL v4.0 — Sample Exam ' + X + ' (40 câu)',
    sub: 'Thi thử: 60 phút · Đạt khi đúng từ 26/40 câu trở lên (65%)',
    foot: 'ISTQB® CTFL v4.0 Sample Exam ' + X + ' ' + EXAM_VER[X] + ' · Web Speech API (English US) · 40 câu',
    qs: prepare(X, ex.main), minutes: 60, chunk: 10, pass: 26
  });
});
if (DB.exams.A && DB.exams.A.bonus1) {
  SETS.push({
    id: 'A-bonus1', kind: 'exam', group: 'exam', tab: '🎁 Bonus A1–A13', mini: '13 câu · 20 phút',
    title: '🎁 Bonus — Additional Questions A1–A13 (Đề A)',
    sub: 'Câu hỏi bổ sung trong phụ lục Đề A · 20 phút · đạt 9/13',
    foot: 'ISTQB® CTFL v4.0 Additional Questions A1–A13 · 13 câu',
    qs: prepare('A', DB.exams.A.bonus1), minutes: 20, chunk: 13, pass: 9
  });
  SETS.push({
    id: 'A-bonus2', kind: 'exam', group: 'exam', tab: '🎁 Bonus A14–A26', mini: '13 câu · 20 phút',
    title: '🎁 Bonus — Additional Questions A14–A26 (Đề A)',
    sub: 'Câu hỏi bổ sung trong phụ lục Đề A · 20 phút · đạt 9/13',
    foot: 'ISTQB® CTFL v4.0 Additional Questions A14–A26 · 13 câu',
    qs: prepare('A', DB.exams.A.bonus2), minutes: 20, chunk: 13, pass: 9
  });
}
const POOL = [];
const BY_UID = {};
SETS.forEach(s => s.qs.forEach(q => { if (!BY_UID[q.uid]) { BY_UID[q.uid] = q; POOL.push(q); } }));

SETS.push({
  id: 'syllabus', kind: 'practice', group: 'study', tab: '📖 Giáo trình', mini: 'Lý thuyết + luyện theo mục',
  title: '📖 Giáo trình CTFL v4.0.1 & luyện theo chương', sub: 'Tóm tắt tiếng Việt từng mục syllabus · bấm “Luyện” để làm các câu của mục đó trong cả 4 đề',
  foot: 'Nội dung tóm tắt từ ISTQB® CTFL Syllabus v4.0.1 · © ISTQB'
});
SETS.push({
  id: 'vocab', kind: 'page', group: 'study', tab: '🔤 Từ vựng', mini: 'Flashcard & mẹo đọc đề',
  title: '🔤 Từ vựng ISTQB & mẹo đọc đề', sub: 'Thuộc thuật ngữ là chìa khóa đọc hiểu đề tiếng Anh · bấm thẻ để lật, 🔊 để nghe',
  foot: 'Thuật ngữ lấy từ danh sách Keywords của từng chương syllabus'
});
SETS.push({
  id: 'wrong', kind: 'practice', group: 'study', tab: '📕 Sổ câu sai', mini: 'Luyện lại tới khi đúng',
  title: '📕 Sổ câu sai', sub: 'Tất cả câu bạn từng làm sai ở mọi đề · Làm đúng ở đây thì câu sẽ được gạch khỏi sổ',
  foot: 'Sổ câu sai được lưu trong trình duyệt này'
});
SETS.push({
  id: 'stats', kind: 'page', group: 'study', tab: '📈 Tiến độ', mini: 'Lịch sử điểm',
  title: '📈 Tiến độ & lịch sử điểm', sub: 'Điểm từng lần nộp bài, điểm cao nhất mỗi đề, độ chính xác theo chương',
  foot: 'Dữ liệu chỉ lưu trên trình duyệt này (localStorage)'
});

/* ================== TRẠNG THÁI ================== */
function setState(s) {
  let st = store.sets[s.id];
  if (!st) {
    st = store.sets[s.id] = { answers: {} };
    if (s.kind === 'exam') { st.remain = s.minutes * 60; st.paused = false; st.expired = false; st.resultHTML = ''; st.resultPass = null; st.attempt = null; }
  }
  if (!st.answers) st.answers = {};
  if (!st.rec) st.rec = {};
  return st;
}
const picking = {};  // uid -> mảng đáp án đang chọn dở (câu chọn nhiều đáp án), không lưu

if (store.lastTab === 'chapter') store.lastTab = 'syllabus';   // tương thích bản cũ
let cur = SETS.find(s => s.id === store.lastTab) || SETS[0];
let filter = { from: 0, to: 0 };   // nhóm 10 câu trong bộ đề
let wrongSnapshot = null;          // danh sách uid trong sổ câu sai lúc mở tab

/* Chế độ hiệu lực cho tab hiện tại ("Thi thật" chỉ áp dụng cho tab đề thi) */
function effMode() {
  if (store.mode === 'exam' && cur.kind !== 'exam') return 'practice';
  return store.mode;
}
/* Đang thi thật và chưa nộp -> giấu đúng/sai */
function hidingResults() {
  if (effMode() !== 'exam') return false;
  return !setState(cur).resultHTML;
}

function recordResult(q, ok) {
  const r = store.qres[q.uid] || (store.qres[q.uid] = { right: 0, wrong: 0 });
  if (ok) r.right++; else r.wrong++;
  r.last = ok; r.at = Date.now();
  if (!ok) r.inBook = true;
  else if (cur.id === 'wrong') r.inBook = false;
}
function bookUids() { return Object.keys(store.qres).filter(u => store.qres[u].inBook && BY_UID[u]); }

/* Danh sách câu của tab */
function currentList() {
  if (cur.kind === 'exam') return cur.qs;
  if (cur.id === 'wrong') {
    if (!wrongSnapshot) wrongSnapshot = bookUids();
    let list = wrongSnapshot.map(u => BY_UID[u]).filter(Boolean);
    if (store.wrongFilter !== 'all') list = list.filter(q => q.exam === store.wrongFilter || ('ch' + q.ch) === store.wrongFilter);
    return list;
  }
  if (cur.id === 'syllabus') {
    const u = store.sylUnit;
    if (u && u.indexOf('ch') === 0) return POOL.filter(q => q.ch === +u.slice(2));
    if (u) return POOL.filter(q => q.lo === u);
    return POOL.filter(q => q.ch === store.chapter);
  }
  return [];
}
function visibleList() {
  const list = currentList();
  if (cur.kind === 'exam') return list.slice(filter.from, filter.to + 1);
  if (cur.id === 'syllabus' && !store.sylUnit) return [];     // màn danh sách mục: chưa hiện câu hỏi
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

/* ================== TAB + CHẾ ĐỘ ================== */
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
function buildModebar() {
  const el = $('modebar');
  if (cur.kind === 'page') { el.style.display = 'none'; return; }
  el.style.display = '';
  const m = effMode();
  let h = '<span class="mlabel">Chế độ:</span>';
  MODES.forEach(x => {
    const disabled = x.id === 'exam' && cur.kind !== 'exam';
    h += '<button class="mbtn' + (m === x.id ? ' active' : '') + '" data-m="' + x.id + '"' + (disabled ? ' disabled title="Chỉ dùng cho tab đề thi"' : ' title="' + esc(x.desc) + '"') + '>' + x.icon + ' ' + x.name + '</button>';
  });
  h += '<span class="mdesc">' + esc(MODES.find(x => x.id === m).desc) + '</span>';
  el.innerHTML = h;
  el.querySelectorAll('.mbtn').forEach(b => {
    b.onclick = () => {
      if (b.disabled) return;
      store.mode = b.getAttribute('data-m'); save();
      Object.keys(picking).forEach(k => delete picking[k]);
      mount();
    };
  });
}

function switchSet(s, keepScroll) {
  if (s === cur) return;
  stopSpeak();
  cur = s;
  store.lastTab = s.id; save();
  if (s.id === 'wrong') wrongSnapshot = null;
  if (s.kind === 'exam') filter = { from: 0, to: s.qs.length - 1 };
  mount();
  if (!keepScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
}

function mount() {
  buildTabs();
  buildModebar();
  $('hTitle').textContent = cur.title;
  $('hSub').textContent = cur.sub;
  $('foot').textContent = cur.foot;
  if (cur.kind === 'page') {
    dash.style.display = 'none';
    $('result').className = ''; $('result').innerHTML = '';
    if (cur.id === 'stats') renderStats(); else renderVocab();
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
  if (cur.id === 'syllabus') {
    CHAPTERS.forEach(c => {
      const cnt = POOL.filter(q => q.ch === c.id).length;
      el.appendChild(chip('Chương ' + c.id + ' (' + cnt + ' câu)', store.chapter === c.id && (!store.sylUnit || store.sylUnit === 'ch' + c.id || (SYL.units[store.sylUnit] || {}).ch === c.id), () => {
        store.chapter = c.id; store.sylUnit = null; save(); mount(); window.scrollTo({ top: 0, behavior: 'smooth' });
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

/* ================== KHỐI LÝ THUYẾT ================== */
function unitStats(lo) {
  const qs = POOL.filter(q => q.lo === lo);
  let ok = 0, bad = 0;
  qs.forEach(q => { const r = store.qres[q.uid]; if (r) { if (r.last) ok++; else bad++; } });
  return { n: qs.length, ok, bad };
}
function theoryBody(u, withPractice) {
  let h = '<div class="th-lo"><b>' + esc(u.lo) + ' (' + esc(u.k) + ')</b> ' + esc(u.loEn) + '<div class="vi">🇻🇳 ' + esc(u.loVi) + '</div></div>';
  if (u.summary && u.summary.length) h += '<div class="th-h">📝 Tóm tắt</div><ul class="th-sum">' + u.summary.map(s => '<li>' + esc(s) + '</li>').join('') + '</ul>';
  if (u.en && u.en.length) {
    h += '<div class="th-h">📜 Nguyên văn syllabus (English)</div><div class="th-en">'
       + u.en.map(s => '<p>' + decorate(esc(s), { terms: true, used: new Set() }) + ' <button class="spk sm" data-say="' + esc(s) + '" title="Nghe">🔊</button></p>').join('') + '</div>';
  }
  if (u.tips && u.tips.length) h += '<div class="th-tip">' + u.tips.map(s => '💡 ' + esc(s)).join('<br>') + '</div>';
  if (u.terms && u.terms.length) {
    h += '<div class="th-h">🔤 Thuật ngữ</div><div class="th-terms">' + u.terms.map(t => {
      const g = GLOSS_BY[t];
      return g ? '<span class="tchip" tabindex="0" data-tip="' + esc(g.def) + '"><b>' + esc(g.en) + '</b> · ' + esc(g.vi) + '</span>' : '';
    }).join('') + '</div>';
  }
  h += '<div class="th-act">';
  if (withPractice) {
    const s = unitStats(u.lo);
    if (s.n) h += '<button class="th-btn" data-go="' + esc(u.lo) + '">🎯 Luyện ' + s.n + ' câu của mục này</button>';
  }
  h += '<a class="th-btn ghost" href="' + SYLLABUS_PDF + '#page=' + (u.page || 1) + '" target="_blank" rel="noopener">📄 Mở syllabus PDF trang ' + (u.page || '?') + '</a>';
  h += '</div>';
  return h;
}
function theoryHTML(lo) {
  const u = SYL.units[lo];
  if (!u) return '';
  return '<details class="theory"><summary>📖 Lý thuyết · Mục ' + esc(u.sec) + ' ' + esc(u.title) + ' <span class="pg">(trang ' + u.page + ')</span></summary>'
       + '<div class="th-body">' + theoryBody(u, true) + '</div></details>';
}
function goUnit(lo) {
  store.sylUnit = lo;
  const u = SYL.units[lo]; if (u) store.chapter = u.ch;
  save();
  if (cur.id !== 'syllabus') switchSet(SETS.find(s => s.id === 'syllabus'));
  else { mount(); }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function bindTheory(root) {
  root.querySelectorAll('[data-go]').forEach(b => { b.onclick = ev => { ev.preventDefault(); goUnit(b.getAttribute('data-go')); }; });
  root.querySelectorAll('.th-en .spk, .vrow .spk, .fc .spk').forEach(b => { b.onclick = ev => { ev.stopPropagation(); speak(b.getAttribute('data-say'), b); }; });
}

/* ================== HIỂN THỊ CÂU HỎI ================== */
function cardHTML(q) {
  const st = setState(cur);
  const mode = effMode();
  const hide = hidingResults();
  const chosen = st.answers[q.uid];
  const pick = picking[q.uid] || [];
  const done = chosen !== undefined;
  const reveal = done && !hide;
  const key = keyOf(q);
  const need = needCount(q);
  const correct = done && sameSet(chosen, key);
  const deco = { terms: mode !== 'exam', traps: mode !== 'exam', used: new Set() };

  let cls = 'qcard' + (reveal ? ' reveal' : '') + (mode === 'learn' ? ' learn' : '');
  let h = '<div class="' + cls + '" id="qc-' + esc(q.uid) + '">';
  h += '<div class="qtop">';
  if (cur.kind === 'practice') h += '<span class="qsrc">Đề ' + q.exam + '</span>';
  h += '<span class="qnum">Câu ' + esc(q.n) + '</span>';
  if (need > 1) h += '<span class="qmulti">Chọn ' + need + ' đáp án</span>';
  if (reveal) h += '<span class="qstate ' + (correct ? 'ok' : 'bad') + '">' + (correct ? '✓ Đúng' : '✗ Sai') + '</span>';
  else if (done && hide) h += '<span class="qstate done">● Đã trả lời</span>';
  if (cur.id === 'wrong') {
    const r = store.qres[q.uid];
    if (r && r.wrong) h += '<span class="qwrong">Đã sai ' + r.wrong + ' lần</span>';
  }
  h += '<span class="spacer"></span>';
  if (q.lo && mode !== 'exam') h += '<span class="qlo" title="Learning Objective · K-level">' + esc(q.lo) + (q.k ? ' · ' + esc(q.k) : '') + '</span>';
  h += '</div>';

  if (q.pre) h += '<div class="scen">' + q.pre + '</div>';
  if (q.img && IMAGES[q.img]) h += '<img class="qimg" alt="Sơ đồ minh họa" loading="lazy" src="' + IMAGES[q.img] + '">';
  if (q.prev && mode !== 'exam') h += '<div class="scenv">🇻🇳 ' + q.prev + '</div>';

  h += '<div class="qtext"><span class="t">' + decorate(esc(q.q), deco) + '</span>'
     + '<button class="spk" data-say="' + esc(q.q) + '" title="Nghe câu hỏi">🔊</button></div>';
  if (mode !== 'exam') h += '<div class="qtrans">🇻🇳 ' + esc(q.qv) + '</div>';

  h += '<div class="opts">';
  const shownPick = hide && done ? (pick.length ? pick : chosen) : pick;
  q.o.forEach((o, j) => {
    let c = 'opt';
    if (reveal) {
      if (key.indexOf(j) > -1) c += ' correct';
      else if (chosen.indexOf(j) > -1) c += ' wrong';
    } else if (shownPick.indexOf(j) > -1) c += ' picked';
    h += '<div class="' + c + '" data-u="' + esc(q.uid) + '" data-o="' + j + '">';
    h += '<div class="orow"><span class="letter">' + LETTERS[j] + '</span>';
    h += '<span class="otext">' + decorate(esc(o.t), { terms: deco.terms, traps: false, used: deco.used })
       + (reveal && key.indexOf(j) > -1 ? '<span class="tag ok">ĐÚNG</span>' : '')
       + (reveal && chosen.indexOf(j) > -1 && key.indexOf(j) === -1 ? '<span class="tag bad">BẠN CHỌN</span>' : '')
       + '</span>';
    h += '<button class="spk" data-say="' + esc(o.t) + '" title="Nghe đáp án">🔊</button></div>';
    if (mode !== 'exam' || reveal) h += '<div class="otrans">→ ' + esc(o.v) + '</div>';
    h += '</div>';
  });
  h += '</div>';

  if (need > 1 && (!done || hide)) h += '<div class="hint">⚠️ Câu này cần chọn ' + need + ' đáp án — đã chọn ' + shownPick.length + '/' + need + '</div>';

  if (reveal) {
    const ansTxt = key.map(k => LETTERS[k] + '. ' + esc(q.o[k].t)).join('  |  ');
    h += '<div class="expl"><div class="h">💡 Giải thích</div>'
       + '<div class="ans">✅ Đáp án đúng: ' + ansTxt + '</div>'
       + '<div class="body">' + esc(q.e) + '</div>'
       + theoryHTML(q.lo) + '</div>';
  }
  h += '</div>';
  return h;
}

function syllabusHeaderHTML() {
  const u = store.sylUnit;
  const c = CHAPTERS[store.chapter - 1];
  if (!u) {
    // danh sách mục của chương
    let h = '<div class="panel chhead"><h3>Chương ' + c.id + ' — ' + esc(c.en) + '</h3><div class="sub">' + esc(c.vi) + ' · chiếm khoảng <b>' + c.exam + '/40</b> câu trong đề thi thật</div>'
          + (c.intro ? '<p class="intro">' + esc(c.intro) + '</p>' : '')
          + '<button class="th-btn" data-go="ch' + c.id + '">🎯 Luyện toàn bộ ' + POOL.filter(q => q.ch === c.id).length + ' câu của chương ' + c.id + '</button></div>';
    (c.units || []).forEach(lo => {
      const x = SYL.units[lo]; if (!x) return;
      const s = unitStats(lo);
      const badge = s.n ? '<span class="ustat">' + s.n + ' câu' + (s.ok + s.bad ? ' · <b class="okc">✓' + s.ok + '</b> <b class="badc">✗' + s.bad + '</b>' : '') + '</span>' : '<span class="ustat muted">chưa có câu</span>';
      h += '<details class="theory unit"><summary><span class="usec">' + esc(x.sec) + '</span> ' + esc(x.title) + ' <span class="uvi">' + esc(x.titleVi) + '</span>' + badge + '</summary>'
         + '<div class="th-body">' + theoryBody(x, true) + '</div></details>';
    });
    if (!(c.units || []).length) h += '<div class="empty">Chưa có dữ liệu lý thuyết cho chương này.</div>';
    return h;
  }
  let h = '<button class="backbtn" id="btnBack">← Danh sách mục chương ' + store.chapter + '</button>';
  if (u.indexOf('ch') === 0) {
    h += '<div class="notice">🎯 Luyện toàn bộ câu hỏi <b>Chương ' + c.id + ' — ' + esc(c.en) + '</b> từ các đề A–D</div><div style="height:12px"></div>';
  } else {
    const x = SYL.units[u];
    if (x) h += '<details class="theory open-first" open><summary>📖 Mục ' + esc(x.sec) + ' ' + esc(x.title) + ' <span class="pg">(trang ' + x.page + ')</span></summary><div class="th-body">' + theoryBody(x, false) + '</div></details>';
  }
  return h;
}

function render() {
  const list = $('list');
  const qs = visibleList();
  let html = '';
  if (cur.id === 'syllabus') html += syllabusHeaderHTML();
  if (!qs.length && !(cur.id === 'syllabus' && !store.sylUnit)) {
    if (cur.id === 'wrong') html += '<div class="empty"><div class="big">🎉</div><b>Sổ câu sai đang trống</b><br>Làm các đề thi mẫu — câu nào sai sẽ tự động được thêm vào đây để luyện lại.</div>';
    else html += '<div class="empty">Không có câu hỏi nào cho mục này.</div>';
  }
  qs.forEach(q => { html += cardHTML(q); });
  list.innerHTML = html;
  const back = $('btnBack');
  if (back) back.onclick = () => { store.sylUnit = null; save(); mount(); };
  bindCards(list);
  bindTheory(list);
  updateStats();
}

function bindCards(root) {
  root.querySelectorAll('.qcard .spk').forEach(b => {
    b.onclick = ev => { ev.stopPropagation(); speak(b.getAttribute('data-say'), b); };
  });
  root.querySelectorAll('.term, .trap').forEach(t => { t.onclick = ev => ev.stopPropagation(); });
  root.querySelectorAll('.opt').forEach(el => {
    el.onclick = () => {
      const uid = el.getAttribute('data-u');
      const oi = +el.getAttribute('data-o');
      const st = setState(cur);
      const q = BY_UID[uid], need = needCount(q);
      if (cur.kind === 'exam' && st.expired) return;                 // hết giờ thì không làm tiếp
      const hide = hidingResults();
      if (!hide && st.answers[uid] !== undefined) return;            // đã khoá (chế độ Học/Luyện)
      let locked = null;
      if (hide) {
        // Thi thật: được đổi đáp án tới khi nộp bài
        if (need === 1) locked = [oi];
        else {
          const p = picking[uid] || (picking[uid] = (st.answers[uid] || []).slice());
          const at = p.indexOf(oi);
          if (at > -1) p.splice(at, 1); else p.push(oi);
          if (p.length > need) p.shift();
          if (p.length === need) { locked = p.slice(); delete picking[uid]; }
          else delete st.answers[uid];
        }
        if (locked) st.answers[uid] = locked;
        save();
      } else {
        if (need === 1) locked = [oi];
        else {
          const p = picking[uid] || (picking[uid] = []);
          const at = p.indexOf(oi);
          if (at > -1) p.splice(at, 1); else p.push(oi);
          if (p.length >= need) { locked = p.slice(); delete picking[uid]; }
        }
        if (locked) {
          st.answers[uid] = locked;
          st.rec[uid] = 1;
          recordResult(q, sameSet(locked, keyOf(q)));
          save();
        }
      }
      const card = el.closest('.qcard');
      const tmp = document.createElement('div');
      tmp.innerHTML = cardHTML(q);
      const fresh = tmp.firstChild;
      card.replaceWith(fresh);
      bindCards(fresh);
      bindTheory(fresh);
      updateStats();
      if (locked && !hide) {
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
  if (cur.kind === 'page') return;
  const s = stats();
  const hide = hidingResults();
  $('sDone').textContent = s.done;
  $('sOk').textContent = hide ? '—' : s.ok;
  $('sBad').textContent = hide ? '—' : s.bad;
  $('sAcc').textContent = hide ? '—' : s.acc + '%';
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
  if (cur.kind !== 'exam') return;
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
      'Kết quả này cho thấy bạn đã hiểu bản chất chứ không chỉ nhớ đáp án. Hãy thử lại ở chế độ 📕 Thi thật (100% tiếng Anh) để chắc chắn bạn đã sẵn sàng!'], seed) };
  if (scorePct >= 80) return { icon: '🎉', color: 'var(--ok)', bg: '#e6f7f0', border: '#b9e6d4',
    title: 'Rất tốt! Bạn đã vượt mốc Đạt một cách thuyết phục.',
    body: pickMsg(['Chỉ còn vài điểm mù nhỏ thôi. Hãy lướt lại đúng những câu bạn sai — chúng đã nằm sẵn trong 📕 Sổ câu sai.',
      'Bạn đang đi rất đúng hướng. Xem bảng theo chương bên dưới để biết chương nào còn yếu, mở 📖 Giáo trình ôn lại mục đó là quá đủ tự tin!'], seed) };
  if (scorePct >= 65) return { icon: '✅', color: 'var(--ok)', bg: '#e6f7f0', border: '#b9e6d4',
    title: 'Chúc mừng, bạn đã ĐẠT!',
    body: pickMsg(['Bạn đã qua mốc ' + need + '/' + tot + ' — thành quả của sự kiên trì đấy. Giờ hãy biến những câu sai thành điểm mạnh, biên độ an toàn sẽ dày hơn nhiều.',
      'Vượt mốc rồi! Đừng dừng ở đây: mở 📕 Sổ câu sai và đọc phần 📖 Lý thuyết của từng câu sai, mỗi lỗi sửa được là một điểm chắc chắn cho kỳ thi thật.'], seed) };
  if (scorePct >= 50) return { icon: '💪', color: 'var(--warn)', bg: '#fff7e8', border: '#f5e2bd',
    title: 'Sát rồi! Bạn chỉ còn cách mốc Đạt một khoảng rất ngắn.',
    body: pickMsg(['Đừng nản — ' + scorePct + '% nghĩa là nền tảng đã có, chỉ thiếu độ chắc ở vài chủ đề. Ôn lại đúng những câu sai thôi, lần tới chạm mốc ' + need + '/' + tot + ' là chuyện sớm muộn.',
      'Bạn đang rất gần đích. Hãy vào 📖 Giáo trình, chọn chương yếu nhất, đọc tóm tắt rồi luyện các câu của từng mục — tiến bộ sẽ thấy rõ ngay!'], seed) };
  if (scorePct >= 35) return { icon: '🌱', color: 'var(--warn)', bg: '#fff7e8', border: '#f5e2bd',
    title: 'Chưa đạt lần này, nhưng bạn đang tiến bộ thật sự.',
    body: pickMsg(['Mỗi câu sai hôm nay là một câu bạn sẽ làm đúng ngày mai. Hãy học 🔤 Từ vựng của chương yếu và đọc 📖 Giáo trình — hiểu thuật ngữ là đọc đề dễ hơn rất nhiều.',
      'Điểm số chỉ phản ánh hiện tại, không phản ánh khả năng của bạn. Chuyển sang chế độ 📗 Học, ôn lần lượt từng chương, bạn sẽ ngạc nhiên với tốc độ mình khá lên đấy!'], seed) };
  return { icon: '🤗', color: 'var(--brand)', bg: '#eef2fd', border: '#cdd9f8',
    title: 'Không sao cả — ai cũng bắt đầu từ đây.',
    body: pickMsg(['Lần đầu tiếp cận đề ISTQB thì điểm thấp là hoàn toàn bình thường. Hãy bắt đầu từ 🔤 Từ vựng và 📖 Giáo trình chương 1, dùng chế độ 📗 Học. Kiên trì vài vòng thôi là bạn sẽ khác hẳn.',
      'Đừng để con số làm bạn nản lòng. Đề này bám sát syllabus v4.0 nên khá khó, và bạn đang làm điều đúng đắn nhất: luyện tập. Học từng chương nhỏ, hiểu bản chất — tiến bộ chắc chắn sẽ đến.'], seed) };
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
  // ghi nhận các câu chưa được ghi (chế độ Thi thật chấm khi nộp)
  cur.qs.forEach(q => {
    const a = st.answers[q.uid];
    if (a !== undefined && !st.rec[q.uid]) { st.rec[q.uid] = 1; recordResult(q, sameSet(a, keyOf(q))); }
  });
  Object.keys(picking).forEach(k => delete picking[k]);
  const s = stats();
  const scorePct = Math.round(s.ok / s.total * 100);
  const pass = s.ok >= cur.pass;
  const totalSec = cur.minutes * 60;
  const used = totalSec - st.remain;
  const m = buildEncouragement(scorePct, s);
  const br = chapterBreakdown(cur.qs, st.answers);

  if (!st.attempt) st.attempt = 'at' + Date.now();
  const rec = { id: st.attempt, set: cur.id, tab: cur.tab.replace(/^\S+\s/, ''), ok: s.ok, total: s.total, done: s.done, pct: scorePct, pass: pass, used: used, at: Date.now(), chapters: br, mode: effMode() };
  const idx = store.history.findIndex(h => h.id === rec.id);
  if (idx > -1) store.history[idx] = rec; else store.history.push(rec);
  const prev = store.history.filter(h => h.set === cur.id && h.id !== rec.id);
  const last = prev.length ? prev[prev.length - 1] : null;

  const html =
    (auto ? '<div style="background:#fdeceb;color:#b3312f;border-radius:9px;padding:8px 11px;font-size:13px;font-weight:700;margin-bottom:10px">⏰ Hết giờ! Bài làm đã được nộp tự động.</div>' : '')
    + '<h2>📊 Kết quả bài làm — ' + esc(cur.tab) + (rec.mode === 'exam' ? ' <span class="mtag">📕 Thi thật</span>' : '') + '</h2>'
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
  st.resultHTML = themeColors(html);
  st.resultPass = pass;
  save(true);
  buildTabs();
  restoreResult();
  render();                       // chế độ Thi thật: giờ mới hiện đúng/sai + giải thích
  $('result').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function restoreResult() {
  const r = $('result');
  const st = cur.kind === 'exam' ? setState(cur) : null;
  if (st && st.resultHTML) {
    r.className = 'show';
    r.style.borderColor = st.resultPass ? 'var(--ok)' : 'var(--bad)';
    r.innerHTML = themeColors(st.resultHTML);
  } else { r.className = ''; r.innerHTML = ''; }
}
$('btnSubmit').onclick = () => {
  const st = setState(cur);
  if (hidingResults()) {
    const left = cur.qs.length - Object.keys(st.answers).filter(u => cur.qs.some(q => q.uid === u)).length;
    if (left > 0 && !confirm('Còn ' + left + ' câu chưa trả lời. Vẫn nộp bài?')) return;
  }
  submitExam(false);
  if (!st.expired) { st.paused = true; btnPause.textContent = '▶️ Tiếp tục'; paintTimer(); save(); }
};

/* ================== LÀM LẠI ================== */
$('btnReset').onclick = () => {
  const st = setState(cur);
  if (cur.kind === 'exam') {
    if (!confirm('Xóa bài làm hiện tại của "' + cur.tab + '", đặt lại đồng hồ ' + cur.minutes + ' phút và làm lại từ đầu?\n(Lịch sử điểm và sổ câu sai vẫn được giữ.)')) return;
    st.answers = {}; st.rec = {}; st.resultHTML = ''; st.resultPass = null; st.attempt = null;
    st.remain = cur.minutes * 60; st.paused = false; st.expired = false;
    btnPause.style.display = ''; btnPause.textContent = '⏸ Tạm dừng';
    paintTimer();
  } else {
    currentList().forEach(q => { delete st.answers[q.uid]; delete st.rec[q.uid]; delete picking[q.uid]; });
    if (cur.id === 'wrong') {
      st.answers = {}; st.rec = {};
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

/* ================== TAB TỪ VỰNG ================== */
function vocabDeck() {
  let d = GLOSS.slice();
  if (store.vocabCh) d = d.filter(g => g.ch === store.vocabCh);
  if (store.vocabOnlyNew) d = d.filter(g => !(store.vocab[g.en] && store.vocab[g.en].known));
  return d;
}
function renderVocab() {
  const list = $('list');
  if (!GLOSS.length) { list.innerHTML = '<div class="empty">Chưa có dữ liệu từ vựng.</div>'; return; }
  const known = GLOSS.filter(g => store.vocab[g.en] && store.vocab[g.en].known).length;
  const pct = Math.round(known / GLOSS.length * 100);
  let h = '<div class="panel"><div class="vtop"><div><b>Đã thuộc ' + known + '/' + GLOSS.length + ' thuật ngữ</b> (' + pct + '%)</div>'
        + '<div class="bar" style="margin:6px 0 0"><i style="width:' + pct + '%"></i></div></div>'
        + '<div class="filters" id="vViews">'
        + ['cards:🃏 Flashcard', 'list:📋 Danh sách', 'tips:🎯 Mẹo đọc đề'].map(x => { const [k, l] = x.split(':'); return '<button class="fbtn' + (store.vocabView === k ? ' active' : '') + '" data-v="' + k + '">' + l + '</button>'; }).join('')
        + '</div>';
  if (store.vocabView !== 'tips') {
    h += '<div class="filters" id="vChs"><button class="fbtn' + (!store.vocabCh ? ' active' : '') + '" data-c="0">Tất cả</button>'
       + CHAPTERS.map(c => { const n = GLOSS.filter(g => g.ch === c.id).length; return n ? '<button class="fbtn' + (store.vocabCh === c.id ? ' active' : '') + '" data-c="' + c.id + '">Ch.' + c.id + ' (' + n + ')</button>' : ''; }).join('')
       + '<label class="vnew"><input type="checkbox" id="vOnlyNew"' + (store.vocabOnlyNew ? ' checked' : '') + '> Chỉ từ chưa thuộc</label></div>';
  }
  h += '</div>';

  if (store.vocabView === 'cards') h += flashcardHTML();
  else if (store.vocabView === 'list') h += vocabListHTML();
  else h += tipsHTML();
  list.innerHTML = h;

  list.querySelectorAll('#vViews .fbtn').forEach(b => b.onclick = () => { store.vocabView = b.getAttribute('data-v'); save(); renderVocab(); });
  list.querySelectorAll('#vChs .fbtn').forEach(b => b.onclick = () => { store.vocabCh = +b.getAttribute('data-c'); store.vocabIdx = 0; save(); renderVocab(); });
  const on = $('vOnlyNew'); if (on) on.onchange = () => { store.vocabOnlyNew = on.checked; store.vocabIdx = 0; save(); renderVocab(); };
  bindTheory(list);
  bindVocab(list);
}
function flashcardHTML() {
  const deck = vocabDeck();
  if (!deck.length) return '<div class="empty"><div class="big">🎉</div>Bạn đã thuộc hết thuật ngữ trong nhóm này!</div>';
  if (store.vocabIdx >= deck.length) store.vocabIdx = 0;
  const g = deck[store.vocabIdx];
  const v = store.vocab[g.en] || {};
  return '<div class="fcwrap"><div class="fc" id="fc" tabindex="0">'
    + '<div class="fc-front"><div class="fc-ch">Chương ' + g.ch + (g.kw ? ' · Keyword' : '') + (v.known ? ' · ✅ đã thuộc' : '') + '</div>'
    + '<div class="fc-en">' + esc(g.en) + '</div><button class="spk" data-say="' + esc(g.en) + '" title="Nghe">🔊</button>'
    + '<div class="fc-hint">Bấm vào thẻ để xem nghĩa</div></div>'
    + '<div class="fc-back"><div class="fc-vi">' + esc(g.vi) + '</div><div class="fc-def">' + esc(g.def) + '</div></div>'
    + '</div>'
    + '<div class="fc-nav"><button class="btn ghost" id="fcPrev">⟵</button>'
    + '<button class="btn bad" id="fcNo">❌ Chưa nhớ</button><button class="btn okb" id="fcYes">✅ Đã nhớ</button>'
    + '<button class="btn ghost" id="fcNext">⟶</button></div>'
    + '<div class="fc-count">' + (store.vocabIdx + 1) + ' / ' + deck.length + ' · phím tắt: Space lật thẻ, ← → chuyển, 1 chưa nhớ, 2 đã nhớ</div></div>';
}
function vocabListHTML() {
  const deck = vocabDeck();
  return '<div class="panel"><input class="vsearch" id="vSearch" placeholder="🔍 Tìm thuật ngữ (Anh hoặc Việt)…" value="' + esc(store.vocabQ || '') + '">'
    + '<div id="vRows">' + vocabRows(deck) + '</div></div>';
}
function vocabRows(deck) {
  const qy = (store.vocabQ || '').trim().toLowerCase();
  const rows = qy ? deck.filter(g => (g.en + ' ' + g.vi + ' ' + g.def).toLowerCase().indexOf(qy) > -1) : deck;
  if (!rows.length) return '<div class="empty">Không tìm thấy thuật ngữ.</div>';
  return rows.map(g => {
    const k = store.vocab[g.en] && store.vocab[g.en].known;
    return '<div class="vrow"><div class="ven"><button class="spk sm" data-say="' + esc(g.en) + '">🔊</button><b>' + esc(g.en) + '</b><span class="vch">Ch.' + g.ch + '</span></div>'
      + '<div class="vvi">' + esc(g.vi) + '<div class="vdef">' + esc(g.def) + '</div></div>'
      + '<button class="vknow' + (k ? ' on' : '') + '" data-k="' + esc(g.en) + '" title="Đánh dấu đã thuộc">' + (k ? '✅' : '☐') + '</button></div>';
  }).join('');
}
function tipsHTML() {
  const traps = Object.keys(TRAPS).filter(k => ['CORRECT', 'TRUE', 'THREE', 'PRIMARY', 'MINIMAL', 'LAST', 'NEXT'].indexOf(k) === -1);
  return '<div class="panel"><h3>🎯 Từ khóa “bẫy” trong đề</h3><div class="sub">Đề ISTQB viết HOA những từ quyết định ý nghĩa câu hỏi. Ở chế độ Học/Luyện, app tự tô vàng các từ này.</div>'
    + '<div class="traplist">' + traps.map(k => '<div><mark class="trap">' + k + '</mark> ' + esc(TRAPS[k]) + '</div>').join('') + '</div></div>'
    + '<div class="panel"><h3>📌 Mẫu câu hỏi hay gặp</h3><ul class="tips">'
    + '<li><b>Which of the following is a…?</b> — Phương án nào sau đây là… (chọn 1 cái đúng)</li>'
    + '<li><b>Which of the following statements is NOT…?</b> — tìm phát biểu SAI. Đọc từng phương án và tự hỏi “cái này có đúng không?”, phương án sai chính là đáp án.</li>'
    + '<li><b>Which of the following BEST describes…?</b> — nhiều phương án có thể đúng một phần; chọn phương án khớp với định nghĩa trong syllabus nhất.</li>'
    + '<li><b>Select TWO options</b> — phải chọn đủ 2 đáp án, sai 1 là mất cả câu.</li>'
    + '<li><b>Which test cases / How many test cases…MINIMUM…?</b> — câu K3 tính toán (EP, BVA, decision table, state transition): viết nháp ra giấy, đếm coverage item trước rồi mới nhìn đáp án.</li>'
    + '<li><b>Match … (1–4) with … (A–D)</b> — dạng ghép cặp: tìm cặp chắc chắn nhất trước rồi loại trừ phương án.</li>'
    + '<li><b>Consider the following… / Given the following…</b> — đọc kỹ bối cảnh, gạch chân con số và điều kiện.</li>'
    + '</ul></div>'
    + '<div class="panel"><h3>🧠 Chiến thuật làm bài cho người chưa vững tiếng Anh</h3><ul class="tips">'
    + '<li>Đăng ký thi bằng ngôn ngữ không phải tiếng mẹ đẻ thường được <b>cộng thêm 25% thời gian</b> (60 → 75 phút) — hỏi đơn vị tổ chức thi khi đăng ký.</li>'
    + '<li>Đọc <b>câu hỏi (dòng cuối)</b> trước, rồi mới đọc bối cảnh — biết đề hỏi gì sẽ đọc nhanh hơn.</li>'
    + '<li>Tìm <b>thuật ngữ</b> trong phương án: đề thường dùng đúng câu chữ của syllabus, phương án “nghe giống syllabus” thường đúng.</li>'
    + '<li>Cảnh giác với từ tuyệt đối (<i>always, never, all, only, guarantee, prove, ensure</i>) — thường là phương án sai (vd “testing proves there are no defects”).</li>'
    + '<li>Không bỏ trống: không bị trừ điểm khi sai, hãy loại trừ rồi đoán.</li>'
    + '<li>Lộ trình gợi ý: 🔤 Từ vựng chương → 📖 Giáo trình (chế độ 📗 Học) → luyện từng mục → 📕 Sổ câu sai → làm đề A–D ở chế độ 📕 Thi thật, ổn định ≥ 32/40 thì đi thi.</li>'
    + '</ul></div>';
}
function bindVocab(list) {
  const fc = $('fc');
  const deckLen = () => vocabDeck().length;
  const go = d => { const n = deckLen(); if (!n) return; store.vocabIdx = (store.vocabIdx + d + n) % n; save(); renderVocab(); };
  const mark = known => {
    const deck = vocabDeck(); const g = deck[store.vocabIdx]; if (!g) return;
    store.vocab[g.en] = { known: known, at: Date.now() };
    if (!(store.vocabOnlyNew && known)) store.vocabIdx++;
    if (store.vocabIdx >= vocabDeck().length) store.vocabIdx = 0;
    save(); renderVocab();
  };
  if (fc) {
    fc.onclick = () => fc.classList.toggle('flip');
    $('fcPrev').onclick = () => go(-1);
    $('fcNext').onclick = () => go(1);
    $('fcNo').onclick = () => mark(false);
    $('fcYes').onclick = () => mark(true);
    vocabKeys = e => {
      if (cur.id !== 'vocab' || store.vocabView !== 'cards' || /input|textarea/i.test(e.target.tagName)) return;
      if (e.key === ' ') { e.preventDefault(); fc.classList.toggle('flip'); }
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === '1') mark(false);
      else if (e.key === '2') mark(true);
    };
  } else vocabKeys = null;
  const s = $('vSearch');
  if (s) s.oninput = () => { store.vocabQ = s.value; $('vRows').innerHTML = vocabRows(vocabDeck()); bindRows(); };
  function bindRows() {
    list.querySelectorAll('.vknow').forEach(b => b.onclick = () => {
      const k = b.getAttribute('data-k'); const was = store.vocab[k] && store.vocab[k].known;
      store.vocab[k] = { known: !was, at: Date.now() }; save();
      b.classList.toggle('on', !was); b.textContent = !was ? '✅' : '☐';
    });
    list.querySelectorAll('.vrow .spk').forEach(b => { b.onclick = ev => { ev.stopPropagation(); speak(b.getAttribute('data-say'), b); }; });
  }
  bindRows();
}
let vocabKeys = null;
document.addEventListener('keydown', e => { if (vocabKeys) vocabKeys(e); });

/* ================== TAB TIẾN ĐỘ ================== */
function renderStats() {
  const list = $('list');
  const qres = store.qres;
  const answered = Object.keys(qres).filter(u => BY_UID[u]);
  const lastOk = answered.filter(u => qres[u].last).length;
  const nBook = bookUids().length;
  const known = GLOSS.filter(g => store.vocab[g.en] && store.vocab[g.en].known).length;
  const hist = store.history.slice().sort((a, b) => b.at - a.at);

  let h = '<div class="panel"><h3>Tổng quan</h3><div class="kpis">'
    + '<div class="kpi"><div class="v">' + answered.length + '/' + POOL.length + '</div><div class="l">Câu đã từng làm</div></div>'
    + '<div class="kpi"><div class="v" style="color:' + pctColor(answered.length ? lastOk / answered.length * 100 : 0) + '">' + (answered.length ? Math.round(lastOk / answered.length * 100) : 0) + '%</div><div class="l">Đúng ở lần làm gần nhất</div></div>'
    + '<div class="kpi"><div class="v" style="color:var(--bad)">' + nBook + '</div><div class="l">Câu trong sổ câu sai</div></div>'
    + '<div class="kpi"><div class="v">' + known + '/' + GLOSS.length + '</div><div class="l">Thuật ngữ đã thuộc</div></div>'
    + '</div></div>';

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

  const br = {};
  answered.forEach(u => { const q = BY_UID[u]; const r = br[q.ch] || (br[q.ch] = [0, 0]); r[1]++; if (qres[u].last) r[0]++; });
  h += '<div class="panel"><h3>📚 Độ chính xác theo chương</h3><div class="sub">Tính trên các câu bạn đã làm (lấy kết quả lần gần nhất). Chương màu đỏ là chương nên ôn lại trong 📖 Giáo trình.</div>'
     + (answered.length ? chapterRowsHTML(br) : '<div class="empty">Chưa có dữ liệu — hãy làm thử một đề.</div>') + '</div>';

  // các mục syllabus yếu nhất
  const weak = Object.keys(SYL.units).map(lo => ({ lo, s: unitStats(lo) })).filter(x => x.s.bad > 0)
    .sort((a, b) => (b.s.bad / (b.s.ok + b.s.bad)) - (a.s.bad / (a.s.ok + a.s.bad)) || b.s.bad - a.s.bad).slice(0, 6);
  if (weak.length) {
    h += '<div class="panel"><h3>🩹 Mục syllabus nên ôn lại</h3><div class="sub">Các mục có câu làm sai ở lần gần nhất</div>'
       + weak.map(x => { const u = SYL.units[x.lo]; return '<div class="weakrow"><div><b>' + esc(u.sec) + ' ' + esc(u.title) + '</b><span>' + esc(u.titleVi) + ' · ✗' + x.s.bad + ' / ✓' + x.s.ok + '</span></div><button class="th-btn sm" data-go="' + esc(x.lo) + '">Ôn mục này</button></div>'; }).join('')
       + '</div>';
  }

  h += '<div class="panel"><h3>🕘 Lịch sử nộp bài</h3>';
  if (!hist.length) h += '<div class="empty">Chưa có lần nộp bài nào.</div>';
  else {
    h += '<div class="histwrap"><table class="hist"><tr><th>Thời gian</th><th>Bộ đề</th><th>Điểm</th><th>Kết quả</th><th>Thời gian làm</th></tr>';
    hist.forEach(x => {
      h += '<tr><td>' + fmtDate(x.at) + '</td><td>' + esc(x.tab) + (x.mode === 'exam' ? ' 📕' : '') + '</td><td><b>' + x.ok + '/' + x.total + '</b> (' + x.pct + '%)</td>'
         + '<td class="' + (x.pass ? 'ok' : 'bad') + '">' + (x.pass ? 'ĐẠT' : 'Chưa đạt') + '</td><td>' + fmt(x.used) + '</td></tr>';
    });
    h += '</table></div>';
  }
  h += '<div class="actions"><button class="btn danger" id="btnWipe">🗑 Xóa toàn bộ dữ liệu ôn tập</button></div></div>';
  list.innerHTML = h;
  bindTheory(list);
  $('btnWipe').onclick = () => {
    if (!confirm('Xóa toàn bộ bài làm, lịch sử điểm, sổ câu sai và tiến độ từ vựng trên trình duyệt này? Không thể hoàn tác.')) return;
    store = blankStore(); store.lastTab = 'stats';
    wrongSnapshot = null;
    save(true); mount();
  };
}

/* ================== GIAO DIỆN SÁNG / TỐI ================== */
const THEMES = [
  { id: 'auto',  icon: '🌓', label: 'Theo hệ thống' },
  { id: 'light', icon: '☀️', label: 'Sáng' },
  { id: 'dark',  icon: '🌙', label: 'Tối' }
];
const darkMQ = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
let themePref = 'auto';
try { themePref = localStorage.getItem('istqb-theme') || 'auto'; } catch (e) { /* ignore */ }
function applyTheme() {
  const dark = themePref === 'dark' || (themePref === 'auto' && darkMQ && darkMQ.matches);
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  const t = THEMES.find(x => x.id === themePref) || THEMES[0];
  const b = $('btnTheme');
  b.innerHTML = t.icon + '<span>' + t.label + '</span>';
  b.title = 'Giao diện: ' + t.label + ' — bấm để đổi';
}
$('btnTheme').onclick = () => {
  const i = THEMES.findIndex(x => x.id === themePref);
  themePref = THEMES[(i + 1) % THEMES.length].id;
  try { localStorage.setItem('istqb-theme', themePref); } catch (e) { /* ignore */ }
  applyTheme();
};
if (darkMQ) {
  const onChange = () => { if (themePref === 'auto') applyTheme(); };
  if (darkMQ.addEventListener) darkMQ.addEventListener('change', onChange); else if (darkMQ.addListener) darkMQ.addListener(onChange);
}
applyTheme();

/* ================== KHỞI ĐỘNG ================== */
if (cur.kind === 'exam') filter = { from: 0, to: cur.qs.length - 1 };
mount();
})();
