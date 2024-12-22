import formatPrice from "../../utils/formatPrice";
import * as S from "./FunnelSelectorGatsby.styles";

type Props = {
  data: any;
  setShow: (value: boolean) => void;
};

const FunnelSelectorGatsby = ({ data, setShow }: Props) => {
  const extraData = JSON.parse(data.extra);
  return (
    <>
      <div style={S.DataWrapper} onClick={() => setShow(false)} />
      <div style={S.DataContainer}>
        <h3>Subscriptions:</h3>
        <p>
          <u>Discount Code:</u>{" "}
          <strong>{data.subscription.discounts.join(", ")}</strong>
        </p>
        <p>
          <u>Products</u>
        </p>
        <ul style={S.UList}>
          {data.subscription.products.map((product: any, index: number) => {
            const productDC =
              product.discount_code_override.length > 0
                ? product.discount_code_override.join(",")
                : data.subscription.discounts.join(",");
            const variantLink = `https://petlab-rebuild-tool.netlify.app/checkout-data-checker?country=${product.checkoutData.country}&variant_id=${product.checkoutData.variant_id}&discount_code=${productDC}&quantity=${product.checkoutData.quantity}`;
            return (
              <li key={index} style={S.UListItem}>
                <strong>{product.checkoutData.title}</strong>
                <br />
                <a href={variantLink} target="_blank">
                  {product.checkoutData.variant_id}
                </a>{" "}
                - {product.checkoutData.quantity}x -{" "}
                {product.checkoutData.perceived_rrp !==
                product.checkoutData.discounted_price ? (
                  <span style={S.PriceStrike}>
                    {formatPrice(
                      product.checkoutData.perceived_rrp,
                      product.checkoutData.country,
                    )}
                  </span>
                ) : null}{" "}
                {formatPrice(
                  product.checkoutData.discounted_price,
                  product.checkoutData.country,
                )}{" "}
                <small>
                  (Savings:{" "}
                  {formatPrice(
                    product.checkoutData.perceived_rrp -
                      product.checkoutData.discounted_price,
                    product.checkoutData.country,
                  )}
                  {" - "}
                  {(
                    ((product.checkoutData.perceived_rrp -
                      product.checkoutData.discounted_price) /
                      product.checkoutData.perceived_rrp) *
                    100
                  ).toFixed(0)}
                  %)
                </small>
                <br />
                <strong>
                  Price per chew{" "}
                  <small>({30 * product.checkoutData.quantity} chews)</small>
                </strong>
                :{" "}
                {formatPrice(
                  product.checkoutData.discounted_price /
                    (30 * product.checkoutData.quantity),
                  product.checkoutData.country,
                )}{" "}
                <small>
                  (Savings:{" "}
                  {formatPrice(
                    (product.checkoutData.perceived_rrp -
                      product.checkoutData.discounted_price) /
                      (30 * product.checkoutData.quantity),
                    product.checkoutData.country,
                  )}
                  )
                </small>
                <br />
                <strong>Price per tub</strong>:{" "}
                {formatPrice(
                  product.checkoutData.discounted_price /
                    product.checkoutData.quantity,
                  product.checkoutData.country,
                )}{" "}
                {product.freeGiftData.variantId && (
                  <>
                    <br />
                    <strong>Free Gift</strong>:{product.freeGiftData.variantId}{" "}
                    -{" "}
                    {formatPrice(
                      product.free_gift_value,
                      product.checkoutData.country,
                    )}
                  </>
                )}
                {product.discount_code_override.length > 0 && (
                  <>
                    <br /> <strong>Discount Code Override</strong>:{" "}
                    {product.discount_code_override.join(", ")}
                  </>
                )}
                {product.higher_initial_discount.length > 0 && (
                  <>
                    <br /> <strong>Higher Initial Discount</strong>:{" "}
                    {product.higher_initial_discount.join(", ")}
                  </>
                )}
                {product.rebill_discount.length > 0 && (
                  <>
                    <br /> <strong>Rebill Code</strong>:{" "}
                    {product.rebill_discount.join(", ")}
                  </>
                )}
                {product.priceSettingTag && (
                  <>
                    <br /> <strong>Price Setting Tag</strong>:{" "}
                    {product.priceSettingTag}
                  </>
                )}
                {product.upsell_url && (
                  <>
                    <br /> <strong>Upsell URL Override</strong>:{" "}
                    <small>
                      <a href={`${product.upsell_url}/token`} target="_blank">
                        {product.upsell_url}
                      </a>
                    </small>
                  </>
                )}
              </li>
            );
          })}
        </ul>
        <p>
          <u>Bump Offers</u>
        </p>
        <ul style={S.UList}>
          {data.subscription.bumpoffers.map((product: any, index: number) => {
            const variantLink = `https://petlab-rebuild-tool.netlify.app/checkout-data-checker?country=${product.checkoutData.country}&variant_id=${product.checkoutData.variant_id}&discount_code=${product.productRef.product.discountCode}&quantity=1`;

            return (
              <li key={index} style={S.UListItem}>
                <strong>{product.checkoutData.title}</strong>
                <br />
                <a href={variantLink} target="_blank">
                  {product.checkoutData.variant_id}
                </a>{" "}
                - {product.checkoutData.quantity}x -{" "}
                <span style={S.PriceStrike}>
                  {formatPrice(
                    product.checkoutData.perceived_rrp,
                    product.checkoutData.country,
                  )}
                </span>{" "}
                {formatPrice(
                  product.checkoutData.discounted_price,
                  product.checkoutData.country,
                )}{" "}
                <small>
                  (Savings:{" "}
                  {formatPrice(
                    product.checkoutData.perceived_rrp -
                      product.checkoutData.discounted_price,
                    product.checkoutData.country,
                  )}
                  {" - "}
                  {(
                    ((product.checkoutData.perceived_rrp -
                      product.checkoutData.discounted_price) /
                      product.checkoutData.perceived_rrp) *
                    100
                  ).toFixed(2)}
                  %)
                </small>{" "}
                <br /> <strong>Discount Code</strong>:{" "}
                {product.productRef.product.discountCode}
                {product.higher_initial_discount && (
                  <>
                    <br /> <strong>Higher Initial Discount</strong>:{" "}
                    {product.higher_initial_discount}
                  </>
                )}
                {product.rebill_discount && (
                  <>
                    <br /> <strong>Rebill Code</strong>:{" "}
                    {product.rebill_discount}
                  </>
                )}
              </li>
            );
          })}
        </ul>
        <hr />
        <h3>Onetime:</h3>
        <p>
          <u>Discount Code:</u>{" "}
          <strong>{data.onetime.discounts.join(", ")}</strong>
        </p>
        <p>
          <u>Products</u>
        </p>
        <ul style={S.UList}>
          {data.onetime.products.map((product: any, index: number) => {
            const variantLink = `https://petlab-rebuild-tool.netlify.app/checkout-data-checker?country=${
              product.checkoutData.country
            }&variant_id=${
              product.checkoutData.variant_id
            }&discount_code=${data.subscription.discounts.join(",")}&quantity=${
              product.checkoutData.quantity
            }`;

            return (
              <li key={index} style={S.UListItem}>
                <strong>{product.checkoutData.title}</strong>
                <br />
                <a href={variantLink} target="_blank">
                  {product.checkoutData.variant_id}
                </a>{" "}
                - {product.checkoutData.quantity}x -{" "}
                {product.checkoutData.perceived_rrp !==
                product.checkoutData.discounted_price ? (
                  <span style={S.PriceStrike}>
                    {formatPrice(
                      product.checkoutData.perceived_rrp,
                      product.checkoutData.country,
                    )}
                  </span>
                ) : null}{" "}
                {formatPrice(
                  product.checkoutData.discounted_price,
                  product.checkoutData.country,
                )}{" "}
                <small>
                  (Savings:{" "}
                  {formatPrice(
                    product.checkoutData.perceived_rrp -
                      product.checkoutData.discounted_price,
                    product.checkoutData.country,
                  )}
                  {" - "}
                  {(
                    ((product.checkoutData.perceived_rrp -
                      product.checkoutData.discounted_price) /
                      product.checkoutData.perceived_rrp) *
                    100
                  ).toFixed(0)}
                  %)
                </small>
                <br />
                <strong>
                  Price per chew{" "}
                  <small>({30 * product.checkoutData.quantity} chews)</small>
                </strong>
                :{" "}
                {formatPrice(
                  product.checkoutData.discounted_price /
                    (30 * product.checkoutData.quantity),
                  product.checkoutData.country,
                )}{" "}
                <small>
                  (Savings:{" "}
                  {formatPrice(
                    (product.checkoutData.perceived_rrp -
                      product.checkoutData.discounted_price) /
                      (30 * product.checkoutData.quantity),
                    product.checkoutData.country,
                  )}
                  )
                </small>
                <br />
                <strong>Price per tub</strong>:{" "}
                {formatPrice(
                  product.checkoutData.discounted_price /
                    product.checkoutData.quantity,
                  product.checkoutData.country,
                )}{" "}
                {product.upsell_url && (
                  <>
                    <br /> <strong>Upsell URL Override</strong>:{" "}
                    <small>
                      <a href={`${product.upsell_url}/token`} target="_blank">
                        {product.upsell_url}
                      </a>
                    </small>
                  </>
                )}
              </li>
            );
          })}
        </ul>
        <p>
          <u>Bump Offers</u>
        </p>
        <ul style={S.UList}>
          {data.onetime.bumpoffers.map((product: any, index: number) => {
            const variantLink = `https://petlab-rebuild-tool.netlify.app/checkout-data-checker?country=${product.checkoutData.country}&variant_id=${product.checkoutData.variant_id}&discount_code=${product.productRef.product.discountCode}&quantity=1`;

            return (
              <li key={index} style={S.UListItem}>
                <strong>{product.checkoutData.title}</strong>
                <br />
                <a href={variantLink} target="_blank">
                  {product.checkoutData.variant_id}
                </a>{" "}
                - {product.checkoutData.quantity}x -{" "}
                <span style={S.PriceStrike}>
                  {formatPrice(
                    product.checkoutData.perceived_rrp,
                    product.checkoutData.country,
                  )}
                </span>{" "}
                {formatPrice(
                  product.checkoutData.discounted_price,
                  product.checkoutData.country,
                )}{" "}
                <small>
                  (Savings:{" "}
                  {formatPrice(
                    product.checkoutData.perceived_rrp -
                      product.checkoutData.discounted_price,
                    product.checkoutData.country,
                  )}
                  {" - "}
                  {(
                    ((product.checkoutData.perceived_rrp -
                      product.checkoutData.discounted_price) /
                      product.checkoutData.perceived_rrp) *
                    100
                  ).toFixed(2)}
                  %)
                </small>{" "}
                <br /> <strong>Discount Code</strong>:{" "}
                {product.productRef.product.discountCode}
                {product.higher_initial_discount && (
                  <>
                    <br /> <strong>Higher Initial Discount</strong>:{" "}
                    {product.higher_initial_discount}
                  </>
                )}
                {product.rebill_discount && (
                  <>
                    <br /> <strong>Rebill Code</strong>:{" "}
                    {product.rebill_discount}
                  </>
                )}
              </li>
            );
          })}
        </ul>
        <p>
          <u>Upsell URL:</u>{" "}
          <strong>
            <a href={`${data.upsell}/token`} target="_blank" rel="noreferrer">
              {data.upsell}
            </a>
          </strong>
        </p>
        <p>
          <u>Currency:</u>{" "}
          <strong>
            {data.currency.code} - {data.currency.symbol}
          </strong>
        </p>
        <p>
          <u>Extra:</u>
        </p>
        <ul>
          {Object.keys(extraData).map((key) => (
            <li key={key}>
              {key}: <strong>{extraData[key]}</strong>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FunnelSelectorGatsby;
