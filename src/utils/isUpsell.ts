export const isUpsell = (window: Window): boolean => {
  const sites = [
    "ups.thepetlabco.com",
    "ups.thepetlabco.ca",
    "ups.thepetlabco.de",
    "ups.petlabco.co.uk",
    "staging-upsell.netlify.app",
  ];
  return (
    sites.includes(window.location.hostname) ||
    window.location.hostname.includes("upsell")
  );
};
