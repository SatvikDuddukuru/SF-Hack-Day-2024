import numpy as np
from PIL import Image, ImageOps
from utils import get_image_uri

def process_image(img, cb_type):
    img_arr = np.array(img)
    r, g, b = img_arr[:, :, 0], img_arr[:, :, 1], img_arr[:, :, 2]
    r_flat, g_flat, b_flat = r.flatten(), g.flatten(), b.flatten()
    rgb_vector = np.vstack((r_flat, g_flat, b_flat))
    rgb_to_lms_matrix = np.array(
        [
            [17.8824, 43.5161, 4.11935],
            [3.45565, 27.1554, 3.86714],
            [0.0299566, 0.184309, 1.46709]
        ]
    )
    lms_vector = np.matmul(rgb_to_lms_matrix, rgb_vector)
    protanopia_matrix = np.array(
        [
            [0, 2.02344, -2.52581],
            [0, 1, 0],
            [0, 0, 1]
        ]
    )
    lms_protanopia_vector = np.matmul(protanopia_matrix, lms_vector)
    duteranopia_matrix = np.array(
        [
            [1, 0, 0],
            [0.49421, 0, 1.24827],
            [0, 0, 1]
        ]
    )
    lms_duteranopia_vector = np.matmul(duteranopia_matrix, lms_vector)
    tritanopia_matrix = np.array(
        [
            [1, 0, 0],
            [0, 1, 0],
            [-0.395913, 0.801109, 0]
        ]
    )
    lms_tritanopia_vector = np.matmul(tritanopia_matrix, lms_vector)
    lms_to_rgb_matrix = np.array(
        [
            [0.080944479, -0.130504409, 0.116721066],
            [0.113614708, -0.0102485335, 0.0540193266],
            [-0.000365296938, -0.00412161469, 0.693511405]
        ]
    )
    rgb_protanopia_vector = np.matmul(lms_to_rgb_matrix, lms_protanopia_vector)
    rgb_duteranopia_vector = np.matmul(lms_to_rgb_matrix, lms_duteranopia_vector)
    rgb_tritanopia_vector = np.matmul(lms_to_rgb_matrix, lms_tritanopia_vector)
    d_protanopia = rgb_vector - rgb_protanopia_vector
    d_duteranopia = rgb_vector - rgb_duteranopia_vector
    d_tritanopia = rgb_vector - rgb_tritanopia_vector
    protanopia_shift_matrix = np.array(
        [
            [0, 0, 0],
            [0.7, 1, 0],
            [0.7, 0, 1]
        ]
    )
    protanopia_shift = np.matmul(protanopia_shift_matrix, d_protanopia)
    duteranopia_shift_matrix = np.array(
        [
            [1, 0.7, 0],
            [0, 0, 0],
            [0, 0.7, 1]
        ]
    )
    duteranopia_shift = np.matmul(duteranopia_shift_matrix, d_duteranopia)
    tritanopia_shift_matrix = np.array(
        [
            [1, 0, 0.7],
            [0, 1, 0.7],
            [0, 0, 0]
        ]
    )
    tritanopia_shift = np.matmul(tritanopia_shift_matrix, d_tritanopia)
    shift_scale = 1 / 50
    rgb_processed_for_protanopia = rgb_vector + protanopia_shift * shift_scale
    rgb_processed_for_duteranopia = rgb_vector + duteranopia_shift * shift_scale
    rgb_processed_for_tritanopia = rgb_vector + tritanopia_shift * shift_scale
    for i in range(3):
        img_arr[:, :, i] = [rgb_processed_for_protanopia, rgb_processed_for_duteranopia, rgb_processed_for_tritanopia][cb_type][i].reshape((img_arr.shape[0], img_arr.shape[1]))
    return Image.fromarray(img_arr)

def process_for_all(filename, fb):
    img = Image.open(filename)
    process_image(process_image(process_image(img, 0), 1), 2).convert("RGB").save(filename)
    fb.add_image(get_image_uri(filename))
