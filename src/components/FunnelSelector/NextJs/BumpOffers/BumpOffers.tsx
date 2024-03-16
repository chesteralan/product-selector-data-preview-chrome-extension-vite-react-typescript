import * as S from "../styles";
import formatPrice from "../../../../utils/formatPrice";
import useConfig from "../../../../hooks/useConfig";
import { TYPE_SUB } from "../../../../utils/constants/purchaseType";

type Props = {
  bumpOffers: any;
  purchaseTab: string;
};

const BumpOffers = ({ bumpOffers, purchaseTab = TYPE_SUB }: Props) => {
  const { devToolUrl, strapiServerUrl } = useConfig();

  const editBumpOfferHandler = (id: string) => {
    window.open(
      `${strapiServerUrl}/admin/content-manager/collectionType/api::bump-offer.bump-offer/${id}`,
      "_blank",
    );
  };

  const editProductHandler = (id: string) => {
    window.open(
      `${strapiServerUrl}/admin/content-manager/collectionType/api::product.product/${id}`,
      "_blank",
    );
  };

  const variantLinkHandler = (variantId: string, bumpOfferDC: string) => {
    window.open(
      `${devToolUrl}/checkout-data-checker?variant_id=${variantId}&discount_code=${bumpOfferDC}&quantity=1`,
      "_blank",
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
                {TYPE_SUB === purchaseTab ? (
                  <>
                    <strong>SUB Variant ID</strong>:{" "}
                    <a
                      href="#"
                      onClick={() =>
                        variantLinkHandler(
                          bumpOffer.subscriptionVariantID,
                          bumpOfferDC,
                        )
                      }
                      style={S.ALink}
                    >
                      {bumpOffer.subscriptionVariantID}
                    </a>
                  </>
                ) : (
                  <>
                    <strong>OTP Variant ID</strong>:{" "}
                    <a
                      href="#"
                      onClick={() =>
                        variantLinkHandler(bumpOffer.otpVariantID, bumpOfferDC)
                      }
                      style={S.ALink}
                    >
                      {bumpOffer.otpVariantID}
                    </a>
                  </>
                )}
                <br />
                <strong>Quantity</strong>: 1
                <br />
                <strong>RRP</strong>: {formatPrice(bumpOffer.price.rrp)}
                <br />
                <strong>Sales Price</strong>:{" "}
                {formatPrice(bumpOffer.price.salePrice)}
                <br />
                <strong>Discount Rate</strong>:{" "}
                {Math.round(
                  100 - (bumpOffer.price.rrp / bumpOffer.price.salePrice) * 100,
                )}
                %
                <br />
                <strong>Savings</strong>:{" "}
                {formatPrice(bumpOffer.price.rrp - bumpOffer.price.salePrice)}
                <br /> <strong>Discount Code</strong>: {bumpOfferDC}
                <br />{" "}
                <small>
                  <a
                    href="#"
                    onClick={() => editBumpOfferHandler(bumpOfferId)}
                    style={{ textDecoration: "underline" }}
                  >
                    Edit Bump Offer
                  </a>{" "}
                  &middot;{" "}
                  <a
                    href="#"
                    onClick={() => editProductHandler(productId)}
                    style={{ textDecoration: "underline" }}
                  >
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
