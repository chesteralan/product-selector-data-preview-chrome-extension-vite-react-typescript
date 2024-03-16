export const isEcom = (window: Window): boolean => {
  const sites = [
    "thepetlabco.com",
    "thepetlabco.ca",
    "thepetlabco.de",
    "petlabco.co.uk",
  ];
  return sites.includes(window.location.hostname);
};

export const isCollectionPage = (window: Window): boolean => {
  return isEcom(window) && window.location.pathname.includes("collections");
};
