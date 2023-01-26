type Sites = { [hostname:string]: string }
export const getSiteRegion = (window: Window): string => {
    const sites:Sites = {
        "offer.thepetlabco.com": `US`,
        "offer.thepetlabco.ca": `CA`,
        "offer.thepetlabco.de": `DE`,
        "offer.petlabco.co.uk": `UK`,
        "ups.thepetlabco.com": `US`,
        "ups.thepetlabco.ca": `CA`,
        "ups.thepetlabco.de": `DE`,
        "ups.petlabco.co.uk": `UK`,
    }
    return sites[window.location.hostname] || `US`;
}