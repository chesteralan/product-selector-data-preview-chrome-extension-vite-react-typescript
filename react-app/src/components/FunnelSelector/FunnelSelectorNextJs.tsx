import formatPrice from "../../utils/formatPrice";

type Props = {
  data: any;
  setShow: (value: boolean) => void;
};

const DataWrapper: React.CSSProperties = {
  width: `100%`,
  height: `100%`,
  position: `fixed`,
  top: 0,
  left: 0,
  zIndex: 9998,
};

const DataContainer: React.CSSProperties = {
  position: `fixed`,
  width: `500px`,
  height: `500px`,
  background: `#fff`,
  border: `1px solid #000`,
  zIndex: 9999,
  borderRadius: `10px`,
  boxShadow: `0 0 10px #5d5d5d`,
  top: `calc(50% - 280px)`,
  left: `calc(50% - 280px)`,
  padding: `30px`,
  overflow: `auto`,
};

const PriceStrike: React.CSSProperties = {
  textDecoration: `line-through`,
};

const FunnelSelectorNextJs = ({ data, setShow }: Props) => {
  console.log(data);

  const [firstQuery] = data.props.pageProps.dehydratedState.queries;
  const attributes = firstQuery.state.data.attributes;
  const product = attributes.product.data.attributes;
  const discountCodes = attributes.productDiscountCode.data.attributes.code;
  const otpPrices = product.prices.otpPrices;
  const otpBumpOffers = attributes.subBumpOffers.data;
  const subPrices = product.prices.subPrices;
  const subBumpOffers = attributes.subBumpOffers.data;

  return (
    <>
      <div style={DataWrapper} onClick={() => setShow(false)} />
      <div style={DataContainer}>
        <h3>Subscriptions:</h3>
        <p>
              <u>Discount Code:</u>{' '}
              <strong>{discountCodes}</strong>
            </p>
        <p>
              <u>Products</u>
            </p>
            <ul>
              {subPrices.map((item:any,index:number) => {


                return (
                <li key={index} style={{ marginBottom: 20}}>
                  <strong>{item.title}</strong>
                  <br />
                  {item.variant_id} -{' '}
                  {item.quantity}x -{' '}
                  <span style={PriceStrike}>
                    {formatPrice(item.perceived_rrp)}
                  </span>{' '}
                  {formatPrice(item.discounted_price)}{' '}
                  <small>
                    (Savings:
                      {' '}{formatPrice(
                      item.perceived_rrp -
                      item.discounted_price
                    )}
                    {' - '}
                    {(
                      ((item.perceived_rrp -
                      item.discounted_price) / item.perceived_rrp) * 100
                    ).toFixed(2)}%)
                  </small><br />
                  <strong>Price per chew <small>({(30 * item.quantity)} chews)</small></strong>: {formatPrice(
                      (item.discounted_price / (30 * item.quantity))
                    )}
                    {' '}
                    <small>
                    (Savings: 
                      {' '}{formatPrice(
                      (item.perceived_rrp -
                      item.discounted_price) / (30 * item.quantity)
                    )})
                    </small>
                    <br />
                    <strong>Price per tub</strong>: {formatPrice(
                      (item.discounted_price / (item.quantity) )
                    )}
                    {' '}
                 </li>
              )})}
            </ul>
          <p><u>Bump Offer</u></p>
          <p>
          <ul>
              {subBumpOffers.map((item:any, index:number) => {
                const bumpOffer = item.attributes;
                const bumpOfferDC = bumpOffer.discountCode.data.attributes.code;
                return (
                <li key={index}>
                  <strong>{bumpOffer.label}</strong>
                  <br />
                  {' '}{bumpOffer.subscriptionVariantID} - 1x -{' '}
                  <span style={PriceStrike}>
                    {formatPrice(bumpOffer.price.rrp)}
                  </span>{' '}
                  
                  {formatPrice(bumpOffer.price.salePrice)}{' '}
                  <small>
                    (Savings: 
                      {' '}{formatPrice(
                      bumpOffer.price.rrp -
                      bumpOffer.price.salePrice
                    )}
                    {' - '}
                    {(
                      ((bumpOffer.price.rrp -
                        bumpOffer.price.salePrice) / bumpOffer.price.rrp) * 100
                    ).toFixed(2)}%)
                  </small>{' '}
                  <br /> <strong>Discount Code</strong>: {bumpOfferDC}
                </li>
              )
              })}
            </ul>
            </p>
        <h3>Onetime:</h3>
        
        <p>
              <u>Products</u>
            </p>
            <ul>
              {otpPrices.map((item:any,index:number) => (
                <li key={index} style={{ marginBottom: 20}}>
                  <strong>{item.title}</strong>
                  <br />
                  {item.variant_id} -{' '}
                  {item.quantity}x -{' '}
                  <span style={PriceStrike}>
                    {formatPrice(item.perceived_rrp)}
                  </span>{' '}
                  {formatPrice(item.discounted_price)}{' '}
                  <small>
                    (Savings:
                      {' '}{formatPrice(
                      item.perceived_rrp -
                      item.discounted_price
                    )}
                    {' - '}
                    {(
                      ((item.perceived_rrp -
                      item.discounted_price) / item.perceived_rrp) * 100
                    ).toFixed(2)}%)
                  </small><br />
                  <strong>Price per chew <small>({(30 * item.quantity)} chews)</small></strong>: {formatPrice(
                      (item.discounted_price / (30 * item.quantity))
                    )}
                    {' '}
                    <small>
                    (Savings: 
                      {' '}{formatPrice(
                      (item.perceived_rrp -
                      item.discounted_price) / (30 * item.quantity)
                    )})
                    </small>
                    <br />
                    <strong>Price per tub</strong>: {formatPrice(
                      (item.discounted_price / (item.quantity) )
                    )}
                    {' '}
                 </li>
              ))}
            </ul>


        <p>
          <u>Bump Offer</u>
        </p>
        <p>
          <ul>
              {otpBumpOffers.map((item:any, index:number) => {
                const bumpOffer = item.attributes;
                const bumpOfferDC = bumpOffer.discountCode.data.attributes.code;
                return (
                <li key={index}>
                  <strong>{bumpOffer.label}</strong>
                  <br />
                  {' '}{bumpOffer.price.variantID} - 1x -{' '}
                  <span style={PriceStrike}>
                    {formatPrice(bumpOffer.price.rrp)}
                  </span>{' '}
                  
                  {formatPrice(bumpOffer.price.salePrice)}{' '}
                  <small>
                    (Savings: 
                      {' '}{formatPrice(
                      bumpOffer.price.rrp -
                      bumpOffer.price.salePrice
                    )}
                    {' - '}
                    {(
                      ((bumpOffer.price.rrp -
                        bumpOffer.price.salePrice) / bumpOffer.price.rrp) * 100
                    ).toFixed(2)}%)
                  </small>{' '}
                  <br /> <strong>Discount Code</strong>: {bumpOfferDC}
                </li>
              )
              })}
            </ul>
            </p>
      </div>
    </>
  );
};

export default FunnelSelectorNextJs;
