import PurchaseTypeTabs from "../PurchaseTypeTabs/PurchaseTypeTabs";
import { useState } from "react";
import { TYPE_SUB } from "../../../../utils/constants/purchaseType";
import ProductDetails from "../ProductDetails/ProductDetails";
import * as S from "../styles";

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
  const [showBumpoffers, setShowBumpoffers] = useState(false);

  const { product, setShow } = props;

  const productId = product.id;
  const otpPrices = product.prices.otpPrices;
  const subPrices = product.prices.subPrices;
  const subUpsellUrl = product.subUpsellUrl;

  const otpUpsellUrl = product.otpUpsellUrl;
  const klaviyoListId = product.klaviyoListId;

  const productDetails = {
    productId,
    otpPrices,
    subPrices,
    subUpsellUrl,
    otpUpsellUrl,
    klaviyoListId,
    purchaseTab,
    showBumpoffers,
    ...props,
  };

  return (
    <>
      <div style={S.DataWrapper} onClick={() => setShow(false)} />
      <div style={S.DataContainer}>
        <PurchaseTypeTabs
          selected={purchaseTab}
          setSelected={setPurchaseTab}
          showBumpoffers={showBumpoffers}
          setShowBumpoffers={setShowBumpoffers}
        />
        <ProductDetails {...productDetails} />
      </div>
    </>
  );
};

export default SingleProduct;
