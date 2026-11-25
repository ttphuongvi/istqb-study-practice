# 🧪 Ôn luyện ISTQB CTFL v4.0

Web app tĩnh (HTML/CSS/JS thuần, không cần build) để luyện 4 đề thi mẫu chính thức **ISTQB CTFL v4.0 — Sample Exam A, B, C, D**, có dịch tiếng Việt và giải thích vì sao đúng/sai.

## Tính năng
- **Đề A, B, C, D** (40 câu, 60 phút, đạt ≥ 26/40) + **Bonus A1–A26** của đề A
- Dịch tiếng Việt câu hỏi, đáp án, bối cảnh; giải thích chi tiết; 🔊 nghe phát âm English (US)
- Nhãn Learning Objective (FL-x.x.x · K-level) cho từng câu
- 📕 **Sổ câu sai**: tự gom câu làm sai ở mọi đề, luyện lại; làm đúng thì câu được gạch khỏi sổ
- 📚 **Theo chương**: luyện câu hỏi của cả 4 đề theo 6 chương syllabus
- 📈 **Tiến độ**: lịch sử điểm từng lần nộp, điểm cao nhất mỗi đề, độ chính xác theo chương
- Tự lưu tiến độ & đồng hồ vào `localStorage` (F5 không mất bài)

## Chạy trên máy
Cách 1 — mở thẳng file `index.html` bằng trình duyệt (double-click).

Cách 2 — chạy server local (khuyên dùng):
```bash
node tools/serve.js      # → http://localhost:8000
# hoặc
python3 -m http.server 8000
```

## Cấu trúc
```
index.html            # khung trang
css/style.css         # giao diện
js/app.js             # logic: tab, timer, chấm điểm, sổ câu sai, theo chương, tiến độ
data/exam-a.js        # dữ liệu đề A (+ bonus)
data/exam-b|c|d.js    # dữ liệu đề B, C, D (sinh từ tools/source/*.json)
data/lo-map.js        # LO, K-level, đáp án chuẩn của từng câu
images/               # sơ đồ minh hoạ
tools/source/*.json   # dữ liệu nguồn đề B, C, D (sửa ở đây)
tools/build_data.py   # sinh lại data/*.js từ tools/source
```

Sửa nội dung đề B/C/D: chỉnh `tools/source/exam-x.json` rồi chạy `python3 tools/build_data.py`.

## Deploy GitHub Pages
Repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch `main`, thư mục `/ (root)`.

---
Nội dung câu hỏi © International Software Testing Qualifications Board (ISTQB®). Dùng cho mục đích học tập cá nhân.
