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
  zIndex: 9998
}

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
  textDecoration: `line-through`
};

const FunnelSelector = ({ data, setShow }: Props) => {
  console.log(data)
  const extraData = JSON.parse(data.extra);
  return <>
  <div style={DataWrapper} onClick={() => setShow(false)} />
  <div style={DataContainer}>
  <h3>Subscriptions:</h3>
            <p>
              <u>Discount Code:</u>{' '}
              <strong>{data.subscription.discounts.join(', ')}</strong>
            </p>
            <p>
              <u>Products</u>
            </p>
            <ul>
              {data.subscription.products.map((product:any, index:number) => (
                <li key={index} style={{ marginBottom: 20}}>
                  <strong>{product.checkoutData.title}</strong>
                  <br />
                  {product.checkoutData.variant_id} -{' '}
                  {product.checkoutData.quantity}x -{' '}
                  <span style={PriceStrike}>
                    {data.currency.symbol}
                    {product.checkoutData.perceived_rrp}
                  </span>{' '}
                  {data.currency.symbol}
                  {product.checkoutData.discounted_price}{' '}
                  <small>
                    (Savings: {data.currency.symbol}
                    {(
                      product.checkoutData.perceived_rrp -
                      product.checkoutData.discounted_price
                    ).toFixed(2)}
                    {' - '}
                    {(
                      ((product.checkoutData.perceived_rrp -
                      product.checkoutData.discounted_price) / product.checkoutData.perceived_rrp) * 100
                    ).toFixed(0)}%)
                  </small><br />
                  <strong>Price per chew <small>({(30 * product.checkoutData.quantity)} chews)</small></strong>: {data.currency.symbol}{(
                      (product.checkoutData.discounted_price / (30 * product.checkoutData.quantity) )
                    ).toFixed(2)}
                    {' '}
                    <small>
                    (Savings: {data.currency.symbol}
                    {(
                      (product.checkoutData.perceived_rrp -
                      product.checkoutData.discounted_price) / (30 * product.checkoutData.quantity)
                    ).toFixed(2)})
                    </small>
                  {product.freeGiftData.variantId && (
                    <>
                      <br />
                      <strong>Free Gift</strong>: {product.freeGiftData.variantId} -{' '}
                      {data.currency.symbol}
                      {product.free_gift_value}
                    </>
                  )}
                  {product.discount_code_override.length > 0 && <><br /> <strong>Discount Code Override</strong>: {product.discount_code_override.join(', ')}</>}
                  {product.higher_initial_discount.length > 0 && <><br /> <strong>Higher Initial Discount</strong>: {product.higher_initial_discount.join(', ')}</>}
                  {product.rebill_discount.length > 0 && <><br /> <strong>Rebill Code</strong>: {product.rebill_discount.join(', ')}</>}
                  {product.priceSettingTag && <><br /> <strong>Price Setting Tag</strong>: {product.priceSettingTag}</>}
                  {product.upsell_url && <><br /> <strong>Upsell URL Override</strong>: <small><a href={`${product.upsell_url}/token`} target="_blank">{product.upsell_url}</a></small></>}
                </li>
              ))}
            </ul>
            <p>
              <u>Bump Offer</u>
            </p>
            <ul>
              {data.subscription.bumpoffers.map((product:any, index:number) => (
                <li key={index}>
                  <strong>{product.checkoutData.title}</strong>
                  <br />
                  {product.checkoutData.variant_id} -{' '}
                  {product.checkoutData.quantity}x -{' '}
                  <span style={PriceStrike}>
                    {data.currency.symbol}
                    {product.checkoutData.perceived_rrp}
                  </span>{' '}
                  {data.currency.symbol}
                  {product.checkoutData.discounted_price}{' '}
                  <small>
                    (Savings: {data.currency.symbol}
                    {(
                      product.checkoutData.perceived_rrp -
                      product.checkoutData.discounted_price
                    ).toFixed(2)}
                    {' - '}
                    {(
                      ((product.checkoutData.perceived_rrp -
                      product.checkoutData.discounted_price) / product.checkoutData.perceived_rrp) * 100
                    ).toFixed(0)}%)
                  </small>{' '}
                  <br /> <strong>Discount Code</strong>: {product.productRef.product.discountCode}
                  {product.higher_initial_discount && <><br /> <strong>Higher Initial Discount</strong>: {product.higher_initial_discount}</>}
                  {product.rebill_discount && <><br /> <strong>Rebill Code</strong>: {product.rebill_discount}</>}
                </li>
              ))}
            </ul>
            <hr />
            <h3>Onetime:</h3>
            <p>
              <u>Discount Code:</u>{' '}
              <strong>{data.onetime.discounts.join(', ')}</strong>
            </p>
            <p>
              <u>Products</u>
            </p>
            <ul>
              {data.onetime.products.map((product:any, index:number) => (
                <li key={index} style={{ marginBottom: 20 }}>
                  <strong>{product.checkoutData.title}</strong>
                  <br />
                  {product.checkoutData.variant_id} -{' '}
                  {product.checkoutData.quantity}x -{' '}
                  <span style={PriceStrike}>
                    {data.currency.symbol}
                    {product.checkoutData.perceived_rrp}
                  </span>{' '}
                  {data.currency.symbol}
                  {product.checkoutData.discounted_price}{' '}
                  <small>
                    (Savings: {data.currency.symbol}
                    {(
                      product.checkoutData.perceived_rrp -
                      product.checkoutData.discounted_price
                    ).toFixed(2)}
                    {' - '}
                    {(
                      ((product.checkoutData.perceived_rrp -
                      product.checkoutData.discounted_price) / product.checkoutData.perceived_rrp) * 100
                    ).toFixed(0)}%)
                  </small><br />
                  <strong>Price per chew <small>({(30 * product.checkoutData.quantity)} chews)</small></strong>: {data.currency.symbol}{(
                      (product.checkoutData.discounted_price / (30 * product.checkoutData.quantity) )
                    ).toFixed(2)}
                    {' '}
                    <small>
                    (Savings: {data.currency.symbol}
                    {(
                      (product.checkoutData.perceived_rrp -
                      product.checkoutData.discounted_price) / (30 * product.checkoutData.quantity)
                    ).toFixed(2)})
                    </small>
                  {product.upsell_url && <><br /> <strong>Upsell URL Override</strong>: <small><a href={`${product.upsell_url}/token`} target="_blank">{product.upsell_url}</a></small></>}
                </li>
              ))}
            </ul>
            <p>
              <u>Bump Offer</u>
            </p>
            <ul>
              {data.onetime.bumpoffers.map((product:any, index:number) => (
                <li key={index}>
                  <strong>{product.checkoutData.title}</strong>
                  <br />
                  {product.checkoutData.variant_id} -{' '}
                  {product.checkoutData.quantity}x -{' '}
                  <span style={PriceStrike}>
                    {data.currency.symbol}
                    {product.checkoutData.perceived_rrp}
                  </span>{' '}
                  {data.currency.symbol}
                  {product.checkoutData.discounted_price}{' '}
                  <small>
                    (Savings: {data.currency.symbol}
                    {(
                      product.checkoutData.perceived_rrp -
                      product.checkoutData.discounted_price
                    ).toFixed(2)}
                    {' - '}
                    {(
                      ((product.checkoutData.perceived_rrp -
                      product.checkoutData.discounted_price) / product.checkoutData.perceived_rrp) * 100
                    ).toFixed(0)}%)
                  </small>{' '}
                  <br /> <strong>Discount Code</strong>: {product.productRef.product.discountCode}
                  {product.higher_initial_discount && <><br /> <strong>Higher Initial Discount</strong>: {product.higher_initial_discount}</>}
                  {product.rebill_discount && <><br /> <strong>Rebill Code</strong>: {product.rebill_discount}</>}
                </li>
              ))}
            </ul>
            <p>
              <u>Upsell URL:</u>{' '}
              <strong>
                <a
                  href={`${data.upsell}/token`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.upsell}
                </a>
              </strong>
            </p>
            <p>
              <u>Currency:</u>{' '}
              <strong>
                {data.currency.code} - {data.currency.symbol}
              </strong>
            </p>
            <p>
              <u>Extra:</u>
            </p>
            <ul>
              {Object.keys(extraData).map(key => (
                <li key={key}>
                  {key}: <strong>{extraData[key]}</strong>
                </li>
              ))}
            </ul>
  </div>
  </>;
}

export default FunnelSelector;
