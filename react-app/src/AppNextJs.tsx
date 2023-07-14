import ProductsDataNextJs from './components/ProductsData/ProductsDataNextJs';

type Props = {
    data: any;
  }

function AppNextJs(props: Props) {
  const { data } = props;
  return (
    <>
      <ProductsDataNextJs data={data} />
    </>
  )
}

export default AppNextJs
