#!/usr/bin/env python3
"""Sinh các file dữ liệu trong data/ cho app ôn luyện ISTQB.

Cách dùng (chạy từ thư mục gốc của repo):
    python3 tools/build_data.py

- data/exam-a.js  : dữ liệu đề A (sửa trực tiếp file này)
- data/exam-b/c/d.js : sinh từ tools/source/exam-{b,c,d}.json (JSON đã dịch)
- data/lo-map.js  : learning objective (FL-x.x.x) + K-level + đáp án chuẩn của từng câu,
                    sinh từ tools/source/lo-map.json
- data/syllabus.js : lý thuyết theo LO + từ vựng, sinh từ tools/source/syllabus/ch1..ch6.json
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


def write_syllabus() -> None:
    files = sorted((SRC / "syllabus").glob("ch*.json"))
    if not files:
        return
    chapters, units, glossary, seen = [], {}, [], set()
    for f in files:
        d = json.loads(f.read_text(encoding="utf-8"))
        ch = d["chapter"]
        chapters.append(dict(ch, units=[u["lo"] for u in d["units"]]))
        for u in d["units"]:
            units[u["lo"]] = dict(u, ch=ch["id"])
        for g in d["glossary"]:
            key = g["en"].strip().lower()
            if key in seen:
                continue
            seen.add(key)
            glossary.append(dict(g, en=key, ch=ch["id"]))
    chapters.sort(key=lambda c: c["id"])
    payload = {"chapters": chapters, "units": units, "glossary": glossary}
    out = DATA / "syllabus.js"
    out.write_text(HEADER + NS + "window.ISTQB.syllabus = " + json.dumps(payload, ensure_ascii=False, indent=1) + ";\n",
                   encoding="utf-8")
    print(f"✓ {out.relative_to(ROOT)} ({len(units)} LO, {len(glossary)} thuật ngữ)")


def main() -> int:
    DATA.mkdir(exist_ok=True)
    for letter in "BCD":
        if (SRC / f"exam-{letter.lower()}.json").exists():
            write_json_exam(letter)
    if (SRC / "lo-map.json").exists():
        write_lo_map()
    write_syllabus()
    return 0


if __name__ == "__main__":
    sys.exit(main())
