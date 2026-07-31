import { useEffect } from 'react';

interface DocumentMetaOptions {
  titleIsComplete?: boolean;
  socialTitle?: string;
  type?: 'website' | 'article';
  url?: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  preserveExistingSocial?: boolean;
}

const siteName = 'NorthPole Solicitors';
const defaultSocialImage = 'https://www.northpolesolicitors.com/images/social-preview.png';

function setMetaAttribute(attribute: 'name' | 'property', key: string, content?: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!content) {
    meta?.remove();
    return;
  }

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
}

function setCanonicalUrl(url?: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!url) {
    link?.remove();
    return;
  }

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', url);
}

export function useDocumentMeta(title: string, description: string, options: DocumentMetaOptions = {}) {
  useEffect(() => {
    const documentTitle = options.titleIsComplete ? title : `${title} | ${siteName}`;
    const socialTitle = options.socialTitle || documentTitle;
    const type = options.type || 'website';
    const socialImage = options.image || defaultSocialImage;

    document.title = documentTitle;
    setMetaAttribute('name', 'description', description);
    setMetaAttribute('property', 'og:title', socialTitle);
    setMetaAttribute('property', 'og:description', description);
    setMetaAttribute('property', 'og:site_name', siteName);
    setMetaAttribute('property', 'og:type', type);
    if (!options.preserveExistingSocial || options.url) {
      setMetaAttribute('property', 'og:url', options.url);
      setCanonicalUrl(options.url);
    }
    if (!options.preserveExistingSocial || options.image) {
      setMetaAttribute('property', 'og:image', socialImage);
      setMetaAttribute('name', 'twitter:image', socialImage);
    }
    setMetaAttribute('name', 'twitter:card', 'summary_large_image');
    setMetaAttribute('name', 'twitter:title', socialTitle);
    setMetaAttribute('name', 'twitter:description', description);
    setMetaAttribute('property', 'article:published_time', options.publishedTime);
    setMetaAttribute('property', 'article:modified_time', options.modifiedTime);
    setMetaAttribute('property', 'article:author', options.author);
    setMetaAttribute('property', 'article:section', options.section);
  }, [title, description, options.titleIsComplete, options.socialTitle, options.type, options.url, options.image, options.publishedTime, options.modifiedTime, options.author, options.section, options.preserveExistingSocial]);
}
