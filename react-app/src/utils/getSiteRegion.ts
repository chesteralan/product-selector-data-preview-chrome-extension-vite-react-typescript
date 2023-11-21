type Sites = { [hostname:string]: string }
export const getSiteRegion = (window: Window, nextjs:boolean = false): string => {
    
    const nextjsSites:Sites = {
        // next.js funnels
        "offers.thepetlabco.com": `US`,
        "offers.thepetlabco.ca": `CA`,
        "offers.thepetlabco.de": `DE`,
        "offers.petlabco.co.uk": `UK`,
        "d2fccznrf67q1x.amplifyapp.com": `US`,
        "d36g79b46uppe6.amplifyapp.com": `CA`,
        "d9tzezqsks4u4.amplifyapp.com": `UK`,
    }

    const sites:Sites = {
        ...nextjsSites,

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

    let region = sites[hostname] || `US`;

    if(nextjs) {
        Object.keys(nextjsSites).forEach((site:string) => {
            if(hostname.includes(site)) {
                region = nextjsSites[site];
            }
        })
    }

    return region;
}