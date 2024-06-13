export const replaceDomain = (url: string, domain: string): string => {
  const newUrl = new URL(url);
  const newUpsell = new URL(domain);
  newUrl.hostname = newUpsell.hostname;
  return newUrl.href;
};

export const appendAfterDomain = (url: string, appendStr: string): string => {
  if (!url) return url;
  const newUrl = new URL(url);
  newUrl.pathname = appendStr + newUrl.pathname;
  return newUrl.href;
};
