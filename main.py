from evaluate_text import evaluate_text
import os
from pptx import Presentation
from pptx.enum.shapes import MSO_SHAPE_TYPE
from process_images import process_for_all
from utils import Feedback, is_image, get_image, write_image

def run(filename):
    p = Presentation(filename)
    fbs = []
    for i, slide in enumerate(p.slides):
        fb = Feedback(i)
        evaluate_text(slide, fb)
        for j, shape in enumerate(slide.shapes):
            if is_image(shape):
                image = get_image(shape)
                if image is not None:
                    write_image(image, f"{i}_{j}.jpg")
                    process_for_all(f"{i}_{j}.jpg", fb)
                    os.remove(f"{i}_{j}.jpg")
        fbs.append(fb)
    return [fb.format_json() for fb in fbs]
