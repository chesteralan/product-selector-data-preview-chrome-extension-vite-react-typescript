import { useEffect, useState } from "react";
import { isPresell } from "../utils/isPresell";
import { isUpsell } from "../utils/isUpsell";
import { isFunnel } from "../utils/isFunnel";
import { isEcom, isCollectionPage } from "../utils/isEcom";

const useCheckSite = () => {
  const [presell, setPresell] = useState(false);
  const [funnel, setFunnel] = useState(false);
  const [upsell, setUpsell] = useState(false);
  const [ecom, setEcom] = useState(false);
  const [collectionPage, setCollectionPage] = useState(false);
  useEffect(() => {
    setPresell(isPresell(window));
    setFunnel(isFunnel(window));
    setUpsell(isUpsell(window));
    setEcom(isEcom(window));
    setCollectionPage(isCollectionPage(window));
  }, []);
  return {
    isFunnel: funnel,
    isUpsell: upsell,
    isPresell: presell,
    isEcom: ecom,
    isCollectionPage: collectionPage,
  };
};

export default useCheckSite;
