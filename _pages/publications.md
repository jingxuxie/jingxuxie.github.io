---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if true %}
  You can also find my articles on <u><a href="https://scholar.google.com/citations?user=F6EaW9AAAAAJ&hl=en">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
