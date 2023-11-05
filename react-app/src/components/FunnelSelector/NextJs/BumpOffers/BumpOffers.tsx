import * as S from "../styles";
import formatPrice from "../../../../utils/formatPrice";

type Props = {
  bumpOffers: any;
};

const BumpOffers = ({ bumpOffers }: Props) => {
  return (
    <div style={S.BumpOffersContainer}>
      <p>
        <u>Bump Offers</u>
      </p>
      <p>
        <ul style={S.UList}>
          {bumpOffers.map((bumpOffer: any, index: number) => {
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
  );
};

export default BumpOffers;
