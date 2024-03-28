export const isProd = (window: Window): boolean => {
  const sites = [
    "offers.",
    "offer.",
    "d3pz86vrpdrj44.", // US - Funnel - Prod
    "d1p476xwmo9z3n.", // CA - Funnel - Prod
    "d2e9azox4qv4wr.", // DE - Funnel - Prod
    "d16vyavuwr8axd.", // UK - Funnel - Prod
    "d2i2nn6f5lz88d.", // US - Ecom - Prod
    "d3iawv6dyp8w0s.", // UK - Ecom - Prod
  ];
  return sites.some((site) => window.location.hostname.includes(site));
};
