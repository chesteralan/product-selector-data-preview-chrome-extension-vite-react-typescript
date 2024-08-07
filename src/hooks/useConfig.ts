import { useEffect, useState } from "react";
import { getSiteRegion } from "../utils/getSiteRegion";
import { REGION_US, REGIONS_LIST } from "../utils/constants/region";

const useConfig = () => {
  const [region, setRegion] = useState<string>(REGION_US);
  const [strapiServerUrl, setStrapiServerUrl] = useState<string | null>(null);
  const [stagingUrl, setStagingUrl] = useState<string | null>(null);
  const [liveUrl, setLiveUrl] = useState<string | null>(null);
  const [stagingEcomUrl, setStagingEcomUrl] = useState<string | null>(null);
  const [liveEcomUrl, setLiveEcomUrl] = useState<string | null>(null);
  const [usStagingUrl, setUsStagingUrl] = useState<string | null>(null);
  const [caStagingUrl, setCaStagingUrl] = useState<string | null>(null);
  const [ukStagingUrl, setUkStagingUrl] = useState<string | null>(null);
  const [deStagingUrl, setDeStagingUrl] = useState<string | null>(null);
  const [auStagingUrl, setAuStagingUrl] = useState<string | null>(null);
  const [usEcomStagingUrl, setUsEcomStagingUrl] = useState<string | null>(null);
  const [caEcomStagingUrl, setCaEcomStagingUrl] = useState<string | null>(null);
  const [ukEcomStagingUrl, setUkEcomStagingUrl] = useState<string | null>(null);
  const [deEcomStagingUrl, setDeEcomStagingUrl] = useState<string | null>(null);
  const [auEcomStagingUrl, setAuEcomStagingUrl] = useState<string | null>(null);
  const [usLiveUrl, setUsLiveUrl] = useState<string | null>(null);
  const [caLiveUrl, setCaLiveUrl] = useState<string | null>(null);
  const [ukLiveUrl, setUkLiveUrl] = useState<string | null>(null);
  const [deLiveUrl, setDeLiveUrl] = useState<string | null>(null);
  const [auLiveUrl, setAuLiveUrl] = useState<string | null>(null);
  const [usEcomLiveUrl, setUsEcomLiveUrl] = useState<string | null>(null);
  const [caEcomLiveUrl, setCaEcomLiveUrl] = useState<string | null>(null);
  const [ukEcomLiveUrl, setUkEcomLiveUrl] = useState<string | null>(null);
  const [deEcomLiveUrl, setDeEcomLiveUrl] = useState<string | null>(null);
  const [auEcomLiveUrl, setAuEcomLiveUrl] = useState<string | null>(null);
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
    const detectedRegion = getSiteRegion();
    setRegion(detectedRegion || REGION_US);

    chrome.storage?.local
      ?.get([
        "nextjsLocalUrl",
        "developerToolUrl",
        "strapiLocalUrl",
        "devStrapiGreenUrl",
        "devStrapiBlueUrl",
        ...REGIONS_LIST.map(
          (region) => `${region.toLowerCase()}NextjsStagingUrl`,
        ),
        ...REGIONS_LIST.map((region) => `${region.toLowerCase()}NextjsLiveUrl`),
        ...REGIONS_LIST.map(
          (region) => `${region.toLowerCase()}NextjsEcomStagingUrl`,
        ),
        ...REGIONS_LIST.map(
          (region) => `${region.toLowerCase()}NextjsEcomLiveUrl`,
        ),
      ])
      .then((items) => {
        setLocalUrl(items.nextjsLocalUrl);
        setDevToolUrl(items.developerToolUrl);
        setStrapiLocalUrl(items.strapiLocalUrl);
        setStrapiDevGreenUrl(items.devStrapiGreenUrl);
        setStrapiDevBlueUrl(items.devStrapiBlueUrl);
        // US
        setUsStagingUrl(items.usNextjsStagingUrl);
        setUsLiveUrl(items.usNextjsLiveUrl);
        setUsEcomStagingUrl(items.usNextjsEcomStagingUrl);
        setUsEcomLiveUrl(items.usNextjsEcomLiveUrl);
        // CA
        setCaStagingUrl(items.caNextjsStagingUrl);
        setCaLiveUrl(items.caNextjsLiveUrl);
        setCaEcomStagingUrl(items.caNextjsEcomStagingUrl);
        setCaEcomLiveUrl(items.caNextjsEcomLiveUrl);
        // UK
        setUkStagingUrl(items.ukNextjsStagingUrl);
        setUkLiveUrl(items.ukNextjsLiveUrl);
        setUkEcomStagingUrl(items.ukNextjsEcomStagingUrl);
        setUkEcomLiveUrl(items.ukNextjsEcomLiveUrl);
        // DE
        setDeStagingUrl(items.deNextjsStagingUrl);
        setDeLiveUrl(items.deNextjsLiveUrl);
        setDeEcomStagingUrl(items.deNextjsEcomStagingUrl);
        setDeEcomLiveUrl(items.deNextjsEcomLiveUrl);
        // AU
        setAuStagingUrl(items.auNextjsStagingUrl);
        setAuLiveUrl(items.auNextjsLiveUrl);
        setAuEcomStagingUrl(items.auNextjsEcomStagingUrl);
        setAuEcomLiveUrl(items.auNextjsEcomLiveUrl);
      });

    if (detectedRegion) {
      chrome.storage?.local
        ?.get([
          `${detectedRegion.toLowerCase()}StrapiServerUrl`,
          `${detectedRegion.toLowerCase()}NextjsStagingUrl`,
          `${detectedRegion.toLowerCase()}NextjsLiveUrl`,
          `${detectedRegion.toLowerCase()}NextjsEcomStagingUrl`,
          `${detectedRegion.toLowerCase()}NextjsEcomLiveUrl`,
          `${detectedRegion.toLowerCase()}StrapiGreenUrl`,
          `${detectedRegion.toLowerCase()}StrapiBlueUrl`,
        ])
        .then((items: any) => {
          setStrapiServerUrl(
            items[`${detectedRegion.toLowerCase()}StrapiServerUrl`],
          );
          setStrapiProdOrangeUrl(
            items[`${detectedRegion.toLowerCase()}StrapiServerUrl`],
          );
          setStagingUrl(
            items[`${detectedRegion.toLowerCase()}NextjsStagingUrl`],
          );
          setLiveUrl(items[`${detectedRegion.toLowerCase()}NextjsLiveUrl`]);
          setStagingEcomUrl(
            items[`${detectedRegion.toLowerCase()}NextjsEcomStagingUrl`],
          );
          setLiveEcomUrl(
            items[`${detectedRegion.toLowerCase()}NextjsEcomLiveUrl`],
          );
          setStrapiProdGreenUrl(
            items[`${detectedRegion.toLowerCase()}StrapiGreenUrl`],
          );
          setStrapiProdBlueUrl(
            items[`${detectedRegion.toLowerCase()}StrapiBlueUrl`],
          );
        });
    }
  }, []);

  const otherRegions = REGIONS_LIST.filter((r) => r !== region);

  return {
    region,
    otherRegions,
    strapiServerUrl,
    stagingUrl,
    stagingEcomUrl,
    localUrl,
    liveUrl,
    liveEcomUrl,
    devToolUrl,
    strapiDevGreenUrl,
    strapiDevBlueUrl,
    strapiProdOrangeUrl,
    strapiProdGreenUrl,
    strapiProdBlueUrl,
    usStagingUrl,
    caStagingUrl,
    ukStagingUrl,
    deStagingUrl,
    auStagingUrl,
    usLiveUrl,
    caLiveUrl,
    ukLiveUrl,
    deLiveUrl,
    auLiveUrl,
    usEcomStagingUrl,
    caEcomStagingUrl,
    ukEcomStagingUrl,
    deEcomStagingUrl,
    auEcomStagingUrl,
    usEcomLiveUrl,
    caEcomLiveUrl,
    ukEcomLiveUrl,
    deEcomLiveUrl,
    auEcomLiveUrl,
    strapiLocalUrl,
  };
};

export default useConfig;
