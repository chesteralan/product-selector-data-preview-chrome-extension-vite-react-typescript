import * as S from './SingleProduct.styles'
import formatPrice from "../../../../utils/formatPrice";

type Props = {
    setShow: any;
    discountCodes: string;
    rebillDiscountCode: string;
    higherInitialDiscountCode: string;
    subPrices: any;
    subBumpOffers: any;
    otpPrices: any;
    otpBumpOffers: any;
    subUpsellUrl: string;
    otpUpsellUrl: string;
    klaviyoListId: string;
    locales: string[];
    slug: string;
}

const SingleProduct = (props: Props) => {
    
    const { setShow,
        discountCodes,
        rebillDiscountCode,
        higherInitialDiscountCode,
        subPrices,
        subBumpOffers,
        otpPrices,
        otpBumpOffers,
        subUpsellUrl,
        otpUpsellUrl,
        klaviyoListId,
        locales,
        slug
    } = props;

    return (
        <>
          <div style={S.DataWrapper} onClick={() => setShow(false)} />
          <div style={S.DataContainer}>
            <p>
              <u>Locales:</u> {locales.map((locale) => (<strong><a target="_blank" style={S.LocaleLink} href={`/${locale}/${slug}`}>{locale}</a></strong>))}
            </p><hr /><br />
            <p>
              <u>Discount Code:</u> <strong>{discountCodes}</strong>
            </p>
            {rebillDiscountCode && (<p>
              <u>Rebill Discount Code:</u> <strong>{rebillDiscountCode}</strong>
            </p>)}
            {higherInitialDiscountCode && (<p>
              <u>Higher Initial Discount Code:</u> <strong>{higherInitialDiscountCode}</strong>
            </p>)}
            <p>
              <u>Klaviyo List ID:</u> <strong>{klaviyoListId}</strong>
            </p>
           
            <br />
            <h3>SUBSCRIPTIONS:</h3>
            <hr />
            <p>
            <u>Upsell URL:</u> <strong><a href={`${subUpsellUrl}/token`} target="_blank" style={S.ALink}>{subUpsellUrl}</a></strong>
            </p>
            <p>
              <u>Products</u>
            </p>
            <ul style={S.UList}>
              {subPrices.map((item: any, index: number) => {
                const variantLink = `https://petlab-rebuild-tool.netlify.app/checkout-data-checker?country=${item.country}&variant_id=${item.variant_id}&discount_code=${discountCodes}&quantity=${item.quantity}`;
                return (
                  <li key={index} style={S.UListItem}>
                    <strong>Name</strong>: {item.title}
                    <br />
                    <strong>Variant ID</strong>:{" "}
                    <a href={variantLink} target="_blank" style={S.ALink}>
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
                    
                  </li>
                );
              })}
            </ul>
            <p>
              <u>Bump Offers</u>
            </p>
            <p>
              <ul style={S.UList}>
                {subBumpOffers.map((bumpOffer: any, index: number) => {
                  const bumpOfferDC = bumpOffer.discountCode.code;
    
                  const variantLink = `https://petlab-rebuild-tool.netlify.app/checkout-data-checker?variant_id=${bumpOffer.subscriptionVariantID}&discount_code=${bumpOfferDC}&quantity=1`;
    
                  return (
                    <li key={index} style={S.UListItem}>
                      <strong>Name</strong>: {bumpOffer.label}
                      <br />
                      <strong>Variant ID</strong>:{" "}
                      <a href={variantLink} target="_blank" style={S.ALink}>
                        {bumpOffer.subscriptionVariantID}
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
            <br /> <h3>ONETIME:</h3>
            <hr />
            <p>
              <u>Upsell URL:</u> <strong><a href={`${otpUpsellUrl}/token`} target="_blank" style={S.ALink}>{otpUpsellUrl}</a></strong>
            </p>
            <p>
              <u>Products</u>
            </p>
            <ul style={S.UList}>
              {otpPrices.map((item: any, index: number) => {
                const variantLink = `https://petlab-rebuild-tool.netlify.app/checkout-data-checker?country=${item.country}&variant_id=${item.variant_id}&discount_code=${discountCodes}&quantity=${item.quantity}`;
    
                return (
                  <li key={index} style={S.UListItem}>
                    <strong>Name</strong>: {item.title}
                    <br />
                    <strong>Variant ID</strong>:{" "}
                    <a href={variantLink} target="_blank" style={S.ALink}>
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
                    <br />
                    
                  </li>
                );
              })}
            </ul>
            <p>
              <u>Bump Offers</u>
            </p>
            <p>
              <ul style={S.UList}>
                {otpBumpOffers.map((bumpOffer: any, index: number) => {
                  const bumpOfferDC = bumpOffer.discountCode.code;
    
                  const variantLink = `https://petlab-rebuild-tool.netlify.app/checkout-data-checker?variant_id=${bumpOffer.otpVariantID}&discount_code=${bumpOfferDC}&quantity=1`;
    
                  return (
                    <li key={index} style={S.UListItem}>
                      <strong>Name</strong>: {bumpOffer.label}
                      <br />
                      <strong>Variant ID</strong>:{" "}
                      <a href={variantLink} target="_blank" style={S.ALink}>
                        {bumpOffer.otpVariantID}
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
}

export default SingleProduct