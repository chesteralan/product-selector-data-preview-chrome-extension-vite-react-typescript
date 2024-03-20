export const isPresell = (window: Window): boolean => {
  const sites = ["promo.", "campaign.", "campaigns.", "d2e88n5gsw7jf3."];
  return sites.some((site) => window.location.hostname.includes(site));
};
