import SingleProduct from "./NextJs/SingleProduct/SingleProduct";

type Props = {
  data: any;
  setShow: (value: boolean) => void;
};



const FunnelSelectorNextJs = ({ data, setShow }: Props) => {
  console.log(data);

  const page = data.props.pageProps?.page;

  if(!page) return null;

  const product = page.products[0];
  const discountCodes = page.productDiscountCode.code;
  const rebillDiscountCode = page.rebillDiscountCode?.code;
  const higherInitialDiscountCode = page.higherInitialDiscountCode?.code;
  const otpPrices = product.prices.otpPrices;
  const otpBumpOffers = page.subBumpOffers;
  const subPrices = product.prices.subPrices;
  const subBumpOffers = page.subBumpOffers;
  const subUpsellUrl = product.subUpsellUrl;
  const otpUpsellUrl = product.otpUpsellUrl;
  const klaviyoListId = product.klaviyoListId;
  const locales = data.locales;
  const slug = data.query.slug;
  
  return (<>
  <SingleProduct 
  setShow={setShow}
  discountCodes={discountCodes}
  rebillDiscountCode={rebillDiscountCode}
  higherInitialDiscountCode={higherInitialDiscountCode}
  otpPrices={otpPrices}
  otpBumpOffers={otpBumpOffers}
  subPrices={subPrices}
  subBumpOffers={subBumpOffers}
  subUpsellUrl={subUpsellUrl}
  otpUpsellUrl={otpUpsellUrl}
  klaviyoListId={klaviyoListId}
  locales={locales}
  slug={slug}
  /></>)
};

export default FunnelSelectorNextJs;
