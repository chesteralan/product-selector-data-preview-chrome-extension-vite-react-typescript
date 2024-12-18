import { useDataContext } from "../context/DataContext";

const useNextData = (currentProduct = 0) => {
  const data = useDataContext();
  const pageProps = data.props.pageProps;
  const page = pageProps?.initialPageStore?.page;
  const pageVariant = pageProps?.initialPageVariantStore?.pageVariant;
  const isPageVariant =
    data.page.includes("[variant]") || data.page.includes("[campaignId]");
  const override = pageVariant?.pageOverride;
  const promo = page?.promo?.pageOverride;
  const freeGift = page?.subFreeGiftOffer;
  const removeFreeGift = override?.removeFreeGift || false;
  const isMultipleProducts = page?.products?.length > 1 || false;

  const discountCodes =
    promo?.discountCode?.code ||
    override?.discountCode?.code ||
    page?.productDiscountCode?.code;
  const rebillDiscountCode =
    promo?.rebillDiscount?.code ||
    override?.rebillDiscount?.code ||
    page?.rebillDiscountCode?.code;
  const higherInitialDiscountCode =
    promo?.higherDiscount?.code ||
    override?.higherDiscount?.code ||
    page?.higherInitialDiscountCode?.code;

  // bump offers
  let otpBumpOffers = page?.otpBumpOffers;
  if (override?.otpBump.length > 0) otpBumpOffers = override?.otpBump;
  if (promo?.otpBump.length > 0) otpBumpOffers = promo?.otpBump;

  let subBumpOffers = page?.subBumpOffers;
  if (override?.subBump.length > 0) otpBumpOffers = override?.subBump;
  if (promo?.subBump.length > 0) otpBumpOffers = promo?.subBump;

  const locale = data?.locale;
  const locales = data?.locales;
  const slug = data?.query?.slug;
  const pageVariantId = pageVariant?.id;
  const promoId = page?.promo?.id;

  const products = page?.products;
  const product = products?.at(currentProduct);
  const productId = products?.at(currentProduct)?.id;
  const otpPrices = products?.at(currentProduct)?.prices?.otpPrices;
  const subPrices = products?.at(currentProduct)?.prices?.subPrices;
  const subUpsellUrl = products?.at(currentProduct)?.subUpsellUrl;

  const otpUpsellUrl = products?.at(currentProduct)?.otpUpsellUrl;
  const klaviyoListId = products?.at(currentProduct)?.klaviyoListId;
  const isEmailCampaign = data.page.startsWith("/email/");
  const pageId = page?.id;
  const isNewCheckout = page?.isNewCheckout;

  return {
    data,
    page,
    pageId,
    pageVariant,
    pageVariantId,
    isPageVariant,
    override,
    promo,
    promoId,
    isMultipleProducts,
    discountCodes,
    rebillDiscountCode,
    higherInitialDiscountCode,
    otpBumpOffers,
    subBumpOffers,
    locale,
    locales,
    slug,
    product,
    products,
    productId,
    otpPrices,
    subPrices,
    subUpsellUrl,
    otpUpsellUrl,
    klaviyoListId,
    freeGift,
    removeFreeGift,
    isEmailCampaign,
    isNewCheckout,
  };
};

export default useNextData;
