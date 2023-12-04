import { REGION_CA, REGION_DE, REGION_UK, REGION_US } from "./region"

type Sites = { [hostname:string]: string }


export const SITES:Sites = {
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

    // cloudfront subdomains
    "d1575ahw37jmuw": REGION_US,
    "d68ffe5xeochd": REGION_US,
    "d16jmqlegkoy3o": REGION_US,
    "d16gnk4knv9rho": REGION_US,
    "d1jjlvgph1us9p": REGION_US,
    "d1s5kv4rl7p335": REGION_CA,
    "dsasi8jwqu40u": REGION_UK,

}