import useNextData from "../../hooks/useNextData";
import MultipleProducts from "./NextJs/MultipleProducts/MultipleProducts";
import SingleProduct from "./NextJs/SingleProduct/SingleProduct";

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
