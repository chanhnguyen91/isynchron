// Every outward link on the page lives here, so going live means editing one file.
export const site = {
  name: 'iSynchron',
  domain: 'isynchron.com',
  email: 'peternvch@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://x.com/',
  },
};

/** Section ids, in page order; their labels are `nav.<id>` in the dictionaries. */
export const nav = ['philosophy', 'vision', 'products', 'connect'];

/** A mailto link with the subject (and optional body) already filled in. */
export function mailto(subject, body = '') {
  const params = new URLSearchParams({ subject });
  if (body) params.set('body', body);
  // URLSearchParams writes spaces as "+", which mail apps show literally.
  return `mailto:${site.email}?${params.toString().replace(/\+/g, '%20')}`;
}
