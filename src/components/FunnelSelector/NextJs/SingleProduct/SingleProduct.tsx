import PackageJson from "../../../../../package.json";
import PurchaseTypeTabs from "../PurchaseTypeTabs/PurchaseTypeTabs";
import { useState } from "react";
import { TYPE_SUB } from "../../../../utils/constants/purchaseType";
import ProductDetails from "../ProductDetails/ProductDetails";
import * as S from "../styles";

type Props = {
  setShow: any;
};

const SingleProduct = (props: Props) => {
  const [purchaseTab, setPurchaseTab] = useState<string>(TYPE_SUB);
  const [showBumpoffers, setShowBumpoffers] = useState(false);

  const { setShow } = props;

  return (
    <>
      <div style={S.DataWrapper} onClick={() => setShow(false)} />
      <div style={S.DataContainer}>
        <div style={S.PackageJson}>v{PackageJson.version}</div>
        <PurchaseTypeTabs
          selected={purchaseTab}
          setSelected={setPurchaseTab}
          showBumpoffers={showBumpoffers}
          setShowBumpoffers={setShowBumpoffers}
        />
        <ProductDetails
          currentProduct={0}
          showBumpoffers={showBumpoffers}
          purchaseTab={purchaseTab}
        />
      </div>
    </>
  );
};

export default SingleProduct;
