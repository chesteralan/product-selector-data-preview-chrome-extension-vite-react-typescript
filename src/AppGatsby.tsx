import FloatingNav from './components/FloatingNav/FloatingNav';
import ProductsDataGatsby from './components/ProductsData/ProductsDataGatsby';

type Props = {
  funnelId: string;
  productSelectorId: string;
}

function AppGatsby(props: Props) {
  
  return (
    <>
      <FloatingNav {...props} />
      <ProductsDataGatsby />
    </>
  )
}

export default AppGatsby
