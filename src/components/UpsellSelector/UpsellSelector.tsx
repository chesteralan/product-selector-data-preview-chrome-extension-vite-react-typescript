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

const UpsellSelector = ({ data, setShow }: Props) => {

  return (
    <>
      <div style={DataWrapper} onClick={() => setShow(false)} />
      <div style={DataContainer}>
        <h3>Offers:</h3>
        <ul>
          {data.offers.map((offer: any, index: number) => {
            const savings =
              offer.checkoutData?.price - offer.checkoutData?.discounted_price;
            const savingsPercentage =
              (savings / offer.checkoutData?.price) * 100;

            return (
              <li key={index} style={{ paddingBottom: `20px` }}>
                <strong>Offer ID</strong>: {offer.offerId} <br />
                <strong>Product Name</strong>: {offer.productName}
                <br />
                <strong>Checkout Title</strong>: {offer.checkoutData?.title}
                <br />
                <strong>Checkout Variant ID</strong>:{" "}
                {offer.checkoutData?.variant_id}
                <br />
                <strong>Quantity</strong>: {offer.checkoutData?.quantity}
                <br />
                <strong>Retail Price</strong>: {data.currency.symbol}
                {offer.checkoutData?.price}
                <br />
                <strong>Perceived Retail Price</strong>: {data.currency.symbol}
                {offer.checkoutData?.perceived_rrp}
                <br />
                <strong>Discounted Price</strong>: {data.currency.symbol}
                {offer.checkoutData?.discounted_price}
                <br />
                <strong>Savings</strong>: {data.currency.symbol}
                {savings.toFixed(2)}{" "}
                <small>({savingsPercentage.toFixed(2)}%)</small>
                <br /> <strong>Discount Code</strong>: {offer.discountCode}
                <br /> <strong>Discount Rate</strong>: {offer.discountRate}%
                <br /> <strong>Display Title</strong>: {offer.displayTitle}
                <br /> <strong>Next Index (Accepted)</strong>:{" "}
                {offer.nextIndexYes}
                <br /> <strong>Next Index (Declined)</strong>:{" "}
                {offer.nextIndexNo}
                <br /> <strong>Tag</strong>: {offer.tag}
              </li>
            );
          })}
        </ul>
        <hr />
        <p>
          <u>Currency:</u>{" "}
          <strong>
            {data.currency.code} - {data.currency.symbol}
          </strong>
        </p>
        <p>
          <u>Store:</u> <strong>{data.store}</strong>
        </p>
      </div>
    </>
  );
};

export default UpsellSelector;
