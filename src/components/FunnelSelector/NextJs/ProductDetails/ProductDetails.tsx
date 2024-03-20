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
            />
          )}
        </>
      )}
    </>
  );
};

export default ProductDetails;
