export const isEcom = (window: Window): boolean => {
  const sites = [
    "thepetlabco.com",
    "thepetlabco.ca",
    "thepetlabco.de",
    "petlabco.co.uk",
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
  ];
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
