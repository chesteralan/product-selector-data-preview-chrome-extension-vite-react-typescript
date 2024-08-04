import { useEffect, useState } from "react";
import { isPresell } from "../utils/isPresell";
import { isUpsell } from "../utils/isUpsell";
import { isFunnel } from "../utils/isFunnel";
import {
  isEcom,
  isCollectionPage,
  isCartPage,
  isHomePage,
  isEcomPdp,
} from "../utils/isEcom";
import { isProd } from "../utils/isProd";
import { isStaging } from "../utils/isStaging";

const useCheckSite = (data?: any) => {
  const [presell, setPresell] = useState(false);
  const [funnel, setFunnel] = useState(false);
  const [upsell, setUpsell] = useState(false);
  const [ecom, setEcom] = useState(false);
  const [ecomPdp, setEcomPdp] = useState(false);
  const [prod, setProd] = useState(false);
  const [staging, setStaging] = useState(false);
  const [collectionPage, setCollectionPage] = useState(false);
  const [cartPage, setCartPage] = useState(false);
  const [homePage, setHomePage] = useState(false);
  const [pageVariant, setPageVariant] = useState(false);
  const page = `${data?.page}`;
  useEffect(() => {
    const initValues = () => {
      setPresell(isPresell(window));
      setFunnel(isFunnel(window));
      setUpsell(isUpsell(window));
      setEcom(isEcom(window));
      setEcomPdp(isEcomPdp(window));
      setProd(isProd(window));
      setStaging(isStaging(window));
      setCollectionPage(isCollectionPage(window));
      setCartPage(isCartPage(window));
      setHomePage(isHomePage(window));
      setPageVariant(
        page.includes("[variant]") || page.includes("[campaignId]"),
      );
    };
    initValues();
  }, [page]);

  return {
    isFunnel: funnel,
    isUpsell: upsell,
    isPresell: presell,
    isEcom: ecom,
    isEcomPdp: ecomPdp,
    isCollectionPage: collectionPage,
    isCartPage: cartPage,
    isProd: prod,
    isStaging: staging,
    isHomePage: homePage,
    isPageVariant: pageVariant,
  };
};

export default useCheckSite;
