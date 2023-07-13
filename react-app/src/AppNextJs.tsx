import FloatingNavNextJs from './components/FloatingNav/FloatingNavNextJs';
import ProductsDataNextJs from './components/ProductsData/ProductsDataNextJs';

type Props = {
    funnelId: string;
    productSelectorId: string;
    data: any;
  }

function AppNextJs(props: Props) {
  const { data, ...rest } = props;
  return (
    <>
      <FloatingNavNextJs {...rest} />
      <ProductsDataNextJs data={data} />
    </>
  )
}

export default AppNextJs
