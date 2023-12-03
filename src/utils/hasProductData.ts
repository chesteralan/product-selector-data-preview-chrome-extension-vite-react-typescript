export const hasProductData = (data:any):boolean => {
    return data.result?.data?.hasOwnProperty('funnelPageData') ||
    data.result?.data?.hasOwnProperty('upsellCheckoutData') 
    || false
}

export const hasFunnelData = (data:any):boolean => {
    return data.result?.data?.hasOwnProperty('funnelPageData') || false
}

export const hasUpsellData = (data:any):boolean => {
    return data.result?.data?.hasOwnProperty('upsellCheckoutData') || false
}