import useNextData from "../../../../hooks/useNextData";
import * as S from "../styles";

type Props = {
  setCurrentProduct: (index: number) => void;
  currentProduct: number;
};

const Selector = ({ currentProduct = 0, setCurrentProduct }: Props) => {
  const { products } = useNextData(currentProduct);

  return (
    <div style={S.SelectorContainer}>
      {products.map((product: any, index: number) => (
        <div
          key={index}
          style={
            currentProduct === index ? S.SelectorItemSelected : S.SelectorItem
          }
          onClick={() => setCurrentProduct(index)}
        >
          {product.name}
        </div>
      ))}
    </div>
  );
};

export default Selector;
