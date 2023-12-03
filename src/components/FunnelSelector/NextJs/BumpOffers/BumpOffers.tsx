import * as S from "../styles";
import formatPrice from "../../../../utils/formatPrice";
import useConfig from "../../../../hooks/useConfig";

type Props = {
  bumpOffers: any;
};

const BumpOffers = ({ bumpOffers }: Props) => {

  const { devToolUrl, strapiServerUrl } = useConfig();

  const editBumpOfferHandler = (id: string) => {
    window.open(
      `${strapiServerUrl}/admin/content-manager/collectionType/api::bump-offer.bump-offer/${id}`,
      "_blank"
    );
  };

  const editProductHandler = (id: string) => {
    window.open(
      `${strapiServerUrl}/admin/content-manager/collectionType/api::product.product/${id}`,
      "_blank"
    );
  };
  
  const variantLinkHandler = (variantId: string, bumpOfferDC: string) => {
    window.open(
      `${devToolUrl}/checkout-data-checker?variant_id=${variantId}&discount_code=${bumpOfferDC}&quantity=1`,
      "_blank"
    );
  };

  return (
    <div style={S.BumpOffersContainer}>
      <p>
        <u>Bump Offers</u>
      </p>
      <p>
        <ul style={S.UList}>
          {bumpOffers.map((bumpOffer: any, index: number) => {
            const bumpOfferDC = bumpOffer.discountCode.code;
            const bumpOfferId = bumpOffer.id;
            const productId = bumpOffer.product.id;

            return (
              <li key={index} style={S.UListItem}>
                <strong>Name</strong>: {bumpOffer.label}
                <br />
                <strong>SUB Variant ID</strong>:{" "}
                <a href="#" onClick={() => variantLinkHandler(bumpOffer.subscriptionVariantID, bumpOfferDC)} style={S.ALink}>
                  {bumpOffer.subscriptionVariantID}
                </a>
                <br />
                <strong>OTP Variant ID</strong>:{" "}
                <a href="#" onClick={() => variantLinkHandler(bumpOffer.otpVariantID, bumpOfferDC)} style={S.ALink}>
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
                <br />{" "}
                <small>
                  <a href="#" onClick={() => editBumpOfferHandler(bumpOfferId)}>
                    Edit Bump Offer
                  </a>{" "}
                  &middot;{" "}
                  <a href="#" onClick={() => editProductHandler(productId)}>
                    Edit Product
                  </a>
                </small>
              </li>
            );
          })}
        </ul>
      </p>
    </div>
  );
};

export default BumpOffers;
