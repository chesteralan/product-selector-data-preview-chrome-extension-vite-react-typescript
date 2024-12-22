import { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import CartPage from "../CartPage/CartPage";
import CollectionPage from "../CollectionPage/CollectionPage";
import FunnelSelector from "../FunnelSelector/FunnelSelectorNextJs";
import StrapiEditLinks from "../FunnelSelector/NextJs/StrapiEditLinks/StrapiEditLinks";
import * as S from "./ProductsData.styles";

type Props = {
  data: any;
};

const ProductsDataNextJs = (props: Props) => {
  const { data } = props;

  const [show, setShow] = useState<boolean>(false);
  const [showCollectionMatrix, setShowCollectionMatrix] =
    useState<boolean>(false);
  const [showCartMatrix, setShowCartMatrix] = useState<boolean>(false);
  const { isMobile } = useWindowSize();
  const page = data.props.pageProps?.initialPageStore?.hasOwnProperty("page");

  return (
    <>
      {page && !isMobile ? (
        <>
          <div style={S.Container} onClick={() => setShow(!show)}>
            Product Data
          </div>
          {show ? (
            <>
              <FunnelSelector setShow={setShow} />
            </>
          ) : null}
        </>
      ) : null}
      <StrapiEditLinks
        toggleCollectionsMatrix={() =>
          setShowCollectionMatrix(!showCollectionMatrix)
        }
        toggleCartMatrix={() => setShowCartMatrix(!showCartMatrix)}
      />
      {showCollectionMatrix && (
        <CollectionPage
          data={data}
          toggleMatrix={() => setShowCollectionMatrix(!showCollectionMatrix)}
        />
      )}
      {showCartMatrix && (
        <CartPage
          data={data}
          toggleMatrix={() => setShowCartMatrix(!showCartMatrix)}
        />
      )}
    </>
  );
};

export default ProductsDataNextJs;
