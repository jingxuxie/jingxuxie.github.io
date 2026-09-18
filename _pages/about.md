---
layout: portfolio
permalink: /
title: "Home"
excerpt: "Jingxu Xie — research in AI agents, evaluation, and experimental physical systems, with current projects in robot learning."
redirect_from:
  - /about/
  - /about.html
---
<section class="profile" aria-labelledby="profile-name">
  <div class="profile-text">
    <h1 id="profile-name">Jingxu Xie</h1>
    <p>I am a quantitative researcher at Voleon. I completed my PhD at UC Berkeley, where I worked with <a href="https://physics.berkeley.edu/research-faculty/ultrafast-nano-optics-group">Prof. Feng Wang</a> on experimental condensed-matter physics.</p>
    <p>My research spans machine learning and automated experimental systems, with recent work on AI agents, evaluation, and scaling laws. I am currently collaborating with Prof. Dawn Song on <strong>Agents’ Last Exam (ALE v2)</strong> as a core contributor.</p>
    <p>I am also exploring robot learning and sim-to-real transfer through hands-on manipulation experiments. I am interested in how learning systems generalize beyond their training data and interact with the physical world.</p>
    <div class="profile-links" aria-label="Contact and profiles">
      <a href="mailto:jingxuxie@berkeley.edu">Email</a>
      <a href="https://scholar.google.com/citations?user=F6EaW9AAAAAJ&amp;hl=en">Google Scholar</a>
      <a href="https://www.linkedin.com/in/jingxuxie/">LinkedIn</a>
    </div>
  </div>
  <img class="portrait" src="{{ '/images/2.jpg' | relative_url }}" alt="Jingxu Xie" width="190" height="228" fetchpriority="high">
</section>
<section class="home-work" id="selected-work" aria-labelledby="selected-heading">
  <div class="section-heading selected-heading">
    <h2 id="selected-heading">Selected work</h2>
  </div>
  <section class="research-section" aria-labelledby="ml-heading">
    <h3 class="category-heading" id="ml-heading">Machine learning &amp; robotics</h3>
    {% assign ml = site.data.research | where: 'category', 'ml' %}
    {% for work in ml %}{% include research-row.html work=work heading=4 %}{% endfor %}
  </section>
  <section class="research-section workshop-section" aria-labelledby="workshop-heading">
    <h3 class="category-heading" id="workshop-heading">Selected workshop papers</h3>
    {% assign workshops = site.data.research | where: 'category', 'workshop' %}
    {% for work in workshops %}{% include research-row.html work=work heading=4 %}{% endfor %}
  </section>
  <section class="research-section" aria-labelledby="physics-heading">
    <div class="section-heading category-heading"><h3 id="physics-heading">Experimental Quantum Physics</h3><p>* Equal contribution</p></div>
    {% assign physics = site.data.research | where: 'category', 'physics' %}
    {% for work in physics %}{% include research-row.html work=work heading=4 %}{% endfor %}
  </section>
</section>
