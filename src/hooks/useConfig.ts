import { useEffect, useState } from "react";
import { getSiteRegion } from "../utils/getSiteRegion";
import { REGION_CA, REGION_UK, REGION_US } from "../utils/constants/region";

const useConfig = () => {
  const [strapiServerUrl, setStrapiServerUrl] = useState<string | null>(null);
  const [stagingUrl, setStagingUrl] = useState<string | null>(null);
  const [usStagingUrl, setUsStagingUrl] = useState<string | null>(null);
  const [caStagingUrl, setCaStagingUrl] = useState<string | null>(null);
  const [ukStagingUrl, setUkStagingUrl] = useState<string | null>(null);
  const [liveUrl, setLiveUrl] = useState<string | null>(null);
  const [usLiveUrl, setUsLiveUrl] = useState<string | null>(null);
  const [caLiveUrl, setCaLiveUrl] = useState<string | null>(null);
  const [ukLiveUrl, setUkLiveUrl] = useState<string | null>(null);
  const [localUrl, setLocalUrl] = useState<string | null>(null);
  const [devToolUrl, setDevToolUrl] = useState<string | null>(null);
  const [strapiLocalUrl, setStrapiLocalUrl] = useState<string | null>(null);

  // strapi cms
  const [strapiProdOrangeUrl, setStrapiProdOrangeUrl] = useState<string | null>(
    null,
  );
  const [strapiProdGreenUrl, setStrapiProdGreenUrl] = useState<string | null>(
    null,
  );
  const [strapiProdBlueUrl, setStrapiProdBlueUrl] = useState<string | null>(
    null,
  );
  const [strapiDevGreenUrl, setStrapiDevGreenUrl] = useState<string | null>(
    null,
  );
  const [strapiDevBlueUrl, setStrapiDevBlueUrl] = useState<string | null>(null);

  useEffect(() => {
    chrome.storage.local
      .get([
        "nextjsLocalUrl",
        "developerToolUrl",
        "strapiLocalUrl",
        "devStrapiGreenUrl",
        "devStrapiBlueUrl",
        "usNextjsStagingUrl",
        "usNextjsLiveUrl",
        "caNextjsStagingUrl",
        "caNextjsLiveUrl",
        "ukNextjsStagingUrl",
        "ukNextjsLiveUrl",
      ])
      .then((items) => {
        setLocalUrl(items.nextjsLocalUrl);
        setDevToolUrl(items.developerToolUrl);
        setStrapiLocalUrl(items.strapiLocalUrl);
        setStrapiDevGreenUrl(items.devStrapiGreenUrl);
        setStrapiDevBlueUrl(items.devStrapiBlueUrl);
        setUsStagingUrl(items.usNextjsStagingUrl);
        setUsLiveUrl(items.usNextjsLiveUrl);
        setCaStagingUrl(items.caNextjsStagingUrl);
        setCaLiveUrl(items.caNextjsLiveUrl);
        setUkStagingUrl(items.ukNextjsStagingUrl);
        setUkLiveUrl(items.ukNextjsLiveUrl);
      });

    const region = getSiteRegion();

    switch (region) {
      case REGION_CA:
        chrome.storage.local
          .get([
            "caStrapiServerUrl",
            "caNextjsStagingUrl",
            "caNextjsLiveUrl",
            "caStrapiGreenUrl",
            "caStrapiBlueUrl",
          ])
          .then((items: any) => {
            setStrapiServerUrl(items.caStrapiServerUrl);
            setStrapiProdOrangeUrl(items.caStrapiServerUrl);
            setStagingUrl(items.caNextjsStagingUrl);
            setLiveUrl(items.caNextjsLiveUrl);
            setStrapiProdGreenUrl(items.caStrapiGreenUrl);
            setStrapiProdBlueUrl(items.caStrapiBlueUrl);
          });
        break;
      case REGION_UK:
        chrome.storage.local
          .get([
            "ukStrapiServerUrl",
            "ukNextjsStagingUrl",
            "ukNextjsLiveUrl",
            "ukStrapiGreenUrl",
            "ukStrapiBlueUrl",
          ])
          .then((items: any) => {
            setStrapiServerUrl(items.ukStrapiServerUrl);
            setStrapiProdOrangeUrl(items.ukStrapiServerUrl);
            setStagingUrl(items.ukNextjsStagingUrl);
            setLiveUrl(items.ukNextjsLiveUrl);
            setStrapiProdGreenUrl(items.ukStrapiGreenUrl);
            setStrapiProdBlueUrl(items.ukStrapiBlueUrl);
          });
        break;
      default:
      case REGION_US:
        chrome.storage.local
          .get([
            "usStrapiServerUrl",
            "usNextjsStagingUrl",
            "usNextjsLiveUrl",
            "usStrapiGreenUrl",
            "usStrapiBlueUrl",
          ])
          .then((items: any) => {
            setStrapiServerUrl(items.usStrapiServerUrl);
            setStrapiProdOrangeUrl(items.usStrapiServerUrl);
            setStagingUrl(items.usNextjsStagingUrl);
            setLiveUrl(items.usNextjsLiveUrl);
            setStrapiProdGreenUrl(items.usStrapiGreenUrl);
            setStrapiProdBlueUrl(items.usStrapiBlueUrl);
          });
        break;
    }
  }, []);

  return {
    strapiServerUrl,
    stagingUrl,
    localUrl,
    liveUrl,
    devToolUrl,
    strapiDevGreenUrl,
    strapiDevBlueUrl,
    strapiProdOrangeUrl,
    strapiProdGreenUrl,
    strapiProdBlueUrl,
    usStagingUrl,
    caStagingUrl,
    ukStagingUrl,
    usLiveUrl,
    caLiveUrl,
    ukLiveUrl,
    strapiLocalUrl,
  };
};

export default useConfig;
