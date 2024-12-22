import { useEffect, useState } from "react";
import { getPathname } from "../../utils/getPathname";
import {
  hasFunnelData,
  hasProductData,
  hasUpsellData,
} from "../../utils/hasProductData";
import { isUpsell } from "../../utils/isUpsell";
import FunnelSelector from "../FunnelSelector/FunnelSelectorGatsby";
import UpsellSelector from "../UpsellSelector/UpsellSelector";
import * as S from "./ProductsData.styles";

const ProductsDataGatsby = () => {
  const [found, setFound] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [showUpsell, setShowUpsell] = useState<boolean>(false);
  const [showFunnel, setShowFunnel] = useState<boolean>(false);
  const [selectorData, setSelectorData] = useState(null);

  useEffect(() => {
    const pathname = getPathname(window);
    if (pathname.length <= 1) return () => {};
    const pageData = `/page-data${pathname}/page-data.json`;
    try {
      fetch(pageData)
        .then(async (response) => {
          const data = await response.json();
          const hasData = hasProductData(data);
          if (hasData) console.log("Gatsby Data", data);
          setFound(hasData);
          setSelectorData(data);
          setShowUpsell(isUpsell(window) && hasUpsellData(data));
          setShowFunnel(!isUpsell(window) && hasFunnelData(data));
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return found ? (
    <>
      <div style={S.Container} onClick={() => setShow(!show)}>
        Product Data
      </div>
      {show ? (
        <>
          {showUpsell ? (
            <UpsellSelector
              data={(selectorData as any).result?.data?.upsellCheckoutData}
              setShow={setShow}
            />
          ) : null}
          {showFunnel ? (
            <FunnelSelector
              data={
                (selectorData as any).result?.data?.funnelPageData
                  ?.productSelector
              }
              setShow={setShow}
            />
          ) : null}
        </>
      ) : null}
    </>
  ) : null;
};

export default ProductsDataGatsby;
