export const isFunnel = (window: Window): boolean => {
  const sites = [
    "offers.thepetlabco.com",
    "offers.thepetlabco.ca",
    "offers.thepetlabco.de",
    "offers.petlabco.co.uk",
    "offer.thepetlabco.com",
    "offer.thepetlabco.ca",
    "offer.thepetlabco.de",
    "offer.petlabco.co.uk",
    "d2fccznrf67q1x.amplifyapp.com",
  ];
  return sites.includes(window.location.hostname);
};
