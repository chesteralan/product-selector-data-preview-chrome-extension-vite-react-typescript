import * as S from "../styles";
import Product from "../Product/Product";
import BumpOffers from "../BumpOffers/BumpOffers";
import PurchaseTypeTabs from "../PurchaseTypeTabs/PurchaseTypeTabs";
import { useState } from "react";
import { TYPE_OTP, TYPE_SUB } from "../../../../utils/constants/purchaseType";

type Props = {
  setShow: any;
  discountCodes: string;
  rebillDiscountCode: string;
  higherInitialDiscountCode: string;
  subBumpOffers: any;
  otpBumpOffers: any;
  locales: string[];
  slug: string;
  product: any;
};

const SingleProduct = (props: Props) => {
  const [purchaseTab, setPurchaseTab] = useState<string>(TYPE_SUB);

  const {
    setShow,
    discountCodes,
    rebillDiscountCode,
    higherInitialDiscountCode,
    subBumpOffers,
    otpBumpOffers,
    product,
  } = props;

  const productId = product.id;
  const otpPrices = product.prices.otpPrices;
  const subPrices = product.prices.subPrices;
  const subUpsellUrl = product.subUpsellUrl;

  const otpUpsellUrl = product.otpUpsellUrl;
  const klaviyoListId = product.klaviyoListId;

  return (
    <>
      <div style={S.DataWrapper} onClick={() => setShow(false)} />
      <div style={S.DataContainer}>
        <p>
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

        <br />
        <PurchaseTypeTabs selected={purchaseTab} setSelected={setPurchaseTab} />
        <br />
        <hr />
        {purchaseTab === TYPE_SUB && (
          <>
            <Product
              prices={subPrices}
              discountCodes={discountCodes}
              upsellUrl={subUpsellUrl}
              productId={productId}
            />
            <BumpOffers bumpOffers={subBumpOffers} />
          </>
        )}
        {purchaseTab === TYPE_OTP && (
          <>
            <Product
              prices={otpPrices}
              discountCodes={discountCodes}
              upsellUrl={otpUpsellUrl}
              productId={productId}
            />
            <BumpOffers bumpOffers={otpBumpOffers} />
          </>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
