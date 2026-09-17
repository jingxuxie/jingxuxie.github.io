window.REPORT_DATA = {
  "paired": [
    {
      "name": "real_left08",
      "left": 1,
      "right": 1
    },
    {
      "name": "real_left32",
      "left": 0,
      "right": 1
    },
    {
      "name": "real_left72",
      "left": 2,
      "right": 1
    },
    {
      "name": "mixed_left08",
      "left": 12,
      "right": 15
    },
    {
      "name": "mixed_left32",
      "left": 15,
      "right": 16
    },
    {
      "name": "mixed_left72",
      "left": 14,
      "right": 16
    },
    {"name": "mixed_left00", "left": 13, "right": 16, "n": 16},
    {"name": "sim200", "left": 16, "right": 16, "n": 16},
    {"name": "sim400", "left": 16, "right": 16, "n": 16}
  ],
  "pi05Paired": [
    {"name": "real_left08", "left": 0, "right": 1, "n": 16},
    {"name": "real_left32", "left": 0, "right": 0, "n": 16},
    {"name": "real_left72", "left": 1, "right": 1, "n": 16},
    {"name": "mixed_left08", "left": 15, "right": 16, "n": 16},
    {"name": "mixed_left32", "left": 14, "right": 15, "n": 16},
    {"name": "mixed_left72", "left": 16, "right": 16, "n": 16},
    {"name": "mixed_left00", "left": 15, "right": 16, "n": 16},
    {"name": "sim200", "left": 16, "right": 16, "n": 16},
    {"name": "sim400", "left": 16, "right": 16, "n": 16}
  ],
  "simOnly": [
    {
      "name": "sim_left08",
      "set": "Held-out layouts",
      "left": 4,
      "right": 8,
      "n": 8
    },
    {
      "name": "sim_left72",
      "set": "Held-out layouts",
      "left": 6,
      "right": 8,
      "n": 8
    },
    {
      "name": "sim400",
      "set": "Fresh calibrated cameras",
      "left": 32,
      "right": 32,
      "n": 32
    },
    {
      "name": "sim400",
      "set": "Same layouts, randomized cameras",
      "left": 32,
      "right": 31,
      "n": 32
    }
  ],
  "sources": [
    {
      "href": "evidence/results.json",
      "title": "Counted results and benchmark scope"
    },
    {
      "href": "evidence/methods.md",
      "title": "Methods, limitations, and source index"
    },
    {
      "href": "evidence/media.json",
      "title": "Media provenance and recording timing"
    }
  ]
};
