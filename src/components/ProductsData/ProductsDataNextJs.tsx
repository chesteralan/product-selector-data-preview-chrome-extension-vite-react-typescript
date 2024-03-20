import { useState } from "react";
import FunnelSelector from "../FunnelSelector/FunnelSelectorNextJs";
import StrapiEditLinks from "../FunnelSelector/NextJs/StrapiEditLinks/StrapiEditLinks";
import CollectionPage from "../CollectionPage/CollectionPage";

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
  fontSize: 12,
};

const ProductsDataNextJs = (props: Props) => {
  const { data } = props;

  const [show, setShow] = useState<boolean>(false);
  const [showMatrix, setShowMatrix] = useState<boolean>(false);

  const page = data.props.pageProps?.initialPageStore?.page;

  return (
    <>
      {page && (
        <>
          <div style={styles} onClick={() => setShow(!show)}>
            Product Data
          </div>
          {show ? (
            <>
              <FunnelSelector setShow={setShow} />
            </>
          ) : null}
        </>
      )}
      <StrapiEditLinks
        data={data}
        toggleMatrix={() => setShowMatrix(!showMatrix)}
      />
      {showMatrix && (
        <CollectionPage
          data={data}
          toggleMatrix={() => setShowMatrix(!showMatrix)}
        />
      )}
    </>
  );
};

export default ProductsDataNextJs;
