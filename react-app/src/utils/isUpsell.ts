export const isUpsell = (window: Window): boolean => {
    const upsellSites = [
        'ups.thepetlabco.com',
        'ups.thepetlabco.ca',
        'ups.thepetlabco.de',
        'ups.petlabco.co.uk',
        'staging-upsell.netlify.app',
        '127.0.0.1'
    ]
    return upsellSites.includes(window.location.hostname);
}