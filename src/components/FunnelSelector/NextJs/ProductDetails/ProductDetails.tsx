import Product from "../Product/Product";
import BumpOffers from "../BumpOffers/BumpOffers";
import { TYPE_OTP, TYPE_SUB } from "../../../../utils/constants/purchaseType";

type Props = {
  productId: any;
  otpPrices: any;
  subPrices: any;
  subUpsellUrl: any;
  otpUpsellUrl: any;
  klaviyoListId: any;
  purchaseTab: any;
  showBumpoffers: any;
  discountCodes: any;
  subBumpOffers: any;
  otpBumpOffers: any;
  rebillDiscountCode: any;
  higherInitialDiscountCode: any;
};

const ProductDetails = (props: Props) => {
  const {
    productId,
    otpPrices,
    subPrices,
    subUpsellUrl,
    otpUpsellUrl,
    klaviyoListId,
    purchaseTab,
    showBumpoffers,
    discountCodes,
    subBumpOffers,
    otpBumpOffers,
    rebillDiscountCode,
    higherInitialDiscountCode,
  } = props;

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
