export const hasFunnelData = (data: any): boolean => {
  return !!data.result?.data?.["funnelPageData"] || false;
};

export const hasUpsellData = (data: any): boolean => {
  return !!data.result?.data?.["upsellCheckoutData"] || false;
};

export const hasProductData = (data: any): boolean => {
  return hasFunnelData(data) || hasUpsellData(data) || false;
};
