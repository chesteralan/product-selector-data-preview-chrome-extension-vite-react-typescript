import { REGION_CA, REGION_DE, REGION_UK, REGION_US } from "./region";

type Sites = { [hostname: string]: string };

export const SITES: Sites = {
  // next.js funnels
  "offers.thepetlabco.com": REGION_US,
  "offers.thepetlabco.ca": REGION_CA,
  "offers.thepetlabco.de": REGION_DE,
  "offers.petlabco.co.uk": REGION_UK,
  "d2fccznrf67q1x.amplifyapp.com": REGION_US,
  "d36g79b46uppe6.amplifyapp.com": REGION_CA,
  "d9tzezqsks4u4.amplifyapp.com": REGION_UK,

  // funnels
  "offer.thepetlabco.com": REGION_US,
  "offer.thepetlabco.ca": REGION_CA,
  "offer.thepetlabco.de": REGION_DE,
  "offer.petlabco.co.uk": REGION_UK,
  "prod-builder-gatsby-funnel.netlify.app": REGION_US,
  "staging-builder-gatsby-funnel.netlify.app": REGION_US,
  "petlab-germany-funnels.netlify.app": REGION_DE,
  "uk-gatsby-funnels.netlify.app": REGION_UK,
  "canada-funnels-production.netlify.app": REGION_CA,

  // upsells
  "ups.thepetlabco.com": REGION_US,
  "ups.thepetlabco.ca": REGION_CA,
  "ups.thepetlabco.de": REGION_DE,
  "ups.petlabco.co.uk": REGION_UK,
  "staging-upsell.netlify.app": REGION_US,
  "us-gatsby-upsell.netlify.app": REGION_US,
  "uk-gatsby-upsell.netlify.app": REGION_UK,
  "ca-gatsby-upsell.netlify.app": REGION_CA,
  "de-gatsby-upsell.netlify.app": REGION_DE,

  // aws subdomain
  // US
  d1575ahw37jmuw: REGION_US,
  d68ffe5xeochd: REGION_US,
  d2i2nn6f5lz88d: REGION_US,
  d16jmqlegkoy3o: REGION_US,
  d16gnk4knv9rho: REGION_US,
  d3pz86vrpdrj44: REGION_US,
  d1jjlvgph1us9p: REGION_US,
  d2fccznrf67q1x: REGION_US,
  dppc82ky0c6od: REGION_US,
  dbvmqh179hco0: REGION_US,
  d3svz539xdipm4: REGION_US,
  d33aphos1wu9em: REGION_US,

  // CA
  d1s5kv4rl7p335: REGION_CA,
  d1p476xwmo9z3n: REGION_CA,
  d36g79b46uppe6: REGION_CA,
  d4lmwr380tqt4: REGION_CA,
  d2prp0eqkjwx5o: REGION_CA,
  d22h9tz4bdw9z6: REGION_CA,

  // UK
  dsasi8jwqu40u: REGION_UK,
  d16vyavuwr8axd: REGION_UK,
  d9tzezqsks4u4: REGION_UK,
  d1q0uaxpbrwg8o: REGION_UK,
  d196iyluqjp09j: REGION_UK,
  d3iawv6dyp8w0s: REGION_UK,
  d23pz86mt516sg: REGION_UK,

  // DE
  dv7i8zlyxu5mq: REGION_DE,
  d3tx5dv4mhtrho: REGION_DE,
  d2e9azox4qv4wr: REGION_DE,
};
