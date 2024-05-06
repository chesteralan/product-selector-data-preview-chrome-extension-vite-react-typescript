import * as S from "./Selector.styles";

type Props = {
  setSelected?: (value: string) => void;
  selected?: string;
};

const Selector = ({ selected = "products", setSelected }: Props) => {
  return (
    <div style={S.SelectorContainer}>
      <div
        style={
          selected === "products" ? S.SelectorItemSelected : S.SelectorItem
        }
        onClick={() => setSelected && setSelected("products")}
      >
        Products
      </div>

      <div
        style={
          selected === "bumpoffers" ? S.SelectorItemSelected : S.SelectorItem
        }
        onClick={() => setSelected && setSelected("bumpoffers")}
      >
        Bump Offers
      </div>

      <div
        style={
          selected === "freegifts" ? S.SelectorItemSelected : S.SelectorItem
        }
        onClick={() => setSelected && setSelected("freegifts")}
      >
        Free Gifts
      </div>
    </div>
  );
};

export default Selector;
