import * as S from '../styles'

type Props = {
    products: any;
    setCurrentProduct: (index:number) => void;
    currentProduct: number;
}

const Selector = ({ products, currentProduct = 0, setCurrentProduct }: Props) => {
  return (
    <div style={S.SelectorContainer}>
        {products.map((product:any, index:number) => <div key={index} style={currentProduct === index ? S.SelectorItemSelected : S.SelectorItem} onClick={() => setCurrentProduct(index)}>{product.name}</div>)}
    </div>
  )
}

export default Selector