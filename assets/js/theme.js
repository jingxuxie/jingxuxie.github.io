/* Apply the saved appearance before styles load to avoid a light-mode flash. */
(function () {
  'use strict';
  var key = 'jingxu-appearance';
  var media = window.matchMedia('(prefers-color-scheme: dark)');
  var preference = 'system';
  function readPreference() {
    try {
      var saved = localStorage.getItem(key);
      return saved === 'light' || saved === 'dark' ? saved : 'system';
    } catch (_) { return 'system'; }
  }
  function apply() {
    document.documentElement.dataset.theme = preference === 'system'
      ? (media.matches ? 'dark' : 'light') : preference;
  }
  preference = readPreference();
  apply();
  document.addEventListener('DOMContentLoaded', function () {
    var control = document.getElementById('appearance');
    if (!control) return;
    control.value = preference;
    control.parentElement.hidden = false;
    control.addEventListener('change', function () {
      preference = control.value;
      try {
        if (preference === 'system') localStorage.removeItem(key);
        else localStorage.setItem(key, preference);
      } catch (_) { /* The choice still works if browser storage is unavailable. */ }
      apply();
    });
    window.addEventListener('storage', function (event) {
      if (event.key === key || event.key === null) {
        preference = readPreference();
        control.value = preference;
        apply();
      }
    });
  });
  media.addEventListener('change', function () {
    if (preference === 'system') apply();
  });
}());
