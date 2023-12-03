import {  useState } from "react";
import FunnelSelector from "../FunnelSelector/FunnelSelectorNextJs";
import StrapiEditLinks from "../FunnelSelector/NextJs/StrapiEditLinks/StrapiEditLinks";

type Props = {
    data: any;
};

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
  padding: `8px 8px 5px`,
  background: `#2196F3`,
  borderRadius: `10px 10px 0px 0px`,
  color: `rgb(255, 255, 255)`,
  position: `fixed`,
  bottom: `0px`,
  left: `0px`,
  zIndex: 9999,
  fontSize: 12
};

const ProductsDataNextJs = (props: Props) => {

    const { data } = props;

    const [show, setShow] = useState<boolean>(false);

    const page = data.props.pageProps?.page;
    
  return (
    <>
    {page && <>
      <div style={styles} onClick={() => setShow(!show)}>
        Product Data
      </div>
      {show ? (<>
          <FunnelSelector data={data} setShow={setShow} />
        </>) : null}
        </>}
      <StrapiEditLinks data={data} />
    </>
  );
};

export default ProductsDataNextJs;
