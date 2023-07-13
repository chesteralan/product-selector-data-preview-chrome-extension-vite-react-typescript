const locale = (region:string = 'US'):string => {
    switch(region) {
        case 'US':
        default:
            return 'en-US';
    }
}

const currency = (region:string = 'US'):string => {
    switch(region) {
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