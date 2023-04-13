import FloatingNav from './components/FloatingNav/FloatingNav';
import ProductsData from './components/ProductsData/ProductsData';

type Props = {
  funnelId: string;
  productSelectorId: string;
}

function AppGatsby(props: Props) {
  
  return (
    <>
      <FloatingNav {...props} />
      <ProductsData />
    </>
  )
}

export default AppGatsby
