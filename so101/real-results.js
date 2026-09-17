// Editable real-arm results. This file is not overwritten by plot rebuilds.
// left/right = successful placements; left_trials/right_trials = attempts.
// Use integer counts, not percentages. Leave unscored values as null.
// Evaluation size: 16 attempts per side, 32 total. Success counts remain pending.
// Example only: left: 12 with left_trials: 16 displays 75%.
// sim200 = 200 total episodes; sim400 = 400 per side, 800 total episodes.
window.REAL_RESULTS = {
  "act": {
    "real_left08":  {"left": 12, "left_trials": 16, "right": 3, "right_trials": 16},
    "real_left32":  {"left": 13, "left_trials": 16, "right": 7, "right_trials": 16},
    "real_left72":  {"left": 13, "left_trials": 16, "right": 14, "right_trials": 16},
    "mixed_left08": {"left": 13, "left_trials": 16, "right": 12, "right_trials": 16},
    "mixed_left32": {"left": 12, "left_trials": 16, "right": 14, "right_trials": 16},
    "mixed_left72": {"left": 14, "left_trials": 16, "right": 13, "right_trials": 16},
    "mixed_left00": {"left": 0, "left_trials": 16, "right": 14, "right_trials": 16},
    "sim_left08":   {"left": null, "left_trials": 16, "right": null, "right_trials": 16},
    "sim_left72":   {"left": null, "left_trials": 16, "right": null, "right_trials": 16},
    "sim200":       {"left": 1, "left_trials": 16, "right": 0, "right_trials": 16},
    "sim400":       {"left": 1, "left_trials": 16, "right": 2, "right_trials": 16}
  },
  "pi05": {
    "mixed_left00": {"left": 1, "left_trials": 16, "right": 13, "right_trials": 16},
    "real_left08":  {"left": 10, "left_trials": 16, "right": 5, "right_trials": 16},
    "real_left32":  {"left": 11, "left_trials": 16, "right": 9, "right_trials": 16},
    "real_left72":  {"left": 13, "left_trials": 16, "right": 13, "right_trials": 16},
    "mixed_left08": {"left": 12, "left_trials": 16, "right": 13, "right_trials": 16},
    "mixed_left32": {"left": 11, "left_trials": 16, "right": 12, "right_trials": 16},
    "mixed_left72": {"left": 14, "left_trials": 16, "right": 15, "right_trials": 16},
    "sim_left72":   {"left": null, "left_trials": 16, "right": null, "right_trials": 16},
    "sim200":       {"left": 1, "left_trials": 16, "right": 2, "right_trials": 16},
    "sim400":       {"left": 3, "left_trials": 16, "right": 1, "right_trials": 16}
  }
};
