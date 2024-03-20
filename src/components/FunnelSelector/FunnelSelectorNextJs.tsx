import SingleProduct from "./NextJs/SingleProduct/SingleProduct";
import MultipleProducts from "./NextJs/MultipleProducts/MultipleProducts";
import useNextData from "../../hooks/useNextData";

type Props = {
  setShow: (value: boolean) => void;
};

const FunnelSelectorNextJs = ({ setShow }: Props) => {
  const { page, isMultipleProducts } = useNextData();

  if (!page) return null;

  return isMultipleProducts ? (
    <MultipleProducts setShow={setShow} />
  ) : (
    <SingleProduct setShow={setShow} />
  );
};

export default FunnelSelectorNextJs;
