type Site = {
    region: string;
    upsell: boolean;
    env: string;
    url: string;
}
export const getSiteUrl = (region:string = `US`, upsell:boolean = false, env:string = 'live'):string => {
    const defaultSite:Site = { region: `US`, upsell: false, env: `live`, url: `https://offer.thepetlabco.com` }
    const siteUrls:Site[] = [
        defaultSite,
        { region: `UK`, upsell: false, env: `live`, url: `https://offer.petlabco.co.uk` },
        { region: `CA`, upsell: false, env: `live`, url: `https://offer.thepetlabco.ca` },
        { region: `DE`, upsell: false, env: `live`, url: `https://offer.thepetlabco.de` },
        { region: `US`, upsell: false, env: `dev`, url: `https://funnel-dev.thepetlabco.com` },
        { region: `UK`, upsell: false, env: `dev`, url: `https://offer.petlabco.co.uk` },
        { region: `CA`, upsell: false, env: `dev`, url: `https://offer.thepetlabco.ca` },
        { region: `DE`, upsell: false, env: `dev`, url: `https://offer.thepetlabco.de` },
        { region: `US`, upsell: false, env: `local`, url: `http://localhost:8000` },
        { region: `UK`, upsell: false, env: `local`, url: `http://localhost:8000` },
        { region: `CA`, upsell: false, env: `local`, url: `http://localhost:8000` },
        { region: `DE`, upsell: false, env: `local`, url: `http://localhost:8000` },

        // upsell
        { region: `US`, upsell: true, env: `live`, url: `https://ups.thepetlabco.com` },
        { region: `UK`, upsell: true, env: `live`, url: `https://ups.petlabco.co.uk` },
        { region: `CA`, upsell: true, env: `live`, url: `https://ups.thepetlabco.ca` },
        { region: `DE`, upsell: true, env: `live`, url: `https://ups.thepetlabco.de` },
        { region: `US`, upsell: true, env: `dev`, url: `https://staging-upsell.netlify.app` },
        { region: `UK`, upsell: true, env: `dev`, url: `https://ups.petlabco.co.uk` },
        { region: `CA`, upsell: true, env: `dev`, url: `https://ups.thepetlabco.ca` },
        { region: `DE`, upsell: true, env: `dev`, url: `https://ups.thepetlabco.de` },
        { region: `US`, upsell: true, env: `local`, url: `http://localhost:8001` },
        { region: `UK`, upsell: true, env: `local`, url: `http://localhost:8001` },
        { region: `CA`, upsell: true, env: `local`, url: `http://localhost:8001` },
        { region: `DE`, upsell: true, env: `local`, url: `http://localhost:8001` },
    ]

    const selected = siteUrls.find((site: Site) => site.region === region && site.upsell === upsell && site.env === env)
    console.log(selected);
    return selected ? selected.url : defaultSite.url
}