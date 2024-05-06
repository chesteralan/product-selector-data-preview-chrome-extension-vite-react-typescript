export const isEcom = (window: Window): boolean => {
  const sites = [
    "thepetlabco.com",
    "thepetlabco.ca",
    "thepetlabco.de",
    "petlabco.co.uk",
  ];
  return sites.some((site) => window.location.hostname.includes(site));
};

export const isCollectionPage = (window: Window): boolean => {
  return isEcom(window) && window.location.pathname.includes("collections");
};

export const isCartPage = (window: Window): boolean => {
  return isEcom(window) && window.location.pathname.includes("cart");
};
