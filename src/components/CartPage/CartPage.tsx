import * as S from "./CartPage.styles";
import Selector from "./Selector/Selector";
import { useState } from "react";
import Products from "./Products/Products";
import BumpOffers from "./BumpOffers/BumpOffers";
import FreeGifts from "./FreeGifts/FreeGifts";

type Props = {
  data: any;
  toggleMatrix: any;
};

const CartPage = ({ data, toggleMatrix }: Props) => {
  const pages = data?.props?.pageProps?.initialPagesQueryStore?.pages;
  const bumpOffers = data?.props?.pageProps?.initialBumpOffersStore?.bumpOffers;
  const freeGifts = data?.props?.pageProps?.initialFreeGiftsStore?.freeGifts;
  const [selected, setSelected] = useState<string>("products");
  return (
    <>
      <div style={S.Wrapper} onClick={toggleMatrix} />
      <div style={S.Container}>
        <Selector selected={selected} setSelected={setSelected} />

        {selected === "products" && <Products pages={pages} />}
        {selected === "bumpoffers" && <BumpOffers bumpOffers={bumpOffers} />}
        {selected === "freegifts" && <FreeGifts freeGifts={freeGifts} />}
      </div>
    </>
  );
};

export default CartPage;
