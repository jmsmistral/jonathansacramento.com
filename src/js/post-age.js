// Used at build time and in the browser so static pages have a useful fallback.
export function postAgeYears(published, now = new Date()) {
  const today = now.toISOString().slice(0, 10);
  const years = Number(today.slice(0, 4)) - Number(published.slice(0, 4))
    - (today.slice(5) < published.slice(5) ? 1 : 0);
  return years >= 1 ? years : null;
}

export function postAgeText(years) {
  return `Published ${years} ${years === 1 ? 'year' : 'years'} ago.`;
}

if (typeof document !== 'undefined') {
  for (const note of document.querySelectorAll('[data-post-date]')) {
    const years = postAgeYears(note.dataset.postDate);
    note.hidden = years === null;
    note.querySelector('[data-post-age]').textContent = years === null ? '' : postAgeText(years);
  }
}
