export function externalLinkAttributes(href, siteUrl) {
  let url;
  try {
    url = new URL(href, siteUrl);
  } catch {
    return '';
  }
  if (!['http:', 'https:'].includes(url.protocol)) return '';
  if (siteUrl && url.origin === new URL(siteUrl).origin) return '';
  return ' target="_blank" rel="noopener noreferrer"';
}
