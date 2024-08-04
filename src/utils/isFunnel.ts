export const isFunnel = (window: Window): boolean => {
  const sites = [
    "offers.",
    "offer.",
    "d2fccznrf67q1x.", // US - Funnel - Staging
    "d36g79b46uppe6.", // CA - Funnel - Staging
    "dnjeaxbg4ngal.", // DE - Funnel - Staging
    "d9tzezqsks4u4.", // UK - Funnel - Staging
    "d3pz86vrpdrj44.", // US - Funnel - Prod
    "d1p476xwmo9z3n.", // CA - Funnel - Prod
    "d2e9azox4qv4wr.", // DE - Funnel - Prod
    "d16vyavuwr8axd.", // UK - Funnel - Prod
    "d33aphos1wu9em.", // US - Funnel - Staging
    "dg03dksbkti20.", // DE - Funnel - Staging
    "d1q0uaxpbrwg8o.", // UK - Funnel - Staging
    "d22h9tz4bdw9z6.", // CA - Funnel - Staging
    "d3f5krr9rhfb9z.", // DE - Funnel - Prod
    "d2prp0eqkjwx5o.", // CA - Funnel - Prod
    "d23pz86mt516sg.", // UK - Funnel - Prod
    "d3svz539xdipm4.", // US - Funnel - Prod
  ];
  return sites.some((site) => window.location.hostname.includes(site));
};
