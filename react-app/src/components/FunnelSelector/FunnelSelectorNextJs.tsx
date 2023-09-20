import SingleProduct from "./NextJs/SingleProduct";

type Props = {
  data: any;
  setShow: (value: boolean) => void;
};



const FunnelSelectorNextJs = ({ data, setShow }: Props) => {
  console.log(data);

  const [firstQuery] = data.props.pageProps.dehydratedState.queries;
  const attributes = firstQuery.state.data.attributes;
  const product = attributes.products.data[0].attributes;
  const discountCodes = attributes.productDiscountCode.data.attributes.code;
  const otpPrices = product.prices.otpPrices;
  const otpBumpOffers = attributes.subBumpOffers.data;
  const subPrices = product.prices.subPrices;
  const subBumpOffers = attributes.subBumpOffers.data;
  const subUpsellUrl = product.subUpsellUrl;
  const otpUpsellUrl = product.otpUpsellUrl;
  const klaviyoListId = product.klaviyoListId;

  return <SingleProduct 
  setShow={setShow}
  discountCodes={discountCodes}
  otpPrices={otpPrices}
  otpBumpOffers={otpBumpOffers}
  subPrices={subPrices}
  subBumpOffers={subBumpOffers}
  subUpsellUrl={subUpsellUrl}
  otpUpsellUrl={otpUpsellUrl}
  klaviyoListId={klaviyoListId}
  />
};

export default FunnelSelectorNextJs;
