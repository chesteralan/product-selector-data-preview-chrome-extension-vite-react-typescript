import { useState } from "react";
import Selector from "../Selector/Selector";
import * as S from "../styles";
import PurchaseTypeTabs from "../PurchaseTypeTabs/PurchaseTypeTabs";
import { TYPE_SUB } from "../../../../utils/constants/purchaseType";
import ProductDetails from "../ProductDetails/ProductDetails";
import PackageJson from "../../../../../package.json";

type Props = {
  setShow: (value: boolean) => void;
};

const MultipleProducts = (props: Props) => {
  const [currentProduct, setCurrentProduct] = useState<number>(0);
  const [purchaseTab, setPurchaseTab] = useState<string>(TYPE_SUB);
  const [showBumpoffers, setShowBumpoffers] = useState(false);

  const { setShow } = props;

  return (
    <>
      <div style={S.DataWrapper} onClick={() => setShow(false)} />
      <div style={S.DataContainer}>
        <div style={S.PackageJson}>v{PackageJson.version}</div>
        <div style={{ marginBottom: 20 }}>
          <Selector
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
        <ProductDetails
          currentProduct={currentProduct}
          showBumpoffers={showBumpoffers}
          purchaseTab={purchaseTab}
        />
      </div>
    </>
  );
};

export default MultipleProducts;
