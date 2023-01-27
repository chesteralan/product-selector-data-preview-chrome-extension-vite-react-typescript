type Sites = { [hostname:string]: string }
export const getSiteRegion = (window: Window): string => {
    const sites:Sites = {

        // funnels
        "offer.thepetlabco.com": `US`,
        "offer.thepetlabco.ca": `CA`,
        "offer.thepetlabco.de": `DE`,
        "offer.petlabco.co.uk": `UK`,
        "prod-builder-gatsby-funnel.netlify.app": `US`,
        "staging-builder-gatsby-funnel.netlify.app": `US`,
        "petlab-germany-funnels.netlify.app": `DE`,
        "uk-gatsby-funnels.netlify.app": `UK`,
        "canada-funnels-production.netlify.app": `CA`,

        // upsells
        "ups.thepetlabco.com": `US`,
        "ups.thepetlabco.ca": `CA`,
        "ups.thepetlabco.de": `DE`,
        "ups.petlabco.co.uk": `UK`,
        "staging-upsell.netlify.app": `US`,
        "us-gatsby-upsell.netlify.app": `US`,
        "uk-gatsby-upsell.netlify.app": `UK`,
        "ca-gatsby-upsell.netlify.app": `CA`,
        "de-gatsby-upsell.netlify.app": `DE`,
    }

    let hostname = window.location.hostname;

    if( hostname.includes('--') ) {
        hostname = hostname.split("--")[1]
    }

    return sites[hostname] || `US`;
}