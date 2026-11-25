#!/usr/bin/env python3
"""Sinh các file dữ liệu trong data/ cho app ôn luyện ISTQB.

Cách dùng (chạy từ thư mục gốc của repo):
    python3 tools/build_data.py

- data/exam-a.js  : tách từ index.html cũ (chỉ cần chạy 1 lần, nếu có tools/legacy-index.html)
- data/exam-b/c/d.js : sinh từ tools/source/exam-{b,c,d}.json (JSON đã dịch)
- data/lo-map.js  : learning objective (FL-x.x.x) + K-level + đáp án chuẩn của từng câu,
                    sinh từ tools/source/lo-map.json
"""
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "tools" / "source"
DATA = ROOT / "data"

HEADER = "/* File được sinh tự động bởi tools/build_data.py — sửa dữ liệu nguồn rồi chạy lại script. */\n"
NS = "window.ISTQB = window.ISTQB || { exams: {}, lo: {} };\n"


def write_json_exam(letter: str) -> None:
    src = SRC / f"exam-{letter.lower()}.json"
    qs = json.loads(src.read_text(encoding="utf-8"))
    body = json.dumps(qs, ensure_ascii=False, indent=1)
    out = DATA / f"exam-{letter.lower()}.js"
    out.write_text(HEADER + NS + f"window.ISTQB.exams.{letter} = {{ main: {body} }};\n", encoding="utf-8")
    print(f"✓ {out.relative_to(ROOT)} ({len(qs)} câu)")


def write_lo_map() -> None:
    lo = json.loads((SRC / "lo-map.json").read_text(encoding="utf-8"))
    out = DATA / "lo-map.js"
    out.write_text(HEADER + NS + "window.ISTQB.lo = " + json.dumps(lo, ensure_ascii=False) + ";\n", encoding="utf-8")
    print(f"✓ {out.relative_to(ROOT)}")


def main() -> int:
    DATA.mkdir(exist_ok=True)
    for letter in "BCD":
        if (SRC / f"exam-{letter.lower()}.json").exists():
            write_json_exam(letter)
    if (SRC / "lo-map.json").exists():
        write_lo_map()
    return 0


if __name__ == "__main__":
    sys.exit(main())
