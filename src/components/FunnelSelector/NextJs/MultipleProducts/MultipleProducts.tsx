import { useState } from "react";
import Selector from "../Selector/Selector";
import * as S from "../styles";
import PurchaseTypeTabs from "../PurchaseTypeTabs/PurchaseTypeTabs";
import { TYPE_SUB } from "../../../../utils/constants/purchaseType";
import ProductDetails from "../ProductDetails/ProductDetails";

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
  const [showBumpoffers, setShowBumpoffers] = useState(false);

  const { setShow, products } = props;

  const productId = products[currentProduct].id;
  const otpPrices = products[currentProduct].prices.otpPrices;
  const subPrices = products[currentProduct].prices.subPrices;
  const subUpsellUrl = products[currentProduct].subUpsellUrl;

  const otpUpsellUrl = products[currentProduct].otpUpsellUrl;
  const klaviyoListId = products[currentProduct].klaviyoListId;

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
        <div style={{ marginBottom: 20 }}>
          <Selector
            products={products}
            setCurrentProduct={setCurrentProduct}
            currentProduct={currentProduct}
          />
        </div>

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

export default MultipleProducts;
