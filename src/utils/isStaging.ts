export const isStaging = (window: Window): boolean => {
  const sites = [
    "d2fccznrf67q1x.", // US - Funnel - Staging
    "d36g79b46uppe6.", // CA - Funnel - Staging
    "dnjeaxbg4ngal.", // DE - Funnel - Staging
    "d9tzezqsks4u4.", // UK - Funnel - Staging
    "d2y860az0ofxw6.", // US - Ecom - Staging
  ];
  return sites.some((site) => window.location.hostname.includes(site));
};
