import SingleProduct from "./NextJs/SingleProduct/SingleProduct";
import MultipleProducts from "./NextJs/MultipleProducts/MultipleProducts";

type Props = {
  data: any;
  setShow: (value: boolean) => void;
};

const FunnelSelectorNextJs = ({ data, setShow }: Props) => {
  const page = data.props.pageProps?.initialPageStore?.page;

  if (!page) return null;
  const isMultipleProducts = page.products?.length > 1 || false;

  const discountCodes = page.productDiscountCode.code;
  const rebillDiscountCode = page.rebillDiscountCode?.code;
  const higherInitialDiscountCode = page.higherInitialDiscountCode?.code;
  const otpBumpOffers = page.otpBumpOffers;
  const subBumpOffers = page.subBumpOffers;

  const locales = data.locales;
  const slug = data.query.slug;

  return isMultipleProducts ? (
    <MultipleProducts
      setShow={setShow}
      discountCodes={discountCodes}
      rebillDiscountCode={rebillDiscountCode}
      higherInitialDiscountCode={higherInitialDiscountCode}
      otpBumpOffers={otpBumpOffers}
      subBumpOffers={subBumpOffers}
      products={page.products}
      locales={locales}
      slug={slug}
    />
  ) : (
    <SingleProduct
      setShow={setShow}
      discountCodes={discountCodes}
      rebillDiscountCode={rebillDiscountCode}
      higherInitialDiscountCode={higherInitialDiscountCode}
      otpBumpOffers={otpBumpOffers}
      subBumpOffers={subBumpOffers}
      product={page.products[0]}
      locales={locales}
      slug={slug}
    />
  );
};

export default FunnelSelectorNextJs;
