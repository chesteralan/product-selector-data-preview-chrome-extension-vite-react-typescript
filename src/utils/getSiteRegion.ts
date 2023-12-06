import { IS_STRAPI, IS_STRAPI_CA, IS_STRAPI_UK, IS_STRAPI_US } from "./constants/strapi";
import { SITES } from "./constants/sites";
import { REGION_CA, REGION_UK, REGION_US } from "./constants/region";

export const getSiteRegion = (): string => {
    
    if (IS_STRAPI) {
        if(IS_STRAPI_US) return REGION_US;
        if(IS_STRAPI_CA) return REGION_CA;
        if(IS_STRAPI_UK) return REGION_UK;
    }

    const match = Object.keys(SITES).find((site:string) => window.location.hostname.includes(site));

    if(match) {
        return SITES[match] || REGION_US;
    }

    let hostname = window.location.hostname;
    if( hostname.includes('--') ) {
        hostname = hostname.split("--")[1]
    }

    let region = SITES[hostname] || REGION_US;

    return region;
}