const locale = (region:string = 'US'):string => {
    switch(region) {
        case 'CA':
            return 'en-US';
        case 'GB':
            return 'en-US';
        case 'US':
        default:
            return 'en-US';
    }
}

const currency = (region:string = 'US'):string => {
    switch(region) {
        case 'CA':
            return 'CAD';
        case 'GB':
            return 'GBP';
        case 'US':
        default:
            return 'USD';
    }
}

const formatPrice = (price:number, region:string='US') => {
    let formatter = new Intl.NumberFormat(locale(region), {
        style: 'currency',
        currency: currency(region),
    });
return formatter.format(price);
}

export default formatPrice