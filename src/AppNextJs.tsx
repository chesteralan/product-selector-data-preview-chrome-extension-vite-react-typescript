import FloatingNavFunnel from "./components/FloatingNav/FloatingNavFunnel";
import FloatingNavPromo from "./components/FloatingNav/FloatingNavPromo";
import ProductsDataNextJs from "./components/ProductsData/ProductsDataNextJs";
import { DataContext } from "./context/DataContext";
import useCheckSite from "./hooks/useCheckSite";

type Props = {
  data: any;
};

function AppNextJs(props: Props) {
  const { data } = props;
  const { isPresell, isFunnel } = useCheckSite();

  return (
    <DataContext.Provider value={data}>
      <ProductsDataNextJs data={data} />
      {isPresell && <FloatingNavPromo />}
      {isFunnel && <FloatingNavFunnel />}
    </DataContext.Provider>
  );
}

export default AppNextJs;
