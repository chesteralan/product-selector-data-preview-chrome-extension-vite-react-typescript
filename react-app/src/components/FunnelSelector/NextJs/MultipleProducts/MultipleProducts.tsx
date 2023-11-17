import { useState } from "react";
import BumpOffers from "../BumpOffers/BumpOffers";
import Product from "../Product/Product";
import Selector from "../Selector/Selector";
import * as S from "../styles";
import PurchaseTypeTabs from "../PurchaseTypeTabs/PurchaseTypeTabs";
import { TYPE_OTP, TYPE_SUB } from "../../../../utils/constants/purchaseType";

type Props = {
  setShow: (value: boolean) => void;
  discountCodes: string;
  rebillDiscountCode: string;
  higherInitialDiscountCode: string;
  subBumpOffers: any;
  otpBumpOffers: any;
  locales: string[];
  slug: string;
  products: any[];
};

const MultipleProducts = (props: Props) => {
  const [currentProduct, setCurrentProduct] = useState<number>(0);
  const [purchaseTab, setPurchaseTab] = useState<string>(TYPE_SUB);
  const {
    setShow,
    discountCodes,
    rebillDiscountCode,
    higherInitialDiscountCode,
    subBumpOffers,
    otpBumpOffers,
    products,
  } = props;

  const productId = products[currentProduct].id;
  const otpPrices = products[currentProduct].prices.otpPrices;
  const subPrices = products[currentProduct].prices.subPrices;
  const subUpsellUrl = products[currentProduct].subUpsellUrl;

  const otpUpsellUrl = products[currentProduct].otpUpsellUrl;
  const klaviyoListId = products[currentProduct].klaviyoListId;

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

        <Selector
          products={products}
          setCurrentProduct={setCurrentProduct}
          currentProduct={currentProduct}
        />

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

export default MultipleProducts;
