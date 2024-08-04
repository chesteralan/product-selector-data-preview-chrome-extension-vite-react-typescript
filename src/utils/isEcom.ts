export const isEcom = (window: Window): boolean => {
  const sites = [
    "dv7i8zlyxu5mq",
    "dbvmqh179hco0",
    "d3iawv6dyp8w0s",
    "d2i2nn6f5lz88d",
    "d196iyluqjp09j",
    "d2y860az0ofxw6",
    "d3tx5dv4mhtrho",
    "dppc82ky0c6od",
    "d4lmwr380tqt4",
    "d16jmqlegkoy3o",
    "d1n5p4wmmjq26v",
  ];

  const domains = [
    "thepetlabco.com",
    "testpetlabco.com",
    "thepetlabco.ca",
    "thepetlabco.de",
    "petlabco.co.uk",
    "www.petlabco.co.uk",
  ];

  const isEcom = domains.reduce((acc, domain) => {
    return acc ? true : window.location.hostname === domain;
  }, false);
  if (isEcom) return true;
  return sites.some((site) => window.location.hostname.includes(site));
};

export const isEcomPdp = (window: Window): boolean => {
  return isEcom(window) && window.location.pathname.includes("/products/");
};

export const isCollectionPage = (window: Window): boolean => {
  return isEcom(window) && window.location.pathname.includes("collections");
};

export const isCartPage = (window: Window): boolean => {
  return isEcom(window) && window.location.pathname.includes("cart");
};

export const isHomePage = (window: Window): boolean => {
  return isEcom(window) && window.location.pathname === "/";
};
