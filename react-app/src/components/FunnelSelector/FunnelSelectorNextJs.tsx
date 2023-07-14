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

const UList: React.CSSProperties = {
  paddingLeft: 20,
  listStyle: "disc",
};

const UListItem: React.CSSProperties = {
  marginBottom: 20,
};

const ALink: React.CSSProperties = {
  textDecoration: "underline",
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
        <p>
          <u>Discount Code:</u> <strong>{discountCodes}</strong>
        </p>
        <p>
          <u>Common Upsell URL:</u> <strong>{`no data`}</strong>
        </p>
        <br />
        <h3>Subscriptions:</h3>
        <p>
          <u>Products</u>
        </p>
        <ul style={UList}>
          {subPrices.map((item: any, index: number) => {
            const variantLink = `https://petlab-rebuild-tool.netlify.app/checkout-data-checker?country=${item.country}&variant_id=${item.variant_id}&discount_code=${discountCodes}&quantity=${item.quantity}`;
            return (
              <li key={index} style={UListItem}>
                <strong>Name</strong>: {item.title}
                <br />
                <strong>Variant ID</strong>:{" "}
                <a href={variantLink} target="_blank" style={ALink}>
                  {item.variant_id}
                </a>
                <br />
                <strong>Quantity</strong>: {item.quantity}
                <br />
                <strong>RRP</strong>:{" "}
                {formatPrice(item.perceived_rrp, item.country)}
                <br />
                <strong>Sales Price</strong>:{" "}
                {formatPrice(item.discounted_price, item.country)}
                <br />
                <strong>Savings</strong>:{" "}
                {formatPrice(
                  item.perceived_rrp - item.discounted_price,
                  item.country
                )}{" "}
                {" - "}
                <small>
                  {(
                    ((item.perceived_rrp - item.discounted_price) /
                      item.perceived_rrp) *
                    100
                  ).toFixed(2)}
                  %
                </small>
                <br />
                <strong>
                  Price per chew <small>({30 * item.quantity} chews)</small>
                </strong>
                :{" "}
                {formatPrice(
                  item.discounted_price / (30 * item.quantity),
                  item.country
                )}{" "}
                <small>
                  (Savings:{" "}
                  {formatPrice(
                    (item.perceived_rrp - item.discounted_price) /
                      (30 * item.quantity),
                    item.country
                  )}
                  )
                </small>
                <br />
                <strong>Price per tub</strong>:{" "}
                {formatPrice(
                  item.discounted_price / item.quantity,
                  item.country
                )}
                <br />
                <strong>Discount Code Override</strong>: no data
                <br /> <strong>Higher Initial Discount</strong>: no data
                <br /> <strong>Rebill Code</strong>: no data
                <br /> <strong>Price Setting Tag</strong>: no data
                <br />
                <strong>Upsell URL:</strong>: {`no data`}
                <br />
              </li>
            );
          })}
        </ul>
        <p>
          <u>Bump Offers</u>
        </p>
        <p>
          <ul style={UList}>
            {subBumpOffers.map((item: any, index: number) => {
              const bumpOffer = item.attributes;
              const bumpOfferDC = bumpOffer.discountCode.data.attributes.code;

              const variantLink = `https://petlab-rebuild-tool.netlify.app/checkout-data-checker?variant_id=${bumpOffer.price.variantID}&discount_code=${bumpOfferDC}&quantity=1`;

              return (
                <li key={index} style={UListItem}>
                  <strong>Name</strong>: {bumpOffer.label}
                  <br />
                  <strong>Variant ID</strong>:{" "}
                  <a href={variantLink} target="_blank" style={ALink}>
                    {bumpOffer.price.variantID}
                  </a>
                  <br />
                  <strong>Quantity</strong>: 1
                  <br />
                  <strong>RRP</strong>: {formatPrice(bumpOffer.price.rrp)}
                  <br />
                  <strong>Sales Price</strong>:{" "}
                  {formatPrice(bumpOffer.price.salePrice)}
                  <br />
                  <strong>Savings</strong>:{" "}
                  {formatPrice(bumpOffer.price.rrp - bumpOffer.price.salePrice)}{" "}
                  {" - "}
                  <small>
                    {(
                      ((bumpOffer.price.rrp - bumpOffer.price.salePrice) /
                        bumpOffer.price.rrp) *
                      100
                    ).toFixed(2)}
                    %
                  </small>
                  <br /> <strong>Discount Code</strong>: {bumpOfferDC}
                </li>
              );
            })}
          </ul>
        </p>
        <br /> <h3>Onetime:</h3>
        <p>
          <u>Products</u>
        </p>
        <ul style={UList}>
          {otpPrices.map((item: any, index: number) => {
            const variantLink = `https://petlab-rebuild-tool.netlify.app/checkout-data-checker?country=${item.country}&variant_id=${item.variant_id}&discount_code=${discountCodes}&quantity=${item.quantity}`;

            return (
              <li key={index} style={UListItem}>
                <strong>Name</strong>: {item.title}
                <br />
                <strong>Variant ID</strong>:{" "}
                <a href={variantLink} target="_blank" style={ALink}>
                  {item.variant_id}
                </a>
                <br />
                <strong>Quantity</strong>: {item.quantity}
                <br />
                <strong>RRP</strong>:{" "}
                {formatPrice(item.perceived_rrp, item.country)}
                <br />
                <strong>Sales Price</strong>:{" "}
                {formatPrice(item.discounted_price, item.country)}
                <br />
                <strong>Savings</strong>:{" "}
                {formatPrice(
                  item.perceived_rrp - item.discounted_price,
                  item.country
                )}{" "}
                {" - "}
                <small>
                  {(
                    ((item.perceived_rrp - item.discounted_price) /
                      item.perceived_rrp) *
                    100
                  ).toFixed(2)}
                  %
                </small>
                <br />
                <strong>
                  Price per chew <small>({30 * item.quantity} chews)</small>
                </strong>
                :{" "}
                {formatPrice(
                  item.discounted_price / (30 * item.quantity),
                  item.country
                )}{" "}
                <small>
                  (Savings:{" "}
                  {formatPrice(
                    (item.perceived_rrp - item.discounted_price) /
                      (30 * item.quantity),
                    item.country
                  )}
                  )
                </small>
                <br />
                <strong>Price per tub</strong>:{" "}
                {formatPrice(
                  item.discounted_price / item.quantity,
                  item.country
                )}{" "}
                <br /> <strong>Discount Code Override</strong>: no data
                <br /> <strong>Higher Initial Discount</strong>: no data
                <br /> <strong>Rebill Code</strong>: no data
                <br /> <strong>Price Setting Tag</strong>: no data
                <br />
                <strong>Upsell URL:</strong>: {`no data`}
                <br />
              </li>
            );
          })}
        </ul>
        <p>
          <u>Bump Offers</u>
        </p>
        <p>
          <ul style={UList}>
            {otpBumpOffers.map((item: any, index: number) => {
              const bumpOffer = item.attributes;
              const bumpOfferDC = bumpOffer.discountCode.data.attributes.code;

              const variantLink = `https://petlab-rebuild-tool.netlify.app/checkout-data-checker?variant_id=${bumpOffer.price.variantID}&discount_code=${bumpOfferDC}&quantity=1`;

              return (
                <li key={index} style={UListItem}>
                  <strong>Name</strong>: {bumpOffer.label}
                  <br />
                  <strong>Variant ID</strong>:{" "}
                  <a href={variantLink} target="_blank" style={ALink}>
                    {bumpOffer.price.variantID}
                  </a>
                  <br />
                  <strong>Quantity</strong>: 1
                  <br />
                  <strong>RRP</strong>: {formatPrice(bumpOffer.price.rrp)}
                  <br />
                  <strong>Sales Price</strong>:{" "}
                  {formatPrice(bumpOffer.price.salePrice)}
                  <br />
                  <strong>Savings</strong>:{" "}
                  {formatPrice(bumpOffer.price.rrp - bumpOffer.price.salePrice)}{" "}
                  {" - "}
                  <small>
                    {(
                      ((bumpOffer.price.rrp - bumpOffer.price.salePrice) /
                        bumpOffer.price.rrp) *
                      100
                    ).toFixed(2)}
                    %
                  </small>
                  <br /> <strong>Discount Code</strong>: {bumpOfferDC}
                </li>
              );
            })}
          </ul>
        </p>
      </div>
    </>
  );
};

export default FunnelSelectorNextJs;
