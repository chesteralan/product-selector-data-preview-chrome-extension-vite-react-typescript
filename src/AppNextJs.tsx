import FloatingNavPromo from "./components/FloatingNav/FloatingNavPromo";
import ProductsDataNextJs from "./components/ProductsData/ProductsDataNextJs";

type Props = {
  data: any;
};

function AppNextJs(props: Props) {
  const { data } = props;
  return (
    <>
      <ProductsDataNextJs data={data} />
      <FloatingNavPromo />
    </>
  );
}

export default AppNextJs;
