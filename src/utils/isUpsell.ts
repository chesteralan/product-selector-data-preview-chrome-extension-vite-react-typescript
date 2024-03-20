export const isUpsell = (window: Window): boolean => {
  const sites = ["ups.", "up.", "staging-upsell.netlify.app"];
  return (
    sites.some((site) => window.location.hostname.includes(site)) ||
    window.location.hostname.includes("upsell")
  );
};
