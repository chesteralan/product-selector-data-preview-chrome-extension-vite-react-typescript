import Product from "../Product/Product";
import BumpOffers from "../BumpOffers/BumpOffers";
import { TYPE_OTP, TYPE_SUB } from "../../../../utils/constants/purchaseType";
import useNextData from "../../../../hooks/useNextData";

type Props = {
  currentProduct?: number;
  purchaseTab: string;
  showBumpoffers: boolean;
};

const ProductDetails = ({
  currentProduct = 0,
  purchaseTab,
  showBumpoffers,
}: Props) => {
  const {
    productId,
    otpPrices,
    subPrices,
    subUpsellUrl,
    otpUpsellUrl,
    klaviyoListId,
    discountCodes,
    subBumpOffers,
    otpBumpOffers,
    rebillDiscountCode,
    higherInitialDiscountCode,
    freeGift,
    removeFreeGift,
    isNewCheckout = false,
    product,
  } = useNextData(currentProduct);

  return (
    <>
      <p style={{ marginTop: 20 }}>
        <u>Discount Code:</u> <strong>{discountCodes}</strong>
      </p>
      {rebillDiscountCode && (
        <p>
          <u>Rebill Discount Code:</u> <strong>{rebillDiscountCode}</strong>
        </p>
      )}
      {higherInitialDiscountCode && (
        <p>
          <u>Higher Initial Discount Code:</u>{" "}
          <strong>{higherInitialDiscountCode}</strong>
        </p>
      )}
      <p>
        <u>Klaviyo List ID:</u> <strong>{klaviyoListId}</strong>
      </p>
      <p>
        <u>SUB Variant ID:</u> <strong>{product?.subscriptionVariantID}</strong>
      </p>
      <p>
        <u>OTP Variant ID:</u> <strong>{product?.otpVariantID}</strong>
      </p>
      <p>
        <u>Is New Checkout:</u> <strong>{isNewCheckout ? `Yes` : `No`}</strong>
      </p>
      <hr />
      <p>
        <u>SUB Product ID:</u> <strong>{product?.productSubID}</strong>
      </p>
      <p>
        <u>OTP Product ID:</u> <strong>{product?.productOtpID}</strong>
      </p>

      <hr />
      {purchaseTab === TYPE_SUB && (
        <>
          {showBumpoffers ? (
            <BumpOffers bumpOffers={subBumpOffers} purchaseTab={purchaseTab} />
          ) : (
            <Product
              freeGift={freeGift}
              prices={subPrices}
              discountCodes={discountCodes}
              upsellUrl={subUpsellUrl}
              productId={productId}
              removeFreeGift={removeFreeGift}
            />
          )}
        </>
      )}
      {purchaseTab === TYPE_OTP && (
        <>
          {showBumpoffers ? (
            <BumpOffers bumpOffers={otpBumpOffers} purchaseTab={purchaseTab} />
          ) : (
            <Product
              prices={otpPrices}
              discountCodes={discountCodes}
              upsellUrl={otpUpsellUrl}
              productId={productId}
              removeFreeGift={removeFreeGift}
            />
          )}
        </>
      )}
    </>
  );
};

export default ProductDetails;
