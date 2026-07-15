#!/usr/bin/env python3
import os
from pathlib import Path

from PIL import Image, ImageDraw

REPO_ROOT = Path(__file__).resolve().parents[1]
ROOT = Path(os.environ.get('MPW_QA_OUT_DIR', str(REPO_ROOT / 'qa-output'))).expanduser().resolve()
BG = '#111111'
TEXT = '#ffffff'


def desktop_sheet():
    names = ['ueber-mich', 'produkte', 'galerie', 'videos', 'kontakt']
    labels = ['Über mich', 'Produkte', 'Galerie', 'Videos', 'Kontakt']
    panel_w, panel_h, title_h, gap = 720, 450, 34, 12
    canvas = Image.new('RGB', (panel_w, len(names) * (panel_h + title_h + gap)), BG)
    draw = ImageDraw.Draw(canvas)
    y = 0
    for name, label in zip(names, labels):
        draw.text((12, y + 8), label, fill=TEXT)
        y += title_h
        with Image.open(ROOT / f'desktop-{name}-1440x900.png') as source:
            image = source.convert('RGB').resize((panel_w, panel_h), Image.Resampling.LANCZOS)
        canvas.paste(image, (0, y))
        y += panel_h + gap
    output = ROOT / 'final-desktop-contact-sheet.png'
    canvas.save(output, optimize=True)
    return output


def mobile_sheet():
    names = ['ueber-mich', 'produkte', 'galerie', 'videos', 'kontakt']
    labels = ['Über mich', 'Produkte', 'Galerie', 'Videos', 'Kontakt']
    panel_w, panel_h, title_h, gap = 390, 844, 34, 12
    canvas = Image.new('RGB', (len(names) * (panel_w + gap), panel_h + title_h), BG)
    draw = ImageDraw.Draw(canvas)
    x = 0
    for name, label in zip(names, labels):
        draw.text((x + 12, 8), label, fill=TEXT)
        with Image.open(ROOT / f'mobile-{name}-390x844.png') as source:
            image = source.convert('RGB')
        canvas.paste(image, (x, title_h))
        x += panel_w + gap
    output = ROOT / 'final-mobile-contact-sheet.png'
    canvas.save(output, optimize=True)
    return output


if __name__ == '__main__':
    for path in (desktop_sheet(), mobile_sheet()):
        with Image.open(path) as image:
            print(f'{path}: {image.width}x{image.height}')
