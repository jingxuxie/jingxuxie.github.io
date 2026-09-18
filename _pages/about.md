---
layout: portfolio
permalink: /
title: "Machine Learning & Experimental Systems"
excerpt: "Jingxu Xie — research in AI agents, evaluation, and experimental physical systems, with current projects in robot learning."
redirect_from:
  - /about/
  - /about.html
---
<section class="profile" aria-labelledby="profile-name">
  <div class="profile-text">
    <p class="eyebrow">Machine learning &amp; experimental systems</p>
    <h1 id="profile-name">Jingxu Xie</h1>
    <p>I am a quantitative researcher at Voleon. I completed my PhD at UC Berkeley, where I worked with <a href="https://physics.berkeley.edu/research-faculty/ultrafast-nano-optics-group">Prof. Feng Wang</a> on experimental condensed-matter physics.</p>
    <p>My research spans machine learning and automated experimental systems, with recent work on AI agents, evaluation, and scaling laws. I am currently collaborating with Prof. Dawn Song on <strong>Agents’ Last Exam</strong> as a core contributor and domain lead.</p>
    <p>I am also exploring robot learning and sim-to-real transfer through hands-on manipulation experiments. I am interested in how learning systems generalize beyond their training data and interact with the physical world.</p>
    <div class="profile-links" aria-label="Contact and profiles">
      <a href="mailto:jingxuxie@berkeley.edu">Email</a>
      <a href="https://scholar.google.com/citations?user=F6EaW9AAAAAJ&amp;hl=en">Google Scholar</a>
      <a href="https://github.com/jingxuxie">GitHub</a>
      <a href="https://www.linkedin.com/in/jingxuxie/">LinkedIn</a>
    </div>
  </div>
  <img class="portrait" src="{{ '/images/2.jpg' | relative_url }}" alt="Jingxu Xie" width="190" height="228" fetchpriority="high">
</section>
<section class="home-work" aria-labelledby="selected-heading">
  <div class="section-heading">
    <h2 id="selected-heading">Selected work</h2>
    <a href="{{ '/research/' | relative_url }}">Explore research <span aria-hidden="true">→</span></a>
  </div>
  {% assign featured = site.data.research | where: 'featured', true %}
  {% for work in featured %}{% include research-row.html work=work %}{% endfor %}
</section>
