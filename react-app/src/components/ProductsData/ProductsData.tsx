import { useEffect, useState } from "react";
import { hasProductData, hasUpsellData, hasFunnelData } from "../../utils/hasProductData";
import { isUpsell } from "../../utils/isUpsell";
import FunnelSelector from "../FunnelSelector/FunnelSelector";
import UpsellSelector from "../UpsellSelector/UpsellSelector";
import { getPathname } from '../../utils/getPathname';

type Props = {};

const styles: React.CSSProperties = {
  fontFamily: "sans-serif",
  cursor: `pointer`,
  borderWidth: `1px 1px 0px`,
  borderTopStyle: `solid`,
  borderRightStyle: `solid`,
  borderLeftStyle: `solid`,
  borderTopColor: `rgb(0, 0, 0)`,
  borderRightColor: `rgb(0, 0, 0)`,
  borderLeftColor: `rgb(0, 0, 0)`,
  borderImage: `initial`,
  marginLeft: `10px`,
  borderBottomStyle: `initial`,
  borderBottomColor: `initial`,
  padding: `10px 10px 5px`,
  background: `rgb(0, 28, 114)`,
  borderRadius: `10px 10px 0px 0px`,
  color: `rgb(255, 255, 255)`,
  position: `fixed`,
  bottom: `0px`,
  left: `0px`,
  zIndex: 9999,
};
const ProductsData = (props: Props) => {
  const [found, setFound] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [showUpsell, setShowUpsell] = useState<boolean>(false);
  const [showFunnel, setShowFunnel] = useState<boolean>(false);
  const [selectorData, setSelectorData] = useState(null);

  useEffect(() => {
    const pageData = `/page-data${getPathname(window)}/page-data.json`;
    try {
      fetch(pageData)
        .then(async (response) => {
          const data = await response.json();
          setFound( hasProductData(data) );
          setSelectorData(data);
          setShowUpsell( isUpsell(window) && hasUpsellData(data) );
          setShowFunnel( !isUpsell(window) && hasFunnelData(data) );
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
      <div style={styles} onClick={() => setShow(!show)}>
        Product Data
      </div>
      {show ? (<>
        {showUpsell ? <UpsellSelector 
          data={(selectorData as any).result?.data?.upsellCheckoutData}
          setShow={setShow}
          /> : null}
        {showFunnel ? <FunnelSelector
          data={(selectorData as any).result?.data?.funnelPageData?.productSelector}
          setShow={setShow}
        /> : null}
        </>
      ) : null}
    </>
  ) : null;
};

export default ProductsData;
