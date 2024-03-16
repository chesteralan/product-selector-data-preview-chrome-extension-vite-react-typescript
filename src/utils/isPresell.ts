export const isPresell = (window: Window): boolean => {
  const sites = [
    "promo.thepetlabco.com",
    "campaigns.thepetlabco.com",
    "campaigns.thepetlabco.ca",
    "campaigns.thepetlabco.de",
    "campaigns.petlabco.co.uk",
    "d2e88n5gsw7jf3.amplifyapp.com",
  ];
  return sites.includes(window.location.hostname);
};
