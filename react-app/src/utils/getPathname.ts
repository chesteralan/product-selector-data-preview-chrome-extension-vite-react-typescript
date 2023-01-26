import { isUpsell } from "./isUpsell";

export const getPathname = (window: Window): string => {
    let pathname = window.location.pathname;
    if(isUpsell(window)) {
        const pathnameSplit = pathname.split('/');
        if( pathnameSplit.length > 2 ) {
            pathnameSplit.splice(pathnameSplit.length - 1);
        }
        pathname = pathnameSplit.join('/');
    }
    return pathname
}